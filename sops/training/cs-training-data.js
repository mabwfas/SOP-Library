// Customer Service Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 0, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "CS Mindset", description: "Support = Revenue Protection", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Why CS matters to bottom line", "📖 Read cs-sop.html completely"] },
    { id: 3, title: "Communication Excellence", description: "Tone, Empathy, Clarity", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🗣️ Professional communication techniques", "📖 Study response templates"] },
    { id: 4, title: "Ticket Management", description: "Prioritization & SLAs", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📋 Ticket workflows", "📖 Study priority matrix"] },
    { id: 5, title: "Common Issues", description: "Technical Troubleshooting", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🔧 Top 20 issues and solutions", "📖 Study troubleshooting guides"] },
    { id: 6, title: "Escalation Protocol", description: "When & How to Escalate", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "⬆️ Escalation decision tree", "📖 Study escalation matrix"] },
    { id: 7, title: "Difficult Customers", description: "De-escalation Techniques", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "😤 Handling angry customers", "📖 Study de-escalation scripts"] },
    { id: 8, title: "Proactive Support", description: "Preventing Issues", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🛡️ Proactive communication", "📖 Study check-in templates"] },
    { id: 9, title: "Tools & Systems", description: "Help Desk Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🖥️ Tool proficiency", "📖 Study system guides"] },
    { id: 10, title: "Metrics & Performance", description: "CSAT, FRT, Resolution", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📊 KPI understanding", "📖 Study performance benchmarks"] },
    { id: 11, title: "Final Certification", description: "CS Mastery Exam", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions", "🎥 Submit role-play recording"] }
];


const task0Content = `
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

// ============ TASK 1: CS MINDSET ============
const task2Content = `
<h2>📚 TASK 1: CS MINDSET - Support = Revenue Protection</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into CS techniques, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #60A5FA;">Development</strong> → delivers quality work<br>
            ↓<br>
            <strong style="color: #F472B6;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #34D399; font-size: 1.1em;">⭐ YOU (CS)</strong> → <strong>PROTECT satisfaction & drive 5-star reviews</strong><br>
            ↓<br>
            <strong style="color: #A78BFA;">Better Reviews</strong> → boost algorithm positioning<br>
            ↓<br>
            <strong style="color: #FBBF24;">More Enquiries</strong> → the cycle continues
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As CS, you are the <strong>voice of client satisfaction</strong>. Every interaction you have determines whether a client becomes a raving fan who leaves 5-star reviews and refers others, or a lost opportunity who damages our reputation. Your HEAT responses, your de-escalation skills, your proactive communication—these directly influence reviews, referrals, and our algorithm positioning.</p>
    </div>
    
    <p style="color: #34D399; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">When CS breaks, the entire chain breaks. When you excel, everyone wins.</p>
</div>

<div class="content-section">
    <h3>💰 The Hidden Revenue Impact</h3>
    <p>Customer Service isn't a cost center. <strong>It's revenue protection.</strong></p>
    
    <div class="highlight-box">
        <strong>🔥 THE NUMBERS:</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad support → 1 angry customer tells</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>15-20 people</strong></td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Great support → 1 happy customer tells</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4-6 people + referrals</strong></td>
            </tr>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Acquiring new customer costs</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>5-7x more than retaining</strong></td>
            </tr>
        </table>
        <p><strong>Your job:</strong> Turn problems into loyalty. Turn complaints into referrals.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The CS Professional's Role</h3>
    <p>You are NOT just "answering tickets." You are:</p>
    <ul>
        <li>🛡️ <strong>Brand Guardian:</strong> Every interaction shapes perception</li>
        <li>💰 <strong>Revenue Protector:</strong> Prevent churn, save relationships</li>
        <li>📢 <strong>Voice of Customer:</strong> Report patterns to improve products</li>
        <li>🎁 <strong>Surprise Deliverer:</strong> Exceed expectations, create fans</li>
    </ul>
</div>

<div class="content-section">
    <h3>🧠 The Support Mindset Shift</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Amateur Thinking</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional Thinking</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This customer is annoying"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This customer is frustrated - I can fix that"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Not my problem"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How can I own this until it's solved?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I answered the question"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Did I actually solve their problem?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"They should read the FAQ"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me make this super easy for them"</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The ₹2 Lakh Save</h3>
    <p><strong>Situation:</strong> A client running a fashion e-commerce site contacted us furious. Their checkout was broken during a festival sale weekend. They'd lost ₹50,000 in sales already and were threatening to leave and demand a refund of their entire project cost (₹2 lakhs).</p>
    
    <p><strong>What the CS rep did:</strong></p>
    <ul>
        <li>Immediately acknowledged the severity: "I understand this is critical for your business. Let me take full ownership right now."</li>
        <li>Escalated to dev within 3 minutes (P1 Critical)</li>
        <li>Kept client updated every 30 minutes with progress</li>
        <li>Issue fixed in 2 hours (Shopify app conflict)</li>
        <li>Followed up personally the next day</li>
        <li>Offered 1 week free support extension as goodwill</li>
    </ul>
    
    <p><strong>Result:</strong> Client stayed, left a 5-star review, and referred 2 new clients worth ₹3.5 lakhs combined.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Lesson:</strong> That CS rep didn't just "handle a ticket" – they protected ₹5.5 lakhs in revenue (original project + referrals). That's the power of the right mindset.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>⚠️ CAUTIONARY TALE: The ₹4 Lakh Lost Client</h3>
    <p><strong>What went wrong:</strong> A premium client (paying ₹80,000/year retainer) had a simple question about updating their product images. The CS rep:</p>
    <ul>
        <li>Responded 8 hours late</li>
        <li>Sent a generic "please see FAQ" response</li>
        <li>Didn't follow up when client didn't respond</li>
        <li>When client complained, got defensive: "That's not really a support issue"</li>
    </ul>
    
    <p><strong>Result:</strong> Client cancelled. Left a negative review. Their business partner (another potential client worth ₹1.2 lakh) saw the review and went elsewhere.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💀 Total damage:</strong> ₹80k (lost retainer) + ₹80k x 4 years (expected retention) + ₹1.2L (lost referral) = <strong>₹4.4 lakhs lost</strong> over a 5-minute question.
    </div>
</div>

<div class="content-section">
    <h3>🔑 The 5 Laws of CS Excellence</h3>
    <div class="highlight-box">
        <ol>
            <li><strong>Speed is Survival:</strong> First response time directly correlates with satisfaction. Under 1 hour = 2x higher retention.</li>
            <li><strong>Empathy Before Solutions:</strong> Customers want to feel heard before they want to be fixed.</li>
            <li><strong>Own It Completely:</strong> Never say "that's not my department." YOU are the company to them.</li>
            <li><strong>Under-Promise, Over-Deliver:</strong> Say it takes 24 hours, fix it in 4. Never the other way around.</li>
            <li><strong>Every Ticket is a Relationship:</strong> This isn't just a problem – it's a person who trusted us with their business.</li>
        </ol>
    </div>
</div>
`;

// ============ TASK 2: COMMUNICATION EXCELLENCE ============
const task3Content = `
<h2>📚 TASK 2: COMMUNICATION EXCELLENCE</h2>

<div class="content-section">
    <h3>🗣️ The HEAT Method</h3>
    <p>Use this for every customer interaction:</p>
    
    <div class="highlight-box">
        <strong>H</strong> - Hear them out completely (don't interrupt)<br>
        <strong>E</strong> - Empathize with their situation<br>
        <strong>A</strong> - Apologize/Acknowledge the issue<br>
        <strong>T</strong> - Take action and follow through
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>🎭 HEAT Method in Action - Real Conversation</h3>
    
    <p><strong>❌ BAD Response (No HEAT):</strong></p>
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5);">
        <strong>Customer:</strong> "My website has been down for 2 hours and I'm losing sales! This is unacceptable!"<br><br>
        <strong>Bad CS Rep:</strong> "Let me check... looks like there's a server issue. It should be fixed soon. Is there anything else?"
        <p style="color: #F87171; margin-top: 10px; font-style: italic;">❌ No empathy, no acknowledgment, no ownership, vague timeline</p>
    </div>
    
    <p><strong>✅ GREAT Response (Using HEAT):</strong></p>
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.5);">
        <strong>Customer:</strong> "My website has been down for 2 hours and I'm losing sales! This is unacceptable!"<br><br>
        <strong>Great CS Rep:</strong><br>
        <strong>[HEAR]</strong> "I can see exactly what you're describing - your checkout page is indeed unreachable."<br><br>
        <strong>[EMPATHIZE]</strong> "I completely understand how stressful this is, especially during what looks like your peak sales period. Losing even an hour of sales is incredibly frustrating."<br><br>
        <strong>[APOLOGIZE]</strong> "I sincerely apologize that this happened. This is absolutely not the experience you should have."<br><br>
        <strong>[TAKE ACTION]</strong> "Here's what I'm doing RIGHT NOW: I've already flagged this as P1 Critical and our senior developer is on it. I'll personally update you every 30 minutes until it's resolved. As soon as we fix this, I'll also investigate the root cause to make sure it never happens again."
        <p style="color: #34D399; margin-top: 10px; font-style: italic;">✅ Shows understanding, takes ownership, specific action plan, proactive follow-up</p>
    </div>
</div>

<div class="content-section">
    <h3>✍️ Response Templates</h3>
    
    <div class="highlight-box">
        <strong>Opening (Choose one):</strong>
        <ul>
            <li>"Thank you for reaching out! I'm happy to help with this."</li>
            <li>"I completely understand your concern, and I'm here to get this sorted for you."</li>
            <li>"I appreciate you bringing this to our attention."</li>
        </ul>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Empathy Phrases:</strong>
        <ul>
            <li>"I can see why that would be frustrating."</li>
            <li>"That's definitely not the experience we want you to have."</li>
            <li>"I'd feel the same way in your situation."</li>
        </ul>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Closing (Choose one):</strong>
        <ul>
            <li>"Is there anything else I can help you with today?"</li>
            <li>"Please don't hesitate to reach out if you need anything else!"</li>
            <li>"We appreciate your business and patience!"</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>❌ Words to Avoid vs ✅ Better Alternatives</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Avoid</th>
            <th style="padding: 12px;">Use Instead</th>
            <th style="padding: 12px;">Why</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I can't"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What I can do is..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus on solutions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That's our policy"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's why we do it this way..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Explains the reason</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You should have..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Going forward, try..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No blame</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"No problem"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Happy to help!"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More positive</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Calm down"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I understand this is upsetting"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Never dismiss emotions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"As I said before..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me clarify..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Avoids condescension</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The Tone That Saved a ₹1.5L Contract</h3>
    <p><strong>Situation:</strong> A jewelry store client was frustrated because their product images weren't displaying correctly on mobile. They sent an angry email at 11 PM demanding answers.</p>
    
    <p><strong>The CS rep's response (sent at 7 AM next day):</strong></p>
    <div class="highlight-box" style="font-style: italic;">
        "Good morning [Name],<br><br>
        I saw your message as soon as I started today, and I want you to know this is my TOP priority this morning.<br><br>
        First, I completely understand your frustration - your jewelry products need to look stunning on mobile because that's where most of your customers shop. A display issue isn't just an inconvenience, it's affecting your sales.<br><br>
        I've already identified the issue: your images are using a format that some older phones don't display well. Here's what I'm doing:<br>
        1. Converting all 47 product images to a compatible format (ETA: 2 hours)<br>
        2. Testing on 5 different mobile devices before confirming<br>
        3. I'll send you screenshots of the fixed pages by 12 PM<br><br>
        I apologize this happened at all. Once fixed, I'll also add monitoring so we catch any future image issues instantly.<br><br>
        Thank you for your patience. Talk soon,<br>
        [Rep Name]"
    </div>
    
    <p><strong>Result:</strong> Client replied: "This is exactly why we work with you. Thank you for actually caring." They added 2 more stores to their contract (₹1.5L additional revenue).</p>
</div>

<div class="content-section">
    <h3>⚡ The 3-Second Rule</h3>
    <div class="highlight-box">
        <p>Before hitting send on ANY response, pause for 3 seconds and ask:</p>
        <ol>
            <li><strong>Would I feel good receiving this message?</strong></li>
            <li><strong>Does this sound human or robotic?</strong></li>
            <li><strong>Am I solving their REAL problem, not just answering their question?</strong></li>
        </ol>
        <p style="margin-top: 15px;"><em>If any answer is "no" - rewrite before sending.</em></p>
    </div>
</div>
`;

// ============ TASK 3: TICKET MANAGEMENT ============
const task4Content = `
<h2>📚 TASK 3: TICKET MANAGEMENT</h2>

<div class="content-section">
    <h3>📋 Priority Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Priority</th>
            <th style="padding: 12px;">Definition</th>
            <th style="padding: 12px;">Response Time</th>
            <th style="padding: 12px;">Examples</th>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P1 - Critical</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Business stopped</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15 min</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Site down, checkout broken, data breach</td>
        </tr>
        <tr style="background: rgba(245, 158, 11, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P2 - High</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Major function broken</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 hour</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment issues, login problems</td>
        </tr>
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P3 - Medium</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature broken, workaround exists</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4 hours</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Display bugs, slow loading</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P4 - Low</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Questions, feature requests</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24 hours</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How-to questions, suggestions</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 Ticket Workflow</h3>
    <ol>
        <li><strong>Acknowledge</strong> within SLA (even if you can't solve immediately)</li>
        <li><strong>Categorize</strong> correctly for tracking</li>
        <li><strong>Research</strong> the issue thoroughly</li>
        <li><strong>Respond</strong> with clear solution or next steps</li>
        <li><strong>Follow up</strong> to ensure resolution</li>
        <li><strong>Close</strong> with satisfaction check</li>
    </ol>
</div>
`;

// ============ TASK 4: COMMON ISSUES ============
const task5Content = `
<h2>📚 TASK 4: COMMON ISSUES & SOLUTIONS</h2>

<div class="content-section">
    <h3>🔧 Top 10 Issues & Quick Fixes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Issue</th>
            <th style="padding: 12px;">First Step</th>
            <th style="padding: 12px;">Common Cause</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page not loading</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clear cache, try incognito</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Browser cache</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can't login</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Password reset link</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wrong password</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment failed</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check card details, try another</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Card declined by bank</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order not received</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check tracking, confirm address</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping delay</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email not received</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check spam folder</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Spam filter</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🛠️ Troubleshooting Protocol</h3>
    <div class="highlight-box">
        <strong>The 5-Step Fix Method:</strong>
        <ol>
            <li><strong>Reproduce:</strong> Can you see the same issue?</li>
            <li><strong>Isolate:</strong> Is it browser/device/account specific?</li>
            <li><strong>Research:</strong> Check knowledge base, past tickets</li>
            <li><strong>Test:</strong> Try the solution yourself first</li>
            <li><strong>Verify:</strong> Confirm with customer it's fixed</li>
        </ol>
    </div>
</div>
`;

// ============ TASK 5: ESCALATION ============
const task6Content = `
<h2>📚 TASK 5: ESCALATION PROTOCOL</h2>

<div class="content-section">
    <h3>⬆️ When to Escalate</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px;">Escalate Immediately</th>
            <th style="padding: 12px;">Escalate After 2 Attempts</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security/data breach</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical issue you can't solve</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Legal threats</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer remains unsatisfied</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">VIP/Enterprise client</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Billing disputes over ₹10,000</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Site completely down</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature completely broken</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 Escalation Template</h3>
    <div class="highlight-box">
        <strong>Include in every escalation:</strong>
        <ul>
            <li>Customer name + account ID</li>
            <li>Issue summary (1-2 sentences)</li>
            <li>What you've already tried</li>
            <li>Priority level + why</li>
            <li>Customer expectation</li>
        </ul>
    </div>
</div>
`;

// ============ TASK 6: DIFFICULT CUSTOMERS ============
const task7Content = `
<h2>📚 TASK 6: DIFFICULT CUSTOMERS</h2>

<div class="content-section">
    <h3>😤 De-escalation Techniques</h3>
    
    <div class="highlight-box">
        <strong>The CALM Method:</strong><br><br>
        <strong>C</strong> - Control your emotions (breathe, don't react)<br>
        <strong>A</strong> - Acknowledge their frustration<br>
        <strong>L</strong> - Listen without interrupting<br>
        <strong>M</strong> - Move toward a solution
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>🎭 REAL DE-ESCALATION CONVERSATION</h3>
    <p><em>Actual transcript from a saved client relationship:</em></p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "This is absolutely RIDICULOUS! I've been waiting THREE WEEKS for my website changes. I'm paying you people good money and getting NOTHING. I want to speak to your manager RIGHT NOW or I'm disputing every payment I've ever made to you!"</p>
        
        <p style="color: #94A3B8; font-style: italic;">[CS Rep takes a deep breath. Does NOT react defensively.]</p>
        
        <p><strong style="color: #34D399;">CS REP [ACKNOWLEDGE]:</strong> "I hear you, and I completely understand your frustration. Three weeks is far too long to wait for changes you're paying for. You have every right to be upset."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "Yeah, well, 'understanding' doesn't fix my problem!"</p>
        
        <p><strong style="color: #34D399;">CS REP [LISTEN + VALIDATE]:</strong> "You're absolutely right – understanding alone doesn't fix it. Can you tell me exactly which changes were requested? I want to make sure I have the full picture so I can get this resolved TODAY."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "I asked for new product images and a homepage banner update. Simple stuff! And I've been ignored!"</p>
        
        <p><strong style="color: #34D399;">CS REP [OWN IT]:</strong> "Those ARE simple tasks, and you should not have been waiting three weeks. I sincerely apologize. I don't know what caused this breakdown, but what I DO know is that I'm going to personally make sure it's done by end of day today. Not tomorrow. Today."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "...Really? Today?"</p>
        
        <p><strong style="color: #34D399;">CS REP [SPECIFIC ACTION]:</strong> "Yes. Here's exactly what I'm doing right now: I'm flagging this as urgent with our design team. I'm going to call them directly – not email, call – and confirm they start immediately. I'll personally send you a preview by 4 PM. And after this is done, I'm going to review what went wrong so it never happens again to any client."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "Well... okay. I appreciate you actually taking this seriously."</p>
        
        <p><strong style="color: #34D399;">CS REP:</strong> "I take YOUR business seriously. You'll hear from me by 4 PM with updates. Thank you for giving us the chance to make this right."</p>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px; background: rgba(16, 185, 129, 0.2);">
        <strong>💡 RESULT:</strong> Changes delivered by 3 PM. Client sent a thank-you email. Renewed contract next month with a 20% upgrade.
    </div>
</div>

<div class="content-section">
    <h3>🗣️ Magic Phrases for Angry Customers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Situation</th>
            <th style="padding: 12px;">Magic Phrase</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer is venting</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I completely understand why you're upset, and I would be too."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">We made a mistake</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You're absolutely right to expect better. This is on us."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Showing commitment</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me take ownership of this and fix it for you."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Giving confidence</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's exactly what I'm going to do right now..."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client doubts you</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm not going to rest until this is resolved."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defusing tension</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Thank you for being so patient while I sort this out."</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚫 What NOT to Do (With Real Examples)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px;">❌ Wrong Response</th>
            <th style="padding: 12px;">Why It's Bad</th>
            <th style="padding: 12px;">✅ Better Response</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Calm down please"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dismisses their emotions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I understand this is frustrating"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That's not my department"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Avoids responsibility</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me get the right person on this immediately"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I already explained this"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Condescending</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me clarify that for you"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We're very busy right now"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Makes them feel unimportant</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You're my priority right now"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Well, you should have..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blaming the customer</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Going forward, we can..."</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The Legal Threat That Became a Referral</h3>
    <p><strong>Situation:</strong> A client threatened to "involve lawyers" because their e-commerce site had been showing wrong prices for 2 days, resulting in ₹40,000 of orders at incorrect (lower) prices.</p>
    
    <p><strong>What the CS Rep Did:</strong></p>
    <ol>
        <li><strong>Didn't panic:</strong> Stayed calm despite the legal threat</li>
        <li><strong>Validated:</strong> "I understand completely. This is a serious issue that affected your revenue."</li>
        <li><strong>Took ownership:</strong> "I'm personally going to ensure this is resolved properly."</li>
        <li><strong>Escalated smartly:</strong> Immediately involved the Operations Manager</li>
        <li><strong>Offered solution:</strong> Company absorbed the ₹40k loss and honored all orders at wrong prices</li>
        <li><strong>Prevented future:</strong> Implemented price change verification system</li>
    </ol>
    
    <p><strong>Result:</strong> Client dropped all legal talk, posted a LinkedIn recommendation praising "exceptional crisis handling," and referred 3 new clients over the next 6 months.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Lesson:</strong> When customers threaten legal action, they usually want to be HEARD, not to actually sue. Professional de-escalation + real solutions = loyalty.
    </div>
</div>
`;

// ============ TASK 7: PROACTIVE SUPPORT ============
const task8Content = `
<h2>📚 TASK 7: PROACTIVE SUPPORT</h2>

<div class="content-section">
    <h3>🛡️ Prevention > Cure</h3>
    <p>The best support ticket is the one that never gets created.</p>
    
    <div class="highlight-box">
        <strong>Proactive Support Actions:</strong>
        <ul>
            <li>Send check-in emails after launch</li>
            <li>Share tutorials before questions arise</li>
            <li>Alert customers to known issues</li>
            <li>Follow up after resolution</li>
            <li>Report patterns to prevent future issues</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📧 Check-in Email Template</h3>
    <div class="highlight-box">
        "Hi [Name],<br><br>
        Just wanted to check in on your [website/project]! It's been [X days] since we launched, and I wanted to make sure everything is running smoothly.<br><br>
        Quick questions:<br>
        • Any issues you've noticed?<br>
        • Questions about any features?<br>
        • Anything we can help improve?<br><br>
        We're here whenever you need us!<br><br>
        Best, [Your Name]"
    </div>
</div>
`;

// ============ TASK 8: TOOLS & SYSTEMS ============
const task9Content = `
<h2>📚 TASK 8: TOOLS & SYSTEMS</h2>

<div class="content-section">
    <h3>🖥️ Essential CS Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Tool</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Key Features</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Help Desk</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ticket management</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assign, prioritize, track</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Knowledge Base</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Self-serve answers</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FAQs, guides, tutorials</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Live Chat</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-time support</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quick responses</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CRM</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer history</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Past interactions, notes</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 9: METRICS ============
const task10Content = `
<h2>📚 TASK 9: METRICS & PERFORMANCE</h2>

<div class="content-section">
    <h3>📊 Key CS Metrics</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Metric</th>
            <th style="padding: 12px;">What It Measures</th>
            <th style="padding: 12px;">Target</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CSAT</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer satisfaction</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;90%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FRT</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Response Time</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;1 hour</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Resolution Time</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to full resolution</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;24 hours</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FCR</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Contact Resolution</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;70%</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 10: CERTIFICATION ============
const task11Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
    <h3>🎓 Requirements</h3>
    <ul>
        <li>✅ Score 28/30 or higher on quiz</li>
        <li>✅ Submit role-play recording (handle angry customer scenario)</li>
        <li>✅ Pass communication quality review</li>
    </ul>
</div>

<div class="content-section">
    <h3>🏆 Skills Mastered</h3>
    <ul>
        <li>💰 CS Mindset: Support = Revenue Protection</li>
        <li>🗣️ Communication Excellence: HEAT method</li>
        <li>📋 Ticket Management: Priority matrix</li>
        <li>🔧 Troubleshooting: 5-Step Fix Method</li>
        <li>⬆️ Escalation Protocol</li>
        <li>😤 De-escalation: CALM method</li>
        <li>🛡️ Proactive Support</li>
        <li>📊 Metrics & Performance</li>
    </ul>
</div>
`;

// ============ QUIZ QUESTIONS ============
const quizQuestions = [
    { question: "One angry customer tells how many people?", options: ["1-2", "5-10", "50+", "15-20"], correct: 3 },
    { question: "HEAT stands for:", options: ["Hear-Empathize-Apologize-Take action", "Help-Empathize-Action-Thanks", "Hello-Explain-Ask-Tell", "None"], correct: 0 },
    { question: "P1 Critical response time target:", options: ["24 hours", "15 minutes", "1 hour", "4 hours"], correct: 1 },
    { question: "CSAT target should be:", options: [">50%", ">70%", ">90%", "100%"], correct: 2 },
    { question: "Acquiring a new customer costs ___ more than retaining:", options: ["2x", "Same", "10x", "5-7x"], correct: 3 },
    { question: "Best phrase for \"I can't\":", options: ["What I CAN do is...", "It's not my job", "That's impossible", "No"], correct: 0 },
    { question: "First step when customer can't login:", options: ["Ignore", "Password reset", "Delete account", "Escalate immediately"], correct: 1 },
    { question: "CALM method C stands for:", options: ["Call manager", "Check manual", "Control your emotions", "Copy response"], correct: 2 },
    { question: "When to escalate immediately:", options: ["Any complaint", "Password reset", "Simple question", "Security breach"], correct: 3 },
    { question: "FCR stands for:", options: ["First Contact Resolution", "First Customer Response", "Fast Customer Return", "Final Close Rate"], correct: 0 },
    { question: "FRT target should be:", options: ["<15 min", "<1 hour", "<24 hours", "<1 week"], correct: 1 },
    { question: "Proactive support means:", options: ["Waiting for tickets", "Ignoring problems", "Preventing issues before they happen", "Slow responses"], correct: 2 },
    { question: "Page not loading - first step:", options: ["Rebuild website", "Ignore", "Refund customer", "Clear cache, try incognito"], correct: 3 },
    { question: "\"No problem\" should be replaced with:", options: ["Happy to help!", "Sure", "Whatever", "OK"], correct: 0 },
    { question: "Escalation should include:", options: ["Just customer name", "Customer name + issue + what you tried + priority", "Nothing", "Only the complaint"], correct: 1 },
    { question: "Best way to handle angry customer:", options: ["Argue back", "Hang up", "Listen and empathize", "Transfer immediately"], correct: 2 },
    { question: "Check-in emails should be sent:", options: ["Never", "Every hour", "Only when problems occur", "After launch"], correct: 3 },
    { question: "P4 Low priority response time:", options: ["24 hours", "1 hour", "15 min", "1 week"], correct: 0 },
    { question: "Knowledge base is for:", options: ["Internal use only", "Self-serve customer answers", "Hiding information", "Nothing"], correct: 1 },
    { question: "\"That's our policy\" should become:", options: ["Deal with it", "Not my problem", "Here's WHY we do it this way", "Ask someone else"], correct: 2 },
    { question: "Resolution time target:", options: ["<1 hour", "<1 month", "<1 week", "<24 hours"], correct: 3 },
    { question: "Troubleshooting step 1:", options: ["Reproduce the issue", "Escalate", "Close ticket", "Ignore"], correct: 0 },
    { question: "VIP client issue should:", options: ["Wait in queue", "Be escalated immediately", "Be ignored", "Take lowest priority"], correct: 1 },
    { question: "After resolving issue, you should:", options: ["Close immediately", "Delete ticket", "Follow up to verify", "Forget about it"], correct: 2 },
    { question: "Customer says \"I'm going to sue\" - action:", options: ["Laugh", "Argue", "Ignore", "Escalate immediately"], correct: 3 },
    { question: "Magic phrase for angry customer:", options: ["Let me take ownership and fix this", "It's not my fault", "Calm down", "Whatever"], correct: 0 },
    { question: "Site completely down is:", options: ["P4 Low", "P1 Critical", "P2 High", "P3 Medium"], correct: 1 },
    { question: "Don't blame:", options: ["The customer", "Other departments", "All of the above", "The weather"], correct: 2 },
    { question: "Ticket workflow ends with:", options: ["Just closing", "Ignoring", "Deleting ticket", "Satisfaction check then close"], correct: 3 },
    { question: "CS professional is a:", options: ["Revenue protector", "Cost center", "Annoyance", "Unnecessary role"], correct: 0 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task0Quiz = [
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
    { q: "A client's checkout page broke during a festival sale weekend and they've lost ₹50,000 in sales. They're threatening to leave and demand a full refund. Your FIRST action as a CS professional should be:", o: ["Immediately offer a full refund to prevent losing the client — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Tell the client this is a dev issue and transfer them to the development team", "Ask the client to wait while you check with your manager about refund policies", "Acknowledge the severity, take ownership, and escalate to dev as P1 Critical within minutes"], c: 3 },
    { q: "According to the CS Mindset training, acquiring a new customer costs how much more than retaining an existing one?", o: ["5-7x more", "Equal cost if you have good marketing", "2-3x more", "10-15x more"], c: 0 },
    { q: "A premium client paying ₹80,000/year retainer asks a simple question about updating product images. You respond 8 hours later with 'please see FAQ.' Based on the cautionary tale, what is the likely total financial damage?", o: ["₹80,000 (just the lost retainer) — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "₹4.4 lakhs including lost retainer years and referral impact", "₹1.2 lakhs from the lost referral alone", "No damage — clients understand delays happen"], c: 1 },
    { q: "Which of the following correctly describes YOUR role in the Digital Heroes interconnected chain?", o: ["You generate enquiries through outreach and cold calling — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "You deliver quality development work on client projects", "You protect client satisfaction and drive 5-star reviews that boost algorithm positioning", "You manage the sales pipeline and close new deals"], c: 2 },
    { q: "The '5 Laws of CS Excellence' state that first response time under 1 hour leads to:", o: ["A 10% increase in customer satisfaction scores", "A guaranteed renewal of the client contract", "An automatic positive review on the platform", "2x higher client retention rates"], c: 3 },
    { q: "A CS rep receives a ticket about a broken checkout. They fix it in 2 hours, follow up personally the next day, and offer 1 week free support. The client then leaves a 5-star review AND refers 2 new clients worth ₹3.5L. This scenario proves that CS is:", o: ["A revenue protection and generation mechanism — not a cost center", "An unnecessary cost center that sometimes gets lucky — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Valuable when major issues occur — this is the standard approach", "Effective primarily because the client was already satisfied"], c: 0 },
    { q: "Law 4 of CS Excellence says 'Under-Promise, Over-Deliver.' A client asks when their homepage redesign will be ready. You estimate it takes 4 hours. What should you tell them?", o: ["Tell them 4 hours since that's the honest estimate — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Tell them 24 hours, then deliver it in 4 hours to exceed expectations", "Tell them 2 hours to impress them with fast turnaround", "Don't give a timeline — just say 'as soon as possible'"], c: 1 },
    { q: "According to the CS Mindset content, one angry customer who receives bad support will tell approximately how many people about their experience?", o: ["4-6 people", "1-2 people", "15-20 people", "50+ people on social media only"], c: 2 },
    { q: "Which mindset shift is CORRECT according to the Support Mindset training?", o: ["'I answered the question — my job is done'", "'This customer is frustrated — I'll transfer them to someone more patient'", "'Not my problem — let me find whose department this belongs to'", "'They should read the FAQ' → 'Let me make this super easy for them'"], c: 3 },
    { q: "The Digital Heroes growth formula states: Employee Growth = Company Growth × (Will + Efforts). In the context of CS, what does 'Will' represent?", o: ["Your commitment to turning problems into loyalty and complaints into referrals", "Your willingness to work overtime whenever needed — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Your ability to handle the maximum number of tickets per day", "Your willingness to accept any task assigned without questioning"], c: 0 }
];

const task3Quiz = [
    { q: "A client messages: 'My website has been down for 2 hours and I'm losing sales! This is unacceptable!' Using the HEAT method, which response demonstrates ALL four steps correctly?", o: ["'I see your site is down. I apologize. I'll have someone look into it.' — this aligns with industry best practices and ensures consistent results across different project contexts — this approach balances thoroughness wit", "'I can see your checkout is unreachable. I understand how stressful this is during peak sales. I sincerely apologize. I've flagged this as P1 and our senior dev is on it — I'll update you every 30 minutes.'", "'That's definitely frustrating. Let me check with the dev team and get back to you soon.' — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "'I understand. Can you try clearing your cache first? If that doesn't work, I'll escalate it.' — this methodology accounts for edge cases and variations that commonly cause confusion during implementation"], c: 1 },
    { q: "In HEAT, what does the 'A' stand for, and why does it come AFTER 'E' (Empathize)?", o: ["Action — because you need to act before showing empathy and ensures long-term operational sustainability", "Analyze — because you need to understand the root cause before responding", "Apologize/Acknowledge — because customers need to feel heard before hearing an apology", "Assist — because helping is more important than emotional validation"], c: 2 },
    { q: "A customer writes: 'I can't believe you charged me twice for the same order!' Which response violates the Communication Excellence standards?", o: ["'I can see why that would be frustrating. Let me look into this right away.'", "'That's definitely not the experience we want you to have. I'm pulling up your account now.'", "'I completely understand your concern. Let me check the transaction details and get this sorted immediately.'", "'As I said before in my previous email, our billing system processes refunds within 5-7 days.'"], c: 3 },
    { q: "The 3-Second Rule states you should check three things before sending any response. Which is NOT one of them?", o: ["Is this response under 100 words for maximum efficiency?", "Does this sound human or robotic?", "Am I solving their REAL problem, not just answering their question?", "Would I feel good receiving this message?"], c: 0 },
    { q: "A jewelry store client sends an angry email at 11 PM about product images not displaying on mobile. You see it at 7 AM. According to the real story from training, what made the response exceptional?", o: ["Responding within the contractual SLA of 24 hours — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Making the issue TOP priority, identifying the root cause, giving a specific 3-step plan with ETAs, and proactively preventing future occurrences", "Immediately escalating to the development team without investigating", "Offering a refund for the inconvenience to show goodwill"], c: 1 },
    { q: "A client says: 'This is the third time I've explained this problem!' Which phrase should you use according to the Words to Avoid list?", o: ["'I understand you've had to repeat yourself, which is frustrating'", "'Let me clarify what we know so far'", "'As I said before, we've already addressed this'", "'I'd feel the same way in your situation. Let me take a fresh look at this.'"], c: 2 },
    { q: "Your colleague responds to a client with: 'That's our policy, so we can't change it.' According to Communication Excellence training, the correct alternative is:", o: ["'I understand that's frustrating, but rules are rules' — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "'Let me check if we can make an exception for you'", "'I'll escalate this to management and see what they say'", "'Here's WHY we do it this way, and what I CAN do for you is...'"], c: 3 },
    { q: "Which of these is the CORRECT empathy phrase from the approved response templates?", o: ["'That's definitely not the experience we want you to have'", "'I'm sorry you feel that way' — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "'Calm down, we'll sort this out'", "'Many customers have the same issue, so you're not alone'"], c: 0 },
    { q: "A CS rep writes: 'No problem, I'll handle it.' According to the training, what phrase should replace 'No problem'?", o: ["'Sure thing'", "'Happy to help!'", "'Don't worry about it'", "'OK, will do'"], c: 1 },
    { q: "An irate client says: 'Well, you should have warned me about this limitation before I bought it!' According to the Words to Avoid guide, your response should be:", o: ["'You're right, we should have disclosed that. Let me fix this now.' — this is the recommended approach based on current documentation and expert consensus in the field today", "'Our terms and conditions clearly state the limitations'", "'Going forward, try checking the feature list before purchasing. In the meantime, here's what I can do...'", "'I understand, but it's mentioned in our documentation'"], c: 2 }
];

const task4Quiz = [
    { q: "A Shopify store's entire website is down during Black Friday weekend. According to the Priority Matrix, this is classified as:", o: ["P2 - High priority with 1-hour response time — implementing this correctly requires understanding the full context of how each operational element interacts", "P1 - Critical but with 1-hour response time since it's a weekend", "P3 - Medium because a workaround might exist", "P1 - Critical with 15-minute response time because business is completely stopped"], c: 3 },
    { q: "A client reports that their product search function is slow but still working. Customers can still browse and buy. According to the Priority Matrix, this is:", o: ["P3 Medium — feature is broken but workaround (browsing categories) exists", "P2 High — it's a major function that's degraded and ensures long-term operational sustainability", "P1 Critical — any performance issue is critical", "P4 Low — it's just a question about performance"], c: 0 },
    { q: "You receive 4 tickets simultaneously: (A) Client site completely down, (B) Login issue for one user, (C) 'How do I update my banner?' question, (D) Payment gateway rejecting all cards. The correct priority order is:", o: ["A → B → C → D (handle in order received)", "A → D → B → C (P1 → P1 → P2 → P4)", "D → A → B → C (payment issues always first)", "A → D → C → B (questions before login issues)"], c: 1 },
    { q: "According to the Ticket Workflow, what is the FIRST step you must take even before investigating a P2 High priority ticket?", o: ["Research the issue in the knowledge base", "Start troubleshooting immediately", "Acknowledge receipt within SLA", "Categorize the ticket for tracking"], c: 2 },
    { q: "A ticket has been open for 3 days with multiple back-and-forth replies but no resolution. According to the ticket workflow, which step was likely SKIPPED?", o: ["Step 1: Acknowledge — this reflects standard operating procedure for most professional teams", "Step 6: Close with satisfaction check", "Step 5: Follow up to ensure resolution", "Step 3: Research the issue thoroughly before responding"], c: 3 },
    { q: "A P3 Medium ticket comes in at 9 AM about slow loading pages. You have 3 P4 Low tickets from yesterday still open. What is the correct approach?", o: ["Address the P3 ticket first (4-hour SLA) then return to P4s", "Finish all P4 tickets first since they came in earlier — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Escalate the P3 immediately since you're backlogged", "Work on all 4 simultaneously to save time"], c: 0 },
    { q: "A client reports a display bug on their product page. You ask them to clear their cache and try incognito mode — it works fine there. According to the Ticket Workflow, what's your next step?", o: ["Close the ticket — the issue is resolved and ensures long-term operational sustainability — this aligns with industry best practices and", "Research whether this is a known browser caching issue, test on multiple browsers, then respond with a permanent solution", "Tell the client to always use incognito mode — following this approach systematically prevents common mistakes and keeps the workflow pr", "Escalate to development since it's a browser issue — this method has been validated through extensive testing and produces reliable repe"], c: 1 },
    { q: "A client writes: 'My payment gateway isn't working.' You classify it as P2 High. A colleague argues it should be P1 Critical. Who is correct?", o: ["You are — payment issues are P2 by default and ensures long-term operational sustainability — teams that adopt this strategy re", "Neither — payment issues are always P3 since banks handle them — this is the recommended approach based on current documentatio", "Your colleague is — if ALL payments are failing, it stops business (P1); if it's one failed transaction, it's P2", "It depends on the client's revenue level — implementing this correctly requires understanding the full context of how each oper"], c: 2 },
    { q: "The final step in the Ticket Workflow is 'Close with satisfaction check.' Which closing approach is correct?", o: ["Just change ticket status to 'Resolved' and move on — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Send a survey link and close immediately", "Close automatically after 24 hours of no response", "Ask 'Is there anything else I can help with?' and only close after confirmation"], c: 3 },
    { q: "You receive a P4 Low ticket asking 'How do I add a new product collection?' According to the Priority Matrix, your response deadline is:", o: ["24 hours — questions and feature requests are low priority", "1 hour — same as manager response time and ensures long-term operational sustainability", "4 hours — within working hours", "15 minutes — treat every client like VIP"], c: 0 }
];

const task5Quiz = [
    { q: "A client reports 'My website won't load at all!' According to the 5-Step Fix Method, your FIRST step before anything else is:", o: ["Send them a troubleshooting guide link — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Reproduce: Try loading the site yourself to confirm the issue", "Isolate: Ask what browser they're using", "Research: Check past tickets for similar complaints"], c: 1 },
    { q: "A customer says their page isn't loading. You try it — works fine for you. According to the troubleshooting protocol, your next step (Isolate) should determine:", o: ["If the customer is lying about the issue — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Whether to escalate immediately to development", "Whether it's specific to their browser, device, location, or account", "If the issue will fix itself within 24 hours"], c: 2 },
    { q: "A client reports 'I can't login to my Shopify admin.' According to the Common Issues table, the first step and most common cause are:", o: ["Check server status; servers are usually down", "Ask them to try a different browser; login issues are always browser-related", "Create a new admin account; the old one is likely corrupted", "Send password reset link; wrong password is the most common cause"], c: 3 },
    { q: "You fix a customer's issue (email not receiving order confirmations) by solving the spam filter problem. According to the 5-Step Fix Method, what FINAL step must you still complete?", o: ["Verify: Confirm with the customer that they're now receiving emails", "Document the solution in the knowledge base — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Close the ticket immediately since the fix worked", "Escalate to the email service provider for a permanent fix"], c: 0 },
    { q: "A client's payment keeps failing. You check — their card details look correct. According to the Common Issues guide, the common cause is:", o: ["Shopify's payment system is broken — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Card declined by the bank — suggest trying another payment method", "The client entered a wrong CVV every time", "The store's payment gateway has expired"], c: 1 },
    { q: "Step 4 of the 5-Step Fix Method says 'Test: Try the solution yourself first.' Why is this step critical before telling the customer?", o: ["To waste time and delay the response — this aligns with industry best practices and ensures consistent results across different project contexts", "To prove to management that you tried", "Because if the fix doesn't actually work, you'll look unprofessional and erode trust", "It's optional — you can skip it if you're confident"], c: 2 },
    { q: "A client reports their order tracking shows 'not received' but the shipping carrier confirms delivery. According to the Common Issues table, the first step is:", o: ["Immediately issue a refund — this reflects standard operating procedure for most professional teams", "Assume the package was stolen and file a claim", "Tell the client to contact the shipping carrier directly", "Check tracking details and confirm the delivery address with the client"], c: 3 },
    { q: "You encounter a new issue not in the Common Issues table or knowledge base. According to the troubleshooting protocol, Step 3 (Research) includes checking:", o: ["Knowledge base AND past tickets for similar issues", "Google for solutions — this is the standard approach", "The Shopify documentation — this is the standard approach", "Nothing — escalate immediately if it's not in the table"], c: 0 },
    { q: "A client says 'My product images look blurry on mobile.' You reproduce it and confirm the issue. During the Isolate step, you discover it only happens on older Android phones. What's your next move?", o: ["Tell the client to buy a newer phone — this reflects standard operating procedure for most professional teams", "Research whether the image format is incompatible with older devices, then test a fix before responding", "Close the ticket — it's a device problem, not your issue", "Escalate to development immediately without further investigation"], c: 1 },
    { q: "Multiple clients report the same 'slow loading' issue within one hour. According to best troubleshooting practices, this pattern suggests:", o: ["It's a coincidence — handle each ticket independently and ensures long-term operational sustainability", "Clients are exaggerating their experience", "A systemic issue (server/CDN/infrastructure) that needs immediate P1 escalation", "A browser update is causing the problem — tell clients to downgrade"], c: 2 }
];

const task6Quiz = [
    { q: "A client reports a potential data breach — they see unfamiliar admin users in their Shopify dashboard. According to the Escalation Protocol, your action should be:", o: ["Research the issue yourself first to confirm it's a real breach — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "Try removing the unfamiliar admin accounts yourself", "Ask the client to change their password and monitor for 24 hours", "Escalate IMMEDIATELY — security/data breaches require instant escalation regardless of confirmation status"], c: 3 },
    { q: "You've tried two different solutions for a persistent checkout bug, but neither worked. According to the Escalation Protocol, this falls under:", o: ["Escalate After 2 Attempts — technical issue you can't solve", "Immediate escalation — you should have escalated after the first attempt", "Keep trying — 2 attempts isn't enough before escalation", "Close the ticket and tell the client to wait for the next update"], c: 0 },
    { q: "A client says: 'If this isn't fixed by tomorrow, my lawyers will be in contact.' According to the Escalation Protocol, legal threats require:", o: ["Wait to see if they actually follow through — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Immediate escalation — legal threats are in the 'Escalate Immediately' category", "Respond that your company has lawyers too", "Escalation after 2 attempts to resolve the issue first"], c: 1 },
    { q: "Your escalation message should include 5 key pieces of information. Which list is COMPLETE according to the Escalation Template?", o: ["Customer name, issue summary, priority level — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Customer name, issue description, your recommendation", "Customer name + account ID, issue summary, what you've already tried, priority level + why, customer expectation", "Customer contact info, screenshots, suggested solution, timeline"], c: 2 },
    { q: "A client is an enterprise account paying ₹5L/year. They have a minor CSS alignment issue on one page. According to Escalation Protocol, how should this be handled?", o: ["Treat it as P4 Low — it's just a CSS issue regardless of client tier", "Deprioritize it — enterprise clients are more understanding", "Handle it yourself within normal P3 timeline — enterprise status doesn't change issue severity", "Escalate immediately — VIP/Enterprise clients are always escalated immediately"], c: 3 },
    { q: "A billing dispute involves ₹15,000 worth of charges the client contests. According to the Escalation Protocol, this should be:", o: ["Escalated after 2 attempts since it's over ₹10,000", "Handled by CS directly — billing disputes are routine", "Escalated immediately since it involves money", "Ignored until the client provides proof of incorrect billing"], c: 0 },
    { q: "You're escalating a P2 High ticket. Your escalation note says: 'Client is upset about login issues.' What's WRONG with this according to the template?", o: ["It's too long — escalations should be one word and ensures long-term operational sustainability — taking this route minimize", "It's missing critical info: account ID, what you've already tried, why it's P2, and what the customer expects", "It shouldn't be escalated — login issues are P4 — this ensures compliance with professional standards and prevents cascading", "The priority level is wrong — login issues are always P1 — experienced professionals recognize this as the most reliable pat"], c: 1 },
    { q: "A client's entire site has been down for 30 minutes. You identify it as a P1 Critical issue. What is the SLA response time?", o: ["1 hour — you have time to research thoroughly and ensures long-term operational sustainability", "30 minutes — standard urgent response time", "15 minutes — P1 Critical is business-stopped and requires immediate action", "4 hours — same as P3 Medium"], c: 2 },
    { q: "A customer remains unsatisfied after your resolution attempt. They're not threatening anything, but they're clearly unhappy with the outcome. According to the protocol:", o: ["Close the ticket — you already resolved the technical issue", "Apologize again and close — this reflects standard operating procedure for most professional teams", "Offer a refund immediately to end the conversation", "Escalate after 2 attempts — 'customer remains unsatisfied' is an escalation trigger"], c: 3 },
    { q: "You receive a ticket that's clearly a feature request ('Can you add a wishlist feature?'). A colleague says to escalate it since you can't 'resolve' it yourself. Is this correct?", o: ["No — feature requests are P4 Low priority, not escalation candidates. Log it, respond with expectations, and close properly", "Yes — anything you can't solve should be escalated and ensures long-term operational sustainability — this approach balances thoroughness ", "Yes — all feature requests go to the development team immediately — adopting this framework helps maintain accountability throughout the p", "No — just ignore feature requests entirely — this methodology accounts for edge cases and variations that commonly cause confusion during "], c: 0 }
];

const task7Quiz = [
    { q: "A client screams: 'This is RIDICULOUS! I've waited THREE WEEKS for changes! I'm disputing EVERY payment!' Using the CALM method, your FIRST step (C - Control) means:", o: ["Control the client's emotions by telling them to calm down — this is the recommended approach based on current documentation and expert consensus in the field today", "Control YOUR OWN emotions — breathe, don't react defensively", "Control the situation by immediately offering a refund", "Control the conversation by interrupting with solutions"], c: 1 },
    { q: "In the real de-escalation conversation from training, the CS rep said: 'I'm going to call them directly — not email, call.' What principle does this demonstrate?", o: ["That email is unreliable for internal communication — implementing this correctly requires understanding the full context of how each operational element interacts", "That CS reps should always call instead of emailing", "Showing specific, urgent action matched to the severity of the situation", "Bypassing normal escalation procedures because the client was angry"], c: 2 },
    { q: "A client says: 'Yeah, well, understanding doesn't fix my problem!' According to the CALM method, the best response demonstrates which step?", o: ["M (Move toward solution) — they want action, so skip straight to fixing and ensures long-term operational sustainability — this aligns with industr", "A (Acknowledge) — 'I acknowledge you're frustrated. Please hold.' — following this approach systematically prevents common mistakes and keeps the w", "C (Control) — stay silent and let them vent more — this method has been validated through extensive testing and produces reliable repeatable outcom", "L (Listen + Validate) — 'You're absolutely right. Can you tell me exactly which changes were requested? I want to solve this TODAY.'"], c: 3 },
    { q: "Which 'magic phrase' from the training is appropriate when a customer is venting angrily about a delayed project?", o: ["'I completely understand why you're upset, and I would be too'", "'That's not my department, let me transfer you' — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "'Calm down, we'll figure it out'", "'We're very busy right now, but I'll try to help'"], c: 0 },
    { q: "In the Legal Threat case study, the client threatened to sue over ₹40,000 in wrong-priced orders. What response strategy ultimately converted the threat into a LinkedIn recommendation?", o: ["Threatening back with the company's legal team — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Staying calm, validating the revenue impact, taking ownership, absorbing the ₹40k loss, and preventing future occurrence", "Offering a 50% refund as a compromise — this reflects standard operating procedure for most professional teams", "Ignoring the legal threat and focusing primarily on fixing the technical issue"], c: 1 },
    { q: "According to the 'What NOT to Do' table, responding 'We're very busy right now' is wrong because:", o: ["It reveals internal workload information — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "It could lead to a complaint to management", "It makes the customer feel unimportant — the better response is 'You're my priority right now'", "It's technically inaccurate if you're not actually busy"], c: 2 },
    { q: "The training states: 'When customers threaten legal action, they usually want to be HEARD, not to actually sue.' What does this insight mean for your response approach?", o: ["Ignore legal threats since they're not serious — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Immediately involve your company's legal department", "Tell the client you understand but can't discuss legal matters", "Focus on professional de-escalation and real solutions rather than panicking about the legal aspect"], c: 3 },
    { q: "A client demands to speak to your manager. According to the difficult customer training, what should you do BEFORE transferring?", o: ["Try to resolve it yourself first by acknowledging their frustration, taking ownership, and offering specific actions", "Transfer immediately — clients have the right to speak to managers and ensures long-term operational sustainability — teams that ad", "Tell them your manager will say the same thing — this is the recommended approach based on current documentation and expert consens", "Put them on hold indefinitely until they give up — implementing this correctly requires understanding the full context of how each "], c: 0 },
    { q: "After resolving a difficult interaction where the client was initially furious, the training case study showed the client renewed their contract with a 20% upgrade. What was the KEY action that created this outcome?", o: ["Offering a large discount to compensate for the bad experience — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Delivering the changes by 3 PM (before the promised 4 PM deadline) — over-delivering on the promise made during de-escalation", "Having the manager call the client to apologize personally", "Sending a gift basket as a goodwill gesture"], c: 1 },
    { q: "The correct response to 'Well, you should have warned me about this!' according to the Words to Avoid table is:", o: ["'You're right, we should have. That's our mistake.' — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "'It was clearly mentioned in the documentation'", "'Going forward, try checking the feature list. In the meantime, here's what I can do...'", "'I'm sorry, but that information was available on our website'"], c: 2 }
];

const task8Quiz = [
    { q: "The Proactive Support training states 'The best support ticket is the one that never gets created.' Which action BEST represents this philosophy?", o: ["Respond to tickets faster to reduce backlog — this is the standard approach and ensures long-term operational sustainability", "Create an extensive FAQ page and direct all inquiries there", "Wait for customers to find issues since most will figure it out themselves", "Send check-in emails after launch, share tutorials before questions arise, and alert customers to known issues proactively"], c: 3 },
    { q: "You launched a Shopify store for a client 5 days ago. According to Proactive Support best practices, what should you do NOW?", o: ["Send a check-in email asking if everything is running smoothly and if they have any questions", "Nothing — wait for them to contact you if there are issues", "Send an invoice for post-launch support services", "Call them every day to check status — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "You notice that 3 clients this week reported the same issue with Shopify's latest update breaking mobile menus. According to Proactive Support, you should:", o: ["Wait for more clients to report it before taking action — this aligns with industry best practices and ensures consistent results across different project contexts", "Alert ALL clients on that Shopify version about the potential issue before they discover it, and report the pattern to prevent future issues", "Fix it for the clients who reported it — this is the standard approach", "Post about it on social media to warn everyone"], c: 1 },
    { q: "The check-in email template includes three 'Quick questions.' Which set matches the template EXACTLY?", o: ["'How's business? Need any new features? Want to upgrade your plan?' — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "'Any bugs found? Payment working? Need more storage?'", "'Any issues you've noticed? Questions about any features? Anything we can help improve?'", "'Rate your experience. Would you recommend us? Leave a review?'"], c: 2 },
    { q: "A client hasn't responded to your check-in email after 3 days. What does Proactive Support training suggest?", o: ["Assume everything is fine and close the check-in — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "Stop all proactive outreach to avoid being annoying", "Call them immediately — no response is a red flag", "Send one more follow-up — silence might mean they're too busy or didn't see it, not that everything is perfect"], c: 3 },
    { q: "You resolved a complex checkout issue for a client yesterday. According to the Proactive Support protocol, your next proactive action should be:", o: ["Follow up after resolution to confirm the fix is still working and ask if anything else needs attention", "Move on to the next ticket — the issue is resolved and ensures long-term operational sustainability — taking this rout", "Send them a satisfaction survey within the hour — this ensures compliance with professional standards and prevents cas", "Add a note to the CRM and wait for the next quarterly check-in — experienced professionals recognize this as the most "], c: 0 },
    { q: "Which of the following is the MOST proactive approach to preventing a common 'Can't login' issue?", o: ["Update the FAQ with login troubleshooting steps — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Share a tutorial on password management and 2FA setup with clients BEFORE they encounter login issues", "Wait for login tickets and resolve them quickly", "Add a 'Forgot Password' button to the login page"], c: 1 },
    { q: "A Shopify platform update is scheduled for next week. Some features your clients use may be temporarily affected. Proactive Support means:", o: ["Wait until the update happens and deal with tickets as they come — this is the recommended approach based on current documentation and expert consensus in the field today", "Tell clients to check Shopify's release notes themselves", "Personally alert affected clients about the upcoming changes, explain what might be impacted, and provide workarounds", "Notify enterprise clients since they pay more — this is the standard approach"], c: 2 },
    { q: "The pattern reporting aspect of Proactive Support ('Report patterns to prevent future issues') means:", o: ["Tracking how many tickets you personally resolve each month — implementing this correctly requires understanding the full context of how each operational element interacts", "Creating weekly reports for management about ticket volume", "Reporting clients who complain the most — this reflects standard operating procedure for most professional teams", "Identifying recurring issues across multiple clients and escalating them to improve the product/process systemically"], c: 3 },
    { q: "What differentiates Proactive Support from Reactive Support according to the training?", o: ["Proactive prevents issues before they happen and anticipates client needs; reactive only responds after problems occur", "Proactive is faster responses; reactive is slower responses — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "Proactive is for VIP clients only; reactive is for standard clients", "There's no real difference — both solve client problems"], c: 0 }
];

const task9Quiz = [
    { q: "A client sends a support request via email, mentions it on WhatsApp, and also submits a ticket through the Help Desk. According to the Tools & Systems training, where should this be tracked and managed?", o: ["WhatsApp — it's the fastest communication channel and ensures long-term operational sustainability", "Help Desk — all support requests must be logged and tracked in the ticket management system", "Email — it's the most formal channel", "All three simultaneously to ensure nothing is missed"], c: 1 },
    { q: "According to the CS Tools overview, the CRM system's primary purpose for a CS professional is:", o: ["Tracking sales leads and pipeline metrics — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Sending marketing emails and promotional campaigns", "Viewing customer history and past interactions to provide context-aware support", "Managing the company's internal project timeline"], c: 2 },
    { q: "A repeat client contacts you about a slow-loading page. Before responding, what tool should you check FIRST to provide better context?", o: ["Google Analytics to check their traffic — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "The knowledge base to find a generic response", "Social media to see if they've complained publicly", "CRM to review their past interactions and any recurring issues"], c: 3 },
    { q: "The Knowledge Base tool serves which specific function in the CS ecosystem?", o: ["Providing self-serve answers through FAQs, guides, and tutorials so customers can solve simple issues independently", "Replacing the need for CS reps entirely with automated responses — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines", "Storing internal company secrets and SOPs", "Managing the ticket assignment workflow — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "You're handling a Live Chat request and the issue requires research. According to best practices for Live Chat, what should you do?", o: ["Tell the client to email instead since you need more time — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Keep the client engaged with status updates while you research, rather than leaving them waiting in silence", "Close the chat and create a ticket instead", "Transfer the chat to another agent without explanation"], c: 1 },
    { q: "The Help Desk systems key features are listed as 'Assign, prioritize, track.' In what scenario would all three features be used together?", o: ["A simple password reset request from one client — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "An internal question from a colleague — this reflects standard operating procedure for most professional teams", "A P2 High ticket that needs to be assigned to the right team, prioritized above P4s, and tracked until resolution with SLA monitoring", "A check-in email to a new client after launch"], c: 2 },
    { q: "A new team member asks: 'Why do we need both a Help Desk AND a CRM? Aren't they the same thing?' The correct explanation is:", o: ["They are essentially the same — you primarily need one and ensures long-term operational sustainability — this approach balances thoroughness with efficiency which is critical for meet", "Help Desk is for internal use; CRM is for communicating with clients — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "CRM is for sales, Help Desk is for support — they never overlap — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Help Desk manages individual support tickets and workflows; CRM stores the complete customer relationship history including past interactions, account details, and notes"], c: 3 },
    { q: "You discover a new solution to a common Shopify theme compatibility issue. According to the Tools & Systems training, which tool should this be documented in?", o: ["Knowledge Base — so it becomes a self-serve resource for customers and other CS reps", "Your personal notes — in case it comes up again and ensures long-term operational sustainability", "CRM — under the specific client's profile", "Help Desk — in the ticket resolution notes only"], c: 0 },
    { q: "When using the Help Desk to categorize a ticket, why is correct categorization important according to the Ticket Workflow?", o: ["It looks professional in reports — this reflects standard operating procedure for most professional teams", "It enables accurate tracking, helps identify patterns, and ensures the right priority and routing", "It's mandatory for compliance purposes only", "It helps the CS manager assign performance scores"], c: 1 },
    { q: "A client prefers to communicate through WhatsApp instead of the official Help Desk. According to communication channel guidelines, the correct approach is:", o: ["Accept their preference — client comfort is most priority and ensures long-term operational sustainability — this aligns with industry bes", "Tell them WhatsApp is not allowed and refuse to communicate there — following this approach systematically prevents common mistakes and ke", "Redirect official support requests to the Help Desk for proper tracking while keeping WhatsApp for quick team communication", "Use WhatsApp exclusively since it's faster than the Help Desk — this method has been validated through extensive testing and produces reli"], c: 2 }
];

const task10Quiz = [
    { q: "Your team's CSAT score dropped from 92% to 84% over the last month. According to the CS Metrics training, this means:", o: ["Nothing concerning — 84% is still above average and ensures long-term operational sustainability — teams that adopt this strategy repor", "Time to replace the entire CS team with new hires — this is the recommended approach based on current documentation and expert consensu", "Just a statistical fluctuation — wait another month to confirm the trend — implementing this correctly requires understanding the full ", "A significant red flag — the target is >90%, and an 8% drop indicates a systemic issue requiring immediate investigation"], c: 3 },
    { q: "Your average First Response Time (FRT) is 2 hours 15 minutes. According to the CS metrics targets, this performance is:", o: ["Failing — the target is <1 hour, and 2h15m is more than double that", "Meeting expectations — close enough to the target and ensures long-term operational sustainability", "Excellent — well within the 24-hour industry standard", "Acceptable for non-urgent tickets only"], c: 0 },
    { q: "FCR (First Contact Resolution) measures:", o: ["How fast you respond to the first message — this aligns with industry best practices and ensures consistent results across different project contexts", "The percentage of issues resolved during the customer's first contact without requiring follow-ups", "How many contacts a client makes before they give up", "The time between first contact and final resolution"], c: 1 },
    { q: "Your FCR is at 55% against a target of >70%. This means:", o: ["The target is unrealistic for your type of clients — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "You're handling more complex issues than average", "Most issues require multiple back-and-forth interactions, suggesting inadequate first responses, insufficient research, or lack of troubleshooting skills", "55% is acceptable for a new CS team member"], c: 2 },
    { q: "A client submits a ticket at 9 AM. You acknowledge it at 9:30 AM, investigate until 11 AM, respond with a solution at 11:15 AM, and the client confirms resolution at 2 PM. What is the FRT and Resolution Time?", o: ["FRT: 2h15m, Resolution: 5h — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams", "FRT: 30 min, Resolution: 2h15m", "FRT: 11:15 AM, Resolution: 2 PM", "FRT: 30 min, Resolution: 5 hours"], c: 3 },
    { q: "Which metric DIRECTLY measures whether clients are happy with your support interaction?", o: ["CSAT — Customer Satisfaction score directly measures client happiness", "FCR — resolving on first contact means satisfaction and ensures long-term operational sustainability", "FRT — faster response means happier clients", "Resolution Time — shorter resolution means better experience"], c: 0 },
    { q: "Your Resolution Time average is 36 hours against a target of <24 hours. The MOST likely root cause is:", o: ["Clients taking too long to respond to your follow-up questions — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall", "Insufficient investigation during the Research step, leading to multiple failed resolution attempts", "Too many VIP clients requiring special attention", "The target being unrealistic for the Shopify ecosystem"], c: 1 },
    { q: "You resolve 8 out of 10 tickets on first contact this month. Your FCR is:", o: ["8/10 is meaningless without knowing total ticket volume — this is the recommended approach based on current documentation and expert consensus in the field today", "Impossible to calculate without knowing response times", "80% — well above the >70% target, demonstrating strong first-contact effectiveness", "80% — but this primarily counts if CSAT is also above target"], c: 2 },
    { q: "Management asks you to improve FRT without sacrificing quality. Which approach achieves BOTH goals?", o: ["Send an immediate auto-reply to every ticket to hit the FRT target — implementing this correctly requires understanding the full context of how each operational element interacts", "Delay responses slightly to give more thorough initial answers", "Respond instantly with any answer, even if incomplete", "Acknowledge tickets within SLA with a personalized message confirming you're investigating, then follow up with a thorough solution"], c: 3 },
    { q: "A CS team member has excellent FRT (20 min average) and Resolution Time (8 hours) but a CSAT of only 65%. What does this metric combination suggest?", o: ["They're responding fast but the quality of communication or solutions is poor — speed without empathy/quality fails", "The CSAT survey is broken and needs to be recalibrated — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently", "These metrics should be evaluated independently, not together", "They need more training on time management"], c: 0 }
];

const task11Quiz = [
    { q: "During your certification role-play, a mock client says: 'I want a FULL refund — your website builder RUINED my business launch!' Using all your training, your BEST opening response combines which methods?", o: ["HEAT primarily — Hear, Empathize, Apologize, Take action and ensures long-term operational sustainability — taking this route minimizes risk while still delivering professional-grade resul", "HEAT + CALM combined — Control your emotions (CALM-C), then Hear them out (HEAT-H), Empathize (HEAT-E), Acknowledge (HEAT-A/CALM-A), and Take specific action (HEAT-T/CALM-M)", "CALM primarily — Control emotions, Acknowledge, Listen, Move to solution — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Neither — go directly to offering the refund to end the conversation quickly — experienced professionals recognize this as the most reliable path for maintaining quality control standards"], c: 1 },
    { q: "You're handling 5 simultaneous tickets: (A) VIP site completely down, (B) Client asking how to add a product, (C) Payment gateway failing for all customers, (D) Client wants a font change, (E) Client with legal threat about data breach. Correct priority order:", o: ["A → E → C → D → B", "A → C → E → B → D", "E → A → C → B → D", "E → C → A → B → D"], c: 2 },
    { q: "A client's e-commerce store shows wrong prices for 2 days, resulting in ₹40K of orders at incorrect prices. The client threatens legal action. Based on ALL your training, the COMPLETE correct response includes:", o: ["Offer a partial refund and hope they accept — this ensures compliance with professional standards and prevents cascading issues in downstream processes — this approach balances thoroughness with efficiency which is critical for meeting tight performa", "Fix the prices, apologize via email, and close the ticket — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "Escalate to legal department immediately and stop communicating — this methodology accounts for edge cases and variations that commonly cause confusion during implementation", "Stay calm (CALM), validate the revenue impact (HEAT-E), take full ownership (HEAT-A), escalate to Operations Manager immediately (Escalation Protocol), honor all incorrect orders, implement price verification system (Proactive Support)"], c: 3 },
    { q: "Your metrics for the month: CSAT 88%, FRT 1h15m, FCR 65%, Resolution Time 28h. How many targets are you FAILING vs PASSING?", o: ["Failing 4 — CSAT <90%, FRT >1hr, FCR <70%, Resolution Time >24hr", "Failing all 4 — none meet target", "Failing 3 (FRT >1hr, FCR <70%, Resolution >24hr), Passing 1 (CSAT — wait, 88% is <90%... actually failing all 4)", "Failing 1 (FRT), Passing 3"], c: 0 },
    { q: "A CS rep responds to an angry client with: 'As I said before, that's our policy and I can't do anything about it.' This response violates which CS training principles?", o: ["Communication Excellence (Words to Avoid list) — this is the standard approach and ensures long-term operational sustainability — this aligns with industry best pr", "Communication Excellence (banned phrases) + CS Mindset (ownership) + HEAT method (no empathy shown) + Difficult Customer handling (no de-escalation)", "The HEAT method — this is the standard approach — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient", "The Difficult Customers de-escalation training — this is the standard approach — this method has been validated through extensive testing and produces reliable rep"], c: 1 },
    { q: "In the ₹2L Save Story, the CS rep's actions included: immediate acknowledgment, escalation within 3 minutes, updates every 30 minutes, fix in 2 hours, next-day follow-up, and 1-week free support. Which CS concepts does this demonstrate?", o: ["The HEAT method and ticket management — this is the standard approach and ensures long-term operational sustainability — teams that adopt this strategy re", "Good communication skills — this is the standard approach — this is the recommended approach based on current documentation and expert consensus in the fi", "HEAT method + Priority Matrix (P1 Critical) + Escalation Protocol + Proactive Support (follow-up + prevention) + Under-Promise/Over-Deliver", "Just following basic SOP procedures — this reflects standard operating procedure for most professional teams — implementing this correctly requires unders"], c: 2 },
    { q: "A new Shopify platform update breaks 12 client websites simultaneously. This is your first week on the job. According to ALL your training, what is the CORRECT sequence of actions?", o: ["Fix each client's site one by one in the order tickets came in — experienced professionals recognize this as the most reliable path for maintaining quality control standards — taking this route minimizes risk while still d", "Email your manager and wait for instructions — this ensures compliance with professional standards and prevents cascading issues in downstream processes", "Post on social media asking Shopify to fix their update — experienced professionals recognize this as the most reliable path for maintaining quality control standards", "Escalate immediately (P1 Critical — multiple sites down), alert ALL affected clients proactively, provide status updates every 30 minutes, follow up after resolution, report the pattern to prevent recurrence"], c: 3 },
    { q: "Which combination of metrics would indicate a CS rep who is fast but not effective?", o: ["Low FRT (fast response), Low FCR (issues not resolved first time), Low CSAT (clients unhappy despite quick replies)", "High CSAT, Low FRT, High FCR — this reflects standard operating procedure for most professional teams and ensures long-term operational sustainability", "High FRT, High FCR, High CSAT — this reflects standard operating procedure for most professional teams", "Low FRT, High FCR, Low CSAT — this reflects standard operating procedure for most professional teams"], c: 0 },
    { q: "The 3-Second Rule, HEAT method, CALM method, 5-Step Fix Method, and Priority Matrix are all frameworks taught in this training. If a VIP client is screaming about a broken checkout during a sale, which frameworks do you apply and in what order?", o: ["Priority Matrix then HEAT — this is the standard approach and ensures long-term operational sustainability — this approach balances thoroughness with efficiency which is critical", "CALM first (control emotions), then Priority Matrix (classify as P1), then HEAT (respond), then 5-Step Fix (troubleshoot), then 3-Second Rule (before hitting send)", "HEAT first, then Priority Matrix, then CALM — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed", "5-Step Fix first, then all others — this reflects standard operating procedure for most professional teams — this methodology accounts for edge cases and variations that commonly"], c: 1 },
    { q: "The CS training emphasizes that CS is 'Revenue Protection, not a cost center.' If your team handles 100 tickets/month, achieves 95% CSAT, and clients average ₹80K/year in retainer value, what is the approximate revenue you're PROTECTING monthly?", o: ["₹80,000 per client only — this reflects standard operating procedure for most professional teams", "Impossible to calculate without knowing profit margins", "Approximately ₹80L (₹80K × 100 clients) in annual retainer value, plus referral potential", "Revenue protection primarily applies to enterprise clients"], c: 2 }
];



// Make task content available globally for openTask() function
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
    task0Quiz,
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
