// Operations & Routine Training Data - COMPANY SOP ALIGNED
// Digital Heroes Certification Program
// 18 Tasks, Deep Concept Training, SOP-Specific Quizzes

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "Ops Mindset",
        description: "The Machine Behind Everything",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Consistency > Intensity",
            "🛡️ Concept: If it's not written down, it doesn't exist",
            "📖 Read: Daily SOP — Overview & Culture sections"
        ]
    },
    {
        id: 3,
        title: "Daily Routine",
        description: "The Non-Negotiable Rhythm",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📖 Read: Daily SOP — Section 2 (Your Daily Routine)",
            "⏰ Know: Work hours, SLA response times, check-in rules",
            "📋 Know: Morning checklist, EOD report format"
        ]
    },
    {
        id: 4,
        title: "Communication Rules",
        description: "Discord, Response SLAs & Overcommunication",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📖 Read: Daily SOP — Section 3 (Communication Rules)",
            "💬 Know: Response times by sender type",
            "📱 Know: Discord notification requirements"
        ]
    },
    {
        id: 5,
        title: "EOD Reporting",
        description: "Talk in Numbers, Not Stories",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📖 Read: Daily SOP — Section 7 (Daily Reporting)",
            "📊 Know: EOD format, specificity requirements",
            "⚠️ Know: Consequences of missing EOD"
        ]
    },
    {
        id: 6,
        title: "SOP Mastery",
        description: "Living Documents That Run the Company",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📖 Read: Daily SOP — Section 4 (How to Use SOPs)",
            "📂 Know: Which SOPs apply to which roles",
            "🔄 Know: When and how SOPs get updated"
        ]
    },
    {
        id: 7,
        title: "Time Management",
        description: "Deep Work, 80/20, and Prioritization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📖 Read: Daily SOP — Section 5 (Time Management)",
            "🎯 Know: Deep Work blocks schedule",
            "⚡ Know: 80/20 rule and the 'Eat the Frog' method"
        ]
    },
    {
        id: 8,
        title: "Tools & Systems",
        description: "Discord, ClickUp, Loom, Google Drive",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📖 Read: Daily SOP — Section 6 (Tools & Apps)",
            "🛠️ Know: Required tools and their purposes",
            "📂 Know: File naming conventions"
        ]
    },
    {
        id: 9,
        title: "Leave & Attendance",
        description: "Start Time, Absences & The Rules",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "📖 Read: Daily SOP — Leave Request Protocol",
            "⏰ Know: Start time posting deadline",
            "🚫 Know: Half-day policy and absence rules"
        ]
    },
    {
        id: 10,
        title: "Security & Passwords",
        description: "Protecting Client Data",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🔐 Rule: Never share passwords via chat",
            "🔐 Rule: Unique passwords + 2FA everywhere",
            "🔐 Rule: Use password manager only"
        ]
    },
    {
        id: 11,
        title: "Escalation & Problem Solving",
        description: "When Things Go Wrong",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔥 Know: Chain of command for emergencies",
            "📞 Know: Who to contact and when",
            "🛡️ Know: How to communicate blockers"
        ]
    },
    {
        id: 12,
        title: "Feedback & Continuous Improvement",
        description: "Kaizen — Always Getting Better",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔄 Know: Weekly retrospective process",
            "🗣️ Know: Radical Candor framework",
            "📈 Know: How to suggest SOP improvements"
        ]
    },
    {
        id: 13,
        title: "Order Pipeline",
        description: "Intake, Assignment & Tracking",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📋 Order lifecycle from intake to delivery",
            "🔄 Assignment workflow and tracking systems",
            "🚧 Bottleneck identification and resolution"
        ]
    },
    {
        id: 14,
        title: "Resource Allocation",
        description: "Capacity Planning & Workload Balancing",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "👥 Matching skills to orders",
            "⚖️ Workload balancing across teams",
            "📈 Surge handling and contingency planning"
        ]
    },
    {
        id: 15,
        title: "Process Automation",
        description: "SOPs, Checklists & Reducing Manual Work",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📝 Documenting repeatable processes",
            "✅ Checklist design principles",
            "🤖 Automation tools and workflow triggers"
        ]
    },
    {
        id: 16,
        title: "Vendor & Tools",
        description: "Subscriptions, Licenses & Cost Optimization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🛠️ Third-party tool evaluation",
            "💳 License and subscription management",
            "💰 Cost optimization strategies"
        ]
    },
    {
        id: 17,
        title: "Career Growth",
        description: "Operations Career Path at DH",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🚀 Operations career ladder",
            "📖 Specialization tracks",
            "🎯 Building your ops portfolio"
        ]
    },
    {
        id: 18,
        title: "Final Certification",
        description: "Dashboard Setup & Comprehensive Exam",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "📊 Build an operations dashboard",
            "📝 Comprehensive exam covering all 17 tasks",
            "🎥 Submit video walkthrough of your dashboard"
        ]
    }
];

// ============ TASK 1: OPS MINDSET ============

const task1Content = `
<h2>📋 TASK 1: INTRO TO COMPANY — Who We Are & How We Operate</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes</h3>
    <p>You're now part of something bigger than just a job. We are building the <strong>world's best digital agency</strong>. This isn't a typical company—we have high standards because we're building something exceptional. <strong>DISCIPLINE IS YOUR GREATEST INVESTMENT.</strong></p>
    
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 Our Mission: Point A → Point B</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Milestone</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Revenue Target</th>
            </tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point A (Now)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">₹9.2 Crores</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2025 Goal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">₹15-20 Crores</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2026 Goal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">₹40 Crores</td></tr>
            <tr style="background: rgba(59, 130, 246, 0.2);"><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point B (2027)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>₹75 Crores</strong></td></tr>
        </table>
        <p style="margin: 0;">Every team member contributes to this journey, and every team member benefits through our <strong>equity-sharing model—even interns from Day 1</strong>.</p>
    </div>
</div>

<!-- MANIFESTO -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚡ The Digital Heroes Manifesto</h3>
    <ul>
        <li><strong>Talent is Irrelevant. Volume is Everything.</strong> — We don't care about your degree. We care about your OUTPUT. Need skills? Put in 100 hours learning. Need more? Put in 500.</li>
        <li><strong>Emotional Intelligence > IQ</strong> — How do you respond under pressure? That's your real test. People with high EQ build real relationships and lead.</li>
        <li><strong>Instant Reply = Respect</strong> — When you respond quickly, you're saying: "I respect you, I'm reliable, I care."</li>
        <li><strong>Protect Your Mindset</strong> — Stop thinking negative thoughts. Build character that helps your growth.</li>
        <li><strong>Clients are Opportunities</strong> — Approach every client like you're personally invested in their success.</li>
        <li><strong>The 80/20 Principle</strong> — 80% of your time: Productive work. 20%: Everything else.</li>
        <li><strong>Work = Highest Priority</strong> — Real satisfaction comes from BUILDING something that matters.</li>
    </ul>
</div>

<!-- CORE VALUES -->
<div class="content-section">
    <h3>⭐ Core Values: The Digital Heroes Way</h3>
    <ul>
        <li>⚡ <strong>Work Fast, Work Smart</strong> — Speed without quality is recklessness. Quality without speed is inefficiency.</li>
        <li>💬 <strong>Communicate Clearly</strong> — Ambiguity is the enemy. Ask clarifying questions. Confirm understanding. Never leave people guessing.</li>
        <li>💡 <strong>Share Ideas</strong> — Your insights matter. If you see a better way, speak up.</li>
        <li>🤝 <strong>Help Your Teammates</strong> — We are allies. We win together or we don't win at all.</li>
        <li>🌟 <strong>Be Useful Beyond Tasks</strong> — Your attitude, proactive problem-solving, and contribution to team culture matter.</li>
        <li>🚫 <strong>Zero Politics</strong> — Problems go to HR or Delhi Team only. We foster positivity.</li>
    </ul>
</div>

<!-- INTERCONNECTED CHAIN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔗 The Interconnected Chain</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries → <strong style="color: #60A5FA;">Development</strong> → delivers quality → <strong style="color: #F472B6;">Client Satisfaction</strong> → drives reviews → <strong style="color: #A78BFA;">Better Positioning</strong> → more enquiries → 🔄 Cycle continues
        </p>
    </div>
    <p style="color: #F87171; font-weight: 600;">⚠️ If any single link breaks, the entire system is affected. No department is bigger than the process. No one grows alone here.</p>
</div>

<!-- CRITICAL RULES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🚨 CRITICAL RULES — Zero Tolerance (No Warnings, No Second Chances)</h3>
    <ol>
        <li><strong>Ignoring Management Messages</strong> = <span style="color: #EF4444;">IMMEDIATE TERMINATION</span>. This is the #1 termination reason.</li>
        <li><strong>Data Breach</strong> — Sharing client info, source code, or passwords outside company = <span style="color: #EF4444;">Termination + Legal Action</span>.</li>
        <li><strong>Moonlighting</strong> — Working for competitors, taking freelance projects while employed = <span style="color: #EF4444;">Termination</span>.</li>
        <li><strong>Harassment</strong> — Verbal, sexual, or online bullying. One proven incident = <span style="color: #EF4444;">Out</span>.</li>
        <li><strong>Poor Communication (3 Strikes)</strong> — Rude to client / Lying / Late responses. 1st: ₹500 Penalty → 2nd: ₹1000 → 3rd: Termination.</li>
        <li><strong>Substance Abuse</strong> — Coming to work under influence = <span style="color: #EF4444;">Termination</span>.</li>
        <li><strong>Conspiracy & Negativity</strong> — Problems regarding any person must be shared ONLY with HR or Delhi Team. Conspiring = <span style="color: #EF4444;">Termination + Legal Action</span>.</li>
    </ol>
</div>

<!-- TEAM HIERARCHY -->
<div class="content-section">
    <h3>👥 Team Structure & Hierarchy</h3>
    <p><strong>Supreme Authority:</strong> The Delhi Team represents the highest level of command. Their decisions override ALL other instructions.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Level</th><th style="padding: 10px; text-align: left;">Role</th><th style="padding: 10px; text-align: left;">Key Persons</th></tr>
        <tr><td style="padding: 8px;">Level 1 (Top)</td><td style="padding: 8px;">CEO / Leadership</td><td style="padding: 8px;">Prasun Anand (CEO - Delhi Team)</td></tr>
        <tr><td style="padding: 8px;">Level 2</td><td style="padding: 8px;">Operations Head</td><td style="padding: 8px;">Anurag Singh (Delhi Team)</td></tr>
        <tr><td style="padding: 8px;">Level 2</td><td style="padding: 8px;">Managing Director (Lucknow)</td><td style="padding: 8px;">Shreyansh</td></tr>
        <tr><td style="padding: 8px;">Level 3</td><td style="padding: 8px;">General Manager</td><td style="padding: 8px;">Parth Srivastav (Delhi Team)</td></tr>
        <tr><td style="padding: 8px;">Level 4</td><td style="padding: 8px;">HR & Project Managers</td><td style="padding: 8px;">Stuti/Agrima (HR), Navya Singh (Shopify PM)</td></tr>
        <tr><td style="padding: 8px;">Level 5</td><td style="padding: 8px;">Team Leads / Senior Devs</td><td style="padding: 8px;">Mahira (Lead), Divyansh Singh</td></tr>
        <tr><td style="padding: 8px;">Level 6</td><td style="padding: 8px;">Execution Teams</td><td style="padding: 8px;">Developers, Designers, QA, Sales, CS</td></tr>
    </table>
</div>

<!-- HOURS & ATTENDANCE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">⏰ Working Hours & Attendance</h3>
    <ul>
        <li><strong>Lucknow Team:</strong> 9:00 AM – 6:00 PM (Morning Shift)</li>
        <li><strong>Delhi Team:</strong> Night Shift (Handling Foreign Clients)</li>
        <li><strong>Sunday:</strong> Off | <strong>Lunch:</strong> 1:00 PM – 2:00 PM</li>
        <li><strong>Fiverr/Sales Team Window:</strong> 9:00 AM – 9:00 PM (flexible shifts)</li>
    </ul>
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ The 9:15 Rule:</strong> Arrive after 9:15 AM = <strong>Half-day salary deduction</strong>. Late arrivals: 3x = Verbal Warning → 5x = Written Warning → 7+ = Termination Review.
    </div>
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">Unexplained Absence</strong> (not informing by 9:00 AM): 1st = Written Warning → 3rd = 3 Days Salary Deduction → 5th = Termination.
    </div>
</div>

<!-- LEAVE POLICY -->
<div class="content-section">
    <h3>🏖️ Leave Policy</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Type</th><th style="padding: 10px; text-align: left;">Days/Year</th><th style="padding: 10px; text-align: left;">Notes</th></tr>
        <tr><td style="padding: 8px;">Casual Leave (CL)</td><td style="padding: 8px;">12</td><td style="padding: 8px;">Personal use. Max 2/month.</td></tr>
        <tr><td style="padding: 8px;">Sick Leave (SL)</td><td style="padding: 8px;">6</td><td style="padding: 8px;">Medical use. Certificate for 2+ days.</td></tr>
        <tr><td style="padding: 8px;">Earned Leave (EL)</td><td style="padding: 8px;">15</td><td style="padding: 8px;">After 1 year only.</td></tr>
        <tr><td style="padding: 8px;">Holidays</td><td style="padding: 8px;">~10</td><td style="padding: 8px;">Standard National Holidays.</td></tr>
    </table>
    <p><strong>Restrictions:</strong></p>
    <ul>
        <li>❌ No leave in first 2 months (Probation) unless emergency.</li>
        <li>❌ No leave during month-end (25th–5th) billing cycle.</li>
        <li>❌ Max 2 CL per month (unless approved by Senior Management).</li>
    </ul>
    <p><strong>How to Apply:</strong> Post in <strong>#ask-hr</strong> or message Manager min <strong>3 days in advance</strong>. Include: Name, Dates, Reason, and who is covering your work.</p>
</div>

<!-- SALARY & GROWTH -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">💰 Salary, Growth & Compensation</h3>
    <ul>
        <li><strong>Payment Date:</strong> Before 10th of the following month.</li>
        <li><strong>Cycle:</strong> 1st to End of Month.</li>
        <li>🚨 <strong>Confidentiality:</strong> Discussing salary with colleagues = <span style="color: #EF4444;">Immediate Termination</span>.</li>
    </ul>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">KPI Score</th><th style="padding: 10px; text-align: left;">Outcome</th></tr>
        <tr><td style="padding: 8px;">90-100% (Exceptional)</td><td style="padding: 8px;">15-20% Increment + Bonus</td></tr>
        <tr><td style="padding: 8px;">75-89% (Exceeds)</td><td style="padding: 8px;">10-15% Increment</td></tr>
        <tr><td style="padding: 8px;">60-74% (Meets)</td><td style="padding: 8px;">5-10% Increment</td></tr>
        <tr><td style="padding: 8px;">&lt;60% (Needs Improvement)</td><td style="padding: 8px;">No Increment + PIP</td></tr>
    </table>
    <p><strong>Advance Salary:</strong> Available after 3 months. Max 50% of salary. Recovered in 2 installments. Genuine emergencies only.</p>
    <p><strong>Growth Formula:</strong> Employee Growth = Company Growth × (Will + Efforts). Income = Happy Clients × Skill × Speed.</p>
</div>

<!-- COMMUNICATION RULES -->
<div class="content-section">
    <h3>💬 Communication Protocol</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Who</th><th style="padding: 10px; text-align: left;">Response Time</th></tr>
        <tr><td style="padding: 8px;">Clients</td><td style="padding: 8px;">&lt; 2 Hours</td></tr>
        <tr><td style="padding: 8px;">Manager</td><td style="padding: 8px;">&lt; 1 Hour</td></tr>
        <tr><td style="padding: 8px;">Team</td><td style="padding: 8px;">&lt; 2 Hours</td></tr>
        <tr><td style="padding: 8px;">Emergency</td><td style="padding: 8px;">&lt; 15 Minutes</td></tr>
    </table>
    <p><strong>Channels:</strong> Official: Discord/Email. Team: WhatsApp. Clients: Fiverr/Platform. Personal issues → DM. Work questions → Group chat (so everyone learns).</p>
    <p><strong>Specificity Rule:</strong> Always provide ETAs. Never say "I'll be late" — say "I will be 15 mins late. ETA 9:45 AM." Never say "Okay" — say "Got it. Task A: ETA 2 PM. Task B: ETA 5 PM."</p>
</div>

<!-- WFH POLICY -->
<div class="content-section">
    <h3>🏠 Work From Home Policy</h3>
    <p><strong>WFH is a PRIVILEGE, Not a Right.</strong></p>
    <ul>
        <li>Max 2 days/week. Non-consecutive.</li>
        <li>Manager can revoke instantly if productivity drops.</li>
        <li>Requirements: Probation completed (3 months), High speed internet (10+ Mbps), Respond within 30 mins, Camera ON for all meetings.</li>
    </ul>
</div>

<!-- CULTURE & PERKS -->
<div class="content-section">
    <h3>🎉 Culture, Perks & Exit Process</h3>
    <ul>
        <li>🏔️ <strong>Offsite Trips</strong> — Twice a year, company-paid (travel, stay, food).</li>
        <li>🎬 <strong>Outing Budget</strong> — ₹500-1000/month per person for team activities.</li>
        <li>🎂 <strong>Birthdays</strong> — Half-day, Cake, and Celebration.</li>
        <li>🤝 <strong>Buddy System</strong> — New joiners get a Buddy for 2 weeks.</li>
        <li>📚 <strong>Growth</strong> — 4 hrs/week learning hours. Course reimbursement up to ₹5k/yr.</li>
    </ul>
    <h4>Exit Process</h4>
    <ul>
        <li><strong>Notice Period:</strong> Probation = 7 Days. Confirmed = 30 Days.</li>
        <li><strong>Process:</strong> Written resignation → Handover → Exit Interview → Return Assets → F&F within 30 days.</li>
        <li><strong>Email:</strong> hr@digitalheroes.co.in</li>
        <li>Experience Certificate: Provided for good standing exits only.</li>
    </ul>
</div>

<!-- SOP OBSESSION -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📑 The SOP Obsession</h3>
    <p><strong>What is an SOP?</strong> Standard Operating Procedure. Here, it's not just a guideline—it is the <strong>Law</strong>. It is the best known way to do a task perfectly.</p>
    <ul>
        <li><strong>Why use it?</strong> It removes guessing. It guarantees speed, quality, and consistency. It protects you from mistakes.</li>
        <li><strong>Your Duty:</strong> You MUST follow your Role's SOP + the Daily SOP every day.</li>
        <li><strong>Evolve It:</strong> SOPs are not static. Found a better way? Suggest an improvement.</li>
    </ul>
</div>

<!-- KEY FAQS -->
<div class="content-section">
    <h3>❓ Key Employee FAQs</h3>
    <ul>
        <li><strong>Is training period paid?</strong> No. Training Completion Certificate provided after finishing.</li>
        <li><strong>Is EOD report mandatory?</strong> Yes. Submit EOD + time tracking on Discord daily. Failure = marked absent.</li>
        <li><strong>Can I take freelance projects?</strong> No. Conflict of interest.</li>
        <li><strong>Is confidentiality mandatory?</strong> Yes. Client data, strategies, internal info. Breach = termination.</li>
        <li><strong>Is Shopify knowledge mandatory?</strong> Yes. Shopify-exclusive agency. Compulsory for all.</li>
        <li><strong>Is time tracking compulsory?</strong> Yes. Daily on Discord with EOD.</li>
        <li><strong>Developer incentives?</strong> Per-client basis after successful delivery + 5-star rating.</li>
        <li><strong>Sales incentives?</strong> Commission-based structure as per the Incentive & Penalty Framework. Refer to the latest incentive-penalty page for current rates and tiers.</li>
        <li><strong>LOR (Letter of Recommendation)?</strong> Yes, after internship completion. Only for top 10% performers.</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 1: OPERATIONS MINDSET — The Machine Behind Everything</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes — You Are Part of Something Bigger</h3>
    <p>Before we dive into daily operations, understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0; color: white;">
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

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    <div style="background: rgba(0,0,0,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p style="margin: 0;">
            <strong style="color: #8B5CF6; font-size: 1.2em;">⭐ YOU (Every Team Member)</strong> → <strong>THE RHYTHM — show up, check in, deliver, repeat</strong><br>
            ↓<br><strong style="color: #FBBF24;">Sales</strong> → brings in clients<br>
            ↓<br><strong style="color: #F472B6;">Design & Development</strong> → delivers quality work<br>
            ↓<br><strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br><strong style="color: #60A5FA;">CS Team</strong> → protects satisfaction<br>
            ↓<br><strong style="color: #A78BFA;">5-Star Reviews</strong> → boost algorithm positioning<br>
            ↓<br><strong style="color: #FBBF24;">More Organic Enquiries</strong> → the cycle amplifies
        </p>
    </div>
    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 15px; margin: 15px 0;">
        <strong style="color: #8B5CF6;">⚙️ Your Critical Role as an Operator:</strong>
        <p style="margin: 10px 0 0 0;">This Daily SOP is the <strong>heartbeat</strong> of Digital Heroes. It doesn't matter if you're in Sales, Development, Design, HR, or Finance — <strong>everyone follows these daily rituals</strong>. Morning check-ins, task updates, end-of-day reports — they're not bureaucracy, they're the rhythm that keeps the entire chain synchronized.</p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 Why Operations Thinking Matters More Than Raw Talent</h3>
    <p>Most people think success comes from talent or motivation. At Digital Heroes, we've learned something different: <strong>Systems beat motivation every single time.</strong></p>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">🔥 THE TRUTH:</strong>
        <p>Motivation gets you started on Monday. By Thursday, it's gone. But if you have a <strong>system</strong> — a daily routine, a checklist, an SOP — you perform at the same level whether you're feeling inspired or exhausted. That's what separates professionals from amateurs.</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.95em;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Aspect</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">🔥 Firefighter (Bad)</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">⚙️ Operator (Good)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Morning</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Opens Discord, sees 50 messages, panics</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Follows morning checklist, connects with manager, sets 3 priorities</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">During Day</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reacts to whatever comes in, multitasks</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Deep Work blocks, batches communication</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">End of Day</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"I was busy all day" but nothing to show</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sends specific EOD: "Added 15 products, customized 3 pages, 80% complete"</td></tr>
            <tr><td style="padding: 10px;">Outcome</td><td style="padding: 10px;">Burnout, missed deadlines, unclear progress</td><td style="padding: 10px;">Sustainable output, clear accountability, career growth</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The Intern Who Outperformed a 3-Year Employee</h3>
    <p><strong>What happened:</strong> A new intern followed the Daily SOP religiously — morning check-in at 10:00 AM sharp, 3 priorities set, deep work blocks protected, EOD report with exact numbers every single day. A 3-year employee who "knew better" skipped check-ins, sent vague updates like "worked on projects," and responded to messages whenever they felt like it.</p>
    <p><strong>After 30 days:</strong> The intern had completed 47 documented tasks with clear metrics. The senior employee had completed "some stuff" but couldn't show specifics. The intern got promoted. The senior employee got a performance review.</p>
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 WHY this matters:</strong> The system doesn't care about your experience. It rewards <strong>consistency and documentation</strong>. The person who follows the SOP daily will ALWAYS outperform the person who relies on memory and motivation. This is why every rule in this training exists — not to control you, but to make you unstoppable.
    </div>
</div>

<div class="content-section">
    <h3>🎯 The 3 Pillars of Operations Excellence</h3>
    <ol>
        <li><strong>Consistency Over Intensity:</strong> Working 12 hours once then disappearing for 2 days is WORSE than working 8 focused hours every single day. Our SOP is designed around sustainable daily rhythm — not heroic sprints.</li>
        <li><strong>If It's Not Written Down, It Didn't Happen:</strong> This is why we require EOD reports with numbers, task tracker updates, and Discord message acknowledgments. Verbal commitments fade. Written documentation is proof of work.</li>
        <li><strong>Automate, Delegate, Eliminate:</strong> Before doing ANY recurring task manually, ask: Can I automate this? Can someone else do this better? Does this even need to be done? This mindset is how we scale from ₹9.2 Cr to ₹75 Cr.</li>
    </ol>
</div>
`;

