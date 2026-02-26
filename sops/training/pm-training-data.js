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
    { id: 11, title: "Final Certification", description: "Comprehensive PM Exam", contentFirst: false, studyGuide: ["⏱️ Time: 90 min", "📝 30 Questions + Video", "🎓 Pass to certify"] }
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
<h2>📚 TASK 10: FINAL PM CERTIFICATION</h2>

<div class="content-section">
<h3>🎓 Certification Requirements</h3>
<div class="highlight-box">
<strong>To become a Certified Digital Heroes PM:</strong>
<ol>
<li>✅ Complete all 9 training modules (10/10 each quiz)</li>
<li>✅ Score 28/30 on final comprehensive exam</li>
<li>✅ Create sample project plan document</li>
<li>✅ Pass scenario-based live assessment</li>
<li>✅ Shadow a senior PM for 1 week</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📋 Final Exam Covers</h3>
<ul>
<li>PM mindset and ownership principles</li>
<li>Client communication standards and templates</li>
<li>Project lifecycle and timeline management</li>
<li>Team coordination and leadership</li>
<li>Scope management and change control</li>
<li>QA processes and delivery standards</li>
<li>Tools and systems proficiency</li>
<li>Crisis management and de-escalation</li>
<li>Metrics and performance tracking</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 You're Ready!</h3>
<p>You've learned everything needed to be an exceptional PM at Digital Heroes. Now prove it.</p>
<div style="background: rgba(16, 185, 129, 0.2); padding: 25px; border-radius: 12px; text-align: center;">
<h4 style="color: #10B981; margin-top: 0;">Complete the Final Quiz to Earn Your PM Certification 🎓</h4>
</div>
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
    { q: "Certification validates:", o: ["Nothing — this is the industry-standard position backed by conventional practice", "Waste of time", "Luck — this reflects the standard operating procedure most organizations follow", "Competency in role"], c: 3 },
    { q: "Continuous learning:", o: ["Ongoing requirement", "Optional — this reflects the standard operating procedure most organizations follow", "Ends at certification", "Not needed — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "Video walkthrough:", o: ["Skip it — this reflects the standard operating procedure most organizations follow", "Optional — this reflects the standard operating procedure most organizations follow", "Demonstrates practical knowledge", "Unnecessary — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Career growth requires:", o: ["Skill development and initiative", "Luck primarily — this reflects the standard operating procedure most organizations follow", "Politics — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Time primarily — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Professional development:", o: ["Personal responsibility", "Not important — this is the industry-standard position backed by conventional practice", "Company responsibility", "Optional — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Mentoring others:", o: ["Avoid — this reflects the standard operating procedure most organizations follow", "Strengthens your knowledge", "Threat — this reflects the standard operating procedure most organizations follow", "Not possible — this is the industry-standard position backed by conventional practice"], c: 1 },
    { q: "Industry updates:", o: ["Ignore — intervening too early often creates more problems than the original issue", "Optional — this reflects the standard operating procedure most organizations follow", "Not important — this is the industry-standard position backed by conventional practice", "Stay current for relevance"], c: 3 },
    { q: "Skill gaps:", o: ["Hide them — this reflects the standard operating procedure most organizations follow", "Identify and address", "Ignore — intervening too early often creates more problems than the original issue", "Not possible"], c: 1 },
    { q: "Performance reviews:", o: ["Avoid — this reflects the standard operating procedure most organizations follow", "Opportunity for growth feedback", "Threatening — this reflects the standard operating procedure most organizations follow", "Skip — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Long-term goals:", o: ["Not needed — this is the industry-standard position backed by conventional practice", "Unrealistic — this reflects the standard operating procedure most organizations follow", "Guide development efforts", "Avoid — this reflects the standard operating procedure most organizations follow"], c: 2 }
];



// Make task content available globally for openTask() function
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;
if (typeof task12Content !== 'undefined') window.task12Content = task12Content;
if (typeof task14Content !== 'undefined') window.task14Content = task14Content;


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
