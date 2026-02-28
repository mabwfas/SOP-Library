const QA_MODE = true; // TEMPORARY - Remove after QA

// Fiverr Risk Training Application Logic

// State Management
let currentTask = 0;
let currentQuestion = 0;
let userAnswers = [];
let progress = JSON.parse(localStorage.getItem('fiverrRiskTrainingProgress')) || { completedTasks: [], currentTask: 1 };
let traineeName = localStorage.getItem('dhTraineeName') || localStorage.getItem('fiverrRiskTraineeName') || '';

const TOTAL_TASKS = 10;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) welcomeScreen.style.display = 'none';

    renderTasksList();
    updateProgressBar();

    const firstIncompleteIndex = trainingTasks.findIndex(t => !progress.completedTasks.includes(t.id));
    const taskToOpen = firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0;
    if (typeof openTask === 'function') {
        setTimeout(() => openTask(taskToOpen), 50);
    }

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
        const isLocked = QA_MODE ? false : task.id > progress.currentTask;

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
    const realPercent = Math.min(100, Math.round((progress.completedTasks.length / TOTAL_TASKS) * 100));
    document.getElementById('progressPercent').textContent = `${realPercent}%`;
    document.getElementById('progressFill').style.width = `${realPercent}%`;

    const certBtn = document.getElementById('certificateBtn');
    if (certBtn) {
        certBtn.style.display = progress.completedTasks.length >= TOTAL_TASKS ? 'block' : 'none';
    }
}

// Open Task
function openTask(index) {
    currentTask = index;
    const task = trainingTasks[index];
    const container = document.getElementById('taskView');

    document.getElementById('welcomeScreen').style.display = 'none';
    container.style.display = 'block';

    const cards = document.querySelectorAll('.task-card');
    cards.forEach(card => card.classList.remove('current'));
    if (cards[index]) cards[index].classList.add('current');

    let html = `
        <div class="task-view-header">
            <h2>Task ${task.id}: ${task.title}</h2>
        </div>
    `;

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

    const taskContentVars = {};
    for (let i = 0; i <= trainingTasks.length + 1; i++) {
        taskContentVars[i] = window['task' + i + 'Content'] || null;
    }

    const fullContent = taskContentVars[task.id];
    const quizLength = (typeof allQuizzes !== 'undefined' && allQuizzes[index]) ? allQuizzes[index].length : 10;

    if (fullContent) {
        html += fullContent.replace(/<h2>([^<]*?)TASK \d+:/, '<h2>$1TASK ' + task.id + ':');
        html += `
            <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (${quizLength}/${quizLength} Required)</button>
                ${QA_MODE ? '<button class="nav-btn" onclick="skipTask(' + index + ')" style="background:#ff6600;border-color:#ff6600;">⏭️ Skip (QA)</button>' : ''}
            </div>
        `;
    } else {
        html += `
            <div class="content-section">
                <h3>📝 Task ${task.id}: ${task.title}</h3>
                <div class="warning-box">
                    <strong>⚠️ Error Loading Content</strong><br>
                    Content variable not found. Check data file.
                </div>
            </div>
        `;
    }

    container.innerHTML = html;

    if (window.renderMermaid) {
        window.renderMermaid();
    }
}

// QA Mode: Skip task without quiz
function skipTask(taskIndex) {
    const task = trainingTasks[taskIndex];
    if (!progress.completedTasks.includes(task.id)) {
        progress.completedTasks.push(task.id);
    }
    progress.currentTask = Math.max(progress.currentTask, task.id + 1);
    localStorage.setItem('fiverrRiskTrainingProgress', JSON.stringify(progress));
    renderTasksList();
    updateProgressBar();
    if (taskIndex + 1 < trainingTasks.length) {
        openTask(taskIndex + 1);
    } else {
        showCertificate();
    }
}

