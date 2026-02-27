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
<h3>📋 The Sales Process Flow</h3>
<p>Understanding the correct sequence of the sales process is <strong>critical</strong>. Getting this wrong is the #1 mistake new salespeople make.</p>

<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">💰 PRICING PHILOSOPHY</h4>
<p><strong>We price based on the CLIENT'S perception of value, not fixed rates.</strong></p>
<ul style="margin-bottom: 0;">
<li>Understand their budget range first</li>
<li>Position your price within their comfort zone</li>
<li>Projects above threshold = commission as per the Incentive &amp; Penalty Framework</li>
</ul>
</div>

<h4>The Correct Process Flow (5 Steps)</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Step</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What Happens</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Your Response</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1. Lead Inquiry</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client messages wanting a store</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Understand their needs, identify any HARD PROBLEMS</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>2. Hard Problems Discussion</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client has complex requirements</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Discuss and resolve ONLY technical challenges BEFORE order</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>3. Budget Discovery</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Understand their budget perception</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price according to THEIR budget, not fixed rates</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4. Order Placed</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client pays after problems are resolved</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">NOW collect routine items (store access, logo, assets)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>5. Routine Handover</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Post-order collection</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hand off to PM for onboarding</td>
</tr>
</table>

<h4>What Goes BEFORE vs AFTER Order</h4>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>🚨 CRITICAL DISTINCTION: Getting this wrong loses deals and causes project chaos!</strong>
</div>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>BEFORE Order (Discuss First)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>AFTER Order (Collect Later)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom functionality requirements</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store access (Shopify login)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex integrations (ERPs, APIs)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logo and brand assets</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unusual product types or variants</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product images and descriptions</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline constraints</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content for pages</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical feasibility questions</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment/shipping details</td>
</tr>
</table>

<div class="warning-box">
<strong>⚠️ NEVER discuss routine items (logo, store access, brand colors) BEFORE the order is placed.</strong> These are post-order collection items. Discussing them too early makes you look like a cheap freelancer and kills the premium feel. Hard problems come first, routine details come after payment.
</div>

<div class="highlight-box">
<strong>Example of the Correct Flow:</strong><br><br>
<strong>Client:</strong> "I need a Shopify store for my jewelry brand. I also need real-time inventory sync with my ERP."<br><br>
<strong>You:</strong> "Great to hear from you! The ERP integration is an important detail. Can you tell me which ERP system you are using? This helps me confirm we can deliver exactly what you need."<br><br>
<em style="color: #10B981;">You addressed the HARD problem (ERP integration) first. You did NOT ask about their logo, colors, or store access. That comes after the order is placed.</em>
</div>
</div>

<div class="content-section">
<h3>👋 Opening &amp; Engagement Mastery</h3>
<div class="warning-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<h4 style="margin-top: 0;">⚡ The First 7 Seconds Rule</h4>
<p>Your first message determines everything. Lead with VALUE, not "Hi, can I help you?" The first 7 seconds decide whether the client sees you as an expert or just another freelancer.</p>
</div>

<h4>7 Proven Opening Techniques</h4>
<p>Master these openers and you will immediately stand out from 99% of competitors who send generic copy-paste messages.</p>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">1. The "Why Now" Question</h4>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #10B981;">
"What made you reach out today specifically?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Reveals their urgency level immediately. Clients who have a specific trigger (bad experience, upcoming launch, seasonal deadline) are more likely to buy fast.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #6366F1; margin-top: 0;">2. The Immediate Audit</h4>
<p>Run their site through PageSpeed or GTmetrix <strong>while you are chatting with them</strong>. Share findings live.</p>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #6366F1;">
"I just ran your site through PageSpeed and noticed your mobile score is 34. That means you are losing about 40% of visitors before they even see your products. Want me to show you the quick wins?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Shows expertise and gives immediate value before you even mention price. They now see you as a consultant, not a vendor.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #F59E0B; margin-top: 0;">3. The LinkedIn Research</h4>
<p>Check their LinkedIn before responding. Mention their background naturally.</p>
<div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #F59E0B;">
"I saw you have been building [brand] for 2 years -- amazing progress! Based on where you are now, here is what I would focus on next..."
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Shows you did your homework. Clients feel special and respected. This alone puts you ahead of 95% of sellers.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #EC4899; margin-top: 0;">4. The Industry Insider</h4>
<div style="background: rgba(236, 72, 153, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #EC4899;">
"I have worked with 15+ skincare brands this year. Here is what the top performers all have in common..."
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Positions you as a specialist, not a generalist. The client immediately thinks "this person understands MY industry."</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">5. The Competitor Drop</h4>
<div style="background: rgba(6, 182, 212, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #06B6D4;">
"We just finished working with a similar brand in your niche. Their conversions jumped 40% in the first month after launch."
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Social proof + relevance. They now believe you can deliver results because you already did it for someone like them.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">6. The Screenshot Opener</h4>
<p>Send a screenshot of their current site with <strong>3 quick observations</strong> annotated BEFORE you pitch anything.</p>
<div style="background: rgba(139, 92, 246, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #8B5CF6;">
"I took a quick look at your store and spotted 3 things: (1) Your hero section has no clear CTA, (2) Product images are not optimized for mobile, (3) No trust badges above the fold. Want me to explain how fixing these could increase your conversions?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Value first, pitch later. The client now sees you as someone who genuinely cares about their success.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">7. The Personalized Video</h4>
<p>Record a <strong>45-second Loom video</strong> walking through their site with 3 observations.</p>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #10B981;">
<strong>5x higher response rate than text messages.</strong> A 45-second personalized video showing their own site makes them feel like you already started working on their project.
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why it works:</strong> Nobody else does this. The effort alone shows you are serious, and seeing their own site analyzed on video creates an emotional connection.</p>
</div>

<h4>Opening Mistakes vs Professional Alternatives</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Opening Mistake</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Professional Alternative</strong></td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.05);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Hi, how can I help you?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I checked your store and found 3 conversion killers. Want me to walk you through them?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We build Shopify stores."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We help brands like yours increase their online revenue by optimizing every step of the customer journey."</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.05);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What is your budget?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What made you reach out today? I want to understand your goals first before we talk numbers."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here are our packages..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Before I recommend anything, tell me about your biggest challenge with your current store."</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.05);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Copy-paste generic intro</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Personalized Loom video or screenshot analysis of their specific store</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🔥 The Emotional Control Advantage</h3>
<p>Before scripts, before frameworks, before closing techniques -- there is one thing that separates elite closers from average salespeople: <strong>emotional control.</strong></p>

<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">The Ultimate Sales Equation</h4>
<p style="font-size: 1.3em; text-align: center; margin: 15px 0;"><strong>Conviction x Trust = Sales</strong></p>
<p>Not scripts. Not rebuttals. Not persuasion tricks. If you <strong>believe</strong> in what you are selling, people feel it. If you do not believe, they smell it instantly.</p>
</div>

<h4>Conviction is a Slider, Not a Switch</h4>
<p>Most people think conviction is binary: "I believe or I do not." <strong>Wrong.</strong> Conviction is a slider that moves from 40% to 70% to 100%.</p>
<div class="highlight-box">
<strong>What increases conviction fastest?</strong> Seeing proof:
<ul style="margin-bottom: 0;">
<li>Testimonials from happy clients</li>
<li>Client wins: "This client made $40k revenue after our store build"</li>
<li>Case studies: "This brand hit 4.8% conversion rate"</li>
<li>Results: "This ad campaign went 12x ROAS"</li>
</ul>
<p style="margin-top: 10px;"><strong>That is gasoline for your conviction.</strong> The more wins you see, the more you believe, the more you close.</p>
</div>

<h4>Childlike Curiosity Beats Confrontation</h4>
<p>Most sales reps argue with objections. <strong>Elite closers ask curious questions instead.</strong></p>
<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">
<p><strong>Client:</strong> "My husband will not approve this."</p>
<p style="color: #EF4444;">Bad rep: "He is wrong. This is a great investment."</p>
<p style="color: #10B981;">Elite rep: "That is interesting -- why would he not approve?"</p>
<p style="margin-top: 10px; color: #94A3B8;">Now the client is explaining to <em>themselves</em> why the objection might not hold. No pressure. No conflict. Just logic. <strong>People convince themselves better than you ever could.</strong></p>
</div>

<h4>The Real Sales Framework (7 Steps)</h4>
<p>You have had this conversation 10,000 times. They have had it once. <strong>You must guide the structure:</strong></p>
<div class="highlight-box">
<ol style="margin-bottom: 0; line-height: 2;">
<li><strong>Why are you here?</strong> -- Understand their trigger</li>
<li><strong>What problem do you have?</strong> -- Identify the real pain</li>
<li><strong>What have you tried?</strong> -- Learn their history</li>
<li><strong>Why did it not work?</strong> -- Find the root cause</li>
<li><strong>Why is this different?</strong> -- Position your solution</li>
<li><strong>What experience will you have?</strong> -- Paint the transformation</li>
<li><strong>Close</strong> -- Ask for the commitment</li>
</ol>
<p style="margin-top: 15px;"><strong>Not features. Not tech specs. Outcomes and transformation.</strong></p>
</div>

<div class="warning-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<h4 style="margin-top: 0;">Emotional Control in Practice</h4>
<p>Sales is like fighting. Under pressure: heart rate goes up, breathing gets fast, fight-or-flight kicks in.</p>
<ul style="margin-bottom: 0;">
<li><strong>Losers:</strong> React emotionally, push harder, get defensive</li>
<li><strong>Winners:</strong> Slow down, ask questions, stay curious</li>
</ul>
<p style="margin-top: 10px;"><strong>The calmest rep wins.</strong> When belief is real, your voice changes, your speed changes, certainty comes through. People feel it.</p>
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
<h3>📄 The Proposal PDF Framework</h3>
<p>For high-value leads, enterprise clients, or situations involving multiple stakeholders, we send a <strong>professional Proposal PDF</strong> that looks official and premium. This alone increases close rate significantly.</p>

<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ NEVER send a proposal without having a qualifying conversation first.</strong> The proposal is a closing tool, not a lead generation tool. If you send it to unqualified leads, you are wasting your time and devaluing the document.
</div>

<h4>When to Use a Formal Proposal</h4>
<ul>
<li><strong>High-value leads:</strong> Clients discussing $2,800+ projects</li>
<li><strong>Enterprise clients:</strong> Established brands with complex needs</li>
<li><strong>Multiple stakeholders:</strong> When the decision maker needs to share with partners, investors, or team members</li>
<li><strong>Competitive situations:</strong> When you know they are comparing multiple agencies</li>
</ul>

<h4>Proposal Structure (Required)</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Page</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Content</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Details</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Page 1</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cover Page</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Title, client name, prepared by, date, "Confidential" tag</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Page 2</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Executive Summary</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client goals (2-3 lines), our approach (3 steps), target results (conversion + growth)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Page 3</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plan 1 -- $2,800</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete store setup (detailed feature breakdown)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>New Page</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plan 2 -- $5,400</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store + 1-month marketing (detailed feature breakdown)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>New Page</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plan 3 -- $9,800</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full growth system (detailed feature breakdown)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Final Page</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Next Steps</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline, what we need from client, how to get started</td>
</tr>
</table>

<div class="highlight-box">
<strong>Title Format:</strong> "[Client Brand Name] -- Growth &amp; Store Build Proposal"<br><br>
<strong>Results Section Must Include:</strong>
<ul style="margin-bottom: 0;">
<li>Target conversion rate improvement (e.g., "Aim for 3-5% CVR")</li>
<li>Growth targets tied to their specific niche</li>
<li>ROI projection based on their current traffic and average order value</li>
</ul>
</div>

<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>Pro Tips for Proposal PDFs:</strong>
<ul style="margin-bottom: 0;">
<li>Clean page breaks between each plan -- looks professional</li>
<li>Generate each plan separately using GPT so it gets full detail and personalization</li>
<li>For each feature, include: what it is, why it matters, and what deliverable the client gets</li>
<li>Always send with a pre-price message: "I have prepared a professional proposal with plan options so you can choose based on how fast you want to scale."</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📦 Expanded Package Plans (High-Ticket)</h3>
<p>Beyond our standard Premium/Enterprise packages, we offer <strong>three proposal-tier plans</strong> for clients who need comprehensive solutions. These are used in formal Proposal PDFs.</p>

<div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.02)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 15px; padding: 25px; margin: 20px 0;">
<h4 style="color: #10B981; margin-top: 0;">PLAN 1 -- $2,800 USD: Complete Store Setup</h4>
<p>Everything needed to launch a professional, conversion-optimized Shopify store.</p>
<ul>
<li>Full Shopify setup from scratch (or rebuild existing store)</li>
<li>Theme installation + professional configuration</li>
<li>Premium UI/UX design (mobile-first, high-end layout)</li>
<li>Full page structure: Homepage, Collections, Product, Cart, About, Contact, FAQ, Policies</li>
<li>Product catalog organization + collection structure + navigation menus</li>
<li>CRO build-in: strong hero CTAs, trust sections, social proof, sticky add-to-cart</li>
<li>SEO foundation: meta titles, descriptions, clean URLs, internal linking</li>
<li>Email automation: Welcome Series, Abandoned Cart, Post-Purchase flows</li>
<li>Tracking setup: GA4, Meta Pixel, TikTok Pixel</li>
<li>Speed optimization + mobile performance pass</li>
<li>Revisions included + full QA testing + post-launch support</li>
</ul>
</div>

<div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.02)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 15px; padding: 25px; margin: 20px 0;">
<h4 style="color: #3B82F6; margin-top: 0;">PLAN 2 -- $5,400 USD: Store + 1-Month Marketing</h4>
<p>Everything in Plan 1, PLUS a full month of marketing execution to drive early traction.</p>
<ul>
<li>Everything from Plan 1 ($2,800)</li>
<li>1-month content calendar with posting + scheduling</li>
<li>5 high-quality social media posts (designed images + captions)</li>
<li>Content management: bio optimization, highlights strategy, profile cleanup</li>
<li>Organic growth actions: engagement strategy + weekly optimization</li>
<li>Marketing strategy for 10 selected products (positioning, angles, content concepts)</li>
<li>Marketing research foundation: competitor snapshot, target audience clarity, funnel strategy</li>
<li>LLM SEO registration for up to 10 products</li>
<li>Paid marketing starter setup: campaign foundation, targeting, ad copy, budget caps</li>
</ul>
<p style="font-size: 0.9em; color: #94A3B8;"><em>Ad spend paid by client directly. We manage planning, setup, and optimization.</em></p>
</div>

<div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.02)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 15px; padding: 25px; margin: 20px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">PLAN 3 -- $9,800 USD: Full Growth System (3 Months)</h4>
<p>Everything in Plan 2, PLUS a complete 3-month marketing execution with SEO, paid ads, and content.</p>
<ul>
<li>Everything from Plan 2 ($5,400)</li>
<li>3-month content strategy + 90-day content calendar</li>
<li>15 social media posts over 3 months (video, static, carousel mix)</li>
<li>UGC-style content direction: hooks, storyboards, scripts, shot lists</li>
<li>Full 3-month marketing package: research refresh, messaging framework, offer strategy</li>
<li>SEO growth program: 30 SEO blogs, keyword targeting, internal linking, daily improvements</li>
<li>LLM SEO registration for up to 50 products</li>
<li>Full paid marketing execution: Meta + Google + TikTok Ads, 3-month optimization</li>
<li>Cross-platform funnel: cold audience to retargeting to retention</li>
<li>Monthly reporting + next-step roadmap after month 3</li>
</ul>
</div>

<h4>Plan Comparison Table</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Feature</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Plan 1 ($2,800)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Plan 2 ($5,400)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Plan 3 ($9,800)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full Store Build</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CRO + SEO Foundation</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email Automation</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social Media Marketing</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 Month</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3 Months</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paid Ads Management</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Starter Setup</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full 3-Month Execution</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Blogs</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30 Blogs</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LLM SEO Products</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Up to 10</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Up to 50</td>
</tr>
</table>

<div class="highlight-box">
<strong>When to Recommend Each Plan:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Plan 1:</strong> Client just needs a store. They will handle their own marketing or already have a team.</li>
<li><strong>Plan 2:</strong> Client needs a store AND wants to start building their online presence. Good for clients who say "I also need help with social media."</li>
<li><strong>Plan 3:</strong> Client wants the full package -- store, marketing, SEO, ads. Best for serious brands ready to invest in rapid growth. This is where the biggest commissions are.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⚔️ Competitive Positioning</h3>
<p>You will encounter 4 types of competitors. Here is how to position against each one.</p>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.2); margin: 15px 0;">
<h4 style="color: #EF4444; margin-top: 0;">1. Cheap Fiverr Sellers ($200-500)</h4>
<p><strong>Their pitch:</strong> "I will build your Shopify store for $300 in 3 days!"</p>
<p><strong>Their weakness:</strong> Template swappers with zero strategy. They change a logo and colors on a free theme and call it "custom." No CRO, no SEO, no speed optimization, no support after delivery. The store looks like every other generic store on the internet.</p>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 3px solid #10B981;">
<strong>Your counter-pitch:</strong> "Those $300 stores use free templates with a logo swap. No conversion optimization, no speed work, no SEO. Our clients get stores built for revenue -- not just to exist. The difference shows in sales numbers within the first month."
</div>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.2); margin: 15px 0;">
<h4 style="color: #F59E0B; margin-top: 0;">2. Solo Freelancers ($800-1,500)</h4>
<p><strong>Their pitch:</strong> "I am a senior Shopify developer with 5 years experience."</p>
<p><strong>Their weakness:</strong> One person doing everything -- design, development, SEO, copy. Limited capacity means delays. When they get sick or busy, your project stops. No team backup, no QA process, and they often disappear after delivery.</p>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 3px solid #10B981;">
<strong>Your counter-pitch:</strong> "With a solo freelancer, you are dependent on one person. If they get busy, sick, or disappear -- your project dies. We have a team of 40+ specialists, dedicated project managers, and 30-90 days of guaranteed support. Your project never stops."
</div>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.2); margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">3. Big Agencies ($5K-15K)</h4>
<p><strong>Their pitch:</strong> "We are a full-service digital agency with Fortune 500 clients."</p>
<p><strong>Their weakness:</strong> Overpriced, slow, bureaucratic. You are just a number to them. Your project gets assigned to a junior developer while they charge senior rates. 6-8 week timelines for work we do in 14 days. Communication goes through account managers who do not understand the technical details.</p>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 3px solid #10B981;">
<strong>Your counter-pitch:</strong> "Big agencies charge $10,000-15,000 for what we deliver at a fraction of the cost -- with faster delivery and more personal attention. You will not be passed around between account managers. You get direct access to the team building your store."
</div>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(6, 182, 212, 0.2); margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">4. DIY Platforms (Wix, Squarespace)</h4>
<p><strong>Their pitch:</strong> "Build your own website for $20/month! No coding needed!"</p>
<p><strong>Their weakness:</strong> Limited customization, poor performance, no conversion optimization. Business owners spend 100+ hours trying to build something that still looks amateur. No SEO strategy, no CRO, and they end up with a site that does not convert.</p>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 3px solid #10B981;">
<strong>Your counter-pitch:</strong> "DIY sounds cheap until you count the hours spent struggling with templates, the sales lost from a slow site, and the frustration of a store that does not convert. Our clients get a professional, revenue-optimized store in 14 days while they focus on their actual business."
</div>
</div>
</div>

<div class="content-section">
<h3>💰 Price Anchoring Deep Dive</h3>
<p>Price anchoring is one of the most powerful psychological tools in sales. It is about <strong>controlling the frame of reference</strong> before you ever state your price.</p>

<h4>Anchor Against US Agency Prices</h4>
<div class="highlight-box">
<p>Most US-based agencies charge <strong>$10,000-15,000</strong> for what we deliver. When you anchor against this, your price suddenly feels like a steal:</p>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #10B981;">
"Most US agencies charge $10,000-15,000 for a store of this caliber. We deliver the same quality -- same CRO principles, same speed optimization, same design standards -- at $1,800. The only difference is our team is global, so we pass the savings to you."
</div>
</div>

<h4>Anchor Against the Cost of NOT Having a Good Store</h4>
<div class="highlight-box">
<p>Calculate what a bad store costs them in lost sales:</p>
<div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #F59E0B;">
"If your store gets 1,000 visitors/month and converts at 1% instead of 3%, that is 20 lost sales every month. At a $50 average order value, that is $1,000/month in lost revenue -- $12,000/year. Our $1,800 investment pays for itself in less than 2 months."
</div>
</div>

<h4>The "Investment vs Expense" Reframe</h4>
<div class="highlight-box">
<p>Never let the client think of your price as an <strong>expense</strong>. Reframe it as an <strong>investment with measurable ROI</strong>:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Expense Framing (Bad)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Investment Framing (Good)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It costs $1,800"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Your investment is $1,800, and here is how it pays for itself..."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The price is..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"For a complete revenue-optimized store with 90 days of support, the investment is..."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We charge $1,200"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Clients typically see ROI within 60-90 days at the $1,200 level"</td>
</tr>
</table>
</div>

<div class="warning-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>The Full Anchoring Script:</strong><br><br>
"Most US agencies charge $10,000-15,000 for what we deliver at $1,800. And consider this: if your current store is losing even 20 extra sales per month due to poor design and speed, that is $1,000+ in lost revenue every month. Our $1,800 investment does not just build you a store -- it builds you a revenue machine that pays for itself within 60 days."
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
<h3>🔍 Advanced Discovery Questions</h3>
<p>Beyond the basic M.T.N.D. framework, these <strong>10 discovery questions</strong> help you deeply understand each lead and make smarter qualification decisions.</p>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2); margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">1. The Budget Range Test</h4>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #10B981;">
"Are you thinking $1,000 range or $3,000+ range?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Never ask exact budget -- it puts them on the defensive. Giving a range lets them self-select. If they say "$1,000 range," you know Premium. If "$3,000+," you know Enterprise or proposal-tier.</p>
<p style="font-size: 0.9em;"><strong>Good answer:</strong> "I am comfortable in the $1,500-2,000 range for quality work."<br><strong>Bad answer:</strong> "What is your cheapest option?" or "I have $200 to spend."</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.2); margin: 15px 0;">
<h4 style="color: #6366F1; margin-top: 0;">2. The Decision Timeline</h4>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #6366F1;">
"When were you hoping to launch?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Qualifies urgency instantly. Clients with a real deadline buy faster.</p>
<p style="font-size: 0.9em;"><strong>Good answer:</strong> "Within the next 2-4 weeks" or "Next month for a product launch."<br><strong>Bad answer:</strong> "Sometime this year maybe" or "No rush, just exploring."</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.2); margin: 15px 0;">
<h4 style="color: #F59E0B; margin-top: 0;">3. The Decision Maker Check</h4>
<div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #F59E0B;">
"Are you the one making the final call, or does someone else need to approve?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> If they need to check with a partner, spouse, or team, your closing timeline doubles. You need to know early so you can plan accordingly.</p>
<p style="font-size: 0.9em;"><strong>Good answer:</strong> "I am the owner, I make all decisions."<br><strong>Bad answer:</strong> "I need to run this by my business partner and our accountant."</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(236, 72, 153, 0.2); margin: 15px 0;">
<h4 style="color: #EC4899; margin-top: 0;">4. The "Tried Before" Probe</h4>
<div style="background: rgba(236, 72, 153, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #EC4899;">
"Have you worked with developers before? What went right/wrong?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Reveals red flags (history of firing developers) and expectations. Also helps you position yourself against their past bad experiences.</p>
<p style="font-size: 0.9em;"><strong>Good answer:</strong> "Yes, good experience but they did not specialize in ecommerce."<br><strong>Bad answer:</strong> "My last 4 developers were all terrible." (The common factor is THEM.)</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2); margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">5. The Dream Store Question</h4>
<div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #10B981;">
"If your store was perfect, what would be different about it?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Reveals their vision and true desires. Their answer tells you exactly what to emphasize in your pitch.</p>
<p style="font-size: 0.9em;"><strong>Good answer:</strong> Specific details about design, speed, conversion, brand feel.<br><strong>Bad answer:</strong> Vague answers like "I just want it to look nice."</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.2); margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">6. "What Keeps You Up at Night"</h4>
<p>Ask about their deepest business pain points. Let them talk. Do not interrupt.</p>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Reveals their deepest pain points and emotional triggers. These become your closing ammunition. When you present your solution, tie it directly back to what keeps them up at night.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(6, 182, 212, 0.2); margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">7. The Revenue Impact Question</h4>
<div style="background: rgba(6, 182, 212, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #06B6D4;">
"If your conversion rate doubled, what would that mean for your business?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Makes them calculate the value of your work themselves. If they say "That would be an extra $5,000/month," your $1,800 price feels like nothing.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.2); margin: 15px 0;">
<h4 style="color: #EF4444; margin-top: 0;">8. The Competitor Research</h4>
<div style="background: rgba(239, 68, 68, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #EF4444;">
"Who is your biggest competitor? What do they do better than you?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Reveals their competitive landscape and insecurities. You can then position your store build as the tool to close the gap.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.2); margin: 15px 0;">
<h4 style="color: #F59E0B; margin-top: 0;">9. The Growth Stage Check</h4>
<div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #F59E0B;">
"Are you at $0-10K/month, $10-50K, or $50K+ in revenue?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Adjusts your entire pitch. A $0/month startup needs different messaging than a $50K/month brand wanting to scale. Also qualifies budget indirectly.</p>
</div>

