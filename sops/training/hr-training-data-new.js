// HR Training Data - COMPREHENSIVE MODULE (10 Modules)
// Digital Heroes Certification Program
// 10 Tasks, 105 Quiz Questions

const trainingTasks = [
    { id: 1, title: "HR Mindset & Economics", description: "People = Revenue, Cost of Bad Hires", contentFirst: true, studyGuide: ["Time: 60 min", "Bad hire cost calculator", "Hire slow, fire fast", "DH growth story"] },
    { id: 2, title: "JD Writing & Sourcing", description: "Job Descriptions & Talent Pipeline", contentFirst: true, studyGuide: ["Time: 60 min", "Good vs bad JD examples", "Sourcing channels ranked", "Cost per hire by channel"] },
    { id: 3, title: "Screening & Interviews", description: "Full Hiring Funnel Mastery", contentFirst: true, studyGuide: ["Time: 90 min", "100 CVs → 1 hire pipeline", "STAR method", "Role-specific questions"] },
    { id: 4, title: "Offer & Onboarding", description: "Closing Candidates & First 90 Days", contentFirst: true, studyGuide: ["Time: 60 min", "CTC structure", "Counter-offer handling", "30-60-90 day plan"] },
    { id: 5, title: "Performance & Policies", description: "Reviews, PIPs & Employee Relations", contentFirst: true, studyGuide: ["Time: 75 min", "SBI feedback framework", "PIP template & process", "Conflict resolution scenarios"] },
    { id: 6, title: "Offboarding & Remote", description: "Exit Process, Remote Teams & Agency HR", contentFirst: true, studyGuide: ["Time: 75 min", "Exit checklist", "WFH policy enforcement", "Agency hiring strategies"] },
    { id: 7, title: "DH Deep Dive", description: "Manifesto, Policies, Salary & Communication", contentFirst: true, studyGuide: ["Time: 90 min", "7 DH Manifesto principles", "Zero-tolerance rules", "Incentive 1%/2%/3% tiers"] },
    { id: 8, title: "Analytics, AI & Practice", description: "HR Metrics, ChatGPT & 8 Real Scenarios", contentFirst: true, studyGuide: ["Time: 90 min", "6 key HR metrics", "AI prompt templates", "8 practical exercises"] },
    { id: 9, title: "HR FAQ & Joining Docs", description: "50+ Employee Q&As & Document Checklist", contentFirst: true, studyGuide: ["Time: 60 min", "Salary, leave, WFH FAQs", "Document checklist", "Day-1 common mistakes"] },
    { id: 10, title: "Final Certification", description: "HR Mastery Exam", contentFirst: false, studyGuide: ["Time: 60 min", "Covers tasks 1-9", "15 comprehensive questions", "Score 100% to certify"] }
];


const task1Content = `
<h2>📚 TASK 1: HR Mindset & The Economics of Hiring</h2>

<div class="content-section">
<h3>💰 The Real Cost of a Bad Hire — DH Numbers</h3>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real Story — "The Rahul Incident":</strong><br><br>
Rahul was hired in just 2 days because the sales team was desperate for help. His resume looked great, his interview was "good enough," and the hiring manager said "just get someone in." By week 3, Rahul had upset 3 clients with rude messages on chat. One client left a 4-star review (down from 5 stars). Another demanded a partial refund.<br><br>
<strong>Here's what that "quick hire" actually cost us:</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Cost Category</th><th style="padding:12px;text-align:left;">Amount</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Rahul's salary (3 months)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹45,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Senior team member's training time</td><td style="padding:10px;border:1px solid #E2E8F0;">₹30,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client refund (partial)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Lost client revenue (churned)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹50,000+</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Re-hiring cost (posting, screening, interviews)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Team morale impact & overtime</td><td style="padding:10px;border:1px solid #E2E8F0;">Immeasurable</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Total Damage</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#EF4444;">₹1.65 Lakhs+ (from a ₹15,000/month intern)</strong></td></tr>
</tbody>
</table>
<strong>The lesson:</strong> A ₹15,000/month hire cost us over ₹1.65 Lakhs in 3 months. That's an 11x multiplier on the salary cost alone.
</div>
</div>

<div class="content-section">
<h3>🧠 The "Hire Slow, Fire Fast" Philosophy</h3>
<p>This is the single most important principle in HR at Digital Heroes. Let's break it down:</p>

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin:15px 0;">
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px;">
<strong>✅ HIRE SLOW means:</strong>
<ul>
<li>Never rush a hire because a team is "desperate"</li>
<li>Minimum 3-step interview process for every role</li>
<li>Always check references — no exceptions</li>
<li>Give a paid trial task before offering full-time</li>
<li>Sleep on the decision — if you're unsure, that's a NO</li>
</ul>
</div>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px;">
<strong>⚡ FIRE FAST means:</strong>
<ul>
<li>If someone shows red flags in week 1, act in week 2</li>
<li>Don't wait 3 months hoping they'll "improve"</li>
<li>Probation period exists for a reason — use it</li>
<li>Document issues from day 1</li>
<li>A bad hire infects the whole team — act quickly</li>
</ul>
</div>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real Scenario — "The 3-Month Hope":</strong><br>
We had a content writer who missed 4 deadlines in her first month. Her manager said "Give her time, she's adjusting." Month 2: more missed deadlines plus grammatical errors in client deliverables. Month 3: a client complained directly. We finally let her go — but we'd wasted 3 months of salary, a senior writer's mentoring time, and damaged a client relationship. If we'd acted after month 1, we'd have saved ₹60,000+ and the client relationship.
</div>
</div>

<div class="content-section">
<h3>💸 People = Revenue: The DH Framework</h3>
<p>At Digital Heroes, every team member is directly tied to revenue. Here's how:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Role</th><th style="padding:12px;text-align:left;">Monthly Revenue Generated</th><th style="padding:12px;text-align:left;">Cost of Bad Hire (3 months)</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Shopify Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">$3,000 - $5,000/month</td><td style="padding:10px;border:1px solid #E2E8F0;">$10,000 - $15,000 lost</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sales Executive</td><td style="padding:10px;border:1px solid #E2E8F0;">$5,000 - $15,000/month</td><td style="padding:10px;border:1px solid #E2E8F0;">$15,000 - $45,000 lost</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">UI/UX Designer</td><td style="padding:10px;border:1px solid #E2E8F0;">$2,000 - $4,000/month</td><td style="padding:10px;border:1px solid #E2E8F0;">$6,000 - $12,000 lost</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Content Writer</td><td style="padding:10px;border:1px solid #E2E8F0;">$1,500 - $3,000/month</td><td style="padding:10px;border:1px solid #E2E8F0;">$4,500 - $9,000 lost</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Customer Success</td><td style="padding:10px;border:1px solid #E2E8F0;">$2,000 - $4,000/month (retention)</td><td style="padding:10px;border:1px solid #E2E8F0;">$6,000 - $12,000 lost</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 The Math:</strong> A good developer generates ~$4,000/month in revenue. Over 12 months, that's $48,000. A bad hire who lasts 3 months and damages 2 client relationships doesn't just cost their salary — they cost you $48,000 in revenue that a good hire would have generated, PLUS client damage. <strong>Every hiring decision is a $50,000+ decision.</strong>
</div>
</div>

<div class="content-section">
<h3>🎯 The HR Role at Digital Heroes</h3>
<p>Let's be crystal clear about what your job actually is:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">❌ You Are NOT</th><th style="padding:12px;text-align:left;">✅ You ARE</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">A job poster</td><td style="padding:10px;border:1px solid #E2E8F0;">A talent strategist who builds championship teams</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">A form filler</td><td style="padding:10px;border:1px solid #E2E8F0;">The gatekeeper of company culture</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">An attendance tracker</td><td style="padding:10px;border:1px solid #E2E8F0;">A performance multiplier for every team</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">A "nice to have" support function</td><td style="padding:10px;border:1px solid #E2E8F0;">A direct contributor to the ₹75 Cr revenue target</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Someone who says "yes" to every hiring request</td><td style="padding:10px;border:1px solid #E2E8F0;">Someone who pushes back when quality is at risk</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🏆 The DH Growth Story:</strong><br>
Digital Heroes grew from ₹9.2 Cr to targeting ₹75 Cr. That growth is impossible without the right people. Every developer, designer, and sales exec who performs well accelerates that target. Every bad hire slows it down. <strong>HR is the engine that powers this growth — you decide who gets on the bus.</strong>
</div>
</div>

<div class="content-section">
<h3>🚩 Red Flags to Catch During Hiring</h3>
<p>These are the warning signs that experienced HR professionals never ignore:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Red Flag</th><th style="padding:12px;text-align:left;">What It Really Means</th><th style="padding:12px;text-align:left;">DH Experience</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Job hopping (&lt;6 months at multiple jobs)</td><td style="padding:10px;border:1px solid #E2E8F0;">They'll leave you too</td><td style="padding:10px;border:1px solid #E2E8F0;">3 out of 3 job hoppers we hired left within 4 months</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Scripted/rehearsed answers</td><td style="padding:10px;border:1px solid #E2E8F0;">They've memorized responses, not lived them</td><td style="padding:10px;border:1px solid #E2E8F0;">Ask follow-up "Why?" twice — scripted people freeze</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Badmouthing previous employers</td><td style="padding:10px;border:1px solid #E2E8F0;">They'll badmouth you next</td><td style="padding:10px;border:1px solid #E2E8F0;">100% correlation at DH — every badmouther became a problem</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Can't explain gaps in resume</td><td style="padding:10px;border:1px solid #E2E8F0;">Hiding something (not always bad, but probe)</td><td style="padding:10px;border:1px solid #E2E8F0;">Genuine gaps are fine — evasive answers are not</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Asks only about salary and WFH</td><td style="padding:10px;border:1px solid #E2E8F0;">Not interested in the work itself</td><td style="padding:10px;border:1px solid #E2E8F0;">First question = priorities. "What will I work on?" = good sign</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">No questions for the interviewer</td><td style="padding:10px;border:1px solid #E2E8F0;">Low curiosity, low engagement</td><td style="padding:10px;border:1px solid #E2E8F0;">Best hires always asked 5+ questions about the role</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📋 The Bad Hire Cost Calculator</h3>
<p>Use this formula every time you're tempted to rush a hire:</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Bad Hire Cost = (Monthly Salary × Months Employed) + (Senior's Time × Hours Spent) + (Client Revenue Lost) + (Re-hiring Cost) + (New Hire Training Cost)</strong><br><br>
<strong>Example for a ₹15,000/month intern:</strong><br>
= (₹15,000 × 3) + (₹500/hr × 40 hrs) + (₹50,000) + (₹15,000) + (₹20,000)<br>
= ₹45,000 + ₹20,000 + ₹50,000 + ₹15,000 + ₹20,000<br>
= <strong style="color:#EF4444;">₹1,50,000 minimum</strong><br><br>
<strong>That's 10x the monthly salary.</strong> The industry standard estimate is 3x annual salary for senior roles, but even for interns at DH, the multiplier is brutal because of client-facing work.
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Every hire is a ₹1.5L+ decision</strong> — even for the cheapest role</li>
<li><strong>Hire Slow:</strong> 3-step process minimum, references mandatory, trial task always</li>
<li><strong>Fire Fast:</strong> Red flags in week 1 = action in week 2, don't hope for improvement</li>
<li><strong>People = Revenue:</strong> A developer = $4,000/month. A bad developer = -$10,000+/month</li>
<li><strong>You are the gatekeeper:</strong> Saying "no" to a bad candidate is worth more than saying "yes" to fill a seat</li>
<li><strong>Culture is non-negotiable:</strong> Skills can be taught, attitude cannot</li>
</ol>
</div>
</div>
`;

const task1Quiz = [
    { q: "At DH, a ₹15,000/month intern who turns out to be a bad hire costs approximately how much over 3 months when you include client damage, re-hiring, and training?", o: ["₹45,000 — just the 3 months of salary paid", "₹75,000 — salary plus some re-hiring costs", "₹1,50,000 or more — roughly 10x the monthly salary", "₹5,00,000 — half a year of operations budget"], c: 2 },
    { q: "In the Rahul incident described in this module, what was the PRIMARY damage that made the quick hire so expensive?", o: ["His salary was too high for the role he was performing", "He upset 3 clients with rude messages, causing a review drop and client churn", "He was absent frequently and didn't complete his training modules", "He leaked confidential client data to a competitor"], c: 1 },
    { q: "What does 'Hire Slow, Fire Fast' mean in practice at Digital Heroes?", o: ["Take at least 6 months to hire anyone, and terminate within 24 hours if issues arise", "Use a minimum 3-step interview process with references, but act quickly on red flags during probation", "Only hire through expensive recruitment agencies who vet candidates thoroughly", "Hire only experienced candidates with 5+ years and fire anyone who misses a single deadline"], c: 1 },
    { q: "According to the People = Revenue framework, a good Shopify Developer generates approximately how much revenue per month?", o: ["₹50,000 - ₹1,00,000 per month", "$500 - $1,000 per month", "$3,000 - $5,000 per month", "$10,000 - $20,000 per month"], c: 2 },
    { q: "A content writer misses 4 deadlines in month 1 and her manager says 'Give her time.' What does the HR Mindset principle say you should do?", o: ["Agree with the manager — everyone deserves at least 3 months to adjust to a new role", "Document the issues and act by month 1 end, not wait 3 months hoping for improvement", "Transfer her to a different team where deadlines are less strict", "Reduce her workload by 50% and check again after 6 months"], c: 1 },
    { q: "Which of the following is a red flag that has a 100% correlation with future problems at DH?", o: ["Asking about work-from-home policy during the interview", "Having a gap of 6 months on the resume due to personal reasons", "Badmouthing previous employers during the interview", "Requesting a salary higher than the posted range"], c: 2 },
    { q: "Digital Heroes grew from ₹9.2 Cr and is targeting ₹75 Cr. According to this module, what role does HR play in this growth?", o: ["HR is a support function that processes paperwork for the real revenue-generating teams", "HR directly enables growth by deciding who joins the team — the engine that powers the revenue target", "HR's role is limited to ensuring legal compliance and managing employee benefits", "HR should focus only on retention since hiring is the department head's responsibility"], c: 1 },
    { q: "When a candidate's first question in an interview is about salary and WFH policy, what does this signal according to DH's red flag list?", o: ["They are practical and transparent about their priorities — a positive sign", "They are not interested in the work itself, which predicts low engagement", "They are simply negotiating, which shows good business sense", "This is completely normal and should not be considered a red flag"], c: 1 },
    { q: "The Bad Hire Cost Calculator formula includes which of these components?", o: ["Only salary paid and re-hiring costs", "Salary + senior's training time + client revenue lost + re-hiring cost + new hire training cost", "Salary + recruiter fee + job board posting fee only", "Salary + legal fees + severance package + outplacement services"], c: 1 },
    { q: "A hiring manager says 'I need someone by Friday, just get anyone in.' What is the correct HR response based on the principles in this module?", o: ["Comply immediately since department heads understand their urgency better than HR", "Push back with data — explain the quality vs speed tradeoff, referencing the cost of bad hires", "Escalate to the CEO and let leadership decide whether to rush", "Post on every job board simultaneously and schedule back-to-back interviews"], c: 1 }
];