// ============ TASK 2: DAILY ROUTINE ============
const task3Content = `
<h2>📚 TASK 2: DAILY ROUTINE — The Non-Negotiable Rhythm</h2>

<div class="content-section">
    <h3>⏰ Work Hours: 10:00 AM - 7:00 PM IST</h3>
    <p>This is your standard work window. You must be <strong>online and responsive</strong> during these hours. Here's the critical part most people miss:</p>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">🚨 CRITICAL RULE: Failure to respond during work hours = Marked ABSENT for the day</strong>
        <p style="margin-top: 10px;">This isn't about surveillance. It's about <strong>accountability</strong>. When a client has an emergency at 2 PM and the developer assigned to them hasn't responded in 3 hours, that client loses money. That client leaves. That's revenue lost for EVERYONE in the chain — including you, because of the equity-sharing model.</p>
    </div>
</div>

<div class="content-section">
    <h3>⚡ Response Time SLA — Who Gets Priority</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Message From</th>
                <th style="padding: 12px; text-align: left;">Required Response Time</th>
                <th style="padding: 12px; text-align: left;">WHY This Matters</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Management/CEO</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #EF4444;">IMMEDIATE — 5 minutes</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Management messages are usually urgent decisions affecting multiple projects or clients. A 5-minute delay multiplied across the team becomes hours of lost productivity.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Team Lead</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #F59E0B;">Within 10 minutes</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Your lead is coordinating work across multiple people. If they're waiting on you, the entire team's flow stops.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Colleagues</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Within 30 minutes</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Your peers may be blocked on your input. 30 minutes gives you time to finish a deep work chunk without leaving them stuck all day.</td></tr>
            <tr><td style="padding: 12px;"><strong>Clients (via platform)</strong></td><td style="padding: 12px;">Within 1 hour</td><td style="padding: 12px;">Platform algorithms reward fast response times. Slow responses hurt our ranking AND the client's trust. Every hour of delay reduces the chance of a positive review by 15%.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🌅 Morning Startup — First 15 Minutes (Non-Negotiable)</h3>
    <p><strong>WHY a structured morning matters:</strong> Research shows that the first 15 minutes of your workday determine the productivity of the next 8 hours. Without a checklist, most people waste 45 minutes "getting started." Our checklist eliminates that waste.</p>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px;">
        <strong>✅ Start of Day Checklist:</strong>
        <ol>
            <li>Set Discord status to 🟢 <strong>Online</strong></li>
            <li>Check Discord for overnight messages — respond or acknowledge</li>
            <li><strong style="color: #EF4444;">🔴 CONNECT WITH YOUR MANAGER</strong> — Brief check-in call or message to get daily priorities</li>
            <li>Review your tasks in project management tool (Notion/ClickUp)</li>
            <li>Check email for client or team updates</li>
            <li>Read any SOPs relevant to today's work</li>
            <li><strong>Plan your top 3 priorities for the day</strong> — no more than 3</li>
        </ol>
    </div>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY only 3 priorities?</strong> Because trying to do 10 things means finishing 0 things well. Three priorities force you to identify what actually moves the needle. If you finish all 3 and have time left, pull more work. But those 3 MUST get done.
    </div>
</div>

<div class="content-section">
    <h3>📅 The Daily Schedule — Deep Work Blocks</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;">Time</th>
                <th style="padding: 12px;">Activity</th>
                <th style="padding: 12px;">WHY This Structure</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">10:00 AM</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Go Online + Morning Check-in</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Establish presence, get aligned with team</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>10:15 AM - 1:00 PM</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Deep Work Block 1</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Your brain is freshest here. Do your HARDEST task first ("Eat the Frog"). No meetings in this block.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">1:00 - 2:00 PM</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Lunch Break</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Set status to 🍽️ Lunch. Actually rest — don't work through lunch.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>2:00 - 4:00 PM</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Deep Work Block 2</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Continue priority tasks. Post-lunch energy dip is real — structured deep work pushes through it.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">4:00 - 5:00 PM</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Meetings / Collaboration</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client calls, team syncs. Batching meetings here protects deep work blocks.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>5:00 - 6:30 PM</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Deep Work Block 3</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Finish remaining tasks. This is your "completion" block.</td></tr>
            <tr><td style="padding: 12px;">6:30 - 7:00 PM</td><td style="padding: 12px;">Wrap Up + EOD Report</td><td style="padding: 12px;">Update tasks, send EOD. Never leave without documenting what you did.</td></tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #F59E0B; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY "Eat the Frog" in Block 1?</strong> Your willpower and cognitive ability are highest in the first 2-3 hours of work. If you waste that time on emails and easy tasks, your hardest work gets pushed to when your brain is tired — and it either gets done poorly or not at all. The frog is the task you're most likely to procrastinate on. Do it first, and the rest of the day feels easy.
    </div>
</div>

<div class="content-section">
    <h3>🌙 End of Day — Last 15 Minutes</h3>
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-left: 4px solid #6366F1; padding: 20px;">
        <strong>✅ End of Day Checklist:</strong>
        <ol>
            <li>Update ALL task statuses in project management tool</li>
            <li>Send EOD report to your manager/channel (see Task 4 for exact format)</li>
            <li>Reply to ANY pending Discord messages</li>
            <li>Note any blockers for tomorrow</li>
            <li>Set Discord status to 🔴 <strong>Offline</strong></li>
        </ol>
    </div>
    <p style="margin-top: 15px;"><strong>WHY this matters:</strong> Tomorrow's you starts with zero context about what today's you did. The EOD report is a gift to your future self — and to your manager who needs to coordinate the team without chasing every person for updates.</p>
</div>
`;

// ============ TASK 3: COMMUNICATION RULES ============
const task4Content = `
<h2>📚 TASK 3: COMMUNICATION RULES — Discord, SLAs & Overcommunication</h2>

<div class="content-section">
    <h3>💬 Discord is Our HQ — Being Active on Discord = Being at Work</h3>
    <p>This is not optional. Discord is where work happens at Digital Heroes. If you're not on Discord during work hours, you are effectively <strong>not at work</strong>.</p>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">📱 Discord Notification = MANDATORY</strong>
        <ul>
            <li>Turn ON Discord notifications on <strong>ALL devices</strong> during work hours</li>
            <li>Install Discord on your PC/laptop for instant access</li>
            <li>If communicated via phone call, <strong>still respond in Discord group</strong> for documentation</li>
            <li>Every message mentioning you requires a response — <strong>no exceptions</strong></li>
        </ul>
    </div>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY phone calls still need Discord documentation:</strong> Phone calls disappear the moment they end. If a decision was made on a call but not recorded in Discord, there's no proof it happened. When a client dispute arises 3 weeks later, "we discussed this on a call" is worth nothing. "Here's the Discord message from March 5th" is proof. <strong>Written records protect you AND the company.</strong>
    </div>
</div>

<div class="content-section">
    <h3>⚡ Response Priority Guide</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;">Message Type</th>
                <th style="padding: 12px;">Response Time</th>
                <th style="padding: 12px;">WHY</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client emergency / Site down</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #EF4444;">Immediately (15 min)</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Every minute of downtime = revenue lost for the client. They will leave us if this isn't treated like a fire.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Manager / Team Lead DM</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #F59E0B;">Within 30 minutes</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">They're coordinating multiple people. Your delay becomes everyone's delay.</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team channel mentions</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Within 1 hour</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Someone tagged you specifically — they need YOUR input.</td></tr>
            <tr><td style="padding: 12px;">General channel messages</td><td style="padding: 12px;">Within 2 hours</td><td style="padding: 12px;">Stay aware of company announcements and team discussions.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🚨 What Happens If You Don't Respond</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>First occurrence</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Friendly reminder from manager</td></tr>
        <tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Repeated</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logged as communication issue on your record</td></tr>
        <tr style="background: rgba(239, 68, 68, 0.3);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Chronic</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance review impact — affects raises, promotions, equity</td></tr>
    </table>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 WHY this escalation path exists:</strong> We don't fire people for one missed message. But a pattern of unresponsiveness means the chain is breaking at your link. If a client emergency sits for 3 hours because you didn't have notifications on, that could be a ₹2 Lakh client lost. The escalation path gives you chances to correct — but the company can't keep absorbing the cost of broken communication.
    </div>
</div>

<div class="content-section">
    <h3>💬 The Overcommunication Principle</h3>
    <p><strong>Fast communication is a form of RESPECT.</strong></p>
    <ul>
        <li>Never ignore anyone's messages — clients, teammates, superiors, or juniors</li>
        <li>Provide updates even when not asked — "Hey, just a heads up, the project is 60% done"</li>
        <li>If unable to complete a task, respond with reason + alternative timeline</li>
        <li><strong>Acceptable acknowledgments:</strong> "Okay", "Yes sir/ma'am", "Working on it", "Understood", "Will do"</li>
    </ul>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY overcommunication > undercommunication:</strong> When you go silent, people assume the worst. Your manager thinks you're stuck. Your colleague thinks you forgot. Your client thinks you don't care. A 5-second "Working on it, will update by 3 PM" eliminates all that anxiety. <strong>Silence is the most expensive form of communication.</strong>
    </div>
</div>

<div class="content-section">
    <h3>✅ Communication Best Practices</h3>
    <ul>
        <li><strong>Acknowledge with a reaction</strong> if you need time to respond properly (👍 or ✅)</li>
        <li><strong>Use threads</strong> to keep channels organized — don't reply in main channel for long discussions</li>
        <li><strong>Tag the right people</strong> — don't spam @everyone unless it's truly urgent</li>
        <li><strong>Keep messages clear and concise</strong> — get to the point in the first sentence</li>
        <li><strong>Use voice channels</strong> for complex discussions — faster than typing paragraphs</li>
    </ul>
</div>
`;

// ============ TASK 4: EOD REPORTING ============
const task5Content = `
<h2>📚 TASK 4: EOD REPORTING — Talk in Numbers, Not Stories</h2>

<div class="content-section">
    <h3>📋 The EOD Report — MANDATORY by 9:30 PM</h3>
    <p>Every single working day, you send an End of Day report. No exceptions. No "I forgot." No "I'll send it tomorrow."</p>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ RULE: No EOD update = Assumed you didn't work that day</strong>
        <p style="margin-top: 10px;">This sounds harsh, but here's the reasoning: If you can't take 5 minutes to document what you did in 8 hours, either you didn't do anything worth reporting, or you don't respect the team's need for visibility. Neither is acceptable.</p>
    </div>
</div>

<div class="content-section">
    <h3>📝 Required EOD Format</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 25px; border-radius: 12px; font-family: monospace; margin: 15px 0; line-height: 1.8;">
        <p style="color: #10B981; margin-bottom: 10px;"><strong>REQUIRED FORMAT:</strong></p>
        <p><strong>[Full Name]</strong></p>
        <p>Today I worked on:</p>
        <p>1. [Client Name] - [Specific task] - [Number of items]</p>
        <p>2. [Second task if applicable]</p>
        <p><br>Store Link: [Full URL]</p>
        <p>Password: [Store password]</p>
        <p>Completion: [X]% | Blockers: [List or 'None']</p>
    </div>
</div>

<div class="content-section">
    <h3>❌ BAD vs ✅ GOOD EOD Reports</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;">❌ VAGUE (Unacceptable)</th>
                <th style="padding: 12px;">✅ SPECIFIC (Required)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Worked on client project"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"StyleHaven - Added 15 products with descriptions and images"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Customized pages"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Customized 3 pages (Home, About, Contact) - 70% complete"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Fixed some bugs"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Fixed 4 bugs: cart calculation, mobile menu, image loading, checkout redirect"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Almost done"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"85% complete - ETA tomorrow 3 PM. Remaining: payment gateway setup + testing"</td></tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY numbers matter more than words:</strong>
        <ul>
            <li><strong>"I worked hard today"</strong> tells your manager nothing actionable</li>
            <li><strong>"Added 15 products, 3 pages, 85% complete, ETA 3 PM tomorrow"</strong> tells them exactly where the project stands, whether the timeline is realistic, and if they need to reallocate resources</li>
            <li>Numbers also protect YOU — when performance reviews come, you have documented proof of your output instead of vague memories</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Specificity Requirements Checklist</h3>
    <ul>
        <li>✅ Include <strong>exact number</strong> of products added/edited</li>
        <li>✅ Include <strong>exact number</strong> of pages customized</li>
        <li>✅ Include <strong>percentage completion</strong> of assigned project</li>
        <li>✅ Include <strong>ETA</strong> for remaining work</li>
        <li>✅ Include <strong>store link</strong> and <strong>password</strong> if applicable</li>
        <li>✅ Update task tracker spreadsheet <strong>same day</strong></li>
        <li>✅ List blockers specifically — "Waiting on client approval for homepage design" not just "blocked"</li>
    </ul>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Pro Tip:</strong> Talk in NUMBERS most of the time — dates, quantities, percentages. "I'll finish by Friday" is vague. "I'll complete the remaining 8 products and checkout page by Friday 3 PM" is professional.
    </div>
</div>
`;

// ============ TASK 5: SOP MASTERY ============
const task6Content = `
<h2>📚 TASK 5: SOP MASTERY — Living Documents That Run the Company</h2>

<div class="content-section">
    <h3>📖 What SOPs Are and Why They Exist</h3>
    <p>SOPs (Standard Operating Procedures) are <strong>not bureaucracy</strong> — they are the accumulated intelligence of every mistake, success, and optimization the company has ever learned. Following an SOP means you're standing on the shoulders of everyone who came before you.</p>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong>📚 Why SOPs Matter at Digital Heroes:</strong>
        <ul>
            <li><strong>Consistency:</strong> Everyone follows the same standards, ensuring quality across all work</li>
            <li><strong>Speed:</strong> No guessing — you know exactly what to do and how to do it</li>
            <li><strong>Training:</strong> New team members can onboard faster and work independently</li>
            <li><strong>Excellence:</strong> SOPs capture our best practices — following them means doing your best work</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>👤 Your SOP Responsibilities — The 2-SOP Minimum</h3>
    <p>Every team member at Digital Heroes follows <strong>at least 2 SOPs</strong>:</p>
    <ol>
        <li><strong>Daily SOP</strong> — Work hours, communication, reporting (applies to EVERYONE)</li>
        <li><strong>Your Role-Specific SOP</strong> — Specific processes for your job function</li>
    </ol>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;">Role</th>
                <th style="padding: 12px;">SOPs to Follow</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">💰 Sales Executive</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + Sales SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">📋 Project Manager</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + PM SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">💻 Shopify Developer</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + Developer SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">🎨 UI/UX Designer</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + Designer SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">🤝 Client Success</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + CS SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">👥 HR & People Ops</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + HR SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">✍️ Content Writer</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + Content SOP</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">📱 Social Media Manager</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily SOP + Social Media SOP</td></tr>
            <tr><td style="padding: 10px;">💰 Finance & Accounts</td><td style="padding: 10px;">Daily SOP + Finance SOP</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📅 When to Use Your SOPs</h3>
    <ul>
        <li><strong>Starting a new type of task:</strong> Check SOP first for best practices — don't guess</li>
        <li><strong>Unsure how to handle a situation:</strong> The SOP likely has the answer before you ask your manager</li>
        <li><strong>Training someone:</strong> Use the SOP as your training guide — don't teach from memory</li>
        <li><strong>Weekly refresh:</strong> Re-read relevant sections to stay sharp — you'll catch things you missed</li>
        <li><strong>After a mistake:</strong> Review SOP to prevent future issues and suggest updates if needed</li>
    </ul>

    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #F59E0B; padding: 15px; margin-top: 15px;">
        <strong>⚠️ SOPs Are Living Documents</strong>
        <p style="margin: 10px 0 0;">If you find a process that could be improved, or discover something missing from the SOP, <strong>tell your manager</strong>. We update SOPs regularly. The best SOPs are written by the people actually doing the work — that's you.</p>
    </div>
</div>
`;

// ============ TASK 6: TIME MANAGEMENT ============
const task7Content = `
<h2>📚 TASK 6: TIME MANAGEMENT — Deep Work, 80/20, and Prioritization</h2>

<div class="content-section">
    <h3>⏰ The 80/20 Rule — Your Secret Weapon</h3>
    <p>80% of your results come from 20% of your tasks. The problem? Most people spend their time on the 80% that barely matters.</p>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 20px;">
        <strong>🧠 HOW TO IDENTIFY YOUR 20%:</strong>
        <p>Ask yourself: <em>"If I could only complete ONE task today, which one would move the project forward the most?"</em> That's your frog. Eat it first.</p>
        <ul>
            <li>The 20% tasks are usually the <strong>hardest</strong> and most <strong>uncomfortable</strong></li>
            <li>The 80% tasks are usually the <strong>easiest</strong> and feel the most <strong>productive</strong> (but aren't)</li>
            <li>Checking email feels productive but rarely moves a project forward</li>
            <li>Building the checkout page is hard but directly completes the project</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Productivity Rules from the Daily SOP</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.3);">
                <th style="padding: 12px;">✅ DO THIS</th>
                <th style="padding: 12px;">❌ AVOID THIS</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Start with your hardest task ("Eat the Frog")</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Starting with emails and easy tasks</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Time-block deep work sessions (10:15-1, 2-4, 5-6:30)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Checking Discord/email constantly during deep work</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Take regular short breaks between blocks</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Skipping breaks (leads to burnout, not more output)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Set MAX 3 daily priorities</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Saying yes to everything and finishing nothing</td></tr>
            <tr><td style="padding: 10px;">Track your time on each task</td><td style="padding: 10px;">Working without a plan — reacting instead of executing</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🆘 If You're Falling Behind — The Escalation Protocol</h3>
    <p>Falling behind is normal. Hiding it is not. Here's the company protocol:</p>
    <ol>
        <li><strong>Don't panic</strong> — assess what's actually urgent vs. what can wait</li>
        <li><strong>Communicate early</strong> — tell your manager BEFORE the deadline is missed, not after</li>
        <li><strong>Ask for help</strong> — someone on the team might be able to assist or take something off your plate</li>
        <li><strong>Prioritize ruthlessly</strong> — what absolutely must be done today vs. what can shift to tomorrow?</li>
        <li><strong>Learn from it</strong> — why did this happen? How to prevent it? Update your estimates.</li>
    </ol>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY communicating BEFORE a deadline matters:</strong> When you tell your manager "I can't finish by 5 PM" at 2 PM, they have 3 hours to reassign, adjust client expectations, or help. When you tell them at 5:01 PM, the deadline is blown, the client is angry, and the damage is done. <strong>Early communication is damage prevention. Late communication is damage control.</strong>
    </div>
</div>
`;

