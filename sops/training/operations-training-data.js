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
<h2>📚 TASK 1: OPERATIONS MINDSET - The Machine</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into operations, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 Our Journey: Point A to Point B</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point A (Now):</strong> ₹9.2 Crores</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point B (2027):</strong> ₹75 Crores</td>
            </tr>
        </table>
        <p style="margin: 0;">Every team member contributes to this journey, and every team member benefits from it through our equity-sharing model—<strong>even interns from Day 1</strong>.</p>
    </div>
</div>

<!-- THE INTERCONNECTED CHAIN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1)); border: 2px solid rgba(99, 102, 241, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #818CF8; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #818CF8; font-size: 1.2em;">⭐ YOU (Ops)</strong> → <strong>THE SYSTEMS ARCHITECT - build processes that make everyone efficient</strong><br>
            ↓<br>
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries smoothly<br>
            ↓<br>
            <strong style="color: #F472B6;">Development</strong> → delivers on streamlined workflows<br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → predictable, quality delivery<br>
            ↓<br>
            <strong style="color: #A78BFA;">Scale & Growth</strong> → systems enable 8x revenue growth
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-left: 4px solid #6366F1; padding: 15px; margin: 15px 0;">
        <strong style="color: #818CF8;">⚙️ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As an Operations specialist, you are the <strong>SYSTEMS ARCHITECT</strong> who enables everyone to work at their best. When you automate a task, you free up 10 hours/week for the team. When you document a process, you prevent 100 mistakes. When you optimize a workflow, you shave days off project timelines. Your systems are the invisible force multiplier behind our ₹9.2Cr → ₹75Cr journey.</p>
    </div>
    
    <p style="color: #818CF8; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No systems = Chaos = Inconsistent delivery = Chain breaks. You build the machine that scales.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #EF4444; margin-top: 0;">🔥 THE OPERATOR'S MISSION</h3>
    <p style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 20px 0;">
        "Creatives make chaos. <span style="color: #10B981;">Operators make order.</span><br>
        Your job is to build the tracks so the train can run at 300mph."
    </p>
    <p>Every minute you spend on a repeatable task is a minute stolen from growth. An operator's job is to <strong>eliminate friction</strong> from every process, making the impossible feel effortless.</p>
</div>

<div class="content-section">
    <h3>📊 The Operator vs. The Firefighter</h3>
    <p>Most people confuse being busy with being productive. Here's the difference:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.95em;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Trait</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">🔥 Firefighter (Bad)</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">⚙️ Operator (Good)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Approach</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reacts to problems</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Prevents problems</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Documentation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"It's in my head"</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Everything is written</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Repeating Tasks</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Does it 100 times</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Automates after 2nd time</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">When Absent</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Everything breaks</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Everything runs smoothly</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Feeling</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"I'm so busy!"</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"I'm building leverage"</td></tr>
            <tr><td style="padding: 10px;">Outcome</td><td style="padding: 10px;">Burnout</td><td style="padding: 10px;">Scale</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1)); border-left: 4px solid #10B981; padding: 20px; border-radius: 8px;">
    <h3 style="color: #10B981;">📝 THE RULE OF THREE</h3>
    <p style="font-size: 1.1em; font-weight: bold;">If you solve a problem once, you solve it.<br>If you solve it twice, write a process.<br><span style="color: #EF4444;">Never solve the same problem 3 times.</span></p>
    <ul>
        <li><strong>1st time:</strong> Just fix it (you're learning)</li>
        <li><strong>2nd time:</strong> Write down how you fixed it (SOP draft)</li>
        <li><strong>3rd time:</strong> This should NEVER happen. Either automate it, delegate it, or eliminate the root cause.</li>
    </ul>
    <p><strong>Real Example:</strong> A client asks for their invoice. You email it manually (1st time). Same client asks next month (2nd time). You write an SOP: "Invoices auto-email on the 1st of each month via Zapier." Now it never happens again.</p>
</div>

<div class="content-section">
    <h3>🎯 THE ADE FRAMEWORK</h3>
    <p>Every task that crosses your desk should go through this filter:</p>
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #6366F1;">
            <h4 style="color: #818CF8; margin-top: 0;">🤖 A = AUTOMATE</h4>
            <p><strong>Question:</strong> Can a machine do this?</p>
            <p><strong>Tools:</strong> Zapier, Make.com, Google Apps Script, ChatGPT, Cron jobs</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Auto-send welcome emails when a new client signs up</li>
                <li>Auto-create Google Drive folders for new projects</li>
                <li>Auto-post social media content at scheduled times</li>
                <li>Auto-generate reports every Monday morning</li>
            </ul>
        </div>
        <div style="background: rgba(245, 158, 11, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #FBBF24; margin-top: 0;">👥 D = DELEGATE</h4>
            <p><strong>Question:</strong> Can someone else do this (80% as well)?</p>
            <p><strong>To Whom:</strong> VA, Intern, Junior team member, Freelancer</p>
            <p><strong>Key Insight:</strong> 80% done by someone else is better than 100% done by you. Your time is worth more.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Data entry → VA</li>
                <li>Basic design edits → Junior designer</li>
                <li>Customer follow-ups → Support team</li>
                <li>Research → Intern</li>
            </ul>
        </div>
        <div style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #EF4444;">
            <h4 style="color: #F87171; margin-top: 0;">🗑️ E = ELIMINATE</h4>
            <p><strong>Question:</strong> Does this even need to be done?</p>
            <p><strong>Key Insight:</strong> The most productive thing is often saying NO.</p>
            <p><strong>Examples of things to eliminate:</strong></p>
            <ul>
                <li>Weekly reports nobody reads → Just stop</li>
                <li>Meetings without agendas → Decline or cancel</li>
                <li>Approval steps that add no value → Remove</li>
                <li>Manual logging that could be automatic → Automate or skip</li>
            </ul>
        </div>
    </div>
    <p style="background: rgba(139, 92, 246, 0.2); padding: 15px; border-radius: 8px; text-align: center; font-weight: bold;">
        🎯 ADE Priority: Always try to <span style="color: #EF4444;">Eliminate</span> first, then <span style="color: #6366F1;">Automate</span>, then <span style="color: #F59E0B;">Delegate</span>. Only do it yourself as a last resort.
    </p>
</div>

<div class="content-section">
    <h3>📚 THE PROCESS STACK</h3>
    <p>Think of your operations as a 4-layer stack. The higher you go, the more leverage you create:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.95em;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Level</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Type</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Description</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Time Saved</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: rgba(239, 68, 68, 0.1);"><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Level 1</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Chaos</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">You do everything manually, every time</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">0%</td></tr>
            <tr style="background: rgba(245, 158, 11, 0.1);"><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Level 2</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Checklist</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Written step-by-step instructions</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">30%</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.1);"><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Level 3</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Template</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pre-filled documents (just modify)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">60%</td></tr>
            <tr style="background: rgba(99, 102, 241, 0.1);"><td style="padding: 10px;">Level 4</td><td style="padding: 10px;">Automation</td><td style="padding: 10px;">Runs without you (Zapier, scripts)</td><td style="padding: 10px;">95%</td></tr>
        </tbody>
    </table>
    <p><strong>Your Goal:</strong> Move every recurring task UP the stack. Start with Level 2 (write it down), then evolve to Levels 3 and 4.</p>
</div>

<div class="content-section">
    <h3>💡 THE 5 OPERATOR MANTRAS</h3>
    <ol>
        <li><strong>"If it's not written, it doesn't exist."</strong> — Document everything. Your brain is for thinking, not remembering.</li>
        <li><strong>"Systems beat willpower."</strong> — Don't rely on discipline. Build systems that make the right action automatic.</li>
        <li><strong>"The best process is the one that runs without you."</strong> — If you're essential to a process, you've failed as an operator.</li>
        <li><strong>"Friction is the enemy."</strong> — Every extra click, email, or approval slows things down. Hunt friction and kill it.</li>
        <li><strong>"Perfect is the enemy of shipped."</strong> — An 80% process today beats a 100% process next month.</li>
    </ol>
</div>

<div class="content-section">
    <h3>🔍 FRICTION EXAMPLES: Before vs. After</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(239, 68, 68, 0.5);">Task</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(239, 68, 68, 0.5);">🔥 Before (Friction)</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(16, 185, 129, 0.5);">✅ After (Operator)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client Onboarding</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Manually send 10 emails, create folder, add to CRM</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">One form triggers Zapier to do all 10 steps</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Weekly Report</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pull data from 5 tools, format in spreadsheet (2 hrs)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Google Looker Studio auto-pulls live data</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Invoice Follow-up</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Manually check who hasn't paid, send reminder</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Freshbooks auto-sends 3 reminders before flagging you</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Meeting Notes</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Type notes during call, email to everyone after</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Otter.ai transcribes, sends auto-summary to Slack</td></tr>
            <tr><td style="padding: 10px;">Password Sharing</td><td style="padding: 10px;">Copy-paste in Slack (security risk!)</td><td style="padding: 10px;">Share via 1Password vault link</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK 1: The Friction Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Friction Hunt</h4>
        <p>This week, keep a "Friction Log". Note every task that:</p>
        <ul>
            <li>Annoyed you</li>
            <li>Took longer than it should</li>
            <li>Required you to switch between 3+ tools</li>
            <li>Made you think "I've done this before"</li>
        </ul>
        <p><strong>Deliverable:</strong> Identify your top 3 friction points and propose an ADE solution for each.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.3); padding: 25px; border-radius: 12px; margin-top: 15px;">
    <h3>✅ IMPLEMENTATION TASK 2: The Process Stack Assessment</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #FBBF24; margin-top: 0;">Exercise: Stack Your Processes</h4>
        <p>List 5 recurring tasks you do weekly and rate each on the Process Stack (Level 1-4):</p>
        <ol>
            <li>Task: _____________ | Current Level: ___</li>
            <li>Task: _____________ | Current Level: ___</li>
            <li>Task: _____________ | Current Level: ___</li>
            <li>Task: _____________ | Current Level: ___</li>
            <li>Task: _____________ | Current Level: ___</li>
        </ol>
        <p><strong>Goal:</strong> Move at least 2 tasks up one level this month.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px; margin-top: 15px;">
    <h3>✅ IMPLEMENTATION TASK 3: The "Clone Yourself" Test</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">Exercise: The Vacation Test</h4>
        <p>Imagine you're going on vacation for 2 weeks with NO phone. Answer these questions:</p>
        <ul>
            <li>What would break while you're gone?</li>
            <li>What do only YOU know how to do?</li>
            <li>Who would people call instead of you?</li>
        </ul>
        <p><strong>Goal:</strong> Every "break point" needs an SOP or backup person BEFORE you actually go on vacation.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about the Operator Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
        <li>💡 Topics: Rule of Three, ADE Framework, Process Stack, Friction identification</li>
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


// Make task content available globally for openTask() function
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
if (typeof task3Content !== 'undefined') window.task3Content = task3Content;
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task5Content !== 'undefined') window.task5Content = task5Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task7Content !== 'undefined') window.task7Content = task7Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task9Content !== 'undefined') window.task9Content = task9Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;
if (typeof task11Content !== 'undefined') window.task11Content = task11Content;
if (typeof task12Content !== 'undefined') window.task12Content = task12Content;
if (typeof task13Content !== 'undefined') window.task13Content = task13Content;
