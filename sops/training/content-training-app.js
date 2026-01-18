// Sales Training Application Logic

// State Management
let currentTask = 0;
let currentQuestion = 0;
let userAnswers = [];
let progress = JSON.parse(localStorage.getItem('contentTrainingProgress')) || { completedTasks: [], currentTask: 1 };
let traineeName = localStorage.getItem('contentTraineeName') || '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide welcome screen immediately
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) welcomeScreen.style.display = 'none';

    renderTasksList();
    updateProgressBar();

    // Auto-load: Always open first incomplete task (never show welcome screen)
    const firstIncompleteIndex = trainingTasks.findIndex(t => !progress.completedTasks.includes(t.id));
    const taskToOpen = firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0;
    if (typeof openTask === 'function') {
        setTimeout(() => openTask(taskToOpen), 50);
    }

    // Show name prompt if not set
    if (!traineeName) {
        showNamePrompt();
    }
});

// Render Tasks List
function renderTasksList() {
    const container = document.getElementById('tasksList');
    container.innerHTML = '';

    trainingTasks.forEach((task, index) => {
        const isCompleted = progress.completedTasks.includes(task.id);
        const isCurrent = task.id === progress.currentTask;
        const isLocked = task.id > progress.currentTask;

        const card = document.createElement('div');
        card.className = `task-card ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`;
        card.innerHTML = `
            <div class="task-number">${isCompleted ? '✓' : task.id}</div>
            <div class="task-info">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <div class="task-status">${isCompleted ? '✅' : isLocked ? '🔒' : '→'}</div>
        `;

        if (!isLocked) {
            card.onclick = () => openTask(index);
        }

        container.appendChild(card);
    });
}

// Update Progress Bar
function updateProgressBar() {
    const percent = progress.completedTasks.length * 10;
    document.getElementById('progressPercent').textContent = `${percent}%`;
    document.getElementById('progressFill').style.width = `${percent}%`;

    // Show/hide certificate button based on completion
    const certBtn = document.getElementById('certificateBtn');
    if (certBtn) {
        certBtn.style.display = progress.completedTasks.length === 10 ? 'block' : 'none';
    }
}

