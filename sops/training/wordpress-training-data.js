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
        title: "Deployment & Launch",
        description: "Staging → Production Workflow",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🚀 Master: Staging → Production workflow",
            "📋 Learn: Pre-launch QA checklist",
            "🔄 Understand: DNS propagation & post-launch maintenance"
        ]
    },
    {
        id: 12,
        title: "Page Builders & Modern WordPress",
        description: "Elementor, Gutenberg & Full Site Editing",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🔧 Master: Elementor Pro widgets & templates",
            "📦 Learn: Gutenberg blocks & FSE",
            "⚡ Understand: Performance implications of each builder"
        ]
    },
    {
        id: 13,
        title: "Advanced WooCommerce",
        description: "Subscriptions, Multi-Vendor & CRO",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "🛒 Master: Advanced product types & subscriptions",
            "🏪 Learn: Multi-vendor marketplace setup",
            "💳 Understand: Payment gateways & international shipping"
        ]
    },
    {
        id: 14,
        title: "WordPress ↔ Shopify Migration",
        description: "Data, SEO & Design Migration",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🔄 Master: Data migration tools & processes",
            "🔍 Learn: SEO migration (URL mapping, 301 redirects)",
            "📋 Understand: Post-migration QA checklist"
        ]
    },
    {
        id: 15,
        title: "WordPress for Fiverr Delivery",
        description: "Gig Structure, Delivery Workflow & QA",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "📦 Master: DH WordPress delivery workflow",
            "⏱️ Learn: Time estimation for common WP tasks",
            "🏠 Understand: Hosting recommendations & staging setup"
        ]
    },
    {
        id: 16,
        title: "CRO & Design for WordPress",
        description: "Conversion Optimization & Visual Design",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "🎨 Master: Color theory & typography for WP",
            "📐 Learn: F-pattern, Z-pattern layouts",
            "🧠 Understand: Cialdini's persuasion principles for e-commerce"
        ]
    },
    {
        id: 17,
        title: "Career Growth & Certification",
        description: "WordPress Developer Path & Final Exam",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "📈 Understand: Career path Junior → Senior → Lead",
            "🎯 Learn: WordPress Developer KPIs at DH",
            "🎓 Complete: Final Certification Exam"
        ]
    },
    {
        id: 18,
        title: "Practical Task — WooCommerce Store",
        description: "48-Hour Build & Form Submission",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 48 hours",
            "🏗️ Build: Complete WP + WooCommerce site",
            "📋 Follow: Deliverables checklist",
            "📤 Submit: Via Google Form"
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


// =============================================================================
// TASK 12: PAGE BUILDERS & MODERN WORDPRESS
// =============================================================================

const task12Content = `
<h2>🔧 TASK 12: PAGE BUILDERS & MODERN WORDPRESS</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">Why Page Builders Matter on Fiverr</h3>
    <p>Over <strong>60% of WordPress Fiverr orders</strong> involve page builders. Clients want sites they can edit themselves — and page builders make that possible. Knowing which builder to use (and when to avoid them) separates a junior dev from a pro.</p>
</div>

<div class="content-section">
    <h3>🏗️ Elementor Pro — The DH Standard for WordPress</h3>
    <p>At Digital Heroes, <strong>Elementor Pro is our default page builder</strong> for WordPress projects. Here's why:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drag & Drop Editor</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clients can edit text, images, colors without calling you</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme Builder</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom headers, footers, single post templates, archive pages — all visual</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dynamic Content</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pull ACF fields, post data, WooCommerce product info into any design</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Popup Builder</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Newsletter popups, exit-intent, announcement bars — built-in</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Builder</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom product pages, cart, checkout — without code</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Global Widgets</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edit once, updates everywhere — CTA blocks, headers, footers</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong>DH Rule:</strong> Every Elementor project must use <strong>Global Colors</strong> and <strong>Global Fonts</strong> so the client can change brand colors in ONE place, not 50 individual sections.
    </div>
</div>

<div class="content-section">
    <h3>🔄 Page Builder Comparison — When to Use What</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Builder</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Avoid When</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance Impact</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Elementor Pro</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Most client projects, WooCommerce, landing pages</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High-traffic blogs needing raw speed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medium (200-400KB extra CSS/JS)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Gutenberg (Block Editor)</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blogs, simple sites, FSE themes</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex layouts needing pixel-perfect control</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low (native, minimal bloat)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Divi</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clients who already own a Divi license</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New projects (vendor lock-in, heavy)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High (500KB+ shortcode bloat)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WPBakery</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Legacy themes that bundle it</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Any new project — it's outdated</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High (shortcode dependency)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom Theme (no builder)</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance-critical sites, unique designs</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clients who need to edit themselves</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best (zero overhead)</td></tr>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>DH Standard:</strong> Never recommend Divi or WPBakery for new projects. If a client's existing site uses them, migrate to Elementor or Gutenberg during the redesign.
    </div>
</div>

<div class="content-section">
    <h3>📦 Gutenberg & Full Site Editing (FSE)</h3>
    <p>WordPress is moving toward <strong>Full Site Editing</strong> — using the block editor for EVERYTHING (headers, footers, templates, not just post content). Key concepts:</p>
    <ul>
        <li><strong>Block Patterns:</strong> Pre-designed layouts you can insert with one click (hero sections, pricing tables, testimonial grids)</li>
        <li><strong>Reusable Blocks:</strong> Create a block once, use it everywhere — edit in one place, updates globally (like Elementor Global Widgets)</li>
        <li><strong>Block Themes (FSE):</strong> Themes like Twenty Twenty-Four that use <code>theme.json</code> for styling and <code>templates/</code> folder for layouts — no PHP template files needed</li>
        <li><strong>Custom Blocks:</strong> Build your own blocks using <code>@wordpress/create-block</code> — React components that render in the editor AND frontend</li>
        <li><strong>theme.json:</strong> Single file controlling colors, fonts, spacing, layout — the foundation of modern WordPress theming</li>
    </ul>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>When to use FSE over Elementor:</strong> Blog-heavy sites, content-first projects, or when PageSpeed score matters more than visual complexity. FSE is the future of WordPress — learn it now.
    </div>
</div>

<div class="content-section">
    <h3>🤝 Client Handoff with Page Builders</h3>
    <p>The goal: client can edit their own site without breaking it.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Action</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lock sections they shouldn't touch</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Elementor: Navigator → Lock widget. FSE: Lock blocks in editor.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create user role with limited access</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Editor role (not Admin). Use Members plugin for custom capabilities.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Record Loom walkthrough</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show: how to edit text, swap images, add products, update menus</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Global Styles</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client changes brand color in ONE place, not 50 sections</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>⚡ Performance Optimization for Page Builders</h3>
    <p>Page builders add bloat. Here's how to minimize it:</p>
    <ul>
        <li><strong>Elementor:</strong> Disable unused widgets in Dashboard → Elementor → Settings → Features. Use Perfmatters or Asset CleanUp to remove Elementor CSS/JS from pages that don't use it.</li>
        <li><strong>Reduce DOM elements:</strong> Avoid excessive nesting — each Elementor section/column/widget adds DOM nodes. Target under 1,500 total DOM elements.</li>
        <li><strong>Optimize images IN the builder:</strong> Use WebP, set proper dimensions, enable lazy loading on below-fold images.</li>
        <li><strong>Cache aggressively:</strong> WP Rocket or LiteSpeed Cache — page builders benefit massively from full-page caching since the HTML generation is heavy.</li>
        <li><strong>Critical CSS:</strong> Generate above-the-fold CSS to prevent render-blocking stylesheets from the builder.</li>
    </ul>
</div>
`;

const task12Quiz = [
    { q: "A Fiverr client says 'I want to edit the site myself after you build it.' Which builder approach is best?", o: ["Custom PHP theme with no builder — cleanest code and fastest performance for all WordPress projects", "Elementor Pro with Global Colors/Fonts, locked structural sections, and a Loom walkthrough for the client", "WPBakery with shortcodes — it's the most established builder and clients find shortcodes intuitive to edit", "Divi — its visual builder is the most user-friendly and has the largest market share among all page builders"], c: 1 },
    { q: "A client's existing site uses Divi with 200+ pages. They want a redesign. The DH approach is:", o: ["Keep Divi and just redesign within it — migrating 200 pages is too much work and the client already owns the license", "Rebuild in Elementor Pro — but plan the migration carefully, prioritizing high-traffic pages first and redirecting old URLs", "Switch to Gutenberg FSE — it's WordPress native so it's always the best choice regardless of project complexity", "Use WPBakery instead — it handles large sites better than Divi and has less performance overhead per page"], c: 1 },
    { q: "Gutenberg Full Site Editing (FSE) uses which file as the foundation for all styling?", o: ["style.css — the traditional WordPress theme stylesheet remains the only way to define theme styles in FSE themes", "functions.php — all FSE styling is defined through PHP functions that generate CSS dynamically at runtime", "theme.json — controls colors, fonts, spacing, layout settings, and block defaults in a single configuration file", "blocks.json — a separate configuration file that defines styling for each individual block type independently"], c: 2 },
    { q: "An Elementor site scores 45 on Mobile PageSpeed. The FIRST optimization step is:", o: ["Remove Elementor entirely and rebuild with custom PHP — page builders always prevent good PageSpeed scores", "Disable unused Elementor widgets, remove CSS/JS from non-builder pages, optimize images, and add page caching", "Just install an SEO plugin — PageSpeed optimization is primarily an SEO configuration issue not a builder issue", "Tell the client that 45 is acceptable for Elementor sites — page builders inherently score lower on PageSpeed"], c: 1 },
    { q: "Global Widgets in Elementor are important for client handoff because:", o: ["They look more professional than regular widgets and make the site appear more premium to the end users", "They allow clients to edit a widget in ONE place and have changes apply everywhere it's used — preventing inconsistency", "They load faster than regular widgets because Elementor caches them separately from the rest of the page content", "They are required by Elementor Pro license terms — sites without global widgets violate the usage agreement"], c: 1 },
    { q: "A client wants a high-performance blog with simple layouts. Which approach is best?", o: ["Elementor Pro — it's the DH standard for ALL WordPress projects regardless of the site type or content focus", "Gutenberg with a block theme (FSE) — native, minimal bloat, perfect for content-first sites where speed matters most", "Divi — its blog module is specifically designed for high-performance blogging with built-in caching features", "Custom theme with no builder — blogs are too simple to justify any builder and clients won't need to edit them"], c: 1 },
    { q: "When handing off an Elementor site, client user role should be:", o: ["Administrator — clients need full access to manage their own WordPress site including all settings and plugins", "Editor with custom capabilities via Members plugin — can edit content but can't break site structure or install plugins", "Subscriber — the most secure role that prevents any accidental damage to the site design or functionality", "Super Admin — this role provides the best balance of access and security for single-site WordPress installations"], c: 1 },
    { q: "WPBakery uses shortcodes extensively. Why is this a problem for new projects?", o: ["Shortcodes are faster than visual builders — the problem is that WPBakery's license is too expensive for client projects", "If WPBakery is deactivated, the content becomes unreadable shortcode tags — creating vendor lock-in and migration pain", "Shortcodes are a WordPress security vulnerability that allows SQL injection attacks through malformed shortcode attributes", "WPBakery shortcodes conflict with Gutenberg blocks — WordPress core doesn't support both systems simultaneously"], c: 1 },
    { q: "A Fiverr client asks 'Should I use Elementor or Gutenberg for my WooCommerce store?' Your answer:", o: ["Always Gutenberg — it's free and native to WordPress so it's always the better choice for any project type", "Elementor Pro — its WooCommerce Builder lets you design custom product pages, cart, and checkout visually without code", "Neither — WooCommerce has its own built-in page builder that handles all store pages automatically without any plugins", "Always custom code — page builders can't handle WooCommerce properly and will break the checkout process"], c: 1 },
    { q: "To reduce DOM elements on an Elementor page, you should:", o: ["Use more sections with fewer columns — Elementor sections are lighter than columns in terms of DOM node generation", "Avoid excessive nesting of sections within sections, minimize empty spacer widgets, target under 1,500 total DOM elements", "Switch to Divi — it generates fewer DOM elements per section compared to Elementor's column-based layout system", "DOM elements don't affect performance — focus only on image optimization and caching for PageSpeed improvements"], c: 1 }
];

// =============================================================================
// TASK 13: ADVANCED WOOCOMMERCE
// =============================================================================

const task13Content = `
<h2>🛒 TASK 13: ADVANCED WOOCOMMERCE</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(249, 115, 22, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">Beyond Basic WooCommerce</h3>
    <p>Task 6 covered WooCommerce fundamentals. This task covers the <strong>advanced features that separate $500 stores from $2,500+ builds</strong> on Fiverr — subscriptions, multi-vendor, complex checkout flows, and CRO systems.</p>
</div>

<div class="content-section">
    <h3>📦 Advanced Product Types</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Case</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plugin Required</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Variable Products</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size/color variations with different prices, images, stock per variant</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Core WooCommerce</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Subscriptions</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly boxes, SaaS, membership renewals, recurring deliveries</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Subscriptions ($239/yr) or YITH Subscriptions</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Memberships</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gated content, member-only pricing, drip content</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Memberships ($199/yr)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bookings</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Appointments, rentals, class reservations with calendar</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Bookings ($249/yr)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bundles</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Group products at a discount, mix-and-match kits</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Product Bundles ($79/yr)</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🏪 Multi-Vendor Marketplace Setup</h3>
    <p>When a Fiverr client wants their own "mini-Amazon" with multiple sellers:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plugin</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pricing</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Dokan</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$149-$499/yr</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full marketplace with vendor dashboards, commission splits, Stripe Connect</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WCFM</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free + $198/yr premium</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature-rich, vendor shipping, staff management</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WC Vendors</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free + $199/yr pro</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple setup, good for small marketplaces</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>DH Pricing Rule:</strong> Multi-vendor marketplace builds are $2,500+ on Fiverr. They require vendor onboarding setup, commission configuration, payment splitting (Stripe Connect), and vendor dashboard customization. Never quote under $2,000.
    </div>
</div>

<div class="content-section">
    <h3>💳 Payment Gateways — Beyond PayPal & Stripe</h3>
    <ul>
        <li><strong>Stripe:</strong> DH standard for international stores. Supports Apple Pay, Google Pay, Buy Now Pay Later. Setup: WooCommerce → Settings → Payments → Stripe. Always enable <strong>Payment Request Buttons</strong> for mobile conversion.</li>
        <li><strong>PayPal Commerce Platform:</strong> Replaces old PayPal Standard. Supports credit/debit cards directly, Pay in 4 (BNPL). Required for clients targeting US/EU buyers.</li>
        <li><strong>Razorpay:</strong> For Indian stores (INR transactions). Supports UPI, cards, net banking, wallets. Plugin: WooCommerce Razorpay.</li>
        <li><strong>Square:</strong> For clients with physical retail + online store — unified inventory and POS.</li>
    </ul>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>Never:</strong> Store raw credit card data. Always use tokenized payment gateways. PCI compliance is non-negotiable.
    </div>
</div>

<div class="content-section">
    <h3>🚚 International Shipping Configuration</h3>
    <p>For clients selling globally:</p>
    <ul>
        <li><strong>Shipping Zones:</strong> WooCommerce → Settings → Shipping → Add Zone. Create zones by country/region with different rates.</li>
        <li><strong>Flat Rate vs Calculated:</strong> Flat rate for simplicity, calculated rates (ShipStation, Shippo) for accuracy. DH recommends flat rate for stores under 50 products.</li>
        <li><strong>Free Shipping Threshold:</strong> "Free shipping over $75" — set as conditional flat rate. This alone can increase AOV by 15-25%.</li>
        <li><strong>Tax Configuration:</strong> WooCommerce Tax or use TaxJar/Avalara for automatic tax calculation by region. EU VAT requires WooCommerce EU VAT Number plugin.</li>
    </ul>
</div>

<div class="content-section">
    <h3>💰 WooCommerce CRO — Cart Abandonment & Upsells</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CRO Feature</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plugin</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue Impact</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart Abandonment Emails</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CartFlows / Retainful / Mailchimp</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recovers 10-15% of abandoned carts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order Bump (checkout upsell)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CartFlows / WooFunnels</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+15-25% AOV</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cross-sells on Cart Page</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Core WooCommerce (built-in)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+5-10% AOV</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgency (Countdown Timer)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">YITH Countdown / HurryTimer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+8-12% conversion</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social Proof Popups</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">TrustPulse / WPfomify</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+10-15% conversion</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔧 Custom Checkout Optimization</h3>
    <ul>
        <li><strong>Remove unnecessary fields:</strong> Company name, Phone 2, Address 2 — every extra field drops conversion by ~3%</li>
        <li><strong>WooCommerce Blocks Checkout:</strong> Modern block-based checkout with built-in express payment (Apple Pay, Google Pay). Faster than classic checkout.</li>
        <li><strong>Guest Checkout:</strong> Always enable. Forcing account creation kills 25%+ of conversions.</li>
        <li><strong>One-Page Checkout:</strong> CartFlows or FunnelKit — combines cart + checkout on single page for fewer clicks.</li>
        <li><strong>Trust Signals at Checkout:</strong> Security badges, money-back guarantee, accepted payment icons below the Place Order button.</li>
    </ul>
</div>
`;

const task13Quiz = [
    { q: "A Fiverr client wants to sell monthly subscription boxes. Which WooCommerce plugin is needed?", o: ["WooCommerce core handles subscriptions natively — no additional plugin is required for recurring payment products", "WooCommerce Subscriptions or YITH Subscriptions — these handle recurring billing, renewal management, and subscriber dashboards", "WooCommerce Memberships — this plugin handles all recurring payment scenarios including physical subscription boxes", "WooCommerce Bookings — subscription boxes are a type of recurring booking that this plugin manages automatically"], c: 1 },
    { q: "A client wants to build a marketplace where other vendors can sell products. Minimum Fiverr quote should be:", o: ["$500 — multi-vendor is just a plugin install on top of regular WooCommerce with minimal configuration needed", "$2,500+ — requires vendor onboarding, commission configuration, Stripe Connect payment splitting, and vendor dashboards", "$800 — it's slightly more complex than a regular store but Dokan's free version handles most requirements", "$10,000+ — marketplace builds are enterprise-level projects that require custom development from scratch"], c: 1 },
    { q: "Guest checkout should be enabled on WooCommerce stores because:", o: ["It's required by WooCommerce terms of service — disabling guest checkout violates the plugin's usage agreement", "WordPress security best practices recommend guest checkout to prevent storing unnecessary user account data", "Forcing account creation before purchase kills 25%+ of conversions — most first-time buyers won't create an account", "Guest checkout loads faster than logged-in checkout because WordPress skips user authentication on every page load"], c: 2 },
    { q: "A client's WooCommerce store sells internationally. For automatic tax calculation by region, the best approach is:", o: ["Manually calculate and enter tax rates for every country — this is the most accurate method for international stores", "Use TaxJar or Avalara integration for automatic real-time tax calculation by region — handles VAT, GST, sales tax", "Set a flat 10% tax rate globally — international tax rates are too complex and a flat rate simplifies everything", "Disable taxes entirely — most online stores don't charge tax and customers prefer seeing the final price without tax"], c: 1 },
    { q: "Cart abandonment recovery emails can recover what percentage of abandoned carts?", o: ["50-60% — most abandoned carts are recovered when you send a follow-up email within the first hour after abandonment", "1-2% — cart abandonment emails are largely ineffective because customers who leave have already decided not to buy", "10-15% — with a proper 3-email sequence (1hr, 24hr, 72hr) including incentives like discounts on the final email", "100% — every abandoned cart can be recovered with the right email sequence and sufficiently large discount offers"], c: 2 },
    { q: "A client needs both online store AND physical retail POS with unified inventory. Best payment gateway:", o: ["Stripe — it handles both online and in-store payments through a single unified inventory management system always", "Razorpay — it's specifically designed for omnichannel retail with built-in POS hardware support for Indian stores", "Square — provides unified online + POS system with shared inventory, works seamlessly with WooCommerce Square plugin", "PayPal — its Here card reader integrates directly with WooCommerce for both online and physical store transactions"], c: 2 },
    { q: "WooCommerce Blocks Checkout vs Classic Checkout — the key advantage of Blocks:", o: ["Blocks checkout is required for WooCommerce 8.0+ — classic checkout is deprecated and will stop working soon", "Blocks checkout has built-in express payment buttons (Apple Pay, Google Pay) and is faster than classic shortcode-based checkout", "Classic checkout is always superior — block-based checkout is experimental and not recommended for production stores", "Blocks checkout works only with Gutenberg — stores using Elementor must use classic checkout exclusively"], c: 1 },
    { q: "For Indian clients accepting INR payments with UPI support, the recommended gateway is:", o: ["Stripe — it supports all currencies including INR and all payment methods including UPI for Indian transactions", "PayPal Commerce Platform — it's the global standard and handles INR transactions with full UPI integration", "Razorpay — supports INR with UPI, cards, net banking, and Indian wallets through the WooCommerce Razorpay plugin", "Square — it's the best option for Indian stores because of its low transaction fees and UPI compatibility"], c: 2 },
    { q: "Free shipping threshold ('Free shipping over $75') can increase Average Order Value by:", o: ["0-1% — free shipping thresholds have minimal impact on customer purchasing behavior in most product categories", "15-25% — customers add items to reach the threshold, directly increasing the average cart value per transaction", "50%+ — free shipping thresholds double the average order value because customers buy twice as many products", "It decreases AOV — customers buy fewer expensive items and instead choose cheaper products to stay near the threshold"], c: 1 },
    { q: "A WooCommerce store has checkout fields: Name, Email, Phone, Company, Address 1, Address 2, City, State, Zip, Country, Order Notes. What should you remove?", o: ["Nothing — all checkout fields are legally required for processing orders and shipping products to customers internationally", "Company name, Address 2, and Order Notes — every unnecessary field drops conversion by ~3% so minimize to essentials", "Email — customers can be contacted through their WordPress user account profile instead of requiring email at checkout", "Only Order Notes — all other fields are essential for shipping and should never be removed from the checkout form"], c: 1 },
    { q: "Order Bumps (upsells at checkout) typically increase AOV by:", o: ["0-1% — checkout upsells are rarely clicked because customers are focused on completing their purchase quickly", "+15-25% — a well-placed order bump with a complementary product at a discount converts 10-30% of checkout visitors", "+50-75% — order bumps are the most effective revenue strategy and should be the primary focus of any store build", "+100% — order bumps double the average order value by definition since they add a second product to every order"], c: 1 },
    { q: "WooCommerce Subscriptions plugin manages renewal billing. If a subscriber's card expires:", o: ["The subscription is automatically cancelled with no notification — the customer must manually resubscribe with new card details", "WooCommerce sends dunning emails (failed payment notifications) and retries billing before suspending — giving the customer time to update", "The store owner must manually contact each subscriber with an expired card and process payment through a phone call", "WooCommerce charges the customer's bank account directly since it stores the full card number for recurring billing"], c: 1 }
];

// =============================================================================
// TASK 14: WORDPRESS <-> SHOPIFY MIGRATION
// =============================================================================

const task14Content = `
<h2>🔄 TASK 14: WORDPRESS & SHOPIFY MIGRATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(59, 130, 246, 0.15)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;">Migration = High-Value Fiverr Gig</h3>
    <p>Platform migration is one of our <strong>highest-value services on Fiverr</strong>. Clients pay $1,200-$3,000+ for a clean migration because they're terrified of losing data, SEO rankings, or sales. Your job: make it seamless.</p>
</div>

<div class="content-section">
    <h3>📊 Why Clients Migrate WordPress → Shopify</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reason</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Says</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real Issue</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maintenance burden</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm tired of updating plugins"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP requires ongoing server + plugin management</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security concerns</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"My site got hacked"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP is target #1 for bots (40%+ of web)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scaling issues</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Site crashes during sales"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shared hosting can't handle traffic spikes</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Better e-commerce</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I want a real online store"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify is purpose-built for selling</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Data Migration Process</h3>
    <p><strong>Step-by-step for WP/WooCommerce → Shopify:</strong></p>
    <ol>
        <li><strong>Export from WooCommerce:</strong> Products (CSV), Customers (CSV), Orders (CSV), Blog posts (XML export), Media library (download via FTP/SFTP)</li>
        <li><strong>Use migration tools:</strong> Cart2Cart (automated, $69-$299 depending on product count) or LitExtension ($29+). These handle product variants, images, categories, customer passwords (hashed), order history.</li>
        <li><strong>Manual migration alternative:</strong> For small stores (<50 products), export WooCommerce CSV → reformat columns to match Shopify CSV template → import via Shopify Admin → Products → Import.</li>
        <li><strong>Content migration:</strong> Pages and blog posts — copy content manually or use Shopify's WordPress importer app for blog posts. Reformat layouts for Shopify's editor.</li>
        <li><strong>Media assets:</strong> Download all /wp-content/uploads/ via FTP. Re-upload to Shopify Files (Settings → Files) or import with products.</li>
    </ol>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>Critical:</strong> Always migrate to a development/trial Shopify store first. Never migrate directly to a live store. Test everything before switching DNS.
    </div>
</div>

<div class="content-section">
    <h3>🔍 SEO Migration — The Most Critical Part</h3>
    <p>A bad migration can <strong>destroy years of SEO rankings overnight</strong>. Here's the process:</p>
    <ol>
        <li><strong>URL Mapping:</strong> Export all WordPress URLs (use Screaming Frog or Yoast sitemap). Map each to its Shopify equivalent. WordPress: <code>/product/blue-shirt/</code> → Shopify: <code>/products/blue-shirt</code></li>
        <li><strong>301 Redirects:</strong> Create redirects in Shopify (Settings → Navigation → URL Redirects) or use the Bulk Redirect app. EVERY old URL must redirect to its new location.</li>
        <li><strong>Meta Data:</strong> Transfer all meta titles and descriptions. Shopify stores these per-page and per-product. Don't lose optimized metadata.</li>
        <li><strong>Sitemap:</strong> Submit new Shopify sitemap to Google Search Console immediately after DNS switch. Request indexing for key pages.</li>
        <li><strong>Monitor:</strong> Check Google Search Console weekly for 3 months post-migration. Watch for 404 errors, crawl issues, ranking drops.</li>
    </ol>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong>The #1 Migration Mistake:</strong> Forgetting to set up 301 redirects. This causes Google to see every page as "new" and drops rankings for months. ALWAYS redirect.
    </div>
</div>

<div class="content-section">
    <h3>🎨 Design Recreation</h3>
    <p>The client's existing WordPress design needs to be recreated on Shopify:</p>
    <ul>
        <li><strong>Find a matching Shopify theme:</strong> Dawn (free, clean), Prestige (premium, luxury), Impulse (fashion/lifestyle). Match the closest to the WP design.</li>
        <li><strong>Customize via theme editor:</strong> Colors, fonts, logo, section order. Use Shopify's visual editor — no code needed for 80% of layout changes.</li>
        <li><strong>Custom Liquid for unique sections:</strong> If the WP site had custom PHP sections, recreate them in Shopify Liquid. This is where WP + Shopify dual expertise pays off.</li>
        <li><strong>Mobile-first:</strong> Always test the recreated design on mobile. Shopify themes are responsive, but custom sections need manual mobile optimization.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🌐 DNS & Domain Migration</h3>
    <ol>
        <li><strong>Before DNS switch:</strong> Verify everything on trial store using the <code>your-store.myshopify.com</code> URL. Test checkout, email notifications, payment processing.</li>
        <li><strong>Add domain to Shopify:</strong> Settings → Domains → Connect existing domain. Shopify provides the required DNS records (A record + CNAME).</li>
        <li><strong>Update DNS records:</strong> At the domain registrar (GoDaddy, Namecheap, Cloudflare), point A record to Shopify's IP and CNAME to shops.myshopify.com.</li>
        <li><strong>SSL Certificate:</strong> Shopify provisions a free SSL certificate automatically. May take up to 48 hours. Don't panic if the site shows "Not Secure" briefly.</li>
        <li><strong>Propagation:</strong> DNS changes take 24-48 hours globally. During this time, some visitors see the old WP site, others see the new Shopify store.</li>
    </ol>
</div>

<div class="content-section">
    <h3>📋 Post-Migration QA Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Details</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product data</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All products, variants, images, prices, descriptions migrated correctly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer data</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer accounts, addresses, order history preserved</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">301 redirects</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Every old URL redirects to correct new URL (test 20+ manually)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO metadata</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta titles and descriptions on all pages and products</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout flow</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Test order end-to-end: add to cart → checkout → payment → confirmation email</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile responsive</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full site tested on iPhone and Android</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Analytics</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GA4, Meta Pixel, Google Search Console connected and tracking</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email flows</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order confirmation, shipping notification, abandoned cart emails working</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>⏱️ DH Migration Timeline (Fiverr)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Phase</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Duration</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tasks</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 1-2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data export + migration tool setup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Export WP data, run Cart2Cart, verify imported data</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 3-7</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design recreation on Shopify</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme setup, customization, section building</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 8-10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO migration + redirects</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">URL mapping, 301 redirects, meta data transfer</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 11-12</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA + client review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full checklist, client approval, revisions</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 13-14</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DNS switch + go-live</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Domain migration, SSL, final testing, handoff</td></tr>
    </table>
</div>
`;

const task14Quiz = [
    { q: "The #1 mistake during WordPress → Shopify migration that destroys SEO rankings is:", o: ["Using the wrong Shopify theme — theme choice is the primary factor in maintaining search engine rankings after migration", "Not migrating customer passwords — Google penalizes stores that force password resets on existing customers", "Forgetting to set up 301 redirects — Google sees every page as 'new' and drops rankings for months without proper redirects", "Migrating too quickly — Google needs at least 6 months notice before any platform change to preserve rankings"], c: 2 },
    { q: "A client has a WooCommerce store with 500 products. The best migration tool approach is:", o: ["Manual CSV export/import — it's always more accurate than automated tools regardless of the number of products", "Cart2Cart or LitExtension — automated tools that handle products, variants, images, customers, and order history", "Rebuild everything from scratch on Shopify — migrating data from WordPress always causes corruption and errors", "Shopify's built-in WordPress importer — it handles full WooCommerce migrations including products and orders natively"], c: 1 },
    { q: "During DNS migration from WordPress to Shopify, some visitors see the old site while others see the new one. This is because:", o: ["The Shopify server is overloaded and can't serve all visitors simultaneously during the initial launch period", "DNS propagation takes 24-48 hours — ISPs worldwide cache DNS records and each refreshes independently at different times", "The WordPress hosting hasn't been cancelled yet so it's still serving content to visitors who haven't cleared their cache", "Shopify requires a manual approval process that routes visitors to the new site one geographic region at a time"], c: 1 },
    { q: "URL mapping for SEO migration means:", o: ["Creating a spreadsheet mapping every old WordPress URL to its new Shopify equivalent, then creating 301 redirects for each one", "Copying the WordPress URL structure exactly — Shopify can use the same URL format as WordPress without any changes", "Only mapping the homepage URL — inner page URLs don't affect SEO rankings and can be left without redirects", "Submitting a request to Google asking them to update their index with the new URLs — redirects are not necessary"], c: 0 },
    { q: "A Fiverr client asks 'Will I lose my Google rankings during migration?' The honest answer is:", o: ["Yes, permanently — platform migrations always destroy rankings and there's no way to prevent SEO loss during migration", "No — with proper 301 redirects, meta data transfer, and sitemap submission, rankings are preserved. Minor fluctuation for 2-4 weeks is normal.", "Rankings don't matter — Shopify's built-in SEO is so much better than WordPress that rankings will improve immediately", "It depends on how much you pay — premium migration ($5,000+) preserves rankings but budget migration doesn't"], c: 1 },
    { q: "Before switching DNS to Shopify, you should:", o: ["Switch DNS immediately after importing products — testing on the live domain is the most reliable way to verify everything works", "Verify everything on the trial store using the myshopify.com URL, test checkout end-to-end, then switch DNS only after client approval", "Ask the client to test on their phone — developer testing is not reliable and the client should be the primary QA tester", "Cancel the WordPress hosting first, then switch DNS — this ensures there's no confusion about which site is active"], c: 1 },
    { q: "For a WooCommerce store with 30 products, the migration approach at DH is:", o: ["Always use Cart2Cart regardless of product count — automated migration is always better than manual for data accuracy", "Manual CSV migration — export WooCommerce CSV, reformat columns to match Shopify CSV template, import via Shopify Admin", "Use the Shopify API to programmatically create each product — this is the only reliable method for small store migration", "Don't migrate products at all — recreate each product manually on Shopify for the cleanest data and best image quality"], c: 1 },
    { q: "Post-migration, Google Search Console shows 50 new 404 errors. The cause and fix:", o: ["Shopify servers are misconfigured — contact Shopify support to fix their server routing for your migrated store domain", "These are crawl errors that will resolve automatically within 48 hours — no action is needed from the developer", "Missing 301 redirects — 50 old WordPress URLs aren't redirecting to Shopify equivalents. Create the missing redirects immediately.", "Google is penalizing the site for migration — submit a reconsideration request explaining the platform change"], c: 2 },
    { q: "Shopify provisions a free SSL certificate after DNS switch. If the site shows 'Not Secure' for 24 hours:", o: ["The SSL has failed — you need to purchase a premium SSL certificate from a third-party provider for Shopify stores", "This is normal — Shopify's SSL provisioning can take up to 48 hours after DNS propagation completes. Don't panic.", "The domain configuration is wrong — delete and re-add the domain in Shopify settings to trigger a new SSL request", "Contact the domain registrar — SSL certificates are issued by the registrar not by Shopify's hosting infrastructure"], c: 1 },
    { q: "DH migration timeline for a 500-product WooCommerce → Shopify project on Fiverr is:", o: ["3 days — automated tools handle everything and the designer just needs to pick a theme and customize colors", "14 days — data migration (Day 1-2), design recreation (Day 3-7), SEO migration (Day 8-10), QA (Day 11-12), DNS switch (Day 13-14)", "30 days — migration projects are inherently slow because DNS propagation alone takes 2 weeks to complete globally", "7 days — anything longer than a week for a migration project is overcharging the client on Fiverr"], c: 1 }
];

// =============================================================================
// TASK 15: WORDPRESS FOR FIVERR DELIVERY
// =============================================================================

const task15Content = `
<h2>📦 TASK 15: WORDPRESS FOR FIVERR DELIVERY</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">Fiverr WordPress = Different Game</h3>
    <p>Building WordPress sites on Fiverr is not the same as freelancing independently. You operate within <strong>Fiverr's ecosystem</strong> — order deadlines, revision policies, buyer expectations, and seller metrics all affect your work. Master this or lose orders.</p>
</div>

<div class="content-section">
    <h3>🏗️ Common Fiverr WordPress Order Types</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Typical Price</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Key Deliverables</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New WordPress Site</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$800-$2,500</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10-14 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme setup, pages, plugins, content, SEO basics</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Store</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$1,200-$3,500</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14-21 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store setup, products, payment, shipping, CRO</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Redesign/Refresh</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$600-$1,800</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7-14 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New theme, content migration, mobile optimization</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bug Fix / Troubleshooting</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$50-$300</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-3 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Diagnose issue, fix, test, document solution</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Optimization</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$150-$500</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-5 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Caching, image optimization, CDN, Core Web Vitals</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 DH WordPress Delivery Workflow</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Day 1:</strong> Order received → Request credentials (WP admin + hosting + domain registrar) → Set up staging</p>
        <p><strong>Day 1-2:</strong> Install theme + plugins → Set brand colors/fonts → Build homepage hero + navigation → Send preview</p>
        <p><strong>Day 3-7:</strong> Build all pages → Upload content → Configure plugins → Set up forms + SEO</p>
        <p><strong>Day 8-10:</strong> WooCommerce setup (if applicable) → Payment + shipping → Products uploaded</p>
        <p><strong>Day 11-12:</strong> Speed optimization → Mobile testing → Cross-browser check → QA checklist</p>
        <p><strong>Day 13-14:</strong> Client review → Revisions → Final QA → Deliver on Fiverr → Loom walkthrough</p>
    </div>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #34D399; padding: 20px; margin: 15px 0;">
        <strong>Day 1-2 Preview = Non-Negotiable.</strong> Send the client a homepage preview within 48 hours. This builds trust and locks in the design direction early. Don't wait until Day 10.
    </div>
</div>

<div class="content-section">
    <h3>🏠 Hosting Recommendations for Fiverr Clients</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Host</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DH Recommendation</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cloudways</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$14-$46/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance-focused, scalable</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Top pick for WooCommerce</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>SiteGround</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$3-$14/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Beginners, good support</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Budget clients, small sites</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WP Engine</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$25-$60/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Managed WP, enterprise</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Premium clients, agencies</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hostinger</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$3-$10/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ultra-budget projects</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only for informational sites</td></tr>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>Never recommend:</strong> GoDaddy shared hosting, Bluehost EIG plans, or any $1/mo "deals." They crash under real traffic and make your work look bad.
    </div>
</div>

<div class="content-section">
    <h3>🔑 Client Access Management</h3>
    <ul>
        <li><strong>Request from client:</strong> WordPress admin login, hosting cPanel/panel access, domain registrar login (for DNS changes)</li>
        <li><strong>Create staging:</strong> Use hosting staging feature (Cloudways/SiteGround have 1-click staging) or use WP Staging plugin</li>
        <li><strong>User roles:</strong> Work as Administrator during development. Before handoff: create client an Administrator account, create yourself an Editor or Custom role for ongoing support</li>
        <li><strong>After delivery:</strong> Change your admin password or delete your admin account. Never leave admin access to client sites without their knowledge.</li>
    </ul>
</div>

<div class="content-section">
    <h3>⏱️ Time Estimation for Common WordPress Tasks</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Junior Dev</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Experienced Dev</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install WP + theme + basic setup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-60 min</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build homepage with Elementor</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-6 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 hours</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set up WooCommerce + 50 products</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8-12 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-6 hours</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contact form + email integration</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30 min</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed optimization (full pass)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-6 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 hours</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO setup (Yoast + meta data)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-4 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 hours</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom plugin (medium complexity)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">16-24 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8-12 hours</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>Buffer Rule:</strong> Always add 20-30% buffer to your estimates. If you think 5 days, quote 7. If you think 10, quote 14. Under-promising and over-delivering is the DH way.
    </div>
</div>

<div class="content-section">
    <h3>📝 Fiverr Delivery Message Template (WordPress)</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><em>Hi [Client Name]!</em></p>
        <p><em>Your WordPress website is complete and ready for review!</em></p>
        <p><em><strong>What's been delivered:</strong></em></p>
        <ul style="margin: 10px 0;">
            <li><em>Complete WordPress site with [X] pages</em></li>
            <li><em>Mobile responsive design</em></li>
            <li><em>SEO foundation (meta titles, descriptions, sitemap)</em></li>
            <li><em>[WooCommerce with X products if applicable]</em></li>
            <li><em>Speed optimized (PageSpeed score: [X])</em></li>
        </ul>
        <p><em><strong>Training video:</strong> [Loom link] — shows you how to edit pages, add products, and update content.</em></p>
        <p><em><strong>Login credentials:</strong> Sent via Fiverr inbox (never in delivery message for security).</em></p>
        <p><em>Please review and let me know if you'd like any adjustments. I'm here to help!</em></p>
    </div>
</div>

<div class="content-section">
    <h3>✅ WordPress QA Checklist for Fiverr Delivery</h3>
    <ul>
        <li>All pages load without errors (check browser console)</li>
        <li>Mobile responsive on 3 screen sizes (phone, tablet, desktop)</li>
        <li>All forms submit correctly and send email notifications</li>
        <li>No placeholder text (Lorem Ipsum) anywhere on the site</li>
        <li>All images optimized (WebP, compressed, proper dimensions)</li>
        <li>SSL certificate active (https:// with padlock)</li>
        <li>Favicon uploaded and displaying</li>
        <li>Google Analytics / GA4 tracking code installed</li>
        <li>SEO: All pages have unique meta titles and descriptions</li>
        <li>WooCommerce: Test order works end-to-end (if applicable)</li>
        <li>PageSpeed: Mobile 75+, Desktop 85+ (target 90+)</li>
        <li>Cross-browser: Tested in Chrome, Firefox, Safari, Edge</li>
        <li>Backup: Full site backup before delivery</li>
    </ul>
</div>
`;

const task15Quiz = [
    { q: "A Fiverr client orders a WordPress site. What's the FIRST thing you request from them?", o: ["Their brand colors and logo — you need design assets before anything else to start building the homepage", "WordPress admin login, hosting panel access, and domain registrar login — you can't start without credentials", "A detailed sitemap of every page they want — without this the project scope is undefined and you can't begin", "Their budget breakdown — you need to know how much they're paying for each feature before starting work"], c: 1 },
    { q: "DH rule: Send homepage preview within:", o: ["5 days — the first week is for setup and the client shouldn't expect visual progress that quickly", "48 hours (Day 1-2) — builds trust, locks design direction early, and shows you're actively working on the project", "On delivery day — sending previews mid-project invites scope creep and unnecessary revision requests", "24 hours — you should have the entire homepage complete within the first day of receiving the order"], c: 1 },
    { q: "A client needs a WooCommerce store for 50 products on Fiverr. Estimated timeline:", o: ["3 days — WooCommerce setup is mostly automated and 50 products can be imported via CSV in minutes", "14-21 days — includes store setup, products, payment, shipping, CRO, QA, client review, and revisions", "30 days — WordPress WooCommerce projects always take at least a month regardless of product count", "7 days — a week is the standard delivery time for all WordPress projects on Fiverr at Digital Heroes"], c: 1 },
    { q: "For a WooCommerce Fiverr project, the DH recommended hosting is:", o: ["GoDaddy shared hosting — it's the most popular hosting provider and clients recognize the brand name", "Cloudways — performance-focused, scalable, and our top pick specifically for WooCommerce stores", "Any $1/month deal — the client's hosting choice doesn't affect the quality of your WordPress development", "Always use the client's existing hosting — never recommend changing hosts even if the current one is terrible"], c: 1 },
    { q: "After completing a WordPress site, you should handle admin access by:", o: ["Keep your admin access indefinitely — you'll need it for ongoing support and the client won't notice", "Create the client an Administrator account, then change your password or delete your account after handoff", "Share your admin login with the client — there's no need for separate accounts on a WordPress site", "Remove all admin accounts and give the client an Editor role — they don't need Administrator access"], c: 1 },
    { q: "The Buffer Rule for time estimates says: if you think 5 days, quote:", o: ["5 days — always be honest about timelines and never add extra days to your project estimates on Fiverr", "3 days — under-promise and over-deliver means quoting less time than you need so the client is impressed", "7 days — add 20-30% buffer for unexpected issues, revisions, and client response delays", "10 days — double your estimate to guarantee you never miss a deadline regardless of what happens"], c: 2 },
    { q: "A WordPress speed optimization order on Fiverr should target:", o: ["Mobile PageSpeed 75+, Desktop 85+ — with a target of 90+ for both using caching, image optimization, and CDN", "Mobile PageSpeed 50+ — anything above 50 is considered 'green' by Google and is acceptable for client delivery", "Perfect 100 on both — anything less than a perfect score is unacceptable and will get a negative review", "PageSpeed doesn't matter — real-world loading time is the only metric that affects user experience and SEO"], c: 0 },
    { q: "Fiverr delivery message for a WordPress site should NEVER include:", o: ["A Loom walkthrough video showing the client how to edit their site and manage content independently", "Login credentials — never include passwords in the delivery message. Send them separately via Fiverr inbox.", "A list of what was delivered including pages, features, PageSpeed score, and SEO setup details", "A request for the client to review and provide feedback on the delivered WordPress website"], c: 1 },
    { q: "A client's existing WordPress site uses GoDaddy shared hosting and crashes during promotions. You recommend:", o: ["Upgrading to GoDaddy's premium shared plan — the same provider just with more resources will solve the problem", "Migrating to Cloudways or SiteGround — shared hosting can't handle traffic spikes, need managed/VPS hosting", "Just adding a CDN — Cloudflare free plan will solve all performance issues without changing the hosting provider", "Doing nothing — if the site only crashes during promotions it's acceptable and the client should expect some downtime"], c: 1 },
    { q: "Before delivering a WordPress site on Fiverr, the QA checklist requires testing forms because:", o: ["Fiverr's Terms of Service require proof that all forms work — without this the delivery can be flagged as incomplete", "If forms don't send email notifications, the client loses leads without knowing. Test every form with a real submission.", "Forms are the most complex WordPress feature and are the #1 cause of client revision requests on Fiverr", "Only contact forms need testing — other form types like newsletter signups work automatically after installation"], c: 1 },
    { q: "Staging environment for WordPress Fiverr projects should be:", o: ["The live site — work directly on the live site to save time since staging is only needed for enterprise projects", "Created using the hosting's staging feature (Cloudways/SiteGround 1-click) or WP Staging plugin — never work directly on live", "A local XAMPP installation — always develop locally and upload files to the server when the site is complete", "Not needed — WordPress sites are simple enough that staging environments are unnecessary overhead"], c: 1 },
    { q: "For a WordPress bug fix order ($50-$300) on Fiverr, the delivery process is:", o: ["Fix the bug, deliver immediately without testing — small orders don't require QA or documentation", "Diagnose the issue, fix it, test thoroughly, document the solution, and deliver with an explanation of what was wrong", "Tell the client to upgrade to a full redesign — bug fixes are not worth the time at such low prices", "Fix only the reported bug and nothing else — even if you notice other critical issues, those are separate orders"], c: 1 }
];

// =============================================================================
// TASK 16: CRO & DESIGN FOR WORDPRESS
// =============================================================================

const task16Content = `
<h2>🎨 TASK 16: CRO & DESIGN FOR WORDPRESS</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.15)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">Design That CONVERTS, Not Just Looks Pretty</h3>
    <p>A beautiful WordPress site that doesn't convert is a failure. At Digital Heroes, every design decision has a <strong>conversion rationale</strong>. This task teaches you the psychology behind high-converting WordPress sites.</p>
</div>

<div class="content-section">
    <h3>🎨 Color Theory for E-Commerce</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(236, 72, 153, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Color</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Psychology</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Red/Orange</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgency, excitement, action</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sale badges, CTA buttons, countdown timers</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blue</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust, reliability, calm</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Finance, tech, healthcare, B2B sites</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Green</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growth, health, nature, money</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Eco brands, success messages, checkout</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Black/Gold</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury, premium, exclusivity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fashion, jewelry, high-end brands</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">White/Minimal</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clean, modern, spacious</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tech products, minimalist brands, SaaS</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F472B6; padding: 20px; margin: 15px 0;">
        <strong>DH Rule:</strong> CTA buttons must visually POP. Use a contrasting color that doesn't appear elsewhere on the page. If the site is blue, make CTAs orange. If the site is green, make CTAs red.
    </div>
</div>

<div class="content-section">
    <h3>📐 Visual Hierarchy & Eye-Tracking Patterns</h3>
    <ul>
        <li><strong>F-Pattern:</strong> Users scan left-to-right across the top, then down the left side. Place your headline, logo, and nav at the top. Key content along the left margin. Best for: text-heavy pages, blogs, about pages.</li>
        <li><strong>Z-Pattern:</strong> Users scan: top-left → top-right → bottom-left → bottom-right. Place: logo (top-left), CTA (top-right), benefits (middle), final CTA (bottom-right). Best for: landing pages, homepages, product pages.</li>
        <li><strong>Hierarchy tools:</strong> Size (bigger = more important), Color (bright = attention), Spacing (white space isolates key elements), Position (above fold = seen first)</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔝 Above-the-Fold Optimization</h3>
    <p>The area visible without scrolling is your most valuable real estate. It must contain:</p>
    <ol>
        <li><strong>Clear headline:</strong> What do you sell? Who is it for? "Premium Matcha for Modern Wellness" not "Welcome to Our Store"</li>
        <li><strong>Sub-headline:</strong> One supporting sentence with a benefit or social proof</li>
        <li><strong>Primary CTA:</strong> "Shop Now", "Get Started", "Browse Collection" — visible, contrasting, above the fold</li>
        <li><strong>Hero image/video:</strong> High-quality product or lifestyle image. Never use stock photos that look generic.</li>
        <li><strong>Trust indicator:</strong> "Free Shipping Over $50" / "4.9 Stars on 500+ Reviews" / "As Seen In [logos]"</li>
    </ol>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>Common Mistake:</strong> Giant hero slider with 5 images rotating every 3 seconds. Sliders kill conversion — users can't read them. Use a SINGLE static hero with one clear message and CTA.
    </div>
</div>

<div class="content-section">
    <h3>🛡️ Trust Signals That Drive Conversions</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust Signal</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Where to Place</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WordPress Plugin</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer Reviews</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product pages, homepage</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WooCommerce Reviews / Judge.me</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security Badges</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Footer, checkout page</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Elementor Image Widget</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money-Back Guarantee</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product pages, cart page</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom section in theme</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"As Seen In" Logos</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Below hero section</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Elementor Logo Carousel</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-Time Activity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bottom-left popup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">TrustPulse / WPfomify</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📱 Mobile-First WordPress Design</h3>
    <p>60%+ of e-commerce traffic is mobile. Design for mobile FIRST, then scale up to desktop.</p>
    <ul>
        <li><strong>Touch targets:</strong> Buttons minimum 44x44px. Fingers are imprecise — small buttons = missed clicks = lost sales.</li>
        <li><strong>Sticky mobile CTA:</strong> "Add to Cart" or "Shop Now" fixed at bottom of screen on product pages. Never let the CTA scroll out of view.</li>
        <li><strong>Image sizes:</strong> Different images for mobile vs desktop. Mobile hero images should be taller (16:9 or 4:3), desktop wider (21:9).</li>
        <li><strong>Font sizes:</strong> Body text minimum 16px on mobile. Headlines 24-32px. Anything smaller is unreadable and Google penalizes it.</li>
        <li><strong>Hamburger menu:</strong> Clean slide-out navigation. Include search bar prominently. Don't hide search behind two taps.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🧠 Cialdini's 6 Persuasion Principles for WordPress</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Principle</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WordPress Implementation</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reciprocity</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free guide download, free shipping threshold, free sample with first order</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Scarcity</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low stock badges ("Only 3 left"), countdown timers, limited-edition labels</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Authority</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"As Seen In" logos, certifications, expert endorsements, press mentions</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Consistency</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Newsletter signup (small yes → purchase later), wishlist, "save for later"</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Liking</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">About page with founder story, behind-the-scenes, team photos, brand voice</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Social Proof</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reviews, UGC photos, "500+ customers served", Instagram feed integration</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization Workflow</h3>
    <ol>
        <li><strong>Before upload:</strong> Resize to max dimensions needed (e.g., 1200px wide for content, 1920px for hero). Don't upload 4000px originals.</li>
        <li><strong>Format:</strong> Convert to WebP using ShortPixel, Imagify, or Smush plugin. WebP is 25-35% smaller than JPEG at same quality.</li>
        <li><strong>Compression:</strong> Use lossy compression at 80-85% quality. Visually identical to 100% but 60-70% smaller file size.</li>
        <li><strong>Lazy loading:</strong> WordPress 5.5+ has native lazy loading (<code>loading="lazy"</code>). Verify it's enabled. Don't lazy-load hero images — they should load immediately.</li>
        <li><strong>srcset:</strong> WordPress auto-generates responsive image sizes. Verify your theme outputs <code>srcset</code> attributes so browsers download the right size for each device.</li>
    </ol>
</div>
`;

const task16Quiz = [
    { q: "A client's WordPress homepage has a hero slider with 5 rotating images. From a CRO perspective, you should:", o: ["Keep the slider but slow it down — 10 seconds per slide gives users enough time to read each message", "Replace it with a SINGLE static hero image with one clear headline and CTA — sliders kill conversion rates", "Add more slides — 10 slides gives users more options to find something they're interested in clicking", "Remove the hero section entirely — above-the-fold space should only contain the navigation and product grid"], c: 1 },
    { q: "CTA button color should be:", o: ["The same as the brand's primary color — consistency in design means all elements should match the brand palette", "A contrasting color that doesn't appear elsewhere on the page — it must visually POP to draw attention and clicks", "Always red — red is the universally proven best color for CTA buttons across all industries and demographics", "White or transparent — subtle CTAs feel more premium and don't distract from the content and product images"], c: 1 },
    { q: "The Z-pattern eye-tracking layout is best for:", o: ["Blog posts and text-heavy pages — users read blog content in a Z-pattern from top-left to bottom-right", "Landing pages and homepages — logo top-left, CTA top-right, benefits middle, final CTA bottom-right", "Mobile layouts only — desktop users don't follow predictable eye-tracking patterns due to larger screen sizes", "Footer design — users scan footers in a Z-pattern looking for contact information and social media links"], c: 1 },
    { q: "Mobile touch targets for buttons should be minimum:", o: ["20x20px — small buttons look cleaner on mobile and create a more premium feel for the interface design", "44x44px — fingers are imprecise and small buttons cause missed clicks which means lost sales on mobile", "100x100px — bigger buttons always perform better so making them as large as possible is the best approach", "No minimum — responsive CSS handles button sizing automatically and developers don't need to worry about this"], c: 1 },
    { q: "Cialdini's 'Scarcity' principle on a WordPress product page is implemented by:", o: ["Hiding product prices — scarcity of information makes products feel more exclusive and increases perceived value", "Showing 'Only 3 left in stock' badges and countdown timers — creating urgency to purchase before it's gone", "Limiting the website to members only — restricting access to the entire store creates scarcity of the brand", "Removing product descriptions — less information creates mystery which triggers the scarcity response in buyers"], c: 1 },
    { q: "A WordPress site's hero section must contain all of these EXCEPT:", o: ["Clear headline stating what you sell and who it's for", "Primary CTA button visible above the fold", "A full product catalog grid showing all available products", "Trust indicator like 'Free Shipping' or star rating"], c: 2 },
    { q: "Before uploading images to WordPress, the correct workflow is:", o: ["Upload the original 4000px image — WordPress automatically creates all needed sizes from the original file", "Resize to max needed dimensions, convert to WebP, compress to 80-85% quality, then upload to WordPress", "Upload any size — install a plugin to handle all optimization automatically without any pre-processing needed", "Convert all images to PNG — PNG format is always better quality than JPEG for WordPress product images"], c: 1 },
    { q: "A client's WooCommerce product page has no reviews, no trust badges, and no guarantee mention. What CRO elements to add first?", o: ["A video background — video content is the most effective conversion element and should be prioritized over everything", "Customer reviews section, security badges at checkout, and a money-back guarantee banner on product pages", "More product images — having 20+ images per product is the most important factor for WooCommerce conversion rates", "Social media follow buttons — building a social following is the foundation of trust before other elements matter"], c: 1 },
    { q: "Body text on mobile WordPress sites should be minimum:", o: ["12px — smaller text fits more content on mobile screens and reduces the need for scrolling on small devices", "16px — anything smaller is unreadable on mobile and Google penalizes sites with text that's too small to read", "20px — larger text is always better for mobile readability and there's no reason to use anything smaller", "No minimum — responsive design handles font scaling automatically based on the device screen size"], c: 1 },
    { q: "The 'Social Proof' persuasion principle on a WordPress site includes all EXCEPT:", o: ["Customer reviews with photos on product pages", "Instagram feed integration showing real customers", "'500+ customers served' counter on the homepage", "Hiding the number of products sold to create mystery"], c: 3 },
    { q: "Lazy loading should be applied to all images EXCEPT:", o: ["Product gallery thumbnails below the fold on long product pages with multiple image options for each variant", "Blog post featured images that appear below the fold in the article feed on the blog archive page listing", "Hero images above the fold — they must load immediately because they're the first thing users see on the page", "Footer logo images — they're at the bottom of every page and benefit most from lazy loading optimization"], c: 2 },
    { q: "A sticky mobile CTA bar with 'Add to Cart' fixed at the bottom of the screen is important because:", o: ["It's a design trend that makes the site look modern — clients expect to see sticky bars on all mobile sites", "It keeps the purchase action always visible — users shouldn't have to scroll to find how to buy the product", "Sticky bars improve page speed — they reduce the number of DOM elements needed for the mobile product page", "It's required by WooCommerce — the plugin doesn't function properly without a sticky add-to-cart implementation"], c: 1 }
];

// =============================================================================
// TASK 17: CAREER GROWTH & CERTIFICATION
// =============================================================================

const task17Content = `
<h2>🎓 TASK 17: CAREER GROWTH & CERTIFICATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">Your WordPress Developer Career at Digital Heroes</h3>
    <p>You've learned the technical skills. Now learn how to <strong>grow your career</strong> — from Junior WordPress Developer to Team Lead. This is also your <strong>Final Certification Exam</strong> covering all Tasks 1-16.</p>
</div>

<div class="content-section">
    <h3>📈 WordPress Developer Career Path at DH</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skills Required</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Responsibilities</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Junior WP Dev</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 1-6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme setup, Elementor, basic WooCommerce, plugin config</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build sites under supervision, follow SOPs exactly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mid-Level WP Dev</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 6-18</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom themes, plugin dev, WooCommerce advanced, speed optimization</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Handle projects independently, mentor juniors</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Senior WP Dev</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 18-36</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">REST API, headless WP, complex migrations, security audits</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead complex projects, code review, architecture decisions</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Lead / Dual Expert</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 36+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP + Shopify expertise, team management, client strategy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical leadership, hiring, process improvement</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 WordPress Developer KPIs at DH</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">KPI</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">On-Time Delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fiverr seller level + client trust</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First-Approval Rate</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Less rework = more projects completed</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed Score</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile 75+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client satisfaction + SEO ranking</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bug Rate Post-Delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><5%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quality = fewer support requests</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Satisfaction</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.8+ / 5.0</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fiverr ranking + repeat orders</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 WordPress + Shopify Dual Expertise</h3>
    <p>The most valuable developers at DH are those who can handle <strong>both WordPress AND Shopify</strong> projects. This makes you:</p>
    <ul>
        <li><strong>Unfireable:</strong> You can take any project that comes in, regardless of platform</li>
        <li><strong>Higher earning:</strong> Dual-platform developers are first in line for premium projects</li>
        <li><strong>Migration expert:</strong> You understand both platforms deeply enough to handle WP↔Shopify migrations</li>
        <li><strong>Better problem-solver:</strong> Knowledge of both ecosystems lets you recommend the right platform for each client</li>
    </ul>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #60A5FA; padding: 20px; margin: 15px 0;">
        <strong>Career Goal:</strong> After completing this WordPress certification, start the Shopify Developer Training. Dual certification = maximum career growth.
    </div>
</div>

<div class="content-section">
    <h3>🎯 Specialization Paths</h3>
    <ul>
        <li><strong>WooCommerce Expert:</strong> Deep focus on e-commerce — subscriptions, multi-vendor, complex checkout, CRO. Highest Fiverr demand.</li>
        <li><strong>Gutenberg/FSE Specialist:</strong> Block development, Full Site Editing themes, theme.json mastery. The future of WordPress.</li>
        <li><strong>Headless WordPress:</strong> REST API + WPGraphQL + React/Next.js frontends. Premium pricing, enterprise clients.</li>
        <li><strong>Speed & Security:</strong> Performance audits, Core Web Vitals optimization, security hardening. High-demand maintenance niche.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Final Certification Exam</h3>
    <p>This exam covers <strong>ALL topics from Tasks 1-16</strong>. You must score 100% to earn your WordPress Developer Certification.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>Study Guide:</strong>
        <ul>
            <li>Tasks 1-5: Company culture, WP mindset, core architecture, themes, CPTs</li>
            <li>Tasks 6-10: WooCommerce, plugins, security, performance, REST API</li>
            <li>Tasks 11-16: Deployment, page builders, advanced WooCommerce, migration, Fiverr delivery, CRO & design</li>
        </ul>
    </div>
</div>
`;

const task17Quiz = [
    { q: "A Junior WordPress Developer at DH should be able to independently handle:", o: ["Complex REST API integrations and headless WordPress architecture with React frontends from Day 1", "Theme setup, Elementor builds, basic WooCommerce configuration, and plugin setup under supervision", "Team management, code reviews, and architectural decisions for all WordPress projects from the start", "Only HTML and CSS changes — WordPress development skills aren't expected until the Senior level"], c: 1 },
    { q: "The most valuable developer at Digital Heroes is one who:", o: ["Only knows WordPress deeply — specialization in one platform is always more valuable than broad knowledge", "Can handle both WordPress AND Shopify projects — dual-platform expertise makes you indispensable and first in line for premium work", "Only knows Shopify — WordPress is becoming obsolete and all future DH projects will be on Shopify exclusively", "Knows 10+ platforms at a basic level — breadth of platform knowledge matters more than depth in any single one"], c: 1 },
    { q: "The On-Time Delivery KPI target for WordPress developers at DH is:", o: ["50% — meeting half of deadlines is acceptable given the complexity of WordPress development projects", "90%+ — on-time delivery directly affects Fiverr seller level, client trust, and repeat order rates", "100% always — any missed deadline is grounds for termination regardless of the circumstances or project complexity", "No target — deadlines are flexible guidelines and quality should always take priority over delivery timing"], c: 1 },
    { q: "After completing WordPress certification, the recommended next step is:", o: ["Stop learning — the certification covers everything you'll ever need to know for WordPress development", "Start the Shopify Developer Training — dual certification provides maximum career growth and project flexibility", "Leave Digital Heroes — the certification qualifies you for higher-paying jobs at other companies immediately", "Repeat the WordPress training — going through it twice ensures you've truly mastered all the concepts"], c: 1 },
    { q: "WordPress WooCommerce Expert specialization focuses on:", o: ["Blog design and content layout — WooCommerce experts primarily work on blog-focused WordPress sites", "Subscriptions, multi-vendor, complex checkout, and CRO — the highest demand area on Fiverr for WordPress", "Only basic product setup — WooCommerce expertise means being fast at importing products via CSV files", "WordPress security only — WooCommerce expertise is defined by knowledge of payment security and PCI compliance"], c: 1 },
    { q: "A Mid-Level WP Developer (Month 6-18) should be capable of:", o: ["Only theme installation and plugin activation — custom development isn't expected until the Senior level", "Custom themes, plugin development, advanced WooCommerce, speed optimization, and mentoring junior developers", "Managing the entire development team and making architectural decisions for all company WordPress projects", "Only Elementor page building — custom code is not part of the Mid-Level skill requirements at DH"], c: 1 },
    { q: "First-Approval Rate KPI means:", o: ["The percentage of clients who approve the FIRST design concept without requesting major revisions — target 70%+", "The percentage of job applicants who accept DH's first salary offer during the hiring negotiation process", "How quickly the first homepage preview is approved by the PM — measured in hours from first submission", "The percentage of code that passes the first automated test run — a code quality metric not related to clients"], c: 0 },
    { q: "The Headless WordPress specialization path involves:", o: ["Removing the WordPress admin dashboard entirely and managing content through manual database queries", "REST API + WPGraphQL + React/Next.js frontends — premium pricing for enterprise-level client projects", "Only removing the WordPress header and footer — 'headless' means a minimal theme with no header or footer", "Using WordPress without any plugins installed — a headless setup means running WordPress in its bare default state"], c: 1 },
    { q: "Bug Rate Post-Delivery KPI target is:", o: ["Less than 5% — fewer bugs means fewer support requests and higher client satisfaction scores on Fiverr", "25% — bugs are expected in WordPress development and a quarter of deliveries will naturally have issues", "0% always — any bug found after delivery indicates complete failure in the QA process and is unacceptable", "50% — half of all WordPress sites will have bugs and this is an industry-standard acceptable defect rate"], c: 0 },
    { q: "WordPress is moving toward Full Site Editing. As a DH developer, this means:", o: ["Ignore FSE — it's experimental and won't be relevant for at least 5 more years in production WordPress sites", "Learn Gutenberg blocks and FSE now — it's the future of WordPress and early expertise provides career advantage", "Stop using WordPress entirely — FSE makes WordPress too complex and Shopify is the only viable platform", "Only learn FSE if a client specifically requests it — there's no benefit to learning it proactively"], c: 1 },
    { q: "Client Satisfaction KPI target of 4.8+/5.0 directly affects:", o: ["Nothing — Fiverr ratings are cosmetic and don't affect order volume or seller visibility in search results", "Fiverr search ranking, seller level maintenance, and repeat order likelihood — it's a business-critical metric", "Only your personal performance review — client ratings don't affect the company's Fiverr account at all", "Salary only — ratings below 4.8 result in automatic pay reduction but don't affect anything else"], c: 1 },
    { q: "The Gutenberg/FSE Specialist path requires mastery of:", o: ["Only the classic WordPress editor — Gutenberg expertise means being proficient with the pre-5.0 editing experience", "Block development, Full Site Editing themes, theme.json configuration — the core technologies of modern WordPress", "Elementor and Divi — FSE specialist means knowing all visual page builders including third-party options", "Only writing blog posts in Gutenberg — the specialist path focuses on content creation not development"], c: 1 },
    { q: "A Senior WordPress Developer handles projects that a Junior cannot, specifically:", o: ["Only design tasks — Senior developers focus exclusively on visual design while Juniors handle all the coding work", "REST API integrations, headless WordPress, complex migrations, security audits — technically demanding projects", "Only client communication — Senior developers don't write code, they manage relationships and delegate all development", "The same types of projects but faster — there's no difference in project complexity between Junior and Senior levels"], c: 1 },
    { q: "The DH career trajectory from Junior to Lead typically takes:", o: ["1 month — career progression at Digital Heroes is accelerated and fast performers advance rapidly", "36+ months — Junior (1-6mo), Mid (6-18mo), Senior (18-36mo), Lead (36+mo) with increasing responsibilities", "10 years — Digital Heroes follows the traditional corporate timeline for engineering career progression", "There is no defined path — promotions are random and based solely on the company's financial performance"], c: 1 },
    { q: "Speed & Security specialization is valuable because:", o: ["It's the easiest specialization requiring minimal technical skills compared to other WordPress career paths", "Performance audits, Core Web Vitals optimization, and security hardening are high-demand maintenance services on Fiverr", "WordPress security is not important — Shopify handles all security so WP security skills are becoming obsolete", "Only large enterprise companies need speed and security — Fiverr clients don't care about performance metrics"], c: 1 }
];

// =============================================================================
// TASK 18: PRACTICAL TASK — WOOCOMMERCE STORE BUILD
// =============================================================================

const task18Content = `
<h2>🏗️ TASK 18: PRACTICAL TASK — WooCommerce Store Build (48 Hours)</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(249, 115, 22, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">Time to Build — 48-Hour Challenge</h3>
    <p>Everything you've learned in Tasks 1-17 comes together here. Build a <strong>complete WordPress + WooCommerce store</strong> from scratch. This is your final practical assessment.</p>
</div>

<div class="content-section">
    <h3>📋 The Brief: "Brew & Beyond" — Premium Coffee E-Commerce</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Client:</strong> Brew & Beyond — a premium artisanal coffee brand</p>
        <p><strong>Niche:</strong> Specialty coffee beans, brewing equipment, subscription boxes</p>
        <p><strong>Target Audience:</strong> Coffee enthusiasts aged 25-45, willing to pay premium prices</p>
        <p><strong>Brand Vibe:</strong> Warm, earthy, premium but approachable. Think rich browns, warm creams, modern fonts.</p>
        <p><strong>Reference Sites:</strong> bluebottlecoffee.com, tradecoffee.com, dfrntcoffee.co.uk</p>
    </div>
</div>

<div class="content-section">
    <h3>✅ Deliverables Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deliverable</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirements</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Homepage</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero with CTA, featured products, about snippet, newsletter signup, testimonials</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>About Page</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand story, team/founder section, values, coffee sourcing process</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shop Page</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product grid with filters (by category, price), clean collection layout</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>10+ Products</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimum 10 products with images, descriptions, prices, categories, at least 2 variable products</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product Pages</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Image gallery, description, reviews section, related products, trust badges</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Contact Page</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contact form (working), address/map, email, phone, business hours</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WooCommerce Setup</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart, checkout, payment (Stripe test mode), shipping zones configured</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mobile Responsive</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fully responsive on mobile, tablet, desktop. Test on real devices.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CRO Elements</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust badges, free shipping banner, newsletter popup, related products</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>PageSpeed</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile PageSpeed 75+, Desktop 85+</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📤 Submission Instructions</h3>
    <ol>
        <li>Build the store on a free hosting trial (InfinityFree, 000webhost) or local environment (LocalWP)</li>
        <li>Take screenshots of: Homepage, Shop page, a Product page, Cart, Checkout, Mobile view, PageSpeed result</li>
        <li>Record a 3-5 minute <strong>Loom walkthrough</strong> showing the full store</li>
        <li>Submit via Google Form: <a href="https://forms.gle/digitalheroes-wp-practical" target="_blank" style="color: #60A5FA;">Submission Form</a></li>
    </ol>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>Deadline:</strong> 48 hours from when you start this task. Quality over speed — but prove you can deliver under pressure.
    </div>
</div>

<div class="content-section">
    <h3>📊 Evaluation Rubric</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Criteria</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weight</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What We Check</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Visual hierarchy, color usage, typography, brand consistency</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functionality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All pages work, forms submit, WooCommerce checkout functions</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile Responsiveness</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Looks great and works on all screen sizes</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CRO Implementation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust signals, CTAs, conversion elements present</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed scores, image optimization, clean code</td></tr>
    </table>
</div>
`;

const task18Quiz = [
    { q: "The practical task requires minimum how many products?", o: ["5 products with basic descriptions", "10 products with images, descriptions, prices, categories, and at least 2 variable products", "50 products to simulate a real e-commerce store", "No minimum — the focus is on design quality not product quantity"], c: 1 },
    { q: "PageSpeed targets for the practical task are:", o: ["Mobile 50+, Desktop 70+ — these are the minimum acceptable scores for any WordPress site", "Mobile 75+, Desktop 85+ — demonstrating real speed optimization skills on a WooCommerce store", "Mobile 100, Desktop 100 — perfect scores are required to pass the practical assessment", "No targets — PageSpeed is not evaluated in the practical task assessment rubric"], c: 1 },
    { q: "The Loom walkthrough should be:", o: ["30+ minutes covering every single page in extreme detail with code explanations", "3-5 minutes showing the full store — homepage, shop, product page, cart, checkout, mobile view", "Not required — screenshots are sufficient for the practical task submission", "15-20 minutes with a focus on explaining the code architecture and plugin choices"], c: 1 },
    { q: "Design Quality is weighted at what percentage of the evaluation?", o: ["5% — functionality matters far more than how the site looks visually", "25% — visual hierarchy, color usage, typography, and brand consistency are all evaluated", "50% — design is the most important criteria and everything else is secondary", "0% — the practical task only evaluates functionality and performance metrics"], c: 1 },
    { q: "The submission requires screenshots of all EXCEPT:", o: ["Homepage and Shop page layouts", "Mobile view of the store on a real device", "The WordPress admin dashboard showing installed plugins", "PageSpeed test results for the completed store"], c: 2 }
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

// Register task content on window for dynamic access







