// Full Stack Developer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 18 Tasks, 210+ Quiz Questions, Tech Stack Mastery

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "Full Stack Mindset",
        description: "Zero Tolerance & Principles",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: The ₹5 Lakh Failure Story",
            "🛡️ Concept: Peer Review Culture",
            "🚀 Concept: 5 Core Principles"
        ]
    },
    {
        id: 3,
        title: "Project Planning",
        description: "Specs before Code",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📄 Doc: Technical Spec Document (TSD)",
            "🔎 Phase: Discovery & Paid Consulting",
            "⚠️ Phase: Risk Identification"
        ]
    },
    {
        id: 4,
        title: "Tech Stack Mastery",
        description: "Next.js, Node, Postgres",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "⚛️ Frontend: Next.js + Tailwind",
            "🔙 Backend: Node.js + Express vs Server Actions",
            "🗄️ Database: PostgreSQL + Prisma"
        ]
    },
    {
        id: 5,
        title: "Setup & Architecture",
        description: "Repository Hygiene",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📂 Structure: Feature-based Folders",
            "🌿 Git: Branching Strategy",
            "🔑 Env: Security Best Practices"
        ]
    },
    {
        id: 6,
        title: "Development Phases",
        description: "The 6-Week Sprints",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "1️⃣ Phase 1: Foundation (Auth/DB)",
            "2️⃣ Phase 2: Core Features",
            "3️⃣ Phase 3: Polish & Testing"
        ]
    },
    {
        id: 7,
        title: "Database Design",
        description: "Schema & Relations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📐 Design: Normalization",
            "⚡ Perf: Indexing & Query Optimization",
            "🔄 Tool: Prisma Migrations"
        ]
    },
    {
        id: 8,
        title: "API Development",
        description: "REST & Typesafety",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🌐 Standard: RESTful Best Practices",
            "🛡️ Security: Zod Validation",
            "📚 Docs: Swagger/OpenAPI"
        ]
    },
    {
        id: 9,
        title: "Security Essentials",
        description: "OWASP Top 10",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🛡️ Topic: SQL Injection Prevention",
            "🛡️ Topic: XSS & CSRF",
            "🔐 Topic: JWT vs Sessions"
        ]
    },
    {
        id: 10,
        title: "QA & Testing",
        description: "Automated & Manual",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🧪 Test: Unit Testing (Jest)",
            "🧪 Test: E2E Testing (Playwright)",
            "✅ Check: The Pre-Merge Checklist"
        ]
    },
    {
        id: 11,
        title: "Deployment & DevOps",
        description: "CI/CD & Hosting",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "☁️ Host: Vercel vs Railway vs AWS",
            "🚀 Pipe: GitHub Actions CI/CD",
            "📊 Monitor: Sentry & Logging"
        ]
    },
    {
        id: 12,
        title: "Client Handover",
        description: "Documentation & Training",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "📦 Pack: The Handover Package",
            "🎥 Train: Loom Library",
            "🤝 Support: Warranty Period"
        ]
    },
    {
        id: 13,
        title: "Difficult Situations",
        description: "Server Outages & Crisis",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔥 Scenario: Database Corruption",
            "🔥 Scenario: Security Breach",
            "🔥 Scenario: API Rate Limiting"
        ]
    },
    {
        id: 14,
        title: "AI Development",
        description: "Copilot & Refactoring",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🤖 Prompt: Refactoring Legacy Code",
            "🤖 Prompt: Generating Types",
            "⚠️ Warn: AI Hallucinations"
        ]
    },
    {
        id: 15,
        title: "Shopify App & Theme Dev",
        description: "Liquid, CLI & Extensions",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "🎨 Topic: Liquid Templating Language",
            "🛠️ Tool: Shopify CLI & Theme Kit",
            "🧩 Concept: App Extensions & Metafields"
        ]
    },
    {
        id: 16,
        title: "Client Project Delivery",
        description: "Handoff, Staging & Deployment",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📦 Phase: Project Handoff Workflow",
            "🌐 Phase: Staging Environments",
            "✅ Check: Deployment Checklist"
        ]
    },
    {
        id: 17,
        title: "Performance & DevOps",
        description: "Speed, Security & CI/CD",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 75 min",
            "⚡ Topic: Core Web Vitals & PageSpeed",
            "🔒 Topic: SSL, Headers & OWASP",
            "🚀 Topic: CI/CD Pipelines & Hosting"
        ]
    },
    {
        id: 18,
        title: "Career & Final Project",
        description: "Growth Path & Practical Build",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "📈 Path: Full-Stack Career Growth",
            "🎯 Specialization: Tracks & Certifications",
            "🏗️ Project: End-to-End Build Exercise"
        ]
    }
];


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
<h2>📚 TASK 1: FULL-STACK MINDSET - The ₹5 Lakh Mistake</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into full-stack development, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #10B981; font-size: 1.2em;">⭐ YOU (Full-Stack)</strong> → <strong>THE COMPLETE ENGINE - build the entire product end-to-end</strong><br>
            ↓<br>
            <strong style="color: #F472B6;">Design Implementation</strong> → pixel-perfect UI<br>
            ↓<br>
            <strong style="color: #60A5FA;">Backend & Database</strong> → reliable, secure, fast<br>
            ↓<br>
            <strong style="color: #A78BFA;">Client Satisfaction</strong> → leads to 5-star reviews
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #059669; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">🔧 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a full-stack developer, you are the <strong>COMPLETE ENGINE</strong> who builds entire products from frontend to backend. You understand the whole picture—databases, APIs, security, UI, and performance. A bug in your checkout flow = lost sales. A slow API = frustrated users. A security flaw = ₹5 Lakh disaster. Your code touches EVERY layer of the application, making you indispensable to client success.</p>
    </div>
    
    <p style="color: #10B981; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Broken full-stack code = Broken product = Broken client trust = Chain collapses. You ARE the backbone.</p>
</div>