// ============ TASK 7: TOOLS & SYSTEMS ============
const task8Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS — The Digital Heroes Toolkit</h2>

<div class="content-section">
    <h3>🛠️ Required Daily Tools</h3>
    <p>These are not suggestions — these tools must be installed, configured, and used every single working day.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;">Tool</th>
                <th style="padding: 12px;">Purpose</th>
                <th style="padding: 12px;">Daily Usage Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Discord</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team communication (HQ)</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Open all day, respond within 1 hour, notifications ON</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Notion / ClickUp</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Project management & tasks</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Update task statuses daily, check assignments</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Loom</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Video messages & tutorials</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use for explanations and progress updates</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Google Meet / Zoom</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Video calls</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client calls, team meetings, scheduled in 4-5 PM block</td></tr>
            <tr><td style="padding: 12px;"><strong>Google Drive</strong></td><td style="padding: 12px;">File storage & sharing</td><td style="padding: 12px;">Store ALL work files here — never on local desktop</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📂 File Naming Convention (MANDATORY)</h3>
    <p>Every file you create or save must follow this structure:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; font-family: monospace; margin: 15px 0;">
        <p><strong>Format:</strong> YYYY-MM-DD_ClientName_ProjectName_Type</p>
        <p><strong>Example:</strong> 2026-02-20_StyleHaven_Homepage_Mockup_v2</p>
        <p><strong>Folder:</strong> Client > Project > Assets</p>
    </div>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY strict naming matters:</strong> When 15 people share a Google Drive and someone names a file "final design REAL v3 (2).psd", nobody can find anything. Our naming convention means any team member can find any file in under 30 seconds. This saves the company hundreds of hours per year. "Untitled Folder 2" is professionally unacceptable.
    </div>
</div>

<div class="content-section">
    <h3>💡 Pro Setup: Browser Bookmarks</h3>
    <p>Create a bookmark folder called "Work" with one-click access to:</p>
    <ul>
        <li>Your project management tool (Notion/ClickUp)</li>
        <li>Discord web app</li>
        <li>SOP Hub (this site)</li>
        <li>Your email</li>
        <li>Time tracking tool</li>
    </ul>
    <p><strong>Open all of these every morning as your first action.</strong> This takes 5 seconds and ensures you don't forget any tool.</p>
</div>
`;

// ============ TASK 8: LEAVE & ATTENDANCE ============
const task9Content = `
<h2>📚 TASK 8: LEAVE & ATTENDANCE — Start Time, Absences & The Rules</h2>

<div class="content-section">
    <h3>📍 Daily Start Time Posting — BEFORE 11:00 AM</h3>
    <p>Every working day, you must post your start time in the designated Discord channel before 11:00 AM. No exceptions.</p>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ CRITICAL RULE: Post BEFORE 11:00 AM every day — no exceptions</strong>
        <ul>
            <li><strong>Format:</strong> "I'll start working from [TIME]" or "I started working at [TIME]"</li>
            <li>If starting late (after 12 PM), post by 10:55 AM with your expected start time</li>
            <li>Team Lead posts consolidated list of all working members by 11:30 AM</li>
        </ul>
    </div>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 15px; margin-top: 15px;">
        <strong>🧠 WHY pre-11 AM posting even if you start at 12:**</strong> Your team lead needs to know who's available TODAY to assign work and manage client expectations. If 3 people are out and the lead doesn't know until 2 PM, the entire day's planning is ruined. By 11 AM, the lead has a complete picture and can plan accordingly.
    </div>
</div>

<div class="content-section">
    <h3>🏖️ Leave Request Protocol</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.3);">
                <th style="padding: 12px;">Rule</th>
                <th style="padding: 12px;">Detail</th>
                <th style="padding: 12px;">WHY</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Deadline</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Post before 12:00 PM (noon) on leave day</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Allows team to redistribute your tasks before half the day is gone</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Format</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">"Leave - [DATE] - Reason: [SPECIFIC REASON]"</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Clear records for HR tracking and workload planning</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #EF4444;">Half-day Rule</strong></td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Half days DO NOT exist</strong> (except Saturday)</td><td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Half-days create confusion about availability. Either you're working or you're not. Saturday exception exists because it's already a shorter work day.</td></tr>
            <tr><td style="padding: 12px;"><strong>Emergency Check</strong></td><td style="padding: 12px;">Even on leave, check Discord once for urgent messages</td><td style="padding: 12px;">A 2-minute check could prevent a major client issue that affects the whole team</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📌 Scenario: Unexpected Situations</h3>
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px;">
        <strong>Scenario: Your internet goes down at 11 AM</strong>
        <ol>
            <li>Use your phone's mobile data to message your manager on Discord</li>
            <li>Post in the team channel: "Internet down, switching to mobile. Will be limited until resolved"</li>
            <li>If it can't be resolved within 1 hour, post a leave request</li>
            <li>If you come back online, update: "Back online at [TIME], resuming work"</li>
        </ol>
    </div>

    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #F59E0B; padding: 20px; margin-top: 15px;">
        <strong>Scenario: You're feeling sick but not sure if you need the full day off</strong>
        <ol>
            <li><strong>Take the full day off.</strong> Half-days don't exist.</li>
            <li>Post: "Leave - Feb 20, 2026 - Reason: Not feeling well"</li>
            <li>Don't try to push through — quality of work drops, and you may get worse</li>
            <li>Check Discord once in the afternoon for urgent messages</li>
        </ol>
    </div>
</div>
`;

// ============ TASK 9: SECURITY & PASSWORDS ============
const task10Content = `
<h2>📚 TASK 9: SECURITY & PASSWORDS — Protecting Client Data</h2>

<div class="content-section">
    <h3>🔐 The Cardinal Rules of Security</h3>
    <p>We handle client business data, store credentials, and sensitive financial information daily. A single security breach can destroy a client's business and Digital Heroes' reputation. These rules are <strong>non-negotiable</strong>.</p>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">🚨 ABSOLUTE RULES — Violation = Immediate Consequence</strong>
        <ol>
            <li><strong>NEVER share passwords via Discord, email, or any chat</strong> — use a password manager's secure sharing feature ONLY</li>
            <li><strong>NEVER reuse passwords</strong> — every account gets a unique, strong password</li>
            <li><strong>ALWAYS enable 2FA (Two-Factor Authentication)</strong> on every platform that supports it</li>
            <li><strong>NEVER store credentials in plain text</strong> — no sticky notes, no text files, no browser auto-fill on shared devices</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🧠 WHY These Rules Exist — Real Consequences</h3>
    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #F59E0B; padding: 20px;">
        <strong>Scenario: A team member shares a Shopify store admin password in a Discord DM</strong>
        <p style="margin-top: 10px;">What could happen:</p>
        <ul>
            <li>If that Discord account gets compromised, the hacker now has admin access to a LIVE e-commerce store</li>
            <li>They can steal customer payment data, change payment processing to their own account, or delete the entire store</li>
            <li>The client sues Digital Heroes for negligence. We lose the client AND our reputation.</li>
            <li><strong>Your one "convenient" shortcut just cost the company ₹20-50 Lakhs</strong></li>
        </ul>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;">❌ NEVER DO THIS</th>
                <th style="padding: 12px;">✅ DO THIS INSTEAD</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Send password in Discord message</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Share via LastPass/1Password secure share</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use same password for multiple accounts</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Generate unique 16+ character passwords</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Skip 2FA because it's "annoying"</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Enable 2FA on every single platform</td></tr>
            <tr><td style="padding: 10px;">Save passwords in a text file or sticky note</td><td style="padding: 10px;">Store everything in the password manager vault</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🔑 When You Receive Client Credentials</h3>
    <ol>
        <li>Immediately save them to the password manager (never anywhere else)</li>
        <li>Confirm receipt to the person who shared them</li>
        <li>If credentials were sent via insecure method (chat, email), change the password immediately and share the new one via secure method</li>
        <li>Enable 2FA on the account if not already set up</li>
        <li>Never share these credentials with anyone who wasn't explicitly authorized by the client or your manager</li>
    </ol>
</div>
`;

// ============ TASK 10: ESCALATION & PROBLEM SOLVING ============
const task11Content = `
<h2>📚 TASK 10: ESCALATION & PROBLEM SOLVING — When Things Go Wrong</h2>

<div class="content-section">
    <h3>🔥 The Reality: Things WILL Go Wrong</h3>
    <p>Client sites crash. Deadlines get missed. Team members get sick. The measure of a great team isn't avoiding problems — it's <strong>how fast and effectively they handle them</strong>.</p>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong>🧠 KEY PRINCIPLE: Problems get bigger with time, NOT smaller</strong>
        <p style="margin-top: 10px;">A bug reported in 5 minutes gets fixed in 30 minutes. A bug hidden for 3 days requires 3 hours of debugging, client damage control, and a trust repair conversation. <strong>Always escalate fast.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>📞 Chain of Command — Who Do You Contact?</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px;">Situation</th>
                <th style="padding: 12px;">First Contact</th>
                <th style="padding: 12px;">If No Response in 15 min</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client site is down</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team Lead + Developer on project</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Management/CEO directly</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Angry client escalation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team Lead</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">CS Manager or CEO</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">You're stuck on a task for 1+ hour</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team member with relevant expertise</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team Lead</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Missing a deadline</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Your Manager (BEFORE the deadline)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">N/A — this should always be communicated</td></tr>
            <tr><td style="padding: 10px;">Internet/power outage</td><td style="padding: 10px;">Team Lead via phone/mobile data</td><td style="padding: 10px;">Post in Discord when available</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📝 How to Communicate a Problem — The 3-Part Message</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 25px; border-radius: 12px; font-family: monospace; margin: 15px 0; line-height: 1.8;">
        <p><strong>1. WHAT happened</strong> — "The checkout page on StyleHaven is throwing a 500 error"</p>
        <p><strong>2. WHAT you tried</strong> — "I checked the Shopify logs and the error is in the payment gateway integration"</p>
        <p><strong>3. WHAT you need</strong> — "Need someone with Stripe API experience to help debug, or approval to contact Shopify support"</p>
    </div>

    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin-top: 15px;">
        <strong>❌ BAD escalation:</strong> "The site is broken" → Tells nobody anything useful<br>
        <strong>✅ GOOD escalation:</strong> "StyleHaven checkout 500 error → payment gateway integration → Need Stripe help or Shopify support approval" → Actionable immediately
    </div>
</div>

<div class="content-section">
    <h3>🛑 The 1-Hour Rule for Being Stuck</h3>
    <p>If you've been stuck on a problem for <strong>more than 1 hour</strong> without progress, you MUST ask for help. This is not weakness — it's efficiency.</p>
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 WHY 1 hour is the limit:</strong> After 1 hour of being stuck, the probability of solving it alone drops significantly. Every additional hour wasted is time that could have been spent on productive work while someone with more experience solves the issue in 15 minutes. <strong>Asking for help after 1 hour saves the company money. Struggling silently for 4 hours wastes it.</strong>
    </div>
</div>
`;

// ============ TASK 11: FEEDBACK & CONTINUOUS IMPROVEMENT ============
const task12Content = `
<h2>📚 TASK 11: FEEDBACK & CONTINUOUS IMPROVEMENT — Kaizen</h2>

<div class="content-section">
    <h3>🔄 The Weekly Retrospective</h3>
    <p>Every week, you should ask yourself two simple questions:</p>
    <ol>
        <li><strong>What went well this week?</strong> — Double down on what's working</li>
        <li><strong>What broke or could be better?</strong> — Fix ONE thing for next week</li>
    </ol>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong>🧠 WHY "fix ONE thing" instead of everything:</strong> Trying to fix 10 things means nothing changes. Fixing ONE thing means you make 52 improvements per year. That compounds. In 6 months, you're operating at a fundamentally different level than when you started.
    </div>
</div>

<div class="content-section">
    <h3>🗣️ Radical Candor — How We Give and Receive Feedback</h3>
    <p>At Digital Heroes, we practice <strong>Radical Candor</strong> — caring personally while challenging directly.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px;"></th>
                <th style="padding: 12px;">Challenges Directly</th>
                <th style="padding: 12px;">Doesn't Challenge</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cares Personally</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(16, 185, 129, 0.15);"><strong>✅ Radical Candor</strong><br>"I noticed your EOD reports have been vague lately. Let me show you what a great one looks like."</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(245, 158, 11, 0.15);"><strong>⚠️ Ruinous Empathy</strong><br>"It's fine, don't worry about it" (while quality drops)</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Doesn't Care</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(239, 68, 68, 0.15);"><strong>❌ Obnoxious Aggression</strong><br>"Your reports are terrible. Fix them."</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(239, 68, 68, 0.3);"><strong>❌ Manipulative Insincerity</strong><br>"Sure, looks great" (then complains to others)</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📈 Suggesting SOP Improvements</h3>
    <p>SOPs are living documents. If you find something that could be better, here's how to suggest changes:</p>
    <ol>
        <li><strong>Identify the specific section</strong> — "In the Daily SOP, Section 2, Morning Checklist"</li>
        <li><strong>Describe the current gap</strong> — "It doesn't mention what to do if Discord is down"</li>
        <li><strong>Propose the improvement</strong> — "Add a note about using WhatsApp backup group"</li>
        <li><strong>Tell your manager</strong> — They'll evaluate and update the SOP if approved</li>
    </ol>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 WHY your SOP improvements matter:</strong> The people doing the work every day see problems that management might miss. When you suggest an improvement and it gets added, you've just made every future team member's life easier. You're building the system that runs the company. That's leadership, regardless of your title.
    </div>
</div>
`;

// ============ TASK 13: ORDER PIPELINE MANAGEMENT ============

const task13Content = `
<h2>📋 TASK 13: ORDER PIPELINE MANAGEMENT — Intake, Assignment & Tracking</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Why Order Pipeline Management Matters</h3>
    <p>At Digital Heroes, every order that comes through the marketplace is a promise to a client. The operations team is the engine that converts incoming orders into delivered projects. A broken pipeline means missed deadlines, frustrated clients, and lost revenue. <strong>Your job is to make the pipeline invisible — so smooth that nobody notices it working.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 The Order Lifecycle at DH</strong>
        <p>Every order follows this path:</p>
        <ol>
            <li><strong>Intake</strong> — Order arrives on the client platform. Requirements captured.</li>
            <li><strong>Qualification</strong> — Scope verified, complexity assessed, timeline estimated.</li>
            <li><strong>Assignment</strong> — Matched to the right team member based on skills and availability.</li>
            <li><strong>Kickoff</strong> — Team member confirms receipt, reviews brief, asks clarifying questions within 2 hours.</li>
            <li><strong>Execution</strong> — Daily progress tracked via EOD reports and task tracker updates.</li>
            <li><strong>Quality Check</strong> — Internal review before client delivery.</li>
            <li><strong>Delivery</strong> — Client receives final work. Revisions handled per scope.</li>
            <li><strong>Closure</strong> — Order marked complete. Post-delivery review logged.</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📥 Phase 1: Order Intake & Qualification</h3>
    <p>When a new order lands on the marketplace, the operations coordinator must capture <strong>all critical information</strong> within the first 30 minutes:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Information</th>
                <th style="padding: 12px; text-align: left;">Why It Matters</th>
                <th style="padding: 12px; text-align: left;">Where to Log</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client name & platform username</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Identifies repeat clients and priority accounts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ClickUp + Order Sheet</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Service type (design, dev, content, etc.)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Determines which team handles the order</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ClickUp task type</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery deadline</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drives priority and assignment decisions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ClickUp due date</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope & requirements (pages, features, word count)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Prevents scope creep and misquoted timelines</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order brief doc</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Budget / order value</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Affects resource allocation priority</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Finance sheet</td></tr>
        </tbody>
    </table>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong>⚠️ The 30-Minute Rule:</strong> If an order sits unprocessed for more than 30 minutes, it risks late delivery from the start. The client's deadline clock is already ticking the moment they place the order. Every minute of intake delay is a minute stolen from execution.
    </div>
</div>

<div class="content-section">
    <h3>🎯 Phase 2: Assignment & Kickoff</h3>
    <p>Assignment is where most pipelines break. The wrong person on the wrong order creates a cascade of delays, revisions, and client frustration.</p>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>✅ Assignment Checklist:</strong>
        <ul>
            <li><strong>Skill match</strong> — Does the team member have the specific skills this order requires?</li>
            <li><strong>Availability</strong> — Can they start within 2 hours? Check their current workload in ClickUp.</li>
            <li><strong>Track record</strong> — Have they delivered similar orders successfully before?</li>
            <li><strong>Deadline feasibility</strong> — Given their current load, can they deliver on time?</li>
            <li><strong>Confirmation</strong> — Team member must acknowledge the assignment within 30 minutes.</li>
        </ul>
    </div>

    <p><strong>The Kickoff Message Format:</strong> When assigning an order, send a structured message in the team channel:</p>
    <div class="highlight-box" style="padding: 15px; margin: 10px 0;">
        <code>
        NEW ORDER ASSIGNED<br>
        Client: [Name]<br>
        Service: [Type]<br>
        Deadline: [Date + Time]<br>
        Brief: [Link to doc]<br>
        Assigned to: @[TeamMember]<br>
        Priority: [High/Medium/Low]<br>
        Notes: [Any special requirements]
        </code>
    </div>
</div>

<div class="content-section">
    <h3>🔍 Phase 3: Tracking & Bottleneck Identification</h3>
    <p>An order in progress without daily tracking is an order headed for trouble. The operations coordinator must check every active order <strong>at least twice daily</strong>:</p>
    <ul>
        <li><strong>Morning check (10:30 AM)</strong> — Review all active orders. Flag any without updates from the previous day.</li>
        <li><strong>Afternoon check (3:00 PM)</strong> — Check progress against deadlines. Identify orders at risk of being late.</li>
    </ul>

    <div class="warning-box" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong>🚧 Common Bottlenecks & Solutions:</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: rgba(245, 158, 11, 0.2);"><th style="padding: 10px; text-align: left;">Bottleneck</th><th style="padding: 10px; text-align: left;">Root Cause</th><th style="padding: 10px; text-align: left;">Solution</th></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Order sits unassigned for 2+ hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">No one available or unclear ownership</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Escalate to Team Lead immediately</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Team member not acknowledging assignment</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Missed notification or overloaded</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DM + phone call after 30 min</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Waiting on client for requirements</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Unclear brief or missing assets</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Send structured requirements checklist</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Revision loop exceeding 3 rounds</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Scope creep or quality miss</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Escalate to Team Lead for scope review</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>📊 Pipeline Metrics That Matter</h3>
    <p>Operations managers track these KPIs daily:</p>
    <ul>
        <li><strong>Intake-to-Assignment Time</strong> — Target: under 30 minutes</li>
        <li><strong>Assignment-to-Kickoff Time</strong> — Target: under 2 hours</li>
        <li><strong>On-Time Delivery Rate</strong> — Target: 95%+</li>
        <li><strong>Revision Rate</strong> — Target: under 15% of orders need major revisions</li>
        <li><strong>Client Satisfaction Score</strong> — Target: 4.8+ average</li>
        <li><strong>Orders in Pipeline</strong> — Active count by stage (intake, execution, QC, delivery)</li>
    </ul>
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 KEY INSIGHT:</strong> If your on-time delivery rate drops below 90%, look at intake-to-assignment time first. Almost always, late deliveries start with slow assignments, not slow execution.
    </div>
</div>
`;

// ============ TASK 14: RESOURCE ALLOCATION & CAPACITY PLANNING ============

const task14Content = `
<h2>⚖️ TASK 14: RESOURCE ALLOCATION & CAPACITY PLANNING</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">👥 The Resource Allocation Challenge</h3>
    <p>Digital Heroes operates with a lean team delivering high-volume orders across multiple service lines. Resource allocation is the art of putting the <strong>right person on the right order at the right time</strong>. Get it wrong, and you get burned-out team members, missed deadlines, and unhappy clients. Get it right, and the agency runs like a machine.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🎯 The Three Pillars of Resource Allocation</strong>
        <ol>
            <li><strong>Skills Matching</strong> — Assign based on capability, not just availability</li>
            <li><strong>Workload Balancing</strong> — No one should be at 120% while someone else is at 40%</li>
            <li><strong>Capacity Forecasting</strong> — Predict demand before it arrives</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Skills-to-Order Matching Matrix</h3>
    <p>Every team member has a skill profile that defines what orders they can handle. Operations maintains a <strong>Skills Matrix</strong> — a living document that maps each person to their capabilities:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Skill Level</th>
                <th style="padding: 12px; text-align: left;">Definition</th>
                <th style="padding: 12px; text-align: left;">Can Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L1 — Junior</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can execute with guidance, needs review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple orders, product uploads, basic pages</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L2 — Mid</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can execute independently, minimal review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard builds, customizations, content creation</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L3 — Senior</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can handle complexity, mentors others</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex builds, migrations, custom development</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L4 — Lead</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Owns the domain, sets standards</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Architecture decisions, escalations, VIP clients</td></tr>
        </tbody>
    </table>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong>⚠️ The Cardinal Sin of Assignment:</strong> Never assign an L1 to a complex order just because they are available. A junior developer spending 3 days on something a senior could finish in 4 hours costs the company 2.5 days of lost productivity AND risks client dissatisfaction. Availability is important, but skill fit comes first.
    </div>