const task2Content = `
<h2>📚 TASK 2: Job Descriptions & Talent Sourcing</h2>

<div class="content-section">
<h3>📝 Why Your JD Is Your First Interview</h3>
<p>A Job Description isn't just a list of requirements — it's the first impression of your company. A bad JD attracts bad candidates. A great JD makes A-players want to apply.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Story:</strong><br>
We posted a generic JD for a Shopify developer: "Looking for developer with 2+ years experience. Must know HTML, CSS, JavaScript." We got 200 applications. 195 were unqualified — people who knew basic HTML but had never touched Shopify. We spent 3 days screening garbage.<br><br>
Then we rewrote it with specific requirements: "Shopify developer who has built custom themes using Liquid, created metafield-driven sections, and integrated third-party apps via REST API." We got 40 applications. <strong>15 were qualified.</strong> Same role, same salary — the JD made all the difference.
</div>
</div>

<div class="content-section">
<h3>❌ BAD JD vs ✅ GOOD JD</h3>
<p>Let's compare side by side:</p>

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin:15px 0;">
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px;">
<strong>❌ BAD JD — Shopify Developer</strong><br><br>
"We are looking for a talented developer to join our dynamic team. Must have:<br>
- HTML, CSS, JavaScript<br>
- 2+ years experience<br>
- Good communication<br>
- Team player<br>
- Fast learner<br><br>
Salary: Competitive. Apply now!"
<br><br>
<strong>Problems:</strong> Generic, no Shopify mention, "competitive salary" = red flag, no company info, no growth path, attracts 200 unqualified applications.
</div>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px;">
<strong>✅ GOOD JD — Shopify Developer</strong><br><br>
"<strong>Digital Heroes</strong> builds Shopify stores for global D2C brands ($5M-$50M revenue). We need a developer who can:<br>
- Build custom Shopify themes with <strong>Liquid</strong><br>
- Create dynamic sections with <strong>metafields & JSON schemas</strong><br>
- Integrate apps via <strong>Shopify REST/GraphQL API</strong><br>
- Optimize stores for <strong>90+ PageSpeed scores</strong><br><br>
You'll own 2-3 client stores from day 1. CTC: ₹4-8 LPA based on experience. Growth to Team Lead within 18 months."
<br><br>
<strong>Why it works:</strong> Specific tech, real context, clear CTC, growth path, self-selecting.
</div>
</div>
</div>

<div class="content-section">
<h3>📋 The 8 Essential Elements of a DH Job Description</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">#</th><th style="padding:12px;text-align:left;">Element</th><th style="padding:12px;text-align:left;">Why It Matters</th><th style="padding:12px;text-align:left;">Example</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Company Context</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Candidates want to know WHO you are</td><td style="padding:10px;border:1px solid #E2E8F0;">"Digital Heroes is a Shopify Plus agency serving 200+ global brands"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">2</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Role Impact</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">What they'll OWN, not just DO</td><td style="padding:10px;border:1px solid #E2E8F0;">"You'll own 2-3 client stores and directly impact $100K+ in revenue"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">3</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Must-Have Skills</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Max 5-6 non-negotiable skills</td><td style="padding:10px;border:1px solid #E2E8F0;">"Liquid, JavaScript, REST APIs, Git"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">4</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Nice-to-Have Skills</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Separate clearly from must-haves</td><td style="padding:10px;border:1px solid #E2E8F0;">"React, Node.js, Figma awareness"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day in the Life</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lets candidates self-select out</td><td style="padding:10px;border:1px solid #E2E8F0;">"Morning standup, 4-5 hrs of focused coding, code review, client call"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">6</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>CTC Range</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Saves everyone's time</td><td style="padding:10px;border:1px solid #E2E8F0;">"₹4-8 LPA (base + performance bonus)"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">7</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Growth Path</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">A-players want to grow</td><td style="padding:10px;border:1px solid #E2E8F0;">"Developer → Senior Developer → Team Lead in 18-24 months"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">8</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Work Setup</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Avoids mismatched expectations</td><td style="padding:10px;border:1px solid #E2E8F0;">"In-office (Jaipur), 6 days/week, 10 AM - 7 PM IST"</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Pro Tip:</strong> Never write "competitive salary." It screams "we'll pay you as little as possible." Always give a range. Candidates who see a range are 75% more likely to apply.
</div>
</div>

<div class="content-section">
<h3>🎯 DH-Specific JD Templates</h3>

<h4>Template: Sales Executive</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Digital Heroes | Sales Executive — Shopify Services</strong><br><br>
We're a Shopify Plus partner agency serving 200+ D2C brands globally. Our sales team doesn't cold-call — we close warm leads from Fiverr, Upwork, and direct referrals.<br><br>
<strong>What You'll Do:</strong><br>
- Handle 10-15 inbound leads daily from international clients (US, UK, AU)<br>
- Conduct discovery calls to understand client needs and propose solutions<br>
- Close deals worth $2,000 - $50,000+ per project<br>
- Maintain client relationships for upsell and recurring revenue<br><br>
<strong>Must-Have:</strong> Excellent English (written + spoken), sales experience (any industry), comfort with international clients, hunger to earn<br>
<strong>Nice-to-Have:</strong> E-commerce knowledge, Shopify awareness, Fiverr/Upwork experience<br><br>
<strong>CTC:</strong> ₹3-6 LPA base + uncapped commission (top performers earn ₹12-20 LPA)<br>
<strong>Location:</strong> Jaipur office, 6 days/week
</div>

<h4>Template: Content Writer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Digital Heroes | Content Writer — E-commerce & Brand Storytelling</strong><br><br>
We write for Shopify brands that sell everything from organic skincare to luxury watches. Your words directly drive conversions — this isn't blog filler, it's revenue-generating copy.<br><br>
<strong>What You'll Do:</strong><br>
- Write product descriptions, landing pages, and brand stories for Shopify stores<br>
- Create SEO-optimized blog content for client stores<br>
- Craft email sequences (welcome, abandoned cart, post-purchase)<br>
- Collaborate with designers on homepage and collection page copy<br><br>
<strong>Must-Have:</strong> Portfolio of published content, strong grammar, ability to write for Western audiences, SEO basics<br>
<strong>Nice-to-Have:</strong> E-commerce copywriting experience, Shopify knowledge, email marketing experience<br><br>
<strong>CTC:</strong> ₹2.5-5 LPA based on portfolio quality and experience<br>
<strong>Location:</strong> Jaipur office or remote (after 3-month probation)
</div>
</div>

<div class="content-section">
<h3>🔍 Talent Sourcing: Where to Find A-Players</h3>
<p>Not all channels are equal. Here's how they rank for DH specifically:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Channel</th><th style="padding:12px;text-align:left;">Quality</th><th style="padding:12px;text-align:left;">Cost</th><th style="padding:12px;text-align:left;">Speed</th><th style="padding:12px;text-align:left;">Best For</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Employee Referrals</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">₹5-10K bonus</td><td style="padding:10px;border:1px solid #E2E8F0;">1-2 weeks</td><td style="padding:10px;border:1px solid #E2E8F0;">All roles — best culture fit</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>LinkedIn</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">₹0 (organic) - ₹50K (Recruiter)</td><td style="padding:10px;border:1px solid #E2E8F0;">2-4 weeks</td><td style="padding:10px;border:1px solid #E2E8F0;">Mid-senior, passive candidates</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Naukri</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-15K/month</td><td style="padding:10px;border:1px solid #E2E8F0;">1-2 weeks</td><td style="padding:10px;border:1px solid #E2E8F0;">Bulk hiring, junior roles, pan-India</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Internshala</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">₹5-10K/listing</td><td style="padding:10px;border:1px solid #E2E8F0;">3-5 days</td><td style="padding:10px;border:1px solid #E2E8F0;">Interns, freshers, entry-level</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Instagram/Social</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">₹0-5K (ads)</td><td style="padding:10px;border:1px solid #E2E8F0;">1-3 weeks</td><td style="padding:10px;border:1px solid #E2E8F0;">Creative roles, brand awareness</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Direct Outreach (DMs)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">₹0 (your time)</td><td style="padding:10px;border:1px solid #E2E8F0;">1-4 weeks</td><td style="padding:10px;border:1px solid #E2E8F0;">Niche roles (Shopify devs, Figma designers)</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🏗️ Building a Talent Pipeline</h3>
<p>The worst time to start looking for candidates is when you have an open position. The best HR teams build pipelines BEFORE they need them.</p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Pipeline Building Tactics:</strong>
<ul>
<li><strong>Maintain a "warm list":</strong> Candidates who were good but didn't get selected — reach out when a new role opens</li>
<li><strong>Track Shopify community members:</strong> Active contributors on Shopify forums, GitHub repos, and community Slack channels</li>
<li><strong>Attend/host meetups:</strong> Even a small "Shopify developer meetup" in Jaipur builds a candidate pool</li>
<li><strong>Nurture interns:</strong> Every intern is a potential full-time hire. Track the best ones even after their internship ends</li>
<li><strong>LinkedIn content:</strong> Post about DH culture, team wins, growth stories — passive candidates notice</li>
</ul>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Cost Per Hire by Channel (DH Averages):</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Employee Referral</td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹10,000</strong> (referral bonus)</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">LinkedIn (organic)</td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹5,000</strong> (HR time only)</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Naukri</td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹15,000-25,000</strong> (subscription + screening time)</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Recruitment Agency</td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹50,000-1,00,000</strong> (8-15% of CTC)</td></tr>
</table>
</div>
</div>

<div class="content-section">
<h3>📧 Outreach Templates</h3>

<h4>LinkedIn InMail — Shopify Developer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
Hi [Name],<br><br>
Saw your Shopify theme work on GitHub — really impressed by the [specific project]. At Digital Heroes, we build custom Shopify stores for US/UK D2C brands and are looking for developers who actually understand Liquid at a deep level.<br><br>
Quick details: ₹4-8 LPA, own 2-3 client stores, path to Team Lead in 18 months. Jaipur-based.<br><br>
Worth a 15-min chat? No pressure either way.<br><br>
— [Your Name], HR at Digital Heroes
</div>

<h4>Referral Ask — To Existing Employees</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
Hey team! We're looking for a [Role] who can [specific skill]. Know someone who's great at this? Referral bonus: ₹10,000 on successful hiring (paid after 3-month probation). DM me the name + number — I'll take it from there. No need for a formal resume initially!
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Your JD is your first filter</strong> — a specific JD attracts qualified candidates, a vague JD attracts noise</li>
<li><strong>8 essential elements:</strong> Company context, role impact, must-haves, nice-to-haves, day-in-the-life, CTC range, growth path, work setup</li>
<li><strong>Never write "competitive salary"</strong> — always provide a CTC range</li>
<li><strong>Referrals are the #1 channel</strong> — highest quality, lowest cost, best culture fit</li>
<li><strong>Build pipeline before you need it</strong> — maintain warm lists, track interns, nurture community connections</li>
<li><strong>Personalize outreach</strong> — generic messages get ignored, specific ones get responses</li>
</ol>
</div>
</div>
`;

const task2Quiz = [
    { q: "DH posted a generic developer JD and got 200 applications with 195 unqualified. After rewriting with specific Shopify requirements, they got 40 applications with 15 qualified. What was the key difference?", o: ["The rewritten JD was posted on a premium job board instead of free platforms", "The rewritten JD included specific technical skills like Liquid, metafields, and REST API instead of generic terms", "The rewritten JD offered a higher salary which attracted better candidates", "The rewritten JD was shorter and easier to read"], c: 1 },
    { q: "Which of these is a red flag in a job description that DH should avoid?", o: ["Including a CTC range like '₹4-8 LPA based on experience'", "Writing 'competitive salary' without specifying any numbers", "Listing a 'Day in the Life' section describing typical work activities", "Separating must-have skills from nice-to-have skills"], c: 1 },
    { q: "According to the 8 essential elements of a DH job description, what is the purpose of the 'Day in the Life' section?", o: ["It pads the JD to make it look more professional and detailed", "It lets candidates self-select out if the daily reality doesn't match their expectations", "It is primarily useful for compliance and legal documentation purposes", "It helps the job board algorithm rank the JD higher in search results"], c: 1 },
    { q: "Which sourcing channel ranks HIGHEST in quality for DH hiring across all roles?", o: ["Naukri — broadest reach for the Indian market", "LinkedIn — access to passive candidates", "Employee Referrals — best culture fit, highest quality, lowest cost", "Internshala — great for finding fresh talent"], c: 2 },
    { q: "A referral program offers ₹10,000 per hire but generates zero referrals. According to DH best practices, what is the MOST likely reason?", o: ["The incentive amount is too low — employees need at least ₹50,000", "Employees don't trust the company enough to recommend it to friends", "The process is unclear — employees don't know how to refer, what roles are open, or when they get paid", "The company doesn't have enough employees to generate a meaningful referral pool"], c: 2 },
    { q: "The DH average cost-per-hire through a recruitment agency is approximately:", o: ["₹5,000 - ₹10,000", "₹15,000 - ₹25,000", "₹50,000 - ₹1,00,000 (8-15% of CTC)", "₹2,00,000+"], c: 2 },
    { q: "In the Sales Executive JD template, what key detail about the sales process makes DH different from typical sales roles?", o: ["The sales team works remotely with no office requirement", "The team closes warm inbound leads from Fiverr, Upwork, and referrals rather than cold-calling", "Sales executives only handle Indian clients in Hindi", "The commission is capped at a fixed monthly amount"], c: 1 },
    { q: "What is the BEST approach to building a talent pipeline at DH?", o: ["Only start sourcing when a position opens up to ensure you find candidates with current skills", "Maintain warm lists of previous good candidates, track community members, and nurture intern relationships before positions open", "Rely entirely on recruitment agencies who maintain their own candidate databases", "Post the same JD continuously on all platforms regardless of whether positions are open"], c: 1 },
    { q: "In the LinkedIn InMail outreach template, what technique makes the message effective?", o: ["It starts with a generic compliment about the candidate's profile", "It references specific work by the candidate (e.g., their GitHub project) showing genuine research", "It avoids mentioning salary to create curiosity and drive responses", "It uses formal corporate language to establish authority and professionalism"], c: 1 },
    { q: "A JD lists 15 'required' skills including specific framework versions for a junior developer role. What is the problem with this approach?", o: ["It's perfectly fine — more specific requirements lead to better candidates in all cases", "An inflated requirements list filters out strong candidates who have transferable skills but lack one niche tool", "The main issue is that 15 skills makes the JD too long for job board character limits", "Framework versions should only be listed for senior roles, not junior ones"], c: 1 }
];