<div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.2); margin: 15px 0;">
<h4 style="color: #6366F1; margin-top: 0;">10. "If Money Was Not an Issue"</h4>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 3px solid #6366F1;">
"If budget was not a concern, what would your ideal solution look like?"
</div>
<p style="font-size: 0.9em; color: #94A3B8;"><strong>Why you ask:</strong> Reveals their true desires without budget constraints. Often their dream solution is exactly what your Enterprise or Plan 3 offers. Now you know what they WANT; your job is to show why it is worth the investment.</p>
</div>
</div>

<div class="content-section">
<h3>📊 Lead Scoring System</h3>
<p>Turn your M.T.N.D. qualification into a <strong>numerical score</strong> for faster, more consistent decisions.</p>

<h4>Scoring Table</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Criterion</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>0 Points</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1 Point</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>2 Points</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>3 Points</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>M (Money)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wants cheapest option</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Budget under $800</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Budget $800-1,500</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Budget $1,500+ or "not an issue"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>T (Timeline)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just exploring"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3+ months away</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 1-2 months</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ready this week/next week</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>N (Need)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No clear problem</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Vague need</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clear need, has a store</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgent need + losing money</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>D (Decision)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Researching for someone else</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Needs multiple approvals</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Needs 1 other person</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sole decision maker</td>
</tr>
</table>

<h4>Score Interpretation</h4>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>0-4 Points: COLD LEAD</strong> -- Low priority. Send a polite response but do not invest significant time. Check back in 30 days if they seem like they could warm up.
</div>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B; margin-top: 10px;">
<strong>5-8 Points: WARM LEAD</strong> -- Proceed with caution. Worth investing time in discovery but set clear expectations. May need nurturing over 1-2 weeks before closing.
</div>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981; margin-top: 10px;">
<strong>9-12 Points: HOT LEAD</strong> -- Top priority. Move fast. These leads are ready to buy and every hour you delay increases the chance they go elsewhere. Respond within 5 minutes. Get on a call ASAP.
</div>

<h4>Lead Prioritization Matrix</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Priority</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Score</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Response Time</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Action</strong></td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.1);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">P1 (Hot)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9-12</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 5 minutes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full discovery + pitch immediately</td>
</tr>
<tr style="background: rgba(245, 158, 11, 0.1);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">P2 (Warm)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-8</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 30 minutes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ask qualifying questions, nurture</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.1);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">P3 (Cold)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0-4</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 24 hours</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brief response, low effort, follow up later</td>
</tr>
</table>

<div class="highlight-box">
<strong>Daily Lead Review Process:</strong>
<ol style="margin-bottom: 0;">
<li>Score every new lead that came in overnight</li>
<li>Prioritize P1 leads -- respond immediately</li>
<li>Move to P2 leads -- send qualifying questions</li>
<li>P3 leads get a polite template response</li>
<li>Review warm leads from yesterday -- any updates? Follow up</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💬 Qualification Conversation Flow</h3>
<p>Here are three example conversations showing how qualification plays out in practice.</p>

<div style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0;">
<h4 style="color: #10B981; margin-top: 0;">HOT LEAD Example (Score: 11/12 -- All Green Flags)</h4>
<p><strong>Lead:</strong> "Hi! I run a skincare brand doing $30K/month. My current Shopify store loads slowly and our conversion rate is 1.2%. I need a complete redesign. I am the owner and I am ready to invest in quality. Budget is $1,500-2,000. When can we start?"</p>
<p><strong>Analysis:</strong> Money (3), Timeline (3), Need (3), Decision (2) = <strong>11 points</strong></p>
<p><strong>Your move:</strong> Drop everything. Respond in under 5 minutes. Run a quick PageSpeed audit. Send a personalized video or screenshot analysis. Move to pitch within the first conversation. This lead is ready to buy TODAY.</p>
</div>

<div style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0;">
<h4 style="color: #F59E0B; margin-top: 0;">WARM LEAD Example (Score: 7/12 -- One Red Flag)</h4>
<p><strong>Lead:</strong> "Hi, I am launching a clothing brand and need a Shopify store. Not sure about budget yet but I want it to look professional. My business partner also needs to agree. We are hoping to launch in about 2 months."</p>
<p><strong>Analysis:</strong> Money (1 - unclear), Timeline (2), Need (2), Decision (2 - needs partner) = <strong>7 points</strong></p>
<p><strong>Your move:</strong> Proceed with caution. Ask the Budget Range Test question next: "Are you thinking $1,000 range or $3,000+?" Also ask: "Would your partner be available for a quick call so we can address both of your questions at once?" Nurture this lead but do not spend hours on it until budget and decision-maker are clarified.</p>
</div>

<div style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 15px; padding: 25px; margin: 20px 0;">
<h4 style="color: #EF4444; margin-top: 0;">COLD LEAD Example (Score: 3/12 -- Multiple Red Flags)</h4>
<p><strong>Lead:</strong> "Hey, what is your cheapest option? I need a store built in 2 days. My last 3 developers all messed up. Can you match this $300 quote I got from Fiverr?"</p>
<p><strong>Analysis:</strong> Money (0 - wants cheapest), Timeline (0 - unrealistic), Need (2 - has need), Decision (1 - unclear) = <strong>3 points</strong></p>
<p><strong>Your move:</strong> Politely disqualify. Do not invest time trying to convert this lead. Send a brief, professional response: "Based on what you are describing, it sounds like you are looking for something more budget-friendly. We specialize in premium development for businesses ready to invest $1,200+. I would recommend checking Fiverr for options in your range. Best of luck!"</p>
</div>

<h4>Decision Flow Diagram</h4>
<div class="mermaid">
graph TD
    Start[New Lead Arrives] --> Score[Score with M.T.N.D.]
    Score --> Hot{Score 9-12?}
    Hot -- Yes --> Pitch[Immediate Pitch + Discovery]
    Hot -- No --> Warm{Score 5-8?}
    Warm -- Yes --> Qualify[Ask Discovery Questions]
    Warm -- No --> Cold[Polite Template Response]
    Pitch --> Close{Ready to Close?}
    Close -- Yes --> Order[Send Proposal / Place Order]
    Close -- No --> Followup[Schedule Follow-up]
    Qualify --> Improved{Score Improved?}
    Improved -- Yes --> Pitch
    Improved -- No --> Nurture[Nurture or Disqualify]
    style Hot fill:#10B981,stroke:#059669
    style Warm fill:#F59E0B,stroke:#D97706
    style Cold fill:#EF4444,stroke:#DC2626
    style Order fill:#10B981,stroke:#059669
</div>
</div>

<div class="content-section">
<h3>⚠️ The "Hard Problems" Protocol</h3>
<p>One of the most critical concepts in our sales process: <strong>identifying and resolving "hard problems" BEFORE the order is placed.</strong></p>

<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>🚨 CRITICAL RULE: Hard problems MUST be discussed and resolved BEFORE the client places an order. If you skip this step, the project will blow up later and everyone loses.</strong>
</div>

<h4>What Qualifies as a "Hard Problem"?</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hard Problem</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It Matters</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>How to Address</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom functionality</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">May require app or custom code</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You mentioned [feature]. Let me confirm we can implement this. Give me 24 hours."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Complex integrations</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Third-party systems, ERPs, custom APIs</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What system needs to connect? I will verify compatibility."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Unusual product types</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Subscriptions, digital goods, complex variants</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Your product type may need special handling. Let me check the best approach."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tight deadlines</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">May not be achievable</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Your launch date is [date]. Our standard is 14 days. Let me see if we can accommodate."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Design expectations</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reference store may not be realistic</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I see your reference stores. [X feature] requires [explanation]. Want to discuss options?"</td>
</tr>
</table>

<h4>Hard Problems vs Routine Items</h4>
<div class="highlight-box">
<table style="width: 100%; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>HARD PROBLEMS (Discuss BEFORE Order)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>ROUTINE ITEMS (Collect AFTER Order)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ERP integration requirement</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logo file</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Subscription box with custom logic</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand colors and fonts</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-currency with specific tax rules</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product images</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom product configurator</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store login credentials</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Needs delivery in 5 days (feasibility?)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">About page copy</td>
</tr>
</table>
</div>

<h4>The 100% Rule</h4>
<div class="warning-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>Before accepting ANY project, be 100% SURE you can solve every identified hard problem:</strong>
<ul style="margin-bottom: 0;">
<li><strong>If YES:</strong> Proceed with confidence. Place the order.</li>
<li><strong>If UNSURE:</strong> Escalate to senior developer or founder BEFORE committing. Say: "Let me confirm this with our technical team -- I will get back to you within 24 hours."</li>
<li><strong>If NO:</strong> Be honest: "This specific feature is outside our scope. Here is what we CAN do instead."</li>
</ul>
</div>

<div class="highlight-box">
<strong>Why This Matters for Qualification:</strong><br><br>
Hard problem identification is part of qualification because it determines whether you can actually deliver what the client needs. A lead might pass M.T.N.D. perfectly (money, timeline, need, decision-maker) but if they need something technically impossible, the project will fail. <strong>Always identify hard problems during your qualification conversation, not after the order.</strong>
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

<!-- WHY TEMPLATES MATTER -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
<h3 style="color: #60A5FA; margin-top: 0;">🎯 Why Templates Matter</h3>
<p>Consistency equals professionalism. The top closers in sales never wing it &mdash; they have <strong>battle-tested scripts</strong> for every situation they encounter. Templates do two critical things simultaneously:</p>
<ul>
<li><strong>Save time:</strong> You do not have to think of the perfect response from scratch every single time. You already have one ready.</li>
<li><strong>Increase conversion:</strong> Every template has been refined through hundreds of conversations. The wording, the structure, the flow &mdash; all optimized for results.</li>
</ul>
<div class="highlight-box">
<h4>The Template Mindset</h4>
<p>Think of templates like a chef&rsquo;s recipe book. A great chef does not memorize recipes word for word &mdash; they understand the <strong>principles</strong> behind each dish and adapt based on the ingredients available. Your templates work the same way: learn the structure, understand the psychology behind each line, then personalize for every lead.</p>
</div>
<div class="warning-box">
<h4>⚠️ Templates Are NOT Copy-Paste</h4>
<p>If you send the exact same message to every lead without personalizing, you will sound robotic and lose deals. Templates are <strong>frameworks</strong> &mdash; you must customize the name, niche, specific details, and tone for each conversation.</p>
</div>
</div>

<!-- SPEED TO LEAD -->
<div class="content-section">
<h3>⚡ Speed to Lead: The #1 Factor in Closing</h3>
<p>The probability of qualifying a lead drops by <strong>400%</strong> if you wait just 10 minutes vs responding in 1 minute. On Fiverr and freelance platforms, <strong>first to respond wins 40% more conversions.</strong></p>
<p>Why? Two reasons:</p>
<ul>
<li><strong>Algorithm boost:</strong> Platforms prioritize fast responders in search rankings and badge systems</li>
<li><strong>Buyer psychology:</strong> Clients are impatient. They message 3-5 sellers and go with whoever answers first. By the time you respond 30 minutes later, they have already placed an order with someone else.</li>
</ul>
<div class="mermaid">
pie title Conversion Probability by Response Time
    "0-30 Mins (High)" : 65
    "30-60 Mins (Medium)" : 25
    "1-4 Hours (Low)" : 8
    "24+ Hours (Zero)" : 2
</div>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2)); border: none; text-align: center; padding: 25px;">
<div style="font-size: 1.5em; font-weight: 700;">80% of leads are lost if you take more than 5 minutes to respond</div>
<p style="margin-bottom: 0; margin-top: 10px;">Speed is not optional. It is your single biggest competitive advantage.</p>
</div>
</div>

<!-- RESPONSE TIME STANDARDS -->
<div class="content-section">
<h3>⏱️ Response Time Standards</h3>
<div class="warning-box">
<h4>⚠️ Mandatory Response Time Rules</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Scenario</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Maximum Time</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Status</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New lead inquiry</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Under 5 minutes</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🎯 Ideal</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Active conversation reply</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Under 1 hour</strong> (during business hours)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Acceptable</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proposal/quote delivery</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Within 24 hours</strong> of discovery</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Acceptable</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scheduled follow-ups</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>On schedule, never forgotten</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">📅 Mandatory</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response after 30+ minutes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They likely ordered elsewhere</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⚠️ Risky</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.25);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response after 1+ hour</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They have definitely moved on</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Dead</td>
</tr>
</table>
</div>
</div>

<!-- THE 4 RESPONSE TYPES -->
<div class="content-section">
<h3>📝 The 4 Response Types</h3>
<p>Every inquiry falls into one of four categories. Master the right template for each:</p>

<h4 style="color: #10B981;">Type 1: Initial Lead Response (General Inquiry)</h4>
<p><em>"Hi, I need a Shopify store for my business."</em></p>
<p>This is your most common response type. The goal is to qualify the lead quickly while showing enthusiasm and credibility. You must respond within 5 minutes.</p>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>Template Structure:</strong>
<ol style="margin-bottom: 0;">
<li>Warm greeting + genuine enthusiasm</li>
<li>5 Qualifying questions (products, count, branding, features, timeline)</li>
<li>Share a relevant portfolio piece from their niche</li>
<li>Mention credibility (2000+ stores built, 4.9 star rating)</li>
<li>Promise a custom offer within a specific timeframe</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 10px;">
<strong>WhatsApp/Chat Script (Informal, Friendly):</strong><br>
"Hi [Name]! 👋 Thanks for reaching out about your store!<br><br>
Quick questions to create the perfect solution for you:<br>
1️⃣ What products will you sell?<br>
2️⃣ How many products for launch?<br>
3️⃣ Do you have your logo, brand colors, and product photos ready?<br>
4️⃣ Any specific features needed (subscriptions, custom checkout, multi-currency)?<br>
5️⃣ What is your ideal timeline?<br><br>
We have built 2000+ stores with a 4.9★ rating. Here is one in your niche: [link]<br><br>
I will send you a custom offer within 2-3 hours! 🚀"
</div>

<div class="highlight-box" style="margin-top: 10px;">
<strong>Email Script (Professional, Value-Focused):</strong><br>
"Subject: Re: Your Shopify Store Project<br><br>
Hi [Name],<br><br>
Thank you for reaching out! I reviewed your inquiry and I am excited about your [niche] business.<br><br>
To put together the best solution for you, I have a few quick questions:<br>
- What products will you be selling, and approximately how many for launch?<br>
- Do you have branding assets ready (logo, colors, product photography)?<br>
- Are there any specific features or integrations you need?<br>
- What is your ideal launch timeline?<br><br>
We specialize in high-converting Shopify stores and have delivered 2,000+ projects with a 4.9-star rating. Here is a recent project in a similar niche: [portfolio link]<br><br>
I will have a tailored proposal ready for you within 24 hours.<br><br>
Looking forward to working together!<br>
[Your Name]"
</div>

<div class="highlight-box" style="margin-top: 15px; background: rgba(139, 92, 246, 0.15); border-color: #8B5CF6;">
<strong>Variation by Lead Source:</strong>
<table style="width: 100%; margin: 10px 0; border-collapse: collapse;">
<tr style="background: rgba(139, 92, 246, 0.15);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Source</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Opening Line Adjustment</strong></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Website form</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Thanks for filling out our form! I saw you are interested in [service]..."</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Social media DM</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Hey! Loved checking out your [Instagram/TikTok]. Your brand has great potential..."</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Referral</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"[Referrer Name] mentioned you are looking for a Shopify expert. They are one of our favorite clients..."</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fiverr/Upwork</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Hi! Thanks for your message. I checked your current site &mdash; I have some great ideas for you..."</td>
</tr>
</table>
</div>

<h4 style="color: #6366F1; margin-top: 25px;">Type 2: Discovery Response (Qualification)</h4>
<p><em>After initial contact &mdash; gathering information to qualify the lead</em></p>
<p>The discovery phase is where you transition from friendly chat to understanding their actual needs. Use the <strong>M.T.N.D. qualification framework</strong> (Money, Timeline, Need, Decision-maker) to determine if this is a real opportunity.</p>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>M.T.N.D. Framework Integration:</strong>
<table style="width: 100%; margin: 10px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Factor</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Question to Ask</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It Matters</strong></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Money</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"What budget range are you working with for this project?"</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Determines if they can afford your packages</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Timeline</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"When do you need the store live by? Any specific launch date?"</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Urgency signals buying intent</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Need</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"What is the main problem you are trying to solve with this store?"</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Understanding pain points helps you position value</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Decision-maker</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Are you the one making the final decision, or is there someone else involved?"</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Avoids wasting time pitching non-decision-makers</td>
</tr>
</table>
</div>

<div class="highlight-box" style="margin-top: 10px;">
<strong>Discovery Script &mdash; Transitioning from Chat to Qualification:</strong><br>
"Thanks for the details, [Name]! Your [niche] brand sounds really exciting.<br><br>
To give you the most accurate recommendation, I need to understand a few things:<br><br>
About your business:<br>
- What is your current monthly revenue (or is this a brand new venture)?<br>
- Who is your target customer?<br>
- Do you have an existing website or are we starting from scratch?<br><br>
About this project:<br>
- What is the most important thing this store needs to do for you?<br>
- What budget range did you have in mind?<br>
- Is there a specific launch date you are working toward?<br><br>
Once I understand these, I can recommend the exact right package and timeline for you."
</div>

<div class="highlight-box" style="margin-top: 10px; background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>How to Ask About Budget Without Being Pushy:</strong><br>
<ul>
<li>❌ "What is your budget?" (Too direct, makes them defensive)</li>
<li>❌ "How much can you spend?" (Sounds like you are trying to maximize price)</li>
<li>✅ "What budget range are you comfortable with? This helps me recommend the right package." (Positions it as helpful)</li>
<li>✅ "Our packages range from $800 to $1,800. Which range aligns with what you had in mind?" (Anchors them in your pricing)</li>
</ul>
</div>

<h4 style="color: #F59E0B; margin-top: 25px;">Type 3: Proposal/Pitch Response</h4>
<p><em>Presenting the solution after you understand their needs</em></p>
<p>This is where you present your recommendation. Structure matters &mdash; follow the RECAP method:</p>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>The RECAP Pitch Structure:</strong>
<ol>
<li><strong>Recap their need:</strong> "Based on what you shared, you need a [specific type] store that [solves their problem]"</li>
<li><strong>Present the solution:</strong> "Here is what I recommend &mdash; our [Package Name] includes..."</li>
<li><strong>Show portfolio proof:</strong> "Here is a store we built for a similar [niche] brand: [link]"</li>
<li><strong>Quote the price:</strong> "The investment for this is $[price], which includes [key deliverables]"</li>
<li><strong>Handle questions:</strong> "What questions do you have about this?"</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 10px;">
<strong>Chat-Based Proposal Script:</strong><br>
"[Name], based on what you shared about your [niche] brand, here is what I recommend:<br><br>
💎 <strong>Premium Package ($1,200)</strong><br>
- 5-page custom design matched to your brand<br>
- Up to 25 products uploaded and optimized<br>
- Speed optimization (85+ PageSpeed score)<br>
- Mobile-responsive design<br>
- 30 days of post-launch support<br>
- Training walkthrough so you can manage it yourself<br><br>
Here is a store we built for a similar brand: [portfolio link]<br><br>
Timeline: 14 business days from project kickoff<br><br>
Ready to get started? I can send you the order link right now! 🚀"
</div>

<div class="highlight-box" style="margin-top: 10px; background: rgba(139, 92, 246, 0.15); border-color: #8B5CF6;">
<strong>Good/Better/Best Package Presentation:</strong><br>
"For your [niche] store, we have three options:<br><br>
⭐ <strong>Starter ($800)</strong> &mdash; 3-page store, 15 products, premium theme, 14-day support<br>
💎 <strong>Premium ($1,200)</strong> &mdash; 5-page custom store, 25 products, speed optimized, 30-day support <em>(Most Popular)</em><br>
👑 <strong>Enterprise ($1,800)</strong> &mdash; Everything in Premium + unlimited products, advanced features, custom functionality, 90-day support<br><br>
Based on what you told me about [their specific need], I would recommend the <strong>[Package Name]</strong> because [specific reason tied to their goals].<br><br>
Which one speaks to you?"
</div>

<div class="highlight-box" style="margin-top: 10px;">
<strong>Voice Message Template (60 seconds):</strong><br>
"Hey [Name]! I just put together your proposal and wanted to walk you through it quickly. Based on what you shared about [their business], I recommend our [Package] at [$price]. This includes [top 3 deliverables]. I have also attached a link to a similar store we built &mdash; check it out and let me know what you think! I am excited about this project."
</div>

<div class="highlight-box" style="margin-top: 10px;">
<strong>Video Call Pitch Structure (15-Minute Format):</strong>
<table style="width: 100%; margin: 10px 0; border-collapse: collapse;">
<tr style="background: rgba(245, 158, 11, 0.2);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Time</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Activity</strong></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">0-2 min</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Small talk + recap their goals</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2-5 min</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show portfolio examples in their niche</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5-8 min</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Present recommended package + deliverables</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8-10 min</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Quote price + explain timeline</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10-13 min</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Handle questions and objections</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">13-15 min</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Close: "Ready to get started? I will send the order link."</td>
</tr>
</table>
</div>

<h4 style="color: #EC4899; margin-top: 25px;">Type 4: Follow-Up Response (After Proposal, No Reply)</h4>
<p><em>The fortune is in the follow-up. 80% of sales require 5+ follow-ups, but most salespeople give up after 1 or 2.</em></p>
<p>When a lead goes silent after your proposal, do NOT panic. They are busy, distracted, or still deciding. Your job is to stay top of mind without being annoying. Each follow-up must add NEW value &mdash; never send a bare "just checking in" message.</p>

<div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-color: #EC4899;">
<strong>Day 1 Follow-Up (Soft Nudge):</strong><br>
"Hi [Name]! Just wanted to make sure you received the proposal I sent yesterday. Did you get a chance to look it over? Happy to answer any questions! 😊"
</div>

<div class="highlight-box" style="margin-top: 10px; background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Day 3 Follow-Up (Add Value):</strong><br>
"Hey [Name]! While you are reviewing the proposal, I came across this case study of a [similar niche] brand that increased their revenue by 40% after their store redesign. Thought you might find it interesting: [link]. Let me know if you have any questions about your project!"
</div>

<div class="highlight-box" style="margin-top: 10px; background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>Day 7 Follow-Up (Urgency):</strong><br>
"Hi [Name]! My schedule is filling up for this month and I wanted to check if you are still interested in moving forward. If we start by [date], I can have your store live by [date]. Would love to reserve a spot for you!"
</div>

