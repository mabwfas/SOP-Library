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
        // Task-specific content for Tasks 2-10
        const taskContents = {
            2: `<h3>📖 Task 2: Company Knowledge</h3>
<p>Before you can sell for Digital Heroes, you need to <strong>know who we are</strong> and what we stand for.</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li>Digital Heroes' mission and values</li>
<li>Why we position as <strong>premium</strong> (not cheap)</li>
<li>Our track record: 2000+ stores, 4.9★ rating</li>
<li>Non-negotiable rules (no discounts, upfront payment, etc.)</li>
<li>What makes us different from $200-300 freelancers</li>
</ul>
</div>`,
            3: `<h3>📖 Task 3: Product Mastery</h3>
<p>You can't sell what you don't understand. Master every package, price, and feature.</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Premium Package:</strong> $1,200 — what's included</li>
<li><strong>Enterprise Package:</strong> $1,800 — what's included</li>
<li>Standard delivery timeline (14 days)</li>
<li>Support periods (30 days vs 90 days)</li>
<li>What to do when budget doesn't match scope</li>
</ul>
</div>`,
            4: `<h3>📖 Task 4: Lead Qualification</h3>
<p>Not every lead deserves your time. Learn to identify winners and avoid time-wasters.</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li><strong>M.T.N.D. Framework:</strong> Money, Timeline, Need, Decision-maker</li>
<li>Green flags vs Red flags</li>
<li>The 5 Quick Qualification Questions</li>
<li>When to politely disqualify (2+ red flags)</li>
<li>"Bad History Pattern" — why some clients always fail</li>
</ul>
</div>`,
            5: `<h3>📖 Task 5: Response Templates</h3>
<p>Speed and professionalism win. Master the templates that convert leads to orders.</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Response time:</strong> Under 5 minutes during business hours</li>
<li>4 Response Template types (General, Price-Focused, Urgent, Comparison)</li>
<li>Follow-up Sequence (+24hr, +48hr, +72hr)</li>
<li>When to share portfolio examples</li>
<li>Maximum 3 follow-ups before closing</li>
</ul>
</div>`,
            6: `<h3>📖 Task 6: Sales Psychology</h3>
<p>The art of influence. These techniques separate closers from order-takers.</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li><strong>80/20 Rule:</strong> Listen 80%, talk 20%</li>
<li><strong>3-Yes Technique:</strong> Get agreement momentum</li>
<li><strong>Mirror Technique:</strong> Repeat their words back</li>
<li><strong>Pain Calculator:</strong> Convert problems to dollar amounts</li>
<li><strong>Silence Technique:</strong> First to speak loses</li>
<li><strong>Contrast Principle:</strong> Anchor high, then present actual price</li>
</ul>
</div>`,
            7: `<h3>📖 Task 7: Objection Handling</h3>
<p>Objections are <strong>buying signals</strong>. Learn to turn "no" into "yes".</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Feel, Felt, Found:</strong> The classic objection framework</li>
<li>6 Core Objection Scripts (price, trust, timing, competition, etc.)</li>
<li>Price Objection Flowchart (Value Issue vs Budget Issue)</li>
<li><strong>Scope Reduction:</strong> Never lower price, reduce scope</li>
<li><strong>Inoculation:</strong> Address objections before they're raised</li>
</ul>
</div>`,
            8: `<h3>📖 Task 8: Closing Techniques</h3>
<p>Everything leads to this moment. Master the art of getting the "yes".</p>
<div class="highlight-box">
<strong>Key Topics to Master:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Assumptive Close:</strong> "Should we start Monday or Wednesday?"</li>
<li><strong>Price Sandwich:</strong> Wrap price in value</li>
<li><strong>Good-Better-Best:</strong> Present 3 options</li>
<li><strong>Upfront Contract:</strong> Set expectations at start</li>
<li><strong>Options Close:</strong> "Premium or Enterprise?"</li>
<li><strong>What to do when they say YES:</strong> Stop selling immediately!</li>
</ul>
</div>`,
            9: `<h3>📖 Task 9: Practice Scenarios</h3>
<p>Apply everything you've learned. Real conversations, real decisions.</p>
<div class="highlight-box">
<strong>What You'll Be Tested On:</strong>
<ul style="margin-bottom: 0;">
<li>Reading a conversation and choosing the right response</li>
<li>Identifying M.T.N.D. scores from lead info</li>
<li>Spotting red flags and deciding to qualify/disqualify</li>
<li>Choosing the right closing technique for the situation</li>
<li>Post-sale actions (handoff documentation, review requests)</li>
</ul>
</div>
<div class="warning-box">
<strong>⚠️ This quiz combines everything from Tasks 1-8.</strong> Review all previous material before attempting.
</div>`,
            10: `<h3>🏆 Task 10: Final Certification Exam</h3>
<p>This is it. Prove you're ready to represent Digital Heroes.</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2)); border-color: #10B981;">
<strong>Exam Details:</strong>
<ul style="margin-bottom: 0;">
<li>📝 <strong>20 questions</strong> covering ALL topics from Tasks 1-9</li>
<li>🎯 <strong>20/20 required</strong> — no exceptions</li>
<li>⏱️ Questions are randomized each attempt</li>
<li>🔄 Unlimited retries (but must study between attempts)</li>
</ul>
</div>
<div class="warning-box">
<strong>After passing the exam:</strong><br>
Record a <strong>30-minute video walkthrough</strong> demonstrating your knowledge. This will be reviewed by your manager for final certification approval.
</div>`
        };

        const contentForTask = taskContents[task.id] || '';

        html += `
            <div class="content-section">
                ${contentForTask}
            </div>
            <div class="content-section">
                <h3>🎯 Quiz First Format</h3>
                <p>Study the SOP materials listed above, then prove your knowledge by scoring <strong>${index === 9 ? '20/20' : '10/10'}</strong> on the quiz.</p>
                <p>Questions test <strong>understanding</strong>, not memorization. You need to grasp the concepts to pass.</p>
            </div>
            <div style="text-align: center; margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="startQuiz(${index})">📝 Start Quiz (${index === 9 ? '20/20' : '10/10'} Required)</button>
                <button class="back-btn" onclick="devSkipTask(${index})" style="background: rgba(245, 158, 11, 0.3); border-color: #F59E0B;">⏩ Skip (Dev Mode)</button>
            </div>
        `;
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
