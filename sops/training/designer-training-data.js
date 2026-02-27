// UI/UX Designer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Premium Design Standard

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "Designer Mindset",
        description: "Design that SELLS",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: The $10,000 Button",
            "🛡️ Concept: Every Pixel Impacts Revenue",
            "🚀 Concept: Mobile Traffic Dominance (70%)"
        ]
    },
    {
        id: 3,
        title: "The 5 Laws of Premium",
        description: "Whitespace & Hierarchy",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "👑 Law 1: Whitespace = Luxury",
            "👀 Law 2: Hierarchy Guides the Eye",
            "📱 Law 3: Mobile First, Always"
        ]
    },
    {
        id: 4,
        title: "Color Psychology",
        description: "Conversions via Color",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎨 Rule: The 60-30-10 Rule",
            "🧠 Theory: Industry Color Associations",
            "✅ Contrast: Accessibility & CTAs"
        ]
    },
    {
        id: 5,
        title: "Typography Mastery",
        description: "The 2-Font Rule",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔤 Setup: Pairing Serif & Sans-Serif",
            "📏 Spec: Line Height (1.5x)",
            "📱 Spec: Minimum Mobile Font Size (16px)"
        ]
    },
    {
        id: 6,
        title: "Layout & Spacing",
        description: "The 8px Grid System",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📐 System: 8px Multipliers (8, 16, 24, 32...)",
            "🧱 Layout: Container Widths",
            "📱 Layout: Responsive Breakpoints"
        ]
    },
    {
        id: 7,
        title: "Trust & Psychology",
        description: "Elements that Convince",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "⭐ Element: Social Proof Design",
            "⏳ Element: Urgency & Scarcity",
            "🖱️ Element: Frictionless CTAs"
        ]
    },
    {
        id: 8,
        title: "Page-by-Page Guide",
        description: "12 Essential Sections",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "🏠 Context: Homepage Flow",
            "🛒 Context: Product Page Buy Box",
            "📄 Context: Collection Filters"
        ]
    },
    {
        id: 9,
        title: "Mobile-First Deep Dive",
        description: "The Thumb Zone",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "👍 Target: 44px Minimum Touch Area",
            "📲 UI: Bottom Navigation Sheets",
            "⚡ Speed: Preventing Layout Shifts"
        ]
    },
    {
        id: 10,
        title: "Design QA & Handoff",
        description: "Dev-Ready Files",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "✅ Checklist: The Design QA Audit",
            "📤 Process: Figma to Dev Handoff",
            "🗣️ Soft Skill: Presenting to Clients"
        ]
    },
    {
        id: 11,
        title: "Figma Workflow",
        description: "Professional Organization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📂 Structure: 6 Essential Pages",
            "🧩 System: Components & Variants",
            "📚 Asset: The Style Guide"
        ]
    },
    {
        id: 12,
        title: "Difficult Situations",
        description: "Handling Feedback",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "💬 Scenario: 'Make the logo bigger'",
            "💬 Scenario: 'I don't like the colors'",
            "💬 Scenario: Conflicting Stakeholder Feedback"
        ]
    },
    {
        id: 13,
        title: "AI & Tools",
        description: "Workflow Acceleration",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🤖 Tool: Midjourney for Assets",
            "🤖 Tool: ChatGPT for Copy Placeholders",
            "⚡ Tool: Relume Library"
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
<h2>📚 TASK 1: DESIGNER MINDSET - Design That SELLS</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into design principles, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(236, 72, 153, 0.1)); border: 2px solid rgba(244, 114, 182, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #F472B6; font-size: 1.2em;">⭐ YOU (Designer)</strong> → <strong>THE VISUAL ARCHITECT - create premium experiences that WOW clients</strong><br>
            ↓<br>
            <strong style="color: #60A5FA;">Development</strong> → brings your designs to life<br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #A78BFA;">5-Star Reviews</strong> → boost algorithm positioning
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(244, 114, 182, 0.15); border-left: 4px solid #EC4899; padding: 15px; margin: 15px 0;">
        <strong style="color: #F472B6;">🎨 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a designer, you are the <strong>VISUAL ARCHITECT</strong> who shapes first impressions. When a client sees a premium, polished design, they feel confident in their investment. Your wireframes, mockups, and UI decisions directly impact whether developers can build efficiently and whether clients rave about their stores. A $10,000 button position change can transform revenue—that's the power of design.</p>
    </div>
    
    <p style="color: #F472B6; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Ugly design = Cheap perception = No premium clients = Chain weakens. You create the premium experience.</p>
</div>

<div class="content-section">
    <h3>💰 THE $10,000 BUTTON STORY</h3>
    <p>A major ecommerce brand hired a UX consultant for $50,000. After 3 weeks of analysis, his recommendation was simple: move the "Checkout" button above the fold and change it from gray to green.</p>
    
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 20px; margin: 20px 0;">
        <strong style="color: #10B981;">📈 THE RESULT:</strong>
        <ul style="margin: 10px 0;">
            <li>Revenue increased by <strong>$10,000/month</strong></li>
            <li>Bounce rate dropped by 23%</li>
            <li>Mobile conversions increased by 47%</li>
            <li>Return on investment: 200x in the first year</li>
        </ul>
        <p style="color: #34D399; font-weight: bold; margin-top: 15px;">This is what separates a $30K/year graphic designer from a $150K/year ecommerce designer.</p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 PART 1: THE FUNDAMENTAL DIFFERENCE</h3>
    
    <h4>1.1 Graphic Designer vs Ecommerce Designer</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(236, 72, 153, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #F472B6;">🎨 Graphic Designer (Art Focus)</strong><br><br>
                • "Does it look beautiful?"<br>
                • "Is it award-worthy?"<br>
                • "Does it express creativity?"<br>
                • "Will it win on Dribbble?"<br>
                • Measures success by aesthetics<br>
                • Portfolio = pretty screenshots<br>
                <em style="color: #F9A8D4;">Average salary: ₹3-5 LPA</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #10B981;">💰 Ecommerce Designer (Revenue Focus)</strong><br><br>
                • "Does it SELL?"<br>
                • "Is the CTA visible in 0.5 seconds?"<br>
                • "Can grandma complete checkout?"<br>
                • "Will it convert on a $200 phone?"<br>
                • Measures success by revenue impact<br>
                • Portfolio = conversion case studies<br>
                <em style="color: #6EE7B7;">Average salary: ₹12-25 LPA</em>
            </td>
        </tr>
    </table>
    
    <h4>1.2 The Reality of Ecommerce Traffic</h4>
    <p>These statistics should shape every design decision you make:</p>
    <ul>
        <li><strong>70%+ of traffic is mobile:</strong> If your design looks great on desktop but is unusable on phone, you've lost most of your audience</li>
        <li><strong>First impression: 0.05 seconds:</strong> Users decide if they trust your site before they consciously process anything</li>
        <li><strong>Every 100ms delay = 1% conversion loss:</strong> Heavy images and animations literally cost money</li>
        <li><strong>53% abandon if page takes >3 seconds:</strong> "Beautiful loading animation" is an oxymoron</li>
        <li><strong>Cart abandonment is 70%:</strong> Your checkout design determines if that drops to 50% or rises to 85%</li>
    </ul>
    
    <h4>1.3 Design is Engineering for Eyes</h4>
    <p>Every pixel you place on screen influences user behavior. This is not art—this is behavioral engineering:</p>
    <ul>
        <li><strong>Color creates emotion:</strong> Blue = trust, Green = action, Red = urgency</li>
        <li><strong>Size creates hierarchy:</strong> Bigger = more important (users' eyes go there first)</li>
        <li><strong>Spacing creates luxury:</strong> More whitespace = more premium perception</li>
        <li><strong>Position creates flow:</strong> F-pattern reading means top-left is prime real estate</li>
        <li><strong>Contrast creates action:</strong> CTA buttons MUST stand out from everything else</li>
    </ul>
</div>

<div class="content-section">
    <h3>🛡️ PART 2: ZERO TOLERANCE FOR CARELESS MISTAKES</h3>
    
    <h4>2.1 The Psychology of Trust</h4>
    <p>Customers are trusting you with their credit card information. Every small mistake erodes that trust:</p>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 20px 0;">
        <strong style="color: #EF4444;">🚨 TRUST KILLERS (Small mistakes, massive impact):</strong>
        <ul style="margin: 10px 0;">
            <li><strong>Button 2px off-center:</strong> "If they can't align a button, can they ship my order?"</li>
            <li><strong>Inconsistent button styles:</strong> "Is this even the same company?"</li>
            <li><strong>Low-res images:</strong> "This looks like a scam site from 2005"</li>
            <li><strong>Broken hover states:</strong> "Is this site even working?"</li>
            <li><strong>Typos in CTAs:</strong> "If they can't spell 'Buy Now', can they spell my address right?"</li>
        </ul>
    </div>
    
    <h4>2.2 The 10-Foot Test</h4>
    <p>Before submitting any design for review, step back 10 feet from your monitor (or zoom to 25%). Ask yourself:</p>
    <ul>
        <li>Can I identify the #1 thing the user should do?</li>
        <li>Is the CTA button the most prominent element?</li>
        <li>Is the product clearly visible?</li>
        <li>Can I read the price?</li>
    </ul>
    <p>If any answer is "No," redesign before submitting.</p>
    
    <h4>2.3 The Grandma Test</h4>
    <p>Imagine your 70-year-old grandma using your design:</p>
    <ul>
        <li>Can she find the "Add to Cart" button without help?</li>
        <li>Can she read the text on her aging eyes?</li>
        <li>Can she tap buttons on her shaky hands?</li>
        <li>Would she understand what to do next?</li>
    </ul>
    <p>If grandma is confused, so are 30% of your users. Simplify.</p>
</div>

<div class="content-section">
    <h3>📱 PART 3: MOBILE-FIRST IS NOT OPTIONAL</h3>
    
    <h4>3.1 Why Mobile-First Design</h4>
    <p>70% of ecommerce traffic comes from mobile devices. Yet most designers still design on 27-inch monitors and "adapt" for mobile. This is backwards.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Desktop-First Approach</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mobile-First Approach</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile Conversion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">1.2% (broken experience)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">3.8% (native experience)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Desktop Conversion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.1%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.3% (enhanced desktop)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Overall Revenue</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$100K</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">$165K (+65%)</td>
        </tr>
    </table>
    
    <h4>3.2 Mobile Design Requirements</h4>
    <ul>
        <li><strong>Touch targets: 44px minimum</strong> - Fingers are not precision instruments</li>
        <li><strong>Thumb zone awareness:</strong> Critical actions must be reachable with one thumb</li>
        <li><strong>No hover states:</strong> Mobile has no hover—design for tap only</li>
        <li><strong>Font size: 16px minimum:</strong> Anything smaller is unreadable and Google penalizes it</li>
        <li><strong>Fixed image heights:</strong> Prevent layout shift when images load</li>
        <li><strong>Sticky CTA bar:</strong> "Add to Cart" should follow the user on product pages</li>
    </ul>
    
    <h4>3.3 Common Mobile Mistakes</h4>
    <ul>
        <li>❌ Hamburger menu with 20+ hidden links (nobody clicks these)</li>
        <li>❌ Horizontal scrolling carousels (users don't scroll sideways)</li>
        <li>❌ Popups that are hard to close (instant rage quit)</li>
        <li>❌ "Desktop site" button (admission of failure)</li>
        <li>❌ Forms with tiny input fields (typo factory)</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎯 PART 4: THE DIGITAL HEROES DESIGN STANDARD</h3>
    
    <h4>4.1 Our Quality Checklist (Before Submitting ANY Design)</h4>
    <ul>
        <li>☐ CTA button is visible without scrolling (above the fold)</li>
        <li>☐ Primary CTA has highest contrast on the page</li>
        <li>☐ Mobile version tested at 375px width</li>
        <li>☐ All font sizes ≥16px on mobile</li>
        <li>☐ Touch targets ≥44px</li>
        <li>☐ Color contrast meets WCAG 4.5:1 ratio</li>
        <li>☐ Consistent spacing using 8px grid</li>
        <li>☐ No more than 2 font families</li>
        <li>☐ Images have defined aspect ratios</li>
        <li>☐ Zero alignment issues (use Figma's alignment tools)</li>
    </ul>
    
    <h4>4.2 What Gets You Fired (Zero Tolerance List)</h4>
    <ul>
        <li>🚨 Submitting designs with obvious alignment issues</li>
        <li>🚨 Using placeholder text ("Lorem ipsum") in final deliverables</li>
        <li>🚨 Forgetting to design mobile version</li>
        <li>🚨 Using low-resolution images</li>
        <li>🚨 Making CTAs hard to find</li>
        <li>🚨 Ignoring accessibility (contrast, font size)</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASKS</h3>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise 1: The Dribbble Audit</h4>
        <p>Go to Dribbble and find an ecommerce store design that looks beautiful. List 5 reasons why it would fail in production. Consider:</p>
        <ul>
            <li>Is the CTA visible in 0.5 seconds?</li>
            <li>Can you read text on a 375px screen?</li>
            <li>Are touch targets large enough?</li>
            <li>Is the price clearly visible?</li>
            <li>Would grandma understand what to do?</li>
        </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise 2: Mobile Conversion Analysis</h4>
        <p>Visit 3 major ecommerce sites (Amazon, Nike, Apple) on your phone. For each, document:</p>
        <ul>
            <li>How many seconds to find "Add to Cart"?</li>
            <li>Is there a sticky CTA bar?</li>
            <li>How easy is the checkout flow?</li>
            <li>What trust signals are visible?</li>
        </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise 3: The 10-Foot Test</h4>
        <p>Take any design you've made recently. Zoom out to 25%. Can you identify the primary CTA within 1 second? If not, redesign it and document what you changed.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">The $50,000 Difference -- A Real Case Study</h3>
    <p>Two identical products. Two different stores. Dramatically different results.</p>

    <p>Two skincare brands launched in the same month. Same products. Same prices. Same marketing budget.</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #EF4444;">
            <h4 style="color: #EF4444; margin-top: 0;">Store A: Basic Template Design</h4>
            <ul>
                <li>Default fonts, no customization</li>
                <li>Stock images that look generic</li>
                <li>Cluttered layout with no breathing room</li>
                <li>Looked like every other store</li>
            </ul>
            <p style="color: #EF4444; font-weight: bold; margin-bottom: 0;">Result: 0.8% conversion rate -- $2,50,000 revenue</p>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Store B: Premium Custom Design</h4>
            <ul>
                <li>Custom color palette aligned to brand</li>
                <li>Premium typography (serif + sans-serif pairing)</li>
                <li>Lifestyle photography, generous whitespace</li>
                <li>Trust badges strategically placed</li>
            </ul>
            <p style="color: #10B981; font-weight: bold; margin-bottom: 0;">Result: 3.2% conversion rate -- $10,50,000 revenue</p>
        </div>
    </div>

    <p>The <strong>ONLY</strong> difference was design quality. Same traffic turned into <strong>4x more revenue.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">The Lesson:</strong>
        <p style="margin: 10px 0 0 0;">Design is not decoration -- it is the difference between visitors leaving or buying. A "pretty" design that does not convert is worthless. A conversion-focused design that looks premium? That is what generates revenue. This is why every pixel you craft at Digital Heroes matters.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #818CF8; margin-top: 0;">Daily Design Workflow</h3>
    <p>Structure your workday for maximum productivity. This is the recommended daily workflow for every designer at Digital Heroes:</p>

    <div style="position: relative; padding-left: 30px; margin: 20px 0;">
        <div style="position: absolute; left: 14px; top: 0; bottom: 0; width: 2px; background: rgba(129, 140, 248, 0.3);"></div>

        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0; position: relative;">
            <div style="position: absolute; left: -24px; top: 24px; width: 12px; height: 12px; background: #818CF8; border-radius: 50%;"></div>
            <h4 style="color: #818CF8; margin-top: 0;">Morning</h4>
            <p>Check Slack for new projects and messages. Review client briefs for the day. Gather all required assets (logos, images, brand guidelines). Prioritize tasks using the P0/P1/P2/P3 system.</p>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0; position: relative;">
            <div style="position: absolute; left: -24px; top: 24px; width: 12px; height: 12px; background: #A78BFA; border-radius: 50%;"></div>
            <h4 style="color: #A78BFA; margin-top: 0;">Mid-Day</h4>
            <p>Deep design work in focused 90-minute sessions. Create mockups and wireframes. Apply designs to Shopify theme editor. This is your creative power zone -- minimize distractions.</p>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0; position: relative;">
            <div style="position: absolute; left: -24px; top: 24px; width: 12px; height: 12px; background: #F472B6; border-radius: 50%;"></div>
            <h4 style="color: #F472B6; margin-top: 0;">Afternoon</h4>
            <p>Review all designs on mobile at 375px width. Optimize and compress images using TinyPNG. Send preview links to PM or client for feedback. Cross-check the design QA checklist.</p>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0; position: relative;">
            <div style="position: absolute; left: -24px; top: 24px; width: 12px; height: 12px; background: #34D399; border-radius: 50%;"></div>
            <h4 style="color: #34D399; margin-top: 0;">End of Day</h4>
            <p>Respond to any revision requests from clients or PMs. Update progress status in Slack. Prepare asset list and brief review for the next day. Never leave a client message unanswered overnight.</p>
        </div>
    </div>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #10B981;">Before Sending Any Design for Review:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Viewed on mobile at 375px width?</li>
            <li>All images compressed and optimized?</li>
            <li>Colors consistent throughout?</li>
            <li>Typography is readable (16px+ body)?</li>
            <li>No spelling errors in visible text?</li>
            <li>Preview link tested and working?</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>15 challenging questions</strong> testing your understanding of Ecommerce Design Mindset</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 2</li>
        <li>⏱️ Questions cover revenue-focused design, mobile-first principles, and quality standards</li>
    </ul>
</div>
`;

const task3Content = `
<h2>👑 TASK 3: THE 5 LAWS OF PREMIUM DESIGN</h2>

<div class="content-section">
    <h3>Why Premium Design Matters</h3>
    <p>This is the single most important lesson in your entire design career at Digital Heroes. <strong>Cheap design = cheap brand = low prices = low margins.</strong> Premium design lets you charge 3-5x more for the exact same product.</p>
    <p>Think about it: a plain white t-shirt costs $5 at a fast-fashion store, but $85 at a premium brand. The difference? The brand experience, which starts with design. The packaging, the website, the photography, the typography, the spacing — every visual detail tells the customer whether this is a $5 product or an $85 product.</p>
    <p>At Digital Heroes, we build Shopify stores that look like they belong to brands charging premium prices. That is our competitive advantage. When a store looks premium, the client can charge more, make more profit, and afford to pay us more. Everyone wins.</p>
    <div class="highlight-box">
        <h4>The Revenue Equation</h4>
        <p><strong>Amateur design</strong> = Product looks cheap = Customer expects low price = Client makes thin margins = Client cannot afford quality agency work</p>
        <p><strong>Premium design</strong> = Product looks luxurious = Customer expects premium price = Client makes healthy margins = Client pays us well and stays long-term</p>
    </div>
</div>

<div class="content-section">
    <h3>LAW 1: Whitespace = Luxury</h3>
    <p>This is the golden rule that separates amateur designers from professionals. <strong>Crowded = cheap. Breathing room = premium.</strong> When in doubt, add more space.</p>
    <p>Whitespace (also called negative space) is not "empty" space — it is active design. It serves a purpose. It gives your content room to breathe, makes text more readable, and creates a sense of sophistication. Every luxury brand in the world understands this instinctively.</p>

    <div class="highlight-box">
        <h4>Real-World Whitespace Examples</h4>
        <p><strong>Apple:</strong> Uses 60%+ whitespace on their product pages. A single iPhone image floating in a sea of white space. This makes the product feel precious, important, worth its price tag.</p>
        <p><strong>Aesop (skincare):</strong> Their website has enormous margins, minimal text, and products photographed with generous space around them. The result? Products feel artisanal and worth $50+ per bottle.</p>
        <p><strong>Glossier:</strong> Clean, airy layouts with soft colors and plenty of breathing room. Their homepage might only show 3-4 products above the fold, but each one feels intentional and desirable.</p>
    </div>

    <h4>Whitespace Specifications for Shopify Stores</h4>
    <table>
        <thead>
            <tr>
                <th>Element</th>
                <th>Minimum Desktop Padding</th>
                <th>Minimum Mobile Padding</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Between major sections</td>
                <td>80-120px</td>
                <td>48-64px</td>
            </tr>
            <tr>
                <td>Section internal padding (top/bottom)</td>
                <td>48-80px</td>
                <td>32-48px</td>
            </tr>
            <tr>
                <td>Around hero text</td>
                <td>60-100px</td>
                <td>40-60px</td>
            </tr>
            <tr>
                <td>Product card internal padding</td>
                <td>24-32px</td>
                <td>16-20px</td>
            </tr>
            <tr>
                <td>Between product grid items</td>
                <td>24-32px gap</td>
                <td>16px gap</td>
            </tr>
        </tbody>
    </table>

    <p><strong>The Breathing Room Concept:</strong> Every element on the page needs personal space. Imagine each heading, paragraph, image, and button has an invisible "comfort zone" around it. When elements are too close together, the design feels cramped and cheap — like a bargain bin store. When elements have generous space, the design feels curated and premium — like a high-end boutique.</p>

    <div class="warning-box">
        <h4>Before vs. After: The Whitespace Effect</h4>
        <p><strong>BEFORE (Amateur):</strong> Hero section with 20px padding, product title crammed against the image, description text starting immediately below the title, CTA button squeezed between text blocks with 10px margins. Everything feels suffocating.</p>
        <p><strong>AFTER (Premium):</strong> Hero section with 80px padding, product title with 32px of space above it, description with comfortable 24px gap from title, CTA button with 48px of breathing room above and below. Everything feels intentional and luxurious.</p>
    </div>
</div>

<div class="content-section">
    <h3>LAW 2: Consistency is King</h3>
    <p><strong>Same fonts, same colors, same button styles, same spacing — EVERYWHERE.</strong> Inconsistency is the hallmark of amateur design. Even ONE mismatched element breaks the spell of professionalism.</p>
    <p>Think of consistency like a five-star restaurant. Every plate is presented the same way. Every napkin is folded identically. Every glass is the same type. If one table had paper napkins while others had cloth, you would immediately doubt the quality of the entire restaurant. Design works the same way.</p>

    <div class="highlight-box">
        <h4>The Consistency Audit Checklist</h4>
        <p>Before delivering ANY design, run through this checklist:</p>
        <ul>
            <li><strong>Fonts:</strong> Are all headings the same font family and weight? Are all body paragraphs the same size?</li>
            <li><strong>Button Styles:</strong> Are all primary buttons the same color, border-radius, and padding? Are hover states consistent?</li>
            <li><strong>Colors:</strong> Is every color used from the approved palette? Are there any rogue colors?</li>
            <li><strong>Spacing:</strong> Are similar elements spaced the same way? Are all section paddings consistent?</li>
            <li><strong>Image Styles:</strong> Are all product images the same aspect ratio? Same background? Same lighting style?</li>
            <li><strong>Icon Style:</strong> Are all icons from the same icon set? Same line weight? Same size?</li>
            <li><strong>Border Radius:</strong> Are all corners the same radius (e.g., all 8px or all 12px)?</li>
            <li><strong>Shadows:</strong> If using box shadows, are they all the same offset, blur, and color?</li>
        </ul>
    </div>

    <p><strong>The Design System Solution:</strong> Create a design system BEFORE designing any pages. A design system is a library of reusable components (buttons, cards, inputs, badges) with defined styles. This forces consistency because every element on every page comes from the same source of truth. In Figma, this means creating Components and Styles that are used across all pages.</p>

    <div class="warning-box">
        <h4>Common Consistency Violations</h4>
        <p>These are the mistakes we see most often from junior designers:</p>
        <ul>
            <li>Button is rounded (border-radius: 50px) on homepage but square (border-radius: 4px) on product page</li>
            <li>Heading font size is 36px on one section but 32px on the next — pick one and stick with it</li>
            <li>Product cards have 24px padding on collection page but 16px on homepage featured section</li>
            <li>Star rating icons are yellow on product page but orange on testimonials section</li>
            <li>Links are underlined in some places but not others</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>LAW 3: Hierarchy Guides the Eye</h3>
    <p><strong>Most important = biggest and first. Guide users to what matters. Do not make them think.</strong> The user should never have to guess "What do I look at first?" — your design should make it obvious through size, color, weight, and position.</p>

    <h4>Visual Hierarchy Tools</h4>
    <ul>
        <li><strong>Size:</strong> Larger elements are seen first. Your H1 headline should dominate the page. The primary CTA should be big enough to notice instantly.</li>
        <li><strong>Color:</strong> Bright, saturated colors attract attention. Use your accent color (the 10% in the 60-30-10 rule) for the most important interactive element on the page.</li>
        <li><strong>Weight:</strong> Bold text stands out from regular text. Use font weights strategically — not everything should be bold.</li>
        <li><strong>Contrast:</strong> High contrast elements pop. A dark button on a light background demands attention.</li>
        <li><strong>Position:</strong> Top-left gets seen first (in left-to-right languages). Above the fold is more valuable than below.</li>
        <li><strong>Whitespace:</strong> An element surrounded by empty space draws the eye. Isolation = importance.</li>
    </ul>

    <h4>Reading Patterns</h4>
    <p><strong>F-Pattern:</strong> For text-heavy pages (blog posts, about pages), users scan in an F shape — across the top, then down the left side, then across again lower. Place important information along this path.</p>
    <p><strong>Z-Pattern:</strong> For landing pages and homepages, users scan in a Z shape — top-left to top-right, then diagonally to bottom-left, then across to bottom-right. Place your logo top-left, navigation top-right, main content bottom-left, and CTA bottom-right.</p>

    <div class="highlight-box">
        <h4>The Squint Test</h4>
        <p>Here is a technique every designer should use: <strong>Squint at your design until it blurs.</strong> What is the first thing you notice? If it is not the primary headline or the CTA button, your hierarchy is wrong.</p>
        <p>Try this with your favorite premium websites. Squint at Apple.com — you will see the product image and the headline first. Squint at a cluttered amateur site — everything blurs into a mess with no focal point.</p>
        <p>The squint test works because it strips away details and reveals the underlying visual structure. If your design fails the squint test, no amount of pretty fonts or colors will save it.</p>
    </div>

    <p><strong>Primary CTA Rule:</strong> The primary call-to-action should be the most visually prominent interactive element on the page. If your "Add to Cart" button does not immediately stand out, you are losing sales. It should be the biggest button, the most contrasting color, and positioned where the eye naturally lands.</p>
</div>

<div class="content-section">
    <h3>LAW 4: Mobile First, Always</h3>
    <p><strong>70%+ of e-commerce traffic is mobile.</strong> That means 7 out of 10 people visiting your Shopify store are on a phone. If mobile is not perfect, you are failing the majority of your users.</p>
    <p>Mobile-first design means you design at 375px width FIRST, then scale up to tablet (768px) and desktop (1440px). This is called <strong>progressive enhancement</strong> — start with the simplest version and add complexity as screen size increases.</p>

    <h4>Why Mobile First Works</h4>
    <ul>
        <li><strong>Forces prioritization:</strong> Small screens force you to decide what truly matters. You cannot fit everything, so you must choose the most important content.</li>
        <li><strong>Easier to scale up:</strong> Adding elements to a larger screen is easier than removing elements from a smaller one.</li>
        <li><strong>Better performance:</strong> Mobile-first CSS loads minimal styles first, then adds complexity for larger screens.</li>
        <li><strong>Touch-friendly by default:</strong> Designing for fingers first means buttons and targets are always large enough.</li>
    </ul>

    <div class="warning-box">
        <h4>Critical Mobile Specifications</h4>
        <p><strong>Touch Targets:</strong> Every button, link, and interactive element must be at least 44px x 44px. This is the Apple Human Interface Guideline minimum. Anything smaller and users will mis-tap.</p>
        <p><strong>Font Size:</strong> Body text must be 16px minimum on mobile. Anything smaller is unreadable at arm's length and triggers zoom on iOS.</p>
        <p><strong>No Horizontal Scrolling:</strong> If your page scrolls horizontally on mobile, something is broken. This is a critical bug, not a minor issue.</p>
        <p><strong>Full-Width CTAs:</strong> Primary buttons on mobile should be full-width (or nearly). A small centered button is hard to tap and easy to miss.</p>
    </div>

    <p><strong>The Thumb Zone:</strong> The bottom-center of the screen is the easiest area to reach with the thumb. This is why mobile navigation and CTAs should be near the bottom. The top corners are the hardest to reach. Never put critical actions in the top corners on mobile.</p>
</div>

<div class="content-section">
    <h3>LAW 5: Design for Conversion, Not Awards</h3>
    <p><strong>A beautiful store that does not sell is a failure.</strong> Every single design decision should answer one question: "Will this help the visitor buy?"</p>
    <p>This is the most important mindset shift for designers at Digital Heroes. We are not designing art gallery websites. We are designing revenue-generating machines. The store needs to be beautiful, yes — but beauty in service of sales, not beauty for its own sake.</p>

    <div class="highlight-box">
        <h4>The Conversion-First Mindset</h4>
        <ul>
            <li><strong>Data beats opinion:</strong> If an A/B test shows the "ugly" version converts 30% better, the "ugly" version wins. Always.</li>
            <li><strong>The client's customer is the real audience:</strong> You are not designing for the client, for your portfolio, or for other designers. You are designing for the end customer who needs to feel confident enough to purchase.</li>
            <li><strong>Reduce friction:</strong> Every extra click, every confusing label, every slow-loading image is friction that costs sales. Simplify ruthlessly.</li>
            <li><strong>Guide, do not decorate:</strong> Every design element should either inform, persuade, or direct. If an element does not serve one of these purposes, question whether it should exist.</li>
        </ul>
    </div>

    <h4>Questions to Ask About Every Design Decision</h4>
    <ol>
        <li>Does this help the visitor understand the product?</li>
        <li>Does this build trust and reduce purchase anxiety?</li>
        <li>Does this make the path to checkout clearer?</li>
        <li>Does this load fast enough on a slow 3G connection?</li>
        <li>Does this work perfectly on a phone screen?</li>
        <li>If I removed this element, would the visitor be less likely to buy?</li>
    </ol>
    <p>If you cannot answer "yes" to at least one of those questions, reconsider whether the element belongs in the design.</p>
</div>

<div class="content-section">
    <h3>Premium vs. Amateur Design — The Complete Comparison</h3>
    <p>Study this table carefully. It is the difference between a $500 Shopify store and a $5,000 Shopify store.</p>
    <table>
        <thead>
            <tr>
                <th>Design Element</th>
                <th>Amateur (Avoid)</th>
                <th>Premium (Our Standard)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Fonts</strong></td>
                <td>4+ different font families mixed randomly</td>
                <td>Maximum 2 font families, used consistently</td>
            </tr>
            <tr>
                <td><strong>Colors</strong></td>
                <td>Rainbow of colors, no system or logic</td>
                <td>3-color palette following the 60-30-10 rule</td>
            </tr>
            <tr>
                <td><strong>Spacing</strong></td>
                <td>Random, inconsistent (13px here, 21px there)</td>
                <td>8px grid system, every value is a multiple of 8</td>
            </tr>
            <tr>
                <td><strong>Images</strong></td>
                <td>Generic stock photos, inconsistent sizes</td>
                <td>Lifestyle/on-brand photography, consistent aspect ratios</td>
            </tr>
            <tr>
                <td><strong>Whitespace</strong></td>
                <td>Cramped, cluttered, every pixel filled</td>
                <td>Generous breathing room, 60%+ whitespace</td>
            </tr>
            <tr>
                <td><strong>CTAs</strong></td>
                <td>5+ competing buttons per screen</td>
                <td>1 clear primary action per view</td>
            </tr>
            <tr>
                <td><strong>Typography Hierarchy</strong></td>
                <td>Everything the same size and weight</td>
                <td>Clear H1 &gt; H2 &gt; H3 &gt; Body progression</td>
            </tr>
            <tr>
                <td><strong>Hover States</strong></td>
                <td>No hover effects, flat interactions</td>
                <td>Subtle transitions, color shifts, elevation changes</td>
            </tr>
            <tr>
                <td><strong>Mobile Experience</strong></td>
                <td>Desktop squeezed onto phone screen</td>
                <td>Mobile-first design with thumb-friendly targets</td>
            </tr>
            <tr>
                <td><strong>Trust Elements</strong></td>
                <td>No badges, no reviews, no guarantees</td>
                <td>Trust bar, verified reviews, security badges, guarantee</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Shopify Design: Possibilities and Limitations</h3>
    <div class="highlight-box">
        <h4>What You CAN Do in Shopify</h4>
        <ul>
            <li><strong>Customize all visual aspects of the theme:</strong> Colors, fonts, images, layout order, section visibility</li>
            <li><strong>Create custom sections:</strong> Unique designs built with Liquid + CSS for specific client needs</li>
            <li><strong>Use CSS for any visual effect:</strong> Animations, gradients, custom hover states, responsive adjustments</li>
            <li><strong>Add custom fonts:</strong> Upload any web font to the theme assets folder</li>
            <li><strong>Create custom page templates:</strong> Different layouts for different pages (landing pages, about pages, etc.)</li>
        </ul>
    </div>
    <div class="warning-box">
        <h4>Shopify Limitations to Know</h4>
        <ul>
            <li><strong>Theme editor structure:</strong> The editor uses predefined section types. Custom sections require code (Liquid/HTML/CSS) to create.</li>
            <li><strong>Checkout page design:</strong> The checkout is very limited in design customization unless the client has Shopify Plus (which costs $2,000+/month). Standard plans only allow basic color and logo changes on checkout.</li>
            <li><strong>Animations:</strong> Complex animations (parallax, scroll-triggered, page transitions) require custom JavaScript and are not built into most themes.</li>
            <li><strong>Performance tradeoff:</strong> Every custom element you add (fonts, scripts, images) affects page load speed. Beautiful design that loads slowly is still failed design.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Pinterest Inspiration Research</h3>
    <p>Before creating any design, you should research. Pinterest is the best free tool for visual research and moodboard creation.</p>
    <h4>Search Queries for Luxe Botanica Research</h4>
    <ul>
        <li><strong>"luxury skincare website design"</strong> — Note the whitespace, serif fonts, earth tones, and soft photography</li>
        <li><strong>"premium Shopify store design"</strong> — Note the homepage flow, hero sections, and trust element placement</li>
        <li><strong>"organic beauty brand packaging"</strong> — Note the color palettes, typography choices, and botanical imagery</li>
        <li><strong>"minimalist ecommerce design"</strong> — Note how restraint creates sophistication</li>
    </ul>
    <h4>Brands to Analyze</h4>
    <p>Visit these websites and study them through the lens of the 5 Laws:</p>
    <ul>
        <li><strong>Aesop (aesop.com):</strong> Master class in whitespace, typography, and premium feel. Notice how few products they show per page.</li>
        <li><strong>Glossier (glossier.com):</strong> Clean, friendly, millennial pink. Notice the consistent photography style and generous spacing.</li>
        <li><strong>Fenty Beauty (fentybeauty.com):</strong> Bold, inclusive, modern. Notice the strong hierarchy and conversion-focused layout.</li>
        <li><strong>Drunk Elephant (drunkelephant.com):</strong> Playful yet premium. Notice the color system and how fun and trust coexist.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>HANDS-ON EXERCISE: The 5 Laws Audit + Luxe Botanica Moodboard</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Part A: The 5-Store Audit</h4>
        <ol>
            <li><strong>Open 5 Shopify stores</strong> from different niches (fashion, skincare, tech accessories, gourmet food, jewelry). Use myshopify.com or the Shopify Store Showcase.</li>
            <li><strong>Score each store 1-10</strong> against all 5 Laws:
                <ul>
                    <li>Whitespace (1 = cramped, 10 = luxuriously spacious)</li>
                    <li>Consistency (1 = chaotic, 10 = perfectly uniform)</li>
                    <li>Hierarchy (1 = confusing, 10 = instantly clear focal point)</li>
                    <li>Mobile Experience (1 = broken, 10 = flawless on phone)</li>
                    <li>Conversion Focus (1 = no clear CTA, 10 = obvious path to purchase)</li>
                </ul>
            </li>
            <li><strong>Write 3 observations</strong> per store: what is done well, what could be improved.</li>
        </ol>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Part B: Luxe Botanica Moodboard</h4>
        <ol>
            <li><strong>Create a new Figma file</strong> called "Luxe Botanica - Moodboard"</li>
            <li><strong>Collect 15+ inspiration images</strong> from Pinterest: luxury skincare packaging, botanical photography, premium website layouts, earth-tone color palettes, serif typography examples</li>
            <li><strong>Arrange them</strong> on a 1920x1080 Figma frame with a grid layout</li>
            <li><strong>Write a 1-paragraph brand description</strong> for Luxe Botanica: "Luxe Botanica is a premium organic skincare brand for women 25-45 who value natural ingredients, sustainable packaging, and science-backed formulations. The brand aesthetic is earthy yet elevated — think forest green, warm gold, and cream tones. The design language should feel like walking into a high-end spa: calm, clean, trustworthy, and indulgent."</li>
            <li><strong>Identify 3 specific design elements</strong> you want to incorporate from your research (e.g., "serif headings like Aesop", "botanical line art borders", "earth-tone product photography style")</li>
        </ol>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(190, 24, 93, 0.1), rgba(157, 23, 77, 0.1)); border: 2px solid rgba(190, 24, 93, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">CREATIVE OWNERSHIP &amp; QUALITY STANDARDS</h3>

    <div class="highlight-box" style="background: rgba(255,255,255,0.05); border-left: 4px solid #F472B6; padding: 20px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">You Own Your Work 100%</h4>
        <p style="font-size: 1.05em;">You are <strong>100% responsible</strong> for the quality of every design that leaves your hands:</p>
        <ul style="margin-top: 10px; line-height: 1.8;">
            <li><strong>Colors</strong> -- Your choice, your responsibility</li>
            <li><strong>Typography</strong> -- Your choice, your responsibility</li>
            <li><strong>Layouts</strong> -- Your choice, your responsibility</li>
            <li><strong>Imagery</strong> -- Your choice, your responsibility</li>
            <li><strong>Overall aesthetic</strong> -- Your choice, your responsibility</li>
        </ul>
        <p style="margin-top: 15px;"><strong>Goal: OVERDELIVER -- exceed expectations, do not just meet them.</strong></p>
    </div>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <h4 style="color: #EF4444; margin-top: 0;">Zero Tolerance Policy</h4>
        <p><strong>After 15 days of onboarding:</strong> ONE careless mistake on a live design = potential removal from client work.</p>
        <ul style="margin-top: 10px; line-height: 1.8;">
            <li>No typos in hero text</li>
            <li>No broken images</li>
            <li>No misaligned elements</li>
            <li>No inconsistent spacing</li>
            <li>Check your work <strong>10x</strong> before delivery</li>
        </ul>
    </div>

    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #A78BFA; margin-top: 0;">Peer Review Process</h4>
        <p>Before major deliveries, get <strong>another designer</strong> to review your work:</p>
        <ul style="margin-top: 10px;">
            <li><strong>Fresh eyes catch what you missed</strong> -- after staring at a design for hours, you become blind to errors</li>
            <li><strong>Share design feedback across the team</strong> -- this builds collective quality standards</li>
            <li><strong>Two designers are better than one</strong> -- a second pair of eyes before client delivery is mandatory for premium work</li>
        </ul>
        <p><strong>Rule:</strong> Never send a major deliverable (homepage design, full store mockup) to a client without at least one peer review. Quick Slack message to a teammate: "Hey, can you take 5 min to review this before I send it?"</p>
    </div>
</div>

<div class="content-section">
    <h3>What Makes Design "Premium" -- The Complete Breakdown</h3>
    <p>Study this comparison carefully. This is the difference between a store that makes clients question their investment and a store that makes clients refer their friends.</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: rgba(239, 68, 68, 0.08); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.2);">
            <h4 style="color: #EF4444; margin-top: 0;">Cheap / Amateur Design</h4>
            <ul style="line-height: 1.8;">
                <li>Crowded layouts with no breathing room</li>
                <li>Inconsistent fonts (3+ font families)</li>
                <li>Bright, clashing colors with no system</li>
                <li>Stock images that look generic</li>
                <li>Tiny text that is hard to read</li>
                <li>Buttons that look like 2005</li>
                <li>No visual hierarchy -- everything competes for attention</li>
            </ul>
        </div>
        <div style="background: rgba(16, 185, 129, 0.08); padding: 20px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2);">
            <h4 style="color: #10B981; margin-top: 0;">Premium Design (Our Standard)</h4>
            <ul style="line-height: 1.8;">
                <li>Generous whitespace between elements</li>
                <li>2 font families maximum (heading + body)</li>
                <li>Curated, harmonious color palette</li>
                <li>High-quality lifestyle and product imagery</li>
                <li>Readable text (16px+ body minimum)</li>
                <li>Modern buttons with hover states</li>
                <li>Clear visual hierarchy guiding the eye</li>
            </ul>
        </div>
    </div>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">The Client Who Wanted "MORE"</strong>
        <p style="margin: 10px 0;">A client insisted on adding more elements: more colors, more animations, more sections, more products. "The more content, the better!"</p>
        <p>The cluttered design launched with a <strong style="color: #EF4444;">0.9% conversion rate.</strong> Visitors could not find what they wanted. Too many choices = no choice.</p>
        <p>We redesigned with half the elements and double the whitespace. Conversion jumped to <strong style="color: #10B981;">2.8%.</strong></p>
        <p style="margin-bottom: 0;"><strong>The Lesson:</strong> Your job is to guide the client to what WORKS, not what they "feel" like. Data beats opinions. Less almost always converts more.</p>
    </div>
</div>

<div class="content-section">
    <h3>Ready for the Quiz?</h3>
    <ul>
        <li>You should be able to name and explain all 5 Laws of Premium Design</li>
        <li>You should understand the difference between premium and amateur design elements</li>
        <li>You should know Shopify's design capabilities and limitations</li>
        <li>You should understand Creative Ownership and the Zero Tolerance Policy</li>
        <li>You should have completed the 5-Store Audit and Luxe Botanica Moodboard</li>
        <li>Score <strong>10/10</strong> to proceed to Color Psychology</li>
    </ul>
</div>
`;

const task4Content = `
<h2>🎨 TASK 4: COLOR PSYCHOLOGY FOR ECOMMERCE</h2>

<div class="content-section">
    <h3>The Science of Color in E-commerce</h3>
    <p>Color is one of the most powerful tools in your design arsenal. Research shows that <strong>color accounts for 62-90% of a customer's first impression</strong> of a product or brand. The right color palette can increase conversions by up to 24%, while the wrong palette can make even great products feel untrustworthy.</p>
    <p>Color is not just decoration — it is communication. Every color triggers psychological associations built over a lifetime of cultural exposure. Red means urgency and passion. Blue means trust and stability. Green means nature and health. As a designer, you need to weaponize this knowledge to help your clients sell more.</p>
    <p>For Luxe Botanica, our premium organic skincare brand, color choices are especially critical. The palette must communicate: natural ingredients, premium quality, trustworthiness, and feminine sophistication. Getting this wrong could make the brand feel cheap (too bright), clinical (too cold), or generic (too safe).</p>
</div>

<div class="content-section">
    <h3>The 60-30-10 Rule</h3>
    <div class="highlight-box">
        <h4>The Golden Ratio of Color Distribution</h4>
        <p>This is the most important color principle in all of design. Every successful brand, interior, and website follows this ratio whether they know it or not.</p>
        <ul>
            <li><strong>60% Dominant Color (Background/Large Surfaces):</strong> This is usually white, off-white, or a very light neutral. It provides the canvas for everything else. It should feel calm and unobtrusive. For Luxe Botanica: warm cream (#FFFDF7).</li>
            <li><strong>30% Secondary Color (Brand Identity):</strong> This is your primary brand color. It appears in headers, cards, navigation, and section backgrounds. It defines the brand's personality. For Luxe Botanica: forest green (#2D5016).</li>
            <li><strong>10% Accent Color (CTAs and Highlights):</strong> This is your action color. It MUST contrast strongly with the other 90%. It appears on CTA buttons, sale badges, active states, and important highlights. For Luxe Botanica: warm gold (#C9A84C).</li>
        </ul>
    </div>

    <h4>The Room Analogy</h4>
    <p>Imagine you are decorating a room:</p>
    <ul>
        <li><strong>60% = The walls:</strong> White or neutral. This is the largest surface area and sets the tone.</li>
        <li><strong>30% = The furniture:</strong> Sofas, tables, shelves in your brand color. This gives the room character.</li>
        <li><strong>10% = The accessories:</strong> Throw pillows, artwork, decorative objects in your accent color. These are the eye-catching pops that draw attention.</li>
    </ul>
    <p>If you put the accent color on the walls (60%), it would be overwhelming. If you put the neutral on everything (100%), it would be boring. The 60-30-10 balance creates visual harmony where the eye knows exactly where to look.</p>

    <div class="warning-box">
        <h4>Common 60-30-10 Mistakes</h4>
        <ul>
            <li><strong>Using the accent color too much:</strong> If your gold accent appears on 30% of the page, it loses its power. Accent means rare and impactful.</li>
            <li><strong>Making the background too busy:</strong> Patterns, gradients, or saturated colors as the 60% dominant color create visual fatigue.</li>
            <li><strong>Forgetting the accent entirely:</strong> A store with only white and green feels flat. The accent color is what creates visual excitement and draws the eye to CTAs.</li>
            <li><strong>Using 5+ colors:</strong> If your design needs a "color legend" to explain all the colors, you have too many. Simplify.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Industry Color Psychology — The Complete Guide</h3>
    <p>Different industries have established color associations that customers expect. Going against these conventions is possible but risky — you need a very good reason to make a finance brand pink or a kids brand black.</p>
    <table>
        <thead>
            <tr>
                <th>Industry</th>
                <th>Primary Colors</th>
                <th>Psychology / Emotion</th>
                <th>Example Brands</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Luxury / Fashion</strong></td>
                <td>Black, Gold, Navy, Deep Purple</td>
                <td>Elegance, exclusivity, sophistication, power</td>
                <td>Chanel, Versace, Rolex, Louis Vuitton</td>
            </tr>
            <tr>
                <td><strong>Skincare / Beauty</strong></td>
                <td>Soft Green, Cream, Blush Pink, Lavender</td>
                <td>Natural, pure, gentle, feminine, clean</td>
                <td>Aesop, Glossier, Drunk Elephant, The Ordinary</td>
            </tr>
            <tr>
                <td><strong>Tech / SaaS</strong></td>
                <td>Blue, Electric Blue, Dark Blue, Teal</td>
                <td>Trust, innovation, reliability, intelligence</td>
                <td>Samsung, PayPal, Stripe, Shopify</td>
            </tr>
            <tr>
                <td><strong>Food / Organic</strong></td>
                <td>Green, Brown, Warm Orange, Earth Tones</td>
                <td>Fresh, healthy, natural, warm, appetizing</td>
                <td>Whole Foods, Sweetgreen, Thrive Market</td>
            </tr>
            <tr>
                <td><strong>Fitness / Sports</strong></td>
                <td>Red, Orange, Black, Electric Green</td>
                <td>Energy, power, intensity, motivation</td>
                <td>Nike, Under Armour, Gymshark, Peloton</td>
            </tr>
            <tr>
                <td><strong>Kids / Toys</strong></td>
                <td>Bright Primary (Red, Blue, Yellow, Green)</td>
                <td>Fun, playful, energetic, safe, joyful</td>
                <td>LEGO, Fisher-Price, Crayola</td>
            </tr>
            <tr>
                <td><strong>Finance / Banking</strong></td>
                <td>Navy, Dark Blue, White, Forest Green</td>
                <td>Trust, stability, security, professionalism</td>
                <td>Chase, Barclays, Fidelity, Robinhood</td>
            </tr>
            <tr>
                <td><strong>Eco / Sustainable</strong></td>
                <td>Forest Green, Earth Tones, Natural Beige</td>
                <td>Environmental, honest, responsible, earthy</td>
                <td>Patagonia, Allbirds, Everlane</td>
            </tr>
            <tr>
                <td><strong>Pet / Animal</strong></td>
                <td>Warm Orange, Teal, Soft Blue, Green</td>
                <td>Friendly, caring, playful, trustworthy</td>
                <td>Chewy, BarkBox, Ollie</td>
            </tr>
            <tr>
                <td><strong>Jewelry / Accessories</strong></td>
                <td>Gold, Black, Blush, Champagne</td>
                <td>Precious, elegant, refined, timeless</td>
                <td>Tiffany &amp; Co, Mejuri, Monica Vinader</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Color Accessibility — Non-Negotiable Standards</h3>
    <div class="warning-box">
        <h4>WCAG Accessibility Requirements</h4>
        <p>Color accessibility is not optional. It is a legal requirement in many countries and an ethical obligation everywhere. Approximately 8% of men and 0.5% of women have color vision deficiency. If your design is not accessible, you are excluding potential customers.</p>
        <ul>
            <li><strong>WCAG AA (Minimum Standard):</strong> Normal text must have a contrast ratio of at least <strong>4.5:1</strong> against its background. This means dark gray (#333) on white (#FFF) passes, but medium gray (#999) on white (#FFF) fails.</li>
            <li><strong>Large Text (24px+ or 19px bold):</strong> Minimum contrast ratio of <strong>3:1</strong>. Slightly more lenient because larger text is easier to read.</li>
            <li><strong>WCAG AAA (Gold Standard):</strong> Normal text at 7:1, large text at 4.5:1. Aim for this when possible.</li>
            <li><strong>Non-text Elements:</strong> Icons, borders, form fields, and graphical objects must have 3:1 contrast ratio against adjacent colors.</li>
        </ul>
        <p><strong>Critical Rule:</strong> Never rely on color alone to convey information. For example, do not use only red/green to indicate error/success — also include icons or text labels.</p>
    </div>

    <h4>Common Accessibility Failures</h4>
    <ul>
        <li><strong>Light gray text on white background:</strong> #CCCCCC on #FFFFFF has a contrast ratio of only 1.6:1. This fails badly. Use #767676 minimum for small text on white.</li>
        <li><strong>Placeholder text in form fields:</strong> Default browser placeholder text (#A9A9A9) fails contrast. Make placeholders darker or use floating labels.</li>
        <li><strong>Colored text on colored backgrounds:</strong> Green text on a green-tinted card. Even if the shades differ, check the actual ratio with a tool.</li>
        <li><strong>Low-contrast CTA buttons:</strong> A light green button with white text might look "soft" but if the contrast ratio is below 4.5:1, some users literally cannot read it.</li>
    </ul>

    <h4>Accessibility Testing Tools</h4>
    <table>
        <thead>
            <tr>
                <th>Tool</th>
                <th>Purpose</th>
                <th>How to Access</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>WebAIM Contrast Checker</strong></td>
                <td>Check contrast ratio between any two colors</td>
                <td>webaim.org/resources/contrastchecker</td>
            </tr>
            <tr>
                <td><strong>Stark (Figma Plugin)</strong></td>
                <td>Check contrast directly in Figma designs</td>
                <td>Install from Figma Community</td>
            </tr>
            <tr>
                <td><strong>Color Oracle</strong></td>
                <td>Simulate color blindness on your screen</td>
                <td>Free desktop app (colororacle.org)</td>
            </tr>
            <tr>
                <td><strong>Chrome DevTools</strong></td>
                <td>Built-in contrast checker in Elements panel</td>
                <td>Right-click &gt; Inspect &gt; click color swatch</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>CTA Button Color Psychology</h3>
    <p>The color of your "Add to Cart" button is one of the highest-impact design decisions you will make. Here is what the research and industry practice tell us:</p>
    <table>
        <thead>
            <tr>
                <th>CTA Color</th>
                <th>Psychology</th>
                <th>Best For</th>
                <th>Caution</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Green</strong></td>
                <td>"Go", positive, safe, natural</td>
                <td>Checkout buttons, health/eco brands</td>
                <td>Can blend in if site already uses green</td>
            </tr>
            <tr>
                <td><strong>Orange</strong></td>
                <td>Urgency, energy, friendly, warm</td>
                <td>"Add to Cart", limited offers</td>
                <td>Can feel cheap if too bright/neon</td>
            </tr>
            <tr>
                <td><strong>Black</strong></td>
                <td>Premium, sophisticated, definitive</td>
                <td>Luxury brands, fashion, high-end</td>
                <td>Low contrast on dark backgrounds</td>
            </tr>
            <tr>
                <td><strong>Red</strong></td>
                <td>Urgency, excitement, passion</td>
                <td>Flash sales, clearance, food brands</td>
                <td>Can feel aggressive or "cheap sale"</td>
            </tr>
            <tr>
                <td><strong>Blue</strong></td>
                <td>Trust, calm, professional</td>
                <td>Tech, finance, subscription services</td>
                <td>Less urgency than warm colors</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>The #1 CTA Rule</h4>
        <p>The actual color matters less than the <strong>contrast</strong>. Your CTA button must visually POP against its surroundings. A bright orange button on a white page is effective. A bright orange button on an orange-tinted page is invisible.</p>
        <p><strong>The Test:</strong> Screenshot your product page, convert it to grayscale, and squint. Can you still identify the CTA button instantly? If not, increase the contrast.</p>
    </div>

    <p><strong>A/B Testing Approach:</strong> If you are unsure which CTA color works best, test it. Create two versions of the product page with different button colors and measure click-through rates over 1-2 weeks. Data always beats guesswork. Tools like Google Optimize or Shopify's built-in analytics can help.</p>
</div>

<div class="content-section">
    <h3>Dark Mode Design</h3>
    <p>Dark mode is increasingly popular, especially for tech, gaming, photography, and luxury brands. However, dark mode is NOT just "invert all colors." Done wrong, it looks terrible and hurts readability.</p>

    <h4>When to Use Dark Mode</h4>
    <ul>
        <li><strong>Good fit:</strong> Tech products, gaming accessories, photography, luxury/fashion, nightlife/entertainment</li>
        <li><strong>Bad fit:</strong> Kids products, organic food, health/wellness, most skincare (Luxe Botanica = light mode)</li>
    </ul>

    <h4>Dark Mode Best Practices</h4>
    <ul>
        <li><strong>Background color:</strong> Use #121212 or #1A1A1A — never pure black (#000000). Pure black creates harsh contrast that causes eye strain.</li>
        <li><strong>Surface elevation:</strong> Use slightly lighter shades for elevated elements (cards: #1E1E1E, modals: #2D2D2D). This creates depth without borders.</li>
        <li><strong>White text opacity:</strong> Reduce to 87% opacity for high-emphasis text, 60% for medium-emphasis, 38% for disabled. Pure white (#FFFFFF at 100%) is too harsh on dark backgrounds.</li>
        <li><strong>Desaturate colors:</strong> Bright saturated colors on dark backgrounds vibrate visually. Reduce saturation by 10-20% for comfortable viewing.</li>
        <li><strong>Test readability:</strong> Spend 5 minutes reading your dark mode design. If your eyes feel tired, the contrast is off.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Color Palette Tools</h3>
    <p>These tools will help you create, refine, and test color palettes efficiently:</p>
    <table>
        <thead>
            <tr>
                <th>Tool</th>
                <th>Purpose</th>
                <th>URL / Access</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Coolors.co</strong></td>
                <td>Generate random palettes, lock colors you like, adjust with precision</td>
                <td>coolors.co (press spacebar to generate)</td>
            </tr>
            <tr>
                <td><strong>Adobe Color</strong></td>
                <td>Color wheel with harmony rules (complementary, triadic, etc.)</td>
                <td>color.adobe.com</td>
            </tr>
            <tr>
                <td><strong>Realtime Colors</strong></td>
                <td>Preview your palette on a real website layout instantly</td>
                <td>realtimecolors.com</td>
            </tr>
            <tr>
                <td><strong>Color Hunt</strong></td>
                <td>Browse thousands of curated 4-color palettes</td>
                <td>colorhunt.co</td>
            </tr>
            <tr>
                <td><strong>Muzli Colors</strong></td>
                <td>AI-powered palette generator with preview</td>
                <td>colors.muz.li</td>
            </tr>
            <tr>
                <td><strong>Contrast Checker (WebAIM)</strong></td>
                <td>Verify accessibility compliance</td>
                <td>webaim.org/resources/contrastchecker</td>
            </tr>
            <tr>
                <td><strong>Stark (Figma Plugin)</strong></td>
                <td>Accessibility testing inside Figma</td>
                <td>getstark.co (also Figma community)</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Using AI for Color Palette Creation</h3>
    <p>AI tools can accelerate your color workflow, but should be used as starting points, not final answers.</p>
    <h4>AI-Assisted Palette Workflow</h4>
    <ol>
        <li><strong>Start with brand context:</strong> Tell ChatGPT or similar AI: "Generate a color palette for a premium organic skincare brand targeting women 25-40. The brand values are natural ingredients, sustainability, and luxury. The vibe should be earthy yet elevated." The AI will suggest hex codes with reasoning.</li>
        <li><strong>Validate against 60-30-10:</strong> Take the AI suggestions and assign them to the 60-30-10 framework. Does the dominant color feel calm enough? Does the brand color have enough personality? Does the accent color pop sufficiently?</li>
        <li><strong>Test with Realtime Colors:</strong> Plug the palette into realtimecolors.com to see how it looks on an actual website layout. Adjust as needed.</li>
        <li><strong>Check accessibility:</strong> Run every text/background combination through the WebAIM contrast checker. Fix any failures.</li>
        <li><strong>Use Nano Banana:</strong> Upload product photos and test them on different colored backgrounds. Does the product look good on your chosen palette? Does it feel premium?</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>HANDS-ON EXERCISE: Build the Luxe Botanica Color Palette</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 1: Define the Palette</h4>
        <p>Create the following color palette in your Figma file:</p>
        <table>
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Color Name</th>
                    <th>Hex Code</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Primary (60%)</strong></td>
                    <td>Warm Cream</td>
                    <td>#FFFDF7</td>
                    <td>Page backgrounds, large surfaces, card backgrounds</td>
                </tr>
                <tr>
                    <td><strong>Secondary (30%)</strong></td>
                    <td>Forest Green</td>
                    <td>#2D5016</td>
                    <td>Headers, navigation, footer, section backgrounds</td>
                </tr>
                <tr>
                    <td><strong>Accent (10%)</strong></td>
                    <td>Warm Gold</td>
                    <td>#C9A84C</td>
                    <td>CTA buttons, highlights, badges, active states</td>
                </tr>
                <tr>
                    <td><strong>Text</strong></td>
                    <td>Soft Black</td>
                    <td>#1A1A1A</td>
                    <td>Headings, body text (never pure #000000)</td>
                </tr>
                <tr>
                    <td><strong>Supporting</strong></td>
                    <td>Light Sage</td>
                    <td>#F5F0E8</td>
                    <td>Alternate section backgrounds, card fills</td>
                </tr>
                <tr>
                    <td><strong>Secondary Text</strong></td>
                    <td>Warm Gray</td>
                    <td>#6B6B6B</td>
                    <td>Captions, secondary text, descriptions</td>
                </tr>
                <tr>
                    <td><strong>Border</strong></td>
                    <td>Soft Border</td>
                    <td>#E8E0D4</td>
                    <td>Card borders, dividers, input borders</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 2: Create Figma Color Styles</h4>
        <p>In Figma, create named Color Styles for each color above. Name them: "Primary/Cream", "Secondary/Forest Green", "Accent/Gold", "Text/Primary", "Text/Secondary", "Surface/Light Sage", "Border/Default".</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 3: Test Contrast Ratios</h4>
        <p>Go to webaim.org/resources/contrastchecker and test these combinations:</p>
        <ul>
            <li>#1A1A1A text on #FFFDF7 background — should pass AA and AAA</li>
            <li>#6B6B6B text on #FFFDF7 background — should pass AA minimum</li>
            <li>White (#FFFFFF) text on #2D5016 background — check if AA passes</li>
            <li>White (#FFFFFF) text on #C9A84C background — check contrast and adjust if needed</li>
        </ul>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 4: Create a Color Swatch Board</h4>
        <p>In Figma, create a frame showing all palette colors as large swatches with their hex codes, names, and contrast ratios. This becomes part of your style guide deliverable.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 5: Competitive Analysis</h4>
        <p>Pinterest search "organic skincare color palette" and compare your palette with 5 real skincare brands. Are your colors in the right family? Do they feel premium? Would they stand out on a shelf (or a browser)?</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(236, 72, 153, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">Brand Styling Process -- Step by Step</h3>
    <p>When you start a new Shopify store project, follow this systematic process to establish the brand visual identity before designing any pages.</p>

    <h4 style="color: #F472B6;">Step 1: Gather Brand Assets</h4>
    <p>Before you design a single pixel, you need the right materials. Request these from the client or PM:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(244, 114, 182, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Asset</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">What to Request</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">If Not Provided</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Logo</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">PNG with transparency, SVG if available</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Flag to PM -- cannot proceed without logo</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Brand Colors</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hex codes for primary, secondary, accent</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Extract from logo or create complementary palette</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Fonts</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Font names or brand guidelines</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Suggest Google Fonts based on brand vibe</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reference Stores</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 stores they love (and why)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ask what "vibe" they want (minimal, bold, playful)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product Images</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">High-res, consistent style, lifestyle shots</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Use best available, recommend AI enhancement</td></tr>
        </tbody>
    </table>

    <h4 style="color: #F472B6;">Step 2: Create the Color Scheme</h4>
    <p>Use the gathered assets to build a complete color system. Every Shopify store needs these 5 color roles defined:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(244, 114, 182, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Color Role</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Usage</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Primary</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Buttons, links, key CTAs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">#1E3A5F (Deep blue)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Secondary</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Accents, hover states, secondary buttons</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">#3D6B99 (Lighter blue)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Background</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Page background, cards</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">#FFFFFF or #F8F9FA</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Text</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Body text, headings</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">#212529 (Not pure black)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Muted</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Borders, dividers, disabled states</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">#E0E0E0</td></tr>
        </tbody>
    </table>
    <p><strong>Pro Tip:</strong> Define these 5 colors FIRST, then apply the 60-30-10 rule to distribute them across the store. The Background color is your 60%, Primary is your 30%, and your boldest accent is the 10%.</p>
</div>

<div class="content-section" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3>Contrast for Conversions</h3>
    <p>Contrast is not just an accessibility requirement -- it is a conversion driver. Your CTA buttons MUST visually POP against their surroundings. Here is the practical breakdown:</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: rgba(16, 185, 129, 0.08); padding: 20px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2);">
            <h4 style="color: #10B981; margin-top: 0;">High Contrast CTAs (Do This)</h4>
            <ul style="line-height: 1.8;">
                <li>"Add to Cart" should POP visually</li>
                <li>Use the brand's boldest color for primary CTA</li>
                <li>Ensure minimum 4.5:1 contrast ratio</li>
                <li>Test with both white and dark text on the button</li>
                <li>The CTA should be visible in a grayscale screenshot</li>
            </ul>
        </div>
        <div style="background: rgba(239, 68, 68, 0.08); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.2);">
            <h4 style="color: #EF4444; margin-top: 0;">Low Contrast Mistakes (Avoid This)</h4>
            <ul style="line-height: 1.8;">
                <li>Gray text on gray background</li>
                <li>Light green on white</li>
                <li>Blue links on blue headers</li>
                <li>Yellow text on white background</li>
                <li>Pastel buttons that blend into the page</li>
            </ul>
        </div>
    </div>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">The Grayscale Test:</strong>
        <p style="margin: 10px 0 0 0;">Screenshot your product page, convert it to grayscale, and squint. Can you still identify the CTA button instantly? If not, increase the contrast. This test strips away color bias and reveals the true visual hierarchy of your design.</p>
    </div>
</div>

<div class="content-section">
    <h3>Ready for the Quiz?</h3>
    <ul>
        <li>You should be able to explain the 60-30-10 rule and apply it to any brand</li>
        <li>You should know which colors are associated with which industries and why</li>
        <li>You should understand WCAG contrast requirements (4.5:1 for body, 3:1 for large text)</li>
        <li>You should know when and how to use dark mode</li>
        <li>You should understand the Brand Styling Process (gather assets, create color scheme)</li>
        <li>You should have completed the Luxe Botanica color palette in Figma</li>
        <li>Score <strong>10/10</strong> to proceed to Typography Mastery</li>
    </ul>
</div>
`;

const task5Content = `
<h2>🔤 TASK 5: TYPOGRAPHY MASTERY</h2>

<div class="content-section">
    <h3>Why Typography Makes or Breaks Design</h3>
    <p><strong>95% of web design is typography.</strong> Text is how people consume information on the web. It is the primary interface between your design and the user. If your typography is wrong, nothing else matters — not your beautiful images, not your clever animations, not your perfect color palette.</p>
    <p>Typography creates an emotional response before someone reads a single word. The shape of letters, the spacing between them, the weight of the strokes — all of these communicate personality. A serif font says "traditional, elegant, trustworthy." A geometric sans-serif says "modern, clean, tech-forward." A script font says "personal, artistic, handcrafted."</p>
    <p>The wrong font sends the wrong message. Comic Sans on a luxury skincare brand is a disaster — it communicates "childish" and "unprofessional" when you need "sophisticated" and "premium." Choosing the right typography is one of the most impactful decisions you will make as a designer.</p>
    <p>For Luxe Botanica, we need typography that communicates: premium quality, natural elegance, trustworthiness, and sophistication. The wrong choice would undermine the entire brand positioning.</p>
</div>

<div class="content-section">
    <h3>The 2-Font Rule</h3>
    <div class="highlight-box">
        <h4>Maximum 2 Font Families Per Store</h4>
        <p><strong>Formula:</strong> 1 distinctive heading font + 1 clean body font. That is it. More fonts = amateur design, slower load times, and visual chaos.</p>
        <ul>
            <li><strong>Heading Font:</strong> This is your personality font. It carries the brand's character. For luxury brands, this is often a serif font (Playfair Display, Cormorant Garamond). For modern brands, a geometric sans-serif (Poppins, Montserrat). It appears on H1, H2, H3 headings and occasionally on feature text.</li>
            <li><strong>Body Font:</strong> This is your workhorse font. It must be highly readable at small sizes (16px). It should be neutral and comfortable to read in paragraphs. Almost always a clean sans-serif (Lato, Inter, Open Sans, Roboto). It appears on body text, product descriptions, form labels, navigation, buttons, and all functional text.</li>
            <li><strong>Exception — Logo Font:</strong> A decorative, script, or custom font used ONLY for the logo does not count as a third font. It never appears anywhere else on the site.</li>
        </ul>
    </div>

    <h4>Why Not 3+ Fonts?</h4>
    <ul>
        <li><strong>Visual chaos:</strong> Each font has its own personality. Three personalities fighting for attention creates confusion, not sophistication.</li>
        <li><strong>Performance cost:</strong> Each font file adds 20-50KB to page load. Three fonts with multiple weights can add 300-500KB — noticeable on mobile connections.</li>
        <li><strong>Consistency becomes impossible:</strong> With 3+ fonts, you constantly question "which font goes here?" The more options, the more inconsistency creeps in.</li>
        <li><strong>Premium brands use fewer fonts:</strong> Apple uses San Francisco. Chanel uses their custom serif plus a clean sans. Aesop uses two fonts. Constraint is sophisticated.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Font Pairing Guide — By Niche</h3>
    <p>These are proven, professional font pairings that work well for Shopify stores. Choose the pairing that matches your client's brand personality.</p>
    <table>
        <thead>
            <tr>
                <th>Niche / Vibe</th>
                <th>Heading Font</th>
                <th>Body Font</th>
                <th>Personality</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Luxury / Premium</strong></td>
                <td>Playfair Display (Serif)</td>
                <td>Lato (Sans-Serif)</td>
                <td>Elegant, sophisticated, timeless — perfect for skincare, fashion, jewelry</td>
            </tr>
            <tr>
                <td><strong>Modern / Clean</strong></td>
                <td>Poppins (Sans-Serif)</td>
                <td>Inter (Sans-Serif)</td>
                <td>Sleek, professional, tech-forward — great for gadgets, SaaS, modern brands</td>
            </tr>
            <tr>
                <td><strong>Minimalist</strong></td>
                <td>Outfit (Sans-Serif)</td>
                <td>Open Sans (Sans-Serif)</td>
                <td>Clean, approachable, uncluttered — works for wellness, lifestyle, home goods</td>
            </tr>
            <tr>
                <td><strong>Friendly / Casual</strong></td>
                <td>Nunito (Rounded Sans)</td>
                <td>Roboto (Sans-Serif)</td>
                <td>Warm, welcoming, approachable — good for kids, pets, food, community brands</td>
            </tr>
            <tr>
                <td><strong>Editorial / Magazine</strong></td>
                <td>Cormorant Garamond (Serif)</td>
                <td>Source Sans Pro (Sans-Serif)</td>
                <td>Refined, cultured, storytelling — ideal for editorial content, artisanal brands</td>
            </tr>
            <tr>
                <td><strong>Bold / Sporty</strong></td>
                <td>Montserrat (Sans-Serif)</td>
                <td>Hind (Sans-Serif)</td>
                <td>Strong, dynamic, confident — perfect for fitness, sports, outdoor gear</td>
            </tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>Luxe Botanica Typography Choice</h4>
        <p>For our premium organic skincare brand, we will use:</p>
        <ul>
            <li><strong>Headings:</strong> Playfair Display — its elegant serifs communicate luxury and tradition, perfect for a brand that values natural ingredients and artisanal quality</li>
            <li><strong>Body:</strong> Lato — clean, highly readable, with a warm humanist touch that feels approachable without sacrificing professionalism</li>
        </ul>
        <p>This pairing creates the perfect balance of "premium" (serif headings) and "trustworthy" (clean sans body) that a high-end skincare brand needs.</p>
    </div>
</div>

<div class="content-section">
    <h3>Font Size Hierarchy — Complete Specification</h3>
    <p>A clear size hierarchy is essential. Each heading level should be visibly distinct from the level below it. If your H2 and H3 look the same, you have a hierarchy problem.</p>
    <table>
        <thead>
            <tr>
                <th>Element</th>
                <th>Desktop Size</th>
                <th>Mobile Size</th>
                <th>Weight</th>
                <th>Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>H1 (Hero Headline)</strong></td>
                <td>48-64px</td>
                <td>32-40px</td>
                <td>Bold (700)</td>
                <td>One per page. The main message. Above the fold.</td>
            </tr>
            <tr>
                <td><strong>H2 (Section Title)</strong></td>
                <td>32-40px</td>
                <td>24-28px</td>
                <td>Semibold (600)</td>
                <td>Major section headers. "Our Products", "Reviews", "About Us"</td>
            </tr>
            <tr>
                <td><strong>H3 (Subsection)</strong></td>
                <td>24-28px</td>
                <td>20-22px</td>
                <td>Semibold (600)</td>
                <td>Subsections within a section. Card titles in larger layouts.</td>
            </tr>
            <tr>
                <td><strong>H4 (Card Title)</strong></td>
                <td>20-24px</td>
                <td>18-20px</td>
                <td>Medium (500)</td>
                <td>Product card titles, feature list headings, small callouts.</td>
            </tr>
            <tr>
                <td><strong>Body Text</strong></td>
                <td>16-18px</td>
                <td>16px</td>
                <td>Regular (400)</td>
                <td>Paragraphs, descriptions, all readable content. Never below 16px.</td>
            </tr>
            <tr>
                <td><strong>Caption / Small</strong></td>
                <td>14px</td>
                <td>14px</td>
                <td>Regular (400)</td>
                <td>Image captions, fine print, metadata, timestamps.</td>
            </tr>
            <tr>
                <td><strong>Button Text</strong></td>
                <td>14-16px</td>
                <td>14-16px</td>
                <td>Semibold (600)</td>
                <td>CTA buttons, navigation links, form submit buttons.</td>
            </tr>
            <tr>
                <td><strong>Price (Product)</strong></td>
                <td>24-32px</td>
                <td>20-24px</td>
                <td>Bold (700)</td>
                <td>Product price. Should be prominent but not overpower the product name.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Line Height and Letter Spacing</h3>
    <p>Line height (leading) and letter spacing (tracking) are the invisible heroes of readable typography. Get them wrong and even the best font looks terrible.</p>

    <h4>Line Height Rules</h4>
    <ul>
        <li><strong>Body text: line-height 1.5 to 1.6</strong> — This is the golden ratio for readability. Lines that are too close (1.0) feel suffocating. Lines that are too far apart (2.0) feel disconnected.</li>
        <li><strong>Headings: line-height 1.1 to 1.2</strong> — Headings need tighter leading because they are large. Wide line height on a big heading wastes space and looks loose.</li>
        <li><strong>Small text / captions: line-height 1.4 to 1.5</strong> — Slightly tighter than body but still comfortable for brief reads.</li>
    </ul>

    <h4>Letter Spacing Rules</h4>
    <ul>
        <li><strong>Body text: 0 (default)</strong> — Do not adjust letter spacing on body text. Font designers have already optimized it.</li>
        <li><strong>ALL CAPS headings: +0.05em to +0.1em</strong> — Capital letters placed side by side look crowded. Adding letter spacing prevents this and gives ALL CAPS text an elegant, spaced-out look commonly seen in luxury brands.</li>
        <li><strong>Large headings (48px+): -0.01em to -0.02em</strong> — Very large text can look too loose. Slight negative tracking tightens it for visual impact.</li>
    </ul>

    <h4>Paragraph Width</h4>
    <p><strong>Maximum 65-75 characters per line</strong> (including spaces). This is the optimal reading length established by decades of typography research. Text that is too wide (100+ characters) makes the eye lose track of which line to jump to next. Text that is too narrow (30 characters) creates too many line breaks and feels choppy. In CSS, this translates to approximately max-width: 720px for 16px body text.</p>
</div>

<div class="content-section">
    <h3>Font Weight Strategy</h3>
    <p>You can create significant visual hierarchy using weight alone, without adding extra fonts. A single font family with multiple weights is a powerful tool.</p>
    <ul>
        <li><strong>Light (300):</strong> Subtle, delicate. Use sparingly for large decorative text or pullquotes.</li>
        <li><strong>Regular (400):</strong> Body text, descriptions, all functional content.</li>
        <li><strong>Medium (500):</strong> Slight emphasis. Good for card titles, labels, navigation items.</li>
        <li><strong>Semibold (600):</strong> Strong emphasis. Headings, button text, important labels.</li>
        <li><strong>Bold (700):</strong> Maximum emphasis. Hero headlines, prices, critical information.</li>
    </ul>

    <div class="warning-box">
        <h4>Font Weight Performance Warning</h4>
        <p>Never load more than 3-4 weights of the same font. Each weight is a separate font file (20-50KB). Loading all 9 weights of a font (Thin through Black) adds 180-450KB to page load — a significant performance hit on mobile.</p>
        <p><strong>Recommended weight loading:</strong></p>
        <ul>
            <li>Heading font: Bold (700) only, or Semibold (600) + Bold (700)</li>
            <li>Body font: Regular (400) + Medium (500) + Semibold (600)</li>
            <li>Total: 3-5 font files maximum</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Google Fonts vs. System Fonts</h3>
    <div class="highlight-box">
        <h4>Performance Considerations</h4>
        <p>Google Fonts are the most popular choice for web typography because they are free, high-quality, and easy to implement. However, they come with a performance cost.</p>
        <ul>
            <li><strong>Each Google Font weight:</strong> 20-50KB file download</li>
            <li><strong>Typical setup (2 fonts x 3 weights):</strong> 6 font files = 120-300KB</li>
            <li><strong>Network request overhead:</strong> Each file requires a separate HTTP request (or at minimum, a connection to fonts.googleapis.com)</li>
            <li><strong>Flash of Unstyled Text (FOUT):</strong> Until fonts load, text appears in a fallback system font, then "jumps" to the correct font. This is jarring.</li>
        </ul>
        <p><strong>System fonts</strong> (Arial, Helvetica, Georgia, Times New Roman) have zero download time because they already exist on the user's device. For performance-critical stores, system fonts are a legitimate choice — but they lack personality.</p>
        <p><strong>Recommendation:</strong> Use Google Fonts for branding and personality, but limit the number of weights loaded. Preload the most important font files using link rel="preload" in the theme header.</p>
    </div>
</div>

<div class="content-section">
    <h3>Shopify Font Considerations</h3>
    <div class="warning-box">
        <h4>Shopify Theme Font Limitations</h4>
        <ul>
            <li><strong>Built-in font library:</strong> Shopify themes include approximately 100 curated fonts in the theme editor. These are the easiest to use — just select from the dropdown.</li>
            <li><strong>Custom fonts:</strong> If the client needs a font not in Shopify's library, you must upload font files (WOFF2 format) to the theme's assets folder and write custom @font-face CSS declarations.</li>
            <li><strong>Theme compatibility:</strong> Some older themes do not support custom fonts easily. Dawn and other OS 2.0 themes are more flexible.</li>
            <li><strong>Font rendering:</strong> Fonts render differently across browsers and operating systems. Always test on Chrome, Safari, Firefox AND on both Mac and Windows. A font that looks beautiful on Mac might look heavy/thin on Windows due to different font rendering engines.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Typography Scale — Mathematical Ratios</h3>
    <p>Professional type systems use mathematical ratios to determine font sizes. This creates a harmonious progression where each size feels proportional to the others.</p>
    <table>
        <thead>
            <tr>
                <th>Scale Name</th>
                <th>Ratio</th>
                <th>Sizes (from 16px base)</th>
                <th>Best For</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Major Third</strong></td>
                <td>1.25</td>
                <td>12, 16, 20, 25, 31, 39, 49</td>
                <td>Most common. Subtle, elegant progression. Good for most Shopify stores.</td>
            </tr>
            <tr>
                <td><strong>Perfect Fourth</strong></td>
                <td>1.333</td>
                <td>12, 16, 21, 28, 38, 50, 67</td>
                <td>More dramatic. Good for bold, statement brands.</td>
            </tr>
            <tr>
                <td><strong>Minor Third</strong></td>
                <td>1.2</td>
                <td>12, 16, 19, 23, 28, 33, 40</td>
                <td>Tighter progression. Good for text-heavy, editorial layouts.</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Tip:</strong> Use typescale.com to visualize different scales and find the one that fits your design. The Major Third (1.25) is the safest choice for most e-commerce stores.</p>
</div>

<div class="content-section">
    <h3>Text Color Best Practices</h3>
    <ul>
        <li><strong>Never pure black (#000000):</strong> Pure black on pure white creates maximum contrast (21:1), which causes eye strain during extended reading. Use a soft black like #1A1A1A or #2D2D2D — the contrast is still excellent (17:1+) but far more comfortable.</li>
        <li><strong>Secondary text:</strong> Use #666666 or #767676 for less important text (descriptions, captions, metadata). #767676 is the lightest gray that still passes WCAG AA contrast on white.</li>
        <li><strong>Disabled / placeholder text:</strong> #999999 or lighter. This intentionally fails contrast because disabled elements should look subdued — but never use this for active, readable text.</li>
        <li><strong>Text on colored backgrounds:</strong> Always check contrast. White text on medium-tone colors is often the problem area. Use the WebAIM contrast checker for every combination.</li>
        <li><strong>Link text:</strong> Must be distinguishable from surrounding text. Use color (your brand color) OR underline OR both. Do not rely on color alone — colorblind users may not see the difference.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>HANDS-ON EXERCISE: Build the Luxe Botanica Type System</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 1: Set Up Fonts in Figma</h4>
        <p>Download and install Playfair Display and Lato from Google Fonts. In your Luxe Botanica Figma file, set up both fonts.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 2: Create the Full Type Scale</h4>
        <p>Create a frame in Figma showing the complete type scale. For each level, show:</p>
        <ul>
            <li>The text sample (e.g., "Luxe Botanica — Premium Organic Skincare")</li>
            <li>Font name, size, weight, and line height</li>
            <li>Both desktop and mobile versions side by side</li>
        </ul>
        <table>
            <thead>
                <tr><th>Style Name</th><th>Font</th><th>Desktop</th><th>Mobile</th><th>Weight</th><th>Line Height</th></tr>
            </thead>
            <tbody>
                <tr><td>H1/Hero</td><td>Playfair Display</td><td>56px</td><td>36px</td><td>700</td><td>1.1</td></tr>
                <tr><td>H2/Section</td><td>Playfair Display</td><td>36px</td><td>26px</td><td>600</td><td>1.2</td></tr>
                <tr><td>H3/Subsection</td><td>Playfair Display</td><td>26px</td><td>21px</td><td>600</td><td>1.2</td></tr>
                <tr><td>H4/Card Title</td><td>Lato</td><td>20px</td><td>18px</td><td>600</td><td>1.3</td></tr>
                <tr><td>Body/Regular</td><td>Lato</td><td>16px</td><td>16px</td><td>400</td><td>1.6</td></tr>
                <tr><td>Body/Large</td><td>Lato</td><td>18px</td><td>16px</td><td>400</td><td>1.6</td></tr>
                <tr><td>Caption</td><td>Lato</td><td>14px</td><td>14px</td><td>400</td><td>1.5</td></tr>
                <tr><td>Button</td><td>Lato</td><td>14px</td><td>14px</td><td>600</td><td>1.0</td></tr>
                <tr><td>Overline</td><td>Lato (ALL CAPS)</td><td>12px</td><td>12px</td><td>600</td><td>1.0, +0.1em tracking</td></tr>
            </tbody>
        </table>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 3: Create Figma Text Styles</h4>
        <p>Create named Text Styles in Figma for every level above. Name them with a clear naming convention: "H1/Desktop", "H1/Mobile", "Body/Regular", "Body/Large", "Caption", "Button", "Overline". These styles will be reused across all pages.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 4: Test with Real Content</h4>
        <p>Type out these sample texts to test readability:</p>
        <ul>
            <li><strong>Hero headline:</strong> "Nature's Most Powerful Ingredients, Perfected"</li>
            <li><strong>Section title:</strong> "Our Bestselling Collections"</li>
            <li><strong>Product description:</strong> A 3-4 sentence paragraph about a fictional "Rosehip Renewal Serum" with ingredients and benefits</li>
            <li><strong>CTA button:</strong> "Shop the Collection"</li>
        </ul>
        <p>Read the text at actual size. Can you read the body text comfortably? Does the heading hierarchy feel clear and natural? Does the font pairing feel cohesive?</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 5: Mobile Readability Test</h4>
        <p>Switch to the 375px mobile frame. Ensure all text is readable at arm's length on screen. The H1 at 36px should still feel impactful. The body at 16px should be comfortable to read. If anything feels too small or too large, adjust.</p>
    </div>
</div>

<div class="content-section">
    <h3>Ready for the Quiz?</h3>
    <ul>
        <li>You should be able to explain the 2-Font Rule and why it matters</li>
        <li>You should know the font size hierarchy from H1 to Caption with exact pixel values</li>
        <li>You should understand line height, letter spacing, and paragraph width guidelines</li>
        <li>You should know the difference between serif and sans-serif and when to use each</li>
        <li>You should have completed the Luxe Botanica type system in Figma</li>
        <li>Score <strong>10/10</strong> to proceed to Layout and Spacing</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📐 TASK 6: LAYOUT & SPACING — The Invisible Grid</h2>

<div class="content-section">
    <h3>Why Spacing Matters More Than You Think</h3>
    <p><strong>Consistent spacing is the number one difference between amateur and professional design.</strong> Most people cannot articulate why one website feels "professional" and another feels "cheap," but the answer is almost always spacing.</p>
    <p>Random spacing — 13px here, 21px there, 45px somewhere else — creates visual chaos. The eye detects inconsistency even when the brain cannot name it. The result is a subconscious feeling of disorder, distrust, and low quality.</p>
    <p>Systematic spacing creates rhythm, order, and trust. When every margin, padding, and gap follows a consistent system, the design feels intentional and polished. Customers may not consciously notice good spacing, but they <strong>absolutely feel</strong> bad spacing.</p>
    <p>At Digital Heroes, spacing is not an afterthought — it is a foundational design decision made before a single pixel is placed. For Luxe Botanica, precise spacing will be the difference between "nice skincare website" and "this brand clearly invests in quality."</p>
</div>

<div class="content-section">
    <h3>The 8px Grid System</h3>
    <div class="highlight-box">
        <h4>The Foundation of All Spacing Decisions</h4>
        <p><strong>All spacing values in your designs should be multiples of 8:</strong> 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128.</p>
        <p><strong>Why 8?</strong></p>
        <ul>
            <li>8 is divisible by 2 and 4, making it easy to create half-values (4px) for micro-spacing when needed</li>
            <li>8 works perfectly on all screen sizes and pixel densities (including 1.5x and 2x retina displays)</li>
            <li>8-based values create a consistent visual rhythm across the entire design</li>
            <li>Google Material Design, Apple HIG, and most major design systems use 8px as their base unit</li>
        </ul>
        <p><strong>The One Exception:</strong> 4px can be used for micro-spacing — the gap between an icon and its label, the space between a checkbox and its text, or the gap between a badge icon and badge text. These are too small for 8px but too important to ignore.</p>
    </div>

    <h4>The Complete 8px Scale</h4>
    <table>
        <thead>
            <tr>
                <th>Value</th>
                <th>Token Name</th>
                <th>Common Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>4px</td><td>spacing-xs</td><td>Icon-to-text gap, inline element gaps, micro adjustments</td></tr>
            <tr><td>8px</td><td>spacing-sm</td><td>Small gaps between related elements, list item spacing</td></tr>
            <tr><td>16px</td><td>spacing-md</td><td>Paragraph spacing, card internal gaps, form field spacing</td></tr>
            <tr><td>24px</td><td>spacing-lg</td><td>Section internal content gaps, card padding (mobile), grid gutters (mobile)</td></tr>
            <tr><td>32px</td><td>spacing-xl</td><td>Card padding (desktop), grid gutters (desktop), content block spacing</td></tr>
            <tr><td>48px</td><td>spacing-2xl</td><td>Section internal padding (mobile), medium section breathing room</td></tr>
            <tr><td>64px</td><td>spacing-3xl</td><td>Section internal padding (desktop), between content blocks</td></tr>
            <tr><td>80px</td><td>spacing-4xl</td><td>Between major sections (mobile), hero padding</td></tr>
            <tr><td>96px</td><td>spacing-5xl</td><td>Between major sections (desktop), large breathing room</td></tr>
            <tr><td>128px</td><td>spacing-6xl</td><td>Maximum section spacing, hero section vertical padding</td></tr>
        </tbody>
    </table>

    <div class="warning-box">
        <h4>NEVER Use Arbitrary Spacing Values</h4>
        <p>The following values should NEVER appear in your designs:</p>
        <ul>
            <li>13px, 15px, 17px, 19px, 21px, 25px, 27px, 33px, 37px, 45px, 50px, 67px, 75px, 100px</li>
        </ul>
        <p>If you find yourself needing 15px, use 16px. If you need 45px, choose 48px. If you need 100px, use 96px. The few-pixel difference is imperceptible to the human eye, but the systematic consistency is felt across the entire design.</p>
        <p><strong>Exception:</strong> Border widths (1px, 2px, 3px) and very small decorative details do not need to follow the 8px grid.</p>
    </div>
</div>

<div class="content-section">
    <h3>Section Spacing Guidelines</h3>
    <p>These are the specific spacing values to use for different types of elements in a Shopify store design. Memorize these — they will become second nature.</p>
    <table>
        <thead>
            <tr>
                <th>Element / Context</th>
                <th>Desktop</th>
                <th>Mobile</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Between major sections</strong></td>
                <td>80-120px</td>
                <td>48-64px</td>
                <td>Vertical breathing room between homepage sections. This is what creates the "airy" feel.</td>
            </tr>
            <tr>
                <td><strong>Section internal padding (top/bottom)</strong></td>
                <td>48-80px</td>
                <td>32-48px</td>
                <td>Padding inside a section container. Prevents content from touching section edges.</td>
            </tr>
            <tr>
                <td><strong>Between content blocks within a section</strong></td>
                <td>24-32px</td>
                <td>16-24px</td>
                <td>Gap between a heading and its paragraph, between product cards in a row.</td>
            </tr>
            <tr>
                <td><strong>Card internal padding</strong></td>
                <td>24-32px</td>
                <td>16-20px</td>
                <td>Padding inside product cards, feature cards, testimonial cards.</td>
            </tr>
            <tr>
                <td><strong>Button padding</strong></td>
                <td>16px vertical, 32px horizontal</td>
                <td>14px vertical, 24px horizontal</td>
                <td>Internal padding of CTA buttons. Creates comfortable click/tap targets.</td>
            </tr>
            <tr>
                <td><strong>Input field height</strong></td>
                <td>48px</td>
                <td>48px</td>
                <td>Touch-friendly minimum. Same on mobile and desktop for consistency.</td>
            </tr>
            <tr>
                <td><strong>Icon-to-text gap</strong></td>
                <td>8-12px</td>
                <td>8px</td>
                <td>Space between an icon and its accompanying text label.</td>
            </tr>
            <tr>
                <td><strong>Grid gutter (between columns)</strong></td>
                <td>24-32px</td>
                <td>16px</td>
                <td>Space between grid columns in product grids, feature grids, etc.</td>
            </tr>
            <tr>
                <td><strong>Paragraph spacing</strong></td>
                <td>16-24px</td>
                <td>16px</td>
                <td>Space between consecutive paragraphs of text.</td>
            </tr>
            <tr>
                <td><strong>Navigation item spacing</strong></td>
                <td>24-32px horizontal</td>
                <td>16px vertical (mobile menu)</td>
                <td>Space between nav links in header.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Container Widths</h3>
    <p>Container width determines how wide your content spreads on large screens. Too wide and text becomes hard to scan. Too narrow and you waste screen space.</p>
    <ul>
        <li><strong>Maximum content width: 1200-1400px</strong> — This is the standard for e-commerce. Content beyond 1400px becomes hard to scan on large monitors. The container should be centered with auto margins.</li>
        <li><strong>Text content max-width: 720px</strong> — For body text, descriptions, and blog posts. This ensures 65-75 characters per line, which is the optimal reading length.</li>
        <li><strong>Hero content max-width: 800-960px</strong> — Hero text and CTA should not stretch the full container width. Center it within a narrower column for visual focus.</li>
        <li><strong>Side padding (horizontal): 24-32px on mobile, 48-80px on desktop</strong> — This prevents content from touching screen edges. On mobile, 24px is the minimum comfortable padding.</li>
        <li><strong>Full-bleed vs. contained:</strong> Hero images, background sections, and announcement bars can be full-width (edge to edge). All text content and interactive elements should be contained within the max-width container.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Responsive Breakpoints</h3>
    <p>Breakpoints define where your layout changes to accommodate different screen sizes. These are the industry-standard breakpoints for e-commerce:</p>
    <table>
        <thead>
            <tr>
                <th>Breakpoint Name</th>
                <th>Width</th>
                <th>Grid Columns</th>
                <th>Device Examples</th>
                <th>Design Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Mobile (Default)</strong></td>
                <td>375px</td>
                <td>1-2 columns</td>
                <td>iPhone SE through iPhone 15</td>
                <td>Design here FIRST. Single column for text, 2-col for product grids.</td>
            </tr>
            <tr>
                <td><strong>Mobile Large</strong></td>
                <td>428px</td>
                <td>1-2 columns</td>
                <td>iPhone Pro Max, large Android phones</td>
                <td>Same layout as 375px, just slightly more breathing room.</td>
            </tr>
            <tr>
                <td><strong>Tablet</strong></td>
                <td>768px</td>
                <td>2-3 columns</td>
                <td>iPad Mini, iPad, Samsung Tab</td>
                <td>Side-by-side layouts become possible. Product grids go 2-3 columns.</td>
            </tr>
            <tr>
                <td><strong>Desktop</strong></td>
                <td>1024px</td>
                <td>3-4 columns</td>
                <td>Laptops, small external monitors</td>
                <td>Full desktop layout. Sidebar possible. 3-4 column product grids.</td>
            </tr>
            <tr>
                <td><strong>Desktop Large</strong></td>
                <td>1440px</td>
                <td>4 columns</td>
                <td>Standard external monitors</td>
                <td>Full-featured layout. This is your primary design canvas in Figma.</td>
            </tr>
            <tr>
                <td><strong>Ultra Wide</strong></td>
                <td>1920px+</td>
                <td>4 (max-width contained)</td>
                <td>Large monitors, ultra-wide displays</td>
                <td>Content stays in max-width container. Background stretches full width.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>The 12-Column Grid System</h3>
    <p>The 12-column grid is the universal standard for web layout. It is used by Bootstrap, Material Design, and virtually every professional design system.</p>

    <h4>Why 12 Columns?</h4>
    <p>12 is the most flexible number because it divides evenly into 1, 2, 3, 4, 6, and 12 columns. This means you can create:</p>
    <ul>
        <li><strong>Full width:</strong> 12 columns (hero sections, announcement bars)</li>
        <li><strong>Half + Half:</strong> 6 + 6 columns (image + text side by side)</li>
        <li><strong>Thirds:</strong> 4 + 4 + 4 columns (three feature cards, three product cards)</li>
        <li><strong>Quarters:</strong> 3 + 3 + 3 + 3 columns (four product cards, four trust badges)</li>
        <li><strong>Asymmetric:</strong> 8 + 4 columns (main content + sidebar), 5 + 7, 9 + 3</li>
    </ul>

    <h4>Grid Anatomy</h4>
    <ul>
        <li><strong>Columns:</strong> The content areas where elements are placed</li>
        <li><strong>Gutters:</strong> The spaces between columns. Standard: 24px mobile, 32px desktop</li>
        <li><strong>Margins:</strong> The outer edges of the grid. Standard: 24px mobile, 48-80px desktop</li>
    </ul>

    <div class="highlight-box">
        <h4>Setting Up the Grid in Figma</h4>
        <ol>
            <li>Create a Frame at 1440px width (Desktop Large)</li>
            <li>Go to Design panel &gt; Layout Grid &gt; Click "+"</li>
            <li>Change type from "Grid" to "Columns"</li>
            <li>Set Count: 12</li>
            <li>Set Gutter: 32px</li>
            <li>Set Margin: 80px (this creates a ~1280px content area)</li>
            <li>Set color to a visible but non-obtrusive tint (like pink at 10% opacity)</li>
        </ol>
        <p>For mobile (375px frame): Count: 4, Gutter: 16px, Margin: 24px</p>
        <p>For tablet (768px frame): Count: 8, Gutter: 24px, Margin: 32px</p>
    </div>
</div>

<div class="content-section">
    <h3>Common Spacing Mistakes</h3>
    <div class="warning-box">
        <h4>Spacing Errors That Make Design Look Amateur</h4>
        <ul>
            <li><strong>Different padding on similar elements:</strong> Card A has 16px padding while Card B has 20px. They are the same type of element and MUST have identical padding.</li>
            <li><strong>Text touching container edges:</strong> Body text that goes right up to the edge of a card or section with no padding. Always add padding. Always.</li>
            <li><strong>No visual separation between sections:</strong> Two different sections blending together with no spacing or divider between them. The user cannot tell where one section ends and the next begins.</li>
            <li><strong>Images at different sizes in a grid:</strong> Product images that are different heights, creating a jagged grid. Force consistent aspect ratios (1:1 square or 3:4 portrait are standard for product images).</li>
            <li><strong>Buttons with inconsistent padding across pages:</strong> The "Add to Cart" button has 16px 32px padding, but the "Learn More" button has 12px 20px. Same type of button = same padding.</li>
            <li><strong>Forgetting to reduce spacing on mobile:</strong> Desktop section spacing (96px) used on mobile makes the page feel empty. Mobile spacing should be roughly 60% of desktop spacing.</li>
            <li><strong>Mixing spacing values:</strong> Using 15px, 20px, 25px, 30px, 35px as margins. These are all arbitrary. Use 16px, 24px, 32px from the 8px system.</li>
            <li><strong>No relationship between spacing values:</strong> Header has 47px padding, body has 23px gap, footer has 91px padding. There is no mathematical relationship between these. Use the 8px scale.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Visual Rhythm</h3>
    <p>Visual rhythm is the repetition of visual elements at regular intervals. It creates a sense of order and predictability that makes a design feel professional and trustworthy.</p>

    <h4>Creating Rhythm in Shopify Stores</h4>
    <ul>
        <li><strong>Alternating section backgrounds:</strong> White section &rarr; light gray/cream section &rarr; white section &rarr; light gray/cream section. This creates visual "bands" that separate content and add depth without heavy borders or dividers.</li>
        <li><strong>Consistent card sizing:</strong> All product cards are the same width and height. All feature cards are the same width and height. Inconsistent card sizes break the visual grid and feel chaotic.</li>
        <li><strong>Repeating spacing values:</strong> When you use 32px as the gap between elements in one section, use 32px in other sections too. The repetition of the same value creates a felt sense of consistency.</li>
        <li><strong>Consistent image aspect ratios:</strong> The golden ratio (1:1.618) creates naturally pleasing proportions. For product photography, 1:1 (square) and 3:4 (portrait) are the most common and flexible choices.</li>
        <li><strong>Predictable element placement:</strong> Section titles always centered, or always left-aligned. CTA buttons always in the same position relative to their content. Users build mental models of where to find things.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Shopify Section Spacing</h3>
    <div class="highlight-box">
        <h4>Working with the Theme Editor</h4>
        <ul>
            <li><strong>Built-in section padding:</strong> Most Shopify themes (including Dawn) have section padding controls in the theme editor, usually ranging from 0-100px. Use these for basic spacing adjustments.</li>
            <li><strong>Custom CSS needed for precision:</strong> Theme editor padding controls are often in increments of 4px or 12px, which may not align with your 8px grid perfectly. Custom CSS overrides give you exact control.</li>
            <li><strong>CSS custom properties:</strong> Dawn and OS 2.0 themes use CSS custom properties (variables) for spacing. For example, --page-width, --grid-gap, --section-padding. Overriding these in a custom CSS file changes spacing globally.</li>
            <li><strong>Custom sections should match:</strong> When building custom sections (e.g., a unique testimonial layout), use the same spacing values as the rest of the theme. A custom section with different spacing looks out of place.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>The Luxe Botanica Homepage — Section Flow</h3>
    <p>Here is the recommended order and spacing for a premium Shopify homepage. This is the layout you will wireframe in the exercise below.</p>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Section</th>
                <th>Background</th>
                <th>Section Padding</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Announcement Bar</td><td>Forest Green (#2D5016)</td><td>8px top/bottom</td></tr>
            <tr><td>2</td><td>Navigation Header</td><td>Cream (#FFFDF7)</td><td>16px top/bottom</td></tr>
            <tr><td>3</td><td>Hero Section (full-width image + text overlay)</td><td>Image background</td><td>96-128px top/bottom</td></tr>
            <tr><td>4</td><td>Trust Bar (4 trust points)</td><td>Light Sage (#F5F0E8)</td><td>24px top/bottom</td></tr>
            <tr><td>5</td><td>Featured Collection (4 products)</td><td>Cream (#FFFDF7)</td><td>80px top/bottom</td></tr>
            <tr><td>6</td><td>Brand Story (image + text split)</td><td>White</td><td>80px top/bottom</td></tr>
            <tr><td>7</td><td>Bestsellers (product grid)</td><td>Light Sage (#F5F0E8)</td><td>80px top/bottom</td></tr>
            <tr><td>8</td><td>Ingredients Spotlight</td><td>Cream (#FFFDF7)</td><td>80px top/bottom</td></tr>
            <tr><td>9</td><td>Customer Reviews / Testimonials</td><td>White</td><td>80px top/bottom</td></tr>
            <tr><td>10</td><td>"As Seen In" Logo Bar</td><td>Light Sage (#F5F0E8)</td><td>48px top/bottom</td></tr>
            <tr><td>11</td><td>Newsletter Signup</td><td>Forest Green (#2D5016)</td><td>64px top/bottom</td></tr>
            <tr><td>12</td><td>Footer</td><td>Dark (#1A1A1A)</td><td>64px top/bottom</td></tr>
        </tbody>
    </table>
    <p>Notice the alternating backgrounds: cream, light sage, white, light sage. This creates visual rhythm without any heavy borders or dividers. Each section feels distinct but cohesive.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>HANDS-ON EXERCISE: Wireframe the Luxe Botanica Homepage</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 1: Set Up the Grid in Figma</h4>
        <p>Create a 1440px wide frame. Add a 12-column layout grid with 32px gutters and 80px margins. This is your desktop canvas.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 2: Wireframe All 12 Sections</h4>
        <p>Using ONLY gray boxes, rectangles, and placeholder text, wireframe all 12 homepage sections from the table above. Focus entirely on layout and spacing — no colors, no images, no fonts. Just gray boxes with labeled sections.</p>
        <p>For each section:</p>
        <ul>
            <li>Draw the section boundary rectangle</li>
            <li>Add the correct padding (refer to the table above)</li>
            <li>Place placeholder content blocks (gray rectangles for images, gray lines for text)</li>
            <li>Label each section with its name and padding values</li>
        </ul>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 3: Verify Every Spacing Value</h4>
        <p>Go through your wireframe and verify that EVERY spacing value is a multiple of 8. Use Figma's measurement tool (hover between elements with Option/Alt held). If you find any value that is not a multiple of 8, fix it.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 4: Create the Mobile Version</h4>
        <p>Duplicate the wireframe onto a 375px frame. Adjust all spacing according to the mobile columns in the spacing table. Product grids go from 4 columns to 2. Text sections go to single column. Reduce section padding.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 5: Research and Compare</h4>
        <p>Pinterest search "Shopify homepage layout wireframe" and "premium homepage structure" for inspiration. Then open 3 premium Shopify stores and compare your wireframe to their layout. Ask yourself: Is your spacing generous enough? Does your section flow make sense? Is there enough breathing room between sections?</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 6: Spacing Correction Drill</h4>
        <p>Correct the following spacing values to the nearest 8px multiplier:</p>
        <ul>
            <li>15px &rarr; <strong>16px</strong></li>
            <li>22px &rarr; <strong>24px</strong></li>
            <li>45px &rarr; <strong>48px</strong></li>
            <li>33px &rarr; <strong>32px</strong></li>
            <li>70px &rarr; <strong>72px</strong></li>
            <li>100px &rarr; <strong>96px</strong></li>
            <li>50px &rarr; <strong>48px</strong></li>
            <li>11px &rarr; <strong>8px or 12px (use 8px for micro, 16px for standard)</strong></li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Ready for the Quiz?</h3>
    <ul>
        <li>You should be able to explain the 8px grid system and why arbitrary values are forbidden</li>
        <li>You should know the standard spacing values for sections, cards, buttons, and grids</li>
        <li>You should understand container widths and responsive breakpoints</li>
        <li>You should know how to set up a 12-column grid in Figma</li>
        <li>You should have completed the Luxe Botanica homepage wireframe in both desktop and mobile</li>
        <li>Score <strong>10/10</strong> to proceed to Trust and Psychology</li>
    </ul>
</div>
`;

const task7Content = `
<h2>🛡️ TASK 7: TRUST ELEMENTS & CONVERSION PSYCHOLOGY</h2>

<div class="content-section">
    <h3>Trust = Money</h3>
    <p><strong>Visitors decide in 3-5 seconds whether to stay on your store or leave.</strong> In that tiny window, their subconscious is scanning for signals that answer one question: "Can I trust this brand with my money?"</p>
    <p>Consider these statistics:</p>
    <ul>
        <li>84% of people trust online reviews as much as personal recommendations from friends</li>
        <li>Stores with visible trust badges see up to 42% higher conversion rates</li>
        <li>First-time visitors typically need 5 or more trust signals before they feel comfortable purchasing</li>
        <li>46% of consumers abandon carts because they are not sure if the store is trustworthy</li>
    </ul>
    <p>As a designer, you are the architect of trust. Every visual decision — from the quality of your typography to the placement of a security badge — either builds trust or erodes it. A professional-looking store with strategic trust elements can convert a skeptical visitor into a paying customer. An amateur-looking store with no trust signals will lose them to a competitor in seconds.</p>
    <p>For Luxe Botanica, trust is especially important because premium skincare is a high-consideration purchase. People are putting these products on their skin. They need to feel confident in the brand's quality, safety, and legitimacy.</p>
</div>

<div class="content-section">
    <h3>The 5 Psychological Conversion Triggers</h3>
    <p>Every successful e-commerce store leverages these five psychological triggers. Understanding them is essential for designing stores that convert. As a designer, you control how these triggers are visually presented.</p>

    <div class="highlight-box">
        <h4>Trigger 1: TRUST</h4>
        <p><strong>People buy from brands they trust.</strong> Trust is built through professional design, social proof, guarantees, and transparent policies.</p>
        <ul>
            <li><strong>Professional design quality:</strong> No amateur vibes. Consistent typography, proper spacing, high-quality images. This is why everything you have learned in Tasks 3-6 matters so much — premium design IS a trust signal.</li>
            <li><strong>SSL / HTTPS visible:</strong> The lock icon in the browser bar. Shopify provides this by default, but the "Secure Checkout" badge reinforces it visually.</li>
            <li><strong>Payment security badges:</strong> Visa, Mastercard, PayPal, Apple Pay logos near the checkout button.</li>
            <li><strong>Customer reviews with photos:</strong> Real people, real faces, real experiences. Text-only reviews are less convincing than photo reviews.</li>
            <li><strong>Clear return/refund policy:</strong> Prominently linked, not hidden in the footer fine print.</li>
            <li><strong>Real contact information:</strong> Email, phone number, physical address. Brands that hide their contact info seem untrustworthy.</li>
            <li><strong>"As Seen In" logos:</strong> If the brand has been featured in media (Vogue, Forbes, etc.), display these logos prominently.</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Trigger 2: URGENCY</h4>
        <p><strong>Create FOMO (Fear of Missing Out) — but do it ethically.</strong> Urgency motivates action. Without urgency, visitors bookmark and forget.</p>
        <ul>
            <li><strong>Limited stock indicators:</strong> "Only 3 left in stock" — design as a subtle warning label, not a screaming alert</li>
            <li><strong>Sale countdown timers:</strong> For genuine time-limited sales ONLY. Fake urgency (timers that reset) destroys trust permanently.</li>
            <li><strong>Shipping deadline:</strong> "Order in next 2 hours for same-day shipping" — motivates immediate action</li>
            <li><strong>"Selling fast" badges:</strong> Small badge on collection page product cards</li>
        </ul>
        <p><strong>Designer's responsibility:</strong> Use urgency sparingly and honestly. Fake countdown timers and false scarcity are manipulative and damage brand reputation long-term. If a timer resets every time the page loads, customers will notice and lose trust.</p>
    </div>

    <div class="highlight-box">
        <h4>Trigger 3: SOCIAL PROOF</h4>
        <p><strong>Show that others are buying and loving the products.</strong> Humans are social creatures — we follow what others do.</p>
        <ul>
            <li><strong>Star ratings on products:</strong> Always show the number of reviews alongside the stars. "4.8 stars" means nothing without "(2,847 reviews)" next to it.</li>
            <li><strong>Customer photos / UGC gallery:</strong> Grid layout of customer-submitted photos showing the product in real life</li>
            <li><strong>"X people viewing this":</strong> Real-time social proof showing current interest</li>
            <li><strong>Instagram feed integration:</strong> Showing real customers using the product on social media</li>
            <li><strong>Testimonial quotes:</strong> Short, specific quotes with the customer's name and photo</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Trigger 4: VALUE</h4>
        <p><strong>Make the deal feel irresistible.</strong> Customers need to feel they are getting more than what they pay for.</p>
        <ul>
            <li><strong>Compare-at pricing:</strong> Show the original price crossed out next to the sale price</li>
            <li><strong>Free shipping threshold:</strong> "Free shipping on orders over $50" prominently displayed</li>
            <li><strong>Bundle savings:</strong> "Buy 2 Get 1 Free" or "Save $24 with the Skincare Set"</li>
            <li><strong>First-order discount:</strong> "Get 15% off your first order" popup or banner</li>
            <li><strong>Gift with purchase:</strong> "Free travel-size serum with orders over $75"</li>
        </ul>
    </div>

    <div class="highlight-box">
        <h4>Trigger 5: EASE</h4>
        <p><strong>Remove ALL friction from the buying process.</strong> Every extra click, confusing label, or unexpected cost is a reason to abandon.</p>
        <ul>
            <li><strong>Minimal clicks to checkout:</strong> Product page &rarr; Add to Cart &rarr; Checkout. Three steps maximum.</li>
            <li><strong>Express checkout:</strong> Apple Pay, Google Pay, Shop Pay — one-tap purchasing</li>
            <li><strong>Guest checkout:</strong> Never force account creation before purchase</li>
            <li><strong>Clear shipping costs upfront:</strong> No surprises at checkout. Show shipping cost on the product page.</li>
            <li><strong>Auto-fill addresses:</strong> Address lookup for faster form completion</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Social Proof Design Elements — Detailed Specs</h3>
    <p>Do not just paste text reviews on the page. <strong>Design them.</strong> Each social proof element should feel intentional, professional, and trustworthy.</p>

    <h4>Star Ratings</h4>
    <ul>
        <li><strong>Display format:</strong> 5 star icons + numeric rating + review count. Example: Stars 4.8 (2,847 reviews)</li>
        <li><strong>Star icon style:</strong> Filled stars in gold (#C9A84C for Luxe Botanica). Empty stars in light gray (#E0E0E0). Use SVG icons, not emoji.</li>
        <li><strong>Placement:</strong> Below product title on product page, below product card title on collection page</li>
        <li><strong>Size:</strong> Stars at 16-20px on product page, 14px on collection cards</li>
    </ul>

    <h4>Customer Photo / UGC Gallery</h4>
    <ul>
        <li><strong>Layout:</strong> 4-8 photos in a scrollable row or 2x4 grid</li>
        <li><strong>Image size:</strong> Square (1:1 aspect ratio), approximately 200-300px per image</li>
        <li><strong>Style:</strong> Slight border-radius (4-8px), subtle hover effect (scale 1.02 or overlay)</li>
        <li><strong>Caption:</strong> Customer first name + location on hover or below image</li>
    </ul>

    <h4>"Verified Purchase" Badge</h4>
    <ul>
        <li><strong>Design:</strong> Small green checkmark icon + "Verified Purchase" text in green</li>
        <li><strong>Size:</strong> 12-14px text, inline with reviewer name</li>
        <li><strong>Purpose:</strong> Distinguishes real buyers from anyone who might leave a review</li>
    </ul>

    <h4>"As Seen In" Logo Bar</h4>
    <ul>
        <li><strong>Layout:</strong> 4-6 logos in a horizontal row, evenly spaced</li>
        <li><strong>Logo style:</strong> All logos in grayscale at 40-60% opacity. This prevents logos from competing with the brand's own colors and creates an elegant, unified look.</li>
        <li><strong>Size:</strong> Logo height 30-40px, consistent across all logos</li>
        <li><strong>Section design:</strong> Subtle background (light gray or light sage), minimal padding (48px top/bottom)</li>
        <li><strong>Optional label:</strong> "As Seen In" or "Featured In" centered above the logos in small caps</li>
    </ul>

    <h4>Testimonial Cards</h4>
    <ul>
        <li><strong>Card structure:</strong> Customer photo (circular, 64px) + name + location + star rating + quote text</li>
        <li><strong>Quote style:</strong> Use large quotation marks as decorative elements. Italic text for the quote body.</li>
        <li><strong>Layout:</strong> 3 cards in a row on desktop, 1 card with horizontal scroll on mobile</li>
        <li><strong>Card styling:</strong> White card on light background, subtle shadow, 24-32px internal padding</li>
        <li><strong>Photo:</strong> Real customer photo if available. Use initials in a colored circle as fallback.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Trust Badge Design</h3>
    <p>Trust badges are the small icons with text that communicate safety, guarantees, and policies. They appear in the trust bar (below hero) and near the Add to Cart button.</p>

    <h4>Essential Trust Badges for Luxe Botanica</h4>
    <table>
        <thead>
            <tr>
                <th>Badge</th>
                <th>Icon</th>
                <th>Text</th>
                <th>Placement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Free Shipping</strong></td>
                <td>Truck / delivery icon</td>
                <td>"Free Shipping Over $50"</td>
                <td>Trust bar, near ATC button</td>
            </tr>
            <tr>
                <td><strong>Money-Back Guarantee</strong></td>
                <td>Shield / checkmark icon</td>
                <td>"30-Day Money Back Guarantee"</td>
                <td>Trust bar, near ATC button, footer</td>
            </tr>
            <tr>
                <td><strong>Secure Checkout</strong></td>
                <td>Lock icon</td>
                <td>"256-bit SSL Encrypted"</td>
                <td>Below checkout button, footer</td>
            </tr>
            <tr>
                <td><strong>Satisfaction Guaranteed</strong></td>
                <td>Heart / thumbs-up icon</td>
                <td>"100% Satisfaction Guaranteed"</td>
                <td>Trust bar, product page</td>
            </tr>
            <tr>
                <td><strong>Natural Ingredients</strong></td>
                <td>Leaf / plant icon</td>
                <td>"100% Natural Ingredients"</td>
                <td>Trust bar (skincare-specific)</td>
            </tr>
            <tr>
                <td><strong>Cruelty Free</strong></td>
                <td>Bunny / certified icon</td>
                <td>"Cruelty-Free &amp; Vegan"</td>
                <td>Trust bar, product page (skincare-specific)</td>
            </tr>
        </tbody>
    </table>

    <h4>Trust Badge Design Specifications</h4>
    <ul>
        <li><strong>Icon size:</strong> 24-32px, consistent across all badges</li>
        <li><strong>Icon style:</strong> Must be from the same icon set (e.g., all Phosphor Icons or all Feather Icons). Mixing icon styles looks amateur.</li>
        <li><strong>Icon color:</strong> Match brand color (forest green for Luxe Botanica) or use subtle gray. Never use the garish gold/blue "seal" badges from stock PNG sites.</li>
        <li><strong>Text:</strong> 14px, semibold for the first line, regular weight for description</li>
        <li><strong>Layout:</strong> 4 badges in a row on desktop (space-between), 2x2 grid on mobile</li>
        <li><strong>Container:</strong> Subtle background color (light sage or white), 24px padding, no heavy borders</li>
    </ul>

    <div class="warning-box">
        <h4>Trust Badge Design Sins to Avoid</h4>
        <ul>
            <li><strong>Clip-art-style badges:</strong> Those shiny gold "100% Guaranteed" seal PNGs from the early 2000s. They scream "scam site." Design custom badges that match your brand.</li>
            <li><strong>Too many badges:</strong> More than 6 trust badges starts to feel desperate. Choose the most relevant 3-4.</li>
            <li><strong>Inconsistent icon styles:</strong> One badge has a line icon, another has a filled icon, another has a 3D icon. All icons must be the same style.</li>
            <li><strong>Oversized badges:</strong> Trust badges should be supportive, not dominating. They support the main content, not compete with it.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>Trust Bar Design</h3>
    <p>The trust bar is a horizontal strip containing 3-4 trust points with icons. It is one of the most important design elements on the homepage.</p>

    <h4>Trust Bar Specifications</h4>
    <ul>
        <li><strong>Placement:</strong> Below the hero section OR above the footer. Some stores use both positions. The below-hero placement is most common and effective — it catches users right after the hero captures their attention.</li>
        <li><strong>Content:</strong> 3-4 trust points, each with an icon and brief text (max 4-5 words)</li>
        <li><strong>Layout:</strong> Horizontal row on desktop (flexbox, space-between or space-around). Single scrollable row or 2x2 grid on mobile.</li>
        <li><strong>Background:</strong> Subtle — light gray, light sage (#F5F0E8 for Luxe Botanica), or a very subtle tint of the brand color. Never the same color as the sections above and below (it needs to be visually distinct).</li>
        <li><strong>Height:</strong> Compact — approximately 60-80px on desktop. Just enough for the icon and text, not a full section.</li>
        <li><strong>Typography:</strong> 14px body font, semibold. All text should be the same size and weight.</li>
    </ul>

    <h4>Example Trust Bar Content for Luxe Botanica</h4>
    <p style="text-align: center; padding: 16px; background: rgba(245, 240, 232, 0.5); border-radius: 8px;">
        <strong>Leaf icon</strong> 100% Natural &nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>Truck icon</strong> Free Shipping Over $50 &nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>Shield icon</strong> 30-Day Guarantee &nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>Star icon</strong> 4.9/5 Rating (2,847 Reviews)
    </p>
</div>

<div class="content-section">
    <h3>Urgency and Scarcity Design Elements</h3>
    <p>Urgency elements must be designed carefully. Done well, they motivate immediate action. Done poorly, they feel manipulative and destroy trust.</p>

    <h4>Countdown Timers</h4>
    <ul>
        <li><strong>Use ONLY for genuine sales:</strong> If a sale actually ends on Friday, a countdown to Friday is honest and effective. If the timer resets every time someone visits, it is deceptive and will eventually be noticed.</li>
        <li><strong>Design:</strong> Clean, minimal. Black or dark text on a subtle background. No flashy animations or blinking. The premium approach is understated urgency.</li>
        <li><strong>Placement:</strong> Below the product title or above the Add to Cart button on sale items</li>
        <li><strong>Size:</strong> Medium — visible but not screaming. 20-24px numbers.</li>
    </ul>

    <h4>Low Stock Indicators</h4>
    <ul>
        <li><strong>Format:</strong> "Only 3 left in stock" — small text in a warm/caution color (amber or soft red)</li>
        <li><strong>Design:</strong> Subtle warning style, not alarm style. An icon (warning triangle or exclamation) plus text. Should feel like helpful information, not pressure.</li>
        <li><strong>Placement:</strong> Below variant selector, above Add to Cart button</li>
    </ul>

    <h4>Sale Badge Design</h4>
    <ul>
        <li><strong>Color:</strong> Red or your accent color. Must contrast strongly with the product image.</li>
        <li><strong>Position:</strong> Top-left corner of the product image (standard convention)</li>
        <li><strong>Shape:</strong> Small rectangle with rounded corners, or a circle. 14px text, bold.</li>
        <li><strong>Content:</strong> "SALE", "20% OFF", or the savings amount. Keep it short — max 2-3 words.</li>
    </ul>
</div>

<div class="content-section">
    <h3>CTA Psychology — Buttons That Convert</h3>
    <p><strong>Button copy matters MORE than button color.</strong> The words on your CTA button have a direct impact on click-through rate. And the design of the button (size, placement, contrast) determines whether it gets noticed at all.</p>

    <h4>CTA Button Copy Options</h4>
    <table>
        <thead>
            <tr>
                <th>Copy</th>
                <th>Tone</th>
                <th>Best For</th>
                <th>Psychology</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>"Add to Cart"</strong></td>
                <td>Standard, neutral</td>
                <td>Most e-commerce stores</td>
                <td>Low pressure, familiar convention. Safe default choice.</td>
            </tr>
            <tr>
                <td><strong>"Buy Now"</strong></td>
                <td>Direct, decisive</td>
                <td>Single-product stores, impulse buys</td>
                <td>High commitment language. Skips cart, implies immediate purchase.</td>
            </tr>
            <tr>
                <td><strong>"Get Yours"</strong></td>
                <td>Emotional, ownership</td>
                <td>Lifestyle brands, limited editions</td>
                <td>Creates ownership feeling before purchase. "Yours" is personal.</td>
            </tr>
            <tr>
                <td><strong>"Shop Now"</strong></td>
                <td>Exploratory, inviting</td>
                <td>Homepage hero CTAs, collection links</td>
                <td>Lower commitment. Good for browsing, not final purchase.</td>
            </tr>
            <tr>
                <td><strong>"Start Your Routine"</strong></td>
                <td>Aspirational, specific</td>
                <td>Skincare, wellness brands</td>
                <td>Frames purchase as beginning of a positive journey.</td>
            </tr>
        </tbody>
    </table>

    <h4>CTA Button Design Specifications</h4>
    <ul>
        <li><strong>Minimum size:</strong> 48px height on both desktop and mobile. This ensures comfortable tapping on mobile devices.</li>
        <li><strong>Minimum width:</strong> 200px on desktop, full-width (or near full-width) on mobile</li>
        <li><strong>Border radius:</strong> Consistent with your design system. 4-8px for modern/clean, 24-50px for rounded/friendly. Pick one and use it everywhere.</li>
        <li><strong>Hover state:</strong> Slight color shift (10-15% darker or lighter) plus a subtle elevation (box-shadow). The hover effect should feel like the button is "lifting" toward the user.</li>
        <li><strong>Active/pressed state:</strong> Slightly darker than hover, shadow reduces. The button "presses down."</li>
        <li><strong>One primary CTA per view:</strong> If there are 5 buttons all competing for attention, none of them win. One primary CTA (full color, large) plus secondary CTAs (outlined or text-only) at most.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Pricing Psychology Design</h3>
    <p>How you present price information has a measurable impact on purchase decisions. These are the key pricing design patterns:</p>

    <h4>Compare-At Pricing (Strikethrough)</h4>
    <ul>
        <li><strong>Original price:</strong> Smaller font size, gray color (#999999), strikethrough text (text-decoration: line-through). This price should be visually de-emphasized — it is the "before" that makes the "after" look good.</li>
        <li><strong>Sale price:</strong> Larger font size, bold weight, accent or red color. This is the number you want the customer to anchor on.</li>
        <li><strong>Savings indicator:</strong> "Save $24" or "20% Off" in a small badge next to the sale price. Making the savings explicit (in dollars or percentage) increases perceived value.</li>
    </ul>

    <h4>Bundle Savings Design</h4>
    <ul>
        <li><strong>Show the math:</strong> "Individual price: $120 | Bundle price: $89 | You save: $31" — making the savings visible and concrete.</li>
        <li><strong>Visual packaging:</strong> Show bundle products as a group image, not individual items. This frames the bundle as one purchase decision, not three.</li>
        <li><strong>Highlight badge:</strong> "BEST VALUE" or "SAVE 25%" badge on the bundle option. Gold or accent color background.</li>
    </ul>

    <h4>Subscription Discount</h4>
    <ul>
        <li><strong>Format:</strong> "Subscribe &amp; Save 15%" — clearly show the per-unit savings</li>
        <li><strong>Toggle design:</strong> A clean toggle between "One-time purchase" ($45) and "Subscribe" ($38.25) with the savings highlighted</li>
        <li><strong>Reassurance:</strong> "Cancel anytime" text near the subscribe option reduces commitment anxiety</li>
    </ul>
</div>

<div class="content-section">
    <h3>Micro-Copy That Converts</h3>
    <p>Micro-copy is the small, functional text that appears throughout the store — button labels, form instructions, error messages, confirmation text. It is often overlooked by designers but has a huge impact on user experience and conversions.</p>

    <h4>Below Add-to-Cart Trust Text</h4>
    <p>Immediately below the Add to Cart button, add 3 brief trust reassurances:</p>
    <ul>
        <li>Checkmark icon + "Free shipping on orders over $50"</li>
        <li>Checkmark icon + "30-day hassle-free returns"</li>
        <li>Checkmark icon + "Secure checkout with SSL encryption"</li>
    </ul>
    <p>Design: 12-14px text, gray or muted color, checkmark icons in green or brand color. This text reduces purchase anxiety at the exact moment of decision.</p>

    <h4>Form Label Best Practices</h4>
    <ul>
        <li><strong>Conversational:</strong> "Your email" not "Email Address*" — feels more human and less like a government form</li>
        <li><strong>Helpful placeholders:</strong> "jane@example.com" not "Enter your email here" — show the expected format</li>
        <li><strong>Floating labels:</strong> Labels that start as placeholder text and float above the input when focused. Clean, space-efficient, and modern.</li>
    </ul>

    <h4>Error Message Design</h4>
    <ul>
        <li><strong>Be helpful, not blaming:</strong> "Please enter a valid email address" not "Invalid input" or "Error"</li>
        <li><strong>Color:</strong> Red text with a red/pink background tint on the input field. Include a small error icon.</li>
        <li><strong>Position:</strong> Directly below the problematic input field, not at the top of the form</li>
        <li><strong>Timing:</strong> Show on field blur (when user moves away), not on every keystroke</li>
    </ul>

    <h4>Confirmation and Success Messages</h4>
    <ul>
        <li><strong>Cart addition:</strong> Brief slide-in confirmation or drawer: "Added to cart! View Cart" with the product thumbnail</li>
        <li><strong>Newsletter signup:</strong> "Welcome to the Luxe Botanica family! Check your inbox for your 15% welcome code."</li>
        <li><strong>Order confirmation:</strong> Clear order number, estimated delivery date, and what happens next. Reduce post-purchase anxiety.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>HANDS-ON EXERCISE: Design Trust and Conversion Elements for Luxe Botanica</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 1: Design the Trust Bar</h4>
        <p>In Figma, design the Luxe Botanica trust bar with 4 trust points (100% Natural, Free Shipping, 30-Day Guarantee, 4.9/5 Rating). Use consistent icons from one icon library, forest green or neutral colors, and the Lato body font at 14px semibold. Create both desktop (horizontal row) and mobile (2x2 grid) versions.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 2: Design the Customer Reviews Section</h4>
        <p>Create a reviews section with:</p>
        <ul>
            <li>Section title: "What Our Customers Say" in Playfair Display</li>
            <li>Overall rating: "4.8 out of 5" with large star display and review count</li>
            <li>3 testimonial cards: each with a circular customer photo (64px), name, location, star rating, and 2-3 sentence review quote</li>
            <li>Cards should have white background, subtle shadow, 24px padding, and consistent sizing</li>
        </ul>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 3: Design the Money-Back Guarantee Badge</h4>
        <p>Design a premium "30-Day Money Back Guarantee" badge. It should look like a trust symbol from a premium brand, NOT a clip-art PNG from a free badge generator. Use your brand colors (forest green or gold), a clean shield or checkmark icon, and elegant typography. Create it as a Figma component.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 4: Design 3 CTA Button Variations</h4>
        <p>Create three button designs:</p>
        <ul>
            <li><strong>Primary CTA:</strong> "Add to Cart" — solid warm gold background (#C9A84C), white text, 48px height, with hover state</li>
            <li><strong>Secondary CTA:</strong> "Shop the Collection" — forest green outline, green text, transparent background</li>
            <li><strong>Hero CTA:</strong> "Discover Our Bestsellers" — larger size (56px height), for hero section use</li>
        </ul>
        <p>Include hover, active, and disabled states for each button.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 5: Design Below-ATC Micro-Trust</h4>
        <p>Design the small trust text that appears directly below the Add to Cart button on the product page:</p>
        <ul>
            <li>Green checkmark icon + "Free shipping on orders over $50"</li>
            <li>Green checkmark icon + "30-day hassle-free returns"</li>
            <li>Green checkmark icon + "Secure checkout with 256-bit encryption"</li>
        </ul>
        <p>12-14px Lato, muted text color (#6B6B6B), compact vertical spacing (8px between lines).</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Step 6: Competitive Research</h4>
        <p>Pinterest search "ecommerce trust elements design" and "product page trust badges." Study how premium skincare brands (Aesop, Glossier, Drunk Elephant, Tatcha) present their trust elements. Note the placement, sizing, and styling. Compare your designs against these references.</p>
    </div>
</div>

<div class="content-section">
    <h3>Ready for the Quiz?</h3>
    <ul>
        <li>You should be able to name and explain all 5 Psychological Conversion Triggers</li>
        <li>You should know how to design social proof elements (star ratings, reviews, UGC, testimonials)</li>
        <li>You should understand trust badge design specifications and common mistakes</li>
        <li>You should know CTA button psychology (copy options, sizing, hover states)</li>
        <li>You should understand pricing psychology design (compare-at, bundles, subscriptions)</li>
        <li>You should have completed all 6 exercises for Luxe Botanica trust and conversion elements</li>
        <li>Score <strong>10/10</strong> to proceed to the Page-by-Page Design Guide</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: PAGE-BY-PAGE DESIGN GUIDE</h2>
<p><em>Narrative: You are the lead designer for <strong>Luxe Botanica</strong>, a premium organic skincare brand launching on Shopify. Every page you design must guide visitors from curiosity to conversion.</em></p>

<div class="highlight-box">
    <h4>The Store is a Journey</h4>
    <p>Visitors do not just land on one page. They flow: <strong>Homepage &rarr; Collection &rarr; Product &rarr; Cart &rarr; Checkout</strong>. Every page must guide them forward. Think of your Shopify store as a physical boutique: the homepage is the storefront window, the collection page is the curated shelf, the product page is the sales associate, and the cart is the checkout counter. If any step feels confusing or broken, the customer walks out.</p>
</div>

<div class="content-section">
    <h3>🏠 Part 1: Homepage Design &mdash; The 12 Essential Sections</h3>
    <p>The homepage is the most important page in your store. It sets the tone, builds trust, and directs visitors to products. Every premium Shopify store follows this proven structure. For Luxe Botanica, we will design each section with intention.</p>

    <div class="mermaid">graph TD; A[Announcement Bar] --> B[Header / Navigation]; B --> C[Hero Banner]; C --> D[Trust Bar / Logo Bar]; D --> E[Featured Collection]; E --> F[Image with Text - Brand Story]; F --> G[Testimonials]; G --> H[Newsletter Signup]; H --> I[Trust Guarantees Bar]; I --> J[FAQ Preview]; J --> K[Blog Posts]; K --> L[Image Gallery / Instagram]; L --> M[Footer];</div>
</div>

<div class="content-section">
    <h3>Section 1: Announcement Bar</h3>
    <p><strong>Purpose:</strong> Create urgency and highlight the current offer. This is the very first thing visitors see.</p>
    <p><strong>Content Examples for Luxe Botanica:</strong></p>
    <ul>
        <li>"Free Shipping on Orders Over $50 | Shop Now"</li>
        <li>"NEW: Vitamin C Brightening Serum &mdash; Limited Edition"</li>
        <li>"Spring Sale: 20% Off All Serums &mdash; Ends Sunday"</li>
    </ul>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Height</td><td>40px</td><td>36px</td></tr>
            <tr><td>Background</td><td>Brand accent (#2D5016) or black (#000)</td><td>Same</td></tr>
            <tr><td>Font Size</td><td>13-14px</td><td>12-13px</td></tr>
            <tr><td>Font Weight</td><td>500-600</td><td>500-600</td></tr>
            <tr><td>Text Color</td><td>White (#FFFFFF)</td><td>White</td></tr>
            <tr><td>Text Align</td><td>Center</td><td>Center</td></tr>
            <tr><td>Behavior</td><td>Static or auto-rotate multiple messages</td><td>Single line, auto-rotate if multiple</td></tr>
            <tr><td>Dismissible</td><td>Optional X button on right</td><td>Optional, but saves vertical space</td></tr>
        </tbody>
    </table>
    <div class="warning-box">
        <h4>&#9888;&#65039; Warning</h4>
        <p>Never leave the announcement bar empty or with placeholder text. If there is no active promotion, use a trust statement like "Cruelty-Free | Dermatologist Tested | Free Returns".</p>
    </div>
</div>

<div class="content-section">
    <h3>Section 2: Hero Banner</h3>
    <p><strong>Purpose:</strong> The hero is the first impression. It sets the entire tone of the brand. For Luxe Botanica, this must feel luxurious, clean, and aspirational.</p>
    <p><strong>Content:</strong></p>
    <ul>
        <li><strong>Headline:</strong> Maximum 8 words. Use a serif font for luxury. Example: "Radiant Skin Starts With Nature"</li>
        <li><strong>Subheadline:</strong> 1-2 sentences. Address a pain point or promise a result. Example: "Organic formulas that deliver visible results in 14 days."</li>
        <li><strong>CTA Button:</strong> Prominent, contrasting color. "Shop Best Sellers" or "Discover Our Collection"</li>
        <li><strong>Image:</strong> Full-width lifestyle image (woman applying skincare, botanical ingredients, spa-like setting). NOT a plain product shot on white.</li>
    </ul>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Height</td><td>70-80vh (viewport height)</td><td>60vh</td></tr>
            <tr><td>Width</td><td>Full-width (edge to edge)</td><td>Full-width</td></tr>
            <tr><td>Image</td><td>High-res lifestyle photo (min 2400px wide)</td><td>Same image or cropped vertical version</td></tr>
            <tr><td>Headline Size</td><td>48-64px serif</td><td>32-40px serif</td></tr>
            <tr><td>Subhead Size</td><td>18-20px sans-serif</td><td>16px sans-serif</td></tr>
            <tr><td>CTA Size</td><td>16-18px, 56px height, 200px+ width</td><td>16px, 48px height, full-width</td></tr>
            <tr><td>Text Position</td><td>Left-aligned or centered overlay</td><td>Stacked: image top, text below (or overlay with dark gradient)</td></tr>
            <tr><td>Overlay</td><td>Optional: dark gradient from bottom (rgba(0,0,0,0.3))</td><td>Recommended for readability</td></tr>
        </tbody>
    </table>
    <p><strong>Pinterest Inspiration:</strong> Search "Shopify hero banner skincare", "luxury ecommerce hero section", "premium beauty website hero"</p>
</div>

<div class="content-section">
    <h3>Section 3: Logo Bar / Trust Signals</h3>
    <p><strong>Purpose:</strong> Instantly build credibility. "As Seen In" logos or trust certifications make visitors feel safe.</p>
    <p><strong>Content for Luxe Botanica:</strong></p>
    <ul>
        <li>Media logos: Vogue, Elle, Allure, Cosmopolitan (if applicable)</li>
        <li>Or certification badges: "Certified Organic", "Cruelty-Free", "Dermatologist Tested", "Vegan"</li>
    </ul>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Logos</td><td>4-6 logos in a row</td><td>Horizontal scroll or 2x3 grid</td></tr>
            <tr><td>Logo Style</td><td>Grayscale at 60% opacity (on hover: full color)</td><td>Grayscale at 60% opacity</td></tr>
            <tr><td>Container Height</td><td>60-80px</td><td>50-60px</td></tr>
            <tr><td>Background</td><td>White or very light gray (#FAFAFA)</td><td>Same</td></tr>
            <tr><td>Padding</td><td>24px top/bottom</td><td>16px top/bottom</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 4: Featured Collection</h3>
    <p><strong>Purpose:</strong> Showcase your top products immediately. This is the first product touchpoint for the visitor.</p>
    <p><strong>Content for Luxe Botanica:</strong> "Best Sellers" or "New Arrivals" &mdash; 4-8 products from the hero collection.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Grid</td><td>4 products per row</td><td>2 products per row</td></tr>
            <tr><td>Card Elements</td><td>Product image, name, price, hover second image</td><td>Product image, name, price</td></tr>
            <tr><td>Image Ratio</td><td>3:4 portrait (recommended for skincare)</td><td>3:4 portrait</td></tr>
            <tr><td>Hover Effect</td><td>Second image swap + "Quick Add" button overlay</td><td>No hover (tap to navigate)</td></tr>
            <tr><td>Price Display</td><td>Regular price; if on sale: strikethrough + sale price in red/accent</td><td>Same</td></tr>
            <tr><td>Section CTA</td><td>"View All" link below grid</td><td>"View All" full-width button</td></tr>
            <tr><td>Section Padding</td><td>80px top/bottom</td><td>48px top/bottom</td></tr>
        </tbody>
    </table>
    <div class="highlight-box">
        <h4>Pro Tip: Image Consistency</h4>
        <p>All product images in this grid MUST have the same aspect ratio, same background style, and same lighting. Inconsistent images immediately cheapen the feel of a premium store. For Luxe Botanica, use clean white or light marble backgrounds with consistent soft lighting.</p>
    </div>
</div>

<div class="content-section">
    <h3>Section 5: Image with Text (Brand Story)</h3>
    <p><strong>Purpose:</strong> Connect emotionally. Tell the Luxe Botanica story &mdash; why the brand exists, what it stands for.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Layout</td><td>50/50 split: image left, text right</td><td>Stacked: image on top, text below</td></tr>
            <tr><td>Image</td><td>Lifestyle or founder photo (not product)</td><td>Full-width, 16:9 or 4:3</td></tr>
            <tr><td>Text Content</td><td>Short brand story paragraph (3-5 sentences)</td><td>Same, slightly condensed</td></tr>
            <tr><td>CTA</td><td>"Learn Our Story" &rarr; About page</td><td>Full-width button</td></tr>
            <tr><td>Alternate</td><td>If second occurrence, swap: text left, image right</td><td>Always stack image on top</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 6: Testimonials / Reviews</h3>
    <p><strong>Purpose:</strong> Social proof is the single most powerful conversion tool. Real people saying real things about your products.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Layout</td><td>3 testimonial cards in a row, or scrollable carousel</td><td>Horizontal scroll cards</td></tr>
            <tr><td>Card Content</td><td>Star rating (5 stars), quote (2-3 sentences), customer name, customer photo</td><td>Same</td></tr>
            <tr><td>Badge</td><td>"Verified Purchase" below name</td><td>Same</td></tr>
            <tr><td>Background</td><td>Light cream or brand-tinted background</td><td>Same</td></tr>
            <tr><td>Card Style</td><td>Subtle shadow, rounded corners (12px), padding 24px</td><td>Slightly smaller padding (16px)</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 7: Newsletter Signup</h3>
    <p><strong>Purpose:</strong> Capture emails for remarketing. Offer an incentive that is valuable enough to give up an email address.</p>
    <p><strong>Content for Luxe Botanica:</strong> "Get 10% Off Your First Order" with a single email input field.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Background</td><td>Brand color (#2D5016) or lifestyle image with overlay</td><td>Same, but ensure text readability</td></tr>
            <tr><td>Headline</td><td>"Join the Luxe Botanica Family" (24-32px)</td><td>24px</td></tr>
            <tr><td>Incentive</td><td>"Get 10% Off Your First Order" (18px)</td><td>16px</td></tr>
            <tr><td>Input</td><td>Email field + "Subscribe" button inline</td><td>Email field stacked above "Subscribe" button (full-width)</td></tr>
            <tr><td>Privacy</td><td>Small text: "We respect your privacy. Unsubscribe anytime."</td><td>Same</td></tr>
            <tr><td>Padding</td><td>64px top/bottom</td><td>40px top/bottom</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 8: Trust Guarantees Bar</h3>
    <p><strong>Purpose:</strong> Reinforce buying confidence with concrete guarantees.</p>
    <p><strong>Content for Luxe Botanica:</strong></p>
    <ul>
        <li>Free Shipping (truck icon)</li>
        <li>30-Day Money-Back Guarantee (shield icon)</li>
        <li>Secure Checkout (lock icon)</li>
        <li>24/7 Customer Support (headset icon)</li>
    </ul>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Layout</td><td>4 items in a row with icons + text</td><td>2x2 grid or horizontal scroll</td></tr>
            <tr><td>Icon Size</td><td>32-40px</td><td>24-32px</td></tr>
            <tr><td>Background</td><td>Subtle (#F9FAFB or light brand tint)</td><td>Same</td></tr>
            <tr><td>Text Size</td><td>14-16px, font-weight 500</td><td>13-14px</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 9: FAQ Preview</h3>
    <p><strong>Purpose:</strong> Answer the top objections before they become reasons not to buy. Reduces support inquiries by up to 40%.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Questions</td><td>3-5 most asked questions</td><td>Same</td></tr>
            <tr><td>Style</td><td>Accordion (click to expand)</td><td>Same accordion</td></tr>
            <tr><td>CTA</td><td>"View All FAQs" link at bottom</td><td>Full-width button</td></tr>
            <tr><td>Max Width</td><td>720px centered</td><td>Full-width with 16px side padding</td></tr>
        </tbody>
    </table>
    <p><strong>Example FAQs for Luxe Botanica:</strong></p>
    <ol>
        <li>"Are your products cruelty-free?" &mdash; Yes, all products are certified cruelty-free and vegan.</li>
        <li>"How long until I see results?" &mdash; Most customers see visible improvement within 14 days.</li>
        <li>"What is your return policy?" &mdash; 30-day money-back guarantee, no questions asked.</li>
        <li>"Do you ship internationally?" &mdash; Yes, we ship to 40+ countries. Free shipping on orders over $50.</li>
    </ol>
</div>

<div class="content-section">
    <h3>Section 10: Blog Posts</h3>
    <p><strong>Purpose:</strong> Content marketing drives SEO traffic and builds authority. Show that Luxe Botanica is an expert in skincare.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Layout</td><td>3 blog cards in a row</td><td>Horizontal scroll or stacked</td></tr>
            <tr><td>Card Content</td><td>Featured image, title, excerpt (2 lines), date</td><td>Same</td></tr>
            <tr><td>CTA</td><td>"Read More" link on each card</td><td>Same</td></tr>
            <tr><td>Image Ratio</td><td>16:9 landscape</td><td>Same</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 11: Image Gallery / Instagram Feed</h3>
    <p><strong>Purpose:</strong> Lifestyle content that shows the brand in real life. Builds aspirational connection.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Layout</td><td>4-6 images in a grid (3 per row)</td><td>Horizontal scroll</td></tr>
            <tr><td>Image Style</td><td>1:1 square, consistent color grading</td><td>Same</td></tr>
            <tr><td>Link</td><td>"Follow Us @luxebotanica" &rarr; Instagram profile</td><td>Same</td></tr>
            <tr><td>Hover</td><td>Slight scale (1.05) + Instagram icon overlay</td><td>No hover</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>Section 12: Footer</h3>
    <p><strong>Purpose:</strong> Navigation safety net, legal compliance, and final trust signals. The footer catches visitors who scrolled to the bottom without converting.</p>
    <table>
        <thead><tr><th>Property</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Layout</td><td>3-4 columns: Quick Links, Customer Service, About, Newsletter</td><td>Stacked accordions or single column</td></tr>
            <tr><td>Column 1</td><td>Quick Links: Shop All, Best Sellers, New Arrivals, Sale</td><td>Expandable section</td></tr>
            <tr><td>Column 2</td><td>Customer Service: Contact Us, FAQ, Shipping Policy, Returns</td><td>Expandable section</td></tr>
            <tr><td>Column 3</td><td>About: Our Story, Ingredients, Sustainability, Press</td><td>Expandable section</td></tr>
            <tr><td>Column 4</td><td>Mini newsletter signup or social media links</td><td>Social icons row</td></tr>
            <tr><td>Bottom Bar</td><td>Copyright, Privacy Policy, Terms of Service, Payment icons (Visa, MC, AMEX, PayPal, Shop Pay)</td><td>Same, stacked</td></tr>
            <tr><td>Background</td><td>Dark (#1A1A1A) or brand dark</td><td>Same</td></tr>
            <tr><td>Text Color</td><td>Light gray (#9CA3AF), links white on hover</td><td>Same</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🛒 Part 2: Product Page Design &mdash; The Money-Making Page</h3>
    <p>The product page is where 90% of purchase decisions happen. If the homepage is the storefront window, the product page is the sales associate. It must answer every question, overcome every objection, and make buying effortless.</p>

    <h4>Above the Fold Layout</h4>
    <table>
        <thead><tr><th>Element</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Image Gallery</td><td>Left side, 55% width. Main image + thumbnail strip below or on left side. Zoom on hover.</td><td>Full-width swipeable carousel. Pinch-to-zoom enabled. Dot indicators below.</td></tr>
            <tr><td>Buy Box</td><td>Right side, 45% width. Contains all purchase elements.</td><td>Below image gallery, full-width.</td></tr>
        </tbody>
    </table>

    <h4>Buy Box Elements (in order)</h4>
    <ol>
        <li><strong>Product Title:</strong> 24-32px, serif font for Luxe Botanica. Example: "Vitamin C Brightening Serum"</li>
        <li><strong>Price:</strong> 20-24px, bold. If on sale: strikethrough original + sale price in accent color. Example: <del>$65.00</del> <strong>$49.00</strong></li>
        <li><strong>Star Rating:</strong> 5-star display + review count link ("128 Reviews" &mdash; scrolls to reviews section)</li>
        <li><strong>Short Description:</strong> 1-2 sentences. Benefit-focused, not ingredient-focused.</li>
        <li><strong>Variant Selectors:</strong> Size (30ml / 50ml / 100ml). Color swatches if applicable. Each selector clearly labeled.</li>
        <li><strong>Quantity Selector:</strong> - [1] + with clear tap targets (44px)</li>
        <li><strong>Add to Cart Button:</strong> DOMINANT. Full-width in buy box. 56px height. Brand accent color. "Add to Cart &mdash; $49.00"</li>
        <li><strong>Buy Now / Express Checkout:</strong> Secondary row: Apple Pay, Google Pay, Shop Pay buttons.</li>
        <li><strong>Trust Micro-Copy:</strong> Below ATC: "Free Shipping Over $50 | 30-Day Returns | Secure Checkout" with small icons.</li>
    </ol>

    <h4>Below the Fold Content</h4>
    <ul>
        <li><strong>Description Tabs:</strong> Tabbed or accordion layout: "Description" | "Ingredients" | "How to Use" | "Shipping"</li>
        <li><strong>Ingredients / Specs:</strong> For Luxe Botanica, a clean list of key ingredients with benefits for each</li>
        <li><strong>Reviews Section:</strong> Full review display with photos, star breakdown chart, sorting (Most Recent, Highest Rated)</li>
        <li><strong>Related Products:</strong> "You May Also Like" &mdash; 4 products horizontal scroll</li>
        <li><strong>Recently Viewed:</strong> "Recently Viewed" &mdash; helps users navigate back to products they browsed</li>
    </ul>

    <div class="highlight-box">
        <h4>Sticky Add to Cart on Mobile</h4>
        <p>When the user scrolls past the main ATC button, a sticky bar appears fixed at the bottom of the screen. It contains: Product name (truncated), Price, and "Add to Cart" button. This ensures the buying action is ALWAYS accessible. Height: 60-70px. Background: white with top shadow. Z-index: above everything except modals.</p>
    </div>
</div>

<div class="content-section">
    <h3>📦 Part 3: Collection Page Design</h3>
    <p>The collection page is where browsing happens. Visitors need to filter, sort, and scan products quickly.</p>

    <h4>Collection Page Structure</h4>
    <table>
        <thead><tr><th>Element</th><th>Desktop</th><th>Mobile</th></tr></thead>
        <tbody>
            <tr><td>Header</td><td>Collection banner image + title + description. Full-width, 200-300px height.</td><td>Smaller banner (150px) or title only with colored background.</td></tr>
            <tr><td>Filter Sidebar</td><td>Left sidebar (240px wide). Filter by: Price range, Product type, Skin type, Ingredients, Rating.</td><td>Hidden by default. "Filter" button opens a slide-up drawer (bottom sheet).</td></tr>
            <tr><td>Sort Dropdown</td><td>Top-right: "Sort by: Featured / Price Low-High / Price High-Low / Best Selling / Newest"</td><td>Same dropdown, full-width when open.</td></tr>
            <tr><td>Product Grid</td><td>3-4 products per row</td><td>2 products per row</td></tr>
            <tr><td>Product Card</td><td>Image (3:4), name, price, hover second image, "Quick Add" on hover</td><td>Image (3:4), name, price</td></tr>
            <tr><td>Pagination</td><td>"Load More" button or numbered pages (1, 2, 3...)</td><td>"Load More" button preferred (less friction)</td></tr>
            <tr><td>Results Count</td><td>"Showing 24 of 48 products"</td><td>Same, smaller text</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📄 Part 4: Supporting Pages</h3>

    <h4>About Page</h4>
    <ul>
        <li>Hero: Brand story headline + atmospheric image</li>
        <li>Brand story in narrative format (not bullet points)</li>
        <li>Founder section with photo (if applicable)</li>
        <li>Values section: 3-4 brand values with icons (Organic, Cruelty-Free, Sustainable, Results-Driven)</li>
        <li>Team photos (optional)</li>
        <li>CTA: "Shop Our Products" at the bottom</li>
    </ul>

    <h4>Contact Page</h4>
    <ul>
        <li>Contact form: Name, Email, Subject (dropdown), Message</li>
        <li>Direct email address displayed</li>
        <li>Response time expectation: "We respond within 24 hours"</li>
        <li>FAQ link: "Check our FAQ for instant answers"</li>
        <li>Social media links</li>
    </ul>

    <h4>Cart Page / Cart Drawer</h4>
    <ul>
        <li><strong>Cart Drawer (recommended):</strong> Slides in from right. Shows items, quantities, subtotal. "Continue Shopping" + "Checkout" buttons. Upsell section: "Add a sample for $5"</li>
        <li><strong>Cart Page:</strong> Full page with item details, quantity adjusters, remove buttons. Order summary sidebar with discount code field. Trust badges near checkout button.</li>
        <li>Both must show: Free shipping threshold progress bar ("You are $12 away from free shipping!")</li>
    </ul>

    <h4>Blog Post Page</h4>
    <ul>
        <li>Featured image: Full-width, 16:9</li>
        <li>Article content: max-width 720px, centered, 18px body text for readability</li>
        <li>Author name + date + reading time</li>
        <li>Related posts at bottom</li>
        <li>Product CTA embedded in article where relevant</li>
    </ul>

    <h4>Navigation Design</h4>
    <ul>
        <li><strong>Desktop:</strong> Logo center or left. Menu items: Home, Shop (mega menu dropdown with collections), About, Blog, Contact. Search icon, Account icon, Cart icon with item count badge.</li>
        <li><strong>Mobile:</strong> Hamburger menu (left), Logo (center), Cart icon (right). Hamburger opens full-screen or slide-in drawer with all navigation items, featured collection image, social links.</li>
        <li><strong>Mega Menu (desktop):</strong> On "Shop" hover, show dropdown with collection images, featured product, and links organized by category.</li>
    </ul>
</div>

<div class="warning-box">
    <h4>&#9888;&#65039; Shopify Page Limitations</h4>
    <p><strong>What Shopify supports natively:</strong> Theme sections (drag-and-drop), custom page templates, metafields for custom data, basic product filtering, blog with tags.</p>
    <p><strong>What needs custom code (developer help):</strong> Advanced filtering (by ingredient, skin type), custom product builders/configurators, dynamic pricing tables, custom mega menus beyond theme defaults, advanced collection sorting.</p>
    <p><strong>What needs Shopify Plus ($$$):</strong> Checkout customization, Shopify Scripts (auto-discounts), exclusive APIs for loyalty programs, custom checkout UI.</p>
    <p>As a designer, you must know these boundaries. Do not design features that Shopify cannot support without communicating the development requirement to the PM first.</p>
</div>

<div class="content-section">
    <h3>🔍 Pinterest Inspiration Queries</h3>
    <p>Use these search queries on Pinterest, Dribbble, and Behance to gather inspiration for each page type:</p>
    <table>
        <thead><tr><th>Page</th><th>Search Query</th></tr></thead>
        <tbody>
            <tr><td>Homepage</td><td>"Shopify homepage design skincare", "luxury ecommerce homepage layout"</td></tr>
            <tr><td>Product Page</td><td>"Shopify product page premium", "skincare PDP design", "ecommerce buy box layout"</td></tr>
            <tr><td>Collection Page</td><td>"ecommerce collection page filter sidebar", "Shopify collection grid design"</td></tr>
            <tr><td>About Page</td><td>"brand story page design ecommerce", "about us page luxury brand"</td></tr>
            <tr><td>Cart</td><td>"ecommerce cart drawer design", "Shopify cart page UX"</td></tr>
            <tr><td>Blog</td><td>"ecommerce blog page layout", "beauty blog design minimal"</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>&#9989; HANDS-ON EXERCISE: Full Store Design</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Build the Complete Luxe Botanica Store in Figma</h4>
        <ol>
            <li><strong>Step 1 &mdash; Homepage (all 12 sections):</strong> Design the complete Luxe Botanica homepage at 1440px width. Include every section from Announcement Bar to Footer. Use real copy (not Lorem Ipsum). Use high-quality stock images from Unsplash.</li>
            <li><strong>Step 2 &mdash; Product Page:</strong> Design the full product page for "Vitamin C Brightening Serum". Include image gallery with 4 thumbnail images, complete buy box, description tabs, reviews section, and related products.</li>
            <li><strong>Step 3 &mdash; Collection Page:</strong> Design the "All Products" collection page with filter sidebar (desktop) and product grid showing 8 products.</li>
            <li><strong>Step 4 &mdash; Export for Review:</strong> Export your designs as a PDF. Include: Cover page with project name, Desktop Homepage, Desktop Product Page, Desktop Collection Page.</li>
        </ol>
        <p><strong>Estimated Time:</strong> 3-4 hours for all pages. Take breaks between each page.</p>
    </div>
</div>

<div class="content-section" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3>Hero Section Design Patterns &amp; Common Mistakes</h3>
    <p>The hero section is the most critical 5 seconds of any Shopify store. Here are the proven design patterns and mistakes to avoid:</p>

    <h4 style="color: #10B981;">Hero Layout Patterns That Convert</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Pattern</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Description</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Best For</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Full-Width Image + Overlay</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lifestyle image spanning full width with dark gradient overlay, text centered or left-aligned on top</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Luxury brands, skincare, fashion (Luxe Botanica recommended)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Split Hero (50/50)</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Text on one side, product image on the other. Clean and conversion-focused.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product-focused stores, tech, DTC brands</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Text-Only Hero</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Bold headline on solid or gradient background. No image. Ultra-minimalist.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Typography-driven brands, editorial, high-end minimal</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Video Hero</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Background video (muted, autoplay, looping) with text overlay. High impact but heavier load.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lifestyle brands with strong visual content (use sparingly -- impacts page speed)</td></tr>
        </tbody>
    </table>

    <h4 style="color: #EF4444;">Hero Section Mistakes That Kill Conversions</h4>
    <ul style="line-height: 1.8;">
        <li><strong>No CTA visible above the fold:</strong> If the visitor has to scroll to find the first action button, you have already lost them</li>
        <li><strong>Headline too long:</strong> Maximum 8 words. If you cannot say it in 8 words, you have not found the right message</li>
        <li><strong>Low-contrast text on busy images:</strong> Always use a dark gradient overlay (rgba(0,0,0,0.3) minimum) when placing text on photographs</li>
        <li><strong>Auto-rotating carousels:</strong> Studies show carousel hero banners reduce engagement. Use a single, strong message instead</li>
        <li><strong>Generic stock photography:</strong> A smiling person on white adds zero brand value. Use lifestyle imagery that matches your specific brand story</li>
        <li><strong>Missing mobile optimization:</strong> The hero must be redesigned for 375px -- not just shrunk. Consider stacking image above text on mobile.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about page-by-page design</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: MOBILE-FIRST DEEP DIVE</h2>
<p><em>Narrative: Luxe Botanica's analytics show 73% of traffic comes from mobile devices. If the mobile experience is not perfect, nearly three-quarters of potential customers are having a subpar experience. Mobile is not a shrunk-down desktop &mdash; it is the PRIMARY design target.</em></p>

<div class="warning-box">
    <h4>&#9888;&#65039; 70% of Traffic is Mobile</h4>
    <p>This is not a statistic to memorize &mdash; it is the single most important fact in ecommerce design. Mobile is not an afterthought. It is the PRIMARY experience. If your mobile design is not perfect, you are losing 70% of potential sales. Every design decision must start with mobile and scale UP to desktop, not the other way around.</p>
</div>

<div class="content-section">
    <h3>👍 The Thumb Zone</h3>
    <p>Most users hold their phone with one hand, using their thumb to navigate. Understanding the thumb zone is critical for placing interactive elements where they can be easily reached.</p>

    <div class="highlight-box">
        <h4>Thumb Zone Map</h4>
        <p>Imagine the phone screen divided into three zones:</p>
        <ul>
            <li><strong>Easy Zone (bottom center):</strong> The natural resting position of the thumb. This is where your primary CTAs should live &mdash; Add to Cart, navigation tabs, main actions.</li>
            <li><strong>Stretch Zone (top and sides):</strong> Reachable but requires effort. Secondary navigation, search, filters.</li>
            <li><strong>Hard Zone (top-left corner):</strong> Almost impossible to reach with one hand on larger phones. Avoid placing critical actions here.</li>
        </ul>
    </div>

    <p><strong>Design Implications for Luxe Botanica:</strong></p>
    <ul>
        <li>Add to Cart button: Fixed at the <strong>bottom</strong> of the screen (sticky bar)</li>
        <li>Navigation: Hamburger menu in the <strong>top-left</strong> (accessible but not primary action)</li>
        <li>Cart icon: <strong>Top-right</strong> (frequently accessed, worth the stretch)</li>
        <li>Product image swipe: <strong>Center of screen</strong> (natural swipe zone)</li>
        <li>Filter and sort: Accessible from a <strong>bottom button</strong> that opens a bottom sheet</li>
    </ul>
</div>

<div class="content-section">
    <h3>👆 Touch Targets</h3>
    <p>Touch targets are the tappable areas on mobile. If they are too small, users will mis-tap, get frustrated, and leave. Apple and Google both mandate minimum touch target sizes for good reason.</p>

    <table>
        <thead><tr><th>Element</th><th>Minimum Size</th><th>Recommended Size</th><th>Notes</th></tr></thead>
        <tbody>
            <tr><td>Buttons (CTA)</td><td>44 x 44px</td><td>48 x 56px</td><td>Full-width on mobile for primary actions</td></tr>
            <tr><td>Link Spacing</td><td>8px between links</td><td>12px between links</td><td>Prevents accidental taps on wrong link</td></tr>
            <tr><td>Form Inputs</td><td>48px height</td><td>52px height</td><td>Finger-friendly, clear label above</td></tr>
            <tr><td>Icon Buttons</td><td>44 x 44px tap area</td><td>48 x 48px tap area</td><td>Even if icon is visually 24px, the tap area must be larger</td></tr>
            <tr><td>Checkboxes / Radios</td><td>44 x 44px tap area</td><td>44 x 44px tap area</td><td>The entire label should be tappable, not just the tiny checkbox</td></tr>
            <tr><td>Close Buttons (X)</td><td>44 x 44px</td><td>44 x 44px</td><td>Especially important on modals and drawers</td></tr>
            <tr><td>Navigation Items</td><td>44px height</td><td>48-56px height</td><td>Include padding around text</td></tr>
        </tbody>
    </table>

    <div class="warning-box">
        <h4>&#9888;&#65039; Tap Areas Must Not Overlap</h4>
        <p>If two tap areas overlap, users will tap the wrong element. This is especially common with close-together text links, small icon buttons in navigation bars, and dense product grids. Always verify by placing a 44x44px square over each interactive element in your Figma file to check for overlaps.</p>
    </div>
</div>

<div class="content-section">
    <h3>📱 Mobile Navigation Design</h3>
    <p>Mobile navigation is the gateway to the entire store. If it is confusing, slow, or hard to use, visitors cannot find products and will leave.</p>

    <h4>Hamburger Menu</h4>
    <table>
        <thead><tr><th>Element</th><th>Specification</th></tr></thead>
        <tbody>
            <tr><td>Icon Size</td><td>24x24px minimum, clearly visible three-line icon</td></tr>
            <tr><td>Tap Area</td><td>44x44px (larger than the visual icon)</td></tr>
            <tr><td>Position</td><td>Top-left corner of header</td></tr>
            <tr><td>Animation</td><td>Smooth transition: three lines morph to X when open</td></tr>
        </tbody>
    </table>

    <h4>Drawer Menu Content (for Luxe Botanica)</h4>
    <ol>
        <li><strong>Search bar</strong> at the top of the drawer (most common action)</li>
        <li><strong>Main navigation links:</strong> Home, Shop All, Collections (expandable sub-menu), About, Blog, Contact</li>
        <li><strong>Featured Collection:</strong> Small image card "New: Spring Collection" with link</li>
        <li><strong>Account links:</strong> Login / Sign Up, Order Tracking</li>
        <li><strong>Social media icons:</strong> Instagram, TikTok, Pinterest (row at bottom)</li>
        <li><strong>Contact info:</strong> Email or phone number at very bottom</li>
    </ol>

    <h4>Drawer Specifications</h4>
    <table>
        <thead><tr><th>Property</th><th>Value</th></tr></thead>
        <tbody>
            <tr><td>Width</td><td>85-90% of screen width (not full width &mdash; show a sliver of page behind)</td></tr>
            <tr><td>Background</td><td>White (#FFFFFF) or brand light color</td></tr>
            <tr><td>Overlay</td><td>Semi-transparent black (rgba(0,0,0,0.5)) on the rest of the page</td></tr>
            <tr><td>Close Button</td><td>X icon, 44px tap area, top-right of drawer</td></tr>
            <tr><td>Animation</td><td>Slide in from left, 300ms ease-out</td></tr>
            <tr><td>Close Behavior</td><td>Tap overlay to close, tap X to close, swipe left to close</td></tr>
            <tr><td>Scroll</td><td>Drawer content scrolls independently from page</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🔤 Mobile Typography Rules</h3>
    <p>Typography on mobile must prioritize readability above all else. Tiny text that looks fine on a large monitor becomes unreadable on a 375px phone screen.</p>

    <table>
        <thead><tr><th>Element</th><th>Desktop Size</th><th>Mobile Size</th><th>Why</th></tr></thead>
        <tbody>
            <tr><td>Body Text</td><td>16-18px</td><td><strong>16px minimum</strong></td><td>Below 16px, iOS Safari auto-zooms on input focus, breaking the layout</td></tr>
            <tr><td>H1 (Page Title)</td><td>48-64px</td><td>32-40px</td><td>Must fit on screen without excessive wrapping</td></tr>
            <tr><td>H2 (Section Title)</td><td>32-40px</td><td>24-28px</td><td>Clear hierarchy without dominating the screen</td></tr>
            <tr><td>H3 (Subsection)</td><td>24-28px</td><td>20-22px</td><td>Distinguishable from body text</td></tr>
            <tr><td>Caption / Small</td><td>14px</td><td>14px</td><td>Never go below 14px for any visible text</td></tr>
            <tr><td>Button Text</td><td>16-18px</td><td>16px</td><td>Must be readable inside a 44px+ button</td></tr>
            <tr><td>Line Height</td><td>1.5</td><td>1.5-1.7</td><td>More generous on mobile for finger-scrolling readability</td></tr>
            <tr><td>Letter Spacing</td><td>Normal or 0.5px</td><td>Normal</td><td>Tight letter-spacing harder to read on small screens</td></tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>The 16px Rule</h4>
        <p>This is non-negotiable: body text must be 16px or larger on mobile. iOS Safari will auto-zoom the viewport when a user taps into a form field with font-size below 16px, causing a jarring zoom that breaks the layout. This is one of the most common mobile UX bugs in Shopify stores.</p>
    </div>
</div>

<div class="content-section">
    <h3>📸 Mobile Image Strategy</h3>
    <p>Images are the heaviest assets on any webpage. On mobile networks (especially 4G and below), poorly optimized images cause slow load times, high bounce rates, and layout shifts.</p>

    <table>
        <thead><tr><th>Image Type</th><th>Aspect Ratio</th><th>Max File Size</th><th>Format</th><th>Notes</th></tr></thead>
        <tbody>
            <tr><td>Hero Banner</td><td>16:9 or 4:3 (not tall portrait)</td><td>Under 200KB</td><td>WebP with JPEG fallback</td><td>Use a mobile-specific crop that focuses on the key area</td></tr>
            <tr><td>Product Images</td><td>3:4 portrait or 1:1 square</td><td>Under 150KB each</td><td>WebP with JPEG fallback</td><td>Swipeable gallery, pinch-to-zoom</td></tr>
            <tr><td>Collection Grid</td><td>1:1 or 3:4</td><td>Under 100KB each</td><td>WebP with JPEG fallback</td><td>2-column grid, consistent ratios across ALL images</td></tr>
            <tr><td>Blog Featured</td><td>16:9 landscape</td><td>Under 150KB</td><td>WebP with JPEG fallback</td><td>Compressed for fast blog loading</td></tr>
            <tr><td>Icons / Logos</td><td>Variable</td><td>Under 10KB</td><td>SVG preferred</td><td>SVG scales perfectly at any resolution</td></tr>
        </tbody>
    </table>

    <p><strong>Key Rules:</strong></p>
    <ul>
        <li>Lazy load ALL images below the fold (only load what is visible)</li>
        <li>Always set explicit width and height attributes to prevent layout shift</li>
        <li>Use responsive images (srcset) so mobile devices load smaller files</li>
        <li>Compress every image through TinyPNG before uploading to Shopify</li>
    </ul>
</div>

<div class="content-section">
    <h3>&#9889; Preventing Layout Shift (CLS)</h3>
    <p>Cumulative Layout Shift (CLS) is when page elements jump around as the page loads. It is one of the most frustrating user experiences on mobile. Google also penalizes high CLS in search rankings.</p>

    <h4>Common Causes and Fixes</h4>
    <table>
        <thead><tr><th>Cause</th><th>Fix</th></tr></thead>
        <tbody>
            <tr><td>Images loading without dimensions</td><td>Always set width and height on all &lt;img&gt; tags</td></tr>
            <tr><td>Fonts loading late (FOUT)</td><td>Use font-display: swap and preload key fonts</td></tr>
            <tr><td>Dynamic content injecting</td><td>Reserve space for dynamic content with min-height</td></tr>
            <tr><td>Ads or banners loading late</td><td>Set fixed container sizes for ad slots</td></tr>
            <tr><td>Pop-ups appearing immediately</td><td>No popups in first 3 seconds of page load</td></tr>
        </tbody>
    </table>

    <p><strong>Design-Side Solutions:</strong></p>
    <ul>
        <li>Use skeleton screens (gray placeholder shapes) during loading</li>
        <li>Define fixed aspect ratios for all image containers</li>
        <li>Specify minimum heights for dynamic sections (reviews, featured products)</li>
        <li>Design a loading state for every section that fetches data</li>
    </ul>
</div>

<div class="content-section">
    <h3>📲 Mobile-Specific Design Patterns</h3>
    <p>These patterns are unique to mobile and do not have desktop equivalents. Master them to create truly native-feeling mobile experiences.</p>

    <h4>1. Sticky Add to Cart Bar</h4>
    <p>Fixed bar at the bottom of the product page. Appears when the main ATC button scrolls out of view.</p>
    <ul>
        <li>Height: 60-70px</li>
        <li>Content: Product name (truncated), price, "Add to Cart" button</li>
        <li>Background: white with subtle top border-shadow</li>
        <li>Z-index: 100 (above content, below modals)</li>
    </ul>

    <h4>2. Bottom Sheet Overlays</h4>
    <p>Slide-up panels from the bottom of the screen. Used for: filter drawers, size guides, variant selectors, quick-view product details.</p>
    <ul>
        <li>Slides up from bottom with spring animation</li>
        <li>Drag handle at top (small gray bar) for dismissal</li>
        <li>Swipe down to dismiss</li>
        <li>Background overlay (semi-transparent black)</li>
        <li>Max height: 80% of screen (never cover full screen unless full-page modal)</li>
    </ul>

    <h4>3. Collapsible Sections</h4>
    <p>Accordion-style sections for content-heavy pages. Used for: product descriptions, FAQ, ingredients lists, shipping info.</p>
    <ul>
        <li>Clear section header with + / - toggle icon</li>
        <li>Smooth expand/collapse animation (200-300ms)</li>
        <li>Only one section open at a time (optional, but reduces scroll depth)</li>
    </ul>

    <h4>4. Swipe Gestures</h4>
    <p>Horizontal swipe for: product image galleries, testimonial carousels, featured product rows.</p>
    <ul>
        <li>Dot indicators below (show current position)</li>
        <li>Peek next item: show 10-15% of the next card to indicate swiping is possible</li>
        <li>Snap scrolling: cards snap into position (CSS scroll-snap)</li>
    </ul>

    <h4>5. Pull-to-Refresh</h4>
    <p>Not designed in Figma, but be aware: some mobile themes support pull-to-refresh behavior. Do not place critical elements at the very top that could be mistaken for a pull gesture.</p>
</div>

<div class="content-section">
    <h3>&#128722; Mobile Checkout Optimization</h3>
    <p>Checkout is where mobile conversion rates plummet. Every extra field, every unnecessary step, every confusing layout costs real revenue. For Luxe Botanica, the mobile checkout must be streamlined to the absolute minimum.</p>

    <h4>Express Checkout (Above the Form)</h4>
    <ul>
        <li>Apple Pay, Google Pay, Shop Pay buttons displayed prominently ABOVE the manual form</li>
        <li>These allow one-tap purchase &mdash; massive conversion lift</li>
        <li>"Or continue with" divider between express and manual checkout</li>
    </ul>

    <h4>Manual Checkout Best Practices</h4>
    <ul>
        <li>Single-column form layout (never side-by-side fields on mobile)</li>
        <li>Auto-detect card type from first digits (show Visa/MC icon automatically)</li>
        <li>Address autocomplete (Google Places API)</li>
        <li>Minimal fields: only ask for what is absolutely necessary</li>
        <li>Clear progress indicator: "Step 1 of 3" or "Information &rarr; Shipping &rarr; Payment"</li>
        <li>Numeric keyboard for phone, zip code, and card number fields</li>
        <li>Real-time validation (check email format as user types, not after submit)</li>
    </ul>

    <div class="highlight-box">
        <h4>The Guest Checkout Rule</h4>
        <p>NEVER require account creation before checkout on mobile. Forced account creation is the #1 reason for mobile cart abandonment. Offer guest checkout first, then ask "Create an account?" AFTER the purchase is complete.</p>
    </div>
</div>

<div class="warning-box">
    <h4>&#9888;&#65039; Shopify Mobile Limitations</h4>
    <p><strong>Theme editor handles basic responsive:</strong> Most premium Shopify themes automatically stack sections on mobile. However, the automatic behavior is not always optimal and custom CSS is often needed to fine-tune spacing, font sizes, and element order on mobile.</p>
    <p><strong>Some sections do not stack well:</strong> Multi-column sections, image-with-text blocks, and mega menus can break on mobile if not tested. Always preview every section on a real device.</p>
    <p><strong>Cart drawer vs. cart page:</strong> These may behave differently on mobile. The cart drawer is generally better for mobile (less page navigation), but not all themes support it well.</p>
    <p><strong>Mobile menu is auto-generated:</strong> The mobile menu is typically generated from the same menu structure as desktop. You cannot always customize mobile-specific menu items or layout without custom code.</p>
</div>

<div class="content-section">
    <h3>&#128241; Real Device Testing Checklist</h3>
    <p>Figma previews and browser dev tools are NOT sufficient. You must test on real devices to catch the bugs that only appear on actual hardware.</p>

    <table>
        <thead><tr><th>Device</th><th>Priority</th><th>Why</th></tr></thead>
        <tbody>
            <tr><td>iPhone (Safari)</td><td>CRITICAL</td><td>Most common mobile device for ecommerce. Safari has unique CSS bugs (100vh issue, font-size zoom, safe-area-inset).</td></tr>
            <tr><td>Android (Chrome)</td><td>High</td><td>Second most common. Different rendering of fonts, colors, and shadows.</td></tr>
            <tr><td>Small Phone (iPhone SE / Galaxy A)</td><td>High</td><td>375px or smaller width. Tests if your design handles narrow screens.</td></tr>
            <tr><td>Large Phone (iPhone Pro Max / Galaxy Ultra)</td><td>Medium</td><td>430px+ width. Tests if your design uses the extra space well or looks stretched.</td></tr>
            <tr><td>iPad (Safari)</td><td>Medium</td><td>768px tablet layout. Tests the "in-between" state that many designers forget.</td></tr>
        </tbody>
    </table>

    <h4>Testing Protocol</h4>
    <ol>
        <li>Open the store on each device listed above</li>
        <li>Navigate the full flow: Homepage &rarr; Collection &rarr; Product &rarr; Add to Cart &rarr; Cart</li>
        <li>Check every interactive element: buttons, links, dropdowns, accordions, image galleries</li>
        <li>Test with slow 3G throttle (in Chrome DevTools: Network tab &rarr; Slow 3G)</li>
        <li>Check for layout shift during loading</li>
        <li>Verify all text is readable without zooming</li>
        <li>Verify no horizontal scroll exists on any page</li>
        <li>Test form inputs: does the correct keyboard appear? (numeric for phone, email for email)</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>&#9989; HANDS-ON EXERCISE: Mobile Design Mastery</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Convert Luxe Botanica to Mobile</h4>
        <ol>
            <li><strong>Step 1 &mdash; Mobile Homepage:</strong> Convert your Luxe Botanica desktop homepage to a 375px mobile version. Reorder or stack every section. Ensure all CTAs are full-width. Use 16px+ body text.</li>
            <li><strong>Step 2 &mdash; Mobile Navigation Drawer:</strong> Design the hamburger menu drawer. Include: search bar, navigation links with expandable sub-menus, featured collection image card, social media icons, and contact info.</li>
            <li><strong>Step 3 &mdash; Sticky ATC Bar:</strong> Design the sticky Add to Cart bar for the mobile product page. Include product name (truncated), price, and ATC button. Show it in context on the product page scroll.</li>
            <li><strong>Step 4 &mdash; Mobile Collection Page:</strong> Design the collection page at 375px with a "Filter" button that opens a bottom sheet filter drawer. Show the filter drawer open state.</li>
            <li><strong>Step 5 &mdash; Touch Target Audit:</strong> Go through every interactive element in your mobile designs. Place a 44x44px rectangle over each to verify minimum tap area. Fix any violations.</li>
        </ol>
        <p><strong>Estimated Time:</strong> 2-3 hours. Focus on getting the mobile homepage right first before other pages.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Mobile Design</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: DESIGN QA &amp; HANDOFF</h2>
<p><em>Narrative: The Luxe Botanica Figma designs are complete. Now comes the phase that separates amateur designers from professionals &mdash; Quality Assurance and Developer Handoff. Your Figma file IS the blueprint for the entire store. If it is sloppy, the developer builds sloppy. If it is precise, the store is precise.</em></p>

<div class="highlight-box">
    <h4>Why Design QA Matters</h4>
    <p>Imagine an architect handing blueprints to a construction crew with wrong measurements, missing dimensions, and unclear notes. The building would be a disaster. Your Figma file is that blueprint. QA is not optional &mdash; it is the process that ensures your design translates accurately into a working Shopify store. Skipping QA leads to: mismatched spacing, wrong colors, broken mobile layouts, and embarrassing client presentations.</p>
</div>

<div class="content-section">
    <h3>&#128269; Part 1: The Complete Design QA Audit Checklist</h3>
    <p>Before ANY design leaves your hands &mdash; whether for client review or developer handoff &mdash; it must pass every item on this checklist. No exceptions.</p>

    <h4>&#127912; Visual Consistency (15 Checkpoints)</h4>
    <table>
        <thead><tr><th>#</th><th>Check</th><th>How to Verify</th><th>Common Mistake</th></tr></thead>
        <tbody>
            <tr><td>1</td><td>Same fonts throughout</td><td>Select all text, check font family in Figma properties</td><td>Accidentally using a similar but different font weight</td></tr>
            <tr><td>2</td><td>Brand colors applied correctly</td><td>Check every colored element against the style guide</td><td>Using #333 instead of #1A1A1A (close but wrong)</td></tr>
            <tr><td>3</td><td>Consistent button styles</td><td>Compare every button instance to the master component</td><td>Detaching components and manually changing styles</td></tr>
            <tr><td>4</td><td>Uniform spacing between sections</td><td>Measure padding above and below every section</td><td>80px above one section, 64px above the next</td></tr>
            <tr><td>5</td><td>Aligned elements</td><td>Use Figma alignment guides, check edges line up</td><td>Text slightly off-center, cards at different heights</td></tr>
            <tr><td>6</td><td>Consistent border radius</td><td>Check all cards, buttons, inputs use the same radius</td><td>8px on some cards, 12px on others</td></tr>
            <tr><td>7</td><td>Consistent shadows</td><td>Verify all shadow effects match the style guide</td><td>Different shadow blur/offset on similar elements</td></tr>
            <tr><td>8</td><td>Icon style matches</td><td>All icons should be same weight, style (outline vs filled)</td><td>Mixing outline and filled icons</td></tr>
            <tr><td>9</td><td>Heading hierarchy is clear</td><td>H1 &gt; H2 &gt; H3 in size, no skipped levels</td><td>H3 looking bigger than H2</td></tr>
            <tr><td>10</td><td>Link styles consistent</td><td>All links same color, same underline behavior</td><td>Some links underlined, some not</td></tr>
            <tr><td>11</td><td>Form input styles match</td><td>All inputs same height, border, padding, focus state</td><td>Different input heights on same form</td></tr>
            <tr><td>12</td><td>Divider styles consistent</td><td>All horizontal rules / dividers same color and thickness</td><td>1px in some places, 2px in others</td></tr>
            <tr><td>13</td><td>Badge/tag styles consistent</td><td>"Sale", "New", "Best Seller" badges use same style</td><td>Different colored badges without purpose</td></tr>
            <tr><td>14</td><td>Hover states defined</td><td>Every clickable element has a documented hover state</td><td>Forgetting hover states entirely</td></tr>
            <tr><td>15</td><td>Empty states designed</td><td>What does the cart look like when empty? Collection with no products?</td><td>Not designing for zero-content scenarios</td></tr>
        </tbody>
    </table>

    <h4>&#128248; Image Quality (8 Checkpoints)</h4>
    <table>
        <thead><tr><th>#</th><th>Check</th><th>Standard</th></tr></thead>
        <tbody>
            <tr><td>1</td><td>No pixelation on any image</td><td>All images min 2x resolution (retina-ready)</td></tr>
            <tr><td>2</td><td>Consistent aspect ratios</td><td>All product images same ratio (3:4 or 1:1)</td></tr>
            <tr><td>3</td><td>Alt text planned</td><td>Every image has a planned alt text description</td></tr>
            <tr><td>4</td><td>Images compressed</td><td>All under 200KB, hero under 300KB</td></tr>
            <tr><td>5</td><td>No broken images</td><td>All image links working in Figma</td></tr>
            <tr><td>6</td><td>Consistent product photography</td><td>Same background, lighting, angle across all products</td></tr>
            <tr><td>7</td><td>Mobile-optimized crops</td><td>Key content visible in mobile crop (no important details cut off)</td></tr>
            <tr><td>8</td><td>Hero image has a focal point</td><td>Text overlay does not cover the main subject of the image</td></tr>
        </tbody>
    </table>

    <h4>&#128241; Responsive Design (10 Checkpoints)</h4>
    <table>
        <thead><tr><th>#</th><th>Check</th><th>How to Test</th></tr></thead>
        <tbody>
            <tr><td>1</td><td>Mobile version exists for every page</td><td>Each desktop page has a 375px counterpart</td></tr>
            <tr><td>2</td><td>No horizontal scroll on mobile</td><td>Preview at 375px, verify no overflow</td></tr>
            <tr><td>3</td><td>Touch targets 44px+</td><td>Place 44px squares over every interactive element</td></tr>
            <tr><td>4</td><td>Text readable without zooming</td><td>Body text 16px+, captions 14px+</td></tr>
            <tr><td>5</td><td>Images not overflowing containers</td><td>No images wider than their parent container</td></tr>
            <tr><td>6</td><td>Forms usable on mobile</td><td>Inputs are full-width, labels above (not beside)</td></tr>
            <tr><td>7</td><td>Navigation works on mobile</td><td>Hamburger menu opens, all links accessible</td></tr>
            <tr><td>8</td><td>Tables responsive</td><td>Tables scroll horizontally or convert to card layout</td></tr>
            <tr><td>9</td><td>Tablet breakpoint considered</td><td>768px layout does not look broken</td></tr>
            <tr><td>10</td><td>Content order makes sense on mobile</td><td>Important content appears first when sections stack</td></tr>
        </tbody>
    </table>

    <h4>&#10024; Polish (7 Checkpoints)</h4>
    <table>
        <thead><tr><th>#</th><th>Check</th><th>Standard</th></tr></thead>
        <tbody>
            <tr><td>1</td><td>Hover states designed for all interactive elements</td><td>Buttons, links, cards, images all have hover states</td></tr>
            <tr><td>2</td><td>Transition animations noted</td><td>"On hover: scale 1.02, 200ms ease" documented</td></tr>
            <tr><td>3</td><td>No placeholder content remaining</td><td>Zero instances of "Lorem ipsum" or "Placeholder"</td></tr>
            <tr><td>4</td><td>Real copy used throughout</td><td>All headings, descriptions, and CTAs are real content</td></tr>
            <tr><td>5</td><td>Favicon designed</td><td>16x16, 32x32, and 180x180 (Apple touch icon) versions</td></tr>
            <tr><td>6</td><td>Loading states designed</td><td>Skeleton screens for dynamic content</td></tr>
            <tr><td>7</td><td>Error states designed</td><td>404 page, empty cart, form validation errors</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>&#128187; Part 2: Cross-Device Testing at Every Breakpoint</h3>
    <p>Your design must work at every common screen width. Here are the breakpoints you must test and what to look for at each.</p>

    <table>
        <thead><tr><th>Breakpoint</th><th>Device</th><th>Type</th><th>What to Check</th></tr></thead>
        <tbody>
            <tr><td>375px</td><td>iPhone SE / iPhone Mini</td><td>Smallest common phone</td><td>Nothing overflows, text not too cramped, CTAs full-width</td></tr>
            <tr><td>414px</td><td>iPhone 14 / iPhone 15</td><td>Most common phone</td><td>Primary mobile design target. Everything must be pixel-perfect here.</td></tr>
            <tr><td>768px</td><td>iPad / Tablet</td><td>Tablet portrait</td><td>2-3 column grids, sidebar may appear, navigation transitions to desktop</td></tr>
            <tr><td>1024px</td><td>iPad landscape / Small laptop</td><td>Transition zone</td><td>Desktop layout begins. Verify nothing looks too spread out or too cramped.</td></tr>
            <tr><td>1440px</td><td>Standard desktop</td><td>Primary desktop design width</td><td>Your main Figma artboard width. The gold standard.</td></tr>
            <tr><td>1920px</td><td>Large monitor</td><td>Wide desktop</td><td>Content should max-width at 1440px and center, or gracefully fill the space.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>&#9855; Part 3: Accessibility QA</h3>
    <p>Accessibility is not optional. It is a legal requirement in many jurisdictions (ADA, WCAG) and it is the right thing to do. Accessible design also improves usability for ALL users, not just those with disabilities.</p>

    <table>
        <thead><tr><th>Check</th><th>Standard</th><th>Tool</th></tr></thead>
        <tbody>
            <tr><td>Color contrast: body text</td><td>4.5:1 minimum ratio against background</td><td>Stark plugin in Figma</td></tr>
            <tr><td>Color contrast: large text (18px+)</td><td>3:1 minimum ratio</td><td>Stark plugin in Figma</td></tr>
            <tr><td>Color contrast: buttons</td><td>4.5:1 button text vs button background</td><td>WebAIM Contrast Checker</td></tr>
            <tr><td>Font size: body</td><td>16px+ for body text</td><td>Visual inspection</td></tr>
            <tr><td>Font size: captions</td><td>14px+ for smallest text</td><td>Visual inspection</td></tr>
            <tr><td>Alt text planned</td><td>Every image has descriptive alt text documented</td><td>Annotations in Figma</td></tr>
            <tr><td>Focus states</td><td>Every interactive element has a visible focus ring (2px solid outline)</td><td>Design them in Figma</td></tr>
            <tr><td>Keyboard navigation flow</td><td>Tab order follows visual reading order (left to right, top to bottom)</td><td>Document in annotations</td></tr>
            <tr><td>Color not sole indicator</td><td>Do not use only color to indicate state (add icons or text too)</td><td>Visual review</td></tr>
            <tr><td>Text on images readable</td><td>Overlay or background behind text on images for contrast</td><td>Visual review</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>&#128230; Part 4: Figma to Developer Handoff</h3>
    <p>This is the most critical skill in your toolkit. A perfect design means nothing if the developer cannot understand it or find the assets they need. The handoff must be bulletproof.</p>

    <h4>Asset Export Checklist</h4>
    <table>
        <thead><tr><th>Asset</th><th>Format</th><th>Size</th><th>Naming</th></tr></thead>
        <tbody>
            <tr><td>Logo (primary)</td><td>SVG</td><td>Vector (any size)</td><td>logo-primary.svg</td></tr>
            <tr><td>Logo (white/inverted)</td><td>SVG</td><td>Vector</td><td>logo-white.svg</td></tr>
            <tr><td>Favicon</td><td>PNG</td><td>32x32, 180x180</td><td>favicon-32.png, apple-touch-icon.png</td></tr>
            <tr><td>Icons</td><td>SVG</td><td>24x24 viewbox</td><td>icon-cart.svg, icon-search.svg</td></tr>
            <tr><td>Hero images</td><td>PNG or JPG</td><td>@2x (2880px for 1440px desktop)</td><td>hero-homepage.jpg, hero-collection-serums.jpg</td></tr>
            <tr><td>Product images</td><td>JPG or WebP</td><td>2048x2048 (Shopify max)</td><td>product-vitamin-c-serum-1.jpg</td></tr>
            <tr><td>Custom graphics</td><td>PNG @2x</td><td>2x the display size</td><td>graphic-ingredients-wheel.png</td></tr>
            <tr><td>Social media icons</td><td>SVG</td><td>Vector</td><td>social-instagram.svg, social-tiktok.svg</td></tr>
        </tbody>
    </table>

    <h4>Annotation Guide</h4>
    <p>Add annotation notes directly on your Figma file. Use a dedicated annotation layer or Figma comments. Every annotation should answer: "What does this do that is not visually obvious?"</p>
    <ul>
        <li><strong>Hover States:</strong> "On hover: background color changes to #2D5016, text changes to white, 200ms ease transition"</li>
        <li><strong>Animations:</strong> "Hero image: fade in on page load, 500ms delay, 800ms duration"</li>
        <li><strong>Responsive Behavior:</strong> "This 2-column section stacks to single column on mobile (text below image)"</li>
        <li><strong>Spacing Notes:</strong> "Section padding: 80px top/bottom desktop, 48px mobile. Gap between cards: 24px desktop, 16px mobile."</li>
        <li><strong>Interactive Elements:</strong> "Accordion: click to toggle open/close. Only one section open at a time. Animate with 300ms slide-down."</li>
        <li><strong>Dynamic Content:</strong> "This section is populated by Shopify blog posts. If no posts exist, show 'Coming Soon' placeholder."</li>
    </ul>

    <h4>Dev Mode in Figma</h4>
    <p>Figma has a built-in Dev Mode that developers use to inspect your designs. It shows:</p>
    <ul>
        <li>Exact hex color codes for every element</li>
        <li>Font family, size, weight, line height, letter spacing</li>
        <li>Padding, margins, and gaps (if auto-layout is used)</li>
        <li>Border radius, shadow values, opacity</li>
        <li>CSS code snippets for selected elements</li>
    </ul>
    <p><strong>For Dev Mode to work well, YOU must:</strong></p>
    <ul>
        <li>Use named color styles (not random hex codes)</li>
        <li>Use named text styles (not one-off font settings)</li>
        <li>Use auto-layout on all components (so spacing is measured automatically)</li>
        <li>Use proper naming on all layers (so devs can find elements)</li>
    </ul>
</div>

<div class="content-section">
    <h3>&#127908; Part 5: Client Presentation Tips</h3>
    <p>Presenting your designs to the client is a skill. A great design can be killed by a poor presentation. A good design can be elevated by a confident, structured presentation.</p>

    <h4>The Presentation Structure</h4>
    <ol>
        <li><strong>Start with context:</strong> "Based on your brief and our moodboard direction, here is what I designed..."</li>
        <li><strong>Explain design decisions:</strong> "I chose this serif font for headings because it communicates the luxury feel you wanted. The green color palette reflects your organic brand values."</li>
        <li><strong>Show mobile FIRST:</strong> Most clients forget to check mobile. By showing it first, you demonstrate thoroughness and catch issues early.</li>
        <li><strong>Walk through the user flow:</strong> "Here is how a customer would experience the store: they land on the homepage, see the hero, scroll to products, click into a product page, and add to cart."</li>
        <li><strong>Ask specific questions:</strong> "Does this header feel right for your brand?" NOT "What do you think?" (vague questions get vague answers)</li>
        <li><strong>Document feedback during the call:</strong> Write down every piece of feedback. Send a summary after the call: "Here is what we agreed to change: 1. Make the hero headline larger. 2. Change CTA color to green. 3. Add one more testimonial."</li>
    </ol>

    <div class="highlight-box">
        <h4>When the Client Wants Changes You Disagree With</h4>
        <p><strong>Script:</strong> "I understand you want [their request]. I would like to suggest [your alternative] because [reason based on conversions/UX data]. Would you like to see a mockup of both options so we can compare?"</p>
        <p>This lets you push back professionally while keeping the client in control. If they still insist after seeing both options, implement their choice and document your recommendation.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128196; Part 6: Version Control</h3>
    <p>Professional version control prevents confusion and protects your work.</p>
    <ul>
        <li><strong>Naming:</strong> v1, v2, v3 (NEVER "final", "final-final", "final-v2-REVISED")</li>
        <li><strong>Archive page:</strong> Keep all previous versions in the Archive page of your Figma file</li>
        <li><strong>Change log:</strong> Brief note on what changed between versions: "v2: Updated hero image per client feedback, changed CTA color from black to green, added 2 more testimonials"</li>
        <li><strong>Figma version history:</strong> Use Figma's built-in version history (save named versions at key milestones)</li>
    </ul>
</div>

<div class="content-section">
    <h3>&#128203; Part 7: QA Sign-Off Document Template</h3>
    <p>Before final handoff, create a sign-off document that confirms the design is complete and approved.</p>

    <div class="highlight-box">
        <h4>QA Sign-Off Template</h4>
        <p><strong>Project:</strong> Luxe Botanica Shopify Store</p>
        <p><strong>Date:</strong> [Current Date]</p>
        <p><strong>Designer:</strong> [Your Name]</p>
        <p><strong>Devices/Breakpoints Tested:</strong> 375px, 414px, 768px, 1024px, 1440px, 1920px</p>
        <p><strong>QA Checklist Score:</strong> 40/40 checkpoints passed</p>
        <p><strong>Known Issues:</strong> None / [List any outstanding items]</p>
        <p><strong>Assets Exported:</strong> Logo SVG (2 variants), Favicon (2 sizes), 12 icon SVGs, 4 hero images, product images</p>
        <p><strong>Figma Link:</strong> [Share link to Figma file with Dev Mode enabled]</p>
        <p><strong>Client Approval:</strong> Approved by [Client Name] on [Date] via [email/call/Slack]</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>&#9989; HANDS-ON EXERCISE: QA &amp; Handoff</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Audit and Prepare Your Luxe Botanica File</h4>
        <ol>
            <li><strong>Step 1 &mdash; Run the Full Checklist:</strong> Go through every checkpoint in the Visual Consistency, Image Quality, Responsive Design, and Polish tables above. Check off each item for your Luxe Botanica Figma file.</li>
            <li><strong>Step 2 &mdash; Fix Inconsistencies:</strong> For every failed checkpoint, fix the issue in your Figma file. Document what you changed.</li>
            <li><strong>Step 3 &mdash; Export Assets:</strong> Export all custom assets: logo SVG (primary + white), icon SVGs, hero image PNG @2x, favicon PNGs. Organize them in a folder named "Luxe-Botanica-Assets".</li>
            <li><strong>Step 4 &mdash; Add Annotations:</strong> Add at least 10 annotation notes to your Figma file explaining hover states, responsive behavior, and interactive elements.</li>
            <li><strong>Step 5 &mdash; Create Sign-Off Document:</strong> Fill out the QA Sign-Off Template with real information from your Luxe Botanica project.</li>
        </ol>
        <p><strong>Estimated Time:</strong> 1.5-2 hours. This is meticulous work. Do not rush it.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Design QA and Handoff</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: FIGMA WORKFLOW &amp; ORGANIZATION</h2>
<p><em>Narrative: You have been designing Luxe Botanica across multiple pages and breakpoints. Without proper Figma organization, your file will become a chaotic mess that no developer can navigate and no client can review. Professional file organization is not optional &mdash; it is the foundation of efficient workflow.</em></p>

<div class="highlight-box">
    <h4>Why File Organization Matters</h4>
    <p>A messy Figma file = confused developers = wrong builds = angry clients = wasted time. When a developer opens your file and sees "Frame 432", "Rectangle 17", and "Group Copy Copy Copy", they have no idea what anything is. They guess. They build wrong. You get blamed. Professional organization is the single biggest differentiator between a junior designer and a senior designer.</p>
</div>

<div class="content-section">
    <h3>&#128194; Part 1: Figma File Structure &mdash; The 6 Essential Pages</h3>
    <p>Every Shopify project at Digital Heroes follows this exact page structure. No exceptions. This is how your Figma file should be organized.</p>

    <table>
        <thead><tr><th>Page</th><th>Contents</th><th>Who Uses It</th><th>Notes</th></tr></thead>
        <tbody>
            <tr><td><strong>&#128203; Cover</strong></td><td>Project name, status badge (In Progress / Review / Approved), date, thumbnail preview</td><td>Everyone (first impression when opening the file)</td><td>This is the first thing anyone sees. Make it professional. Include project name, client name, your name, date, and a small preview of the homepage.</td></tr>
            <tr><td><strong>Moodboard</strong></td><td>Reference screenshots, competitor analysis, client-provided examples, color/font inspiration</td><td>Client approval (early stage)</td><td>Paste screenshots of stores the client likes, color palette explorations, font pairings, and texture/pattern ideas. This page helps align expectations BEFORE you start designing.</td></tr>
            <tr><td><strong>&#127912; Style Guide</strong></td><td>Colors (all swatches with hex), fonts (all sizes and weights), spacing scale, component library</td><td>Developer handoff</td><td>This is the most important page for developers. Every color, font, and component they need is here. Think of it as the design dictionary.</td></tr>
            <tr><td><strong>&#127968; Desktop</strong></td><td>All desktop page designs at 1440px: Homepage, Product Page, Collection Page, About, Contact, Blog, Cart, etc.</td><td>Client review, Developer</td><td>Organize frames left to right in the order of the user journey: Homepage &rarr; Collection &rarr; Product &rarr; Cart &rarr; About &rarr; Contact &rarr; Blog.</td></tr>
            <tr><td><strong>&#128241; Mobile</strong></td><td>All mobile page designs at 375px: same pages as Desktop</td><td>Client review, Developer</td><td>Mirror the desktop page order. Developers will compare Desktop and Mobile pages side by side to understand responsive behavior.</td></tr>
            <tr><td><strong>&#128465;&#65039; Archive</strong></td><td>Old versions, rejected concepts, experimental ideas, client-rejected designs</td><td>Internal only</td><td>NEVER delete old work. Move it here. You may need to reference it later, or the client may change their mind and want to go back to an earlier direction.</td></tr>
        </tbody>
    </table>

    <div class="warning-box">
        <h4>&#9888;&#65039; Common Mistakes</h4>
        <p><strong>Putting everything on one page:</strong> Desktop and mobile designs jumbled together. Clients cannot find what they need. Developers cannot distinguish breakpoints.</p>
        <p><strong>No style guide page:</strong> Developers have to click through every frame to find hex codes and font sizes. This wastes hours.</p>
        <p><strong>No archive:</strong> Old designs deleted. Client says "I liked the first version better." You have nothing to show them.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#129513; Part 2: Components &amp; Variants &mdash; Your Design System</h3>
    <p>Components are the building blocks of your design. They are reusable elements that you create once and use everywhere. When you update a master component, every instance of that component updates automatically. This is the most powerful feature in Figma.</p>

    <h4>Essential Components for Luxe Botanica</h4>
    <table>
        <thead><tr><th>Component</th><th>Variants</th><th>Where Used</th></tr></thead>
        <tbody>
            <tr><td><strong>Button/Primary</strong></td><td>Default, Hover, Pressed, Disabled</td><td>"Add to Cart", "Shop Now", "Subscribe" &mdash; everywhere</td></tr>
            <tr><td><strong>Button/Secondary</strong></td><td>Default, Hover, Pressed, Disabled</td><td>"Learn More", "View All", secondary CTAs</td></tr>
            <tr><td><strong>Button/Outline</strong></td><td>Default, Hover, Pressed, Disabled</td><td>"Continue Shopping", "View Details"</td></tr>
            <tr><td><strong>Card/Product</strong></td><td>Default, Hover, Sale badge, Out of stock</td><td>Featured collection, collection grid, related products</td></tr>
            <tr><td><strong>Card/Blog</strong></td><td>Default, Hover</td><td>Blog section on homepage, blog listing page</td></tr>
            <tr><td><strong>Card/Testimonial</strong></td><td>Default (with photo, without photo)</td><td>Testimonials section</td></tr>
            <tr><td><strong>Input/Text</strong></td><td>Default, Focused, Error, Disabled</td><td>Forms: newsletter signup, contact form, search</td></tr>
            <tr><td><strong>Input/Select</strong></td><td>Default, Open, Selected</td><td>Variant selectors, filter dropdowns, sort dropdown</td></tr>
            <tr><td><strong>Input/Checkbox</strong></td><td>Unchecked, Checked, Disabled</td><td>Filter checkboxes, terms acceptance</td></tr>
            <tr><td><strong>Icon/Navigation</strong></td><td>Cart, Search, Menu, Account, Close</td><td>Header, mobile navigation</td></tr>
            <tr><td><strong>Badge/Product</strong></td><td>Sale, New, Best Seller, Sold Out</td><td>Product cards, product page</td></tr>
            <tr><td><strong>Trust/Badge</strong></td><td>Free Shipping, Money-Back, Secure, Support</td><td>Trust bar, product page, footer</td></tr>
        </tbody>
    </table>

    <h4>How to Create Button Variants</h4>
    <ol>
        <li>Design the Primary Button: rectangle with auto-layout, background color, text label, padding (16px horizontal, 12px vertical), border-radius (8px)</li>
        <li>Select the button frame and press Ctrl+Alt+K (Cmd+Option+K on Mac) to create a component</li>
        <li>Duplicate the component 3 times for Hover, Pressed, and Disabled states</li>
        <li>Modify each: Hover (darker background), Pressed (even darker + slight scale-down), Disabled (gray background, 50% opacity text)</li>
        <li>Select all 4 and use "Combine as variants" to create a Component Set</li>
        <li>Name the variant property "State" with values: Default, Hover, Pressed, Disabled</li>
    </ol>

    <div class="highlight-box">
        <h4>The Power of Components</h4>
        <p>Imagine the client says: "Change the button color from green to dark teal." Without components, you would need to find and update every single button across every page and breakpoint &mdash; potentially 50+ buttons. With components, you change the master component ONCE and all 50+ instances update automatically. This is not a convenience &mdash; it is a requirement for professional work.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#127912; Part 3: Design Tokens (Named Styles)</h3>
    <p>Design tokens are named styles that define the visual properties of your design system. They are the single source of truth for colors, typography, and effects.</p>

    <h4>Color Styles for Luxe Botanica</h4>
    <table>
        <thead><tr><th>Token Name</th><th>Hex Value</th><th>Usage</th></tr></thead>
        <tbody>
            <tr><td>Primary/Brand</td><td>#2D5016</td><td>Headers, primary buttons, links</td></tr>
            <tr><td>Primary/Brand-Light</td><td>#4A7A2E</td><td>Hover states, secondary elements</td></tr>
            <tr><td>Primary/Brand-Dark</td><td>#1E3A0E</td><td>Pressed states, dark accents</td></tr>
            <tr><td>Primary/Accent</td><td>#D4A853</td><td>Sale badges, highlights, premium accents (gold tone)</td></tr>
            <tr><td>Neutral/Background</td><td>#FFFFFF</td><td>Page background, card backgrounds</td></tr>
            <tr><td>Neutral/Surface</td><td>#F9FAFB</td><td>Alternate section backgrounds, input backgrounds</td></tr>
            <tr><td>Neutral/Border</td><td>#E5E7EB</td><td>Card borders, dividers, input borders</td></tr>
            <tr><td>Neutral/Text-Primary</td><td>#1A1A1A</td><td>Body text, headings</td></tr>
            <tr><td>Neutral/Text-Secondary</td><td>#6B7280</td><td>Captions, meta text, placeholder text</td></tr>
            <tr><td>Feedback/Error</td><td>#DC2626</td><td>Error messages, required field indicators</td></tr>
            <tr><td>Feedback/Success</td><td>#16A34A</td><td>"Added to cart" confirmations, success states</td></tr>
            <tr><td>Feedback/Sale</td><td>#DC2626</td><td>Sale prices, discount badges</td></tr>
        </tbody>
    </table>

    <h4>Text Styles for Luxe Botanica</h4>
    <table>
        <thead><tr><th>Token Name</th><th>Font</th><th>Size (Desktop / Mobile)</th><th>Weight</th><th>Line Height</th></tr></thead>
        <tbody>
            <tr><td>H1/Desktop</td><td>Playfair Display (Serif)</td><td>48px / 32px</td><td>700</td><td>1.2</td></tr>
            <tr><td>H2/Desktop</td><td>Playfair Display</td><td>36px / 26px</td><td>700</td><td>1.3</td></tr>
            <tr><td>H3/Desktop</td><td>Playfair Display</td><td>24px / 20px</td><td>600</td><td>1.3</td></tr>
            <tr><td>Body/Regular</td><td>Inter (Sans-Serif)</td><td>16px / 16px</td><td>400</td><td>1.6</td></tr>
            <tr><td>Body/Bold</td><td>Inter</td><td>16px / 16px</td><td>600</td><td>1.6</td></tr>
            <tr><td>Caption</td><td>Inter</td><td>14px / 14px</td><td>400</td><td>1.5</td></tr>
            <tr><td>Button</td><td>Inter</td><td>16px / 16px</td><td>600</td><td>1.0</td></tr>
            <tr><td>Price</td><td>Inter</td><td>20px / 18px</td><td>700</td><td>1.2</td></tr>
            <tr><td>Price/Compare</td><td>Inter</td><td>16px / 14px</td><td>400</td><td>1.2 (strikethrough)</td></tr>
        </tbody>
    </table>

    <h4>Effect Styles</h4>
    <table>
        <thead><tr><th>Token Name</th><th>CSS Equivalent</th><th>Usage</th></tr></thead>
        <tbody>
            <tr><td>Shadow/Small</td><td>0 1px 3px rgba(0,0,0,0.1)</td><td>Product cards, subtle depth</td></tr>
            <tr><td>Shadow/Medium</td><td>0 4px 12px rgba(0,0,0,0.1)</td><td>Hover states on cards, dropdowns</td></tr>
            <tr><td>Shadow/Large</td><td>0 8px 24px rgba(0,0,0,0.15)</td><td>Modals, mobile drawers, overlays</td></tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>Why Tokens Matter</h4>
        <p>Without tokens, your file has random hex codes scattered everywhere. With tokens, the developer opens your style guide and sees: "Primary/Brand = #2D5016". They use this one value everywhere. If the brand color changes, you update one token and everything updates. Tokens are the bridge between design and code.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128221; Part 4: Naming Conventions</h3>
    <p>Proper naming makes your file navigable. Improper naming makes it a nightmare.</p>

    <h4>Naming Rules</h4>
    <table>
        <thead><tr><th>Element Type</th><th>Convention</th><th>Good Example</th><th>Bad Example</th></tr></thead>
        <tbody>
            <tr><td>Frames (page sections)</td><td>Page-Section</td><td>"Home-Hero", "Product-Gallery", "Collection-FilterSidebar"</td><td>"Frame 432", "Section 1"</td></tr>
            <tr><td>Components</td><td>Type/Name</td><td>"Button/Primary", "Card/Product", "Icon/Cart"</td><td>"btn", "card1", "my button"</td></tr>
            <tr><td>Groups</td><td>Descriptive purpose</td><td>"Trust Badges", "Navigation Items", "Social Links"</td><td>"Group 12", "Group Copy"</td></tr>
            <tr><td>Images</td><td>What it shows</td><td>"Hero Background", "Product Vitamin C Serum", "Founder Photo"</td><td>"Image", "Screenshot", "Untitled"</td></tr>
            <tr><td>Variants</td><td>Property=Value</td><td>"State=Hover", "Size=Large", "Type=Sale"</td><td>"v2", "alternate", "new"</td></tr>
        </tbody>
    </table>

    <div class="warning-box">
        <h4>&#9888;&#65039; NEVER Name Layers</h4>
        <p>"Frame 432", "Rectangle 17", "Untitled", "Copy", "Copy Copy", "final-v2-FINAL-revised", "asdff", or any auto-generated Figma name. Rename EVERY layer before handoff. If a developer sees "Rectangle 17" in your file, they lose trust in the entire design.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128208; Part 5: Auto Layout &mdash; Simulating Responsive</h3>
    <p>Auto Layout is Figma's system for creating flexible, responsive components. It directly maps to CSS flexbox, making it the most developer-friendly way to build designs.</p>

    <h4>Auto Layout Properties and Their CSS Equivalents</h4>
    <table>
        <thead><tr><th>Figma Property</th><th>CSS Equivalent</th><th>When to Use</th></tr></thead>
        <tbody>
            <tr><td>Direction: Horizontal</td><td>flex-direction: row</td><td>Items side by side (button with icon + text, nav items)</td></tr>
            <tr><td>Direction: Vertical</td><td>flex-direction: column</td><td>Items stacked (card content, form fields)</td></tr>
            <tr><td>Gap</td><td>gap</td><td>Space between child items (16px between cards, 8px between icon and text)</td></tr>
            <tr><td>Padding</td><td>padding</td><td>Space inside the container (24px inside a card, 16px inside a button)</td></tr>
            <tr><td>Fill container</td><td>width: 100%</td><td>Element stretches to fill parent width (full-width buttons on mobile)</td></tr>
            <tr><td>Hug contents</td><td>width: auto</td><td>Element shrinks to fit its content (inline buttons, tags)</td></tr>
            <tr><td>Alignment</td><td>align-items, justify-content</td><td>Centering content, spacing items evenly</td></tr>
        </tbody>
    </table>

    <h4>Rules for Auto Layout</h4>
    <ul>
        <li><strong>All components should use auto layout.</strong> No exceptions. If a component does not use auto layout, the developer cannot extract reliable spacing values.</li>
        <li><strong>Fill container</strong> for elements that should stretch to full width (CTAs on mobile, input fields, section containers).</li>
        <li><strong>Hug contents</strong> for elements that should be as small as their content (tags, badges, inline buttons).</li>
        <li><strong>Use constraints</strong> for absolutely positioned elements (overlapping badges on product images, floating action buttons).</li>
    </ul>
</div>

<div class="content-section">
    <h3>&#127916; Part 6: Prototyping &mdash; Interactive Client Presentations</h3>
    <p>Static mockups do not show the full experience. Prototyping in Figma lets you create clickable flows that simulate the real store.</p>

    <h4>Essential Prototype Links for Luxe Botanica</h4>
    <ol>
        <li><strong>Homepage Hero CTA &rarr; Collection Page:</strong> Click "Shop Best Sellers" navigates to the collection page</li>
        <li><strong>Product Card &rarr; Product Page:</strong> Click any product card navigates to the product detail page</li>
        <li><strong>Add to Cart &rarr; Cart Drawer:</strong> Click "Add to Cart" opens the cart drawer overlay</li>
        <li><strong>Hamburger Icon &rarr; Mobile Drawer:</strong> Click the hamburger icon slides in the mobile navigation drawer</li>
        <li><strong>FAQ Question &rarr; Expand:</strong> Click a question expands the answer (Smart Animate)</li>
    </ol>

    <h4>Prototype Settings</h4>
    <ul>
        <li><strong>Transition:</strong> "Smart Animate" for most transitions (smooth morphing between states)</li>
        <li><strong>Duration:</strong> 300ms for most transitions, 500ms for page navigations</li>
        <li><strong>Easing:</strong> "Ease Out" for opening animations, "Ease In" for closing</li>
        <li><strong>Overflow:</strong> Enable scrolling on frames taller than the viewport</li>
        <li><strong>Starting Frame:</strong> Set the Homepage as the starting frame</li>
    </ul>

    <h4>How to Present to Clients</h4>
    <ol>
        <li>Share the prototype link (Figma &rarr; Share Prototype &rarr; Copy Link)</li>
        <li>Walk the client through the flow during a screen-share call</li>
        <li>Let the client interact with the prototype themselves after the call</li>
        <li>Collect feedback on both the visual design AND the flow experience</li>
    </ol>
</div>

<div class="content-section">
    <h3>&#128268; Part 7: Useful Figma Plugins</h3>
    <p>Plugins extend Figma's capabilities. These are the essential plugins for Shopify design work.</p>

    <table>
        <thead><tr><th>Plugin</th><th>Purpose</th><th>When to Use</th><th>Cost</th></tr></thead>
        <tbody>
            <tr><td><strong>Stark</strong></td><td>Accessibility contrast checking</td><td>Verify color contrast ratios meet WCAG AA (4.5:1)</td><td>Free tier</td></tr>
            <tr><td><strong>Unsplash</strong></td><td>Free stock photos</td><td>Insert high-quality placeholder images directly into frames</td><td>Free</td></tr>
            <tr><td><strong>Content Reel</strong></td><td>Real placeholder content</td><td>Generate realistic names, addresses, avatars for mockups</td><td>Free</td></tr>
            <tr><td><strong>Iconify</strong></td><td>Icon library</td><td>Access thousands of icons (Lucide, Feather, Material) without leaving Figma</td><td>Free</td></tr>
            <tr><td><strong>Lorem Ipsum</strong></td><td>Text generation</td><td>ONLY for wireframes. Never in final designs (use real copy!)</td><td>Free</td></tr>
            <tr><td><strong>Figma Tokens</strong></td><td>Design token management</td><td>Manage and sync design tokens across files for large projects</td><td>Free tier</td></tr>
            <tr><td><strong>Batch Styler</strong></td><td>Bulk style updates</td><td>Change font or color across multiple elements at once</td><td>Free</td></tr>
            <tr><td><strong>Autoflow</strong></td><td>User flow diagrams</td><td>Draw arrows between frames to document user flows</td><td>Free</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>&#9989; HANDS-ON EXERCISE: Organize Your Figma File</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Build the Professional Luxe Botanica File Structure</h4>
        <ol>
            <li><strong>Step 1 &mdash; Create All 6 Pages:</strong> Set up your Figma file with: Cover, Moodboard, Style Guide, Desktop, Mobile, Archive. Move your existing designs into the correct pages.</li>
            <li><strong>Step 2 &mdash; Build Component Library:</strong> Create master components for: 3 button types (Primary, Secondary, Outline), Product card, Testimonial card, Trust badge, Text input, Navigation icons.</li>
            <li><strong>Step 3 &mdash; Add Variants:</strong> For each button component, add 4 state variants: Default, Hover, Pressed, Disabled. For the product card: Default, Hover, Sale, Out of Stock.</li>
            <li><strong>Step 4 &mdash; Create Named Styles:</strong> Set up all color styles (Primary/Brand, Neutral/Background, etc.), all text styles (H1, H2, H3, Body, Caption, Button, Price), and effect styles (Shadow/Small, Shadow/Medium, Shadow/Large).</li>
            <li><strong>Step 5 &mdash; Build Style Guide Page:</strong> Create a comprehensive Style Guide page showing: all color swatches with hex codes, all text styles with examples, all components with their variants, spacing scale (8, 16, 24, 32, 48, 64, 80px).</li>
            <li><strong>Step 6 &mdash; Create Prototype:</strong> Link your pages into a clickable prototype: Homepage CTA &rarr; Collection Page &rarr; Product Card click &rarr; Product Page &rarr; Add to Cart &rarr; Cart Drawer. Use Smart Animate transitions.</li>
        </ol>
        <p><strong>Estimated Time:</strong> 2-3 hours. This is foundational work that will save you 10+ hours on future projects.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Figma Workflow</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: HANDLING DIFFICULT SITUATIONS</h2>
<p><em>Narrative: The Luxe Botanica project is going well, but a client just messaged: "I showed my design to my spouse and they hate the colors. Also, can you make the logo bigger? And I need to see 3 more completely different concepts by tomorrow." Welcome to the reality of client-facing design work. How you handle these situations defines your professionalism.</em></p>

<div class="highlight-box">
    <h4>The Professional Response Formula</h4>
    <p><strong>Acknowledge &rarr; Clarify &rarr; Educate &rarr; Propose.</strong></p>
    <p>Never react emotionally. Never argue. Never say "that is wrong." Always respond with data, professionalism, and a constructive alternative. The client is not the enemy &mdash; confusion and miscommunication are the enemies. Your job is to guide the client toward good decisions while maintaining a positive relationship.</p>
</div>

<div class="content-section">
    <h3>&#128680; Part 1: Task Priority System</h3>
    <p>When multiple requests hit you at once (and they will), use this priority system to decide what to tackle first. This is not a suggestion &mdash; it is the operating procedure at Digital Heroes.</p>

    <table>
        <thead><tr><th>Priority</th><th>Task Type</th><th>Response Time</th><th>Examples</th></tr></thead>
        <tbody>
            <tr><td><strong>P0 (Critical)</strong></td><td>Client revision requests</td><td>Within 1 hour acknowledgment, same-day delivery</td><td>Client asks for color change on approved design, fixes to live store design issues</td></tr>
            <tr><td><strong>P0 (Critical)</strong></td><td>Deadline-day deliveries</td><td>Complete by end of day</td><td>Designs due TODAY must be completed and sent</td></tr>
            <tr><td><strong>P0 (Critical)</strong></td><td>PM/Client questions</td><td>Within 1 hour</td><td>Client asks "When will the homepage be ready?" or PM asks for timeline update. Do not block decisions.</td></tr>
            <tr><td><strong>P1 (High)</strong></td><td>Active design work</td><td>Per timeline (2-3 day deadline)</td><td>Projects with deadlines in the next 2-3 days</td></tr>
            <tr><td><strong>P1 (High)</strong></td><td>Asset preparation</td><td>Per timeline</td><td>Export finals, organize files for developers</td></tr>
            <tr><td><strong>P2 (Medium)</strong></td><td>Design system updates</td><td>When available</td><td>Component library maintenance, style guide updates</td></tr>
            <tr><td><strong>P2 (Medium)</strong></td><td>Mockup refinements</td><td>When available</td><td>Polishing work that is not urgent, design explorations</td></tr>
            <tr><td><strong>P3 (Low)</strong></td><td>Inspiration and learning</td><td>Spare time</td><td>Dribbble browsing, tutorials, skill development</td></tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>Golden Rule of Priority</h4>
        <p><strong>Client-facing revisions &gt; Deadlines &gt; New designs &gt; Personal growth.</strong> A client waiting on a revision is more urgent than starting a new project. A deadline due today is more urgent than a deadline due next week. Never sacrifice client responsiveness for design exploration time.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128172; Part 2: The 8 Difficult Scenarios (With Scripts)</h3>
    <p>Each scenario below includes the situation, a word-for-word response script, and the rule to remember. Memorize these scripts &mdash; you WILL encounter every one of these situations.</p>

    <h4>Scenario 1: "Make the Logo Bigger"</h4>
    <p><strong>Situation:</strong> The most classic client request in design history. The client feels their logo should dominate the page.</p>
    <p><strong>Response Script:</strong> "I can certainly do that. However, I want to share something: on current screen sizes, a larger logo pushes the 'Shop Now' button below the fold, which data shows can lower conversions by up to 15%. The current size ensures your brand is visible while keeping the buying action front and center. Would you like to see a comparison of both sizes so we can decide together?"</p>
    <p><strong>Rule:</strong> Acknowledge &rarr; Explain Consequence (with data) &rarr; Recommend &rarr; Offer to show both options. Never just say "no."</p>

    <h4>Scenario 2: "I'll Know It When I See It"</h4>
    <p><strong>Situation:</strong> Client cannot articulate what they want. They expect you to read their mind and keep producing options until something clicks.</p>
    <p><strong>Response Script:</strong> "I completely understand &mdash; sometimes it is easier to react to something visual. Let me show you 3 different design directions. For each one, please point to specific elements you like and specific elements you do not like. This will help me understand your vision much faster."</p>
    <p><strong>Rule:</strong> Always use moodboards and examples before designing. Force specificity by showing options. Never design blind &mdash; always have reference material approved before starting.</p>

    <h4>Scenario 3: Client Wants to Use Their Own "Design"</h4>
    <p><strong>Situation:</strong> Client provides a terrible sketch, a Word document layout, or a Canva mockup and wants you to implement it exactly as-is.</p>
    <p><strong>Response Script:</strong> "Thank you for sharing your vision! I love [find one specific element to praise &mdash; even if it is just the color choice]. I would like to suggest some enhancements that will improve the conversion rate and mobile experience. Can I show you some options that build on your concept?"</p>
    <p><strong>Rule:</strong> Find elements to praise. Suggest enhancements, not replacements. If they insist on a bad design, implement it but document your recommendation in writing to the PM. Never mock a client's creative effort.</p>

    <h4>Scenario 4: Too Many Cooks (Multiple Stakeholders)</h4>
    <p><strong>Situation:</strong> Client has a partner, spouse, friend, and business advisor all giving conflicting feedback. "My wife likes blue, but my partner wants red, and my friend said the layout should be completely different."</p>
    <p><strong>Response Script:</strong> "I appreciate all the feedback! To keep us on timeline and ensure we move forward efficiently, could you consolidate the feedback into one unified document? Ideally, one person makes the final call on design direction. This ensures we stay on schedule and avoid conflicting revisions."</p>
    <p><strong>Rule:</strong> Request ONE point of contact for design feedback. Escalate to PM if feedback chaos continues. Do not implement contradictory changes &mdash; wait for consolidated direction.</p>

    <h4>Scenario 5: Design That Will Not Convert</h4>
    <p><strong>Situation:</strong> Client insists on a busy design with hidden CTAs, auto-playing music, a Flash-era animated intro, or other UX decisions that will kill conversions.</p>
    <p><strong>Response Script:</strong> "I want to share some data: studies show that pages with a clear, single CTA convert 150% better than pages with competing elements. Your current request may impact sales negatively. I recommend [your alternative] because it keeps the focus on the buying action. Would you like me to show you how this would look?"</p>
    <p><strong>Rule:</strong> Advise with data, not opinion. If they insist after seeing the data, implement their choice but document your recommendation in writing. You did your job by advising &mdash; the final decision is theirs.</p>

    <h4>Scenario 6: Endless Revision Requests</h4>
    <p><strong>Situation:</strong> Client keeps asking for "just one more tweak" long after the agreed revision rounds are complete. Each revision spawns three more requests.</p>
    <p><strong>Response Script:</strong> "I appreciate your attention to detail! We have completed the included revision rounds for this project. I will check with the PM about options for additional design work so we can continue refining."</p>
    <p><strong>Rule:</strong> Track every revision. Route additional requests through the PM. Additional rounds = additional quote. Never silently absorb unlimited revision work &mdash; it devalues your time and creates unsustainable expectations.</p>

    <h4>Scenario 7: Client Disapproves of Everything</h4>
    <p><strong>Situation:</strong> Nothing you show is ever right. Every presentation receives negative feedback with no constructive direction. "I do not like it. Try again."</p>
    <p><strong>Response Script:</strong> "Help me understand what specifically is not working. Is it the layout structure, the color palette, the typography, or the imagery? Can you show me 2-3 examples of designs you love from other stores? This will help me align with your vision much more effectively."</p>
    <p><strong>Rule:</strong> Get specifics. Vague criticism = no actionable feedback. If the client cannot articulate what they want after multiple attempts, escalate to PM. Sometimes the issue is not the design &mdash; it is the brief or the client's expectations.</p>

    <h4>Scenario 8: Low-Quality Assets</h4>
    <p><strong>Situation:</strong> Client sends blurry iPhone photos as "product images", a 200px wide logo screenshot, and Word Art text as their brand elements.</p>
    <p><strong>Response Script:</strong> "To achieve premium results, I need high-resolution assets. Specifically: Logo in SVG or PNG format with transparent background, product photos minimum 2000px wide with good lighting, and brand fonts if you have custom ones. The current assets will appear pixelated on the final design, especially on retina screens and mobile devices. Would you be able to provide updated files?"</p>
    <p><strong>Rule:</strong> Do not compromise quality. Do not proceed with bad assets hoping to fix them later. Request proper files before designing. If the client does not have professional assets, discuss options: stock photography, AI-generated images (Nano Banana), or a photography package add-on.</p>
</div>

<div class="content-section">
    <h3>&#128683; Part 3: Bonus Scenarios</h3>

    <h4>Client Wants Free Design Concepts Before Ordering</h4>
    <p><strong>Situation:</strong> A prospect asks "Can you show me what you would design first? Then I will decide if I want to hire you."</p>
    <p><strong>Response:</strong> Route to Sales immediately. "We do not create custom designs before project confirmation. Our portfolio demonstrates our quality and design approach. Once the project is confirmed, you will receive dedicated design concepts tailored to your brand."</p>
    <p><strong>Rule:</strong> NEVER do spec work. It devalues the entire profession. Your portfolio speaks for itself. If a client insists on free work before paying, they are not the right client.</p>

    <h4>Managing Scope Creep</h4>
    <p><strong>Situation:</strong> "Can you also design the email templates? And maybe a few social media posts? Oh, and the packaging design too?"</p>
    <p><strong>Response:</strong> "I would love to help with that! Those items are outside the current project scope. Let me check with the PM about adding them to the project or creating a separate quote. I want to make sure we deliver everything at the quality you deserve."</p>
    <p><strong>Rule:</strong> Always route additional requests through the PM. Document everything in writing. Be helpful and positive, but protect project boundaries. Scope creep kills profitability and timelines.</p>

    <h4>"Just Make It Pop"</h4>
    <p><strong>Situation:</strong> Client provides vague, subjective feedback that is impossible to act on. "It needs more oomph." "Make it pop." "It needs to feel more premium."</p>
    <p><strong>Response:</strong> "I want to make sure I deliver exactly what you are envisioning. When you say 'make it pop', are you referring to: (A) Brighter, more contrasting colors? (B) Larger, bolder typography? (C) More visual elements and imagery? (D) More whitespace and breathing room? Could you show me an example of a website that 'pops' for you?"</p>
    <p><strong>Rule:</strong> Translate vague feedback into specific, actionable design choices. Always ask for reference examples. "Show me what you mean" is the most powerful question in design.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>&#9989; HANDS-ON EXERCISE: Write Professional Responses</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Practice Your Response Scripts</h4>
        <p>Write professional responses (using the Acknowledge &rarr; Clarify &rarr; Educate &rarr; Propose formula) for each of these 5 scenarios:</p>
        <ol>
            <li><strong>Scenario A:</strong> Client says "I do not like any of these colors, try something else" but gives no specifics about what colors they DO want or what they dislike about the current palette.</li>
            <li><strong>Scenario B:</strong> Client's spouse joins a review call and contradicts everything the client previously approved. The spouse says "Start over from scratch."</li>
            <li><strong>Scenario C:</strong> Client sends 5 blurry iPhone photos of their products as "the product images for the store." The photos are poorly lit, have messy backgrounds, and are under 500px wide.</li>
            <li><strong>Scenario D:</strong> Client asks for the 8th round of revisions on the homepage hero. Each time, the feedback is minor ("move that 2px left", "try a slightly different shade of green").</li>
            <li><strong>Scenario E:</strong> Client says "Just make it pop" and "I want it to feel more premium" but cannot articulate what specifically needs to change.</li>
        </ol>
        <p><strong>Format for each response:</strong> Write 3-5 sentences. Include: acknowledgment, clarifying question or data point, and a proposed next step.</p>
        <p><strong>Estimated Time:</strong> 30-45 minutes. Practice these out loud &mdash; you will use them in real calls.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.1)); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">Client Feedback Translation Guide</h3>
    <p>Clients rarely say exactly what they mean in design terms. Learn to translate their feedback into actionable design changes:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.2);">
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">What Client Says</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">What They Actually Mean</th>
                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">What To Do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It does not pop"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Needs more contrast or color vibrancy</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Increase saturation, add bold accent color, check contrast ratios on CTAs</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It looks too busy"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Too many elements competing for attention</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add white space, reduce number of colors, simplify sections, increase padding</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It feels cheap"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lacks premium visual cues</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add spacing, upgrade typography, use high-quality images, apply 5 Laws of Premium</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Make the logo bigger"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">They want more brand presence</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Keep logo appropriate size, add brand colors and elements throughout the design instead</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"I do not like it"</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Need to dig deeper for specifics</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ask: "What specifically feels off? Colors? Layout? Images? Typography?"</td>
            </tr>
        </tbody>
    </table>

    <p><strong>Golden Rule:</strong> Never take vague feedback at face value. Always translate it into specific, measurable design actions. The best question you can ask is: "Can you show me an example of what you mean?"</p>
</div>

<div class="content-section">
    <h3>Common Design Problems &amp; Fixes</h3>
    <p>These are the most common issues our designers encounter on live projects. Learn to diagnose and fix them quickly:</p>

    <div class="warning-box" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <h4 style="color: #F59E0B; margin-top: 0;">Problem: Store Looks "Template-y"</h4>
        <p><strong>Cause:</strong> Default theme settings, stock photos, generic fonts</p>
        <p><strong>Fix:</strong></p>
        <ol>
            <li>Customize every section with brand colors -- no default theme colors visible</li>
            <li>Use unique typography pairings (not the theme default fonts)</li>
            <li>Replace stock photos with brand imagery or AI-generated lifestyle shots</li>
            <li>Add custom icons and subtle micro-animations to interactive elements</li>
        </ol>
    </div>

    <div class="warning-box" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <h4 style="color: #F59E0B; margin-top: 0;">Problem: Mobile Layout Broken</h4>
        <p><strong>Cause:</strong> Fixed widths, large images, non-responsive elements</p>
        <p><strong>Fix:</strong></p>
        <ol>
            <li>Test on real devices, not just browser resize -- emulators miss real-world issues</li>
            <li>Use percentage widths, not fixed pixel values</li>
            <li>Ensure images have max-width: 100%</li>
            <li>Test all touch targets are 44px minimum</li>
        </ol>
    </div>

    <div class="warning-box" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <h4 style="color: #F59E0B; margin-top: 0;">Problem: Images Look Blurry</h4>
        <p><strong>Cause:</strong> Low resolution source files, improper sizing</p>
        <p><strong>Fix:</strong></p>
        <ol>
            <li>Request 2x resolution from client (2000px wide for 1000px display area)</li>
            <li>Use Shopify's image_url filter with proper sizing parameters</li>
            <li>Never upscale small images -- use AI tools like Nano Banana to generate alternatives</li>
            <li>Use WebP format for better quality at smaller file size</li>
        </ol>
    </div>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.08); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">When to Push Back on Client Requests</h3>
    <p>As a professional designer, you have a responsibility to protect the client from design decisions that will hurt their business. Politely push back if a client requests any of the following:</p>

    <ul style="line-height: 2;">
        <li><strong style="color: #EF4444;">Neon colors on white background</strong> -- Hurts readability, looks unprofessional, fails accessibility standards</li>
        <li><strong style="color: #EF4444;">Auto-playing music</strong> -- Instant bounce. Users close tabs immediately. Never do this under any circumstances.</li>
        <li><strong style="color: #EF4444;">Flashing or blinking elements</strong> -- Outdated, unprofessional, and can trigger seizures in photosensitive users (accessibility violation)</li>
        <li><strong style="color: #EF4444;">Tiny fonts (under 14px)</strong> -- Accessibility issue that loses customers and Google penalizes it for mobile SEO</li>
        <li><strong style="color: #EF4444;">50+ different colors</strong> -- No brand consistency. Maximum 5 colors in the system following the 60-30-10 rule.</li>
    </ul>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">The Push-Back Script:</strong>
        <p style="margin: 10px 0 0 0;">"I understand you want that, and I appreciate the creative direction. However, our experience shows it can actually hurt conversions and user experience. Here is a better alternative that achieves the same goal while protecting your sales numbers..."</p>
        <p style="margin-top: 10px;"><strong>Rule:</strong> Always offer an alternative. Never just say "no." Show them what WILL work, backed by data or examples from successful stores.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Handling Difficult Situations</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task13Content = `
<h2>📚 TASK 13: AI &amp; TOOLS FOR BRANDING</h2>
<p><em>Narrative: The Luxe Botanica Figma designs are nearly complete, but the client does not have professional photography or polished copy yet. Rather than waiting weeks for a photoshoot, you will use AI tools to generate stunning product shots, compelling copy, and brand assets. AI is your superpower &mdash; not your replacement.</em></p>

<div class="highlight-box">
    <h4>AI is Your Superpower, Not Your Replacement</h4>
    <p>AI handles the tedious, time-consuming work so you can focus on creative decisions, client relationships, and design strategy. AI can generate product photography, write compelling copy, and create mood imagery in minutes. But YOU make the final call on every design decision. AI suggests &mdash; you curate, refine, and decide. The designer who masters AI tools will be 3-5x more productive than one who does not.</p>
</div>

<div class="content-section">
    <h3>&#128248; Part 1: Nano Banana &mdash; AI Product Photography</h3>
    <p>Nano Banana is an AI tool that generates realistic product photography from basic product images. For Luxe Botanica, this is a game-changer because the client may not have the budget for a professional photoshoot.</p>

    <h4>What Nano Banana Can Generate</h4>
    <table>
        <thead><tr><th>Shot Type</th><th>Description</th><th>Use Case</th></tr></thead>
        <tbody>
            <tr><td><strong>Lifestyle Shots</strong></td><td>Product in real-world context: on a bathroom shelf, next to a mirror, in a spa setting</td><td>Hero banners, About page, brand story sections</td></tr>
            <tr><td><strong>Flat Lays</strong></td><td>Overhead arrangement with complementary items: botanical leaves, water droplets, marble surfaces</td><td>Collection headers, social media, newsletter headers</td></tr>
            <tr><td><strong>Model Shots</strong></td><td>Product held by a hand, being applied to skin, in use</td><td>Product page gallery, testimonial sections</td></tr>
            <tr><td><strong>Seasonal Variations</strong></td><td>Same product styled for summer (bright, fresh), holiday (festive, warm), spring (floral, light)</td><td>Seasonal homepage banners, limited-edition promotions</td></tr>
            <tr><td><strong>Background Variations</strong></td><td>Same product on different surfaces: marble, wood, fabric, minimalist white, botanical greenery</td><td>Product page thumbnails, A/B testing different aesthetics</td></tr>
        </tbody>
    </table>

    <h4>Step-by-Step Nano Banana Workflow</h4>
    <ol>
        <li><strong>Upload Product Image:</strong> Start with the best available product image (even an iPhone photo on white background)</li>
        <li><strong>Select Scene Type:</strong> Choose from lifestyle, flat lay, model, or custom scene</li>
        <li><strong>Customize Setting:</strong> For Luxe Botanica &mdash; select "Spa/Wellness" or "Natural/Botanical" themes</li>
        <li><strong>Adjust Lighting:</strong> Soft, natural lighting for premium feel. Avoid harsh direct lighting.</li>
        <li><strong>Generate Variations:</strong> Generate 5-10 variations and select the best ones</li>
        <li><strong>Download High-Res:</strong> Download at maximum resolution for print-quality results</li>
        <li><strong>Touch Up (if needed):</strong> Minor adjustments in Canva or Photoshop for perfect results</li>
    </ol>

    <div class="highlight-box">
        <h4>When to Use AI Photography</h4>
        <p><strong>Use it when:</strong> Client does not have professional photography budget, you need lifestyle imagery fast, you need seasonal or promotional variations quickly.</p>
        <p><strong>Do not use it when:</strong> Client has professional photography (always prefer real photos), for close-up product detail shots where accuracy is critical, without telling the client. <strong>Always disclose AI-generated images to the client.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>&#127912; Part 2: Midjourney for Branding</h3>
    <p>Midjourney excels at generating creative, artistic imagery that sets the brand mood. For Luxe Botanica, it can create hero concepts, textures, and brand aesthetic imagery.</p>

    <h4>Midjourney Prompt Examples for Luxe Botanica</h4>
    <table>
        <thead><tr><th>Purpose</th><th>Prompt</th><th>Key Flags</th></tr></thead>
        <tbody>
            <tr><td>Hero Banner Concept</td><td>"luxury skincare flat lay, cream tubes and botanical ingredients on white marble surface, natural soft lighting, minimalist editorial style, premium feel"</td><td>--ar 16:9 --v 6 --q 2</td></tr>
            <tr><td>Texture / Pattern</td><td>"seamless organic marble texture with gold veins, luxury feel, subtle and elegant"</td><td>--ar 1:1 --tile --v 6</td></tr>
            <tr><td>Botanical Pattern</td><td>"botanical line art pattern, eucalyptus leaves and lavender, minimalist, luxury skincare brand aesthetic"</td><td>--ar 1:1 --tile --v 6</td></tr>
            <tr><td>Brand Mood Image</td><td>"woman in white robe applying face cream, spa bathroom, natural light through window, serene and premium"</td><td>--ar 4:3 --v 6 --q 2</td></tr>
            <tr><td>Collection Header</td><td>"organic skincare ingredients arranged beautifully, aloe vera, vitamin c, rosehip oil, top down, clean white background"</td><td>--ar 21:9 --v 6</td></tr>
            <tr><td>Social Media</td><td>"luxury skincare product surrounded by fresh green botanicals, instagram aesthetic, soft focus background"</td><td>--ar 1:1 --v 6</td></tr>
        </tbody>
    </table>

    <h4>Midjourney Prompt Tips</h4>
    <ul>
        <li><strong>--ar</strong> (aspect ratio): Always specify. 16:9 for hero banners, 1:1 for product images, 4:3 for featured images, 9:16 for stories</li>
        <li><strong>--v 6</strong> (version): Use the latest version for best quality</li>
        <li><strong>--q 2</strong> (quality): Higher quality, slower generation. Use for final images.</li>
        <li><strong>--tile</strong>: Creates seamless tileable patterns (great for backgrounds and textures)</li>
        <li><strong>--no</strong> (negative prompt): Exclude elements. Example: "--no text, --no logo" to keep images clean</li>
        <li><strong>Style keywords:</strong> "editorial", "minimalist", "luxury", "premium", "soft lighting", "natural" &mdash; these steer the aesthetic</li>
    </ul>

    <div class="warning-box">
        <h4>&#9888;&#65039; Midjourney Limitations</h4>
        <p>Midjourney CANNOT generate specific brand logos, exact product replicas, or accurate text. Never use Midjourney for: logo design (use Figma/Illustrator), product shots that need to be accurate (use Nano Banana or real photography), or any image with text on it (AI text is almost always garbled). Always disclose AI-generated imagery to your client.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128172; Part 3: AI for Copy &mdash; Never Use Lorem Ipsum</h3>
    <div class="highlight-box">
        <h4>The No-Lorem-Ipsum Rule</h4>
        <p>Lorem Ipsum is dead. AI can generate real, usable copy in seconds. Real copy in your designs leads to: better client feedback (they react to actual words, not placeholder text), more realistic presentations, faster development (developers can use the copy directly), and better design decisions (real text has different lengths than placeholder text).</p>
    </div>

    <h4>AI Copy Prompts for Luxe Botanica</h4>
    <table>
        <thead><tr><th>Content Type</th><th>AI Prompt</th><th>Expected Output</th></tr></thead>
        <tbody>
            <tr><td>Product Description</td><td>"Write a luxury product description for an organic vitamin C serum targeting women 25-40, 150 words, persuasive and benefit-focused tone. Brand name: Luxe Botanica."</td><td>Compelling description emphasizing results, ingredients, and luxury feel</td></tr>
            <tr><td>Hero Headlines</td><td>"Write 5 hero banner headlines for a premium organic skincare brand called Luxe Botanica. Max 8 words each. Focus on transformation and natural beauty."</td><td>5 options like "Radiant Skin Starts With Nature"</td></tr>
            <tr><td>CTA Button Text</td><td>"Give me 10 add-to-cart button text alternatives for a luxury skincare store. Beyond just 'Add to Cart'."</td><td>Options like "Add to Ritual", "Start Your Glow", "Treat Your Skin"</td></tr>
            <tr><td>About Page</td><td>"Write a brand story for Luxe Botanica, a premium organic skincare company founded by a dermatologist who wanted to combine science with nature. 200 words, warm and authentic tone."</td><td>Engaging brand narrative</td></tr>
            <tr><td>FAQ Answers</td><td>"Write answers for these 5 FAQ questions for Luxe Botanica skincare: [list questions]. Keep answers concise (2-3 sentences each), friendly, and confidence-building."</td><td>Clear, helpful FAQ content</td></tr>
            <tr><td>Collection Descriptions</td><td>"Write a 2-sentence description for each of these skincare collections: Serums, Moisturizers, Cleansers, Sets. Premium tone, benefit-focused."</td><td>Short, punchy collection descriptions</td></tr>
        </tbody>
    </table>

    <p><strong>Important:</strong> AI-generated copy is a starting point. Always review, edit, and refine the output. Check for accuracy, tone consistency, and brand voice alignment. The client should approve all final copy.</p>
</div>

<div class="content-section">
    <h3>&#127912; Part 4: AI for Color &amp; Typography Decisions</h3>
    <p>AI can help you make informed color and typography decisions, especially when starting a new project from scratch.</p>

    <h4>Useful AI Prompts</h4>
    <ul>
        <li><strong>Color Palette:</strong> "Suggest a 5-color palette for a premium organic skincare brand targeting women 25-40. Include hex codes, usage guidelines (primary, secondary, accent, background, text), and the psychology behind each color choice."</li>
        <li><strong>Font Pairing:</strong> "What font pairings work for a luxury/editorial Shopify store? I need a serif for headings and a sans-serif for body text. Suggest 5 pairings available on Google Fonts with reasons for each."</li>
        <li><strong>Competitive Analysis:</strong> "What design elements do the top 10 skincare Shopify stores have in common? List specific patterns in layout, color, typography, and imagery."</li>
        <li><strong>Trend Analysis:</strong> "What are the current ecommerce design trends for premium beauty brands? Focus on layout patterns, color trends, and interactive elements."</li>
    </ul>

    <div class="warning-box">
        <h4>&#9888;&#65039; Always Validate AI Suggestions</h4>
        <p>AI does not always understand the full context of a project. It may suggest colors that do not meet accessibility contrast ratios, fonts that are not available on Shopify, or trends that are already outdated. Use AI as a brainstorming partner, but validate every suggestion against your design knowledge and project requirements.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128444;&#65039; Part 5: AI Image Generation for Store Assets</h3>
    <p>Beyond product photography, AI can generate a wide range of store assets.</p>

    <table>
        <thead><tr><th>Asset</th><th>AI Tool</th><th>Notes</th></tr></thead>
        <tbody>
            <tr><td>Hero Banners</td><td>Midjourney</td><td>Lifestyle imagery with product integration. Use --ar 16:9 for desktop hero.</td></tr>
            <tr><td>Collection Headers</td><td>Midjourney</td><td>Themed images per collection (e.g., fresh botanicals for Serums, soft textures for Moisturizers).</td></tr>
            <tr><td>About Page Imagery</td><td>Midjourney</td><td>Brand story visuals: founder concept, lab/nature imagery, ingredient close-ups.</td></tr>
            <tr><td>Blog Featured Images</td><td>Midjourney</td><td>Topic-relevant imagery for each blog post (skincare tips, ingredient spotlights).</td></tr>
            <tr><td>Social Media Content</td><td>Canva + Midjourney</td><td>Instagram posts, story templates, promotional graphics.</td></tr>
            <tr><td>Background Textures</td><td>Midjourney (--tile)</td><td>Seamless patterns for section backgrounds, email headers.</td></tr>
            <tr><td>Product Mockups</td><td>Nano Banana</td><td>Realistic product shots in various settings without a photoshoot.</td></tr>
        </tbody>
    </table>

    <div class="highlight-box">
        <h4>Transparency with Clients</h4>
        <p>Always disclose AI-generated images to the client. Explain: "I used AI to generate these lifestyle images for the mockup. For the final store, we recommend either: (A) keeping the AI images (they look great), (B) replacing with professional photography for maximum authenticity, or (C) a mix of both." Let the client decide.</p>
    </div>
</div>

<div class="content-section">
    <h3>&#128295; Part 6: Essential Design Tools Stack</h3>
    <p>These are the core tools every Digital Heroes designer should know. Mastering this toolkit makes you fast, efficient, and capable of handling any Shopify design project.</p>

    <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Purpose</th><th>When to Use</th><th>Cost</th></tr></thead>
        <tbody>
            <tr><td><strong>Figma</strong></td><td>Design</td><td>UI design, mockups, prototypes, design systems</td><td>Full page mockups, client presentations, component libraries, developer handoff</td><td>Free tier available</td></tr>
            <tr><td><strong>Coolors.co</strong></td><td>Color</td><td>Color palette generation and exploration</td><td>Creating harmonious color schemes from brand colors, exploring complementary palettes</td><td>Free</td></tr>
            <tr><td><strong>Google Fonts</strong></td><td>Typography</td><td>Font library with web-safe fonts</td><td>Selecting font pairings, verifying web availability, testing font combinations</td><td>Free</td></tr>
            <tr><td><strong>TinyPNG</strong></td><td>Optimization</td><td>Image compression without quality loss</td><td>Compressing ALL images before uploading to Shopify. Every. Single. Image.</td><td>Free</td></tr>
            <tr><td><strong>Unsplash / Pexels</strong></td><td>Photography</td><td>Free high-quality stock photos</td><td>Lifestyle images, placeholders when client has none, moodboard imagery</td><td>Free</td></tr>
            <tr><td><strong>Remove.bg / PhotoRoom</strong></td><td>Editing</td><td>Background removal from images</td><td>Product photos needing transparent backgrounds, creating product cutouts</td><td>Free tier</td></tr>
            <tr><td><strong>Canva</strong></td><td>Graphics</td><td>Quick social graphics, banners, presentations</td><td>Fast hero image edits, announcement banners, social media posts, client presentations</td><td>Free tier</td></tr>
            <tr><td><strong>Relume</strong></td><td>Wireframing</td><td>AI-powered wireframe generation</td><td>Rapid prototyping during discovery phase, generating layout ideas from text descriptions</td><td>Paid</td></tr>
            <tr><td><strong>Nano Banana</strong></td><td>AI Photography</td><td>AI-generated product photography</td><td>When client lacks professional photos, creating lifestyle product shots, seasonal variations</td><td>Paid</td></tr>
            <tr><td><strong>Midjourney</strong></td><td>AI Images</td><td>Creative imagery generation</td><td>Hero concepts, textures, moodboard imagery, brand aesthetic exploration</td><td>Paid</td></tr>
            <tr><td><strong>Shopify Theme Editor</strong></td><td>Implementation</td><td>Live store design customization</td><td>All theme customizations, section editing, color/font application to live store</td><td>Included with Shopify</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>&#129302; Part 7: ChatGPT Prompts for Designers</h3>
    <p>ChatGPT is not just for copy. It is a versatile design thinking partner. Here are specific prompt categories and examples.</p>

    <h4>Design Inspiration and Trends</h4>
    <ul>
        <li>"What are the current ecommerce design trends for premium beauty brands?"</li>
        <li>"Analyze what makes Apple's product page design feel premium. List specific design techniques."</li>
        <li>"Compare the design approaches of Glossier, Drunk Elephant, and Tatcha Shopify stores. What do they have in common?"</li>
    </ul>

    <h4>UX and Conversion Optimization</h4>
    <ul>
        <li>"How can I make this homepage more conversion-focused? Current structure: hero, products, about, newsletter, footer."</li>
        <li>"What trust elements should every product page have? List them in order of importance."</li>
        <li>"What are the biggest UX mistakes in skincare ecommerce stores? How do I avoid them?"</li>
    </ul>

    <h4>Client Communication</h4>
    <ul>
        <li>"How should I respond to a client who wants to use Comic Sans on their luxury skincare store?"</li>
        <li>"Write a professional email explaining why the client's logo should not be bigger on the homepage."</li>
        <li>"Draft a design presentation script for presenting a Shopify homepage to a client for the first time."</li>
    </ul>

    <h4>Competitive Analysis</h4>
    <ul>
        <li>"What design elements do the top skincare Shopify stores have in common?"</li>
        <li>"Analyze the color psychology used by luxury skincare brands online."</li>
        <li>"What makes a Shopify product page convert at 3%+ instead of 1%?"</li>
    </ul>

    <h4>Accessibility</h4>
    <ul>
        <li>"How do I make my Shopify design WCAG AA compliant? List the key requirements."</li>
        <li>"What color contrast ratio do I need for body text, headings, and buttons?"</li>
        <li>"Design an accessible color palette for a luxury skincare brand that meets WCAG AA standards."</li>
    </ul>
</div>

<div class="content-section">
    <h3>&#128640; Part 8: Relume for Wireframing</h3>
    <p>Relume is an AI-powered wireframing tool that generates layout concepts from text descriptions. It is excellent for the early discovery phase when you need to explore layouts quickly.</p>

    <h4>How Relume Works</h4>
    <ol>
        <li>Describe your page in natural language: "I need a homepage for a premium skincare brand with hero, featured products, brand story, testimonials, and newsletter signup"</li>
        <li>Relume generates a wireframe layout with sections, content areas, and visual hierarchy</li>
        <li>Export the wireframe to Figma as a starting point</li>
        <li>Customize heavily &mdash; the AI output is a foundation, never a final design</li>
    </ol>

    <h4>When to Use Relume</h4>
    <ul>
        <li><strong>Discovery Phase:</strong> Rapidly explore 3-5 layout options for a client presentation</li>
        <li><strong>Wireframing:</strong> Generate low-fidelity wireframes in minutes instead of hours</li>
        <li><strong>Inspiration:</strong> See how AI interprets a page description &mdash; sometimes it suggests section orders you would not have considered</li>
    </ul>

    <div class="warning-box">
        <h4>&#9888;&#65039; Relume Limitations</h4>
        <p>NEVER use Relume output as-is for a client delivery. It is a wireframe starting point only. The AI does not understand your specific brand, your color palette, your typography choices, or your client's unique requirements. Always customize extensively in Figma before presenting to anyone.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>&#9989; HANDS-ON EXERCISE: AI-Powered Design Workflow</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Build a Brand Asset Kit for Luxe Botanica Using AI</h4>
        <ol>
            <li><strong>Step 1 &mdash; AI Copy Generation:</strong> Use ChatGPT to generate 5 hero headlines for Luxe Botanica (max 8 words each, focus on transformation and natural beauty). Save the best 2.</li>
            <li><strong>Step 2 &mdash; Product Description:</strong> Use ChatGPT to generate a product description for "Vitamin C Brightening Serum" (150 words, luxury tone, benefit-focused). Edit and refine the output.</li>
            <li><strong>Step 3 &mdash; AI Product Photography:</strong> Use Nano Banana (or describe the process if you do not have access) to generate 5 product shots of a skincare serum in different settings: marble surface, bathroom shelf, botanical flat lay, model holding product, minimalist white background.</li>
            <li><strong>Step 4 &mdash; Midjourney Hero Concept:</strong> Write a Midjourney prompt for a Luxe Botanica hero banner image. Include: subject description, lighting, mood, style keywords, and aspect ratio flag. Generate the concept (or document the exact prompt you would use).</li>
            <li><strong>Step 5 &mdash; Social Media Asset:</strong> Use Canva to create a Luxe Botanica Instagram post using AI-generated or stock imagery. Include the brand name, a headline, and product image. Size: 1080x1080px.</li>
            <li><strong>Step 6 &mdash; Brand Asset Kit Page:</strong> Create a new page in your Figma file called "Brand Assets". Organize all generated content: hero headlines, product descriptions, AI product photos, hero banner concept, social media template. This becomes a reusable resource for the entire team.</li>
        </ol>
        <p><strong>Estimated Time:</strong> 1.5-2 hours. Focus on quality over quantity &mdash; 5 excellent assets are better than 20 mediocre ones.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(22, 33, 62, 0.9)); border: 2px solid rgba(244, 114, 182, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">Success Story: The Button That Made $10,000</h3>
    <p>A client's "Add to Cart" button was the same color as the background -- barely visible. Our designer made ONE change: a high-contrast, bold button with subtle hover animation.</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 10px; text-align: center;">
            <p style="color: #9CA3AF; margin-bottom: 5px;">BEFORE</p>
            <p style="font-size: 2em; color: #EF4444; font-weight: bold; margin: 10px 0;">1.2%</p>
            <p style="color: #9CA3AF;">Conversion Rate</p>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; text-align: center;">
            <p style="color: #9CA3AF; margin-bottom: 5px;">AFTER</p>
            <p style="font-size: 2em; color: #10B981; font-weight: bold; margin: 10px 0;">2.8%</p>
            <p style="color: #9CA3AF;">Conversion Rate</p>
        </div>
    </div>

    <p>That single button change generated an extra <strong style="color: #FCD34D;">$10,000 in revenue that month.</strong></p>
    <p><em>The lesson: Every pixel matters. The smallest design decision can have massive business impact. You are not just placing elements on a screen -- you are engineering revenue.</em></p>
</div>

<div class="content-section" style="background: rgba(244, 114, 182, 0.05); border: 1px solid rgba(244, 114, 182, 0.2); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F9A8D4; margin-top: 0;">Productivity Hacks for Designers</h3>
    <p>Work smarter, not just harder. These habits separate efficient designers from ones who are always behind on deadlines:</p>

    <ul style="line-height: 2.2; list-style: none; padding: 0;">
        <li><strong style="color: #F472B6;">2-Minute Rule:</strong> If a design task takes less than 2 minutes, do it immediately. Do not add it to a list. Quick fixes, color changes, small alignment corrections -- just do them now.</li>
        <li><strong style="color: #A78BFA;">Template Everything:</strong> Save time with reusable Figma components. Every button, card, section header, and trust badge should be a component you can drop in instantly.</li>
        <li><strong style="color: #818CF8;">Batch Similar Tasks:</strong> Do all wireframes together, then all mockups, then all exports. Context-switching between different types of work wastes enormous mental energy.</li>
        <li><strong style="color: #60A5FA;">90-Minute Blocks:</strong> Deep design work happens in focused 90-minute sessions, then take a 15-minute break. Your creativity degrades sharply after 90 minutes without rest.</li>
        <li><strong style="color: #34D399;">No Notifications During Creative Work:</strong> Turn off Slack, email, and phone notifications during your focused design blocks. Respond during breaks. One interruption can cost 23 minutes of refocusing time.</li>
    </ul>

    <div style="text-align: center; margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px;">
        <p style="font-size: 1.1em; color: #F472B6; font-weight: 600; margin: 0;">"Today, I create experiences that delight users and drive business results. Every design decision is intentional."</p>
        <p style="color: #9CA3AF; margin-top: 10px; margin-bottom: 0;">-- Start each day with this mindset</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Designer Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1: Mindset
    { question: "What is the primary goal of Ecommerce Design?", options: ["To win awards", "To be unique", "To use nice colors", "To Sell (Conversion)"], correct: 3 },
    {
        question: "Why should you care about a 2px misalignment?",
        options: ["It destroys subconscious trust", "Nobody sees it", "It's fine", "Pixels don't matter"],
        correct: 0
    },
    // Task 2: Laws
    {
        question: "What does Whitespace communicate?",
        options: ["Emptiness", "Luxury and focus", "Laziness", "Budget"],
        correct: 1
    },
    { question: "The 'Squint Test' checks for...", options: ["Colors", "Eye sight", "Visual Hierarchy", "Reading level"], correct: 2 },
    // Task 3: Color
    { question: "What is the 60-30-10 Rule?", options: ["A diet", "Pricing model", "Layout grid", "Color distribution: 60% Base, 30% Brand, 10% Action"], correct: 3 },
    { question: "Which color represents Trust?", options: ["Blue", "Red", "Black", "Yellow"], correct: 0 },
    // Task 4: Typography
    { question: "Max recommended font families?", options: ["10", "2", "5", "Unlimited"], correct: 1 },
    { question: "Minimum font size for Mobile body text?", options: ["12px", "10px", "16px", "14px"], correct: 2 },
    // Task 5: Spacing
    { question: "Why use an 8px grid?", options: ["It saves data", "Random is better", "Apple does it", "Creates visual rhythm and consistency"], correct: 3 },
    // Task 6: Trust
    { question: "What makes a review credible?", options: ["Photos, Verified Badges, and Star Icons", "Just text", "Anonymous name", "Fake dates"], correct: 0 },
    // Task 8: Mobile
    {
        question: "Minimum touch target size?",
        options: ["20px", "44px", "10px", "100px"],
        correct: 1
    },
    { question: "What is the Thumb Zone?", options: ["A game", "The top left corner", "The area easily reachable with one hand on mobile", "The back"], correct: 2 },
    // Task 9: Handoff
    { question: "The designer's job ends...", options: ["When the Figma file is sent", "Immediately", "When paid", "After QAing the developed site"], correct: 3 },
    // Task 10: Figma
    {
        question: "Why use Components?",
        options: ["To update instances globally from one master", "To complicate things", "To use more RAM", "No reason"],
        correct: 0
    },
    // Task 11: Feedback
    { question: "Client says 'Make logo bigger'. You say...", options: ["No.", "Explain the data-backed consequence (Pushing CTA down)", "Yes immediately.", "Ignore"], correct: 1 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy — this aligns with industry best practices and ensures consistent results across different project types"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Half-day salary deduction", "Verbal warning for the first time", "Written warning recorded in your file", "No consequence if it's less than 30 minutes late"], c: 0 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself", "Ignore it — it's not your problem — this is the industry-standard position backed by conventional practice", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 0 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Everyone including interns", "Full-time employees after 1 year — this is the standard approach most teams follow", "Senior developers and team leads primarily", "Those with exceptional KPI scores — this is the standard approach most teams follow"], c: 0 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As an ally whose problem is your common enemy — listen, understand, collaborate", "As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As someone who should be transferred to management"], c: 0 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "No specific requirement as long as you're online", "25 Mbps", "10+ Mbps"], c: 3 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "10-15% increment for meeting expectations", "No increment and placed on a Performance Improvement Plan (PIP)", "Verbal warning but salary stays the same"], c: 2 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — maintaining goodwill protects the long-term relationship and future revenue", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "60 days", "14 days", "30 days"], c: 3 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "A rough guideline to review monthly — this is the recommended approach based on current platform documentation and expert consensus", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A reference document primarily for new employees during onboarding"], c: 2 }
];

const task2Quiz = [
    { q: "At Digital Heroes, the '5 Laws of Premium Design' exist because:", o: ["They're industry-standard rules that every agency follows to maintain basic design quality across projects — experienced professionals recognize this as the most reliable path for maintaining quality control", "Premium design directly correlates to client retention, higher pricing, and agency revenue — a cheap-looking design destroys trust and costs the company $50,000/day in potential revenue", "They're optional guidelines for senior designers while junior designers can follow their own design instincts", "They only apply to Shopify designs — non-Shopify projects at Digital Heroes follow different design standards"], c: 1 },
    { q: "A client says 'I want my website to look like Apple's.' At Digital Heroes, your response process is:", o: ["Analyze what specifically appeals to them (minimalism, typography, spacing), propose a design that captures that essence while being unique to their brand, document rationale, and get PM approval before proceeding", "Copy Apple's design pixel-for-pixel since the client explicitly asked for it and that's the fastest path to approval — this approach balances thoroughness with efficiency which is critical for agency-level project delivery", "Tell the client that copying Apple isn't possible and they need to lower their expectations for their budget", "Use an Apple-inspired Shopify theme template without modifications since it already captures the aesthetic they want"], c: 0 },
    { q: "Zero Tolerance for Careless Mistakes means:", o: ["Designers should never make any mistakes — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Mistakes are acceptable if the overall design is good", "Pixel-perfect work counts — this is the standard approach most teams follow", "Inconsistent fonts, misaligned elements, and wrong colors are career killers — they signal incompetence to clients"], c: 3 },
    { q: "Mobile-First is NOT Optional because:", o: ["70%+ of e-commerce traffic comes from mobile — designing desktop-first means 70% of users get a compromised experience", "Responsive design is the latest trend — this ensures compliance with professional standards and prevents cascading issues downstream", "Google mandates mobile-first indexing — this reflects the standard operating procedure most organizations follow", "Mobile screens are easier to design for — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The Digital Heroes Design Standard requires:", o: ["Following the latest design trends", "Premium quality that makes store owners proud enough to show it off — high standard is your personal brand", "Matching competitor design quality", "Using only Figma for all design work"], c: 3 },
    { q: "A designer delivers a homepage where the CTA button blends into the background. This is:", o: ["A subtle, elegant design choice — this reflects the standard operating procedure most organizations follow", "A problem on mobile devices — this is the standard approach most teams follow", "Acceptable if the rest of the design is strong", "A conversion-killing mistake — CTAs must visually dominate because they directly drive revenue"], c: 3 },
    { q: "WHY does carelessness in design cost more than just aesthetics?", o: ["It primarily affects visual appeal — this reflects the standard operating procedure most organizations follow", "Design tools auto-correct most issues — experienced professionals recognize this as the most reliable path for maintaining quality control", "Clients rarely notice small mistakes — this is the industry-standard position backed by conventional practice", "Revision rounds cost time AND money — a sloppy first delivery means lost trust, extra work, and reduced profit margins"], c: 3 },
    { q: "The Interconnected Chain positions designers as:", o: ["Independent artists who work alone — this reflects the standard operating procedure most organizations follow", "Responsible for color and layout — this is the standard approach most teams follow", "Less important than developers — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "The visual translator between brand strategy and customer experience — design bridges sales promises and actual UX"], c: 3 },
    { q: "A client says 'Make it pop.' The professional designer's response is:", o: ["Add more colors and effects — this reflects the standard operating procedure most organizations follow", "Add drop shadows and gradients everywhere — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "'That's a vague request' — this reflects the standard operating procedure most organizations follow", "Ask clarifying questions: 'What specifically should stand out? The CTA? The product? Let me show you options.'"], c: 3 },
    { q: "Implementation Task: The impact calculation shows designers that:", o: ["They're just making things look nice — research supports this methodology as the most effective for achieving measurable improvements", "Senior designers affect business metrics — this is the standard approach most teams follow", "Speed of delivery is more important than quality", "Their decisions directly affect conversion rates, revenue, and client retention — design is a business function, not art"], c: 3 }
];

const task3Quiz = [
    { q: "The Digital Heroes design QA checklist before client handoff requires:", o: ["Full responsive testing (desktop, tablet, mobile), cross-browser checks, accessibility audit, performance impact review, and PM sign-off — the 60-point QA gate is non-negotiable", "A quick visual scan on your own laptop — if it looks good on your screen, it'll look good on all devices and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Only mobile testing since 80% of traffic is mobile and desktop users can tolerate minor design inconsistencies", "The developer handles QA after receiving the design files — design QA is not the designer's responsibility"], c: 0 },
    { q: "At Digital Heroes, design iterations for a client are:", o: ["Unlimited — keep revising until the client is happy, even if it takes 20 rounds since client satisfaction is absolute and ensures long-term sustainability across deliverables", "Structured: 2-3 rounds are standard, with clear scope defined upfront. Additional rounds require PM approval and scope discussion — unlimited revisions kill profitability", "Not allowed — the first design presented should be final since you're a professional who should get it right immediately", "Handled by a different designer each time to bring fresh perspective and reduce individual bias in the process"], c: 1 },
    { q: "Law 3: Hierarchy Guides the Eye. Without visual hierarchy, a product page:", o: ["Confuses visitors — they don't know what to look at first, reducing time on page and conversions", "Looks clean and minimal — this reflects the standard operating procedure most organizations follow", "Lets customers explore freely — this reflects the standard operating procedure most organizations follow", "Is more accessible for all users — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Hierarchy Check implementation: The three levels of visual hierarchy on a product page should be:", o: ["Logo → Navigation → Footer — this reflects the standard operating procedure most organizations follow", "Banner → Blog Section → Newsletter — this reflects the standard operating procedure most organizations follow", "Product Image → Price/CTA → Descriptions/Reviews — eyes should follow the conversion path", "Header → Body → Sidebar — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Whitespace doesn't mean 'empty space' — it means:", o: ["Breathing room that gives important elements visual weight and makes content scannable", "Unused areas that waste screen real estate — this reflects the standard operating procedure most organizations follow", "White-colored backgrounds only — this reflects the standard operating procedure most organizations follow", "Areas without text or images — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A client asks you to 'fill up the empty space' on a premium jewelry store homepage. You should:", o: ["Add more products to fill the gaps — this reflects the standard operating procedure most organizations follow", "Add decorative elements to fill space — applying this principle consistently across all projects builds a reputation for professional excellence", "Comply immediately — client is always right", "Educate them: whitespace IS the design — it makes their jewelry look premium, removing it makes it look like a flea market"], c: 3 },
    { q: "Consistency applies to:", o: ["EVERYTHING — fonts, colors, button styles, spacing, icon styles, image formatting — every element must follow the system", "Font choices across the store — this is the standard approach most teams follow and ensures long-term sustainability and ensures long-term sustainability across your deliverables", "The homepage design — this is the standard approach most teams follow", "Colors and nothing else — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "The 5 Laws of Premium work together because:", o: ["Whitespace + consistency + hierarchy + color + typography create a unified premium experience — violating ANY one breaks the illusion", "They're independent rules for different situations — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "2-3 need to be followed for good results — this is the standard approach most teams follow", "They're guidelines, not strict rules — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "Visual hierarchy is achieved through:", o: ["Using many colors — this reflects the standard operating procedure most organizations follow", "Size contrast, color contrast, and strategic positioning — bigger + bolder + higher = more important", "Making everything the same size for equality", "Adding animations to important elements"], c: 2 },
    { q: "A store design passes the '5-second test' when:", o: ["Users can read all the text in 5 seconds — understanding why this works helps prevent the same category of problems from recurring in the future", "The page loads in 5 seconds — this reflects the standard operating procedure most organizations follow", "A visitor knows what the store sells and where to click within 5 seconds — hierarchy guides instant comprehension", "Users can find the search bar in 5 seconds — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task4Quiz = [
    { q: "Your Figma design uses a custom font the client loves, but it costs $500/year. At Digital Heroes, you should:", o: ["Present the font cost to the PM upfront, propose a comparable free alternative (Google Fonts), and let the client make an informed decision — hidden costs erode client trust", "Use the font and let the client discover the cost later — the design approval is more important than font licensing details and ensures long-term sustainability across deliverables", "Always use free fonts only — Digital Heroes never recommends paid fonts regardless of design quality impact", "Download the font from a free piracy site since the client shouldn't have to pay for fonts in their project budget"], c: 0 },
    { q: "Industry Psychology: A health/wellness store using RED as primary color fails because:", o: ["Red signals danger/urgency/appetite — health/wellness needs green/blue for calm, trust, and nature associations", "Red is an ugly color for stores — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Red is too common in e-commerce — this reflects the standard operating procedure most organizations follow", "Red loads slower on browsers — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Using black, white, and gold for a luxury brand is effective because:", o: ["These are the most popular colors — this reflects the standard operating procedure most organizations follow", "They provide the best contrast ratios — the reasoning behind this connects directly to broader principles of professional service delivery", "Black = sophistication, white = cleanliness, gold = premium/exclusivity — the color combination signals high-end positioning", "Black and gold are trending this year — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Palette Builder implementation: You create a palette for a children's toy store. The best approach is:", o: ["Use 60% black for sophistication — this reflects the standard operating procedure most organizations follow", "Monochromatic scheme for consistency — this aligns with industry best practices and ensures consistent results across different project types", "Pastel colors primarily for soft appeal — this reflects the standard operating procedure most organizations follow", "Bright, playful primaries (yellow, blue, red) with high contrast — matching the fun, energetic, trustworthy feel children's brands need"], c: 3 },
    { q: "The 10% accent color should be used for:", o: ["Background areas and large sections — this reflects the standard operating procedure most organizations follow", "Text content and paragraphs — this reflects the standard operating procedure most organizations follow", "CTAs and conversion elements — the accent draws maximum attention to the action you want users to take", "Header and footer backgrounds — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A fashion store uses 8 different colors with no dominant palette. The problem is:", o: ["Visual noise — without a clear 60-30-10 structure, nothing stands out and the store feels chaotic and cheap", "Stores can't use many colors — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Fashion allows unlimited colors — this reflects the standard operating procedure most organizations follow", "3 colors are allowed in e-commerce — this is the standard approach most teams follow"], c: 0 },
    { q: "Blue is the most-used color in FinTech/banking because:", o: ["Blue is universally liked — this reflects the standard operating procedure most organizations follow", "Blue is the cheapest color to print — this reflects the standard operating procedure most organizations follow", "Blue psychologically signals trust, security, and reliability — critical emotions for financial products", "Banking regulations require blue — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The 60% dominant color is typically used for:", o: ["CTA buttons and links", "Backgrounds, large surfaces, and overall visual tone — it sets the mood of the entire store", "Headlines and important text", "Product image borders"], c: 0 },
    { q: "Color contrast accessibility: A light yellow CTA on a white background fails because:", o: ["Yellow is not a professional color — this is the industry-standard position backed by conventional practice", "Yellow CTAs never convert well — this is the industry-standard position backed by conventional practice", "Insufficient contrast ratio makes the CTA invisible to many users — accessibility and conversions both suffer", "White backgrounds should primarily use dark CTAs — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 2 },
    { q: "Choosing colors based on 'what looks nice' instead of psychology is wrong because:", o: ["Personal preference is actually the best guide", "All colors perform equally in testing — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Color psychology is pseudoscience — this reflects the standard operating procedure most organizations follow", "Color triggers subconscious emotional responses — the RIGHT colors build trust and drive action, wrong colors repel"], c: 3 }
];

const task5Quiz = [
    { q: "A developer implements your design but the spacing and colors don't match the Figma file. At Digital Heroes, the process is:", o: ["Accept the developer's version — pixel-perfect implementation isn't realistic and small differences don't matter and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Document the discrepancies with screenshots comparing Figma vs live, submit a QA report via the standard process, and work with the developer to fix deviations — the interconnected chain requires each link to deliver precisely", "Publicly call out the developer in the team Discord channel so everyone knows who is responsible for the mismatch", "Fix it yourself directly in the code since waiting for the developer to fix design issues takes too long"], c: 1 },
    { q: "At Digital Heroes, the design handoff to developers must include:", o: ["Just the Figma link — developers should figure out spacing, colors, and interactions from the visual design alone and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Exported assets, component specifications, interaction notes, responsive breakpoint guidelines, and a walkthrough meeting — incomplete handoffs create the exact bugs QA catches later", "Only the mobile mockup — developers can extrapolate the desktop version from the mobile design since they should know responsive principles", "Screenshots in an email — Figma access is only for designers and developers don't need to inspect design files"], c: 1 },
    { q: "Type Pairing: Combining two very similar sans-serif fonts (e.g., Arial and Helvetica) is wrong because:", o: ["Similar fonts always clash — following this approach consistently ensures predictable outcomes across all scenarios", "Serif + sans-serif pairings work — this is the standard approach most teams follow", "They create visual tension — the similarity is noticeable but provides no contrast, looking like a mistake rather than a choice", "You should use three fonts instead of two similar ones — this is the recommended approach based on current platform documentation and expert consensus"], c: 2 },
    { q: "Line height for body text should be:", o: ["1.4-1.6 — enough breathing room for comfortable reading without text feeling disconnected", "1.0 — tight for a compact look — this reflects the standard operating procedure most organizations follow", "2.0+ — maximum spacing for luxury feel", "Whatever the font default provides — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Heading font: Playfair Display (serif) + Body font: Inter (sans-serif) works because:", o: ["The contrast between decorative serif headings and clean sans-serif body creates clear hierarchy and visual interest", "They're both popular Google Fonts — this reflects the standard operating procedure most organizations follow", "Serif and sans-serif always pair well — following this approach consistently ensures predictable outcomes across all scenarios", "They have similar x-heights — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Font weight for CTAs should be:", o: ["Bold/semi-bold — CTA text must command attention and be instantly readable at any size", "Light/thin for elegance — this reflects the standard operating procedure most organizations follow", "Regular weight like body text — this reflects the standard operating procedure most organizations follow", "Extra-bold/black for maximum impact — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Using Comic Sans on a luxury store destroys credibility because:", o: ["Comic Sans is technically a bad font — implementing this correctly requires understanding the full context of how each element interacts", "Custom fonts work for luxury brands — this is the standard approach most teams follow", "Comic Sans has poor rendering on Shopify — this reflects the standard operating procedure most organizations follow", "Font choice signals brand positioning — playful, childish fonts contradict luxury messaging at a subconscious level"], c: 3 },
    { q: "Letter-spacing (tracking) for uppercase headings should be:", o: ["Slightly increased (0.5-1.5px) — uppercase letters without tracking look cramped and hard to read", "Zero — uppercase letters don't need adjustment", "Decreased for compact appearance — this reflects the standard operating procedure most organizations follow", "Adjusted for serif typefaces — this is the standard approach most teams follow"], c: 0 },
    { q: "Maximum characters per line for body text should be:", o: ["As many as the container allows — this reflects the standard operating procedure most organizations follow", "100+ characters for maximum content density", "50-75 characters — beyond this, readers lose their place when moving to the next line", "30 characters for easy scanning — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A store uses 4 different fonts: one for headings, one for body, one for navigation, one for buttons. The fix is:", o: ["Reduce to 2 fonts and use weight/size variations for differentiation — fewer fonts, more cohesion", "Remove all but one font for consistency — this reflects the standard operating procedure most organizations follow", "Add a 5th font for the footer — this reflects the standard operating procedure most organizations follow", "Keep all 4 if they're from the same family — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task6Quiz = [
    { q: "The 8px System means all spacing values must be:", o: ["Multiples of 8 (8, 16, 24, 32, 48, 64...) — creating mathematical harmony and visual consistency", "Exactly 8 pixels everywhere — following this approach consistently ensures predictable outcomes across all scenarios", "Between 1-8 pixels — this reflects the standard operating procedure most organizations follow", "8px minimum spacing — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Responsive Breakpoints priority: Which screen size gets designed FIRST?", o: ["Desktop (1440px) — the largest canvas", "All sizes simultaneously in responsive mode — this reflects the standard operating procedure most organizations follow", "Tablet (768px) — the middle ground — this reflects the standard operating procedure most organizations follow", "Mobile (375px) — because 70%+ of traffic is mobile, design FOR them first then scale up"], c: 3 },
    { q: "Spacing Audit implementation: A product grid has 12px gaps between cards on desktop. On mobile this becomes:", o: ["8px — smaller screens need proportionally smaller gaps while maintaining the 8px system", "The same 12px — consistency matters and ensures long-term sustainability across your deliverables", "0px — maximize product display on mobile", "24px — more breathing room on mobile and ensures long-term sustainability"], c: 0 },
    { q: "Section padding using the 8px system: 47px padding is wrong because:", o: ["47 is not a multiple of 8 — it should be 48px (6×8), maintaining the mathematical grid system", "47px is too small for section padding — this reflects the standard operating procedure most organizations follow", "Odd numbers create rendering issues — this reflects the standard operating procedure most organizations follow", "Section padding should always be 64px — following this approach consistently ensures predictable outcomes across all scenarios"], c: 0 },
    { q: "Why does the 8px system create better designs than arbitrary spacing?", o: ["Mathematical consistency creates subconscious visual harmony — users FEEL the order even without knowing why", "It's faster to calculate — this reflects the standard operating procedure most organizations follow", "It's required by Shopify themes — this reflects the standard operating procedure most organizations follow", "All design schools teach this system — taking this route minimizes risk while still delivering professional-grade results to stakeholders"], c: 0 },
    { q: "Responsive breakpoint at 768px (tablet): A 4-column product grid should become:", o: ["2 columns — maintaining comfortable product cards while adapting to the narrower viewport", "Still 4 columns — tablets are wide enough", "1 column — simplify for touch devices", "3 columns — split the difference — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Touch targets on mobile must be minimum:", o: ["24px — compact design — this reflects the standard operating procedure most organizations follow", "No minimum — depends on the element", "32px — standard for most devices — this reflects the standard operating procedure most organizations follow", "44px × 44px — Apple's HIG standard for comfortable thumb tapping, preventing misclicks"], c: 3 },
    { q: "Vertical rhythm in a page uses the 8px system to:", o: ["Create predictable, harmonious spacing between headings, paragraphs, images, and sections — visual metronome", "Make the page exactly 8 sections tall — this ensures compliance with professional standards and prevents cascading issues downstream", "Align all elements to an 8px grid primarily horizontally", "Applies to text spacing — this is the standard approach most teams follow"], c: 0 },
    { q: "A layout has perfect desktop spacing but everything overlaps on mobile. This means:", o: ["Mobile browsers are unreliable — this reflects the standard operating procedure most organizations follow", "The theme is broken — this reflects the standard operating procedure most organizations follow", "Fixed pixel widths were used instead of responsive units — the layout wasn't truly responsive", "Mobile users won't notice overlapping elements"], c: 2 },
    { q: "Container max-width on desktop should be:", o: ["100% of the screen — use all available space and ensures long-term sustainability across your deliverables", "800px for readability — this reflects the standard operating procedure most organizations follow", "1200-1440px with auto-margins — preventing content from stretching uncomfortably on ultra-wide monitors", "No max-width — bigger screens should show more content and ensures long-term sustainability"], c: 2 }
];

const task7Quiz = [
    { q: "Social Proof Design: Reviews displayed with star ratings convert better than text-only reviews because:", o: ["Stars are more colorful — this reflects the standard operating procedure most organizations follow", "Star ratings improve page load speed — experienced professionals recognize this as the most reliable path for maintaining quality control", "Google requires star ratings — this reflects the standard operating procedure most organizations follow", "Visual stars provide instant quality assessment — visitors scan ratings in milliseconds vs reading full text"], c: 3 },
    { q: "CTA Psychology: A green 'Add to Cart' button on a green-themed store fails because:", o: ["The CTA blends into the brand colors — the 10% accent color rule says CTAs must CONTRAST with the dominant palette", "Green is a bad CTA color — this reflects the standard operating procedure most organizations follow", "Green means 'go' which is confusing — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "All CTAs should be orange — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Trust signals placement: Trust badges (SSL, payment logos, guarantees) should appear:", o: ["Near the CTA and checkout — trust signals placed where purchase anxiety peaks reduce cart abandonment", "In the footer — this is the standard approach most teams follow", "On the About Us page — this is the standard approach most teams follow", "In the header alongside the logo — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "CTA button text: 'Submit' vs 'Get My Free Guide' — the second wins because:", o: ["It has more words — this reflects the standard operating procedure most organizations follow", "Longer CTAs always perform better — following this approach consistently ensures predictable outcomes across all scenarios", "'Submit' is grammatically incorrect — this reflects the standard operating procedure most organizations follow", "It communicates the benefit of clicking — value-driven CTA text outperforms generic labels by 3-5x"], c: 3 },
    { q: "Social proof design principle: 'Above the fold' placement of review count ('★★★★★ 2,847 Reviews') works because:", o: ["It fills empty space in the hero section — research supports this methodology as the most effective for achieving measurable improvements", "It provides immediate credibility before the visitor scrolls — first impression trust shortens the decision journey", "Review counts should primarily appear on product pages", "Above-the-fold content doesn't affect conversions"], c: 1 },
    { q: "CTA button size should be:", o: ["As large as possible for maximum visibility — this reflects the standard operating procedure most organizations follow", "Small and subtle for elegance — this reflects the standard operating procedure most organizations follow", "Large enough to be prominent but proportional to the design — oversized CTAs look desperate and spammy", "Exactly 200px × 50px on all pages — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Trust-building through design: A clean, well-organized checkout page vs a cluttered one:", o: ["Both convert equally if the product is good — applying this principle consistently across all projects builds a reputation for professional excellence", "Clean checkout reduces anxiety and cart abandonment — visual clutter at checkout triggers 'this looks sketchy' instinct", "Cluttered checkouts show more trust signals — this reflects the standard operating procedure most organizations follow", "Checkout design doesn't affect conversion rates"], c: 1 },
    { q: "Urgency triggers ('Only 3 left!') in design should:", o: ["Be fake — always show low stock numbers — following this approach consistently ensures predictable outcomes across all scenarios", "Be the largest element on the product page — this reflects the standard operating procedure most organizations follow", "Only appear when TRUE — false urgency destroys long-term trust when customers discover the lie", "Never be used — urgency is manipulative — this is the industry-standard position backed by conventional practice"], c: 2 },
    { q: "Photo vs illustration for trust: Product photos with real people using the product convert better because:", o: ["Photos load faster than illustrations — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Google ranks pages with photos higher — this reflects the standard operating procedure most organizations follow", "Real people create emotional connection and prove the product exists — illustrations feel less authentic for e-commerce", "Illustrations are more expensive to create — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The combination of social proof + CTA psychology creates:", o: ["Visual clutter on the page — this reflects the standard operating procedure most organizations follow", "A trust-then-action sequence — reviews build confidence, well-designed CTA captures the moment of conviction", "Redundant messaging — this reflects the standard operating procedure most organizations follow", "Slower page load times — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability"], c: 1 }
];

const task8Quiz = [
    { q: "Homepage Anatomy: The hero section's #1 job is:", o: ["Show a beautiful image — this reflects the standard operating procedure most organizations follow", "Communicate the value proposition and guide visitors to the primary CTA within 3-5 seconds", "Display the brand logo prominently — this reflects the standard operating procedure most organizations follow", "Show as many products as possible — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Product page design: The product image should take what percentage of above-the-fold space?", o: ["25% — leave room for description — this reflects the standard operating procedure most organizations follow", "50-60% — the image IS the product experience online, it must dominate", "100% — full-screen images only — this reflects the standard operating procedure most organizations follow", "30% — focus on text content — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Collection page design: Filter functionality placement should be:", o: ["Hidden in a dropdown menu — this reflects the standard operating procedure most organizations follow", "Prominently visible with clear filter categories — users who filter have 3x higher conversion rates", "At the bottom of the page after products — this reflects the standard operating procedure most organizations follow", "Available on mobile — this is the standard approach most teams follow"], c: 1 },
    { q: "About page design mistake: A wall of text with no images or visual breaks:", o: ["Shows the brand has a lot to say — this reflects the standard operating procedure most organizations follow", "Is standard for professional brands — understanding why this works helps prevent the same category of problems from recurring in the future", "Kills engagement — about pages need brand photography, team photos, and visual storytelling to build emotional connection", "Works fine if the copy is compelling — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Cart page design must include:", o: ["The list of products — this is the standard approach most teams follow", "Related products taking up most of the space — the reasoning behind this connects directly to broader principles of professional service delivery", "A newsletter signup form — this reflects the standard operating procedure most organizations follow", "Product thumbnails, quantity editors, subtotal, clear CTA, and trust signals — every element reduces abandonment"], c: 3 },
    { q: "Blog page design: Long paragraphs without images or visual breaks:", o: ["Show content depth and authority — this reflects the standard operating procedure most organizations follow", "Cause readers to bounce — visual content every 300 words maintains engagement and improves readability", "Are standard for professional blogs — this reflects the standard operating procedure most organizations follow", "Are preferred by SEO algorithms — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Product page: Multiple product images vs single image:", o: ["Single image is cleaner and more professional", "Three images maximum is the standard — this aligns with industry best practices and ensures consistent results across different project types", "The hero image matters — this is the standard approach most teams follow", "Multiple angles + lifestyle shots + zoom capability dramatically increase purchase confidence"], c: 3 },
    { q: "Footer design should include:", o: ["The copyright notice — this is the standard approach most teams follow", "Navigation links, contact info, trust badges, social links, newsletter signup — the footer is the last chance to engage", "A duplicate of the header — this reflects the standard operating procedure most organizations follow", "As little as possible for clean design — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 1 },
    { q: "Homepage featured products section: Showing 20 products in a grid is:", o: ["Overwhelming — curate 4-8 best sellers that represent brand quality, with a 'View All' link", "Great — more choices mean more sales", "Standard e-commerce practice — this reflects the standard operating procedure most organizations follow", "Appropriate for stores with 100+ products — this is the standard approach most teams follow"], c: 0 },
    { q: "Contact page usability: A form with 15 required fields will:", o: ["Capture comprehensive customer information — this reflects the standard operating procedure most organizations follow", "Cause massive drop-off — each additional form field reduces completion rates, keep it to 3-5 essential fields", "Show the company is thorough — this reflects the standard operating procedure most organizations follow", "Be necessary for proper CRM integration — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 1 }
];

const task9Quiz = [
    { q: "Mobile-First Deep Dive: Designing for 375px width first, then scaling up to 1440px is better than the reverse because:", o: ["It's faster to design small screens — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "All users are on iPhone 12 (375px) — this reflects the standard operating procedure most organizations follow", "Google ranks mobile-first designs higher — this reflects the standard operating procedure most organizations follow", "Expanding a focused, constraint-driven mobile design is easier than cramming a sprawling desktop design into mobile"], c: 3 },
    { q: "Mobile navigation: A hamburger menu with 15 items deep is:", o: ["Standard for stores with many categories — this reflects the standard operating procedure most organizations follow", "Users are familiar with hamburger menus — this is the recommended approach based on current platform documentation and expert consensus", "The best way to organize large inventories — this reflects the standard operating procedure most organizations follow", "Poor UX — deep menus cause frustration, prioritize top 5-7 items with clear categories, not endless dropdown levels"], c: 3 },
    { q: "Mobile product images: Pinch-to-zoom on product photos is:", o: ["Nice-to-have but not essential — this is the industry-standard position backed by conventional practice", "Bad for performance — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Critical — mobile shoppers can't physically touch products, zoom is the closest substitute for in-store inspection", "Useful for clothing stores — this is the standard approach most teams follow"], c: 2 },
    { q: "Mobile CTA: Having the 'Add to Cart' button below the fold (requires scrolling) means:", o: ["Users naturally scroll to find it — this reflects the standard operating procedure most organizations follow", "Scrolling increases engagement with the page — this reflects the standard operating procedure most organizations follow", "Below-the-fold CTAs are standard on mobile — this reflects the standard operating procedure most organizations follow", "Lost conversions — the primary CTA must be visible without scrolling or use a sticky CTA bar on mobile"], c: 3 },
    { q: "Mobile font sizes: Desktop heading at 48px should typically become on mobile:", o: ["48px — maintain consistency — this reflects the standard operating procedure most organizations follow", "16px — text should be small on mobile", "28-32px — proportionally scaled to the smaller viewport while remaining impactful", "12px — compact mobile design — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Thumb zone on mobile: Interactive elements should be placed:", o: ["At the top of the screen for visibility — implementing this correctly requires understanding the full context of how each element interacts", "Bottom center of the screen where thumbs naturally rest — reducing hand strain and improving tap accuracy", "Anywhere — mobile users use both hands", "The sides of the screen for easy access — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Mobile checkout: A 5-step checkout (Shipping → Billing → Summary → Payment → Confirm) should become:", o: ["Still 5 steps — thoroughness prevents errors", "Single-page or 2-step checkout — on mobile, each additional step increases abandonment by 10%+", "3 steps maximum as a compromise — this reflects the standard operating procedure most organizations follow", "More steps for security perception — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Mobile pop-ups covering the full screen are:", o: ["Effective for capturing attention — this reflects the standard operating procedure most organizations follow", "Standard marketing practice on mobile — this reflects the standard operating procedure most organizations follow", "Penalized by Google AND hated by users — mobile pop-ups must be small, dismissible, and non-intrusive", "Necessary for newsletter signups — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Loading skeleton screens (grey blocks while loading) are better than spinners on mobile because:", o: ["They use less code — this reflects the standard operating procedure most organizations follow", "Skeleton screens reduce actual load time — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Spinners are outdated — this reflects the standard operating procedure most organizations follow", "They show layout structure immediately — users perceive the page as faster because content appears to be 'loading in'"], c: 3 },
    { q: "Mobile image optimization: A 4MB hero image on mobile causes:", o: ["Beautiful display quality — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Affects users with old phones — this is the standard approach most teams follow", "No issue on modern 5G networks — this reflects the standard operating procedure most organizations follow", "3-5 second load delays that lose 40%+ of mobile visitors — images must be compressed and served in responsive sizes"], c: 3 }
];

const task10Quiz = [
    { q: "Design QA: Checking a store at exactly 375px, 768px, and 1440px is:", o: ["Sufficient for all devices — this reflects the standard operating procedure most organizations follow", "Excessive — two breakpoints are enough", "The industry standard set of breakpoints — this reflects the standard operating procedure most organizations follow", "Incomplete — also test at 320px, 414px, 1024px, and in-between sizes where breakpoint bugs hide"], c: 3 },
    { q: "Handoff to developer: Providing a Figma file without annotations means:", o: ["Clean, minimal handoff — this reflects the standard operating procedure most organizations follow", "Developers can extract specs from Figma directly", "Developer guesswork — missing specs for spacing, colors, interactions, hover states leads to wrong implementation", "Annotations slow down the development process — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 2 },
    { q: "Design QA catches: CTA button text says 'Click Here' on a mobile site. The issue is:", o: ["'Click' is primarily for desktop — mobile should say 'Tap'", "'Click Here' is a vague, non-descriptive CTA — should communicate value like 'Shop Now' or 'Get Started'", "'Here' is grammatically incorrect — this reflects the standard operating procedure most organizations follow", "There's no issue with this CTA text — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Cross-browser testing: A design looks perfect in Chrome but broken in Safari. This means:", o: ["Safari is a bad browser — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Browser rendering differences exist — testing across Chrome, Safari, Firefox, and Edge is mandatory for QA", "Chrome compatibility matters — this is the standard approach most teams follow", "Apple needs to fix Safari — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Handoff documentation should include:", o: ["The Figma link — this is the standard approach most teams follow", "Fonts used, color hex codes, spacing specs, interaction states, responsive behavior notes, and asset exports", "A verbal explanation is sufficient — this reflects the standard operating procedure most organizations follow", "Just screenshots of the design — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Design QA: Images with no alt text fail QA for:", o: ["Visual reasons — this reflects the standard operating procedure most organizations follow", "Performance reasons only — this reflects the standard operating procedure most organizations follow", "Accessibility (screen readers) AND SEO (Google image indexing) — double penalty for a single oversight", "Legal compliance only — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability"], c: 2 },
    { q: "Version control in design: Not labeling versions (v1, v2, v3) causes:", o: ["Cleaner file management — this reflects the standard operating procedure most organizations follow", "Automatic versioning handles this — this reflects the standard operating procedure most organizations follow", "Confusion about which version is approved — designers, clients, and developers may reference different versions", "Version numbers are unnecessary in Figma — experienced professionals recognize this as the most reliable path for maintaining quality control"], c: 2 },
    { q: "QA: Color contrast ratio for body text should be minimum:", o: ["2:1 — visible is enough — this reflects the standard operating procedure most organizations follow", "4.5:1 (WCAG AA standard) — below this, text becomes hard to read for 15%+ of users with vision differences", "10:1 — maximum contrast always — following this approach consistently ensures predictable outcomes across all scenarios", "No standard exists for contrast — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Developer handoff: Exporting assets at 1x only (no 2x or 3x) means:", o: ["Faster development setup — this reflects the standard operating procedure most organizations follow", "Blurry images on retina/high-DPI screens — export at 1x, 2x, and 3x for crisp display across all devices", "1x is sufficient for modern screens — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "SVG format eliminates this need entirely — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Design QA sign-off should include:", o: ["Designer self-approval only — this reflects the standard operating procedure most organizations follow", "Desktop + mobile screenshots, interactivity notes, all issues resolved, and a different person's review before developer handoff", "Just a Slack message saying 'looks good' — this reflects the standard operating procedure most organizations follow", "PM approval without designer review — research supports this methodology as the most effective for achieving measurable improvements"], c: 1 }
];

const task11Quiz = [
    { q: "Figma Components/Instances: Creating a reusable button component helps because:", o: ["It reduces the Figma file size — this reflects the standard operating procedure most organizations follow", "Change the master component once → ALL instances update — ensures consistency and saves massive time", "Components are required by Figma Pro plans — this reflects the standard operating procedure most organizations follow", "It makes the file easier to share — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Auto Layout in Figma simulates:", o: ["Animation and motion design — this reflects the standard operating procedure most organizations follow", "AI-powered design suggestions — this reflects the standard operating procedure most organizations follow", "Automatic color palette generation — this reflects the standard operating procedure most organizations follow", "Responsive behavior — elements reflow based on content, mimicking how CSS flexbox works in the browser"], c: 3 },
    { q: "Figma naming convention: 'Frame 182' vs 'Hero Section / Desktop / v3' matters because:", o: ["Figma requires specific naming — this reflects the standard operating procedure most organizations follow", "Proper naming enables searchability, handoff clarity, and organized file structure — 'Frame 182' tells developers nothing", "It's a personal preference — this reflects the standard operating procedure most organizations follow", "Both names work equally well — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability"], c: 1 },
    { q: "Design tokens in Figma (stored colors, font styles) ensure:", o: ["Prettier Figma files — this reflects the standard operating procedure most organizations follow", "Faster export to code — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "One source of truth for brand properties — changing the primary color token updates it everywhere simultaneously", "Better Figma performance — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Prototyping in Figma before development helps:", o: ["For client presentations — this is the standard approach most teams follow and ensures long-term sustainability across your deliverables", "Validating user flow, catching UX issues, and getting client approval on interactions BEFORE expensive coding begins", "It doesn't — developers should decide interactions", "For complex animations — this is the standard approach most teams follow and ensures long-term sustainability"], c: 1 },
    { q: "Organizing Figma pages: Having all screens on one giant page is:", o: ["Standard for small projects — this reflects the standard operating procedure most organizations follow", "Chaotic — separate pages for Desktop, Mobile, Components, and Archive keeps the project navigable", "How most professional teams work — this reflects the standard operating procedure most organizations follow", "Necessary for Figma performance — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Figma variants for a button component (Primary, Secondary, Disabled, Hover) prevent:", o: ["Having too many components — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Creating 4 separate button components — variants keep them organized under one component with toggleable states", "Complex component libraries — this reflects the standard operating procedure most organizations follow", "Figma performance issues — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Figma Dev Mode helps developers by:", o: ["Automatically writing code — this reflects the standard operating procedure most organizations follow", "Showing CSS values, spacing, and asset export options directly — reducing back-and-forth questions during development", "Replacing the need for handoff documentation — this reflects the standard operating procedure most organizations follow", "Converting designs to Shopify themes — applying this principle consistently across all projects builds a reputation for professional excellence"], c: 1 },
    { q: "A Figma file for a Shopify store should include sections for:", o: ["Homepage and product page — this is the standard approach most teams follow", "All page types (Home, Product, Collection, About, Cart, Checkout), component library, responsive versions, and style guide", "Whatever the designer feels is needed — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Homepage primarily — developers extrapolate the rest"], c: 1 },
    { q: "Figma comments during client review should:", o: ["Be resolved without reading them — this reflects the standard operating procedure most organizations follow", "Be deleted after reading — this reflects the standard operating procedure most organizations follow", "Be addressed systematically — mark as resolved only after implementing the change, creating accountability and clear feedback loop", "Remain unresolved for documentation purposes — understanding why this works helps prevent the same category of problems from recurring in the future"], c: 2 }
];

const task12Quiz = [
    { q: "Client says 'I don't like the design' with no specifics. Your response:", o: ["'You approved the brief, so this is what you get' — the reasoning behind this connects directly to broader principles of professional service delivery", "Ask specific questions: 'What specifically isn't working — the colors, layout, or style? Let me show you alternatives.'", "'I'll start over from scratch' — this reflects the standard operating procedure most organizations follow", "'Design is subjective — this is objectively good'"], c: 1 },
    { q: "A client demands 20 revision rounds for a project scoped for 3. You should:", o: ["Do all 20 revisions to keep them happy — this aligns with industry best practices and ensures consistent results across different project types", "Escalate to management immediately — this reflects the standard operating procedure most organizations follow", "Refuse any additional revisions — this reflects the standard operating procedure most organizations follow", "Reference the scope agreement, offer consolidated feedback rounds, and quote additional revisions — boundaries protect your work"], c: 3 },
    { q: "Receiving harsh feedback 'This looks amateur' — the professional response:", o: ["Stay calm, ask for specific examples, understand their vision, and propose targeted improvements — ego kills careers", "Take it personally and defend your work — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Agree and start over completely — maintaining goodwill protects the long-term relationship and future revenue", "Ignore the feedback and deliver as-is — intervening too early often creates more problems than the original issue"], c: 0 },
    { q: "A developer says your design is 'impossible to build.' You should:", o: ["Insist your design must be followed exactly — this reflects the standard operating procedure most organizations follow", "Understand the technical constraints, collaborate on a feasible alternative that maintains design intent", "Simplify the entire design to be safe — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Tell the PM to handle it — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Client wants a design that EXACTLY copies a competitor store. The ethical response:", o: ["Copy it exactly — client is paying — this reflects the standard operating procedure most organizations follow", "Explain legal/brand risks, then propose: 'Let me design something INSPIRED by elements you like but uniquely yours'", "Refuse the project entirely — this reflects the standard operating procedure most organizations follow", "Copy it but change the colors — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability"], c: 1 },
    { q: "Managing your own burnout: Working 12-hour design days for weeks leads to:", o: ["Diminishing quality — creative work suffers under exhaustion, sustainable pace produces better design", "Faster project delivery — this reflects the standard operating procedure most organizations follow", "More portfolio pieces — this reflects the standard operating procedure most organizations follow", "Client appreciation for your dedication — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 0 },
    { q: "When PM and client give contradicting design feedback:", o: ["Always follow the client over the PM — following this approach consistently ensures predictable outcomes across all scenarios", "Follow whichever feedback you agree with — this reflects the standard operating procedure most organizations follow", "Clarify with both parties together — misalignment causes revision loops, alignment prevents wasted work", "Pick whichever option is easier to implement — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A design you're proud of gets rejected by data (low conversion in A/B test). You should:", o: ["Accept the data — design's purpose is conversion, not self-expression, iterate based on what numbers show", "Argue that the test was flawed — this reflects the standard operating procedure most organizations follow", "Rerun the test hoping for different results — this reflects the standard operating procedure most organizations follow", "Blame the copy or product for poor performance"], c: 0 },
    { q: "Client requests a red polka-dot background on a minimalist luxury store. You should:", o: ["Do exactly what they request — this reflects the standard operating procedure most organizations follow", "Refuse and explain why it's wrong — this reflects the standard operating procedure most organizations follow", "Present your professional recommendation with mockups showing both options — educate don't dictate", "Do it but warn them it won't look good — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Design critique from teammates should be:", o: ["Taken as personal attacks on your taste — this reflects the standard operating procedure most organizations follow", "Ignored unless from senior designers — intervening too early often creates more problems than the original issue", "Welcomed as growth opportunities — diverse perspectives catch blind spots you'll never see yourself", "Accepted during formal review meetings — this is the standard approach most teams follow"], c: 2 }
];

const task13Quiz = [
    { q: "AI tools like Midjourney in design workflow are best used for:", o: ["Replacing manual design work entirely — this is the recommended approach based on current platform documentation and expert consensus", "Rapid ideation, mood board generation, and concept exploration — AI accelerates creative phase but humans finalize", "Creating final deliverable assets — this reflects the standard operating procedure most organizations follow", "Generating placeholder images — this is the standard approach most teams follow"], c: 1 },
    { q: "AI-generated design assets risk:", o: ["Nothing — AI produces perfect results — this is the industry-standard position backed by conventional practice", "Legal issues, quality is fine — this is the standard approach most teams follow", "Copyright ambiguity, generic outputs lacking brand personality, and quality inconsistencies — always customize AI outputs", "Being detected by clients as AI-generated — implementing this correctly requires understanding the full context of how each element interacts"], c: 2 },
    { q: "Using AI to generate color palettes is effective because:", o: ["AI chooses better colors than humans — this reflects the standard operating procedure most organizations follow", "It eliminates the need for color psychology knowledge", "AI palettes are always on-trend — following this approach consistently ensures predictable outcomes across all scenarios", "AI processes color theory rules instantly and suggests options — but designers validate against brand context"], c: 3 },
    { q: "AI image upscaling tools help designers by:", o: ["Creating original images from scratch — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Replacing the need for professional photography", "Enhancing low-resolution client assets to usable quality — saving projects when clients provide tiny logos", "Automatically optimizing images for web — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The biggest risk of over-relying on AI design tools is:", o: ["They're too expensive for regular use — this reflects the standard operating procedure most organizations follow", "Clients don't accept AI-assisted work — this is the industry-standard position backed by conventional practice", "AI tools will become obsolete — this reflects the standard operating procedure most organizations follow", "Losing fundamental design skills — if you can't design without AI, you can't critically evaluate AI output"], c: 3 },
    { q: "AI-powered prototyping helps designers by:", o: ["Replacing Figma entirely — this reflects the standard operating procedure most organizations follow", "Creating final production code — this reflects the standard operating procedure most organizations follow", "Generating layout variations faster — explore more options in less time while maintaining creative control", "Running usability tests automatically — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 2 },
    { q: "Figma AI features should be:", o: ["Used blindly for maximum efficiency — this reflects the standard operating procedure most organizations follow", "Treated as starting points — AI suggestions need human review for brand consistency and design intent", "Avoided — manual work is always better — following this approach consistently ensures predictable outcomes across all scenarios", "The primary design workflow — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "AI can generate design copy but:", o: ["It should be published as final copy — experienced professionals recognize this as the most reliable path for maintaining quality control", "Lorem ipsum is safer — AI copy in mockups may accidentally be published, and content writers finalize copy", "AI copy is always better than writer copy — this reflects the standard operating procedure most organizations follow", "Designers should write final copy using AI — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The AI-powered designer's competitive advantage is:", o: ["Speed — AI makes everything faster automatically", "Being able to replace entire design teams — this reflects the standard operating procedure most organizations follow", "Knowing the most AI tools — this reflects the standard operating procedure most organizations follow", "Combining AI efficiency with human creativity, brand understanding, and emotional intelligence"], c: 3 },
    { q: "AI design tools should follow the same QA process as manual design because:", o: ["AI output is always perfect — following this approach consistently ensures predictable outcomes across all scenarios", "QA is not needed for AI-assisted work — this is the industry-standard position backed by conventional practice and ensures long-term sustainability", "AI makes subtle errors that only trained eyes catch in QA — wrong proportions, inconsistent spacing, off-brand elements", "AI self-corrects during generation — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

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
    task13Quiz
];