<div class="highlight-box" style="margin-top: 10px; background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>Day 14 Follow-Up (Breakup Message):</strong><br>
"Hey [Name], I have not heard back so I am going to close out this project file for now. No hard feelings at all &mdash; I completely understand priorities shift. If you decide to move forward in the future, just reach out and I will take care of you. Wishing you the best with your [niche] business! 🙏"
</div>

<div class="highlight-box" style="margin-top: 10px; background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>Day 30 Follow-Up (Re-engagement):</strong><br>
"Hey [Name]! It has been a while since we chatted. Just wanted to share &mdash; we just finished a beautiful [niche] store that reminded me of your project. Here is the link: [portfolio link]. Are you still thinking about launching your store? I would love to help when you are ready."
</div>
</div>

<!-- FOLLOW-UP SEQUENCE FRAMEWORK -->
<div class="content-section">
<h3>🔄 The Complete Follow-Up Sequence Framework</h3>
<p>Getting a lead is easy. Converting them takes persistence. People are like popcorn &mdash; they pop at different times. Here is your complete cadence:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Action</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Channel</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Template Focus</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 0</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Send proposal/quote</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chat + Email</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full RECAP pitch with portfolio link</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 1</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Soft check-in</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chat</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Did you get a chance to review?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 3</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add value</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chat or Email</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Share a case study or resource relevant to their niche</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 5</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video follow-up</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loom video</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-second Loom: "Analyzed your site, found 3 quick wins"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 7</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create urgency</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chat</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Schedule filling up &mdash; want me to reserve a slot?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 10</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof drop</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chat</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just delivered another [niche] store &mdash; want to see?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 14</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Breakup message</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Closing file &mdash; reach out when ready"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 30</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Re-engagement</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chat or Email</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Share a new portfolio piece, check if still interested</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 60</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long-term nurture</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Saw something that reminded me of your brand..."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Day 90+</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quarterly check-in</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Still here if you need help. We just launched [feature]."</td>
</tr>
</table>

<div class="warning-box">
<h4>⚠️ The "Just Checking In" Death</h4>
<p>NEVER send a message that says "just checking in" or "just following up." These messages add zero value and make you look desperate. <strong>Every follow-up must contain NEW value</strong> &mdash; a case study, a portfolio piece, an insight about their business, or a time-sensitive offer.</p>
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>The Video Follow-Up Hack:</strong>
<p>Send a 30-second Loom video thanking them and asking if they have questions. Video follow-ups get a <strong>3x higher response rate</strong> than text messages. This is your secret weapon for re-engaging cold leads.</p>
</div>
</div>

<!-- PERSONALIZATION RULES -->
<div class="content-section">
<h3>✨ Personalization Rules</h3>
<p>Every template must be customized before sending. Here are the non-negotiable personalization rules:</p>
<ol>
<li><strong>Always use their name</strong> &mdash; Never send a message without addressing them by name</li>
<li><strong>Reference their specific business or niche</strong> &mdash; "Your skincare brand" not "your business"</li>
<li><strong>Mention something specific from their inquiry</strong> &mdash; Prove you read their message</li>
<li><strong>Include a relevant portfolio example</strong> &mdash; From their niche if possible</li>
<li><strong>Adapt your tone to match theirs</strong> &mdash; If they are casual, be casual. If they are formal, be formal.</li>
<li><strong>Reference their platform</strong> &mdash; "I saw your Fiverr message" or "Thanks for the Instagram DM"</li>
</ol>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Generic (Never Do This)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Personalized (Always Do This)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Hi, thanks for reaching out about your store."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Hi Sarah! Thanks for reaching out about your organic skincare store."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here is our portfolio."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here is a beauty brand store we recently built that has a similar vibe to what you described."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me know if you are interested."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Ready to make your organic skincare brand look as premium as it deserves?"</td>
</tr>
</table>
</div>

<!-- COMMON RESPONSE MISTAKES -->
<div class="content-section">
<h3>🚫 Common Response Mistakes</h3>
<div class="warning-box">
<h4>⚠️ Avoid These Deal-Killing Errors</h4>
<ul>
<li><strong>Sending long essays:</strong> Keep chat messages under 3 sentences. Long walls of text get ignored. Break information into multiple messages if needed.</li>
<li><strong>Talking about yourself instead of their problem:</strong> "We have been in business for 5 years and we use the latest technology and..." &mdash; Nobody cares. Talk about THEIR business, THEIR goals, THEIR problems.</li>
<li><strong>Pitching too early before understanding needs:</strong> If you send pricing before asking a single question, you look desperate. Always qualify first, then pitch.</li>
<li><strong>Forgetting to follow up:</strong> 80% of sales happen after 5+ touchpoints. If you send one message and give up, you are leaving money on the table.</li>
<li><strong>Using jargon the client does not understand:</strong> "We will implement a headless commerce architecture with serverless functions" &mdash; they just want a store that sells products.</li>
<li><strong>Not setting the next step:</strong> Every message should end with a clear next action. "I will send you the proposal by 5pm" or "When works for a quick call?"</li>
<li><strong>Responding with just "Hi" or "Hello":</strong> If your first message does not provide value or ask a question, you have wasted a touchpoint.</li>
<li><strong>Sending voice messages without context:</strong> Always send a text summary before or after a voice message so they know what it is about.</li>
</ul>
</div>
</div>

<!-- VIDEOS SECTION -->
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
<li>Conviction x Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts &mdash; reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>

<!-- PRACTICE EXERCISE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
<h3 style="color: #34D399; margin-top: 0;">🔧 Practice Exercise</h3>
<p>Complete these exercises to master your response templates:</p>
<ol>
<li><strong>Write initial responses for 3 different lead scenarios:</strong>
<ul>
<li>Scenario A: A fitness clothing brand owner messages you on Fiverr saying "I need a Shopify store for my activewear brand"</li>
<li>Scenario B: Someone DMs you on Instagram asking "How much for a basic Shopify store?"</li>
<li>Scenario C: A referral from an existing client emails saying "My friend [name] recommended you. I sell handmade candles and need an online store."</li>
</ul>
</li>
<li><strong>Create a 5-day follow-up sequence</strong> for a lead who received your proposal for a $1,200 Premium package but has not responded in 24 hours. Write out each message word for word.</li>
<li><strong>Role-play exercise:</strong> Record a 60-second voice message pitch for a coffee subscription brand. Include their name, acknowledge their business, and present a package recommendation.</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You know the templates, follow-up sequences, and personalization rules. Prove it.</p>
<ul>
<li>📝 10 questions about response templates</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 6</li>
</ul>
</div>
`;

// Task 6 Content: Sales Psychology
const task7Content = `
<h2>📚 TASK 6: SALES PSYCHOLOGY</h2>

<!-- WHY PSYCHOLOGY MATTERS -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
<h3 style="color: #A78BFA; margin-top: 0;">🧠 Why Sales Psychology Matters</h3>
<p>Sales is not about manipulation &mdash; it is about understanding how people make decisions and guiding them toward the right choice. These techniques are used by top-performing sales teams worldwide. The difference between a struggling salesperson and a top closer is not talent &mdash; it is understanding human behavior.</p>
<div class="highlight-box">
<h4>The Doctor Analogy</h4>
<p>Think of yourself as a <strong>doctor, not a salesperson</strong>. A good doctor does not walk into the room and immediately prescribe medication. They ask questions, listen carefully, run diagnostics, and THEN recommend a treatment plan based on the patient&rsquo;s specific condition.</p>
<p>Your sales process works the same way:</p>
<ol>
<li><strong>Ask questions</strong> &mdash; "What brings you in today?" (What do you need?)</li>
<li><strong>Listen carefully</strong> &mdash; Let them describe their symptoms (problems)</li>
<li><strong>Diagnose</strong> &mdash; Identify the real issue behind what they are telling you</li>
<li><strong>Prescribe</strong> &mdash; Recommend the right solution (package) for their specific situation</li>
</ol>
<p><strong>Never push &mdash; guide.</strong> When you position yourself as the expert diagnosing their problem, they trust your recommendation. When you push a sale, they resist.</p>
</div>
</div>

<!-- THE 80/20 RULE -->
<div class="content-section">
<h3>🧠 The 80/20 Rule of Sales &mdash; The Foundation of Everything</h3>
<p>This is the single most violated rule in sales, and the most important principle you will ever learn:</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(16, 185, 129, 0.3)); border: none; text-align: center; padding: 30px;">
<div style="font-size: 2em; font-weight: 700;">LISTEN 80% | SPEAK 20%</div>
<p style="margin-bottom: 0; margin-top: 15px;">The best salespeople ask questions and listen. Whoever talks less, wins.</p>
</div>
<div class="mermaid">
pie title Who Should Be Talking?
    "Client (Listening Phase)" : 80
    "You (Asking/Closing)" : 20
</div>

<p style="margin-top: 15px;"><strong>Why this works:</strong></p>
<ul>
<li>People love talking about themselves and their business</li>
<li>They reveal their real pain points when they feel heard</li>
<li>They feel understood, not sold to &mdash; which builds trust</li>
<li>When you finally speak, they actually listen because you have earned their attention</li>
<li>The client should feel like THEY made the decision, not that you pushed them</li>
</ul>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ What Bad Salespeople Do</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ What Top Salespeople Do</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Talk 80%, listen 20%</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ask questions and WAIT for answers</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pitch features endlessly</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Let the client tell you exactly how to sell to them</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Push the sale aggressively</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Take notes on their exact words and use their language back</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interrupt to make their point</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only speak to ask clarifying questions or to close</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus on what THEY want to say</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus on what the CLIENT needs to hear</td>
</tr>
</table>

<div class="highlight-box" style="text-align: center; padding: 20px; margin-top: 15px;">
<p style="font-size: 1.1em; margin: 0;"><strong>"The person asking questions controls the conversation. The person talking reveals their needs."</strong></p>
</div>
</div>

<!-- THE 10 PSYCHOLOGY TECHNIQUES -->
<div class="content-section">
<h3>🎯 The 10 Psychology Techniques</h3>
<p>Master these 10 techniques and you will close more deals than 90% of salespeople. For each technique, understand <strong>what it is</strong>, <strong>why it works</strong>, and <strong>how to use it</strong> in a real conversation.</p>

<h4>1. Social Proof &mdash; "We have built 2000+ Shopify stores across 20 countries"</h4>
<p><strong>What it is:</strong> Showing evidence that other people (especially similar people) have chosen you and been satisfied. Humans are herd animals &mdash; when uncertain, we look at what others are doing.</p>
<p><strong>Why it works:</strong> The brain uses social proof as a mental shortcut. If 2,000 other people trusted this company, it must be safe. It reduces perceived risk.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"We have built over 2,000 Shopify stores with a 4.9-star rating. Just last week, we delivered a [niche] store that is already getting 15 orders a day. Want me to send you the link so you can see the quality?"
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Using generic social proof like "We are highly rated." Be SPECIFIC with numbers, niches, and results. "2,000+ stores, 4.9 stars, clients in 20 countries" is powerful. "We are good at what we do" is worthless.
</div>

<h4>2. Scarcity and Urgency &mdash; "We only take on 5 new clients per month"</h4>
<p><strong>What it is:</strong> Creating a legitimate sense of limited availability or time-sensitive opportunity. When something is scarce, people value it more.</p>
<p><strong>Why it works:</strong> The brain is wired to avoid loss. The pain of missing an opportunity is psychologically twice as strong as the pleasure of gaining something equivalent.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"We have 2 slots left for this month. If you want to get your store live before [date], I would need to confirm your project by [deadline]. After that, the next available start date is [3 weeks out]."
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Fake urgency. Do NOT say "This offer expires in 24 hours!" if it does not. Clients can tell when urgency is manufactured, and it destroys trust. Only use scarcity that is real &mdash; actual capacity limits, actual schedule constraints.
</div>

<h4>3. Authority &mdash; "Our team includes certified Shopify experts"</h4>
<p><strong>What it is:</strong> Establishing yourself as a recognized expert in your field. People defer to authority figures when making decisions in areas they do not fully understand.</p>
<p><strong>Why it works:</strong> Clients cannot evaluate the quality of Shopify development themselves. They rely on signals of expertise &mdash; certifications, experience, results, and confident communication.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"Our team includes certified Shopify Partners who have been doing this for over 5 years. We are ranked in the top 1% of sellers on Fiverr, and our work has been featured by several Shopify-related blogs. You are in expert hands."
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Over-claiming. Saying "We are the best agency in the world" without proof makes you look like an amateur. Let your credentials, numbers, and results speak for you.
</div>

<h4>4. Reciprocity &mdash; Give free value first</h4>
<p><strong>What it is:</strong> Providing something valuable for free before asking for anything in return. When someone gives us something, we feel psychologically compelled to give something back.</p>
<p><strong>Why it works:</strong> The rule of reciprocity is one of the strongest psychological forces. A mini audit, a free tip, or a resource creates a sense of obligation and goodwill.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"Before we even talk about a project, I ran your current site through PageSpeed Insights. Here are 3 quick wins that could improve your conversion rate right now &mdash; no charge, no strings attached:<br>
1. Your images are not compressed &mdash; fixing this alone could cut load time by 2 seconds<br>
2. Your checkout has 6 steps &mdash; reducing to 3 could boost completion by 20%<br>
3. You have no trust badges on your product pages &mdash; adding them typically increases conversions by 15%<br><br>
If you want, I can fix all of these and more as part of a full store build. But those 3 tips are yours to keep either way."
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Giving away TOO much value. A free 2-minute Loom reviewing their site is perfect. A free 2-hour consultation devalues your time. Give enough to demonstrate expertise, not enough to solve the entire problem.
</div>

<h4>5. Anchoring &mdash; Present the highest package first</h4>
<p><strong>What it is:</strong> The first number someone hears becomes their reference point (anchor) for all subsequent numbers. Show the expensive option first, and your actual target price feels like a bargain.</p>
<p><strong>Why it works:</strong> When you say "$15,000" first, the brain anchors to that number. When you then say "$1,800," it feels dramatically cheaper &mdash; even though $1,800 is still a significant investment.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"For the full scope you described &mdash; custom design, advanced features, integrations, and ongoing support &mdash; we are looking at around $15,000."<br><br>
(pause for 3 seconds)<br><br>
"BUT, looking at your current situation, I actually think we can get you 80% of the results with our $1,800 Enterprise package. We keep the custom design and speed optimization, but use a premium theme as the base instead of building from scratch. Most of our clients find this is the sweet spot."
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Presenting your cheapest option first. If the first number they hear is $800, then $1,200 feels expensive. If the first number is $15,000, then $1,200 feels like a steal. Always present Good/Better/Best from top to bottom.
</div>

<h4>6. Loss Aversion &mdash; "Every day without a proper store, you are losing potential customers"</h4>
<p><strong>What it is:</strong> Framing the conversation around what they are losing by NOT taking action, rather than what they gain by taking action. The pain of loss is psychologically twice as powerful as the pleasure of gain.</p>
<p><strong>Why it works:</strong> People are more motivated to avoid pain than to pursue pleasure. "You are losing $2,500/month" is more compelling than "You could gain $2,500/month."</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"Based on your traffic numbers, your current site speed and conversion rate are costing you roughly $2,500 in lost sales every month. That is $30,000 a year. Every week you wait is another $625 walking out the door. The store investment pays for itself in the first 2-3 weeks."
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Being too aggressive with fear tactics. Loss aversion should feel like a genuine observation, not a scare tactic. Back it up with real data &mdash; their PageSpeed score, industry conversion rates, their traffic numbers.
</div>

<h4>7. The Contrast Principle &mdash; Compare your service to expensive alternatives</h4>
<p><strong>What it is:</strong> Placing your offer next to something more expensive to make it look like better value. This is different from anchoring &mdash; contrast compares your service to competitor alternatives.</p>
<p><strong>Why it works:</strong> Value is relative, not absolute. $1,200 feels expensive in isolation. But compared to hiring a freelancer at $50/hour for 100+ hours ($5,000+), or hiring a US agency at $10,000+, it feels like incredible value.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"Let me put this in perspective. A US-based Shopify agency charges $8,000-$15,000 for the same scope. A freelancer on Upwork at $50/hour would take 80-100 hours, so $4,000-$5,000 with unpredictable quality. Our $1,200 Premium package delivers agency-level quality at a fraction of the cost, with a proven track record of 2,000+ stores."
</div>

<h4>8. Commitment and Consistency &mdash; Get small &ldquo;yes&rdquo; answers leading to the big &ldquo;yes&rdquo;</h4>
<p><strong>What it is:</strong> Also known as the 3-Yes Technique. Once people commit to a position (even a small one), they feel psychologically compelled to remain consistent with that commitment.</p>
<p><strong>Why it works:</strong> Each small "yes" activates the brain&rsquo;s desire for consistency. After saying yes three times, saying "no" to the final question creates cognitive dissonance.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"You mentioned you want your store to convert visitors into buyers, right?" (Yes)<br>
"And having it done professionally matters to you?" (Yes)<br>
"Quality is more important to you than finding the cheapest option?" (Yes)<br><br>
"Great &mdash; then our Premium package is exactly what you need. Here is what is included..."<br><br>
<em>After 3 yeses, the probability of closing increases by 50%.</em>
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Asking manipulative questions that make the client feel trapped. The questions should be genuine reflections of what they have told you, not tricks. If they said quality matters, ask about quality. Do not manufacture false agreement.
</div>

<h4>9. Storytelling &mdash; "One of our clients was in your exact position..."</h4>
<p><strong>What it is:</strong> Using real client success stories to illustrate outcomes instead of making abstract promises. Stories bypass logical resistance because the brain processes them as experiences, not sales pitches.</p>
<p><strong>Why it works:</strong> When you tell a story, the listener&rsquo;s brain activates the same regions as if they were experiencing it themselves. They see themselves in the success story.</p>
<div class="highlight-box">
<strong>Script:</strong><br>
"We had a client last month in the exact same position as you. She ran a handmade jewelry brand, was worried the investment would not pay off, and was comparing several agencies. We built her a Premium store, and within 45 days of launching, her conversion rate went from 0.8% to 2.4%. Revenue jumped from $8K per month to $22K per month. The store paid for itself in the first week. Would results like that be interesting to you?"
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Using vague stories without specific details. "We helped someone make more money" is weak. "We helped Sarah from GlowSkin Organics go from $3K to $18K per month in 60 days" is powerful. Include the niche, the problem, the numbers, and the timeline.
</div>

<h4>10. Mirror and Match &mdash; Match their communication style, pace, and energy</h4>
<p><strong>What it is:</strong> Subtly adapting your communication style to match the client&rsquo;s. If they are casual and use emojis, be casual. If they are formal and use proper grammar, be formal. Repeat their exact words back when quoting or summarizing.</p>
<p><strong>Why it works:</strong> People trust and like people who are similar to themselves. Matching their style creates subconscious rapport.</p>
<div class="highlight-box">
<strong>Examples:</strong>
<table style="width: 100%; margin: 10px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Style</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Your Response Style</strong></td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"hey! need a store asap lol"</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Hey! We can definitely help with that! Let me ask a few quick q's..."</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Good morning. I am inquiring about your Shopify development services."</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Good morning! Thank you for your inquiry. I would be happy to discuss our services in detail."</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">They say: "I need a store that looks premium"</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You say: "We will build you a store that looks premium..." (parrot their exact words)</td>
</tr>
</table>
</div>
<div class="warning-box">
<strong>Common mistake:</strong> Being too obvious about mirroring. If they send one-word answers and you suddenly start sending one-word answers, it feels mocking. Mirror the overall tone and energy level, not every specific behavior.
</div>
</div>

<!-- QUICK REFERENCE TABLE -->
<div class="content-section">
<h3>⚡ Quick Reference: When to Use Each Technique</h3>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Situation</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Best Technique</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Building initial credibility</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Social Proof + Authority</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They do not see urgency to act</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Loss Aversion + Scarcity</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Opening a cold lead conversation</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reciprocity</strong> (give a free audit/tip)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price seems high to them</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Anchoring + Contrast Principle</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Starting any upsell conversation</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Commitment and Consistency</strong> (3-Yes)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client has objections about their niche</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Storytelling</strong> (Success Story Bridge)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client seems worried or frustrated</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mirror and Match</strong> + Labeling</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client needs motivation to decide</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Future Pacing</strong> (paint the picture)</td>
</tr>
</table>
</div>

