// Project Manager Training Data
// Complete training content for PM certification

const trainingTasks = [
    { id: 1, title: "PM Mindset", description: "Leadership fundamentals", contentFirst: true },
    { id: 2, title: "Company Knowledge", description: "Digital Heroes ecosystem", contentFirst: false },
    { id: 3, title: "Project Planning", description: "Scoping & timelines", contentFirst: false },
    { id: 4, title: "Team Management", description: "Delegation & tracking", contentFirst: false },
    { id: 5, title: "Client Relations", description: "Stakeholder management", contentFirst: false },
    { id: 6, title: "Tools & Systems", description: "ClickUp & workflows", contentFirst: false },
    { id: 7, title: "Risk Management", description: "Identifying & mitigating", contentFirst: false },
    { id: 8, title: "Quality Control", description: "QA & delivery", contentFirst: false },
    { id: 9, title: "Practice Scenarios", description: "Real-world challenges", contentFirst: false },
    { id: 10, title: "Final Certification", description: "Comprehensive assessment", contentFirst: false }
];

const task1Content = `
<h2>📚 PART 1: PM MINDSET</h2>

<div class="content-section">
<h3>🎯 What is a Project Manager?</h3>
<p>At Digital Heroes, the PM is the <strong>hub of all communication</strong>. You're the bridge between clients, developers, designers, and leadership.</p>
<ul>
<li>🔗 <strong>Communication Hub:</strong> All information flows through you</li>
<li>⏰ <strong>Timeline Guardian:</strong> You ensure deadlines are met</li>
<li>😊 <strong>Client Champion:</strong> You represent client interests</li>
<li>🛡️ <strong>Quality Gatekeeper:</strong> Nothing leaves without your approval</li>
</ul>
</div>

<div class="content-section">
<h3>💡 The PM Mindset</h3>
<div class="highlight-box">
<strong>You are NOT a messenger. You are a problem-solver.</strong>
<p>Don't just relay information. Anticipate issues, propose solutions, and drive results.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about PM mindset</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 Digital Heroes Ecosystem</h3>
<ul>
<li>📺 <strong>Media Arm:</strong> 2.5M+ YouTube subscribers</li>
<li>🛠️ <strong>Agency Arm:</strong> Premium Shopify services</li>
<li>👥 <strong>Talent Pool:</strong> 40+ professionals</li>
</ul>
</div>

<div class="content-section">
<h3>📦 Our Packages</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background: rgba(20, 184, 166, 0.2);"><td style="padding: 15px;">💎 Premium</td><td style="padding: 15px;">$1,200 - 5 pages, 25 products, 30-day support</td></tr>
<tr style="background: rgba(16, 185, 129, 0.2);"><td style="padding: 15px;">👑 Enterprise</td><td style="padding: 15px;">$1,800 - 10+ pages, 100+ products, 60-day support</td></tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: PROJECT PLANNING</h2>

<div class="content-section">
<h3>📋 Project Kickoff Checklist</h3>
<ul>
<li>✅ Client brief received and reviewed</li>
<li>✅ Scope clearly defined (pages, products, features)</li>
<li>✅ Timeline established with milestones</li>
<li>✅ Team members assigned</li>
<li>✅ Assets collected from client</li>
<li>✅ ClickUp project created</li>
</ul>
</div>

<div class="content-section">
<h3>⏰ Timeline Guidelines</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr><td style="padding: 10px;">Premium Package</td><td style="padding: 10px;">2-3 weeks</td></tr>
<tr><td style="padding: 10px;">Enterprise Package</td><td style="padding: 10px;">3-4 weeks</td></tr>
<tr><td style="padding: 10px;">Custom Projects</td><td style="padding: 10px;">4-6 weeks</td></tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about project planning</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: TEAM MANAGEMENT</h2>

<div class="content-section">
<h3>👥 Delegation Best Practices</h3>
<ul>
<li>🎯 Be specific with task descriptions</li>
<li>📅 Set clear deadlines</li>
<li>📋 Provide all necessary assets upfront</li>
<li>🔄 Check progress daily</li>
<li>💬 Be available for questions</li>
</ul>
</div>

<div class="content-section">
<h3>📊 Daily Standups</h3>
<p>Every day, check:</p>
<ol>
<li>What was completed yesterday?</li>
<li>What's planned for today?</li>
<li>Are there any blockers?</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about team management</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: CLIENT RELATIONS</h2>

<div class="content-section">
<h3>💬 Communication Guidelines</h3>
<ul>
<li>📧 Respond within 4 hours during business hours</li>
<li>📋 Provide weekly progress updates</li>
<li>🎥 Use Loom for visual explanations</li>
<li>✅ Confirm understanding before action</li>
</ul>
</div>

<div class="content-section">
<h3>⚠️ Managing Expectations</h3>
<div class="warning-box">
<strong>Never over-promise:</strong>
<ul>
<li>Add buffer time to estimates</li>
<li>Clarify scope limitations</li>
<li>Document all changes in writing</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about client relations</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📋 ClickUp Essentials</h3>
<ul>
<li>📂 Every project has a dedicated space</li>
<li>📋 Use standard task templates</li>
<li>🏷️ Tag with priority levels</li>
<li>📅 Set due dates for everything</li>
<li>👥 Assign clear ownership</li>
</ul>
</div>

<div class="content-section">
<h3>🔧 PM Toolkit</h3>
<ul>
<li><strong>ClickUp:</strong> Project management</li>
<li><strong>Slack:</strong> Team communication</li>
<li><strong>Loom:</strong> Video updates</li>
<li><strong>Google Meet:</strong> Client calls</li>
<li><strong>Google Drive:</strong> Asset storage</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about tools & systems</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: RISK MANAGEMENT</h2>

<div class="content-section">
<h3>⚠️ Common Risks</h3>
<ul>
<li>🕐 Scope creep (client adds features without budget increase)</li>
<li>📅 Timeline slippage (team behind schedule)</li>
<li>📷 Asset delays (client doesn't provide materials)</li>
<li>💬 Communication breakdown</li>
</ul>
</div>

<div class="content-section">
<h3>🛡️ Mitigation Strategies</h3>
<ol>
<li><strong>Document everything</strong> in writing</li>
<li><strong>Set clear boundaries</strong> on scope</li>
<li><strong>Create contingency plans</strong> for delays</li>
<li><strong>Escalate early</strong> when issues arise</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about risk management</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: QUALITY CONTROL</h2>

<div class="content-section">
<h3>✅ QA Checklist Before Delivery</h3>
<ul>
<li>✅ All pages tested on mobile & desktop</li>
<li>✅ All links working</li>
<li>✅ Checkout flow tested</li>
<li>✅ PageSpeed score 85+</li>
<li>✅ No console errors</li>
<li>✅ Content proofread</li>
</ul>
</div>

<div class="content-section">
<h3>📤 Delivery Protocol</h3>
<ol>
<li>Internal QA by team</li>
<li>PM final review</li>
<li>Loom walkthrough recorded</li>
<li>Client notified with preview link</li>
<li>Feedback collected and addressed</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about quality control</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🎯 Scenario 1: Delayed Client Assets</h3>
<p><strong>Client hasn't provided logos/images for 5 days.</strong></p>
<div class="highlight-box">
<strong>Your Response:</strong>
<ol>
<li>Send polite reminder with deadline</li>
<li>Explain impact on timeline</li>
<li>Offer alternatives (stock photos)</li>
<li>Document in writing</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🔄 Scenario 2: Scope Creep</h3>
<p><strong>Client wants 3 extra pages "quickly added".</strong></p>
<ul>
<li>Acknowledge the request positively</li>
<li>Explain this is outside original scope</li>
<li>Provide quote for additional work</li>
<li>Get written approval before proceeding</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about scenarios</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations!</h3>
<p>You've completed the Project Manager training. This final assessment covers all topics.</p>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your PM Certification.</p>
</div>
</div>
`;