const task3Content = `
<h2>📚 TASK 3: Screening & Interview Mastery</h2>

<div class="content-section">
<h3>🔬 The DH Hiring Funnel</h3>
<p>Understanding the numbers helps you set realistic expectations and measure your efficiency:</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Stage</th><th style="padding:12px;text-align:left;">Count</th><th style="padding:12px;text-align:left;">Conversion</th><th style="padding:12px;text-align:left;">Your Time</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Applications received</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>100</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">—</td><td style="padding:10px;border:1px solid #E2E8F0;">2-3 hrs screening</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Phone screens</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">15%</td><td style="padding:10px;border:1px solid #E2E8F0;">2.5 hrs (10 min each)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Full interviews</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">33%</td><td style="padding:10px;border:1px solid #E2E8F0;">5 hrs (1 hr each)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Offers extended</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">40%</td><td style="padding:10px;border:1px solid #E2E8F0;">1 hr (calls + paperwork)</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Hire</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">50%</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>~10.5 hrs total</strong></td></tr>
</tbody>
</table>
<strong>Key Insight:</strong> It takes ~100 applications to make 1 hire. If your funnel converts better, your JD and sourcing are excellent. If it converts worse, fix the top of the funnel first.
</div>
</div>

<div class="content-section">
<h3>📋 Resume Screening Checklist</h3>
<p>You have 30 seconds per resume in the initial scan. Here's what to look for:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Check</th><th style="padding:12px;text-align:left;">✅ Pass</th><th style="padding:12px;text-align:left;">❌ Fail</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Relevant Skills</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lists specific tools/tech from JD</td><td style="padding:10px;border:1px solid #E2E8F0;">Generic skills list ("MS Office, teamwork")</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Tenure</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1+ year at recent jobs</td><td style="padding:10px;border:1px solid #E2E8F0;">3+ jobs with &lt;6 months each</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Progression</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Growing responsibilities over time</td><td style="padding:10px;border:1px solid #E2E8F0;">Same level across all roles</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Quantified Achievements</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"Increased conversions by 25%"</td><td style="padding:10px;border:1px solid #E2E8F0;">"Responsible for website management"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Portfolio (Design/Dev)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Link to live work or GitHub</td><td style="padding:10px;border:1px solid #E2E8F0;">No portfolio for a design/dev role</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Location/Availability</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Jaipur-based or willing to relocate</td><td style="padding:10px;border:1px solid #E2E8F0;">Different city, no mention of relocation</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ DH Red Flags on Resumes:</strong>
<ul>
<li><strong>No portfolio for designers/developers</strong> — If they can't show their work, they likely don't have meaningful work to show</li>
<li><strong>Resume longer than 2 pages for &lt;5 years experience</strong> — Inability to prioritize information</li>
<li><strong>Unexplained gaps + vague descriptions</strong> — "Freelancing" with no client details = probably unemployed</li>
<li><strong>Different email vs LinkedIn name</strong> — Could indicate fake profile or mismatch</li>
<li><strong>Copy-paste resume</strong> — Same resume sent for every job, not tailored to DH's requirements</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📞 Phone Screening: The 10-Minute Filter</h3>
<p>The phone screen is NOT an interview — it's a filter. You have 10 minutes to decide if this person deserves a full hour of the team's time.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>The 10-Minute Phone Screen Script:</strong><br><br>
<strong>Minute 0-1 — Introduction:</strong><br>
"Hi [Name], I'm [Your Name] from Digital Heroes. Thanks for applying for the [Role]. This is a quick 10-minute call to understand your background. Is this a good time?"<br><br>
<strong>Minute 1-3 — Quick Background:</strong><br>
"Tell me about your current role in 2 minutes. What do you do day-to-day?"<br><br>
<strong>Minute 3-5 — Knockout Questions:</strong><br>
1. "What's your current CTC and expected CTC?" (If 2x our budget, stop here)<br>
2. "What's your notice period?" (If 90 days and we need someone in 30, flag it)<br>
3. "Are you comfortable with 6 days/week in-office in Jaipur?" (Non-negotiable for most DH roles)<br>
4. "Why are you looking to change?" (Listen for red flags — badmouthing, only money-motivated)<br><br>
<strong>Minute 5-8 — Role-Specific Probe:</strong><br>
- Developer: "Have you worked with Shopify Liquid? Can you describe a custom section you've built?"<br>
- Sales: "Tell me about your biggest deal. What was the value and how did you close it?"<br>
- Designer: "Do you have a portfolio I can review? What's your preferred design tool?"<br><br>
<strong>Minute 8-10 — Close:</strong><br>
"Thanks [Name]. We'll review and get back to you within 3 business days. Any quick questions?"
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Knockout Question Rules:</strong> If ANY of these answers are dealbreakers, end the call politely. Don't waste 45 more minutes interviewing someone who needs ₹15 LPA when your budget is ₹6 LPA. Be respectful: "Thanks for your time, this role may not be the right fit for your expectations right now, but we'll keep your profile for future opportunities."
</div>
</div>

<div class="content-section">
<h3>🎯 The STAR Interview Method</h3>
<p>STAR stands for <strong>Situation, Task, Action, Result</strong>. It forces candidates to give specific examples instead of vague claims.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Component</th><th style="padding:12px;text-align:left;">What You're Asking</th><th style="padding:12px;text-align:left;">DH Example</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Situation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What was the context?"</td><td style="padding:10px;border:1px solid #E2E8F0;">"Tell me about a time you dealt with an angry client"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What was YOUR responsibility?"</td><td style="padding:10px;border:1px solid #E2E8F0;">"What specifically was expected of you?"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Action</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What did YOU do?" (not the team)</td><td style="padding:10px;border:1px solid #E2E8F0;">"Walk me through the exact steps YOU took"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Result</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What happened? Numbers?"</td><td style="padding:10px;border:1px solid #E2E8F0;">"What was the outcome? Did the client stay?"</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Watch for "We" Answers:</strong> If a candidate always says "We did X, we achieved Y" — they might be taking credit for team work. Push with: "That's great, but what was YOUR specific contribution?" Genuine contributors can always articulate their individual role.
</div>
</div>

<div class="content-section">
<h3>💼 Role-Specific Interview Questions for DH</h3>

<h4>Shopify Developer Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"Walk me through how you'd build a custom Shopify section from scratch — from schema to rendering."</li>
<li>"A client's store loads in 8 seconds. How do you diagnose and fix the performance issue?"</li>
<li>"Explain the difference between Shopify REST API and GraphQL API. When would you use each?"</li>
<li><strong>Live coding test (30 min):</strong> "Build a product card component using Liquid that pulls data from metafields."</li>
</ol>
</div>

<h4>Sales Executive Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"A client says your price is too high. Role-play your response." (Observe: Do they discount immediately or build value?)</li>
<li>"You have 10 leads. How do you prioritize which ones to call first?"</li>
<li>"Tell me about a deal you lost. What happened and what did you learn?"</li>
<li><strong>Written test:</strong> "Write a proposal email for a $5,000 Shopify store redesign project."</li>
</ol>
</div>

<h4>UI/UX Designer Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"Show us your portfolio and explain the design decisions for your best project."</li>
<li>"How would you approach redesigning a Shopify product page to increase conversions?"</li>
<li>"What's the difference between UX and UI? Give a real example from your work."</li>
<li><strong>Design test (2 hrs):</strong> "Design a mobile-first homepage hero section for a premium skincare brand."</li>
</ol>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Story — "The Senior Developer Who Couldn't Code":</strong><br>
We hired a "senior developer" based on a great interview and impressive resume. He talked about React, Node.js, and system architecture beautifully. We skipped the live coding test because he "seemed too senior for that." Week 2: he couldn't write a basic Liquid for loop. His "previous projects" were done by his team, not him. <strong>Now we ALWAYS do a 30-minute live coding test, regardless of seniority level.</strong>
</div>
</div>

<div class="content-section">
<h3>📞 Reference Check Template</h3>
<p>Reference checks are NOT optional at DH. Every hire must have at least 2 references checked. Here's what to ask:</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Reference Check Script (10 minutes):</strong><br><br>
1. "How long did [Candidate] work with you, and in what capacity?"<br>
2. "On a scale of 1-10, how would you rate their work quality? Why that number?"<br>
3. "What were their biggest strengths?"<br>
4. "If you could change ONE thing about their work, what would it be?" (This is where truth comes out)<br>
5. "Were they punctual and reliable with deadlines?"<br>
6. "How did they handle pressure or tight deadlines?"<br>
7. "Would you re-hire them? Why or why not?" <strong>(Most important question)</strong><br>
8. "Is there anything else I should know?"
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Reference Check Red Flags:</strong>
<ul>
<li><strong>Hesitation on "Would you re-hire?"</strong> — If they pause or say "probably" instead of "absolutely," that's a soft no</li>
<li><strong>Vague praise:</strong> "He was a nice person" without mentioning work quality = average performer at best</li>
<li><strong>Only personal references:</strong> Can't provide a single professional reference = problem</li>
<li><strong>"No comment":</strong> Former employer refusing to comment often means legal issues or termination</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚩 Red Flags During Interviews</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Red Flag</th><th style="padding:12px;text-align:left;">What It Signals</th><th style="padding:12px;text-align:left;">Action</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Checking phone during interview</td><td style="padding:10px;border:1px solid #E2E8F0;">Disrespect, low engagement</td><td style="padding:10px;border:1px solid #E2E8F0;">Strong negative — eliminate</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Can't explain own resume</td><td style="padding:10px;border:1px solid #E2E8F0;">Inflated or fabricated experience</td><td style="padding:10px;border:1px solid #E2E8F0;">Probe deeper — likely disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Vague answers to STAR questions</td><td style="padding:10px;border:1px solid #E2E8F0;">No real experience to draw from</td><td style="padding:10px;border:1px solid #E2E8F0;">Ask for another example — if still vague, disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Badmouthing previous employer</td><td style="padding:10px;border:1px solid #E2E8F0;">Attitude problem, will do same to DH</td><td style="padding:10px;border:1px solid #E2E8F0;">Immediate disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Arriving late without informing</td><td style="padding:10px;border:1px solid #E2E8F0;">Poor time management, low respect</td><td style="padding:10px;border:1px solid #E2E8F0;">Note it — one data point, not instant disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Asking about leaves before asking about work</td><td style="padding:10px;border:1px solid #E2E8F0;">Priorities misaligned</td><td style="padding:10px;border:1px solid #E2E8F0;">Note it — probe motivation further</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>The funnel:</strong> 100 applications → 15 screens → 5 interviews → 2 offers → 1 hire</li>
<li><strong>Resume screening = 30 seconds per CV</strong> — look for relevant skills, tenure, and quantified achievements</li>
<li><strong>Phone screen = 10 minutes</strong> — filter for CTC, notice period, location, and role fit before investing interview time</li>
<li><strong>Always use STAR method</strong> — forces specific examples, exposes vague or fabricated experience</li>
<li><strong>Never skip live tests</strong> — the "senior developer who couldn't code" story is your permanent reminder</li>
<li><strong>Reference checks are mandatory</strong> — "Would you re-hire them?" is the most revealing question</li>
</ol>
</div>
</div>
`;

const task3Quiz = [
    { q: "In the DH hiring funnel, how many applications does it typically take to make 1 successful hire?", o: ["25 applications", "50 applications", "100 applications", "200 applications"], c: 2 },
    { q: "During resume screening, which of these is a DH-specific red flag?", o: ["A resume that is exactly 1 page long", "A designer or developer with no portfolio link", "A candidate with 3 years at one company", "A resume that lists quantified achievements like 'increased conversions by 25%'"], c: 1 },
    { q: "The phone screening call should last approximately how long, and what is its purpose?", o: ["30 minutes — to conduct a mini-interview covering all role requirements", "10 minutes — to filter for dealbreakers like CTC, notice period, and location before investing full interview time", "5 minutes — just to confirm the candidate received the interview invitation", "60 minutes — to thoroughly assess both technical skills and cultural fit"], c: 1 },
    { q: "Which of these is a 'knockout question' during the DH phone screen?", o: ["'What's your favorite programming language and why?'", "'Where do you see yourself in 5 years?'", "'Are you comfortable with 6 days/week in-office in Jaipur?' — a non-negotiable for most DH roles", "'Can you tell me about a time you showed leadership?'"], c: 2 },
    { q: "What does STAR stand for in the STAR interview method?", o: ["Skills, Training, Aptitude, Results", "Situation, Task, Action, Result", "Strategy, Tactics, Achievement, Review", "Strengths, Threats, Advantages, Risks"], c: 1 },
    { q: "A candidate keeps answering STAR questions with 'We did X, we achieved Y.' What should you do?", o: ["Accept their answers — teamwork is important and they're showing collaboration skills", "Push with 'What was YOUR specific contribution?' to distinguish individual impact from team credit", "End the interview immediately as this is a clear sign of dishonesty", "Ask them to provide a written summary of their contributions after the interview"], c: 1 },
    { q: "DH hired a 'senior developer' who couldn't write a basic Liquid for loop. What policy change resulted from this incident?", o: ["All developers now need a computer science degree from a Tier-1 college", "A mandatory 30-minute live coding test is now required for ALL developer candidates regardless of seniority", "Senior developers are now only hired through recruitment agencies who pre-screen technical skills", "All developer interviews must now be conducted by the CTO personally"], c: 1 },
    { q: "During a reference check, which question is identified as the MOST important to ask?", o: ["'What were their biggest strengths?'", "'How did they handle pressure or tight deadlines?'", "'Would you re-hire them? Why or why not?'", "'On a scale of 1-10, how would you rate their work quality?'"], c: 2 },
    { q: "A reference hesitates and says 'probably' when asked 'Would you re-hire this candidate?' What does this signal?", o: ["A positive response — 'probably' means they would likely re-hire with minor reservations", "A soft no — hesitation on this question typically indicates significant concerns they're being diplomatic about", "A neutral response that requires no further investigation", "They simply need more time to think about their answer"], c: 1 },
    { q: "A candidate badmouths their previous employer during the interview. According to DH's interview red flags, what action should you take?", o: ["Note it but continue — everyone has bad employer experiences", "Probe deeper to understand if their complaints are legitimate", "Immediate disqualify — this is a strong indicator they will do the same to DH", "Ask for specifics and verify with a reference check before deciding"], c: 2 }
];

