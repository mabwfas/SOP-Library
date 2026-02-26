// Shopify Developer Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program
// 13 Tasks, 150+ Quiz Questions, Deep Content

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "Developer Mindset",
        description: "Code that SELLS - Your work touches money",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Read ALL content sections completely",
            "🎯 Understand: The $50,000/day reality",
            "🧠 Learn: Zero Tolerance Philosophy"
        ]
    },
    {
        id: 3,
        title: "Platform Fundamentals",
        description: "Shopify Architecture Deep Dive",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🏗️ Master: Online Store 2.0 Architecture",
            "🛍️ Understand: Product/Variant/Metafield hierarchy",
            "🌍 Learn: Multi-Currency & International setup"
        ]
    },
    {
        id: 4,
        title: "Theme Architecture",
        description: "Dawn/Prestige Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🎨 Rule: NEVER edit Live Theme",
            "🏠 Learn: 12 Essential Homepage Sections",
            "📱 Master: Mobile-First Development"
        ]
    },
    {
        id: 5,
        title: "Liquid Programming",
        description: "Deep Dive into Shopify's Language",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "💻 Master: Objects, Tags, Filters",
            "🔄 Practice: Loops & Conditionals",
            "🧱 Learn: Metafields & JSON Schemas"
        ]
    },
    {
        id: 6,
        title: "Product Page Optimization",
        description: "High-Conversion PDPs",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "🛒 Master: Above-the-Fold Anatomy",
            "📸 Learn: Media Gallery Best Practices",
            "🧩 Build: Custom Liquid Blocks"
        ]
    },
    {
        id: 7,
        title: "Speed Optimization",
        description: "Core Web Vitals Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "⚡ Target: Mobile 85+, Desktop 90+",
            "🖼️ Learn: Image Optimization & WebP",
            "📜 Master: Script Deferral & Lazy Loading"
        ]
    },
    {
        id: 8,
        title: "Apps & Integrations",
        description: "The Healthy App Stack",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔌 Rule: Max 5-8 Apps Only",
            "🗑️ Process: Clean Uninstall Protocol",
            "⚠️ Learn: App Conflict Resolution"
        ]
    },
    {
        id: 9,
        title: "Checkout & Policies",
        description: "Trust & Transaction Setup",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "💳 Configure: Payment Gateways",
            "📦 Setup: Shipping Profiles",
            "📜 Create: All Required Policy Pages"
        ]
    },
    {
        id: 10,
        title: "QA & Testing",
        description: "The 60-Point Quality Gate",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "🕵️‍♀️ Master: Cross-Browser Testing",
            "📱 Learn: Real Device Testing (iOS/Android)",
            "🐞 Practice: Console Error Diagnosis"
        ]
    },
    {
        id: 11,
        title: "Troubleshooting",
        description: "Debugging Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔧 Tool: Theme Inspector Pro Usage",
            "🐛 Learn: The 7-Step Debug Decision Tree",
            "🚨 Master: Error Log Interpretation"
        ]
    },
    {
        id: 12,
        title: "Crisis Management",
        description: "Handling Dev Emergencies",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔥 Scenario: Site Down Protocol",
            "🔥 Scenario: Data Loss Recovery",
            "🔥 Scenario: Angry Client Communication"
        ]
    },
    {
        id: 13,
        title: "AI-Powered Development",
        description: "Coding with AI Copilots",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🤖 Tool: ChatGPT for Liquid Code",
            "🤖 Tool: GitHub Copilot Integration",
            "⚠️ Critical: AI Code Verification Process"
        ]
    },
    {
        id: 14,
        title: "Career Growth & Final Exam",
        description: "Junior to Expert Path",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🌱 Path: Junior → Mid → Senior → Lead",
            "📚 Learn: Continuous Learning Strategy",
            "🎓 Complete: Final Certification Exam"
        ]
    }
];

// =============================================================================

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

// TASK 1: DEVELOPER MINDSET - THE $50,000/DAY REALITY
// =============================================================================
const task2Content = `
<h2>📚 PART 1: THE FOUNDATION - Code That SELLS</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into development techniques, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #F472B6; font-size: 1.2em;">⭐ YOU (Developer)</strong> → <strong>THE ENGINE - deliver quality work that drives satisfaction</strong><br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #60A5FA;">CS Team</strong> → protects satisfaction<br>
            ↓<br>
            <strong style="color: #A78BFA;">5-Star Reviews</strong> → boost algorithm positioning<br>
            ↓<br>
            <strong style="color: #FBBF24;">More Enquiries</strong> → the cycle continues
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-left: 4px solid #EC4899; padding: 15px; margin: 15px 0;">
        <strong style="color: #F472B6;">⚙️ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a developer, you are the <strong>ENGINE</strong> of Digital Heroes. When you deliver a flawlessly optimized website with 95+ PageSpeed scores, you're not just completing a technical task—you're creating client satisfaction that generates 5-star reviews, which boost our algorithm positioning, which brings more enquiries, which creates more opportunities for everyone. Your code touches REAL money. Every. Single. Day.</p>
    </div>
    
    <p style="color: #F472B6; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No quality development = No reviews = No algorithm boost = Chain breaks. You ARE the backbone.</p>
</div>

<div class="content-section">
    <h3>🎯 Why Are You Here?</h3>
    <p>You're about to learn a skill that can change your entire career. Development is not just a job — it's the <strong>backbone of e-commerce revenue</strong>.</p>
    <ul>
        <li>❌ Anyone can write code that "works"</li>
        <li>❌ Anyone can copy from Stack Overflow</li>
        <li>❌ Anyone can install apps</li>
        <li>✅ Only <strong>Digital Heroes Developers</strong> write code that <strong>SELLS</strong></li>
    </ul>
    <div class="warning-box">
        <strong>⚠️ The Uncomfortable Truth:</strong><br>
        95% of Shopify developers focus on making things look pretty. The top 5% focus on making things <strong>convert</strong>. You're reading this because someone saw potential in you to be in that 5%. The question is: <strong>Do you have what it takes?</strong>
    </div>
</div>

<div class="content-section">
    <h3>💰 The $50,000/Day Difference</h3>
    <p>A "coder" writes lines that work mechanically. A "<strong>Digital Heroes Developer</strong>" writes code that drives revenue.</p>
    <div class="highlight-box">
        <strong>Real Story from Our Agency:</strong>
        <p>A previous developer saved 200KB of JavaScript by removing "unnecessary" code. Sounds good, right?</p>
        <p><strong>The Problem:</strong> He broke the "Add to Cart" button on iPhones. The client's store was making $50,000/day. For 12 hours, no iPhone user could purchase.</p>
        <p style="color: #EF4444; font-size: 1.2em; font-weight: bold;">Revenue Lost: $25,000+ in ONE incident</p>
        <p><strong>Lesson:</strong> Reliability > Cleverness. Your code touches REAL money. Every. Single. Day.</p>
    </div>
</div>

<div class="content-section">
    <h3>👤 The Two Types of Developers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚶 Type 1: The Script Kid</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Copy-pastes from tutorials<br>
                • Thinks "it works on my machine"<br>
                • Quits when bugs appear<br>
                • Blames Shopify, themes, apps<br>
                <em style="color: #EF4444;">Will be replaced by AI ❌</em>
            </td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎓 Type 2: The Revenue Developer</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Understands WHY code works<br>
                • Tests on real devices before shipping<br>
                • Debugs systematically, fixes root cause<br>
                • Takes ownership of results<br>
                <em style="color: #10B981;">Will command $100+/hour ✅</em>
            </td>
        </tr>
    </table>
    <div class="highlight-box">
        <strong>Which one are you?</strong> The answer isn't what you say. It's what you <strong>DO</strong> when no one is watching.
    </div>
</div>

<h2>📚 PART 2: CORE MINDSET PRINCIPLES</h2>

<div class="content-section">
    <h3>🛡️ Principle 1: Zero Tolerance for Bugs</h3>
    <p>We do NOT use clients as beta testers. If a bug reaches the client, <strong>we have failed.</strong></p>
    <div class="warning-box">
        <strong>The Digital Heroes QA Standard:</strong>
        <ul style="margin-bottom: 0;">
            <li>✅ Test on Chrome, Safari, Firefox, Edge</li>
            <li>✅ Test on real iPhone (not just Chrome DevTools)</li>
            <li>✅ Test on real Android device</li>
            <li>✅ Test Add to Cart flow end-to-end</li>
            <li>✅ Check console for ANY errors (red = fail)</li>
            <li>✅ Test with slow 3G network simulation</li>
        </ul>
    </div>
    <p><strong>Remember:</strong> The client is paying $1,200-$1,800+ for premium quality. If we deliver bugs, we're no different from the $300 Fiverr developer.</p>
</div>

<div class="content-section">
    <h3>⚡ Principle 2: Speed is Revenue</h3>
    <p>Every 1 second of load time = <strong>7% conversion drop</strong>. Here's the math:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Store Revenue</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Load Time</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Conversion Drop</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Annual Loss</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$10,000/day</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+1 second</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">$255,500</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$10,000/day</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+2 seconds</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">$511,000</td>
        </tr>
    </table>
    <div class="highlight-box">
        <strong>Your Responsibility:</strong> Every heavy image, every unnecessary app, every unoptimized script YOU add is costing the client REAL money.
    </div>
</div>

<div class="content-section">
    <h3>📝 Principle 3: Plan Twice, Code Once</h3>
    <p>The amateur starts coding immediately. The professional:</p>
    <ol>
        <li><strong>Reads the task brief carefully</strong> — What exactly is needed?</li>
        <li><strong>Reads Shopify documentation</strong> — What's the official way?</li>
        <li><strong>Checks existing theme code</strong> — How does this theme handle it?</li>
        <li><strong>Plans the approach</strong> — What files need changes?</li>
        <li><strong>Then codes</strong> — With full understanding</li>
    </ol>
    <div class="warning-box">
        <strong>The Cost of Skipping Steps:</strong><br>
        • Guessing = 2 hours of debugging later<br>
        • Reading docs first = 30 minutes saved
    </div>
</div>

<div class="content-section">
    <h3>🔧 Principle 4: The 10x Developer Myth</h3>
    <p>You've heard of "10x developers" — devs who are 10 times more productive than average.</p>
    <div class="highlight-box">
        <strong>The Truth:</strong> They're not 10x smarter. They're 10x more <strong>systematic</strong>.
        <ul style="margin-bottom: 0;">
            <li>📁 Organized code structure</li>
            <li>📝 Clear naming conventions</li>
            <li>🔍 Systematic debugging process</li>
            <li>♻️ Reusable components library</li>
            <li>📚 Documentation habits</li>
        </ul>
    </div>
    <p>This training will teach you the <strong>systems</strong> that make you faster, not just the code that makes features work.</p>
</div>

<h2>📚 PART 3: THE DIGITAL HEROES DEVELOPER STANDARDS</h2>

<div class="content-section">
    <h3>📋 The Non-Negotiable Rules</h3>
    <p>These rules are ABSOLUTE. No exceptions. No "just this once."</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.3);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);" colspan="2"><strong>❌ NEVER DO THESE</strong></td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edit the LIVE theme directly</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always duplicate first</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hardcode currency symbols ($, £, €)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use {{ cart.currency.symbol }}</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use deprecated tags (include, assign in wrong context)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use render, capture</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leave console errors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Zero errors = shipping standard</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ship without testing on mobile</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+ traffic is mobile</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>✅ The Quality Checklist</h3>
    <p>Before you mark ANY task as complete, verify:</p>
    <div class="highlight-box">
        <ul style="margin-bottom: 0;">
            <li>☐ Works on Desktop Chrome</li>
            <li>☐ Works on Mobile Safari (iPhone)</li>
            <li>☐ Works on Mobile Chrome (Android)</li>
            <li>☐ No console errors</li>
            <li>☐ No layout shifts (CLS)</li>
            <li>☐ Loads under 3 seconds on 3G</li>
            <li>☐ All links functional</li>
            <li>☐ Add to Cart works</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Impact Calculation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Calculate Revenue Impact</h4>
        <p>A store makes $10,000/day. A 1-second delay reduces conversions by 7%. Calculate:</p>
        <code style="background: #1e1e1e; padding: 10px; border-radius: 6px; display: block; font-family: monospace;">
        Daily Loss = $10,000 × 0.07 = ?<br>
        Annual Loss = Daily × 365 = ?
        </code>
        <p style="margin-top: 15px;"><strong>Answer:</strong> $700/day × 365 = <span style="color: #EF4444;">$255,500/year</span></p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Developer Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
        <li>💡 Questions test UNDERSTANDING, not memorization</li>
    </ul>
</div>
`;

// =============================================================================
// TASK 2: SHOPIFY PLATFORM FUNDAMENTALS
// =============================================================================
const task3Content = `
<h2>📚 TASK 2: SHOPIFY PLATFORM FUNDAMENTALS</h2>

<div class="content-section">
    <h3>🏗️ Shopify is NOT WordPress</h3>
    <p>If you're coming from WordPress, forget everything. Shopify is fundamentally different:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Aspect</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WordPress</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hosting</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Self-hosted (you manage server)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fully hosted SaaS</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Language</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PHP</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid (Ruby-based)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Database</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direct MySQL access</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">API only (no direct DB access)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customization</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited (can break anything)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sandboxed (safer but limited)</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🏠 Online Store 2.0 Architecture</h3>
    <p>In 2021, Shopify released Online Store 2.0 - the modern way to build themes:</p>
    <div class="highlight-box">
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>JSON Templates:</strong> Pages are defined in JSON, not Liquid</li>
            <li><strong>Sections Everywhere:</strong> Add sections to ANY page type</li>
            <li><strong>App Blocks:</strong> Apps can inject content without editing code</li>
            <li><strong>Metafields:</strong> Custom data on products, collections, pages</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📦 The Data Model Hierarchy</h3>
    <p>Understanding this hierarchy is CRITICAL:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        <strong style="color: #10B981;">SHOP</strong> (Root)<br>
        ├── <strong style="color: #6366F1;">COLLECTION</strong> (Groups products)<br>
        │   └── products[] (Array of products)<br>
        ├── <strong style="color: #F59E0B;">PRODUCT</strong><br>
        │   ├── title, description, vendor<br>
        │   ├── images[] (Array of images)<br>
        │   ├── <strong style="color: #EC4899;">VARIANT</strong>[] (Size/Color combos)<br>
        │   │   ├── price, compare_at_price<br>
        │   │   ├── inventory_quantity<br>
        │   │   └── sku, barcode<br>
        │   └── <strong style="color: #8B5CF6;">METAFIELD</strong>[] (Custom data)<br>
        ├── <strong>CUSTOMER</strong><br>
        ├── <strong>ORDER</strong><br>
        └── <strong>PAGE</strong>
    </div>
</div>

<div class="content-section">
    <h3>🌍 Multi-Market & International</h3>
    <div class="warning-box">
        <strong>The Hardcoding Trap:</strong><br>
        Never, EVER hardcode currency symbols like "$" or "£".<br><br>
        <strong>❌ WRONG:</strong> <code>$$\{product.price}</code><br>
        <strong>✅ RIGHT:</strong> <code>{{ product.price | money }}</code><br><br>
        A user in UK expects to see "£", not "$". The money filter handles this automatically.
    </div>
</div>

<div class="content-section">
    <h3>🔧 Shopify Limits You Must Know</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Limit</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Value</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It Matters</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variants per product</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100 max</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can't have 200 size/color combos</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product images</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">250 max</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Usually plenty</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collections</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5000 max</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rarely an issue</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">products.all limit</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1000 in loop</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use pagination for large catalogs</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Metafield Design</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Plan Metafields for a Coffee Product</h4>
        <p>Design the metafield structure for a "Coffee Bean" product with:</p>
        <ul>
            <li>Roast Level (1-5 scale)</li>
            <li>Origin Country</li>
            <li>Tasting Notes (multiple)</li>
            <li>Brewing Instructions</li>
        </ul>
        <p>Write down Namespace.Key format (e.g., <code>custom.roast_level</code>).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Shopify Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
    </ul>
</div>
`;

// Continue with more tasks...
// (Tasks 3-13 follow the same deep pattern)

const task4Content = `
<h2>📚 TASK 3: THEME ARCHITECTURE - The Digital Heroes Standard</h2>

<div class="content-section">
    <h3>🎨 Theme Selection Philosophy</h3>
    <p>We prefer <strong>Dawn</strong> (free base) or <strong>Prestige/Impulse</strong> (premium) themes.</p>
    <div class="warning-box">
        <strong>❌ NEVER EDIT THE LIVE THEME DIRECTLY</strong><br><br>
        <strong>The Protocol:</strong>
        <ol>
            <li>Duplicate the live theme</li>
            <li>Name it: <code>[Dev] Feature Name - YYYY-MM-DD</code></li>
            <li>Make ALL changes in the duplicate</li>
            <li>Preview and test thoroughly</li>
            <li>Only then: Publish</li>
        </ol>
        Breaking the live theme = $50,000 mistake (see Task 1)
    </div>
</div>

<div class="content-section">
    <h3>🏠 The 12 Essential Homepage Sections</h3>
    <p>A high-converting homepage follows this proven structure:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>#</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Section</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Purpose</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero Banner</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First impression + CTA</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logo Bar</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof ("As seen in...")</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Value Props</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why buy from us (icons)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Featured Collection</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best sellers</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Image + Text</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand story</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Benefits</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Features/specs</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Testimonials</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust building</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Second Collection</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category navigation</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FAQ Accordion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Objection handling</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Newsletter</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead capture</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">11</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram Feed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social engagement</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Footer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Links + Trust badges</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📱 Mobile-First Development</h3>
    <p><strong>70%+ of e-commerce traffic is mobile.</strong> Design for mobile FIRST.</p>
    <div class="highlight-box">
        <strong>Mobile Priorities:</strong>
        <ul>
            <li>Touch targets: Minimum 44x44px</li>
            <li>Sticky Add to Cart button</li>
            <li>Collapsible product descriptions</li>
            <li>Swipeable image galleries</li>
            <li>No hover-only interactions</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Theme Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

// Tasks 4-13 content - EXPANDED WITH FULL DEPTH
const task5Content = `
<h2>📚 TASK 4: LIQUID PROGRAMMING - The Heart of Shopify Development</h2>

<div class="content-section">
    <h3>💧 The Three Pillars of Liquid</h3>
    <p>Liquid is Shopify's templating language. It was created by Shopify and is used to build dynamic content. Master these three concepts:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pillar</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Syntax</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Objects</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Output data</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.title }}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tags</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logic & Control</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.available %}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Filters</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>|</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Transform output</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.price | money }}</code></td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📦 Core Shopify Objects</h3>
    <p>These are the data structures you'll work with daily:</p>
    
    <div class="highlight-box">
        <strong>Most Used Objects:</strong>
        <ul>
            <li><code>product</code> - Current product (title, price, images, variants)</li>
            <li><code>collection</code> - Group of products</li>
            <li><code>cart</code> - Shopping cart (items, total, item_count)</li>
            <li><code>customer</code> - Logged in customer data</li>
            <li><code>shop</code> - Store settings (name, currency, domain)</li>
            <li><code>settings</code> - Theme customizer values</li>
            <li><code>section</code> - Current section settings</li>
            <li><code>block</code> - Section blocks</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🔄 Loops & Iteration</h3>
    <p>Looping through products, collections, and arrays is fundamental:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">{% for</span> product <span style="color: #569cd6;">in</span> collection.products <span style="color: #569cd6;">limit:</span> 4 <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;div class="product-card"&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;img src="</span><span style="color: #ce9178;">{{ product.featured_image | image_url: width: 400 }}</span><span style="color: #808080;">"&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;h3&gt;</span><span style="color: #ce9178;">{{ product.title }}</span><span style="color: #808080;">&lt;/h3&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;p&gt;</span><span style="color: #ce9178;">{{ product.price | money }}</span><span style="color: #808080;">&lt;/p&gt;</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;/div&gt;</span><br>
        <span style="color: #569cd6;">{% else %}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;p&gt;</span>No products found in this collection.<span style="color: #808080;">&lt;/p&gt;</span><br>
        <span style="color: #569cd6;">{% endfor %}</span>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Loop Variables:</strong><br>
        <code>forloop.index</code> - Current iteration (1-based)<br>
        <code>forloop.index0</code> - Current iteration (0-based)<br>
        <code>forloop.first</code> - Boolean: is first item?<br>
        <code>forloop.last</code> - Boolean: is last item?<br>
        <code>forloop.length</code> - Total items
    </div>
