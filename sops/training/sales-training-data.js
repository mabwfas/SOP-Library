// Sales Training Data - Tasks 1-5
const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "Mindset & Life Lessons",
        description: "Why sales matters, success psychology",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read the content below completely before taking the quiz",
            "🔍 YouTube: Search 'sales mindset for beginners'",
            "🤖 ChatGPT: Ask 'What mindset do top salespeople have?'"
        ]
    },
    {
        id: 3,
        title: "Company Knowledge",
        description: "Digital Heroes, values, premium positioning",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-30 minutes",
            "📖 Read SOP: sales-sop.html - All sections about Digital Heroes",
            "📖 Study 'Non-Negotiable Sales Rules' section completely",
            "🔍 YouTube: Watch Digital Marketing Heroes channel videos"
        ]
    },
    {
        id: 4,
        title: "Product Mastery",
        description: "Packages, pricing, portfolio",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read SOP: 'Pricing & Packages' section completely",
            "📖 Study all package details: Premium, Enterprise",
            "🔍 YouTube: Search 'web development packages pricing'"
        ]
    },
    {
        id: 5,
        title: "Lead Qualification",
        description: "M.T.N.D framework, red flags",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: 'Lead Qualification (M.T.N.D Framework)' section",
            "📖 Study 'Client Quality Filtering' and all Red Flags",
            "🔍 YouTube: Search 'BANT sales qualification'"
        ]
    },
    {
        id: 6,
        title: "Response Templates",
        description: "4 response types, timing",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read SOP: 'Inquiry Response & Initial Qualification'",
            "📖 Study all 4 Response Template types",
            "📖 Study 'Follow-up Sequence' section"
        ]
    },
    {
        id: 7,
        title: "Sales Psychology",
        description: "10 techniques, 80/20 rule",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Sales Psychology Playbook' section COMPLETELY",
            "📖 Study all 10 psychological techniques",
            "🔍 YouTube: Search 'sales psychology techniques'"
        ]
    },
    {
        id: 8,
        title: "Objection Handling",
        description: "6 core objections, scripts",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: 'Objection Handling' section COMPLETELY",
            "📖 Study all 6 core objection scripts word-by-word",
            "📖 Study 'Price Objection Flowchart'"
        ]
    },
    {
        id: 9,
        title: "Closing Techniques",
        description: "Advanced closes, negotiation",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: 'Advanced Closing Techniques' section",
            "📖 Study 'Negotiation & Pricing Mastery'",
            "🔍 YouTube: Search 'sales closing techniques'"
        ]
    },
    {
        id: 10,
        title: "Practice Scenarios",
        description: "Full conversation simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-40 minutes",
            "📖 Review ALL previous tasks",
            "📖 Study 'Handling Difficult Situations' section",
            "🤖 ChatGPT: 'Give me a difficult sales scenario to solve'"
        ]
    },
    {
        id: 11,
        title: "Final Certification",
        description: "Comprehensive exam + video",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Full SOP Review: Re-read entire sales-sop.html",
            "✅ Complete Tasks 1-9 with 10/10 on all quizzes",
            "🎥 Prepare 30-minute video walkthrough"
        ]
    }
];

// Task 1 Content (Content-First) - REORGANIZED & ENHANCED

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
<h2>📚 PART 1: THE FOUNDATION - Mindset</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into sales techniques, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24; font-size: 1.2em;">⭐ YOU (Sales)</strong> → <strong>THE FUEL SYSTEM - generate enquiries that power everything</strong><br>
            ↓<br>
            <strong style="color: #F472B6;">Development</strong> → delivers quality work<br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #60A5FA;">CS Team</strong> → protects satisfaction<br>
            ↓<br>
            <strong style="color: #A78BFA;">5-Star Reviews</strong> → boost algorithm positioning<br>
            ↓<br>
            <strong style="color: #FBBF24;">More Organic Enquiries</strong> → the cycle amplifies
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #F59E0B; padding: 15px; margin: 15px 0;">
        <strong style="color: #FBBF24;">⛽ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a sales professional, you are the <strong>FUEL SYSTEM</strong> that powers everything at Digital Heroes. Without your 24/7 efforts converting enquiries into clients, there would be no development work, no design projects, no reviews, no growth. You create the opportunities that everyone else depends on. Every deal you close funds salaries, enables expansion, and moves us closer to our ₹75 Crore goal.</p>
    </div>
    
    <p style="color: #FBBF24; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No sales = No clients = No work for anyone = Chain doesn't even start. YOU ignite everything.</p>
</div>

<div class="content-section">
<h3>🎯 Why Are You Here?</h3>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DsK_904V2Pg?rel=0&modestbranding=1" title="Sales Mindset" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Sales Mindset</strong></div>
<p>You're about to learn a skill that can change your entire financial future. Sales is not just a job — it's the <strong>highest-paid profession in the world</strong> that requires:</p>
<ul>
<li>❌ No degree</li>
<li>❌ No connections</li>
<li>❌ No starting capital</li>
<li>✅ Only your mind, discipline, and willingness to learn</li>
</ul>
<div class="warning-box">
<strong>⚠️ The Uncomfortable Truth:</strong><br>
95% of people who start sales training never finish it. Not because it's too hard. Because they don't have the right mindset. You're reading this because someone saw potential in you. The question is: <strong>Do you see it in yourself?</strong>
</div>
</div>



<div class="content-section">
<h3>👤 The Two Types of People</h3>
<img src="images/sales_training_mindset_paths_1768034224092.png" alt="Tourist vs Student Mindset" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚶 Type 1: The Tourist</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
• Reads quickly, skims sections<br>
• Thinks "I already know this"<br>
• Quits when it gets hard<br>
• Blames external factors<br>
<em style="color: #EF4444;">Will NOT finish this training ❌</em>
</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎓 Type 2: The Student</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
• Reads carefully, takes notes<br>
• Thinks "What can I learn here?"<br>
• Pushes through when it gets hard<br>
• Takes responsibility for results<br>
<em style="color: #10B981;">Will become a top performer ✅</em>
</td>
</tr>
</table>
<div class="highlight-box">
<strong>Which one are you?</strong> The answer isn't what you say. It's what you <strong>DO</strong> in the next few hours.
</div>
</div>

<h2>📚 PART 2: CORE MINDSET LESSONS</h2>

<div class="content-section">
<h3>💡 Lesson 1: You Are Not Selling — You Are Solving</h3>
<img src="images/sales_training_doctor_analogy_1768034244326.png" alt="Selling is Solving" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
<p>The biggest mistake new salespeople make is thinking their job is to "convince" people to buy. <strong>Wrong.</strong></p>
<div class="highlight-box">
<strong>Your Real Job:</strong> Find people with problems and offer them solutions.
</div>
<p>Think about it:</p>
<ul>
<li>🩺 A <strong>doctor</strong> doesn't "convince" you to take medicine. They diagnose and prescribe.</li>
<li>⚖️ A <strong>lawyer</strong> doesn't "convince" you to hire them. They understand and offer expertise.</li>
<li>💻 <strong>You are the web development doctor.</strong> Clients come with broken websites, slow stores, and conversion problems. Your job is to diagnose and cure.</li>
</ul>
<p style="margin-top: 15px;">When you see yourself as a <strong>problem-solver</strong> instead of a salesperson:</p>
<ul>
<li>You stop begging for orders</li>
<li>You start qualifying who deserves your help</li>
<li>Clients respect you more</li>
<li>You close more deals</li>
</ul>
</div>

<div class="content-section">
<h3>💡 Lesson 2: Rejection is Information, Not Insult</h3>
<div class="highlight-box">
<strong>Here's a truth that will free you:</strong><br>
When someone says "no," they're not rejecting <strong>YOU</strong>. They're rejecting the <strong>OFFER</strong> — at <strong>THIS moment</strong> — for <strong>THEIR reasons</strong>.
</div>
<p>The rejection might mean:</p>
<ul>
<li>💰 They don't have budget <em>right now</em> (not "you're too expensive")</li>
<li>⏳ They're not ready to decide (not "you're not convincing")</li>
<li>🔒 They don't trust online services yet (not "you're untrustworthy")</li>
<li>😤 They had a bad experience before (not your fault at all)</li>
</ul>
<div class="warning-box">
<strong>📊 The Math That Matters:</strong><br>
• Salesperson A talks to 10 people, gets 2 "yes" = 20% conversion<br>
• Salesperson B talks to 100 people, gets 15 "yes" = 15% conversion<br><br>
<strong>Who makes more money?</strong> Salesperson B — even with a LOWER conversion rate!<br>
<em>The game isn't about avoiding rejection. It's about collecting rejections on your way to success.</em>
</div>
</div>

<div class="content-section">
<h3>💡 Lesson 3: Discipline Beats Motivation</h3>
<p><strong>Motivation is a lie.</strong> Not completely — but mostly.</p>
<p>Motivation is an <em>emotion</em>. It comes and goes like weather. You can't build a career on weather.</p>
<div class="highlight-box">
<strong>Discipline</strong> is doing what needs to be done, whether you feel like it or not.
</div>
<p>Here's the brutal truth about your future in sales:</p>
<ul>
<li>☀️ Some days you'll feel unstoppable. You'll close 3 deals before lunch.</li>
<li>🌧️ Some days you'll feel worthless. Every client will reject you.</li>
</ul>
<div class="warning-box">
<strong>On BOTH days, the ACTIONS are the same:</strong>
<ul style="margin-bottom: 0;">
<li>⚡ Respond to inquiries within 5 minutes</li>
<li>🔍 Qualify leads properly</li>
<li>📝 Send professional proposals</li>
<li>📞 Follow up systematically</li>
</ul>
</div>
<p style="margin-top: 15px;"><strong>The professional does the work regardless of feelings. The amateur waits until they "feel like it."</strong></p>
</div>

<div class="content-section">
<h3>💡 Lesson 4: The 10,000 Hour Reality</h3>
<p>Malcolm Gladwell popularized the "10,000 hour rule" — mastery requires 10,000 hours of practice.</p>
<div class="warning-box">
<strong>But here's what most people miss:</strong><br>
It's not 10,000 hours of <em>doing</em>. It's 10,000 hours of <strong>IMPROVING</strong>.
</div>
<p>You can spend 10 years doing sales badly and never get better. Or you can spend 1 year with intense focus and become exceptional.</p>
<p><strong>Deliberate practice means:</strong></p>
<ul>
<li>📝 <strong>Reviewing every conversation:</strong> "What worked? What didn't?"</li>
<li>🗣️ <strong>Asking for feedback:</strong> "What could I have done better?"</li>
<li>👀 <strong>Studying top performers:</strong> "What do they do differently?"</li>
<li>💪 <strong>Pushing past comfort:</strong> "Let me try that technique I'm afraid of"</li>
</ul>
<div class="highlight-box">
Your first 100 conversations will be terrible. Accept it. Embrace it. Learn from every single one. <strong>The people who become great are not the most talented. They're the ones who refuse to stay bad.</strong>
</div>
</div>

<div class="content-section">
<h3>💡 Lesson 5: Your Income is the Average of Your Skills</h3>
<p>There's a famous quote: "Your income is the average of the five people you spend the most time with."</p>
<div class="highlight-box">
<strong>But there's a more accurate version:</strong><br>
Your income is the average of your five most valuable skills.
</div>
<p><strong>Right now, you might have skills like:</strong></p>
<ul>
<li>Basic computer usage</li>
<li>Communication in your language</li>
<li>Some understanding of websites</li>
</ul>
<p>These skills might earn you ₹15,000-25,000/month in a regular job.</p>
<p><strong>But what if you added:</strong></p>
<ul>
<li>✅ Professional sales communication</li>
<li>✅ Client psychology understanding</li>
<li>✅ Objection handling mastery</li>
<li>✅ Premium positioning expertise</li>
<li>✅ Conversion optimization knowledge</li>
</ul>
<p>Now you have skills worth <strong>₹50,000-100,000/month. Or more.</strong></p>
<div class="warning-box">
<strong>This training is adding skills to your stack.</strong> Every module you complete is increasing your market value. But only if you actually LEARN it. Not just read it.
</div>
</div>

<h2>📚 PART 3: ADVANCED SALES PHILOSOPHY</h2>

<div class="content-section">
<h3>🔥 Lesson 6: The Ultimate Sales Equation</h3>
<div class="highlight-box" style="text-align: center; font-size: 1.2em;">
<strong>Conviction × Trust = Sales</strong>
</div>
<p style="text-align: center; margin-top: 10px;">Not scripts. Not rebuttals. Not persuasion tricks.</p>
<p>If you <strong>believe</strong>, people feel it. If you don't, they smell it.</p>
<p>That's why:</p>
<ul>
<li>🏆 The best salespeople are killers from week one</li>
<li>📉 Mediocre ones never "learn" their way into greatness</li>
<li><strong>You can train skills. You cannot fake belief.</strong></li>
</ul>
</div>