const task4Content = `
<h2>📚 TASK 4: Offer, Negotiation & Onboarding</h2>

<div class="content-section">
<h3>💼 Crafting the Perfect Offer</h3>
<p>An offer isn't just a salary number — it's a complete package that must be competitive, clear, and compelling. Here's how DH structures offers:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Component</th><th style="padding:12px;text-align:left;">What It Includes</th><th style="padding:12px;text-align:left;">Example (₹6 LPA Developer)</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Base Salary</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Fixed monthly pay</td><td style="padding:10px;border:1px solid #E2E8F0;">₹40,000/month (₹4.8 LPA)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Performance Bonus</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Quarterly bonus based on KPIs</td><td style="padding:10px;border:1px solid #E2E8F0;">Up to ₹30,000/quarter (₹1.2 LPA)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Incentives</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Role-specific (sales commission, etc.)</td><td style="padding:10px;border:1px solid #E2E8F0;">Variable based on role</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Total CTC</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Base + Bonus + Incentives</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>₹6 LPA</strong></td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📊 DH Salary Bands by Role</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Role</th><th style="padding:12px;text-align:left;">Intern/Trainee</th><th style="padding:12px;text-align:left;">Junior (0-1 yr)</th><th style="padding:12px;text-align:left;">Mid (1-3 yr)</th><th style="padding:12px;text-align:left;">Senior (3+ yr)</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Shopify Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">₹10-15K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2.5-4 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹4-8 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-15 LPA</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sales Executive</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-12K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2-3.5 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3.5-6 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹6-10 LPA + commission</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">UI/UX Designer</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-12K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2-3.5 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3.5-7 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹7-12 LPA</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Content Writer</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-10K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2-3 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3-5 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹5-8 LPA</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Customer Success</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-12K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2-3.5 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3.5-6 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹6-10 LPA</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Project Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">₹10-15K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3-4.5 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹4.5-8 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">₹8-14 LPA</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Important:</strong> These are general bands. The Delhi team has final authority on compensation decisions. Always get approval from leadership before extending an offer above the standard band for any role.
</div>
</div>

<div class="content-section">
<h3>🤝 Negotiation Tactics</h3>

<h4>When to Flex</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li><strong>Exceptional candidate with competing offers:</strong> Going 10-15% above band is worth it for an A-player</li>
<li><strong>Rare skill set:</strong> Shopify Plus architects, senior Liquid developers — supply is limited</li>
<li><strong>Candidate who negotiates professionally:</strong> Shows confidence and market awareness — good sign</li>
<li><strong>Retention risk roles:</strong> If the market is hot for this skill, pay a premium upfront vs losing them in 6 months</li>
</ul>
</div>

<h4>When to Hold Firm</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li><strong>Candidate with no competing offers bluffing:</strong> "I have another offer" without specifics = probably bluffing</li>
<li><strong>Demands significantly above band without justification:</strong> Skills don't match the premium they're requesting</li>
<li><strong>Already at the top of the salary band:</strong> Internal equity matters — overpaying one person demoralizes the team</li>
<li><strong>Candidate fixated only on money:</strong> If salary is the only factor, they'll leave for ₹5K more next month</li>
</ul>
</div>

<h4>Counter-Offer Handling</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Candidate says: "My current company offered me more to stay."</strong><br><br>
<strong>Your response:</strong> "That's great that they value you! But consider this: they only offered more because you were leaving. Why didn't they pay you fairly before? The reasons you wanted to leave — those haven't changed. At DH, we pay fairly from day 1, and you'll have real growth opportunities that led you to look elsewhere in the first place."<br><br>
<strong>Statistical reality:</strong> 80% of people who accept counter-offers leave within 6 months anyway. The relationship is already broken.
</div>
</div>

<div class="content-section">
<h3>📋 The Offer Letter Checklist</h3>
<p>Every DH offer letter must contain these elements:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Item</th><th style="padding:12px;text-align:left;">Details</th><th style="padding:12px;text-align:left;">Why It Matters</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">CTC Breakdown</td><td style="padding:10px;border:1px solid #E2E8F0;">Base salary, performance bonus, incentives</td><td style="padding:10px;border:1px solid #E2E8F0;">Avoids "I thought I'd get more" disputes</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Role & Designation</td><td style="padding:10px;border:1px solid #E2E8F0;">Exact title and department</td><td style="padding:10px;border:1px solid #E2E8F0;">Clarity on expectations</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Reporting Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">Who they report to</td><td style="padding:10px;border:1px solid #E2E8F0;">Clear hierarchy from day 1</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Joining Date</td><td style="padding:10px;border:1px solid #E2E8F0;">Confirmed start date</td><td style="padding:10px;border:1px solid #E2E8F0;">Allows onboarding preparation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Probation Period</td><td style="padding:10px;border:1px solid #E2E8F0;">Typically 3 months at DH</td><td style="padding:10px;border:1px solid #E2E8F0;">Legal protection for both sides</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Work Schedule</td><td style="padding:10px;border:1px solid #E2E8F0;">6 days/week, office hours, location</td><td style="padding:10px;border:1px solid #E2E8F0;">No ambiguity on expectations</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">NDA</td><td style="padding:10px;border:1px solid #E2E8F0;">Non-disclosure agreement</td><td style="padding:10px;border:1px solid #E2E8F0;">Protects client data and company IP</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Notice Period</td><td style="padding:10px;border:1px solid #E2E8F0;">Usually 30 days at DH</td><td style="padding:10px;border:1px solid #E2E8F0;">Ensures proper knowledge transfer</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🚀 Onboarding: The First 90 Days</h3>
<p>Great onboarding is the difference between a new hire who ramps up in 30 days and one who's still confused after 90. Here's the DH framework:</p>

<h4>📅 Day 1 Checklist</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Before they arrive:</strong>
<ul>
<li>☐ Workstation set up with required software</li>
<li>☐ Tool access created: Discord, Slack, GitHub, Figma (role-dependent)</li>
<li>☐ Welcome email sent with joining documents and first-day schedule</li>
<li>☐ Buddy assigned (experienced team member for questions)</li>
<li>☐ Laptop/hardware ready (if applicable)</li>
</ul>
<strong>On Day 1:</strong>
<ul>
<li>☐ Office tour and team introductions</li>
<li>☐ HR orientation: policies, leave system, communication tools</li>
<li>☐ Share the role's SOP document and Training Module link</li>
<li>☐ First 1-on-1 with reporting manager — set expectations for week 1</li>
<li>☐ Verify all tool access works (don't let them sit idle because GitHub isn't set up)</li>
</ul>
</div>

<h4>📅 The 30-60-90 Day Plan</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Milestone</th><th style="padding:12px;text-align:left;">Expected Outcomes</th><th style="padding:12px;text-align:left;">HR Action</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Week 1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Complete role SOP, start training module, attend first standup, understand team workflow</td><td style="padding:10px;border:1px solid #E2E8F0;">Daily check-in with buddy, verify tool access</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 30</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">First project delivered, daily routine established, training module 50%+ complete</td><td style="padding:10px;border:1px solid #E2E8F0;">30-day review with manager, gather feedback</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 60</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Working independently, consistent quality, minimal hand-holding needed</td><td style="padding:10px;border:1px solid #E2E8F0;">60-day review, identify any concerns early</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 90</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Exceeding expectations OR on a PIP</td><td style="padding:10px;border:1px solid #E2E8F0;">Probation decision: confirm, extend, or exit</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Story — "The Priya Incident":</strong><br>
Priya joined as a designer but nobody told her about our Figma conventions for 3 weeks. She used her own file structure, wrong color tokens, and non-standard component naming. Her first 5 designs were all in the wrong format and had to be completely redone.<br><br>
<strong>What went wrong:</strong> No Day 1 onboarding checklist, no buddy assigned, no Figma template pack shared.<br><br>
<strong>What we changed:</strong> Now every new designer gets our Figma template pack, style guide, and component library on Day 1. A design buddy walks them through conventions on their first morning. <strong>Result: New designers now deliver correct-format work by Day 3.</strong>
</div>
</div>

<div class="content-section">
<h3>🛑 Common Onboarding Failures & Prevention</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Failure</th><th style="padding:12px;text-align:left;">Impact</th><th style="padding:12px;text-align:left;">Prevention</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Tool access not ready on Day 1</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire sits idle, feels unwelcome</td><td style="padding:10px;border:1px solid #E2E8F0;">Set up all accounts 2 days before joining</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">No buddy assigned</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire afraid to ask "dumb" questions</td><td style="padding:10px;border:1px solid #E2E8F0;">Assign buddy during offer acceptance stage</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">No first-week structure</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire feels lost, wanders aimlessly</td><td style="padding:10px;border:1px solid #E2E8F0;">Provide a written Day 1-5 schedule with clear tasks</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Manager too busy for 1-on-1</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire gets no direction or feedback</td><td style="padding:10px;border:1px solid #E2E8F0;">Block manager's calendar before the joining date</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">SOPs and processes not shared</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire invents their own (wrong) workflow</td><td style="padding:10px;border:1px solid #E2E8F0;">Share SOP link on Day 1, training module on Day 2</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">No 30-day check-in</td><td style="padding:10px;border:1px solid #E2E8F0;">Problems discovered at day 90 instead of day 30</td><td style="padding:10px;border:1px solid #E2E8F0;">Schedule 30/60/90 reviews at onboarding start</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>CTC = Base + Performance Bonus + Incentives</strong> — always break it down clearly in the offer</li>
<li><strong>Know when to flex and when to hold firm</strong> — A-players with rare skills are worth a premium, but never break internal equity</li>
<li><strong>Counter-offers are traps</strong> — 80% of people who accept them leave within 6 months anyway</li>
<li><strong>Offer letter must include:</strong> CTC breakdown, role, reporting, probation, NDA, notice period, work schedule</li>
<li><strong>Day 1 onboarding:</strong> Tool access ready, buddy assigned, SOP shared, manager 1-on-1 scheduled</li>
<li><strong>30-60-90 framework:</strong> Clear milestones with HR reviews at each stage, probation decision at day 90</li>
</ol>
</div>
</div>
`;

const task4Quiz = [
    { q: "At DH, the standard CTC structure consists of which components?", o: ["Only base salary — bonuses are discretionary and not part of CTC", "Base salary + performance bonus + role-specific incentives", "Base salary + housing allowance + travel reimbursement + food coupons", "Fixed salary with annual increments based on tenure alone"], c: 1 },
    { q: "The typical probation period at Digital Heroes is:", o: ["1 month", "3 months", "6 months", "12 months"], c: 1 },
    { q: "A candidate says 'My current company offered me more to stay.' According to DH's counter-offer handling approach, what statistical reality should you share?", o: ["90% of counter-offer acceptors get promoted within a year", "80% of people who accept counter-offers leave within 6 months anyway", "Counter-offers always include a promotion, making them hard to beat", "Only 10% of counter-offers include a meaningful salary increase"], c: 1 },
    { q: "During salary negotiation, when should HR be willing to flex above the standard band?", o: ["Whenever the candidate asks, to avoid losing them to competitors", "When the candidate claims to have a competing offer, regardless of verification", "For exceptional candidates with rare skill sets or verified competing offers", "Never — salary bands exist for a reason and should never be exceeded"], c: 2 },
    { q: "Which of these is NOT part of the DH Day 1 onboarding checklist?", o: ["Workstation set up with required software", "Tool access created for Discord, Slack, GitHub", "Complete the full training module certification exam", "Buddy assigned and first 1-on-1 with reporting manager scheduled"], c: 2 },
    { q: "In the 30-60-90 day plan, what outcome is expected by Day 30?", o: ["The new hire should be working independently with zero supervision", "First project delivered, daily routine established, training module 50%+ complete", "The new hire should have completed their entire training certification", "The new hire should be leading client calls and managing their own accounts"], c: 1 },
    { q: "What happened in the 'Priya Incident' and what was the root cause?", o: ["Priya was a poor designer who couldn't follow instructions — she was fired during probation", "Priya quit after 1 week because she didn't like the office culture and team dynamics", "Nobody shared Figma conventions with her for 3 weeks, so her first 5 designs were all in the wrong format", "Priya's laptop broke on Day 1 and IT took 3 weeks to provide a replacement"], c: 2 },
    { q: "What is the single most important thing to prevent onboarding failures at DH?", o: ["Hiring only experienced candidates who don't need onboarding support", "Having all tool access, buddy assignment, SOPs, and review schedules ready BEFORE the new hire starts", "Letting the new hire figure things out on their own to test their initiative and problem-solving skills", "Assigning the new hire to the easiest projects for the first 6 months"], c: 1 },
    { q: "According to DH's negotiation guidelines, which scenario is a sign that HR should hold firm on salary?", o: ["A candidate with a verified competing offer from a reputable company offering 15% more", "A rare Shopify Plus architect in a hot market where supply is limited", "A candidate who seems fixated only on money and shows no interest in the role or growth path", "A candidate who negotiates professionally and provides market data to support their ask"], c: 2 },
    { q: "The DH offer letter must include all of the following EXCEPT:", o: ["CTC breakdown showing base salary, performance bonus, and incentives", "NDA (Non-Disclosure Agreement) to protect client data", "A guaranteed promotion timeline with specific dates and titles", "Notice period, probation terms, and work schedule details"], c: 2 }
];

const task5Content = `
<h2>📚 TASK 5: Performance Management, Policies & Employee Relations</h2>

<div class="content-section">
<h3>📊 Performance Review Framework at DH</h3>
<p>Performance management isn't a once-a-year event — it's a continuous process. Here's how DH structures it:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Cadence</th><th style="padding:12px;text-align:left;">What Happens</th><th style="padding:12px;text-align:left;">Who's Responsible</th><th style="padding:12px;text-align:left;">Output</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Daily</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">EOD reports submitted, standup attendance</td><td style="padding:10px;border:1px solid #E2E8F0;">Employee + Team Lead</td><td style="padding:10px;border:1px solid #E2E8F0;">Activity log</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Weekly</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1-on-1 check-in with manager (15 min)</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + Employee</td><td style="padding:10px;border:1px solid #E2E8F0;">Quick feedback, blockers addressed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Monthly</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Formal performance review against KPIs</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Documented review with ratings</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Quarterly</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Appraisal cycle — promotion, bonus, PIP decisions</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Manager + Leadership</td><td style="padding:10px;border:1px solid #E2E8F0;">Increment/bonus/PIP/termination</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎯 KRA/KPI Tracking</h3>
<p>Every role at DH has defined KRAs (Key Result Areas) and KPIs (Key Performance Indicators). As HR, you need to understand how to measure what matters.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Example — Developer KPIs:</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#334155;color:white;"><th style="padding:10px;text-align:left;">KPI</th><th style="padding:10px;text-align:left;">Target</th><th style="padding:10px;text-align:left;">How to Measure</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Tasks completed/week</td><td style="padding:8px;border:1px solid #E2E8F0;">15-20 tasks</td><td style="padding:8px;border:1px solid #E2E8F0;">Project management tool</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Bug rate</td><td style="padding:8px;border:1px solid #E2E8F0;">&lt;5% revision rate</td><td style="padding:8px;border:1px solid #E2E8F0;">QA feedback logs</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Client satisfaction</td><td style="padding:8px;border:1px solid #E2E8F0;">4.5+ stars average</td><td style="padding:8px;border:1px solid #E2E8F0;">Client feedback forms</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Response time</td><td style="padding:8px;border:1px solid #E2E8F0;">&lt;15 min during work hours</td><td style="padding:8px;border:1px solid #E2E8F0;">Chat/message timestamps</td></tr>
</tbody>
</table>
<strong>HR's role:</strong> Ensure managers are tracking KPIs consistently, help interpret data, and flag performance issues early — don't wait for quarterly reviews to discover someone has been underperforming for 3 months.
</div>
</div>

<div class="content-section">
<h3>💬 The Difficult Conversation Framework: SBI</h3>
<p>SBI stands for <strong>Situation, Behavior, Impact</strong>. Use it whenever you need to give tough feedback without making it personal.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Component</th><th style="padding:12px;text-align:left;">What You Say</th><th style="padding:12px;text-align:left;">Example</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Situation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">When and where it happened</td><td style="padding:10px;border:1px solid #E2E8F0;">"In yesterday's client call at 3 PM..."</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Behavior</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">What they DID (not who they ARE)</td><td style="padding:10px;border:1px solid #E2E8F0;">"...you told the client we could deliver in 2 days without checking with the dev team..."</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Impact</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">What happened as a result</td><td style="padding:10px;border:1px solid #E2E8F0;">"...which created a false expectation. The dev team needs 5 days, and now the client feels we lied."</td></tr>
</tbody>
</table>

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin:15px 0;">
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px;">
<strong>❌ Wrong Way:</strong><br>
"You're always making promises you can't keep. You need to stop being so careless."<br><br>
<em>This is personal, vague, and puts them on the defensive.</em>
</div>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px;">
<strong>✅ Right Way (SBI):</strong><br>
"In yesterday's client call, you committed to a 2-day delivery without checking with dev. This created a false expectation with the client. Going forward, please confirm timelines with the team before committing."<br><br>
<em>This is specific, factual, and actionable.</em>
</div>
</div>
</div>

<div class="content-section">
<h3>📋 PIP — Performance Improvement Plan</h3>
<p>A PIP is the formal last chance before termination. It's not punishment — it's documentation and a clear path to improvement.</p>

<h4>When to Issue a PIP</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li>Employee has been counseled verbally at least twice about the same issue</li>
<li>Performance consistently falls below KPI targets for 30+ days</li>
<li>Behavioral issues persist after verbal and written warnings</li>
<li>Probation review shows insufficient progress for role requirements</li>
</ul>
<strong>Do NOT use PIP for:</strong> First-time minor issues, personal emergencies, or issues that haven't been communicated clearly to the employee yet.
</div>

<h4>PIP Template</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Performance Improvement Plan</strong><br><br>
<strong>Employee:</strong> [Name] | <strong>Role:</strong> [Title] | <strong>Manager:</strong> [Name]<br>
<strong>PIP Start Date:</strong> [Date] | <strong>PIP End Date:</strong> [+30 days]<br><br>
<strong>Current Performance Issues:</strong><br>
1. [Specific issue with data — e.g., "Missed 8 of 12 deadlines in March"]<br>
2. [Specific issue with data — e.g., "Client satisfaction score: 3.2/5 vs target of 4.5/5"]<br><br>
<strong>Expected Improvements:</strong><br>
1. [Measurable target — e.g., "Complete 100% of assigned tasks by deadline"]<br>
2. [Measurable target — e.g., "Achieve 4.0+ client satisfaction score"]<br><br>
<strong>Support Provided:</strong><br>
1. Weekly 1-on-1 with manager for coaching<br>
2. Reduced workload for first 2 weeks<br>
3. Training module completion support<br><br>
<strong>Consequences:</strong> If targets are not met by [PIP End Date], employment may be terminated.<br><br>
<strong>Signatures:</strong> Employee ___ | Manager ___ | HR ___ | Date ___
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Critical:</strong> A PIP must be <strong>signed by the employee</strong>. If they refuse to sign, note "Employee declined to sign" with a witness present. The PIP is still valid — the signature is for acknowledgment, not agreement.
</div>
</div>

<div class="content-section">
<h3>📜 DH Policy Reference</h3>

<h4>Leave Policy</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Leave Type</th><th style="padding:12px;text-align:left;">Allocation</th><th style="padding:12px;text-align:left;">Rules</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Earned Leave (EL)</td><td style="padding:10px;border:1px solid #E2E8F0;">1 per month (12/year)</td><td style="padding:10px;border:1px solid #E2E8F0;">Apply 3+ days in advance, manager approval required</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sick Leave (SL)</td><td style="padding:10px;border:1px solid #E2E8F0;">6 per year</td><td style="padding:10px;border:1px solid #E2E8F0;">Medical certificate for 2+ consecutive days</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Public Holidays</td><td style="padding:10px;border:1px solid #E2E8F0;">As per DH calendar</td><td style="padding:10px;border:1px solid #E2E8F0;">Announced at start of year</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Unapproved Absence</td><td style="padding:10px;border:1px solid #E2E8F0;">N/A</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#EF4444;">Salary deduction + penalty as per policy</strong></td></tr>
</tbody>
</table>

<h4>Attendance Policy</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li><strong>Login time:</strong> As per role schedule (typically 10 AM IST)</li>
<li><strong>EOD report:</strong> Mandatory daily submission before leaving</li>
<li><strong>Response time SLA:</strong> 15 minutes during work hours for messages</li>
<li><strong>Late arrivals:</strong> 3 late arrivals in a month = warning; persistent lateness = salary deduction</li>
<li><strong>Unapproved WFH:</strong> Working from home without prior approval is treated as absence</li>
</ul>
</div>

<h4>Employee Contracts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Key contract components HR must ensure are signed:</strong>
<ul>
<li><strong>Employment Agreement:</strong> Role, CTC, probation, termination terms</li>
<li><strong>NDA (Non-Disclosure Agreement):</strong> Cannot share client data, company strategies, or proprietary tools</li>
<li><strong>Non-Compete (where applicable):</strong> Cannot join a direct competitor within 6 months of leaving</li>
<li><strong>IT Policy Agreement:</strong> Acceptable use of company devices, data security, password policies</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⚖️ Conflict Resolution & Employee Relations</h3>
<p>Conflict is inevitable. How you handle it defines the culture. Here's DH's approach:</p>

<h4>The Mediation Process</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Listen separately:</strong> Meet with each person individually first. Don't bring them together until you understand both sides.</li>
<li><strong>Identify the root cause:</strong> Is it a personality clash, unclear responsibilities, workload imbalance, or a genuine grievance?</li>
<li><strong>Facilitate a joint conversation:</strong> Set ground rules — no interrupting, focus on behaviors not personalities, solution-oriented.</li>
<li><strong>Agree on action items:</strong> Written agreement on what changes each person will make.</li>
<li><strong>Follow up:</strong> Check in after 1 week and 1 month. If the issue persists, escalate.</li>
</ol>
</div>

<h4>Real DH Scenarios</h4>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 1: "Developer A and Developer B both claim credit for the same project"</strong><br><br>
<strong>Investigation:</strong> Check Git commit history, project management tool logs, and Slack messages to see who actually did the work.<br>
<strong>Resolution:</strong> If both contributed, acknowledge both publicly with specific contributions noted. If one person is falsely claiming credit, address it privately using SBI framework. Document the finding.
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 2: "Employee comes late every day for 2 weeks but work quality is excellent"</strong><br><br>
<strong>Approach:</strong> Don't ignore it just because their work is good. Rules apply equally. Meet privately: "Your work quality is excellent, and I appreciate that. However, consistent late arrivals set a precedent for the team. Is there something we can help with — a schedule adjustment, a personal issue?" Address root cause while reinforcing that attendance policy applies to everyone.
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 3: "A team member is spreading negativity about a new policy change"</strong><br><br>
<strong>Approach:</strong> Don't punish opinions — address them. Meet privately: "I've heard you have concerns about the new policy. I'd like to understand your perspective." Listen genuinely. If their concern is valid, escalate the feedback upward. If they're just being resistant to change, explain the reasoning and ask for their cooperation. If negativity continues after the conversation, issue a formal warning — venting in private to HR is fine, spreading negativity to the team is not.
</div>
</div>

<div class="content-section">
<h3>📈 When to Escalate vs. When to Handle Yourself</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Handle Yourself</th><th style="padding:12px;text-align:left;">Escalate to Leadership</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Minor interpersonal conflicts between peers</td><td style="padding:10px;border:1px solid #E2E8F0;">Harassment or discrimination allegations</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Attendance issues (first occurrence)</td><td style="padding:10px;border:1px solid #E2E8F0;">Theft or fraud</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Performance coaching conversations</td><td style="padding:10px;border:1px solid #E2E8F0;">Legal threats from an employee</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Leave policy clarifications</td><td style="padding:10px;border:1px solid #E2E8F0;">Safety or security concerns</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Team member venting about workload</td><td style="padding:10px;border:1px solid #E2E8F0;">Repeated policy violations after formal warnings</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">New hire adjustment issues</td><td style="padding:10px;border:1px solid #E2E8F0;">Salary disputes involving leadership decisions</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Performance management is continuous:</strong> Daily EOD reports, weekly 1-on-1s, monthly reviews, quarterly appraisals</li>
<li><strong>Use SBI for difficult conversations:</strong> Situation + Behavior + Impact — never make it personal</li>
<li><strong>PIP is a formal last chance:</strong> Must include specific issues, measurable targets, support provided, and a 30-day timeline</li>
<li><strong>Leave policy:</strong> 12 EL + 6 SL per year, advance application required, unapproved absence = penalty</li>
<li><strong>Conflict resolution:</strong> Listen separately first, identify root cause, facilitate joint conversation, agree on action items, follow up</li>
<li><strong>Escalate serious matters:</strong> Harassment, fraud, legal threats, and safety concerns go to leadership immediately</li>
</ol>
</div>
</div>
`;

