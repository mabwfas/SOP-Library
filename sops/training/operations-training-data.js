// Operations & Routine Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Productivity Mastery

const trainingTasks = [
    {
        id: 1,
        title: "Ops Mindset",
        description: "The Machine",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Consistency > Intensity",
            "🛡️ Concept: If it's not written down, it doesn't exist",
            "🚀 Goal: Automate, Delegate, Eliminate"
        ]
    },
    {
        id: 2,
        title: "Daily Routine",
        description: "Winning the Morning",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🌅 Habit: The 'Eat the Frog' Method",
            "📅 Habit: The 'End of Day' Review",
            "🛑 Rule: No Meetings before 11am (Deep Work)"
        ]
    },
    {
        id: 3,
        title: "Inbox Zero",
        description: "Email Hygiene",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📥 Method: The 4 D's (Delete, Delegate, Defer, Do)",
            "📥 Method: Archive Everything",
            "🚫 Trap: Using Inbox as a To-Do List"
        ]
    },
    {
        id: 4,
        title: "File Organization",
        description: "Google Drive Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📂 Structure: Client > Project > Assets",
            "🔍 Naming: YYYY-MM-DD_Client_Project_Type",
            "⛔ Trap: 'Untitled Folder 2'"
        ]
    },
    {
        id: 5,
        title: "Meeting Management",
        description: "Respecting Time",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📝 Rule: No Agenda = No Meeting",
            "⏱️ Rule: Default to 25 mins (not 60)",
            "✅ Output: Action Items (Who, What, When)"
        ]
    },
    {
        id: 6,
        title: "SOP Creation",
        description: "Cloning Yourself",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "📹 Tool: Loom for 'How-To'",
            "📄 Doc: Step-by-Step Checklists",
            "🔄 Update: SOPs are living documents"
        ]
    },
    {
        id: 7,
        title: "Password Security",
        description: "LastPass / 1Password",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🔐 Rule: Never share via Slack/Email",
            "🔐 Rule: Unique Passwords for everything",
            "🔐 Rule: 2FA enabled everywhere"
        ]
    },
    {
        id: 8,
        title: "Slack Etiquette",
        description: "Async Comm",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔇 Status: 'In the Zone' vs 'Available'",
            "🧵 Threading: Keep channels clean",
            "🔔 Notif: Turn them OFF for non-urgent channels"
        ]
    },
    {
        id: 9,
        title: "Task Management",
        description: "ClickUp / Asana",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "✅ Habit: Due Dates are mandatory",
            "✅ Habit: Assignee = One person (never two)",
            "✅ Habit: Description = Definition of Done"
        ]
    },
    {
        id: 10,
        title: "Health & Burnout",
        description: "Sustainable High Performance",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "💧 Habit: Hydration",
            "🚶 Habit: The 20-20-20 Rule (Eyes)",
            "🛑 Sign: Cynicism & Exhaustion"
        ]
    },
    {
        id: 11,
        title: "Feedback Loop",
        description: "Kaizen",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔄 Weekly: What went well? What broke?",
            "🔄 Monthly: Process Audit",
            "🗣️ Skill: Radical Candor"
        ]
    },
    {
        id: 12,
        title: "Emergency Protocol",
        description: "When Systems Fail",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🔥 Chain of Command: Who to call?",
            "🔥 Backup: Offline Internet options",
            "🔥 Backup: Access to Critical Info"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: MINDSET - The Machine</h2>

<div class="content-section">
    <h3>⚙️ You are an Operator</h3>
    <p>Creatives make chaos. Operators make order. Your job is to build the tracks so the train can run at 300mph.</p>
</div>

<div class="content-section">
    <h3>📝 Write it Down</h3>
    <p>If you solve a problem once, you solve it. If you solve it twice, write a process. Never solve the same problem 3 times.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Friction Hunt</h4>
        <p>Identify 3 things you did this week that annoyed you or took too long. How can they be automated?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: DAILY ROUTINE</h2>

<div class="content-section">
    <h3>🐸 Eat the Frog</h3>
    <p>Do the hardest, most annoying task FIRST thing in the morning. Everything else is easy after that.</p>
</div>

<div class="content-section">
    <h3>🛑 Deep Work Blocks</h3>
    <p>Block 10am - 12pm on your calendar. "No Meetings". Turn off Slack. This is when the real work happens.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scheduling</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Ideal Day</h4>
        <p>Map out your Ideal Work Day hour-by-hour. Include breaks and a hard stop time.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Routine</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: INBOX ZERO</h2>

<div class="content-section">
    <h3>📥 The 4 D's</h3>
    <ul>
        <li><strong>Delete:</strong> Junk.</li>
        <li><strong>Delegate:</strong> Forward to someone else.</li>
        <li><strong>Defer:</strong> Snooze until tomorrow.</li>
        <li><strong>Do:</strong> If < 2 mins, do it now.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📂 Archive, Don't Delete</h3>
    <p>Archive emails once handled. You might need them for evidence later. Keep the Inbox empty.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Triage</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Decision Time</h4>
        <p>Email: Client asks for a refund (complex). 4 D's: What do you do? (Defer/Do - Schedule it).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Email</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: FILE ORGANIZATION</h2>

<div class="content-section">
    <h3>🔍 Naming Convention</h3>
    <p>If you get hit by a bus, can someone find the file? <br>Bad: "Draft 1.pdf" <br>Good: "2023-10-25_Nike_Logo_V1.pdf"</p>
</div>

<div class="content-section">
    <h3>📂 No Orphans</h3>
    <p>Every file must live in a folder. No loose files in the root directory.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Cleanup</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Rename</h4>
        <p>Rename "marketing plan final final.docx" using our YYYY-MM-DD standard.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Files</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: MEETING MANAGEMENT</h2>

<div class="content-section">
    <h3>📝 The Agenda Rule</h3>
    <p>Decline any invite without an Agenda. "What are we trying to solve?"</p>
</div>

<div class="content-section">
    <h3>⏱️ Parkinsons Law</h3>
    <p>Work expands to fill the time. If you book 60 mins, it takes 60 mins. Book 25 mins.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Preparation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Agenda Creation</h4>
        <p>Create a bullet-point agenda for a "Weekly Team Sync". Goal: Update on 3 projects.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Meetings</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: SOP CREATION</h2>

<div class="content-section">
    <h3>📹 Loom it First</h3>
    <p>Don't write first. Record yourself doing it on Loom. Transcribe later. It's faster.</p>
</div>

<div class="content-section">
    <h3>🔄 Living Docs</h3>
    <p>Processes change. If an SOP is outdated, it's dangerous. Update it the moment the process changes.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Documentation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: The How-To</h4>
        <p>Write step 1-3 for "How to refund a customer on Stripe". Be ultra-specific.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about SOPs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: PASSWORD SECURITY</h2>

<div class="content-section">
    <h3>🔐 No Texting Passwords</h3>
    <p>If you text a password, it exists forever on a server. Use LastPass Sharing. Revoke access when done.</p>
</div>

<div class="content-section">
    <h3>🔐 2FA</h3>
    <p>Google Authenticator. SMS 2FA is hackable (SIM Swapping). App is better.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Security Check</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Audit</h4>
        <p>Check "HaveIBeenPwned.com" for your email. What do you do if you are compromised?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Security</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: SLACK ETIQUETTE</h2>

<div class="content-section">
    <h3>🧵 Threading</h3>
    <p>Don't reply in the main channel. Start a thread. It keeps the channel readable.</p>
</div>

<div class="content-section">
    <h3>🔇 Notification Diet</h3>
    <p>You can't do Deep Work if Slack dings every 30 seconds. Turn off sound. Check Slack once per hour.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Formatting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: The Update</h4>
        <p>Write a daily standup update. Format it with bolds and emojis for readability.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Slack</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: TASK MANAGEMENT</h2>

<div class="content-section">
    <h3>One Owner</h3>
    <p>If two people own a task, nobody owns it. Assign ONE person.</p>
</div>

<div class="content-section">
    <h3>Definition of Done</h3>
    <p>Task: "Do research". (Bad). <br>Task: "Find 10 competitors and list pricing in Excel". (Good).</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Task Creation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Delegation</h4>
        <p>Create a task for a VA to "Book travel". Include every detail they need (Flight times, seat pref, passport info location).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tasks</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: HEALTH & BURNOUT</h2>

<div class="content-section">
    <h3>🏃‍♂️ The Sprint</h3>
    <p>Business is a marathon of sprints. You can sprint for 2 weeks, then you MUST rest. Rest is productive.</p>
</div>

<div class="content-section">
    <h3>💧 Brain Fog</h3>
    <p>Usually caused by dehydration or lack of sleep. Don't push through. Fix the biology.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Plan</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Recharge</h4>
        <p>Plan a "Digital Detox" evening. What will you do instead of scrolling?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Health</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: FEEDBACK LOOP</h2>

<div class="content-section">
    <h3>🔄 Kaizen</h3>
    <p>Continuous Improvement. 1% better every day = 37x better in a year.</p>
</div>

<div class="content-section">
    <h3>🗣️ Radical Candor</h3>
    <p>Care Personally, Challenge Directly. "You are great, but this work is not up to your standard."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Review</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Retro</h4>
        <p>Run a 5-minute personal retrospective on last week. 1 Good thing, 1 Bad thing, 1 Fix.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Feedback</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: EMERGENCY PROTOCOL</h2>

<div class="content-section">
    <h3>🔥 The Bus Factor</h3>
    <p>If you get hit by a bus, does the business stop? If yes, you are a bottleneck. Document everything.</p>
</div>

<div class="content-section">
    <h3>📡 Offline Plan</h3>
    <p>Internet dies immediately before a client call. Do you have a hotspot? Do you have their phone number? Be ready.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Fire Drill</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Disaster Prep</h4>
        <p>Laptop breaks. Hard drive fried. How long until you are working again? (Cloud backups).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Operations Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1
    {
        question: "Why write things down?",
        options: ["To look busy", "If it's not written, it doesn't exist", "To save paper", "Boredom"],
        correct: 1
    },
    // Task 2
    {
        question: "Eat the Frog means...",
        options: ["Eating healthy", "Doing the hardest task first", "Kissing frogs", "Working at night"],
        correct: 1
    },
    // Task 3
    {
        question: "What is Inbox Zero?",
        options: ["Deleting your account", "No emails in inbox (Archived/Deleted/Handled)", "Zero friends", "Spam filter"],
        correct: 1
    },
    // Task 4
    {
        question: "Best file name?",
        options: ["Doc1.txt", "2023-10-01_SOP_V2.pdf", "Final Final.pdf", "Untitled"],
        correct: 1
    },
    // Task 5
    {
        question: "Shorter meetings are...",
        options: ["Rude", "More productive (Parkinson's Law)", "Impossible", "Illegal"],
        correct: 1
    },
    // Task 6
    {
        question: "SOP stands for...",
        options: ["Standard Operating Procedure", "Super Old Person", "Soup On Plate", "Standard Option Plan"],
        correct: 0
    },
    // Task 7
    {
        question: "Never share passwords via...",
        options: ["LastPass", "1Password", "Plain text (Slack/Email)", "Encrypted folder"],
        correct: 2
    },
    // Task 8
    {
        question: "Slack threads help...",
        options: ["Hide secrets", "Keep channels clean/readable", "Confuse people", "Generate noise"],
        correct: 1
    },
    // Task 10
    {
        question: "Burnout is often caused by...",
        options: ["Working too little", "Not resting / recovery deficit", "Too much money", "Winning"],
        correct: 1
    },
    // Task 12
    {
        question: "The Bus Factor Check?",
        options: ["Do you take the bus?", "Will business break if you disappear?", "Bus schedule", "Transportation cost"],
        correct: 1
    }
];