// Start Quiz
function startQuiz(taskIndex) {
    currentTask = taskIndex;
    currentQuestion = 0;
    userAnswers = [];

    const quiz = allQuizzes[taskIndex];
    if (!quiz || quiz.length === 0) {
        alert('No quiz available for this task.');
        return;
    }

    showQuestion();
}

// Show Question
function showQuestion() {
    const quiz = allQuizzes[currentTask];
    const q = quiz[currentQuestion];
    const container = document.getElementById('taskView');

    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h3>📝 Task ${trainingTasks[currentTask].id} Quiz</h3>
                <div class="quiz-progress">Question ${currentQuestion + 1} of ${quiz.length}</div>
            </div>
            <div class="quiz-question">
                <h4>${q.q}</h4>
                <div class="quiz-options">
                    ${q.o.map((opt, i) => `
                        <button class="quiz-option" onclick="selectAnswer(${i})">${opt}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Select Answer
function selectAnswer(answerIndex) {
    userAnswers.push(answerIndex);
    const quiz = allQuizzes[currentTask];

    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    const quiz = allQuizzes[currentTask];
    let correct = 0;
    quiz.forEach((q, i) => {
        if (userAnswers[i] === q.c) correct++;
    });

    const passed = correct === quiz.length;
    const container = document.getElementById('taskView');

    if (passed) {
        if (!progress.completedTasks.includes(trainingTasks[currentTask].id)) {
            progress.completedTasks.push(trainingTasks[currentTask].id);
            progress.currentTask = Math.max(progress.currentTask, trainingTasks[currentTask].id + 1);
            localStorage.setItem('fiverrRiskTrainingProgress', JSON.stringify(progress));
        }
        renderTasksList();
        updateProgressBar();

        if (window.confetti) {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
    }

    container.innerHTML = `
        <div class="quiz-results ${passed ? 'passed' : 'failed'}">
            <div class="results-icon">${passed ? '🎉' : '❌'}</div>
            <h3>${passed ? 'Perfect Score!' : 'Not Quite — Try Again'}</h3>
            <div class="results-score">${correct}/${quiz.length}</div>
            <p>${passed ? 'You passed! Move on to the next task.' : 'You need ${quiz.length}/${quiz.length} to pass. Review the material and try again.'}</p>
            
            <div class="results-breakdown">
                ${quiz.map((q, i) => `
                    <div class="result-item ${userAnswers[i] === q.c ? 'correct' : 'incorrect'}">
                        <span>${userAnswers[i] === q.c ? '✅' : '❌'}</span>
                        <span>${q.q}</span>
                        <span class="correct-answer">${userAnswers[i] !== q.c ? 'Correct: ' + q.o[q.c] : ''}</span>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                ${passed ? `<button class="nav-btn" onclick="openTask(${currentTask + 1 < trainingTasks.length ? currentTask + 1 : currentTask})">Next Task →</button>` : ''}
                <button class="nav-btn secondary" onclick="openTask(${currentTask})">📖 Review Material</button>
                ${!passed ? `<button class="nav-btn" onclick="startQuiz(${currentTask})">🔄 Retry Quiz</button>` : ''}
            </div>
        </div>
    `;
}

// Name Prompt
function showNamePrompt() {
    const name = prompt('Welcome! Please enter your name for the training certificate:');
    if (name && name.trim()) {
        traineeName = name.trim();
        localStorage.setItem('dhTraineeName', traineeName);
        localStorage.setItem('fiverrRiskTraineeName', traineeName);
    }
}

// Certificate
function showCertificate() {
    if (window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
    }
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const modal = document.createElement('div');
    modal.id = 'certificateModal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';

    modal.innerHTML = `
        <div id="certificateContent" style="width:900px;max-width:100%;background:linear-gradient(145deg,#0f172a,#1e293b);border:3px solid #6366F1;border-radius:20px;padding:60px;position:relative;box-shadow:0 0 60px rgba(99,102,241,0.3),inset 0 0 60px rgba(99,102,241,0.05);">
            <button onclick="closeCertificate()" style="position:fixed;top:30px;right:30px;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:40px;height:40px;color:#F8FAFC;font-size:20px;cursor:pointer;z-index:1001;display:flex;align-items:center;justify-content:center;" class="no-print">&#10005;</button>
            <div style="text-align:center;margin-bottom:40px;">
                <div style="font-size:3em;margin-bottom:10px;">&#127891;</div>
                <h1 style="font-size:2.5em;font-weight:800;background:linear-gradient(135deg,#6366F1,#06B6D4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;letter-spacing:0.05em;">DIGITAL HEROES</h1>
                <div style="color:#94A3B8;font-size:0.9em;letter-spacing:0.2em;text-transform:uppercase;margin-top:5px;">Certification Program</div>
            </div>
            <div style="text-align:center;margin-bottom:40px;">
                <h2 style="font-size:2em;font-weight:300;color:#F8FAFC;margin-bottom:30px;letter-spacing:0.1em;">CERTIFICATE OF COMPLETION</h2>
                <p style="color:#94A3B8;font-size:1.1em;margin-bottom:10px;">This is to certify that</p>
                <div id="recipientName" style="font-size:2.2em;font-weight:700;color:#F8FAFC;border-bottom:2px solid rgba(99,102,241,0.4);padding:10px 40px;display:inline-block;margin:15px 0 25px 0;min-width:300px;">${traineeName || 'Your Name'}</div>
                <p style="color:#94A3B8;font-size:1.1em;margin-bottom:25px;">has successfully completed the</p>
                <h3 style="font-size:1.6em;font-weight:700;color:#6366F1;margin-bottom:25px;">Fiverr Risk Manager Training</h3>
                <p style="color:#CBD5E1;font-size:1em;line-height:1.6;max-width:600px;margin:0 auto;">Demonstrating proficiency in Fiverr platform risk management, ToS compliance, account security, order dispute resolution, and marketplace fraud prevention.</p>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:50px;padding-top:30px;border-top:1px solid rgba(255,255,255,0.1);">
                <div style="text-align:center;">
                    <div style="width:200px;border-bottom:2px solid rgba(99,102,241,0.4);padding-bottom:8px;margin-bottom:8px;color:#F8FAFC;font-weight:600;">Anurag Singh</div>
                    <div style="color:#94A3B8;font-size:0.85em;">Director, Digital Heroes</div>
                </div>
                <div style="text-align:center;"><div style="font-size:2.5em;color:rgba(99,102,241,0.3);">&#127942;</div></div>
                <div style="text-align:center;">
                    <div style="width:180px;border-bottom:2px solid rgba(99,102,241,0.4);padding-bottom:8px;margin-bottom:8px;color:#F8FAFC;font-weight:600;">${formattedDate}</div>
                    <div style="color:#94A3B8;font-size:0.85em;">Date of Completion</div>
                </div>
            </div>
            <div style="text-align:center;margin-top:30px;">
                <div style="display:inline-block;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:8px;padding:12px 25px;">
                    <span style="color:#94A3B8;font-size:0.85em;">Certificate ID: </span>
                    <span style="color:#6366F1;font-weight:700;font-family:monospace;letter-spacing:0.1em;">DH-FR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}</span>
                </div>
            </div>
            <div style="text-align:center;margin-top:40px;" class="no-print">
                <button onclick="printCertificate()" style="background:linear-gradient(135deg,#6366F1,#06B6D4);color:#000;font-weight:700;padding:16px 40px;border-radius:10px;border:none;cursor:pointer;font-size:1.1em;transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='scale(1.05)';this.style.boxShadow='0 10px 30px rgba(99,102,241,0.4)';" onmouseout="this.style.transform='scale(1)';this.style.boxShadow='none';">&#128424; Print Certificate</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    if (modal) modal.remove();
}

function printCertificate() {
    window.print();
}
