const QA_MODE = false;

// Entry Tasks Training Application Logic
// All tasks UNLOCKED — candidates only need to complete their specific role task

// State Management
let currentTask = 0;
let currentQuestion = 0;
let userAnswers = [];
let progress = JSON.parse(localStorage.getItem('entryTasksProgress')) || { completedTasks: [], currentTask: 1 };
let traineeName = localStorage.getItem('dhTraineeName') || localStorage.getItem('entryTraineeName') || '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) welcomeScreen.style.display = 'none';

    renderTasksList();
    updateProgressBar();

    // Auto-load first task
    const firstIncompleteIndex = trainingTasks.findIndex(t => !progress.completedTasks.includes(t.id));
    const taskToOpen = firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0;
    if (typeof openTask === 'function') {
        setTimeout(() => openTask(taskToOpen), 50);
    }

    if (!traineeName) {
        showNamePrompt();
    }
});

// Render Tasks List — ALL UNLOCKED (entry tasks are per-role, not sequential)
function renderTasksList() {
    const container = document.getElementById('tasksList');
    container.innerHTML = '';

    trainingTasks.forEach((task, index) => {
        const isCompleted = progress.completedTasks.includes(task.id);
        const isCurrent = currentTask === index;

        const card = document.createElement('div');
        card.className = `task-card ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`;
        card.innerHTML = `
            <div class="task-number">${isCompleted ? '✓' : task.id}</div>
            <div class="task-info">
                <h3>${task.title}</h3>
                <p title="${task.description}">${task.description}</p>
            </div>
            <div class="task-status">${isCompleted ? '' : '→'}</div>
        `;

        card.onclick = () => openTask(index);
        container.appendChild(card);
    });
}

