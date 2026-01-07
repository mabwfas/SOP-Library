const SOPQuiz = {
    state: {
        roleName: '',
        questions: [],
        currentPage: 0,
        answers: [],
        userName: ''
    },

    init: function (roleName, questions) {
        this.state.roleName = roleName;
        this.state.questions = questions;
        this.state.answers = new Array(questions.length).fill(null);
        this.renderModal();
    },

    renderModal: function () {
        // Remove existing modal if any
        const existing = document.getElementById('quiz-overlay');
        if (existing) existing.remove();

        const html = `
            <div id="quiz-overlay" class="quiz-overlay">
                <div class="quiz-container">
                    <div class="quiz-header">
                        <div class="quiz-title">
                            <span>🎓</span>
                            <span>${this.state.roleName} Proficiency Test</span>
                        </div>
                        <button class="close-quiz-btn" onclick="SOPQuiz.close()">×</button>
                    </div>
                    <div id="quiz-body" class="quiz-body">
                        <!-- Content injected here -->
                    </div>
                    <div id="quiz-footer" class="quiz-footer" style="display:none;">
                        <button class="quiz-btn btn-secondary" onclick="SOPQuiz.prevPage()">Previous</button>
                        <span id="page-indicator">Page 1/5</span>
                        <button id="next-btn" class="quiz-btn btn-primary" onclick="SOPQuiz.nextPage()">Next</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', html);
    },

    open: function () {
        document.getElementById('quiz-overlay').style.display = 'flex';
        this.showStartScreen();
    },

    close: function () {
        document.getElementById('quiz-overlay').style.display = 'none';
        this.reset();
    },

    reset: function () {
        this.state.currentPage = 0;
        this.state.answers.fill(null);
        this.state.userName = '';
    },

    showStartScreen: function () {
        document.getElementById('quiz-footer').style.display = 'none';
        const body = document.getElementById('quiz-body');
        body.innerHTML = `
            <div class="quiz-start-screen">
                <h2>Ready to verify your skills?</h2>
                <p>You will be presented with 50 questions based on the ${this.state.roleName} SOP.</p>
                <p><strong>Passing Score:</strong> 46/50 (90%)</p>
                <p>If you pass, you will receive a unique verification code.</p>
                
                <input type="text" id="quiz-name-input" class="quiz-input" placeholder="Enter your full name" />
                <br>
                <button class="quiz-btn btn-primary btn-start" onclick="SOPQuiz.startQuiz()">Start Quiz</button>
            </div>
        `;
    },

    startQuiz: function () {
        const nameInput = document.getElementById('quiz-name-input');
        if (!nameInput.value.trim()) {
            alert("Please enter your name to proceed.");
            return;
        }
        this.state.userName = nameInput.value.trim();
        this.state.currentPage = 0;

        document.getElementById('quiz-footer').style.display = 'flex';
        this.renderPage();
    },

    renderPage: function () {
        const body = document.getElementById('quiz-body');
        const startIdx = this.state.currentPage * 10;
        const endIdx = startIdx + 10;
        const pageQuestions = this.state.questions.slice(startIdx, endIdx);

        let html = '';
        pageQuestions.forEach((q, i) => {
            const globalIndex = startIdx + i;
            html += `
                <div class="question-item">
                    <span class="question-number">Question ${globalIndex + 1} of 50</span>
                    <div class="question-text">${q.q}</div>
                    <div class="options-grid">
                        ${q.options.map((opt, optIdx) => `
                            <label class="option-label">
                                <input type="radio" 
                                    name="q-${globalIndex}" 
                                    class="option-input" 
                                    value="${optIdx}"
                                    ${this.state.answers[globalIndex] === optIdx ? 'checked' : ''}
                                    onchange="SOPQuiz.saveAnswer(${globalIndex}, ${optIdx})"
                                >
                                <span>${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        body.innerHTML = html;
        body.scrollTop = 0;

        // Update footer
        document.getElementById('page-indicator').textContent = `Page ${this.state.currentPage + 1} / 5`;

        const nextBtn = document.getElementById('next-btn');
        if (this.state.currentPage === 4) {
            nextBtn.textContent = 'Submit Quiz';
            nextBtn.onclick = () => SOPQuiz.submit();
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.onclick = () => SOPQuiz.nextPage();
        }
    },

    saveAnswer: function (qIdx, optIdx) {
        this.state.answers[qIdx] = optIdx;
    },

    nextPage: function () {
        const startIdx = this.state.currentPage * 10;
        // Optional: Check if all answered? Or allow skip? User said "person can come back".
        // I'll allow moving without answering, but warn on submit if needed.

        if (this.state.currentPage < 4) {
            this.state.currentPage++;
            this.renderPage();
        }
    },

    prevPage: function () {
        if (this.state.currentPage > 0) {
            this.state.currentPage--;
            this.renderPage();
        }
    },

    submit: function () {
        // Calculate score
        let score = 0;
        this.state.answers.forEach((ans, i) => {
            if (ans === this.state.questions[i].correct) {
                score++;
            }
        });

        document.getElementById('quiz-footer').style.display = 'none';
        const body = document.getElementById('quiz-body');

        if (score >= 46) {
            // PASS
            const code = this.generateCode();
            body.innerHTML = `
                <div class="result-screen">
                    <h2>🎉 Congratulations, ${this.state.userName}!</h2>
                    <p>You have successfully mastered the ${this.state.roleName} SOP.</p>
                    <div class="score-display score-pass">${score}/50</div>
                    
                    <p>Here is your unique verification certificate:</p>
                    <div class="certificate-box">
                        <small>VERIFIED EXPERT</small>
                        <span class="cert-code">${code}</span>
                    </div>
                    
                    <button class="quiz-btn btn-secondary" onclick="SOPQuiz.close()">Close</button>
                    <button class="quiz-btn btn-primary" onclick="window.print()">Print Certificate</button>
                </div>
            `;
        } else {
            // FAIL
            body.innerHTML = `
                <div class="result-screen">
                    <h2>Keep Learning!</h2>
                    <div class="score-display score-fail">${score}/50</div>
                    <p>You need 46 correct answers to qualify. You got ${score}.</p>
                    <p style="margin: 20px 0; color: #94a3b8;">Review the SOP content again and try to improve your score.</p>
                    
                    <button class="quiz-btn btn-secondary" onclick="SOPQuiz.close()">Return to SOP</button>
                    <button class="quiz-btn btn-primary" onclick="SOPQuiz.reset(); SOPQuiz.showStartScreen()">Try Again</button>
                </div>
            `;
        }
    },

    generateCode: function () {
        const namePart = this.state.userName.replace(/[^a-zA-Z]/g, '').toUpperCase().substring(0, 4);
        const rolePart = this.state.roleName.substring(0, 4).toUpperCase();
        const randomPart = Math.floor(1000 + Math.random() * 9000);
        const datePart = new Date().getFullYear();
        return `DHL-${rolePart}-${namePart}-${randomPart}`;
    }
};