</div>

<div class="content-section">
    <h3>🔀 Conditionals</h3>
    <p>Control flow is essential for dynamic content:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">{% if</span> product.available <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;button&gt;</span>Add to Cart<span style="color: #808080;">&lt;/button&gt;</span><br>
        <span style="color: #569cd6;">{% elsif</span> product.selected_or_first_available_variant <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;button&gt;</span>Select Options<span style="color: #808080;">&lt;/button&gt;</span><br>
        <span style="color: #569cd6;">{% else %}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;button disabled&gt;</span>Sold Out<span style="color: #808080;">&lt;/button&gt;</span><br>
        <span style="color: #569cd6;">{% endif %}</span>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Operator</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meaning</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>==</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.type == 'Shoes' %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Equals</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>!=</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.vendor != 'Nike' %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not equals</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>contains</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.tags contains 'sale' %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">String/Array contains</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>and / or</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if a and b %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Combine conditions</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔧 Essential Filters</h3>
    <p>Filters transform output. These are the ones you'll use constantly:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Filter</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Input</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Output</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| money</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1999</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$19.99</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| money_without_trailing_zeros</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$20</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| image_url: width: 400</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Image object</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Optimized URL</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| date: '%B %d, %Y'</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Date object</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">January 19, 2026</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| truncate: 100</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long text</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Truncated text...</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| strip_html</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>&lt;p&gt;Text&lt;/p&gt;</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Text</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| handleize</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">My Product Name</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">my-product-name</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| default: 'N/A'</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">empty/nil</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">N/A</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🧱 Metafields - Custom Data</h3>
    <p>Metafields store extra data on products, collections, pages, etc:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;">// Access product metafield</span><br>
        <span style="color: #ce9178;">{{ product.metafields.custom.ingredients }}</span><br><br>
        <span style="color: #6a9955;">// Check if metafield exists</span><br>
        <span style="color: #569cd6;">{% if</span> product.metafields.custom.size_guide <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #ce9178;">{{ product.metafields.custom.size_guide }}</span><br>
        <span style="color: #569cd6;">{% endif %}</span>
    </div>
    
    <div class="highlight-box">
        <strong>Common Metafield Uses:</strong>
        <ul>
            <li>Product ingredients/materials</li>
            <li>Size guides (reference)</li>
            <li>Care instructions</li>
            <li>Warranty information</li>
            <li>Custom tab content</li>
            <li>Related product collections</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📝 Section Schemas</h3>
    <p>Schemas make your sections configurable via Theme Customizer:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">{% schema %}</span><br>
        {<br>
        &nbsp;&nbsp;"name": "Featured Banner",<br>
        &nbsp;&nbsp;"settings": [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "image_picker",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "background_image",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Background Image"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;},<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "text",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "heading",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Heading",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"default": "Welcome to our store"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;},<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "url",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "button_link",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Button Link"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;],<br>
        &nbsp;&nbsp;"presets": [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{"name": "Featured Banner"}<br>
        &nbsp;&nbsp;]<br>
        }<br>
        <span style="color: #569cd6;">{% endschema %}</span>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: Build a Related Products Section</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Your Task:</h4>
        <p>Create a Liquid section that displays 4 related products from the same collection, excluding the current product.</p>
        
        <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; font-family: monospace; color: #d4d4d4;">
            <span style="color: #569cd6;">{% for</span> related <span style="color: #569cd6;">in</span> product.collections.first.products <span style="color: #569cd6;">limit:</span> 5 <span style="color: #569cd6;">%}</span><br>
            &nbsp;&nbsp;<span style="color: #569cd6;">{% if</span> related.id != product.id <span style="color: #569cd6;">%}</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;div class="related-product"&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">{{ related.title }}</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;/div&gt;</span><br>
            &nbsp;&nbsp;<span style="color: #569cd6;">{% endif %}</span><br>
            <span style="color: #569cd6;">{% endfor %}</span>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ Common Liquid Mistakes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Wrong</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Correct</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% include 'snippet' %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% render 'snippet' %}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>$\\{product.price}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.price | money }}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ img_url }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ image | image_url: width: 400 }}</code></td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 15 questions about Liquid Programming</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 5</li>
        <li>💡 Contains code output questions</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: PRODUCT PAGE (PDP) OPTIMIZATION - Converting Visitors to Buyers</h2>

<div class="content-section">
    <h3>🛒 Above the Fold - The Critical First Screen</h3>
    <p>On mobile, users must see these elements WITHOUT SCROLLING:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why Essential</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Image (swipeable)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Visual decision driver</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Title & Price</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What am I buying, how much?</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review Stars</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof (trust)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variant Selector</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size/color selection</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Add to Cart Button</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The conversion action</td></tr>
    </table>
    
    <div class="warning-box">
        <strong>⚠️ The Sticky Add to Cart:</strong><br>
        On mobile, implement a sticky Add to Cart bar at the bottom. This keeps the CTA visible as users scroll.
    </div>
</div>