</div>

<div class="content-section">
    <h3>⚖️ Workload Balancing Framework</h3>
    <p>Each team member has a <strong>capacity score</strong> measured in hours per day available for order work (after meetings, admin, and breaks):</p>
    <ul>
        <li><strong>Full capacity:</strong> 5-6 productive hours/day</li>
        <li><strong>Healthy load:</strong> 70-85% capacity utilization</li>
        <li><strong>Overloaded:</strong> 90%+ capacity — risk of burnout and quality drops</li>
        <li><strong>Underloaded:</strong> Below 50% — opportunity to take on more or upskill</li>
    </ul>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>✅ Daily Capacity Check Process:</strong>
        <ol>
            <li>Open the team workload view in ClickUp every morning at 10:15 AM</li>
            <li>Check each team member's active order count and estimated hours remaining</li>
            <li>Flag anyone above 90% or below 50% utilization</li>
            <li>Redistribute upcoming orders to balance the load</li>
            <li>Post the daily capacity snapshot in the ops channel</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📈 Surge Handling & Contingency Planning</h3>
    <p>Order volume is not constant. Seasonal spikes, promotions, and marketplace algorithm changes can cause sudden surges. Operations must be prepared:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.3);">
                <th style="padding: 12px; text-align: left;">Surge Level</th>
                <th style="padding: 12px; text-align: left;">Indicator</th>
                <th style="padding: 12px; text-align: left;">Response Protocol</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Level 1 — Moderate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order volume 20-30% above normal</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Redistribute non-urgent work, extend non-critical deadlines internally</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Level 2 — High</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order volume 30-50% above normal</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Activate cross-trained team members, extend work hours with approval</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Level 3 — Critical</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order volume 50%+ above normal or key member absent</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Escalate to management, temporary contractor activation, negotiate deadlines with clients</td></tr>
        </tbody>
    </table>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 KEY INSIGHT:</strong> The best operations teams never feel surge pressure because they plan for it. Maintain a bench of cross-trained team members who can flex between service lines. If everyone can only do one thing, a single absence creates a crisis.
    </div>
</div>

<div class="content-section">
    <h3>🔄 Cross-Training Strategy</h3>
    <p>Every team member should be cross-trained in at least <strong>one adjacent skill</strong>. This creates redundancy and flexibility:</p>
    <ul>
        <li><strong>Developers</strong> should know basic design (wireframing, UI review)</li>
        <li><strong>Designers</strong> should know basic front-end (HTML/CSS, theme customization)</li>
        <li><strong>Content writers</strong> should know basic SEO setup and product upload workflows</li>
        <li><strong>CS reps</strong> should know basic project management to track deliverables</li>
    </ul>
    <p>Operations tracks cross-training progress quarterly. The goal: <strong>no single point of failure</strong> in any service line.</p>
</div>
`;

// ============ TASK 15: PROCESS AUTOMATION & SOPs ============

const task15Content = `
<h2>🤖 TASK 15: PROCESS AUTOMATION & SOPs — Reducing Manual Work</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">⚡ The Automation Mindset</h3>
    <p>Every time you do something manually more than three times, you should ask: <strong>"Can this be automated, templated, or eliminated?"</strong> Operations excellence means building systems that run themselves so you can focus on judgment calls that actually require a human brain.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #10B981;">🎯 The Automation Hierarchy</strong>
        <ol>
            <li><strong>Eliminate</strong> — Can we stop doing this entirely? (Best option)</li>
            <li><strong>Automate</strong> — Can a tool do this without human input?</li>
            <li><strong>Template</strong> — Can we pre-build 80% and only customize 20%?</li>
            <li><strong>Checklist</strong> — Can we at least ensure it's done the same way every time?</li>
            <li><strong>Manual</strong> — Only if none of the above apply (worst option)</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📝 SOP Documentation Standards</h3>
    <p>A well-written SOP is the foundation of process automation. Before you can automate anything, you must document exactly how it works today. Every DH SOP follows this structure:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Section</th>
                <th style="padding: 12px; text-align: left;">Purpose</th>
                <th style="padding: 12px; text-align: left;">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Title & Version</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Identifies the process and tracks changes</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Order Intake SOP v2.3 — Updated Feb 2026"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trigger</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What event starts this process?</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"New order received on marketplace"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Steps</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Numbered actions with expected outcomes</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"1. Open order → 2. Verify scope → 3. Log in ClickUp"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Decision Points</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">If/then logic for branching scenarios</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"If budget > 50K, escalate to Team Lead"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Output</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What the completed process produces</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"ClickUp task created, team member assigned"</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Owner</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Who is responsible for this process</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Operations Coordinator"</td></tr>
        </tbody>
    </table>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong>⚠️ The SOP Decay Problem:</strong> An SOP that hasn't been updated in 6 months is probably wrong. Processes evolve, tools change, team members rotate. Operations must audit every SOP quarterly and update anything that no longer matches reality. An outdated SOP is worse than no SOP — it teaches people the wrong process.
    </div>
</div>

<div class="content-section">
    <h3>✅ Checklist Design Principles</h3>
    <p>Checklists are the simplest and most powerful process tool. Surgeons use them. Pilots use them. Operations coordinators must use them.</p>
    <ul>
        <li><strong>Keep it under 10 items</strong> — More than 10 items and people start skipping. Split into sub-checklists if needed.</li>
        <li><strong>Use action verbs</strong> — "Verify client email" not "Client email". Each item is a specific action.</li>
        <li><strong>Include verification steps</strong> — "Confirm task appears in ClickUp" not just "Add to ClickUp".</li>
        <li><strong>Put critical items first</strong> — The most important checks go at the top when attention is highest.</li>
        <li><strong>Date-stamp every use</strong> — Track when checklists are completed for accountability.</li>
    </ul>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong>📋 Example: Order Handoff Checklist</strong>
        <ol>
            <li>☐ Verify all client requirements are documented in the brief</li>
            <li>☐ Confirm delivery deadline is set in ClickUp</li>
            <li>☐ Verify assigned team member has acknowledged the order</li>
            <li>☐ Confirm client credentials are in the password manager</li>
            <li>☐ Send kickoff message in team channel using the template</li>
            <li>☐ Set reminder for first progress check (24 hours from assignment)</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🤖 Automation Tools at DH</h3>
    <p>Digital Heroes uses several tools that support process automation:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Tool</th>
                <th style="padding: 12px; text-align: left;">Automation Use</th>
                <th style="padding: 12px; text-align: left;">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>ClickUp Automations</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task status triggers, auto-assignments</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When status = "Ready for QC" → assign to QC reviewer</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google Sheets + Apps Script</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order tracking, auto-calculations</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Auto-calculate team utilization from hours logged</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Discord Bots</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reminders, status updates</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily EOD reminder at 9:00 PM in team channel</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Loom</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Process documentation, training videos</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Record SOP walkthroughs for new hires</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Template Libraries</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standardized messages, briefs, reports</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pre-built client onboarding message template</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📊 Measuring Automation Impact</h3>
    <p>Every automation should be measured by the time it saves. Track these metrics:</p>
    <ul>
        <li><strong>Time saved per occurrence</strong> — How many minutes does the automation save each time it runs?</li>
        <li><strong>Frequency</strong> — How often does this process run per week?</li>
        <li><strong>Total weekly savings</strong> — Time saved x frequency = hours recovered per week</li>
        <li><strong>Error reduction</strong> — How many manual errors has the automation prevented?</li>
    </ul>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 KEY INSIGHT:</strong> A 5-minute automation that runs 20 times per week saves 100 minutes weekly. That is over 86 hours per year — more than two full work weeks. Small automations compound into massive time savings.
    </div>