<!-- EMOTIONAL VS LOGICAL BUYING -->
<div class="content-section">
<h3>💡 Emotional vs Logical Buying</h3>
<p>This is a foundational truth of sales: <strong>People buy emotionally, then justify logically.</strong> The decision to purchase is made in the emotional brain first. The logical brain kicks in afterward to rationalize why it was a good decision.</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15)); border: none; padding: 25px;">
<h4>Sell the Outcome, Not the Features</h4>
<p><strong>"Imagine your store generating $10K/month"</strong> hits harder than <strong>"We will build you a Shopify store."</strong></p>
<p>Features are logical. Benefits are emotional. Outcomes are transformational. Always sell the transformation.</p>
</div>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(139, 92, 246, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Feature (Logical)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Benefit (Emotional)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Outcome (Transformational)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed optimization included</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your store loads in under 2 seconds</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customers stay instead of bouncing &mdash; more sales for you</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile-responsive design</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Looks beautiful on every device</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Capture the 60% of shoppers buying on their phones</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-day post-launch support</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Peace of mind after launch</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus on growing your business while we handle the tech</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Conversion-focused layout</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Designed to make people buy</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Turn your traffic into revenue &mdash; 3-5% conversion rate</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store training walkthrough</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">You can manage it yourself</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Never pay a developer again for basic updates</td>
</tr>
</table>
</div>

<!-- BRAIN RULES IN SALES -->
<div class="content-section">
<h3>🧠 Brain Rules in Sales</h3>
<div class="warning-box">
<strong>Why do people reject good offers?</strong><br><br>
The brain releases <strong>cortisol (stress hormone)</strong> when facing change or spending money. The status quo feels safer &mdash; even when it is clearly holding them back. This is why clients say "I need to think about it" even when they know they need your service.<br><br>
Your job: Make the <strong>pain of NOT buying</strong> greater than the <strong>pain of buying.</strong>
</div>
<p><strong>People buy based on two core motivators:</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>😨 Fear (Away From Pain)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fear of missing out, fear of staying stuck, fear of competitors winning, fear of losing money every day</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🤑 Desire (Toward Pleasure)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Desire for more money, for growth, for success, for freedom, for a beautiful brand they are proud of</td>
</tr>
</table>
<p><strong>The Pain-Agitate-Solve Framework:</strong> This is one of the most powerful frameworks for structuring any sales conversation or message:</p>
<div class="highlight-box" style="margin-top: 10px;">
<strong>1. PAIN:</strong> Identify and name their current problem<br>
"Your current website is not converting visitors into customers. Your bounce rate is high and your checkout process is confusing."<br><br>
<strong>2. AGITATE:</strong> Make the problem feel urgent and costly<br>
"Every day that continues, you are losing money to competitors who have better stores. With your traffic levels, that is roughly $2,500 per month in lost revenue &mdash; $30,000 a year."<br><br>
<strong>3. SOLVE:</strong> Present your solution as the clear answer<br>
"We build premium Shopify stores that convert at 3-5%. Here is how we fix your specific issues and turn your traffic into revenue..."
</div>
</div>

<!-- READING BUYER SIGNALS -->
<div class="content-section">
<h3>🔥 Reading Buyer Signals</h3>
<p>Not every client tells you directly where they are in the buying process. Learn to read the signals:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🔥 HOT Signals (Ready to Buy)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Your Response</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Asking about pricing and packages</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Move to close. Present packages and ask which one fits.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Asking about timelines ("How soon can you start?")</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lock in a start date. "We can start Monday if you place the order today."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Asking about the process ("What happens after I order?")</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Walk them through the process and send the order link.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Asking about payment options</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They are ready. Explain payment and close immediately.</td>
</tr>
</table>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(245, 158, 11, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🟡 WARM Signals (Interested, Need Nurturing)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Your Response</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Asking detailed questions about features</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Answer thoroughly, then steer toward next step.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sharing their vision and ideas</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mirror their excitement. Show portfolio examples that match.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Asking to see more portfolio examples</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Send 2-3 curated examples. Follow up with a package recommendation.</td>
</tr>
</table>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🧊 COLD Signals (Not Ready / Low Interest)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Your Response</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Short, one-word answers ("ok", "cool")</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ask an open-ended question to re-engage. If they stay cold, move on.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delayed responses (days between replies)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Follow up once with value. If still cold, put in nurture pipeline.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I will think about it" / "Not right now"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Uncover the real objection. If genuine, set a follow-up date.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only asking about price (nothing else)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They are price shopping. Qualify budget before investing more time.</td>
</tr>
</table>
</div>

<!-- VIDEOS SECTION -->
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
<li>Conviction x Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts &mdash; reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>

<!-- PRACTICE EXERCISE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
<h3 style="color: #34D399; margin-top: 0;">🔧 Practice Exercise</h3>
<p>Complete these exercises to internalize the psychology techniques:</p>
<ol>
<li><strong>Write a Pain-Agitate-Solve script for 3 different client niches:</strong>
<ul>
<li>Niche A: A skincare brand with an existing Shopify store that converts at only 0.5%</li>
<li>Niche B: A fitness equipment brand launching their first online store</li>
<li>Niche C: A coffee subscription company with a slow, outdated website</li>
</ul>
</li>
<li><strong>Identify which psychology technique to use for 5 different lead scenarios:</strong>
<ul>
<li>A lead who says "I am not sure if this will work for my niche"</li>
<li>A lead who seems interested but hesitant about the price</li>
<li>A lead who is comparing you to 3 other agencies</li>
<li>A lead who has been burned by a bad developer before</li>
<li>A lead who says "I will think about it and get back to you"</li>
</ul>
</li>
<li><strong>Create a "Story Bank"</strong> of 5 client success stories you can reference in conversations. For each story, include: the client niche, their initial problem, what you built, and the measurable result they achieved.</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You have learned the psychology of influence and how to read buyer signals. Prove you understand it.</p>
<ul>
<li>📝 10 questions about sales psychology</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 7</li>
</ul>
</div>
`;

// Task 7 Content: Objection Handling
const task8Content = `
<h2>📚 TASK 7: OBJECTION HANDLING</h2>

<!-- THE ACE FRAMEWORK -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
<h3 style="color: #60A5FA; margin-top: 0;">🛡️ The A.C.E. Framework for Handling ANY Objection</h3>
<p>Before we dive into the specific objections, learn this universal framework. It works for <strong>every single objection</strong> you will ever face. Memorize it. Practice it until it becomes instinct.</p>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
<table style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 15%; text-align: center; font-size: 1.5em; font-weight: bold; color: #60A5FA;">A</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Acknowledge</strong> &mdash; "I totally understand your concern..." / "That is a great question..." / "I completely hear you..."<br><em>This shows empathy and prevents them from feeling attacked or dismissed.</em></td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-size: 1.5em; font-weight: bold; color: #60A5FA;">C</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Clarify</strong> &mdash; "Just so I understand, is it the price / timeline / scope that concerns you?" / "What specifically is holding you back?"<br><em>This uncovers the REAL objection behind their words. Often what they say is not what they mean.</em></td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-size: 1.5em; font-weight: bold; color: #60A5FA;">E</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Educate</strong> &mdash; Provide information that addresses their specific concern with data, proof, or a story.<br><em>This is where you present evidence: ROI calculations, portfolio examples, social proof, testimonials, or success stories.</em></td>
</tr>
</table>
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>A.C.E. in Action:</strong><br>
Client: "Your price is too high."<br><br>
<strong>A:</strong> "I completely understand &mdash; price is always an important factor."<br>
<strong>C:</strong> "Can I ask &mdash; is it the total amount, or is it that you are not sure about the return you will get?"<br>
<strong>E:</strong> "Our clients typically see the store pay for itself within 60-90 days. Let me show you a quick ROI calculation based on your specific numbers..."
</div>
</div>

<!-- THE TRUTH ABOUT OBJECTIONS -->
<div class="content-section">
<h3>🎯 The Truth About Objections</h3>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3)); border: none; text-align: center; padding: 25px;">
<div style="font-size: 1.5em; font-weight: 700;">Objections = Buying Signals</div>
<p style="margin-bottom: 0; margin-top: 10px;">If they did not care, they would just leave. Objections mean they ARE considering it but need more information or reassurance.</p>
</div>
<p style="margin-top: 15px;">An objection is <strong>NOT</strong> a rejection. It is a request for more information, more proof, or more reassurance. The worst thing that can happen in a sales conversation is not an objection &mdash; it is silence. When they object, they are engaged. When they disappear, they are gone.</p>

<div class="mermaid">
graph LR
    Obj[Objection] --> Listen[Listen 80/20]
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
    Resolve -- Yes --> Close[Close]
    Resolve -- No --> Loop[Loop Back]
    style Obj fill:#EF4444,stroke:#DC2626
    style Close fill:#10B981,stroke:#059669
</div>
</div>

<!-- THE 6 CORE OBJECTIONS -->
<div class="content-section">
<h3>🛠️ The 6 Core Objections</h3>
<p>These are the objections you will hear in 95% of your conversations. Master the response to each one and you will close significantly more deals.</p>

<h4 style="color: #EF4444;">Objection 1: "Your price is too high" / "It is too expensive"</h4>
<p><strong>What they SAY:</strong> "I like your work, but $1,200 is a lot. Can you do something around $700?"</p>
<p><strong>What they REALLY MEAN:</strong> Either "I do not see enough value yet to justify the price" OR "I genuinely cannot afford it at this amount." These are two completely different problems requiring different solutions.</p>
<p><strong>Why they are saying it:</strong> Price is the easiest objection to voice. Even when the real issue is trust, timeline, or uncertainty, people default to "it costs too much" because it feels like a safe, rational objection.</p>

<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>Response A (Short &mdash; For Chat):</strong><br>
"I understand &mdash; can I ask what budget you had in mind? I want to find the best solution that works for you."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(239, 68, 68, 0.1); border-color: #EF4444;">
<strong>Response B (Medium &mdash; ROI Focus):</strong><br>
"I hear you on the price. Let me share a quick ROI calculation. If your store generates even 10 orders per month at your average order value of $50, that is $500/month in revenue. The $1,200 investment pays for itself in less than 3 months &mdash; and then it is pure profit. Our clients typically see the store pay for itself within 60-90 days."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(239, 68, 68, 0.1); border-color: #EF4444;">
<strong>Response C (Detailed &mdash; Comparison Approach):</strong><br>
"I appreciate you being upfront about budget! Here is the thing &mdash; our $1,200 Premium package includes speed optimization, conversion-focused design, and 30 days of support. These are not extras &mdash; they are what make the difference between a store that gets visits and a store that gets sales.<br><br>
Compared to hiring a freelancer at $50/hour for 100+ hours, our package actually saves you money. And we have seen clients who went with cheaper options come back to us 6 months later asking to &lsquo;fix&rsquo; their store. They spent $500 twice instead of $1,200 once.<br><br>
Would it help if I showed you a before/after of a recent project so you can see exactly what the investment delivers?"
</div>
<p><strong>Follow-up question to keep the conversation going:</strong> "Which of the features I mentioned matters most to your business? That helps me recommend the right package."</p>

<h4 style="color: #F59E0B; margin-top: 30px;">Objection 2: "I need to think about it"</h4>
<p><strong>What they SAY:</strong> "This looks great, but I need some time to think it over."</p>
<p><strong>What they REALLY MEAN:</strong> Either "I am not fully convinced yet," "I need to discuss with my partner/team," or "There is a hidden concern I have not voiced." This is almost NEVER about literally needing time to think.</p>
<p><strong>Why they are saying it:</strong> It is the polite way to pause or exit a conversation without confrontation. Your job is to gently uncover the real reason.</p>

<div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-color: #F59E0B;">
<strong>Response A (Short):</strong><br>
"Absolutely! What specifically would you like to think about? I want to make sure I have given you all the information you need."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(245, 158, 11, 0.1); border-color: #F59E0B;">
<strong>Response B (Medium &mdash; Uncover the Real Objection):</strong><br>
"Absolutely &mdash; big decisions deserve thought. Quick question: is there anything specific you are weighing? Sometimes I can provide info that makes the decision clearer.<br><br>
Is it the price, the timeline, or do you need to check with someone else? No pressure at all &mdash; I just want to make sure you have everything you need."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(245, 158, 11, 0.1); border-color: #F59E0B;">
<strong>Response C (Detailed &mdash; With Urgency and Follow-Up):</strong><br>
"I totally respect that. Big decisions should not be rushed. Let me ask &mdash; what specifically do you need to think about?<br>
- Is it the price?<br>
- Is it the timeline?<br>
- Is it checking with someone else?<br><br>
I am not trying to pressure you &mdash; I just want to make sure I have given you all the info you need. And just so you know: our turnaround is 14 days, so if you are aiming for a specific launch date, I can hold a spot for you if you decide within the next few days.<br><br>
When would be a good time for me to check back? How about I message you on Tuesday? I will put a reminder &mdash; and no pressure, just checking in."
</div>
<p><strong>Follow-up question:</strong> "When would be a good time for me to follow up? I would rather set a specific date than leave things open-ended."</p>
<div class="warning-box">
<strong>⚠️ ALWAYS set a specific follow-up date.</strong> "I need to think about it" is the #1 deal-killer in sales. If you let them walk away without a follow-up date, the chances of them coming back drop to under 10%.
</div>

<h4 style="color: #6366F1; margin-top: 30px;">Objection 3: "I found someone cheaper" / "X charges less"</h4>
<p><strong>What they SAY:</strong> "I got a quote for $500 from someone on Fiverr. Why are you charging $1,500?"</p>
<p><strong>What they REALLY MEAN:</strong> "Convince me your quality is worth the premium. I need to understand the difference."</p>
<p><strong>Why they are saying it:</strong> They are comparison shopping, which is completely normal. They want to make sure they are getting the best value, not necessarily the cheapest price.</p>

<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Response A (Short):</strong><br>
"Smart to compare! Can I ask &mdash; what specifically are they including in the $500? I want to make sure you are comparing apples to apples."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(99, 102, 241, 0.1); border-color: #6366F1;">
<strong>Response B (Medium &mdash; Value Comparison):</strong><br>
"I completely understand comparing prices &mdash; it is smart! Let me share what that difference buys you. The $500 store likely uses a basic template with minimal customization. You will get a functional store, but probably need to hire someone later to fix conversion issues.<br><br>
Our $1,500 package includes custom design matched to your brand, mobile optimization, speed optimization, 1:1 training so you can manage it yourself, and 30 days of free support. Which of these would be okay to skip?"
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(99, 102, 241, 0.1); border-color: #6366F1;">
<strong>Response C (Detailed &mdash; Framework Approach):</strong><br>
"Great &mdash; you should compare! Here is what I would suggest asking every agency or freelancer:<br><br>
1. How many Shopify stores have you built? (We have done 2,000+)<br>
2. What is your revision policy? (We do unlimited revisions within scope)<br>
3. What happens after launch? (We include 30 days of free support)<br>
4. Can I speak to recent clients? (I will connect you with 3 right now)<br>
5. What is your response time? (We reply within 2 hours, always)<br><br>
Honestly, if someone else checks all those boxes AND is cheaper &mdash; go with them! But in my experience, the cheapest option ends up being the most expensive after all the fixes."
</div>
<p><strong>Follow-up question:</strong> "What matters most to you in choosing a developer? I want to focus on what is important to YOU."</p>

<h4 style="color: #10B981; margin-top: 30px;">Objection 4: "I can do it myself" / "I will use a template"</h4>
<p><strong>What they SAY:</strong> "I think I can just buy a Shopify theme and set it up myself."</p>
<p><strong>What they REALLY MEAN:</strong> "I am not sure the investment is worth it when there are DIY options available."</p>
<p><strong>Why they are saying it:</strong> They underestimate the complexity and time investment required to build a high-converting store. They see YouTube tutorials and think it looks easy.</p>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-color: #10B981;">
<strong>Response A (Short):</strong><br>
"Totally valid! Many of our clients started that way. Can I ask &mdash; how much is your time worth per hour? Most DIY stores take 80-100 hours to build properly."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
<strong>Response B (Medium):</strong><br>
"I completely respect that approach. You definitely CAN do it yourself &mdash; Shopify makes it possible. Here is what I have seen though: most DIY stores convert at 0.5-1%, while professionally built stores convert at 2-4%. On 10,000 monthly visitors, that is the difference between 50 sales and 400 sales.<br><br>
Plus, the time factor: a proper store build takes 80-100 hours of focused work. That is 2-3 weeks of full-time effort that could be spent growing your business instead. When you factor in your time value, the math usually favors hiring a specialist."
</div>
<p><strong>Follow-up question:</strong> "What is your biggest concern about hiring someone to do it &mdash; the cost, the control, or something else?"</p>

<h4 style="color: #EC4899; margin-top: 30px;">Objection 5: "I am not ready yet" / "Maybe next month"</h4>
<p><strong>What they SAY:</strong> "I love this but I am not quite ready. Maybe in a month or two."</p>
<p><strong>What they REALLY MEAN:</strong> Either genuinely not ready (legitimate timeline issue) or using it as a polite exit.</p>
<p><strong>Why they are saying it:</strong> They may be waiting on funding, on another project to finish, or they may simply be procrastinating. Your job is to understand which one it is.</p>

<div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-color: #EC4899;">
<strong>Response A (Short):</strong><br>
"Totally understand! Can I ask &mdash; what needs to happen before you are ready? I want to make sure we are aligned on timing."
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(236, 72, 153, 0.1); border-color: #EC4899;">
<strong>Response B (Medium &mdash; Offer to Start Planning):</strong><br>
"No problem at all! Let me suggest something: we can start the planning and design discovery now, while you finalize things on your end. That way, when you ARE ready to go, we can hit the ground running instead of starting from scratch. No payment required until you are ready to start the build. Would that work?"
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(236, 72, 153, 0.1); border-color: #EC4899;">
<strong>Response C (Detailed &mdash; Cost of Waiting):</strong><br>
"I hear you. Let me share one thing to consider: every month without a proper store is a month of lost revenue. Based on your niche and traffic potential, even a conservative estimate of 50 orders per month at $50 average means $2,500/month in revenue you are NOT collecting. Over 2 months of waiting, that is $5,000 in missed opportunity &mdash; more than the cost of the entire project.<br><br>
Would it make sense to at least lock in the current pricing and start planning? We can schedule the build for whenever works for you."
</div>
<p><strong>Follow-up question:</strong> "What specifically needs to change in the next month for you to be ready? Let me know and I will check back at the right time."</p>

<h4 style="color: #06B6D4; margin-top: 30px;">Objection 6: "I had a bad experience before" / "How do I know you are legit?"</h4>
<p><strong>What they SAY:</strong> "I have been burned before by developers who disappeared. How do I know you are different?"</p>
<p><strong>What they REALLY MEAN:</strong> "I am scared of getting hurt again. I need reassurance and proof before I trust you with my money."</p>
<p><strong>Why they are saying it:</strong> They have genuine trauma from a previous bad experience. This is actually one of the BEST objections to handle because you can differentiate yourself significantly from the bad actors who burned them.</p>

<div class="highlight-box" style="background: rgba(6, 182, 212, 0.15); border-color: #06B6D4;">
<strong>Response A (Short):</strong><br>
"I am really sorry you had that experience. That is unfortunately too common in this industry. Would it help if I connected you with 2-3 recent clients who can share their experience working with us?"
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(6, 182, 212, 0.1); border-color: #06B6D4;">
<strong>Response B (Medium &mdash; Proof Stack):</strong><br>
"Totally fair question. I am sorry you went through that &mdash; it happens way too often with freelancers who disappear. Here is what makes us different:<br><br>
- 2,000+ stores built &mdash; we are not going anywhere<br>
- 4.9-star rating on Fiverr and Upwork (I can share the links)<br>
- Payment through the platform &mdash; you are protected<br>
- Daily updates &mdash; you will hear from me every single day<br>
- Video walkthroughs &mdash; you see exactly what we are building<br><br>
Would it help if I connected you with 2-3 recent clients who can vouch for our work?"
</div>
<div class="highlight-box" style="margin-top: 10px; background: rgba(6, 182, 212, 0.1); border-color: #06B6D4;">
<strong>Response C (Detailed &mdash; With Guarantee Frame):</strong><br>
"I am truly sorry about that experience. Let me tell you exactly how we prevent that from happening:<br><br>
1. You see a complete preview before anything goes live &mdash; if you are not happy, we fix it<br>
2. We send daily progress updates with screenshots so you always know where things stand<br>
3. All work is done on a password-protected preview link you can check anytime<br>
4. We have a 30-day support guarantee after launch<br>
5. Our 4.9-star rating across 2,000+ projects is our reputation &mdash; we cannot afford to let anyone down<br><br>
Essentially, you do not pay until you see the preview, and you do not go live until you approve everything. Zero risk on your end. Does that address your concern?"
</div>
<p><strong>Follow-up question:</strong> "What specifically went wrong with the last developer? I want to make sure we avoid exactly that."</p>
</div>

<!-- PRICE OBJECTION DEEP DIVE -->
<div class="content-section">
<h3>📊 Price Objection Deep Dive (The Most Common Objection)</h3>
<p>"Too expensive" is the #1 objection you will face. It can mean three completely different things, and each requires a different approach:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Type</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>They Say</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Real Meaning</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Solution</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Budget Issue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I only have $700"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They want to buy but literally cannot afford it</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope reduction, MVP package, or payment plan</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Value Issue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Why so much for a website?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They do not understand the value or ROI</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show ROI calculation, portfolio proof, success stories</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Comparison Issue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"X charges less"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They found a cheaper alternative and want you to match it</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Highlight differentiators, do not trash competitors</td>
</tr>
</table>

<div class="highlight-box" style="margin-top: 15px;">
<strong>The ROI Calculator Script:</strong><br>
"Let me put this in simple numbers. If your store generates just $5,000 per month in revenue (which is conservative for a well-built Shopify store), here is the math:<br><br>
- Year 1 revenue: $60,000<br>
- Your investment: $1,200<br>
- <strong>ROI: 50x in year one</strong><br><br>
Even if the store only generates $1,000/month, your ROI is still 10x. The store is not a cost &mdash; it is a revenue-generating asset that keeps working for you 24/7."
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>The Payment Plan Option:</strong><br>
"If the total amount is a concern, we can explore a split payment: 50% now to start, 50% before launch. This reduces the upfront commitment while still allowing us to prioritize your project. Would that help?"
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>The Alternative Comparison:</strong><br>
"Let me put our pricing in context:<br>
- US agency: $8,000-$20,000 for similar scope<br>
- Freelancer at $50/hr x 100 hours: $5,000 with unpredictable quality<br>
- DIY: 80-100 hours of YOUR time (what is your hourly rate?)<br>
- Our Premium package: $1,200 with proven 4.9-star quality and 30 days support<br><br>
We are not the cheapest option and we are not the most expensive. We are the best value."
</div>
</div>

<!-- OBJECTION PREVENTION -->
<div class="content-section">
<h3>💡 Objection Prevention: The Inoculation Technique</h3>
<p>The best objection handling is <strong>preventing objections before they come up</strong>. This is called "inoculation" &mdash; like a vaccine that prevents the disease.</p>
<div class="highlight-box">
<strong>How it works:</strong> Bring up the common concern yourself, BEFORE the client raises it. By addressing it proactively, you defuse it before it becomes a wall.<br><br>
<strong>Price inoculation:</strong><br>
"You might be wondering about the investment. Let me share why our clients find it pays for itself: on average, our stores see 20-40% conversion improvements. At 100 orders per month, that means $2,000-4,000 in extra revenue in month one alone."<br><br>
<strong>Trust inoculation:</strong><br>
"I know trust is huge when you are working with someone online. That is why we work through [platform], have 2,000+ stores with a 4.9-star rating, and send daily progress updates so you always know exactly where your project stands."<br><br>
<strong>Timeline inoculation:</strong><br>
"I want to be transparent about timeline &mdash; we deliver in 14 business days. We could rush it faster, but quality matters more than speed. That said, if you have a specific deadline, let me know and we will plan accordingly."
</div>
<p>By bringing up the concern yourself, the client thinks: "Oh, they already addressed that. They must be confident about it." It builds trust and removes barriers.</p>
</div>

<!-- FEEL FELT FOUND -->
<div class="content-section">
<h3>🎯 The Feel-Felt-Found Framework</h3>
<p>This is the classic objection handling structure that works in any situation:</p>
<div class="highlight-box">
<strong>"I understand how you FEEL."</strong> (Empathy &mdash; show you hear them)<br><br>
<strong>"Other clients FELT the same way."</strong> (Normalize &mdash; they are not alone)<br><br>
<strong>"What they FOUND was..."</strong> (Resolution &mdash; give them the outcome)
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>Example for Price Objection:</strong><br>
"I understand how you feel about the investment. Other clients felt the same way initially. What they found was that the store paid for itself in 60-90 days through increased conversions &mdash; and they wished they had started sooner."
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>Example for Trust Objection:</strong><br>
"I understand how you feel about working with someone online &mdash; trust is everything. Other clients felt the same hesitation. What they found was that after seeing their first progress update within 24 hours of starting, all those concerns disappeared."
</div>
</div>

<!-- SCOPE REDUCTION -->
<div class="content-section">
<h3>🛡️ The Scope Reduction Technique</h3>
<div class="warning-box">
<h4>⚠️ NEVER lower price for the same work. Reduce SCOPE instead.</h4>
<p>This is a non-negotiable rule. If you discount your price without changing the scope, you are telling the client your work was overpriced. It destroys your credibility and sets a precedent for future negotiations.</p>
</div>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Okay, I can do it for $900 instead of $1,200" (same scope, lower price)</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"For $900, we can do 3 pages instead of 5, and 15 products instead of 25. You can always expand later as revenue comes in."</td>
</tr>
</table>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Full Package ($1,500)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>MVP Package ($800)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-page custom design</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-page starter design</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50 products uploaded</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15 products uploaded</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom theme development</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Premium theme customization</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">60-day support</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14-day support</td>
</tr>
</table>
<div class="highlight-box">
<strong>Script:</strong> "If budget is the constraint, I can create an MVP version that gets you launched quickly. We start with the essentials and can always add more features later when revenue comes in. Sound fair?"
</div>
</div>

<!-- THE TURNAROUND TABLE -->
<div class="content-section">
<h3>⚡ The Turnaround Table &mdash; Quick Reference</h3>
<p>Keep this table bookmarked. When you hear any of these objections, you have an instant response ready:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Objection</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Quick Response</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Follow-Up Question</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Too expensive"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What budget did you have in mind? Let me find the right fit."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Which features matter most to you?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Need to think"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Absolutely! What specifically are you weighing?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"When should I follow up?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Found cheaper"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What is included in their quote? Let me compare apples to apples."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What matters most to you in choosing?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I can DIY it"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How much is your time worth per hour? DIY takes 80-100 hours."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What is your biggest concern about hiring someone?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Not ready yet"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What needs to happen before you are ready?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can we start planning now so you are ready to launch sooner?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Been burned before"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I am sorry to hear that. Want to speak with recent clients?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What specifically went wrong last time?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Pay after delivery?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You see a full preview before going live. Zero risk."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Does seeing a preview before launch address your concern?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Need faster delivery"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Rush is possible with 30% premium. Or we phase the launch."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What is your hard deadline?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can you do it for free as a test?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We do not work for free, but you can see our 2,000+ portfolio."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">(Consider disqualifying this lead)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"My friend can build it"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can they guarantee 2-4% conversion rates and ongoing support?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What happens if something goes wrong after launch?"</td>
</tr>
</table>
</div>