<div class="content-section">
    <h3>⚠️ THE STORY THAT CHANGED EVERYTHING</h3>
    <p>A developer at a well-funded startup hardcoded an API key in the frontend React code. The key was for a geolocation service charging $0.005 per request. Scrapers discovered the exposed key within 72 hours, automated scripts hammered the API, and within 24 hours the client received a bill for ₹5 Lakhs (~$6,000 USD).</p>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 20px 0;">
        <strong style="color: #EF4444;">🚨 THE REAL COST:</strong>
        <ul style="margin: 10px 0;">
            <li>₹5 Lakhs in API charges (paid by Digital Heroes)</li>
            <li>Client relationship damaged permanently</li>
            <li>Developer's reputation destroyed</li>
            <li>3 weeks of emergency work to fix and migrate</li>
            <li>Future billing disputes with the API provider</li>
        </ul>
        <p style="color: #F87171; font-weight: bold; margin-top: 15px;">This was not a sophisticated attack. It was a SIMPLE mistake that a 5-minute code review would have caught.</p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 PART 1: THE PROFESSIONAL DEVELOPER MINDSET</h3>
    
    <h4>1.1 Code Runs on REAL Money</h4>
    <p>Unlike tutorials or side projects, every line of code you write at Digital Heroes touches real revenue. Consider these scenarios:</p>
    <ul>
        <li><strong>E-commerce checkout:</strong> A bug in the payment flow = lost sales ($1,000s/hour)</li>
        <li><strong>SaaS dashboard:</strong> Slow query = churned customers ($10,000s/year)</li>
        <li><strong>Authentication:</strong> Security flaw = data breach (unlimited liability)</li>
        <li><strong>API performance:</strong> Every 100ms delay = 1% conversion drop</li>
    </ul>
    
    <h4>1.2 The Two Types of Developers</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #EF4444;">❌ The "It Works on My Machine" Developer</strong><br><br>
                • Writes code without planning<br>
                • Uses \`any\` in TypeScript "temporarily"<br>
                • Skips testing because "it's obvious"<br>
                • Hardcodes values for speed<br>
                • Blames environment when bugs appear<br>
                • Never reads error logs carefully<br>
                <em style="color: #F87171;">Will be stuck at ₹30K/month forever</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #10B981;">✅ The Digital Heroes Developer</strong><br><br>
                • Plans architecture before touching code<br>
                • Treats TypeScript as law, not suggestion<br>
                • Writes tests even for "simple" functions<br>
                • Uses environment variables religiously<br>
                • Takes ownership when bugs appear<br>
                • Reads every line of error messages<br>
                <em style="color: #10B981;">Commands ₹1L+/month and builds trust</em>
            </td>
        </tr>
    </table>
    
    <h4>1.3 Why Attitude > Skill at Entry Level</h4>
    <p>We can teach you React, PostgreSQL, and deployment. We CANNOT teach you to care about quality. The developers who rise fastest are those who:</p>
    <ul>
        <li>Triple-check their own code before asking for review</li>
        <li>Ask "what could go wrong?" for every feature</li>
        <li>Document decisions without being asked</li>
        <li>Communicate blockers immediately, not after 3 days</li>
        <li>Learn from every code review comment</li>
    </ul>
</div>

<div class="content-section">
    <h3>🛡️ PART 2: THE 5 CORE PRINCIPLES (Memorize These)</h3>
    
    <h4>PRINCIPLE 1: Plan Twice, Code Once</h4>
    <p>Before writing ANY code, you must have:</p>
    <ul>
        <li><strong>Database Schema:</strong> Know your tables, relationships, and indexes</li>
        <li><strong>API Endpoints:</strong> List every route with request/response shapes</li>
        <li><strong>Component Tree:</strong> Sketch the component hierarchy</li>
        <li><strong>Edge Cases:</strong> What happens when data is empty? When user is offline?</li>
    </ul>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ BAD: Starting to code immediately<br>
        const users = await fetch('/api/users') // What's the shape? Error handling?<br><br>
        // ✅ GOOD: Planning first<br>
        // Schema: User { id: string, email: string, createdAt: Date }<br>
        // Endpoint: GET /api/users -> { users: User[], total: number }<br>
        // Error: 401 -> redirect to login, 500 -> show toast<br>
        // Edge: empty array -> show "No users yet" message
    </div>
    
    <h4>PRINCIPLE 2: Typesafety is Non-Negotiable</h4>
    <p>The \`any\` type defeats the purpose of TypeScript. It creates runtime bombs that explode in production at 3 AM.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ FORBIDDEN: Using 'any'<br>
        const data: any = await res.json();<br>
        console.log(data.user.name); // Might crash!<br><br>
        // ✅ REQUIRED: Full typing with Zod validation<br>
        const UserSchema = z.object({<br>
        &nbsp;&nbsp;id: z.string().uuid(),<br>
        &nbsp;&nbsp;name: z.string().min(1),<br>
        &nbsp;&nbsp;email: z.string().email()<br>
        });<br>
        const data = UserSchema.parse(await res.json()); // Safe!
    </div>
    
    <h4>PRINCIPLE 3: Don't Repeat Yourself (DRY)</h4>
    <p>If you write the same logic twice, extract it into a function. Three times? It needs its own module.</p>
    <ul>
        <li><strong>Repeated API calls?</strong> Create a \`useQuery\` hook or API client class</li>
        <li><strong>Repeated UI patterns?</strong> Create a reusable component</li>
        <li><strong>Repeated validation?</strong> Create a Zod schema and import it</li>
        <li><strong>Repeated error handling?</strong> Create a middleware or wrapper</li>
    </ul>
    
    <h4>PRINCIPLE 4: Secure by Default</h4>
    <p>Security is not a feature you add later. It's baked into every decision:</p>
    <ul>
        <li><strong>Environment Variables:</strong> ALL secrets in .env, NEVER in code</li>
        <li><strong>Input Validation:</strong> Validate EVERY input with Zod (frontend AND backend)</li>
        <li><strong>SQL Injection:</strong> NEVER concatenate user input into queries</li>
        <li><strong>XSS Prevention:</strong> NEVER use dangerouslySetInnerHTML with user data</li>
        <li><strong>CSRF Tokens:</strong> Required for all state-changing operations</li>
        <li><strong>Rate Limiting:</strong> All public endpoints must have limits</li>
    </ul>
    
    <h4>PRINCIPLE 5: Peer Review is Mandatory</h4>
    <p>No code reaches \`main\` or \`production\` without at least ONE other developer approving it. This is not bureaucracy—it's insurance.</p>
    <div class="highlight-box">
        <strong>Why Reviews Work:</strong>
        <ul>
            <li>Fresh eyes catch what tired eyes miss</li>
            <li>Knowledge spreads across the team</li>
            <li>Standards stay consistent</li>
            <li>Bugs are caught before they cost money</li>
        </ul>
        <p><strong>Exception Policy:</strong> There are NO exceptions. Even hotfixes get reviewed in a 5-minute sync call.</p>
    </div>
</div>

<div class="content-section">
    <h3>🔐 PART 3: SECURITY FUNDAMENTALS (The Basics You Must Know)</h3>
    
    <h4>3.1 Environment Variables: The Golden Rule</h4>
    <p>Any value that differs between environments (dev/staging/prod) OR is secret MUST be in environment variables.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ NEVER: Hardcoding secrets<br>
        const stripe = new Stripe("sk_live_abc123xyz");<br>
        const dbUrl = "postgresql://admin:password@db.com/prod";<br><br>
        // ✅ ALWAYS: Environment variables<br>
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);<br>
        const dbUrl = process.env.DATABASE_URL;
    </div>
    <p><strong>Files to create:</strong></p>
    <ul>
        <li>\`.env.local\` - Your local development secrets (gitignored)</li>
        <li>\`.env.example\` - Template with dummy values (committed)</li>
        <li>Vercel/Railway dashboard - Production secrets (never in code)</li>
    </ul>
    
    <h4>3.2 SQL Injection: The Classic Attack</h4>
    <p>SQL injection is a 20-year-old vulnerability that still claims victims because developers concatenate strings.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ VULNERABLE: String concatenation<br>
        const query = "SELECT * FROM users WHERE id = " + userId;<br>
        // If userId = "1 OR 1=1" -> Returns ALL users!<br>
        // If userId = "1; DROP TABLE users;" -> Goodbye database!<br><br>
        // ✅ SAFE: Parameterized queries (Prisma does this automatically)<br>
        const user = await prisma.user.findUnique({<br>
        &nbsp;&nbsp;where: { id: userId }<br>
        });
    </div>
    
    <h4>3.3 XSS (Cross-Site Scripting): The Silent Killer</h4>
    <p>XSS allows attackers to inject JavaScript into your pages, stealing session tokens and user data.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ VULNERABLE: Rendering raw HTML from user<br>
        &lt;div dangerouslySetInnerHTML={{ __html: userBio }} /&gt;<br>
        // If userBio = "&lt;script&gt;steal(document.cookie)&lt;/script&gt;" -> Hacked!<br><br>
        // ✅ SAFE: React escapes by default<br>
        &lt;div&gt;{userBio}&lt;/div&gt;  // Script tags are shown as text, not executed<br><br>
        // ✅ If you MUST render HTML: Sanitize first<br>
        import DOMPurify from 'dompurify';<br>
        &lt;div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userBio) }} /&gt;
    </div>
</div>

<div class="content-section">
    <h3>📊 PART 4: CODE QUALITY STANDARDS</h3>
    
    <h4>4.1 Linting & Formatting</h4>
    <p>ESLint and Prettier run on every save. No exceptions. The configuration is shared across the team.</p>
    <ul>
        <li><strong>Warnings:</strong> Must be resolved before merging</li>
        <li><strong>Errors:</strong> Build fails immediately</li>
        <li><strong>Format on Save:</strong> Enabled in all editor configs</li>
    </ul>
    
    <h4>4.2 Naming Conventions</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Convention</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Example</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Components</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PascalCase</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UserProfileCard.tsx</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">camelCase</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">getUserById()</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Constants</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SCREAMING_SNAKE</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">MAX_RETRY_COUNT</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Files</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">kebab-case</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">user-actions.ts</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Database Tables</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PascalCase (Prisma)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UserProfile</td>
        </tr>
    </table>
    
    <h4>4.3 Comment Guidelines</h4>
    <p>Comments explain WHY, not WHAT. Good code is self-documenting for the WHAT.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ BAD: Stating the obvious<br>
        // Increment counter by 1<br>
        counter++;<br><br>
        // ✅ GOOD: Explaining why<br>
        // Using retry counter to prevent infinite loops on flaky API<br>
        // After 3 failures, we surface error to user instead of silent retry<br>
        retryCount++;
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASKS</h3>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise 1: Security Audit</h4>
        <p>Review this vulnerable code snippet and identify ALL security issues:</p>
        <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace; border-radius: 8px;">
            const user = await db.query("SELECT * FROM users WHERE id=" + req.body.id);<br>
            const apiKey = "sk_live_abcd1234";<br>
            return &lt;div dangerouslySetInnerHTML={{ __html: user.bio }} /&gt;;
        </div>
        <p><strong>List all vulnerabilities and write the secure version.</strong></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise 2: Environment Setup</h4>
        <p>Create an \`.env.example\` file for a Next.js + PostgreSQL + Stripe project. Include all necessary variables with dummy/placeholder values.</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise 3: Type Definition</h4>
        <p>Given this API response, write the complete TypeScript interface AND Zod schema:</p>
        <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace; border-radius: 8px;">
            { "user": { "id": "abc123", "email": "test@example.com", "role": "admin", "createdAt": "2024-01-15T10:30:00Z" } }
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>15 questions</strong> testing your understanding of Full-Stack Mindset</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 2</li>
        <li>⏱️ Questions cover security, code quality, and professional standards</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 2: PLANNING - The Technical Spec</h2>

<div class="content-section">
    <h3>📄 The TSD (Technical Spec Document)</h3>
    <p>We do not write code until the TSD is approved. It includes:</p>
    <ul>
        <li><strong>ER Diagram:</strong> Database relationships.</li>
        <li><strong>API Endpoints:</strong> List of GET/POST/PUT.</li>
        <li><strong>Tech Stack:</strong> Verified libraries.</li>
        <li><strong>Risks:</strong> "Payment gateway approvals might take 3 days."</li>
    </ul>
</div>

<div class="content-section">
    <h3>💸 Discovery Phase</h3>
    <p>Planning is WORK. We charge for Discovery. Never plan for free.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: ER Diagram</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Schema Planning</h4>
        <p>Client wants a "Course Platform". Define the relations between User, Course, Lesson, and Enrollment. Write the Prisma Schema pseudo-code.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Planning</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 3: TECH STACK - The Digital Heroes Stack</h2>

<div class="content-section">
    <h3>⚛️ Frontend: Next.js + React</h3>
    <p>We use the App Router. Components must be Server Components by default. Use <code>"use client"</code> sparingly.</p>
</div>

<div class="content-section">
    <h3>🔙 Backend Options</h3>
    <ul>
        <li><strong>Server Actions:</strong> For simple CRUD directly in Next.js.</li>
        <li><strong>Node/Express:</strong> For complex, heavy-lifting APIs or long-running jobs (BullMQ).</li>
    </ul>
</div>

<div class="content-section">
    <h3>🗄️ Database: PostgreSQL + Prisma</h3>
    <p>Prisma ORM is mandatory for typesafety. No raw SQL strings unless for performance optimization.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Setup</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Stack Choice</h4>
        <p>Scenario: A chat app with real-time websockets. Next.js Server Actions or Node.js Custom Server? Justify your choice.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about The Stack</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 4: SETUP & ARCHITECTURE</h2>

<div class="content-section">
    <h3>📂 Folder Structure (Feature-Based)</h3>
    <p>Stop putting all headers in <code>/components</code>. Co-locate!</p>
    <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace;">
        /features<br>
        &nbsp;&nbsp;/auth<br>
        &nbsp;&nbsp;&nbsp;&nbsp;/components<br>
        &nbsp;&nbsp;&nbsp;&nbsp;/actions<br>
        &nbsp;&nbsp;&nbsp;&nbsp;/hooks
    </div>
</div>

<div class="content-section">
    <h3>🌿 Branching Strategy</h3>
    <p><code>main</code> is sacred (Production).</p>
    <p>Work in <code>feat/authentication</code> or <code>fix/navbar-bug</code>. PR into <code>dev</code> first.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Git Flow</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Merge Resolve</h4>
        <p>You and a teammate edited the same UserButton.tsx. Git says "CONFLICT". Describe the steps to resolve it manually.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

// task6Content through task10Content are defined in fullstack-training-data-part2.js

const task11Content = `
<h2>📚 TASK 10: DEPLOYMENT & DEVOPS</h2>

<div class="content-section">
    <h3>☁️ Hosting Providers</h3>
    <ul>
        <li><strong>Vercel:</strong> Best for Next.js (Frontend).</li>
        <li><strong>Railway/Render:</strong> Best for Database & Background workers.</li>
        <li><strong>AWS:</strong> Only if necessary (Complex).</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 CI/CD Pipelines</h3>
    <p>Automate it. GitHub Actions should run tests on every Pull Request.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Env Vars</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Secret Management</h4>
        <p>You accidentally pushed <code>.env</code> with production keys to GitHub. What are the EXACT 3 steps you take now?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about DevOps</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 11: CLIENT HANDOVER</h2>

