// Project Manager Training - COMPREHENSIVE EXPANDED VERSION
// Based on Digital Heroes PM Mega-Prompt Framework

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "PM Mindset & Philosophy", description: "Ownership, accountability, elite habits", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎯 The bridge between client & team", "📖 Read pm-sop.html completely"] },
    { id: 3, title: "Client Communication Mastery", description: "8 Non-Negotiable Rules", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "💬 Response standards", "📖 Master all templates"] },
    { id: 4, title: "Project Lifecycle", description: "14-Day Timeline Deep Dive", contentFirst: true, studyGuide: ["⏱️ Time: 75 min", "📋 Phase-by-phase breakdown", "📖 Study milestones"] },
    { id: 5, title: "Team Coordination", description: "Leadership & Delegation", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "👥 Work with devs & designers", "📖 Shield mentality"] },
    { id: 6, title: "Scope Management", description: "Change Control Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Scope creep prevention", "📖 Change request flowchart"] },
    { id: 7, title: "Quality Assurance", description: "60-Point QA Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "✅ Complete QA checklist", "📖 Delivery standards"] },
    { id: 8, title: "Tools & Systems", description: "PM Software Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🖥️ Essential tools", "📖 Automation workflows"] },
    { id: 9, title: "Difficult Situations", description: "15 Crisis Scenarios", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🔥 De-escalation scripts", "📖 Crisis management"] },
    { id: 10, title: "Metrics & Performance", description: "KPIs & Self-Assessment", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📊 Track what matters", "📖 Weekly reviews"] },
    { id: 11, title: "Fiverr Project Management", description: "Order Lifecycle, Metrics & Templates", contentFirst: true, studyGuide: ["⏱️ Time: 90-120 min", "📦 Master: Fiverr order lifecycle", "📊 Learn: Seller metrics that matter", "💬 Understand: Template messages for PM scenarios"] },
    { id: 12, title: "Multi-Project Handling", description: "Juggling 5-10 Active Projects", contentFirst: true, studyGuide: ["⏱️ Time: 90-120 min", "🎯 Master: Priority matrix & time blocking", "📊 Learn: Red/Yellow/Green status tracking", "🧠 Understand: Context switching costs"] },
    { id: 13, title: "Developer Coordination", description: "Technical Literacy for PMs", contentFirst: true, studyGuide: ["⏱️ Time: 60-90 min", "🔧 Understand: Shopify dev workflow", "📋 Learn: How to write dev briefs", "⏱️ Master: Understanding dev time estimates"] },
    { id: 14, title: "Client Handoff & Delivery", description: "QA, Loom Walkthroughs & Reviews", contentFirst: true, studyGuide: ["⏱️ Time: 60-90 min", "📦 Master: Fiverr delivery formatting", "🎥 Learn: Loom walkthrough best practices", "⭐ Understand: Review request timing & scripts"] },
    { id: 15, title: "Upselling & Revenue Growth", description: "PM as Revenue Driver", contentFirst: true, studyGuide: ["⏱️ Time: 60-75 min", "💰 Master: Identifying upsell opportunities", "📝 Learn: 5 upsell conversation scripts", "📈 Understand: Client lifetime value"] },
    { id: 16, title: "Meeting Mastery & Client Calls", description: "Kickoffs, Reviews & Handovers", contentFirst: true, studyGuide: ["⏱️ Time: 60-75 min", "📞 Master: Live Revision Call process", "📋 Learn: Meeting agendas & documentation", "🌍 Understand: Time zone management"] },
    { id: 17, title: "Career Growth & Certification", description: "PM Career Path & Final Exam", contentFirst: true, studyGuide: ["⏱️ Time: 60-90 min", "📈 Understand: Junior PM → Head of PM path", "📊 Learn: PM KPIs at DH", "🎓 Complete: Final Certification Exam"] },
    { id: 18, title: "Practical Task — Project Simulation", description: "72-Hour PM Challenge", contentFirst: true, studyGuide: ["⏱️ Time: 72 hours", "🏗️ Manage: Full Shopify project simulation", "📋 Deliver: Project plan, client updates, QA checklist", "📤 Submit: Via Google Form"] }
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

// TASK 1: PM MINDSET & PHILOSOPHY
const task2Content = `
<h2>📚 TASK 1: PM MINDSET & PHILOSOPHY</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into PM skills, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(8, 145, 178, 0.1)); border: 2px solid rgba(6, 182, 212, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #22D3EE; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #22D3EE; font-size: 1.2em;">⭐ YOU (PM)</strong> → <strong>THE CONDUCTOR - bridge between clients and team, ensure delivery excellence</strong><br>
            ↓<br>
            <strong style="color: #F472B6;">Development</strong> → delivers quality work<br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #A78BFA;">5-Star Reviews</strong> → boost algorithm positioning
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(6, 182, 212, 0.15); border-left: 4px solid #06B6D4; padding: 15px; margin: 15px 0;">
        <strong style="color: #22D3EE;">🎼 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a PM, you are the <strong>CONDUCTOR</strong> of the orchestra. You translate client expectations into developer actions, manage timelines, prevent scope creep, and ensure on-time, high-quality delivery. When you miss a deadline, client trust erodes. When you fail to document requirements, developers build the wrong thing. Your coordination directly determines project success and client satisfaction.</p>
    </div>
    
    <p style="color: #22D3EE; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Poor project management = Unhappy clients = Bad reviews = Chain breaks. You orchestrate success.</p>
</div>

<div class="content-section">
<h3>🎯 Why This Role Matters</h3>
<p>At Digital Heroes, the Project Manager is the <strong>bridge between client expectations and team capabilities</strong>. You are not a task tracker — you are the <strong>owner of project success</strong>.</p>

<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ The ₹15 Lakh Disaster Story:</strong><br><br>
A PM once assumed the developer understood the requirements. No documentation. No check-ins. 3 weeks later: wrong product built. Client demanded refund. We lost ₹15 lakhs in revenue AND our reputation with that client forever.<br><br>
<strong>The lesson:</strong> Assumptions kill projects. Communication saves them.
</div>
</div>

<div class="content-section">
<h3>🧠 The PM Ownership Principle</h3>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981; text-align: center; padding: 25px;">
<h4 style="margin-top: 0; color: #10B981; font-size: 1.3em;">If the project succeeds → You enabled it<br>If the project fails → You failed to prevent it</h4>
<p style="margin-bottom: 0;">No excuses. No blame. Only solutions.</p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<th style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">❌ Amateur PM Says</th>
<th style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">✅ Professional PM Says</th>
</tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The developer was late"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I didn't catch the delay early enough"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Client keeps changing things"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to set clearer scope boundaries"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm waiting for an answer"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'll follow up until I get one"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That's not my job"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"If it affects my project, it's my responsibility"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"They should have known"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I should have communicated clearer"</td></tr>
</table>
</div>

<div class="content-section">
<h3>💡 The 5 Core PM Principles</h3>

<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
<h4 style="color: #6366F1; margin-top: 0;">1. PLAN TWICE, EXECUTE ONCE</h4>
<p>Every hour spent planning saves 10 hours in chaos. Never start a project without clear scope, timeline, and success criteria documented and approved.</p>
</div>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">2. OVER-COMMUNICATE, NEVER UNDER</h4>
<p>Clients don't complain about too many updates. They complain about surprises. A weekly update takes 10 minutes. Fixing a surprised angry client takes 10 hours.</p>
</div>

<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">3. PROBLEMS EARLY, SOLUTIONS ATTACHED</h4>
<p>When you find an issue, immediately: (1) Identify the problem, (2) Assess impact, (3) Propose 2-3 solutions, (4) Recommend one. Never bring problems without solutions.</p>
</div>

<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">4. PROTECT THE TEAM, SHIELD THE NOISE</h4>
<p>Your developers and designers need focus time. YOU absorb client pressure, unclear requirements, and scope discussions. They code. You coordinate.</p>
</div>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #8B5CF6;">
<h4 style="color: #8B5CF6; margin-top: 0;">5. DOCUMENT EVERYTHING</h4>
<p>If it's not written, it didn't happen. Every decision, change, approval — documented. This protects you, the team, and the company.</p>
</div>
</div>
</div>

<div class="content-section">
<h3>📊 The Project Success Triangle</h3>
<div class="highlight-box">
<p><strong>Every project has three constraints:</strong></p>
<ul>
<li><strong>SCOPE:</strong> What gets delivered (features, pages, functionality)</li>
<li><strong>TIME:</strong> When it's delivered (deadline, milestones)</li>
<li><strong>COST:</strong> Resource investment (team hours, budget)</li>
</ul>
<p><strong>The Iron Rule:</strong> You can optimize 2, never all 3.</p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">If Client Wants</th><th style="padding: 12px;">The Trade-off</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fast + Cheap</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">= Low Quality (reduced scope)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fast + High Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">= Expensive (rush fees, more resources)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cheap + High Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">= Slow (extended timeline)</td></tr>
</table>
</div>

<div class="content-section">
<h3>🌅 Daily Habits of Elite PMs</h3>
<div class="highlight-box">
<strong>Morning Routine (First 30 minutes):</strong>
<ol>
<li>Check all project channels for overnight messages</li>
<li>Review today's deadlines and milestones</li>
<li>Identify top 3 priorities for the day</li>
<li>Send proactive updates on any at-risk items</li>
<li>Clear any blockers for your team</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>End of Day Routine (Last 15 minutes):</strong>
<ol>
<li>Update project tracking with today's progress</li>
<li>Flag any items that need tomorrow's attention</li>
<li>Respond to all pending client messages</li>
<li>Prepare tomorrow's standup notes</li>
<li>Document any decisions made today</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for Quiz?</h3>
<p>You've learned the PM mindset. Now prove you understand ownership, the 5 principles, and what separates amateur from professional PMs.</p>
</div>
`;

// TASK 2: CLIENT COMMUNICATION MASTERY
const task3Content = `
<h2>📚 TASK 2: CLIENT COMMUNICATION MASTERY</h2>

<div class="content-section">
<h3>📜 The 8 Non-Negotiable Communication Rules</h3>

<div style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 12px; margin: 20px 0;">
<strong style="color: #EF4444;">⚠️ CRITICAL:</strong> Breaking ANY of these rules can cost us our 4.9★ rating and client relationships worth lakhs.
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px; width: 50px;">#</th><th style="padding: 12px;">Rule</th><th style="padding: 12px;">Standard</th></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Response Time</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2 hours during work hours, < 12 hours outside</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>2</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Weekly Updates</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Every Friday minimum (more for active projects)</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>3</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bad News Early</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 24 hours of discovering issue</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>4</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Professional Tone</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Warm but professional, never defensive</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>5</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Clear Next Steps</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Every message ends with clear action item</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>6</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Proactive Updates</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Don't wait for client to ask status</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>7</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Document Everything</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All decisions in writing, confirmed by client</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>8</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Set Expectations</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under-promise, over-deliver always</td></tr>
</table>
</div>

<div class="content-section">
<h3>📧 Weekly Status Update Template</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Subject: [Project Name] Weekly Update - Week X</strong><br><br>

Hi [Client Name]! 👋<br><br>

<strong>✅ COMPLETED THIS WEEK:</strong><br>
• Homepage design finalized<br>
• Product page template built<br>
• Navigation menu implemented<br><br>

<strong>🔄 IN PROGRESS:</strong><br>
• Collection page development (70% done)<br>
• Speed optimization started<br><br>

<strong>⚡ NEEDS YOUR INPUT:</strong><br>
• Please review the product page: [link]<br>
• Awaiting final logo files<br><br>

<strong>📅 NEXT WEEK PLAN:</strong><br>
• Complete collection page<br>
• Begin checkout customization<br>
• Internal QA round 1<br><br>

<strong>📊 TIMELINE STATUS:</strong> ✅ On Track<br><br>

Let me know if you have any questions!<br>
[Your Name]
</div>
</div>

<div class="content-section">
<h3>🔥 Delivering Bad News Framework</h3>
<div class="warning-box">
<strong>The SPEAR Method:</strong>
<ol>
<li><strong>S</strong>ituation: State the issue clearly</li>
<li><strong>P</strong>roblem: Explain the impact</li>
<li><strong>E</strong>xplanation: Why it happened (no excuses)</li>
<li><strong>A</strong>ction: What we're doing to fix it</li>
<li><strong>R</strong>esolution: Expected outcome and timeline</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 15px; background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Example - Delay Notification:</strong><br><br>

Hi [Client],<br><br>

I need to update you on our timeline.<br><br>

<strong>Situation:</strong> We've discovered a compatibility issue between your required app and the theme.<br><br>

<strong>Impact:</strong> This will add approximately 2 days to our delivery timeline.<br><br>

<strong>What happened:</strong> The app's latest update changed how it integrates with themes. This wasn't apparent until we began testing.<br><br>

<strong>Our solution:</strong> Our senior developer is already working on a custom integration. We've also contacted the app developer for guidance.<br><br>

<strong>New timeline:</strong> Original delivery was Friday. New delivery will be Tuesday, giving us buffer for thorough testing.<br><br>

I sincerely apologize for this delay. We're prioritizing this to minimize any inconvenience.<br><br>

Questions? I'm here.<br>
[Your Name]
</div>
</div>

<div class="content-section">
<h3>😤 Handling Difficult Client Types</h3>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Client Type</th><th style="padding: 12px;">Signs</th><th style="padding: 12px;">Strategy</th></tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Micromanager</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily check-ins, wants to see every step</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proactive daily updates. Over-communicate. Make them feel in control.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Ghost</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disappears for days, slow approvals</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set clear deadlines. "If no response by X, we'll proceed with Y."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Scope Creeper</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just one more thing" constantly</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Document original scope. Use change request process. Quote additions.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Angry Client</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Frustrated, uses strong language</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stay calm. Acknowledge feelings. Focus on solutions. Never defensive.</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for Quiz?</h3>
<p>Master these templates and rules. They're your shield against client issues.</p>
</div>
`;

// TASK 3: PROJECT LIFECYCLE
const task4Content = `
<h2>📚 TASK 3: PROJECT LIFECYCLE - 14-DAY TIMELINE</h2>

<div class="content-section">
<h3>📅 The Complete 14-Day Shopify Project Timeline</h3>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; margin: 20px 0;">
<strong>Standard Premium Package Delivery: 14 Days</strong><br>
This timeline applies to most $1,200-$1,800 projects. Complex projects may need 21-28 days.
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Day</th><th style="padding: 12px;">Phase</th><th style="padding: 12px;">PM Tasks</th><th style="padding: 12px;">Deliverable</th></tr>
<tr style="background: rgba(16, 185, 129, 0.1);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Kickoff</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Handoff meeting, collect assets, set expectations</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project brief document</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>2-3</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Coordinate with designer, review mockups</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Homepage mockup for review</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design Review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Present to client, collect feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Approved design direction</td></tr>
<tr style="background: rgba(245, 158, 11, 0.1);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>5-8</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Development</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily dev check-ins, unblock issues</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functional store on dev</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>9-10</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content & Polish</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content upload, speed optimization</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content-complete store</td></tr>
<tr style="background: rgba(139, 92, 246, 0.1);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>11</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Internal QA</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full QA checklist, bug fixing</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA-passed store</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>12</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Walkthrough with client, collect feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision list</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>13</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revisions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Implement feedback, final polish</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision-complete store</td></tr>
<tr style="background: rgba(16, 185, 129, 0.2);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>14</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Final delivery, handover, support kickoff</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Live store + docs</td></tr>
</table>
</div>

<div class="content-section">
<h3>⏰ Buffer Management</h3>
<div class="highlight-box">
<strong>The 20-30% Rule:</strong><br>
Always build 20-30% buffer into your timelines. If development estimate is 5 days, plan for 6-7.
<br><br>
<strong>Why?</strong> Bugs, client delays, unclear requirements, sick days, app conflicts — reality is never perfect.
</div>
</div>

<div class="content-section">
<h3>📋 Project Kickoff Checklist</h3>
<ul>
<li>☐ Scope document reviewed and confirmed</li>
<li>☐ Client contact info and timezone noted</li>
<li>☐ All assets received (logo, images, content)</li>
<li>☐ Shopify access granted</li>
<li>☐ Team members assigned and briefed</li>
<li>☐ Communication cadence agreed</li>
<li>☐ First milestone date confirmed</li>
<li>☐ Risk assessment completed</li>
<li>☐ Internal project board created</li>
<li>☐ Kickoff message sent to client</li>
</ul>
</div>
`;

// Continuing with remaining tasks...
const task5Content = `
<h2>📚 TASK 4: TEAM COORDINATION & LEADERSHIP</h2>

<div class="content-section">
<h3>👥 Working with Developers</h3>
<div class="highlight-box">
<strong>What Developers Need From You:</strong>
<ul>
<li>Clear, written requirements (not verbal)</li>
<li>All assets and access before they start</li>
<li>Protection from direct client contact during work</li>
<li>Quick unblocking when they're stuck</li>
<li>Reasonable deadlines with buffer</li>
<li>Context on WHY, not just WHAT</li>
</ul>
</div>

<div class="warning-box" style="margin-top: 15px;">
<strong>⚠️ Never Do This:</strong>
<ul>
<li>Give verbal instructions for complex work</li>
<li>Pass client messages directly without filtering</li>
<li>Promise client deadlines without checking with dev</li>
<li>Interrupt deep work for non-urgent questions</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎨 Working with Designers</h3>
<div class="highlight-box">
<strong>What Designers Need From You:</strong>
<ul>
<li>Brand guidelines and references</li>
<li>Clear design briefs with goals</li>
<li>Consolidated feedback (not scattered messages)</li>
<li>Protection from "can you just try this" requests</li>
<li>Reasonable revision rounds</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🛡️ The Shield Mentality</h3>
<div style="background: rgba(16, 185, 129, 0.2); padding: 25px; border-radius: 12px; text-align: center;">
<h4 style="color: #10B981; margin-top: 0;">YOU absorb the pressure so the team can focus.</h4>
<p>When clients are anxious, demanding, or unclear — you translate that into calm, clear direction for your team.</p>
</div>
</div>

<div class="content-section">
<h3>📋 Daily Standup Format</h3>
<div class="highlight-box">
<strong>15 Minutes Max. Standing Up. No Rabbit Holes.</strong>
<br><br>
Each team member answers:
<ol>
<li><strong>What I completed:</strong> Yesterday's work</li>
<li><strong>What I'm doing:</strong> Today's focus</li>
<li><strong>Any blockers:</strong> What's stopping me</li>
</ol>
<br>
<strong>Your job:</strong> Listen for blockers, assign action items, follow up after standup.
</div>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: SCOPE MANAGEMENT & CHANGE CONTROL</h2>

<div class="content-section">
<h3>🎯 What is Scope and Why It Matters</h3>
<p>Scope defines <strong>exactly what is included</strong> in the project price. Everything outside scope = additional work = additional cost.</p>

<div class="warning-box">
<strong>The Cost of Scope Creep:</strong><br>
A $1,500 project can become a $3,000 project (at our cost) if scope isn't managed. That's -$1,500 from company profit. Scale that to 10 projects = -₹12 lakhs per year in lost revenue.
</div>
</div>

<div class="content-section">
<h3>📋 The Scope Change Flowchart</h3>
<div class="highlight-box">
<strong>When client requests something new:</strong>
<ol>
<li>Is it in the original scope document? → If YES: Do it</li>
<li>If NO: Is it a small goodwill item (< 15 min work)? → If YES: Do it + document</li>
<li>If NO: Create change request with estimate</li>
<li>Present options: Add now (cost X), Add later, Skip</li>
<li>Get WRITTEN approval before any work</li>
<li>Update scope document</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💬 Scripts for Scope Discussions</h3>

<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Script: Polite Scope Boundary</strong><br><br>
"Great idea! That feature wasn't part of our original scope, but I'd love to see it in your store too.
<br><br>
I can get you a quick quote for adding this — would you like me to prepare that? Alternatively, we could add it in a Phase 2 after launch."
</div>

<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em; margin-top: 15px;">
<strong>Script: When Client Pushes Back</strong><br><br>
"I completely understand. To keep our delivery on schedule and within budget, I need to clarify what's included.
<br><br>
Our original agreement covered [X, Y, Z]. This request is additional work. Happy to discuss options — we could swap another feature for this one, or add it separately."
</div>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: QUALITY ASSURANCE & DELIVERY</h2>

<div class="content-section">
<h3>✅ Complete 60-Point QA Checklist (Key Items)</h3>

<h4>🎨 Design QA</h4>
<ul>
<li>☐ Matches approved mockups</li>
<li>☐ Brand colors consistent throughout</li>
<li>☐ Typography matches spec</li>
<li>☐ Images high quality, properly sized</li>
<li>☐ Spacing and alignment consistent</li>
<li>☐ Hover states work correctly</li>
</ul>

<h4>📱 Mobile Responsiveness</h4>
<ul>
<li>☐ All pages tested on mobile</li>
<li>☐ Touch targets large enough (44px+)</li>
<li>☐ Text readable without zooming</li>
<li>☐ No horizontal scrolling</li>
<li>☐ Forms usable on mobile</li>
</ul>

<h4>⚡ Performance</h4>
<ul>
<li>☐ Mobile PageSpeed 85+</li>
<li>☐ Desktop PageSpeed 90+</li>
<li>☐ Images lazy loading</li>
<li>☐ No console errors</li>
</ul>

<h4>🛒 E-commerce Functions</h4>
<ul>
<li>☐ Add to cart works</li>
<li>☐ Cart update and remove work</li>
<li>☐ Checkout flow complete</li>
<li>☐ Test order placed successfully</li>
<li>☐ Order confirmation received</li>
</ul>

<h4>📄 Content & SEO</h4>
<ul>
<li>☐ All content proofread</li>
<li>☐ Meta titles on all pages</li>
<li>☐ Meta descriptions on all pages</li>
<li>☐ Alt text on images</li>
<li>☐ 404 page working</li>
</ul>
</div>

<div class="content-section">
<h3>📦 Perfect Delivery Message</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
Hi [Client]! 🎉<br><br>

<strong>Your store is ready for launch!</strong><br><br>

I'm thrilled to share the final result: [Preview Link]<br><br>

<strong>WHAT'S INCLUDED:</strong><br>
✅ 5 custom pages designed and developed<br>
✅ 25 products uploaded and organized<br>
✅ Mobile-responsive throughout<br>
✅ Speed optimized (Mobile: 87, Desktop: 94)<br>
✅ Checkout tested and working<br><br>

<strong>WALKTHROUGH VIDEO:</strong><br>
[Loom link] - 10 min tour of your store + how to manage it<br><br>

<strong>DOCUMENTATION:</strong><br>
[Google Doc link] - How to edit content, add products, etc.<br><br>

<strong>NEXT STEPS:</strong><br>
1. Review your store thoroughly<br>
2. Let me know any final tweaks needed<br>
3. Once approved, we'll connect your domain and launch!<br><br>

<strong>SUPPORT:</strong><br>
You have 30 days of support starting today. Just message here for any questions!<br><br>

Excited to see this go live! 🚀<br>
[Your Name]
</div>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>🖥️ Essential PM Tools</h3>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Category</th><th style="padding: 12px;">Tool</th><th style="padding: 12px;">Purpose</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Tracking</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trello / Asana / Monday</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task management, Kanban boards</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Team Comms</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slack / Discord</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Internal communication</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Comms</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fiverr / Email</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client messaging</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Video Calls</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Meet / Zoom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client calls, demos</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Documentation</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Docs / Notion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specs, notes, handover</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Screen Recording</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Walkthroughs, bug reports</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Time Tracking</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Toggl / Clockify</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project hours tracking</td></tr>
</table>
</div>
`;

const task9Content = `
<h2>📚 TASK 8: DIFFICULT SITUATIONS & CRISIS MANAGEMENT</h2>

<div class="content-section">
<h3>🔥 15 PM Crisis Scenarios</h3>

<div style="margin: 20px 0;">
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #EF4444;">Scenario 1: Client Hates the Design</h4>
<p><strong>Situation:</strong> Client says "This isn't what I wanted at all."</p>
<p><strong>Response:</strong></p>
<ul>
<li>Don't get defensive</li>
<li>Ask specific questions: "What specifically isn't working for you?"</li>
<li>Reference original brief: "Let me pull up our original discussion..."</li>
<li>Propose next steps: "Let's schedule a call to align on your vision"</li>
</ul>
</div>

<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #F59E0B;">Scenario 2: Project is Running Late</h4>
<p><strong>Situation:</strong> You realize you'll miss the deadline.</p>
<p><strong>Response:</strong></p>
<ul>
<li>Notify client IMMEDIATELY (not the day before)</li>
<li>Explain why without making excuses</li>
<li>Provide new realistic timeline</li>
<li>Offer something: "I'll add an extra revision round / 7 more days support"</li>
</ul>
</div>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #10B981;">Scenario 3: Developer Made Mistake on Live Site</h4>
<p><strong>Situation:</strong> A bug was pushed to production and client sees it.</p>
<p><strong>Response:</strong></p>
<ul>
<li>Acknowledge immediately: "I see the issue. We're on it right now."</li>
<li>Assign urgent fix to developer</li>
<li>Provide timeline: "This will be fixed within 2 hours"</li>
<li>Follow up when fixed: "All resolved. Here's what happened and how we're preventing it."</li>
</ul>
</div>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #8B5CF6;">Scenario 4: Client Wants Refund</h4>
<p><strong>Situation:</strong> Client demands their money back.</p>
<p><strong>Response:</strong></p>
<ul>
<li>Stay calm. Don't agree or deny immediately.</li>
<li>Understand the issue: "I want to understand what went wrong. Can you share specifics?"</li>
<li>Escalate to management for decision</li>
<li>Document everything</li>
</ul>
</div>

<div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #6366F1;">Scenario 5: Client Threatens Bad Review</h4>
<p><strong>Situation:</strong> "I'll leave a 1-star review if you don't..."</p>
<p><strong>Response:</strong></p>
<ul>
<li>Don't panic or cave to unreasonable demands</li>
<li>Focus on resolution: "Let's solve the actual issue. What would make this right?"</li>
<li>Document the threat</li>
<li>Escalate to senior management</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>🧘 De-escalation Techniques</h3>
<div class="highlight-box">
<ol>
<li><strong>Acknowledge feelings:</strong> "I understand this is frustrating."</li>
<li><strong>Take ownership:</strong> "This is on us, and we'll make it right."</li>
<li><strong>Stay calm:</strong> Never match their energy if they're upset.</li>
<li><strong>Focus on solutions:</strong> "Here's what we can do..."</li>
<li><strong>Set clear next steps:</strong> "By tomorrow 5PM, you'll have..."</li>
</ol>
</div>
</div>
`;

const task10Content = `
<h2>📚 TASK 9: METRICS & PERFORMANCE</h2>

<div class="content-section">
<h3>📊 KPIs Every PM Should Track</h3>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Metric</th><th style="padding: 12px;">Target</th><th style="padding: 12px;">Why It Matters</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>On-Time Delivery Rate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client satisfaction, reputation</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Satisfaction (Rating)</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.8+ / 5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Repeat business, reviews</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Response Time</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client trust</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Revision Rounds</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project efficiency</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>First-Time Approval Rate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quality of work</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Scope Change Frequency</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2 per project</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope management</td></tr>
</table>
</div>

<div class="content-section">
<h3>📈 Weekly Self-Assessment</h3>
<div class="highlight-box">
<strong>Every Friday, ask yourself:</strong>
<ol>
<li>Did all my projects get weekly updates?</li>
<li>Were there any client complaints? What can I learn?</li>
<li>Did I unblock my team quickly?</li>
<li>Am I ahead of schedule or behind?</li>
<li>What one thing can I improve next week?</li>
</ol>
</div>
</div>
`;

const task11Content = `
<h2>📦 TASK 11: FIVERR PROJECT MANAGEMENT</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(249, 115, 22, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">Fiverr Is Your Battlefield</h3>
    <p>Everything you learned in Tasks 1-10 applies, but Fiverr adds its own layer: <strong>order deadlines, revision policies, seller metrics, and buyer expectations</strong>. Master Fiverr PM or lose orders.</p>
</div>

<div class="content-section">
    <h3>📋 Fiverr Order Lifecycle</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong style="color: #FBBF24;">1. Inquiry</strong> → Buyer messages asking about services → Sales team qualifies and creates custom offer</p>
        <p><strong style="color: #60A5FA;">2. Custom Offer</strong> → Pricing, timeline, milestones defined → Buyer accepts and pays</p>
        <p><strong style="color: #34D399;">3. Active Order</strong> → Clock starts ticking → PM manages delivery within deadline</p>
        <p><strong style="color: #A78BFA;">4. Delivery</strong> → PM submits deliverables on Fiverr → Buyer has 3 days to accept or request revision</p>
        <p><strong style="color: #F472B6;">5. Completion</strong> → Buyer accepts → Funds released → Review requested</p>
    </div>
</div>

<div class="content-section">
    <h3>💬 Dual Communication Channels</h3>
    <p>Fiverr has TWO communication channels — you must use BOTH:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Channel</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use For</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM Rule</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Fiverr Inbox</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">General communication, discussions, sharing links, asset requests</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily updates here + order chat</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Order Page Chat</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order-specific updates, delivery, revision requests</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All project milestones documented here</td></tr>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>DH Rule:</strong> Send daily updates in BOTH channels. The order page is your legal record. If a dispute happens, Fiverr only sees order page chat.
    </div>
</div>

<div class="content-section">
    <h3>📊 Fiverr Seller Metrics That PMs Affect</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM Impact</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response Time</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><1 hour</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Respond to ALL buyer messages quickly — affects Fiverr search ranking</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">On-Time Delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deliver before deadline or request extension BEFORE it expires</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order Completion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimize cancellations — every cancel hurts the account</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rating</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.8+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client satisfaction = positive reviews = more orders</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Revision vs Scope Creep on Fiverr</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision (Included)</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope Creep (Extra Cost)</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Change the header color to blue"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a blog section we didn't discuss"</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Move the CTA button higher"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Build a custom calculator tool"</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Use a different font for headlines"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add 50 more products not in original scope"</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>The Script:</strong> "Great suggestion! That's outside the original scope, but I can add it as a gig extra for $X. Want me to send you a custom offer for it?"
    </div>
</div>

<div class="content-section">
    <h3>⏰ Extension Requests & Cancellation Prevention</h3>
    <ul>
        <li><strong>Extension requests:</strong> ALWAYS request an extension BEFORE the deadline expires. Fiverr allows mutual extensions. Message: "Hi [Name], to ensure the best quality, I'd like to request a [X-day] extension. We're making great progress — here's what's done so far: [preview link]."</li>
        <li><strong>Cancellation prevention:</strong> If a buyer wants to cancel, ask WHY first. Often it's a misunderstanding. Offer solutions before accepting cancellation. Every cancellation drops your completion rate.</li>
        <li><strong>Dispute Resolution:</strong> If a buyer opens a dispute, respond within 24 hours with evidence (screenshots, chat history from order page). Stay professional — Fiverr CS reviews everything.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 PM Template Messages for Fiverr</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Order Start:</strong> "Hi [Name]! Thank you for your order. I'm [PM Name], your project manager. Here's our plan: [timeline]. First, I need: [credentials/assets]. You'll receive your first preview within 48 hours!"</p>
        <p><strong>Daily Update:</strong> "Quick update on your project: Today we completed [X]. Tomorrow we're working on [Y]. Preview: [link]. Any feedback?"</p>
        <p><strong>Revision Request:</strong> "Thanks for the feedback! I've noted: [list changes]. We'll have the revisions ready by [date]. Is there anything else you'd like adjusted?"</p>
        <p><strong>Extension Request:</strong> "Hi [Name], to deliver the best quality, I'd like to extend by [X days]. Here's our progress: [preview]. We want to make sure everything is perfect before delivery."</p>
        <p><strong>Delivery:</strong> "Your project is complete! Please review the deliverables. I've included a Loom walkthrough: [link]. Let me know if you'd like any adjustments!"</p>
    </div>
</div>

<div class="content-section">
    <h3>🏆 Fiverr Level System & PM Impact</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirements</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM's Role</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New Seller</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Starting level</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deliver quality to build initial reviews</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level 1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10 orders, $400+ earned, 4.7+ rating</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maintain on-time delivery and high ratings</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level 2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50 orders, $2,000+ earned, 4.7+ rating</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scale operations without dropping quality</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Top Rated</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100 orders, $20,000+ earned, 4.7+, 90%+ completion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Zero cancellations, exceptional client experience</td></tr>
    </table>
</div>
`;

// QUIZ: 30 Comprehensive Questions
const quizQuestions = [
    // PM Mindset (6 questions)
    { question: "PM core responsibility is:", options: ["Track tasks only", "Just coordinate meetings", "Blame team for failures", "Ownership of project success"], correct: 3 },
    { question: "'Plan twice, execute once' means:", options: ["Plan thoroughly before work", "Skip planning", "Plan during development", "No planning needed"], correct: 0 },
    { question: "When developer is late, professional PM says:", options: ["Developer's fault", "I didn't catch delay early", "Not my problem", "Ignore it"], correct: 1 },
    { question: "The Project Triangle constraints are:", options: ["Speed, Quality, Price", "Team, Tools, Tech", "Scope, Time, Cost", "Design, Dev, Deploy"], correct: 2 },
    { question: "How many triangle constraints can you optimize?", options: ["All 3", "None", "Only 1", "2 out of 3"], correct: 3 },
    { question: "Fast + Cheap equals:", options: ["Low Quality", "High Quality", "Perfect", "Impossible"], correct: 0 },

    // Communication (6 questions)
    { question: "Client response time standard:", options: ["24 hours", "< 2 hours work hours", "1 week", "When convenient"], correct: 1 },
    { question: "Weekly updates should include:", options: ["Just completed work", "Only timeline", "Progress + blockers + next steps", "Nothing"], correct: 2 },
    { question: "When delivering bad news:", options: ["Hide it", "Wait until last minute", "Blame team", "Tell client immediately with solution"], correct: 3 },
    { question: "For micromanager client:", options: ["Over-communicate proactively", "Ignore them", "Reduce updates", "Avoid them"], correct: 0 },
    { question: "Every message should end with:", options: ["Emoji only", "Clear next action item", "Question", "Nothing"], correct: 1 },
    { question: "SPEAR method is for:", options: ["Budget planning", "Design feedback", "Delivering bad news", "Hiring"], correct: 2 },

    // Lifecycle & Timeline (5 questions)
    { question: "Standard project delivery time:", options: ["1 day", "7 days", "30 days", "14 days"], correct: 3 },
    { question: "Buffer rule for complex tasks:", options: ["+100% (2x)", "+30%", "+10%", "+200%"], correct: 0 },
    { question: "Internal QA happens on day:", options: ["1", "11", "5", "14"], correct: 1 },
    { question: "Project kickoff must include:", options: ["Just start coding", "Nothing documented", "Scope document signed off", "Verbal agreement only"], correct: 2 },
    { question: "Buffer management rule:", options: ["No buffer needed", "100% buffer", "50% buffer", "20-30% buffer always"], correct: 3 },

    // Team & Scope (5 questions)
    { question: "Shield mentality means:", options: ["PM absorbs pressure for team", "Hide from clients", "Team handles everything", "No protection needed"], correct: 0 },
    { question: "Standup duration max:", options: ["30 min", "15 min", "1 hour", "No limit"], correct: 1 },
    { question: "When client requests new feature:", options: ["Do it free", "Refuse", "Document + estimate + get approval", "Ignore"], correct: 2 },
    { question: "Scope creep prevention needs:", options: ["Nothing", "Ignore changes", "Verbal yes", "Written change request"], correct: 3 },
    { question: "Developers need from PM:", options: ["Clear written requirements + assets", "Verbal instructions", "Just deadlines", "Nothing"], correct: 0 },

    // QA & Delivery (4 questions)
    { question: "Mobile PageSpeed target:", options: ["50+", "85+", "70+", "100"], correct: 1 },
    { question: "Before delivery, test order must:", options: ["Skip testing", "Fail on purpose", "Be placed successfully", "Only check design"], correct: 2 },
    { question: "Delivery message must include:", options: ["Just link", "Only invoice", "Nothing extra", "Walkthrough video + docs + next steps"], correct: 3 },
    { question: "Cross-browser testing means:", options: ["Multiple browsers", "Chrome only", "Skip it", "Mobile only"], correct: 0 },

    // Crisis & Metrics (4 questions)
    { question: "When client threatens bad review:", options: ["Panic", "Stay calm + focus on resolution + escalate", "Cave to demands", "Ignore"], correct: 1 },
    { question: "On-time delivery target:", options: ["50%", "70%", "90%+", "100%"], correct: 2 },
    { question: "If bug found on live site:", options: ["Hide it", "Wait", "Blame developer", "Acknowledge + fix immediately + prevent future"], correct: 3 },
    { question: "First-time approval target:", options: ["70%+", "50%", "30%", "100%"], correct: 0 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy — this demonstrates the kind of systematic thinking that separates competent work from exceptional work"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["No consequence if it's less than 30 minutes late", "Verbal warning for the first time", "Written warning recorded in your file", "Half-day salary deduction"], c: 3 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself", "Ignore it — it's not your problem — this is the industry-standard position backed by conventional practice", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Email the CEO directly for approval — understanding why this works helps prevent the same category of problems from recurring in the future"], c: 2 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach most teams follow", "Everyone including interns", "Senior developers and team leads primarily", "Those with exceptional KPI scores — this is the standard approach most teams follow"], c: 1 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["30 Minutes", "Less than 1 Hour", "2 Hours — the reasoning behind this connects directly to broader principles of professional service delivery", "Same day"], c: 1 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "No leave in first 2 months unless emergency", "Probation employees get 2 days off per month"], c: 2 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As someone who should be transferred to management", "As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As an ally whose problem is your common enemy — listen, understand, collaborate"], c: 3 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["10+ Mbps", "25 Mbps", "5 Mbps", "No specific requirement as long as you're online"], c: 0 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["No increment and placed on a Performance Improvement Plan (PIP)", "10-15% increment for meeting expectations", "5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "Verbal warning but salary stays the same"], c: 0 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — maintaining goodwill protects the long-term relationship and future revenue", "Fine as long as it doesn't affect performance", "Allowed with prior written approval from management", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["We prioritize degrees from top universities — this aligns with industry best practices and ensures consistent results across different project types", "Talent is the most important hiring criteria", "Talent is irrelevant — volume and commitment to output matter more", "Natural talent determines your ceiling at the company"], c: 2 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["The Law — the best known way to do a task perfectly, mandatory to follow daily", "A rough guideline to review monthly — following this approach systematically prevents common mistakes and keeps the workflow predictable", "A flexible suggestion that varies by team preference", "A reference document primarily for new employees during onboarding"], c: 0 }
];

const task2Quiz = [
    { q: "A developer delivers a project 3 days late. An amateur PM says 'The developer was late.' What does a professional PM say according to the Ownership Principle?", o: ["'I didn't catch the delay early enough — I failed to prevent it'", "'The timeline was too aggressive for anyone'", "'The client kept changing requirements' — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "'It was a technical issue beyond my control'"], c: 0 },
    { q: "The PM Ownership Principle states: 'If the project succeeds → You enabled it. If the project fails →' what?", o: ["The client had unrealistic expectations", "You failed to prevent it — no excuses, no blame, only solutions", "The developer failed to deliver — this reflects the standard operating procedure most organizations follow", "The scope was poorly defined by sales"], c: 1 },
    { q: "A PM lost ₹15 lakhs in revenue because they assumed the developer understood the requirements. What PM principle was violated?", o: ["Document Everything — assumptions kill projects, communication saves them", "Protect the Team, Shield the Noise — this reflects the standard operating procedure most organizations follow", "Plan Twice, Execute Once — this reflects the standard operating procedure most organizations follow", "The Project Success Triangle — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Core Principle #4 says 'Protect the Team, Shield the Noise.' In practice, this means:", o: ["Developers should handle client calls directly for efficiency", "Shielding the team from all feedback including constructive criticism", "You absorb client pressure and unclear requirements so devs can focus on coding", "Team members should all attend client meetings — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 2 },
    { q: "Principle #3 states 'Problems Early, Solutions Attached.' When you find an issue, the correct sequence is:", o: ["Tell the client immediately and ask them what to do", "Identify problem → Assess impact → Propose 2-3 solutions → Recommend one", "Wait to see if the problem resolves itself, then escalate", "Email leadership and wait for instructions — this is the recommended approach based on current platform documentation and expert consensus"], c: 1 },
    { q: "The Project Success Triangle has three constraints: Scope, Time, and Cost. The Iron Rule states:", o: ["All three can be optimized simultaneously with proper planning", "Time is always the most important constraint", "Cost always takes priority over scope", "You can optimize 2 but never all 3"], c: 3 },
    { q: "A client wants their Shopify store delivered fast AND cheap. According to the Success Triangle, the trade-off is:", o: ["The project will be high quality with extra effort", "Extended timeline with more buffer", "Reduced scope — low quality is the trade-off", "No trade-off needed — just work harder"], c: 2 },
    { q: "An Elite PM's morning routine starts with which sequence in the first 30 minutes?", o: ["Check email, respond to clients, update tracking", "Check project channels → Review deadlines → Identify top 3 priorities → Send proactive updates → Clear blockers", "Write EOD report from yesterday, then plan today", "Attend standup, then check messages — implementing this correctly requires understanding the full context of how each element interacts"], c: 1 },
    { q: "Principle #2 says 'Over-Communicate, Never Under.' The reasoning is:", o: ["Communication volume equals professionalism", "Clients want to feel busy with updates — this reflects the standard operating procedure most organizations follow", "More emails mean better documentation — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "A weekly update takes 10 minutes; fixing a surprised angry client takes 10 hours"], c: 3 },
    { q: "A PM says 'That's not my job' when asked about a delivery issue. The professional PM alternative is:", o: ["'If it affects my project, it's my responsibility'", "'The operations team handles that' — this ensures compliance with professional standards and prevents cascading issues downstream", "'I'll add it to next week's agenda'", "'Let me check with the relevant team member'"], c: 0 }
];

const task3Quiz = [
    { q: "Rule #1 of the 8 Non-Negotiable Communication Rules requires client response time of:", o: ["Under 30 minutes at all times — this reflects the standard operating procedure most organizations follow", "Under 2 hours during work hours, under 12 hours outside", "Same-day response is sufficient — this reflects the standard operating procedure most organizations follow", "Within 24 hours maximum — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A project is delayed 2 days due to an app compatibility issue. Using the SPEAR method, what comes after Situation and Problem?", o: ["Escalation → Assessment → Recovery — this reflects the standard operating procedure most organizations follow", "Apology → Resolution → Timeline — this reflects the standard operating procedure most organizations follow", "Explanation (why it happened, no excuses) → Action → Resolution", "Panic → Email → Apology — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A 'Ghost' client disappears for days and delays approvals. The correct PM strategy is:", o: ["Set clear deadlines: 'If no response by X, we'll proceed with Y'", "Wait patiently — they'll respond eventually", "Send daily follow-ups until they respond", "Escalate to their boss immediately — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A 'Scope Creeper' client constantly says 'just one more thing.' The correct strategy is:", o: ["Do all the extra work to maintain the relationship", "Add 50% buffer budget for extras — this reflects the standard operating procedure most organizations follow", "Say no to everything not in the original brief", "Document original scope, use change request process, and quote additions"], c: 3 },
    { q: "Rule #8 says 'Set Expectations.' In practice, this means:", o: ["Under-promise and over-deliver — always", "Promise what you can deliver and deliver exactly that", "Set ambitious targets to motivate the team", "Let clients set their own expectations"], c: 0 },
    { q: "Weekly status updates must be sent when, at minimum?", o: ["Every Monday morning — following this approach consistently ensures predictable outcomes across all scenarios", "Every Friday minimum, more often for active projects", "When there's progress to report — this is the standard approach most teams follow", "Twice per month is sufficient — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "An angry client uses strong language about a project issue. Your first response should be:", o: ["Match their energy to show you take it seriously", "Wait 24 hours for them to cool down before responding", "Stay calm, acknowledge their feelings, focus on solutions — never get defensive", "Escalate immediately to leadership — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Rule #5 says every client message must end with:", o: ["A thank-you note — this is the industry-standard position backed by conventional practice", "Your contact information", "A question asking for feedback", "A clear action item and next step"], c: 3 },
    { q: "The SPEAR method stands for:", o: ["Situation, Problem, Explanation, Action, Resolution", "Scope, Priority, Estimate, Approve, Resolve", "Schedule, Plan, Execute, Assess, Report", "Strategy, Preparation, Engagement, Alignment, Review"], c: 0 },
    { q: "Rule #6 says 'Proactive Updates.' This means:", o: ["Update when clients ask for status — this reflects the standard operating procedure most organizations follow", "Don't wait for the client to ask — proactively share status before they need to", "Set up automated status emails — this reflects the standard operating procedure most organizations follow", "Update primarily when milestones are completed"], c: 1 }
];

const task4Quiz = [
    { q: "The standard premium Shopify package ($1,200-$1,800) has a timeline of:", o: ["7 days for quick turnaround — this reflects the standard operating procedure most organizations follow", "21 days minimum for quality work", "14 days — with complex projects needing 21-28 days", "30 days standard delivery — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Day 11 of the 14-day timeline is dedicated to:", o: ["Internal QA — full checklist and bug fixing", "Design mockup presentation — experienced professionals recognize this as the most reliable path for maintaining quality control", "Client review and feedback collection", "Final delivery and handover"], c: 0 },
    { q: "The 20-30% Buffer Rule means if a developer estimates 5 days for development, you should plan for:", o: ["5 days exactly — trust the estimate", "4 days to push for faster delivery", "10 days to be completely safe", "6-7 days — reality is never perfect"], c: 3 },
    { q: "The Project Kickoff Checklist requires ALL of these EXCEPT:", o: ["Client's personal social media accounts", "All assets received (logo, images, content)", "Scope document reviewed and confirmed", "Risk assessment completed"], c: 0 },
    { q: "During Days 5-8 (Development phase), the PM's primary task is:", o: ["Daily dev check-ins and unblocking issues", "Writing code alongside the developer", "Designing the remaining pages", "Sending weekly updates to the client primarily"], c: 0 },
    { q: "Why does the buffer exist in project timelines?", o: ["To give the team extra vacation days — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "To charge clients more for the same work — this reflects the standard operating procedure most organizations follow", "To make timelines look longer and more impressive", "To account for bugs, client delays, unclear requirements, sick days, and app conflicts"], c: 3 },
    { q: "Day 12 of the timeline is Client Review. What's the deliverable?", o: ["Final store ready for launch", "QA-passed store for internal review", "Design mockups for approval — research supports this methodology as the most effective for achieving measurable improvements", "A revision list from client feedback"], c: 3 },
    { q: "Day 1 (Kickoff) involves handoff meeting, collecting assets, and setting expectations. The deliverable is:", o: ["A fully designed homepage", "A project brief document", "Developer assignment confirmation", "Client's first payment receipt"], c: 1 },
    { q: "A complex enterprise Shopify project should get a timeline of:", o: ["14 days like every other project", "21-28 days — complex projects need extended timelines", "7 days with overtime work — this reflects the standard operating procedure most organizations follow", "60 days to be extra safe — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The kickoff checklist includes 'Risk assessment completed.' Why is this important on Day 1?", o: ["It's a formality required by management — this reflects the standard operating procedure most organizations follow", "It's primarily needed for enterprise clients", "It helps calculate the project cost — applying this principle consistently across all projects builds a reputation for professional excellence", "Identifying risks early allows you to plan mitigation before they derail the project"], c: 3 },
    { q: "The standard premium Shopify package ($1,200-$1,800) has a timeline of:", o: ["7 days for quick turnaround — this reflects the standard operating procedure most organizations follow", "21 days minimum for quality work", "14 days — with complex projects needing 21-28 days", "30 days standard delivery — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Day 11 of the 14-day timeline is dedicated to:", o: ["Client review and feedback collection", "Design mockup presentation — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Internal QA — full checklist and bug fixing", "Final delivery and handover"], c: 2 },
    { q: "The 20-30% Buffer Rule means if a developer estimates 5 days for development, you should plan for:", o: ["5 days exactly — trust the estimate", "4 days to push for faster delivery", "6-7 days — reality is never perfect", "10 days to be completely safe"], c: 2 },
    { q: "The Project Kickoff Checklist requires ALL of these EXCEPT:", o: ["Client's personal social media accounts", "All assets received (logo, images, content)", "Scope document reviewed and confirmed", "Risk assessment completed"], c: 0 },
    { q: "During Days 5-8 (Development phase), the PM's primary task is:", o: ["Writing code alongside the developer", "Daily dev check-ins and unblocking issues", "Designing the remaining pages", "Sending weekly updates to the client primarily"], c: 1 },
    { q: "Why does the buffer exist in project timelines?", o: ["To account for bugs, client delays, unclear requirements, sick days, and app conflicts", "To give the team extra vacation days — understanding why this works helps prevent the same category of problems from recurring in the future", "To make timelines look longer and more impressive", "To charge clients more for the same work — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Day 12 of the timeline is Client Review. What's the deliverable?", o: ["A revision list from client feedback", "QA-passed store for internal review", "Final store ready for launch", "Design mockups for approval — the reasoning behind this connects directly to broader principles of professional service delivery"], c: 0 },
    { q: "Day 1 (Kickoff) involves handoff meeting, collecting assets, and setting expectations. The deliverable is:", o: ["A project brief document", "A fully designed homepage", "Developer assignment confirmation", "Client's first payment receipt"], c: 0 },
    { q: "A complex enterprise Shopify project should get a timeline of:", o: ["14 days like every other project", "60 days to be extra safe — this reflects the standard operating procedure most organizations follow", "7 days with overtime work — this reflects the standard operating procedure most organizations follow", "21-28 days — complex projects need extended timelines"], c: 3 },
    { q: "The kickoff checklist includes 'Risk assessment completed.' Why is this important on Day 1?", o: ["It's a formality required by management — this reflects the standard operating procedure most organizations follow", "Identifying risks early allows you to plan mitigation before they derail the project", "It helps calculate the project cost — this aligns with industry best practices and ensures consistent results across different project types", "It's primarily needed for enterprise clients"], c: 1 },
    { q: "Day 11 of the 14-day timeline is dedicated to:", o: ["Internal QA — full checklist and bug fixing", "Client review and feedback collection", "Design mockup presentation — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Final delivery and handover"], c: 0 },
    { q: "The 20-30% Buffer Rule means if a developer estimates 5 days for development, you should plan for:", o: ["5 days exactly — trust the estimate", "4 days to push for faster delivery", "6-7 days — reality is never perfect", "10 days to be completely safe"], c: 2 },
    { q: "The Project Kickoff Checklist requires ALL of these EXCEPT:", o: ["Scope document reviewed and confirmed", "All assets received (logo, images, content)", "Risk assessment completed", "Client's personal social media accounts"], c: 3 },
    { q: "During Days 5-8 (Development phase), the PM's primary task is:", o: ["Writing code alongside the developer", "Daily dev check-ins and unblocking issues", "Designing the remaining pages", "Sending weekly updates to the client primarily"], c: 1 },
    { q: "Why does the buffer exist in project timelines?", o: ["To give the team extra vacation days — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "To account for bugs, client delays, unclear requirements, sick days, and app conflicts", "To make timelines look longer and more impressive", "To charge clients more for the same work — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Day 12 of the timeline is Client Review. What's the deliverable?", o: ["Final store ready for launch", "QA-passed store for internal review", "A revision list from client feedback", "Design mockups for approval — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 2 },
    { q: "Day 1 (Kickoff) involves handoff meeting, collecting assets, and setting expectations. The deliverable is:", o: ["Client's first payment receipt", "A fully designed homepage", "Developer assignment confirmation", "A project brief document"], c: 3 },
    { q: "A complex enterprise Shopify project should get a timeline of:", o: ["14 days like every other project", "21-28 days — complex projects need extended timelines", "7 days with overtime work — this reflects the standard operating procedure most organizations follow", "60 days to be extra safe — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The kickoff checklist includes 'Risk assessment completed.' Why is this important on Day 1?", o: ["It helps calculate the project cost — this is the recommended approach based on current platform documentation and expert consensus", "It's a formality required by management — this reflects the standard operating procedure most organizations follow", "Identifying risks early allows you to plan mitigation before they derail the project", "It's primarily needed for enterprise clients"], c: 2 }
];

const task5Quiz = [
    { q: "Developers need clear, WRITTEN requirements from PMs. Why not verbal?", o: ["Written requirements prevent misunderstanding and serve as reference — verbal instructions for complex work lead to wrong builds", "Verbal instructions are faster and preferred — this reflects the standard operating procedure most organizations follow", "The impact is negligible in practice — teams that obsess over this are optimizing for the wrong variable when other factors matter more — both are equally effective", "Written instructions slow down the team — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The Shield Mentality means 'YOU absorb the pressure so the team can focus.' In a scenario where a client is panicking about a deadline, you should:", o: ["Translate the client's anxiety into calm, clear direction for your team", "Forward the client's anxious messages directly to the developer", "Tell the client to contact the developer directly", "Ignore the client until you have an update — implementing this correctly requires understanding the full context of how each element interacts"], c: 0 },
    { q: "A PM promises a client 'we'll deliver by Friday' without checking with the developer first. This violates which 'Never Do This' rule?", o: ["Give verbal instructions for complex work — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Promise client deadlines without checking with dev", "Pass client messages directly without filtering", "Interrupt deep work for non-urgent questions"], c: 1 },
    { q: "Designers need 'consolidated feedback' from PMs. This means:", o: ["Send each piece of feedback as you receive it from the client", "Give primarily positive feedback to maintain morale", "Let the client message the designer directly — this ensures compliance with professional standards and prevents cascading issues downstream", "Collect all client feedback, organize it clearly, then send one consolidated message"], c: 3 },
    { q: "Daily standup format is '15 Minutes Max. Standing Up. No Rabbit Holes.' Each team member answers three questions:", o: ["What did I learn? → What will I study? → What confused me?", "Revenue impact? → Client feedback? → Budget status?", "What I completed → What I'm doing today → Any blockers", "Design review → Code review → Testing status"], c: 2 },
    { q: "During standup, the PM's job is to:", o: ["Give long status updates to the team — experienced professionals recognize this as the most reliable path for maintaining quality control", "Let the meeting run as long as needed for thorough discussion", "Review each team member's code quality", "Listen for blockers, assign action items, and follow up after standup"], c: 3 },
    { q: "A developer is deep in complex coding. The client asks a non-urgent question. You should:", o: ["Interrupt the developer immediately — client comes first", "Answer the client yourself or find the answer — protecting developer focus time", "Tell the client to wait until tomorrow — intervening too early often creates more problems than the original issue", "Schedule a meeting between client and developer"], c: 1 },
    { q: "What does a PM provide developers that goes beyond 'WHAT to build'?", o: ["Coffee and snacks during crunch time", "Context on WHY — understanding the purpose leads to better decisions", "Access to the client's Shopify admin", "Detailed code architecture — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A PM forwards a confusing, rambling 500-word client message directly to the developer. This violates:", o: ["The documentation principle — this reflects the standard operating procedure most organizations follow", "The QA checklist requirement — this reflects the standard operating procedure most organizations follow", "The 'Never pass client messages directly without filtering' rule", "The Budget management protocol — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Designers need 'protection from can you just try this requests.' As a PM, you handle this by:", o: ["Filtering requests, consolidating feedback, and managing revision rounds", "Telling clients design changes aren't possible — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Forwarding every design request to the designer", "Letting designers decide which requests to accept"], c: 0 }
];

const task6Quiz = [
    { q: "A $1,500 project becomes a $3,000 project (at your cost) due to unmanaged scope creep. Annually across 10 projects, the loss is:", o: ["₹1.5 lakhs — manageable", "No real loss — it's investment in client relationships", "₹5 lakhs — within acceptable range", "₹12 lakhs per year in lost revenue"], c: 3 },
    { q: "The Scope Change Flowchart: Client requests something new. Step 1 is:", o: ["Create a change request immediately", "Quote the additional cost — this reflects the standard operating procedure most organizations follow", "Is it in the original scope document? If YES, do it", "Refuse and refer to the contract"], c: 2 },
    { q: "A client says 'Can you add a custom wishlist feature?' It takes 3 hours of dev work and isn't in scope. Following the flowchart:", o: ["Do it as goodwill since they're a good client", "Add it silently and absorb the cost — research supports this methodology as the most effective for achieving measurable improvements", "Refuse entirely — it's out of scope", "It's not a small goodwill item (<15 min) — create a change request with estimate"], c: 3 },
    { q: "Script for polite scope boundary: Client suggests a new feature. Your response starts with:", o: ["'That's not in our agreement and will cost extra'", "'Great idea! That feature wasn't part of our original scope, but I'd love to see it...'", "'We can't do that without a contract amendment' — applying this principle consistently across all projects builds a reputation for professional excellence", "'Let me check with my manager if that's possible'"], c: 1 },
    { q: "A small client request will take less than 15 minutes. According to the flowchart, you should:", o: ["Create a formal change request anyway", "Refuse until a change order is signed", "Do it as a goodwill item AND document it", "Ignore it and hope they forget — this demonstrates the kind of systematic thinking that separates competent work from exceptional work"], c: 2 },
    { q: "Step 5 of the Scope Change Flowchart requires what before any work starts?", o: ["Verbal agreement from the client", "Written approval — no exceptions", "Manager's permission", "Developer's estimate confirmation"], c: 1 },
    { q: "A client pushes back on scope boundaries. The script says:", o: ["'I need to clarify what's included... we could swap a feature or add it separately'", "'Sorry, we can't help with that' — this reflects the standard operating procedure most organizations follow", "'You should have mentioned this earlier' — this reflects the standard operating procedure most organizations follow", "'I'll do it this time but not again' — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "Scope defines 'exactly what is included in the project price.' Everything outside scope equals:", o: ["Free extras to build client relationships", "Work the team does in spare time", "Additional work = additional cost", "Negotiable depending on client value"], c: 2 },
    { q: "When presenting scope additions, the options given to clients should be:", o: ["Just the cost — take it or leave it", "Add now (cost X), Add later (Phase 2), or Skip — giving client control", "'add now' with urgency to maximize revenue — this is the standard approach most teams follow", "Refer them to another agency for the extras"], c: 1 },
    { q: "After a scope change is approved and completed, the final step is:", o: ["Send a thank-you message to the client", "Reset the project timeline from scratch", "Update the scope document to reflect the change", "Notify all team members via standup — understanding why this works helps prevent the same category of problems from recurring in the future"], c: 2 },
    { q: "The Scope Change Flowchart: Client requests something new. Step 1 is:", o: ["Quote the additional cost — this reflects the standard operating procedure most organizations follow", "Create a change request immediately", "Is it in the original scope document? If YES, do it", "Refuse and refer to the contract"], c: 2 },
    { q: "A client says 'Can you add a custom wishlist feature?' It takes 3 hours of dev work and isn't in scope. Following the flowchart:", o: ["It's not a small goodwill item (<15 min) — create a change request with estimate", "Refuse entirely — it's out of scope", "Do it as goodwill since they're a good client", "Add it silently and absorb the cost — the reasoning behind this connects directly to broader principles of professional service delivery"], c: 0 },
    { q: "Script for polite scope boundary: Client suggests a new feature. Your response starts with:", o: ["'We can't do that without a contract amendment' — this aligns with industry best practices and ensures consistent results across different project types", "'Let me check with my manager if that's possible'", "'Great idea! That feature wasn't part of our original scope, but I'd love to see it...'", "'That's not in our agreement and will cost extra'"], c: 2 },
    { q: "A small client request will take less than 15 minutes. According to the flowchart, you should:", o: ["Create a formal change request anyway", "Do it as a goodwill item AND document it", "Refuse until a change order is signed", "Ignore it and hope they forget — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 1 },
    { q: "Step 5 of the Scope Change Flowchart requires what before any work starts?", o: ["Developer's estimate confirmation", "Verbal agreement from the client", "Manager's permission", "Written approval — no exceptions"], c: 3 },
    { q: "A client pushes back on scope boundaries. The script says:", o: ["'I need to clarify what's included... we could swap a feature or add it separately'", "'I'll do it this time but not again' — this is the industry-standard position backed by conventional practice", "'You should have mentioned this earlier' — this reflects the standard operating procedure most organizations follow", "'Sorry, we can't help with that' — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Scope defines 'exactly what is included in the project price.' Everything outside scope equals:", o: ["Free extras to build client relationships", "Additional work = additional cost", "Work the team does in spare time", "Negotiable depending on client value"], c: 1 },
    { q: "When presenting scope additions, the options given to clients should be:", o: ["Just the cost — take it or leave it", "'add now' with urgency to maximize revenue — this is the standard approach most teams follow", "Refer them to another agency for the extras", "Add now (cost X), Add later (Phase 2), or Skip — giving client control"], c: 3 },
    { q: "After a scope change is approved and completed, the final step is:", o: ["Send a thank-you message to the client", "Reset the project timeline from scratch", "Update the scope document to reflect the change", "Notify all team members via standup — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 2 }
];

const task7Quiz = [
    { q: "The 60-point QA checklist requires Mobile PageSpeed score of:", o: ["80+ minimum — this reflects the standard operating procedure most organizations follow", "85+ — high performance standard", "70+ acceptable — maintaining goodwill protects the long-term relationship and future revenue", "95+ required for all projects"], c: 1 },
    { q: "For Desktop PageSpeed, the QA standard requires:", o: ["80+ minimum — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "95+ required", "85+ acceptable", "90+ requirement"], c: 3 },
    { q: "The perfect delivery message includes all EXCEPT:", o: ["What's included summary — this is the recommended approach based on current platform documentation and expert consensus", "Walkthrough video (Loom link)", "30 days of support mention", "The total project cost breakdown"], c: 3 },
    { q: "During QA, mobile touch targets must be at least:", o: ["44px or larger — proper touch accessibility", "32px — standard for most devices and ensures long-term sustainability", "24px — compact is better for mobile", "No minimum — depends on design"], c: 0 },
    { q: "E-commerce QA requires placing a:", o: ["Simulated order in staging only — this reflects the standard operating procedure most organizations follow", "Test order that completes the full checkout flow and receives confirmation", "Visual check of the checkout page — this reflects the standard operating procedure most organizations follow", "Client approval of the cart design — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Content & SEO QA requires which items on EVERY page?", o: ["Meta titles and meta descriptions on all pages", "Social media sharing buttons", "Video content embedded — this reflects the standard operating procedure most organizations follow", "Newsletter signup forms — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The perfect delivery message includes a 'Next Steps' section. Step 3 is:", o: ["Pay the remaining balance — this reflects the standard operating procedure most organizations follow", "Leave a 5-star review — this reflects the standard operating procedure most organizations follow", "Once approved, we'll connect your domain and launch", "Schedule ongoing maintenance — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "After delivery, the client gets support for:", o: ["7 days for quick questions primarily", "14 days of email support — this reflects the standard operating procedure most organizations follow", "30 days of support starting from delivery day", "Unlimited lifetime support — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Design QA must verify that the final store:", o: ["Looks better than competitors — this reflects the standard operating procedure most organizations follow", "Matches the approved mockups with consistent brand colors and typography", "Uses the latest design trends — this reflects the standard operating procedure most organizations follow", "Has at least 10 unique page layouts — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The delivery message includes documentation. Its purpose is:", o: ["Teaching the client how to edit content, add products, and manage their store", "A summary of hours worked — this reflects the standard operating procedure most organizations follow", "Legal protection for the agency — this reflects the standard operating procedure most organizations follow", "Proof of project completion for accounting"], c: 0 }
];

const task8Quiz = [
    { q: "The PM toolset includes Loom specifically for:", o: ["Project management and task tracking", "Internal team communication — implementing this correctly requires understanding the full context of how each element interacts", "Client invoicing and payments", "Screen recording walkthroughs and bug reports"], c: 3 },
    { q: "Project tracking tools (Trello/Asana/Monday) are used for:", o: ["Task management and Kanban boards", "Client communication primarily", "Video calls with clients — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Financial tracking and invoicing"], c: 0 },
    { q: "Client communication happens through which channels?", o: ["Personal phone calls", "Fiverr platform and Email", "Internal Discord/Slack primarily", "Social media DMs"], c: 1 },
    { q: "Time tracking (Toggl/Clockify) helps PMs because:", o: ["It proves employees are working — this reflects the standard operating procedure most organizations follow", "It replaces daily standup meetings — this reflects the standard operating procedure most organizations follow", "It's required by law — this reflects the standard operating procedure most organizations follow", "It tracks project hours to identify budget overruns and improve future estimates"], c: 3 },
    { q: "Google Docs/Notion serve what PM function?", o: ["Design mockup creation — this reflects the standard operating procedure most organizations follow", "Team chat and communication", "Specs, notes, and handover documentation", "Client billing — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Work questions should go in group chat rather than DMs because:", o: ["Group chats are easier to search — this reflects the standard operating procedure most organizations follow", "DMs are not allowed by company policy — this is the industry-standard position backed by conventional practice", "Everyone learns from the question and answer — knowledge sharing benefits the whole team", "DMs take longer to type — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "When choosing between tools, the PM's priority should be:", o: ["Using the most expensive tools for quality — this reflects the standard operating procedure most organizations follow", "Using as few tools as possible — this reflects the standard operating procedure most organizations follow", "Using primarily free tools to save money — this reflects the standard operating procedure most organizations follow", "Using tools that enable documentation, tracking, and communication across the project lifecycle"], c: 3 },
    { q: "Video calls (Google Meet/Zoom) are essential for PM work because:", o: ["Emails are unreliable — this reflects the standard operating procedure most organizations follow", "They're required for every daily standup", "They replace all written communication — this reflects the standard operating procedure most organizations follow", "Client demos, design reviews, and kickoff meetings need face-to-face interaction"], c: 3 },
    { q: "Internal team communication uses Discord/Slack while clients use Fiverr/Email. Why the separation?", o: ["Cost savings on platform fees — this reflects the standard operating procedure most organizations follow", "Different tools for different contexts — internal speed vs professional client-facing communication", "Clients can't use Discord — this reflects the standard operating procedure most organizations follow", "No specific reason — it's just tradition"], c: 1 },
    { q: "A PM who doesn't use any project tracking tool risks:", o: ["Lost tasks, missed deadlines, and no visibility for the team on project status", "Nothing — experienced PMs work from memory", "Minor inconvenience — this is the standard approach most teams follow", "Slower but equally effective delivery — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 0 }
];

const task9Quiz = [
    { q: "Crisis Scenario: Client says 'This isn't what I wanted at all' about the design. Your FIRST response is:", o: ["Don't get defensive — ask 'What specifically isn't working for you?'", "Offer a full refund — this reflects the standard operating procedure most organizations follow", "Immediately start redesigning from scratch", "Show them the original brief to prove they approved it"], c: 0 },
    { q: "De-escalation technique for an angry client includes:", o: ["Matching their energy to show you care", "Telling them they're overreacting — this reflects the standard operating procedure most organizations follow", "Going silent until they calm down — this reflects the standard operating procedure most organizations follow", "Acknowledging their feelings, staying calm, and focusing on solutions"], c: 3 },
    { q: "A developer calls in sick on a critical delivery day. The PM should:", o: ["Work on the code yourself — this reflects the standard operating procedure most organizations follow", "Delay the project and tell the client — this reflects the standard operating procedure most organizations follow", "Immediately assess impact, reassign critical tasks, update timeline, and inform the client proactively", "Wait for the developer to recover — intervening too early often creates more problems than the original issue"], c: 2 },
    { q: "The client wants to completely change the homepage design after it was approved 5 days ago. Following PM principles:", o: ["Redesign for free to keep them happy — this reflects the standard operating procedure most organizations follow", "Refuse any changes after approval — this reflects the standard operating procedure most organizations follow", "Reference the approved design, create a change request, and quote the additional work", "Tell them changes aren't possible at this stage"], c: 2 },
    { q: "A critical bug is found 1 day before delivery. According to 'Bad News Early':", o: ["Hide it and hope the client doesn't notice — this reflects the standard operating procedure most organizations follow", "Inform the client within 24 hours using the SPEAR method — situation, problem, explanation, action, resolution", "Wait until after delivery to fix it — intervening too early often creates more problems than the original issue", "Blame the developer in the client message — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "PM KPIs include 'Client Satisfaction Score.' Target should be:", o: ["3 out of 5 stars — acceptable", "4.5+ out of 5 — excellence is the standard", "Perfect 5.0 always — anything less is failure", "No target — satisfaction is subjective"], c: 1 },
    { q: "The 'Weekly Self-Assessment' helps PMs by:", o: ["Identifying areas for improvement and tracking their own effectiveness consistently", "Proving to management they're working hard", "Filling time during slow project periods — this reflects the standard operating procedure most organizations follow", "Getting better performance reviews — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "In a crisis, the PM's communication order should be:", o: ["Send a group message to everyone simultaneously", "Client first → Then team → Then leadership — experienced professionals recognize this as the most reliable path for maintaining quality control", "Leadership first → Then client → Then team — this reflects the standard operating procedure most organizations follow", "Team first (assess and solve) → Then leadership (escalate if needed) → Then client (with solution attached)"], c: 3 },
    { q: "When presenting crisis updates to clients, you should:", o: ["Apologize repeatedly to show you care — this reflects the standard operating procedure most organizations follow", "Explain technical details to show transparency", "Present the impact, your action plan, and revised timeline — clients care about solutions, not causes", "Minimize the issue to prevent panic — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines"], c: 2 },
    { q: "Certification requires passing how many questions?", o: ["20 questions with 50% pass rate — this reflects the standard operating procedure most organizations follow", "30 questions covering all modules — demonstrate mastery", "10 questions with 100% accuracy — this reflects the standard operating procedure most organizations follow", "15 questions with 70% pass rate — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

const task10Quiz = [
    { q: "The PM Ownership Principle and 5 Core Principles work together because:", o: ["They're separate concepts that don't interact — research supports this methodology as the most effective for achieving measurable improvements", "The 5 principles override ownership in conflicts", "The ownership principle matters — this is the standard approach most teams follow", "Ownership means taking responsibility while the 5 principles provide the framework for HOW to succeed"], c: 3 },
    { q: "The 14-day timeline has buffer built in. If Day 11 QA reveals 3 critical bugs, the PM should:", o: ["Skip revisions and deliver on Day 14 anyway — this reflects the standard operating procedure most organizations follow", "Extend the project by 2 weeks — this reflects the standard operating procedure most organizations follow", "Use Day 12 (Client Review) buffer + Day 13 (Revisions) to fix bugs — that's why buffer exists", "Tell the developer to work overtime — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A PM manages scope creep, shields the team, over-communicates with clients, and documents everything. They're demonstrating:", o: ["Mastery of all 5 Core PM Principles simultaneously — the mark of an elite PM", "Just doing their basic job requirements", "Unnecessary perfectionism — this reflects the standard operating procedure most organizations follow", "Micromanagement tendencies — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Client communication Rule #3 (Bad News Early) + Rule #6 (Proactive Updates) combined mean:", o: ["Share ALL updates proactively — especially bad news within 24 hours with solutions attached", "Share good news proactively — this is the standard approach most teams follow", "Schedule updates for weekly emails primarily — this reflects the standard operating procedure most organizations follow", "Let clients discover issues themselves — applying this principle consistently across all projects builds a reputation for professional excellence"], c: 0 },
    { q: "A project has competing constraints: client wants more features (scope), same deadline (time), same budget (cost). A master PM:", o: ["Says yes to everything and works harder — following this approach consistently ensures predictable outcomes across all scenarios", "Adds features and secretly extends the timeline", "Refuses the project entirely — this reflects the standard operating procedure most organizations follow", "Explains the Success Triangle trade-offs and helps client prioritize what matters most"], c: 3 },
    { q: "The 60-point QA checklist ensures quality, but WHY is it the PM's responsibility?", o: ["PMs are better at testing than developers — this reflects the standard operating procedure most organizations follow", "It's just a process requirement — this reflects the standard operating procedure most organizations follow", "QA saves money on refunds — this reflects the standard operating procedure most organizations follow", "If quality fails, the PM failed to prevent it — ownership principle applies to QA too"], c: 3 },
    { q: "Perfect project delivery includes documentation AND a Loom walkthrough because:", o: ["It justifies the project price — this reflects the standard operating procedure most organizations follow", "It's required by Fiverr platform rules — this reflects the standard operating procedure most organizations follow", "It looks more professional — this reflects the standard operating procedure most organizations follow", "It empowers the client to manage their store independently — reducing support burden"], c: 3 },
    { q: "A PM discovers on Day 5 that the developer misunderstood requirements. What principle was missed at kickoff?", o: ["Over-Communicate — needed more status updates", "Buffer Management — should have planned more time and ensures long-term sustainability", "Shield Mentality — developer should have been protected", "Plan Twice, Execute Once — requirements weren't clear enough before work started"], c: 3 },
    { q: "Scope management prevents financial loss. The PM's role is to ensure:", o: ["Extra features are never discussed — this is the industry-standard position backed by conventional practice", "The client never asks for anything extra", "The team builds primarily the minimum viable product", "Every addition is documented, quoted, and approved in writing before work begins"], c: 3 },
    { q: "The Daily Standup format achieves what broader PM goals?", o: ["Monitoring employee attendance and productivity", "Social bonding between team members — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Early blocker detection (Principle #3) + Team shielding (Principle #4) + Documentation (Principle #5)", "Replacing written project tracking tools — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "When all PM principles are applied together, the outcome is:", o: ["More work for the PM but same results — this reflects the standard operating procedure most organizations follow", "On-time delivery, happy clients, protected team, documented decisions, and no surprises", "Slower projects but higher quality — this reflects the standard operating procedure most organizations follow", "Reduced need for client communication — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Crisis Scenario: Two projects need the same developer simultaneously. The PM must:", o: ["Let the developer decide which to prioritize — understanding why this works helps prevent the same category of problems from recurring in the future", "Tell one client their project is paused indefinitely", "Assess deadlines, negotiate with both clients, consider reassignment, and document the decision — managing competing priorities is core PM work", "Escalate immediately without trying to solve it"], c: 2 },
    { q: "The complete PM lifecycle from kickoff to delivery follows:", o: ["Kickoff → Design → Development → QA → Client Review → Revisions → Delivery — each phase has defined PM tasks", "Get requirements → Assign developer → Check at deadline — the reasoning behind this connects directly to broader principles of professional service delivery", "Start coding → Test → Ship — this reflects the standard operating procedure most organizations follow", "No fixed process — each project is unique"], c: 0 },
    { q: "Why must PMs provide 'context on WHY, not just WHAT' to developers?", o: ["Developers like storytime — this reflects the standard operating procedure most organizations follow", "It's a company rule with no practical benefit", "It fills time during slow periods — this reflects the standard operating procedure most organizations follow", "Understanding the business purpose leads to better technical decisions and reduces misbuilds"], c: 3 },
    { q: "A PM's value is ultimately measured by:", o: ["How many hours they work each week — this reflects the standard operating procedure most organizations follow", "Successful project delivery, client satisfaction, team effectiveness, and no financial surprises", "How quickly they respond to messages — this reflects the standard operating procedure most organizations follow", "The number of tools they use effectively — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The SPEAR method ensures bad news is delivered with:", o: ["Maximum blame attribution — this reflects the standard operating procedure most organizations follow", "Emotional appeals for client sympathy — this reflects the standard operating procedure most organizations follow", "Structure: Situation → Problem → Explanation → Action → Resolution — professional and solution-focused", "Minimal information to avoid panic — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Handling a 'Micromanager' client requires:", o: ["Proactive daily updates to make them feel in control — over-communication solves micromanagement", "Reducing communication to set boundaries — this aligns with industry best practices and ensures consistent results across different project types", "Telling them to trust you and stop checking in", "Assigning a junior team member to handle their messages"], c: 0 },
    { q: "Documentation protects you, the team, AND the company because:", o: ["It creates a paper trail for lawsuits — this reflects the standard operating procedure most organizations follow", "If it's not written, it didn't happen — undocumented decisions lead to disputes and scope creep", "It looks professional to auditors — this reflects the standard operating procedure most organizations follow", "It fills up project folders — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The PM role is described as 'THE CONDUCTOR of the orchestra.' This means:", o: ["PMs make all creative decisions — this reflects the standard operating procedure most organizations follow", "Conductors don't do any real work — this is the industry-standard position backed by conventional practice", "You translate client expectations into developer actions, manage timelines, and ensure delivery excellence", "PMs are the most important team member — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Rule #7 requires 'All decisions in writing, confirmed by client.' This prevents:", o: ["'I never said that' disputes — written confirmation creates accountability", "Clients from changing their minds — this reflects the standard operating procedure most organizations follow", "Developers from going rogue — this reflects the standard operating procedure most organizations follow", "Management from overriding decisions — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task11Quiz = [
    { q: "Fiverr has TWO communication channels. Daily updates should be sent:", o: ["Only in Fiverr inbox — the order page is for delivery only", "Only in order page chat — the inbox is for pre-order communication only", "In BOTH inbox AND order page chat — the order page is your legal record in disputes", "Neither — Fiverr automatically notifies buyers of progress without PM communication"], c: 2 },
    { q: "A Fiverr buyer wants to cancel an active order. Your FIRST action as PM is:", o: ["Accept the cancellation immediately — fighting it will result in a negative review and damage the account", "Ask WHY they want to cancel and offer solutions — often it's a misunderstanding that can be resolved", "Ignore the request — Fiverr doesn't force cancellations if the seller doesn't agree to cancel the order", "Escalate to Fiverr Customer Support immediately — cancellation requests are always handled by the platform"], c: 1 },
    { q: "The Fiverr order deadline is in 2 days but the project needs 4 more days. The PM should:", o: ["Deliver whatever is ready and hope the buyer accepts it as-is without requesting revisions or changes", "Request a mutual extension BEFORE the deadline expires — explain progress and attach a preview link", "Let the deadline pass — Fiverr gives a grace period and late delivery doesn't affect seller metrics", "Cancel the order — it's better to cancel than deliver late because cancellations don't affect seller levels"], c: 1 },
    { q: "A buyer asks 'Can you also add a blog section?' which wasn't in the original scope. Your response:", o: ["Add it for free — keeping clients happy is more important than scope boundaries on Fiverr", "Tell them it's not included and refuse to discuss it further to maintain firm scope boundaries", "Say: 'Great suggestion! That's outside the original scope, but I can add it as a gig extra for $X. Want me to send a custom offer?'", "Ignore the message — if you don't respond to scope creep requests the buyer will forget about it"], c: 2 },
    { q: "Fiverr On-Time Delivery rate target for maintaining seller level is:", o: ["50% — Fiverr is lenient on delivery timing as long as the quality is high and buyers are satisfied", "90%+ — on-time delivery directly affects seller level evaluation and search ranking visibility", "100% — any late delivery results in automatic demotion regardless of all other seller metrics", "70% — this is the standard threshold that most successful sellers maintain on the platform"], c: 1 },
    { q: "When delivering a project on Fiverr, the PM should include:", o: ["Just the files — Fiverr buyers don't read delivery messages and only care about the actual deliverables", "Deliverables + Loom walkthrough + summary of what was built + invitation to request adjustments", "A long apology for any delays — starting the delivery message with an apology shows professionalism", "Only a link to the staging site — buyers prefer to explore the site themselves without any guidance"], c: 1 },
    { q: "Response time on Fiverr should be:", o: ["Under 24 hours — Fiverr measures response time on a 24-hour basis for seller level evaluation", "Under 1 hour — response time affects Fiverr search ranking and buyer first impression significantly", "Under 1 week — Fiverr only flags response times longer than 7 days as problematic for the account", "Doesn't matter — Fiverr response time metric only applies to the first message not ongoing conversation"], c: 1 },
    { q: "A buyer opens a Fiverr dispute. The PM should respond within:", o: ["1 week — disputes have a 14-day resolution window so there's no rush to respond immediately", "24 hours with evidence (screenshots, chat history from order page) — stay professional, Fiverr CS reviews everything", "Don't respond — accepting the dispute silently is better than arguing with the buyer publicly", "30 days — Fiverr gives sellers a full month to prepare their response to any buyer dispute"], c: 1 },
    { q: "The difference between a revision and scope creep on Fiverr is:", o: ["There is no difference — all buyer requests after delivery are revisions included in the original order price", "Revisions are changes to existing work (color, font, layout), scope creep is NEW work not in the original brief", "Scope creep doesn't exist on Fiverr — all requested changes must be completed for free to maintain ratings", "Revisions cost extra and scope changes are free — the opposite of traditional freelancing agreements"], c: 1 },
    { q: "To reach Fiverr Top Rated Seller status, the account needs:", o: ["10 completed orders and a 4.0+ rating — Top Rated is achievable within the first month of selling", "100 orders, $20,000+ earned, 4.7+ rating, and 90%+ order completion — PM quality directly affects this", "Just a high rating — order volume and earnings don't factor into Top Rated Seller evaluation", "500 orders minimum — Top Rated is only achievable after several years of consistent selling activity"], c: 1 },
    { q: "Custom offers on Fiverr should be created by:", o: ["The developer — they know the technical scope and can price accurately without PM involvement", "The PM in collaboration with sales — pricing, timeline, and milestone structure must be strategic", "The buyer — they should define the price and timeline based on their budget and expectations", "Fiverr automatically — the platform generates custom offers based on the buyer's requirements message"], c: 1 },
    { q: "Fiverr seller level evaluation happens:", o: ["Daily — metrics are recalculated every 24 hours and levels can change at any time without notice", "Every 30 days based on the last 60 days of performance — on-time delivery and completion rate matter most", "Annually — Fiverr reviews seller performance once per year and adjusts levels during the annual review", "Never automatically — sellers must apply for level upgrades by submitting a portfolio review request"], c: 1 }
];

// =============================================================================
// TASK 12: MULTI-PROJECT HANDLING
// =============================================================================

const task12Content = `
<h2>🎯 TASK 12: MULTI-PROJECT HANDLING</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">5-10 Projects. Simultaneously. No Excuses.</h3>
    <p>At Digital Heroes, a PM manages <strong>5-10 active projects at once</strong>. This isn't optional — it's the baseline. Your job is to ensure EVERY project delivers on time while NONE of them feel neglected.</p>
</div>

<div class="content-section">
    <h3>🎯 The Priority Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Examples</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Action</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>P0 — Fire</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgent + Important</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deadline TODAY, client escalation, blocked developer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drop everything. Handle NOW.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #FBBF24;"><strong>P1 — Plan</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Important + Not Urgent</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery in 3 days, QA review, client check-in</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schedule in today's blocks.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #60A5FA;"><strong>P2 — Batch</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgent + Not Important</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client "any update?" messages, asset follow-ups</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Batch process twice daily.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #9CA3AF;"><strong>P3 — Defer</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not Urgent + Not Important</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Process improvements, docs cleanup, learning</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly or when capacity allows.</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>⏰ Time Blocking for PM Daily Schedule</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Block</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Activities</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:00-9:30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Morning Scan</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check ALL project channels, identify P0s, scan overnight messages</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:30-10:00</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dev standup — what they did yesterday, what they're doing today, blockers</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10:00-12:00</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deep Work</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">P0 and P1 tasks — QA reviews, client calls, deliveries</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12:00-12:30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Batch Comms</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reply to all P2 messages at once — client updates, asset follow-ups</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1:00-4:00</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Execution</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project work — briefs, documentation, QA, revision management</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4:00-4:30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Batch Comms</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Second batch — daily updates to all active clients</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4:30-5:30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Plan Tomorrow</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review all project statuses, update dashboard, prep for next day</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚦 Red/Yellow/Green Status Dashboard</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Status</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meaning</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM Action</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>GREEN</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">On track, no blockers, client happy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maintain momentum, send updates</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #FBBF24;"><strong>YELLOW</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">At risk — waiting on assets, dev behind, unclear feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Follow up today, unblock, escalate if not resolved in 24h</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>RED</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Behind schedule, client unhappy, deadline at risk</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Escalate to GM, create recovery plan, communicate to client with solution</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>Weekly Review:</strong> Every Friday, review ALL projects. Update the dashboard. Identify which projects are moving from Green → Yellow. Address BEFORE they turn Red.
    </div>
</div>

<div class="content-section">
    <h3>🧠 Context Switching — The Silent Killer</h3>
    <p>Every time you switch between projects, your brain needs <strong>15-25 minutes</strong> to fully re-engage. If you switch 10 times a day, you lose 2-4 hours to context switching alone.</p>
    <ul>
        <li><strong>Batch similar tasks:</strong> All daily updates in one 30-min block. All QA reviews in one block. All client calls in one block.</li>
        <li><strong>Use templates:</strong> Don't type each update from scratch. Copy, customize, send.</li>
        <li><strong>Notes per project:</strong> Keep a running doc per project with latest status, next action, blockers. When you switch back, read the doc first — 2 min to re-engage instead of 20.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🆘 Recognizing Capacity Limits</h3>
    <p>Signs you're overloaded:</p>
    <ul>
        <li>Multiple projects turning Yellow/Red simultaneously</li>
        <li>Client messages going unanswered for 4+ hours</li>
        <li>You're sending daily updates only to 3 out of 8 active projects</li>
        <li>QA reviews are getting rushed or skipped</li>
        <li>You're working past 8 PM regularly</li>
    </ul>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>When this happens:</strong> Escalate to your Team Lead / GM IMMEDIATELY. "I'm managing 12 active projects and 3 are at risk. I need help prioritizing or redistributing." Asking for help is NOT weakness — it's professional maturity.
    </div>
</div>
`;

const task12Quiz = [
    { q: "A PM manages 8 active projects. 3 have deliveries due today, 1 has a client escalation. What gets handled FIRST?", o: ["The 3 deliveries — meeting deadlines is always the top priority regardless of any other project issues", "The client escalation (P0) — drop everything, handle the fire first, then manage today's deliveries", "Whichever project has the highest revenue — money determines priority in all multi-project decisions", "Handle them in alphabetical order by client name — consistent process prevents any project from being forgotten"], c: 1 },
    { q: "Context switching between projects wastes how much time per switch?", o: ["0-2 minutes — switching between projects is instant for an experienced PM who knows their portfolio", "15-25 minutes to fully re-engage — 10 switches per day can waste 2-4 hours of productive time", "Exactly 1 hour per switch — this is a scientifically proven fixed cost that cannot be reduced", "No time at all — PMs are trained to context-switch instantly and it doesn't affect productivity"], c: 1 },
    { q: "The Red/Yellow/Green dashboard should be reviewed:", o: ["Monthly — weekly reviews are too frequent and create unnecessary administrative overhead for the PM", "Every Friday — update all project statuses, identify Yellow trends before they turn Red", "Only when a problem occurs — the dashboard is a reactive tool used to track existing issues", "Daily — the PM should update the status of every project every single morning without exception"], c: 1 },
    { q: "Batch processing for PM communications means:", o: ["Responding to every message immediately as it arrives — batch processing doesn't apply to PM communication", "Grouping similar tasks (all updates, all QA reviews) into dedicated time blocks to minimize context switching", "Sending one mass message to all clients with the same generic status update to save time", "Delaying all responses until end of day — batching means responding to everything at 5 PM only"], c: 1 },
    { q: "A PM is managing 12 active projects and 3 are turning Red. The correct action is:", o: ["Work harder — stay until midnight to catch up on all projects without involving anyone else", "Hide the Red projects — if you don't report them, management won't add more pressure to your workload", "Escalate to Team Lead/GM immediately: 'I need help prioritizing or redistributing' — asking for help is professional maturity", "Cancel the 3 Red projects — reducing workload is the only way to save the remaining 9 projects"], c: 2 },
    { q: "Time blocking shows 'Morning Scan' at 9:00-9:30 AM. The purpose is to:", o: ["Check personal emails and social media before starting work for the day at the office", "Scan ALL project channels, identify P0 priorities, and review overnight messages before anything else", "Write the EOD report from yesterday — morning is the best time for reflective documentation", "Attend the team standup meeting — morning scan and standup are the same activity at DH"], c: 1 },
    { q: "P2 tasks ('Urgent + Not Important') like 'any update?' messages should be:", o: ["Answered immediately every time — all client messages deserve instant responses regardless of priority level", "Batch processed twice daily (12:00 and 4:00) — respond to all at once instead of one-by-one throughout the day", "Ignored — if it's not important, the client doesn't need a response and will understand the PM is busy", "Delegated to a junior team member — P2 tasks are too low-priority for the PM to handle personally"], c: 1 },
    { q: "Running notes per project (latest status, next action, blockers) help because:", o: ["They're required by Fiverr for seller verification — without them your account can be flagged or suspended", "When switching back to a project, 2 minutes reading the notes re-engages you instead of 20 minutes figuring out where you left off", "Notes are only useful for new PMs — experienced PMs remember all project details without documentation", "They replace daily client updates — sending the PM's internal notes to clients counts as a status update"], c: 1 },
    { q: "A project turns Yellow (waiting on client assets for 3 days). PM action:", o: ["Wait another week — clients are busy and 3 days is not long enough to follow up on asset requests", "Send a specific follow-up today with consequences: 'Assets needed by [date] or delivery timeline shifts to [new date]'", "Cancel the project — if a client can't provide assets within 3 days they're not serious about the project", "Start building without assets — use placeholder content and replace it later when assets eventually arrive"], c: 1 },
    { q: "Signs you're over capacity include all EXCEPT:", o: ["Client messages going unanswered for 4+ hours regularly across multiple projects simultaneously", "QA reviews getting rushed or skipped due to time pressure from too many concurrent deadlines", "All 8 projects are Green and running smoothly with daily updates sent to every client on time", "Working past 8 PM regularly just to keep up with basic PM tasks like updates and status reports"], c: 2 },
    { q: "Weekly portfolio review on Friday should answer:", o: ["Only 'which projects made money this week' — revenue is the only metric that matters for PM evaluation", "Which projects are Green/Yellow/Red, what's the plan for each Yellow, and what needs attention next week", "Nothing specific — Friday reviews are informal and the PM should just relax before the weekend", "Only 'how many hours did I work' — time tracking is the primary purpose of the weekly review"], c: 1 },
    { q: "Dev standup (9:30-10:00) is scheduled AFTER Morning Scan because:", o: ["There's no specific reason — the order doesn't matter and standup could happen at any time", "You need to know the project status FIRST so you can ask the right questions during standup and identify blockers", "Developers prefer morning meetings — it has nothing to do with the PM's preparation or project knowledge", "Standup is optional — Morning Scan replaces the need for developer standup in the time-blocked schedule"], c: 1 }
];

// =============================================================================
// TASK 13-18: REMAINING PM EXPANSION TASKS
// =============================================================================

const task13Content = `
<h2>🔧 TASK 13: DEVELOPER COORDINATION & TECHNICAL LITERACY</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">You Don't Need to Code. You Need to UNDERSTAND Code.</h3>
    <p>A PM who can't speak the developer's language creates miscommunication, missed deadlines, and scope disasters. You don't need to write Liquid — but you need to know what it is and why "just change the button color" sometimes takes 2 hours.</p>
</div>

<div class="content-section">
    <h3>🏗️ Shopify Dev Workflow (PM Primer)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Step</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Happens</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM Needs to Know</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme Selection</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dev picks Dawn/Prestige/custom theme</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme choice affects timeline + cost</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customizer Setup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Colors, fonts, sections via Shopify editor</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">This is "no code" — fast changes</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid Coding</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom sections, logic, dynamic content</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">This takes TIME — custom code is slow</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">App Integration</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Install reviews, email, analytics apps</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Apps can conflict — dev needs testing time</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA & Testing</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Test across browsers, devices, checkout flow</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">NEVER skip QA to save time</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 Writing Clear Dev Briefs</h3>
    <p>A good dev brief prevents 80% of misbuilds. Include:</p>
    <ul>
        <li><strong>Client requirements</strong> (exact quotes from client, not your interpretation)</li>
        <li><strong>Reference sites</strong> (specific URLs + what to copy from each)</li>
        <li><strong>Assets</strong> (logo, brand colors hex codes, fonts, product images — link to where they are)</li>
        <li><strong>Priority order</strong> (homepage first → product pages → about → contact → blog)</li>
        <li><strong>Deadline + milestones</strong> (Day 1-2 preview, Day 7 midpoint, Day 11 QA, Day 14 delivery)</li>
        <li><strong>What NOT to build</strong> (features discussed but NOT approved — prevents scope creep from dev side)</li>
    </ul>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>Common PM mistake:</strong> Sending a brief that says "make it look good." This is useless. Be SPECIFIC: "Hero section: full-width image, left-aligned headline in 48px bold, green CTA button below."
    </div>
</div>

<div class="content-section">
    <h3>⏱️ Why "Just Change the Color" Takes 2 Hours</h3>
    <p>Clients (and inexperienced PMs) think visual changes are instant. Here's reality:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Says</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Dev Actually Does</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real Time</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Change button color"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Find all button instances in CSS/Liquid, change, test on all pages, check mobile, check hover/active states</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-60 min</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a new section"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design layout, write Liquid/HTML/CSS, make responsive, connect to CMS settings</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-4 hours</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make it faster"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Audit all images, lazy load, remove unused code, optimize Liquid, test results</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-8 hours</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong>PM Rule:</strong> Never tell a client "that's a quick change" without checking with the dev first. What looks simple may have hidden complexity.
    </div>
</div>

<div class="content-section">
    <h3>🤝 Dev Standup — What to Ask, What to Listen For</h3>
    <ul>
        <li><strong>Ask:</strong> "What did you complete yesterday?" → Compare to the plan</li>
        <li><strong>Ask:</strong> "What are you working on today?" → Does it match priority?</li>
        <li><strong>Ask:</strong> "Any blockers?" → This is the MOST important question. Unblock them immediately.</li>
        <li><strong>Listen for:</strong> Vague answers ("working on it") = warning sign. Push for specifics.</li>
        <li><strong>Listen for:</strong> "I'm waiting on..." = something YOU need to unblock (assets, client decision, access).</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚡ Unblocking Developers</h3>
    <p>The #1 reason projects go Yellow/Red: <strong>the developer is blocked and the PM doesn't know or hasn't acted</strong>.</p>
    <ul>
        <li><strong>Missing assets:</strong> Chase the client IMMEDIATELY. "We need your product images by tomorrow or the timeline shifts."</li>
        <li><strong>Unclear requirements:</strong> Don't ask the client vague questions. Be specific: "The homepage hero — should it be a static image or a video? And do you want the headline left-aligned or centered?"</li>
        <li><strong>Scope ambiguity:</strong> Document what IS included and get client sign-off before dev starts building.</li>
        <li><strong>Technical decision:</strong> If the dev needs to choose between two approaches, help them decide by asking "which is faster?" and "which does the client care about more?"</li>
    </ul>
</div>
`;

const task13Quiz = [
    { q: "A developer says 'I'm blocked — waiting on product images from the client.' The PM's immediate action:", o: ["Tell the developer to use placeholder images and continue — assets can be swapped later without any impact", "Message the client immediately with a specific request and deadline: 'Product images needed by tomorrow or delivery timeline shifts'", "Wait 3 more days — the client is probably busy and will send assets when they're ready without a follow-up", "Escalate to GM — asset delays are a management issue that PMs shouldn't handle directly with clients"], c: 1 },
    { q: "A dev brief that says 'make the homepage look good' is problematic because:", o: ["It's too short — dev briefs should be minimum 5 pages to be effective for Shopify development projects", "It's subjective and vague — the dev needs specifics like layout structure, CTA text, image placement, and colors", "It's offensive to developers — saying 'make it look good' implies the dev doesn't normally deliver quality work", "It's fine — developers are creative professionals who should interpret design direction independently"], c: 1 },
    { q: "A client says 'Just change the button color — that should take 5 minutes.' Reality is:", o: ["They're correct — button color is a single CSS property change that takes under 5 minutes to implement", "It takes 30-60 minutes: find all button instances, change CSS, test on all pages, check mobile, verify hover states", "It takes a full day — any visual change requires complete regression testing of the entire website", "The PM should agree with the client's estimate — arguing about development time damages the relationship"], c: 1 },
    { q: "In dev standup, the MOST important question to ask is:", o: ["'How many hours did you work yesterday?' — time tracking is the primary purpose of standup meetings", "'Any blockers?' — identifying what's preventing progress so the PM can unblock the developer immediately", "'Are you happy with the project?' — developer satisfaction determines project quality and delivery speed", "'When will you be done?' — the only thing that matters is the delivery date not what was done yesterday"], c: 1 },
    { q: "A developer's answer in standup is vague: 'I'm working on it.' The PM should:", o: ["Accept the answer — developers don't need to give detailed explanations to PMs about their work", "Push for specifics: 'Working on which page? What specifically? When will it be ready for me to review?'", "Report the developer to management for being uncooperative during standup meetings", "Skip standup with this developer going forward — some developers work better without oversight"], c: 1 },
    { q: "Theme choice affects the project because:", o: ["All Shopify themes are identical — theme choice is purely aesthetic and has no impact on timeline or cost", "Free themes (Dawn) need more customization time than premium themes with built-in features — affecting timeline and cost", "Theme choice only affects the design — it has no impact on development time or project budget", "PMs should never be involved in theme selection — it's a purely technical decision for the developer"], c: 1 },
    { q: "A dev brief should include 'What NOT to build' because:", o: ["It's unnecessary negativity — briefs should focus on what to build, not what to avoid during development", "It prevents scope creep from the dev side — features discussed but NOT approved shouldn't be built accidentally", "Developers always build exactly what's in the brief — there's no risk of them adding unrequested features", "It's only needed for junior developers — experienced developers know what's in scope without being told"], c: 1 },
    { q: "The #1 reason projects go Yellow/Red is:", o: ["Bad developers who don't meet their deadlines despite having everything they need to complete the work", "The developer is blocked and the PM doesn't know or hasn't acted — unresolved blockers compound daily", "Clients who change requirements every day — scope creep is always the primary cause of project delays", "Technical bugs that appear unexpectedly — software development is unpredictable and delays are inevitable"], c: 1 },
    { q: "Liquid coding in Shopify means:", o: ["Writing Python code that integrates with Shopify's backend database for custom business logic", "Writing custom template code (HTML + Liquid syntax) for sections, logic, and dynamic content — this takes TIME", "Using Shopify's drag-and-drop editor — Liquid is Shopify's brand name for their visual page builder", "Installing apps from the Shopify App Store — Liquid refers to the process of adding third-party functionality"], c: 1 },
    { q: "When a dev says 'I need to choose between two approaches,' the PM helps by asking:", o: ["'Which approach will the client find most impressive?' — always choose the option that looks best to the buyer", "'Which is faster?' and 'Which does the client care about more?' — help decide based on timeline and client priorities", "'Which approach has the most elegant code?' — code quality should always be the deciding factor for technical decisions", "'Just pick one — technical decisions are not the PM's responsibility and shouldn't involve PM input'"], c: 1 }
];

const task14Content = `
<h2>📦 TASK 14: CLIENT HANDOFF & DELIVERY EXCELLENCE</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">Delivery Is Where Reviews Are Won or Lost</h3>
    <p>A perfect build delivered poorly = average review. An average build delivered excellently = 5 stars. The <strong>delivery experience</strong> is as important as the work itself.</p>
</div>

<div class="content-section">
    <h3>✅ Pre-Delivery QA Execution</h3>
    <p>Before ANY delivery, run the 60-point QA checklist (Task 7). Key highlights:</p>
    <ul>
        <li>Test a complete order: add to cart → checkout → payment → confirmation email</li>
        <li>Check all pages on mobile (phone + tablet)</li>
        <li>No placeholder content — every image, text, and link must be real</li>
        <li>PageSpeed: Mobile 75+, Desktop 85+</li>
        <li>All forms submit and send notifications correctly</li>
        <li>Browser check: Chrome, Firefox, Safari, Edge</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎥 Loom Walkthrough (Required for Every Delivery)</h3>
    <p>Record a <strong>3-5 minute Loom video</strong> showing:</p>
    <ol>
        <li><strong>Homepage tour:</strong> Walk through the design, highlight key sections, show mobile responsiveness</li>
        <li><strong>Key pages:</strong> Show About, Shop/Collection, a Product page, Contact — point out features</li>
        <li><strong>Admin tutorial:</strong> Show Shopify admin — how to edit pages, add products, update images, change text</li>
        <li><strong>What was delivered:</strong> Summarize the deliverables list from the original scope</li>
        <li><strong>Next steps:</strong> "Review the site, let me know if you'd like adjustments. Here to help!"</li>
    </ol>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #34D399; padding: 20px; margin: 15px 0;">
        <strong>Why Loom matters:</strong> Clients who receive a walkthrough video are 3x more likely to leave a 5-star review. It shows professionalism and care.
    </div>
</div>

<div class="content-section">
    <h3>📬 Post-Delivery Follow-Up Sequence</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Message</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Hi! Just checking if you had a chance to review. Happy to make any adjustments!"</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Following up — any feedback on the store? We want to make sure everything is perfect."</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 7</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Hope your store is going well! If you're happy, we'd really appreciate a review. Also happy to discuss ongoing support."</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>⭐ Requesting Reviews — Timing & Script</h3>
    <p><strong>When:</strong> After the buyer accepts the delivery AND expresses satisfaction. Never before acceptance.</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>The Script:</strong> "Thank you so much for working with us! It was a pleasure building [Brand Name]'s store. If you're happy with the result, we'd truly appreciate a review — it helps us grow and serve more clients like you. If there's anything else you need in the future, we're always here!"</p>
    </div>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #EF4444;">
        <strong>Never:</strong> Ask for a review before the buyer is satisfied. Never offer discounts/bribes for reviews. Never ask them to change a review. Fiverr bans accounts for review manipulation.
    </div>
</div>

<div class="content-section">
    <h3>😱 Handling "I Want to Change Everything" Post-Delivery</h3>
    <p>Sometimes a buyer accepts delivery, then comes back wanting major changes. The process:</p>
    <ol>
        <li><strong>Stay calm.</strong> Don't get defensive. "I understand — let's go through each point."</li>
        <li><strong>Categorize:</strong> Which changes are revisions (included) and which are new scope (extra cost)?</li>
        <li><strong>Quote:</strong> For scope changes, send a custom offer on Fiverr for the additional work.</li>
        <li><strong>Document:</strong> All changes agreed in writing on the Fiverr order page before starting.</li>
    </ol>
</div>
`;

const task14Quiz = [
    { q: "Before delivering a Shopify store on Fiverr, the PM must ensure:", o: ["Only that the homepage looks good — inner pages can be finished after delivery if needed", "A complete test order works end-to-end, all pages are mobile responsive, and PageSpeed meets targets", "That the developer confirms it's done — PMs don't need to personally verify QA on delivered projects", "Nothing specific — Fiverr doesn't require QA and the buyer will report issues if anything is broken"], c: 1 },
    { q: "Loom walkthrough for every delivery is required because:", o: ["Fiverr mandates video walkthroughs — deliveries without video are automatically flagged as incomplete", "Clients who receive walkthroughs are 3x more likely to leave 5-star reviews — it shows professionalism and care", "It replaces the need for written delivery notes — video is the only acceptable format for delivery documentation", "Loom is a DH sponsor — using their tool is part of the company's partnership agreement"], c: 1 },
    { q: "The review request script should be sent:", o: ["Before delivery — request the review in advance so the buyer knows to leave one immediately after accepting", "After the buyer accepts delivery AND expresses satisfaction — never before acceptance or when they're unhappy", "Along with the delivery itself — include 'Please leave us a 5-star review' in every delivery message", "Never — asking for reviews is unprofessional and buyers will leave reviews naturally if they're happy"], c: 1 },
    { q: "A buyer accepts delivery then wants major redesign changes 5 days later. The PM should:", o: ["Do everything for free — post-delivery changes are always included to maintain the client relationship", "Stay calm, categorize changes as revisions (included) vs new scope (extra cost), quote additional work via custom offer", "Refuse all changes — once delivery is accepted the project is complete and no further work is required", "Ignore the messages — the buyer already accepted so the PM has no obligation to respond further"], c: 1 },
    { q: "Post-delivery follow-up sequence is: Day 1, Day 3, Day 7. The Day 7 message should include:", o: ["A threat to close communication — if they haven't responded by Day 7 the PM moves on", "Check on store progress + request for review if they're happy + offer for ongoing support", "Only a review request — Day 7 is exclusively for collecting the client's star rating", "Nothing — 3 follow-up messages is excessive and Day 7 should be skipped"], c: 1 },
    { q: "The Loom walkthrough should cover all EXCEPT:", o: ["Homepage design tour and mobile responsiveness demonstration", "How to edit pages and add products in Shopify admin", "The PM's personal opinions about the client's business strategy and marketing", "Summary of deliverables and invitation for the client to request adjustments"], c: 2 },
    { q: "A buyer says 'I'm not happy with the design' after accepting delivery. FIRST action:", o: ["Offer a full refund immediately — unhappy clients should always get their money back without question", "Ask specific questions: 'What exactly doesn't match your expectations? Can you share reference examples?' — then categorize and respond", "Blame the developer — explain that the design team didn't follow instructions and you'll have it fixed", "Tell the buyer it's too late — they accepted the delivery so no changes can be made at this point"], c: 1 },
    { q: "Offering discounts or incentives for reviews on Fiverr:", o: ["Is a smart strategy — most successful sellers use incentives to build their review count quickly", "Is prohibited — Fiverr bans accounts for review manipulation including offering discounts for positive reviews", "Is required — Fiverr's algorithm rewards sellers who proactively incentivize buyer reviews with discounts", "Only applies to negative reviews — you can offer discounts to change a negative review to positive"], c: 1 },
    { q: "Admin tutorial in the Loom walkthrough should show:", o: ["Advanced Liquid coding — clients need to understand the technical implementation to manage their store", "How to edit pages, add products, update images, and change text — empower the client to manage basic updates", "Nothing — clients should contact the PM for all changes and should not be editing their own store", "Only payment settings — the admin tutorial should focus exclusively on financial configuration"], c: 1 },
    { q: "Client handoff includes transitioning to ongoing support because:", o: ["It's required by Fiverr's seller terms — all projects must include a mandatory 1-month support period", "Ongoing support/maintenance packages create recurring revenue and strengthen the long-term client relationship", "DH requires all clients to purchase support — it's not optional and should be pushed aggressively after delivery", "Support transition is only for enterprise clients — standard Fiverr orders don't include post-delivery support"], c: 1 }
];

const task15Content = `
<h2>💰 TASK 15: UPSELLING & REVENUE GROWTH</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(249, 115, 22, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">PM = Revenue Driver, Not Just Coordinator</h3>
    <p>The best PMs don't just deliver projects — they <strong>grow accounts</strong>. Every project is an opportunity to identify what else the client needs and present it at the right time.</p>
</div>

<div class="content-section">
    <h3>🔍 Identifying Upsell Opportunities During Projects</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What You Notice</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upsell Opportunity</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How to Present</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No email marketing setup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo/Mailchimp email automation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I noticed you don't have email automations. Want us to add Welcome + Abandoned Cart flows?"</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low PageSpeed score</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed optimization package</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Your current score is 45. We can optimize to 85+ which directly improves conversion rate."</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No SEO on product pages</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO setup package</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Your products aren't appearing on Google. We can add SEO for $X to drive organic traffic."</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client mentions new products</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Additional product upload</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Launching new products? We can upload and optimize them with descriptions and images."</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client loves the work</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly retainer / maintenance</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Would you like ongoing support? We offer monthly maintenance packages starting at $X/month."</td></tr>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>Timing Rule:</strong> Present upsells AFTER the client is happy with current work, never during problems. The best time: post-delivery follow-up, after positive feedback, or when they mention future plans.
    </div>
</div>

<div class="content-section">
    <h3>📝 5 Upsell Conversation Scripts</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Script 1 — Email Automation:</strong> "By the way, I noticed your store doesn't have email automations. A Welcome series + Abandoned Cart flow typically recovers 10-15% of lost sales. Want me to set this up as an add-on?"</p>
        <p><strong>Script 2 — Speed Optimization:</strong> "Your store loads in 5 seconds on mobile. We can cut that to under 2 seconds, which Google rewards with better rankings and your visitors are more likely to purchase. It's $X as a standalone package."</p>
        <p><strong>Script 3 — Monthly Maintenance:</strong> "Now that your store is live, would you like ongoing support? We handle updates, speed monitoring, and any changes you need. Starts at $X/month."</p>
        <p><strong>Script 4 — Additional Pages:</strong> "Some of our clients also add a FAQ page and a sizing guide — both reduce customer support questions. Want me to include those?"</p>
        <p><strong>Script 5 — Marketing:</strong> "Your store design is strong. If you want help driving traffic, we offer a marketing package: social media + paid ads. Want to discuss?"</p>
    </div>
</div>
`;

const task15Quiz = [
    { q: "The best time to present an upsell to a Fiverr client is:", o: ["During a problem — urgency increases their willingness to invest in additional services immediately", "After the client is happy with current work — post-delivery follow-up or after positive feedback", "Before the project starts — present all possible add-ons upfront so the client knows the full price", "Never — upselling is pushy and damages client relationships on Fiverr marketplaces"], c: 1 },
    { q: "You notice the client's store has no email automations. The value-first approach is:", o: ["Ignore it — you were hired for store design, not email marketing, so it's outside your responsibility", "'I noticed you don't have email automations. A Welcome + Abandoned Cart flow typically recovers 10-15% of lost sales. Want me to set this up?'", "Build it for free — adding unrequested features shows initiative and the client will appreciate the bonus", "Tell the client their store will fail without email marketing — create urgency so they purchase immediately"], c: 1 },
    { q: "Monthly retainer packages benefit Digital Heroes because:", o: ["They lock clients into contracts they can't exit — recurring revenue depends on making cancellation difficult", "They create recurring revenue, strengthen long-term relationships, and reduce client acquisition costs", "They're Fiverr's preferred revenue model — the platform gives higher rankings to sellers with retainer clients", "They replace project-based work entirely — DH should transition to only retainer clients for stable income"], c: 1 },
    { q: "A PM identifies that a client's store PageSpeed is 45. The upsell approach is:", o: ["Tell the client their store is broken — PageSpeed 45 means the site barely functions and needs emergency repair", "'Your current score is 45. We can optimize to 85+ which improves conversion rate and Google rankings. It's $X as a standalone package.'", "Fix it for free — speed optimization should be included in every store build regardless of the original scope", "Don't mention it — clients don't care about technical metrics like PageSpeed and won't pay for optimization"], c: 1 },
    { q: "Cross-selling between WordPress and Shopify means:", o: ["Convincing WordPress clients to switch to Shopify — Shopify is always better and WP clients should migrate", "Offering both platform services to clients — a WooCommerce client might need Shopify for a second brand, and vice versa", "Only selling Shopify — WordPress is not profitable enough and DH should stop offering WordPress services", "Building one site on both platforms simultaneously — all stores should have both WP and Shopify versions"], c: 1 },
    { q: "Upselling is different from pushy selling because:", o: ["There's no difference — all upselling is pushy and makes clients uncomfortable regardless of how it's presented", "Upselling presents genuine value the client needs at the right time — not pushing unnecessary services for profit", "Upselling uses aggressive discounts — offering 50% off makes the client feel like they're getting a deal", "Upselling only happens once — pushy selling involves multiple attempts, upselling is always a single offer"], c: 1 },
    { q: "Client says 'I'm launching new products next month.' This is an opportunity for:", o: ["Nothing — product launches are the client's responsibility and don't involve the PM or development team", "Product upload service: 'Launching new products? We can upload, optimize descriptions, and add professional images for $X'", "Telling the client to do it themselves — Shopify's interface is easy enough that they don't need help", "Offering a full store redesign — new products always require a completely new store design from scratch"], c: 1 },
    { q: "PM as revenue driver means:", o: ["PMs should spend most of their time on sales calls rather than managing projects — revenue is the top priority", "PMs identify natural upsell opportunities during projects and present them as value to the client at the right time", "PMs should set sales targets and be compensated primarily through commission on upsold services", "Every PM conversation with a client should include at least 3 upsell pitches regardless of context"], c: 1 },
    { q: "A Fiverr gig extra for additional work should be:", o: ["Offered as a free bonus — never charge existing clients for additional work that improves their store", "Sent as a Fiverr custom offer with clear scope, timeline, and price — keeping everything on-platform and documented", "Handled off-platform — direct the client to pay via PayPal to avoid Fiverr's commission on the additional work", "Never offered — scope should be fixed and PMs should refuse all requests for work beyond the original order"], c: 1 },
    { q: "Client lifetime value (CLV) increases when:", o: ["The initial project is priced as high as possible — CLV is solely determined by the first transaction amount", "The PM builds a long-term relationship with ongoing support, upsells, and recurring retainer packages", "The client is locked into an annual contract with heavy cancellation penalties to prevent them from leaving", "CLV is not a PM metric — only the sales team is responsible for client lifetime value and retention"], c: 1 }
];

const task16Content = `
<h2>📞 TASK 16: MEETING MASTERY & CLIENT CALLS</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.15)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">What Takes 3 Days of Messages Takes 1 Hour on a Call</h3>
    <p>Fiverr PMs often avoid calls because "everything is in chat." Wrong. A single well-run call can resolve a week of back-and-forth messages and build deeper client trust.</p>
</div>

<div class="content-section">
    <h3>📋 Meeting Types & When to Use Them</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(236, 72, 153, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meeting Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Duration</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Agenda</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Kickoff Call</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-45 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 1-2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope confirmation, timeline, access, assets needed, design direction</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Weekly Check-In</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15-20 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Progress demo, blockers, upcoming milestones</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Live Revision Call</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">After review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Screen-share, fix text/color/spacing live, note complex changes for later</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Handover Call</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-45 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">At delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Final walkthrough, admin training, support details, review request</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🎥 Live Revision Calls — The DH Secret Weapon</h3>
    <p>Live Revision Calls save <strong>days of back-and-forth</strong>:</p>
    <ul>
        <li><strong>Setup:</strong> Google Meet with screen sharing. Have the Shopify admin open and ready.</li>
        <li><strong>Fix LIVE:</strong> Text changes, color adjustments, spacing fixes, font sizes — do them while the client watches.</li>
        <li><strong>Note complex changes:</strong> "This needs custom code — I'll note it and have the dev implement by [date]."</li>
        <li><strong>After call:</strong> Send a written summary: "We fixed X, Y, Z live. We'll complete A, B by [date]."</li>
    </ul>
</div>

<div class="content-section">
    <h3>🌍 Time Zone Management</h3>
    <ul>
        <li><strong>Use client's timezone:</strong> When proposing times, write "3 PM your time (1:30 AM IST for us)" — shows respect.</li>
        <li><strong>Overlap windows:</strong> DH is IST (UTC+5:30). Good overlap: US morning = India evening (8 PM IST = 9:30 AM EST).</li>
        <li><strong>Calendar:</strong> Always send Google Calendar invite with correct timezone. Never rely on "let's meet at 3" without timezone.</li>
        <li><strong>Async for non-urgent:</strong> If timezone difference is 10+ hours, prefer Loom videos over live calls for status updates.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Call Notes & Action Items</h3>
    <p>After EVERY call, send a written summary within 1 hour:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Template:</strong></p>
        <p><em>Hi [Name], here's a summary of our call:</em></p>
        <p><em><strong>Discussed:</strong> [topic 1], [topic 2], [topic 3]</em></p>
        <p><em><strong>Decided:</strong> [decision 1], [decision 2]</em></p>
        <p><em><strong>Action Items:</strong></em></p>
        <ul><li><em>[Action] — Owner: [who] — Due: [date]</em></li></ul>
        <p><em><strong>Next call:</strong> [date/time if scheduled]</em></p>
    </div>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F472B6; padding: 20px; margin: 15px 0;">
        <strong>Why this matters:</strong> Written summaries prevent "I never said that" disputes. They're your legal protection and the client's reference point.
    </div>
</div>

<div class="content-section">
    <h3>📞 Calls vs Messages — Decision Framework</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use a Call When</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Messages When</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multiple revision items (10+)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-3 revision items</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client is confused or frustrated</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple status update</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design direction is unclear</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sharing links/files</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope discussion / change request</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Confirming a single detail</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project kickoff</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily progress update</td></tr>
    </table>
</div>
`;

const task16Quiz = [
    { q: "A client has 15 revision items after reviewing their Shopify store. Best approach:", o: ["Handle each item via separate Fiverr messages — writing everything down ensures accuracy and documentation", "Schedule a Live Revision Call — fix text/color/spacing live on screen-share, note complex items for later", "Tell the client to prioritize their top 3 — 15 revision items is too many to handle in one round", "Implement all 15 silently and send the updated site — no need to discuss or confirm each change"], c: 1 },
    { q: "After every client call, the PM must send a written summary within:", o: ["1 week — summaries are important but not urgent and can be written when the PM has free time", "1 hour — prevents 'I never said that' disputes and serves as the client's reference point for decisions", "Never — call summaries are unnecessary overhead that slows down project progress without adding value", "24 hours — same-day summaries are sufficient and there's no need to rush immediately after the call"], c: 1 },
    { q: "DH is in IST (UTC+5:30). For a US EST client, good meeting overlap is:", o: ["2 PM IST (3:30 AM EST) — this is the only available window for IST-EST meetings to work efficiently", "8 PM IST (9:30 AM EST) — India evening = US morning provides the best overlap for both time zones", "12 PM IST (1:30 AM EST) — midday India time is ideal because the PM is most alert and productive", "There's no good overlap — IST and EST are too far apart and all meetings should be replaced by Loom videos"], c: 1 },
    { q: "When proposing meeting times to international clients, the PM should:", o: ["Always use IST — the client should adapt to the PM's timezone since DH is the service provider", "Write in client's timezone first: '3 PM your time (1:30 AM IST for us)' — shows respect and prevents confusion", "Use UTC only — universal time is the standard for all international business communication worldwide", "Don't specify timezone — just say '3 PM' and the client will figure out the conversion themselves"], c: 1 },
    { q: "Live Revision Calls on Google Meet should fix LIVE:", o: ["Custom code changes — writing Liquid templates during a live call impresses the client with technical skill", "Text changes, color adjustments, spacing fixes, font sizes — quick visual changes the client can approve instantly", "Nothing — the call should only be used for discussion, all changes should be implemented after the call ends", "Everything including app integrations — the entire revision list should be completed during a single call"], c: 1 },
    { q: "The written summary after a call must include all EXCEPT:", o: ["Topics discussed during the meeting", "Decisions made during the call", "The PM's personal feelings about the client's feedback", "Action items with owners and due dates"], c: 2 },
    { q: "Use messages instead of calls when:", o: ["The client has 15 revision items to discuss in detail with visual references for each change", "Simple status update, sharing links/files, or confirming a single detail — quick, no discussion needed", "The client is confused about the project direction and needs detailed clarification on scope and timeline", "The project is in a crisis situation and needs immediate escalation and resolution with the client"], c: 1 },
    { q: "Kickoff call on Day 1-2 should cover:", o: ["Only payment confirmation — the kickoff call is primarily about confirming the client has paid for the order", "Scope confirmation, timeline walkthrough, access/credentials, assets needed, and design direction", "Only the PM's introduction — the first call should be a casual get-to-know-you conversation with no agenda", "Technical architecture decisions — the kickoff call should focus on server setup and theme selection details"], c: 1 },
    { q: "For clients in a timezone 10+ hours different from IST:", o: ["Schedule calls at 3 AM IST — the PM should sacrifice sleep for client convenience without exception", "Prefer Loom videos over live calls for status updates — async communication works better for large timezone gaps", "Never communicate — timezone differences larger than 10 hours make projects unmanageable and should be declined", "Schedule all meetings at noon IST — this splits the timezone difference evenly between both parties"], c: 1 },
    { q: "Weekly check-in calls should be:", o: ["2+ hours — thorough reviews require extended meeting time to cover everything properly each week", "15-20 minutes — focused on progress demo, blockers, and upcoming milestones without unnecessary discussion", "Skipped if the project is going well — weekly check-ins are only needed when problems exist", "Replaced entirely by daily written updates — weekly calls are outdated and modern PM uses text-only communication"], c: 1 }
];

const task17Content = `
<h2>🎓 TASK 17: CAREER GROWTH & CERTIFICATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">Your PM Career at Digital Heroes</h3>
    <p>You've mastered the skills. Now learn the path from <strong>Junior PM to Head of PM</strong>. This is also your <strong>Final Certification Exam</strong> covering all Tasks 1-16.</p>
</div>

<div class="content-section">
    <h3>📈 PM Career Path at DH</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Responsibilities</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Junior PM</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 1-6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manage 3-5 projects under supervision, follow SOPs exactly, learn Fiverr PM</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>PM</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 6-18</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manage 5-10 projects independently, handle escalations, upsell</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Senior PM</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 18-36</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead complex projects, mentor juniors, process improvement, client strategy</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Head of PM</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 36+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manage PM team, hire PMs, define processes, revenue ownership, strategic planning</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 PM KPIs at Digital Heroes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">KPI</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">On-Time Delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90%+</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Satisfaction</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.8+ / 5.0</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First-Approval Rate</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upsell Revenue Generated</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%+ of managed projects get upsold</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Zero Refund Rate</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0% — no refunds under your management</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 Final Certification Exam</h3>
    <p>This exam covers <strong>ALL topics from Tasks 1-16</strong>:</p>
    <ul>
        <li>Tasks 1-5: Company culture, PM mindset, client communication, project lifecycle, team coordination</li>
        <li>Tasks 6-10: Scope management, QA, tools, crisis management, metrics</li>
        <li>Tasks 11-16: Fiverr PM, multi-project, dev coordination, handoff, upselling, meetings</li>
    </ul>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong>Score 100% to earn your PM Certification.</strong> This certifies you're ready to manage Digital Heroes projects independently.
    </div>
</div>
`;

const task17Quiz = [
    { q: "A Junior PM at DH manages how many projects?", o: ["10-15 projects from Day 1 — learning happens through volume and pressure", "3-5 projects under supervision — building competence before taking full responsibility", "0 projects — Junior PMs only observe Senior PMs for the first 6 months without managing anything", "1 project — each Junior PM focuses on a single project until they complete their first delivery successfully"], c: 1 },
    { q: "On-Time Delivery KPI target is:", o: ["50% — meeting half of deadlines is acceptable during the first year as a PM at Digital Heroes", "90%+ — on-time delivery directly affects Fiverr seller level and client satisfaction scores", "100% always — any single late delivery results in termination regardless of circumstances", "No specific target — delivery timing is flexible and depends on each project's unique circumstances"], c: 1 },
    { q: "First-Approval Rate KPI means:", o: ["The percentage of clients who approve the FIRST delivery without requesting major revisions — target 70%+", "How quickly the PM responds to the first client message — measured in minutes from initial contact", "The percentage of proposals that get accepted by clients — a sales metric not a PM delivery metric", "Whether the PM approves the developer's work on first review — internal quality gate not client-facing"], c: 0 },
    { q: "The PM career path from Junior to Head typically takes:", o: ["6 months — DH promotes quickly and career progression is accelerated for high performers", "36+ months — Junior (1-6mo), PM (6-18mo), Senior PM (18-36mo), Head of PM (36+mo)", "10+ years — traditional corporate timeline applies to all PM career progression at Digital Heroes", "There is no defined path — PM promotions are random and based on company needs not individual growth"], c: 1 },
    { q: "Upsell Revenue KPI target means:", o: ["Every project must generate upsell revenue — projects without upsells are considered failures", "20%+ of managed projects result in additional revenue through upselling — identifying client needs naturally", "The PM keeps 20% commission on all upsell revenue — financial incentive drives upselling behavior", "Upselling is optional — it's a bonus metric that doesn't affect PM evaluation or career progression"], c: 1 },
    { q: "Zero Refund Rate means:", o: ["Refunds are impossible on Fiverr — the platform doesn't allow sellers to issue refunds to buyers", "No refunds should occur under your management — proper QA, communication, and delivery prevents them", "One refund per quarter is acceptable — zero is an aspirational target not a realistic expectation", "Only applies to Senior PMs — Junior and Mid-Level PMs are expected to have some refund rate"], c: 1 },
    { q: "Cross-training (understanding sales, dev, CS) helps a PM because:", o: ["PMs should replace sales, dev, and CS roles — understanding all functions means doing all functions personally", "Understanding how each department works helps the PM coordinate effectively across the entire project pipeline", "Cross-training is only for Junior PMs — Senior PMs specialize in PM and don't need cross-functional knowledge", "It's not helpful — PMs should focus exclusively on project management and ignore other department operations"], c: 1 },
    { q: "Senior PM (Month 18-36) responsibilities include:", o: ["Same as Junior PM but with more projects — there's no difference in responsibility type at the Senior level", "Lead complex projects, mentor Junior PMs, improve processes, develop client strategy — leadership responsibilities", "Only hiring new PMs — Senior PMs transition fully into recruitment and stop managing projects entirely", "Managing the company's finances — Senior PMs are responsible for P&L management at the company level"], c: 1 },
    { q: "Head of PM (Month 36+) is responsible for:", o: ["Managing projects directly — the Head of PM title is cosmetic with no change in actual daily responsibilities", "Managing the PM team, hiring PMs, defining processes, owning revenue targets, and strategic planning", "Only attending leadership meetings — the Head of PM delegates all actual work to Senior and Junior PMs", "Sales — at the Head level, the PM transitions into a sales role and stops all project management activities"], c: 1 },
    { q: "Client Satisfaction KPI target of 4.8+/5.0 is measured through:", o: ["Internal surveys sent to clients by HR — the PM has no visibility into satisfaction scores", "Fiverr buyer reviews and ratings — directly affected by PM communication, delivery quality, and follow-up", "Annual client interviews conducted by the CEO — satisfaction is measured once per year only", "There's no formal measurement — client satisfaction is a subjective feeling that can't be quantified"], c: 1 },
    { q: "The Final Certification Exam covers:", o: ["Only Tasks 11-16 (Fiverr-specific content) — the exam focuses on new material not previously tested", "ALL topics from Tasks 1-16 — company culture, PM mindset, communication, lifecycle, scope, QA, tools, crisis, metrics, Fiverr PM, multi-project, dev coordination, handoff, upselling, and meetings", "Only Tasks 1-5 (foundational PM content) — the certification validates basic PM knowledge only", "Random topics selected by the system — the exam content is different for every trainee"], c: 1 },
    { q: "Moving from 'managing projects' to 'managing PMs' requires:", o: ["No additional skills — if you can manage projects you can automatically manage people who manage projects", "Leadership development: delegation, mentoring, process design, team development, and strategic thinking", "Only technical expertise — the Head of PM needs to be the most technically skilled person on the team", "MBA degree — Digital Heroes requires formal education for all leadership-level promotions"], c: 1 },
    { q: "A PM achieving all KPIs (90%+ on-time, 4.8+ CSAT, 70%+ first-approval, upsells, zero refunds) is:", o: ["Meeting minimum expectations — all PMs are expected to hit every KPI from Day 1 without exception", "Performing at an elite level — demonstrating mastery of PM skills and readiness for promotion to the next level", "Over-performing and should reduce effort — hitting all KPIs means working too hard and risking burnout", "Cheating the metrics — it's statistically impossible to achieve all KPIs simultaneously in real projects"], c: 1 },
    { q: "This certification proves you're ready to:", o: ["Start learning PM — the certification is just the beginning of a long learning journey before managing projects", "Manage Digital Heroes projects independently — applying all skills from client communication to Fiverr delivery", "Replace the Head of PM immediately — certification qualifies you for the highest PM position at DH", "Leave Digital Heroes — the certification's primary value is for external job applications at other companies"], c: 1 },
    { q: "The most valuable skill for long-term PM career growth is:", o: ["Speed — the fastest PM always gets promoted first regardless of quality or client satisfaction scores", "Continuous learning and adaptability — tools change, platforms evolve, client expectations shift over time", "Memorizing SOPs — perfect recall of every procedure guarantees career progression at Digital Heroes", "Working maximum hours — career growth is directly proportional to hours worked per week"], c: 1 }
];

const task18Content = `
<h2>🏗️ TASK 18: PRACTICAL TASK — PROJECT SIMULATION (72 Hours)</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(249, 115, 22, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">Prove It — 72-Hour PM Challenge</h3>
    <p>Everything from Tasks 1-17 comes together here. Manage a <strong>simulated Shopify store build</strong> from kickoff to delivery. This is your final practical assessment.</p>
</div>

<div class="content-section">
    <h3>📋 The Simulation Brief</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Client:</strong> "Fresh Roots" — an organic skincare brand launching their first online store</p>
        <p><strong>Platform:</strong> Shopify</p>
        <p><strong>Products:</strong> 15 skincare products (face, body, hair care)</p>
        <p><strong>Budget:</strong> $1,800 (Enterprise tier)</p>
        <p><strong>Timeline:</strong> 14 days</p>
        <p><strong>Reference:</strong> herbivore.com, truebotanicals.com</p>
    </div>
</div>

<div class="content-section">
    <h3>✅ Deliverables (5 Required Documents)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deliverable</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Details</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Plan Document</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14-day timeline with milestones, risk register, resource allocation</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Communication Log</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 daily updates, 1 kickoff message, 1 delivery message (written as if to real client)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Developer Brief</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full dev brief with requirements, references, assets, priorities, timeline</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>QA Checklist</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Completed 60-point QA checklist (fill it out as if you tested a real store)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Loom Delivery Video</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5 min "delivery to client" simulation (can use any live Shopify store as reference)</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📤 Submission</h3>
    <p>Submit all 5 deliverables via Google Form: <a href="https://forms.gle/digitalheroes-pm-practical" target="_blank" style="color: #60A5FA;">PM Practical Submission Form</a></p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong>Deadline:</strong> 72 hours from when you start this task. Quality over speed — but prove you can work under real project pressure.
    </div>
</div>

<div class="content-section">
    <h3>📊 Evaluation Rubric</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Criteria</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weight</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What We Evaluate</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project Plan Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Realistic timeline, proper milestones, risk identification</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Communication</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional tone, clear updates, proactive communication</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Developer Brief</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specificity, completeness, actionable instructions</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA Thoroughness</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">60-point checklist properly filled, attention to detail</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery Presentation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loom quality, confidence, completeness, professionalism</td></tr>
    </table>
</div>
`;

const task18Quiz = [
    { q: "The practical task requires how many deliverables?", o: ["2 — project plan and client communication log are the only required submissions", "5 — project plan, client communication log, developer brief, QA checklist, and Loom delivery video", "10 — each phase of the 14-day timeline requires a separate deliverable document submission", "1 — only the Loom delivery video is required since it demonstrates all PM skills visually"], c: 1 },
    { q: "The client communication log must include:", o: ["1 message total — a single delivery message is sufficient to demonstrate PM communication skills", "5 daily updates, 1 kickoff message, and 1 delivery message — written as if communicating with a real client", "Only the kickoff message — daily updates and delivery messages are generated automatically by Fiverr", "50 messages covering every possible client interaction scenario across the entire project lifecycle"], c: 1 },
    { q: "Project Plan Quality is weighted at what percentage?", o: ["5% — the project plan is a minor component and the Loom video carries most of the evaluation weight", "25% — realistic timeline, proper milestones, and risk identification are critical PM competencies", "50% — the project plan is the most important deliverable and everything else is secondary", "0% — project plans are not evaluated since the practical task focuses only on communication skills"], c: 1 },
    { q: "The Loom delivery video should be:", o: ["30+ minutes covering every page in extreme detail with technical code explanations", "3-5 minutes — a 'delivery to client' simulation showing the store walkthrough professionally", "Not required — written delivery notes are accepted as a substitute for the video", "15-20 minutes focusing on the PM's personal reflection on what they learned during the simulation"], c: 1 },
    { q: "The developer brief must be:", o: ["A one-line instruction: 'Build a skincare store' — developers should figure out the details themselves", "Specific and complete: requirements, references, assets, priorities, timeline — everything a dev needs to build without questions", "Only a timeline — developers don't need written requirements if the PM is available for questions", "A copy of the client's original message — the PM should pass through client requests without interpretation"], c: 1 }
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
