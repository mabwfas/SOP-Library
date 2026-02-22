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

    if (fullContent) {
        html += fullContent;
        html += `
            <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (10/10 Required)</button>
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
            <p>${passed ? 'You passed! Move on to the next task.' : 'You need 10/10 to pass. Review the material and try again.'}</p>
            
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
    if (typeof window.showTrainingCertificate === 'function') {
        window.showTrainingCertificate(traineeName, 'Fiverr Risk Manager', progress.completedTasks.length, TOTAL_TASKS);
    } else {
        alert(`🎓 Certificate for: ${traineeName}\nRole: Fiverr Risk Manager\nTasks Completed: ${progress.completedTasks.length}/${TOTAL_TASKS}`);
    }
}
