// Marketplace Risk Manager Training Data - Digital Heroes
// 18 Tasks, 200+ Quiz Questions

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "Risk Manager Role", description: "Your Mission", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🛡️ Concept: First Line of Defense", "🎯 Goal: Zero Missed Messages", "📊 Rule: Daily Reporting MANDATORY"] },
    { id: 3, title: "Daily Health Check", description: "Account Monitoring", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Process: Per-Account Checklist", "🔔 Check: Messages, Notifications, Reviews", "⚠️ Flag: Anything due within 48 hrs"] },
    { id: 4, title: "Daily Reporting", description: "Report Structure", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Format: Per-Account Breakdown", "🚫 Rule: No vague reports", "📝 Skill: Detail every action"] },
    { id: 5, title: "Feedback Tracker", description: "Review Management", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "⭐ Track: Clients without reviews", "🔴 Rule: 30-day window expiration", "📋 Tool: Centralized Google Sheet"] },
    { id: 6, title: "Bonus Messages", description: "Review Follow-Up", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎁 When: After order completion", "🚫 When NOT: Work in progress", "⭐ Goal: Maximize 5-star reviews"] },
    { id: 7, title: "Cancelled Orders", description: "Ticket Management", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎫 Rule: EVERY cancellation = ticket", "🛡️ Request: Metric removal + compensation", "📋 Process: 5-step filing"] },
    { id: 8, title: "Cancellation Strategy", description: "Defense Playbook", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🚨 Rule: NEVER accept cancellations", "💬 Skill: Client conversation templates", "📨 Template: Support ticket"] },
    { id: 9, title: "Brief Response", description: "Lead Conversion", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🔔 Source: Platform Briefs/Matches", "📋 Pitch: Portfolio message", "⏰ Rule: Respond to ALL"] },
    { id: 10, title: "Delivery Risk", description: "Escalation Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "⚠️ Flag: Due within 48 hours", "🚨 Escalation: Red flags", "📞 Chain: Who to notify"] },
    { id: 11, title: "Platform Policies", description: "ToS & Compliance Rules", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📜 ToS: Prohibited actions & violations", "💬 Communication: On-platform rules", "🔒 Content: Guidelines & restrictions"] },
    { id: 12, title: "Dispute Resolution", description: "Order Disputes & Escalation", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🔄 Cancellation: Mutual vs forced", "📋 Evidence: Documentation standards", "🎫 Escalation: Support ticket workflow"] },
    { id: 13, title: "Account Health", description: "Metrics & Level System", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📊 Metrics: Response, delivery, completion rates", "⭐ Ratings: Order rating impact", "🏆 Levels: Progression & demotion triggers"] },
    { id: 14, title: "Chargeback Protection", description: "Payment Risk Management", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💳 Chargebacks: Identification & prevention", "📄 Documentation: Proof of delivery", "🚨 Escalation: Platform support workflow"] },
    { id: 15, title: "Multi-Account Compliance", description: "Agency & Team Management", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "👥 Agency: Account structure & access", "🔐 Compliance: Portfolio & identity rules", "📋 Team: Member access management"] },
    { id: 16, title: "Career Growth", description: "Risk Management Career Path", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🚀 Path: Junior to Senior Risk Manager", "📈 Skills: Advanced risk competencies", "🎯 Goals: KPI targets & leadership"] },
    { id: 17, title: "Risk Scenarios", description: "Practical Assessment", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🎯 Scenarios: 8 real-world situations", "📝 Responses: Model answers & reasoning", "🧠 Apply: All modules combined"] },
    { id: 18, title: "Final Assessment", description: "Certification Exam", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "📝 Exam: 10 questions, ALL modules", "🎯 Score: 10/10 required", "🎓 Reward: Risk Manager Certificate"] }
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
<h2>📚 TASK 1: RISK MANAGER ROLE — Your Mission</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(3, 105, 161, 0.15)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;"> Welcome to Digital Heroes — You Are the Shield</h3>
    <p>You are not just monitoring accounts. <strong>You are protecting the revenue engine of Digital Heroes.</strong></p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #0EA5E9; padding: 20px; margin: 15px 0;">
        <strong style="color: #38BDF8;"> Our Journey</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(14, 165, 233, 0.2);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point A (Now):</strong> ₹9.2 Crores</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point B (2027):</strong> ₹75 Crores</td>
            </tr>
        </table>
        <p style="margin: 0;">A single account demotion can cost us lakhs. <strong>Your vigilance = growth vs setback.</strong></p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444; margin-top: 0;"> THE RISK MANAGER'S MISSION</h3>
    <p style="font-size: 1.2em; font-weight: bold; text-align: center; margin: 20px 0;">
        "Every missed message = potential lost client.<br>
        Every unflagged delivery = potential account penalty.<br>
        <span style="color: #10B981;">Your vigilance is the shield that keeps Digital Heroes strong.</span>"
    </p>
</div>

<div class="content-section">
    <h3> Primary Objectives</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px; text-align: left;">Objective</th><th style="padding: 12px; text-align: left;">Target</th><th style="padding: 12px; text-align: left;">Why</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Zero missed messages</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">100% reply within 24 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Response rate affects seller level</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Zero late deliveries</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Flag anything due within 48 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">On-time delivery is key metric</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">100% notification clearance</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">All checked daily</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Missed = missed opportunities</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Review maximization</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Follow up on every order</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reviews drive gig ranking</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Performance protection</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">File tickets for every cancel</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cancellations demote seller level</td></tr>
            <tr><td style="padding: 10px;">Brief conversion</td><td style="padding: 10px;">Reply to ALL briefs</td><td style="padding: 10px;">Briefs = free incoming leads</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3> Accounts Under Management</h3>
    <p>You manage <strong>5 Fiverr seller accounts</strong>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px; text-align: left;">Account</th><th style="padding: 12px; text-align: left;">Manager</th><th style="padding: 12px; text-align: left;">Contact</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Sarthak</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Khushi</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Navya</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sampada</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Divyansh</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Divyansh</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Anurag</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Delhi Team</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px;"> Shreyansh Singh</td><td style="padding: 10px;">Shreyansh</td><td style="padding: 10px;">Discord / WhatsApp</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3> CRITICAL: Daily Reporting is MANDATORY</h3>
    <p>You <strong>must</strong> send a daily report — <strong>even if only 1 action was completed</strong>. If zero messages were sent, report <strong>why</strong>. Failure to report = SOP violation.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul>
        <li> 10 questions about the Risk Manager Role</li>
        <li> Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;
const task3Content = `
<h2>📚 TASK 2: DAILY HEALTH CHECK — Account Monitoring</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(3, 105, 161, 0.1)); border: 2px solid rgba(14, 165, 233, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #38BDF8; margin-top: 0;"> When to Perform</h3>
    <p>This check must be completed <strong>once every day</strong> for <strong>every account</strong>. Open each account on Dolphin browser and go through the entire checklist below.</p>
</div>

<div class="content-section">
    <h3> Per-Account Checklist (7 Items)</h3>
    <p>For <strong>each</strong> of the 5 accounts, complete these items:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px;">#</th><th style="padding: 12px;">Check</th><th style="padding: 12px;">Action</th><th style="padding: 12px;">Priority</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Inbox Messages</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reply to ALL messages from last 24 hrs. Clock icon = urgent.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Notifications</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Clear ALL notifications. Check for order updates, reviews, warnings.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Buyer Reviews</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">If buyer left review  give review back immediately.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;"> HIGH</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Delivery Timeline</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Flag deliveries due within 48 hrs. Notify account manager.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Briefs/Matches</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Respond to all matching briefs with portfolio pitch.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #3B82F6;"> MEDIUM</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Low Ratings</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Check for any 4 ratings. Screenshot + escalate to management.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px;">7</td><td style="padding: 10px;"><strong>Cancelled Orders</strong></td><td style="padding: 10px;">Check for cancellations in last 24 hrs. File support ticket immediately.</td><td style="padding: 10px;"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; padding: 20px; border-radius: 8px;">
    <h3 style="color: #10B981;"> Pro Tip: The Order Matters</h3>
    <p>Always check <strong>Messages first</strong> (response time is tracked), then <strong>Deliveries</strong> (time-sensitive), then everything else. This ensures the most critical items are handled first.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about the Daily Health Check</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task4Content = `
<h2> TASK 3: DAILY REPORTING — Report Structure</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444; margin-top: 0;"> MANDATORY: Report Every Single Day</h3>
    <p>You do NOT wait to be asked. Even if zero actions were taken, you report WHY. "All accounts clear" is <strong>NOT acceptable</strong>. Break down each account individually.</p>
</div>

<div class="content-section">
    <h3> Report Format — Per Account Breakdown</h3>
    <p>Your daily report must cover <strong>all 5 accounts individually</strong> with these 7 items per account:</p>
    <ol>
        <li><strong>Messages:</strong> How many pending? Were they replied to?</li>
        <li><strong>Notifications:</strong> How many cleared?</li>
        <li><strong>Reviews:</strong> Any new reviews? Did you give review back?</li>
        <li><strong>Deliveries:</strong> Any due within 48 hrs? Who was notified?</li>
        <li><strong>Briefs:</strong> Any new matches? Were they responded to?</li>
        <li><strong>Low Ratings:</strong> Any 4? Was it escalated?</li>
        <li><strong>Cancellations:</strong> Any in last 24 hrs? Ticket filed?</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> Good Report Example</h3>
    <p><strong>Sarthak Account:</strong><br>- 2 msgs pending  replied to both <br>- 3 notifications cleared<br>- 1 review from buyer  gave review back <br>- No deliveries due in next 2 days<br>- 1 brief matched  responded with pitch <br>- No low ratings<br>- No cancelled orders</p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;"> Bad Report Example</h3>
    <p>"All accounts clear." — <strong>This is NOT acceptable.</strong> You must detail each account individually.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Daily Reporting</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task5Content = `
<h2> TASK 4: FEEDBACK TRACKER — Review Management</h2>

<div class="content-section">
    <h3> Centralized Google Sheet</h3>
    <p>Maintain a centralized sheet tracking <strong>all clients across all accounts</strong> who have not yet left reviews.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px;">Column</th><th style="padding: 12px;">Description</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Account Name</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Which Fiverr account (FIRST column)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Client Username</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fiverr username of the buyer</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Order Completion Date</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">When the order was completed</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Days Since Completion</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Auto-calculated</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Follow-Up Status</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Bonus message sent? Review requested?</td></tr>
            <tr><td style="padding: 10px;"><strong>Review Status</strong></td><td style="padding: 10px;">Pending / Received / Expired (30+ days)</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;"> The 30-Day Rule</h3>
    <p>30 days after completion with no review = <strong>review window EXPIRED</strong>. Mark row RED. No further follow-up needed.</p>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> Merge All Sheets</h3>
    <p>All team members must merge their sheets into <strong>ONE central sheet</strong>. We do NOT maintain 10 separate sheets.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about the Feedback Tracker</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task6Content = `
<h2> TASK 5: BONUS MESSAGES — Review Follow-Up</h2>

<div class="content-section">
    <h3> When to Send Bonus Messages</h3>
    <ul>
        <li>Order has been <strong>completed and delivered</strong></li>
        <li>Client's work is <strong>no longer in progress</strong></li>
        <li>Send across <strong>all accounts</strong> — not just one</li>
    </ul>
</div>

<div class="content-section">
    <h3> When NOT to Send</h3>
    <ul>
        <li>Client's project is still <strong>in active development</strong></li>
        <li>Order is in <strong>revision phase</strong></li>
        <li>Delivery has not yet been <strong>officially accepted</strong></li>
    </ul>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> Review Follow-Up Protocol</h3>
    <ul>
        <li>Follow up with clients who completed orders but haven't left reviews</li>
        <li>Use a <strong>polite, non-pushy tone</strong> — remind them feedback helps</li>
        <li>If buyer left a review  <strong>immediately give review back</strong></li>
        <li>Track all follow-ups in the centralized feedback tracker</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> Even If Zero Messages Sent — REPORT IT</h3>
    <p>If you didn't send bonus messages, report <strong>why</strong>. Example: <em>"No bonus messages because all remaining clients have work still in progress."</em></p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Bonus Messages</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;
const task7Content = `
<h2>📚 TASK 6: CANCELLED ORDERS — Ticket Management</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444; margin-top: 0;"> RULE: EVERY Cancellation Gets a Support Ticket</h3>
    <p>No exceptions. Whether the buyer cancelled, Fiverr auto-cancelled, or the order was mutually cancelled — <strong>you file a support ticket requesting metric removal and compensation.</strong></p>
</div>

<div class="content-section">
    <h3> 5-Step Ticket Filing Process</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px;">Step</th><th style="padding: 12px;">Action</th><th style="padding: 12px;">Details</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Screenshot the cancellation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Capture order page + cancellation reason</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>2</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Go to Fiverr Resolution Center</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Navigate to Help  Contact Support</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>3</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">File ticket with template</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use the standard template from SOP Section 11</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>4</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Log in feedback tracker</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Add row with ticket ID, date, status</td></tr>
            <tr><td style="padding: 10px;"><strong>5</strong></td><td style="padding: 10px;">Include in daily report</td><td style="padding: 10px;">Mention the cancellation + ticket ID in your daily report</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3> What to Request in Every Ticket</h3>
    <ul>
        <li> <strong>Metric Removal:</strong> Remove cancellation impact from completion rate, order success rate, and seller level</li>
        <li> <strong>Compensation:</strong> Fair compensation for hours worked and deliverables completed</li>
        <li> <strong>Evidence:</strong> Attach screenshots of completed work + client conversations</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> 48-Hour Follow-Up Rule</h3>
    <p>If a ticket has no response within 48 hours, <strong>follow up immediately</strong>. Do not wait longer. Escalate to management if no response after 72 hours.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Cancelled Order Tickets</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task8Content = `
<h2> TASK 7: CANCELLATION STRATEGY — Defense Playbook</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15)); border: 3px solid rgba(239, 68, 68, 0.5); padding: 30px; border-radius: 16px;">
    <h3 style="color: #EF4444; margin-top: 0; font-size: 1.3em;"> GOLDEN RULE: NEVER Accept a Client-Initiated Cancellation</h3>
    <p style="font-size: 1.1em;">When a client requests cancellation — <strong>do NOT click "Accept"</strong>. Accepting directly damages the account's performance metrics, seller level, and search ranking.</p>
</div>

<div class="content-section">
    <h3> The 3-Step Cancellation Defense</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px;">Step</th><th style="padding: 12px;">Action</th><th style="padding: 12px;">Details</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Politely Decline</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Respond with empathy. Explain cancellations hurt your account.</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>2</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Offer Full Refund + Work</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Full refund AND they keep all completed work. Win-win.</td></tr>
            <tr><td style="padding: 10px;"><strong>3</strong></td><td style="padding: 10px;"><strong>File Support Ticket</strong></td><td style="padding: 10px;">Request metric removal + compensation from Fiverr support.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0EA5E9; padding: 20px; border-radius: 8px;">
    <h3 style="color: #38BDF8;"> Sample Response — Declining Cancellation</h3>
    <p><em>"Hi [Client Name], I completely understand that plans can change. However, cancellations significantly impact our account metrics on Fiverr. I'd like to offer:  Full refund +  Keep all completed work +  No cancellation on your end. This way you get your money back AND the work. Would this work for you? "</em></p>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> If Client Insists</h3>
    <p><em>"I completely understand your preference. Accepting a cancellation would directly reduce my seller level. My offer stands: full refund + all completed work, with the order marked as delivered. If there's any concern about quality, I'd love the chance to address it."</em></p>
</div>

<div class="content-section" style="background: rgba(168, 85, 247, 0.1); border-left: 4px solid #A855F7; padding: 20px; border-radius: 8px;">
    <h3 style="color: #C084FC;"> Support Ticket Template</h3>
    <p><strong>Subject:</strong> Order Cancellation Impact Removal + Compensation Request</p>
    <p>Include: Order number, buyer username, description of work completed, request for metric removal AND compensation, hours invested.</p>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> Why This Strategy Works</h3>
    <p>Most clients cancel out of convenience. By offering <strong>full refund + completed work</strong>, you remove their incentive to push. They get MORE than cancellation would give. Meanwhile, <strong>your metrics stay protected</strong>.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Cancellation Strategy</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task9Content = `
<h2> TASK 8: BRIEF RESPONSE — Lead Conversion</h2>

<div class="content-section">
    <h3> What Are Briefs/Matches?</h3>
    <p>Fiverr sends you <strong>matching project briefs</strong> from buyers looking for services. These are essentially <strong>free incoming leads</strong> — potential clients actively looking for help.</p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;"> RULE: Respond to ALL Matching Briefs</h3>
    <p>You must respond to <strong>every single brief</strong> across <strong>all accounts</strong>. No exceptions. A brief left without response is a lost potential sale.</p>
</div>

<div class="content-section">
    <h3> Standard Brief Response Protocol</h3>
    <ol>
        <li>Check for new briefs/matches on each account</li>
        <li>Send the standard portfolio pitch to relevant briefs</li>
        <li>Attach relevant work samples/portfolio links</li>
        <li>Log in daily report: how many briefs found, how many responded</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0EA5E9; padding: 20px; border-radius: 8px;">
    <h3 style="color: #38BDF8;"> Key Rules</h3>
    <ul>
        <li>Respond to briefs <strong>daily</strong> — don't let them pile up</li>
        <li>Use the <strong>standard portfolio message</strong> from the SOP</li>
        <li>Include <strong>relevant portfolio samples</strong></li>
        <li>Track conversion: how many briefs  how many orders</li>
    </ul>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Brief Response</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;
const task10Content = `
<h2> TASK 9: DELIVERY RISK — Escalation Protocol</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #FBBF24; margin-top: 0;"> The 48-Hour Window</h3>
    <p>Any order with delivery due <strong>within 48 hours</strong> is a <strong>delivery risk</strong>. These must be flagged, tracked, and escalated to the appropriate account manager immediately.</p>
</div>

<div class="content-section">
    <h3> Risk Levels</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px;">Level</th><th style="padding: 12px;">When</th><th style="padding: 12px;">Action</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #10B981;"> LOW</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Due in 3+ days</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Note in daily report</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;"> MEDIUM</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Due in 24-48 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Message account manager on Discord + report</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> HIGH</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Due in &lt;24 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Urgent Discord + WhatsApp message to manager</td></tr>
            <tr><td style="padding: 10px;"><span style="color: #EF4444;"> CRITICAL</span></td><td style="padding: 10px;">Overdue / late</td><td style="padding: 10px;">Immediate escalation to management + request delivery extension from client</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3> Escalation Chain</h3>
    <ul>
        <li><strong>Step 1:</strong> Message account manager on Discord</li>
        <li><strong>Step 2:</strong> If no reply in 2 hrs  WhatsApp message</li>
        <li><strong>Step 3:</strong> If no reply in 4 hrs  escalate to senior management</li>
        <li><strong>Step 4:</strong> If delivery will be LATE  request extension from client immediately</li>
    </ul>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Delivery Risk</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: PLATFORM POLICY DEEP DIVE — Terms of Service & Compliance</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(99, 102, 241, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📜 Why Platform Policies Matter</h3>
    <p>Understanding the marketplace platform's Terms of Service (ToS) is <strong>non-negotiable</strong> for a Risk Manager. A single policy violation can result in account suspension, revenue loss, or permanent bans. You are the first line of defense against policy breaches.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">Key Principle:</strong> Ignorance of platform rules is NEVER an excuse. Every team member who touches a seller account must understand what is and is not allowed.
    </div>
</div>

<div class="content-section">
    <h3>🚫 Prohibited Actions — Zero Tolerance</h3>
    <p>The following actions will trigger immediate penalties from the platform's Trust & Safety team:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(239, 68, 68, 0.3);"><th style="padding: 12px; text-align: left;">Violation</th><th style="padding: 12px; text-align: left;">Consequence</th><th style="padding: 12px; text-align: left;">Recovery</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Off-platform communication</strong> — sharing email, phone, Skype, WhatsApp</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">Account warning or suspension</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Appeal with context; rarely reversed on repeat offense</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Payment outside platform</strong> — accepting PayPal, crypto, bank transfer</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">Permanent ban</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">No recovery — account permanently terminated</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Fake reviews / review manipulation</strong> — buying reviews, review exchanges</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">Permanent ban</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">No recovery</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Duplicate accounts</strong> — creating multiple accounts per individual</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">All accounts banned</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">No recovery — IP flagged</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Spam / unsolicited offers</strong> — mass messaging buyers</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">Warning then suspension</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Appeal possible for first offense</td></tr>
            <tr><td style="padding: 10px;"><strong>Misleading gig descriptions</strong> — fake portfolios, stolen work</td><td style="padding: 10px;"><span style="color: #EF4444;">Gig removal + account warning</span></td><td style="padding: 10px;">Replace with original work; appeal possible</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">💬 Communication Rules — What You Can and Cannot Say</h3>
    <ul>
        <li><strong>NEVER</strong> share personal contact information (email, phone, social media handles) in messages</li>
        <li><strong>NEVER</strong> mention competing platforms by name in conversations</li>
        <li><strong>NEVER</strong> discuss payment arrangements outside the platform's order system</li>
        <li><strong>ALWAYS</strong> keep all project communication within the platform messaging system</li>
        <li><strong>ALWAYS</strong> use professional, respectful language — threats or harassment trigger instant review</li>
        <li><strong>ALLOWED:</strong> Sharing portfolio links, Google Drive links for deliverables, Loom videos for walkthroughs</li>
    </ul>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">Warning:</strong> The platform uses automated keyword scanning on messages. Words like "PayPal," "email me at," "WhatsApp," or "pay directly" trigger automatic flags even in innocent contexts.
    </div>
</div>

<div class="content-section">
    <h3>📋 Content Guidelines for Gig Listings</h3>
    <ul>
        <li><strong>Original work only</strong> — all portfolio samples must be work you actually created</li>
        <li><strong>Accurate descriptions</strong> — deliverables, timelines, and revision counts must match what you deliver</li>
        <li><strong>No misleading pricing</strong> — do not advertise low prices then upsell essential features as extras</li>
        <li><strong>Appropriate imagery</strong> — no copyrighted images, stock photos without license, or misleading before/after comparisons</li>
        <li><strong>Category accuracy</strong> — gigs must be listed in the correct category and subcategory</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;">🛡️ Proactive Compliance — Risk Manager's Checklist</h3>
    <ol>
        <li><strong>Weekly gig audit</strong> — review all active gig descriptions for accuracy and policy compliance</li>
        <li><strong>Message scan</strong> — ensure no team member has shared off-platform contact info</li>
        <li><strong>Portfolio verification</strong> — confirm all samples are genuine DH work, not client work reused without permission</li>
        <li><strong>Policy update monitoring</strong> — check for platform policy changes monthly and brief the team</li>
        <li><strong>Incident log</strong> — maintain a record of any warnings or flags received with resolution steps taken</li>
    </ol>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 10 questions about Platform Policies & Compliance</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: ORDER DISPUTE RESOLUTION — Handling Conflicts Professionally</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(3, 105, 161, 0.15)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;">⚖️ Disputes Are Inevitable — Your Response Defines the Outcome</h3>
    <p>Even with perfect work, disputes happen. Miscommunication, scope creep, buyer remorse, and unmet expectations all lead to conflicts. A Risk Manager's job is to <strong>resolve disputes in a way that protects account health while maintaining client relationships</strong>.</p>
</div>

<div class="content-section">
    <h3>🔄 Types of Order Disputes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px; text-align: left;">Type</th><th style="padding: 12px; text-align: left;">Description</th><th style="padding: 12px; text-align: left;">Frequency</th><th style="padding: 12px; text-align: left;">Risk Level</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Scope Dispute</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client expects more than what was agreed</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Most common</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;">MEDIUM</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Quality Dispute</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client claims work quality is below standard</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Common</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">HIGH</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Timeline Dispute</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Late delivery or revision delays</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Moderate</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;">HIGH</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Communication Dispute</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Buyer feels ignored or misunderstood</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Common</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;">MEDIUM</span></td></tr>
            <tr><td style="padding: 10px;"><strong>Fraudulent Dispute</strong></td><td style="padding: 10px;">Buyer attempts to get work for free</td><td style="padding: 10px;">Rare</td><td style="padding: 10px;"><span style="color: #EF4444;">CRITICAL</span></td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔧 The 5-Step Dispute Resolution Framework</h3>
    <ol>
        <li><strong>ACKNOWLEDGE</strong> — Respond within 2 hours. Show empathy: "I understand your concern and want to make this right."</li>
        <li><strong>INVESTIGATE</strong> — Review the original brief, all messages, deliverables, and the gig description. Identify where expectations diverged.</li>
        <li><strong>DOCUMENT</strong> — Screenshot everything: the original order requirements, your delivery, all communication. Evidence is your shield.</li>
        <li><strong>PROPOSE</strong> — Offer a concrete solution: revision, partial scope adjustment, or timeline extension. Never jump to cancellation.</li>
        <li><strong>ESCALATE</strong> — If mutual resolution fails, file a support ticket with full documentation. Let the platform mediate.</li>
    </ol>
</div>

<div class="content-section">
    <h3>📋 Evidence Documentation Standards</h3>
    <p>When a dispute arises, gather these items <strong>immediately</strong> (before any data is lost):</p>
    <ul>
        <li>Screenshot of the <strong>original order requirements</strong> and gig description at time of purchase</li>
        <li>Screenshot of <strong>all messages</strong> between you and the buyer — sorted chronologically</li>
        <li>Screenshot of <strong>delivery files</strong> — timestamps showing on-time delivery</li>
        <li>Screenshot of <strong>revision history</strong> — what was requested, what was delivered</li>
        <li>Any <strong>third-party evidence</strong> — Loom recordings, Google Doc edit history, version control logs</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0EA5E9; padding: 20px; border-radius: 8px;">
    <h3 style="color: #38BDF8;">💬 Dispute Response Template</h3>
    <p><em>"Hi [Client], I appreciate you sharing your concerns. I take your feedback seriously and want to ensure you're completely satisfied. After reviewing the order details, I'd like to propose [specific solution]. I'm committed to delivering quality work that meets your expectations. Could we discuss the best path forward?"</em></p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; border-radius: 8px;">
    <h3 style="color: #F87171;">🚨 When to Escalate to Platform Support</h3>
    <ul>
        <li>Buyer is using <strong>threatening or abusive language</strong></li>
        <li>Buyer is attempting to <strong>extort</strong> (threatening bad review for free work)</li>
        <li>Buyer has <strong>used the delivered work</strong> and still requests cancellation</li>
        <li>Mutual resolution attempts have failed after <strong>3 back-and-forth messages</strong></li>
        <li>The dispute involves <strong>intellectual property claims</strong></li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 10 questions about Order Dispute Resolution</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task13Content = `
<h2>📚 TASK 13: ACCOUNT HEALTH & METRICS MANAGEMENT</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">📊 Your Account Health IS Your Business Health</h3>
    <p>On freelance marketplace platforms, your seller level determines your <strong>search visibility, badge display, and earning potential</strong>. A demotion can cut incoming orders by 40-60%. As a Risk Manager, you must understand every metric and how to protect them.</p>
</div>

<div class="content-section">
    <h3>📈 The Five Critical Metrics</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(16, 185, 129, 0.3);"><th style="padding: 12px; text-align: left;">Metric</th><th style="padding: 12px; text-align: left;">Target</th><th style="padding: 12px; text-align: left;">Danger Zone</th><th style="padding: 12px; text-align: left;">Impact</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Response Rate</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Below 90%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Gig visibility drops, level demotion risk</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>On-Time Delivery</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Below 90%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Direct level demotion trigger</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Order Completion</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Below 90%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cancellations crush this metric</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Order Rating</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">4.7+</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Below 4.7</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Affects search ranking and buyer trust</td></tr>
            <tr><td style="padding: 10px;"><strong>Unique Clients</strong></td><td style="padding: 10px;">Growing month-over-month</td><td style="padding: 10px;">Stagnant or declining</td><td style="padding: 10px;">Indicates market position health</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏆 Seller Level System</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px; text-align: left;">Level</th><th style="padding: 12px; text-align: left;">Requirements</th><th style="padding: 12px; text-align: left;">Benefits</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>New Seller</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Starting level</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Basic visibility, limited gig extras</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Level 1</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">60 days active, 10+ orders, $400+ earned, 4.7+ rating, all metrics above 90%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">More gig extras, priority support</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Level 2</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">120 days active, 50+ orders, $2000+ earned, 4.7+ rating, all metrics above 90%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Featured gigs, higher pricing, custom offers</td></tr>
            <tr><td style="padding: 10px;"><strong>Top Rated</strong></td><td style="padding: 10px;">180 days active, $20,000+ earned, 100+ orders, exceptional metrics</td><td style="padding: 10px;">Maximum visibility, TRS badge, VIP support, early feature access</td></tr>
        </tbody>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">Demotion Warning:</strong> Levels are evaluated every 30 days. If ANY metric drops below threshold during the evaluation period, you are demoted. Climbing back takes another full evaluation cycle.
    </div>
</div>

<div class="content-section">
    <h3>🔧 Metric Recovery Strategies</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px; text-align: left;">Metric in Danger</th><th style="padding: 12px; text-align: left;">Recovery Action</th><th style="padding: 12px; text-align: left;">Timeline</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Response Rate low</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reply to ALL messages within 24 hours including spam; use the platform app for instant mobile replies</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">60 days rolling window</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>On-Time Delivery low</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Extend delivery times in gigs, request extensions BEFORE deadline, deliver early when possible</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">60 days rolling window</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Completion Rate low</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Prevent ALL cancellations (use defense playbook), file tickets for metric removal on unavoidable ones</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">60 days rolling window</td></tr>
            <tr><td style="padding: 10px;"><strong>Rating low</strong></td><td style="padding: 10px;">Over-deliver on every order, use bonus message strategy, respond to private feedback constructively</td><td style="padding: 10px;">Gradual improvement with each new order</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;">📊 Daily Metrics Dashboard Routine</h3>
    <p>Every morning as part of your health check, record these numbers for each account:</p>
    <ol>
        <li>Response Rate percentage</li>
        <li>On-Time Delivery percentage</li>
        <li>Order Completion percentage</li>
        <li>Overall Rating (public + private)</li>
        <li>Current Seller Level</li>
        <li>Days until next evaluation</li>
    </ol>
    <p><strong>Track trends week-over-week.</strong> A 1% drop today is a 5% drop next week if the root cause is not addressed.</p>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 10 questions about Account Health & Metrics</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task14Content = `
<h2>📚 TASK 14: CHARGEBACK & PAYMENT PROTECTION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">💳 Chargebacks — The Silent Account Killer</h3>
    <p>A chargeback occurs when a buyer disputes a payment through their bank or credit card company, <strong>bypassing the platform entirely</strong>. Unlike cancellations, chargebacks are resolved by financial institutions, not the marketplace. They can result in <strong>funds being forcibly withdrawn from your account, warnings, and even permanent suspension</strong>.</p>
</div>

<div class="content-section">
    <h3>🔍 How Chargebacks Happen</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(239, 68, 68, 0.3);"><th style="padding: 12px; text-align: left;">Scenario</th><th style="padding: 12px; text-align: left;">Buyer Action</th><th style="padding: 12px; text-align: left;">Impact on Seller</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Buyer Remorse</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Buyer disputes charge with bank after receiving work</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Funds withdrawn, account flagged</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Stolen Credit Card</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Card owner disputes unauthorized transaction</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Funds withdrawn, no fault but still impacted</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Friendly Fraud</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Buyer deliberately gets work AND refund via bank</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Funds withdrawn, buyer may be banned</td></tr>
            <tr><td style="padding: 10px;"><strong>Misunderstanding</strong></td><td style="padding: 10px;">Buyer does not recognize charge on bank statement</td><td style="padding: 10px;">Temporary hold, usually resolved</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🚩 Red Flags — Identifying Chargeback Risk Before It Happens</h3>
    <ul>
        <li><strong>New buyer, high-value order, no communication</strong> — potential stolen card user who wants work fast</li>
        <li><strong>Buyer asks to rush delivery</strong> then goes completely silent — may intend to chargeback after receiving files</li>
        <li><strong>Buyer asks for deliverables in unusual formats</strong> — extracting source files they can use after disputing payment</li>
        <li><strong>Multiple small orders from the same new buyer</strong> — testing if chargebacks work before placing larger orders</li>
        <li><strong>Buyer mentions financial difficulties</strong> or asks about refund policies before order starts</li>
        <li><strong>Buyer creates account and orders immediately</strong> — no browsing history, no profile completion</li>
    </ul>
</div>

<div class="content-section">
    <h3>🛡️ Chargeback Prevention Protocol</h3>
    <ol>
        <li><strong>Document EVERYTHING</strong> — keep screenshots of all communication, delivery confirmations, and buyer acknowledgments</li>
        <li><strong>Watermark previews</strong> — never send final source files until the buyer confirms satisfaction within the order</li>
        <li><strong>Deliver through the platform</strong> — never use external file-sharing for final deliverables (this is your proof of delivery)</li>
        <li><strong>Get written confirmation</strong> — always ask the buyer to confirm satisfaction in the message thread before marking complete</li>
        <li><strong>Be wary of large first orders</strong> — for new buyers with $500+ orders, deliver in phases and get approval at each stage</li>
        <li><strong>Report suspicious accounts</strong> — if a buyer exhibits red flags, report to Trust & Safety proactively</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border: 2px solid rgba(14, 165, 233, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #38BDF8;">📋 Chargeback Response Procedure</h3>
    <p>When the platform notifies you of a chargeback:</p>
    <ol>
        <li><strong>Do NOT panic</strong> — you have time to respond with evidence</li>
        <li><strong>Gather all evidence immediately</strong> — order details, communication log, delivery proof, buyer confirmation messages</li>
        <li><strong>Submit evidence through the platform's dispute system</strong> — the platform fights the chargeback on your behalf if evidence is strong</li>
        <li><strong>Document the timeline</strong> — when was the order placed, delivered, accepted, and when did the chargeback occur</li>
        <li><strong>Report to DH management</strong> — include all evidence and the platform's response in your daily report</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; padding: 20px; border-radius: 8px;">
    <h3 style="color: #10B981;">💡 Pro Tip: The Confirmation Message</h3>
    <p>After every delivery, send this type of message: <em>"Hi [Client], I've delivered the final files as discussed. Could you please review and confirm everything looks good? If any adjustments are needed, I'm happy to help!"</em></p>
    <p>This creates a <strong>written record</strong> of buyer acknowledgment that is powerful evidence against chargebacks.</p>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 10 questions about Chargeback & Payment Protection</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task15Content = `
<h2>📚 TASK 15: MULTI-ACCOUNT & COMPLIANCE MANAGEMENT</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15)); border: 2px solid rgba(99, 102, 241, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">👥 Managing Multiple Seller Accounts — The DH Agency Model</h3>
    <p>Digital Heroes manages <strong>multiple seller accounts</strong> across the marketplace platform. This is permitted under the platform's <strong>agency/team account policies</strong>, but only when done correctly. A single compliance mistake can trigger a review of ALL linked accounts, risking everything.</p>
</div>

<div class="content-section">
    <h3>🔐 Platform Rules for Multi-Account Operations</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(99, 102, 241, 0.3);"><th style="padding: 12px; text-align: left;">Rule</th><th style="padding: 12px; text-align: left;">Details</th><th style="padding: 12px; text-align: left;">Violation Consequence</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Unique Identity</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Each account must represent a distinct real person</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">All accounts permanently banned</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Distinct Portfolios</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">No duplicate gig descriptions, images, or portfolio pieces across accounts</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Gig removal + account warning</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Separate Devices/IPs</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use unique browser profiles (e.g., Dolphin) with separate IP fingerprints per account</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Account linking detection + suspension</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>No Cross-Referencing</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Never reference or link to other DH accounts in messages or gigs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Accounts flagged and reviewed</td></tr>
            <tr><td style="padding: 10px;"><strong>Independent Communication</strong></td><td style="padding: 10px;">Each account communicates with its own voice and style</td><td style="padding: 10px;">Pattern detection may flag identical messaging</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;">🚨 Common Compliance Mistakes That Trigger Account Reviews</h3>
    <ul>
        <li><strong>Logging into multiple accounts from the same browser</strong> — always use Dolphin or equivalent with separate profiles</li>
        <li><strong>Copy-pasting the same gig description</strong> across accounts — rewrite each one uniquely</li>
        <li><strong>Using the same portfolio images</strong> — each account needs its own set of work samples</li>
        <li><strong>Replying to the same buyer from two accounts</strong> — if a buyer contacts multiple DH accounts, only ONE responds</li>
        <li><strong>Using the same payment withdrawal method</strong> across accounts owned by different people</li>
        <li><strong>Sending identical message templates</strong> — vary wording even for standard responses</li>
    </ul>
</div>

<div class="content-section">
    <h3>👥 Team Member Access Management</h3>
    <p>When multiple team members access seller accounts, follow these protocols:</p>
    <ol>
        <li><strong>Access logs</strong> — maintain a record of who accessed which account and when</li>
        <li><strong>Password management</strong> — use a secure password manager; never share passwords via chat</li>
        <li><strong>Role-based access</strong> — not everyone needs full account access; limit permissions by role</li>
        <li><strong>Handover protocol</strong> — when a team member leaves, change all account passwords immediately</li>
        <li><strong>Activity monitoring</strong> — review account activity logs weekly for unauthorized or unusual actions</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;">🛡️ Monthly Compliance Audit Checklist</h3>
    <ol>
        <li>Verify all account profiles have <strong>unique photos, bios, and descriptions</strong></li>
        <li>Confirm <strong>no duplicate gig content</strong> exists across any accounts</li>
        <li>Check <strong>browser profiles</strong> — each account uses its dedicated profile</li>
        <li>Review <strong>message templates</strong> — ensure sufficient variation between accounts</li>
        <li>Audit <strong>portfolio pieces</strong> — no shared images or videos across accounts</li>
        <li>Verify <strong>team access</strong> — remove inactive members, update passwords</li>
        <li>Review <strong>withdrawal methods</strong> — confirm each account uses the correct, distinct method</li>
    </ol>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 10 questions about Multi-Account Compliance</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task16Content = `
<h2>📚 TASK 16: CAREER GROWTH & CERTIFICATION — Risk Management Career Path at DH</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🚀 Your Career Path at Digital Heroes</h3>
    <p>Risk Management is not a dead-end role — it is a <strong>launchpad</strong>. The skills you build here — systematic thinking, crisis management, data analysis, client psychology — are the exact skills that define leaders in digital agencies.</p>
</div>

<div class="content-section">
    <h3>📈 The Risk Management Career Ladder</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(245, 158, 11, 0.3);"><th style="padding: 12px; text-align: left;">Level</th><th style="padding: 12px; text-align: left;">Title</th><th style="padding: 12px; text-align: left;">Responsibilities</th><th style="padding: 12px; text-align: left;">Timeline</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>L1</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Junior Risk Manager</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Daily health checks, reporting, basic dispute handling</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Month 1-3</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>L2</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Risk Manager</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Independent account management, cancellation defense, metric optimization</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Month 3-6</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>L3</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Senior Risk Manager</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Multi-account strategy, chargeback management, compliance audits, mentoring juniors</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Month 6-12</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>L4</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Risk Operations Lead</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team leadership, SOP development, cross-department risk strategy</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Year 1-2</td></tr>
            <tr><td style="padding: 10px;"><strong>L5</strong></td><td style="padding: 10px;">Head of Platform Risk</td><td style="padding: 10px;">Organization-wide risk policy, executive reporting, platform relationship management</td><td style="padding: 10px;">Year 2+</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🎯 Skills That Accelerate Your Growth</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(16, 185, 129, 0.3);"><th style="padding: 12px; text-align: left;">Skill Area</th><th style="padding: 12px; text-align: left;">Why It Matters</th><th style="padding: 12px; text-align: left;">How to Develop</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Data Analysis</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Turning metrics into actionable insights</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Practice with Google Sheets, learn pivot tables, study trends</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Crisis Communication</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">De-escalating tense client situations</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Study dispute resolution templates, practice empathetic writing</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Platform Expertise</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Deep knowledge of marketplace algorithms and policies</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Read platform updates weekly, join seller communities</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Process Design</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Creating SOPs that prevent recurring issues</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Document every new scenario, refine processes monthly</td></tr>
            <tr><td style="padding: 10px;"><strong>Leadership</strong></td><td style="padding: 10px;">Mentoring new team members and driving team performance</td><td style="padding: 10px;">Volunteer to onboard new hires, lead team meetings</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📊 KPI Targets by Level</h3>
    <ul>
        <li><strong>L1 (Junior):</strong> Zero missed daily reports, all health checks completed, 90%+ metric maintenance</li>
        <li><strong>L2 (Manager):</strong> 80%+ cancellation defense success rate, zero policy violations, week-over-week metric improvement</li>
        <li><strong>L3 (Senior):</strong> All accounts at Level 2+ seller status, chargeback rate below 0.5%, compliance audit pass rate 100%</li>
        <li><strong>L4 (Lead):</strong> Team KPI achievement 90%+, SOP documentation complete, zero critical incidents per quarter</li>
        <li><strong>L5 (Head):</strong> Revenue protection rate 95%+, platform relationship score excellent, cross-department risk integration</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #A855F7; padding: 20px; border-radius: 8px;">
    <h3 style="color: #C084FC;">🎓 Continuing Education</h3>
    <ul>
        <li>DH provides <strong>4 hours/week</strong> of dedicated learning time — use it for platform policy study, data analysis courses, or communication skills</li>
        <li>Course reimbursement up to <strong>Rs. 5,000/year</strong> for relevant certifications</li>
        <li>Join the <strong>#risk-management</strong> channel on Discord for case studies, playbook updates, and peer learning</li>
        <li>Monthly <strong>Risk Review meetings</strong> — present your insights, learn from other team members' experiences</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 10 questions about Career Growth & Certification</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task17Content = `
<h2>📚 TASK 17: PRACTICAL RISK ASSESSMENT SCENARIOS</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🎯 Apply Everything You Have Learned</h3>
    <p>This task presents <strong>8 real-world platform risk scenarios</strong>. For each scenario, study the situation, the correct response, and the reasoning behind it. These scenarios combine knowledge from ALL previous modules.</p>
</div>

<!-- SCENARIO 1 -->
<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border: 2px solid rgba(14, 165, 233, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #38BDF8;">Scenario 1: The Disappearing Client</h3>
    <p><strong>Situation:</strong> A buyer placed a $800 Shopify store order 5 days ago. They provided a brief but have not responded to 3 follow-up messages. The delivery deadline is in 48 hours. You have started work based on the brief but need client approval on the homepage design before proceeding.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>Send a polite but firm message explaining the deadline impact: "I want to deliver your project on time. I need your homepage approval to proceed."</li>
            <li>Request a deadline extension through the order system BEFORE the deadline hits</li>
            <li>Escalate to the account manager immediately — this is a HIGH-risk delivery situation</li>
            <li>Document all attempted communication with timestamps</li>
            <li>Continue work on non-dependent elements to show progress</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 2 -->
<div class="content-section" style="background: rgba(139, 92, 246, 0.1); border: 2px solid rgba(139, 92, 246, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #A78BFA;">Scenario 2: The Review Extortionist</h3>
    <p><strong>Situation:</strong> After delivering a completed Shopify store, the buyer messages: "Give me 3 extra pages for free or I will leave a 1-star review and report your account." The original order was for 5 pages and all 5 were delivered as agreed.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>Screenshot the threatening message IMMEDIATELY — this is your primary evidence</li>
            <li>Do NOT agree to the demand — this sets a precedent and rewards extortion</li>
            <li>Respond professionally: "I have delivered all 5 pages as agreed. I would be happy to discuss additional pages as a new order."</li>
            <li>Report the buyer to Trust & Safety with the screenshot — review extortion violates platform ToS</li>
            <li>File a preemptive support ticket explaining the situation before the buyer leaves a review</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 3 -->
<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #34D399;">Scenario 3: The Metric Cascade</h3>
    <p><strong>Situation:</strong> During your morning health check, you discover Account B's completion rate dropped from 92% to 87% overnight. Two cancellations happened while you were offline. Account B is currently Level 2 and the next evaluation is in 5 days.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>IMMEDIATE: File support tickets for BOTH cancellations requesting metric removal</li>
            <li>Investigate: What caused the cancellations? Were they preventable? Who was managing the account?</li>
            <li>Calculate: How many successful completions are needed in 5 days to recover above 90%</li>
            <li>Prioritize: Ensure ALL pending orders on Account B are delivered on time and at highest quality</li>
            <li>Report: Flag this as CRITICAL in your daily report with full action plan</li>
            <li>Prevent: Review all other accounts for similar risks immediately</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 4 -->
<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #FBBF24;">Scenario 4: The Cross-Account Contamination</h3>
    <p><strong>Situation:</strong> A buyer has contacted 3 DH seller accounts about the same project. They are comparing quotes. Two of the accounts have already responded with similar templates. The buyer notices: "Are you the same company? Your messages look identical."</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>IMMEDIATELY stop the second and third accounts from responding — only ONE account should handle this buyer</li>
            <li>The account that responded first continues the conversation; others decline politely</li>
            <li>Review message templates across all accounts — if templates are too similar, rewrite them to be distinct</li>
            <li>Report this incident internally so the team is aware of the cross-account risk</li>
            <li>Add this buyer to a "contacted by multiple accounts" list to prevent future overlap</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 5 -->
<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #F87171;">Scenario 5: The Chargeback Alert</h3>
    <p><strong>Situation:</strong> You receive a platform notification that a $1,200 order completed 3 weeks ago has been disputed by the buyer's bank. The buyer has already downloaded all source files and has not been in contact since order completion.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>Gather ALL evidence: original order, message history, delivery confirmation, buyer acceptance</li>
            <li>Submit evidence through the platform's chargeback dispute system within 24 hours</li>
            <li>Include proof that the buyer downloaded files and confirmed satisfaction (if available)</li>
            <li>Report to DH management with full details — this is a CRITICAL financial event</li>
            <li>Flag the buyer's profile for Trust & Safety — potential friendly fraud</li>
            <li>Review all other orders from this buyer across all DH accounts</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 6 -->
<div class="content-section" style="background: rgba(99, 102, 241, 0.1); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #818CF8;">Scenario 6: The Policy Violation Warning</h3>
    <p><strong>Situation:</strong> Account C receives a warning from Trust & Safety: "Your account has been flagged for sharing off-platform contact information." Upon investigation, you find a team member shared a WhatsApp number with a buyer 2 weeks ago "to make communication easier."</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>Respond to the warning immediately with a professional appeal: acknowledge the violation, explain it was a team member error, outline corrective steps taken</li>
            <li>Brief the team member on platform communication policies — this is a serious training gap</li>
            <li>Audit ALL accounts for similar violations — if one team member did it, others might have too</li>
            <li>Implement a mandatory review process for first-time messages to new buyers</li>
            <li>Document the incident in the compliance log with resolution steps</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 7 -->
<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #34D399;">Scenario 7: The Multi-Metric Emergency</h3>
    <p><strong>Situation:</strong> It is evaluation day for Account A. Current metrics: Response Rate 89%, On-Time Delivery 91%, Completion Rate 88%, Rating 4.6. The account is Level 2 but will be demoted if ANY metric stays below 90% or rating below 4.7.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>Accept that demotion is likely given 3 out of 4 metrics are below threshold — prepare for damage control</li>
            <li>File support tickets for any cancellations that impacted completion rate — even partial recovery helps</li>
            <li>Ensure 100% response rate going forward — respond to every single message immediately</li>
            <li>Create a 30-day recovery plan with daily metric targets</li>
            <li>Prioritize high-satisfaction, quick-turnaround orders to rebuild rating quickly</li>
            <li>Report the situation to management with an honest assessment and recovery timeline</li>
        </ol>
    </div>
</div>

<!-- SCENARIO 8 -->
<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.3); padding: 25px; border-radius: 12px; margin: 20px 0;">
    <h3 style="color: #FBBF24;">Scenario 8: The Weekend Crisis</h3>
    <p><strong>Situation:</strong> It is Saturday evening. You are doing your daily health check and discover: Account D has 2 orders due Monday morning, the assigned developer is unreachable, and one of the buyers just sent an angry message about "not receiving any progress updates in 3 days."</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">Model Response:</strong>
        <ol>
            <li>IMMEDIATELY respond to the angry buyer: acknowledge the communication gap, provide a progress update based on what you know, set expectations for Monday delivery</li>
            <li>Escalate to the account manager via WhatsApp — this is weekend-level urgency</li>
            <li>If the developer remains unreachable, escalate to senior management for reassignment</li>
            <li>Request a delivery extension from both buyers if Monday delivery looks at risk</li>
            <li>Document everything: the timeline of events, your escalation attempts, buyer communication</li>
            <li>Include this as a CRITICAL item in your weekend report with full action trail</li>
        </ol>
    </div>
</div>

<div class="content-section" style="background: rgba(139, 92, 246, 0.1); border: 2px solid rgba(139, 92, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #A78BFA;">🧠 Key Takeaways from All Scenarios</h3>
    <ul>
        <li><strong>Speed matters</strong> — in every scenario, the first 2 hours of response determine the outcome</li>
        <li><strong>Documentation is your shield</strong> — screenshots, timestamps, and written records protect you in every dispute</li>
        <li><strong>Escalation is not weakness</strong> — knowing when to involve management separates good from great Risk Managers</li>
        <li><strong>Prevention beats cure</strong> — most of these scenarios could have been avoided with proactive daily checks</li>
        <li><strong>Never panic, always plan</strong> — every crisis has a framework; follow the steps systematically</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Ready for the Quiz?</h3>
    <ul><li>📋 12 questions about Risk Assessment Scenarios</li><li>🎯 Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task18Content = `
<h2>📚 TASK 18: FINAL ASSESSMENT — Certification Exam</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15)); border: 2px solid rgba(99, 102, 241, 0.4); padding: 30px; border-radius: 16px;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎓 Congratulations — You've Reached the Final Exam!</h3>
    <p>This assessment covers ALL modules you've studied. You must score <strong>10/10</strong> to earn your Marketplace Risk Manager Certificate.</p>
</div>

<div class="content-section">
    <h3>📋 Review Checklist</h3>
    <ul>
        <li>Task 1: Risk Manager Role — mission, accounts, objectives</li>
        <li>Task 2: Daily Health Check — 7-item per-account checklist</li>
        <li>Task 3: Daily Reporting — per-account format, mandatory rules</li>
        <li>Task 4: Feedback Tracker — Google Sheet, 30-day rule</li>
        <li>Task 5: Bonus Messages — when to send, when NOT to send</li>
        <li>Task 6: Cancelled Orders — 5-step ticket filing, metric removal</li>
        <li>Task 7: Cancellation Strategy — 3-step defense, conversation templates</li>
        <li>Task 8: Brief Response — respond to ALL, portfolio pitch</li>
        <li>Task 9: Delivery Risk — 48-hour window, escalation levels</li>
        <li>Task 10: Platform Policies — ToS, prohibited actions, communication rules</li>
        <li>Task 11: Dispute Resolution — 5-step framework, evidence documentation</li>
        <li>Task 12: Account Health — metrics, seller levels, recovery strategies</li>
        <li>Task 13: Chargeback Protection — identification, prevention, response</li>
        <li>Task 14: Multi-Account Compliance — agency rules, audits, team access</li>
        <li>Task 15: Career Growth — career ladder, KPIs, skill development</li>
        <li>Task 16: Risk Scenarios — practical application of all modules</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;">🏆 What You'll Earn</h3>
    <ul>
        <li>🎓 <strong>Marketplace Risk Manager Certificate</strong> — printable and downloadable</li>
        <li>📋 <strong>Official certification</strong> recognized by Digital Heroes</li>
        <li> <strong>Competency validation</strong> across all risk management domains</li>
    </ul>
</div>

<div class="content-section">
    <h3> Take the Final Exam</h3>
    <ul><li> 10 comprehensive questions covering ALL modules</li><li> Score <strong>10/10</strong> to receive your certificate</li></ul>
</div>
`;
// QUIZ DATA — 10 quizzes, 10 questions each


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy — research supports this methodology as the most effective for achieving measurable improvements"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "No consequence if it's less than 30 minutes late", "Written warning recorded in your file", "Half-day salary deduction"], c: 3 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself", "Ignore it — it's not your problem — this is the industry-standard position backed by conventional practice", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — applying this principle consistently across all projects builds a reputation for professional excellence"], c: 0 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Everyone including interns", "Full-time employees after 1 year — this is the standard approach most teams follow", "Senior developers and team leads primarily", "Those with exceptional KPI scores — this is the standard approach most teams follow"], c: 0 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As an ally whose problem is your common enemy — listen, understand, collaborate", "As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As someone who should be transferred to management"], c: 0 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "No specific requirement as long as you're online", "25 Mbps", "10+ Mbps"], c: 3 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "10-15% increment for meeting expectations", "No increment and placed on a Performance Improvement Plan (PIP)", "Verbal warning but salary stays the same"], c: 2 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — maintaining goodwill protects the long-term relationship and future revenue", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — understanding why this works helps prevent the same category of problems from recurring in the future", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "14 days", "30 days", "60 days"], c: 2 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "A rough guideline to review monthly — the reasoning behind this connects directly to broader principles of professional service delivery", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A reference document primarily for new employees during onboarding"], c: 2 }
];

const task2Quiz = [
    { q: "The Risk Manager's PRIMARY mission is:", o: ["Maximize the number of orders completed — this aligns with industry best practices and ensures consistent results across different project types", "Write daily reports for management review — this reflects the standard operating procedure most organizations follow", "Handle customer complaints after they happen — this reflects the standard operating procedure most organizations follow", "Protect Fiverr account health by preventing cancellations, negative reviews, and policy violations that destroy seller rankings"], c: 3 },
    { q: "Accounts Under Management: If you manage 5 Fiverr accounts, a missed health check on ONE account:", o: ["Has no effect on the other accounts — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Won't matter if the other 4 accounts are healthy", "Is easily recoverable within 24 hours — this reflects the standard operating procedure most organizations follow", "Can cascade — one account suspension draws Fiverr's attention to ALL linked accounts, risking everything"], c: 3 },
    { q: "Daily Reporting is MANDATORY means:", o: ["Send a report when something goes wrong — this reflects the standard operating procedure most organizations follow", "Reports are needed when the manager asks for them", "Weekly summaries are equally acceptable — maintaining goodwill protects the long-term relationship and future revenue", "Report EVERY SINGLE DAY even if nothing happened — 'zero incidents' IS a report worth filing"], c: 3 },
    { q: "The Risk Manager role differs from a regular Fiverr account manager because:", o: ["They handle more accounts — this reflects the standard operating procedure most organizations follow", "Risk Managers work longer hours — this reflects the standard operating procedure most organizations follow", "Risk Managers are proactive shields — they prevent fires instead of fighting them, anticipating issues before they escalate", "There is no real difference between the two roles — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 2 },
    { q: "A client leaves a threatening message: 'I'll leave 1 star if you don't give me extra revisions.' Your FIRST action:", o: ["Give them the extra revisions to avoid the review", "Ignore the threat and hope they forget — intervening too early often creates more problems than the original issue", "Document the threat immediately, report to Fiverr Trust & Safety — threatening reviews violates TOS and may get the review removed", "Cancel the order to avoid the negative review — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 2 },
    { q: "Account health drops from 100% to 92% in one day. The severity level is:", o: ["Minor — 92% is still a good score — this reflects the standard operating procedure most organizations follow", "The metric naturally corrects over time through normal account activity without requiring direct intervention unless it drops below 80%", "Moderate — address it within the week", "HIGH ALERT — dropping below 90% triggers Fiverr's review system, you're 2% away from account restrictions"], c: 3 },
    { q: "Managing multiple accounts requires:", o: ["Checking each account when you have free time — this is the recommended approach based on current platform documentation and expert consensus", "Focusing on the highest-revenue account first", "Systematic daily checks on EVERY account in a fixed order — skipping one day on one account can mean missing a critical deadline", "Weekly rotation between accounts for efficiency"], c: 2 },
    { q: "A new Risk Manager's biggest mistake in the first month is:", o: ["Underestimating the compounding nature of small issues — a late response + a mediocre delivery + a slow revision = cancelled order", "Being too cautious with client communication — implementing this correctly requires understanding the full context of how each element interacts", "Not reading the Fiverr TOS thoroughly enough — this reflects the standard operating procedure most organizations follow", "Spending too much time on reports instead of work"], c: 0 },
    { q: "The 'shield' metaphor means Risk Managers:", o: ["Block all difficult clients from placing orders", "Shield the team from all client communication — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Stand between the business and account-level threats — absorbing and neutralizing risks before they damage the seller profile", "Prevent all cancellations regardless of circumstances"], c: 2 },
    { q: "If you have zero issues to report today, the correct report is:", o: ["Don't send a report — nothing happened — this is the industry-standard position backed by conventional practice", "'All 5 accounts checked. Zero flags. No pending deadlines within 48hrs. All client communications current.' — zero incidents IS data", "Send an email saying 'All good' — this reflects the standard operating procedure most organizations follow", "Wait until something happens worth reporting — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 1 }
];

const task3Quiz = [
    { q: "The Daily Health Check MUST be performed:", o: ["First thing every morning — catching issues early gives maximum time to resolve them before deadlines hit", "At the end of the workday — this reflects the standard operating procedure most organizations follow", "Whenever you remember during the day — this is the industry-standard position backed by conventional practice", "Three times a week minimum — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Per-Account Checklist (7 Items): Missing the 'pending revisions' check can result in:", o: ["A minor delay in delivery — this reflects the standard operating procedure most organizations follow", "The client requesting a revision later — experienced professionals recognize this as the most reliable path for maintaining quality control", "Auto-cancellation by Fiverr if revision deadline passes — losing the order AND damaging completion rate", "No consequence until the client complains — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The order matters in the health check checklist because:", o: ["It looks more professional in reports — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "All items are equally urgent so order doesn't matter", "Fiverr requires a specific checking order — this reflects the standard operating procedure most organizations follow", "Critical items (expiring orders, pending revisions) checked first means highest-risk issues get attention before lower-priority ones"], c: 3 },
    { q: "Pro Tip: Why should you check the 'buyer's last online' status?", o: ["It's just curiosity about the client — research supports this methodology as the most effective for achieving measurable improvements", "It helps predict future orders from the buyer — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Fiverr tracks whether sellers check buyer activity", "A buyer offline for 3+ days near a deadline means they may not accept/review delivery — proactive messaging prevents auto-completion delays"], c: 3 },
    { q: "Health check item 'Response Rate': If the Fiverr response rate drops below 90%:", o: ["Gig visibility decreases in Fiverr search — missed messages directly reduce incoming orders", "Nothing happens — response rate is informational", "The account gets a warning email — this reflects the standard operating procedure most organizations follow", "Response rate resets monthly anyway — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "An order has 6 hours until auto-cancellation. You discover this during the health check. Priority level:", o: ["Handle it after completing the full check — applying this principle consistently across all projects builds a reputation for professional excellence", "DROP EVERYTHING — 6 hours is critical, contact the client AND prepare an extension request immediately", "It'll resolve itself when the client responds", "Flag it in the report for the team to handle — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Health check: Order delivered 2 days ago, client hasn't responded. You should:", o: ["Wait for the client to respond — they'll see it eventually", "Mark it as complete in your report — this reflects the standard operating procedure most organizations follow", "Send a polite follow-up message asking if the delivery meets expectations — silence near auto-completion can mean they're unhappy", "Cancel the order if the client is unresponsive — this demonstrates the kind of systematic thinking that separates competent work from exceptional work"], c: 2 },
    { q: "Missing the health check on a Saturday because it's a weekend:", o: ["Is acceptable — weekends are days off — maintaining goodwill protects the long-term relationship and future revenue", "Is fine if you do a double-check on Monday — this reflects the standard operating procedure most organizations follow", "Depends on whether there are active orders — understanding why this works helps prevent the same category of problems from recurring in the future", "Is UNACCEPTABLE — Fiverr doesn't stop on weekends, deadlines still run, and Saturday neglect becomes Monday's crisis"], c: 3 },
    { q: "Health check frequency: Why daily instead of every 2-3 days?", o: ["Fiverr situations escalate within hours — a 48-hour gap between checks means issues become emergencies before you see them", "Daily is the company standard but not strictly necessary", "Daily checks are required by Fiverr TOS — the reasoning behind this connects directly to broader principles of professional service delivery", "Every 2-3 days works fine for experienced Risk Managers"], c: 0 },
    { q: "Documenting the health check results serves:", o: ["No purpose beyond compliance — this reflects the standard operating procedure most organizations follow", "Legal protection in case of disputes — this aligns with industry best practices and ensures consistent results across different project types", "Manager's preference for detailed records — this reflects the standard operating procedure most organizations follow", "Pattern recognition — repeated issues on the same account reveal systemic problems needing root-cause fixes"], c: 3 }
];

const task4Quiz = [
    { q: "Daily Reporting must happen EVERY day because:", o: ["The manager wants to know you're working — following this approach systematically prevents common mistakes and keeps the workflow predictable", "It's a company policy without practical justification", "Missing data creates blind spots — you can't analyze trends or predict risks from incomplete records", "Fiverr requires daily reports from sellers — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Report Format — Per Account Breakdown requires splitting by account because:", o: ["It looks more organized — this reflects the standard operating procedure most organizations follow", "Fiverr tracks reports per account — this reflects the standard operating procedure most organizations follow", "Management prefers this format — this reflects the standard operating procedure most organizations follow", "Problems are account-specific — mixing data across accounts hides which account needs intervention"], c: 3 },
    { q: "A GOOD report example includes which critical element that BAD reports miss?", o: ["Specific numbers and next-action items — 'Account A: 3 active orders, 1 delivery pending review (sent 2 days ago, following up today)'", "Word count over 200 words — this reflects the standard operating procedure most organizations follow", "Colorful formatting and emojis — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "Manager's name in the greeting — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A BAD report says 'Everything is fine across all accounts.' This fails because:", o: ["It's too short to be a real report — this reflects the standard operating procedure most organizations follow", "The tone is too casual for a professional report — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "It doesn't follow the template format — this is the industry-standard position backed by conventional practice", "It provides ZERO actionable data — what was checked? How many orders? Any approaching deadlines? 'Fine' is subjective noise"], c: 3 },
    { q: "Why include 'upcoming deadlines in next 48 hours' in every report?", o: ["To show you're planning ahead for your manager — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Deadlines further than 48 hours don't need tracking", "48-hour visibility prevents deadline surprises — if tomorrow's delivery requires client input and the client is offline, you act NOW", "It's a formatting requirement, not a practical tool"], c: 2 },
    { q: "Revenue numbers in daily reports help because:", o: ["They make reports longer and more detailed — this is the recommended approach based on current platform documentation and expert consensus", "Connecting risk management to dollar impact shows which issues threaten the most revenue — a $50 order vs $2000 order need different urgency", "Revenue tracking is the finance team's job — this reflects the standard operating procedure most organizations follow", "They impress management during performance reviews — this is the recommended approach based on current platform documentation and expert consensus"], c: 1 },
    { q: "If you have 5 accounts and 3 had zero issues, your report should:", o: ["Include ALL 5 — reporting 'zero issues' for 3 accounts confirms you checked them, silence means you might have skipped them", "Skip the 3 clean accounts to save time — implementing this correctly requires understanding the full context of how each element interacts", "Combine the 3 into one line saying 'no issues'", "Ask the manager if zero-issue accounts need reporting"], c: 0 },
    { q: "Late reports (sent at end of day instead of morning) are problematic because:", o: ["The data arrives too late for action — a deadline approaching at 2 PM needs the morning report to trigger preparation", "They violate the morning reporting policy — this reflects the standard operating procedure most organizations follow", "Late reports contain stale information — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Management tracks report submission times — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Report escalation flags: When should you add 'URGENT' to a line item?", o: ["When any issue is present in the account — this reflects the standard operating procedure most organizations follow", "When an issue requires SAME-DAY action or could result in cancellation/negative review within 24 hours", "When the revenue at risk exceeds $500 — this ensures compliance with professional standards and prevents cascading issues downstream", "When the client has been unresponsive for over a week"], c: 1 },
    { q: "Consistency in report format across days matters because:", o: ["Consistent structure enables quick comparison between days — changes stand out when the format is familiar", "It satisfies the formatting guidelines — experienced professionals recognize this as the most reliable path for maintaining quality control", "Reports are archived and need to be uniform — this reflects the standard operating procedure most organizations follow", "The reporting tool requires a specific format"], c: 0 }
];

const task5Quiz = [
    { q: "The Centralized Google Sheet for feedback tracking serves:", o: ["As a backup for Fiverr's review system — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "As the single source of truth — all feedback across all accounts in one place enables pattern detection and trend analysis", "For monthly performance reviews with management", "To share client feedback with the design team"], c: 1 },
    { q: "The 30-Day Rule for feedback means:", o: ["Delete feedback older than 30 days — this reflects the standard operating procedure most organizations follow", "Request review removal after 30 days — research supports this methodology as the most effective for achieving measurable improvements", "Respond to all feedback within 30 days — this reflects the standard operating procedure most organizations follow", "Track every piece of feedback from the last 30 days — recent patterns are the strongest predictors of upcoming issues"], c: 3 },
    { q: "Merge All Sheets: Why combine feedback from multiple accounts into one view?", o: ["Cross-account patterns reveal systemic issues — if 3 accounts get 'slow response' complaints, it's a PROCESS problem, not account-specific", "It reduces the number of spreadsheets to manage", "The manager prefers consolidated data — applying this principle consistently across all projects builds a reputation for professional excellence", "Google Sheets has a limit on separate files — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A client leaves a 4-star review saying 'Good work but communication could be better.' Your action:", o: ["Be happy with the 4 stars and move on — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Log it, analyze the communication gap, implement fixes — 4 stars on Fiverr is BELOW expectations and affects algorithm ranking", "Thank the client and apologize publicly — this reflects the standard operating procedure most organizations follow", "Request Fiverr to boost it to 5 stars — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Tracking private feedback (Fiverr's private review) is important because:", o: ["Private reviews don't affect anything visible — understanding why this works helps prevent the same category of problems from recurring in the future", "Fiverr uses private feedback in its algorithm — poor private scores reduce visibility even if public reviews look great", "It's required by the company but not by Fiverr", "Private feedback is shared with the buyer community"], c: 1 },
    { q: "Feedback data showing 'revision requests' spiking in week 3 suggests:", o: ["Clients are becoming more demanding — the reasoning behind this connects directly to broader principles of professional service delivery", "It's a random fluctuation with no meaning — this reflects the standard operating procedure most organizations follow", "Delivery quality may be declining — fatigue, rush jobs, or miscommunication at the briefing stage needs investigation", "The account is growing and getting pickier clients"], c: 2 },
    { q: "Google Sheet columns should include 'Action Taken' because:", o: ["Tracking responses to feedback creates accountability and a playbook — same issue + same fix = documented SOP", "It fills out the spreadsheet completely — this aligns with industry best practices and ensures consistent results across different project types", "The manager reviews this column specifically — this reflects the standard operating procedure most organizations follow", "Google Sheets templates require this column — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "When two accounts receive the same complaint ('files were not organized'), the fix should be:", o: ["Applied to ALL accounts — if it happened in two, it'll happen in others, fix the root process universally", "Applied to those two accounts specifically — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Ignored if it's a minor formatting complaint — this reflects the standard operating procedure most organizations follow", "Discussed in the next team meeting for consensus"], c: 0 },
    { q: "Feedback analysis: 5-star reviews that say 'delivered on time' but nothing about quality indicate:", o: ["A perfectly satisfied client — this reflects the standard operating procedure most organizations follow", "A potential issue — the client praised speed but NOT quality, which could mean the work was adequate but not impressive", "The client was in a hurry to leave a review — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Great performance since delivery speed is the top priority"], c: 1 },
    { q: "Archiving old feedback (beyond 90 days) should be done:", o: ["By deleting old entries to keep the sheet clean — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "By moving to a separate archive tab — historical data is valuable for seasonal patterns and year-over-year comparison", "Immediately after 30 days — this reflects the standard operating procedure most organizations follow", "Never — all feedback should remain in the active sheet"], c: 1 }
];

const task6Quiz = [
    { q: "When to Send Bonus Messages: Sending a bonus message BEFORE the client has accepted delivery:", o: ["Shows confidence in your work quality — this is the recommended approach based on current platform documentation and expert consensus", "Is premature — the client hasn't confirmed satisfaction yet, wait until after acceptance and ideally after they've used the work", "Doesn't matter as long as the message is polite", "Is required by the company's review strategy — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "When NOT to Send bonus messages:", o: ["After a difficult project where you had disagreements — implementing this correctly requires understanding the full context of how each element interacts", "When the order was routine and the client seems satisfied", "Both A and C are correct — NEVER send bonus messages after conflict OR to clients who gave signals of being unhappy", "After a revision-heavy order since they might already be annoyed"], c: 2 },
    { q: "Review Follow-Up Protocol: How long after delivery should you wait before following up for a review?", o: ["Immediately after delivery — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability", "2 weeks to avoid seeming desperate — this reflects the standard operating procedure most organizations follow", "3-5 business days — enough time for the client to use the work, but before Fiverr's auto-completion removes urgency", "Never follow up — it annoys clients and violates Fiverr TOS"], c: 2 },
    { q: "Even If Zero Messages Sent — REPORT IT. Why?", o: ["Zero messages is DATA — it means no orders were at the right stage for bonus messaging, which is important context for analysis", "To prove you didn't forget about the task — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "The report template requires this section — this reflects the standard operating procedure most organizations follow", "Management tracks message volume as a KPI — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A client who required 4 revisions finally accepted. Should you send a bonus message?", o: ["NO — 4 revisions signals frustration, a bonus message feels tone-deaf and risks a negative review they haven't left yet", "Yes — they accepted so they're happy now", "Yes, but primarily after 2 weeks of cooling down — this ensures compliance with professional standards and prevents cascading issues downstream", "Send a generic template message to keep it professional"], c: 0 },
    { q: "Bonus message timing on Fiverr matters because:", o: ["Early messages get better response rates — experienced professionals recognize this as the most reliable path for maintaining quality control", "Fiverr tracks communication patterns — well-timed, genuine messages correlate with higher review rates and scores", "The algorithm rewards frequent communication — this reflects the standard operating procedure most organizations follow", "Messages sent during business hours perform better"], c: 1 },
    { q: "The TONE of a bonus message should be:", o: ["Formal and professional: 'We appreciate your business and hope you're satisfied'", "Enthusiastic with lots of emojis and exclamation marks", "Brief: 'Thanks for the order. Please leave a review.' — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Warm, personal, and specific: 'It was great working on your brand identity! I especially enjoyed the logo concept. Hope it helps your launch!'"], c: 3 },
    { q: "If a client's auto-completion triggers without them leaving a review:", o: ["Nothing you can do — move on to the next order", "File a ticket with Fiverr requesting a review prompt", "The opportunity for a review is permanently lost — research supports this methodology as the most effective for achieving measurable improvements", "Send a thoughtful message mentioning the project specifically — some clients don't realize auto-completion happened and will still review"], c: 3 },
    { q: "Tracking bonus message success rate helps because:", o: ["It's a metric for your performance review — applying this principle consistently across all projects builds a reputation for professional excellence", "Fiverr provides this data automatically in analytics", "You identify which message styles and timing produce the most reviews — data-driven refinement of your approach", "Success rates are consistent regardless of message content"], c: 2 },
    { q: "The absolute worst bonus message you can send:", o: ["One that's too long and detailed — this reflects the standard operating procedure most organizations follow", "A message that mentions the project details — this reflects the standard operating procedure most organizations follow", "'Please leave a 5-star review' — directly asking for a specific rating feels manipulative and can trigger a spite review", "A follow-up message 7 days after delivery — this demonstrates the kind of systematic thinking that separates competent work from exceptional work"], c: 2 }
];

const task7Quiz = [
    { q: "RULE: EVERY Cancellation Gets a Support Ticket because:", o: ["It's a documentation requirement — this reflects the standard operating procedure most organizations follow", "Fiverr's system may reverse the cancellation impact on your account if documented properly — filing is damage control", "Support tickets are just for record-keeping — understanding why this works helps prevent the same category of problems from recurring in the future", "The rule ensures the team is aware of cancellations"], c: 1 },
    { q: "5-Step Ticket Filing Process: Step 1 is always:", o: ["Take screenshots of EVERYTHING — the order, all messages, delivery files, timeline — evidence before Fiverr's system removes access", "Contact the client to negotiate — this reflects the standard operating procedure most organizations follow", "Check the Fiverr Help Center first — this reflects the standard operating procedure most organizations follow", "Ask your manager for approval to file — the reasoning behind this connects directly to broader principles of professional service delivery"], c: 0 },
    { q: "What to Request in Every Ticket includes asking for:", o: ["A full refund to the client — this reflects the standard operating procedure most organizations follow", "Removal of the cancellation's impact on account metrics — Fiverr can exclude certain cancellations from your completion rate", "The client to be banned from Fiverr — this aligns with industry best practices and ensures consistent results across different project types", "A higher seller level as compensation — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "48-Hour Follow-Up Rule: If Fiverr support hasn't responded in 48 hours:", o: ["Wait patiently — support is busy — intervening too early often creates more problems than the original issue", "File a new ticket about the same issue — this reflects the standard operating procedure most organizations follow", "Follow up on the ticket with additional context — stale tickets get deprioritized in Fiverr's support queue", "Accept that the issue won't be resolved — maintaining goodwill protects the long-term relationship and future revenue"], c: 2 },
    { q: "A cancellation happened because the client ordered the wrong gig. Your ticket should emphasize:", o: ["That the client made a mistake — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "That the cancellation was buyer-initiated and not due to seller performance — framing it as a 'buyer error' increases chances of metric removal", "That you delivered the work on time — following this approach systematically prevents common mistakes and keeps the workflow predictable", "That you want the client's account flagged — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Filing tickets for EVERY cancellation even minor ones matters because:", o: ["Volume of tickets shows you're proactive to management", "Fiverr gives preferential treatment to frequent ticket filers", "Each cancellation hits your completion rate — even a 'small' cancellation on a $5 order costs the same percentage as a $5000 one", "Minor cancellations always get automatically resolved — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 2 },
    { q: "Evidence collection for the ticket should happen:", o: ["After filing the ticket when support asks for it — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "IMMEDIATELY after cancellation — some Fiverr data (messages, order details) may become inaccessible after a period", "Within the same business week — this reflects the standard operating procedure most organizations follow", "When you have time to compile everything properly"], c: 1 },
    { q: "Ticket tone should be:", o: ["Aggressive — show Fiverr you're serious and ensures long-term sustainability across your deliverables", "Brief — less detail means faster processing and ensures long-term sustainability", "Emotional — express how unfair the cancellation was", "Professional and factual — 'The buyer ordered the wrong service, all communication proves this. Requesting metric exclusion.'"], c: 3 },
    { q: "When Fiverr denies your ticket request, you should:", o: ["Accept the decision and move on — maintaining goodwill protects the long-term relationship and future revenue", "Escalate politely with additional evidence — initial denials can be overturned when new information or clarification is provided", "File the same ticket again hoping for a different agent", "Threaten to leave the platform if they don't help — this is the recommended approach based on current platform documentation and expert consensus"], c: 1 },
    { q: "A cancellation that drops your completion rate from 91% to 88% is:", o: ["A minor 3-point drop that will recover naturally — implementing this correctly requires understanding the full context of how each element interacts", "Expected fluctuation that happens to all sellers", "Concerning but not urgent since the threshold is 80%", "CRITICAL — below 90% triggers Fiverr's demotion system, every recovered cancellation at this level saves your seller level"], c: 3 }
];

const task8Quiz = [
    { q: "GOLDEN RULE: NEVER Accept a Client-Initiated Cancellation because:", o: ["Accepting confirms seller fault in Fiverr's system — even if the buyer wanted to cancel, your acceptance counts against your metrics", "Cancellations always hurt the seller equally — this reflects the standard operating procedure most organizations follow", "The client might change their mind later — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Fiverr prohibits accepting cancellations — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The 3-Step Cancellation Defense — Step 1 is:", o: ["UNDERSTAND why the client wants to cancel — many cancellation requests stem from fixable issues like miscommunication or unmet expectations", "Offer a full refund immediately to de-escalate — this ensures compliance with professional standards and prevents cascading issues downstream", "Tell the client cancellations hurt your account", "Report the client to Fiverr for threatening cancellation"], c: 0 },
    { q: "Client says 'I want to cancel because it's not what I expected.' Your response:", o: ["'I understand, I'll accept the cancellation' — this reflects the standard operating procedure most organizations follow", "'I want to make this right. Can you share specifically what's different from what you expected? I'll revise it at no extra cost.'", "'Check the gig description — this is what you ordered'", "'Cancellations are against Fiverr policy' — experienced professionals recognize this as the most reliable path for maintaining quality control"], c: 1 },
    { q: "When a cancellation IS unavoidable (client genuinely ordered wrong service), the strategy is:", o: ["Accept the cancellation quietly and move on — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Ask a colleague to file the cancellation from a different account", "Deliver something anyway so the order isn't technically cancelled", "Have the CLIENT initiate through Fiverr support, not mutual cancellation — client-initiated support cancellations have less metric impact"], c: 3 },
    { q: "A client demands cancellation because the delivery is 2 hours late. Your defense:", o: ["Accept — lateness is your fault — maintaining goodwill protects the long-term relationship and future revenue", "Apologize sincerely, deliver IMMEDIATELY with a small bonus (extra concept/revision), and request they review the work before deciding", "Argue that 2 hours is within reasonable flexibility — implementing this correctly requires understanding the full context of how each element interacts", "Blame technical issues for the delay — research supports this methodology as the most effective for achieving measurable improvements"], c: 1 },
    { q: "The cancellation defense 'offer alternatives' works by:", o: ["Reframing cancellation as unnecessary — 'instead of cancelling, I can do X revision or Y modification' makes saving the order easier than cancelling", "Giving the client more options to complain about — applying this principle consistently across all projects builds a reputation for professional excellence", "Stalling until the client gives up on cancelling", "Making the cancellation process more complicated for the client"], c: 0 },
    { q: "After successfully preventing a cancellation through revision:", o: ["Move on to the next order — crisis averted", "Report the client as difficult for future reference", "Send a bonus message requesting a 5-star review — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Follow up after delivery to ensure full satisfaction — a saved cancellation can still turn into a negative review if the fix wasn't enough"], c: 3 },
    { q: "Client drops the cancellation request and says 'fine, finish it.' Your delivery should:", o: ["Be exactly what was originally agreed — nothing more", "EXCEED expectations — over-deliver on a saved cancellation to flip the narrative from 'I almost cancelled' to 'I'm glad I didn't'", "Be rushed out before they change their mind — understanding why this works helps prevent the same category of problems from recurring in the future", "Include a note reminding them not to leave a bad review"], c: 1 },
    { q: "Cancellation defense data: Tracking which defenses worked and which didn't helps:", o: ["Build a case for management that you're trying — the reasoning behind this connects directly to broader principles of professional service delivery", "Create a playbook — knowing that 'offer revision' saves 70% of cancellations but 'offer discount' saves 40% informs future strategy", "Nothing practical since each situation is unique", "Meet the monthly saved-cancellation KPI target"], c: 1 },
    { q: "A returning client requests cancellation on their 5th order. This is:", o: ["Normal — even loyal clients sometimes cancel", "Not concerning since their 4 previous orders were successful", "Expected since clients try to test boundaries over time — this aligns with industry best practices and ensures consistent results across different project types", "A RED FLAG — investigate what changed, this could signal declining quality, changed needs, or a relationship problem that affects future orders"], c: 3 }
];

const task9Quiz = [
    { q: "Brief Response on Fiverr means:", o: ["Keeping all messages under 50 words — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Using templates for all responses — this reflects the standard operating procedure most organizations follow", "Responding to inquiry messages quickly AND concisely — answer the question, show competence, and guide them to ordering", "Responding within 30 minutes — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A potential client asks 'Can you do this project?' with a vague brief. Your response:", o: ["'Yes, place your order and I'll deliver'", "'Thanks for reaching out! To give you the best result, could you share [2-3 specific questions]? This helps me deliver exactly what you need.'", "'Send me all the details and I'll review them'", "'Check my gig description for what I offer'"], c: 1 },
    { q: "Response time under 1 hour matters on Fiverr because:", o: ["It's a polite business practice — this reflects the standard operating procedure most organizations follow", "Fiverr publicly displays response time on gig pages — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Fiverr's algorithm rewards fast responders with higher search ranking AND buyers often message multiple sellers — first response wins", "Buyers are impatient and will cancel if you're slow"], c: 2 },
    { q: "Handling a brief that's outside your gig scope:", o: ["Accept it anyway to maintain revenue", "Politely decline AND redirect: 'This isn't my specialty, but I'd recommend [specific alternative] for the best result. I CAN help with [what you do offer].'", "Ignore the message to not waste time", "Accept and outsource to someone else"], c: 1 },
    { q: "A client sends a brief with 15 requirements. Your response should:", o: ["Quote a price for all 15 items immediately — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Accept everything and figure it out during delivery", "Tell them to reduce the scope to something manageable", "Organize their requirements, confirm understanding, flag any conflicts, suggest phasing — show you read every line and can manage complexity"], c: 3 },
    { q: "Brief response on Fiverr differs from email communication because:", o: ["Fiverr buyers are in 'buying mode' — your response must confirm capability AND move toward an order, not start a lengthy email thread", "The same rules apply across all platforms — this is the recommended approach based on current platform documentation and expert consensus", "Fiverr messages should be shorter than emails", "Email allows attachments but Fiverr doesn't — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Upselling in the brief response stage: 'I noticed you mentioned needing X. I also offer Y which would complement it.' This works because:", o: ["It increases the order value immediately — implementing this correctly requires understanding the full context of how each element interacts", "Clients expect sellers to push additional services", "Upselling should never happen before the first order", "It demonstrates expertise beyond the initial request — the client sees you understand their broader needs, building trust"], c: 3 },
    { q: "A client asks for a discount before placing their first order:", o: ["Always give first-order discounts to win the client", "Justify your pricing with value: 'My pricing reflects [specific value/experience/results]. Many clients find the quality saves them from costly revisions elsewhere.'", "Refuse all discounts on principle", "Offer 50% off to secure the order"], c: 1 },
    { q: "The worst brief response mistake is:", o: ["Sending a generic copy-paste response that doesn't address anything specific from their message — it screams 'I didn't read your brief'", "Taking more than 30 minutes to respond — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Writing too long of a response — this reflects the standard operating procedure most organizations follow", "Asking too many questions before quoting — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "After a successful brief response, the client goes silent for 3 days. You should:", o: ["Move on — they're not interested", "Send ONE follow-up: 'Hi [name], just checking in on the project we discussed. Happy to answer any other questions!' — gentle nudge without pressure", "Send daily follow-ups until they respond", "Report the conversation as possibly lost in your daily report"], c: 1 }
];

const task10Quiz = [
    { q: "Delivery Risk means:", o: ["Risk of the delivery getting lost in shipping", "Any factor that threatens on-time, quality delivery — scope creep, unclear briefs, team capacity, revision loops, client delays", "The risk of delivering too early — this reflects the standard operating procedure most organizations follow", "Technical failures during file upload — this ensures compliance with professional standards and prevents cascading issues downstream"], c: 1 },
    { q: "Identifying delivery risk BEFORE starting work helps because:", o: ["It delays the project unnecessarily — experienced professionals recognize this as the most reliable path for maintaining quality control", "Preemptive risk identification prevents surprises — flagging a tight deadline or unclear brief on day 1 is better than discovering it on day 5", "Risk assessment is the PM's job, not the Risk Manager's — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Delivery risks rarely materialize if the team is skilled"], c: 1 },
    { q: "A design order with a 3-day deadline and no brand guidelines provided. The delivery risk is:", o: ["Low — 3 days is enough for a design and ensures long-term sustainability across your deliverables", "Medium — most clients are flexible about brand consistency", "HIGH — no brand guidelines means revision risk, the client may reject work that doesn't match their unspoken expectations", "Zero — designers can create brand guidelines from scratch and ensures long-term sustainability"], c: 2 },
    { q: "Mitigating delivery risk: 'Setting expectations upfront' means:", o: ["Telling clients you might be late — this reflects the standard operating procedure most organizations follow", "Confirming deliverables, timeline, revision count, and quality standards BEFORE starting — misaligned expectations cause 80% of disputes", "Sending the Fiverr gig description to the client", "Asking the client to lower their expectations — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines"], c: 1 },
    { q: "An order is 50% complete and the client adds 3 new requirements. The risk response:", o: ["Add the requirements and work faster", "Communicate scope change impact: 'Happy to include these! This extends the scope to X, which means [new timeline/cost]. Shall I send a gig extra?'", "Refuse the new requirements to protect the deadline", "Accept silently and deliver late if necessary"], c: 1 },
    { q: "Delivery risk escalation: When should you escalate to management?", o: ["After the delivery is already late — this reflects the standard operating procedure most organizations follow", "When the client asks for a revision — research supports this methodology as the most effective for achieving measurable improvements", "When you identify a risk you CANNOT mitigate alone — client unresponsive, team member sick, technical blocker with no workaround", "At the end of the week during the weekly report"], c: 2 },
    { q: "Quality assurance before delivery reduces risk by:", o: ["Catching issues before the client sees them — internal QA prevents revision rounds that eat into deadline buffer", "Making the team do double work — this reflects the standard operating procedure most organizations follow", "Adding unnecessary steps to the workflow — applying this principle consistently across all projects builds a reputation for professional excellence", "Guaranteeing the client will accept on first delivery"], c: 0 },
    { q: "Client timezone difference is a delivery risk because:", o: ["A client 12 hours away means your 'urgent message' sits unread for 12 hours — timezone math must factor into deadline planning", "It makes scheduling calls difficult — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Timezones don't affect digital deliveries — this reflects the standard operating procedure most organizations follow", "Fiverr adjusts deadlines for timezone differences automatically"], c: 0 },
    { q: "Buffer time in delivery scheduling means:", o: ["Building in 20-30% extra time for unexpected issues — a 5-day project should be internally targeted for 3.5-4 days", "Padding the quote with extra days for laziness", "Delivering early to impress the client — understanding why this works helps prevent the same category of problems from recurring in the future", "The time between delivery and the client's review"], c: 0 },
    { q: "A team member responsible for a delivery is sick with 24 hours to deadline. Your action:", o: ["Immediately reassign or redistribute work, notify the client of ANY timeline impact, document the risk in your report", "Wait for them to recover — they might feel better tomorrow", "Ask the sick team member to work from home — the reasoning behind this connects directly to broader principles of professional service delivery", "Request an extension from Fiverr automatically"], c: 0 }
];

const task11Quiz = [
    { q: "Which of the following is a PERMANENT ban offense on marketplace platforms?", o: ["Delivering an order 2 hours late", "Accepting payment outside the platform's order system — this bypasses their revenue model and violates ToS fundamentally", "Sending a portfolio link in a message to a buyer", "Getting a 3-star review from a dissatisfied client"], c: 1 },
    { q: "A team member wants to share their WhatsApp number with a buyer 'to communicate faster.' Your response:", o: ["Allow it if the buyer requests it first — buyer-initiated contact sharing is acceptable", "Allow it since WhatsApp is more convenient for both parties", "BLOCK IT — sharing off-platform contact information triggers automated detection and can result in account warnings or suspension", "Allow it but ask them to delete the message after the buyer saves the number"], c: 2 },
    { q: "Platform keyword scanning flags your message containing 'email me at.' What happens next?", o: ["Nothing — the platform only scans for payment-related keywords", "The message is automatically deleted and the buyer never sees it", "The message may be flagged for manual review by Trust & Safety, potentially leading to an account warning", "Your account is immediately suspended pending review"], c: 2 },
    { q: "A gig listing uses portfolio images from a previous client's project. This is:", o: ["Acceptable if the client gave verbal permission during the project", "Fine as long as you watermark the images with your logo", "A compliance risk — you need explicit written permission to use client work as portfolio pieces, and the images must be original to THIS account", "Standard practice on all freelance platforms"], c: 2 },
    { q: "How often should a Risk Manager audit gig descriptions for policy compliance?", o: ["Only when the platform sends a warning about a specific gig", "Monthly — but only for the highest-revenue gigs", "Weekly — review all active gig descriptions across all accounts for accuracy, originality, and policy compliance", "Annually during the team performance review cycle"], c: 2 },
    { q: "A buyer asks you to recommend your services on another competing platform. The correct response:", o: ["Share your profile link on the other platform since the buyer initiated", "Politely decline and redirect: keep all communication and transactions on this platform per ToS requirements", "Ignore the message entirely to avoid any risk", "Report the buyer to Trust & Safety for attempting to take you off-platform"], c: 1 },
    { q: "Which of these is ALLOWED in platform messages?", o: ["Sharing your personal email for 'faster file delivery'", "Mentioning competing platforms by name for comparison", "Sharing a Google Drive link for delivering project files that are too large for the platform", "Asking the buyer to pay via PayPal for a 'discount'"], c: 2 },
    { q: "The platform updates its Terms of Service. As a Risk Manager, your FIRST action is:", o: ["Wait for the team to discuss it in the next weekly meeting", "Read the full update, identify changes that affect DH operations, and brief the team within 24 hours", "Assume changes are minor and continue normal operations", "Ask management to review the changes and provide guidance"], c: 1 },
    { q: "A gig description says 'We are a team of 50 designers' on an individual seller account. The risk is:", o: ["No risk — buyers like knowing the team is large", "The platform may flag this as misrepresentation since the account is registered as an individual, not an agency", "Only a risk if the team actually has fewer than 50 members", "This violates content guidelines about exaggerated claims"], c: 1 },
    { q: "Review manipulation includes which of the following?", o: ["Sending a bonus message asking for 'honest feedback'", "Asking friends to create buyer accounts and purchase your gig to leave positive reviews — this is fake review fraud", "Responding professionally to a negative review", "Following up with a buyer 5 days after delivery to check satisfaction"], c: 1 }
];

const task12Quiz = [
    { q: "The FIRST step in the 5-Step Dispute Resolution Framework is:", o: ["File a support ticket with full documentation immediately", "ACKNOWLEDGE — respond within 2 hours with empathy, showing the buyer you take their concern seriously", "Investigate the original order requirements to find who is at fault", "Offer a full refund to de-escalate the situation quickly"], c: 1 },
    { q: "A buyer claims the Shopify store design 'is not what they expected.' Your investigation should start with:", o: ["Asking the buyer what they expected — their answer determines your next steps", "Reviewing the ORIGINAL order requirements, gig description, and all pre-delivery messages to identify where expectations diverged", "Checking if similar complaints exist from other buyers on this account", "Offering a revision immediately to resolve the issue quickly"], c: 1 },
    { q: "Evidence documentation should happen:", o: ["When the platform's support team requests it during the dispute process", "After consulting with management about the best approach to the dispute", "IMMEDIATELY when a dispute arises — some data (messages, order details) may become inaccessible after a period", "Within the same business week to ensure accuracy and completeness"], c: 2 },
    { q: "A scope dispute occurs when:", o: ["The delivery files are in the wrong format", "The client expects more deliverables than what was originally agreed in the order requirements — misaligned expectations", "The client wants a refund because they changed their mind about the project", "The delivery is late by more than 24 hours without extension"], c: 1 },
    { q: "When should you escalate a dispute to platform support instead of resolving mutually?", o: ["After the first disagreement with the buyer — let the platform decide immediately", "When the buyer uses threatening language, attempts extortion, or mutual resolution fails after 3 back-and-forth messages", "Only when management instructs you to escalate the dispute", "When the order value exceeds $500 — high-value disputes always need platform intervention"], c: 1 },
    { q: "A buyer has used your delivered Shopify store (it is live and generating sales) but requests a cancellation. Your response:", o: ["Accept the cancellation since the buyer wants out of the order", "Document that the deliverables are LIVE and in use, decline the cancellation, and if they push, escalate to support with evidence of usage", "Offer a 50% refund as a compromise to keep the order open", "Report the buyer for fraud immediately without communicating further"], c: 1 },
    { q: "The dispute response template emphasizes which tone?", o: ["Firm and assertive — clearly stating your position and defending your work", "Professional, empathetic, and solution-oriented — showing you care about the buyer's satisfaction while proposing a concrete path forward", "Casual and friendly — making the buyer feel like you are on their side", "Formal and legal — referencing platform policies and terms of service"], c: 1 },
    { q: "A communication dispute (buyer feels ignored) is best prevented by:", o: ["Sending daily updates even when there is no progress to report", "Setting clear communication expectations upfront: response times, update schedule, and preferred communication style", "Always responding within 5 minutes regardless of the time of day", "Sending longer, more detailed messages to show thorough attention"], c: 1 },
    { q: "A fraudulent dispute (buyer trying to get work for free) requires:", o: ["Offering the buyer additional work to change their mind about the dispute", "Accepting the loss and focusing on new orders to recover revenue", "Immediate evidence preservation, support ticket with proof of delivery and buyer acceptance, and Trust & Safety report", "Confronting the buyer directly about their fraudulent intentions"], c: 2 },
    { q: "After a dispute is resolved in your favor, the NEXT step is:", o: ["Move on and forget about it — the crisis is over", "Document the resolution, analyze what caused the dispute, and update SOPs to prevent similar disputes in the future", "Send the buyer a message expressing disappointment about the dispute", "File a complaint about the buyer to prevent them from ordering again"], c: 1 }
];

const task13Quiz = [
    { q: "The five critical seller metrics are:", o: ["Response Rate, On-Time Delivery, Order Completion, Order Rating, and Revenue Growth", "Response Rate, On-Time Delivery, Order Completion, Order Rating, and Unique Clients — each affects visibility, level status, and earning potential", "Response Time, Delivery Speed, Cancellation Rate, Review Score, and Profile Views", "Message Volume, Order Volume, Revenue, Rating, and Repeat Buyers"], c: 1 },
    { q: "A seller account's Response Rate drops to 88%. The immediate impact is:", o: ["No impact — 88% is still above the acceptable threshold for most seller levels", "Gig visibility drops in search results and the account risks level demotion at the next evaluation — 90% is the threshold", "The account receives a temporary 24-hour messaging restriction", "The platform sends a warning email but takes no other action"], c: 1 },
    { q: "Seller levels are evaluated:", o: ["Weekly with instant feedback on current standing", "Every 30 days — if ANY metric drops below threshold during the evaluation period, demotion occurs", "Quarterly with a comprehensive performance review from the platform", "Continuously in real-time with automatic adjustments"], c: 1 },
    { q: "To reach Level 2 seller status, an account needs:", o: ["30 days active, 5 orders, $200 earned, and 4.5+ rating", "120 days active, 50+ orders, $2000+ earned, 4.7+ rating, and all metrics above 90% — this is a significant milestone", "90 days active, 25 orders, $1000 earned, and 4.7+ rating", "180 days active, 100 orders, $5000 earned, and no cancellations"], c: 1 },
    { q: "On-Time Delivery rate is calculated over a:", o: ["30-day rolling window — recent deliveries matter most", "60-day rolling window — giving you time to recover but also meaning one late delivery impacts the metric for 2 months", "90-day rolling window — providing a stable long-term view", "Calendar month — resetting on the 1st of each month"], c: 1 },
    { q: "An account has 91% completion rate. One more cancellation would drop it to:", o: ["90% — still safe but dangerously close to the threshold", "Below 90% — this is a CRITICAL situation because crossing the 90% threshold triggers demotion review", "89% — concerning but recoverable within the evaluation period", "The exact drop depends on total order volume — with fewer orders, each cancellation has greater impact"], c: 3 },
    { q: "The daily metrics dashboard routine includes recording:", o: ["Only the metrics that have changed since yesterday", "Response Rate, On-Time Delivery, Completion Rate, Overall Rating, Current Level, and Days Until Next Evaluation — for EVERY account", "Total revenue and number of active orders per account", "Only metrics that are below the safety threshold"], c: 1 },
    { q: "A metric recovery strategy for low Response Rate includes:", o: ["Sending automated replies to all messages using a bot — this ensures 100% response rate", "Replying to ALL messages within 24 hours including spam, using the platform's mobile app for instant replies during off-hours", "Deleting old unread messages to reset the calculation", "Asking buyers to resend messages so you can respond to the new ones"], c: 1 },
    { q: "Rating dropped from 4.8 to 4.6 after one 2-star review. Recovery requires:", o: ["Filing a support ticket to remove the bad review automatically", "Over-delivering on subsequent orders, using the bonus message strategy to encourage positive reviews, and addressing any quality issues that caused the low rating", "Asking the buyer to change their review to a higher rating", "Completing many small, quick orders to dilute the bad review mathematically"], c: 1 },
    { q: "Week-over-week metric tracking matters because:", o: ["It creates nice-looking charts for management presentations", "A 1% drop today signals a trend that could become a 5% drop next week if the root cause is not identified and addressed — early detection prevents crises", "The platform requires sellers to track their own metrics weekly", "It helps predict when the next evaluation will occur"], c: 1 }
];

const task14Quiz = [
    { q: "A chargeback differs from a cancellation because:", o: ["Chargebacks are just another word for cancellation on marketplace platforms", "Chargebacks bypass the platform entirely — the buyer disputes payment through their bank, and funds can be forcibly withdrawn regardless of order status", "Chargebacks only happen on orders over $1000 in value", "Chargebacks are initiated by the platform when they detect fraud"], c: 1 },
    { q: "Which of these is a RED FLAG for potential chargeback fraud?", o: ["A buyer who asks detailed questions about the project before ordering", "A returning buyer who places their 5th order with you", "A new buyer placing a high-value order with no communication, rushing delivery, then going completely silent after receiving files", "A buyer who requests 2 revisions before accepting the delivery"], c: 2 },
    { q: "The most important chargeback prevention step is:", o: ["Only accepting orders from buyers with verified payment methods", "Delivering through the platform and getting written buyer confirmation of satisfaction in the message thread — this creates irrefutable evidence", "Setting high prices to discourage fraudulent buyers", "Requiring buyers to sign a contract before starting work"], c: 1 },
    { q: "When the platform notifies you of a chargeback, your FIRST action is:", o: ["Contact the buyer directly to ask why they disputed the payment", "Accept the loss and focus on new orders — fighting chargebacks is rarely successful", "Gather ALL evidence immediately: order details, communication log, delivery proof, buyer confirmation messages", "Wait for the platform to investigate and resolve it automatically"], c: 2 },
    { q: "Watermarking previews before final delivery protects against chargebacks by:", o: ["Making the previews look more professional and trustworthy", "Ensuring the buyer cannot use final deliverables until they confirm satisfaction within the order — preventing receive-then-chargeback fraud", "Adding your brand identity to all deliverables for marketing purposes", "Making it harder for buyers to share your work with competitors"], c: 1 },
    { q: "'Friendly fraud' in the chargeback context means:", o: ["A buyer who is friendly in messages but disputes the charge later", "A buyer who deliberately receives the work AND gets a refund by disputing the charge with their bank — they keep both the deliverables and the money", "A buyer who accidentally disputes a charge they did not recognize", "A buyer who leaves a positive review but then requests a refund"], c: 1 },
    { q: "For a $500+ order from a new buyer, the recommended approach is:", o: ["Decline the order — high-value first orders are always risky", "Deliver in phases and get buyer approval at each stage — this creates a trail of acceptance and limits exposure if fraud occurs", "Request upfront payment through the platform's tip feature before starting", "Complete the entire order quickly to minimize the chargeback window"], c: 1 },
    { q: "The confirmation message after delivery ('Could you please review and confirm everything looks good?') serves:", o: ["As a polite courtesy that buyers appreciate", "As a LEGAL EVIDENCE tool — written buyer acknowledgment of satisfaction is powerful evidence against chargeback disputes", "As a reminder for the buyer to leave a review", "As a way to extend the delivery timeline in case revisions are needed"], c: 1 },
    { q: "A buyer who creates an account and orders immediately with no profile completion is:", o: ["An eager buyer who knows exactly what they want — great customer", "A potential risk — new accounts with no history may indicate a buyer testing the platform for chargeback vulnerability", "A normal buyer behavior pattern on all marketplace platforms", "Only a concern if the order value exceeds $200"], c: 1 },
    { q: "After a chargeback is resolved (whether won or lost), the Risk Manager should:", o: ["Move on — the incident is closed and no further action is needed", "Document the entire incident, identify prevention gaps, update the chargeback prevention checklist, and brief the team on lessons learned", "File a complaint against the buyer on every platform they have accounts on", "Refuse all future orders from buyers with similar profiles"], c: 1 }
];

const task15Quiz = [
    { q: "Digital Heroes manages multiple seller accounts. This is permitted because:", o: ["Multiple accounts are always allowed on marketplace platforms", "Each account represents a distinct real person with unique identity, portfolio, and communication style — operating within the platform's agency policies", "The accounts use different email addresses which is sufficient for compliance", "DH has a special agreement with the platform for unlimited accounts"], c: 1 },
    { q: "Logging into two DH seller accounts from the same browser is:", o: ["Acceptable if done at different times during the day", "Fine as long as you clear cookies between sessions", "A compliance violation — the platform detects shared browser fingerprints, which can link accounts and trigger a review of ALL associated accounts", "Only a problem if you accidentally send a message to the wrong buyer"], c: 2 },
    { q: "A buyer contacts 3 DH seller accounts about the same project. The correct protocol is:", o: ["All 3 accounts respond to maximize chances of winning the order", "The first account that responded continues, the other two politely decline — responding from multiple linked accounts to the same buyer risks detection", "Let the buyer choose which account they prefer after all 3 respond", "Report the buyer for spam since they contacted multiple accounts"], c: 1 },
    { q: "Copy-pasting the same gig description across multiple DH accounts results in:", o: ["Efficient use of proven gig copy that converts well", "Duplicate content detection by the platform — gigs may be removed and accounts flagged for review", "No issues as long as the gig images are different", "A warning email for the first offense only"], c: 1 },
    { q: "Team member access management requires:", o: ["Sharing one master password for all accounts to simplify access", "Maintaining access logs, using secure password management, role-based permissions, and immediate password changes when team members leave", "Giving full access to all team members so they can help in emergencies", "Only changing passwords during quarterly security reviews"], c: 1 },
    { q: "The monthly compliance audit should verify:", o: ["Only that all accounts have different names", "Unique profiles, distinct gig content, separate browser profiles, varied message templates, independent portfolio pieces, current team access, and distinct withdrawal methods", "That each account has earned revenue in the past 30 days", "Only the highest-revenue accounts need compliance audits"], c: 1 },
    { q: "Using the same message template word-for-word across accounts risks:", o: ["Nothing — templates are standard business practice", "Pattern detection algorithms may identify identical messaging patterns across accounts, flagging them as potentially linked or operated by the same entity", "Only a risk if the template mentions the other accounts by name", "Template matching only applies to gig descriptions, not messages"], c: 1 },
    { q: "When a team member leaves DH, the IMMEDIATE action for account security is:", o: ["Ask them to forget the passwords they had access to", "Change ALL account passwords that the departing team member had access to, revoke any shared access, and update the access log", "Wait until their last working day to change passwords", "Only change passwords if they were terminated rather than resigned voluntarily"], c: 1 },
    { q: "Portfolio pieces used across DH accounts must be:", o: ["High-quality images regardless of which account they appear on", "Completely unique to each account — no shared images, videos, or work samples across any DH seller profiles", "Similar in style but with different watermarks per account", "Original to DH but can be shared across accounts within the same niche"], c: 1 },
    { q: "The biggest multi-account compliance risk at DH is:", o: ["Not having enough unique portfolio pieces for each account", "Account linking detection — if the platform determines multiple accounts are operated by the same entity improperly, ALL accounts face suspension", "Buyers leaving reviews on the wrong account", "Running out of unique gig ideas for each account"], c: 1 }
];

const task16Quiz = [
    { q: "The Risk Management career path at DH starts at:", o: ["Senior Risk Manager — juniors handle other roles first", "L1 Junior Risk Manager — focusing on daily health checks, reporting, and basic dispute handling during months 1-3", "L2 Risk Manager — there is no junior level for this role", "Intern level — risk management requires a 6-month internship first"], c: 1 },
    { q: "To advance from L2 (Risk Manager) to L3 (Senior Risk Manager), you need:", o: ["6+ months of employment and a management recommendation", "Demonstrated multi-account strategy skills, chargeback management capability, compliance audit proficiency, and proven ability to mentor junior team members", "Completion of an external certification program approved by DH", "Consistently being the first to arrive at work each morning"], c: 1 },
    { q: "The KPI target for a Junior Risk Manager (L1) includes:", o: ["Maintaining 95%+ metrics across all accounts from day one", "Zero missed daily reports, all health checks completed, and 90%+ metric maintenance across assigned accounts", "Filing at least 5 support tickets per week to show proactivity", "Generating new leads through brief responses as the primary focus"], c: 1 },
    { q: "Data analysis skills help Risk Managers because:", o: ["They look good on a resume for future job applications", "They enable turning raw metrics into actionable insights — identifying patterns, predicting risks, and making evidence-based decisions about account strategy", "Data analysis is only relevant for the finance team at DH", "The platform requires sellers to submit data analysis reports monthly"], c: 1 },
    { q: "DH provides learning time for professional development. How much per week?", o: ["1 hour during lunch breaks only", "4 hours per week of dedicated learning time — use it for platform policy study, data analysis courses, or communication skills development", "8 hours per week but only during slow business periods", "No dedicated time — learning must happen outside work hours"], c: 1 },
    { q: "The L4 Risk Operations Lead role differs from L3 because it adds:", o: ["Managing more accounts than L3 — quantity over quality", "Team leadership, SOP development, and cross-department risk strategy — transitioning from individual contribution to organizational impact", "Only a title change with the same responsibilities as L3", "Direct client communication instead of working through the team"], c: 1 },
    { q: "Crisis communication is a key skill for career advancement because:", o: ["Managers need to write long emails about every issue", "De-escalating tense client situations, writing empathetic responses, and turning disputes into positive outcomes are skills that directly protect revenue and build trust", "It is only important for the customer support team", "The platform measures communication quality as a seller metric"], c: 1 },
    { q: "The course reimbursement policy at DH for Risk Managers is:", o: ["No reimbursement — all learning materials are provided internally", "Up to Rs. 5,000 per year for relevant certifications — investing in your skills is encouraged and supported", "Unlimited reimbursement for any online course or certification", "Reimbursement only for platform-specific courses endorsed by the marketplace"], c: 1 },
    { q: "Monthly Risk Review meetings serve the purpose of:", o: ["Checking attendance and ensuring all team members are present", "Presenting insights, learning from other team members' experiences, discussing case studies, and refining the team's collective playbook", "Reviewing each team member's KPI scores for potential termination", "Only reporting issues that occurred during the month"], c: 1 },
    { q: "What separates a certified Risk Manager from someone who just manages seller accounts?", o: ["The certification badge displayed on their LinkedIn profile", "SYSTEMATIZED thinking — certified managers have frameworks for every scenario, follow documented SOPs, and apply data-driven decision making rather than ad-hoc reactions", "Certified managers earn a higher base salary from day one", "Certified managers only handle high-value accounts"], c: 1 }
];

const task17Quiz = [
    { q: "In Scenario 1 (The Disappearing Client), the MOST critical action is:", o: ["Continue working without client input and deliver whatever you have completed", "Wait for the client to respond — they might be busy and will check in soon", "Request a deadline extension through the order system BEFORE the deadline hits — buying time while maintaining communication attempts", "Cancel the order since the client is unresponsive and clearly not interested"], c: 2 },
    { q: "Scenario 2 (The Review Extortionist): Why should you NOT agree to the buyer's demand for 3 free pages?", o: ["Because the extra pages would take too much time to complete", "Agreeing rewards extortion behavior, sets a precedent for future manipulation, and the buyer will likely demand more — instead, report the threat to Trust & Safety", "Because company policy prohibits free work under any circumstances", "Because 3 extra pages would reduce your hourly rate below minimum"], c: 1 },
    { q: "In Scenario 3 (The Metric Cascade), the completion rate dropped from 92% to 87%. Why is this CRITICAL?", o: ["87% is only slightly below the target and will recover naturally", "A 5-point drop means exactly 5 cancellations occurred overnight", "Below 90% triggers the platform's demotion review system, and with evaluation in 5 days, there is almost no time to recover through organic order completion", "The drop only matters if other metrics are also below threshold"], c: 2 },
    { q: "Scenario 4 (Cross-Account Contamination): The buyer says 'your messages look identical.' The FIRST priority is:", o: ["Delete all similar messages across accounts before the buyer reports it", "Stop additional accounts from responding — only ONE account handles this buyer going forward, then review all templates for uniqueness", "Create a cover story explaining why the messages look similar", "Report the buyer for contacting multiple accounts about the same project"], c: 1 },
    { q: "Scenario 5 (The Chargeback Alert): The $1,200 order was completed 3 weeks ago. Why is the timing relevant?", o: ["Chargebacks cannot occur after 2 weeks so this must be an error", "3 weeks means the buyer had ample time to verify satisfaction — a chargeback this late with source files already downloaded suggests deliberate friendly fraud", "The timing does not matter — all chargebacks are handled the same way", "3 weeks is within the normal chargeback window so this is routine"], c: 1 },
    { q: "Scenario 6 (Policy Violation Warning): A team member shared WhatsApp details. The response includes:", o: ["Firing the team member immediately for the policy violation", "Responding to the warning with a professional appeal, briefing the team member, auditing ALL accounts for similar violations, and implementing a review process", "Ignoring the warning since it was only a first offense", "Asking the buyer to delete the WhatsApp message from their end"], c: 1 },
    { q: "Scenario 7 (Multi-Metric Emergency): Three metrics are below threshold on evaluation day. The most realistic assessment is:", o: ["All metrics can be recovered before the end of the evaluation day", "Demotion is likely — focus on damage control, file support tickets, and create a 30-day recovery plan for the next evaluation cycle", "Request the platform to postpone the evaluation by one week", "The evaluation will average the metrics across all DH accounts"], c: 1 },
    { q: "Scenario 8 (Weekend Crisis): The developer is unreachable on Saturday evening. The escalation order is:", o: ["Wait until Monday morning when normal working hours resume", "Send an email to the developer and check for a response on Sunday morning", "Respond to the angry buyer immediately, escalate to account manager via WhatsApp, and if the developer remains unreachable, escalate to senior management for reassignment", "Post in the team Discord channel and hope someone volunteers"], c: 2 },
    { q: "Across ALL 8 scenarios, the common theme is:", o: ["Every scenario requires filing a support ticket with the platform", "Speed of response in the first 2 hours, thorough documentation, proper escalation, and systematic thinking based on trained frameworks", "All scenarios can be prevented by better daily health checks alone", "Each scenario primarily tests communication skills with buyers"], c: 1 },
    { q: "The key difference between a trained Risk Manager and an untrained one in these scenarios is:", o: ["Trained managers have memorized the correct responses to common situations", "Trained managers panic less because they have seen these scenarios before", "Trained managers have FRAMEWORKS — they follow documented steps for each scenario type instead of making ad-hoc decisions under pressure", "Trained managers delegate all crisis situations to management"], c: 2 },
    { q: "Scenario 1 and Scenario 8 both involve unresponsive parties. The common strategy is:", o: ["Wait patiently — people will respond when they are available", "Escalate through multiple channels (platform message, Discord, WhatsApp, then management) with documented attempts at each level", "Cancel both orders to avoid late delivery penalties", "Send repeated messages every hour until someone responds"], c: 1 },
    { q: "If you encounter a scenario NOT covered in these 8 examples, you should:", o: ["Improvise based on your intuition about the situation", "Apply the closest framework from your training, document the new scenario, and propose an SOP addition for the team — every new scenario is a learning opportunity", "Wait for management guidance before taking any action", "Ignore it if it does not match any known scenario type"], c: 1 }
];

const task18Quiz = [
    { q: "The Final Assessment tests:", o: ["Memory of all training modules — this reflects the standard operating procedure most organizations follow", "Speed of report generation — this reflects the standard operating procedure most organizations follow", "Your ability to handle multiple simultaneous risk scenarios across accounts — real-world pressure simulation, not memorization", "Knowledge of Fiverr's TOS documentation — this aligns with industry best practices and ensures consistent results across different project types"], c: 2 },
    { q: "Assessment scenario: Account A has a cancellation request, Account B has a delivery due in 4 hours, Account C has a negative review. Priority order:", o: ["A → B → C (cancellation first) — this reflects the standard operating procedure most organizations follow", "C → A → B (review damage control first) — following this approach systematically prevents common mistakes and keeps the workflow predictable", "B → A → C — the 4-hour deadline is the MOST time-sensitive, then the cancellation defense, then the review response", "Handle them in the order you discovered them — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Multi-account crisis: Two accounts get cancellation requests simultaneously. You should:", o: ["Handle the higher-revenue order first — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Send template responses to both while you figure out the strategy", "Ask management which to prioritize — this reflects the standard operating procedure most organizations follow", "Assess BOTH immediately — determine which has a tighter deadline and higher metric impact, then deploy defenses in priority order"], c: 3 },
    { q: "The certification proves you can:", o: ["Follow the training manual without mistakes — this reflects the standard operating procedure most organizations follow", "Independently manage multiple Fiverr accounts through daily operations AND crisis situations — protecting revenue proactively", "Pass the written exam with 80%+ score — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Handle routine daily health checks efficiently"], c: 1 },
    { q: "Assessment: You discover during a health check that an account dropped to 85% completion rate overnight. Your response plan:", o: ["File a report and wait for management guidance — this ensures compliance with professional standards and prevents cascading issues downstream", "Focus on getting new orders to dilute the bad metric", "Contact Fiverr support about the metric — this is the recommended approach based on current platform documentation and expert consensus", "IMMEDIATE ACTION: identify the cancellation that caused the drop, file a support ticket, check all pending orders for risk, implement preventive measures across all accounts"], c: 3 },
    { q: "Risk Manager KPI: What metric matters most for your performance?", o: ["Number of daily reports filed on time — this reflects the standard operating procedure most organizations follow", "Account health maintenance score — keeping all accounts above safety thresholds through proactive intervention", "Number of issues identified per week — implementing this correctly requires understanding the full context of how each element interacts", "Client satisfaction ratings across accounts — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The interconnected nature of Risk Management skills means:", o: ["Each module can be applied independently — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Learning the modules in order is important for the exam — experienced professionals recognize this as the most reliable path for maintaining quality control", "Health checks feed reports, reports reveal patterns, patterns guide prevention, prevention reduces cancellations — they form a continuous improvement cycle", "Some skills are more important than others — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "After certification, a Risk Manager should:", o: ["Stop training since certification covers everything", "Focus exclusively on the highest-revenue accounts — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Mentor new Risk Managers as their primary role — this ensures compliance with professional standards and prevents cascading issues downstream", "Continue refining through real-world experience — the training provides the framework, but mastery comes from applying it daily under real pressure"], c: 3 },
    { q: "Crisis communication SOP requires responding to clients within:", o: ["1 hour maximum during a crisis — silence breeds anxiety, and anxious clients escalate to cancellations", "24 hours is the standard SLA — this reflects the standard operating procedure most organizations follow", "30 minutes is ideal but 4 hours is acceptable", "The same day is fast enough for most situations"], c: 0 },
    { q: "The combined output of a trained Risk Manager is:", o: ["Better daily reports with more detail — experienced professionals recognize this as the most reliable path for maintaining quality control", "More support tickets filed with Fiverr — this reflects the standard operating procedure most organizations follow", "Measurably higher account health scores, fewer cancellations, better reviews, and protected revenue — quantifiable business impact", "Faster response times to client messages — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Assessment: A client leaves a 3-star review, and account health is at 91%. The dual threat requires:", o: ["Addressing the review since it's more visible — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Focusing on the account health since 91% is dangerously close to 90%", "BOTH: public response to the review (damage control for future buyers) AND investigating why quality slipped (prevention for the 91% metric)", "Waiting to see if another negative review follows before acting"], c: 2 },
    { q: "Scenario: You just prevented a cancellation, saved a 4-star review by getting it changed to 5-star, and filed a successful support ticket. Report this as:", o: ["A normal successful day — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Three separate reports for each event — research supports this methodology as the most effective for achieving measurable improvements", "A brief note: 'Good day, all issues handled' — this reflects the standard operating procedure most organizations follow", "Detailed data: 'Account B: Cancellation defense successful (revision method). Review upgraded 4→5 (follow-up protocol). Completion rate ticket accepted — metric restored.' — specifics enable replication"], c: 3 },
    { q: "The biggest Risk Manager failure mode is:", o: ["Missing one daily report — this reflects the standard operating procedure most organizations follow", "Becoming reactive instead of proactive — waiting for fires instead of checking smoke detectors daily", "Not having enough Fiverr platform knowledge — applying this principle consistently across all projects builds a reputation for professional excellence", "Filing tickets that get denied by Fiverr support"], c: 1 },
    { q: "Daily Health Check (Task 3) + Daily Reporting (Task 4) together create:", o: ["Redundant documentation overhead — this reflects the standard operating procedure most organizations follow", "A complete monitoring system — health checks are the input, reports are the output, together they create an audit trail and early warning system", "Extra work that could be consolidated into one task", "A system that works for any freelance platform — this demonstrates the kind of systematic thinking that separates competent work from exceptional work"], c: 1 },
    { q: "Feedback Tracker (Task 5) + Bonus Messages (Task 6) together optimize:", o: ["The number of messages sent per day — understanding why this works helps prevent the same category of problems from recurring in the future", "Client communication frequency — this reflects the standard operating procedure most organizations follow", "The quality of reviews — tracking reveals what causes good/bad reviews, bonus messaging capitalizes on positive moments to boost ratings", "Report length and detail level — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Cancelled Orders (Task 7) + Cancellation Strategy (Task 8) together form:", o: ["A complete guide to accepting cancellations properly", "A defense-and-recovery system — prevention first (strategy), then damage control when prevention fails (ticket filing)", "The most important section of the training — this reflects the standard operating procedure most organizations follow", "Skills that are rarely needed in practice — the reasoning behind this connects directly to broader principles of professional service delivery"], c: 1 },
    { q: "Brief Response (Task 9) + Delivery Risk (Task 10) together:", o: ["Cover the beginning and end of an order — this aligns with industry best practices and ensures consistent results across different project types", "Create an end-to-end risk framework — brief response catches risks at inquiry stage, delivery risk management catches them during execution", "Are the easiest modules in the training — this reflects the standard operating procedure most organizations follow", "Deal with client communication exclusively — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "What separates a certified Risk Manager from someone who just manages Fiverr accounts?", o: ["The certification badge on their profile — this reflects the standard operating procedure most organizations follow", "Access to advanced Fiverr seller tools — this reflects the standard operating procedure most organizations follow", "Years of experience on the platform — following this approach systematically prevents common mistakes and keeps the workflow predictable", "SYSTEMATIZED thinking — certified managers have frameworks for every scenario, not ad-hoc reactions to each problem"], c: 3 },
    { q: "The Risk Manager's impact on business revenue is:", o: ["Direct and measurable — every saved cancellation, every upgraded review, every prevented demotion translates to protected and grown revenue", "Indirect — they support the delivery team", "Minimal compared to the sales team's contribution", "Difficult to quantify in financial terms — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 0 },
    { q: "Your first day after certification should include:", o: ["Celebrating and taking it easy — this reflects the standard operating procedure most organizations follow", "Implementing your daily system: morning health check, report by 10 AM, feedback tracker update, risk scan — the framework works from day one", "Re-reading the training manual — this reflects the standard operating procedure most organizations follow", "Requesting access to additional accounts immediately — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 1 }
];



// Make content available globally

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