<!-- WHEN TO WALK AWAY -->
<div class="content-section">
<h3>🚪 When to Walk Away</h3>
<p>Not every lead deserves your time. Some leads are red flags that will cost you more than they are worth. Knowing when to walk away is just as important as knowing how to close.</p>
<div class="warning-box">
<h4>⚠️ Walk Away When You See These Red Flags:</h4>
<ul>
<li><strong>"Can you do it for free as a test?"</strong> &mdash; This person does not value your work and never will. Politely decline and move on.</li>
<li><strong>They disrespect your time or pricing</strong> &mdash; "Your prices are ridiculous" or consistently rude messages. Do not work with disrespectful clients.</li>
<li><strong>They want unlimited revisions for minimal pay</strong> &mdash; If they are already negotiating unlimited changes before the project starts, it will only get worse.</li>
<li><strong>Their budget is less than 50% of your minimum</strong> &mdash; If your cheapest package is $800 and they have $200, no amount of scope reduction will work.</li>
<li><strong>They refuse to answer qualification questions</strong> &mdash; If they will not tell you their budget, timeline, or needs, they are not serious buyers.</li>
<li><strong>They keep comparing you to the cheapest option</strong> &mdash; "But I can get it for $100 on Fiverr..." These clients are looking for cheap, not quality. Let them go.</li>
</ul>
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>How to Walk Away with Class:</strong><br>
"I appreciate your interest, but based on what you have described, I do not think we are the right fit for this project. I want to make sure you find someone whose pricing and approach aligns with your needs. I wish you the best of luck with your store!"<br><br>
<em>Walking away with professionalism maintains your authority and sometimes actually brings them back at your full price later.</em>
</div>
</div>

<!-- VIDEOS SECTION -->
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
<li>Conviction x Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts &mdash; reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>

<!-- PRACTICE EXERCISE -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
<h3 style="color: #34D399; margin-top: 0;">🔧 Practice Exercise</h3>
<p>Complete these exercises to master objection handling:</p>
<ol>
<li><strong>Role-play: Handle each of the 6 core objections out loud.</strong> Say the client objection, then respond with the A.C.E. framework. Record yourself and listen back. Do you sound confident? Empathetic? Knowledgeable?</li>
<li><strong>Write personalized responses for 3 objections using a skincare brand scenario:</strong>
<ul>
<li>The skincare brand owner says: "Your price is too high &mdash; I found someone for $400."</li>
<li>They say: "I need to discuss this with my business partner first."</li>
<li>They say: "I tried Shopify before and it did not work. How is this different?"</li>
</ul>
</li>
<li><strong>Create your own "Objection Cheat Sheet"</strong> &mdash; Write a one-liner response for each of the 10 objections in the Turnaround Table above. Keep it in your notes so you can reference it quickly during live conversations.</li>
<li><strong>Practice the scope reduction conversation:</strong> A client loves your $1,500 package but can only spend $900. Write out the conversation where you reduce scope without reducing your value or quality.</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You have learned to handle every major objection with confidence and class. Prove it.</p>
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
<h3>🧠 The Science of Closing</h3>
<p>Here is a statistic that should shock you: <strong>63% of all sales conversations end without the salesperson ever asking for the sale.</strong> Not because the prospect said no. Not because the product was wrong. Simply because the salesperson never asked.</p>

<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3)); border: none; text-align: center; padding: 25px;">
<div style="font-size: 1.3em; font-weight: 700;">"The close is not a single moment — it's the natural conclusion of a well-handled conversation."</div>
</div>

<p style="margin-top: 15px;"><strong>Why do salespeople fear asking?</strong></p>
<ul>
<li><strong>Fear of rejection:</strong> They take "no" personally. But "no" means "not yet" or "not like this" — it does not mean "never" and it does not mean you are a failure.</li>
<li><strong>Fear of being pushy:</strong> They confuse helping someone make a decision with pressuring them. If your product solves their problem and you have qualified them properly, NOT asking is actually doing them a disservice.</li>
<li><strong>Fear of losing the relationship:</strong> They enjoy the rapport so much they avoid the "awkward" money conversation. But a prospect who never becomes a client is not a relationship — it is a pen pal.</li>
<li><strong>Lack of a system:</strong> They do not have a reliable closing framework, so they wing it, fumble, and default to "let me know if you have questions."</li>
</ul>

<div class="warning-box">
<strong>Let us be crystal clear:</strong> Closing is NOT manipulation. Closing is helping people who have a real problem make a decision to solve it. If you have qualified them (M.T.N.D.), handled objections honestly, and demonstrated genuine value — the close is the most helpful thing you can do. You are not taking their money. You are exchanging their money for something worth more to them than the money itself.
</div>

<p>If you have done everything right up to this point — qualified properly, handled objections, and demonstrated value — closing feels easy, not pushy. Think of it this way: a doctor who diagnoses an illness and then never prescribes treatment is not being "polite." They are being negligent. The same applies to sales.</p>
</div>

<div class="content-section">
<h3>🛠️ The 10 Core Closing Techniques</h3>
<p>Master these 10 techniques and you will be able to close in any situation. Each one has a specific use case. The key is knowing WHEN to deploy each one.</p>

<h4>1. The Assumptive Close</h4>
<p><strong>What it is:</strong> Skip "do you want to buy?" — instead, ask about logistics as if the decision is already made.</p>
<p><strong>When to use it:</strong> When the prospect has shown clear buying signals — they are asking about timelines, specific features, or how the process works. They have mentally decided; they just need you to move them forward.</p>
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
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"Great, so based on everything we have discussed, the Premium package at $1,200 covers exactly what you need — the custom 5-page design, speed optimization, SEO, and 30 days of support. I have an opening on Monday and another on Wednesday. Which works better for your timeline?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Using it too early before the prospect has shown buying signals — comes across as presumptuous</li>
<li>Phrasing it as a yes/no question instead of an either/or — "Can we start Monday?" is weaker than "Monday or Wednesday?"</li>
<li>Backing down if they hesitate — hold your ground and wait for their response</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Write down 5 different assumptive close phrases for these scenarios: (1) Scheduling a start date, (2) Choosing a package, (3) Confirming payment method, (4) Deciding on features, (5) Setting a delivery date. Practice saying each one out loud until it sounds natural.
</div>

<h4>2. The Price Sandwich</h4>
<p><strong>What it is:</strong> Never say the price alone. Always wrap it between layers of value — features before, benefits after.</p>
<p><strong>When to use it:</strong> Every single time you present pricing. There is no exception. A naked price triggers the brain's pain center. A sandwiched price feels justified.</p>
<div class="highlight-box">
"For a complete 5-page custom store with speed optimization, SEO setup, mobile-first design, and 30 days of support — <strong>$1,200</strong>. That includes unlimited revisions during the build, a full training walkthrough so you can manage your store independently, and our conversion-focused design approach that our clients report increases their sales by 20-40%."
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"So here is what you are getting with the Premium package. We build you a fully custom 5-page Shopify store — homepage, collection page, product pages, about page, and contact page. Every page is designed mobile-first because 70% of your customers will be shopping on their phones. We include speed optimization to keep load times under 3 seconds, full SEO setup so Google can find you, and 30 days of priority support after launch. The investment is $1,200. And that comes with unlimited revisions during the design phase plus a one-on-one training session so you are never dependent on a developer for day-to-day changes. Most of our clients launch within 14 days and start seeing orders within the first week."
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Saying the price first — "It is $1,200 for a store" gives them nothing to anchor the value to</li>
<li>Rushing through features — slow down and let each feature register</li>
<li>Apologizing for the price — never say "I know it is expensive but..." That frames your price as a problem</li>
<li>Listing features without translating to benefits — "SEO setup" means nothing to most clients. "Google can find your store" does.</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Take each package tier (MVP, Premium, Enterprise) and write a complete Price Sandwich script. Time yourself — aim for 30-45 seconds of smooth delivery per package. Record yourself and listen back.
</div>

<h4>3. The Options Close</h4>
<p><strong>What it is:</strong> Give 2-3 choices. This shifts the mental frame from "should I buy?" to "which should I buy?"</p>
<p><strong>When to use it:</strong> When you know they want to move forward but need help deciding on the scope. Also excellent for clients who feel overwhelmed by a single big price.</p>
<div class="highlight-box">
"We have Premium at $1,200 or Enterprise at $1,800. Premium gives you everything you need to launch strong. Enterprise adds advanced features like custom functionality and 90 days of support. Which fits your goals better?"
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"Based on what you have told me about your brand and your goals, I think two options make the most sense for you. Option one is the Premium package at $1,200 — it gives you the full custom store, speed optimization, SEO, and 30 days of support. That is perfect for launching and getting your first sales rolling. Option two is the Enterprise package at $1,800 — it includes everything in Premium plus custom functionality like advanced filtering, loyalty programs, or whatever specific features you need, plus 90 days of extended support. Which one feels right for where you are right now?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Offering too many options (4+) — causes decision paralysis</li>
<li>Making one option obviously bad — the prospect feels manipulated</li>
<li>Not clearly differentiating the options — they need to understand WHY one costs more</li>
<li>Forgetting to ask the closing question after presenting — you must end with "Which fits your goals?"</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Create an Options Close presentation for three different client types: (1) A budget-conscious startup, (2) A growing brand ready to invest, (3) An enterprise client with complex needs. Present each one to a colleague and get feedback.
</div>

<h4>4. The Good-Better-Best</h4>
<p><strong>What it is:</strong> Present 3 tiers. Psychological research shows most people choose the middle option — it feels "safe."</p>
<p><strong>When to use it:</strong> When you want to anchor the client to the middle tier. The top tier makes the middle look reasonable. The bottom tier makes the middle look like the smart choice.</p>
<div class="highlight-box">
"We have three options. MVP at $800 — that is a clean, functional store to get you started. Premium at $1,200 — that is the full package with everything you need to launch and grow. Or Enterprise at $1,800 — that is our white-glove experience with custom features and 90-day support. Most of our clients go with Premium — it hits the sweet spot of value and investment."
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"I have put together three options based on our conversation. Let me walk you through each one so you can decide what makes sense.<br><br>
Option A is the MVP at $800. This gives you a solid 3-page store — homepage, product page, and contact page — with up to 15 products, basic speed optimization, and 14 days of support. It is perfect if you want to test the market first before going all in.<br><br>
Option B is Premium at $1,200. This is our most popular package. You get a full 5-page custom store, up to 50 products, advanced speed optimization, full SEO setup, mobile-first design, unlimited revisions, and 30 days of priority support. This is what I recommend for brands that are serious about launching right.<br><br>
Option C is Enterprise at $1,800. Everything in Premium plus unlimited products, custom functionality like advanced filtering or loyalty programs, 90 days of extended support, and priority scheduling. This is for brands that need something more complex or want the extra peace of mind.<br><br>
Most of our clients go with Premium — it covers everything you need without over-investing. But I want you to pick whichever feels right. Which one resonates with you?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Making the bottom tier too attractive — everyone picks the cheapest</li>
<li>Making the top tier too expensive — it looks fake and damages trust</li>
<li>Not recommending the middle tier — your recommendation gives them permission to choose it</li>
<li>Skipping the walkthrough — do not just list prices. Explain what each tier delivers.</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Present the Good-Better-Best framework to a friend or family member (about any topic — even restaurants or phone plans). Watch how they gravitate to the middle. Practice your delivery until recommending the middle option sounds natural, not scripted.
</div>

<h4>5. The Upfront Contract</h4>
<p><strong>What it is:</strong> Set expectations at the START of the conversation so the close feels natural.</p>
<p><strong>When to use it:</strong> At the very beginning of every sales conversation. It removes the awkwardness of transitioning to the close later because both parties already agreed to the framework.</p>
<div class="highlight-box">
"By the end of our chat, we'll know if we're a good fit. If yes, I'll share next steps and pricing. If not, no pressure at all. Sound fair?"
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"Before we dive in, I want to set expectations so we are both on the same page. I am going to ask you some questions about your business and what you are looking for. Then I will share some ideas on how we can help. By the end of our conversation, one of two things will happen — either we will both feel like this is a great fit and I will share next steps and pricing with you, or we will realize it is not the right match and that is perfectly okay too. No pressure either way. Does that sound fair?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Forgetting to do it — this technique only works at the START, not retroactively</li>
<li>Making it too formal or stiff — keep it conversational</li>
<li>Not getting their verbal agreement — you need them to say "yes, sounds fair"</li>
<li>Breaking the contract yourself by being pushy later</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Open your next 5 conversations (even personal ones) with an upfront contract variation. Notice how it changes the dynamic of the entire interaction when both parties agree to the rules upfront.
</div>

<h4>6. The Delay Close</h4>
<p><strong>What it is:</strong> If they need time, book a SPECIFIC follow-up. Never leave the next step vague.</p>
<p><strong>When to use it:</strong> When the prospect says "I need to think about it" or "let me check with my partner" and you have already tried to uncover the real objection. Sometimes people genuinely need time — the key is locking down a specific follow-up.</p>
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
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"I totally understand wanting to take some time. This is an important decision for your business and I want you to feel 100% confident. Let me do this — I will put together a quick summary of everything we discussed so you have it in writing. And let us lock in a time to reconnect. Would Thursday afternoon or Friday morning work better for a quick follow-up? That way I can also hold your slot in our schedule while you decide."
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Accepting "I will get back to you" without a specific date — 80% of these never return</li>
<li>Being too aggressive about following up — there is a line between persistent and pestering</li>
<li>Not sending a recap after the conversation — they forget details and talk themselves out of it</li>
<li>Not creating any urgency around the follow-up — "I can hold your slot" gives them a reason to commit to a date</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> The next time someone tells you "let me think about it" in any context, practice booking a specific follow-up time instead of leaving it open. Track how many actually follow through versus open-ended delays.
</div>

<h4>7. The Takeaway Close</h4>
<p><strong>What it is:</strong> Gently remove the option. Creates scarcity and reverses the dynamic — now THEY are pursuing YOU.</p>
<p><strong>When to use it:</strong> When a qualified prospect is dragging their feet, when you sense they are using you for free information, or when they need a push to commit. Works best with prospects who have shown genuine interest but cannot seem to pull the trigger.</p>
<div class="highlight-box">
"Actually, looking at your timeline and requirements, I'm not sure we're the right fit. We typically work with brands ready to invest $1,500+ and move fast..."<br><br>
--> Often triggers: "Wait, I AM ready!"
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"You know what, I want to be honest with you. Based on what you have described — the timeline, the budget, and the scope — I am not sure we are the best fit for your project right now. We specialize in premium builds for brands that are ready to invest in quality and move forward quickly. If you are still in the early exploration phase, that is totally fine — but I would not want to rush you into something you are not ready for. Maybe it makes sense to reconnect in a month or two when you have a clearer picture?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Using it with cold leads who will just say "okay, bye" — this is for warm-to-hot leads only</li>
<li>Sounding arrogant instead of genuine — the tone must be helpful, not dismissive</li>
<li>Not being prepared for them to actually walk away — sometimes they will, and that is okay</li>
<li>Overusing it — if you use it in every conversation, it loses its power</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Role-play with a colleague: they play a prospect who keeps saying "I need to think about it." Practice the Takeaway Close 3 times with different wording until you find a version that feels authentic to your personality.
</div>

<h4>8. The "If I Could, Would You" Close</h4>
<p><strong>What it is:</strong> Test if the stated concern is real or an excuse. This isolates the objection.</p>
<p><strong>When to use it:</strong> When a prospect gives you a specific objection (price, timeline, features) and you want to confirm it is their ONLY concern before solving it.</p>
<div class="highlight-box">
"If I could get delivery by Friday instead of Monday, would you be ready to move forward today?"<br><br>
--> If yes, you know the real concern. If no, there's a hidden objection.
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"I hear you — the timeline is important for your launch date. Let me ask you this: if I could guarantee delivery by Friday instead of the standard Monday timeline, would you be comfortable moving forward today? ... [If yes:] Great, let me see what I can do on our end. We can prioritize your project for a $200 rush fee. [If no:] Okay, so the timeline is not the only concern. What else is holding you back? I want to make sure we address everything."
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Not following through — if you ask "if I could" and they say yes, you MUST deliver on it</li>
<li>Using it for unreasonable requests — do not promise things you cannot control</li>
<li>Ignoring the "no" path — when they say "no, that is not the only issue," you MUST dig deeper</li>
<li>Asking multiple "if I could" questions in a row — one at a time</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> List the 5 most common objections you hear. For each one, write an "If I Could, Would You" question. Then prepare for both the "yes" path and the "no" path.
</div>

<h4>9. The Summary Close</h4>
<p><strong>What it is:</strong> Recap all value before asking for the close. This reminds them of everything they are getting.</p>
<p><strong>When to use it:</strong> After a long conversation where many features and benefits have been discussed. The prospect may have forgotten the early points. Summarize everything into a compelling package before asking.</p>
<div class="highlight-box">
"So you're getting: 5-page custom design, speed optimization, SEO setup, mobile-first, 30-day support, and unlimited revisions. Ready to get started?"
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"Let me recap everything so we are both clear on what you are getting. With the Premium package, you get: a fully custom 5-page Shopify store designed specifically for your fashion brand, mobile-first responsive design, speed optimization for fast load times, complete SEO setup so you rank on Google, up to 50 product uploads with variant management, unlimited revisions during the build phase, a one-on-one training walkthrough, and 30 days of priority support after launch. All of that for $1,200 with a 14-day delivery timeline. You mentioned you wanted to launch by the 15th — if we start this week, we will have you live with plenty of time to spare. Want me to send over the invoice so we can get started?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Summarizing too briefly — "So you get a store for $1,200" loses all the value stacking</li>
<li>Forgetting to tie features to THEIR specific needs — "designed specifically for your fashion brand" is powerful</li>
<li>Not ending with a clear call to action — always finish with "Want me to send the invoice?"</li>
<li>Reading from a list mechanically — it should flow naturally like a conversation</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> After your next 3 sales conversations, practice delivering a Summary Close from memory. Time yourself — aim for 45-60 seconds that captures all value points without sounding rushed.
</div>

<h4>10. The Urgency Close</h4>
<p><strong>What it is:</strong> Use REAL scarcity — never fake it. Manufactured urgency destroys trust.</p>
<p><strong>When to use it:</strong> When there is genuine time pressure — limited availability, upcoming price changes, seasonal timing, or the client's own deadlines.</p>
<div class="highlight-box">
<strong>Real urgency examples:</strong>
<ul style="margin-bottom: 0;">
<li>"I have 2 slots left this month before I'm fully booked"</li>
<li>"I can hold this price until Friday"</li>
<li>"We're raising prices next quarter"</li>
<li>"You mentioned wanting to launch before Black Friday — we need to start this week to hit that date"</li>
</ul>
</div>
<p><strong>Full Script:</strong></p>
<div class="highlight-box">
"I want to be transparent with you about timing. Right now I have two openings this month — one starting Monday and one starting next Wednesday. After that, I am booked through the end of the month and the next available slot is three weeks out. You mentioned wanting to be live for your product launch on the 20th, so if we lock in the Monday slot, we have you live with a few days to spare. Shall I reserve that Monday slot for you?"
</div>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Faking scarcity — "This offer expires in 24 hours!" when it does not. Clients see through this and it destroys trust permanently.</li>
<li>Using urgency as the ONLY closing technique — it should complement other techniques, not replace them</li>
<li>Not connecting urgency to THEIR timeline — "I am busy" is about you. "You need to launch by the 20th" is about them.</li>
<li>Panicking if urgency does not work — sometimes the timing just is not right, and that is okay</li>
</ul>
<div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); border-color: #6366F1;">
<strong>Practice Drill:</strong> Track your actual availability each week. Practice phrasing your real schedule constraints as urgency statements. Make it a habit to always know your availability so urgency close opportunities happen naturally.
</div>
</div>

<div class="content-section">
<h3>🚀 Advanced Closing Techniques from the SOP</h3>
<p>These five additional techniques come directly from the Digital Heroes SOP. They are subtle, powerful, and work in specific situations where the core 10 may not be enough.</p>

<h4>11. The Parrot Technique</h4>
<p><strong>What it is:</strong> Repeat their exact words back to them. This shows you are listening, validates their feelings, and encourages them to elaborate.</p>
<p><strong>When to use it:</strong> When a prospect shares a concern or desire. Parroting their words builds rapport and often leads them to clarify their real need — which makes your close more targeted.</p>
<div class="highlight-box">
<strong>Client:</strong> "I really need something that looks professional and makes my brand stand out."<br><br>
<strong>You (Parrot):</strong> "You need something that looks professional and makes your brand stand out?"<br><br>
<strong>Client:</strong> "Yeah, exactly. My current site looks like a template and I am losing credibility..."<br><br>
<strong>You:</strong> "That makes total sense. Professional credibility is exactly what we deliver. Every store we build is 100% custom — no templates, no cookie-cutter designs. Let me show you what we did for a brand similar to yours..."
</div>
<p><strong>Key Rule:</strong> Use their EXACT words. Do not paraphrase. If they say "stand out," you say "stand out" — not "differentiate" or "be unique."</p>

<h4>12. The 10-Second Rule</h4>
<p><strong>What it is:</strong> You should be able to deliver your entire value proposition in 10 seconds or less. If you cannot explain why they should choose you in 10 seconds, your pitch is too complicated.</p>
<p><strong>When to use it:</strong> In the first 30 seconds of any conversation, in follow-up messages, and whenever you need to recapture a wandering conversation.</p>
<div class="highlight-box">
<strong>10-Second Value Prop Examples:</strong><br><br>
"We build premium Shopify stores that are custom-designed, conversion-optimized, and delivered in 14 days — backed by 2,000+ stores and a 4.9-star rating."<br><br>
"We help e-commerce brands launch professional stores that actually convert visitors into buyers — with full support for 30 days after delivery."
</div>
<p><strong>Practice:</strong> Time yourself. If your value prop takes more than 10 seconds to say out loud, cut words until it fits. Every word must earn its place.</p>

<h4>13. The Compliment Opener</h4>
<p><strong>What it is:</strong> Start with a genuine, specific compliment about their business or brand. This lowers their guard and establishes you as someone who pays attention.</p>
<p><strong>When to use it:</strong> At the opening of your first interaction, especially with prospects who seem guarded or skeptical.</p>
<div class="highlight-box">
<strong>Examples:</strong><br><br>
"I checked out your Instagram before our call — your product photography is incredible. The lifestyle shots with the natural lighting really stand out. Your store should match that level of quality."<br><br>
"I saw your Etsy shop has 500+ reviews and a 4.8 rating — that is impressive. You have clearly built something people love. A Shopify store would give you full control over that customer experience."
</div>
<p><strong>Key Rule:</strong> The compliment MUST be specific and genuine. Generic praise like "nice business" feels hollow. Research them for 2 minutes before the conversation.</p>

<h4>14. The Negative Close / Takeaway</h4>
<p><strong>What it is:</strong> Disqualify YOURSELF first. Tell them why they might NOT want to work with you. This reverses the sales dynamic — instead of you chasing them, they are convincing you.</p>
<p><strong>When to use it:</strong> With price-sensitive prospects, when you sense hesitation, or when you want to position yourself as a premium option that not everyone qualifies for.</p>
<div class="highlight-box">
"Honestly, we are not the cheapest option out there — not even close. We are a premium service and our prices reflect that. If budget is the primary concern and you are looking for the lowest price, we are probably not the right fit. But if you want a store that is actually built to convert and backed by real support... that is exactly what we do."
</div>
<p><strong>Why it works:</strong> People want what they cannot have. When you suggest they might not qualify, their natural instinct is to prove they DO qualify. This also filters out price-shoppers who would have been problem clients anyway.</p>

