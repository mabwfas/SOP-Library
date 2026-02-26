// Full Stack Developer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 13 Tasks, 150+ Quiz Questions, Tech Stack Mastery

const trainingTasks = [
    { id: 0, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
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
    }
];


const task0Content = `
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
        <p>Client wants a "Course Platform". Define the relations between `User`, `Course`, `Lesson`, and `Enrollment`. Write the Prisma Schema pseudo-code.</p>
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
        <p>You and a teammate edited the same `UserButton.tsx`. Git says "CONFLICT". Describe the steps to resolve it manually.</p>
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

const task6Content = `
<h2>📚 TASK 5: DEVELOPMENT PHASES (6 Weeks)</h2>

<div class="content-section">
    <h3>Phase 1: Foundation (Wk 1-2)</h3>
    <p>Auth setup, DB schema locked, UI Kit installed. The "Skeleton" of the app.</p>
</div>

<div class="content-section">
    <h3>Phase 3: Integrations (Wk 4-5)</h3>
    <p>Stripe, SendGrid, Twilio. This is where bugs happen. Buffer time here.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Planning</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Gantt Chart</h4>
        <p>Create a 6-week roadmap for a "Real Estate Listing Platform". When do you build the "Map View" vs the "Admin Dashboard"?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Phases</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: DATABASE DESIGN</h2>

<div class="content-section">
    <h3>📐 Normalization</h3>
    <p>Don't store "User Address" inside the "Orders" table repeatedly. Create an <code>Address</code> table and relate it.</p>
</div>

<div class="content-section">
    <h3>⚡ Indexing</h3>
    <p>If you search by <code>email</code> frequently, you MUST add an index. <code>@@index([email])</code>. Otherwise, the DB scans every row.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Optimization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: The Slow Query</h4>
        <p>A query taking 5 seconds: <code>SELECT * FROM logs WHERE status = 'ERROR'</code>. The logs table has 1M rows. How do you fix it?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Databases</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: API DEVELOPMENT - The Connector</h2>

<div class="content-section">
    <h3>🌐 REST Standards</h3>
    <ul>
        <li><strong>GET:</strong> Retrieve (Idempotent).</li>
        <li><strong>POST:</strong> Create.</li>
        <li><strong>PUT:</strong> Replace fully.</li>
        <li><strong>PATCH:</strong> Update partially.</li>
        <li><strong>DELETE:</strong> Remove.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🛡️ Validation (Zod)</h3>
    <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace;">
        const schema = z.object({<br>
        &nbsp;&nbsp;email: z.string().email(),<br>
        &nbsp;&nbsp;age: z.number().min(18)<br>
        });
    </div>
    <p>Validate INPUT and OUTPUT.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Endpoint Build</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Error Handling</h4>
        <p>Write a Try/Catch block for an API route. If the DB fails, what status code do you return? What message? (Don't leak stack traces!)</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about APIs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 8: SECURITY ESSENTIALS</h2>

<div class="content-section">
    <h3>🚫 OWASP Top 10</h3>
    <ol>
        <li><strong>Broken Access Control:</strong> Can I see Admin pages as a user?</li>
        <li><strong>Injection:</strong> SQL/Command injection.</li>
        <li><strong>Cryptographic Faclure:</strong> Storing passwords as plain text? (Use bcrypt/argon2).</li>
    </ol>
</div>

<div class="content-section">
    <h3>🔑 JWT vs Sessions</h3>
    <p>Using NextAuth? Understand the tradeoff. JWT is stateless but hard to revoke. Sessions are database-heavy but secure.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Sec Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: XSS Prevention</h4>
        <p>A user inputs <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code> into their bio. How does React handle this? When is it dangerous?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Security</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 9: QA & TESTING</h2>

<div class="content-section">
    <h3>🧪 Testing Pyramid</h3>
    <ul>
        <li><strong>Unit Tests (Jest):</strong> Test individual functions. (Fast)</li>
        <li><strong>Integration Tests:</strong> Test modules working together.</li>
        <li><strong>E2E Tests (Playwright):</strong> Test the full browser flow. (Slow but critical).</li>
    </ul>
</div>

<div class="content-section">
    <h3>✅ Pre-Merge Checklist</h3>
    <p>Linting passed? Build passed? No console logs left?</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: E2E</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Playwright Script</h4>
        <p>Write pseudo-code for a Playwright test that: 1. Goes to login. 2. Types credentials. 3. Clicks submit. 4. Expects URL to be /dashboard.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Testing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

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
<h2>📚 TASK 13: AI DEVELOPMENT</h2>

<div class="content-section">
    <h3>🤖 Prompt Engineering for Code</h3>
    <p>Don't say "Make a user page". Say "Create a Next.js Page using Tailwind that fetches user data from /api/user and displays it in a Card component. Handle loading and error states."</p>
</div>

<div class="content-section">
    <h3>⚠️ AI Hallucinations</h3>
    <p>ChatGPT makes up packages that don't exist. Always verify imports.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Refactoring</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: The Prompt</h4>
        <p>Write a prompt to convert a 500-line "Spaghetti Code" function into small, testable helper functions.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering all modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Full Stack Certification</li>
    </ul>
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
if (typeof task0Content !== 'undefined') window.task0Content = task0Content;
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