<div class="content-section">
<h3>🔥 Lesson 7: Conviction is a Slider, Not a Switch</h3>
<p>Most people think: "I believe or I don't." <strong>Wrong.</strong></p>
<div style="display: flex; align-items: center; gap: 10px; margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
<span style="color: #EF4444;">40%</span>
<div style="flex: 1; height: 10px; background: linear-gradient(90deg, #EF4444, #F59E0B, #10B981); border-radius: 5px;"></div>
<span style="color: #10B981;">100%</span>
</div>
<p><strong>What increases conviction fastest?</strong> Seeing proof:</p>
<ul>
<li>⭐ Testimonials from happy clients</li>
<li>💰 Client wins: "This client made $40k revenue"</li>
<li>📈 Case studies: "This brand hit 4.8% CVR"</li>
<li>🚀 Results: "This ad campaign went 12x ROAS"</li>
</ul>
<div class="warning-box">
<strong>That is gasoline for your conviction.</strong> The more wins you see, the more you believe, the more you close.
</div>
</div>

<div class="content-section">
<h3>🔥 Lesson 8: Childlike Curiosity > Confrontation</h3>
<p>Most sales reps argue. <strong>Elite closers ask curious questions.</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr>
<td style="padding: 15px; background: rgba(239, 68, 68, 0.15); border-radius: 10px 10px 0 0;">
<strong>Client:</strong> "My husband won't approve."<br><br>
<strong style="color: #EF4444;">❌ Bad rep:</strong> "He's wrong."
</td>
</tr>
<tr>
<td style="padding: 15px; background: rgba(16, 185, 129, 0.15); border-radius: 0 0 10px 10px;">
<strong style="color: #10B981;">✅ Elite rep:</strong> "That's interesting — why wouldn't he?"
</td>
</tr>
</table>
<p>Now the client is explaining to <em>themselves</em>. No pressure. No conflict. Just logic.</p>
<div class="highlight-box">
<strong>People convince themselves better than you ever could.</strong>
</div>
</div>

<div class="content-section">
<h3>🔥 Lesson 9: Emotional Control = Closing Power</h3>
<p>Sales is like fighting. Under pressure:</p>
<ul>
<li>❤️ Heart rate up</li>
<li>💨 Breathing fast</li>
<li>⚡ Fight-or-flight kicks in</li>
</ul>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏳️ Losers</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">React emotionally → Push → Get defensive</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Winners</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slow down → Ask → Stay curious</td>
</tr>
</table>
<div class="warning-box">
<strong>The calmest rep wins.</strong> When belief is real, your voice changes, speed changes, certainty comes through. People feel it.
</div>
</div>

<div class="content-section">
<h3>🔥 Lesson 10: Seasons Mindset = Psychological Freedom</h3>
<p>Most people think commitment = prison. Elite founders use <strong>time-boxed seasons.</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Default thinking</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"If I start this, I'm stuck forever"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Seasonal reframe</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm committing to this for THIS season"</td>
</tr>
</table>
<p>Just like: <strong>Winter ≠ Summer</strong> | <strong>Launch season ≠ Scaling season</strong> | <strong>Cash season ≠ Brand season</strong></p>
<p>This removes: Fear of wrong decisions, overthinking, perfectionism.</p>
<div class="highlight-box">
<strong>You don't quit — you transition seasons.</strong> This is why elite founders move fast while others freeze.
</div>
</div>

<h2>📚 PART 4: YOUR COMMITMENT & STANDARDS</h2>

<div class="content-section">
<h3>📜 The Commitment Contract</h3>
<p>By continuing this training, you're making a commitment. Not to us — <strong>to yourself.</strong></p>
<div class="warning-box">
<strong>You're committing to:</strong>
<ul style="margin-bottom: 0;">
<li>✅ <strong>Complete every task</strong> — No skipping, no shortcuts</li>
<li>✅ <strong>Score 10/10 on every quiz</strong> — Perfection is the standard</li>
<li>✅ <strong>Apply what you learn</strong> — Knowledge without action is useless</li>
<li>✅ <strong>Push through difficulty</strong> — The hard parts are where growth happens</li>
<li>✅ <strong>Take responsibility</strong> — Your success or failure is YOUR doing</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎯 Why 10/10 is Required</h3>
<p>You might wonder: "Why do I need 100% on every quiz? Isn't 80% good enough?"</p>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong style="color: #EF4444;">No. Here's why:</strong>
</div>
<p><strong>In sales, there is no 80%.</strong></p>
<ul>
<li>When a client asks about pricing, you can't give an "80% correct" answer. You either handle it right or you lose the deal.</li>
<li>When a client objects, you can't give an "80% correct" response. You either overcome it or you lose the deal.</li>
<li>When a client is ready to close, you can't do an "80% correct" close. You either get the order or you don't.</li>
</ul>
<p>We train for perfection because <strong>real situations demand perfection.</strong></p>
<div class="warning-box">
If you can't score 10/10 on a quiz when you have unlimited time and can review the material, how will you perform in a live conversation when you have 10 seconds to respond?
</div>
</div>

<div class="content-section">
<h3>🎯 The Final Truth</h3>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.3); border-color: #10B981; text-align: center; padding: 25px;">
<h4 style="margin-top: 0; color: #10B981; font-size: 1.3em;">Sales is the transfer of belief through trust.</h4>
<p style="margin-bottom: 0; font-size: 1.1em;">Everything else — scripts, frameworks, closes — are just tools to support that.</p>
</div>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned 10 powerful lessons about the mindset of successful salespeople. Now it's time to prove you understood them.</p>
<p><strong>Remember:</strong></p>
<ul>
<li>📝 10 questions based on what you just read</li>
<li>🎯 You need <strong>10/10</strong> to proceed to Task 2</li>
<li>🔄 If you fail, you can retry immediately</li>
<li>💡 Questions test <strong>understanding</strong>, not memorization</li>
</ul>
</div>
`;

// Task 2 Content: Company Knowledge
// Task 2 Content: Company Knowledge - THE DIGITAL HEROES ECOSYSTEM
const task3Content = `
<h2>📚 TASK 2: THE DIGITAL HEROES ECOSYSTEM</h2>

<div class="content-section">
<h3>🚀 Our Origin Story</h3>
<img src="images/sales_training_origin_timeline_1768034412075.png" alt="Origin Timeline" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
<p>Digital Heroes didn't start as an agency. It started as a mission.</p>
<div class="story-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h4 style="color: #10B981; margin-top: 0;">From Freelancer to Empire (2018-Present)</h4>
    <p>In 2018, we were just exhausted freelancers tired of seeing clients get ripped off by "agencies" who charged $5,000 for $50 template websites.</p>
    <p>We decided to do something radical: <strong>teach the secrets for free.</strong></p>
    <p>We launched the <strong style="color: #F8FAFC;">Digital Marketing Heroes</strong> YouTube channel. We revealed everything — how to code, how to design, how to market.</p>
    <p><strong>The Result?</strong></p>
    <ul>
        <li>Millions watched our videos.</li>
        <li>Thousands learned to code.</li>
        <li><strong>But business owners said:</strong> "We love your honesty. We don't want to learn. We just want YOU to build it."</li>
    </ul>
    <p>That's how our agency was born. Built on trust, education, and radical transparency.</p>
</div>
</div>

<div class="content-section">
<h3>🌍 The Ecosystem</h3>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/WK5xbqnhV2M?rel=0&modestbranding=1" title="Sales SOP Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Sales SOP Overview</strong></div>
</div>
<img src="images/sales_training_ecosystem_diagram_1768034440322.png" alt="Digital Heroes Ecosystem" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
<p>We are not just a service provider. We are a vertically integrated ecosystem:</p>
<div class="highlight-box" style="background: transparent; border: none; padding: 0;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 2em; margin-bottom: 10px;">📺</div>
            <h4 style="color: #F8FAFC; margin: 0 0 10px 0;">The Media Arm</h4>
            <p style="font-size: 0.9em; color: #94A3B8;">2.5M+ Subscribers. This is our lead magnet. Clients trust us before they even speak to you because they've watched 10 hours of our content.</p>
        </div>
        <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 2em; margin-bottom: 10px;">🛠️</div>
            <h4 style="color: #F8FAFC; margin: 0 0 10px 0;">The Agency Arm</h4>
            <p style="font-size: 0.9em; color: #94A3B8;">Premium high-ticket execution. Where you come in. We serve the top 1% of clients who want the best.</p>
        </div>
        <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 2em; margin-bottom: 10px;">👥</div>
            <h4 style="color: #F8FAFC; margin: 0 0 10px 0;">The Talent Pool</h4>
            <p style="font-size: 0.9em; color: #94A3B8;">40+ Full-time developers. We don't outsource to randoms. We hire the best students from our own community.</p>
        </div>
    </div>
</div>
</div>

<div class="content-section">
<h3>💰 Your Commission Structure</h3>
<p>We believe in sharing the wealth. This is high-ticket sales, and you are paid for closing high-ticket deals.</p>

<div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
        <div>
            <h3 style="color: #10B981; border: none; margin: 0;">Commission Structure</h3>
            <p style="margin: 5px 0 0 0; color: #CBD5E1;">Tiered rates based on deal value</p>
        </div>
        <div style="text-align: right;">
            <div style="font-size: 1.5em; font-weight: 700; color: #FFF;">Performance-Based</div>
            <div style="color: #94A3B8; font-size: 0.9em;">(As per Incentive & Penalty Framework)</div>
        </div>
    </div>
</div>

<div class="highlight-box">
    <strong>📋 Commission Details:</strong><br><br>
    Sales commissions are structured in tiers based on deal value — including Starter, Standard, and High-Value closure rates, plus target overachievement bonuses and enterprise acquisition bonuses.<br><br>
    <strong>👉 Refer to the <a href="incentive-penalty.html" style="color: #A78BFA;">Incentive & Penalty Framework</a> for the latest commission rates, tiers, and bonus structures.</strong><br><br>
    <em style="color: #94A3B8;">The I&P page is the single source of truth for all current incentive rates.</em>
</div>
</div>

<div class="content-section">
<h3>🚫 The "No Discount" Philosophy</h3>
<p>You will be tempted to give discounts. <strong>Don't.</strong></p>
<div class="highlight-box">
    <strong>Why we never discount:</strong>
    <ol style="margin-top: 10px; line-height: 1.8;">
        <li><strong>It insults existing clients:</strong> Why should Client B pay less than Client A for the same work?</li>
        <li><strong>It attracts nightmares:</strong> Clients who fight for $100 off will fight for every pixel.</li>
        <li><strong>It signals weakness:</strong> "If your price is flexible, your value is fake."</li>
    </ol>
</div>
<p><strong>What to say instead:</strong></p>
<div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 3px solid #F59E0B; margin-top: 15px;">
    "I totally understand the budget constraints. I can't lower the price because I can't ask my team to lower their quality. However, we could <strong>remove the blog migration</strong> and bringing the cost down to [Price]. Would that help?"
</div>
</div>

<div class="content-section">
<h3>🎯 What We Actually Sell</h3>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0D_TJw7OOBk?rel=0&modestbranding=1" title="What We Sell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>What We Sell</strong></div>
</div>
<p>You're not selling "a website" or "Shopify development." You're selling:</p>
<div class="highlight-box">
    <ul style="margin-bottom: 0;">
        <li>🚀 <strong>Revenue:</strong> CRO-optimized stores that convert visitors into customers</li>
        <li>⚡ <strong>Speed:</strong> Fast-loading sites that don't lose impatient visitors</li>
        <li>💎 <strong>Credibility:</strong> Professional design that makes their brand look trustworthy</li>
        <li>🛡️ <strong>Peace of mind:</strong> Expert team + support period = they're not alone</li>
        <li>⏰ <strong>Time:</strong> They can focus on their business while we handle the technical work</li>
    </ul>
</div>
<p style="margin-top: 15px;">When a client says "I want a Shopify store," what they ACTUALLY want is <strong>a successful online business</strong>. We deliver that.</p>
</div>

<div class="content-section">
<h3>🚩 Red Flag Clients</h3>
<p>Not every client deserves our time. Learn to spot problematic clients early:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
    <tr style="background: rgba(239, 68, 68, 0.15);">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It's Bad</strong></td>
    </tr>
    <tr style="background: rgba(239, 68, 68, 0.05);">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"My last 4 developers were terrible"</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The common factor in all failures is THEM</td>
    </tr>
    <tr>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can you match this $300 quote?"</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price-shopper who will haggle forever</td>
    </tr>
    <tr>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'll pay after I see the final work"</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Doesn't trust anyone — endless revisions, possible non-payment</td>
    </tr>
    <tr>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need this in 2 days" (complex project)</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unrealistic expectations, will blame you when it's not perfect</td>
    </tr>
</table>
<div class="warning-box">
    <strong>The 2+ Red Flags Rule:</strong> If a lead shows 2 or more red flags, politely disqualify them. Your time is better spent on quality clients.
</div>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned about Digital Heroes' positioning, rules, and values. Now prove your understanding.</p>
<ul>
    <li>📝 10 questions about company knowledge</li>
    <li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
</ul>
</div>
`;

// Task 3 Content: Product Mastery
const task4Content = `
<h2>📚 TASK 3: PRODUCT MASTERY</h2>

<div class="content-section">
<h3>🎯 How to Choose the Right Package</h3>
<p>Use this decision tree to determine the best package for your client:</p>
<div class="mermaid">
graph TD
    Start[Start: Client Needs Analysis] --> Budget{Budget > $1,500?}
    Budget -- Yes --> Complex{Complex Needs?}
    Complex -- Yes --> Ent[👑 ENTERPRISE ($1,800)]
    Complex -- No --> Prem[💎 PREMIUM ($1,200)]
    Budget -- No --> Budget2{Budget > $1,000?}
    Budget2 -- Yes --> Prem
    Budget2 -- No --> Qual{Passes M.T.N.D.?}
    Qual -- Yes --> MVP[🚀 MVP OPTION ($800)]
    Qual -- No --> Disq[🚫 DISQUALIFY]
    style Ent fill:#10B981,stroke:#059669
    style Prem fill:#6366F1,stroke:#4F46E5
    style MVP fill:#F59E0B,stroke:#D97706
    style Disq fill:#EF4444,stroke:#DC2626