<div class="content-section">
    <h3>📦 The Handover Package</h3>
    <ul>
        <li>Source Code (Zip + Repo Invite).</li>
        <li>Admin Credentials.</li>
        <li>Architecture Diagram.</li>
        <li>README.md (How to run locally).</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎥 Video Training</h3>
    <p>Record Looms showing them how to change text, ban users, and view analytics.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Documentation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: README Writing</h4>
        <p>Write the "Getting Started" section of a README. Include: Node version, Install command, and Env setup.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Handover</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task13Content = `
<h2>📚 TASK 12: DIFFICULT SITUATIONS</h2>

<div class="content-section">
    <h3>🔥 Crisis: Server Down</h3>
    <p><strong>Action:</strong> Check Logs -> Check Host Status -> Check Database Connection. Communicate updates every 30 mins.</p>
</div>

<div class="content-section">
    <h3>🔥 Crisis: "It's Slow"</h3>
    <p><strong>Action:</strong> Profile the app. Is it the DB? The API? Optimizing images? Use data (Lighthouse/NewRelic) to prove the fix.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Post-Mortem</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Incident Report</h4>
        <p>Write an Incident Report for a 2-hour outage caused by an expired SSL certificate. Root Cause, Fix, and Prevention.</p>
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

const task14Content = `
<h2>📚 TASK 14: AI-ASSISTED DEVELOPMENT — Copilot, Prompting & Refactoring</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🤖 AI-Assisted Development at Digital Heroes</h3>
    <p>AI coding assistants (GitHub Copilot, Claude, ChatGPT) are powerful tools when used correctly. At DH, we treat AI as a <strong>pair programmer, not a replacement</strong>. You are always responsible for the output — AI does not write production-ready code on its own.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🎯 The DH AI Development Rule</strong>
        <p style="margin: 10px 0 0;">AI-generated code MUST be reviewed, tested, and understood before committing. If you cannot explain every line the AI wrote, you do not commit it.</p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 Prompt Engineering for Code</h3>
    <p>The quality of AI output depends entirely on your prompt. Vague prompts produce vague code.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);"><th style="padding: 10px; text-align: left;">Bad Prompt</th><th style="padding: 10px; text-align: left;">Good Prompt</th></tr>
        <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">"Make a user page"</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">"Create a Next.js 14 Server Component at /app/users/page.tsx that fetches user data from /api/users using fetch, renders a Tailwind card grid, handles loading with Suspense, and error states with error.tsx"</td></tr>
        <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">"Fix this bug"</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">"The login form at /components/LoginForm.tsx submits but returns 401. The API expects email+password in JSON body. Find why the request payload is malformed"</td></tr>
        <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">"Write tests"</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">"Write Jest unit tests for calculateDiscount(price, tier) in /lib/pricing.ts. Cover: regular tier (10%), premium (20%), edge cases (negative price, unknown tier), and return type validation"</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">⚠️ AI Hallucinations — The Silent Danger</h3>
    <p>AI models confidently suggest packages, APIs, and methods that <strong>do not exist</strong>. This is called hallucination and is the #1 risk of AI-assisted development.</p>
    <ul>
        <li><strong>Fake packages:</strong> AI invents npm packages that sound real but do not exist. Always run <code>npm info package-name</code> before installing.</li>
        <li><strong>Deprecated APIs:</strong> AI often generates code using old React class components, deprecated Express methods, or outdated Prisma syntax.</li>
        <li><strong>Wrong signatures:</strong> Method parameters, return types, and function signatures may be subtly wrong. Verify against official docs.</li>
        <li><strong>Security blind spots:</strong> AI may skip input validation, use weak encryption, or expose secrets in client code.</li>
    </ul>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">DH Policy:</strong> If a production bug is traced to unverified AI-generated code, the developer who committed it bears full responsibility. AI is a tool — you are the engineer.
    </div>
</div>

<div class="content-section">
    <h3>🔧 AI for Refactoring Legacy Code</h3>
    <p>One of the best uses of AI is refactoring messy, hard-to-read code into clean, testable modules.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">Refactoring Prompt Template:</strong>
        <p style="margin: 10px 0 0;">1. Describe the current code structure and what it does<br>
        2. Identify what is wrong (too long, duplicated, untestable)<br>
        3. Specify target architecture (small functions, TypeScript types, error handling)<br>
        4. Request test suggestions for the refactored code</p>
    </div>
    <h4>AI Use Cases at DH:</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);"><th style="padding: 10px; text-align: left;">Use Case</th><th style="padding: 10px; text-align: left;">AI Value</th></tr>
        <tr><td style="padding: 8px;">Generating TypeScript types from JSON</td><td style="padding: 8px;">High — saves time, verify output</td></tr>
        <tr><td style="padding: 8px;">Writing boilerplate CRUD endpoints</td><td style="padding: 8px;">High — customize after generation</td></tr>
        <tr><td style="padding: 8px;">Explaining unfamiliar code</td><td style="padding: 8px;">High — great for onboarding</td></tr>
        <tr><td style="padding: 8px;">Writing Prisma schema from requirements</td><td style="padding: 8px;">Medium — verify relations carefully</td></tr>
        <tr><td style="padding: 8px;">Complex business logic</td><td style="padding: 8px;">Low — requires deep domain knowledge</td></tr>
        <tr><td style="padding: 8px;">Security-critical code</td><td style="padding: 8px;">Low — always write and review manually</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: AI-Assisted Refactoring</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Refactor with AI</h4>
        <p>You have a 500-line function that handles user registration, email validation, password hashing, database insert, welcome email sending, and analytics tracking — all in one function.</p>
        <ol>
            <li>Write a detailed AI prompt to break this into small, testable helper functions</li>
            <li>Review the AI output for hallucinated imports or deprecated APIs</li>
            <li>Write 3 unit test cases for one of the extracted functions</li>
        </ol>
    </div>
</div>
`;

const task15Content = `
<h2>📚 TASK 15: SHOPIFY APP & THEME DEVELOPMENT — Liquid, CLI & Extensions</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🏪 Shopify Development at Digital Heroes</h3>
    <p>Shopify is the core platform for the majority of our client projects. As a full-stack developer at DH, you must master Shopify theme development, the Liquid templating language, Shopify CLI workflows, and app extensions. This is not optional — <strong>Shopify expertise is a core requirement</strong>.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #34D399; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">🎯 DH Shopify Stack</strong>
        <p style="margin: 10px 0 0;">Theme Development: Liquid + JSON Templates + CSS/JS | Custom Apps: Node.js + Shopify API | Storefront: Hydrogen (React) for headless builds</p>
    </div>
</div>

<div class="content-section">
    <h3>💧 Liquid Templating Language — The Foundation</h3>
    <p>Liquid is Shopify's templating language. Every theme file uses it. You must understand its three core constructs:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Construct</th><th style="padding: 10px; text-align: left;">Syntax</th><th style="padding: 10px; text-align: left;">Purpose</th></tr>
        <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><strong>Objects</strong></td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.title }}</code></td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Output dynamic content</td></tr>
        <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tags</strong></td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.available %}</code></td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Logic and control flow</td></tr>
        <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><strong>Filters</strong></td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ price | money }}</code></td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Transform output values</td></tr>
    </table>
    <h4>Key Liquid Objects:</h4>
    <ul>
        <li><strong>product</strong> — title, description, variants, images, price, compare_at_price, tags, metafields</li>
        <li><strong>collection</strong> — products array, title, description, sort_by, filters</li>
        <li><strong>cart</strong> — items, item_count, total_price, note, attributes</li>
        <li><strong>customer</strong> — name, email, orders, addresses, tags</li>
        <li><strong>shop</strong> — name, domain, currency, locale</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🏗️ Theme Architecture — Online Store 2.0</h3>
    <p>Modern Shopify themes follow the Online Store 2.0 architecture with JSON templates and sections everywhere.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Directory</th><th style="padding: 10px; text-align: left;">Purpose</th></tr>
        <tr><td style="padding: 8px;"><code>/layout/</code></td><td style="padding: 8px;">Theme wrapper (theme.liquid) — includes header, footer, content_for_layout</td></tr>
        <tr><td style="padding: 8px;"><code>/templates/</code></td><td style="padding: 8px;">JSON templates defining which sections appear on each page type</td></tr>
        <tr><td style="padding: 8px;"><code>/sections/</code></td><td style="padding: 8px;">Reusable, customizable content blocks with schema settings</td></tr>
        <tr><td style="padding: 8px;"><code>/snippets/</code></td><td style="padding: 8px;">Partial templates included via {% render 'snippet-name' %}</td></tr>
        <tr><td style="padding: 8px;"><code>/assets/</code></td><td style="padding: 8px;">CSS, JS, images — referenced via {{ 'file.css' | asset_url }}</td></tr>
        <tr><td style="padding: 8px;"><code>/config/</code></td><td style="padding: 8px;">settings_schema.json (theme settings) and settings_data.json (values)</td></tr>
        <tr><td style="padding: 8px;"><code>/locales/</code></td><td style="padding: 8px;">Translation files for multi-language stores</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🛠️ Shopify CLI & Development Workflow</h3>
    <p>All Shopify development at DH uses the Shopify CLI. Never edit themes through the admin code editor in production.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);"><th style="padding: 10px; text-align: left;">Command</th><th style="padding: 10px; text-align: left;">Purpose</th></tr>
        <tr><td style="padding: 8px;"><code>shopify theme dev</code></td><td style="padding: 8px;">Start local development server with hot reload</td></tr>
        <tr><td style="padding: 8px;"><code>shopify theme push</code></td><td style="padding: 8px;">Deploy theme to store (staging first, never directly to live)</td></tr>
        <tr><td style="padding: 8px;"><code>shopify theme pull</code></td><td style="padding: 8px;">Download current theme from store</td></tr>
        <tr><td style="padding: 8px;"><code>shopify theme check</code></td><td style="padding: 8px;">Lint theme for errors and best practices</td></tr>
        <tr><td style="padding: 8px;"><code>shopify app dev</code></td><td style="padding: 8px;">Start app development with tunneling</td></tr>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">DH Rule:</strong> NEVER run <code>shopify theme push</code> to the live/published theme without PM approval. Always push to a staging/development theme first, get QA sign-off, then publish.
    </div>
</div>

<div class="content-section">
    <h3>🧩 Metafields & App Extensions</h3>
    <p>Metafields allow you to store custom data on products, collections, customers, and orders. They power dynamic content that goes beyond standard Shopify fields.</p>
    <ul>
        <li><strong>Product metafields:</strong> Specifications, care instructions, sizing charts, warranty info</li>
        <li><strong>Collection metafields:</strong> Banner images, SEO descriptions, featured products</li>
        <li><strong>Customer metafields:</strong> Loyalty points, preferences, custom tags</li>
        <li><strong>App extensions:</strong> Theme app extensions inject UI into the storefront without editing theme code</li>
    </ul>
    <h4>Section Schema Example:</h4>
    <p>Every section must define a <code>{% schema %}</code> block that configures its settings for the theme customizer. This includes the section name, settings inputs (text, image_picker, range, select), blocks for repeatable elements, and presets for default configurations.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Theme Section</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Build a Custom Section</h4>
        <p>Create a "Featured Collection" section that:</p>
        <ol>
            <li>Lets the merchant select a collection from the theme customizer</li>
            <li>Displays up to 8 products in a responsive grid</li>
            <li>Shows product image, title, price, and "Add to Cart" button</li>
            <li>Includes a schema with settings for heading text, products_per_row, and show_vendor toggle</li>
        </ol>
    </div>
</div>
`;

const task16Content = `
<h2>📚 TASK 16: CLIENT PROJECT DELIVERY WORKFLOW — Handoff, Staging & Deployment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">📦 The DH Delivery Workflow</h3>
    <p>At Digital Heroes, every client project follows a strict delivery pipeline. Skipping steps leads to client dissatisfaction, refund requests, and negative reviews on the marketplace. Our delivery process is designed to ensure <strong>zero surprises for the client</strong>.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">🔄 The 6-Step Delivery Pipeline</strong>
        <p style="margin: 10px 0 0;">Development → Internal QA → Staging Deploy → Client Demo → Revision Cycle → Production Deploy</p>
    </div>
</div>

<div class="content-section">
    <h3>🌐 Staging Environments — The Safety Net</h3>
    <p>Every project gets a staging environment that mirrors production. No code ever goes directly from development to the live site.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Platform</th><th style="padding: 10px; text-align: left;">Staging Approach</th></tr>
        <tr><td style="padding: 8px;">Shopify</td><td style="padding: 8px;">Unpublished development theme — use Theme ID to push, preview via share link</td></tr>
        <tr><td style="padding: 8px;">WordPress</td><td style="padding: 8px;">Separate staging subdomain (staging.clientsite.com) or WP Engine staging environment</td></tr>
        <tr><td style="padding: 8px;">Custom Apps (Next.js)</td><td style="padding: 8px;">Vercel preview deployments per branch, or Railway staging instance</td></tr>
        <tr><td style="padding: 8px;">Headless Shopify</td><td style="padding: 8px;">Hydrogen preview deployment connected to dev store</td></tr>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">Untested production deploys are a termination-level offense at DH.</strong> Every change must be verified on staging before touching the live site.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎥 Client Demo Protocol</h3>
    <p>Before marking any milestone as complete, you must conduct a client demo. This is non-negotiable.</p>
    <ol>
        <li><strong>Pre-Demo Prep (30 min):</strong> Test every feature on staging yourself. Check all forms, buttons, links, mobile view, and edge cases.</li>
        <li><strong>Record Loom Video:</strong> Walk through all completed features. Show desktop AND mobile. Narrate what each section does. Keep it under 10 minutes.</li>
        <li><strong>Share on Platform:</strong> Post the Loom link in the client's order chat with a clear summary of what was built.</li>
        <li><strong>Revision Window:</strong> Give client 48 hours to review and provide feedback. Track all revision requests in a checklist.</li>
        <li><strong>Approval Gate:</strong> Client must explicitly approve the milestone before you proceed to the next phase.</li>
    </ol>
