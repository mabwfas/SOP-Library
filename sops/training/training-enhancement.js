/**
 * Training Enhancement Overlay
 * Patches existing training apps with new features:
 * - Score saving with TrainingCore
 * - Quiz timer
 * - Attempt tracking
 * - Better results display
 */

(function () {
    'use strict';

    // Wait for DOM and TrainingCore
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEnhancement);
    } else {
        initEnhancement();
    }

    function initEnhancement() {
        // Wait for TrainingCore
        if (!window.TrainingCore) {
            setTimeout(initEnhancement, 100);
            return;
        }

        // Get module ID from URL
        const moduleId = getModuleId();
        if (!moduleId) return;

        // Quiz timer state
        let quizStartTime = null;

        // Sync profile name
        syncProfileName(moduleId);

        // Patch the startQuiz function
        patchStartQuiz(moduleId);

        // Patch the showResults function
        patchShowResults(moduleId);

        // Patch openTask to stop timer when exiting quiz
        patchOpenTask();

        // Add styles
        addEnhancementStyles();

        console.log('✅ Training Enhancement loaded for:', moduleId);
    }

    /**
     * Get module ID from current page URL
     */
    function getModuleId() {
        const path = window.location.pathname;
        const match = path.match(/(\w+)-training\.html/);
        return match ? match[1] : null;
    }

    /**
     * Sync profile name from module-specific storage
     */
    function syncProfileName(moduleId) {
        const nameKey = `${moduleId}TraineeName`;
        const name = localStorage.getItem(nameKey);
        if (name) {
            window.TrainingCore.setProfile({ name });
        }
    }

    /**
     * Patch startQuiz to add timer
     */
    function patchStartQuiz(moduleId) {
        const originalStartQuiz = window.startQuiz;
        if (!originalStartQuiz) return;

        window.startQuiz = function (taskIndex) {
            // Record start time
            window._quizStartTime = Date.now();

            // Show timer
            showTimer();

            // Call original with error handling
            try {
                originalStartQuiz.call(this, taskIndex);
            } catch (err) {
                console.error('[TrainingEnhancement] startQuiz failed:', err);
                // Hide timer on error so user doesn't see a floating timer
                const timerEl = document.getElementById('quizTimer');
                if (timerEl) timerEl.remove();
                // Show error message in main content area
                const container = document.getElementById('taskView') || document.getElementById('mainContent');
                if (container) {
                    container.innerHTML = `
                        <div style="text-align:center; padding:60px 20px;">
                            <div style="font-size:3em; margin-bottom:20px;">⚠️</div>
                            <h2 style="color:#F59E0B;">Quiz Not Available</h2>
                            <p style="color:#94A3B8; max-width:400px; margin:10px auto;">
                                Quiz data for this task could not be loaded. Please refresh the page and try again.
                            </p>
                        </div>`;
                }
            }
        };
    }

    /**
     * Patch showResults to save scores
     */
    function patchShowResults(moduleId) {
        const originalShowResults = window.showResults;
        if (!originalShowResults) return;

        window.showResults = function () {
            // ALWAYS stop the timer first — before anything that might error
            hideTimer();

            // Calculate time taken
            const timeTaken = window._quizStartTime
                ? Math.round((Date.now() - window._quizStartTime) / 1000)
                : 0;

            try {
                // Get score from current state
                const quiz = window.currentQuiz;
                // IMPORTANT: let/const at top-level don't create window properties.
                // Access global lexical variables directly (not via window.xxx).
                const _userAnswers = (typeof userAnswers !== 'undefined') ? userAnswers : [];
                const _currentTask = (typeof currentTask !== 'undefined') ? currentTask : 0;
                const _trainingTasks = (typeof trainingTasks !== 'undefined') ? trainingTasks : [];
                const totalQuestions = quiz ? quiz.length : 10;

                let correct = 0;
                if (quiz) {
                    quiz.forEach((q, idx) => {
                        if (_userAnswers[idx] === q.c) correct++;
                    });
                }

                const passed = correct === totalQuestions;
                const taskId = _trainingTasks[_currentTask]?.id || (_currentTask + 1);

                // Save to TrainingCore
                const result = window.TrainingCore.saveQuizResult(moduleId, taskId, {
                    score: correct,
                    total: totalQuestions,
                    passed: passed,
                    timeTaken: timeTaken
                });

                // Store for display
                window._lastQuizResult = {
                    ...result,
                    moduleId,
                    taskId
                };

                // Call original
                originalShowResults.call(this);

                // Enhance results display
                setTimeout(() => enhanceResultsDisplay(result, moduleId, taskId), 100);
            } catch (err) {
                console.error('[TrainingEnhancement] showResults error:', err);
                // Still call original so the quiz results show
                originalShowResults.call(this);
            }
        };
    }

    /**
     * Patch openTask to stop timer when exiting quiz
     */
    function patchOpenTask() {
        const originalOpenTask = window.openTask;
        if (!originalOpenTask) return;

        window.openTask = function(index) {
            // Always stop timer when navigating away from quiz
            hideTimer();
            originalOpenTask.call(this, index);
        };
    }

    /**
     * Show quiz timer
     */
    function showTimer() {
        let timer = document.getElementById('quizTimer');
        if (!timer) {
            timer = document.createElement('div');
            timer.id = 'quizTimer';
            timer.innerHTML = '<span class="timer-icon">⏱️</span><span class="timer-value">00:00</span>';
            document.body.appendChild(timer);
        }

        timer.style.display = 'flex';

        // Update timer every second
        if (window._timerInterval) clearInterval(window._timerInterval);

        window._timerInterval = setInterval(() => {
            const elapsed = Math.round((Date.now() - window._quizStartTime) / 1000);
            const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
            const secs = String(elapsed % 60).padStart(2, '0');
            const timerValue = timer.querySelector('.timer-value');
            if (timerValue) {
                timerValue.textContent = `${mins}:${secs}`;
            }
        }, 1000);
    }

    /**
     * Hide quiz timer
     */
    function hideTimer() {
        const timer = document.getElementById('quizTimer');
        if (timer) timer.style.display = 'none';
        if (window._timerInterval) {
            clearInterval(window._timerInterval);
            window._timerInterval = null;
        }
    }

    /**
     * Enhance results display with stats
     */
    function enhanceResultsDisplay(result, moduleId, taskId) {
        const resultsContainer = document.querySelector('.quiz-results');
        if (!resultsContainer) return;

        // Get historical data
        const attempts = window.TrainingCore.getAttempts(moduleId, taskId);
        const bestScore = window.TrainingCore.getBestScore(moduleId, taskId);
        const streak = window.TrainingCore.getCurrentStreak();

        // Create stats panel
        const statsPanel = document.createElement('div');
        statsPanel.className = 'enhanced-stats-panel';
        statsPanel.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-icon">⏱️</span>
                    <span class="stat-label">Time</span>
                    <span class="stat-value">${window.TrainingCore.formatTime(result.timeTaken)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🔄</span>
                    <span class="stat-label">Attempt</span>
                    <span class="stat-value">#${attempts}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🏆</span>
                    <span class="stat-label">Best</span>
                    <span class="stat-value">${bestScore ? Math.round((bestScore.score / bestScore.total) * 100) : 0}%</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🔥</span>
                    <span class="stat-label">Streak</span>
                    <span class="stat-value">${streak} day${streak !== 1 ? 's' : ''}</span>
                </div>
            </div>
        `;

        // Insert after score
        const scoreElement = resultsContainer.querySelector('.results-score, .results-message');
        if (scoreElement) {
            scoreElement.parentNode.insertBefore(statsPanel, scoreElement.nextSibling);
        } else {
            resultsContainer.appendChild(statsPanel);
        }
    }

    /**
     * Add enhancement styles
     */
    function addEnhancementStyles() {
        if (document.getElementById('training-enhancement-styles')) return;

        const style = document.createElement('style');
        style.id = 'training-enhancement-styles';
        style.textContent = `
            #quizTimer {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #1E293B, #0F172A);
                border: 1px solid #3B82F6;
                border-radius: 12px;
                padding: 10px 20px;
                color: #F8FAFC;
                font-family: 'Consolas', monospace;
                font-size: 1.2em;
                display: none;
                align-items: center;
                gap: 10px;
                z-index: 10000;
                box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
            }
            
            #quizTimer .timer-icon {
                font-size: 1.3em;
            }
            
            #quizTimer .timer-value {
                font-weight: 700;
                letter-spacing: 2px;
            }
            
            .enhanced-stats-panel {
                margin: 20px 0;
                padding: 20px;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 12px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
            }
            
            .stat-item {
                text-align: center;
                padding: 10px;
                background: rgba(255, 255, 255, 0.02);
                border-radius: 8px;
            }
            
            .stat-item .stat-icon {
                display: block;
                font-size: 1.5em;
                margin-bottom: 5px;
            }
            
            .stat-item .stat-label {
                display: block;
                font-size: 0.7em;
                color: rgba(255, 255, 255, 0.5);
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 3px;
            }
            
            .stat-item .stat-value {
                display: block;
                font-size: 1.1em;
                font-weight: 700;
                color: #10B981;
            }
            
            @media (max-width: 600px) {
                .stats-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                #quizTimer {
                    top: 10px;
                    right: 10px;
                    font-size: 1em;
                    padding: 8px 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }
})();