<h4>15. The Hypothetical Future</h4>
<p><strong>What it is:</strong> Use "when" instead of "if." This presupposes the sale and paints a picture of their future success.</p>
<p><strong>When to use it:</strong> Throughout the conversation to build positive momentum, and especially right before the close.</p>
<div class="highlight-box">
<strong>Instead of:</strong> "If you decide to go with us, we would build you a custom store."<br><br>
<strong>Say:</strong> "When we build your store, the first thing your customers will notice is how fast it loads and how professional it looks. When you launch and start getting orders in that first week, you will see exactly why our clients stick with us."
</div>
<p><strong>Key Rule:</strong> "When" is confident. "If" is uncertain. Confident language creates confident decisions. Replace every "if" with "when" in your sales vocabulary.</p>
</div>

<div class="content-section">
<h3>💰 Negotiation and Pricing Mastery</h3>
<p>Pricing conversations are where most salespeople lose. They panic, discount too fast, or avoid the topic altogether. This section gives you a complete framework for handling every pricing situation with confidence.</p>

<h4>Good-Better-Best Pricing Presentation</h4>
<p>This is your default pricing structure. Always present 3 tiers.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Feature</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>MVP ($800)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Premium ($1,200)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Enterprise ($1,800)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pages</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3 pages</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 pages</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8+ pages</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Up to 15</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Up to 50</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom Design</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Basic custom</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full custom</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full custom + custom features</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Optimization</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Basic</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Advanced</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Advanced</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Setup</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Basic</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full + advanced</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Support</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90 days</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video guide</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-on-1 session</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2 sessions + ongoing</td>
</tr>
</table>

<h4>"That is My Best Price" Close with Silence</h4>
<p>When a client pushes hard for a discount after you have already presented fair pricing:</p>
<div class="highlight-box">
<strong>You:</strong> "I hear you. I want to work something out. The $1,200 price already reflects the best value I can offer for this scope of work. This is my best price."<br><br>
<strong>Then: SILENCE.</strong> Do not say another word. Wait. The first person to speak after a price statement loses leverage. Count to 10 in your head if you have to. Let them process. They will either accept, counter, or reveal their real concern.
</div>
<div class="warning-box">
<strong>The Silence Rule:</strong> After stating your price, STOP TALKING. Do not justify. Do not apologize. Do not fill the silence with "but if that is too much..." The silence creates space for them to process and respond. 90% of the time, they will accept or negotiate reasonably.
</div>

<h4>The Trade-Off Negotiation</h4>
<p>Never reduce price without reducing scope. This is the Golden Rule of Digital Heroes pricing.</p>
<div class="highlight-box">
<strong>Client:</strong> "Can you do it for $500 less?"<br><br>
<strong>You:</strong> "I want to make this work for your budget. Here is what I can do — if we reduce the scope to 3 pages instead of 5 and adjust support from 30 days to 14 days, I can bring it down to $700. That gives you a solid launch platform, and you can always add more pages later. Would that work?"
</div>
<p><strong>Key Principle:</strong> Every dollar removed from the price must be matched by removing a deliverable. This protects your margins AND trains clients to value your work properly.</p>

<h4>The Payment Plan Option</h4>
<p>For qualified leads who genuinely want premium service but have cash flow constraints:</p>
<div class="highlight-box">
<strong>You:</strong> "I understand budget timing can be tricky, especially when you are investing in your business. We do offer a payment option on select packages — you can split it into two payments: $600 upfront to get started and $600 before delivery. That way you are not putting it all on one month. Would that make it easier to move forward?"
</div>
<p><strong>Important:</strong> Only offer payment plans to GREEN FLAG leads who have passed M.T.N.D. qualification. Never offer payment plans to price-shoppers or leads with multiple red flags.</p>

<h4>The Rush Fee Framework</h4>
<p>When clients need faster delivery than standard 14 days:</p>
<div class="highlight-box">
<strong>Rush Fee Structure:</strong>
<ul style="margin-bottom: 0;">
<li>Standard delivery (14 days): Base price</li>
<li>Priority delivery (10 days): +10% rush fee</li>
<li>Express delivery (7 days): +20% rush fee</li>
<li>Emergency delivery (5 days): +30% rush fee (subject to availability)</li>
</ul>
</div>
<div class="highlight-box">
<strong>Script:</strong> "We can absolutely prioritize your project. For a 7-day turnaround instead of the standard 14 days, there is a 20% priority fee — that brings the Premium package to $1,440. That covers the overtime our design and development team puts in to get you live faster. Want me to check if we have a priority slot available this week?"
</div>

<h4>The Long-Term Value Frame</h4>
<p>When $1,200 sounds like a lot, break it down to show the real daily cost:</p>
<div class="highlight-box">
"Think about it this way — $1,200 spread over 3 years is about $1.10 per day. That is less than a cup of coffee for a professional store that is bringing in revenue 24/7. Most of our clients make back their investment within the first month of orders. It is not an expense — it is the foundation of your online business."
</div>

<h4>The Bundle Discount</h4>
<p>For clients who need multiple services:</p>
<div class="highlight-box">
"Since you need the store build AND the marketing setup, here is what I can do — individually those would be $1,200 and $500, so $1,700 total. If we bundle them together, I can do $1,500. You save $200 and we handle everything as one cohesive project. That way your marketing is designed to match your store from day one."
</div>

<h4>The Referral Offer</h4>
<p>Use after closing to generate future business at zero acquisition cost:</p>
<div class="highlight-box">
"One more thing — we have a referral program. If you send us someone who becomes a client, you get $100 credit toward any future service — maintenance, redesign, marketing, whatever you need. Just have them mention your name when they reach out."
</div>
</div>

<div class="content-section">
<h3>🔄 The Close Sequence — Combining Techniques</h3>
<p>Individual closing techniques are powerful. Combining them in the right sequence is unstoppable. Here is the optimal close sequence:</p>

<div class="mermaid">
graph LR
    A[Summary Close] --> B[Options Close]
    B --> C[Assumptive Close]
    C --> D[Silence]
    D --> E{Response?}
    E -->|Yes| F[Stop Selling!]
    E -->|Objection| G[Handle + Re-Close]
    E -->|Need Time| H[Delay Close]
</div>

<h4>Full Conversation Flow: Qualification to Close</h4>
<p>Here is a complete example showing how a real conversation flows from first contact to close:</p>

<div class="highlight-box">
<strong>PHASE 1: Opening (Upfront Contract)</strong><br>
"Hi Sarah! Thanks for reaching out about your skincare brand. Before we dive in, let me set expectations — I will ask you a few questions about your business to make sure we can actually help. By the end of our chat, we will either know this is a great fit and I will share options and pricing, or we will realize it is not the right match. No pressure either way. Sound good?"<br><br>

<strong>PHASE 2: Qualification (M.T.N.D.)</strong><br>
"Great! So tell me about your skincare line — how many products are you launching with? ... And what is your timeline looking like — when do you need to be live? ... Have you worked with a developer before? ... And are you the one making the final call on this, or is there a business partner involved?"<br><br>

<strong>PHASE 3: Value Building (Compliment + Parrot)</strong><br>
"I checked out your Instagram before our chat — the product photography is stunning. You clearly have a premium brand. (Compliment) ... You mentioned you want something that 'matches the quality of your products' (Parrot) — that is exactly what we do. Let me show you a skincare brand we built last month..."<br><br>

<strong>PHASE 4: Presentation (Good-Better-Best + Price Sandwich)</strong><br>
"Based on everything you have told me, I have three options. [Present MVP, Premium, Enterprise with full Price Sandwich on each]. Most of our skincare clients go with Premium — it gives you everything you need for a strong launch."<br><br>

<strong>PHASE 5: Close (Summary + Assumptive + Silence)</strong><br>
"So to recap — you are getting a custom 5-page store designed specifically for your skincare brand, mobile-first, speed-optimized, full SEO, 30-day support, and unlimited revisions. $1,200 with delivery in 14 days. I have a slot opening on Monday. Want me to send the invoice so we can lock that in?"<br><br>
[SILENCE — wait for response]
</div>
</div>

<div class="content-section">
<h3>⚠️ After They Say YES — The Critical 60 Seconds</h3>
<div class="warning-box">
<strong>STOP SELLING IMMEDIATELY.</strong><br><br>
This is the single biggest mistake new salespeople make. The deal is done. Every additional word you say risks un-selling them. Do NOT explain why they made a good decision. Do NOT offer more discounts. Do NOT mention extra features they are not getting. They said yes. The conversation is over.
</div>

<h4>What to Say in the First 60 Seconds After "Yes"</h4>
<div class="highlight-box">
<strong>Step 1 (0-10 seconds):</strong> "Awesome, Sarah! Great choice. You are going to love your new store."<br><br>
<strong>Step 2 (10-20 seconds):</strong> "I am sending over the invoice right now. You will see it in your inbox within the next 5 minutes."<br><br>
<strong>Step 3 (20-40 seconds):</strong> "Once payment is confirmed, our design team starts within 24 hours. I will send you a welcome email with everything you need to know — what we need from you, the timeline, and your dedicated point of contact."<br><br>
<strong>Step 4 (40-60 seconds):</strong> "Any last questions before I get everything set up on our end? ... Perfect. Welcome aboard! Talk soon."
</div>

<h4>The Invoice Workflow (Step by Step)</h4>
<ol>
<li><strong>Within 5 minutes of "yes":</strong> Generate and send invoice via your platform (Fiverr order, PayPal invoice, or Stripe link)</li>
<li><strong>Include in the invoice:</strong> Client name, package name, itemized features, total amount, payment terms</li>
<li><strong>Follow up if not paid within 2 hours:</strong> "Just checking — did the invoice come through okay? Let me know if you need me to resend."</li>
<li><strong>Once paid:</strong> Send confirmation message and welcome/onboarding email</li>
</ol>

<h4>The Onboarding Email Template</h4>
<div class="highlight-box">
<strong>Subject: Welcome to Digital Heroes! Here is what happens next</strong><br><br>
Hi [Name],<br><br>
Welcome aboard! We are excited to build your [niche] store. Here is everything you need to know:<br><br>
<strong>What we need from you:</strong><br>
- Your logo files (PNG or SVG preferred)<br>
- Brand colors (hex codes if you have them)<br>
- Product images and descriptions<br>
- Any reference sites you like the look of<br>
- Your Shopify account login (we will send setup instructions if you do not have one yet)<br><br>
<strong>Timeline:</strong><br>
- Design mockup: 5-7 days<br>
- Revisions and build: 5-7 days<br>
- Total delivery: ~14 days from receiving your assets<br><br>
<strong>Communication:</strong><br>
- Your project manager is [Name]<br>
- Updates every 3-4 days during the build<br>
- Unlimited revisions during the design phase<br><br>
Looking forward to creating something amazing for you!<br>
Best, [Your Name] | Digital Heroes
</div>
</div>

<div class="content-section">
<h3>📊 Closing Metrics — Track Your Numbers</h3>
<p>What gets measured gets improved. Track these metrics weekly to identify where you are strong and where you need work.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Target</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>How to Track</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Close Rate (qualified leads)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30%+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Closed deals / Qualified leads presented to</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Close Rate by Technique</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Varies</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Log which technique you used for each close</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Average Deal Size</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$1,200+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Total revenue / Number of deals</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to Close</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 48 hours</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First contact to payment received</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Follow-Up Conversion</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deals closed on follow-up vs first call</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Discount Rate</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 5%</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deals with scope reduction / Total deals</td>
</tr>
</table>

<h4>Weekly Pipeline Review Template</h4>
<div class="highlight-box">
<strong>Every Friday, review:</strong>
<ul style="margin-bottom: 0;">
<li><strong>New leads this week:</strong> How many? From which channels?</li>
<li><strong>Qualified leads:</strong> How many passed M.T.N.D.?</li>
<li><strong>Proposals sent:</strong> How many received pricing?</li>
<li><strong>Closes this week:</strong> How many? Total revenue?</li>
<li><strong>Lost deals:</strong> Why? What objection? What technique failed?</li>
<li><strong>Follow-ups due next week:</strong> Who needs a follow-up?</li>
<li><strong>Technique analysis:</strong> Which techniques worked best this week?</li>
<li><strong>Lesson learned:</strong> One thing to improve next week</li>
</ul>
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
<li>Conviction x Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎭 Practice Exercises</h3>

<h4>Exercise 1: Role-Play Scenarios</h4>
<p>Practice each scenario with a partner. One person plays the client, the other plays the salesperson. Switch roles after each round.</p>

<p><strong>Scenario A — The Price Shopper:</strong> Client wants a Shopify store for a candle brand. They have gotten quotes from 3 other developers ($200, $400, $600). They ask you: "Why should I pay $1,200 when I can get the same thing for $400?" Use: Price Sandwich + Contrast Principle + Options Close.</p>

<p><strong>Scenario B — The Hesitant Entrepreneur:</strong> First-time business owner launching a jewelry brand. They are excited but scared to invest $1,200 in a store before making their first sale. They say: "What if I build the store and nobody buys?" Use: Pain Calculator + Hypothetical Future + Summary Close.</p>

<p><strong>Scenario C — The Busy Executive:</strong> Owner of a successful brick-and-mortar clothing boutique expanding online. They are interested but "too busy" to make a decision right now. They say: "Can you send me the details and I will look at it when I have time?" Use: Upfront Contract + Delay Close + Urgency Close.</p>

<p><strong>Scenario D — The Comparison Shopper:</strong> E-commerce brand already has a Shopify store built by another developer but is unhappy with the quality. They say: "My current developer built my store for $300. Why should I pay you 4x more to rebuild it?" Use: Parrot Technique + Feel-Felt-Found + If I Could Would You.</p>

<p><strong>Scenario E — The Big Fish:</strong> Marketing agency looking for a white-label Shopify partner for their clients. They have 5 projects per month with budgets of $2,000-$5,000 each. They say: "We need volume pricing since we will be sending consistent work." Use: Bundle Discount + Good-Better-Best + Assumptive Close.</p>

<h4>Exercise 2: Negotiation Simulation</h4>
<p>Client has been quoted $1,800 for Enterprise. They counter with $1,200. Practice the negotiation using these steps:</p>
<ol>
<li>Acknowledge their budget concern (do not dismiss it)</li>
<li>Ask what their target budget actually is</li>
<li>Present a Trade-Off: reduce scope to match budget, OR offer payment plan for full scope</li>
<li>Use "That is my best price" + Silence</li>
<li>Close with Assumptive Close or Delay Close depending on response</li>
</ol>

<h4>Exercise 3: Price Presentation Drill</h4>
<p>Practice presenting each package tier using the Price Sandwich technique. Record yourself and review:</p>
<ul>
<li>Did you lead with value before stating the price?</li>
<li>Did you add benefits after the price?</li>
<li>Did your voice stay confident when stating the number?</li>
<li>Did you pause after the price (silence technique)?</li>
<li>Did you end with a clear call to action?</li>
</ul>
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
<p>You have learned mindset, products, qualification, psychology, objection handling, and closing. Now you combine them all into real scenarios. This is where theory meets reality.</p>
<div class="warning-box">
<strong>This quiz tests EVERYTHING from Tasks 1-8.</strong><br>
You will face realistic scenarios and choose the best response. Review all previous material if needed. These scenarios represent the real conversations you will have every single day on the job.
</div>
</div>

<div class="content-section">
<h3>📊 The Complete Sales Flow</h3>
<div class="highlight-box">
<strong>STAGE 1: FIRST CONTACT</strong>
<ul style="margin-bottom: 10px;">
<li>Respond within 1 hour (ideally 30 min, Fiverr under 5 min)</li>
<li>Use correct template type (General, Price-Focused, Urgent, Comparison)</li>
<li>Ask qualifying questions (M.T.N.D.)</li>
<li>Share relevant portfolio examples in their niche</li>
</ul>

<strong>STAGE 2: QUALIFICATION</strong>
<ul style="margin-bottom: 10px;">
<li>Score using M.T.N.D. (Money, Timeline, Need, Decision-maker)</li>
<li>Identify red flags (2+ = disqualify)</li>
<li>Identify green flags (proceed with confidence)</li>
<li>Proceed or politely disqualify</li>
</ul>

<strong>STAGE 3: PRESENTATION</strong>
<ul style="margin-bottom: 10px;">
<li>Present appropriate package using Good-Better-Best</li>
<li>Use Price Sandwich (value-price-value)</li>
<li>Recommend the middle tier for most clients</li>
<li>Tie features to THEIR specific needs</li>
</ul>

<strong>STAGE 4: OBJECTION HANDLING</strong>
<ul style="margin-bottom: 10px;">
<li>Listen (80/20 rule — they talk 80%)</li>
<li>Identify objection type (price, trust, timing, authority)</li>
<li>Use appropriate framework (A.C.E., Feel-Felt-Found, Scope Reduction)</li>
<li>Never argue — ask curious questions instead</li>
</ul>

<strong>STAGE 5: CLOSING</strong>
<ul style="margin-bottom: 10px;">
<li>Summarize all value (Summary Close)</li>
<li>Present options (Options/Assumptive Close)</li>
<li>Use Silence after stating price</li>
<li>STOP selling immediately after "yes"</li>
</ul>

<strong>STAGE 6: HANDOFF</strong>
<ul style="margin-bottom: 10px;">
<li>Document EVERYTHING in handoff template</li>
<li>Send complete package to dev team</li>
<li>Confirm timeline with client</li>
<li>Send onboarding email with asset checklist</li>
</ul>

<strong>STAGE 7: POST-DELIVERY</strong>
<ul style="margin-bottom: 0;">
<li>Check in 48 hours after delivery</li>
<li>Ask for review on relevant platform</li>
<li>Ask for referral</li>
<li>Mention maintenance plans and future services</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎭 8 Full Practice Scenarios</h3>
<p>Each scenario below is a complete, realistic sales conversation. Study how each one applies the techniques from previous tasks. These are the exact types of conversations you will have daily.</p>

<h4>Scenario A: The Budget Shopper</h4>
<div class="highlight-box">
<strong>Client Background:</strong> Maya runs a small fashion brand selling handmade jewelry on Instagram. She has 2,000 followers and makes about 10 sales per month through DMs. She has gotten quotes from 3 Fiverr sellers ranging from $150-$400. Budget: $300-500.
</div>
<p><strong>Opening Message:</strong> "Hi! I need a Shopify store for my jewelry brand. How much do you charge? I have gotten quotes from other sellers for $200-400."</p>

<p><strong>Exchange 1 — Qualify (do not quote price yet):</strong></p>
<div class="highlight-box">
<strong>You:</strong> "Hi Maya! Thanks for reaching out. Love seeing handmade jewelry brands — there is so much demand right now. Before I can give you accurate pricing, I need to understand your project better. Can you tell me: how many products are you launching with? Do you have your logo and product photos ready? And what is your timeline — when do you need to be live?"<br><br>
<strong>Technique:</strong> Price-Focused Template — never quote price first, ask qualifying questions.
</div>

<p><strong>Exchange 2 — She pushes for price:</strong></p>
<div class="highlight-box">
<strong>Maya:</strong> "I have about 25 products, photos are ready, and I want to launch in 2 weeks. But I really need to know the price range before we go further. My budget is around $300-400."<br><br>
<strong>You:</strong> "I appreciate you sharing that, Maya. I want to be upfront with you — our pricing starts at $800 for a basic custom store. I know that is higher than some of the quotes you have received, and I want to explain why. Can I show you two stores we recently built for jewelry brands? Then you can decide if the difference in quality is worth it for your brand."<br><br>
<strong>Technique:</strong> Honesty + Contrast Principle — show do not tell.
</div>

<p><strong>Exchange 3 — The objection:</strong></p>
<div class="highlight-box">
<strong>Maya:</strong> "Those stores look amazing, honestly. But $800 is double my budget. The other seller said they can do the same thing for $200."<br><br>
<strong>You:</strong> "I totally understand. Let me ask you this — the $200 store, did they mention speed optimization? SEO setup? Mobile-first design? Unlimited revisions? 14 days of support after launch? ... Those are not add-ons for us — they are standard. The $200 store will look like a template because it IS a template with your logo slapped on it. Your handmade jewelry deserves better than that. Here is what I can do for your budget: an MVP package at $800 with 3 pages, 25 products, speed optimization, and 14 days support. Or if you can stretch to $1,200, you get the full 5-page custom store with SEO and 30-day support. Which sounds more realistic for you?"<br><br>
<strong>Technique:</strong> Scope Reduction + Good-Better-Best + Options Close
</div>

<p><strong>Exchange 4 — The close:</strong></p>
<div class="highlight-box">
<strong>Maya:</strong> "I think the $800 MVP makes sense. I can always upgrade later, right?"<br><br>
<strong>You:</strong> "Absolutely — that is exactly how most of our successful clients start. They launch with the MVP, get sales rolling, and then upgrade with revenue. Smart move. I have a slot opening Monday — want me to send the invoice so we can lock that in?"<br><br>
<strong>Maya:</strong> "Yes, let us do it!"<br><br>
<strong>You:</strong> "Awesome! Great choice, Maya. Sending the invoice now. You will see it in your inbox in 5 minutes."<br><br>
<strong>Technique:</strong> Assumptive Close + Stop Selling Immediately
</div>

<h4>Scenario B: The Indecisive Partner</h4>
<div class="highlight-box">
<strong>Client Background:</strong> David and his wife Sarah are launching a home decor brand. David handles the business decisions but "always checks with Sarah first." They have a $2,000 budget and a solid product line of 40+ items. David is genuinely interested but cannot commit without Sarah.
</div>
<p><strong>Opening Message:</strong> "Hey! We are launching a home decor store and looking for someone to build it. Love your portfolio. What are your packages?"</p>

<p><strong>Exchange 1 — Qualify + Upfront Contract:</strong></p>
<div class="highlight-box">
<strong>You:</strong> "Hi David! Great to hear about the home decor brand — that is a booming market right now. Before I walk you through our options, let me set expectations. I will ask a few questions to understand your project, then share options and pricing. By the end, we will know if this is a fit. If yes, great — I will share next steps. If not, no pressure. Sound fair?"<br><br>
<strong>Technique:</strong> Upfront Contract — set the framework early.
</div>

<p><strong>Exchange 2 — He reveals the decision-maker issue:</strong></p>
<div class="highlight-box">
<strong>David:</strong> "Sounds great. So we have about 40 products, logo is ready, and we want to launch in 3 weeks. Budget is around $2,000. But I should mention — I will need to run everything by my wife Sarah. She is the creative director."<br><br>
<strong>You:</strong> "That makes total sense — it is great that you are building this together. Is there any way Sarah could join our next chat? That way she can see the portfolio and ask questions directly. It will save you from playing the middleman and we can all get aligned in one conversation."<br><br>
<strong>Technique:</strong> Identify Decision-Maker gap — try to get both on the call.
</div>

<p><strong>Exchange 3 — He says "let me check with Sarah":</strong></p>
<div class="highlight-box">
<strong>David:</strong> "The Premium at $1,200 sounds perfect honestly. But I need to run this by Sarah tonight. I will get back to you."<br><br>
<strong>You:</strong> "Absolutely, David. I want you both to feel great about this. Let me send you a summary of everything we discussed — the package details, timeline, and portfolio examples — so Sarah has all the info. Would it work to reconnect Thursday or Friday after you two have talked it through? I want to make sure I can hold your slot in our schedule."<br><br>
<strong>Technique:</strong> Delay Close — lock in specific follow-up + send recap materials.
</div>

<p><strong>Exchange 4 — Follow-up and close:</strong></p>
<div class="highlight-box">
<strong>You (Thursday):</strong> "Hi David! Just following up from our conversation. Were you and Sarah able to review the package details? Any questions I can answer for either of you?"<br><br>
<strong>David:</strong> "Yes! Sarah loved the portfolio examples. We are ready to go with Premium."<br><br>
<strong>You:</strong> "Fantastic! Great decision. Sending the invoice right now. Welcome aboard, David!"<br><br>
<strong>Technique:</strong> Follow-up at agreed time + Stop selling after yes.
</div>

