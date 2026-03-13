// Client Chat Simulator Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 18 Tasks, 200+ Quiz Questions, Speed & Empathy Mastery

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    {
        id: 2,
        title: "Chat Chat Mindset",
        description: "Speed Wins",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Chat = Instant. Email = Slow.",
            "🛡️ Concept: Response Time < 60 seconds",
            "🚀 Goal: One Touch Resolution"
        ]
    },
    {
        id: 3,
        title: "Company Knowledge",
        description: "Know Your Product",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📚 Section: Pricing Tiers",
            "📚 Section: Refund Policy (30 Days)",
            "📚 Section: Shipping Times"
        ]
    },
    {
        id: 4,
        title: "Tonality Mastery",
        description: "Reading the Room",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎭 Tone: Professional vs Casual",
            "🎭 Tone: Mirroring the Customer",
            "🚫 Don't: Being too robotic"
        ]
    },
    {
        id: 5,
        title: "Objection Handling",
        description: "Turning No into Yes",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🛡️ Obj: 'Too Expensive'",
            "🛡️ Obj: 'I need to ask my boss'",
            "🛡️ Obj: 'Competitor X is cheaper'"
        ]
    },
    {
        id: 6,
        title: "Speed Tools",
        description: "TextExpander",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "⚡ Tool: Saved Replies / Macros",
            "⚡ Tool: Keyboard Shortcuts",
            "⚡ Tool: Knowledge Base Search"
        ]
    },
    {
        id: 7,
        title: "The Perfect Close",
        description: "Asking for the Sale",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🤝 Tech: The Assumptive Close",
            "🤝 Tech: The Alternative Close ('Tuesday or Wednesday?')",
            "🤝 Tech: The Urgency Close"
        ]
    },
    {
        id: 8,
        title: "System Hygiene",
        description: "CRM Taggng",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🏷️ Action: Tagging conversations (Bug, Sales, Support)",
            "🏷️ Action: Assigning to Correct Team",
            "🏷️ Action: Closing the Ticket"
        ]
    },
    {
        id: 9,
        title: "Firefighter Training",
        description: "De-escalation",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔥 Scenario: The angry ALL CAPS customer",
            "🔥 Scenario: The threat to sue",
            "🧘‍♀️ Skill: Empathy Statements ('I hear you')"
        ]
    },
    {
        id: 10,
        title: "Role Play",
        description: "Simulated Scenarios",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🎭 Sim: Refund Request",
            "🎭 Sim: Feature Request",
            "🎭 Sim: Bug Report"
        ]
    },
{
        id: 11,
        title: "Pre-Sale Communication",
        description: "Inquiry Handling & Custom Offers",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📩 Handling marketplace inquiries",
            "📋 Requirement gathering frameworks",
            "💰 Creating custom offer proposals"
        ]
    },
    {
        id: 12,
        title: "Order Communication",
        description: "Milestone Updates & Expectations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📊 Proactive milestone updates",
            "🤝 Setting clear expectations",
            "📝 Status update templates"
        ]
    },
    {
        id: 13,
        title: "Revisions & Scope Creep",
        description: "Managing Boundaries Professionally",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🔄 Revision policy communication",
            "🚨 Scope creep detection signals",
            "🛡️ Polite pushback templates"
        ]
    },
    {
        id: 14,
        title: "Delivery Messages",
        description: "Presenting Work & Requesting Reviews",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎁 Compelling delivery message writing",
            "✨ Showcasing work effectively",
            "⭐ Review solicitation strategies"
        ]
    },
    {
        id: 15,
        title: "Difficult Conversations",
        description: "Late Deliveries, Refunds & Complaints",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "⏰ Handling late delivery communication",
            "💸 Refund request management",
            "🧯 De-escalation advanced techniques"
        ]
    },
    {
        id: 16,
        title: "Review Management",
        description: "Reputation & Seller Rating",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "⭐ Soliciting positive reviews",
            "🛠️ Handling negative feedback",
            "📈 Maintaining seller rating"
        ]
    },
    {
        id: 17,
        title: "Career Growth",
        description: "Chat Specialist Path at DH",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🚀 Chat specialist career ladder",
            "📊 KPIs and performance metrics",
            "🎯 Certification and advancement"
        ]
    },
    {
        id: 18,
        title: "Chat Scenario Simulations",
        description: "The Final Test",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "🤖 10 real conversation scenarios",
            "🎯 Goal: Model responses for each",
            "⚠️ Covers all modules 1-17"
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
<h2>📚 TASK 1: CLIENT CHAT MINDSET - Speed Wins</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into chat techniques, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Marketing</strong> → brings visitors to site<br>
            ↓<br>
            <strong style="color: #F59E0B; font-size: 1.2em;">⭐ YOU (Client Chat)</strong> → <strong>THE CONVERSION CLOSER - turn browsers into buyers in 60 seconds</strong><br>
            ↓<br>
            <strong style="color: #34D399;">Sale Completed</strong> → revenue generated<br>
            ↓<br>
            <strong style="color: #F472B6;">Happy Customer</strong> → returns and refers<br>
            ↓<br>
            <strong style="color: #A78BFA;">Growth Compounds</strong> → the cycle accelerates
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #D97706; padding: 15px; margin: 15px 0;">
        <strong style="color: #F59E0B;">💬 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a client chat specialist, you are the <strong>CONVERSION CLOSER</strong> who transforms hesitant visitors into paying customers. Most chat visitors are 80% ready to buy—they just need ONE question answered. Response under 30 seconds = 3x higher conversion. Over 60 seconds = 50% abandon to competitors. Your speed and empathy directly generate revenue.</p>
    </div>
    
    <p style="color: #F59E0B; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Slow chat = Lost sales = Revenue walks out the door = Chain weakens. You close deals in real-time.</p>
</div>

<div class="content-section">
    <h3>⚡ THE 60-SECOND RULE</h3>
    <p>Live chat has ONE job: convert visitors into buyers BEFORE they leave the tab. You have approximately <strong>60 seconds</strong> to respond before they're gone forever.</p>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 20px 0;">
        <strong style="color: #EF4444;">⏱️ THE BRUTAL REALITY:</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response > 60 seconds</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50% leave the tab → competitor website</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response > 3 minutes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">80% are gone → sale lost forever</td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response < 30 seconds</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x higher conversion rate → money in the bank</td>
            </tr>
        </table>
        <p style="margin-top: 15px;"><strong>Every second you delay = revenue walking out the door.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 PART 1: PSYCHOLOGY OF LIVE CHAT</h3>
    
    <h4>1.1 Why Customers Use Chat Instead of Email</h4>
    <p>Understanding customer psychology helps you convert more:</p>
    <ul>
        <li><strong>Instant gratification:</strong> They want answers NOW, not in 24 hours</li>
        <li><strong>Low commitment:</strong> Chat feels less "official" than calling</li>
        <li><strong>Multitasking:</strong> They're browsing at work or watching TV</li>
        <li><strong>Final decision:</strong> They're usually 80% ready to buy, just need one question answered</li>
    </ul>
    
    <div class="highlight-box">
        <strong>💡 Key Insight:</strong> Most chat visitors are NOT just "browsing." They're at the point of purchase and have ONE specific question blocking them. Answer that question quickly = instant sale.
    </div>
    
    <h4>1.2 The Two Types of Chat Visitors</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #818CF8;">🛒 Hot Lead (Ready to Buy)</strong><br><br>
                "Does this come in blue?"<br>
                "What's the shipping time to Mumbai?"<br>
                "Is this compatible with iPhone 14?"<br>
                <em style="color: #A5B4FC;">→ Answer fast + suggest purchase = SALE</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #F59E0B;">🤔 Warm Lead (Researching)</strong><br><br>
                "Can you tell me about your warranty?"<br>
                "How does this compare to [competitor]?"<br>
                "What do most customers buy?"<br>
                <em style="color: #FCD34D;">→ Educate + build trust = FUTURE sale</em>
            </td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🤖 PART 2: ROBOT VS HUMAN</h3>
    
    <h4>2.1 The Robot Problem</h4>
    <p>Nothing kills a chat conversion faster than sounding like a bot:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #EF4444;">❌ Robot Response</strong><br><br>
                "Dear Valued Customer,<br>
                Thank you for contacting us. Your inquiry has been received. We will respond shortly.<br>
                Regards, Customer Service"<br><br>
                <em style="color: #F87171;">Feels cold, impersonal, scripted</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #10B981;">✅ Human Response</strong><br><br>
                "Hey! 👋<br>
                Thanks for reaching out. I'm here to help! What can I do for you today?"<br><br>
                <em style="color: #6EE7B7;">Feels warm, personal, genuine</em>
            </td>
        </tr>
    </table>
    
    <h4>2.2 Quick Personalization Techniques</h4>
    <ul>
        <li><strong>Use their name:</strong> "Hi John!" not "Dear Sir"</li>
        <li><strong>Match their energy:</strong> If they use emojis, you can too</li>
        <li><strong>Acknowledge their specific question:</strong> "Great question about the blue version!"</li>
        <li><strong>Be conversational:</strong> Write like you talk</li>
        <li><strong>Show personality:</strong> A little humor goes a long way</li>
    </ul>
    
    <h4>2.3 Emoji Guidelines</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Brand Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Emoji Usage</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Young/Casual (Fashion, Tech)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes! 👍 😊 🎉</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional (Law, Finance)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimal or none</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury (Jewelry, Premium)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sparingly ✨</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 PART 3: THE CONVERSION FRAMEWORK</h3>
    
    <h4>3.1 The CHAT Method</h4>
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px;">
        <p style="font-size: 1.1em;"><strong>C</strong> - Connect: Greet quickly and warmly</p>
        <p style="font-size: 1.1em;"><strong>H</strong> - Help: Answer their specific question directly</p>
        <p style="font-size: 1.1em;"><strong>A</strong> - Add Value: Give extra helpful info they didn't ask for</p>
        <p style="font-size: 1.1em;"><strong>T</strong> - Transition: Guide them toward purchase</p>
    </div>
    
    <h4>3.2 Example in Action</h4>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Customer:</strong> "Does this laptop bag fit a 15-inch MacBook?"</p>
        <p><strong>C - Connect:</strong> "Hi! Great question! 👋"</p>
        <p><strong>H - Help:</strong> "Yes, our Executive Bag fits all 15-inch laptops perfectly, including the MacBook Pro."</p>
        <p><strong>A - Add Value:</strong> "It also has a dedicated padded sleeve + a secret anti-theft pocket for valuables."</p>
        <p><strong>T - Transition:</strong> "Would you like me to check stock in your preferred color? We have midnight blue in stock ready for same-day shipping! 🚀"</p>
    </div>
</div>

<div class="content-section">
    <h3>⚡ PART 4: SPEED OPTIMIZATION</h3>
    
    <h4>4.1 Pre-Written Responses (Canned Responses)</h4>
    <p>The fastest agents have 50+ canned responses ready. These aren't robotic copy-paste—they're starting points you personalize.</p>
    
    <div class="highlight-box">
        <strong>Essential Canned Responses to Prepare:</strong>
        <ul>
            <li>Greeting (different variations)</li>
            <li>All pricing tiers</li>
            <li>Shipping times + costs</li>
            <li>Return policy summary</li>
            <li>Common product FAQs</li>
            <li>Payment methods accepted</li>
            <li>Warranty information</li>
            <li>Closing + thank you messages</li>
        </ul>
    </div>
    
    <h4>4.2 Typing Speed Target</h4>
    <p>Professional chat agents type <strong>60+ WPM</strong> (words per minute). Test yourself at typingtest.com and practice daily if below target.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASKS</h3>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise 1: Speed Test</h4>
        <p>Type this response as fast as you can:</p>
        <p><em>"Hi there! Thanks for reaching out. I'd be happy to help you with that pricing question today. Our Pro plan is $99/month and includes unlimited users!"</em></p>
        <p><strong>Target: Complete in under 20 seconds</strong></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise 2: Robot to Human</h4>
        <p>Rewrite this robot response as a human:</p>
        <p><em>"Dear Customer, Your query has been received. The estimated delivery time is 5-7 business days. Regards, Support Team."</em></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise 3: CHAT Method Practice</h4>
        <p>Customer asks: "Do you have any discounts for first-time buyers?"</p>
        <p>Write a response using the CHAT method (Connect, Help, Add Value, Transition).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>15 challenging questions</strong> testing your understanding of Chat Mindset</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 2</li>
        <li>⏱️ Questions cover speed, personalization, and conversion techniques</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
    <h3>💰 Pricing</h3>
    <p>Basic: $29/mo. Pro: $99/mo. Enterprise: Call us. <br>Know these by heart. Don't look them up.</p>
</div>

<div class="content-section">
    <h3>🚚 Shipping</h3>
    <p>US: 3-5 days. International: 7-14 days. <br>Free shipping over $50.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Memory</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Policy Check</h4>
        <p>Customer asks: "Can I return a shirt I wore once?" (Policy: No, tags must be on). Draft the polite refusal.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Knowledge</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 3: TONALITY MASTERY</h2>

<div class="content-section">
    <h3>🎭 Mirroring</h3>
    <p>If they use emojis, you use emojis. If they are formal ("Dear Support"), you be formal ("Dear Customer"). Match their energy.</p>
</div>

<div class="content-section">
    <h3>🚫 Negative Words</h3>
    <p>Never say "Unfortunately", "No", "Can't". <br>Instead of "We can't do that", say "What I can do is..."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Rewrite</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Positive Spin</h4>
        <p>Rewrite: "Unfortunately we are out of stock until next month." -> (Make it positive).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tone</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 4: OBJECTION HANDLING</h2>

<div class="content-section">
    <h3>🛡️ "Too Expensive"</h3>
    <p>Price is only an issue in the absence of value. Remind them what they GET. "It's $99, but it saves you 10 hours a week."</p>
</div>

<div class="content-section">
    <h3>🛡️ "Just Looking"</h3>
    <p>"Great! What exactly are you looking to solve today?" (Pivot from browsing to problem solving).</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Pivot</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Competitor</h4>
        <p>"Product B is cheaper." Response: Acknowledge price, but highlight our unique 24/7 support.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Objections</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: SPEED TOOLS</h2>

<div class="content-section">
    <h3>⚡ Saved Replies</h3>
    <p>Never type the same thing twice. "/greeting" -> "Hi there! Thanks for messaging us." <br>"/refund" -> Links to refund policy.</p>
</div>

<div class="content-section">
    <h3>⚡ Shortcuts</h3>
    <p>CMD+Enter to send. ALT+Tab to switch chats. Mouse is slow. Keyboard is fast.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Macro Creation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Create 3</h4>
        <p>Write the text for 3 Macros: 1. Greeting. 2. Parking Lot (Wait). 3. Goodbye.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tools</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: THE PERFECT CLOSE</h2>

<div class="content-section">
    <h3>🤝 Assumptive Close</h3>
    <p>"Shall I set that up for you now?" (Assumes they want it).</p>
</div>

<div class="content-section">
    <h3>🤝 Alternative Close</h3>
    <p>"Would you prefer the Monthly or Annual plan?" (Both operate on 'Yes').</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Closing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Soft Close</h4>
        <p>Customer asks about features. Transition to a close: "It sounds like Pro plan is perfect for you. Shall we start the trial?"</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Closing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: SYSTEM HYGIENE</h2>

<div class="content-section">
    <h3>🏷️ Tagging</h3>
    <p>Data drives decisions. If you don't tag "Bug", dev team won't know there are bugs. Tag properly.</p>
</div>

<div class="content-section">
    <h3>✅ Closing Tickets</h3>
    <p>Don't leave tickets 'Open'. If solved, Close it. Keep the queue clean.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Organization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Triage</h4>
        <p>Scenario: Customer reports login error. Action: 1. Reply. 2. Tag 'Bug'. 3. Assign to Eng. 4. Set status 'Pending'.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Hygiene</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 8: FIREFIGHTER TRAINING</h2>

<div class="content-section">
    <h3>🔥 They want to be Heard</h3>
    <p>Angry people vent. Let them vent. Don't interrupt. Say "I completely understand why that is frustrating."</p>
</div>

<div class="content-section">
    <h3>🧘‍♀️ Move to Resolution</h3>
    <p>Once they are calm, pivot. "Now that I understand the issue, here is how we fix it."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: De-escalation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: The Apology</h4>
        <p>Customer: "YOU CHARGED ME TWICE!!!". Draft the reply. (Apologize + Fix + Bonus).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Firefighting</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 9: ROLE PLAY</h2>

<div class="content-section">
    <h3>🎭 Mock Scenarios</h3>
    <p>Practice makes permanent. We will simulate 3 chats now.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Simulation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Role Reversal</h4>
        <p>Think about the worst customer service you ever had. What did they do wrong? Write it down so you never do it.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Role Play</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📩 TASK 11: PRE-SALE COMMUNICATION — Inquiry Handling & Custom Offers</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🎯 Why Pre-Sale Communication Matters</h3>
    <p>The first message a potential client receives from you determines whether they hire Digital Heroes or move on to someone else. On marketplace platforms, clients often send the same inquiry to 5-10 sellers simultaneously. <strong>Your response speed, professionalism, and perceived expertise in the first message wins the order.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">📊 The Pre-Sale Funnel</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Stage</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Action</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Goal</th>
            </tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1. Inquiry Received</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Acknowledge within 5 minutes</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show responsiveness</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2. Requirement Gathering</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ask targeted questions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Understand scope</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3. Custom Offer</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create tailored proposal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Win the order</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4. Follow-Up</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Gentle nudge if no response</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Close the deal</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>📨 PART 1: THE PERFECT FIRST RESPONSE</h3>
    <p>Your initial reply to a client inquiry must accomplish three things simultaneously: <strong>demonstrate expertise, show enthusiasm, and ask smart questions</strong>.</p>
    <h4>1.1 The GREET Framework</h4>
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px;">
        <p style="font-size: 1.1em;"><strong>G</strong> - Greet warmly and use their name</p>
        <p style="font-size: 1.1em;"><strong>R</strong> - Reference their specific project/need</p>
        <p style="font-size: 1.1em;"><strong>E</strong> - Expertise signal (mention relevant experience)</p>
        <p style="font-size: 1.1em;"><strong>E</strong> - Engage with a clarifying question</p>
        <p style="font-size: 1.1em;"><strong>T</strong> - Timeline and next steps</p>
    </div>
    <h4>1.2 Reading Between the Lines</h4>
    <div class="highlight-box">
        <strong>Client signals and what they really mean:</strong>
        <ul>
            <li><strong>"I need this ASAP"</strong> = They are ready to pay more for speed. Offer a rush delivery option.</li>
            <li><strong>"Budget is tight"</strong> = They want value, not cheap. Show them your best work and justify the investment.</li>
            <li><strong>"I have tried other sellers"</strong> = Previous bad experience. Emphasize your communication and revision process.</li>
            <li><strong>"Can you do everything?"</strong> = They want a one-stop solution. Position DH as a full-service agency.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>💰 PART 2: CREATING CUSTOM OFFERS</h3>
    <h4>Custom Offer Structure</h4>
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); padding: 20px; border-radius: 10px;">
        <ol>
            <li><strong>Project Understanding</strong> - Paraphrase what they asked for (shows you listened)</li>
            <li><strong>Proposed Solution</strong> - What you will deliver, broken into phases</li>
            <li><strong>Timeline</strong> - Realistic delivery dates with milestones</li>
            <li><strong>What is Included</strong> - Explicit list so there is no ambiguity</li>
            <li><strong>What is NOT Included</strong> - Prevents scope creep later</li>
            <li><strong>Price</strong> - Clear pricing with any package options</li>
            <li><strong>Why Us</strong> - Brief differentiator (portfolio links, reviews, guarantees)</li>
        </ol>
    </div>
    <h4>Follow-Up Strategy</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Timing</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Message</th></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">After 24 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Hi [Name], just checking in - did you get a chance to review the proposal?"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">After 3 days</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Hey [Name], I have some additional ideas for your project. Shall I share them?"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">After 7 days</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Hi [Name], the offer is still available. If requirements have changed, I am happy to adjust."</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>12 questions</strong> testing pre-sale communication skills</li>
        <li>🎯 Score <strong>12/12</strong> to proceed to Task 12</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📊 TASK 12: ORDER COMMUNICATION — Milestone Updates & Setting Expectations</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🎯 Why Proactive Communication Wins</h3>
    <p>Once a client places an order, the real relationship begins. The number one reason clients leave negative reviews is NOT poor quality work, it is <strong>poor communication during the project</strong>. Clients who feel informed and in control throughout the process become repeat buyers and leave glowing reviews.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">📈 The Communication Impact</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(16, 185, 129, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Communication Level</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Client Experience</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Result</th></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Silent until delivery</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Anxious, sends "any update?" messages</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3-4 star review even if work is great</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Responds only when asked</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Feels like chasing you</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4 star review, unlikely to return</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Proactive updates</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Feels cared for, trusts the process</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>5 stars + repeat orders + referrals</strong></td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>📅 The Milestone Update System</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Milestone</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">When</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">What to Send</th></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Order Confirmation</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Within 2 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Thank them, confirm scope, share timeline</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Work Started</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Day 1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Brief update that work has begun</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Progress Preview</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30-50% complete</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Share WIP screenshots or partial delivery</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Final Review</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Before delivery</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Preview of completed work, ask for feedback</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Delivery</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">On time or early</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Full delivery with detailed delivery message</td></tr>
    </table>
    <h3>🎯 Setting and Managing Expectations</h3>
    <div class="highlight-box">
        <strong>At the start of every order, confirm:</strong>
        <ul>
            <li><strong>Deliverables:</strong> Exactly what they will receive</li>
            <li><strong>Timeline:</strong> Specific dates, not vague "a few days"</li>
            <li><strong>Revisions:</strong> How many rounds are included</li>
            <li><strong>Communication:</strong> How and when you will send updates</li>
            <li><strong>What you need from them:</strong> Content, access, feedback deadlines</li>
        </ul>
    </div>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">Never Do These:</strong>
        <ul>
            <li>Promise a delivery date you cannot meet just to win the order</li>
            <li>Go silent for more than 24 hours without an update</li>
            <li>Say "no problem" to a request that IS a problem</li>
            <li>Assume the client knows what is happening behind the scenes</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>12 questions</strong> testing order communication skills</li>
        <li>🎯 Score <strong>12/12</strong> to proceed to Task 13</li>
    </ul>
