// Project Manager Training Data - COMPLETE OVERHAUL
// Digital Heroes PM Certification Program
// 10 Tasks, 120+ Quiz Questions, Comprehensive Content

const trainingTasks = [
    {
        id: 1,
        title: "Mindset & Philosophy",
        description: "The CEO of the Project",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Explain 'Plan Twice, Execute Once'",
            "🛡️ Concept: Emotional Intelligence in Crisis",
            "🚀 Concept: The Cost of Poor PMing"
        ]
    },
    {
        id: 2,
        title: "Communication Mastery",
        description: "The 8 Non-Negotiables",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "💬 Mastery: Handling Micromanagers",
            "🙅 Mastery: Saying 'No' without saying 'No'",
            "🌍 Mastery: Cultural nuances (US vs UK)"
        ]
    },
    {
        id: 3,
        title: "Project Lifecycle",
        description: "The 14-Day Timeline",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📅 Tactics: Day 1 Kickoff Protocol",
            "🚧 Tactics: Buffer Management (30% Rule)",
            "🔄 Tactics: The 'Definition of Done'"
        ]
    },
    {
        id: 4,
        title: "Team Leadership",
        description: "Coordination & Conflict",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🛡️ Skill: The 'Shield' Mentality",
            "🗣️ Skill: Feedback that motivates",
            "🤝 Skill: Will vs Skill Matrix"
        ]
    },
    {
        id: 5,
        title: "Scope Management",
        description: "Protecting Profitability",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🛑 Process: The Scope Change Flowchart",
            "💰 Process: Goodwill vs Quote decisions",
            "📝 Process: Change Request Documentation"
        ]
    },
    {
        id: 6,
        title: "Quality Assurance",
        description: "The 60-Point Checklist",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "✅ Check: Design QA Protocol",
            "✅ Check: Functionality QA Protocol",
            "✅ Check: Mobile Responsiveness QA"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "Mastering the Stack",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🛠️ Tool: Slack/Fiverr Communication",
            "⏱️ Tool: Time Tracking Standards",
            "📊 Tool: Reporting Dashboards"
        ]
    },
    {
        id: 8,
        title: "Crisis Management",
        description: "15 Real Scenarios",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🔥 Scenario: Client hates design",
            "🔥 Scenario: Dev made a mistake",
            "🔥 Scenario: Client refund threat"
        ]
    },
    {
        id: 9,
        title: "Metrics & Performance",
        description: "KPIs of Elite PMs",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "📈 Metric: On-time Delivery Rate",
            "⭐ Metric: Client Satisfaction Score",
            "🔄 Metric: Revision Cycle Count"
        ]
    },
    {
        id: 10,
        title: "Career Growth",
        description: "Path to Operations Manager",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🌱 Growth: Junior to Senior Path",
            "🤝 Growth: Mentorship & Reputation",
            "🎓 Growth: Continuous Learning"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: PM MINDSET & PHILOSOPHY - The CEO of the Project</h2>

<div class="content-section">
    <h3>👑 Ownership Mentality</h3>
    <p>At Digital Heroes, a Project Manager is not a "messenger". You are the <strong>CEO of the project</strong>.</p>
    <div class="highlight-box">
        <strong>The Difference:</strong>
        <ul>
            <li><strong>Average PM:</strong> "The developer is late." (Blaming)</li>
            <li><strong>Elite PM:</strong> "We are running behind schedule. I have already adjusted the roadmap and added a second dev to catch up." (Owning)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🌉 The Bridge</h3>
    <p>You are the bridge between <strong>Client Expectations</strong> (often unrealistic) and <strong>Team Capabilities</strong> (limited by time/skill). If the bridge collapses, the project fails.</p>
    <div class="warning-box">
        <strong>The "Plan Twice, Execute Once" Philosophy:</strong><br>
        Spending 1 hour on planning saves 10 hours of fixing bugs later. Never start a project without a crystal-clear roadmap.
    </div>
</div>

<div class="content-section">
    <h3>❤️ Emotional Intelligence (EQ)</h3>
    <p>Clients don't fire agencies because of bugs. They fire them because of <strong>how the bugs were handled</strong>.</p>
    <ul>
        <li><strong>Panic spreads:</strong> If you sound stressed, the client will panic.</li>
        <li><strong>Calmness is contagious:</strong> Be the rock. "We have identified the issue, and a fix is being deployed in 20 mins."</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Mindset Shift</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise: Rewrite the Update</h4>
        <p><strong>Bad Update:</strong> "Hey, the dev is sick so we can't finish today. Sorry."</p>
        <p><strong>Your Task:</strong> Rewrite this using the "Ownership Mentality". (Hint: Solution focused, new ETA, reassurance).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about PM Philosophy</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: CLIENT COMMUNICATION MASTERY</h2>

<div class="content-section">
    <h3>💬 The 8 Non-Negotiable Rules</h3>
    <ol>
        <li><strong>Over-communicate:</strong> Silence = Anxiety. Even "nothing to report" is a report.</li>
        <li><strong>Ack within 1 hour:</strong> Even just "Received, checking now."</li>
        <li><strong>No Open Loops:</strong> Never end a message without a "Next Step" or ETA.</li>
        <li><strong>Video > Text:</strong> If it's complex, send a Loom.</li>
        <li><strong>Bad News Early:</strong> Delays age like milk, not wine. Tell them ASAP.</li>
        <li><strong>Solution, not Problem:</strong> Never present a problem without 2 solutions.</li>
        <li><strong>Tone Matching:</strong> Mirror their formality (but stay professional).</li>
        <li><strong>The "Driver" Seat:</strong> You tell them what happens next. Don't ask.</li>
    </ol>
</div>

<div class="content-section">
    <h3>🚫 Saying "No" Without Saying "No"</h3>
    <div class="highlight-box">
        Instead of "We can't do that," try:<br><br>
        <em>"That's a great idea! To include that within the current timeline, we'd need to pause the [Other Feature]. Or, we can add it to Phase 2 as a separate sprint. Which do you prefer?"</em>
    </div>
</div>

<div class="content-section">
    <h3>🧟‍♂️ Handling Difficult Personalities</h3>
    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="background: rgba(255,255,255,0.1);">
            <th style="padding: 10px; border: 1px solid #ddd;">Type</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Strategy</th>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>The Micromanager</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">They are anxious. Overwhelm them with updates before they ask.</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>The Ghost</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">"If I don't hear back by Friday, the timeline will slip by 3 days." (Consequence).</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scripting</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise: The Delay Notification</h4>
        <p>The project is delayed by 4 days because a plugin failed. Write the email to the client using the "Bad News Early" and "Solution" rules.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Communication Protocols</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: PROJECT LIFECYCLE - The 14-Day Sprint</h2>

<div class="content-section">
    <h3>📅 The Digital Heroes Timeline</h3>
    <p>Standard Shopify Build (14 Days)</p>
    <ul>
        <li><strong>Day 1-2:</strong> Kickoff & Assets (The "Foundation")</li>
        <li><strong>Day 3-5:</strong> Design First Draft (Figma/Adobe)</li>
        <li><strong>Day 6-9:</strong> Development (The "Build")</li>
        <li><strong>Day 10:</strong> Internal QA (The "Filter")</li>
        <li><strong>Day 11:</strong> Client Review (The "Reveal")</li>
        <li><strong>Day 12-13:</strong> Revisions (The "Polish")</li>
        <li><strong>Day 14:</strong> Launch & Handoff (The "Party")</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚧 Buffer Management</h3>
    <div class="warning-box">
        <strong>The 30% Rule:</strong><br>
        If a dev says it takes 10 hours, quote 13 hours to the client. Things <em>always</em> break.
    </div>
</div>

<div class="content-section">
    <h3>✅ The Definition of Done (DoD)</h3>
    <p>A task is not "done" when the code is written. It is done when:</p>
    <ol>
        <li>It works on Desktop.</li>
        <li>It works on Mobile.</li>
        <li>It matches the Design.</li>
        <li>No console errors.</li>
        <li>Speed test passed.</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Planning</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise: Build the Roadmap</h4>
        <p>A client signs on Monday. Map out the exact dates for: Kickoff, Design Review, Dev Start, QA, and Launch. Account for the weekend.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Timeline & DoD</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: TEAM LEADERSHIP & COORDINATION</h2>

<div class="content-section">
    <h3>🛡️ The "Shield" Mentality</h3>
    <p>Your team needs focus. Your job is to <strong>absorb the chaos</strong> so they can code/design.</p>
    <ul>
        <li><strong>Don't:</strong> Forward every angry client message to the dev.</li>
        <li><strong>Do:</strong> Translate the client's anger into clear, actionable tasks for the dev.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🤝 Working with Creatives vs Developers</h3>
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Designers Need...</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">Visual inspiration, clear branding guides, freedom to explore.</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Developers Need...</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">Exact logic, edge cases defined, assets ready <em>before</em> they start.</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🗣️ Motivation & Feedback</h3>
    <p><strong>Praise in Public, Correct in Private.</strong> Never scold a team member in the general Slack channel.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Leadership</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise: Corrective Feedback</h4>
        <p>A Junior Dev pushed code that broke the site because they ignored the QA checklist. Draft a Slack DM to them that addresses the issue firmly but constructively.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Team Management</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: SCOPE MANAGEMENT - Profitability Protection</h2>

<div class="content-section">
    <h3>🛑 Scope Creep: The Silent Killer</h3>
    <p><em>"Can you just add this small popup?"</em> -> 4 hours of work -> $0 extra pay.</p>
    <p>Scope creep kills margins. You are the gatekeeper.</p>
</div>

<div class="content-section">
    <h3>🌳 The Scope Decision Tree</h3>
    <ol>
        <li><strong>Is it in the contract?</strong> Yes -> Do it.</li>
        <li><strong>Is it a bug/fix?</strong> Yes -> Do it.</li>
        <li><strong>Is it tiny (< 15 mins)?</strong> Do it (Goodwill) -> BUT mention it. "I'll waive the fee for this one."</li>
        <li><strong>Is it substantial?</strong> -> <strong>CHANGE REQUEST.</strong></li>
    </ol>
</div>

<div class="content-section">
    <h3>📝 The "Out of Scope" Script</h3>
    <div class="highlight-box">
        "I'd love to help with that feature! Since it wasn't in our original roadmap, I can send over a quick quote to get that added, or we can look at it for a future phase. Let me know!"
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Handling Creep</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise: The "Small Request"</h4>
        <p>Client asks to add a "Wholesale Portal" halfway through a standard project. This is a huge feature. Write your response.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Scope Control</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: QUALITY ASSURANCE (QA) - The 60-Point Gate</h2>

<div class="content-section">
    <h3>🕵️‍♀️ The QA Mindset</h3>
    <p><strong>If the client finds the bug, we have failed.</strong> You are the last line of defense.</p>
</div>

<div class="content-section">
    <h3>✅ The Core Checklist (Snippet)</h3>
    <ul>
        <li><strong>Visual:</strong> No horizontal scrolling on mobile?</li>
        <li><strong>Visual:</strong> Images compressed (Under 200kb)?</li>
        <li><strong>Functional:</strong> Contact form sends email?</li>
        <li><strong>Functional:</strong> 'Add to Cart' works on all pages?</li>
        <li><strong>Speed:</strong> Google PageSpeed > 85?</li>
        <li><strong>Legal:</strong> Privacy/Terms/Refund pages exist?</li>
        <li><strong>SEO:</strong> Alt tags on images? H1 tags correct?</li>
    </ul>
</div>

<div class="content-section">
    <h3>📹 The Loom Walkthrough</h3>
    <p>Never just send a link. Send a <strong>video tour</strong> guided by you. Sell the work again.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Audit</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise: Spot the Errors</h4>
        <p>I will provide a screenshot of a "finished" site. Identify 5 errors (Spacing, Spelling, Alignment, Mobile friendliness risk).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about QA Protocols</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS MASTERY</h2>

<div class="content-section">
    <h3>🛠️ The PM Tech Stack</h3>
    <ul>
        <li><strong>Slack:</strong> Internal comms (Channels: #project-name).</li>
        <li><strong>Fiverr/Upwork:</strong> external Client comms.</li>
        <li><strong>Trello/ClickUp:</strong> Task board (Kanban style).</li>
        <li><strong>Loom:</strong> Video updates.</li>
        <li><strong>Google Sheets:</strong> Timeline tracking.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📂 File Hygiene</h3>
    <p>Stop naming files "final_final_v2.png".</p>
    <div class="highlight-box">
        <strong>Convention:</strong> [ClientName]_[AssetType]_[Date]_[Version]<br>
        <em>Ex: Nike_Homepage_Oct24_v3.fig</em>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Organization</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise: Folder Structure</h4>
        <p>Create a standard folder hierarchy for a new client project (Assets, Legal, Design, Dev, Handover).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tools</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: DIFFICULT SITUATIONS - Crisis Management</h2>

<div class="content-section">
    <h3>🔥 Scenario 1: The "I Hate It" Client</h3>
    <p><strong>Situation:</strong> You deliver the design. Client says "This looks terrible. Start over."</p>
    <div class="highlight-box">
        <strong>Solution:</strong> Don't clear the board. Dig deeper.<br>
        <em>"I hear you. Can you tell me specifically which parts feel off? Is it the layout, the colors, or the vibe? Let's look at the reference sites again."</em>
    </div>
</div>

<div class="content-section">
    <h3>🔥 Scenario 2: The Production Bug</h3>
    <p><strong>Situation:</strong> The checkout broke on a live site.</p>
    <div class="warning-box">
        <strong>Protocol:</strong><br>
        1. Acknowledge ASAP. "We are on it."<br>
        2. Rollback to previous version immediately.<br>
        3. Diagnose in Staging.<br>
        4. Fix and Re-deploy.<br>
        5. Post-mortem report to client.
    </div>
</div>

<div class="content-section">
    <h3>🔥 Scenario 3: The Refund Threat</h3>
    <p><strong>Situation:</strong> Client is angry and threatens to chargeback.</p>
    <div class="highlight-box">
        <strong>De-escalate:</strong> "I want to resolve this. A refund is a lose-lose because you don't get your store. Let's get on a call and map out exactly what is missing to get this to the finish line."
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Crisis Sim</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #EF4444; margin-top: 0;">📝 Exercise: The Apology Letter</h4>
        <p>A major error caused the client's ads to land on a 404 page for 2 hours. Write the apology letter. Take responsibility, valid reasons (no excuses), and steps taken to ensure it never happens again.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Crisis Management</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: METRICS & PERFORMANCE</h2>

<div class="content-section">
    <h3>📈 What Gets Measured Gets Managed</h3>
    <p>Elite PMs track their stats.</p>
    <ul>
        <li><strong>On-Time Delivery Rate:</strong> Target 95%.</li>
        <li><strong>Revision Cycles:</strong> Target Average < 2 rounds.</li>
        <li><strong>Client Satisfaction (CSAT):</strong> Target 4.9/5 stars.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🗓️ The Weekly Review</h3>
    <p>Every Friday, ask yourself:</p>
    <ol>
        <li>Which project moved the slowest this week? Why?</li>
        <li>Did I over-promise anything?</li>
        <li>Did I solve problems or just forward messages?</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Self-Audit</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise: The Post-Mortem</h4>
        <p>Pick a past project that went poorly. Write a 1-page "Post-Mortem" analysis identifying the root cause and the lesson learned.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Metrics</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: CAREER GROWTH - The Next Level</h2>

<div class="content-section">
    <h3>🌱 From PM to Operations Manager</h3>
    <p>How to get promoted at Digital Heroes:</p>
    <ul>
        <li><strong>Level 1 (Junior):</strong> Manages tasks. Asks "What do I do next?"</li>
        <li><strong>Level 2 (Senior):</strong> Manages projects. Says "I handled it."</li>
        <li><strong>Level 3 (Director):</strong> Manages systems. Says "I built a new process so this problem never happens again."</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎓 Continuous Learning</h3>
    <p>Stay ahead. Read about Agile, Scrum, Shopify Updates, and EQ.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Career Roadmap</h3>
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise: 1-Year Plan</h4>
        <p>Draft your 1-year career growth plan. What distinct skills do you need to master to become a Senior PM? (E.g., Negotiation, Technical Shopify knowledge).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive your PM Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // TASK 1: MINDSET
    {
        question: "What is the 'Ownership Mentality' response to a developer being late?",
        options: [
            "Tell the client it's the developer's fault",
            "Say nothing and hope they catch up",
            "Inform the client of the delay, the new plan, and that you are handling it",
            "Ask the client what they want to do"
        ],
        correct: 2
    },
    {
        question: "What does 'Plan Twice, Execute Once' mean?",
        options: [
            "Do the work twice to be safe",
            "Spend more time planning to save time on fixing mistakes later",
            "Plan only after execution fails",
            "Double the budget"
        ],
        correct: 1
    },
    {
        question: "Why is EQ important for a PM?",
        options: [
            "It helps you make friends",
            "It stops the client from panicking during a crisis",
            "It is required by HR",
            "It helps you write code"
        ],
        correct: 1
    },
    {
        question: "Who is the 'CEO' of the project?",
        options: [
            "The Agency Owner",
            "The Lead Developer",
            "The Project Manager",
            "The Client"
        ],
        correct: 2
    },
    {
        question: "If a project is failing, whose fault is it ultimately?",
        options: [
            "The Developer",
            "The Client",
            "The PM (You)",
            "Bad Luck"
        ],
        correct: 2
    },
    {
        question: "What is the cost of poor project management?",
        options: [
            "Just a few extra hours",
            "Loss of client trust and potential revenue loss",
            "Depends on the day",
            "None, it's fine"
        ],
        correct: 1
    },
    {
        question: "A client is angry. What is your first reaction?",
        options: [
            "Get angry back",
            "Ignore them for 24 hours",
            "Remain calm and acknowledge their frustration",
            "Blame the team"
        ],
        correct: 2
    },
    {
        question: "What is the 'Bridge' concept?",
        options: [
            "A structural term",
            "Connecting Client Expectations with Team Capabilities",
            "Connecting the frontend to backend",
            "A metaphor for billing"
        ],
        correct: 1
    },
    {
        question: "True or False: A PM should shield the team from client chaos.",
        options: [
            "True",
            "False"
        ],
        correct: 0
    },
    {
        question: "What is the best way to reduce stress?",
        options: [
            "Quit",
            "Proactive communication and organization",
            "Drinking coffee",
            "Working weekends"
        ],
        correct: 1
    },

    // TASK 2: COMMUNICATION
    {
        question: "What is the standard response time for acknowledgement?",
        options: [
            "24 hours",
            "1 hour",
            "10 minutes",
            "Whenever you feel like it"
        ],
        correct: 1
    },
    {
        question: "What does 'No Open Loops' mean?",
        options: [
            "Don't use loops in code",
            "Always end a message with a Next Step or ETA",
            "Keep the conversation going forever",
            "Don't open emails"
        ],
        correct: 1
    },
    {
        question: "How do you handle bad news?",
        options: [
            "Hide it until the end",
            "Tell them ASAP with a proposed solution",
            "Blame a third party",
            "Hope they don't notice"
        ],
        correct: 1
    },
    {
        question: "Best format for complex updates?",
        options: [
            "Long text email",
            "Voice note",
            "Loom Video",
            "Morse code"
        ],
        correct: 2
    },
    {
        question: "How do you handle a 'Micromanager'?",
        options: [
            "Ignore them",
            "Over-communicate proactively to reduce their anxiety",
            "Tell them to stop",
            "Refund them"
        ],
        correct: 1
    },
    {
        question: "How do you say 'No' nicely?",
        options: [
            "NO.",
            "I can't do that.",
            "That's a great idea, but to fit the timeline we would need to trade off X...",
            "Ask my boss."
        ],
        correct: 2
    },
    {
        question: "What is 'Mirroring' in communication?",
        options: [
            "Copying their text exactly",
            "Matching their formality and tone",
            "Looking in a mirror",
            "Repeating everything"
        ],
        correct: 1
    },
    {
        question: "What if you don't have an update?",
        options: [
            "Don't say anything",
            "Say 'No update yet, still checking'",
            "Wait until you have one",
            "Lie"
        ],
        correct: 1
    },
    {
        question: "Who should be in the 'Driver's Seat'?",
        options: [
            "The Client",
            "The PM (You)",
            "The Developer",
            "Nobody"
        ],
        correct: 1
    },
    {
        question: "Cultural Tip: US clients usually value...",
        options: [
            "Directness and speed",
            "Long poetic emails",
            "Slow responses",
            "Formal titles"
        ],
        correct: 0
    },

    // TASK 3: LIFECYCLE
    {
        question: "How long is the standard Main Timeline?",
        options: [
            "7 Days",
            "14 Days",
            "30 Days",
            "1 Year"
        ],
        correct: 1
    },
    {
        question: "What happens on Day 1?",
        options: [
            "Launch",
            "Kickoff & Asset Collection",
            "Development",
            "QA"
        ],
        correct: 1
    },
    {
        question: "What is the 'Buffer' rule?",
        options: [
            "Add 5%",
            "Add 30% to developer estimates",
            "Remove time to be fast",
            "Exact estimates only"
        ],
        correct: 1
    },
    {
        question: "When is a task 'Done'?",
        options: [
            "When code is written",
            "When it passes QA on Mobile, Desktop, and matches Design",
            "When the dev says so",
            "When client pays"
        ],
        correct: 1
    },
    {
        question: "What is Phase 5?",
        options: [
            "Kickoff",
            "Client Review (The Reveal)",
            "Launch",
            "Design"
        ],
        correct: 1
    },
    {
        question: "Why do we need Internal QA?",
        options: [
            "To waste time",
            "The client should not be the bug finder",
            "To bill more hours",
            "Fun"
        ],
        correct: 1
    },
    {
        question: "When should Design Review happen?",
        options: [
            "Day 3-5",
            "Day 14",
            "Day 1",
            "Never"
        ],
        correct: 0
    },
    {
        question: "What is a 'Soft Launch'?",
        options: [
            "Launching quietly",
            "Launching directly to paid ads",
            "A password protected launch",
            "Launching with soft colors"
        ],
        correct: 0
    },
    {
        question: "If a project goes off track, what do you do?",
        options: [
            "Hide it",
            "Adjust the roadmap and inform stakeholders immediately",
            "Panic",
            "Quit"
        ],
        correct: 1
    },
    {
        question: "What is the final phase?",
        options: [
            "Dev",
            "Launch & Handoff",
            "QA",
            "Kickoff"
        ],
        correct: 1
    },

    // TASK 4: TEAM
    {
        question: "What is the 'Shield Mentality'?",
        options: [
            "Fighting clients",
            "Absorbing client chaos/stress so the team can focus",
            "Using a shield icon",
            "Ignoring clients"
        ],
        correct: 1
    },
    {
        question: "How should you give corrective feedback?",
        options: [
            "Publicly in the main channel",
            "Privately and constructively",
            "Scream",
            "Don't give it"
        ],
        correct: 1
    },
    {
        question: "What do Developers need most?",
        options: [
            "Vague ideas",
            "Clear logic, requirements, and assets BEFORE starting",
            "Motivational posters",
            "Pizza"
        ],
        correct: 1
    },
    {
        question: "What do Designers need most?",
        options: [
            "Code snippets",
            "Visual inspiration and clear brand guidelines",
            "Spreadsheets",
            "Micro-management"
        ],
        correct: 1
    },
    {
        question: "If a team member is underperforming, what first step?",
        options: [
            "Fire them",
            "Identify if it's a Will or Skill issue",
            "Do their work for them",
            "Complain to client"
        ],
        correct: 1
    },
    {
        question: "Why is daily check-in important?",
        options: [
            "To annoy people",
            "To unblock blockers and track progress",
            "To socialize",
            "It's not"
        ],
        correct: 1
    },
    {
        question: "True or False: You should translate client anger into tasks.",
        options: [
            "True",
            "False (Forward the angry email directly)"
        ],
        correct: 0
    },
    {
        question: "How to build morale?",
        options: [
            "Pay them less",
            "Celebrate small wins publicly",
            "Ignore them",
            "Mandatory fun"
        ],
        correct: 1
    },
    {
        question: "What is 'Will vs Skill'?",
        options: [
            "A fighting game",
            "A framework to diagnose performance issues",
            "A legal term",
            "Names of managers"
        ],
        correct: 1
    },
    {
        question: "What is the best channel for urgent blockers?",
        options: [
            "Email",
            "Slack/Instant Message",
            "Postal Mail",
            "Carrier Pigeon"
        ],
        correct: 1
    },

    // TASK 5: SCOPE
    {
        question: "What is Scope Creep?",
        options: [
            "A scary person",
            "Uncontrolled growth of project requirements without budget increase",
            "A feature of Shopify",
            "A new dance"
        ],
        correct: 1
    },
    {
        question: "If it's not in the contract...",
        options: [
            "Do it anyway",
            "It is Out of Scope (Chargeable or Goodwill decision)",
            "Ignore it",
            "Panic"
        ],
        correct: 1
    },
    {
        question: "When should you do 'Goodwill' work?",
        options: [
            "Always",
            "Never",
            "When it's tiny (<15mins) and builds relationship capital",
            "When the client screams"
        ],
        correct: 2
    },
    {
        question: "How to handle a massive new feature request?",
        options: [
            "Just do it",
            "Say No uniquely",
            "Issue a Change Request with a Quote",
            "Hide"
        ],
        correct: 2
    },
    {
        question: "Why document scope changes?",
        options: [
            "To have a paper trail for billing and clarity",
            "For fun",
            "To waste time",
            "No reason"
        ],
        correct: 0
    },
    {
        question: "What is the 'Scope Decision Tree'?",
        options: [
            "A plant",
            "A logic flow to decide if work is billable",
            "A chart of scopes",
            "A holiday decoration"
        ],
        correct: 1
    },
    {
        question: "True or False: Scope creep kills profitability.",
        options: [
            "True",
            "False"
        ],
        correct: 0
    },
    {
        question: "Best phrase for out of scope?",
        options: [
            "No way.",
            "I'd love to help! Since that's new, I can send a quote.",
            "That's extra money.",
            "Ask sales."
        ],
        correct: 1
    },
    {
        question: "Can you trade scope? (e.g. Swap feature A for B)",
        options: [
            "Yes, if costs align",
            "No never",
            "Only on Tuesdays",
            "Maybe"
        ],
        correct: 0
    },
    {
        question: "Who signs off on scope changes?",
        options: [
            "The Developer",
            "The Client",
            "Nobody",
            "Your Mom"
        ],
        correct: 1
    },

    // TASK 6: QA
    {
        question: "Who is the last line of defense?",
        options: [
            "The Developer",
            "The PM (You)",
            "The Client",
            "Google"
        ],
        correct: 1
    },
    {
        question: "If the client finds a broken link...",
        options: [
            "It's fine",
            "We have failed the QA process",
            "Blame the internet",
            "Laugh"
        ],
        correct: 1
    },
    {
        question: "What is the target PageSpeed Mobile score?",
        options: [
            "20",
            "50",
            "85+",
            "100 only"
        ],
        correct: 2
    },
    {
        question: "Does 'Add to Cart' need to be tested?",
        options: [
            "Yes, on every page type",
            "No, Shopify handles it",
            "Only on Homepage",
            "Sometimes"
        ],
        correct: 0
    },
    {
        question: "What is Visual QA?",
        options: [
            "Checking code",
            "Checking alignment, spacing, and mobile responsiveness",
            "Checking speed",
            "Looking at the sun"
        ],
        correct: 1
    },
    {
        question: "Should you test on a real phone?",
        options: [
            "No, browser resize is enough",
            "Yes, absolutely",
            "Only if asked",
            "No"
        ],
        correct: 1
    },
    {
        question: "What is a 'Loom Walkthrough'?",
        options: [
            "A weaving technique",
            "A video tour of the completed work sent to client",
            "A meeting",
            "A type of bug"
        ],
        correct: 1
    },
    {
        question: "Why maximize image compression?",
        options: [
            "Save space",
            "Speed loading times (SEO & Conversion)",
            "Make them blurry",
            "No reason"
        ],
        correct: 1
    },
    {
        question: "What legal pages are usually required?",
        options: [
            "None",
            "Privacy, Terms, Refund, Shipping",
            "Just About",
            "Blog"
        ],
        correct: 1
    },
    {
        question: "Max file size for images (general rule)?",
        options: [
            "5MB",
            "200KB-300KB",
            "1GB",
            "1KB"
        ],
        correct: 1
    },

    // TASK 7: TOOLS
    {
        question: "Primary tool for Internal Comms?",
        options: [
            "WhatsApp",
            "Slack",
            "Instagram",
            "Fax"
        ],
        correct: 1
    },
    {
        question: "Primary tool for Task Management?",
        options: [
            "Sticky notes",
            "Trello/ClickUp/Jira",
            "Memory",
            "Chat"
        ],
        correct: 1
    },
    {
        question: "Best file naming convention?",
        options: [
            "final.jpg",
            "Client_Asset_Date_v1.jpg",
            "image123.jpg",
            "pic.jpg"
        ],
        correct: 1
    },
    {
        question: "Why track time?",
        options: [
            "To punish people",
            "To understand profitability and capacity",
            "To be annoying",
            "No reason"
        ],
        correct: 1
    },
    {
        question: "Tool for video updates?",
        options: [
            "Zoom (recorded)",
            "Loom",
            "Youtube Live",
            "TikTok"
        ],
        correct: 1
    },
    {
        question: "Where should SOPs live?",
        options: [
            "In your head",
            "Notion / Knowledge Base",
            "Slack history",
            "Sticky notes"
        ],
        correct: 1
    },
    {
        question: "What is 'Inbox Zero' methodology?",
        options: [
            "Having no emails",
            "Processing emails efficiently to archive/action/delete",
            "Deleting everything",
            "Not using email"
        ],
        correct: 1
    },
    {
        question: "How often should you update the Task Board?",
        options: [
            "Daily",
            "Weekly",
            "Monthly",
            "Never"
        ],
        correct: 0
    },
    {
        question: "What is a 'Dashboard'?",
        options: [
            "Car part",
            "Visual overview of key project metrics",
            "A board game",
            "A type of wood"
        ],
        correct: 1
    },
    {
        question: "Should you share internal Trello with clients?",
        options: [
            "Yes",
            "No, usually keep a separate client view",
            "Maybe",
            "Depends"
        ],
        correct: 1
    },

    // TASK 8: CRISIS
    {
        question: "Client says 'I hate the design'. You say...",
        options: [
            "You have bad taste.",
            "Start over.",
            "Can you be specific about what feels off? (Colors, Layout, Vibe?)",
            "Refund initiated."
        ],
        correct: 2
    },
    {
        question: "Production bug destroys checkout. Step 1?",
        options: [
            "Hide",
            "Acknowledge and Rollback immediately",
            "Blame Shopify",
            "Go to lunch"
        ],
        correct: 1
    },
    {
        question: "Client threatens refund. Strategy?",
        options: [
            "Refuse aggressively",
            "Grant it immediately",
            "De-escalate, remind them of goal, get on a call to fix path forward",
            "Ignore"
        ],
        correct: 2
    },
    {
        question: "Dev made a mistake. Do you blame them to the client?",
        options: [
            "Yes",
            "No, take 'Radical Responsibility' as the Agency",
            "Sometimes",
            "Only if they are new"
        ],
        correct: 1
    },
    {
        question: "Client is ghosting for 2 weeks. What do you do?",
        options: [
            "Wait forever",
            "Send 'Closure Warning' email with timeline impact",
            "Call police",
            "Archive project"
        ],
        correct: 1
    },
    {
        question: "Client keeps changing requirements (Scope Creep).",
        options: [
            "Let them",
            "Pause and require a Change Order / New Quote",
            "Complain",
            "Quit"
        ],
        correct: 1
    },
    {
        question: "Team member is sick during launch.",
        options: [
            "Launch anyway",
            "Delay launch and inform client ASAP with new plan",
            "Make them work sick",
            "Guess the code"
        ],
        correct: 1
    },
    {
        question: "Technical limitation discovered mid-project.",
        options: [
            "Build it anyway (broken)",
            " Inform client, explain limitation, propose alternative solution",
            "Lie",
            "Hide it"
        ],
        correct: 1
    },
    {
        question: "Client compares you to a competitor.",
        options: [
            "Get mad",
            "Reiterate your unique value proposition and focus on current goals",
            "Agree",
            "Badmouth competitor"
        ],
        correct: 1
    },
    {
        question: "Multiple urgent issues at once. Strategy?",
        options: [
            "Cry",
            "Triage (Urgent vs Important Matrix) and communicate priority order",
            "shutdown",
            "Randomly pick one"
        ],
        correct: 1
    },

    // TASK 9: METRICS
    {
        question: "Target On-Time Delivery Rate?",
        options: [
            "50%",
            "70%",
            "95%+",
            "100% or fail"
        ],
        correct: 2
    },
    {
        question: "What is CSAT?",
        options: [
            "Cyber Security",
            "Client Satisfaction Score",
            "Cat Sat",
            "Computer Stats"
        ],
        correct: 1
    },
    {
        question: "Ideal number of revision rounds?",
        options: [
            "10",
            "1-2",
            "Zero",
            "Unlimited"
        ],
        correct: 1
    },
    {
        question: "What is a 'Post-Mortem'?",
        options: [
            "An autopsy",
            "Project analysis after completion to learn lessons",
            "A funeral",
            "A party"
        ],
        correct: 1
    },
    {
        question: "Why track Profitability per project?",
        options: [
            "To pay less tax",
            "To know if we are actually making money after expenses hours",
            "To show off",
            "No reason"
        ],
        correct: 1
    },
    {
        question: "What does 'Utilization Rate' mean?",
        options: [
            "How tired you are",
            "Percentage of billable time vs total time",
            "How much space used",
            "Utility bill"
        ],
        correct: 1
    },
    {
        question: "Best time for a Weekly Review?",
        options: [
            "Monday morning",
            "Friday afternoon",
            "Sunday night",
            "Never"
        ],
        correct: 1
    },
    {
        question: "If Revisions are high (5+), what is likely wrong?",
        options: [
            "Client is mean",
            "Expectations or Design Brief were unclear",
            "Bad luck",
            "Software bug"
        ],
        correct: 1
    },
    {
        question: "Why track Response Time?",
        options: [
            "Speed correlates with Client Trust",
            "To go fast",
            "To win a race",
            "No reason"
        ],
        correct: 0
    },
    {
        question: "What is NPS?",
        options: [
            "No Problem Sir",
            "Net Promoter Score (Likelihood to recommend)",
            "New Project Start",
            "Nope"
        ],
        correct: 1
    },

    // TASK 10: CAREER
    {
        question: "Level 1 PM asks:",
        options: [
            "What do I do next?",
            "I handled it.",
            "I built a system.",
            "Who are you?"
        ],
        correct: 0
    },
    {
        question: "Level 2 PM (Senior) says:",
        options: [
            "Help me.",
            "I handled it.",
            "I don't know.",
            "What?"
        ],
        correct: 1
    },
    {
        question: "Level 3 PM (Director) says:",
        options: [
            "I handled it.",
            "I built a new system so this never happens again.",
            "I quit.",
            "Look at me."
        ],
        correct: 1
    },
    {
        question: "How to get promoted?",
        options: [
            "Ask politely",
            "Take ownership, solve bigger problems, mentor others",
            "Wait",
            "Demands"
        ],
        correct: 1
    },
    {
        question: "Best way to build reputation?",
        options: [
            "Gossip",
            "Consistently deliver successful projects",
            "Dress well",
            "Bring donuts"
        ],
        correct: 1
    },
    {
        question: "Why learn technical skills as a PM?",
        options: [
            "To do the code",
            "To communicate better with devs and estimate accurately",
            "To show off",
            "Required"
        ],
        correct: 1
    },
    {
        question: "What is Agile?",
        options: [
            "Yoga",
            "A project management methodology (Iterative)",
            "Fast",
            "A bird"
        ],
        correct: 1
    },
    {
        question: "Mentoring brings value by...",
        options: [
            "Making you look cool",
            "Scaling the team's total capability",
            "Less work",
            "Fun"
        ],
        correct: 1
    },
    {
        question: "Continuous Learning means...",
        options: [
            "School forever",
            "Staying updated on industry trends and skills",
            "Nothing",
            "Boring"
        ],
        correct: 1
    },
    {
        question: "Goal of a PM at Digital Heroes?",
        options: [
            "Survive",
            "Deliver Excellence & Create Superfans",
            "Bill hours",
            "Sleep"
        ],
        correct: 1
    }
];
