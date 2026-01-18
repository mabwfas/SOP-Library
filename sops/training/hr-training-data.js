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

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

const task1Quiz = [
    { q: "What is the core mindset for this role?", o: ["Just complete tasks", "Revenue-focused excellence", "Speed only", "Minimum effort"], c: 1 },
    { q: "Digital Heroes standard is:", o: ["Basic quality", "Premium quality only", "Cheap and fast", "Average"], c: 1 },
    { q: "Client satisfaction is:", o: ["Optional", "Our primary goal", "Secondary", "Not important"], c: 1 },
    { q: "Quality vs Speed priority:", o: ["Speed always", "Quality with efficiency", "Neither", "Random"], c: 1 },
    { q: "Continuous learning is:", o: ["Optional", "Essential for growth", "Wasted time", "Not needed"], c: 1 },
    { q: "Team collaboration means:", o: ["Work alone", "Share knowledge and support", "Compete only", "Ignore others"], c: 1 },
    { q: "Taking ownership means:", o: ["Blame others", "Be responsible for outcomes", "Avoid responsibility", "Wait for instructions"], c: 1 },
    { q: "Professional communication is:", o: ["Casual", "Clear, timely, and respectful", "Optional", "Slow"], c: 1 },
    { q: "Handling mistakes correctly:", o: ["Hide them", "Acknowledge and fix quickly", "Blame system", "Ignore"], c: 1 },
    { q: "Growth at Digital Heroes:", o: ["Limited", "Based on performance and initiative", "Random", "Impossible"], c: 1 }
];

const task2Quiz = [
    { q: "Understanding client needs is:", o: ["Optional", "Foundation of good work", "Not important", "Secondary"], c: 1 },
    { q: "Asking clarifying questions is:", o: ["Annoying", "Professional and necessary", "Waste of time", "Avoid always"], c: 1 },
    { q: "Active listening involves:", o: ["Interrupting", "Full attention and understanding", "Multi-tasking", "Ignoring details"], c: 1 },
    { q: "Documentation is:", o: ["Optional", "Critical for clarity", "Waste of time", "Not needed"], c: 1 },
    { q: "Following SOPs ensures:", o: ["Boredom", "Consistency and quality", "Slow work", "Nothing"], c: 1 },
    { q: "Deadline management means:", o: ["Miss deadlines", "Deliver on time or communicate early", "Ignore time", "Rush everything"], c: 1 },
    { q: "Quality check before delivery:", o: ["Skip it", "Always verify your work", "Client will check", "Optional"], c: 1 },
    { q: "Feedback should be:", o: ["Ignored", "Used for improvement", "Argued against", "Avoided"], c: 1 },
    { q: "Problem escalation path:", o: ["Hide problems", "Inform senior when stuck", "Ignore issues", "Wait it out"], c: 1 },
    { q: "Daily updates are:", o: ["Unnecessary", "Important for transparency", "Micromanagement", "Optional"], c: 1 }
];

const task3Quiz = [
    { q: "Tool proficiency is:", o: ["Optional", "Essential for efficiency", "Not needed", "Basic only"], c: 1 },
    { q: "Best practice adherence:", o: ["Sometimes", "Always follow proven methods", "Never", "Random"], c: 1 },
    { q: "Process optimization:", o: ["Avoid change", "Continuously improve", "Resist", "Ignore"], c: 1 },
    { q: "Cross-functional knowledge:", o: ["Not needed", "Adds value to work", "Confusing", "Avoid"], c: 1 },
    { q: "Attention to detail:", o: ["Overrated", "Differentiates premium work", "Slow", "Skip details"], c: 1 },
    { q: "Standard templates:", o: ["Unnecessary", "Save time and ensure consistency", "Boring", "Avoid"], c: 1 },
    { q: "Automation opportunities:", o: ["Threats", "Increase efficiency", "Avoid", "Not possible"], c: 1 },
    { q: "Knowledge sharing:", o: ["Competitive disadvantage", "Strengthens the team", "Avoid", "Optional"], c: 1 },
    { q: "Error prevention:", o: ["Not possible", "Better than error correction", "Not important", "Skip"], c: 1 },
    { q: "Work organization:", o: ["Random", "Systematic approach works best", "Chaos is good", "Avoid planning"], c: 1 }
];