const task5Quiz = [
    { q: "At DH, the performance review cadence includes which of these regular touchpoints?", o: ["Annual review only — once a year is sufficient for most companies", "Daily EOD reports, weekly 1-on-1s, monthly KPI reviews, and quarterly appraisals", "Quarterly reviews only, with no daily or weekly tracking requirements", "Monthly all-hands meetings where everyone's performance is discussed publicly"], c: 1 },
    { q: "What does the SBI framework stand for, and when should you use it?", o: ["Strategy, Budget, Implementation — use it for project planning meetings", "Situation, Behavior, Impact — use it for giving tough feedback without making it personal", "Skills, Benchmarks, Indicators — use it for setting KPI targets", "Summary, Background, Insight — use it for writing employee reports"], c: 1 },
    { q: "Which of the following is the WRONG way to give feedback according to the SBI framework?", o: ["'In yesterday's client call, you committed to a 2-day delivery without checking with dev.'", "'Your behavior created a false expectation with the client about our delivery timeline.'", "'You're always making promises you can't keep. You need to stop being so careless.'", "'Going forward, please confirm timelines with the team before committing to the client.'"], c: 2 },
    { q: "When should a PIP (Performance Improvement Plan) be issued?", o: ["Immediately when any performance issue is first noticed, to create documentation from day one", "After the employee has been counseled verbally at least twice and performance consistently falls below KPIs for 30+ days", "Only when leadership requests it — HR cannot issue PIPs independently", "When an employee asks for one as a tool to help them improve"], c: 1 },
    { q: "A PIP at DH typically has a timeline of:", o: ["7 days", "14 days", "30 days", "90 days"], c: 2 },
    { q: "If an employee refuses to sign their PIP document, what happens?", o: ["The PIP is invalid and cannot be enforced without the employee's signature", "HR must escalate to a lawyer to force the employee to sign the document", "Note 'Employee declined to sign' with a witness present — the PIP is still valid", "The employee is automatically terminated for insubordination"], c: 2 },
    { q: "According to DH's leave policy, how many Earned Leaves does an employee receive per year?", o: ["6 per year (half a day per month)", "12 per year (1 per month)", "18 per year (1.5 per month)", "24 per year (2 per month)"], c: 1 },
    { q: "Two developers both claim credit for the same project. How should HR investigate this?", o: ["Ask the team lead who they think did the work and go with their opinion", "Check Git commit history, project management tool logs, and Slack messages to verify contributions", "Give both developers equal credit to avoid conflict and move on", "Issue a warning to both developers for creating unnecessary drama"], c: 1 },
    { q: "An employee comes late every day for 2 weeks but their work quality is excellent. What is the correct HR approach?", o: ["Ignore it — results matter more than attendance and their work quality proves they're a good employee", "Acknowledge their excellent work quality but address the lateness privately, as attendance policy applies equally to everyone", "Immediately issue a formal written warning without any conversation", "Reduce their salary proportional to the late hours without discussing it"], c: 1 },
    { q: "Which of these situations should HR handle themselves versus escalate to leadership?", o: ["Harassment allegations — handle yourself to avoid escalation", "Theft or fraud — handle yourself to keep it confidential within HR", "Minor interpersonal conflicts between peers — handle yourself using the mediation process", "Legal threats from an employee — handle yourself using standard conflict resolution"], c: 2 }
];
const task6Content = `
<h2>📋 TASK 6: Offboarding, Remote Teams & Agency HR</h2>

<div class="content-section">
<h3>Part 1: The Exit Process — Doing It Right</h3>
<p>People leave. That's normal. But HOW they leave determines whether you lose 2 weeks of work or have a smooth transition. At DH, we've learned this the hard way.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real Story:</strong> When Amit left without proper knowledge transfer, we lost 2 weeks on his client projects. Three active Shopify stores had pending customizations that nobody else understood. Now we have a mandatory 7-day handover checklist — no exceptions.
</div>

<h4>Exit Process Checklist (In Order)</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Step</th>
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">Timeline</th>
<th style="padding:12px;text-align:left;">Owner</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">1</td><td style="padding:12px;">Resignation letter received (written/email)</td><td style="padding:12px;">Day 0</td><td style="padding:12px;">Employee</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">2</td><td style="padding:12px;">HR acknowledges & confirms notice period</td><td style="padding:12px;">Within 24 hours</td><td style="padding:12px;">HR</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">3</td><td style="padding:12px;">Manager assigns knowledge transfer plan</td><td style="padding:12px;">Day 1-2</td><td style="padding:12px;">Manager + Employee</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">4</td><td style="padding:12px;">Knowledge transfer execution (7-day minimum)</td><td style="padding:12px;">Day 2-9+</td><td style="padding:12px;">Employee</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">5</td><td style="padding:12px;">Exit interview conducted by HR</td><td style="padding:12px;">Last week</td><td style="padding:12px;">HR</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">6</td><td style="padding:12px;">Asset recovery (laptop, ID, keys)</td><td style="padding:12px;">Last day</td><td style="padding:12px;">HR + IT</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">7</td><td style="padding:12px;">Access revocation (all systems)</td><td style="padding:12px;">Last day EOD</td><td style="padding:12px;">IT/Admin</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">8</td><td style="padding:12px;">Full and final settlement</td><td style="padding:12px;">Within 30 days</td><td style="padding:12px;">Finance + HR</td></tr>
</tbody>
</table>

<h4>Notice Period Enforcement</h4>
<p>Notice period is as per the offer letter — typically 30 days. But what happens when someone wants to leave immediately?</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Scenario</th>
<th style="padding:12px;text-align:left;">DH Policy</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Employee wants to leave immediately</td><td style="padding:12px;">Must serve notice OR pay notice period salary in lieu. Manager can approve early release if KT is complete.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Employee stops showing up (absconding)</td><td style="padding:12px;">3 consecutive no-shows without information = termination letter sent. No experience letter. Full & final withheld for 60 days.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">DH terminates the employee</td><td style="padding:12px;">Notice period salary paid. Immediate access revocation. Experience letter provided unless terminated for misconduct.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Intern wants to leave mid-training</td><td style="padding:12px;">7-day notice preferred. No financial obligations. Internship certificate only if minimum 30 days completed.</td></tr>
</tbody>
</table>

<h4>Knowledge Transfer Template</h4>
<p>Every departing employee must complete this before their last day:</p>
<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📄 KT Document Must Include:</strong>
<ul>
<li><strong>Active Projects:</strong> List every project, its status, deadlines, and client contact</li>
<li><strong>Credentials & Access:</strong> All logins documented (NOT passwords — those get reset)</li>
<li><strong>Process Documentation:</strong> How they do recurring tasks, any shortcuts or automations</li>
<li><strong>Client Context:</strong> Important client preferences, history of issues, relationship notes</li>
<li><strong>Pending Items:</strong> Anything unfinished with clear handover instructions</li>
<li><strong>File Locations:</strong> Where everything lives — Google Drive, GitHub repos, local files</li>
</ul>
</div>

<h4>Exit Interview Questions That Reveal Real Issues</h4>
<p>Don't just ask "why are you leaving?" — dig deeper with these:</p>
<ul>
<li>"What would have made you stay?" — Reveals fixable issues</li>
<li>"Did you feel your work was recognized?" — Tests recognition culture</li>
<li>"How was your relationship with your direct manager?" — #1 reason people leave</li>
<li>"Would you recommend DH to a friend? Why or why not?" — The ultimate test</li>
<li>"What's one thing you wish was different about working here?" — Actionable feedback</li>
<li>"Were there growth opportunities you felt you didn't get?" — Tests development culture</li>
</ul>

<h4>Asset Recovery & Access Revocation</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Category</th>
<th style="padding:12px;text-align:left;">Items to Recover/Revoke</th>
<th style="padding:12px;text-align:left;">When</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Physical Assets</td><td style="padding:12px;">Laptop, charger, mouse, headset, ID card, office keys</td><td style="padding:12px;">Last day</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Code & Design</td><td style="padding:12px;">GitHub org removal, Figma team removal, Bitbucket access</td><td style="padding:12px;">Last day EOD</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Communication</td><td style="padding:12px;">Discord server removal, Slack deactivation, email deactivation</td><td style="padding:12px;">Last day EOD</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Client Access</td><td style="padding:12px;">Shopify collaborator removal, client Slack/Discord removal</td><td style="padding:12px;">Last day EOD</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Admin Tools</td><td style="padding:12px;">Google Workspace, project management tools, shared drives</td><td style="padding:12px;">Last day EOD</td></tr>
</tbody>
</table>

<h4>Full and Final Settlement</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ F&F Settlement Includes:</strong>
<ul>
<li>Pending salary (pro-rated for days worked)</li>
<li>Leave encashment (for unused earned leaves, if applicable)</li>
<li>Incentives/commissions earned but not yet paid</li>
<li>Minus: Notice period shortfall (if notice not served)</li>
<li>Minus: Any salary advance recovery</li>
<li>Minus: Asset damage/loss deductions (if any)</li>
<li>Experience letter — issued after F&F is settled</li>
</ul>
<p><strong>Timeline:</strong> F&F must be processed within 30 days of last working day.</p>
</div>
</div>

<div class="content-section">
<h3>Part 2: Managing Remote & Hybrid Teams</h3>

<h4>DH WFH Policy</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Important:</strong> DH is primarily office-first. WFH is not a default option — it's granted on a case-by-case basis with manager and HR approval.
</div>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">WFH Allowed</th>
<th style="padding:12px;text-align:left;">WFH NOT Allowed</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;">
<td style="padding:12px;">
<ul>
<li>Medical reasons (with doctor's note for 2+ days)</li>
<li>Family emergencies (pre-approved)</li>
<li>Senior employees with proven track record</li>
<li>Specific roles that don't need office presence</li>
</ul>
</td>
<td style="padding:12px;">
<ul>
<li>During probation period</li>
<li>Interns (except special circumstances)</li>
<li>Employees with attendance issues</li>
<li>"I just feel like working from home today"</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h4>Remote Work Monitoring</h4>
<p>If someone is approved for WFH, these are non-negotiable:</p>
<ul>
<li><strong>Discord Online:</strong> Must be visible online during full work hours</li>
<li><strong>EOD Reports:</strong> Daily end-of-day report on Discord — what was done, hours spent</li>
<li><strong>Response Times:</strong> Same SLAs as office — client messages within 5 min, internal within 15 min</li>
<li><strong>Video Calls:</strong> Camera ON for team meetings and standups</li>
<li><strong>Screen Sharing:</strong> Must be ready to share screen if manager requests during work hours</li>
</ul>

<h4>Remote Work Abuse Detection</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚩 Red Flags HR Should Watch For:</strong>
<ul>
<li>Shows "Online" on Discord but doesn't respond for 30+ minutes repeatedly</li>
<li>EOD reports are vague — "worked on project" with no specifics</li>
<li>Output drops significantly compared to office days</li>
<li>Unavailable during core hours without prior notice</li>
<li>Frequent "internet issues" or "power cuts" without resolution</li>
</ul>
<p><strong>Action:</strong> First occurrence = verbal warning. Second = revoke WFH privilege. Third = written warning.</p>
</div>

<h4>Virtual Team Building</h4>
<ul>
<li>Friday virtual coffee (15 min, no work talk)</li>
<li>Online game sessions (once a month)</li>
<li>Virtual lunch — everyone orders food, eats on video call</li>
<li>Show & Tell: Team members demo something they learned</li>
<li>Remote birthday celebrations with delivery surprises</li>
</ul>
</div>

<div class="content-section">
<h3>Part 3: Agency-Specific HR Challenges</h3>

<h4>Hiring for Creative Agencies: Portfolio Over Resume</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 DH Hiring Truth:</strong> At a digital agency like DH, a stunning portfolio with 3 real projects beats a 5-page resume with 8 years of "experience" at companies nobody's heard of. Always ask to see the WORK.
</div>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Role</th>
<th style="padding:12px;text-align:left;">What to Evaluate</th>
<th style="padding:12px;text-align:left;">Portfolio Must-Haves</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Shopify Developer</td><td style="padding:12px;">Live store links, custom code samples</td><td style="padding:12px;">3+ live stores, GitHub profile</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">UI/UX Designer</td><td style="padding:12px;">Figma files, before/after designs</td><td style="padding:12px;">5+ projects on Behance/Dribbble</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Content Writer</td><td style="padding:12px;">Published articles, writing samples</td><td style="padding:12px;">5+ diverse writing samples</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Sales Executive</td><td style="padding:12px;">Communication skills, past numbers</td><td style="padding:12px;">Pitch recording or live demo</td></tr>
</tbody>
</table>

<h4>Fiverr-Specific Challenges</h4>
<p>DH operates heavily on Fiverr, which means client-facing roles need a different skill set:</p>
<ul>
<li><strong>Communication Speed:</strong> Fiverr clients expect responses within minutes, not hours</li>
<li><strong>Upselling Ability:</strong> Turn a $500 project into a $5,000 retainer</li>
<li><strong>Review Management:</strong> One 3-star review can tank a profile — hire people who understand this pressure</li>
<li><strong>Multi-tasking:</strong> Handling 5-10 active orders simultaneously is normal</li>
</ul>

<h4>Scaling Rapidly: Hiring 5-10 People in a Month</h4>
<p>When growth demands fast hiring:</p>
<ol>
<li><strong>Pre-build a pipeline:</strong> Always be sourcing — don't start from zero when a position opens</li>
<li><strong>Batch interviews:</strong> Schedule 5-6 candidates back-to-back on specific days</li>
<li><strong>Parallel onboarding:</strong> Group new joiners and run onboarding together</li>
<li><strong>Use interns as pipeline:</strong> Internshala → 30-day training → performance-based conversion</li>
<li><strong>Referral bonuses:</strong> Incentivize existing employees to refer quality candidates</li>
</ol>

<h4>The Intern Pipeline: Internshala → Training → Conversion</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Stage</th>
<th style="padding:12px;text-align:left;">Duration</th>
<th style="padding:12px;text-align:left;">Criteria</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Internshala Application</td><td style="padding:12px;">Day 0</td><td style="padding:12px;">Resume + basic test/portfolio</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Screening Call</td><td style="padding:12px;">Day 1-3</td><td style="padding:12px;">Communication, attitude, basic skills</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Training Period</td><td style="padding:12px;">30 days</td><td style="padding:12px;">Complete role-specific training module + certification</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Trial Projects</td><td style="padding:12px;">Day 30-60</td><td style="padding:12px;">Handle real (low-risk) projects with supervision</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Conversion Decision</td><td style="padding:12px;">Day 60-90</td><td style="padding:12px;">Performance review → Full-time offer or exit</td></tr>
</tbody>
</table>

<h4>Managing Freelancers vs Full-Time Employees</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Factor</th>
<th style="padding:12px;text-align:left;">Full-Time at DH</th>
<th style="padding:12px;text-align:left;">Freelancer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Availability</td><td style="padding:12px;">Fixed hours, always available</td><td style="padding:12px;">Project-based, limited hours</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Training</td><td style="padding:12px;">Full DH training pipeline</td><td style="padding:12px;">Must already have skills</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Cost</td><td style="padding:12px;">Fixed monthly salary</td><td style="padding:12px;">Higher per-hour, no benefits</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Client Interaction</td><td style="padding:12px;">Direct client access allowed</td><td style="padding:12px;">Usually no direct client access</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Best For</td><td style="padding:12px;">Core team, ongoing work</td><td style="padding:12px;">Overflow work, specialized skills</td></tr>
</tbody>
</table>
</div>
`;

