/**
 * Training Quiz Enhancements
 * Adds interactive features to quizzes:
 * - Answer explanations on wrong answer
 * - Animated feedback
 * - Question review mode after quiz
 */

(function () {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuizEnhancements);
    } else {
        initQuizEnhancements();
    }

    function initQuizEnhancements() {
        // Patch selectAnswer for instant feedback
        patchSelectAnswer();

        // Add enhancement styles
        addQuizEnhancementStyles();

        console.log('✅ Quiz Enhancements loaded');
    }

    /**
     * Patch selectAnswer to record answer silently (no immediate feedback)
     * Score is shown only at the end with 10/10 requirement to proceed
     */
    function patchSelectAnswer() {
        const originalSelectAnswer = window.selectAnswer;
        if (!originalSelectAnswer) {
            setTimeout(patchSelectAnswer, 100);
            return;
        }

        window.selectAnswer = function (index) {
            // Just mark the selected option visually (no correct/incorrect indication)
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach(btn => btn.classList.remove('selected'));
            buttons[index].classList.add('selected');

            // Call original to store answer and enable next button
            originalSelectAnswer.call(this, index);
        };
    }


    // Note: showAnswerFeedback and getDefaultExplanation removed
    // Per-question feedback is disabled - total score shown only at end


    /**
     * Add quiz enhancement styles
     */
    function addQuizEnhancementStyles() {
        if (document.getElementById('quiz-enhancement-styles')) return;

        const style = document.createElement('style');
        style.id = 'quiz-enhancement-styles';
        style.textContent = `
            /* Option button states */
            .option-btn.correct {
                background: rgba(16, 185, 129, 0.3) !important;
                border-color: #10B981 !important;
                color: #10B981 !important;
                position: relative;
            }
            
            .option-btn.correct::after {
                content: '✓';
                position: absolute;
                right: 15px;
                font-size: 1.2em;
            }
            
            .option-btn.incorrect {
                background: rgba(239, 68, 68, 0.3) !important;
                border-color: #EF4444 !important;
                color: #EF4444 !important;
                animation: shake 0.5s ease;
            }
            
            .option-btn.incorrect::after {
                content: '✗';
                position: absolute;
                right: 15px;
                font-size: 1.2em;
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-5px); }
                40%, 80% { transform: translateX(5px); }
            }
            
            /* Answer feedback popup */
            .answer-feedback {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: linear-gradient(135deg, #1E293B, #0F172A);
                border-radius: 16px;
                padding: 20px 30px;
                display: flex;
                align-items: center;
                gap: 15px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                z-index: 10000;
                opacity: 0;
                transition: all 0.3s ease;
                max-width: 500px;
            }
            
            .answer-feedback.visible {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            
            .answer-feedback.correct {
                border: 2px solid #10B981;
            }
            
            .answer-feedback.incorrect {
                border: 2px solid #EF4444;
            }
            
            .feedback-icon {
                font-size: 2em;
                flex-shrink: 0;
            }
            
            .feedback-text {
                color: #F8FAFC;
            }
            
            .feedback-text strong {
                display: block;
                font-size: 1.1em;
                margin-bottom: 5px;
            }
            
            .feedback-text p {
                margin: 0;
                color: #94A3B8;
                font-size: 0.9em;
                line-height: 1.4;
            }
            
            /* Disable pointer events on answered options */
            .option-btn:disabled {
                cursor: not-allowed;
                pointer-events: none;
            }
            
            /* Pulse animation for correct answer */
            .option-btn.correct {
                animation: correctPulse 0.6s ease;
            }
            
            @keyframes correctPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.02); }
                100% { transform: scale(1); }
            }
            
            /* Mobile responsive */
            @media (max-width: 600px) {
                .answer-feedback {
                    left: 10px;
                    right: 10px;
                    transform: translateX(0) translateY(100px);
                    max-width: none;
                }
                
                .answer-feedback.visible {
                    transform: translateX(0) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
})();