</div>

<div class="content-section">
    <h3>✅ The Pre-Launch Checklist</h3>
    <p>Before ANY production deployment, every item on this checklist must be verified:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);"><th style="padding: 10px; text-align: left;">Category</th><th style="padding: 10px; text-align: left;">Checks</th></tr>
        <tr><td style="padding: 8px;"><strong>Functionality</strong></td><td style="padding: 8px;">All features work as specified. Forms submit correctly. Cart and checkout flow tested end-to-end.</td></tr>
        <tr><td style="padding: 8px;"><strong>Responsiveness</strong></td><td style="padding: 8px;">Tested on mobile (375px), tablet (768px), desktop (1280px+). No overflow, no broken layouts.</td></tr>
        <tr><td style="padding: 8px;"><strong>Performance</strong></td><td style="padding: 8px;">Lighthouse score 90+. Images optimized (WebP). No render-blocking scripts.</td></tr>
        <tr><td style="padding: 8px;"><strong>SEO</strong></td><td style="padding: 8px;">Meta titles, descriptions set. Alt tags on images. Sitemap submitted. Robots.txt correct.</td></tr>
        <tr><td style="padding: 8px;"><strong>Security</strong></td><td style="padding: 8px;">SSL active. No exposed API keys. Form validation on server-side. CORS configured.</td></tr>
        <tr><td style="padding: 8px;"><strong>Analytics</strong></td><td style="padding: 8px;">Google Analytics / Tag Manager installed. Conversion tracking set up. Facebook Pixel if needed.</td></tr>
        <tr><td style="padding: 8px;"><strong>Legal</strong></td><td style="padding: 8px;">Privacy policy, terms of service, cookie consent banner in place.</td></tr>
        <tr><td style="padding: 8px;"><strong>Backup</strong></td><td style="padding: 8px;">Full backup of existing site taken before deployment. Rollback plan documented.</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 Post-Launch Handover Package</h3>
    <p>After successful launch, deliver the complete handover package to the client:</p>
    <ul>
        <li><strong>Documentation:</strong> README with setup instructions, architecture diagram, environment variables list</li>
        <li><strong>Training Videos:</strong> Loom library showing how to update content, manage products, process orders</li>
        <li><strong>Credentials:</strong> Secure transfer of all login credentials via password manager (never plain text in chat)</li>
        <li><strong>Repository Access:</strong> Invite client to private GitHub repo with their project code</li>
        <li><strong>Support Terms:</strong> Define warranty period (typically 14-30 days) for bug fixes. New features are new quotes.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Delivery Workflow</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Create a Delivery Plan</h4>
        <p>A client has ordered a custom Shopify store with 5 pages, product catalog, and custom checkout flow. Create:</p>
        <ol>
            <li>A milestone breakdown (3-4 milestones with specific deliverables)</li>
            <li>A pre-launch checklist customized for this project</li>
            <li>A Loom video script outline for the client demo</li>
        </ol>
    </div>
</div>
`;

const task17Content = `
<h2>📚 TASK 17: PERFORMANCE, SECURITY & DEVOPS — Speed, Protection & Automation</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">⚡ Performance is Not Optional</h3>
    <p>At Digital Heroes, a slow website is a broken website. Every 100ms of additional load time costs our clients conversions. Google uses Core Web Vitals as ranking signals. Performance directly affects revenue and SEO.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F87171; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">🎯 DH Performance Standard</strong>
        <p style="margin: 10px 0 0;">Every project must achieve a Lighthouse Performance score of 90+ on mobile before deployment. Scores below 80 are unacceptable and must be fixed before client delivery.</p>
    </div>
</div>

<div class="content-section">
    <h3>📊 Core Web Vitals — The Three Metrics That Matter</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Metric</th><th style="padding: 10px; text-align: left;">What It Measures</th><th style="padding: 10px; text-align: left;">Good Target</th><th style="padding: 10px; text-align: left;">How to Optimize</th></tr>
        <tr><td style="padding: 8px;"><strong>LCP</strong> (Largest Contentful Paint)</td><td style="padding: 8px;">Time for largest visible element to render</td><td style="padding: 8px;">&lt; 2.5 seconds</td><td style="padding: 8px;">Optimize hero images, preload fonts, reduce server response time</td></tr>
        <tr><td style="padding: 8px;"><strong>INP</strong> (Interaction to Next Paint)</td><td style="padding: 8px;">Responsiveness to user interactions</td><td style="padding: 8px;">&lt; 200ms</td><td style="padding: 8px;">Reduce JavaScript execution, break long tasks, use web workers</td></tr>
        <tr><td style="padding: 8px;"><strong>CLS</strong> (Cumulative Layout Shift)</td><td style="padding: 8px;">Visual stability — elements jumping around</td><td style="padding: 8px;">&lt; 0.1</td><td style="padding: 8px;">Set explicit image dimensions, reserve space for dynamic content</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization — The Biggest Performance Win</h3>
    <p>Images account for 50-70% of page weight on most e-commerce sites. Optimizing them gives the largest performance improvement.</p>
    <ul>
        <li><strong>Format:</strong> Use WebP (40% smaller than JPEG). Shopify auto-converts via CDN. For custom apps, use next/image.</li>
        <li><strong>Sizing:</strong> Never serve a 4000px image in a 400px container. Use srcset and sizes attributes.</li>
        <li><strong>Loading:</strong> Lazy load below-fold images. Eager load above-fold hero images.</li>
        <li><strong>Compression:</strong> Target quality 80-85% for product images. Use lossless for logos and icons.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔒 Security Hardening — Beyond OWASP</h3>
    <p>Security at DH goes beyond knowing OWASP Top 10. You must actively implement security measures on every project.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);"><th style="padding: 10px; text-align: left;">Layer</th><th style="padding: 10px; text-align: left;">Implementation</th></tr>
        <tr><td style="padding: 8px;"><strong>SSL/TLS</strong></td><td style="padding: 8px;">Force HTTPS everywhere. HSTS headers. Auto-renew certificates.</td></tr>
        <tr><td style="padding: 8px;"><strong>HTTP Headers</strong></td><td style="padding: 8px;">Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy</td></tr>
        <tr><td style="padding: 8px;"><strong>Input Validation</strong></td><td style="padding: 8px;">Server-side validation with Zod on every endpoint. Never trust client input.</td></tr>
        <tr><td style="padding: 8px;"><strong>Authentication</strong></td><td style="padding: 8px;">bcrypt/argon2 for passwords. Secure HTTP-only cookies. Rate limiting on login.</td></tr>
        <tr><td style="padding: 8px;"><strong>Dependencies</strong></td><td style="padding: 8px;">Run npm audit weekly. Update packages monthly. Remove unused dependencies.</td></tr>
        <tr><td style="padding: 8px;"><strong>Secrets Management</strong></td><td style="padding: 8px;">.env files never committed. Use platform-level env vars. Rotate keys quarterly.</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 CI/CD Pipeline — Automated Quality Gates</h3>
    <p>Every DH project must have a CI/CD pipeline that prevents broken code from reaching production.</p>
    <h4>Standard DH Pipeline (GitHub Actions):</h4>
    <ol>
        <li><strong>Lint Check:</strong> ESLint runs on every push. Warnings are acceptable; errors block the build.</li>
        <li><strong>Type Check:</strong> TypeScript compiler runs with strict mode. No type errors allowed.</li>
        <li><strong>Unit Tests:</strong> Jest runs all test files. Coverage must not decrease.</li>
        <li><strong>Build:</strong> Production build must succeed. No build warnings ignored.</li>
        <li><strong>E2E Tests:</strong> Playwright runs critical path tests (signup, checkout, core features).</li>
        <li><strong>Preview Deploy:</strong> Automatic preview deployment for every PR.</li>
        <li><strong>Production Deploy:</strong> Only after PR approval + all checks pass + PM sign-off.</li>
    </ol>
</div>

<div class="content-section">
    <h3>☁️ Hosting & Infrastructure Decision Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Platform</th><th style="padding: 10px; text-align: left;">Best For</th><th style="padding: 10px; text-align: left;">Avoid When</th></tr>
        <tr><td style="padding: 8px;"><strong>Vercel</strong></td><td style="padding: 8px;">Next.js apps, static sites, JAMstack</td><td style="padding: 8px;">Background workers, WebSockets, heavy computation</td></tr>
        <tr><td style="padding: 8px;"><strong>Railway</strong></td><td style="padding: 8px;">Node.js APIs, PostgreSQL, Redis, background jobs</td><td style="padding: 8px;">Static frontend hosting, CDN-heavy sites</td></tr>
        <tr><td style="padding: 8px;"><strong>AWS</strong></td><td style="padding: 8px;">Enterprise clients, complex infra, specific compliance needs</td><td style="padding: 8px;">Simple projects — overhead is not justified</td></tr>
        <tr><td style="padding: 8px;"><strong>Shopify</strong></td><td style="padding: 8px;">Theme-based stores, standard e-commerce</td><td style="padding: 8px;">Headless builds needing custom server</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Performance Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Optimize a Slow Page</h4>
        <p>You receive a client complaint that their product page takes 6 seconds to load on mobile. Lighthouse shows Performance score of 45. Create:</p>
        <ol>
            <li>An audit report listing the top 5 performance issues (with metrics)</li>
            <li>A prioritized fix plan (what to fix first for maximum impact)</li>
            <li>A GitHub Actions workflow YAML that runs Lighthouse CI on every PR</li>
        </ol>
    </div>
