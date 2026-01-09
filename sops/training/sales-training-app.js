// Sales Training Application Logic

// State Management
let currentTask = 0;
let currentQuestion = 0;
let userAnswers = [];
let progress = JSON.parse(localStorage.getItem('salesTrainingProgress')) || { completedTasks: [], currentTask: 1 };

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTasksList();
    updateProgressBar();
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
}

// Open Task
function openTask(index) {
    currentTask = index;
    const task = trainingTasks[index];
    const container = document.getElementById('taskView');
    const tasksList = document.getElementById('tasksList');

    tasksList.style.display = 'none';
    container.classList.add('active');

    // Render task content
    let html = `
        <div class="task-view-header">
            <button class="back-btn" onclick="closeTask()">← Back to Tasks</button>
            <h2>Task ${task.id}: ${task.title}</h2>
        </div>
    `;

    // Study Guide
    html += `
        <div class="study-guide">
            <h4>📚 Before You Begin</h4>
            <ul>
                ${task.studyGuide.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    // Content First (Task 1 only)
    if (task.contentFirst && index === 0) {
        html += task1Content;
        html += `
            <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (10/10 Required)</button>
                <button class="back-btn" onclick="devSkipTask(${index})" style="background: rgba(245, 158, 11, 0.3); border-color: #F59E0B;">⏩ Skip (Dev Mode)</button>
            </div>
        `;
    } else {
        // Use full content from data file if available, otherwise show placeholder
        const taskContentVars = {
            2: typeof task2Content !== 'undefined' ? task2Content : null,
            3: typeof task3Content !== 'undefined' ? task3Content : null,
            4: typeof task4Content !== 'undefined' ? task4Content : null,
            5: typeof task5Content !== 'undefined' ? task5Content : null,
            6: typeof task6Content !== 'undefined' ? task6Content : null,
            7: typeof task7Content !== 'undefined' ? task7Content : null,
            8: typeof task8Content !== 'undefined' ? task8Content : null,
            9: typeof task9Content !== 'undefined' ? task9Content : null,
            10: typeof task10Content !== 'undefined' ? task10Content : null
        };

        const fullContent = taskContentVars[task.id];

        if (fullContent) {
            // Show full teaching content (like Task 1)
            html += fullContent;
            html += `
                <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="nav-btn" onclick="startQuiz(${index})">📝 Take Quiz (${index === 9 ? '20/20' : '10/10'} Required)</button>
                    <button class="back-btn" onclick="devSkipTask(${index})" style="background: rgba(245, 158, 11, 0.3); border-color: #F59E0B;">⏩ Skip (Dev Mode)</button>
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
                    <button class="back-btn" onclick="devSkipTask(${index})" style="background: rgba(245, 158, 11, 0.3); border-color: #F59E0B;">⏩ Skip (Dev Mode)</button>
                </div>
            `;
        }
    }

    container.innerHTML = html;
}

// DEV MODE: Skip task without quiz (REMOVE THIS FOR PRODUCTION)
function devSkipTask(taskIndex) {
    const task = trainingTasks[taskIndex];

    // Mark task complete
    if (!progress.completedTasks.includes(task.id)) {
        progress.completedTasks.push(task.id);
    }
    if (task.id < 10) {
        progress.currentTask = task.id + 1;
    }
    localStorage.setItem('salesTrainingProgress', JSON.stringify(progress));

    // Return to tasks list
    closeTask();
    renderTasksList();
    updateProgressBar();
}

// Close Task
function closeTask() {
    document.getElementById('taskView').classList.remove('active');
    document.getElementById('tasksList').style.display = 'grid';
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
            <button class="back-btn" onclick="closeTask()">← Exit Quiz</button>
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

    let html = `
        <div class="task-view-header">
            <button class="back-btn" onclick="closeTask()">← Back to Tasks</button>
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
        localStorage.setItem('salesTrainingProgress', JSON.stringify(progress));

        if (task.id === 10) {
            html += `
                <div class="certified-badge">
                    <h2>🏆 CERTIFIED</h2>
                    <p>You've passed all 10 tasks!</p>
                    <p style="margin-top: 20px; color: #94a3b8;">Next Step: Record your 30-minute video walkthrough</p>
                </div>
            `;
        } else {
            html += `<button class="nav-btn" onclick="closeTask(); renderTasksList(); updateProgressBar();">Continue to Task ${task.id + 1} →</button>`;
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
    localStorage.removeItem('salesTrainingProgress');
    location.reload();
}
