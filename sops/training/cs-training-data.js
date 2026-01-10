// Customer Success Training Data
// Complete training content for Customer Success certification
// UPGRADED: Expanded Lessons and Study Guides (Text Only)

const trainingTasks = [
    {
        id: 1,
        title: "Success Mindset",
        description: "Retention is Growth",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize that 'Retention > Acquisition'",
            "🛡️ Understand we are 'Partners', not support",
            "🚀 Learn the 'Proactive vs Reactive' model"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Study the service offerings (Shopify, SEO, Ads)",
            "💎 Understand the 'White Glove' service standard",
            "📢 Learn how CS bridges Sales & Delivery"
        ]
    },
    {
        id: 3,
        title: "Onboarding Mastery",
        description: "First 90 Days",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🚀 The Kickoff Call agenda",
            "📅 The 'Time to Value' (TTV) metric",
            "📝 Setting expectations early"
        ]
    },
    {
        id: 4,
        title: "Churn Prevention",
        description: "Red Flag Detection",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "⚠️ Identifying 'Ghosting' clients",
            "📉 Handling 'Budget Cuts' conversations",
            "🔥 The 'Save Playbook'"
        ]
    },
    {
        id: 5,
        title: "Upselling & Expansion",
        description: "Growing Accounts",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📈 Identifying growth opportunities",
            "🤝 The 'Trusted Advisor' pitch",
            "💰 Moving from Project to Retainer"
        ]
    },
    {
        id: 6,
        title: "QBRs & Reviews",
        description: "Strategic Alignment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📅 Quarterly Business Review (QBR) deck structure",
            "📊 Presenting ROI and results",
            "🚀 Roadmap planning for the next quarter"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "CS Tech Stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📂 HubSpot for CRM/Notes",
            "📧 Email templates for efficiency",
            "🗣️ Slack connect channels etiquette"
        ]
    },
    {
        id: 8,
        title: "Conflict Resolution",
        description: "Turning Angry to Happy",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🧘‍♀️ De-escalation techniques (LATTE method)",
            "🤝 Ownership of mistakes (Radical Responsibility)",
            "🎁 Compensation/Make-good offers"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'We want to cancel' email",
            "📝 Run a mock Kickoff Call",
            "🤝 Pitch an SEO retainer to a Design client"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive assessment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Review ALL previous modules",
            "🏆 Score 20/20 to pass",
            "🎉 Get ready to delight clients!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: SUCCESS MINDSET</h2>

<div class="content-section">
<h3>🎯 Retention is Growth</h3>
<p>It costs 5x more to get a new client than to keep an existing one.</p>
<ul>
<li><strong>We are not Support:</strong> Support fixes breaks. Success prevents breaks.</li>
<li><strong>We are Partners:</strong> We sit on the same side of the table as the client.</li>
<li><strong>Proactive:</strong> We call them BEFORE they have a problem.</li>
</ul>
</div>

<div class="content-section">
<h3>💡 The Trust Equation</h3>
<div class="highlight-box">
<strong>Trust = (Credibility + Reliability + Intimacy) / Self-Orientation.</strong>
<p>Focus on THEIR goals, not our revenue.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about mindset</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 Service Offerings</h3>
<p>You must know what we sell to support it.</p>
<ul>
<li><strong>Shopify Dev:</strong> Builds/Speed optimization.</li>
<li><strong>Design:</strong> Branding/UI/UX.</li>
<li><strong>Marketing:</strong> SEO/Paid Ads/Email.</li>
</ul>
</div>

<div class="content-section">
<h3>💎 White Glove Standard</h3>
<p>We don't just "do the work". We curate the experience.</p>
<ul>
<li>Over-communicate.</li>
<li>Anticipate needs.</li>
<li>Surprise and delight.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about offerings</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: ONBOARDING MASTERY</h2>

<div class="content-section">
<h3>🚀 The First 90 Days</h3>
<p>This is where retention is won or lost.</p>
<ul>
<li><strong>Kickoff Call:</strong> Align on goals, timelines, and communication.</li>
<li><strong>Time to Value (TTV):</strong> How fast can we get them a "Quick Win"?</li>
<li><strong>Access:</strong> Get logins immediately. Delays here kill momentum.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about onboarding</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CHURN PREVENTION</h2>

<div class="content-section">
<h3>⚠️ Red Flags</h3>
<ul>
<li><strong>Ghosting:</strong> They stop replying to emails.</li>
<li><strong>Change in POC:</strong> Their champion leaves the company. (High Risk).</li>
<li><strong>Late Payments:</strong> Often precedes cancellation.</li>
</ul>
</div>

<div class="content-section">
<h3>🔥 The Save Playbook</h3>
<p>Client wants to cancel? Get them on a call. Listen. Offer a "Pause" or a "Pivot" instead of a cancel.</p>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about churn</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: UPSELLING & EXPANSION</h2>

<div class="content-section">
<h3>📈 Account Expansion</h3>
<p>Selling to happy clients is easy.</p>
<div class="highlight-box">
<strong>The Logic:</strong>
"We built your site (Project). Now you need traffic (SEO Retainer)."
</div>
</div>

<div class="content-section">
<h3>🤝 Trusted Advisor</h3>
<p>Don't "pitch". Recommend solutions to problems they have admitted to you.</p>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about upselling</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: QBRs & REVIEWS</h2>

<div class="content-section">
<h3>📅 Quarterly Business Reviews</h3>
<p>The strategic check-in.</p>
<ul>
<li><strong>Review:</strong> What did we achieve last quarter? (ROI).</li>
<li><strong>Plan:</strong> What are we doing next quarter? (Roadmap).</li>
<li><strong>Feedback:</strong> How can we be better? (NPS).</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about QBRs</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📂 The Tech Stack</h3>
<ul>
<li><strong>HubSpot:</strong> Log every call. If it's not in HubSpot, it didn't happen.</li>
<li><strong>Slack Connect:</strong> Shared channels with clients. Set boundaries (Only M-F).</li>
<li><strong>Loom:</strong> Send video updates instead of long emails.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about tools</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: CONFLICT RESOLUTION</h2>

<div class="content-section">
<h3>🧘‍♀️ Turning Anger into Advocacy</h3>
<p>Mistakes happen. How we handle them defines us.</p>
<ul>
<li><strong>L.A.T.T.E:</strong> Listen, Acknowledge, Take Action, Thank, Explain.</li>
<li><strong>Radical Responsibility:</strong> Own it. Don't blame the dev team. "I will fix this."</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about conflict</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: The Angry Email</h3>
<p><strong>Situation:</strong> "This is unacceptable! The site is down!"</p>
<div class="highlight-box">
<strong>Action:</strong> Call immediately (Don't email). "I am seeing this too. I have the devs on it right now. I will update you every 30 mins until fixed."
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: The Cancellation</h3>
<p><strong>Situation:</strong> "We are cutting budget."</p>
<ul>
<li><strong>Action:</strong> "I understand. Before we cancel, what if we paused for 30 days? Or reduced scope to just maintenance to keep the gains?"</li>
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
<p>You've completed the Customer Success training. This final assessment covers:</p>
<ul>
<li>✅ Retention Strategies</li>
<li>✅ Onboarding Protocols</li>
<li>✅ Upselling Logic</li>
<li>✅ Crisis Management</li>
<li>✅ QBR Structure</li>
<li>✅ Tool Mastery</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your CS Certification.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Final Quiz?</h3>
<ul>
<li>📝 20 questions covering all training modules</li>
<li>🎯 Score <strong>20/20</strong> to receive certification</li>
</ul>
</div>
`;

// Quiz Questions
const allQuizzes = [
    // Task 1: Mindset
    [
        { q: "Retention vs Acquisition:", o: ["Retention > Acquisition", "Acquisition > Retention", "Same", "Who cares"], c: 0 },
        { q: "CS vs Support:", o: ["Support fixes, CS prevents", "Same thing", "CS fixes breaks", "None"], c: 0 },
        { q: "We are:", o: ["Vendors", "Partners", "Servants", "Friends"], c: 1 },
        { q: "Proactive means:", o: ["Calling before problem", "Waiting for email", "Ignoring", "Sleeping"], c: 0 },
        { q: "Trust Equation denominator:", o: ["Self-Orientation", "Credibility", "Reliability", "Intimacy"], c: 0 },
        { q: "Cost of new client:", o: ["Cheap", "5x expensive", "Free", "1x"], c: 1 },
        { q: "Focus on:", o: ["Their goals", "Our revenue", "Lunch", "Vacation"], c: 0 },
        { q: "CS Goal:", o: ["Make them happy/Succesful", "Sell them junk", "Ignore them", "None"], c: 0 },
        { q: "Success is:", o: ["Ongoing", "One time", "Random", "None"], c: 0 },
        { q: "Reactive is:", o: ["Bad/Support mode", "Good", "Standard", "None"], c: 0 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Shopify Dev:", o: ["Builds sites", "Cooks food", "Drives cars", "None"], c: 0 },
        { q: "White glove:", o: ["Premium/Curated", "Dirty", "Cheap", "None"], c: 0 },
        { q: "Over-communicate:", o: ["Annoying", "Key to trust", "Bad", "Illegal"], c: 1 },
        { q: "Marketing services:", o: ["SEO/Ads", "Cleaning", "Plumbing", "None"], c: 0 },
        { q: "Anticipate needs:", o: ["Wait for ask", "Guess", "Predict/Solve early", "Ignore"], c: 2 },
        { q: "Agency arm:", o: ["High ticket service", "Media", "Software", "None"], c: 0 },
        { q: "Surprise and delight:", o: ["Gift/Moment", "Scare", "Bill", "None"], c: 0 },
        { q: "CS Bridges:", o: ["Sales & Delivery", "Marketing & HR", "None", "All"], c: 0 },
        { q: "Design offers:", o: ["Branding/UI", "Code", "Accounting", "None"], c: 0 },
        { q: "Ecosystem:", o: ["Integrated", "Separate", "Broken", "None"], c: 0 }
    ],
    // Task 3: Onboarding
    [
        { q: "First 90 Days:", o: ["Critical for retention", "Unimportant", "Boring", "None"], c: 0 },
        { q: "Kickoff Call:", o: ["First alignment meeting", "Party", "Sales call", "None"], c: 0 },
        { q: "TTV:", o: ["Time To Value", "Time To Ventilate", "TV Station", "None"], c: 0 },
        { q: "Quick Win:", o: ["Builds momentum", "Wastes time", "Is hard", "None"], c: 0 },
        { q: "Get Access:", o: ["Immediately", "Later", "Never", "Month 2"], c: 0 },
        { q: "Delays in access:", o: ["Kill momentum", "Are fine", "Standard", "None"], c: 0 },
        { q: "Expectation setting:", o: ["Early", "Never", "End", "Middle"], c: 0 },
        { q: "Onboarding goal:", o: ["Confidence/Trust", "Confusion", "Sales", "None"], c: 0 },
        { q: "Momentum:", o: ["Keep high", "Kill it", "Ignore", "None"], c: 0 },
        { q: "Kickoff Agenda:", o: ["Goals/Timeline/Comms", "Jokes", "Sales pitch", "None"], c: 0 }
    ],
    // Task 4: Churn
    [
        { q: "Ghosting:", o: ["Red Flag", "Good", "Normal", "Fun"], c: 0 },
        { q: "POC leaves:", o: ["High Risk", "Low Risk", "Good", "None"], c: 0 },
        { q: "Late Payment:", o: ["Churn indicator", "Normal", "Good", "None"], c: 0 },
        { q: "Save Playbook:", o: ["Listen/Pause/Pivot", "Argue", "Sue", "Ignore"], c: 0 },
        { q: "Budget cuts:", o: ["Common objection", "Lie", "Truth", "Good"], c: 0 },
        { q: "Pivot:", o: ["Change strategy", "Quit", "Refund", "None"], c: 0 },
        { q: "Pause:", o: ["Better than cancel", "Worse than cancel", "Same", "None"], c: 0 },
        { q: "Champion:", o: ["Main contact/Advocate", "Winner", "Loser", "None"], c: 0 },
        { q: "Churn is:", o: ["Losing client", "Winning client", "Butter", "None"], c: 0 },
        { q: "Prevent churn by:", o: ["Solving root issue", "Begging", "Yelling", "None"], c: 0 }
    ],
    // Task 5: Upsell
    [
        { q: "Account Expansion:", o: ["Selling more to existing", "Getting new client", "Firing", "None"], c: 0 },
        { q: "Trusted Advisor:", o: ["Recommends solutions", "Sells junk", "Lies", "None"], c: 0 },
        { q: "Project to Retainer:", o: ["Stable revenue", "One time", "Bad", "None"], c: 0 },
        { q: "Upsell timing:", o: ["After success/Trust", "Day 1", "When angry", "Never"], c: 0 },
        { q: "Logic:", o: ["Problem -> Solution", "Feature -> Benefit", "None", "All"], c: 0 },
        { q: "Growth opportunity:", o: ["Spotting gaps", "Ignoring gaps", "Creating gaps", "None"], c: 0 },
        { q: "Pitch focus:", o: ["The Client Value", "Our Commission", "Nothing", "None"], c: 0 },
        { q: "Easier sale:", o: ["Existing happy client", "Cold lead", "Stranger", "Enemy"], c: 0 },
        { q: "SEO Retainer:", o: ["Recurring", "One off", "Free", "None"], c: 0 },
        { q: "Design to Dev:", o: ["Cross-sell", "Down-sell", "No-sell", "None"], c: 0 }
    ],
    // Task 6: QBR
    [
        { q: "QBR:", o: ["Quarterly Business Review", "Quick Business Run", "Quiz", "None"], c: 0 },
        { q: "Review section:", o: ["Look back/ROI", "Look forward", "Sales", "None"], c: 0 },
        { q: "Plan section:", o: ["Roadmap/Strategy", "History", "Complaints", "None"], c: 0 },
        { q: "ROI proof:", o: ["Justifies fees", "Is optional", "Boring", "None"], c: 0 },
        { q: "Frequency:", o: ["Quarterly", "Weekly", "Daily", "Never"], c: 0 },
        { q: "NPS:", o: ["Net Promoter Score", "No Problem Sir", "None", "New"], c: 0 },
        { q: "Strategic check-in:", o: ["QBR", "Daily Standup", "Email", "None"], c: 0 },
        { q: "Deck structure:", o: ["Results -> Plan -> Feedback", "Sales -> Sales", "None", "All"], c: 0 },
        { q: "Feedback goal:", o: ["Improvement", "Defense", "None", "Arguing"], c: 0 },
        { q: "Roadmap:", o: ["Future value", "Past value", "None", "Cost"], c: 0 }
    ],
    // Task 7: Tools
    [
        { q: "HubSpot:", o: ["CRM/Single Source of Truth", "Design tool", "Game", "None"], c: 0 },
        { q: "Slack Connect:", o: ["Shared channel", "Internal only", "Banned", "None"], c: 0 },
        { q: "Loom:", o: ["Video updates", "Text", "Audio", "None"], c: 0 },
        { q: "Boundaries:", o: ["M-F Only", "24/7", "Never", "None"], c: 0 },
        { q: "Log calls:", o: ["Always", "Never", "Sometimes", "Optional"], c: 0 },
        { q: "If not in HubSpot:", o: ["It didn't happen", "It's fine", "Who cares", "None"], c: 0 },
        { q: "Email templates:", o: ["Efficiency", "Laziness", "Bad", "None"], c: 0 },
        { q: "Video vs Text:", o: ["Video often clearer", "Text better", "None", "Same"], c: 0 },
        { q: "CRM:", o: ["Customer Relationship Mgmt", "Car", "Cat", "None"], c: 0 },
        { q: "Slack etiquette:", o: ["Professional", "Casual", "Rude", "None"], c: 0 }
    ],
    // Task 8: Conflict
    [
        { q: "LATTE:", o: ["Listen Acknowledge etc", "Coffee", "Late", "None"], c: 0 },
        { q: "Radical Responsibility:", o: ["Own it", "Blame others", "Hide", "Run"], c: 0 },
        { q: "De-escalate:", o: ["Calm down", "Angry up", "Fight", "None"], c: 0 },
        { q: "Blame dev team:", o: ["Never", "Always", "Sometimes", "Okay"], c: 0 },
        { q: "Advocate:", o: ["Happy client", "Angry client", "Neutral", "None"], c: 0 },
        { q: "Make-good:", o: ["Compensation/Gift", "Apology only", "Nothing", "Bill"], c: 0 },
        { q: "Listen:", o: ["First step", "Last step", "Optional", "Never"], c: 0 },
        { q: "Explain:", o: ["After fixing/Thanking", "First", "Never", "None"], c: 0 },
        { q: "Mistakes:", o: ["Happen/Opportunity to fix", "Fatal", "Rare", "None"], c: 0 },
        { q: "Tone:", o: ["Calm/Professional", "Angry", "Defensive", "None"], c: 0 }
    ],
    // Task 9: Scenarios
    [
        { q: "Site down action:", o: ["Call immediately", "Email", "Wait", "Sleep"], c: 0 },
        { q: "Update frequency:", o: ["Every 30 mins", "Next day", "Never", "Weekly"], c: 0 },
        { q: "Budget cut action:", o: ["Offer Pause/Pivot", "Cancel immediately", "Scream", "None"], c: 0 },
        { q: "Angry email channel:", o: ["Switch to Phone", "Reply All", "Ignore", "Block"], c: 0 },
        { q: "Mock Kickoff:", o: ["Practice", "Real", "Waste", "None"], c: 0 },
        { q: "Maintenance mode:", o: ["Keeps client (reduced)", "Loses client", "Bad", "None"], c: 0 },
        { q: "Devs on it:", o: ["Reassurance", "Lie", "Bad", "None"], c: 0 },
        { q: "Seeing this too:", o: ["Validation", "Denial", "None", "All"], c: 0 },
        { q: "SEO pitch:", o: ["Value add", "Annoyance", "None", "Bad"], c: 0 },
        { q: "Cancel email:", o: ["Call action", "Delete", "Accept", "None"], c: 0 }
    ],
    // Task 10: Final (20)
    [
        { q: "TTV:", o: ["Time To Value", "TV", "None", "Time"], c: 0 },
        { q: "Churn:", o: ["Attrition", "Growth", "None", "Sales"], c: 0 },
        { q: "LATTE:", o: ["Conflict Framework", "Coffee", "None", "Late"], c: 0 },
        { q: "QBR:", o: ["Quarterly Business Review", "Quiz", "None", "Quality"], c: 0 },
        { q: "HubSpot:", o: ["CRM", "Chat", "None", "Email"], c: 0 },
        { q: "Ghosting:", o: ["Red Flag", "Good", "None", "Fun"], c: 0 },
        { q: "White Glove:", o: ["Premium Service", "Cleaning", "None", "Cold"], c: 0 },
        { q: "Retention > Acquisition:", o: ["True", "False", "None", "Maybe"], c: 0 },
        { q: "Trusted Advisor:", o: ["Partner", "Vendor", "None", "Enemy"], c: 0 },
        { q: "Kickoff:", o: ["Start", "End", "None", "Middle"], c: 0 },
        { q: "Upsell:", o: ["Expansion", "Downsell", "None", "Churn"], c: 0 },
        { q: "NPS:", o: ["Net Promoter Score", "No Problem", "None", "New"], c: 0 },
        { q: "Loom:", o: ["Video", "Text", "None", "Audio"], c: 0 },
        { q: "Slack Boundaries:", o: ["M-F", "24/7", "None", "Never"], c: 0 },
        { q: "Radical Responsibility:", o: ["Own it", "Blame", "None", "Hide"], c: 0 },
        { q: "Pause:", o: ["Alternative to Cancel", "Cancel", "None", "Stop"], c: 0 },
        { q: "POC:", o: ["Point of Contact", "Proof", "None", "Piece"], c: 0 },
        { q: "ROI:", o: ["Return On Investment", "Radio", "None", "Run"], c: 0 },
        { q: "Trust Equation:", o: ["Formula", "Math", "None", "Science"], c: 0 },
        { q: "Success Mindset:", o: ["Proactive", "Reactive", "None", "Lazy"], c: 0 }
    ]
];