// Update Progress Bar
function updateProgressBar() {
    const totalTasks = trainingTasks.length;
    const percent = Math.min(Math.round((progress.completedTasks.length / totalTasks) * 100), 100);
    document.getElementById('progressPercent').textContent = `${percent}%`;
    document.getElementById('progressFill').style.width = `${percent}%`;

    const certBtn = document.getElementById('certificateBtn');
    if (certBtn) {
        certBtn.style.display = progress.completedTasks.length === totalTasks ? 'block' : 'none';
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
        html += fullContent;
        html += `
            <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (${quizLength}/${quizLength} Required)</button>
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

// Close Task
function closeTask() {
    document.getElementById('taskView').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'flex';
}

// Start Quiz
function startQuiz(taskIndex) {
    currentTask = taskIndex;
    currentQuestion = 0;
    userAnswers = [];

    const quiz = allQuizzes[taskIndex] || [];
    const shuffled = [...quiz].sort(() => Math.random() - 0.5);
    const count = 10;
    window.currentQuiz = shuffled.slice(0, count);

    while (window.currentQuiz.length < count && quiz.length > 0) {
        window.currentQuiz.push(quiz[window.currentQuiz.length % quiz.length]);
    }

    renderQuestion();
}

// Render Question
function renderQuestion() {
    const container = document.getElementById('taskView');
    const task = trainingTasks[currentTask];
    const quiz = window.currentQuiz;
    const q = quiz[currentQuestion];
    const totalQuestions = window.currentQuiz.length;

    let normalizedOptions = q.options || q.o;
    let normalizedQuestion = q.question || q.q;

    const optionsWithIndex = normalizedOptions.map((opt, idx) => ({ text: opt, originalIndex: idx }));
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
                <p class="quiz-progress">Score ${totalQuestions}/${totalQuestions} to unlock next task</p>
            </div>
            <div class="question-container">
                <div class="question-text">${normalizedQuestion}</div>
                <div class="options-list">
                    ${shuffledOptions.map((opt, idx) => `
                        <button class="option-btn" onclick="selectAnswer(${idx})">${String.fromCharCode(65 + idx)}) ${opt.text}</button>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-nav">
                <button class="nav-btn" ${currentQuestion === 0 ? 'style="visibility:hidden"' : ''} onclick="prevQuestion()">← Previous</button>
                <button class="nav-btn" id="nextBtn" onclick="nextQuestion()">Next →</button>
            </div>
            <div id="quizValidation" style="text-align: center; color: #F59E0B; font-size: 0.9em; margin-top: 10px; opacity: 0; transition: opacity 0.3s;">Please select an answer before proceeding</div>
        </div>
    `;

    container.innerHTML = html;
}

// Select Answer
function selectAnswer(index) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
    userAnswers[currentQuestion] = window.currentOptions[index].originalIndex;
    document.getElementById('nextBtn').disabled = false;
}

// Next Question
function nextQuestion() {
    const totalQuestions = window.currentQuiz ? window.currentQuiz.length : 10;
    if (userAnswers[currentQuestion] === undefined) {
        const msg = document.getElementById('quizValidation');
        if (msg) { msg.style.opacity = '1'; setTimeout(() => msg.style.opacity = '0', 2000); }
        return;
    }
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
    const totalQuestions = quiz.length;

    let correct = 0;
    quiz.forEach((q, idx) => {
        let correctIdx = q.correct !== undefined ? q.correct : q.c;
        if (userAnswers[idx] === correctIdx) correct++;
    });

    const passed = correct === totalQuestions;

    if (passed && window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
    }

    let html = `
        <div class="task-view-header">
            <button class="back-btn" onclick="openTask(currentTask)">← Back to Content</button>
            <h2>Task ${task.id}: ${task.title}</h2>
        </div>
        <div class="quiz-results">
            <div class="results-score ${passed ? 'passed' : 'failed'}">${correct}/${totalQuestions}</div>
            <div class="results-message">
                ${passed
            ? '🎉 Congratulations! You passed! Now complete your assignment.'
            : `❌ You need ${totalQuestions}/${totalQuestions}. Review the material and try again.`}
            </div>
    `;

    if (passed) {
        if (!progress.completedTasks.includes(task.id)) {
            progress.completedTasks.push(task.id);
        }
        progress.currentTask = Math.max(progress.currentTask, task.id + 1);
        localStorage.setItem('entryTasksProgress', JSON.stringify(progress));

        html += `<div style="text-align: center; margin-top: 30px;">
            <p style="color: #10B981; font-size: 1.2em; margin-bottom: 15px;">✅ Task marked complete!</p>
        </div>`;

        setTimeout(() => {
            renderTasksList();
            updateProgressBar();
        }, 500);
    } else {
        html += `
            <div style="margin-top: 20px;">
                <button class="nav-btn" style="margin-right: 15px;" onclick="startQuiz(${currentTask})">🔄 Retry Quiz</button>
                <button class="back-btn" onclick="openTask(${currentTask})">📖 Review Material</button>
            </div>
        `;
    }

    html += `</div>`;
    container.innerHTML = html;
}

// Show Certificate Modal
function showCertificate() {
    if (window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
    }
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const modal = document.createElement('div');
    modal.id = 'certificateModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Certificate of Completion');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';

    modal.innerHTML = `
        <div style="width:900px;max-width:100%;background:linear-gradient(145deg,#0f172a,#1e293b);border:3px solid #6366F1;border-radius:20px;padding:60px;position:relative;box-shadow:0 0 60px rgba(99,102,241,0.3);">
            <button onclick="closeCertificate()" style="position:fixed;top:30px;right:30px;background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:40px;height:40px;color:#F8FAFC;font-size:20px;cursor:pointer;z-index:1001;display:flex;align-items:center;justify-content:center;" class="no-print">✕</button>
            <div style="text-align:center;margin-bottom:40px;">
                <div style="font-size:3em;margin-bottom:10px;">🎓</div>
                <h1 style="font-size:2.5em;font-weight:800;background:linear-gradient(135deg,#6366F1,#06B6D4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;">DIGITAL HEROES</h1>
                <div style="color:#94A3B8;font-size:0.9em;letter-spacing:0.2em;text-transform:uppercase;margin-top:5px;">Entry Tasks Certification</div>
            </div>
            <div style="text-align:center;margin-bottom:40px;">
                <h2 style="font-size:2em;font-weight:300;color:#F8FAFC;margin-bottom:30px;letter-spacing:0.1em;">CERTIFICATE OF COMPLETION</h2>
                <p style="color:#94A3B8;font-size:1.1em;margin-bottom:10px;">This is to certify that</p>
                <div style="font-size:2.2em;font-weight:700;color:#F8FAFC;border-bottom:2px solid rgba(99,102,241,0.4);padding:10px 40px;display:inline-block;margin:15px 0 25px 0;min-width:300px;">${traineeName || 'Your Name'}</div>
                <p style="color:#94A3B8;font-size:1.1em;margin-bottom:25px;">has successfully completed all</p>
                <h3 style="font-size:1.6em;font-weight:700;color:#6366F1;margin-bottom:25px;">Entry Tasks — All Roles</h3>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:50px;padding-top:30px;border-top:1px solid rgba(255,255,255,0.1);">
                <div style="text-align:center;"><div style="width:200px;border-bottom:2px solid rgba(99,102,241,0.4);padding-bottom:8px;margin-bottom:8px;color:#F8FAFC;font-weight:600;">Anurag Singh</div><div style="color:#94A3B8;font-size:0.85em;">Operations Head, Digital Heroes</div></div>
                <div style="text-align:center;"><div style="font-size:2.5em;color:rgba(99,102,241,0.3);">🏆</div></div>
                <div style="text-align:center;"><div style="width:180px;border-bottom:2px solid rgba(99,102,241,0.4);padding-bottom:8px;margin-bottom:8px;color:#F8FAFC;font-weight:600;">${formattedDate}</div><div style="color:#94A3B8;font-size:0.85em;">Date of Completion</div></div>
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

// Show Name Prompt
function showNamePrompt() {
    const modal = document.createElement('div');
    modal.id = 'namePromptModal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;';

    modal.innerHTML = `
        <div style="width:500px;max-width:100%;background:linear-gradient(145deg,#0f172a,#1e293b);border:2px solid #6366F1;border-radius:20px;padding:50px;text-align:center;box-shadow:0 0 60px rgba(99,102,241,0.3);">
            <h1 style="color:white;margin-bottom:30px;">Welcome to Entry Tasks</h1>
            <p style="color:#94A3B8;margin-bottom:20px;">Select your role from the sidebar after entering your name.</p>
            <input type="text" id="traineeNameInput" placeholder="Enter your full name" style="width:100%;padding:15px;border-radius:10px;border:1px solid #475569;background:rgba(255,255,255,0.1);color:white;margin-bottom:20px;font-size:1.1em;">
            <button onclick="saveTraineeName()" style="background:#6366F1;color:white;padding:15px 40px;border-radius:10px;border:none;font-weight:bold;cursor:pointer;width:100%;">Start →</button>
        </div>
    `;

    document.body.appendChild(modal);
}

function saveTraineeName() {
    const name = document.getElementById('traineeNameInput').value.trim();
    if (name) {
        traineeName = name;
        localStorage.setItem('entryTraineeName', name);
        localStorage.setItem('dhTraineeName', name);
        document.getElementById('namePromptModal').remove();
    }
}