<div class="content-section">
    <h3>📸 Image Gallery Best Practices</h3>
    <ul>
        <li>✅ First image: Product on white/clean background</li>
        <li>✅ 2-4: Lifestyle shots showing product in use</li>
        <li>✅ Close-up of texture/details</li>
        <li>✅ Size reference (product in hand, on model)</li>
        <li>✅ Video if available (Shopify supports embedded video)</li>
    </ul>
    
    <div class="highlight-box">
        <strong>Image Optimization:</strong>
        <ul>
            <li>Use <code>| image_url: width: 800</code> for main images</li>
            <li>Use <code>| image_url: width: 100</code> for thumbnails</li>
            <li>Always include <code>loading="lazy"</code> on below-fold images</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🧩 Metafields for Product Data</h3>
    <p>Don't dump everything in description. Use metafields for structured data:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metafield</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Namespace.Key</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ingredients</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.ingredients</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-line text</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size Guide</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.size_guide</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page reference</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Care Instructions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.care</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rich text</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Warranty</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.warranty</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Single-line text</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🛒 Add to Cart Button Manipulation - Opening Cart Drawer</h3>
    <p>One of the most common customizations is making the "Add to Cart" button open a cart drawer instead of redirecting to the cart page. Here's how it works:</p>
    
    <div class="highlight-box">
        <strong>The Flow:</strong>
        <ol>
            <li>User clicks "Add to Cart" button</li>
            <li>JavaScript intercepts the click (prevents default form submit)</li>
            <li>AJAX call adds product to cart via Shopify Cart API</li>
            <li>Cart drawer slides open showing the added item</li>
            <li>User can continue shopping or proceed to checkout</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>💻 JavaScript: Cart API & Drawer Toggle</h3>
    <p>Here's the core JavaScript pattern for this functionality:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; overflow-x: auto;">
        <span style="color: #6a9955;">// 1. Listen for Add to Cart form submit</span><br>
        <span style="color: #569cd6;">const</span> form = document.querySelector(<span style="color: #ce9178;">'form[action*="/cart/add"]'</span>);<br><br>
        
        form.addEventListener(<span style="color: #ce9178;">'submit'</span>, <span style="color: #569cd6;">async</span> (e) =&gt; {<br>
        &nbsp;&nbsp;e.preventDefault(); <span style="color: #6a9955;">// Stop normal form submission</span><br><br>
        
        &nbsp;&nbsp;<span style="color: #6a9955;">// 2. Get form data</span><br>
        &nbsp;&nbsp;<span style="color: #569cd6;">const</span> formData = <span style="color: #569cd6;">new</span> FormData(form);<br><br>
        
        &nbsp;&nbsp;<span style="color: #6a9955;">// 3. Add to cart via AJAX</span><br>
        &nbsp;&nbsp;<span style="color: #569cd6;">const</span> response = <span style="color: #569cd6;">await</span> fetch(<span style="color: #ce9178;">'/cart/add.js'</span>, {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;method: <span style="color: #ce9178;">'POST'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;body: formData<br>
        &nbsp;&nbsp;});<br><br>
        
        &nbsp;&nbsp;<span style="color: #569cd6;">if</span> (response.ok) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955;">// 4. Open the cart drawer</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;openCartDrawer();<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955;">// 5. Update cart count in header</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;updateCartCount();<br>
        &nbsp;&nbsp;}<br>
        });
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Key Points:</strong>
        <ul>
            <li><code>e.preventDefault()</code> - Stops the page from redirecting</li>
            <li><code>/cart/add.js</code> - Shopify's AJAX endpoint for adding items</li>
            <li>The drawer is usually a <code>&lt;div&gt;</code> that slides in via CSS transform</li>
            <li>Most premium themes (Dawn, Impulse, Prestige) already have this built in</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎨 Cart Drawer CSS Pattern</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;">/* Drawer hidden by default */</span><br>
        .cart-drawer {<br>
        &nbsp;&nbsp;position: fixed;<br>
        &nbsp;&nbsp;right: -400px; <span style="color: #6a9955;">/* Hidden off-screen */</span><br>
        &nbsp;&nbsp;width: 400px;<br>
        &nbsp;&nbsp;height: 100vh;<br>
        &nbsp;&nbsp;transition: right 0.3s ease;<br>
        &nbsp;&nbsp;z-index: 1000;<br>
        }<br><br>
        
        <span style="color: #6a9955;">/* Drawer visible */</span><br>
        .cart-drawer.is-open {<br>
        &nbsp;&nbsp;right: 0;<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>🔧 Common Drawer Customizations</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customization</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How To</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add upsell products</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fetch related products via AJAX and display in drawer</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show free shipping bar</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Calculate cart total vs threshold, show progress</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add gift message field</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use cart attributes to store custom notes</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quantity +/- buttons</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Update via /cart/change.js endpoint</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: PDP Audit</h3>
    <p>Open any Shopify store PDP and check:</p>
    <ul>
        <li>☐ Can you see Add to Cart without scrolling on mobile?</li>
        <li>☐ Are images swipeable?</li>
        <li>☐ Is there a sticky add-to-cart?</li>
        <li>☐ Are there trust badges below the button?</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: Cart Drawer Implementation</h3>
    <p>Using Antigravity AI or your IDE:</p>
    <ol>
        <li>☐ Identify the Add to Cart form in your theme's product template</li>
        <li>☐ Find the cart drawer component (usually cart-drawer.liquid or similar)</li>
        <li>☐ Trace the JavaScript that handles form submission</li>
        <li>☐ Add a console.log to verify the AJAX flow</li>
        <li>☐ Try adding a custom upsell section to the drawer</li>
    </ol>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: SPEED OPTIMIZATION - Every Second Costs Money</h2>

<div class="content-section">
    <h3>⚡ Core Web Vitals Explained</h3>
    <p>Google ranks sites based on these performance metrics. Know them by heart:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Measures</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How to Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 2.5s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Largest Content Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Optimize hero images</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 0.1</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cumulative Layout Shift</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set width/height on images</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>TBT</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 200ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Total Blocking Time</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defer non-critical JS</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FCP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 1.8s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Content Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reduce server time</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization Checklist</h3>
    <div class="highlight-box">
        <ul>
            <li>✅ Use <code>image_url</code> filter (not img_url - deprecated)</li>
            <li>✅ Specify width: <code>{{ image | image_url: width: 600 }}</code></li>
            <li>✅ Use WebP format (Shopify auto-converts)</li>
            <li>✅ Add <code>loading="lazy"</code> for below-fold images</li>
            <li>✅ Set explicit width/height to prevent CLS</li>
            <li>✅ Use srcset for responsive images</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📜 JavaScript Optimization</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Bad Practice</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Good Practice</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loading all scripts in head</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use <code>defer</code> or put before </body></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10+ apps installed</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keep to 5-8 essential apps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inline CSS/JS everywhere</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Consolidate into external files</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 Speed Testing Tools</h3>
    <ul>
        <li><strong>PageSpeed Insights:</strong> pagespeed.web.dev</li>
        <li><strong>GTmetrix:</strong> gtmetrix.com</li>
        <li><strong>WebPageTest:</strong> webpagetest.org</li>
        <li><strong>Shopify Theme Inspector:</strong> Chrome extension</li>
    </ul>
    
    <div class="warning-box">
        <strong>Target Scores:</strong><br>
        Mobile: 85+ | Desktop: 90+
    </div>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: APPS & INTEGRATIONS - The Healthy App Stack</h2>

<div class="content-section">
    <h3>🔌 The 5-8 App Rule</h3>
    <p>More apps = Slower site + JS Conflicts + Higher costs. Be ruthless about app selection.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recommended App</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reviews</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Judge.me / Loox</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Marketing automation</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Manager</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta tags, sitemaps</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upsells</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bold / ReConvert</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AOV increase</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🗑️ The Clean Uninstall Protocol</h3>
    <div class="warning-box">
        <strong>⚠️ CRITICAL:</strong> Simply deleting an app doesn't remove its code!
        <ol>
            <li>Read the app's uninstall documentation</li>
            <li>Delete the app from Shopify Admin</li>
            <li>Search theme code for leftover snippets</li>
            <li>Check for liquid files with app name</li>
            <li>Remove any theme settings referencing the app</li>
            <li>Test site speed before and after</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ App Conflict Diagnosis</h3>
    <p>When two apps break each other:</p>
    <ol>
        <li>Open Console (F12) - look for errors</li>
        <li>Disable apps one by one</li>
        <li>Check for jQuery version conflicts</li>
        <li>Contact both app support teams</li>
    </ol>
</div>
`;

const task9Content = `
<h2>📚 TASK 8: CHECKOUT & POLICIES - Trust & Legal Compliance</h2>

<div class="content-section">
    <h3>📜 Required Legal Pages</h3>
    <p>Missing these = Ad Account Bans + Legal Risk + Lost Customer Trust</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Policy Page</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Covers</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why Required</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Privacy Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data collection, cookies</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GDPR, CCPA law</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Terms of Service</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rules of using site</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Legal protection</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery times, costs</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer expectations</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Refund Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Returns process</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FB/Google Ads requirement</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contact Page</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email, phone, address</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust + Ad approval</td></tr>
    </table>
    
    <div class="warning-box">
        <strong>Location:</strong> Settings > Policies in Shopify Admin. These auto-link in checkout footer.
    </div>
</div>

<div class="content-section">
    <h3>💳 Payment Gateway Setup</h3>
    <ul>
        <li>✅ Enable Shopify Payments (lowest fees)</li>
        <li>✅ Add PayPal as backup</li>
        <li>✅ Enable Apple Pay / Google Pay</li>
        <li>✅ Test checkout in test mode before going live</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 9: QA & TESTING - The 60-Point Quality Gate</h2>

<div class="content-section">
    <h3>✅ Pre-Launch Checklist</h3>
    <p>Before shipping ANY work, verify:</p>
    
    <div class="highlight-box">
        <strong>🖥️ Desktop Testing:</strong>
        <ul>
            <li>☐ Chrome - Latest version</li>
            <li>☐ Safari - Check on Mac</li>
            <li>☐ Firefox - Check forms</li>
            <li>☐ Edge - Windows users</li>
        </ul>
    </div>
    
    <div class="highlight-box">
        <strong>📱 Mobile Testing:</strong>
        <ul>
            <li>☐ Real iPhone Safari (not Chrome DevTools)</li>
            <li>☐ Real Android Chrome</li>
            <li>☐ Test with slow 3G simulation</li>
            <li>☐ Check touch targets (44x44px min)</li>
        </ul>
    </div>
    
    <div class="highlight-box">
        <strong>🛒 Functional Testing:</strong>
        <ul>
            <li>☐ Mobile menu opens/closes</li>
            <li>☐ Cart drawer add/remove items</li>
            <li>☐ Search returns results</li>
            <li>☐ All forms submit correctly</li>
            <li>☐ Complete a test checkout</li>
            <li>☐ Check email notifications</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🐛 Console Error Standard</h3>
    <div class="warning-box">
        <strong>Digital Heroes Standard: ZERO Console Errors</strong><br>
        Open DevTools (F12) > Console tab. If you see ANY red errors, do not ship.
    </div>
</div>

<div class="content-section">
    <h3>🔧 BrowserStack / Real Device Testing</h3>
    <p>Chrome DevTools is NOT enough. You need:</p>
    <ul>
        <li>Real iPhone (Safari has unique bugs)</li>
        <li>Real Android device</li>
        <li>BrowserStack for devices you don't own</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 10: TROUBLESHOOTING - The Debugging Master</h2>

<div class="content-section">
    <h3>🐛 The 7-Step Debug Decision Tree</h3>
    <ol>
        <li><strong>Theme or App issue?</strong> → Test on fresh Dawn theme</li>
        <li><strong>Cache issue?</strong> → Test in Incognito window</li>
        <li><strong>Console Error?</strong> → Open DevTools (F12), read the message</li>
        <li><strong>Specific product/page?</strong> → It's probably data issue</li>
        <li><strong>Recent code change?</strong> → Check theme version history</li>
        <li><strong>Shopify down?</strong> → Check status.shopify.com</li>
        <li><strong>Ask for help</strong> → ChatGPT, Shopify Community, PM</li>
    </ol>
</div>

<div class="content-section">
    <h3>🔧 Essential Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme Inspector Chrome Extension</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">See which file renders what</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DevTools Elements Tab</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inspect HTML/CSS live</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DevTools Console</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">JavaScript errors</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DevTools Network Tab</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">API calls, load times</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚨 Common Error Messages</h3>
    <div class="warning-box">
        <code>Uncaught TypeError: Cannot read property 'X' of null</code><br>
        <strong>Meaning:</strong> Trying to access something that doesn't exist. Check if element exists before accessing.
    </div>
    <br>
    <div class="warning-box">
        <code>Liquid error: Array 'product.images' is not paginateable</code><br>
        <strong>Meaning:</strong> Can't use paginate with this array. Use for loop instead.
    </div>
</div>
`;

const task12Content = `
<h2>📚 TASK 11: CRISIS MANAGEMENT - Handling Dev Emergencies</h2>

<div class="content-section">
    <h3>🔥 Scenario 1: Site Down</h3>
    <div class="warning-box">
        <strong>Protocol:</strong>
        <ol>
            <li>DON'T PANIC</li>
            <li>Check <a href="https://status.shopify.com" target="_blank">status.shopify.com</a></li>
            <li>If Shopify is green → It's your code</li>
            <li>Rollback to previous theme version immediately</li>
            <li>Inform PM within 5 minutes</li>
            <li>Document what happened</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🔥 Scenario 2: Checkout Broken</h3>
    <div class="warning-box">
        <strong>This is a $$$$ emergency!</strong>
        <ol>
            <li>Disable any recent apps</li>
            <li>Remove any checkout customizations</li>
            <li>Test in Incognito</li>
            <li>If still broken, contact Shopify Support IMMEDIATELY</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🔥 Scenario 3: Angry Client</h3>
    <ul>
        <li>✅ Acknowledge the issue immediately</li>
        <li>✅ Don't make excuses</li>
        <li>✅ Give a realistic ETA for fix</li>
        <li>✅ Over-communicate updates</li>
        <li>✅ Loop in PM if client is escalating</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔥 Scenario 4: Data Loss</h3>
    <div class="highlight-box">
        <strong>Recovery Options:</strong>
        <ul>
            <li>Check for CSV exports in Admin</li>
            <li>Use Rewind or other backup apps</li>
            <li>Contact Shopify Support (they have backups)</li>
            <li><strong>Prevention:</strong> Always export before major changes</li>
        </ul>
    </div>
</div>
`;

const task13Content = `
<h2>📚 TASK 12: AI-POWERED DEVELOPMENT - Using AI Copilots Effectively</h2>

<div class="content-section">
    <h3>🤖 AI Tools for Shopify Development</h3>
    <ul>
        <li><strong>ChatGPT / Claude:</strong> Liquid code, debugging, explanations</li>
        <li><strong>GitHub Copilot:</strong> Real-time code completion</li>
        <li><strong>Cursor AI:</strong> IDE with AI built-in</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Effective AI Prompts for Liquid</h3>
    <div class="highlight-box">
        <strong>Example 1: Related Products</strong><br>
        <code>"Write a Liquid loop for related products from the same collection. Exclude current product. Limit 4. Handle empty state. Use OS 2.0 image_url filter."</code>
    </div>
    <br>
    <div class="highlight-box">
        <strong>Example 2: Sale Badge</strong><br>
        <code>"Create a Liquid snippet that shows a 'SALE' badge when compare_at_price is higher than price. Calculate and show the percentage off."</code>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ AI Code Review Checklist</h3>
    <div class="warning-box">
        <strong>NEVER trust AI code blindly. Always check:</strong>
        <ul>
            <li>☐ Uses <code>render</code> not <code>include</code> (deprecated)</li>
            <li>☐ Uses <code>image_url</code> not <code>img_url</code> (deprecated)</li>
            <li>☐ Money values use <code>| money</code> filter</li>
            <li>☐ Has proper empty state handling</li>
            <li>☐ No hardcoded currency symbols</li>
            <li>☐ Works on mobile</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(139, 92, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🚀 Antigravity AI: Pull Theme & Edit via Prompts</h3>
    <p><strong>Antigravity</strong> is Google DeepMind's agentic AI coding assistant. It can pull a Shopify theme from Git/Shopify CLI and make edits based on natural language prompts.</p>
    
    <div class="highlight-box">
        <strong>The Workflow:</strong>
        <ol>
            <li><strong>Pull Theme:</strong> Clone your theme locally or use Shopify CLI</li>
            <li><strong>Set Workspace:</strong> Point Antigravity to the theme folder</li>
            <li><strong>Prompt for Changes:</strong> Describe what you want in natural language</li>
            <li><strong>AI Edits Files:</strong> Antigravity modifies Liquid/CSS/JS files</li>
            <li><strong>Push Changes:</strong> Commit and push to your theme</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>💻 Step 1: Pull Theme Locally</h3>
    <p>Use Shopify CLI to download your theme:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;"># Install Shopify CLI (if not installed)</span><br>
        npm install -g @shopify/cli<br><br>
        
        <span style="color: #6a9955;"># Login to your store</span><br>
        shopify auth login --store your-store.myshopify.com<br><br>
        
        <span style="color: #6a9955;"># Pull the live theme</span><br>
        shopify theme pull --theme-id 123456789<br><br>
        
        <span style="color: #6a9955;"># Or pull to a specific folder</span><br>
        shopify theme pull --path ./my-theme
    </div>
</div>

<div class="content-section">
    <h3>💬 Step 2: Prompt Antigravity for Changes</h3>
    <p>Once the theme is in your workspace, use natural language prompts:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Prompt Example</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Antigravity Does</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make the Add to Cart button open a drawer instead of redirecting"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modifies product-form.liquid and adds drawer JS</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a % off badge when product is on sale"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates snippet with compare_at_price logic</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a sticky add to cart bar on mobile"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates fixed-position bar with CSS media queries</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Create a related products section using product tags"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Builds section with schema and Liquid loop</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📤 Step 3: Push Changes Back</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;"># Preview changes first (opens preview URL)</span><br>
        shopify theme dev<br><br>
        
        <span style="color: #6a9955;"># Push to development theme</span><br>
        shopify theme push --theme-id DEV_THEME_ID<br><br>
        
        <span style="color: #6a9955;"># Or push to live (be careful!)</span><br>
        shopify theme push --live<br><br>
        
        <span style="color: #6a9955;"># Commit to Git</span><br>
        git add -A && git commit -m "feat: Cart drawer + sale badge" && git push
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: AI-Powered Theme Editing</h3>
    <p>Complete this workflow using Antigravity or your preferred AI tool:</p>
    <ol>
        <li>☐ Pull a test theme locally using <code>shopify theme pull</code></li>
        <li>☐ Open the theme folder in your IDE with AI (Cursor, VS Code + Copilot)</li>
        <li>☐ Prompt: "Add a free shipping progress bar to the cart drawer"</li>
        <li>☐ Review the AI's changes - check for deprecated tags</li>
        <li>☐ Test with <code>shopify theme dev</code></li>
        <li>☐ Push to a development theme</li>
    </ol>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ NEVER push AI changes directly to live!</strong> Always test on dev theme first.
    </div>
</div>

<div class="content-section">
    <h3>💡 When AI Saves Time vs. Wastes Time</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Good for</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Bad for</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Boilerplate code</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex business logic</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple Liquid loops</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme architecture decisions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS tweaks</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Debugging complex issues</td>
        </tr>
    </table>
</div>
`;

const task14Content = `
<h2>📚 TASK 13: CAREER GROWTH & FINAL EXAM - Your Path to Senior Developer</h2>

<div class="content-section">
    <h3>🌱 The Developer Career Path</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skills Required</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Salary Range</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeframe</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Junior</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS edits, app installs, basic Liquid</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹25-40k/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0-1 year</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mid-Level</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom sections, complex Liquid, speed optimization</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹50-80k/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-3 years</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Senior</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Architecture, headless, mentoring juniors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹1-1.5L/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5 years</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team management, strategy, client calls</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹1.5-2.5L/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5+ years</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📚 Continuous Learning Resources</h3>
    <ul>
        <li><strong>Shopify Dev Docs:</strong> shopify.dev (official, always up-to-date)</li>
        <li><strong>Shopify Community:</strong> community.shopify.com</li>
        <li><strong>YouTube:</strong> Code with Chris the Freelancer</li>
        <li><strong>Twitter:</strong> Follow Shopify Partners, theme developers</li>
    </ul>
</div>

<div class="content-section">
    <h3>🏆 Skills to Develop Next</h3>
    <div class="highlight-box">
        <ul>
            <li>Headless Shopify (Hydrogen, Next.js)</li>
            <li>Shopify Functions (custom checkout logic)</li>
            <li>App Development (Remix, Node.js)</li>
            <li>Advanced JavaScript/TypeScript</li>
            <li>GraphQL API mastery</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎓 Final Certification Requirements</h3>
    <ul>
        <li>📝 Complete all 13 training tasks with 100% quiz scores</li>
        <li>🎯 Pass the 25-question Final Exam</li>
        <li>🎥 Submit a 30-min video walkthrough of a live store</li>
        <li>👔 Receive your Digital Heroes Developer Certificate</li>
    </ul>
</div>
`;

// Quiz Questions (expanded to 130+ questions)
const quizQuestions = [
    // Task 1: Mindset (15 questions)
    { question: "A store losing sales due to slow load time is losing _______ monthly?", options: ["Thousands", "Unknown", "Nothing", "Hundreds of thousands annually"], correct: 3 },
    { question: "What is the primary goal of your code?", options: ["To drive revenue", "To be clever", "To follow tutorials", "To impress"], correct: 0 },
    { question: "A bug on production costing $50k - who is responsible?", options: ["Client", "Developer", "Shopify", "No one"], correct: 1 },
    { question: "'Plan Twice, Code Once' prevents what?", options: ["Innovation", "Fun", "Wasted hours and bugs", "Nothing"], correct: 2 },
    { question: "Should you use clients as beta testers?", options: ["Yes", "Often", "Sometimes", "No - Zero Tolerance for bugs"], correct: 3 },
    { question: "What makes a '10x developer' effective?", options: ["Being systematic", "Being smarter", "Working alone", "Coding faster"], correct: 0 },
    { question: "Every 1 second of load time equals what conversion drop?", options: ["1%", "7%", "20%", "50%"], correct: 1 },
    { question: "The Digital Heroes standard for console errors is?", options: ["Some allowed", "Only warnings", "Zero errors", "Ignore them"], correct: 2 },
    { question: "What percentage of traffic is mobile?", options: ["30%", "50%", "10%", "70%+"], correct: 3 },
    { question: "A $10,000/day store with 1 sec delay loses _____ annually?", options: ["$255,500", "$25,000", "$1M", "$500"], correct: 0 },
    { question: "What browser should ALWAYS be tested for e-commerce?", options: ["Internet Explorer", "Safari on iPhone", "Netscape", "Opera Mini"], correct: 1 },
    { question: "The Digital Heroes QA Standard requires testing on:", options: ["Just Chrome", "Chrome and Firefox only", "Chrome, Safari, Firefox, Edge + real mobile", "Only desktop"], correct: 2 },
    { question: "What should you ALWAYS check before marking a task complete?", options: ["Email", "Weather", "Social media", "Console for errors"], correct: 3 },
    { question: "A 'Script Kid' developer does what?", options: ["Copy-pastes from tutorials", "Writes systematic code", "Tests thoroughly", "Documents code"], correct: 0 },
    { question: "What's the difference between a coder and a Digital Heroes Developer?", options: ["Nothing", "DH developers write code that SELLS", "Coders are better", "DH developers work less"], correct: 1 },

    // Task 2: Platform (15 questions)
    { question: "Shopify uses what templating language?", options: ["PHP", "Python", "Liquid", "JavaScript"], correct: 2 },
    { question: "Maximum variants per product?", options: ["50", "Unlimited", "200", "100"], correct: 3 },
    { question: "To output a currency properly, use what filter?", options: ["| money", "| currency", "| dollar", "| price"], correct: 0 },
    { question: "Online Store 2.0 uses what for page templates?", options: ["PHP", "JSON", "XML", "YAML"], correct: 1 },
    { question: "What's the correct hierarchy?", options: ["Variant > Product", "Both same level", "Product > Variant", "Collection > Variant"], correct: 2 },
    { question: "What is a metafield namespace?", options: ["Product name", "CSS class", "HTML tag", "Category for metafield like custom.ingredients"], correct: 3 },
    { question: "Maximum product images allowed?", options: ["250", "100", "50", "Unlimited"], correct: 0 },
    { question: "Where is shop currency accessed?", options: ["settings.currency", "shop.currency", "cart.currency", "checkout.currency"], correct: 1 },
    { question: "What's the limit for products in a for loop?", options: ["50", "100", "1000", "Unlimited"], correct: 2 },
    { question: "Shopify is hosted where?", options: ["Self-hosted", "AWS", "Google Cloud", "Shopify's own infrastructure (SaaS)"], correct: 3 },
    { question: "What does OS 2.0 stand for?", options: ["Online Store 2.0", "Operating System 2.0", "Open Source 2.0", "Old Standard 2.0"], correct: 0 },
    { question: "Can you directly access Shopify's database?", options: ["Yes", "No - API only", "Sometimes", "With permission"], correct: 1 },
    { question: "What is an App Block in OS 2.0?", options: ["Block for apps", "App settings", "Apps can inject content into sections", "App dashboard"], correct: 2 },
    { question: "How do sections work in OS 2.0?", options: ["Only on homepage", "Not supported", "Only on product pages", "Sections everywhere - any page type"], correct: 3 },
    { question: "What's the customer object in Liquid?", options: ["Current logged-in customer", "All customers", "Guest customer", "Admin"], correct: 0 },

    // Task 3: Theme (10 questions)
    { question: "Should you edit the live theme directly?", options: ["Yes", "No - duplicate first", "Only CSS", "If urgent"], correct: 1 },
    { question: "What is Dawn?", options: ["A plugin", "An app", "Shopify's OS 2.0 reference theme", "A framework"], correct: 2 },
    { question: "Minimum touch target size for mobile?", options: ["20px", "100px", "60px", "44px"], correct: 3 },
    { question: "Theme duplicate naming convention?", options: ["[Dev] Feature - Date", "Copy 1", "Backup", "New Theme"], correct: 0 },
    { question: "How many essential homepage sections?", options: ["5", "12", "8", "20"], correct: 1 },
    { question: "What section builds trust with 'As seen in...'?", options: ["Hero", "Products", "Logo Bar", "Footer"], correct: 2 },
    { question: "First section on a homepage should be?", options: ["Footer", "Newsletter", "FAQ", "Hero Banner"], correct: 3 },
    { question: "Mobile-first development means?", options: ["Design mobile first, then desktop", "Design desktop first", "Only mobile", "Ignore mobile"], correct: 0 },
    { question: "What's a sticky Add to Cart?", options: ["Glue on button", "Button stays visible when scrolling", "Slow button", "Hidden button"], correct: 1 },
    { question: "Prestige and Impulse are?", options: ["Free themes", "Old themes", "Premium themes we use", "App names"], correct: 2 },

    // Task 4: Liquid (20 questions)
    { question: "Which outputs data?", options: ["{% tag %}", "( object )", "[[ object ]]", "{{ object }}"], correct: 3 },
    { question: "Correct loop syntax?", options: ["{% for x in y %}", "foreach", "loop x", "for x in y"], correct: 0 },
    { question: "Check product availability with?", options: ["{{ product.stock }}", "{% if product.available %}", "{% check stock %}", "product.quantity > 0"], correct: 1 },
    { question: "What is a metafield?", options: ["Standard field", "An app", "Custom data on resources", "Database table"], correct: 2 },
    { question: "Deprecated tag to avoid?", options: ["render", "capture", "assign", "include"], correct: 3 },
    { question: "What filter makes 'My Product' into 'my-product'?", options: ["| handleize", "| lowercase", "| slugify", "| url"], correct: 0 },
    { question: "Access first item in for loop with?", options: ["forloop.index == 0", "forloop.first", "for.start", "loop.begin"], correct: 1 },
    { question: "What's forloop.index?", options: ["0-based counter", "Array length", "1-based counter", "Loop name"], correct: 2 },
    { question: "Combine conditions with?", options: ["combine", "&& / ||", "plus / minus", "and / or"], correct: 3 },
    { question: "Filter to truncate text?", options: ["| truncate: 100", "| shorten", "| cut", "| limit"], correct: 0 },
    { question: "Remove HTML from string?", options: ["| no_html", "| strip_html", "| clean", "| text_only"], correct: 1 },
    { question: "Provide default value with?", options: ["| fallback", "| or", "| default: 'N/A'", "| else"], correct: 2 },
    { question: "What replaces img_url in OS 2.0?", options: ["image_tag", "media_url", "picture_url", "image_url"], correct: 3 },
    { question: "Schema goes inside what tags?", options: ["{% schema %}", "{% script %}", "{% config %}", "{% settings %}"], correct: 0 },
    { question: "What creates a Theme Customizer option?", options: ["CSS", "Section schema settings", "JavaScript", "HTML"], correct: 1 },
    { question: "Access section setting with?", options: ["settings.x", "block.x", "section.settings.x", "config.x"], correct: 2 },
    { question: "What's a preset in schema?", options: ["Font preset", "CSS preset", "Theme color", "Default values for section"], correct: 3 },
    { question: "Contains operator checks?", options: ["If string/array contains value", "If number is greater", "If file exists", "If page loaded"], correct: 0 },
    { question: "Correct date filter syntax?", options: ["| format_date", "| date: '%B %d, %Y'", "| toDate", "| dateFormat"], correct: 1 },
    { question: "What does capture do?", options: ["Takes screenshot", "Captures form", "Stores output in variable", "Records video"], correct: 2 },

    // Task 5: PDP (10 questions)
    { question: "Above the fold must include?", options: ["Footer", "Map", "Blog link", "Add to Cart button"], correct: 3 },
    { question: "Where to store product specs?", options: ["Metafields", "Description only", "Title", "Tags"], correct: 0 },
    { question: "Image gallery should be?", options: ["Static", "Swipeable on mobile", "Hidden", "Text only"], correct: 1 },
    { question: "First product image should be?", options: ["Lifestyle shot", "Text only", "Product on white/clean background", "Video thumbnail"], correct: 2 },
    { question: "Why use sticky Add to Cart on mobile?", options: ["Looks cool", "Required by Shopify", "Saves space", "Keeps CTA visible while scrolling"], correct: 3 },
    { question: "Review stars provide what?", options: ["Social proof (trust)", "Decoration", "Speed boost", "SEO only"], correct: 0 },
    { question: "Image width filter for thumbnails?", options: ["width: 800", "width: 100", "width: 1200", "width: 50"], correct: 1 },
    { question: "loading='lazy' should be used on?", options: ["All images", "Hero images", "Below-fold images", "No images"], correct: 2 },
    { question: "Variant selector lets user choose?", options: ["Shipping method", "Pickup location", "Payment method", "Size/color"], correct: 3 },
    { question: "Trust badges should be placed?", options: ["Below Add to Cart button", "In footer only", "On contact page", "Hidden"], correct: 0 },

    // Task 6: Speed (15 questions)
    { question: "Target mobile PageSpeed score?", options: ["50", "85+", "10", "100"], correct: 1 },
    { question: "LCP target?", options: ["< 5s", "< 10s", "< 2.5s", "< 1s"], correct: 2 },
    { question: "What hurts speed most?", options: ["Text", "Fonts", "Colors", "Too many apps/scripts"], correct: 3 },
    { question: "Off-screen images should load how?", options: ["Lazy", "Eager", "Never", "Immediately"], correct: 0 },
    { question: "CLS target?", options: ["< 1", "< 0.1", "< 5", "< 0.5"], correct: 1 },
    { question: "What is LCP?", options: ["Loading Complete Point", "Last Content Placed", "Largest Content Paint", "Liquid Code Parser"], correct: 2 },
    { question: "TBT stands for?", options: ["Total Block Time", "Test Browser Time", "Theme Build Time", "Total Blocking Time"], correct: 3 },
    { question: "TBT target?", options: ["< 200ms", "< 500ms", "< 1s", "< 50ms"], correct: 0 },
    { question: "What causes CLS (layout shift)?", options: ["Slow server", "Images without width/height", "Too much text", "Dark colors"], correct: 1 },
    { question: "Defer attribute does what?", options: ["Deletes script", "Speeds up script", "Loads script after HTML", "Disables script"], correct: 2 },
    { question: "WebP format is used for?", options: ["Audio", "Videos", "Documents", "Optimized images"], correct: 3 },
    { question: "Best tool to test speed?", options: ["PageSpeed Insights", "Google Docs", "Excel", "Photoshop"], correct: 0 },
    { question: "Target desktop PageSpeed score?", options: ["70", "90+", "50", "100"], correct: 1 },
    { question: "Scripts should go where?", options: ["In head tag", "In footer", "Before </body> or use defer", "In header section"], correct: 2 },
    { question: "How to fix slow LCP?", options: ["Add more scripts", "Increase file size", "Use more apps", "Optimize hero images"], correct: 3 },

    // Task 7: Apps (10 questions)
    { question: "Max recommended apps?", options: ["5-8", "20", "0", "50"], correct: 0 },
    { question: "Deleting app removes code from theme?", options: ["Yes", "No - manual cleanup often needed", "Usually", "Always"], correct: 1 },
    { question: "App conflicts cause?", options: ["Better speed", "More sales", "JS errors", "Nothing"], correct: 2 },
    { question: "First step to diagnose app conflict?", options: ["Email Shopify", "Ignore it", "Delete all apps", "Open Console (F12)"], correct: 3 },
    { question: "Klaviyo is used for?", options: ["Email marketing automation", "Reviews", "Speed", "SEO"], correct: 0 },
    { question: "Judge.me helps with?", options: ["Speed", "Reviews/social proof", "Email", "Shipping"], correct: 1 },
    { question: "After uninstalling app, check theme for?", options: ["New features", "Speed increase", "Leftover snippets/code", "Nothing"], correct: 2 },
    { question: "More apps generally means?", options: ["Faster site", "More sales", "Better SEO", "Slower site + conflicts"], correct: 3 },
    { question: "jQuery version conflicts cause?", options: ["JS errors between apps", "Better compatibility", "Faster loading", "Nothing"], correct: 0 },
    { question: "Before installing app, consider?", options: ["Only price", "Speed impact + alternatives", "Just install it", "Color scheme"], correct: 1 },

    // Task 8: Checkout (10 questions)
    { question: "Which policy page is NOT required?", options: ["Privacy", "Returns", "Blog Guidelines", "Shipping"], correct: 2 },
    { question: "Missing policies can cause?", options: ["Nothing", "Faster site", "More sales", "Ad account bans"], correct: 3 },
    { question: "Where are policies configured?", options: ["Settings > Policies", "Theme editor", "Apps", "Code editor"], correct: 0 },
    { question: "GDPR requires what page?", options: ["About Us", "Privacy Policy", "Blog", "FAQ"], correct: 1 },
    { question: "Shopify Payments offers?", options: ["Highest fees", "No payment support", "Lowest transaction fees", "Only PayPal"], correct: 2 },
    { question: "Before going live, test checkout in?", options: ["Live mode", "Production", "Don't test", "Test mode"], correct: 3 },
    { question: "Contact page builds what?", options: ["Trust + Ad approval", "Speed", "SEO only", "Nothing"], correct: 0 },
    { question: "Refund Policy is required for?", options: ["Nothing", "FB/Google Ads approval", "Theme installation", "App installation"], correct: 1 },
    { question: "Apple Pay / Google Pay should be?", options: ["Disabled", "Only on desktop", "Enabled for faster checkout", "Only on mobile"], correct: 2 },
    { question: "Policies auto-link in?", options: ["Header", "Cart", "Product pages", "Checkout footer"], correct: 3 },

    // Task 9: QA (12 questions)
    { question: "Where to test iOS issues?", options: ["Real iPhone/BrowserStack", "Windows Chrome", "DevTools only", "Don't test"], correct: 0 },
    { question: "Console red errors mean?", options: ["Ignore", "Fix them - Zero Tolerance", "It's fine", "Normal"], correct: 1 },
    { question: "Test checkout with?", options: ["Real payment", "Skip it", "Test mode order", "Trust it works"], correct: 2 },
    { question: "Chrome DevTools is enough for mobile testing?", options: ["Yes", "Always", "Sometimes", "No - need real devices"], correct: 3 },
    { question: "Minimum touch target size?", options: ["44x44px", "20px", "10px", "100px"], correct: 0 },
    { question: "Which browsers must be tested?", options: ["Just Chrome", "Chrome, Safari, Firefox, Edge", "Only Safari", "None"], correct: 1 },
    { question: "BrowserStack is used for?", options: ["Speed testing", "Email", "Testing on devices you don't own", "SEO"], correct: 2 },
    { question: "Cart drawer should be tested for?", options: ["Nothing", "Just display", "Colors only", "Add/remove items"], correct: 3 },
    { question: "Slow 3G simulation tests?", options: ["Site on slow connections", "Desktop speed", "Server speed", "Nothing"], correct: 0 },
    { question: "What should work on mobile menu?", options: ["Nothing", "Open and close properly", "Only colors", "Just logo"], correct: 1 },
    { question: "Forms should be tested for?", options: ["Colors", "Font size", "Correct submission", "Nothing"], correct: 2 },
    { question: "Email notifications should be?", options: ["Ignored", "Hidden", "Deleted", "Tested to ensure they work"], correct: 3 },

    // Task 10: Debug (10 questions)
    { question: "First debug step?", options: ["Test on fresh Dawn", "Panic", "Email Shopify", "Delete code"], correct: 0 },
    { question: "Cache test method?", options: ["Reload", "Incognito window", "Wait", "Reboot"], correct: 1 },
    { question: "Theme Inspector Chrome Extension shows?", options: ["Colors", "Speed", "Which file renders what", "SEO"], correct: 2 },
    { question: "Network tab in DevTools shows?", options: ["Colors", "Nothing", "Fonts", "API calls and load times"], correct: 3 },
    { question: "status.shopify.com shows?", options: ["Shopify platform status", "Your store status", "Theme status", "App status"], correct: 0 },
    { question: "'Cannot read property of null' means?", options: ["Code works", "Trying to access something that doesn't exist", "Server error", "Network issue"], correct: 1 },
    { question: "If bug only on one product, it's likely?", options: ["Theme issue", "Server issue", "Data issue", "Shopify bug"], correct: 2 },
    { question: "Theme version history helps find?", options: ["Best design", "SEO problems", "Speed issues", "Recent changes that caused bugs"], correct: 3 },
    { question: "Elements tab in DevTools inspects?", options: ["HTML/CSS live", "Network calls", "Server logs", "Database"], correct: 0 },
    { question: "After all debugging fails, ask?", options: ["No one", "ChatGPT, Community, PM", "Random person", "Delete everything"], correct: 1 },

    // Task 11: Crisis (8 questions)
    { question: "Site down first action?", options: ["Panic", "Delete theme", "Check status.shopify.com", "Email client"], correct: 2 },
    { question: "Data loss recovery?", options: ["Cry", "Blame client", "Start over", "Check backups/CSV exports"], correct: 3 },
    { question: "Checkout broken - priority level?", options: ["$$$ Emergency - highest priority", "Low", "Medium", "Ignore"], correct: 0 },
    { question: "Angry client - first response?", options: ["Make excuses", "Acknowledge the issue immediately", "Ignore", "Blame Shopify"], correct: 1 },
    { question: "Inform PM of site down within?", options: ["1 hour", "Next day", "5 minutes", "Never"], correct: 2 },
    { question: "If Shopify status is green but site is down?", options: ["Wait for Shopify", "Do nothing", "Email Shopify", "It's your code - rollback theme"], correct: 3 },
    { question: "Rewind is used for?", options: ["Store backups", "Speed", "Email", "SEO"], correct: 0 },
    { question: "Before major changes, always?", options: ["Just do it", "Export data as backup", "Skip backup", "Ask client"], correct: 1 },

    // Task 12: AI (10 questions)
    { question: "Can you trust AI code 100%?", options: ["Yes", "Mostly", "No - always verify", "Sure"], correct: 2 },
    { question: "AI often uses what deprecated tag?", options: ["render", "assign", "capture", "include"], correct: 3 },
    { question: "ChatGPT is good for?", options: ["Boilerplate and explanations", "Final production code", "Replacing devs", "Nothing"], correct: 0 },
    { question: "GitHub Copilot provides?", options: ["Project management", "Real-time code completion", "Hosting", "Email"], correct: 1 },
    { question: "AI code must be checked for?", options: ["Nothing", "Just syntax", "Deprecated tags, proper filters, mobile support", "Colors"], correct: 2 },
    { question: "AI is bad for?", options: ["Boilerplate", "CSS tweaks", "Simple loops", "Complex business logic decisions"], correct: 3 },
    { question: "AI-generated Liquid should use?", options: ["image_url (OS 2.0)", "img_url", "picture_url", "photo_url"], correct: 0 },
    { question: "AI code should handle?", options: ["Nothing", "Empty states", "Only success", "Just errors"], correct: 1 },
    { question: "Best AI prompt includes?", options: ["Vague request", "Single word", "Specific requirements + constraints", "Nothing"], correct: 2 },
    { question: "Cursor AI is?", options: ["Mouse pointer", "Browser", "Terminal", "IDE with AI built-in"], correct: 3 },

    // Task 13: Career (10 questions)
    { question: "Junior developer salary range?", options: ["₹25-40k/month", "₹5-10k", "₹1-2L/month", "₹5L/month"], correct: 0 },
    { question: "Senior developer skills include?", options: ["Basic CSS only", "Architecture, headless, mentoring", "Just app installs", "Only frontend"], correct: 1 },
    { question: "Time to reach Senior level?", options: ["1 month", "10 years", "3-5 years", "Never"], correct: 2 },
    { question: "Shopify Dev Docs URL?", options: ["shopify.com", "help.shopify", "docs.shopify", "shopify.dev"], correct: 3 },
    { question: "Lead developer does?", options: ["Team management + strategy + client calls", "Only code", "Just CSS", "Nothing"], correct: 0 },
    { question: "To level up, learn?", options: ["Nothing new", "Headless, Hydrogen, GraphQL", "Only Liquid", "Just CSS"], correct: 1 },
    { question: "Hydrogen is for?", options: ["Water", "Theme editor", "Headless Shopify (React framework)", "Apps"], correct: 2 },
    { question: "GraphQL is?", options: ["Graph drawing", "CSS framework", "Database", "API query language"], correct: 3 },
    { question: "Final certification requires?", options: ["100% quiz scores + video walkthrough", "Nothing", "Just reading", "One quiz"], correct: 0 },
    { question: "Continuous learning is?", options: ["Optional", "Essential for career growth", "Waste of time", "Only for juniors"], correct: 1 }
];

// Export all
console.log("Enhanced Developer Training File Generated!");

// =============================================================================
// EXPANDED CONTENT: SHOPIFY DEVELOPER DEEP DIVE
// =============================================================================

// Expanded Task 2 Content - Platform Fundamentals Deep Dive
const task2ContentExpanded = `
<h2>📚 PART 2: PLATFORM FUNDAMENTALS - Shopify Architecture</h2>

<div class="content-section">
    <h3>🏗️ Online Store 2.0 Architecture</h3>
    <p>Shopify's Online Store 2.0 revolutionized theme development. Understanding this architecture is <strong>non-negotiable</strong>.</p>
    
    <div class="highlight-box">
        <strong>Key OS 2.0 Features:</strong>
        <ul>
            <li><strong>JSON Templates:</strong> No more hardcoded templates - sections everywhere</li>
            <li><strong>Section Rendering API:</strong> Dynamic section loading for AJAX</li>
            <li><strong>App Blocks:</strong> Apps integrate directly into theme sections</li>
            <li><strong>Metafields Everywhere:</strong> Custom data on any resource</li>
            <li><strong>Theme Architecture:</strong> Structured file organization</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📁 Theme File Structure</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Folder</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Examples</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/assets</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS, JS, images</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">base.css, theme.js</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/config</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme settings</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">settings_schema.json, settings_data.json</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/layout</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page wrappers</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">theme.liquid, password.liquid</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/locales</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Translation strings</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">en.default.json, es.json</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/sections</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reusable modules</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">header.liquid, featured-collection.liquid</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/snippets</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Small reusable bits</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">product-card.liquid, icons.liquid</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/templates</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page blueprints (JSON)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">product.json, collection.json</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🛍️ Product/Variant/Metafield Hierarchy</h3>
    <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; font-family: monospace;">
        <pre style="margin: 0; color: #E2E8F0;">
PRODUCT (Parent)
├── title, description, vendor, product_type
├── images[] (first image = featured)
├── tags[]
├── metafields (custom data)
│
└── VARIANTS[] (Children)
    ├── title, price, compare_at_price
    ├── sku, barcode
    ├── inventory_quantity
    ├── option1, option2, option3
    └── metafields (variant-specific data)
        </pre>
    </div>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Critical Limits:</strong>
        <ul>
            <li>Max 100 variants per product</li>
            <li>Max 3 options (Size, Color, Material)</li>
            <li>Max 250 images per product</li>
            <li>Each variant can only have 1 image</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Metafields Mastery</h3>
    <p>Metafields allow you to store custom data on any Shopify resource. This is <strong>essential</strong> for advanced customizations.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Resource</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common Metafields</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Case</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">specifications, materials, care_instructions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product detail tabs</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variant</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">weight_unit, dimensions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping calculator</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collection</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">banner_video, collection_story</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom collection pages</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">company_name, vip_tier</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">B2B, loyalty programs</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shop</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">announcement_bar, global_settings</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store-wide config</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>Liquid Access:</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto;">{{ product.metafields.custom.specifications.value }}
{{ product.metafields.custom.care_instructions | metafield_tag }}</pre>
    </div>
</div>

<div class="content-section">
    <h3>🌍 Multi-Currency & International Setup</h3>
    <p>Shopify Markets allows selling to multiple countries with localized experiences.</p>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">Currency</h4>
            <ul>
                <li>Shopify Payments enables auto-conversion</li>
                <li>Use <code>| money</code> filter (auto-converts)</li>
                <li><strong>Never</strong> hardcode currency symbols</li>
            </ul>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Language</h4>
            <ul>
                <li>Use <code>{{ 'general.button' | t }}</code> for translations</li>
                <li>All text in locale files, never hardcoded</li>
                <li>Test RTL languages (Arabic, Hebrew)</li>
            </ul>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">Markets</h4>
            <ul>
                <li>Configure duties & import taxes</li>
                <li>Set up local payment methods</li>
                <li>Adjust shipping zones per market</li>
            </ul>
        </div>
    </div>
</div>
`;

// Expanded Task 4 Content - Liquid Programming Deep Dive
const task4ContentExpanded = `
<h2>📚 PART 4: LIQUID PROGRAMMING MASTERY</h2>

<div class="content-section">
    <h3>💧 Liquid Fundamentals</h3>
    <p>Liquid is Shopify's templating language. Master it and you master Shopify development.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px;">
            <h4 style="color: #6366F1; margin-top: 0;">{{ Output Tags }}</h4>
            <p>Output data to the page</p>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">{{ product.title }}
{{ product.price | money }}
{{ 'now' | date: "%B %d, %Y" }}</pre>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px;">
            <h4 style="color: #10B981; margin-top: 0;">{% Logic Tags %}</h4>
            <p>Control flow, no output</p>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">{% if product.available %}
  In Stock
{% endif %}

{% for item in cart.items %}
  {{ item.title }}
{% endfor %}</pre>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🔧 Essential Filters</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Filter</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| money</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Format price with currency</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ product.price | money }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| image_url</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Get sized image URL</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ img | image_url: width: 400 }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| t</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Translate string</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ 'products.add_to_cart' | t }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| append</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add to end of string</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ 'file' | append: '.css' }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| where</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Filter array</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ products | where: 'available', true }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| sort</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sort array</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ products | sort: 'price' }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| default</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fallback value</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ product.vendor | default: 'Digital Heroes' }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| json</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Convert to JSON</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ product | json }}</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Common Patterns</h3>
    
    <div class="highlight-box">
        <strong>Pattern 1: Related Products</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px;">
{% assign related = product.collections.first.products | where: 'available', true %}
{% for item in related limit: 4 %}
  {% unless item.id == product.id %}
    {% render 'product-card', product: item %}
  {% endunless %}
{% endfor %}
        </pre>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Pattern 2: Color Swatches</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px;">
{% for option in product.options_with_values %}
  {% if option.name == 'Color' %}
    {% for value in option.values %}
      <button 
        class="swatch"
        style="background-color: {{ value | handleize }};"
        data-value="{{ value }}"
      >
        {{ value }}
      </button>
    {% endfor %}
  {% endif %}
{% endfor %}
        </pre>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Pattern 3: Cart Drawer Item</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px;">
{% for item in cart.items %}
  <div class="cart-item" data-key="{{ item.key }}">
    <img src="{{ item.image | image_url: width: 100 }}" alt="{{ item.title }}">
    <div class="cart-item__details">
      <h4>{{ item.product.title }}</h4>
      {% if item.variant.title != 'Default Title' %}
        <p>{{ item.variant.title }}</p>
      {% endif %}
      <p>{{ item.line_price | money }}</p>
    </div>
    <input type="number" value="{{ item.quantity }}" min="1">
    <button data-action="remove" data-key="{{ item.key }}">Remove</button>
  </div>
{% endfor %}
        </pre>
    </div>
