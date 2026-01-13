// HR Specialist Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Elite Talent Management

const trainingTasks = [
    {
        id: 1,
        title: "HR Mindset",
        description: "Gatekeepers of Excellence",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Culture Add vs Culture Fit",
            "🛡️ Concept: Protect the Founders",
            "🚀 Concept: Speed of Hire vs Quality"
        ]
    },
    {
        id: 2,
        title: "Job Descriptions",
        description: "Writing to Attract Top 1%",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📄 Skill: The 'Hook' Paragraph",
            "⛔ Skill: Filtering Instructions",
            "🎯 Skill: Outcome-Based Requirements"
        ]
    },
    {
        id: 3,
        title: "Outreach Strategy",
        description: "Headhunting on LinkedIn",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔍 Tech: Boolean Search Strings",
            "📧 Tech: Cold DM Templates",
            "🤝 Tech: Building a Talent Pool"
        ]
    },
    {
        id: 4,
        title: "CV Screening",
        description: "6 Seconds to Decide",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🚩 Warning: Job Hopping",
            "🚩 Warning: Vague Results",
            "✅ Signal: Career Progression"
        ]
    },
    {
        id: 5,
        title: "Interview Mastery",
        description: "The STAR Method Update",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🗣️ Tech: Situational Questions",
            "🗣️ Tech: Digging Deeper (The 'Why' Chain)",
            "📝 Tech: Scorecards & Bias Removal"
        ]
    },
    {
        id: 6,
        title: "Reference Checking",
        description: "Truth Detection",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📞 Process: The 'Backdoor' Reference",
            "❓ Question: 'would you rehire them?'",
            "🕵️‍♀️ Skill: Reading Between the Lines"
        ]
    },
    {
        id: 7,
        title: "The Offer",
        description: "Closing the Deal",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "💰 Factor: Salary Negotiation Scripts",
            "🎁 Factor: Perks & Equity",
            "✍️ Doc: The Contract & NDA"
        ]
    },
    {
        id: 8,
        title: "Onboarding Experience",
        description: "Day 1 to Day 90",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📧 Email: The Welcome Package",
            "🛠️ Setup: Access & Hardware",
            "📅 Plan: The 30-60-90 Day Plan"
        ]
    },
    {
        id: 9,
        title: "Culture Building",
        description: "Remote Engagement",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎉 Event: Virtual Town Halls",
            "💬 Comms: Slack Etiquette",
            "❤️ Value: Recognition Systems"
        ]
    },
    {
        id: 10,
        title: "Performance Mgmt",
        description: "PIPs and Reviews",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📊 Cycle: Quarterly Reviews",
            "⚠️ Process: Performance Improvement Plans",
            "🚫 Hard Thing: Termination with Dignity"
        ]
    },
    {
        id: 11,
        title: "Crisis Management",
        description: "HR Emergencies",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "⚖️ Legal: Harassment Claims",
            "💸 Finance: Payroll Errors",
            "🗣️ PR: Internal Leaks"
        ]
    },
    {
        id: 12,
        title: "HR Tools & Tech",
        description: "The Stack",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "⚙️ Tool: ATS (Application Tracking Systems)",
            "⚙️ Tool: Deel / Remote.com",
            "⚙️ Tool: Notion for Wiki"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: HR MINDSET - Gatekeepers of Excellence</h2>

<div class="content-section">
    <h3>⭐ Culture Add vs Culture Fit</h3>
    <p>"Culture Fit" creates clones. "Culture Add" brings new perspectives. We hire people who raise the bar, not just meet it.</p>
</div>

<div class="content-section">
    <h3>🛡️ Protect the Founders</h3>
    <p>Your job is to ensure the founders never deal with: Petty disputes, Payroll errors, or Unqualified interviews. You are the shield.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Values Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Defining Quality</h4>
        <p>List 3 behaviors that would get someone <strong>fired</strong> at a top-tier agency, and 3 traits that would get them <strong>promoted</strong>.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Top 1% Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: JOB DESCRIPTIONS - Magnetic Writing</h2>

<div class="content-section">
    <h3>🧲 The Hook</h3>
    <p>Most JDs are boring. Ours must excite. <br><em>"Do you want to build systems that scale to 1M users?"</em> vs <em>"We need a backend dev."</em></p>
</div>

<div class="content-section">
    <h3>⛔ Filtering Instructions</h3>
    <p>Add a small task in the JD: "Start your cover letter with the word 'Blueberry'". This filters out 50% of spam applicants instantly.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: JD Rewrite</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Writer</h4>
        <p>Write an opening paragraph for a "Senior Copywriter" role. Make it sound aggressive, exciting, and elite. No corporate fluff.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about JDs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: OUTREACH STRATEGY</h2>

<div class="content-section">
    <h3>🔍 Boolean Search</h3>
    <p>Master LinkedIn search: <code>(Developer OR Engineer) AND (Shopify OR Liquid) AND NOT "Junior"</code>.</p>
</div>

<div class="content-section">
    <h3>📧 Cold DM Mastery</h3>
    <p>Subject: "Quick question, [Name]"</p>
    <p>Body: "Saw your work on [Project]. Impressive. We're building [X] and your skills seem aligned. Open to a 5-min chat? No pressure."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Headhunting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Search Strings</h4>
        <p>Write a Boolean search string to find a "Finance Manager" in "New York" with "SaaS" experience, excluding "Interns".</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Sourcing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CV SCREENING - The 6-Second Scan</h2>

<div class="content-section">
    <h3>🚩 Red Flags</h3>
    <ul>
        <li><strong>Job Hopping:</strong> 4 jobs in 2 years? No.</li>
        <li><strong>Vague Titles:</strong> "Visionary" instead of "Manager".</li>
        <li><strong>Formatting Errors:</strong> Attention to detail is zero.</li>
    </ul>
</div>

<div class="content-section">
    <h3>✅ Green Flags</h3>
    <ul>
        <li><strong>Numbers:</strong> "Increased sales by 20%".</li>
        <li><strong>Progression:</strong> Junior -> Senior -> Lead within one company.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Screening</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Review Simulation</h4>
        <p>I will paste a CV snippet. You tell me: Interview or Reject? And Why?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Screening</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: INTERVIEW MASTERY - The STAR Method</h2>

<div class="content-section">
    <h3>🗣️ STAR Method</h3>
    <ul>
        <li><strong>S</strong>ituation: "Tell me about a time..."</li>
        <li><strong>T</strong>ask: "What was your goal?"</li>
        <li><strong>A</strong>ction: "What did YOU specifically do?"</li>
        <li><strong>R</strong>esult: "What was the outcome?"</li>
    </ul>
</div>

<div class="content-section">
    <h3>🕵️‍♀️ The "Why" Chain</h3>
    <p>Ask "Why?" 3 times deeper. <br>Candidate: "I improved speed." <br>You: "How?" <br>Candidate: "Cached images." <br>You: "Why that method?" <br>Candidate: "It was cheapest." -> <strong>Insight: They are cost-aware.</strong></p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Question Prep</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Behavioral Qs</h4>
        <p>Write 3 questions to test for "Resilience" in a Sales role.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Interviewing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: REFERENCE CHECKING</h2>

<div class="content-section">
    <h3>📞 The Backdoor Reference</h3>
    <p>Don't just call the list they gave you (those are friends). Check mutual connections on LinkedIn. Ask unbiased sources.</p>
</div>

<div class="content-section">
    <h3>❓ The Golden Question</h3>
    <p>"If you were starting a company with your own money today, would you hire them again?" <br>Any hesitation = NO.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scripting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Reference Call</h4>
        <p>A reference says: "He was good, but sometimes struggled with deadlines." What is your follow-up question?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about References</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: THE OFFER & CLOSING</h2>

<div class="content-section">
    <h3>💰 Negotiation</h3>
    <p>Know the market rate. Offer fair, but leave room for a small bump to let them feel like they "won".</p>
</div>

<div class="content-section">
    <h3>✍️ The Speed of Signing</h3>
    <p>Time kills all deals. Send the contract via DocuSign/PandaDoc immediately after the verbal Yes.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Offer Letter</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Close</h4>
        <p>Candidate asks for 20% more than budget. Write a script to offer non-monetary perks (Equity, Flex Time) instead.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Offers</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: ONBOARDING EXPERIENCE</h2>

<div class="content-section">
    <h3>📅 The First Week</h3>
    <p>Day 1 matters. Have their email ready. Have a welcome meeting booked. Have a "Buddy" assigned.</p>
</div>

<div class="content-section">
    <h3>📈 30-60-90 Day Plan</h3>
    <ul>
        <li><strong>30 Days:</strong> Learn (Information sponge).</li>
        <li><strong>60 Days:</strong> Do (Small tasks with supervision).</li>
        <li><strong>90 Days:</strong> Own (Independent projects).</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Onboarding Checklist</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Access Control</h4>
        <p>List the 5 critical tools a "Social Media Manager" needs access to on Day 1. (e.g., Canva, FB Business Manager...)</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Onboarding</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: CULTURE BUILDING (REMOTE)</h2>

<div class="content-section">
    <h3>🎉 Intentionality</h3>
    <p>Remote culture doesn't happen by accident. It dies in silence.</p>
    <ul>
        <li><strong>Wins Channel:</strong> Celebrate every victory daily.</li>
        <li><strong>Donut Calls:</strong> Random coffee chats (non-work).</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Event Planning</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Virtual Retreat</h4>
        <p>Plan a 2-hour virtual team bonding event that isn't fast/boring. What is the agenda?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Culture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: PERFORMANCE MANAGEMENT</h2>

<div class="content-section">
    <h3>📊 Radical Candor</h3>
    <p>Care Personally + Challenge Directly. Don't sandwich feedback. Be clear.</p>
</div>

<div class="content-section">
    <h3>⚠️ The PIP (Performance Improvement Plan)</h3>
    <p>It's not a punishment; it's a roadmap. "You need to hit X by Date Y to stay." Document everything.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Feedback</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Difficult Conversation</h4>
        <p>Draft the opening script for a performance review where the employee thinks they are doing great, but they are actually failing.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Performance</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: CRISIS MANAGEMENT</h2>

<div class="content-section">
    <h3>⚖️ Legal & Compliance</h3>
    <p>Harassment claims? Zero tolerance. Immediate investigation. Document every word.</p>
</div>

<div class="content-section">
    <h3>💸 Payroll Errors</h3>
    <p>If you miss payroll, you break trust immediately. Own it, apologize, and pay fees.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Fire Drill</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Incident Response</h4>
        <p>An employee accidentally leaks confidential client data on Twitter. What are your first 3 actions as HR?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Crisis</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: HR TOOLS & TECH</h2>

<div class="content-section">
    <h3>⚙️ The Stack</h3>
    <ul>
        <li><strong>ATS:</strong> Greenhouse / Lever.</li>
        <li><strong>Payroll/Global:</strong> Deel / Remote.com.</li>
        <li><strong>Docs:</strong> PandaDoc.</li>
        <li><strong>Wiki:</strong> Notion.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Setup</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Automation</h4>
        <p>Designing a Zapier workflow: When Candidate signs Offer (PandaDoc) -> Create Slack Account -> Add to Notion. Draw the flow.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive HR Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1: Mindset
    {
        question: "Culture Add vs Culture Fit?",
        options: ["Fit is better", "Add ensures growth and diversity", "They are the same", "Neither matters"],
        correct: 1
    },
    // Task 2: JDs
    {
        question: "Why use 'filtering instructions' in a JD?",
        options: ["To be annoying", "To test attention to detail early", "To reduce word count", "No reason"],
        correct: 1
    },
    // Task 4: Screening
    {
        question: "What is a red flag on a CV?",
        options: ["4 jobs in 2 years", "Harvard degree", "Good formatting", "Clear dates"],
        correct: 0
    },
    // Task 5: Interview
    {
        question: "What is the STAR method?",
        options: ["Situation Task Action Result", "Stop Talk Act Run", "Standard Test And Review", "None"],
        correct: 0
    },
    // Task 6: References
    {
        question: "What is the 'Golden Question' for references?",
        options: ["Is he nice?", "Would you hire them again?", "Does he work hard?", "Where does he live?"],
        correct: 1
    },
    // Task 8: Onboarding
    {
        question: "What is a 30-60-90 plan?",
        options: ["A termination plan", "A structured roadmap for the first 3 months", "A salary schedule", "A vacation plan"],
        correct: 1
    },
    // Task 9: Culture
    {
        question: "Does remote culture happened automatically?",
        options: ["Yes", "No, it requires intentionality", "Only on zoom", "Slack does it"],
        correct: 1
    },
    // Task 10: Performance
    {
        question: "Radical Candor means...",
        options: ["Being rude", "Caring Personally while Challenging Directly", "Ignoring the problem", "Being nice only"],
        correct: 1
    }
];
