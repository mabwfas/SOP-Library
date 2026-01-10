// HR Specialist Training Data
// Complete training content for HR certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "People Mindset",
        description: "Culture & Care",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize that HR is 'Strategic', not just admin",
            "🛡️ Understand we are 'Guardians of Culture'",
            "🚀 Learn the 'Employee First' philosophy"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏛️ Study the Company Culture Pillars",
            "💎 Understand the 'Premium' talent standard",
            "📢 Learn how HR supports the Media & Agency arms"
        ]
    },
    {
        id: 3,
        title: "Recruitment Strategy",
        description: "Hiring the top 1%",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔻 Study the Hiring Pipeline Funnel",
            "🕵️‍♀️ Learn the 'Red Flag' screening method",
            "📝 Understand the 'Ideal Candidate Profile' (ICP)"
        ]
    },
    {
        id: 4,
        title: "Onboarding Mastery",
        description: "Day 1 Success",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🎁 The 'Wow Moment' Welcome Package",
            "🔑 System access & tools setup checklist",
            "📅 The 30-60-90 day plan structure"
        ]
    },
    {
        id: 5,
        title: "Performance Management",
        description: "Growth & Feedback",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🔄 Study the Feedback Loop Cycle",
            "📊 Understanding KPIs vs OKRs",
            "🗣️ How to have difficult conversations"
        ]
    },
    {
        id: 6,
        title: "Compensation & Benefits",
        description: "Rewards & Payroll",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "💰 Understanding salary bands vs benchmarks",
            "🎉 Managing perks (Wellness, Learning Budget)",
            "🗓️ The Payroll timeline"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "HR Tech Stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📂 Notion for Knowledge Base",
            "🗣️ Slack for Internal Comms",
            "📝 DocuSign for Contracts"
        ]
    },
    {
        id: 8,
        title: "Culture Building",
        description: "Remote connection",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🎉 Organizing remote All-Hands",
            "☕ Virtual coffee chats & bonding",
            "🏆 Employee recognition programs"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'Toxic Employee' complaint",
            "📝 Draft a Job Description for a Senior Dev",
            "🤝 Roleplay a resignation retention talk"
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
            "🎉 Get ready to build ring teams!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: PEOPLE MINDSET</h2>

<div class="content-section">
<h3>🎯 More Than Just "Paperwork"</h3>
<p>HR at Digital Heroes is a <strong>Growth Engine</strong>.</p>
<ul>
<li><strong>We don't just fill seats:</strong> We find athletes who want to win championships.</li>
<li><strong>We don't just police policies:</strong> We enable people to do their best work.</li>
<li><strong>We are Guardians of Culture:</strong> A toxic high-performer is fired. No exceptions.</li>
</ul>
</div>

<div class="content-section">
<h3>💡 The Philosophy: Employee First</h3>
<div class="highlight-box">
<strong>Happy Team = Happy Clients.</strong>
<p>Our job is to remove friction. If an employee is fighting with slow software or confusing benefits, HR has failed.</p>
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
<h3>🏛️ The Culture Pillars</h3>
<img src="images/culture_pillar_diagram.png" alt="Culture Pillars" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>💎 The Premium Talent Standard</h3>
<p>We hire the top 1%.</p>
<div class="warning-box">
<ul>
<li>❌ No "Clock Watchers".</li>
<li>❌ No "Job Hoppers" (without good reason).</li>
<li>✅ Builders who have side projects.</li>
<li>✅ Self-starters who don't need micromanaging.</li>
</ul>
</div>
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
<h2>📚 TASK 3: RECRUITMENT STRATEGY</h2>

<div class="content-section">
<h3>🔻 The Hiring Funnel</h3>
<img src="images/hiring_pipeline_funnel.png" alt="Hiring Funnel" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🕵️‍♀️ Screening for Red Flags</h3>
<ul>
<li><strong>The "They" vs "We" Test:</strong> Do they blame past teams? (Bad sign).</li>
<li><strong>Curiosity Test:</strong> Do they have questions for us? (If no questions -> Reject).</li>
<li><strong>Spec Work:</strong> We always pay for a small test project before hiring.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about recruitment</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: ONBOARDING MASTERY</h2>

<div class="content-section">
<h3>🎁 Day 1: The "Wow" Moment</h3>
<p>First impressions matter.</p>
<ul>
<li><strong>Access Ready:</strong> Email, Slack, Notion work BEFORE they log in.</li>
<li><strong>Welcome Guide:</strong> A clear PDF/Page explaining "Who's Who".</li>
<li><strong>The Buddy System:</strong> Assign a peer mentor for the first week.</li>
</ul>
</div>

<div class="content-section">
<h3>📅 The 30-60-90 Plan</h3>
<ul>
<li><strong>30 Days:</strong> Learn (Soak up info).</li>
<li><strong>60 Days:</strong> Contribute (Start tasks).</li>
<li><strong>90 Days:</strong> Ownership (Lead projects).</li>
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

const task5Content = `
<h2>📚 TASK 5: PERFORMANCE MANAGEMENT</h2>

<div class="content-section">
<h3>🔄 The Feedback Loop</h3>
<img src="images/feedback_loop_cycle.png" alt="Feedback Loop" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🗣️ Radiant Candor</h3>
<div class="highlight-box">
<strong>We care personally, but challenge directly.</strong>
<p>Don't save feedback for the annual review. Give it immediately. "Hey, that presentation was great, but next time condense the metrics slide."</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about performance</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: COMPENSATION & BENEFITS</h2>

<div class="content-section">
<h3>💰 Fair & Competitive</h3>
<ul>
<li><strong>Benchmarking:</strong> We pay above market rate to attract the best.</li>
<li><strong>Performance Bonus:</strong> Tied to company profit (Profit Share).</li>
</ul>
</div>

<div class="content-section">
<h3>🎉 Perks That Matter</h3>
<ul>
<li><strong>Remote First:</strong> Work from anywhere.</li>
<li><strong>Learning Budget:</strong> $1000/yr for courses/books.</li>
<li><strong>Wellness:</strong> Monthly gym/health stipend.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about comp & benefits</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📂 The Tech Stack</h3>
<ul>
<li><strong>Notion:</strong> The brain. All SOPs and Policies live here.</li>
<li><strong>Slack:</strong> The nervous system. Comms happen here (Async preferred).</li>
<li><strong>Gusto/Deel:</strong> Payroll and compliance.</li>
<li><strong>Greenhouse/Ashby:</strong> ATS (Applicant Tracking System).</li>
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
<h2>📚 TASK 8: CULTURE BUILDING</h2>

<div class="content-section">
<h3>🎉 Remote != Isolated</h3>
<p>Culture is what happens when no one is looking.</p>
</div>

<div class="content-section">
<h3>☕ Rituals</h3>
<ul>
<li><strong>All-Hands:</strong> Weekly updates from founders (Transparency).</li>
<li><strong>Donut Chats:</strong> Random 1:1 pairings in Slack for coffee.</li>
<li><strong>Shoutouts:</strong> #wins channel to celebrate small victories publicly.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about culture</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: Toxic High Performer</h3>
<p><strong>Situation:</strong> Top sales rep hits targets but bullies the support team.</p>
<div class="warning-box">
<strong>Action:</strong> Warning -> PIP -> Fire.
<p>Culture > Revenue. If we keep them, the support team quits. We lose more in the long run.</p>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: Resignation</h3>
<p><strong>Situation:</strong> Senior Dev quits for more money.</p>
<ul>
<li><strong>Action:</strong> Exit Interview. Find out WHY. if it's just money, wish them well. If it's bad management, fix the manager.</li>
<li><strong>Do not counter-offer</strong> purely on desperation. It sets a bad precedent.</li>
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
<p>You've completed the HR Specialist training. This final assessment covers:</p>
<ul>
<li>✅ Culture Pillars & Philosophy</li>
<li>✅ Recruitment Funnel Strategy</li>
<li>✅ Onboarding Process</li>
<li>✅ Performance Feedback Loops</li>
<li>✅ Compensation Models</li>
<li>✅ Crisis Management</li>
<li>✅ HR Tools & Remote Culture</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your HR Certification.</p>
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
        { q: "HR is:", o: ["Paperwork", "Strategic Growth Engine", "Police", "Party planning"], c: 1 },
        { q: "Guardians of Culture means:", o: ["Protecting office snacks", "Protecting values/Firing toxic people", "Locking doors", "Keeping secrets"], c: 1 },
        { q: "Primary goal:", o: ["Fill seats fast", "Find athletes/Top talent", "Save money", "Hire friends"], c: 1 },
        { q: "Toxic high performer action:", o: ["Promote", "Ignore", "Fire/Coach out", "Give bonus"], c: 2 },
        { q: "Employee First philosophy:", o: ["Clients don't matter", "Happy team = Happy clients", "Nobody works", "Free food"], c: 1 },
        { q: "Friction should be:", o: ["Increased", "Removed", "Ignored", "Documented"], c: 1 },
        { q: "HR failed if:", o: ["Employee fights with tools", "We hire someone", "We pay salary", "We exist"], c: 0 },
        { q: "We look for:", o: ["Clock watchers", "Builders/Owners", "Complainers", "Quiet people"], c: 1 },
        { q: "A bad hire cost:", o: ["Nothing", "Salary + Time + Morale", "$100", "Lunch"], c: 1 },
        { q: "Strategic HR vs Admin:", o: ["Admin is better", "Strategy drives business", "Same thing", "None"], c: 1 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Talent Standard:", o: ["Average", "Top 1%", "Anyone", "Cheap"], c: 1 },
        { q: "Job Hopper:", o: ["Good sign", "Red flag (without reason)", "Preferred", "Neutral"], c: 1 },
        { q: "Side projects show:", o: ["Distraction", "Passion/Builder mindset", "Laziness", "Nothing"], c: 1 },
        { q: "Micromanaging is:", o: ["Required", "Avoided by hiring self-starters", "Good", "Fun"], c: 1 },
        { q: "Company pillars:", o: ["Excellence/Ownership/Speed", "Fun/Food/Games", "Slow/Safe/Quiet", "None"], c: 0 },
        { q: "Agency arm services:", o: ["Low cost", "Premium/High Ticket", "Free", "Charity"], c: 1 },
        { q: "HR supports:", o: ["Only CEO", "Entire Ecosystem", "Only Sales", "Nobody"], c: 1 },
        { q: "Clock watchers are:", o: ["Hired", "Avoided", "Promoted", "Loved"], c: 1 },
        { q: "Media arm metrics:", o: ["Subscribers/Views", "Sales calls", "Code lines", "None"], c: 0 },
        { q: "Culture fits are:", o: ["Nice to have", "Mandatory", "Optional", "Rare"], c: 1 }
    ],
    // Task 3: Recruitment
    [
        { q: "Hiring Funnel Top:", o: ["Offer", "Applications/Inbound", "Interview", "Onboarding"], c: 1 },
        { q: "Hiring Funnel Bottom:", o: ["Screening", "Offer/Hire", "Application", "Ads"], c: 1 },
        { q: "They vs We test:", o: ["Do they blame past teams?", "Do they like us?", "Do they speak French?", "None"], c: 0 },
        { q: "No questions from candidate:", o: ["Good/Efficient", "Red Flag/No curiosity", "Okay", "Normal"], c: 1 },
        { q: "Spec work:", o: ["Free work", "Paid test project", "Never done", "Illegal"], c: 1 },
        { q: "Screening filters:", o: ["Everyone", "Unqualified candidates", "Top talent", "Nobody"], c: 1 },
        { q: "Ideal Candidate Profile (ICP):", o: ["Wishlist", "Specific persona definition", "Random", "Anyone"], c: 1 },
        { q: "Red flags should be:", o: ["Ignored", "Investigated/Rejection criteria", "Hidden", "Praised"], c: 1 },
        { q: "Inbound applications are:", o: ["Sourced", "Applied directly", "Referrals", "Headhunted"], c: 1 },
        { q: "Goal of funnel:", o: ["Reject everyone", "Find the 1 hire", "Collect resumes", "Waste time"], c: 1 }
    ],
    // Task 4: Onboarding
    [
        { q: "Day 1 goal:", o: ["Work immediately", "Wow Moment", "Confusion", "Boredom"], c: 1 },
        { q: "Access setup happens:", o: ["Day 1", "Before Day 1", "Week 2", "Month 1"], c: 1 },
        { q: "30 Days goal:", o: ["Lead", "Learn", "Quit", "Teach"], c: 1 },
        { q: "60 Days goal:", o: ["Learn", "Contribute", "Manage", "Sleep"], c: 1 },
        { q: "90 Days goal:", o: ["Learn", "Ownership", "Follow", "Ask"], c: 1 },
        { q: "Buddy system:", o: ["Peer mentor", "CEO", "Nobody", "Manual"], c: 0 },
        { q: "Welcome Guide:", o: ["Confusing", "Clear PDF/Page", "Oral tradition", "None"], c: 1 },
        { q: "First impression:", o: ["Doesn't matter", "Critical", "Forgettable", "Bad"], c: 1 },
        { q: "System access delay:", o: ["acceptable", "Failure of HR", "Normal", "Funny"], c: 1 },
        { q: "Onboarding ends:", o: ["Day 1", "It's ongoing (90 days+)", "Week 1", "Never"], c: 1 }
    ],
    // Task 5: Performance
    [
        { q: "Feedback loop starts with:", o: ["Action", "Set Goal", "Feedback", "Improvement"], c: 1 },
        { q: "Radiant Candor:", o: ["Mean", "Care personally, Challenge directly", "Silence", "Lying"], c: 1 },
        { q: "Feedback timing:", o: ["Annual review", "Immediate", "Never", "Monthly"], c: 1 },
        { q: "Annual review is for:", o: ["Surprises", "Summary", "Scolding", "Firing"], c: 1 },
        { q: "OKRs:", o: ["Objectives & Key Results", "Only Key Results", "Okay Rewards", "None"], c: 0 },
        { q: "KPIs:", o: ["Keep People Interested", "Key Performance Indicators", "Key People Inputs", "None"], c: 1 },
        { q: "Difficult conversations:", o: ["Avoid", "Have them directly", "Email only", "Delegate"], c: 1 },
        { q: "Improvement comes from:", o: ["Ignoring", "Feedback", "Magic", "Waiting"], c: 1 },
        { q: "Performance management is:", o: ["Punishment", "Growth & Alignment", "Paperwork", "Boring"], c: 1 },
        { q: "Toxic behavior:", o: ["Tolerated if high sales", "Not tolerated", "Encouraged", "Ignored"], c: 1 }
    ],
    // Task 6: Comp & Benefits
    [
        { q: "Benchmarking:", o: ["Guessing", "Comparing to market rates", "Lowballing", "Ignoring"], c: 1 },
        { q: "Payment philosophy:", o: ["Lowest possible", "Above market/Competitive", "Minimum wage", "Random"], c: 1 },
        { q: "Learning budget:", o: ["$0", "$1000/yr", "$100", "Unlimited"], c: 1 },
        { q: "Profit share:", o: ["Guaranteed", "Tied to company profit", "Illegal", "None"], c: 1 },
        { q: "Remote first:", o: ["Office required", "Work from anywhere", "Hybrid only", "No work"], c: 1 },
        { q: "Wellness stipend:", o: ["Pizza", "Gym/Health cash", "Nothing", "Beer"], c: 1 },
        { q: "Payroll must be:", o: ["Late", "Accurate & On time", "Approximate", "Optional"], c: 1 },
        { q: "Bonus is:", o: ["Right", "Reward for performance", "Random", "Gift"], c: 1 },
        { q: "Salary bands prevent:", o: ["Fairness", "Inequality/Bias", "Hiring", "Raises"], c: 1 },
        { q: "Perks aim to:", o: ["Waste money", "Retain talent/Happiness", "Show off", "Confuse"], c: 1 }
    ],
    // Task 7: Tools
    [
        { q: "Notion is:", o: ["Chat", "Knowledge Base/Brain", "Video", "Payroll"], c: 1 },
        { q: "Slack is:", o: ["Brain", "Nervous System/Comms", "Storage", "Design"], c: 1 },
        { q: "Gusto/Deel is:", o: ["Design", "Payroll/Compliance", "Chat", "Code"], c: 1 },
        { q: "Async comms in Slack:", o: ["Preferred", "Banned", "Impossible", "Rude"], c: 0 },
        { q: "Greenhouse/Ashby:", o: ["ATS (Recruiting)", "Garden", "Design", "Sales"], c: 0 },
        { q: "DocuSign:", o: ["Signing contracts", "Drawing", "Chatting", "Music"], c: 0 },
        { q: "Knowledge Base stores:", o: ["Nothing", "SOPs & Policies", "Chat logs", "Images"], c: 1 },
        { q: "Internal Comms tool:", o: ["Email", "Slack", "Phone", "Fax"], c: 1 },
        { q: "Tech stack purpose:", o: ["Slow down", "Speed up/Organize", "Cost money", "Look cool"], c: 1 },
        { q: "System access list:", o: ["Secure", "Checklist for onboarding", "Random", "Open"], c: 1 }
    ],
    // Task 8: Culture
    [
        { q: "Culture is:", o: ["Ping pong tables", "Values/Actions when no one looking", "Office walls", "Logos"], c: 1 },
        { q: "Remote culture needs:", o: ["Less effort", "More intentional effort", "Nothing", "Meeting"], c: 1 },
        { q: "All-Hands:", o: ["Party", "Weekly Transparency Meeting", "Punishment", "Sales call"], c: 1 },
        { q: "Donut chats:", o: ["Eating donuts", "Random 1:1 bondings", "Cooking", "Selling"], c: 1 },
        { q: "Shoutouts channel:", o: ["Complaints", "Celebrating wins", "Spam", "News"], c: 1 },
        { q: "Transparency builds:", o: ["Fear", "Trust", "Secrets", "Walls"], c: 1 },
        { q: "Remote != :", o: ["Fun", "Isolated", "Efficient", "Good"], c: 1 },
        { q: "Rituals are:", o: ["Boring", "Habits that build culture", "Religious", "Expensive"], c: 1 },
        { q: "Recognition should be:", o: ["Private", "Public", "Never", "Paid"], c: 1 },
        { q: "Bonding happens:", o: ["By accident", "Intentionally", "Never", "In person only"], c: 1 }
    ],
    // Task 9: Scenarios
    // Task 9: Scenarios
    [
        { q: "Toxic High Performer action:", o: ["Keep", "Fire", "Promote", "Ignore"], c: 1 },
        { q: "Culture > Revenue:", o: ["True", "False", "Maybe", "Depends"], c: 0 },
        { q: "Resignation Interview goal:", o: ["Argue", "Learn WHY", "Beg", "Yell"], c: 1 },
        { q: "Counter-offer desperation:", o: ["Good", "Bad precedent", "Required", "Fun"], c: 1 },
        { q: "Toxic interaction affects:", o: ["Nobody", "Whole team morale", "Sales only", "Clients only"], c: 1 },
        { q: "PIP stands for:", o: ["Party In Place", "Performance Improvement Plan", "Person In Power", "None"], c: 1 },
        { q: "Job Description needs:", o: ["Generic text", "Specific requirements/Tone", "Lies", "Nothing"], c: 1 },
        { q: "Retention talk:", o: ["Listen", "Talk over", "Bribe", "Threaten"], c: 0 },
        { q: "If money is only reason for leaving:", o: ["Match instantly", "Wish well (mostly)", "Block", "Cry"], c: 1 },
        { q: "Bad management causing churn:", o: ["Fix manager", "Blame employee", "Ignore", "Hire more"], c: 0 }
    ],
    // Task 10: Final (20)
    [
        { q: "HR goal:", o: ["Strategic Athlete Hunting", "Paperwork", "Party", "None"], c: 0 },
        { q: "ICP:", o: ["Ideal Candidate Profile", "Ice Cream Party", "Internal Code", "None"], c: 0 },
        { q: "Onboarding 90 day goal:", o: ["Ownership", "Learning", "Quitting", "None"], c: 0 },
        { q: "Toxic Performer:", o: ["Fire", "Keep", "Promote", "None"], c: 0 },
        { q: "OKRs:", o: ["Objectives Key Results", "Observations", "Old Keys", "None"], c: 0 },
        { q: "Feedback timing:", o: ["Immediate", "Yearly", "Never", "None"], c: 0 },
        { q: "Remote culture:", o: ["Intentional", "Automatic", "Impossible", "None"], c: 0 },
        { q: "Donut chat:", o: ["Bonding", "Eating", "Selling", "None"], c: 0 },
        { q: "Top 1%:", o: ["Tall", "High Performers", "Rich", "None"], c: 1 },
        { q: "Guardians of:", o: ["Galaxy", "Culture", "Money", "None"], c: 1 },
        { q: "Wow Moment:", o: ["Day 1 experience", "Firing", "Bonus", "None"], c: 0 },
        { q: "Employee First:", o: ["Happy Team Happy Client", "Client First", "Money First", "None"], c: 0 },
        { q: "Hiring Funnel:", o: ["Pipeline", "Slide", "Game", "None"], c: 0 },
        { q: "Spec Work:", o: ["Paid Test", "Free Labor", "Illegal", "None"], c: 0 },
        { q: "Red Flag:", o: ["Blaming others", "Working hard", "Asking Qs", "None"], c: 0 },
        { q: "Buddy:", o: ["Peer mentor", "Dog", "Boss", "None"], c: 0 },
        { q: "PIP:", o: ["Improvement Plan", "Picture", "Pipe", "None"], c: 0 },
        { q: "Gusto:", o: ["Payroll", "Game", "Food", "None"], c: 0 },
        { q: "Notion:", o: ["Knowledge Base", "Chat", "Video", "None"], c: 0 },
        { q: "Exit Interview:", o: ["Learn why", "Argue", "Ignore", "None"], c: 0 }
    ]
];
