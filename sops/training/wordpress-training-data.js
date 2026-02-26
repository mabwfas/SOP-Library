// WordPress Developer Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program
// 10 Tasks, 100+ Quiz Questions, Deep Content

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "WordPress Developer Mindset",
        description: "Building websites that CONVERT — Your code drives revenue",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Read ALL content sections completely",
            "🎯 Understand: The revenue impact of your work",
            "🧠 Learn: Digital Heroes WordPress Standards"
        ]
    },
    {
        id: 3,
        title: "WordPress Core Architecture",
        description: "Themes, Plugins, Database & The Loop",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🏗️ Master: Theme hierarchy & template system",
            "🔄 Understand: The WordPress Loop",
            "🗄️ Learn: Database structure & wp_options"
        ]
    },
    {
        id: 4,
        title: "Theme Development",
        description: "Custom Themes from Scratch",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🎨 Master: Template hierarchy",
            "📁 Learn: Required theme files & structure",
            "📱 Build: Mobile-first responsive themes"
        ]
    },
    {
        id: 5,
        title: "Custom Post Types & Taxonomies",
        description: "Extending WordPress Data Model",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📦 Create: Custom post types with register_post_type()",
            "🏷️ Build: Custom taxonomies",
            "🔧 Learn: Advanced Custom Fields (ACF)"
        ]
    },
    {
        id: 6,
        title: "WooCommerce Development",
        description: "E-Commerce Store Setup & Customization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "🛒 Master: WooCommerce hooks & filters",
            "💳 Setup: Payment gateways & shipping",
            "📦 Learn: Product types & variations"
        ]
    },
    {
        id: 7,
        title: "Plugin Development",
        description: "Building Custom WordPress Plugins",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "🔌 Master: Plugin architecture & activation hooks",
            "🪝 Learn: Actions & Filters API",
            "🗄️ Build: Custom database tables"
        ]
    },
    {
        id: 8,
        title: "Security & Hardening",
        description: "Protecting WordPress Sites",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔒 Master: Data sanitization & validation",
            "🛡️ Learn: Nonce verification & CSRF protection",
            "⚠️ Understand: SQL injection & XSS prevention"
        ]
    },
    {
        id: 9,
        title: "Performance Optimization",
        description: "Speed is Revenue — Core Web Vitals",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "⚡ Target: 90+ PageSpeed scores",
            "🖼️ Master: Image optimization & lazy loading",
            "📦 Learn: Caching strategies & CDN setup"
        ]
    },
    {
        id: 10,
        title: "REST API & Headless WordPress",
        description: "Modern WordPress Development",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🌐 Master: WP REST API endpoints",
            "🔌 Build: Custom API routes",
            "⚛️ Learn: Headless WordPress with React/Next.js"
        ]
    },
    {
        id: 11,
        title: "Deployment & Final Exam",
        description: "Launch Checklist & Certification",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🚀 Master: Staging → Production workflow",
            "📋 Learn: Pre-launch QA checklist",
            "🎓 Complete: Final Certification Exam (20/20)"
        ]
    }
];

// =============================================================================
// TASK 1: WORDPRESS DEVELOPER MINDSET
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

const task2Content = `
<h2>📚 PART 1: THE FOUNDATION — Code That CONVERTS</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(6, 182, 212, 0.15)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;">🚀 Welcome to Digital Heroes — You Are Part of Something Bigger</h3>
    <p>Before we dive into WordPress development, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #0EA5E9; padding: 20px; margin: 15px 0;">
        <strong style="color: #38BDF8;">🎯 Our Journey: Point A to Point B</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(14, 165, 233, 0.2);">
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
            <strong style="color: #38BDF8; font-size: 1.2em;">⭐ YOU (WordPress Developer)</strong> → <strong>THE BUILDER — deliver quality websites that drive client revenue</strong><br>
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
        <p style="margin: 10px 0 0 0;">As a WordPress developer, you are the <strong>BUILDER</strong> of Digital Heroes. When you deliver a fast, secure, beautifully coded WordPress site, you're creating client satisfaction that generates 5-star reviews. WordPress powers 43% of the internet — mastering it makes you invaluable.</p>
    </div>
    <p style="color: #F472B6; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No quality development = No reviews = No algorithm boost = Chain breaks. You ARE the backbone.</p>
</div>

<div class="content-section">
    <h3>🎯 WordPress vs Shopify — Why Both Matter</h3>
    <p>Digital Heroes serves clients on <strong>both</strong> platforms. Here's when we use each:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Use WordPress When:</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Use Shopify When:</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Content-heavy sites (blogs, portfolios)<br>
                • Custom web applications<br>
                • Membership sites<br>
                • Complex multi-vendor marketplaces<br>
                • SEO-critical projects<br>
                • Custom functionality needed
            </td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Pure e-commerce stores<br>
                • Quick store launches<br>
                • Clients who want simple management<br>
                • Subscription box businesses<br>
                • Dropshipping stores
            </td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>👤 The Two Types of WordPress Developers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚶 The Plugin Installer</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Installs 30+ plugins for everything<br>
                • Uses page builders for ALL layouts<br>
                • Can't debug without Google<br>
                • Ignores security updates<br>
                <em style="color: #EF4444;">Will be replaced by AI ❌</em>
            </td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎓 The Revenue Developer</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Writes custom code when plugins are overkill<br>
                • Understands WordPress core deeply<br>
                • Security-first mindset<br>
                • Optimizes for speed and SEO<br>
                <em style="color: #10B981;">Commands $80+/hour ✅</em>
            </td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 The Digital Heroes WordPress Standards</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.3);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);" colspan="2"><strong>❌ NEVER DO THESE</strong></td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edit core WordPress files</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use child themes or plugins instead</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use nulled/pirated themes or plugins</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security risk — instant termination</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skip backups before updates</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always backup DB + files first</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use admin as username</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom usernames + strong passwords</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deploy without testing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always test on staging first</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about WordPress Developer Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
        <li>💡 Questions test UNDERSTANDING, not memorization</li>
    </ul>
</div>
`;

// =============================================================================
// TASK 2: WORDPRESS CORE ARCHITECTURE
// =============================================================================
const task3Content = `
<h2>📚 TASK 2: WORDPRESS CORE ARCHITECTURE</h2>

<div class="content-section">
    <h3>🏗️ The WordPress Stack</h3>
    <p>WordPress runs on the LAMP/LEMP stack:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        <strong style="color: #0EA5E9;">SERVER</strong> (Linux/Ubuntu)<br>
        ├── <strong style="color: #10B981;">Web Server</strong> (Apache/Nginx)<br>
        ├── <strong style="color: #F59E0B;">PHP</strong> (8.0+ recommended)<br>
        ├── <strong style="color: #EC4899;">MySQL/MariaDB</strong> (Database)<br>
        └── <strong style="color: #8B5CF6;">WordPress</strong> (Application Layer)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-content/themes/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-content/plugins/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-content/uploads/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-config.php (⚠️ Critical)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;└── wp-admin/, wp-includes/ (❌ Never edit)
    </div>
</div>

<div class="content-section">
    <h3>🔄 The WordPress Loop</h3>
    <p>The Loop is the <strong>heart</strong> of WordPress. It processes and displays posts:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">&lt;?php</span> <span style="color: #c586c0;">if</span> ( <span style="color: #dcdcaa;">have_posts</span>() ) : <span style="color: #c586c0;">while</span> ( <span style="color: #dcdcaa;">have_posts</span>() ) : <span style="color: #dcdcaa;">the_post</span>(); <span style="color: #569cd6;">?&gt;</span><br><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;article&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;h2&gt;</span><span style="color: #569cd6;">&lt;?php</span> <span style="color: #dcdcaa;">the_title</span>(); <span style="color: #569cd6;">?&gt;</span><span style="color: #808080;">&lt;/h2&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #569cd6;">&lt;?php</span> <span style="color: #dcdcaa;">the_content</span>(); <span style="color: #569cd6;">?&gt;</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;/article&gt;</span><br><br>
        <span style="color: #569cd6;">&lt;?php</span> <span style="color: #c586c0;">endwhile</span>; <span style="color: #c586c0;">else</span> : <span style="color: #569cd6;">?&gt;</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;p&gt;</span>No posts found.<span style="color: #808080;">&lt;/p&gt;</span><br>
        <span style="color: #569cd6;">&lt;?php</span> <span style="color: #c586c0;">endif</span>; <span style="color: #569cd6;">?&gt;</span>
    </div>
</div>

<div class="content-section">
    <h3>📁 Template Hierarchy</h3>
    <p>WordPress uses a specific order to determine which template file to load:</p>
    <div class="highlight-box">
        <strong>Priority Order (Most → Least Specific):</strong>
        <ol>
            <li><code>single-{post-type}-{slug}.php</code> — Most specific</li>
            <li><code>single-{post-type}.php</code></li>
            <li><code>single.php</code></li>
            <li><code>singular.php</code></li>
            <li><code>index.php</code> — Ultimate fallback</li>
        </ol>
    </div>
    <div class="warning-box">
        <strong>⚠️ Critical Rule:</strong> Every theme MUST have <code>index.php</code> and <code>style.css</code> at minimum.
    </div>
</div>

<div class="content-section">
    <h3>🗄️ WordPress Database Tables</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Table</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Purpose</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_posts</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All content (posts, pages, CPTs, revisions)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_postmeta</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom fields for posts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_options</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Site settings (⚠️ autoload matters!)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_users</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User accounts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_terms</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Categories, tags, custom taxonomies</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about WordPress Core Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

// =============================================================================
// TASKS 3-10: Content placeholders (study guides + quizzes active)
// =============================================================================
const task4Content = `
<h2>📚 TASK 3: THEME DEVELOPMENT</h2>

<div class="content-section">
    <h3>📁 Required Theme Files</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        <strong style="color: #0EA5E9;">my-theme/</strong><br>
        ├── <strong>style.css</strong> (Theme header + styles)<br>
        ├── <strong>index.php</strong> (Main template)<br>
        ├── <strong>functions.php</strong> (Theme setup & hooks)<br>
        ├── <strong>header.php</strong> (Site header)<br>
        ├── <strong>footer.php</strong> (Site footer)<br>
        ├── <strong>sidebar.php</strong> (Widget area)<br>
        ├── <strong>single.php</strong> (Single post)<br>
        ├── <strong>page.php</strong> (Static pages)<br>
        ├── <strong>archive.php</strong> (Post archives)<br>
        ├── <strong>search.php</strong> (Search results)<br>
        ├── <strong>404.php</strong> (Error page)<br>
        ├── template-parts/ (Reusable components)<br>
        ├── assets/css/ (Stylesheets)<br>
        ├── assets/js/ (Scripts)<br>
        └── assets/images/ (Theme images)
    </div>
</div>