</div>

<div class="content-section">
    <h3>🧱 Section Schema Deep Dive</h3>
    <p>Sections are the building blocks of OS 2.0 themes. Every section needs a schema.</p>
    
    <pre style="background: rgba(30, 41, 59, 0.8); padding: 20px; border-radius: 12px; overflow-x: auto;">
{% schema %}
{
  "name": "Featured Collection",
  "tag": "section",
  "class": "featured-collection",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Shop Our Best Sellers"
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "products_to_show",
      "min": 2,
      "max": 12,
      "step": 1,
      "default": 4,
      "label": "Products to Show"
    },
    {
      "type": "select",
      "id": "columns",
      "label": "Desktop Columns",
      "options": [
        { "value": "2", "label": "2 columns" },
        { "value": "3", "label": "3 columns" },
        { "value": "4", "label": "4 columns" }
      ],
      "default": "4"
    }
  ],
  "blocks": [
    {
      "type": "product",
      "name": "Product Card",
      "settings": [
        {
          "type": "checkbox",
          "id": "show_vendor",
          "label": "Show Vendor",
          "default": false
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Featured Collection"
    }
  ]
}
{% endschema %}
    </pre>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Common Schema Mistakes:</strong>
        <ul>
            <li>Missing comma between settings - causes entire section to break</li>
            <li>Using 'type' instead of 'id' for referencing - they're different!</li>
            <li>Forgetting 'presets' - section won't appear in theme editor</li>
            <li>Invalid JSON syntax - always validate with JSON linter</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ Deprecated vs Modern Tags</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ DEPRECATED</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ USE INSTEAD</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% include 'snippet' %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% render 'snippet' %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Render is faster, isolated scope</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| img_url: '400x'</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| image_url: width: 400</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New syntax, more options</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.featured_image }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.featured_media }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Media includes images, video, 3D</td>
        </tr>
    </table>
</div>
`;

// Expanded Task 6 Content - Speed Optimization Deep Dive
const task6ContentExpanded = `
<h2>📚 PART 6: SPEED OPTIMIZATION - Core Web Vitals Mastery</h2>

<div class="content-section">
    <h3>⚡ Why Speed = Money</h3>
    <div class="highlight-box">
        <strong>The Speed/Revenue Connection:</strong>
        <ul>
            <li>Every 1 second delay = <strong>7% conversion drop</strong></li>
            <li>Amazon: 100ms delay = 1% revenue loss</li>
            <li>Google: 3+ second load = 53% mobile users bounce</li>
            <li>Mobile users expect < 3 seconds to load</li>
        </ul>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Digital Heroes Standard:</strong><br>
        <ul>
            <li>Mobile PageSpeed: <strong>85+</strong> (minimum)</li>
            <li>Desktop PageSpeed: <strong>90+</strong> (minimum)</li>
            <li>No project launches under these thresholds</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Core Web Vitals Explained</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Name</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Good</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Measures</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Largest Contentful Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2.5s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When main content loads</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FID</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Input Delay</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 100ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to first interaction</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cumulative Layout Shift</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 0.1</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Visual stability</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>INP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interaction to Next Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 200ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Responsiveness (replaced FID)</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization</h3>
    <p>Images are typically 50-80% of page weight. Optimize them or suffer.</p>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">Use image_url with width</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">{{ image | image_url: width: 400 }}
{{ image | image_url: width: 800, height: 600, crop: 'center' }}</pre>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Always use loading="lazy"</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;"><img 
  src="{{ image | image_url: width: 400 }}"
  loading="lazy"
  width="400"
  height="300"
  alt="{{ image.alt | escape }}"
