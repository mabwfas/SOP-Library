// UI/UX Designer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Premium Design Standard

const trainingTasks = [
    { id: 0, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
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
<h2>📚 TASK 2: THE 5 LAWS OF PREMIUM DESIGN</h2>

<div class="content-section">
    <h3>1. Whitespace = Luxury</h3>
    <p>Cheap brands pack everything tight. Luxury brands sell empty space. Double your padding.</p>
</div>

<div class="content-section">
    <h3>2. Consistency is King</h3>
    <p>If your primary button is round on the homepage, it cannot be square on the product page.</p>
</div>

<div class="content-section">
    <h3>3. Hierarchy Guides the Eye</h3>
    <p>The user should never have to guess "What do I look at first?". Size, Color, and Weight dictate importance.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Hierarchy Check</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Squint Test</h4>
        <p>Squint at your design until it blurs. What is the #1 thing you see? If it's not the Product or the CTA, you failed.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Design Laws</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 3: COLOR THEORY FOR ECOMMERCE</h2>

<div class="content-section">
    <h3>🎨 The 60-30-10 Rule</h3>
    <ul>
        <li><strong>60% Background:</strong> Usually White, Off-white, or very dark (for dark mode).</li>
        <li><strong>30% Brand Color:</strong> Headers, graphical elements.</li>
        <li><strong>10% Accent/Action:</strong> The Button Color. Must pop.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🧠 Industry Psychology</h3>
    <ul>
        <li><strong>Blue:</strong> Trust (Tech, Health).</li>
        <li><strong>Black/Gold:</strong> Luxury (Fashion, Jewelry).</li>
        <li><strong>Green:</strong> Eco/Natural (Supplements, Food).</li>
        <li><strong>Red/Orange:</strong> Urgency/Energy (Clearance, Sports).</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Palette Builder</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Create a Palette</h4>
        <p>Create a 60-30-10 palette for an "Organic Dog Food" brand. Justify your color choices based on psychology.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Color</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 4: TYPOGRAPHY MASTERY</h2>

<div class="content-section">
    <h3>🔤 The 2-Font Rule</h3>
    <p>Never use more than 2 font families. One for Headings (Display), one for Body (Readability).</p>
</div>

<div class="content-section">
    <h3>📏 Specs that Convert</h3>
    <ul>
        <li><strong>Body Size:</strong> Min 16px (Desktop), Min 16px (Mobile). Google penalizes smaller.</li>
        <li><strong>Line Height:</strong> 1.5x for body text. 1.1x-1.2x for Headings.</li>
        <li><strong>Contrast:</strong> Pure black on white is harsh. Use #1A1A1A on #FFFFFF.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Type Pairing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Matchmaker</h4>
        <p>Pair a Serif font (e.g., Playfair Display) with a Sans-Serif (e.g., Lato) for a high-end watch brand. Explain why they work.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Typography</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: LAYOUT & SPACING - The Invisible Grid</h2>

<div class="content-section">
    <h3>📐 The 8px System</h3>
    <p>Everything should be a multiple of 8. Margins: 16px, 24px, 32px, 64px, 128px.</p>
    <p>Why? It creates a subconscious rhythm. Random spacing (13px, 21px) feels chaotic.</p>
</div>

<div class="content-section">
    <h3>📱 Responsive Breakpoints</h3>
    <ul>
        <li><strong>Desktop:</strong> 1440px / 1200px container.</li>
        <li><strong>Tablet:</strong> 768px.</li>
        <li><strong>Mobile:</strong> 375px (Design at this size).</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Spacing Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Correction</h4>
        <p>I will provide a layout with 15px, 22px, and 45px margins. Correct them to the nearest 8px multiplier.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Spacing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: TRUST & PSYCHOLOGY</h2>

<div class="content-section">
    <h3>⭐ Social Proof Design</h3>
    <p>Don't just paste text reviews. Design them.</p>
    <ul>
        <li>Use real photos of customers.</li>
        <li>Use Star Icons (Vector, gold color).</li>
        <li>Show "Verified Buyer" badges.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🖱️ CTA Psychology</h3>
    <p>Buttons should look lickable.</p>
    <p>Labels matter: "Buy Now" vs "Add to Cart" vs "Get Yours".</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Trust Signals</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Guarantee Badge</h4>
        <p>Design a "30-Day Money Back Guarantee" badge that looks premium, not like a scam site PNG.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Trust Design</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: PAGE-BY-PAGE GUIDE</h2>

<div class="content-section">
    <h3>🏠 Homepage Anatomy</h3>
    <ol>
        <li><strong>Hero:</strong> Headline + CTA (Above fold).</li>
        <li><strong>Social Proof:</strong> "As seen in..." logos.</li>
        <li><strong>Collection Grid:</strong> "Shop Best Sellers".</li>
        <li><strong>Benefit Bar:</strong> Free Shipping / Returns / Warranty.</li>
    </ol>
</div>

<div class="content-section">
    <h3>🛒 Product Page (The Core)</h3>
    <p>The "Buy Box" is sacred ground.</p>
    <ul>
        <li>Price must be clear.</li>
        <li>Variant selectors must be easy to tap.</li>
        <li>Add to Cart must be the dominant element on the page.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Wireframing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: PDP Layout</h4>
        <p>Sketch a "sticky add-to-cart" layout for mobile. Where does it sit? What information is included (Price? Title?)?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Layouts</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 8: MOBILE-FIRST DEEP DIVE</h2>

<div class="content-section">
    <h3>👍 The Thumb Zone</h3>
    <p>Most users hold phones with one hand. Key actions must be reachable with the thumb.</p>
    <ul>
        <li><strong>Menu:</strong> Bottom or easier top corners.</li>
        <li><strong>CTA:</strong> Full width, easy to hit.</li>
        <li><strong>Touch Target:</strong> 44px x 44px minimum. Never smaller.</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚡ Shift Happens</h3>
    <p>Design fixed heights for image containers so layout doesn't jump when image loads.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Mobile Menu</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Navigation Design</h4>
        <p>Design a mobile drawer menu that includes: Links, Socials, Currency Switcher, and a "Shop Sale" highlighted button.</p>
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
<h2>📚 TASK 9: DESIGN QA & HANDOFF</h2>

<div class="content-section">
    <h3>📤 The Handoff</h3>
    <p>Devs are not mind readers.</p>
    <ul>
        <li>Export all assets as SVG or PNG @2x.</li>
        <li>Mark all animations (e.g., "On Hover: Opacity 80%").</li>
        <li>Use "Dev Mode" in Figma to ensure they see hex codes.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🕵️‍♀️ The Visual QA</h3>
    <p>After Dev is done, you must audit carefully. "The spacing here is 24px, but design says 32px." Be annoying about details.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Annotation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Redlining</h4>
        <p>Take a screenshot of a design component. Add red text annotations explaining how it should behave on hover and on mobile.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Handoff</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 10: FIGMA WORKFLOW</h2>

<div class="content-section">
    <h3>📂 File Structure</h3>
    <ol>
        <li>Thinking / Inspiration</li>
        <li>Wireframes</li>
        <li><strong>Design System (Style Guide)</strong></li>
        <li><strong>Final Designs (Ready for Dev)</strong></li>
        <li>Archive</li>
    </ol>
</div>

<div class="content-section">
    <h3>🧩 Components are Life</h3>
    <p>Never Duplicate. Create a Master Component for the "Primary Button". Use Instances everywhere else. If client changes color, you change it once.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Component Set</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Button States</h4>
        <p>Create a Figma Component Set for a Primary Button: Default, Hover, Pressed, and Disabled states.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Figma</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 11: DIFFICULT SITUATIONS</h2>

<div class="content-section">
    <h3>💬 "Make the Logo Bigger"</h3>
    <p><strong>Response:</strong> "I can certainly do that. However, on current screen sizes, searching shows that a larger logo pushes the 'Buy' button below the fold, which may lower conversions by 15%. I recommend keeping it this size to prioritize sales. Thoughts?"</p>
    <p><strong>Formula:</strong> Acknowledge -> Explain Consequence (Data) -> Recommendation.</p>
</div>

<div class="content-section">
    <h3>💬 "I don't like it"</h3>
    <p><strong>Response:</strong> "Thanks for the feedback! To help me refine it, could you pinpoint if the issue is with the layout structure, the color palette, or the typography style?"</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scripting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Rebuttal</h4>
        <p>Client wants to use Comic Sans because "it's fun". Write a professional response explaining why that hurts Credibility and Sales.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Feedback</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task13Content = `
<h2>📚 TASK 12: AI & TOOLS</h2>

<div class="content-section">
    <h3>🤖 AI for Designers</h3>
    <ul>
        <li><strong>Midjourney:</strong> Great for moodboards and placeholder hero images.</li>
        <li><strong>ChatGPT:</strong> "Write 3 headlines for a coffee brand homepage." (Never use Lorem Ipsum).</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚡ Speed Tools</h3>
    <p>Use <strong>Relume Library</strong> for wireframing fast. Don't reinvent the wheel.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: AI Workflow</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Prompting</h4>
        <p>Write a Midjourney prompt to generate "A luxury skincare bottle on a marble podium with water droplets, 8k photorealistic".</p>
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


const task0Quiz = [
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



// Make task content available globally for openTask() function
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

const allQuizzes = [
    task0Quiz,
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