<div class="content-section">
    <h3>⚙️ functions.php Essentials</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;">// Theme Setup</span><br>
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">mytheme_setup</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">add_theme_support</span>( <span style="color: #ce9178;">'title-tag'</span> );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">add_theme_support</span>( <span style="color: #ce9178;">'post-thumbnails'</span> );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">add_theme_support</span>( <span style="color: #ce9178;">'custom-logo'</span> );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">register_nav_menus</span>([ <span style="color: #ce9178;">'primary'</span> => <span style="color: #ce9178;">'Primary Menu'</span> ]);<br>
        }<br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'after_setup_theme'</span>, <span style="color: #ce9178;">'mytheme_setup'</span> );<br><br>
        <span style="color: #6a9955;">// Enqueue Scripts & Styles (NEVER hardcode!)</span><br>
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">mytheme_scripts</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">wp_enqueue_style</span>( <span style="color: #ce9178;">'main-style'</span>, <span style="color: #dcdcaa;">get_stylesheet_uri</span>() );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">wp_enqueue_script</span>( <span style="color: #ce9178;">'main-js'</span>, <span style="color: #dcdcaa;">get_template_directory_uri</span>() . <span style="color: #ce9178;">'/assets/js/main.js'</span>, [], <span style="color: #b5cea8;">false</span>, <span style="color: #b5cea8;">true</span> );<br>
        }<br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'wp_enqueue_scripts'</span>, <span style="color: #ce9178;">'mytheme_scripts'</span> );
    </div>
    <div class="warning-box">
        <strong>⚠️ NEVER hardcode CSS/JS in header.php!</strong> Always use <code>wp_enqueue_style()</code> and <code>wp_enqueue_script()</code>. This prevents conflicts and enables proper dependency management.
    </div>
</div>

<div class="content-section">
    <h3>👶 Child Themes — The Safe Way to Customize</h3>
    <div class="highlight-box">
        <strong>Why Child Themes?</strong>
        <ul>
            <li>Parent theme updates won't overwrite your changes</li>
            <li>Clean separation of customizations</li>
            <li>Easy to revert changes</li>
        </ul>
        <strong>Required files:</strong> <code>style.css</code> (with Template header) + <code>functions.php</code>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Theme Development</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 4: CUSTOM POST TYPES & TAXONOMIES</h2>

<div class="content-section">
    <h3>📦 Why Custom Post Types (CPTs)?</h3>
    <p>WordPress default content types (posts & pages) aren't enough for real projects. CPTs let you create <strong>any data structure</strong>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom Post Types Needed</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real Estate Site</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Properties, Agents, Testimonials</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Restaurant</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Menu Items, Locations, Reviews</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Portfolio</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Projects, Services, Team Members</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">E-Learning</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Courses, Lessons, Instructors</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>⚙️ Registering a Custom Post Type</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">dh_register_portfolio</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">register_post_type</span>( <span style="color: #ce9178;">'portfolio'</span>, [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'labels'</span> => [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'name'</span> => <span style="color: #ce9178;">'Portfolio'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'singular_name'</span> => <span style="color: #ce9178;">'Project'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;],<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'public'</span> => <span style="color: #b5cea8;">true</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'has_archive'</span> => <span style="color: #b5cea8;">true</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'supports'</span> => [<span style="color: #ce9178;">'title'</span>, <span style="color: #ce9178;">'editor'</span>, <span style="color: #ce9178;">'thumbnail'</span>, <span style="color: #ce9178;">'excerpt'</span>],<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'rewrite'</span> => [<span style="color: #ce9178;">'slug'</span> => <span style="color: #ce9178;">'projects'</span>],<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'menu_icon'</span> => <span style="color: #ce9178;">'dashicons-portfolio'</span>,<br>
        &nbsp;&nbsp;]);<br>
        }<br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'init'</span>, <span style="color: #ce9178;">'dh_register_portfolio'</span> );
    </div>
    <div class="highlight-box">
        <strong>Key Parameters:</strong>
        <ul>
            <li><code>public</code> — Makes CPT visible in admin and queryable on frontend</li>
            <li><code>has_archive</code> — Creates an archive listing page</li>
            <li><code>supports</code> — Controls which editor features appear (title, editor, thumbnail, etc.)</li>
            <li><code>rewrite</code> — Controls the URL slug structure</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🏷️ Custom Taxonomies</h3>
    <p>Taxonomies organize CPTs just like categories/tags organize posts:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #dcdcaa;">register_taxonomy</span>( <span style="color: #ce9178;">'project_type'</span>, <span style="color: #ce9178;">'portfolio'</span>, [<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'labels'</span> => [<span style="color: #ce9178;">'name'</span> => <span style="color: #ce9178;">'Project Types'</span>],<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'hierarchical'</span> => <span style="color: #b5cea8;">true</span>, <span style="color: #6a9955;">// like categories</span><br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'rewrite'</span> => [<span style="color: #ce9178;">'slug'</span> => <span style="color: #ce9178;">'project-type'</span>],<br>
        ]);
    </div>
</div>

<div class="content-section">
    <h3>🔧 Advanced Custom Fields (ACF)</h3>
    <p>ACF is the <strong>#1 plugin</strong> for adding custom meta fields to CPTs without writing code for meta boxes:</p>
    <ul>
        <li><strong>Field Types:</strong> Text, Image, Gallery, Repeater, Flexible Content, Relationship</li>
        <li><strong>Usage:</strong> <code>get_field('field_name')</code> to retrieve, <code>the_field('field_name')</code> to display</li>
        <li><strong>Pro tip:</strong> Export ACF field groups as PHP for version control</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔍 Querying Custom Post Types</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #569cd6;">$projects</span> = <span style="color: #c586c0;">new</span> <span style="color: #dcdcaa;">WP_Query</span>([ <br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'post_type'</span> => <span style="color: #ce9178;">'portfolio'</span>,<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'posts_per_page'</span> => <span style="color: #b5cea8;">12</span>,<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'orderby'</span> => <span style="color: #ce9178;">'date'</span>,<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'order'</span> => <span style="color: #ce9178;">'DESC'</span>,<br>
        ]);
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Custom Post Types & Taxonomies</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: WOOCOMMERCE DEVELOPMENT</h2>

<div class="content-section">
    <h3>🛒 WooCommerce Architecture</h3>
    <p>WooCommerce is the <strong>#1 e-commerce plugin</strong> powering 28% of all online stores. It extends WordPress with:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Component</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Post Type / Table</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>product</code> (CPT)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Orders</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>shop_order</code> (CPT in wp_posts)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variations</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>product_variation</code> (child posts)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Coupons</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>shop_coupon</code> (CPT)</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🪝 Essential WooCommerce Hooks</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hook</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Purpose</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_thankyou</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fires after order placed (thank you page)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_checkout_fields</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modify checkout form fields</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_product_tabs</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add/remove product page tabs</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_product_add_to_cart_text</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Change Add to Cart button text</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🎨 Template Overrides</h3>
    <p>To customize WooCommerce templates <strong>safely</strong>:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        Copy from: <strong style="color: #EF4444;">wp-content/plugins/woocommerce/templates/</strong><br>
        Paste to: <strong style="color: #10B981;">your-theme/woocommerce/</strong><br><br>
        Example:<br>
        <span style="color: #10B981;">your-theme/woocommerce/single-product.php</span><br>
        <span style="color: #10B981;">your-theme/woocommerce/cart/cart.php</span>
    </div>
    <div class="warning-box">
        <strong>⚠️ NEVER edit plugin files directly!</strong> Always use template overrides in your theme.
    </div>
</div>

<div class="content-section">
    <h3>💳 Payment Gateway Basics</h3>
    <p>Custom payment gateways extend <code>WC_Payment_Gateway</code>:</p>
    <ul>
        <li><strong>process_payment()</strong> — Handle the actual payment</li>
        <li><strong>init_form_fields()</strong> — Define settings fields</li>
        <li><strong>WC()->cart->get_total()</strong> — Get current cart total</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about WooCommerce Development</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;