</div>
</div>

<div class="content-section">
<h3>🎯 Why Product Knowledge Matters</h3>
<p><strong>You can't sell what you don't understand.</strong></p>
<p>When a client asks about your services and you hesitate, stumble, or sound unsure — you've already lost them. They came to an expert. If the expert doesn't know their own products, why should the client trust them?</p>
<div class="highlight-box">
Product mastery gives you:
<ul style="margin-bottom: 0;">
<li><strong>Confidence:</strong> Clients feel it when you know your stuff</li>
<li><strong>Speed:</strong> You answer questions instantly, not after checking</li>
<li><strong>Trust:</strong> Hesitation = doubt. Certainty = credibility</li>
<li><strong>Control:</strong> You guide the conversation instead of reacting</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📦 Our Two Main Packages</h3>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0jcOsGHeo0o?rel=0&modestbranding=1" title="Bonus: E-commerce Workflow (Winning Product + Store + Marketing)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Bonus: E-commerce Workflow (Winning Product + Store + Marketing)</strong></div>
</div>
<img src="images/sales_training_packages_comparison_1768034618922.png" alt="Premium vs Enterprise" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
<p>We keep it simple: <strong>two core packages</strong> that cover 90% of client needs.</p>

<div class="highlight-box" style="background: rgba(99, 102, 241, 0.2); border-color: #6366F1;">
<h4 style="color: #6366F1; margin-top: 0;">💎 PREMIUM PACKAGE — $1,200</h4>
<p><strong>Best for:</strong> New stores, small catalogs, standard needs</p>
<ul style="margin-bottom: 0;">
<li>✅ 5-page custom design (Home, Collection, Product, About, Contact)</li>
<li>✅ Up to 25 products uploaded</li>
<li>✅ Mobile-responsive design</li>
<li>✅ Speed optimization (85+ PageSpeed score)</li>
<li>✅ Basic SEO setup (meta titles, descriptions)</li>
<li>✅ Payment & shipping configuration</li>
<li>✅ <strong>30-day support</strong></li>
<li>✅ 1 training walkthrough session</li>
<li>✅ Unlimited revisions within scope</li>
</ul>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">👑 ENTERPRISE PACKAGE — $1,800</h4>
<p><strong>Best for:</strong> Established brands, large catalogs, complex needs</p>
<ul style="margin-bottom: 0;">
<li>✅ 10+ pages custom design</li>
<li>✅ <strong>Unlimited products</strong> uploaded</li>
<li>✅ Advanced animations & interactions</li>
<li>✅ Custom functionality (filters, lookbooks, size guides)</li>
<li>✅ Email popup & list integration</li>
<li>✅ <strong>Priority development</strong></li>
<li>✅ <strong>90-day support</strong></li>
<li>✅ Multiple training sessions</li>
<li>✅ Unlimited revisions within scope</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⏱️ Delivery Timeline</h3>
<p>Our <strong>standard delivery is 14 days</strong> from order confirmation.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Delivery Type</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Timeline</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Notes</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Included in package price</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rush (7 days)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+$200 rush fee, subject to availability</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Express (5 days)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+$400, only if content 100% ready</td>
</tr>
</table>
<div class="warning-box">
<strong>Critical for Rush Delivery:</strong> Client must have ALL content ready (logo, product images, descriptions, branding). Rush timeline only starts when we have everything. No exceptions.
</div>
</div>

<div class="content-section">
<h3>🛡️ Support Periods</h3>
<p>Support is what separates us from cheap freelancers who disappear after delivery.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cheap Freelancers</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 days or "best of luck" after delivery</td>
</tr>
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Premium Package</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>30 days</strong> of post-delivery support</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Enterprise Package</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>90 days</strong> of post-delivery support</td>
</tr>
</table>
<p><strong>What's included in support:</strong></p>
<ul>
<li>Bug fixes and technical issues</li>
<li>Minor content updates</li>
<li>Questions and training</li>
<li>Troubleshooting integrations</li>
</ul>
<p><strong>NOT included in support:</strong></p>
<ul>
<li>Major new features (quoted separately)</li>
<li>Redesigns or scope changes</li>
<li>Third-party app issues</li>
</ul>
</div>

<div class="content-section">
<h3>💰 The MVP Option (When Budget is Tight)</h3>
<p>Sometimes a good lead genuinely can't afford our full packages. <strong>Never discount — reduce scope instead.</strong></p>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.2); border-color: #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">🚀 MVP PACKAGE — $800</h4>
<p><strong>Best for:</strong> Startups testing the market, limited initial budget</p>
<ul style="margin-bottom: 0;">
<li>✅ 3-page design (Home, Collection, Contact)</li>
<li>✅ Up to 15 products</li>
<li>✅ Mobile-responsive</li>
<li>✅ Basic speed optimization</li>
<li>✅ <strong>14-day support</strong></li>
<li>✅ Clear upgrade path to Premium later</li>
</ul>
</div>
<div class="warning-box" style="margin-top: 15px;">
<strong>Important:</strong> MVP is offered ONLY to qualified leads who pass M.T.N.D. but genuinely have budget constraints. It's NOT a discount — it's less scope for less money. Pathway to expand later is always mentioned.
</div>
</div>

<div class="content-section">
<h3>🎯 How to Present Packages</h3>
<p>The way you present options matters more than the options themselves.</p>

<h4>The Good-Better-Best Technique</h4>
<p>Human psychology: Most people choose the middle option. Position your target package in the middle.</p>
<div class="highlight-box">
<strong>Example Presentation:</strong><br><br>
"Based on what you've described, I'd recommend our <strong>Premium package at $1,200</strong> — it covers everything you need for launch. If you want the full premium experience with 90-day support and unlimited products, our <strong>Enterprise at $1,800</strong> is the way to go. And if you're testing the waters first, we have an <strong>MVP option at $800</strong> with fewer pages that you can expand later."
</div>

<h4>The Price Sandwich</h4>
<p>Never state price alone. Wrap it in value:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Our price is $1,200."</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"For a complete 5-page custom store with speed optimization, SEO setup, mobile-first design, and 30 days of support — $1,200."</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📋 What We Include (That Cheap Freelancers Don't)</h3>
<p>When clients compare us to $300-500 options, here's what they're missing:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Feature</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Digital Heroes</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cheap Freelancer</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design Approach</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom CRO-focused</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Template with logo swap</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Score</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">85+ guaranteed</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not measured</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Setup</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta titles, descriptions, structure</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not included</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile Design</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile-first priority</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It works on mobile"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full walkthrough session</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">None</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Support</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-90 days included</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 days or nothing</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revisions</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited within scope</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 rounds max</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>💸 Post-Project Upsells</h3>
<p>After the initial project, there are recurring revenue opportunities:</p>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li><strong>Monthly Maintenance:</strong> $100-300/month — ongoing updates, monitoring, support</li>
<li><strong>Additional Pages:</strong> $100-200 per page</li>
<li><strong>Product Uploads:</strong> $2-5 per product for bulk additions</li>
<li><strong>Custom Features:</strong> Quoted per project</li>
<li><strong>Speed Optimization:</strong> $200 for existing stores</li>
<li><strong>SEO Enhancement:</strong> $300-500 for advanced setup</li>
</ul>
</div>
<p style="margin-top: 15px;">Always mention future services during closing: <em>"After support period ends, we offer monthly maintenance if you want ongoing help."</em></p>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You now know every package, price, timeline, and feature. Prove your mastery.</p>
<ul>
<li>📝 10 questions about products and pricing</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 4</li>
</ul>
</div>
`;

// Task 4 Content: Lead Qualification
const task5Content = `
<h2>📚 TASK 4: LEAD QUALIFICATION</h2>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/hx39swDdyx0?rel=0&modestbranding=1" title="Types of Customers + Brief Handling + Market Research" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Types of Customers + Brief Handling + Market Research</strong></div>
</div>

<div class="content-section">
<h3>📊 The M.T.N.D. Logic Flow</h3>
<p>Follow this flow to qualify every single lead:</p>
<div class="mermaid">
graph TD
    Lead[New Lead] --> Money{M: Money?}
    Money -- Yes --> Time{T: Timeline?}
    Money -- No --> Red1[🚩 Red Flag]
    Time -- Yes --> Need{N: Need?}
    Time -- No --> Red1
    Need -- Yes --> Dec{D: Decision Maker?}
    Need -- No --> Red1
    Dec -- Yes --> Green[✅ QUALIFIED LEAD]
    Dec -- No --> Red1
    Red1 --> Count{Red Flags > 1?}
    Count -- Yes --> Stop[🚫 DISQUALIFY]
    Count -- No --> Caution[⚠️ CAUTION]
    style Green fill:#10B981,stroke:#059669
    style Stop fill:#EF4444,stroke:#DC2626
    style Caution fill:#F59E0B,stroke:#D97706
</div>
</div>

<div class="content-section">
<h3>🎯 Why Qualification Matters</h3>
<p>Not every person who messages you deserves your time. In fact, <strong>most don't.</strong></p>
<p>A single bad client can cost you:</p>
<ul>
<li>20+ hours of wasted communication</li>
<li>Endless revision requests</li>
<li>Mental stress and frustration</li>
<li>Potential negative review</li>
<li>Time you could've spent on 3+ good clients</li>
</ul>
<div class="warning-box">
<strong>The Math of Bad Clients:</strong><br>
1 nightmare client at $1,200 who takes 40 hours of drama = $30/hour<br>
3 good clients at $1,200 each who take 10 hours each = $120/hour<br><br>
<strong>20% of your leads will cause 80% of your problems.</strong> Qualification helps you focus on the other 80%.
</div>
</div>

<div class="content-section">
<h3>📊 The M.T.N.D. Framework</h3>
<p>Every lead gets scored on four criteria:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.3);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">M</strong><br>Money</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">T</strong><br>Timeline</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">N</strong><br>Need</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">D</strong><br>Decision-Maker</td>
</tr>
</table>

<h4 style="color: #10B981;">💰 M — Money</h4>
<p><em>"Do they have budget for our services?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Budget isn't an issue for quality work"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm looking in the $1,000-2,000 range"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What's your cheapest option?"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I found someone for $300, can you match?"</td>
</tr>
</table>

<h4 style="color: #6366F1;">⏱️ T — Timeline</h4>
<p><em>"When do they actually need this?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Ready to start this week"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Launch planned for next month"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Need it by tomorrow" (for complex project)</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just exploring for someday"</td>
</tr>
</table>

<h4 style="color: #F59E0B;">🎯 N — Need</h4>
<p><em>"Is there a real problem to solve?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Launching my brand, need professional store"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Current store isn't converting, need redesign"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just curious about prices"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Thinking about maybe starting a business"</td>
</tr>
</table>

<h4 style="color: #EC4899;">👤 D — Decision-Maker</h4>
<p><em>"Can this person say YES?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm the owner, I make all decisions"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It's my business, I can decide today"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Need to check with my partner/team/spouse"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm researching for someone else"</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>❓ The 5 Quick Qualification Questions</h3>
<p>Ask these within your first few messages:</p>
<div class="highlight-box">
<ol style="margin-bottom: 0;">
<li><strong>"What's your budget range for this project?"</strong> → Tests Money</li>
<li><strong>"When do you need this completed?"</strong> → Tests Timeline</li>
<li><strong>"Have you worked with developers before?"</strong> → Reveals expectations & history</li>
<li><strong>"Are you the decision-maker on this?"</strong> → Tests Decision-Maker</li>
<li><strong>"What does success look like for you?"</strong> → Reveals Need + expectations</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚩 The Complete Red Flag List</h3>
<p>Watch for these warning signs:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Really Means</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "What's cheapest?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price-shopper, will never see value</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Need it in 2-3 days"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unrealistic, will blame you for rushed quality</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "My last 3 developers failed"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common factor is THEM, not bad luck</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Pay after I see result"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust issues, risk of non-payment</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "It's just a simple site"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope creep coming, will expect more for less</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Approve every small step"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Micromanager, triple the communication time</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 Rude/condescending tone</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Will get worse under stress of project</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Just exploring options"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No real need, wasting your time</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📊 The 2+ Red Flags Rule</h3>
<p>Here's how to interpret your qualification:</p>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>0-1 Red Flags:</strong> ✅ PROCEED — Engage normally
</div>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.2); border-color: #F59E0B; margin-top: 10px;">
<strong>2 Red Flags:</strong> ⚠️ CAUTION — Proceed with higher standards, be ready to walk
</div>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.2); border-color: #EF4444; margin-top: 10px;">
<strong>3+ Red Flags:</strong> 🚫 DISQUALIFY — Politely decline and move on
</div>
</div>

