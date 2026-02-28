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
        title: "Store Design Fundamentals",
        description: "Color, Typography & Visual Hierarchy",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🎨 Master: Color Theory for E-Commerce",
            "🔤 Learn: Typography & Font Pairing Rules",
            "👁️ Visual Hierarchy: F-Pattern & Z-Pattern"
        ]
    },
    {
        id: 15,
        title: "Custom Sections & Page Design",
        description: "Building Sections from Scratch",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "🧱 Build: Custom Sections with JSON Schemas",
            "🏠 Design: Complete Homepage Layout",
            "📦 Master: Product Page Design Elements"
        ]
    },
    {
        id: 16,
        title: "Full Store Customization",
        description: "Header, Footer, Mobile & Accessibility",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "📱 Master: Mobile-First Design Patterns",
            "♿ Accessibility: WCAG Compliance",
            "🎯 Conversion-Focused Design Patterns"
        ]
    },
    {
        id: 17,
        title: "CRO, Psychology & Copywriting",
        description: "The Science of Making People Buy",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "🧠 Master: Cialdini's 6 Persuasion Principles",
            "✍️ Learn: Copywriting Frameworks (AIDA, PAS)",
            "📈 Apply: CRO Audit Checklist"
        ]
    },
    {
        id: 18,
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
<h2>📚 TASK 3: PLATFORM FUNDAMENTALS - Shopify Architecture Deep Dive</h2>

<div class="content-section">
    <h3>🏗️ Shopify is NOT WordPress</h3>
    <p>If you are coming from WordPress, forget almost everything you know. Shopify is a fundamentally different platform. Understanding these differences is CRITICAL before you write a single line of code for our clients.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Aspect</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WordPress</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hosting</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Self-hosted (you manage server, SSL, updates)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fully hosted SaaS (Shopify manages everything)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Language</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PHP (server-side rendering)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid (Ruby-based templating language)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Database</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direct MySQL access, custom queries</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">API only (REST + GraphQL, no direct DB)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customization</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited (can break anything, full file access)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sandboxed (safer, but has defined boundaries)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Themes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PHP templates, functions.php, unlimited hooks</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid templates, JSON configs, sections/blocks</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plugins/Apps</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50,000+ plugins, many free, quality varies wildly</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Curated App Store, vetted apps, monthly costs</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your responsibility (updates, backups, SSL)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify handles SSL, PCI compliance, uptime</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fully customizable (WooCommerce)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Controlled by Shopify (limited customization without Plus)</td>
            </tr>
        </tbody>
    </table>
    <div class="highlight-box">
        <h4>Key Takeaway for Developers</h4>
        <p>Shopify trades unlimited flexibility for <strong>reliability, security, and speed</strong>. You cannot break the server, corrupt the database, or crash checkout. This is BY DESIGN. Your job is to work creatively within these boundaries to deliver stores that convert.</p>
    </div>
</div>

<div class="content-section">
    <h3>🖥️ Shopify Admin Deep Walkthrough</h3>
    <p>Before you touch any theme code, you MUST know every section of the Shopify admin. Spend at least 5 minutes in each area. Here is what every developer needs to know:</p>

    <h4>📦 Products Section</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Area</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Developer Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Products</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create/edit individual products</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Title, description, images, pricing, variants, metafields, SEO</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Variants</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size/color/material options per product</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Each variant has its own price, SKU, inventory, image</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Collections</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Group products together</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manual (hand-picked) or Automated (rules-based: tag, price, vendor)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Inventory</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Track stock levels per location</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inventory is tracked at the variant level, not product level</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Gift Cards</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Digital gift card products</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Treated as a product type with special checkout behavior</td>
            </tr>
        </tbody>
    </table>

    <h4>🎨 Online Store Section</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Area</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Developer Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Themes</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install, customize, edit code for themes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">This is where 80% of your dev work happens. Customizer + Code Editor.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Pages</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Static content pages (About, Contact, FAQ)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can assign different templates to different pages</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Blog Posts</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content marketing and SEO</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Basic blog functionality. Good for SEO, not as powerful as WordPress blogs.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Navigation</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Header menu, footer menu, sidebar menus</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Menus are created here and referenced in theme code via Liquid.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Preferences</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta title, meta description, favicon, Google Analytics, password page</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set store-wide SEO here. Password page for stores not yet live.</td>
            </tr>
        </tbody>
    </table>

    <h4>Settings Section (Critical for Store Setup)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Setting</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When You Touch It</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Payments</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment gateways (Shopify Payments, PayPal, etc.)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store setup, checkout configuration</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shipping</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping zones, rates, profiles</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store setup, product weight configuration</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Taxes</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tax collection rules by region</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">International stores, compliance</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Checkout</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout behavior, customer accounts, tipping</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store setup, conversion optimization</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Languages</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store language, translations</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-language stores, button text changes</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Markets</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">International selling (currencies, domains, languages)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">International expansion projects</td>
            </tr>
        </tbody>
    </table>

    <h4>Apps & Analytics</h4>
    <ul>
        <li><strong>Apps:</strong> Installed apps, Shopify App Store access. Rule: keep apps to 5-8 maximum. Each app adds scripts that slow the store.</li>
        <li><strong>Analytics:</strong> Overview dashboard, reports, live view of visitors. Use this to understand store performance and identify issues.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📦 Product / Variant / Metafield Hierarchy</h3>
    <p>Understanding this hierarchy is CRITICAL. Every Shopify store is built on this data model:</p>

    <div class="mermaid">
    graph TD
        A[Store] --> B[Collections]
        A --> C[Products]
        A --> D[Customers]
        A --> E[Orders]
        A --> F[Pages]
        B --> C
        C --> G[Variants]
        C --> H[Images]
        C --> I[Metafields]
        G --> J[Inventory Items]
        G --> K[Price / Compare-at Price]
        G --> L[SKU / Barcode / Weight]
    </div>

    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2; margin: 15px 0;">
        <strong style="color: #10B981;">STORE</strong> (Root)<br>
        ├── <strong style="color: #6366F1;">COLLECTION</strong> (Groups products)<br>
        │   ├── title, description, image<br>
        │   ├── Manual (hand-picked products)<br>
        │   ├── Automated (rules: tag, price, vendor, type)<br>
        │   └── products[] (Array of products in collection)<br>
        ├── <strong style="color: #F59E0B;">PRODUCT</strong><br>
        │   ├── title, description (HTML), vendor, type<br>
        │   ├── tags[] (for filtering and automation)<br>
        │   ├── images[] (up to 250 images)<br>
        │   ├── <strong style="color: #EC4899;">VARIANT</strong>[] (Size/Color/Material combos)<br>
        │   │   ├── price, compare_at_price<br>
        │   │   ├── sku, barcode<br>
        │   │   ├── inventory_quantity (per location)<br>
        │   │   ├── weight, weight_unit<br>
        │   │   └── option1, option2, option3 (max 3 options)<br>
        │   └── <strong style="color: #8B5CF6;">METAFIELD</strong>[] (Custom data)<br>
        │       ├── namespace.key format (e.g., custom.ingredients)<br>
        │       ├── Types: single_line_text, multi_line_text, number, boolean, url, json, etc.<br>
        │       └── Accessible in Liquid via product.metafields.namespace.key<br>
        ├── <strong>CUSTOMER</strong> (accounts, addresses, order history)<br>
        ├── <strong>ORDER</strong> (line items, fulfillment, transactions)<br>
        └── <strong>PAGE</strong> (static content, custom templates)
    </div>

    <div class="highlight-box">
        <h4>Luxe Botanica Example</h4>
        <p>For our Luxe Botanica store, a product like "Vitamin C Serum" would look like:</p>
        <ul>
            <li><strong>Product:</strong> Vitamin C Brightening Serum</li>
            <li><strong>Variants:</strong> 15ml ($28), 30ml ($45), 50ml ($65)</li>
            <li><strong>Metafields:</strong> custom.ingredients (Vitamin C, Hyaluronic Acid, Niacinamide), custom.usage_instructions (Apply 2-3 drops morning and evening), custom.skin_type (All skin types)</li>
            <li><strong>Collections:</strong> Best Sellers (automated: tag = bestseller), Serums (manual), Skincare Routine (manual)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🏠 Online Store 2.0 Architecture</h3>
    <p>In 2021, Shopify released Online Store 2.0 — the modern way to build themes. This is NOT optional. ALL themes we build must be OS 2.0 compatible.</p>
    <div class="highlight-box">
        <h4>The 4 Pillars of OS 2.0</h4>
        <ul>
            <li><strong>Sections Everywhere:</strong> Before 2.0, sections only worked on the homepage. Now you can add sections to ANY page type — product pages, collection pages, blog posts, cart page, and more. This is massive for flexibility.</li>
            <li><strong>JSON Templates:</strong> Template files are now JSON (not Liquid). The JSON file defines which sections appear on that page type and in what order. Merchants can rearrange sections without touching code.</li>
            <li><strong>App Blocks:</strong> Apps can add their own sections and blocks without editing your theme code. No more app conflicts breaking themes. Apps integrate cleanly through the customizer.</li>
            <li><strong>Dynamic Sources:</strong> Section settings can pull data directly from metafields. Instead of hardcoding content, settings connect to dynamic data sources that merchants control.</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>Why This Matters for You</h4>
        <p>OS 2.0 means maximum flexibility with ZERO code changes for content updates. The client can rearrange sections, swap images, change text, add app blocks — all from the customizer. Your job is to build the sections correctly so clients never need to call you for simple content changes.</p>
    </div>
</div>

<div class="content-section">
    <h3>⚙️ Shopify Limitations &amp; Possibilities</h3>
    <p>This is one of the MOST important sections in this entire training. Knowing what Shopify CAN and CANNOT do prevents you from promising the impossible and helps you find creative solutions.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Shopify CAN Do</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Needs Apps / Custom Code</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What is IMPOSSIBLE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Design</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full theme customization, custom sections, CSS overrides, section reordering</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex animations, advanced product filtering, mega menus</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout page layout redesign (without Shopify Plus)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Products</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100+ variants, metafields, digital products, gift cards</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product bundles (app), subscriptions (app), custom product builders</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-time inventory sync with external warehouses without app</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Content</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blog, pages, custom sections, metaobjects</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Advanced CMS features, dynamic content personalization</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full headless CMS (without Hydrogen or custom frontend)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>SEO</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta tags, alt text, URL handles, auto-sitemap, canonical URLs</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schema markup (custom code), advanced 301 redirects, structured data</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Server-side rendering customization, custom URL structures (/products/ prefix is fixed)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Checkout</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Basic branding (logo, colors, fonts), test orders</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout extensibility, custom fields (Plus only)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete checkout page redesign without Plus plan</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>International</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-currency via Markets, country-specific pricing, duties estimation</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-language (app or Translate &amp; Adapt), full tax compliance</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">True multi-store from one admin account</td>
            </tr>
        </tbody>
    </table>

    <div class="warning-box">
        <h4>Why This Table Matters</h4>
        <p>When a Project Manager asks "Can we do X?" — your answer should NEVER be "I don't know." Memorize these boundaries. If something is in the "impossible" column, say so immediately. If it needs an app, recommend one. If Shopify can do it natively, do not install an app for it.</p>
    </div>
</div>

<div class="content-section">
    <h3>🔧 Shopify Limits You Must Know</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limit</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Value</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variants per product</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100 max (3 options max)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size + Color + Material = 100 combos max. Plan variant strategy carefully.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product images</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">250 max per product</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Usually more than enough. Optimize image sizes before upload.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collections</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5,000 max</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rarely an issue. Smart collection rules are more efficient.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products per store</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited (Basic plan and up)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">But product loop limit is 50 per page. Use pagination.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sections per template</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25 max</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plan homepage structure carefully. Combine content when needed.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blocks per section</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50 max</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More than sufficient for most use cases.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metafield definitions</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">250 per resource type</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plan your metafield schema before creating them.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme file size</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Individual file: no hard limit, total theme varies</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keep files lean. Large CSS/JS files slow the store down.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🌍 Multi-Currency &amp; Shopify Markets Setup</h3>
    <p>Shopify Markets is the built-in tool for selling internationally. Understanding it is essential because many of our clients sell globally.</p>

    <div class="highlight-box">
        <h4>Shopify Markets Overview</h4>
        <ul>
            <li><strong>Primary Market:</strong> Your main selling country (usually where the business is based)</li>
            <li><strong>International Markets:</strong> Additional countries/regions you sell to</li>
            <li><strong>Per-Market Settings:</strong> Each market can have its own currency, language, domain, pricing adjustments, and duties/tax configuration</li>
            <li><strong>Automatic Currency Conversion:</strong> Shopify converts prices based on exchange rates with optional rounding rules</li>
        </ul>
    </div>

    <div class="warning-box">
        <h4>The Hardcoding Trap</h4>
        <p>Never, EVER hardcode currency symbols like "$" or "pounds" in your code or content.</p>
        <p><strong>WRONG:</strong> <code>&lt;span&gt;$49.99&lt;/span&gt;</code></p>
        <p><strong>RIGHT:</strong> <code>{{ product.price | money }}</code></p>
        <p>A customer in the UK expects to see "pounds", not "$". The money filter handles this automatically based on the customer's market. Hardcoded currencies = broken international experience = lost sales.</p>
    </div>

    <p><strong>Key Liquid money filters:</strong></p>
    <ul>
        <li><code>{{ price | money }}</code> — Formats with currency symbol based on store settings</li>
        <li><code>{{ price | money_with_currency }}</code> — Adds currency code (e.g., "$49.99 USD")</li>
        <li><code>{{ price | money_without_currency }}</code> — Number only, no symbol</li>
        <li><code>{{ price | money_without_trailing_zeros }}</code> — Removes .00 for whole numbers</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔐 Getting Store Access (First Step for ANY Project)</h3>
    <div class="warning-box">
        <h4>NEVER Start Work Without Proper Access</h4>
        <p>Before you touch ANY code or settings, you MUST have proper collaborator access to the client's Shopify store. Working without official access = security risk and potential account issues. <strong>Never ask for or accept shared login credentials.</strong></p>
    </div>

    <h4>Step-by-Step: Getting Collaborator Access</h4>
    <ol>
        <li><strong>Request Collaborator Code from Client:</strong> Ask the client to go to Settings, then Users and permissions, then find the 4-digit collaborator request code and share it with you.</li>
        <li><strong>Request Access Using the Code:</strong> Go to accounts.shopify.com/store-login, enter the client's store URL (.myshopify.com), click "Log in with collaborator request", enter the 4-digit code, fill in your request details, and select the permissions you need.</li>
        <li><strong>Client Approves Your Request:</strong> Tell the client to check Settings, then Users and permissions, then Collaborators, and approve your pending request.</li>
        <li><strong>Verify Your Access:</strong> Log in and confirm you can access: Theme editor, Settings, Products, and Apps.</li>
    </ol>

    <h4>Permission Levels by Project Type</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project Type</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Permissions Needed</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full Store Build</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full access (all permissions)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Need to configure everything end-to-end</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme Customization</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Themes, Online Store</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only need design and content access</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Upload</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products, Collections</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manage catalog only</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">App Integration</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Apps, Settings, Themes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install and configure apps, may need theme access for app blocks</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Optimization</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Themes, Apps, Settings</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Need to modify code, audit apps, and adjust settings</td>
            </tr>
        </tbody>
    </table>

    <h4>Common Access Problems &amp; Solutions</h4>
    <ul>
        <li><strong>"I cannot find the collaborator code"</strong> — The client needs to be on a Shopify paid plan. Trial stores do not have the collaborator feature.</li>
        <li><strong>"Client wants to share login instead"</strong> — Politely decline. Explain collaborator access is more secure and trackable. Shared logins are a security risk.</li>
        <li><strong>"Access request not showing for client"</strong> — Make sure you used the correct store URL (.myshopify.com domain, not custom domain).</li>
        <li><strong>"Some areas are restricted"</strong> — Ask the client to edit your collaborator permissions in Settings, then Users.</li>
        <li><strong>"Client is on Shopify Lite"</strong> — Lite plans have limited admin access. They may need to upgrade for full store builds.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎥 Video Resources</h3>
    <p>Watch the full video library below to solidify your understanding of Shopify fundamentals.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🔧 Hands-On Exercise: Build the Luxe Botanica Foundation</h3>
    <p>Complete every step below. Do NOT skip any. This builds the foundation for all future tasks.</p>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Step 1: Create a Development Store</h4>
        <p>Go to partners.shopify.com and create a free development store. Name it "Luxe Botanica Dev". This is your sandbox for the entire training program.</p>

        <h4 style="color: #818CF8;">Step 2: Navigate Every Admin Section</h4>
        <p>Spend at least 5 minutes in EACH of these admin areas. Click every link, open every dropdown. You need to know where everything lives:</p>
        <ul>
            <li>Home (Dashboard)</li>
            <li>Orders</li>
            <li>Products (Products, Collections, Inventory, Gift Cards)</li>
            <li>Customers</li>
            <li>Content (Metaobjects, Files)</li>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Discounts</li>
            <li>Online Store (Themes, Pages, Blog Posts, Navigation, Preferences)</li>
            <li>Settings (every sub-section)</li>
        </ul>

        <h4 style="color: #818CF8;">Step 3: Create 5 Products with Variants</h4>
        <p>Create these products for Luxe Botanica. Each must have at least 2 variants:</p>
        <ol>
            <li><strong>Vitamin C Brightening Serum</strong> — Variants: 15ml ($28), 30ml ($45), 50ml ($65)</li>
            <li><strong>Hydra-Glow Moisturizer</strong> — Variants: Normal/Oily ($38), Dry/Sensitive ($42)</li>
            <li><strong>Gentle Botanical Cleanser</strong> — Variants: 100ml ($22), 200ml ($38)</li>
            <li><strong>Revive Eye Cream</strong> — Variants: Day Formula ($35), Night Formula ($40)</li>
            <li><strong>Detox Clay Face Mask</strong> — Variants: Single ($25), 3-Pack ($60)</li>
        </ol>

        <h4 style="color: #818CF8;">Step 4: Create 3 Collections</h4>
        <ol>
            <li><strong>Best Sellers</strong> (Automated collection: products tagged "bestseller")</li>
            <li><strong>Complete Skincare Routine</strong> (Manual collection: hand-pick the Serum, Moisturizer, and Cleanser)</li>
            <li><strong>New Arrivals</strong> (Automated collection: created within last 30 days)</li>
        </ol>

        <h4 style="color: #818CF8;">Step 5: Create Metafield Definitions</h4>
        <p>Go to Settings, then Custom data, then Products. Create these metafield definitions:</p>
        <ul>
            <li><strong>Ingredients</strong> (namespace: custom, key: ingredients, type: multi_line_text) — Add ingredients to 2 products</li>
            <li><strong>Usage Instructions</strong> (namespace: custom, key: usage_instructions, type: multi_line_text)</li>
            <li><strong>Skin Type</strong> (namespace: custom, key: skin_type, type: single_line_text)</li>
        </ul>

        <h4 style="color: #818CF8;">Step 6: Explore Settings</h4>
        <p>Open each of these and understand what they control:</p>
        <ul>
            <li>Settings &gt; Payments — see what payment providers are available</li>
            <li>Settings &gt; Shipping — understand shipping zones and rates</li>
            <li>Settings &gt; Checkout — explore customer account options, tipping, order processing</li>
            <li>Settings &gt; Markets — see how international selling is configured</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📺 Complete Video Training Library</h3>
    <p>Watch these 20 tutorials to see Shopify in action. Go through them at 1.5x speed and take notes on key concepts.</p>

    <h4>Getting Started (Videos 1-2)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YtbaxJFb9zE" frameborder="0" allowfullscreen></iframe>
    <p><strong>1. Shopify Tutorial for Beginners 2026</strong> - Complete guide for building a Shopify store from scratch.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fO7bb5Dfukk" frameborder="0" allowfullscreen></iframe>
    <p><strong>2. Shopify Tutorial 2025 (Full Setup)</strong> - Step-by-step store setup including navigation, theme, pages.</p>

    <h4>Theme Customization (Videos 3-5)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fQZntbd5QGI" frameborder="0" allowfullscreen></iframe>
    <p><strong>3. Theme Customization (Sections &amp; Blocks)</strong> - Use Shopify's visual editor, blocks, and sections.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/nJMqRgKkkBg" frameborder="0" allowfullscreen></iframe>
    <p><strong>4. Create &amp; Edit Shopify Pages</strong> - Create key store pages (About, Contact, FAQ).</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/cpGL7I2dECo" frameborder="0" allowfullscreen></iframe>
    <p><strong>5. About Us &amp; FAQ Page Tutorial</strong> - Build compelling About Us and FAQ pages.</p>

    <h4>SEO &amp; Optimization (Videos 6-7)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/umTyBPD_Fjw" frameborder="0" allowfullscreen></iframe>
    <p><strong>6. SEO - Preferences &amp; Meta Setup</strong> - Homepage title, meta description, and SEO basics.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/LMGj7N2iW2A" frameborder="0" allowfullscreen></iframe>
    <p><strong>7. SEO Optimization for Beginners</strong> - Practical SEO strategy: site structure and keywords.</p>

    <h4>Product Management (Videos 8-10)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YvllH3MhPWY" frameborder="0" allowfullscreen></iframe>
    <p><strong>8. How to Add Products</strong> - Create product listings, set prices, inventory, variants.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/B4OE1lvTBp0" frameborder="0" allowfullscreen></iframe>
    <p><strong>9. Product Page Customization</strong> - Organize and customize product templates.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/gsw2NYVrPfM" frameborder="0" allowfullscreen></iframe>
    <p><strong>10. Variants &amp; Inventory</strong> - Product variants, SKU logic, and stock tracking.</p>

    <h4>Navigation &amp; Structure (Videos 11-12)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/X8FWjKaxi-E" frameborder="0" allowfullscreen></iframe>
    <p><strong>11. Navigation, Policies &amp; Pages</strong> - Site structure: main menus, footer links, policies.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rsp_hc3ICUo" frameborder="0" allowfullscreen></iframe>
    <p><strong>12. Drop-Down Menu Setup</strong> - Create drop-down navigation for categories.</p>

    <h4>Shipping &amp; Payments (Videos 13-15)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/X6hBF5bnnto" frameborder="0" allowfullscreen></iframe>
    <p><strong>13. Payments &amp; Shipping Setup</strong> - Configure payment providers and shipping basics.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/p45DB8aY2Vc" frameborder="0" allowfullscreen></iframe>
    <p><strong>14. Shipping Profiles Explained</strong> - Shipping profiles, rates, and zone configuration.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/OMJv0n3INJ8" frameborder="0" allowfullscreen></iframe>
    <p><strong>15. Shipping Rates &amp; Portfolios</strong> - Setting shipping rates and custom profiles.</p>

    <h4>International Markets (Videos 16-18)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/F9R7Pwkao8k" frameborder="0" allowfullscreen></iframe>
    <p><strong>16. Shopify Markets Explained</strong> - Activate and manage Markets for international selling.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/jPQSg5lTR0g" frameborder="0" allowfullscreen></iframe>
    <p><strong>17. How to Sell Internationally</strong> - Step-by-step Markets setup with multi-currency.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/uiBLBX9HTRA" frameborder="0" allowfullscreen></iframe>
    <p><strong>18. Multi-Currency Checkout</strong> - Set up multi-currency pricing and checkout.</p>

    <h4>Apps &amp; Integrations (Videos 19-20)</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-msd5yDGn34" frameborder="0" allowfullscreen></iframe>
    <p><strong>19. 17TRACK Order Tracking</strong> - Set up real-time order tracking and notifications.</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/UKnpUB8RslQ" frameborder="0" allowfullscreen></iframe>
    <p><strong>20. Klaviyo Email Marketing</strong> - End-to-end Klaviyo integration for email automation.</p>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Shopify Architecture, Admin, Limits, and Fundamentals</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 4</li>
        <li>💡 If stuck, re-read the Limitations table and Admin walkthrough sections</li>
    </ul>
</div>
`;

// Continue with more tasks...
// (Tasks 3-13 follow the same deep pattern)

const task4Content = `
<h2>📚 TASK 4: THEME ARCHITECTURE - Dawn/Prestige Mastery</h2>

<div class="content-section">
    <h3>🎨 Theme Selection Philosophy</h3>
    <p>Choosing the right theme is the FIRST architectural decision you make on any project. At Digital Heroes, we have preferred themes based on years of experience building high-converting stores.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Score</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customization Effort</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Dawn</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimalist brands, performance-first stores, custom builds</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90+</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High — clean base, you build features yourself</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Prestige</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$350</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury brands, high-end products, premium feel</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">85-90</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medium — many built-in features, less custom code needed</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Impulse</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$350</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Large catalogs, feature-rich stores, versatile layouts</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">80-85</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low — feature-packed, most things work out of the box</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Symmetry</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$340</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fashion brands, grid layouts, visual-heavy stores</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">85-90</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medium — strong grid system, good for clothing brands</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>When to Use Each Theme</h4>
        <ul>
            <li><strong>Dawn:</strong> Client has a small catalog (under 50 products), wants maximum speed, and budget is tight. You have time to build custom sections. Great for Luxe Botanica.</li>
            <li><strong>Prestige:</strong> Client sells luxury/premium products and needs that "high-end" feel immediately. Built-in features like image hotspots, lookbooks, and product storytelling.</li>
            <li><strong>Impulse:</strong> Client has a large catalog (100+ products) and needs advanced filtering, mega menus, and promotional features. Most feature-rich option.</li>
        </ul>
    </div>

    <div class="warning-box">
        <h4>NEVER Edit the Live Theme Directly</h4>
        <p>This is the most important rule in Shopify development. Breaking the live theme means the store is DOWN and losing money every second.</p>
        <p><strong>The Protocol:</strong></p>
        <ol>
            <li>Duplicate the live theme</li>
            <li>Name the duplicate: <code>[Dev] Feature Name - YYYY-MM-DD</code></li>
            <li>Make ALL changes in the duplicate</li>
            <li>Preview and test thoroughly on mobile and desktop</li>
            <li>Get approval from PM or client</li>
            <li>Only then: Publish the duplicate</li>
        </ol>
        <p><strong>A junior developer once deleted the header section file on a live theme. The store showed no navigation for 45 minutes during peak traffic. Panic calls. Lost sales. Angry client. Those 30 seconds to duplicate could have prevented it all.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>📁 Theme File Structure</h3>
    <p>Every Shopify theme follows the same folder structure. You MUST know what each folder contains and how often you will edit files in it.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Folder</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Key Files</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edit Frequency</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/assets</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS, JS, images, fonts, static files</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">theme.css, base.css, custom.css, global.js</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Often</strong> — CSS overrides, custom JS</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/config</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme settings definitions and saved values</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">settings_schema.json, settings_data.json</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Rarely</strong> — usually managed via customizer</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/layout</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wrapper templates that wrap around all pages</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">theme.liquid (main layout), password.liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Rarely</strong> — for global scripts, meta tags</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/locales</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Translation files for all text in the theme</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">en.default.json, fr.json, etc.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Occasionally</strong> — changing button text, labels</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/sections</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modular content blocks (the building blocks of pages)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">header.liquid, footer.liquid, featured-collection.liquid, custom-*.liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Very Often</strong> — this is where most dev work happens</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/snippets</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reusable code fragments included in sections/layouts</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">card-product.liquid, price.liquid, icon-*.liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Often</strong> — modifying product cards, price display</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>/templates</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page type templates (JSON in OS 2.0)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">index.json, product.json, collection.json, page.json, cart.json</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Occasionally</strong> — creating alternate templates</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>The Developer Flow</h4>
        <p>When you get a task like "Add a testimonials section to the homepage," here is exactly what happens:</p>
        <ol>
            <li>You create or edit a file in <strong>/sections</strong> (e.g., custom-testimonials.liquid)</li>
            <li>The section includes a <strong>schema</strong> that defines editable settings</li>
            <li>You may add supporting CSS in <strong>/assets</strong> and reusable code in <strong>/snippets</strong></li>
            <li>The JSON template in <strong>/templates/index.json</strong> references your section</li>
            <li>The merchant can now add/edit/reorder this section from the <strong>Theme Customizer</strong></li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📄 JSON Template Anatomy</h3>
    <p>In Online Store 2.0, templates are JSON files, not Liquid files. The JSON defines WHICH sections appear and in WHAT order. Here is what a simplified product.json template looks like:</p>

    <pre><code>{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {
        "enable_sticky_info": true,
        "media_size": "large"
      }
    },
    "related-products": {
      "type": "related-products",
      "settings": {
        "heading": "You May Also Like",
        "products_to_show": 4
      }
    },
    "custom-testimonials": {
      "type": "custom-testimonials",
      "settings": {
        "heading": "What Our Customers Say"
      }
    }
  },
  "order": [
    "main",
    "related-products",
    "custom-testimonials"
  ]
}</code></pre>

    <p><strong>Key points about JSON templates:</strong></p>
    <ul>
        <li>Each entry in "sections" references a section file by its "type" (filename without .liquid)</li>
        <li>The "order" array controls the display order of sections</li>
        <li>"settings" are values that correspond to the section's schema definition</li>
        <li>Merchants can add, remove, and reorder sections from the theme customizer — the customizer writes to this JSON</li>
        <li>You can create alternate templates (e.g., product.landing.json) and assign them to specific products</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔧 Section Schema Structure</h3>
    <p>Every section file has two parts: the <strong>Liquid/HTML rendering code</strong> at the top, and the <strong>schema</strong> at the bottom. The schema defines what the merchant can edit in the customizer.</p>

    <p>Here is an example of a complete custom section for a "Features Grid":</p>

    <pre><code>&lt;section class="features-grid"&gt;
  &lt;div class="page-width"&gt;
    {% if section.settings.heading != blank %}
      &lt;h2 class="features-heading"&gt;{{ section.settings.heading }}&lt;/h2&gt;
    {% endif %}

    &lt;div class="features-grid__items"&gt;
      {% for block in section.blocks %}
        &lt;div class="features-grid__item" {{ block.shopify_attributes }}&gt;
          {% if block.settings.icon != blank %}
            &lt;img
              src="{{ block.settings.icon | image_url: width: 64 }}"
              alt="{{ block.settings.heading }}"
              width="64"
              height="64"
              loading="lazy"
            &gt;
          {% endif %}
          &lt;h3&gt;{{ block.settings.heading }}&lt;/h3&gt;
          &lt;p&gt;{{ block.settings.description }}&lt;/p&gt;
        &lt;/div&gt;
      {% endfor %}
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;

{% schema %}
{
  "name": "Features Grid",
  "tag": "section",
  "class": "section-features-grid",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Why Choose Us"
    }
  ],
  "blocks": [
    {
      "type": "feature",
      "name": "Feature",
      "limit": 4,
      "settings": [
        {
          "type": "image_picker",
          "id": "icon",
          "label": "Icon Image"
        },
        {
          "type": "text",
          "id": "heading",
          "label": "Feature Heading",
          "default": "Feature Title"
        },
        {
          "type": "richtext",
          "id": "description",
          "label": "Description"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Features Grid",
      "blocks": [
        { "type": "feature" },
        { "type": "feature" },
        { "type": "feature" }
      ]
    }
  ]
}
{% endschema %}</code></pre>

    <h4>Common Schema Setting Types</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Creates</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Case</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">text</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Single-line text input</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Headings, button text, short labels</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">textarea</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-line text area</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Descriptions, paragraphs</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">richtext</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rich text editor with formatting</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content blocks with bold, italic, links</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">image_picker</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Image upload/select widget</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero images, icons, backgrounds</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">select</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dropdown with predefined options</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Layout choices, alignment, style variants</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">range</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Numeric slider</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Padding, number of items to show, opacity</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">color</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Color picker</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Background colors, text colors, accents</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">checkbox</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Boolean toggle</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show/hide elements, enable features</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">url</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">URL input with link picker</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CTA button links, banner links</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">collection</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collection picker</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Featured collection sections, product grids</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">product</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product picker</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Featured product, cross-sell sections</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🏠 The 12 Essential Homepage Sections</h3>
    <p>A high-converting homepage follows a proven structure. Every section has a PURPOSE — no section exists just to look pretty. It either builds trust, showcases products, or drives action.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Section</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Key Content</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Announcement Bar</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Highlight key offer, create urgency</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Free shipping over $50" or current sale message</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hero Banner</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First impression, primary CTA</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Headline (7 words max), subtext, CTA button, lifestyle image</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust/Logo Bar</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build immediate credibility</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"As seen in..." logos, or trust icons (free shipping, secure checkout, etc.)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Featured Collection</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Showcase best-selling products</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-8 products from "Best Sellers" or "New Arrivals" collection</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image with Text</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tell the brand story</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Founder story, brand mission, lifestyle photo + short narrative</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Collection Grid</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category navigation</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shop by category with images (Serums, Moisturizers, Masks, etc.)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Testimonials</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof and trust building</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-6 customer reviews with photos, star ratings, names</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust Guarantees Bar</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reduce purchase anxiety</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money-back guarantee, free returns, secure payment, cruelty-free</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FAQ Accordion</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Handle objections, reduce support tickets</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-8 common questions about shipping, returns, ingredients, etc.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Nice-to-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Blog Posts</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content marketing and SEO</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-4 recent blog posts with images, titles, excerpts</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Nice-to-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">11</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Newsletter Signup</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email list capture</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email input, incentive ("Get 10% off your first order"), privacy note</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Footer</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Navigation, legal, contact, trust signals</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quick links, policies, contact info, social media, payment icons</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must-have</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>Luxe Botanica Homepage Flow</h4>
        <p>For our Luxe Botanica store, the homepage tells this story:</p>
        <ol>
            <li><strong>Announcement:</strong> "Free Shipping on Orders $50+ | 30-Day Money Back Guarantee"</li>
            <li><strong>Hero:</strong> "Radiant Skin, Naturally" with a lifestyle photo of a woman with glowing skin, CTA: "Shop the Collection"</li>
            <li><strong>Trust Bar:</strong> Cruelty-Free | Dermatologist Tested | 100% Vegan | Free Returns</li>
            <li><strong>Best Sellers:</strong> Vitamin C Serum, Moisturizer, Cleanser, Eye Cream</li>
            <li><strong>Brand Story:</strong> "Founded by a dermatologist who believes in the power of botanicals..."</li>
            <li><strong>Shop by Category:</strong> Serums, Moisturizers, Cleansers, Masks</li>
            <li><strong>Reviews:</strong> 5-star testimonials with customer photos</li>
            <li><strong>Guarantees:</strong> 30-Day Returns, Secure Checkout, Eco-Packaging</li>
            <li><strong>FAQ:</strong> Common skincare questions</li>
            <li><strong>Newsletter:</strong> "Join the Botanica Club — 10% off your first order"</li>
            <li><strong>Footer:</strong> All navigation, policies, social links, payment badges</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🖱️ Theme Customizer vs Code Editor — What to Use When</h3>
    <p>Knowing when to use the visual Customizer versus the Code Editor is a key developer skill. The rule is simple: <strong>if the Customizer can do it, do NOT write code.</strong></p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Customizer</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Code Editor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Change images, text, colors</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reorder homepage sections</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Change fonts and typography</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No (unless adding custom fonts)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add a new built-in section</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create a CUSTOM section</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes (Liquid + schema)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS overrides (spacing, animations)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes (custom CSS file in /assets)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add JavaScript functionality</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes (custom JS in /assets)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modify product card layout</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limited</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes (edit snippets/card-product.liquid)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create alternate page template</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes (new JSON file in /templates)</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📱 Mobile-First Development</h3>
    <p><strong>70%+ of e-commerce traffic is mobile.</strong> This is not a suggestion — it is the reality. Design and build for mobile FIRST, then enhance for desktop.</p>
    <div class="highlight-box">
        <h4>Mobile Development Priorities</h4>
        <ul>
            <li><strong>Touch targets:</strong> Minimum 44x44px for all buttons and links. Fingers are not mouse cursors.</li>
            <li><strong>Sticky Add to Cart:</strong> The ATC button must always be visible on product pages during scroll. This alone can increase mobile conversions 10-15%.</li>
            <li><strong>Collapsible descriptions:</strong> Long product descriptions should be in accordions on mobile. Show the key info, hide the rest.</li>
            <li><strong>Swipeable galleries:</strong> Product image galleries must be swipeable. Pinch-to-zoom should work.</li>
            <li><strong>No hover-only interactions:</strong> Anything triggered by hover on desktop MUST have a tap alternative on mobile.</li>
            <li><strong>Font sizes:</strong> Minimum 16px body text on mobile. Anything smaller is unreadable.</li>
            <li><strong>Thumb-friendly zones:</strong> Important actions (ATC, checkout) should be at the bottom of the screen where thumbs naturally rest.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Theme Limitations</h3>
    <div class="warning-box">
        <h4>Important Shopify Theme Constraints</h4>
        <ul>
            <li><strong>Max 25 sections per template</strong> — Plan your homepage structure carefully. If you need more content, combine related elements into multi-block sections.</li>
            <li><strong>No section nesting</strong> — You cannot put sections inside sections. Blocks inside sections are the workaround.</li>
            <li><strong>Dynamic sources are limited</strong> — Only certain setting types support connecting to metafields as dynamic sources. Check the docs before promising this to a PM.</li>
            <li><strong>Checkout cannot use theme sections</strong> — The checkout page is controlled by Shopify. Theme sections do not apply there (Shopify Plus has checkout extensibility).</li>
            <li><strong>Max 50 blocks per section</strong> — Usually not an issue, but plan for it with repeating content sections.</li>
            <li><strong>No server-side logic</strong> — Liquid runs on Shopify's servers. You cannot add custom backend logic. For that, you need Shopify Functions or custom apps.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎥 Video Resources</h3>
    <p>Watch these to see theme customization and page building in action:</p>

    <h4>Theme Customization Deep Dive</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fQZntbd5QGI" frameborder="0" allowfullscreen></iframe>

    <h4>Building Pages in Shopify</h4>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/nJMqRgKkkBg" frameborder="0" allowfullscreen></iframe>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🔧 Hands-On Exercise: Explore Theme Architecture</h3>
    <p>Complete every step. This exercise builds directly on your Luxe Botanica dev store from Task 3.</p>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Step 1: Duplicate the Dawn Theme</h4>
        <p>In your dev store, go to Online Store &gt; Themes. Click the three dots on the Dawn theme and select "Duplicate". Name it "[Dev] Luxe Botanica Exploration".</p>

        <h4 style="color: #818CF8;">Step 2: Explore the Code Editor</h4>
        <p>Click "Edit Code" on your duplicated theme. Open EVERY folder and note what each file does:</p>
        <ul>
            <li>Open /layout/theme.liquid — find where {{ content_for_header }} and {{ content_for_layout }} are</li>
            <li>Open /templates/index.json — see how the homepage sections are defined</li>
            <li>Open /sections/featured-collection.liquid — find its schema at the bottom</li>
            <li>Open /snippets/card-product.liquid — this renders each product card</li>
            <li>Open /config/settings_schema.json — this defines all theme settings</li>
            <li>Open /assets/ — note the CSS and JS files</li>
        </ul>

        <h4 style="color: #818CF8;">Step 3: Build the Luxe Botanica Homepage</h4>
        <p>Open the Theme Customizer and add all 12 essential sections in order. Use placeholder content from your products created in Task 3.</p>

        <h4 style="color: #818CF8;">Step 4: Read a Section File and Understand Its Schema</h4>
        <p>Open /sections/featured-collection.liquid in the code editor. Find its {% schema %} block. Identify:</p>
        <ul>
            <li>What settings are defined?</li>
            <li>What blocks are available?</li>
            <li>What are the default values?</li>
            <li>How do the Liquid tags reference the schema settings?</li>
        </ul>

        <h4 style="color: #818CF8;">Step 5: Create an Alternate Product Template</h4>
        <p>In the code editor, go to /templates. Create a new file called product.landing.json. Copy the contents of product.json as a starting point. Add or remove sections to create a different layout. Then go to a product in your admin and assign it this new template.</p>

        <h4 style="color: #818CF8;">Step 6: Document Your Findings</h4>
        <p>Take notes on which customizations needed the Code Editor versus the Customizer only. This distinction will guide your daily work.</p>
    </div>
</div>

<div class="content-section">
    <h3>CRITICAL: Shopify Store Build Rules</h3>
    <p>These rules apply to EVERY store build. Violating any of these will result in client complaints and rework. Memorize them.</p>

    <div class="warning-box">
        <h4>CURRENCY CHECK - FIRST STEP FOR ANY PROJECT</h4>
        <p><strong>NEVER keep currency as INR for US/international clients!</strong></p>
        <ul>
            <li>Verify currency setting IMMEDIATELY after store creation</li>
            <li>Change to USD (or the client's target currency)</li>
            <li>Double-check currency on the checkout page during QA</li>
            <li>This is the FIRST thing you check when you get access to any store</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Mandatory Store Elements Checklist</h4>
        <p>Every store you build MUST have all of these before submission:</p>
        <ul>
            <li>Minimum <strong>3 trending products</strong> per practice store</li>
            <li><strong>ALL policy pages</strong> must have content: Privacy Policy, Shipping Policy, Refund Policy, Terms of Service</li>
            <li><strong>Live chat integration</strong> mandatory (Shopify Inbox or equivalent)</li>
            <li><strong>Track Order page</strong> - must be functional, not just a placeholder</li>
            <li><strong>About Us page</strong> - with real content, not Lorem Ipsum or placeholder text</li>
            <li><strong>Contact page</strong> - with a functional contact form</li>
            <li><strong>SEO completed</strong> for ALL pages and products (meta titles, descriptions, alt text)</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Required App Integrations</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <thead>
                <tr style="background: rgba(99, 102, 241, 0.15);">
                    <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">App</th>
                    <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google App</strong></td>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install and configure</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>TikTok App</strong></td>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install and configure</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Facebook App</strong></td>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install and configure</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Order Tracking App</strong></td>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functional and tested</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <h4>Time Standards</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <thead>
                <tr style="background: rgba(99, 102, 241, 0.15);">
                    <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task Type</th>
                    <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maximum Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Practice Store</strong></td>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maximum 2 hours per store</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Store Speed</strong></td>
                    <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 complete store + homepage of 2nd store = 1 day</td>
                </tr>
            </tbody>
        </table>
        <p><strong>Remember:</strong> Shopify is 2x easier than WordPress - your speed should reflect this! If you are taking longer than these benchmarks, review your workflow and identify bottlenecks.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Theme Architecture, Sections, Schemas, and File Structure</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
        <li>💡 If stuck, re-read the File Structure table and Schema section</li>
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
    <h3>Production-Ready Code Snippets</h3>
    <p>These are battle-tested snippets from our production stores. Copy them directly into your projects. Each one handles edge cases and follows Shopify best practices.</p>

    <h4>1. Responsive Image with Lazy Loading</h4>
    <p>The modern way to output images in Shopify OS 2.0. Uses the image_url filter with srcset for responsive sizing and lazy loading for performance.</p>
    <pre><code>{{ image | image_url: width: 800 | image_tag:
  loading: 'lazy',
  widths: '200, 400, 600, 800, 1000',
  sizes: '(max-width: 768px) 100vw, 50vw',
  class: 'responsive-img'
}}</code></pre>
    <p><strong>When to use:</strong> Any image below the fold. For hero images above the fold, omit the loading: 'lazy' parameter to ensure they load immediately.</p>

    <h4>2. Price Display with Compare Price</h4>
    <p>Shows the sale price, original price, and savings amount when a product is on sale. Falls back to regular price display when there is no compare-at price.</p>
    <pre><code>{% if product.compare_at_price &gt; product.price %}
  &lt;span class="sale-price"&gt;{{ product.price | money }}&lt;/span&gt;
  &lt;span class="compare-price"&gt;{{ product.compare_at_price | money }}&lt;/span&gt;
  &lt;span class="save-badge"&gt;Save {{ product.compare_at_price | minus: product.price | money }}&lt;/span&gt;
{% else %}
  &lt;span class="price"&gt;{{ product.price | money }}&lt;/span&gt;
{% endif %}</code></pre>
    <p><strong>Key point:</strong> Always use the <code>| money</code> filter. Never hardcode currency symbols like "$" - this breaks multi-currency stores.</p>

    <h4>3. Stock Status Display</h4>
    <p>Shows contextual stock information: low stock urgency, in stock, or sold out. The low stock threshold of 5 creates urgency that drives conversions.</p>
    <pre><code>{% if product.available %}
  {% if product.variants.first.inventory_quantity &lt;= 5 %}
    &lt;span class="low-stock"&gt;Only {{ product.variants.first.inventory_quantity }} left!&lt;/span&gt;
  {% else %}
    &lt;span class="in-stock"&gt;In Stock&lt;/span&gt;
  {% endif %}
{% else %}
  &lt;span class="out-of-stock"&gt;Sold Out&lt;/span&gt;
{% endif %}</code></pre>
    <p><strong>Pro tip:</strong> Style the low-stock message in red or orange to create visual urgency. This pattern consistently increases add-to-cart rates.</p>

    <h4>4. Collection with Filter Safe Access</h4>
    <p>Safely accesses a collection by handle with proper null checks. Prevents errors when a collection does not exist or has no products.</p>
    <pre><code>{% assign collection = collections['featured-products'] %}
{% if collection and collection.products.size &gt; 0 %}
  {% for product in collection.products limit: 4 %}
    {% render 'product-card', product: product %}
  {% endfor %}
{% else %}
  &lt;p&gt;No products found.&lt;/p&gt;
{% endif %}</code></pre>
    <p><strong>Important:</strong> Always use <code>{% render %}</code> not <code>{% include %}</code>. The include tag is deprecated in OS 2.0 themes. Also note the use of <code>limit: 4</code> to control how many products display.</p>

    <h4>5. Metafield with Default Value</h4>
    <p>Accesses a custom metafield with a fallback when the metafield is empty or not set. Essential for sections that reference optional custom data.</p>
    <pre><code>{% assign custom_text = product.metafields.custom.subtitle %}
{% if custom_text != blank %}
  {{ custom_text }}
{% else %}
  Default subtitle here
{% endif %}</code></pre>
    <p><strong>Best practice:</strong> Always add <code>{% if %}</code> checks before accessing metafield objects. Use the <code>| default: 'value'</code> filter for simpler cases. Prefer <code>{% render %}</code> over <code>{% include %}</code> in 2.0 themes. Add meaningful CSS classes for styling.</p>
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
<h2>⚡ TASK 7: SPEED OPTIMIZATION - Every Second Costs Money</h2>

<!-- Section 1: Why Speed Matters -->
<div class="content-section">
    <h3>💰 Why Speed Matters - The Business Case</h3>
    <p>Speed is not a developer vanity metric. It is a <strong>revenue metric</strong>. Google has confirmed that page speed is a direct ranking factor, and study after study shows a direct link between load time and conversion rate.</p>

    <div class="warning-box">
        <h4>&#9888;&#65039; The Revenue Impact of Slow Pages</h4>
        <p><strong>Every 1-second delay in page load time = 7% drop in conversions.</strong></p>
        <p>For a store doing $50,000/day in revenue, that is <strong>$3,500/day lost</strong> per second of delay. Over a month, that is $105,000 in lost revenue from a speed problem you could have fixed.</p>
        <p>Mobile speed is even more critical: <strong>70%+ of e-commerce traffic is mobile</strong>, and mobile users are far less patient. A 3-second load time on mobile sees <strong>53% of visitors bounce</strong> (leave without interacting).</p>
    </div>

    <div class="highlight-box">
        <h4>Speed Impact by the Numbers</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Load Time</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Bounce Rate Increase</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Conversion Impact</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Revenue Lost ($50K/day store)</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>0-2 seconds</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Baseline</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Optimal</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">$0</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>3 seconds</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+32%</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">-7%</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">$3,500/day</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>5 seconds</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+90%</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">-21%</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">$10,500/day</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>10 seconds</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+123%</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">-50%+</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">$25,000/day</td>
            </tr>
        </table>
    </div>

    <p><strong>Bottom line:</strong> When you optimize speed, you are literally putting money back into the client's pocket. This is one of the highest-ROI activities you can do as a Shopify developer.</p>
</div>

<!-- Section 2: Core Web Vitals Deep Dive -->
<div class="content-section">
    <h3>📊 Core Web Vitals - Deep Dive</h3>
    <p>Google ranks sites based on these performance metrics. They measure real user experience, not just server response. <strong>Know them by heart.</strong></p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Good</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Needs Improvement</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Poor</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Measures</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common Cause</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong><br><em>Largest Contentful Paint</em></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>&lt; 2.5s</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">2.5 - 4.0s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">&gt; 4.0s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When the largest element (hero image, headline) finishes rendering</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unoptimized hero images, slow server response, render-blocking resources</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong><br><em>Cumulative Layout Shift</em></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>&lt; 0.1</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">0.1 - 0.25</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">&gt; 0.25</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How much elements jump around while loading (visual stability)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Images without width/height, dynamic content injected above fold, web fonts loading late</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>TBT</strong><br><em>Total Blocking Time</em></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>&lt; 200ms</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">200 - 600ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">&gt; 600ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How long JS blocks the main thread (page feels frozen)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Third-party app scripts, heavy JavaScript, analytics trackers</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FCP</strong><br><em>First Contentful Paint</em></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>&lt; 1.8s</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">1.8 - 3.0s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">&gt; 3.0s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When the first piece of content appears on screen</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Render-blocking CSS/JS, slow server, large HTML documents</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>TTFB</strong><br><em>Time to First Byte</em></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>&lt; 800ms</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">800ms - 1.8s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">&gt; 1.8s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How fast the server responds to the initial request</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex Liquid rendering, too many Liquid loops, heavy theme.liquid</td>
        </tr>
    </table>

    <p><strong>Key insight:</strong> LCP and TBT are the two metrics that most commonly cause poor scores on Shopify stores. LCP is almost always caused by unoptimized images, while TBT is almost always caused by too many app scripts.</p>
</div>

<!-- Section 3: Image Optimization Master Guide -->
<div class="content-section">
    <h3>🖼️ Image Optimization - The #1 Speed Fix</h3>
    <p>Images are responsible for <strong>60-80% of a typical Shopify page's total weight</strong>. This means image optimization is almost always the single biggest improvement you can make. Get this right and you solve most speed problems.</p>

    <div class="highlight-box">
        <h4>Image Size Targets</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Image Type</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Max File Size</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Recommended Dimensions</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Format</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero / Banner</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>200KB</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1600 x 800px (max 2000px wide)</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">JPG / WebP</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product Images</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>100KB</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">800 x 800px (square) or 1000px max</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">JPG / WebP</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Collection Banners</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>150KB</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1200 x 400px</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">JPG / WebP</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Logos / Icons</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>30KB</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SVG preferred, or 200px max</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SVG / PNG</td>
            </tr>
        </table>
    </div>

    <h4>Using Shopify's image_url Filter (Correct Way)</h4>
    <p>Shopify provides a powerful CDN-based image resizing system. <strong>Always</strong> use the <code>image_url</code> filter (not the deprecated <code>img_url</code>).</p>

    <pre><code>&lt;!-- BASIC: Resize to specific width --&gt;
&lt;img src="{{ product.featured_image | image_url: width: 800 }}"
     alt="{{ product.featured_image.alt | escape }}"
     width="800"
     height="{{ 800 | divided_by: product.featured_image.aspect_ratio | round }}"
     loading="lazy"&gt;

&lt;!-- RESPONSIVE: Serve different sizes for different screens --&gt;
&lt;img src="{{ product.featured_image | image_url: width: 800 }}"
     srcset="{{ product.featured_image | image_url: width: 400 }} 400w,
            {{ product.featured_image | image_url: width: 600 }} 600w,
            {{ product.featured_image | image_url: width: 800 }} 800w,
            {{ product.featured_image | image_url: width: 1000 }} 1000w"
     sizes="(max-width: 600px) 400px,
            (max-width: 900px) 600px,
            800px"
     alt="{{ product.featured_image.alt | escape }}"
     width="800"
     height="{{ 800 | divided_by: product.featured_image.aspect_ratio | round }}"
     loading="lazy"&gt;

&lt;!-- HERO IMAGE: Eager load (above fold, no lazy loading) --&gt;
&lt;img src="{{ section.settings.hero_image | image_url: width: 1600 }}"
     srcset="{{ section.settings.hero_image | image_url: width: 800 }} 800w,
            {{ section.settings.hero_image | image_url: width: 1200 }} 1200w,
            {{ section.settings.hero_image | image_url: width: 1600 }} 1600w"
     sizes="100vw"
     alt="{{ section.settings.hero_image.alt | escape }}"
     width="1600"
     height="{{ 1600 | divided_by: section.settings.hero_image.aspect_ratio | round }}"
     loading="eager"
     fetchpriority="high"&gt;</code></pre>

    <h4>Critical Image Rules</h4>
    <ul>
        <li><strong>Always specify width and height attributes</strong> - This prevents CLS (layout shift). The browser reserves space before the image loads.</li>
        <li><strong>Use loading="lazy" on ALL below-fold images</strong> - Only the hero image and first visible products should load eagerly.</li>
        <li><strong>Use loading="eager" and fetchpriority="high" on the hero image</strong> - This tells the browser to prioritize the LCP element.</li>
        <li><strong>WebP format</strong> - Shopify automatically serves WebP to browsers that support it when you use the image_url filter. You do not need to do anything extra.</li>
        <li><strong>Compress before upload</strong> - Use TinyPNG (tinypng.com) or Squoosh (squoosh.app) to compress images before uploading to Shopify. Do NOT rely solely on Shopify's CDN compression.</li>
        <li><strong>Never upload 4000px+ images</strong> - Shopify can resize, but the original is still stored and sometimes served. Keep originals under 2000px wide.</li>
    </ul>
</div>

<!-- Section 4: JavaScript Optimization -->
<div class="content-section">
    <h3>📜 JavaScript Optimization - The Biggest Speed Killer</h3>
    <p>After images, JavaScript is the second most common cause of slow Shopify stores. The problem is almost always <strong>third-party app scripts</strong>. Every app you install adds JavaScript that runs on every single page load.</p>

    <div class="warning-box">
        <h4>&#9888;&#65039; The Hidden Cost of Apps</h4>
        <p>Each Shopify app adds between <strong>50KB - 200KB of JavaScript</strong> to your store. With 10 apps, you could be loading <strong>1-2MB of JavaScript</strong> on every page. This directly increases TBT (Total Blocking Time) and makes the page feel frozen while scripts execute.</p>
    </div>

    <h4>defer vs async - Know the Difference</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Attribute</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Downloads</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Executes</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blocks Rendering?</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Execution Order</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use When</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>No attribute</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Immediately</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Immediately after download</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>YES - blocks everything</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">In order</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Almost never - avoid this</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>async</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">In parallel</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">As soon as downloaded</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">Briefly during execution</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No guaranteed order</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Analytics, tracking pixels</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>defer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">In parallel</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">After HTML is fully parsed</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>NO</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">In document order</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Most scripts - default choice</td>
        </tr>
    </table>

    <pre><code>&lt;!-- BAD: Blocks rendering --&gt;
&lt;script src="app-widget.js"&gt;&lt;/script&gt;

&lt;!-- GOOD: Downloads in parallel, runs after page loads --&gt;
&lt;script src="app-widget.js" defer&gt;&lt;/script&gt;

&lt;!-- OK for analytics: Downloads in parallel, runs ASAP --&gt;
&lt;script src="analytics.js" async&gt;&lt;/script&gt;</code></pre>

    <h4>Finding and Removing Unused Scripts</h4>
    <p>When you uninstall a Shopify app, its code often stays behind in your theme. Here is how to find it:</p>
    <ol>
        <li>Open your theme code editor: Online Store &gt; Themes &gt; Actions &gt; Edit Code</li>
        <li>Open <strong>Layout/theme.liquid</strong> - look for script tags with app names or external domains</li>
        <li>Search the entire codebase for the app name</li>
        <li>Check the <strong>Snippets</strong> folder for files named after apps</li>
        <li>Check the <strong>Assets</strong> folder for JS/CSS files from apps</li>
        <li>Remove ALL found code, then test the site thoroughly</li>
    </ol>

    <h4>Measuring JavaScript Impact</h4>
    <p>To determine which scripts are hurting your speed the most:</p>
    <ol>
        <li>Run PageSpeed Insights and note the score</li>
        <li>Open theme.liquid and comment out one app's script tags</li>
        <li>Run PageSpeed Insights again</li>
        <li>Note the improvement (or lack thereof)</li>
        <li>Repeat for each app's scripts</li>
        <li>This tells you exactly which apps are the biggest speed killers</li>
    </ol>
</div>

<!-- Section 5: CSS Optimization -->
<div class="content-section">
    <h3>🎨 CSS Optimization</h3>
    <p>CSS problems are less common than image or JS problems, but they can still significantly impact FCP and LCP.</p>

    <ul>
        <li><strong>Critical CSS inlining:</strong> The CSS needed to render above-fold content should be inlined in the <code>&lt;head&gt;</code> tag. Most modern Shopify themes already do this.</li>
        <li><strong>font-display: swap</strong> - This prevents the "flash of invisible text" (FOIT) where text is invisible while web fonts load. The browser shows a fallback font immediately, then swaps to the web font when ready.</li>
        <li><strong>Remove unused CSS from apps:</strong> Just like JS, apps leave behind CSS files. Check your Assets folder for app-related CSS files after uninstalling.</li>
        <li><strong>Minimize custom CSS:</strong> Avoid adding hundreds of lines of custom CSS. Use the theme's built-in settings wherever possible. Custom CSS should be a last resort, not the first solution.</li>
        <li><strong>Avoid @import in CSS:</strong> Using @import creates sequential requests instead of parallel. Use link tags in HTML instead.</li>
    </ul>

    <pre><code>&lt;!-- BAD: Sequential loading --&gt;
&lt;style&gt;
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
&lt;/style&gt;

&lt;!-- GOOD: Parallel loading with preconnect --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
&lt;link href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap" rel="stylesheet"&gt;</code></pre>
</div>

<!-- Section 6: Font Optimization -->
<div class="content-section">
    <h3>🔤 Font Optimization</h3>
    <p>Fonts are a sneaky speed killer. Each font file is 20-100KB, and most stores load more fonts than they need.</p>

    <div class="highlight-box">
        <h4>Font Optimization Rules</h4>
        <ul>
            <li><strong>Maximum 2 font families</strong> - One for headings, one for body. No exceptions.</li>
            <li><strong>Limit font weights</strong> - Load only the weights you actually use (e.g., 400 and 700, not 100-900).</li>
            <li><strong>Preload critical fonts</strong> - Add preload hints for fonts used above the fold.</li>
            <li><strong>font-display: swap</strong> - Always include this to prevent invisible text during loading.</li>
            <li><strong>System font stack as fallback</strong> - Use a system font stack so text is immediately readable: <code>font-family: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;</code></li>
            <li><strong>Consider system fonts entirely</strong> - For maximum speed, consider using only system fonts. Many premium stores use system fonts for body text.</li>
        </ul>
    </div>

    <pre><code>&lt;!-- Preload critical font file --&gt;
&lt;link rel="preload" href="{{ 'custom-font.woff2' | asset_url }}"
      as="font" type="font/woff2" crossorigin&gt;

&lt;!-- Use in CSS with font-display: swap --&gt;
&lt;style&gt;
  @font-face {
    font-family: 'CustomFont';
    src: url('custom-font.woff2') format('woff2');
    font-display: swap;
    font-weight: 400;
  }
&lt;/style&gt;</code></pre>
</div>

<!-- Section 7: Shopify-Specific Speed Limitations -->
<div class="content-section">
    <h3>🔒 Shopify-Specific Speed Limitations</h3>
    <p>It is important to understand what you can and cannot control on Shopify. Set realistic expectations with clients.</p>

    <div class="highlight-box">
        <h4>What You CANNOT Control (Shopify Infrastructure)</h4>
        <ul>
            <li><strong>Shopify's CDN response time (TTFB)</strong> - Shopify's server response varies and you cannot optimize it. Some slowness is simply Shopify's infrastructure.</li>
            <li><strong>Checkout speed</strong> - The checkout is hosted by Shopify and cannot be modified (unless on Shopify Plus).</li>
            <li><strong>App store iframe loading</strong> - Admin app pages load in iframes that can be slow.</li>
            <li><strong>Shopify Analytics/tracking scripts</strong> - Shopify injects its own scripts for analytics, Shop Pay, etc.</li>
            <li><strong>Dynamic sections rendering time</strong> - Complex Liquid with many sections has inherent rendering overhead.</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>What You CAN Control (Your Responsibility)</h4>
        <ul>
            <li><strong>Image sizes and optimization</strong> - The #1 speed factor you control</li>
            <li><strong>Custom JavaScript and CSS</strong> - Keep it minimal and deferred</li>
            <li><strong>Number of installed apps</strong> - Every app has a cost</li>
            <li><strong>Theme code quality</strong> - Efficient Liquid, minimal DOM elements</li>
            <li><strong>Lazy loading implementation</strong> - Only load what is visible</li>
            <li><strong>Font loading strategy</strong> - Preload, swap, limit families</li>
            <li><strong>Third-party script management</strong> - Defer, async, or remove</li>
        </ul>
    </div>

    <p><strong>Important:</strong> A Shopify store with perfect optimization will typically score 85-95 on mobile. Scores of 100 are nearly impossible on Shopify due to platform overhead. Set client expectations accordingly: <strong>Mobile 85+, Desktop 90+</strong> are excellent targets.</p>
</div>

<!-- Section 8: Speed Testing Tools -->
<div class="content-section">
    <h3>🛠️ Speed Testing Tools Comparison</h3>
    <p>Use these tools in combination. No single tool gives the full picture.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">URL</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cost</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Key Feature</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google PageSpeed Insights</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">pagespeed.web.dev</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Primary score, Core Web Vitals</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Uses real Chrome user data + lab data. <strong>This is the score that matters most.</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>GTmetrix</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">gtmetrix.com</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Detailed waterfall analysis</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free (basic)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shows every single request in order. Helps find the slowest resources.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WebPageTest</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">webpagetest.org</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Advanced multi-step testing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Film strip view, connection throttling, multiple test locations.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify Theme Inspector</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chrome Extension</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid render profiling</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shows exactly how long each Liquid section takes to render. Shopify-specific.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Chrome DevTools Lighthouse</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Built into Chrome (F12)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quick local testing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instant testing without leaving browser. Same engine as PageSpeed Insights.</td>
        </tr>
    </table>

    <div class="warning-box">
        <h4>&#9888;&#65039; Testing Best Practices</h4>
        <ul>
            <li>Always test in <strong>Incognito/Private mode</strong> to avoid browser extension interference</li>
            <li>Run each test <strong>3 times</strong> and take the average (scores fluctuate)</li>
            <li>Test both <strong>Mobile and Desktop</strong> - mobile is always the harder score</li>
            <li>Test the <strong>homepage AND a product page</strong> - they have different performance profiles</li>
            <li>Never trust a single test result. Network conditions, server load, and CDN caching all cause variation.</li>
        </ul>
    </div>
</div>

<!-- Section 9: Performance Debugging Flowchart -->
<div class="content-section">
    <h3>🔍 Performance Debugging Flowchart</h3>
    <p>When a store scores below 85 on mobile, follow this systematic debugging process:</p>

    <div class="mermaid">
    graph TD;
    A[Score Below 85?] -->|Yes| B[Check Images First];
    B --> C{Images over 200KB?};
    C -->|Yes| D[Compress + Resize Images];
    C -->|No| E[Check JavaScript];
    D --> E;
    E --> F{TBT over 200ms?};
    F -->|Yes| G[Audit App Scripts];
    F -->|No| H[Check Fonts];
    G --> H;
    H --> I{More than 2 font families?};
    I -->|Yes| J[Reduce Fonts + Add Swap];
    I -->|No| K[Check Third-Party Scripts];
    J --> K;
    K --> L{External scripts without defer?};
    L -->|Yes| M[Add defer/async];
    L -->|No| N[Check Liquid Rendering];
    M --> N;
    N --> O[Use Theme Inspector];
    O --> P[Re-test Score];
    P --> Q{Score 85+?};
    Q -->|Yes| R[Done - Document Results];
    Q -->|No| S[Escalate to Senior Dev];
    </div>

    <div class="highlight-box">
        <h4>Quick Checklist Order of Operations</h4>
        <ol>
            <li><strong>Images</strong> - Compress, resize, add lazy loading (fixes LCP, reduces total page weight)</li>
            <li><strong>Apps</strong> - Remove unused, defer remaining (fixes TBT)</li>
            <li><strong>Fonts</strong> - Limit to 2 families, preload, add swap (fixes CLS, FCP)</li>
            <li><strong>Custom Code</strong> - Minimize JS/CSS, defer scripts (fixes TBT)</li>
            <li><strong>Third-party</strong> - Defer analytics, remove unused tracking (fixes TBT)</li>
            <li><strong>Liquid</strong> - Use Theme Inspector to find slow sections (fixes TTFB, FCP)</li>
        </ol>
    </div>
</div>

<!-- Section 10: Video Resource -->
<div class="content-section">
    <h3>🎬 Video: Shopify Speed Optimization Walkthrough</h3>
    <p>Watch this comprehensive guide on optimizing Shopify store speed:</p>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/AQqFZ5t8uNc" frameborder="0" allowfullscreen></iframe>
</div>

<!-- Section 11: Hands-On Exercise -->
<div class="content-section">
    <h3>&#128295; Hands-On Exercise: Speed Audit & Optimization</h3>
    <p>Complete each step on your Luxe Botanica development store. Document your before/after scores.</p>

    <div class="highlight-box">
        <h4>Exercise Steps</h4>
        <ol>
            <li><strong>Baseline Test:</strong> Run Google PageSpeed Insights on your Luxe Botanica store homepage. Screenshot the results. Note your Mobile and Desktop scores, plus each Core Web Vital metric.</li>
            <li><strong>Image Audit:</strong> Identify the hero image and all above-fold images. Check their file sizes (right-click &gt; Inspect &gt; Network tab). Resize the hero image to 1600px wide and compress to under 200KB using TinyPNG or Squoosh.</li>
            <li><strong>Lazy Loading:</strong> Open your theme code and add <code>loading="lazy"</code> to all below-fold images. Ensure the hero image has <code>loading="eager"</code> and <code>fetchpriority="high"</code>.</li>
            <li><strong>App Audit:</strong> List all installed apps. For each app, check if it is actively used. Remove any that are not needed. After removal, search theme code for leftover snippets.</li>
            <li><strong>Font Check:</strong> Open theme.liquid and count the number of font families being loaded. If more than 2, reduce to 2. Ensure font-display: swap is set.</li>
            <li><strong>Re-test:</strong> Run Google PageSpeed Insights again. Compare with your baseline screenshot.</li>
        </ol>
    </div>

    <div class="warning-box">
        <h4>&#9888;&#65039; Target Scores</h4>
        <p><strong>Mobile: 85+ | Desktop: 90+</strong></p>
        <p>If you cannot reach these targets after all optimizations, document what is limiting the score (usually Shopify platform overhead or third-party scripts that cannot be removed). Escalate to your lead with the specific bottleneck identified.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128640; Ready for the Quiz?</h3>
    <ul>
        <li>&#128221; 10 questions about Speed Optimization and Core Web Vitals</li>
        <li>&#127919; Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>&#128268; TASK 8: APPS &amp; INTEGRATIONS - The Healthy App Stack</h2>

<!-- Section 1: The 5-8 App Philosophy -->
<div class="content-section">
    <h3>&#128270; The 5-8 App Philosophy - Why Less Is More</h3>
    <p>One of the biggest mistakes new Shopify developers make is installing too many apps. Clients often want every feature they see on competitor stores, and the temptation is to install an app for each one. <strong>Resist this temptation.</strong></p>

    <div class="warning-box">
        <h4>&#9888;&#65039; The Real Cost of Every App</h4>
        <ul>
            <li><strong>Performance:</strong> Each app adds 50-200KB of JavaScript that loads on EVERY page. 10 unnecessary apps = 1-2MB of extra JavaScript on every page load.</li>
            <li><strong>Conflicts:</strong> Apps inject code into your theme. More apps = more potential for CSS conflicts, jQuery version mismatches, and broken layouts.</li>
            <li><strong>Monthly Cost:</strong> The average Shopify store spends $200-500/month on apps. Many of these could be replaced with a few lines of Liquid code.</li>
            <li><strong>Security Risk:</strong> Every app has access to your store data. More apps = larger attack surface. Free apps with no reviews are especially risky - some inject unwanted code or even malware.</li>
            <li><strong>Maintenance Burden:</strong> Apps update independently. An app update can break your theme without warning. Fewer apps = fewer surprises.</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>The Golden Rule</h4>
        <p><strong>If you can code it in Liquid, do NOT use an app.</strong> Announcement bars, color swatches, custom sections, trust badges, countdown timers, and FAQ accordions can all be built with Liquid + HTML/CSS. Save your app slots for things that genuinely require a backend: reviews management, email marketing, subscription billing, etc.</p>
    </div>
</div>

<!-- Section 2: Recommended App Stack -->
<div class="content-section">
    <h3>&#128202; Recommended App Stack by Category</h3>
    <p>Here is our recommended stack. Every app listed here has been vetted for speed, reliability, and value. Stick to these unless the client has a specific requirement.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recommended App</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free Alternative</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why This App</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cost</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reviews</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Judge.me</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Judge.me Free tier</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fast loading, SEO-friendly review schema, photo reviews, free tier is generous</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free / $15/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Email Marketing</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Email</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Industry standard, powerful segmentation, abandoned cart flows, deep Shopify integration</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free up to 250 contacts</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>SEO</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Manager / Smart SEO</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manual optimization</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Automated meta tags, JSON-LD structured data, broken link detection</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$20/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Upsells</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ReConvert / Bold Upsell</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify built-in product recommendations</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Post-purchase upsells, thank you page customization, proven AOV increase</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$5-30/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Order Tracking</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">17TRACK / AfterShip</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify order status page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Branded tracking page, reduces "Where is my order?" support tickets by 50%+</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free / $9+/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Analytics</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GA4 via Google Channel</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free, industry standard, enhanced ecommerce tracking</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Live Chat</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tidio / Gorgias</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Inbox</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tidio for small stores (free tier), Gorgias for stores with high support volume</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free - $50+/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Pop-ups</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Privy / OptiMonk</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Forms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email capture, exit intent, spin-to-win. ONE pop-up app maximum.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free - $20/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Subscriptions</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recharge / Bold Subscriptions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">None (complex feature)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recurring orders, subscription management portal. Only install if client sells subscriptions.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$99+/mo</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Returns</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loop Returns / AfterShip Returns</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manual process</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Self-service returns portal, automated refunds, exchange-first logic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$29+/mo</td>
        </tr>
    </table>
</div>

<!-- Section 3: Apps to AVOID -->
<div class="content-section">
    <h3>&#128683; Apps to AVOID (Speed Killers)</h3>
    <div class="warning-box">
        <h4>&#9888;&#65039; These Types of Apps Will Destroy Store Performance</h4>
        <ul>
            <li><strong>Multiple review apps stacked:</strong> Pick ONE review app. Do NOT install Judge.me AND Loox AND Stamped. Each one adds its own scripts.</li>
            <li><strong>Heavy page builder apps:</strong> PageFly, GemPages, and Shogun add massive JavaScript bundles. Use the theme editor and custom sections instead whenever possible.</li>
            <li><strong>Multiple pop-up/notification apps:</strong> One pop-up app maximum. Having a welcome popup, exit intent popup, and notification popup from three different apps is a performance disaster AND bad UX.</li>
            <li><strong>Social proof notification spam:</strong> Those "John from New York just bought..." notifications. They are annoying, reduce trust for savvy shoppers, and add unnecessary scripts.</li>
            <li><strong>Abandoned cart apps when Klaviyo is installed:</strong> Klaviyo already handles abandoned cart emails. Installing a second app for this is duplicate functionality and wasted money.</li>
            <li><strong>SEO apps that do what Shopify already does:</strong> Shopify handles sitemaps, robots.txt, canonical tags, and basic structured data automatically. Many SEO apps charge monthly for features that are already built in.</li>
            <li><strong>Free apps with no reviews or very few installs:</strong> These often inject unwanted code, advertising, or tracking scripts into your theme. Only install apps from reputable developers with strong review histories.</li>
            <li><strong>Apps that inject lots of JavaScript on every page:</strong> Some apps load their scripts globally even when only needed on one page. Check PageSpeed after every app install.</li>
        </ul>
    </div>
</div>

<!-- Section 4: App Installation Protocol -->
<div class="content-section">
    <h3>&#128203; App Installation Protocol</h3>
    <p>Follow this process for EVERY app installation. No exceptions.</p>

    <div class="highlight-box">
        <h4>The 7-Step Installation Checklist</h4>
        <ol>
            <li><strong>Run PageSpeed BEFORE installing.</strong> Record the mobile and desktop scores. This is your baseline.</li>
            <li><strong>Read reviews first.</strong> Look specifically for complaints about speed impact, broken themes, and difficulty uninstalling. Sort reviews by "Most Recent" to catch recent issues.</li>
            <li><strong>Install on a development/staging theme first.</strong> Never install directly on the live theme. Create a duplicate theme and test there.</li>
            <li><strong>Configure and test all features</strong> on the staging theme. Make sure the app works correctly with your specific theme before going live.</li>
            <li><strong>Run PageSpeed AFTER installing.</strong> Compare with your baseline. If the mobile score dropped more than 5 points, seriously consider alternatives.</li>
            <li><strong>Document the installation.</strong> Record: app name, what it does, when installed, who requested it, and the before/after PageSpeed scores. Keep this in your project notes.</li>
            <li><strong>Publish to live theme</strong> only after all testing passes. Merge changes or manually replicate the configuration on the live theme.</li>
        </ol>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Drop After Install</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Action</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">0-3 points</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Acceptable. Proceed with installation.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">4-7 points</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Warning zone. Evaluate if the app is truly necessary. Look for lighter alternatives.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">8+ points</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unacceptable. Uninstall and find an alternative. Or consider coding the feature yourself.</td>
        </tr>
    </table>
</div>

<!-- Section 5: Clean Uninstall Protocol -->
<div class="content-section">
    <h3>&#128465;&#65039; The Clean Uninstall Protocol - CRITICAL KNOWLEDGE</h3>
    <p>This is one of the most important things you will learn. <strong>Simply clicking "Delete" or "Uninstall" on an app does NOT fully remove it.</strong> Most apps inject code into your theme files during installation, and this code stays behind when you uninstall. This leftover code continues to slow down your store.</p>

    <div class="warning-box">
        <h4>&#9888;&#65039; The Uninstall Trap</h4>
        <p>We have seen stores with 5 active apps but the speed of a store with 15 apps - because 10 previously uninstalled apps left their code behind. Leftover app code is one of the most common causes of slow Shopify stores, and it is completely invisible unless you know where to look.</p>
    </div>

    <div class="highlight-box">
        <h4>Complete Clean Uninstall: Step by Step</h4>
        <ol>
            <li><strong>Read the app's uninstall documentation first.</strong> Some apps have a specific uninstall process. Check the app's help center or support docs.</li>
            <li><strong>Uninstall the app</strong> from Shopify Admin (Settings &gt; Apps or Apps section).</li>
            <li><strong>Open the theme code editor:</strong> Online Store &gt; Themes &gt; Actions &gt; Edit Code.</li>
            <li><strong>Check Layout/theme.liquid</strong> for any script tags, link tags, or Liquid includes referencing the app. This is the most common location for injected code.</li>
            <li><strong>Check ALL section files</strong> for app-specific code blocks, includes, or render tags. Some apps add code to product sections, cart sections, or collection sections.</li>
            <li><strong>Check the Snippets folder</strong> for any .liquid files named after the app (e.g., judgeme.liquid, aftership-tracking.liquid). Delete these files.</li>
            <li><strong>Check the Assets folder</strong> for JS and CSS files from the app (e.g., judgeme.css, aftership.js). Delete these files.</li>
            <li><strong>Search the entire codebase</strong> for the app name. Use the search function in the code editor to find any remaining references.</li>
            <li><strong>Remove ALL found code.</strong> Be careful not to break surrounding Liquid logic (check for if/endif pairs, etc.).</li>
            <li><strong>Test the site thoroughly.</strong> Browse every major page type: homepage, collection, product, cart, search. Check the browser console (F12) for JavaScript errors.</li>
            <li><strong>Run PageSpeed</strong> to verify the speed improvement.</li>
        </ol>
    </div>

    <pre><code>&lt;!-- EXAMPLE: Common leftover code in theme.liquid --&gt;

&lt;!-- Judge.me leftover (in head or before closing body) --&gt;
&lt;script src="https://cdn.judge.me/widget.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="https://cdn.judge.me/widget.css"&gt;

&lt;!-- AfterShip leftover --&gt;
&lt;script src="https://cdn.aftership.com/tracking.js"&gt;&lt;/script&gt;

&lt;!-- Generic app snippet include --&gt;
{%- render 'app-name-snippet' -%}
{%- include 'old-app-tracking' -%}

&lt;!-- ALL of these need to be removed during clean uninstall --&gt;</code></pre>
</div>

<!-- Section 6: Code It Yourself vs Use an App -->
<div class="content-section">
    <h3>&#129300; When to Code It Yourself vs Use an App</h3>
    <p>This is a judgment call you will make frequently. Here is a guide:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recommendation</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reason</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Announcement bar</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>Code it</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple HTML/CSS. Most themes have one built in. No app needed.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Color swatches</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>Code it</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use metafields + Liquid. Apps like Swatch King are overkill for most stores.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FAQ accordion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>Code it</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple HTML/CSS/JS. Most themes include a collapsible content section.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust badges</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>Code it</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Static images + CSS. Never install a full app just for trust badges.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom sections</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>Code it</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Shopify 2.0 section schemas. AI (Claude/ChatGPT) can generate these quickly.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product reviews</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>Use app</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requires UGC management, email requests, moderation, photo uploads. Complex backend.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wishlist</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>Use app</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requires user accounts, database storage, email notifications. Not a Liquid-only feature.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email marketing flows</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>Use app</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo or similar. Email automation is a specialized backend system.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Subscription billing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>Use app</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recharge/Bold. Recurring billing and subscription management requires a dedicated service.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email popup</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>Depends</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple popup: code it. Exit intent + A/B testing + complex triggers: use Privy/Klaviyo forms.</td>
        </tr>
    </table>
</div>

<!-- Section 7: App Conflict Diagnosis -->
<div class="content-section">
    <h3>&#9888;&#65039; App Conflict Diagnosis &amp; Resolution</h3>
    <p>When two or more apps break each other, the symptoms are usually: broken layouts, JavaScript console errors, features that stop working, or style conflicts (wrong colors, overlapping elements).</p>

    <h4>Most Common Conflict Types</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Conflict Type</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Symptoms</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Solution</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>jQuery Version Conflict</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Console errors like "$ is not defined" or "$.fn.slick is not a function"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ensure only one jQuery version is loaded. Check theme.liquid for multiple jQuery script tags. Remove duplicates.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CSS Specificity Wars</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buttons wrong color, text wrong size, elements out of position</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use browser DevTools to find which CSS rule is winning. Add more specific selectors or use !important sparingly.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>DOM Manipulation Race</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Elements appear then disappear, or are duplicated</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Two apps trying to modify the same DOM element. Adjust one app's target selectors or load order.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Event Listener Conflict</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add to cart does not work, forms do not submit, clicks ignored</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">An app is preventing default event behavior. Disable apps one at a time to isolate the culprit.</td>
        </tr>
    </table>

    <h4>Conflict Isolation Process</h4>
    <ol>
        <li><strong>Open the browser console</strong> (F12 &gt; Console tab). Note all error messages.</li>
        <li><strong>Identify the suspect apps</strong> from the error messages (look for app names in script URLs).</li>
        <li><strong>Disable apps one at a time.</strong> On Shopify, you can deactivate an app's theme embed: Online Store &gt; Themes &gt; Customize &gt; App embeds toggle. Or temporarily comment out the app's script in theme.liquid.</li>
        <li><strong>After each disable, refresh and test.</strong> When the problem goes away, you have found the conflicting app.</li>
        <li><strong>Contact the app's support team</strong> with the specific error message and the name of the conflicting app. Most quality apps have responsive support teams.</li>
        <li>If support cannot resolve, <strong>consider replacing the problematic app</strong> with an alternative that does not conflict.</li>
    </ol>
</div>

<!-- Section 8: Video Resource -->
<div class="content-section">
    <h3>&#127909; Video: 17TRACK Order Tracking Setup</h3>
    <p>Watch this walkthrough on setting up 17TRACK for real-time order tracking:</p>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-msd5yDGn34" frameborder="0" allowfullscreen></iframe>
</div>

<!-- Section 9: Hands-On Exercise -->
<div class="content-section">
    <h3>&#128295; Hands-On Exercise: App Installation &amp; Clean Uninstall</h3>
    <p>Complete each step on your Luxe Botanica development store.</p>

    <div class="highlight-box">
        <h4>Exercise Steps</h4>
        <ol>
            <li><strong>Baseline:</strong> Run Google PageSpeed Insights on your dev store. Record the mobile and desktop scores.</li>
            <li><strong>Install Judge.me:</strong> Install the free tier of Judge.me on your development store. Follow the app's setup wizard to enable review display on product pages.</li>
            <li><strong>Configure reviews:</strong> Set up the review widget on your product page template. Add at least 2 test reviews. Verify the review stars appear in the product listing (collection page).</li>
            <li><strong>Speed test:</strong> Run PageSpeed Insights again. Document the score difference. How many points did Judge.me cost you?</li>
            <li><strong>Practice Clean Uninstall:</strong> Now completely remove Judge.me. Uninstall the app, then search your entire theme codebase for any leftover Judge.me code. Check theme.liquid, snippets, and assets. Remove everything.</li>
            <li><strong>Verify clean removal:</strong> Run PageSpeed one more time. Your score should be back to the baseline. Check the browser console for any errors related to Judge.me (missing scripts, etc.).</li>
        </ol>
    </div>

    <div class="warning-box">
        <h4>&#9888;&#65039; What to Document</h4>
        <p>For your training portfolio, document: (1) Baseline PageSpeed scores, (2) Post-install scores, (3) Locations where Judge.me injected code, (4) Post-uninstall scores confirming clean removal. This demonstrates you understand the full lifecycle of app management.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128640; Ready for the Quiz?</h3>
    <ul>
        <li>&#128221; 10 questions about Apps, Installation, and Clean Uninstall</li>
        <li>&#127919; Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>&#128179; TASK 9: CHECKOUT &amp; POLICIES - Trust &amp; Transaction Setup</h2>

<!-- Section 1: Why Policies Matter -->
<div class="content-section">
    <h3>&#128220; Why Policies Matter - It Is Not Optional</h3>
    <div class="warning-box">
        <h4>&#9888;&#65039; Missing Policies = Real Business Consequences</h4>
        <ul>
            <li><strong>Facebook/Meta Ads REQUIRE shipping + refund policies</strong> to approve your ad account. Missing policies = ad account rejection or suspension. This is the #1 reason new stores get their ad accounts banned.</li>
            <li><strong>Google Shopping requires all 4 policy pages</strong> (privacy, terms, shipping, refund) to list products in Google Shopping results. No policies = no Google Shopping listings.</li>
            <li><strong>Legal liability:</strong> Selling online without a privacy policy violates GDPR (Europe), CCPA (California), and similar laws in dozens of countries. Fines can be significant.</li>
            <li><strong>Customer trust:</strong> Studies show that 66% of online shoppers read return policies before making a purchase. Clear policies reduce abandoned carts and support tickets.</li>
        </ul>
    </div>

    <p><strong>Bottom line:</strong> Policy pages are not an afterthought. They must be created BEFORE the store launches, and they must be customized for each client's specific business (not just generic templates).</p>
</div>

<!-- Section 2: Required Legal Pages -->
<div class="content-section">
    <h3>&#128196; The 5 Required Legal Pages - What Each Must Include</h3>
    <p>Every Shopify store MUST have these 5 pages. Shopify provides templates as a starting point (Settings &gt; Policies &gt; "Create from template"), but you MUST customize them with the client's specific details.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Policy Page</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Key Content to Include</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Where to Set Up</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common Mistakes</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Privacy Policy</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What personal data is collected (name, email, payment info, browsing data), how it is used, third-party services that receive data (Shopify, payment processors, email marketing), cookie usage, customer rights (access, deletion, opt-out), GDPR/CCPA compliance statements</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Policies &gt; Privacy Policy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Using generic template without listing actual third-party services (Klaviyo, GA4, Facebook Pixel, etc.)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Terms of Service</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Intellectual property rights, acceptable use, purchase terms and conditions, limitation of liability, dispute resolution process, governing law/jurisdiction, account termination conditions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Policies &gt; Terms of Service</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Copy-pasting another store's terms without updating company name and details</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shipping Policy</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order processing time (1-3 business days), available shipping methods and costs, estimated delivery times by region, international shipping availability and restrictions, tracking information process, handling of delays and lost packages</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Policies &gt; Shipping Policy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not specifying processing time vs shipping time. Customers confuse the two.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Refund / Return Policy</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Return window (30/60/90 days), condition requirements (unused, original packaging), return process steps, who pays return shipping, refund timeline (5-10 business days), exchange options, non-refundable items list (final sale, personalized, intimate items)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Policies &gt; Refund Policy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not specifying non-refundable categories. Leads to disputes and chargebacks.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Contact Page</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email address, phone number (if applicable), business hours, expected response time, contact form, physical address (required for some ad platforms), social media links</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pages &gt; Add Page (use Contact template)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only having a contact form with no email or response time. Customers lose trust.</td>
        </tr>
    </table>

    <div class="highlight-box">
        <h4>Pro Tip: Generate Then Customize</h4>
        <p>Shopify can auto-generate policy templates: <strong>Settings &gt; Policies &gt; "Create from template"</strong>. Use these as a starting point, then customize with the client's specific details: their processing times, return window, shipping methods, and company information. Shopify also has an AI policy generator that creates more tailored content - use it as a starting point.</p>
        <p><strong>Important:</strong> Policies set in Settings &gt; Policies automatically appear as links in the checkout footer. This is a Shopify built-in feature. You do NOT need to manually link them in checkout.</p>
    </div>
</div>

<!-- Section 3: Payment Gateway Configuration -->
<div class="content-section">
    <h3>&#128179; Payment Gateway Configuration</h3>
    <p>The payment gateway is how the store accepts money. Get this wrong and orders literally cannot be placed.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gateway</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Setup Location</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Transaction Fees</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Key Benefits</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notes</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify Payments</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Payments &gt; Activate Shopify Payments</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2.9% + 30 cents (Basic plan). NO extra transaction fee.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lowest total fees, enables Shop Pay, Apple Pay, Google Pay. Seamless integration.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Always enable this first.</strong> It is the primary gateway for most stores.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>PayPal</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Payments &gt; PayPal</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2.9% + 30 cents + Shopify transaction fee (if not using Shopify Payments)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Widely trusted. Many customers prefer PayPal for buyer protection.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Required as a backup.</strong> Some demographics strongly prefer PayPal over credit cards.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shop Pay</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Auto-enabled with Shopify Payments</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Same as Shopify Payments</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-click checkout for returning Shopify customers. Significantly improves conversion.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Automatically available when Shopify Payments is active. No extra setup needed.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Stripe</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Settings &gt; Payments &gt; Third-party providers</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2.9% + 30 cents + Shopify transaction fee</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Good alternative in countries where Shopify Payments is not available.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only use if Shopify Payments is not available in the client's country.</td>
        </tr>
    </table>

    <div class="highlight-box">
        <h4>Payment Gateway Priority</h4>
        <ol>
            <li><strong>Always enable Shopify Payments first</strong> - lowest fees, best integration, enables accelerated checkouts</li>
            <li><strong>Add PayPal as a secondary option</strong> - many customers prefer it, especially internationally</li>
            <li><strong>Enable Apple Pay and Google Pay</strong> - these are automatically available through Shopify Payments and increase mobile conversion</li>
            <li><strong>Only add other gateways if specifically needed</strong> - for country-specific requirements or client requests</li>
        </ol>
    </div>
</div>

<!-- Section 4: Checkout Customization -->
<div class="content-section">
    <h3>&#128722; Checkout Customization - Know the Limitations</h3>
    <p>The Shopify checkout is one of the most important and most <strong>restricted</strong> parts of the platform. Understanding what you can and cannot customize is essential for setting correct client expectations.</p>

    <div class="highlight-box">
        <h4>What You CAN Customize (All Plans)</h4>
        <ul>
            <li><strong>Logo:</strong> Settings &gt; Checkout &gt; Checkout customization &gt; Add your logo</li>
            <li><strong>Colors:</strong> Match brand colors for buttons, accents, backgrounds</li>
            <li><strong>Fonts:</strong> Choose from Shopify's available checkout fonts</li>
            <li><strong>Form fields:</strong> Choose which fields are required, optional, or hidden (e.g., company name, apartment/suite)</li>
            <li><strong>Thank you page:</strong> Basic customization of the order confirmation page</li>
            <li><strong>Order status page:</strong> Custom scripts for tracking pixels can be added here</li>
            <li><strong>Checkout language:</strong> Modify all text labels through Settings &gt; Languages</li>
        </ul>
    </div>

    <div class="warning-box">
        <h4>&#9888;&#65039; What You CANNOT Customize (Without Shopify Plus)</h4>
        <ul>
            <li><strong>Checkout layout and structure</strong> - You cannot add custom sections, rearrange elements, or change the multi-step flow</li>
            <li><strong>Adding custom fields or sections</strong> - No custom upsells, banners, or trust badges inside the checkout itself</li>
            <li><strong>Removing default fields</strong> - Some fields cannot be hidden (like email)</li>
            <li><strong>Custom JavaScript in checkout</strong> - Script injection is blocked for security reasons</li>
            <li><strong>Modifying the checkout URL or domain</strong> - Checkout always uses the Shopify domain for PCI compliance</li>
        </ul>
        <p style="margin-top: 10px;"><strong>Shopify Plus ($2,000+/month)</strong> unlocks Checkout UI Extensions and Shopify Functions, allowing custom checkout experiences. For non-Plus stores, the checkout is largely fixed. <strong>Be upfront with clients about these limitations.</strong></p>
    </div>
</div>

<!-- Section 5: Shipping Configuration -->
<div class="content-section">
    <h3>&#128230; Shipping Configuration</h3>
    <p>Shipping setup is done in Settings &gt; Shipping and delivery. This determines what shipping options customers see at checkout and how much they pay.</p>

    <h4>Key Shipping Concepts</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Concept</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Is</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When to Use</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shipping Profiles</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Different rate structures for different products. E.g., heavy items vs lightweight items.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When different products have different shipping costs or requirements.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shipping Zones</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Geographic regions with specific rates. E.g., Domestic, International, specific countries.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always. You need at least one zone for each region you ship to.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Flat Rate</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fixed shipping cost regardless of order size. E.g., "$5.99 standard shipping."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple stores with similar-sized products. Easy for customers to understand.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Weight-Based Rates</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping cost based on total order weight. Requires product weights to be set.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stores with products that vary significantly in weight.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Price-Based Rates</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping cost based on order total. E.g., "$5 for orders under $50, free over $50."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Great for implementing free shipping thresholds (see strategy below).</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Calculated (Carrier) Rates</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-time rates from carriers (USPS, UPS, FedEx). Requires Shopify Shipping or carrier account.</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Large stores with diverse product sizes/weights. Most accurate but complex.</td>
        </tr>
    </table>

    <div class="highlight-box">
        <h4>Free Shipping Threshold Strategy</h4>
        <p>Free shipping is one of the most powerful conversion tools in e-commerce. The strategy: <strong>Set your free shipping threshold slightly above your average order value (AOV).</strong></p>
        <p>Example: If the store's AOV is $45, set free shipping at $50. Customers will add extra items to reach the threshold, increasing AOV. Display this prominently: "Free shipping on orders over $50!" in the announcement bar and cart page.</p>
    </div>
</div>

<!-- Section 6: Tax Configuration -->
<div class="content-section">
    <h3>&#128176; Tax Configuration</h3>
    <p>Shopify handles most tax calculations automatically. Your main job is to ensure the settings are correct.</p>

    <ul>
        <li><strong>Automatic tax calculation:</strong> Shopify calculates sales tax based on the customer's location. For US stores, this is handled automatically for all states. Enable in Settings &gt; Taxes and duties.</li>
        <li><strong>Tax-inclusive vs tax-exclusive pricing:</strong> In the US, prices are typically shown without tax (tax added at checkout). In Europe and many other countries, prices INCLUDE tax (VAT). Set this correctly for the client's primary market.</li>
        <li><strong>International tax (VAT, GST):</strong> If selling internationally, Shopify Markets handles VAT collection for EU customers and GST for Australian customers. Enable the appropriate settings.</li>
        <li><strong>When to consult an accountant:</strong> Tax rules are complex and vary by jurisdiction. For anything beyond standard setups (nexus questions, digital goods tax, B2B exemptions), advise the client to consult their accountant. <strong>We are developers, not tax advisors.</strong></li>
    </ul>
</div>

<!-- Section 7: Test Order Protocol -->
<div class="content-section">
    <h3>&#129534; Test Order Protocol - The Complete Process</h3>
    <p>Before any store goes live, you MUST complete at least one full test order. This verifies that the entire purchase flow works end to end.</p>

    <div class="highlight-box">
        <h4>Full Test Order Checklist</h4>
        <ol>
            <li><strong>Enable Bogus Gateway:</strong> Go to Settings &gt; Payments. Under "Third-party providers," search for and enable "Bogus Gateway." (Alternatively, use Shopify Payments in test mode: Settings &gt; Payments &gt; Manage &gt; Enable test mode.)</li>
            <li><strong>Place a test order:</strong>
                <ul>
                    <li>Browse the store as a customer would</li>
                    <li>Add a product to cart</li>
                    <li>Proceed to checkout</li>
                    <li>Fill in shipping information (use a real email to test confirmation emails)</li>
                    <li>Select a shipping method</li>
                    <li>For Bogus Gateway: Enter "1" in the credit card number field for a successful transaction, "2" for a simulated failure, "3" for a gateway error</li>
                    <li>For Shopify Payments test mode: Use card number 4242 4242 4242 4242, any future expiry date, any 3-digit CVV</li>
                    <li>Complete the order</li>
                </ul>
            </li>
            <li><strong>Verify order confirmation:</strong>
                <ul>
                    <li>Check that the order confirmation page displays correctly</li>
                    <li>Check your email for the order confirmation email</li>
                    <li>Verify the email content, formatting, and branding are correct</li>
                </ul>
            </li>
            <li><strong>Check the admin:</strong>
                <ul>
                    <li>Go to Orders in the Shopify Admin</li>
                    <li>Verify the test order appears with correct details</li>
                    <li>Check that inventory has been updated (if inventory tracking is enabled)</li>
                </ul>
            </li>
            <li><strong>Test the refund process:</strong> Open the test order in admin and process a refund. Verify the refund confirmation email is sent.</li>
            <li><strong>Test a failed payment:</strong> Use the failure card number (2 for Bogus Gateway, or 4000 0000 0000 0002 for Shopify Payments test mode). Verify the customer sees a clear error message.</li>
            <li><strong>Disable test mode:</strong> After all testing is complete, disable the Bogus Gateway or switch Shopify Payments back to live mode. <strong>Forgetting this step means you cannot accept real payments!</strong></li>
        </ol>
    </div>

    <div class="warning-box">
        <h4>&#9888;&#65039; CRITICAL: Always Disable Test Mode Before Launch</h4>
        <p>Leaving the Bogus Gateway enabled or Shopify Payments in test mode means real customers CANNOT pay. This has happened to real stores on launch day. Add "Disable test payment gateway" to your pre-launch checklist and verify it twice.</p>
    </div>
</div>

<!-- Section 8: Cart Page vs Cart Drawer -->
<div class="content-section">
    <h3>&#128722; Cart Page vs Cart Drawer - UX Comparison</h3>
    <p>Most themes offer two cart options. Choose based on the client's product and customer behavior.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart Page (Full Page)</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart Drawer (Slide-in)</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>UX</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full-page view, more space for details</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slides in from the side, keeps user on current page</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Upselling</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More room for upsell sections, cross-sell grids</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limited space, usually 1-2 upsell suggestions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopping Flow</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interrupts browsing (full page redirect)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Less disruptive, keeps shopping flow intact</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Free Shipping Bar</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Easy to add prominently</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can be added at the top of the drawer</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Best For</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High-AOV stores, stores with many upsell opportunities, complex product configurations</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Most standard stores, impulse purchases, mobile-first stores, browsing-heavy stores</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Recommendation</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use for stores with AOV over $100</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Default choice for most stores</strong></td>
        </tr>
    </table>

    <p><strong>Our default recommendation:</strong> Use the cart drawer for most stores. It provides a modern, non-disruptive experience that keeps customers in the shopping flow. Switch to a cart page only for high-AOV stores where upselling in the cart is a significant revenue driver.</p>
</div>

<!-- Section 9: Video Resource -->
<div class="content-section">
    <h3>&#127909; Video: Payments &amp; Shipping Setup Walkthrough</h3>
    <p>Watch this comprehensive guide on configuring payments and shipping in Shopify:</p>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/X6hBF5bnnto" frameborder="0" allowfullscreen></iframe>
</div>

<!-- Section 10: Hands-On Exercise -->
<div class="content-section">
    <h3>&#128295; Hands-On Exercise: Checkout &amp; Policies Setup</h3>
    <p>Complete each step on your Luxe Botanica development store.</p>

    <div class="highlight-box">
        <h4>Exercise Steps</h4>
        <ol>
            <li><strong>Create all 5 policy pages:</strong> Go to Settings &gt; Policies. Use Shopify's template generator as a starting point for each policy. Then customize each one for Luxe Botanica:
                <ul>
                    <li>Privacy Policy: List the specific tools used (Shopify, Klaviyo for email, Google Analytics)</li>
                    <li>Terms of Service: Update with company name "Luxe Botanica"</li>
                    <li>Shipping Policy: Processing time 1-3 business days, standard shipping 5-7 days, express 2-3 days</li>
                    <li>Refund Policy: 30-day return window, items must be unused, customer pays return shipping</li>
                    <li>Contact Page: Create a new page using the Contact template. Add a support email and business hours.</li>
                </ul>
            </li>
            <li><strong>Configure Shopify Payments in test mode:</strong> Activate Shopify Payments (or use Bogus Gateway if Shopify Payments is not available). Enable test mode.</li>
            <li><strong>Set up 3 shipping zones:</strong>
                <ul>
                    <li>Local (your country): Standard $5.99, Express $12.99, Free over $50</li>
                    <li>Neighboring countries: Flat rate $14.99</li>
                    <li>International (Rest of World): Flat rate $24.99</li>
                </ul>
            </li>
            <li><strong>Complete a full test order:</strong> Browse the store, add a product, go through the entire checkout flow, and complete the purchase with test card details (4242 4242 4242 4242).</li>
            <li><strong>Verify everything:</strong>
                <ul>
                    <li>Check the order confirmation page displays correctly</li>
                    <li>Check the order confirmation email arrived and is formatted correctly</li>
                    <li>Check the order appears in the Shopify Admin</li>
                    <li>Process a test refund and verify the refund email</li>
                </ul>
            </li>
            <li><strong>Disable test mode</strong> once all testing is complete.</li>
        </ol>
    </div>

    <div class="warning-box">
        <h4>&#9888;&#65039; Checklist Before Moving On</h4>
        <ul>
            <li>All 5 policy pages exist and have customized (not generic) content</li>
            <li>Payment gateway is configured and tested</li>
            <li>Shipping zones cover all regions the store will sell to</li>
            <li>At least one successful test order completed end to end</li>
            <li>Order confirmation email received and verified</li>
            <li>Test mode has been DISABLED</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>&#128640; Ready for the Quiz?</h3>
    <ul>
        <li>&#128221; 10 questions about Checkout, Policies, and Payment Setup</li>
        <li>&#127919; Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>QA &amp; Testing &mdash; The Complete QA Protocol</h2>

<div class="content-section">
    <h3>Why QA Matters</h3>
    <div class="warning-box">
        <h4>&#9888;&#65039; QA Is Non-Negotiable</h4>
        <p><strong>Every issue caught before delivery = trust built. Every issue found after = trust DESTROYED.</strong></p>
        <p>No store ships without passing the 60-Point QA Checklist. QA is not optional &mdash; it is the difference between professionals and amateurs. A single broken link, a missing mobile style, or a console error can unravel weeks of hard work in the client's eyes. QA is where you prove your craftsmanship.</p>
        <p>Think of it this way: a $50,000/month store that goes live with a broken Add to Cart button loses roughly <strong>$70 per hour</strong>. If the client discovers the bug before you do, you have lost credibility that takes months to rebuild. If YOU catch it during QA, you look like a hero. The choice is obvious.</p>
    </div>
    <p>QA is not a phase you rush through at the end. It is a disciplined, systematic process that should take <strong>60-90 minutes minimum</strong> for any store handoff. Every single one of the 60 points below must be checked. No exceptions. No shortcuts.</p>
</div>

<div class="content-section">
    <h3>The Complete 60-Point QA Checklist</h3>
    <p>This checklist is organized into 5 categories. Go through every single item. Mark each one as Pass or Fail. Any Fail must be fixed before delivery.</p>

    <h4>&#127912; Design QA (15 Points)</h4>
    <p>Design QA ensures the store looks polished, professional, and on-brand across every page. Clients notice visual inconsistencies instantly.</p>
    <table>
        <thead>
            <tr><th>#</th><th>Check Item</th><th>What to Look For</th><th>Pass/Fail</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Typography consistent across ALL pages</td><td>Same fonts, sizes, weights on every page. Check H1, H2, H3, body text, and buttons.</td><td>&#9744;</td></tr>
            <tr><td>2</td><td>Brand colors applied correctly</td><td>No off-brand colors anywhere. Compare hex codes against brand guidelines.</td><td>&#9744;</td></tr>
            <tr><td>3</td><td>No pixelated or stretched images</td><td>Check product images, hero banners, logos, and collection images at full size.</td><td>&#9744;</td></tr>
            <tr><td>4</td><td>Proper spacing and alignment</td><td>8px grid system followed. Consistent padding and margins. No cramped or floating elements.</td><td>&#9744;</td></tr>
            <tr><td>5</td><td>Mobile design is as polished as desktop</td><td>Mobile is NOT an afterthought. Check every page on a real phone.</td><td>&#9744;</td></tr>
            <tr><td>6</td><td>Hover states on all interactive elements</td><td>Buttons, links, cards, nav items all have visible hover feedback.</td><td>&#9744;</td></tr>
            <tr><td>7</td><td>No placeholder text remaining</td><td>Search for "Lorem ipsum", "placeholder", "coming soon", "edit this". Zero tolerance.</td><td>&#9744;</td></tr>
            <tr><td>8</td><td>Favicon is set and displays correctly</td><td>Check browser tab. Must be brand icon, not default Shopify bag.</td><td>&#9744;</td></tr>
            <tr><td>9</td><td>Logo is crisp and properly sized</td><td>No blurry logos. SVG preferred. Check on both light and dark backgrounds.</td><td>&#9744;</td></tr>
            <tr><td>10</td><td>Image aspect ratios consistent within grids</td><td>Product grids, collection grids, blog grids &mdash; all cards same height.</td><td>&#9744;</td></tr>
            <tr><td>11</td><td>No orphaned text</td><td>No single words sitting alone on their own line. Adjust line breaks if needed.</td><td>&#9744;</td></tr>
            <tr><td>12</td><td>Visual hierarchy is clear</td><td>H1 &gt; H2 &gt; H3 progression is obvious. Page scannable in 3 seconds.</td><td>&#9744;</td></tr>
            <tr><td>13</td><td>Buttons have consistent styling</td><td>Primary buttons look the same everywhere. Secondary buttons are visually distinct.</td><td>&#9744;</td></tr>
            <tr><td>14</td><td>Color contrast meets WCAG AA</td><td>4.5:1 ratio for normal text, 3:1 for large text. Use WebAIM Contrast Checker.</td><td>&#9744;</td></tr>
            <tr><td>15</td><td>Empty states are designed</td><td>Empty cart page, zero search results, empty collection &mdash; all have friendly messaging.</td><td>&#9744;</td></tr>
        </tbody>
    </table>

    <h4>&#9881;&#65039; Functionality QA (15 Points)</h4>
    <p>Functionality QA ensures every interactive element works perfectly. A beautiful store that does not function is worthless.</p>
    <table>
        <thead>
            <tr><th>#</th><th>Check Item</th><th>What to Look For</th><th>Pass/Fail</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>ALL navigation links work</td><td>Click every link in header, footer, mega menu. Zero broken links or 404s.</td><td>&#9744;</td></tr>
            <tr><td>2</td><td>Search functionality works</td><td>Search for products, collections, pages. Results should be relevant and well-formatted.</td><td>&#9744;</td></tr>
            <tr><td>3</td><td>Add to Cart works for ALL products</td><td>Test simple products, products with variants, products with options. Every combination.</td><td>&#9744;</td></tr>
            <tr><td>4</td><td>Checkout completes successfully</td><td>Use Bogus Gateway for test orders. Complete the ENTIRE flow: cart &rarr; checkout &rarr; payment &rarr; confirmation.</td><td>&#9744;</td></tr>
            <tr><td>5</td><td>ALL forms submit correctly</td><td>Contact form, newsletter signup, account creation, password reset. Check that data arrives.</td><td>&#9744;</td></tr>
            <tr><td>6</td><td>Email notifications received and formatted</td><td>Order confirmation, shipping notification, welcome email &mdash; all branded and correct.</td><td>&#9744;</td></tr>
            <tr><td>7</td><td>Variant selector works</td><td>Color swatches change images. Size selector updates price. Out-of-stock variants are marked.</td><td>&#9744;</td></tr>
            <tr><td>8</td><td>Cart updates correctly</td><td>Quantity change recalculates total. Remove item works. Cart count in header updates.</td><td>&#9744;</td></tr>
            <tr><td>9</td><td>Discount codes apply correctly</td><td>Test percentage off, fixed amount off, free shipping codes. Verify totals are accurate.</td><td>&#9744;</td></tr>
            <tr><td>10</td><td>Pagination works on collections</td><td>Navigate through pages. Page 2, 3, etc. show different products. No duplicates.</td><td>&#9744;</td></tr>
            <tr><td>11</td><td>Collection filters work correctly</td><td>Filter by price, color, size, type. Results update. Filters can be cleared.</td><td>&#9744;</td></tr>
            <tr><td>12</td><td>Product image gallery works</td><td>Zoom on hover/click. Swipe on mobile. Thumbnails switch main image. Video plays if present.</td><td>&#9744;</td></tr>
            <tr><td>13</td><td>Social sharing links work</td><td>Share to Facebook, Twitter/X, Pinterest. Links open correct pre-filled share dialogs.</td><td>&#9744;</td></tr>
            <tr><td>14</td><td>Back button behavior works</td><td>Browser back button does not break navigation. No infinite loops. State is preserved.</td><td>&#9744;</td></tr>
            <tr><td>15</td><td>404 page is customized</td><td>Not the default Shopify 404. Has search bar, popular links, and matches brand design.</td><td>&#9744;</td></tr>
        </tbody>
    </table>

    <h4>&#9889; Performance QA (10 Points)</h4>
    <p>Speed is revenue. Every second of delay costs conversions. These are non-negotiable performance standards.</p>
    <table>
        <thead>
            <tr><th>#</th><th>Check Item</th><th>Target / Standard</th><th>Pass/Fail</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Mobile PageSpeed Insights score</td><td>85+ &#10004; (run on pagespeed.web.dev)</td><td>&#9744;</td></tr>
            <tr><td>2</td><td>Desktop PageSpeed Insights score</td><td>90+ &#10004;</td><td>&#9744;</td></tr>
            <tr><td>3</td><td>ALL images optimized</td><td>WebP format, compressed, lazy loaded for below-fold images.</td><td>&#9744;</td></tr>
            <tr><td>4</td><td>ZERO console errors</td><td>Open DevTools &rarr; Console. No red errors allowed. Period.</td><td>&#9744;</td></tr>
            <tr><td>5</td><td>No render-blocking resources</td><td>Critical CSS inlined, non-critical JS deferred.</td><td>&#9744;</td></tr>
            <tr><td>6</td><td>Fonts load correctly</td><td>No FOIT (flash of invisible text) or FOUT (flash of unstyled text). Use font-display: swap.</td><td>&#9744;</td></tr>
            <tr><td>7</td><td>Above-fold content loads in under 2.5 seconds</td><td>LCP (Largest Contentful Paint) must be under 2.5s.</td><td>&#9744;</td></tr>
            <tr><td>8</td><td>No JavaScript errors on any page</td><td>Navigate every page type: home, collection, product, cart, blog, contact.</td><td>&#9744;</td></tr>
            <tr><td>9</td><td>Theme inspector shows no slow sections</td><td>No section rendering above 50ms. Use Shopify Theme Inspector Chrome extension.</td><td>&#9744;</td></tr>
            <tr><td>10</td><td>Total page weight under 3MB for homepage</td><td>Check Network tab &rarr; total transferred. If over 3MB, optimize images and scripts.</td><td>&#9744;</td></tr>
        </tbody>
    </table>

    <h4>&#128269; SEO QA (10 Points)</h4>
    <p>SEO mistakes are invisible to clients but devastating to their traffic. Check every item.</p>
    <table>
        <thead>
            <tr><th>#</th><th>Check Item</th><th>What to Look For</th><th>Pass/Fail</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Every page has a unique page title</td><td>No duplicate titles. Include brand name. Under 60 characters.</td><td>&#9744;</td></tr>
            <tr><td>2</td><td>Every page has a unique meta description</td><td>Under 160 characters. Compelling, includes keywords. No duplicates.</td><td>&#9744;</td></tr>
            <tr><td>3</td><td>ALL images have descriptive alt text</td><td>Not "image1.jpg". Descriptive: "Blue silk evening dress front view".</td><td>&#9744;</td></tr>
            <tr><td>4</td><td>Sitemap generating correctly</td><td>Visit yourstore.com/sitemap.xml. All products, collections, and pages listed.</td><td>&#9744;</td></tr>
            <tr><td>5</td><td>robots.txt not blocking important pages</td><td>Visit yourstore.com/robots.txt. Products and collections should NOT be disallowed.</td><td>&#9744;</td></tr>
            <tr><td>6</td><td>H1 tag exists on every page</td><td>Exactly one H1 per page. Check with DevTools or SEO audit tool.</td><td>&#9744;</td></tr>
            <tr><td>7</td><td>URL slugs are clean and descriptive</td><td>/products/blue-silk-dress NOT /products/prod-12847. No random numbers or codes.</td><td>&#9744;</td></tr>
            <tr><td>8</td><td>Structured data (JSON-LD) present for products</td><td>Test with Google Rich Results Test. Product, price, availability, reviews should appear.</td><td>&#9744;</td></tr>
            <tr><td>9</td><td>Canonical URLs set correctly</td><td>No duplicate content issues. Check with View Source &rarr; search for "canonical".</td><td>&#9744;</td></tr>
            <tr><td>10</td><td>No duplicate content issues</td><td>Collection pages with filters should not create duplicate indexed pages.</td><td>&#9744;</td></tr>
        </tbody>
    </table>

    <h4>&#128241; Mobile Testing QA (10 Points)</h4>
    <p>Over 70% of e-commerce traffic is mobile. If it does not work on a phone, it does not work. Period.</p>
    <table>
        <thead>
            <tr><th>#</th><th>Check Item</th><th>What to Look For</th><th>Pass/Fail</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Tested on REAL iPhone</td><td>Not just Chrome DevTools. Real Safari on a real iPhone.</td><td>&#9744;</td></tr>
            <tr><td>2</td><td>Tested on REAL Android device</td><td>Chrome on a real Android phone. Font rendering differs from desktop.</td><td>&#9744;</td></tr>
            <tr><td>3</td><td>Touch targets are 44px+</td><td>Buttons, links, form fields all large enough to tap without mis-tapping.</td><td>&#9744;</td></tr>
            <tr><td>4</td><td>No horizontal scrolling on any page</td><td>Swipe left &mdash; nothing should scroll sideways. Ever. On any page.</td><td>&#9744;</td></tr>
            <tr><td>5</td><td>Sticky Add-to-Cart works on product pages</td><td>Scroll down on product page &mdash; ATC button stays visible or appears as sticky bar.</td><td>&#9744;</td></tr>
            <tr><td>6</td><td>Mobile menu opens/closes correctly</td><td>Hamburger icon works. Menu slides in. Close button works. Back button closes menu.</td><td>&#9744;</td></tr>
            <tr><td>7</td><td>Product images are swipeable</td><td>Swipe left/right through product gallery. Smooth, no jank, thumbnails update.</td><td>&#9744;</td></tr>
            <tr><td>8</td><td>Text is readable without zooming</td><td>16px+ body text. No tiny fonts. Line height is comfortable (1.5+).</td><td>&#9744;</td></tr>
            <tr><td>9</td><td>Forms are usable on mobile</td><td>Proper keyboard types (email keyboard for email, number pad for phone). Autofill works.</td><td>&#9744;</td></tr>
            <tr><td>10</td><td>No layout shifts during loading</td><td>CLS (Cumulative Layout Shift) under 0.1. Nothing jumps around as the page loads.</td><td>&#9744;</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Cross-Browser Testing Protocol</h3>
    <p>Different browsers render CSS and JavaScript differently. You must test across all major browsers before delivery.</p>
    <table>
        <thead>
            <tr><th>Browser</th><th>Desktop</th><th>Mobile</th><th>Key Issues to Watch</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Chrome</strong></td><td>&#10004; Primary</td><td>&#10004; Android</td><td>Base compatibility &mdash; most forgiving browser. If it breaks here, something is very wrong.</td></tr>
            <tr><td><strong>Safari</strong></td><td>&#10004; Required</td><td>&#10004; iPhone</td><td>Flexbox gap support, date input rendering, smooth scrolling quirks, 100vh issue on iOS, safe-area-inset for notched phones.</td></tr>
            <tr><td><strong>Firefox</strong></td><td>&#10004; Secondary</td><td>Optional</td><td>CSS specificity differences, font rendering (slightly different anti-aliasing), form element styling.</td></tr>
            <tr><td><strong>Edge</strong></td><td>&#10004; Secondary</td><td>Optional</td><td>Usually matches Chrome (Chromium-based). Occasionally differs in extension behavior.</td></tr>
        </tbody>
    </table>
    <div class="highlight-box">
        <h4>Safari-Specific Gotchas</h4>
        <p>Safari is the #1 source of cross-browser bugs for Shopify stores. Watch for these:</p>
        <ul>
            <li><strong>100vh issue:</strong> On iOS Safari, 100vh includes the address bar area. Use <code>-webkit-fill-available</code> or CSS custom properties as a workaround.</li>
            <li><strong>Flexbox gap:</strong> Older Safari versions do not support the <code>gap</code> property on flexbox. Use margins as fallback.</li>
            <li><strong>Date inputs:</strong> Safari renders date inputs differently. Test date pickers on real devices.</li>
            <li><strong>Smooth scrolling:</strong> <code>scroll-behavior: smooth</code> does not work in all Safari versions. Use JavaScript fallback.</li>
            <li><strong>Safe area insets:</strong> Notched iPhones need <code>env(safe-area-inset-bottom)</code> for sticky elements.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Real Device Testing</h3>
    <div class="highlight-box">
        <h4>Why Chrome DevTools Is NOT Enough</h4>
        <p>Chrome DevTools device emulation is useful for quick layout checks, but it cannot replace testing on real hardware. Here is why:</p>
        <ul>
            <li><strong>Touch events:</strong> DevTools simulates clicks, not real touch events. Swipe gestures, pinch-to-zoom, and long-press behave differently on actual touchscreens.</li>
            <li><strong>Safari CSS bugs:</strong> iPhone Safari has unique rendering behaviors (safe area insets, 100vh issue, smooth scrolling) that Chrome DevTools simply cannot replicate.</li>
            <li><strong>Font rendering:</strong> Android Chrome renders fonts with different anti-aliasing than desktop Chrome. Text that looks perfect on desktop may look too thin or too heavy on a real phone.</li>
            <li><strong>Performance:</strong> Your development machine is much faster than a mid-range phone. Animations that are smooth on desktop may jank on a $200 Android phone.</li>
            <li><strong>Network conditions:</strong> Real mobile networks have variable latency that throttled DevTools cannot accurately simulate.</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>&#9888;&#65039; Minimum Device Testing Requirement</h4>
        <p>Every store must be tested on at least:</p>
        <ul>
            <li>1 real iPhone (Safari) &mdash; preferably iPhone 12 or newer</li>
            <li>1 real Android device (Chrome) &mdash; preferably a mid-range device, not a flagship</li>
        </ul>
        <p>If you do not own these devices, use BrowserStack (free tier available) or ask a teammate to test on their device. There is NO excuse for skipping real device testing.</p>
    </div>
</div>

<div class="content-section">
    <h3>Console Error Diagnosis</h3>
    <p>The browser console is your best friend during QA. Here is how to use it effectively:</p>
    <div class="highlight-box">
        <h4>How to Open DevTools Console</h4>
        <ul>
            <li><strong>Windows/Linux:</strong> Press F12 or Ctrl+Shift+J</li>
            <li><strong>Mac:</strong> Press Cmd+Option+J</li>
            <li>Click the <strong>Console</strong> tab</li>
            <li>Navigate through every page of the store while watching for errors</li>
        </ul>
    </div>
    <h4>Understanding Console Messages</h4>
    <table>
        <thead>
            <tr><th>Color</th><th>Type</th><th>Action Required</th><th>Example</th></tr>
        </thead>
        <tbody>
            <tr><td style="color: #ff4444;"><strong>Red</strong></td><td>Error</td><td><strong>MUST FIX</strong> &mdash; these are real problems that may break functionality</td><td>Uncaught TypeError: Cannot read property 'length' of undefined</td></tr>
            <tr><td style="color: #ffaa00;"><strong>Yellow</strong></td><td>Warning</td><td>Should investigate &mdash; may indicate future problems</td><td>Mixed Content: The page was loaded over HTTPS but requested an insecure resource</td></tr>
            <tr><td style="color: #4488ff;"><strong>Blue</strong></td><td>Info</td><td>Usually safe to ignore &mdash; informational messages from Shopify or apps</td><td>Shopify.theme.handle: "dawn"</td></tr>
            <tr><td style="color: #888888;"><strong>Gray</strong></td><td>Log</td><td>Debug output &mdash; can ignore unless you added it yourself</td><td>console.log output from apps</td></tr>
        </tbody>
    </table>
    <div class="warning-box">
        <h4>&#9888;&#65039; The Zero-Error Standard</h4>
        <p><strong>Digital Heroes standard: ZERO red errors in the console.</strong> No exceptions. No "it's just a third-party app" excuses. If an app is throwing errors, either fix it, contact the app developer, or remove the app. Red errors mean the store is not ready to ship.</p>
    </div>
    <h4>Common Console Errors and Fixes</h4>
    <table>
        <thead>
            <tr><th>Error Message</th><th>Common Cause</th><th>Solution</th></tr>
        </thead>
        <tbody>
            <tr><td><code>Uncaught TypeError: Cannot read property 'xxx' of undefined</code></td><td>Script running before DOM element exists</td><td>Wrap in DOMContentLoaded event or move script to bottom of page</td></tr>
            <tr><td><code>Failed to load resource: 404</code></td><td>Missing file (image, JS, CSS)</td><td>Check file path, upload missing file, or remove the reference</td></tr>
            <tr><td><code>Mixed Content Error</code></td><td>HTTP content loaded on HTTPS page</td><td>Change all URLs to https:// or use protocol-relative //</td></tr>
            <tr><td><code>CORS error</code></td><td>External resource blocking cross-origin requests</td><td>Use Shopify-hosted assets instead, or configure CORS headers on external server</td></tr>
            <tr><td><code>net::ERR_BLOCKED_BY_CLIENT</code></td><td>Ad blocker blocking a resource</td><td>Rename files/paths that contain "ad", "banner", "tracking" keywords</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Accessibility Quick Check</h3>
    <p>Accessibility is not optional. Approximately 15-20% of users have some form of disability. An inaccessible store excludes paying customers.</p>
    <div class="highlight-box">
        <h4>5-Minute Accessibility Audit</h4>
        <ol>
            <li><strong>Keyboard navigation:</strong> Tab through the entire site using only your keyboard. Can you reach every link, button, and form field? Can you complete checkout? Is the focus indicator visible?</li>
            <li><strong>Screen reader flow:</strong> Turn on VoiceOver (Mac) or NVDA (Windows). Does the page read in a logical order? Product name &rarr; price &rarr; description &rarr; variants &rarr; add to cart?</li>
            <li><strong>Alt text on all images:</strong> Right-click images &rarr; Inspect. Every <code>&lt;img&gt;</code> tag must have a meaningful alt attribute. "IMG_3847.jpg" is NOT acceptable.</li>
            <li><strong>Form labels:</strong> Every input field must have an associated <code>&lt;label&gt;</code> element. Click the label &mdash; does it focus the input? If not, the association is broken.</li>
            <li><strong>Color contrast:</strong> Use the WebAIM Contrast Checker. Normal text needs 4.5:1 ratio. Large text needs 3:1. Check text on colored backgrounds and buttons.</li>
        </ol>
    </div>
    <table>
        <thead>
            <tr><th>Check</th><th>Tool</th><th>Standard</th></tr>
        </thead>
        <tbody>
            <tr><td>Color Contrast</td><td>WebAIM Contrast Checker</td><td>WCAG AA: 4.5:1 normal text, 3:1 large text</td></tr>
            <tr><td>Keyboard Navigation</td><td>Your keyboard (Tab, Enter, Escape)</td><td>All interactive elements reachable and operable</td></tr>
            <tr><td>Screen Reader</td><td>VoiceOver (Mac), NVDA (Windows)</td><td>Logical reading order, meaningful landmarks</td></tr>
            <tr><td>Alt Text</td><td>DevTools Elements panel</td><td>Every image has descriptive, non-empty alt text</td></tr>
            <tr><td>Automated Scan</td><td>axe DevTools extension</td><td>Zero critical violations</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>QA Documentation Template</h3>
    <p>Every QA pass must be documented. This protects you (proof of thoroughness) and the client (evidence of quality). Include the following in your QA sign-off document:</p>
    <div class="highlight-box">
        <h4>QA Sign-Off Document Contents</h4>
        <ul>
            <li><strong>Date tested:</strong> The exact date and time of QA completion</li>
            <li><strong>Tester name:</strong> Who performed the QA (you)</li>
            <li><strong>Store URL:</strong> The preview/live URL tested</li>
            <li><strong>Theme name and version:</strong> Which theme, which version number</li>
            <li><strong>PageSpeed scores:</strong> Mobile score and Desktop score (screenshot from PageSpeed Insights)</li>
            <li><strong>Devices tested:</strong> List every device and browser tested (e.g., "iPhone 14 Safari 17", "Samsung Galaxy S23 Chrome 120", "MacBook Chrome 120")</li>
            <li><strong>Checklist results:</strong> The 60-point checklist with Pass/Fail for each item</li>
            <li><strong>Issues found:</strong> Description of every issue discovered during QA</li>
            <li><strong>Resolution status:</strong> Fixed / In Progress / Deferred (with reason) for each issue</li>
            <li><strong>Screenshot evidence:</strong> Screenshots of key checks (PageSpeed results, mobile views, console showing zero errors)</li>
            <li><strong>Final sign-off:</strong> "I confirm this store has been tested against all 60 QA points and is ready for delivery."</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>&#9888;&#65039; No QA Document = No Delivery</h4>
        <p>If you cannot produce a QA sign-off document, the store is not ready to deliver. This is a hard rule. Verbal "I tested it" is not acceptable. Document everything.</p>
    </div>
</div>

<div class="content-section">
    <h3>Performance Benchmarks Reference</h3>
    <p>Know these numbers by heart. They are the difference between "fast" and "slow" in real terms.</p>
    <table>
        <thead>
            <tr><th>Metric</th><th>Good</th><th>Needs Work</th><th>Poor</th><th>What It Measures</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>LCP</strong> (Largest Contentful Paint)</td><td>&lt; 2.5s</td><td>2.5s - 4.0s</td><td>&gt; 4.0s</td><td>Time until the biggest visible element loads (usually hero image)</td></tr>
            <tr><td><strong>FID / INP</strong> (Interaction to Next Paint)</td><td>&lt; 200ms</td><td>200ms - 500ms</td><td>&gt; 500ms</td><td>Time between user interaction and visual response</td></tr>
            <tr><td><strong>CLS</strong> (Cumulative Layout Shift)</td><td>&lt; 0.1</td><td>0.1 - 0.25</td><td>&gt; 0.25</td><td>How much the page layout shifts during loading</td></tr>
            <tr><td><strong>TTFB</strong> (Time to First Byte)</td><td>&lt; 800ms</td><td>800ms - 1.8s</td><td>&gt; 1.8s</td><td>Server response time (mostly Shopify infrastructure)</td></tr>
            <tr><td><strong>Total Page Weight</strong></td><td>&lt; 2MB</td><td>2MB - 4MB</td><td>&gt; 4MB</td><td>Total size of all resources downloaded</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>&#128295; Hands-On Exercise: Full QA Pass</h3>
    <div class="highlight-box">
        <h4>Exercise: Complete the 60-Point QA Checklist</h4>
        <p>This exercise will take approximately 60-90 minutes. Do not rush it.</p>
        <ol>
            <li><strong>Step 1:</strong> Print or open the 60-Point QA Checklist above (keep it visible while you work)</li>
            <li><strong>Step 2:</strong> Open your Luxe Botanica training store on desktop Chrome</li>
            <li><strong>Step 3:</strong> Go through ALL 60 points systematically, one by one. Do not skip. Do not assume.</li>
            <li><strong>Step 4:</strong> For each FAIL, document the issue with a screenshot and description of what is wrong</li>
            <li><strong>Step 5:</strong> Fix each issue you found (this is where you learn the most)</li>
            <li><strong>Step 6:</strong> Re-test every failed item to confirm the fix works</li>
            <li><strong>Step 7:</strong> Run PageSpeed Insights on the homepage (mobile and desktop). Screenshot the results.</li>
            <li><strong>Step 8:</strong> Open DevTools Console and navigate through every page. Screenshot showing zero errors.</li>
            <li><strong>Step 9:</strong> Test on a real phone (iPhone or Android). Document which device and browser you used.</li>
            <li><strong>Step 10:</strong> Create a complete QA sign-off document with all results, screenshots, and your sign-off statement.</li>
        </ol>
    </div>
    <div class="warning-box">
        <h4>&#9888;&#65039; Grading Criteria</h4>
        <p>Your QA document will be reviewed. You will be evaluated on:</p>
        <ul>
            <li>Completeness: Did you check all 60 points?</li>
            <li>Thoroughness: Did you test on real devices?</li>
            <li>Documentation: Are issues clearly described with screenshots?</li>
            <li>Resolution: Did you fix the issues you found?</li>
            <li>Performance: Are PageSpeed scores at or above target (85+ mobile, 90+ desktop)?</li>
        </ul>
    </div>
</div>
`;

const task11Content = `
<h2>Troubleshooting &mdash; Debug Like a Pro</h2>

<div class="content-section">
    <h3>The Debugging Mindset</h3>
    <div class="highlight-box">
        <h4>Systematic Debugging Saves Hours</h4>
        <p><strong>Before asking for help, follow this systematic process. 80% of issues are solved in the first 3 steps.</strong></p>
        <p>Random guessing wastes hours. Changing things at random and hoping the problem goes away is not debugging &mdash; it is gambling. Professional developers follow a repeatable process. Every time. The process below will solve the vast majority of issues you encounter on Shopify stores.</p>
        <p>The key insight: <strong>isolate the variable.</strong> Change one thing at a time. Test after each change. When the problem disappears, you have found the cause. This is the scientific method applied to code.</p>
    </div>
</div>

<div class="content-section">
    <h3>The 7-Step Debug Decision Tree</h3>
    <p>Follow these steps IN ORDER. Do not skip steps. Most issues are caught by steps 1-3.</p>
    <table>
        <thead>
            <tr><th>Step</th><th>Check</th><th>Common Fix</th><th>Time to Try</th></tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1. Console Check</strong></td>
                <td>Open DevTools &rarr; Console tab. Look for red errors.</td>
                <td>Red errors show the exact file and line number where the problem is. Read the error message &mdash; it usually tells you what is wrong.</td>
                <td>30 seconds</td>
            </tr>
            <tr>
                <td><strong>2. Preview vs Live</strong></td>
                <td>Are you looking at the preview theme or the live site?</td>
                <td>Changes only show in preview until you publish the theme. Make sure you are viewing the correct version.</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><strong>3. Cache Clear</strong></td>
                <td>Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)</td>
                <td>Solves 40% of "why is it not updating" issues. Browsers aggressively cache CSS and JavaScript files.</td>
                <td>5 seconds</td>
            </tr>
            <tr>
                <td><strong>4. Syntax Check</strong></td>
                <td>Missing endif, endfor, closing quotes, or braces?</td>
                <td>Count your opening tags vs closing tags. Every {% if %} needs an {% endif %}. Every {% for %} needs an {% endfor %}.</td>
                <td>2 minutes</td>
            </tr>
            <tr>
                <td><strong>5. Object Exists?</strong></td>
                <td>Is the variable or object you are accessing actually defined?</td>
                <td>Wrap in {% if object %} check. Use {{ item | inspect }} to see what properties are actually available.</td>
                <td>1 minute</td>
            </tr>
            <tr>
                <td><strong>6. Isolate Issue</strong></td>
                <td>Comment out sections of code until the error disappears.</td>
                <td>Use {% comment %} and {% endcomment %} to temporarily remove sections. When the error stops, the last section you commented out contains the bug.</td>
                <td>5 minutes</td>
            </tr>
            <tr>
                <td><strong>7. App Conflict</strong></td>
                <td>Disable apps one by one in Settings &rarr; Apps.</td>
                <td>Apps often inject conflicting JavaScript and CSS. Disable all apps, then enable them one at a time to find the culprit.</td>
                <td>10 minutes</td>
            </tr>
        </tbody>
    </table>
    <div class="warning-box">
        <h4>&#9888;&#65039; If All 7 Steps Fail</h4>
        <p>If you have followed every step above and the issue persists, you have earned the right to ask for help. But when you ask, include: (1) what the issue is, (2) what you have already tried, (3) the exact error message, and (4) screenshots. "It is broken" is not a bug report.</p>
    </div>
</div>

<div class="content-section">
    <h3>Performance Debugging Flowchart</h3>
    <p>When a client reports their site is slow, follow this exact process:</p>
    <div class="highlight-box">
        <h4>Step-by-Step: Slow Site Diagnosis</h4>
        <p><strong>Client reports slow website &rarr;</strong></p>
        <p><strong>Step 1: Run PageSpeed Insights</strong> (pagespeed.web.dev)</p>
        <ul>
            <li>Score &gt; 80 &rarr; <strong>ACCEPTABLE</strong> &mdash; minor tweaks only needed</li>
            <li>Score 50-80 &rarr; <strong>OPTIMIZE</strong> &mdash; images and scripts need attention</li>
            <li>Score &lt; 50 &rarr; <strong>CRITICAL</strong> &mdash; major work needed, prioritize immediately</li>
        </ul>
        <p><strong>Step 2: Identify the main culprit</strong></p>
        <ul>
            <li>LCP high? &rarr; Hero image or above-fold content is too large or slow to load</li>
            <li>TBT high? &rarr; Too much JavaScript executing during page load</li>
            <li>CLS high? &rarr; Images without dimensions or dynamic content shifting layout</li>
            <li>Server slow? &rarr; Hosting or caching issue (check TTFB)</li>
        </ul>
        <p><strong>Step 3: Apply fixes in priority order</strong></p>
        <ol>
            <li>Compress images &rarr; TinyPNG, convert to WebP format</li>
            <li>Lazy load below-fold images &rarr; Add loading="lazy" attribute</li>
            <li>Defer non-critical JavaScript &rarr; Add defer attribute to script tags</li>
            <li>Remove unused apps and scripts &rarr; Each app adds JS/CSS overhead</li>
            <li>Enable browser caching &rarr; Check cache headers</li>
        </ol>
        <p><strong>Step 4: Retest after EACH individual change</strong></p>
        <ul>
            <li>Improved? &rarr; Document what worked and by how much</li>
            <li>No change? &rarr; Move to next fix in the list</li>
            <li>Worse? &rarr; Revert the change immediately</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>&#9888;&#65039; Critical Rule: One Change at a Time</h4>
        <p>Never make multiple performance changes at once. If you change 5 things and the score improves, you do not know which change helped. If you change 5 things and the score drops, you do not know which change hurt. One change, one retest. Always.</p>
    </div>
</div>

<div class="content-section">
    <h3>DevTools Mastery &mdash; The 4 Tabs You MUST Know</h3>
    <p>Chrome DevTools is your primary debugging weapon. These four tabs will solve 95% of your problems:</p>

    <h4>1. Elements Tab</h4>
    <div class="highlight-box">
        <h4>What It Does</h4>
        <p>Inspect and modify the HTML structure and CSS styles of any element on the page in real time.</p>
        <ul>
            <li><strong>Right-click any element &rarr; Inspect</strong> to jump directly to its HTML</li>
            <li>Edit HTML attributes, text content, and CSS properties live</li>
            <li>See the CSS box model (margin, border, padding, content)</li>
            <li>View computed styles to see the final applied values after all stylesheets</li>
            <li>Find CSS selectors for any element (useful for writing custom CSS)</li>
            <li>Toggle CSS rules on/off to test changes without editing code</li>
        </ul>
        <p><strong>Pro tip:</strong> Use the "Styles" pane to see which CSS rules are being overridden (shown with strikethrough). This instantly shows specificity conflicts.</p>
    </div>

    <h4>2. Console Tab</h4>
    <div class="highlight-box">
        <h4>What It Does</h4>
        <p>Shows JavaScript errors, warnings, and log messages. Also lets you run JavaScript commands.</p>
        <ul>
            <li><strong>Red errors</strong> = something is broken, must fix</li>
            <li><strong>Yellow warnings</strong> = potential problem, should investigate</li>
            <li>Click the file:line link next to any error to jump to the exact code</li>
            <li>Type JavaScript commands directly to test things (e.g., document.querySelector('.product-title'))</li>
            <li>Use console.log() in your code to output debug values</li>
        </ul>
        <p><strong>Pro tip:</strong> Filter console messages by typing in the filter box. Type "error" to see only errors. Type your section name to see only messages from your code.</p>
    </div>

    <h4>3. Network Tab</h4>
    <div class="highlight-box">
        <h4>What It Does</h4>
        <p>Shows every file and API request the page makes. Essential for performance debugging.</p>
        <ul>
            <li>See all files loaded: images, CSS, JS, fonts, API calls</li>
            <li>Check file sizes &mdash; find the biggest resource that is slowing things down</li>
            <li>Look for <strong>404 errors</strong> (red rows) &mdash; missing files</li>
            <li>Check load timing &mdash; waterfall chart shows what loads when</li>
            <li>Filter by type: Img, JS, CSS, Font, XHR/Fetch (for API calls)</li>
            <li>Check the total page weight at the bottom of the panel</li>
        </ul>
        <p><strong>Pro tip:</strong> Enable "Disable cache" checkbox in Network tab while debugging. This ensures you always see fresh resources, not cached versions.</p>
    </div>

    <h4>4. Application Tab</h4>
    <div class="highlight-box">
        <h4>What It Does</h4>
        <p>View and manage cookies, localStorage, sessionStorage, and other stored data.</p>
        <ul>
            <li>See all cookies set by the site and third-party apps</li>
            <li>View localStorage data (often used by cart drawers, wishlists, recently viewed)</li>
            <li>Clear site data to test fresh user experience</li>
            <li>Debug issues with cart persistence, user preferences, or session data</li>
        </ul>
        <p><strong>Pro tip:</strong> If a cart drawer or wishlist is not working, check localStorage first. Corrupted localStorage data is a common cause of persistent bugs.</p>
    </div>
</div>

<div class="content-section">
    <h3>Common Liquid Errors &amp; Fixes</h3>
    <p>These are the most common Liquid errors you will encounter when developing Shopify themes. Know them by heart.</p>
    <table>
        <thead>
            <tr><th>Error Message</th><th>What It Actually Means</th><th>How to Fix It</th></tr>
        </thead>
        <tbody>
            <tr>
                <td><code>Liquid error: undefined method</code></td>
                <td>The object does not have the property you are trying to access. You likely misspelled something or the object type is different than you expect.</td>
                <td>Check spelling carefully. Use {{ item | inspect }} to see all available properties on the object.</td>
            </tr>
            <tr>
                <td><code>Cannot read property of null</code></td>
                <td>JavaScript is trying to access a property on a variable that is null or undefined. The element or data does not exist.</td>
                <td>Add a null check before accessing: if (variable) { ... } or use optional chaining: variable?.property</td>
            </tr>
            <tr>
                <td><code>expected block close</code></td>
                <td>You have a missing {% endif %} or {% endfor %} tag. Your opening and closing tags do not match.</td>
                <td>Count every opening tag and make sure it has a matching closing tag. Use code indentation to visually spot mismatches.</td>
            </tr>
            <tr>
                <td><code>Argument error: invalid</code></td>
                <td>You passed the wrong type of parameter to a Liquid filter. For example, using a string where a number is expected.</td>
                <td>Check the Shopify Liquid filter documentation for the correct parameter types.</td>
            </tr>
            <tr>
                <td>Page is completely blank (white screen)</td>
                <td>A fatal Liquid syntax error is preventing the entire page from rendering. Shopify cannot process the template at all.</td>
                <td>Revert your last change immediately. Then add your code back line by line to find the exact line causing the error.</td>
            </tr>
            <tr>
                <td><code>Array is not paginateable</code></td>
                <td>You are trying to use the paginate tag on an array that Shopify does not support pagination for.</td>
                <td>Use a for loop with limit and offset instead. Only certain collections support the paginate tag.</td>
            </tr>
            <tr>
                <td><code>Maximum render depth exceeded</code></td>
                <td>You have an infinite loop &mdash; a snippet rendering itself, or circular includes.</td>
                <td>Check for recursive {% render %} calls. Make sure snippets do not call themselves.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Common Shopify-Specific Issues</h3>
    <p>These are real-world problems you will encounter frequently. Learn the pattern: Situation &rarr; Cause &rarr; Fix.</p>

    <h4>Issue: Section Not Showing in Theme Customizer</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> You created a new section file, but it does not appear in the "Add section" menu in the theme customizer.</p>
        <p><strong>Cause:</strong> Schema syntax error (missing comma, quote, or bracket) or missing "presets" array in the schema.</p>
        <p><strong>Fix:</strong> (1) Validate your schema JSON &mdash; paste it into a JSON validator. (2) Ensure the "presets" array exists with at least one entry containing a "name". (3) Clear browser cache and refresh the customizer. (4) Check for invisible characters (copy-pasted from Word/Google Docs often includes these).</p>
    </div>

    <h4>Issue: Checkout Page Not Styled</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> The checkout page looks completely different from the rest of the store. No custom fonts, colors, or layout.</p>
        <p><strong>Cause:</strong> Checkout customization is limited on Shopify Basic, Standard, and Advanced plans. Full checkout.liquid editing requires Shopify Plus.</p>
        <p><strong>Fix:</strong> Use Settings &rarr; Checkout and accounts to set the logo, colors, and fonts. For more customization, use the checkout branding API (available on some plans) or recommend the client upgrade to Plus.</p>
    </div>

    <h4>Issue: Variant Picker Not Working</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> Clicking size or color options does not update the price, image, or availability status.</p>
        <p><strong>Cause:</strong> JavaScript error in the variant change handler. The theme JavaScript expects specific DOM elements that may have been renamed or removed.</p>
        <p><strong>Fix:</strong> (1) Check Console for JavaScript errors. (2) Verify the variant select element has the correct name attribute. (3) Ensure the product JSON is being output correctly in the template. (4) Test with a product that has only one option to isolate the issue.</p>
    </div>

    <h4>Issue: Cart Drawer Not Updating</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> Adding items to cart does not update the cart drawer count or contents. The page must be refreshed to see changes.</p>
        <p><strong>Cause:</strong> AJAX cart JavaScript is broken. An app may be conflicting with the cart JavaScript, or a theme update broke the cart API calls.</p>
        <p><strong>Fix:</strong> (1) Check Console for JavaScript errors after clicking Add to Cart. (2) Check Network tab for failed /cart/add.js requests. (3) Disable cart-related apps one by one. (4) Verify the cart section is properly set up for AJAX rendering.</p>
    </div>

    <h4>Issue: Collection Filters Broken</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> Clicking filter options does not update the product grid, or all products disappear.</p>
        <p><strong>Cause:</strong> Filter logic error in the collection template, or a filtering app is conflicting with native Shopify filters.</p>
        <p><strong>Fix:</strong> (1) Check if the store is using Shopify native filters or an app. (2) If native, verify the collection template has the correct filter form markup. (3) If an app, disable the app and test native filters. (4) Check URL parameters after filtering &mdash; they should look like ?filter.v.option.color=red.</p>
    </div>

    <h4>Issue: Mobile Menu Not Opening</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> Tapping the hamburger icon on mobile does nothing. The menu does not slide in.</p>
        <p><strong>Cause:</strong> JavaScript error preventing the click handler from firing, or CSS z-index issue hiding the menu behind other elements.</p>
        <p><strong>Fix:</strong> (1) Connect phone to computer and use remote DevTools to see Console errors. (2) Check if the menu element exists in the DOM. (3) Check CSS z-index &mdash; the menu must be above overlays and headers. (4) Verify the JavaScript click handler targets the correct selector (class names may have changed in a theme update).</p>
    </div>

    <h4>Issue: Images Not Loading</h4>
    <div class="highlight-box">
        <p><strong>Situation:</strong> Product images show as broken icons or blank spaces.</p>
        <p><strong>Cause:</strong> Wrong Liquid image filter (using deprecated img_url instead of image_url), broken file path, or images not uploaded to Shopify CDN.</p>
        <p><strong>Fix:</strong> (1) Check the image src in DevTools &mdash; is the URL valid? (2) Replace img_url with image_url (the modern OS 2.0 filter). (3) Verify images exist in Shopify admin &rarr; Files. (4) Check for typos in image filenames.</p>
    </div>
</div>

<div class="content-section">
    <h3>CSS Specificity Conflicts</h3>
    <p>One of the most common issues in Shopify development is CSS from apps overriding your custom styles. Here is how to handle it:</p>
    <div class="highlight-box">
        <h4>How Apps Break Your CSS</h4>
        <p>Shopify apps inject their own CSS into your theme. This CSS often has higher specificity than your styles, causing your carefully crafted design to be overridden. Common symptoms:</p>
        <ul>
            <li>Button colors suddenly change after installing an app</li>
            <li>Font sizes or families are different on certain pages</li>
            <li>Spacing or margins look wrong on pages where an app widget appears</li>
            <li>Your custom CSS "stops working" even though the code is correct</li>
        </ul>
    </div>
    <h4>Diagnosing Specificity Conflicts</h4>
    <ol>
        <li><strong>Right-click the affected element &rarr; Inspect</strong></li>
        <li>In the Styles pane, look for <strong>struck-through</strong> CSS rules &mdash; these are being overridden</li>
        <li>Scroll down to find which rule is winning. It will show the source file.</li>
        <li>If the winning rule comes from an app stylesheet, you have found your conflict.</li>
    </ol>
    <h4>Fixing Specificity Conflicts (in order of preference)</h4>
    <table>
        <thead>
            <tr><th>Method</th><th>When to Use</th><th>Example</th></tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Increase selector specificity</strong></td>
                <td>First choice &mdash; add more specific selectors</td>
                <td>Instead of .btn, use .product-form .btn or section.product .product-form .btn</td>
            </tr>
            <tr>
                <td><strong>Load your CSS after the app CSS</strong></td>
                <td>If specificity is equal, later stylesheets win</td>
                <td>Move your custom CSS link below the app CSS in theme.liquid</td>
            </tr>
            <tr>
                <td><strong>Use !important</strong></td>
                <td><strong>LAST resort only</strong> &mdash; for overriding stubborn app CSS</td>
                <td>.product-form .btn { background: #000 !important; }</td>
            </tr>
        </tbody>
    </table>
    <div class="warning-box">
        <h4>&#9888;&#65039; The !important Rule</h4>
        <p>Using !important is acceptable ONLY when overriding third-party app CSS that you cannot control. Never use !important in your own CSS to override your own styles &mdash; that indicates a specificity architecture problem you should fix properly.</p>
    </div>
</div>

<div class="content-section">
    <h3>When to Escalate</h3>
    <p>Not every problem is yours to solve alone. Knowing when to escalate is a sign of maturity, not weakness.</p>
    <table>
        <thead>
            <tr><th>Situation</th><th>Who to Contact</th><th>What to Provide</th></tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>CSS bugs, Liquid errors, image issues, speed optimization</strong></td>
                <td>Fix yourself &mdash; these are core developer skills</td>
                <td>N/A &mdash; you should be able to solve these</td>
            </tr>
            <tr>
                <td><strong>Complex Liquid logic, JavaScript debugging, schema questions</strong></td>
                <td>Ask AI (Claude/ChatGPT) first</td>
                <td>Exact error message, code context, what you have tried</td>
            </tr>
            <tr>
                <td><strong>Architecture decisions, client communication, scope changes</strong></td>
                <td>Ask team lead or PM</td>
                <td>Summary of the situation, your recommendation, impact assessment</td>
            </tr>
            <tr>
                <td><strong>API issues, checkout bugs, payment problems, platform bugs</strong></td>
                <td>Contact Shopify Support</td>
                <td>Store URL, steps to reproduce, screenshots, browser/device info</td>
            </tr>
            <tr>
                <td><strong>Third-party app broken or causing conflicts</strong></td>
                <td>Contact the app developer support</td>
                <td>What is happening, when it started, console errors, theme name</td>
            </tr>
        </tbody>
    </table>
    <div class="highlight-box">
        <h4>The 30-Minute Rule</h4>
        <p>If you have been stuck on a single issue for 30 minutes without making progress, escalate. Your time is valuable. Spending 3 hours on something a teammate could solve in 10 minutes is not heroic &mdash; it is wasteful. Ask for help after 30 minutes of genuine effort.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128295; Hands-On Exercise: Debug These Scenarios</h3>
    <p>Work through each scenario below using the 7-Step Debug Decision Tree. Write down your diagnosis and fix for each one.</p>

    <div class="highlight-box">
        <h4>Scenario 1: Product Page Is Blank</h4>
        <p><strong>Report:</strong> "Customer says the product page for 'Rose Gold Serum' shows a completely white page."</p>
        <p><strong>Your task:</strong> Walk through the decision tree. What do you check first? What is the most likely cause? What is the fix?</p>
        <p><strong>Expected diagnosis path:</strong> Step 1 (Console) &rarr; likely a fatal Liquid syntax error. Step 4 (Syntax Check) &rarr; find the missing closing tag. Step 6 (Isolate) &rarr; comment out sections to find the broken code.</p>
    </div>

    <div class="highlight-box">
        <h4>Scenario 2: Collection Page Shows Wrong Products</h4>
        <p><strong>Report:</strong> "The 'Summer Collection' page is showing winter products."</p>
        <p><strong>Your task:</strong> Diagnose the filter/collection issue. Is it a Liquid template problem or a Shopify admin configuration problem?</p>
        <p><strong>Expected diagnosis path:</strong> Check if the collection is manual or automated. If automated, check the conditions. If manual, check which products are assigned. Check for filter URL parameters that may be changing the results.</p>
    </div>

    <div class="highlight-box">
        <h4>Scenario 3: Site Loads Slowly After App Install</h4>
        <p><strong>Report:</strong> "PageSpeed score dropped from 85 to 52 after we installed the new reviews app."</p>
        <p><strong>Your task:</strong> Follow the performance debugging flowchart. How do you confirm it is the app? What are your options?</p>
        <p><strong>Expected diagnosis path:</strong> Step 7 (App Conflict) &rarr; disable the app and retest. Check Network tab for large JS/CSS files the app added. Contact the app developer about performance. Consider alternative apps or lazy-loading the app script.</p>
    </div>

    <div class="highlight-box">
        <h4>Scenario 4: Mobile Menu Does Not Close</h4>
        <p><strong>Report:</strong> "On iPhone, the hamburger menu opens but tapping the X button does not close it."</p>
        <p><strong>Your task:</strong> Debug this JavaScript issue. What DevTools approach would you use?</p>
        <p><strong>Expected diagnosis path:</strong> Step 1 (Console) on mobile via remote debugging. Check if the close button has the correct event listener. Check CSS z-index &mdash; is something covering the close button? Check if a recent theme update renamed the close button class.</p>
    </div>

    <div class="highlight-box">
        <h4>Scenario 5: Custom Section Not Appearing in Customizer</h4>
        <p><strong>Report:</strong> "I created a new section file called custom-testimonials.liquid but it is not showing up in the Add Section menu."</p>
        <p><strong>Your task:</strong> Debug the schema issue. What are the 3 most common causes?</p>
        <p><strong>Expected diagnosis path:</strong> (1) Validate schema JSON for syntax errors (missing comma is #1 cause). (2) Check that "presets" array exists with a "name" property. (3) Clear browser cache and hard refresh the customizer. (4) Check for invisible characters if code was copied from a word processor.</p>
    </div>
</div>

<div class="content-section">
    <h3>Day-to-Day Quick Reference: Common Issues &amp; Fixes</h3>
    <p>These are problems you will face almost every day. Know them by heart. This table covers the top issues across 8 categories with their causes and quick fixes.</p>

    <h4>Image Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image looks blurry</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Low resolution or wrong aspect ratio</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Request 2x size from client (2000px for 1000px display). Use WebP format.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image not loading</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">File too large or wrong format</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Compress with TinyPNG. Convert to WebP/JPG. Max 500KB per image.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image stretching</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Wrong aspect ratio in theme</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check theme settings for aspect ratio. Use object-fit: cover in CSS.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product images different sizes</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client uploaded inconsistent images</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Resize all to same ratio (1:1 or 3:4). Use Shopify image resize URL params.</td></tr>
        </tbody>
    </table>

    <h4>Text &amp; Content Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Font not showing</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Font not loaded or wrong name</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check theme settings, Typography. Verify Google Font name is exact.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Text overlapping on mobile</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fixed width or absolute positioning</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Use responsive units (%, vw, rem). Test at 375px width.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Description shows HTML tags</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Using wrong Liquid filter</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Use {{ product.description }} not {{ product.description | escape }}</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Currency showing wrong</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Store settings or wrong filter</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Settings, General, Currency. Use {{ price | money }} filter.</td></tr>
        </tbody>
    </table>

    <h4>Cart &amp; Checkout Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Add to Cart not working</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">JavaScript error or form issue</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check console for errors. Verify product is available (not draft/out of stock).</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cart drawer not opening</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Theme JS broken or app conflict</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check for app conflicts. Try disabling apps one by one.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Checkout button missing</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Checkout disabled or payment not set</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Settings, Payments. Ensure at least one payment method is active.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shipping not calculating</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Shipping zones not set</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Settings, Shipping. Add rates for the customer's country.</td></tr>
        </tbody>
    </table>

    <h4>Performance Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Site loading slowly</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Large images, too many apps</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Compress images, remove unused apps, defer non-critical JS.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS issues (layout shift)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Images without dimensions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add width/height to img tags. Reserve space with aspect-ratio CSS.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP issues (slow paint)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero image too large</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Preload hero image. Use srcset for responsive images.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Third-party scripts slow</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Apps loading synchronously</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Defer non-critical app scripts. Consider replacing slow apps.</td></tr>
        </tbody>
    </table>

    <h4>Mobile-Specific Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Horizontal scroll on mobile</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Element wider than screen</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Find element with fixed width. Use max-width: 100% and overflow-x: hidden.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Buttons too small to tap</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Touch target under 44px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Minimum button size: 44px x 44px. Add padding if needed.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Menu not opening on mobile</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hamburger menu JS broken</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check for JS errors. Verify data-attributes are correct.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sticky header covering content</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">No scroll padding</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add scroll-padding-top equal to header height.</td></tr>
        </tbody>
    </table>

    <h4>App Conflicts &amp; Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>App widget not showing</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">App block not added or disabled</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Theme editor, Add app block. Or manually add app embed code.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Two apps conflicting</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Both modifying same element</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Disable one, test. Contact app support. May need to choose one.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>App slowing down site</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Heavy JavaScript or many requests</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check in PageSpeed which scripts are slow. Remove or replace app.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>App leaving code after uninstall</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">App did not clean up properly</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Search theme files for app name. Remove leftover snippets and includes.</td></tr>
        </tbody>
    </table>

    <h4>Theme Editor Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Theme editor not loading</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Browser cache or extension conflict</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clear cache, try incognito mode, disable ad blockers.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Changes not saving</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Session timeout or permissions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Refresh page, log out and back in. Check you have edit permissions.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Section disappeared</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Accidentally removed or template changed</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check template selection. Use Undo or revert to previous version.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom CSS not applying</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Specificity or cache</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add !important (temporarily). Check if CSS file is loaded. Clear cache.</td></tr>
        </tbody>
    </table>

    <h4>Product &amp; Collection Issues</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Problem</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quick Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product not showing in collection</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Wrong tags or manual collection</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check collection conditions. Add correct tag or manually add product.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Variants not showing</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Variant options not set up</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Products, Edit, Add variant options (Size, Color, etc.).</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>"Sold Out" showing incorrectly</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Inventory not tracked or zero</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check product inventory settings. Update stock quantity.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Products in wrong order</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sort order not set</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Collection, Sort, Choose manual or automated sorting.</td></tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>Emergency Commands You Should Know</h4>
        <ul>
            <li><strong>Revert theme changes:</strong> Online Store, Themes, Actions, View theme versions</li>
            <li><strong>Disable password protection:</strong> Online Store, Preferences, Password protection</li>
            <li><strong>Check site status:</strong> Visit yourstore.myshopify.com/admin/online_store</li>
            <li><strong>Find broken pages:</strong> Check browser console (F12) for 404 errors</li>
            <li><strong>Quick site backup:</strong> Themes, Download theme file before major changes</li>
        </ul>
    </div>
</div>
`;

const task12Content = `
<h2>Crisis Management &mdash; When Things Go Wrong</h2>

<div class="content-section">
    <h3>Crisis Happens to Everyone</h3>
    <div class="highlight-box">
        <h4>The Professional Difference</h4>
        <p>Even the best developers face emergencies. Sites go down. Checkout breaks. Theme updates destroy customizations. Data gets lost. These things happen to everyone, at every skill level, at every company.</p>
        <p><strong>What separates professionals from amateurs is how you RESPOND, not whether problems occur.</strong></p>
        <p>A professional developer has a plan. They respond quickly, communicate clearly, and fix the issue methodically. An amateur panics, hides the problem, and makes things worse. This module teaches you to be the professional.</p>
    </div>
</div>

<div class="content-section">
    <h3>Crisis Severity Classification</h3>
    <p>Not all problems are equal. Classify every issue immediately so you know how fast to respond and who to notify. This is the first thing you do when you discover a problem.</p>
    <table>
        <thead>
            <tr><th>Level</th><th>Name</th><th>Examples</th><th>Response Time</th><th>Who to Notify</th></tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>P0</strong></td>
                <td style="color: #ff4444;"><strong>CRITICAL</strong></td>
                <td>Site completely down, checkout broken, data loss, payment processing failed, entire homepage blank</td>
                <td><strong>IMMEDIATELY</strong> (within 5 minutes)</td>
                <td>PM + Client + Team Lead</td>
            </tr>
            <tr>
                <td><strong>P1</strong></td>
                <td style="color: #ff8800;"><strong>HIGH</strong></td>
                <td>Major feature broken (search, cart, filters), homepage error visible to customers, payment gateway issue</td>
                <td>Within 30 minutes</td>
                <td>PM + Team Lead</td>
            </tr>
            <tr>
                <td><strong>P2</strong></td>
                <td style="color: #ffcc00;"><strong>MEDIUM</strong></td>
                <td>Visual bug on one page, mobile layout issue, minor feature broken (social sharing, wishlist)</td>
                <td>Within 2 hours</td>
                <td>PM</td>
            </tr>
            <tr>
                <td><strong>P3</strong></td>
                <td style="color: #88cc00;"><strong>LOW</strong></td>
                <td>Enhancement request, cosmetic fix, optimization opportunity, non-customer-facing issue</td>
                <td>Next business day</td>
                <td>Track in project board</td>
            </tr>
        </tbody>
    </table>
    <div class="warning-box">
        <h4>&#9888;&#65039; When In Doubt, Classify Higher</h4>
        <p>If you are not sure whether something is P1 or P2, treat it as P1. It is far better to over-react and discover the issue is minor than to under-react and discover the client has been losing sales for hours. You will never be criticized for taking a problem too seriously. You WILL be criticized for not taking it seriously enough.</p>
    </div>
</div>

<div class="content-section">
    <h3>Scenario 1: SITE DOWN &mdash; The Most Critical Emergency</h3>
    <div class="warning-box">
        <h4>&#9888;&#65039; P0 CRITICAL &mdash; Revenue Loss Every Second</h4>
        <p>When a live store is completely down, every second matters. A $50,000/month store loses approximately <strong>$70 per hour</strong>. A $500,000/month store loses <strong>$700 per hour</strong>. This is not the time to be methodical and slow. Speed is everything.</p>
    </div>
    <h4>Site Down Protocol (follow in exact order):</h4>
    <ol>
        <li><strong>CONFIRM the issue (1 minute):</strong> Check from multiple devices and networks. Use your phone on cellular data (not office WiFi). Ask a colleague to check. Is it really down, or is it just your connection?</li>
        <li><strong>NOTIFY PM within 5 minutes:</strong> Do NOT wait to diagnose first. Send the notification immediately. The PM needs to know NOW so they can manage client communication. Use this template:
            <div class="highlight-box">
                <p><em>"Hi [PM], [Store name] is currently experiencing downtime. The site appears to be [completely down / showing an error page / extremely slow]. I am investigating now and will update you in 30 minutes or sooner if I find the cause."</em></p>
            </div>
        </li>
        <li><strong>CHECK if it is Shopify-wide (1 minute):</strong> Visit <strong>status.shopify.com</strong>. If Shopify itself is having an outage, there is nothing you can do except inform the PM and wait. Shopify outages typically resolve within 30-60 minutes.</li>
        <li><strong>CHECK recent changes (2 minutes):</strong> What was modified in the last 24 hours? Theme code changes? New app installed? Settings changed? The cause is almost always the most recent change.</li>
        <li><strong>ROLLBACK if a recent theme change caused it:</strong> Go to Online Store &rarr; Themes. Click "..." on the live theme &rarr; "View version history" or duplicate a known good backup theme and publish it immediately. Speed matters more than understanding the bug right now.</li>
        <li><strong>Document the timeline:</strong> Write down exactly what happened, when, and what you did. This will be needed for the post-incident review.</li>
        <li><strong>Send updates every 30 minutes:</strong> Even if you have no new information, send an update. "Still investigating, no new findings yet. Next update in 30 minutes." Silence during a crisis is terrifying for PMs and clients.</li>
    </ol>
</div>

<div class="content-section">
    <h3>Scenario 2: CHECKOUT BROKEN &mdash; Money Is Being Lost Every Minute</h3>
    <div class="warning-box">
        <h4>&#9888;&#65039; P0 CRITICAL &mdash; Direct Revenue Impact</h4>
        <p>A broken checkout means customers who WANT to buy cannot. This is the worst possible bug because the revenue loss is immediate and measurable. A $50,000/day store loses approximately <strong>$2,000 per hour</strong> when checkout is broken.</p>
    </div>
    <h4>Checkout Broken Protocol:</h4>
    <ol>
        <li><strong>Test checkout flow yourself (2 minutes):</strong> Open an incognito/private browser window. Add a product to cart. Proceed to checkout. Use the Bogus Gateway test payment method. Does the error happen for you? At which step does it fail?</li>
        <li><strong>Check payment gateway status (1 minute):</strong> If checkout loads but payment fails, check the payment provider status page (Shopify Payments, PayPal, Stripe). Gateway outages happen and are outside your control.</li>
        <li><strong>Check for recent app updates (2 minutes):</strong> Did any apps auto-update recently? Cart-modifying apps, discount apps, and checkout apps are common culprits. Disable them one by one.</li>
        <li><strong>Check theme code for recent changes (2 minutes):</strong> Did you or anyone else modify cart templates, checkout settings, or scripts that run on cart/checkout pages?</li>
        <li><strong>If it is a Shopify-side issue:</strong> Contact Shopify Support immediately via live chat (not email). Provide: store URL, steps to reproduce, screenshot of the error, browser/device info. Mark it as urgent. Follow up every 30 minutes.</li>
    </ol>
    <div class="highlight-box">
        <h4>Revenue Impact Calculator</h4>
        <table>
            <thead>
                <tr><th>Monthly Revenue</th><th>Hourly Loss</th><th>4-Hour Outage Cost</th><th>24-Hour Outage Cost</th></tr>
            </thead>
            <tbody>
                <tr><td>$10,000/mo</td><td>~$14/hr</td><td>~$56</td><td>~$333</td></tr>
                <tr><td>$50,000/mo</td><td>~$69/hr</td><td>~$278</td><td>~$1,667</td></tr>
                <tr><td>$100,000/mo</td><td>~$139/hr</td><td>~$556</td><td>~$3,333</td></tr>
                <tr><td>$500,000/mo</td><td>~$694/hr</td><td>~$2,778</td><td>~$16,667</td></tr>
            </tbody>
        </table>
        <p>Show this table to anyone who asks "can it wait until Monday?"</p>
    </div>
</div>

<div class="content-section">
    <h3>Scenario 3: THEME UPDATE BREAKS CUSTOMIZATIONS</h3>
    <p>This is one of the most common crises in Shopify development. A theme update overwrites custom code.</p>
    <div class="warning-box">
        <h4>&#9888;&#65039; NEVER Update the Live Theme Directly</h4>
        <p>This is the #1 cause of this crisis. If someone updates the live theme and it breaks, there may be no easy way to recover the custom code that was overwritten.</p>
    </div>
    <h4>Recovery Protocol:</h4>
    <ol>
        <li><strong>Identify what broke:</strong> Compare the current theme with your backup (you DO have a backup, right?). Use the theme code editor to look for missing custom sections, modified templates, or reset settings.</li>
        <li><strong>Create a new theme duplicate from backup:</strong> If you have a pre-update backup theme, duplicate it. This becomes your recovery base.</li>
        <li><strong>Apply the update to the duplicate:</strong> On the duplicate, carefully apply the theme update. Then re-add your customizations one by one.</li>
        <li><strong>Test thoroughly before publishing:</strong> Run the 60-Point QA Checklist on the recovered theme. Do not publish until every customization is verified.</li>
        <li><strong>Publish the recovered theme:</strong> Only after QA passes, publish the recovered duplicate as the live theme.</li>
    </ol>
    <h4>Prevention (do these BEFORE any update):</h4>
    <ul>
        <li><strong>Always</strong> duplicate the live theme before making any changes</li>
        <li><strong>Always</strong> duplicate before applying a theme update</li>
        <li>Use git version control for all theme code (Shopify CLI supports this)</li>
        <li>Document every customization you make &mdash; which files, what was changed, why</li>
        <li>Keep a "customizations inventory" spreadsheet listing every modification</li>
    </ul>
</div>

<div class="content-section">
    <h3>Scenario 4: CLIENT DATA LOSS</h3>
    <p>Data loss is terrifying, but Shopify has several safety nets. Here is what you need to know:</p>
    <div class="highlight-box">
        <h4>Data Recovery Options</h4>
        <ul>
            <li><strong>Deleted products:</strong> Shopify retains deleted product data for 60 days. Go to Products &rarr; scroll to bottom &rarr; "View deleted products" to restore them.</li>
            <li><strong>CSV exports:</strong> If you exported products, customers, or orders as CSV before the incident, you can re-import them. This is why monthly CSV exports are mandatory.</li>
            <li><strong>Rewind app ($9/month):</strong> Provides automatic daily backups of products, collections, pages, blog posts, theme files, and more. Can restore individual items or entire datasets to any point in time.</li>
            <li><strong>Git version control:</strong> For theme code, git history preserves every version of every file. You can restore any file to any previous state.</li>
            <li><strong>Shopify Support:</strong> For platform-level data issues, contact Shopify Support. They maintain internal backups and can sometimes recover data that is not accessible through the admin.</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>&#9888;&#65039; Prevention Is Always Better Than Recovery</h4>
        <ul>
            <li>Export products, customers, and orders as CSV at least monthly</li>
            <li>Install a backup app (Rewind is the industry standard)</li>
            <li>Use git for all theme code</li>
            <li>NEVER delete data without confirmation from the PM and client</li>
            <li>ALWAYS duplicate themes before editing</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>The Communication Protocol</h3>
    <div class="highlight-box">
        <h4>5 Rules of Crisis Communication</h4>
        <p>How you communicate during a crisis matters as much as how you fix it. Follow these rules without exception:</p>
        <ol>
            <li><strong>Rule 1: Inform PM within 5 minutes of discovering ANY P0/P1 issue.</strong> Do not wait to diagnose. Do not wait to have a solution. The PM needs to know NOW so they can manage the client. Five minutes. Not ten. Not thirty. Five.</li>
            <li><strong>Rule 2: Over-communicate.</strong> Send updates even if you have no new information. "Still investigating, no new findings. Next update in 30 minutes." Silence is terrifying during a crisis. An update that says "no update" is better than no update at all.</li>
            <li><strong>Rule 3: Never hide problems.</strong> Problems that are hidden always get worse. A small bug today becomes a massive crisis tomorrow. If you broke something, say so immediately. Honesty builds trust. Hiding mistakes destroys it.</li>
            <li><strong>Rule 4: Always provide an ETA, even if rough.</strong> "I expect to have this fixed within 2 hours" is infinitely better than "I am working on it." Give a time estimate. If you miss the estimate, send an update with a new one.</li>
            <li><strong>Rule 5: Post-incident documentation within 24 hours.</strong> After the crisis is resolved, write up what happened, why, and how to prevent it. This protects you, educates the team, and shows professionalism.</li>
        </ol>
    </div>
    <h4>Communication Templates</h4>
    <div class="highlight-box">
        <h4>Initial Notification (within 5 minutes)</h4>
        <p><em>"Hi [PM], I have discovered a [P0/P1] issue with [Store Name]. [Brief description of the problem]. I am investigating now and will provide an update within [30 minutes / 1 hour]. Current impact: [what customers are experiencing]."</em></p>
    </div>
    <div class="highlight-box">
        <h4>Progress Update (every 30 minutes for P0, every hour for P1)</h4>
        <p><em>"Update on [Store Name] issue: [What I have found so far]. [What I am trying next]. Estimated resolution: [time estimate]. I will update again in [30 minutes / 1 hour]."</em></p>
    </div>
    <div class="highlight-box">
        <h4>Resolution Notification</h4>
        <p><em>"[Store Name] issue has been resolved. The cause was [root cause]. The fix was [what you did]. I have verified the fix is working correctly. I will send a full post-incident report within 24 hours."</em></p>
    </div>
</div>

<div class="content-section">
    <h3>Post-Incident Review Template</h3>
    <p>Every P0 and P1 incident requires a written post-incident review (also called a postmortem). This document serves three purposes: (1) understand what happened, (2) prevent recurrence, (3) demonstrate professionalism to the client.</p>
    <div class="highlight-box">
        <h4>Post-Incident Review Contents</h4>
        <ol>
            <li><strong>What happened?</strong> A timeline of events from discovery to resolution. Include exact times.
                <ul>
                    <li>10:15 AM &mdash; Issue discovered: [description]</li>
                    <li>10:17 AM &mdash; PM notified</li>
                    <li>10:20 AM &mdash; Investigation began</li>
                    <li>10:45 AM &mdash; Root cause identified</li>
                    <li>11:00 AM &mdash; Fix deployed</li>
                    <li>11:05 AM &mdash; Fix verified, issue resolved</li>
                </ul>
            </li>
            <li><strong>What was the impact?</strong>
                <ul>
                    <li>Duration of the incident (e.g., 50 minutes)</li>
                    <li>Revenue impact estimate (if applicable)</li>
                    <li>Number of customers potentially affected</li>
                    <li>Which pages or features were broken</li>
                </ul>
            </li>
            <li><strong>What was the root cause?</strong> The actual underlying reason, not just the symptoms. "A missing {% endif %} tag in the product template caused a fatal Liquid error" is a root cause. "The product page was broken" is a symptom.</li>
            <li><strong>What did we do to fix it?</strong> Specific actions taken. Code changes, rollbacks, settings changes, app changes.</li>
            <li><strong>What will we do to prevent it in the future?</strong> Concrete prevention steps. Not "be more careful" but "implement pre-publish QA checklist" or "add automated syntax checking."</li>
            <li><strong>Who is responsible for prevention steps?</strong> Assign specific people to specific actions with deadlines.</li>
        </ol>
    </div>
    <div class="warning-box">
        <h4>&#9888;&#65039; Blameless Postmortems</h4>
        <p>The purpose of a post-incident review is to <strong>learn and prevent</strong>, not to blame. If people fear punishment, they will hide problems. Focus on systems and processes, not individuals. "Our process allowed this to happen" is better than "John caused this."</p>
    </div>
</div>

<div class="content-section">
    <h3>Prevention Strategies</h3>
    <div class="highlight-box">
        <h4>The Best Crisis Is the One That Never Happens</h4>
        <p>Most crises are preventable. Follow these practices religiously and you will eliminate 90% of potential emergencies:</p>
        <ul>
            <li><strong>ALWAYS duplicate the theme before editing:</strong> Never edit the live theme directly. Always work on a duplicate. This is your safety net.</li>
            <li><strong>ALWAYS test on a staging/preview theme before publishing:</strong> Run the full QA checklist on the preview. Catch problems before they affect customers.</li>
            <li><strong>Use version control (git) for theme code:</strong> Shopify CLI makes this easy. Every change is tracked. Every change can be reverted.</li>
            <li><strong>Keep CSV exports of products, customers, and orders:</strong> Export at least monthly. Store the files somewhere safe (Google Drive, Dropbox). This is your data insurance policy.</li>
            <li><strong>Monitor site uptime:</strong> Use free tools like UptimeRobot or Better Uptime. Get an alert within 1 minute if the site goes down. Do not wait for the client to tell you.</li>
            <li><strong>Document every change you make:</strong> Keep a change log. Date, what was changed, why, which files. When something breaks, this log tells you exactly what to investigate.</li>
            <li><strong>Test apps on a development store first:</strong> Before installing any app on a client store, test it on a free development store. Check for conflicts, performance impact, and behavior.</li>
            <li><strong>Set up automated monitoring:</strong> Google Search Console for SEO issues, PageSpeed monitoring for performance regressions, uptime monitoring for availability.</li>
        </ul>
    </div>
    <table>
        <thead>
            <tr><th>Prevention Action</th><th>Frequency</th><th>Tool</th><th>What It Prevents</th></tr>
        </thead>
        <tbody>
            <tr><td>Theme backup (duplicate)</td><td>Before every edit session</td><td>Shopify Admin</td><td>Lost customizations, broken themes</td></tr>
            <tr><td>CSV data export</td><td>Monthly</td><td>Shopify Admin &rarr; Export</td><td>Product/customer data loss</td></tr>
            <tr><td>Git commit</td><td>After every meaningful change</td><td>Shopify CLI + Git</td><td>Lost code changes, unable to revert</td></tr>
            <tr><td>Uptime monitoring</td><td>Continuous (automated)</td><td>UptimeRobot (free)</td><td>Undetected downtime</td></tr>
            <tr><td>PageSpeed check</td><td>Weekly</td><td>PageSpeed Insights</td><td>Performance regressions</td></tr>
            <tr><td>App audit</td><td>Monthly</td><td>Manual review</td><td>Unused apps draining performance</td></tr>
            <tr><td>QA checklist</td><td>Before every delivery</td><td>60-Point Checklist</td><td>Bugs reaching production</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Emergency Contacts &amp; Resources</h3>
    <table>
        <thead>
            <tr><th>Situation</th><th>Contact</th><th>How</th><th>Expected Response</th></tr>
        </thead>
        <tbody>
            <tr><td>Shopify platform issue</td><td>Shopify Support</td><td>Live chat in Shopify Admin &rarr; Help</td><td>5-15 minutes for live chat</td></tr>
            <tr><td>Payment gateway down</td><td>Payment provider support</td><td>Provider dashboard or support page</td><td>Varies by provider</td></tr>
            <tr><td>Domain/DNS issue</td><td>Domain registrar support</td><td>Registrar support page</td><td>Varies (can be slow)</td></tr>
            <tr><td>Third-party app issue</td><td>App developer support</td><td>Support link in Shopify App page</td><td>4-24 hours typical</td></tr>
            <tr><td>Internal team escalation</td><td>PM + Team Lead</td><td>Slack/Teams direct message</td><td>Within 15 minutes during business hours</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>&#128295; Hands-On Exercise: Crisis Role-Play</h3>
    <p>For each scenario below, write out your complete response: your notification message, your first 5 actions, and your communication plan. This exercise prepares you for real emergencies.</p>

    <div class="highlight-box">
        <h4>Scenario A: Blank Homepage at 10 PM</h4>
        <p><strong>Situation:</strong> You discover that the live store is showing a completely blank homepage. It is 10 PM on a Tuesday. The store does roughly $3,000/day in revenue.</p>
        <p><strong>Your task:</strong></p>
        <ul>
            <li>Write your notification message to the PM (use the template above)</li>
            <li>List your first 5 diagnostic actions in order</li>
            <li>Describe what you would do if the cause is a Liquid syntax error you introduced earlier today</li>
            <li>Describe what you would do if the cause is a Shopify platform outage</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Scenario B: Customers Cannot Complete Checkout</h4>
        <p><strong>Situation:</strong> A client messages you at 2 PM saying "customers are telling us they cannot buy anything." The store does $150,000/month.</p>
        <p><strong>Your task:</strong></p>
        <ul>
            <li>Calculate the approximate hourly revenue loss</li>
            <li>Write your immediate response to the client (remember: you communicate through the PM, not directly with clients)</li>
            <li>Create a diagnostic checklist: what do you check, in what order?</li>
            <li>Describe how you would handle this if the root cause turns out to be a Shopify Payments outage (outside your control)</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Scenario C: Accidentally Published an Unfinished Theme</h4>
        <p><strong>Situation:</strong> You were working on a redesign on a duplicate theme. You accidentally clicked "Publish" instead of "Preview" and the unfinished theme is now live. Half the pages have placeholder content and broken layouts. It is 3 PM on a weekday.</p>
        <p><strong>Your task:</strong></p>
        <ul>
            <li>Write down your first action (hint: it should take less than 30 seconds)</li>
            <li>Describe how to restore the previous theme immediately</li>
            <li>Write your notification message to the PM</li>
            <li>Describe how long customers may have seen the broken site and how you would estimate the impact</li>
            <li>Write 3 prevention measures you will implement to ensure this never happens again</li>
        </ul>
    </div>

    <div class="warning-box">
        <h4>&#9888;&#65039; Take These Exercises Seriously</h4>
        <p>Crises do not wait for you to be ready. The time to practice your response is NOW, not during a real emergency at 11 PM with a panicked client on the phone. Write out complete, detailed responses for each scenario. Review them. Memorize the protocols. When the real crisis comes (and it will), you will be ready.</p>
    </div>
</div>
`;

const task13Content = `
<h2>📚 TASK 13: AI-POWERED DEVELOPMENT - Using AI Copilots Effectively</h2>

<div class="content-section">
    <h3>🤖 AI is Your Copilot, Not Your Captain</h3>
    <p>AI will write 80% of your code. You must REVIEW 100% of it. This is not optional — it is the rule that separates professional developers from copy-paste coders who ship broken stores.</p>
    <div class="highlight-box">
        <h4>The AI Developer Mindset</h4>
        <ul>
            <li><strong>AI generates:</strong> Boilerplate sections, Liquid loops, CSS, schema JSON, code patterns</li>
            <li><strong>YOU decide:</strong> Architecture, what to build, what NOT to build, how sections interact</li>
            <li><strong>YOU verify:</strong> Every line of AI output against your checklist before deploying</li>
            <li><strong>YOU are responsible:</strong> If AI-generated code breaks the store, it is YOUR fault. Not the AI's.</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>Never Deploy AI-Generated Code Without Review</h4>
        <p>AI can generate code that looks correct but uses deprecated methods, has security issues, performs poorly on mobile, or breaks the theme's visual consistency. Your job is to catch these issues BEFORE they reach the client's store.</p>
    </div>
</div>

<div class="content-section">
    <h3>🛠️ AI Tools for Shopify Development</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How We Use It</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>ChatGPT / Claude</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid code generation, debugging, explanations, schema creation</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paste code + describe issue. Get fixes, sections, schemas instantly.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Antigravity (Google DeepMind)</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Agentic AI that edits entire theme files in-place</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pull theme locally, point Antigravity at it, prompt for changes, push back.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>GitHub Copilot</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-time code completion as you type</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">VS Code plugin. Autocompletes Liquid, CSS, JS as you type.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cursor AI</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full IDE with AI built-in, multi-file editing</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Understands your full theme. Can modify multiple files at once.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Nano Banana</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI product photography and lifestyle images</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Generate professional product shots, flat lays, lifestyle scenes.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Midjourney</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand aesthetic concepts, hero imagery, mood boards</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Generate hero banners, textures, brand mood exploration images.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🎨 The 7-Figure Designer Prompt (Screenshot Analysis)</h3>
    <p>This is your SECRET WEAPON for catching design issues before clients do. Take a screenshot of your store and feed it to AI with this exact prompt:</p>

    <div class="highlight-box">
        <h4>Copy This Exact Prompt:</h4>
        <p><em>"You are a 7-figure ecommerce designer who has designed 1000+ high-converting Shopify stores. Analyze this screenshot of my Shopify store. Be brutally honest.</em></p>
        <p><em>Evaluate:</em></p>
        <ol>
            <li><em>First impression (what do you notice in the first 3 seconds?)</em></li>
            <li><em>Visual hierarchy (is it clear what to click?)</em></li>
            <li><em>Trust elements (do you trust this store?)</em></li>
            <li><em>Mobile-friendliness (how will this look on phone?)</em></li>
            <li><em>Conversion blockers (what would stop someone from buying?)</em></li>
            <li><em>Typography and spacing (is it premium or cheap-looking?)</em></li>
            <li><em>Color usage (does it work for this brand?)</em></li>
        </ol>
        <p><em>Give me 5 specific improvements ranked by impact on sales."</em></p>
    </div>

    <p><strong>How to use the results:</strong></p>
    <ul>
        <li>Take the top 3 suggestions and implement them BEFORE showing the store to the PM or client</li>
        <li>Use this prompt on EVERY page: homepage, product page, collection page, cart page</li>
        <li>Run it on mobile screenshots AND desktop screenshots separately</li>
        <li>Keep a log of AI suggestions and which ones you implemented — this builds your design intuition over time</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 AI Prompts for Shopify Development</h3>
    <p>Here are battle-tested prompts that produce high-quality results. Use these as starting points and customize for your specific needs.</p>

    <h4>Section Creation Prompts</h4>
    <div class="highlight-box">
        <p><strong>Custom Section:</strong> <em>"Create a Shopify 2.0 section for [describe what you need]. The section should be editable from the theme customizer. Include a schema with these editable fields: [list fields]. Use Shopify 2.0 JSON templates. Make it responsive for mobile."</em></p>
    </div>
    <div class="highlight-box">
        <p><strong>Testimonial Slider:</strong> <em>"Create a Shopify section schema for a testimonial slider. Each block should have: customer image (image_picker), customer name (text), review text (richtext), star rating (range, 1-5). Max 6 blocks. Include CSS for a horizontal scroll on mobile and grid on desktop."</em></p>
    </div>

    <h4>Debugging Prompts</h4>
    <div class="highlight-box">
        <p><strong>Code Debug:</strong> <em>"Debug this Liquid code: [paste code]. I am getting [describe the error or unexpected behavior]. The section should [describe expected behavior]. I am using the Dawn theme on Shopify Online Store 2.0."</em></p>
    </div>

    <h4>CSS &amp; JavaScript Prompts</h4>
    <div class="highlight-box">
        <p><strong>Sticky ATC:</strong> <em>"Write CSS for a sticky Add to Cart bar that appears on mobile when the user scrolls past the main ATC button. It should have: product title, price, and an Add to Cart button. Use position: fixed at the bottom. Include a smooth slide-up animation. Make it dismissible."</em></p>
    </div>
    <div class="highlight-box">
        <p><strong>Speed Optimization:</strong> <em>"Optimize this Shopify section for speed: [paste code]. Replace any img_url with image_url. Add loading='lazy' to images below the fold. Minimize DOM elements. Use proper srcset for responsive images."</em></p>
    </div>

    <h4>Schema &amp; Data Prompts</h4>
    <div class="highlight-box">
        <p><strong>Schema Creation:</strong> <em>"Create a Shopify section schema JSON for a [describe section]. Include settings for: [list all fields with types]. Add blocks for repeating content with a limit of [number]. Include a preset with default values."</em></p>
    </div>
    <div class="highlight-box">
        <p><strong>Metafield Access:</strong> <em>"Write Liquid code to display a product metafield called 'custom.ingredients' as a bulleted list. Handle the case where the metafield is empty. Show a fallback message if no ingredients are defined."</em></p>
    </div>
    <div class="highlight-box">
        <p><strong>Product Descriptions:</strong> <em>"Write 3 product descriptions for a premium skincare brand called Luxe Botanica. Products: Vitamin C Serum ($45), Hydra-Glow Moisturizer ($38), Detox Clay Mask ($25). Tone: luxury, science-backed, approachable. Include key ingredients and benefits. 150 words each."</em></p>
    </div>
</div>

<div class="content-section">
    <h3>🔨 Custom Section Creation with AI (Step-by-Step)</h3>
    <p>This is the exact process from our SOP for creating custom sections using AI:</p>

    <h4>The Process</h4>
    <ol>
        <li><strong>Describe What You Need:</strong> Write a clear, detailed prompt (see examples above). Include: what the section does, what fields should be editable, number of blocks, mobile behavior.</li>
        <li><strong>AI Generates Code:</strong> The AI produces a complete .liquid file with HTML, CSS, Liquid logic, and schema JSON.</li>
        <li><strong>Review Against Checklist:</strong> Check the code using the AI Code Review Checklist below. Fix any issues.</li>
        <li><strong>Paste in Sections Folder:</strong> Go to Online Store &gt; Themes &gt; Edit Code &gt; Sections &gt; Add a new section. Name it (e.g., custom-features.liquid). Paste the code and save.</li>
        <li><strong>Test in Customizer:</strong> Go to Customize theme. Your new section should appear in the "Add section" list. Add it, fill in content, verify it renders correctly.</li>
        <li><strong>Test on Mobile:</strong> Use browser dev tools responsive mode (375px width) to verify mobile layout.</li>
    </ol>

    <h4>Where to Paste Code</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Step</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Action</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Path</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Open theme code editor</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Online Store &gt; Themes &gt; [Theme] &gt; Edit Code</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Navigate to Sections folder</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sections/</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create new file</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Click "Add a new section" &gt; name it (e.g., custom-features.liquid)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paste AI-generated code</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delete the boilerplate, paste AI code, click Save</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add section to page</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customize theme &gt; Add section &gt; Your new section appears in the list</td>
            </tr>
        </tbody>
    </table>

    <div class="warning-box">
        <h4>Always Test New Sections</h4>
        <ul>
            <li>NEVER add custom code to the live theme directly — always use a duplicate</li>
            <li>Test on mobile (375px) and desktop (1280px) at minimum</li>
            <li>Check browser console for JavaScript errors (F12 &gt; Console)</li>
            <li>Verify all schema settings work in the customizer</li>
            <li>Test with no content (empty state) — does it break or show gracefully?</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>✅ AI Code Review Checklist</h3>
    <p>Before deploying ANY AI-generated code to a store, run through this ENTIRE checklist. No exceptions.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Uses <code>render</code> not <code>include</code></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>include</code> is deprecated. AI often uses old syntax.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Uses <code>image_url</code> not <code>img_url</code></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>img_url</code> is deprecated. Modern themes use <code>image_url</code>.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money values use <code>| money</code> filter</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hardcoded $ symbols break multi-currency stores.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proper empty state handling ({% if %} checks)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sections must handle missing content gracefully.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schema</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schema JSON is valid (no trailing commas, proper quotes)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Invalid JSON = section will not load at all.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schema</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Has presets defined (so section appears in customizer)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Without presets, the section will not be available to add.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Responsive on mobile (375px width)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+ of traffic is mobile. Test this EVERY time.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Touch targets minimum 44x44px</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Small buttons = frustrated mobile users.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Images use <code>loading="lazy"</code> (below the fold)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lazy loading prevents blocking page load.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Images have proper srcset and sizes attributes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Serves right-sized images for each device.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No hardcoded API keys or external scripts</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI sometimes generates code with placeholder keys. Remove them.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Naming</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Follows theme naming conventions</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom sections should match the existing theme style (e.g., BEM CSS classes).</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(139, 92, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🚀 Antigravity AI: Pull Theme &amp; Edit via Prompts</h3>
    <p><strong>Antigravity</strong> is Google DeepMind's agentic AI coding assistant. It can pull a Shopify theme from Git or Shopify CLI and make edits based on natural language prompts — modifying multiple files at once.</p>

    <h4>The Workflow</h4>
    <ol>
        <li><strong>Pull Theme:</strong> Clone your theme locally or use Shopify CLI</li>
        <li><strong>Set Workspace:</strong> Point Antigravity to the theme folder</li>
        <li><strong>Prompt for Changes:</strong> Describe what you want in natural language</li>
        <li><strong>AI Edits Files:</strong> Antigravity modifies Liquid, CSS, and JS files in-place</li>
        <li><strong>Review Changes:</strong> Check diffs, verify against the code review checklist</li>
        <li><strong>Push Changes:</strong> Commit and push to your development theme</li>
    </ol>

    <h4>Pull Theme Locally</h4>
    <pre><code># Install Shopify CLI (if not installed)
npm install -g @shopify/cli

# Login to your store
shopify auth login --store your-store.myshopify.com

# Pull the live theme
shopify theme pull --theme-id 123456789

# Or pull to a specific folder
shopify theme pull --path ./my-theme</code></pre>

    <h4>Antigravity Prompt Examples</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Prompt</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Antigravity Does</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make the Add to Cart button open a drawer instead of redirecting"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modifies product-form.liquid, adds drawer JS and CSS</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a percentage-off badge when product is on sale"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates/modifies snippet with compare_at_price logic</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a sticky add to cart bar on mobile"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates fixed-position bar with CSS media queries</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a free shipping progress bar to the cart page"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modifies cart section with threshold calculation and progress UI</td>
            </tr>
        </tbody>
    </table>

    <h4>Push Changes Back</h4>
    <pre><code># Preview changes first (opens preview URL)
shopify theme dev

# Push to development theme (NOT live)
shopify theme push --theme-id DEV_THEME_ID

# Commit to Git for version control
git add -A
git commit -m "feat: Cart drawer + sale badge"
git push</code></pre>

    <div class="warning-box">
        <h4>NEVER push AI changes directly to the live theme!</h4>
        <p>Always push to a development theme first. Preview, test on mobile, verify customizer settings work, then publish only after approval.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎨 Branding with AI Tools</h3>
    <p>AI is not just for code. It is a powerful tool for creating brand assets, product photography, and marketing materials. Here is how to use AI tools for the visual side of Shopify stores.</p>

    <h4>Nano Banana: AI Product Photography</h4>
    <p>Nano Banana generates professional product photography that would cost hundreds of dollars per shot with traditional photography. Use it for:</p>
    <ul>
        <li><strong>Lifestyle Shots:</strong> Products on a bathroom vanity, on a bedside table, in someone's hand, in a spa setting</li>
        <li><strong>Flat Lays:</strong> Product + ingredients + textures arranged beautifully on a clean background</li>
        <li><strong>Different Angles:</strong> Front view, 45-degree, side profile, close-up of texture</li>
        <li><strong>Seasonal Variations:</strong> Summer fresh look with botanicals, holiday gift packaging, spring renewal themes</li>
        <li><strong>Social Media Content:</strong> Square crops for Instagram, stories format, before/after layouts</li>
    </ul>
    <div class="highlight-box">
        <h4>Luxe Botanica Nano Banana Examples</h4>
        <ul>
            <li>"Vitamin C serum bottle on white marble surface with orange slices and green leaves, natural sunlight, premium product photography"</li>
            <li>"Skincare flat lay with serum, moisturizer, and cleanser arranged on linen fabric, botanical ingredients scattered around, soft overhead lighting"</li>
            <li>"Woman applying serum to face, close-up of hands and product, bathroom mirror in background, warm golden hour lighting"</li>
        </ul>
    </div>

    <h4>Midjourney: Brand Aesthetic &amp; Hero Imagery</h4>
    <p>Midjourney excels at creating aspirational imagery and brand concepts. Use it for:</p>
    <ul>
        <li><strong>Hero Banner Imagery:</strong> "luxury skincare flat lay on marble, natural lighting, botanical elements, premium brand feel --ar 16:9 --v 6"</li>
        <li><strong>Texture/Pattern Generation:</strong> Create backgrounds, overlays, and decorative elements for the store</li>
        <li><strong>Brand Mood Exploration:</strong> Generate 10 different aesthetic directions and present them to the client for feedback</li>
        <li><strong>Collection Banner Images:</strong> Unique imagery for each product collection page</li>
    </ul>

    <h4>AI for Copywriting &amp; Social Media</h4>
    <ul>
        <li><strong>Product Descriptions:</strong> Use ChatGPT/Claude to write benefit-focused, SEO-optimized descriptions</li>
        <li><strong>Social Media Templates:</strong> Generate Instagram captions, product announcement text, seasonal campaign copy</li>
        <li><strong>Email Marketing:</strong> Welcome sequences, abandoned cart recovery, product launch announcements</li>
        <li><strong>FAQ Content:</strong> Generate comprehensive FAQ answers for common customer questions</li>
    </ul>

    <div class="warning-box">
        <h4>AI Branding Rules</h4>
        <ul>
            <li><strong>Logo Design:</strong> Use AI for INITIAL exploration only. Always finalize logos with a professional designer. AI logos are a starting point, not the final product.</li>
            <li><strong>Product Photos:</strong> If the client has real products, ALWAYS prefer real photography. AI photos are for mockups, placeholders, and supplementary content.</li>
            <li><strong>Brand Consistency:</strong> Once a brand direction is chosen, create a reference folder of approved AI images to maintain consistency across all generated content.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>💡 When AI Saves Time vs. Wastes Time</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI Saves Time (Use It)</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI Wastes Time (Do It Yourself)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Boilerplate section code with schema</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex business logic and checkout customizations</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple Liquid loops and conditionals</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme architecture decisions (which sections, what order)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS tweaks and responsive adjustments</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Debugging complex multi-file interaction bugs</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product descriptions and marketing copy</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client communication and project scoping</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schema JSON with many settings</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance optimization strategy</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product photography and lifestyle images</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Final brand identity and logo design</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>What You CAN Build with Custom Sections</h3>
    <div class="highlight-box">
        <h4>Shopify Custom Section Possibilities</h4>
        <ul>
            <li><strong>Any visual section with editable fields:</strong> Hero banners, feature grids, testimonials, FAQ accordions, image galleries, comparison tables, countdown timers, newsletter signup forms</li>
            <li><strong>Sections that need JavaScript:</strong> Dynamic content loading, animations, interactive elements like sliders and accordions, variant selectors, countdown timers with real-time updates</li>
            <li><strong>What needs apps:</strong> Third-party integrations (reviews, email marketing), subscription management, advanced search and filtering, loyalty programs</li>
        </ul>
        <p><strong>Rule:</strong> Start simple, add complexity only when needed. A static section that works is better than a dynamic section that breaks.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🔧 Hands-On Exercise: AI-Powered Development</h3>
    <p>Complete all steps below using your Luxe Botanica dev store.</p>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Step 1: Generate a Custom Testimonials Section</h4>
        <p>Use ChatGPT or Claude to generate a custom testimonials section with schema. Each block should have: customer image (image_picker), customer name (text), star rating (range 1-5), review text (richtext). The section should have a heading setting and max 6 blocks.</p>

        <h4 style="color: #818CF8;">Step 2: Review the Code Against the Checklist</h4>
        <p>Go through the entire AI Code Review Checklist above. Check for deprecated tags, valid JSON schema, mobile responsiveness, lazy loading, and empty state handling. Fix any issues.</p>

        <h4 style="color: #818CF8;">Step 3: Add to Dev Store and Test</h4>
        <p>Paste the section into your duplicated theme's /sections folder. Open the customizer, add the section, fill in content, and verify it works on desktop and mobile.</p>

        <h4 style="color: #818CF8;">Step 4: Generate Product Photography with AI</h4>
        <p>Use Nano Banana (or your preferred AI image tool) to generate 5 product shots for the Luxe Botanica Vitamin C Serum:</p>
        <ul>
            <li>Hero product shot on white background</li>
            <li>Lifestyle shot on bathroom vanity</li>
            <li>Flat lay with ingredients (oranges, botanical elements)</li>
            <li>Close-up of serum texture / dropper</li>
            <li>Product in use (model applying to face)</li>
        </ul>

        <h4 style="color: #818CF8;">Step 5: Generate a Hero Banner Concept</h4>
        <p>Use Midjourney or a similar tool to generate a hero banner image for the Luxe Botanica homepage. Try this prompt: "luxury botanical skincare products arranged on marble surface, soft natural lighting, green leaves, premium feel, warm tones --ar 16:9"</p>

        <h4 style="color: #818CF8;">Step 6: AI-Generated Product Descriptions</h4>
        <p>Use ChatGPT or Claude to write benefit-focused product descriptions for 3 Luxe Botanica products. Each should be 100-150 words, include key ingredients, highlight benefits, and have a luxury tone. Update your dev store products with the new descriptions.</p>
    </div>
</div>

<div class="content-section">
    <h3>Developer Tools &amp; Hacks</h3>
    <p>These tools give you an edge. Know them, use them, deliver faster and better than the competition. Work smarter, not harder.</p>

    <h4>Shopify Theme Development Tools</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pro Tip</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify CLI</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Local theme development with hot reload</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use shopify theme dev for live preview while coding locally</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Theme Check</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Linter for Liquid code</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Run before every commit to catch errors and deprecated patterns</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>VS Code Liquid Extension</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Syntax highlighting, autocomplete for Liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install Shopify's official extension for the best experience</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Liquid Cheat Sheet</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quick reference for all Liquid syntax</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bookmark shopify.github.io/liquid/ - use it daily</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Dawn Theme (Reference)</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify's official 2.0 reference theme</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Study its section structure for best practices</td>
            </tr>
        </tbody>
    </table>

    <h4>Speed &amp; Performance Tools</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Case</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target / Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>PageSpeed Insights</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile/Desktop performance scores</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile 70+, Desktop 90+</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>GTmetrix</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Detailed waterfall analysis</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Find the largest files to optimize first</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>TinyPNG</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Compress images before upload</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reduces images 50-80% without visible quality loss</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Squoosh</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Convert images to WebP format</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WebP is 30% smaller than JPEG</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Chrome DevTools Lighthouse</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Accessibility, SEO, performance audits</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Run in incognito to avoid extension interference</td>
            </tr>
        </tbody>
    </table>

    <h4>Browser Extensions for Shopify Development</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Extension</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify Theme Inspector</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">See which Liquid files render each section - essential for debugging</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Wappalyzer</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Detect tech stack of any website (great for competitor research)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>ColorZilla</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pick colors from any webpage for matching client brand colors</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Fonts Ninja</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Identify fonts used on any site (useful for reference stores)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WhatRuns</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">See apps, analytics, and tools other Shopify sites use</td>
            </tr>
        </tbody>
    </table>

    <h4>Productivity Hacks</h4>
    <div class="highlight-box">
        <h4>Time-Saving Shortcuts Every Developer Should Know</h4>
        <ul>
            <li><strong>Emmet:</strong> Type div.class&gt;ul&gt;li*5 and hit Tab for instant HTML scaffolding in VS Code</li>
            <li><strong>Multi-cursor:</strong> Ctrl+D (Cmd+D on Mac) to select multiple instances and edit all at once</li>
            <li><strong>Snippet Library:</strong> Save reusable code blocks in VS Code User Snippets for instant access</li>
            <li><strong>Terminal Aliases:</strong> Create shortcuts like "themedev" for "shopify theme dev" to speed up your workflow</li>
            <li><strong>Git Branches:</strong> Always work in a feature branch, never directly on main</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about AI tools, code review, branding, and development workflow</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to the final task</li>
        <li>💡 Focus on the AI Code Review Checklist — many quiz questions come from there</li>
    </ul>
</div>
`;

const task18Content = `
<h2>📚 TASK 18: CAREER GROWTH &amp; FINAL EXAM - Your Path to Senior Developer</h2>

<div class="content-section">
    <h3>📊 Developer KPIs — How We Measure Your Performance</h3>
    <p>At Digital Heroes, your performance is measured by concrete, measurable KPIs. These are not suggestions — they are the standards you will be evaluated against on every project.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">KPI</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How It Is Measured</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mobile PageSpeed</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">85+</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direct impact on conversions. Every 1-second delay = 7% fewer sales.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google PageSpeed Insights mobile score</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>QA Pass Rate</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">95%+</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fewer bugs = fewer fires = fewer panic calls from PMs.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA checklist items passing on first review</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bug-Free Delivery</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Less than 2 bugs per project</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Builds client trust. Bugs after launch destroy credibility.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bugs reported within 48 hours of handoff</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>On-Time Delivery</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional reliability. Late delivery = broken client trust = lost future work.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deliverables submitted by agreed deadline</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Satisfaction</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.9 out of 5 stars</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reputation is everything in this business. Happy clients = referrals = growth.</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Post-project client feedback score</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>How to Hit These KPIs Consistently</h4>
        <ul>
            <li><strong>PageSpeed 85+:</strong> Optimize images (WebP, lazy loading), minimize apps, defer non-critical scripts, use system fonts when possible</li>
            <li><strong>QA 95%+:</strong> Test EVERY page on mobile before submitting. Run the 60-point QA checklist. Check console for errors.</li>
            <li><strong>Bug-Free:</strong> Preview on multiple devices, test all variants, verify checkout flow, test with and without content</li>
            <li><strong>On-Time:</strong> Break tasks into small chunks. Communicate blockers EARLY. Never promise what you cannot deliver.</li>
            <li><strong>Client 4.9:</strong> Over-communicate progress. Deliver polished work. Anticipate what they will ask next.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>💰 CRO Guide — 5 Psychological Conversion Triggers</h3>
    <p>Your code MUST sell. A beautiful store that does not convert is a failed store. Every development decision should answer: <strong>"Will this help visitors buy?"</strong> Average ecommerce conversion rate is 2-3%. Premium stores we build target 3.5-5%+.</p>

    <h4>1. TRUST — People Buy From Brands They Trust</h4>
    <ul>
        <li>Professional design (no amateur vibes — clean typography, consistent spacing, quality images)</li>
        <li>SSL certificate visible (HTTPS padlock in browser)</li>
        <li>Payment security badges (Visa, Mastercard, Shop Pay, PayPal logos)</li>
        <li>Customer reviews with real photos</li>
        <li>Clear return/refund policy (linked in footer and product page)</li>
        <li>Real contact information (email, phone, physical address if applicable)</li>
        <li>"As Seen In" logos if the brand has press coverage</li>
    </ul>

    <h4>2. URGENCY — Create FOMO (Fear of Missing Out)</h4>
    <ul>
        <li>Limited stock indicators ("Only 3 left in stock!")</li>
        <li>Sale countdown timers (use sparingly and honestly)</li>
        <li>Limited-time offers with clear end dates</li>
        <li>"Selling fast" badges on popular products</li>
        <li>Shipping deadline messaging ("Order within 2 hours for same-day dispatch")</li>
    </ul>

    <h4>3. SOCIAL PROOF — Show Others Are Buying and Loving It</h4>
    <ul>
        <li>Star ratings on product cards and product pages</li>
        <li>Review count prominently displayed ("Based on 127 reviews")</li>
        <li>Customer photos in reviews (User Generated Content)</li>
        <li>UGC gallery on homepage or product pages</li>
        <li>Instagram feed with real customer content</li>
    </ul>

    <h4>4. VALUE — Make the Deal Irresistible</h4>
    <ul>
        <li>Free shipping threshold visible on every page ("Free shipping on orders $50+")</li>
        <li>Bundle deals ("Buy 2 Get 1 Free" or "Complete Routine Set — Save 20%")</li>
        <li>Compare-at pricing (show the original price crossed out with savings visible)</li>
        <li>Gift with purchase for orders over a threshold</li>
        <li>First-order discount popup ("Get 10% off your first order")</li>
    </ul>

    <h4>5. EASE — Remove ALL Friction From Buying</h4>
    <ul>
        <li>One-page checkout (Shopify default — do not add unnecessary steps)</li>
        <li>Guest checkout enabled (never force account creation)</li>
        <li>Multiple payment options (Shop Pay, Apple Pay, Google Pay, PayPal, credit cards)</li>
        <li>Auto-fill addresses for returning customers</li>
        <li>Clear shipping costs shown BEFORE checkout (no surprises)</li>
        <li>Express checkout buttons visible on product pages and cart</li>
    </ul>
</div>

<div class="content-section">
    <h3>Above-the-Fold Conversion Checklist</h3>
    <div class="warning-box">
        <h4>Users Decide in 3-5 Seconds</h4>
        <p>If visitors cannot understand what you sell and why they should buy within 3-5 seconds of landing on the page — they LEAVE. Everything important must be visible WITHOUT scrolling.</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Implementation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Clear Value Proposition</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tells the visitor exactly what you sell and why it matters</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">H1 headline: "Premium [Product] for [Benefit]" — 7 words maximum</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hero Image</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shows the product in action or creates aspiration</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High-quality lifestyle shot (not just a product on white background)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Primary CTA</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tells them what to do next</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shop Now" button in high-contrast color, above the fold</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust Bar</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reduces anxiety immediately</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free shipping | Easy returns | Secure payment icons</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Announcement Bar</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Highlights the current offer</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Current promotion or free shipping threshold</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Social Proof</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shows others trust and love the brand</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Loved by 2,000+ customers" with star rating visible</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🌱 The Developer Career Path</h3>
    <p>Here is the specific progression from junior to expert at Digital Heroes, with concrete milestones and KPI targets for each level.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skills Required</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">KPI Targets</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Junior Developer</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0-6 months</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme customizer mastery, basic CSS modifications, simple Liquid edits, app installations, following QA checklists</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed 80+, on-time delivery, complete QA checklist every time</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mid-Level Developer</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6-12 months</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom sections with schemas, JavaScript functionality, speed optimization, debugging complex issues, AI-assisted development</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed 85+, QA pass rate 90%+, under 3 bugs per project</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Senior Developer</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 years</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex Liquid logic, app integrations and API work, mentoring junior devs, performance audits, CRO implementation</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed 90+, QA pass rate 95%+, client satisfaction 4.9+</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Expert / Lead</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2+ years</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Headless Shopify (Hydrogen), system design, team leadership, client communication, project architecture decisions</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead projects end-to-end, mentor team, consistent 5-star delivery</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📅 The Learning Path — Week by Week</h3>
    <p>This is the recommended progression based on our SOP. Follow this sequence to build skills in the right order.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Period</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus Area</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What You Should Be Able to Do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 1-2</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Master the theme customizer (no code)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set up a complete store using only the visual customizer. Add all 12 sections, configure settings, upload images.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 3-4</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Learn basic CSS modifications</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Override colors, fonts, spacing. Create a custom CSS file. Use browser dev tools to inspect elements.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 5-8</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Understand Liquid basics (objects, tags, filters)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Read and understand existing section code. Modify Liquid templates. Use forloops, if/else, and common filters.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 3</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build custom sections with AI help</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use ChatGPT/Claude to generate sections. Review code, test, and deploy. Build 5+ custom sections.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 4</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Learn section schemas in depth</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Write schemas from scratch. Understand all setting types. Create sections with multiple block types.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 5-6</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed optimization and JavaScript</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Optimize images, defer scripts, implement lazy loading. Add interactive features with JavaScript.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 6+</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Advanced: App integrations, APIs, mentoring</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Integrate third-party apps, use Shopify APIs, start mentoring newer team members.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📂 Portfolio Building Guide</h3>
    <p>Your Luxe Botanica store is your FIRST portfolio piece. A strong portfolio is how you prove your skills and advance your career.</p>

    <h4>Documenting Your Luxe Botanica Case Study</h4>
    <ol>
        <li><strong>Project Overview:</strong> What was the project? (Training store for a premium skincare brand)</li>
        <li><strong>Before/After Screenshots:</strong> Show the default Dawn theme vs. your customized version. Mobile AND desktop.</li>
        <li><strong>Performance Scores:</strong> Screenshot of PageSpeed Insights showing your mobile and desktop scores.</li>
        <li><strong>Technical Details:</strong> What custom sections did you build? What optimizations did you apply? What tools did you use?</li>
        <li><strong>Challenges and Solutions:</strong> What problems did you encounter and how did you solve them?</li>
        <li><strong>Results:</strong> Page load time, PageSpeed score, number of custom sections, features implemented.</li>
    </ol>

    <div class="highlight-box">
        <h4>Portfolio Tips</h4>
        <ul>
            <li><strong>3-5 case studies = credible portfolio.</strong> Start with Luxe Botanica, then document every real project.</li>
            <li><strong>Show the PROCESS, not just the result.</strong> Clients want to see how you think, not just what you built.</li>
            <li><strong>Include performance metrics.</strong> PageSpeed scores, load times, and conversion improvements are more impressive than pretty screenshots.</li>
            <li><strong>Keep it updated.</strong> Add new projects quarterly. Remove older, weaker projects as you grow.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📚 Free Official Shopify Resources</h3>
    <p>These are the resources from our SOP that every developer should bookmark and reference regularly. All of them are free.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Resource</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">URL</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What You Will Find</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Liquid Reference</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">shopify.dev/docs/api/liquid</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete Liquid documentation — objects, tags, filters. Your daily reference.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Theme Architecture</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">shopify.dev/docs/themes/architecture</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How themes work: layouts, templates, sections, snippets, assets.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Section Schemas</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">shopify.dev/docs/themes/architecture/sections/section-schema</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete schema reference — all setting types, blocks, presets.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Dawn Theme (Reference)</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">github.com/Shopify/dawn</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify's official reference theme. Study this code to learn best practices.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Getting Started Guide</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">shopify.dev/docs/themes/getting-started</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Step-by-step tutorials for building your first theme.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify Community</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">community.shopify.com</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Forums for asking questions, finding solutions, networking with other devs.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🏆 Skills to Develop Next</h3>
    <p>Once you have mastered the fundamentals covered in this training, here is what to learn next to advance from mid-level to senior and beyond.</p>
    <div class="highlight-box">
        <h4>Advanced Skills Roadmap</h4>
        <ul>
            <li><strong>Headless Shopify (Hydrogen + Remix):</strong> Build custom storefronts decoupled from the theme engine. This is the future of Shopify development for high-end clients.</li>
            <li><strong>Shopify Functions:</strong> Custom backend logic for discounts, shipping rules, and checkout customization. Replaces script editor.</li>
            <li><strong>App Development:</strong> Build custom Shopify apps using Remix, Node.js, and the Shopify API. This opens up freelance and SaaS opportunities.</li>
            <li><strong>Advanced JavaScript/TypeScript:</strong> Web Components, async operations, state management. Essential for interactive store features.</li>
            <li><strong>GraphQL API Mastery:</strong> Shopify's Storefront API and Admin API both use GraphQL. Learn to query and mutate store data programmatically.</li>
            <li><strong>Accessibility (a11y):</strong> WCAG compliance, ARIA labels, keyboard navigation. Increasingly required for enterprise clients.</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🔧 Hands-On Final Exercise: Complete Luxe Botanica Review</h3>
    <p>This is your final exercise. It brings together everything you have learned across all 14 tasks.</p>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Step 1: Full Store Review</h4>
        <p>Open your Luxe Botanica development store. Review every page: homepage, product pages, collection pages, cart, about page. Is everything polished? Are there any broken sections, missing images, or layout issues?</p>

        <h4 style="color: #818CF8;">Step 2: Run the 60-Point QA Checklist</h4>
        <p>Go through the complete QA checklist from Task 11 one final time. Fix any issues that remain. Your goal is a 100% pass rate.</p>

        <h4 style="color: #818CF8;">Step 3: Run PageSpeed Insights</h4>
        <p>Go to pagespeed.web.dev and test your store's homepage on mobile. Screenshot the results. Target: 85+ mobile, 90+ desktop. If scores are below target, revisit Task 7 (Speed Optimization) and apply the techniques.</p>

        <h4 style="color: #818CF8;">Step 4: Create Your Portfolio Case Study</h4>
        <p>Create a document (Google Docs, Notion, or similar) with the following for Luxe Botanica:</p>
        <ul>
            <li>Project overview (1 paragraph)</li>
            <li>Before/after screenshots (homepage, product page — mobile and desktop)</li>
            <li>PageSpeed scores (screenshot)</li>
            <li>Technical details (custom sections built, optimizations applied, tools used)</li>
            <li>Challenges and how you solved them</li>
            <li>Key learnings</li>
        </ul>

        <h4 style="color: #818CF8;">Step 5: Write Your Training Summary</h4>
        <p>Write a 1-page summary of what you learned across all 14 tasks. Include:</p>
        <ul>
            <li>Your biggest "aha moment" during the training</li>
            <li>Which task was the most challenging and why</li>
            <li>Which skills you feel most confident in now</li>
            <li>Which areas you want to improve further</li>
            <li>How you plan to apply these skills on real client projects</li>
        </ul>

        <h4 style="color: #818CF8;">Step 6: Earn Your Digital Heroes Developer Certificate!</h4>
        <p>To receive your certificate, you must:</p>
        <ul>
            <li>Complete all 14 training tasks with 100% quiz scores</li>
            <li>Pass the final comprehensive exam</li>
            <li>Submit your Luxe Botanica case study</li>
            <li>Submit your training summary</li>
        </ul>
        <p><strong>Congratulations on completing the Digital Heroes Shopify Developer Training Program!</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>🎓 Final Certification Requirements</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirement</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Details</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete all 14 training tasks</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Score 100% on every quiz</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check your progress above</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pass the Final Comprehensive Exam</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25 questions covering all topics from the entire program</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Available after completing all tasks</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Submit Luxe Botanica case study</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Screenshots, performance scores, technical details</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Submit to your manager</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Submit training summary</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-page reflection on your learning journey</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Submit to your manager</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>What Happens After Certification</h4>
        <p>After earning your Digital Heroes Developer Certificate, you will:</p>
        <ul>
            <li>Be assigned to real client projects with guidance from a senior developer</li>
            <li>Start building your professional portfolio with live stores</li>
            <li>Have weekly code reviews to accelerate your growth</li>
            <li>Begin the path toward mid-level developer within 6 months</li>
        </ul>
        <p><strong>Remember: every line of code you write touches money. Every decision you make impacts a real business. Code with purpose. Build with pride. Welcome to the team.</strong></p>
    </div>
</div>
`;


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
    { q: "Essential Filters: {{ product.price | money }} is important because:", o: ["money filter formats the price according to store currency settings — without it you get raw cents (1999 instead of $19.99)", "It converts currency to Bitcoin — this reflects the standard operating procedure most organizations follow", "It rounds the price to the nearest dollar — this reflects the standard operating procedure most organizations follow", "It hides the price from customers — this reflects the standard operating procedure most organizations follow"], c: 0 },
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


const task12Quiz = [
    { q: "The store goes down at 5 PM during a flash sale with $20,000/hour in revenue. First action:", o: ["Check Shopify Status page → if Shopify is up, check recent changes → rollback last deployment immediately", "Email the team about the issue — this reflects the standard operating procedure most organizations follow", "Wait 5 minutes to see if it resolves — intervening too early often creates more problems than the original issue", "Contact Shopify support and wait for response"], c: 0 },
    { q: "Critical bug in production: The 'Add to Cart' button doesn't work. Timeline to fix:", o: ["Next business day — it's after hours", "When the developer is available — this reflects the standard operating procedure most organizations follow", "Within 4 hours — standard SLA — this reflects the standard operating procedure most organizations follow", "IMMEDIATELY — every minute this is broken, real revenue is lost, treat as P0 emergency"], c: 3 },
    { q: "Post-incident review (postmortem) matters because:", o: ["Management requires documentation — this reflects the standard operating procedure most organizations follow", "It assigns blame to prevent future mistakes — this reflects the standard operating procedure most organizations follow", "Understanding root cause prevents recurrence — without learning from failures, you fight the same fires repeatedly", "It's an optional step for minor incidents — taking this route minimizes risk while still delivering professional-grade results to stakeholders"], c: 2 },
    { q: "Version control crisis: Someone overwrote the production theme with an old version. Recovery:", o: ["There's no way to recover lost code — this ensures compliance with professional standards and prevents cascading issues downstream", "Contact Shopify to restore the previous version", "Rewrite all the code from memory — this reflects the standard operating procedure most organizations follow", "Shopify keeps theme backups — restore from backup, or use Git history if version control was set up properly"], c: 3 },
    { q: "A new feature causes checkout conversion to drop 40%. The correct response:", o: ["Monitor for a week to confirm the trend — experienced professionals recognize this as the most reliable path for maintaining quality control", "Check if it's a seasonal trend — this reflects the standard operating procedure most organizations follow", "A/B test the new feature first — this reflects the standard operating procedure most organizations follow", "Rollback IMMEDIATELY — investigate AFTER restoring the previous working version, 40% drop means massive revenue loss"], c: 3 },
    { q: "DNS propagation issue: Domain changed but some users see the old site. You should:", o: ["Force reset all DNS caches globally — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Explain that DNS takes 24-48 hours to propagate worldwide — communicate the timeline and that this is normal behavior", "Keep changing DNS settings until it works — this reflects the standard operating procedure most organizations follow", "Tell affected users to clear their browser cache"], c: 1 },
    { q: "SSL certificate error 'Your connection is not private' — impact:", o: ["Minor — users can click 'proceed anyway'", "Most users leave immediately — SSL errors signal 'this site is dangerous' and browsers discourage staying", "Affects SEO rankings but not user behavior — research supports this methodology as the most effective for achieving measurable improvements", "A concern for payment pages but not product pages"], c: 1 },
    { q: "Multiple developers working on the same theme without Git:", o: ["Works fine if they communicate via Slack — applying this principle consistently across all projects builds a reputation for professional excellence", "Acceptable for small teams of 2-3 developers — this reflects the standard operating procedure most organizations follow", "Shopify Online Editor handles version control", "A recipe for overwritten code, lost changes, and deployment conflicts — Git is mandatory for team development"], c: 3 },
    { q: "The crisis management communication rule for developers is:", o: ["Don't communicate until you have a solution — this reflects the standard operating procedure most organizations follow", "Route all communication through the PM — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Over-communicate — stakeholders fear uncertainty more than bad news, regular updates reduce anxiety during incidents", "Send one update when the crisis is resolved — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Monitoring and alerting: Setting up uptime monitoring for a Shopify store is:", o: ["Unnecessary — Shopify handles all server monitoring", "Only needed for Shopify Plus stores with custom infrastructure", "Essential — external monitoring catches downtime before customers complain, enabling faster response and minimizing revenue loss", "A nice-to-have that can be added after launch when there's time"], c: 2 }
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

const task18Quiz = [
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



// =============================================================================
// TASKS 14-16: STORE DESIGN & CUSTOMIZATION (NEW)
// =============================================================================

// Shopify Developer Training - Design & Customization Tasks (14, 15, 16)


const task14Content = `
<h2>🎨 TASK 14: STORE DESIGN FUNDAMENTALS — Color, Typography & Visual Hierarchy</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">🚀 Why Design Is YOUR Responsibility</h3>
    <p>As a Shopify developer at Digital Heroes, you are NOT just writing code. You are building <strong>revenue machines</strong>. And design is the single biggest factor that determines whether a visitor stays or bounces.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <strong style="color: #F472B6;">📊 The Data That Should Scare You:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li><strong>94%</strong> of first impressions are design-related (not content, not price — DESIGN)</li>
            <li><strong>75%</strong> of users judge a company's credibility based on visual design alone</li>
            <li><strong>38%</strong> of visitors will stop engaging if the layout or content is unattractive</li>
            <li><strong>88%</strong> of online consumers are less likely to return after a bad experience</li>
            <li>It takes <strong>0.05 seconds</strong> (50 milliseconds) for users to form an opinion about your site</li>
        </ul>
    </div>

    <div class="warning-box">
        <strong>⚠️ The DH Standard:</strong><br>
        Every store we deliver must look like it was designed by a premium agency — because it WAS. If a client could have done it themselves with the Shopify customizer, we have failed. Our stores must feel <strong>custom, polished, and conversion-focused</strong> from the first pixel.
    </div>
</div>

<!-- COLOR THEORY FOR E-COMMERCE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🎨 Color Theory for E-Commerce</h3>
    <p>Color is not decoration — it is a <strong>psychological weapon</strong>. Every color triggers emotional responses that directly influence buying decisions. Understanding color theory is not optional for a DH developer.</p>

    <h4 style="color: #93C5FD;">Psychology of Colors in E-Commerce</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Color</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Emotion / Association</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example Brands</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">&#9632;</span> <strong>Red</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgency, excitement, passion, energy</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sale buttons, clearance, food & beverage, impulse buys</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Coca-Cola, Netflix, YouTube</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #3B82F6;">&#9632;</span> <strong>Blue</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust, security, professionalism, calm</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tech, finance, healthcare, B2B, supplements</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PayPal, Samsung, Facebook</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #22C55E;">&#9632;</span> <strong>Green</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Nature, health, growth, money, sustainability</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Organic products, wellness, eco-friendly brands</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Whole Foods, Shopify, Starbucks</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;">&#9632;</span> <strong>Orange</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Warmth, confidence, friendliness, action</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CTAs, Add to Cart buttons, kids' products</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Amazon (Buy button), Etsy, Fanta</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #8B5CF6;">&#9632;</span> <strong>Purple</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury, creativity, royalty, spirituality</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Premium brands, beauty, creative services</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cadbury, Hallmark, Twitch</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #111827;">&#9632;</span> <strong>Black</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Elegance, power, sophistication, exclusivity</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury fashion, high-end products, minimalist brands</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chanel, Nike, Apple</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #F472B6;">&#9632;</span> <strong>Pink</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Femininity, romance, playfulness, youth</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Beauty, skincare, women-focused brands</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Victoria's Secret, Barbie, Glossier</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #93C5FD;">Building a Color Palette for Any Shopify Store</h4>
    <p>Every store needs exactly <strong>5 color roles</strong>. This is non-negotiable:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Role</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Usage %</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example (Luxury Skincare)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Primary</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand identity color — header, footer, key elements</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">60%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>#1A1A2E</code> (Deep Navy)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Accent</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Supporting brand color — highlights, hover states</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>#C9A96E</code> (Warm Gold)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Neutral</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Backgrounds, borders, subtle UI</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>#F5F5F0</code> (Warm White)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CTA</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buttons that SELL — Add to Cart, Shop Now, Buy</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>#D4A574</code> (Rose Gold CTA)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Text</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Body text, headings</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">N/A</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>#333333</code> (Dark Gray — never pure black)</td>
            </tr>
        </tbody>
    </table>

    <div class="warning-box">
        <strong>⚠️ CRITICAL COLOR RULES:</strong>
        <ul>
            <li><strong>Never use pure black (#000000) for body text.</strong> Use #333333 or #1A1A1A — pure black creates harsh contrast that causes eye strain.</li>
            <li><strong>CTA color must be DIFFERENT from the primary brand color.</strong> If the brand is blue, the Add to Cart button cannot be blue — it blends in. Use orange, green, or a contrasting color.</li>
            <li><strong>Never use more than 3-4 colors maximum.</strong> More colors = amateur, chaotic look.</li>
            <li><strong>Test colors on MOBILE.</strong> Colors render differently on phone screens vs monitors.</li>
        </ul>
    </div>
</div>

<!-- DH STANDARD COLOR SYSTEM -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 DH Standard Color System for Client Projects</h3>
    <p>When a client does NOT have existing brand guidelines, or their brand colors are poorly defined, Digital Heroes uses a systematic approach to create a professional palette:</p>

    <h4 style="color: #C4B5FD;">Step 1: Ask the Client These 3 Questions</h4>
    <ol>
        <li><strong>"What 3 words describe your brand?"</strong> (e.g., luxurious, natural, bold)</li>
        <li><strong>"Who is your target customer?"</strong> (age, gender, lifestyle)</li>
        <li><strong>"Name 2-3 competitor brands you admire visually."</strong></li>
    </ol>

    <h4 style="color: #C4B5FD;">Step 2: Apply the DH Palette Formula</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand Personality</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Primary</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Accent</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CTA</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Background</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Luxury / Premium</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#1A1A2E or #0D0D0D</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#C9A96E (Gold)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#C9A96E or #FFFFFF</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#FAFAFA</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Natural / Organic</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#2D5016 (Forest)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#A8C686 (Sage)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#D4772C (Warm Amber)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#F5F1EB (Warm Cream)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Modern / Tech</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#0F172A (Slate)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#3B82F6 (Bright Blue)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#22C55E (Green)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#FFFFFF</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Playful / Youth</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#7C3AED (Violet)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#F472B6 (Pink)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#FBBF24 (Yellow)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#FFF7ED (Warm White)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bold / Athletic</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#111111 (Near Black)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#EF4444 (Red)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#F97316 (Orange)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#FAFAFA</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">💡 Pro Tip — The Contrast Ratio Test:</strong>
        <p style="margin: 10px 0 0 0;">Every color combination must pass <strong>WCAG AA contrast ratio (4.5:1 for text, 3:1 for large text)</strong>. Use <code>webaim.org/resources/contrastchecker</code> to verify. If a client insists on light gray text on white background, show them the data: low contrast = unreadable = lost sales.</p>
    </div>
</div>

<!-- TYPOGRAPHY -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔤 Typography — The Silent Salesperson</h3>
    <p>Typography accounts for <strong>95% of web design</strong>. The right font pairing makes a store feel premium. The wrong one makes it feel like a scam site from 2005.</p>

    <h4 style="color: #6EE7B7;">Font Pairing Rules (DH Standard)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rule</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Max 2 fonts per store</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">One for headings, one for body. NEVER use 3+ fonts — it looks chaotic and hurts load speed.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Contrast in style</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pair a serif heading with a sans-serif body (or vice versa). Never pair two similar fonts.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Body font: 16px minimum</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Anything below 16px is unreadable on mobile. Our standard is 16-18px body text.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Line height: 1.5-1.7</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">For body text. Headings can use 1.1-1.3. Tight line height = wall of text = no one reads.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Letter spacing for headings</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Uppercase headings need <code>letter-spacing: 0.05em-0.1em</code>. Without it, letters feel cramped.</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #6EE7B7;">DH Approved Font Pairings</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand Style</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Heading Font</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Body Font</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Luxury</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Playfair Display</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assistant / Work Sans</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Classic serif + clean sans-serif. Timeless.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Modern</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inter / Poppins</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inter / DM Sans</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All sans-serif for tech/modern feel.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Organic / Natural</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cormorant Garamond</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lato / Nunito Sans</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Elegant serif + soft, rounded sans-serif.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bold / Athletic</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Oswald / Bebas Neue</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Source Sans Pro</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Condensed heading + readable body.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Minimalist</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Helvetica Neue / Arial</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Helvetica Neue / Arial</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">System fonts = zero load time. Use for speed-critical stores.</td>
            </tr>
        </tbody>
    </table>

    <div class="warning-box">
        <strong>⚠️ Google Fonts vs Shopify Fonts — SPEED WARNING:</strong>
        <ul>
            <li><strong>Shopify's built-in font library</strong> is loaded from Shopify CDN — fast and reliable. Always prefer these.</li>
            <li><strong>Google Fonts</strong> add an external HTTP request that can add 200-500ms to load time. If you MUST use Google Fonts, self-host them using <code>@font-face</code> declarations in <code>base.css</code>.</li>
            <li><strong>Never load more than 2 font weights per font.</strong> e.g., Regular (400) + Bold (700) for body. Adding Light, Medium, SemiBold, ExtraBold kills page speed.</li>
        </ul>
    </div>
</div>

<!-- SPACING & LAYOUT -->
<div class="content-section">
    <h3>📐 Spacing & Layout — The 8px Grid System</h3>
    <p>Spacing is what separates amateur design from professional design. Inconsistent spacing is the #1 sign of a rushed build. At Digital Heroes, we use the <strong>8px grid system</strong> universally.</p>

    <h4>The 8px Grid System</h4>
    <p>All spacing values must be multiples of 8. This creates a mathematical rhythm that the human eye subconsciously perceives as "clean" and "professional".</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Token</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Value</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-xs</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tight gaps — icon to text, badge padding</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-sm</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Small gaps — between form fields, list items</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-md</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">16px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard padding — card padding, element gaps</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-lg</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Section internal padding</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-xl</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">32px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Between content blocks</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-2xl</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Section top/bottom padding (desktop)</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-3xl</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">64px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Major section separators</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>--space-4xl</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">80px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero section padding, large separators</td></tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">💡 Whitespace Is NOT Wasted Space:</strong>
        <p style="margin: 10px 0 0 0;">Clients will often say "there is too much empty space — fill it with something." Your job is to educate them: whitespace <strong>increases readability by 20%</strong>, makes the brand look premium, and directs the eye to CTAs. Apple's entire brand identity is built on whitespace. Show the client the Apple website. They will understand.</p>
    </div>

    <h4>Section Padding Standards (DH Rule)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Desktop</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Section vertical padding</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">60-80px top/bottom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">40-48px top/bottom</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Container max-width</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1200px (standard) / 1400px (wide)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100% with 16px side padding</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Card internal padding</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24-32px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">16-24px</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Grid gap (product cards)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24-32px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">16px</td></tr>
        </tbody>
    </table>
</div>

<!-- VISUAL HIERARCHY -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">👁️ Visual Hierarchy — Directing the Eye to the Sale</h3>
    <p>Visual hierarchy is the art of controlling <strong>what the visitor looks at first, second, and third</strong>. Without it, your page is visual noise. With it, every element leads toward the CTA.</p>

    <h4 style="color: #FCD34D;">The F-Pattern (Content-Heavy Pages)</h4>
    <p>Eye-tracking studies show users scan content-heavy pages in an <strong>F-shaped pattern</strong>:</p>
    <ol>
        <li><strong>First scan:</strong> Horizontal across the top (announcement bar, navigation, hero headline)</li>
        <li><strong>Second scan:</strong> Slightly lower horizontal sweep (subheadline, trust bar)</li>
        <li><strong>Third scan:</strong> Vertical sweep down the left side (scanning for interesting elements)</li>
    </ol>
    <p><strong>Application:</strong> Place your most critical content (headlines, CTAs, trust badges) along these scan paths. Use it for collection pages, blog pages, and content-heavy product descriptions.</p>

    <h4 style="color: #FCD34D;">The Z-Pattern (Landing Pages & Homepages)</h4>
    <p>For pages with minimal text and strong visuals, eyes follow a <strong>Z-shaped pattern</strong>:</p>
    <ol>
        <li><strong>Top-left:</strong> Logo / brand name (establishes identity)</li>
        <li><strong>Top-right:</strong> Navigation / cart icon / search</li>
        <li><strong>Diagonal:</strong> Sweeps across hero image or main visual</li>
        <li><strong>Bottom-left to bottom-right:</strong> CTA button or key message</li>
    </ol>
    <p><strong>Application:</strong> Place your Shop Now button at the natural ending point of the Z. This is why hero sections with left-aligned text and a right-side CTA convert well.</p>

    <h4 style="color: #FCD34D;">Above-the-Fold Content (The 3-Second Rule)</h4>
    <div class="warning-box">
        <strong>⚠️ THE 3-SECOND RULE:</strong><br>
        A visitor must understand <strong>WHAT you sell, WHO it is for, and WHY they should buy</strong> within 3 seconds of landing on the page — WITHOUT scrolling. Everything above the fold must answer these 3 questions instantly. If it does not, the visitor bounces.
    </div>

    <p><strong>Above-the-fold checklist for every DH store:</strong></p>
    <ul>
        <li>&#9745; Announcement bar with current offer or free shipping threshold</li>
        <li>&#9745; Clean navigation with max 6-7 top-level items</li>
        <li>&#9745; Hero headline (7 words or fewer) stating the value proposition</li>
        <li>&#9745; Hero subheadline explaining the benefit in one sentence</li>
        <li>&#9745; One prominent CTA button in contrasting color</li>
        <li>&#9745; High-quality hero image or video showing product in context</li>
        <li>&#9745; Trust indicators visible (star rating, customer count, "as seen in")</li>
    </ul>
</div>

<!-- BRAND IDENTITY INTEGRATION -->
<div class="content-section">
    <h3>🏷️ Brand Identity Integration — From Client Brief to Shopify Store</h3>
    <p>Most clients come to us with some version of brand guidelines — ranging from a full brand book to just "I like blue and I have this logo." Your job is to systematically translate whatever they give you into a cohesive Shopify store.</p>

    <h4>The DH Brand Translation Process</h4>
    <ol>
        <li><strong>Extract Brand Colors:</strong> Pull the hex codes from their logo using a color picker (Chrome DevTools eyedropper or coolors.co). Create primary, accent, neutral, CTA, and text colors.</li>
        <li><strong>Match Typography:</strong> If they have brand fonts, check Shopify's font library first. If not available, find the closest match. If they do NOT have brand fonts, apply DH Approved Font Pairings from above.</li>
        <li><strong>Define Visual Tone:</strong> Is the brand playful or serious? Minimal or rich? This determines spacing density, border-radius values, and animation style.</li>
        <li><strong>Create the Design Token File:</strong> Set up CSS variables BEFORE building anything. This ensures every element is consistent from day one.</li>
    </ol>

    <h4>Border Radius Guidelines (Often Overlooked)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand Style</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Border Radius</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Applies To</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sharp / Professional</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buttons, cards, images — everything square</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modern / Clean</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-8px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slightly rounded — most common. Buttons 8px, cards 12px.</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Soft / Friendly</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12-16px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Noticeably rounded. Good for kids, pets, wellness brands.</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pill / Playful</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">999px</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fully rounded buttons. Used sparingly — badges, tags, pill buttons.</td></tr>
        </tbody>
    </table>
</div>

<!-- DESIGN TOKEN SYSTEM -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔧 Design Token System — CSS Variables for Consistency</h3>
    <p>Before you touch a SINGLE section in the theme customizer, set up your design tokens. This is the foundation that ensures every element across the store is consistent. Add this to your theme's <code>base.css</code> or <code>custom.css</code>:</p>

    <pre><code>/* ============================================
   DH DESIGN TOKENS — Set these FIRST
   ============================================ */
:root {
  /* Brand Colors */
  --color-primary: #1A1A2E;
  --color-accent: #C9A96E;
  --color-neutral: #F5F5F0;
  --color-cta: #D4A574;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-border: #E5E5E5;
  --color-bg: #FFFFFF;
  --color-bg-alt: #FAFAF8;
  --color-success: #22C55E;
  --color-error: #EF4444;
  --color-sale: #EF4444;

  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Assistant', sans-serif;
  --font-size-body: 16px;
  --font-size-small: 14px;
  --font-size-h1: clamp(32px, 5vw, 56px);
  --font-size-h2: clamp(24px, 4vw, 40px);
  --font-size-h3: clamp(20px, 3vw, 28px);
  --line-height-body: 1.6;
  --line-height-heading: 1.2;
  --letter-spacing-heading: 0.02em;

  /* Spacing (8px grid) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;

  /* Layout */
  --container-max: 1200px;
  --container-wide: 1400px;
  --grid-gap: 24px;

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  --border-width: 1px;
  --border-color: var(--color-border);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
}

/* Usage Examples */
.section-padding {
  padding: var(--space-3xl) 0;
}
@media (max-width: 749px) {
  .section-padding {
    padding: var(--space-2xl) 0;
  }
}
.page-width {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
}
.btn-primary {
  background: var(--color-cta);
  color: var(--color-bg);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-xl);
  transition: opacity var(--transition-fast);
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  opacity: 0.85;
}</code></pre>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">💡 Shopify Theme Customizer Integration:</strong>
        <p style="margin: 10px 0 0 0;">Shopify Dawn theme already uses CSS variables defined in <code>settings_schema.json</code>. The colors from the theme customizer are output as variables like <code>--color-base-text</code>, <code>--color-base-background-1</code>, etc. Your design tokens should <strong>extend</strong> these, not conflict with them. Override specific Dawn variables in your custom CSS when needed: <code>:root { --color-base-accent-1: var(--color-cta); }</code></p>
    </div>
</div>

<!-- PRACTICAL EXAMPLES -->
<div class="content-section">
    <h3>🛠️ Practical Application — Theme Customizer Design Setup</h3>
    <p>Here is the exact workflow for applying design fundamentals to a new Shopify store using the theme customizer:</p>

    <h4>Step-by-Step: Setting Up Design in Shopify Admin</h4>
    <ol>
        <li><strong>Theme Settings > Colors:</strong> Set all color scheme values. Shopify Dawn supports up to 5 color schemes — use Scheme 1 for primary sections, Scheme 2 for alternate/contrast sections, Scheme 3 for accent highlights.</li>
        <li><strong>Theme Settings > Typography:</strong> Select heading font and body font. Set heading scale (100-150%) and body scale (100-130%). Apply letter spacing to headings.</li>
        <li><strong>Theme Settings > Buttons:</strong> Set border radius, shadow, and hover behavior. CTA buttons should be solid fill. Secondary buttons should be outline style.</li>
        <li><strong>Theme Settings > Layout:</strong> Set max page width (1200px standard), section spacing, and grid gap.</li>
        <li><strong>Add Custom CSS:</strong> Add your design token overrides in Theme Settings > Custom CSS for global styles that the customizer does not cover.</li>
    </ol>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #22C55E; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">✅ TASK 14 KEY TAKEAWAYS:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>94% of first impressions are design-related — design IS your job, not just code.</li>
            <li>Every store needs exactly 5 color roles: Primary, Accent, Neutral, CTA, Text.</li>
            <li>CTA color MUST contrast with the primary brand color — never match.</li>
            <li>Max 2 fonts, 2 weights each. Body text minimum 16px. Line height 1.5-1.7.</li>
            <li>All spacing follows the 8px grid system. No random pixel values.</li>
            <li>Set up CSS design tokens BEFORE building any sections.</li>
            <li>F-pattern for content pages, Z-pattern for landing pages.</li>
            <li>Above-the-fold must answer WHAT, WHO, WHY in 3 seconds.</li>
        </ul>
    </div>
</div>
`;


const task15Content = `
<h2>🏗️ TASK 15: CUSTOM SECTION BUILDING & PAGE DESIGN</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Why Custom Sections Are Your Superpower</h3>
    <p>Any junior developer can drag and drop sections in the Shopify theme customizer. But a <strong>Digital Heroes developer</strong> can build <strong>custom sections from scratch</strong> that do exactly what the client needs — no app required, no bloat, no speed penalty.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">💰 The Business Case:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Each third-party app adds <strong>100-500ms</strong> to page load time and costs $5-$50/month</li>
            <li>A custom section that replaces an app saves the client money AND speeds up the store</li>
            <li>Clients pay <strong>premium rates</strong> for custom sections because they look unique and perform better</li>
            <li>Custom sections are the #1 skill that separates a $15/hour freelancer from a $50+/hour agency developer</li>
        </ul>
    </div>
</div>

<!-- ANATOMY OF A SECTION -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧬 Anatomy of a Shopify Section</h3>
    <p>Every Shopify section file lives in <code>sections/</code> directory and has <strong>4 parts</strong> in a single <code>.liquid</code> file:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Part</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tag</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1. Liquid/HTML</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">(top of file)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The markup and Liquid logic that renders on the page</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>2. CSS</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>&lt;style&gt;</code></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scoped styles for this section only</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>3. JavaScript</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>&lt;script&gt;</code></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interactive behavior (optional — only add if needed)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4. Schema JSON</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% schema %}</code></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defines settings that appear in the theme customizer</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #C4B5FD;">Complete Section Template (Copy This Starting Point)</h4>
    <pre><code>&lt;!-- sections/custom-hero-banner.liquid --&gt;

{%- comment -%} SECTION: Custom Hero Banner {%- endcomment -%}

&lt;div
  class="custom-hero"
  id="Section-{{ section.id }}"
  style="
    --hero-bg: {{ section.settings.background_color }};
    --hero-text: {{ section.settings.text_color }};
    --hero-height: {{ section.settings.height }}vh;
  "
&gt;
  &lt;div class="custom-hero__container page-width"&gt;
    {%- if section.settings.heading != blank -%}
      &lt;h2 class="custom-hero__heading h1"&gt;
        {{ section.settings.heading }}
      &lt;/h2&gt;
    {%- endif -%}

    {%- if section.settings.subheading != blank -%}
      &lt;p class="custom-hero__subheading"&gt;
        {{ section.settings.subheading }}
      &lt;/p&gt;
    {%- endif -%}

    {%- if section.settings.button_text != blank -%}
      &lt;a
        href="{{ section.settings.button_link }}"
        class="button button--primary"
      &gt;
        {{ section.settings.button_text }}
      &lt;/a&gt;
    {%- endif -%}
  &lt;/div&gt;

  {%- if section.settings.image != blank -%}
    &lt;div class="custom-hero__image"&gt;
      {{ section.settings.image
        | image_url: width: 1920
        | image_tag:
          loading: 'lazy',
          widths: '375, 750, 1100, 1500, 1920',
          sizes: '100vw',
          class: 'custom-hero__img'
      }}
    &lt;/div&gt;
  {%- endif -%}
&lt;/div&gt;

&lt;style&gt;
  #Section-{{ section.id }} {
    position: relative;
    min-height: var(--hero-height, 60vh);
    display: flex;
    align-items: center;
    background-color: var(--hero-bg, #1a1a2e);
    color: var(--hero-text, #ffffff);
    overflow: hidden;
  }
  #Section-{{ section.id }} .custom-hero__container {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: var(--space-2xl) var(--space-md);
  }
  #Section-{{ section.id }} .custom-hero__heading {
    font-size: var(--font-size-h1);
    margin-bottom: var(--space-md);
  }
  #Section-{{ section.id }} .custom-hero__subheading {
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto var(--space-lg);
    opacity: 0.9;
  }
  #Section-{{ section.id }} .custom-hero__image {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  #Section-{{ section.id }} .custom-hero__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
&lt;/style&gt;

{% schema %}
{
  "name": "Custom Hero Banner",
  "tag": "section",
  "class": "section-hero",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Background Image"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Welcome to Our Store"
    },
    {
      "type": "textarea",
      "id": "subheading",
      "label": "Subheading",
      "default": "Discover our premium collection"
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Button Text",
      "default": "Shop Now"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    },
    {
      "type": "color",
      "id": "background_color",
      "label": "Background Color",
      "default": "#1a1a2e"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Text Color",
      "default": "#ffffff"
    },
    {
      "type": "range",
      "id": "height",
      "min": 40,
      "max": 100,
      "step": 5,
      "unit": "vh",
      "label": "Section Height",
      "default": 60
    }
  ],
  "presets": [
    {
      "name": "Custom Hero Banner"
    }
  ]
}
{% endschema %}</code></pre>
</div>

<!-- JSON SCHEMA DEEP DIVE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">📋 JSON Schema Deep Dive — Every Input Type</h3>
    <p>The schema defines what the client sees in the theme customizer. Mastering every input type means you can build ANY customizer UI without touching code later.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Returns</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common Use</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>text</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">String</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Headlines, button text, short text</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Heading, CTA label</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>textarea</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">String (multiline)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Descriptions, paragraphs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section description</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>richtext</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">HTML string</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Formatted text with bold, italic, links</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">About Us text</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>html</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Raw HTML string</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Embed codes, custom HTML snippets</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Embed a widget</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>image_picker</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Image object</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero images, icons, logos, backgrounds</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section background</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>video_url</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">URL string (YouTube/Vimeo)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Video hero, product video, testimonials</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero background video</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>color</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hex color string</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Background colors, text colors, overlays</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section background</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>range</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Number</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Opacity, height, column count, speed</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section height in vh</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>select</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">String (selected value)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Layout options, alignment, style choices</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Text alignment picker</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>checkbox</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Boolean</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show/hide elements, enable features</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show overlay toggle</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>url</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">URL string</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Button links, redirects</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CTA destination</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>collection</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Collection object</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Featured collection picker</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Featured products grid</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>product</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product object</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Featured product, product spotlight</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero featured product</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>blog</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blog object</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blog post feed on homepage</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Latest posts section</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>page</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Page object</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Embed page content in section</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">FAQ content from a page</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>font_picker</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Font object</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section-specific font override</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom heading font</td></tr>
        </tbody>
    </table>

    <div class="warning-box">
        <strong>⚠️ COMMON SCHEMA MISTAKES:</strong>
        <ul>
            <li><strong>Forgetting the "default" value</strong> — Without defaults, sections appear blank when first added. ALWAYS provide sensible defaults for text, colors, and ranges.</li>
            <li><strong>Using "html" type when "richtext" works</strong> — richtext is safer (sanitized) and easier for clients. Only use html for embed codes.</li>
            <li><strong>Not adding "info" descriptions</strong> — Every setting should have an <code>"info": "Recommended: 1920x800px"</code> to guide the client.</li>
            <li><strong>Missing presets</strong> — Without a <code>"presets"</code> array, the section cannot be added from the customizer. Only omit presets for sections that should only appear in specific templates.</li>
        </ul>
    </div>
</div>

<!-- BLOCK TYPES -->
<div class="content-section">
    <h3>🧱 Block Types — Repeatable Content Within Sections</h3>
    <p>Blocks allow clients to add, remove, and reorder items within a section — like testimonial cards, feature icons, or FAQ items. This is what makes sections truly dynamic.</p>

    <pre><code>&lt;!-- sections/custom-testimonials.liquid --&gt;

&lt;div class="testimonials section-padding" id="Section-{{ section.id }}"&gt;
  &lt;div class="page-width"&gt;
    &lt;h2 class="testimonials__heading h2"&gt;
      {{ section.settings.heading | default: "What Our Customers Say" }}
    &lt;/h2&gt;

    &lt;div class="testimonials__grid"&gt;
      {%- for block in section.blocks -%}
        &lt;div class="testimonial-card" {{ block.shopify_attributes }}&gt;
          &lt;div class="testimonial-card__stars"&gt;
            {%- for i in (1..block.settings.stars) -%}
              &#9733;
            {%- endfor -%}
          &lt;/div&gt;
          &lt;blockquote class="testimonial-card__quote"&gt;
            {{ block.settings.quote }}
          &lt;/blockquote&gt;
          &lt;div class="testimonial-card__author"&gt;
            {%- if block.settings.avatar != blank -%}
              {{ block.settings.avatar
                | image_url: width: 80
                | image_tag: class: 'testimonial-card__avatar',
                  loading: 'lazy', width: 40, height: 40
              }}
            {%- endif -%}
            &lt;div&gt;
              &lt;strong&gt;{{ block.settings.author }}&lt;/strong&gt;
              {%- if block.settings.location != blank -%}
                &lt;span&gt;{{ block.settings.location }}&lt;/span&gt;
              {%- endif -%}
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      {%- endfor -%}
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

{% schema %}
{
  "name": "Testimonials",
  "tag": "section",
  "class": "section-testimonials",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section Heading",
      "default": "What Our Customers Say"
    }
  ],
  "blocks": [
    {
      "type": "testimonial",
      "name": "Testimonial",
      "limit": 6,
      "settings": [
        {
          "type": "range",
          "id": "stars",
          "min": 1,
          "max": 5,
          "step": 1,
          "label": "Star Rating",
          "default": 5
        },
        {
          "type": "textarea",
          "id": "quote",
          "label": "Customer Quote",
          "default": "This product changed my life! Highly recommended."
        },
        {
          "type": "text",
          "id": "author",
          "label": "Customer Name",
          "default": "Happy Customer"
        },
        {
          "type": "text",
          "id": "location",
          "label": "Location (optional)"
        },
        {
          "type": "image_picker",
          "id": "avatar",
          "label": "Customer Photo (optional)"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Testimonials",
      "blocks": [
        { "type": "testimonial" },
        { "type": "testimonial" },
        { "type": "testimonial" }
      ]
    }
  ]
}
{% endschema %}</code></pre>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">💡 Key Block Concepts:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li><code>block.shopify_attributes</code> — ALWAYS include this. It enables the customizer to highlight the block when clicked.</li>
            <li><code>"limit": 6</code> — Set maximum blocks to prevent clients from adding 50 testimonials that break the layout.</li>
            <li><strong>Presets with blocks</strong> — Pre-populate the section with sample blocks so it does not appear empty when first added.</li>
            <li><strong>Multiple block types</strong> — A section can have different block types (e.g., "text_block", "image_block", "video_block") to create flexible layouts.</li>
        </ul>
    </div>
</div>

<!-- BUILDING A COMPLETE HOMEPAGE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🏠 Building a Complete Homepage — The DH Standard Layout</h3>
    <p>Every DH homepage follows this proven structure. The order matters — it is designed based on conversion psychology and eye-tracking data:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Section</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customizer Section Name</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Announcement Bar</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Current offer, free shipping threshold</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">announcement-bar</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hero Banner</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Value proposition + primary CTA</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">image-banner / slideshow</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust Bar</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Free shipping, easy returns, secure payment icons</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom section or multicolumn</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Featured Collection</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Bestsellers or hero products</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">featured-collection</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Brand Story / About</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Emotional connection with the brand</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">image-with-text</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Social Proof / Testimonials</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Build trust with real customer reviews</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom testimonials section</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Second Collection / Categories</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Browse by category or see more products</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">collection-list</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>"As Seen In" / Press Logos</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Authority and credibility</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom logo bar section</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Instagram / UGC Feed</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Social proof + visual appeal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom or app section</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Newsletter Signup</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Capture emails with incentive</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">newsletter</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">11</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>FAQ (optional)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Reduce pre-purchase anxiety</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">collapsible-content</td></tr>
        </tbody>
    </table>
</div>

<!-- PRODUCT PAGE DESIGN -->
<div class="content-section">
    <h3>🛒 Product Page Design Elements</h3>
    <p>The product page is where money changes hands. Every element must be intentionally placed to reduce friction and increase confidence.</p>

    <h4>DH Product Page Blueprint</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Implementation</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Converts</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Media Gallery</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Thumbnails left/bottom, main image right. Support zoom, video, 3D.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Customers who view 3+ images are 2x more likely to buy</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust Strip</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Icons below Add to Cart: Free Shipping, Money-Back, Secure Checkout</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Reduces purchase anxiety at the decision point</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product Tabs</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Description, Ingredients/Specs, Shipping, Reviews as tabs or accordions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Organizes info without overwhelming the page</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sticky Add to Cart</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Mobile: fixed bar at bottom. Desktop: sticky sidebar or top bar on scroll.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CTA is always visible no matter how far they scroll</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Related Products</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4-column grid below main content, powered by Shopify recommendations API</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Increases average order value by 10-30%</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Upsell Blocks</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Complete the look" or "Frequently bought together" above footer</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cross-sell opportunity at peak purchase intent</td></tr>
        </tbody>
    </table>
</div>

<!-- METAFIELDS FOR DESIGN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">🗄️ Metafields & Metaobjects for Dynamic Design</h3>
    <p>Metafields allow you to add custom data to products, collections, and pages — then render that data dynamically in your sections. This is how you create truly flexible, client-manageable stores.</p>

    <h4 style="color: #F9A8D4;">Common Design-Related Metafields</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(236, 72, 153, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metafield</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Namespace.Key</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Usage in Liquid</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product subtitle</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.subtitle</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">single_line_text</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.metafields.custom.subtitle }}</code></td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product badge</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.badge_text</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">single_line_text</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Renders "Bestseller", "New", "Limited"</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Size chart image</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.size_chart</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">file_reference</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Shows size guide in product tabs</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ingredients list</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.ingredients</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">multi_line_text</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Dedicated tab content</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Collection banner</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.banner_image</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">file_reference</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom hero per collection page</td></tr>
        </tbody>
    </table>

    <pre><code>&lt;!-- Using metafields in a product card --&gt;
{%- if product.metafields.custom.badge_text != blank -%}
  &lt;span class="product-badge"
    style="background: var(--color-sale); color: #fff;
    padding: 4px 12px; font-size: 12px;
    text-transform: uppercase; letter-spacing: 0.05em;
    position: absolute; top: 12px; left: 12px;
    border-radius: var(--radius-sm);"
  &gt;
    {{ product.metafields.custom.badge_text }}
  &lt;/span&gt;
{%- endif -%}</code></pre>
</div>

<!-- DAWN CUSTOMIZATION COOKBOOK -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📖 Dawn Theme Customization Cookbook — Top 10 Client Requests</h3>
    <p>These are the customizations clients request most frequently. Master these and you can handle 80% of all Shopify projects:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Request</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">File to Edit</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Approach</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom announcement bar</strong> with multiple rotating messages</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/announcement-bar.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add blocks for multiple messages + JS rotation</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product badges</strong> (Sale, New, Bestseller)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>snippets/card-product.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add metafield check + badge HTML/CSS</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust badges below Add to Cart</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/main-product.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add custom block type "trust_badge" in schema</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Color swatches on collection page</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>snippets/card-product.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Loop product.options, render color circles</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom product tabs</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/main-product.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Replace collapsible rows with tabbed UI + metafield content</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sticky Add to Cart bar</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/main-product.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">IntersectionObserver on ATC button + fixed bar</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom collection filters</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/main-collection-product-grid.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Storefront Filtering API + custom UI</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image hover swap on product cards</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>snippets/card-product.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show second image on hover with CSS transition</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom FAQ accordion section</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/custom-faq.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blocks with question/answer + JS toggle</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mega menu with images</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>sections/header.liquid</code></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Override default dropdown with custom mega menu</td></tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #22C55E; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">✅ TASK 15 KEY TAKEAWAYS:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Every section has 4 parts: Liquid/HTML, CSS, JavaScript (optional), Schema JSON.</li>
            <li>ALWAYS include <code>block.shopify_attributes</code> on block elements for customizer interactivity.</li>
            <li>Set sensible defaults for ALL schema settings — never leave sections blank on first add.</li>
            <li>Use blocks for repeatable content — testimonials, features, FAQs, team members.</li>
            <li>Presets make sections available in the theme customizer "Add section" panel.</li>
            <li>The DH homepage follows a 10-11 section standard layout for maximum conversion.</li>
            <li>Use metafields and metaobjects for client-manageable dynamic content like badges, subtitles, and custom fields.</li>
            <li>Master the Dawn Customization Cookbook — these 10 requests cover 80% of all client work.</li>
        </ul>
    </div>
</div>
`;


const task16Content = `
<h2>🏆 TASK 16: FULL STORE CUSTOMIZATION MASTERY</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🎯 The Final Piece — From Good to Launch-Ready</h3>
    <p>You now understand design fundamentals (Task 14) and can build custom sections (Task 15). This task takes you to <strong>full-store mastery</strong> — the ability to take a blank Shopify theme and deliver a complete, polished, conversion-optimized store that is ready for real traffic and real money.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">💰 What This Task Is Worth:</strong>
        <p style="margin: 10px 0 0 0;">A developer who can only build individual sections gets assigned piece-work. A developer who can <strong>own an entire store build from blank to launch</strong> becomes the lead on $3,000-$10,000+ projects. This is the difference between being a worker and being the go-to person who gets the high-value projects.</p>
    </div>
</div>

<!-- HEADER & NAVIGATION DESIGN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🧭 Header & Navigation Design</h3>
    <p>The header is the first thing every visitor interacts with. A confusing or cluttered header kills conversion before the visitor even sees your hero section.</p>

    <h4 style="color: #93C5FD;">Navigation Rules (DH Standard)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rule</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Max 6-7 top-level items</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More than 7 items creates decision paralysis. Use dropdowns for subcategories.</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mega menu for 20+ products</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stores with many categories need mega menus with images, not plain dropdowns.</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sticky header on scroll</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Header should stick to top on scroll but use a compact version (smaller logo, no announcement bar).</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Search must be prominent</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Users who search convert 2-3x higher. Search icon must be visible in header — not hidden.</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cart icon with count badge</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always show item count. Visual reminder that they have items waiting.</td></tr>
        </tbody>
    </table>

    <h4 style="color: #93C5FD;">Mega Menu Implementation Pattern</h4>
    <pre><code>&lt;!-- Mega menu structure in header.liquid --&gt;
&lt;nav class="mega-menu"&gt;
  {%- for link in section.settings.menu.links -%}
    &lt;div class="mega-menu__item"&gt;
      &lt;a href="{{ link.url }}" class="mega-menu__link"&gt;
        {{ link.title }}
      &lt;/a&gt;

      {%- if link.links.size &gt; 0 -%}
        &lt;div class="mega-menu__dropdown"&gt;
          &lt;div class="mega-menu__columns page-width"&gt;
            {%- for childlink in link.links -%}
              &lt;div class="mega-menu__column"&gt;
                &lt;h4 class="mega-menu__column-title"&gt;
                  {{ childlink.title }}
                &lt;/h4&gt;
                {%- if childlink.links.size &gt; 0 -%}
                  &lt;ul class="mega-menu__sublinks"&gt;
                    {%- for grandchild in childlink.links -%}
                      &lt;li&gt;&lt;a href="{{ grandchild.url }}"&gt;
                        {{ grandchild.title }}
                      &lt;/a&gt;&lt;/li&gt;
                    {%- endfor -%}
                  &lt;/ul&gt;
                {%- endif -%}
              &lt;/div&gt;
            {%- endfor -%}
          &lt;/div&gt;
        &lt;/div&gt;
      {%- endif -%}
    &lt;/div&gt;
  {%- endfor -%}
&lt;/nav&gt;

&lt;style&gt;
  .mega-menu__dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-bg);
    border-top: 1px solid var(--color-border);
    box-shadow: var(--shadow-lg);
    padding: var(--space-xl) 0;
    z-index: 100;
  }
  .mega-menu__item:hover .mega-menu__dropdown {
    display: block;
  }
  .mega-menu__columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xl);
  }
&lt;/style&gt;</code></pre>

    <h4 style="color: #93C5FD;">Announcement Bar Best Practices</h4>
    <ul>
        <li>Keep text under 60 characters — it must be readable in 1 second</li>
        <li>Use contrasting background color (dark bar on light theme, or accent color)</li>
        <li>Include urgency: "Free shipping on orders over $50 — Today Only"</li>
        <li>If rotating multiple messages, use 4-5 second intervals — faster is unreadable</li>
        <li>Add a close/dismiss button on mobile — announcement bars eat precious vertical space</li>
    </ul>
</div>

<!-- FOOTER DESIGN -->
<div class="content-section">
    <h3>🦶 Footer Design — The Overlooked Conversion Tool</h3>
    <p>Many developers treat the footer as an afterthought. But <strong>30-40% of visitors scroll to the footer</strong> looking for trust signals, policies, and navigation they could not find above.</p>

    <h4>DH Standard Footer Layout (4 Columns Desktop)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Column</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contents</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Column 1: Brand</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logo, 1-2 sentence brand description, social media icons</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Column 2: Quick Links</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shop All, Collections, About Us, Contact, Blog</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Column 3: Help & Info</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FAQ, Shipping Policy, Returns, Privacy Policy, Terms of Service</td></tr>
            <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Column 4: Newsletter</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email signup with incentive ("Get 10% off"), email input + submit button</td></tr>
        </tbody>
    </table>
    <p><strong>Below columns:</strong> Payment icons (Visa, Mastercard, PayPal, Shop Pay, Apple Pay, Google Pay) + Copyright text.</p>

    <div class="warning-box">
        <strong>⚠️ FOOTER MUST-HAVES (Non-Negotiable):</strong>
        <ul>
            <li>Privacy Policy link — <strong>legally required</strong> in most jurisdictions</li>
            <li>Terms of Service link — required for payment processors</li>
            <li>Payment icons — visual trust signal that directly impacts checkout conversion</li>
            <li>Contact information — email at minimum, phone number if the client has one</li>
        </ul>
    </div>
</div>

<!-- MOBILE-FIRST DESIGN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">📱 Mobile-First Design — Where the Money Is</h3>
    <p><strong>70-80% of Shopify traffic is mobile.</strong> If your store looks perfect on desktop but mediocre on mobile, you have failed 80% of your visitors. At DH, we design mobile-first and enhance for desktop — NEVER the other way around.</p>

    <h4 style="color: #F9A8D4;">Mobile Breakpoints (DH Standard)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(236, 72, 153, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Breakpoint</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Width</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Devices</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Columns</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mobile Small</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">0 - 374px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">iPhone SE, older small phones</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1-2 columns</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mobile</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">375 - 749px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">iPhone, Android phones</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2 columns for products</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tablet</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">750 - 989px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">iPad, Android tablets</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 columns for products</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Desktop</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">990px+</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Laptops, monitors</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4 columns for products</td></tr>
        </tbody>
    </table>

    <h4 style="color: #F9A8D4;">Mobile Design Rules</h4>
    <ul>
        <li><strong>Touch targets: minimum 44x44px.</strong> Buttons, links, and interactive elements must be at least 44px in both dimensions. This is Apple's Human Interface Guidelines standard. Anything smaller = frustrating misclicks.</li>
        <li><strong>Hamburger menu:</strong> Mobile navigation must collapse into a hamburger icon. Full-screen overlay menu with large touch targets for each link.</li>
        <li><strong>Product grid: 2 columns on mobile.</strong> Single column wastes space. 3 columns makes product images too small. 2 is the sweet spot.</li>
        <li><strong>Thumb zone:</strong> Critical CTAs (Add to Cart, Checkout) should be in the bottom third of the screen — where thumbs naturally rest.</li>
        <li><strong>No horizontal scrolling — EVER.</strong> If any element causes horizontal scroll on mobile, it is a bug. Test at 320px width minimum.</li>
    </ul>

    <pre><code>/* Mobile-first responsive pattern */
/* Start with mobile styles (no media query) */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

/* Tablet: 3 columns */
@media (min-width: 750px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }
}

/* Desktop: 4 columns */
@media (min-width: 990px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xl);
  }
}

/* Touch target minimum */
.mobile-btn {
  min-height: 44px;
  min-width: 44px;
  padding: var(--space-md) var(--space-lg);
}</code></pre>
</div>

<!-- CONVERSION-FOCUSED DESIGN PATTERNS -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">💸 Conversion-Focused Design Patterns</h3>
    <p>Every design decision must answer one question: <strong>"Does this help the visitor buy?"</strong> If a design element is purely decorative and does not serve conversion, it should not exist.</p>

    <h4 style="color: #6EE7B7;">Trust Badge Placement (Proven Positions)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Location</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Badge Type</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Impact</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Below hero section</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Free Shipping, Money-Back, Secure Checkout</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Establishes trust within first 5 seconds</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Below Add to Cart button</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Payment icons, SSL badge, guarantee</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Reduces anxiety at the decision moment</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cart drawer / cart page</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Secure checkout, free shipping progress</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Final reassurance before checkout</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Footer</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Payment method logos</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Universal trust signal for scrollers</td></tr>
        </tbody>
    </table>

    <h4 style="color: #6EE7B7;">CTA Button Optimization Rules</h4>
    <ul>
        <li><strong>Color:</strong> CTA buttons must be the highest-contrast element on the page. If the page is mostly white/light, the CTA should be dark or bold. If the page is dark, the CTA should be bright.</li>
        <li><strong>Size:</strong> Desktop minimum 48px height, mobile minimum 52px height. Full-width on mobile product pages.</li>
        <li><strong>Text:</strong> Action-oriented. "Add to Cart" beats "Submit". "Shop Now" beats "Click Here". "Get 20% Off" beats "Learn More".</li>
        <li><strong>Only ONE primary CTA per viewport.</strong> Multiple primary buttons compete and reduce conversions. Use outline/ghost buttons for secondary actions.</li>
        <li><strong>Hover state:</strong> Always add a hover effect (darken by 10%, slight scale, or shadow). No hover state = the button feels broken.</li>
    </ul>
</div>

<!-- ADVANCED CSS FOR SHOPIFY -->
<div class="content-section">
    <h3>🎨 Advanced CSS for Shopify</h3>
    <p>Shopify themes use their own CSS architecture. Knowing how to work with (not against) the theme's CSS is critical for clean, maintainable customizations.</p>

    <h4>Overriding Theme CSS Safely</h4>
    <pre><code>/* BAD: Using !important everywhere */
.product-card .card__heading {
  font-size: 18px !important;  /* AVOID THIS */
  color: red !important;        /* AVOID THIS */
}

/* GOOD: Using specificity correctly */
/* Increase specificity with the section ID */
#shopify-section-template--product .card__heading {
  font-size: 18px;
  color: var(--color-primary);
}

/* Or use the :is() selector for maintainable specificity */
:is(.section-template) .card__heading {
  font-size: 1.125rem;
}

/* BEST: Use CSS custom properties from the schema */
#Section-{{ section.id }} .card__heading {
  font-size: var(--card-heading-size, 1rem);
  color: var(--card-heading-color, var(--color-text));
}</code></pre>

    <div class="warning-box">
        <strong>⚠️ CSS RULES FOR SHOPIFY DEVELOPMENT:</strong>
        <ul>
            <li><strong>Never use !important</strong> unless overriding third-party app CSS that cannot be modified any other way. Every !important creates a specificity nightmare for future developers.</li>
            <li><strong>Always scope styles to the section ID</strong> using <code>#Section-{{ section.id }}</code>. This prevents your styles from leaking to other sections.</li>
            <li><strong>Use CSS custom properties</strong> for any value that might change per section instance. This allows the customizer to control styles without code changes.</li>
            <li><strong>Never modify theme core CSS files directly.</strong> Always add overrides in <code>custom.css</code> or in the section's own style tag.</li>
        </ul>
    </div>

    <h4>Shopify-Specific CSS Patterns</h4>
    <pre><code>/* Responsive image containers (Shopify pattern) */
.media {
  position: relative;
  overflow: hidden;
}
.media > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Shopify uses aspect-ratio padding trick for older browsers */
.media::before {
  content: '';
  display: block;
  padding-bottom: calc(1 / var(--ratio-image) * 100%);
}

/* Hide elements only in the customizer (theme editor) */
.shopify-design-mode .preview-only {
  display: block;
}

/* Color scheme utility classes (Dawn pattern) */
.color-scheme-1 { /* Light scheme */ }
.color-scheme-2 { /* Accent scheme */ }
.color-inverse { /* Dark scheme */ }

/* Accessibility: Focus styles */
*:focus-visible {
  outline: 2px solid var(--color-cta);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}</code></pre>
</div>

<!-- ANIMATION & MICRO-INTERACTIONS -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">✨ Animation & Micro-Interactions</h3>
    <p>Subtle animations make a store feel alive and premium. Overdone animations make it feel like a PowerPoint presentation from 2005. The line between the two is thin.</p>

    <h4 style="color: #C4B5FD;">DH Animation Rules</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Animation</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When to Use</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Fade in on scroll</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sections entering viewport — premium feel</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>opacity 0 to 1 + translateY(20px to 0)</code></td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hover scale on cards</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product cards, category images</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>transform: scale(1.03) on hover</code></td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image hover zoom</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product card images — reveal detail</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>img transform: scale(1.08) on card hover</code></td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Button hover darken</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">All buttons — feedback that it is clickable</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>filter: brightness(0.9) or opacity: 0.85</code></td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cart drawer slide-in</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">After Add to Cart — confirm action</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>transform: translateX(100% to 0)</code></td></tr>
        </tbody>
    </table>

    <pre><code>/* Scroll reveal animation (use IntersectionObserver) */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* CRITICAL: Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}</code></pre>

    <div class="warning-box">
        <strong>⚠️ ANIMATION ANTI-PATTERNS (Never Do These):</strong>
        <ul>
            <li><strong>No parallax scrolling</strong> — It causes motion sickness for many users and tanks mobile performance.</li>
            <li><strong>No auto-playing carousels</strong> — Studies show carousels reduce conversion. Use static heroes or let users control slides.</li>
            <li><strong>No bouncing/flashing elements</strong> — These trigger seizure warnings and look unprofessional.</li>
            <li><strong>Keep durations under 600ms</strong> — Anything longer feels sluggish. 300ms is the sweet spot.</li>
            <li><strong>ALWAYS respect <code>prefers-reduced-motion</code></strong> — This is an accessibility requirement, not optional.</li>
        </ul>
    </div>
</div>

<!-- ACCESSIBILITY IN DESIGN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">♿ Accessibility in Design — WCAG Compliance</h3>
    <p>Accessibility is not a nice-to-have — it is a <strong>legal requirement</strong> in many markets (ADA in the US, EAA in the EU). Shopify stores that are not accessible can face lawsuits. Beyond legality, 15-20% of the population has some form of disability. Ignoring accessibility means ignoring 15-20% of your potential revenue.</p>

    <h4 style="color: #6EE7B7;">Accessibility Checklist (DH Mandatory)</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirement</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How to Test</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Color contrast (text)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4.5:1 ratio minimum (AA standard)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">WebAIM Contrast Checker or Chrome DevTools</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Color contrast (large text)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3:1 ratio minimum (text 18px+ or 14px bold)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Same tools — large text has lower threshold</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Alt text on ALL images</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Descriptive alt text, not "image1.jpg"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check with screen reader (VoiceOver / NVDA)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Keyboard navigation</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Every interactive element reachable via Tab key</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tab through entire page — can you reach everything?</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Focus states visible</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clear outline or highlight on focused element</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tab through — can you SEE where you are?</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>ARIA labels on icons</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cart icon, search icon, social icons need labels</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>aria-label="Open cart"</code> on icon buttons</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Semantic HTML</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Use &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;button&gt;</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Do not use &lt;div&gt; for clickable elements</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reduced motion support</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Animations disabled for users who prefer it</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>@media (prefers-reduced-motion: reduce)</code></td></tr>
        </tbody>
    </table>
</div>

<!-- DESIGN QA CHECKLIST -->
<div class="content-section">
    <h3>✅ Design QA Checklist — Before Handing Off ANY Store</h3>
    <p>This checklist must be completed before you mark ANY project as "ready for review". No exceptions.</p>

    <h4>Cross-Browser Testing</h4>
    <ul>
        <li>&#9744; Chrome (latest) — primary browser for 65% of users</li>
        <li>&#9744; Safari (latest) — critical for iOS users (ALL iPhone browsers use Safari engine)</li>
        <li>&#9744; Firefox (latest) — secondary but important for European markets</li>
        <li>&#9744; Edge (latest) — important for enterprise/corporate buyers</li>
    </ul>

    <h4>Mobile Testing (Real Devices)</h4>
    <ul>
        <li>&#9744; iPhone (Safari) — test on actual device, not just Chrome DevTools</li>
        <li>&#9744; Android (Chrome) — Samsung Galaxy or Google Pixel</li>
        <li>&#9744; iPad (Safari) — tablet layout verification</li>
        <li>&#9744; Test at 320px width — smallest common viewport</li>
        <li>&#9744; No horizontal scrolling on any page at any viewport</li>
    </ul>

    <h4>Design Consistency Audit</h4>
    <ul>
        <li>&#9744; All headings use the same font family throughout</li>
        <li>&#9744; All body text uses the same font family and size</li>
        <li>&#9744; Section padding is consistent across all sections</li>
        <li>&#9744; Button styles are consistent (same radius, padding, font size)</li>
        <li>&#9744; Color palette is applied consistently — no random colors</li>
        <li>&#9744; Image aspect ratios are consistent within grids</li>
        <li>&#9744; Hover states work on all interactive elements</li>
        <li>&#9744; No placeholder text or lorem ipsum anywhere</li>
        <li>&#9744; All links work — no broken links or 404s</li>
        <li>&#9744; Favicon is set and displays correctly</li>
    </ul>
</div>

<!-- CLIENT DESIGN HANDOFF -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🎨 Client Design Handoff — Figma/XD to Shopify</h3>
    <p>Many projects come with design mockups from Figma or Adobe XD. Your job is to implement them <strong>pixel-perfect</strong>. Here is the DH process:</p>

    <h4 style="color: #FCD34D;">The 5-Step Figma-to-Shopify Workflow</h4>
    <ol>
        <li><strong>Inspect the Design System:</strong> Extract all colors, fonts, spacing values, and border-radius from the Figma file. Create your CSS design tokens to match exactly.</li>
        <li><strong>Identify Standard vs Custom Sections:</strong> What can be done with Dawn's built-in sections? What requires custom sections? Build a list before coding anything.</li>
        <li><strong>Build Mobile and Desktop Side-by-Side:</strong> Never build the entire desktop version then "make it responsive" afterward. Build each section responsive from the start.</li>
        <li><strong>Use Figma's Inspect Panel:</strong> Right-click any element in Figma > Inspect to see exact CSS values. Copy padding, margins, font sizes directly.</li>
        <li><strong>Pixel-Perfect Verification:</strong> Use browser extensions like PerfectPixel to overlay the Figma design on top of your live Shopify preview. Maximum 2-3px deviation allowed.</li>
    </ol>

    <div class="warning-box">
        <strong>⚠️ COMMON FIGMA-TO-SHOPIFY MISTAKES:</strong>
        <ul>
            <li><strong>Not accounting for dynamic content.</strong> The Figma mockup has 3 words in the heading — but the client types 15. Does your layout still work? Always test with varying content lengths.</li>
            <li><strong>Ignoring Shopify's fluid width.</strong> Figma designs are fixed width (1440px). Shopify stores are fluid. Test at 990px, 1200px, 1440px, and 1920px.</li>
            <li><strong>Forgetting hover/active states.</strong> If the designer did not provide hover states, ask before guessing. Never ship buttons without hover feedback.</li>
            <li><strong>Hardcoding content.</strong> Everything the client might want to change must be in the schema — text, images, colors, links. Never hardcode content in Liquid.</li>
        </ul>
    </div>
</div>

<!-- REAL PROJECT WALKTHROUGH -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Real Project Walkthrough — Blank Theme to Launch-Ready</h3>
    <p>Here is the exact step-by-step process for building a complete store from scratch. This is how a DH developer approaches every project:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Phase</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Steps</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 1: Foundation</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    1. Duplicate the theme (NEVER edit live theme)<br>
                    2. Set up design tokens (CSS variables)<br>
                    3. Configure Theme Settings (colors, fonts, layout)<br>
                    4. Set up navigation structure
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 hours</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 2: Header & Footer</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    5. Customize header (logo, navigation, mega menu if needed)<br>
                    6. Build announcement bar<br>
                    7. Customize footer (4 columns, newsletter, payment icons)<br>
                    8. Test header/footer on all breakpoints
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 hours</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 3: Homepage</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    9. Build hero banner section<br>
                    10. Add trust bar / feature icons<br>
                    11. Configure featured collection<br>
                    12. Build brand story section<br>
                    13. Add testimonials section<br>
                    14. Add collection list, newsletter, FAQ
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-6 hours</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 4: Product Page</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    15. Configure media gallery layout<br>
                    16. Add trust badges below ATC<br>
                    17. Build product tabs (description, specs, shipping)<br>
                    18. Add related products<br>
                    19. Add sticky ATC for mobile
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-4 hours</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 5: Collection Pages</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    20. Configure grid layout and card design<br>
                    21. Add product badges (sale, new, bestseller)<br>
                    22. Set up filtering and sorting<br>
                    23. Add collection banner/description
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 hours</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 6: Essential Pages</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    24. About Us page<br>
                    25. Contact page<br>
                    26. FAQ page<br>
                    27. Policy pages (privacy, terms, returns, shipping)
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 hours</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Phase 7: QA & Polish</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                    28. Complete design QA checklist (above)<br>
                    29. Cross-browser testing<br>
                    30. Mobile testing on real devices<br>
                    31. Speed optimization<br>
                    32. Accessibility audit
                </td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-4 hours</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #22C55E; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">✅ TASK 16 KEY TAKEAWAYS:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Max 6-7 top-level navigation items. Use mega menus for large catalogs.</li>
            <li>Footer is a conversion tool — it must include policies, payment icons, and newsletter signup.</li>
            <li>Mobile-first: 70-80% of Shopify traffic is mobile. Touch targets minimum 44x44px.</li>
            <li>Trust badges at 3 key locations: below hero, below ATC, in cart.</li>
            <li>Never use !important — scope CSS with section IDs and CSS custom properties.</li>
            <li>Animations must be subtle (under 600ms) and respect prefers-reduced-motion.</li>
            <li>Accessibility is a legal requirement: 4.5:1 contrast, keyboard navigation, alt text, ARIA labels.</li>
            <li>Complete store build follows 7 phases: Foundation, Header/Footer, Homepage, Product, Collection, Pages, QA.</li>
            <li>Figma-to-Shopify: Extract design tokens first, build responsive from the start, test with dynamic content.</li>
        </ul>
    </div>
</div>
`;


const task14Quiz = [
    { q: "A client's brand color is blue (#3B82F6). They want their 'Add to Cart' button to also be blue to match the brand. What is the correct response?", o: ["Use the same blue — brand consistency is the top priority", "Use a slightly darker shade of blue — close enough to match while adding subtle contrast", "Use a contrasting color like orange or green — the CTA must stand out from the primary brand color to draw attention", "Let the client decide — it's their store and their brand guidelines take precedence over conversion principles"], c: 2 },
    { q: "You are setting up body text for a new Shopify store. Which combination follows DH standards?", o: ["Font size: 14px, line-height: 1.3, color: #000000", "Font size: 16px, line-height: 1.6, color: #333333", "Font size: 18px, line-height: 1.0, color: #666666", "Font size: 12px, line-height: 2.0, color: #1A1A1A"], c: 1 },
    { q: "A visitor lands on a Shopify store homepage. According to the 3-second rule, what must they understand WITHOUT scrolling?", o: ["The company's full history, mission statement, and founding story", "The store's return policy, shipping rates, and payment options", "WHAT the store sells, WHO it is for, and WHY they should buy", "The product catalog, pricing structure, and available discounts"], c: 2 },
    { q: "You need to add a custom Google Font to a Shopify store. What is the DH-recommended approach for performance?", o: ["Link the Google Fonts CDN URL in the theme.liquid head section for easy setup", "Self-host the font files using @font-face declarations in base.css to avoid external HTTP requests", "Use a Google Fonts app from the Shopify App Store for convenience", "Load all available weights (100-900) so the client has flexibility for future design changes"], c: 1 },
    { q: "What is the correct spacing value for section vertical padding on desktop according to the 8px grid system?", o: ["50px — it looks about right visually", "60-80px — using multiples of 8 (64px or 80px)", "100px — more whitespace is always better", "45px — close enough to a multiple of 8"], c: 1 },
    { q: "A client says 'There is too much empty space on the homepage — fill it with more products.' What should you do?", o: ["Immediately add more product grids to fill the space — the client knows their customers best", "Remove all whitespace to maximize content density and show more products above the fold", "Educate the client that whitespace increases readability by 20%, makes the brand look premium, and directs the eye to CTAs — show them the Apple website as an example", "Compromise by reducing whitespace by exactly 50% to meet the client halfway"], c: 2 },
    { q: "You are building a store for a luxury skincare brand. Which font pairing is most appropriate?", o: ["Oswald (heading) + Source Sans Pro (body) — bold and athletic feel", "Comic Sans (heading) + Arial (body) — friendly and approachable", "Playfair Display (heading) + Assistant (body) — classic serif with clean sans-serif", "Bebas Neue (heading) + Roboto (body) — condensed modern headers"], c: 2 },
    { q: "For the DH Design Token System, where should CSS custom properties be set up and when?", o: ["In each individual section's style tag, after building all sections", "In base.css or custom.css as :root variables, BEFORE building any sections", "In the theme.liquid file inline styles, during the QA phase", "In the Shopify theme customizer only, using built-in settings"], c: 1 },
    { q: "Eye-tracking studies show content-heavy pages (collection pages, blog posts) are scanned in which pattern?", o: ["Z-pattern — eyes move diagonally across the page", "F-pattern — horizontal scan at top, second horizontal scan below, then vertical sweep down the left", "Circular pattern — eyes spiral inward toward the center of the page", "Random pattern — there is no predictable scanning behavior for web pages"], c: 1 },
    { q: "A store's color palette has 8 different colors used across various sections. What is wrong?", o: ["Nothing — more colors create a vibrant and engaging visual experience", "Too many colors. Maximum 3-4 colors should be used. More creates an amateur, chaotic look.", "It depends on the brand — fashion brands can use unlimited colors", "8 colors is fine as long as they are all from the same color family"], c: 1 }
];


const task15Quiz = [
    { q: "A Shopify section file has 4 parts. Which is the correct order and what defines the customizer settings?", o: ["HTML, CSS, JS, Schema — the CSS file defines customizer settings", "Liquid/HTML, Style tag, Script tag, {% schema %} — the schema JSON defines customizer settings", "Schema, HTML, CSS, JS — the schema must come first in the file", "Template, Layout, Snippet, Config — the config.json defines settings"], c: 1 },
    { q: "You built a custom testimonials section with blocks, but when the client adds it from the customizer, it appears completely blank. What did you likely forget?", o: ["The CSS styles for the testimonial cards", "The JavaScript initialization code", "The 'presets' array in the schema with pre-populated blocks and default values for settings", "The Liquid for loop to render the blocks"], c: 2 },
    { q: "What does block.shopify_attributes do, and should you include it?", o: ["It adds animation classes — include it only on animated blocks", "It enables the theme customizer to highlight and select the block when clicked — ALWAYS include it on block elements", "It adds SEO meta tags to each block — optional for performance", "It tracks block analytics — include it only if the client uses Shopify analytics"], c: 1 },
    { q: "A client wants custom product badges ('Bestseller', 'New Arrival', 'Limited Edition') that they can manage themselves. What is the best approach?", o: ["Hardcode badge text in the product card Liquid template with conditional logic based on product tags", "Create a product metafield (custom.badge_text) so the client can set badge text per product from the Shopify admin", "Install a third-party badge app from the Shopify App Store for $15/month", "Add badge text as a product variant option so it appears in the variant selector"], c: 1 },
    { q: "Which schema input type should you use for a section setting where the client needs to write formatted text with bold, italic, and links?", o: ["text — it supports basic formatting by default", "textarea — multiline text handles all formatting needs", "richtext — it provides a WYSIWYG editor with bold, italic, and link support while sanitizing the output", "html — raw HTML gives the client maximum flexibility for any formatting"], c: 2 },
    { q: "You are adding an image to a custom section. Which Liquid code follows Shopify best practices for responsive images?", o: ["<img src='{{ section.settings.image | image_url: width: 1920 }}' /> with a fixed width", "{{ section.settings.image | image_url: width: 1920 | image_tag: loading: 'lazy', widths: '375, 750, 1100, 1500, 1920', sizes: '100vw' }}", "{{ section.settings.image }} directly outputs the image with no optimization needed", "<img src='{{ section.settings.image.src }}' width='100%' height='auto' />"], c: 1 },
    { q: "The DH Standard Homepage has 10-11 sections in a specific order. What comes immediately AFTER the Hero Banner?", o: ["Featured Collection — show products immediately", "Trust Bar — free shipping, easy returns, secure payment icons to establish trust within the first 5 seconds", "Brand Story — emotional connection comes first before showing products", "Testimonials — social proof should be the second thing visitors see"], c: 1 },
    { q: "A client wants a custom FAQ section with expandable questions. What is the best architecture?", o: ["Build a single section with hardcoded questions in the Liquid template", "Build a section with 'faq_item' block types — each block has a question (text) and answer (richtext) setting, allowing the client to add/remove/reorder questions", "Use Shopify's built-in collapsible-content section without any customization", "Create a separate Liquid snippet for each FAQ question and include them manually"], c: 1 },
    { q: "You need to let the client choose between 'left', 'center', and 'right' text alignment for a section heading. Which schema type is correct?", o: ["text — the client can type 'left', 'center', or 'right'", "checkbox — one for each alignment option", "select — with options array containing value/label pairs for each alignment", "radio_button — for mutually exclusive choices like alignment"], c: 2 },
    { q: "What is the purpose of the 'limit' property on a block type in the schema?", o: ["It limits the character count of text inputs within the block", "It sets the maximum number of instances of that block type to prevent clients from adding too many blocks that break the layout", "It limits the file size of images uploaded to the block", "It restricts which pages the section can be added to"], c: 1 }
];


const task16Quiz = [
    { q: "A Shopify store header has 12 top-level navigation items. What is wrong and what should you do?", o: ["Nothing is wrong — more navigation items help users find products faster", "12 items causes decision paralysis. Reduce to maximum 6-7 top-level items and use dropdown submenus or a mega menu for subcategories.", "Remove all navigation items and rely on the search function exclusively", "Keep 12 items but make the font smaller so they all fit in one line"], c: 1 },
    { q: "You are building a product grid for mobile. Which column layout is correct for phones (375px viewport)?", o: ["1 column — single column is cleanest and easiest to scroll", "2 columns — optimal balance between image size and product visibility per screen", "3 columns — fit more products to reduce scrolling", "4 columns — match the desktop layout for consistency across devices"], c: 1 },
    { q: "A button on the product page is 32x28px on mobile. What is the problem?", o: ["The button is fine — it is large enough to be visible", "The button is below the 44x44px minimum touch target size, causing frustrating misclicks on mobile devices", "The button should be exactly 48x48px — no more, no less", "Only the width matters for touch targets — 32px width is acceptable"], c: 1 },
    { q: "You need to override a theme CSS rule but the theme uses high specificity. What is the correct approach?", o: ["Add !important to your override — it guarantees your style wins", "Increase specificity using the section ID selector like #Section-{{ section.id }} and CSS custom properties", "Edit the theme's core CSS file directly to change the original rule", "Use inline styles on every HTML element to override everything"], c: 1 },
    { q: "A client wants scroll animations on their homepage. Which implementation follows DH standards?", o: ["Add parallax scrolling to all images and bouncing entrance animations to every section", "Use subtle fade-in with translateY(20px to 0) at 300-600ms duration, and include @media (prefers-reduced-motion: reduce) to disable animations for users who need it", "Skip all animations — they always hurt performance and provide no value", "Use CSS animation libraries like Animate.css and apply 5+ different animation types across the page for variety"], c: 1 },
    { q: "The WCAG AA standard requires a minimum color contrast ratio of what for normal body text?", o: ["2:1 — any noticeable contrast is sufficient for readability", "3:1 — the standard for large text applies to all text sizes", "4.5:1 — the minimum for normal-sized text to ensure readability for users with visual impairments", "7:1 — maximum contrast is always preferred regardless of context"], c: 2 },
    { q: "During the design QA phase, you discover the store looks perfect in Chrome but the header layout is broken in Safari on iPhone. What should you remember?", o: ["Safari bugs are Apple's problem — most users are on Chrome anyway", "ALL iPhone browsers (Chrome, Firefox, Edge on iOS) use the Safari/WebKit engine, so this bug affects 100% of iPhone users — it must be fixed immediately", "Only test the store in Chrome since it has 65% market share", "Ask the client to tell their customers to use Chrome instead"], c: 1 },
    { q: "A designer sends you a Figma mockup at 1440px width. The headings look great at that width. What must you verify?", o: ["Nothing — if it looks good at 1440px, it will look good at all sizes", "Test at 990px, 1200px, 1440px, and 1920px since Shopify stores are fluid width, and test with varying content lengths since the mockup may have short placeholder text", "Only test at mobile (375px) and the design width (1440px) — two sizes is sufficient", "Scale everything proportionally using viewport units so it automatically matches at every width"], c: 1 },
    { q: "Which of these is a MANDATORY footer element for legal and conversion reasons?", o: ["Instagram feed — social proof is legally required in most jurisdictions", "Privacy Policy link — legally required by GDPR, CCPA, and most payment processors", "Blog post preview — required for SEO compliance", "Team member photos — builds trust and is required by e-commerce regulations"], c: 1 },
    { q: "You are building a complete Shopify store from a blank Dawn theme. According to the DH 7-phase process, what is Phase 1?", o: ["Build the homepage hero section first — it makes the biggest visual impact", "Foundation: Duplicate the theme, set up design tokens (CSS variables), configure Theme Settings (colors, fonts, layout), and set up navigation structure", "Install all required apps first so the sections have data to display", "Build the product page first — it is where the money is made"], c: 1 }
];

// =============================================================================
// TASK 17: CRO, PSYCHOLOGY & COPYWRITING (NEW)
// =============================================================================

// The Science of Making People Buy


const task17Content = `
<h2>🧠 TASK 17: CRO, PSYCHOLOGY & COPYWRITING — The Science of Making People Buy</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(234, 88, 12, 0.15), rgba(251, 146, 60, 0.15)); border: 2px solid rgba(234, 88, 12, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FB923C; margin-top: 0;">🚀 Why This Is the MOST Important Task in Your Training</h3>
    <p>Every task before this taught you HOW to build a Shopify store. This task teaches you HOW TO MAKE THAT STORE <strong>PRINT MONEY</strong>.</p>
    <p>A developer who understands CRO, psychology, and copywriting is worth <strong>5x more</strong> than a developer who just writes clean code. Because clean code that nobody converts on is just an expensive art project.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FB923C; padding: 20px; margin: 15px 0;">
        <strong style="color: #FB923C;">💰 The Numbers That Should Rewire Your Brain:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>The average Shopify store converts at <strong>1.4%</strong>. That means <strong>98.6%</strong> of visitors leave without buying.</li>
            <li>Improving conversion from 1.4% to 2.8% <strong>DOUBLES revenue</strong> — with ZERO extra ad spend.</li>
            <li>A store doing ₹50 Lakhs/year at 1.4% CR could do ₹1 Crore/year at 2.8% CR — same traffic, same products, same price.</li>
            <li>The difference between 1.4% and 2.8%? <strong>Psychology. Copy. CRO.</strong> The exact things you'll learn in this task.</li>
            <li>DH clients pay ₹50,000–₹3,00,000 for CRO audits alone. Developers who can DO this work get the premium projects.</li>
        </ul>
    </div>

    <div class="warning-box">
        <strong>⚠️ The DH Standard:</strong><br>
        Every store we deliver must be <strong>conversion-optimized by default</strong>. We do not ship stores that look pretty but don't sell. Every headline, every button, every section placement must have a psychological reason behind it. If you can't explain WHY something is where it is, you haven't done your job.
    </div>
</div>

<!-- =================================================================== -->
<!-- SECTION 1: CRO FUNDAMENTALS -->
<!-- =================================================================== -->

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📊 SECTION 1: CRO Fundamentals — What It Is and Why You MUST Understand It</h3>

    <h4 style="color: #93C5FD;">What Is CRO?</h4>
    <p><strong>Conversion Rate Optimization (CRO)</strong> is the systematic process of increasing the percentage of website visitors who take a desired action — buying a product, signing up for a newsletter, adding to cart, or any other goal.</p>
    <p>It is NOT guesswork. It is NOT "making things look nicer." It is a <strong>data-driven, psychology-backed discipline</strong> that treats your store like a science experiment. You hypothesize, test, measure, and iterate.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 The CRO Formula:</strong>
        <p style="margin: 10px 0 0 0; font-size: 1.2em; text-align: center;">
            <strong>Conversion Rate = (Number of Conversions / Total Visitors) x 100</strong>
        </p>
        <p style="margin: 10px 0 0 0;">Example: 100 purchases from 5,000 visitors = <strong>2.0% Conversion Rate</strong></p>
    </div>

    <h4 style="color: #93C5FD;">The Conversion Funnel — Where Money Leaks Out</h4>
    <p>Every visitor goes through a funnel. At each stage, people drop off. Your job as a CRO-aware developer is to <strong>plug the leaks</strong> at every stage.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Funnel Stage</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Happens</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Typical Drop-off</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your CRO Focus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1. Visit</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User lands on site</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">—</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page speed, first impression, hero section</td>
            </tr>
            <tr style="background: rgba(59, 130, 246, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>2. Browse</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User explores products</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">40-60% bounce</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Navigation, collection pages, search, filtering</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>3. Add to Cart</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User adds item</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only 8-12% of visitors add</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PDP copy, images, trust signals, pricing</td>
            </tr>
            <tr style="background: rgba(59, 130, 246, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4. Checkout</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User enters checkout</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-40% abandon cart</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout UX, trust badges, shipping clarity</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>5. Purchase</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User completes payment</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">~70% of checkouts convert</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment options, final trust, order confirmation</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #93C5FD;">Key Metrics Every DH Developer Must Know</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Measures</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Average</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DH Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Conversion Rate (CR)</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">% of visitors who purchase</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1.4%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #4ADE80;">3%+ (Good) / 5%+ (Excellent)</strong></td>
            </tr>
            <tr style="background: rgba(59, 130, 246, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>AOV (Average Order Value)</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Average $ per order</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$85-$100</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #4ADE80;">15-25% above niche average</strong></td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bounce Rate</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">% who leave after 1 page</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">45-55%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #4ADE80;">Under 40%</strong></td>
            </tr>
            <tr style="background: rgba(59, 130, 246, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cart Abandonment Rate</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">% who add but don't buy</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">69-70%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #4ADE80;">Under 60%</strong></td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Add-to-Cart Rate</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">% of visitors who add to cart</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8-10%</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #4ADE80;">12%+</strong></td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #4ADE80; padding: 20px; margin: 15px 0;">
        <strong style="color: #4ADE80;">💡 The 1% Improvement Math — This Will Blow Your Mind:</strong>
        <p style="margin: 10px 0 0 0;">Take a client doing ₹50 Lakhs/year with 1,00,000 annual visitors and a 1.4% conversion rate.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: rgba(74, 222, 128, 0.1);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Current:</strong> 1.4% CR</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1,400 orders</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>₹50,00,000/year</strong></td>
            </tr>
            <tr style="background: rgba(74, 222, 128, 0.15);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>+1%:</strong> 2.4% CR</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2,400 orders</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>₹85,71,000/year (+₹35.7L)</strong></td>
            </tr>
            <tr style="background: rgba(74, 222, 128, 0.2);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>+2%:</strong> 3.4% CR</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3,400 orders</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>₹1,21,43,000/year (+₹71.4L)</strong></td>
            </tr>
        </table>
        <p style="margin: 10px 0 0 0;">A <strong>1% improvement</strong> = ₹35+ Lakhs extra revenue per year. <strong>With zero extra ad spend.</strong> This is why CRO-capable developers command premium rates. You are literally printing money for clients.</p>
    </div>
</div>

<!-- =================================================================== -->
<!-- SECTION 2: PSYCHOLOGY PRINCIPLES FOR E-COMMERCE -->
<!-- =================================================================== -->

<div class="content-section" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1)); border: 2px solid rgba(168, 85, 247, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧠 SECTION 2: Psychology Principles for E-Commerce — The 6 Weapons of Influence</h3>
    <p>In 1984, Dr. Robert Cialdini published <em>Influence: The Psychology of Persuasion</em> — a book that has shaped every successful e-commerce store since. These are the 6 principles that make people say "yes." Every single one applies directly to the Shopify stores you build.</p>

    <h4 style="color: #C4B5FD;">1. Reciprocity — Give First, Sell Later</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong>The Principle:</strong> When someone gives us something, we feel compelled to give something back. This is hardwired into human psychology — we hate feeling indebted.
        <p style="margin: 10px 0 0 0;"><strong style="color: #C4B5FD;">Shopify Implementation:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Free shipping thresholds:</strong> "Free shipping on orders over ₹999" — the "gift" of free shipping triggers reciprocity AND increases AOV</li>
            <li><strong>Free gift with purchase:</strong> "Get a free travel pouch with orders over ₹2,000" — adds perceived value, customer feels they got something extra</li>
            <li><strong>Free samples:</strong> Include samples of other products in every order — next-order conversion rates jump 20-30%</li>
            <li><strong>Free content:</strong> Skincare brand offering a "Free Skin Assessment Quiz" — you give value first, then recommend products</li>
            <li><strong>Discount on first order:</strong> "10% off your first order" — the gift creates obligation to use it</li>
        </ul>
    </div>

    <h4 style="color: #C4B5FD;">2. Scarcity — Less = More Desirable</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong>The Principle:</strong> We value things more when they are rare or running out. The fear of missing out is stronger than the desire to gain. A study by Worchel (1975) showed that cookies in a nearly empty jar were rated as tastier and more desirable than identical cookies in a full jar.
        <p style="margin: 10px 0 0 0;"><strong style="color: #FCA5A5;">Shopify Implementation:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Low stock badges:</strong> "Only 3 left in stock" — triggers urgency when inventory is genuinely low</li>
            <li><strong>Countdown timers:</strong> "Sale ends in 02:14:33" — for genuine time-limited offers only</li>
            <li><strong>Limited editions:</strong> "Limited Run — Only 200 Made" — exclusivity increases perceived value</li>
            <li><strong>Seasonal messaging:</strong> "Last chance for Diwali delivery" — real deadline creates real urgency</li>
        </ul>
        <p style="margin: 10px 0 0 0;"><strong>Liquid code for dynamic low stock badge:</strong></p>
        <pre style="background: #1E293B; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 0.85em; margin: 10px 0;">
&lt;!-- Low stock urgency badge --&gt;
{%- if product.selected_or_first_available_variant.inventory_quantity &lt;= 5
    and product.selected_or_first_available_variant.inventory_quantity &gt; 0
    and product.selected_or_first_available_variant.inventory_management == 'shopify' -%}
  &lt;div class="low-stock-badge" style="
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3);
    color: #EF4444; padding: 6px 12px; border-radius: 6px;
    font-size: 0.85em; font-weight: 600;"&gt;
    &lt;span style="animation: pulse 1.5s infinite;"&gt;🔥&lt;/span&gt;
    Only {{ product.selected_or_first_available_variant.inventory_quantity }} left in stock
  &lt;/div&gt;
{%- endif -%}</pre>
    </div>

    <h4 style="color: #C4B5FD;">3. Authority — People Follow Experts</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong>The Principle:</strong> We trust and follow people or brands that demonstrate expertise, credentials, or endorsements from recognized sources. Milgram's famous experiment showed people would obey authority figures even against their own judgment.
        <p style="margin: 10px 0 0 0;"><strong style="color: #FCD34D;">Shopify Implementation:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>"As seen on" press logos:</strong> Display media logos (Vogue, Forbes, Times of India) — instantly elevates brand credibility</li>
            <li><strong>Certifications and badges:</strong> "Certified Organic", "Dermatologist Tested", "ISO 9001" — third-party validation</li>
            <li><strong>Expert endorsements:</strong> "Recommended by Dr. Sharma, Dermatologist" — medical/expert authority</li>
            <li><strong>Awards and recognition:</strong> "Winner — Best Skincare Brand 2025" — competitive authority</li>
            <li><strong>Founding story with credentials:</strong> "Founded by a MIT-trained chemist" — origin-based authority</li>
        </ul>
        <p style="margin: 10px 0 0 0;"><strong>Liquid code for trust/authority bar:</strong></p>
        <pre style="background: #1E293B; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 0.85em; margin: 10px 0;">
&lt;!-- Authority/trust bar section --&gt;
&lt;div class="trust-bar" style="
  display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;
  padding: 20px; background: var(--color-background-secondary, #F8F8F8);
  border-top: 1px solid rgba(0,0,0,0.05);
  border-bottom: 1px solid rgba(0,0,0,0.05);"&gt;
  {%- for block in section.blocks -%}
    {%- if block.type == 'trust_item' -%}
      &lt;div class="trust-item" style="
        display: flex; align-items: center; gap: 8px;
        font-size: 0.85em; color: var(--color-foreground-muted, #666);"
        {{ block.shopify_attributes }}&gt;
        {%- if block.settings.icon != blank -%}
          {{ block.settings.icon | image_url: width: 24 | image_tag: loading: 'lazy' }}
        {%- endif -%}
        &lt;span&gt;{{ block.settings.text }}&lt;/span&gt;
      &lt;/div&gt;
    {%- endif -%}
  {%- endfor -%}
&lt;/div&gt;</pre>
    </div>

    <h4 style="color: #C4B5FD;">4. Social Proof — We Do What Others Do</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #06B6D4; padding: 20px; margin: 15px 0;">
        <strong>The Principle:</strong> When uncertain, we look at what other people are doing to guide our decisions. This is why restaurants with queues get more customers — the queue IS the marketing.
        <p style="margin: 10px 0 0 0;"><strong style="color: #67E8F9;">Shopify Implementation:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Product reviews with photos:</strong> "4.8 stars from 1,847 reviews" — quantified social proof is most powerful</li>
            <li><strong>Real-time activity notifications:</strong> "Priya from Mumbai just purchased this" — creates FOMO and social proof simultaneously</li>
            <li><strong>User-generated content (UGC):</strong> Customer photos wearing/using the product — 10x more trusted than brand photos</li>
            <li><strong>Bestseller badges:</strong> "Bestseller — 10,000+ sold" — popularity as proof of quality</li>
            <li><strong>"People also bought" sections:</strong> Cross-sell with social proof — "Customers who bought X also bought Y"</li>
            <li><strong>Review count on collection pages:</strong> Show star rating + review count below each product card — helps users compare and choose</li>
        </ul>
        <p style="margin: 10px 0 0 0;"><strong>Liquid code for review snippet on product cards:</strong></p>
        <pre style="background: #1E293B; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 0.85em; margin: 10px 0;">
&lt;!-- Star rating snippet for product cards --&gt;
{%- if product.metafields.reviews.rating.value != blank -%}
  {%- assign rating = product.metafields.reviews.rating.value -%}
  {%- assign count = product.metafields.reviews.rating_count.value -%}
  &lt;div class="product-card__rating" style="
    display: flex; align-items: center; gap: 4px;
    font-size: 0.8em; margin-top: 6px;"&gt;
    &lt;div style="color: #F59E0B; letter-spacing: 1px;"&gt;
      {%- for i in (1..5) -%}
        {%- if i &lt;= rating -%}&#9733;
        {%- else -%}&#9734;
        {%- endif -%}
      {%- endfor -%}
    &lt;/div&gt;
    &lt;span style="color: #94A3B8;"&gt;({{ count }}){&lt;/span&gt;
  &lt;/div&gt;
{%- endif -%}</pre>
    </div>

    <h4 style="color: #C4B5FD;">5. Liking — We Buy From People We Like</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <strong>The Principle:</strong> We prefer to say yes to people we like. Liking comes from similarity, compliments, familiarity, and association with positive things.
        <p style="margin: 10px 0 0 0;"><strong style="color: #F9A8D4;">Shopify Implementation:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Brand personality in copy:</strong> Write like a friend, not a corporation. "Hey, we get it — finding the right moisturizer is hard" vs "Our moisturizer is formulated with..."</li>
            <li><strong>Lifestyle imagery:</strong> Show REAL people using products in relatable settings — not just white-background product shots</li>
            <li><strong>Founder story:</strong> "I struggled with acne for 10 years before creating this..." — relatability builds connection</li>
            <li><strong>Consistent brand voice:</strong> If the brand is playful, EVERY touchpoint should be playful — product descriptions, emails, checkout, even 404 pages</li>
            <li><strong>Values alignment:</strong> "1% of every sale goes to ocean cleanup" — shared values create liking</li>
        </ul>
    </div>

    <h4 style="color: #C4B5FD;">6. Commitment & Consistency — Small Yes Leads to Big Yes</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>The Principle:</strong> Once people commit to something (even something small), they feel psychologically compelled to remain consistent with that commitment. The Foot-in-the-Door technique is one of the most well-documented persuasion phenomena in psychology.
        <p style="margin: 10px 0 0 0;"><strong style="color: #6EE7B7;">Shopify Implementation:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Quiz funnels:</strong> "Find your perfect shade" quiz — user invests 2 minutes answering questions, feels committed to the recommended product</li>
            <li><strong>Wishlists:</strong> Adding to wishlist is a micro-commitment. Follow up with "Your wishlist items are almost gone!" emails</li>
            <li><strong>Free trial / samples:</strong> "Try it for 7 days" — once they commit to trying, most keep buying</li>
            <li><strong>Account creation nudge:</strong> "Save your cart for later" requires email — a micro-commitment that feeds remarketing</li>
            <li><strong>Multi-step checkout:</strong> Each step is a small commitment. By step 3, abandoning feels like wasted effort</li>
        </ul>
    </div>

    <h4 style="color: #C4B5FD;">Beyond Cialdini — Advanced Psychology Principles</h4>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(168, 85, 247, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Principle</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Means</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Application</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Loss Aversion</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pain of losing is 2x stronger than pleasure of gaining (Kahneman & Tversky)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Don't miss out on 40% off" outperforms "Get 40% off." Frame benefits as potential losses.</td>
            </tr>
            <tr style="background: rgba(168, 85, 247, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Anchoring</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First number we see becomes the reference point for all subsequent judgments</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always show the ORIGINAL price first (struck through), then the sale price. ₹2,999 → ₹1,499 feels like a steal. ₹1,499 alone feels expensive.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Decoy Effect</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Adding a third "decoy" option makes one of the other two look like the obvious best choice</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3 pricing tiers: Basic (₹999), Pro (₹1,999), Premium (₹2,499). The Premium makes Pro look like the best value. Most people pick Pro — which is what you wanted.</td>
            </tr>
            <tr style="background: rgba(168, 85, 247, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Paradox of Choice</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too many options causes decision paralysis and reduces conversion (Schwartz, 2004)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limit product variants. Use "Recommended" badges. Simplify filtering. The famous jam study: 6 options got 30% conversion, 24 options got 3%.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FOMO</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fear of Missing Out — anxiety that others are having experiences you're not</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show real-time purchase notifications. "47 people viewing this right now." But ONLY use real data — fake FOMO destroys trust.</td>
            </tr>
            <tr style="background: rgba(168, 85, 247, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Endowment Effect</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">We value things more once we feel we own them (even psychologically)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Items in YOUR cart" — possessive language. Cart page copy: "Your items are reserved." Makes abandonment feel like losing something you already have.</td>
            </tr>
        </tbody>
    </table>

    <div class="warning-box">
        <strong>⚠️ DH Ethics Line — Where Persuasion Becomes Manipulation:</strong><br>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: rgba(74, 222, 128, 0.1);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #4ADE80;">✅ Ethical (DH Approved)</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ Dark Pattern (NEVER at DH)</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Real low-stock alerts based on actual inventory</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fake "Only 2 left!" on products with 500+ stock</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Genuine countdown for a real sale ending date</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Countdown timer that resets when it hits zero</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Real purchase notifications from actual orders</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fake "Someone from Delhi just bought..." messages</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Real reviews (including negative ones)</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fake reviews or hiding all negative reviews</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clear pricing with no hidden fees</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Surprise fees at checkout that weren't shown on PDP</td>
            </tr>
        </table>
        <p style="margin: 10px 0 0 0;"><strong>The DH Rule:</strong> If the tactic requires lying to the customer, we do NOT use it. Period. Persuasion based on truth builds long-term brands. Manipulation based on lies kills them.</p>
    </div>
</div>

<!-- =================================================================== -->
<!-- SECTION 3: COPYWRITING FOR SHOPIFY STORES -->
<!-- =================================================================== -->

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">✍️ SECTION 3: Copywriting for Shopify Stores — Words That Sell</h3>
    <p>Great copy is the difference between a visitor thinking "interesting" and "I NEED this." As a DH developer, you write copy for placeholder sections, you advise clients on copy, and you build sections that FRAME copy for maximum impact. You MUST understand how words convert.</p>

    <h4 style="color: #F9A8D4;">The AIDA Formula — Every Headline Must Follow This</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); width: 30%;"><strong style="color: #F472B6; font-size: 1.1em;">A — Attention</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Stop the scroll. Use surprising stats, bold claims, or direct questions. "Your skin is aging 3x faster than it should."</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #F472B6; font-size: 1.1em;">I — Interest</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Build curiosity. Explain the problem or opportunity. "UV exposure, pollution, and stress are attacking your collagen every single day."</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #F472B6; font-size: 1.1em;">D — Desire</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show the solution and paint the outcome. "Our Vitamin C serum rebuilds collagen in 14 days — customers see visible results by week 2."</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #F472B6; font-size: 1.1em;">A — Action</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tell them exactly what to do next. "Try it risk-free — 30-day money-back guarantee."</td>
            </tr>
        </table>
    </div>

    <h4 style="color: #F9A8D4;">Product Titles — Benefit-First, Searchable, Emotional</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(236, 72, 153, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Before (Bad)</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ After (Good)</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Works</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Moisturizer 50ml</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deep Hydration Daily Moisturizer — 72-Hour Moisture Lock</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Benefit + specific claim + SEO keyword</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blue T-Shirt</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Everyday Essential Crew Tee — Midnight Blue</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lifestyle positioning + evocative color name</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Protein Powder Chocolate 1kg</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lean Muscle Whey Protein — Rich Chocolate (30 Servings)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Benefit (lean muscle) + sensory language + practical info</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #F9A8D4;">Product Descriptions — The Features → Benefits → Emotions Framework</h4>
    <p>Most developers write features. Mediocre copywriters write benefits. The best write <strong>emotions</strong>. Here is the hierarchy:</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); width: 20%;"><strong>Feature</strong> (What it IS)</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Contains 20% Vitamin C"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #94A3B8;">Informational — low conversion</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Benefit</strong> (What it DOES)</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Brightens dark spots in 14 days"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #FCD34D;">Practical — medium conversion</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Emotion</strong> (How it FEELS)</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Wake up to skin so radiant your friends ask what you changed"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #4ADE80;">Aspirational — HIGH conversion</td>
            </tr>
        </table>
        <p style="margin: 15px 0 0 0;"><strong>The perfect product description uses ALL THREE:</strong></p>
        <p style="margin: 5px 0 0 0; padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 8px;">
            <em>"Infused with 20% stabilized Vitamin C</em> <span style="color: #94A3B8;">[Feature]</span>, <em>this lightweight serum visibly brightens dark spots and evens skin tone in just 14 days</em> <span style="color: #FCD34D;">[Benefit]</span>. <em>Wake up to the kind of glow that makes you skip the foundation and let your skin do the talking.</em> <span style="color: #4ADE80;">[Emotion]</span>"
        </p>
    </div>

    <h4 style="color: #F9A8D4;">The PAS Formula — Problem, Agitate, Solution</h4>
    <p>PAS is the most powerful copywriting framework for products that solve a pain point. It works because it mirrors how people make buying decisions: they recognize a problem, feel the pain of that problem, then seek relief.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <p><strong style="color: #F472B6;">Example — Mattress Store:</strong></p>
        <p style="margin: 5px 0;"><strong>Problem:</strong> "Waking up with back pain every morning?"</p>
        <p style="margin: 5px 0;"><strong>Agitate:</strong> "That dull ache that follows you through meetings, makes you snap at your kids, and ruins every weekend plan. Bad sleep doesn't just wreck your mornings — it wrecks your life."</p>
        <p style="margin: 5px 0;"><strong>Solution:</strong> "The CloudRest Ortho Mattress uses 7-zone memory foam that maps to your spine's natural curve. 93% of our customers report zero back pain within 2 weeks. Try it for 100 nights — if you don't wake up feeling 10 years younger, we'll pick it up for free."</p>
    </div>

    <h4 style="color: #F9A8D4;">CTA Button Copy — Every Word Counts</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(236, 72, 153, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CTA Text</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Psychology Behind It</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best Used For</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>"Add to Cart"</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low commitment — just adding, not buying yet</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High-consideration products, multi-item stores</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>"Buy Now"</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direct, decisive — skips cart, goes to checkout</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Single-product stores, impulse buys, flash sales</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>"Get Yours Now"</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ownership language (endowment effect) + urgency</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limited edition, exclusive products</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>"Start My 30-Day Trial"</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Risk reversal + commitment (first-person "My")</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Subscription products, high-ticket items</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>"Yes, I Want Glowing Skin!"</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Benefit-focused + self-affirmation + enthusiasm</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Beauty, wellness, transformation products</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #F9A8D4;">Homepage Copy Architecture</h4>
    <p>The homepage is NOT about your brand. It is about your CUSTOMER. Every section must answer the visitor's unspoken question: "Is this for me, and can I trust it?"</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: rgba(236, 72, 153, 0.1);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Copy Purpose</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hero Headline</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Communicate the #1 value prop in under 8 words</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Skincare That Actually Works"</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hero Subheadline</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Expand with specificity and credibility</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Dermatologist-formulated. 50,000+ happy customers. Results in 14 days."</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trust Bar</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Remove risk instantly</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Free Shipping | 30-Day Returns | Cruelty-Free"</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Value Props (3 Icons)</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Differentiate from competitors</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Clean Ingredients | Backed by Science | Made in India"</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Social Proof</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Let customers sell for you</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"'I've tried everything — this is the ONLY serum that cleared my acne.' — Ananya K."</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Primary CTA</strong></td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Direct next action</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Shop Bestsellers" or "Take the Skin Quiz"</td>
            </tr>
        </table>
    </div>

    <h4 style="color: #F9A8D4;">Collection Page Copy — SEO + Conversion</h4>
    <p>Collection page descriptions are the most underused CRO opportunity on Shopify. Most stores leave them blank. DH stores use them for SEO ranking AND to guide purchase decisions.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <p><strong>Before (most stores):</strong></p>
        <p style="color: #94A3B8; margin: 5px 0;"><em>"Browse our collection of face serums."</em></p>
        <p style="margin: 15px 0 5px 0;"><strong>After (DH standard):</strong></p>
        <p style="margin: 5px 0;"><em>"Find the face serum your skin has been begging for. Whether you are fighting dark spots, dehydration, or fine lines — our dermatologist-formulated serums deliver visible results in 14 days or your money back. Each serum is made with 95%+ natural ingredients and zero parabens. Not sure which one? Take our 60-second Skin Quiz."</em></p>
        <p style="margin: 10px 0 0 0; color: #4ADE80;"><strong>This description: 1) Ranks for "face serum" keywords, 2) Addresses common pain points, 3) Adds trust signals, 4) Provides a CTA for undecided visitors.</strong></p>
    </div>

    <h4 style="color: #F9A8D4;">Email Capture Popup Copy — 5%+ Conversion Formulas</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(236, 72, 153, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Low Converting (1-2%)</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ High Converting (5%+)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Subscribe to our newsletter"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Get 15% Off Your First Order"</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Stay updated with our latest news"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Unlock Free Shipping + Exclusive Access"</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Join our mailing list"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Want 500 OFF your first order? Just one thing..."</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Enter your email"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Join 25,000+ people who get our skincare secrets first"</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Why the right column works:</strong> Each one offers a specific, tangible value (discount, access, community membership). No one cares about your "newsletter." They care about what they GET.</p>

    <h4 style="color: #F9A8D4;">Trust Copy — Return Policy, Guarantees & FAQ</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <p><strong style="color: #6EE7B7;">Return Policy — Before vs After:</strong></p>
        <p style="color: #94A3B8;"><strong>Before:</strong> "Returns accepted within 30 days. Product must be unused and in original packaging. Customer pays return shipping. Refund processing takes 7-10 business days."</p>
        <p style="margin: 10px 0 0 0;"><strong>After:</strong> "Not 100% in love? No worries. Send it back within 30 days — we will pay for return shipping AND refund you within 48 hours. No questions asked. We would rather lose a sale than have an unhappy customer."</p>
        <p style="margin: 10px 0 0 0; color: #4ADE80;"><strong>Why:</strong> The "After" version removes risk, shows empathy, and adds specific timelines. It makes the reader FEEL safe — which is what converts browsers into buyers.</p>

        <p style="margin: 20px 0 5px 0;"><strong style="color: #6EE7B7;">Guarantee Statement Template:</strong></p>
        <p style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 8px; margin: 5px 0;"><em>"We're so confident you'll love [Product Name] that we back every purchase with our [X]-Day Happiness Guarantee. If it doesn't [specific promise], we'll refund every rupee — and you keep the product. That's how much we believe in what we make."</em></p>

        <p style="margin: 20px 0 5px 0;"><strong style="color: #6EE7B7;">FAQ Answer Pattern — Address the REAL Question:</strong></p>
        <p style="color: #94A3B8;"><strong>Surface question:</strong> "What is your shipping time?"</p>
        <p><strong>Real question:</strong> "Am I going to wait forever and regret ordering?"</p>
        <p><strong>DH-style answer:</strong> "Most orders ship within 24 hours and reach you in 3-5 business days. You will get a tracking link via email + WhatsApp the moment your package leaves our warehouse. Over 96% of our orders arrive on time — and if yours doesn't, we'll make it right."</p>
    </div>

    <h4 style="color: #F9A8D4;">Urgency Copy — Ethical vs Dark Patterns</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(236, 72, 153, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Ethical Urgency (DH Standard)</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Dark Pattern Urgency (BANNED at DH)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Order by 2 PM for same-day dispatch" (real operational deadline)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"HURRY! This deal expires in 10:00 minutes!" (resets on refresh)</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Diwali Sale ends November 12" (real end date)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"LAST CHANCE!" displayed permanently on every page</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Only 3 left — restocking in 4 weeks" (real inventory data)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Almost gone!" on a product with 500+ units</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Early-bird pricing ends when we hit 100 orders" (real milestone)</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Today only!" shown to every visitor every day</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- =================================================================== -->
<!-- SECTION 4: PRACTICAL IMPLEMENTATION ON SHOPIFY -->
<!-- =================================================================== -->

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(56, 189, 248, 0.1)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;">🔧 SECTION 4: Practical Implementation — Where to Put Each Principle on Shopify</h3>

    <h4 style="color: #7DD3FC;">CRO Principle Placement Map</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(14, 165, 233, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Psychology Principle</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Where on Shopify</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid File / Section</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust/Authority</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Below header (trust bar), below ATC button, footer</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">sections/trust-bar.liquid, snippets/trust-badges.liquid</td>
            </tr>
            <tr style="background: rgba(14, 165, 233, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social Proof</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Below product title, homepage section, collection cards</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">snippets/product-rating.liquid, sections/testimonials.liquid</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scarcity</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Above ATC button, product card badges</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">snippets/low-stock-badge.liquid, sections/main-product.liquid</td>
            </tr>
            <tr style="background: rgba(14, 165, 233, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reciprocity</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Announcement bar, cart drawer, popup</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">sections/announcement-bar.liquid, snippets/free-shipping-bar.liquid</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Anchoring</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product price display, compare-at price</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">snippets/price.liquid (show compare_at_price FIRST, crossed out)</td>
            </tr>
            <tr style="background: rgba(14, 165, 233, 0.05);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loss Aversion</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart page, abandoned cart emails, popup exit-intent</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">sections/main-cart.liquid, templates/cart.liquid</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Endowment Effect</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart drawer language, wishlist page</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">snippets/cart-drawer.liquid ("Your items", "Reserved for you")</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #7DD3FC;">A/B Testing Basics for Shopify</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #38BDF8; padding: 20px; margin: 15px 0;">
        <p><strong>What to A/B Test (in priority order):</strong></p>
        <ol style="margin: 5px 0 0 0;">
            <li><strong>CTA button text and color</strong> — highest ROI test, easiest to run</li>
            <li><strong>Hero headline copy</strong> — first thing visitors see, biggest impact on bounce rate</li>
            <li><strong>Product image order</strong> — lifestyle first vs product-only first</li>
            <li><strong>Price display format</strong> — with or without compare-at price anchor</li>
            <li><strong>Social proof placement</strong> — above fold vs below description</li>
            <li><strong>Free shipping threshold</strong> — ₹499 vs ₹799 vs ₹999</li>
        </ol>
        <p style="margin: 15px 0 5px 0;"><strong>Minimum Sample Size Rules:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li>You need at least <strong>1,000 visitors per variation</strong> (so 2,000 total for an A/B test)</li>
            <li>Run tests for a minimum of <strong>2 full weeks</strong> (to account for day-of-week variation)</li>
            <li>Look for <strong>95% statistical significance</strong> before declaring a winner</li>
            <li>For stores with less than 5,000 monthly visitors, focus on <strong>big changes</strong> (not micro-optimizations) — you won't have enough data for subtle differences</li>
        </ul>
        <p style="margin: 15px 0 5px 0;"><strong>DH-Approved A/B Testing Tools:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Google Optimize (free):</strong> Basic A/B tests with Google Analytics integration</li>
            <li><strong>Shopify native A/B (themes):</strong> Use duplicate themes and split traffic via Cloudflare</li>
            <li><strong>Neat A/B Testing (Shopify app):</strong> Lightweight, built for Shopify themes</li>
        </ul>
    </div>

    <h4 style="color: #7DD3FC;">Heatmap Analysis — Hotjar/Clarity Setup</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #38BDF8; padding: 20px; margin: 15px 0;">
        <p><strong>Microsoft Clarity (FREE — DH default for all stores):</strong></p>
        <pre style="background: #1E293B; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 0.85em; margin: 10px 0;">
&lt;!-- Add to theme.liquid before &lt;/head&gt; --&gt;
&lt;script type="text/javascript"&gt;
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","YOUR_CLARITY_ID");
&lt;/script&gt;</pre>
        <p style="margin: 10px 0 5px 0;"><strong>What to look for in heatmaps:</strong></p>
        <ul style="margin: 5px 0 0 0;">
            <li><strong>Dead clicks:</strong> Users clicking on non-clickable elements — they expect it to be a link or button. Fix: make it clickable or change styling.</li>
            <li><strong>Rage clicks:</strong> Users clicking the same spot repeatedly — something is broken or confusing. Fix: investigate the element immediately.</li>
            <li><strong>Scroll depth:</strong> If 70% of users never see your CTA, it is too far down the page. Fix: move it above the fold.</li>
            <li><strong>Ignored areas:</strong> Sections getting zero attention — remove them or redesign them. Wasted space = wasted opportunity.</li>
            <li><strong>Form abandonment:</strong> Which field do users drop off at? Fix: simplify or remove that field.</li>
        </ul>
    </div>

    <h4 style="color: #7DD3FC;">The DH CRO Audit Checklist — 25 Points Every Store Must Pass</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <p><strong style="color: #FBBF24;">Run this checklist on EVERY store before launch:</strong></p>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9em;">
            <thead>
                <tr style="background: rgba(251, 191, 36, 0.15);">
                    <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); width: 5%;">#</th>
                    <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Check Item</th>
                    <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); width: 15%;">Category</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Hero headline communicates #1 value prop in under 8 words</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Copy</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Trust bar visible within first viewport (free shipping, returns, guarantee)</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Trust</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">CTA button is above the fold on both mobile and desktop</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">CTA</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Product descriptions use Feature → Benefit → Emotion framework</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Copy</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Reviews/ratings visible on product page and collection cards</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Social Proof</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Compare-at price shown (with strikethrough) when applicable</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Anchoring</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Low stock indicators connected to real inventory data</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Scarcity</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Free shipping threshold clearly displayed in announcement bar + cart</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Reciprocity</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Mobile page speed above 85 on PageSpeed Insights</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Technical</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Cart page shows order summary, shipping estimate, trust badges</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Checkout</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">11</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Return/refund policy linked on product page AND cart page</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Trust</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">12</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Payment method icons displayed below ATC button or in footer</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Trust</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">13</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Email capture popup offers tangible value (discount/free shipping), not "subscribe to newsletter"</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Lead Gen</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">14</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Collection pages have SEO-optimized descriptions with CTA</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">SEO + Copy</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">15</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Product images include lifestyle shots (not just white backgrounds)</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Liking</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">16</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">FAQ section addresses top 5 pre-purchase concerns</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Trust</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">17</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Cross-sell/upsell section on product page and cart page</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">AOV</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">18</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">404 page has search bar and popular product links (not dead end)</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Recovery</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">19</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Sticky ATC button on mobile product pages</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Mobile CRO</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">20</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Heatmap tool installed (Clarity/Hotjar) and recording data</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Analytics</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">21</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Checkout page has no unexpected extra costs (shipping visible from PDP)</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Checkout</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">22</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Search returns relevant results (test 10 common product queries)</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Navigation</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">23</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">No fake urgency or fake scarcity elements on the store</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Ethics</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">24</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">All CTA buttons use action-oriented, benefit-driven copy</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Copy</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">25</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Out-of-stock products have "Notify Me" + alternative recommendations</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Recovery</td></tr>
            </tbody>
        </table>
    </div>

    <h4 style="color: #7DD3FC;">Common CRO Mistakes Developers Make</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(14, 165, 233, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mistake</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Happens</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CTA button buried below the fold</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focused on design aesthetics over conversion</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ATC must be visible within first viewport on all devices. Use sticky ATC on mobile.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Using generic placeholder copy</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Client will provide copy later" — they never do</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Write conversion-focused placeholder copy using the DH templates. Never launch with Lorem ipsum.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No trust signals on PDP</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Thinks trust badges are tacky or unnecessary</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ALWAYS include trust icons below ATC: secure checkout, return policy, shipping info. Data shows 17% CR increase.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too many navigation options</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trying to showcase everything at once</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Max 6-7 top-level nav items. Use mega menus for depth. Paradox of Choice applies to navigation too.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ignoring mobile cart experience</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Testing only on desktop during development</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">75%+ of Shopify traffic is mobile. Cart drawer must be smooth, fast, and show trust + upsell on mobile.</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hiding shipping costs until checkout</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Following the default Shopify flow</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unexpected costs are the #1 reason for cart abandonment (48%). Show shipping cost or free shipping threshold on PDP.</td>
            </tr>
        </tbody>
    </table>

    <h4 style="color: #7DD3FC;">Before / After — Real Copy Changes and Their Impact</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #38BDF8; padding: 20px; margin: 15px 0;">
        <p><strong style="color: #38BDF8;">Example 1: Product Description</strong></p>
        <p style="color: #EF4444;"><strong>Before:</strong> "Organic cotton t-shirt. Available in 5 colors. Machine washable. 100% cotton."</p>
        <p style="color: #4ADE80;"><strong>After:</strong> "The t-shirt you'll reach for every single morning. Made from butter-soft 100% organic cotton that gets softer with every wash. No shrinking, no fading, no regrets. Available in 5 timeless colors that pair with literally everything in your closet."</p>
        <p style="color: #FCD34D;"><strong>Result:</strong> Add-to-cart rate increased from 4.2% to 7.8% (+85%)</p>

        <p style="margin-top: 20px;"><strong style="color: #38BDF8;">Example 2: CTA Button</strong></p>
        <p style="color: #EF4444;"><strong>Before:</strong> "Submit" (on a quiz funnel)</p>
        <p style="color: #4ADE80;"><strong>After:</strong> "Show Me My Perfect Match"</p>
        <p style="color: #FCD34D;"><strong>Result:</strong> Quiz completion rate increased from 34% to 62% (+82%)</p>

        <p style="margin-top: 20px;"><strong style="color: #38BDF8;">Example 3: Email Popup Headline</strong></p>
        <p style="color: #EF4444;"><strong>Before:</strong> "Subscribe to our newsletter for updates"</p>
        <p style="color: #4ADE80;"><strong>After:</strong> "Wait — before you go. 15% off is yours."</p>
        <p style="color: #FCD34D;"><strong>Result:</strong> Popup conversion jumped from 1.8% to 6.3% (+250%)</p>
    </div>
</div>

<!-- =================================================================== -->
<!-- SECTION 5: DH COPYWRITING TEMPLATES -->
<!-- =================================================================== -->

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">📝 SECTION 5: The DH Copywriting Templates — Copy/Paste & Customize</h3>
    <p>These templates are your starting point. NEVER launch a store with Lorem ipsum or blank sections. Use these, customize for the brand, and you will already be ahead of 90% of Shopify stores.</p>

    <h4 style="color: #6EE7B7;">Product Description Template</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <pre style="background: #1E293B; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 0.85em; white-space: pre-wrap;">
[OPENING HOOK — 1 sentence that speaks to the customer's desire or pain point]
"Tired of [common problem]? Meet the [Product Name]."

[BENEFIT PARAGRAPH — 2-3 sentences explaining what the product DOES for them]
"[Product Name] [primary benefit statement]. [Secondary benefit].
[Emotional outcome — how they'll FEEL]."

[FEATURES LIST — 4-6 bullet points, each starting with a benefit]
- [Benefit]: [Feature explanation]
- [Benefit]: [Feature explanation]
- [Benefit]: [Feature explanation]
- [Benefit]: [Feature explanation]

[SOCIAL PROOF — 1 short customer quote or stat]
"Join [number]+ customers who [achieved result]."

[TRUST + CTA]
"[Guarantee statement]. [Urgency if applicable]. [Call to action]."</pre>
    </div>

    <h4 style="color: #6EE7B7;">Homepage Headline Formulas — 10 Proven Templates</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
            <thead>
                <tr style="background: rgba(16, 185, 129, 0.15);">
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">#</th>
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Formula</th>
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">[Product Category] That Actually [Desired Result]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Skincare That Actually Works"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">The [Adjective] Way to [Desired Outcome]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"The Effortless Way to Look Put Together"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Say Goodbye to [Pain Point]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Say Goodbye to Back Pain Mornings"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">[Number]+ [People] Trust [Brand] for [Benefit]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"50,000+ Athletes Trust FuelFit for Recovery"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Built for [Specific Audience] Who [Characteristic]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Built for Moms Who Refuse to Compromise on Style"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Your [Routine/Life] Deserves [Better/The Best]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Your Morning Routine Deserves Better"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Not Just [Product] — [Elevated Positioning]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Not Just Coffee — A Daily Ritual"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">[Result] in [Timeframe] — Guaranteed</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Clearer Skin in 14 Days — Guaranteed"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Finally, [Category] Made for [Real Need]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Finally, Supplements Made for Indian Bodies"</td></tr>
                <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">[Do Something You Love] Without [Common Tradeoff]</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Eat Dessert Without the Guilt"</td></tr>
            </tbody>
        </table>
    </div>

    <h4 style="color: #6EE7B7;">Email Popup Templates</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <p><strong>Template 1 — The Discount Hook:</strong></p>
        <p style="padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 6px;"><strong>Headline:</strong> "Get [X]% Off — Just Because You're Here"<br><strong>Subtext:</strong> "Join [number]+ insiders who get first access to drops, deals, and surprises."<br><strong>Button:</strong> "Claim My Discount"<br><strong>Dismiss:</strong> "No thanks, I'll pay full price"</p>

        <p style="margin-top: 15px;"><strong>Template 2 — The Curiosity Hook:</strong></p>
        <p style="padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 6px;"><strong>Headline:</strong> "Psst... Want the Insider Price?"<br><strong>Subtext:</strong> "Our email list gets exclusive deals you won't find anywhere else."<br><strong>Button:</strong> "Show Me the Deals"<br><strong>Dismiss:</strong> "I prefer to pay more"</p>

        <p style="margin-top: 15px;"><strong>Template 3 — The Free Shipping Hook:</strong></p>
        <p style="padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 6px;"><strong>Headline:</strong> "Free Shipping on Your First Order"<br><strong>Subtext:</strong> "No minimum. No catch. Just enter your email."<br><strong>Button:</strong> "Unlock Free Shipping"<br><strong>Dismiss:</strong> "I'll pay for shipping"</p>
    </div>

    <h4 style="color: #6EE7B7;">Cart Abandonment Messaging Templates</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <p><strong>Exit-Intent Popup (on cart/checkout page):</strong></p>
        <p style="padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 6px;">"Wait! Your [Product Name] is almost yours."<br>"Complete your order in the next 15 minutes and get free shipping."<br>Button: "Complete My Order"</p>

        <p style="margin-top: 15px;"><strong>Abandoned Cart Email #1 (sent 1 hour later):</strong></p>
        <p style="padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 6px;"><strong>Subject:</strong> "Did you forget something?"<br><strong>Body:</strong> "Hey [Name], looks like you left [Product] behind. Good news — it's still in your cart. But at the rate it's selling, we can't hold it forever."<br><strong>CTA:</strong> "Return to My Cart"</p>

        <p style="margin-top: 15px;"><strong>Abandoned Cart Email #2 (sent 24 hours later):</strong></p>
        <p style="padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 6px;"><strong>Subject:</strong> "Still thinking about it? Here's 10% off."<br><strong>Body:</strong> "We get it — decisions are hard. Here's a little nudge: use code COMEBACK10 for 10% off your cart. Valid for 48 hours only."<br><strong>CTA:</strong> "Claim My 10% Off"</p>
    </div>

    <h4 style="color: #6EE7B7;">Out-of-Stock Messaging Templates</h4>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <p><strong>On Product Page (replaces disabled ATC button):</strong></p>
        <pre style="background: #1E293B; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 0.85em; margin: 10px 0;">
&lt;!-- Out-of-stock section with email capture --&gt;
{%- if product.available == false -%}
  &lt;div class="oos-section" style="
    background: rgba(251, 146, 60, 0.1); border: 1px solid rgba(251, 146, 60, 0.3);
    border-radius: 10px; padding: 20px; text-align: center; margin: 15px 0;"&gt;
    &lt;p style="font-weight: 600; color: #FB923C; margin: 0 0 5px 0;"&gt;
      Sold Out — This Went Fast! 🔥
    &lt;/p&gt;
    &lt;p style="font-size: 0.9em; margin: 0 0 15px 0;"&gt;
      Enter your email and we'll notify you the SECOND it's back.
    &lt;/p&gt;
    &lt;form class="oos-notify-form" style="display: flex; gap: 8px; max-width: 400px; margin: 0 auto;"&gt;
      &lt;input type="email" placeholder="your@email.com" required
        style="flex: 1; padding: 10px 14px; border-radius: 6px;
               border: 1px solid rgba(255,255,255,0.2);" /&gt;
      &lt;button type="submit" style="
        padding: 10px 20px; background: #FB923C; color: #fff;
        border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"&gt;
        Notify Me
      &lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;
{%- endif -%}</pre>
        <p style="margin: 10px 0 0 0;"><strong>Key copy principles:</strong> The messaging reframes "out of stock" (negative) as "sold out — this went fast" (social proof + scarcity). It gives the user an action to take (enter email) instead of a dead end. This recovers 8-15% of would-be-lost customers as email leads.</p>
    </div>
</div>

<!-- =================================================================== -->
<!-- FINAL SUMMARY -->
<!-- =================================================================== -->

<div class="content-section" style="background: linear-gradient(135deg, rgba(234, 88, 12, 0.15), rgba(251, 146, 60, 0.15)); border: 2px solid rgba(234, 88, 12, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FB923C; margin-top: 0;">🎯 Summary — What You Must Remember</h3>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FB923C; padding: 20px; margin: 15px 0;">
        <strong style="color: #FB923C;">The 10 CRO Commandments for DH Developers:</strong>
        <ol style="margin: 10px 0 0 0;">
            <li><strong>Every design decision must have a conversion reason.</strong> If you can't explain why, rethink it.</li>
            <li><strong>Copy is not filler.</strong> It is the #1 conversion lever. Write it like revenue depends on it — because it does.</li>
            <li><strong>Trust is not optional.</strong> Trust bar, reviews, guarantees, and payment icons on every store.</li>
            <li><strong>Mobile first, always.</strong> 75%+ of Shopify traffic is mobile. If it doesn't convert on mobile, it doesn't convert.</li>
            <li><strong>Speed is CRO.</strong> Every 1-second delay in load time drops conversion by 7%.</li>
            <li><strong>Use psychology ethically.</strong> Persuasion based on truth builds brands. Dark patterns destroy them.</li>
            <li><strong>Test, don't guess.</strong> Install Clarity on every store. Watch 10 session recordings before any CRO changes.</li>
            <li><strong>The ATC button is sacred.</strong> Always visible, always above the fold on mobile, always benefit-driven copy.</li>
            <li><strong>Price anchoring is free money.</strong> Always show compare-at price when applicable.</li>
            <li><strong>Run the 25-point CRO checklist on every single store.</strong> No exceptions.</li>
        </ol>
    </div>

    <div class="warning-box">
        <strong>⚠️ Your Challenge After This Task:</strong><br>
        Pick any live Shopify store (competitor or client). Run the 25-point DH CRO Audit Checklist on it. Document every failure. Write a 1-page CRO improvement plan with specific copy suggestions. This exercise alone will teach you more about CRO than any course ever could — because you'll be analyzing REAL stores with REAL problems.
    </div>
</div>
`;


const task17Quiz = [
    {
        q: "A Shopify store gets 80,000 visitors/month and converts at 1.4% with an AOV of ₹2,500. If you improve the conversion rate to 2.4% (a 1% increase), what is the approximate additional MONTHLY revenue?",
        o: [
            "₹50,000 — a small improvement with minimal business impact",
            "₹2,00,000 — the additional 800 monthly orders at ₹2,500 AOV generate significant revenue",
            "₹10,00,000 — every percentage point multiplies revenue tenfold",
            "₹25,000 — CRO improvements rarely have meaningful revenue impact"
        ],
        c: 1
    },
    {
        q: "A skincare product page shows the price as '₹1,499' with no other price reference. A competitor shows '₹2,999' crossed out, then '₹1,499' next to it. Which psychology principle explains why the competitor's approach converts better, and why?",
        o: [
            "Social Proof — seeing a higher price proves other people valued the product more",
            "Anchoring — the crossed-out ₹2,999 becomes the mental reference point, making ₹1,499 feel like a steal by comparison",
            "Reciprocity — the customer feels the brand is giving them a discount gift, so they feel obligated to purchase",
            "Scarcity — showing two prices implies the lower price is temporary and about to disappear"
        ],
        c: 1
    },
    {
        q: "You are writing a product description for an organic face serum. Which of these follows the Feature → Benefit → Emotion framework correctly?",
        o: [
            "'Contains Vitamin C, Hyaluronic Acid, and Niacinamide. Organic formula. 30ml bottle.' — lists features clearly for informed buyers",
            "'Our serum brightens skin. It reduces dark spots. It hydrates deeply. Buy now for better skin.' — focuses on benefits without unnecessary details",
            "'Infused with 20% Vitamin C and Hyaluronic Acid, this serum fades dark spots in 14 days. Wake up to the kind of glow that makes you skip foundation entirely.' — Feature, then Benefit, then Emotion",
            "'You deserve beautiful skin. Love yourself. Treat yourself to our premium organic serum today.' — emotion-first copy creates the strongest connection"
        ],
        c: 2
    },
    {
        q: "A client's store has a popup that says 'Subscribe to our newsletter for updates.' It converts at 1.2%. You need to improve it. Which replacement headline would likely achieve 5%+ conversion and why?",
        o: [
            "'Enter your email below' — simple and direct copy always wins over clever copy",
            "'SIGN UP NOW! DON'T MISS OUT! HURRY!!!' — urgency and capitalization demand attention",
            "'Get 15% Off Your First Order' — offers specific, tangible value in exchange for the email, making the trade feel worth it",
            "'We have a newsletter' — honest and transparent copy builds trust better than sales tactics"
        ],
        c: 2
    },
    {
        q: "A Shopify store has a countdown timer that resets to '2 hours left' every time a customer refreshes the page. There is no actual sale ending. What is the correct DH position on this?",
        o: [
            "This is fine — urgency increases conversions regardless of whether the deadline is real",
            "This is a dark pattern that DH strictly prohibits. Fake urgency destroys customer trust, can violate consumer protection laws, and damages the brand long-term. Only use countdowns tied to real deadlines.",
            "This is acceptable if the product is high-margin since the revenue gain justifies the approach",
            "This is fine as long as you disclose somewhere in the fine print that the timer is for motivational purposes"
        ],
        c: 1
    },
    {
        q: "You are running a CRO audit and notice the ATC (Add to Cart) button on mobile requires scrolling past 3 screens of product description to reach. Heatmap data shows 68% of mobile users never scroll that far. What should you do?",
        o: [
            "Nothing — users who really want the product will find the button regardless of where it is",
            "Move the entire product description below the ATC button AND implement a sticky ATC button that stays fixed at the bottom of the mobile viewport during scroll",
            "Remove the product description to make the ATC button appear higher on the page",
            "Add an arrow animation pointing downward to encourage users to scroll to the button"
        ],
        c: 1
    },
    {
        q: "A store with 25 product variants per product (5 sizes x 5 colors) has a 2.1% conversion rate. After reducing to 3 curated color options per size (15 total variants) with a 'More Colors' expandable option, conversion jumps to 3.4%. Which psychological principle explains this?",
        o: [
            "Scarcity — fewer visible options makes each one seem more limited and valuable",
            "Anchoring — the initial 3 options anchor expectations before revealing more choices",
            "Paradox of Choice — too many options causes decision paralysis. Reducing visible choices simplifies the decision and increases action.",
            "Social Proof — fewer options implies the remaining ones are the most popular choices"
        ],
        c: 2
    },
    {
        q: "A client asks you to add 'Only 2 left in stock!' badges to ALL products, even those with 500+ inventory. They say it will increase urgency and sales. How should you respond?",
        o: [
            "Implement it — the client is paying and knows their business better than you do",
            "Implement it but use 'Only 5 left' instead of 'Only 2 left' to make it slightly more believable",
            "Refuse and explain: DH policy prohibits fake scarcity. Instead, offer to implement REAL low-stock badges that trigger only when actual inventory drops below a threshold (e.g., 5 units), which builds genuine trust and avoids legal risk.",
            "Implement it but add a tiny disclaimer at the bottom of the page saying 'Stock levels are approximate'"
        ],
        c: 2
    },
    {
        q: "You are writing CTA button copy for a premium mattress brand (₹45,000 product). The current button says 'Buy Now.' Which alternative would likely convert better for this high-consideration purchase, and why?",
        o: [
            "'ADD TO CART NOW!!!' — urgency and capitalization create excitement for expensive purchases",
            "'Start My 100-Night Free Trial' — reduces perceived risk with trial language, uses first-person 'My' for ownership (Endowment Effect), and reframes ₹45,000 as a risk-free trial rather than a purchase",
            "'Purchase' — clean, professional, and unambiguous for luxury buyers",
            "'Click Here' — simple and universally understood across all demographics"
        ],
        c: 1
    },
    {
        q: "From the DH 25-Point CRO Audit Checklist, which combination represents the THREE most critical items that address the #1 cause of cart abandonment?",
        o: [
            "Reviews visible, email popup offers value, FAQ addresses concerns — social proof and information reduce cart abandonment",
            "Free shipping threshold displayed, checkout has no unexpected costs, shipping shown on PDP — unexpected costs are the #1 abandonment reason (48%), and all three items ensure pricing transparency throughout the funnel",
            "Hero headline under 8 words, CTA above fold, collection pages have descriptions — these optimize the top of funnel where most visitors drop",
            "Low stock badges connected to real data, compare-at price shown, cross-sell sections added — urgency and value perception drive checkout completion"
        ],
        c: 1
    }
];

// Expose to window for app lookup

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
window.task18Quiz = task18Quiz;
window.task14Content = task14Content;
window.task15Content = task15Content;
window.task16Content = task16Content;
window.task17Content = task17Content;
window.task14Quiz = task14Quiz;
window.task15Quiz = task15Quiz;
window.task16Quiz = task16Quiz;
window.task17Quiz = task17Quiz;

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