const task6Quiz = [
    { q: "What is the FIRST step in the DH exit process?", o: ["Conduct exit interview", "Receive resignation letter from employee", "Revoke system access", "Process full and final settlement"], c: 1 },
    { q: "How long is the mandatory knowledge transfer period at DH?", o: ["3 days", "5 days", "7 days minimum", "14 days"], c: 2 },
    { q: "What happens if an employee stops showing up for 3 consecutive days without information?", o: ["WFH is assumed", "Salary is docked but they keep their job", "Termination letter is sent — no experience letter, F&F withheld 60 days", "Manager calls them daily until they return"], c: 2 },
    { q: "Within how many days must full and final settlement be processed after last working day?", o: ["7 days", "15 days", "30 days", "45 days"], c: 2 },
    { q: "Which of these is NOT part of the DH WFH monitoring requirements?", o: ["Discord must show online during work hours", "Daily EOD report on Discord", "Installing screen recording software on personal laptop", "Camera ON for team meetings"], c: 2 },
    { q: "What is the correct action for the FIRST occurrence of remote work abuse (e.g., online but unresponsive)?", o: ["Immediate termination", "Written warning", "Verbal warning", "Revoke WFH privilege"], c: 2 },
    { q: "When hiring for a digital agency like DH, what matters MORE than a resume?", o: ["Years of experience", "Educational qualifications", "Portfolio with real project work", "Number of certifications"], c: 2 },
    { q: "What is the typical intern pipeline flow at DH?", o: ["LinkedIn → Interview → Hire", "Internshala → Screening → Training → Trial Projects → Conversion", "Campus placement → Direct hire", "Referral → Immediate full-time offer"], c: 1 },
    { q: "Which access must be revoked on an employee's last day?", o: ["Only GitHub access", "Only Discord access", "All access — GitHub, Figma, Discord, Shopify, Google Workspace, email", "Only client-facing tool access"], c: 2 },
    { q: "At what point in the intern pipeline does the conversion decision happen?", o: ["Day 7", "Day 30", "Day 60-90 based on performance review", "After 6 months"], c: 2 }
];

const task7Content = `
<h2>🏢 TASK 7: Digital Heroes Deep Dive</h2>

<div class="content-section">
<h3>The DH Manifesto: 7 Non-Negotiable Principles</h3>
<p>These aren't suggestions. These aren't "nice to haves." These are the 7 principles that define who we are at Digital Heroes. Every employee — from intern to director — lives by these. HR's job is to enforce them, coach them, and hire for them.</p>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 1: Instant Reply = Respect</h4>
<p>When you see a message, you reply. Not in 5 minutes. Not "after I finish this." <strong>Immediately.</strong> Even if the reply is "Noted, will check and get back in 10 minutes." Leaving someone on read is disrespectful — to clients AND teammates.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 2: Ownership Over Excuses</h4>
<p>"The client didn't send the assets" is not a valid excuse. Did you FOLLOW UP? Did you offer alternatives? Did you escalate? At DH, you own the outcome, not just the task. If something fails, the first question is: "What did YOU do to prevent it?"</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 3: Quality Is Non-Negotiable</h4>
<p>A 4-star review on Fiverr is a FAILURE at DH. We don't ship "good enough." Every deliverable — code, design, content, client communication — must be 5-star worthy. If you wouldn't proudly show it to the CEO, don't send it to the client.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 4: Transparency Always</h4>
<p>Made a mistake? Say it immediately. Project running late? Flag it on day 1, not day 7. Client unhappy? Escalate before it becomes a crisis. Hiding problems is worse than having them.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 5: Growth Mindset</h4>
<p>"I don't know how to do this" is acceptable. "I don't want to learn how to do this" is not. DH invests heavily in training — but training only works if you want to grow. Learn or leave. There's no third option.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 6: Team Over Individual</h4>
<p>Your teammate needs help finishing a project at 7 PM? You stay. Someone's stuck on a bug? You help before starting your own task. Individual glory means nothing if the team fails. We win together or we lose together.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<h4>Principle 7: Client First, Always</h4>
<p>The client's success IS our success. Every decision — technical, design, timeline — should be filtered through "What's best for the client?" Not "What's easiest for us?" If a client needs a last-minute change before their launch, we make it happen.</p>
</div>
</div>

<div class="content-section">
<h3>Zero-Tolerance Rules</h3>
<p>These result in <strong>immediate termination</strong>. No warnings. No second chances. HR must enforce these without exception.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 IMMEDIATE TERMINATION + LEGAL ACTION:</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#DC2626;color:white;">
<th style="padding:12px;text-align:left;">Violation</th>
<th style="padding:12px;text-align:left;">Why It's Zero Tolerance</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #FCA5A5;"><td style="padding:12px;"><strong>Client data sharing</strong> — Sharing any client data (store access, credentials, revenue data) with anyone outside DH</td><td style="padding:12px;">Breach of NDA, client trust, potential legal liability for DH</td></tr>
<tr style="border-bottom:1px solid #FCA5A5;background:#FEF2F2;"><td style="padding:12px;"><strong>Freelancing while employed</strong> — Taking freelance projects (Fiverr, Upwork, direct) while on DH payroll</td><td style="padding:12px;">Conflict of interest, using DH time/skills for personal gain</td></tr>
<tr style="border-bottom:1px solid #FCA5A5;"><td style="padding:12px;"><strong>Fake attendance/EOD</strong> — Logging hours not worked, fabricating EOD reports</td><td style="padding:12px;">Trust violation, equivalent to theft of company time</td></tr>
<tr style="border-bottom:1px solid #FCA5A5;background:#FEF2F2;"><td style="padding:12px;"><strong>Sharing internal processes</strong> — Revealing DH workflows, pricing strategies, or SOPs to competitors</td><td style="padding:12px;">Competitive advantage theft, NDA breach</td></tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>Authority Matrix: Who Approves What</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Decision</th>
<th style="padding:12px;text-align:left;">Can Approve</th>
<th style="padding:12px;text-align:left;">Must Be Informed</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Hiring (Intern)</td><td style="padding:12px;">HR + Team Lead</td><td style="padding:12px;">Manager</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Hiring (Full-time)</td><td style="padding:12px;">Manager + Director</td><td style="padding:12px;">HR, CEO (senior roles)</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Firing / Termination</td><td style="padding:12px;">Director + CEO</td><td style="padding:12px;">HR, Legal</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Salary Changes</td><td style="padding:12px;">Director + CEO</td><td style="padding:12px;">HR, Finance</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Leave (1-2 days)</td><td style="padding:12px;">Team Lead</td><td style="padding:12px;">HR</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Leave (3+ days)</td><td style="padding:12px;">Manager + HR</td><td style="padding:12px;">Team Lead</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Purchases (under ₹5K)</td><td style="padding:12px;">Manager</td><td style="padding:12px;">Finance</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Purchases (₹5K+)</td><td style="padding:12px;">Director + CEO</td><td style="padding:12px;">Finance</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">WFH Approval</td><td style="padding:12px;">Manager + HR</td><td style="padding:12px;">Team Lead</td></tr>
</tbody>
</table>

<h3>Escalation Matrix</h3>
<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📈 Escalation Path:</strong>
<p style="font-size:1.1em; text-align:center; margin:15px 0;">
Problem → <strong>Team Lead</strong> (resolve within 24h) → <strong>Manager</strong> (resolve within 48h) → <strong>Director</strong> (resolve within 72h) → <strong>CEO</strong> (final decision)
</p>
<p><strong>Rule:</strong> You MUST attempt resolution at each level before escalating. Jumping directly to CEO = failure of process.</p>
</div>
</div>

<div class="content-section">
<h3>Salary & Compensation Framework</h3>

<h4>Pay Cycle</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Item</th>
<th style="padding:12px;text-align:left;">Policy</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Pay Period</td><td style="padding:12px;">1st to 30th/31st of each month</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Salary Credit</td><td style="padding:12px;">By 10th of the next month</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Intern Stipend</td><td style="padding:12px;">Fixed monthly stipend as per offer letter</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Increment Policy</td><td style="padding:12px;">Performance-based, reviewed quarterly — NOT automatic based on tenure</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Salary Advance</td><td style="padding:12px;">Max 1 month salary, recovered in 2 equal installments</td></tr>
</tbody>
</table>

<h4>Incentive Framework</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💰 Sales Incentives (Per-Order Commission):</strong>
<p>Sales incentives kick in when monthly sales cross <strong>$20,000+</strong>.</p>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#065F46;color:white;">
<th style="padding:10px;text-align:left;">Order Value</th>
<th style="padding:10px;text-align:left;">Commission Rate</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #A7F3D0;"><td style="padding:10px;">Under $2,000</td><td style="padding:10px;">1% per order</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;background:#ECFDF5;"><td style="padding:10px;">$2,000 - $5,000</td><td style="padding:10px;">2% per order</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;"><td style="padding:10px;">$5,000+</td><td style="padding:10px;">3% per order</td></tr>
</tbody>
</table>
<p><strong>Note:</strong> All incentives are subject to the Delhi team's decision and credited 1 month after order delivery.</p>
</div>

<p><strong>Other Role Incentives:</strong></p>
<ul>
<li><strong>Developers:</strong> Per-project bonuses based on complexity and delivery quality</li>
<li><strong>Designers:</strong> Bonus for 5-star client feedback on design deliverables</li>
<li><strong>All Roles:</strong> Quarterly performance bonuses based on KRA achievement</li>
</ul>
</div>

<div class="content-section">
<h3>Communication Policy</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Channel</th>
<th style="padding:12px;text-align:left;">Purpose</th>
<th style="padding:12px;text-align:left;">Response SLA</th>
<th style="padding:12px;text-align:left;">Penalty for Violation</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Discord (Primary)</strong></td><td style="padding:12px;">All daily communication, standups, updates</td><td style="padding:12px;">Must be online during work hours</td><td style="padding:12px;">Warning → WFH revoked</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;"><strong>Client Messages</strong></td><td style="padding:12px;">Fiverr, direct client chat</td><td style="padding:12px;"><strong>Within 5 minutes</strong> during work hours</td><td style="padding:12px;">₹500 per missed response</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Internal Messages</strong></td><td style="padding:12px;">Team communication on Discord</td><td style="padding:12px;"><strong>Within 15 minutes</strong></td><td style="padding:12px;">₹1,000 for repeated violations</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;"><strong>Email</strong></td><td style="padding:12px;">Formal communication only (offers, terminations, policy changes)</td><td style="padding:12px;">Within 24 hours</td><td style="padding:12px;">N/A</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ HR Must Enforce:</strong> Communication SLAs are not guidelines — they're rules. Track violations weekly. A sales executive who misses 3 client messages in a week needs immediate coaching. Repeated violations go to PIP.
</div>
</div>

<div class="content-section">
<h3>The Growth Formula</h3>
<p>DH's revenue target: <strong>₹9.2 Cr → ₹75 Cr</strong>. Every role contributes to this goal. HR's job is to hire, retain, and develop the people who make this happen.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Role</th>
<th style="padding:12px;text-align:left;">Contribution to Revenue</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Sales Team</td><td style="padding:12px;">Direct revenue generation — close deals, upsell clients</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Developers</td><td style="padding:12px;">Deliver quality work → 5-star reviews → more orders → more revenue</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">Designers</td><td style="padding:12px;">Stunning designs → higher conversion → happier clients → referrals</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">Project Managers</td><td style="padding:12px;">On-time delivery → client retention → repeat business</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">HR</td><td style="padding:12px;">Hire the right people → reduce attrition → maintain team quality → enable all of the above</td></tr>
</tbody>
</table>
</div>
`;

const task7Quiz = [
    { q: "According to DH Manifesto Principle 1, what does 'Instant Reply' mean?", o: ["Reply within 5 minutes", "Reply within 1 hour", "Reply immediately when you see the message, even if it's just 'Noted, will check'", "Reply only when you have the full answer"], c: 2 },
    { q: "What does DH consider a FAILURE on Fiverr based on the Quality principle?", o: ["A 1-star review", "A 3-star review", "A 4-star review", "Any review with text complaints"], c: 2 },
    { q: "Which of these is a zero-tolerance offense that results in immediate termination?", o: ["Missing 2 EOD reports in a week", "Getting a 4-star review from a client", "Taking freelance projects while employed at DH", "Being late to a standup meeting 3 times"], c: 2 },
    { q: "Who can approve firing/termination at DH?", o: ["HR alone", "Manager + HR", "Team Lead + Manager", "Director + CEO"], c: 3 },
    { q: "When does salary get credited at DH?", o: ["Last day of the current month", "1st of the next month", "By 10th of the next month", "15th of the next month"], c: 2 },
    { q: "How does the increment policy work at DH?", o: ["Automatic 10% yearly raise", "Based on tenure — 1 year = increment", "Performance-based, reviewed quarterly — not automatic", "Same increment for everyone annually"], c: 2 },
    { q: "What is the maximum salary advance allowed at DH?", o: ["2 weeks salary", "1 month salary, recovered in 2 installments", "2 months salary, recovered in 4 installments", "No salary advance policy exists"], c: 1 },
    { q: "What is the response SLA for client messages during work hours?", o: ["Within 1 minute", "Within 5 minutes", "Within 15 minutes", "Within 30 minutes"], c: 1 },
    { q: "What is the penalty for missing a client message response?", o: ["Verbal warning", "₹200 fine", "₹500 per missed response", "₹1,000 per missed response"], c: 2 },
    { q: "When sales incentives kick in at $20,000+ monthly sales, what commission rate applies to orders between $2,000 and $5,000?", o: ["1% per order", "2% per order", "3% per order", "5% per order"], c: 1 }
];