></pre>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">Use srcset for responsive</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;"><img 
  srcset="{{ image | image_url: width: 400 }} 400w,
          {{ image | image_url: width: 800 }} 800w,
          {{ image | image_url: width: 1200 }} 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
></pre>
        </div>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Hero Images (LCP Killers):</strong>
        <ul>
            <li>Do NOT lazy load above-the-fold images</li>
            <li>Add <code>loading="eager"</code> and <code>fetchpriority="high"</code></li>
            <li>Use appropriate sizes (mobile: 750w max, desktop: 1500w max)</li>
            <li>Compress before upload (TinyPNG, Squoosh)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📜 JavaScript Optimization</h3>
    
    <div class="highlight-box">
        <strong>Script Loading Strategies:</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; margin-top: 10px;">
&lt;!-- WRONG: Blocks rendering --&gt;
&lt;script src="file.js"&gt;&lt;/script&gt;

&lt;!-- BETTER: Parse while loading --&gt;
&lt;script src="file.js" async&gt;&lt;/script&gt;

&lt;!-- BEST: Execute after DOM ready --&gt;
&lt;script src="file.js" defer&gt;&lt;/script&gt;
        </pre>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Issue</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Impact</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too many apps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Each adds 50-500KB JS</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limit to 5-8 apps max</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inline scripts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Block rendering</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Move to external file, defer</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unused code</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wasted bytes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clean uninstall app residue</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">jQuery dependency</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">~90KB overhead</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use vanilla JS when possible</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔧 Speed Optimization Checklist</h3>
    <div class="highlight-box">
        <ul>
            <li>☐ Run PageSpeed Insights (mobile first)</li>
            <li>☐ Compress all images before upload</li>
            <li>☐ Use loading="lazy" for below-fold images</li>
            <li>☐ Use loading="eager" for hero images</li>
            <li>☐ Add width/height attributes to prevent CLS</li>
            <li>☐ Defer non-critical JavaScript</li>
            <li>☐ Audit and remove unused apps</li>
            <li>☐ Clean up leftover app code in theme</li>
            <li>☐ Preload critical fonts</li>
            <li>☐ Use system fonts or limit custom fonts to 2</li>
            <li>☐ Enable browser caching</li>
            <li>☐ Minimize render-blocking CSS</li>
        </ul>
    </div>
</div>
`;

// Expanded Task 7 Content - Apps & Integrations
const task7ContentExpanded = `
<h2>📚 PART 7: APPS & INTEGRATIONS - The Healthy App Stack</h2>

<div class="content-section">
    <h3>🔌 The 5-8 App Rule</h3>
    <div class="warning-box">
        <strong>⚠️ Critical Rule:</strong> Never exceed 5-8 apps on a store. Every additional app adds:
        <ul>
            <li>50-500KB of JavaScript</li>
            <li>Potential conflicts with other apps</li>
            <li>Security vulnerabilities</li>
            <li>Store speed degradation</li>
            <li>Dependency on third-party uptime</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Essential App Categories</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recommended Apps</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notes</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reviews</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Judge.me, Loox, Yotpo</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pick ONE, never multiple</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email Marketing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo, Mailchimp, Omnisend</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo preferred for Shopify</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upsell/Cross-sell</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart Upsell, ReConvert</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Watch for checkout conflicts</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ShipStation, Easyship</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">International shipping complex</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Triple Whale, Lifetimely</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use for attribution</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Backup</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rewind</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">MANDATORY for every store</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🗑️ Clean Uninstall Protocol</h3>
    <p>Deleting an app from Shopify admin does NOT remove its code from your theme!</p>
    
    <div class="highlight-box">
        <strong>Clean Uninstall Steps:</strong>
        <ol>
            <li>Document what the app does (screenshot settings)</li>
            <li>Uninstall from Apps > App Settings</li>
            <li>Search theme files for app name/vendor</li>
            <li>Check these files for leftover code:
                <ul>
                    <li><code>theme.liquid</code> (scripts, stylesheets)</li>
                    <li><code>snippets/</code> folder</li>
                    <li><code>assets/</code> folder (CSS/JS files)</li>
                    <li><code>config/settings_data.json</code></li>
                </ul>
            </li>
            <li>Remove all references</li>
            <li>Test site functionality</li>
            <li>Run PageSpeed - score should improve</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ App Conflict Resolution</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Symptom</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Likely Cause</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Solution</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart not updating</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multiple cart apps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use only one cart app</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">JS console errors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">jQuery version conflict</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standardize jQuery version</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout broken</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout script conflict</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disable checkout apps one by one</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slow page load</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too many apps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Audit and reduce</td>
        </tr>
    </table>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Debug Process:</strong>
        <ol>
            <li>Test on fresh Dawn theme (isolate theme vs app)</li>
            <li>Disable apps one by one</li>
            <li>Check browser console for specific errors</li>
            <li>Contact app support with specific error messages</li>
        </ol>
    </div>
</div>
`;

// Expanded Task 9 Content - QA & Testing Deep Dive
const task9ContentExpanded = `
<h2>📚 PART 9: QA & TESTING - The 60-Point Quality Gate</h2>

<div class="content-section">
    <h3>🎯 The Digital Heroes QA Standard</h3>
    <div class="warning-box">
        <strong>⚠️ Zero Tolerance Policy:</strong><br>
        No code goes live without passing our 60-point checklist. This is non-negotiable. Every bug on production is a reflection of YOUR professionalism.
    </div>
</div>

<div class="content-section">
    <h3>📱 Device & Browser Testing Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Platform</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Browsers</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">iOS (iPhone)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Safari, Chrome</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🔴 Critical (largest segment)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Android</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chrome, Samsung Internet</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🔴 Critical</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Windows</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chrome, Edge, Firefox</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🟡 High</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">MacOS</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Safari, Chrome</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🟡 High</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">iPad/Tablet</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Safari, Chrome</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🟢 Medium</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>Testing Tools:</strong>
        <ul>
            <li><strong>BrowserStack/LambdaTest:</strong> Real device testing</li>
            <li><strong>Chrome DevTools:</strong> Device emulation (not perfect)</li>
            <li><strong>Physical Devices:</strong> Best for iOS Safari issues</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>✅ 60-Point QA Checklist</h3>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">HOMEPAGE (10 points)</h4>
            <ul>
                <li>☐ Hero loads under 3 seconds</li>
                <li>☐ All images display correctly</li>
                <li>☐ Navigation works on all devices</li>
                <li>☐ Mobile menu opens/closes properly</li>
                <li>☐ Newsletter signup works</li>
                <li>☐ Footer links are correct</li>
                <li>☐ Trust badges display</li>
                <li>☐ Announcement bar (if any) is dismissible</li>
                <li>☐ No horizontal scroll on mobile</li>
                <li>☐ Page scroll is smooth</li>
            </ul>
        </div>
        
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">COLLECTION PAGES (10 points)</h4>
            <ul>
                <li>☐ Products display correctly</li>
                <li>☐ Filters work (price, size, color)</li>
                <li>☐ Sort functionality works</li>
                <li>☐ Pagination/infinite scroll works</li>
                <li>☐ Quick view (if applicable)</li>
                <li>☐ Product cards have hover states</li>
                <li>☐ Sale prices show correctly</li>
                <li>☐ Sold out badges display</li>
                <li>☐ Collection image/description shows</li>
                <li>☐ Mobile grid looks good</li>
            </ul>
        </div>
        
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">PRODUCT PAGES (15 points)</h4>
            <ul>
                <li>☐ Images zoom/swipe correctly</li>
                <li>☐ Variant selector works</li>
                <li>☐ Price updates on variant change</li>
                <li>☐ Image updates on variant change</li>
                <li>☐ Add to Cart button works</li>
                <li>☐ Buy Now button (if applicable)</li>
                <li>☐ Quantity selector works</li>
                <li>☐ Description/tabs content loads</li>
                <li>☐ Reviews section works</li>
                <li>☐ Related products show</li>
                <li>☐ Trust elements visible</li>
                <li>☐ Mobile CTAs sticky (if designed)</li>
                <li>☐ Metafields display correctly</li>
                <li>☐ Size chart opens (if applicable)</li>
                <li>☐ Sold out variants are disabled</li>
            </ul>
        </div>
        
        <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
            <h4 style="color: #EF4444; margin-top: 0;">CART & CHECKOUT (15 points)</h4>
            <ul>
                <li>☐ Add to Cart shows feedback</li>
                <li>☐ Cart drawer/page opens correctly</li>
                <li>☐ Quantity can be changed</li>
                <li>☐ Items can be removed</li>
                <li>☐ Subtotal updates correctly</li>
                <li>☐ Discount codes work</li>
                <li>☐ Shipping calculator (if present)</li>
                <li>☐ Checkout button works</li>
                <li>☐ Checkout loads properly</li>
                <li>☐ All payment methods work</li>
                <li>☐ Express checkout buttons display</li>
                <li>☐ Order confirmation page works</li>
                <li>☐ Test order goes through</li>
                <li>☐ Order confirmation email received</li>
                <li>☐ Order appears in Shopify Admin</li>
            </ul>
        </div>
        
        <div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #8B5CF6;">
            <h4 style="color: #8B5CF6; margin-top: 0;">TECHNICAL (10 points)</h4>
            <ul>
                <li>☐ No console errors</li>
                <li>☐ No broken images (404s)</li>
                <li>☐ No broken links</li>
                <li>☐ PageSpeed Mobile 85+</li>
                <li>☐ PageSpeed Desktop 90+</li>
                <li>☐ SSL certificate valid</li>
                <li>☐ Favicon displays</li>
                <li>☐ Meta titles/descriptions set</li>
                <li>☐ Schema markup valid</li>
                <li>☐ Robots.txt correct</li>
            </ul>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🐞 Console Error Interpretation</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Error</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meaning</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>Uncaught TypeError</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">JS accessing undefined</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add null checks</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>404 Not Found</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Missing file/image</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upload or fix path</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>CORS blocked</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cross-origin request</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use proxy or server-side</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>Liquid error</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad Liquid syntax</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check Liquid code</td>
        </tr>
    </table>
</div>
`;

// Expanded Task 11 Content - Crisis Management Deep Dive
const task11ContentExpanded = `
<h2>📚 PART 11: CRISIS MANAGEMENT - Handling Dev Emergencies</h2>

<div class="content-section">
    <h3>🔥 Crisis Response Protocol</h3>
    <div class="warning-box">
        <strong>⚠️ First Rule of Crisis:</strong><br>
        <strong>DON'T PANIC.</strong> Every minute you spend panicking is money the client is losing. Stay calm, be methodical, communicate clearly.
    </div>
</div>

<div class="content-section">
    <h3>🚨 Scenario 1: Site Completely Down</h3>
    <div class="highlight-box">
        <strong>Immediate Actions (0-5 minutes):</strong>
        <ol>
            <li><strong>Run diagnostics:</strong>
                <ul>
                    <li>Check status.shopify.com - Is Shopify down?</li>
                    <li>Test in incognito - Is it cache?</li>
                    <li>Try different network - Is it CDN?</li>
                </ul>
            </li>
            <li><strong>If theme issue:</strong>
                <ul>
                    <li>Go to Online Store > Themes</li>
                    <li>Publish previous backup theme immediately</li>
                    <li>This restores site in < 30 seconds</li>
                </ul>
            </li>
            <li><strong>Communicate to PM:</strong>
                <ul>
                    <li>"Site issue detected at [time]. Scope: [description]. ETA to fix: [time]"</li>
                    <li>Never say "I don't know when"</li>
                </ul>
            </li>
        </ol>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Root Cause Analysis (after recovery):</strong>
        <ul>
            <li>What changed in the last 24 hours?</li>
            <li>Was an app updated?</li>
            <li>Was theme code edited?</li>
            <li>Document in post-mortem</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚨 Scenario 2: Checkout Broken</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Symptom</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Likely Cause</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Immediate Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blank checkout page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Script error</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disable all checkout apps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment declined always</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gateway issue</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check Payments settings, enable backup</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping not showing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Zone misconfigured</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check shipping zones for gaps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Discount not applying</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Expired/conditions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check discount settings</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚨 Scenario 3: Data Loss</h3>
    <div class="highlight-box">
        <strong>Recovery Options:</strong>
        <ol>
            <li><strong>Rewind App:</strong> Restore to specific point in time (if installed)</li>
            <li><strong>CSV Exports:</strong> Check Settings > Data > Export for recent exports</li>
            <li><strong>Theme Backup:</strong> Download previous theme version from theme library</li>
            <li><strong>Shopify Support:</strong> For severe cases, contact support (they have backups)</li>
        </ol>
    </div>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Prevention is Key:</strong>
        <ul>
            <li>ALWAYS install Rewind on every store</li>
            <li>Never delete products/collections without backup</li>
            <li>Test in dev theme, never live</li>
            <li>Export CSVs before bulk operations</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>💬 Crisis Communication Templates</h3>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8);">
        <strong>Template 1: Immediate Alert to PM</strong>
        <pre style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
🚨 ALERT: [Store Name] - [Issue Type]
Time Detected: [HH:MM]
Impact: [Brief description - e.g., "Checkout unusable"]
Current Action: [What you're doing now]
ETA to Resolution: [Time estimate]
Updates: I'll update every 15 minutes until resolved.
        </pre>
    </div>
    
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); margin-top: 15px;">
        <strong>Template 2: Resolution Confirmation</strong>
        <pre style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