</div>
`;

const task13Content = `
<h2>🔄 TASK 13: HANDLING REVISIONS & SCOPE CREEP</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">⚠️ The Scope Creep Problem</h3>
    <p>Scope creep is the silent profit killer. It happens when a client gradually asks for more work than what was originally agreed upon, without additional compensation. At Digital Heroes, <strong>scope creep is the #1 cause of project delays and team burnout</strong>.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong style="color: #F59E0B;">🚨 Scope Creep vs Legitimate Revision</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(245, 158, 11, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Legitimate Revision</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Scope Creep</th></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Can you change the header color?"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Can you also add a blog section?"</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"The font is too small on mobile"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Can you design a logo too?"</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Adjusting what was agreed</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Adding work that was never agreed</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>🛡️ Revision Policy Communication</h3>
    <div class="highlight-box">
        <strong>Define clearly for the client:</strong>
        <ul>
            <li><strong>One round</strong> = Client sends all feedback at once, you implement all changes</li>
            <li><strong>NOT</strong> one round per individual change request</li>
            <li>Bug fixes are NOT revisions (fixing something broken is your responsibility)</li>
            <li>Adding NEW features is NOT a revision (it is scope expansion)</li>
        </ul>
    </div>
    <h3>✋ The ACKNOWLEDGE-REDIRECT-OFFER Framework</h3>
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px;">
        <p><strong>ACKNOWLEDGE:</strong> "That is a great idea! I can see why you would want that."</p>
        <p><strong>REDIRECT:</strong> "That feature was not part of our original scope for this order."</p>
        <p><strong>OFFER:</strong> "I would love to add it! I can create a separate order for [feature] at [price]. What works best for you?"</p>
    </div>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">When to Escalate to PM:</strong>
        <ul>
            <li>Client becomes aggressive about scope additions</li>
            <li>Client threatens negative review to get free work</li>
            <li>Scope creep exceeds 30% of original order value</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>12 questions</strong> testing revision and scope management</li>
        <li>🎯 Score <strong>12/12</strong> to proceed to Task 14</li>
    </ul>