const task8Content = `
<h2>📊 TASK 8: HR Analytics, AI Tools & Practical Scenarios</h2>

<div class="content-section">
<h3>Part 1: Key HR Metrics Every HR Must Track</h3>
<p>You can't improve what you don't measure. At DH, HR isn't just about "people skills" — it's about DATA-DRIVEN decisions. Here are the metrics that matter.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Metric</th>
<th style="padding:12px;text-align:left;">What It Measures</th>
<th style="padding:12px;text-align:left;">DH Target</th>
<th style="padding:12px;text-align:left;">How to Calculate</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Time to Hire</strong></td><td style="padding:12px;">Days from job posting to accepted offer</td><td style="padding:12px;"><strong>&lt; 14 days</strong></td><td style="padding:12px;">Offer acceptance date - Job posting date</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;"><strong>Cost per Hire</strong></td><td style="padding:12px;">Total recruitment cost per hire</td><td style="padding:12px;">Track by channel</td><td style="padding:12px;">(Job posting fees + recruiter time + tools) / Number of hires</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Offer Acceptance Rate</strong></td><td style="padding:12px;">% of offers accepted by candidates</td><td style="padding:12px;"><strong>&gt; 85%</strong></td><td style="padding:12px;">(Offers accepted / Total offers made) × 100</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;"><strong>90-Day Retention</strong></td><td style="padding:12px;">% of new hires who stay past 90 days</td><td style="padding:12px;"><strong>&gt; 80%</strong></td><td style="padding:12px;">(Employees retained at 90 days / Total new hires) × 100</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Employee Satisfaction</strong></td><td style="padding:12px;">Monthly pulse survey score</td><td style="padding:12px;"><strong>&gt; 7/10</strong></td><td style="padding:12px;">Average of all survey responses</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;"><strong>Attrition Rate</strong></td><td style="padding:12px;">% of employees leaving per period</td><td style="padding:12px;"><strong>&lt; 15% annually</strong></td><td style="padding:12px;">(Employees who left / Average headcount) × 100</td></tr>
</tbody>
</table>

<h4>Building an HR Dashboard</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Frequency</th>
<th style="padding:12px;text-align:left;">What to Track</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Weekly</strong></td><td style="padding:12px;">Open positions count, interview pipeline (candidates per stage), attendance summary, pending onboarding tasks</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;"><strong>Monthly</strong></td><td style="padding:12px;">Time to hire trend, cost per hire, new joiner count, exits count, pulse survey results, training completion rate</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;"><strong>Quarterly</strong></td><td style="padding:12px;">Attrition rate, 90-day retention, offer acceptance trend, channel effectiveness (which sourcing channel gives best hires), performance review completion rate</td></tr>
</tbody>
</table>

<h4>Predictive Analytics: Spotting Attrition Before It Happens</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚩 Warning Signs of Imminent Resignation:</strong>
<ul>
<li><strong>Missed EODs:</strong> Employee who was diligent starts missing 2-3 EODs per week</li>
<li><strong>Reduced Communication:</strong> Previously active team member goes quiet on Discord</li>
<li><strong>Declining Quality:</strong> Sudden increase in revision requests or client complaints</li>
<li><strong>Clock-Watching:</strong> Logging off at exactly shift end when they used to stay late</li>
<li><strong>Disengagement:</strong> Stops participating in team meetings, gives one-word answers</li>
<li><strong>LinkedIn Activity:</strong> Updated profile, new connections with recruiters (yes, check)</li>
<li><strong>Taking More Leaves:</strong> Sudden increase in "sick days" — likely interview days</li>
</ul>
<p><strong>Action:</strong> When you spot 3+ signs, schedule a 1:1 "check-in" (not "exit prevention" — that spooks them). Ask: "How are things going? Anything I can help with?"</p>
</div>
</div>

<div class="content-section">
<h3>Part 2: AI Tools for Modern HR</h3>
<p>AI isn't replacing HR — it's making HR 10x faster. Here's how to use AI tools (ChatGPT, Claude) for everyday HR tasks.</p>

<h4>Copy-Paste Ready AI Prompt Templates</h4>

<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📝 Prompt 1: Writing a Job Description</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write a job description for a [Role Title] at a digital agency called Digital Heroes. We specialize in Shopify development, design, and marketing. Requirements: [X years experience], [specific skills]. The role involves [daily responsibilities]. Include: About Us section, responsibilities, requirements, nice-to-haves, and perks. Tone: professional but not corporate. Keep it under 500 words."
</p>
</div>

<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📝 Prompt 2: Resume Screening</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Screen this resume against these requirements: [paste requirements]. Give a score out of 10 with breakdown: Technical Skills (X/4), Experience Relevance (X/3), Portfolio Quality (X/3). List red flags and green flags. Recommend: Strong Yes / Yes / Maybe / No."
</p>
</div>

<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📝 Prompt 3: Drafting a PIP</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Draft a Performance Improvement Plan for an employee who has [specific issue, e.g., missed deadlines 4 times in 2 months]. Include: current performance summary, specific areas for improvement, measurable goals for next 30 days, support/resources provided, consequences if goals not met. Professional but firm tone."
</p>
</div>

<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📝 Prompt 4: Interview Questions</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Generate 10 interview questions for a [Role] position at a Shopify-focused digital agency. Mix: 3 technical questions, 3 behavioral/situational, 2 culture-fit, 2 problem-solving. For each question, include what a good answer looks like and red flags to watch for."
</p>
</div>

<h4>Other AI Use Cases for HR</h4>
<ul>
<li><strong>Candidate Sourcing:</strong> Use AI to draft personalized outreach messages for LinkedIn/Internshala</li>
<li><strong>Employee Sentiment Analysis:</strong> Feed anonymous survey responses into AI to identify themes and trends</li>
<li><strong>Policy Drafting:</strong> Generate first drafts of HR policies, then customize for DH context</li>
<li><strong>Training Content:</strong> Create quiz questions, case studies, and training summaries</li>
<li><strong>Exit Interview Analysis:</strong> Summarize exit interview notes to find patterns across multiple exits</li>
</ul>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ AI Caution:</strong> AI outputs are STARTING POINTS, not final products. Always review, fact-check, and customize AI-generated content before using it. Never send AI-generated termination letters or PIPs without thorough human review. And never paste confidential employee data into public AI tools without company approval.
</div>
</div>

<div class="content-section">
<h3>Part 3: Practical HR Scenarios</h3>
<p>Theory is important, but HR is learned by DOING. Work through these 8 scenarios — they represent real situations you'll face at DH.</p>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 1: Draft a JD for Senior Shopify Developer at DH</strong>
<p>Requirements: 3+ years Shopify experience, Liquid/JavaScript proficiency, theme customization, app integration experience. Must handle 3-5 concurrent client projects. Use the AI prompt template above, then review and adjust for DH context.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 2: Screen 3 Sample Resumes</strong>
<p>You receive resumes for a Shopify Developer role. Candidate A has 5 years experience but no portfolio. Candidate B has 1 year experience with 10 live store links. Candidate C has a computer science degree with no Shopify experience but strong JavaScript skills. Rank them and explain why.</p>
<p><strong>DH Answer:</strong> B > C > A. Portfolio and demonstrable skills always beat years on paper. Candidate A claiming 5 years with nothing to show is a red flag.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 3: Write a PIP for a Designer with Quality Issues</strong>
<p>Priya, a UI/UX designer, has delivered 3 designs in the past month that received client revision requests of 5+ rounds each. Team average is 2 rounds. Her Figma files are disorganized and she's not following the DH design system. Draft the PIP.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 4: Draft an Exit Interview Report</strong>
<p>Rahul, a developer, is leaving after 8 months. In his exit interview, he says: "The work is good, but I feel stuck. There's no clear growth path. My manager never gives feedback — just assigns tasks. And the salary doesn't match the market." Summarize this into an actionable exit report.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 5: Calculate Cost-Per-Hire</strong>
<p>Last quarter: Internshala premium ₹15,000, LinkedIn job posting ₹8,000, HR time (80 hours × ₹300/hr) = ₹24,000, interviewer time (40 hours × ₹500/hr) = ₹20,000. Total hires: 6. What's the cost per hire?</p>
<p><strong>Answer:</strong> (15,000 + 8,000 + 24,000 + 20,000) / 6 = ₹67,000 / 6 = <strong>₹11,167 per hire</strong></p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 6: "I Got a Better Offer" Conversation</strong>
<p>Your best developer says: "I've got an offer for 40% more salary. I like DH but I can't ignore the money." How do you handle this?</p>
<p><strong>Key Steps:</strong> 1) Don't panic or make emotional promises. 2) Ask what the full package looks like (sometimes "40% more" is just base salary). 3) Discuss non-monetary benefits. 4) If they're a top performer, escalate to Director for potential retention offer. 5) If they decide to leave, ensure graceful exit with full KT.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 7: Team Conflict Over Code Review</strong>
<p>Dev A rejected Dev B's pull request with "This code is terrible, rewrite everything." Dev B is upset and refusing to work with Dev A. Both are good developers. How do you mediate?</p>
<p><strong>Key Steps:</strong> 1) Talk to both separately first. 2) Address the communication issue — "terrible" is not constructive feedback. 3) Coach Dev A on giving actionable code review feedback. 4) Reassure Dev B that the feedback style was wrong, not necessarily the code. 5) Facilitate a joint session focused on the technical merits. 6) Set code review guidelines for the team.</p>
</div>

<div style="background: #EDE9FE; border-left: 4px solid #7C3AED; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 8: Create a 30-60-90 Onboarding Plan for a New PM</strong>
<p>A new Project Manager joins DH. Design their onboarding plan:</p>
<ul>
<li><strong>Days 1-30:</strong> Learn DH tools (Discord, project management), shadow existing PM, complete PM training module, understand all active projects</li>
<li><strong>Days 31-60:</strong> Take ownership of 2-3 small projects, conduct first client call (with supervision), deliver first project independently</li>
<li><strong>Days 61-90:</strong> Manage 5+ projects independently, handle client escalations, mentor a junior team member, first performance review</li>
</ul>
</div>
</div>
`;

const task8Quiz = [
    { q: "What is DH's target for Time to Hire?", o: ["Less than 7 days", "Less than 14 days", "Less than 21 days", "Less than 30 days"], c: 1 },
    { q: "How do you calculate the Offer Acceptance Rate?", o: ["Offers made / Total applications × 100", "(Offers accepted / Total offers made) × 100", "Hires / Interviews conducted × 100", "Applications / Job postings × 100"], c: 1 },
    { q: "What is DH's target for 90-Day Retention?", o: ["> 60%", "> 70%", "> 80%", "> 90%"], c: 2 },
    { q: "Which of the following is NOT a predictive warning sign of employee attrition?", o: ["Missed EOD reports", "Updated LinkedIn profile with recruiter connections", "Asking for more challenging projects", "Sudden increase in sick days"], c: 2 },
    { q: "When using AI to draft a PIP, what is the MOST important rule?", o: ["Send it directly to the employee without changes", "Copy it exactly as AI generates it", "Always review, fact-check, and customize before using", "Only use ChatGPT, never Claude"], c: 2 },
    { q: "In the resume screening scenario, why does Candidate B (1 year exp, 10 live stores) rank higher than Candidate A (5 years exp, no portfolio)?", o: ["More recent experience is always better", "Portfolio and demonstrable skills beat years on paper at a digital agency", "1 year is the ideal experience level", "Candidate A's resume was too long"], c: 1 },
    { q: "Cost per hire calculation: Total costs ₹67,000 and 6 hires. What's the cost per hire?", o: ["₹6,700", "₹11,167", "₹13,400", "₹67,000"], c: 1 },
    { q: "When a top developer says 'I got a better offer,' what should you do FIRST?", o: ["Immediately match their offer", "Tell them DH can't compete on salary", "Don't panic — ask about the full package details", "Accept their resignation immediately"], c: 2 },
    { q: "What should be tracked WEEKLY on the HR dashboard?", o: ["Attrition rate and 90-day retention", "Open positions count, interview pipeline, attendance summary", "Annual performance reviews", "Cost per hire trend and channel effectiveness"], c: 1 },
    { q: "In the team conflict scenario, what is the FIRST step when Dev A gave harsh code review feedback to Dev B?", o: ["Fire Dev A for unprofessional behavior", "Tell Dev B to toughen up", "Talk to both developers separately first", "Ban code reviews entirely"], c: 2 }
];