// Open Task
function openTask(index) {
    currentTask = index;
    const task = trainingTasks[index];
    const container = document.getElementById('taskView');

    // UI Switching
    document.getElementById('welcomeScreen').style.display = 'none';
    container.style.display = 'block';

    // Highlight in sidebar - Update visual state without re-rendering list
    const cards = document.querySelectorAll('.task-card');
    cards.forEach(card => card.classList.remove('current'));
    if (cards[index]) cards[index].classList.add('current');

    // Render task content
    let html = `
        <div class="task-view-header">
            <h2>Task ${task.id}: ${task.title}</h2>
        </div>
    `;

    // Study Guide (only if defined in data)
    if (task.studyGuide && task.studyGuide.length > 0) {
        html += `
            <div class="study-guide">
                <h4>📚 Before You Begin</h4>
                <ul>
                    ${task.studyGuide.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Content First (Task 1 only)
    if (task.contentFirst && index === 0) {
        html += task1Content;
        html += `
            <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (10/10 Required)</button>
                
            </div>
        `;
    } else {
        // Use full content from data file if available, otherwise show placeholder
        const taskContentVars = {
            2: window['task2Content'] || null,
            3: window['task3Content'] || null,
            4: window['task4Content'] || null,
            5: window['task5Content'] || null,
            6: window['task6Content'] || null,
            7: window['task7Content'] || null,
            8: window['task8Content'] || null,
            9: window['task9Content'] || null,
            10: window['task10Content'] || null
        };

        const fullContent = taskContentVars[task.id];

        if (fullContent) {
            // Show full teaching content (like Task 1)
            html += fullContent;
            html += `
                <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (${index === 9 ? '20/20' : '10/10'} Required)</button>
                    
                </div>
            `;
        } else {
            // Placeholder for tasks without full content yet
            html += `
                <div class="content-section">
                    <h3>📖 Task ${task.id}: ${task.title}</h3>
                    <div class="warning-box">
                        <strong>⚠️ Content Coming Soon</strong><br>
                        Full teaching content for this task is being developed. For now, study the concepts listed above.
                    </div>
                </div>
                <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="nav-btn" onclick="startQuiz(${index})">📝 Start Quiz (${index === 9 ? '20/20' : '10/10'} Required)</button>
                    
                </div>
            `;
        }
    }

    container.innerHTML = html;

    // Render diagrams if any
    if (window.renderMermaid) {
        window.renderMermaid();
    }
}


// Close Task (Reset to Welcome Screen)
function closeTask() {
    document.getElementById('taskView').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'flex';
}

// Start Quiz
function startQuiz(taskIndex) {
    currentTask = taskIndex;
    currentQuestion = 0;
    userAnswers = [];

    const quiz = allQuizzes[taskIndex];
    // Shuffle questions
    const shuffled = [...quiz].sort(() => Math.random() - 0.5);
    window.currentQuiz = shuffled;

    renderQuestion();
}

// Render Question
function renderQuestion() {
    const container = document.getElementById('taskView');
    const task = trainingTasks[currentTask];
    const quiz = window.currentQuiz;
    const q = quiz[currentQuestion];
    const totalQuestions = currentTask === 9 ? 20 : 10;

    // Shuffle options with tracking
    const optionsWithIndex = q.o.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const shuffledOptions = [...optionsWithIndex].sort(() => Math.random() - 0.5);
    window.currentOptions = shuffledOptions;

    let html = `
        <div class="task-view-header">
            <button class="back-btn" onclick="openTask(currentTask)">← Exit Quiz</button>
            <h2>Task ${task.id}: ${task.title}</h2>
        </div>
        <div class="quiz-section">
            <div class="quiz-header">
                <h3>Question ${currentQuestion + 1} of ${totalQuestions}</h3>
                <p class="quiz-progress">Score 10/10 to unlock next task</p>
            </div>
            <div class="question-container">
                <div class="question-text">${q.q}</div>
                <div class="options-list">
                    ${shuffledOptions.map((opt, idx) => `
                        <button class="option-btn" onclick="selectAnswer(${idx})">${String.fromCharCode(65 + idx)}) ${opt.text}</button>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-nav">
                <button class="nav-btn" ${currentQuestion === 0 ? 'disabled' : ''} onclick="prevQuestion()">← Previous</button>
                <button class="nav-btn" id="nextBtn" disabled onclick="nextQuestion()">Next →</button>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// Select Answer
function selectAnswer(index) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');

    // Store answer with original index for correct checking
    userAnswers[currentQuestion] = window.currentOptions[index].originalIndex;
    document.getElementById('nextBtn').disabled = false;
}

// Next Question
function nextQuestion() {
    const totalQuestions = currentTask === 9 ? 20 : 10;
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
}

// Previous Question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// Show Results
function showResults() {
    const container = document.getElementById('taskView');
    const task = trainingTasks[currentTask];
    const quiz = window.currentQuiz;
    const totalQuestions = currentTask === 9 ? 20 : 10;

    // Calculate score
    let correct = 0;
    quiz.forEach((q, idx) => {
        if (userAnswers[idx] === q.c) correct++;
    });

    const passed = correct === totalQuestions;

    if (passed && window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
    }

    let html = `
        <div class="task-view-header">
            <button class="back-btn" onclick="openTask(currentTask)">← content</button>
            <h2>Task ${task.id}: ${task.title}</h2>
        </div>
        <div class="quiz-results">
            <div class="results-score ${passed ? 'passed' : 'failed'}">${correct}/${totalQuestions}</div>
            <div class="results-message">
                ${passed
            ? '🎉 Congratulations! You passed!'
            : '❌ You need 10/10. Review the material and try again.'}
            </div>
    `;

    if (passed) {
        // Mark task complete
        if (!progress.completedTasks.includes(task.id)) {
            progress.completedTasks.push(task.id);
        }
        if (task.id < 10) {
            progress.currentTask = task.id + 1;
        }
        localStorage.setItem('contentTrainingProgress', JSON.stringify(progress));

        if (task.id === 10) {
            html += `
                <div class="certified-badge">
                    <h2>🏆 CERTIFIED</h2>
                    <p>You've passed all 10 tasks!</p>
                    <p style="margin-top: 20px; color: #94a3b8;">Next Step: Record your 30-minute video walkthrough</p>
                    <button class="nav-btn" style="margin-top: 20px;" onclick="showCertificate()">🎓 View Certificate</button>
                </div>
            `;
        } else {
            // Auto-advance to next task after 1.5 seconds
            html += `<div style="text-align: center; margin-top: 30px;">
                <p style="color: #10B981; font-size: 1.2em; margin-bottom: 15px;">✅ Moving to Task ${task.id + 1}...</p>
                <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 10px; margin: 0 auto; overflow: hidden;">
                    <div style="height: 100%; background: linear-gradient(90deg, #10B981, #06B6D4); animation: progressAnim 1.5s ease forwards;"></div>
                </div>
            </div>`;
            setTimeout(() => {
                openTask(task.id);
                renderTasksList();
                updateProgressBar();
            }, 1500);
        }
    } else {
        html += `
            <div style="margin-top: 20px;">
                <button class="nav-btn" style="margin-right: 15px;" onclick="startQuiz(${currentTask})">🔄 Retry Quiz</button>
                <button class="back-btn" onclick="closeTask()">📖 Review Material</button>
            </div>
        `;
    }

    html += `</div>`;
    container.innerHTML = html;
}

// Reset Progress (for testing)
function resetProgress() {
    localStorage.removeItem('contentTrainingProgress');
    location.reload();
}

// Show Certificate Modal
function showCertificate() {
    if (window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
        setTimeout(() => window.confetti.burst(window.innerWidth / 4, window.innerHeight / 2), 500);
        setTimeout(() => window.confetti.burst(3 * window.innerWidth / 4, window.innerHeight / 2), 1000);
    }
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Create certificate modal overlay
    const modal = document.createElement('div');
    modal.id = 'certificateModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    modal.innerHTML = `
        <div id="certificateContent" style="
            width: 900px;
            max-width: 100%;
            background: linear-gradient(145deg, #0f172a, #1e293b);
            border: 3px solid #F59E0B;
            border-radius: 20px;
            padding: 60px;
            position: relative;
            box-shadow: 0 0 60px rgba(245, 158, 11, 0.3), inset 0 0 60px rgba(245, 158, 11, 0.05);
        ">
            <!-- Close Button -->
            <button onclick="closeCertificate()" style="
                position: fixed;
                top: 30px;
                right: 30px;
                background: rgba(0,0,0,0.8);
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                color: #F8FAFC;
                font-size: 20px;
                cursor: pointer;
                z-index: 1001;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            " class="no-print">✕</button>
            
            <!-- Certificate Header -->
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3em; margin-bottom: 10px;">🎓</div>
                <h1 style="
                    font-size: 2.5em;
                    font-weight: 800;
                    background: linear-gradient(135deg, #F59E0B, #06B6D4);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                    letter-spacing: 0.05em;
                ">DIGITAL HEROES</h1>
                <div style="
                    color: #94A3B8;
                    font-size: 0.9em;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    margin-top: 5px;
                ">Certification Program</div>
            </div>
            
            <!-- Certificate Body -->
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="
                    font-size: 2em;
                    font-weight: 300;
                    color: #F8FAFC;
                    margin-bottom: 30px;
                    letter-spacing: 0.1em;
                ">CERTIFICATE OF COMPLETION</h2>
                
                <p style="color: #94A3B8; font-size: 1.1em; margin-bottom: 10px;">This is to certify that</p>
                
                <div id="recipientName" style="
                    font-size: 2.2em;
                    font-weight: 700;
                    color: #F8FAFC;
                    border-bottom: 2px solid rgba(245, 158, 11, 0.4);
                    padding: 10px 40px;
                    display: inline-block;
                    margin: 15px 0 25px 0;
                    min-width: 300px;
                ">
                    ${traineeName || 'Sales Executive'}
                </div>
                
                <p style="color: #94A3B8; font-size: 1.1em; margin-bottom: 25px;">
                    has successfully completed the
                </p>
                
                <h3 style="
                    font-size: 1.6em;
                    font-weight: 700;
                    color: #F59E0B;
                    margin-bottom: 25px;
                ">Content Writer Training</h3>
                
                <p style="color: #CBD5E1; font-size: 1em; line-height: 1.6; max-width: 600px; margin: 0 auto;">
                    Demonstrating proficiency in content strategy, SEO writing, brand voice, product descriptions, blog writing, email marketing, social copy, and content optimization.
                </p>
            </div>
            
            <!-- Certificate Footer -->
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-top: 50px;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.1);
            ">
                <div style="text-align: center;">
                    <div style="
                        width: 200px;
                        border-bottom: 2px solid rgba(245, 158, 11, 0.4);
                        padding-bottom: 8px;
                        margin-bottom: 8px;
                        color: #F8FAFC;
                        font-weight: 600;
                    ">Anurag Singh</div>
                    <div style="color: #94A3B8; font-size: 0.85em;">Operations Head, Digital Heroes</div>
                </div>
                
                <div style="text-align: center;">
                    <div style="
                        font-size: 2.5em;
                        color: rgba(245, 158, 11, 0.3);
                    ">🏆</div>
                </div>
                
                <div style="text-align: center;">
                    <div style="
                        width: 180px;
                        border-bottom: 2px solid rgba(245, 158, 11, 0.4);
                        padding-bottom: 8px;
                        margin-bottom: 8px;
                        color: #F8FAFC;
                        font-weight: 600;
                    ">${formattedDate}</div>
                    <div style="color: #94A3B8; font-size: 0.85em;">Date of Completion</div>
                </div>
            </div>
            
            <!-- Certificate Code -->
            <div style="text-align: center; margin-top: 30px;">
                <div style="
                    display: inline-block;
                    background: rgba(245, 158, 11, 0.1);
                    border: 1px solid rgba(245, 158, 11, 0.3);
                    border-radius: 8px;
                    padding: 12px 25px;
                ">
                    <span style="color: #94A3B8; font-size: 0.85em;">Certificate ID: </span>
                    <span style="color: #F59E0B; font-weight: 700; font-family: monospace; letter-spacing: 0.1em;">
                        DH-CW-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}
                    </span>
                </div>
            </div>
            
            <!-- Print Button -->
            <div style="text-align: center; margin-top: 40px;" class="no-print">
                <button onclick="printCertificate()" style="
                    background: linear-gradient(135deg, #F59E0B, #06B6D4);
                    color: #000;
                    font-weight: 700;
                    padding: 16px 40px;
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    font-size: 1.1em;
                    transition: transform 0.2s, box-shadow 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 10px 30px rgba(245, 158, 11, 0.4)';"
                   onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none';">
                    🖨️ Print Certificate
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add print styles
    if (!document.getElementById('printStyles')) {
        const printStyles = document.createElement('style');
        printStyles.id = 'printStyles';
        printStyles.innerHTML = `
            @media print {
                @page {
                    size: A4 portrait;
                    margin: 0.5in;
                }
                html, body {
                    height: auto !important;
                    overflow: visible !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                body * {
                    visibility: hidden;
                }
                #certificateModal, #certificateModal * {
                    visibility: visible;
                }
                #certificateModal {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: auto;
                    background: white !important;
                    padding: 0 !important;
                    overflow: visible !important;
                }
                #certificateContent {
                    background: white !important;
                    color: black !important;
                    border: 3px solid #F59E0B !important;
                    box-shadow: none !important;
                    max-width: 100% !important;
                    width: 100% !important;
                    padding: 30px !important;
                    border-radius: 0 !important;
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                }
                #certificateContent h1,
                #certificateContent h2,
                #certificateContent h3,
                #certificateContent div,
                #certificateContent p,
                #certificateContent span {
                    color: #1e293b !important;
                    -webkit-text-fill-color: #1e293b !important;
                }
                #certificateContent h1 {
                    background: none !important;
                    color: #F59E0B !important;
                    -webkit-text-fill-color: #F59E0B !important;
                    font-size: 2em !important;
                }
                #certificateContent h2 {
                    font-size: 1.5em !important;
                }
                #certificateContent h3 {
                    color: #F59E0B !important;
                    -webkit-text-fill-color: #F59E0B !important;
                    font-size: 1.2em !important;
                }
                .no-print {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(printStyles);
    }
}

// Close Certificate Modal
function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.remove();
    }
}

// Print Certificate
function printCertificate() {
    window.print();
}

// Show Name Prompt Modal
function showNamePrompt() {
    const modal = document.createElement('div');
    modal.id = 'namePromptModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    modal.innerHTML = `
        <div style="
            width: 500px;
            max-width: 100%;
            background: linear-gradient(145deg, #0f172a, #1e293b);
            border: 2px solid #F59E0B;
            border-radius: 20px;
            padding: 50px;
            text-align: center;
            box-shadow: 0 0 60px rgba(245, 158, 11, 0.3);
        ">
            <div style="font-size: 4em; margin-bottom: 20px;">🎓</div>
            <h1 style="
                font-size: 1.8em;
                color: #F8FAFC;
                margin-bottom: 10px;
            ">Welcome to Content Writer Training</h1>
            <p style="color: #94A3B8; margin-bottom: 30px;">
                Digital Heroes Certification Program
            </p>
            
            <div style="text-align: left; margin-bottom: 25px;">
                <label style="color: #94A3B8; font-size: 0.9em; display: block; margin-bottom: 8px;">
                    Enter Your Full Name
                </label>
                <input type="text" id="traineeNameInput" placeholder="e.g. John Smith" style="
                    width: 100%;
                    padding: 15px 20px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(245, 158, 11, 0.3);
                    border-radius: 10px;
                    color: #F8FAFC;
                    font-size: 1.1em;
                    outline: none;
                " onfocus="this.style.borderColor='#F59E0B'" onblur="this.style.borderColor='rgba(245, 158, 11, 0.3)'">
            </div>
            
            <button onclick="saveTraineeName()" style="
                background: linear-gradient(135deg, #F59E0B, #06B6D4);
                color: #000;
                font-weight: 700;
                padding: 16px 40px;
                border-radius: 10px;
                border: none;
                cursor: pointer;
                font-size: 1.1em;
                width: 100%;
            ">
                🚀 Start Training
            </button>
            
            <p style="color: #64748B; font-size: 0.8em; margin-top: 20px;">
                Your name will appear on your completion certificate
            </p>
        </div>
    `;

    document.body.appendChild(modal);

    // Focus input after a small delay
    setTimeout(() => {
        document.getElementById('traineeNameInput').focus();
    }, 100);
}

// Save Trainee Name
function saveTraineeName() {
    const input = document.getElementById('traineeNameInput');
    const name = input.value.trim();

    if (name.length < 2) {
        input.style.borderColor = '#EF4444';
        input.placeholder = 'Please enter your name';
        return;
    }

    traineeName = name;
    localStorage.setItem('contentTraineeName', name);

    const modal = document.getElementById('namePromptModal');
    if (modal) {
        modal.remove();
    }
}



