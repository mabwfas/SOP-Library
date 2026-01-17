// Project Manager Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "PM Mindset", description: "Ownership = Success", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 PM responsibility", "📖 Read pm-sop.html"] },
    { id: 2, title: "Project Planning", description: "Scope, Timeline, Resources", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Planning frameworks", "📖 Study project templates"] },
    { id: 3, title: "Client Communication", description: "Updates & Expectations", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💬 Communication protocols", "📖 Study update templates"] },
    { id: 4, title: "Team Coordination", description: "Assign, Track, Unblock", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "👥 Team management", "📖 Study task workflows"] },
    { id: 5, title: "Risk Management", description: "Identify & Mitigate", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "⚠️ Risk assessment", "📖 Study risk matrix"] },
    { id: 6, title: "Scope Management", description: "No Scope Creep", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Scope control", "📖 Study change request process"] },
    { id: 7, title: "Quality Assurance", description: "Deliver Excellence", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "✅ QA processes", "📖 Study QA checklist"] },
    { id: 8, title: "Tools & Systems", description: "PM Software Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🖥️ Tool proficiency", "📖 Study tool guides"] },
    { id: 9, title: "Project Closure", description: "Handoff & Review", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🏁 Closure protocol", "📖 Study handoff checklist"] },
    { id: 10, title: "Final Certification", description: "PM Mastery Exam", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions"] }
];

const task1Content = `
<h2>📚 TASK 1: PM MINDSET - Ownership = Success</h2>

<div class="content-section">
    <h3>🎯 The PM's Core Responsibility</h3>
    <p>A Project Manager doesn't just "manage tasks." <strong>You own the outcome.</strong></p>
    
    <div class="highlight-box">
        <strong>The PM Ownership Principle:</strong>
        <ul>
            <li>If the project succeeds → You enabled it</li>
            <li>If the project fails → You failed to prevent it</li>
            <li>No excuses. No blame. Only solutions.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🧠 PM Mindset Shift</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Amateur PM</th>
            <th style="padding: 12px;">Professional PM</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The developer was late"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I didn't catch the delay early enough"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Client keeps changing things"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to manage scope better"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm waiting for an answer"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'll follow up until I get one"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 Project Success Triangle</h3>
    <div class="highlight-box">
        <strong>Every project has three constraints:</strong>
        <ul>
            <li><strong>Scope:</strong> What gets delivered</li>
            <li><strong>Time:</strong> When it's delivered</li>
            <li><strong>Cost:</strong> Resource investment</li>
        </ul>
        <p>You can optimize 2, never all 3. Fast + Cheap = Low Quality. Fast + High Quality = Expensive. Cheap + High Quality = Slow.</p>
    </div>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: PROJECT PLANNING</h2>

<div class="content-section">
    <h3>📋 Project Kickoff Checklist</h3>
    <ul>
        <li>☐ Scope document signed off</li>
        <li>☐ Timeline with milestones created</li>
        <li>☐ Team members assigned</li>
        <li>☐ Communication plan established</li>
        <li>☐ Success criteria defined</li>
        <li>☐ Risks identified</li>
        <li>☐ Tools/access ready</li>
    </ul>
</div>

<div class="content-section">
    <h3>⏰ Timeline Estimation</h3>
    <div class="highlight-box">
        <strong>The 2x Rule:</strong> Whatever developers estimate, multiply by 2 for reality.<br><br>
        <strong>Why?</strong> Developers estimate "coding time" not "reality time" (bugs, reviews, meetings, unclear requirements).
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Task Type</th>
            <th style="padding: 12px;">Buffer</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple/familiar</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+30%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex/new tech</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+100% (2x)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Integration work</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+50%</td>
        </tr>
    </table>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: CLIENT COMMUNICATION</h2>

<div class="content-section">
    <h3>💬 Communication Cadence</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Update Type</th>
            <th style="padding: 12px;">Frequency</th>
            <th style="padding: 12px;">Content</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Status Update</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly (min)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Progress, blockers, next steps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Milestone Demo</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">At each milestone</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Live demo + feedback</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Issue Alert</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Immediately</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Problem + solution + impact</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📧 Update Template</h3>
    <div class="highlight-box">
        <strong>Weekly Update Structure:</strong>
        <ol>
            <li><strong>Completed:</strong> What was done this week</li>
            <li><strong>In Progress:</strong> What's being worked on</li>
            <li><strong>Blockers:</strong> What needs client input</li>
            <li><strong>Next Week:</strong> Planned work</li>
            <li><strong>Timeline Status:</strong> On track / At risk / Delayed</li>
        </ol>
    </div>
</div>
`;

const task4Content = `<h2>📚 TASK 4: TEAM COORDINATION</h2>
<div class="content-section">
    <h3>👥 Daily Standup Format</h3>
    <ul>
        <li><strong>What I completed:</strong> Yesterday's work</li>
        <li><strong>What I'm doing:</strong> Today's plan</li>
        <li><strong>Blockers:</strong> What's stopping me</li>
    </ul>
    <div class="highlight-box">
        <strong>Standup Rules:</strong> 15 min max. Standing up. No rabbit holes.
    </div>
</div>`;

const task5Content = `<h2>📚 TASK 5: RISK MANAGEMENT</h2>
<div class="content-section">
    <h3>⚠️ Risk Assessment Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Probability</th>
            <th style="padding: 12px;">Impact</th>
            <th style="padding: 12px;">Priority</th>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px;">High</td><td style="padding: 12px;">High</td><td style="padding: 12px;"><strong>P1 - Immediate action</strong></td></tr>
        <tr style="background: rgba(245, 158, 11, 0.15);"><td style="padding: 12px;">High</td><td style="padding: 12px;">Low</td><td style="padding: 12px;"><strong>P2 - Monitor closely</strong></td></tr>
        <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px;">Low</td><td style="padding: 12px;">Low</td><td style="padding: 12px;"><strong>P3 - Document</strong></td></tr>
    </table>
</div>`;

const task6Content = `<h2>📚 TASK 6: SCOPE MANAGEMENT</h2>
<div class="content-section">
    <h3>🎯 The Scope Creep Killer</h3>
    <div class="highlight-box">
        <strong>Change Request Protocol:</strong>
        <ol>
            <li>Client requests change</li>
            <li>Document the change</li>
            <li>Estimate impact (time, cost)</li>
            <li>Present options to client</li>
            <li>Get written approval</li>
            <li>Update scope document</li>
        </ol>
    </div>
</div>`;

const task7Content = `<h2>📚 TASK 7: QUALITY ASSURANCE</h2>
<div class="content-section">
    <h3>✅ QA Checklist</h3>
    <ul>
        <li>☐ Functionality works as specified</li>
        <li>☐ Design matches approved mockups</li>
        <li>☐ Mobile responsive</li>
        <li>☐ Cross-browser tested</li>
        <li>☐ Performance acceptable</li>
        <li>☐ No critical bugs</li>
        <li>☐ Content proofread</li>
    </ul>
</div>`;

const task8Content = `<h2>📚 TASK 8: TOOLS & SYSTEMS</h2>
<div class="content-section">
    <h3>🖥️ Essential PM Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Tool</th><th style="padding: 12px;">Purpose</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project Board</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task tracking (Trello, Asana, Monday)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slack/Teams</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team communication</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Meet/Zoom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client calls/demos</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Docs</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Documentation</td></tr>
    </table>
</div>`;

const task9Content = `<h2>📚 TASK 9: PROJECT CLOSURE</h2>
<div class="content-section">
    <h3>🏁 Closure Checklist</h3>
    <ul>
        <li>☐ All deliverables approved by client</li>
        <li>☐ Final payment received</li>
        <li>☐ Access/credentials handed over</li>
        <li>☐ Documentation complete</li>
        <li>☐ Support period communicated</li>
        <li>☐ Testimonial requested</li>
        <li>☐ Post-mortem conducted internally</li>
    </ul>
</div>`;

const task10Content = `<h2>📚 TASK 10: FINAL CERTIFICATION</h2>
<div class="content-section">
    <h3>🎓 Requirements</h3>
    <ul>
        <li>✅ Score 28/30 on quiz</li>
        <li>✅ Create sample project plan</li>
        <li>✅ Pass scenario-based assessment</li>
    </ul>
</div>`;

const quizQuestions = [
    { question: "PM core principle:", options: ["Blame others", "Ownership = Success", "Avoid responsibility", "Just track tasks"], correct: 1 },
    { question: "The 2x Rule is about:", options: ["Doubling salary", "Timeline estimation buffer", "Scope reduction", "Team size"], correct: 1 },
    { question: "Weekly status update should include:", options: ["Only completed work", "Progress, blockers, next steps", "Just timeline", "Nothing"], correct: 1 },
    { question: "Standup duration max:", options: ["30 min", "1 hour", "15 min", "No limit"], correct: 2 },
    { question: "High probability + High impact risk is:", options: ["P3", "P2", "P1 Immediate action", "Ignore"], correct: 2 },
    { question: "Scope creep prevention needs:", options: ["Nothing", "Written change request approval", "Just verbal yes", "Ignoring changes"], correct: 1 },
    { question: "Project triangle constraints are:", options: ["Scope, Time, Cost", "Speed, Quality, Features", "People, Process, Tech", "None"], correct: 0 },
    { question: "You can optimize how many triangle constraints?", options: ["All 3", "2 out of 3", "Only 1", "None"], correct: 1 },
    { question: "Issue alerts should be sent:", options: ["Weekly", "Monthly", "Immediately", "Never"], correct: 2 },
    { question: "QA checklist includes:", options: ["Only design", "Functionality, design, mobile, browser, performance", "Only bugs", "Nothing"], correct: 1 },
    { question: "Complex/new tech timeline buffer:", options: ["+10%", "+30%", "+100% (2x)", "+200%"], correct: 2 },
    { question: "Project kickoff must have:", options: ["Just start working", "Scope document signed off", "No planning needed", "Only team assigned"], correct: 1 },
    { question: "Milestone demo frequency:", options: ["Never", "At each milestone", "Only at end", "Monthly"], correct: 1 },
    { question: "Change request protocol step 1:", options: ["Ignore", "Document the change", "Do it immediately", "Refuse"], correct: 1 },
    { question: "Project closure includes:", options: ["Just finish coding", "All deliverables approved, payment, handover", "Nothing", "Only demo"], correct: 1 },
    { question: "Amateur PM says:", options: ["I'll follow up", "The developer was late", "I need to manage better", "I own this"], correct: 1 },
    { question: "Post-mortem is:", options: ["During project", "Before project", "After project review", "Skip it"], correct: 2 },
    { question: "Simple task timeline buffer:", options: ["+5%", "+30%", "+100%", "+200%"], correct: 1 },
    { question: "Fast + Cheap equals:", options: ["High Quality", "Low Quality", "Perfect", "Impossible"], correct: 1 },
    { question: "Standup rules:", options: ["Sit comfortably", "Standing, 15 min, no rabbit holes", "1 hour minimum", "Skip it"], correct: 1 },
    { question: "At risk timeline means:", options: ["On track", "Delayed", "May slip without action", "Cancelled"], correct: 2 },
    { question: "Integration work buffer:", options: ["+10%", "+30%", "+50%", "+100%"], correct: 2 },
    { question: "Testimonial should be requested:", options: ["Never", "At project closure", "Before starting", "During issues"], correct: 1 },
    { question: "Communication plan needs:", options: ["Nothing", "Update frequency, channels, escalation", "Just email", "Only calls"], correct: 1 },
    { question: "Scope document must be:", options: ["Verbal only", "Signed off before work", "Made up later", "Skipped"], correct: 1 },
    { question: "Developer estimates need:", options: ["No change", "Buffer for reality", "Reduction", "Doubling client time"], correct: 1 },
    { question: "Cross-browser testing means:", options: ["Only Chrome", "Multiple browsers", "Skip testing", "Only mobile"], correct: 1 },
    { question: "Risk documentation priority:", options: ["P1", "P2", "P3", "Skip"], correct: 2 },
    { question: "Professional PM says:", options: ["Not my fault", "I didn't catch the delay early enough", "Developer issue", "Skip"], correct: 1 },
    { question: "Support period must be:", options: ["Never discussed", "Communicated at closure", "Assumed", "Skipped"], correct: 1 }
];