</div>
`;

const task14Content = `
<h2>📦 TASK 14: DELIVERY MESSAGES & PRESENTING YOUR WORK</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎁 The Delivery Message is Your Grand Finale</h3>
    <p>The delivery message is the LAST impression before the client decides your rating. A lazy "Here you go" delivery wastes all the great work you did. A compelling delivery message <strong>reminds the client of the value they received, showcases your work beautifully, and plants the seed for repeat business and a 5-star review</strong>.</p>
</div>

<div class="content-section">
    <h3>📝 The Perfect Delivery Message Structure</h3>
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); padding: 20px; border-radius: 10px;">
        <ol>
            <li><strong>Warm Opening</strong> - Express excitement about the completed work</li>
            <li><strong>Summary of What Was Done</strong> - Bullet list of completed items</li>
            <li><strong>How to Access/Use</strong> - Clear instructions for the client</li>
            <li><strong>Highlights</strong> - Point out 2-3 things you are especially proud of</li>
            <li><strong>Next Steps</strong> - What happens after they review</li>
            <li><strong>Future Value</strong> - Mention availability for future work</li>
            <li><strong>Review Request</strong> - Polite, non-pushy ask for feedback</li>
        </ol>
    </div>
    <h3>⭐ Requesting Reviews</h3>
    <div class="highlight-box">
        <ul>
            <li><strong>Best time:</strong> Immediately after the client expresses satisfaction</li>
            <li><strong>Good time:</strong> In your delivery message (subtle mention)</li>
            <li><strong>Bad time:</strong> When there are unresolved issues or pending revisions</li>
            <li><strong>Never:</strong> Pressure or incentivize reviews (violates platform terms)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>12 questions</strong> testing delivery and review skills</li>
        <li>🎯 Score <strong>12/12</strong> to proceed to Task 15</li>
    </ul>
</div>
`;

const task15Content = `
<h2>😤 TASK 15: DIFFICULT CONVERSATIONS — Late Deliveries, Refunds & Complaints</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🔥 Difficult Conversations Define Your Career</h3>
    <p>What separates elite chat specialists from average ones is how they handle problems. At Digital Heroes, <strong>a well-handled complaint often creates a more loyal client than one who never had a problem at all</strong>. This is called the Service Recovery Paradox.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">🧠 The Service Recovery Paradox</strong>
        <p>Customers who experience a problem that is resolved exceptionally well become MORE loyal than customers who never had a problem.</p>
    </div>
</div>

<div class="content-section">
    <h3>⏰ Late Delivery Communication</h3>
    <div class="highlight-box" style="background: rgba(245, 158, 11, 0.15); padding: 20px; border-radius: 10px;">
        <p><strong>Rule:</strong> Notify the client BEFORE the deadline, not after.</p>
        <ol>
            <li><strong>Acknowledge:</strong> "I want to be transparent with you about the timeline."</li>
            <li><strong>Explain briefly:</strong> "I ran into [specific issue] that needs extra attention."</li>
            <li><strong>New timeline:</strong> "I will have everything completed by [specific date/time]."</li>
            <li><strong>Compensate:</strong> "To make up for the delay, I am including [bonus/extra] at no charge."</li>
        </ol>
    </div>
    <h3>💸 Refund Requests</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Situation</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Recommended Action</th></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client unhappy (our fault)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Offer to redo the work first. If still unhappy, partial or full refund.</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client changed their mind</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Offer alternatives first. Refund if no work has started.</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Scope disagreement</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Refer to original agreement. Offer to complete missing items.</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Trying to get free work</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Stand firm politely. Document everything. Escalate to PM.</td></tr>
    </table>
    <h3>🧯 The HEARD Method for Complaints</h3>
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px;">
        <p style="font-size: 1.1em;"><strong>H</strong> - Hear them out completely (do not interrupt)</p>
        <p style="font-size: 1.1em;"><strong>E</strong> - Empathize genuinely ("I would feel the same way")</p>
        <p style="font-size: 1.1em;"><strong>A</strong> - Apologize specifically (not generic "sorry for the inconvenience")</p>
        <p style="font-size: 1.1em;"><strong>R</strong> - Resolve with a concrete action</p>
        <p style="font-size: 1.1em;"><strong>D</strong> - Delight with something extra</p>
    </div>
    <h3>De-Escalating vs Escalating Phrases</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Escalating (AVOID)</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">De-Escalating (USE)</th></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"That is not what you ordered"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Let me review the original requirements with you"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Calm down"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"I completely understand your frustration"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It is against our policy"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"What I can do for you is..."</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>12 questions</strong> testing difficult conversation handling</li>
        <li>🎯 Score <strong>12/12</strong> to proceed to Task 16</li>
    </ul>
</div>
`;

const task16Content = `
<h2>⭐ TASK 16: REVIEW MANAGEMENT & REPUTATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">🏆 Your Rating IS Your Resume</h3>
    <p>On marketplace platforms, your seller rating determines your search ranking, conversion rate, and client trust. At Digital Heroes, <strong>maintaining a 4.8+ average rating is a non-negotiable KPI</strong>.</p>
</div>

<div class="content-section">
    <h3>⭐ Earning 5-Star Reviews: The Over-Delivery Strategy</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Order Type</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Over-Delivery Ideas</th></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Shopify Store</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Free speed optimization, extra social media banner, SEO checklist</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Design Work</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Extra color variation, social media mockup, source files</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Development</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Code documentation, how-to video, maintenance tips</td></tr>
    </table>
    <h3>🛡️ Handling Negative Reviews</h3>
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 10px;">
        <strong>The PUBLIC Response Formula:</strong>
        <ol>
            <li><strong>Thank them</strong> for their feedback</li>
            <li><strong>Acknowledge</strong> the issue without being defensive</li>
            <li><strong>Explain briefly</strong> what happened</li>
            <li><strong>State what you improved</strong></li>
            <li><strong>Invite them back</strong></li>
        </ol>
    </div>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">Never:</strong>
        <ul>
            <li>Argue publicly with a client in review responses</li>
            <li>Blame the client (even if they were wrong)</li>
            <li>Ask clients to remove negative reviews</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>12 questions</strong> testing review management skills</li>
        <li>🎯 Score <strong>12/12</strong> to proceed to Task 17</li>
    </ul>
</div>
`;

const task17Content = `
<h2>🚀 TASK 17: CAREER GROWTH — Chat Specialist Career Path at Digital Heroes</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">📈 Your Growth Path at DH</h3>
    <p>At Digital Heroes, client chat is not a dead-end role. It is a launchpad for a career in client success, account management, and team leadership.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">🪜 The DH Chat Career Ladder</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(16, 185, 129, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Level</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Role</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Requirements</th></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Chat Trainee</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Complete this training certification</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Chat Specialist</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 months, 4.8+ rating, 80%+ resolution</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Senior Chat Specialist</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6 months, mentors new agents, handles escalations</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client Success Lead</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">12 months, manages client relationships end-to-end</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">L5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Account Manager / Team Lead</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">18+ months, proven leadership</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>📊 KPIs That Drive Your Growth</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">KPI</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Target</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Why It Matters</th></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">First Response Time</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Under 60 seconds</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Correlates with conversion rate</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Conversion Rate</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">20%+</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Revenue per chat interaction</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client Satisfaction</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4.8+ stars</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ranking and repeat business</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Resolution Rate</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">85%+</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">First-contact resolution</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Repeat Client Rate</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30%+</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Relationship-building ability</td></tr>
    </table>
    <h3>🎯 Specialization Tracks</h3>
    <div class="highlight-box">
        <ul>
            <li><strong>Pre-Sales Specialist:</strong> Focus on converting inquiries to orders.</li>
            <li><strong>Client Success Manager:</strong> Own client relationships end-to-end.</li>
            <li><strong>Escalation Expert:</strong> Handle the hardest conversations and crises.</li>
            <li><strong>Training Lead:</strong> Develop and deliver training for new chat agents.</li>
            <li><strong>Quality Assurance:</strong> Review transcripts and maintain quality standards.</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>15 questions</strong> testing career growth knowledge</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 18</li>
    </ul>
</div>
`;

const task18Content = `
<h2>🏆 TASK 18: FINAL CERTIFICATION — Client Chat Mastery Exam</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🏆 Final Certification — Prove Your Mastery</h3>
    <p>This comprehensive exam covers ALL 17 previous modules. Demonstrate mastery across every area of client chat communication to earn your <strong>Digital Heroes Client Chat Certification</strong>.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">📋 Exam Coverage</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(245, 158, 11, 0.2);"><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Module Group</th><th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Topics</th></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Foundation (1-4)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Company culture, chat mindset, knowledge, tonality</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Core Skills (5-8)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Objections, speed tools, closing, system hygiene</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Advanced (9-10)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">De-escalation, role play</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Marketplace (11-14)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Pre-sale, order comms, revisions, delivery</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Mastery (15-17)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Difficult conversations, reviews, career growth</td></tr>
        </table>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🎯 What Certification Means</h3>
    <ul>
        <li>Lightning-fast response times with human warmth</li>
        <li>Converting browsers into buyers using proven frameworks</li>
        <li>Professional pre-sale communication and custom offer creation</li>
        <li>Proactive order communication with milestone updates</li>
        <li>Managing revisions and scope boundaries professionally</li>
        <li>Delivering work with impact and soliciting genuine reviews</li>
        <li>Handling difficult conversations with empathy and resolution</li>
        <li>Building and protecting your seller reputation</li>
        <li>Planning your career growth at Digital Heroes</li>
    </ul>
    <p style="font-weight: bold; font-size: 1.1em;">You are now a certified Digital Heroes Client Chat Specialist!</p>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 <strong>10 comprehensive questions</strong> covering ALL modules 1-17</li>
        <li>🎯 Score <strong>10/10</strong> to receive your Client Chat Certification</li>
        <li>🏆 Your certificate will be generated upon passing</li>
    </ul>