const task4Quiz = [
    { q: "Communication clarity:", o: ["Optional", "Prevents misunderstandings", "Slow", "Not needed"], c: 1 },
    { q: "Response time matters:", o: ["Not really", "Shows professionalism", "Slow is fine", "Ignore"], c: 1 },
    { q: "Written communication:", o: ["Casual", "Professional and clear", "Any style", "Avoid"], c: 1 },
    { q: "Meeting preparation:", o: ["Not needed", "Shows respect and efficiency", "Waste of time", "Optional"], c: 1 },
    { q: "Follow-up actions:", o: ["Forget them", "Track and complete", "Optional", "Ignore"], c: 1 },
    { q: "Conflict resolution:", o: ["Avoid", "Address professionally", "Escalate everything", "Ignore"], c: 1 },
    { q: "Giving updates:", o: ["When asked", "Proactively share progress", "Never", "Only problems"], c: 1 },
    { q: "Asking for help:", o: ["Sign of weakness", "Smart when needed", "Never", "Avoid always"], c: 1 },
    { q: "Handling criticism:", o: ["Get defensive", "Accept and improve", "Ignore", "Argue back"], c: 1 },
    { q: "Positive attitude:", o: ["Fake", "Improves productivity", "Not important", "Optional"], c: 1 }
];

const task5Quiz = [
    { q: "Priority management:", o: ["Random order", "Focus on high impact first", "Easy first", "Avoid prioritizing"], c: 1 },
    { q: "Time blocking:", o: ["Unnecessary", "Increases focus", "Too rigid", "Avoid"], c: 1 },
    { q: "Multi-tasking:", o: ["Efficient", "Reduces quality", "Best approach", "Always do"], c: 1 },
    { q: "Deep work sessions:", o: ["Not productive", "Allow complex problem solving", "Waste time", "Avoid"], c: 1 },
    { q: "Distraction management:", o: ["Impossible", "Essential for productivity", "Not needed", "Ignore"], c: 1 },
    { q: "Break scheduling:", o: ["Lazy", "Improves sustained performance", "Avoid", "Never break"], c: 1 },
    { q: "Energy management:", o: ["Not relevant", "Match tasks to energy levels", "Ignore", "Push through"], c: 1 },
    { q: "Task batching:", o: ["Inefficient", "Reduces context switching", "Avoid", "Random is better"], c: 1 },
    { q: "Deadline buffer:", o: ["Unnecessary", "Accounts for unexpected issues", "Lazy", "Skip"], c: 1 },
    { q: "Progress tracking:", o: ["Micromanagement", "Keeps work on track", "Avoid", "Optional"], c: 1 }
];

const task6Quiz = [
    { q: "Quality standards:", o: ["Negotiable", "Must be maintained", "Optional", "Client decides"], c: 1 },
    { q: "Review process:", o: ["Skip it", "Catches errors before delivery", "Waste of time", "Optional"], c: 1 },
    { q: "Peer feedback:", o: ["Threatening", "Valuable for improvement", "Avoid", "Ignore"], c: 1 },
    { q: "Revision handling:", o: ["Complain", "Professional and timely", "Argue", "Delay"], c: 1 },
    { q: "Client expectations:", o: ["Ignore", "Set and exceed appropriately", "Lower them", "Avoid discussing"], c: 1 },
    { q: "Scope clarity:", o: ["Not important", "Prevents scope creep", "Optional", "Ignore"], c: 1 },
    { q: "Deliverable standards:", o: ["Variable", "Consistent premium quality", "Random", "Basic"], c: 1 },
    { q: "Testing before delivery:", o: ["Skip", "Always verify", "Optional", "Client tests"], c: 1 },
    { q: "Documentation of work:", o: ["Not needed", "Enables handoff and clarity", "Waste of time", "Skip"], c: 1 },
    { q: "Continuous improvement:", o: ["Not possible", "Part of professional growth", "Unnecessary", "Avoid"], c: 1 }
];

const task7Quiz = [
    { q: "Team support:", o: ["Competition", "Collaborative success", "Avoid helping", "Only when asked"], c: 1 },
    { q: "Knowledge transfer:", o: ["Keep secrets", "Share to strengthen team", "Avoid", "Optional"], c: 1 },
    { q: "Cross-training:", o: ["Waste of time", "Creates backup capabilities", "Unnecessary", "Avoid"], c: 1 },
    { q: "Positive team culture:", o: ["Not important", "Improves productivity", "Fake", "Optional"], c: 1 },
    { q: "Constructive feedback:", o: ["Avoid", "Helps improvement", "Offensive", "Skip"], c: 1 },
    { q: "Recognition of others:", o: ["Unnecessary", "Motivates team", "Fake", "Avoid"], c: 1 },
    { q: "Conflict with colleagues:", o: ["Escalate immediately", "Address professionally", "Ignore always", "Complain"], c: 1 },
    { q: "Team meetings:", o: ["Waste of time", "Align and coordinate work", "Skip when possible", "Unnecessary"], c: 1 },
    { q: "Shared responsibilities:", o: ["Avoid", "Distribute appropriately", "Do everything alone", "Ignore"], c: 1 },
    { q: "Celebrating wins:", o: ["Unnecessary", "Builds morale", "Waste of time", "Skip"], c: 1 }
];