<div class="content-section">
<h3>🗣️ Polite Disqualification Scripts</h3>
<p>When you need to decline, do it professionally:</p>
<div class="highlight-box">
<strong>For Price-Shoppers:</strong><br>
"Based on what you're describing, it sounds like you're looking for something more budget-friendly. We specialize in premium development for businesses ready to invest $1,200+. I'd recommend checking [Fiverr / freelancer platforms] for options in your range. Best of luck!"
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>For Unrealistic Timelines:</strong><br>
"For the quality we deliver, we need at least 10-14 days. Rush delivery in 3 days wouldn't give you the results either of us would be proud of. If your timeline is flexible, we'd love to help!"
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>For Multiple Red Flags:</strong><br>
"After reviewing your requirements, I don't think we're the right fit for this project. We specialize in [specific niche] and want to make sure you find the best match for your needs. Wishing you success!"
</div>
</div>

<div class="content-section">
<h3>💡 The Golden Rule of Qualification</h3>
<div class="warning-box">
<strong>"If you feel uncomfortable in the first conversation, it will only get worse during the project. Trust your gut."</strong>
</div>
<p style="margin-top: 15px;">One bad client at $2,000 can cost more than 10 good clients in:</p>
<ul>
<li>Time spent on revisions and complaints</li>
<li>Mental energy and stress</li>
<li>Potential bad review</li>
<li>Missed opportunities with good clients</li>
</ul>
<p><strong>It's better to say NO to a bad $2,000 project than suffer through a nightmare.</strong></p>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You now know how to qualify leads and protect your time. Prove your understanding.</p>
<ul>
<li>📝 10 questions about lead qualification</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
</ul>
</div>
`;

// Task 5 Content: Response Templates
const task6Content = `
<h2>📚 TASK 5: RESPONSE TEMPLATES</h2>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/w2KCPqb_3A4?rel=0&modestbranding=1" title="Client Centric Research for Effective Sales" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Client Centric Research for Effective Sales</strong></div>
</div>

<div class="content-section">
<h3>⚡ Impact of Speed on Sales</h3>
<p>The probability of qualifying a lead drops by <strong>400%</strong> if you wait just 10 minutes vs 1 minute.</p>
<div class="mermaid">
pie title Conversion Probability by Response Time
    "0-30 Mins (High)" : 65
    "30-60 Mins (Medium)" : 25
    "1-4 Hours (Low)" : 8
    "24+ Hours (Zero)" : 2
</div>
</div>

<div class="content-section">
<h3>⚡ Speed Wins Deals</h3>
<p>On Fiverr and freelance platforms, <strong>first to respond wins 40% more conversions.</strong></p>
<p>Why? Two reasons:</p>
<ul>
<li><strong>Algorithm boost:</strong> Platforms prioritize fast responders</li>
<li><strong>Buyer psychology:</strong> Clients are impatient. They message 3-5 sellers and go with whoever answers first</li>
</ul>
<div class="warning-box">
<strong>Response Time Standards:</strong>
<ul style="margin-bottom: 0;">
<li>🎯 <strong>Ideal:</strong> Under 5 minutes</li>
<li>✅ <strong>Acceptable:</strong> Under 15 minutes</li>
<li>⚠️ <strong>Risky:</strong> 30+ minutes (they have likely ordered elsewhere)</li>
<li>❌ <strong>Dead:</strong> 1+ hour (they've definitely moved on)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 The 4 Response Types</h3>
<p>Every inquiry falls into one of four categories. Use the right template:</p>

<h4 style="color: #10B981;">Type 1: General Inquiry</h4>
<p><em>"Hi, I need a Shopify store for my business."</em></p>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>Template Structure:</strong>
<ol style="margin-bottom: 0;">
<li>Greeting + enthusiasm</li>
<li>5 Qualifying questions (products, count, branding, features, timeline)</li>
<li>Share relevant portfolio piece</li>
<li>Mention credibility (stores built, rating)</li>
<li>Promise custom offer soon</li>
</ol>
</div>
<div class="highlight-box" style="margin-top: 10px;">
<strong>Example:</strong><br>
"Hi [Name]! 👋 Thanks for reaching out about your store!<br><br>
Quick questions to create the perfect solution:<br>
1️⃣ What products will you sell?<br>
2️⃣ How many products for launch?<br>
3️⃣ Logo, brand colors, photos ready?<br>
4️⃣ Any specific features needed?<br>
5️⃣ Ideal timeline?<br><br>
Built 2000+ stores with 4.9★ rating. Here's one in your niche: [link]<br><br>
Custom offer coming within 2-3 hours! 🚀"
</div>

<h4 style="color: #6366F1; margin-top: 25px;">Type 2: Price-Focused</h4>
<p><em>"How much do you charge?"</em></p>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Key Rule:</strong> Never give exact price without understanding needs first.
</div>
<div class="highlight-box" style="margin-top: 10px;">
<strong>Example:</strong><br>
"Great question! My pricing depends on what you need.<br><br>
Before I quote, quick questions:<br>
1️⃣ Simple store or complex features?<br>
2️⃣ How many products?<br>
3️⃣ Any specific functionality?<br><br>
Packages range from $800-1,800 depending on scope. Once I understand your needs, I'll send exact pricing with what's included!"
</div>

<h4 style="color: #F59E0B; margin-top: 25px;">Type 3: Urgent Timeline</h4>
<p><em>"I need this by next week, can you help?"</em></p>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>Key Rule:</strong> Confirm you can help with rush, but list YOUR requirements.
</div>
<div class="highlight-box" style="margin-top: 10px;">
<strong>Example:</strong><br>
"Yes, rush delivery is possible! 🚀<br><br>
For 7-day delivery, I need from YOU:<br>
✅ Logo and branding ready<br>
✅ All product photos/descriptions<br>
✅ Quick responses (within hours, not days)<br><br>
Do you have all this ready? If yes, we can start today!"
</div>

<h4 style="color: #EC4899; margin-top: 25px;">Type 4: Comparison</h4>
<p><em>"I'm talking to other developers. What makes you different?"</em></p>
<div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-color: #EC4899;">
<strong>Key Rule:</strong> Focus on YOUR value. Never trash competitors.
</div>
<div class="highlight-box" style="margin-top: 10px;">
<strong>Example:</strong><br>
"Smart to compare! Here's what sets us apart:<br><br>
✅ 2000+ stores completed, 4.9★ rating<br>
✅ Speed optimization (85+ PageSpeed) included<br>
✅ 30-90 days of post-delivery support<br>
✅ Unlimited revisions within scope<br>
✅ Training walkthrough so you can manage your store<br><br>
What matters most to YOU in choosing a developer?"
</div>
</div>

<div class="content-section">
<h3>🔄 The Follow-Up Sequence</h3>
<p>Not everyone responds immediately. Here's when and how to follow up:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Timing</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Message Focus</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>+24 hours</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Did you get my offer? Any questions I can answer?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>+48 hours</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"My schedule is filling up. Want me to reserve a slot for you?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>+72 hours</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"No pressure! Closing this for now. Reach out when you're ready. Best of luck!"</td>
</tr>
</table>
<div class="warning-box">
<strong>Maximum 3 follow-ups.</strong> After the +72 hour message, stop. More than 3 feels desperate and damages your professional image.
</div>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You know the templates and follow-up sequence. Prove it.</p>
<ul>
<li>📝 10 questions about response templates</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 6</li>
</ul>
</div>
`;

// Task 6 Content: Sales Psychology
const task7Content = `
<h2>📚 TASK 6: SALES PSYCHOLOGY</h2>

<div class="content-section">
<h3>🧠 The Golden Ratio of Sales</h3>
<p>This is the single most violated rule in sales. Visualized:</p>
<div class="mermaid">
pie title Who Should Be Talking?
    "Client (Listening Phase)" : 80
    "You (Asking/Closing)" : 20
</div>
</div>

<div class="content-section">
<h3>🧠 The Foundation: 80/20 Rule</h3>
<p>The most important rule in sales:</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(16, 185, 129, 0.3)); border: none; text-align: center; padding: 30px;">
<div style="font-size: 2em; font-weight: 700;">LISTEN 80% | SPEAK 20%</div>
<p style="margin-bottom: 0; margin-top: 15px;">Let the client reveal their problems. Say the RIGHT things at the RIGHT time.</p>
</div>
<p style="margin-top: 15px;">Why this works:</p>
<ul>
<li>People love talking about themselves</li>
<li>They reveal their real pain points</li>
<li>They feel understood, not sold to</li>
<li>When you speak, they actually listen</li>
</ul>
</div>

<div class="content-section">
<h3>🎯 The 10 Psychology Techniques</h3>

<h4>1. The 3-Yes Technique</h4>
<p>Get small agreements before your main pitch. It puts them in "agreeing mode."</p>
<div class="highlight-box">
<strong>Example:</strong><br>
"You want your store to convert visitors into buyers, right?" (Yes)<br>
"And you want it done professionally?" (Yes)<br>
"Quality matters to you more than finding the cheapest option?" (Yes)<br><br>
→ Now they're primed to say yes to your offer.
</div>

<h4>2. The Mirror Technique</h4>
<p>Repeat their last few words as a question. Makes them elaborate without direct questioning.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client says</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We tried Facebook ads but they didn't work for us."</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>You respond</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"...didn't work for you?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>They reveal</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Yeah, we spent $5,000 and got almost no sales..."</td>
</tr>
</table>

<h4>3. The Pain Calculator</h4>
<p>Convert their problem into specific dollar amounts. Creates urgency.</p>
<div class="highlight-box">
<strong>Example:</strong><br>
"Your 4-second load time costs you ~25% of visitors.<br>
With 10,000 monthly visitors, that's 2,500 bounces.<br>
At 2% conversion and $50 average order, that's $2,500/month in lost sales.<br><br>
<strong>The $1,200 store pays for itself in 2 weeks.</strong>"
</div>

<h4>4. The Silence Technique</h4>
<p>After stating price: <strong>STOP TALKING.</strong></p>
<div class="warning-box">
<strong>The first person to speak after the price LOSES leverage.</strong><br><br>
Most salespeople fill silence with discounts or justifications. Don't. State your price confidently and WAIT for them to respond.
</div>

<h4>5. The Contrast Principle</h4>
<p>Show an expensive option first. Your actual price feels like a bargain by comparison.</p>
<div class="highlight-box">
<strong>Example:</strong><br>
"For the full scope you described, we're looking at $15,000."<br><br>
(pause)<br><br>
"BUT, I think we can get 80% of the results with our $1,800 Enterprise package. Most clients find that's the sweet spot."
</div>

<h4>6. The Future Pacing Technique</h4>
<p>Help them visualize success. Paint the picture of life AFTER they buy.</p>
<div class="highlight-box">
"Imagine 3 months from now: your store is live, converting at 3%, and you're getting 20 orders a day. You're working ON your business, not struggling with tech issues..."
</div>

<h4>7. The Labeling Technique</h4>
<p>Name their emotion before they do. It defuses the emotion.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They seem worried about price</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It sounds like budget is a concern..."</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They mention past failures</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It seems like you've been burned by agencies before..."</td>
</tr>
</table>

<h4>8. The Success Story Bridge</h4>
<p>Connect their situation to a past client's success.</p>
<div class="highlight-box">
"We had a client in the exact same position — hesitant about the investment, worried about timeline. Two months after launch, they were doing $15K/month. The store paid for itself in the first week."
</div>

<h4>9. The Assumptive Close (Preview)</h4>
<p>Skip "do you want to buy?" and ask about logistics.</p>
<div class="highlight-box">
❌ "Would you like to proceed?"<br>
✅ "Should we start Monday or would Wednesday work better?"
</div>

<h4>10. The Takeaway Close (Preview)</h4>
<p>Gently remove the option. People want what they might lose.</p>
<div class="highlight-box">
"Actually, looking at your timeline, I'm not sure we'd be the right fit right now. We typically work with brands ready to move fast..."<br><br>
→ Often triggers: "Wait, no — I AM ready!"
</div>
</div>

<div class="content-section">
<h3>🧠 Brain Rules in Sales</h3>
<div class="warning-box">
<strong>Why do people reject good offers?</strong><br><br>
The brain releases <strong>cortisol (stress hormone)</strong> when facing change. The status quo feels safer — even when it's not.<br><br>
Your job: Make the <strong>pain of NOT buying</strong> greater than the <strong>pain of buying.</strong>
</div>
<p><strong>People buy based on:</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>😨 Fear</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Of missing out, of staying stuck, of competitors winning</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🤑 Greed</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Of making more money, of growth, of success</td>
</tr>
</table>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned the psychology of influence. Prove you understand it.</p>
<ul>
<li>📝 10 questions about sales psychology</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 7</li>
</ul>
</div>
`;

// Task 7 Content: Objection Handling
const task8Content = `
<h2>📚 TASK 7: OBJECTION HANDLING</h2>

<div class="content-section">
<h3>🔄 The Objection Loop</h3>
<p>Visualize objection handling not as a fight, but as a loop to bring them back to value:</p>
<div class="mermaid">
graph LR
    Obj[Objection] --> Listen[👂 Listen 80/20]
    Listen --> Identify{Identify Type}
    Identify --> Price[Price]
    Identify --> Trust[Trust]
    Identify --> Timing[Timing]
    Price --> ROI[Show ROI]
    Trust --> Proof[Social Proof]
    Timing --> Urgency[Urgency]
    ROI --> Resolve{Resolved?}
    Proof --> Resolve
    Urgency --> Resolve
    Resolve -- Yes --> Close[💰 Close]
    Resolve -- No --> Loop[Loop Back]
    style Obj fill:#EF4444,stroke:#DC2626
    style Close fill:#10B981,stroke:#059669
