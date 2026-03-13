// Finance Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "Finance Mindset", description: "Money is Business Oxygen", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Why finance matters", "📖 Read finance-sop.html"] },
    { id: 3, title: "Invoicing Excellence", description: "Get Paid On Time", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Invoice best practices", "📖 Study invoice templates"] },
    { id: 4, title: "Expense Management", description: "Track Every Rupee", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Expense categories", "📖 Study expense protocols"] },
    { id: 5, title: "Cash Flow", description: "Timing is Everything", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💵 Cash flow management", "📖 Study cash flow reports"] },
    { id: 6, title: "Payroll Basics", description: "Pay People Right", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "👥 Payroll processing", "📖 Study payroll checklist"] },
    { id: 7, title: "Tax Compliance", description: "GST & TDS", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📑 Tax requirements", "📖 Study compliance calendar"] },
    { id: 8, title: "Financial Reports", description: "P&L, Balance Sheet", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📈 Key reports", "📖 Study report templates"] },
    { id: 9, title: "Budgeting", description: "Plan Spend Wisely", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Budget creation", "📖 Study budget templates"] },
    { id: 10, title: "Vendor Management", description: "Pay & Negotiate", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🤝 Vendor relations", "📖 Study payment terms"] },
    { id: 11, title: "Final Certification", description: "Finance Mastery", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions"] },
    { id: 12, title: "Marketplace Revenue", description: "Platform Economics & Net Income", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💹 Order revenue & platform fees", "📖 Net income & currency conversion"] },
    { id: 13, title: "Client Payments", description: "Milestones, Escrow & Disputes", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💳 Milestone payments & escrow", "📖 Refund & dispute handling"] },
    { id: 14, title: "Team Compensation", description: "Salary, Incentives & Commission", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "👥 Salary structure & incentives", "📖 Commission calculation methods"] },
    { id: 15, title: "Financial Dashboards", description: "P&L, Cash Flow & KPIs", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📊 Monthly P&L reporting", "📖 Revenue per employee & KPIs"] },
    { id: 16, title: "Tax & GST Deep Dive", description: "Indian Tax for Digital Services", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📑 GST on digital services", "📖 TDS, ITR & compliance calendar"] },
    { id: 17, title: "Career Growth", description: "Finance Career Path at DH", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🚀 Career ladder & certifications", "📖 Skills roadmap & mentoring"] },
    { id: 18, title: "Monthly Financial Close", description: "Practical Hands-On Exercises", contentFirst: false, studyGuide: ["⏱️ Time: 90 min", "📝 30 Questions", "🔧 End-to-end close simulation"] }
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
        <li><strong>Marketplace/Sales Team Window:</strong> 9:00 AM – 9:00 PM (flexible shifts)</li>
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
    <p><strong>Channels:</strong> Official: Discord/Email. Team: WhatsApp. Clients: Marketplace/Platform. Personal issues → DM. Work questions → Group chat (so everyone learns).</p>
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
<h2>📚 PART 1: THE FINANCE FOUNDATION</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into finance fundamentals, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(251, 191, 36, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates revenue<br>
            ↓<br>
            <strong style="color: #F472B6;">Development</strong> → delivers projects<br>
            ↓<br>
            <strong style="color: #FBBF24; font-size: 1.2em;">⭐ YOU (Finance)</strong> → <strong>THE OXYGEN SUPPLY - ensure cash flows and everyone gets paid</strong><br>
            ↓<br>
            <strong style="color: #34D399;">Team Morale</strong> → people work happily<br>
            ↓<br>
            <strong style="color: #A78BFA;">Growth & Stability</strong> → company thrives
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(251, 191, 36, 0.15); border-left: 4px solid #F59E0B; padding: 15px; margin: 15px 0;">
        <strong style="color: #FBBF24;">💰 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a finance professional, you are the <strong>OXYGEN SUPPLY</strong> that keeps everyone alive. When invoices aren't chased, cash dries up. When payroll is late, morale crashes. When taxes are missed, the company faces penalties. 82% of businesses fail due to cash flow problems—not bad products, not marketing. Your job is to ensure money flows in BEFORE it flows out. Every. Single. Time.</p>
    </div>
    
    <p style="color: #FBBF24; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No cash flow = No salaries = No team = No company. You keep us breathing.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #EF4444; margin-top: 0;">🔥 THE UNCOMFORTABLE TRUTH ABOUT MONEY</h3>
    <p style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 20px 0;">
        "A business can survive without many things.<br>
        <span style="color: #10B981;">It CANNOT survive without CASH.</span>"
    </p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin-top: 20px;">
        <p style="font-size: 1.1em; margin: 0;"><strong>82% of businesses fail due to cash flow problems.</strong></p>
        <p style="margin: 10px 0 0 0; color: #94A3B8;">Not lack of sales. Not bad products. Not poor marketing. <strong style="color: #EF4444;">Cash timing.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Why You're Here</h3>
    <p>You're about to learn the skill that keeps businesses alive. Finance is not just about numbers—it's about:</p>
    <ul>
        <li>💰 <strong>Oxygen Management:</strong> Cash is business oxygen. No cash = death. Simple.</li>
        <li>📊 <strong>Decision Intelligence:</strong> Every business decision is a financial decision</li>
        <li>🛡️ <strong>Risk Prevention:</strong> Spotting problems BEFORE they become disasters</li>
        <li>📈 <strong>Growth Enablement:</strong> Smart money makes more money</li>
    </ul>
    <div class="highlight-box">
        <strong>Your Mission:</strong> Ensure money flows in BEFORE it flows out. Every. Single. Time.
    </div>
</div>

<div class="content-section">
    <h3>👤 The Two Types of Finance People</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🔴 The Bookkeeper</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Just records what happened<br>
                • Waits for problems to occur<br>
                • Sees numbers as boring data<br>
                • Doesn't understand business impact<br>
                <em style="color: #EF4444;">Replaceable by software ❌</em>
            </td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🟢 The Financial Guardian</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Predicts what WILL happen<br>
                • Prevents problems before they occur<br>
                • Sees numbers as business stories<br>
                • Drives profitable decisions<br>
                <em style="color: #10B981;">Irreplaceable business partner ✅</em>
            </td>
        </tr>
    </table>
    <div class="highlight-box">
        <strong>Which one are you?</strong> Your answer isn't what you say—it's what you DO with the knowledge in this training.
    </div>
</div>

<h2>📚 PART 2: THE FINANCE MINDSET</h2>

<div class="content-section">
    <h3>💡 Lesson 1: Money Has a Clock</h3>
    <p>The biggest mistake new finance people make is thinking money is just numbers. <strong>Wrong.</strong></p>
    <div class="highlight-box">
        <strong>The Time-Money Truth:</strong> ₹1,00,000 today is worth MORE than ₹1,00,000 next month.
    </div>
    <p>Why?</p>
    <ul>
        <li>📈 <strong>Investment Potential:</strong> Money today can earn interest</li>
        <li>⚠️ <strong>Risk Factor:</strong> Future money might not arrive</li>
        <li>💸 <strong>Opportunity Cost:</strong> Waiting means missing other opportunities</li>
        <li>📉 <strong>Inflation:</strong> Money loses value over time</li>
    </ul>
    <div style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px; margin: 20px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Real Example: The Invoice Timing Game</h4>
        <p>Client owes ₹5,00,000. You invoice on Day 30 with Net-30 terms.</p>
        <ul>
            <li>Invoice on Day 1 → Payment on Day 30 → Money works for 30 extra days</li>
            <li>Invoice on Day 30 → Payment on Day 60 → Lost 30 days of cash flow</li>
        </ul>
        <p><strong>Over a year, with 10 clients, that's 300 days of lost cash flow potential.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>💡 Lesson 2: The Three Financial Personalities</h3>
    <p>Every business expense falls into one of three personality types:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Type</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Behavior</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Example</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.5);">Your Role</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: rgba(239, 68, 68, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>🔴 Vampire</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sucks money with no return</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Unused subscriptions, penalty fees</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">ELIMINATE immediately</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>🟡 Maintainer</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Keeps business running</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Rent, utilities, basic tools</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">OPTIMIZE for efficiency</td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.1);">
                <td style="padding: 10px;"><strong>🟢 Multiplier</strong></td>
                <td style="padding: 10px;">Returns more than spent</td>
                <td style="padding: 10px;">Profitable ads, skill training</td>
                <td style="padding: 10px;">INVEST more when proven</td>
            </tr>
        </tbody>
    </table>
    <div class="warning-box">
        <strong>⚠️ Critical Question:</strong> For every expense, ask: "Is this a Vampire, Maintainer, or Multiplier?" If you can't answer, you shouldn't approve it.
    </div>
</div>

<div class="content-section">
    <h3>💡 Lesson 3: The 50/30/20 Cash Allocation Rule</h3>
    <p>Before spending a single rupee, know where it should go:</p>
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #6366F1;">
            <h4 style="color: #818CF8; margin-top: 0;">50% → Operations</h4>
            <p>Salaries, rent, tools, subscriptions—the cost of running the machine</p>
        </div>
        <div style="background: rgba(16, 185, 129, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">30% → Growth</h4>
            <p>Marketing, ads, hiring, expansion—investing in tomorrow</p>
        </div>
        <div style="background: rgba(245, 158, 11, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #FBBF24; margin-top: 0;">20% → Reserve</h4>
            <p>Emergency fund, taxes, buffer—protection against surprises</p>
        </div>
    </div>
    <p style="background: rgba(139, 92, 246, 0.2); padding: 15px; border-radius: 8px; text-align: center; font-weight: bold;">
        🎯 Never allocate the last 20%. It's not "unused"—it's INSURANCE.
    </p>
</div>

<div class="content-section">
    <h3>💡 Lesson 4: The Revenue Recognition Trap</h3>
    <p>Many businesses confuse <strong>revenue</strong> with <strong>cash</strong>. This is deadly.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Concept</th>
                <th style="padding: 12px; text-align: left;">What It Means</th>
                <th style="padding: 12px; text-align: left;">Can You Spend It?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Revenue</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">You EARNED it (invoice sent)</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">❌ No</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Receivables</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client OWES you</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">❌ No</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Cash</strong></td>
                <td style="padding: 10px;">Money IN YOUR BANK</td>
                <td style="padding: 10px;">✅ Yes</td>
            </tr>
        </tbody>
    </table>
    <div class="warning-box">
        <strong>⚠️ Real Danger:</strong> A company can show ₹50L in revenue and still be unable to pay ₹2L in salaries. Revenue ≠ Cash. Never forget this.
    </div>
</div>

<h2>📚 PART 3: KEY FINANCIAL METRICS</h2>

<div class="content-section">
    <h3>📊 The 6 Numbers You Must Know Daily</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.95em;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Metric</th>
                <th style="padding: 12px; text-align: left;">Formula</th>
                <th style="padding: 12px; text-align: left;">What It Tells You</th>
                <th style="padding: 12px; text-align: left;">Healthy Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Gross Profit Margin</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(Revenue - Direct Costs) / Revenue × 100</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Profitability per project</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">&gt;50% for services</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Net Profit Margin</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Net Profit / Revenue × 100</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">What's left after ALL costs</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">&gt;15%</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Days Sales Outstanding (DSO)</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(Receivables / Revenue) × Days</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">How fast clients pay</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">&lt;30 days</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Cash Runway</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cash Balance / Monthly Burn</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Months of survival</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">&gt;3 months</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Current Ratio</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Current Assets / Current Liabilities</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Short-term financial health</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">&gt;1.5</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Burn Rate</strong></td>
                <td style="padding: 10px;">Total Monthly Expenses</td>
                <td style="padding: 10px;">How fast you spend</td>
                <td style="padding: 10px;">Less than revenue</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🔢 Real-World Calculation Examples</h3>
    <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Example 1: Gross Profit Margin</h4>
        <p><strong>Scenario:</strong> Web project billed at ₹2,00,000</p>
        <ul>
            <li>Developer cost: ₹60,000</li>
            <li>Designer cost: ₹30,000</li>
            <li>Tools/hosting: ₹10,000</li>
            <li><strong>Total Direct Costs: ₹1,00,000</strong></li>
        </ul>
        <p><strong>Calculation:</strong> (₹2,00,000 - ₹1,00,000) / ₹2,00,000 × 100 = <span style="color: #10B981; font-weight: bold;">50% GPM ✅</span></p>
    </div>
    <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #FBBF24; margin-top: 0;">Example 2: Cash Runway</h4>
        <p><strong>Scenario:</strong></p>
        <ul>
            <li>Bank balance: ₹15,00,000</li>
            <li>Monthly expenses: ₹5,00,000</li>
        </ul>
        <p><strong>Calculation:</strong> ₹15,00,000 / ₹5,00,000 = <span style="color: #10B981; font-weight: bold;">3 months runway ✅</span></p>
        <p style="color: #94A3B8;">If monthly expenses were ₹6,00,000, runway would be 2.5 months ⚠️</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Financial Health Check</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Calculate These Right Now</h4>
        <p>For your company (or a hypothetical ₹10L/month revenue company):</p>
        <ol>
            <li>What is the current Cash Runway?</li>
            <li>What is the DSO (Days Sales Outstanding)?</li>
            <li>List 3 "Vampire" expenses that could be eliminated</li>
            <li>Is the 50/30/20 rule being followed?</li>
        </ol>
        <p><strong>Write your answers before taking the quiz.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Finance Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
        <li>💡 Topics: Cash timing, expense types, metrics, calculations</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 2: INVOICING EXCELLENCE</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #10B981; margin-top: 0;">💰 THE INVOICE IS YOUR PAYCHECK</h3>
    <p style="font-size: 1.2em; text-align: center; margin: 20px 0;">
        "Work done + Invoice NOT sent = <span style="color: #EF4444;">Work done FOR FREE</span>"
    </p>
    <p>An invoice is not just a document—it's a <strong>legal demand for payment</strong>. The faster you send it, the faster you get paid. The more professional it looks, the more seriously clients take it.</p>
</div>

<div class="content-section">
    <h3>📋 The Anatomy of a Perfect Invoice</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Component</th>
                <th style="padding: 12px; text-align: left;">Purpose</th>
                <th style="padding: 12px; text-align: left;">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Invoice Number</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Unique ID for tracking</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">DH-2024-0001</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Invoice Date</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">When invoice was created</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">28-Jan-2024</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Due Date</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Payment deadline</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">12-Feb-2024 (Net 15)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Your GST Number</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tax compliance</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">27XXXXX1234A1ZX</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Client Details</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Legal billing party</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">ABC Pvt Ltd, GSTIN, Address</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Line Items</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">What they're paying for</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Website Development - ₹1,50,000</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Tax Breakdown</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GST components</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">CGST 9% + SGST 9% = ₹27,000</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Total Amount</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Final payable</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹1,77,000</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Payment Details</strong></td>
                <td style="padding: 10px;">How to pay</td>
                <td style="padding: 10px;">Bank: HDFC | A/C: XXXX | IFSC: HDFC0001234</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>⏰ The Psychology of Invoice Timing</h3>
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #EF4444;">
            <h4 style="color: #EF4444; margin-top: 0;">❌ The "I'll Do It Later" Trap</h4>
            <ul>
                <li>Invoice sent 7 days after work → Paid in 45 days</li>
                <li>Invoice sent 14 days after work → Paid in 60+ days</li>
                <li>Invoice sent 30 days after work → Often "forgotten" or disputed</li>
            </ul>
            <p><strong>Reality:</strong> The longer you wait, the less urgent payment feels to the client.</p>
        </div>
        <div style="background: rgba(16, 185, 129, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">✅ The 24-48 Hour Rule</h4>
            <ul>
                <li>Invoice sent same day → Client still remembers the value</li>
                <li>Invoice sent next day → Still in "work mode" mentally</li>
                <li>Payment terms start immediately → Faster collection</li>
            </ul>
            <p><strong>Best Practice:</strong> Invoice within 24 hours of milestone completion. No exceptions.</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>📅 Payment Terms Explained</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Term</th>
                <th style="padding: 12px; text-align: left;">Meaning</th>
                <th style="padding: 12px; text-align: left;">When to Use</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Due on Receipt</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pay immediately</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">New clients, small amounts</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Net 7</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pay within 7 days</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Retainers, rush projects</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Net 15</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pay within 15 days</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Standard for services</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Net 30</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pay within 30 days</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Corporate clients only</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>50/50 Split</strong></td>
                <td style="padding: 10px;">50% advance, 50% on delivery</td>
                <td style="padding: 10px;">Large projects (recommended)</td>
            </tr>
        </tbody>
    </table>
    <div class="warning-box">
        <strong>⚠️ Rule:</strong> Never agree to Net 60 or Net 90. These terms are cash flow killers. If a client demands it, they're likely not a good fit.
    </div>
</div>

<div class="content-section">
    <h3>🔄 The Follow-Up Sequence</h3>
    <p>Most payments aren't late because of bad intent—they're late because of forgotten emails. Use this sequence:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Day</th>
                <th style="padding: 12px; text-align: left;">Action</th>
                <th style="padding: 12px; text-align: left;">Tone</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: rgba(16, 185, 129, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Day 0</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Send invoice with clear due date</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Professional</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Day -3</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"Friendly reminder: Invoice due in 3 days"</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Friendly</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Due Date</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"Invoice due today. Please confirm payment."</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Direct</td>
            </tr>
            <tr style="background: rgba(239, 68, 68, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Day +3</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"Invoice overdue. Please process immediately."</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Firm</td>
            </tr>
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Day +7</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Phone call + email: "Immediate attention required"</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Serious</td>
            </tr>
            <tr style="background: rgba(239, 68, 68, 0.2);">
                <td style="padding: 10px;"><strong>Day +14</strong></td>
                <td style="padding: 10px;">Escalate to leadership + pause work</td>
                <td style="padding: 10px;">Final</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>❌ Common Invoice Mistakes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Mistake</th>
                <th style="padding: 12px; text-align: left;">Why It's Bad</th>
                <th style="padding: 12px; text-align: left;">Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Vague descriptions</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client disputes "what they paid for"</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Itemize every deliverable</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Wrong GST number</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Invoice rejected, delays</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Verify before sending</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Missing due date</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">"We'll pay when we can"</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Always include clear deadline</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">No payment details</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Extra back-and-forth emails</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Include all payment options</td>
            </tr>
            <tr>
                <td style="padding: 10px;">Sending as attachment only</td>
                <td style="padding: 10px;">Gets lost in inbox</td>
                <td style="padding: 10px;">PDF + summary in email body</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Invoice Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Review Your Last 5 Invoices</h4>
        <ol>
            <li>Were they sent within 48 hours of work completion?</li>
            <li>Did they have all 9 required components?</li>
            <li>What were the actual payment times vs due dates?</li>
            <li>Were follow-ups sent on the correct schedule?</li>
        </ol>
        <p><strong>Calculate:</strong> How many days of cash flow were lost due to late invoicing?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Invoicing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
        <li>💡 Topics: Invoice components, timing, payment terms, follow-ups</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 3: EXPENSE MANAGEMENT</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #F59E0B; margin-top: 0;">💸 EVERY RUPEE HAS A PURPOSE</h3>
    <p style="font-size: 1.2em; text-align: center; margin: 20px 0;">
        "An expense without a receipt is <span style="color: #EF4444;">money that never existed.</span>"
    </p>
    <p>Expense management isn't about saying NO to spending. It's about ensuring every rupee spent has a <strong>clear purpose</strong> and <strong>proper documentation</strong>.</p>
</div>

<div class="content-section">
    <h3>📊 The Three Types of Expenses</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Type</th>
                <th style="padding: 12px; text-align: left;">Behavior</th>
                <th style="padding: 12px; text-align: left;">Examples</th>
                <th style="padding: 12px; text-align: left;">Control Strategy</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: rgba(99, 102, 241, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>🔵 Fixed</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Same every month</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Rent, salaries, insurance, subscriptions</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Negotiate annually, auto-pay</td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.1);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>🟢 Variable</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Changes with activity</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Ads, freelancers, commissions, travel</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Budget limits, approval workflow</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.1);">
                <td style="padding: 10px;"><strong>🟡 One-Time</strong></td>
                <td style="padding: 10px;">Happens once</td>
                <td style="padding: 10px;">Equipment, setup costs, legal fees</td>
                <td style="padding: 10px;">Leadership approval, ROI analysis</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📋 The Expense Approval Workflow</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Amount</th>
                <th style="padding: 12px; text-align: left;">Who Approves</th>
                <th style="padding: 12px; text-align: left;">Documentation Needed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">< ₹5,000</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team Lead</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Receipt + purpose</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹5,000 - ₹25,000</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Department Head</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Receipt + purpose + budget code</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹25,000 - ₹1,00,000</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Finance + Operations</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Formal request + 3 quotes</td>
            </tr>
            <tr>
                <td style="padding: 10px;">> ₹1,00,000</td>
                <td style="padding: 10px;">Leadership/Founder</td>
                <td style="padding: 10px;">Business case + ROI projection</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🧾 Receipt Management: The Golden Rules</h3>
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(16, 185, 129, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">✅ Do This</h4>
            <ul>
                <li>Photo/scan receipt immediately after purchase</li>
                <li>Store in designated folder (Date_Vendor_Amount)</li>
                <li>Submit within 48 hours of purchase</li>
                <li>Include GST details for tax credit</li>
                <li>Link to purchase order if applicable</li>
            </ul>
        </div>
        <div style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #EF4444;">
            <h4 style="color: #EF4444; margin-top: 0;">❌ Never Do This</h4>
            <ul>
                <li>Submit expense without receipt → Rejected</li>
                <li>Handwritten receipts without GST → No tax credit</li>
                <li>Combine personal and business expenses → Audit nightmare</li>
                <li>Submit after 30 days → May be denied</li>
                <li>Misclassify expenses → Compliance issues</li>
            </ul>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🚨 Expense Red Flags</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Red Flag</th>
                <th style="padding: 12px; text-align: left;">What It Means</th>
                <th style="padding: 12px; text-align: left;">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Expense without prior approval</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Process bypassed</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Escalate to manager</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Round numbers (₹5,000 exactly)</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Potentially fabricated</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Request detailed receipt</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Frequent "cash" expenses</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Harder to verify</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Mandate digital payments</td>
            </tr>
            <tr>
                <td style="padding: 10px;">Expenses just under approval limit</td>
                <td style="padding: 10px;">Avoiding oversight</td>
                <td style="padding: 10px;">Review pattern over time</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📈 Monthly Expense Review Checklist</h3>
    <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px;">
        <ol>
            <li>Compare actual vs budget by category</li>
            <li>Identify any category over 10% of budget</li>
            <li>Review all expenses > ₹10,000</li>
            <li>Check for unused subscriptions</li>
            <li>Verify all receipts are filed</li>
            <li>Flag any anomalies for investigation</li>
            <li>Calculate cost-per-client and cost-per-project</li>
        </ol>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Expense Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Review Last Month's Expenses</h4>
        <ol>
            <li>List all subscriptions - which ones are actually used?</li>
            <li>Identify the top 5 expense categories</li>
            <li>Find 3 "vampire" expenses (money spent with no return)</li>
            <li>Check: Were all expenses properly approved?</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Expense Management</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 4</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 4: CASH FLOW MANAGEMENT</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #10B981; margin-top: 0;">💵 CASH IS THE BLOODSTREAM OF BUSINESS</h3>
    <p style="font-size: 1.2em; text-align: center; margin: 20px 0;">
        "Revenue is vanity, profit is sanity, but <span style="color: #EF4444;">CASH is reality.</span>"
    </p>
    <p>A company can be profitable on paper and still go bankrupt. Why? Because <strong>profit</strong> is an accounting concept, but <strong>cash</strong> is what pays the bills. Understanding cash flow is the difference between survival and death.</p>
</div>

<div class="content-section">
    <h3>🔢 The Cash Flow Formula</h3>
    <div style="background: rgba(99, 102, 241, 0.15); padding: 25px; border-radius: 12px; text-align: center; margin: 20px 0;">
        <p style="font-size: 1.5em; font-weight: bold; margin: 0;">
            Cash In − Cash Out = Net Cash Flow
        </p>
    </div>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Net Cash Flow</th>
                <th style="padding: 12px; text-align: left;">Status</th>
                <th style="padding: 12px; text-align: left;">What It Means</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: rgba(16, 185, 129, 0.15);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #10B981;">Positive (+)</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GROWING ✅</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">More money coming in than going out. Can invest, save, or expand.</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.15);">
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong style="color: #F59E0B;">Zero (0)</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">SURVIVING ⚠️</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Breaking even. No buffer for emergencies. Risky.</td>
            </tr>
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 10px;"><strong style="color: #EF4444;">Negative (−)</strong></td>
                <td style="padding: 10px;">BURNING 🔥</td>
                <td style="padding: 10px;">Spending more than earning. Clock is ticking on survival.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>⏰ The Timing Problem: Why Profitable Companies Fail</h3>
    <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #EF4444; margin-top: 0;">Real Scenario: The Timing Gap</h4>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">March 1: Win ₹10L project</td>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client says Net 30</td>
            </tr>
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">March 15: Pay salaries</td>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Need ₹6L (cash out)</td>
            </tr>
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">March 20: Pay vendors/tools</td>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Need ₹2L (cash out)</td>
            </tr>
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">March 31: Project delivered</td>
                <td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Invoice sent</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><strong>April 30: Client pays</strong></td>
                <td style="padding: 8px;"><strong>₹10L received (finally!)</strong></td>
            </tr>
        </table>
        <p style="margin-top: 15px; color: #F87171;"><strong>Problem:</strong> You needed ₹8L in March but didn't get paid until April. Profitable? Yes. Cash flow positive? NO.</p>
    </div>
</div>

<div class="content-section">
    <h3>⚡ The 5 Cash Flow Killers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Killer</th>
                <th style="padding: 12px; text-align: left;">How It Hurts</th>
                <th style="padding: 12px; text-align: left;">Prevention</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Late Client Payments</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Money earned but not in bank</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">50% advance, strict follow-ups</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Upfront Vendor Payments</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cash goes out before coming in</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Negotiate Net 15/30 with vendors</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Unplanned Expenses</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Drains reserve unexpectedly</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Maintain 3-month emergency fund</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Over-Hiring</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fixed costs exceed revenue</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use contractors, hire on retainers</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Scope Creep (No Change Orders)</strong></td>
                <td style="padding: 10px;">Working for free</td>
                <td style="padding: 10px;">Strict change order process</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📊 Weekly Cash Flow Tracking Template</h3>
    <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px;">
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: rgba(99, 102, 241, 0.3);">
                    <th style="padding: 10px; text-align: left;">Category</th>
                    <th style="padding: 10px; text-align: right;">Week 1</th>
                    <th style="padding: 10px; text-align: right;">Week 2</th>
                    <th style="padding: 10px; text-align: right;">Week 3</th>
                    <th style="padding: 10px; text-align: right;">Week 4</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="padding: 8px;">Opening Balance</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td></tr>
                <tr style="background: rgba(16, 185, 129, 0.1);"><td style="padding: 8px;"><strong style="color: #10B981;">+ Client Payments Received</strong></td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td></tr>
                <tr style="background: rgba(239, 68, 68, 0.1);"><td style="padding: 8px;"><strong style="color: #EF4444;">− Salaries</strong></td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td></tr>
                <tr style="background: rgba(239, 68, 68, 0.1);"><td style="padding: 8px;"><strong style="color: #EF4444;">− Vendors/Tools</strong></td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td></tr>
                <tr style="background: rgba(239, 68, 68, 0.1);"><td style="padding: 8px;"><strong style="color: #EF4444;">− Other Expenses</strong></td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td><td style="padding: 8px; text-align: right;">₹___</td></tr>
                <tr style="background: rgba(139, 92, 246, 0.2);"><td style="padding: 8px;"><strong>= Closing Balance</strong></td><td style="padding: 8px; text-align: right;"><strong>₹___</strong></td><td style="padding: 8px; text-align: right;"><strong>₹___</strong></td><td style="padding: 8px; text-align: right;"><strong>₹___</strong></td><td style="padding: 8px; text-align: right;"><strong>₹___</strong></td></tr>
            </tbody>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Cash Flow Improvement Strategies</h3>
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(16, 185, 129, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">✅ Speed Up Cash IN</h4>
            <ul>
                <li>Require 50% advance before starting work</li>
                <li>Send invoices immediately (not end of month)</li>
                <li>Offer 2% discount for early payment</li>
                <li>Follow up on Day 1 after due date</li>
            </ul>
        </div>
        <div style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #EF4444;">
            <h4 style="color: #EF4444; margin-top: 0;">⬇️ Slow Down Cash OUT</h4>
            <ul>
                <li>Negotiate Net 30 with all vendors</li>
                <li>Pay on due date, not before</li>
                <li>Stagger large payments across weeks</li>
                <li>Use credit cards for 30-day float (pay in full)</li>
            </ul>
        </div>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: 13-Week Cash Flow Forecast</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Build Your Cash Flow Forecast</h4>
        <ol>
            <li>List all expected payments for next 13 weeks</li>
            <li>List all expected expenses for next 13 weeks</li>
            <li>Calculate opening and closing balance for each week</li>
            <li>Identify weeks where balance goes negative</li>
            <li>Create action plan to prevent cash crisis</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Cash Flow</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: PAYROLL MASTERY</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(109, 40, 217, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #A78BFA; margin-top: 0;">💰 PAYROLL: THE TRUST CONTRACT</h3>
    <p style="font-size: 1.2em; text-align: center; margin: 20px 0;">
        "When you pay people on time, every time, you build <span style="color: #10B981;">unshakeable trust.</span>"
    </p>
    <p>Payroll isn't just about moving money—it's about keeping promises. Every employee has bills, EMIs, and families depending on that salary hitting their account on time. <strong>Zero tolerance for payroll delays.</strong></p>
</div>

<div class="content-section">
    <h3>📊 Indian Salary Structure Breakdown</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Component</th>
                <th style="padding: 12px; text-align: left;">What It Is</th>
                <th style="padding: 12px; text-align: left;">Typical %</th>
                <th style="padding: 12px; text-align: left;">Tax Impact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Basic Salary</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fixed core salary</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">40-50%</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fully taxable</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>HRA</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">House Rent Allowance</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">20-30%</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Partially exempt (with rent receipts)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Special Allowance</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Flexible component</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">15-25%</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fully taxable</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Conveyance</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Travel allowance</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fixed ₹1,600/month</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Exempt up to limit</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Medical Allowance</strong></td>
                <td style="padding: 10px;">Health expenses</td>
                <td style="padding: 10px;">Fixed ₹1,250/month</td>
                <td style="padding: 10px;">Exempt with bills</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>➖ Deductions: What Gets Taken Out</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Deduction</th>
                <th style="padding: 12px; text-align: left;">Rate</th>
                <th style="padding: 12px; text-align: left;">Who Pays</th>
                <th style="padding: 12px; text-align: left;">Deposit Deadline</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>EPF (Employee)</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">12% of Basic</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Employee</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">15th of next month</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>EPF (Employer)</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">12% of Basic</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Company</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">15th of next month</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>ESI (Employee)</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">0.75% (if salary < ₹21K)</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Employee</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">15th of next month</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>TDS</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">As per tax slab</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Employee</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">7th of next month</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Professional Tax</strong></td>
                <td style="padding: 10px;">₹200/month (varies by state)</td>
                <td style="padding: 10px;">Employee</td>
                <td style="padding: 10px;">Monthly/Quarterly</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🧮 Salary Calculation Example</h3>
    <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Employee: ₹50,000 CTC</h4>
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: rgba(16, 185, 129, 0.2);">
                <td style="padding: 8px;"><strong>Earnings</strong></td>
                <td style="padding: 8px; text-align: right;"></td>
            </tr>
            <tr><td style="padding: 6px;">Basic Salary (40%)</td><td style="padding: 6px; text-align: right;">₹20,000</td></tr>
            <tr><td style="padding: 6px;">HRA (50% of Basic)</td><td style="padding: 6px; text-align: right;">₹10,000</td></tr>
            <tr><td style="padding: 6px;">Special Allowance</td><td style="padding: 6px; text-align: right;">₹14,200</td></tr>
            <tr><td style="padding: 6px;">Conveyance</td><td style="padding: 6px; text-align: right;">₹1,600</td></tr>
            <tr><td style="padding: 6px;">Medical</td><td style="padding: 6px; text-align: right;">₹1,250</td></tr>
            <tr style="background: rgba(99, 102, 241, 0.2);"><td style="padding: 8px;"><strong>Gross Salary</strong></td><td style="padding: 8px; text-align: right;"><strong>₹47,050</strong></td></tr>
            <tr style="background: rgba(239, 68, 68, 0.2);">
                <td style="padding: 8px;"><strong>Deductions</strong></td>
                <td style="padding: 8px; text-align: right;"></td>
            </tr>
            <tr><td style="padding: 6px;">EPF (Employee 12%)</td><td style="padding: 6px; text-align: right;">-₹2,400</td></tr>
            <tr><td style="padding: 6px;">Professional Tax</td><td style="padding: 6px; text-align: right;">-₹200</td></tr>
            <tr><td style="padding: 6px;">TDS (estimated)</td><td style="padding: 6px; text-align: right;">-₹2,000</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.3);"><td style="padding: 10px;"><strong style="font-size: 1.1em;">NET PAY (Take Home)</strong></td><td style="padding: 10px; text-align: right;"><strong style="font-size: 1.1em; color: #10B981;">₹42,450</strong></td></tr>
        </table>
        <p style="margin-top: 15px; color: #94A3B8; font-size: 0.9em;">Employer also pays ₹2,400 (EPF) + ₹600 (other contributions) = ₹3,000/month extra</p>
    </div>
</div>

<div class="content-section">
    <h3>📅 The Payroll Calendar</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Day</th>
                <th style="padding: 12px; text-align: left;">Task</th>
                <th style="padding: 12px; text-align: left;">Penalty if Missed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>1st-5th</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Collect attendance, leaves, overtime data</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Late salary = unhappy team</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>5th-7th</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Process payroll, verify calculations</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Errors cause compliance issues</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>7th</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Deposit TDS to government</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Interest + penalty</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Last working day</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Credit salaries to bank accounts</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Trust damage</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>15th of next month</strong></td>
                <td style="padding: 10px;">Deposit EPF and ESI</td>
                <td style="padding: 10px;">Heavy penalties + interest</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>✅ Payroll Processing Checklist</h3>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px;">
        <ol>
            <li>☐ Verify attendance data from HR/team leads</li>
            <li>☐ Calculate leaves taken vs leaves balance</li>
            <li>☐ Check for any overtime/additional payments</li>
            <li>☐ Verify new joinees added with correct details</li>
            <li>☐ Check resigned employees' final settlement</li>
            <li>☐ Run payroll calculation</li>
            <li>☐ Cross-verify with previous month (flag >5% variance)</li>
            <li>☐ Get approval from management</li>
            <li>☐ Generate bank transfer file</li>
            <li>☐ Generate payslips</li>
            <li>☐ Distribute payslips to employees</li>
        </ol>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Mock Payroll</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Calculate Net Pay</h4>
        <p>Given: Employee with ₹75,000 CTC</p>
        <ol>
            <li>Calculate Basic (40%), HRA (50% of Basic), Special Allowance</li>
            <li>Calculate EPF deduction (12% of Basic)</li>
            <li>Estimate TDS if employee is in 20% tax bracket</li>
            <li>What is the final net pay?</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Payroll</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 6</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: TAX COMPLIANCE MASTERY</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(185, 28, 28, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
    <h3 style="color: #F87171; margin-top: 0;">📑 TAXES: THE PRICE OF DOING BUSINESS</h3>
    <p style="font-size: 1.2em; text-align: center; margin: 20px 0;">
        "Tax compliance isn't optional—it's the <span style="color: #EF4444;">foundation of trust</span> with the government."
    </p>
    <p>Getting taxes wrong doesn't just cost money in penalties—it can shut down your business. At Digital Heroes, we file on time, every time, with <strong>zero tolerance for tax delays</strong>.</p>
</div>

<div class="content-section">
    <h3>📊 GST: The Complete Breakdown</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Tax Type</th>
                <th style="padding: 12px; text-align: left;">When It Applies</th>
                <th style="padding: 12px; text-align: left;">Who Pays Where</th>
                <th style="padding: 12px; text-align: left;">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>CGST + SGST</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Intra-state (within same state)</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Central + State Government</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pune → Mumbai = CGST 9% + SGST 9%</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>IGST</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Inter-state (different states)</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Central Government</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Pune → Delhi = IGST 18%</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>Export</strong></td>
                <td style="padding: 10px;">Services to foreign clients</td>
                <td style="padding: 10px;">Zero-rated (no GST)</td>
                <td style="padding: 10px;">India → USA = 0% GST</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>💼 GST Rates for Common Services</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Service Type</th>
                <th style="padding: 12px; text-align: left;">GST Rate</th>
                <th style="padding: 12px; text-align: left;">SAC Code</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">IT Services / Software Development</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>18%</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">998314</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Web Design / Development</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>18%</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">998314</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Digital Marketing</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>18%</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">998361</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Consulting Services</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>18%</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">998311</td></tr>
            <tr><td style="padding: 10px;">Graphic Design</td><td style="padding: 10px;"><strong>18%</strong></td><td style="padding: 10px;">998397</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📅 GST Filing Calendar</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.3);">
                <th style="padding: 12px; text-align: left;">Return</th>
                <th style="padding: 12px; text-align: left;">What It Contains</th>
                <th style="padding: 12px; text-align: left;">Due Date</th>
                <th style="padding: 12px; text-align: left;">Late Fee</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>GSTR-1</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Outward supplies (sales)</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">11th of next month</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹50/day (max ₹10,000)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>GSTR-3B</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Summary + Tax Payment</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">20th of next month</td>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹50/day + 18% interest</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><strong>GSTR-9</strong></td>
                <td style="padding: 10px;">Annual Return</td>
                <td style="padding: 10px;">31st December</td>
                <td style="padding: 10px;">₹200/day (max 0.25% of turnover)</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>✂️ TDS: Tax Deducted at Source</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Payment Type</th>
                <th style="padding: 12px; text-align: left;">Section</th>
                <th style="padding: 12px; text-align: left;">Rate</th>
                <th style="padding: 12px; text-align: left;">Threshold</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Contractors / Freelancers</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">194C</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1% (Individual) / 2% (Others)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹30,000 single / ₹1,00,000 annual</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Professional Services</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">194J</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">10%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹30,000 annual</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Rent</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">194I</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">10%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹2,40,000 annual</td></tr>
            <tr><td style="padding: 10px;">Salary</td><td style="padding: 10px;">192</td><td style="padding: 10px;">As per slab</td><td style="padding: 10px;">Basic exemption limit</td></tr>
        </tbody>
    </table>
    <div class="warning-box">
        <strong>⚠️ Critical:</strong> TDS must be deposited by 7th of the following month. Late deposit = interest at 1.5% per month + penalties.
    </div>
</div>

<div class="content-section">
    <h3>❌ Common Tax Mistakes (Avoid These!)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Mistake</th>
                <th style="padding: 12px; text-align: left;">Consequence</th>
                <th style="padding: 12px; text-align: left;">Prevention</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Wrong GST rate charged</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">ITC reversal + penalty</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Verify SAC code before invoicing</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GSTIN mismatch on invoice</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Invoice rejected</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Verify client GSTIN before sending</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">TDS not deducted</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Disallowed expense + 30% penalty</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Check threshold before every payment</td></tr>
            <tr><td style="padding: 10px;">Late filing</td><td style="padding: 10px;">Penalties + interest + notices</td><td style="padding: 10px;">Calendar reminders 5 days before</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Tax Compliance Check</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Calculate GST on an Invoice</h4>
        <p>Client in Delhi, we are in Maharashtra. Service: Website Development, Value: ₹1,00,000</p>
        <ol>
            <li>Is this CGST+SGST or IGST?</li>
            <li>What is the rate?</li>
            <li>Calculate the tax amount</li>
            <li>What is the total invoice value?</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tax Compliance</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 7</li>
    </ul>
</div>
`;

const task8Content = `<h2>📚 TASK 7: FINANCIAL REPORTS</h2>
<div class="content-section">
    <h3>📈 Key Reports</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Report</th>
            <th style="padding: 12px;">Shows</th>
            <th style="padding: 12px;">Frequency</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">P&L Statement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue - Expenses = Profit</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Balance Sheet</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assets, Liabilities, Equity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quarterly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cash Flow</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money in vs out</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly</td></tr>
    </table>
</div>`;

const task9Content = `<h2>📚 TASK 8: BUDGETING</h2>
<div class="content-section">
    <h3>🎯 Budget Creation</h3>
    <ol>
        <li>Review last 3 months actual spending</li>
        <li>Project expected revenue</li>
        <li>Allocate by category (fixed, variable, growth)</li>
        <li>Build 10% buffer for unexpected</li>
        <li>Review weekly, adjust monthly</li>
    </ol>
    <div class="highlight-box">
        <strong>50/30/20 Rule:</strong> 50% operations, 30% growth, 20% reserve
    </div>
</div>`;

const task10Content = `<h2>📚 TASK 9: VENDOR MANAGEMENT</h2>
<div class="content-section">
    <h3>🤝 Payment Terms</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Term</th>
            <th style="padding: 12px;">Meaning</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Net 30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pay within 30 days</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2/10 Net 30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2% discount if paid in 10 days</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">COD</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cash on delivery</td></tr>
    </table>
</div>`;

const task11Content = `<h2>📚 TASK 10: FINAL CERTIFICATION</h2>
<div class="content-section">
    <h3>🎓 Requirements</h3>
    <ul>
        <li>✅ Score 28/30 on quiz</li>
        <li>✅ Create sample invoice correctly</li>
        <li>✅ Pass compliance knowledge check</li>
    </ul>
</div>`;

const task12Content = `
<h2>💹 TASK 12: MARKETPLACE REVENUE & PLATFORM ECONOMICS</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🌐 How Digital Heroes Earns Revenue</h3>
    <p>Digital Heroes delivers Shopify development, WordPress sites, UI/UX design, and content writing through <strong>freelance marketplace platforms</strong>. Understanding platform economics is essential for every finance team member because the money that hits our bank account is <strong>NOT</strong> the same as the order value the client pays.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">💡 The Core Formula:</strong>
        <p style="font-size: 1.15em; margin: 10px 0 0 0; text-align: center;"><strong>Net Revenue = Order Value - Platform Fee (20%) - Payment Processing Fee</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>📊 Platform Fee Structure Breakdown</h3>
    <p>When a client places an order on the marketplace, the platform retains a commission before releasing funds to Digital Heroes. Understanding every layer of deduction is critical for accurate revenue forecasting.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Component</th>
                <th style="padding: 12px; text-align: left;">Rate</th>
                <th style="padding: 12px; text-align: left;">Example (on \$500 order)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Gross Order Value</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">100%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$500.00</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Platform Commission</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">20%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-\$100.00</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Net After Commission</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">80%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$400.00</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Payment Processing</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">~2-3%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-\$8 to -\$12</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 10px;"><strong>Net to DH Bank</strong></td><td style="padding: 10px;"><strong>~77-78%</strong></td><td style="padding: 10px;"><strong>\$388 - \$392</strong></td></tr>
        </tbody>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong>⚠️ Critical Mistake:</strong> Never budget based on gross order value. A \$10,000 order does NOT mean \$10,000 in revenue. After platform fees, you receive approximately \$7,800. Budgeting on gross numbers leads to cash shortfalls.
    </div>
</div>

<div class="content-section">
    <h3>💱 Currency Conversion & Exchange Rate Impact</h3>
    <p>Most marketplace orders are in <strong>USD</strong>, but DH operates in <strong>INR</strong>. Currency conversion adds another variable to revenue calculations.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.3);">
                <th style="padding: 12px; text-align: left;">Factor</th>
                <th style="padding: 12px; text-align: left;">Impact</th>
                <th style="padding: 12px; text-align: left;">DH Best Practice</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Exchange Rate Spread</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Bank rate vs mid-market rate (1-3% gap)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use conservative rate for budgeting (mid-market minus 2%)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Withdrawal Timing</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">INR fluctuates daily against USD</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Withdraw at favorable rates; avoid panic withdrawals</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Transfer Fees</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Wire transfer or payment provider charges</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Consolidate withdrawals to minimize per-transaction fees</td></tr>
            <tr><td style="padding: 10px;"><strong>FIFO Accounting</strong></td><td style="padding: 10px;">Track exchange rate at time of each earning</td><td style="padding: 10px;">Record USD earned date + rate for accurate INR booking</td></tr>
        </tbody>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">📐 Quick Conversion Example:</strong>
        <p style="margin: 10px 0 0 0;">Order: \$1,200 | Platform fee: \$240 (20%) | Net: \$960 | Exchange rate: ₹83.50 | Transfer fee: \$2<br>
        <strong>INR received: (\$960 - \$2) × 83.50 = ₹79,993</strong> (vs gross value of ₹1,00,200 — that is a 20.2% gap!)</p>
    </div>
</div>

<div class="content-section">
    <h3>📈 Revenue Tracking by Order Type</h3>
    <p>DH delivers multiple service categories. Each has different average order values and margins:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Service Type</th>
                <th style="padding: 12px; text-align: left;">Avg Order Value</th>
                <th style="padding: 12px; text-align: left;">Net After Fees</th>
                <th style="padding: 12px; text-align: left;">Typical Margin</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Shopify Store Build</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$800-\$3,000</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$624-\$2,340</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">55-65%</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">WordPress Development</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$500-\$2,000</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$390-\$1,560</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">50-60%</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">UI/UX Design</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$300-\$1,500</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">\$234-\$1,170</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">60-70%</td></tr>
            <tr><td style="padding: 10px;">Content Writing</td><td style="padding: 10px;">\$100-\$500</td><td style="padding: 10px;">\$78-\$390</td><td style="padding: 10px;">65-75%</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ Revenue Reconciliation Checklist</h3>
    <ol>
        <li><strong>Weekly:</strong> Match platform order report with internal order tracker — flag discrepancies immediately</li>
        <li><strong>Bi-weekly:</strong> Verify pending clearances — funds take 7-14 days to clear from platform to bank</li>
        <li><strong>Monthly:</strong> Reconcile total platform earnings with bank deposits — account for all fees, conversions, and timing gaps</li>
        <li><strong>Quarterly:</strong> Analyze revenue by service type, average order value trends, and platform fee impact on margins</li>
    </ol>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #6366F1; padding: 15px; margin: 15px 0;">
        <strong style="color: #818CF8;">🎯 Golden Rule:</strong> Every rupee must be traceable from client order → platform dashboard → withdrawal → bank account → books of accounts. If you cannot trace it, you have a reconciliation gap.
    </div>
</div>
`;

const task13Content = `
<h2>💳 TASK 13: CLIENT PAYMENT MANAGEMENT</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔐 Understanding Marketplace Payment Flow</h3>
    <p>Client payments on marketplace platforms do not go directly to DH. They pass through an <strong>escrow system</strong> — the platform holds funds until milestones are delivered and approved. As a finance professional, you must understand every stage of this flow.</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p style="margin: 0; font-size: 0.95em;">
            <strong style="color: #FBBF24;">Client Places Order</strong> → Funds held in <strong style="color: #60A5FA;">Platform Escrow</strong> → DH delivers milestone → <strong style="color: #34D399;">Client Approves / Auto-Release</strong> → Funds move to <strong style="color: #A78BFA;">DH Platform Balance</strong> → DH initiates <strong style="color: #F472B6;">Withdrawal</strong> → Funds arrive in <strong style="color: #10B981;">DH Bank Account</strong> (3-14 days)
        </p>
    </div>
</div>

<div class="content-section">
    <h3>📋 Milestone-Based Payment Structure</h3>
    <p>For larger projects, payments are split into milestones. Each milestone represents a deliverable that the client must approve before funds release.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Milestone</th>
                <th style="padding: 12px; text-align: left;">Typical %</th>
                <th style="padding: 12px; text-align: left;">Deliverable</th>
                <th style="padding: 12px; text-align: left;">Finance Action</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">M1: Project Start</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">30%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Requirements doc + wireframes</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Record as receivable; track escrow status</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">M2: Design Approval</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">30%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Completed design mockups</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Verify M1 released; book M2 as pending</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">M3: Development Done</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">30%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Functional site/store</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cross-check developer completion with PM report</td></tr>
            <tr><td style="padding: 10px;">M4: Final Delivery</td><td style="padding: 10px;">10%</td><td style="padding: 10px;">QA passed, training provided</td><td style="padding: 10px;">Ensure all milestones released; initiate withdrawal</td></tr>
        </tbody>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong>⚠️ Cash Flow Risk:</strong> A \$2,000 project with 4 milestones means \$600 (30%) is locked in escrow at each stage. If a client delays approval by 2 weeks on each milestone, DH does not receive full payment for 2+ months after work completion. Always track milestone approval dates.
    </div>
</div>

<div class="content-section">
    <h3>🔄 Handling Refunds & Cancellations</h3>
    <p>Refunds directly reduce DH revenue. Every refund must be documented, analyzed, and categorized.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Refund Type</th>
                <th style="padding: 12px; text-align: left;">Trigger</th>
                <th style="padding: 12px; text-align: left;">Financial Impact</th>
                <th style="padding: 12px; text-align: left;">Prevention</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Full Cancellation</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client cancels before delivery</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">100% revenue loss + wasted labor cost</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Strong onboarding, clear scope, fast communication</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Partial Refund</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Scope dispute or quality issue</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">10-50% revenue reduction</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Detailed requirements document; milestone sign-offs</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Platform Dispute</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client raises dispute via platform</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Funds frozen + potential account impact</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Maintain delivery proof; respond within 24 hours</td></tr>
            <tr><td style="padding: 10px;"><strong>Chargeback</strong></td><td style="padding: 10px;">Client disputes with their bank/card</td><td style="padding: 10px;">Full amount reversed + chargeback fee</td><td style="padding: 10px;">Document all deliverables; keep communication trails</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>⚖️ Payment Dispute Resolution Process</h3>
    <p>When a client disputes an order, finance must act immediately. Delayed response = automatic ruling in client's favor on most platforms.</p>
    <ol>
        <li><strong>Hour 0-1:</strong> Alert PM and document all deliverables, communication history, and milestone approvals</li>
        <li><strong>Hour 1-4:</strong> Gather evidence — screenshots, delivery links, platform messages, approval timestamps</li>
        <li><strong>Hour 4-24:</strong> Submit formal response through platform dispute system with all evidence attached</li>
        <li><strong>Day 1-7:</strong> Monitor dispute status daily; respond to platform queries within 4 hours</li>
        <li><strong>Resolution:</strong> If resolved in DH's favor — record as recovered revenue. If lost — record as bad debt expense, analyze root cause, update prevention protocols</li>
    </ol>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">📊 DH Target:</strong> Maintain dispute rate below 2% of total orders. Refund rate below 3%. Track these monthly and flag any upward trends immediately to leadership.
    </div>
</div>

<div class="content-section">
    <h3>⏰ Payment Clearance Timelines</h3>
    <p>Different withdrawal methods have different processing times. Finance must plan cash flow around these delays.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.3);">
                <th style="padding: 12px; text-align: left;">Method</th>
                <th style="padding: 12px; text-align: left;">Processing Time</th>
                <th style="padding: 12px; text-align: left;">Fee</th>
                <th style="padding: 12px; text-align: left;">Best For</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Direct Bank Transfer</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">3-5 business days</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Low (\$1-3)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Regular scheduled withdrawals</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">PayPal Transfer</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1-2 business days</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">2-4.5% + conversion</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Urgent small amounts</td></tr>
            <tr><td style="padding: 10px;">Wire Transfer</td><td style="padding: 10px;">1-3 business days</td><td style="padding: 10px;">\$15-25 per wire</td><td style="padding: 10px;">Large lump sums (\$5,000+)</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ Implementation Task: Payment Flow Audit</h3>
    <p>For the last 10 completed orders, verify:</p>
    <ol>
        <li>Was each milestone payment released within 48 hours of delivery?</li>
        <li>What was the average time from order completion to bank deposit?</li>
        <li>Were any orders refunded? What was the root cause?</li>
        <li>Calculate the effective platform fee percentage (including processing and conversion)</li>
    </ol>
</div>
`;

const task14Content = `
<h2>👥 TASK 14: TEAM COMPENSATION & INCENTIVES</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">💰 Compensation = Retention + Motivation</h3>
    <p>The finance team processes payroll and incentives, but compensation is much more than cutting checks. It is the <strong>single biggest factor</strong> in whether talented people stay or leave. At DH, we use a structured framework that combines base salary, performance incentives, and penalties to drive results.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🎯 Compensation Philosophy:</strong>
        <p style="margin: 10px 0 0 0;">Fair base pay + aggressive performance bonuses. Top performers can earn 30-50% above base through incentives. Poor performers face structured penalties. This creates natural self-selection — the best stay and thrive.</p>
    </div>
</div>

<div class="content-section">
    <h3>📊 Salary Structure at Digital Heroes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Component</th>
                <th style="padding: 12px; text-align: left;">Description</th>
                <th style="padding: 12px; text-align: left;">% of CTC</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Basic Salary</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fixed monthly pay — basis for PF, gratuity calculations</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">40-50%</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>HRA</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">House Rent Allowance — tax benefit for employees</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">20-25%</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Special Allowance</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Flexible component — fully taxable</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">20-30%</td></tr>
            <tr><td style="padding: 10px;"><strong>Performance Bonus</strong></td><td style="padding: 10px;">Quarterly/annual variable pay linked to KPI scores</td><td style="padding: 10px;">5-15%</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🏆 Incentive Framework by Role</h3>
    <p>DH operates an <strong>Incentive & Penalty Framework</strong> that varies by department. As a finance person, you must understand each structure to process payments accurately.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.3);">
                <th style="padding: 12px; text-align: left;">Role</th>
                <th style="padding: 12px; text-align: left;">Incentive Trigger</th>
                <th style="padding: 12px; text-align: left;">Calculation Method</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Sales Executive</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Revenue generated above threshold</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Commission percentage on net revenue (after platform fees)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Developer</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Successful delivery + 5-star rating</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Per-order bonus based on order value and client satisfaction</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Designer</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">On-time delivery + client rating</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tiered bonus based on monthly delivery count and quality</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Project Manager</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team KPI achievement + project margins</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Percentage of team's total performance bonus pool</td></tr>
            <tr><td style="padding: 10px;"><strong>CS / Support</strong></td><td style="padding: 10px;">Client satisfaction score + response time</td><td style="padding: 10px;">Monthly bonus for maintaining targets; penalty for SLA breaches</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>⚠️ Penalty Framework</h3>
    <p>Penalties are deducted from salary before payment. Finance must apply them accurately per the approved penalty schedule.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(239, 68, 68, 0.3);">
                <th style="padding: 12px; text-align: left;">Violation</th>
                <th style="padding: 12px; text-align: left;">1st Occurrence</th>
                <th style="padding: 12px; text-align: left;">2nd Occurrence</th>
                <th style="padding: 12px; text-align: left;">3rd+ Occurrence</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Late arrival (after 9:15 AM)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Half-day deduction</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Half-day deduction</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Written warning + deduction</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Poor client communication</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹500 penalty</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹1,000 penalty</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Termination review</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Unexplained absence</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Written warning</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">3 days salary deduction</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Termination</td></tr>
            <tr><td style="padding: 10px;">Missed EOD report</td><td style="padding: 10px;">Marked absent</td><td style="padding: 10px;">Marked absent + warning</td><td style="padding: 10px;">Salary deduction + PIP</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🧮 Payroll Calculation Walkthrough</h3>
    <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Example: Developer — Monthly CTC ₹35,000</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr><td style="padding: 8px;">Basic Salary (45%)</td><td style="padding: 8px; text-align: right;">₹15,750</td></tr>
            <tr><td style="padding: 8px;">HRA (25%)</td><td style="padding: 8px; text-align: right;">₹8,750</td></tr>
            <tr><td style="padding: 8px;">Special Allowance (30%)</td><td style="padding: 8px; text-align: right;">₹10,500</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 8px;"><strong>Gross Salary</strong></td><td style="padding: 8px; text-align: right;"><strong>₹35,000</strong></td></tr>
            <tr><td style="padding: 8px;">(-) 1 late arrival penalty (half-day)</td><td style="padding: 8px; text-align: right; color: #EF4444;">-₹1,346</td></tr>
            <tr><td style="padding: 8px;">(+) Performance incentive (2 five-star deliveries)</td><td style="padding: 8px; text-align: right; color: #10B981;">+₹3,000</td></tr>
            <tr><td style="padding: 8px;">(-) Professional Tax</td><td style="padding: 8px; text-align: right; color: #EF4444;">-₹200</td></tr>
            <tr style="background: rgba(99, 102, 241, 0.2);"><td style="padding: 8px;"><strong>Net Pay</strong></td><td style="padding: 8px; text-align: right;"><strong>₹36,454</strong></td></tr>
        </table>
    </div>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 15px; margin: 15px 0;">
        <strong style="color: #FBBF24;">⚠️ Payroll Rules:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Salary is NEVER delayed — use reserves if revenue is short</li>
            <li>All penalties require documented proof (HR sign-off)</li>
            <li>Incentives are calculated by PM/HR, verified by Finance before disbursement</li>
            <li>Payroll must be processed by 5th of the following month; payment by 10th</li>
        </ul>
    </div>
</div>
`;

const task15Content = `
<h2>📊 TASK 15: FINANCIAL REPORTING & DASHBOARDS</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">📈 Reports Tell the Story of Your Business</h3>
    <p>A financial report is not a stack of numbers — it is a <strong>story about whether the company is winning or losing</strong>. Leadership uses these reports to make every major decision: hiring, expansion, marketing spend, and salary revisions. If you provide inaccurate reports, you are giving leadership a broken compass.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">💡 The 3 Reports Every Finance Person Must Master:</strong>
        <ol style="margin: 10px 0 0 0;">
            <li><strong>Profit & Loss (P&L)</strong> — Are we making money?</li>
            <li><strong>Cash Flow Statement</strong> — Do we have money right now?</li>
            <li><strong>Balance Sheet</strong> — What do we own vs owe?</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📋 Monthly P&L Report Structure (DH Format)</h3>
    <p>Every month by the 10th, finance must produce a P&L report for the previous month. Here is the standard DH P&L format:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Line Item</th>
                <th style="padding: 12px; text-align: left;">Category</th>
                <th style="padding: 12px; text-align: left;">Example (Monthly)</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: rgba(16, 185, 129, 0.1);"><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Gross Platform Revenue</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Total order value on marketplace</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹25,00,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Platform Fees (20%)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Marketplace commission</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹5,00,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Payment Processing</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Transfer and conversion fees</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹50,000</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Net Revenue</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>After all platform deductions</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>₹19,50,000</strong></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Salaries & Benefits</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Team compensation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹10,00,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Tools & Software</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Shopify Partners, design tools, hosting</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹1,50,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Office & Admin</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Rent, utilities, internet</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹2,00,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Marketing & Sales</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Ads, profile optimization</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹1,00,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Incentives & Bonuses</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Performance payouts</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹2,00,000</td></tr>
            <tr style="background: rgba(245, 158, 11, 0.15);"><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>EBITDA</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Earnings before tax & depreciation</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>₹3,00,000</strong></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">(-) Tax Provisions</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GST, TDS, IT provisions</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">-₹75,000</td></tr>
            <tr style="background: rgba(16, 185, 129, 0.2);"><td style="padding: 10px;"><strong>Net Profit</strong></td><td style="padding: 10px;"><strong>Bottom line</strong></td><td style="padding: 10px;"><strong>₹2,25,000 (11.5% margin)</strong></td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>💹 Key Financial KPIs Dashboard</h3>
    <p>Beyond the P&L, DH leadership needs a live dashboard of critical financial KPIs. These should be updated weekly.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">KPI</th>
                <th style="padding: 12px; text-align: left;">Formula</th>
                <th style="padding: 12px; text-align: left;">Target</th>
                <th style="padding: 12px; text-align: left;">Frequency</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Revenue Per Employee</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Net Revenue / Total Headcount</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹50,000+ per month</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Client Acquisition Cost</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sales + Marketing Spend / New Clients</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Below 15% of first order value</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Order Fulfillment Rate</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Completed Orders / Total Orders</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">>95%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Weekly</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Repeat Client Rate</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Returning Clients / Total Clients</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">>30%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Payroll-to-Revenue Ratio</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Total Payroll / Net Revenue</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><55%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
            <tr><td style="padding: 10px;"><strong>Cash Runway</strong></td><td style="padding: 10px;">Bank Balance / Monthly Burn</td><td style="padding: 10px;">>3 months</td><td style="padding: 10px;">Weekly</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📊 Cash Flow Statement — The Timing Report</h3>
    <p>The P&L tells you if you are profitable. The cash flow statement tells you if you have <strong>cash right now</strong>. A profitable company can still go bankrupt if cash timing is wrong.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(59, 130, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Section</th>
                <th style="padding: 12px; text-align: left;">What It Covers</th>
                <th style="padding: 12px; text-align: left;">DH Examples</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Operating Activities</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cash from core business</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Client payments received, salaries paid, vendor payments</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Investing Activities</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Long-term asset purchases</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Laptops, office equipment, software licenses</td></tr>
            <tr><td style="padding: 10px;"><strong>Financing Activities</strong></td><td style="padding: 10px;">Loans, equity, dividends</td><td style="padding: 10px;">Owner contributions, loan repayments</td></tr>
        </tbody>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong>⚠️ The Platform Timing Gap:</strong> Revenue may be recognized when the order is marked complete on the platform, but cash arrives 7-14 days later after withdrawal processing. Always track this gap in cash flow reporting.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ Implementation Task: Build a Mini Dashboard</h3>
    <p>Using real or sample data, create a one-page financial dashboard that includes:</p>
    <ol>
        <li>This month's Net Revenue (after platform fees)</li>
        <li>Revenue Per Employee</li>
        <li>Payroll-to-Revenue Ratio</li>
        <li>Cash Runway in months</li>
        <li>Top 3 expense categories and their % of total</li>
        <li>Month-over-month revenue trend (up/down/flat)</li>
    </ol>
</div>
`;

const task16Content = `
<h2>📑 TASK 16: TAX COMPLIANCE & GST FOR DIGITAL SERVICES</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🚨 Tax Compliance is Non-Negotiable</h3>
    <p>Missed tax deadlines mean <strong>penalties, interest, and potential legal trouble</strong>. As the finance team, you are personally responsible for ensuring DH meets every tax obligation on time. There is zero tolerance for late filings.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">💡 Three Tax Pillars for DH:</strong>
        <ol style="margin: 10px 0 0 0;">
            <li><strong>GST</strong> — Goods & Services Tax on services provided</li>
            <li><strong>TDS</strong> — Tax Deducted at Source on payments to contractors/freelancers</li>
            <li><strong>Income Tax (ITR)</strong> — Annual corporate and individual returns</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>📋 GST for Digital Services — Deep Dive</h3>
    <p>DH provides digital services (web development, design, content) which are classified under <strong>SAC Code 998314</strong> (IT design and development services). The standard GST rate is <strong>18%</strong>.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Transaction Type</th>
                <th style="padding: 12px; text-align: left;">GST Applicable</th>
                <th style="padding: 12px; text-align: left;">Tax Type</th>
                <th style="padding: 12px; text-align: left;">DH Scenario</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Intra-state (within UP)</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">18% (9% CGST + 9% SGST)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">CGST + SGST</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">DH (Lucknow) billing a UP-based client</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Inter-state (different state)</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">18% IGST</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">IGST</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">DH billing a Mumbai or Delhi client</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Export of Services</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">0% (Zero-rated)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Export under LUT</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">DH serving international clients via marketplace</td></tr>
            <tr><td style="padding: 10px;"><strong>Reverse Charge (RCM)</strong></td><td style="padding: 10px;">18% paid by receiver</td><td style="padding: 10px;">RCM</td><td style="padding: 10px;">DH paying unregistered freelancers above ₹5,000/day</td></tr>
        </tbody>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #34D399;">💡 Export Advantage:</strong> Since most DH revenue comes from international clients through the marketplace platform, services qualify as <strong>export of services</strong> under GST. This means zero-rated GST — but you MUST file a Letter of Undertaking (LUT) annually with the GST department to avail this benefit.
    </div>
</div>

<div class="content-section">
    <h3>📊 TDS Obligations</h3>
    <p>When DH pays freelancers, contractors, or service providers, it must deduct TDS (Tax Deducted at Source) and deposit it with the government.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.3);">
                <th style="padding: 12px; text-align: left;">Section</th>
                <th style="padding: 12px; text-align: left;">Payment Type</th>
                <th style="padding: 12px; text-align: left;">TDS Rate</th>
                <th style="padding: 12px; text-align: left;">Threshold</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">194J</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Professional/Technical fees</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">10%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹30,000/year</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">194C</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Contractor payments</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1% (individual) / 2% (company)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹30,000 single / ₹1L aggregate</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">194H</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Commission/Brokerage</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">5%</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹15,000/year</td></tr>
            <tr><td style="padding: 10px;">194I</td><td style="padding: 10px;">Rent</td><td style="padding: 10px;">10%</td><td style="padding: 10px;">₹2,40,000/year</td></tr>
        </tbody>
    </table>
    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong>⚠️ TDS Deposit Deadline:</strong> TDS deducted in any month must be deposited by the <strong>7th of the following month</strong>. Late deposit attracts 1.5% interest per month. TDS return (Form 26Q) due quarterly.
    </div>
</div>

<div class="content-section">
    <h3>📅 Annual Tax Compliance Calendar</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Filing</th>
                <th style="padding: 12px; text-align: left;">Frequency</th>
                <th style="padding: 12px; text-align: left;">Deadline</th>
                <th style="padding: 12px; text-align: left;">Penalty for Late</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GSTR-1 (Sales)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">11th of next month</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹50/day (₹20 if nil)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GSTR-3B (Summary)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">20th of next month</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹50/day + 18% interest</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">TDS Deposit</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">7th of next month</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1.5% per month interest</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">TDS Return (26Q)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Quarterly</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">31st of month after quarter</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹200/day (max = TDS amount)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GSTR-9 (Annual)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Annual</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">31st December</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹200/day (max 0.5% of turnover)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">ITR Filing</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Annual</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">31st October (companies)</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹10,000 late fee + interest</td></tr>
            <tr><td style="padding: 10px;">LUT for Exports</td><td style="padding: 10px;">Annual</td><td style="padding: 10px;">Before first export of the year</td><td style="padding: 10px;">Must pay IGST on exports without LUT</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Input Tax Credit (ITC) Optimization</h3>
    <p>DH pays GST on many business purchases (software, tools, office supplies). This GST paid can be claimed as <strong>Input Tax Credit</strong> against GST collected from domestic clients.</p>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">ITC Example:</h4>
        <ul>
            <li>GST collected from domestic clients this month: ₹36,000</li>
            <li>GST paid on purchases: software ₹3,600 + internet ₹900 + stationery ₹450 = ₹4,950</li>
            <li><strong>Net GST payable: ₹36,000 - ₹4,950 = ₹31,050</strong></li>
        </ul>
        <p>To claim ITC: vendor must have filed their GSTR-1, invoice must match GSTR-2A auto-populated data, and payment must be made within 180 days.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ Tax Compliance Checklist</h3>
    <ol>
        <li>Maintain GST filing calendar with alerts set 3 days before each deadline</li>
        <li>Reconcile GSTR-2A with purchase records monthly — claim all eligible ITC</li>
        <li>Track all freelancer/contractor payments for TDS compliance</li>
        <li>Renew LUT before April 1st each year for export services</li>
        <li>Keep all invoices, payment proofs, and delivery records for 7 years (audit requirement)</li>
    </ol>
</div>
`;

const task17Content = `
<h2>🚀 TASK 17: CAREER GROWTH & CERTIFICATION IN FINANCE</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📈 Your Finance Career Path at Digital Heroes</h3>
    <p>Finance at DH is not a dead-end desk job. It is a <strong>high-impact leadership track</strong>. The company is scaling from ₹9.2 Crores to ₹75 Crores — that means the finance function must scale with it. The person who builds this function will become an indispensable leader.</p>
</div>

<div class="content-section">
    <h3>🪜 The Finance Career Ladder</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Level</th>
                <th style="padding: 12px; text-align: left;">Role</th>
                <th style="padding: 12px; text-align: left;">Key Responsibilities</th>
                <th style="padding: 12px; text-align: left;">Timeline</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">L1</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Finance Intern/Trainee</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Data entry, invoice processing, basic reconciliation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">0-3 months</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">L2</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Finance Executive</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Full payroll, vendor management, GST filing, platform reconciliation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">3-12 months</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">L3</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Senior Finance Executive</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Financial reporting, budgeting, cash flow forecasting, audit coordination</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1-2 years</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">L4</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Finance Manager</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Strategic planning, investor relations, process automation, team management</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">2-4 years</td></tr>
            <tr><td style="padding: 10px;">L5</td><td style="padding: 10px;"><strong>Head of Finance / CFO</strong></td><td style="padding: 10px;">Financial strategy, fundraising, M&A, board reporting</td><td style="padding: 10px;">4+ years</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🎓 Recommended Certifications & Learning</h3>
    <p>DH reimburses up to ₹5,000/year for courses. These certifications add direct value to your career:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(16, 185, 129, 0.3);">
                <th style="padding: 12px; text-align: left;">Certification</th>
                <th style="padding: 12px; text-align: left;">Provider</th>
                <th style="padding: 12px; text-align: left;">Value for DH Role</th>
                <th style="padding: 12px; text-align: left;">Approx. Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tally Prime Certification</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tally Solutions</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Essential for Indian accounting operations</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹2,000-5,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">GST Practitioner</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">ICAI/NACIN</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Deep GST compliance knowledge</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹3,000-8,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Advanced Excel / Google Sheets</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Coursera/Udemy</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Financial modeling and dashboards</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹500-2,000</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">FEMA/RBI Compliance</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">ICSI/ICAI</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Critical for forex/international payments</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">₹3,000-6,000</td></tr>
            <tr><td style="padding: 10px;">CMA (Cost Management)</td><td style="padding: 10px;">ICMAI</td><td style="padding: 10px;">Strategic cost analysis and budgeting</td><td style="padding: 10px;">₹15,000+ (long-term)</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🛠️ Skills Roadmap by Level</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(245, 158, 11, 0.3);">
                <th style="padding: 12px; text-align: left;">Skill Category</th>
                <th style="padding: 12px; text-align: left;">L1-L2 (Foundation)</th>
                <th style="padding: 12px; text-align: left;">L3 (Intermediate)</th>
                <th style="padding: 12px; text-align: left;">L4-L5 (Advanced)</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Accounting</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tally, journal entries, bank reconciliation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Trial balance, P&L, balance sheet preparation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Consolidation, management accounting, audit prep</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Tax</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">TDS deduction, basic GST filing</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Full GST compliance, ITC optimization, LUT</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tax planning, transfer pricing, FEMA compliance</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Analysis</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Basic ratios, expense tracking</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Variance analysis, KPI dashboards, forecasting</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Financial modeling, scenario planning, investor decks</td></tr>
            <tr><td style="padding: 10px;"><strong>Tools</strong></td><td style="padding: 10px;">Excel, Tally, Google Sheets</td><td style="padding: 10px;">Zoho Books, advanced formulas, pivot tables</td><td style="padding: 10px;">Power BI, financial automation, ERP systems</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>🤝 Mentoring & Learning Culture</h3>
    <ul>
        <li><strong>4 hours/week:</strong> DH provides dedicated learning time — use it for certification prep, financial analysis practice, or reading industry content</li>
        <li><strong>Monthly Finance Review:</strong> Present your findings to leadership — practice builds communication and analytical skills</li>
        <li><strong>Cross-Department Shadowing:</strong> Spend time with Sales, PM, and Dev teams to understand how money flows through each function</li>
        <li><strong>Course Reimbursement:</strong> Up to ₹5,000/year for approved certifications — discuss with manager before enrolling</li>
    </ul>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #60A5FA; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 The Growth Formula:</strong>
        <p style="margin: 10px 0 0 0;">Employee Growth = Company Growth x (Will + Efforts). As DH grows from ₹9.2 Cr to ₹75 Cr, the finance function must scale 8x. The person who builds this capability will be rewarded disproportionately.</p>
    </div>
</div>
`;

const task18Content = `
<h2>🔧 TASK 18: PRACTICAL EXERCISE — MONTHLY FINANCIAL CLOSE</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🎯 Final Certification: Prove Your Finance Mastery</h3>
    <p>This is your final assessment. You will complete a simulated <strong>Monthly Financial Close</strong> for Digital Heroes — the same process you will execute every month as a finance team member. This task tests everything you have learned across all 17 previous tasks.</p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">📋 Requirements to Pass:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Score 28/30 on the comprehensive quiz</li>
            <li>Demonstrate understanding of the full monthly close process</li>
            <li>Show ability to prepare P&L, reconcile platform revenue, and handle tax compliance</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📅 The Monthly Close Process — Step by Step</h3>
    <p>The monthly financial close follows a strict sequence. Each step must be completed before moving to the next.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(99, 102, 241, 0.3);">
                <th style="padding: 12px; text-align: left;">Day</th>
                <th style="padding: 12px; text-align: left;">Task</th>
                <th style="padding: 12px; text-align: left;">Details</th>
                <th style="padding: 12px; text-align: left;">Output</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 1-2</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Revenue Reconciliation</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Match all platform orders with internal tracker. Verify amounts after platform fees. Record currency conversion rates.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reconciled revenue spreadsheet</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 2-3</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Bank Reconciliation</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Match bank statement with books. Identify and clear pending items. Flag discrepancies.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Bank reconciliation statement (BRS)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 3-4</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Expense Verification</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Verify all vendor invoices. Classify each expense. Confirm all approvals obtained.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Verified expense register</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 4-5</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Payroll Processing</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Calculate salaries, apply incentives/penalties, deduct TDS, prepare pay slips.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Payroll register + pay slips</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 5-6</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Tax Compliance</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Deposit TDS by 7th. Prepare GSTR-1 data. Calculate ITC. File returns.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">TDS challan + GST return data</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 7-8</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>P&L Preparation</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Compile revenue, expenses, compute margins. Compare with budget. Analyze variances.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Monthly P&L report</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Day 8-9</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>KPI Dashboard Update</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Update all financial KPIs. Revenue per employee, cash runway, DSO, margins.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Updated financial dashboard</td></tr>
            <tr><td style="padding: 10px;">Day 10</td><td style="padding: 10px;"><strong>Leadership Report</strong></td><td style="padding: 10px;">Present findings to Delhi Team. Highlight concerns. Recommend actions.</td><td style="padding: 10px;">Executive summary + presentation</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3>📝 Simulation Scenario</h3>
    <p>Use the following sample data for February 2026 to mentally walk through the close process:</p>
    <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">February 2026 Data:</h4>
        <ul>
            <li><strong>Platform Orders:</strong> 45 orders totaling \$18,500 gross</li>
            <li><strong>Platform Fee:</strong> 20% = \$3,700</li>
            <li><strong>Net Platform Revenue:</strong> \$14,800</li>
            <li><strong>Average Exchange Rate:</strong> ₹83.20/USD</li>
            <li><strong>INR Revenue:</strong> ₹12,30,560</li>
            <li><strong>Team Size:</strong> 25 members</li>
            <li><strong>Total Payroll:</strong> ₹6,50,000</li>
            <li><strong>Rent + Utilities:</strong> ₹1,80,000</li>
            <li><strong>Software/Tools:</strong> ₹45,000</li>
            <li><strong>Marketing:</strong> ₹75,000</li>
            <li><strong>Incentives Paid:</strong> ₹1,20,000</li>
            <li><strong>Refunds Issued:</strong> 2 orders = \$350 (\$280 net after fee reversal)</li>
            <li><strong>Pending Clearances:</strong> \$2,100 not yet withdrawn from platform</li>
        </ul>
    </div>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">Exercise Questions:</h4>
        <ol>
            <li>What is the net revenue in INR after platform fees and refunds?</li>
            <li>Calculate revenue per employee for this month.</li>
            <li>What is the payroll-to-revenue ratio? Is it healthy?</li>
            <li>What is the total expense for the month?</li>
            <li>Calculate EBITDA and net profit margin.</li>
            <li>How much TDS should be deposited if freelancer payments were ₹80,000?</li>
            <li>When must GSTR-1 for February be filed?</li>
            <li>What is the cash position considering pending clearances?</li>
        </ol>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🎓 Certification Criteria</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
            <tr style="background: rgba(139, 92, 246, 0.3);">
                <th style="padding: 12px; text-align: left;">Criteria</th>
                <th style="padding: 12px; text-align: left;">Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Quiz Score</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">28/30 minimum (93%+)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>All Previous Tasks</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Tasks 1-17 completed with passing scores</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Knowledge Areas</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Platform revenue, payments, payroll, reporting, tax, budgeting</td></tr>
            <tr><td style="padding: 10px;"><strong>Certificate</strong></td><td style="padding: 10px;">Digital Heroes Finance Mastery Certificate with verification code</td></tr>
        </tbody>
    </table>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🏆 Upon Passing:</strong>
        <p style="margin: 10px 0 0 0;">You will receive a <strong>Digital Heroes Finance Mastery Certificate</strong> with a unique verification code. This certificate validates your knowledge of financial operations for a marketplace-based digital agency. You are now ready to manage real financial operations at DH.</p>
    </div>
</div>
`;

const quizQuestions = [
    { question: "A company is profitable but can't pay salaries. This is likely a:", options: ["Revenue problem", "Hiring problem", "Marketing problem", "Cash flow timing problem"], correct: 3 },
    { question: "82% of businesses fail due to:", options: ["Cash flow problems", "Poor marketing", "Bad products", "Competitor pressure"], correct: 0 },
    { question: "Invoice sent 2 weeks after project completion - likely outcome:", options: ["Client pays faster out of guilt", "Delayed payment or forgotten", "No difference in payment timing", "Client appreciates the flexibility"], correct: 1 },
    { question: "Net Profit Margin of 8% for a service business is:", options: ["Excellent - above target", "Industry standard", "Below target - needs improvement to >15%", "Dangerously low"], correct: 2 },
    { question: "Client owes ₹5 lakhs. DSO of 45 days means:", options: ["They're paying ahead of schedule", "Payment is overdue for legal action", "They need a discount", "They're paying slower than 30-day target"], correct: 3 },
    { question: "A Mumbai client buys from a Delhi vendor. GST applied is:", options: ["IGST (single tax to central)", "CGST + SGST (split between states)", "No GST applies to inter-state", "Client chooses which tax"], correct: 0 },
    { question: "₹50,000 paid to a freelancer. TDS to deduct at 10% is:", options: ["₹500", "₹5,000", "₹10,000", "No TDS on freelancers"], correct: 1 },
    { question: "TDS deducted in January must be deposited by:", options: ["January 31st", "March 31st", "February 7th", "April 15th"], correct: 2 },
    { question: "Monthly burn rate ₹10 lakhs, bank balance ₹45 lakhs. Cash runway is:", options: ["Dangerously low at 4.5 months", "Need immediate funding", "Excellent position", "Above 3-month target but monitor"], correct: 3 },
    { question: "'Net 30' payment terms mean:", options: ["Full payment due within 30 days", "30% upfront payment required", "30-day money back guarantee", "Payment in 30 installments"], correct: 0 },
    { question: "P&L shows ₹50L revenue, ₹35L expenses. Net profit is:", options: ["₹50 lakhs", "₹15 lakhs", "₹35 lakhs", "₹85 lakhs"], correct: 1 },
    { question: "Cash flow should be reviewed:", options: ["Only during tax season", "Annually during audit", "Weekly for active management", "When problems arise"], correct: 2 },
    { question: "Budget shows 10% buffer. Actual spend hits 95% of budget. This means:", options: ["Critical overspend warning", "Budget was set too high", "Need to cut all expenses", "Within acceptable range using buffer"], correct: 3 },
    { question: "Invoice missing GST number but has correct amount. This is:", options: ["Non-compliant - client can't claim input credit", "Acceptable for small amounts", "Only a problem for exports", "Fine if client doesn't ask"], correct: 0 },
    { question: "Gross Profit 60%, Net Profit 10%. Operating expenses are:", options: ["10% of revenue", "50% of revenue", "60% of revenue", "Impossible to calculate"], correct: 1 },
    { question: "IGST collected from inter-state sale goes to:", options: ["Only seller's state", "Only buyer's state", "Central government (redistributed)", "Split 50-50 between states"], correct: 2 },
    { question: "50/30/20 budget rule allocates 50% to:", options: ["Growth initiatives", "Tax payments", "Emergency reserves", "Operations and salaries"], correct: 3 },
    { question: "Office rent is classified as:", options: ["Fixed expense (predictable)", "Variable expense (changes monthly)", "Growth investment", "One-time cost"], correct: 0 },
    { question: "Assets = Liabilities + ___:", options: ["Revenue", "Equity", "Expenses", "Profit"], correct: 1 },
    { question: "GSTR-3B filing deadline is typically:", options: ["7th of next month", "End of quarter", "20th of next month", "End of financial year"], correct: 2 },
    { question: "Employee PF deducted but not deposited by employer is:", options: ["Acceptable if done eventually", "Standard practice for cash flow", "Only a problem if employee complains", "Illegal - employer obligations"], correct: 3 },
    { question: "'2/10 Net 30' means pay within 10 days for:", options: ["2% discount", "10% discount", "Free shipping", "Extended warranty"], correct: 0 },
    { question: "Positive cash flow but negative profit indicates:", options: ["Healthy business growth", "Selling assets or collecting receivables", "Normal operations", "Accounting error"], correct: 1 },
    { question: "Client pays 60 days late consistently. Best action:", options: ["Accept it silently", "Refuse future work", "Require upfront payment or deposits", "Sue immediately"], correct: 2 },
    { question: "Expense ₹500 with no receipt can be:", options: ["Claimed in full with no issue", "Claimed if manager approves verbally", "Only an issue above ₹5,000", "Problematic for tax compliance and audit"], correct: 3 },
    { question: "Negative cash flow for 3 months straight means:", options: ["Business is burning cash reserves", "Normal business cycle", "Time to celebrate growth", "Accounting needs audit"], correct: 0 },
    { question: "HRA is:", options: ["Holiday Relief Amount", "House Rent Allowance in salary", "Health Risk Assessment", "Human Resource Audit"], correct: 1 },
    { question: "Google Ads spending is classified as:", options: ["Fixed expense", "Capital expenditure", "Variable expense", "Liability"], correct: 2 },
    { question: "Client consistently pays 15 days late. This is a:", options: ["Cash flow helper", "Marketing problem", "Non-issue if profitable", "Cash flow killer"], correct: 3 },
    { question: "Finance team's role in growth is:", options: ["Growth enabler through smart allocation", "Cost center to minimize", "Only for compliance", "Optional overhead"], correct: 0 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy — this is the recommended approach based on current platform documentation and expert consensus"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "No consequence if it's less than 30 minutes late", "Written warning recorded in your file", "Half-day salary deduction"], c: 3 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself", "Ignore it — it's not your problem — this is the industry-standard position backed by conventional practice", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Send a WhatsApp to HR on the morning of the leave", "Tell your teammate to cover for you and take the day off", "Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Email the CEO directly for approval — implementing this correctly requires understanding the full context of how each element interacts"], c: 2 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Everyone including interns", "Full-time employees after 1 year — this is the standard approach most teams follow", "Senior developers and team leads primarily", "Those with exceptional KPI scores — this is the standard approach most teams follow"], c: 0 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "30 Minutes", "Same day", "Less than 1 Hour"], c: 3 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "No leave in first 2 months unless emergency", "Probation employees get 2 days off per month", "You can take unpaid leave anytime with HR approval"], c: 1 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As an ally whose problem is your common enemy — listen, understand, collaborate", "As someone who should be transferred to management"], c: 2 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement as long as you're online"], c: 1 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["No increment and placed on a Performance Improvement Plan (PIP)", "10-15% increment for meeting expectations", "5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "Verbal warning but salary stays the same"], c: 0 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — maintaining goodwill protects the long-term relationship and future revenue", "Moonlighting — a zero-tolerance offense leading to termination", "Fine as long as it doesn't affect performance", "Allowed with prior written approval from management"], c: 1 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is the most important hiring criteria", "We prioritize degrees from top universities — this ensures compliance with professional standards and prevents cascading issues downstream", "Talent is irrelevant — volume and commitment to output matter more", "Natural talent determines your ceiling at the company"], c: 2 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["30 days", "7 days", "14 days", "60 days"], c: 0 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A rough guideline to review monthly — experienced professionals recognize this as the most reliable path for maintaining quality control", "A reference document primarily for new employees during onboarding"], c: 1 }
];

const task2Quiz = [
    { q: "A company shows ₹50L in revenue this quarter but can't pay ₹2L in salaries. What concept explains this?", o: ["The company is bankrupt and should shut down", "Revenue recognition trap — revenue is not cash until it's in your bank", "The accountant made calculation errors", "Revenue always equals available cash — following this approach consistently ensures predictable outcomes across all scenarios"], c: 1 },
    { q: "You notice 3 unused SaaS subscriptions totaling ₹15,000/month on the expense report. Using the Financial Personality framework, these are:", o: ["Multipliers that boost team productivity", "Maintainers that keep business running", "Growth investments for the future — this reflects the standard operating procedure most organizations follow", "Vampires that suck money with no return — eliminate immediately"], c: 3 },
    { q: "Your company has ₹15L in the bank and burns ₹5L/month. A new client project will bring ₹8L but payment arrives in 45 days. What is your current cash runway?", o: ["8 months because the new project adds revenue", "45 days based on the payment timeline — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Infinite because you have a new client", "3 months — Cash Balance divided by Monthly Burn"], c: 3 },
    { q: "The CEO asks you to approve ₹3L for Facebook ads that generated 5x ROI last quarter. Using the expense personality framework, this is a:", o: ["Multiplier — returns more than spent, invest more when proven", "Vampire — all advertising is wasteful spending", "Maintainer — keeps the business running but doesn't grow it", "Reserve fund expense — should come from the 20% buffer and ensures long-term sustainability"], c: 0 },
    { q: "According to the 50/30/20 Cash Allocation Rule, a company earning ₹10L/month should allocate how much to reserves?", o: ["₹5L for operations — this reflects the standard operating procedure most organizations follow", "₹3L for growth investments — this reflects the standard operating procedure most organizations follow", "₹2L — it's insurance against surprises, never spend it", "₹1L — that's too little for emergencies"], c: 2 },
    { q: "A client owes ₹5L. You invoice on Day 30 with Net-30 terms instead of Day 1. Over a year with 10 similar clients, approximately how many days of cash flow are lost?", o: ["Zero — the money arrives eventually", "30 days — one billing cycle and ensures long-term sustainability", "300 days of lost cash flow potential", "10 days — one per client"], c: 2 },
    { q: "The training describes two types of finance people. A 'Bookkeeper' is dangerous because they:", o: ["Earn too much salary for the value they provide", "Just record what happened instead of predicting what WILL happen — replaceable by software", "Focus too much on tax compliance — this reflects the standard operating procedure most organizations follow", "Spend too long preparing reports — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Your DSO (Days Sales Outstanding) is 55 days. The healthy target is under 30. What does this mean?", o: ["You're collecting payments 25 days too slowly — cash flow is at risk", "Your company is highly profitable — this reflects the standard operating procedure most organizations follow", "Your expenses are too high — this reflects the standard operating procedure most organizations follow", "Your revenue is growing faster than expected"], c: 0 },
    { q: "According to the training, what percentage of businesses fail due to cash flow problems — not bad products or marketing?", o: ["25% — a quarter of all businesses", "82% — the vast majority fail from cash timing issues", "50% — half of all businesses — this reflects the standard operating procedure most organizations follow", "95% — almost all businesses — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A project costs ₹1L in direct costs (developer + designer + tools) and is billed at ₹2L. What is the Gross Profit Margin?", o: ["50% — (Revenue - Direct Costs) / Revenue × 100", "₹1L in absolute profit — this reflects the standard operating procedure most organizations follow", "200% return on investment — this reflects the standard operating procedure most organizations follow", "100% because you doubled your money"], c: 0 }
];

const task3Quiz = [
    { q: "A developer finishes a Shopify store on Monday. You plan to send the invoice 'sometime this week.' According to the training, what's the rule?", o: ["Invoice by end of week is fine", "Invoice within 24-48 hours — no exceptions", "Invoice after client confirms satisfaction", "Wait until the end of the month for batch invoicing"], c: 1 },
    { q: "A client receives your invoice but says 'We'll pay when we can' because there's no due date. Which invoice mistake caused this?", o: ["Missing due date — always include a clear payment deadline", "Wrong GST number on the invoice — this reflects the standard operating procedure most organizations follow", "Vague line item descriptions — this reflects the standard operating procedure most organizations follow", "Sending as PDF attachment only — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "It's Day +7 past the invoice due date and the client hasn't responded to emails. According to the follow-up sequence, what's the next action?", o: ["Wait another week and send another email", "Write off the payment as a loss — this reflects the standard operating procedure most organizations follow", "Phone call + email: 'Immediate attention required' — serious tone", "Escalate to leadership and pause all work"], c: 2 },
    { q: "A large project needs payment terms. The client demands Net 60. According to the training, you should:", o: ["Accept it to win the client relationship", "Agree but add a 5% late fee clause — maintaining goodwill protects the long-term relationship and future revenue", "Never refuse — the client is always right", "Counter with 50/50 split — these long terms are cash flow killers"], c: 3 },
    { q: "You sent an invoice 14 days after completing the work. According to the 'I'll Do It Later' trap, what likely happens?", o: ["Client pays within 7 days anyway — this reflects the standard operating procedure most organizations follow", "The invoice is often 'forgotten' or disputed by the client", "Payment takes 30 days from invoice date", "Nothing — timing doesn't affect payment"], c: 1 },
    { q: "An invoice is missing the GST number. What's the consequence according to the training?", o: ["No impact — GST is optional", "Client won't notice the difference", "Invoice gets rejected, causing payment delays", "Minor formatting issue only — research supports this methodology as the most effective for achieving measurable improvements"], c: 2 },
    { q: "Your invoice has 'Website work' as the line item. A client disputes what they paid for. Which common mistake is this?", o: ["Wrong payment details — this reflects the standard operating procedure most organizations follow", "Vague descriptions — should itemize every deliverable", "Missing invoice number — this reflects the standard operating procedure most organizations follow", "Incorrect tax breakdown — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "For a rush retainer project, which payment term is most appropriate?", o: ["Net 7 — appropriate for retainers and rush work", "Due on Receipt — for small amounts primarily", "Net 30 — standard for all projects", "Net 60 — gives client breathing room and ensures long-term sustainability"], c: 0 },
    { q: "The follow-up sequence says to send a 'friendly reminder' at Day -3. What does Day -3 mean?", o: ["3 days after the due date — this reflects the standard operating procedure most organizations follow", "The third day of the month — this reflects the standard operating procedure most organizations follow", "3 days after sending the invoice", "3 days before the due date — proactive reminder"], c: 3 },
    { q: "According to the training, invoices sent same-day vs 30 days late have drastically different outcomes because:", o: ["Clients still remember the value when invoiced immediately", "Tax laws require same-day invoicing — applying this principle consistently across all projects builds a reputation for professional excellence", "Late invoices incur automatic penalties", "There's no real difference in payment timing"], c: 0 }
];

const task4Quiz = [
    { q: "A team member submits a ₹12,000 expense for 'miscellaneous office supplies' with no receipts. What should you do?", o: ["Approve it — office supplies are always valid", "Reject and require itemized receipts — every rupee must be tracked", "Approve half the amount as a compromise", "Forward to the CEO for decision — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Monthly software subscriptions total ₹45,000 but audit reveals 3 tools haven't been used in 60 days. These are:", o: ["Growth investments for future needs — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Maintainer expenses keeping business ready", "Essential backup tools — keep them active", "Vampire expenses — eliminate immediately to stop cash drain"], c: 3 },
    { q: "A manager requests ₹50,000 for a team-building dinner. Using the expense framework, how do you categorize this?", o: ["Vampire — entertainment is never justified", "Multiplier if it genuinely improves team morale and retention", "Maintainer — standard operational cost", "Always reject — not a business expense"], c: 0 },
    { q: "The expense report shows rent (₹80K), utilities (₹15K), and profitable ads (₹1.2L). Which is the Multiplier?", o: ["Profitable ads — they return more than spent", "Utilities — power keeps systems running", "Rent — it houses the team — this reflects the standard operating procedure most organizations follow", "All of them equally — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A vendor offers a 10% discount for annual prepayment on a ₹20K/month tool. The finance decision should consider:", o: ["Cash flow impact vs savings: ₹24K saved but ₹2.4L locked up front", "Just save money — always take discounts", "Never prepay anything — this is the industry-standard position backed by conventional practice", "Discounts are irrelevant to expense management"], c: 0 },
    { q: "You discover the same expense was submitted by two different team members. This is called:", o: ["Normal when teams share resources — this reflects the standard operating procedure most organizations follow", "A duplicate submission — must be flagged and investigated", "An accounting error that fixes itself", "Expected variance in expense reporting"], c: 1 },
    { q: "The training's critical question for every expense is:", o: ["Can we afford it this month? — this reflects the standard operating procedure most organizations follow", "Did the CEO approve it? — this reflects the standard operating procedure most organizations follow", "Is it under ₹10,000? — this reflects the standard operating procedure most organizations follow", "Is this a Vampire, Maintainer, or Multiplier? If you can't answer, don't approve"], c: 3 },
    { q: "Expense tracking discipline prevents which of these real scenarios?", o: ["Having too much cash in the bank — this reflects the standard operating procedure most organizations follow", "Employees being overpaid — this reflects the standard operating procedure most organizations follow", "Month-end surprise: 'We spent HOW MUCH on subscriptions?!'", "Clients paying too early — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A freelancer submits an invoice for ₹30,000 with only 'consulting services' listed. You should:", o: ["Pay immediately to maintain the relationship", "Request itemized breakdown — vague descriptions create disputes", "Add it to miscellaneous expenses — this reflects the standard operating procedure most organizations follow", "Round it up to ₹35,000 for future work"], c: 1 },
    { q: "The difference between tracking expenses daily vs monthly is:", o: ["No meaningful difference in outcomes — this reflects the standard operating procedure most organizations follow", "Monthly is more accurate than daily — understanding why this works helps prevent the same category of problems from recurring in the future", "Daily tracking catches problems before they compound — monthly is too late", "Daily tracking wastes productive time"], c: 2 }
];

const task5Quiz = [
    { q: "Your company earned ₹12L this month but only ₹7L is in the bank. Payroll is ₹8L due in 5 days. What's happening?", o: ["Accounting made an error — this reflects the standard operating procedure most organizations follow", "The company is losing money — this reflects the standard operating procedure most organizations follow", "Cash flow timing mismatch — ₹5L is stuck in receivables, you need to chase collections NOW", "Revenue is declining — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Cash runway is 2.5 months. The healthy target is 3+ months. What's the immediate priority?", o: ["Hire more salespeople to increase revenue — this reflects the standard operating procedure most organizations follow", "Nothing — 2.5 months is close enough — this is the industry-standard position backed by conventional practice", "Reduce burn rate or accelerate collections — you're dangerously close to running out", "Take a loan to increase the runway — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A client's ₹3L payment is 15 days overdue. Your follow-up sequence says you should be at which stage?", o: ["Phone call + email with serious tone — 'Immediate attention required'", "Friendly first reminder — this reflects the standard operating procedure most organizations follow", "Still waiting patiently — intervening too early often creates more problems than the original issue", "Already escalated to leadership — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The training says 'Revenue ≠ Cash.' A practical example of this danger is:", o: ["Revenue is always higher than cash — following this approach consistently ensures predictable outcomes across all scenarios", "A company with ₹50L revenue unable to pay ₹2L salaries because payments haven't arrived", "Revenue includes future projections — this reflects the standard operating procedure most organizations follow", "Cash is always more than revenue — following this approach consistently ensures predictable outcomes across all scenarios"], c: 1 },
    { q: "Your Current Ratio is 0.8 (below the healthy target of 1.5). This means:", o: ["The company is very profitable — this reflects the standard operating procedure most organizations follow", "Revenue is growing too fast — this reflects the standard operating procedure most organizations follow", "Expenses are under control — this reflects the standard operating procedure most organizations follow", "Short-term liabilities exceed current assets — financial health is poor"], c: 3 },
    { q: "When cash is tight, which payment should have the HIGHEST priority?", o: ["Employee salaries — late payroll kills morale and trust", "Office renovation — this reflects the standard operating procedure most organizations follow", "New marketing campaign — this reflects the standard operating procedure most organizations follow", "Vendor invoices from last quarter"], c: 0 },
    { q: "The Burn Rate is ₹6L/month but revenue is only ₹5L/month. What does this tell you?", o: ["The company is growing rapidly — this reflects the standard operating procedure most organizations follow", "Spending exceeds income — the company is burning through reserves", "Nothing concerning — temporary gap — this is the industry-standard position backed by conventional practice", "Revenue will catch up naturally — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "To improve cash flow timing, the MOST effective action is:", o: ["Delay paying vendors as long as possible", "Invoice immediately upon milestone completion and follow up proactively", "Reduce employee salaries — this reflects the standard operating procedure most organizations follow", "Stop all growth spending — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A project has 50/50 payment terms. The client paid 50% upfront but the project is 90% complete and they haven't paid the remaining 50%. You should:", o: ["Continue work until 100% complete then ask for payment", "Wait for the client to remember — intervening too early often creates more problems than the original issue", "Reduce the final invoice by 10% as goodwill", "Stop work and send the final invoice — never complete work without payment secured"], c: 3 },
    { q: "The training emphasizes that cash flow problems kill 82% of businesses. The root cause is usually:", o: ["Bad products or services — this reflects the standard operating procedure most organizations follow", "Poor marketing strategy — this reflects the standard operating procedure most organizations follow", "Cash timing — money going out faster than it comes in", "Too many employees — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task6Quiz = [
    { q: "Payroll is due on the 1st but a major client payment of ₹5L hasn't arrived yet. What's the correct approach?", o: ["Pay salaries on time no matter what — late payroll destroys morale. Use reserves if needed", "Delay payroll until the client pays — team will understand", "Pay half-salaries now and the rest later — this reflects the standard operating procedure most organizations follow", "Ask employees to wait 3-4 extra days — intervening too early often creates more problems than the original issue"], c: 0 },
    { q: "An employee asks HR about a colleague's salary. According to company policy, discussing salary with colleagues leads to:", o: ["Immediate termination — strict confidentiality policy", "No consequence — transparency is valued", "A verbal warning for the first offense", "A ₹500 fine deducted from salary — the reasoning behind this connects directly to broader principles of professional service delivery"], c: 0 },
    { q: "Salary payment date per company policy is:", o: ["The 1st of the working month — this aligns with industry best practices and ensures consistent results across different project types", "The last day of the current month", "Before the 10th of the following month", "Every Friday (weekly payroll)"], c: 2 },
    { q: "A new employee in their 2nd month requests a salary advance. According to policy, the requirement is:", o: ["Available after 3 months, max 50% of salary, genuine emergencies only", "Available immediately for any employee", "Never available — no advance policy exists", "Available after 1 year of service — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "An employee achieves a KPI score of 85% (Exceeds Expectations). Their increment should be:", o: ["No increment — primarily 90%+ gets raises", "5-10% increment for meeting expectations", "15-20% increment plus bonus — following this approach systematically prevents common mistakes and keeps the workflow predictable", "10-15% increment for exceeding expectations"], c: 3 },
    { q: "TDS (Tax Deducted at Source) must be deducted from salary when:", o: ["For all employees regardless of salary", "Only for employees earning above the tax threshold", "For contract workers — this is the standard approach most teams follow", "TDS doesn't apply to salary — primarily vendor payments"], c: 1 },
    { q: "You discover payroll was calculated without accounting for 2 employees' approved overtime. The fix requires:", o: ["Ignoring it — overtime corrections happen next month", "Waiting until year-end reconciliation — intervening too early often creates more problems than the original issue", "Telling employees to adjust their timesheets", "Immediately recalculating and processing supplementary payment"], c: 3 },
    { q: "The company growth formula states: Employee Growth = Company Growth × (Will + Efforts). This means:", o: ["All employees get equal raises regardless of performance", "Company growth matters for salary increases — this is the standard approach most teams follow", "Individual growth is tied to both company performance and personal effort", "Will and effort have no measurable impact"], c: 2 },
    { q: "An employee with KPI score below 60% receives:", o: ["5-10% increment as minimum — this reflects the standard operating procedure most organizations follow", "No increment and placed on a Performance Improvement Plan (PIP)", "Standard cost-of-living adjustment — this reflects the standard operating procedure most organizations follow", "10-15% increment for effort — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Payroll processing errors erode trust. The MOST critical accuracy check is:", o: ["Verifying office attendance only — this reflects the standard operating procedure most organizations follow", "Cross-checking every component: base, deductions, overtime, leave adjustments", "Checking primarily the total amount — this reflects the standard operating procedure most organizations follow", "Verifying bank account numbers primarily"], c: 1 }
];

const task7Quiz = [
    { q: "A domestic invoice for ₹1,50,000 needs GST. The correct breakdown for intra-state supply is:", o: ["18% IGST = ₹27,000 — this reflects the standard operating procedure most organizations follow", "12% GST flat = ₹18,000", "9% CGST + 9% SGST = ₹27,000 total", "No GST for service invoices under ₹2L"], c: 2 },
    { q: "TDS on a vendor payment of ₹50,000 for professional services should be deducted at:", o: ["18% GST — TDS and GST are the same thing", "No TDS required for amounts under ₹1L", "10% TDS = ₹5,000 deducted and deposited to government", "5% TDS = ₹2,500 — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "GST return filing deadline is missed by 5 days. The consequence is:", o: ["No penalty — 7-day grace period exists", "Automatic extension granted — this reflects the standard operating procedure most organizations follow", "A warning email from GST portal — this is the standard approach most teams follow", "Late fee + interest charges on outstanding tax"], c: 3 },
    { q: "An inter-state invoice (billing from UP to Maharashtra) requires:", o: ["CGST + SGST split — this reflects the standard operating procedure most organizations follow", "IGST at the full rate — not split between states", "No tax for inter-state services", "State-specific rates that vary"], c: 1 },
    { q: "You discover a vendor's GST number on an invoice is invalid. Processing this invoice would:", o: ["Result in denied Input Tax Credit — costing the company real money", "Have no consequences — vendor GST isn't your problem", "Automatically correct itself during filing", "Matter during annual audit — this is the standard approach most teams follow"], c: 0 },
    { q: "The GST compliance calendar requires monthly filing. Missing multiple deadlines results in:", o: ["Just late fees that are negligible — this reflects the standard operating procedure most organizations follow", "Accumulated penalties, potential business license suspension", "Nothing until annual audit — this is the industry-standard position backed by conventional practice", "Automatic forgiveness after 90 days"], c: 1 },
    { q: "A foreign client (USA) is billed in USD. The GST treatment is:", o: ["18% GST applies to all invoices regardless of location", "Zero-rated export — GST may not apply or can be claimed as refund", "Higher GST rate for international clients", "No invoice needed for foreign clients — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 1 },
    { q: "TDS deposited late to the government incurs:", o: ["No penalty — grace period is 30 days", "A warning for the first offense — this is the standard approach most teams follow", "Interest at 1.5% per month + potential penalty", "Automatic waiver if deposited within the quarter"], c: 2 },
    { q: "Input Tax Credit (ITC) allows the company to:", o: ["Claim credit for GST paid on business purchases against GST collected", "Avoid paying GST entirely — this reflects the standard operating procedure most organizations follow", "Get refund of all taxes paid in the year", "Reduce employee TDS obligations — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "During a tax audit, the most critical thing finance must have ready is:", o: ["Employee satisfaction surveys — this reflects the standard operating procedure most organizations follow", "Client testimonials — this reflects the standard operating procedure most organizations follow", "Marketing campaign results — this reflects the standard operating procedure most organizations follow", "Complete documentation: invoices, GST returns, TDS certificates, bank statements"], c: 3 }
];

const task8Quiz = [
    { q: "The P&L statement shows revenue of ₹50L and expenses of ₹42L. The Net Profit Margin is:", o: ["₹8L in absolute terms — this reflects the standard operating procedure most organizations follow", "42% expense ratio — this reflects the standard operating procedure most organizations follow", "50% gross margin — this reflects the standard operating procedure most organizations follow", "16% — (₹8L / ₹50L) × 100, which is healthy (target >15%)"], c: 3 },
    { q: "A Balance Sheet shows Current Assets of ₹20L and Current Liabilities of ₹15L. The Current Ratio is:", o: ["1.33 — below the healthy target of 1.5, needs improvement", "0.75 — dangerously low — this reflects the standard operating procedure most organizations follow", "₹5L difference — healthy surplus — this reflects the standard operating procedure most organizations follow", "20:15 ratio — need more context — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Cash Flow Statement shows positive operating cash flow but negative investing cash flow. This means:", o: ["The company is losing money overall — this reflects the standard operating procedure most organizations follow", "Core business generates cash but company is investing in growth assets — often healthy", "Expenses are out of control — this reflects the standard operating procedure most organizations follow", "Revenue is declining — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The Gross Profit Margin for a services company should be above:", o: ["20% minimum — this reflects the standard operating procedure most organizations follow", "50% for services — below this means pricing or cost problems", "35% for break-even — this reflects the standard operating procedure most organizations follow", "80% always — following this approach consistently ensures predictable outcomes across all scenarios"], c: 1 },
    { q: "A financial report shows DSO of 45 days, up from 30 days last quarter. This trend indicates:", o: ["Collections are slowing down — potential cash flow crisis brewing", "Clients are paying faster — this reflects the standard operating procedure most organizations follow", "Revenue is increasing — this reflects the standard operating procedure most organizations follow", "Nothing actionable — normal fluctuation"], c: 0 },
    { q: "The CEO asks 'Are we profitable?' You should present:", o: ["Just the bank balance — this reflects the standard operating procedure most organizations follow", "Revenue number only — this reflects the standard operating procedure most organizations follow", "Full P&L showing revenue, costs, and net margin with trends", "Number of clients closed — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Monthly financial reports should be delivered:", o: ["Whenever the CEO asks for them — this is the industry-standard position backed by conventional practice", "Quarterly is sufficient for small companies", "By the 5th of the following month — timely reporting enables timely decisions", "Annually during tax season — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "You notice that Gross Profit is healthy (55%) but Net Profit is only 5%. The problem area is:", o: ["Direct project costs are too high", "Revenue is too low — this reflects the standard operating procedure most organizations follow", "Tax rates are unfair — this reflects the standard operating procedure most organizations follow", "Overhead/operating expenses are eating the margin"], c: 3 },
    { q: "A 'Financial Guardian' uses reports to:", o: ["Just satisfy auditors and compliance", "Predict trends and prevent problems before they become disasters", "Create impressive presentations — this reflects the standard operating procedure most organizations follow", "Track employee attendance — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Comparing this month's P&L to last month reveals expenses increased 20% but revenue only grew 5%. This is:", o: ["A red flag — expense growth must not exceed revenue growth sustainability", "Normal growth pattern — this reflects the standard operating procedure most organizations follow", "Positive — spending means investing", "Irrelevant month-to-month variation — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task9Quiz = [
    { q: "Department heads submit budget requests totaling ₹15L but available budget is ₹10L. The correct approach is:", o: ["Prioritize based on ROI: fund Multipliers first, optimize Maintainers, eliminate Vampires", "Cut every department by 33% equally — following this approach consistently ensures predictable outcomes across all scenarios", "Approve all requests — departments know what they need", "Reject all requests and maintain last month's budget"], c: 0 },
    { q: "The 50/30/20 rule says 20% goes to reserves. A manager argues this money is 'sitting idle.' Your response:", o: ["Agree and reallocate to growth spending — maintaining goodwill protects the long-term relationship and future revenue", "It's not idle — it's insurance against surprises. Never spend the last 20%", "Invest reserves in the stock market for returns", "Reduce to 10% as a compromise — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Actual spending exceeds budget by 15% for the 3rd consecutive month. The root cause is likely:", o: ["Budget was set unrealistically low, or spending discipline has broken down", "Inflation making everything more expensive", "Normal variance that corrects over time — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Revenue increased so spending should too"], c: 0 },
    { q: "A budget allocation of ₹10L/month with 50/30/20 means Growth gets:", o: ["₹5L for operations — this reflects the standard operating procedure most organizations follow", "₹3L for marketing, hiring, and expansion", "₹2L for reserves — this reflects the standard operating procedure most organizations follow", "₹10L — everything goes to growth"], c: 1 },
    { q: "Zero-based budgeting means:", o: ["Eliminating all expenses — this reflects the standard operating procedure most organizations follow", "Having zero budget for discretionary spending", "Balancing the budget to exactly zero — this reflects the standard operating procedure most organizations follow", "Starting the budget from zero — every expense must be justified fresh, not just rolled over"], c: 3 },
    { q: "A quarterly budget review reveals the design team spent 40% over budget on freelancers. Action:", o: ["Cut design budget by 40% next quarter as punishment", "Approve retroactively — they must have needed it", "Investigate: was this due to understaffing, scope creep, or poor planning? Adjust accordingly", "Ignore — quarterly variances are normal — intervening too early often creates more problems than the original issue"], c: 2 },
    { q: "The most dangerous budgeting mistake is:", o: ["Being too conservative with estimates — this reflects the standard operating procedure most organizations follow", "Creating the budget and never reviewing it — budgets must be living documents", "Spending less than budgeted — this reflects the standard operating procedure most organizations follow", "Having too many line items — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "When revenue drops 20% unexpectedly, the budget should:", o: ["Stay the same — revenue will recover", "Increase marketing spend to recover revenue", "Be revised immediately: cut Vampire expenses first, then reduce Maintainers", "Eliminate all growth spending permanently — this is the recommended approach based on current platform documentation and expert consensus"], c: 2 },
    { q: "A well-managed budget enables the finance person to:", o: ["Control every department's spending decisions", "Impress auditors during annual reviews", "Predict cash needs, prevent shortfalls, and make informed growth decisions", "Avoid doing cash flow analysis — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Budget variance analysis compares:", o: ["This year's budget to next year's prediction", "Employee salaries to market rates — this reflects the standard operating procedure most organizations follow", "Revenue to expenses only — this reflects the standard operating procedure most organizations follow", "Planned spending vs actual spending to identify patterns and problems"], c: 3 }
];

const task10Quiz = [
    { q: "A vendor offers Net 60 payment terms but you can negotiate Net 30 with a 2% early-payment discount. The better choice is:", o: ["Net 60 — hold cash as long as possible", "Pay immediately to maximize the discount — implementing this correctly requires understanding the full context of how each element interacts", "Net 30 with discount — 2% savings and builds a stronger vendor relationship", "Negotiate Net 90 for even more flexibility"], c: 2 },
    { q: "Three vendors provide the same service. Vendor A is cheapest but has no track record. Vendor B costs 10% more with proven reliability. You should:", o: ["Always choose the cheapest option — following this approach consistently ensures predictable outcomes across all scenarios", "Choose Vendor A and hope for the best — this reflects the standard operating procedure most organizations follow", "Split work between all three vendors equally", "Choose Vendor B — reliability prevents costly disruptions that exceed the 10% premium"], c: 3 },
    { q: "A critical vendor's invoice is overdue by 20 days and they've paused service. The immediate priority is:", o: ["Find a replacement vendor — this reflects the standard operating procedure most organizations follow", "Dispute the invoice to buy more time — this reflects the standard operating procedure most organizations follow", "Negotiate further delay and continue without the service", "Pay immediately — losing a critical vendor causes operational disruption far exceeding the invoice"], c: 3 },
    { q: "Vendor management includes maintaining a preferred vendor list. The main benefit is:", o: ["Limiting competition for bids — this reflects the standard operating procedure most organizations follow", "Supporting long-term business friends — this reflects the standard operating procedure most organizations follow", "Having fewer invoices to process — this reflects the standard operating procedure most organizations follow", "Pre-vetted quality, negotiated rates, and reliable delivery — reducing risk and saving time"], c: 3 },
    { q: "A vendor raises prices by 15% with no advance notice. Your first step is:", o: ["Review the contract terms, compare market rates, and negotiate from a position of data", "Accept it — vendors set their own prices", "Switch vendors immediately — this reflects the standard operating procedure most organizations follow", "Threaten to sue for breach of contract — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "When should you pay vendors?", o: ["On time, per agreed terms — late payments damage relationships and can incur penalties", "As late as possible to maximize your cash position", "When they send multiple reminders — this is the standard approach most teams follow", "At the end of each quarter in bulk — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A new vendor requires upfront annual payment of ₹6L. Before approving, you must consider:", o: ["Just approve if the service is needed — this reflects the standard operating procedure most organizations follow", "Ask the CEO and follow their decision — this reflects the standard operating procedure most organizations follow", "Never pay annually — monthly only — this is the industry-standard position backed by conventional practice", "Cash flow impact: ₹6L locked up front vs ₹50K/month. Is the discount worth the cash constraint?"], c: 3 },
    { q: "Vendor payment records should be maintained because:", o: ["It's just good practice but not essential — this reflects the standard operating procedure most organizations follow", "For tax purposes during annual filing — this is the standard approach most teams follow", "Vendors don't keep their own records — this is the industry-standard position backed by conventional practice", "Legal compliance and audit trail — plus they help negotiate better terms with spending history"], c: 3 },
    { q: "The best time to negotiate vendor rates is:", o: ["When you're desperate for their service — this reflects the standard operating procedure most organizations follow", "Never — vendor rates are fixed — this is the industry-standard position backed by conventional practice", "When renewing contracts — you have leverage with spending history and competitive alternatives", "When they increase prices — this is the standard approach most teams follow"], c: 2 },
    { q: "A vendor sends an invoice with incorrect amounts — ₹15K more than agreed. You should:", o: ["Deduct ₹15K silently from the payment — this reflects the standard operating procedure most organizations follow", "Pay the full amount to avoid conflict — this reflects the standard operating procedure most organizations follow", "Flag the discrepancy immediately and request a corrected invoice before processing", "Pay now and sort it out later — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task11Quiz = [
    { q: "82% of businesses fail due to which issue — according to the training?", o: ["Cash flow timing problems", "Bad marketing strategy", "Poor product quality", "Lack of talented employees"], c: 0 },
    { q: "The 50/30/20 rule allocates the 30% growth portion to:", o: ["Employee salaries and benefits", "Emergency reserves and tax buffer", "Office rent and utilities — this reflects the standard operating procedure most organizations follow", "Marketing, ads, hiring, and expansion investments"], c: 3 },
    { q: "An invoice sent 30 days after work completion typically results in:", o: ["Normal payment within terms — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Faster payment due to accumulated value", "Automatic late fees for the vendor", "Being 'forgotten' or disputed by the client"], c: 3 },
    { q: "Net Profit Margin target for a healthy services business is:", o: ["Greater than 5%", "Greater than 10%", "Greater than 15%", "Greater than 30%"], c: 2 },
    { q: "A 'Vampire' expense is best described as:", o: ["An unused subscription that sucks money with no return", "A large but necessary business cost", "A seasonal expense that varies each month", "A government tax obligation — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "When the Current Ratio falls below 1.0, it means:", o: ["The company is growing faster than expected", "Revenue is strong but expenses are high — this reflects the standard operating procedure most organizations follow", "Current liabilities exceed current assets — company can't cover short-term obligations", "Cash runway is above 6 months — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The follow-up sequence for overdue invoices progresses from:", o: ["Friendly reminder → Direct → Firm → Serious → Escalate over 14+ days", "No follow-up needed — clients pay on time", "Friendly → Legal action within 3 days — this ensures compliance with professional standards and prevents cascading issues downstream", "Single email reminder on the due date primarily"], c: 0 },
    { q: "GST for inter-state transactions uses:", o: ["CGST + SGST equally split", "No GST for inter-state sales", "IGST at the full combined rate", "State-specific GST rates — experienced professionals recognize this as the most reliable path for maintaining quality control"], c: 2 },
    { q: "A Financial Guardian differs from a Bookkeeper because they:", o: ["Have more accounting certifications", "Use more expensive financial software", "Work more hours than bookkeepers — this reflects the standard operating procedure most organizations follow", "Predict problems before they occur and drive profitable decisions"], c: 3 },
    { q: "Cash Runway calculation is:", o: ["Revenue divided by expenses — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Profit divided by number of employees", "Cash Balance divided by Monthly Burn Rate", "Total assets minus total liabilities"], c: 2 },
    { q: "Payroll should NEVER be delayed because:", o: ["It's illegal in all circumstances — this reflects the standard operating procedure most organizations follow", "Late payroll destroys team morale and trust — use reserves if needed", "Employees will immediately quit — this reflects the standard operating procedure most organizations follow", "Government fines are too high — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Input Tax Credit (ITC) allows companies to:", o: ["Avoid all tax obligations — this reflects the standard operating procedure most organizations follow", "Reduce employee salary deductions — this reflects the standard operating procedure most organizations follow", "Get full refund of income tax — this reflects the standard operating procedure most organizations follow", "Offset GST paid on purchases against GST collected on sales"], c: 3 },
    { q: "Budget variance analysis is important because:", o: ["It satisfies audit requirements — this reflects the standard operating procedure most organizations follow", "It's required by company policy — this reflects the standard operating procedure most organizations follow", "It compares planned vs actual spending to catch problems early", "It helps calculate employee bonuses"], c: 2 },
    { q: "When prioritizing expenses during cash crunch, the order should be:", o: ["Salaries → Critical operations → Tax obligations → Growth spending", "Marketing first, then salaries, then taxes", "Growth spending first to generate more revenue", "Pay all vendors before employees — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The biggest invoice timing mistake that costs 300 days of cash flow per year with 10 clients is:", o: ["Invoicing 30 days late instead of Day 1 — each client loses 30 days", "Using Net 30 instead of Net 15 terms", "Not using electronic invoicing — this is the industry-standard position backed by conventional practice", "Sending invoices on Fridays instead of Mondays"], c: 0 },
    { q: "A healthy DSO (Days Sales Outstanding) should be:", o: ["Under 7 days", "Under 15 days", "Under 60 days", "Under 30 days"], c: 3 },
    { q: "The Revenue Recognition Trap teaches that:", o: ["Revenue should be recognized monthly — research supports this methodology as the most effective for achieving measurable improvements", "Recognition timing doesn't affect business — this reflects the standard operating procedure most organizations follow", "Revenue = Cash and both are spendable — this reflects the standard operating procedure most organizations follow", "Revenue is earned (invoice sent) but Cash is money in your bank — only cash is spendable"], c: 3 },
    { q: "Vendor negotiation from a position of strength requires:", o: ["Threatening to switch vendors — this reflects the standard operating procedure most organizations follow", "Always accepting the first offer — following this approach consistently ensures predictable outcomes across all scenarios", "Demanding discounts without justification", "Spending history data, market rate comparisons, and competitive alternatives"], c: 3 },
    { q: "The 'Oxygen Supply' metaphor for finance means:", o: ["Finance is the least important department — applying this principle consistently across all projects builds a reputation for professional excellence", "Cash flow keeps every department alive — no cash = no salaries = no team = no company", "Finance people should work in well-ventilated offices", "Money should flow freely without controls — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Zero-based budgeting is superior to rolled-over budgets because:", o: ["It's faster to prepare each period — this reflects the standard operating procedure most organizations follow", "Every expense must be justified fresh — preventing inherited wasteful spending", "It reduces the finance team's workload — this reflects the standard operating procedure most organizations follow", "It automatically eliminates all unnecessary spending"], c: 1 }
];

const task12Quiz = [
    { q: "A client places a $500 order on the marketplace platform. After the 20% platform commission, how much does DH receive before processing fees?", o: ["$500", "$450", "$400", "$350"], c: 2 },
    { q: "DH received $960 net from a platform order. The exchange rate is ₹83.50/USD with a $2 transfer fee. What is the INR amount received?", o: ["₹80,160", "₹79,993", "₹81,120", "₹78,850"], c: 1 },
    { q: "Why should finance NEVER budget based on gross order value from the marketplace?", o: ["Gross value includes taxes that are refundable", "Platform fees (20%) and processing fees reduce actual revenue to ~78%", "Gross value is calculated differently each month", "The exchange rate always favors gross calculation"], c: 1 },
    { q: "The FIFO method in currency tracking for marketplace earnings means:", o: ["First In, First Out — track the exchange rate at the time each earning was made", "First Invoice, Final Order — prioritize oldest invoices", "Fixed Income, Flexible Outflow — use a constant rate", "Full Integration, Full Output — combine all rates into one"], c: 0 },
    { q: "DH's revenue reconciliation should be done at which frequency for platform orders vs bank deposits?", o: ["Annually during audit", "Monthly only — weekly is excessive", "Weekly for platform orders, monthly for bank-to-books reconciliation", "Daily for all reconciliations without exception"], c: 2 },
    { q: "A Shopify store build order worth $2,000 has a typical margin of 55-65% at DH. What does this margin represent?", o: ["Revenue after platform fees only", "Revenue after all costs including team salary, tools, and platform fees", "The platform commission percentage", "Revenue minus only the developer's salary cost"], c: 1 },
    { q: "DH consolidates withdrawals from the marketplace platform to minimize:", o: ["Tax obligations on each transaction", "Per-transaction transfer fees", "The number of bank statements generated", "Client visibility into payment frequency"], c: 1 },
    { q: "If the USD-INR exchange rate drops from ₹84 to ₹82 between order completion and withdrawal, what happens?", o: ["DH receives more INR than expected", "DH receives approximately 2.4% less INR than initially projected", "Exchange rates do not affect marketplace earnings", "The platform automatically compensates for the difference"], c: 1 },
    { q: "The 'Golden Rule' of revenue reconciliation states that every rupee must be traceable from:", o: ["Invoice to payment only", "Client order → platform dashboard → withdrawal → bank → books of accounts", "Bank statement to tax return", "Platform earnings to employee salaries"], c: 1 },
    { q: "Content writing orders ($100-$500) have a higher margin (65-75%) than Shopify builds (55-65%) because:", o: ["Content writing requires fewer team resources and lower tool costs relative to order value", "The platform charges lower fees for content orders", "Content clients always pay faster", "Content writing orders never get refunded"], c: 0 },
    { q: "When calculating net revenue for monthly reporting, the correct deduction order is:", o: ["Gross Revenue - Salaries - Platform Fees - Tax", "Gross Order Value - Platform Commission - Payment Processing Fees - Transfer Fees", "Gross Revenue - Tax - Salaries - Rent", "Net Profit - Operating Expenses - Depreciation"], c: 1 },
    { q: "Platform funds typically take how long to clear from withdrawal initiation to bank deposit?", o: ["Same day for all methods", "1-3 hours via instant transfer", "3-14 business days depending on withdrawal method", "Exactly 30 days as per standard banking rules"], c: 2 }
];

const task13Quiz = [
    { q: "In the marketplace escrow system, when are funds released to DH?", o: ["When the client places the order", "When DH starts working on the project", "When the milestone is delivered and approved by the client (or auto-released)", "When DH requests a withdrawal"], c: 2 },
    { q: "A $2,000 project has 4 milestones (30/30/30/10 split). If the client delays approval by 2 weeks per milestone, total payment delay is:", o: ["2 weeks", "4 weeks", "6 weeks", "8+ weeks from start to full payment"], c: 3 },
    { q: "A client raises a dispute on the marketplace platform. DH's first action within Hour 0-1 should be:", o: ["Immediately issue a full refund to preserve the account", "Alert the PM and document all deliverables, communication history, and milestone approvals", "Ignore it — disputes resolve automatically", "Contact the client directly outside the platform"], c: 1 },
    { q: "DH's target dispute rate should be maintained below:", o: ["10% of total orders", "5% of total orders", "2% of total orders", "0% — zero disputes is the only acceptable target"], c: 2 },
    { q: "A chargeback differs from a regular refund because:", o: ["Chargebacks are always for smaller amounts", "The client's bank reverses the charge AND DH may incur additional chargeback fees", "Chargebacks only apply to credit card payments on the platform", "There is no real difference between the two"], c: 1 },
    { q: "When a platform dispute is lost, finance should:", o: ["Record as bad debt expense, analyze root cause, update prevention protocols", "Write it off and move on without documentation", "Dispute the dispute decision through legal channels immediately", "Deduct the amount from the developer's salary"], c: 0 },
    { q: "Direct bank transfer from the marketplace platform takes 3-5 business days. This means for payroll timing, withdrawals should be initiated:", o: ["On the day payroll is due", "At least 5-7 business days before payroll date", "At the end of the month only", "Only when the full month's revenue has cleared"], c: 1 },
    { q: "The most effective way to prevent full order cancellations is:", o: ["Never accept large orders", "Strong client onboarding, clear scope documentation, and fast communication", "Require 100% upfront payment on all orders", "Offer deep discounts to keep clients happy"], c: 1 },
    { q: "Which withdrawal method is most cost-effective for regular scheduled withdrawals from the marketplace?", o: ["PayPal — fastest is always best", "Wire transfer — premium service ensures reliability", "Direct bank transfer — low fees ($1-3) and reliable 3-5 day processing", "Cash pickup from platform office"], c: 2 },
    { q: "A partial refund of $200 on a $1,000 order affects DH's financials how?", o: ["$200 revenue loss only", "$200 revenue loss plus the work already invested in delivering the disputed portion", "No financial impact — the platform absorbs refunds", "$200 is deducted from next month's earnings automatically"], c: 1 },
    { q: "Milestone payment tracking is the responsibility of:", o: ["Only the Project Manager", "Only the client", "Finance must track milestone approval dates and coordinate with PM for follow-ups", "The marketplace platform handles everything automatically"], c: 2 }
];

const task14Quiz = [
    { q: "At DH, the single biggest factor in talent retention is:", o: ["Free lunch and office perks", "A structured compensation framework combining base salary, performance incentives, and penalties", "Allowing unlimited work-from-home days", "Having the highest base salary in the market"], c: 1 },
    { q: "A developer with CTC ₹35,000 has Basic Salary at 45%. The Basic Salary amount is:", o: ["₹35,000", "₹17,500", "₹15,750", "₹14,000"], c: 2 },
    { q: "Sales executive incentives at DH are calculated on:", o: ["Gross order value before any deductions", "Net revenue after platform fees", "Total number of orders regardless of value", "Base salary percentage"], c: 1 },
    { q: "An employee arrives at 9:20 AM without prior notice. According to the penalty framework, the immediate financial consequence is:", o: ["₹500 fine", "No consequence for the first time", "Written warning only — no financial impact", "Half-day salary deduction"], c: 3 },
    { q: "Incentive calculations are prepared by PM/HR and then:", o: ["Paid directly without verification", "Verified by Finance before disbursement — finance cross-checks calculations", "Approved by the employee first", "Sent to external auditors for validation"], c: 1 },
    { q: "Payroll at DH must be processed by the ___ and payment made by the ___ of the following month:", o: ["1st; 5th", "5th; 10th", "10th; 15th", "15th; 20th"], c: 1 },
    { q: "A developer earned 2 five-star deliveries this month, worth ₹3,000 incentive, but had 1 late arrival (half-day = ₹1,346 deduction). Net impact on gross salary:", o: ["+₹4,346", "+₹1,654", "+₹3,000 — penalties and incentives are tracked separately", "-₹1,346 — penalties override incentives"], c: 1 },
    { q: "Professional Tax deducted from employee salary in the payroll example was:", o: ["₹500", "₹100", "₹200", "₹350"], c: 2 },
    { q: "Why must penalties always have documented proof with HR sign-off before finance applies them?", o: ["To create extra paperwork for compliance", "To protect both the employee (fair process) and the company (legal protection)", "HR sign-off is optional — it is just a recommendation", "Documentation is only needed for penalties above ₹1,000"], c: 1 },
    { q: "The compensation philosophy at DH is designed so that top performers can earn ___ above base through incentives:", o: ["5-10%", "10-20%", "30-50%", "100%+"], c: 2 },
    { q: "When revenue is short in a given month but payroll is due, the correct finance action is:", o: ["Delay payroll until revenue arrives — employees will understand", "Use company reserves to pay on time — salary is NEVER delayed", "Pay partial salaries and settle the balance next month", "Ask employees to take unpaid leave until cash flow improves"], c: 1 },
    { q: "Which component of salary at DH is fully taxable with no special deduction benefit?", o: ["Basic Salary", "HRA (House Rent Allowance)", "Special Allowance", "Performance Bonus"], c: 2 }
];

const task15Quiz = [
    { q: "The three essential financial reports every finance person must master are:", o: ["Invoice register, expense report, and tax return", "P&L, Cash Flow Statement, and Balance Sheet", "Budget, variance report, and audit report", "Bank statement, payroll register, and vendor ledger"], c: 1 },
    { q: "In the DH P&L format, 'Net Revenue' is calculated as:", o: ["Gross Platform Revenue minus all operating expenses", "Gross Platform Revenue minus Platform Fees (20%) minus Payment Processing fees", "Total bank deposits for the month", "Revenue minus salaries only"], c: 1 },
    { q: "If DH has Net Revenue of ₹19,50,000 and total payroll of ₹10,00,000, the payroll-to-revenue ratio is:", o: ["19.5%", "51.3%", "100%", "Cannot be calculated without additional data"], c: 1 },
    { q: "Revenue Per Employee is calculated as Net Revenue / Total Headcount. With ₹19,50,000 revenue and 25 team members:", o: ["₹78,000 per employee — above the ₹50,000 target", "₹50,000 per employee — exactly at target", "₹39,000 per employee — below target, needs attention", "₹19,50,000 — revenue is attributed to the company, not individuals"], c: 0 },
    { q: "The Cash Flow Statement differs from the P&L because:", o: ["They show the same information in different formats", "P&L shows profitability while Cash Flow shows actual money available RIGHT NOW", "Cash Flow is only prepared annually while P&L is monthly", "P&L includes cash and non-cash items while Cash Flow is cash only — a profitable company can still run out of cash"], c: 3 },
    { q: "The 'Platform Timing Gap' in cash flow reporting refers to:", o: ["The delay between client order and DH starting work", "Revenue recognized when order completes on platform, but cash arrives 7-14 days later after withdrawal", "The time between invoice creation and payment receipt", "The gap between fiscal quarters"], c: 1 },
    { q: "DH's monthly P&L report must be submitted by:", o: ["End of the same month", "The 5th of the following month", "The 10th of the following month", "The 15th of the following month"], c: 2 },
    { q: "EBITDA stands for:", o: ["Earnings Before Investment, Depreciation, Tax, and Amortization", "Earnings Before Interest, Tax, Depreciation, and Amortization", "Expenses Before Income Tax Deductions Applied", "Estimated Budget Including Direct and Total Allocations"], c: 1 },
    { q: "A healthy Order Fulfillment Rate target for DH is:", o: ["Above 50%", "Above 75%", "Above 90%", "Above 95%"], c: 3 },
    { q: "Client Acquisition Cost should be below ___ of the first order value:", o: ["50%", "30%", "15%", "5%"], c: 2 },
    { q: "The KPI dashboard should be updated at which frequency?", o: ["Annually during review", "Quarterly for board meetings", "Monthly for P&L, weekly for cash and operational KPIs", "Daily for all KPIs without exception"], c: 2 },
    { q: "If DH's net profit margin is 11.5% on ₹19,50,000 net revenue, the net profit amount is approximately:", o: ["₹1,12,500", "₹2,24,250", "₹3,00,000", "₹5,00,000"], c: 1 }
];

const task16Quiz = [
    { q: "DH's digital services (web development, design) are classified under which SAC code for GST?", o: ["998311 — IT consulting", "998314 — IT design and development services", "998512 — Accounting services", "997211 — Advertising services"], c: 1 },
    { q: "The standard GST rate for digital/IT services in India is:", o: ["5%", "12%", "18%", "28%"], c: 2 },
    { q: "DH (Lucknow, UP) bills a client in Mumbai (Maharashtra). The GST structure is:", o: ["9% CGST + 9% SGST = 18%", "18% IGST — inter-state supply", "No GST — different states exempt each other", "12% IGST — reduced rate for inter-state services"], c: 1 },
    { q: "DH serves international clients via the marketplace platform. GST on these export services is:", o: ["18% IGST charged to foreign clients", "18% GST collected and refunded later", "Zero-rated — but DH must file LUT (Letter of Undertaking) annually", "Exempt — no filing required for exports"], c: 2 },
    { q: "TDS under Section 194J for professional fees is deducted at:", o: ["1%", "2%", "5%", "10%"], c: 3 },
    { q: "TDS deducted in February must be deposited with the government by:", o: ["February 28th", "March 7th", "March 15th", "March 31st"], c: 1 },
    { q: "Late filing of GSTR-3B attracts a penalty of:", o: ["₹10 per day", "₹50 per day plus 18% interest on tax due", "₹100 per day with no interest", "No penalty — GST filing has a 3-month grace period"], c: 1 },
    { q: "To claim Input Tax Credit (ITC), which condition must be met?", o: ["The vendor must have filed their GSTR-1 and the invoice must match GSTR-2A data", "Only the purchase invoice is needed — no verification required", "ITC is automatically applied without any filing", "The purchase must be above ₹10,000 to qualify for ITC"], c: 0 },
    { q: "The LUT (Letter of Undertaking) for zero-rated export services must be renewed:", o: ["Every month with GST filing", "Every quarter with TDS return", "Annually before April 1st (before first export of the financial year)", "Once at the time of GST registration — valid permanently"], c: 2 },
    { q: "If DH fails to file LUT but continues exporting services, the consequence is:", o: ["No impact — exports are always zero-rated", "DH must pay IGST on exports and claim refund later — cash flow impact", "DH's GST registration gets cancelled", "DH must stop all international orders immediately"], c: 1 },
    { q: "Reverse Charge Mechanism (RCM) under GST applies to DH when:", o: ["DH charges GST on all sales", "DH pays unregistered freelancers above ₹5,000/day — DH must pay GST on their behalf", "Clients refuse to pay GST on invoices", "DH imports physical goods for office use"], c: 1 },
    { q: "All invoices, payment proofs, and delivery records must be retained for:", o: ["1 year", "3 years", "5 years", "7 years (as per audit requirements)"], c: 3 }
];

const task17Quiz = [
    { q: "The finance career path at DH starts at L1 (Finance Intern/Trainee) and can progress to:", o: ["L3 — Senior Finance Executive is the highest role", "L4 — Finance Manager is the ceiling for non-CA professionals", "L5 — Head of Finance / CFO", "There is no structured career path in finance at DH"], c: 2 },
    { q: "A Finance Executive (L2) is expected to handle which responsibilities?", o: ["Only data entry and basic reconciliation", "Full payroll, vendor management, GST filing, and platform reconciliation", "Strategic planning, investor relations, and M&A", "Only tax compliance and audit coordination"], c: 1 },
    { q: "DH reimburses up to ___ per year for approved certifications and courses:", o: ["₹2,000", "₹5,000", "₹10,000", "₹25,000"], c: 1 },
    { q: "Which certification is described as 'essential for Indian accounting operations' in the DH context?", o: ["CMA (Cost Management Accounting)", "FEMA/RBI Compliance", "Tally Prime Certification", "Advanced Excel / Google Sheets"], c: 2 },
    { q: "The Growth Formula at DH states: Employee Growth equals:", o: ["Salary increase percentage × years of service", "Company Growth × (Will + Efforts)", "Revenue generated ÷ hours worked", "Number of certifications × performance rating"], c: 1 },
    { q: "Cross-department shadowing is recommended for finance professionals because:", o: ["It helps finance understand how money flows through Sales, PM, and Dev functions", "HR requires all employees to rotate departments", "It is mandatory for promotion to L3", "Finance professionals need to learn coding and design"], c: 0 },
    { q: "At L3 (Senior Finance Executive), the tax skill expectation includes:", o: ["Basic TDS deduction only", "Full GST compliance, ITC optimization, and LUT management", "Tax planning, transfer pricing, and FEMA compliance", "No tax responsibilities — that is outsourced to CA firms"], c: 1 },
    { q: "DH provides ___ hours per week of dedicated learning time for employees:", o: ["1 hour", "2 hours", "4 hours", "8 hours"], c: 2 },
    { q: "The FEMA/RBI Compliance certification is particularly valuable for DH because:", o: ["DH deals with international payments and forex transactions through marketplace platforms", "All Indian companies must have FEMA-certified staff", "It is required for GST filing", "It helps with employee onboarding processes"], c: 0 },
    { q: "As DH scales from ₹9.2 Cr to ₹75 Cr, the finance function must scale approximately:", o: ["2x", "4x", "8x", "No scaling needed — the same team can handle it"], c: 2 },
    { q: "Monthly Finance Reviews where you present findings to leadership help develop:", o: ["Only technical accounting skills", "Communication, analytical, and presentation skills simultaneously", "Management skills only — not relevant for junior finance staff", "These reviews are optional and not recommended for trainees"], c: 1 }
];

const task18Quiz = [
    { q: "The monthly financial close at DH follows a strict sequence starting with revenue reconciliation on Days 1-2. What is the LAST step on Day 10?", o: ["Bank reconciliation", "Tax compliance filing", "KPI dashboard update", "Leadership report — present findings and recommend actions to Delhi Team"], c: 3 },
    { q: "In the February simulation: 45 orders totaling $18,500 gross with 20% platform fee. Net platform revenue is:", o: ["$18,500", "$16,650", "$14,800", "$13,320"], c: 2 },
    { q: "Using the simulation data: $14,800 net revenue at ₹83.20/USD exchange rate equals approximately:", o: ["₹10,50,000", "₹12,30,560", "₹14,80,000", "₹15,39,200"], c: 1 },
    { q: "Revenue per employee with ₹12,30,560 revenue and 25 team members is approximately:", o: ["₹12,306", "₹30,764", "₹49,222", "₹1,23,056"], c: 2 },
    { q: "Payroll-to-revenue ratio with ₹6,50,000 payroll and ₹12,30,560 revenue is approximately:", o: ["32.8%", "52.8%", "65.0%", "78.3%"], c: 1 },
    { q: "Total expenses for February (Payroll ₹6,50,000 + Rent ₹1,80,000 + Software ₹45,000 + Marketing ₹75,000 + Incentives ₹1,20,000) equal:", o: ["₹8,50,000", "₹10,70,000", "₹12,30,560", "₹9,50,000"], c: 1 },
    { q: "Two refunded orders totaling $350 gross ($280 net after fee reversal) at ₹83.20/USD reduce INR revenue by:", o: ["₹29,120", "₹23,296", "₹35,000", "₹28,000"], c: 1 },
    { q: "If freelancer payments were ₹80,000, TDS at 10% (Section 194J) to deposit is:", o: ["₹800", "₹4,000", "₹8,000", "₹80,000"], c: 2 },
    { q: "GSTR-1 for February must be filed by:", o: ["February 28th", "March 7th", "March 11th", "March 20th"], c: 2 },
    { q: "With $2,100 pending platform clearances at ₹83.20/USD, the actual cash NOT yet in DH's bank is approximately:", o: ["₹1,74,720", "₹2,10,000", "₹1,50,000", "₹84,000"], c: 0 },
    { q: "Bank reconciliation must happen on Days 2-3 of the close. The primary output of this step is:", o: ["A list of all vendor payments", "Bank Reconciliation Statement (BRS) matching bank statement with books", "Employee salary calculations", "Tax filing preparation"], c: 1 },
    { q: "The certification requirement to pass the Finance Mastery assessment is:", o: ["Score 20/30 on the quiz", "Score 25/30 on the quiz", "Score 28/30 (93%+) on the quiz with all tasks 1-17 completed", "Submit a written report only — no quiz required"], c: 2 },
    { q: "During the monthly close, payroll processing on Days 4-5 includes which financial actions?", o: ["Only calculating base salary", "Calculate salaries, apply incentives/penalties, deduct TDS, and prepare pay slips", "Just transferring last month's amounts again", "Asking each department to submit their own payroll"], c: 1 },
    { q: "If EBITDA is ₹1,60,560 on net revenue of ₹12,30,560, the EBITDA margin is approximately:", o: ["8.2%", "10.5%", "13.0%", "15.5%"], c: 2 },
    { q: "The monthly close P&L preparation on Days 7-8 requires comparing actuals against:", o: ["Last year's P&L only", "The budget — to identify and analyze variances", "Industry benchmarks only", "Competitor financial reports"], c: 1 },
    { q: "Why is the Leadership Report on Day 10 the FINAL step of the monthly close?", o: ["It is optional and happens only if requested", "It summarizes all findings, highlights concerns, and provides actionable recommendations based on all preceding steps", "Leadership does not need financial data before Day 10", "It is just a formality — the real work is in Days 1-9"], c: 1 },
    { q: "Cash runway with bank balance ₹20,00,000 and monthly burn of ₹10,70,000 is approximately:", o: ["0.5 months — critical danger", "1.9 months — below 3-month target, needs attention", "3.5 months — healthy position", "5.0 months — excess reserves"], c: 1 },
    { q: "A complete monthly financial close ensures:", o: ["Only that taxes are filed on time", "Only that employees get paid correctly", "Revenue is reconciled, expenses verified, payroll processed, taxes compliant, P&L prepared, KPIs updated, and leadership informed", "That the finance team has work to do each month"], c: 2 },
    { q: "If February had 2 refunded orders, DH's refund rate for the month (out of 45 total orders) is:", o: ["2.0%", "4.4%", "5.0%", "10.0%"], c: 1 },
    { q: "The most critical lesson from this entire finance training is:", o: ["Finance is only about recording historical transactions", "Cash flow is business oxygen — money must flow in BEFORE it flows out, every single time", "Tax compliance is the only thing that matters", "Platform fees are the biggest challenge facing DH"], c: 1 }
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