</div>
`;

// ============ TASK 16: VENDOR & TOOL MANAGEMENT ============

const task16Content = `
<h2>🛠️ TASK 16: VENDOR & TOOL MANAGEMENT — Subscriptions, Licenses & Cost Optimization</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(234, 88, 12, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">💳 Why Vendor Management Matters</h3>
    <p>Digital Heroes uses dozens of third-party tools, subscriptions, and services to deliver client work. Without proper management, these costs spiral out of control — unused licenses pile up, redundant tools overlap, and the company bleeds money on autopilot. <strong>Operations owns the tool stack.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong style="color: #F59E0B;">💰 The Cost of Tool Neglect</strong>
        <p>A single unused subscription at $49/month = $588/year wasted. Multiply by 10 forgotten tools, and that is nearly $6,000 per year going to tools nobody uses. Operations audits prevent this.</p>
    </div>
</div>

<div class="content-section">
    <h3>📋 Tool Stack Inventory</h3>
    <p>Operations maintains a <strong>Master Tool Registry</strong> — a single document listing every tool the company pays for:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Category</th>
                <th style="padding: 12px; text-align: left;">Tools</th>
                <th style="padding: 12px; text-align: left;">Purpose</th>
                <th style="padding: 12px; text-align: left;">Review Frequency</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Communication</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Discord, Google Meet, Loom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team chat, calls, async video</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quarterly</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Management</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ClickUp</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task tracking, workload management</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quarterly</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Design</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Figma, Canva, Adobe CC</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UI/UX design, graphics</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Semi-annually</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Development</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GitHub, VS Code, hosting</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code repos, deployment</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Semi-annually</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Security</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1Password/LastPass, 2FA tools</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Credential management</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Analytics</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Analytics, Sheets</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reporting, data analysis</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quarterly</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🔍 Vendor Evaluation Framework</h3>
    <p>Before adding any new tool to the stack, evaluate it against these criteria:</p>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>✅ The 5-Point Vendor Evaluation:</strong>
        <ol>
            <li><strong>Problem Fit</strong> — Does it solve a real, documented problem? Or is it a solution looking for a problem?</li>
            <li><strong>Integration</strong> — Does it work with our existing tools (ClickUp, Discord, Google Workspace)?</li>
            <li><strong>Cost vs. Value</strong> — Is the monthly cost justified by the time or quality improvement?</li>
            <li><strong>Team Adoption</strong> — Will the team actually use it? The best tool unused is a waste of money.</li>
            <li><strong>Exit Strategy</strong> — Can we export our data if we switch vendors? Avoid vendor lock-in.</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>💰 License Management & Cost Optimization</h3>
    <p>Operations runs a monthly license audit to prevent waste:</p>
    <ul>
        <li><strong>Usage tracking</strong> — Check login frequency for each tool. If a license holder has not logged in for 30 days, flag for review.</li>
        <li><strong>Seat optimization</strong> — Downgrade or remove unused seats. Switch from per-seat to team plans when it saves money.</li>
        <li><strong>Annual vs. monthly billing</strong> — Annual plans typically save 15-20%. Switch when the tool is confirmed essential.</li>
        <li><strong>Duplicate elimination</strong> — Check for tools with overlapping features. One tool doing 80% of two tools' work is better than paying for both.</li>
        <li><strong>Negotiation schedule</strong> — Before any renewal, check competitor pricing. Vendors often offer discounts to retain customers.</li>
    </ul>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong>⚠️ Auto-Renewal Traps:</strong> Many SaaS tools auto-renew annually without notification. Operations maintains a renewal calendar with alerts 30 days before each renewal date. This gives time to evaluate, negotiate, or cancel. Never let a tool auto-renew without a conscious decision to keep it.
    </div>
</div>

<div class="content-section">
    <h3>📊 Quarterly Tool Stack Review</h3>
    <p>Every quarter, Operations presents a <strong>Tool Stack Report</strong> to management covering:</p>
    <ul>
        <li>Total monthly tool spend and trend (increasing/decreasing)</li>
        <li>Tools added and removed since last review</li>
        <li>Utilization rates for each tool (percentage of licensed users who are active)</li>
        <li>Cost-saving opportunities identified</li>
        <li>New tools proposed with business case justification</li>
    </ul>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 KEY INSIGHT:</strong> The goal is not to minimize tools — it is to maximize value per dollar spent. A $200/month tool that saves 40 hours of work is a bargain. A $20/month tool that nobody uses is a waste. Focus on ROI, not raw cost.
    </div>
</div>
`;

// ============ TASK 17: CAREER GROWTH & CERTIFICATION ============

const task17Content = `
<h2>🚀 TASK 17: CAREER GROWTH & CERTIFICATION — Your Operations Career Path at DH</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🎯 The Operations Career Ladder at Digital Heroes</h3>
    <p>Operations is not a dead-end role — it is the backbone of the entire agency. As DH scales from current revenue toward the ₹75 Crore goal, operations leaders become some of the most valuable people in the company. <strong>Your growth path is clear, measurable, and directly tied to the company's success.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">📈 The DH Operations Career Ladder</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Level</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Role</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Key Responsibilities</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Timeline</th>
            </tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Operations Trainee</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Follow SOPs, process orders, daily tracking</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Month 1-3</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Operations Coordinator</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Pipeline management, resource allocation, reporting</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Month 3-9</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Operations Manager</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Process optimization, team oversight, vendor management</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Month 9-18</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Head of Operations</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Strategic planning, scaling systems, cross-department leadership</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Month 18+</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Specialization Tracks</h3>
    <p>As you grow, you can specialize in areas that align with your strengths:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Track</th>
                <th style="padding: 12px; text-align: left;">Focus Areas</th>
                <th style="padding: 12px; text-align: left;">Skills to Develop</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Process Excellence</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SOP design, automation, quality systems</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Six Sigma basics, workflow automation, documentation</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>People Operations</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team coordination, onboarding, performance tracking</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR basics, conflict resolution, training design</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Operations</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order management, delivery coordination, client communication</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project management, stakeholder management, analytics</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Systems & Tools</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool stack management, integrations, data analysis</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical aptitude, vendor management, cost analysis</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📊 Building Your Operations Portfolio</h3>
    <p>At DH, promotions are based on <strong>documented impact</strong>, not tenure. Your operations portfolio should include:</p>
    <ul>
        <li><strong>Process Improvements</strong> — Document every SOP you created, updated, or optimized. Include before/after metrics.</li>
        <li><strong>Automation Wins</strong> — List every automation you built and the time it saved per week.</li>
        <li><strong>Pipeline Metrics</strong> — Show your on-time delivery rate, intake-to-assignment time, and quality scores over time.</li>
        <li><strong>Cost Savings</strong> — Quantify every dollar saved through vendor negotiations, license optimization, or process elimination.</li>
        <li><strong>Team Impact</strong> — Document how your work made other people's jobs easier or faster.</li>
    </ul>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>✅ Monthly Portfolio Update Ritual:</strong>
        <p>On the last Friday of every month, spend 30 minutes updating your ops portfolio. Add new achievements, update metrics, and reflect on what you learned. This habit means you always have a current, impressive record of your impact when review time comes.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎓 Recommended Certifications & Learning</h3>
    <p>These external certifications complement your DH operations training:</p>
    <ul>
        <li><strong>Google Project Management Certificate</strong> — Free on Coursera, covers fundamentals of project lifecycle management</li>
        <li><strong>ClickUp Expert Certification</strong> — Free from ClickUp University, directly applicable to daily work</li>
        <li><strong>Lean Six Sigma White/Yellow Belt</strong> — Process improvement methodology used by world-class operations teams</li>
        <li><strong>HubSpot Operations Hub Certification</strong> — Free, covers operations automation and data quality</li>
    </ul>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>🧠 KEY INSIGHT:</strong> The best operations professionals are T-shaped — deep expertise in one area (your specialization track) with broad knowledge across all operations functions. DH training gives you the breadth. Your specialization gives you the depth. External certifications validate both.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin-top: 20px;">
    <h3 style="color: #10B981;">🏆 The DH Equity Advantage</h3>
    <p>Remember: as an equity participant from Day 1, your career growth at DH has a direct financial multiplier. As the company grows toward ₹75 Crores, your equity stake grows with it. The operations team that builds the systems enabling that growth is literally building their own wealth. <strong>Every process you optimize, every automation you build, every hour you save — it compounds.</strong></p>
</div>
`;

// ============ TASK 18: FINAL CERTIFICATION — DASHBOARD SETUP & COMPREHENSIVE EXAM ============
const task18Content = `
<h2>📊 TASK 18: OPERATIONS DASHBOARD SETUP & FINAL CERTIFICATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🎯 Practical Exercise: Build Your Operations Dashboard</h3>
    <p>This final task combines a <strong>hands-on practical exercise</strong> with a comprehensive certification exam covering all 17 previous tasks. First, you will build an operations dashboard. Then, you will complete the final exam to earn your certification.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">📋 Dashboard Requirements:</strong>
        <p>Using Google Sheets (or ClickUp Dashboard), build an operations dashboard that tracks:</p>
        <ol>
            <li><strong>Active Order Pipeline</strong> — All orders by stage (Intake, In Progress, QC, Delivered)</li>
            <li><strong>Team Capacity View</strong> — Each team member's utilization percentage</li>
            <li><strong>Deadline Tracker</strong> — Orders due today, tomorrow, and this week with status indicators</li>
            <li><strong>Key Metrics Summary</strong> — On-time delivery rate, average intake-to-assignment time, revision rate</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📊 Exercise 1: Order Pipeline Tracker</h3>
    <p>Create a sheet with columns for tracking every active order:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Column</th>
                <th style="padding: 12px; text-align: left;">Data Type</th>
                <th style="padding: 12px; text-align: left;">Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order ID</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Auto-increment number</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unique identifier</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Name</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Text</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client identification</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Service Type</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dropdown</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design / Dev / Content / Other</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assigned To</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dropdown</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team member name</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Status</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dropdown</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Intake / In Progress / QC / Delivered</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deadline</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Date</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client delivery date</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Days Remaining</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formula</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Auto-calculate from deadline</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Risk Flag</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Conditional formatting</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Red if overdue, yellow if due within 24 hours</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📊 Exercise 2: Team Capacity Dashboard</h3>
    <p>Create a second sheet tracking team utilization:</p>
    <ul>
        <li><strong>Row per team member</strong> — Name, role, skill level (L1-L4)</li>
        <li><strong>Active orders count</strong> — Number of orders currently assigned</li>
        <li><strong>Estimated hours remaining</strong> — Total hours of work in queue</li>
        <li><strong>Utilization %</strong> — Formula: (estimated hours / available hours) x 100</li>
        <li><strong>Status indicator</strong> — Conditional formatting: Green (50-85%), Yellow (85-95%), Red (95%+)</li>
    </ul>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>✅ Submission Checklist:</strong>
        <ol>
            <li>☐ Order pipeline tracker with at least 5 sample orders populated</li>
            <li>☐ Team capacity view with at least 4 team members</li>
            <li>☐ Conditional formatting working (red/yellow/green indicators)</li>
            <li>☐ Formulas calculating days remaining and utilization automatically</li>
            <li>☐ Dashboard summary section with key metrics</li>
            <li>☐ 3-5 minute Loom video walking through your dashboard</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📝 Final Certification Exam</h3>
    <p>After completing the dashboard exercise, take the comprehensive exam below. This exam pulls questions from <strong>ALL 17 previous tasks</strong> covering company culture, daily routines, communication, security, pipeline management, resource allocation, process automation, vendor management, and career growth.</p>

    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong>📋 What's Being Tested:</strong>
        <ul>
            <li>Company culture, values, and the Digital Heroes manifesto</li>
            <li>Daily routine, time management, and deep work principles</li>
            <li>Communication rules, response SLAs, and escalation paths</li>
            <li>EOD reporting standards and specificity requirements</li>
            <li>Security protocols and credential management</li>
            <li>Order pipeline management and bottleneck resolution</li>
            <li>Resource allocation and capacity planning</li>
            <li>Process automation and SOP design</li>
            <li>Vendor and tool management</li>
            <li>Scenario-based judgment questions (the hardest part)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📹 Video Walkthrough Requirement</h3>
    <p>After passing the written exam, record a <strong>5-7 minute Loom video</strong> covering:</p>
    <ol>
        <li>Walk through your operations dashboard and explain each section</li>
        <li>Show how you would process a new incoming order from intake to assignment</li>
        <li>Demonstrate how you would identify and resolve a workload bottleneck</li>
        <li>Explain your approach to the morning capacity check</li>
        <li>Describe one process you would automate and why</li>
    </ol>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 WHY a video walkthrough?</strong> Anyone can memorize answers for a quiz. The dashboard and video prove you can actually APPLY the knowledge. They give your manager confidence that you understand operations deeply enough to manage real orders, real teams, and real deadlines.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin-top: 20px;">
    <h3 style="color: #10B981;">🏆 You're Almost There!</h3>
    <p>Once you pass this certification, you will have proven that you understand how Digital Heroes operates at its core — from daily routines to pipeline management, from resource allocation to process automation. You are ready to be the operational backbone of the agency.</p>
    <p><strong>Good luck — and remember: the system rewards consistency, documentation, and overcommunication. Be the person who builds the systems that make the company run, and your career growth will be unstoppable.</strong></p>
</div>
`;

// ============================================================
// QUIZZES — RANDOMIZED ANSWERS, SCENARIO-BASED, NO PATTERNS
// Correct answer index (c) is distributed: 0,1,2,3 roughly equally
// NO consecutive same answers. All distractors are plausible.
// ============================================================

// TASK 1 QUIZ: OPS MINDSET

const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust and ensures long-term operational sustainability", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "Half-day salary deduction", "Written warning recorded in your file", "No consequence if it's less than 30 minutes late"], c: 1 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Ignore it — it's not your problem", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach", "Everyone including interns", "Senior developers and team leads only", "Those with exceptional KPI scores — this is the standard approach"], c: 1 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As an ally whose problem is your common enemy — listen, understand, collaborate", "As a burden that drains resources", "As a problem to be managed — this reflects standard operating procedure for most professional teams", "As someone who should be transferred to management"], c: 0 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement as long as you're online"], c: 1 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["5-10% increment as a minimum — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "10-15% increment for meeting expectations", "No increment and placed on a Performance Improvement Plan (PIP)", "Verbal warning but salary stays the same"], c: 2 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — this aligns with industry best practices and ensures consistent results across different project contexts", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "A rough guideline to review monthly", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A reference document primarily for new employees during onboarding"], c: 2 }
];

const task2Quiz = [
    { q: "Digital Heroes operates as an 'interconnected chain.' What does this mean for YOUR role specifically?", o: ["Your role is the most important link in the chain and carries more weight than others", "You should monitor other team members' work to make sure they don't break the chain", "The chain metaphor means you should focus primarily on your own tasks and not worry about other departments", "Every role is equally critical — if one person breaks their routine, it weakens the entire team's output"], c: 3 },
    { q: "A colleague says 'I don't need SOPs, I've been working for 8 years and know what I'm doing.' Based on the operations mindset, what's the fundamental flaw in this thinking?", o: ["Systems beat individual motivation because they produce consistent results regardless of how someone feels on a given day", "They're being disrespectful to management who wrote the SOPs — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "8 years of experience is actually sufficient to skip SOPs if you have a proven track record", "The flaw is that they should have at least 10 years before bypassing SOPs"], c: 0 },
    { q: "The Daily SOP states 'Consistency > Intensity.' A team member works 14 hours on Monday, then takes Tuesday off, works 6 hours Wednesday, and 12 hours Thursday. What's wrong with this pattern?", o: ["Nothing — they're averaging 8 hours per day which meets the requirement and ensures long-term operational sustainability — this aligns wit", "Inconsistent rhythms disrupt team coordination — the SOP is designed around predictable daily presence, not sporadic bursts", "They should request half-days instead of taking full days off — following this approach systematically prevents common mistakes and keeps ", "The schedule is fine as long as they send an EOD report each day they work — this method has been validated through extensive testing and "], c: 1 },
    { q: "Why does Digital Heroes share equity with employees, including interns from Day 1?", o: ["It's a legal requirement for companies above ₹5 Crore revenue — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "It reduces the company's tax burden by distributing ownership", "It aligns everyone's personal success with the company's growth — when the company wins, every team member wins", "It replaces the need for salary increases and bonuses"], c: 2 },
    { q: "The principle 'If it's not written down, it didn't happen' most directly explains which company requirement?", o: ["The requirement for video walkthroughs during certification", "The mandatory Loom recording of all client calls", "The requirement to re-read SOPs weekly — this reflects standard operating procedure for most professional teams", "The requirement for EOD reports with specific numbers, task tracker updates, and Discord acknowledgments"], c: 3 },
    { q: "A new intern follows the Daily SOP perfectly for 30 days. A 3-year employee skips check-ins and sends vague EOD reports. According to the training, what's the likely outcome?", o: ["The intern demonstrates more documented output and reliability, positioning them for faster growth despite less experience", "Both are treated equally because the company values loyalty over process — this is the recommended approach based on current documentation and expert consensus in the field today", "The senior employee gets priority for promotions due to tenure and experience", "The senior employee receives a warning while the intern gets recognition, but promotions still favor seniority"], c: 0 },
    { q: "'Automate, Delegate, Eliminate' means you should do which of the following BEFORE doing any recurring task manually?", o: ["Document the task in an SOP first, then do it manually to verify the SOP works — implementing this correctly requires understanding the full context of how each operational element interacts", "Ask if it can be automated, if someone else can do it better, or if it even needs to be done at all", "Complete the task manually three times to understand it before considering automation", "Check with your manager whether it's worth automating based on the time savings"], c: 1 },
    { q: "According to the company mission, what is the revenue journey Digital Heroes is on?", o: ["From ₹5 Crores to ₹25 Crores by 2025", "From ₹15 Crores to ₹100 Crores by 2028", "From ₹9.2 Crores to ₹75 Crores by 2027", "From ₹9.2 Crores to ₹50 Crores by 2026"], c: 2 },
    { q: "What's the difference between a 'Firefighter' and an 'Operator' at end of day?", o: ["The firefighter completes more urgent tasks while the operator focuses on planned work — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "The firefighter handles emergencies which is more valuable than routine operations work", "Both achieve similar results but the firefighter works harder", "The operator sends a specific EOD with metrics; the firefighter says 'I was busy' but can't show specifics"], c: 3 },
    { q: "When the SOP says 'the cycle amplifies,' it refers to the chain: Sales → Quality Work → Happy Clients → CS Protection → 5-Star Reviews → More Enquiries. Why does YOUR daily routine matter in this cycle?", o: ["Morning check-ins and EOD reports are the rhythm that keeps the entire chain synchronized — when you skip them, you create a weak link that affects everyone downstream", "Your daily routine primarily matters if you work in Sales or Client Success — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Your routine matters because it determines your personal productivity metrics", "The cycle amplifies regardless of individual routines as long as the majority of the team follows the SOP"], c: 0 }
];

// TASK 2 QUIZ: DAILY ROUTINE
const task3Quiz = [
    { q: "Your team lead sends you a message at 2:30 PM. You're in the middle of Deep Work Block 2. According to the SOP, when must you respond?", o: ["Within 1 hour since you're in deep work mode — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Within 10 minutes — team lead messages have a specific SLA that overrides deep work scheduling", "Immediately within 5 minutes since all messages require instant responses", "You can wait until your deep work block ends at 4 PM"], c: 1 },
    { q: "The morning checklist has 7 steps. What is the THIRD step, which the SOP marks as critical with a red indicator?", o: ["Check email for client or team updates — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Review your tasks in the project management tool", "Connect with your manager — brief check-in call or message to get daily priorities", "Plan your top 3 priorities for the day"], c: 2 },
    { q: "Why does the SOP limit daily priorities to exactly 3 instead of 5 or 10?", o: ["Because 3 is the maximum number of tasks that can fit in the project management tool's priority field — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Because research shows humans can primarily focus on 3 concepts at a time", "Because the work day primarily has 3 deep work blocks, so each priority maps to one block", "Because trying to do 10 things means finishing 0 things well — 3 priorities force identification of what actually moves the needle"], c: 3 },
    { q: "During lunch break (1:00 - 2:00 PM), which of these is required?", o: ["Set your Discord status to 🍽️ Lunch and actually rest", "Continue working if you have pending deadlines", "Check Discord every 30 minutes in case of client emergencies", "Send a pre-lunch update to your manager"], c: 0 },
    { q: "The CEO sends you a Discord DM at 11:00 AM while you're in Deep Work Block 1. According to the response time SLA, you must respond within:", o: ["30 minutes since you're currently in a deep work block", "5 minutes — Management/CEO messages require IMMEDIATE response regardless of what you're doing", "10 minutes as it's from management — this reflects standard operating procedure for most professional teams", "1 hour following the general Discord response rule"], c: 1 },
    { q: "What specific action should you take at 6:30 PM according to the daily schedule?", o: ["Set Discord to offline and log off for the day — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Begin your third deep work block to finish remaining tasks", "Start wrapping up — update all task statuses and send your EOD report", "Start your collaboration and meetings block"], c: 2 },
    { q: "The 'Eat the Frog' method means doing your hardest task during which time block, and WHY?", o: ["Deep Work Block 3 (5-6:30 PM) because evening focus is higher with fewer interruptions — this aligns with industry best practices and ensures consistent results across different project contexts", "The Meetings block (4-5 PM) because you can get help from colleagues", "Any block — it doesn't matter as long as you complete it that day", "Deep Work Block 1 (10:15 AM - 1:00 PM) because willpower and cognitive ability are highest early in the day"], c: 3 },
    { q: "Your manager's message from 10 PM the previous night says 'Please prioritize the StyleHaven project tomorrow.' When should you first act on this?", o: ["During your morning check-in at 10:00 AM when you check overnight messages and connect with your manager", "Reply immediately when you see it, even if it's past work hours — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Wait until your manager brings it up during the day", "Add it to tomorrow's to-do list but don't respond until 11 AM"], c: 0 },
    { q: "The post-lunch energy dip is addressed in the daily schedule. How?", o: ["By scheduling a 30-minute nap break between 2-2:30 PM — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "By scheduling Deep Work Block 2 (2-4 PM) with structured focus — the block structure pushes through the energy dip rather than surrendering to it", "By requiring team members to go for a walk before starting afternoon work", "By assigning primarily easy/low-priority tasks to the afternoon blocks"], c: 1 },
    { q: "What is the maximum response time for a message from a colleague (not your manager, not management)?", o: ["5 minutes", "10 minutes", "30 minutes", "1 hour"], c: 2 }
];

// TASK 3 QUIZ: COMMUNICATION RULES
const task4Quiz = [
    { q: "A decision is made during a phone call with your team lead about changing a client's project scope. According to the SOP, what MUST happen after the call?", o: ["Nothing extra — phone calls are an acceptable form of communication and ensures long-term operational sustainability", "Send an email summary to the client confirming the scope change", "Record a Loom video summarizing what was discussed", "Post the decision in Discord for documentation — phone calls disappear, but written records are proof"], c: 3 },
    { q: "You're unable to respond fully to a team channel mention right away because you need to check something first. What should you do?", o: ["React with a 👍 or ✅ emoji to acknowledge, then respond properly when ready", "Reply saying 'I'll check and get back to you' — this counts as acknowledgment within the SLA", "DM the person who mentioned you asking for more time", "Wait until you have the complete answer before responding"], c: 0 },
    { q: "The escalation path for non-response is: Friendly reminder → Logged issue → Performance review. Why doesn't the company just fire people on the first missed response?", o: ["Because labor laws in India prevent immediate termination — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Because the escalation gives chances to correct while protecting the company from the compounding cost of chronic unresponsiveness", "Because one missed message isn't a big deal and the company is lenient", "Because the manager should verify the message was actually sent before escalating"], c: 1 },
    { q: "Why does the SOP call silence 'the most expensive form of communication'?", o: ["Because silence means you're probably not working and wasting the company's money — this is the recommended approach based on current documentation and expert consensus in the field today — teams that adopt this strategy repor", "Because Discord has a penalty for inactive accounts that costs the company money — this is the recommended approach based on current documentation and expert consensus in the field today", "Because when you go silent, people assume the worst — your manager thinks you're stuck, your colleague thinks you forgot, your client thinks you don't care. A 5-second acknowledgment eliminates all that anxiety.", "Because silence creates a legal liability if a client claims they never received a response — implementing this correctly requires understanding the full context of how each operational element interacts"], c: 2 },
    { q: "Your client's website is down at 3 PM on a Wednesday. According to the communication priority guide, when must this be addressed?", o: ["Within 30 minutes since it's during the meetings block — implementing this correctly requires understanding the full context of how each operational element interacts", "Within 1 hour following the standard client response time", "Within 2 hours as it falls under normal priority communication", "Immediately — within 15 minutes. Site downtime is classified as URGENT priority."], c: 3 },
    { q: "According to the SOP, what are acceptable acknowledgment messages?", o: ["Any response that confirms you received the message: 'Okay', 'Yes sir/ma'am', 'Working on it', 'Understood', 'Will do'", "'Understood' and 'Will do' are considered professional enough — this is the standard approach and ensures long-term operational sustainability", "Emoji reactions primarily — 👍 is the preferred format", "A minimum 2-sentence response explaining your plan of action"], c: 0 },
    { q: "A team member has their Discord notifications off 'to focus better during deep work.' Is this acceptable per the SOP?", o: ["Yes — deep work requires zero interruptions and notifications should be off and ensures long-term operational sustainability", "Partially — they can mute non-essential channels but must keep notifications ON for mentions and DMs", "No — all Discord notifications must be on for all channels at all times", "Yes, but primarily during Deep Work Block 1 (before 1 PM)"], c: 1 },
    { q: "The Overcommunication Principle says 'provide updates even when not asked.' Which of these best demonstrates this principle?", o: ["Sending hourly screenshots of your work to prove you're being productive — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Responding to every message in every channel even if it doesn't involve you", "Sending your manager a message at 2 PM saying 'Hey, the project is 60% done, on track for Friday delivery' when they didn't ask for an update", "Adding all team members to every client communication thread"], c: 2 },
    { q: "Why must Discord be installed on your PHONE in addition to your computer?", o: ["Because Discord's mobile app is more reliable than the desktop version — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "So you can work from your phone during commute time to maximize productivity", "Because the company tracks your online hours across devices", "For urgent messages when you're away from your desk — like during a bathroom break when a client site goes down"], c: 3 },
    { q: "A general channel message (not mentioning you specifically) is posted at 10 AM. By the SOP, you could reasonably respond as late as:", o: ["12:00 PM — general channel messages have a 2-hour response window", "11:00 AM — this reflects standard operating procedure for most professional teams", "10:15 AM — this reflects standard operating procedure for most professional teams", "It's optional to respond to general channel messages that don't mention you"], c: 0 }
];

// TASK 4 QUIZ: EOD REPORTING
const task5Quiz = [
    { q: "Which EOD report meets the SOP's specificity requirements?", o: ["'Worked on the StyleHaven project. Made good progress today. Will continue tomorrow.' — experienced professionals recognize this as the most reliable path for maintaining quality control standards — taking this route ", "'Riya Sharma — StyleHaven: Added 15 products with descriptions/images, customized Home and About pages. Store: stylehaven.myshopify.com, Pass: dh2026. Completion: 70%. ETA: Friday 3 PM. Blockers: None.'", "'Completed 3 tasks. Updated tracker. No blockers.' — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "'Spent the day on product uploads and page customization. Everything is on track.' — experienced professionals recognize this as the most reliable path for maintaining quality control standards"], c: 1 },
    { q: "The SOP says 'No EOD update = Assumed you didn't work.' Why is this policy so strict?", o: ["Because the HR system automatically marks attendance based on EOD submission — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Because the company doesn't trust employees and needs proof they worked", "Because it takes only 5 minutes to document 8 hours of work — failing to do so either means nothing was done worth reporting, or the team's need for visibility isn't being respected", "Because clients receive a daily summary of all EOD reports for their projects"], c: 2 },
    { q: "Your EOD report says 'Fixed some bugs.' According to the training, what specifically is wrong with this?", o: ["It should mention the client name and project name — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Nothing — it's acceptable as long as the task tracker is updated", "It should include the time spent on each bug fix", "It lacks numbers. It should say exactly WHICH bugs were fixed and HOW MANY: 'Fixed 4 bugs: cart calculation, mobile menu, image loading, checkout redirect'"], c: 3 },
    { q: "What is the DEADLINE for submitting your daily EOD report?", o: ["9:30 PM — mandatory, no exceptions", "Before you go offline for the day, regardless of time", "7:00 PM — end of standard work hours", "10:00 PM — but earlier is preferred"], c: 0 },
    { q: "Team member A writes: 'Almost done with the project.' Team member B writes: '85% complete — ETA tomorrow 3 PM. Remaining: payment gateway setup + testing.' The SOP would consider:", o: ["Both acceptable since they communicate the same general status — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "A is vague and unacceptable; B is specific and professional because it gives the manager exact visibility into progress, timeline, and remaining work", "A is acceptable for internal updates, B is primarily needed for client-facing reports", "A is actually better because it's concise and doesn't waste the manager's time with details"], c: 1 },
    { q: "Your EOD report specificity checklist requires which of the following? Select the MOST complete answer.", o: ["Client name, task description, and completion percentage — this aligns with industry best practices and ensures consistent results across different project contexts", "A brief summary of tasks completed and tomorrow's priorities", "Exact number of products/pages, percentage completion, ETA, store link, password, and specific blocker descriptions", "Task IDs from the project management tool with status updates"], c: 2 },
    { q: "You need to leave early at 5 PM today. What should you do about your EOD report?", o: ["Send it the next morning with an explanation that you left early — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Don't send one — you can mark it as a half-day instead", "Ask your manager for an extension on the EOD deadline", "Send your EOD BEFORE leaving at 5 PM — if you need to log off early, send it before you leave"], c: 3 },
    { q: "Why does the SOP emphasize 'talk in NUMBERS most of the time'?", o: ["Because numbers give managers actionable visibility — they can assess whether timelines are realistic and if resources need reallocation, whereas words like 'good progress' tell them nothing", "Because the project management tool primarily accepts numerical input — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams — this approach balances", "Because the company uses numerical scoring for performance reviews — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Because numbers look more professional in reports and impress clients — this methodology accounts for edge cases and variations that commonly cause confusion during implementation"], c: 0 },
    { q: "How should you describe a blocker in your EOD report?", o: ["Just write 'Blocked' — your manager will ask for details if needed and ensures long-term operational sustainability — this aligns wi", "Specifically describe the blocker: 'Waiting on client approval for homepage design since Feb 18' — not just 'blocked'", "Write 'Some issues today' to keep it concise — following this approach systematically prevents common mistakes and keeps the workflo", "Create a separate ticket in the project management tool instead of mentioning it in the EOD — this method has been validated through"], c: 1 },
    { q: "EOD reports protect the employee, not just the company. How?", o: ["They prove you worked the required hours for payroll purposes — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "They help you bill clients more accurately for time-based projects", "They create documented proof of your output — during performance reviews, you have specific metrics instead of vague memories", "They give you legal protection against wrongful termination claims"], c: 2 }
];

// TASK 5 QUIZ: SOP MASTERY
const task6Quiz = [
    { q: "How many SOPs does every Digital Heroes team member follow at minimum?", o: ["1 — their role-specific SOP", "3 — Daily SOP, Role SOP, and Security SOP", "It depends on the role — some roles primarily need the Daily SOP", "2 — the Daily SOP (everyone) plus their role-specific SOP"], c: 3 },
    { q: "A UI/UX Designer at Digital Heroes must follow which SOPs?", o: ["Daily SOP + Designer SOP", "Daily SOP + Designer SOP + Developer SOP since designers need to understand code too", "The Designer SOP since that covers everything for their role — this is the standard approach", "Designer SOP + Client Chat SOP since designers interact with clients"], c: 0 },
    { q: "You've been working at Digital Heroes for 6 months and know the SOP well. The training says you should STILL re-read it. When specifically?", o: ["When your manager tells you to review it — this is the standard approach and ensures long-term operational sustainability", "Weekly — re-read relevant sections to stay sharp and catch things you may have missed", "Monthly, during a designated 'SOP Review Day' that the company schedules", "After making a mistake that violated the SOP — this is the standard approach"], c: 1 },
    { q: "You notice the Daily SOP doesn't mention what to do when Discord goes down. What should you do?", o: ["Nothing — if it's not in the SOP, it's not your responsibility to suggest changes and ensures long-term operational sustainability", "Wait until Discord actually goes down and then improvise a solution", "Identify the gap, propose the improvement (e.g., 'Add a note about the WhatsApp backup group'), and tell your manager", "Post about it in the general Discord channel for team discussion"], c: 2 },
    { q: "Why does the training say 'The best SOPs are written by the people actually doing the work'?", o: ["Because employee-written SOPs are legally more defensible than management-written ones — this is the recommended approach based on current documentation and expert consensus in the field today", "Because management doesn't have time to write SOPs and delegates to employees", "Because writing SOPs is a form of team building that increases employee engagement", "Because frontline workers encounter problems and edge cases that management might never see — their improvements make SOPs more practical and complete"], c: 3 },
    { q: "A new Sales Executive asks you the correct way to handle a client's pricing objection. You know the answer from experience. According to the SOP philosophy, what should you tell them?", o: ["Direct them to the Sales SOP first — 'Use the SOP as your training guide, don't teach from memory' — then supplement with your experience", "Tell them to ask their manager for guidance since you're not in a leadership role — implementing this correctly requires understanding the full context of how each operational element interacts", "Share your personal approach since you have experience handling these situations successfully", "Show them a recorded call where you handled a similar objection"], c: 0 },
    { q: "The SOP says 'SOPs are living documents.' What does this mean in practice?", o: ["SOPs are stored in a digital format that can be edited, as opposed to printed copies — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "SOPs get updated regularly based on new best practices, mistakes learned, and team feedback — they evolve as the company evolves", "SOPs are primarily guidelines and can be followed loosely depending on the situation", "SOPs are reviewed annually by management and updated with new company policies"], c: 1 },
    { q: "When should you check your SOP BEFORE starting work?", o: ["On your first day when everything is new — this is the standard approach and ensures long-term operational sustainability", "When specifically told to by your manager — this is the standard approach", "Whenever you're starting a new type of task you haven't done before — check the SOP for best practices before guessing", "Before every single task, regardless of whether you've done it 100 times before"], c: 2 },
    { q: "A Finance team member accidentally follows the Developer SOP process for handling a client issue. What's the core problem?", o: ["They should have used the Daily SOP instead since it covers all roles — this ensures compliance with professional standards and prevents cascading issues in downstream processes — teams that adopt this strategy report fewer issues and m", "They should have asked their manager which SOP to follow before taking any action — this is the recommended approach based on current documentation and expert consensus in the field today", "There's no problem as long as the client issue gets resolved — implementing this correctly requires understanding the full context of how each operational element interacts", "Each role has specific processes designed for their function — the Developer SOP's approach to client issues is designed for technical problems, not financial ones. Following the wrong SOP could lead to incorrect actions."], c: 3 },
    { q: "After making a mistake on a project, the SOP recommends you take which specific action regarding SOPs?", o: ["Review the SOP section relevant to the mistake — to prevent future issues and to suggest updates if the SOP doesn't address the scenario", "Document the mistake in your EOD report and move on — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Schedule a meeting with your manager to discuss the mistake", "Write a new SOP specifically for the mistake scenario"], c: 0 }
];

// TASK 6 QUIZ: TIME MANAGEMENT
const task7Quiz = [
    { q: "The 80/20 Rule says '80% of your results come from 20% of your tasks.' Which of these demonstrates MISUNDERSTANDING the principle?", o: ["Spending your first deep work block on the checkout page build instead of answering emails — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Feeling productive because you answered 50 emails before noon, even though none moved your project forward", "Asking yourself 'If I could primarily do ONE task today, which one moves the project most?'", "Deprioritizing easy tasks to focus on the hardest, highest-impact work first"], c: 1 },
    { q: "You realize at 2:00 PM that you can't meet your 5:00 PM deadline. According to the SOP's escalation protocol, what should you do?", o: ["Send your manager a message at 4:30 PM giving them a 30-minute heads up — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Work faster and skip breaks to try to meet the deadline — you should primarily escalate if you've exhausted all personal options", "Tell your manager NOW — at 2 PM they have 3 hours to reassign, adjust expectations, or help. Waiting until 5:01 PM makes the damage irreversible.", "Complete as much as possible and explain the shortfall in your EOD report"], c: 2 },
    { q: "According to the daily schedule, meetings and collaboration are scheduled for 4:00-5:00 PM. Why is this specific time chosen?", o: ["Because clients are most available for calls in the late afternoon — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Because team members have the most energy for social interaction in the afternoon", "Because the office is quieter after 4 PM, making calls easier", "Because batching meetings into one block protects the three deep work blocks from interruptions — if meetings could happen anytime, deep work never gets done"], c: 3 },
    { q: "The SOP lists 5 steps for when you're falling behind. Which step MUST happen BEFORE the deadline passes?", o: ["'Communicate early' — telling your manager before the deadline is missed, not after", "'Ask for help' — getting a colleague to assist and ensures long-term operational sustainability", "'Learn from it' — reflecting on why you fell behind", "'Prioritize ruthlessly' — deciding what can wait"], c: 0 },
    { q: "The training says 'Checking email feels productive but rarely moves a project forward.' This illustrates which concept?", o: ["The importance of limiting email to twice daily — this aligns with industry best practices and ensures consistent results across different project contexts", "The difference between 80% tasks (feel productive but low impact) vs. 20% tasks (hard but high impact)", "Why email should be replaced by Discord for all communication", "That email is an outdated tool that has no place in modern workflows"], c: 1 },
    { q: "The SOP says 'Set MAX 3 daily priorities.' A new team member argues they have 8 urgent tasks and can't pick just 3. What's the correct response?", o: ["Allow them to have 8 priorities since their workload genuinely requires it — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Tell them to work faster so they can complete all 8", "Help them identify which 3 tasks will have the highest impact — the other 5 either aren't truly urgent, can be delegated, or can shift to tomorrow", "Escalate to the manager to reduce their workload to 3 tasks maximum"], c: 2 },
    { q: "Why does the SOP explicitly say 'Skipping breaks leads to burnout, not more output'?", o: ["Because Indian labor law requires mandatory break periods during work hours — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Because the company has a policy of paying for break time and wants employees to use it", "Because breaks are when team members are expected to check non-urgent Discord messages", "Because sustained performance requires recovery — working non-stop degrades quality and leads to chronic exhaustion that reduces long-term output"], c: 3 },
    { q: "The concept 'Early communication is damage prevention. Late communication is damage control.' means:", o: ["Telling your manager about a problem while there's still time to fix it is fundamentally different from telling them after the damage is done — one gives options, the other forces scrambling", "You should always communicate issues before they happen, even if they might not happen — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "All client communication should happen in the morning to prevent afternoon issues", "You should front-load all your reporting to the first half of the day"], c: 0 },
    { q: "Deep Work Block 1 (10:15 AM - 1:00 PM) is designated for the HARDEST task. What is the scientific reasoning?", o: ["Because other team members are in meetings during this time so there are fewer interruptions — this is the recommended approach based on current documentation and expert consensus in the field today", "Because willpower and cognitive ability peak in the first 2-3 hours of work — if you waste fresh brain power on easy tasks, hard work gets done when your brain is tired", "Because clients typically don't message before noon, reducing interruptions", "Because the SOP is designed to mirror school class schedules that people are already accustomed to"], c: 1 },
    { q: "A team member tracks their time and finds they spent 5 hours on emails and Slack and only 2 hours on actual project work. According to the 80/20 rule, they should:", o: ["Report this to their manager as evidence they need a reduced workload — implementing this correctly requires understanding the full context of how each operational element interacts", "Hire an assistant to handle their email so they can focus on project work", "Restructure their day using deep work blocks — batch email into specific windows and protect the majority of their time for the 20% of tasks that produce 80% of results", "Stop using email entirely and move everything to project management tools"], c: 2 }
];

// TASK 7 QUIZ: TOOLS & SYSTEMS
const task8Quiz = [
    { q: "How many required tools must be installed and used daily?", o: ["3 — Discord, project management tool, and Google Drive and ensures long-term operational sustainability", "7 — including personal productivity apps like calendar and notes", "4 — primarily the tools relevant to your specific role", "5 — Discord, Notion/ClickUp, Loom, Google Meet/Zoom, Google Drive"], c: 3 },
    { q: "The file naming convention requires which format?", o: ["YYYY-MM-DD_ClientName_ProjectName_Type", "It's flexible as long as the file is in the correct folder", "ProjectID_TaskName_Version", "ClientName_ProjectName_Date"], c: 0 },
    { q: "Why must ALL work files be stored on Google Drive, never on your local desktop?", o: ["Because local files can be audited by the company's IT team — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Because if your laptop breaks, all your work is gone — team-accessible cloud storage ensures continuity and enables collaboration", "Because Google Drive has better search functionality than local file systems", "Because local storage creates duplicate files that waste disk space"], c: 1 },
    { q: "The training says 'Untitled Folder 2 is professionally unacceptable.' Why does this matter so much?", o: ["Because clients sometimes see the Google Drive and poor naming looks unprofessional — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Because the CEO personally checks file organization weekly", "Because with 15 people sharing a drive, consistent naming means ANY team member can find ANY file in 30 seconds — disorganized naming wastes hundreds of hours yearly", "Because Google Drive charges more for poorly organized storage"], c: 2 },
    { q: "What should be your FIRST action every morning regarding tools?", o: ["Open your email and check for overnight messages — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Start a Loom recording of your morning routine", "Check the project management tool and update your task statuses", "Open all 5 required tools from your browser bookmarks folder — takes 5 seconds and ensures you don't forget any tool"], c: 3 },
    { q: "Discord is described as the company's 'HQ.' What does this mean operationally?", o: ["It's the primary communication headquarters — open all day, respond within 1 hour, notifications MUST be on", "It's where the company stores its official documents and SOPs — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "It's optional but preferred over email for internal communication", "It's primarily used for team announcements and not for day-to-day communication"], c: 0 },
    { q: "When should you use Loom according to the SOP?", o: ["For recording client presentations — this is the standard approach", "For any explanation or progress update that would be clearer as a video than as text", "When your manager specifically requests a video update — this is the standard approach", "For recording all meetings for compliance purposes"], c: 1 },
    { q: "Google Meet/Zoom calls are scheduled in which specific time block, and why?", o: ["Morning (10-11 AM) because people are freshest for calls — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Anytime — there's no specific block for calls", "4-5 PM block — batching meetings protects deep work blocks from interruptions", "1-2 PM during lunch — this way meetings don't cut into work time"], c: 2 },
    { q: "You need to share a design file with a colleague. The correct file name would be:", o: ["FinalDesign_v3.psd", "homepage design FIXED.psd", "SH_HP_Design.psd — this reflects standard operating procedure for most professional teams", "2026-02-20_StyleHaven_Homepage_Mockup_v2.psd"], c: 3 },
    { q: "Notion/ClickUp must be checked daily for which specific actions?", o: ["Updating task statuses and checking new assignments", "Reading company announcements and blog posts — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Filing time sheets and leave requests", "Approving other team members' work submissions"], c: 0 }
];

// TASK 8 QUIZ: LEAVE & ATTENDANCE
const task9Quiz = [
    { q: "You're not feeling well on a Wednesday and think you might only need the morning off. According to the SOP, what should you do?", o: ["Request a half-day leave for the morning and come online after lunch — this aligns with industry best practices and ensures consistent results across different project contexts", "Take a FULL day leave — half-days don't exist (except Saturday). Either you're working or you're not.", "Start working and see how you feel — leave can be requested later if needed", "Ask your manager if you can take a half-day since you might recover by afternoon"], c: 1 },
    { q: "The start time posting deadline is BEFORE 11:00 AM. You plan to start working at 12:30 PM today. When must you post?", o: ["Within 15 minutes of your actual start time — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "At 12:30 PM when you actually start working", "Before 11:00 AM — post by 10:55 AM saying 'I'll start working from 12:30 PM'", "It doesn't matter as long as you post by end of day"], c: 2 },
    { q: "Why do half-days NOT exist at Digital Heroes (except Saturday)?", o: ["Because half-days would be unfair to employees who always work full days — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams — taking this rout", "Because tracking half-day attendance is too complex for the HR system — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Because part-time work is against company policy — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Because half-days create confusion about availability — if you're 'half working,' the team doesn't know if they can assign you tasks, rely on you for client calls, or count on your output"], c: 3 },
    { q: "Your internet goes down at 11 AM. What is the CORRECT sequence of actions?", o: ["Use mobile data → message manager on Discord → post in team channel → if unresolved in 1 hour, post leave request → update when back online", "Wait until internet is back, then post in Discord explaining what happened — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Call your manager immediately on the phone and wait for instructions", "Email HR requesting a leave day due to technical issues"], c: 0 },
    { q: "The Team Lead must post a consolidated list of working members by what time?", o: ["10:00 AM — this reflects standard operating procedure for most professional teams", "11:30 AM — after collecting all team members' start time posts", "11:00 AM — this reflects standard operating procedure for most professional teams", "12:00 PM — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "A proper leave request follows which format?", o: ["'Taking the day off, will be back tomorrow'", "'I'm sick today, won't be able to work'", "'Leave - [DATE] - Reason: [SPECIFIC REASON]'", "'Requesting leave for personal reasons'"], c: 2 },
    { q: "Even on leave, the SOP requires one specific action. What is it?", o: ["Submit a brief EOD report listing zero tasks completed — this is the recommended approach based on current documentation and expert consensus in the field today", "Update your task statuses in the project management tool", "Post in the team channel that you're available for emergencies", "Check Discord ONCE for urgent messages — a 2-minute check could prevent a major client issue"], c: 3 },
    { q: "Saturday's half-day exception exists because:", o: ["It's already a shorter work day, so a half-day on Saturday doesn't create the same confusion about availability", "Saturday is technically not a full working day in Indian labor law — implementing this correctly requires understanding the full context of how each operational element interacts", "The company observes a 5.5-day work week as standard policy", "Most clients don't work on Saturdays, so team availability is less critical"], c: 0 },
    { q: "You wake up feeling sick on a Saturday and want a half-day. This is:", o: ["Not allowed — even Saturday half-days require prior approval from the CEO", "Allowed — Saturday is the ONE day where half-days are permitted", "Allowed primarily if you've worked at least 4 hours before requesting it", "Not allowed — weekend leave follows different rules than weekday leave"], c: 1 },
    { q: "The leave deadline is before 12:00 PM noon. Why is noon specifically chosen?", o: ["Because HR processes leave requests during the afternoon — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Because it's the middle of the day, which gives equal time before and after", "Because it allows the team to redistribute your tasks before half the workday is gone — any later, and they've already planned around your assumed presence", "Because it aligns with the lunch break so there's no disruption to work flow"], c: 2 }
];

// TASK 9 QUIZ: SECURITY & PASSWORDS
const task10Quiz = [
    { q: "A colleague needs access to a client's Shopify admin panel. They ask you to DM them the password on Discord. What should you do?", o: ["Check with the client first before sharing any credentials — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Share it via Discord DM — DMs are private and secure enough", "Share it via email instead since email is more secure than Discord", "Refuse and direct them to use the password manager's secure sharing feature — passwords must NEVER be shared via chat"], c: 3 },
    { q: "The training describes a scenario where a Discord DM with a client password gets compromised. What's the potential financial damage mentioned?", o: ["₹20-50 Lakhs — including lawsuits, client loss, and reputation damage", "₹5-10 Lakhs in legal fees — this reflects standard operating procedure for most professional teams", "₹1-5 Lakhs in lost revenue — this reflects standard operating procedure for most professional teams", "₹1 Crore in regulatory fines"], c: 0 },
    { q: "Why does the SOP require 2FA on EVERY platform, not just critical ones?", o: ["Because adding 2FA to every platform qualifies for cybersecurity insurance discounts — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Because any account without 2FA is a potential entry point — compromising even a 'minor' account can give attackers information to breach more critical systems", "Because Digital Heroes' IT team needs 2FA codes to verify employee identities", "Because 2FA is a regulatory requirement for all tech companies"], c: 1 },
    { q: "You receive client credentials via email (an insecure method). The SOP requires you to:", o: ["Forward the email to your manager for approval before using the credentials — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Accept them as-is since email is common for sharing credentials", "Save them to the password manager, CHANGE the password, and share the new password via the secure sharing method", "Delete the email and ask the client to resend via a secure method"], c: 2 },
    { q: "A team member uses the same strong password for 5 different client accounts 'because it's hard to remember unique ones.' This is:", o: ["Acceptable if the password is 16+ characters and includes special characters — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Acceptable for non-critical accounts but not for admin-level access", "Acceptable as long as they use 2FA on all accounts", "A serious security violation — if one account is breached, ALL five client stores are compromised. Unique passwords per account are mandatory."], c: 3 },
    { q: "What is the ONLY acceptable method for sharing passwords at Digital Heroes?", o: ["A password manager's built-in secure sharing feature (LastPass/1Password)", "Discord DM to verified team members only", "Encrypted email — this reflects standard operating procedure for most professional teams", "A shared Google Sheet protected with a master password"], c: 0 },
    { q: "Browser auto-fill for passwords is prohibited on which types of devices?", o: ["All devices — auto-fill should never be used with company accounts", "Shared devices — anyone who uses the device after you could access stored credentials", "Personal devices primarily — shared devices are managed by the IT team", "On mobile devices since they're more likely to be lost or stolen — this is the standard approach"], c: 1 },
    { q: "When you receive client credentials, the FIRST thing you should do is:", o: ["Confirm receipt to the sender, then save them when convenient — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Test the credentials to make sure they work", "Immediately save them to the password manager vault — never store them anywhere else first", "Change the password immediately before saving it"], c: 2 },
    { q: "The SOP says 'Your one convenient shortcut just cost the company ₹20-50 Lakhs.' This refers to which specific action?", o: ["Using the same password for multiple accounts — this aligns with industry best practices and ensures consistent results across different project contexts", "Failing to enable 2FA on a client's Shopify store", "Storing credentials in a browser's auto-fill on a personal device", "Sharing a client's admin password via Discord DM — creating a breach vector if the Discord account is compromised"], c: 3 },
    { q: "A client shares their store admin credentials in a WhatsApp message. You've already saved them to your password manager. What's the NEXT required action?", o: ["Change the password on the client's account and share the new one via the password manager's secure share — credentials sent via insecure channels must be rotated", "Nothing more — you've properly stored them securely and ensures long-term operational sustainability — this approach balances thoroughness with efficiency which is critical for ", "Ask the client to delete the WhatsApp message — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Forward the credentials to your team lead for backup — this methodology accounts for edge cases and variations that commonly cause confusion during implementation"], c: 0 }
];

// TASK 10 QUIZ: ESCALATION & PROBLEM SOLVING
const task11Quiz = [
    { q: "A client's e-commerce site goes down at 3:00 PM. According to the escalation chain, who do you contact FIRST?", o: ["The CEO directly — site downtime is critical enough for top-level attention immediately", "Team Lead AND the Developer assigned to that project — simultaneously", "The client, to let them know you're aware of the issue", "Your manager for guidance on how to proceed"], c: 1 },
    { q: "If the Team Lead doesn't respond to a critical escalation within 15 minutes, the SOP says to:", o: ["Post in the general team channel to get anyone's attention — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Wait another 15 minutes and try again", "Contact Management/CEO directly — critical issues can't wait", "Send an email follow-up to create a paper trail"], c: 2 },
    { q: "The '1-Hour Rule' states that if you're stuck for 1 hour, you MUST ask for help. The reasoning is:", o: ["Because working on the same problem for too long causes stress-related health issues — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Because 1 hour is the maximum time the company allows for any single task", "Because your manager needs to know about all tasks taking more than 1 hour for reporting purposes", "Because after 1 hour, the probability of solving it alone drops — someone more experienced might solve it in 15 minutes, saving the company hours of wasted productive time"], c: 3 },
    { q: "A BAD escalation message says 'The site is broken.' A GOOD escalation message includes which 3 parts?", o: ["WHAT happened (specific issue), WHAT you tried (investigation steps), WHAT you need (specific help required)", "WHAT happened, WHERE it happened, and WHO is responsible — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Problem description, team members who were consulted, and estimated fix time", "Problem severity, affected clients, and suggested solution"], c: 0 },
    { q: "The training says 'Problems get bigger with time, NOT smaller.' This principle most directly applies to which behavior?", o: ["Upgrading your tools regularly to prevent technical issues — this is the recommended approach based on current documentation and expert consensus in the field today", "Reporting a bug immediately when you discover it rather than hoping it will resolve itself — a 5-minute report prevents a 3-day crisis", "Scheduling preventive maintenance on all client websites", "Conducting weekly audits of all client projects for potential issues"], c: 1 },
    { q: "You've been trying to debug a payment gateway issue for 45 minutes with no progress. According to the 1-Hour Rule, you should:", o: ["Continue for 15 more minutes since you haven't hit the 1-hour threshold yet — implementing this correctly requires understanding the full context of how each operational element interacts", "Stop immediately and escalate — 45 minutes is close enough to the 1-hour limit", "Ask a team member with relevant expertise NOW — you're approaching the limit and should seek help before wasting more time", "Document what you've tried and schedule a meeting with a senior developer tomorrow"], c: 2 },
    { q: "A deadline is going to be missed. The SOP says you MUST communicate this to your manager:", o: ["In your EOD report with an explanation of what happened — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "At the same time as the deadline to give maximum effort first", "Within 1 hour of the missed deadline — this reflects standard operating procedure for most professional teams", "BEFORE the deadline passes — early communication gives the manager time to reassign, adjust expectations, or help"], c: 3 },
    { q: "An angry client is escalating because their project is late. According to the chain of command, the first contact is:", o: ["Your Team Lead — they handle client escalations before it reaches upper management", "The client directly — to apologize and promise faster delivery and ensures long-term operational sustainability", "The CEO — angry clients require top-level attention immediately", "The CS Manager — client success issues go directly to the CS team"], c: 0 },
    { q: "Why does the SOP distinguish between 'Internet/power outage' and other escalation scenarios?", o: ["Because outages are not the employee's fault and don't count as a performance issue — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Because outages require a different communication method — phone/mobile data instead of the usual Discord channel — since the normal tools may be unavailable", "Because outages automatically excuse the employee from all deadlines that day", "Because outages are handled by the IT department, not by team leads"], c: 1 },
    { q: "The 3-Part Problem Message format (WHAT happened, WHAT you tried, WHAT you need) exists because:", o: ["It ensures the problem is documented for legal purposes — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "It replaces the need for a follow-up meeting to discuss the issue", "It gives the responder everything needed to help immediately — without this structure, they waste time asking questions you could have answered upfront", "It's the standard format used in IT ticketing systems that the company uses"], c: 2 }
];

// TASK 11 QUIZ: FEEDBACK & CONTINUOUS IMPROVEMENT
const task12Quiz = [
    { q: "The training says 'Fix ONE thing per week instead of 10.' Why is this the better approach?", o: ["Because the company primarily approves one process change per week — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Because changing too many things at once triggers a mandatory performance review", "Because employees don't have time to fix more than one thing alongside their regular work", "Because fixing 10 things means nothing sticks — fixing ONE compounds to 52 improvements per year, creating fundamental transformation over time"], c: 3 },
    { q: "Radical Candor requires BOTH components to be present. What happens when someone challenges directly but doesn't care personally?", o: ["Obnoxious Aggression — they give harsh, unhelpful feedback like 'Your reports are terrible. Fix them.'", "Ruinous Empathy — they avoid giving feedback to protect your feelings and ensures long-term operational sustainability", "Manipulative Insincerity — they agree to your face but complain behind your back", "Radical Candor still applies — the 'caring' component is optional for constructive feedback"], c: 0 },
    { q: "When suggesting an SOP improvement, the 4-step process is:", o: ["Write the improvement yourself, test it, get approval, publish it — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Identify the specific section, describe the gap, propose the improvement, tell your manager", "Email the SOP improvement to the HR department for review", "Discuss it in the team meeting, vote on it, then update the SOP"], c: 1 },
    { q: "'Ruinous Empathy' means saying 'It's fine, don't worry about it' when quality is dropping. Why is this harmful?", o: ["Because it's dishonest — the person knows you don't really mean it and ensures long-term operational sustainability — this aligns with industry best practices and ensures c", "Because it makes other team members feel their high-quality work isn't valued — following this approach systematically prevents common mistakes and keeps the workflow predi", "Because it allows problems to grow unchecked — the person never gets the feedback they need to improve, and quality keeps declining until it becomes a crisis", "Because it violates the company's zero-tolerance policy for substandard work — this method has been validated through extensive testing and produces reliable repeatable out"], c: 2 },
    { q: "The weekly retrospective asks TWO questions. What's the SECOND one?", o: ["What did I learn this week?", "What new skills should I develop?", "How can I help my teammates next week?", "What broke or could be better?"], c: 3 },
    { q: "Why does the training say 'You're building the system that runs the company' when discussing SOP improvements?", o: ["Because frontline workers who suggest improvements are actively shaping the processes that affect every current and future team member — that's leadership at any level", "Because employees write all the SOPs from scratch without management input — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Because the company rotates SOP ownership among all employees quarterly", "Because SOP improvements directly increase the employee's performance review scores"], c: 0 },
    { q: "A manager says 'Sure, your design looks great' to your face, but tells the team lead it's terrible and needs redoing. This is:", o: ["Normal management behavior — they're protecting your feelings in the moment and ensures long-term operational sustainability", "Manipulative Insincerity — they don't care personally AND don't challenge directly, the worst quadrant", "Radical Candor — they're delegating the difficult feedback to the appropriate person", "Ruinous Empathy — they care too much about your feelings to be honest"], c: 1 },
    { q: "The Radical Candor framework's IDEAL quadrant (top-left) would look like which example?", o: ["'Your work is good, keep it up' — positive reinforcement motivates better than criticism and ensures long-term operational sustainability", "Silently fixing someone's work without telling them it was wrong", "'I noticed your EOD reports have been vague lately. Let me show you what a great one looks like.' — caring AND challenging directly", "'I've scheduled a formal review meeting to discuss your performance issues'"], c: 2 },
    { q: "After fixing ONE thing per week for 6 months, the training says you'll be:", o: ["Eligible for a promotion to team lead — this reflects standard operating procedure for most professional teams and ensures long-term operational sustainability", "Ready to start fixing 2 things per week in the next 6 months", "Qualified to train new team members on the improvement process", "Operating at a fundamentally different level than when you started — 26 compounded improvements transform your workflow"], c: 3 },
    { q: "Why should you look at your weekly retrospective answers BEFORE planning next week?", o: ["Because your past patterns reveal what works and what doesn't — planning without reflecting means repeating the same mistakes", "Because it's a required part of the Monday morning checklist — this aligns with industry best practices and ensures consistent results across different project contexts", "Because your manager will ask you about your retrospective in the weekly meeting", "Because the company tracks retrospective completion rates"], c: 0 }
];

// TASK 13 QUIZ: ORDER PIPELINE MANAGEMENT
const task13Quiz = [
    { q: "A new order arrives on the marketplace at 2:15 PM. According to the 30-Minute Rule, by what time must the intake process be complete?", o: ["2:45 PM — the intake must be completed within 30 minutes to avoid stealing execution time from the delivery deadline", "3:15 PM — one hour is acceptable for complex orders", "End of day — as long as it's processed before tomorrow", "Immediately — all orders must be processed within 5 minutes"], c: 0 },
    { q: "During the order intake phase, which piece of information is MOST critical for determining the assignment?", o: ["The client's marketplace username and account history", "The service type and scope — this determines which team and skill level is required to handle the order correctly", "The order value — higher-value orders always get priority", "The client's timezone — this affects communication scheduling"], c: 1 },
    { q: "An order has been assigned to a developer, but they haven't acknowledged it after 45 minutes. According to the pipeline protocol, what should you do?", o: ["Wait until the 1-hour mark — the SOP allows 60 minutes for acknowledgment", "Reassign the order to someone else immediately without contacting the original assignee", "Send a direct message AND call the developer — after 30 minutes without acknowledgment, escalation is required", "Post in the general channel asking if anyone else can take the order"], c: 2 },
    { q: "The operations coordinator checks active orders at 3 PM and finds one order with no EOD update from the previous day. This order should be classified as:", o: ["Low priority — the team member probably just forgot to update", "Normal — not every order needs daily updates during the execution phase", "Medium risk — send a reminder and check again tomorrow", "High risk — an order without daily updates is an order headed for trouble. Flag it and contact the assigned team member immediately."], c: 3 },
    { q: "What are the two daily pipeline check times for operations coordinators?", o: ["Morning at 10:30 AM and afternoon at 3:00 PM — reviewing all active orders for status and risk", "Start of day at 9:00 AM and end of day at 6:30 PM", "Before lunch at 12:00 PM and after lunch at 2:00 PM", "Every hour throughout the day — continuous monitoring is required"], c: 0 },
    { q: "A client's order has gone through 4 rounds of revisions. According to the bottleneck resolution protocol, this should trigger:", o: ["A discount offer to the client for the inconvenience", "Escalation to the Team Lead for scope review — revision loops exceeding 3 rounds indicate scope creep or a fundamental quality miss that needs senior intervention", "Reassignment to a more experienced team member", "Direct communication with the client to set expectations"], c: 1 },
    { q: "The Kickoff Message Format includes 7 fields. Which field is MOST often forgotten but causes the biggest downstream problems?", o: ["Client name — team members sometimes work on the wrong client's order", "Assigned team member — unclear ownership creates confusion", "Priority level and special requirements notes — without these, the team member may deprioritize a high-priority order or miss critical client preferences", "Deadline — team members estimate their own deadlines instead"], c: 2 },
    { q: "Your on-time delivery rate has dropped from 95% to 87% over the past month. Based on the training, what should you investigate FIRST?", o: ["Whether team members are taking too many breaks during the day", "Whether the client requirements have become more complex recently", "Whether the quality check process is creating unnecessary delays", "Intake-to-assignment time — late deliveries almost always start with slow assignments, not slow execution"], c: 3 },
    { q: "The order lifecycle at DH has 8 phases. Which phase creates the most value for preventing client complaints?", o: ["Quality Check (Phase 6) — catching issues before the client sees them prevents complaints, revision loops, and damage to the agency's reputation", "Delivery (Phase 7) — the moment of truth when the client receives their work", "Kickoff (Phase 4) — getting clarifying questions answered early prevents misunderstandings", "Closure (Phase 8) — the post-delivery review identifies what went wrong"], c: 0 },
    { q: "An order is marked 'Waiting on client for requirements' and has been stuck for 3 days. What is the correct operations response?", o: ["Close the order and tell the client to resubmit when they have requirements ready", "Send a structured requirements checklist to the client with specific questions. If no response within 24 hours, escalate through the client success team. Never let an order sit idle without active follow-up.", "Wait patiently — rushing clients leads to bad reviews on the marketplace", "Assign a team member to start working based on assumptions while waiting for clarification"], c: 1 },
    { q: "The pipeline metric 'Orders in Pipeline by Stage' shows 15 orders in Execution but only 1 in QC. What does this pattern suggest?", o: ["The team is working efficiently and orders are moving through quickly", "The QC team is doing a great job clearing their queue", "A bottleneck is forming — orders will pile up at QC when they all finish execution around the same time. Proactively add QC capacity or stagger delivery timelines.", "This is the normal distribution — most orders spend the longest time in execution"], c: 2 },
    { q: "Why does the training emphasize that the operations pipeline should be 'invisible'?", o: ["Because clients should not know about DH's internal processes for competitive reasons", "Because team members should not need to think about the pipeline — they just receive assignments and work", "Because management prefers automated systems that require no human oversight", "A smooth pipeline means no one notices it working — no bottlenecks, no missed deadlines, no scrambling. The moment people start noticing the pipeline, something is broken."], c: 3 }
];

// TASK 14 QUIZ: RESOURCE ALLOCATION & CAPACITY PLANNING
const task14Quiz = [
    { q: "A complex custom development order arrives. An L1 developer is available immediately, but an L3 developer can start in 4 hours. According to the Skills Matching principle, who should get the assignment?", o: ["The L3 developer — skill fit comes first over availability. An L1 spending 3 days on something an L3 finishes in 4 hours wastes 2.5 days of productivity and risks client dissatisfaction.", "The L1 developer — availability matters more than skill level for meeting deadlines", "Split the order between both developers to balance the workload", "The L1 developer with L3 oversight — this trains the junior while meeting the deadline"], c: 0 },
    { q: "A team member is at 95% capacity utilization. According to the workload balancing framework, this means:", o: ["They are performing optimally and should maintain this pace throughout the week", "They are overloaded — at 90%+ capacity, they risk burnout, quality drops, and missed deadlines. Redistribute upcoming orders to balance their load.", "They should work overtime to clear their queue before taking new orders", "They are slightly above the ideal range but can handle one more small order"], c: 1 },
    { q: "The healthy workload utilization range for a team member is:", o: ["50-70% — leaving buffer for unexpected work and meetings", "85-100% — maximizing productivity means keeping everyone fully loaded", "70-85% — enough buffer for meetings, admin, unexpected work, and quality without being idle or burned out", "90-95% — pushing capacity ensures maximum output from the team"], c: 2 },
    { q: "Order volume suddenly increases by 40% due to a marketplace promotion. According to the Surge Handling Protocol, this is a Level 2 surge. The correct response is:", o: ["Negotiate extended deadlines with all new clients to manage expectations", "Cancel low-priority internal projects to free up capacity", "Continue normal operations — the team can handle temporary spikes through extra effort", "Activate cross-trained team members who can flex into the high-demand service line, and extend work hours with management approval"], c: 3 },
    { q: "The Daily Capacity Check Process starts at 10:15 AM. What is the FINAL step of this process?", o: ["Post the daily capacity snapshot in the ops channel — this gives the entire team visibility into workload distribution and any imbalances that need attention", "Send a private report to management about team utilization", "Update the ClickUp workload view with current assignments", "Flag anyone above 90% utilization for immediate reassignment"], c: 0 },
    { q: "Cross-training serves a critical operations purpose. What is the primary strategic benefit?", o: ["It keeps team members engaged by learning new skills and prevents boredom", "It eliminates single points of failure — if every skill is held by only one person, a single absence creates a crisis. Cross-training creates redundancy.", "It reduces the need to hire specialized contractors during busy periods", "It allows operations to assign any order to any team member regardless of skill match"], c: 1 },
    { q: "A developer calls in sick and has 3 active orders due this week. The correct resource allocation response is:", o: ["Extend all 3 deadlines and inform the clients about the delay", "Ask the developer to work remotely despite being sick since the deadlines are critical", "Check the Skills Matrix for cross-trained developers who can take over. Redistribute the orders based on skill match and current capacity. Communicate the reassignment to all stakeholders.", "Wait one day to see if the developer recovers before taking action"], c: 2 },
    { q: "The Skills Matrix uses 4 levels (L1-L4). An L2 team member is described as someone who:", o: ["Can execute with guidance and needs review on all work before delivery", "Can handle architecture decisions and train other team members on best practices", "Owns the domain and sets quality standards for the entire service line", "Can execute independently with minimal review — they handle standard builds, customizations, and content creation without constant oversight"], c: 3 },
    { q: "When forecasting capacity for next week, what data sources should operations check?", o: ["Current pipeline (orders in progress), known incoming orders, team availability (leaves, meetings), and historical volume patterns — combining these gives an accurate demand picture", "Only the current ClickUp task list — everything else is speculation until orders actually arrive", "Last week's order volume — next week will likely be similar", "Management's revenue targets — capacity should match the company's growth goals"], c: 0 },
    { q: "A team member at 40% utilization has been underloaded for two weeks. Beyond assigning them more orders, what should operations also consider?", o: ["This is normal during slow periods and requires no additional action", "Assigning them cross-training tasks to build skills in adjacent service areas — underloaded periods are the ideal time for skill development that strengthens future capacity", "Reducing their work hours proportionally to match the lower demand", "Moving them to a different team permanently since their current team clearly doesn't need them"], c: 1 },
    { q: "The 'Cardinal Sin of Assignment' refers to which specific mistake?", o: ["Assigning an order to someone who is on leave without checking the calendar first", "Assigning an order without sending the proper Kickoff Message in the team channel", "Assigning an L1 (junior) to a complex order just because they are available — the skill mismatch wastes more time and money than waiting for a qualified person", "Assigning the same team member to more than 5 orders simultaneously"], c: 2 }
];

// TASK 15 QUIZ: PROCESS AUTOMATION & SOPs
const task15Quiz = [
    { q: "The Automation Hierarchy lists 5 levels. What is the BEST (most desirable) level?", o: ["Eliminate — if a task can be removed entirely, that is the best outcome. Zero time spent is always better than reduced time spent.", "Automate — having a tool do the work without human input is the ideal solution", "Template — pre-building 80% of the work and customizing 20% is the most practical approach", "Checklist — ensuring consistency is more important than saving time"], c: 0 },
    { q: "An SOP that hasn't been updated in 8 months is described in the training as:", o: ["Still valid — SOPs are foundational documents that don't change frequently", "Worse than having no SOP at all — an outdated SOP teaches people the wrong process, creating errors that wouldn't happen if they used their judgment instead", "Acceptable as long as the core process hasn't changed significantly", "Fine as long as team members know which parts to ignore"], c: 1 },
    { q: "The SOP documentation standard requires 6 sections. Which section describes the if/then logic for branching scenarios?", o: ["Steps — numbered actions with expected outcomes for each process stage", "Trigger — the event that initiates the process in the first place", "Decision Points — if/then logic that handles different scenarios, such as escalating high-budget orders to Team Lead", "Output — what the completed process produces and who receives it"], c: 2 },
    { q: "A 5-minute automation runs 20 times per week. The training calculates the annual time savings as:", o: ["About 40 hours — substantial but not transformative in the grand scheme of operations", "About 50 hours — roughly one full work week saved per year from this single automation", "About 65 hours — equivalent to about 8 work days saved per year", "Over 86 hours — more than two full work weeks per year. Small automations compound into massive savings."], c: 3 },
    { q: "The checklist design principle 'Keep it under 10 items' exists because:", o: ["More than 10 items causes people to start skipping steps — attention drops with length. Split long checklists into sub-checklists if needed.", "ClickUp's checklist feature only supports 10 items per task by default", "10 items is the maximum that fits on a single printed page for reference", "Managers don't have time to review checklists longer than 10 items"], c: 0 },
    { q: "Which ClickUp automation example is given in the training?", o: ["When a task is created, automatically assign it to the operations coordinator for initial review", "When task status changes to 'Ready for QC', automatically assign the task to the QC reviewer — this removes manual handoff and prevents orders from sitting between stages", "When a task is overdue, automatically send a notification to the team lead and the CEO", "When a new team member is added, automatically create their onboarding checklist"], c: 1 },
    { q: "Before you can automate any process, you must first:", o: ["Get approval from management for the automation budget and implementation timeline", "Build a prototype in Google Sheets to test the automation logic before moving to production", "Document exactly how the process works today in an SOP — you cannot automate what you don't fully understand. The SOP is the blueprint for automation.", "Survey the team to understand their pain points and preferences for the new automated workflow"], c: 2 },
    { q: "The Order Handoff Checklist example includes 6 items. What is the purpose of the final item ('Set reminder for first progress check')?", o: ["It ensures the team member starts working on the order within 24 hours of receiving it", "It creates a paper trail proving the operations coordinator did their job correctly", "It helps the operations coordinator remember to check on the order the next day", "It creates a proactive follow-up loop — without it, an order could silently stall for days. The 24-hour check catches problems early when they're cheapest to fix."], c: 3 },
    { q: "Measuring automation impact requires tracking 4 metrics. Which metric best indicates whether an automation is PREVENTING ERRORS?", o: ["Error reduction — tracking how many manual errors the automation has prevented compared to the previous manual process", "Time saved per occurrence — showing the efficiency gain from each automation run", "Frequency — demonstrating how often the automation fires per week", "Total weekly savings — combining time and frequency into a single productivity number"], c: 0 },
    { q: "The SOP Decay Problem is most effectively solved by:", o: ["Assigning a dedicated SOP manager who owns all documentation company-wide", "Quarterly audits where operations reviews every SOP and updates anything that no longer matches reality — processes evolve, tools change, and outdated SOPs teach wrong methods", "Requiring team members to report SOP inaccuracies whenever they notice them", "Rewriting all SOPs from scratch every 6 months to ensure freshness"], c: 1 },
    { q: "A team member says 'I prefer doing things my own way rather than following the checklist.' Based on the training, what is the fundamental problem with this approach?", o: ["They will be fired for insubordination and refusal to follow company procedures", "Their personal preference is irrelevant — they are required to follow all company procedures without question", "Inconsistency creates unpredictable outcomes — checklists ensure the same quality every time regardless of who performs the task. Personal methods may work sometimes but fail under pressure.", "They should be allowed to develop their own method as long as the output quality is equivalent"], c: 2 }
];

// TASK 16 QUIZ: VENDOR & TOOL MANAGEMENT
const task16Quiz = [
    { q: "A single unused subscription at $49/month costs the company how much per year?", o: ["$588 per year — and multiply by 10 forgotten tools, that is nearly $6,000 annually going to tools nobody uses", "About $500 per year — significant but manageable for most companies", "Approximately $600 per year — equivalent to about half a month of one employee's salary", "Nearly $1,000 per year when you include tax and transaction fees"], c: 0 },
    { q: "The 5-Point Vendor Evaluation framework starts with 'Problem Fit.' Why is this the first criterion?", o: ["Because management requires a documented business case before approving any new tool purchase", "Because if the tool doesn't solve a real, documented problem, nothing else matters — a solution looking for a problem is always a waste of money regardless of how good the tool is", "Because problem fit is the easiest criterion to evaluate and saves time by filtering out unsuitable tools early", "Because the company has a strict policy against adopting tools without a formal problem statement"], c: 1 },
    { q: "Operations discovers a tool license holder hasn't logged in for 35 days. According to the license management protocol, this license should be:", o: ["Automatically revoked — any unused license wastes company resources without exception", "Kept active for another month in case they need it for an upcoming project", "Flagged for review — the 30-day threshold triggers investigation. Maybe they need retraining, maybe the license should be reassigned. But it must not be ignored.", "Transferred to a new hire who might benefit from the tool"], c: 2 },
    { q: "When evaluating whether to switch from monthly to annual billing for a tool, the key consideration is:", o: ["Annual plans always save money, so the switch should be automatic for every tool in the stack", "Monthly billing is always better because it provides flexibility to cancel anytime without financial loss", "The savings typically don't justify the commitment risk for newer tools still being evaluated", "Annual plans save 15-20%, but only switch when the tool is confirmed essential — locking into an annual plan for a tool you might stop using is worse than paying the monthly premium"], c: 3 },
    { q: "The Quarterly Tool Stack Review presents which information to management?", o: ["Total monthly spend and trend, tools added/removed, utilization rates, cost-saving opportunities, and new tool proposals with business cases — this gives management a complete view of the tool stack health", "A list of all tools currently in use with their monthly costs and the number of users per tool", "Recommendations for new tools to adopt based on industry trends and competitor analysis", "A comparison of DH's tool stack against industry benchmarks and best practices from similar agencies"], c: 0 },
    { q: "The 'Exit Strategy' criterion in vendor evaluation protects against which specific risk?", o: ["The risk of the vendor increasing prices after you become dependent on their platform", "Vendor lock-in — if you cannot export your data when switching vendors, you are trapped even if a better or cheaper alternative appears. Always verify data portability before committing.", "The risk of the vendor going out of business and losing your data permanently", "The risk of security breaches at the vendor's data centers affecting your client information"], c: 1 },
    { q: "Two tools in the stack have overlapping features. Tool A costs $30/month and does tasks X, Y, Z. Tool B costs $25/month and does tasks Y, Z, W. If one tool doing 80% of both tools' work is acceptable, what is the recommended approach?", o: ["Keep both tools — the unique features (X and W) justify the combined $55/month cost since each tool serves a specific need", "Cancel both and find a single tool that does X, Y, Z, and W — complete coverage is the goal", "Evaluate which unique feature (X vs W) is more critical, keep that tool, and cancel the other — one tool doing 80% of both is better than paying for duplicate functionality", "Keep both but negotiate lower prices for each since neither is being used to full capacity"], c: 2 },
    { q: "Auto-renewal traps are prevented by which specific operations practice?", o: ["Setting all subscriptions to manual renewal by default when first subscribing to the service", "Requiring two levels of management approval for any subscription that costs more than $100/month", "Using a company credit card with spending limits that block charges above a certain threshold", "Maintaining a renewal calendar with alerts 30 days before each renewal date — this gives time to evaluate, negotiate, or cancel before the charge hits"], c: 3 },
    { q: "The training says the goal of vendor management is NOT to minimize tools but to:", o: ["Maximize value per dollar spent — a $200/month tool saving 40 hours is a bargain, while a $20/month tool nobody uses is waste. Focus on ROI, not raw cost.", "Ensure every team member has access to every tool they might possibly need for any task", "Keep the total tool count under a specific number defined by the company's IT policy", "Standardize on a single vendor ecosystem to simplify integration and reduce administrative overhead"], c: 0 },
    { q: "Before any vendor renewal, operations should:", o: ["Automatically approve the renewal if the tool has been used in the past quarter", "Check competitor pricing — vendors often offer discounts to retain customers. Never renew without at least checking if a better deal is available.", "Survey all users of the tool to confirm they want to keep using it for the next billing cycle", "Require the vendor to provide an updated feature roadmap before committing to renewal"], c: 1 },
    { q: "The Master Tool Registry maintained by operations should include which critical detail that is MOST often overlooked?", o: ["The name of the person who originally requested the tool and the date it was added to the stack", "The specific use cases and workflows that depend on each tool in the daily operations process", "Review frequency — each tool category has a defined review cadence (monthly for security, quarterly for most, semi-annually for specialized). Without scheduled reviews, tools drift into irrelevance unchecked.", "The vendor's customer support contact information and escalation paths for critical issues"], c: 2 }
];

// TASK 17 QUIZ: CAREER GROWTH & CERTIFICATION
const task17Quiz = [
    { q: "The DH Operations Career Ladder has 4 levels. An Operations Coordinator (L2) is expected to handle which responsibilities?", o: ["Pipeline management, resource allocation, and reporting — this is the stage where you move from executing processes to managing them across the team", "Following SOPs and processing individual orders with daily tracking and status updates", "Process optimization, team oversight, and vendor management at a strategic level", "Strategic planning, scaling systems, and cross-department leadership for the entire operations function"], c: 0 },
    { q: "The monthly portfolio update ritual recommends spending how much time, and on which specific day?", o: ["15 minutes every Monday morning before the weekly planning session begins", "30 minutes on the last Friday of every month — this ensures your portfolio is always current with recent achievements, metrics, and learnings when review time comes", "1 hour at the end of each quarter during the formal performance review preparation period", "20 minutes every Sunday evening as part of weekly planning and reflection time"], c: 1 },
    { q: "Your operations portfolio should include 5 categories of documented impact. Which category MOST directly demonstrates leadership potential?", o: ["Process improvements with before/after metrics showing measurable operational gains", "Cost savings quantified in dollars through vendor negotiations and license optimization", "Team Impact — documenting how your work made other people's jobs easier or faster shows you think beyond your own role and create value for the entire organization", "Pipeline metrics showing consistent on-time delivery rates and quality scores over time"], c: 2 },
    { q: "The training describes operations professionals as 'T-shaped.' What does this mean?", o: ["They follow a strict career path shaped like the letter T — one direction up (management) or across (specialization)", "They spend most of their time on one task (the vertical bar) and briefly touch many others (the horizontal bar) each day", "They should switch between specialization tracks every few months to maintain breadth across all areas", "Deep expertise in one specialization track (the vertical bar) with broad knowledge across all operations functions (the horizontal bar) — DH training provides breadth, specialization provides depth"], c: 3 },
    { q: "Which external certification is described as 'directly applicable to daily work' at DH?", o: ["ClickUp Expert Certification — free from ClickUp University, it covers the project management tool DH uses every day for task tracking and workload management", "Google Project Management Certificate — covers lifecycle management fundamentals", "Lean Six Sigma White Belt — teaches process improvement methodology", "HubSpot Operations Hub Certification — covers operations automation"], c: 0 },
    { q: "The equity advantage section connects career growth to company growth. The key insight is:", o: ["Operations managers receive a higher equity percentage than other roles due to their strategic importance", "As the company grows toward the revenue target, your equity stake grows with it — every process you optimize, every automation you build, compounds into personal wealth", "Equity is only meaningful if you stay at the company for more than 5 years and reach the Head of Operations level", "The equity model replaces traditional bonuses and salary increases for operations team members"], c: 1 },
    { q: "The Process Excellence specialization track focuses on which skills?", o: ["HR basics, conflict resolution, and training design for people-focused operations roles", "Project management, stakeholder management, and analytics for client-facing coordination", "SOP design, workflow automation, and documentation — using methodologies like Six Sigma to build and optimize processes", "Technical aptitude, vendor management, and cost analysis for systems-focused operations"], c: 2 },
    { q: "At DH, promotions are based on which primary criterion?", o: ["Years of tenure with the company and consistent attendance records over time", "Manager recommendations based on attitude, teamwork, and cultural fit assessments", "Scores on the quarterly performance review surveys completed by peers and managers", "Documented impact — your operations portfolio showing measurable improvements, not just time spent in the role"], c: 3 },
    { q: "The Operations Trainee (L1) role is expected to span which timeline?", o: ["Month 1-3 — this is the learning phase where you follow SOPs, process orders, and build daily tracking habits before progressing to coordination responsibilities", "Month 1-6 — the first six months are entirely dedicated to learning the systems before taking ownership", "Month 1-2 — high-performing trainees can progress to coordinator within 8 weeks", "The timeline varies entirely based on individual performance and has no standard benchmark"], c: 0 },
    { q: "The People Operations specialization track would be ideal for someone who excels at:", o: ["Building automated workflows and integrating third-party tools with existing systems", "Writing detailed SOPs and designing process improvement frameworks for the team", "Team coordination, onboarding new hires, and performance tracking — they enjoy working with people and building team effectiveness", "Analyzing data, managing vendor relationships, and optimizing the tool stack for cost efficiency"], c: 2 },
    { q: "How does the training connect DH's revenue journey (₹9.2 Crores to ₹75 Crores) to operations career growth?", o: ["Operations roles will be automated away as the company grows, so career growth means transitioning to other departments", "Revenue growth means more operations staff will be hired, creating promotion opportunities through expanded team size", "As the company scales, the operations team that builds the systems enabling that growth becomes indispensable — your skills and equity grow proportionally with the company's success", "The revenue target is aspirational and does not directly affect individual career trajectories or compensation"], c: 2 }
];

// TASK 18 QUIZ: FINAL CERTIFICATION (20 questions pulling from all tasks)
const task18Quiz = [
    { q: "It's 10:50 AM. You're sick and won't work today. You haven't posted anything yet. What's the correct action?", o: ["Post your start time first, then post a leave request", "Post a leave request ASAP — you need to post BEFORE 11 AM start time deadline AND before 12 PM leave deadline. Format: 'Leave - [today's date] - Reason: Not feeling well'", "Message your manager directly on Discord — formal leave requests aren't needed for sick days", "Wait until you feel better to decide if you need the whole day off"], c: 1 },
    { q: "Your response time SLA changes based on WHO messaged you. Put these in correct order from FASTEST required response to SLOWEST:", o: ["CEO (immediate) → Client (15min) → Lead (30min) → Colleague (1hr)", "Client (immediate) → CEO (5min) → Lead (10min) → Colleague (30min)", "CEO (5min) → Lead (10min) → Colleague (30min) → Client (1hr)", "All messages have the same 30-minute response SLA regardless of sender"], c: 2 },
    { q: "Your colleague shares a client's store password via Discord DM to save time. You know the step they missed. What's the FULL correct procedure they should have followed?", o: ["It's fine for one-time sharing between trusted colleagues — just delete the message after and ensures long-term operational sustainability — teams that adopt this strategy report fewer i", "Share via encrypted email, confirm receipt, enable 2FA — this is the recommended approach based on current documentation and expert consensus in the field today", "Delete the message, pretend it didn't happen, and reshare via password manager — implementing this correctly requires understanding the full context of how each operational element inter", "Share via password manager's secure sharing feature. Since they already shared via insecure method: change the password, share the new one securely, enable 2FA if not set."], c: 3 },
    { q: "A team member works 12 hours on one day, then takes the next day off without posting a leave request. Based on the training, they violated:", o: ["The 'Consistency > Intensity' principle AND the leave request protocol — sporadic bursts disrupt team coordination, and leave must be posted before 12 PM", "The leave request protocol — the 12-hour day is fine — this is the standard approach and ensures long-term operational sustainability — taking this route minimizes risk", "The Consistency principle — taking leave after a long day is understandable — this is the standard approach — this ensures compliance with professional standards and pr", "No rules were violated if they completed their assigned tasks during the 12-hour day — experienced professionals recognize this as the most reliable path for maintainin"], c: 0 },
    { q: "You discover a bug in a client's live checkout page at 4:45 PM on Friday. Walk through the correct escalation:", o: ["Log it in the bug tracker and assign it for Monday morning — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient — this approach balances thoroughness with efficiency whic", "Contact Team Lead + the Developer on the project immediately (it's a live site issue). If no response in 15 minutes, go directly to Management/CEO. Use the 3-part message: WHAT happened, WHAT you tried, WHAT you need.", "Message the client to let them know there's an issue and you'll fix it Monday — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Fix it yourself first, then tell the team about it in your EOD report — this methodology accounts for edge cases and variations that commonly cause confusion during implementation"], c: 1 },
    { q: "The SOP says 'Discord is HQ.' What specific DAILY requirements does this create?", o: ["Open Discord for at least 4 hours during work hours — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Check Discord 3 times per day: morning, lunch, and EOD", "Open Discord all day, respond within role-based SLAs, keep notifications ON, have it installed on phone for emergencies", "Be available on Discord primarily during the meetings block (4-5 PM)"], c: 2 },
    { q: "You need to leave early at 3 PM for a family emergency. Walk through the correct protocol:", o: ["Just leave and explain tomorrow — emergencies don't require protocol and ensures long-term operational sustainability — this aligns with industry best practices and ensures consistent r", "Mark it as a half-day in the HR system and log off — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Message your manager privately and ask for permission to leave — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Post in team channel immediately explaining the situation, send your EOD report BEFORE 3 PM with what you completed, check Discord once in the evening for urgent messages"], c: 3 },
    { q: "Your EOD report says: 'Riya Sharma — StyleHaven: Worked on products today, almost done. No issues.' What's WRONG with this report?", o: ["It lacks the required specifics: how MANY products? What percentage complete? What's the ETA? Where's the store link and password? 'Almost done' and 'no issues' are vague.", "The format is wrong — it needs to be submitted through the project management tool, not Discord and ensures long-term operational sustainability — teams that adopt this strategy report f", "It should also include a Loom video walkthrough — this is the recommended approach based on current documentation and expert consensus in the field today", "Nothing — it mentions the client name, employee name, and progress — implementing this correctly requires understanding the full context of how each operational element interacts"], c: 0 },
    { q: "The 80/20 Rule, Deep Work Blocks, and Eat the Frog are all connected. Explain the connection:", o: ["They're three separate productivity frameworks that should each be applied on different days — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "80/20 identifies your most impactful task → Deep Work Block 1 protects time for it → 'Eat the Frog' means doing it FIRST when your brain is freshest. The three tools work together as one system.", "They're different names for the same concept — doing important work first", "80/20 applies to weekly planning, Deep Work to daily scheduling, and Eat the Frog to hourly prioritization"], c: 1 },
    { q: "A Finance team member needs to handle a client billing dispute. They check the Developer SOP by mistake. What's the fundamental issue?", o: ["The Finance member should escalate to their manager instead of checking any SOP — this is the recommended approach based on current documentation and expert consensus in the field today", "Developer SOPs are confidential and shouldn't be accessed by Finance team members", "Each role's SOP contains processes specific to that function — following the wrong SOP means applying the wrong framework to the problem. Finance follows Daily SOP + Finance SOP.", "There's no issue — all client-related processes are standardized across SOPs"], c: 2 },
    { q: "You notice the Daily SOP doesn't cover what happens when multiple team members are out sick on the same day. The correct action is:", o: ["Email the CEO suggesting a policy update — implementing this correctly requires understanding the full context of how each operational element interacts — taking this route minim", "Bring it up in the next team meeting for group discussion — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Wait for it to actually happen, then improvise and document the solution afterward — experienced professionals recognize this as the most reliable path for maintaining quality co", "Identify the specific gap, propose a solution (e.g., 'Add an emergency coverage protocol for multiple absences'), and tell your manager — SOPs are living documents"], c: 3 },
    { q: "It's 2 PM. You've been stuck on a complex coding problem for 55 minutes. The 1-Hour Rule says:", o: ["Start looking for help NOW — you should actually ask for help before hitting the full hour. Ask a teammate with relevant expertise first, then escalate to Team Lead.", "You still have 5 minutes — use them wisely and ensures long-term operational sustainability — this approach balances thoroughness with efficiency which is critical for meeting tigh", "Reset the 1-hour timer since you might be getting close to a solution — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Log the blocker in your EOD report and move to a different task — this methodology accounts for edge cases and variations that commonly cause confusion during implementation"], c: 0 },
    { q: "The 'interconnected chain' concept means which of the following scenarios is true?", o: ["If the Sales team closes a deal but the Developer delivers poor quality work, happy clients are still achievable through good CS — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Each link in the chain (Sales → Quality Work → Happy Clients → CS → Reviews → More Enquiries) is only as strong as its weakest link — one breakdown cascades through the entire system", "The chain primarily applies to client-facing roles like Sales and Client Success", "The chain metaphor is aspirational — individual roles can succeed independently of others"], c: 1 },
    { q: "A new employee asks: 'Why can't I just take a half-day on Tuesday? I only have a 2-hour appointment.' The correct explanation is:", o: ["Half-days create scheduling conflicts in the HR payroll system — this ensures compliance with professional standards and prevents cascading issues in downstream processes — this aligns with industry best practices and ensures consistent results across d", "They can take a half-day if they get written approval from their manager — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Half-days don't exist (except Saturday) because they create confusion about availability — the team doesn't know if you're working or not, which task assignment depends on. Take the full day or schedule the appointment outside work hours.", "Half-days are allowed for appointments under 3 hours — this is an exception case — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams"], c: 2 },
    { q: "The file naming convention is YYYY-MM-DD_ClientName_ProjectName_Type. A designer saves a file as 'homepage_v3_FINAL.psd.' What's wrong?", o: ["The file extension should be .fig or .sketch, not .psd — experienced professionals recognize this as the most reliable path for maintaining quality control standards — teams that adopt this strategy report fewer issues and more efficient projec", "Nothing is wrong — the word 'FINAL' makes the version clear enough — this is the recommended approach based on current documentation and expert consensus in the field today", "Version numbers (v3) aren't allowed in the naming convention — implementing this correctly requires understanding the full context of how each operational element interacts", "It's missing the date prefix, client name, and project name — any team member finding this file later can't identify when it was made, for which client, or which project. It should be: 2026-02-20_StyleHaven_Homepage_Mockup_v3.psd"], c: 3 },
    { q: "You give a colleague feedback: 'Your reports are terrible. Fix them.' According to the Radical Candor framework, this is:", o: ["Obnoxious Aggression — you challenged directly BUT without caring personally. The Radical Candor version would be: 'I noticed your reports have been vague. Let me show you what a great one looks like.'", "Ruinous Empathy — you should have been gentler and ensures long-term operational sustainability — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Manipulative Insincerity — you're being fake about wanting them to improve — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Radical Candor — you challenged them directly — experienced professionals recognize this as the most reliable path for maintaining quality control standards"], c: 0 },
    { q: "The SOP requires early communication when a deadline will be missed. At 2 PM, you know you'll miss the 5 PM deadline. What makes this 'damage prevention' vs. the alternative?", o: ["Both 2 PM and 5 PM communication are equivalent as long as you explain the reason — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines — this approach balances thoroughness with eff", "Telling the manager at 2 PM gives them 3 hours to reassign, adjust client expectations, or help — options that don't exist at 5:01 PM when the deadline is already blown. Prevention provides options; control forces scrambling.", "The term 'damage prevention' primarily applies to client-facing deadlines, not internal ones — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Communicating at 2 PM vs 5 PM makes no practical difference if the deadline was going to be missed anyway — this methodology accounts for edge cases and variations that commonly cause confusion during implementation"], c: 1 },
    { q: "Combining everything: It's Tuesday 10:45 AM. You woke up with a migraine and can't work. You haven't posted anything yet. What's the COMPLETE correct sequence?", o: ["Message your manager privately, then take the day off", "Call the office and inform them verbally, then follow up with a written message when you feel better", "1) Post start time/leave request BEFORE 11 AM (format: 'Leave - [date] - Reason: Migraine, unable to work'). 2) Full day leave — no half-days. 3) Check Discord ONCE in the afternoon for urgent messages.", "Post a leave request in Discord before noon, that's all that's required"], c: 2 },
    { q: "The weekly retrospective's TWO questions are designed to create which outcome?", o: ["A weekly report for management to review — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed — this aligns with industry best practices and e", "A way to compare your productivity with other team members — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "A record for performance reviews at the end of the quarter — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "A feedback loop — 'what went well' reveals what to keep, 'what broke' reveals what to fix. One improvement per week compounds to a fundamentally different performance level in 6 months."], c: 3 },
    { q: "A brand new intern and a 5-year veteran both follow the same Daily SOP. Why doesn't the company have different SOPs for different experience levels?", o: ["Because the Daily SOP sets the FLOOR OF EXCELLENCE — it's the minimum standard, not the ceiling. Experienced employees follow the same baseline but bring more skill to execution. The system ensures even Day 1 employees operate professionally.", "Because the SOP was designed for beginners and senior employees are expected to follow it as a courtesy — this methodology accounts for edge cases and variations that commonly cause confusion during implementation — teams that adopt this strategy report few", "Because all employees at Digital Heroes have the same responsibilities regardless of seniority — this is the recommended approach based on current documentation and expert consensus in the field today", "Because creating separate SOPs would be too expensive and time-consuming — implementing this correctly requires understanding the full context of how each operational element interacts"], c: 0 }
];

// ============================================================
// MASTER QUIZ ARRAY — Maps task index to quiz array
// ============================================================


// Expose content and quiz variables to window for app lookup

// Expose all content and quiz variables to window for app lookup
window.task1Content = task1Content;
window.task2Content = task2Content;
window.task3Content = task3Content;
window.task4Content = task4Content;
window.task5Content = task5Content;
window.task6Content = task6Content;
window.task7Content = task7Content;
window.task8Content = task8Content;
window.task9Content = task9Content;
window.task10Content = task10Content;
window.task11Content = task11Content;
window.task12Content = task12Content;
window.task13Content = task13Content;
window.task14Content = task14Content;
window.task15Content = task15Content;
window.task16Content = task16Content;
window.task17Content = task17Content;
window.task18Content = task18Content;
window.task1Quiz = task1Quiz;
window.task2Quiz = task2Quiz;
window.task3Quiz = task3Quiz;
window.task4Quiz = task4Quiz;
window.task5Quiz = task5Quiz;
window.task6Quiz = task6Quiz;
window.task7Quiz = task7Quiz;
window.task8Quiz = task8Quiz;
window.task9Quiz = task9Quiz;
window.task10Quiz = task10Quiz;
window.task11Quiz = task11Quiz;
window.task12Quiz = task12Quiz;
window.task13Quiz = task13Quiz;
window.task14Quiz = task14Quiz;
window.task15Quiz = task15Quiz;
window.task16Quiz = task16Quiz;
window.task17Quiz = task17Quiz;
window.task18Quiz = task18Quiz;

const allQuizzes = [
    task1Quiz,
    task2Quiz,
    task3Quiz,
    task4Quiz,
    task5Quiz,
    task6Quiz,
    task7Quiz,
    task8Quiz,
    task9Quiz,
    task10Quiz,
    task11Quiz,
    task12Quiz,
    task13Quiz,
    task14Quiz,
    task15Quiz,
    task16Quiz,
    task17Quiz,
    task18Quiz
];









