// Content Writer Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "Intro to Company", description: "Employee Handbook & Company Culture", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Read Employee Handbook completely", "📖 Company values, policies & rules"] },
    { id: 2, title: "Content Mindset", description: "Words = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Concept: Copy drives conversions", "📖 Read content-sop.html 'Why Content Matters' section"] },
    { id: 3, title: "SEO Fundamentals", description: "Writing for Google", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🔍 Tech: Keywords, Meta, Structure", "📖 Study SEO checklist in SOP"] },
    { id: 4, title: "Product Descriptions", description: "Features → Benefits", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🛒 Formula: PAS, AIDA", "📖 Study product copy examples"] },
    { id: 5, title: "Blog Strategy", description: "Content that Ranks", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 Structure: Headers, Links, Images", "📖 Study blog templates"] },
    { id: 6, title: "Email Copy", description: "Subject Lines that Open", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "✉️ Metrics: Open Rate, Click Rate", "📖 Study email templates"] },
    { id: 7, title: "Ad Copy", description: "High-Converting Ads", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📢 Platforms: Meta, Google", "📖 Study ad frameworks"] },
    { id: 8, title: "Brand Voice & Style", description: "Consistency Across Channels", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🎯 Guidelines: Tone, Style", "📖 Study brand voice templates"] },
    { id: 9, title: "AI Content Tools", description: "ChatGPT Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🤖 Prompts: Product, Blog, Email", "📖 Master AI prompting techniques"] },
    { id: 10, title: "Content QA", description: "Proofreading Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "✅ Checklist: Grammar, SEO, CTA", "📖 Study QA checklist"] },
    { id: 11, title: "Final Certification", description: "Content Mastery Exam", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions", "🎥 Submit portfolio"] },
    { id: 12, title: "SEO Content Strategy", description: "Advanced Keyword Research & Topic Clusters", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🔍 Pillar pages & topic clusters", "📖 Advanced keyword research techniques"] },
    { id: 13, title: "E-Commerce Product Copy", description: "Shopify & WordPress Conversion Copy", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🛒 Platform-specific product writing", "📖 Conversion-focused descriptions"] },
    { id: 14, title: "Client Communication", description: "Briefs, Feedback & Revision Management", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💬 Understanding client requirements", "📖 Managing revisions professionally"] },
    { id: 15, title: "Marketplace Delivery", description: "Writing for Client Orders & Turnaround", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📦 Delivery message templates", "📖 Turnaround management strategies"] },
    { id: 16, title: "Advanced Copywriting & CRO", description: "AIDA, PAS, Headlines & A/B Testing", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "✍️ Advanced headline formulas", "📖 Conversion Rate Optimization copy"] },
    { id: 17, title: "Career Growth", description: "Portfolio Building & Specialization", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🚀 DH career ladder for writers", "📖 Building a standout portfolio"] },
    { id: 18, title: "Portfolio Build", description: "Practical Content Portfolio & Final Exam", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "📝 Hands-on writing exercises", "🎥 Build your content portfolio"] }
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

// ============ TASK 1: CONTENT MINDSET ============
const task2Content = `
<h2>📚 TASK 1: CONTENT MINDSET - Words ARE Revenue</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into content strategy, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(52, 211, 153, 0.1), rgba(16, 185, 129, 0.1)); border: 2px solid rgba(52, 211, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #F472B6;">Development</strong> → builds the store<br>
            ↓<br>
            <strong style="color: #34D399; font-size: 1.2em;">⭐ YOU (Content)</strong> → <strong>THE VOICE - write copy that sells and ranks</strong><br>
            ↓<br>
            <strong style="color: #60A5FA;">SEO & Traffic</strong> → brings customers<br>
            ↓<br>
            <strong style="color: #A78BFA;">Conversions</strong> → creates revenue
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(52, 211, 153, 0.15); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #34D399;">✍️ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a content writer, you are the <strong>VOICE</strong> of every brand we build. Your product descriptions convince visitors to buy. Your blog posts rank on Google and drive traffic. Your headlines determine click-through rates. A single word change can increase conversions by 47%. Your words ARE the revenue engine—every comma counts.</p>
    </div>
    
    <p style="color: #34D399; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Weak copy = No SEO = No traffic = No sales. Your words make the sale.</p>
</div>

<div class="content-section">
    <h3>💰 The $10,000 Headline</h3>
    <p>This isn't an exaggeration. <strong>One headline change can transform business results.</strong></p>
    
    <div class="highlight-box">
        <strong>🔥 REAL CASE STUDY:</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Before:</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Premium Coffee Beans"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2.3% conversion</td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>After:</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Wake Up Happy: Single-Origin Beans Roasted Fresh This Week"</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3.4% conversion</td>
            </tr>
        </table>
        <p><strong>Result:</strong> +47% add-to-cart rate = ₹83,000 extra monthly revenue</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The Writer's Responsibility</h3>
    <p>As a content writer at Digital Heroes, you're not just "writing words." You are:</p>
    <ul>
        <li>🎯 <strong>Revenue Generator:</strong> Every description you write can increase or decrease sales</li>
        <li>🔍 <strong>SEO Strategist:</strong> Your words determine if the page ranks on Google</li>
        <li>💬 <strong>Brand Voice:</strong> You shape how customers perceive the business</li>
        <li>🤝 <strong>Sales Support:</strong> Good copy closes deals while you sleep</li>
    </ul>
</div>

<div class="content-section">
    <h3>📊 Features vs Benefits - The Core Skill</h3>
    <p><strong>This is the #1 difference between amateur and professional writers.</strong></p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature (Boring)</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Benefit (Selling)</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">500ml capacity</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keeps your coffee hot for your entire 2-hour commute</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Organic cotton</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feel good knowing only the purest fabric touches your baby's skin</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24/7 support</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Never feel stuck - help is always one message away</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fast delivery</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unbox your order before your excitement fades</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>💡 The Benefit Formula:</strong><br>
        Feature + "which means" + Customer Outcome = Benefit<br><br>
        Example: "Waterproof case" + which means + "your phone survives pool parties and monsoon walks"
    </div>
</div>

<div class="content-section">
    <h3>🧠 The Psychology of Words</h3>
    <p>Different words trigger different emotions:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weak Word</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Power Word</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It's Better</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Claim / Get / Unlock</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Makes them feel like they're receiving, not losing money</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cheap</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Affordable / Budget-friendly / Value</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Cheap" implies low quality</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Good</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Premium / Exceptional / Handcrafted</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specific beats generic</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 2: SEO FUNDAMENTALS ============
const task3Content = `
<h2>📚 TASK 2: SEO FUNDAMENTALS - Writing for Google</h2>

<div class="content-section">
    <h3>🔍 Why SEO Matters for Writers</h3>
    <p>The best product description in the world is worthless if no one finds it.</p>
    
    <div class="highlight-box">
        <strong>📊 SEO Reality Check:</strong>
        <ul>
            <li>93% of all web traffic comes from search engines</li>
            <li>75% of users never scroll past page 1 of Google</li>
            <li>Position 1 gets 32% of all clicks, Position 10 gets 2.4%</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📋 The Complete On-Page SEO Checklist</h3>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best Practice</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Title</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50-60 characters, keyword first</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Organic Dog Food | Premium Nutrition | FreshPaws"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Description</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">150-160 chars, include CTA</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Give your dog the nutrition they deserve. 100% organic, vet-approved. Free shipping on orders ₹999+. Shop now!"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>H1 Heading</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">One per page, primary keyword</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Organic Dog Food for Happy, Healthy Pets"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>First 100 Words</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Include primary keyword naturally</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mention "organic dog food" in opening paragraph</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image Alt Text</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Descriptive, include keyword if natural</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Golden retriever eating organic dog food from bowl"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 Keyword Intent Types</h3>
    <p>Match your content to what the searcher actually wants:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Intent Type</th>
            <th style="padding: 12px;">Example Keywords</th>
            <th style="padding: 12px;">Content Type</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Informational</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"how to train a puppy"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blog post, guide</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Commercial</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"best organic dog food"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Comparison, review</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Transactional</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"buy organic dog food online"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product page, category page</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 3: PRODUCT DESCRIPTIONS ============
const task4Content = `
<h2>📚 TASK 3: PRODUCT DESCRIPTIONS - Features → Benefits</h2>

<div class="content-section">
    <h3>🛒 The PAS Formula (Problem-Agitate-Solve)</h3>
    <p>This is the most powerful copywriting formula for product descriptions:</p>
    
    <div class="highlight-box">
        <strong>P - Problem:</strong> Identify the customer's pain point<br>
        <strong>A - Agitate:</strong> Make them feel the pain more deeply<br>
        <strong>S - Solve:</strong> Present your product as the solution
    </div>
    
    <h4>Example: Selling a Water Bottle</h4>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <p><strong>PROBLEM:</strong> "You're in the middle of your workout, reaching for your water bottle... and it's already warm. Gross."</p>
        <p><strong>AGITATE:</strong> "Nothing kills motivation like lukewarm water when you're pushing through your last set. And those cheap bottles? They leak in your gym bag every. single. time."</p>
        <p><strong>SOLVE:</strong> "The ArcticFlow bottle keeps water ice-cold for 24 hours with triple-wall insulation. Leak-proof guaranteed. Work out harder, stay refreshed longer."</p>
    </div>
</div>

<div class="content-section">
    <h3>📝 The AIDA Formula</h3>
    <p>Classic advertising framework that still works:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Step</th>
            <th style="padding: 12px;">Goal</th>
            <th style="padding: 12px;">How</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>A - Attention</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stop the scroll</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bold headline, surprising stat</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>I - Interest</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keep them reading</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Address their problem</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>D - Desire</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Make them want it</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Benefits, testimonials, results</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>A - Action</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Get the click/sale</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clear CTA + urgency</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>⚡ Product Description Template</h3>
    <div class="highlight-box">
        <strong>The 5-Part Structure:</strong>
        <ol>
            <li><strong>Hook Headline:</strong> Benefit-focused, emotionally compelling</li>
            <li><strong>Opening:</strong> Address the problem/desire (2-3 sentences)</li>
            <li><strong>Features → Benefits:</strong> 3-5 bullet points transforming specs into outcomes</li>
            <li><strong>Social Proof:</strong> Reviews, ratings, "500+ happy customers"</li>
            <li><strong>CTA + Urgency:</strong> "Add to Cart" + "Only 12 left" or "Free shipping ends tonight"</li>
        </ol>
    </div>
</div>
`;

// ============ TASK 4: BLOG STRATEGY ============
const task5Content = `
<h2>📚 TASK 4: BLOG STRATEGY - Content that Ranks</h2>

<div class="content-section">
    <h3>📝 The Perfect Blog Structure</h3>
    
    <div class="highlight-box">
        <strong>Blog Post Anatomy:</strong>
        <ol>
            <li><strong>Hook Title:</strong> "How I Increased Sales by 340% in 30 Days (Step-by-Step)"</li>
            <li><strong>Promise Intro:</strong> Tell them exactly what they'll learn in 2-3 sentences</li>
            <li><strong>H2 Sections:</strong> 4-6 major sections with clear value</li>
            <li><strong>Visuals:</strong> Image/table/list every 300 words</li>
            <li><strong>Internal Links:</strong> 3-5 links to related content</li>
            <li><strong>CTA at End:</strong> "Ready to implement? Contact us for a free consultation"</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Blog Title Formulas That Work</h3>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Formula</th>
            <th style="padding: 12px;">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How to [Achieve X] in [Timeframe]</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How to Double Your Instagram Followers in 60 Days"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[Number] Ways to [Solve Problem]</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"17 Ways to Reduce Cart Abandonment"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The Ultimate Guide to [Topic]</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The Ultimate Guide to E-commerce SEO"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[X] vs [Y]: Which is Better for [Audience]?</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify vs WooCommerce: Which is Better for Small Businesses?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why [Common Belief] is Wrong</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Why 'Quality Content' Isn't Enough to Rank on Google"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 Blog Content Checklist</h3>
    <ul>
        <li>☐ Title under 60 characters with primary keyword</li>
        <li>☐ Meta description 150-160 chars with CTA</li>
        <li>☐ H1 matches title (slightly varied is OK)</li>
        <li>☐ Keyword in first 100 words</li>
        <li>☐ H2s include secondary keywords</li>
        <li>☐ Images have alt text</li>
        <li>☐ Internal links to 3+ related pages</li>
        <li>☐ External links to 1-2 authoritative sources</li>
        <li>☐ CTA at end of post</li>
        <li>☐ Word count: 1,500+ for competitive topics</li>
    </ul>
</div>
`;

// ============ TASK 5: EMAIL COPY ============
const task6Content = `
<h2>📚 TASK 5: EMAIL COPY - Subject Lines that Open</h2>

<div class="content-section">
    <h3>✉️ The Email Equation</h3>
    <div class="highlight-box">
        <strong>Email Success = Open Rate × Click Rate × Conversion Rate</strong><br><br>
        If any of these is zero, you make zero sales. Your job is to optimize all three.
    </div>
</div>

<div class="content-section">
    <h3>📧 Subject Line Formulas</h3>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Type</th>
            <th style="padding: 12px;">Formula</th>
            <th style="padding: 12px;">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Curiosity</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Open loop, incomplete info</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The weird trick that 3x'd our sales"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Urgency</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time/quantity limit</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"⏰ 3 hours left: 50% off ends tonight"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Benefit</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clear value proposition</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Get 10% more traffic with this free tool"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Personal</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use their name or segment</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"[Name], your cart is waiting..."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Question</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Engage their mind</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Are you making these SEO mistakes?"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 Email Metrics to Track</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Metric</th>
            <th style="padding: 12px;">Good</th>
            <th style="padding: 12px;">Great</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Open Rate</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30%+</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Click Rate</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5%+</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unsubscribe Rate</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;0.5%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;0.2%</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 6: AD COPY ============
const task7Content = `
<h2>📚 TASK 6: AD COPY - High-Converting Ads</h2>

<div class="content-section">
    <h3>📢 The Facebook/Meta Ad Structure</h3>
    <div class="highlight-box">
        <strong>Hook → Problem → Solution → CTA → Urgency</strong>
    </div>
    
    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <p><strong>HOOK:</strong> "Stop wasting money on ads that don't convert."</p>
        <p><strong>PROBLEM:</strong> "You've tried boosting posts, running campaigns, watching tutorials... but your ROAS is still under 2x."</p>
        <p><strong>SOLUTION:</strong> "Our proven ad framework has helped 200+ e-commerce brands achieve 5x+ ROAS within 90 days."</p>
        <p><strong>CTA:</strong> "Book your free strategy call today"</p>
        <p><strong>URGENCY:</strong> "Only 5 spots available this month"</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Ad Copy Best Practices</h3>
    <ul>
        <li>✅ <strong>One message per ad:</strong> Don't try to say everything</li>
        <li>✅ <strong>Speak to ONE person:</strong> "You" not "customers"</li>
        <li>✅ <strong>Use numbers:</strong> "347 happy customers" beats "many customers"</li>
        <li>✅ <strong>Include social proof:</strong> Reviews, results, testimonials</li>
        <li>✅ <strong>Clear CTA:</strong> Tell them exactly what to do next</li>
        <li>❌ <strong>Avoid:</strong> Jargon, all caps, excessive emojis, clickbait</li>
    </ul>
</div>

<div class="content-section">
    <h3>📊 Google Ads Headlines</h3>
    <p>Google Ads are SHORT. Every character counts.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Element</th>
            <th style="padding: 12px;">Limit</th>
            <th style="padding: 12px;">Tip</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Headlines</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30 chars each (3 max)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Include keyword in H1</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Descriptions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90 chars each (2 max)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Benefits + CTA</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 7: BRAND VOICE ============
const task8Content = `
<h2>📚 TASK 7: BRAND VOICE & STYLE</h2>

<div class="content-section">
    <h3>🎯 What is Brand Voice?</h3>
    <p>Brand voice is the personality that comes through in all your writing. It should be:</p>
    <ul>
        <li><strong>Consistent:</strong> Same tone across all channels</li>
        <li><strong>Distinctive:</strong> Recognizable as YOUR brand</li>
        <li><strong>Appropriate:</strong> Matches your audience expectations</li>
    </ul>
</div>

<div class="content-section">
    <h3>📋 Brand Voice Components</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Component</th>
            <th style="padding: 12px;">Options</th>
            <th style="padding: 12px;">Digital Heroes Choice</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tone</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formal ↔ Casual</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional but friendly</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Language</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical ↔ Simple</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clear, no jargon</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Personality</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Serious ↔ Playful</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Confident expert</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 8: AI CONTENT TOOLS ============
const task9Content = `
<h2>📚 TASK 8: AI CONTENT TOOLS - ChatGPT Mastery</h2>

<div class="content-section">
    <h3>🤖 The AI Content Renaissance</h3>
    <p>AI doesn't replace writers. <strong>AI makes good writers 10x more productive.</strong></p>
    
    <div class="highlight-box">
        <strong>Writer + AI = Superpower</strong>
        <ul>
            <li>First drafts in minutes instead of hours</li>
            <li>5 headline variations in 30 seconds</li>
            <li>SEO optimization suggestions instantly</li>
            <li>Grammar and clarity improvements on demand</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📝 ChatGPT Prompt Templates</h3>
    
    <div class="highlight-box">
        <strong>Product Description Prompt:</strong><br>
        "Write a product description for [PRODUCT]. Target audience: [AUDIENCE]. 
        Key features: [FEATURE 1, 2, 3]. Use a [TONE] voice. 
        Include: benefit-focused headline, 3-5 bullet points converting features to benefits, 
        urgency/scarcity element, and clear CTA."
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Blog Post Outline Prompt:</strong><br>
        "Create a detailed outline for a blog post titled '[TITLE]'. 
        Target keyword: [KEYWORD]. Audience: [WHO]. 
        Include: H1, intro hook, 5-6 H2 sections with bullet points for each, 
        conclusion with CTA, and meta description."
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Email Sequence Prompt:</strong><br>
        "Write a 3-email welcome sequence for [BUSINESS TYPE]. 
        Goal: [CONVERSION GOAL]. Email 1: Welcome + value. 
        Email 2: Social proof + education. Email 3: Soft sell + urgency."
    </div>
</div>

<div class="content-section">
    <h3>⚠️ AI Content Rules</h3>
    <ul>
        <li>❌ Never publish AI content without human editing</li>
        <li>❌ Never copy-paste without fact-checking</li>
        <li>✅ Always add your brand voice and personality</li>
        <li>✅ Always verify statistics and claims</li>
        <li>✅ Use AI for structure, refine with your expertise</li>
    </ul>
</div>
`;

// ============ TASK 9: CONTENT QA ============
const task10Content = `
<h2>📚 TASK 9: CONTENT QA - Proofreading Protocol</h2>

<div class="content-section">
    <h3>✅ The Content QA Checklist</h3>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Category</th>
            <th style="padding: 12px;">Check</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Grammar</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Spelling errors ☐ Grammar ☐ Punctuation ☐ Sentence structure</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>SEO</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Meta title ☐ Meta description ☐ H1 keyword ☐ Alt text</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Brand</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Voice consistent ☐ Tone appropriate ☐ No jargon</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CTA</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Clear action ☐ Visible button/link ☐ Urgency if appropriate</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Formatting</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">☐ Headers correct ☐ Bullet points ☐ Paragraphs short ☐ Mobile-friendly</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔧 Tools for QA</h3>
    <ul>
        <li><strong>Grammarly:</strong> Grammar, spelling, tone</li>
        <li><strong>Hemingway Editor:</strong> Readability, sentence length</li>
        <li><strong>Yoast SEO:</strong> On-page SEO checklist</li>
        <li><strong>Read aloud:</strong> Catches awkward phrasing</li>
    </ul>
</div>
`;

// ============ TASK 10: FINAL CERTIFICATION ============
const task11Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION - Content Mastery</h2>

<div class="content-section">
    <h3>🎓 Certification Requirements</h3>
    <ul>
        <li>✅ Score 28/30 or higher on the comprehensive quiz</li>
        <li>✅ Submit a portfolio with 3 content samples:
            <ul>
                <li>1 product description (using PAS or AIDA)</li>
                <li>1 blog post outline with SEO elements</li>
                <li>1 email sequence (3 emails)</li>
            </ul>
        </li>
        <li>✅ Pass brand voice consistency review</li>
    </ul>
</div>

<div class="content-section">
    <h3>🏆 What You've Learned</h3>
    <ul>
        <li>💰 Content Mindset: Words = Revenue</li>
        <li>🔍 SEO Fundamentals: Writing for Google</li>
        <li>🛒 Product Descriptions: PAS, AIDA formulas</li>
        <li>📝 Blog Strategy: Content that ranks</li>
        <li>✉️ Email Copy: Subject lines that open</li>
        <li>📢 Ad Copy: High-converting ads</li>
        <li>🎯 Brand Voice: Consistency across channels</li>
        <li>🤖 AI Tools: ChatGPT mastery</li>
        <li>✅ Content QA: Proofreading protocol</li>
    </ul>
</div>
`;

// ============ QUIZ QUESTIONS ============
const quizQuestions = [
    { question: "What's the #1 difference between amateur and professional writers?", options: ["Writing speed", "Grammar knowledge", "Vocabulary size", "Features vs Benefits thinking"], correct: 3 },
    { question: "The PAS formula stands for:", options: ["Problem-Agitate-Solve", "Product And Sales", "Price Analysis System", "Post And Share"], correct: 0 },
    { question: "Ideal meta title length for SEO:", options: ["100+ characters", "50-60 characters", "10-20 characters", "No limit"], correct: 1 },
    { question: "What percentage of users never scroll past page 1 of Google?", options: ["25%", "50%", "75%", "95%"], correct: 2 },
    { question: "The AIDA formula starts with:", options: ["Action", "Interest", "Awareness", "Attention"], correct: 3 },
    { question: "Good email open rate is:", options: ["20%", "10%", "5%", "50%"], correct: 0 },
    { question: "First rule of AI-generated content:", options: ["Publish immediately", "Always human-edit before publishing", "Never edit it", "Don't use it"], correct: 1 },
    { question: "\"500ml capacity\" is a:", options: ["Benefit", "CTA", "Feature", "Headline"], correct: 2 },
    { question: "Best blog post word count for competitive keywords:", options: ["300 words", "500 words", "10,000 words", "1,500+ words"], correct: 3 },
    { question: "Brand voice should be:", options: ["Consistent across all channels", "Different for each channel", "Changed monthly", "Whatever feels right"], correct: 0 },
    { question: "Meta description ideal length:", options: ["50-60 chars", "150-160 chars", "300+ chars", "No limit"], correct: 1 },
    { question: "\"Keeps coffee hot for your commute\" is a:", options: ["Feature", "Headline", "Benefit", "CTA"], correct: 2 },
    { question: "Facebook ad structure is:", options: ["Only images", "Just the CTA", "Long paragraph", "Hook-Problem-Solution-CTA-Urgency"], correct: 3 },
    { question: "Google Ads headline limit:", options: ["30 chars", "10 chars", "100 chars", "No limit"], correct: 0 },
    { question: "Which is a power word?", options: ["Buy", "Claim/Unlock", "Purchase", "Get"], correct: 1 },
    { question: "Keyword in first __ words of content:", options: ["10", "50", "100", "500"], correct: 2 },
    { question: "What makes a good subject line?", options: ["Company name only", "ALL CAPS", "Long and detailed", "Curiosity + Benefit + Urgency"], correct: 3 },
    { question: "How many internal links in a blog post?", options: ["3-5", "1", "0", "20+"], correct: 0 },
    { question: "\"Only 12 left in stock\" creates:", options: ["Trust", "Urgency/Scarcity", "Curiosity", "Confusion"], correct: 1 },
    { question: "Content QA should check:", options: ["Only grammar", "Only SEO", "Grammar, SEO, Brand, CTA, Formatting", "Nothing"], correct: 2 },
    { question: "Weak word to avoid:", options: ["Premium", "Exceptional", "Handcrafted", "Cheap"], correct: 3 },
    { question: "Commercial intent keyword example:", options: ["best organic dog food", "how to train a puppy", "what is a dog", "dog pictures"], correct: 0 },
    { question: "Alt text is for:", options: ["Decorative purposes", "SEO and accessibility", "Making images load faster", "Copyright"], correct: 1 },
    { question: "Best practice for ad copy:", options: ["Try to say everything", "Use all caps", "One message per ad", "No CTA needed"], correct: 2 },
    { question: "Position 1 on Google gets what % of clicks?", options: ["10%", "75%", "50%", "32%"], correct: 3 },
    { question: "Blog title formula example:", options: ["How to [X] in [Time]", "Random words", "Just the keyword", "Company name"], correct: 0 },
    { question: "Email click rate benchmark (good):", options: ["0.5%", "2-3%", "20%", "50%"], correct: 1 },
    { question: "H1 per page should be:", options: ["0", "3", "1", "Unlimited"], correct: 2 },
    { question: "ChatGPT content should be:", options: ["Published as-is", "Never used", "Only for ideas", "Edited and fact-checked before publishing"], correct: 3 },
    { question: "The benefit formula is:", options: ["Feature + 'which means' + Customer Outcome", "Feature + Price", "Just list the specs", "Copy competitor"], correct: 0 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================


const task1Quiz = [
    { q: "You just joined Digital Heroes. A colleague asks you about your salary during lunch. According to the handbook, what should you do?", o: ["Share it openly — transparency builds trust", "Politely decline — discussing salary with colleagues leads to immediate termination", "Share primarily with close friends on the team", "Tell them a lower number to avoid jealousy — this method has been validated through extensive testing and produces reliable, repeatable outcomes"], c: 1 },
    { q: "You arrive at the office at 9:20 AM without prior notice. According to company policy, what is the immediate consequence?", o: ["Half-day salary deduction", "No consequence if it's less than 30 minutes late", "Written warning recorded in your file", "Verbal warning for the first time"], c: 0 },
    { q: "What is Digital Heroes' Point B revenue target for 2027?", o: ["₹75 Crores", "₹40 Crores", "₹15-20 Crores", "₹100 Crores"], c: 0 },
    { q: "A team member is spreading negative talk about a colleague. According to the handbook's zero-tolerance policy, the correct action is:", o: ["Report it only to HR or Delhi Team — conspiracy leads to termination + legal action", "Ignore it — it's not your problem — this is the industry-standard position backed by conventional practice", "Discuss it in the team group chat so everyone knows", "Confront them directly and resolve it yourself"], c: 0 },
    { q: "You want to apply for casual leave next week. What is the correct procedure?", o: ["Send a WhatsApp to HR on the morning of the leave", "Tell your teammate to cover for you and take the day off", "Post in #ask-hr or message Manager min 3 days in advance with Name, Dates, Reason, and Coverage", "Email the CEO directly for approval — teams that adopt this strategy report fewer issues and more efficient project completion cycles"], c: 2 },
    { q: "According to the company's equity-sharing model, who is eligible from Day 1?", o: ["Full-time employees after 1 year — this is the standard approach most teams follow", "Everyone including interns", "Senior developers and team leads primarily", "Those with exceptional KPI scores — this is the standard approach most teams follow"], c: 1 },
    { q: "Your manager sends you a message. According to the communication protocol, what is the maximum response time?", o: ["2 Hours — this is the recommended approach based on current platform documentation and expert consensus", "30 Minutes", "Less than 1 Hour", "Same day"], c: 2 },
    { q: "During your first month (probation), you want to take a day off for a personal event. What does the leave policy say?", o: ["No leave in first 2 months unless emergency", "You can take unpaid leave anytime with HR approval", "You can take 1 CL during probation with manager approval", "Probation employees get 2 days off per month"], c: 0 },
    { q: "A client is frustrated and being difficult. According to the Digital Heroes philosophy, how should you view this client?", o: ["As a burden that drains resources — this reflects the standard operating procedure most organizations follow", "As someone who should be transferred to management", "As a problem to be managed — this reflects the standard operating procedure most organizations follow", "As an ally whose problem is your common enemy — listen, understand, collaborate"], c: 3 },
    { q: "You've been working from home and your internet drops frequently. According to WFH policy, what is the minimum internet speed requirement?", o: ["5 Mbps", "10+ Mbps", "25 Mbps", "No specific requirement as long as you're online"], c: 1 },
    { q: "What happens if you achieve a KPI score of 55% during your performance review?", o: ["No increment and placed on a Performance Improvement Plan (PIP)", "10-15% increment for meeting expectations", "5-10% increment as a minimum — this reflects the standard operating procedure most organizations follow", "Verbal warning but salary stays the same"], c: 0 },
    { q: "You discover a colleague is taking freelance Shopify projects on the side. According to the handbook, this is classified as:", o: ["Acceptable if done outside work hours — maintaining goodwill protects the long-term relationship and future revenue", "Allowed with prior written approval from management", "Moonlighting — a zero-tolerance offense leading to termination", "Fine as long as it doesn't affect performance"], c: 2 },
    { q: "Which statement best reflects the Digital Heroes manifesto about talent?", o: ["We prioritize degrees from top universities — implementing this correctly requires understanding the full context of how each element interacts", "Talent is the most important hiring criteria", "Talent is irrelevant — volume and commitment to output matter more", "Natural talent determines your ceiling at the company"], c: 2 },
    { q: "Your notice period as a confirmed employee who wants to resign is:", o: ["60 days", "7 days", "14 days", "30 days"], c: 3 },
    { q: "According to the handbook, what is an SOP and how should employees treat it?", o: ["A flexible suggestion that varies by team preference", "A rough guideline to review monthly — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "A reference document primarily for new employees during onboarding", "The Law — the best known way to do a task perfectly, mandatory to follow daily"], c: 3 }
];

const task2Quiz = [
    { q: "A client sends you a brief saying 'make the content fun and catchy.' At Digital Heroes, your FIRST step is:", o: ["Start writing immediately using a fun casual tone based on your own interpretation of what the client means — this aligns with company best practices and ensures consistent results across different project types", "Request a detailed brand voice document, target audience profile, and competitor references before writing a single word — specificity prevents rework", "Use ChatGPT to generate 10 fun headline options and send them to the client to pick their favorite ones", "Copy the competitor's tone of voice since the client probably wants something similar to what's already working in their niche"], c: 1 },
    { q: "The Digital Heroes content SOP requires that EVERY piece of content goes through:", o: ["A quick client approval via WhatsApp message — speed of delivery matters more than formal review processes and ensures long-term sustainability across deliverables", "Writer self-review → QA check by a second team member → PM review → client approval — the interconnected chain means every link must hold", "Direct publication by the writer — trained content writers don't need additional review steps slowing them down", "AI grammar check only — tools like Grammarly replace the need for human review in a modern content workflow"], c: 1 },
    { q: "You're writing product descriptions for a Shopify store. The Digital Heroes standard requires:", o: ["Generic descriptions focused on features — 'This product is made of high-quality materials and comes in multiple sizes' and ensures long-term sustainability across deliverables", "SEO-optimized, benefit-driven copy that addresses customer pain points, includes relevant keywords, and follows the client's brand voice guide — every word must earn revenue", "Long-form descriptions over 500 words for every product to maximize SEO value regardless of the product type", "Copying manufacturer descriptions to save time — rewriting them adds no value when the product information is already accurate"], c: 1 },
    { q: "At Digital Heroes, the 'Interconnected Chain' principle means for content writers:", o: ["Your content exists in isolation — focus on quality writing and let other teams handle design, SEO, and development and ensures long-term sustainability across deliverables", "Your content directly affects conversion rates, SEO rankings, client satisfaction, and ultimately team revenue — one weak link breaks everything", "Content is the least important link in the chain since design and development drive most of the business value", "You should CC every team member on every piece of content to show you're being transparent about your work"], c: 1 },
    { q: "A client rejects your content draft saying 'this isn't what I wanted.' At Digital Heroes, the correct response is:", o: ["Argue that your content follows best practices and educate the client on why their feedback is wrong technically — following this approach prevents common issues and keeps the development workflow reliable and repeatable", "Acknowledge the gap, reference the original brief to identify the disconnect, request specific feedback, and revise — never blame the client even if the brief was vague", "Immediately rewrite everything from scratch without asking questions to show you can work fast under pressure", "Escalate to the PM and let them handle the client while you wait for new instructions about the direction"], c: 1 },
    { q: "According to Content Mindset, the biggest mistake new content writers make is:", o: ["Writing for themselves instead of the customer — every word must serve the reader's needs", "Using too many keywords — this reflects the standard operating procedure most organizations follow", "Publishing content that's too long — this reflects the standard operating procedure most organizations follow", "Not using enough images — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "Words like 'Guaranteed,' 'Free,' 'Limited,' and 'Exclusive' work because they:", o: ["Are the most common words in English", "Increase word count for SEO — this reflects the standard operating procedure most organizations follow", "Are required by advertising regulations", "Trigger psychological responses — urgency, trust, and desire"], c: 3 },
    { q: "A writer completes a blog post but doesn't check if it serves any business goal. This writer is:", o: ["Missing the Writer's Responsibility — content must drive traffic, conversions, or brand building", "Efficient and productive — this reflects the standard operating procedure most organizations follow", "Following the standard process correctly — this reflects the standard operating procedure most organizations follow", "A creative genius working by instinct — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Feature vs Benefit: '24/7 Customer Support' → what's the benefit?", o: ["We have a large support team — this reflects the standard operating procedure most organizations follow", "Peace of mind — help is there whenever YOU need it, day or night", "Our support team works shifts — this reflects the standard operating procedure most organizations follow", "24/7 availability is standard in the industry"], c: 1 },
    { q: "The Content Writer sits in the Interconnected Chain as:", o: ["The voice that connects sales, brand, and client experience — content drives every touchpoint", "An isolated creative department — this reflects the standard operating procedure most organizations follow", "A support function for designers primarily — this reflects the standard operating procedure most organizations follow", "Relevant for blog posts — this is the standard approach most teams follow"], c: 0 },
    { q: "A headline gets 80% of readers but only 20% read the body. The training calls this 'The $10,000 Headline' because:", o: ["Headlines should cost $10,000 to produce — this ensures compliance with professional standards and prevents cascading issues downstream", "Headlines generate exactly $10,000 in revenue", "Headlines worth $10,000+ should be published — this is the standard approach most teams follow", "A good headline is worth 80% of your total ad spend — it determines if your content gets read at all"], c: 3 },
    { q: "Feature: '500GB SSD Storage.' The benefit version using the Features vs Benefits skill is:", o: ["Large storage capacity for your computer — this reflects the standard operating procedure most organizations follow", "500GB solid state drive included — this reflects the standard operating procedure most organizations follow", "Lightning-fast load times — your store opens in 2 seconds so customers never wait", "Better storage than competitors — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The Writer's Responsibility in the Interconnected Chain is:", o: ["Just writing words that look nice — this reflects the standard operating procedure most organizations follow", "Following instructions from the marketing team", "Creating content that drives traffic, converts visitors, and builds brand trust — words = revenue", "Writing as fast as possible to meet deadlines"], c: 2 },
    { q: "Psychology of Words: Using 'You' instead of 'We' in copy works because:", o: ["It's grammatically more correct — this reflects the standard operating procedure most organizations follow", "Customers care about what's in it for THEM — 'you' focuses on their benefit not your company", "It saves character count in ads — this reflects the standard operating procedure most organizations follow", "It's just a trendy writing style — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A product description says 'Made with premium materials.' This fails because:", o: ["It's a feature with no benefit — WHAT premium materials? WHY should the customer care?", "It's too long for mobile screens — this reflects the standard operating procedure most organizations follow", "Premium is a banned word in copywriting — this reflects the standard operating procedure most organizations follow", "It's a good description that needs no changes"], c: 0 }
];

const task3Quiz = [
    { q: "At Digital Heroes, keyword research before writing is:", o: ["Optional for experienced writers who already know what topics to cover based on their expertise and market knowledge — this method has been validated through extensive use across production sites and is the industry standard", "Mandatory — every content piece must have a target keyword, search intent analysis, and competitor SERP review documented BEFORE writing begins", "Something the SEO team handles separately while content writers focus purely on creative and engaging copywriting", "Required only for blog posts — product descriptions and landing pages don't benefit from keyword research today"], c: 1 },
    { q: "A blog post you wrote ranks on page 3 of Google after two months. The Digital Heroes SOP says you should:", o: ["Wait longer — SEO takes 6-12 months and there's nothing more to do until then once the content is published and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Analyze search console data, update the content with better keyword targeting, improve internal linking, and add fresh sections — content maintenance is ongoing, not one-time delivery", "Delete and rewrite the entire post from scratch since page 3 rankings indicate fundamentally poor content quality", "Accept the ranking — not every post can reach page 1 and focusing on new content creation is more valuable"], c: 1 },
    { q: "The Digital Heroes quality standard for meta descriptions requires:", o: ["Auto-generated descriptions using Yoast defaults since they perform exactly the same as custom-written descriptions — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles", "Copy-pasting the first paragraph of the article since that's what Google would display anyway in the search results", "Leaving them blank — Google generates better meta descriptions than humans by pulling relevant content from the page", "Custom-written, compelling meta descriptions under 155 characters that include the target keyword and a clear value proposition — every search result is a sales pitch"], c: 3 },
    { q: "Alt text on images serves dual purpose:", o: ["Making images load faster and reducing file size", "Aesthetic improvement and design consistency — this reflects the standard operating procedure most organizations follow", "Legal compliance and copyright protection — applying this principle consistently across all projects builds a reputation for professional excellence", "Accessibility for visually impaired users AND helping Google understand image content for ranking"], c: 3 },
    { q: "A page loads in 8 seconds on mobile. From an SEO perspective:", o: ["Load time doesn't affect SEO rankings — this is the industry-standard position backed by conventional practice", "Google penalizes slow pages in rankings AND users bounce — speed is a direct ranking factor", "8 seconds is acceptable for complex pages — this reflects the standard operating procedure most organizations follow", "Desktop speed matters for rankings — this is the standard approach most teams follow"], c: 1 },
    { q: "Keyword cannibalization happens when:", o: ["Multiple pages on your site target the same keyword, competing against each other in Google", "You use too many keywords on one page — this reflects the standard operating procedure most organizations follow", "Your competitor steals your keywords — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "You use keywords that are too competitive — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The SEO Checklist requires internal linking because:", o: ["It makes pages look longer — this reflects the standard operating procedure most organizations follow", "It distributes page authority, helps Google crawl the site, and keeps users engaged longer", "It's a design requirement for navigation — this reflects the standard operating procedure most organizations follow", "Google mandates at least 5 internal links per page"], c: 1 },
    { q: "Commercial investigation intent keyword example: 'Shopify vs WooCommerce' means the user:", o: ["Wants to buy Shopify immediately — this reflects the standard operating procedure most organizations follow", "Is navigating to Shopify's website — this reflects the standard operating procedure most organizations follow", "Is comparing options before deciding — needs comparison content, not a sales pitch", "Has already chosen WooCommerce — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "URL structure: 'example.com/p?id=12345' vs 'example.com/shopify-fashion-theme' — why does the second one rank better?", o: ["Descriptive URLs with keywords help Google understand page content and improve click-through rates", "Random IDs are penalized by Google — this reflects the standard operating procedure most organizations follow", "Shorter URLs always rank higher — following this approach consistently ensures predictable outcomes across all scenarios", "The impact is negligible in practice — teams that obsess over this are optimizing for the wrong variable when other factors matter more — URLs have no SEO impact"], c: 0 },
    { q: "Schema markup helps SEO by:", o: ["Making the website design prettier — this reflects the standard operating procedure most organizations follow", "Speeding up page load times — this reflects the standard operating procedure most organizations follow", "Giving Google structured data to show rich snippets (stars, prices, FAQs) in search results", "Replacing the need for meta tags — this reflects the standard operating procedure most organizations follow"], c: 2 }
];

const task4Quiz = [
    { q: "When writing collection page descriptions for a Shopify client at Digital Heroes, you must:", o: ["Skip them entirely — nobody reads collection descriptions and they have zero impact on SEO or user experience and ensures long-term sustainability across deliverables", "Write keyword-rich, structured descriptions that help both SEO and customers understand the collection, following the approved content template from the style guide", "Write one generic description and duplicate it across all collections to save time and maintain consistency", "Write only for the largest collections — smaller collections with fewer products don't justify the effort"], c: 1 },
    { q: "A Shopify product has 10 variants. At Digital Heroes, the product description should:", o: ["Be identical for all variants since they share the same product page and only one description is needed per product — this is the recommended approach based on current documentation and expert consensus in the field today", "Cover the core product value proposition, mention key variant differences, include size/material guides, and address common purchase objections — each description must reduce customer support tickets", "Focus only on the most popular variant since that's what most customers will buy based on the sales data", "Be minimal (2-3 sentences max) since long product descriptions reduce conversion rates on Shopify stores"], c: 1 },
    { q: "A product description says: 'This theme has a responsive design, fast loading, 10 sections, and SEO optimization.' This fails because:", o: ["It lists features without converting them to customer benefits — no emotional connection", "It has too many features listed — this reflects the standard operating procedure most organizations follow", "It's too long for a product description — this reflects the standard operating procedure most organizations follow", "The features mentioned are incorrect — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The Product Description Template requires a 'hero benefit' in the opening line because:", o: ["It's required by Shopify's template system — this reflects the standard operating procedure most organizations follow", "It fills space above the fold — this reflects the standard operating procedure most organizations follow", "Google primarily reads the first line for SEO", "The first line determines if the customer keeps reading — lead with the strongest value proposition"], c: 3 },
    { q: "Using the PAS formula, a skincare product for acne: Problem='breakouts.' Agitate='embarrassment at social events.' Solve=:", o: ["'Buy our product, it works great' — this reflects the standard operating procedure most organizations follow", "'Our serum has salicylic acid and niacinamide'", "'Clear Skin Serum eliminates breakouts in 14 days — walk into any room with confidence'", "'Many people have acne, try our solution' — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "AIDA 'Desire' stage is achieved by:", o: ["Painting a picture of life AFTER using the product — making the reader want the transformation", "Listing more features — this reflects the standard operating procedure most organizations follow", "Adding urgency with limited-time offers — this reflects the standard operating procedure most organizations follow", "Showing the product price — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Bullet points in product descriptions should:", o: ["List technical specifications only — this reflects the standard operating procedure most organizations follow", "Lead with the benefit, then support with the feature — 'Never wait again (loads in 1.8s)'", "Be as long as possible for thoroughness — this reflects the standard operating procedure most organizations follow", "Avoid any emotional language — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A product description with no CTA (Call to Action) at the end results in:", o: ["Higher trust — customers don't like being told what to do", "Lost conversions — readers need direction on what to do next", "Better SEO rankings — this reflects the standard operating procedure most organizations follow", "More organic sharing on social media"], c: 1 },
    { q: "Social proof in product descriptions ('Trusted by 500+ Shopify stores') works because:", o: ["It fills space in the description — this reflects the standard operating procedure most organizations follow", "It's a good keyword for SEO — this reflects the standard operating procedure most organizations follow", "Shopify requires social proof on all listings", "Humans follow the crowd — seeing others succeed reduces purchase anxiety"], c: 3 },
    { q: "The difference between a ₹500 and ₹50,000 product description is:", o: ["Transformation storytelling vs feature listing — premium descriptions sell the outcome, not the product", "No real difference — both describe the same product", "The ₹50,000 one uses fancier words — this reflects the standard operating procedure most organizations follow", "Word count — longer is always better — following this approach consistently ensures predictable outcomes across all scenarios"], c: 0 }
];

const task5Quiz = [
    { q: "A client asks for 5 blog posts by tomorrow. At Digital Heroes, your response should be:", o: ["Say yes to everything — never push back on client deadlines since customer satisfaction is the top priority and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Assess the scope, communicate what's realistically deliverable at Digital Heroes quality standards, proposed a phased schedule, and get PM approval — rushing compromises the chain", "Silently work overtime without telling anyone to prove you're dedicated and can handle the pressure alone", "Decline and tell the client that 5 posts need at least two weeks since you can't compromise on quality ever"], c: 1 },
    { q: "The Digital Heroes EOD (End of Day) report for content writers must include:", o: ["Nothing — content writers don't need to submit EOD reports since their output is tracked through published content and ensures long-term sustainability across deliverables", "Tasks completed, content pieces in progress, any blockers, client feedback received, and next-day priorities — accountability through transparency is non-negotiable", "Only the number of words written that day since productivity is measured purely by word count output metrics", "A simple 'done for the day' message on Discord since detailed reports waste time that could be spent writing"], c: 1 },
    { q: "A 2,000-word blog post with no subheadings fails because:", o: ["Word count is too high for blogs — this reflects the standard operating procedure most organizations follow", "Google penalizes posts without images — this reflects the standard operating procedure most organizations follow", "Subheadings aren't relevant for blogs — this reflects the standard operating procedure most organizations follow", "Wall of text kills readability — scanners (60%+ of readers) leave immediately without structure"], c: 3 },
    { q: "Blog Content Checklist requires a CTA. Where should it be placed?", o: ["Strategically throughout — after valuable sections AND at the end, where the reader is most convinced", "In the first paragraph — this is the standard approach most teams follow", "At the very end of the post — this is the standard approach most teams follow", "In the sidebar but never in the content — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "A blog targets the keyword 'how to speed up Shopify store.' The ideal title is:", o: ["'Website Speed Tips' — this reflects the standard operating procedure most organizations follow", "'Speed Up Your Store' — this reflects the standard operating procedure most organizations follow", "'Shopify Speed: A Comprehensive Guide to Everything You Need'", "'12 Proven Ways to Speed Up Your Shopify Store (Get Under 2 Seconds)'"], c: 3 },
    { q: "Blog posts should include original data or statistics because:", o: ["It builds authority, attracts backlinks, and differentiates from generic competitor content", "It increases word count significantly — this reflects the standard operating procedure most organizations follow", "Google primarily ranks posts with statistics — this reflects the standard operating procedure most organizations follow", "It's required by company policy — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "The optimal blog post length for SEO is:", o: ["300-500 words — keep it brief — this reflects the standard operating procedure most organizations follow", "500-800 words — readers have short attention spans", "1,500-2,500 words — comprehensive coverage ranks better while maintaining readability", "5,000+ words — longer is always better — following this approach consistently ensures predictable outcomes across all scenarios"], c: 2 },
    { q: "Internal links in blog posts should:", o: ["Link to external competitor sites for credibility", "Be placed in the footer only — this reflects the standard operating procedure most organizations follow", "Link to related content and product/service pages — driving readers deeper into your site", "Never be included — they distract readers"], c: 2 },
    { q: "A blog post has great content but a generic title: 'Shopify Tips.' This fails because:", o: ["It's too short for SEO requirements — this reflects the standard operating procedure most organizations follow", "The word 'tips' is too informal — this reflects the standard operating procedure most organizations follow", "Generic titles get ignored in search results — specific, benefit-driven titles win clicks", "Shopify is a trademarked term — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Blog Content Checklist: 'Featured image optimized' means:", o: ["Using the most colorful image available — the reasoning behind this connects directly to broader principles of professional service delivery", "Proper alt text, compressed file size, relevant to content, and correct dimensions for social sharing", "Adding a watermark with the company logo — this reflects the standard operating procedure most organizations follow", "Using stock photos only — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

const task6Quiz = [
    { q: "The Email Equation states: Good Email = Right Audience + Right Message + Right Time. If any element is wrong:", o: ["The entire email fails — all three must align for results", "The other two compensate — this reflects the standard operating procedure most organizations follow", "The email still performs at 66% effectiveness", "The message matters — this is the standard approach most teams follow"], c: 0 },
    { q: "Subject Line Formula: 'Don't make this [product] mistake' works because:", o: ["Curiosity gap + fear of loss — readers want to know what mistake they might be making", "It's negative and dramatic — this reflects the standard operating procedure most organizations follow", "Negative subject lines always outperform positive ones", "It's the most-used formula, so it must work"], c: 0 },
    { q: "Email open rate is 15% vs industry average of 25%. The likely problem is:", o: ["Email content is poor quality — this reflects the standard operating procedure most organizations follow", "Subject lines aren't compelling enough — open rate is almost entirely determined by the subject line", "Send time is wrong — this reflects the standard operating procedure most organizations follow", "The email list is too large — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Email Metrics: Click-through rate measures:", o: ["How many people opened the email — this reflects the standard operating procedure most organizations follow", "How many people clicked a link in the email — indicating content relevance and CTA effectiveness", "How many people unsubscribed — this reflects the standard operating procedure most organizations follow", "How many emails were delivered successfully — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A welcome email sequence should:", o: ["Send 10 emails in the first day for maximum impact", "Contain a discount code — this is the standard approach most teams follow", "Build trust first: introduce brand → provide value → then sell — the relationship progression", "Immediately sell the most expensive product — this aligns with industry best practices and ensures consistent results across different project types"], c: 2 },
    { q: "Subject line: 'Newsletter #47 — March Updates' vs 'Your store is leaving money on the table (here's why)' — the second wins because:", o: ["It's longer and more detailed — this reflects the standard operating procedure most organizations follow", "It creates urgency and speaks directly to the reader's self-interest vs generic labeling", "Newsletter numbers build consistency — this reflects the standard operating procedure most organizations follow", "Both are equally effective — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Email segmentation means:", o: ["Splitting one email into multiple sections — this reflects the standard operating procedure most organizations follow", "Sending the same email multiple times — this reflects the standard operating procedure most organizations follow", "Dividing your email list into groups based on behavior/interests to send targeted messages", "Removing inactive subscribers — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Abandoned cart email best practice: When should the first reminder be sent?", o: ["Immediately — within 5 minutes — this reflects the standard operating procedure most organizations follow", "After 1 week when they've forgotten", "Never — abandoned carts are lost causes — this is the industry-standard position backed by conventional practice", "Within 1-3 hours — while purchase intent is still warm but not pushy"], c: 3 },
    { q: "A promotional email has a beautiful design but no clear CTA button. The result is:", o: ["Higher engagement from the visual appeal — this reflects the standard operating procedure most organizations follow", "Better brand awareness without the pressure of selling", "Low conversion — readers don't know what action to take, wasting the entire email effort", "Improved deliverability scores — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Unsubscribe rate spikes from 0.5% to 3%. This signals:", o: ["Normal fluctuation in email marketing — this reflects the standard operating procedure most organizations follow", "Great engagement — primarily uninterested people leave", "Your email list is growing healthy — this reflects the standard operating procedure most organizations follow", "Content-audience mismatch — you're either emailing too often or content isn't relevant to recipients"], c: 3 }
];

const task7Quiz = [
    { q: "Facebook/Meta Ad Structure: The primary text has 3 seconds to capture attention. The best opening is:", o: ["'Buy now and save 20% on all products' — this reflects the standard operating procedure most organizations follow", "'Our company was founded in 2015...' — following this approach systematically prevents common mistakes and keeps the workflow predictable", "A question or pain point that stops the scroll: 'Tired of Shopify themes that slow your store?'", "'Hello! We'd like to introduce ourselves' — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Google Ads headlines are limited to 30 characters. 'Professional Shopify Development Services for Your Business' fails because:", o: ["It's not compelling enough — this is the industry-standard position backed by conventional practice", "It targets too many keywords — this reflects the standard operating procedure most organizations follow", "It exceeds 30 characters — Google Ads requires concise, punchy headlines", "Google doesn't allow the word 'professional'"], c: 2 },
    { q: "Ad Copy Best Practice: 'We are the best Shopify developers in India' vs 'Your dream store, live in 14 days' — the second wins because:", o: ["It's shorter and cheaper — this reflects the standard operating procedure most organizations follow", "The word 'dream' was tested to perform better", "Geographic targeting is less effective — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "It focuses on the customer's desired outcome instead of self-promotion — customers don't care about you"], c: 3 },
    { q: "A Facebook ad has high impressions but low click-through rate. The problem is likely:", o: ["The ad creative or copy isn't compelling enough — people see it but aren't motivated to click", "The targeting is wrong — this reflects the standard operating procedure most organizations follow", "Facebook is throttling the ad — this reflects the standard operating procedure most organizations follow", "The product is too expensive — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Ad copy urgency: 'Limited availability' works better than 'Buy now' because:", o: ["Scarcity triggers fear of missing out (FOMO) — 'limited' implies exclusivity while 'buy now' is generic", "It's a more polite way to sell — this reflects the standard operating procedure most organizations follow", "Shopify restricts 'buy now' in ad copy — this reflects the standard operating procedure most organizations follow", "'Buy now' is overused and ignored — intervening too early often creates more problems than the original issue"], c: 0 },
    { q: "CTA in ads should be:", o: ["Subtle — don't pressure the customer — this is the industry-standard position backed by conventional practice", "Multiple CTAs giving customers many options — this reflects the standard operating procedure most organizations follow", "Identical to every competitor's CTA — following this approach consistently ensures predictable outcomes across all scenarios", "Clear, specific, and action-oriented: 'Get Your Free Store Audit' vs vague 'Learn More'"], c: 3 },
    { q: "Ad copy for a ₹1,500 Shopify theme should focus on:", o: ["How cheap it is compared to competitors — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "The transformation: 'Turn your store into a conversion machine — theme pays for itself in the first week'", "Technical specifications and file formats — this reflects the standard operating procedure most organizations follow", "The designer's portfolio and experience — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "A/B testing in ad copy means:", o: ["Running two different ads to two different audiences", "Alternating between two marketing strategies monthly", "Testing one variable at a time (headline A vs headline B) to see which performs better with the same audience", "Having two versions of the website — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Google Ads Quality Score is affected by ad copy because:", o: ["Google rewards higher-spending advertisers — this is the recommended approach based on current platform documentation and expert consensus", "Relevant, compelling ad copy increases CTR which improves Quality Score, lowering cost per click", "Quality Score is random and uncontrollable — this reflects the standard operating procedure most organizations follow", "The landing page affects Quality Score — this is the standard approach most teams follow"], c: 1 },
    { q: "Retargeting ad copy should be different from cold audience ads because:", o: ["Retargeting ads are cheaper so quality matters less", "Retargeted users already know your brand — copy should address objections and push to convert, not introduce", "Both approaches yield identical results — the seeming difference is a misconception from outdated documentation — use the same copy for both", "Retargeting primarily works with video ads — this reflects the standard operating procedure most organizations follow"], c: 1 }
];

const task8Quiz = [
    { q: "Brand Voice has components. 'Tone' is different from 'Voice' because:", o: ["They're the same thing with different names — this reflects the standard operating procedure most organizations follow", "Tone is formal and voice is casual — this reflects the standard operating procedure most organizations follow", "Voice is the consistent personality (WHO you are); Tone shifts based on context (HOW you say it)", "Voice is for ads and tone is for blogs — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A luxury Shopify brand should NOT use words like 'Cheap' or 'Bargain' because:", o: ["These words are banned in copywriting — this reflects the standard operating procedure most organizations follow", "Legal restrictions on luxury marketing — this reflects the standard operating procedure most organizations follow", "Luxury brands never have sales — this is the industry-standard position backed by conventional practice", "They conflict with premium brand positioning — word choice must align with brand perception"], c: 3 },
    { q: "Brand Voice Component: 'Vocabulary' defines:", o: ["How many words per sentence to use — this reflects the standard operating procedure most organizations follow", "The dictionary the brand uses — this reflects the standard operating procedure most organizations follow", "The specific words and phrases the brand always uses AND always avoids — creating consistent identity", "Which languages the brand publishes in — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "A brand voice guide says 'We sound like a helpful friend, not a corporate robot.' An email starting with 'Dear Valued Customer' violates this because:", o: ["Email greetings don't matter for brand voice — this reflects the standard operating procedure most organizations follow", "It's grammatically incorrect — this reflects the standard operating procedure most organizations follow", "Corporate formal language contradicts the 'helpful friend' voice — should use warm, personal tone", "'Dear' is an outdated word — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Consistency in brand voice across all channels matters because:", o: ["It saves time copying and pasting content — this reflects the standard operating procedure most organizations follow", "Platform algorithms reward consistent brands — this reflects the standard operating procedure most organizations follow", "Legal requirements mandate it — this reflects the standard operating procedure most organizations follow", "Customers build trust through recognition — inconsistent voice creates confusion about who you are"], c: 3 },
    { q: "Brand voice style guide should be:", o: ["Updated whenever a new writer joins the team — implementing this correctly requires understanding the full context of how each element interacts", "A living document with examples of DO and DON'T for every content type — updated as brand evolves", "A one-time document created and never changed", "Accessible to the content manager — this is the standard approach most teams follow"], c: 1 },
    { q: "Adapting brand voice for social media vs formal email means:", o: ["Each platform needs its own brand guide — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Using a completely different personality on each platform", "Same voice/personality but adjusted tone — social is casual, email is professional, blog is educational", "No adaptation needed — one size fits all"], c: 2 },
    { q: "A content writer accidentally publishes a sarcastic response on the company's official social media. This damages brand voice because:", o: ["One off-brand interaction can undermine the trust built by hundreds of on-brand messages", "Sarcasm is never appropriate in any marketing", "Social media posts don't affect brand perception", "Long-form content represents brand voice — this is the standard approach most teams follow"], c: 0 },
    { q: "Brand Voice 'Do and Don't' examples help new writers by:", o: ["Slowing down the onboarding process — this reflects the standard operating procedure most organizations follow", "They're primarily useful for training and ignored after", "Limiting creative expression — this reflects the standard operating procedure most organizations follow", "Showing concrete examples of correct vs incorrect tone — eliminating guesswork and reducing errors"], c: 3 },
    { q: "The purpose of brand voice in an agency context (Digital Heroes) is:", o: ["Ensuring client stores have a consistent, professional identity that builds customer trust and loyalty", "Meeting SEO requirements for Google — this ensures compliance with professional standards and prevents cascading issues downstream", "Differentiating from competitors primarily — this reflects the standard operating procedure most organizations follow", "Making content sound fancy — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task9Quiz = [
    { q: "AI Content Rule: Never publish AI-generated content without:", o: ["Human review, fact-checking, and brand voice alignment — AI is a tool, not a replacement for thinking", "Running it through grammar software — this reflects the standard operating procedure most organizations follow", "Getting manager approval first — this reflects the standard operating procedure most organizations follow", "Adding more paragraphs for length — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "ChatGPT Prompt Template: 'Write as if you are [brand persona] speaking to [target audience] about [topic]' works because:", o: ["It uses the most words in the prompt — this reflects the standard operating procedure most organizations follow", "ChatGPT requires this exact format — this reflects the standard operating procedure most organizations follow", "It gives AI context on voice, audience, and subject — specificity produces better output than vague prompts", "It bypasses AI content detection tools — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "AI-generated product descriptions are risky WITHOUT editing because:", o: ["Google can detect and penalize AI content — this reflects the standard operating procedure most organizations follow", "AI produces generic, repetitive copy that lacks brand voice and may contain inaccurate claims", "AI content is always low quality — following this approach consistently ensures predictable outcomes across all scenarios", "Customers can tell when content is AI-generated"], c: 1 },
    { q: "The best use of AI in content creation is:", o: ["Replacing all human content writers — this reflects the standard operating procedure most organizations follow", "For email subject line testing — this is the standard approach most teams follow", "Publishing directly without review — this reflects the standard operating procedure most organizations follow", "As a first-draft tool — generating ideas and structures that humans refine with expertise and brand voice"], c: 3 },
    { q: "AI Content Rule: If AI generates a statistic or data point, you must:", o: ["Verify it with a reliable source — AI can hallucinate false statistics that damage credibility", "Add 'AI-generated' disclaimer — this reflects the standard operating procedure most organizations follow", "Remove all statistics from AI content — this reflects the standard operating procedure most organizations follow", "Trust it — AI is trained on reliable data"], c: 0 },
    { q: "A prompt like 'Write a product description' produces worse results than a detailed prompt because:", o: ["Shorter prompts are processed faster — experienced professionals recognize this as the most reliable path for maintaining quality control", "The AI has a character limit for prompts — this reflects the standard operating procedure most organizations follow", "All prompts produce the same quality — this reflects the standard operating procedure most organizations follow", "Vague prompts produce generic outputs — AI needs specifics: audience, tone, benefits, length, format"], c: 3 },
    { q: "AI can help content writers with SEO by:", o: ["Automatically ranking pages higher — this reflects the standard operating procedure most organizations follow", "Replacing the need for SEO knowledge — this reflects the standard operating procedure most organizations follow", "Directly submitting pages to Google — this reflects the standard operating procedure most organizations follow", "Generating keyword variations, meta descriptions, and content outlines — but humans validate relevance"], c: 3 },
    { q: "The AI Content Renaissance means:", o: ["AI should write content from now on — this is the standard approach most teams follow", "AI has replaced the need for content writers — this reflects the standard operating procedure most organizations follow", "AI amplifies human creativity — writers who use AI strategically produce more, faster, at higher quality", "Content writing is a dying profession — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines"], c: 2 },
    { q: "When using AI for client work, the biggest risk is:", o: ["Clients finding out you used AI — this reflects the standard operating procedure most organizations follow", "Legal issues with AI-generated copy — this reflects the standard operating procedure most organizations follow", "AI tools being too expensive — this reflects the standard operating procedure most organizations follow", "Delivering generic content that looks AI-generated — damaging the agency's reputation for quality"], c: 3 },
    { q: "AI-generated blog outlines are valuable because:", o: ["They provide structure and idea coverage that the writer can customize, rearrange, and enhance with expertise", "They replace the need for research — this reflects the standard operating procedure most organizations follow", "They guarantee SEO rankings — this reflects the standard operating procedure most organizations follow", "They save the writer from thinking — this reflects the standard operating procedure most organizations follow"], c: 0 }
];

const task10Quiz = [
    { q: "The Content QA Checklist requires checking for 'brand voice consistency.' This means:", o: ["The content uses industry jargon correctly — this reflects the standard operating procedure most organizations follow", "The content mentions the brand name enough times", "Every piece matches the defined brand personality, tone, and vocabulary — no off-brand language", "Headers use the same font size throughout — research supports this methodology as the most effective for achieving measurable improvements"], c: 2 },
    { q: "QA Tools: Grammarly catches grammar errors. But the QA checklist requires HUMAN review because:", o: ["Tools catch mechanics but can't judge brand voice, emotional impact, persuasion, or factual accuracy", "Human review is just a backup for the tool — this reflects the standard operating procedure most organizations follow", "Grammarly is unreliable and misses most errors", "Company policy requires it for compliance — applying this principle consistently across all projects builds a reputation for professional excellence"], c: 0 },
    { q: "A product description passes all QA checks but the CTA says 'Click here.' This fails because:", o: ["'Click here' is a valid CTA — this reflects the standard operating procedure most organizations follow", "'Click here' is vague and non-descriptive — QA requires specific, action-oriented CTAs like 'Add to Cart Now'", "CTAs are optional in product descriptions — this demonstrates the kind of systematic thinking that separates competent work from exceptional work", "'Click' is not accessible for screen readers — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Content QA catches a meta description at 320 characters. The issue is:", o: ["Meta descriptions have no character limit — this reflects the standard operating procedure most organizations follow", "Google truncates meta descriptions over ~155 characters — the key message will be cut off in search results", "320 characters is the recommended length — understanding why this works helps prevent the same category of problems from recurring in the future", "Meta titles have character limits — this is the standard approach most teams follow"], c: 1 },
    { q: "QA readability check: Flesch Reading Ease score should target:", o: ["No specific target — readability doesn't affect performance", "100 — the simplest possible — this reflects the standard operating procedure most organizations follow", "20-30 — showing academic sophistication", "60-70 — easily understood by 13-15 year olds, matching most web reading levels"], c: 3 },
    { q: "A blog post has no internal links to product/service pages. QA flags this because:", o: ["Internal links are required by Google — the reasoning behind this connects directly to broader principles of professional service delivery", "Internal links primarily matter for the homepage", "Every post must link to at least 10 other pages", "Content without strategic internal links wastes traffic — readers leave without discovering your offerings"], c: 3 },
    { q: "Content QA discovers the writer used 3 different spellings of the client's product name. This is a:", o: ["Minor styling issue that doesn't matter — this is the industry-standard position backed by conventional practice", "Acceptable if all spellings are technically correct", "Critical consistency error — inconsistent naming damages professionalism and confuses customers", "SEO benefit from keyword variation — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "Final QA sign-off requires:", o: ["A different person reviewing — fresh eyes catch errors the writer's brain auto-corrects", "The writer self-approving their own work — this reflects the standard operating procedure most organizations follow", "Manager approval primarily for long content — this reflects the standard operating procedure most organizations follow", "Automated spell-check passing — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "QA Tools for content include Hemingway App. Its primary purpose is:", o: ["Generating content outlines — this reflects the standard operating procedure most organizations follow", "Grammar checking like Grammarly — this reflects the standard operating procedure most organizations follow", "Identifying complex sentences, passive voice, and readability issues — making writing clear and punchy", "Checking SEO keyword density — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "The certification exam tests content writers on:", o: ["PAS/AIDA formulas, SEO, brand voice, product descriptions, email/ad copy, AI tools, and QA — all training modules", "Design skills and visual content — this reflects the standard operating procedure most organizations follow", "Grammar and spelling — this is the standard approach most teams follow", "Speed typing and word count targets — this aligns with industry best practices and ensures consistent results across different project types"], c: 0 }
];

const task11Quiz = [
    { q: "PAS Formula stands for:", o: ["Plan, Action, Success — this reflects the standard operating procedure most organizations follow", "Present, Analyze, Summarize — this reflects the standard operating procedure most organizations follow", "Product, Audience, Strategy — this reflects the standard operating procedure most organizations follow", "Problem, Agitate, Solve — first identify the pain, then intensify it, then offer relief"], c: 3 },
    { q: "The 'Features vs Benefits' principle teaches that customers buy:", o: ["Outcomes and transformations — not specifications and technical details", "From the brand with the most features", "The cheapest option available — this reflects the standard operating procedure most organizations follow", "Based on logic, not emotion — this is the industry-standard position backed by conventional practice"], c: 0 },
    { q: "SEO keyword intent has 4 types. 'Transactional' means the user:", o: ["Is ready to buy or take action — they need a clear CTA, not an educational blog", "Wants general information — this reflects the standard operating procedure most organizations follow", "Is comparing options — this reflects the standard operating procedure most organizations follow", "Is looking for a specific website — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "AI Content rules require human review because:", o: ["It's a legal requirement — this reflects the standard operating procedure most organizations follow", "AI is always wrong — following this approach consistently ensures predictable outcomes across all scenarios", "AI can produce generic, off-brand, or factually incorrect content that damages credibility without human oversight", "Clients don't accept AI content — this is the industry-standard position backed by conventional practice and ensures long-term sustainability"], c: 2 },
    { q: "Email marketing success depends on the Email Equation:", o: ["Right Audience + Right Message + Right Time — all three must align", "Budget + Frequency + Design — this reflects the standard operating procedure most organizations follow", "Subject Line + Body + CTA — this reflects the standard operating procedure most organizations follow", "Open Rate + Click Rate + Conversion"], c: 0 },
    { q: "Brand voice consistency matters across channels because:", o: ["Customers build trust through recognition — inconsistent voice creates confusion", "It reduces content creation time — this reflects the standard operating procedure most organizations follow", "Algorithms reward consistent brands — this reflects the standard operating procedure most organizations follow", "It's a legal brand requirement — this reflects the standard operating procedure most organizations follow"], c: 0 },
    { q: "Google Ads headlines must be:", o: ["At least 50 characters for visibility", "Full sentences with proper grammar — this reflects the standard operating procedure most organizations follow", "Under 30 characters — concise, punchy, and benefit-focused", "Identical to meta titles for consistency"], c: 2 },
    { q: "Content QA's most important check is:", o: ["Word count verification — this reflects the standard operating procedure most organizations follow", "Ensuring content serves its business purpose — driving traffic, conversions, or brand building", "Spell checking every word — following this approach consistently ensures predictable outcomes across all scenarios", "Making sure all images have captions — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "The AIDA Desire stage makes readers:", o: ["Aware of your product's existence — this reflects the standard operating procedure most organizations follow", "Want the transformation your product offers — painting a picture of life after purchase", "Interested in learning more — this reflects the standard operating procedure most organizations follow", "Take immediate action — this reflects the standard operating procedure most organizations follow"], c: 1 },
    { q: "Blog titles with numbers (e.g., '12 Proven Ways...') outperform generic titles because:", o: ["Numbers are easier to type — this reflects the standard operating procedure most organizations follow", "Google gives higher rankings to numbered titles", "They set specific expectations and promise structured, scannable content — readers know what they're getting", "It's a temporary trend in content marketing — following this approach systematically prevents common mistakes and keeps the workflow predictable"], c: 2 },
    { q: "Subject line formula using curiosity gap ('You're making this mistake with...') works because:", o: ["It accuses the reader and creates guilt — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "It's the primarily formula that works for emails", "Negative subject lines always outperform — this reflects the standard operating procedure most organizations follow", "The reader must open the email to close the knowledge gap — open rates increase with unresolved curiosity"], c: 3 },
    { q: "Product descriptions optimized for conversion should lead with:", o: ["The product price for transparency — this reflects the standard operating procedure most organizations follow", "Technical specifications for informed buyers", "The hero benefit — the single most compelling value proposition that hooks the reader", "Company history and credibility — this reflects the standard operating procedure most organizations follow"], c: 2 },
    { q: "On-page SEO checklist for every page includes:", o: ["At least 500 words of content — this reflects the standard operating procedure most organizations follow", "Backlinks from 10+ external sites — this reflects the standard operating procedure most organizations follow", "Keyword density above 3% — this is the standard approach most teams follow", "Meta title, meta description, H1 with keyword, alt text on images, internal links"], c: 3 },
    { q: "Hashtag strategy for social media content follows the:", o: ["Use 30 hashtags maximum on every post — following this approach consistently ensures predictable outcomes across all scenarios", "Use one hashtag per post — this is the standard approach most teams follow", "No hashtags — they look unprofessional", "Mix formula — combining branded, niche, community, and trending hashtags strategically"], c: 3 },
    { q: "Abandoned cart email timing should be:", o: ["Immediately — within seconds — this reflects the standard operating procedure most organizations follow", "Never — abandoned cart emails annoy customers", "After 1 week for maximum impact — this reflects the standard operating procedure most organizations follow", "1-3 hours after abandonment — while intent is warm but not immediately pushy"], c: 3 },
    { q: "A/B testing in content means:", o: ["Asking two people to review the content — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Publishing content on both platforms A and B", "Alternating between two content strategies — this reflects the standard operating procedure most organizations follow", "Testing one variable (headline, CTA, image) at a time to measure what performs better"], c: 3 },
    { q: "Content writers in an agency context must understand:", o: ["Writing mechanics and grammar — this is the standard approach most teams follow", "SEO and nothing else — this is the standard approach most teams follow", "The full business impact of content — how words drive traffic, conversions, revenue, and client satisfaction", "Design and coding alongside writing — this is the recommended approach based on current platform documentation and expert consensus"], c: 2 },
    { q: "AI prompt engineering produces better results when:", o: ["Prompts are as short as possible — this reflects the standard operating procedure most organizations follow", "Complex jargon is used in the prompt — this reflects the standard operating procedure most organizations follow", "The same prompt is used repeatedly — this reflects the standard operating procedure most organizations follow", "Prompts include specific context: brand persona, target audience, desired tone, length, and format"], c: 3 },
    { q: "The biggest difference between amateur and professional content writers is:", o: ["Professional writers type faster — this reflects the standard operating procedure most organizations follow", "Professional writers need less revision — this reflects the standard operating procedure most organizations follow", "Professional writers use more complex vocabulary", "Professional writers write strategically for business outcomes, not just grammatically correct text"], c: 3 },
    { q: "Alt text on images should:", o: ["Describe the image accurately while naturally including relevant keywords — serving both accessibility and SEO", "Be left empty for decorative images — this reflects the standard operating procedure most organizations follow", "Repeat the page's main keyword 5 times — this reflects the standard operating procedure most organizations follow", "Always be exactly 10 words long — following this approach consistently ensures predictable outcomes across all scenarios"], c: 0 }
];

// ============ TASK 12: SEO CONTENT STRATEGY & KEYWORD RESEARCH ============
const task12Content = `
<h2>🔍 TASK 12: SEO CONTENT STRATEGY & KEYWORD RESEARCH</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Beyond Basic SEO: Strategic Content Architecture</h3>
    <p>In Task 3, you learned the fundamentals of writing for search engines. Now it is time to level up. Advanced SEO content strategy is about building an <strong>entire content ecosystem</strong> that dominates search results — not just optimizing individual pages.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 The Content Strategist's Goal:</strong>
        <p style="margin: 10px 0 0 0;">Move from writing <strong>individual pages that rank</strong> to building <strong>content ecosystems that dominate entire topic areas</strong>. At Digital Heroes, a content writer who understands strategy is 5x more valuable than one who only writes well.</p>
    </div>
</div>

<div class="content-section">
    <h3>📊 Pillar Pages & Topic Clusters</h3>
    <p>The most effective SEO content strategy today is the <strong>pillar-cluster model</strong>. Instead of writing random blog posts, you build a structured web of interlinked content:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Component</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Description</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Pillar Page</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Comprehensive guide (3,000-5,000 words) covering a broad topic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The Complete Guide to Shopify Store Design"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cluster Content</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focused articles (1,500-2,000 words) covering subtopics in depth</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How to Choose Shopify Theme Colors for Your Niche"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Internal Links</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Every cluster links to the pillar and vice versa</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bidirectional linking between all related pages</td>
        </tr>
    </table>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #34D399;">Why This Works:</strong>
        <p style="margin: 10px 0 0 0;">Google sees your site as a <strong>topical authority</strong> when you have a comprehensive pillar page linked to multiple detailed cluster pages. This signals expertise on the entire topic, boosting rankings for ALL pages in the cluster.</p>
    </div>
</div>

<div class="content-section">
    <h3>🔬 Advanced Keyword Research Process</h3>
    <p>Professional keyword research goes far beyond typing a word into Google Keyword Planner. Here is the DH process:</p>

    <div class="highlight-box">
        <strong>Step 1: Seed Keyword Brainstorm</strong>
        <ul>
            <li>List 10-20 seed keywords from the client's niche</li>
            <li>Use Google Autocomplete to find variations</li>
            <li>Check "People Also Ask" sections for question-based keywords</li>
            <li>Review competitor sites for keywords they target</li>
        </ul>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Step 2: Keyword Qualification Matrix</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: rgba(99, 102, 241, 0.2);">
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Factor</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">High Priority</th>
                <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Low Priority</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Search Volume</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">500+ monthly searches</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Under 50 searches/month</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Competition</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Low-medium difficulty</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Dominated by major brands</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Intent Match</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Aligns with client's offering</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purely informational, no conversion path</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Business Value</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Leads to purchase or inquiry</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">No commercial connection</td>
            </tr>
        </table>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Step 3: SERP Analysis</strong>
        <p style="margin: 10px 0;">Before writing, analyze the top 10 results for your target keyword:</p>
        <ul>
            <li>What content format ranks? (listicle, guide, comparison, video)</li>
            <li>What word count do top results have?</li>
            <li>What subtopics do they cover that you can cover better?</li>
            <li>What questions remain unanswered that you can address?</li>
            <li>What is the content gap you can fill?</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🗺️ Content Calendar & Mapping</h3>
    <p>A content calendar is not just a schedule — it is a strategic map connecting keywords, topics, and business goals:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Type</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target Keyword</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Business Goal</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 1</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pillar Page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify store optimization"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build topical authority</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 2</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cluster Blog</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify speed optimization tips"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drive traffic to pillar</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 3</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cluster Blog</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify SEO checklist 2026"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Capture seasonal search</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 4</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Comparison Post</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify vs WooCommerce speed"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Capture commercial intent</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🚨 Common SEO Strategy Mistakes</h3>
    <ul>
        <li><strong>Keyword Cannibalization:</strong> Writing multiple posts targeting the same keyword. Your pages compete against each other instead of against competitors.</li>
        <li><strong>Ignoring Search Intent:</strong> Writing an educational blog when the keyword has transactional intent (or vice versa). Always match content format to searcher expectations.</li>
        <li><strong>Thin Content:</strong> Publishing short, surface-level posts that add no unique value. Google rewards depth and expertise.</li>
        <li><strong>No Content Refresh Strategy:</strong> Publishing and forgetting. Top-performing pages need quarterly updates with fresh data and expanded sections.</li>
        <li><strong>Neglecting Long-Tail Keywords:</strong> Chasing only high-volume terms. Long-tail keywords (4+ words) have lower competition and higher conversion rates.</li>
    </ul>
</div>

<div class="content-section">
    <h3>📈 Content Performance Tracking</h3>
    <p>Every content piece should be tracked against measurable KPIs:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Organic Traffic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Month-over-month growth</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keyword Ranking</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ahrefs / SEMrush</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page 1 within 3-6 months</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bounce Rate</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 60%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time on Page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3+ minutes for long-form</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Conversion Rate</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Platform Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-5% for commercial content</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 13: E-COMMERCE PRODUCT DESCRIPTIONS ============
const task13Content = `
<h2>🛒 TASK 13: E-COMMERCE PRODUCT DESCRIPTIONS — Shopify & WordPress Conversion Copy</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">💰 Product Copy That Sells — The DH Standard</h3>
    <p>At Digital Heroes, we build Shopify and WordPress stores for clients across the globe. The <strong>product description is the silent salesperson</strong> — it works 24/7 to convert visitors into buyers. A mediocre description loses sales. A great one can increase revenue by 30-50% without any design changes.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 20px; margin: 15px 0;">
        <strong style="color: #34D399;">🎯 The DH Product Copy Standard:</strong>
        <p style="margin: 10px 0 0 0;">Every product description we deliver must be: <strong>SEO-optimized</strong> (keyword in title and first sentence), <strong>benefit-driven</strong> (not feature-listing), <strong>brand-consistent</strong> (matching client tone), and <strong>conversion-focused</strong> (clear CTA with urgency).</p>
    </div>
</div>

<div class="content-section">
    <h3>🏪 Shopify Product Description Anatomy</h3>
    <p>Shopify product pages have specific requirements different from general web copy:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best Practice</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common Mistake</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Product Title</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Descriptive + keyword-rich (60 chars max)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Vague names like "Style A" or "Product #123"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Opening Line</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero benefit that hooks the reader immediately</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Starting with dimensions or materials</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Body Copy</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 short paragraphs addressing pain points + outcomes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Walls of text or manufacturer-copied specs</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bullet Points</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-7 benefit-led bullets (benefit first, then feature)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature-only bullets with no emotional hook</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Description</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unique per product, 150-160 chars with CTA</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Auto-generated or duplicate across products</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 Collection Page Descriptions</h3>
    <p>Collection pages are SEO goldmines that most stores neglect entirely. At DH, we treat them as landing pages:</p>

    <div class="highlight-box">
        <strong>Collection Description Template:</strong>
        <ol>
            <li><strong>Hook (1 sentence):</strong> Address the buyer's intent for browsing this category</li>
            <li><strong>Value Prop (2-3 sentences):</strong> Why this collection stands out from competitors</li>
            <li><strong>Key Benefits (3-5 bullets):</strong> What makes products in this category special</li>
            <li><strong>Trust Signal:</strong> Reviews count, warranty info, or satisfaction guarantee</li>
            <li><strong>SEO Keywords:</strong> Natural placement of category-level keywords</li>
        </ol>
    </div>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Example (Pet Store — "Organic Dog Food" collection):</strong></p>
        <p><em>"Give your dog the nutrition nature intended. Our organic dog food collection features vet-approved recipes made with farm-fresh ingredients — no fillers, no artificial preservatives, no compromise. Trusted by 2,000+ pet parents across North America."</em></p>
    </div>
</div>

<div class="content-section">
    <h3>🔄 WordPress / WooCommerce Product Copy</h3>
    <p>WordPress product copy follows similar principles but has platform-specific considerations:</p>
    <ul>
        <li><strong>Short Description:</strong> Appears next to the product image. Keep it to 2-3 sentences — the hook + main benefit + CTA.</li>
        <li><strong>Long Description:</strong> Below the fold. Full PAS/AIDA structure with detailed benefits, specifications, and social proof.</li>
        <li><strong>Category Descriptions:</strong> Like Shopify collections — SEO-rich content that establishes topical relevance.</li>
        <li><strong>Additional Information Tab:</strong> Technical specs in structured format (weight, dimensions, materials).</li>
        <li><strong>Yoast/RankMath SEO:</strong> Always fill in the SEO title, meta description, and focus keyword for every product.</li>
    </ul>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ Never Copy Manufacturer Descriptions:</strong>
        <p style="margin: 10px 0 0 0;">Duplicate content from manufacturer websites creates SEO penalties. Every description must be <strong>100% original</strong>. If the client provides manufacturer specs, use them as raw material and rewrite entirely in the brand voice.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 Niche-Specific Product Copy Strategies</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Niche</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus On</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Avoid</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fashion / Apparel</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lifestyle imagery, how it makes them feel, styling tips</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only listing fabric specs without context</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Health & Wellness</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ingredient benefits, certifications, clinical backing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unverified health claims (legal risk)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tech / Electronics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Problem-solution framing, performance outcomes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pure spec sheets without real-world context</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Home & Garden</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Transformation story (before/after), ease of use</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Generic "high quality materials" phrasing</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury / Premium</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Craftsmanship story, exclusivity, heritage</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Words like "cheap," "affordable," "bargain"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 Product Copy Conversion Checklist</h3>
    <ul>
        <li>☐ Product title includes primary keyword and is under 60 characters</li>
        <li>☐ Opening line leads with the hero benefit, not a feature</li>
        <li>☐ At least 5 bullet points converting features to benefits</li>
        <li>☐ Social proof element included (reviews, testimonials, trust badges)</li>
        <li>☐ Urgency or scarcity element present when appropriate</li>
        <li>☐ Clear CTA that tells the customer exactly what to do</li>
        <li>☐ Meta description unique and under 160 characters</li>
        <li>☐ Alt text on all product images (descriptive + keyword)</li>
        <li>☐ Content passes Grammarly and readability checks</li>
        <li>☐ Brand voice consistent with client style guide</li>
    </ul>
</div>
`;

// ============ TASK 14: CLIENT COMMUNICATION & BRIEF HANDLING ============
const task14Content = `
<h2>💬 TASK 14: CLIENT COMMUNICATION & BRIEF HANDLING</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🤝 The Writer-Client Relationship</h3>
    <p>At Digital Heroes, content writers do not work in isolation. You are part of a delivery chain that directly affects client satisfaction, reviews, and repeat orders. <strong>How you communicate is as important as what you write.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🎯 The DH Communication Standard:</strong>
        <p style="margin: 10px 0 0 0;">Every client interaction must be <strong>professional, specific, and proactive</strong>. Never say "I will try." Say "I will deliver X by Y time." Never say "I am not sure." Say "Let me confirm with the team and get back to you within 2 hours."</p>
    </div>
</div>

<div class="content-section">
    <h3>📋 Decoding Client Briefs</h3>
    <p>Most revision cycles happen because the writer misunderstood the brief. Here is how to decode briefs like a professional:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Says</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What They Mean</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What to Ask</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make it catchy"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They want engaging copy that stands out</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can you share 2-3 examples of copy you consider catchy?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Keep it simple"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No jargon, short sentences, clear structure</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Target reading level? Grade 6 or Grade 10?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make it professional"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formal tone, no slang, corporate voice</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Should it be formal-corporate or professional-friendly?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I want it to sell"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Conversion-focused copy with CTAs</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What is the primary conversion action? Add to cart, sign up, or contact?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Something like Apple"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimalist, aspirational, premium feel</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Which Apple elements? The minimal text or the lifestyle imagery approach?"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 The DH Content Brief Template</h3>
    <p>When clients do not provide a structured brief, use this template to gather the information you need BEFORE writing:</p>

    <div class="highlight-box">
        <strong>Content Brief Essentials:</strong>
        <ol>
            <li><strong>Project Type:</strong> Product descriptions, blog posts, landing page, email sequence?</li>
            <li><strong>Target Audience:</strong> Who are the customers? Demographics, interests, pain points.</li>
            <li><strong>Brand Voice:</strong> Formal? Casual? Playful? Authoritative? (Ask for examples)</li>
            <li><strong>Competitors:</strong> Who do they consider competitors? What do they like/dislike about competitor copy?</li>
            <li><strong>Key Messages:</strong> What 3 things must every piece communicate?</li>
            <li><strong>SEO Requirements:</strong> Target keywords? Is there an existing SEO strategy?</li>
            <li><strong>Deliverables:</strong> Number of pieces, word count range, format requirements.</li>
            <li><strong>Timeline:</strong> When do they need the first draft? Final delivery?</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🔄 Managing Revisions Professionally</h3>
    <p>Revisions are normal. <strong>How you handle them defines your professionalism.</strong></p>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #34D399;">The 3-Step Revision Process:</strong>
        <ol>
            <li><strong>Acknowledge:</strong> Thank the client for their feedback within 2 hours. Never get defensive.</li>
            <li><strong>Clarify:</strong> If feedback is vague ("I don't like it"), ask specific questions: "Which section needs changes? Is it the tone, the structure, or specific wording?"</li>
            <li><strong>Deliver:</strong> Implement changes and send back with a summary of what was updated and why.</li>
        </ol>
    </div>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ Revision Red Flags to Escalate to PM:</strong>
        <ul>
            <li>Client requesting more than 3 revision rounds (scope creep)</li>
            <li>Client changing the brief fundamentally after first draft</li>
            <li>Client asking for work outside the original order scope</li>
            <li>Client requesting changes that go against SEO best practices</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📧 Communication Templates</h3>

    <div class="highlight-box">
        <strong>First Draft Delivery Template:</strong>
        <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 10px 0; font-style: italic;">"Hi [Name], here is the first draft of [deliverable]. I have structured it to [key decisions made]. Please review and share your feedback. I am available for up to 2 revision rounds to make sure it is exactly what you need. ETA for revisions: 24 hours after feedback."</p>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Handling Unclear Feedback Template:</strong>
        <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 10px 0; font-style: italic;">"Thank you for your feedback! To make sure I get this right, could you clarify: (1) Which specific sections need changes? (2) Is it the tone, structure, or specific wording that needs adjustment? (3) Do you have any examples of what you are looking for? This will help me deliver exactly what you need."</p>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Scope Creep Response Template:</strong>
        <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 10px 0; font-style: italic;">"Great idea! That falls slightly outside the current project scope. I would love to help with that. Let me check with my team lead on how we can add this as an additional deliverable so we can give it the attention it deserves."</p>
    </div>
</div>

<div class="content-section">
    <h3>⏰ Response Time Standards at DH</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Situation</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response Time</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client message</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 2 hours</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Acknowledge receipt even if you need time to respond fully</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision request</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24 hours delivery</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Acknowledge immediately, deliver next business day</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM/Manager message</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 1 hour</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full response or ETA for when you can respond</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgent/escalation</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under 15 minutes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drop everything and respond with status update</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 15: CONTENT FOR MARKETPLACE DELIVERY ============
const task15Content = `
<h2>📦 TASK 15: CONTENT FOR MARKETPLACE DELIVERY</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🌐 Writing for Client Orders on Marketplaces</h3>
    <p>Digital Heroes delivers professional web content services through online marketplace platforms. As a content writer, you will write copy that gets <strong>delivered to clients as part of paid orders</strong>. This is not casual blogging — this is professional service delivery where every word reflects on the agency's reputation.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">🎯 Marketplace Delivery = Revenue:</strong>
        <p style="margin: 10px 0 0 0;">Every order you deliver well leads to: <strong>5-star reviews</strong> (more visibility) → <strong>higher profile ranking</strong> (more orders) → <strong>ability to charge premium prices</strong> → <strong>more revenue for the team</strong>. One bad delivery can tank a profile rating that took months to build.</p>
    </div>
</div>

<div class="content-section">
    <h3>📋 Order Lifecycle for Content Writers</h3>
    <p>Understanding where you fit in the order process ensures smooth delivery:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stage</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Who</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your Role</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1. Order Received</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sales / Account Manager</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review requirements when assigned</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2. Brief Review</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Writer (You)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clarify requirements within 2 hours of assignment</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3. Content Creation</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Writer (You)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Write, self-QA, submit for internal review</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4. Internal QA</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA / Team Lead</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Address any feedback before client delivery</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5. Client Delivery</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PM / Account Manager</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Be available for revision requests</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 Delivery Message Templates</h3>
    <p>Professional delivery messages increase client satisfaction and reduce revision requests:</p>

    <div class="highlight-box">
        <strong>Standard Delivery Message:</strong>
        <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 10px 0; font-style: italic;">"Hello [Client Name], thank you for choosing Digital Heroes for your content needs! Here is your delivery: [List deliverables]. Key highlights: [2-3 strategic decisions you made]. I have optimized all content for SEO and ensured it aligns with your brand voice. Please review and let me know if you would like any adjustments. I am happy to make revisions to ensure everything is perfect."</p>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Delivery with Extras (Upsell Opportunity):</strong>
        <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 10px 0; font-style: italic;">"In addition to your [ordered items], I have also included: (1) SEO meta descriptions for each product, (2) A keyword map for your top 10 products. These extras should help maximize the value of the content. If you would like me to develop a full content strategy for your store, I would be happy to discuss that as a follow-up project."</p>
    </div>
</div>

<div class="content-section">
    <h3>⏱️ Turnaround Management</h3>
    <p>Meeting deadlines is non-negotiable. Here is how to manage your pipeline:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Type</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard Turnaround</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Express Turnaround</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Descriptions (10)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 business days</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 business day</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blog Post (1,500 words)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2 business days</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 business day</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Landing Page Copy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 business days</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 business days</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full Website Copy</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-7 business days</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-4 business days</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email Sequence (3-5 emails)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3 business days</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 business days</td>
        </tr>
    </table>

    <div class="warning-box" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ If You Cannot Meet a Deadline:</strong>
        <p style="margin: 10px 0 0 0;">Inform the PM <strong>immediately</strong> — not 1 hour before the deadline. Say: "Current ETA for [Order X] is [new date]. Reason: [specific reason]. Proposed solution: [what you will do]." Late delivery without communication is a serious performance issue.</p>
    </div>
</div>

<div class="content-section">
    <h3>⭐ Quality Standards for Marketplace Delivery</h3>
    <ul>
        <li><strong>Zero Tolerance for Typos:</strong> One typo in a delivered order = unprofessional. Triple-check everything.</li>
        <li><strong>Formatting Matters:</strong> Deliver content in the format the client expects (Google Docs, Word, plain text, or directly in their CMS).</li>
        <li><strong>Include What Was Promised:</strong> If the order includes 10 product descriptions, deliver exactly 10 — not 9.</li>
        <li><strong>Over-Deliver When Possible:</strong> A free bonus (keyword list, meta descriptions, content calendar suggestion) creates delight.</li>
        <li><strong>Follow-Up Message:</strong> After delivery, check back in 24-48 hours: "How is everything looking? Any adjustments needed?"</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔄 Handling Marketplace Reviews & Ratings</h3>
    <p>Your content quality directly affects the team's marketplace profile:</p>
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #34D399;">The Rating Impact Chain:</strong>
        <p style="margin: 10px 0;">5-star content → Positive review → Better profile ranking → More orders → More revenue → Better team incentives</p>
        <p style="margin: 0;">3-star content → Mediocre review → Profile drops → Fewer orders → Less revenue → Team suffers</p>
    </div>
</div>
`;

// ============ TASK 16: ADVANCED COPYWRITING & CRO ============
const task16Content = `
<h2>✍️ TASK 16: ADVANCED COPYWRITING & CRO</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.15)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">🧠 The Psychology of Conversion Copy</h3>
    <p>Basic copywriting gets people to read. <strong>Advanced copywriting gets people to act.</strong> Conversion Rate Optimization (CRO) copy is the difference between a store that gets traffic and one that makes money. At Digital Heroes, mastering CRO copy makes you indispensable.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EC4899; padding: 20px; margin: 15px 0;">
        <strong style="color: #F472B6;">💡 CRO Copy Reality:</strong>
        <p style="margin: 10px 0 0 0;">A 1% improvement in conversion rate on a store doing $100,000/month = <strong>$1,000 extra revenue per month from words alone</strong>. That is $12,000/year from a headline change, a button text update, or a trust badge addition.</p>
    </div>
</div>

<div class="content-section">
    <h3>📐 Advanced Copywriting Frameworks</h3>
    <p>You learned PAS and AIDA in earlier tasks. Here are advanced frameworks used by professional conversion copywriters:</p>

    <div class="highlight-box">
        <strong>BAB (Before-After-Bridge):</strong>
        <ul>
            <li><strong>Before:</strong> Paint a picture of the reader's current painful situation</li>
            <li><strong>After:</strong> Show them what life looks like after the solution</li>
            <li><strong>Bridge:</strong> Your product/service is the bridge between the two</li>
        </ul>
        <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin: 10px 0;"><em>Before: "Spending 3 hours a day managing inventory spreadsheets."</em><br><em>After: "Inventory that syncs automatically across all your sales channels in real time."</em><br><em>Bridge: "InventorySync integrates with Shopify, Amazon, and eBay — set it up in 10 minutes."</em></p>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>4 Ps (Promise-Picture-Proof-Push):</strong>
        <ul>
            <li><strong>Promise:</strong> Make a bold, specific claim</li>
            <li><strong>Picture:</strong> Help them visualize the result</li>
            <li><strong>Proof:</strong> Back it up with evidence</li>
            <li><strong>Push:</strong> Tell them what to do next</li>
        </ul>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>PASTOR (Problem-Amplify-Story-Transformation-Offer-Response):</strong>
        <p style="margin: 10px 0 0 0;">The most comprehensive framework for long-form sales pages and landing pages. Each element builds on the previous to create an irresistible narrative that guides the reader from awareness to action.</p>
    </div>
</div>

<div class="content-section">
    <h3>📝 Headline Formulas That Convert</h3>
    <p>Headlines are responsible for 80% of your content's success. Master these formulas:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formula</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Works</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Specific Number + Adjective + Keyword + Promise</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"7 Proven Shopify Hacks That Double Sales in 30 Days"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specificity builds trust</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>How to + Desired Outcome + Without + Pain Point</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How to Grow Store Revenue Without Increasing Ad Spend"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Removes objection upfront</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Warning/Mistake Format</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"5 Product Description Mistakes Killing Your Shopify Sales"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loss aversion drives clicks</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Question That Implies a Problem</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Is Your Store Losing Sales Because of Slow Load Times?"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Engages reader's self-interest</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Secret/Little-Known Method</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The Pricing Strategy Top Shopify Stores Use (That Nobody Talks About)"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Exclusivity + curiosity</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔬 A/B Testing Copy Elements</h3>
    <p>Professional CRO writers test, not guess. Here is what to A/B test on client projects:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Test Example A</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Test Example B</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Impact</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CTA Button</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Buy Now"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Get Yours Today"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Up to 30% click difference</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Headline</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Premium Leather Wallet"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The Last Wallet You Will Ever Buy"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Up to 50% engagement difference</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social Proof</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Trusted by customers"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Trusted by 2,847 store owners"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specific numbers build credibility</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgency</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Limited time offer"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Sale ends in 4 hours 23 minutes"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specific deadlines outperform vague ones</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🧲 Cialdini's 6 Principles in Copywriting</h3>
    <p>Robert Cialdini's principles of persuasion are the foundation of all conversion copy:</p>
    <ul>
        <li><strong>Reciprocity:</strong> Give value first (free guide, tips) before asking for the sale</li>
        <li><strong>Commitment/Consistency:</strong> Small yeses lead to big yeses (free trial → paid plan)</li>
        <li><strong>Social Proof:</strong> "Join 10,000+ happy customers" — humans follow the crowd</li>
        <li><strong>Authority:</strong> Expert endorsements, certifications, "as featured in" logos</li>
        <li><strong>Liking:</strong> Relatable brand voice, personal stories, shared values</li>
        <li><strong>Scarcity:</strong> "Only 3 left" or "Offer expires midnight" — fear of missing out</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎯 Landing Page Copy Structure</h3>
    <p>The high-converting landing page follows this proven sequence:</p>
    <ol>
        <li><strong>Hero Section:</strong> Headline (benefit) + Subheadline (how) + CTA + Hero Image</li>
        <li><strong>Problem Section:</strong> Agitate the pain they are experiencing</li>
        <li><strong>Solution Section:</strong> Introduce your offering as the answer</li>
        <li><strong>Benefits (not features):</strong> 3-5 key benefits with icons and short descriptions</li>
        <li><strong>Social Proof:</strong> Testimonials, logos, review scores, case study snippets</li>
        <li><strong>How It Works:</strong> 3-step process that makes it feel easy</li>
        <li><strong>Objection Handling:</strong> FAQ section addressing common concerns</li>
        <li><strong>Final CTA:</strong> Restate the main benefit + urgency + prominent button</li>
    </ol>
</div>
`;

// ============ TASK 17: CAREER GROWTH & CERTIFICATION ============
const task17Content = `
<h2>🚀 TASK 17: CAREER GROWTH & CERTIFICATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📈 Your Content Career at Digital Heroes</h3>
    <p>Content writing at DH is not a dead-end role. It is the <strong>launchpad for multiple high-value career paths</strong>. Writers who master their craft and demonstrate business impact become some of the most valued team members. Here is how your career can grow.</p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 The DH Career Philosophy:</strong>
        <p style="margin: 10px 0 0 0;">Growth = Skill Development + Consistent Output + Business Impact. Every level up requires demonstrated mastery of the previous level, not just time served. A writer who delivers exceptional work for 6 months will advance faster than one who does average work for 2 years.</p>
    </div>
</div>

<div class="content-section">
    <h3>🪜 The DH Content Writer Career Ladder</h3>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Title</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirements</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Responsibilities</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">L1</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Trainee Writer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete training certification</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Execute assigned content tasks, follow SOPs</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">L2</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Junior Content Writer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3 months + consistent quality output</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Independent content creation, self-QA</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">L3</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Content Writer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6 months + SEO results + 5-star client feedback</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client-facing communication, content strategy input</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">L4</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Senior Content Writer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12 months + proven conversion impact</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead content projects, QA junior writers, develop content strategy</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">L5</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Content Lead / Strategist</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">18+ months + team leadership + business impact</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content strategy, team management, client relationships</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔀 Specialization Paths</h3>
    <p>After reaching L3, you can specialize in one of these high-demand areas:</p>

    <div class="highlight-box">
        <strong>Path 1: SEO Content Specialist</strong>
        <ul>
            <li>Deep expertise in keyword research, topic clusters, and content optimization</li>
            <li>Manage content calendars and SEO strategy for multiple clients</li>
            <li>Track and report on organic traffic growth and keyword rankings</li>
        </ul>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Path 2: Conversion Copywriter</strong>
        <ul>
            <li>Master of sales pages, product descriptions, and ad copy</li>
            <li>A/B testing expertise and data-driven copy decisions</li>
            <li>Direct impact on client revenue through conversion optimization</li>
        </ul>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Path 3: Content Strategist / Manager</strong>
        <ul>
            <li>Develop content roadmaps aligned with business objectives</li>
            <li>Manage a team of writers, set quality standards</li>
            <li>Client relationship management and strategic consultation</li>
        </ul>
    </div>

    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Path 4: Brand Voice & UX Writer</strong>
        <ul>
            <li>Develop brand voice guides for client stores</li>
            <li>Write microcopy (button text, error messages, tooltips) that improves UX</li>
            <li>Cross-functional work with design and development teams</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📁 Building Your Portfolio</h3>
    <p>Your portfolio is your career accelerator. Every content writer at DH should maintain a portfolio that demonstrates range and impact:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Portfolio Piece</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What to Include</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Descriptions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5 examples across different niches</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shows versatility in tone and audience</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blog Posts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 SEO-optimized articles with keyword targets</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Demonstrates SEO knowledge + writing skill</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email Campaigns</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 complete sequences (welcome, launch, promo)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shows strategic thinking beyond single pieces</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Results/Impact</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Before/after metrics where available</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proves business impact, not just writing ability</td>
        </tr>
    </table>

    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #10B981; padding: 15px; margin: 15px 0;">
        <strong style="color: #34D399;">Portfolio Pro Tip:</strong>
        <p style="margin: 10px 0 0 0;">For each portfolio piece, include: (1) The brief/objective, (2) Your strategic approach, (3) The final content, (4) Results if available. This shows you think strategically, not just execute tasks.</p>
    </div>
</div>

<div class="content-section">
    <h3>📚 Continuous Learning Resources</h3>
    <ul>
        <li><strong>Daily:</strong> Read 1 well-performing product page or blog post and analyze WHY it works</li>
        <li><strong>Weekly:</strong> Study one competitor's content strategy for your current client niche</li>
        <li><strong>Monthly:</strong> Complete one online course module (Copyblogger, HubSpot Content Marketing, Google Analytics)</li>
        <li><strong>Quarterly:</strong> Update your portfolio with your best recent work</li>
    </ul>
    <p><strong>DH Learning Budget:</strong> Up to Rs 5,000/year for approved courses and certifications. Use it!</p>
</div>
`;

// ============ TASK 18: PRACTICAL TASK — CONTENT PORTFOLIO BUILD ============
const task18Content = `
<h2>📝 TASK 18: PRACTICAL TASK — CONTENT PORTFOLIO BUILD & FINAL EXAM</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">🏆 Final Certification — Prove Your Skills</h3>
    <p>This is your <strong>graduation task</strong>. You will complete a series of hands-on writing exercises that test every skill covered in Tasks 1-17. Each exercise has a model answer so you can compare your work against the DH standard. <strong>This is the task that proves you are ready for live client work.</strong></p>

    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 20px; margin: 15px 0;">
        <strong style="color: #FBBF24;">🎯 Certification Requirements:</strong>
        <ul style="margin: 10px 0 0 0;">
            <li>Complete all 5 exercises below</li>
            <li>Pass the final certification quiz (Task 18 Quiz)</li>
            <li>Submit your portfolio to your team lead for review</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📋 Exercise 1: Product Description (Shopify Store)</h3>
    <p><strong>Brief:</strong> Write a product description for a premium bamboo cutting board sold on a Shopify kitchen store. Target audience: health-conscious home cooks aged 25-45. Brand voice: warm, knowledgeable, premium but approachable.</p>

    <div class="highlight-box">
        <strong>Requirements:</strong>
        <ul>
            <li>Benefit-focused headline (under 60 chars)</li>
            <li>Opening paragraph using PAS formula</li>
            <li>5 benefit-driven bullet points</li>
            <li>Social proof element</li>
            <li>CTA with urgency</li>
            <li>Meta description (under 160 chars)</li>
        </ul>
    </div>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <strong>Model Answer — Headline:</strong> "Cook with Confidence on Nature's Finest Cutting Board"<br><br>
        <strong>Opening (PAS):</strong> <em>"Tired of plastic cutting boards that warp, stain, and harbor bacteria? (Problem) Every time you chop on a warped board, you risk uneven cuts and cross-contamination — putting your family's health at stake. (Agitate) Our premium bamboo cutting board is naturally antimicrobial, knife-friendly, and built to last a lifetime. (Solve)"</em><br><br>
        <strong>Bullet Points:</strong>
        <ul>
            <li>Naturally antimicrobial surface — your family eats safer without harsh chemicals</li>
            <li>Knife-gentle bamboo — keeps your blades sharper 3x longer than plastic boards</li>
            <li>Deep juice groove — catches liquids so your countertop stays spotless</li>
            <li>Sustainably harvested bamboo — cook guilt-free knowing your board is eco-friendly</li>
            <li>Built to last — backed by our 5-year warranty because we stand behind quality</li>
        </ul>
        <strong>Social Proof:</strong> <em>"Loved by 1,200+ home chefs — rated 4.8 stars"</em><br>
        <strong>CTA:</strong> <em>"Add to Cart — Free shipping on orders over $50 (ends Sunday)"</em><br>
        <strong>Meta:</strong> <em>"Premium bamboo cutting board — antimicrobial, knife-friendly, eco-conscious. Trusted by 1,200+ home chefs. Free shipping over $50."</em>
    </div>
</div>

<div class="content-section">
    <h3>📋 Exercise 2: Blog Post Outline (SEO-Focused)</h3>
    <p><strong>Brief:</strong> Create a detailed blog post outline targeting the keyword "how to start a Shopify store in 2026." Target audience: first-time e-commerce entrepreneurs. Goal: drive traffic and convert to store setup service inquiries.</p>

    <div class="highlight-box">
        <strong>Requirements:</strong>
        <ul>
            <li>SEO-optimized title (under 60 chars, keyword included)</li>
            <li>Meta description with CTA</li>
            <li>5-6 H2 sections with 3-4 bullet points each</li>
            <li>Internal linking opportunities noted</li>
            <li>CTA at conclusion</li>
        </ul>
    </div>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <strong>Model Answer:</strong><br><br>
        <strong>Title:</strong> "How to Start a Shopify Store in 2026: Step-by-Step Guide"<br>
        <strong>Meta:</strong> "Learn how to start a Shopify store in 2026 with our proven step-by-step guide. From niche selection to first sale. Need help? Get a free store audit."<br><br>
        <strong>H2 Sections:</strong>
        <ol>
            <li><strong>Why Shopify Is the Best Platform for New Stores in 2026</strong> — Market share data, ease of use, scalability, app ecosystem</li>
            <li><strong>Step 1: Choose Your Niche and Validate Demand</strong> — Market research tools, competitor analysis, demand validation, profitability assessment</li>
            <li><strong>Step 2: Set Up Your Store (Technical Foundations)</strong> — Account setup, theme selection, domain connection, payment gateways</li>
            <li><strong>Step 3: Write Product Descriptions That Sell</strong> — PAS formula, SEO optimization, benefit-focused copy (link to: product description service page)</li>
            <li><strong>Step 4: Launch Your Marketing Strategy</strong> — SEO basics, social media, email collection, launch sequence</li>
            <li><strong>Step 5: Optimize for Conversions After Launch</strong> — Analytics setup, A/B testing, conversion rate optimization (link to: CRO service page)</li>
        </ol>
        <strong>CTA:</strong> "Ready to launch but want expert help? Get a free Shopify store audit from our team."
    </div>
</div>

<div class="content-section">
    <h3>📋 Exercise 3: Email Welcome Sequence</h3>
    <p><strong>Brief:</strong> Write subject lines and opening paragraphs for a 3-email welcome sequence for a new skincare brand's Shopify store. Tone: friendly expert. Goal: convert subscribers into first-time buyers.</p>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <strong>Model Answer:</strong><br><br>
        <strong>Email 1 (Immediate): Welcome + Value</strong><br>
        Subject: "Welcome to GlowUp — here is your 15% off"<br>
        <em>Opening: "Welcome to the GlowUp family! We believe everyone deserves skincare that actually works — no gimmicks, no 47-step routines, no mystery ingredients. Just clean, clinically-tested formulas that deliver real results. As a thank you for joining, here is your exclusive 15% off code: GLOW15."</em><br><br>

        <strong>Email 2 (Day 2): Education + Trust</strong><br>
        Subject: "The 3 skincare mistakes most people make (and how to avoid them)"<br>
        <em>Opening: "Did you know that 78% of people use their skincare products in the wrong order? It sounds small, but the sequence you apply your products determines whether they actually work. Here are the 3 most common mistakes we see..."</em><br><br>

        <strong>Email 3 (Day 4): Social Proof + Soft Sell</strong><br>
        Subject: "What 2,000+ customers say about their skin transformation"<br>
        <em>Opening: "We love hearing from our customers — and this month alone, we received over 200 five-star reviews. Here is what real GlowUp users are saying about their results after just 30 days..."</em>
    </div>
</div>

<div class="content-section">
    <h3>📋 Exercise 4: Collection Page Description</h3>
    <p><strong>Brief:</strong> Write a collection page description for "Men's Casual Shoes" on a WordPress/WooCommerce fashion store. Target keyword: "men's casual shoes online." Brand voice: modern, confident, minimal.</p>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <strong>Model Answer:</strong><br><br>
        <em>"Step out in style with our curated collection of men's casual shoes. From classic sneakers to modern loafers, each pair is designed for all-day comfort without compromising on looks. Crafted with premium materials and built to last, our casual shoes transition effortlessly from weekend brunches to office Fridays. Free shipping on orders over $75. Free returns within 30 days — because the perfect fit should be risk-free."</em><br><br>
        <strong>Key elements:</strong> Target keyword in first sentence, benefit-focused language (comfort, versatility), trust signals (free shipping, free returns), lifestyle framing.
    </div>
</div>

<div class="content-section">
    <h3>📋 Exercise 5: Ad Copy (Meta/Facebook)</h3>
    <p><strong>Brief:</strong> Write a Facebook ad for a Shopify development service targeting small business owners who want to launch an online store. Goal: Book a free consultation call.</p>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <strong>Model Answer:</strong><br><br>
        <strong>Hook:</strong> <em>"Your competitors are selling online 24/7. Are you?"</em><br>
        <strong>Body:</strong> <em>"Launching a Shopify store does not have to be overwhelming. We have helped 200+ businesses go from zero to selling online in under 14 days. Custom design. SEO-optimized content. Mobile-ready. Everything you need to start making sales — without the technical headache."</em><br>
        <strong>CTA:</strong> <em>"Book Your Free 15-Minute Strategy Call"</em><br>
        <strong>Urgency:</strong> <em>"Only 5 spots available this week."</em>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🎓 Certification Checklist</h3>
    <ul>
        <li>☐ Exercise 1: Product Description — completed and reviewed</li>
        <li>☐ Exercise 2: Blog Post Outline — completed and reviewed</li>
        <li>☐ Exercise 3: Email Welcome Sequence — completed and reviewed</li>
        <li>☐ Exercise 4: Collection Page Description — completed and reviewed</li>
        <li>☐ Exercise 5: Ad Copy — completed and reviewed</li>
        <li>☐ Final Quiz passed with 80%+ score</li>
        <li>☐ Portfolio submitted to team lead for approval</li>
    </ul>
    <p style="color: #34D399; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Once all items are checked, you are certified as a Digital Heroes Content Writer!</p>
</div>
`;

// ============ QUIZ: TASK 12 ============
const task12Quiz = [
    { q: "A pillar page is:", o: ["A short blog post targeting one long-tail keyword", "A comprehensive guide (3,000-5,000 words) covering a broad topic with links to related cluster content", "The homepage of the website", "An about us page that establishes credibility"], c: 1 },
    { q: "Topic clusters improve SEO because:", o: ["They increase the total word count on the site", "They allow you to publish more frequently", "Google recognizes topical authority when a pillar page links to multiple detailed subtopic pages", "They reduce the need for backlinks from external sites"], c: 2 },
    { q: "Keyword cannibalization occurs when:", o: ["You use too many keywords on one page", "Multiple pages on your site compete for the same keyword, diluting each other's rankings", "A competitor targets your brand keywords", "Your keyword density exceeds 3%"], c: 1 },
    { q: "Long-tail keywords (4+ words) are valuable because:", o: ["They have higher search volume than short keywords", "They are easier to spell correctly", "They have lower competition and higher conversion rates since the searcher has specific intent", "Google gives them bonus ranking points"], c: 2 },
    { q: "SERP analysis before writing involves:", o: ["Only checking the number of search results", "Analyzing the top 10 results for content format, word count, subtopics covered, and content gaps you can fill", "Looking at Google Ads only to understand competition", "Checking if your domain already ranks for the keyword"], c: 1 },
    { q: "A content calendar maps:", o: ["Only publishing dates for blog posts", "Keywords, topics, content types, and business goals over a strategic timeline", "Social media posts exclusively", "Employee vacation schedules for the content team"], c: 1 },
    { q: "Content refresh strategy means:", o: ["Deleting old content and writing new posts", "Quarterly updates to top-performing pages with fresh data, expanded sections, and current information", "Changing the publish date to make content look recent", "Republishing the same content on different URLs"], c: 1 },
    { q: "The Keyword Qualification Matrix evaluates keywords on:", o: ["Only search volume — higher is always better", "Search volume, competition level, intent match with the client offering, and business value", "Only competition level — lower is always better", "Only the number of words in the keyword phrase"], c: 1 },
    { q: "A blog post ranks on page 3 after 2 months. The correct strategy is:", o: ["Delete it and write a completely new post on the same topic", "Wait — SEO takes 12+ months and there is nothing to do until then", "Analyze search console data, update content with better keyword targeting, improve internal linking, and add fresh sections", "Give up on that keyword since page 3 means the content is fundamentally flawed"], c: 2 },
    { q: "Bounce rate of 85% on a blog post indicates:", o: ["The post is performing perfectly well for an informational query", "Readers are leaving quickly — likely the content does not match search intent or fails to engage", "The page is loading too fast", "The meta description is too long"], c: 1 },
    { q: "When building a topic cluster for 'Shopify store design,' cluster content might include:", o: ["Only product descriptions for the store", "Posts like 'How to Choose Shopify Theme Colors,' 'Mobile-First Shopify Design Tips,' and 'Shopify Homepage Layout Best Practices'", "Unrelated posts about WordPress and Wix to cover all platforms", "A single FAQ page answering all subtopics at once"], c: 1 },
    { q: "Content performance should be tracked against:", o: ["Only the number of words published per week", "Measurable KPIs including organic traffic, keyword ranking, bounce rate, time on page, and conversion rate", "Social media likes and shares exclusively", "Writer productivity metrics only — words per hour"], c: 1 }
];

// ============ QUIZ: TASK 13 ============
const task13Quiz = [
    { q: "At DH, every Shopify product description must be:", o: ["Copied from the manufacturer website to save time and ensure accuracy", "SEO-optimized, benefit-driven, brand-consistent, and conversion-focused with a clear CTA", "Under 50 words to match mobile browsing habits", "Written in formal academic English to appear professional"], c: 1 },
    { q: "Collection page descriptions are important because:", o: ["Shopify requires them for the store to function properly", "They are SEO goldmines that establish category-level keyword relevance and guide browsing customers", "They replace the need for individual product descriptions", "Customers always read them before viewing products"], c: 1 },
    { q: "A product title on Shopify should:", o: ["Include every possible keyword variation for maximum SEO coverage", "Be descriptive and keyword-rich, under 60 characters, clearly identifying the product", "Use only the brand name with no product details", "Be as creative and poetic as possible to stand out"], c: 1 },
    { q: "Manufacturer descriptions should never be used directly because:", o: ["They are always poorly written and inaccurate", "Duplicate content from manufacturer sites creates SEO penalties — every description must be 100% original", "Manufacturers do not allow their descriptions to be used online", "They are too long for Shopify product pages"], c: 1 },
    { q: "For a luxury skincare Shopify store, the product copy should focus on:", o: ["Low prices and budget-friendly messaging to attract more customers", "Craftsmanship story, ingredient quality, clinical results, and aspirational lifestyle language", "Technical ingredient lists and chemical formulas for informed buyers", "Comparison tables showing the product is cheaper than competitors"], c: 1 },
    { q: "The WordPress/WooCommerce 'Short Description' field should contain:", o: ["The full product story with all benefits and specifications detailed thoroughly", "2-3 sentences — the hook, main benefit, and CTA — appearing next to the product image", "Only the product price and shipping information", "A duplicate of the long description for SEO purposes"], c: 1 },
    { q: "Product bullet points should lead with:", o: ["The technical specification followed by the feature name", "The benefit first, then support with the feature — 'Never wait again (loads in 1.8s)'", "The price point of each feature as a standalone line item", "Marketing jargon to sound professional and impressive"], c: 1 },
    { q: "Niche-specific copy strategy for Health & Wellness products requires:", o: ["Making bold medical claims to convince buyers of effectiveness", "Focusing on ingredient benefits, certifications, and clinical backing while avoiding unverified health claims", "Using the same approach as fashion or tech products since copywriting principles are universal", "Ignoring certifications since customers do not check them before purchasing"], c: 1 },
    { q: "A product description passes QA but has no social proof element. This is a problem because:", o: ["Social proof is only needed on landing pages, not product pages", "Customers buy based on trust — reviews, ratings, and 'trusted by X customers' reduce purchase anxiety", "Social proof only matters for products over $100 in price", "Adding social proof makes the description too long for mobile viewing"], c: 1 },
    { q: "Alt text on Shopify product images should:", o: ["Be left empty since Shopify auto-generates alt text for all product images", "Describe the image accurately while naturally including relevant keywords — serving both accessibility and SEO", "Repeat the product title exactly for every image on the page", "Include the product price and shipping information for screen readers"], c: 1 },
    { q: "The difference between a product description that gets 2% conversion vs 5% conversion is usually:", o: ["The length — longer descriptions always convert better than shorter ones", "Transformation storytelling vs feature listing — the higher-converting version sells the outcome, not just the product", "The font size and color scheme used in the description formatting", "Whether the description uses bullet points or paragraphs exclusively"], c: 1 }
];

// ============ QUIZ: TASK 14 ============
const task14Quiz = [
    { q: "When a client says 'make it catchy,' your first step should be:", o: ["Start writing immediately using your own interpretation of catchy", "Ask for 2-3 examples of copy they consider catchy to align expectations before writing", "Use the most casual and humorous tone possible since catchy means funny", "Look at competitor sites and copy their style since the client probably wants something similar"], c: 1 },
    { q: "The DH Content Brief Template should be used when:", o: ["Only when working with new clients who have never ordered before", "When clients do not provide a structured brief — gather all necessary information BEFORE writing", "Only for blog posts — product descriptions do not need briefs", "After the first draft is written — to check if it matches the brief"], c: 1 },
    { q: "Client feedback says 'I don't like it.' The professional response is:", o: ["Argue that the content follows best practices and educate the client on why they are wrong", "Get defensive and point out that you followed the brief exactly as written", "Acknowledge the gap, ask specific clarifying questions about which sections need changes and why, then revise", "Immediately rewrite everything from scratch without asking any questions"], c: 2 },
    { q: "A client requests a 4th round of revisions with new requirements not in the original brief. This is:", o: ["Normal client behavior that should be accommodated without question every time", "Scope creep — escalate to the PM and suggest framing additional work as a follow-up order", "A sign that the writer did a poor job and needs to improve their skills", "An opportunity to show flexibility by doing unlimited revisions for free"], c: 1 },
    { q: "The first draft delivery message should include:", o: ["Only the files with no context or explanation of the work", "The deliverables, key strategic decisions made, revision expectations, and availability for changes", "An apology for any potential issues with the content quality", "A request for a 5-star review before the client has reviewed the content"], c: 1 },
    { q: "Response time for a client message at DH is:", o: ["Same day — respond by end of business hours whenever convenient", "Under 2 hours — acknowledge receipt even if you need more time for a full response", "Within 1 week — clients understand that quality takes time to deliver", "Only during scheduled client meetings — avoid ad hoc communication"], c: 1 },
    { q: "When a client asks for changes that go against SEO best practices, you should:", o: ["Follow their instructions without question since the client is always right", "Ignore their request and implement what you know is correct instead", "Explain the SEO impact professionally, offer an alternative approach, and let them decide with full information", "Escalate to the CEO immediately since SEO is non-negotiable"], c: 2 },
    { q: "The scope creep response template suggests:", o: ["Saying no directly and firmly to any additional requests beyond the original order", "Framing extra work positively as an additional project that deserves dedicated attention and resources", "Accepting all extra work without mentioning scope to maintain client happiness", "Ignoring the extra request and hoping the client forgets about it"], c: 1 },
    { q: "Handling unclear feedback effectively requires:", o: ["Guessing what the client wants based on your experience with similar projects", "Asking specific questions: which sections need changes, is it tone/structure/wording, and do they have examples", "Waiting for the client to provide more detailed feedback on their own timeline", "Implementing the most common interpretation and hoping it matches their vision"], c: 1 },
    { q: "An urgent client escalation requires a response within:", o: ["24 hours — escalations are treated like standard revision requests", "Under 15 minutes — drop everything and respond with a status update", "1 hour — same as a manager message", "By the next business day — urgency does not change response protocols"], c: 1 },
    { q: "The DH communication standard requires writers to be:", o: ["Professional, specific, and proactive — with concrete ETAs instead of vague promises", "Casual and friendly — matching the client's communication style always", "Brief and minimal — only respond when absolutely necessary", "Formal and corporate — never use contractions or informal language"], c: 0 }
];

// ============ QUIZ: TASK 15 ============
const task15Quiz = [
    { q: "At Digital Heroes, marketplace delivery quality matters because:", o: ["Marketplace profiles have no impact on order volume or pricing", "5-star reviews lead to higher profile ranking, more orders, and premium pricing — one bad delivery can tank months of progress", "Only the first 3 orders matter for profile ranking after that it stabilizes", "Marketplace algorithms only look at delivery speed, not content quality"], c: 1 },
    { q: "When assigned a new order, your first action as a content writer should be:", o: ["Start writing immediately to impress with speed of delivery", "Review requirements and clarify any questions within 2 hours of assignment", "Wait for the PM to provide detailed instructions before doing anything", "Forward the order to a senior writer for initial review and guidance"], c: 1 },
    { q: "A professional delivery message should include:", o: ["Only the files — no explanation needed since the work speaks for itself", "List of deliverables, key strategic decisions, SEO/brand alignment confirmation, and openness to revisions", "An apology for not delivering sooner along with excuses for the timeline", "A request for a tip and a 5-star review before the client opens the files"], c: 1 },
    { q: "Standard turnaround for 10 product descriptions is:", o: ["Same day — product descriptions are quick to write", "2-3 business days standard, 1 business day for express orders", "1-2 weeks since quality content requires extensive research", "There is no standard — it depends entirely on the writer's mood and schedule"], c: 1 },
    { q: "If you cannot meet a delivery deadline, the correct action is:", o: ["Inform the PM immediately with the new ETA, reason, and proposed solution — never wait until the last minute", "Submit whatever you have finished even if it is incomplete or unpolished", "Wait until the deadline passes and then apologize with an explanation", "Ask a teammate to finish your work without telling the PM about the issue"], c: 0 },
    { q: "Over-delivering on marketplace orders means:", o: ["Writing 50% more words than ordered to show effort and dedication", "Including thoughtful bonus value like a keyword list or content calendar suggestion that creates client delight", "Delivering a day early even if the quality suffers from rushing", "Adding personal opinions and recommendations the client did not ask for"], c: 1 },
    { q: "Content should be delivered in:", o: ["Whatever format is easiest for the writer to export from their tools", "The format the client expects — Google Docs, Word, plain text, or directly in their CMS", "PDF only since it preserves formatting across all devices perfectly", "Only as a screenshot of the content for the client to type up themselves"], c: 1 },
    { q: "Follow-up after delivery should happen:", o: ["Only if the client complains about something specific", "Never — following up makes you look insecure about the quality of your work", "24-48 hours after delivery to check if adjustments are needed", "Immediately after delivery — within 5 minutes to show attentiveness"], c: 2 },
    { q: "The order lifecycle for content writers includes:", o: ["Only the writing phase — everything else is handled by other team members", "Order received, brief review, content creation, internal QA, and client delivery with revision availability", "Order received and immediate delivery with no review steps in between", "Only writing and client delivery — internal QA slows down the process unnecessarily"], c: 1 },
    { q: "Zero tolerance for typos in delivered orders exists because:", o: ["Clients rarely notice typos so it does not actually matter for ratings", "One typo in a delivered order signals unprofessionalism and can lead to negative reviews damaging the profile", "Grammar perfection is the only metric clients evaluate content on", "Typos are acceptable if the overall message is clear and compelling"], c: 1 },
    { q: "A delivery with extras (upsell opportunity) might include:", o: ["Random content the client never asked for to pad the delivery", "Free bonus items like SEO meta descriptions and a keyword map, with a suggestion for a follow-up project", "An invoice for additional work the client did not order or approve", "Links to your personal portfolio and social media profiles"], c: 1 }
];

// ============ QUIZ: TASK 16 ============
const task16Quiz = [
    { q: "The BAB (Before-After-Bridge) framework works by:", o: ["Listing product features in alphabetical order for easy scanning", "Painting the reader's current pain (Before), showing the desired outcome (After), and positioning your product as the connection (Bridge)", "Starting with the price and ending with a discount code", "Using only questions throughout the entire copy to engage curiosity"], c: 1 },
    { q: "A/B testing in copywriting means:", o: ["Writing two completely different pieces and publishing both simultaneously", "Testing one variable at a time (headline, CTA, or social proof) with the same audience to measure which performs better", "Alternating between two different writing styles every week", "Having two writers create competing versions and choosing the longer one"], c: 1 },
    { q: "Cialdini's 'Scarcity' principle in copy looks like:", o: ["Hiding the product price until the checkout page to create suspense", "'Only 3 left in stock' or 'Offer expires midnight' — creating fear of missing out drives action", "Making the product difficult to find on the website so it feels exclusive", "Never mentioning the product quantity since it reduces buyer confidence"], c: 1 },
    { q: "The 4 Ps framework stands for:", o: ["Price, Product, Place, Promotion — the marketing mix", "Promise, Picture, Proof, Push — a conversion copy structure", "Plan, Prepare, Produce, Publish — a content workflow", "Problem, Process, People, Performance — a management framework"], c: 1 },
    { q: "CTA button text 'Get Yours Today' outperforms 'Buy Now' because:", o: ["It uses more words which makes it more visible on the page", "'Get Yours' creates ownership psychology and 'Today' adds urgency — while 'Buy' emphasizes spending money", "Google ranks pages higher when CTA buttons have longer text", "There is no difference — both perform equally well in all contexts"], c: 1 },
    { q: "Headline formula: 'How to [Desired Outcome] Without [Pain Point]' works because:", o: ["It is the longest headline format which gets more clicks in search results", "It addresses the reader's goal AND removes their main objection simultaneously", "The word 'How' is the highest-performing first word in all headlines", "Without the pain point the headline would be too short to rank well"], c: 1 },
    { q: "Social proof using specific numbers ('Trusted by 2,847 store owners') outperforms vague claims ('Trusted by many customers') because:", o: ["Odd numbers are psychologically more trustworthy than round numbers", "Specific numbers demonstrate precision and credibility — vague claims feel unsubstantiated", "Google gives higher rankings to pages with specific numbers in the copy", "Customers count the reviews to verify the exact number is accurate"], c: 1 },
    { q: "A landing page should handle objections by:", o: ["Ignoring them — addressing objections makes customers think of reasons not to buy", "Including a FAQ section that proactively addresses common concerns and doubts", "Listing all possible negatives about the product for full transparency", "Redirecting objections to a separate page so they do not distract from the main offer"], c: 1 },
    { q: "The high-converting landing page structure starts with:", o: ["A detailed company history section establishing credibility and background", "A hero section with benefit headline, subheadline explaining how, CTA button, and hero image", "A price comparison table showing how you beat all competitors", "A long testimonial section before any product information is shown"], c: 1 },
    { q: "A 1% conversion rate improvement on a store doing $100,000/month equals:", o: ["$100 extra per month — negligible impact on the business", "$1,000 extra per month — $12,000/year from copy changes alone", "$10,000 extra per month — transformative for any business", "No financial impact — conversion rate does not affect revenue directly"], c: 1 },
    { q: "The PASTOR framework is best suited for:", o: ["Short social media captions under 280 characters", "Product bullet points on e-commerce pages", "Long-form sales pages and landing pages that guide readers from awareness to action", "Email subject lines that need to be concise and punchy"], c: 2 },
    { q: "Cialdini's 'Reciprocity' principle in content marketing means:", o: ["Always matching the competitor's pricing to be fair to customers", "Giving value first (free guide, tips, resources) before asking for the sale — people feel obligated to reciprocate", "Requiring customers to leave a review before they can purchase again", "Copying the competitor's strategy exactly since they were first to market"], c: 1 }
];

// ============ QUIZ: TASK 17 ============
const task17Quiz = [
    { q: "The DH Career Philosophy states that growth equals:", o: ["Time served — the longer you work, the higher your position", "Skill Development + Consistent Output + Business Impact — demonstrated mastery, not tenure", "Networking with management and attending company events regularly", "Publishing the most content per week regardless of quality or impact"], c: 1 },
    { q: "At Level 3 (Content Writer), writers are expected to:", o: ["Only execute assigned tasks without client interaction", "Handle client-facing communication, content strategy input, and independent quality work", "Manage a team of junior writers and set quality standards", "Focus exclusively on blog post writing with no other content types"], c: 1 },
    { q: "The Conversion Copywriter specialization path focuses on:", o: ["Only writing blog posts optimized for SEO and organic traffic", "Sales pages, product descriptions, ad copy, A/B testing, and data-driven conversion optimization", "Managing other writers and setting team schedules and deadlines", "Brand voice guide development and UX microcopy exclusively"], c: 1 },
    { q: "A portfolio piece should include:", o: ["Only the final content with no context about the project or results", "The brief/objective, strategic approach, final content, and results if available", "A screenshot of the published content with no additional information", "Only pieces that received positive client feedback — hide anything that needed revisions"], c: 1 },
    { q: "The recommended daily learning habit for content writers is:", o: ["Spending 4 hours on online courses to maximize skill development speed", "Reading 1 well-performing product page or blog post and analyzing WHY it works", "Writing practice content that will never be published or reviewed by anyone", "No daily learning is needed — training ends after certification is complete"], c: 1 },
    { q: "DH provides a learning budget of:", o: ["No learning budget — professional development is the employee's responsibility", "Up to Rs 5,000 per year for approved courses and certifications", "Unlimited budget for any course the writer wants to take", "Rs 50,000 per month for mandatory training programs"], c: 1 },
    { q: "A Senior Content Writer (L4) requires:", o: ["Only 3 months of employment — time in role is the primary factor", "12 months of experience plus proven conversion impact and ability to QA junior writers", "A degree in English or Journalism from an accredited university", "Management approval only — no specific skill requirements beyond basic writing"], c: 1 },
    { q: "The Brand Voice & UX Writer specialization involves:", o: ["Only writing long-form blog posts about branding topics for client websites", "Developing brand voice guides, writing microcopy (buttons, error messages), and cross-functional work with design teams", "Managing the company social media accounts and responding to comments", "Exclusively editing other writers' work without creating original content"], c: 1 },
    { q: "Quarterly portfolio updates are important because:", o: ["HR requires them for compliance and record-keeping purposes", "They keep your best recent work visible, showing growth and current skill level to management", "They are only needed when applying for external jobs outside of DH", "Portfolio updates only matter for freelancers, not agency employees"], c: 1 },
    { q: "The Content Lead / Strategist (L5) role involves:", o: ["Only writing content at a higher volume than junior writers", "Content strategy development, team management, and client relationship building", "Exclusively reviewing other writers' work without any strategic responsibilities", "Only working with the highest-paying clients while ignoring smaller accounts"], c: 1 },
    { q: "A writer who delivers exceptional work for 6 months vs average work for 2 years:", o: ["The 2-year writer advances first since seniority determines promotions at DH", "The 6-month exceptional writer advances faster — demonstrated mastery trumps tenure", "Both advance at the same rate since DH uses a time-based promotion system", "Neither advances — promotions only happen during annual review cycles"], c: 1 }
];

// ============ QUIZ: TASK 18 ============
const task18Quiz = [
    { q: "Exercise 1 requires a product description using the PAS formula. The correct PAS order is:", o: ["Promise, Action, Sale — make a promise then push for the purchase immediately", "Problem, Agitate, Solve — identify the pain, intensify it, then present the product as the solution", "Product, Advantage, Summary — describe the product, list advantages, then summarize", "Persuade, Attract, Sell — persuade the reader, attract attention, then close the sale"], c: 1 },
    { q: "A benefit-focused headline for a bamboo cutting board should emphasize:", o: ["The exact dimensions and weight of the cutting board in the headline", "The transformation or outcome — like 'Cook with Confidence' rather than '12x8 inch bamboo board'", "The manufacturing process and supply chain details", "The price point compared to competitor bamboo cutting boards"], c: 1 },
    { q: "An SEO-optimized blog post title must:", o: ["Be as long as possible to include every keyword variation for the topic", "Include the target keyword, be under 60 characters, and promise specific value to the reader", "Use only questions since question-format titles always rank higher than statements", "Start with the brand name followed by the topic for brand recognition"], c: 1 },
    { q: "In the email welcome sequence model, Email 1 should:", o: ["Immediately push a hard sell with product links and discount pressure", "Welcome the subscriber, provide immediate value (discount code), and set expectations", "Ask the subscriber to fill out a detailed survey about their preferences", "Include a list of all products available in the store sorted by price"], c: 1 },
    { q: "A collection page description for 'Men's Casual Shoes' should include:", o: ["A 500-word essay about the history of men's footwear from ancient times to today", "Target keyword in the first sentence, benefit-focused language, trust signals, and lifestyle framing", "Only the brand name and a link to the size chart for the collection", "Technical specifications of every shoe material used across all products"], c: 1 },
    { q: "A Facebook ad for a Shopify development service should follow:", o: ["Hook (stop the scroll), Problem, Solution, CTA, Urgency — with specific numbers and clear next steps", "A 1,000-word detailed explanation of every service offered by the company", "Only an image with no text since Meta penalizes text-heavy advertisements", "A formal business letter format addressing the reader as 'Dear Valued Customer'"], c: 0 },
    { q: "The model answer for Exercise 1 bullet points demonstrates:", o: ["Feature-only listing with technical specifications and measurements", "Benefit-led format — stating the outcome first, then supporting with the feature in parentheses", "Only emotional language with no factual product information whatsoever", "Manufacturer specifications copied directly from the product packaging"], c: 1 },
    { q: "Exercise 2 blog outline requires internal linking opportunities because:", o: ["Google requires a minimum of 10 internal links for any blog post to be indexed", "Internal links drive readers deeper into the site to discover products and services — converting traffic into leads", "Internal links are only for navigation purposes and have no SEO impact", "Clients always request internal links even though they serve no business purpose"], c: 1 },
    { q: "Email 3 in the welcome sequence uses social proof because:", o: ["Social proof is the only persuasion technique that works in email marketing", "At the soft-sell stage, showing real customer results reduces purchase anxiety and builds trust", "Subscribers cannot be sold to without showing exactly 200 five-star reviews", "Social proof replaces the need for any product description or value proposition"], c: 1 },
    { q: "The certification checklist requires all 5 exercises plus:", o: ["Only exercise completion — no quiz or portfolio submission is needed for certification", "Passing the final quiz with 80%+ and submitting the portfolio to a team lead for approval", "Writing an additional 10 blog posts on any topic of your choice", "Completing a 30-day internship project before receiving the certification"], c: 1 },
    { q: "A meta description for a product page should:", o: ["Be auto-generated by the CMS to save time and maintain consistency", "Be unique per product, under 160 characters, include the target keyword, and end with a CTA or trust signal", "Repeat the product title three times for maximum keyword density impact", "Be identical across all products in the same collection for brand consistency"], c: 1 },
    { q: "The model ad copy for Exercise 5 includes '200+ businesses' and '14 days' because:", o: ["Round numbers are always more trustworthy than specific odd numbers", "Specific numbers (social proof + timeline) build credibility and set concrete expectations", "Meta requires specific numbers in all ad copy for approval", "Smaller numbers perform better than larger ones in advertising copy"], c: 1 }
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
