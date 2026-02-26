// HR Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "HR Mindset", description: "People = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🧠 Concept: Hiring cost vs value", "📊 Data: Bad hire = 3x salary cost"] },
    { id: 3, title: "Tech-Savvy Hiring", description: "Developer Hiring Guide", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📞 Scripts: Phone Screen", "🎤 Scripts: Interview Questions"] },
    { id: 4, title: "Cultural Fit", description: "Beyond Skills", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Framework: STAR Method", "🚩 Red Flags: Attitude Problems"] },
    { id: 5, title: "Onboarding Excellence", description: "First 90 Days", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Checklist: Day 1", "🎯 Plan: 30-60-90"] },
    { id: 6, title: "Performance Management", description: "1:1s & Reviews", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Template: Performance Review", "💬 Script: Difficult Conversations"] },
    { id: 7, title: "Compensation", description: "Salary & Benefits", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Structure: Pay Bands", "📈 Process: Salary Reviews"] },
    { id: 8, title: "Legal Compliance", description: "Contracts & Policies", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📜 Doc: Employment Contract", "⚖️ Laws: Leave, Termination"] },
    { id: 9, title: "Employee Relations", description: "Conflict Resolution", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🤝 Process: Mediation", "📝 Doc: Written Warnings"] },
    { id: 10, title: "Exit Management", description: "Offboarding Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📋 Checklist: Exit Interview", "🔐 Process: Access Revocation"] },
    { id: 11, title: "Final Certification", description: "HR Mastery Exam", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 20 Questions", "🎥 Video Submission"] }
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
<h2>📚 TASK 1: HR MINDSET - People ARE Revenue</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into HR practices, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1)); border: 2px solid rgba(168, 85, 247, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #A78BFA; font-size: 1.2em;">⭐ YOU (HR)</strong> → <strong>THE TALENT ENGINE - recruit A-players who power the chain</strong><br>
            ↓<br>
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #F472B6;">Development</strong> → delivers quality work<br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #60A5FA;">CS Team</strong> → protects satisfaction<br>
            ↓<br>
            <strong style="color: #FBBF24;">Reviews & Growth</strong> → the cycle continues
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(168, 85, 247, 0.15); border-left: 4px solid #A855F7; padding: 15px; margin: 15px 0;">
        <strong style="color: #A78BFA;">👥 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As HR, you are the <strong>TALENT ENGINE</strong> that powers every other function. Every developer you hire builds websites that generate reviews. Every sales rep you onboard brings clients that keep the company alive. Every bad hire you prevent saves $100,000+. Your decisions directly impact whether we reach ₹75 Crores or not.</p>
    </div>
    
    <p style="color: #A78BFA; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Wrong people = Broken chain = Failed mission. You build the team that achieves everything.</p>
</div>

<div class="content-section">
    <h3>💰 The $100,000 Mistake</h3>
    <p>A bad hire doesn't just fail at their job. They:</p>
    <ul>
        <li>💸 Cost 3x their salary in recruitment, training, and severance</li>
        <li>⏰ Waste 6+ months of team productivity</li>
        <li>😤 Demotivate other team members</li>
        <li>🔄 Create a hiring cycle that repeats</li>
    </ul>
    <div class="highlight-box">
        <strong>Real Story:</strong>
        <p>We once hired a "rockstar developer" who interviewed perfectly. 3 months in, we discovered he was outsourcing his work to someone else. Total cost: $120,000 (salary, projects delayed, re-hiring, client trust damaged).</p>
        <p><strong>Lesson:</strong> Verification > Belief. Test ACTIONS, not just words.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The HR Mission</h3>
    <p>Your job is NOT to fill seats. Your job is to:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong Mindset</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to hire someone for this role"</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right Mindset</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to find someone who will multiply team output"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 The Economics of Hiring</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cost</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Job Posting + Screening</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5,000-10,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interview Time (HR + Team)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹15,000-25,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training (2-4 weeks)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹30,000-50,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad Hire Replacement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">₹1,00,000+</td></tr>
    </table>
    <div class="warning-box">
        <strong>Takeaway:</strong> Invest time in hiring RIGHT the first time. 10 minutes of extra phone screening can save months of pain.
    </div>
</div>
`;

const task3Content = `
<h2>📚 TASK 2: TECH-SAVVY HIRING - The Developer Filter</h2>

<div class="content-section">
    <h3>📞 Phone Screen Script (10 min)</h3>
    <div class="highlight-box">
        <strong>Opening:</strong>
        <p>"Hi [Name], this is [Your Name] from Digital Heroes. I saw your application for the Web Developer role. I have a few quick questions - will take 5-10 minutes. Is this a good time?"</p>
    </div>
    
    <h4>Question 1: Laptop Ownership</h4>
    <p><strong>"Do you have your own laptop?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Yes, I have a laptop"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Continue</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"No, I'll use office computer"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ REJECT (shows dependency)</td></tr>
    </table>
    
    <h4>Question 2: Computer Usage</h4>
    <p><strong>"How many hours per day do you use a computer/laptop - not phone, computer?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"4+ hours daily"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Continue</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Mostly use phone"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ REJECT</td></tr>
    </table>
    
    <h4>Question 3: Problem-Solving</h4>
    <p><strong>"If your laptop has a problem - slow, hanging, virus - what do you do?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Google it, try to fix myself"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Tech-Savvy</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Take to repair shop"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ Not tech-minded</td></tr>
    </table>
</div>
`;

// Additional tasks would follow same pattern...
const task4Content = `
<h2>📚 TASK 3: CULTURAL FIT ASSESSMENT</h2>

<div class="content-section">
    <h3>🎯 The STAR Method Deep Dive</h3>
    <p>STAR is the gold standard for behavioral interviews because past behavior predicts future behavior.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Component</th>
            <th style="padding: 12px;">What to Ask</th>
            <th style="padding: 12px;">What to Listen For</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>S</strong>ituation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Describe the context"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clarity, relevance, honesty</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>T</strong>ask</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What was YOUR responsibility?"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ownership vs "we did"</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>A</strong>ction</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What exactly did YOU do?"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specific steps, initiative</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>R</strong>esult</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What was the outcome?"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Measurable impact, learning</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚩 Red Flags to Watch</h3>
    <ul>
        <li>❌ Always blaming previous employers/colleagues</li>
        <li>❌ Vague answers without specific examples</li>
        <li>❌ Using "we" when asked about personal contribution</li>
        <li>❌ Badmouthing clients or industry</li>
        <li>❌ Cannot name something they learned from failure</li>
    </ul>
    <div class="highlight-box">
        <strong>Golden Question:</strong> "Tell me about a time you made a significant mistake at work. What happened and what did you learn?" 
        <br><br>A great candidate owns the mistake fully and shows growth. A red flag deflects blame.
    </div>
</div>
`;

const task5Content = `
<h2>📚 TASK 4: ONBOARDING EXCELLENCE</h2>

<div class="content-section">
    <h3>📋 Day 1 Complete Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);"><th style="padding: 12px;">Before They Arrive</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ System accounts created (Slack, Email, Tools)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ First task identified and documented</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Buddy/mentor assigned and informed</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Welcome message prepared</td></tr>
        <tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">First Hour</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Welcome call (camera on)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Tool access verification</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Company overview (values, mission)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Assign first meaningful task</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>⚠️ CAUTIONARY TALE: The Developer Who Quit After 3 Days</h3>
    <p><strong>What went wrong:</strong></p>
    <ul>
        <li>Day 1: No access to any systems. HR said "IT will set it up soon"</li>
        <li>Day 2: Still waiting. Sat idle, reading documentation</li>
        <li>Day 3: Got partial access. No mentor assigned. No one checked in</li>
        <li>Day 4: Sent resignation email: "This isn't well organized. I've accepted another offer."</li>
    </ul>
    
    <p><strong>Cost to company:</strong></p>
    <ul>
        <li>₹25,000 wasted on recruitment process</li>
        <li>₹15,000 3-day salary</li>
        <li>4 weeks to find replacement</li>
        <li>Client project delayed by 6 weeks</li>
        <li>Total impact: <strong>₹2+ lakhs</strong></li>
    </ul>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Lesson:</strong> Your new hire's first impression is YOUR responsibility. They should feel wanted, prepared for, and productive from Hour 1 – not abandoned.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 SUCCESS STORY: The Perfect Onboarding</h3>
    <p><strong>Situation:</strong> New CS team member, Priya, joining remotely during busy season.</p>
    
    <p><strong>Day 1 (What We Did):</strong></p>
    <ul>
        <li>9:00 AM - All accounts ready before her first login</li>
        <li>9:15 AM - Welcome call with manager + team, cameras on, casual introduction</li>
        <li>10:00 AM - Buddy (Ravi) scheduled to check-in 3x daily</li>
        <li>11:00 AM - First task assigned: "Review and summarize 10 past support tickets"</li>
        <li>3:00 PM - Buddy reviewed her work, gave positive feedback</li>
        <li>5:00 PM - End-of-day call: Manager asked "How was your first day? Any concerns?"</li>
    </ul>
    
    <p><strong>Week 1 Result:</strong> Priya told her buddy: "I've never felt so welcomed at any company before."</p>
    <p><strong>Month 3 Result:</strong> Priya became the fastest team member to hit 100% CSAT score.</p>
    <p><strong>Year 1:</strong> Priya referred 2 friends who became great hires.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 ROI of Great Onboarding:</strong> 30 minutes of preparation = 3+ years of retention + referrals.
    </div>
</div>

<div class="content-section">
    <h3>🎯 30-60-90 Day Plan with Specific Examples</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 15px;">
            <strong>Days 1-30: LEARN</strong><br>
            Understand the role, tools, team, and culture. Complete all training modules. Observe workflows.
            <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                <strong>Example Goals (Developer):</strong>
                <ul style="margin: 5px 0;">
                    <li>✅ Complete all training modules with 100% quiz scores</li>
                    <li>✅ Shadow 3 senior developer code reviews</li>
                    <li>✅ Complete 2 simple bug fixes with mentorship</li>
                    <li>✅ Document questions to discuss in weekly 1:1</li>
                </ul>
            </div>
        </td></tr>
        <tr style="background: rgba(99, 102, 241, 0.15);"><td style="padding: 15px;">
            <strong>Days 31-60: CONTRIBUTE</strong><br>
            Start handling real work independently. Apply training knowledge. Ask fewer questions.
            <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                <strong>Example Goals (Developer):</strong>
                <ul style="margin: 5px 0;">
                    <li>✅ Complete 5 independent tasks without major revision</li>
                    <li>✅ Lead 1 client communication with manager backup</li>
                    <li>✅ Identify 1 improvement to team workflow</li>
                    <li>✅ Participate actively in team meetings</li>
                </ul>
            </div>
        </td></tr>
        <tr style="background: rgba(139, 92, 246, 0.15);"><td style="padding: 15px;">
            <strong>Days 61-90: IMPACT</strong><br>
            Fully independent. Suggest improvements. Train others. Hit performance targets.
            <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                <strong>Example Goals (Developer):</strong>
                <ul style="margin: 5px 0;">
                    <li>✅ Manage own client project end-to-end</li>
                    <li>✅ Mentor new joiner during their first week</li>
                    <li>✅ Hit 90%+ on all KPIs</li>
                    <li>✅ Contribute 1 process improvement implemented</li>
                </ul>
            </div>
        </td></tr>
    </table>
</div>
`;

const task6Content = `
<h2>📚 TASK 5: PERFORMANCE MANAGEMENT</h2>

<div class="content-section">
    <h3>📊 Weekly 1:1 Meeting Template</h3>
    <div class="highlight-box">
        <strong>15-30 minutes, every week, non-negotiable.</strong>
        <ol>
            <li><strong>Wins</strong> (3 min): "What went well this week?"</li>
            <li><strong>Challenges</strong> (5 min): "What's blocking you?"</li>
            <li><strong>Support</strong> (5 min): "What do you need from me?"</li>
            <li><strong>Goals</strong> (3 min): "What's your focus next week?"</li>
            <li><strong>Personal</strong> (2 min): "How are you doing overall?"</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>💬 Difficult Conversation Script</h3>
    <div class="warning-box">
        <strong>When addressing performance issues:</strong>
        <ul>
            <li>State the specific behavior: "I noticed [specific action]"</li>
            <li>Explain the impact: "This affects [team/client/project] because..."</li>
            <li>Ask for their perspective: "Help me understand what happened"</li>
            <li>Agree on solution: "What can we do differently going forward?"</li>
            <li>Document everything: Send summary email after conversation</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>🎭 REAL PERFORMANCE CONVERSATION EXAMPLE</h3>
    <p><em>Handling a developer who has been missing deadlines:</em></p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong style="color: #818CF8;">MANAGER:</strong> "Amit, thanks for joining. I wanted to talk about something I've noticed over the past 2 weeks. You've missed the deadline on 3 ticket deliveries. Let's discuss what's happening."</p>
        
        <p style="color: #94A3B8; font-style: italic;">[States specific behavior, not vague criticism]</p>
        
        <p><strong style="color: #818CF8;">MANAGER:</strong> "I want you to know I'm not here to criticize. I'm here to understand and help. What's been going on?"</p>
        
        <p><strong style="color: #F9A8D4;">AMIT:</strong> "I've been struggling because the requirements keep changing mid-task. By the time I finish, there's a new update from the client."</p>
        
        <p><strong style="color: #818CF8;">MANAGER:</strong> "That makes sense. Changing requirements can be really frustrating. Here's what I can do - I'll make sure all requirements are confirmed before assignment. And if changes come during the task, we'll adjust the deadline. Does that help?"</p>
        
        <p><strong style="color: #F9A8D4;">AMIT:</strong> "Yes, that would help a lot. I also think I need to push back on unclear briefs instead of just guessing."</p>
        
        <p><strong style="color: #818CF8;">MANAGER:</strong> "Exactly. Let's commit to this: You flag unclear briefs immediately, and I ensure requirements are locked before you start. Sound fair?"</p>
        
        <p><strong style="color: #F9A8D4;">AMIT:</strong> "Yes, thank you for understanding."</p>
        
        <p><strong style="color: #818CF8;">MANAGER:</strong> "Great. I'll send you a summary of what we agreed on. Let's check in next week to see if it's working."</p>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px; background: rgba(16, 185, 129, 0.2);">
        <strong>💡 Key Points:</strong>
        <ul style="margin: 10px 0;">
            <li>✅ Started with facts, not accusations</li>
            <li>✅ Asked for their perspective before judging</li>
            <li>✅ Identified root cause (changing requirements)</li>
            <li>✅ Created shared solution with commitments from both sides</li>
            <li>✅ Planned follow-up accountability</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>⚠️ CAUTIONARY TALE: The Ultimatum That Backfired</h3>
    <p><strong>What went wrong:</strong> A manager had a performance issue with a designer. Instead of having a proper conversation, they sent an email:</p>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5); font-style: italic;">
        "Your work quality has been declining. You need to improve immediately or face consequences. No more excuses."
    </div>
    
    <p><strong>Result:</strong></p>
    <ul>
        <li>Designer felt attacked and demotivated</li>
        <li>Started looking for new job immediately</li>
        <li>Quit 2 weeks later without warning</li>
        <li>Took client knowledge with them</li>
        <li>Team had to scramble for 4 weeks to cover</li>
    </ul>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Lesson:</strong> Ultimatums rarely work. When someone is struggling, they need support, not threats. The goal is to improve performance, not win a confrontation.
    </div>
</div>
`;

const task7Content = `
<h2>📚 TASK 6: COMPENSATION</h2>

<div class="content-section">
    <h3>💰 Pay Band Structure</h3>
    <p>Transparent salary ranges prevent awkward negotiations and ensure fairness:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Level</th><th style="padding: 12px;">Experience</th><th style="padding: 12px;">Range</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Entry</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0-1 years</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹15K - ₹25K/month</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mid</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-3 years</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹25K - ₹45K/month</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Senior</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3+ years</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹45K - ₹75K/month</td></tr>
    </table>
    <div class="highlight-box"><strong>Rule:</strong> Salary reviews happen every 6 months based on performance, not just tenure.</div>
</div>
`;

const task8Content = `
<h2>📚 TASK 7: LEGAL COMPLIANCE</h2>

<div class="content-section">
    <h3>📜 Required Documents Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Document</th><th style="padding: 12px;">When</th><th style="padding: 12px;">Status</th></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offer Letter</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Before joining</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Required</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employment Contract</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Required</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">NDA (Non-Disclosure Agreement)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Day 1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Required</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Policy Acknowledgment</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Required</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ID Proof Copy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Required</td></tr>
    </table>
</div>
`;

const task9Content = `
<h2>📚 TASK 8: EMPLOYEE RELATIONS</h2>

<div class="content-section">
    <h3>🤝 Conflict Resolution Steps</h3>
    <ol>
        <li><strong>Listen to both sides</strong> - Separately, without judgment</li>
        <li><strong>Document facts</strong> - What happened, when, who was involved</li>
        <li><strong>Identify the root cause</strong> - Is this about work or personal friction?</li>
        <li><strong>Propose solutions</strong> - Mediate a resolution together</li>
        <li><strong>Follow up</strong> - Check back in 1 week to ensure resolution holds</li>
    </ol>
    <div class="warning-box">
        <strong>Written Warning Process:</strong> If behavior doesn't improve, document with:<br>
        1. Date and specific behavior<br>
        2. Previous verbal warning reference<br>
        3. Expected improvement<br>
        4. Consequences if unchanged<br>
        5. Employee signature acknowledgment
    </div>
</div>
`;

const task10Content = `
<h2>📚 TASK 9: EXIT MANAGEMENT</h2>

<div class="content-section">
    <h3>📋 Exit Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ <strong>Knowledge transfer</strong> - Document all ongoing work</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ <strong>Asset return</strong> - Laptop, equipment, access cards</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ <strong>Access revocation</strong> - All systems within 24 hours of last day</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ <strong>Exit interview</strong> - Why leaving? Feedback on company?</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ <strong>Final settlement</strong> - Dues, PF, gratuity within 7 days</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ <strong>Experience letter</strong> - Provide within 2 weeks</td></tr>
    </table>
    <div class="highlight-box">
        <strong>Exit Interview Goal:</strong> Gather insights to improve retention. Ask: "What could we have done to keep you?"
    </div>
</div>
`;

const task11Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
    <h3>🎓 Certification Requirements</h3>
    <ul>
        <li>✅ Score 20/20 on comprehensive quiz</li>
        <li>✅ Submit 30-min video walkthrough covering:
            <ul>
                <li>Conducting a phone screen (roleplay)</li>
                <li>Running a 1:1 meeting (roleplay)</li>
                <li>Handling a conflict scenario</li>
            </ul>
        </li>
        <li>✅ Complete sample onboarding checklist</li>
    </ul>
</div>

<div class="content-section">
    <h3>🏆 What You've Mastered</h3>
    <ul>
        <li>💰 HR Mindset: People = Revenue</li>
        <li>📞 Tech-Savvy Hiring: Phone screen scripts</li>
        <li>🎯 Cultural Fit: STAR method mastery</li>
        <li>📋 Onboarding: 30-60-90 day framework</li>
        <li>📊 Performance: 1:1 meeting excellence</li>
        <li>💼 Compensation: Pay bands and reviews</li>
        <li>⚖️ Legal: Required documents</li>
        <li>🤝 Employee Relations: Conflict resolution</li>
        <li>🚪 Exit Management: Complete offboarding</li>
    </ul>
</div>
`;

const quizQuestions = [
    { question: "A bad hire typically costs the company:", options: ["Half their monthly salary", "Same as their annual salary", "Just the recruitment agency fee", "3x their salary or more in total impact"], correct: 3 },
    { question: "HR's primary mission is to:", options: ["Find people who will multiply team output", "Fill open positions as quickly as possible", "Maintain employee records and policies", "Organize company events and activities"], correct: 0 },
    { question: "The recommended phone screen duration is:", options: ["5 seconds to 1 minute maximum", "Approximately 10 minutes total", "At least 45 minutes per candidate", "Phone screens are unnecessary"], correct: 1 },
    { question: "STAR interview method stands for:", options: ["Skills Training And Review process", "Standard Testing And Rating system", "Situation Task Action Result format", "Staff Training Assessment Report"], correct: 2 },
    { question: "On Day 1, new hires must receive:", options: ["Only company swag and welcome kit", "Just their workstation assignment", "A full week off to settle in", "System access and a meaningful first task"], correct: 3 },
    { question: "1:1 meetings should focus on asking about:", options: ["Wins, challenges, and support needed", "Only the employee's personal life topics", "When they plan to take vacation", "Gossip about other team members"], correct: 0 },
    { question: "The primary purpose of exit interviews is to:", options: ["Make the departing employee feel bad", "Learn insights to improve retention", "Argue about their decision to leave", "Complete legal paperwork only"], correct: 1 },
    { question: "NDA in employment context stands for:", options: ["No Daily Activity logging policy", "New Data Access permission level", "Non-Disclosure Agreement document", "National Development Association"], correct: 2 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK - CHALLENGING WITH VARIED POSITIONS
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Politely decline — discussing salary with colleagues leads to immediate termination", "Share it openly — transparency builds trust and ensures long-term operational sustainability", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy"], c: 0 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "Half-day salary deduction", "Written warning recorded in your file", "No consequence if it's less than 30 minutes late"], c: 1 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself — this aligns with company policy and ensures consistent results across different team scenarios", "Ignore it — it's not your problem", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Tell your teammate to cover for you and take the day off", "Send a WhatsApp to HR on the morning of the leave", "Email the CEO directly for approval — this reflects standard HR operating procedure for most teams"], c: 0 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach", "Everyone including interns", "Senior developers and team leads only", "Those with exceptional KPI scores — this is the standard approach"], c: 1 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — following this approach systematically prevents common mistakes and keeps the HR workflow predictable", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["You can take 1 CL during probation with manager approval", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "No leave in first 2 months unless emergency"], c: 3 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As an ally whose problem is your common enemy — listen, understand, collaborate", "As a burden that drains resources", "As a problem to be managed — this reflects standard HR operating procedure for most teams", "As someone who should be transferred to management"], c: 0 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement as long as you're online"], c: 1 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["5-10% increment as a minimum — this method has been validated through extensive practice and produces reliable repeatable outcomes", "10-15% increment for meeting expectations", "No increment and placed on a Performance Improvement Plan (PIP)", "Verbal warning but salary stays the same"], c: 2 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — teams that adopt this strategy report fewer issues and more efficient people management cycles", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — this is the recommended approach based on current HR documentation and management consensus", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference — implementing this correctly requires understanding the full context of how each HR element interacts", "A rough guideline to review monthly", "The Law — the best known way to do a task perfectly, mandatory to follow daily", "A reference document primarily for new employees during onboarding"], c: 2 }
];

const task2Quiz = [
    { q: "According to the training, a bad hire costs approximately:", o: ["Just their monthly salary amount", "Double their annual compensation", "The recruitment fees paid — this is the standard approach", "3x salary plus 6+ months productivity loss"], c: 3 },
    { q: "The story of the 'rockstar developer' reveals what lesson?", o: ["Test ACTIONS, not just interview words", "Trust impressive resumes completely", "Never hire experienced developers", "Phone interviews are always sufficient"], c: 0 },
    { q: "The WRONG mindset for HR is thinking:", o: ["I need to find someone who multiplies output", "I need to hire someone for this role", "Quality matters more than speed", "Cultural fit is essential"], c: 1 },
    { q: "Extra phone screening time (10 minutes) can save:", o: ["Just a few hours of interview time", "Nothing significant really", "Months of pain from bad hire", "The posting cost — this is the standard approach"], c: 2 },
    { q: "Total cost of a bad hire decision includes:", o: ["Direct salary payments — this is the standard approach", "The interview time invested — this is the standard approach", "Just the severance package", "Recruitment + training + lost productivity + replacement"], c: 3 },
    { q: "The training states that verification should:", o: ["Come before trusting candidate claims", "Be replaced with belief in candidates", "Apply to senior positions — this is the standard approach", "Be done after the probation period"], c: 0 },
    { q: "What demotivates existing team members?", o: ["Hiring exceptionally talented people", "Working alongside a bad hire", "Competitive salary increases", "Challenging project assignments"], c: 1 },
    { q: "The real cost of the 'rockstar developer' story was:", o: ["Just one month's salary — this reflects standard HR operating procedure for most teams", "The wasted interview time — this is the standard approach", "$120,000 including delayed projects and client trust damage", "A minor inconvenience to the team"], c: 2 },
    { q: "Team productivity waste from a bad hire typically lasts:", o: ["1-2 days maximum — this is the standard approach", "About one hour total", "Just the hiring process period", "6+ months of disruption"], c: 3 },
    { q: "The RIGHT mindset multiplying effect means:", o: ["One great hire multiplies team performance", "Hire more people to increase output — taking this route minimizes risk while delivering professional-grade results to all stakeholders", "Anyone can do the job adequately", "Speed of hiring is most important"], c: 0 }
];

const task3Quiz = [
    { q: "If a candidate doesn't own their own laptop:", o: ["It's completely acceptable for this role", "Shows dependency - reject immediately", "They can use a phone instead", "Office will provide one anyway"], c: 1 },
    { q: "Candidate spends most time on phone, not computer:", o: ["Perfectly fine for developer work", "Modern preference is acceptable", "Red flag - not tech-minded enough", "Phone skills are more important now"], c: 2 },
    { q: "When asked 'what do you do if laptop has problems?':", o: ["'Take to repair shop' is the right answer — this ensures compliance with HR standards and prevents cascading issues in employee management", "Asking IT is always the correct approach", "Buying a new one shows financial stability", "Googling and fixing shows tech-savvy mindset"], c: 3 },
    { q: "Phone screen question about computer usage reveals:", o: ["Their comfort level with technology", "Nothing useful about candidates — experienced HR professionals recognize this as the most reliable path for maintaining control", "Their age and generation only", "Their wealth and status"], c: 0 },
    { q: "The phone screen should filter candidates who:", o: ["Are too experienced for the role — this approach balances thoroughness with efficiency which is critical for meeting HR deadlines", "Show tech-dependency and problem-solving gaps", "Ask too many good questions", "Have higher salary expectations"], c: 1 },
    { q: "A candidate who uses computer 4+ hours daily is:", o: ["Overworking and needs work-life balance", "Probably addicted to games", "A green flag for tech comfort", "Wasting time not being productive"], c: 2 },
    { q: "Self-problem-solving with technology indicates:", o: ["The candidate is a know-it-all — adopting this framework helps maintain accountability throughout the process across departments", "Nothing meaningful about work style", "The candidate doesn't trust professionals", "The candidate is tech-savvy and resourceful"], c: 3 },
    { q: "The 10-minute phone screen goal is to:", o: ["Quickly filter out obviously unfit candidates", "Replace the full interview process — this methodology accounts for edge cases that commonly cause confusion during HR implementation", "Make candidates feel welcome", "Discuss salary expectations first"], c: 0 },
    { q: "Relying on repair shops for tech problems suggests:", o: ["The candidate is wealthy enough to afford help — this aligns with company policy and ensures consistent results across different team scenarios", "The candidate lacks tech troubleshooting mindset", "Excellent delegation and prioritization skills", "Understanding when to seek expert help"], c: 1 },
    { q: "Opening the phone screen should include:", o: ["Immediately asking about salary expectations — following this approach systematically prevents common mistakes and keeps the HR workflow predictable", "Starting with technical coding questions", "Confirming good time and explaining brief purpose", "Talking about company history for 5 minutes"], c: 2 }
];

const task4Quiz = [
    { q: "STAR method helps assess:", o: ["Technical coding skills — this is the standard approach", "References from previous employers", "Salary history and expectations", "Behavioral patterns through specific examples"], c: 3 },
    { q: "'S' in STAR stands for:", o: ["Situation the candidate faced", "Skills assessment framework — this method has been validated through extensive practice and produces reliable repeatable outcomes", "Salary and compensation", "Screenings and evaluations"], c: 0 },
    { q: "Cultural fit assessment happens:", o: ["After technical skills verified — this is the standard approach", "Throughout the interview process", "In the final interview round — this is the standard approach", "It's not important for tech roles"], c: 1 },
    { q: "Red flags for attitude problems include:", o: ["Asking clarifying questions — teams that adopt this strategy report fewer issues and more efficient people management cycles", "Being nervous during interviews", "Blaming previous employers consistently", "Requesting time to think about answers"], c: 2 },
    { q: "The 'A' in STAR evaluates:", o: ["Their annual salary expectations — this is the recommended approach based on current HR documentation and management consensus", "Attendance at previous jobs", "Awards and recognition received", "Actions the candidate specifically took"], c: 3 },
    { q: "Beyond skills, cultural fit looks at:", o: ["Values, work style, and team compatibility", "Their hobbies and interests — this is the standard approach", "Educational background exclusively", "Their social media presence"], c: 0 },
    { q: "The 'R' in STAR method means:", o: ["Review of their resume details — implementing this correctly requires understanding the full context of how each HR element interacts", "Result or outcome of their actions", "References from past employers", "Reasons for leaving their job"], c: 1 },
    { q: "Attitude problems are considered:", o: ["Easily fixed with training", "Normal and acceptable", "Red flags that predict future issues", "Relevant for client-facing roles — this is the standard approach"], c: 2 },
    { q: "STAR method questions start with:", o: ["Why should we hire you...", "What is your greatest weakness...", "Where do you see yourself in 5 years...", "Tell me about a time when..."], c: 3 },
    { q: "Evaluating cultural fit requires:", o: ["Assessing alignment with company values", "Asking personal questions about family — taking this route minimizes risk while delivering professional-grade results to all stakeholders", "Checking their political views", "Reviewing their financial status"], c: 0 }
];

const task5Quiz = [
    { q: "Day 1 must include which critical element:", o: ["Full company history presentation", "System access setup and first task", "Week-long orientation only", "Introduction to all company clients"], c: 1 },
    { q: "The 30-60-90 day plan purpose is to:", o: ["Delay performance expectations — this ensures compliance with HR standards and prevents cascading issues in employee management", "Give new hires extended time off", "Set clear milestones for new hire success", "Reduce onboarding investment costs"], c: 2 },
    { q: "First task assignment should be:", o: ["The most complex project available", "Busy work to keep them occupied", "Something that doesn't matter if failed", "Meaningful but achievable task"], c: 3 },
    { q: "Team introductions on Day 1 help with:", o: ["Building relationships and reducing isolation", "Nothing really important — experienced HR professionals recognize this as the most reliable path for maintaining control", "Wasting productive work time", "Showing off the team size"], c: 0 },
    { q: "Onboarding excellence directly impacts:", o: ["The new hire's first week — this is the standard approach", "Long-term retention and performance", "Just the HR workload", "Nothing measurable really"], c: 1 },
    { q: "System access should be ready:", o: ["Whenever IT gets around to it", "After their first month of work", "Before the new hire starts on Day 1", "If they specifically ask — this is the standard approach"], c: 2 },
    { q: "The 90-day mark typically evaluates:", o: ["Whether HR did paperwork correctly", "Attendance records — this is the standard approach", "Vacation days remaining", "If new hire is productive and integrated"], c: 3 },
    { q: "Delayed onboarding leads to:", o: ["Confusion and decreased productivity", "Better prepared new hires — this approach balances thoroughness with efficiency which is critical for meeting HR deadlines", "More time for proper planning", "Improved retention rates"], c: 0 },
    { q: "First 90 days are called the 'onboarding period' because:", o: ["Legal requirements mandate this timeframe — adopting this framework helps maintain accountability throughout the process across departments", "Critical time for integration and expectation setting", "It's an arbitrary HR standard", "New hires can't work independently before this"], c: 1 },
    { q: "Checklist-based onboarding ensures:", o: ["More paperwork for HR to handle", "Slower onboarding process", "Nothing important gets missed", "Reduced flexibility for new hires"], c: 2 }
];

const task6Quiz = [
    { q: "1:1 meeting structure should ask about:", o: ["Salary and promotion desires — this is the standard approach", "Complaints about other team members", "Personal life and hobbies only", "What went well, challenges faced, and support needed"], c: 3 },
    { q: "Performance reviews should be:", o: ["Based on ongoing documented feedback", "Surprising with new information", "Done primarily when there are problems", "Handled entirely by senior management"], c: 0 },
    { q: "Difficult conversation scripts help managers:", o: ["Avoid having necessary conversations", "Navigate sensitive topics professionally", "Make employees feel worse", "Document things for legal protection only"], c: 1 },
    { q: "Regular 1:1s are important because they:", o: ["Waste productive work time — this methodology accounts for edge cases that commonly cause confusion during HR implementation", "Are required by labor law", "Build trust and catch issues early", "Give employees time to complain"], c: 2 },
    { q: "Performance management is about:", o: ["Finding reasons to fire people — this aligns with company policy and ensures consistent results across different team scenarios", "Micromanaging employee activities", "Creating paperwork for HR files", "Supporting growth and addressing gaps"], c: 3 },
    { q: "Feedback during 1:1s should be:", o: ["Timely, specific, and actionable", "Saved for annual review only", "Always positive to maintain morale", "Delivered primarily through email"], c: 0 },
    { q: "The 'support needed' question reveals:", o: ["Nothing useful for management — following this approach systematically prevents common mistakes and keeps the HR workflow predictable", "Blockers and resource gaps to address", "Employee weaknesses only", "Budget requests to deny"], c: 1 },
    { q: "Difficult conversations require:", o: ["Avoiding the topic until it goes away — this method has been validated through extensive practice and produces reliable repeatable outcomes", "Having other employees present always", "Preparation, clarity, and professionalism", "Immediate termination decisions"], c: 2 },
    { q: "Performance documentation purpose is:", o: ["Creating legal defense only", "Satisfying auditors — this reflects standard HR operating procedure for most teams", "Micromanaging every action", "Tracking progress and providing evidence for decisions"], c: 3 },
    { q: "'What went well' question helps identify:", o: ["Wins to recognize and patterns to repeat", "Employees who brag too much — teams that adopt this strategy report fewer issues and more efficient people management cycles", "Nothing actionable really", "Overconfident team members"], c: 0 }
];

const task7Quiz = [
    { q: "Pay band structure provides:", o: ["Rigid salary limits that cannot change — this is the recommended approach based on current HR documentation and management consensus", "Transparency and consistency in compensation", "Lower salaries for everyone", "Confusion in salary negotiations"], c: 1 },
    { q: "Salary review process should be:", o: ["Random and unpredictable", "Done primarily when employees complain", "Structured, fair, and transparent", "Handled secretly by management"], c: 2 },
    { q: "Benefits packages impact:", o: ["Nothing related to retention", "Legal compliance only", "The company's costs — this is the standard approach", "Attraction and retention of talent"], c: 3 },
    { q: "Compensation discussions require:", o: ["Clear data and market comparisons", "Avoiding the topic entirely", "Promising things you can't deliver", "Always saying 'no' to requests"], c: 0 },
    { q: "Pay equity means:", o: ["Everyone earns the same amount — implementing this correctly requires understanding the full context of how each HR element interacts", "Fair pay for comparable work and experience", "Paying minimum wage only", "Ignoring market rates entirely"], c: 1 },
    { q: "Salary transparency helps build:", o: ["Conflict between employees — taking this route minimizes risk while delivering professional-grade results to all stakeholders", "Higher costs with no benefit", "Trust and reduce pay discrimination", "Unrealistic expectations only"], c: 2 },
    { q: "Market rate research for salaries:", o: ["Is unnecessary for small companies", "Matters for executive roles — this is the standard approach", "Should be done once and never updated", "Informs competitive compensation decisions"], c: 3 },
    { q: "Performance-based compensation should:", o: ["Link pay to measurable outcomes fairly", "Replace all base salaries — this ensures compliance with HR standards and prevents cascading issues in employee management", "Create unhealthy competition always", "Be eliminated entirely"], c: 0 },
    { q: "Compensation package includes:", o: ["Monthly salary amount — this is the standard approach", "Salary, benefits, bonuses, and growth opportunities", "Free coffee and snacks only", "Just health insurance"], c: 1 },
    { q: "Salary negotiation conversations need:", o: ["Aggressive tactics to minimize costs", "Immediate rejection of all requests", "Listening, data, and fair resolution", "Promises you can't keep"], c: 2 }
];

const task8Quiz = [
    { q: "Employment contracts must include:", o: ["Start date and salary — this is the standard approach", "Handshake agreements are sufficient", "Just the job title", "Role, compensation, terms, and policies"], c: 3 },
    { q: "NDA (Non-Disclosure Agreement) protects:", o: ["Confidential company and client information", "Employee's personal information only", "Nothing legally binding", "Financial data — this is the standard approach"], c: 0 },
    { q: "Leave policies must comply with:", o: ["Whatever the company decides", "Labor laws and regulations", "No specific requirements exist", "What competitors offer — this is the standard approach"], c: 1 },
    { q: "Termination procedures require:", o: ["No documentation needed — experienced HR professionals recognize this as the most reliable path for maintaining control", "Just changing access passwords", "Proper notice, documentation, and legal compliance", "Announcing via public Slack"], c: 2 },
    { q: "Policy acknowledgment signatures prove:", o: ["Nothing useful really — this approach balances thoroughness with efficiency which is critical for meeting HR deadlines", "Legal protection against all claims", "Employees can be punished anytime", "Employee received and understood policies"], c: 3 },
    { q: "Offer letter should be:", o: ["Written, clear, and include key terms", "Verbal primarily to avoid commitment — adopting this framework helps maintain accountability throughout the process across departments", "Vague to allow flexibility", "Sent after they start working"], c: 0 },
    { q: "Compliance violations can result in:", o: ["Nothing significant really — this methodology accounts for edge cases that commonly cause confusion during HR implementation", "Legal penalties and reputation damage", "Just minor HR warnings", "Positive media coverage"], c: 1 },
    { q: "Employee handbook purpose is:", o: ["Decoration for HR office — this aligns with company policy and ensures consistent results across different team scenarios", "Making things more complicated", "Clear communication of expectations and policies", "Legal jargon nobody reads"], c: 2 },
    { q: "Legal document retention requires:", o: ["Throwing away after employee leaves", "No specific requirements exist", "Keeping digital copies temporarily — this is the standard approach", "Keeping records for specified periods"], c: 3 },
    { q: "Background checks should be:", o: ["Consistent, legal, and documented", "Skipped to save time and cost", "For senior positions — this is the standard approach", "Based on how the person looks"], c: 0 }
];

const task9Quiz = [
    { q: "Conflict between employees should be:", o: ["Ignored until it resolves itself — following this approach systematically prevents common mistakes and keeps the HR workflow predictable", "Addressed professionally and promptly", "Escalated to CEO immediately", "Handled by making one person leave"], c: 1 },
    { q: "Mediation process involves:", o: ["Taking sides with the favorite employee", "Declaring a winner and loser", "Listening to both parties objectively", "Public announcement of the conflict"], c: 2 },
    { q: "Written warnings should be:", o: ["Threatening and aggressive", "Verbal primarily to avoid records", "Given without explanation", "Clear, factual, and documented"], c: 3 },
    { q: "Employee relations focuses on:", o: ["Building positive workplace culture", "Creating more conflicts — this method has been validated through extensive practice and produces reliable repeatable outcomes", "Surveillance and punishment", "Reducing all communication"], c: 0 },
    { q: "Difficult conversations require:", o: ["Yelling to make a point — teams that adopt this strategy report fewer issues and more efficient people management cycles", "Calm, private, and constructive approach", "Public confrontation", "Avoiding the issue entirely"], c: 1 },
    { q: "Following up after conflict resolution:", o: ["Is unnecessary busywork — this is the recommended approach based on current HR documentation and management consensus", "Creates more problems", "Ensures issues were actually resolved", "Should never be done"], c: 2 },
    { q: "Documentation of conflicts helps:", o: ["Nothing - it's just paperwork — implementing this correctly requires understanding the full context of how each HR element interacts", "Create legal problems only", "Make employees feel monitored", "Track patterns and protect all parties"], c: 3 },
    { q: "When both employees blame each other:", o: ["Investigate facts objectively", "Fire both of them immediately", "Believe the more senior one", "Flip a coin to decide"], c: 0 },
    { q: "Hostile work environment claims require:", o: ["Immediate dismissal without investigation", "Thorough investigation and action", "Ignoring until lawsuit arrives", "Blaming the complainant"], c: 1 },
    { q: "Employee relations success means:", o: ["Zero conflicts ever occurring — taking this route minimizes risk while delivering professional-grade results to all stakeholders", "Employees never disagreeing", "Healthy relationships and fair resolution of issues", "Complete silence in the office"], c: 2 }
];

const task10Quiz = [
    { q: "Knowledge transfer during offboarding ensures:", o: ["Nothing important really — this ensures compliance with HR standards and prevents cascading issues in employee management", "More work for remaining team", "The leaving employee feels bad", "Critical information isn't lost with departure"], c: 3 },
    { q: "Asset return checklist includes:", o: ["All company property including laptop and keys", "Expensive equipment — this is the standard approach", "Just the laptop — this reflects standard HR operating procedure for most teams", "Whatever employee remembers"], c: 0 },
    { q: "Access revocation should happen:", o: ["Whenever IT gets to it", "Immediately upon last working day", "One month after departure", "If employee was fired — this is the standard approach"], c: 1 },
    { q: "Exit interview purpose is:", o: ["Making departing employee uncomfortable", "Arguing about their decision", "Gathering insights to improve retention", "Legal requirement only"], c: 2 },
    { q: "Final settlement timing:", o: ["Whenever company decides", "If they ask nicely — this is the standard approach", "Never - they forfeit everything", "Within legal timeframes with all dues"], c: 3 },
    { q: "Resignation acceptance should be:", o: ["Professional and documented properly", "Dramatic and confrontational", "Ignored for several days", "Announced to entire company immediately"], c: 0 },
    { q: "Exit checklist ensures:", o: ["Maximum inconvenience for departing person", "Complete and consistent offboarding", "Random steps based on mood", "Nothing important gets done"], c: 1 },
    { q: "Departing employee handover includes:", o: ["Nothing - let others figure it out", "Their computer password — this is the standard approach", "Project status, contacts, and pending items", "Complaints about the company"], c: 2 },
    { q: "Positive exit experiences lead to:", o: ["Nothing relevant really — experienced HR professionals recognize this as the most reliable path for maintaining control", "Bad reviews online", "More people wanting to leave", "Potential referrals and boomerang employees"], c: 3 },
    { q: "Offboarding process reflects:", o: ["How company treats people at all stages", "Nothing about company culture", "Legal compliance — this is the standard approach", "HR's workload management"], c: 0 }
];

const task11Quiz = [
    { q: "Certification validates:", o: ["Just completing training modules — this approach balances thoroughness with efficiency which is critical for meeting HR deadlines", "Competency to perform the role effectively", "Nothing meaningful really", "Ability to pass tests only"], c: 1 },
    { q: "Video walkthrough demonstrates:", o: ["Camera presence and appearance — adopting this framework helps maintain accountability throughout the process across departments", "Technical video editing skills", "Practical application of knowledge", "Nothing useful for evaluation"], c: 2 },
    { q: "Continuous learning after certification:", o: ["Is completely unnecessary", "For those seeking promotion — this is the standard approach", "Wastes productive work time", "Should continue throughout career"], c: 3 },
    { q: "Career growth at Digital Heroes requires:", o: ["Performance, initiative, and skill development", "Luck and timing only — this methodology accounts for edge cases that commonly cause confusion during HR implementation", "Political connections primarily", "Just time served in role"], c: 0 },
    { q: "Professional development responsibility:", o: ["Entirely on the company", "Personal ownership with company support", "Not important for this role", "For senior positions — this is the standard approach"], c: 1 },
    { q: "Mentoring others helps you:", o: ["Lose competitive advantage", "Waste productive time", "Reinforce your own knowledge", "Create threats to your position"], c: 2 },
    { q: "Staying current with industry trends:", o: ["Is unnecessary if doing job well", "Matters for leadership — this is the standard approach", "Takes time from real work", "Keeps skills relevant and valuable"], c: 3 },
    { q: "Identifying skill gaps should lead to:", o: ["Actively addressing and closing them", "Hiding them from management — this aligns with company policy and ensures consistent results across different team scenarios", "Changing to different career", "Ignoring them completely"], c: 0 },
    { q: "Performance reviews provide opportunity for:", o: ["Being criticized unfairly — following this approach systematically prevents common mistakes and keeps the HR workflow predictable", "Growth feedback and career discussion", "Annual salary reduction", "Hearing complaints only"], c: 1 },
    { q: "Long-term career goals help:", o: ["Create unrealistic expectations — this method has been validated through extensive practice and produces reliable repeatable outcomes", "Limit flexibility in career", "Guide development and decision-making", "Waste time on planning"], c: 2 }
];




// Make task content available globally for openTask() function
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
if (typeof task12Content !== 'undefined') window.task12Content = task12Content;
if (typeof task13Content !== 'undefined') window.task13Content = task13Content;
if (typeof task14Content !== 'undefined') window.task14Content = task14Content;

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