const task9Content = `
<h2>❓ TASK 9: HR FAQ & Joining Formalities</h2>

<div class="content-section">
<h3>Part 1: The 50+ Questions Every HR Must Answer</h3>
<p>New employees ask the same questions. Existing employees ask the same questions. Interns DEFINITELY ask the same questions. As HR, you need to answer them confidently, consistently, and correctly — every single time. Here's your complete reference.</p>

<h4>💰 Salary FAQs</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:40%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"When do I get paid?"</td><td style="padding:12px;">Pay period is 1st-30th/31st. Salary is credited <strong>by the 10th of the next month</strong>.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"How do increments work?"</td><td style="padding:12px;">Performance-based, reviewed quarterly. There are <strong>no automatic increments</strong> based on tenure. Your work quality, KRA achievement, and client feedback determine raises.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I get a salary advance?"</td><td style="padding:12px;">Yes, maximum <strong>1 month salary</strong>. Recovered in <strong>2 equal installments</strong> from next 2 months' salary. Apply through HR with reason.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"What's the incentive structure?"</td><td style="padding:12px;">Role-specific. <strong>Sales:</strong> Per-order commission (1%/2%/3% tiered by order value) after $20K+ monthly sales, subject to Delhi team's decision, credited 1 month after delivery. <strong>Developers:</strong> Per-project bonuses. <strong>All roles:</strong> Quarterly performance bonuses based on KRA.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Will I get a hike after probation?"</td><td style="padding:12px;">Not guaranteed. Probation confirmation means you've met minimum standards. A raise at confirmation is considered only for exceptional performers.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"Do interns get paid?"</td><td style="padding:12px;">Yes, interns receive a fixed monthly stipend as stated in the offer letter.</td></tr>
</tbody>
</table>

<h4>🏖️ Leave FAQs</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:40%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"How many leaves do I get?"</td><td style="padding:12px;">As per your offer letter and DH leave policy. Includes earned leaves, sick leaves, and public holidays. Check with HR for your specific allocation.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"What if I'm sick?"</td><td style="padding:12px;">Inform your Team Lead on <strong>Discord BEFORE your shift starts</strong>. Medical certificate required for <strong>2 or more consecutive sick days</strong>.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I take a half day?"</td><td style="padding:12px;">Yes, with prior approval from Team Lead. Must be requested by morning of the same day at latest.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"What about public holidays?"</td><td style="padding:12px;">DH follows a published holiday calendar shared at the start of each year. Check with HR for the current year's list.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I take leave during probation?"</td><td style="padding:12px;">Emergency leaves only during probation. Planned leaves (vacations) are generally not approved in the first 90 days.</td></tr>
</tbody>
</table>

<h4>🏠 WFH FAQs</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:40%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I WFH permanently?"</td><td style="padding:12px;"><strong>No.</strong> DH is office-first. WFH is an exception, not the default. It requires manager + HR approval for specific reasons.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"What's expected during WFH?"</td><td style="padding:12px;">Same hours as office. <strong>Discord must show online</strong>. EOD report mandatory. All response time SLAs apply (client: 5 min, internal: 15 min). Camera on for meetings.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can interns WFH?"</td><td style="padding:12px;">Generally <strong>no</strong>, except in special circumstances (medical, approved by HR). Interns need office presence for training and mentorship.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"What if I have internet issues during WFH?"</td><td style="padding:12px;">Inform your Team Lead immediately on Discord (use mobile data if needed). Persistent connectivity issues = WFH privilege revoked — come to office.</td></tr>
</tbody>
</table>

<h4>🚪 Exit FAQs</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:40%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"What's my notice period?"</td><td style="padding:12px;">As per your offer letter — typically <strong>30 days</strong>. Early release possible if knowledge transfer is complete and manager approves.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"Will I get an experience letter?"</td><td style="padding:12px;">Yes, <strong>after full and final settlement is complete</strong>. Not issued if terminated for misconduct or if employee absconded.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I use DH as a reference?"</td><td style="padding:12px;">Yes, <strong>with manager approval</strong>. Provide the reference checker with your manager's contact details, not HR directly.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"When will I get my F&F settlement?"</td><td style="padding:12px;"><strong>Within 30 days</strong> of last working day, after asset return and access revocation are complete.</td></tr>
</tbody>
</table>

<h4>📋 General FAQs</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:40%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Is time tracking compulsory?"</td><td style="padding:12px;"><strong>Yes.</strong> Daily EOD report on Discord is mandatory for all employees, including interns and WFH.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"Do interns get a certificate?"</td><td style="padding:12px;">Yes, after completing <strong>minimum 30 days + role-specific training module + certification exam</strong>.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I get a Letter of Recommendation?"</td><td style="padding:12px;">LOR is reserved for <strong>top 10% performers</strong> only. Standard performers receive an experience letter.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"What tools do I need to install?"</td><td style="padding:12px;">Discord (mandatory), role-specific tools (Shopify Partner account, Figma, VS Code, etc.), and any project management tool DH uses. Full list provided during onboarding.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Who do I report to?"</td><td style="padding:12px;">Your <strong>Team Lead</strong> for daily work. Your <strong>Manager</strong> for reviews and escalations. HR for policy, leave, and personal issues.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;"><td style="padding:12px;">"Is there a dress code?"</td><td style="padding:12px;">Smart casual. No shorts, no sleeveless tops. Client video calls require professional attire. Casual Fridays are a thing.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:12px;">"Can I use company laptop for personal work?"</td><td style="padding:12px;">Limited personal use is okay (checking email, browsing). No installing personal software, no torrenting, no storing personal files. Company can audit laptop at any time.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>Part 2: Joining Documents Checklist</h3>
<p>On Day 1, HR has a LOT to handle. Miss a document and you'll be chasing it for weeks. Use this checklist religiously.</p>

<h4>📥 Documents to COLLECT from New Joiner</h4>
<div style="background: #F0F9FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#1E4D8C;color:white;">
<th style="padding:10px;text-align:left;">Document</th>
<th style="padding:10px;text-align:left;">Format</th>
<th style="padding:10px;text-align:left;">Notes</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #BFDBFE;"><td style="padding:10px;">Aadhaar Card</td><td style="padding:10px;">Front & back copy</td><td style="padding:10px;">For identity verification</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;background:#EFF6FF;"><td style="padding:10px;">PAN Card</td><td style="padding:10px;">Copy</td><td style="padding:10px;">For tax purposes</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;"><td style="padding:10px;">Latest Education Certificate/Marksheet</td><td style="padding:10px;">Copy</td><td style="padding:10px;">Highest qualification</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;background:#EFF6FF;"><td style="padding:10px;">Previous Employment Relieving Letter</td><td style="padding:10px;">Original or copy</td><td style="padding:10px;">If applicable (not for freshers)</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;"><td style="padding:10px;">2 Passport-Size Photos</td><td style="padding:10px;">Physical</td><td style="padding:10px;">White background preferred</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;background:#EFF6FF;"><td style="padding:10px;">Bank Account Details</td><td style="padding:10px;">Cancelled cheque or passbook copy</td><td style="padding:10px;">For salary credit setup</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;"><td style="padding:10px;">Emergency Contact Details</td><td style="padding:10px;">Written/digital</td><td style="padding:10px;">Name, relationship, phone number</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;background:#EFF6FF;"><td style="padding:10px;">Signed Offer Letter</td><td style="padding:10px;">Signed copy returned</td><td style="padding:10px;">Both parties must have signed copies</td></tr>
<tr style="border-bottom:1px solid #BFDBFE;"><td style="padding:10px;">Signed NDA</td><td style="padding:10px;">Signed copy</td><td style="padding:10px;">Non-negotiable — no NDA, no access to client work</td></tr>
</tbody>
</table>
</div>

<h4>📤 Documents to GIVE to New Joiner</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li><strong>Welcome email</strong> with all relevant links: SOP Library, Discord invite, tool access</li>
<li><strong>Signed offer letter</strong> (their copy)</li>
<li><strong>Signed NDA</strong> (their copy)</li>
<li><strong>Employee handbook link</strong> — must read in first week</li>
<li><strong>Start Here guide link</strong> — role-specific onboarding guide</li>
<li><strong>Training module assignment</strong> — which training to complete and deadline</li>
<li><strong>Reporting manager introduction</strong> — email + Discord intro to their Team Lead and Manager</li>
<li><strong>IT setup instructions</strong> — tool installations, account creations, access requests</li>
</ul>
</div>

<h4>📁 Documents HR Must FILE</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>For EVERY new joiner, HR must:</strong>
<ol>
<li><strong>Create digital employee folder</strong> — All collected documents + offer letter + NDA, organized by employee name</li>
<li><strong>Update employee master sheet</strong> — Name, role, joining date, reporting manager, salary, bank details</li>
<li><strong>Update headcount tracker</strong> — Department-wise headcount for monthly reporting</li>
<li><strong>Notify accounts/finance team</strong> — For payroll setup (must be done within 3 days of joining)</li>
<li><strong>Add to attendance system</strong> — Ensure they can mark attendance from Day 1</li>
<li><strong>Schedule Day-7 check-in</strong> — Remind yourself to check on them after first week</li>
</ol>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Common HR Mistakes with Joining:</strong>
<ul>
<li>Forgetting to collect NDA — employee starts working on client projects without legal protection</li>
<li>Not setting up payroll on time — employee doesn't get paid on first cycle (terrible first impression)</li>
<li>No Day 1 orientation — new joiner sits idle because nobody told their team they're starting today</li>
<li>Missing welcome email — joiner doesn't have Discord access, tool links, or know who to report to</li>
</ul>
</div>
</div>
`;

const task9Quiz = [
    { q: "When does salary get credited at DH?", o: ["1st of the same month", "Last day of the month", "By the 10th of the next month", "15th of the next month"], c: 2 },
    { q: "How does the increment policy work at DH?", o: ["Automatic annual raise for all employees", "Performance-based, reviewed quarterly — no automatic increments", "10% increment after each year", "Increment only at promotion"], c: 1 },
    { q: "What's the salary advance policy?", o: ["No advances allowed", "Max 2 months salary, recovered in 6 installments", "Max 1 month salary, recovered in 2 installments", "Max 1 week salary, recovered next month"], c: 2 },
    { q: "Can an employee WFH permanently at DH?", o: ["Yes, if they've been here 1+ year", "Yes, all roles support permanent WFH", "No — DH is office-first, WFH requires specific approval", "Only senior developers can WFH permanently"], c: 2 },
    { q: "What must happen before an experience letter is issued?", o: ["Employee must work for minimum 1 year", "Full and final settlement must be complete", "Manager must write a recommendation", "Employee must train their replacement"], c: 1 },
    { q: "Who is eligible for a Letter of Recommendation (LOR) at DH?", o: ["Any employee who asks", "Employees with 2+ years tenure", "Top 10% performers only", "All employees who leave on good terms"], c: 2 },
    { q: "What medical documentation is required for sick leave of 2+ consecutive days?", o: ["Nothing extra needed", "A medical certificate", "Hospital admission records", "A letter from family confirming illness"], c: 1 },
    { q: "Which document is NON-NEGOTIABLE and must be collected before a new joiner can access client work?", o: ["PAN card", "Education certificate", "Signed NDA", "Passport photos"], c: 2 },
    { q: "Within how many days of joining must HR notify finance for payroll setup?", o: ["Same day", "Within 3 days", "Within 7 days", "Before first salary cycle"], c: 1 },
    { q: "What is a common Day-1 mistake HR makes with new joiners?", o: ["Giving them too much training material", "Having too many team introductions", "Not sending welcome email — joiner has no access to Discord, tools, or knows who to report to", "Assigning work too quickly"], c: 2 }
];

const task10Content = `
<h2>🎓 TASK 10: Final Certification Exam</h2>

<div class="content-section">
<h3>Congratulations — You've Made It to the Final Exam!</h3>
<p>You've completed 9 comprehensive HR training modules covering everything from the HR mindset to DH-specific policies, from hiring to offboarding, from analytics to AI tools. This final certification exam tests your knowledge across ALL modules.</p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📋 Exam Details:</strong>
<ul>
<li><strong>Questions:</strong> 15 (covering all 9 modules)</li>
<li><strong>Pass Requirement:</strong> 100% — you must answer ALL questions correctly</li>
<li><strong>Attempts:</strong> Unlimited — review your modules and try again if needed</li>
<li><strong>Certificate:</strong> Awarded upon passing — verifiable through the DH Certificate Verification system</li>
</ul>
</div>

<h3>Module Review: Key Concepts</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Module</th>
<th style="padding:12px;text-align:left;">Key Concepts</th>
<th style="padding:12px;text-align:left;">What You Should Know</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;">
<td style="padding:12px;"><strong>1. HR Mindset</strong></td>
<td style="padding:12px;">HR as strategic partner, employee lifecycle, agency HR vs corporate HR</td>
<td style="padding:12px;">Why HR exists, the 7 stages of employee lifecycle, what makes agency HR unique</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;">
<td style="padding:12px;"><strong>2. JD & Sourcing</strong></td>
<td style="padding:12px;">Writing effective JDs, sourcing channels, employer branding</td>
<td style="padding:12px;">JD structure, best sourcing platforms for DH roles, how to attract talent</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;">
<td style="padding:12px;"><strong>3. Screening & Interviews</strong></td>
<td style="padding:12px;">Resume screening, interview techniques, evaluation criteria</td>
<td style="padding:12px;">STAR method, behavioral questions, portfolio evaluation for agency roles</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;">
<td style="padding:12px;"><strong>4. Offer & Onboarding</strong></td>
<td style="padding:12px;">Offer letter components, onboarding process, Day-1 checklist</td>
<td style="padding:12px;">What to include in offers, 30-60-90 onboarding, first-week essentials</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;">
<td style="padding:12px;"><strong>5. Performance & Policies</strong></td>
<td style="padding:12px;">Performance reviews, PIP process, attendance, leave management</td>
<td style="padding:12px;">How to conduct reviews, when to issue PIPs, DH attendance rules</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;">
<td style="padding:12px;"><strong>6. Offboarding & Remote</strong></td>
<td style="padding:12px;">Exit process, knowledge transfer, WFH policy, agency hiring</td>
<td style="padding:12px;">Exit checklist steps, F&F timeline, WFH monitoring, intern pipeline</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;">
<td style="padding:12px;"><strong>7. DH Deep Dive</strong></td>
<td style="padding:12px;">7 principles, zero-tolerance rules, authority matrix, salary, communication SLAs</td>
<td style="padding:12px;">All 7 manifesto principles, what gets you fired, who approves what, incentive structure</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;background:#F8FAFC;">
<td style="padding:12px;"><strong>8. Analytics & AI</strong></td>
<td style="padding:12px;">HR metrics, dashboard, AI prompts, practical scenarios</td>
<td style="padding:12px;">Time to hire target, cost per hire calculation, AI prompt templates, scenario handling</td>
</tr>
<tr style="border-bottom:1px solid #E2E8F0;">
<td style="padding:12px;"><strong>9. FAQ & Joining</strong></td>
<td style="padding:12px;">Salary/leave/WFH/exit FAQs, joining document checklist</td>
<td style="padding:12px;">Common employee questions and correct answers, documents to collect/give/file</td>
</tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Exam Tips:</strong>
<ul>
<li>Re-read any module where you feel unsure before attempting the exam</li>
<li>Pay special attention to Module 7 (DH Deep Dive) — it carries the most weight</li>
<li>Numbers matter: Know the SLAs (5 min client, 15 min internal), targets (14 days time-to-hire, 80% 90-day retention), and salary policies</li>
<li>Think about WHAT DH would do, not what a generic company would do</li>
</ul>
</div>

<p style="text-align:center; font-size:1.2em; margin:20px 0;"><strong>Good luck! You've got this. 🎯</strong></p>
</div>
`;

const task10Quiz = [
    // Module 1: HR Mindset (2 questions)
    { q: "What is the PRIMARY difference between agency HR and corporate HR?", o: ["Agency HR pays more", "Agency HR deals with fast-paced, project-based work with rapid scaling needs", "Agency HR doesn't need policies", "Agency HR only hires freelancers"], c: 1 },
    { q: "Which of the following is NOT a stage in the employee lifecycle?", o: ["Attraction", "Onboarding", "Competitor analysis", "Separation"], c: 2 },
    // Module 2: JD & Sourcing (2 questions)
    { q: "For hiring a Shopify Developer at DH, which sourcing channel is MOST effective?", o: ["Newspaper classified ads", "Internshala for interns, LinkedIn/referrals for experienced hires", "Walk-in interviews only", "Random social media posts"], c: 1 },
    { q: "What's the most important element of a JD for a creative agency role?", o: ["Company history section", "Long list of educational requirements", "Clear role expectations with portfolio/skills requirements", "Salary range disclosure"], c: 2 },
    // Module 3: Screening & Interviews (1 question)
    { q: "In the STAR interview method, what does 'A' stand for?", o: ["Application", "Action", "Assessment", "Approach"], c: 1 },
    // Module 4: Offer & Onboarding (1 question)
    { q: "During a 30-60-90 onboarding plan, what should happen in the first 30 days?", o: ["Independently manage 5+ projects", "Learn DH tools, complete training module, shadow experienced colleagues", "Handle client escalations independently", "Lead team meetings"], c: 1 },
    // Module 5: Performance & Policies (1 question)
    { q: "When should HR issue a Performance Improvement Plan (PIP)?", o: ["Immediately after one mistake", "After verbal and written warnings have failed to improve performance", "Only when they want to fire someone", "After an employee's first year"], c: 1 },
    // Module 6: Offboarding & Remote (1 question)
    { q: "What is the mandatory minimum knowledge transfer period at DH before an employee's last day?", o: ["3 days", "5 days", "7 days", "14 days"], c: 2 },
    // Module 7: DH Deep Dive (3 questions — most important)
    { q: "Which DH Manifesto principle states that a 4-star Fiverr review is considered a failure?", o: ["Instant Reply = Respect", "Ownership Over Excuses", "Quality Is Non-Negotiable", "Client First, Always"], c: 2 },
    { q: "At DH, what is the client message response SLA during work hours?", o: ["Within 1 minute", "Within 5 minutes", "Within 15 minutes", "Within 30 minutes"], c: 1 },
    { q: "Sales incentives at DH use a tiered per-order commission. What rate applies to orders over $5,000 (when monthly sales exceed $20K)?", o: ["1% per order", "2% per order", "3% per order", "5% per order"], c: 2 },
    // Module 8: Analytics & AI (2 questions)
    { q: "What is DH's target for Time to Hire?", o: ["Less than 7 days", "Less than 14 days", "Less than 21 days", "Less than 30 days"], c: 1 },
    { q: "When using AI tools like ChatGPT for HR tasks, what is the CRITICAL rule?", o: ["Always send AI output directly without review", "AI can replace HR completely", "Always review, fact-check, and customize AI output before using it", "Only use AI for writing emails"], c: 2 },
    // Module 9: FAQ & Joining (2 questions)
    { q: "Who is eligible for a Letter of Recommendation at DH?", o: ["Anyone who completes 1 year", "All departing employees", "Top 10% performers only", "Anyone who asks"], c: 2 },
    { q: "Which document must be signed by a new joiner BEFORE they can access any client work?", o: ["Employment contract only", "NDA (Non-Disclosure Agreement)", "Performance agreement", "Tax declaration form"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];

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