</div>
`;

const task18Content = `
<h2>📚 TASK 18: CAREER GROWTH & PRACTICAL PROJECT BUILD</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📈 Full-Stack Career Growth at Digital Heroes</h3>
    <p>Your career at DH is not linear — it is <strong>exponential if you put in the work</strong>. We promote based on impact and skill, not tenure. Every developer has a clear growth path with defined milestones.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🎯 The DH Developer Career Ladder</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(139, 92, 246, 0.2);"><th style="padding: 10px; text-align: left;">Level</th><th style="padding: 10px; text-align: left;">Role</th><th style="padding: 10px; text-align: left;">Key Requirements</th></tr>
            <tr><td style="padding: 8px;">L1</td><td style="padding: 8px;">Junior Developer</td><td style="padding: 8px;">Completes tasks with guidance. Follows SOPs. Learning the stack.</td></tr>
            <tr><td style="padding: 8px;">L2</td><td style="padding: 8px;">Developer</td><td style="padding: 8px;">Independently delivers features. Reviews peer code. Handles client communication.</td></tr>
            <tr><td style="padding: 8px;">L3</td><td style="padding: 8px;">Senior Developer</td><td style="padding: 8px;">Leads projects end-to-end. Writes TSDs. Mentors juniors. Makes architecture decisions.</td></tr>
            <tr><td style="padding: 8px;">L4</td><td style="padding: 8px;">Tech Lead</td><td style="padding: 8px;">Manages team of developers. Owns technical quality. Drives process improvements.</td></tr>
            <tr><td style="padding: 8px;">L5</td><td style="padding: 8px;">Engineering Manager</td><td style="padding: 8px;">Cross-team leadership. Strategic technical decisions. Client relationship management.</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Specialization Tracks</h3>
    <p>After reaching L2, you can choose a specialization track. Specialists earn more and handle higher-value projects.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Track</th><th style="padding: 10px; text-align: left;">Focus Areas</th><th style="padding: 10px; text-align: left;">Client Value</th></tr>
        <tr><td style="padding: 8px;"><strong>Shopify Expert</strong></td><td style="padding: 8px;">Theme development, app development, Shopify Plus, Hydrogen</td><td style="padding: 8px;">Premium custom stores, migrations, complex integrations</td></tr>
        <tr><td style="padding: 8px;"><strong>Full-Stack App Builder</strong></td><td style="padding: 8px;">Next.js, Node.js, PostgreSQL, real-time features</td><td style="padding: 8px;">Custom SaaS, dashboards, portals, marketplaces</td></tr>
        <tr><td style="padding: 8px;"><strong>WordPress Engineer</strong></td><td style="padding: 8px;">Custom themes, WooCommerce, headless WP, plugin development</td><td style="padding: 8px;">Content sites, blogs, WooCommerce stores</td></tr>
        <tr><td style="padding: 8px;"><strong>DevOps & Performance</strong></td><td style="padding: 8px;">CI/CD, cloud infrastructure, monitoring, optimization</td><td style="padding: 8px;">Enterprise clients, high-traffic stores, performance audits</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">📜 Certification & Skill Validation</h3>
    <p>DH values certifications as proof of structured learning. These are recommended but not required:</p>
    <ul>
        <li><strong>Shopify Partner Academy:</strong> Free. Covers theme development, app development, and store setup. Complete within first 3 months.</li>
        <li><strong>AWS Cloud Practitioner:</strong> Foundation-level cloud knowledge. Useful for custom project hosting.</li>
        <li><strong>Meta Front-End Developer Certificate:</strong> React, testing, responsive design. Good for portfolio.</li>
        <li><strong>Google UX Design Certificate:</strong> Useful for developers who want to bridge design and development.</li>
    </ul>
    <p><strong>DH Reimbursement:</strong> Up to Rs.5,000/year for approved course fees. Must complete and share certificate.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🏗️ PRACTICAL PROJECT: End-to-End Full-Stack Build</h3>
    <p>This is your capstone exercise. Complete this project to demonstrate mastery of everything covered in this training program.</p>

    <h4>Project Brief: "QuickCart" — A Custom Shopify Store with Admin Dashboard</h4>
    <p>Build a complete e-commerce solution for a fictional client "QuickCart" who sells artisan coffee online.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);"><th style="padding: 10px; text-align: left;">Phase</th><th style="padding: 10px; text-align: left;">Deliverables</th><th style="padding: 10px; text-align: left;">Skills Tested</th></tr>
        <tr><td style="padding: 8px;"><strong>Phase 1: Planning</strong></td><td style="padding: 8px;">Technical Spec Document with ER diagram, API endpoints, technology stack, timeline</td><td style="padding: 8px;">Task 3 (Planning), Task 7 (DB Design)</td></tr>
        <tr><td style="padding: 8px;"><strong>Phase 2: Shopify Store</strong></td><td style="padding: 8px;">Custom theme with homepage, collection page, product page, cart, and checkout</td><td style="padding: 8px;">Task 15 (Shopify), Task 5 (Architecture)</td></tr>
        <tr><td style="padding: 8px;"><strong>Phase 3: Admin Dashboard</strong></td><td style="padding: 8px;">Next.js dashboard with order management, customer analytics, inventory tracking</td><td style="padding: 8px;">Task 4 (Tech Stack), Task 8 (API), Task 9 (Security)</td></tr>
        <tr><td style="padding: 8px;"><strong>Phase 4: Integration</strong></td><td style="padding: 8px;">Connect Shopify to dashboard via API. Sync orders, products, customers in real-time.</td><td style="padding: 8px;">Task 6 (Dev Phases), Task 8 (API)</td></tr>
        <tr><td style="padding: 8px;"><strong>Phase 5: QA & Launch</strong></td><td style="padding: 8px;">Lighthouse 90+. Unit tests. E2E tests. Pre-launch checklist complete. Client demo video.</td><td style="padding: 8px;">Task 10 (QA), Task 16 (Delivery), Task 17 (Performance)</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 Project Evaluation Criteria</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; text-align: left;">Criteria</th><th style="padding: 10px; text-align: left;">Weight</th><th style="padding: 10px; text-align: left;">What We Look For</th></tr>
        <tr><td style="padding: 8px;">Code Quality</td><td style="padding: 8px;">25%</td><td style="padding: 8px;">Clean code, TypeScript, proper naming, no "any" types, DRY principles</td></tr>
        <tr><td style="padding: 8px;">Functionality</td><td style="padding: 8px;">25%</td><td style="padding: 8px;">All features work as specified. Edge cases handled. Error states present.</td></tr>
        <tr><td style="padding: 8px;">Performance</td><td style="padding: 8px;">15%</td><td style="padding: 8px;">Lighthouse 90+, optimized images, lazy loading, minimal JS bundle</td></tr>
        <tr><td style="padding: 8px;">Security</td><td style="padding: 8px;">15%</td><td style="padding: 8px;">Input validation, authentication, no exposed secrets, proper headers</td></tr>
        <tr><td style="padding: 8px;">Documentation</td><td style="padding: 8px;">10%</td><td style="padding: 8px;">README, TSD, API docs, architecture diagram</td></tr>
        <tr><td style="padding: 8px;">Delivery Process</td><td style="padding: 8px;">10%</td><td style="padding: 8px;">Staging setup, client demo video, pre-launch checklist, handover package</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🏆 Final Certification</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">How to Earn Your Full Stack Developer Certificate</h4>
        <ol>
            <li>Complete all 18 tasks in this training program</li>
            <li>Pass all quizzes with a minimum score of 80%</li>
            <li>Submit the QuickCart capstone project for review</li>
            <li>Receive sign-off from your Tech Lead or PM</li>
        </ol>
        <p style="color: #34D399; font-weight: 600;">Upon certification, you are eligible for client project assignments and the DH developer incentive program.</p>
    </div>