</div>
</div>

<div class="content-section">
<h3>🎯 The Truth About Objections</h3>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3)); border: none; text-align: center; padding: 25px;">
<div style="font-size: 1.5em; font-weight: 700;">Objections = Buying Signals</div>
<p style="margin-bottom: 0; margin-top: 10px;">If they didn't care, they would just leave. Objections mean they're considering it.</p>
</div>
<p style="margin-top: 15px;">An objection is NOT a rejection. It's a request for more information or reassurance.</p>
</div>

<div class="content-section">
<h3>🛠️ The 6 Core Objections</h3>

<h4>1. "Your price is too high"</h4>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>Script:</strong><br>
"I understand comparing prices. Let me share what that investment includes: [list deliverables]. Our clients find the store pays for itself within 60-90 days through increased conversions. Which of these features is least important to you?"
</div>
<p><strong>If they still resist:</strong> Don't lower price — offer scope reduction.</p>

<h4>2. "I need to think about it"</h4>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>Script:</strong><br>
"Absolutely! What specifically would help you decide? Is it the price, timing, or something else? I want to make sure you have all the info you need."<br><br>
→ This uncovers the REAL hidden objection.
</div>

<h4>3. "How do I know you're legit?"</h4>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Script:</strong><br>
"Totally fair question. We've completed 2000+ stores with a 4.9★ rating. You'll get daily updates, see everything on a preview link before going live, and I can connect you with recent clients if that helps."
</div>

<h4>4. "I'm comparing other options"</h4>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>Script:</strong><br>
"Smart approach! Here's what to compare: revisions policy, support period, what's included in base price, and track record. What matters most to you in choosing?"
</div>

<h4>5. "I don't have budget right now"</h4>
<div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-color: #EC4899;">
<strong>Script:</strong><br>
"I understand cash flow challenges. Few options: we can start with an MVP version at lower scope, or lock in this price and start next month when budget frees up. Which works better for you?"
</div>

<h4>6. "Can I pay after delivery?"</h4>
<div class="highlight-box" style="background: rgba(6, 182, 212, 0.15); border-color: #06B6D4;">
<strong>Script:</strong><br>
"I understand wanting to minimize risk. Our process: you see complete preview before anything goes live. Payment upfront lets us prioritize your project fully. With 2000+ completed projects and 4.9★ rating, we've earned that trust."
</div>
</div>

<div class="content-section">
<h3>📊 The Price Objection Flowchart</h3>
<p>"Too expensive" can mean three different things:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Type</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>They Say</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Solution</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Budget Issue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I only have $700"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope reduction or MVP</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Value Issue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Why so much for a website?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show ROI, portfolio proof</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Comparison Issue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"X charges less"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Highlight differentiators</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🎯 The Feel-Felt-Found Framework</h3>
<p>Classic objection handling structure:</p>
<div class="highlight-box">
<strong>"I understand how you FEEL.</strong> (Empathy)<br><br>
<strong>Other clients FELT the same way.</strong> (Normalize)<br><br>
<strong>What they FOUND was...</strong> (Resolution)"
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>Example:</strong><br>
"I understand how you feel about the investment. Other clients felt the same way initially. What they found was that the store paid for itself in 60-90 days through increased conversions — and they wished they'd started sooner."
</div>
</div>

<div class="content-section">
<h3>🛡️ The Scope Reduction Technique</h3>
<div class="warning-box">
<strong>NEVER lower price for the same work. Reduce SCOPE instead.</strong>
</div>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I can do it for $900 instead of $1,200"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"For $900, we can do 3 pages instead of 5, 15 products instead of 25. You can expand later."</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>💡 The Inoculation Technique</h3>
<p>Address objections BEFORE they're raised:</p>
<div class="highlight-box">
"You might be thinking $1,200 is a lot for a website. Here's why it pays for itself: our clients see 20-40% conversion improvements, which at 100 orders means $2,000-4,000 extra revenue in month one."
</div>
<p>By bringing up the concern yourself, you defuse it before it becomes a wall.</p>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned to handle every major objection. Prove it.</p>
<ul>
<li>📝 10 questions about objection handling</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 8</li>
</ul>
</div>
`;

// Task 8 Content: Closing Techniques
const task9Content = `
<h2>📚 TASK 8: CLOSING TECHNIQUES</h2>

<div class="content-section">
<h3>🎯 The Truth About Closing</h3>
<p>Here's what most people get wrong about closing:</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3)); border: none; text-align: center; padding: 25px;">
<div style="font-size: 1.3em; font-weight: 700;">"The close is not a single moment — it's the natural conclusion of a well-handled conversation."</div>
</div>
<p style="margin-top: 15px;">If you've qualified properly, handled objections, and demonstrated value — closing feels easy, not pushy.</p>
</div>

<div class="content-section">
<h3>🛠️ The 10 Closing Techniques</h3>

<h4>1. The Assumptive Close</h4>
<p>Skip "do you want to buy?" — ask about logistics instead.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Wrong</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Would you like to proceed with this?"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Right</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Should we start Monday or would Wednesday work better?"</td>
</tr>
</table>

<h4>2. The Price Sandwich</h4>
<p>Never say price alone. Wrap it in value.</p>
<div class="highlight-box">
"For a complete 5-page custom store with speed optimization, SEO setup, mobile-first design, and 30 days of support — <strong>$1,200</strong>."
</div>

<h4>3. The Options Close</h4>
<p>Give 2-3 choices. Shifts from "should I buy?" to "which should I buy?"</p>
<div class="highlight-box">
"We have Premium at $1,200 or Enterprise at $1,800. Which fits your goals better?"
</div>

<h4>4. The Good-Better-Best</h4>
<p>Present 3 tiers. Most choose the middle option.</p>
<div class="highlight-box">
"We have MVP at $800, Premium at $1,200, or Enterprise at $1,800. Most clients go with Premium — it has everything you need."
</div>

<h4>5. The Upfront Contract</h4>
<p>Set expectations at the START of the conversation.</p>
<div class="highlight-box">
"By the end of our chat, we'll know if we're a good fit. If yes, I'll share next steps and pricing. If not, no pressure at all. Sound fair?"
</div>

<h4>6. The Delay Close</h4>
<p>If they need time, book a SPECIFIC follow-up.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Wrong</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Take your time and get back to me."</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Right</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Perfect! When should I follow up — Thursday or Friday?"</td>
</tr>
</table>

<h4>7. The Takeaway Close</h4>
<p>Gently remove the option. Creates scarcity.</p>
<div class="highlight-box">
"Actually, looking at your timeline and requirements, I'm not sure we're the right fit. We typically work with brands ready to invest $1,500+ and move fast..."<br><br>
→ Often triggers: "Wait, I AM ready!"
</div>

<h4>8. The "If I Could, Would You" Close</h4>
<p>Test if the stated concern is real or an excuse.</p>
<div class="highlight-box">
"If I could get delivery by Friday instead of Monday, would you be ready to move forward today?"<br><br>
→ If yes, you know the real concern. If no, there's a hidden objection.
</div>

<h4>9. The Summary Close</h4>
<p>Recap all value before asking.</p>
<div class="highlight-box">
"So you're getting: 5-page custom design, speed optimization, SEO setup, mobile-first, 30-day support, and unlimited revisions. Ready to get started?"
</div>

<h4>10. The Urgency Close</h4>
<p>Use REAL scarcity — never fake it.</p>
<div class="highlight-box">
<strong>Real urgency examples:</strong>
<ul style="margin-bottom: 0;">
<li>"I have 2 slots left this month before I'm fully booked"</li>
<li>"I can hold this price until Friday"</li>
<li>"We're raising prices next quarter"</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⚠️ After They Say YES</h3>
<div class="warning-box">
<strong>STOP SELLING IMMEDIATELY.</strong><br><br>
Many salespeople lose deals by continuing to talk after the close. Don't explain why they made a good decision. Don't offer more discounts.
</div>
<p><strong>After "Yes":</strong></p>
<ol>
<li>Thank them genuinely</li>
<li>Send invoice immediately</li>
<li>Confirm timeline and next steps</li>
<li>END the sales conversation</li>
</ol>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned the art of closing. Prove your mastery.</p>
<ul>
<li>📝 10 questions about closing techniques</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 9</li>
</ul>
</div>
`;

// Task 9 Content: Practice Scenarios
const task10Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>📊 The Complete Sales Ecosystem</h3>
<p>This is how every single interaction should flow, from first message to delivery:</p>
<div class="mermaid">
sequenceDiagram
    participant C as Client
    participant S as You (Sales)
    participant T as Dev Team
    
    C->>S: 1. Inquiry (Msg)
    S->>S: 2. Qualify (M.T.N.D.)
    
    alt Disqualified
        S-->>C: Polite Decline
    else Qualified
        S->>C: 3. Response & Questions
        C->>S: Answers
        S->>C: 4. Presentation (Package)
        
        opt Objections
            C-->>S: "Too expensive"
            S->>C: 5. Handle Objection
        end
        
        S->>C: 6. Close (Assumptive)
        C->>S: "Yes, let's do it"
        S->>C: Invoice & Onboarding
        C->>S: Payment
        S->>T: 7. Handoff (Docs)
        T->>C: Delivery (14 Days)
        S->>C: 8. Post-Sale Check-in
    end
</div>
</div>

<div class="content-section">
<h3>🎯 Putting It All Together</h3>
<p>You've learned mindset, products, qualification, psychology, objection handling, and closing. Now you combine them.</p>
<div class="warning-box">
<strong>This quiz tests EVERYTHING from Tasks 1-8.</strong><br>
You'll face realistic scenarios and choose the best response. Review all previous material if needed.
</div>
</div>

<div class="content-section">
<h3>📊 The Complete Sales Flow</h3>
<div class="highlight-box">
<strong>STAGE 1: FIRST CONTACT</strong>
<ul style="margin-bottom: 10px;">
<li>Respond within 1 hour (ideally 30 min)</li>
<li>Use correct template type</li>
<li>Ask qualifying questions</li>
<li>Share relevant portfolio</li>
</ul>

<strong>STAGE 2: QUALIFICATION</strong>
<ul style="margin-bottom: 10px;">
<li>Score using M.T.N.D.</li>
<li>Identify red flags</li>
<li>Proceed or disqualify</li>
</ul>

<strong>STAGE 3: PRESENTATION</strong>
<ul style="margin-bottom: 10px;">
<li>Present appropriate package</li>
<li>Use Price Sandwich</li>
<li>Offer Good-Better-Best options</li>
</ul>

<strong>STAGE 4: OBJECTION HANDLING</strong>
<ul style="margin-bottom: 10px;">
<li>Listen (80/20 rule)</li>
<li>Identify objection type</li>
<li>Use appropriate script</li>
</ul>

<strong>STAGE 5: CLOSING</strong>
<ul style="margin-bottom: 10px;">
<li>Summarize value</li>
<li>Use Assumptive/Options close</li>
<li>Stop selling after "yes"</li>
</ul>

<strong>STAGE 6: HANDOFF</strong>
<ul style="margin-bottom: 10px;">
<li>Document EVERYTHING</li>
<li>Send to dev team</li>
<li>Confirm timeline with client</li>
</ul>

<strong>STAGE 7: POST-DELIVERY</strong>
<ul style="margin-bottom: 0;">
<li>Check in 48 hours after</li>
<li>Ask for review</li>
<li>Ask for referral</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Handoff Documentation</h3>
<p>When passing a closed deal to the development team, include:</p>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>🏢 <strong>Client info:</strong> Name, business name, contact details</li>
<li>🎯 <strong>Niche:</strong> What they sell, target audience</li>
<li>📦 <strong>Products:</strong> How many, categories, special needs</li>
<li>🎨 <strong>Branding:</strong> Logo ready? Colors? Assets provided?</li>
<li>✨ <strong>Features:</strong> ALL agreed features listed clearly</li>
<li>⏰ <strong>Timeline:</strong> What was promised, any rush fees</li>
<li>📝 <strong>Special requests:</strong> Anything unusual mentioned</li>
<li>⚠️ <strong>Notes:</strong> Any concerns or red flags observed</li>
</ul>
</div>
<div class="warning-box" style="margin-top: 15px;">
The dev team should NOT need to ask the client for information you already discussed. Complete handoff = smooth project = happy client = good review.
</div>
</div>

<div class="content-section">
<h3>🏆 Post-Sale Actions</h3>
<p>The sale doesn't end at payment.</p>
<h4>48 Hours After Delivery:</h4>
<div class="highlight-box">
"Hi [Name]! Just checking in — how's everything going with your new store? Any questions I can help with?"
</div>

<h4>If They're Happy:</h4>
<div class="highlight-box">
"So glad you love it! Would you mind leaving a quick review? It really helps us grow. And if you know anyone else planning to launch a store, we'd love to help them too!"
</div>

<h4>Mention Future Services:</h4>
<div class="highlight-box">
"After your 30-day support period, we offer monthly maintenance plans if you want ongoing help. No pressure — just letting you know it's available!"
</div>
</div>


<div class="content-section">
<h3>🎬 ALEX HORMOZI MASTERCLASS - REQUIRED VIEWING</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ MANDATORY:</strong> Watch ALL 4 videos below before taking the final quiz. These videos will make you better than 90% of salespeople in the market. Take notes. Re-watch key sections. This is your secret weapon.
</div>

<h4>📺 Video 1: The Ultimate Sales Training for 2026 [Full Course]</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/StVqS0jD7Ls?rel=0&modestbranding=1" title="The Ultimate Sales Training for 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Ultimate Sales Training for 2026 [Full Course]</strong></div>
</div>

<h4>📺 Video 2: How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JE2_7elAcxM?rel=0&modestbranding=1" title="How to Sell Better than 99%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - How to Sell Better than 99% Of People (4 HOUR ULTIMATE GUIDE)</strong></div>
</div>

<h4>📺 Video 3: The Best SALES TRAINING On The Internet</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NcD2t9qt-fM?rel=0&modestbranding=1" title="The Best Sales Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - The Best SALES TRAINING On The Internet</strong></div>
</div>

<h4>📺 Video 4: My Best Sales Tactic (to Make a TON of Money)</h4>
<div style="margin: 25px 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0&modestbranding=1" title="My Best Sales Tactic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; font-size: 0.9em; color: #94A3B8;">🎬 <strong>Alex Hormozi - My Best Sales Tactic (to Make a TON of Money)</strong></div>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>✅ Key Takeaways to Note:</strong>
<ul style="margin-bottom: 0;">
<li>Conviction × Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>
<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>This quiz tests realistic scenarios combining everything you've learned.</p>
<ul>
<li>📝 10 scenario-based questions</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Final Certification</li>
</ul>
</div>
`;