const task8Quiz = [
    { q: "Difficult situations require:", o: ["Panic", "Calm professional response", "Avoid", "Ignore"], c: 1 },
    { q: "Client complaints:", o: ["Argue back", "Listen and resolve", "Ignore", "Blame others"], c: 1 },
    { q: "Mistake acknowledgment:", o: ["Hide", "Own and fix quickly", "Blame system", "Deny"], c: 1 },
    { q: "Pressure handling:", o: ["Break down", "Stay focused and prioritize", "Complain", "Give up"], c: 1 },
    { q: "Unexpected changes:", o: ["Refuse", "Adapt professionally", "Complain loudly", "Quit"], c: 1 },
    { q: "Tight deadlines:", o: ["Miss them", "Communicate and prioritize", "Ignore quality", "Panic"], c: 1 },
    { q: "Unclear requirements:", o: ["Guess", "Ask for clarification", "Ignore", "Complain"], c: 1 },
    { q: "Resource constraints:", o: ["Give up", "Find creative solutions", "Complain", "Do nothing"], c: 1 },
    { q: "Feedback rejection:", o: ["Get upset", "Ask for specifics and improve", "Argue", "Ignore"], c: 1 },
    { q: "Burnout prevention:", o: ["Not important", "Essential for sustained performance", "Ignore", "Push through"], c: 1 }
];

const task9Quiz = [
    { q: "Process adherence:", o: ["Optional", "Ensures quality and consistency", "Slows work", "Ignore"], c: 1 },
    { q: "Checklist usage:", o: ["Unnecessary", "Prevents missed steps", "Waste of time", "Skip"], c: 1 },
    { q: "Standard operating procedures:", o: ["Ignore", "Follow for consistency", "Outdated", "Optional"], c: 1 },
    { q: "Quality gates:", o: ["Skip", "Ensure standards are met", "Slow", "Unnecessary"], c: 1 },
    { q: "Approval workflows:", o: ["Avoid", "Ensure proper sign-off", "Bureaucracy", "Skip"], c: 1 },
    { q: "Version control:", o: ["Not needed", "Tracks changes safely", "Complex", "Avoid"], c: 1 },
    { q: "Backup practices:", o: ["Optional", "Essential protection", "Waste of storage", "Skip"], c: 1 },
    { q: "Security practices:", o: ["Paranoid", "Protect client and company data", "Unnecessary", "Optional"], c: 1 },
    { q: "Compliance requirements:", o: ["Ignore", "Must be followed", "Optional", "Outdated"], c: 1 },
    { q: "Audit preparation:", o: ["Panic", "Maintain records proactively", "Fake it", "Ignore"], c: 1 }
];

const task10Quiz = [
    { q: "Certification validates:", o: ["Nothing", "Competency in role", "Waste of time", "Luck"], c: 1 },
    { q: "Continuous learning:", o: ["Ends at certification", "Ongoing requirement", "Optional", "Not needed"], c: 1 },
    { q: "Video walkthrough:", o: ["Skip it", "Demonstrates practical knowledge", "Optional", "Unnecessary"], c: 1 },
    { q: "Career growth requires:", o: ["Luck only", "Skill development and initiative", "Politics", "Time only"], c: 1 },
    { q: "Professional development:", o: ["Company responsibility", "Personal responsibility", "Not important", "Optional"], c: 1 },
    { q: "Mentoring others:", o: ["Threat", "Strengthens your knowledge", "Avoid", "Not possible"], c: 1 },
    { q: "Industry updates:", o: ["Ignore", "Stay current for relevance", "Not important", "Optional"], c: 1 },
    { q: "Skill gaps:", o: ["Hide them", "Identify and address", "Ignore", "Not possible"], c: 1 },
    { q: "Performance reviews:", o: ["Avoid", "Opportunity for growth feedback", "Threatening", "Skip"], c: 1 },
    { q: "Long-term goals:", o: ["Not needed", "Guide development efforts", "Unrealistic", "Avoid"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