</div>
`;


const quizQuestions = [
    // Task 1 - Speed & Mindset
    { question: "A customer has been waiting 45 seconds for your response. According to the 60-second rule, what is the PRIMARY risk?", options: ["They might send a follow-up message", "They're probably still reading your product page", "They will appreciate your thorough response", "They're likely switching to a competitor tab right now"], correct: 3 },
    { question: "Customer asks 'Does this come in red?' - they're most likely a:", options: ["Hot lead ready to buy if you answer quickly", "Warm lead who needs more education", "Cold lead just browsing for fun", "Someone looking to waste your time"], correct: 0 },
    { question: "Your response says 'Dear Valued Customer, Your inquiry has been received.' What's wrong?", options: ["Nothing, this is professional", "It sounds robotic and impersonal - kills conversion", "It's too short", "It doesn't include your name"], correct: 1 },
    {
        question: "The CHAT method's 'A' stands for:",
        options: ["Ask questions", "Apologize always", "Add Value beyond their question", "Address concerns"],
        correct: 2
    },
    { question: "Response time under 30 seconds typically results in:", options: ["Customer annoyance at being rushed", "No significant difference", "Lower quality responses", "3x higher conversion rate"], correct: 3 },
    // Task 2 - Company Knowledge
    { question: "Customer asks 'What's your shipping time?' You don't know. Best response?", options: ["'Let me check our policy page and get right back to you - one moment!'", "'I don't know'", "Ignore and change subject", "'Usually pretty fast'"], correct: 0 },
    {
        question: "When should you look up pricing during a chat?",
        options: ["Every time - always verify", "Never - you should have it memorized", "Only for complex products", "Only when the customer seems suspicious"],
        correct: 1
    },
    // Task 3 - Tonality
    { question: "Customer writes 'hey! super excited about this product 🎉' - your response should:", options: ["Remain formal: 'Dear Customer, thank you for your interest'", "Be completely neutral with no personality", "Match their energy with warmth and an appropriate emoji", "Tell them to calm down"], correct: 2 },
    { question: "For a luxury jewelry brand, emoji usage should be:", options: ["Heavy use to seem friendly", "Use the same as casual brands", "Never use any", "Sparingly or elegant ones like ✨ only"], correct: 3 },
    // Task 4 - Objection Handling
    { question: "Customer says 'This is way too expensive.' Best approach?", options: ["Highlight value and ROI - what they GET for that price", "Agree with them that it's pricey", "Immediately offer a discount", "Tell them to buy a cheaper competitor product"], correct: 0 },
    {
        question: "Customer says 'I need to think about it.' This usually means:",
        options: ["They're definitely not buying", "They have an unaddressed concern - ask what's holding them back", "You should end the chat immediately", "They want you to pressure them more"],
        correct: 1
    },
    // Task 5 - Tools & Speed
    { question: "What's the most effective way to improve response speed?", options: ["Type faster", "Skip greetings entirely", "Use pre-written canned responses as templates", "Keep responses to just 2 words"], correct: 2 },
    { question: "Professional chat agents should type at minimum:", options: ["20 WPM", "40 WPM", "100 WPM", "60 WPM"], correct: 3 },
    // Task 6 - Closing Techniques
    { question: "'Would you prefer the blue or the black one?' is an example of:", options: ["Alternative close (assumes the sale)", "Open-ended question", "Pressure tactic to avoid", "Poor sales technique"], correct: 0 },
    // Task 7 - Ticket Hygiene
    {
        question: "Why is proper ticket tagging critical?",
        options: ["To impress your manager", "For data analysis, routing, and identifying common issues", "It's not - it's busywork", "Only for billing purposes"],
        correct: 1
    },
    // Task 8 - Firefighting
    { question: "Customer is typing in ALL CAPS saying 'YOU CHARGED ME TWICE!!!'. First step?", options: ["Explain it wasn't your fault", "Disconnect the chat immediately", "Empathize and let them vent before offering solution", "Ask them to calm down before you'll help"], correct: 2 },
    { question: "After resolving an angry customer's issue, what extra step creates loyalty?", options: ["Nothing extra needed - just close the chat", "Transfer to your manager for an apology", "Tell them not to make the mistake again", "Offer a small bonus/discount as goodwill gesture"], correct: 3 },
    // Task 9 & 10 - Advanced
    { question: "A customer says 'Your competitor has 24-hour support.' Best response?", options: ["Acknowledge and pivot to YOUR unique value", "'Go to them then'", "'We're cheaper though'", "Ignore and change subject"], correct: 0 },
    {
        question: "CSAT scores measure:",
        options: ["Chat Speed And Timing", "Customer Satisfaction rating", "Chat Sentiment Analysis Tracking", "Customer Service Action Time"],
        correct: 1
    },
    { question: "The goal of chat role-play training is to:", options: ["Embarrass new agents", "Waste time between real chats", "Practice handling difficult scenarios in a safe environment", "Test who's the fastest typer"], correct: 2 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Share primarily with close friends on the team", "Share it openly — transparency builds trust", "Politely decline — discussing salary with colleagues leads to immediate termination", "Tell them a lower number to avoid jealousy — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 2 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "Written warning recorded in your file", "Half-day salary deduction", "No consequence if it's less than 30 minutes late"], c: 2 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹75 Crores", "₹40 Crores", "₹15-20 Crores", "₹100 Crores"], c: 0 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Report it only to HR or Delhi Team — conspiracy leads to termination + legal action", "Confront them directly and resolve it yourself and ensures long-term sustainability across your deliverables", "Discuss it in the team group chat so everyone knows", "Ignore it — it's not your problem"], c: 0 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Tell your teammate to cover for you and take the day off", "Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach most teams follow", "Those with exceptional KPI scores — this is the standard approach most teams follow", "Senior developers and team leads primarily", "Everyone including interns"], c: 3 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — this reflects the standard operating procedure most organizations follow", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "No leave in first 2 months unless emergency", "Probation employees get 2 days off per month", "You can take unpaid leave anytime with HR approval"], c: 1 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As an ally whose problem is your common enemy — listen, understand, collaborate", "As someone who should be transferred to management"], c: 2 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "No specific requirement as long as you're online", "25 Mbps", "10+ Mbps"], c: 3 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["Verbal warning but salary stays the same", "10-15% increment for meeting expectations", "5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "No increment and placed on a Performance Improvement Plan (PIP)"], c: 3 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is the most important hiring criteria", "We prioritize degrees from top universities — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Talent is irrelevant — volume and commitment to output matter more", "Natural talent determines your ceiling at the company"], c: 2 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "60 days", "14 days", "30 days"], c: 3 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A rough guideline to review monthly — this reflects the standard operating procedure most organizations follow", "A reference document only for new employees during onboarding"], c: 1 }
];

const task2Quiz = [
    { q: "The Digital Heroes '60-Second Rule' for live chat means:", o: ["You have 60 seconds to close the sale — if you can't convert them in a minute, move on to the next visitor and ensures sustainable long-term client relationship outcomes — following this approach preve", "Every incoming chat must receive a first response within 60 seconds or less — research shows response time is the #1 factor in live chat conversion and waiting longer kills the deal", "Send a templated response within 60 seconds then take your time — the initial auto-reply counts as a response — this method has been validated through extensive client interactions and is the proven in", "The 60-second rule is a guideline not a requirement — quality responses matter more than speed every time — teams adopting this strategy report fewer client escalations and more efficient resolution cy"], c: 1 },
    { q: "At Digital Heroes, when a chat visitor says 'just browsing,' your trained response is:", o: ["Close the chat — browsing visitors never convert and engaging them wastes your time on non-buyers", "Acknowledge their browsing with a relevant question like 'Are you looking for something specific?' to surface their hidden intent — 40% of 'just browsing' visitors convert when guided properly", "Send them a link to the FAQ page and move on to the next chat since they clearly don't need help right now — this aligns with company best practices and ensures consistent professional results across client interactions", "Immediately pitch the most popular product — they're on the site so they're interested whether they admit it or not"], c: 1 },
    { q: "The Digital Heroes chat SOP distinguishes 'Robot' vs 'Human' responses. A 'Human' response means:", o: ["Use slang, emojis, and casual language to sound like a friend texting — formal language makes you sound like a bot and ensures sustainable long-term client relationship outcomes — this is the recommended app", "Be conversational yet professional, acknowledge their specific situation, use their name, reference what they said — templated responses that ignore context destroy trust and feel robotic", "Copy-paste from the script library for every response — consistency matters more than personalization in live chat — implementing this correctly requires understanding the full context of how client satisfac", "Write extremely long detailed responses showing you really understand their problem — length proves you're human — this aligns with company best practices and ensures consistent professional results across c"], c: 1 },
    { q: "The Conversion Framework teaches that live chat's #1 goal is:", o: ["Answering questions accurately — this reflects the standard operating procedure most organizations follow", "Reducing phone call volume — this reflects the standard operating procedure most organizations follow", "Resolving complaints quickly — this reflects the standard operating procedure most organizations follow", "Converting browsers into buyers — every chat is a sales opportunity, not just customer service"], c: 3 },
    { q: "Speed Optimization: Why is typing speed critical for chat agents?", o: ["Slow typers lose customers — speed + accuracy = more conversations handled = more conversions per hour", "It makes the job easier — this reflects the standard operating procedure most organizations follow", "Typing speed doesn't affect chat quality — this reflects the standard operating procedure most organizations follow", "AI handles most of the typing now — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A customer says 'I'm just browsing.' An amateur agent responds 'Let me know if you need help.' The professional response is:", o: ["'Okay, take your time!' — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "'Would you like to see our catalog?' — this reflects the standard operating procedure most organizations follow", "'I'm here when you're ready' — this reflects the standard operating procedure most organizations follow", "'Great taste! Those items are our bestsellers — anything catch your eye? I can tell you about our current deals'"], c: 3 },
    { q: "Chat psychology: Using the customer's first name in conversation:", o: ["Creates personal connection and trust — people respond positively when addressed by name", "Is too informal and unprofessional — this reflects the standard operating procedure most organizations follow", "Works for returning customers — this is the standard approach most teams follow", "Violates privacy concerns — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The difference between a €500 and €5,000 monthly revenue from chat depends on:", o: ["Having more staff on chat — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Better chat software — this reflects the standard operating procedure most organizations follow", "Conversion skills — proactive selling, objection handling, and closing instead of just answering questions", "Longer operating hours — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Implementation Task: Speed optimization requires practice because:", o: ["Muscle memory develops over time — this reflects the standard operating procedure most organizations follow", "Fast, accurate, personalized responses are a trainable skill — chat agents who practice close 3x more sales", "It's just part of the job training — this reflects the standard operating procedure most organizations follow", "Speed optimization is a one-time activity — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The single biggest chat mistake that kills conversions is:", o: ["Grammatical errors in responses — this reflects the standard operating procedure most organizations follow", "Responding like a FAQ robot instead of a human who actually cares about helping the customer buy", "Using too many emojis — this reflects the standard operating procedure most organizations follow", "Not having a profile picture — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

const task3Quiz = [
    { q: "A client on live chat says 'your competitor offers the same for cheaper.' At Digital Heroes, the SOP response is:", o: ["Match the competitor's price immediately — you can't afford to lose any deal over a price difference in live chat and ensures sustainable long-term client relationship outcomes — following this approach prevents common serv", "Acknowledge the comparison, ask what specific services they're comparing (scope, QA, revisions, support), highlight our differentiators — competing on price alone is a race to zero that devalues the work", "Tell them to go with the competitor if price is all they care about — cheap clients cause more problems than revenue — this method has been validated through extensive client interactions and is the proven industry standard", "Ignore the competitor mention and redirect to features — acknowledging competition shows insecurity in your offering — teams adopting this strategy report fewer client escalations and more efficient resolution cycles overal"], c: 1 },
    { q: "The Digital Heroes 'Conversion Framework' for chat requires these steps in order:", o: ["Pitch → Close → Follow up — speed is everything so skip the discovery questions and go straight to selling and ensures sustainable long-term client relationship outcomes — this is the recommended approach based", "Greet → Qualify → Discover needs → Present solution → Handle objections → Close → Handoff to PM — each step builds on the previous one and skipping steps drops conversion rates significantly", "Just answer whatever they ask — structured frameworks feel artificial and clients can tell you're following a script — implementing this correctly requires understanding the full context of how client satisfact", "Close → Upsell → Cross-sell — every chat interaction should maximize immediate revenue above all other goals — this aligns with company best practices and ensures consistent professional results across client i"], c: 1 },
    { q: "Return policy knowledge helps in chat because:", o: ["Returns are rare so it's not important — this reflects the standard operating procedure most organizations follow", "Proactively mentioning hassle-free returns removes purchase anxiety: 'And you have 30 days to return if it's not perfect'", "Returns should primarily be discussed after purchase — this is the recommended approach based on current platform documentation and expert consensus", "You should discourage customers from thinking about returns"], c: 1 },
    { q: "Memory implementation task: The goal of memorizing company info is:", o: ["Passing the quiz with a high score — this reflects the standard operating procedure most organizations follow", "Impressing your manager during evaluations — this reflects the standard operating procedure most organizations follow", "Zero-delay responses that build customer confidence — the faster you answer, the more expert you appear", "Replacing the need for a knowledge base — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Product knowledge should include 'use cases' because:", o: ["Customers buy solutions to problems — explaining HOW the product helps THEIR situation converts better than listing features", "It fills time during slow chats — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Use cases are required for compliance — this reflects the standard operating procedure most organizations follow", "Technical products need use case knowledge — this is the standard approach most teams follow"], c: 0 },
    { q: "When a customer asks a question not in your knowledge base:", o: ["Say 'I don't know' and move on — this reflects the standard operating procedure most organizations follow", "Transfer them to another department — this reflects the standard operating procedure most organizations follow", "Give your best guess to maintain speed — this reflects the standard operating procedure most organizations follow", "Own it: 'That's a great question — let me get you the exact answer in 2 minutes' then follow up fast"], c: 3 },
    { q: "The implementation task for company knowledge requires testing yourself because:", o: ["Tests are standard training procedure — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "It's required for certification — this reflects the standard operating procedure most organizations follow", "Self-testing reveals knowledge gaps BEFORE a customer exposes them — failing in training is better than failing in a live chat", "Managers review test scores for promotions — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task4Quiz = [
    { q: "At Digital Heroes, handling an angry client in live chat requires:", o: ["Transfer to a manager immediately — frontline chat agents shouldn't handle complaints since they lack authority and ensures sustainable long-term client relationship outcomes — following this approach prevents common service issues and keeps the work", "Acknowledge the frustration, apologize without blame, ask clarifying questions, propose a concrete resolution, escalate to PM if needed — turning an angry client into a satisfied one builds more loyalty than never having a problem", "Apologize and offer a full refund to make the problem go away — the cost of the refund is less than the cost of a bad review — this method has been validated through extensive client interactions and is the proven industry standard approach", "Wait for them to calm down before responding — responding to angry messages while they're emotional makes things worse — teams adopting this strategy report fewer client escalations and more efficient resolution cycles overall"], c: 1 },
    { q: "When a chat visitor asks a technical question you can't answer, the Digital Heroes SOP says:", o: ["Make your best guess — giving a wrong answer is better than saying you don't know since it makes you look incompetent", "Be transparent: 'Great question — let me check with our technical team and get you an accurate answer within [timeframe].' Then actually follow up — honesty builds more trust than fake expertise", "Tell them to email support instead since chat isn't meant for technical questions that require detailed investigation", "Put them on hold indefinitely while you research — don't close the chat because they might not come back if you do"], c: 1 },
    { q: "A customer writes: 'omg sooo excited about this!! 😍' Your response should be:", o: ["'Thank you for your interest. How may I assist you?'", "'Thank you. Would you like to purchase?' — this reflects the standard operating procedure most organizations follow", "'Please let me know if you have any questions.'", "'I LOVE your excitement!! 😍 You're going to absolutely love it!! Here's something that'll make it even better...'"], c: 3 },
    { q: "'I'll have to check with my manager' sounds bad because:", o: ["Managers don't like being mentioned — this reflects the standard operating procedure most organizations follow", "It's too formal for chat — this reflects the standard operating procedure most organizations follow", "It signals lack of authority and competence — customers want to deal with someone who can help them NOW", "It makes the manager look bad — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The word 'policy' should be avoided because:", o: ["'Policy' sounds rigid and corporate — instead say 'what we love to do for our customers is...'", "Customers don't care about policies — this reflects the standard operating procedure most organizations follow", "It's a legal liability to mention policies — this reflects the standard operating procedure most organizations follow", "The word is too long for chat — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A frustrated customer writes 'this is ridiculous.' Your tone should be:", o: ["Calm, empathetic, solution-focused: 'I completely understand your frustration — let me fix this right now'", "Match their frustration to show empathy — this reflects the standard operating procedure most organizations follow", "Defensive to protect the company — this reflects the standard operating procedure most organizations follow", "Ignore the emotion and provide facts primarily"], c: 0 },
    { q: "Using exclamation points (!) in chat is:", o: ["Always unprofessional — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Should be used in every sentence — this reflects the standard operating procedure most organizations follow", "Appropriate when matching enthusiastic customers — adds energy and warmth, but avoid with frustrated customers", "Acceptable in casual conversations — this is the standard approach most teams follow"], c: 2 },
    { q: "The rewrite implementation task trains you to:", o: ["Write longer responses — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Follow a script word for word — this reflects the standard operating procedure most organizations follow", "Use more complex vocabulary — this reflects the standard operating procedure most organizations follow", "Transform negative, robotic phrases into positive, human alternatives automatically — until it becomes your natural style"], c: 3 }
];

const task5Quiz = [
    { q: "The Digital Heroes chat analytics SOP requires tracking:", o: ["Only the number of chats handled per day — volume is the primary performance metric for chat agents and ensures sustainable long-term client relationship outcomes — this is the recommended approach bas", "Response time, conversation length, conversion rate, customer satisfaction score, handoff rate, and common objections — data drives improvement and identifies patterns in what works", "Nothing — chat is too fast-paced for analytics and the overhead of tracking metrics slows down response times — implementing this correctly requires understanding the full context of how client satisfa", "Only closed deals — chats that don't convert immediately aren't worth analyzing since the visitor left anyway — this aligns with company best practices and ensures consistent professional results acros"], c: 1 },
    { q: "'Just Looking' is not a rejection — it's an opportunity because:", o: ["Everyone who says this eventually buys — this reflects the standard operating procedure most organizations follow", "Data shows 'just looking' customers never convert — implementing this correctly requires understanding the full context of how each element interacts", "You should let them browse in peace — this reflects the standard operating procedure most organizations follow", "They're already ON your site/chat — curiosity brought them there, and the right question can convert browsing to buying"], c: 3 },
    { q: "The Pivot technique for objections means:", o: ["Changing the subject entirely — this reflects the standard operating procedure most organizations follow", "Acknowledging the objection, then redirecting to value: 'I hear you on price — AND here's what makes it worth every penny...'", "Arguing against the customer's concern — this reflects the standard operating procedure most organizations follow", "Offering a lower-priced alternative immediately — taking this route minimizes risk while still delivering professional-grade results to stakeholders"], c: 1 },
    { q: "'I need to think about it' really means:", o: ["They genuinely need time to decide — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "They're not interested at all — this reflects the standard operating procedure most organizations follow", "They have an unresolved objection — ask: 'Of course! What's the main thing you're weighing up? Maybe I can help clarify'", "You should end the conversation politely — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Never respond to the price objection with a discount first because:", o: ["Discounts reduce profit margin — this reflects the standard operating procedure most organizations follow", "Company policy prohibits discounts — this reflects the standard operating procedure most organizations follow", "It sets the precedent that your price is negotiable, devalues the product, and the customer will always expect lower", "Discounts don't influence purchase decisions — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The implementation task for objection handling requires practicing the Pivot because:", o: ["Pivoting is the hardest sales technique — this reflects the standard operating procedure most organizations follow", "Under pressure, untrained agents default to discounts or giving up — practiced pivots become automatic responses", "It's scored in performance reviews — this reflects the standard operating procedure most organizations follow", "The pivot technique works for objections — this is the standard approach most teams follow"], c: 1 },
    { q: "All objection handling starts with:", o: ["ACKNOWLEDGING the concern genuinely — 'I totally get that' — before pivoting to value", "Presenting counter-arguments immediately — this reflects the standard operating procedure most organizations follow", "Offering a solution right away — this reflects the standard operating procedure most organizations follow", "Asking the customer to explain further — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task6Quiz = [
    { q: "Shortcuts (text expanders) save time by:", o: ["Turning typed abbreviations into full responses instantly — '/ship' becomes your full shipping answer, saving 30+ seconds per chat", "Replacing creative responses with templates — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Making all responses identical — this reflects the standard operating procedure most organizations follow", "Eliminating the need to personalize — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The DANGER of saved replies is:", o: ["They don't save enough time — this reflects the standard operating procedure most organizations follow", "Over-reliance makes responses feel robotic — macros must be personalized for each customer, NEVER sent as-is", "They take too long to set up — this reflects the standard operating procedure most organizations follow", "Customers can detect when macros are used — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Macro Creation implementation: You should create macros for:", o: ["Technical support issues primarily — this reflects the standard operating procedure most organizations follow", "Every possible customer question — this reflects the standard operating procedure most organizations follow", "Greeting messages — this is the standard approach most teams follow", "The 20 most frequently asked questions — covering 80% of chats while leaving room for human personalization"], c: 3 },
    { q: "A speed tool responds instantly with 'Thank you for reaching out! We appreciate your interest.' This feels:", o: ["Professional and welcoming — this reflects the standard operating procedure most organizations follow", "Perfect for a first response — this reflects the standard operating procedure most organizations follow", "Generic and robotic — it adds no value and the customer knows it's automated, decreasing trust", "Warm and personal — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The ideal saved reply structure includes:", o: ["Answer + Extra Value + Next Step: answer their question, add something helpful they didn't ask, and suggest the next action", "A formal greeting and sign-off — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Just the answer to the question — this reflects the standard operating procedure most organizations follow", "A disclaimer about response accuracy — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Speed tools help agents handle MORE simultaneous chats by:", o: ["Making conversations shorter — this reflects the standard operating procedure most organizations follow", "Reducing typing time on common answers — freeing mental energy to personalize and handle multiple windows", "Automating entire conversations — this reflects the standard operating procedure most organizations follow", "Limiting response length — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A macro should NEVER be used for:", o: ["Shipping questions — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Product availability — this reflects the standard operating procedure most organizations follow", "Pricing inquiries — this reflects the standard operating procedure most organizations follow", "Emotional situations — complaints, frustrations, and sensitive issues require genuine human responses, not templates"], c: 3 },
    { q: "Updating macros monthly is necessary because:", o: ["macros expire after 30 days — this reflects the standard operating procedure most organizations follow", "It's a required management checkpoint — this reflects the standard operating procedure most organizations follow", "Products, policies, and promotions change — outdated macros provide wrong info that damages credibility", "Monthly updates improve typing speed — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The balance between speed (macros) and personalization is:", o: ["Speed always wins — faster is better", "Let the customer decide which they prefer — this reflects the standard operating procedure most organizations follow", "Personalization always wins — never use macros", "Use macros for the factual core, then add personalized opening/closing and context-specific details"], c: 3 }
];

const task7Quiz = [
    { q: "The Assumptive Close works by:", o: ["Assuming the sale: 'Which color would you like — the midnight black or ocean blue?' — bypassing the yes/no decision", "Asking 'Do you want to buy?' — this reflects the standard operating procedure most organizations follow", "Offering discounts to push the sale — this reflects the standard operating procedure most organizations follow", "Waiting for the customer to say 'I want to buy' — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 0 },
    { q: "The Alternative Close asks:", o: ["'Do you want this or not?' — this reflects the standard operating procedure most organizations follow", "'Can I place the order for you?' — this reflects the standard operating procedure most organizations follow", "'Would you prefer the standard package or the premium with free shipping?' — every option leads to a sale", "'Would you like to continue browsing?' — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A customer shows buying signals ('How long does shipping take to Mumbai?') — the best response includes:", o: ["The shipping answer PLUS a closing push: 'We ship to Mumbai in 3-5 days! Want me to add it to your cart while stock is available?'", "Just the shipping time — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "'Check our shipping page' — this reflects the standard operating procedure most organizations follow", "'Are you in Mumbai? Let me check' — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Why is 'Would you like to place an order?' a WEAK close?", o: ["It's too direct and aggressive — this reflects the standard operating procedure most organizations follow", "It's a yes/no question — the answer is often 'no.' Assumptive closes guide them past the decision point", "Closing should never be done in chat — this reflects the standard operating procedure most organizations follow", "It's actually the strongest close — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Creating urgency ethically: 'This promotion ends tonight' works when:", o: ["It's TRUE and verifiable — fake urgency destroys trust when customers discover the lie", "Even if the promotion doesn't actually end — this reflects the standard operating procedure most organizations follow", "Urgency always increases conversions — this reflects the standard operating procedure most organizations follow", "During holiday sales — this is the standard approach most teams follow"], c: 0 },
    { q: "A customer says 'I love it!' but doesn't proceed to purchase. You should:", o: ["Close immediately: 'I'm so glad! 😍 Shall I have it on its way to you? I can guide you through checkout right now!'", "Wait for them to add to cart — this reflects the standard operating procedure most organizations follow", "'Great! Let me know if you need anything else' — experienced professionals recognize this as the most reliable path for maintaining quality control", "Send them the product link again — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The implementation task for closing requires practice because:", o: ["Closing is the easiest part of chat — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Management requires documented practice — this reflects the standard operating procedure most organizations follow", "Practice makes perfect in any skill — this reflects the standard operating procedure most organizations follow", "Most agents are afraid to close — they answer questions but never ask for the sale, leaving conversions on the table"], c: 3 },
    { q: "Asking 'Is there anything else I can help with?' at the end is:", o: ["Professional and complete — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "The standard industry practice — this reflects the standard operating procedure most organizations follow", "A missed closing opportunity — instead ask 'Want me to get that ordered for you?' if they haven't bought yet", "Required by chat guidelines — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Building rapport before closing increases conversions because:", o: ["Longer conversations always convert better — this reflects the standard operating procedure most organizations follow", "It gives time for the customer to find their credit card", "People buy from people they like and trust — genuine connection makes the close feel natural, not pushy", "Rapport is required by company policy — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task8Quiz = [
    { q: "Tagging conversations properly helps because:", o: ["It satisfies management reporting requirements — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Tags are primarily for organizing old conversations", "Tags reveal patterns — which products get most questions, common objections, FAQ gaps — informing business strategy", "It has no practical business value — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Closing tickets properly means:", o: ["Just ending the conversation — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Adding resolution notes, appropriate tags, and ensuring the customer's issue was FULLY resolved — not just acknowledged", "Clicking the 'close' button — this reflects the standard operating procedure most organizations follow", "Transferring to another agent — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A ticket tagged 'shipping-delay' appears 50 times in one month. This data helps the business by:", o: ["Nothing — it's just a number", "Justifying the need for more staff — this reflects the standard operating procedure most organizations follow", "Showing that chat agents are handling volume — this reflects the standard operating procedure most organizations follow", "Identifying a systemic shipping problem that needs operational attention — patterns drive improvement"], c: 3 },
    { q: "System hygiene: Leaving tickets open after resolution causes:", o: ["No issues — they auto-close eventually", "Inflated queue metrics, missed SLAs on real tickets, and confusion about what needs attention", "Better response time statistics — this reflects the standard operating procedure most organizations follow", "Improved customer satisfaction scores — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Ticket escalation should include:", o: ["Full context: customer name, issue summary, steps taken, what they expect, and urgency level — so the next person doesn't start from zero", "Just the customer's name — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "The ticket number — this is the standard approach most teams follow", "A request for someone else to handle it — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Internal notes on tickets serve:", o: ["Context for future interactions: if the same customer returns, any agent can see history and provide personalized service", "No purpose — notes are never read and ensures long-term sustainability across your deliverables and ensures sustainable long-term client relationship outcomes", "Legal documentation requirements — this reflects the standard operating procedure most organizations follow", "Manager performance reviews primarily — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Customer satisfaction (CSAT) survey timing: When should it be sent?", o: ["Immediately when the chat starts — this reflects the standard operating procedure most organizations follow", "Never — surveys annoy customers", "After the ticket is resolved — when the customer can evaluate the full experience", "After purchases — this is the standard approach most teams follow"], c: 2 },
    { q: "A clean ticket queue means:", o: ["Only truly unresolved tickets remain open, with proper tags and notes — enabling focus on priorities", "All tickets are deleted at end of day — this reflects the standard operating procedure most organizations follow", "Zero tickets in the system — this reflects the standard operating procedure most organizations follow", "Every ticket is answered within 1 minute — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Why should personal notes like 'Customer's daughter's birthday next week' be saved?", o: ["It's stalking customer personal information — this reflects the standard operating procedure most organizations follow", "Personalization gold — mentioning it next time creates an unforgettable experience that builds extreme loyalty", "It's required for CRM compliance — this reflects the standard operating procedure most organizations follow", "Personal notes have no business value — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "System hygiene implementation ensures:", o: ["Agents have less work to do — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Management has positive reports to share — this reflects the standard operating procedure most organizations follow", "Perfect ticket queue aesthetics — this reflects the standard operating procedure most organizations follow", "Data integrity — accurate reporting, smooth handoffs, and consistent service quality regardless of which agent handles the chat"], c: 3 }
];

const task9Quiz = [
    { q: "A VIP customer threatens to leave: 'I'm switching to your competitor!' Your first move:", o: ["Let them go — difficult customers aren't worth it and ensures long-term sustainability across your deliverables and ensures sustainable long-term client relationship outcomes", "Transfer to manager immediately — this reflects the standard operating procedure most organizations follow", "Immediately offer maximum discount — this reflects the standard operating procedure most organizations follow", "Acknowledge their frustration genuinely, ask what went wrong, and offer a concrete solution — retaining existing customers is 5x cheaper than acquiring new ones"], c: 3 },
    { q: "Firefighter Training: A product arrives damaged. The correct sequence:", o: ["Apologize and wait for customer to ship it back — research supports this methodology as the most effective for achieving measurable improvements", "Blame the shipping company — this reflects the standard operating procedure most organizations follow", "Apologize sincerely → Ask for photo evidence → Offer immediate replacement OR refund → Follow up to confirm resolution", "'Please contact our returns department' — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "An angry customer uses capital letters and exclamation marks: 'THIS IS UNACCEPTABLE!!!' You should:", o: ["Match their energy to show you take it seriously — applying this principle consistently across all projects builds a reputation for professional excellence", "Tell them to calm down — this reflects the standard operating procedure most organizations follow", "Stay calm, validate their feelings ('I completely understand your frustration'), then focus ONLY on solving the problem", "End the chat — you don't need to tolerate rudeness"], c: 2 },
    { q: "Crisis in chat: Website is down and customers are flooding chat. The protocol is:", o: ["Ignore messages until the site is back up — this reflects the standard operating procedure most organizations follow", "Close the chat widget until the issue is fixed", "Tell customers 'it's working fine on our end'", "Acknowledge the outage proactively, give an ETA if possible, offer alternatives, and update frequently"], c: 3 },
    { q: "A customer wants something AGAINST company policy. The correct approach:", o: ["Explain WHY the policy exists with empathy, then offer the closest acceptable alternative: 'What I CAN do is...'", "Just say 'It's against our policy, sorry' — this reflects the standard operating procedure most organizations follow", "Make an exception every time to avoid conflict", "Transfer to management for policy decisions — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "De-escalation in chat: NEVER use phrases like:", o: ["'I understand your frustration' — this reflects the standard operating procedure most organizations follow", "'Calm down' or 'It's not that big of a deal' — minimizing their emotions makes everything worse", "'Let me help fix this right now' — this reflects the standard operating procedure most organizations follow", "'What would make this right for you?' — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Multiple complaints about the same issue in one day means:", o: ["Each case should be handled individually with no pattern recognition", "ESCALATE to leadership — a systemic problem is occurring that needs immediate operational attention", "It's normal busy-day volume — this reflects the standard operating procedure most organizations follow", "Close tickets faster to reduce the queue — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "When you've made a mistake that affected a customer:", o: ["Own it immediately, apologize genuinely, fix it fast, and add a goodwill gesture — honesty builds more trust than perfection", "Cover it up and hope they don't notice — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Blame the system or another department — this reflects the standard operating procedure most organizations follow", "Wait to see if they complain — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The hardest firefighting skill to develop is:", o: ["Typing fast under pressure — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Using the ticketing system efficiently — this reflects the standard operating procedure most organizations follow", "Knowing company policies — this reflects the standard operating procedure most organizations follow", "Emotional regulation — staying calm and professional when customers are at their angriest takes deliberate practice"], c: 3 }
];

const task10Quiz = [
    { q: "Role Play training serves what purpose?", o: ["It's fun team-building exercise time — this reflects the standard operating procedure most organizations follow", "Testing product knowledge primarily — this reflects the standard operating procedure most organizations follow", "It's a management requirement with no real benefit — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Practicing scenarios in a safe environment so that real customer interactions feel familiar — muscle memory for conversations"], c: 3 },
    { q: "In a role play, your 'customer' gives a complex objection you've never heard before. You should:", o: ["Apply the Pivot framework: acknowledge → ask clarifying questions → redirect to value — the principle works even for unknown objections", "Pause the role play and ask for the answer — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Skip to the next scenario — this reflects the standard operating procedure most organizations follow", "Guess and move on quickly — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Role play scenario: Customer wants a refund on a non-refundable item. Best approach:", o: ["'Sorry, it's non-refundable. Company policy' — this reflects the standard operating procedure most organizations follow and ensures sustainable long-term client relationship outcomes", "Give the refund to avoid conflict — this reflects the standard operating procedure most organizations follow", "Empathize, explain why, then offer alternatives: 'I understand your concern. While this item is final-sale, I can offer store credit/exchange — what works best?'", "Transfer to manager without trying to resolve — understanding why this works helps prevent the same category of problems from recurring in the future"], c: 2 },
    { q: "Role play reveals that an agent takes 5 seconds to respond to 'how much does shipping cost?' This means:", o: ["5 seconds is a fast response time — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Shipping info is too complex to memorize — this reflects the standard operating procedure most organizations follow", "The system was slow — this reflects the standard operating procedure most organizations follow", "Product knowledge gap — shipping costs should be instant recall, and the agent needs to review their speed tools and knowledge base"], c: 3 },
    { q: "Practicing upselling in role play helps because:", o: ["It makes upselling feel natural in real chats — agents who practice suggest complementary products smoothly instead of awkwardly", "Upselling is manipulative and shouldn't be practiced — the reasoning behind this connects directly to broader principles of professional service delivery", "Role play upsells don't translate to real performance", "Sales teams need upselling practice — this is the standard approach most teams follow"], c: 0 },
    { q: "After a role play session, the review should focus on:", o: ["Whether the agent won or lost the scenario — this reflects the standard operating procedure most organizations follow", "General praise to maintain morale — this reflects the standard operating procedure most organizations follow", "Specific improvement areas: response speed, objection handling technique, tone matching, closing confidence", "Technical product knowledge gaps — this is the standard approach most teams follow"], c: 2 },
    { q: "Multi-chat role play (handling 3 customers simultaneously) trains:", o: ["Prioritization, speed-tool usage, and maintaining quality across multiple conversations — the real-world daily challenge", "Multitasking for its own sake — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Chat agents to work harder — this reflects the standard operating procedure most organizations follow", "Computer screen management — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Role play: Customer says 'Your website is confusing.' The professional response:", o: ["'I'm sorry about that! Let me personally walk you through it — what are you looking for? I'll make this super easy for you'", "'Our website is actually very user-friendly' — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "'Which part is confusing?' — this reflects the standard operating procedure most organizations follow", "'We're redesigning the website soon' — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The best agents do role play even after years of experience because:", o: ["Management requires it quarterly — this reflects the standard operating procedure most organizations follow", "Every scenario sharpens skills — elite performers practice continuously, not just beginners", "They haven't mastered the basics yet — this reflects the standard operating procedure most organizations follow", "Role play is mandatory for all company employees"], c: 1 }
];

const task11Quiz = [
    { q: "A potential client sends an inquiry: 'I need a Shopify store for my brand.' What should your FIRST response accomplish?", o: ["Quote a price immediately so they know what to expect", "Demonstrate expertise, reference their specific need, and ask a clarifying question using the GREET framework", "Send your full portfolio and let the work speak for itself", "Ask them what their budget is before providing any information"], c: 1 },
    { q: "The GREET framework stands for:", o: ["Greet, Reference, Expertise, Engage, Timeline — a structured first response that builds trust and moves toward a sale", "Good, Responsive, Efficient, Effective, Thorough — a quality checklist for chat agents", "Gather, Research, Evaluate, Execute, Track — a project management methodology", "Greet, Redirect, Empathize, Apologize, Transfer — a complaint handling framework"], c: 0 },
    { q: "A client asks the same inquiry to 5 sellers. What determines who wins the order?", o: ["The lowest price always wins on marketplace platforms", "Response speed, demonstrated expertise in the first message, and asking smart clarifying questions", "Portfolio size is the only factor clients consider", "Whoever has the most reviews automatically gets chosen"], c: 1 },
    { q: "When gathering requirements, what is the maximum number of questions per message?", o: ["Ask all questions at once to save time", "2-3 targeted questions — too many overwhelms the client and reduces response rates", "Only 1 question per message", "As many as needed — the client expects detailed questioning"], c: 1 },
    { q: "A client says 'Budget is tight' during pre-sale. This really means:", o: ["They cannot afford your services and you should move on", "They want a discount and you should immediately lower your price", "They want value justification — show them your best work and explain the ROI of quality", "They are testing you to see if you will work for free"], c: 2 },
    { q: "A custom offer should include an 'Exclusions' section because:", o: ["It makes the offer look more professional", "It prevents scope creep by clearly stating what is NOT included — protecting both you and the client", "Clients do not read inclusion lists so exclusions matter more", "It is required by all marketplace platforms"], c: 1 },
    { q: "The ideal follow-up schedule after sending a custom offer is:", o: ["Follow up every hour until they respond", "24 hours, 3 days, 7 days — with increasingly gentle messages that add value", "Never follow up — if interested they will respond", "Wait exactly 48 hours then send a final ultimatum"], c: 1 },
    { q: "When a client says 'I have tried other sellers,' your approach should be:", o: ["Criticize those sellers to make yourself look better", "Emphasize your communication process and revision policy — showing how you are different", "Offer a lower price to compensate for their bad luck", "Ask them to name the other sellers so you can report them"], c: 1 },
    { q: "The biggest mistake in a first response to a client inquiry is:", o: ["Being too friendly", "Sending a generic copy-paste response that ignores their specific project details", "Responding too quickly", "Asking any questions at all"], c: 1 },
    { q: "A client who says 'Can you do everything?' is signaling:", o: ["They are unreasonable and will be a problem client", "They want a one-stop solution — position Digital Heroes as a full-service agency", "They do not know what they need and should be turned away", "They want the cheapest possible option"], c: 1 },
    { q: "The pre-sale funnel has 4 stages. The correct order is:", o: ["Price Quote, Negotiation, Order, Delivery", "Inquiry Received, Requirement Gathering, Custom Offer, Follow-Up", "Introduction, Portfolio Sharing, Contract Signing, Payment", "Cold Outreach, Warm-Up, Pitch, Close"], c: 1 },
    { q: "A client has not responded after 7 days. Your final follow-up should:", o: ["Send an aggressive message demanding a response", "Gracefully close the loop: acknowledge the offer is still available, wish them well, leave the door open", "Keep following up daily until they respond or block you", "Report them to the platform for wasting your time"], c: 1 }
];

const task12Quiz = [
    { q: "The #1 reason clients leave negative reviews is:", o: ["Poor quality work", "High prices compared to competitors", "Poor communication during the project — feeling uninformed and ignored", "Slow delivery times"], c: 2 },
    { q: "The milestone update system includes these stages in order:", o: ["Order Confirmation, Work Started, Progress Preview, Final Review, Delivery", "Start, Middle, End — three updates are sufficient", "Only send updates when the client asks", "Delivery message only"], c: 0 },
    { q: "An order confirmation message should be sent:", o: ["Within 24 hours of the order", "Only after you have started working", "Within a week of the order", "Within 2 hours of the order — thanking them, confirming scope, and sharing timeline"], c: 3 },
    { q: "A progress preview message should include:", o: ["Just text saying 'working on it'", "WIP screenshots or partial delivery along with status and timeline confirmation", "A request for additional payment before showing work", "An apology for not being done yet"], c: 1 },
    { q: "Going silent for more than 24 hours without an update is:", o: ["A major red flag that damages trust and can lead to cancellation or negative reviews", "Acceptable if you are busy", "Normal practice — clients understand sellers are busy", "Only a problem if the client asked for daily updates"], c: 0 },
    { q: "Setting expectations at order start should include:", o: ["Only the delivery date", "Just the price and a vague delivery estimate", "Deliverables, timeline, revision rounds, communication schedule, and what you need from the client", "A legal contract with terms and conditions"], c: 2 },
    { q: "Under-promise and over-deliver means:", o: ["Always quote double the time you need", "Set realistic expectations you can consistently exceed — never promise what you cannot guarantee", "Promise less so the client pays less", "Deliberately set low expectations to make average work look better"], c: 1 },
    { q: "If a client sends 'Any update?' before you proactively updated them, it means:", o: ["They are being impatient", "The client is micromanaging", "This is normal and expected", "You failed at proactive communication — they should never have to chase you"], c: 3 },
    { q: "Reactive vs proactive communication:", o: ["Proactive means sending updates before the client asks — it builds trust. Reactive means only responding when asked — it creates frustration.", "Reactive is better because you only communicate when necessary", "There is no meaningful difference", "Proactive is only needed for high-value orders"], c: 0 },
    { q: "Saying 'No problem' to a request that IS a problem is dangerous because:", o: ["It is unprofessional language", "The phrase sounds too casual", "It only applies to face-to-face conversations", "It sets false expectations — if you cannot deliver, the client will be disappointed and scope creep follows"], c: 3 },
    { q: "The expectation agreement should be confirmed:", o: ["Verbally during a call", "In writing within the order messages at the START of every project", "Only for orders above a certain dollar amount", "After the project is complete"], c: 1 },
    { q: "A well-communicated project with average work quality will typically receive:", o: ["A 1-2 star review because quality is all that matters", "The same review as a poorly communicated project", "A 4-5 star review because communication makes clients feel valued and respected throughout the process", "No review at all"], c: 2 }
];

const task13Quiz = [
    { q: "Scope creep is defined as:", o: ["When a client gradually requests work beyond what was originally agreed, without additional compensation", "Any client feedback or revision request", "When a project takes longer than expected", "When a client asks questions about progress"], c: 0 },
    { q: "'Can you also add a blog section?' on a 5-page store order is:", o: ["A legitimate revision", "Neither — it depends on the mood of the seller", "Scope creep — a blog section was never part of the original agreement and represents new work", "A reasonable request that should always be free"], c: 2 },
    { q: "The ACKNOWLEDGE-REDIRECT-OFFER framework works by:", o: ["Immediately saying no and explaining why", "Acknowledging the idea positively, redirecting to the original scope, then offering a paid solution", "Ignoring the request and hoping the client forgets", "Agreeing to do the extra work for free"], c: 1 },
    { q: "Bug fixes vs revisions: if a feature does not work as specified, fixing it is:", o: ["A revision that counts toward the limit", "Extra work that should be charged separately", "Only your responsibility if the client can prove it", "Your responsibility — bug fixes are NOT revisions. A revision is changing something that works as agreed."], c: 3 },
    { q: "A client on their 4th revision round when only 2 were included should be told:", o: ["'Sorry, your revisions are used up. No more changes.'", "Using ACKNOWLEDGE-REDIRECT-OFFER: acknowledge their desire for perfection, note the limit, offer additional rounds at a fair price", "Nothing — just do the revisions to avoid a bad review", "'You should have given better feedback the first time'"], c: 1 },
    { q: "Communicating revision limits BEFORE work begins is important because:", o: ["It makes you look strict", "Clients always try to take advantage without limits", "It is required by marketplace platform policies", "It sets clear expectations preventing frustration and disputes later in the project"], c: 3 },
    { q: "One revision round means:", o: ["The client sends ALL feedback consolidated, and you implement everything in one batch", "One individual change request", "A maximum of 30 minutes of additional work", "Any change that takes less than 5 minutes"], c: 0 },
    { q: "When to escalate scope creep to your Project Manager:", o: ["For any scope creep, no matter how small", "Never — chat specialists handle everything themselves", "When the client becomes aggressive, threatens reviews for free work, or additions exceed 30% of order value", "Only when the client asks to speak to a manager"], c: 2 },
    { q: "'This should be included' from a client requesting extra work should be handled by:", o: ["Agreeing immediately to avoid argument", "Telling them they are wrong", "Giving in to avoid a negative review", "Checking the original agreement together, clarifying what was included, then offering extras as a paid addition"], c: 3 },
    { q: "The best prevention for scope creep is:", o: ["Never including revision rounds in offers", "A detailed original agreement that explicitly lists both inclusions AND exclusions", "Charging extremely high prices", "Only working with clients who have positive reviews"], c: 1 },
    { q: "A client says 'While you are at it, can you also redesign the About Us page?' which was not in scope. The correct response is:", o: ["'Sure, I will add it since it is a small page and should not take long'", "'No, that is not included.' and leave it at that", "Use ACKNOWLEDGE-REDIRECT-OFFER: 'Great idea! That was not part of our current project, but I can create a separate order for the About Us redesign. Want me to send you a quote?'", "'I will do it this time, but next time it will cost extra'"], c: 2 },
    { q: "Which of the following is NOT a sign of scope creep?", o: ["Client asking to change the header color from blue to green", "Client requesting a custom app integration not in the original brief", "Client asking for a new product page type not discussed", "Client wanting a loyalty program feature added to their store"], c: 0 }
];

const task14Quiz = [
    { q: "A delivery message that says 'Here is your order' is problematic because:", o: ["It is grammatically correct and fine", "It is too short but otherwise acceptable", "It is lazy and wastes the opportunity to remind the client of the value — reducing the chance of a 5-star review", "Delivery messages do not matter — only work quality counts"], c: 2 },
    { q: "The delivery message structure should include:", o: ["Warm opening, summary, access instructions, highlights, next steps, future availability, and a polite review request", "Just the files and a download link", "A request for a tip and a 5-star review", "Only technical documentation"], c: 0 },
    { q: "When is the BEST time to ask for a review?", o: ["In the very first message before work is done", "After sending an invoice for additional work", "Three months after the project is complete", "Immediately after the client expresses genuine satisfaction"], c: 3 },
    { q: "Highlighting things you are proud of in the delivery message serves to:", o: ["Show off your skills", "Guide the client's attention to the value and quality details they might overlook — framing the work positively", "Fill up space in the message", "Justify your pricing"], c: 1 },
    { q: "A client says 'Looks good but can you change the font?' Should you ask for a review now?", o: ["Yes — they said it looks good", "Yes — but mention the font change is a revision", "Never ask for reviews", "No — there is an outstanding revision. Complete the change first, confirm full satisfaction, THEN ask"], c: 3 },
    { q: "Review solicitation that violates platform policies includes:", o: ["Politely asking after the client is satisfied", "Mentioning you would appreciate feedback", "Incentivizing reviews with discounts, threatening consequences, or asking for a specific star rating", "Thanking them and hoping they share their experience"], c: 2 },
    { q: "A well-crafted delivery message impacts reviews because:", o: ["It creates a final positive impression that shapes how the client remembers the entire experience", "Clients feel obligated to leave a good review if the message is long", "Delivery messages are the only thing clients read before reviewing", "It has no impact"], c: 0 },
    { q: "The 'Future Value' section of a delivery message should:", o: ["Pressure the client to place another order", "Mention your availability for future work — planting a seed for repeat business without being pushy", "List all your services with full pricing", "Ask the client to refer you to friends"], c: 1 },
    { q: "When a repeat client does not leave reviews, you should:", o: ["Stop doing good work for them", "Refuse future orders until they review", "Gently mention it without pressure while continuing to over-deliver", "Report them to the platform"], c: 2 },
    { q: "Including clear access instructions prevents:", o: ["Confusion, follow-up questions, delays in acceptance, and frustration that could affect the review", "Nothing — clients always know how to access deliverables", "The client from accessing files too quickly", "Future communication with the client"], c: 0 },
    { q: "Which of the following is the WORST way to present a Shopify store delivery?", o: ["Including a video walkthrough showing each page and feature", "Sending only the store URL with no explanation, no walkthrough, and no highlight of what was built", "Providing a checklist of completed features with screenshots", "Writing a summary of the design decisions and why they benefit the client"], c: 1 },
    { q: "A client receives your delivery and responds with 'This is amazing, exactly what I wanted!' Your next action should be:", o: ["Say 'Thanks!' and close the conversation", "Immediately send an invoice for additional services", "Wait a few days before responding to seem professional", "Thank them warmly, ask if they need anything else, and then politely request a review while the positive feeling is fresh"], c: 3 }
];

const task15Quiz = [
    { q: "The Service Recovery Paradox means:", o: ["Problems always result in lost clients", "You should create problems so you can resolve them heroically", "Customers with a well-resolved problem become MORE loyal than those who never had a problem", "Service recovery is impossible once a client is upset"], c: 2 },
    { q: "When a delivery is going to be late, you should:", o: ["Notify the client BEFORE the deadline with explanation, new timeline, and compensation offer", "Wait until after the deadline to notify", "Deliver silently late and hope they do not notice", "Cancel the order to avoid a negative review"], c: 0 },
    { q: "The HEARD method stands for:", o: ["Help, Evaluate, Assign, Resolve, Document", "Hear them out, Empathize genuinely, Apologize specifically, Resolve with action, Delight with extra", "Handle, Escalate, Approve, Return, Dismiss", "Halt, Examine, Analyze, Respond, Deliver"], c: 1 },
    { q: "Saying 'I was busy with other orders' when explaining a delay is bad because:", o: ["It is honest and clients appreciate honesty", "Clients do not care about reasons", "It reveals confidential business information", "It makes the client feel unimportant — like they are just one of many"], c: 3 },
    { q: "A client demands a FULL refund but significant work was completed. The best first step is:", o: ["Process the full refund immediately", "Offer to make things right first — ask what specifically is not meeting expectations and commit to fixing it", "Refuse any refund since work was completed", "Threaten to report them for trying to get free work"], c: 1 },
    { q: "'Calm down' is a de-escalation phrase that:", o: ["Works well because it addresses their emotional state", "Is appropriate only in written chat", "Should be used sparingly with difficult clients", "Should NEVER be used — it minimizes feelings, sounds condescending, and escalates the situation"], c: 3 },
    { q: "'What I CAN do for you is...' is powerful because:", o: ["It shifts from limitations to solutions — showing what IS possible instead of what is not", "It sounds corporate and professional", "It avoids the word 'unfortunately'", "It is required by the DH communication SOP"], c: 0 },
    { q: "When you made a mistake affecting a client, the correct sequence is:", o: ["Blame the system, apologize vaguely, hope they do not escalate", "Cover it up and handle it behind the scenes", "Own it immediately, apologize genuinely, fix it fast, add a goodwill gesture", "Wait to see if they notice"], c: 2 },
    { q: "A client says 'THIS IS NOT WHAT I ASKED FOR.' Before responding, you should:", o: ["Immediately defend your work", "Ask the client to calm down", "Offer a full refund without discussion", "Review the original requirements, compare with delivery, then respond using the HEARD method — leading with empathy"], c: 3 },
    { q: "Multiple de-escalation techniques combined in one response creates:", o: ["A powerful resolution addressing emotions, acknowledging the problem, proposing solutions, and adding a bonus", "A confusing and overly long message", "An insincere-sounding script", "Too much effort for a single complaint"], c: 0 },
    { q: "A refund request where the client seems to want free work should be:", o: ["Granted immediately to avoid confrontation", "Ignored until the client gives up", "Handled by standing firm politely, documenting everything, and escalating to PM if needed", "Responded to with an accusation of fraud"], c: 2 },
    { q: "The proactive delay notification should include all EXCEPT:", o: ["An acknowledgment of the timeline change", "Blaming the client for causing the delay — even if true, blame damages the relationship", "A specific new delivery date", "A compensation offer for the inconvenience"], c: 1 }
];

const task16Quiz = [
    { q: "At Digital Heroes, the minimum acceptable average seller rating is:", o: ["3.5 stars", "4.0 stars", "4.8+ stars — a non-negotiable KPI affecting search ranking, conversion, and platform trust", "5.0 stars"], c: 2 },
    { q: "The over-delivery strategy works because:", o: ["Clients expect bonuses and will be disappointed without them", "Small unexpected extras create disproportionate goodwill — generating enthusiastic reviews and repeat business", "Over-delivering is required by marketplace platforms", "It justifies charging higher prices"], c: 1 },
    { q: "When responding publicly to a negative review, you should:", o: ["Thank them, acknowledge the issue, explain briefly, state what you improved, and invite them back", "Argue your side forcefully", "Ignore it — responding draws more attention", "Ask the client to remove the review"], c: 0 },
    { q: "The best defense against negative reviews is:", o: ["Only accepting orders from clients with positive histories", "Offering discounts in exchange for not leaving reviews", "Working only on small, low-risk projects", "Proactive communication throughout — catching and resolving issues before they become reviews"], c: 3 },
    { q: "Asking a client to remove a negative review is:", o: ["Standard practice", "Acceptable if you offer a free revision", "Against most platform policies and can result in penalties", "The only way to maintain a high rating"], c: 2 },
    { q: "The review earning checklist requires confirming BEFORE asking:", o: ["Only that the order was delivered on time", "All deliverables complete, client satisfied, no outstanding issues, on-time delivery, proactive communication, and extra value", "That the client has purchased from you twice before", "Only that the client seems happy"], c: 1 },
    { q: "When you sense client dissatisfaction during a project, you should:", o: ["Wait and see if it resolves after delivery", "Speed up delivery to get it over with", "Lower your expectations for the review", "Proactively ask 'I want to make sure you are 100% happy. What can I improve?'"], c: 3 },
    { q: "A 3-star review saying 'Communication was slow' — your public response should:", o: ["Thank them, acknowledge communication gaps, explain improvements made, invite them to experience the change", "Defend yourself with message timestamps", "Argue that 3 stars is unfair for the quality", "Ignore it — 3 stars is not bad enough"], c: 0 },
    { q: "Over-delivery examples for a Shopify store include:", o: ["Delivering 2 days late but with extra pages", "Charging less than quoted", "Free speed optimization, extra social media banner, SEO checklist — small bonuses that delight", "Sending links to competitor websites"], c: 2 },
    { q: "A seller rating dropping below 4.5 results in:", o: ["No significant impact", "Severe drop in orders, reduced visibility, possible platform demotion — recovery takes months", "Temporary reduced visibility for one week", "Automatic account suspension"], c: 1 },
    { q: "A client leaves a 4-star review saying 'Great work, just wish there were more revisions included.' Which response is best?", o: ["'We include a generous number of revisions in every package.'", "'If you wanted more revisions, you should have purchased a higher tier.'", "'Thank you for the kind words! We appreciate your feedback and have expanded our revision options. We would love to work with you again!'", "'4 stars is unfair when you rated the work as great.'"], c: 2 },
    { q: "Which of the following is NOT an effective over-delivery strategy?", o: ["Including a quick how-to video showing the client how to update their store", "Providing a free SEO audit checklist with the delivery", "Delivering the project 3 days late but adding an unrequested feature as compensation", "Adding a mobile-responsive social media banner at no charge"], c: 2 }
];

const task17Quiz = [
    { q: "The DH Chat Career Ladder goes up to:", o: ["L3 — Senior Chat Specialist is the highest", "L10 — there are 10 levels", "L2 — Chat Specialist is the only promotion", "L5 — Account Manager / Team Lead, requiring 18+ months and proven leadership"], c: 3 },
    { q: "The target First Response Time KPI is:", o: ["Under 60 seconds — directly correlates with conversion rate", "Under 5 minutes", "Under 30 minutes", "Under 10 seconds"], c: 0 },
    { q: "A Repeat Client Rate of 30%+ indicates:", o: ["You are giving too many discounts", "You are not attracting enough new clients", "Strong relationship-building ability — clients trust you enough to return", "Average performance"], c: 2 },
    { q: "The Pre-Sales Specialist track focuses on:", o: ["Handling the most difficult complaints", "Converting inquiries into orders — a high-value skill that generates revenue", "Reviewing chat transcripts for QA", "Training new chat agents"], c: 1 },
    { q: "The 4 hrs/week learning hours should be used for:", o: ["Catching up on work tasks", "Browsing social media", "Only company-assigned training modules", "Courses on negotiation, communication psychology, and client management"], c: 3 },
    { q: "A 'win journal' helps career growth by:", o: ["Documenting best interactions and what made them work — creating a personal playbook of proven techniques", "Providing evidence for salary negotiations only", "Tracking the number of chats per day", "Recording client complaints for legal protection"], c: 0 },
    { q: "Volunteering for difficult cases accelerates growth because:", o: ["It makes you look good to management without developing skills", "It increases chat volume numbers", "Difficult cases force you to apply multiple skills under pressure — where growth happens fastest", "Difficult cases pay more money"], c: 2 },
    { q: "The Resolution Rate KPI target of 85%+ measures:", o: ["How many chats you close within 60 seconds", "First-contact resolution — solving the issue without needing to escalate or follow up", "Percentage of orders delivered on time", "How many clients you convert from inquiry to purchase"], c: 1 },
    { q: "To advance from L2 to L3, you need:", o: ["1 month of experience and passing the certification", "Management recommendation only", "A perfect 5.0 star rating", "6 months experience, ability to mentor new agents, and handling escalations"], c: 3 },
    { q: "Building a personal brand within DH means:", o: ["Consistent excellence, mentoring others, studying communication psychology — your reputation opens doors", "Marketing yourself on social media separately from the company", "Having a personal website with chat statistics", "Negotiating a unique title"], c: 0 },
    { q: "The Conversion Rate KPI target of 20%+ measures:", o: ["How many chats you respond to within 20 seconds", "The percentage of chat inquiries that result in a placed order — a direct revenue metric", "How quickly you close conversations", "The percentage of clients who leave 5-star reviews"], c: 1 },
    { q: "The Client Success Manager specialization track is best suited for someone who:", o: ["Prefers handling only pre-sale inquiries and avoids post-sale support", "Wants to own entire client relationships from first contact through delivery, reviews, and repeat business", "Is only interested in technical troubleshooting", "Wants to avoid client-facing work and focus on analytics"], c: 1 },
    { q: "Which of the following is NOT one of the DH Chat specialization tracks?", o: ["Pre-Sales Specialist", "Escalation Expert", "Social Media Marketing Manager", "Quality Assurance"], c: 2 },
    { q: "The L4 Client Success Lead role requires approximately how many months of experience?", o: ["3 months", "6 months", "12 months with end-to-end client relationship management skills", "24 months minimum"], c: 2 },
    { q: "A chat specialist who consistently hits all KPI targets but never mentors others or volunteers for escalations is MOST likely stuck at:", o: ["L1 — they have not completed certification", "L2 — strong individual performance but lacking the leadership and mentoring required for L3 and above", "L4 — they are already at a senior level", "L5 — individual performance is all that matters for advancement"], c: 1 }
];

const task18Quiz = [
    { q: "Applying Tasks 4 and 11: A client sends 'I need a Shopify store but not sure what I need.' Your response should:", o: ["Send a generic portfolio link", "Quote your cheapest package", "Match their uncertain tone with warmth (tonality), use the GREET framework, ask discovery questions — combining multiple modules", "Tell them to figure it out and come back later"], c: 2 },
    { q: "Applying Tasks 12 and 13: Mid-project, a client asks for 5 extra pages not in scope. You should:", o: ["Acknowledge positively, reference original scope (Task 12), use ACKNOWLEDGE-REDIRECT-OFFER (Task 13) to offer a paid solution", "Add them for free to protect your review", "Tell them 'that is not included' and refuse", "Silently add them and hope for a tip"], c: 0 },
    { q: "Applying Tasks 12 and 15: Delivery will be 2 days late. You should:", o: ["Deliver silently late and apologize if noticed", "Request a deadline extension through the platform only", "Rush and deliver poor quality on time", "Proactively notify BEFORE deadline (Task 12) using delay notification framework (Task 15) with explanation, new date, and compensation"], c: 3 },
    { q: "Applying Tasks 9 and 15: Client says 'THIS IS NOT WHAT I ASKED FOR! Refund NOW!' You should:", o: ["Process the refund immediately", "Apply HEARD method (Task 15) with empathy and de-escalation (Task 9): hear out, empathize, apologize, propose fixes, offer bonus", "Defend your work by listing everything delivered", "Tell them to calm down and review the agreement"], c: 1 },
    { q: "Applying Tasks 7 and 16: After resolving a complaint successfully, you should:", o: ["End the conversation immediately", "Send a review request before the conversation ends", "Offer a permanent discount on all future orders", "Leverage goodwill with a closing opportunity (Task 7) and work toward protecting the review (Task 16)"], c: 3 },
    { q: "Combining all 17 modules, the elite DH Chat Specialist is defined by:", o: ["Lightning response, human warmth, requirement gathering, expectation management, scope boundaries, compelling deliveries, crisis composure, review management, and career leadership", "Perfect typing speed and grammar above all", "Years of experience only", "Highest chat volume numbers"], c: 0 },
    { q: "Scope creep (Task 13) combined with difficult conversations (Task 15) is handled by:", o: ["Always giving in to avoid conflict", "Refusing all changes and escalating every dispute", "Using ACKNOWLEDGE-REDIRECT-OFFER for scope issues and HEARD method if client becomes upset — boundaries while preserving relationship", "Canceling the order to avoid stress"], c: 2 },
    { q: "The DH Client Chat Certification proves mastery of:", o: ["Basic typing skills and product knowledge only", "Chat platform technical skills only", "Company policies and attendance rules only", "The complete client communication lifecycle — from first inquiry through delivery, review management, and career planning"], c: 3 },
    { q: "After earning certification, your most important next step (Task 17) is:", o: ["Relax and coast on the credential", "Create a development plan with KPI targets, choose a specialization, start mentoring — certification is the beginning, not the end", "Immediately apply for management", "Stop learning since training is complete"], c: 1 },
    { q: "The #1 revenue killer in client chat, combining insights from all modules, is:", o: ["Slow response times alone", "Poor product knowledge alone", "Answering questions without closing, poor communication during orders, and failing to manage reviews — the complete chain of missed opportunities", "Bad grammar in messages"], c: 2 }
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