// Task 10 Content: Final Certification
const task11Content = `
<h2>🏆 TASK 10: FINAL CERTIFICATION EXAM</h2>

<div class="content-section" style="text-align: center;">
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(99, 102, 241, 0.3)); border: none; padding: 40px;">
<div style="font-size: 2em; font-weight: 700;">🎓 THE FINAL TEST</div>
<p style="margin: 20px 0 0 0; font-size: 1.2em;">Prove you're ready to represent Digital Heroes.</p>
</div>
</div>

<div class="content-section">
<h3>📋 Exam Details</h3>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>📝 <strong>20 questions</strong> covering ALL topics from Tasks 1-9</li>
<li>🎯 <strong>20/20 required</strong> — no exceptions</li>
<li>⏱️ Questions are randomized each attempt</li>
<li>🔄 Unlimited retries (but you must study between attempts)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📚 Topics Covered</h3>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Task</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Topics</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 1</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mindset, discipline, rejection, deliberate practice</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 2</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Company knowledge, premium positioning, rules</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 3</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Packages, pricing, timelines, presentations</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 4</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">M.T.N.D. framework, red flags, disqualification</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 5</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response templates, follow-up sequence</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 6</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Psychology techniques, brain rules</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 7</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Objection handling, Feel-Felt-Found, scope reduction</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 8</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Closing techniques, after "yes" actions</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 9</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete sales flow, handoff, post-sale</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🎥 After Passing: Video Submission</h3>
<p>Once you score 20/20, you must record a <strong>30-minute video walkthrough</strong> demonstrating your knowledge.</p>
<div class="highlight-box">
<strong>Video Structure (30 minutes):</strong>
<ul style="margin-bottom: 0;">
<li><strong>Introduction (2 min):</strong> Your name, why you want this role</li>
<li><strong>Knowledge Demo (10 min):</strong> Walk through key concepts in YOUR words</li>
<li><strong>Scenario Handling (15 min):</strong> Handle price objection, "let me think", comparison, and demonstrate a close</li>
<li><strong>Closing (3 min):</strong> What will make you successful, any questions</li>
</ul>
</div>
<div class="warning-box" style="margin-top: 15px;">
<strong>Video Requirements:</strong>
<ul style="margin-bottom: 0;">
<li>25-35 minutes total</li>
<li>Screen share + face visible (Loom or similar)</li>
<li>Clear audio</li>
<li>Demonstrates genuine understanding (not reading notes)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>✅ After Certification</h3>
<p>Upon passing the exam AND video approval:</p>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<ul style="margin-bottom: 0;">
<li>✅ Progress bar shows 100%</li>
<li>✅ "CERTIFIED" badge unlocked</li>
<li>✅ Added to Certified Sales Executives roster</li>
<li>✅ Assigned to Fiverr account with supervision</li>
<li>✅ Begin live conversations with senior review</li>
<li>✅ Full independence after 10 successful orders</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Final Exam?</h3>
<p>This is the culmination of everything. 20 questions. 20/20 required.</p>
<ul>
<li>📝 20 comprehensive questions</li>
<li>🎯 Score <strong>20/20</strong> to complete certification</li>
<li>🎥 Video submission required after passing</li>
</ul>
<div class="warning-box" style="margin-top: 15px;">
<strong>Remember:</strong> "Skills can be trained, but attitude cannot. A person at level 6 can become 10, but level 3 cannot become 6."<br><br>
You've come this far. Finish strong.
</div>
</div>
`;

// Quiz Questions - Task 1: Mindset (10 Questions)

const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust and ensures long-term operational sustainability", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "Half-day salary deduction", "Written warning recorded in your file", "No consequence if it's less than 30 minutes late"], c: 1 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself — this aligns with industry best practices and ensures consistent results across different project contexts", "Ignore it — it's not your problem", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach", "Everyone including interns", "Senior developers and team leads only", "Those with exceptional KPI scores — this is the standard approach"], c: 1 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As an ally whose problem is your common enemy — listen, understand, collaborate", "As a burden that drains resources", "As a problem to be managed — this reflects standard operating procedure for most professional teams", "As someone who should be transferred to management"], c: 0 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement as long as you're online"], c: 1 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["5-10% increment as a minimum — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "10-15% increment for meeting expectations", "No increment and placed on a Performance Improvement Plan (PIP)", "Verbal warning but salary stays the same"], c: 2 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — this is the recommended approach based on current documentation and expert consensus in the field today", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference — implementing this correctly requires understanding the full context of how each operational element interacts", "A rough guideline to review monthly", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A reference document primarily for new employees during onboarding"], c: 2 }
];