const task7Content = `
<h2>📚 TASK 6: PLUGIN DEVELOPMENT</h2>

<div class="content-section">
    <h3>🔌 Plugin Architecture</h3>
    <p>Every WordPress plugin needs a <strong>plugin header comment</strong> in its main PHP file:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #569cd6;">&lt;?php</span><br>
        <span style="color: #6a9955;">/**</span><br>
        <span style="color: #6a9955;"> * Plugin Name: DH Custom Features</span><br>
        <span style="color: #6a9955;"> * Description: Custom functionality for Digital Heroes</span><br>
        <span style="color: #6a9955;"> * Version: 1.0.0</span><br>
        <span style="color: #6a9955;"> * Author: Digital Heroes</span><br>
        <span style="color: #6a9955;"> */</span>
    </div>
</div>

<div class="content-section">
    <h3>🪝 Actions vs Filters</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Actions</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Filters</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Execute code at specific points<br>
                • Don't return values<br>
                • <code>add_action()</code> / <code>do_action()</code><br>
                • Example: <code>wp_head</code>, <code>init</code>, <code>save_post</code>
            </td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Modify data and return it<br>
                • MUST return a value<br>
                • <code>add_filter()</code> / <code>apply_filters()</code><br>
                • Example: <code>the_content</code>, <code>the_title</code>
            </td>
        </tr>
    </table>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Action example - run code when post is saved</span><br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'save_post'</span>, <span style="color: #ce9178;">'my_save_function'</span>, <span style="color: #b5cea8;">10</span>, <span style="color: #b5cea8;">2</span> );<br><br>
        <span style="color: #6a9955;">// Filter example - modify content before display</span><br>
        <span style="color: #dcdcaa;">add_filter</span>( <span style="color: #ce9178;">'the_content'</span>, <span style="color: #ce9178;">'my_content_filter'</span> );<br>
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">my_content_filter</span>( <span style="color: #569cd6;">$content</span> ) {<br>
        &nbsp;&nbsp;<span style="color: #c586c0;">return</span> <span style="color: #569cd6;">$content</span> . <span style="color: #ce9178;">'&lt;p&gt;Extra content&lt;/p&gt;'</span>;<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>⚙️ Activation & Deactivation Hooks</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Runs once when plugin is activated</span><br>
        <span style="color: #dcdcaa;">register_activation_hook</span>( <span style="color: #569cd6;">__FILE__</span>, <span style="color: #ce9178;">'dh_plugin_activate'</span> );<br><br>
        <span style="color: #6a9955;">// Cleanup on uninstall (not deactivation!)</span><br>
        <span style="color: #dcdcaa;">register_uninstall_hook</span>( <span style="color: #569cd6;">__FILE__</span>, <span style="color: #ce9178;">'dh_plugin_uninstall'</span> );
    </div>
    <div class="highlight-box">
        <strong>Key Functions:</strong>
        <ul>
            <li><code>add_menu_page()</code> — Add item to wp-admin sidebar</li>
            <li><code>add_shortcode()</code> — Register a shortcode like [my_shortcode]</li>
            <li><code>dbDelta()</code> — Create/modify custom database tables safely</li>
            <li><code>__() / _e()</code> — Make text translatable (i18n)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Priority Parameter</h3>
    <p>The third parameter in <code>add_action()</code> controls execution order:</p>
    <ul>
        <li><strong>Lower number = runs earlier</strong> (default is 10)</li>
        <li>Priority 1 runs before priority 10, which runs before priority 99</li>
        <li>Use this to ensure your code runs at the right time relative to other hooks</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Plugin Development</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: SECURITY & HARDENING</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🔒 Security is NON-NEGOTIABLE</h3>
    <p>A hacked client website = <strong>destroyed trust, lost revenue, legal liability</strong>. At Digital Heroes, security failures are career-ending. Master these concepts.</p>
</div>

<div class="content-section">
    <h3>🛡️ Input Sanitization vs Output Escaping</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sanitize INPUT</strong> (going into DB)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Escape OUTPUT</strong> (displayed to user)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                <code>sanitize_text_field()</code><br>
                <code>sanitize_email()</code><br>
                <code>absint()</code><br>
                <code>wp_kses()</code> — Allow specific HTML tags
            </td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                <code>esc_html()</code> — Safe HTML display<br>
                <code>esc_attr()</code> — Safe for attributes<br>
                <code>esc_url()</code> — Safe URLs<br>
                <code>esc_js()</code> — Safe for inline JS
            </td>
        </tr>
    </table>
    <div class="warning-box">
        <strong>⚠️ Golden Rule:</strong> Sanitize early, escape late. NEVER trust user input. ALWAYS escape output.
    </div>
</div>

<div class="content-section">
    <h3>🔐 Nonces (CSRF Protection)</h3>
    <p>Nonces verify that a request came from your site, not an attacker:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Create nonce in form</span><br>
        <span style="color: #dcdcaa;">wp_nonce_field</span>( <span style="color: #ce9178;">'my_action'</span>, <span style="color: #ce9178;">'my_nonce'</span> );<br><br>
        <span style="color: #6a9955;">// Verify nonce on submission</span><br>
        <span style="color: #c586c0;">if</span> ( ! <span style="color: #dcdcaa;">wp_verify_nonce</span>( <span style="color: #569cd6;">$_POST</span>[<span style="color: #ce9178;">'my_nonce'</span>], <span style="color: #ce9178;">'my_action'</span> ) ) {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">die</span>( <span style="color: #ce9178;">'Security check failed'</span> );<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>💉 SQL Injection Prevention</h3>
    <p><strong>ALWAYS</strong> use <code>$wpdb->prepare()</code> for database queries:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #EF4444;">// ❌ NEVER DO THIS</span><br>
        <span style="color: #569cd6;">$wpdb</span>-><span style="color: #dcdcaa;">query</span>( <span style="color: #ce9178;">"SELECT * FROM users WHERE id = </span><span style="color: #569cd6;">$_GET</span>[<span style="color: #ce9178;">'id'</span>]<span style="color: #ce9178;">"</span> );<br><br>
        <span style="color: #10B981;">// ✅ ALWAYS DO THIS</span><br>
        <span style="color: #569cd6;">$wpdb</span>-><span style="color: #dcdcaa;">prepare</span>( <span style="color: #ce9178;">"SELECT * FROM users WHERE id = %d"</span>, <span style="color: #569cd6;">$id</span> );
    </div>
</div>

<div class="content-section">
    <h3>🔑 Capability Checks</h3>
    <p>Always verify users have permission before executing sensitive actions:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #c586c0;">if</span> ( ! <span style="color: #dcdcaa;">current_user_can</span>( <span style="color: #ce9178;">'manage_options'</span> ) ) {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">wp_die</span>( <span style="color: #ce9178;">'Unauthorized access'</span> );<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>📋 Hardening Checklist</h3>
    <ul>
        <li>✅ Set <code>wp-config.php</code> permissions to <strong>440 or 400</strong></li>
        <li>✅ Hide WordPress version (remove <code>wp_generator</code>, delete <code>readme.html</code>)</li>
        <li>✅ Add <code>X-Frame-Options</code> header to prevent clickjacking</li>
        <li>✅ Enable two-factor authentication for all admin users</li>
        <li>✅ Use strong, unique usernames (never "admin")</li>
        <li>✅ Disable file editing in wp-admin: <code>define('DISALLOW_FILE_EDIT', true);</code></li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Security & Hardening</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;
const task9Content = `
<h2>📚 TASK 8: PERFORMANCE OPTIMIZATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(245, 158, 11, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">⚡ Speed = Revenue</h3>
    <p>A 1-second delay in page load = <strong>7% loss in conversions</strong>. Google uses Core Web Vitals as a ranking factor. Fast sites win.</p>
</div>

<div class="content-section">
    <h3>📊 Core Web Vitals</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Measures</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Target</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Largest Contentful Paint</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2.5s</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>INP</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interaction to Next Paint</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 200ms</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cumulative Layout Shift</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 0.1</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🗄️ Caching Layers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Does</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Page Cache</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stores full HTML pages — skips PHP execution</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Object Cache</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Redis/Memcached — caches repeated DB queries</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Browser Cache</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client stores static assets locally</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CDN</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Delivery Network — serves from nearest edge</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization</h3>
    <ul>
        <li><strong>WebP format</strong> — 25-35% smaller than JPEG with same quality</li>
        <li><strong>Lazy loading</strong> — Built into WordPress since 5.5: <code>loading="lazy"</code></li>
        <li><strong>Responsive images</strong> — Use <code>srcset</code> for different screen sizes</li>
        <li><strong>Compress before upload</strong> AND use server-side optimization plugins</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚙️ Transients API</h3>
    <p>Cache expensive operations with built-in WordPress transients:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Store data for 12 hours</span><br>
        <span style="color: #dcdcaa;">set_transient</span>( <span style="color: #ce9178;">'api_data'</span>, <span style="color: #569cd6;">$data</span>, <span style="color: #b5cea8;">12</span> * <span style="color: #b5cea8;">HOUR_IN_SECONDS</span> );<br><br>
        <span style="color: #6a9955;">// Retrieve cached data</span><br>
        <span style="color: #569cd6;">$cached</span> = <span style="color: #dcdcaa;">get_transient</span>( <span style="color: #ce9178;">'api_data'</span> );
    </div>
    <div class="highlight-box">
        <strong>wp_options autoload tip:</strong> Set autoload to <code>'no'</code> for data not needed on every page load. Too many autoloaded options = slow TTFB.
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Performance Optimization</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 9: REST API & HEADLESS WORDPRESS</h2>

<div class="content-section">
    <h3>🌐 The WordPress REST API</h3>
    <p>WordPress exposes all data via RESTful endpoints at <code>/wp-json/wp/v2/</code>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Endpoint</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Returns</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/posts</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All posts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/pages</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All pages</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/media</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Media library items</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/users</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User profiles</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔌 Custom REST Routes</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'rest_api_init'</span>, <span style="color: #c586c0;">function</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">register_rest_route</span>( <span style="color: #ce9178;">'dh/v1'</span>, <span style="color: #ce9178;">'/projects'</span>, [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'methods'</span> => <span style="color: #ce9178;">'GET'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'callback'</span> => <span style="color: #ce9178;">'get_projects'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'permission_callback'</span> => <span style="color: #ce9178;">'__return_true'</span>,<br>
        &nbsp;&nbsp;]);<br>
        });
    </div>
    <div class="highlight-box">
        <strong>Key Concepts:</strong>
        <ul>
            <li><code>rest_api_init</code> — Hook that fires when REST API initializes</li>
            <li><code>permission_callback</code> — Controls who can access the endpoint</li>
            <li><code>WP_REST_Response</code> — Format responses with proper status codes</li>
            <li><code>register_rest_field()</code> — Add custom data to existing endpoints</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>⚛️ Headless WordPress</h3>
    <p>In headless mode, WordPress serves as a <strong>backend API only</strong>. The frontend is a separate app:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Traditional WP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Headless WP</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP handles both backend + frontend<br>PHP templates render pages<br>Tightly coupled</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP = API backend only<br>React/Next.js/Vue = frontend<br>Better performance & flexibility</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔒 API Security</h3>
    <ul>
        <li><strong>Application Passwords</strong> or <strong>OAuth</strong> for write operations</li>
        <li>Use <code>rest_authentication_errors</code> filter to restrict access</li>
        <li>Never expose sensitive data on public endpoints</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about REST API & Headless WordPress</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 10: DEPLOYMENT & FINAL EXAM</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(14, 165, 233, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🚀 Launch Day — Where It All Comes Together</h3>
    <p>A smooth deployment is the <strong>culmination of everything you've learned</strong>. One mistake here and clients lose money. Follow the process.</p>
</div>

<div class="content-section">
    <h3>📋 Pre-Launch Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Category</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Checks</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All pages complete, no lorem ipsum, images optimized</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Forms</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All forms tested, email notifications working</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta titles, descriptions, sitemap submitted</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SSL active, file permissions, login hardened</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed 90+, caching enabled, CDN active</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tested on iOS + Android, responsive layout verified</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Staging → Production Workflow</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2.2;">
        <span style="color: #F59E0B;">1.</span> Develop on <strong style="color: #60A5FA;">LOCAL</strong> environment<br>
        <span style="color: #F59E0B;">2.</span> Push code to <strong style="color: #A78BFA;">GIT</strong> repository<br>
        <span style="color: #F59E0B;">3.</span> Deploy to <strong style="color: #FBBF24;">STAGING</strong> for client review<br>
        <span style="color: #F59E0B;">4.</span> Client approves → <strong style="color: #10B981;">PRODUCTION</strong> deploy<br>
        <span style="color: #F59E0B;">5.</span> Post-launch: monitor uptime, errors, performance
    </div>
</div>

<div class="content-section">
    <h3>🗄️ Database Migration</h3>
    <ul>
        <li><strong>WP Migrate DB</strong> or <strong>search-replace-db</strong> for URL replacements</li>
        <li>Always use <strong>serialization-safe</strong> find/replace (not raw SQL!)</li>
        <li>Enable debug mode: <code>define('WP_DEBUG', true)</code> in wp-config.php</li>
        <li>Production: Log errors to file, <strong>NEVER display to users</strong></li>
    </ul>
</div>

<div class="content-section">
    <h3>🔧 Essential Production Settings</h3>
    <ul>
        <li>✅ <strong>SSL/HTTPS</strong> — Required by Google for rankings</li>
        <li>✅ <strong>.htaccess</strong> — URL rewrites, redirects, security headers</li>
        <li>✅ <strong>robots.txt</strong> — Allow search engines, block sensitive dirs</li>
        <li>✅ <strong>WP Cron</strong> — Pseudo-cron triggered by visits (use real cron for reliability)</li>
        <li>✅ <strong>Backups</strong> — Daily automated backups stored offsite</li>
        <li>✅ <strong>Monitoring</strong> — Uptime, performance, security scans, error logs</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎓 Final Certification Exam</h3>
    <ul>
        <li>📝 <strong>20 questions</strong> covering ALL 10 tasks</li>
        <li>🎯 Score <strong>20/20</strong> to earn your WordPress Developer Certificate</li>
        <li>🏆 Proves you're a Digital Heroes certified WordPress developer</li>
    </ul>
</div>
`;

// =============================================================================
// QUIZ QUESTIONS — ALL 10 TASKS
// =============================================================================



console.log("WordPress Developer Training Data Loaded!");


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks about your salary during lunch. What should you do?", o: ["Politely decline - discussing salary leads to immediate termination", "Share it openly — this reflects the standard operating procedure most WordPress teams follow", "Share only with close friends — this reflects the standard operating procedure most WordPress teams follow", "Tell them a lower number — this reflects the standard operating procedure most WordPress teams follow"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. What is the immediate consequence?", o: ["Verbal warning", "Half-day salary deduction", "Written warning recorded", "No consequence if less than 30 mins late"], c: 1 },
    { q: "What is Digital Heroes Point B revenue target for 2027?", o: ["15-20 Crores", "40 Crores", "75 Crores", "100 Crores"], c: 2 },
    { q: "A team member spreads negative talk. The correct action per zero-tolerance policy is:", o: ["Confront them directly — this reflects the standard operating procedure most WordPress teams follow", "Ignore it — this reflects the standard operating procedure most WordPress teams follow", "Discuss in team group chat — this reflects the standard operating procedure most WordPress teams follow", "Report only to HR or Delhi Team - conspiracy leads to termination"], c: 3 },
    { q: "What is the correct procedure to apply for casual leave?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name Dates Reason Coverage", "Tell your teammate to cover — this reflects the standard operating procedure most WordPress teams follow", "Send WhatsApp to HR on morning of leave — this reflects the standard operating procedure most WordPress teams follow", "Email the CEO directly — this reflects the standard operating procedure most WordPress teams follow"], c: 0 },
    { q: "According to the equity-sharing model, who is eligible from Day 1?", o: ["Full-time after 1 year — this is the standard approach", "Everyone including interns", "Senior developers only", "Exceptional KPI scorers — this is the standard approach"], c: 1 },
    { q: "Your manager sends you a message. What is the maximum response time?", o: ["2 Hours — this reflects the standard operating procedure most WordPress teams follow", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During probation, you want a day off. What does leave policy say?", o: ["Take 1 CL with manager approval — this aligns with WordPress best practices and ensures consistent results across different project types", "Take unpaid leave with HR approval", "Probation gets 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated. How should you view this client per Digital Heroes philosophy?", o: ["An ally whose problem is your common enemy", "A burden on resources", "A problem to manage — this reflects the standard operating procedure most WordPress teams follow", "Someone to transfer to management"], c: 0 },
    { q: "What is the minimum internet speed for WFH?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement"], c: 1 },
    { q: "What happens with a KPI score of 55%?", o: ["5-10% increment minimum", "10-15% increment", "No increment and placed on PIP", "Verbal warning but salary stays"], c: 2 },
    { q: "A colleague takes freelance Shopify projects. This is classified as:", o: ["Acceptable outside work hours — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "Allowed with prior written approval", "Fine if no performance impact", "Moonlighting - zero-tolerance termination offense"], c: 3 },
    { q: "Which reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant - volume and commitment matter more", "Top university degrees prioritized", "Talent is most important — this reflects the standard operating procedure most WordPress teams follow", "Natural talent determines ceiling"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "60 days", "14 days", "30 days"], c: 3 },
    { q: "What is an SOP and how should employees treat it?", o: ["Flexible suggestion by team — this reflects the standard operating procedure most WordPress teams follow", "Rough guideline reviewed monthly", "The Law - best known way to do a task perfectly mandatory daily", "Reference only for new employees"], c: 2 }
];

const task2Quiz = [
    { q: "A client wants a simple blog. A junior developer installs Elementor, 12 plugins, and a premium theme. The 'Revenue Developer' approach instead is:", o: ["Use the same stack but optimize each plugin's settings for maximum performance output — this method has been validated through extensive use across production WordPress sites and is the standard", "Build a lightweight custom theme with only essential functionality — fewer plugins means faster load times and fewer security vulnerabilities", "Install even more plugins to cover every possible feature the client might need in the future", "Use a page builder but remove unused modules to balance between convenience and performance metrics"], c: 1 },
    { q: "Your PageSpeed score is 45 on a client site. The PM says 'Client didn't ask for speed.' The correct WordPress developer mindset is:", o: ["Agree — scope is scope, and doing extra work for free sets a bad precedent with the client and ensures long-term sustainability across deliverables", "Speed IS conversion — a 45 score costs the client revenue, and raising it is part of delivering quality work", "Focus only on the visual design since that's what clients actually evaluate during their review process", "Add a caching plugin and move on — 45 to 60 is good enough for most small business websites"], c: 1 },
    { q: "WordPress powers 43% of the internet. For Digital Heroes, this matters because:", o: ["It means there's too much competition and the agency should focus exclusively on Shopify projects instead — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles", "WordPress is easy enough that anyone can build sites, so the agency should charge lower hourly rates", "The massive market presence creates an enormous demand pool for skilled developers who understand WordPress core deeply", "It proves WordPress is outdated since newer platforms would have overtaken it if it were still relevant"], c: 2 },
    { q: "You're asked to build a membership site. The correct platform choice per Digital Heroes standards is:", o: ["WordPress — membership sites with custom access levels, content dripping, and community features are WordPress strengths", "Always Shopify — Digital Heroes is a Shopify-exclusive agency regardless of the project requirements given and ensures long-term sustainability across deliverables", "Build from scratch using raw PHP since premade platforms limit customization for complex membership flows", "Use Wix or Squarespace since membership sites don't require the complexity that WordPress offers developers"], c: 0 },
    { q: "The 'Plugin Installer' vs 'Revenue Developer' distinction matters because:", o: ["Plugin Installers earn the same as Revenue Developers since clients can't tell the difference in the final output — this is the recommended approach based on current WordPress documentation and expert consensus today", "Revenue Developers command $80+/hour because they write custom code, understand security, optimize for speed, and can't be replaced by AI", "The distinction is artificial — all WordPress developers install plugins and there's no meaningful difference in skillset", "Plugin Installers are actually more efficient since they deliver projects faster using pre-built solutions always"], c: 1 },
    { q: "Digital Heroes standard says 'NEVER use nulled/pirated themes or plugins.' The real risk beyond ethics is:", o: ["Nulled themes contain injected malware/backdoors that compromise server security — a data breach means client termination and legal liability", "Nulled themes look slightly different from originals which trained clients will notice during design review — implementing this correctly requires understanding the full context of how WordPress components interact", "They lack customer support but functionally work identically to licensed versions for production environments", "The risk is minimal on staging environments and they can be used temporarily during development phases only"], c: 0 },
    { q: "A client sends a 'small change request' — adding a custom calculator widget. As a WordPress developer, you should:", o: ["Assess scope — 'small' changes can be 1 hour or 20 hours; communicate the complexity and get PM approval before starting development", "Build it immediately to show proactivity and impress the client with your responsiveness on their project — taking this route minimizes risk while delivering professional-grade results to clients consistently", "Decline since it wasn't in the original scope and any additions require a formal change order from the sales team", "Use a free calculator plugin regardless of quality since it's faster than custom development for small requests"], c: 0 },
    { q: "When do you deploy directly to production without staging?", o: ["When the client urgently needs a tiny CSS fix that won't affect any other functionality on their live site — this ensures compliance with WordPress coding standards and prevents cascading issues in production", "After 6 PM when traffic is lower and the risk of users encountering issues is minimized significantly", "When the change is only a content update like text or image replacement on existing pages without code changes", "Never — Digital Heroes standard requires ALL changes go through staging first, regardless of how small they seem"], c: 3 },
    { q: "Your colleague uses 'admin' as the WordPress username on a client site. This violates standards because:", o: ["The 'admin' username is the first target in brute-force attacks — custom usernames with strong passwords are mandatory per company policy", "It doesn't really matter as long as they use a strong password and have two-factor authentication enabled on the account — experienced WordPress developers recognize this as the most reliable path for maintaining quality control", "Using 'admin' is fine for development environments and only needs to be changed before the production launch date", "The username 'admin' is deprecated in newer WordPress versions and will cause compatibility issues during updates"], c: 0 },
    { q: "The WordPress developer's role in the Digital Heroes chain is described as:", o: ["Secondary support — designers create the vision, developers just implement the static mockups into working code", "Code maintenance — developers keep existing sites running while the sales team brings in the actual revenue growth", "THE BUILDER — quality development drives client satisfaction which generates 5-star reviews and positions the algorithm for growth", "Back-end only — developers handle databases and APIs while designers handle everything the client actually sees and interacts with"], c: 2 }
];

const task3Quiz = [
    { q: "A site is slow. You check wp_options and find 200 rows with autoload='yes' totaling 5MB. The performance issue is:", o: ["The wp_options table is designed to handle unlimited autoloaded rows without any performance degradation concerns — this approach balances thoroughness with efficiency which is critical for agency-level project delivery", "The autoload flag is cosmetic and has no actual impact on database query performance or page load times", "Every page load queries ALL autoloaded options into memory — 5MB of autoloaded data causes significant server memory overhead on every request", "This is normal for a WordPress site with many plugins and shouldn't be optimized unless the server runs out of disk storage"], c: 2 },
    { q: "WordPress loads single-product-coffee.php on a product page. In the template hierarchy, this template is:", o: ["The MOST specific match — it targets a specific post type AND slug, taking priority over single-product.php and single.php", "The least specific fallback — WordPress checks this last when no other templates match the requested content and ensures long-term sustainability across deliverables", "Invalid naming — WordPress doesn't support slug-specific template files for custom post types at all", "Equally specific to single.php — WordPress randomly selects between them depending on the request timing"], c: 0 },
    { q: "You need to store a setting that every page uses. Where should it go?", o: ["In a custom JSON file in the theme directory since wp_options is only for WordPress core settings storage — this aligns with WordPress best practices and ensures consistent results across different project types", "A PHP constant in functions.php since hardcoded values load faster than any database query method available", "wp_postmeta on the homepage post since it's the most frequently accessed page on the entire website", "wp_options with autoload='yes' — this loads the value into memory once and serves it to all pages efficiently"], c: 3 },
    { q: "The WordPress Loop uses have_posts() and the_post(). What happens if you call the_title() OUTSIDE the Loop?", o: ["It may output unexpected results or the wrong title because the_post() hasn't set up the global $post object properly for that context", "It outputs the current page/post title correctly since WordPress automatically detects the global context — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "WordPress throws a fatal error and the page crashes completely because template tags require a Loop wrapper always", "It outputs nothing — all template tags return null when called outside a valid WordPress Loop structure"], c: 0 },
    { q: "A developer edits wp-includes/class-wp-query.php to fix a query issue. Why is this WRONG?", o: ["It's acceptable for urgent hotfixes that need to go live immediately before WordPress releases an official patch — this method has been validated through extensive use across production WordPress sites and is the standard", "Core file modifications get overwritten on every WordPress update — use filters and actions hooks instead for customizations", "It's fine if you document the change in the project README so future developers know about the modification made", "wp-includes files can be safely edited because WordPress creates backups automatically before each core update is applied"], c: 1 },
    { q: "wp_posts stores posts, pages, AND custom post types. This unified approach means:", o: ["It's a design flaw — different content types should have completely separate tables for better database organization", "One query with post_type parameter fetches any content type — CPTs, products, orders all live in the same table for unified querying", "It causes performance issues on sites with many content types since all data competes for the same table indexes", "Default post types use wp_posts — custom post types created by plugins always use their own separate database tables — this is the standard approach"], c: 1 },
    { q: "The wp-config.php file is marked as '⚠️ Critical' in WordPress architecture because:", o: ["It contains the database credentials, security keys, and debug settings — compromising it gives full access to the database and admin panel", "It's automatically regenerated during updates so any custom configurations added to it will be permanently lost — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles", "It only affects the admin panel — frontend visitors would see no difference even if the file was completely deleted", "It's a standard config file with minimal security implications comparable to any typical PHP application settings file"], c: 0 },
    { q: "A theme has index.php, single.php, and page.php. A user visits a category archive page. Which template loads?", o: ["page.php since categories are similar to pages in WordPress content hierarchy and use the same display template — this is the recommended approach based on current WordPress documentation and expert consensus today", "single.php since categories display individual posts and the single template handles all post display requests", "index.php — it's the ultimate fallback when no specific category.php, archive.php, or category-specific templates exist in the theme", "WordPress displays a 404 error because the theme is missing the required category.php template file for that request"], c: 2 },
    { q: "LAMP vs LEMP stack for WordPress: the key difference is:", o: ["LAMP uses Apache while LEMP uses Nginx — Nginx typically handles concurrent connections better and uses less memory for static content", "They are identical stacks with different naming conventions used by different hosting providers in various regions — implementing this correctly requires understanding the full context of how WordPress components interact", "LAMP is for Linux only while LEMP works across all operating systems including Windows and macOS environments", "LEMP is deprecated — all modern WordPress hosting has standardized on LAMP stack for production deployments now"], c: 0 },
    { q: "You see this query: SELECT * FROM wp_posts WHERE post_type='product' AND post_status='publish'. This returns:", o: ["All WooCommerce products regardless of their visibility settings, stock status, or catalog publication preferences", "An error since WooCommerce products use a separate custom table rather than the standard WordPress wp_posts table", "All published WooCommerce products — because WooCommerce stores products as CPTs in wp_posts with post_type 'product'", "Simple products — variable products and their variations are stored in a completely different database structure — this is the standard approach"], c: 2 }
];

const task4Quiz = [
    { q: "You create a custom theme. The minimum files required for WordPress to recognize it as a valid theme are:", o: ["style.css (with Theme header comment) and index.php — these two files are the absolute minimum for theme recognition", "functions.php and header.php — WordPress needs the setup functions and document header to initialize any theme properly", "index.php, header.php, footer.php, and sidebar.php — all four template files are required for a valid theme", "Style.css is needed — WordPress can auto-generate index.php from the default theme if it's not provided — this is the standard approach"], c: 0 },
    { q: "A developer adds CSS by writing <link> tags directly in header.php. The problem with this approach is:", o: ["It's the recommended method — hardcoding ensures the styles load before any plugin scripts for visual performance and ensures long-term sustainability across deliverables", "Hardcoding is faster because it skips the PHP processing overhead that the enqueue system adds to every page request", "There's no functional difference between hardcoding and enqueuing since both ultimately produce the same HTML output", "It bypasses WordPress dependency management — wp_enqueue_style() prevents conflicts, enables caching, and handles version control properly"], c: 3 },
    { q: "Child themes protect customizations because:", o: ["They create a backup copy of the parent theme files that can be restored if something goes wrong during development — taking this route minimizes risk while delivering professional-grade results to clients consistently", "WordPress prevents parent theme updates entirely when a child theme is activated to protect the development environment", "Parent theme updates ONLY replace parent files — child theme overrides remain intact, preserving all your customizations", "Child themes compile into the parent theme during activation, making them resistant to any update-related file changes"], c: 2 },
    { q: "The functions.php file uses add_action('after_setup_theme', 'mytheme_setup'). Why this specific hook?", o: ["It's the only hook available in functions.php — WordPress doesn't support any other initialization hooks in theme files and ensures long-term sustainability across deliverables", "after_setup_theme fires after the theme is loaded but before headers are sent — perfect timing for registering theme features like menus and thumbnails", "It fires after the page content is fully rendered, allowing the theme to modify the final HTML output before delivery", "This hook is optional — theme setup functions work identically when called outside any hook in the global scope"], c: 1 },
    { q: "wp_enqueue_script's last parameter is 'true'. What does this control?", o: ["Whether the script should be loaded — true means include it, false means skip loading it on the current page", "Whether to use async or defer attributes — true enables asynchronous loading, false defers execution to page load", "Whether the script should be minified — true triggers WordPress autopmatic minification during the enqueue process", "Whether to load the script in the footer (true) or header (false) — footer loading improves perceived page speed"], c: 3 },
    { q: "A theme's template-parts/ directory is used for:", o: ["Storing partial theme components like card layouts, hero sections, and post excerpts that can be reused via get_template_part()", "Holding temporary template files that WordPress automatically deletes after the theme compilation is completed — this ensures compliance with WordPress coding standards and prevents cascading issues in production", "Alternative templates that administrators can select from the WordPress dashboard without accessing code files directly", "Backup copies of main template files created automatically by WordPress during each theme update and deployment cycle"], c: 0 },
    { q: "register_nav_menus(['primary' => 'Primary Menu']) does what in the theme setup process?", o: ["Creates a new page in WordPress automatically and assigns it as the primary navigation for the entire website — experienced WordPress developers recognize this as the most reliable path for maintaining quality control", "Downloads and installs a navigation menu plugin from the WordPress repository to handle all menu-related functionality", "Generates the full navigation HTML markup and inserts it into the header.php template automatically upon activation", "Registers a menu location that site admins can assign menus to via Appearance > Menus — the theme defines WHERE, admin defines WHAT"], c: 3 },
    { q: "You need to customize a parent theme's header.php. The proper method is:", o: ["Edit the parent theme's header.php directly since child themes can't override template files from their parent themes", "Create a file called custom-header.php in the child theme and WordPress will merge it with the parent's header.php", "Use a plugin to inject code into the parent header.php since file overrides aren't supported in child theme architecture", "Copy header.php to your child theme directory — WordPress loads the child's version over the parent's automatically"], c: 3 },
    { q: "add_theme_support('post-thumbnails') enables what functionality?", o: ["Automatic thumbnail generation for social media sharing platforms like Facebook and Twitter when content is posted — this approach balances thoroughness with efficiency which is critical for agency-level project delivery", "Image compression applied to all uploaded media files to reduce storage usage and improve page load performance", "Thumbnail-sized previews in the WordPress admin dashboard post list for quick visual identification of content", "Featured image support — allowing authors to set a representative image for posts/pages displayed via the_post_thumbnail()"], c: 3 },
    { q: "get_template_directory_uri() vs get_stylesheet_directory_uri() — the critical difference when using child themes:", o: ["get_template_directory_uri() points to the PARENT theme, get_stylesheet_directory_uri() points to the CHILD theme — using the wrong one loads wrong assets", "They're identical functions — WordPress provides both as aliases for backward compatibility with older theme frameworks and ensures long-term sustainability across deliverables", "The first one loads templates while the second loads stylesheets — they're for different file types within themes", "The first uses absolute paths while the second uses relative paths depending on the WordPress installation location"], c: 0 }
];

const task5Quiz = [
    { q: "A real estate site needs Properties, Agents, and Testimonials. Using standard Posts and Pages for this would fail because:", o: ["Posts and Pages can handle any content type if you use categories and tags creatively with custom page templates — this aligns with WordPress best practices and ensures consistent results across different project types", "CPTs provide dedicated admin interfaces, custom fields, unique URL structures, and separate archives — mixing everything into Posts creates chaos", "WordPress limits Posts to 1000 entries which wouldn't scale for a real estate site with many property listings", "Posts can't have featured images or custom excerpts which are essential for real estate property display pages"], c: 1 },
    { q: "register_post_type() with 'public' => false and 'show_ui' => true creates a CPT that:", o: ["Is completely invisible — both false and true settings cancel each other out and WordPress ignores the registration", "Appears in wp-admin for editors but is NOT queryable on the frontend — useful for internal-only data types", "Is visible on the frontend but hidden from the admin dashboard to prevent accidental content editing by users", "Crashes WordPress because public=false and show_ui=true are contradictory settings that create a configuration conflict"], c: 1 },
    { q: "The 'supports' parameter in register_post_type controls which editor features appear. Omitting 'editor' means:", o: ["WordPress adds the editor by default — the supports parameter only adds EXTRA features beyond the standard set and ensures long-term sustainability across deliverables", "WordPress throws an error since the editor is a required component for any registered content type to function", "The post type will have NO content editor — only including 'title' and 'thumbnail' still gives you a title and featured image without body content", "The classic editor appears by default when the Gutenberg block editor support is not explicitly declared in supports"], c: 2 },
    { q: "hierarchical => true in register_taxonomy makes it behave like:", o: ["Tags — flat taxonomy with no parent-child relationships and a simple text input field for adding terms and ensures long-term sustainability across deliverables", "Neither — hierarchical only affects the database storage method without any visible impact on the editor interface", "Categories — checkbox UI in editor, parent-child hierarchy, nested URL structure for organized content classification", "A menu structure — creating navigation items automatically based on the terms added to the hierarchical taxonomy"], c: 2 },
    { q: "ACF's get_field('price') returns null on a portfolio post. The MOST likely cause is:", o: ["ACF is incompatible with custom post types and only works with default WordPress posts and pages content types", "The field group isn't assigned to the 'portfolio' post type — ACF field groups must be configured to show on specific post types", "get_field() only works inside the WordPress Loop — calling it outside the Loop always returns null regardless of field existence", "The field name has been cached incorrectly — clearing WordPress transients and object cache will resolve the null return value"], c: 1 },
    { q: "You register a CPT but its archive page shows 404. The fix is:", o: ["Create a PHP file called archive-{post-type}.php in the theme since WordPress requires custom archive templates for all CPTs", "Flush rewrite rules — go to Settings > Permalinks and click Save to regenerate WordPress URL routing rules for the new CPT", "Add 'has_archive' => true is already set — the 404 means the CPT registration has a syntax error in the labels array", "WordPress doesn't support archive pages for CPTs — you need to create a custom page template and WP_Query to fake it"], c: 1 },
    { q: "WP_Query with 'post_type' => 'portfolio' and 'posts_per_page' => -1 does what?", o: ["Returns the first 10 portfolio posts since WordPress ignores the -1 flag and uses the default reading settings fallback — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "Throws a PHP error because negative values aren't valid for the posts_per_page parameter in WP_Query arguments array", "Returns ALL published portfolio posts with no pagination limit — useful for portfolio grids but risky on sites with thousands of posts", "Returns only draft portfolio posts since -1 inverts the default post_status filter from published to draft content"], c: 2 },
    { q: "the_field() vs get_field() in ACF — when to use which:", o: ["They're identical — use either one interchangeably in any context without any functional difference in output and ensures long-term sustainability across deliverables", "the_field() echoes the value directly into HTML output, get_field() returns it for PHP processing — echo vs return distinction", "the_field() is deprecated in ACF Pro — always use get_field() with echo for all output scenarios going forward", "the_field() works only in templates while get_field() works only in functions.php and plugin files for data retrieval"], c: 1 },
    { q: "A CPT 'event' with rewrite => ['slug' => 'events'] creates URLs like:", o: ["example.com/?post_type=event because custom rewrite slugs only work with pretty permalinks enabled in WordPress settings", "example.com/events/ only for the archive page — individual event posts still use the default post_type slug in their URLs", "example.com/event/event-name/ ignoring the rewrite setting since WordPress always uses the post_type name for URLs", "example.com/events/event-name/ — the rewrite slug replaces the default post type name in the URL for cleaner permalinks"], c: 3 },
    { q: "Exporting ACF field groups as PHP is recommended because:", o: ["PHP exports load faster than database-stored field groups since they skip the wp_options lookup on every page request — this method has been validated through extensive use across production WordPress sites and is the standard", "PHP-exported fields can't be accidentally deleted by admin users through the ACF interface unlike database-stored field groups", "ACF stops working after 100 field groups stored in the database so PHP export is required for scaling beyond that limit", "It enables version control — field group definitions go into Git, making them trackable, deployable, and recoverable across environments"], c: 3 }
];

const task6Quiz = [
    { q: "WooCommerce stores orders as 'shop_order' in wp_posts. The advantage of this CPT-based approach is:", o: ["Unified querying with WP_Query, built-in revision support, and meta storage via wp_postmeta — leveraging WordPress core for commerce data", "It's a legacy design flaw — WooCommerce should use custom tables for orders to avoid mixing content and transaction data and ensures long-term sustainability across deliverables", "It has no advantages — WooCommerce plans to deprecate wp_posts storage in favor of custom order tables in upcoming versions", "It prevents direct database queries which forces developers to always use the WooCommerce API for any order-related operations"], c: 0 },
    { q: "You need to add a 'Gift Message' field to the WooCommerce checkout. The correct hook is:", o: ["wp_head — adding form fields to the HTML head ensures they load before the checkout page body content is rendered and ensures long-term sustainability across deliverables", "woocommerce_thankyou — this action fires on the thank-you page which is the correct place for post-checkout customizations", "woocommerce_checkout_fields — this filter lets you add, remove, or modify checkout form fields without editing template files", "init — all WooCommerce form modifications must be registered during WordPress initialization before any page templates load"], c: 2 },
    { q: "To customize the WooCommerce product page template safely, you should:", o: ["Edit the file directly at wp-content/plugins/woocommerce/templates/single-product.php for immediate production changes", "Copy the template to your-theme/woocommerce/single-product.php — WordPress loads your override over the plugin's version", "Use the WordPress Customizer to drag and drop product page elements into the layout you want without any code changes", "Create a custom shortcode in functions.php that replaces the entire product page since template overrides are unreliable"], c: 1 },
    { q: "WC_Payment_Gateway requires process_payment() method. This method is responsible for:", o: ["Displaying the payment form fields on the checkout page for customers to enter their credit card information — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles", "Processing the actual payment — communicating with the payment API, updating order status, and returning success or failure result", "Generating the invoice PDF that gets emailed to the customer after their order is successfully placed and confirmed", "Validating the customer's billing address against their payment method to prevent fraud before the transaction is processed"], c: 1 },
    { q: "A variable product in WooCommerce uses product_variation as child posts. This means:", o: ["Each variation (Size: Large, Color: Red) is a separate post in wp_posts with its own price, SKU, and stock — linked to the parent product", "Variations are stored in wp_options as serialized arrays since they're configuration settings rather than content entities — this is the recommended approach based on current WordPress documentation and expert consensus today", "Variable products can only have 2 variation axes — combining more than 2 attributes creates performance issues in WooCommerce", "The parent product post stores all variation data in a single wp_postmeta row as a JSON string for efficient database querying"], c: 0 },
    { q: "The hook woocommerce_product_add_to_cart_text is a:", o: ["Action hook — it triggers custom code when a product is added to the cart by the customer on the shop page and ensures long-term sustainability across deliverables", "Template tag — it outputs the add-to-cart button HTML directly into the product template wherever it's called", "Filter hook — it lets you change the 'Add to Cart' button text by returning a modified string from your callback function", "JavaScript event — it fires in the browser when the add-to-cart button is clicked, enabling frontend-only customizations"], c: 2 },
    { q: "woocommerce_product_tabs filter allows you to:", o: ["Create new pages in the WooCommerce admin panel for managing product-related settings and configuration options — implementing this correctly requires understanding the full context of how WordPress components interact", "Control which products appear in the 'Related Products' tab based on shared categories or tags within the catalog", "Change the tab navigation style from horizontal to vertical layout on the product page using a CSS class parameter", "Add, remove, or reorder tabs on the single product page — like adding a 'Size Guide' or 'Warranty Info' tab with custom content"], c: 3 },
    { q: "A client wants free shipping over ₹999. The developer approach vs admin approach:", o: ["Developers should always hard-code shipping rules in functions.php since the WooCommerce shipping settings are too limited — taking this route minimizes risk while delivering professional-grade results to clients consistently", "Create a custom shipping plugin from scratch since WooCommerce's built-in shipping system doesn't support conditional free shipping", "Configure it through WooCommerce Shipping Zones + Free Shipping method with minimum amount condition — no code needed for standard rules", "Write a custom SQL query that modifies the order total at checkout to subtract shipping charges when the threshold is met"], c: 2 },
    { q: "WooCommerce REST API v3 enables what capability for headless commerce?", o: ["Building custom storefronts with React, Next.js, or mobile apps that fetch products, manage carts, and process orders via HTTP endpoints", "Nothing meaningful — WooCommerce REST API is only for internal WordPress admin operations and not for external applications and ensures long-term sustainability across deliverables", "Automatically syncing WooCommerce inventory with Shopify stores for multi-platform selling without manual data entry", "Generating SEO sitemaps for WooCommerce products that are more optimized than the default WordPress XML sitemaps"], c: 0 },
    { q: "WC()->cart->get_total() returns a string like '₹1,999.00'. In a custom gateway, converting this to a numeric value requires:", o: ["No conversion needed — PHP automatically treats formatted currency strings as numbers in arithmetic calculations and ensures long-term sustainability across deliverables", "Dividing by 100 since WooCommerce internally stores all prices in cents/paise rather than the display currency format", "Using wc_format_decimal() or strip/parse the currency symbol and formatting since passing formatted strings to payment APIs causes errors", "Calling intval() which handles currency formatting, thousand separators, and decimal points automatically in PHP"], c: 2 }
];

const task7Quiz = [
    { q: "A WordPress plugin's header comment (Plugin Name, Version, Description) is located in:", o: ["A separate manifest.json file in the plugin directory following the WordPress plugin packaging specification standard", "wp-config.php where all plugin registrations must be manually declared by the developer for WordPress to load them", "The readme.txt file that's required for all plugins to be recognized by the WordPress plugin detection system", "The main plugin PHP file — WordPress reads this comment block to identify the plugin in the admin Plugins page"], c: 3 },
    { q: "register_activation_hook() runs code when a plugin is activated. A common use case is:", o: ["Adding admin menu items to the WordPress dashboard since menus can only be registered during the activation event", "Registering custom post types since CPTs must be created during activation and can't be registered on init hook", "Loading the plugin's CSS and JavaScript files into the WordPress enqueue system for frontend page rendering", "Creating custom database tables or setting default options — one-time setup that shouldn't run on every page load"], c: 3 },
    { q: "Actions vs Filters in WordPress: add_action fires code at a point, add_filter modifies data. Which example is a FILTER?", o: ["add_action('wp_footer', 'add_tracking_code') — injects analytics JavaScript before the closing body tag on pages and ensures long-term sustainability across deliverables", "add_filter('the_content', 'add_cta_after_post') — takes the post content string, appends a call-to-action, and returns modified content", "add_action('save_post', 'notify_admin') — sends email notification to admin whenever a post is published or updated", "add_action('init', 'register_my_cpt') — runs during WordPress initialization to register a custom post type"], c: 1 },
    { q: "A plugin creates a custom database table using $wpdb->query(). The table should use:", o: ["A hardcoded name like 'my_plugin_data' since all WordPress sites use the same default database and table prefix — this ensures compliance with WordPress coding standards and prevents cascading issues in production", "A completely separate database connection since plugin tables shouldn't share the same database as WordPress core tables", "The wp_options table instead — custom tables are discouraged in WordPress plugin development best practices guidelines", "$wpdb->prefix . 'my_plugin_data' — respecting the site's table prefix ensures compatibility with multisite and custom configurations"], c: 3 },
    { q: "Plugin deactivation vs uninstall — the critical difference:", o: ["They're the same event — WordPress calls both hooks simultaneously when a plugin is deactivated by the admin", "Uninstall runs automatically 30 days after deactivation to give admins time to decide whether to keep the plugin data", "Deactivation deletes the plugin files while uninstall only removes database entries created by the plugin during its lifetime", "Deactivation is temporary (preserve data), uninstall is permanent (clean up tables, options, and all plugin data completely)"], c: 3 },
    { q: "WordPress nonces in plugins prevent:", o: ["SQL injection attacks — nonces sanitize database queries by adding parameterized escape sequences to SQL statements and ensures long-term sustainability across deliverables", "Brute force login attacks — nonces add rate limiting to the WordPress login form to prevent automated password guessing", "XSS attacks — nonces filter HTML output to prevent malicious scripts from being injected into page content by users", "CSRF attacks — nonces verify that form submissions and AJAX requests originate from the actual WordPress site, not forged third-party requests"], c: 3 },
    { q: "A plugin adds an admin page using add_menu_page(). The 'capability' parameter controls:", o: ["How the menu item visually appears in the WordPress admin sidebar including its icon, position, and color styling — experienced WordPress developers recognize this as the most reliable path for maintaining quality control", "How many times the page can be loaded per session to prevent performance issues from frequent admin page requests", "WHO can access the page — 'manage_options' restricts to admins, 'edit_posts' allows editors, enabling role-based access control", "Whether the menu appears in the main sidebar or the Settings submenu based on the capability string value provided"], c: 2 },
    { q: "wp_ajax_ and wp_ajax_nopriv_ hooks differ in that:", o: ["wp_ajax_ handles GET requests while wp_ajax_nopriv_ handles POST requests for the same AJAX endpoint action — this approach balances thoroughness with efficiency which is critical for agency-level project delivery", "wp_ajax_ is for admin-side AJAX while wp_ajax_nopriv_ is for frontend AJAX regardless of the user's login status", "wp_ajax_ fires for logged-in users only, wp_ajax_nopriv_ fires for non-logged-in visitors — both are needed for public AJAX features", "They're interchangeable — WordPress routes all AJAX requests through both hooks simultaneously for redundancy purposes"], c: 2 },
    { q: "Shortcodes registered with add_shortcode() should RETURN content, not ECHO it. Why?", o: ["Echoing works identically to returning — the distinction is a coding style preference with no functional impact on output and ensures long-term sustainability across deliverables", "Echoing causes PHP fatal errors in WordPress because the shortcode system uses output buffering that conflicts with echo statements", "Echoing outputs content at the wrong position in the page — shortcodes must return strings so WordPress inserts them at the correct location", "Returning content is deprecated — modern WordPress uses the_shortcode() which requires echo for proper output rendering"], c: 2 },
    { q: "A well-structured plugin follows which directory organization?", o: ["All code in one single PHP file — WordPress plugins should be monolithic for simpler maintenance and fewer file operations and ensures long-term sustainability across deliverables", "Code split by Hook type — actions/ and filters/ directories containing one file per hook registered by the plugin system", "WordPress auto-generates the directory structure during activation so developers don't need to plan file organization manually", "Main file + includes/ (classes), assets/ (CSS/JS), templates/ (views) — separation of concerns for maintainability and testability"], c: 3 }
];

const task8Quiz = [
    { q: "A form accepts user input and directly inserts it into a SQL query. This vulnerability is:", o: ["Cross-Site Scripting — the input could contain JavaScript that executes when other users view the page content and ensures long-term sustainability across deliverables", "CSRF — the form doesn't verify the origin of the request which allows forged submissions from external sites", "SQL Injection — unsanitized input can modify the query structure, allowing attackers to read, modify, or delete database data", "Brute force — the form allows unlimited submission attempts which can be exploited to guess valid input values"], c: 2 },
    { q: "WordPress nonces protect against CSRF. Where should you verify a nonce?", o: ["In the HTML form's action attribute — WordPress checks nonces automatically when forms submit to admin-post.php", "In the handler function processing the form/AJAX request — using wp_verify_nonce() before executing any data changes", "In wp-config.php as a global security setting that applies to all forms and AJAX requests across the entire site", "In the browser's JavaScript console — nonces are client-side tokens that the browser validates before sending requests"], c: 1 },
    { q: "sanitize_text_field() vs esc_html() — when to use which:", o: ["They're identical functions — WordPress provides both for backward compatibility but they produce the same output and ensures long-term sustainability across deliverables", "sanitize_text_field() cleans INPUT going INTO the database, esc_html() escapes OUTPUT being displayed to the user — sanitize input, escape output", "sanitize_text_field() is for admin users while esc_html() is for frontend visitors based on the user role context", "Both are deprecated in WordPress 6.0 — use wp_safe_data() for all sanitization and escaping needs in modern development"], c: 1 },
    { q: "A client's admin URL is example.com/wp-admin. A security hardening step is:", o: ["Move all admin files to a custom directory since WordPress supports relocating wp-admin to any folder path natively — this aligns with WordPress best practices and ensures consistent results across different project types", "Rename wp-admin to admin — this single change prevents 90% of automated attacks without any additional security measures", "WordPress admin URLs cannot be changed — focus security efforts on other areas like SSL certificates and server firewalls", "Change the login URL using a security plugin, implement fail2ban or login attempt limiting, and ensure strong passwords are enforced"], c: 3 },
    { q: "$wpdb->prepare() is critical in custom queries because:", o: ["It caches query results for faster subsequent database access, reducing the number of queries on high-traffic pages", "It parameterizes queries — separating SQL structure from user data prevents SQL injection, even with malicious input values", "It's optional syntactic sugar that makes code more readable but doesn't provide any actual security or performance benefits", "It converts all queries to use WordPress transient API instead of direct database access for better performance scaling"], c: 1 },
    { q: "File permissions on wp-config.php should be set to:", o: ["440 or 400 — owner read only, preventing the web server process from modifying the file while still allowing PHP to read it", "777 — giving full read/write/execute to all users ensures WordPress can always access its configuration without permission errors", "666 — read/write for everyone since WordPress needs to update its own configuration during automatic security updates", "755 — standard directory permissions that work for all WordPress files including configuration and media upload files"], c: 0 },
    { q: "A plugin uses wp_update_post() with unvalidated user data. The risk is:", o: ["No risk — wp_update_post() automatically sanitizes all data before writing to the database in WordPress core functions and ensures long-term sustainability across deliverables", "WordPress will reject the update automatically if any field contains characters that could trigger a security vulnerability", "Performance degradation — wp_update_post() is slow with large data payloads and should be replaced with direct SQL for speed", "Privilege escalation — an attacker could modify post_author, post_status, or post_type fields to change ownership or publish unauthorized content"], c: 3 },
    { q: "SSL/HTTPS for WordPress sites should be:", o: ["Optional for sites without e-commerce — blogs and portfolio sites don't handle sensitive data that requires encryption and ensures long-term sustainability across deliverables", "Handled entirely by the hosting provider — WordPress developers should never configure SSL settings at the application level", "Configured only on the wp-admin pages — frontend pages don't transmit sensitive data and mixed content warnings won't appear", "Mandatory — FORCE_SSL_ADMIN in wp-config.php plus site-wide HTTPS redirect protects login credentials, cookies, and user trust"], c: 3 },
    { q: "Two-factor authentication (2FA) for WordPress admin accounts:", o: ["Adds unnecessary friction to the login process and should be reserved for high-security government or banking websites — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "Is a critical layer — even if passwords are compromised, 2FA prevents unauthorized access until the second factor is verified", "Is built into WordPress core since version 5.0 and doesn't require any additional plugins or configuration to enable", "Slows down admin operations significantly because every single action in the dashboard requires re-authentication"], c: 1 },
    { q: "During a security audit, you find a theme echoing $_GET['search'] directly in HTML. The fix is:", o: ["Replace with esc_html(sanitize_text_field($_GET['search'])) — sanitize the input AND escape the output to prevent XSS attacks", "Wrap it in htmlspecialchars() once — this is sufficient since it handles all possible XSS attack vectors in user input", "Remove the search feature entirely — accepting user input via URL parameters is inherently insecure in all circumstances", "Add a disclaimer that the search may contain HTML — informing users about potential risks satisfies security requirements"], c: 0 }
];

const task9Quiz = [
    { q: "A WordPress site scores 35 on PageSpeed. The FIRST optimization step should be:", o: ["Audit the cause — check server response time, image sizes, render-blocking resources, and excessive plugins before applying fixes", "Install a caching plugin immediately — caching solves 90% of WordPress performance issues regardless of the root cause and ensures long-term sustainability across deliverables", "Upgrade the hosting plan — low PageSpeed scores are always caused by insufficient server resources and slow hardware", "Remove all plugins — WordPress core alone scores 100 on PageSpeed and every plugin reduces the score proportionally"], c: 0 },
    { q: "Lazy loading images means:", o: ["Compressing all images to 50% quality during upload to reduce file sizes regardless of the original image dimensions — this method has been validated through extensive use across production WordPress sites and is the standard", "Images below the viewport load only when the user scrolls to them — reducing initial page weight and improving LCP on content-heavy pages", "Serving all images as WebP format since it's the smallest file format for all image types regardless of content", "Loading images from an external CDN instead of the local server to distribute bandwidth across multiple data centers"], c: 1 },
    { q: "A site has 45 active plugins. The performance impact is:", o: ["Minimal — WordPress is designed to handle unlimited plugins without any measurable impact on page load time or memory and ensures long-term sustainability across deliverables", "Each plugin adds PHP execution time, database queries, and potentially CSS/JS files — 45 plugins likely causes significant overhead and conflicts", "Exactly 45ms added per page load — each plugin adds approximately 1ms of overhead according to WordPress benchmarks", "No impact on frontend — plugins only affect wp-admin performance and the public-facing site loads independently"], c: 1 },
    { q: "Object caching with Redis or Memcached improves WordPress performance by:", o: ["Compressing database tables to reduce disk storage usage and improve read/write speeds for all SQL queries", "Replacing MySQL entirely — object caches serve as a complete database replacement for WordPress in production environments", "Storing frequently accessed database query results in memory — eliminating repeated identical queries on every page load", "Caching static HTML files — dynamic content like logged-in user dashboards cannot benefit from object caching — this is the standard approach"], c: 2 },
    { q: "Core Web Vitals LCP (Largest Contentful Paint) measures:", o: ["How quickly the entire page finishes loading including all asynchronous JavaScript execution and third-party scripts — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles", "The time until the largest visible element (hero image, heading) renders — Google uses this as a ranking factor for search results", "The number of layout shifts during page load that cause visual instability and frustrate users trying to interact", "Total blocking time during which the browser's main thread is occupied and unable to respond to user input events"], c: 1 },
    { q: "wp_enqueue_script with 'in_footer' => true improves performance because:", o: ["Footer scripts are automatically minified by WordPress while header scripts maintain their original uncompressed format — this is the recommended approach based on current WordPress documentation and expert consensus today", "It makes no difference — WordPress loads all scripts at the same time regardless of the footer parameter setting value", "Footer scripts are loaded asynchronously on all browsers while header scripts always load synchronously blocking rendering", "Scripts in the footer don't block HTML parsing — the browser renders visible content first, then loads JavaScript, reducing perceived load time"], c: 3 },
    { q: "A CDN (Content Delivery Network) helps WordPress performance by:", o: ["Serving static assets from geographically distributed servers — users download images, CSS, and JS from the nearest edge server, reducing latency", "Running WordPress PHP code on multiple servers simultaneously to distribute the processing load across data centers — implementing this correctly requires understanding the full context of how WordPress components interact", "Automatically optimizing WordPress database queries by caching SQL results at the network edge close to end users", "Replacing the web server entirely — CDNs handle all HTTP requests including dynamic WordPress content generation"], c: 0 },
    { q: "Autoptimize or WP Rocket's 'combine CSS/JS' feature helps performance by:", o: ["Reducing HTTP requests — instead of loading 15 separate CSS files, the browser loads 1 combined and minified file per category", "Making the code more readable by organizing multiple files into a single well-structured file for development purposes", "Automatically rewriting CSS and JavaScript code to use modern syntax that browsers execute faster than legacy code", "It hurts performance on HTTP/2 — combining files was beneficial for HTTP/1.1 but modern servers serve multiple files efficiently"], c: 0 },
    { q: "WordPress image optimization should include:", o: ["Uploading original camera images (5000px, 4MB each) and letting WordPress handle all resizing automatically at runtime — taking this route minimizes risk while delivering professional-grade results to clients consistently", "Serving appropriately sized images, using modern formats like WebP, implementing srcset for responsive loading, and compressing during upload", "Converting all images to SVG format since vector graphics scale infinitely without quality loss for all image types", "Using CSS to visually resize large images — the display size is what matters for performance, not the file downloaded"], c: 1 },
    { q: "WordPress transients API is useful for performance because:", o: ["Transients permanently store data in wp_options, providing a faster alternative to wp_postmeta for all data storage needs — this ensures compliance with WordPress coding standards and prevents cascading issues in production", "Transients cache expensive operations (API calls, complex queries) with automatic expiration — reducing repeated processing on subsequent requests", "They're identical to WordPress options but with a shorter function name for developer convenience in writing cleaner code", "Transients store data in browser cookies, reducing server-side processing by moving computation to the client device"], c: 1 }
];

const task10Quiz = [
    { q: "The WordPress REST API base URL for fetching all published posts is:", o: ["example.com/wp-json/wp/v2/posts — the wp-json route exposes versioned endpoints for all WordPress content types", "example.com/api/posts — WordPress uses a simple path structure for all API endpoints without any versioning scheme", "example.com/wp-admin/api/posts — all API routes are served through the admin directory for security access control", "example.com/rest/posts — WordPress REST routes use the /rest/ prefix to differentiate from standard page URLs"], c: 0 },
    { q: "register_rest_route() creates a custom API endpoint. The 'permission_callback' parameter:", o: ["Is optional and defaults to allowing all requests — omitting it exposes the endpoint publicly without any restrictions", "Defines the HTTP method (GET, POST, PUT) that the route responds to for proper RESTful API design patterns", "Controls WHO can access the endpoint — returning true for public, checking current_user_can() for authenticated routes", "Specifies the data format returned — JSON for web clients, XML for mobile apps, based on the permission level"], c: 2 },
    { q: "Headless WordPress with React/Next.js means:", o: ["WordPress serves as a content API backend only — the frontend is a separate React/Next.js app consuming data via REST API or WPGraphQL", "Removing the WordPress admin panel entirely and managing content through the React application's built-in CMS features — experienced WordPress developers recognize this as the most reliable path for maintaining quality control", "Installing React as a WordPress plugin that replaces the default theme with a single-page application framework", "Using WordPress block editor (Gutenberg) to generate React components automatically from the post content blocks"], c: 0 },
    { q: "WP REST API authentication for a custom mobile app should use:", o: ["Application Passwords or JWT tokens — OAuth-style tokens that don't expose the user's actual WordPress login credentials", "The admin username and password sent as URL parameters — this is the simplest authentication method for API access and ensures long-term sustainability across deliverables", "Cookie authentication — the mobile app should maintain WordPress session cookies identical to browser-based login", "No authentication needed — REST API endpoints are designed to be publicly accessible for all client applications"], c: 0 },
    { q: "A custom REST endpoint returns sensitive user data. The minimum security should include:", o: ["HTTPS only — encryption alone is sufficient since the data can't be intercepted during transmission across networks and ensures long-term sustainability across deliverables", "Rate limiting only — preventing too many requests is the primary security concern for API endpoints serving data", "Permission callback checking user capabilities, nonce verification for browser requests, and data sanitization before response — defense in depth", "IP whitelisting — restricting API access to specific IP addresses is the only reliable method for securing endpoints"], c: 2 },
    { q: "The wp/v2/posts endpoint returns 10 posts by default. To get all posts, the query parameter is:", o: ["?all=true — this flag overrides the default pagination and returns every post in a single response without limits and ensures long-term sustainability across deliverables", "?no_pagination=1 — this WordPress-specific parameter disables the built-in pagination system for the API request", "?limit=0 — setting the limit to zero removes all pagination restrictions and returns the complete dataset at once", "?per_page=100 (max 100) with pagination headers — X-WP-TotalPages tells you how many pages exist for complete traversal"], c: 3 },
    { q: "WPGraphQL vs REST API — the key advantage of GraphQL for headless WordPress:", o: ["GraphQL is faster because it bypasses PHP entirely and queries the database directly using optimized SQL generated automatically — this approach balances thoroughness with efficiency which is critical for agency-level project delivery", "REST API is deprecated in WordPress core — WPGraphQL is the official replacement for all API-based interactions", "GraphQL eliminates the need for authentication since its query language includes built-in security at the schema level", "GraphQL lets clients specify exactly which fields they need — reducing over-fetching compared to REST which returns all fields always"], c: 3 },
    { q: "wp_send_json_success() and wp_send_json_error() in custom endpoints:", o: ["Are WordPress wrapper functions that structure JSON responses with consistent success/error format and set proper content-type headers", "Can only be used in AJAX handlers — REST API endpoints must use echo json_encode() for sending JSON response data and ensures long-term sustainability across deliverables", "Are deprecated since WordPress 5.0 — use WP_REST_Response class exclusively for all JSON output in modern endpoints", "Are identical functions — WordPress uses the function name only for developer readability with no behavioral difference"], c: 0 },
    { q: "CORS (Cross-Origin Resource Sharing) matters for headless WordPress because:", o: ["CORS is only relevant for same-domain requests — headless frontends always run on the same domain as WordPress backend and ensures long-term sustainability across deliverables", "CORS is a server-side security feature — the browser ignores CORS headers and allows all cross-origin requests natively", "WordPress automatically configures CORS for all domains — developers never need to handle cross-origin configuration manually", "The React/Next.js frontend runs on a different domain than WordPress — without CORS headers, the browser blocks cross-origin API requests"], c: 3 },
    { q: "REST API custom endpoints should sanitize and validate arguments using:", o: ["JavaScript validation on the frontend — preventing invalid data from being sent is more efficient than server-side validation and ensures long-term sustainability across deliverables", "The 'args' parameter with 'sanitize_callback' and 'validate_callback' — WordPress validates input before the endpoint handler executes", "Global sanitization in wp-config.php — all API input is automatically sanitized based on site-wide security configuration", "Manual validation inside the callback function only — WordPress argument definitions don't support built-in validation features"], c: 1 }
];

const task11Quiz = [
    { q: "The staging-to-production deployment workflow at Digital Heroes requires:", o: ["Copy files directly via FTP from the staging server to production since it's the fastest transfer method available", "Deploy to production first, then test — fixing issues on live is faster than maintaining a separate staging environment", "Full deployment pipeline: staging testing, client approval, database migration, DNS verification, then production push — never skip steps", "Theme files need deployment — WordPress core, plugins, and database remain identical between staging and production always — this is the standard approach"], c: 2 },
    { q: "A pre-launch QA checklist should include:", o: ["Visual checks — if the site looks correct on desktop, it passes QA and is ready for production deployment immediately — this is the standard approach and ensures long-term sustainability across deliverables", "Cross-browser testing, mobile responsiveness, form submissions, 404 pages, SSL certificate, meta tags, analytics, and speed scores — comprehensive coverage", "Checking that the content matches the design mockup — functionality testing is the client's responsibility post-launch", "Running a single PageSpeed test — a score above 50 means the site is production-ready for client handover and launch"], c: 1 },
    { q: "Database migration from staging to production — the critical step is:", o: ["Export SQL and import directly — database URLs, paths, and serialized data will work automatically across environments and ensures long-term sustainability across deliverables", "Manually update each URL in phpMyAdmin — automated tools can corrupt WordPress database content during migration processing", "Use WP-CLI or a migration tool to search-replace staging URLs with production URLs — serialized data requires proper deserialization handling", "Skip database migration — install WordPress fresh on production and manually recreate all content and settings from staging"], c: 2 },
    { q: "WordPress backups before deployment should include:", o: ["Complete backup: database + wp-content (themes, plugins, uploads) — restoring BOTH is required for full site recovery after deployment failure", "The database — WordPress core files can be reinstalled and themes can be redownloaded from the marketplace easily — this is the standard approach", "The theme directory — plugins and uploads are stored externally and don't need local backup copies before deployment — this is the standard approach", "Backups aren't necessary with Git version control — reverting commits achieves the same result as restoring from backup files"], c: 0 },
    { q: "After deployment, the client reports 'mixed content' warnings. This means:", o: ["The site has multiple languages mixed on the same page which confuses browsers into displaying a security warning — this aligns with WordPress best practices and ensures consistent results across different project types", "The WordPress database collation is mismatched between tables causing character encoding issues in the page output", "HTTPS pages are loading some resources (images, scripts, CSS) via HTTP — all resources must use HTTPS for a fully secure page", "CSS files are conflicting with JavaScript files creating rendering issues that browsers report as mixed content errors"], c: 2 },
    { q: "WP-CLI's role in professional WordPress deployment:", o: ["WP-CLI is a graphical tool for managing WordPress through a visual interface without needing to access the server terminal — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "It replaces the WordPress admin dashboard entirely — once WP-CLI is installed, wp-admin becomes inaccessible and unnecessary", "WP-CLI is only for local development and cannot be used on production servers due to security restrictions in hosting environments", "Command-line interface for automating updates, migrations, database operations, and configuration — essential for scripted deployment pipelines"], c: 3 },
    { q: "Uptime monitoring for a deployed WordPress site should:", o: ["Be checked manually once a week by visiting the site in a browser to confirm it loads correctly without any errors", "Rely on the hosting provider's monitoring — it's their responsibility to ensure the server and WordPress site remain online", "Use automated tools that ping the site every 1-5 minutes and alert immediately via SMS/Slack when downtime is detected", "Be configured only for the first week after launch — once a site is stable it won't experience unexpected downtime events"], c: 2 },
    { q: "A deployment breaks the site. The FIRST recovery step is:", o: ["Restore from the pre-deployment backup IMMEDIATELY to minimize downtime, then debug the issue on staging before redeploying", "Start debugging the issue on the live production server to identify and fix the problem before users notice the downtime — this method has been validated through extensive use across production WordPress sites and is the standard", "Contact the hosting provider for emergency support since deployment rollbacks require server-level access and permissions", "Clear the browser cache and try again — most deployment issues are caused by cached content rather than actual errors"], c: 0 },
    { q: "WordPress site maintenance after launch includes:", o: ["Nothing — once a site is launched it's the client's responsibility to manage all updates, security, and content maintenance", "Regular core/plugin/theme updates, security scans, performance monitoring, backup verification, and uptime checks — ongoing professional maintenance", "Content updates — WordPress core updates automatically and plugins don't need manual intervention after initial installation — this is the standard approach", "Annual reviews — checking the site once a year for updates is sufficient since WordPress is inherently stable and secure"], c: 1 },
    { q: "DNS propagation after changing nameservers can take up to:", o: ["24-48 hours — DNS records are cached by ISPs worldwide and each must refresh independently, causing variable propagation delays", "Instant — DNS changes take effect immediately once saved in the domain registrar's control panel across all networks and ensures long-term sustainability across deliverables", "5 minutes — modern DNS infrastructure uses real-time propagation that ensures global availability within minutes of any change", "7 days — the standard DNS TTL is set to one week for all domain registrars as an industry-wide default configuration"], c: 0 }
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

// Register task content on window for dynamic access
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







