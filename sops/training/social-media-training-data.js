// Social Media Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "Social Media Mindset", description: "Engagement = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📱 Why social matters", "📖 Read social-media-sop.html"] },
    { id: 3, title: "Platform Mastery", description: "Instagram, Facebook, LinkedIn", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎯 Platform strategies", "📖 Study platform guides"] },
    { id: 4, title: "Content Creation", description: "Posts that Perform", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📝 Content types", "📖 Study content calendar"] },
    { id: 5, title: "Visual Design", description: "Scroll-Stopping Graphics", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎨 Design principles", "📖 Study Canva templates"] },
    { id: 6, title: "Hashtag Strategy", description: "Reach More People", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "#️⃣ Hashtag research", "📖 Study hashtag lists"] },
    { id: 7, title: "Community Management", description: "Engage & Respond", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💬 Engagement tactics", "📖 Study response templates"] },
    { id: 8, title: "Analytics & Insights", description: "Data-Driven Decisions", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Metrics that matter", "📖 Study analytics tools"] },
    { id: 9, title: "Content Scheduling", description: "Consistency is Key", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📅 Scheduling tools", "📖 Study posting times"] },
    { id: 10, title: "Trend Riding", description: "Viral Opportunities", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🔥 Trend spotting", "📖 Study trend examples"] },
    { id: 11, title: "Crisis Management", description: "Handling PR & Negative Feedback", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🚨 Crisis response protocols", "📖 Study reputation management"] },
    { id: 12, title: "Agency Brand Building", description: "LinkedIn, Instagram & Employer Branding", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🏢 Agency brand strategy", "📖 Study portfolio showcasing"] },
    { id: 13, title: "Paid Advertising", description: "Facebook Ads, Google Ads & ROAS", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💰 Ad campaign management", "📖 Study budget optimization"] },
    { id: 14, title: "Client SM Delivery", description: "Managing Client Accounts & Workflows", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🤝 Client content calendars", "📖 Study approval workflows"] },
    { id: 15, title: "Analytics & ROI", description: "UTM Tracking & Conversion Reports", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📈 ROI reporting", "📖 Study attribution models"] },
    { id: 16, title: "Video & Reels Strategy", description: "Short-Form Video & Hooks", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎬 Video content creation", "📖 Study trending formats"] },
    { id: 17, title: "Career Growth", description: "SM Career Path & Specialization", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🚀 Career advancement", "📖 Study certification paths"] },
    { id: 18, title: "Final Certification", description: "Social Media Mastery Exam", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions"] }
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
<h2>📚 TASK 1: SOCIAL MEDIA MINDSET</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into social media strategy, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EC4899; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #EC4899; font-size: 1.2em;">⭐ YOU (Social Media)</strong> → <strong>THE BRAND AMPLIFIER - build awareness and community</strong><br>
            ↓<br>
            <strong style="color: #FBBF24;">Organic Traffic</strong> → brings free visitors<br>
            ↓<br>
            <strong style="color: #60A5FA;">Lead Generation</strong> → creates enquiries<br>
            ↓<br>
            <strong style="color: #34D399;">Brand Trust</strong> → increases conversion rates<br>
            ↓<br>
            <strong style="color: #A78BFA;">Reviews & Referrals</strong> → compound growth
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-left: 4px solid #DB2777; padding: 15px; margin: 15px 0;">
        <strong style="color: #EC4899;">📱 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a social media professional, you are the <strong>BRAND AMPLIFIER</strong> who builds Digital Heroes' presence and reputation. Every engaging post you create attracts potential clients. Every community interaction builds trust. 54% of social browsers research products there before buying—your content is often their FIRST impression of us. Your work directly influences the enquiry pipeline.</p>
    </div>
    
    <p style="color: #EC4899; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No social presence = No organic traffic = Paid ads dependency = Growth limited. You expand our reach for free.</p>
</div>

<div class="content-section">
    <h3>📱 Why Social Media Matters for Business</h3>
    <p>Social media isn't about posting pretty pictures. <strong>It's a revenue channel.</strong></p>
    
    <div class="highlight-box">
        <strong>🔥 THE REALITY:</strong>
        <ul>
            <li>54% of social browsers use social media to research products</li>
            <li>71% of consumers who have a positive experience recommend the brand</li>
            <li>Social media leads have 13% higher conversion rate than outbound leads</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The Social Media Professional's Role</h3>
    <ul>
        <li>📢 <strong>Brand Builder:</strong> Create recognition and trust</li>
        <li>🤝 <strong>Community Manager:</strong> Build relationships with followers</li>
        <li>📈 <strong>Growth Driver:</strong> Generate leads and traffic</li>
        <li>🎨 <strong>Content Creator:</strong> Produce engaging, shareable content</li>
    </ul>
</div>

<div class="content-section">
    <h3>📊 The Content Pillars</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Pillar</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Educate</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build authority</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tips, how-tos, industry insights</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Entertain</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Increase engagement</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Memes, behind-the-scenes, fun content</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Inspire</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create emotional connection</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Success stories, quotes, testimonials</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Promote</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drive sales</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product posts, offers, CTAs</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>The 80/20 Rule:</strong> 80% value content (educate, entertain, inspire) + 20% promotional content
    </div>
</div>
`;

const task3Content = `
<h2>📚 TASK 2: PLATFORM MASTERY</h2>

<div class="content-section">
    <h3>📱 Platform Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Platform</th>
            <th style="padding: 12px;">Audience</th>
            <th style="padding: 12px;">Best Content</th>
            <th style="padding: 12px;">Best Time</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Instagram</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">18-34, visual focus</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reels, Stories, Carousels</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">11am-1pm, 7-9pm</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Facebook</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25-55, broader demographic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video, Links, Groups</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-4pm weekdays</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LinkedIn</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">B2B, professionals</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Articles, Insights, Case Studies</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8-10am, 12pm Tue-Thu</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>YouTube</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All ages, search-intent</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long-form tutorials, Shorts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-4pm, weekends</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📸 Instagram Algorithm 2024</h3>
    <div class="highlight-box">
        <strong>What the algorithm favors:</strong>
        <ul>
            <li>🎬 Reels get 67% more engagement than static posts</li>
            <li>⏱️ Watch time is the #1 ranking factor</li>
            <li>💬 Comments and Saves > Likes</li>
            <li>📲 Stories keep you "top of mind" in DMs</li>
            <li>🔄 Consistency > Virality</li>
        </ul>
    </div>
</div>
`;

const task4Content = `
<h2>📚 TASK 3: CONTENT CREATION</h2>

<div class="content-section">
    <h3>📝 Content Types & Performance</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Type</th>
            <th style="padding: 12px;">Engagement</th>
            <th style="padding: 12px;">Best For</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reels/Short Video</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐⭐⭐⭐ Highest</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reach, new followers</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Carousels</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐⭐⭐ High</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Education, saves</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Stories</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐⭐ Medium</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Connection, daily touch</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Static Image</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐ Lower</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Announcements, quotes</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 Caption Formula</h3>
    <div class="highlight-box">
        <strong>The HOOK-VALUE-CTA Structure:</strong>
        <ol>
            <li><strong>HOOK (Line 1):</strong> Stop the scroll - question, bold statement, emoji</li>
            <li><strong>VALUE (Body):</strong> Deliver on the hook promise - tips, story, insight</li>
            <li><strong>CTA (End):</strong> Tell them what to do - like, comment, save, click link</li>
        </ol>
    </div>
</div>
`;

const task5Content = `<h2>📚 TASK 4: VISUAL DESIGN</h2>
<div class="content-section">
    <h3>🎨 Design Principles</h3>
    <ul>
        <li><strong>Brand Consistency:</strong> Same colors, fonts, style across all posts</li>
        <li><strong>Readable Text:</strong> Large enough for mobile (min 30pt)</li>
        <li><strong>High Contrast:</strong> Text visible over images</li>
        <li><strong>White Space:</strong> Don't overcrowd</li>
        <li><strong>Quality Images:</strong> No blurry or pixelated graphics</li>
    </ul>
    <div class="highlight-box">
        <strong>Tool:</strong> Use Canva for quick, professional designs with brand kit.
    </div>
</div>`;

const task6Content = `<h2>📚 TASK 5: HASHTAG STRATEGY</h2>
<div class="content-section">
    <h3>#️⃣ Hashtag Mix Formula</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Type</th>
            <th style="padding: 12px;">Size</th>
            <th style="padding: 12px;">Count</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Niche</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><1K posts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Medium</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10K-500K posts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-10</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Popular</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1M+ posts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5</td></tr>
    </table>
    <div class="highlight-box">
        <strong>Total:</strong> 15-20 hashtags per Instagram post, 3-5 for LinkedIn
    </div>
</div>`;

const task7Content = `<h2>📚 TASK 6: COMMUNITY MANAGEMENT</h2>
<div class="content-section">
    <h3>💬 Engagement Rules</h3>
    <ul>
        <li>⚡ Respond to comments within 1 hour (faster = algorithm boost)</li>
        <li>💬 Reply with questions to spark conversation</li>
        <li>❤️ Like and respond to every comment</li>
        <li>📩 Check DMs multiple times per day</li>
        <li>🤝 Engage with followers' content too</li>
    </ul>
    <div class="highlight-box">
        <strong>The 30-Minute Rule:</strong> Spend 30 min before and after posting engaging with others.
    </div>
</div>`;

const task8Content = `<h2>📚 TASK 7: ANALYTICS & INSIGHTS</h2>
<div class="content-section">
    <h3>📊 Metrics That Matter</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Metric</th>
            <th style="padding: 12px;">What It Shows</th>
            <th style="padding: 12px;">Target</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Engagement Rate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Audience interaction</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">>3%</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reach</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unique views</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growing weekly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Saves</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content value</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More saves = more reach</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Profile Visits</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interest generated</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growing</td></tr>
    </table>
</div>`;

const task9Content = `<h2>📚 TASK 8: CONTENT SCHEDULING</h2>
<div class="content-section">
    <h3>📅 Posting Frequency</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Platform</th>
            <th style="padding: 12px;">Minimum</th>
            <th style="padding: 12px;">Optimal</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram Feed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stories</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5x/day</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reels</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5x/week</td></tr>
    </table>
</div>`;

const task10Content = `<h2>📚 TASK 9: TREND RIDING</h2>
<div class="content-section">
    <h3>🔥 How to Ride Trends</h3>
    <ol>
        <li><strong>Spot Early:</strong> Check Explore, For You, trending hashtags daily</li>
        <li><strong>Act Fast:</strong> Trends last 3-7 days - post within 24 hours</li>
        <li><strong>Make It Relevant:</strong> Connect trend to your brand/industry</li>
        <li><strong>Don't Force It:</strong> If it doesn't fit, skip it</li>
    </ol>
    <div class="highlight-box">
        <strong>Trend Sources:</strong> Instagram Explore, TikTok For You, Twitter Trends, Google Trends
    </div>
</div>`;

const task18Content = `<h2>🎓 TASK 18: FINAL CERTIFICATION — Social Media Mastery Exam</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🏆 Congratulations — You Have Reached the Final Exam</h3>
    <p>You have completed all 17 training modules covering social media strategy, content creation, paid advertising, client delivery, analytics, video strategy, and career growth. This final certification exam tests your comprehensive understanding across ALL modules.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">📋 Exam Structure:</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(245, 158, 11, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Component</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
            </tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Total Questions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30 comprehensive questions</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Topics Covered</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">All 17 modules — mindset through career growth</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Passing Score</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">90% (27/30 correct)</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Certificate</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Digital Heroes Social Media Certification</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>📝 Review Checklist Before Starting</h3>
    <ul>
        <li>✅ <strong>Task 1-2:</strong> Company culture, social media mindset, content pillars, 80/20 rule</li>
        <li>✅ <strong>Task 3-4:</strong> Platform mastery (Instagram, Facebook, LinkedIn, YouTube), content types and caption formulas</li>
        <li>✅ <strong>Task 5-6:</strong> Visual design principles, hashtag strategy and mix formula</li>
        <li>✅ <strong>Task 7-8:</strong> Community management, engagement rules, analytics metrics</li>
        <li>✅ <strong>Task 9-10:</strong> Content scheduling, posting frequency, trend riding</li>
        <li>✅ <strong>Task 11:</strong> Crisis management and reputation recovery</li>
        <li>✅ <strong>Task 12:</strong> Agency brand building on LinkedIn and Instagram</li>
        <li>✅ <strong>Task 13:</strong> Paid advertising, Facebook Ads, Google Ads, ROAS</li>
        <li>✅ <strong>Task 14:</strong> Client social media delivery and approval workflows</li>
        <li>✅ <strong>Task 15:</strong> Analytics, UTM tracking, ROI reporting</li>
        <li>✅ <strong>Task 16:</strong> Video content, Reels strategy, hooks and trending formats</li>
        <li>✅ <strong>Task 17:</strong> Career growth, specialization, and professional development</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">⚠️ Important Notes</h3>
    <ul>
        <li>You must pass with <strong>90% or higher</strong> to receive your certification</li>
        <li>Failed attempts can be retried after reviewing the relevant modules</li>
        <li>Your certificate includes a unique verification code linked to your name</li>
        <li>This certification is recognized within Digital Heroes and can be added to your portfolio</li>
    </ul>
</div>`;

const quizQuestions = [
    { question: "Your post is 90% promotional. According to the 80/20 rule, this is:", options: ["Perfect balance", "Only for LinkedIn", "Not enough promotion", "Too much promotion - needs more value content"], correct: 3 },
    { question: "A static image post gets 50 likes. A Reel on the same topic likely gets:", options: ["67% MORE engagement on average", "About the same engagement", "Less engagement", "Only views, no engagement"], correct: 0 },
    { question: "Instagram's algorithm in 2024 primarily ranks content by:", options: ["Number of followers", "Watch time and completion rate", "Posting frequency only", "Number of hashtags used"], correct: 1 },
    { question: "You post at 3 AM. Likely outcome for engagement:", options: ["Higher because less competition", "Same as any other time", "Lower - audience is sleeping", "Best time for international reach"], correct: 2 },
    { question: "A B2B SaaS company should prioritize which platform?", options: ["TikTok for viral dances", "Facebook for local business", "Instagram for product photos only", "LinkedIn for professional content"], correct: 3 },
    { question: "Your engagement rate is 1.5%. This is:", options: ["Below the 3% target", "Excellent - above target", "Industry-leading", "Only matters for influencers"], correct: 0 },
    { question: "Caption starts with 'Hey everyone!' - this is a:", options: ["Strong hook that stops scrolling", "Weak hook - needs pattern interrupt", "Professional opening", "Required by platform rules"], correct: 1 },
    { question: "Comment response 2 days after posting affects:", options: ["Nothing - timing doesn't matter", "Only follower count", "Algorithm negatively - should respond within 1 hour", "Only for verified accounts"], correct: 2 },
    { question: "Using 50 hashtags on Instagram will:", options: ["Maximize reach guaranteed", "Guarantee viral status", "Work only for Reels", "Likely trigger spam filters - use 15-20"], correct: 3 },
    { question: "Content pillars ensure:", options: ["Consistent value across themes", "Random variety keeps audience guessing", "Only promotional content", "Less work for the creator"], correct: 0 },
    { question: "Posting Stories once a week results in:", options: ["Optimal engagement", "Losing 'top of mind' status with followers", "Better than Reels", "More profile visits"], correct: 1 },
    { question: "A post with 100 saves but only 50 likes indicates:", options: ["Content failed", "Bot activity", "High-value content worth bookmarking", "Algorithm is broken"], correct: 2 },
    { question: "The 30-Minute Rule means you should:", options: ["Delete posts after 30 minutes", "Respond only for 30 minutes", "Post every 30 minutes", "Engage with others 30 mins before AND after posting"], correct: 3 },
    { question: "You spot a trending audio 5 days after it started. You should:", options: ["Skip it - trend window (3-7 days) is closing", "Use it immediately - still relevant", "Wait for it to peak more", "Use regardless of timing"], correct: 0 },
    { question: "Canva is primarily used for:", options: ["Advanced video editing", "Quick professional graphic design", "Email marketing", "SEO optimization"], correct: 1 },
    { question: "Using 20 hashtags on LinkedIn will:", options: ["Maximize reach", "Be hidden by the platform", "Look spammy - use 3-5 for LinkedIn", "Increase connection requests"], correct: 2 },
    { question: "Carousels work well because they:", options: ["Are fastest to create", "Only work for quotes", "Replace Reels entirely", "Drive swipes and saves for education content"], correct: 3 },
    { question: "Which metrics matter MORE than likes for reach?", options: ["Comments, Saves, and Shares", "Follower count only", "Profile photo quality", "Account age"], correct: 0 },
    { question: "A niche hashtag has:", options: ["Millions of posts", "10K-500K posts for moderate competition", "Less than 1K posts", "No specific definition"], correct: 1 },
    { question: "Posting Reels once a month will:", options: ["Build consistent audience", "Be enough for small accounts", "Miss algorithm momentum - need minimum 3x/week", "Outperform daily posting"], correct: 2 },
    { question: "Increased profile visits but no follower growth means:", options: ["Success", "Wait longer for results", "Algorithm error", "Bio or content isn't converting visitors"], correct: 3 },
    { question: "First step when you see a trending topic:", options: ["Evaluate if it fits your brand quickly", "Copy top creators exactly", "Wait to see if it lasts", "Ignore trends completely"], correct: 0 },
    { question: "LinkedIn posts perform best:", options: ["At midnight", "8-10am Tuesday-Thursday", "Only on weekends", "Timing doesn't matter on LinkedIn"], correct: 1 },
    { question: "Static images vs Reels - static images get:", options: ["Highest engagement", "Medium engagement", "Lower engagement typically", "No engagement anymore"], correct: 2 },
    { question: "Brand consistency means:", options: ["Changing style to match trends", "Copying competitors", "Random posts to surprise audience", "Same colors, fonts, and visual style always"], correct: 3 },
    { question: "Checking DMs once a week is:", options: ["Too infrequent - check multiple times daily", "Sufficient for most accounts", "Only needed for business accounts", "Over-communicating"], correct: 0 },
    { question: "YouTube videos posted at 2-4pm on weekends see:", options: ["Lower views", "Higher views from leisure browsing", "No difference", "Negative algorithm impact"], correct: 1 },
    { question: "Text in Stories should be minimum:", options: ["5pt for clean look", "10pt is standard", "30pt for mobile readability", "Size doesn't matter"], correct: 2 },
    { question: "Social media leads convert 13% higher because:", options: ["Algorithms favor them", "Only for B2B", "Random statistical noise", "Warm leads from relationship building"], correct: 3 },
    { question: "A content calendar should plan:", options: ["At least 1 week of content ahead", "Nothing - spontaneity is key", "Random posts only", "Just dates without content"], correct: 0 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Share primarily with close friends on the team", "Share it openly — transparency builds trust", "Politely decline — discussing salary with colleagues leads to immediate termination", "Tell them a lower number to avoid jealousy — this aligns with industry best practices and ensures consistent results across different project types"], c: 2 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Verbal warning for the first time", "No consequence if it's less than 30 minutes late", "Written warning recorded in your file", "Half-day salary deduction"], c: 3 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹15-20 Crores", "₹40 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Confront them directly and resolve it yourself and ensures long-term sustainability across your deliverables", "Ignore it — it's not your problem", "Discuss it in the team group chat so everyone knows", "Report it only to HR or Delhi Team — conspiracy leads to termination + legal action"], c: 3 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Send a WhatsApp to HR on the morning of the leave", "Tell your teammate to cover for you and take the day off", "Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Email the CEO directly for approval — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach most teams follow", "Senior developers and team leads primarily", "Everyone including interns", "Those with exceptional KPI scores — this is the standard approach most teams follow"], c: 2 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — this reflects the standard operating procedure most organizations follow", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["No leave in first 2 months unless emergency", "You can take unpaid leave anytime with HR approval", "Probation employees get 2 days off per month", "You can take 1 CL during probation with manager approval"], c: 0 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As someone who should be transferred to management", "As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As an ally whose problem is your common enemy — listen, understand, collaborate"], c: 3 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement as long as you're online"], c: 1 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["No increment and placed on a Performance Improvement Plan (PIP)", "10-15% increment for meeting expectations", "5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "Verbal warning but salary stays the same"], c: 0 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Allowed with prior written approval from management", "Fine as long as it doesn't affect performance", "Moonlighting — a zero-tolerance offense leading to termination"], c: 3 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["Talent is irrelevant — volume and commitment to output matter more", "We prioritize degrees from top universities — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Talent is the most important hiring criteria", "Natural talent determines your ceiling at the company"], c: 0 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "A rough guideline to review monthly — this reflects the standard operating procedure most organizations follow", "A reference document only for new employees during onboarding", "The Law — the best known way to do a task perfectly, mandatory to follow daily"], c: 3 }
];

const task2Quiz = [
    { q: "At Digital Heroes, before posting any social media content for a client, the approval chain is:", o: ["Post immediately and fix mistakes later — social media moves fast and delays lose engagement opportunities and ensures long-term sustainability across deliverables", "Content creation → internal QA review → PM sign-off → client approval → scheduled posting — skipping any step is a zero-tolerance violation", "Send to the client directly via WhatsApp for quick verbal approval since formal processes slow down social media", "The social media manager has full authority to post without any approvals since they understand the brand best"], c: 1 },
    { q: "A client's competitor just went viral with a trend. The Digital Heroes SOP for reacting is:", o: ["Copy the competitor's post format immediately — being first matters more than originality in social media trends and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Analyze whether the trend aligns with the client's brand, propose a tailored version to the PM, get client approval, then execute — reactive content still follows the approval chain", "Ignore trends entirely — Digital Heroes focuses on planned content calendars and never deviates from the schedule", "Post a generic version using a template without client approval since speed is critical for trend-jacking success"], c: 1 },
    { q: "Your client's Instagram engagement dropped 40% this month. At Digital Heroes, you should:", o: ["Immediately increase posting frequency from 3x to 7x per week since more content always equals more engagement — implementing this correctly requires understanding the full context of how team components interact", "Hide the drop from the client and focus on the metrics that are still positive to maintain client confidence", "Blame the Instagram algorithm changes since there's nothing you can control about platform engagement fluctuations", "Analyze the data to identify causes (algorithm change, content type, timing, audience shift), present findings to PM with an action plan, and implement adjustments systematically"], c: 3 },
    { q: "A social media manager posts randomly without any content pillars. The consequence is:", o: ["More creative and diverse content — this reflects the standard operating procedure most organizations follow", "Better engagement from variety — this reflects the standard operating procedure most organizations follow", "Inconsistent brand message, confused audience, no strategic direction — followers don't know what to expect", "No measurable impact on performance — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The Interconnected Chain positions Social Media as:", o: ["A standalone department with no dependencies — this reflects the standard operating procedure most organizations follow", "Useful for hiring purposes — this is the standard approach most teams follow", "Less important than development — this reflects the standard operating procedure most organizations follow", "The bridge between content creation and audience engagement — driving brand visibility that feeds the sales pipeline"], c: 3 },
    { q: "Social media ROI is measured by:", o: ["Number of followers primarily — this reflects the standard operating procedure most organizations follow", "Number of posts published per week — this reflects the standard operating procedure most organizations follow", "How pretty the posts look — this reflects the standard operating procedure most organizations follow", "Engagement rate, traffic driven, leads generated, and conversions attributed — not just vanity metrics"], c: 3 },
    { q: "The difference between a social media amateur and professional is:", o: ["Professionals use more expensive tools — this reflects the standard operating procedure most organizations follow", "There's no real difference — anyone can manage social media", "Professionals post more frequently — this reflects the standard operating procedure most organizations follow", "Professionals think strategically — every post serves a business goal, not just personal expression"], c: 3 },
    { q: "A brand's social media should reflect:", o: ["The brand's values, voice, and strategic goals — consistent personality across all platforms", "The personal opinions of the social media manager", "Whatever is trending that day — this reflects the standard operating procedure most organizations follow", "Promotional content about products — this is the standard approach most teams follow"], c: 0 },
    { q: "Creating a social media content calendar prevents:", o: ["Last-minute panic posting, content gaps, and inconsistent messaging — structure enables quality", "Creative freedom and spontaneity — this reflects the standard operating procedure most organizations follow", "Engagement from time-sensitive content — this reflects the standard operating procedure most organizations follow", "The need for analytics tracking — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Social media fundamentals teach that organic reach is declining because:", o: ["Platforms prioritize paid content and engagement-worthy posts — making quality and strategy more important than ever", "Social media is dying — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Users are leaving social media — this reflects the standard operating procedure most organizations follow", "Video content gets reach now — this is the standard approach most teams follow"], c: 0 }
];

const task3Quiz = [
    { q: "The Digital Heroes content calendar process requires:", o: ["Posting spontaneously based on daily inspiration since authentic content performs better than planned content always — taking this route minimizes risk while delivering professional-grade results to clients consistently", "Creating content only when the client requests it since proactive planning wastes resources on content that may not be needed", "Monthly calendar planning → client approval → weekly batch creation → daily scheduling with analytics review — systematic planning prevents last-minute scrambles", "Copying the previous month's calendar since consistency means repeating what worked before without changing anything"], c: 2 },
    { q: "At Digital Heroes, social media analytics reports for clients must include:", o: ["Only follower count growth since that's the primary metric clients care about and understand most easily — this ensures compliance with coding standards and prevents cascading issues in production environments", "KPIs tied to business goals (engagement rate, reach, conversions, link clicks), comparison to previous period, insights, and recommendations — data without actionable insights is useless", "Screenshots of the best-performing posts without any context or analysis since the results speak for themselves", "General industry benchmarks only — individual post performance data overwhelms clients and isn't actionable for them"], c: 1 },
    { q: "Instagram Reels vs Feed Posts: Reels typically get:", o: ["Less reach than static posts — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Reach to existing followers — this is the standard approach most teams follow", "Equal reach to feed posts — this reflects the standard operating procedure most organizations follow", "Significantly more reach due to algorithmic promotion — Instagram pushes short-form video to compete with TikTok"], c: 3 },
    { q: "Facebook's algorithm in 2024 favors:", o: ["Text-primarily status updates — this reflects the standard operating procedure most organizations follow", "Everything posted by business pages equally", "Meaningful interactions — content that generates real conversations, not passive likes", "Paid/boosted content — this is the standard approach most teams follow"], c: 2 },
    { q: "A Shopify agency should prioritize Instagram because:", o: ["Instagram has the most users globally — this reflects the standard operating procedure most organizations follow", "Visual platform perfect for showcasing store designs, before/after transformations, and client results", "It's the cheapest platform to advertise on — this reflects the standard operating procedure most organizations follow", "Instagram is the primarily platform that matters"], c: 1 },
    { q: "Cross-posting identical content to ALL platforms is bad practice because:", o: ["Platforms charge extra for duplicate content — this reflects the standard operating procedure most organizations follow", "It takes too much time to post everywhere — this reflects the standard operating procedure most organizations follow", "Each platform has unique audience expectations, content formats, and algorithm preferences", "Users primarily follow brands on one platform"], c: 2 },
    { q: "Platform-specific content: A carousel post works best on:", o: ["Instagram and LinkedIn — swipeable educational content that boosts time-on-post and saves", "Twitter/X — great for thread-style content and ensures long-term sustainability across your deliverables", "YouTube — long-form carousel videos", "TikTok — carousel is TikTok's main format"], c: 0 },
    { q: "Twitter/X is most effective for:", o: ["Long-form educational content — this reflects the standard operating procedure most organizations follow", "Real-time engagement, industry commentary, thought leadership threads, and quick brand personality", "Selling products with buy buttons — this reflects the standard operating procedure most organizations follow", "Customer service responses — this is the standard approach most teams follow"], c: 1 },
    { q: "A social media post gets 500 likes but zero comments or shares. This indicates:", o: ["Passive engagement — the content doesn't inspire conversation or action, limiting algorithmic reach", "Great performance — 500 likes is excellent", "The post is performing perfectly — this reflects the standard operating procedure most organizations follow", "Likes are the most important metric — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Pinterest is valuable for Shopify agencies because:", o: ["It's a visual discovery engine where users actively search for products and design inspiration — high purchase intent", "It's the newest social platform — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Pinterest has the largest user base — this reflects the standard operating procedure most organizations follow", "It's easier to manage than Instagram — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task4Quiz = [
    { q: "A client wants you to post controversial political content to drive engagement. At Digital Heroes, you should:", o: ["Post it if the client insists — the client is always right and it's their brand to manage however they choose and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Advise against it with documented reasoning about brand risk, propose alternative engagement strategies, escalate to PM if client insists — protecting the client's brand is our responsibility", "Post it but use their account only so Digital Heroes isn't associated with the content if there's any backlash", "Agree and schedule it for late night posting when fewer people will see it to minimize potential controversy"], c: 1 },
    { q: "Caption Formula: Hook → Value → CTA. A caption starting with 'We are proud to announce...' fails because:", o: ["Announcements should always be longer — this reflects the standard operating procedure most organizations follow", "Company announcements don't need hooks — this reflects the standard operating procedure most organizations follow", "The word 'proud' is overused — this reflects the standard operating procedure most organizations follow", "Self-congratulatory openings don't hook — nobody cares about YOU in the first line"], c: 3 },
    { q: "Video content consistently outperforms static images on social media because:", o: ["Videos cost more to produce so platforms favor them", "Static images are being phased out by all platforms", "Videos capture attention longer, convey more information, and algorithm boosted due to higher engagement time", "User surveys show images are preferred — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "User-Generated Content (UGC) performs well because:", o: ["It saves the social media manager time — this reflects the standard operating procedure most organizations follow", "It provides authentic social proof — real people using real products builds trust more than polished brand content", "Platforms give UGC special algorithmic treatment — this is the recommended approach based on current platform documentation and expert consensus", "It's free content that replaces professional work"], c: 1 },
    { q: "Before/After transformation posts work for Shopify agencies because:", o: ["They're easy to create — this reflects the standard operating procedure most organizations follow", "Algorithm treats them as video content — this reflects the standard operating procedure most organizations follow", "They visually demonstrate tangible value — clients see exactly what the agency delivers", "They always go viral — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A content mix of 80% value and 20% promotional is recommended because:", o: ["Constant selling drives followers away — value builds trust that makes the 20% promotional content more effective", "Revenue primarily comes from the 20% promotional posts — implementing this correctly requires understanding the full context of how each element interacts", "80% of followers want value content — this reflects the standard operating procedure most organizations follow", "Platforms penalize accounts that post too much promotional content"], c: 0 },
    { q: "Stories vs Feed: Instagram Stories are best used for:", o: ["Permanent evergreen content — this reflects the standard operating procedure most organizations follow", "Long-form educational content — this reflects the standard operating procedure most organizations follow", "Highly produced professional content — this reflects the standard operating procedure most organizations follow", "Behind-the-scenes, polls, time-sensitive updates, and raw authentic content — engaging existing followers"], c: 3 },
    { q: "A caption with no CTA (Call to Action) at the end means:", o: ["The content speaks for itself — this reflects the standard operating procedure most organizations follow", "Ads need CTAs, not organic posts — this is the standard approach most teams follow", "CTAs are annoying and reduce engagement — this reflects the standard operating procedure most organizations follow", "Lost engagement opportunity — readers don't know what action to take (comment, save, visit link, share)"], c: 3 },
    { q: "Repurposing content means:", o: ["Adapting one piece of content into multiple formats — blog → carousel → reel → email → tweet", "Posting the same thing multiple times — this reflects the standard operating procedure most organizations follow", "Reusing old content without changes — this reflects the standard operating procedure most organizations follow", "Copying competitor content for your brand — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Content batching (creating multiple posts at once) helps because:", o: ["It ensures consistency, saves time through focused work sessions, and prevents last-minute scrambling", "It reduces content quality — this reflects the standard operating procedure most organizations follow", "It's primarily useful for large teams — this reflects the standard operating procedure most organizations follow", "Individual post creation produces better results"], c: 0 }
];

const task5Quiz = [
    { q: "The Digital Heroes SOP for handling negative comments on a client's social media is:", o: ["Delete all negative comments immediately — a clean feed is essential for maintaining brand image and trust online and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Respond professionally within 2 hours, acknowledge the concern, offer to resolve via DM, escalate to PM if it's a crisis — every negative comment is a public customer service opportunity", "Ignore negative comments — responding draws more attention to them and encourages other people to complain too", "Report and block everyone who leaves a negative comment since they're probably not real customers anyway"], c: 1 },
    { q: "A social media post goes live with a typo in the client's brand name. At Digital Heroes, the immediate action is:", o: ["Leave it up — editing or deleting hurts engagement metrics and most users won't notice a small spelling mistake and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Immediately take it down, fix the error, republish, document the incident in the EOD report, and review QA process to prevent recurrence — zero tolerance for quality failures", "Wait until end of day to fix it so you don't disrupt the content schedule that's already been approved", "Blame the design team for not catching it in the creative asset review before it reached the social team"], c: 1 },
    { q: "Text on social media images should be:", o: ["As much as possible to convey maximum information", "In the brand's primary color — this is the standard approach most teams follow", "In small font to fit more content — this reflects the standard operating procedure most organizations follow", "Minimal and impactful — 6 words or fewer in the main message, with high contrast for readability"], c: 3 },
    { q: "Image dimensions matter for each platform because:", o: ["All platforms use the same dimensions — this reflects the standard operating procedure most organizations follow", "Wrong dimensions cause cropping, poor display, and unprofessional appearance — each platform has optimal sizes", "Dimensions primarily matter for ads, not organic", "Higher resolution always compensates for wrong dimensions"], c: 1 },
    { q: "A social media graphic has text that's unreadable on mobile. This fails the 'thumb-stop test' because:", o: ["Desktop is the primary consumption device — this reflects the standard operating procedure most organizations follow", "Mobile users can zoom in — this reflects the standard operating procedure most organizations follow", "Most social media is consumed on mobile — if content isn't instantly readable on a phone screen, it's scrolled past", "Readability doesn't affect engagement metrics"], c: 2 },
    { q: "Using consistent templates for social post series helps:", o: ["Make every post look identical and boring — this reflects the standard operating procedure most organizations follow", "Reduce the need for creative thinking — this reflects the standard operating procedure most organizations follow", "Build visual brand identity — followers recognize your content style and associate it with your brand", "Large brands need visual templates — this is the standard approach most teams follow"], c: 2 },
    { q: "White space in social media design is:", o: ["Wasted space that should be filled with content", "Strategic breathing room that makes the key message stand out — cluttered designs lose attention", "Appropriate for minimalist brands — this is the standard approach most teams follow", "A trend that will fade soon — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Video thumbnails on social media should:", o: ["Be custom-designed with a clear titleand compelling visual — the thumbnail determines if users click to watch", "Be auto-generated by the platform — this reflects the standard operating procedure most organizations follow", "Show the video's first frame always — this reflects the standard operating procedure most organizations follow", "Feature the brand logo prominently — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Canva vs professional design tools for social media:", o: ["Canva is excellent for consistent, fast social content — templates enable non-designers to produce quality visuals", "Canva is unprofessional and should never be used — experienced professionals recognize this as the most reliable path for maintaining quality control", "Professional tools always produce better results", "Canva is primarily for personal use — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Accessibility in social media design includes:", o: ["Alt text on images — this is the standard approach most teams follow", "Using the largest font size possible — this reflects the standard operating procedure most organizations follow", "Making posts available in multiple languages — this reflects the standard operating procedure most organizations follow", "Color contrast for readability, alt text on images, captions on videos, and avoiding color-only information"], c: 3 }
];

const task6Quiz = [
    { q: "Hashtag Mix Formula recommends using:", o: ["No hashtags — they're outdated", "The most popular hashtags with millions of posts — this is the standard approach most teams follow", "A strategic mix of branded, niche, community, and trending hashtags — not all from one category", "Exactly 30 hashtags on every post — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Using hashtags with 10M+ posts means your content:", o: ["Gets maximum visibility to millions — this reflects the standard operating procedure most organizations follow", "Gets buried in seconds — high-competition hashtags push your post off the feed almost immediately", "Ranks higher in search results — this reflects the standard operating procedure most organizations follow", "Is seen by the most relevant audience — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Branded hashtags (#DigitalHeroes) serve what purpose?", o: ["Building a searchable collection of brand content and tracking user-generated posts mentioning your brand", "They have no real value — this reflects the standard operating procedure most organizations follow", "They replace the need for other hashtags — this reflects the standard operating procedure most organizations follow", "Large corporations need branded hashtags — this is the standard approach most teams follow"], c: 0 },
    { q: "Niche hashtags (#ShopifyDevTips with 10K posts) are valuable because:", o: ["Less competition means your content stays visible longer and reaches a highly targeted, interested audience", "They have small audiences so they're useless — this reflects the standard operating procedure most organizations follow", "They're easier to type — this reflects the standard operating procedure most organizations follow", "Platform algorithms ignore niche hashtags — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Hashtag research should be updated:", o: ["Never — set it once and forget it", "Regularly — trending topics change, new relevant hashtags emerge, and old ones become oversaturated", "When launching a new product — this is the standard approach most teams follow", "Annually during strategy planning — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Banned or shadowbanned hashtags can cause:", o: ["No real impact on your account — this reflects the standard operating procedure most organizations follow", "The hashtag to be hidden, not the post — this is the standard approach most teams follow", "Your entire post to receive reduced reach or become invisible — one bad hashtag can tank performance", "Temporary 24-hour reach reduction — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Community hashtags (#ShopifyPartners) differ from trending hashtags because:", o: ["They're less effective overall — this reflects the standard operating procedure most organizations follow", "Trending hashtags always outperform community ones", "They target a specific ongoing community vs temporary trends — building sustained community engagement", "They're primarily used by non-profit organizations"], c: 2 },
    { q: "The ideal number of hashtags on Instagram is:", o: ["Always 30 — use every available spot", "3-10 relevant, strategic hashtags — quality over quantity, tested for your specific audience", "Zero — hashtags reduce professionalism", "Exactly 15 for optimal algorithm treatment — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Hashtag placement in comments vs caption:", o: ["Always in the caption for visibility — this reflects the standard operating procedure most organizations follow", "Hashtags primarily work in the caption — this reflects the standard operating procedure most organizations follow", "Always in the first comment for algorithm bonus", "Either works, but comment placement keeps captions clean — test which gets better reach for your account"], c: 3 },
    { q: "A competitor analysis of hashtag strategy helps because:", o: ["You should copy competitors' hashtags exactly", "All businesses in the same industry use identical hashtags", "Competitor analysis is unethical — this reflects the standard operating procedure most organizations follow", "It reveals which hashtags work in your industry and identifies gaps where you can stand out"], c: 3 }
];

const task7Quiz = [
    { q: "Engagement Rules: Responding to a comment within 1 hour vs 24 hours impacts:", o: ["Nothing — response time doesn't matter", "Algorithm boost AND community trust — fast replies signal active community management and trigger more engagement", "The commenter's satisfaction — this is the standard approach most teams follow", "Platform ranking of your business profile — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A follower leaves a negative comment: 'Your service is terrible!' The correct response is:", o: ["Delete the comment to protect brand image — this reflects the standard operating procedure most organizations follow", "Acknowledge their concern publicly with empathy, then take the conversation to DMs to resolve privately", "Argue back with facts to prove them wrong — this reflects the standard operating procedure most organizations follow", "Ignore it — trolls want attention"], c: 1 },
    { q: "Community management includes proactive engagement. This means:", o: ["Going to relevant accounts, leaving thoughtful comments, joining conversations — building relationships before they come to you", "Waiting for people to engage with your content", "Liking every post in your feed — this reflects the standard operating procedure most organizations follow", "Auto-commenting with emojis on trending posts — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines"], c: 0 },
    { q: "DM conversations with potential clients should:", o: ["Be handled by automated chatbots primarily — this reflects the standard operating procedure most organizations follow", "Be forwarded to the sales team immediately — this reflects the standard operating procedure most organizations follow", "Be personalized, responsive, and follow the brand's tone — DMs are where conversions happen for agencies", "Never include pricing information — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A brand's community is built through:", o: ["Buying followers and engagement — this reflects the standard operating procedure most organizations follow", "Aggressive promotional campaigns — this reflects the standard operating procedure most organizations follow", "Posting viral content — this is the standard approach most teams follow", "Consistent value delivery, genuine interaction, and making followers feel heard and valued"], c: 3 },
    { q: "Responding to all comments (even simple ones like 'Great post!') matters because:", o: ["It signals to the algorithm that the post has active conversation + makes followers feel appreciated", "It's not worth the time for generic comments — this reflects the standard operating procedure most organizations follow", "Detailed comments deserve responses — this is the standard approach most teams follow", "Auto-replies are sufficient for generic comments"], c: 0 },
    { q: "When a follower asks a question in the comments that requires detailed explanation:", o: ["Ignore it — comments aren't for customer support and ensures long-term sustainability across your deliverables and ensures long-term sustainability across deliverables", "Delete the comment and DM them instead — this reflects the standard operating procedure most organizations follow", "Provide a brief helpful answer publicly and offer to DM for more detail — showing helpfulness to everyone watching", "Copy-paste a FAQ response — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Crisis management on social media (negative viral post about your brand) requires:", o: ["Deleting all negative mentions immediately — this reflects the standard operating procedure most organizations follow", "Going silent until the crisis passes — this reflects the standard operating procedure most organizations follow", "Posting positive content to bury the negative", "Speed, transparency, empathy — acknowledge quickly, explain honestly, and show action steps"], c: 3 },
    { q: "Community polls and Q&A Stories serve:", o: ["Entertainment purposes — this is the standard approach most teams follow", "Dual purpose: boosting engagement metrics AND providing valuable audience insights for strategy", "No strategic purpose — they're just fun", "As replacement for analytics tools — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Building superfans (highly engaged followers) is valuable because:", o: ["They become voluntary brand advocates who share your content, defend your brand, and bring new followers organically", "Superfans buy everything you sell — this reflects the standard operating procedure most organizations follow", "They're harder to lose than casual followers — this reflects the standard operating procedure most organizations follow", "Celebrity brands have superfans — this is the standard approach most teams follow"], c: 0 }
];

const task8Quiz = [
    { q: "The most important social media metric for business impact is:", o: ["Follower count — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Engagement Rate — it measures how actively your audience interacts relative to size, indicating content quality", "Post frequency — this reflects the standard operating procedure most organizations follow", "Number of hashtags used — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Reach vs Impressions: A post with 500 reach and 1,500 impressions means:", o: ["500 people engaged and 1,500 scrolled past — this reflects the standard operating procedure most organizations follow", "The post was seen 2,000 times total — this reflects the standard operating procedure most organizations follow", "500 people saw it 3 times each on average — measuring content stickiness vs unique viewers", "The numbers don't relate to each other — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Click-through rate from social media to website measures:", o: ["How many people clicked the like button — this reflects the standard operating procedure most organizations follow", "Total clicks anywhere on the post — this reflects the standard operating procedure most organizations follow", "How many people clicked the follow button — this reflects the standard operating procedure most organizations follow", "How effectively your content drives traffic — the ultimate conversion metric connecting social to business goals"], c: 3 },
    { q: "Analytics show that video posts get 3x more engagement than images. The strategy should be:", o: ["Delete all image posts immediately — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Post videos from now on — this is the standard approach most teams follow", "Increase video content in the mix while keeping image posts for variety — data informs but doesn't dictate entirely", "Ignore the data — your instinct is more important"], c: 2 },
    { q: "Best time to post is shown as 10AM-12PM in your analytics. This means:", o: ["Your specific audience is most active during this window — test and optimize around it, not blindly follow", "Always post at exactly 10AM every day — this reflects the standard operating procedure most organizations follow", "All social media audiences are active at the same time", "The data is unreliable — post whenever convenient"], c: 0 },
    { q: "A post gets high saves but low likes. This indicates:", o: ["Poor performance — saves don't matter", "High-value content people want to reference later — saves signal high quality to algorithms even more than likes", "The content is too complex for the audience — this reflects the standard operating procedure most organizations follow", "A glitch in the platform analytics — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Monthly social media reporting should include:", o: ["Positive metrics to keep stakeholders happy — this is the standard approach most teams follow", "Growth metrics, engagement trends, top/bottom performing content, and strategic insights for next month", "Just follower count and total posts — this reflects the standard operating procedure most organizations follow", "Raw data without any analysis — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Vanity metrics (follower count, likes) vs actionable metrics differ because:", o: ["Actionable metrics (CTR, conversions, engagement rate) drive business decisions while vanity metrics just look impressive", "Vanity metrics are more accurate — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "There's no real difference — this reflects the standard operating procedure most organizations follow", "All metrics are equally valuable — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "An audience insight shows 70% of followers are 25-34 females. Content strategy should:", o: ["Ignore demographics — content should be universal", "Change the target audience to match strategy", "Post content for women in their 20s-30s — this is the standard approach most teams follow", "Tailor content themes, tone, and visual style to resonate with this primary demographic"], c: 3 },
    { q: "Social media ROI is hardest to measure because:", o: ["Social media has no business value — this reflects the standard operating procedure most organizations follow", "ROI primarily applies to paid advertising — this reflects the standard operating procedure most organizations follow", "Attribution is complex — a follower might see 10 posts before converting, making it hard to credit specific posts", "Social media analytics tools are inaccurate — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task9Quiz = [
    { q: "Posting Frequency: The ideal cadence for Instagram is:", o: ["3-5 feed posts per week with daily Stories — consistency matters more than volume", "10 posts per day for maximum visibility — this reflects the standard operating procedure most organizations follow", "1 post per month is sufficient — this reflects the standard operating procedure most organizations follow", "Post primarily when you have something perfect"], c: 0 },
    { q: "Content scheduling tools (Buffer, Later, Hootsuite) enable:", o: ["Automatic engagement with followers — this reflects the standard operating procedure most organizations follow", "Batch creation and scheduled publishing — freeing time for engagement and strategy instead of daily posting panic", "Guaranteed viral content — this reflects the standard operating procedure most organizations follow", "Removal of the need for a content calendar — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Scheduling a post for 3AM when your audience is asleep means:", o: ["Near-zero initial engagement which signals to the algorithm that the content is uninteresting — burying it", "Night owls will see it first — this reflects the standard operating procedure most organizations follow", "The algorithm will promote it during peak hours", "Posting time doesn't affect performance — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "A content calendar should be planned:", o: ["2-4 weeks in advance — allowing for strategic themes while leaving room for timely content", "One day at a time for maximum flexibility — this reflects the standard operating procedure most organizations follow", "6 months ahead to prevent any gaps — this reflects the standard operating procedure most organizations follow", "No planning needed — spontaneous content performs best"], c: 0 },
    { q: "Evergreen content in the schedule refers to:", o: ["Content about nature and the environment — this reflects the standard operating procedure most organizations follow", "Content that was once popular and can be reposted", "Content that remains relevant regardless of when it's posted — tips, guides, testimonials that can be reshared", "Holiday-specific content planned in advance — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A scheduled post references a current event that has changed dramatically. You should:", o: ["Let it post anyway — scheduled is scheduled", "Reschedule it for next month — this reflects the standard operating procedure most organizations follow", "Add a disclaimer to the caption — this reflects the standard operating procedure most organizations follow", "Edit or remove it immediately — tone-deaf content during changed circumstances damages brand reputation"], c: 3 },
    { q: "Batch creating content (spending 4 hours creating a week's worth) is better than daily creation because:", o: ["Daily creation produces more creative content — research supports this methodology as the most effective for achieving measurable improvements", "Batching always produces lower quality — this reflects the standard operating procedure most organizations follow", "Focused creation sessions produce higher quality and consistency while freeing daily time for engagement and strategy", "It doesn't matter — both produce the same results"], c: 2 },
    { q: "Auto-posting on weekends when you're off is:", o: ["Unprofessional — you should be personally posting and ensures long-term sustainability across your deliverables", "Not possible on most platforms — this reflects the standard operating procedure most organizations follow", "Lazy and reduces content quality — this reflects the standard operating procedure most organizations follow", "Smart scheduling — maintains posting consistency while allowing work-life balance, with engagement monitored"], c: 3 },
    { q: "A content calendar should balance:", o: ["Promotional content types — this is the standard approach most teams follow", "Educational, entertaining, inspirational, and promotional content — the mix keeps the audience engaged", "Whatever the client wants posted — this reflects the standard operating procedure most organizations follow", "Content that has performed well before — this is the standard approach most teams follow"], c: 1 },
    { q: "Analytics from previous month shows Thursday posts outperform Monday posts by 40%. Your scheduling should:", o: ["Post primarily on Thursdays — this reflects the standard operating procedure most organizations follow", "Shift more important content to Thursday while testing if Mondays improve with different content types", "Ignore the data — one month isn't enough", "Stop posting on Mondays entirely — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

const task10Quiz = [
    { q: "Trend riding in social media means:", o: ["Following every trend regardless of brand relevance — applying this principle consistently across all projects builds a reputation for professional excellence", "Posting trending content and nothing else — this is the standard approach most teams follow", "Creating trends from scratch — this reflects the standard operating procedure most organizations follow", "Identifying trending topics, audio, or formats and adapting them to fit your brand's message strategically"], c: 3 },
    { q: "A dance trend goes viral on TikTok/Reels. For a Shopify agency, the approach should be:", o: ["Do the dance because it's trending — this reflects the standard operating procedure most organizations follow", "Copy exactly what influencers are doing — this reflects the standard operating procedure most organizations follow", "Skip it if it doesn't align with brand, OR creatively adapt it to show a relatable agency scenario", "Dance trends never work for B2B brands — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The window to ride a social media trend is typically:", o: ["24-72 hours at peak, 1-2 weeks maximum — speed is critical for trend relevance", "6 months — trends last a long time and ensures long-term sustainability across your deliverables", "1 hour — trends die instantly", "Trends are timeless and can be used anytime"], c: 0 },
    { q: "Trend adaptation for brand requires:", o: ["Copying the trend exactly as seen from others", "Ignoring trends entirely — this reflects the standard operating procedure most organizations follow", "Adding your unique brand angle — the trend format + your expertise = content that's both timely and valuable", "Waiting until the trend peaks then joining — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Audio trends on Instagram Reels help reach because:", o: ["Using trending audio gets algorithmic boost — the platform promotes content using popular sounds", "Users prefer posts with music — this reflects the standard operating procedure most organizations follow", "Audio has no effect on reach — this reflects the standard operating procedure most organizations follow", "Music industry accounts benefit from audio trends — this is the standard approach most teams follow"], c: 0 },
    { q: "A controversial trend emerges. Your brand should:", o: ["Jump on it immediately for maximum exposure — this reflects the standard operating procedure most organizations follow", "Comment on every controversy for visibility — this reflects the standard operating procedure most organizations follow", "Take a strong stance to get attention — this reflects the standard operating procedure most organizations follow", "Evaluate carefully — does it align with brand values? Could it backfire? When in doubt, skip it"], c: 3 },
    { q: "Meme marketing works for brands because:", o: ["Memes are unprofessional and should be avoided — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "Relatable humor makes brands feel human — when memes align with industry, they get high shares and engagement", "Gen Z brands use memes — this is the standard approach most teams follow", "Memes always go viral — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Creating content around calendar events (New Year, Diwali, Black Friday) is:", o: ["Unoriginal and should be avoided — this reflects the standard operating procedure most organizations follow", "Useful for retail brands — this is the standard approach most teams follow", "Strategic planning — known dates allow pre-prepared quality content that taps into existing audience interest", "Unnecessary if you have strong daily content — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "An industry-specific trend (e.g., 'Shopify stores be like...') is MORE valuable than a general trend because:", o: ["It targets your exact audience with relevant laughs/insights — combining trend reach with niche relevance", "Industry trends have more posts — this reflects the standard operating procedure most organizations follow", "General trends always outperform niche ones — this reflects the standard operating procedure most organizations follow", "Industry trends are too narrow to be effective"], c: 0 },
    { q: "When a trend doesn't fit your brand at all, the best decision is:", o: ["Force it to work because FOMO — this reflects the standard operating procedure most organizations follow", "Skip it confidently — not every trend deserves your participation, authenticity matters more than chasing every hype", "Create a minimum-effort version anyway — this reflects the standard operating procedure most organizations follow", "Criticize the trend publicly to stand out — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

// =============================================================================
// TASK 11: CRISIS MANAGEMENT & REPUTATION RECOVERY
// =============================================================================

const task11Content = `<h2>🚨 TASK 11: CRISIS MANAGEMENT — Handling PR Issues & Negative Feedback</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🚨 Why Crisis Management Matters</h3>
    <p>In social media, a single negative comment can snowball into a full-blown PR crisis within hours. As a social media professional at Digital Heroes, you are the <strong>first line of defense</strong> against brand reputation damage. How you respond in the first 60 minutes determines whether a situation is resolved or escalates.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ The Golden Hour Rule:</strong>
        <p style="margin: 10px 0 0 0;">You have <strong>60 minutes</strong> from the first negative mention to acknowledge and begin responding. After that, the narrative is shaped by others, not you. Every hour of silence doubles the reputational risk.</p>
    </div>
</div>

<div class="content-section">
    <h3>📋 Crisis Severity Levels</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Level</th>
            <th style="padding: 12px;">Description</th>
            <th style="padding: 12px;">Examples</th>
            <th style="padding: 12px;">Response Time</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #34D399;">Level 1 — Low</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Individual complaint, minor error</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Typo in post, wrong link, minor customer complaint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 1 hour</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #FBBF24;">Level 2 — Medium</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multiple complaints, negative trend forming</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Service outage complaints, negative review thread, insensitive content backlash</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 30 minutes</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #EF4444;">Level 3 — High</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Viral negative attention, media pickup</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data breach rumor, offensive post going viral, influencer calling out brand</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 15 minutes — escalate to management immediately</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🛡️ The 5-Step Crisis Response Framework</h3>
    <ol>
        <li><strong>ACKNOWLEDGE</strong> — Respond publicly within the Golden Hour. Show you are aware and taking it seriously. Never ignore or delete legitimate complaints.</li>
        <li><strong>ASSESS</strong> — Determine severity level. Is it a single complaint or a pattern? Is it factually accurate? Gather all information before making statements.</li>
        <li><strong>ALIGN</strong> — Loop in your manager/PM immediately for Level 2+. Get approval on the response before posting. Never go rogue on crisis communication.</li>
        <li><strong>ADDRESS</strong> — Provide a genuine, empathetic response. Own mistakes if they happened. Offer a concrete resolution. Move detailed conversations to DMs.</li>
        <li><strong>ANALYZE</strong> — After resolution, document what happened, what was done, and how to prevent it. Update the crisis playbook with lessons learned.</li>
    </ol>
</div>

<div class="content-section">
    <h3>💬 Response Templates by Scenario</h3>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">Negative Review:</strong>
        <p style="margin: 10px 0 0 0;">"Thank you for sharing your experience, [Name]. We take this feedback seriously and want to make this right. Could you DM us the details so we can look into this personally?"</p>
    </div>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #FBBF24; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">Service Complaint:</strong>
        <p style="margin: 10px 0 0 0;">"We hear you, [Name], and we apologize for the inconvenience. Our team is actively working on resolving this. We will update you within [timeframe]."</p>
    </div>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">Brand Mistake:</strong>
        <p style="margin: 10px 0 0 0;">"We made an error and we own it. [Brief explanation]. We have taken immediate steps to correct this and ensure it does not happen again. We appreciate your patience."</p>
    </div>
</div>

<div class="content-section">
    <h3>🚫 What NEVER to Do During a Crisis</h3>
    <ul>
        <li><strong>Never delete legitimate negative comments</strong> — This makes the situation worse and signals guilt. Only delete spam, profanity, or hate speech.</li>
        <li><strong>Never argue publicly</strong> — Stay professional. Take heated conversations to private messages.</li>
        <li><strong>Never blame the customer</strong> — Even if they are wrong, empathize first. "We understand your frustration" goes a long way.</li>
        <li><strong>Never go silent</strong> — Silence is interpreted as not caring. Acknowledge even if you do not have a solution yet.</li>
        <li><strong>Never make promises you cannot keep</strong> — Only commit to what you can deliver. Overpromising damages trust further.</li>
        <li><strong>Never post unrelated content during a crisis</strong> — Pause scheduled posts until the situation is resolved.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔄 Reputation Recovery Strategy</h3>
    <p>After a crisis is resolved, rebuilding trust requires consistent, deliberate effort over 4-8 weeks:</p>
    <ul>
        <li><strong>Week 1-2:</strong> Increase positive content frequency. Share testimonials and success stories. Respond to every single comment with extra care.</li>
        <li><strong>Week 3-4:</strong> Launch a community engagement campaign. Ask for user-generated content. Feature client wins prominently.</li>
        <li><strong>Week 5-8:</strong> Monitor sentiment metrics. Gradually return to normal posting cadence. Conduct a full post-mortem review.</li>
    </ul>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">Pro Tip:</strong> A well-handled crisis often builds MORE trust than no crisis at all. Audiences respect brands that own mistakes and fix them transparently.
    </div>
</div>

<div class="content-section">
    <h3>📊 Monitoring Tools & Setup</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Tool</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Setup</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google Alerts</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand mention monitoring</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set alerts for brand name, common misspellings, key personnel names</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Social Listening</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-time sentiment tracking</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monitor brand hashtags, @mentions, keywords across platforms</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Review Platforms</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client satisfaction tracking</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check marketplace reviews, Google Reviews, Trustpilot daily</td>
        </tr>
    </table>
</div>`;

const task11Quiz = [
    { q: "The 'Golden Hour Rule' in crisis management states that you should respond within:", o: ["24 hours to allow time for a thorough investigation", "60 minutes — after that, the narrative is shaped by others", "1 week, ensuring legal review of the response", "Only after management approves — timing does not matter"], c: 1 },
    { q: "A client leaves a negative review on the marketplace accusing Digital Heroes of poor work quality. The correct first step is:", o: ["Delete the review immediately to protect the brand", "Argue publicly with facts proving the client is wrong", "Acknowledge the feedback publicly, empathize, and invite them to DM for resolution", "Ignore it — one bad review does not matter"], c: 2 },
    { q: "During a Level 3 crisis (viral negative attention), what should you do FIRST?", o: ["Draft a detailed public statement and post it immediately", "Escalate to management within 15 minutes and pause scheduled content", "Delete all social media posts until the situation calms down", "Post positive content to drown out the negative attention"], c: 1 },
    { q: "A scheduled promotional post is queued during an active crisis. You should:", o: ["Let it post as scheduled — consistency matters", "Add a disclaimer to the promotional post", "Pause ALL scheduled posts until the crisis is resolved", "Speed up the posting schedule to distract from the crisis"], c: 2 },
    { q: "Someone posts hateful slurs in your comment section. According to crisis management guidelines, you should:", o: ["Respond publicly explaining why the comment is wrong", "Delete it — hate speech, spam, and profanity are the exceptions to the no-delete rule", "Ignore it and let followers defend the brand", "Screenshot it and post about it for sympathy engagement"], c: 1 },
    { q: "The 5-Step Crisis Response Framework begins with:", o: ["Address — immediately provide a detailed public response", "Analyze — conduct a full investigation before any communication", "Acknowledge — respond publicly to show you are aware and taking it seriously", "Align — get legal approval before any public acknowledgment"], c: 2 },
    { q: "After a crisis is resolved, reputation recovery typically requires:", o: ["No special action — audiences forget quickly", "4-8 weeks of consistent positive content, testimonials, and community engagement", "A single apology post is sufficient", "Changing the brand name and starting fresh on social media"], c: 1 },
    { q: "A well-handled crisis can actually result in:", o: ["Permanent brand damage regardless of the response quality", "MORE trust than no crisis at all — audiences respect transparency and accountability", "No measurable difference in brand perception", "Immediate follower growth due to viral attention"], c: 1 },
    { q: "Which monitoring tool should be set up for brand mention tracking?", o: ["Only Instagram Insights — other tools are unnecessary", "Google Alerts with brand name, misspellings, and key personnel names", "Facebook Page likes tracker only", "No tools needed — negative mentions will be reported by followers"], c: 1 },
    { q: "When responding to a negative review, the phrase 'We understand your frustration' is used because:", o: ["It is a required legal disclaimer for public responses", "Empathy diffuses tension — even if the customer is wrong, acknowledging feelings first builds rapport", "It avoids admitting fault legally", "It buys time while you prepare the real response"], c: 1 },
    { q: "Multiple customers are complaining about the same issue on social media. This is classified as:", o: ["Level 1 — Low (treat each complaint individually)", "Level 2 — Medium (negative trend forming, respond within 30 minutes)", "Not a crisis — customer complaints are normal", "Level 3 — High (only if media picks it up)"], c: 1 },
    { q: "Deleting legitimate negative comments during a crisis will:", o: ["Quickly resolve the situation by removing evidence", "Make the situation worse — it signals guilt and often triggers screenshots and backlash", "Only affect that one comment without broader impact", "Be acceptable if you replace it with a positive review"], c: 1 }
];

// =============================================================================
// TASK 12: AGENCY BRAND BUILDING
// =============================================================================

const task12Content = `<h2>🏢 TASK 12: AGENCY BRAND BUILDING — LinkedIn, Instagram & Employer Branding</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Why Agency Branding is Your Superpower</h3>
    <p>Digital Heroes is not just another agency — we are building a <strong>world-class digital brand</strong>. Your social media work directly impacts how potential clients, partners, and future team members perceive us. Strong agency branding reduces client acquisition costs, attracts top talent, and commands premium pricing.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">📊 The Brand Impact Numbers:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Companies with strong employer brands see <strong>50% more qualified applicants</strong></li>
            <li>B2B buyers are <strong>5x more likely</strong> to engage with a company that has a robust LinkedIn presence</li>
            <li>Agency portfolio posts generate <strong>3x more inbound inquiries</strong> than generic promotional content</li>
            <li>Employee advocacy posts get <strong>8x more engagement</strong> than brand page posts</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>💼 LinkedIn Strategy for Digital Heroes</h3>
    <p>LinkedIn is the primary B2B channel for Digital Heroes. Here is the content strategy breakdown:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Content Type</th>
            <th style="padding: 12px;">Frequency</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Case Studies</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2x/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Demonstrate expertise</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How we increased a Shopify store revenue by 340% in 90 days"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Team Spotlights</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employer branding</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Meet [Name], our Shopify expert who just completed her 50th store launch"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Industry Insights</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Thought leadership</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"5 Shopify trends that will define e-commerce in 2026"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Culture Posts</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2x/week</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Attract talent</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team outing photos, birthday celebrations, learning sessions</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EC4899; margin-top: 0;">📸 Instagram Brand Strategy</h3>
    <p>Instagram for Digital Heroes serves two purposes: <strong>attracting clients</strong> through portfolio work and <strong>attracting talent</strong> through culture content.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <strong style="color: #EC4899;">Instagram Content Split:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li><strong>40% Portfolio</strong> — Before/after store designs, Shopify store showcases, WordPress builds, design work</li>
            <li><strong>25% Education</strong> — Tips, carousels on e-commerce topics, Shopify hacks</li>
            <li><strong>20% Culture</strong> — Team photos, behind-the-scenes, office life, offsites</li>
            <li><strong>15% Engagement</strong> — Polls, Q&As, memes, interactive content</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Portfolio Showcasing Best Practices</h3>
    <ul>
        <li><strong>Before/After Format:</strong> Show the client's old site vs. the Digital Heroes redesign — this is the highest-performing portfolio content format</li>
        <li><strong>Process Stories:</strong> Document the design and development process from wireframe to launch using Instagram Stories</li>
        <li><strong>Client Testimonial Videos:</strong> Short video clips of clients sharing their experience — more credible than text reviews</li>
        <li><strong>Results-Focused Captions:</strong> Always include measurable outcomes: revenue increase, conversion rate improvement, traffic growth</li>
        <li><strong>Consistent Template:</strong> Use branded templates for portfolio posts so they are instantly recognizable in the feed</li>
    </ul>
</div>

<div class="content-section">
    <h3>👥 Employer Branding Framework</h3>
    <p>Employer branding is about making Digital Heroes the place top talent WANTS to work. This is critical for scaling the team:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Pillar</th>
            <th style="padding: 12px;">Content Ideas</th>
            <th style="padding: 12px;">Platform</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Growth Culture</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Learning sessions, certifications achieved, promotion stories</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn + Instagram</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Team Bonding</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offsite trips, celebrations, team lunches, birthday posts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram Stories + Reels</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Innovation</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New tools adopted, process improvements, tech stack highlights</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn Articles</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Values in Action</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Equity model explanation, client success stories, community work</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn + Instagram Carousels</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔑 Employee Advocacy Program</h3>
    <p>Employee advocacy amplifies reach by 561% compared to brand channels alone. Here is how to implement it at Digital Heroes:</p>
    <ol>
        <li><strong>Content Library:</strong> Create a shared folder of pre-approved posts team members can share on their personal LinkedIn</li>
        <li><strong>Engagement Pods:</strong> Team members like and comment on company posts within 30 minutes of publishing</li>
        <li><strong>Personal Branding Coaching:</strong> Help team members build their own LinkedIn presence — their growth reflects on Digital Heroes</li>
        <li><strong>Recognition Program:</strong> Feature team members who actively share and engage with company content</li>
    </ol>
</div>`;

const task12Quiz = [
    { q: "What percentage of a Digital Heroes Instagram feed should be portfolio content?", o: ["40% — showcasing Shopify stores, WordPress builds, and design work", "80% — portfolio should dominate to attract clients", "10% — most content should be engagement-focused", "Only post portfolio content on LinkedIn, never Instagram"], c: 0 },
    { q: "Employee advocacy posts get how much more engagement compared to brand page posts?", o: ["2x more engagement", "Same engagement as brand posts", "8x more engagement — personal profiles have stronger reach", "Less engagement because personal profiles have fewer followers"], c: 2 },
    { q: "The most effective portfolio content format on Instagram is:", o: ["A text-only post describing the project outcomes", "Before/after format showing the client's old site vs. Digital Heroes redesign", "A link to the live website without any visuals", "A long video walkthrough of every single page"], c: 1 },
    { q: "LinkedIn content for a B2B agency like Digital Heroes should prioritize:", o: ["Dance Reels and trending audio for maximum engagement", "Case studies, team spotlights, industry insights, and culture posts", "Only job postings and hiring announcements", "Personal opinions on politics and current events"], c: 1 },
    { q: "How often should case studies be posted on LinkedIn for Digital Heroes?", o: ["Daily — one case study per day for maximum visibility", "2x per month — quality case studies with measurable results", "Once per quarter — case studies take too long to produce", "Never — case studies reveal client secrets"], c: 1 },
    { q: "Strong employer branding results in:", o: ["50% more qualified job applicants and lower talent acquisition costs", "No measurable impact on hiring quality", "Only benefiting large corporations, not agencies", "Higher salary expectations from candidates making it counterproductive"], c: 0 },
    { q: "When posting portfolio work, captions should always include:", o: ["Only the client's name and industry", "Measurable outcomes like revenue increase, conversion improvement, and traffic growth", "The exact price the client paid for the project", "Generic statements like 'Another great project completed'"], c: 1 },
    { q: "The employer branding content pillar 'Values in Action' includes:", o: ["Only posting the company mission statement repeatedly", "Equity model explanation, client success stories, and community work showing company values", "Criticizing competitors who have worse values", "Sharing internal salary information publicly"], c: 1 },
    { q: "An engagement pod at Digital Heroes means:", o: ["Buying fake engagement through paid services", "Team members like and comment on company posts within 30 minutes of publishing", "Only executives are allowed to engage with company content", "Automated bots commenting on all posts"], c: 1 },
    { q: "For Instagram Stories showcasing agency culture, the best approach is:", o: ["Only post perfectly polished, professionally shot content", "Share authentic behind-the-scenes moments — team outings, office life, celebrations", "Post the same culture content as LinkedIn word-for-word", "Never show team members' faces due to privacy concerns"], c: 1 },
    { q: "Client testimonial videos are more effective than text reviews because:", o: ["Videos get more likes than text posts", "Video testimonials feel more credible and authentic — viewers can see real emotion and sincerity", "Text reviews are no longer supported on social media platforms", "Videos are easier to produce than writing text reviews"], c: 1 },
    { q: "B2B buyers are how much more likely to engage with a company that has a robust LinkedIn presence?", o: ["2x more likely", "No difference — B2B buyers do not use LinkedIn for research", "5x more likely to engage with companies that have strong LinkedIn presence", "10x more likely but only for tech companies"], c: 2 }
];

// =============================================================================
// TASK 13: PAID ADVERTISING & CAMPAIGN MANAGEMENT
// =============================================================================

const task13Content = `<h2>💰 TASK 13: PAID ADVERTISING — Facebook Ads, Google Ads & Budget Optimization</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">💰 Why Paid Advertising Matters for Digital Heroes</h3>
    <p>Organic reach alone will not scale Digital Heroes to its Point B target of ₹75 Crores by 2027. Paid advertising is the <strong>accelerator</strong> that amplifies organic efforts. As a social media professional, understanding paid advertising allows you to offer a complete service — both to Digital Heroes and to clients who need social media management.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">📊 Key Terms You Must Know:</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(245, 158, 11, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Term</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Definition</th>
            </tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>ROAS</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Return on Ad Spend — Revenue generated per rupee/dollar spent on ads</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>CPC</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cost Per Click — What you pay each time someone clicks your ad</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>CPM</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cost Per Mille — Cost per 1,000 impressions</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>CTR</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Click-Through Rate — Percentage of people who click after seeing the ad</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>CPA</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cost Per Acquisition — Total cost to acquire one customer</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Conversion Rate</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Percentage of clickers who complete the desired action</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>📱 Facebook & Instagram Ads (Meta Ads Manager)</h3>
    <p>Meta Ads Manager powers both Facebook and Instagram advertising. Here is the campaign structure you need to master:</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">Campaign Structure Hierarchy:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li><strong>Campaign Level:</strong> Set your objective (Awareness, Traffic, Engagement, Leads, Conversions)</li>
            <li><strong>Ad Set Level:</strong> Define audience, placement, budget, and schedule</li>
            <li><strong>Ad Level:</strong> Create the actual creative — image/video, copy, CTA button</li>
        </ul>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Objective</th>
            <th style="padding: 12px;">Best For</th>
            <th style="padding: 12px;">KPI</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Awareness</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New brand launch, reaching new audiences</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reach, Impressions, CPM</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Traffic</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Driving visitors to website or landing page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CPC, CTR, Landing Page Views</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Leads</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collecting contact info, form submissions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cost Per Lead, Lead Quality Score</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Conversions</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sales, sign-ups, purchases</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ROAS, CPA, Conversion Rate</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎯 Audience Targeting Strategies</h3>
    <ul>
        <li><strong>Custom Audiences:</strong> Upload customer email lists, website visitors (via Meta Pixel), or app users. These are your warmest audiences.</li>
        <li><strong>Lookalike Audiences:</strong> Meta finds users similar to your best customers. Start with 1% lookalike (most similar) and expand to 3-5% for scale.</li>
        <li><strong>Interest-Based Targeting:</strong> Target by interests (e.g., "Shopify," "e-commerce," "online store") and behaviors (e.g., "engaged shoppers," "small business owners").</li>
        <li><strong>Retargeting:</strong> Show ads to people who visited the website but did not convert. Retargeting ads have 10x higher CTR than cold ads.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔍 Google Ads Essentials</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Ad Type</th>
            <th style="padding: 12px;">Where It Shows</th>
            <th style="padding: 12px;">Best For</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Search Ads</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google search results page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High-intent searches like "hire Shopify developer" or "best e-commerce agency"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Display Ads</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Banner ads across websites in Google network</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand awareness and retargeting</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>YouTube Ads</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Before/during YouTube videos</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video content promotion, brand awareness</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Performance Max</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All Google properties (Search, Display, YouTube, Gmail, Maps)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Automated full-funnel campaigns with machine learning</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>💸 Budget Optimization Framework</h3>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">The 70/20/10 Budget Split:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li><strong>70%</strong> — Proven campaigns with consistent ROAS. Scale what works.</li>
            <li><strong>20%</strong> — Testing new audiences, creatives, or placements. Always be testing.</li>
            <li><strong>10%</strong> — Experimental campaigns. Completely new ideas, platforms, or formats.</li>
        </ul>
    </div>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ Common Budget Mistakes:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Spending the entire budget on a single ad set without testing variations</li>
            <li>Not setting daily or lifetime budget caps — runaway ad spend is real</li>
            <li>Killing ads too early — Meta needs 50+ conversions per ad set per week for optimization (the "learning phase")</li>
            <li>Not tracking conversions properly — spending without knowing what is working</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📐 A/B Testing for Ads</h3>
    <p>Never assume. Always test. Here is what to A/B test and in what order of impact:</p>
    <ol>
        <li><strong>Audience:</strong> Different interests, lookalikes, age ranges (highest impact)</li>
        <li><strong>Creative:</strong> Image vs. video, carousel vs. single, different visual styles</li>
        <li><strong>Copy:</strong> Different hooks, long vs. short copy, different CTAs</li>
        <li><strong>Placement:</strong> Feed vs. Stories vs. Reels, automatic vs. manual placement</li>
        <li><strong>Offer/CTA:</strong> Different lead magnets, discount amounts, urgency tactics</li>
    </ol>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">Testing Rule:</strong> Change only ONE variable at a time. If you change the audience AND the creative simultaneously, you will not know which change drove the result difference. Run tests for at least 3-5 days with sufficient budget before drawing conclusions.
    </div>
</div>`;

const task13Quiz = [
    { q: "ROAS stands for:", o: ["Rate of Ad Sales — measures how fast ads sell", "Return on Ad Spend — revenue generated per unit spent on ads", "Reach of Audience Segments — how many people see the ad", "Revenue of All Sources — total company revenue"], c: 1 },
    { q: "The Meta Ads campaign structure hierarchy from top to bottom is:", o: ["Ad → Ad Set → Campaign", "Campaign → Ad → Ad Set", "Campaign → Ad Set → Ad (objective → audience/budget → creative)", "Ad Set → Campaign → Ad"], c: 2 },
    { q: "Retargeting ads have approximately what CTR compared to cold audience ads?", o: ["Same CTR — audience temperature does not affect click rates", "2x higher CTR", "10x higher CTR — website visitors are already familiar with the brand", "Lower CTR because people are annoyed by repeated ads"], c: 2 },
    { q: "The 70/20/10 budget split allocates 70% to:", o: ["Experimental new campaigns and unproven ideas", "Testing new audiences and creatives", "Proven campaigns with consistent ROAS — scale what works", "Brand awareness campaigns that cannot be measured"], c: 2 },
    { q: "During the Meta Ads 'learning phase,' each ad set needs approximately how many conversions per week to optimize?", o: ["5 conversions per week is sufficient", "50+ conversions per ad set per week for proper optimization", "500 conversions minimum before any optimization occurs", "No minimum — Meta optimizes immediately"], c: 1 },
    { q: "A Lookalike Audience at 1% means:", o: ["Only 1% of your budget goes to this audience", "Meta finds users most similar to your source audience — the most precise match", "1% of your followers will see the ad", "The audience is 1% of the total population"], c: 1 },
    { q: "When A/B testing ads, the most important rule is:", o: ["Test as many variables as possible simultaneously to save time", "Change only ONE variable at a time so you know which change drove the result", "Always test creative first since it has the highest visual impact", "Never test — trust your instincts about what will work"], c: 1 },
    { q: "CPA (Cost Per Acquisition) measures:", o: ["The cost of creating the ad creative", "How much the advertising platform charges per day", "The total cost to acquire one customer through advertising", "The cost of running the campaign for one month"], c: 2 },
    { q: "Google Search Ads are best for:", o: ["Brand awareness with audiences who have never heard of you", "High-intent searches like 'hire Shopify developer' where users are actively looking", "Retargeting website visitors with display banners", "Video content promotion on YouTube"], c: 1 },
    { q: "A common budget mistake in paid advertising is:", o: ["Setting daily budget caps to control spending", "Running A/B tests on different audiences", "Killing ads too early before they exit the learning phase", "Tracking conversions with Meta Pixel"], c: 2 },
    { q: "Performance Max campaigns on Google are unique because they:", o: ["Only run on Google Search results", "Run across ALL Google properties with machine learning optimization", "Are the cheapest campaign type available", "Do not require any creative assets"], c: 1 },
    { q: "For a Shopify agency like Digital Heroes, the most valuable Meta Ads objective is typically:", o: ["Awareness — getting the brand name in front of as many people as possible", "Engagement — getting likes and comments on posts", "Leads or Conversions — generating inquiries from businesses needing Shopify services", "Traffic — driving any visitors to the website regardless of intent"], c: 2 }
];

// =============================================================================
// TASK 14: CLIENT SOCIAL MEDIA DELIVERY
// =============================================================================

const task14Content = `<h2>🤝 TASK 14: CLIENT SOCIAL MEDIA DELIVERY — Managing Client Accounts & Workflows</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🤝 Managing Social Media for Clients</h3>
    <p>Digital Heroes offers social media management as a service through marketplace platforms and direct client relationships. This means you will be managing <strong>multiple client accounts simultaneously</strong>, each with unique brand voices, audiences, and goals. This task teaches you the professional delivery framework that ensures consistent, high-quality work across all client accounts.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">⚠️ Critical Rule:</strong>
        <p style="margin: 10px 0 0 0;">Posting on a client's social media without proper approval is a <strong>zero-tolerance violation</strong>. Every post must go through the approval workflow. A wrong post on a client's account can damage their business and Digital Heroes' reputation permanently.</p>
    </div>
</div>

<div class="content-section">
    <h3>📋 Client Onboarding Checklist</h3>
    <p>Before creating ANY content for a new client, complete this onboarding process:</p>
    <ol>
        <li><strong>Brand Brief Collection:</strong> Brand colors, fonts, tone of voice, target audience, competitors, do's and don'ts</li>
        <li><strong>Access Setup:</strong> Get added as admin/editor on client social accounts (never ask for passwords — use platform role-based access)</li>
        <li><strong>Content Audit:</strong> Review the last 3 months of the client's existing content. Identify what performed well and what did not.</li>
        <li><strong>Goal Alignment:</strong> Document the client's primary KPIs. Is it followers? Website traffic? Leads? Sales? Engagement?</li>
        <li><strong>Content Calendar Template:</strong> Set up the monthly calendar template with approval workflow</li>
        <li><strong>Communication Channel:</strong> Establish how the client prefers to communicate — marketplace messaging, email, WhatsApp, Slack</li>
        <li><strong>Reporting Schedule:</strong> Agree on monthly/biweekly reporting cadence and format</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📅 Content Calendar & Approval Workflow</h3>
    <p>The content calendar is the backbone of client social media delivery. Here is the standard Digital Heroes workflow:</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">Weekly Workflow:</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(139, 92, 246, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Day</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Activity</th>
            </tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Monday</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Plan next week's content calendar. Research trends and themes.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tuesday-Wednesday</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create content batch — graphics, copy, hashtags, captions for all posts</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Thursday</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Internal QA review by PM. Submit to client for approval with revisions if needed.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Friday</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client feedback incorporated. Final content scheduled. Analytics review of current week.</td></tr>
            <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Daily</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Community management — respond to comments, DMs, mentions. Monitor scheduled posts.</td></tr>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>✅ Quality Checklist Before Submission</h3>
    <p>Every piece of content must pass this checklist before going to the client:</p>
    <ul>
        <li>☐ <strong>Brand Voice:</strong> Does it match the client's tone? (Professional? Casual? Playful?)</li>
        <li>☐ <strong>Visual Consistency:</strong> Correct brand colors, fonts, logo placement?</li>
        <li>☐ <strong>Spelling & Grammar:</strong> Zero errors. Use Grammarly or similar tools.</li>
        <li>☐ <strong>Hashtags:</strong> Relevant, correctly researched, correct count per platform?</li>
        <li>☐ <strong>CTA:</strong> Does each post have a clear call-to-action?</li>
        <li>☐ <strong>Image Specs:</strong> Correct dimensions for the platform (1080x1080 for feed, 1080x1920 for Stories/Reels)?</li>
        <li>☐ <strong>Links:</strong> All links working and UTM-tagged for tracking?</li>
        <li>☐ <strong>Timing:</strong> Scheduled for optimal posting time based on audience analytics?</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔄 Managing Multiple Client Accounts</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Challenge</th>
            <th style="padding: 12px;">Solution</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Brand Voice Confusion</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create a 1-page brand voice guide per client. Review it before creating any content for that client.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Posting on Wrong Account</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always double-check which account is active before posting. Use scheduling tools that show the account name prominently.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Deadline Overlap</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use a master calendar showing all clients. Stagger content creation days. Never batch for all clients on the same day.</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Inconsistent Reporting</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use a standardized report template. Same metrics, same format, same schedule for every client.</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">⭐ Client Communication Best Practices</h3>
    <ul>
        <li><strong>Set Expectations Early:</strong> During onboarding, clearly explain what is included and what is not. Prevent scope creep.</li>
        <li><strong>Proactive Updates:</strong> Do not wait for clients to ask. Send weekly mini-updates: "This week we posted X content, got Y engagement, and Z new followers."</li>
        <li><strong>Handle Revision Requests Professionally:</strong> Never say "But I already made it." Say "Sure, I will update that. Just to confirm — you would like [specific change], correct?"</li>
        <li><strong>Underpromise, Overdeliver:</strong> If you can deliver in 2 days, say 3. Delivering early builds trust. Missing deadlines destroys it.</li>
        <li><strong>Document Everything:</strong> All approvals, feedback, and changes must be in writing (messaging platform, email). Verbal approvals are not sufficient.</li>
    </ul>
</div>`;

const task14Quiz = [
    { q: "Before creating ANY content for a new social media client, the FIRST step is:", o: ["Start posting immediately to show fast results", "Complete the client onboarding checklist — brand brief, access setup, content audit, goal alignment", "Copy the competitor's social media strategy", "Ask the client to send you their old posts so you can repost them"], c: 1 },
    { q: "Posting on a client's social media without proper approval is classified at Digital Heroes as:", o: ["Acceptable if the content is obviously good quality", "A minor issue that can be fixed by deleting the post", "A zero-tolerance violation — wrong posts can damage the client's business permanently", "Only an issue if the client complains about it"], c: 2 },
    { q: "The standard Digital Heroes content approval workflow order is:", o: ["Create content → Post immediately → Get client feedback after", "Create content → Internal QA review → PM sign-off → Client approval → Schedule posting", "Create content → Client approval → No internal review needed", "PM creates content → Social media manager posts → Client reviews later"], c: 1 },
    { q: "When managing multiple client accounts, the biggest risk is:", o: ["Running out of content ideas across accounts", "Posting on the wrong client account — always double-check which account is active", "Having too many scheduling tools open", "Clients requesting content at the same time"], c: 1 },
    { q: "When a client requests revisions to content, the professional response is:", o: ["Explain why the original version is better and push back", "Agree immediately without confirming exactly what they want changed", "Confirm the specific changes requested, make revisions, and resubmit for approval", "Tell them revision is outside the scope of work"], c: 2 },
    { q: "The quality checklist before submitting content to a client includes all EXCEPT:", o: ["Brand voice alignment and visual consistency", "Spelling, grammar, hashtag relevance, and CTA presence", "Correct image dimensions and UTM-tagged links", "Comparing the content to what competitors posted today"], c: 3 },
    { q: "Client communication should follow the principle of:", o: ["Overpromise to win the client's confidence, then negotiate later", "Underpromise and overdeliver — delivering early builds trust", "Only communicate when the client reaches out first", "Avoid written communication to maintain flexibility"], c: 1 },
    { q: "For client access to social media accounts, the correct approach is:", o: ["Ask the client for their username and password via email", "Use platform role-based access — get added as admin/editor without needing passwords", "Create a new account and transfer followers manually", "Use a shared password manager for all client accounts"], c: 1 },
    { q: "A master calendar for managing multiple clients should:", o: ["Only track posting dates without content details", "Show all clients, stagger content creation days, and prevent deadline overlaps", "Be updated once a month at the beginning of each billing cycle", "Only be accessible to the project manager, not the social media team"], c: 1 },
    { q: "Verbal client approval (e.g., 'Yeah that looks good' on a call) is:", o: ["Sufficient — the client said they approved it", "Not sufficient — all approvals must be documented in writing via messaging or email", "Only valid if the PM was on the call too", "Better than written approval because it is faster"], c: 1 },
    { q: "When a client's brand voice is very different from Digital Heroes' brand voice, you should:", o: ["Use Digital Heroes' voice since you are more experienced", "Create a 1-page brand voice guide for that client and review it before creating any content", "Blend both brand voices for a unique style", "Let the client write all their own copy and you just post it"], c: 1 },
    { q: "Weekly proactive client updates should include:", o: ["Only negative news — clients do not need to hear about things going well", "Content posted, engagement metrics, follower changes — do not wait for clients to ask", "Only financial billing information", "A list of excuses for why metrics did not improve"], c: 1 }
];

// =============================================================================
// TASK 15: ANALYTICS & ROI REPORTING
// =============================================================================

const task15Content = `<h2>📈 TASK 15: ANALYTICS & ROI REPORTING — UTM Tracking, Conversion Attribution & Monthly Reports</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">📊 Why Analytics is Non-Negotiable</h3>
    <p>Social media without analytics is like driving blindfolded. You might be creating beautiful content, but if you are not measuring results, you have no idea whether it is working. At Digital Heroes, <strong>every social media decision must be data-informed</strong>. Analytics separates professionals from hobbyists.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">The Analytics Hierarchy:</strong>
        <ol style="margin: 10px 0 0 0;">
            <li><strong>Vanity Metrics:</strong> Likes, followers, impressions — easy to see, hard to tie to revenue</li>
            <li><strong>Engagement Metrics:</strong> Comments, saves, shares, DMs — show audience quality</li>
            <li><strong>Conversion Metrics:</strong> Website clicks, leads generated, sales attributed — prove ROI</li>
            <li><strong>Revenue Metrics:</strong> ROAS, customer acquisition cost, lifetime value — the final measure</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🔗 UTM Tracking Explained</h3>
    <p>UTM (Urchin Tracking Module) parameters are tags added to URLs that let you track EXACTLY where website traffic comes from. Without UTM tracking, you cannot prove social media is driving results.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Parameter</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>utm_source</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Which platform sent the traffic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">instagram, facebook, linkedin</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>utm_medium</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type of traffic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">social, paid, email, referral</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>utm_campaign</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specific campaign or promotion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">spring_sale_2026, portfolio_launch</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>utm_content</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Which specific post or ad variation</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">carousel_v1, reel_testimonial</td>
        </tr>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">Example UTM URL:</strong>
        <p style="margin: 10px 0 0 0; font-family: monospace; word-break: break-all;">https://digitalheroes.co.in/services?utm_source=instagram&utm_medium=social&utm_campaign=portfolio_showcase&utm_content=carousel_shopify_case_study</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎯 Conversion Attribution Models</h3>
    <p>Attribution answers the question: "Which touchpoint gets credit for the conversion?" Understanding this is critical for accurate ROI reporting.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px;">Model</th>
            <th style="padding: 12px;">How It Works</th>
            <th style="padding: 12px;">Best For</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Last Click</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100% credit to the last touchpoint before conversion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple reporting, direct response campaigns</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>First Click</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100% credit to the first touchpoint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Understanding which channels drive awareness</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Linear</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Equal credit to all touchpoints in the journey</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long sales cycles with multiple touchpoints</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Data-Driven</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI assigns credit based on actual data patterns</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mature campaigns with enough conversion data</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📄 Monthly Report Structure</h3>
    <p>Every client and the DH internal team receives a monthly social media performance report. Here is the standard template:</p>

    <ol>
        <li><strong>Executive Summary</strong> — 3-5 bullet points of key wins and areas for improvement</li>
        <li><strong>KPI Dashboard</strong> — Followers, engagement rate, reach, website clicks, leads generated (with month-over-month comparison)</li>
        <li><strong>Top Performing Content</strong> — Top 3-5 posts with screenshots and analysis of WHY they performed</li>
        <li><strong>Underperforming Content</strong> — Bottom 3 posts with analysis and lessons learned</li>
        <li><strong>Platform Breakdown</strong> — Performance by platform (Instagram, LinkedIn, Facebook separately)</li>
        <li><strong>Traffic & Conversions</strong> — Google Analytics data showing social media traffic, UTM campaign performance, conversion metrics</li>
        <li><strong>Competitor Insights</strong> — Brief overview of competitor activity and positioning</li>
        <li><strong>Next Month Strategy</strong> — Content themes, campaigns planned, tests to run, goals to hit</li>
    </ol>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ Report Mistakes to Avoid:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Reporting only vanity metrics (follower count) without tying to business outcomes</li>
            <li>Not comparing to previous period — data without context is meaningless</li>
            <li>Hiding underperforming content — transparency builds client trust</li>
            <li>No actionable next steps — every report must end with what you will do differently next month</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🛠️ Analytics Tools Stack</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Tool</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Key Feature</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google Analytics 4</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Website traffic and conversion tracking</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UTM campaign tracking, conversion paths, audience demographics</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Business Suite</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram + Facebook analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Post performance, audience insights, ad metrics</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LinkedIn Analytics</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn page and post performance</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Visitor demographics, content performance by type</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google Looker Studio</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Automated dashboard and reporting</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Connect multiple data sources into one visual report</td>
        </tr>
    </table>
</div>`;

const task15Quiz = [
    { q: "The analytics hierarchy from least to most valuable is:", o: ["Revenue → Conversion → Engagement → Vanity", "Vanity metrics → Engagement metrics → Conversion metrics → Revenue metrics", "All metrics are equally valuable and should be weighted the same", "Conversion metrics are the only ones that matter"], c: 1 },
    { q: "UTM parameters are used to:", o: ["Improve SEO rankings on search engines", "Track EXACTLY where website traffic comes from by tagging URLs with source, medium, and campaign data", "Speed up website loading times", "Block spam traffic from reaching the website"], c: 1 },
    { q: "The utm_source parameter identifies:", o: ["Which specific post or ad variation was clicked", "The type of traffic (social, paid, email)", "Which platform sent the traffic (e.g., instagram, facebook, linkedin)", "The name of the specific campaign"], c: 2 },
    { q: "Last Click attribution gives 100% credit to:", o: ["The first touchpoint that introduced the customer to the brand", "All touchpoints equally throughout the customer journey", "The last touchpoint before the customer converted", "Whichever touchpoint had the highest engagement"], c: 2 },
    { q: "A monthly social media report should always include:", o: ["Only the top performing content to keep the client happy", "KPI dashboard with month-over-month comparison, top AND underperforming content, and next month strategy", "Just the follower count growth and a congratulations message", "Only the data the client specifically requests — nothing more"], c: 1 },
    { q: "Reporting only vanity metrics like follower count without business outcomes is problematic because:", o: ["Follower count is the only metric clients understand", "It does not prove social media is driving business value — data without business context is meaningless", "Vanity metrics are always inaccurate", "Clients prefer hearing about followers over revenue impact"], c: 1 },
    { q: "Google Analytics 4 (GA4) is essential for social media reporting because:", o: ["It replaces the need for platform-specific analytics", "It tracks website traffic from social media, UTM campaigns, and conversion paths", "It automatically posts content at optimal times", "It only works with Google Ads, not social media traffic"], c: 1 },
    { q: "The 'Data-Driven' attribution model works by:", o: ["Giving all credit to the cheapest marketing channel", "Using AI to assign credit based on actual conversion data patterns", "Only tracking the last click before purchase", "Randomly distributing credit across all touchpoints"], c: 1 },
    { q: "When a client's social media metrics decline month-over-month, the correct approach is:", o: ["Hide the decline and focus only on positive metrics", "Be transparent about the decline, explain possible causes, and present an action plan", "Blame the platform algorithm changes and take no further action", "Stop reporting until metrics improve naturally"], c: 1 },
    { q: "Google Looker Studio (formerly Data Studio) is used in social media reporting for:", o: ["Creating social media posts with templates", "Connecting multiple data sources into one automated visual dashboard", "Running paid advertising campaigns on Google", "Managing client social media accounts"], c: 1 },
    { q: "The utm_campaign parameter is used to identify:", o: ["Which social media platform sent the visitor", "The type of traffic source (organic vs paid)", "The specific campaign or promotion being tracked (e.g., spring_sale_2026)", "The browser the visitor is using"], c: 2 },
    { q: "Every monthly report must end with:", o: ["A request for the client to increase the budget", "Actionable next steps — what will be done differently next month based on the data", "A generic 'Thank you for choosing Digital Heroes' message", "No conclusion needed — the data speaks for itself"], c: 1 }
];

// =============================================================================
// TASK 16: VIDEO CONTENT & REELS STRATEGY
// =============================================================================

const task16Content = `<h2>🎬 TASK 16: VIDEO CONTENT & REELS STRATEGY — Short-Form Video, Hooks & Trending Formats</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.15)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EC4899; margin-top: 0;">🎬 Video is the Future — And the Present</h3>
    <p>Short-form video (Reels, Shorts, TikTok) dominates social media in 2026. Instagram Reels get <strong>67% more engagement</strong> than static posts, and video content is favored by every major platform algorithm. If you are not creating video content, you are falling behind. This task covers the complete framework for producing scroll-stopping video content for both Digital Heroes and clients.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <strong style="color: #EC4899;">📊 Video Performance Stats:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Reels get <strong>67% more engagement</strong> than static images on Instagram</li>
            <li>Video posts on LinkedIn get <strong>5x more engagement</strong> than text posts</li>
            <li>Short-form video has the <strong>highest ROI</strong> of any content format</li>
            <li>The average attention span for social media video is <strong>8 seconds</strong> — your hook must hit instantly</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎣 The Hook Framework — First 3 Seconds</h3>
    <p>The first 3 seconds determine whether someone watches or scrolls. Here are proven hook formats:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Hook Type</th>
            <th style="padding: 12px;">Format</th>
            <th style="padding: 12px;">Example for Agency</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bold Claim</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This [thing] made us [result]"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This one Shopify trick doubled our client's sales"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Pattern Interrupt</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unexpected visual or statement</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Stop hiring web developers until you watch this"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Question Hook</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Did you know that...?"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Did you know 73% of Shopify stores fail because of this?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Listicle</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"X things you need to know about..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"5 design mistakes killing your online store conversions"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Before/After</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show transformation visually</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We transformed this store from 0 to 500 orders/month"</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📐 Video Content Formats for Agencies</h3>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">High-Performing Video Types:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li><strong>Store Reveal:</strong> Before/after Shopify store transformations set to trending audio (15-30 seconds)</li>
            <li><strong>Quick Tips:</strong> "One thing your Shopify store NEEDS" — educational micro-content (15-30 seconds)</li>
            <li><strong>Day in the Life:</strong> Behind-the-scenes of an agency workday — humanizes the brand (30-60 seconds)</li>
            <li><strong>Client Testimonial:</strong> Short clip of a client sharing their success story (15-30 seconds)</li>
            <li><strong>Process Walkthrough:</strong> How a Shopify store gets built from concept to launch (30-60 seconds)</li>
            <li><strong>Trending Format Adaptation:</strong> Take a trending Reel format and adapt it to agency/e-commerce context</li>
            <li><strong>Tutorial/How-To:</strong> Step-by-step guides on Shopify features, design tips, or e-commerce strategies (30-90 seconds)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🛠️ Video Production Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Tool</th>
            <th style="padding: 12px;">Type</th>
            <th style="padding: 12px;">Best For</th>
            <th style="padding: 12px;">Cost</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CapCut</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile + Desktop editing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quick Reels editing, auto-captions, trending effects</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Canva Video</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Browser-based</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Branded video templates, text overlays, simple animations</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free / Pro</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>InShot</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile editing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">On-the-go editing, filters, music</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free / Pro</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Adobe Premiere Rush</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Desktop + Mobile</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional-grade editing, color correction, multi-track</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paid</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📏 Video Specs by Platform</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Platform</th>
            <th style="padding: 12px;">Aspect Ratio</th>
            <th style="padding: 12px;">Max Duration</th>
            <th style="padding: 12px;">Sweet Spot</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram Reels</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:16 (vertical)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90 seconds</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15-30 seconds</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">YouTube Shorts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:16 (vertical)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">60 seconds</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-45 seconds</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn Video</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1:1 or 16:9</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10 minutes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-90 seconds</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Facebook Reels</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:16 (vertical)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90 seconds</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15-30 seconds</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">✅ Video Content Best Practices</h3>
    <ul>
        <li><strong>Always Add Captions:</strong> 85% of social media video is watched without sound. Captions are mandatory, not optional.</li>
        <li><strong>Vertical First:</strong> Shoot in 9:16 aspect ratio. Horizontal video wastes screen space on mobile feeds.</li>
        <li><strong>Start with the Hook:</strong> Never begin with a logo animation or intro. Start with the most engaging moment.</li>
        <li><strong>Use Trending Audio:</strong> Instagram's algorithm boosts Reels that use trending audio. Check the audio library weekly.</li>
        <li><strong>End with a CTA:</strong> "Follow for more," "Save this for later," "DM us to learn more" — always tell viewers what to do next.</li>
        <li><strong>Repurpose Across Platforms:</strong> One video can be posted as an Instagram Reel, YouTube Short, Facebook Reel, and LinkedIn video (adjust captions and hashtags per platform).</li>
        <li><strong>Batch Produce:</strong> Shoot 5-10 videos in one session. Edit throughout the week. This is far more efficient than daily shooting.</li>
    </ul>
</div>`;

const task16Quiz = [
    { q: "Instagram Reels get approximately how much more engagement than static image posts?", o: ["10% more engagement — a marginal difference", "Same engagement — content quality matters more than format", "67% more engagement — video is strongly favored by the algorithm", "500% more engagement — static images get zero reach"], c: 2 },
    { q: "The first 3 seconds of a video are critical because:", o: ["Platform algorithms only analyze the first 3 seconds", "The average attention span is 8 seconds — the hook must hit instantly to prevent scrolling", "Videos shorter than 3 seconds get more reach", "Advertisers only pay for the first 3 seconds of watch time"], c: 1 },
    { q: "Which hook type starts with an unexpected visual or statement to stop scrolling?", o: ["Listicle hook — numbers always work", "Bold Claim hook — making a big promise", "Pattern Interrupt — something unexpected catches attention", "Question hook — asking viewers a question"], c: 2 },
    { q: "85% of social media video is watched without sound. This means:", o: ["Audio quality does not matter at all for social videos", "Captions are mandatory on every video — not optional", "Only add captions if the client requests them", "Music should be louder to force viewers to turn on sound"], c: 1 },
    { q: "The optimal aspect ratio for Instagram Reels and YouTube Shorts is:", o: ["16:9 horizontal for cinematic quality", "1:1 square for universal compatibility", "9:16 vertical — maximizes screen space on mobile", "4:3 standard for professional appearance"], c: 2 },
    { q: "For a Shopify agency, the highest-performing Reel format is typically:", o: ["Random dance trends with no agency connection", "Before/after store transformations set to trending audio", "Long talking-head explanations of technical features", "Unedited raw footage of the office"], c: 1 },
    { q: "The sweet spot duration for Instagram Reels is:", o: ["90 seconds — use the full available time", "15-30 seconds — short enough to maintain attention, long enough to deliver value", "Under 5 seconds — the shorter the better", "3-5 minutes — longer content performs better"], c: 1 },
    { q: "CapCut is recommended for Reels editing because:", o: ["It is the only tool that works with Instagram", "It offers quick editing, auto-captions, and trending effects for free", "It is required by Instagram's algorithm for maximum reach", "It replaces the need for professional video production entirely"], c: 1 },
    { q: "Video content repurposing means:", o: ["Posting the exact same video file on every platform without changes", "Adapting one video for multiple platforms — same core content with adjusted captions, hashtags, and specs per platform", "Only creating video for one platform and ignoring others", "Recording separate videos for each platform from scratch"], c: 1 },
    { q: "Starting a Reel with a logo animation or generic intro is:", o: ["Professional and recommended for brand consistency", "Ineffective — start with the hook immediately as viewers will scroll past intros", "Required by Instagram for business accounts", "Only acceptable for brands with over 100K followers"], c: 1 },
    { q: "Batch producing video content (shooting 5-10 videos in one session) is better than daily shooting because:", o: ["Daily shooting is actually more efficient", "Batch production maintains consistent quality and frees daily time for engagement and strategy", "It is impossible to shoot more than one video per day", "Batch production only works for large teams with dedicated videographers"], c: 1 },
    { q: "LinkedIn video performs best at which aspect ratio and duration?", o: ["9:16 vertical, 15 seconds", "1:1 or 16:9, 30-90 seconds — professional format for a professional platform", "Only 16:9 horizontal, 10+ minutes for long-form content", "LinkedIn does not support native video content"], c: 1 }
];

// =============================================================================
// TASK 17: CAREER GROWTH & CERTIFICATION
// =============================================================================

const task17Content = `<h2>🚀 TASK 17: CAREER GROWTH — SM Career Path, Specialization & Professional Development</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🚀 Your Social Media Career at Digital Heroes</h3>
    <p>Social media management is one of the fastest-growing career fields globally. At Digital Heroes, your growth is directly tied to your skills, output, and impact. This task maps your career progression from entry-level to leadership, with clear milestones and specialization options.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">💰 Career Growth = Company Growth x (Will + Efforts)</strong>
        <p style="margin: 10px 0 0 0;">Remember: Income = Happy Clients x Skill x Speed. Every skill you build, every client you serve well, and every efficiency you create compounds your value to the agency and your earning potential.</p>
    </div>
</div>

<div class="content-section">
    <h3>📊 Social Media Career Ladder at Digital Heroes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Level</th>
            <th style="padding: 12px;">Title</th>
            <th style="padding: 12px;">Responsibilities</th>
            <th style="padding: 12px;">Timeline</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L1</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SM Trainee</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete training, assist with content creation, learn tools and workflows</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 1-3</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L2</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SM Executive</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manage 2-3 client accounts, create content independently, run basic ad campaigns</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 3-9</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L3</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Senior SM Executive</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Handle 4-6 accounts, develop strategies, manage paid campaigns, mentor juniors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 9-18</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L4</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SM Team Lead</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead SM team, client relationship management, cross-department collaboration</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 18-30</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>L5</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SM Manager / Head of SM</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Department strategy, hiring, P&L responsibility, agency-level SM direction</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month 30+</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EC4899; margin-top: 0;">🎯 Specialization Paths</h3>
    <p>After reaching L2-L3, you can specialize in one or more of these high-demand areas:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(236, 72, 153, 0.2);">
            <th style="padding: 12px;">Specialization</th>
            <th style="padding: 12px;">Focus</th>
            <th style="padding: 12px;">Key Skills</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Paid Social Specialist</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Facebook/Google Ads, budget optimization, ROAS</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta Ads Manager, Google Ads, analytics, A/B testing</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Content Strategist</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content planning, brand voice, editorial calendars</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Copywriting, SEO for social, trend analysis, storytelling</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Video Content Creator</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Short-form video production, Reels, YouTube</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video editing, scripting, trending formats, on-camera presence</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Analytics & Reporting Specialist</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data analysis, ROI measurement, dashboards</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GA4, Looker Studio, SQL basics, data visualization</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Community & Influencer Manager</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Community building, influencer partnerships</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Relationship management, negotiation, UGC campaigns</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📜 Industry Certifications to Pursue</h3>
    <p>These certifications strengthen your expertise and are recognized across the industry:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Certification</th>
            <th style="padding: 12px;">Provider</th>
            <th style="padding: 12px;">Cost</th>
            <th style="padding: 12px;">Relevance</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Blueprint</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta (Facebook)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free courses / Paid exam</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Essential for Meta Ads specialists</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google Ads Certification</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Skillshop</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Required for paid search and display advertising</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>HubSpot Social Media</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HubSpot Academy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Comprehensive social media strategy and inbound marketing</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Google Analytics (GA4)</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Skillshop</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Essential for proving social media ROI with data</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hootsuite Social Marketing</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hootsuite Academy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free course / Paid cert</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Industry-standard social media management certification</td>
        </tr>
    </table>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">💡 DH Learning Benefit:</strong> Digital Heroes provides 4 hours/week of learning time and up to Rs 5,000/year course reimbursement. Use this for certification exams and advanced training.
    </div>
</div>

<div class="content-section">
    <h3>📈 Building Your Personal Brand</h3>
    <p>The best social media professionals practice what they preach. Building your own personal brand demonstrates your expertise and attracts opportunities:</p>
    <ul>
        <li><strong>LinkedIn Profile:</strong> Optimize your headline (e.g., "Social Media Strategist | Helping brands grow through data-driven content"). Post 3x/week about your learnings and industry insights.</li>
        <li><strong>Portfolio:</strong> Document case studies from client work (with permission). Show measurable results: "Grew Instagram from 500 to 5,000 followers in 6 months with 4.2% engagement rate."</li>
        <li><strong>Content Sharing:</strong> Share industry articles, add your commentary. Position yourself as a knowledgeable voice in the social media space.</li>
        <li><strong>Networking:</strong> Engage with other social media professionals. Join LinkedIn groups, attend webinars, and participate in industry discussions.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">⭐ Performance Review KPIs for SM Professionals</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px;">KPI</th>
            <th style="padding: 12px;">Target</th>
            <th style="padding: 12px;">Weight</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Quality & Consistency</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All posts on-brand, on-time, zero errors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Engagement Growth</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Engagement rate above 3%, month-over-month growth</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead Generation / Traffic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Measurable website traffic and inquiries from social</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Satisfaction</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client retention, positive feedback, 5-star reviews</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional Development</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Certifications completed, skills learned, team contribution</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15%</td>
        </tr>
    </table>
</div>`;

const task17Quiz = [
    { q: "The career ladder at Digital Heroes for social media progresses from:", o: ["SM Manager → SM Trainee → SM Executive (reverse order)", "SM Trainee → SM Executive → Senior SM Executive → SM Team Lead → SM Manager/Head of SM", "There is no formal career ladder — promotions are random", "SM Executive → SM Trainee → Team Lead (skip Senior level)"], c: 1 },
    { q: "An L2 SM Executive at Digital Heroes is expected to:", o: ["Only observe and learn without managing any accounts", "Manage 2-3 client accounts, create content independently, and run basic ad campaigns", "Lead the entire social media department", "Only focus on personal brand building without client work"], c: 1 },
    { q: "Specializing as a 'Paid Social Specialist' requires mastery of:", o: ["Only organic content creation and hashtag strategies", "Meta Ads Manager, Google Ads, analytics, and A/B testing", "Copywriting and SEO exclusively", "Community management and influencer outreach only"], c: 1 },
    { q: "Meta Blueprint certification is:", o: ["A general business management certification", "Essential for Meta Ads specialists — covers Facebook and Instagram advertising", "Only available to Meta employees", "No longer relevant since Meta changes algorithms frequently"], c: 1 },
    { q: "Digital Heroes provides how many hours per week of dedicated learning time?", o: ["0 hours — learning is done on personal time only", "1 hour per week on Fridays", "4 hours per week for professional development", "Unlimited — there is no cap on learning hours"], c: 2 },
    { q: "Building a personal brand as a social media professional is important because:", o: ["It directly competes with the agency's brand and should be avoided", "It demonstrates expertise, attracts opportunities, and practices what you preach", "Personal brands are only relevant for influencers, not agency professionals", "It is required by Digital Heroes policy but has no practical benefit"], c: 1 },
    { q: "The SM Executive performance review KPI with the highest weight (25%) is:", o: ["Professional Development and certifications completed", "Content Quality and Consistency — all posts on-brand, on-time, zero errors", "Lead Generation from social media channels", "Engagement Growth rate improvements"], c: 1 },
    { q: "A LinkedIn profile headline for a social media professional should:", o: ["Simply say 'Social Media Manager' with no additional context", "Include specific value proposition like 'Social Media Strategist | Helping brands grow through data-driven content'", "List all previous job titles and companies", "Be left blank for a mysterious professional appeal"], c: 1 },
    { q: "Google Analytics (GA4) certification is important for social media professionals because:", o: ["It is only needed for SEO specialists, not social media managers", "It proves you can measure social media ROI with data — connecting social activity to business outcomes", "GA4 replaces the need for platform-specific analytics entirely", "It is a mandatory certification to use Google products"], c: 1 },
    { q: "The transition from L3 Senior SM Executive to L4 SM Team Lead typically happens at:", o: ["Month 3 — leadership is based on seniority not skill", "Month 9 — after completing training certification", "Month 18-30 — requires demonstrated leadership, client management, and cross-department collaboration", "It never happens — L3 is the highest achievable level"], c: 2 },
    { q: "Digital Heroes' course reimbursement for professional development is up to:", o: ["Rs 1,000 per year — enough for basic online courses only", "Rs 5,000 per year for certification exams and advanced training", "Rs 50,000 per year — covering all industry conferences", "No reimbursement is available — all learning costs are personal"], c: 1 },
    { q: "Portfolio documentation for career growth should include:", o: ["Only the final deliverable without any context or metrics", "Case studies with measurable results — follower growth, engagement rates, revenue impact", "Screenshots of every single post ever created", "Only projects where everything went perfectly — never mention challenges"], c: 1 }
];

const task18Quiz = [
    { q: "Content Pillars ensure:", o: ["Every post is about the same topic — this reflects the standard operating procedure most organizations follow", "Promotional content is posted — this is the standard approach most teams follow", "Strategic content variety within defined themes — consistency without repetition", "Content creation takes maximum effort — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Instagram Algorithm 2024 values saves and shares over likes because:", o: ["Likes are being removed from the platform — this reflects the standard operating procedure most organizations follow", "It's a temporary change that will revert — this reflects the standard operating procedure most organizations follow", "Saves and shares generate more ad revenue — this reflects the standard operating procedure most organizations follow", "Saves and shares require more effort — indicating higher content value and relevance"], c: 3 },
    { q: "Hashtag Mix Formula combines branded, niche, community, and trending hashtags because:", o: ["More categories = more hashtags = more reach — this reflects the standard operating procedure most organizations follow and ensures long-term sustainability across your deliverables", "Each category serves a different purpose — branded for identity, niche for targeting, community for belonging, trending for discovery", "It's an arbitrary industry standard — this reflects the standard operating procedure most organizations follow", "Platforms rank posts using hashtag variety — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Community management's biggest impact is:", o: ["Building genuine relationships that turn followers into advocates who organically grow your brand", "Replying to comments quickly — this reflects the standard operating procedure most organizations follow", "Monitoring competitor activity — this reflects the standard operating procedure most organizations follow", "Deleting negative comments — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Social media analytics should drive:", o: ["Content exactly matching what performed best before", "Follower count growth at all costs — this reflects the standard operating procedure most organizations follow", "Vanity metric reporting for stakeholders — this reflects the standard operating procedure most organizations follow", "Strategic decisions about content mix, posting times, and audience targeting — informed evolution, not repetition"], c: 3 },
    { q: "The 80/20 content rule (80% value, 20% promotional) exists because:", o: ["Revenue primarily comes from 20% promotional — this reflects the standard operating procedure most organizations follow", "Audiences follow for value — too much promotion drives unfollows while value builds trust for when you do promote", "Algorithms penalize promotional content — this reflects the standard operating procedure most organizations follow", "80% is the exact proven optimal ratio — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Video outperforming static images on every platform means:", o: ["Delete all static image content immediately — this reflects the standard operating procedure most organizations follow", "Hire a videographer and stop designing graphics", "Produce video content going forward — this is the standard approach most teams follow", "Increase video in the content mix while using images strategically for variety — data informs, doesn't dictate"], c: 3 },
    { q: "Scheduling tools help social media professionals by:", o: ["Replacing the need for creative thinking — this reflects the standard operating procedure most organizations follow", "Making every post feel robotic and scheduled — this reflects the standard operating procedure most organizations follow", "Enabling batch creation. freeing daily time for engagement, strategy, and real-time community interaction", "Eliminating the need for analytics — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Cross-platform strategy should:", o: ["Post identical content everywhere for efficiency", "Focus on primarily one platform and ignore others", "Adapt content format and tone for each platform while maintaining consistent brand identity", "Alternate platforms each day — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Trend riding is most effective when:", o: ["The trend format is adapted to deliver your brand's unique message — trend + expertise = relevance", "You join every trend regardless of relevance — this reflects the standard operating procedure most organizations follow", "You wait until the trend peaks to ensure safety", "You create trends rather than follow them — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "UGC (User-Generated Content) is valuable because:", o: ["It provides authentic social proof from real users — more trusted than brand-created content", "It replaces the need for professional content — understanding why this works helps prevent the same category of problems from recurring in the future", "Users are better content creators than brands", "It's free content with no quality control needed"], c: 0 },
    { q: "Engagement rate is calculated as:", o: ["Followers divided by posts — this reflects the standard operating procedure most organizations follow", "Total engagements (likes, comments, shares, saves) divided by impressions or followers, times 100", "Likes minus dislikes — this reflects the standard operating procedure most organizations follow", "Comments divided by followers — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A social media audit evaluates:", o: ["Follower growth year-over-year — this is the standard approach most teams follow", "How many tools the team is using — this reflects the standard operating procedure most organizations follow", "Overall strategy effectiveness: content quality, engagement trends, competitor position, and goal achievement", "Whether the manager is posting daily — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Stories (24hr content) complement Feed (permanent content) by:", o: ["Replacing the need for feed posts — this reflects the standard operating procedure most organizations follow", "Working for personal accounts — this is the standard approach most teams follow", "Being completely separate from feed strategy — this reflects the standard operating procedure most organizations follow", "Providing authentic, low-production behind-the-scenes content that drives daily engagement with existing followers"], c: 3 },
    { q: "Negative comments should NEVER be deleted unless:", o: ["They're critical of your product — this reflects the standard operating procedure most organizations follow", "More than 5 people agree with the criticism — this reflects the standard operating procedure most organizations follow", "They reduce your engagement rate — this reflects the standard operating procedure most organizations follow", "They contain spam, profanity, hate speech, or violate community guidelines — legitimate criticism should be addressed"], c: 3 },
    { q: "Content repurposing (blog → carousel → reel → email) works because:", o: ["It's lazy content creation — this reflects the standard operating procedure most organizations follow", "It reduces the need for new ideas — this reflects the standard operating procedure most organizations follow", "Algorithms reward cross-platform content — this reflects the standard operating procedure most organizations follow", "Different audiences consume content in different formats — one idea reaches maximum people across touchpoints"], c: 3 },
    { q: "Social media KPIs for a Shopify agency should include:", o: ["Website traffic from social, inquiry generation, portfolio views, and engagement rate — business metrics, not vanity", "Follower count and post frequency — this is the standard approach most teams follow and ensures long-term sustainability across your deliverables", "How many trending posts were created — this reflects the standard operating procedure most organizations follow", "Hours spent on social media daily — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The biggest social media mistake for agencies is:", o: ["Posting without strategy — random content, no content pillars, no analytics review, no business goals tied to activity", "Not posting enough — this reflects the standard operating procedure most organizations follow", "Having too many platforms — this reflects the standard operating procedure most organizations follow", "Using scheduling tools instead of posting manually — the reasoning behind this connects directly to broader principles of professional service delivery"], c: 0 },
    { q: "Building a social media following takes time. The realistic growth expectation is:", o: ["1,000 followers per week from day one — this reflects the standard operating procedure most organizations follow", "Slow, consistent growth — focus on engagement quality over follower quantity, as engaged small audiences beat disengaged large ones", "If you don't go viral within a month, change strategy — this aligns with industry best practices and ensures consistent results across different project types", "Buying followers to jumpstart growth — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The social media certification exam tests knowledge across:", o: ["Instagram strategies — this is the standard approach most teams follow and ensures long-term sustainability across your deliverables", "Technical tool knowledge — this is the standard approach most teams follow", "All modules: mindset, platform mastery, content creation, design, hashtags, community, analytics, scheduling, and trends", "Posting frequency and consistency primarily — this reflects the standard operating procedure most organizations follow"], c: 2 }
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
