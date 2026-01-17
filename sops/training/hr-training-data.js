// HR Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program

const trainingTasks = [
    {id: 1, title: "HR Mindset", description: "People = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🧠 Concept: Hiring cost vs value", "📊 Data: Bad hire = 3x salary cost"]},
    {id: 2, title: "Tech-Savvy Hiring", description: "Developer Hiring Guide", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📞 Scripts: Phone Screen", "🎤 Scripts: Interview Questions"]},
    {id: 3, title: "Cultural Fit", description: "Beyond Skills", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Framework: STAR Method", "🚩 Red Flags: Attitude Problems"]},
    {id: 4, title: "Onboarding Excellence", description: "First 90 Days", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Checklist: Day 1", "🎯 Plan: 30-60-90"]},
    {id: 5, title: "Performance Management", description: "1:1s & Reviews", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Template: Performance Review", "💬 Script: Difficult Conversations"]},
    {id: 6, title: "Compensation", description: "Salary & Benefits", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Structure: Pay Bands", "📈 Process: Salary Reviews"]},
    {id: 7, title: "Legal Compliance", description: "Contracts & Policies", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📜 Doc: Employment Contract", "⚖️ Laws: Leave, Termination"]},
    {id: 8, title: "Employee Relations", description: "Conflict Resolution", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🤝 Process: Mediation", "📝 Doc: Written Warnings"]},
    {id: 9, title: "Exit Management", description: "Offboarding Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📋 Checklist: Exit Interview", "🔐 Process: Access Revocation"]},
    {id: 10, title: "Final Certification", description: "HR Mastery Exam", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 20 Questions", "🎥 Video Submission"]}
];

const task1Content = `
<h2>📚 TASK 1: HR MINDSET - People ARE Revenue</h2>

<div class="content-section">
    <h3>💰 The $100,000 Mistake</h3>
    <p>A bad hire doesn't just fail at their job. They:</p>
    <ul>
        <li>💸 Cost 3x their salary in recruitment, training, and severance</li>
        <li>⏰ Waste 6+ months of team productivity</li>
        <li>😤 Demotivate other team members</li>
        <li>🔄 Create a hiring cycle that repeats</li>
    </ul>
    <div class="highlight-box">
        <strong>Real Story:</strong>
        <p>We once hired a "rockstar developer" who interviewed perfectly. 3 months in, we discovered he was outsourcing his work to someone else. Total cost: $120,000 (salary, projects delayed, re-hiring, client trust damaged).</p>
        <p><strong>Lesson:</strong> Verification > Belief. Test ACTIONS, not just words.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The HR Mission</h3>
    <p>Your job is NOT to fill seats. Your job is to:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong Mindset</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to hire someone for this role"</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right Mindset</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to find someone who will multiply team output"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 The Economics of Hiring</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cost</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Job Posting + Screening</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5,000-10,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interview Time (HR + Team)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹15,000-25,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training (2-4 weeks)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹30,000-50,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad Hire Replacement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">₹1,00,000+</td></tr>
    </table>
    <div class="warning-box">
        <strong>Takeaway:</strong> Invest time in hiring RIGHT the first time. 10 minutes of extra phone screening can save months of pain.
    </div>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: TECH-SAVVY HIRING - The Developer Filter</h2>

<div class="content-section">
    <h3>📞 Phone Screen Script (10 min)</h3>
    <div class="highlight-box">
        <strong>Opening:</strong>
        <p>"Hi [Name], this is [Your Name] from Digital Heroes. I saw your application for the Web Developer role. I have a few quick questions - will take 5-10 minutes. Is this a good time?"</p>
    </div>
    
    <h4>Question 1: Laptop Ownership</h4>
    <p><strong>"Do you have your own laptop?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Yes, I have a laptop"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Continue</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"No, I'll use office computer"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ REJECT (shows dependency)</td></tr>
    </table>
    
    <h4>Question 2: Computer Usage</h4>
    <p><strong>"How many hours per day do you use a computer/laptop - not phone, computer?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"4+ hours daily"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Continue</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Mostly use phone"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ REJECT</td></tr>
    </table>
    
    <h4>Question 3: Problem-Solving</h4>
    <p><strong>"If your laptop has a problem - slow, hanging, virus - what do you do?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Google it, try to fix myself"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Tech-Savvy</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Take to repair shop"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ Not tech-minded</td></tr>
    </table>
</div>
`;

// Additional tasks would follow same pattern...
const task3Content = `<h2>📚 TASK 3: CULTURAL FIT ASSESSMENT</h2>
<div class="content-section"><h3>🎯 STAR Method</h3><p><strong>S</strong>ituation - <strong>T</strong>ask - <strong>A</strong>ction - <strong>R</strong>esult</p></div>`;

const task4Content = `<h2>📚 TASK 4: ONBOARDING EXCELLENCE</h2>
<div class="content-section"><h3>📋 Day 1 Checklist</h3><ul><li>System access setup</li><li>Team introductions</li><li>First task assignment</li></ul></div>`;

const task5Content = `<h2>📚 TASK 5: PERFORMANCE MANAGEMENT</h2>
<div class="content-section"><h3>📊 1:1 Meeting Template</h3><ul><li>What went well?</li><li>What challenges?</li><li>What support needed?</li></ul></div>`;

const task6Content = `<h2>📚 TASK 6: COMPENSATION</h2>
<div class="content-section"><h3>💰 Pay Band Structure</h3><p>Transparent salary ranges by role and experience level.</p></div>`;

const task7Content = `<h2>📚 TASK 7: LEGAL COMPLIANCE</h2>
<div class="content-section"><h3>📜 Required Documents</h3><ul><li>Offer Letter</li><li>Employment Contract</li><li>NDA</li><li>Policy Acknowledgments</li></ul></div>`;

const task8Content = `<h2>📚 TASK 8: EMPLOYEE RELATIONS</h2>
<div class="content-section"><h3>🤝 Conflict Resolution Steps</h3><ol><li>Listen to both sides</li><li>Document facts</li><li>Propose solutions</li><li>Follow up</li></ol></div>`;

const task9Content = `<h2>📚 TASK 9: EXIT MANAGEMENT</h2>
<div class="content-section"><h3>📋 Exit Checklist</h3><ul><li>Knowledge transfer</li><li>Asset return</li><li>Access revocation</li><li>Exit interview</li><li>Final settlement</li></ul></div>`;

const task10Content = `<h2>📚 TASK 10: FINAL CERTIFICATION</h2>
<div class="content-section"><h3>🎓 Exam Requirements</h3><ul><li>Pass 20/20 quiz questions</li><li>Submit 30-min video walkthrough</li></ul></div>`;

const quizQuestions = [
    {question: "A bad hire costs how much?", options: ["Same as salary", "2x salary", "3x salary or more", "Nothing"], correct: 2},
    {question: "HR's job is to...", options: ["Fill seats", "Find people who multiply output", "Interview", "Post jobs"], correct: 1},
    {question: "The phone screen should take?", options: ["1 hour", "10 minutes", "30 seconds", "2 hours"], correct: 1},
    {question: "STAR stands for?", options: ["Skills Test And Review", "Situation Task Action Result", "Standard Training And Rating", "None"], correct: 1},
    {question: "Day 1 must include?", options: ["Party", "System access and first task", "Nothing", "Vacation"], correct: 1},
    {question: "1:1 meetings should ask about?", options: ["Personal life only", "Wins, Challenges, Support needed", "Nothing", "Salary"], correct: 1},
    {question: "Exit interview purpose?", options: ["Blame", "Learn and improve", "Argue", "Skip"], correct: 1},
    {question: "NDA stands for?", options: ["No Daily Activity", "Non-Disclosure Agreement", "New Data Access", "None"], correct: 1}
];