</div>
`;

const quizQuestions = [
    // TASK 1: MINDSET (10 Questions)
    { question: "A developer hardcoded an API key in the frontend. What is the PRIMARY risk?", options: ["Slower page load times", "Key becomes invalid after deployment", "Users see the key in console", "Scrapers exhaust quota causing financial loss"], correct: 3 },
    { question: "Which principle states 'Write the schema, then the code'?", options: ["Plan Twice, Code Once", "Code First, Plan Later", "Schema After Coding", "Iterate Without Planning"], correct: 0 },
    {
        question: "What does 'No any. Ever.' refer to in TypeScript development?",
        options: ["No anonymous functions allowed", "Typesafety is non-negotiable", "No arrays in the codebase", "No external packages allowed"],
        correct: 1
    },
    {
        question: "According to DH principles, when can code be merged without peer review?",
        options: ["When it's a hotfix for production", "When the senior dev is absent", "Never - peer review is mandatory", "When it's less than 10 lines"],
        correct: 2
    },
    { question: "The ₹5 Lakh failure story teaches us that security is:", options: ["A nice-to-have feature", "The client's responsibility", "Only for banking apps", "The foundation, not a feature"], correct: 3 },
    { question: "Which statement about the 'any' type in TypeScript is correct?", options: ["It should never be used in production", "It's acceptable for quick prototypes", "It's required for external APIs", "It improves code readability"], correct: 0 },
    {
        question: "What is the consequence of skipping peer review?",
        options: ["Faster deployment cycles", "Hidden bugs reach production", "Better team morale", "Reduced code complexity"],
        correct: 1
    },
    { question: "DRY principle helps prevent which common issue?", options: ["Code running too fast", "Too many team members", "Logic duplicated across files", "Excessive documentation"], correct: 2 },
    { question: "In the vulnerability example SELECT * FROM users WHERE id= + req.body.id, the issue is:", options: ["Using SELECT instead of FIND", "Incorrect table reference", "Missing column names in query", "SQL injection vulnerability"], correct: 3 },
    { question: "Secure by Default means validating every input using:", options: ["Zod or similar validators", "HTML form validation only", "Console.log statements", "Browser cookies"], correct: 0 },

    // TASK 2: PLANNING (10 Questions)
    {
        question: "What must be approved BEFORE any code is written?",
        options: ["Client's payment invoice", "Technical Spec Document (TSD)", "Design mockups only", "Sprint backlog items"],
        correct: 1
    },
    {
        question: "The TSD includes all EXCEPT:",
        options: ["ER Diagram with relationships", "List of API endpoints", "Developer's salary details", "Risk identification section"],
        correct: 2
    },
    { question: "Why is Discovery Phase charged as paid work?", options: ["It requires no effort at all", "It's a DH marketing strategy", "Clients prefer paying upfront", "Planning is work and has value"], correct: 3 },
    { question: "Which risk might be documented in a TSD?", options: ["Payment gateway approvals take 3 days", "Developer might take vacation", "Coffee machine is broken", "Office WiFi is occasionally slow"], correct: 0 },
    {
        question: "An ER Diagram in the TSD shows:",
        options: ["Employee work schedules", "Database table relationships", "Frontend color schemes", "API response times"],
        correct: 1
    },
    {
        question: "What happens if TSD is not approved before coding?",
        options: ["Development starts immediately", "Project is put on hold", "We do not write code", "Senior dev makes the call"],
        correct: 2
    },
    { question: "Tech Stack section of TSD includes:", options: ["Marketing strategies", "Team member assignments", "Client's business goals", "Verified libraries and frameworks"], correct: 3 },
    { question: "Planning for free is:", options: ["Never acceptable - charge for discovery", "A good way to win clients", "Standard industry practice", "Recommended for small projects"], correct: 0 },
    {
        question: "Course Platform schema requires relations between:",
        options: ["Only User and Course tables", "User, Course, Lesson, Enrollment", "Just a single Users table", "Courses and Payments only"],
        correct: 1
    },
    { question: "API Endpoints section lists:", options: ["Only GET requests", "Database column names", "GET, POST, PUT methods", "Frontend component names"], correct: 2 },

    // TASK 3: TECH STACK (10 Questions)
    { question: "In Next.js App Router, components should be Server Components by:", options: ["Explicit declaration only", "Never - always use client", "Only for API routes", "Default - use 'use client' sparingly"], correct: 3 },
    { question: "When should Node/Express be used instead of Server Actions?", options: ["For complex APIs and long-running jobs", "For simple CRUD operations", "For all frontend requests", "When database is PostgreSQL"], correct: 0 },
    {
        question: "Server Actions are best suited for:",
        options: ["Complex websocket connections", "Simple CRUD directly in Next.js", "Long-running background jobs", "Real-time chat applications"],
        correct: 1
    },
    { question: "What is the mandatory ORM for PostgreSQL at DH?", options: ["Sequelize for legacy support", "Raw SQL for performance", "Prisma for typesafety", "MongoDB drivers"], correct: 2 },
    { question: "Raw SQL strings are allowed only for:", options: ["All database operations", "Insert operations only", "Simple SELECT queries", "Performance optimization cases"], correct: 3 },
    { question: "For a chat app with real-time websockets, the better choice is:", options: ["Node.js Custom Server", "Next.js Server Actions alone", "Static HTML pages", "Client-side JavaScript only"], correct: 0 },
    {
        question: "BullMQ is used for:",
        options: ["Frontend state management", "Long-running background jobs", "Database migrations", "CSS preprocessing"],
        correct: 1
    },
    { question: "The 'use client' directive should be:", options: ["Used on every component", "Avoided completely", "Used sparingly and intentionally", "Only for API routes"], correct: 2 },
    { question: "Why is Prisma mandatory for database work?", options: ["It's free and open source", "It works only with MySQL", "It's faster than raw SQL", "It provides typesafety"], correct: 3 },
    { question: "Which combination is the DH standard frontend stack?", options: ["Next.js with React", "Vue.js with Vuetify", "Angular with Material", "Svelte with Tailwind"], correct: 0 },

    // TASK 4: SETUP & ARCHITECTURE (10 Questions)
    {
        question: "Feature-based folder structure means components go in:",
        options: ["A single /components folder", "Co-located within /features/auth", "Random directories", "Root directory only"],
        correct: 1
    },
    { question: "The 'main' branch represents:", options: ["Development testing", "Feature experiments", "Production - it's sacred", "Backup code storage"], correct: 2 },
    { question: "Feature branches should be named like:", options: ["feature-1, feature-2", "random-unique-id", "my-changes-today", "feat/authentication or fix/navbar-bug"], correct: 3 },
    { question: "Pull Requests should go into which branch first?", options: ["The dev branch first", "Directly to main branch", "Any available branch", "Client's repository"], correct: 0 },
    {
        question: "When resolving a Git CONFLICT, first step is:",
        options: ["Delete the conflicting file", "Manually review and merge changes", "Push force to main", "Create a new repository"],
        correct: 1
    },
    { question: "Co-location means putting related code:", options: ["In separate repositories", "Only in root directory", "Together in feature folders", "Across multiple servers"], correct: 2 },
    { question: "Environment variables should be:", options: ["Committed to Git always", "Hardcoded in source", "Shared on Slack openly", "Kept secure and separate"], correct: 3 },
    { question: "The /features/auth folder contains:", options: ["components, actions, and hooks", "Only authentication UI", "Global app settings", "Third-party libraries"], correct: 0 },
    {
        question: "Branching strategy prevents:",
        options: ["Fast development cycles", "Production breaking changes", "Team collaboration", "Code documentation"],
        correct: 1
    },
    { question: "Before merging a PR, you must:", options: ["Wait for Friday afternoon", "Delete all test files", "Get peer review approval", "Email the client"], correct: 2 },

    // TASK 5: DEVELOPMENT PHASES (10 Questions)
    { question: "Phase 1 (Foundation) covers which weeks?", options: ["Weeks 4-6 of the project", "No specific timeline", "Final two weeks only", "Weeks 1-2 of the project"], correct: 3 },
    { question: "The 'Skeleton' of the app includes:", options: ["Auth setup, DB schema, UI Kit", "Only CSS styling", "Marketing pages only", "Payment integrations"], correct: 0 },
    {
        question: "Third-party integrations happen in which phase?",
        options: ["Phase 1 - Foundation", "Phase 3 - Integrations (Wk 4-5)", "After project completion", "Before planning starts"],
        correct: 1
    },
    { question: "Why does Phase 3 need buffer time?", options: ["Developers take breaks", "Clients delay feedback", "This is where bugs happen", "Less work is required"], correct: 2 },
    { question: "Stripe, SendGrid, Twilio belong to:", options: ["Foundation phase only", "Documentation phase", "Testing phase only", "Integration phase"], correct: 3 },
    { question: "DB schema should be locked by end of:", options: ["Phase 1 foundation", "Phase 3 integrations", "Final project week", "Client approval only"], correct: 0 },
    {
        question: "A 6-week project has how many main phases?",
        options: ["Only 2 phases total", "3 phases typically", "6 phases - one per week", "No defined phases"],
        correct: 1
    },
    { question: "Map View feature for Real Estate app goes in:", options: ["Phase 1 with foundation", "Before project starts", "Phase 2 core features", "Post-launch updates only"], correct: 2 },
    { question: "Auth setup happens during:", options: ["Final week of project", "Integration phase", "After deployment only", "Phase 1 Foundation"], correct: 3 },
    { question: "Phase structure helps prevent:", options: ["Scope creep and timeline issues", "Client communication", "Code documentation", "Team collaboration"], correct: 0 },

    // TASK 6: DATABASE DESIGN (10 Questions)
    {
        question: "Storing User Address repeatedly inside Orders table violates:",
        options: ["Security best practices", "Normalization principles", "API design patterns", "Frontend conventions"],
        correct: 1
    },
    { question: "Adding an index to a column helps with:", options: ["Data encryption speed", "Database backups", "Search query performance", "User authentication"], correct: 2 },
    { question: "Without an index, the database must:", options: ["Use cached results", "Ask for admin approval", "Skip the query entirely", "Scan every row sequentially"], correct: 3 },
    { question: "@@index([email]) in Prisma creates:", options: ["A database index on email", "A unique constraint", "An encrypted field", "A required field"], correct: 0 },
    {
        question: "A 5-second query on 1M rows likely needs:",
        options: ["More server RAM only", "An index on the status column", "Faster internet connection", "Smaller table name"],
        correct: 1
    },
    { question: "Prisma Migrations help with:", options: ["Frontend styling changes", "API documentation", "Database schema changes", "Client communication"], correct: 2 },
    { question: "Normalization reduces:", options: ["Query performance only", "Security vulnerabilities", "Developer productivity", "Data redundancy and inconsistency"], correct: 3 },
    { question: "Creating a separate Address table is an example of:", options: ["Proper normalization", "Denormalization strategy", "Performance anti-pattern", "Security hardening"], correct: 0 },
    {
        question: "Query optimization starts with analyzing:",
        options: ["Frontend load times", "Database indexes and query plans", "Server hardware specs", "Network latency only"],
        correct: 1
    },
    { question: "SELECT * FROM logs WHERE status = 'ERROR' on 1M rows is slow because:", options: ["SELECT * is deprecated", "ERROR is a reserved word", "status column lacks an index", "logs table doesn't exist"], correct: 2 },

    // TASK 7: API DEVELOPMENT (10 Questions)
    { question: "Which HTTP method is idempotent and retrieves data?", options: ["POST for creation", "PATCH for updates", "DELETE for removal", "GET for retrieval"], correct: 3 },
    { question: "PATCH is used to:", options: ["Update resource partially", "Create new resources", "Delete resources completely", "Retrieve full resources"], correct: 0 },
    {
        question: "PUT differs from PATCH because PUT:",
        options: ["Updates partially only", "Replaces resource fully", "Only works with JSON", "Requires authentication"],
        correct: 1
    },
    { question: "Zod is primarily used for:", options: ["Database hosting services", "Frontend UI components", "Runtime schema validation", "CSS preprocessing"], correct: 2 },
    { question: "API validation should happen on:", options: ["Only input from users", "Neither - trust clients", "Output responses only", "Both INPUT and OUTPUT"], correct: 3 },
    { question: "When a database operation fails, return status:", options: ["500 Internal Server Error", "200 OK with error message", "404 Not Found always", "302 Redirect to home"], correct: 0 },
    {
        question: "Stack traces in error responses are:",
        options: ["Required for debugging", "A security risk - never expose", "Optional for production", "Helpful for end users"],
        correct: 1
    },
    { question: "API documentation is maintained using:", options: ["Word documents only", "Email chains to team", "Swagger/OpenAPI specs", "Code comments alone"], correct: 2 },
    { question: "z.string().email() validates that input is:", options: ["Any string value", "An array of strings", "A number as string", "A valid email format"], correct: 3 },
    { question: "RESTful API design uses resources named like:", options: ["/users and /users/:id", "/getUsers and /createUser", "/api_v1_user_list", "/fetch-all-user-data"], correct: 0 },

    // TASK 8: SECURITY ESSENTIALS (10 Questions)
    {
        question: "OWASP Top 10 #1 vulnerability is:",
        options: ["SQL Injection attacks", "Broken Access Control", "Weak passwords only", "Missing HTTPS"],
        correct: 1
    },
    { question: "Passwords should be stored using:", options: ["Plain text in database", "Base64 encoding only", "bcrypt or argon2 hashing", "Reversible encryption"], correct: 2 },
    { question: "SQL injection is prevented by:", options: ["Trusting user input completely", "Frontend form validation", "Longer password requirements", "ORMs with parameterized queries"], correct: 3 },
    { question: "JWT tokens are stateless meaning:", options: ["Server doesn't track sessions", "They store all data on server", "They expire immediately", "They can't be decoded"], correct: 0 },
    {
        question: "The tradeoff of JWT vs Sessions is:",
        options: ["JWT is easier to revoke", "Sessions are database-heavy but secure", "JWT requires no encryption", "Sessions have no security"],
        correct: 1
    },
    { question: "XSS attacks inject malicious:", options: ["SQL queries into database", "Files into servers", "Scripts into web pages", "Users into systems"], correct: 2 },
    { question: "React protects against XSS by:", options: ["Blocking all user input", "Using HTTPS only", "Removing JavaScript entirely", "Escaping content by default"], correct: 3 },
    { question: "dangerouslySetInnerHTML is dangerous because:", options: ["It bypasses React's XSS protection", "It's slow performance", "It breaks CSS styling", "It requires admin access"], correct: 0 },
    {
        question: "Broken Access Control means:",
        options: ["Passwords are too weak", "Users access unauthorized pages", "Database is too slow", "API returns wrong data"],
        correct: 1
    },
    { question: "Cryptographic Failure includes:", options: ["Using too many passwords", "Encrypting too much data", "Storing passwords as plain text", "Having complex algorithms"], correct: 2 },

    // TASK 9: QA & TESTING (10 Questions)
    { question: "Unit Tests test:", options: ["Full user browser flows", "Third-party integrations", "Database connections only", "Individual functions in isolation"], correct: 3 },
    { question: "E2E tests are characterized as:", options: ["Slow but test full browser flow", "Fast and run frequently", "Only for backend APIs", "Not needed in production"], correct: 0 },
    {
        question: "The testing pyramid has most tests at:",
        options: ["E2E level at the top", "Unit test level at the base", "Integration level only", "Manual testing level"],
        correct: 1
    },
    { question: "Jest is used for which type of testing?", options: ["End-to-end browser tests", "Visual regression only", "Unit and integration tests", "Performance benchmarks"], correct: 2 },
    { question: "Playwright is used for:", options: ["Unit testing functions", "API documentation", "Database migrations", "End-to-end browser testing"], correct: 3 },
    { question: "Pre-merge checklist includes checking for:", options: ["Leftover console.log statements", "Developer's mood that day", "Preferred code editor", "Desktop wallpaper"], correct: 0 },
    {
        question: "A Playwright test script should:",
        options: ["Only click random buttons", "Navigate, interact, and assert results", "Never check URLs", "Avoid form submissions"],
        correct: 1
    },
    { question: "Integration tests verify that:", options: ["Individual functions work alone", "Browser renders correctly", "Multiple modules work together", "Users can register only"], correct: 2 },
    { question: "Build passing is checked:", options: ["Only at final deployment", "By the client only", "Once a month manually", "Before every merge"], correct: 3 },
    { question: "Linting checks for:", options: ["Code style and potential errors", "Database query speed", "Server uptime status", "User login attempts"], correct: 0 },

    // TASK 10: DEPLOYMENT & DEVOPS (10 Questions)
    {
        question: "Vercel is best suited for hosting:",
        options: ["PostgreSQL databases", "Next.js frontend apps", "Background job workers", "Email sending services"],
        correct: 1
    },
    { question: "Railway/Render is best for:", options: ["Static frontend sites", "Simple HTML pages", "Database and background workers", "CDN distribution only"], correct: 2 },
    { question: "AWS should be used:", options: ["For all projects by default", "To replace Vercel always", "For frontend only", "Only if necessary - it's complex"], correct: 3 },
    { question: "CI/CD stands for:", options: ["Continuous Integration/Continuous Deployment", "Code Integration/Code Deletion", "Computer Internet/Computer Data", "Client Interface/Client Dashboard"], correct: 0 },
    {
        question: "GitHub Actions should run tests:",
        options: ["Only at midnight daily", "On every Pull Request", "Once after deployment", "When manually triggered only"],
        correct: 1
    },
    { question: ".env files should be committed to Git:", options: ["Yes, for team sharing", "Only for development", "Never - they contain secrets", "Only production keys"], correct: 2 },
    { question: "After accidentally pushing .env to GitHub, first step is:", options: ["Delete the repository", "Blame the team member", "Ignore and continue", "Rotate all exposed credentials"], correct: 3 },
    { question: "Monitoring tools like Sentry help with:", options: ["Error tracking and logging", "Marketing analytics", "User onboarding", "Sales projections"], correct: 0 },
    {
        question: "CI pipeline failures should:",
        options: ["Be ignored if minor", "Block the merge until fixed", "Only notify the manager", "Auto-approve anyway"],
        correct: 1
    },
    { question: "Environment variables on Vercel are set:", options: ["In the source code directly", "Through GitHub commits", "In the Vercel dashboard securely", "Via email to support"], correct: 2 },

    // TASK 11: CLIENT HANDOVER (10 Questions)
    { question: "The Handover Package includes all EXCEPT:", options: ["Source code and repo invite", "Architecture diagram", "README.md instructions", "Developer's personal notes"], correct: 3 },
    { question: "Video training for clients uses:", options: ["Loom recordings library", "Live Zoom calls only", "PDF documents only", "Phone call walkthroughs"], correct: 0 },
    {
        question: "README.md must include:",
        options: ["Developer's resume", "How to run locally", "Client's business history", "Competitor analysis"],
        correct: 1
    },
    { question: "Admin credentials are part of:", options: ["Marketing materials", "Public documentation", "The Handover Package", "Source code comments"], correct: 2 },
    { question: "Loom videos should show clients how to:", options: ["Write code themselves", "Debug server errors", "Deploy to production", "Change text, ban users, view analytics"], correct: 3 },
    { question: "Warranty period is for:", options: ["Post-launch support terms", "Unlimited free changes", "Pre-project planning", "Sales negotiations"], correct: 0 },
    {
        question: "Getting Started section includes:",
        options: ["Company history", "Node version and install commands", "Financial projections", "Marketing strategies"],
        correct: 1
    },
    { question: "Architecture diagram shows:", options: ["Team member photos", "Office floor plan", "System component relationships", "Client org chart"], correct: 2 },
    { question: "Repo invite gives client access to:", options: ["All DH projects", "Third-party services", "Developer personal repos", "Their project source code"], correct: 3 },
    { question: "A smooth handover requires:", options: ["Documentation and training videos", "Minimal documentation", "Only source code zip", "Verbal instructions only"], correct: 0 },

    // TASK 12: DIFFICULT SITUATIONS (10 Questions)
    {
        question: "When server is down, first action is:",
        options: ["Email the CEO immediately", "Check logs and host status", "Wait until morning", "Blame the hosting provider"],
        correct: 1
    },
    { question: "During an outage, communicate updates every:", options: ["24 hours minimum", "Only when resolved", "30 minutes to stakeholders", "Through social media only"], correct: 2 },
    { question: "When client says 'It's slow', you should:", options: ["Disagree and defend", "Blame their internet", "Ignore the complaint", "Profile and use data to prove fixes"], correct: 3 },
    { question: "To identify performance issues, use tools like:", options: ["Lighthouse and NewRelic", "Microsoft Word", "Email surveys", "Social media polls"], correct: 0 },
    {
        question: "Expired SSL certificate causes:",
        options: ["Faster page loads", "Site appears insecure/unavailable", "Better SEO rankings", "More user signups"],
        correct: 1
    },
    { question: "Post-mortem incident report includes:", options: ["Only the fix applied", "Blame assignment", "Root cause, fix, and prevention", "Financial impact only"], correct: 2 },
    { question: "Database corruption requires:", options: ["Ignoring until it fixes itself", "Complete system rebuild", "Waiting for client complaint", "Immediate investigation and restore"], correct: 3 },
    { question: "API rate limiting issue is resolved by:", options: ["Implementing caching and throttling", "Increasing request frequency", "Removing API entirely", "Contacting internet provider"], correct: 0 },
    {
        question: "Crisis communication should be:",
        options: ["Vague and defensive", "Clear, honest, and regular", "Only after full resolution", "Through marketing channels"],
        correct: 1
    },
    { question: "Prevention section in incident report:", options: ["Is optional and rarely needed", "Blames team members", "Documents how to avoid recurrence", "Lists client complaints"], correct: 2 },

    // TASK 13: AI DEVELOPMENT (10 Questions)
    { question: "Good AI prompts for code should be:", options: ["Vague like 'Make a user page'", "Copy-pasted from tutorials", "As short as possible", "Specific with tech stack and requirements"], correct: 3 },
    { question: "AI hallucinations in code mean:", options: ["AI invents packages that don't exist", "AI creates perfect code", "AI runs too slowly", "AI requires payment"], correct: 0 },
    {
        question: "After AI generates imports, you must:",
        options: ["Trust and deploy immediately", "Verify packages actually exist", "Delete all imports", "Convert to TypeScript"],
        correct: 1
    },
    { question: "A good prompt for refactoring includes:", options: ["Just 'fix this code please'", "Only the file name", "Context, current state, and desired outcome", "Developer's personal preferences"], correct: 2 },
    { question: "Converting spaghetti code to testable functions requires:", options: ["Deleting all comments", "Removing all parameters", "Adding more complexity", "Breaking into small helper functions"], correct: 3 },
    { question: "AI-generated code should always be:", options: ["Reviewed and tested thoroughly", "Used without review", "Committed immediately", "Shared on social media"], correct: 0 },
    {
        question: "ChatGPT might suggest packages that:",
        options: ["Are always the best option", "Don't exist or are deprecated", "Work perfectly always", "Have official Microsoft support"],
        correct: 1
    },
    { question: "Prompt engineering for code is about:", options: ["Using fewer words possible", "Avoiding technical terms", "Crafting clear, detailed instructions", "Only asking yes/no questions"], correct: 2 },
    { question: "AI assistance is best for:", options: ["Replacing developer thinking", "Skipping code reviews", "Avoiding documentation", "Accelerating repetitive tasks"], correct: 3 },
    { question: "Legacy code refactoring prompts should specify:", options: ["Current structure and target architecture", "The AI model version", "Developer's experience level", "Project budget constraints"], correct: 0 }
];

// Make task content available globally for openTask() function












const task0Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks about your salary during lunch. What should you do?", o: ["Politely decline - discussing salary leads to immediate termination", "Share it openly — this reflects the standard operating procedure most development teams follow", "Share primarily with close friends", "Tell them a lower number — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. What is the immediate consequence?", o: ["Verbal warning", "Half-day salary deduction", "Written warning recorded", "No consequence if less than 30 mins late"], c: 1 },
    { q: "What is Digital Heroes Point B revenue target for 2027?", o: ["15-20 Crores", "40 Crores", "75 Crores", "100 Crores"], c: 2 },
    { q: "A team member spreads negative talk. The correct action per zero-tolerance policy is:", o: ["Confront them directly — this reflects the standard operating procedure most development teams follow", "Ignore it — this reflects the standard operating procedure most development teams follow", "Discuss in team group chat — this reflects the standard operating procedure most development teams follow", "Report only to HR or Delhi Team - conspiracy leads to termination"], c: 3 },
    { q: "What is the correct procedure to apply for casual leave?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name Dates Reason Coverage", "Tell your teammate to cover — this reflects the standard operating procedure most development teams follow", "Send WhatsApp to HR on morning of leave — this reflects the standard operating procedure most development teams follow", "Email the CEO directly — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "According to the equity-sharing model, who is eligible from Day 1?", o: ["Full-time after 1 year — this is the standard approach", "Everyone including interns", "Senior developers only", "Exceptional KPI scorers — this is the standard approach"], c: 1 },
    { q: "Your manager sends you a message. What is the maximum response time?", o: ["2 Hours — this reflects the standard operating procedure most development teams follow", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During probation, you want a day off. What does leave policy say?", o: ["Take 1 CL with manager approval — this aligns with industry best practices and ensures consistent results across different project types", "Take unpaid leave with HR approval", "Probation gets 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated. How should you view this client per Digital Heroes philosophy?", o: ["An ally whose problem is your common enemy", "A burden on resources", "A problem to manage — this reflects the standard operating procedure most development teams follow", "Someone to transfer to management"], c: 0 },
    { q: "What is the minimum internet speed for WFH?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement"], c: 1 },
    { q: "What happens with a KPI score of 55%?", o: ["5-10% increment minimum", "10-15% increment", "No increment and placed on PIP", "Verbal warning but salary stays"], c: 2 },
    { q: "A colleague takes freelance Shopify projects. This is classified as:", o: ["Acceptable outside work hours — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Allowed with prior written approval", "Fine if no performance impact", "Moonlighting - zero-tolerance termination offense"], c: 3 },
    { q: "Which reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant - volume and commitment matter more", "Top university degrees prioritized", "Talent is most important — this reflects the standard operating procedure most development teams follow", "Natural talent determines ceiling"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 },
    { q: "What is an SOP and how should employees treat it?", o: ["Flexible suggestion by team — this reflects the standard operating procedure most development teams follow", "Rough guideline reviewed monthly", "The Law - best known way to do a task perfectly mandatory daily", "Reference primarily for new employees"], c: 2 }
];

// =====================================================
// TASK 15: SHOPIFY APP & THEME DEVELOPMENT QUIZ (12 Questions)
// =====================================================
const task14Quiz = [
    { q: "In Shopify Liquid, the syntax {{ product.title }} is an example of:", o: ["A Liquid tag for control flow", "A Liquid object that outputs dynamic content", "A Liquid filter for transformation", "A JavaScript template literal"], c: 1 },
    { q: "Online Store 2.0 theme architecture uses JSON templates primarily for:", o: ["Storing customer data in the browser", "Defining which sections appear on each page type", "Replacing Liquid entirely with JSON", "Serving API responses to the storefront"], c: 1 },
    { q: "The Shopify CLI command to start local development with hot reload is:", o: ["shopify theme push", "shopify theme pull", "shopify theme dev", "shopify app deploy"], c: 2 },
    { q: "At DH, running 'shopify theme push' to the live/published theme requires:", o: ["No special permission — any developer can push anytime", "PM approval after QA sign-off on staging", "Client email confirmation only", "Only the CEO can authorize live pushes"], c: 1 },
    { q: "Shopify sections differ from snippets because sections:", o: ["Cannot contain HTML or CSS", "Have a schema block that makes them customizable in the theme editor", "Are only used in the header and footer", "Cannot accept dynamic data from Liquid objects"], c: 1 },
    { q: "The /assets/ directory in a Shopify theme is referenced in Liquid using:", o: ["A direct file path like /assets/style.css", "The asset_url filter: {{ 'file.css' | asset_url }}", "A JavaScript import statement", "The require() function from Node.js"], c: 1 },
    { q: "Metafields in Shopify are used to:", o: ["Store custom data beyond standard fields on products, collections, and customers", "Override Shopify's payment processing system", "Replace the Liquid templating engine", "Manage DNS settings for the store domain"], c: 0 },
    { q: "In Liquid, {% if product.available %} is an example of:", o: ["An object outputting content", "A filter transforming data", "A tag providing logic and control flow", "A comment block for documentation"], c: 2 },
    { q: "Theme app extensions allow developers to:", o: ["Directly edit the client's theme.liquid file in production", "Inject UI into the storefront without editing theme code", "Replace Shopify's checkout with a custom solution", "Bypass Shopify's API rate limits"], c: 1 },
    { q: "The {{ price | money }} syntax uses a Liquid:", o: ["Object to create a new variable", "Tag to implement conditional logic", "Filter to transform the output value", "Schema to define theme settings"], c: 2 },
    { q: "Shopify Hydrogen is used for:", o: ["Standard theme-based stores with no customization", "Headless Shopify builds using React", "Email marketing automation for Shopify stores", "Database management for Shopify Plus stores"], c: 1 },
    { q: "A section schema block configures:", o: ["The server-side database schema for Shopify", "Settings inputs for the theme customizer (text, image_picker, range, select)", "JavaScript build configuration for the storefront", "API rate limiting rules for the Shopify Admin"], c: 1 }
];

// =====================================================
// TASK 16: CLIENT PROJECT DELIVERY WORKFLOW QUIZ (12 Questions)
// =====================================================
const task15Quiz = [
    { q: "The DH 6-Step Delivery Pipeline starts with Development and ends with:", o: ["Client Demo", "Internal QA", "Production Deploy", "Revision Cycle"], c: 2 },
    { q: "Untested production deploys at Digital Heroes are classified as:", o: ["Acceptable for small changes under 10 lines of code", "A termination-level offense", "Permissible with verbal PM approval", "Normal practice for hotfixes during off-hours"], c: 1 },
    { q: "For Shopify projects, the staging environment is:", o: ["The live published theme with careful edits", "An unpublished development theme previewed via share link", "A local-only environment that cannot be shared with clients", "A separate Shopify store on a different plan"], c: 1 },
    { q: "Client demo Loom videos should be kept under:", o: ["30 minutes with detailed code walkthrough", "2 minutes showing only the homepage", "10 minutes covering desktop AND mobile features", "60 minutes for comprehensive coverage"], c: 2 },
    { q: "After sharing a demo with the client, the revision window is:", o: ["24 hours — respond faster to win more projects", "No specific window — client responds when ready", "48 hours to review and provide feedback", "1 week minimum for thorough review"], c: 2 },
    { q: "The pre-launch checklist category 'Responsiveness' requires testing on:", o: ["Desktop only since most users browse on computers", "Mobile (375px), tablet (768px), and desktop (1280px+)", "Only the devices the client specifically mentions", "Any single device as long as it looks acceptable"], c: 1 },
    { q: "Client credentials during handover should be transferred via:", o: ["Plain text in the marketplace chat for convenience", "A password manager (never plain text in chat)", "Email with the subject line containing the password", "A shared Google Doc visible to the whole team"], c: 1 },
    { q: "The warranty period after project launch typically covers:", o: ["Unlimited free changes for life", "Bug fixes only (14-30 days). New features are new quotes.", "Only issues reported in the first 24 hours", "Six months of free development and feature additions"], c: 1 },
    { q: "Before marking a milestone as complete, the developer must:", o: ["Just update the project tracker and move on", "Conduct a client demo showing all completed features", "Wait for the client to discover the changes themselves", "Only inform the PM via internal chat"], c: 1 },
    { q: "The handover package includes all EXCEPT:", o: ["README with setup instructions", "Training Loom videos for the client", "Developer's personal GitHub credentials", "Repository access and architecture diagram"], c: 2 },
    { q: "For custom Next.js apps, staging is achieved through:", o: ["Editing files directly on the production server", "Vercel preview deployments per branch or Railway staging instance", "Sending screenshots to the client for approval", "Running the app locally and sharing the localhost URL"], c: 1 },
    { q: "The pre-launch 'Backup' check requires:", o: ["Full backup of the existing site taken before deployment with rollback plan", "No backup needed if the changes are minor", "Client is responsible for their own backups", "Only database backup, no code backup needed"], c: 0 }
];

// =====================================================
// TASK 17: PERFORMANCE, SECURITY & DEVOPS QUIZ (12 Questions)
// =====================================================
const task16Quiz = [
    { q: "The DH Performance Standard requires a Lighthouse Performance score of at least:", o: ["70 on desktop only", "60 on any device", "90+ on mobile before deployment", "50 is acceptable for e-commerce sites"], c: 2 },
    { q: "LCP (Largest Contentful Paint) measures:", o: ["How fast JavaScript executes on the page", "Time for the largest visible element to render — target under 2.5 seconds", "The total number of network requests made by the page", "How many CSS files are loaded by the browser"], c: 1 },
    { q: "CLS (Cumulative Layout Shift) is caused by:", o: ["Too many API calls to the server", "Elements jumping around due to missing image dimensions or dynamic content", "Slow JavaScript execution blocking the main thread", "Using too many CSS animations on the page"], c: 1 },
    { q: "Images account for what percentage of page weight on most e-commerce sites?", o: ["10-20%", "30-40%", "50-70%", "Less than 5%"], c: 2 },
    { q: "The recommended image format for web that is 40% smaller than JPEG is:", o: ["PNG", "GIF", "SVG", "WebP"], c: 3 },
    { q: "HTTP security headers that should be set on every project include:", o: ["Only Content-Type and nothing else", "Content-Security-Policy, X-Frame-Options, X-Content-Type-Options", "Headers are optional and only needed for banking sites", "Only the Server header identifying the tech stack"], c: 1 },
    { q: "In the DH CI/CD pipeline, which step blocks the merge if it fails?", o: ["Marketing review of the landing page", "All steps — lint, type check, unit tests, build, and E2E tests", "Only the final production deploy step", "None — all checks are advisory and can be overridden"], c: 1 },
    { q: "After accidentally pushing .env to GitHub, the FIRST action is:", o: ["Delete the commit from history and hope nobody saw it", "Ignore it since the repo is private", "Rotate all exposed credentials immediately", "Ask the client if they noticed anything suspicious"], c: 2 },
    { q: "Vercel is best suited for hosting:", o: ["PostgreSQL databases and background workers", "Next.js frontend apps and static sites", "WebSocket servers with persistent connections", "Heavy computation and machine learning models"], c: 1 },
    { q: "INP (Interaction to Next Paint) measures:", o: ["Initial page load time before any content appears", "Responsiveness to user interactions — target under 200ms", "Network latency between the browser and CDN server", "Time to download all JavaScript bundles for the page"], c: 1 },
    { q: "For lazy loading images, the correct approach is:", o: ["Lazy load ALL images including above-fold hero images", "Eager load above-fold images, lazy load below-fold images", "Never lazy load since it hurts SEO rankings", "Use JavaScript setTimeout to delay all image loading by 5 seconds"], c: 1 },
    { q: "AWS should be used for DH projects:", o: ["For all projects by default since it is the industry standard", "Only if necessary — the complexity overhead is not justified for simple projects", "Never — DH exclusively uses Vercel for everything", "Only for Shopify theme hosting and nothing else"], c: 1 }
];

// =====================================================
// TASK 18: CAREER GROWTH & FINAL PROJECT QUIZ (12 Questions)
// =====================================================
const task17Quiz = [
    { q: "At DH, promotions are based on:", o: ["Tenure — longest-serving employees get promoted first", "Impact and skill, not tenure", "Personal relationships with management", "Number of certifications earned regardless of job performance"], c: 1 },
    { q: "The L3 (Senior Developer) role requires:", o: ["Only writing code faster than other developers", "Leading projects end-to-end, writing TSDs, mentoring juniors, and making architecture decisions", "Managing the company's finances and HR operations", "Exclusively working on client communication without coding"], c: 1 },
    { q: "Specialization tracks become available at which career level?", o: ["L1 (Junior Developer) from day one", "L2 (Developer) after demonstrating independent capability", "L5 (Engineering Manager) only", "Specialization is not offered at DH"], c: 1 },
    { q: "The Shopify Expert specialization track focuses on:", o: ["Only basic theme color changes and font swaps", "Theme development, app development, Shopify Plus, and Hydrogen", "Server infrastructure and DevOps exclusively", "WordPress plugin development for WooCommerce"], c: 1 },
    { q: "DH reimburses approved course fees up to:", o: ["Rs. 50,000/year with no restrictions", "Rs. 5,000/year — must complete and share certificate", "No reimbursement is available for any courses", "Rs. 1,00,000/year for any online course without completion requirement"], c: 1 },
    { q: "In the QuickCart capstone project, Phase 1 (Planning) deliverable is:", o: ["A fully functional Shopify store ready for launch", "A Technical Spec Document with ER diagram, API endpoints, tech stack, and timeline", "Only a one-paragraph project summary via chat", "A marketing campaign for the coffee brand"], c: 1 },
    { q: "The project evaluation criteria assigns the highest weight (25%) to:", o: ["Documentation and delivery process combined", "Performance optimization alone", "Code Quality and Functionality (25% each)", "Security implementation exclusively"], c: 2 },
    { q: "To earn the Full Stack Developer Certificate, you must:", o: ["Only complete task 1 and pass one quiz", "Complete all 18 tasks, pass quizzes at 80%+, submit capstone, and get Tech Lead sign-off", "Watch all training videos without taking any quizzes", "Submit a resume and wait for automatic approval"], c: 1 },
    { q: "The DevOps & Performance specialization track handles:", o: ["Only frontend CSS styling and animation work", "CI/CD, cloud infrastructure, monitoring, and optimization", "Sales and client acquisition exclusively", "Graphic design and brand identity creation"], c: 1 },
    { q: "Phase 4 (Integration) of the QuickCart project requires:", o: ["Designing a logo for the QuickCart brand", "Connecting Shopify to the dashboard via API with real-time sync of orders, products, and customers", "Writing marketing emails for the coffee products", "Setting up social media accounts for the fictional client"], c: 1 },
    { q: "The Full-Stack App Builder specialization focuses on:", o: ["Only WordPress blog setup and maintenance", "Next.js, Node.js, PostgreSQL, and real-time features for SaaS, dashboards, and marketplaces", "Shopify theme color changes exclusively", "Print design and physical marketing materials"], c: 1 },
    { q: "The project evaluation criterion 'Delivery Process' (10%) looks for:", o: ["Speed of coding without any documentation", "Staging setup, client demo video, pre-launch checklist, and handover package", "Number of commits made to the repository", "How quickly the developer can type code"], c: 1 }
];

// Expose content and quiz variables to window for app lookup

// Expose all content and quiz variables to window for app lookup
window.task1Content = task1Content;
window.task2Content = task2Content;
window.task3Content = task3Content;
window.task4Content = task4Content;
window.task5Content = task5Content;
// task6-10 registered in fullstack-training-data-part2.js
window.task11Content = task11Content;
window.task12Content = task12Content;
window.task13Content = task13Content;
window.task14Content = task14Content;
window.task15Content = task15Content;
window.task16Content = task16Content;
window.task17Content = task17Content;
window.task18Content = task18Content;
// Quiz window registrations (task14Quiz-task17Quiz defined in this file)
window.task14Quiz = task14Quiz;
window.task15Quiz = task15Quiz;
window.task16Quiz = task16Quiz;
window.task17Quiz = task17Quiz;
// task0Quiz-task13Quiz registered in fullstack-training-data-part2.js