<h4>Scenario C: The DIY-er</h4>
<div class="highlight-box">
<strong>Client Background:</strong> Rachel spent 3 months trying to build her own Shopify store for her fitness apparel brand. She watched 50+ YouTube tutorials, bought a $180 theme, and the result still looks unprofessional. She is frustrated, embarrassed, and skeptical that paying someone else will actually be different.
</div>
<p><strong>Opening Message:</strong> "I tried building my own store and it looks terrible. I have already wasted $180 on a theme and months of time. Not sure if hiring someone is worth it either. What can you actually do that I cannot do myself?"</p>

<p><strong>Exchange 1 — Empathize, do not sell:</strong></p>
<div class="highlight-box">
<strong>You:</strong> "Rachel, I hear that frustration and I respect that you tried building it yourself. That actually tells me a lot about your drive — most people give up before they even start. The reality is that Shopify LOOKS simple from the outside, but getting a store that actually converts visitors into buyers requires design expertise, speed optimization, and technical knowledge that takes years to develop. You are not bad at it — it is just not your skill set, the same way I could not design fitness apparel. Can you share the link to what you have built? I would love to see what you are working with."<br><br>
<strong>Technique:</strong> Compliment Opener + Empathy (Feel-Felt-Found setup)
</div>

<p><strong>Exchange 2 — Build trust through honesty:</strong></p>
<div class="highlight-box">
<strong>Rachel:</strong> "[Shares link] See? It is a mess. The homepage looks cluttered and the product pages load so slowly."<br><br>
<strong>You:</strong> "Okay, I see what is happening here. Your product photography is actually really good — that is half the battle. The issues are structural: the theme is not optimized for speed, the layout is not following conversion best practices, and the mobile experience needs work. These are exactly the things we specialize in. Let me show you a before-and-after from a fitness brand we rebuilt last month — similar situation to yours."<br><br>
<strong>Technique:</strong> Parrot Technique + specific diagnosis + social proof
</div>

<p><strong>Exchange 3 — Address skepticism directly:</strong></p>
<div class="highlight-box">
<strong>Rachel:</strong> "That before-and-after is impressive. But how do I know you will not just deliver another theme with my logo on it? I have already wasted money once."<br><br>
<strong>You:</strong> "That is a fair question and I am glad you asked it. Here is what makes us different: every store we build is 100% custom — no templates. We have built 2,000+ stores with a 4.9-star rating. You get unlimited revisions during the build, so if something does not look right, we fix it until you love it. And you get 30 days of support after launch. If I could show you the mockup design before we build anything — so you see exactly what your store will look like before a single line of code is written — would that make you feel more confident?"<br><br>
<strong>Technique:</strong> Trust building + "If I Could, Would You" Close
</div>

<p><strong>Exchange 4 — Close:</strong></p>
<div class="highlight-box">
<strong>Rachel:</strong> "Yes, seeing a mockup first would make a huge difference. Okay, I am interested. What are the options?"<br><br>
<strong>You:</strong> "[Present Good-Better-Best with Price Sandwich] ... Most fitness brands go with Premium at $1,200. You already have your products and photos — so we are in a great position to move fast. I have a slot opening Wednesday. Want me to reserve it?"<br><br>
<strong>Rachel:</strong> "Let us do Premium. I have wasted enough time doing this myself."<br><br>
<strong>You:</strong> "Smart decision, Rachel. Sending invoice now. Welcome aboard!"<br><br>
<strong>Technique:</strong> Good-Better-Best + Assumptive Close + Stop Selling
</div>

<h4>Scenario D: The High-Value Enterprise</h4>
<div class="highlight-box">
<strong>Client Background:</strong> James is the marketing director for a mid-size supplement company doing $500K/year in revenue. They have 200+ SKUs, need custom features (subscription boxes, loyalty program, advanced filtering), and have a budget of $5,000-$8,000. Multiple stakeholders need to approve. Long sales cycle expected.
</div>
<p><strong>Opening Message:</strong> "Hi, we are a supplement brand looking to migrate from WooCommerce to Shopify. We have 200+ products and need custom functionality. This is a significant project. Can you handle enterprise-level builds?"</p>

<p><strong>The Approach:</strong> Enterprise clients require patience, detailed proposals, and multiple touchpoints. Do NOT rush the close. Instead: (1) Qualify thoroughly, (2) Request a call or detailed brief, (3) Prepare a custom proposal, (4) Present to all stakeholders, (5) Follow up methodically. Use the Upfront Contract, Summary Close, and Delay Close. Enterprise deals close in 1-4 weeks, not 1 conversation.</p>

<div class="highlight-box">
<strong>Key Response:</strong> "Hi James! Great to hear from you. Migration projects from WooCommerce to Shopify are one of our specialties — we have handled several 200+ SKU migrations. This sounds like a project that deserves a proper conversation rather than back-and-forth messages. Would you be open to a 20-minute call this week? I can walk your team through our process, show relevant case studies, and put together a detailed proposal based on your specific requirements. Would Tuesday or Thursday work better?"
</div>

<h4>Scenario E: The Rush Job</h4>
<div class="highlight-box">
<strong>Client Background:</strong> Kevin is launching a limited-edition sneaker brand in partnership with a celebrity influencer. The influencer is posting about it on Friday — 5 days from now. Kevin needs a store live before the post goes up. He has budget and is willing to pay a premium for speed.
</div>
<p><strong>Opening Message:</strong> "URGENT — I need a Shopify store live by Friday. Money is not the issue. Can you do it?"</p>

<p><strong>The Approach:</strong> This is a green flag lead IF you can deliver. Key steps: (1) Confirm you can actually meet the deadline, (2) Apply rush fee framework (30% for 5-day delivery), (3) Get ALL assets upfront immediately, (4) Close fast — they are ready to buy.</p>

<div class="highlight-box">
<strong>Key Response:</strong> "Kevin, I love the energy. Yes, we can do a 5-day build — we have done it before for product drops and launches. Here is what I need from you: a 30% priority fee applies for 5-day delivery (standard is 14 days). That brings the Premium package to $1,560 or Enterprise to $2,340. I will also need ALL your assets — logo, product photos, descriptions, and Shopify access — by tonight so our team can start first thing tomorrow morning. No delays on assets = no delays on delivery. Can you get everything to me by 8 PM tonight?"
</div>

<h4>Scenario F: The Bad Experience</h4>
<div class="highlight-box">
<strong>Client Background:</strong> Priya has been burned by 3 previous Shopify developers. Developer 1 disappeared mid-project. Developer 2 delivered a template and called it "custom." Developer 3 missed the deadline by 3 weeks. She has trust issues and is extremely cautious. She has a great product (organic skincare) and a $1,500 budget.
</div>
<p><strong>Opening Message:</strong> "I have been burned by 3 developers already. Why should I trust you? Honestly starting to think all Shopify developers are the same."</p>

<p><strong>The Approach:</strong> Lead with empathy. Do NOT be defensive. Acknowledge her pain. Let her vent. Then differentiate through specifics, not claims.</p>

<div class="highlight-box">
<strong>Key Response:</strong> "Priya, I completely understand your frustration. After 3 bad experiences, I would be skeptical too. You have every right to be cautious. Here is what I can offer that is different — not just words, but evidence: we have completed 2,000+ stores with a 4.9-star rating on Fiverr. You can read hundreds of reviews from real clients. We provide unlimited revisions — meaning you see the mockup BEFORE we build, and we do not stop until you are happy. We include 30 days of post-launch support — I am not disappearing after delivery. And you get a dedicated project manager who updates you every 3-4 days. I am not asking you to trust me based on my words. I am asking you to trust our track record. Would you like me to share 2-3 reviews from clients who had similar experiences before working with us?"
</div>

<h4>Scenario G: The Scope Creeper</h4>
<div class="highlight-box">
<strong>Client Background:</strong> Tom started by asking for a simple 3-page store for his coffee brand. During the conversation, he keeps adding: "Oh, and I need a blog," "Can you add a subscription feature?", "What about a loyalty program?", "I also need email marketing integration." Each new feature is mentioned casually, as if it should be included in the base price.
</div>
<p><strong>Opening Message:</strong> "Hi! I need a simple Shopify store for my coffee brand. Just 3 pages, nothing fancy. How much?"</p>

<p><strong>The Approach:</strong> Document every feature request. When they add scope, acknowledge it positively but immediately connect it to pricing. Use the Trade-Off technique.</p>

<div class="highlight-box">
<strong>Key Response (when scope creep starts):</strong> "Tom, I love that you are thinking big — a blog, subscriptions, and a loyalty program would definitely set your coffee brand apart. Here is the thing though — each of those features adds complexity and development time. The simple 3-page store you originally described is the MVP at $800. With the blog and subscriptions, we are looking at Enterprise territory at $1,800. I want to make sure you get exactly what you need without overpaying. Let me suggest this: we start with the MVP at $800, get your store live and selling, and then we add the subscription feature and loyalty program as a Phase 2 project once you are generating revenue. That way you are not paying for features before you know which ones your customers actually want. What do you think?"
</div>

<h4>Scenario H: The Ghost</h4>
<div class="highlight-box">
<strong>Client Background:</strong> Lisa was extremely enthusiastic during the initial conversation. She loved the portfolio, said "this is exactly what I need," asked detailed questions about features, and seemed ready to buy. You sent the proposal. Then... silence. It has been 48 hours with no response.
</div>
<p><strong>Opening Message:</strong> (She was enthusiastic, then went silent after receiving the proposal)</p>

<p><strong>The Approach:</strong> Follow the 3-touch follow-up sequence. Do NOT take it personally. People get busy, distracted, or scared. Your job is to make it easy for them to re-engage.</p>

<div class="highlight-box">
<strong>Follow-Up 1 (+24 hours):</strong> "Hi Lisa! Just checking in — did you get the proposal I sent? Happy to answer any questions or walk you through the details. No rush!"<br><br>
<strong>Follow-Up 2 (+48 hours):</strong> "Hi Lisa! I wanted to follow up since our schedule is filling up for this month. If you are still thinking it over, I totally understand. I can hold your slot through Friday. Just let me know either way!"<br><br>
<strong>Follow-Up 3 (+72 hours — Final):</strong> "Hi Lisa! No pressure at all — I know things get busy. I am going to close out this conversation for now, but if you want to revisit later, my door is always open. Wishing you all the best with your launch. Take care!"<br><br>
<strong>Technique:</strong> 3-Touch Rule — gentle, professional, and always leave the door open.
</div>
</div>

<div class="content-section">
<h3>🤝 Client Relations Mastery</h3>
<p>Closing the deal is only the beginning. How you manage the relationship AFTER the sale determines whether you get reviews, referrals, and repeat business. These 9 techniques from the SOP will make you a client relations expert.</p>

<h4>1. The Thank You Note</h4>
<p>After every closed deal, send a personalized thank you message within 1 hour. Not a template — a genuine note referencing something specific from your conversation.</p>
<div class="highlight-box">
"Hey Maya! Just wanted to say thank you again for choosing us for your jewelry store. I am genuinely excited about this project — your product photos are going to look incredible on a properly designed store. Our team starts tomorrow and I will personally make sure everything is perfect. Talk soon!"
</div>

<h4>2. The 48-Hour Follow-Up</h4>
<p>48 hours after delivery, check in. This is the most critical touchpoint for reviews and referrals.</p>
<div class="highlight-box">
"Hi [Name]! It has been 2 days since we launched your store — how is everything going? Have you had any orders come in yet? Any questions or adjustments I can help with? I am here for the next [X] days of your support period."
</div>

<h4>3. The "I Don't Know" Recovery</h4>
<p>When a client asks something you do not know the answer to, NEVER guess or make things up. Say this instead:</p>
<div class="highlight-box">
"That is a great question and I want to give you the right answer, not a guess. Let me check with our technical team and get back to you within [timeframe]. I will message you by [specific time] with the answer."
</div>
<p><strong>Then actually follow up when you said you would.</strong> This builds more trust than having all the answers.</p>

<h4>4. The Expectation Sync</h4>
<p>At the start of every project, align expectations explicitly. This prevents 90% of post-delivery complaints.</p>
<div class="highlight-box">
"Before we start building, I want to make sure we are 100% aligned. Here is what we are delivering: [list every feature]. The design mockup will be ready by [date]. You will have unlimited revisions on the mockup. Once you approve the design, the full build takes about [X] days. Your support period starts on delivery day. Does all of that match your understanding?"
</div>

<h4>5. The 3-Touch Rule</h4>
<p>For unresponsive clients at any stage (pre-sale, during project, post-delivery), follow up a maximum of 3 times with increasing urgency:</p>
<ul>
<li><strong>Touch 1 (+24 hours):</strong> Gentle check-in, no pressure</li>
<li><strong>Touch 2 (+48 hours):</strong> Light urgency, mention timeline impact</li>
<li><strong>Touch 3 (+72 hours):</strong> Final attempt, leave door open, close conversation gracefully</li>
</ul>
<p>After 3 touches with no response, move on. Your time is valuable.</p>

<h4>6. The Referral Ask</h4>
<p>Timing is everything. Ask for referrals ONLY after the client has expressed satisfaction — never before.</p>
<div class="highlight-box">
"I am so glad you love the store! Quick question — do you know anyone else in your network who is thinking about launching an online store? We have a referral program where you get $100 credit toward any future service for every successful referral. Just have them mention your name!"
</div>

<h4>7. The "What Would Make This 10/10?"</h4>
<p>Ask this before the project is "done" — during the revision phase:</p>
<div class="highlight-box">
"On a scale of 1-10, how are you feeling about the store so far? ... Great! What would it take to make it a solid 10 out of 10 for you?"
</div>
<p>This gives them permission to share any lingering concerns AND positions you as someone who genuinely cares about quality.</p>

<h4>8. The No-Blame Response</h4>
<p>When something goes wrong (and it will eventually), never blame the client, the dev team, or circumstances. Take ownership and offer a solution:</p>
<div class="highlight-box">
"I apologize for the delay on the mockup. That is on us. Here is what we are doing to fix it — our senior designer is prioritizing your project and you will have the mockup by tomorrow at noon. I will personally follow up to make sure it is ready. Thank you for your patience."
</div>

<h4>9. The Exit Interview</h4>
<p>For clients who decide not to proceed (lost deals), always ask why. This is invaluable data:</p>
<div class="highlight-box">
"No problem at all, [Name]. I completely respect your decision. If you do not mind me asking — what was the main factor? Was it timing, budget, or something else? I ask because your feedback genuinely helps us improve. Either way, I wish you the best with your launch and my door is always open if you need help down the road."
</div>
</div>

<div class="content-section">
<h3>🏆 Post-Sale Actions — The Complete Playbook</h3>
<p>The sale does not end at payment. How you handle the post-sale experience determines your review rating, referral pipeline, and repeat business. Follow this timeline exactly.</p>

<h4>Day 1: After Payment Received</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Send thank you note (personalized, not template)</li>
<li>Send onboarding email with asset checklist</li>
<li>Complete handoff documentation for dev team</li>
<li>Confirm start date with client</li>
<li>Add client to your CRM/tracking system</li>
</ul>
</div>

<h4>Day 2: Project Kickoff</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Confirm dev team has received and reviewed handoff</li>
<li>Follow up with client if assets have not been received</li>
<li>Send brief update: "Your project is officially underway!"</li>
</ul>
</div>

<h4>Day 7: Mid-Project Check-in</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Share mockup or progress update with client</li>
<li>Ask for feedback: "What would make this 10/10?"</li>
<li>Address any revision requests immediately</li>
<li>Confirm timeline is on track</li>
</ul>
</div>

<h4>Day 14: Delivery Day</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Final quality check before delivery</li>
<li>Deliver with a walkthrough message explaining everything</li>
<li>Remind them of support period start date</li>
<li>Schedule 48-hour follow-up</li>
</ul>
</div>

<h4>Day 16: 48-Hour Follow-Up</h4>
<div class="highlight-box">
"Hi [Name]! It has been 2 days since your store launched — how is everything going? Any questions or adjustments needed? I am here for your entire 30-day support period."
</div>

<h4>Day 30: End of Support Period</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Check in one final time</li>
<li>Ask for review (see templates below)</li>
<li>Ask for referral</li>
<li>Mention maintenance plans and future services</li>
<li>Thank them and close the project formally</li>
</ul>
</div>

<h4>Day 90: Long-Term Follow-Up</h4>
<div class="highlight-box">
"Hi [Name]! It has been 3 months since we launched your store — how is business going? If you are ready to take things to the next level, we offer redesign packages, marketing services, and ongoing maintenance. No pressure — just wanted to check in and see how you are doing!"
</div>

<h4>Review Request Templates</h4>
<p><strong>For Fiverr:</strong></p>
<div class="highlight-box">
"So glad you are happy with the store! If you have a moment, I would really appreciate a 5-star review on the order. Your feedback helps us reach more clients like you. Thank you so much!"
</div>
<p><strong>For Google:</strong></p>
<div class="highlight-box">
"We are so glad you love your new store! If you have 30 seconds, would you mind leaving us a quick Google review? Here is the link: [link]. Your words really help other business owners find us. Thank you!"
</div>
<p><strong>For Trustpilot:</strong></p>
<div class="highlight-box">
"Your feedback means the world to us! If you would be open to sharing your experience on Trustpilot, here is our profile: [link]. A quick review helps other entrepreneurs make informed decisions. Thank you!"
</div>

<h4>Upsell Timing and Scripts</h4>
<p><strong>Maintenance Plan (Day 30):</strong></p>
<div class="highlight-box">
"Your 30-day support period is wrapping up this week. Just a heads up — we offer monthly maintenance plans starting at $99/month that cover ongoing updates, speed monitoring, security patches, and priority support. It is like having a developer on retainer without the full-time cost. Want me to send you the details?"
</div>
<p><strong>Marketing Package (Day 60):</strong></p>
<div class="highlight-box">
"Hi [Name]! How are sales going? A lot of our clients see a big jump in revenue when they pair their new store with a proper marketing setup — email sequences, social media optimization, and Google Shopping integration. We offer marketing packages starting at $500. Worth exploring if you want to accelerate growth. Interested?"
</div>
<p><strong>Redesign (Day 180):</strong></p>
<div class="highlight-box">
"Hi [Name]! Your store has been live for 6 months — congrats on everything you have achieved! A lot of brands at your stage do a refresh — updated design, new features based on customer feedback, and conversion optimization based on your actual sales data. We offer redesign packages for existing clients at a preferred rate. Want to chat about it?"
</div>
</div>

<div class="content-section">
<h3>📋 Sales Pipeline Management</h3>

<h4>Lead Tracking Structure</h4>
<p>Every lead you interact with should be tracked. Use a spreadsheet or CRM with these columns:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Column</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Example</strong></td>
</tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Date</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2026-02-15</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Name</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maya Thompson</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Source</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fiverr / Instagram / Referral</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Niche</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Jewelry / Fashion</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">M.T.N.D. Score</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3/4 Green (Budget yellow)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Status</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Qualified / Proposal Sent / Closed / Lost</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Package</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Premium $1,200</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Follow-Up Date</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2026-02-18</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notes</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Needs to check with partner. Send recap email.</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Outcome</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Won / Lost / Pending</td></tr>
</table>

<h4>Daily Pipeline Review (5 minutes, every morning)</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Check for new inquiries — respond to any unanswered within 5 minutes (Fiverr) or 1 hour (other channels)</li>
<li>Review follow-up schedule — who is due for a follow-up today?</li>
<li>Update statuses — move leads through the pipeline based on yesterday's interactions</li>
<li>Prioritize hot leads — anyone who is close to closing gets your first attention</li>
</ul>
</div>

<h4>Weekly Sales Meeting Agenda (30 minutes, every Friday)</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li><strong>Pipeline Review (10 min):</strong> Total leads, qualified leads, proposals sent, deals closed this week</li>
<li><strong>Win/Loss Analysis (10 min):</strong> What worked? What objections came up? Which techniques succeeded?</li>
<li><strong>Revenue Report (5 min):</strong> Total closed revenue, average deal size, close rate</li>
<li><strong>Next Week Plan (5 min):</strong> Follow-ups due, new strategies to try, personal development focus</li>
</ul>
</div>

<h4>Monthly Goal-Setting Framework</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li><strong>Revenue target:</strong> How much total revenue this month?</li>
<li><strong>Deal count target:</strong> How many closed deals needed to hit revenue?</li>
<li><strong>Lead volume target:</strong> Based on 30% close rate, how many qualified leads needed?</li>
<li><strong>Activity target:</strong> How many conversations per day to hit lead volume?</li>
<li><strong>Skill focus:</strong> Which technique or skill are you improving this month?</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Handoff Documentation — The Complete Template</h3>
<p>When passing a closed deal to the development team, use this complete handoff template. The dev team should NOT need to contact the client for any information you already discussed.</p>

<div class="highlight-box">
<strong>PROJECT HANDOFF DOCUMENT</strong><br><br>
<strong>Section 1: Client Information</strong><br>
- Client Name: ___<br>
- Business Name: ___<br>
- Email: ___<br>
- Phone/WhatsApp: ___<br>
- Preferred communication channel: ___<br>
- Time zone: ___<br><br>

<strong>Section 2: Project Details</strong><br>
- Niche/Industry: ___<br>
- Target audience: ___<br>
- Package sold: MVP / Premium / Enterprise / Custom<br>
- Total price: $___<br>
- Rush fee applied: Yes/No (amount: $___)<br>
- Payment status: Paid / Partial / Pending<br>
- Promised delivery date: ___<br><br>

<strong>Section 3: Store Requirements</strong><br>
- Number of pages: ___<br>
- Number of products: ___<br>
- Product categories: ___<br>
- Custom features requested: ___<br>
- Integrations needed (email, analytics, etc.): ___<br>
- Reference sites client likes: ___<br><br>

<strong>Section 4: Branding Assets</strong><br>
- Logo provided: Yes/No (format: ___)<br>
- Brand colors: ___<br>
- Fonts specified: ___<br>
- Product photos provided: Yes/No (quantity: ___)<br>
- Brand guidelines document: Yes/No<br>
- Shopify account created: Yes/No<br><br>

<strong>Section 5: Special Notes</strong><br>
- Special requests mentioned: ___<br>
- Red flags observed: ___<br>
- Client personality notes: ___<br>
- Promises made during sale: ___<br>
- Things to be extra careful about: ___
</div>

<div class="warning-box" style="margin-top: 15px;">
<strong>What Dev Team NEEDS (non-negotiable):</strong> Client contact info, package details, number of products, delivery date, all promised features, branding assets status.<br><br>
<strong>What is Nice to Have:</strong> Reference sites, personality notes, detailed conversation history.<br><br>
<strong>Red Flag Documentation:</strong> If you noticed ANY red flags during the sale (even if you proceeded), document them so the dev team is prepared. Example: "Client changed requirements 3 times during our conversation — expect revision requests."
</div>
</div>

<div class="content-section">
<h3>💡 Sales Conviction and Mastery Philosophy</h3>
<p>This section covers the mindset principles that separate top performers from average salespeople. These come directly from the Digital Heroes SOP.</p>

<h4>The Sales Equation</h4>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3)); border: none; text-align: center; padding: 25px;">
<div style="font-size: 1.5em; font-weight: 700;">Conviction x Trust = Sales</div>
<p style="margin: 15px 0 0 0;">If either is zero, the sale is zero. Both must be high.</p>
</div>
<p><strong>Conviction</strong> means YOU believe in the product. If you do not genuinely believe Digital Heroes delivers exceptional value, your prospects will sense it. Conviction is not faked — it comes from seeing real results, reading real reviews, and knowing your product inside and out.</p>
<p><strong>Trust</strong> means THEY believe in you. Trust is built through competence (knowing your stuff), consistency (doing what you say), and character (being honest even when it costs you).</p>