✅ RESOLVED: [Store Name] - [Issue Type]
Time Resolved: [HH:MM]
Duration: [X] minutes
Root Cause: [Brief explanation]
Fix Applied: [What was done]
Preventive Action: [What we'll do to prevent recurrence]
        </pre>
    </div>
</div>
`;

// Expanded Task 12 Content - AI-Powered Development
const task12ContentExpanded = `
<h2>📚 PART 12: AI-POWERED DEVELOPMENT</h2>

<div class="content-section">
    <h3>🤖 AI as Your Coding Partner</h3>
    <p>AI tools like ChatGPT and GitHub Copilot can 10x your productivity—if used correctly.</p>
    
    <div class="highlight-box">
        <strong>When to Use AI:</strong>
        <ul>
            <li>✅ Boilerplate code (loops, conditions, basic patterns)</li>
            <li>✅ Explaining complex code</li>
            <li>✅ Generating regex patterns</li>
            <li>✅ Writing documentation</li>
            <li>✅ Debugging suggestions</li>
        </ul>
        
        <strong>When NOT to Use AI:</strong>
        <ul>
            <li>❌ Security-sensitive code without review</li>
            <li>❌ Business logic without understanding</li>
            <li>❌ Copy-pasting without testing</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📝 Effective AI Prompts for Shopify</h3>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">Prompt 1: Section Schema</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">
"Create a Shopify Liquid section schema for a 
testimonial slider. Include settings for:
- Heading text
- Background color picker  
- Number of testimonials (2-6 range)
- Blocks for individual testimonials with 
  name, role, image, and quote fields.
Use OS 2.0 syntax. Include presets."
            </pre>
        </div>
        
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Prompt 2: JavaScript Pattern</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">
"Write vanilla JavaScript for Shopify cart 
drawer that:
1. Opens on Add to Cart click
2. Fetches cart.js via AJAX
3. Renders cart items 
4. Handles quantity updates
5. Handles remove item
6. Closes on overlay click
7. No jQuery dependency"
            </pre>
        </div>
        
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">Prompt 3: Debugging Help</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">
"Shopify Liquid error on product page:
[Paste exact error message]

This is my code:
[Paste relevant code]

What's wrong and how do I fix it?
Explain the issue clearly."
            </pre>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ AI Code Verification Checklist</h3>
    <div class="warning-box">
        <strong>NEVER trust AI code blindly. Always verify:</strong>
        <ul>
            <li>☐ Does it use <code>render</code> not <code>include</code>?</li>
            <li>☐ Does it use <code>image_url</code> not <code>img_url</code>?</li>
            <li>☐ Does it handle null/undefined cases?</li>
            <li>☐ Is the JSON schema valid?</li>
            <li>☐ Does it work on mobile?</li>
            <li>☐ Are there any console errors?</li>
            <li>☐ Does it follow DRY principles?</li>
            <li>☐ Is it secure (no XSS vulnerabilities)?</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🔧 GitHub Copilot Best Practices</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Practice</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Write clear comments first</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Copilot uses context to generate better code</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Accept suggestion, then modify</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use as starting point, not final answer</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tab through alternatives</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First suggestion isn't always best</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Test every suggestion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI makes confident mistakes</td>
        </tr>
    </table>
</div>
`;

// Additional Quiz Questions for Expanded Content
const additionalQuizQuestions = [
    // Platform Fundamentals (15 more)
    { question: "What file format are OS 2.0 templates stored in?", options: ["Liquid", "YAML", "JSON", "XML"], correct: 2 },
    { question: "Maximum variants per product?", options: ["50", "500", "200", "100"], correct: 3 },
    { question: "Where are translation strings stored?", options: ["/locales", "/assets", "/config", "/templates"], correct: 0 },
    { question: "What folder contains sections?", options: ["/snippets", "/sections", "/templates", "/layout"], correct: 1 },
    { question: "Settings_schema.json is in which folder?", options: ["/assets", "/layout", "/config", "/locales"], correct: 2 },
    { question: "How many options maximum per product?", options: ["2", "5", "4", "3"], correct: 3 },
    { question: "To format price correctly, use which filter?", options: ["| money", "| currency", "| price", "| format"], correct: 0 },
    { question: "Hardcoding currency symbols is:", options: ["Recommended", "Forbidden", "Optional", "Required"], correct: 1 },
    { question: "Which file wraps all pages?", options: ["header.liquid", "base.liquid", "theme.liquid", "index.liquid"], correct: 2 },
    { question: "Metafields are accessed via:", options: ["product.meta", "product.data", "product.custom", "product.metafields"], correct: 3 },

    // Liquid Programming (15 more)
    { question: "{{ }} tags are for:", options: ["Output", "Logic", "Comments", "Loops"], correct: 0 },
    { question: "{% %} tags are for:", options: ["Output", "Logic/Control", "Comments", "Variables"], correct: 1 },
    { question: "Which filter translates strings?", options: ["| translate", "| lang", "| t", "| i18n"], correct: 2 },
    { question: "To get sized image, use:", options: ["img_url", "media_url", "picture_url", "image_url"], correct: 3 },
    { question: "Correct loop syntax is:", options: ["{% for x in y %}", "foreach x in y", "loop x in y", "for(x in y)"], correct: 0 },
    { question: "Schema must be in which section of file?", options: ["Top", "Bottom", "Middle", "Anywhere"], correct: 1 },
    { question: "Missing comma in schema causes:", options: ["Warning", "Nothing", "Entire section breaks", "Slow load"], correct: 2 },
    { question: "Presets in schema enable:", options: ["Speed", "Analytics", "Caching", "Section in theme editor"], correct: 3 },
    { question: "Use 'render' instead of:", options: ["include", "assign", "capture", "section"], correct: 0 },
    { question: "Default filter provides:", options: ["Speed", "Fallback values", "Caching", "Validation"], correct: 1 },

    // Speed Optimization (15 more) 
    { question: "Every 1 second delay equals what conversion drop?", options: ["3%", "5%", "7%", "10%"], correct: 2 },
    { question: "LCP stands for:", options: ["Lazy Content Paint", "Layout Complete Paint", "Load Complete Point", "Largest Contentful Paint"], correct: 3 },
    { question: "CLS measures:", options: ["Visual Stability", "Speed", "Interactivity", "Load time"], correct: 0 },
    { question: "Good LCP is under:", options: ["1s", "2.5s", "5s", "10s"], correct: 1 },
    { question: "Good CLS is under:", options: ["1.0", "0.5", "0.1", "2.0"], correct: 2 },
    { question: "Hero images should use:", options: ["loading=lazy", "No loading attr", "loading=defer", "loading=eager"], correct: 3 },
    { question: "To prevent CLS, images need:", options: ["Width/Height attributes", "Title", "Alt text", "Lazy loading"], correct: 0 },
    { question: "Script defer means:", options: ["Load first", "Execute after DOM", "Block rendering", "Ignore"], correct: 1 },
    { question: "Images are typically what % of page weight?", options: ["10-20%", "30-40%", "50-80%", "90%+"], correct: 2 },
    { question: "WebP provides:", options: ["Better SEO", "Better fonts", "Better colors", "Better compression"], correct: 3 },

    // Apps & Integration (10 more)
    { question: "Maximum recommended apps?", options: ["5-8", "3-5", "10-15", "20+"], correct: 0 },
    { question: "Uninstalling app removes theme code?", options: ["Yes", "No - manual cleanup needed", "Sometimes", "Always"], correct: 1 },
    { question: "Each app adds how much JavaScript?", options: ["1-10KB", "1-5MB", "50-500KB", "Nothing"], correct: 2 },
    { question: "Which backup app is recommended?", options: ["Backup Pro", "Theme Guard", "Save It", "Rewind"], correct: 3 },
    { question: "Too many cart apps cause:", options: ["Cart not updating", "Speed boost", "Better UX", "Nothing"], correct: 0 },
    { question: "jQuery version conflicts cause:", options: ["Speed boost", "JS console errors", "Better UX", "Nothing"], correct: 1 },
    { question: "App residue is found in:", options: ["Only assets", "Only config", "theme.liquid and snippets", "Nowhere"], correct: 2 },
    { question: "After clean uninstall, PageSpeed should:", options: ["Stay same", "Crash", "Decrease", "Improve"], correct: 3 },

    // QA & Testing (10 more)
    { question: "Most critical testing platform?", options: ["iOS Safari", "Windows Chrome", "Firefox", "Opera"], correct: 0 },
    { question: "Digital Heroes QA standard is:", options: ["30 points", "60 points", "45 points", "100 points"], correct: 1 },
    { question: "Zero Tolerance means:", options: ["Some bugs OK", "Client decides", "No bugs on production", "Speed matters more"], correct: 2 },
    { question: "DevTools emulation is:", options: ["Perfect", "Useless", "Better than real", "Not perfect - use real devices"], correct: 3 },
    { question: "Console red errors should be:", options: ["Fixed immediately", "Ignored", "Noted for later", "Celebrated"], correct: 0 },
    { question: "Test orders should use:", options: ["Real payment", "Test mode", "Neither", "Client's card"], correct: 1 },
    { question: "Broken checkout priority is:", options: ["Low", "Medium", "Critical - immediate fix", "Not our problem"], correct: 2 },

    // Crisis Management (10 more)
    { question: "First rule of crisis is:", options: ["Panic", "Hide", "Blame someone", "Don't panic"], correct: 3 },
    { question: "Site down - first check:", options: ["status.shopify.com", "Delete theme", "Reboot computer", "Email client"], correct: 0 },
    { question: "Fastest recovery method:", options: ["Rebuild theme", "Publish backup theme", "Contact Shopify", "Wait"], correct: 1 },
    { question: "Crisis updates should be:", options: ["Never", "Once a day", "Every 15 minutes", "When fixed"], correct: 2 },
    { question: "Post-mortem answers:", options: ["Who to blame", "Nothing", "How to hide it", "Root cause & prevention"], correct: 3 },
    { question: "Rewind app is for:", options: ["Backups & recovery", "Speed", "SEO", "Analytics"], correct: 0 },

    // AI Development (5 more)
    { question: "AI code should be:", options: ["Trusted 100%", "Always verified", "Never used", "Only for CSS"], correct: 1 },
    { question: "Good AI prompt includes:", options: ["Just 'help'", "Nothing detailed", "Specific requirements", "Random words"], correct: 2 },
    { question: "Copilot uses comments for:", options: ["Nothing", "Storage", "Speed", "Better context"], correct: 3 },
    { question: "AI often uses deprecated:", options: ["include", "render", "capture", "assign"], correct: 0 },
    { question: "First suggestion is always:", options: ["Best", "Not always best - check alternatives", "Wrong", "Ignored"], correct: 1 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

// Task 1: Developer Mindset Quiz — HARD

const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Half-day salary deduction", "Verbal warning for the first time", "Written warning recorded in your file", "No consequence if it's less than 30 minutes late"], c: 0 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself", "Ignore it — it's not your problem — this is the industry-standard position backed by conventional practice", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — research supports this methodology as the most effective for achieving measurable improvements"], c: 0 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach most teams follow", "Those with exceptional KPI scores — this is the standard approach most teams follow", "Senior developers and team leads primarily", "Everyone including interns"], c: 3 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — applying this principle consistently across all projects builds a reputation for professional excellence", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As an ally whose problem is your common enemy — listen, understand, collaborate", "As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As someone who should be transferred to management"], c: 0 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "No specific requirement as long as you're online", "25 Mbps", "10+ Mbps"], c: 3 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "10-15% increment for meeting expectations", "No increment and placed on a Performance Improvement Plan (PIP)", "Verbal warning but salary stays the same"], c: 2 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — maintaining goodwill protects the long-term relationship and future revenue", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["30 days", "7 days", "14 days", "60 days"], c: 0 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "A rough guideline to review monthly — understanding why this works helps prevent the same category of problems from recurring in the future", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A reference document primarily for new employees during onboarding"], c: 2 }
];

const task2Quiz = [
    { q: "At Digital Heroes, the 'Revenue Developer' mindset means:", o: ["Developers should focus on learning sales skills since coding alone doesn't generate revenue for the company — this aligns with company best practices and ensures consistent results across different project types", "Revenue isn't a developer's concern — PMs and sales handle revenue while developers only focus on code quality", "Developers should track their personal billable hours and maximize the number of hours billed to each client", "Every line of code directly impacts client revenue — a slow page, a broken checkout, or a bad UX costs the client money and costs Digital Heroes its reputation and future contracts"], c: 3 },
    { q: "The Digital Heroes 'Zero Tolerance for Bugs' principle means:", o: ["All bugs are treated equally regardless of severity since even minor visual bugs are termination-worthy offenses — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "Critical bugs (broken checkout, data loss, security) must be fixed before ANY handoff — shipping known Critical bugs violates the SOP and breaks the quality chain for the entire team", "Zero bugs is the literal expectation — any developer who introduces a single bug shows they aren't qualified for the role", "Only QA team members are responsible for finding bugs — developers who self-test are wasting billable time"], c: 1 },
    { q: "Speed is Revenue: A 1-second delay in page load time costs approximately:", o: ["Nothing measurable — this is the industry-standard position backed by conventional practice", "Less than 1% conversion difference — this reflects the standard operating procedure most organizations follow", "Affects mobile users — this is the standard approach most teams follow", "7% reduction in conversions — speed is not a technical metric, it's a financial one"], c: 3 },
    { q: "Plan Twice, Code Once means:", o: ["Write documentation before coding — this reflects the standard operating procedure most organizations follow", "Plan your career trajectory — this reflects the standard operating procedure most organizations follow", "Spending 30 minutes planning saves 3 hours of debugging — rushed code creates compounding technical debt", "Write unit tests before code — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The 10x Developer Myth: What ACTUALLY makes a developer 10x more productive?", o: ["Solving the RIGHT problems — understanding business requirements prevents building wrong features", "Typing speed and shortcuts — this reflects the standard operating procedure most organizations follow", "Using the latest frameworks — this reflects the standard operating procedure most organizations follow", "Working 10x more hours — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Non-Negotiable Rules include: Never push directly to production because:", o: ["Untested code in production means real customers experience bugs — staging/testing must come first", "It's traditional development practice — this reflects the standard operating procedure most organizations follow", "Managers need to review code first — this reflects the standard operating procedure most organizations follow", "Git branches make merges easier — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The Quality Checklist before any deployment must include:", o: ["Cross-browser testing, mobile testing, performance check, SEO verification, and accessibility review", "Checking if it works on Chrome — this is the standard approach most teams follow", "Just running the automated tests — this reflects the standard operating procedure most organizations follow", "Getting PM approval via Slack — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A developer finds a 'quick hack' that solves the issue but creates technical debt. The correct approach:", o: ["Fix it properly — technical debt compounds like interest, today's shortcut becomes next month's crisis", "Ship the hack — deadlines matter more", "Document the hack for future cleanup — this aligns with industry best practices and ensures consistent results across different project types", "Ask the PM to decide between hack and proper fix"], c: 0 },
    { q: "The $50,000/Day Difference means that a well-optimized Shopify store vs a poorly-built one can mean:", o: ["The difference between $50,000/day and $0/day — code quality directly impacts revenue", "A small difference in page load time — this reflects the standard operating procedure most organizations follow", "Better developer reviews — this reflects the standard operating procedure most organizations follow", "More interesting portfolio projects — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Zero Tolerance for Bugs principle states:", o: ["Minor bugs are acceptable if the feature works", "Bugs are a natural part of development cycles — the reasoning behind this connects directly to broader principles of professional service delivery", "Critical bugs need immediate attention — this is the standard approach most teams follow", "Every bug in production is a revenue leak — a broken add-to-cart costs real money every minute it's live"], c: 3 },
    { q: "Impact Calculation: If a store makes $10,000/day and you improve page load by 1 second:", o: ["Potentially $700+/day increase — the calculation proves developer work is directly tied to revenue", "No measurable business impact — this reflects the standard operating procedure most organizations follow", "Matters for stores over $100K/day — this is the standard approach most teams follow", "Speed improvements primarily help SEO — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Two Types of Developers: Order-takers vs Problem-solvers. Problem-solvers:", o: ["Understand the WHY behind requests, suggest better solutions, and anticipate issues before they occur", "Just complete assigned tickets faster — this reflects the standard operating procedure most organizations follow", "Focus primarily on code quality — this reflects the standard operating procedure most organizations follow", "Work more hours than order-takers — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

// Task 2: Platform Fundamentals Quiz — HARD
const task3Quiz = [
    { q: "Before starting development on any Shopify project at Digital Heroes, the required process is:", o: ["Jump straight into coding — the best way to understand a project is to start building it immediately and iterate and ensures long-term sustainability across deliverables", "Review the design files, understand the scope document, set up staging, and get PM confirmation on the tech stack — plan twice, code once is the company standard", "Wait for the client to explain every requirement in a call since written briefs never capture the full picture", "Start with the homepage only and wait for feedback before building additional pages to avoid unnecessary rework"], c: 1 },
    { q: "A client asks you to install a premium Shopify app directly in a live store. At Digital Heroes, the SOP requires:", o: ["Install it immediately since the client is paying and you should fulfill their request without delay or pushback — this method has been validated through extensive use across production sites and is the industry standard", "Install on staging first, test for theme conflicts and speed impact, document findings, get PM approval, then deploy to production — untested installs on live stores are a fireable offense", "Refuse since developers don't handle app installations — that's the PM's responsibility in the project workflow", "Install it but disable it until the next sprint cycle when there's time allocated for proper testing and review"], c: 1 },
    { q: "The Data Model Hierarchy: Products → Variants → Inventory Items matters because:", o: ["It's just database normalization — this reflects the standard operating procedure most organizations follow", "Developers rarely interact with products directly", "It primarily matters for large stores — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Understanding the hierarchy prevents bugs — a 'product' with 3 sizes has 3 variants with 3 separate inventory records"], c: 3 },
    { q: "Shopify Limits You Must Know: 100 variants per product means:", o: ["You can have unlimited product options — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Variants are rarely needed in real stores — this reflects the standard operating procedure most organizations follow", "This limit can be increased by contacting Shopify", "A product with 5 sizes × 5 colors × 5 materials = 125 variants which EXCEEDS the limit — planning prevents client surprises"], c: 3 },
    { q: "Multi-Market and International: A single Shopify store selling in USD and EUR requires:", o: ["Two separate Shopify stores — this reflects the standard operating procedure most organizations follow", "A third-party currency converter app primarily", "Shopify Markets configuration — one store, multiple currencies, prices, and domains per market", "Manual price updates for each currency — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Metafield Design implementation: Custom data like 'material composition' should use Metafields because:", o: ["Metafields are typed, validated, and accessible in Liquid/API — tags are unstructured strings with no validation", "Tags can store any custom data — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Custom fields slow down the store — this reflects the standard operating procedure most organizations follow", "Shopify Plus supports Metafields — this is the standard approach most teams follow"], c: 0 },
    { q: "Shopify's API rate limit (2 requests/second for private apps) means:", o: ["You can make unlimited API calls — this reflects the standard operating procedure most organizations follow", "Rate limits primarily apply to public apps — this reflects the standard operating procedure most organizations follow", "Bulk operations must use GraphQL Bulk Operations or pagination — hitting rate limits breaks integrations", "2 requests/second is enough for any operation"], c: 2 },
    { q: "The difference between a Shopify Collection and a Smart Collection:", o: ["Manual collections are curated, smart collections auto-populate based on rules — choosing wrong type means extra maintenance", "Both approaches achieve identical results in production — choosing between them is a matter of team preference with no practical impact", "Smart collections are Shopify Plus primarily — this reflects the standard operating procedure most organizations follow", "Collections and categories are the same thing"], c: 0 },
    { q: "Shopify webhooks are important because:", o: ["They enable real-time event reactions (order created, product updated) without polling — essential for integrations", "They're optional for most integrations — this reflects the standard operating procedure most organizations follow", "Large stores need webhooks — this is the standard approach most teams follow", "Webhooks replace the need for the API — this is the recommended approach based on current platform documentation and expert consensus"], c: 0 },
    { q: "3 API calls per second for REST vs GraphQL allowing bulk queries means:", o: ["GraphQL is preferred for data-heavy operations — one GraphQL query can replace 50 REST calls, staying under rate limits", "REST is always faster than GraphQL — following this approach consistently ensures predictable outcomes across all scenarios", "GraphQL and REST have the same rate limits — this reflects the standard operating procedure most organizations follow", "REST should be used for everything in Shopify"], c: 0 }
];

// Task 3: Theme Architecture Quiz — HARD
const task4Quiz = [
    { q: "The Digital Heroes speed optimization standard for Shopify stores requires:", o: ["A PageSpeed score above 50 is acceptable — Shopify themes are inherently slow and clients understand this limitation and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Target 90+ mobile score with documented optimizations: lazy loading, code splitting, image compression, and app audit — every millisecond of load time directly impacts the client's conversion rate", "Speed optimization is a separate billable service — developers don't optimize speed unless the client pays extra", "Use a fast theme template and don't modify it — custom code always makes Shopify stores slower regardless"], c: 1 },
    { q: "The 12 Essential Homepage Sections include the Announcement Bar because:", o: ["It fills space at the top — this reflects the standard operating procedure most organizations follow", "It's primarily needed for sales events — this reflects the standard operating procedure most organizations follow", "Shopify requires an announcement bar — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Free shipping thresholds and promos in the announcement bar directly reduce cart abandonment and boost AOV"], c: 3 },
    { q: "Mobile-First Development: Writing CSS for mobile first then using min-width media queries is better because:", o: ["Mobile CSS is simpler — this reflects the standard operating procedure most organizations follow", "Base styles serve 70%+ of traffic — desktop enhancements are progressive additions, not the other way around", "Max-width queries don't work in Shopify — this is the industry-standard position backed by conventional practice", "Mobile-first is just a development preference"], c: 1 },
    { q: "Using a theme with built-in filters vs building custom filters:", o: ["Custom filters are always better — following this approach consistently ensures predictable outcomes across all scenarios", "Theme filters are too basic for real stores — this reflects the standard operating procedure most organizations follow", "Built-in theme filters leverage Shopify's Search & Discovery app, saving weeks of development and maintenance", "Both approaches yield identical results — the seeming difference is a misconception from outdated documentation in functionality"], c: 2 },
    { q: "Theme architecture: sections/ vs snippets/ — when to use each?", o: ["They're interchangeable in OS 2.0 — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Sections are full-width customizable blocks; snippets are reusable code fragments — sections in templates, snippets inside sections", "Sections work with JSON templates — this is the standard approach most teams follow", "Snippets are deprecated in OS 2.0 — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A client wants 25 custom homepage sections. The developer should:", o: ["Build all 25 custom sections — this reflects the standard operating procedure most organizations follow", "Use a different platform that supports more sections", "Tell the client 25 sections is too many — this ensures compliance with professional standards and prevents cascading issues downstream", "Review which sections the theme already supports, customize existing ones, and only build truly unique sections — efficiency matters"], c: 3 },
    { q: "Dawn theme is recommended for learning because:", o: ["It's Shopify's reference implementation — clean, well-documented code that demonstrates OS 2.0 best practices", "It's the best theme for all projects — experienced professionals recognize this as the most reliable path for maintaining quality control", "It has the most features built-in — this reflects the standard operating procedure most organizations follow", "It's the primarily free theme available — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Image lazy loading in themes helps because:", o: ["It makes images look better — this reflects the standard operating procedure most organizations follow", "All modern themes include it automatically — this reflects the standard operating procedure most organizations follow", "Lazy loading is primarily for mobile — this reflects the standard operating procedure most organizations follow", "Images below the fold load on scroll, reducing initial page weight and improving Core Web Vitals"], c: 3 },
    { q: "Theme settings (settings_schema.json) vs Section settings: the difference is:", o: ["Theme settings are global (colors, fonts); section settings control individual blocks — using wrong type causes maintenance nightmares", "Both approaches produce equivalent outcomes in real-world use — the distinction exists in theory but not in practice", "Section settings override theme settings — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Shopify Plus uses theme settings — this is the standard approach most teams follow"], c: 0 },
    { q: "Duplicate theme before editing production is:", o: ["Mandatory — editing the live theme risks breaking the store for real customers during development", "Optional but recommended — this reflects the standard operating procedure most organizations follow", "Necessary for major changes — this is the standard approach most teams follow", "Unnecessary if you're experienced — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

// Task 4: Liquid Programming Quiz — HARD
const task5Quiz = [
    { q: "At Digital Heroes, when you encounter a bug during development that you didn't cause, the response is:", o: ["Ignore it since you're only responsible for your own assigned tickets and someone else introduced that bug — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles", "Document it, fix it if within your scope, or report it through the QA process with steps to reproduce — the interconnected chain means bugs anywhere become everyone's problem", "Fix it silently without telling anyone since documenting it might make a teammate look bad to management", "Leave a comment in the code saying 'not my bug' so future developers know who's responsible for the issue"], c: 1 },
    { q: "Your Shopify development task is taking longer than the estimated hours. At Digital Heroes, the SOP says:", o: ["Work unpaid overtime to hit the original estimate since going over budget is your personal failure as a developer — this is the recommended approach based on current documentation and expert consensus in the field today", "Communicate proactively to the PM BEFORE the deadline, explain the blocker, propose solutions, and get updated approval — silent deadline misses are worse than early re-estimation", "Submit the work incomplete at the deadline and let QA catch the missing parts during their review process", "Tell the client directly that the PM's estimate was wrong and negotiate more hours without PM involvement"], c: 1 },
    { q: "Loops: {% for product in collection.products %} — if the collection has 500 products, this loop:", o: ["Renders all 500 products at once — this reflects the standard operating procedure most organizations follow", "Is limited to 50 by default — Shopify paginates collections, you need {% paginate %} for controlled loading", "Automatically paginates — this reflects the standard operating procedure most organizations follow", "Works with collections under 100 products — this is the standard approach most teams follow"], c: 1 },
    { q: "Conditionals: {% if product.available %} checks:", o: ["Whether ANY variant has inventory — a product with 1/5 variants in stock is still 'available'", "If the product page exists — this reflects the standard operating procedure most organizations follow", "If the product is visible in the store — this reflects the standard operating procedure most organizations follow", "Whether the product is on sale — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Essential Filters: {{ product.price | money }} is important because:", o: ["money filter formats the price according to store's currency settings — without it, you get cents (1999 instead of 
    { q: ", ", o: [", ", ", ", ", ", "], c: 2 },
    { q: "Core Shopify Objects: {{ product.title }} outputs the product name because:", o: ["product is a Liquid object with properties — Liquid interprets {{ }} as output tags during server-side rendering", "It's a JavaScript variable — this reflects the standard operating procedure most organizations follow", "It's an HTML custom element — this reflects the standard operating procedure most organizations follow", "It reads from the database directly — research supports this methodology as the most effective for achieving measurable improvements"], c: 0 },
    { q: "Metafields in Liquid: {{ product.metafields.custom.material }} accesses:", o: ["A tag called 'material' — this reflects the standard operating procedure most organizations follow", "An automatically generated field — this reflects the standard operating procedure most organizations follow", "A product variant property — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "A custom metafield defined in the product's metafield namespace — structured, typed data beyond default product fields"], c: 3 },
    { q: "Section Schemas define:", o: ["The section's CSS styling — this reflects the standard operating procedure most organizations follow", "The section's JavaScript behavior — this reflects the standard operating procedure most organizations follow", "What settings appear in the theme editor — merchants customize sections through schema-defined controls", "Database structure for the section — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "{% assign sale_price = product.price | minus: 500 %} — the 500 represents:", o: ["$5.00 — Liquid prices are in cents not dollars", "Five hundred dollars — this reflects the standard operating procedure most organizations follow", "A percentage discount — this reflects the standard operating procedure most organizations follow", "An arbitrary unit that depends on the currency"], c: 0 },
    { q: "{% render 'product-card', product: item %} vs {% include 'product-card' %}: render is better because:", o: ["Include is faster to type — this reflects the standard operating procedure most organizations follow", "include is deprecated but still works fine — this reflects the standard operating procedure most organizations follow", "Both approaches achieve the same outcome in production environments — the choice is purely a matter of personal workflow preference in production", "render creates an isolated scope — the snippet can't access parent variables, preventing unintended side effects"], c: 3 },
    { q: "Liquid executes on:", o: ["The customer's browser (client-side) — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Both client and server — this reflects the standard operating procedure most organizations follow", "Shopify's servers before sending HTML to the browser — it's server-side templating, customers never see Liquid code", "In the Shopify CDN cache layer — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

// Task 5: Product Page Optimization Quiz — HARD
const task6Quiz = [
    { q: "Product page optimization: Why is the product image gallery the most critical element?", o: ["Images make the page look nice — this reflects the standard operating procedure most organizations follow", "Online shoppers can't touch products — images are the substitute for in-store examination, directly affecting purchase confidence", "Google ranks pages with images higher — understanding why this works helps prevent the same category of problems from recurring in the future", "Images fill space above the fold — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Product variant selector UX: Color variants shown as text labels vs color swatches:", o: ["Text labels are clearer — this reflects the standard operating procedure most organizations follow", "Text labels are more accessible — this reflects the standard operating procedure most organizations follow", "Color swatches give instant visual feedback — 'Ocean Blue' means nothing until the customer SEES the color", "Both perform equally in conversion tests — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Structured data (JSON-LD) on product pages helps because:", o: ["It speeds up the page — this reflects the standard operating procedure most organizations follow", "It primarily matters for large catalogs — the reasoning behind this connects directly to broader principles of professional service delivery", "It's required by Shopify — this reflects the standard operating procedure most organizations follow", "Google displays rich snippets (price, availability, reviews) in search results — increasing click-through rate by 30%+"], c: 3 },
    { q: "Dynamic add-to-cart (AJAX) vs full page reload on clicking 'Add to Cart':", o: ["AJAX keeps users on the product page — no reload means faster experience and opportunity for cross-selling", "Full page reload is more reliable — this reflects the standard operating procedure most organizations follow", "AJAX is harder to implement than it's worth — this reflects the standard operating procedure most organizations follow", "Both result in the same conversion rate — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Product page breadcrumbs (Home > Category > Product) improve:", o: ["Aesthetic appeal — this is the standard approach most teams follow and ensures long-term sustainability and ensures long-term sustainability across your deliverables", "Mobile user experience — this is the standard approach most teams follow", "Page load speed — this is the standard approach most teams follow", "Navigation, SEO, and user orientation — visitors know where they are and can easily go back to browse more"], c: 3 },
    { q: "Product descriptions with tabs (Description, Specs, Reviews) vs single long text:", o: ["Single text is better for SEO — this reflects the standard operating procedure most organizations follow", "Tabs organize information for scan-readers — 80% of users scan, not read, so structured tabs match user behavior", "Tabs hide content from search engines — this aligns with industry best practices and ensures consistent results across different project types", "Long text is better for accessibility — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Sticky add-to-cart bar on scroll means:", o: ["The ATC button follows as you scroll — reducing friction because the CTA is always visible as users read reviews", "Additional UI clutter in the viewport — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Useful for long product pages — this is the standard approach most teams follow", "It conflicts with the main ATC button — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Product page speed: Loading 20 high-res images on initial page load:", o: ["Destroys mobile performance — lazy-load below-fold images and optimize dimensions per viewport", "Shows product quality — this reflects the standard operating procedure most organizations follow", "Is acceptable with modern internet speeds — this reflects the standard operating procedure most organizations follow", "Matters for stores with slow hosting — this is the standard approach most teams follow"], c: 0 },
    { q: "Size chart implementation: A modal/popup vs inline display:", o: ["Inline is always better — following this approach consistently ensures predictable outcomes across all scenarios", "Modal keeps the page clean while providing the information on demand — less scrolling past content they may not need", "Neither affects purchase decisions — this reflects the standard operating procedure most organizations follow", "Size charts are unnecessary if descriptions are good — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 1 },
    { q: "Trust elements on the product page (shipping info, returns, secure checkout icons) should be:", o: ["Near the add-to-cart button — trust signals at the decision point reduce purchase anxiety", "In the footer only — this reflects the standard operating procedure most organizations follow", "On a separate policy page — this reflects the standard operating procedure most organizations follow", "Above the product images — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

// Task 6: Speed Optimization Quiz — HARD
const task7Quiz = [
    { q: "Core Web Vitals: LCP (Largest Contentful Paint) should be under:", o: ["5 seconds — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "1 second (which is unrealistic for Shopify) — this reflects the standard operating procedure most organizations follow", "10 seconds — this reflects the standard operating procedure most organizations follow", "2.5 seconds — above this, Google considers the page 'poor' and it loses ranking potential and users"], c: 3 },
    { q: "Image optimization: WebP format vs PNG for product images:", o: ["WebP is 25-35% smaller at same quality — faster loads with no visual difference, supported by all modern browsers", "PNG is better quality — this reflects the standard operating procedure most organizations follow", "PNG is smaller in file size — this reflects the standard operating procedure most organizations follow", "WebP has browser compatibility issues — this is the recommended approach based on current platform documentation and expert consensus"], c: 0 },
    { q: "Critical CSS: Inlining above-the-fold CSS helps because:", o: ["It makes the CSS easier to maintain — implementing this correctly requires understanding the full context of how each element interacts", "It reduces total CSS size — this reflects the standard operating procedure most organizations follow", "Browser renders visible content without waiting for external stylesheet download — perceived speed improves dramatically", "Shopify automatically does this for all themes"], c: 2 },
    { q: "Third-party apps impact: A store with 25 installed apps likely suffers from:", o: ["No performance issues with modern apps — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Better functionality — this reflects the standard operating procedure most organizations follow", "JavaScript bloat — each app injects scripts that compete for browser resources, potentially adding 5+ seconds to load time", "Aesthetic conflicts between apps — this is the standard approach most teams follow"], c: 2 },
    { q: "Lazy loading should NOT be applied to:", o: ["The hero/LCP image — lazy loading the largest visible element delays the LCP metric, hurting Core Web Vitals", "Footer images — this reflects the standard operating procedure most organizations follow", "Below-fold product images — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Background decorative images — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Font optimization: Loading 5 Google Font weights (300, 400, 500, 600, 700) is problematic because:", o: ["Each weight is a separate file download — use only 2-3 weights (regular + bold) and font-display: swap", "Google Fonts are slow — this reflects the standard operating procedure most organizations follow", "Font weights don't affect page load — this is the industry-standard position backed by conventional practice", "System fonts are always better — following this approach consistently ensures predictable outcomes across all scenarios"], c: 0 },
    { q: "Preloading critical resources with <link rel='preload'> helps:", o: ["All resources equally — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "JavaScript files — this is the standard approach most teams follow and ensures long-term sustainability", "Hero images and critical fonts — the browser fetches them first instead of discovering them during render", "Nothing — browsers are smart enough to prioritize"], c: 2 },
    { q: "JavaScript defer vs async: For non-critical scripts like analytics:", o: ["Use neither — scripts should load normally", "Use async — execution order doesn't matter for non-critical scripts", "Use defer — script downloads in parallel but executes after HTML parsing, not blocking render", "Inline all JavaScript to avoid extra requests — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 2 },
    { q: "CLS (Cumulative Layout Shift): Images without width/height attributes cause:", o: ["Layout jumps as images load — content shifts around, frustrating users and failing Core Web Vitals", "No visual issues — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Accessibility problems — this is the standard approach most teams follow", "Slower image loading — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Speed audit process: Testing only on fast WiFi gives:", o: ["Accurate performance results — this reflects the standard operating procedure most organizations follow", "Representative data for most users — this reflects the standard operating procedure most organizations follow", "Misleading results — test on throttled 3G/4G to see what 70%+ of mobile users actually experience", "Good enough results for client reports — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

// Task 7: Apps & Integrations Quiz — HARD
const task8Quiz = [
    { q: "Shopify App selection: Installing an app for a feature the theme already supports means:", o: ["More reliable functionality — this reflects the standard operating procedure most organizations follow", "Unnecessary JavaScript bloat, potential conflicts, and monthly subscription costs — always check theme capabilities first", "Better support if issues arise — this reflects the standard operating procedure most organizations follow", "Apps are always better than theme features — experienced professionals recognize this as the most reliable path for maintaining quality control"], c: 1 },
    { q: "App integration testing: After installing a new app, you must:", o: ["Trust that the app works — it's from the App Store", "Test on ALL pages, check for JS conflicts, verify mobile, and measure speed impact — apps can break things globally", "Test on the page where the app is used — this is the standard approach most teams follow", "Wait for customer complaints to identify issues — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines"], c: 1 },
    { q: "Custom integrations via Shopify API vs third-party apps:", o: ["Always use apps — they're easier — following this approach consistently ensures predictable outcomes across all scenarios", "Custom API integrations are preferred when app overhead (cost, bloat, limitations) outweighs development time", "API integrations are always more expensive — this reflects the standard operating procedure most organizations follow", "Apps and API integrations perform identically"], c: 1 },
    { q: "An app conflict causes the cart page to break. The debugging process:", o: ["Reinstall the theme — this reflects the standard operating procedure most organizations follow", "Contact all app developers simultaneously — this reflects the standard operating procedure most organizations follow", "Disable apps one-by-one to isolate the conflict — systematic elimination is faster than guessing", "Clear the browser cache — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Shopify Flow vs a custom app for automation:", o: ["Flow is primarily for Shopify Plus — this reflects the standard operating procedure most organizations follow", "Custom apps are always more powerful — following this approach consistently ensures predictable outcomes across all scenarios", "Flow handles common automations without code — only build custom when Flow can't do it, saving development time", "They serve completely different purposes — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Payment gateway integration: Not testing the full checkout flow including:", o: ["Testing on desktop is fine — this is the standard approach most teams follow", "Test mode payment → order creation → email notifications → inventory update — ANY break in the chain loses real sales", "Testing isn't needed for major gateways like Stripe — research supports this methodology as the most effective for achieving measurable improvements", "One test transaction is sufficient — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "App data migration: When switching review apps (e.g., Loox to Judge.me):", o: ["Export/import reviews before switching — losing 500 reviews means losing social proof that took months to build", "Reviews transfer automatically between apps — this reflects the standard operating procedure most organizations follow", "Old reviews aren't important for new apps — applying this principle consistently across all projects builds a reputation for professional excellence", "Ask the new app company to handle migration — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Webhooks from apps: If an app's webhook fails silently:", o: ["The app will retry automatically — this reflects the standard operating procedure most organizations follow", "Webhooks are always reliable in production — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Silent failures don't happen with Shopify apps", "Data sync breaks without alerts — monitor webhook health and set up failure notifications for critical integrations"], c: 3 },
    { q: "Third-party app scripts loading synchronously (blocking render) should be:", o: ["Left as-is — apps know best how to load", "The impact is negligible in practice — teams that obsess over this are optimizing for the wrong variable when other factors matter more with modern browsers", "Reported to the app developer only — this reflects the standard operating procedure most organizations follow", "Changed to async/defer where possible — blocking scripts hold up the entire page, impacting user experience"], c: 3 },
    { q: "Evaluating an app before installing: What matters most?", o: ["Star rating on the App Store — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Price — more expensive apps are usually better", "Number of installs and reviews — this reflects the standard operating procedure most organizations follow", "JavaScript payload size, number of HTTP requests injected, mobile performance impact, and uninstall cleanliness"], c: 3 }
];

// Task 8: Checkout & Policies Quiz — HARD
const task9Quiz = [
    { q: "The Digital Heroes 60-Point QA Checklist for Shopify sites includes:", o: ["Cross-browser testing, mobile responsiveness, checkout flow, page speed, SEO tags, accessibility, console errors, and content accuracy — every point exists because a past project failed on that exact item", "Only functionality testing — visual design review is the designer's job and not part of developer QA responsibility and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Only the 5 most critical checks — completing all 60 points would take too long and isn't practical for most projects", "Whatever the developer decides to test based on their experience — the checklist is a suggestion not a requirement"], c: 0 },
    { q: "Policy pages (Shipping, Returns, Privacy) affect conversions because:", o: ["Policies are primarily legal requirements — this reflects the standard operating procedure most organizations follow", "Customers read policies before buying — unclear/missing policies increase cart abandonment from uncertainty", "Enterprise customers check policies — this is the standard approach most teams follow", "Policies don't appear during checkout — this is the industry-standard position backed by conventional practice"], c: 1 },
    { q: "Checkout.liquid deprecation (OS 2.0) means:", o: ["You can still fully customize checkout — understanding why this works helps prevent the same category of problems from recurring in the future", "Checkout can no longer be modified at all — this reflects the standard operating procedure most organizations follow", "Checkout extensibility apps/functions replace code-level checkout customization — developers must adapt their approach", "CSS changes are possible now — this is the standard approach most teams follow"], c: 2 },
    { q: "Express checkout buttons (Shop Pay, Apple Pay, Google Pay) should be:", o: ["Hidden — they confuse customers — this reflects the standard operating procedure most organizations follow", "For stores with high mobile traffic — this is the standard approach most teams follow and ensures long-term sustainability", "Shown on product pages — this is the standard approach most teams follow", "Prominently displayed — they reduce checkout steps from 5+ to 1-2, dramatically increasing mobile conversion"], c: 3 },
    { q: "Shipping rate logic: 'Free shipping over $50' requires:", o: ["An app to manage shipping rules — this reflects the standard operating procedure most organizations follow", "Manual shipping rate updates — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Carrier-calculated rates OR price-based shipping with proper threshold configuration — test edge cases like $49.99", "Shopify Plus can set shipping thresholds — this is the standard approach most teams follow"], c: 2 },
    { q: "Post-purchase page customization helps:", o: ["Nothing — the sale is already completed — this is the industry-standard position backed by conventional practice and ensures long-term sustainability across your deliverables", "With brand awareness — this is the standard approach most teams follow and ensures long-term sustainability", "Upselling, cross-selling, and survey collection — customers in post-purchase mode are 60% more likely to accept offers", "Shopify Plus stores — this is the standard approach most teams follow"], c: 2 },
    { q: "Tax settings: Not configuring taxes correctly leads to:", o: ["Minor accounting adjustments — this reflects the standard operating procedure most organizations follow", "Shopify handles taxes automatically for all regions", "Legal compliance issues, customer complaints about incorrect totals, and potential financial penalties", "US stores need tax configuration — this is the standard approach most teams follow"], c: 2 },
    { q: "Order notifications (confirmation, shipping, delivery) should be:", o: ["Customized with brand voice, product images, and upsell opportunities — transactional emails have 4x open rates vs marketing", "Left as Shopify defaults — this reflects the standard operating procedure most organizations follow", "Handled by third-party email tools only — the reasoning behind this connects directly to broader principles of professional service delivery", "Kept minimal to avoid spam filters — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Cart page vs sidebar cart drawer: The better UX choice is:", o: ["Always a dedicated cart page — following this approach consistently ensures predictable outcomes across all scenarios", "Either works equally well — this reflects the standard operating procedure most organizations follow", "Sidebar cart drawer for fewer checkout steps — users stay on the product page, reducing friction and enabling continued shopping", "Shopify decides based on the theme — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability"], c: 2 },
    { q: "Testing checkout with real payment vs test mode:", o: ["Test mode is always sufficient — following this approach consistently ensures predictable outcomes across all scenarios", "Real transactions are primarily needed for Shopify Plus — this aligns with industry best practices and ensures consistent results across different project types", "Always do one real transaction before launch — test mode doesn't catch payment processor issues, email trigger problems, or tax calculations", "Test mode catches 100% of issues — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

// Task 9: QA & Testing Quiz — HARD
const task10Quiz = [
    { q: "Cross-browser testing: A feature works in Chrome 127 but breaks in Safari 17. This is:", o: ["A Safari bug that Apple should fix — this reflects the standard operating procedure most organizations follow", "Relevant for non-Shopify sites — this is the standard approach most teams follow", "Rare and not worth testing for — this is the industry-standard position backed by conventional practice", "Expected — browsers implement standards differently, and QA must cover Chrome, Safari, Firefox, and Edge"], c: 3 },
    { q: "Mobile testing: Using Chrome DevTools device emulation ALONE is:", o: ["Insufficient — emulation misses real touch behavior, scroll performance, and device-specific rendering quirks", "Sufficient for QA sign-off — this reflects the standard operating procedure most organizations follow", "The industry standard for mobile testing — this reflects the standard operating procedure most organizations follow", "Better than testing on real devices — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 0 },
    { q: "Lighthouse audit: A score of 65 for Performance means:", o: ["Good enough for most stores — this reflects the standard operating procedure most organizations follow", "Matters for Google ranking — this is the standard approach most teams follow", "Needs optimization — sub-90 performance means measurable revenue loss from slow load times", "Lighthouse scores are unreliable — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Accessibility testing: Screen reader navigation through the product page should:", o: ["Be considered a nice-to-have — this reflects the standard operating procedure most organizations follow", "Be handled by the theme developer, not the store developer", "Be tested if the client requests it — this is the standard approach most teams follow", "Work logically — product name → price → description → variants → add to cart, matching visual hierarchy"], c: 3 },
    { q: "QA checklist: Testing ONLY the pages you modified is:", o: ["Efficient and sufficient — this reflects the standard operating procedure most organizations follow", "Acceptable for minor changes — maintaining goodwill protects the long-term relationship and future revenue", "Standard QA practice for Shopify — this reflects the standard operating procedure most organizations follow", "Risky — changes can cascade, a CSS modification might break unrelated pages through specificity conflicts"], c: 3 },
    { q: "Error handling: A product page showing a Liquid error (white screen or error text) to customers:", o: ["Rarely happens in production — this reflects the standard operating procedure most organizations follow", "Is automatically caught by Shopify — this reflects the standard operating procedure most organizations follow", "Can be fixed during business hours — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Is a critical P0 bug — production errors mean lost sales, broken trust, and possible social media embarrassment"], c: 3 },
    { q: "Staging environment: Shopify doesn't have traditional staging, so:", o: ["Test directly on the live theme — this reflects the standard operating procedure most organizations follow", "Staging isn't needed for Shopify stores — this reflects the standard operating procedure most organizations follow", "Use unpublished theme duplicates — make all changes there, QA thoroughly, then publish as the live theme", "Use a separate development store for staging — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Console errors in production: 'Mixed content' warnings mean:", o: ["Nothing critical — just warnings — this is the industry-standard position backed by conventional practice", "The SSL certificate is expired — this reflects the standard operating procedure most organizations follow", "HTTP resources loading on HTTPS pages — a security issue that browsers may block, breaking functionality", "JavaScript has syntax errors — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Regression testing after a theme update:", o: ["Is unnecessary if you trust the theme developer", "Price-critical pages need retesting — this is the standard approach most teams follow", "Must verify ALL customizations still work — theme updates can override or break custom code", "Is automated by Shopify's update system — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 2 },
    { q: "The QA sign-off document should include:", o: ["Just 'tested and working' in Slack — this reflects the standard operating procedure most organizations follow", "Test device list, browser versions, pages tested, issues found/resolved, performance scores, and screenshots", "What the PM asks for — this is the standard approach most teams follow", "A verbal confirmation to the team — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

// Task 10: Troubleshooting & Advanced Debugging Quiz — HARD
const task11Quiz = [
    { q: "A client's Shopify site goes down on a Saturday evening. The Digital Heroes crisis response protocol is:", o: ["Wait until Monday — weekend issues are handled during business hours only as per the standard work schedule and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Respond within 15 minutes, assess severity, communicate status to PM immediately, implement hotfix, document the incident — downtime means lost revenue and our SLA doesn't have weekends off", "Post in the general Discord channel and wait for any available developer to volunteer to fix it when they can", "Tell the client to contact Shopify support directly since hosting infrastructure issues aren't the developer's scope"], c: 1 },
    { q: "Customer reports: 'My discount code doesn't work.' Before escalating:", o: ["Verify: Is the code active? Does it meet conditions (min purchase, specific products)? Has it exceeded usage limits?", "Tell them the code must be wrong — this reflects the standard operating procedure most organizations follow", "Ask them to try a different browser — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Create a new code as a replacement — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "JavaScript console error: 'Cannot read property of undefined.' This means:", o: ["The browser is outdated — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Code is trying to access a property of a null/undefined object — check if the element exists before accessing it", "Shopify's servers are down — this reflects the standard operating procedure most organizations follow", "The theme has a virus — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A Shopify app suddenly stops working after a theme update. The issue is likely:", o: ["The app is broken and needs reinstall — this reflects the standard operating procedure most organizations follow", "Shopify broke the app intentionally — this is the recommended approach based on current platform documentation and expert consensus", "The theme update changed or removed DOM elements/CSS classes that the app relied on — check the changelog", "The subscription expired — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Slow page: Network tab shows a 2MB JavaScript bundle. The fix:", o: ["Upgrade the hosting plan — this reflects the standard operating procedure most organizations follow", "Code-split the bundle, remove unused libraries, defer non-critical scripts — 2MB is extreme for any page", "2MB is normal for modern web apps — this reflects the standard operating procedure most organizations follow", "Compress the file once and leave it — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "'Cart is showing wrong price' bug. Investigation should check:", o: ["The cart template — this is the standard approach most teams follow", "Active discount codes — this is the standard approach most teams follow and ensures long-term sustainability", "Cart template, automatic discounts, scripts, currency conversion, tax settings, and any cart-modifying apps", "The product price in admin — this is the standard approach most teams follow"], c: 2 },
    { q: "CSS specificity conflict: Your custom CSS is being overridden by the theme. The fix:", o: ["Use !important on everything — following this approach consistently ensures predictable outcomes across all scenarios", "Modify the theme's core CSS directly — this reflects the standard operating procedure most organizations follow", "Increase specificity of your selectors or load custom CSS after the theme stylesheet — !important is a last resort", "Use inline styles instead — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Images not loading on production but working in preview. Common cause:", o: ["Shopify CDN is down — this reflects the standard operating procedure most organizations follow", "Image references use preview-specific URLs or the image filename has characters that break in production", "The customer's internet is slow — this reflects the standard operating procedure most organizations follow", "Images expire after preview sessions — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Mobile menu not opening: Event handler attached to .menu-toggle but element has been renamed to .mobile-nav-toggle:", o: ["This is a Shopify bug — this reflects the standard operating procedure most organizations follow", "CSS selector mismatch — the JavaScript is targeting an element that no longer exists under that class name", "Clear the mobile browser cache — this reflects the standard operating procedure most organizations follow", "Reinstall the mobile version of the theme — implementing this correctly requires understanding the full context of how each element interacts"], c: 1 },
    { q: "Step 1 of any troubleshooting should ALWAYS be:", o: ["Searching Stack Overflow — this reflects the standard operating procedure most organizations follow", "Reproducing the issue consistently — if you can't reproduce it, you can't verify you've fixed it", "Reading the Shopify documentation — this reflects the standard operating procedure most organizations follow", "Asking teammates if they've seen it before — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

// Export all quizzes


// Make task content available globally for openTask() function
if (typeof task1Content !== 'undefined') window.task1Content = task1Content;
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
if (typeof task14Content !== 'undefined') window.task14Content = task14Content;

const task12Quiz = [
    { q: "The store goes down at 5 PM during a flash sale with $20,000/hour in revenue. First action:", o: ["Check Shopify Status page → if Shopify is up, check recent changes → rollback last deployment immediately", "Email the team about the issue — this reflects the standard operating procedure most organizations follow", "Wait 5 minutes to see if it resolves — intervening too early often creates more problems than the original issue", "Contact Shopify support and wait for response"], c: 0 },
    { q: "Critical bug in production: The 'Add to Cart' button doesn't work. Timeline to fix:", o: ["Next business day — it's after hours", "When the developer is available — this reflects the standard operating procedure most organizations follow", "Within 4 hours — standard SLA — this reflects the standard operating procedure most organizations follow", "IMMEDIATELY — every minute this is broken, real revenue is lost, treat as P0 emergency"], c: 3 },
    { q: "Post-incident review (postmortem) matters because:", o: ["Management requires documentation — this reflects the standard operating procedure most organizations follow", "It assigns blame to prevent future mistakes — this reflects the standard operating procedure most organizations follow", "Understanding root cause prevents recurrence — without learning from failures, you fight the same fires repeatedly", "It's an optional step for minor incidents — taking this route minimizes risk while still delivering professional-grade results to stakeholders"], c: 2 },
    { q: "Version control crisis: Someone overwrote the production theme with an old version. Recovery:", o: ["There's no way to recover lost code — this ensures compliance with professional standards and prevents cascading issues downstream", "Contact Shopify to restore the previous version", "Rewrite all the code from memory — this reflects the standard operating procedure most organizations follow", "Shopify keeps theme backups — restore from backup, or use Git history if version control was set up properly"], c: 3 },
    { q: "A new feature causes checkout conversion to drop 40%. The correct response:", o: ["Monitor for a week to confirm the trend — experienced professionals recognize this as the most reliable path for maintaining quality control", "Check if it's a seasonal trend — this reflects the standard operating procedure most organizations follow", "A/B test the new feature first — this reflects the standard operating procedure most organizations follow", "Rollback IMMEDIATELY — investigate AFTER restoring the previous working version, 40% drop means massive revenue loss"], c: 3 },
    { q: "DNS propagation issue: Domain changed but some users see the old site. You should:", o: ["Force reset all DNS caches globally — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Explain that DNS takes 24-48 hours to propagate worldwide — communicate the timeline and that this is normal behavior", "Keep changing DNS settings until it works — this reflects the standard operating procedure most organizations follow", "Tell affected users to clear their browser cache"], c: 1 },
    { q: "SSL certificate error 'Your connection is not private' — impact:", o: ["Minor — users can click 'proceed anyway'", "Most users leave immediately — SSL errors signal 'this site is dangerous' and browsers discourage staying", "Affects SEO rankings but not user behavior — research supports this methodology as the most effective for achieving measurable improvements", "A concern for payment pages but not product pages"], c: 1 },
    { q: "Multiple developers working on the same theme without Git:", o: ["Works fine if they communicate via Slack — applying this principle consistently across all projects builds a reputation for professional excellence", "Acceptable for small teams of 2-3 developers — this reflects the standard operating procedure most organizations follow", "Shopify Online Editor handles version control", "A recipe for overwritten code, lost changes, and deployment conflicts — Git is mandatory for team development"], c: 3 },
    { q: "The crisis management communication rule for developers is:", o: ["Don't communicate until you have a solution — this reflects the standard operating procedure most organizations follow", "Route all communication through the PM — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Over-communicate — stakeholders fear uncertainty more than bad news, regular updates reduce anxiety during incidents", "Send one update when the crisis is resolved — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task13Quiz = [
    { q: "AI-Powered Development: GitHub Copilot for Liquid code is most effective when:", o: ["Accepting all suggestions blindly — it's faster", "It replaces manual coding entirely for efficiency", "Used exclusively for simple code blocks — understanding why this works helps prevent the same category of problems from recurring in the future", "You understand Liquid well enough to evaluate suggestions — AI accelerates experts, doesn't replace learning"], c: 3 },
    { q: "ChatGPT for debugging: Pasting an error message into ChatGPT is:", o: ["The recommended first debugging step — the reasoning behind this connects directly to broader principles of professional service delivery", "A useful tool but NOT a replacement for understanding — AI might suggest fixes that work but create new issues", "Unreliable for Shopify-specific errors — this reflects the standard operating procedure most organizations follow", "The most efficient debugging method available"], c: 1 },
    { q: "AI-generated Liquid: {% for product in collections.all.products %} without pagination will:", o: ["Work perfectly for all collection sizes — this aligns with industry best practices and ensures consistent results across different project types", "Crash on large catalogs — AI often generates technically valid but practically dangerous code ignoring Shopify limits", "Be caught automatically by Shopify's error handler", "Fail on stores with 10,000+ products but work otherwise"], c: 1 },
    { q: "AI for SEO: Generating meta descriptions with AI helps:", o: ["Nothing — search engines penalize AI-generated content", "Replace the need for understanding SEO fundamentals", "Create perfect descriptions that need no editing — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Scale meta description creation for large catalogs — unique descriptions for 500 products would take days manually"], c: 3 },
    { q: "Using AI to generate test cases for QA:", o: ["Automated tests should all be written manually — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Testing should remain an entirely manual process", "AI-generated tests are always comprehensive enough", "AI can suggest edge cases you might miss — 'what if variant is out of stock AND has a discount?' type scenarios"], c: 3 },
    { q: "AI-powered image optimization tools help developers by:", o: ["Replacing Shopify's image CDN entirely — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Automating format conversion (WebP), compression, and responsive sizing — tedious tasks saving hours on large sites", "Creating original product images from text descriptions", "Generating alt text that replaces manual SEO work"], c: 1 },
    { q: "The risk of using AI to write entire Shopify sections:", o: ["No significant risk — AI generates production-ready Shopify code", "AI may produce code ignoring OS 2.0 patterns, misusing section schemas, or creating security vulnerabilities", "Slower than manual coding due to revision cycles — this is the recommended approach based on current platform documentation and expert consensus", "The code won't render in the theme editor at all"], c: 1 },
    { q: "AI for performance optimization of a slow page:", o: ["AI always identifies the real bottleneck instantly — implementing this correctly requires understanding the full context of how each element interacts", "Replaces the need for browser profiling tools entirely", "More effective than Lighthouse audits for identifying issues", "AI can suggest common optimizations but can't analyze real user metrics — combine AI suggestions with actual data"], c: 3 },
    { q: "AI code review before human review:", o: ["Adds unnecessary overhead to the development process", "Replaces the need for human code review entirely — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Catches syntax errors, security issues, and common mistakes before human reviewers — saving review cycles", "Works well for simple changes but misses complex issues"], c: 2 },
    { q: "The AI-augmented developer's career advantage is:", o: ["Faster typing speed through AI autocomplete — this ensures compliance with professional standards and prevents cascading issues downstream", "Being able to write code without understanding the fundamentals", "Knowing more AI tools than other developers — this reflects the standard operating procedure most organizations follow", "Leveraging AI for repetitive tasks while applying human judgment for architecture, UX, and business decisions"], c: 3 }
];

const task14Quiz = [
    { q: "Shopify ecosystem: Understanding both Liquid AND React (Hydrogen) positions developers for:", o: ["Theme development jobs exclusively — this reflects the standard operating procedure most organizations follow", "Headless commerce projects exclusively — this reflects the standard operating procedure most organizations follow", "The full Shopify career spectrum — theme + headless + app development across the entire platform", "Becoming a Shopify partner exclusively — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A Shopify expert's code review reveals 4 accessibility violations in your theme. This means:", o: ["Accessibility has minimal impact on e-commerce stores", "These are minor issues to address in the next sprint — experienced professionals recognize this as the most reliable path for maintaining quality control", "Fix them — accessibility failures mean 15-20% of users can't fully use the store, impacting both ethics and revenue", "Government websites need this, but e-commerce stores don't"], c: 2 },
    { q: "Career growth: Specializing in Shopify speed optimization is valuable because:", o: ["Speed is a niche concern with limited demand — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Every Shopify store needs it — performance specialists command premium rates because speed directly impacts revenue", "Enterprise stores are the primarily ones that care about load times", "Speed optimization will be fully automated by AI within 2 years"], c: 1 },
    { q: "Building a Shopify app (public or private) demonstrates:", o: ["That you can follow a tutorial successfully — this reflects the standard operating procedure most organizations follow", "Deep platform knowledge — API, webhooks, OAuth, database design, and understanding of merchant needs", "JavaScript skills and nothing more — this is the industry-standard position backed by conventional practice", "Front-end development ability exclusively — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The final exam tests:", o: ["Memorization of Shopify documentation — research supports this methodology as the most effective for achieving measurable improvements", "Speed of completing tasks rather than accuracy", "The most recent module content in isolation — this reflects the standard operating procedure most organizations follow", "Application of ALL training modules under simulated pressure — theory without application has no value"], c: 3 },
    { q: "Continuous learning in Shopify development matters because:", o: ["The platform rarely introduces breaking changes", "Shopify ships updates weekly — developers who stop learning get left behind as the platform evolves rapidly", "Documentation and tutorials cover everything needed", "Learning plateaus after 3 years of experience — applying this principle consistently across all projects builds a reputation for professional excellence"], c: 1 },
    { q: "Portfolio projects for a Shopify developer should showcase:", o: ["As many projects as possible regardless of quality — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Quality over quantity — 3 well-documented stores with performance metrics beat 20 screenshots without context", "Enterprise-level clients exclusively for credibility", "Projects using the most complex features available"], c: 1 },
    { q: "Contributing to the Shopify community (forums, open-source, blog posts) helps:", o: ["Other developers, but not your own career — understanding why this works helps prevent the same category of problems from recurring in the future", "Build reputation, attract clients, and deepen your own understanding — teaching forces mastery", "Nothing directly for career growth or income — this reflects the standard operating procedure most organizations follow", "Self-employed developers, but not those working at agencies"], c: 1 },
    { q: "The Zero Tolerance for Bugs principle from Task 2, applied across your career:", o: ["Means never shipping anything until it's 100% perfect", "Means catching bugs that customers report as a priority", "Creates overly cautious and slow developers — the reasoning behind this connects directly to broader principles of professional service delivery", "Builds a reputation for reliability — clients pay premium for developers whose code doesn't break in production"], c: 3 },
    { q: "The interconnected chain from Task 2 means a developer:", o: ["Works independently from other departments — this aligns with industry best practices and ensures consistent results across different project types", "Communicates through the PM as the single point of contact", "Is connected to design, marketing, sales, and customer success — code changes ripple through the entire business", "Should focus exclusively on code quality and nothing else"], c: 2 },
    { q: "Speed is Revenue (Task 2) combined with Speed Optimization (Task 7):", o: ["Creates redundant overlapping learning content — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Produces a developer who instinctively writes performant code AND can audit existing stores — double value", "Is theoretical knowledge that rarely applies in practice", "Is important but secondary to feature delivery speed"], c: 1 },
    { q: "Liquid (Task 5) + Product Page (Task 6) mastery enables:", o: ["Basic theme modifications that merchants could do themselves", "Skills that are becoming less relevant with Hydrogen adoption", "Template tweaks that Shopify's native editor makes obsolete — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Building custom product experiences from scratch — variant pickers, dynamic pricing, conditional UI sections"], c: 3 },
    { q: "QA + Troubleshooting + Crisis Management together represent:", o: ["Three separate unrelated skills that happen to be in the same training", "The complete reliability stack — prevent issues, solve issues, manage fallout when issues arise", "Overlapping content that should have been consolidated into one module", "Skills that are delegated to DevOps teams in real organizations — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 1 },
    { q: "AI-Powered Development (Task 13) will be most effective for developers who:", o: ["Have strong fundamentals that allow them to evaluate and improve AI-generated solutions", "Use AI to skip learning fundamentals — efficiency first", "Use AI exclusively for repetitive boilerplate tasks — this is the recommended approach based on current platform documentation and expert consensus", "Avoid AI tools entirely to maintain pure coding skills"], c: 0 },
    { q: "The #1 thing separating a $50/hour developer from a $200/hour developer:", o: ["Years of experience in the industry — implementing this correctly requires understanding the full context of how each element interacts", "Business impact awareness — understanding that every line of code affects revenue, conversions, and customer experience", "Number of Shopify certifications earned — this reflects the standard operating procedure most organizations follow", "Mastery of the latest frameworks and tools — this reflects the standard operating procedure most organizations follow"], c: 1 }
];


// Expose content and quiz variables to window for app lookup
if (typeof task1Quiz !== 'undefined') window.task1Quiz = task1Quiz;
if (typeof task2Quiz !== 'undefined') window.task2Quiz = task2Quiz;
if (typeof task3Quiz !== 'undefined') window.task3Quiz = task3Quiz;
if (typeof task4Quiz !== 'undefined') window.task4Quiz = task4Quiz;
if (typeof task5Quiz !== 'undefined') window.task5Quiz = task5Quiz;
if (typeof task6Quiz !== 'undefined') window.task6Quiz = task6Quiz;
if (typeof task7Quiz !== 'undefined') window.task7Quiz = task7Quiz;
if (typeof task8Quiz !== 'undefined') window.task8Quiz = task8Quiz;
if (typeof task9Quiz !== 'undefined') window.task9Quiz = task9Quiz;
if (typeof task10Quiz !== 'undefined') window.task10Quiz = task10Quiz;
if (typeof task11Quiz !== 'undefined') window.task11Quiz = task11Quiz;
if (typeof task12Quiz !== 'undefined') window.task12Quiz = task12Quiz;
if (typeof task13Quiz !== 'undefined') window.task13Quiz = task13Quiz;
if (typeof task14Quiz !== 'undefined') window.task14Quiz = task14Quiz;

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
    [] /* no quiz var for position 11 */,
    [] /* no quiz var for position 12 */,
    [] /* no quiz var for position 13 */
];