const task2Quiz = [
    { q: "At Digital Heroes, the sales mindset 'You Are Not Selling — You Are Solving' means:", o: ["Avoid discussing pricing until the client brings it up first to keep the conversation comfortable and non-transactional — this aligns with company best practices and ensures consistent results across all project types", "Diagnose the client's actual business problem first, propose a tailored solution, then align pricing to the value delivered for maximum impact", "Give free consultations hoping the client will buy later since solving their problems for free builds lasting trust", "Focus on your product features exclusively since a strong product will sell itself without additional persuasion needed"], c: 1 },
    { q: "A prospect tells you 'we'll think about it and get back to you.' The Digital Heroes SOP-trained response is:", o: ["Say 'okay, take your time' and wait patiently because following up can feel pushy and may damage the professional relationship — following this approach prevents common issues and keeps the workflow reliable and repeatable for teams", "Acknowledge their need to consider, ask what specific aspects they need to evaluate, and propose a concrete follow-up date and time", "Move on to the next prospect immediately since truly interested clients would commit on the first conversation without delay", "Send them a 50% discount right away to remove the most common objection and accelerate their decision-making process"], c: 1 },
    { q: "The Digital Heroes 'Interconnected Chain' principle applies to sales because:", o: ["Sales closes deals and then it becomes someone else's responsibility to deliver on whatever promises were made to the customer — this method has been validated through practice and produces reliable professional outcomes consistently", "Every promise you make in sales becomes a deliverable for design, development, and PM — overselling breaks the chain and creates cascading damage", "Sales operates independently from other departments since they have completely different KPIs and success metrics from the rest of the team", "The chain only applies to production teams because sales is the starting point of the process and doesn't connect to downstream work"], c: 1 },
    { q: "Salesperson A: 10 leads, 3 closes (30%). Salesperson B: 50 leads, 10 closes (20%). Who performs better?", o: ["Salesperson A — higher conversion percentage matters most", "Both equal — different strategies yield same results", "Salesperson B — 10 total closes beats 3 total closes", "Cannot determine without knowing deal sizes"], c: 2 },
    { q: "What separates 10,000 hours of experience from 10,000 hours of deliberate practice?", o: ["There's no difference, time invested is what matters — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Deliberate practice is easier and requires less focus", "Experience is superior because real situations teach more", "Deliberate practice involves reviewing, feedback, and pushing past comfort"], c: 3 },
    { q: "You wake up feeling unmotivated with 5 unread client messages. What should you do?", o: ["Respond anyway — discipline means working regardless of feelings", "Reply with brief answers since you're not at your best — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Wait until tomorrow when motivation returns", "Ask a colleague to handle your messages today"], c: 0 },
    { q: "Why does this training require 10/10 (100%) on every quiz instead of 80%?", o: ["To make training intentionally difficult and filter applicants — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "In real sales, you either handle situations correctly or lose the deal", "Because the company has strict documentation requirements", "To ensure trainees memorize content word-for-word"], c: 1 },
    { q: "A trainee completes 6/10 tasks then stops saying 'I know enough to start selling'. What will likely happen?", o: ["They'll succeed because eagerness to start is valuable — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "They'll outperform those who completed all 10 tasks", "They'll fail — lacking discipline to finish means they'll quit when challenged", "They should receive credit for their initiative and confidence"], c: 2 },
    { q: "The training states your income is determined by:", o: ["Luck, market conditions, and economic factors", "Hours worked regardless of quality or skill", "Your age, experience, and educational background", "The average of your most valuable skills"], c: 3 },
    { q: "Client sends angry message complaining previous freelancer scammed them. They're rude and demanding proof. Your mindset should be:", o: ["Understand their anger is about past experience, respond professionally", "Get offended and suggest they find someone else — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Immediately offer a discount to calm them down", "Ignore the message — rude clients aren't worth the trouble"], c: 0 }
];

// Quiz Questions - Task 2: Company Knowledge (10 Questions)
const task3Quiz = [
    { q: "At Digital Heroes, 'Rejection is Information, Not Insult' means when a prospect declines:", o: ["Take it personally and work harder on the next pitch to prove your worth and avoid experiencing the pain of rejection again — teams using this report fewer issues and more efficient project completion rates overall", "Analyze WHY they said no (budget, timing, trust, fit?), document the pattern, and refine your approach for similar future prospects", "Mark the lead as permanently dead and never contact them again since revisiting rejected prospects wastes valuable selling time", "Argue with the prospect about why they're making a mistake since logical reasoning should change their mind if presented well"], c: 1 },
    { q: "The Digital Heroes sales SOP requires thorough documentation of:", o: ["Only closed deals since tracking losses wastes time that would be better spent on prospecting for new sales opportunities — this is recommended based on documentation and expert consensus in the field of digital services", "Every interaction logged: lead source, objections raised, pricing discussed, follow-up dates, and final outcome for continuous improvement", "Just the final contract value because management only cares about revenue numbers, not the detailed process behind each sale", "Nothing formal since good salespeople keep everything in their head and documentation slows down the fast-paced sales cycle"], c: 1 },
    { q: "Digital Heroes' approximate Fiverr rating and store count for credibility:", o: ["4.5 stars, 1000+ stores", "3.5 stars, 500+ stores", "5.0 stars, 100+ stores", "4.9 stars, 2000+ stores"], c: 3 },
    { q: "What should be discussed BEFORE taking a client's order?", o: ["Hard technical problems and complex requirements", "Store access credentials and login info — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Logo colors and brand preferences", "Product images and content details"], c: 0 },
    { q: "Client: 'My last 4 developers were terrible.' This indicates:", o: ["A great client who deserves better service — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "A red flag — the common factor in all failures is THEM", "An unlucky person we should help", "Someone we should offer extra revisions to"], c: 1 },
    { q: "Digital Heroes' payment policy for most projects:", o: ["50% upfront, 50% after delivery", "Payment after client approves final work", "Full payment upfront before work begins", "Monthly installments over project duration"], c: 2 },
    { q: "Why refuse 'free consulting' before order?", o: ["We don't know answers until we start", "Fiverr platform prohibits it — this reflects standard operating procedure for most professional teams", "It takes too much time from paid work", "Our expertise has value — giving solutions before order lets them take advice elsewhere"], c: 3 },
    { q: "What makes Digital Heroes different from a $200-300 Fiverr freelancer?", o: ["Conversion-focused design, speed optimization, proper support, guarantees", "We just charge more for identical work — this is the recommended approach based on current documentation and expert consensus in the field today", "We work slower but more carefully", "We primarily accept big brand clients"], c: 0 },
    { q: "Client: 'Can I pay after I see the final result?' Best response:", o: ["Yes, we can accommodate first-time clients", "Explain upfront payment enables dedicated resources, preview before live, proven track record", "Let me check with my manager about exceptions", "Just say 'No' with no explanation — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "The relationship between price and client quality:", o: ["Lower prices attract better clients who appreciate savings — implementing this correctly requires understanding the full context of how each operational element interacts", "Price has no effect on client quality", "Higher prices attract quality-focused clients; lower prices attract difficult price-shoppers", "Price should be adjusted based on how wealthy clients appear"], c: 2 }
];

// Quiz Questions - Task 3: Product Mastery (10 Questions)
const task4Quiz = [
    { q: "The two main package tiers in Digital Heroes' pricing:", o: ["Starter ($500) and Professional ($800) — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Bronze ($1,000) and Gold ($2,000)", "Basic ($300) and Advanced ($600)", "Premium ($1,200) and Enterprise ($1,800)"], c: 3 },
    { q: "Client: 'Just 5 products, need simple store.' Appropriate recommendation:", o: ["Premium ($1,200) for smaller stores with standard needs", "Tell them we don't work with small stores — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Enterprise ($1,800) because always upsell", "Custom $500 package not in standard offerings"], c: 0 },
    { q: "Standard delivery timeline for Shopify store projects:", o: ["3-5 days", "14 days", "7 days", "30 days"], c: 1 },
    { q: "Client wants unlimited products, custom functionality, 90 days support. Recommend:", o: ["Premium ($1,200)", "Create custom package for $1,000", "Enterprise ($1,800)", "Tell them this isn't possible"], c: 2 },
    { q: "Support period included with Premium ($1,200) package:", o: ["7 days", "14 days", "90 days", "30 days"], c: 3 },
    { q: "Client: 'What if I need changes after support ends?' Correct response:", o: ["Mention monthly maintenance plans as ongoing option", "Too bad, should have asked during support — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "We'll do it free because we value relationships", "You'll need to hire someone else"], c: 0 },
    { q: "When presenting packages, recommended approach:", o: ["Mention cheapest option to get the sale — this is the standard approach", "Present 2-3 options and let them choose based on needs", "Mention most expensive to maximize revenue — this is the standard approach", "Wait for them to ask about pricing first"], c: 1 },
    { q: "What's included that cheap competitors DON'T include:", o: ["Basic theme installation — this reflects standard operating procedure for most professional teams", "Product uploads only — this reflects standard operating procedure for most professional teams", "Speed optimization, SEO setup, mobile responsiveness, training", "Just homepage design — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "Client has $700 budget but needs Premium ($1,200) scope. Correct approach:", o: ["Discount to $700 to win the deal", "Do full Premium work for $700 to build relationship", "Tell them to return when they have more money", "Offer reduced-scope MVP at $700, can expand later"], c: 3 },
    { q: "Client: 'Your Premium seems expensive compared to others.' Highlight:", o: ["Specific deliverables: custom design, speed optimization, SEO, revisions, support, training", "Just say 'we're worth it' without specifics", "Offer to match competitor pricing — this reflects standard operating procedure for most professional teams", "Tell them they're wrong about the market"], c: 0 }
];

// Quiz Questions - Task 4: Lead Qualification (10 Questions)
const task5Quiz = [
    { q: "At Digital Heroes, 'Discipline Beats Motivation' for sales means:", o: ["Wait until you feel motivated to make calls since forcing yourself leads to low-quality conversations that waste everyone's time — implementing this correctly requires understanding the full operational context of the business", "Follow the daily prospecting SOP regardless of feelings — 20 outreach contacts daily, EOD report logged, pipeline updated consistently", "Motivation is all you need since if you're passionate enough about the product, the sales will naturally come without structure", "Take mental health days whenever motivation dips because burned out salespeople perform worse on every measurable metric overall"], c: 1 },
    { q: "The Digital Heroes sales EOD report must include:", o: ["A one-word status update like 'good' or 'productive' is sufficient to maintain daily accountability with management oversight", "Leads contacted, meetings booked, proposals sent, deals closed, objections encountered, and next-day plan for full transparency", "Only your total sales number since daily details are irrelevant as long as monthly targets are met at the end of the period", "Nothing if it was a slow day since reporting zero activity makes you look unproductive and creates unnecessary negative impressions"], c: 1 },
    { q: "Client: 'Need this done by tomorrow, urgent!' How to interpret:", o: ["Great opportunity — urgent clients pay premium and ensures long-term operational sustainability", "Green flag — shows they're ready to buy immediately", "Normal request — all clients want things fast", "Red flag — unrealistic timeline, will blame you for rushed work"], c: 3 },
    { q: "'Are you the decision maker?' 'Need to check with partner and wife.' This indicates:", o: ["Red flag — multiple decision-makers means delays and deal death", "Green flag — responsible behavior and ensures long-term operational sustainability", "Green flag — family involvement shows commitment", "Neutral — doesn't matter who decides"], c: 0 },
    { q: "'Just exploring options for someday.' How does this score on Need:", o: ["Green flag — early engagement lets you shape needs and ensures long-term operational sustainability", "Red flag — no clear need means no urgency, will waste time", "Green flag — honesty is valuable", "Neutral — all leads start this way"], c: 1 },
    { q: "How many red flags should trigger client disqualification:", o: ["5 or more = consider disqualifying", "1 red flag = immediately disqualify", "2 or more red flags = politely disqualify", "Red flags don't matter if they have money"], c: 2 },
    { q: "The 5 Quick Qualification Questions to ask first:", o: ["Name, email, phone, address, company size — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Age, location, industry, years in business, revenue", "Favorite color, theme, product count, shipping, payment processor", "Budget range, timeline, previous dev experience, decision-maker status, success definition"], c: 3 },
    { q: "'Budget isn't an issue for quality work' indicates:", o: ["Green flag — willing to pay for value, not price-shopping", "Neutral — everyone says this and ensures long-term operational sustainability", "Red flag — trying to get you to overcharge", "Red flag — they're lying about money"], c: 0 },
    { q: "2 red flags identified (price-shopper + unrealistic timeline). Correct approach:", o: ["Ghost them — stop responding and ensures long-term operational sustainability", "Polite disqualification: acknowledge needs, explain not right fit, wish well", "Tell them directly they're a bad client", "Try to convert anyway — all revenue matters"], c: 1 },
    { q: "Client passes M.T.N.D. but says 'My last 5 developers all failed.' What now:", o: ["Proceed immediately — passed M.T.N.D. and ensures long-term operational sustainability", "Offer discount to win them from bad experiences", "Recognize 'Bad History Pattern' red flag, probe deeper before committing", "Tell them developers are generally unreliable"], c: 2 }
];

// Quiz Questions - Task 5: Response Templates (10 Questions)
const task6Quiz = [
    { q: "MAXIMUM response time for Fiverr inquiry during business hours:", o: ["Same day is acceptable", "1 hour", "30 minutes", "Under 5 minutes"], c: 3 },
    { q: "General inquiry: 'Need Shopify store for clothing brand.' First response should include:", o: ["Thank them, ask 5 qualifying questions, share relevant portfolio, mention stats", "Just send price list and wait — this reflects standard operating procedure for most professional teams", "Ask 'What's your budget?' as primarily question", "Send 2-page company history document"], c: 0 },
    { q: "First message: 'How much do you charge?' What response template:", o: ["General Inquiry template — this reflects standard operating procedure for most professional teams", "Price-Focused — don't give exact price, ask qualifying questions first", "Just send '$1,200' and wait — this reflects standard operating procedure for most professional teams", "Urgent Timeline template — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "'Need this launched in 5 days, can you help?' Correct approach:", o: ["Say 'yes' immediately to win deal — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Say 'no, we can't do rush jobs'", "Confirm you can help, list what YOU need from THEM, ask if ready", "Charge triple without explaining"], c: 2 },
    { q: "'Talking to 3 other developers. What makes you different?' Response:", o: ["Trash talk competitors — this reflects standard operating procedure for most professional teams", "Tell them to go with whoever's cheapest", "Offer to match any lower price", "List differentiators (rating, revisions, support), ask what matters to THEM"], c: 3 },
    { q: "Sent offer 24 hours ago, no response. First follow-up should say:", o: ["Did you get my offer? Any questions I can answer?", "I'll give 20% off if you order today — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Are you going to order or not?", "Wait another week before following up"], c: 0 },
    { q: "MAXIMUM follow-ups for an unresponsive lead:", o: ["1", "3", "10", "Unlimited until they respond"], c: 1 },
    { q: "+48 hour follow-up should create gentle urgency. Recommended approach:", o: ["Last chance, ordering closing soon!", "Double the discount if order now", "Mention schedule filling up, offer to reserve slot if planning to move forward", "Why haven't you responded? — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "Portfolio examples to share should be:", o: ["Any random stores from portfolio", "No examples — wait until they ask", "Biggest/most expensive projects — this is the standard approach", "Stores in SIMILAR niche to what client is building"], c: 3 },
    { q: "Client silent after +72hr follow-up. Final message:", o: ["No pressure, closing for now. Reach out when ready. Best of luck!", "This is your LAST CHANCE — this reflects standard operating procedure for most professional teams", "Fine, I guess you don't want my help", "Send 5 more follow-ups over next month"], c: 0 }
];

// Quiz Questions - Task 6: Sales Psychology (10 Questions)
const task7Quiz = [
    { q: "The 80/20 Rule in sales means:", o: ["80% of revenue from 20% of clients — this aligns with industry best practices and ensures consistent results across different project contexts", "Listen 80%, speak 20% — let client reveal needs", "Spend 80% prospecting, 20% closing", "Close 80% of deals, lose 20%"], c: 1 },
    { q: "The '3-Yes Technique' involves:", o: ["Offering 3 package options — this reflects standard operating procedure for most professional teams", "Following up 3 times maximum — this reflects standard operating procedure for most professional teams", "Getting 3 small agreements before main pitch, putting them in agreeing mode", "Asking for the sale 3 times — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "Client: 'Facebook ads didn't really work for us.' Using Mirror Technique:", o: ["That's too bad. Anyway, about our services... — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "How much did you spend on ads?", "Facebook ads are terrible, stop using them", "'...didn't work for you?' (repeat last words as question)"], c: 3 },
    { q: "The 'Pain Calculator' technique involves:", o: ["Converting problem into specific dollar amounts lost per day/week/month", "Calculating discount amount — this reflects standard operating procedure for most professional teams", "Measuring emotional response — this reflects standard operating procedure for most professional teams", "Asking how much physical pain they're in"], c: 0 },
    { q: "Instead of 'Do you want to proceed?', Assumptive Close says:", o: ["So should we do this or not? — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Should we start Monday or would Wednesday work better?", "Let me know if you decide to move forward", "Take your time deciding"], c: 1 },
    { q: "Silence Technique after stating price:", o: ["Immediately offer discount — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Explain why it's worth it for 5 minutes", "Stop talking and wait — first to speak loses leverage", "Ask if it's too expensive"], c: 2 },
    { q: "Contrast Principle suggests:", o: ["Show cheapest option first — this reflects standard operating procedure for most professional teams", "Hide the price entirely — this reflects standard operating procedure for most professional teams", "Show primarily one option — this reflects standard operating procedure for most professional teams", "Show expensive option first ($15K), then actual price ($3.5K) feels like bargain"], c: 3 },
    { q: "Labeling Technique involves:", o: ["Naming their emotion before they do: 'Sounds like you've been burned before...'", "Putting labels on products — this reflects standard operating procedure for most professional teams", "Categorizing by budget — this reflects standard operating procedure for most professional teams", "Creating name tags — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "'Let me think about it.' Takeaway Close response:", o: ["Take all the time you need — this reflects standard operating procedure for most professional teams", "Actually, we might not be the right fit for brands not ready to move fast", "Give discount if decide today — this reflects standard operating procedure for most professional teams", "What's there to think about? — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "Why do clients often reject good offers (Brain Pain)?", o: ["They don't have money — this reflects standard operating procedure for most professional teams", "They don't understand the offer — this reflects standard operating procedure for most professional teams", "Brain releases cortisol with change, making status quo feel safer even when it's not", "Always trying to negotiate — this reflects standard operating procedure for most professional teams"], c: 2 }
];

// Quiz Questions - Task 7: Objection Handling (10 Questions)
const task8Quiz = [
    { q: "What do objections actually indicate:", o: ["Client will never buy — this reflects standard operating procedure for most professional teams", "You've failed as salesperson", "You should offer discount immediately", "Objections are BUYING SIGNALS — if they didn't care, they'd leave"], c: 3 },
    { q: "'Your price is too high. Found someone for $500.' Response:", o: ["Acknowledge, break down what's included, explain ROI, ask which features okay to skip", "Tell them $500 person is a scammer", "Match the $500 price — this reflects standard operating procedure for most professional teams", "Take it or leave it — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "'Feel, Felt, Found' framework structure:", o: ["I feel you should buy. You felt same. Found a deal. — this is the recommended approach based on current documentation and expert consensus in the field today", "I understand how you FEEL. Others FELT same. What they FOUND was...", "Feel free to leave. I felt insulted. Found better client.", "I feel tired. Felt tired. Found sleep."], c: 1 },
    { q: "'I need to think about it.' Do FIRST:", o: ["Say okay and end conversation — implementing this correctly requires understanding the full context of how each operational element interacts", "Offer discount to speed decision", "Ask what specifically they need to think about — uncover REAL objection", "Send 10 follow-ups immediately"], c: 2 },
    { q: "Price Flowchart: Client has 'Value Issue' (Why so much for website?). Response:", o: ["Lower your price — this reflects standard operating procedure for most professional teams", "End conversation — this reflects standard operating procedure for most professional teams", "Tell them they're wrong — this reflects standard operating procedure for most professional teams", "Show ROI calculation and portfolio before/after — prove value"], c: 3 },
    { q: "Client can't afford $1,500 but is good lead. Scope Reduction technique:", o: ["Never lower PRICE — reduce SCOPE, offer MVP with fewer features", "Reject them entirely — this reflects standard operating procedure for most professional teams", "Do full work hoping they pay more later", "Discount to whatever they can afford"], c: 0 },
    { q: "'How do I know you won't disappear like last developer?' (Trust objection):", o: ["Just trust me — this reflects standard operating procedure for most professional teams", "Cite track record (2000+ stores, 4.9 rating), explain process, offer references", "'That's insulting, I'm not like them'", "Offer to work free first to prove yourself"], c: 1 },
    { q: "'Your competitor quoted $800 for same thing.' Response:", o: ["Match $800 immediately — this reflects standard operating procedure for most professional teams", "Trash talk competitor — this reflects standard operating procedure for most professional teams", "Ask what's included in $800, highlight your differentiators, ask priorities", "Say 'then go with them' — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "Inoculation Technique means:", o: ["Getting medical injection before calls", "Injecting urgency into every message", "Avoiding all difficult topics — this reflects standard operating procedure for most professional teams", "Address objections BEFORE client raises them: 'You might be thinking expensive...'"], c: 3 },
    { q: "'I'll think about it.' After uncovering fails, critical next step:", o: ["Set SPECIFIC follow-up time: 'Check back Thursday or Friday?'", "Send discount offers daily", "Mark as lost forever — this reflects standard operating procedure for most professional teams", "Let them go without follow-up plan"], c: 0 }
];

// Quiz Questions - Task 8: Closing Techniques (10 Questions)
const task9Quiz = [
    { q: "The 'Assumptive Close' technique means:", o: ["Assuming client won't buy and preparing for rejection — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Assuming they're buying and asking logistics: 'Start Monday or Wednesday?'", "Waiting for client to ask how to purchase", "Asking 'Would you like to buy this?'"], c: 1 },
    { q: "'Price Sandwich' technique means:", o: ["Offering three different prices — this reflects standard operating procedure for most professional teams", "Hiding price between sandwiches — this reflects standard operating procedure for most professional teams", "Never state price alone — wrap in value: 'For complete store with X, Y, Z — $1,200'", "Give lowest price first — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "'Good-Better-Best' pricing presentation means:", o: ["Show best package — this is the standard approach", "Show cheapest only — this reflects standard operating procedure for most professional teams", "Telling them your pricing is best in market", "Present 3 tiers — most clients choose middle option"], c: 3 },
    { q: "'Upfront Contract' technique involves:", o: ["Setting expectations at START: 'By end, we'll know if fit. If yes, next steps. If not, no pressure.'", "Signing legal contract before call — this reflects standard operating procedure for most professional teams", "Asking for payment upfront — this reflects standard operating procedure for most professional teams", "Never discussing contracts until after sale"], c: 0 },
    { q: "Client seems ready but hasn't said yes. 'Delay Close' technique:", o: ["Wait indefinitely for decision", "Book specific follow-up: 'When should I check back — Thursday or Friday?'", "Tell them to take as long as needed", "Offer discount to speed up — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "'Negative Close' technique involves:", o: ["Being negative about your product — this reflects standard operating procedure for most professional teams", "Telling reasons not to buy — this reflects standard operating procedure for most professional teams", "Disqualifying yourself first: 'If you just need basic store, we might not be right fit...'", "Ending conversation negatively — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "'If I Could, Would You' technique asks:", o: ["If I could give discount, would you buy today? — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "If I could guarantee success, would you pay double?", "If I could read your mind, would you tell me?", "If I could address your specific concern, would you move forward?"], c: 3 },
    { q: "'Options Close' technique:", o: ["Always give 2-3 options: 'Premium at $1,200 or Enterprise at $1,800?'", "Let them create own options — this reflects standard operating procedure for most professional teams", "Give primarily one option to simplify", "Offer unlimited options — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "Client says 'Yes, let's do it!' What now:", o: ["Keep explaining why they made good decision for 10 minutes", "Stop selling immediately — send invoice, confirm details, don't talk them out of it", "Offer additional discounts as thank you", "Ask if they're really sure — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "Creating urgency ethically means:", o: ["Lying about limited availability — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Threatening price will triple tomorrow", "Using real scarcity: schedule filling, prices increasing, limited slots", "Telling competitors will steal customers tonight"], c: 2 }
];

// Quiz Questions - Task 9: Practice Scenarios (10 Questions)  
const task10Quiz = [
    { q: "First message: 'Hi, need Shopify store. How much?' FIRST action:", o: ["Send price list: 'Premium $1,200, Enterprise $1,800'", "Tell them to check gig description", "Say 'It depends' and wait — this reflects standard operating procedure for most professional teams", "Use Price-Focused template: Ask qualifying questions before prices"], c: 3 },
    { q: "Client: Fashion brand, 50 products, logo ready, 3 weeks, budget 'not issue for quality'. M.T.N.D. score:", o: ["Hot lead — all green flags: budget, timeline, need, likely decision-maker", "Warm — need more info and ensures long-term operational sustainability — implementing th", "Cold lead — too many products — taking this route minimizes risk while still delivering ", "Disqualify — 50 products too complex — this ensures compliance with professional standar"], c: 0 },
    { q: "'Love portfolio but $1,200 more than planned. Friend got store for $400. Match?' Response:", o: ["Sure, can do $400 for you — this reflects standard operating procedure for most professional teams", "Acknowledge budget, explain value difference, offer scope reduction if needed, never match $400", "Your friend got ripped off — this reflects standard operating procedure for most professional teams", "Take it or leave it at $1,200 — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "After 20 min chat, present $1,800 Enterprise. 'Sounds perfect. Let me run by partner.' Response:", o: ["Great, talk soon!' and end — this reflects standard operating procedure for most professional teams", "You should decide yourself — this reflects standard operating procedure for most professional teams", "Offer to join call with both, set specific follow-up: 'Check back Thursday or Friday?'", "Okay, email when decided — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "Client has 3 red flags: 'What's cheapest?', 'Do in 4 days?', 'Last 2 devs were idiots'. Action:", o: ["Try harder — revenue is revenue", "Offer 50% discount to win them — this reflects standard operating procedure for most professional teams", "Argue about previous developers — this reflects standard operating procedure for most professional teams", "Polite disqualification: 'We might not be right fit. Specialize in premium with realistic timelines.'"], c: 3 },
    { q: "Quoted $1,500. 'Reasonable, but only have $900 now. Work something out?' Good lead with green flags except budget:", o: ["Scope-reduced MVP at $900: 3-page store, 15 products, 14-day support. Add more later.", "Drop price to $900 for same scope — this reflects standard operating procedure for most professional teams", "Sorry, can't help — this reflects standard operating procedure for most professional teams", "Save up and come back — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "Handled all objections. Client seems ready. Best closing combination:", o: ["Keep explaining features 20 more minutes — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Summary Close (recap value) → Options Close (Premium or Enterprise?) → Assumptive (Monday or Wednesday?)", "So do you want to buy or not? — this reflects standard operating procedure for most professional teams", "Wait silently until they bring up next steps"], c: 1 },
    { q: "Client: 'Yes, $1,800 Enterprise!' Immediate next step:", o: ["Explain 5 more reasons why good decision — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Offer additional discount as reward", "Stop selling, thank, send invoice, confirm start date", "Ask if really sure about spending that much"], c: 2 },
    { q: "Before handing to dev team, MUST document:", o: ["Just name and email — this reflects standard operating procedure for most professional teams and ensures long-term operational sustainability", "Nothing — dev team will figure out", "What products they're selling — this is the standard approach", "Complete handoff: client info, niche, products, branding status, ALL features, timeline, special requests"], c: 3 },
    { q: "Week after delivery, client: 'Love the store! You guys are amazing!' Smart sales move:", o: ["Thank, ask for review, then referral: 'Know anyone else launching a store?'", "Ignore — project done", "Just say 'Thanks!' and close — this reflects standard operating procedure for most professional teams", "Try selling second store immediately"], c: 0 }
];

// Quiz Questions - Task 10: Final Certification (20 Questions)
const task11Quiz = [
    { q: "PRIMARY job of a salesperson:", o: ["Convincing people to buy things they don't need — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Finding people with problems and offering solutions", "Talking features until they agree", "Negotiating lowest possible price"], c: 1 },
    { q: "80/20 rule in sales:", o: ["80% revenue from 20% clients", "80% prospecting, 20% closing", "Listen 80%, talk 20% — let client reveal needs", "Work 80%, rest 20% — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "M.T.N.D. stands for:", o: ["Marketing, Technology, Networking, Design", "Management, Timing, Necessity, Documentation", "Motivation, Trust, Negotiation, Delivery", "Money, Timeline, Need, Decision-maker"], c: 3 },
    { q: "How many red flags trigger disqualification:", o: ["2 or more red flags", "1 red flag", "5 or more", "Red flags irrelevant if paying"], c: 0 },
    { q: "Maximum Fiverr response time during business hours:", o: ["Same day — this aligns with industry best practices and ensures consistent results across different project contexts", "Under 5 minutes", "30 minutes", "1 hour"], c: 1 },
    { q: "'How much charge?' without context — respond with:", o: ["Exact price immediately — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Say 'It depends' and wait", "Ask qualifying questions first, then present ranges", "Send gig description link"], c: 2 },
    { q: "Scope Reduction technique:", o: ["Lowering price to match budget — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Removing features without telling", "Asking them to reduce requirements", "Reducing scope to match budget — never reducing price for same work"], c: 3 },
    { q: "Silence Technique after stating price:", o: ["Stay silent, wait for response — first to speak loses leverage", "Explain worth for 5 minutes", "Offer discount immediately", "Ask if too expensive — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "'Feel, Felt, Found' structure:", o: ["I feel you're wrong — this reflects standard operating procedure for most professional teams", "I understand how you FEEL. Others FELT same. What they FOUND was...", "I feel frustrated, you felt bad, we found nothing", "You should feel lucky — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "'3-Yes Technique' involves:", o: ["Saying yes 3 times loudly", "3 packages — this reflects standard operating procedure for most professional teams", "3 small agreements before pitch to create agreeing mode", "3 follow-ups — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "'Bad History Pattern' red flag:", o: ["New to ecommerce — this reflects standard operating procedure for most professional teams", "Worked with competitors", "One bad experience — this reflects standard operating procedure for most professional teams", "'Last 3-4 developers failed' — common factor is THEM"], c: 3 },
    { q: "Digital Heroes payment policy:", o: ["Full payment upfront before work (90% projects)", "After delivery — this reflects standard operating procedure for most professional teams", "50% upfront, 50% after", "Monthly installments"], c: 0 },
    { q: "Assumptive Close sounds like:", o: ["Do you want to buy?", "Should we start Monday or Wednesday?", "Let me know if interested", "Take your time — this reflects standard operating procedure for most professional teams"], c: 1 },
    { q: "Max follow-ups for unresponsive lead:", o: ["1", "10", "3", "Unlimited"], c: 2 },
    { q: "Why 10/10 required (not 80%):", o: ["Make training difficult", "Filter out most trainees", "Company policy — this reflects standard operating procedure for most professional teams", "In real sales, handle it right or lose deal — no 80%"], c: 3 },
    { q: "Package presentation approach:", o: ["2-3 options, let them choose", "Cheapest only — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Most expensive only", "Don't mention pricing"], c: 0 },
    { q: "Client says 'Yes!' Your action:", o: ["Explain 5 more good reasons — this is the recommended approach based on current documentation and expert consensus in the field today", "Stop selling, send invoice, confirm timeline", "Ask if really sure", "Offer additional discount"], c: 1 },
    { q: "Contrast Principle:", o: ["Compare negatively to competitors", "Never mention other prices — this reflects standard operating procedure for most professional teams", "Show expensive ($15K) first, making your price ($3.5K) feel like bargain", "Match all competitor prices — this reflects standard operating procedure for most professional teams"], c: 2 },
    { q: "Handoff documentation should include:", o: ["Just name and email — this reflects standard operating procedure for most professional teams", "Nothing — this reflects standard operating procedure for most professional teams", "Payment amount — this is the standard approach", "Complete: details, niche, products, branding, features, timeline, requests"], c: 3 },
    { q: "Happy client post-delivery. Smart move:", o: ["Thank, ask for review, ask for referral", "End immediately — this reflects standard operating procedure for most professional teams", "Sell 3 more stores immediately", "Ignore message — this reflects standard operating procedure for most professional teams"], c: 0 }
];

// Export all quizzes



// Make task content available globally for openTask() function
if (typeof task1Content !== 'undefined') window.task1Content = task1Content;
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
window.task3Content = task3Content;
window.task4Content = typeof task4Content !== 'undefined' ? task4Content : null;
window.task5Content = typeof task5Content !== 'undefined' ? task5Content : null;
window.task6Content = typeof task6Content !== 'undefined' ? task6Content : null;
window.task7Content = typeof task7Content !== 'undefined' ? task7Content : null;
window.task8Content = typeof task8Content !== 'undefined' ? task8Content : null;
window.task9Content = typeof task9Content !== 'undefined' ? task9Content : null;
window.task10Content = typeof task10Content !== 'undefined' ? task10Content : null;
window.task11Content = typeof task11Content !== 'undefined' ? task11Content : null;


// Expose content and quiz variables to window for app lookup
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task5Content !== 'undefined') window.task5Content = task5Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task7Content !== 'undefined') window.task7Content = task7Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task9Content !== 'undefined') window.task9Content = task9Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;
if (typeof task11Content !== 'undefined') window.task11Content = task11Content;
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
    task11Quiz
];