<h4>The Conviction Slider</h4>
<p>Think of your conviction as a slider from 0% to 100%:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>40% Conviction</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">You hesitate when stating the price. You offer discounts before being asked. You apologize for premium pricing. Clients sense your doubt and lose confidence.</td>
</tr>
<tr style="background: rgba(245, 158, 11, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>70% Conviction</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">You present pricing confidently but wobble under pressure. You can handle easy objections but crumble when they push hard. You are getting there but not yet unshakeable.</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>100% Conviction</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">You state the price with zero hesitation. You handle objections calmly because you KNOW the value exceeds the price. You do not chase — you attract. Clients trust your confidence because it is real.</td>
</tr>
</table>

<h4>Childlike Curiosity > Confrontation</h4>
<p>When a client pushes back, most salespeople get defensive. Top performers get curious. Instead of arguing, they ask questions.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Confrontation (Bad)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Our price is fair and here is why you should pay it..."</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Curiosity (Good)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That is interesting — what specifically about the pricing does not feel right? Help me understand what you were expecting."</td>
</tr>
</table>

<h4>Emotional Control = Closing Power</h4>
<p>The salesperson who controls their emotions controls the conversation. When a client is rude, dismissive, or unreasonable — your calm response is your superpower.</p>
<div class="warning-box">
<strong>Rules of Emotional Control:</strong>
<ul style="margin-bottom: 0;">
<li>Never match a client's anger with your own anger</li>
<li>Never take price objections personally</li>
<li>Never celebrate a close in front of the client</li>
<li>Never show frustration when they ghost you</li>
<li>Always respond 10% calmer than the situation requires</li>
</ul>
</div>

<h4>The Real Sales Framework (7 Steps)</h4>
<p>Every successful sale follows this sequence:</p>
<ol>
<li><strong>Rapport:</strong> Build genuine connection in the first 60 seconds</li>
<li><strong>Qualify:</strong> Ask M.T.N.D. questions to confirm fit</li>
<li><strong>Diagnose:</strong> Understand their REAL problem (not just what they say)</li>
<li><strong>Prescribe:</strong> Present the right solution (not the most expensive)</li>
<li><strong>Address Concerns:</strong> Handle objections with empathy and evidence</li>
<li><strong>Close:</strong> Ask for the business using the right technique</li>
<li><strong>Serve:</strong> Deliver exceptional post-sale experience</li>
</ol>
<p>Miss any step and the sale weakens. Skip a step and the sale dies.</p>
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
<li>Conviction x Trust = Sales (The Ultimate Equation)</li>
<li>Never give discounts - reduce scope instead</li>
<li>Ask curious questions instead of arguing</li>
<li>Emotional control is your superpower</li>
<li>Volume beats perfection every time</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>This quiz tests realistic scenarios combining everything you have learned.</p>
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
<p style="margin: 20px 0 0 0; font-size: 1.2em;">Prove you are ready to represent Digital Heroes.</p>
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
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Closing techniques, negotiation, after "yes" actions</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task 9</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete sales flow, scenarios, handoff, post-sale</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📖 Complete Knowledge Review</h3>
<p>Before taking the final exam, review the key concepts from every task. This is your comprehensive refresher — use it to identify any gaps in your knowledge.</p>

<h4>Task 1: Sales Mindset and Discipline</h4>
<div class="highlight-box">
<strong>5 Key Principles:</strong>
<ol style="margin-bottom: 0;">
<li><strong>Discipline beats motivation:</strong> Work the process regardless of how you feel. Motivation fades; discipline delivers.</li>
<li><strong>Rejection is information, not insult:</strong> Every "no" teaches you something. Analyze why, adjust, and improve.</li>
<li><strong>Volume beats perfection:</strong> 50 imperfect conversations teach you more than 5 "perfect" ones. Get the reps in.</li>
<li><strong>Deliberate practice over experience:</strong> 10,000 hours of mindless repetition is not the same as 10,000 hours of intentional improvement with feedback.</li>
<li><strong>You are solving, not selling:</strong> Your job is to find people with problems and offer solutions. If they have no problem, move on.</li>
</ol>
</div>

<h4>Task 2: Company Knowledge</h4>
<div class="highlight-box">
<strong>Key Facts:</strong>
<ul style="margin-bottom: 0;">
<li>Digital Heroes: Premium Shopify development company</li>
<li>Track record: 2,000+ stores, 4.9-star Fiverr rating</li>
<li>Payment policy: Full payment upfront before work begins (90% of projects)</li>
<li>No free consulting before order — our expertise has value</li>
<li>Premium positioning: higher prices attract better clients</li>
<li>Interconnected chain: every promise in sales becomes a deliverable for the team</li>
<li>Never discuss salary with colleagues (termination offense)</li>
<li>SOPs are "The Law" — follow them daily</li>
</ul>
</div>

<h4>Task 3: Products and Pricing</h4>
<div class="highlight-box">
<strong>Package Structure:</strong>
<table style="width: 100%; margin: 10px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><strong>Package</strong></td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><strong>Price</strong></td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);"><strong>Key Features</strong></td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">MVP</td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$800</td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">3 pages, 15 products, basic optimization, 14-day support</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Premium</td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$1,200</td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">5 pages, 50 products, full SEO, 30-day support</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Enterprise</td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$1,800</td>
<td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">8+ pages, unlimited products, custom features, 90-day support</td>
</tr>
</table>
<strong>Key Rules:</strong> Standard delivery 14 days. Present 2-3 options always. Never discount — reduce scope instead. Scope reduction for budget clients: fewer pages, fewer products, shorter support.
</div>

<h4>Task 4: Lead Qualification (M.T.N.D.)</h4>
<div class="highlight-box">
<strong>The Framework:</strong>
<ul style="margin-bottom: 0;">
<li><strong>M — Money:</strong> Do they have the budget? Green: "budget not an issue for quality." Red: "what is cheapest?"</li>
<li><strong>T — Timeline:</strong> Is the timeline realistic? Green: 2-4 weeks. Red: "need it tomorrow."</li>
<li><strong>N — Need:</strong> Is there a clear, urgent need? Green: "launching next month." Red: "just exploring."</li>
<li><strong>D — Decision-maker:</strong> Can they say yes? Green: "I make the decisions." Red: "need to check with partner, wife, and investor."</li>
</ul>
<strong>Rule:</strong> 2+ red flags = polite disqualification. Bad History Pattern ("last 4 developers failed") = the common factor is THEM.
</div>

<h4>Task 5: Lead Management and Response Templates</h4>
<div class="highlight-box">
<strong>Response Times:</strong>
<ul style="margin-bottom: 0;">
<li>Fiverr: Under 5 minutes during business hours</li>
<li>Other channels: Within 1 hour (ideally 30 minutes)</li>
</ul>
<strong>4 Template Types:</strong>
<ol style="margin-bottom: 0;">
<li><strong>General Inquiry:</strong> Thank + qualify + portfolio + stats</li>
<li><strong>Price-Focused:</strong> Do NOT give price. Ask qualifying questions first.</li>
<li><strong>Urgent Timeline:</strong> Confirm capability, list what YOU need from THEM, ask if ready</li>
<li><strong>Comparison Shopper:</strong> List differentiators, ask what matters to THEM</li>
</ol>
<strong>Follow-Up Rules:</strong> Maximum 3 follow-ups. +24h gentle check-in, +48h light urgency, +72h graceful close. Share portfolio examples in SIMILAR niche.
</div>

<h4>Task 6: Response Templates (Personalization)</h4>
<div class="highlight-box">
<strong>Personalization Rules:</strong>
<ul style="margin-bottom: 0;">
<li>Always use their name</li>
<li>Reference their specific niche or product</li>
<li>Share portfolio examples relevant to their industry</li>
<li>Mention specific stats (2,000+ stores, 4.9 rating)</li>
<li>Never send generic copy-paste messages</li>
</ul>
</div>

<h4>Task 7: Sales Psychology</h4>
<div class="highlight-box">
<strong>10 Techniques Quick Reference:</strong>
<ol style="margin-bottom: 0;">
<li><strong>80/20 Rule:</strong> Listen 80%, talk 20%</li>
<li><strong>3-Yes Technique:</strong> Get 3 small agreements before the pitch</li>
<li><strong>Mirror Technique:</strong> Repeat their last words as a question</li>
<li><strong>Pain Calculator:</strong> Convert problem into dollar amounts lost per day/week/month</li>
<li><strong>Assumptive Language:</strong> "When" not "if" — presuppose the sale</li>
<li><strong>Silence Technique:</strong> After stating price, stop talking. First to speak loses.</li>
<li><strong>Contrast Principle:</strong> Show expensive option first, then your price feels like a bargain</li>
<li><strong>Labeling Technique:</strong> Name their emotion before they do</li>
<li><strong>Takeaway:</strong> Suggest you might not be the right fit — triggers pursuit</li>
<li><strong>Brain Pain (Cortisol):</strong> Change triggers stress. Reduce friction to make buying feel safe.</li>
</ol>
</div>

<h4>Task 8: Objection Handling</h4>
<div class="highlight-box">
<strong>A.C.E. Framework:</strong>
<ul style="margin-bottom: 0;">
<li><strong>A — Acknowledge:</strong> "I completely understand that concern."</li>
<li><strong>C — Clarify:</strong> "Help me understand — is it the total amount or the timing?"</li>
<li><strong>E — Engage:</strong> "Here is how we can address that..." (present solution)</li>
</ul>
<strong>6 Core Objections:</strong>
<ol style="margin-bottom: 0;">
<li><strong>"Too expensive":</strong> Break down value, show ROI, offer scope reduction</li>
<li><strong>"Need to think about it":</strong> Ask what specifically — uncover real objection</li>
<li><strong>"Found someone cheaper":</strong> Ask what is included, highlight differentiators</li>
<li><strong>"Not sure it will work":</strong> Social proof (2,000+ stores, 4.9 rating, reviews)</li>
<li><strong>"Bad past experience":</strong> Empathize, differentiate with specifics, offer guarantees</li>
<li><strong>"Need to ask partner":</strong> Offer to include partner in conversation, set specific follow-up</li>
</ol>
<strong>Feel-Felt-Found:</strong> "I understand how you FEEL. Other clients FELT the same way. What they FOUND was..." + success story.
</div>

<h4>Task 9: Closing Techniques and Negotiation</h4>
<div class="highlight-box">
<strong>10 Core Closing Techniques:</strong>
<ol style="margin-bottom: 0;">
<li><strong>Assumptive:</strong> "Monday or Wednesday?" (skip "do you want to buy")</li>
<li><strong>Price Sandwich:</strong> Value-Price-Value (never naked price)</li>
<li><strong>Options:</strong> 2-3 choices shifts "should I?" to "which?"</li>
<li><strong>Good-Better-Best:</strong> 3 tiers, recommend middle</li>
<li><strong>Upfront Contract:</strong> Set expectations at START</li>
<li><strong>Delay:</strong> Book SPECIFIC follow-up date</li>
<li><strong>Takeaway:</strong> Remove option to create pursuit</li>
<li><strong>If I Could, Would You:</strong> Isolate real objection</li>
<li><strong>Summary:</strong> Recap all value before asking</li>
<li><strong>Urgency:</strong> REAL scarcity only (never fake)</li>
</ol>
<strong>Negotiation Rules:</strong> Never reduce price without reducing scope. Silence after price. Payment plans for green-flag leads only. Rush fees: +10% (10-day), +20% (7-day), +30% (5-day).
</div>

<h4>Task 10: Practice Scenarios, Handoff, and Post-Sale</h4>
<div class="highlight-box">
<strong>Key Concepts:</strong>
<ul style="margin-bottom: 0;">
<li>Complete sales flow: 7 stages from first contact to post-delivery</li>
<li>Handoff must include ALL client details (dev team should NEVER need to ask the client)</li>
<li>Post-sale timeline: Day 1 onboarding, Day 16 follow-up, Day 30 review/referral, Day 90 upsell</li>
<li>3-Touch Rule for unresponsive leads: +24h, +48h, +72h then close</li>
<li>Conviction x Trust = Sales (The Ultimate Equation)</li>
<li>Emotional Control = Closing Power (never match anger with anger)</li>
<li>Stop selling IMMEDIATELY after "yes"</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📋 Quick Reference Cards</h3>
<p>These condensed cheat sheets cover the most tested concepts. Review them before each exam attempt.</p>

<h4>Card 1: Response Protocol</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Situation</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Response</strong></td>
</tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fiverr inquiry</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Under 5 minutes</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"How much?"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ask qualifying questions FIRST, never quote blind</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Need it ASAP"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Confirm + rush fee + get assets immediately</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Comparing options"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Differentiate on value, ask what matters to THEM</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">No response after proposal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3-Touch sequence then graceful close</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client says "yes"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">STOP selling. Invoice within 5 min. Confirm timeline.</td></tr>
</table>

<h4>Card 2: Red Flags vs Green Flags</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Red Flags (2+ = disqualify)</strong></td>
</tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"What is the cheapest option?" / "Can you match $200?"</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Need it in 2 days" (unrealistic timeline)</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"My last 3-4 developers were terrible" (Bad History Pattern)</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"I need to check with partner, wife, and investor"</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Just exploring options for someday"</td></tr>
</table>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Green Flags (proceed with confidence)</strong></td>
</tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Budget is not an issue for quality work"</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Realistic timeline (2-4 weeks)</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clear need with specific launch date</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"I make the decisions"</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Has logo, photos, and product details ready</td></tr>
</table>

<h4>Card 3: Pricing Rules</h4>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Rule</strong></td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Application</strong></td>
</tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Never discount</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Reduce scope instead of reducing price</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Always Price Sandwich</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Value-Price-Value on every quote</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Present 2-3 options</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Good-Better-Best, recommend middle</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Silence after price</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">First to speak loses leverage</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Full payment upfront</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">90% of projects. Payment plans for green-flag only.</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Rush fees</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+10% (10-day), +20% (7-day), +30% (5-day)</td></tr>
</table>
</div>

<div class="content-section">
<h3>⚠️ Common Exam Mistakes — Top 10</h3>
<p>These are the most common errors people make on the certification exam. Study these to avoid losing points.</p>

<div class="warning-box">
<ol style="margin-bottom: 0;">
<li><strong>Giving price before qualifying:</strong> The #1 mistake. ALWAYS ask M.T.N.D. questions before presenting any pricing.</li>
<li><strong>Choosing "offer a discount" answers:</strong> Digital Heroes NEVER discounts. We reduce scope. Every "offer discount" answer is wrong.</li>
<li><strong>Ignoring red flags because they have money:</strong> A client with budget but 3+ red flags is STILL a disqualify. Red flags matter regardless of money.</li>
<li><strong>Continuing to sell after "yes":</strong> The moment they say yes, STOP. Send invoice. Confirm timeline. Do not explain why they made a good decision.</li>
<li><strong>Leaving follow-ups open-ended:</strong> "Get back to me whenever" is always wrong. ALWAYS set a specific date: "Thursday or Friday?"</li>
<li><strong>Confusing the 80/20 rule:</strong> It means listen 80%, talk 20%. NOT 80% of revenue from 20% of clients (that is a different business concept).</li>
<li><strong>Not documenting the handoff:</strong> "Just name and email" is always wrong. Complete handoff includes ALL client details, niche, products, branding, features, timeline, and special requests.</li>
<li><strong>Matching competitor prices:</strong> If a client says "other developer charges $400," you NEVER match. You differentiate on value.</li>
<li><strong>Arguing with objections:</strong> Confrontation is always wrong. Curiosity is always right. Ask questions, do not argue.</li>
<li><strong>Forgetting post-sale actions:</strong> After delivery: 48-hour check-in, ask for review, ask for referral. These are not optional.</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📊 Sales KPIs and Success Metrics</h3>
<p>Once certified, you will be measured on these key performance indicators. Understanding them now will help you hit the ground running.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>KPI</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Target</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It Matters</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response Time (Fiverr)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 5 minutes</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fiverr algorithm rewards fast responders. Slow response = lost leads.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response Time (Other)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 1 hour</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Prospects contact multiple sellers. First responder wins 50%+ of the time.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Close Rate (qualified)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30%+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">From qualified leads (passed M.T.N.D.), you should close at least 3 in 10.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Average Deal Size</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$1,200+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Most clients should land on Premium. If average is below $1,000, you are underselling.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly Revenue</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Varies by level</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Junior: $5K+/mo. Senior: $15K+/mo. Lead: $30K+/mo.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Satisfaction</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.8+ stars</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your sales promises must match delivery reality. Overselling kills ratings.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review Collection Rate</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 out of 10 happy clients should leave a review when asked properly.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Referral Rate</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%+</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 in 5 clients should refer at least one new lead.</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Career Growth Path</h3>
<p>Your certification is not the end — it is the beginning. Here is how your career progresses at Digital Heroes.</p>

<h4>Level 1: Junior Sales Executive (Month 1-3)</h4>
<div class="highlight-box">
<strong>What you do:</strong> Handle inbound Fiverr leads with senior supervision. Focus on learning the rhythm of real conversations.<br>
<strong>Skills to develop:</strong> Response speed, qualification accuracy, template mastery<br>
<strong>Targets:</strong> 5+ closes per month, $5,000+ revenue<br>
<strong>Supervision:</strong> Senior reviews every conversation for the first 10 orders. Feedback after each close and each lost deal.
</div>

<h4>Level 2: Sales Executive (Month 3-6)</h4>
<div class="highlight-box">
<strong>What you do:</strong> Handle all inbound leads independently. Begin handling multi-channel inquiries (Fiverr, Instagram, direct).<br>
<strong>Skills to develop:</strong> Objection handling under pressure, closing consistency, pipeline management<br>
<strong>Targets:</strong> 10+ closes per month, $12,000+ revenue<br>
<strong>Supervision:</strong> Weekly pipeline review with sales lead. Independent on day-to-day conversations.
</div>

<h4>Level 3: Senior Sales Executive (Month 6-12)</h4>
<div class="highlight-box">
<strong>What you do:</strong> Handle enterprise clients, complex negotiations, and high-value deals. Begin mentoring junior team members.<br>
<strong>Skills to develop:</strong> Enterprise selling, multi-stakeholder navigation, upselling, team leadership<br>
<strong>Targets:</strong> 15+ closes per month, $20,000+ revenue, 1-2 enterprise deals per month<br>
<strong>Supervision:</strong> Monthly strategy sessions. Full autonomy on all deals.
</div>

<h4>Level 4: Sales Lead (Year 1+)</h4>
<div class="highlight-box">
<strong>What you do:</strong> Lead the sales team. Set strategy, train new hires, manage key accounts, and drive revenue growth.<br>
<strong>Skills to develop:</strong> Team management, sales strategy, process optimization, hiring<br>
<strong>Targets:</strong> Team revenue targets, close rate improvement, team development<br>
<strong>Earning potential:</strong> Base salary + commission + equity participation
</div>

<h4>Building Your Personal Brand</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li><strong>Document your wins:</strong> Track every successful project, every 5-star review, every happy client message</li>
<li><strong>Build expertise:</strong> Become the go-to person for a specific niche (fashion, food, fitness)</li>
<li><strong>Share knowledge:</strong> Help junior team members — teaching reinforces your own mastery</li>
<li><strong>Stay current:</strong> Follow e-commerce trends, Shopify updates, and sales methodology developments</li>
<li><strong>Network:</strong> Build relationships with clients that transcend individual projects</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📅 Your First Week Action Plan</h3>
<p>After certification and video approval, here is exactly what your first week looks like.</p>

<h4>Day 1: Orientation and Observation</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Shadow a senior salesperson for the full day</li>
<li>Read all response templates out loud 3 times each</li>
<li>Review the last 10 closed deals in the team CRM</li>
<li>Set up your Fiverr account access with your supervisor</li>
<li>Write down 5 questions to ask your mentor</li>
</ul>
</div>

<h4>Day 2: Practice and Preparation</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Role-play 5 scenarios with a team member (they play the client)</li>
<li>Practice Price Sandwich delivery for all 3 tiers (record yourself)</li>
<li>Practice handling "too expensive" and "need to think about it" objections</li>
<li>Review the handoff template and fill in a practice one from a past deal</li>
<li>Memorize your 10-second value proposition</li>
</ul>
</div>

<h4>Day 3: First Real Lead (Supervised)</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Handle your first real Fiverr inquiry with your senior watching</li>
<li>Senior provides real-time guidance if needed (they can see your messages)</li>
<li>Debrief after the conversation: what went well, what to improve</li>
<li>Handle 2-3 more leads with decreasing supervision</li>
<li>Complete your first EOD (End of Day) report</li>
</ul>
</div>

<h4>Day 4-5: Increasing Independence</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Handle all incoming leads independently</li>
<li>Senior reviews conversations at end of day (not real-time)</li>
<li>Complete full pipeline tracking for every lead</li>
<li>Aim for your first close by Day 5</li>
<li>Complete handoff documentation for any closed deal</li>
<li>Daily debrief with mentor: wins, losses, lessons</li>
</ul>
</div>

<h4>Day 6-7: Full Autonomy with Review</h4>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>Handle all leads independently without real-time supervision</li>
<li>Weekly pipeline review with sales lead</li>
<li>Review your metrics: response time, qualification accuracy, close rate</li>
<li>Set goals for Week 2 based on Week 1 performance</li>
<li>Continue until 10 successful orders = full independence</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎥 After Passing: Video Submission</h3>
<p>Once you score 20/20, you must record a <strong>30-minute video walkthrough</strong> demonstrating your knowledge.</p>
<div class="highlight-box">
<strong>Video Structure (30 minutes):</strong>
<ul style="margin-bottom: 0;">
<li><strong>Introduction (2 min):</strong> Your name, why you want this role, what excites you about sales</li>
<li><strong>Knowledge Demo (10 min):</strong> Walk through key concepts in YOUR words — M.T.N.D., package tiers, qualification, the sales flow</li>
<li><strong>Scenario Handling (15 min):</strong> Handle a price objection, "let me think about it," a competitor comparison, and demonstrate a full close sequence</li>
<li><strong>Closing (3 min):</strong> What will make you successful in this role, any questions for the team</li>
</ul>
</div>
<div class="warning-box" style="margin-top: 15px;">
<strong>Video Requirements:</strong>
<ul style="margin-bottom: 0;">
<li>25-35 minutes total</li>
<li>Screen share + face visible (Loom or similar)</li>
<li>Clear audio — no background noise</li>
<li>Demonstrates genuine understanding (not reading notes)</li>
<li>Shows confidence in pricing conversations</li>
<li>Uses actual techniques by name (not generic responses)</li>
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
<h3>🏅 The Sales Professional's Creed</h3>
<p>You have completed the most comprehensive sales training program in the digital services industry. You are no longer just someone who "does sales." You are a <strong>Digital Heroes Sales Professional.</strong></p>

<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3)); border: none; padding: 30px;">
<p style="font-size: 1.1em; line-height: 1.8;"><strong>I commit to excellence</strong> — not because someone is watching, but because that is who I am. I do not cut corners. I do not take shortcuts. I follow the SOP because it works.</p>

<p style="font-size: 1.1em; line-height: 1.8;"><strong>I take pride in premium service</strong> — I will never apologize for our pricing because I know the value we deliver. I will never discount because I respect our work and our team. I will present our packages with conviction because I have seen the results.</p>

<p style="font-size: 1.1em; line-height: 1.8;"><strong>I am dedicated to genuine client success</strong> — I do not sell people things they do not need. I qualify honestly, I recommend honestly, and I deliver honestly. My clients succeed because I set them up for success from the first conversation.</p>

<p style="font-size: 1.1em; line-height: 1.8;"><strong>I commit to ongoing learning</strong> — This certification is not the end. I will review my conversations weekly. I will study new techniques. I will ask for feedback. I will push past my comfort zone because that is where growth lives.</p>

<p style="font-size: 1.1em; line-height: 1.8;"><strong>I am disciplined when motivation fails</strong> — I show up every day. I respond fast. I follow up consistently. I track my numbers. I do the work when it is hard because that is what separates professionals from amateurs.</p>

<p style="font-size: 1.1em; line-height: 1.8; margin-bottom: 0;"><strong>I am a Digital Heroes Sales Professional.</strong> And I am just getting started.</p>
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
You have come this far. Finish strong.
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

// Expose all content and quiz variables to window for app lookup
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