const allQuizzes = [
    // Task 1: PM Mindset
    [
        { q: "The PM is the hub of:", o: ["Sales only", "All communication", "Design only", "Development only"], c: 1 },
        { q: "A PM should be:", o: ["A messenger", "A problem-solver", "Just a coordinator", "Passive observer"], c: 1 },
        { q: "Timeline guardian means:", o: ["Being flexible", "Ensuring deadlines are met", "Ignoring deadlines", "Extending always"], c: 1 },
        { q: "Quality gatekeeper means:", o: ["Nothing leaves without approval", "Always approve", "Skip QA", "Delegate all checks"], c: 0 },
        { q: "Client champion means:", o: ["Ignoring clients", "Representing client interests", "Only team focus", "Sales focus"], c: 1 },
        { q: "PM should anticipate:", o: ["Nothing", "Issues and solutions", "Only good news", "Problems only"], c: 1 },
        { q: "Information should flow:", o: ["Randomly", "Through PM", "Bypass PM", "Only to leadership"], c: 1 },
        { q: "PM drives:", o: ["Nothing", "Results", "Confusion", "Delays"], c: 1 },
        { q: "Being proactive means:", o: ["Waiting for issues", "Anticipating problems", "Reacting only", "Ignoring risks"], c: 1 },
        { q: "A PM is NOT:", o: ["Problem-solver", "Communication hub", "Just a messenger", "Quality gatekeeper"], c: 2 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "YouTube subscribers:", o: ["500K", "1M", "2.5M+", "5M"], c: 2 },
        { q: "Premium package price:", o: ["$800", "$1,000", "$1,200", "$1,500"], c: 2 },
        { q: "Enterprise package price:", o: ["$1,200", "$1,500", "$1,800", "$2,500"], c: 2 },
        { q: "Team size:", o: ["10+", "20+", "40+", "100+"], c: 2 },
        { q: "Premium support days:", o: ["15", "30", "45", "60"], c: 1 },
        { q: "Enterprise support days:", o: ["30", "45", "60", "90"], c: 2 },
        { q: "Premium pages included:", o: ["3", "5", "7", "10"], c: 1 },
        { q: "Enterprise pages:", o: ["5", "7", "10+", "15"], c: 2 },
        { q: "Premium products:", o: ["10", "25", "50", "100"], c: 1 },
        { q: "Enterprise products:", o: ["50", "75", "100+", "200"], c: 2 }
    ],
    // Task 3: Project Planning
    [
        { q: "Premium timeline:", o: ["1 week", "2-3 weeks", "4-5 weeks", "6+ weeks"], c: 1 },
        { q: "Enterprise timeline:", o: ["1-2 weeks", "2-3 weeks", "3-4 weeks", "5-6 weeks"], c: 2 },
        { q: "Kickoff requires:", o: ["Just an email", "Client brief, scope, timeline, team, assets, ClickUp", "Only budget", "Nothing"], c: 1 },
        { q: "Scope should be:", o: ["Vague", "Clearly defined", "Undefined", "Flexible always"], c: 1 },
        { q: "Milestones help with:", o: ["Confusion", "Tracking progress", "Delays", "Nothing"], c: 1 },
        { q: "Assets should be collected:", o: ["After project", "During kickoff", "Never", "At launch"], c: 1 },
        { q: "ClickUp project should be created:", o: ["Never", "At kickoff", "After completion", "When convenient"], c: 1 },
        { q: "Team assignment happens:", o: ["Randomly", "During planning", "After delivery", "Never"], c: 1 },
        { q: "Timeline should include:", o: ["Only end date", "Milestones and deadlines", "Nothing specific", "Just start date"], c: 1 },
        { q: "Client brief must be:", o: ["Ignored", "Reviewed thoroughly", "Skipped", "Assumed"], c: 1 }
    ],
    // Task 4: Team Management
    [
        { q: "Task descriptions should be:", o: ["Vague", "Specific", "Short", "Empty"], c: 1 },
        { q: "Deadlines should be:", o: ["Never set", "Clear", "Flexible always", "Ignored"], c: 1 },
        { q: "Assets should be provided:", o: ["Never", "Upfront", "After completion", "Only if asked"], c: 1 },
        { q: "Progress checks should be:", o: ["Weekly", "Daily", "Monthly", "Never"], c: 1 },
        { q: "PM should be available for:", o: ["Nothing", "Questions", "Lunch only", "Weekends only"], c: 1 },
        { q: "Daily standup asks about:", o: ["Weather", "Yesterday, today, blockers", "Personal life", "Vacation"], c: 1 },
        { q: "Blockers should be:", o: ["Ignored", "Addressed immediately", "Documented only", "Hidden"], c: 1 },
        { q: "Delegation means:", o: ["Doing everything yourself", "Assigning tasks clearly", "Avoiding work", "Random assignment"], c: 1 },
        { q: "Clear ownership means:", o: ["No one responsible", "Specific person assigned", "Everyone owns it", "PM does everything"], c: 1 },
        { q: "Team communication is:", o: ["Optional", "Essential", "Unnecessary", "Weekly only"], c: 1 }
    ],
    // Task 5: Client Relations
    [
        { q: "Response time during business hours:", o: ["24 hours", "8 hours", "4 hours", "1 week"], c: 2 },
        { q: "Progress updates should be:", o: ["Never", "Weekly", "Monthly", "Only when asked"], c: 1 },
        { q: "Loom is used for:", o: ["Gaming", "Visual explanations", "Personal videos", "Entertainment"], c: 1 },
        { q: "Before action, confirm:", o: ["Nothing", "Understanding", "Budget", "Weather"], c: 1 },
        { q: "Over-promising leads to:", o: ["Happy clients", "Problems", "Success", "More sales"], c: 1 },
        { q: "Estimates should have:", o: ["No buffer", "Buffer time", "Exact precision", "Random guesses"], c: 1 },
        { q: "Scope limitations should be:", o: ["Hidden", "Clarified", "Ignored", "Expanded freely"], c: 1 },
        { q: "Changes should be documented:", o: ["Never", "In writing", "Verbally only", "Not at all"], c: 1 },
        { q: "Managing expectations means:", o: ["Promising everything", "Setting realistic boundaries", "Ignoring clients", "Saying yes always"], c: 1 },
        { q: "Client communication should be:", o: ["Rare", "Professional and timely", "Aggressive", "Avoided"], c: 1 }
    ],
    // Task 6: Tools & Systems
    [
        { q: "Every project needs:", o: ["Nothing", "Dedicated ClickUp space", "Only emails", "Paper notes"], c: 1 },
        { q: "Tasks should have:", o: ["No dates", "Due dates", "Random priority", "No ownership"], c: 1 },
        { q: "Priority levels help with:", o: ["Confusion", "Organizing work", "Delays", "Nothing"], c: 1 },
        { q: "Task ownership should be:", o: ["Unclear", "Clear", "Shared always", "Nobody's"], c: 1 },
        { q: "Loom is for:", o: ["Project management", "Video updates", "Spreadsheets", "Design"], c: 1 },
        { q: "Slack is for:", o: ["Team communication", "Video calls only", "Storage", "Design"], c: 0 },
        { q: "Google Drive stores:", o: ["Videos only", "Assets", "Code", "Nothing"], c: 1 },
        { q: "Client calls use:", o: ["Loom", "Google Meet", "ClickUp", "Email"], c: 1 },
        { q: "Standard templates:", o: ["Should not exist", "Should be used", "Are optional", "Cause confusion"], c: 1 },
        { q: "Tags help with:", o: ["Nothing", "Organization", "Confusion", "Delays"], c: 1 }
    ],
    // Task 7: Risk Management
    [
        { q: "Scope creep means:", o: ["Reducing scope", "Adding features without budget", "Normal process", "Good thing"], c: 1 },
        { q: "Timeline slippage means:", o: ["Early delivery", "Team behind schedule", "On-time delivery", "Success"], c: 1 },
        { q: "Asset delays happen when:", o: ["Team is slow", "Client doesn't provide materials", "Everything is perfect", "PM is lazy"], c: 1 },
        { q: "Documentation should be:", o: ["Avoided", "Done in writing", "Verbal only", "Never"], c: 1 },
        { q: "Boundaries on scope should be:", o: ["Flexible always", "Clear", "None", "Hidden"], c: 1 },
        { q: "Contingency plans are for:", o: ["Nothing", "Delays", "Celebration", "Easy projects"], c: 1 },
        { q: "Escalation should happen:", o: ["Never", "Early when issues arise", "Only at failure", "After deadline"], c: 1 },
        { q: "Communication breakdown is:", o: ["Good", "A risk", "Normal", "Expected"], c: 1 },
        { q: "Risk mitigation means:", o: ["Ignoring risks", "Preventing/reducing risks", "Creating risks", "Accepting risks"], c: 1 },
        { q: "Written records are:", o: ["Optional", "Essential", "Unnecessary", "Waste of time"], c: 1 }
    ],
    // Task 8: Quality Control
    [
        { q: "Pages should be tested on:", o: ["Desktop only", "Mobile only", "Mobile & desktop", "Neither"], c: 2 },
        { q: "PageSpeed target:", o: ["50+", "65+", "85+", "95+"], c: 2 },
        { q: "Console errors should be:", o: ["Ignored", "None", "Acceptable", "Expected"], c: 1 },
        { q: "Content should be:", o: ["Ignored", "Proofread", "Copied randomly", "Automated"], c: 1 },
        { q: "Checkout flow must be:", o: ["Skipped", "Tested", "Ignored", "Assumed working"], c: 1 },
        { q: "Links must be:", o: ["Broken", "Working", "Missing", "Optional"], c: 1 },
        { q: "Delivery includes:", o: ["Just email", "Loom walkthrough", "Nothing", "Phone call only"], c: 1 },
        { q: "Internal QA happens:", o: ["After client review", "Before PM review", "Never", "Only for big projects"], c: 1 },
        { q: "PM final review is:", o: ["Optional", "Mandatory", "Rare", "Never"], c: 1 },
        { q: "Feedback should be:", o: ["Ignored", "Collected and addressed", "Dismissed", "Argued with"], c: 1 }
    ],
    // Task 9: Practice Scenarios
    [
        { q: "When client delays assets:", o: ["Wait forever", "Send reminder with deadline", "Cancel project", "Ignore"], c: 1 },
        { q: "Scope creep should be:", o: ["Always accepted free", "Quoted and approved", "Ignored", "Argued"], c: 1 },
        { q: "Extra features need:", o: ["No discussion", "Quote and written approval", "Free work", "Cancellation"], c: 1 },
        { q: "Impact on timeline should be:", o: ["Hidden", "Explained to client", "Ignored", "Minimized always"], c: 1 },
        { q: "Documentation protects:", o: ["Nobody", "Both parties", "Only client", "Only PM"], c: 1 },
        { q: "Alternatives (like stock photos) can be:", o: ["Never offered", "Offered when needed", "Always forced", "Ignored"], c: 1 },
        { q: "Written approval is needed:", o: ["Never", "Before extra work", "After completion", "Rarely"], c: 1 },
        { q: "Polite reminders are:", o: ["Unprofessional", "Appropriate", "Rude", "Unnecessary"], c: 1 },
        { q: "Positive acknowledgment means:", o: ["Saying no", "Acknowledging request positively", "Ignoring", "Arguing"], c: 1 },
        { q: "Boundaries should be:", o: ["Never set", "Clearly communicated", "Hidden", "Flexible always"], c: 1 }
    ],
    // Task 10: Final Certification (20 questions)
    [
        { q: "PM is hub of:", o: ["Sales", "All communication", "Design", "Nothing"], c: 1 },
        { q: "YouTube subscribers:", o: ["1M", "2.5M+", "5M", "10M"], c: 1 },
        { q: "Premium timeline:", o: ["1 week", "2-3 weeks", "5 weeks", "2 months"], c: 1 },
        { q: "Response time:", o: ["24 hours", "4 hours", "1 week", "1 hour"], c: 1 },
        { q: "Progress updates:", o: ["Never", "Weekly", "Monthly", "Yearly"], c: 1 },
        { q: "Scope creep means:", o: ["Good thing", "Adding without budget", "Reducing scope", "Normal"], c: 1 },
        { q: "PageSpeed target:", o: ["50+", "65+", "85+", "100"], c: 2 },
        { q: "ClickUp is for:", o: ["Design", "Project management", "Code", "Video"], c: 1 },
        { q: "QA happens:", o: ["Never", "Before delivery", "After launch", "Randomly"], c: 1 },
        { q: "Documentation is:", o: ["Optional", "Essential", "Waste", "Rare"], c: 1 },
        { q: "Premium price:", o: ["$800", "$1,200", "$2,000", "$500"], c: 1 },
        { q: "Enterprise price:", o: ["$1,200", "$1,800", "$2,500", "$1,000"], c: 1 },
        { q: "Assets collected:", o: ["After project", "At kickoff", "Never", "At launch"], c: 1 },
        { q: "Deadlines should be:", o: ["Vague", "Clear", "Flexible", "None"], c: 1 },
        { q: "Loom is for:", o: ["Project tracking", "Video explanations", "Storage", "Chat"], c: 1 },
        { q: "Escalation happens:", o: ["Never", "Early", "After failure", "Rarely"], c: 1 },
        { q: "Checkout must be:", o: ["Skipped", "Tested", "Assumed", "Ignored"], c: 1 },
        { q: "Extra work needs:", o: ["Nothing", "Quote and approval", "Just do it", "Cancel"], c: 1 },
        { q: "Daily standups cover:", o: ["Weather", "Yesterday, today, blockers", "Lunch", "Nothing"], c: 1 },
        { q: "PM is a:", o: ["Messenger only", "Problem-solver", "Observer", "Designer"], c: 1 }
    ]
];
