// HR Training Data - COMPREHENSIVE MODULE (10 Modules)
// Digital Heroes Certification Program
// 10 Tasks, 155 Quiz Questions (15 per module + 20 final certification)
// Content sourced from: Employee Handbook, HR SOP, Authority Matrix, 
// Escalation Matrix, Performance Review, Incentive/Penalty, KRA/KPI/DTS

const trainingTasks = [
    { id: 1, title: "HR Mindset & Economics", description: "People = Revenue, Cost of Bad Hires, 6-Step Hiring", contentFirst: true, studyGuide: ["Time: 60 min", "Bad hire cost calculator", "Hire slow, fire fast", "DH 6-step process"] },
    { id: 2, title: "JD Writing & Candidate Filtering", description: "Job Descriptions, Sourcing & Role-Specific Screening", contentFirst: true, studyGuide: ["Time: 90 min", "JD templates for 10 roles", "GitHub/Figma filtering", "Boolean search strings"] },
    { id: 3, title: "Screening & Interviews", description: "Full Hiring Funnel: CV → Phone → Task → Interview", contentFirst: true, studyGuide: ["Time: 90 min", "100→1 funnel", "STAR method mastery", "Interview scorecard"] },
    { id: 4, title: "Offer & Onboarding", description: "Salary Negotiation, CTC, First 90 Days", contentFirst: true, studyGuide: ["Time: 75 min", "Salary bands per role", "30-60-90 day plan", "Buddy system & tools setup"] },
    { id: 5, title: "Performance & Policies", description: "Reviews, PIPs, Leave, Attendance & WFH", contentFirst: true, studyGuide: ["Time: 90 min", "10-point scoring system", "Role-specific metrics", "Complete leave & WFH policy"] },
    { id: 6, title: "Offboarding & Remote Work", description: "Exit Process, F&F, Remote Teams & Alumni", contentFirst: true, studyGuide: ["Time: 75 min", "Exit interview template", "F&F calculation", "Remote work comprehensive guide"] },
    { id: 7, title: "DH Deep Dive", description: "Manifesto, Authority Matrix, Escalation, Incentives", contentFirst: true, studyGuide: ["Time: 90 min", "7 Manifesto principles", "Complete authority matrix", "Full incentive & penalty structure"] },
    { id: 8, title: "Analytics, AI & Scenarios", description: "6 HR Metrics, 20+ AI Prompts, 12 Scenarios", contentFirst: true, studyGuide: ["Time: 90 min", "Metrics with formulas", "Ready-to-use AI prompts", "Real scenario decision-making"] },
    { id: 9, title: "HR FAQ & Joining Docs", description: "70+ FAQs, Email Templates & Document Checklist", contentFirst: true, studyGuide: ["Time: 75 min", "Salary, leave, WFH FAQs", "15 email templates", "Complete joining checklist"] },
    { id: 10, title: "Final Certification", description: "HR Mastery Exam — 20 Questions", contentFirst: false, studyGuide: ["Time: 60 min", "Covers tasks 1-9", "20 comprehensive questions", "Score 100% to certify"] }
];

const task1Content = `
<h2>📚 TASK 1: HR Mindset & The Economics of Hiring</h2>

<div class="content-section">
<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">Every single person who joins Digital Heroes passes through YOUR hands first. A great HR professional doesn't just fill seats — they build the engine that drives revenue from 9.2 Cr to 75 Cr. This module will rewire how you think about hiring, cost, and your own impact on the company's future.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The secret of my success is that we have gone to exceptional lengths to hire the best people in the world." — Steve Jobs</p>
</div>
</div>

<div class="content-section">
<h3>💰 The Real Cost of a Bad Hire — "The Rahul Incident"</h3>
<p>Before we talk about policies, frameworks, or job descriptions, every HR professional at Digital Heroes must internalize one truth: <strong>a bad hire is the single most expensive mistake you can make.</strong> Not a missed deadline, not a typo in an email — a wrong person in the wrong seat will cost you more than any operational error ever will.</p>

<p>Let us walk through a real story from DH's early days — a case study that changed how we approach hiring forever.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real Story — "The Rahul Incident":</strong><br><br>
It was a busy quarter. The sales team had just closed three new Shopify store builds simultaneously, and the delivery team was stretched thin. The hiring manager came to HR and said: <em>"I need a customer success person NOW. We can't wait two weeks — just get someone in."</em><br><br>
Rahul's resume looked decent. Two years of "customer service" experience at a telecom company. He could communicate in English. He was available immediately. HR scheduled a single 20-minute phone call — no task, no reference check, no trial period. He was hired in <strong>2 days flat</strong>.<br><br>
<strong>Week 1:</strong> Rahul seemed okay. He was quiet, took notes, and shadowed a senior CS rep. No red flags yet.<br><br>
<strong>Week 2:</strong> Rahul started handling client chats independently. His tone was curt. He used phrases like "That's not possible" and "You should have mentioned this earlier" with clients — phrases that are absolutely unacceptable in a service agency.<br><br>
<strong>Week 3:</strong> Three clients complained within the same week. One client — a $3,000/month retainer account — left a 4-star review (dropping from a perfect 5-star record). Another client demanded a partial refund for "rude and unhelpful support." The third client simply went silent and stopped responding to messages — they were evaluating competitors.<br><br>
<strong>Week 4-12:</strong> Despite coaching, Rahul's communication never improved. His previous experience was in a telecom call center where agents handled 100+ calls/day with scripts — the exact opposite of DH's personalized, relationship-based approach. He was let go after 3 months, but the damage was already done.<br><br>

<strong>Here's what that "quick hire" actually cost us:</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Cost Category</th><th style="padding:12px;text-align:left;">Amount</th><th style="padding:12px;text-align:left;">Explanation</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Rahul's salary (3 months)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹45,000</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15,000/month × 3 months of employment</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Senior team member's training time</td><td style="padding:10px;border:1px solid #E2E8F0;">₹30,000</td><td style="padding:10px;border:1px solid #E2E8F0;">A senior CS rep spent 40+ hours onboarding, coaching, and fixing Rahul's client interactions instead of handling their own accounts</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client refund (partial)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25,000</td><td style="padding:10px;border:1px solid #E2E8F0;">One client received a partial refund after the poor support experience</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Lost client revenue (churned)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹50,000+</td><td style="padding:10px;border:1px solid #E2E8F0;">The silent client eventually moved to a competitor. Their projected lifetime value was ₹1.5L+, but even the immediate lost revenue was ₹50K+</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Re-hiring cost (posting, screening, interviews)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Job board fees, HR time spent screening 80+ new applicants, interview scheduling</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Team morale & overtime</td><td style="padding:10px;border:1px solid #E2E8F0;">Immeasurable</td><td style="padding:10px;border:1px solid #E2E8F0;">Other CS reps had to cover Rahul's accounts, worked overtime for weeks, and lost trust in HR's hiring quality</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Total Damage</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#EF4444;">₹1.65 Lakhs+</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>From a ₹15,000/month hire — an 11x multiplier on the monthly salary</strong></td></tr>
</tbody>
</table>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Industry Data (SHRM — Society for Human Resource Management):</strong><br><br>
According to SHRM, the cost of a bad hire ranges from <strong>50% to 200% of the employee's annual salary</strong>. For senior roles, this number can exceed 300%. The US Department of Labor estimates the cost at roughly <strong>30% of the first year's earnings</strong> as a baseline — but that only accounts for direct costs like recruiting and training, not the downstream damage to clients, team morale, and company reputation.<br><br>
<strong>For agencies specifically</strong>, the multiplier is even worse because:<br>
<ul>
<li><strong>Client relationships take months to build</strong> — one bad interaction can destroy 6 months of trust-building</li>
<li><strong>Reviews are public and permanent</strong> — a 4-star review on Fiverr or Clutch stays forever and affects every future lead</li>
<li><strong>Project timelines are tight</strong> — there's no buffer to absorb a non-performer's missed deadlines</li>
<li><strong>Team knowledge is specialized</strong> — you can't just swap in a replacement; there's a learning curve for every client account</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🧠 Hire Slow, Fire Fast — The Philosophy That Saves Lakhs</h3>
<p>This is the single most important philosophy in HR at Digital Heroes. It goes against every instinct you have when a team lead is begging for help and you have a candidate "who seems okay." But the data is unambiguous: rushing a hire costs 10-50x more than waiting 2 extra weeks for the right person.</p>

<h4>✅ HIRE SLOW: The 4-Step Minimum Process</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Every single hire at DH — from intern to senior manager — goes through at minimum these 4 steps. No exceptions. No shortcuts. Not even if the CEO asks.</strong><br><br>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Step</th><th style="padding:12px;text-align:left;">What Happens</th><th style="padding:12px;text-align:left;">Purpose</th><th style="padding:12px;text-align:left;">Duration</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1. CV Screen</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Review resume against specific role criteria</td><td style="padding:10px;border:1px solid #E2E8F0;">Filter 100 applicants → 15 qualified</td><td style="padding:10px;border:1px solid #E2E8F0;">1-2 days</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2. Phone Screen</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">10-minute call to verify basics: availability, salary expectations, communication skills</td><td style="padding:10px;border:1px solid #E2E8F0;">Filter 15 → 8 (eliminates mismatches early)</td><td style="padding:10px;border:1px solid #E2E8F0;">1 day</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3. AI App Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">2-hour take-home task specific to the role (coding, writing, design, etc.)</td><td style="padding:10px;border:1px solid #E2E8F0;">Filter 8 → 2-3 (filters 70-80% of non-serious candidates)</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4. Video Interview</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">45-60 minute structured interview with behavioral + technical questions</td><td style="padding:10px;border:1px solid #E2E8F0;">Final assessment — only for candidates who passed the task</td><td style="padding:10px;border:1px solid #E2E8F0;">1 day</td></tr>
</tbody>
</table>

<strong>Why the task comes BEFORE the interview:</strong> This is counter-intuitive but critical. Most companies interview first, then give a task. At DH, we flip it because:<br>
<ul>
<li>70-80% of candidates won't even complete the task — saving you hours of interview time</li>
<li>You can evaluate actual work quality before investing 60 minutes in conversation</li>
<li>It self-selects for candidates who are genuinely interested (not just mass-applying)</li>
<li>You enter the interview with their work in front of you — making the conversation 10x more productive</li>
</ul>
</div>

<h4>⚡ FIRE FAST: The 30-Day Decision Framework</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>"Fire Fast" doesn't mean being cruel or impulsive. It means recognizing reality quickly and acting on it decisively.</strong><br><br>

<strong>The Timeline:</strong><br>
<ul>
<li><strong>Week 1-2:</strong> Observe closely. Are they picking up the work? Asking good questions? Showing initiative? Or are they passive, confused, and making excuses?</li>
<li><strong>Week 3:</strong> If red flags are present, have a direct conversation. Document everything. Set specific, measurable expectations with a clear timeline.</li>
<li><strong>Week 4:</strong> Formal 30-day PIP (Performance Improvement Plan). Specific goals, daily check-ins, documented progress. If no improvement by day 30 — make the decision.</li>
</ul>
<br>
<strong>Why waiting 6 months is catastrophic:</strong><br>
<ul>
<li>You've paid 6 months of salary to someone who underperforms</li>
<li>Their teammates have been covering for them, building resentment</li>
<li>Clients have had 6 months of subpar service</li>
<li>The person themselves has gotten comfortable — making the exit conversation harder</li>
<li>You've delayed hiring the right person by 6 months</li>
</ul>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Scenario — "The 3-Month Hope":</strong><br><br>
We once had a content writer who missed 4 deadlines in her first month. Her reporting manager said "Give her time, she's adjusting." Month 2 brought more missed deadlines plus grammatical errors in client deliverables. A senior writer was spending 2 hours daily editing her work. Month 3: a client complained directly to the Delhi team about content quality.<br><br>
She was finally let go — but by that point, we had wasted:<br>
<ul>
<li>3 months of salary: ₹42,000</li>
<li>Senior writer's correction time: ~120 hours (₹60,000 opportunity cost)</li>
<li>Client trust damage: Incalculable — the client reduced their content order volume by 40%</li>
</ul>
<strong>If HR had acted after month 1, total damage would have been under ₹20,000. Instead, it exceeded ₹1 Lakh.</strong>
</div>
</div>

<div class="content-section">
<h3>🏢 DH Company Overview — What HR Must Know</h3>
<p>You cannot hire effectively for a company you don't understand. Every HR executive must know DH inside-out — not just the org chart, but the <em>why</em> behind the structure.</p>

<h4>🎯 Company Mission: "Point A to Point B"</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Digital Heroes takes businesses from Point A (freelance chaos, inconsistent quality, missed deadlines, no process) to Point B (stable, scalable delivery with documented processes, reliable teams, and measurable outcomes).</strong><br><br>
This isn't just a tagline — it's the lens through which every hire should be evaluated. When you're interviewing a candidate, ask yourself: <em>"Will this person help us move clients from chaos to clarity? Or will they add to the chaos?"</em><br><br>
DH grew from ₹9.2 Cr to targeting ₹75 Cr. That kind of growth is impossible with the wrong people. Every developer, designer, and sales executive who performs well accelerates that target. Every bad hire decelerates it. <strong>HR is the engine that powers this growth — you decide who gets on the bus.</strong>
</div>

<h4>📊 The 5-Level DH Hierarchy</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Level</th><th style="padding:12px;text-align:left;">Who</th><th style="padding:12px;text-align:left;">Authority</th><th style="padding:12px;text-align:left;">HR Interaction</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Level 1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Delhi Team (Founders/Directors)</td><td style="padding:10px;border:1px solid #E2E8F0;">Final authority on all decisions</td><td style="padding:10px;border:1px solid #E2E8F0;">Approve all hires, fires, salary offers, promotions</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Level 2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Senior Management</td><td style="padding:10px;border:1px solid #E2E8F0;">Department-level strategy and decisions</td><td style="padding:10px;border:1px solid #E2E8F0;">Recommend hires, define role requirements, approve PIPs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Level 3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Reporting Managers</td><td style="padding:10px;border:1px solid #E2E8F0;">Day-to-day team management</td><td style="padding:10px;border:1px solid #E2E8F0;">Submit hiring requests, conduct technical interviews, provide performance input</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Level 4</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Team Leads</td><td style="padding:10px;border:1px solid #E2E8F0;">Task allocation within their team</td><td style="padding:10px;border:1px solid #E2E8F0;">Flag performance issues, provide trial task evaluations</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Level 5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Interns & Executives</td><td style="padding:10px;border:1px solid #E2E8F0;">Execute assigned work</td><td style="padding:10px;border:1px solid #E2E8F0;">Subject to full hiring process, probation, performance reviews</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚨 CRITICAL RULE — Override Authority:</strong><br>
In the DH hierarchy, <strong>a higher rank ALWAYS overrides a lower rank</strong>. This is non-negotiable. If a Team Lead approves something but a Reporting Manager rejects it, the RM's decision stands. If Senior Management says hire and the Delhi Team says don't hire — the Delhi Team's decision is final.<br><br>
<strong>Why this matters for HR:</strong> You will sometimes get conflicting instructions. A Reporting Manager might say "Hire this person" while Senior Management has concerns. Always escalate to the highest authority level involved. Never make a hiring decision that overrides a higher-rank's input.
</div>
</div>

<div class="content-section">
<h3>💸 HR's Role in Revenue — You Are NOT Admin</h3>
<p>This might be the most important mindset shift for new HR executives at DH. In many companies, HR is treated as a "support function" — people who process paperwork, track attendance, and organize birthday celebrations. <strong>At DH, HR is a revenue function.</strong></p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ How Every Hire Connects to Revenue:</strong><br><br>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Role You Hire</th><th style="padding:12px;text-align:left;">Revenue Impact (Monthly)</th><th style="padding:12px;text-align:left;">Bad Hire Cost (3 Months)</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Shopify Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">Generates $3,000-$5,000/month in billable work</td><td style="padding:10px;border:1px solid #E2E8F0;">$10,000-$15,000 lost revenue + client damage</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sales Executive</td><td style="padding:10px;border:1px solid #E2E8F0;">Closes $5,000-$15,000/month in new business</td><td style="padding:10px;border:1px solid #E2E8F0;">$15,000-$45,000 lost + burned leads</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">UI/UX Designer</td><td style="padding:10px;border:1px solid #E2E8F0;">Supports $2,000-$4,000/month in project value</td><td style="padding:10px;border:1px solid #E2E8F0;">$6,000-$12,000 lost + design rework costs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Content Writer</td><td style="padding:10px;border:1px solid #E2E8F0;">Produces $1,500-$3,000/month in deliverables</td><td style="padding:10px;border:1px solid #E2E8F0;">$4,500-$9,000 lost + SEO damage</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Customer Success</td><td style="padding:10px;border:1px solid #E2E8F0;">Retains $2,000-$4,000/month in client revenue</td><td style="padding:10px;border:1px solid #E2E8F0;">$6,000-$12,000 lost + reputation damage</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Project Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">Manages $10,000-$20,000/month in active projects</td><td style="padding:10px;border:1px solid #E2E8F0;">$30,000-$60,000 delayed/lost + team chaos</td></tr>
</tbody>
</table>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 The Revenue Math:</strong><br>
A good Shopify developer generates approximately $4,000/month in billable revenue. Over 12 months, that is $48,000. A bad hire who survives 3 months and damages 2 client relationships does not just cost their salary — they cost you the $48,000 in revenue that a good hire would have generated, PLUS the client damage, PLUS the re-hiring costs. <strong>Every single hiring decision is a $50,000+ decision.</strong> When you understand this, you will never rush a hire again.
</div>

<p><strong>HR is NOT admin. HR is a strategic business partner.</strong> The hiring pipeline is the company's growth engine. Bad screening leads to bad delivery, which leads to bad reviews, which leads to lost clients. You are the first filter — and the quality of your filtering determines the quality of DH's output.</p>
</div>

<div class="content-section">
<h3>📋 The 6-Step DH Hiring Process (Deep Dive)</h3>
<p>Every role at DH follows this exact 6-step process. Memorize it. Live it. Never deviate from it.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Step</th><th style="padding:12px;text-align:left;">Action</th><th style="padding:12px;text-align:left;">Duration</th><th style="padding:12px;text-align:left;">Success Criteria</th><th style="padding:12px;text-align:left;">Who's Involved</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1. Job Description Creation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Write a specific JD with clear role requirements, skills, salary range, and growth path</td><td style="padding:10px;border:1px solid #E2E8F0;">1 day</td><td style="padding:10px;border:1px solid #E2E8F0;">JD approved by hiring manager + HR lead</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Hiring Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2. CV Screening</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Review incoming applications against JD criteria. Use role-specific checklists.</td><td style="padding:10px;border:1px solid #E2E8F0;">2-3 days</td><td style="padding:10px;border:1px solid #E2E8F0;">100 applications → 15 shortlisted (85% rejection rate)</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3. Phone Screen</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">10-minute call to verify: availability, salary expectations, notice period, communication quality</td><td style="padding:10px;border:1px solid #E2E8F0;">1 day</td><td style="padding:10px;border:1px solid #E2E8F0;">15 → 8 candidates (quick disqualifiers caught early)</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4. AI App Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">2-hour take-home assignment specific to the role. Sent BEFORE the interview (not after).</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">8 → 2-3 candidates (filters 70-80% who don't bother completing)</td><td style="padding:10px;border:1px solid #E2E8F0;">HR sends, Hiring Manager evaluates</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5. Video Interview</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">45-60 minute structured interview covering technical skills, behavioral questions, and culture fit</td><td style="padding:10px;border:1px solid #E2E8F0;">1 day</td><td style="padding:10px;border:1px solid #E2E8F0;">Only candidates who scored well on the task get interviewed</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Hiring Manager + Senior Team</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>6. Trial Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1-day paid trial where the candidate works on a real (or simulated) project alongside the team</td><td style="padding:10px;border:1px solid #E2E8F0;">1 day</td><td style="padding:10px;border:1px solid #E2E8F0;">Only for candidates who scored 65+ in the interview. Evaluates real working behavior.</td><td style="padding:10px;border:1px solid #E2E8F0;">Hiring Manager + Team Lead</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Why Step 4 (AI App Task) Is the Secret Weapon:</strong><br><br>
The AI App Task is sent before the video interview. This is intentional and counterintuitive. Here is why it works:<br>
<ul>
<li><strong>70-80% of candidates will not complete it</strong> — instantly filtering out people who are mass-applying without genuine interest</li>
<li><strong>You save 30+ hours of interview time</strong> — instead of interviewing 8 people, you interview 2-3 who have proven they can do the work</li>
<li><strong>It reveals actual skill level</strong> — resumes lie, interviews are rehearsed, but work output doesn't lie</li>
<li><strong>The interview becomes 10x more productive</strong> — you discuss their actual work, not hypothetical questions</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 Entry Tasks by Role — The Complete Table</h3>
<p>Every role at DH has a specific entry task designed to test the exact skills needed for day-1 productivity. These tasks are non-negotiable — every candidate gets the same task for their role, ensuring fair comparison.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Role</th><th style="padding:12px;text-align:left;">Entry Task</th><th style="padding:12px;text-align:left;">Duration</th><th style="padding:12px;text-align:left;">Salary Range</th><th style="padding:12px;text-align:left;">What You're Evaluating</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Shopify Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">Build a custom Liquid section with dynamic content</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K–₹35K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">Liquid syntax, section schema, responsive design, code quality</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">UI/UX Designer</td><td style="padding:10px;border:1px solid #E2E8F0;">Redesign a product page in Figma (mobile + desktop)</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K–₹30K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">Visual design, UX thinking, component structure, mobile-first approach</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Full Stack Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">Build an Order Tracker app with frontend + API</td><td style="padding:10px;border:1px solid #E2E8F0;">72 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹20K–₹40K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">Full-stack architecture, API design, error handling, deployment</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">HR Executive</td><td style="padding:10px;border:1px solid #E2E8F0;">Screen 20 resumes + create a 30-day onboarding plan</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹12K–₹25K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">Screening criteria, attention to detail, process thinking, communication</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Content Writer</td><td style="padding:10px;border:1px solid #E2E8F0;">Write an SEO blog post + 5 product descriptions</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹10K–₹25K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">Writing quality, SEO knowledge, tone adaptability, speed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Social Media Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">Create a 7-day content calendar with post copy + visuals</td><td style="padding:10px;border:1px solid #E2E8F0;">48 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹10K–₹22K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">Content strategy, visual creativity, platform knowledge, consistency</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sales Executive</td><td style="padding:10px;border:1px solid #E2E8F0;">Handle a mock Fiverr client inquiry end-to-end</td><td style="padding:10px;border:1px solid #E2E8F0;">24 hrs</td><td style="padding:10px;border:1px solid #E2E8F0;">₹12K–₹25K + commission</td><td style="padding:10px;border:1px solid #E2E8F0;">Response speed, qualification skill, pricing confidence, tone</td></tr>
</tbody>
</table>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📌 Note on Sales Entry Task Duration:</strong> Sales has a 24-hour window (not 48) because speed is a core competency. If a sales candidate takes 48 hours to respond to a mock inquiry, they will take 48 hours to respond to a real client — and we lose the deal. The clock starts from when the mock inquiry is sent.
</div>
</div>

<div class="content-section">
<h3>🧭 HR Decision-Making Framework</h3>
<p>As an HR executive, you will constantly face decisions that require judgment. Some you can handle independently. Others must be escalated. Knowing the difference is critical — acting outside your authority is as bad as failing to act within it.</p>

<h4>✅ Decisions HR Can Make Independently</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Decision</th><th style="padding:12px;text-align:left;">Conditions</th><th style="padding:12px;text-align:left;">Documentation Required</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Approve leave requests</td><td style="padding:10px;border:1px solid #E2E8F0;">Within company policy (casual leave, sick leave balance available)</td><td style="padding:10px;border:1px solid #E2E8F0;">Log in leave tracker, notify reporting manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Advance salary</td><td style="padding:10px;border:1px solid #E2E8F0;">Maximum 50% of monthly salary, once per quarter per employee</td><td style="padding:10px;border:1px solid #E2E8F0;">Written request from employee, approval logged in payroll system</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Schedule interviews</td><td style="padding:10px;border:1px solid #E2E8F0;">For candidates who passed CV screening</td><td style="padding:10px;border:1px solid #E2E8F0;">Calendar invite with interview scorecard template</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Issue verbal warnings</td><td style="padding:10px;border:1px solid #E2E8F0;">For attendance issues, minor policy violations</td><td style="padding:10px;border:1px solid #E2E8F0;">Follow-up email summarizing the conversation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Reject candidates at CV stage</td><td style="padding:10px;border:1px solid #E2E8F0;">Does not meet minimum JD criteria</td><td style="padding:10px;border:1px solid #E2E8F0;">Rejection reason logged in ATS/tracker</td></tr>
</tbody>
</table>
</div>

<h4>🚫 Decisions That ONLY the Delhi Team Can Make</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>These decisions are NON-NEGOTIABLE. HR cannot make these decisions independently, regardless of urgency:</strong><br><br>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Decision</th><th style="padding:12px;text-align:left;">Why Delhi Team Only</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Hiring decisions (final offer)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Every person impacts revenue and culture — founders must approve</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Firing/termination</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Legal and financial implications require highest-level sign-off</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Salary offers & negotiations</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Salary bands and exceptions must be controlled centrally to prevent disparity</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Promotions & role changes</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Affects team structure, budget, and hierarchy</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Policy exceptions</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">One exception becomes a precedent — must be approved at the top</td></tr>
</tbody>
</table>
</div>

<h4>🔀 When to Escalate vs. Handle Yourself</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>The Escalation Decision Tree:</strong><br><br>
<strong>1. Is it a zero-tolerance issue?</strong> (Fraud, harassment, data theft, substance abuse)<br>
→ <strong>YES:</strong> Escalate IMMEDIATELY to Delhi Team. Do not attempt to handle it yourself. Document everything.<br>
→ <strong>NO:</strong> Proceed to question 2.<br><br>
<strong>2. Does it involve money above ₹50,000?</strong> (Salary exception, bonus dispute, refund)<br>
→ <strong>YES:</strong> Prepare a summary with your recommendation, then escalate.<br>
→ <strong>NO:</strong> Proceed to question 3.<br><br>
<strong>3. Is it a recurring problem?</strong> (Same person, same issue, 2+ times)<br>
→ <strong>YES:</strong> Escalate with documentation of all previous instances.<br>
→ <strong>NO:</strong> Proceed to question 4.<br><br>
<strong>4. Can you resolve it within 48 hours with a conversation + documentation?</strong><br>
→ <strong>YES:</strong> Handle it yourself. Document the conversation and outcome. Inform your lead in the next 1-on-1.<br>
→ <strong>NO:</strong> Escalate with full context — what you've tried, what you recommend, what you need.
</div>
</div>

<div class="content-section">
<h3>🚩 Red Flags to Catch During Hiring</h3>
<p>Experience teaches you to spot these patterns. Study them so you recognize them instantly.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Red Flag</th><th style="padding:12px;text-align:left;">What It Really Means</th><th style="padding:12px;text-align:left;">DH Experience</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Job hopping (&lt;6 months at multiple jobs)</td><td style="padding:10px;border:1px solid #E2E8F0;">They will leave you too — pattern behavior</td><td style="padding:10px;border:1px solid #E2E8F0;">3 out of 3 job hoppers DH hired left within 4 months</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Scripted/rehearsed answers</td><td style="padding:10px;border:1px solid #E2E8F0;">They have memorized responses, not lived experiences</td><td style="padding:10px;border:1px solid #E2E8F0;">Ask follow-up "Why?" twice — scripted candidates freeze</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Badmouthing previous employers</td><td style="padding:10px;border:1px solid #E2E8F0;">They will badmouth DH next</td><td style="padding:10px;border:1px solid #E2E8F0;">100% correlation at DH — every badmouther became a problem</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Cannot explain resume gaps</td><td style="padding:10px;border:1px solid #E2E8F0;">Evasiveness is the red flag (gaps themselves are fine)</td><td style="padding:10px;border:1px solid #E2E8F0;">Genuine gaps are acceptable — evasive answers are not</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">First question is about salary and WFH</td><td style="padding:10px;border:1px solid #E2E8F0;">Not interested in the work itself</td><td style="padding:10px;border:1px solid #E2E8F0;">Best hires asked "What projects will I work on?" first</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">No questions for the interviewer</td><td style="padding:10px;border:1px solid #E2E8F0;">Low curiosity equals low engagement</td><td style="padding:10px;border:1px solid #E2E8F0;">Top performers always asked 5+ questions about the role and team</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Overqualified and underenthusiastic</td><td style="padding:10px;border:1px solid #E2E8F0;">Using you as a safety net while searching for better offers</td><td style="padding:10px;border:1px solid #E2E8F0;">Two "overqualified" hires left within 2 months for bigger companies</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Delays in responding to task/interview</td><td style="padding:10px;border:1px solid #E2E8F0;">This is their BEST behavior — it only gets worse after hiring</td><td style="padding:10px;border:1px solid #E2E8F0;">Candidates who took 5+ days to reply to task invites had 100% drop-off</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📊 The Bad Hire Cost Calculator</h3>
<p>Use this formula every time you feel pressured to rush a hire. Print it. Pin it above your desk. Make it your screensaver.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Bad Hire Cost = (Monthly Salary × Months Employed) + (Senior's Time × Hours Spent × Hourly Rate) + (Client Revenue Lost) + (Re-hiring Cost) + (New Hire Training Cost)</strong><br><br>
<strong>Example for a ₹15,000/month intern:</strong><br>
= (₹15,000 × 3) + (₹500/hr × 40 hrs) + (₹50,000) + (₹15,000) + (₹20,000)<br>
= ₹45,000 + ₹20,000 + ₹50,000 + ₹15,000 + ₹20,000<br>
= <strong style="color:#EF4444;">₹1,50,000 minimum</strong><br><br>
<strong>That is 10x the monthly salary.</strong> And this is for the cheapest role at DH. For a senior developer at ₹40,000/month, the multiplier can reach 15-20x because the client revenue at stake is much higher.<br><br>
<strong>The industry standard estimate (SHRM):</strong> 3x annual salary for senior roles, 50-200% of annual salary across all levels. At DH, the multiplier skews higher because of client-facing work — every bad hire damages relationships that took months to build.
</div>
</div>

<div class="content-section">
<h3>🚨 Common HR Mistakes at DH — Real Cases</h3>
<p>These mistakes have actually happened at DH. Each one was expensive. Study them so you never repeat them.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">#</th><th style="padding:12px;text-align:left;">The Mistake</th><th style="padding:12px;text-align:left;">What Happened</th><th style="padding:12px;text-align:left;">Cost</th><th style="padding:12px;text-align:left;">Lesson</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Skipped reference checks "because we were in a rush"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Hired a designer who claimed 3 years of Figma experience. Actually used Canva. Previous employer would have told us in 5 minutes.</td><td style="padding:10px;border:1px solid #E2E8F0;">₹30K salary wasted, 3 projects delayed, 40+ hours of senior designer time</td><td style="padding:10px;border:1px solid #E2E8F0;">Reference checks are NEVER optional</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">2</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Sent offer before salary negotiation was finalized</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Candidate showed the offer letter to another company and got a counter-offer ₹1 LPA higher</td><td style="padding:10px;border:1px solid #E2E8F0;">Had to pay ₹4.5 LPA instead of the approved ₹4 LPA</td><td style="padding:10px;border:1px solid #E2E8F0;">Never send offer letter until verbal acceptance is confirmed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">3</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Did not document verbal warnings</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Employee denied being warned and threatened legal action when PIP was issued</td><td style="padding:10px;border:1px solid #E2E8F0;">3 weeks of delay, employee used time to spread negativity across team</td><td style="padding:10px;border:1px solid #E2E8F0;">Every warning MUST be documented in writing (even a follow-up email)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">4</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Shared salary information casually</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR intern mentioned a new hire's salary to an existing team member who earned less for the same role</td><td style="padding:10px;border:1px solid #E2E8F0;">3 raise demands, 1 resignation threat, 2 months of morale damage</td><td style="padding:10px;border:1px solid #E2E8F0;">Salary is STRICTLY confidential — never discuss one employee's salary with another</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Fast-tracked a referral hire</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Skipped trial task for a top developer's friend. Friend was significantly less skilled. When friend was put on PIP, the top developer also became disengaged and left.</td><td style="padding:10px;border:1px solid #E2E8F0;">Lost 2 people instead of gaining 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Referrals get priority in the pipeline, NOT shortcuts in the process</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📈 DH Revenue Milestones — The Growth You're Building</h3>
<p>Understanding where DH has been and where it's going puts your hiring decisions into perspective. Every person you bring in either accelerates or decelerates this trajectory.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">📊 Revenue Growth Roadmap:</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Year</th><th style="padding:12px;text-align:left;">Revenue Target</th><th style="padding:12px;text-align:left;">Growth Factor</th><th style="padding:12px;text-align:left;">What HR Must Deliver</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Current</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">₹9.2 Cr</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Baseline</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Stabilize current team, fix retention gaps</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>2025</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">₹15-20 Cr</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">~2x</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Scale hiring pipeline, build sourcing channels</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>2026</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">₹40 Cr</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">~2.5x</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Aggressive hiring across all departments, zero bad hires</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>2027</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">₹75 Cr</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">~1.9x</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Build leadership bench, succession planning, HR team expansion</td></tr>
</tbody>
</table>
<p style="color:#000;"><strong>What this means for you:</strong> Going from ₹9.2 Cr to ₹75 Cr requires roughly 8x the workforce capacity. That means hundreds of hires — each one either a building block or a liability. Your screening quality directly determines whether DH hits or misses these targets.</p>
</div>
</div>

<div class="content-section">
<h3>🕐 Daily HR Workflow — Hour-by-Hour Structure</h3>
<p>A structured day prevents chaos. Follow this schedule to ensure nothing falls through the cracks.</p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Time</th><th style="padding:12px;text-align:left;">Activity</th><th style="padding:12px;text-align:left;">Priority</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>9:45 AM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Check attendance — flag absentees, follow up on no-shows</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🔴 High</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>10:00 AM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Respond to employee queries — leave requests, policy questions, escalations</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🔴 High</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>10:30 AM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Review pending hires — check pipeline status, follow up on tasks/interviews</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🔴 High</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>11:00 AM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Phone screens — conduct 10-min calls with shortlisted candidates</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🟡 Medium</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>12:00 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Interview coordination — schedule video interviews, send reminders, prep scorecards</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🟡 Medium</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>1:00-2:00 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Lunch Break</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">—</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>2:00 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Onboarding tasks — new joiner setup, documentation, buddy assignment</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🟡 Medium</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>3:00 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Performance tracking — update scorecards, check PIP progress, follow up with managers</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🟡 Medium</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>4:00 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Policy queries — respond to pending questions, update documentation</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🟢 Low</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>5:00 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">EOD Report — summarize day's activities, flag blockers, update hiring tracker</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🔴 High</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>5:30 PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Tomorrow planning — review calendar, prep for next day's interviews/tasks</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">🟢 Low</td></tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>🎯 HR Task Priority Order — When Everything Is Urgent</h3>
<p>You will have days where everything seems to need your attention at once. Use this priority ladder to decide what gets handled first.</p>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">Priority Ladder (handle in this order):</strong>
<ol style="color: #000; line-height: 2.2;">
<li><strong>Escalations & Emergencies</strong> — Zero-tolerance issues (fraud, harassment, data theft), employee crises, urgent Delhi Team requests</li>
<li><strong>Interviews Scheduled Today</strong> — A candidate is waiting. Rescheduling damages employer brand and loses good candidates</li>
<li><strong>Onboarding (New Joiner This Week)</strong> — First impressions are permanent. A botched Day 1 can lose a hire before they start</li>
<li><strong>Performance Reviews Due</strong> — Delayed reviews delay PIPs, which delay decisions, which costs money every day</li>
<li><strong>Leave & Attendance Issues</strong> — Patterns need to be caught early but don't require same-hour resolution</li>
<li><strong>JD Updates & Sourcing</strong> — Important but not urgent. Pipeline building is a continuous background task</li>
<li><strong>Documentation & Filing</strong> — Must be done daily but can be batched into the last hour of the day</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>⚡ 5 Critical Ownership Rules — From the RnR Page</h3>
<p>These rules apply to every employee at DH, but HR must embody them first. If HR doesn't follow these, no one else will.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">#</th><th style="padding:12px;text-align:left;">Rule</th><th style="padding:12px;text-align:left;">What It Means for HR</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>1</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>If it's your task, it's your responsibility until DONE</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">If you started screening a role, you own it until the hire is made and onboarded.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>2</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>"I didn't know" is NOT acceptable</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">You are expected to know company policies, salary bands, leave rules, and escalation paths.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>3</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Escalate within 1 hour if stuck</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">If you can't solve it in 1 hour, escalate with context and your recommendation.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>4</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Never promise without checking</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Never tell a candidate "You'll get X salary" without verifying with the authority matrix first.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>5</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Document everything</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Every warning, salary discussion, performance conversation — if it's not in writing, it didn't happen.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways — Module 1</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Every hire is a ₹1.5L+ decision</strong> — even for the cheapest role at DH. The 11x multiplier from the Rahul Incident proves it.</li>
<li><strong>Hire Slow:</strong> Minimum 4-step process (CV screen → phone → task → interview). Never skip steps under pressure.</li>
<li><strong>Fire Fast:</strong> Red flags in week 1 = conversation in week 2 = PIP in week 4 = decision by day 30. Do not wait 6 months hoping for improvement.</li>
<li><strong>People = Revenue:</strong> A good developer = $4,000/month. A bad developer = -$10,000+/month. HR decides which one joins the team.</li>
<li><strong>The AI App Task is your secret weapon:</strong> Sent before the interview, it filters out 70-80% of non-serious candidates and saves 30+ hours of interview time.</li>
<li><strong>Know your authority limits:</strong> HR can approve leave and advance salary. Only the Delhi Team can hire, fire, set salaries, or promote. No exceptions.</li>
<li><strong>DH's mission is "Point A to Point B":</strong> Every hire should move clients from freelance chaos to stable, scalable delivery.</li>
<li><strong>Document everything:</strong> Verbal warnings, salary discussions, performance conversations — if it's not in writing, it didn't happen.</li>
</ol>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li>A bad hire costs 10-50x the monthly salary — the Rahul Incident proved it with a ₹1.65L bill from a ₹15K/month hire</li>
        <li>DH is scaling from ₹9.2 Cr to ₹75 Cr — every hire either accelerates or decelerates that trajectory</li>
        <li>Follow the 6-step process religiously: JD → CV Screen → Phone → AI Task → Interview → Trial. No shortcuts, ever</li>
        <li>Your daily workflow starts at 9:45 AM with attendance and ends at 5:30 PM with tomorrow's planning — structure prevents chaos</li>
        <li>Priority ladder: Escalations first, then today's interviews, then onboarding, then reviews, then everything else</li>
        <li>The 5 Ownership Rules are your operating system: own it, know it, escalate fast, never promise unchecked, document everything</li>
        <li>HR is NOT admin — you are a revenue function. The quality of your hiring pipeline determines DH's growth rate</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">You are the first filter in DH's growth engine. Every developer who builds a store, every designer who creates a conversion-optimized page, every sales executive who closes a deal — they all passed through YOUR hands first. The difference between a ₹40 Cr company and a ₹75 Cr company might come down to the quality of hiring decisions you make this quarter.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Great vision without great people is irrelevant." — Jim Collins</p>
    </div>
</div>
`;

const task1Quiz = [
    { q: "In the Rahul Incident, a ₹15,000/month hire ended up costing DH approximately how much over 3 months?", o: ["₹45,000 — just salary", "₹75,000 — salary plus rehiring", "₹1.65 Lakhs — an 11x multiplier on monthly salary", "₹5 Lakhs — half the annual operations budget"], c: 2 },
    { q: "According to SHRM (Society for Human Resource Management), the cost of a bad hire ranges from what percentage of the employee's annual salary?", o: ["50-200% of annual salary", "25-40% of annual salary", "10-20% of annual salary", "300-500% of annual salary"], c: 0 },
    { q: "In the DH 6-step hiring process, what is the correct order of steps?", o: ["JD → CV Screen → Interview → Task → Trial → Offer", "JD → CV Screen → Phone Screen → AI App Task → Video Interview → Trial Task", "JD → Phone Screen → CV Screen → Interview → Task → Offer", "JD → CV Screen → AI App Task → Phone Screen → Interview → Trial"], c: 1 },
    { q: "Why does DH send the AI App Task BEFORE the video interview (not after)?", o: ["Because it is cheaper to evaluate tasks than to conduct interviews", "Because the Delhi Team prefers to review tasks first", "Because interviews are only done on weekends and tasks can be sent anytime", "Because 70-80% of candidates won't complete it, saving 30+ hours of interview time"], c: 3 },
    { q: "In the DH 5-level hierarchy, who has FINAL authority on all hiring, firing, salary, and promotion decisions?", o: ["Senior Management", "Reporting Managers", "HR Lead", "Delhi Team (Founders/Directors)"], c: 3 },
    { q: "What is the maximum salary advance HR can approve independently?", o: ["50% of monthly salary, once per quarter", "25% of monthly salary, once per month", "100% of monthly salary, once per year", "No salary advance — only Delhi Team can approve"], c: 0 },
    { q: "What is the entry task duration for Sales Executive candidates, and why is it shorter than other roles?", o: ["48 hours — same as all other roles for consistency", "72 hours — sales tasks require more research and preparation", "24 hours — because speed is a core sales competency", "12 hours — to test performance under extreme pressure"], c: 2 },
    { q: "In the 'Fire Fast' framework, what should happen if red flags appear in Week 1 of a new hire's employment?", o: ["Wait until probation ends (3-6 months) to make a fair assessment", "Have a direct conversation in Week 2-3, document issues, set expectations with a 30-day PIP timeline", "Terminate immediately without documentation to avoid further damage", "Transfer the employee to a different team to see if the issue was role-specific"], c: 1 },
    { q: "Which of the following is a decision HR can make INDEPENDENTLY without Delhi Team approval?", o: ["Approving an employee's casual leave request within policy", "Extending a salary offer to a candidate", "Promoting a Team Lead to Reporting Manager", "Making a policy exception for a long-tenured employee"], c: 0 },
    { q: "A candidate who scored 60 in the video interview wants to proceed to the trial task. What should HR do?", o: ["Allow the trial task since 60 is close to passing", "Escalate to the Delhi Team for a special exception", "Schedule a second interview to give them another chance", "Reject — only candidates who scored 65+ in the interview proceed to trial task"], c: 3 },
    { q: "What happened when DH fast-tracked a referral hire by skipping the trial task?", o: ["The referral performed excellently and became team lead", "The referral was average but stable for 12 months", "The referral underperformed; when put on PIP, the referring top performer also disengaged and left — losing 2 people", "The referral quit during probation but the referring employee stayed"], c: 2 },
    { q: "According to the module, why are bad hires ESPECIALLY costly for agencies compared to product companies?", o: ["Client relationships built over months can be destroyed by one bad interaction, and reviews are public and permanent", "Agency work requires longer onboarding which amplifies the cost of early departures", "Agencies operate on thinner margins so every salary payment to a non-performer hits harder", "Agency clients demand exclusivity clauses that prevent quick replacement hiring"], c: 0 },
    { q: "DH's company mission — 'Point A to Point B' — refers to taking businesses from what to what?", o: ["Small revenue to large revenue", "Freelance chaos to stable, scalable delivery", "No online presence to full e-commerce setup", "Domestic clients to international clients"], c: 1 },
    { q: "According to the escalation decision tree, what is the FIRST question HR should ask when deciding whether to escalate an issue?", o: ["Does it involve money above ₹50,000?", "Is it a recurring problem that has happened 2+ times?", "Is it a zero-tolerance issue? (Fraud, harassment, data theft, substance abuse)", "Can I resolve it within 48 hours with a conversation?"], c: 2 },
    { q: "What is the correct cost breakdown in the Bad Hire Cost Calculator formula?", o: ["Salary paid + recruiter fees + job board costs only", "Salary × months + senior's time × hours + client revenue lost + re-hiring cost + new hire training cost", "Annual salary × 3 as a flat multiplier", "Salary paid + legal fees + severance + outplacement services"], c: 1 }
];

const task2Content = `
<h2>📚 TASK 2: JD Writing, Sourcing & Candidate Filtering</h2>

<div class="content-section">
<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">Your Job Description is the first thing a candidate sees — it determines whether A-players apply or scroll past. Your sourcing strategy determines whether you're fishing in a pond or an ocean. Master these skills and you'll never struggle to fill a role again.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Recruiting is not about filling seats. It's about finding the right people who will make the organization better." — Lou Adler</p>
</div>
</div>

<div class="content-section">
<h3>📝 Why Your Job Description Is Your First Interview</h3>
<p>A Job Description is not just a list of requirements you post on a job board. It is the <strong>first impression</strong> a candidate has of Digital Heroes. It is your first filter. A vague, generic JD attracts hundreds of unqualified applicants and wastes days of screening time. A specific, well-written JD makes A-players want to apply and makes B-players self-select out.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Story — The JD That Wasted 3 Days:</strong><br><br>
We posted a generic JD for a Shopify developer: <em>"Looking for developer with 2+ years experience. Must know HTML, CSS, JavaScript."</em> We received 200 applications. 195 were completely unqualified — people who knew basic HTML from a free online course but had never even seen a Shopify store. The HR team spent 3 full days screening garbage applications, and still only found 5 worth a phone call.<br><br>
Then we rewrote the JD with specific requirements: <em>"Shopify developer who has built custom themes using Liquid, created metafield-driven sections, and integrated third-party apps via REST API."</em> We got 40 applications. <strong>15 were genuinely qualified.</strong> Same role, same salary, same job boards — the JD made all the difference. We saved 3 days of screening time and found better candidates.
</div>
</div>

<div class="content-section">
<h3>❌ BAD JD vs ✅ GOOD JD — Side by Side</h3>
<p>Let's compare a terrible JD against a great one for the same role. Study the differences carefully — this is what separates HR amateurs from professionals.</p>

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
<strong style="color:#EF4444;">Problems:</strong>
<ul>
<li>No mention of Shopify — attracts every frontend developer in India</li>
<li>"Competitive salary" = "we'll pay as little as possible"</li>
<li>No company info — who is this? Why should I care?</li>
<li>"Team player" and "fast learner" are meaningless buzzwords</li>
<li>No growth path — A-players want to know where they're going</li>
<li>Result: 200 applications, 195 unqualified, 3 days wasted screening</li>
</ul>
</div>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px;">
<strong>✅ GOOD JD — Shopify Developer</strong><br><br>
"<strong>Digital Heroes</strong> builds and optimizes Shopify stores for global D2C brands ($5M-$50M revenue). We are hiring a Shopify developer who can:<br>
- Build custom themes with <strong>Liquid</strong><br>
- Create dynamic sections using <strong>metafields & JSON schemas</strong><br>
- Integrate apps via <strong>Shopify REST/GraphQL API</strong><br>
- Optimize stores for <strong>90+ PageSpeed mobile scores</strong><br><br>
You will own 2-3 client stores from day 1. CTC: ₹4-8 LPA based on experience. Growth to Team Lead within 18 months."
<br><br>
<strong style="color:#10B981;">Why it works:</strong>
<ul>
<li>Specific technologies mentioned — self-selects qualified candidates</li>
<li>Company context — candidates know who they're joining</li>
<li>Clear CTC range — saves everyone's time</li>
<li>Ownership language ("own 2-3 stores") — attracts ambitious people</li>
<li>Growth path — top talent wants career progression</li>
<li>Result: 40 applications, 15 qualified, hired in 10 days</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>📋 The 7 Essential Components of a DH Job Description</h3>
<p>Every JD you write at DH must include these 7 components. Missing even one will reduce application quality significantly.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">#</th><th style="padding:12px;text-align:left;">Component</th><th style="padding:12px;text-align:left;">Purpose</th><th style="padding:12px;text-align:left;">Example</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Job Title</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Searchability — must include keywords candidates actually search for</td><td style="padding:10px;border:1px solid #E2E8F0;">"Shopify Developer (Liquid + Theme Customization)" — NOT "Web Developer"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">2</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Company Intro</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Context — who you are, what you do, why you matter</td><td style="padding:10px;border:1px solid #E2E8F0;">"Digital Heroes is a Shopify Plus agency serving 200+ global D2C brands"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">3</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Responsibilities</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">What they'll OWN, not just do — use action verbs</td><td style="padding:10px;border:1px solid #E2E8F0;">"Own 2-3 client stores. Build custom sections. Optimize PageSpeed to 85+."</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">4</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Requirements (Must-Have)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Non-negotiable skills — maximum 5-6 to avoid scaring away good candidates</td><td style="padding:10px;border:1px solid #E2E8F0;">"Liquid, JavaScript, REST APIs, Git, 1+ live Shopify store in portfolio"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Nice-to-Haves</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Clearly separate from must-haves so candidates don't self-reject</td><td style="padding:10px;border:1px solid #E2E8F0;">"React, Node.js, Figma awareness, Shopify Plus experience"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">6</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Benefits & CTC Range</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Saves everyone's time — candidates with higher expectations self-select out</td><td style="padding:10px;border:1px solid #E2E8F0;">"CTC: ₹4-8 LPA (base + performance bonus). WFH flexibility after 6 months."</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">7</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Application Process</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Set expectations — reduces candidate anxiety and "when will I hear back?" follow-ups</td><td style="padding:10px;border:1px solid #E2E8F0;">"Apply → Task (48 hrs) → Video Interview → Trial Day → Offer. Full process takes 10-14 days."</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 SEO for Job Postings:</strong><br>
Your JD competes with thousands of others on job boards. To get found by the right candidates:<br>
<ul>
<li><strong>Title keywords:</strong> Include the specific technology/platform (e.g., "Shopify Developer" not "Web Developer")</li>
<li><strong>Searchable terms:</strong> Use what candidates actually search for — "Figma Designer" gets more searches than "UI/UX Professional"</li>
<li><strong>Location tag:</strong> Always include city even for remote roles — "Remote (India)" or "Jaipur, Rajasthan"</li>
<li><strong>Salary range:</strong> Posts with salary ranges get 75% more applications on LinkedIn and Naukri</li>
<li><strong>Avoid jargon:</strong> "Ninja" and "Rockstar" are not searchable terms — use industry-standard titles</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📄 Complete JD Templates for All DH Roles</h3>
<p>Below are detailed JD blueprints for every role at DH. Each template includes the specific skills, tools, responsibilities, and KPIs that make the JD effective. Use these as your starting point — customize based on the specific hiring need.</p>

<h4>1. 💻 Shopify Developer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Shopify Liquid templating, HTML5/CSS3/JavaScript (ES6+), Dawn theme architecture, Git version control, PageSpeed optimization techniques, responsive design, Section Schema (JSON), Metafields<br><br>
<strong>Tools:</strong> Shopify CLI, VS Code, Chrome DevTools, GitHub, Lighthouse, GTmetrix<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Build custom Shopify themes and sections from Figma designs</li>
<li>Create reusable, dynamic sections with JSON schema for merchant customization</li>
<li>Integrate third-party apps using REST/GraphQL APIs</li>
<li>Optimize store performance to achieve 85+ PageSpeed mobile scores</li>
<li>Debug cross-browser and cross-device issues</li>
<li>Participate in code reviews and maintain clean, documented code</li>
</ul>
<strong>KPIs:</strong> PageSpeed 85+ mobile, zero QA issues per sprint, &lt;3 revision rounds per task, zero console errors in production, 100% responsive across devices
</div>

<h4>2. 🎨 UI/UX Designer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Figma (advanced — components, auto-layout, variants), color theory and typography, mobile-first design methodology, 8px grid system, accessibility standards (WCAG 2.1, 44px minimum touch targets), e-commerce UX patterns<br><br>
<strong>Tools:</strong> Figma, Adobe Creative Suite (Photoshop, Illustrator), Coolors, Google Fonts, Shopify theme editor<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Design complete Shopify store UI — homepage, collection pages, product pages, cart, checkout</li>
<li>Create responsive designs for mobile, tablet, and desktop breakpoints</li>
<li>Build and maintain a design system with reusable components and style guides</li>
<li>Conduct UX audits on existing client stores and propose improvements</li>
<li>Collaborate with developers to ensure pixel-perfect implementation</li>
</ul>
<strong>KPIs:</strong> 100% brand alignment per client brief, &lt;2 revision rounds per design, 5-star client approval rating, mobile-optimized designs for every project, consistent use of design system components
</div>

<h4>3. 🔧 Full Stack Developer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> React or Vue.js or Next.js (frontend framework), Node.js (backend), SQL (PostgreSQL/MySQL) or MongoDB, RESTful API design and documentation, automated testing (Jest, Mocha, or similar), deployment and CI/CD (Vercel, AWS, or similar)<br><br>
<strong>Tools:</strong> VS Code, GitHub, Postman, Docker (nice-to-have), Vercel/Netlify, database management tools<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Design and build full-stack web applications for client custom projects</li>
<li>Create scalable, well-documented RESTful APIs</li>
<li>Implement frontend interfaces with modern JavaScript frameworks</li>
<li>Write comprehensive test suites (unit, integration, e2e)</li>
<li>Deploy applications and manage production environments</li>
<li>Conduct system design reviews and code reviews</li>
</ul>
<strong>KPIs:</strong> 99.9% application uptime, &lt;200ms average API response time, zero critical bugs in production, 100% test coverage for critical paths, clean git history with meaningful commits
</div>

<h4>4. 📊 Project Manager</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Timeline management and resource allocation, client communication (written and verbal), risk identification and mitigation, QA process management, Agile/Scrum methodology, stakeholder management<br><br>
<strong>Tools:</strong> Jira or Asana, Slack, Google Workspace, Loom, Notion, Figma (for design review)<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Manage end-to-end delivery of Shopify store builds (14-day build timeline)</li>
<li>Coordinate between designers, developers, content writers, and clients</li>
<li>Conduct daily standups and weekly client update calls</li>
<li>Identify risks early and escalate before they become blockers</li>
<li>Run QA on all deliverables before client handoff</li>
</ul>
<strong>KPIs:</strong> 100% on-time delivery, &lt;1 hour average response time to client messages, 5-star client satisfaction rating, 14-day average build timeline, zero missed deadlines per quarter
</div>

<h4>5. ✍️ Content Writer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> SEO copywriting (on-page optimization, keyword integration), keyword research using Ahrefs/SEMrush/Ubersuggest, AIDA and PAS copywriting frameworks, brand voice adaptation, product description writing for e-commerce<br><br>
<strong>Tools:</strong> Google Docs, Grammarly, Hemingway Editor, Ahrefs/SEMrush, WordPress, Shopify blog editor<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Write SEO-optimized blog posts (1,500-3,000 words) for client websites</li>
<li>Create product descriptions that convert (feature-benefit-proof format)</li>
<li>Adapt writing style to match each client's brand voice</li>
<li>Conduct keyword research and create content briefs</li>
<li>Edit and proofread all content before submission</li>
</ul>
<strong>KPIs:</strong> Zero grammar/spelling errors per deliverable, &lt;2 revision rounds per piece, 100% brand voice match as assessed by client, SEO meta tags and headers properly optimized, on-time delivery of all content assignments
</div>

<h4>6. 💰 Sales Executive</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Lead qualification using M.T.N.D framework (Money, Timeline, Need, Decision-maker), pricing authority and package presentation, CRM discipline and pipeline management, objection handling, Fiverr/Upwork platform communication<br><br>
<strong>Tools:</strong> Fiverr, Upwork, CRM (HubSpot or equivalent), Slack, Google Sheets, Loom<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Respond to inbound leads within 1 hour during business hours</li>
<li>Qualify leads using M.T.N.D framework — do not pursue unqualified leads</li>
<li>Present packages and pricing confidently — no unauthorized discounts</li>
<li>Manage sales pipeline from first contact to closed deal</li>
<li>Maintain CRM with accurate deal stages, notes, and follow-up dates</li>
</ul>
<strong>KPIs:</strong> $1,200+ average order value (AOV), &lt;1 hour average first response time, 0% unauthorized discount rate, 4.9+ platform rating average, consistent pipeline with 15+ active deals
</div>

<h4>7. 🤝 Customer Success Manager</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Client relationship management, proactive communication, issue resolution and escalation, review and feedback management, upselling and cross-selling<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Serve as the primary point of contact for assigned client accounts</li>
<li>Proactively check in with clients — do not wait for them to reach out</li>
<li>Handle complaints with empathy, speed, and documented resolution</li>
<li>Request reviews at the right moment in the client journey</li>
<li>Identify upsell opportunities and warm-hand-off to sales</li>
</ul>
<strong>KPIs:</strong> 5-star average client rating, 90% review request success rate, 30% repeat business rate, &lt;1% refund rate, &lt;2 hour response time to client messages
</div>

<h4>8. 📱 Social Media Manager</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Content strategy and calendar planning, graphic design (Canva/Figma), copywriting for social platforms, analytics and reporting, community management<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Create and maintain a monthly content calendar across all platforms</li>
<li>Design and publish daily posts (graphics + copy)</li>
<li>Engage with followers — respond to comments and DMs within 2 hours</li>
<li>Track performance metrics and produce weekly analytics reports</li>
<li>Stay updated on platform algorithm changes and trends</li>
</ul>
<strong>KPIs:</strong> 10% monthly follower growth, 5%+ engagement rate, daily posting consistency (no gaps), &lt;2 hour response time to comments/DMs, monthly analytics report delivered on time
</div>

<h4>9. 👥 HR Executive</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Recruitment and talent acquisition, interviewing and assessment, employee relations and conflict resolution, HRIS/ATS tools, policy documentation, onboarding program design<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Manage end-to-end recruitment for all roles</li>
<li>Conduct initial phone screens and coordinate interview processes</li>
<li>Design and execute onboarding programs for new hires</li>
<li>Maintain employee records and ensure policy compliance</li>
<li>Handle employee queries, grievances, and conflict resolution</li>
</ul>
<strong>KPIs:</strong> &lt;30 day average time to hire, 90%+ new hire retention (6-month), 85%+ employee satisfaction score, 100% onboarding completion rate, zero compliance violations
</div>

<h4>10. 📈 Finance & Accounts Executive</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Required Skills:</strong> Invoice generation and tracking, accounts receivable/payable management, payroll processing, financial reporting, tax compliance basics, Excel/Google Sheets (advanced)<br><br>
<strong>Responsibilities:</strong>
<ul>
<li>Generate and send invoices on time for all client projects</li>
<li>Track payments and follow up on overdue accounts</li>
<li>Process monthly payroll accurately and on time</li>
<li>Maintain clean financial records for audits</li>
<li>Prepare weekly financial reports for management</li>
</ul>
<strong>KPIs:</strong> 100% on-time invoice generation, &lt;7 day average DSO (days sales outstanding), zero payroll errors per cycle, clean audit records, weekly financial reports delivered on schedule
</div>
</div>

<div class="content-section">
<h3>🔍 Candidate Filtering Parameters by Role — The Deep Dive</h3>
<p>This is the most critical section for day-to-day HR work. Generic screening (just reading resumes) is only 20% effective. Role-specific filtering criteria are what separate good HR from great HR. Below are the exact signals to look for — and red flags to watch out for — when screening candidates for each DH role.</p>

<h4>💻 Shopify Developer Filtering</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>GitHub Profile Analysis:</strong>
<ul>
<li>Look for <strong>4+ years of contributions</strong> with consistent commit history (not just green squares in January from a New Year's resolution)</li>
<li>Check for Shopify-specific repos: themes, apps, Liquid code, custom sections</li>
<li><strong style="color:#EF4444;">Red flag:</strong> Empty GitHub or only forked repos with zero personal contributions — means they copy-paste, don't build</li>
<li><strong style="color:#10B981;">Green flag:</strong> Repos with clear README files, meaningful commit messages, and organized code structure</li>
</ul>
<strong>Portfolio Requirements:</strong>
<ul>
<li><strong>3+ live Shopify stores they built</strong> — not just "contributed to" or "was part of the team"</li>
<li>Ask for specific URLs and what exactly they built on each store</li>
<li>Run PageSpeed Insights on their stores — if their own portfolio stores score below 60, they cannot optimize yours</li>
</ul>
<strong>Technical Verification:</strong>
<ul>
<li>Ask them to optimize a slow page live during the interview — reveals real vs claimed skills</li>
<li>Review a code sample for: naming conventions, code structure, comments, and Liquid best practices</li>
<li>Ask about Dawn theme architecture — anyone claiming Shopify experience should know this</li>
</ul>
</div>

<h4>🎨 UI/UX Designer Filtering</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Portfolio Analysis (Figma/Dribbble/Behance):</strong>
<ul>
<li>Portfolio should be <strong>organized and show process</strong> — not just final mockups. Look for wireframes, user flows, iterations.</li>
<li>Check for <strong>mobile-first thinking</strong> — do their designs show mobile versions? If every design is desktop-only, they are not e-commerce ready.</li>
<li>Look for <strong>e-commerce experience specifically</strong> — have they designed product pages, collection pages, checkout flows?</li>
<li><strong style="color:#EF4444;">Red flag:</strong> Only print design, graphic design, or logo work with no web/UI experience — completely different skill set</li>
<li><strong style="color:#EF4444;">Red flag:</strong> Portfolio that is all Dribbble "concepts" with no real client work — pretty but impractical</li>
</ul>
<strong>Design System Knowledge:</strong>
<ul>
<li>Can they build components and variants in Figma? This is non-negotiable for production work.</li>
<li>Do they understand auto-layout, constraints, and responsive design in Figma?</li>
<li><strong style="color:#10B981;">Green flag:</strong> Before/after case studies showing measurable client results from their design changes (e.g., "Redesigned checkout flow, reducing cart abandonment by 15%")</li>
</ul>
</div>

<h4>🔧 Full Stack Developer Filtering</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>GitHub & Code Quality:</strong>
<ul>
<li>Contribution graph should show consistent activity — not bursts followed by months of silence</li>
<li>Repo quality matters more than quantity — look for README documentation, clean code structure, meaningful commit messages</li>
<li><strong style="color:#10B981;">Green flag:</strong> Stack Overflow profile with answers and reputation — shows teaching ability and deep understanding</li>
</ul>
<strong>Live Projects:</strong>
<ul>
<li>Must have <strong>working deployed applications</strong> — not just local demos or GitHub repos without a live URL</li>
<li>Check for: error handling, loading states, responsive design, clean URLs, proper 404 pages</li>
<li>If they claim to know APIs, ask them to show an API they built — check documentation, status codes, error responses</li>
</ul>
<strong>System Design Ability:</strong>
<ul>
<li>Can they whiteboard (or describe) the architecture for a simple e-commerce application?</li>
<li>Do they think about scalability, caching, database design, and security?</li>
<li><strong style="color:#EF4444;">Red flag:</strong> Cannot explain their own code when asked — they may have used AI to generate it without understanding it</li>
</ul>
</div>

<h4>📊 Project Manager Filtering</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Writing Sample Test:</strong>
<ul>
<li>Ask for a sample client update email — reveals communication quality, structure, and professionalism</li>
<li>Good PMs write clear, scannable updates with status, blockers, and next steps — not 500-word essays</li>
</ul>
<strong>Scenario Test:</strong>
<ul>
<li>Present this scenario: <em>"A client wants a feature added mid-project for free. The timeline is already tight. What do you do?"</em></li>
<li>Bad answer: "I'll add it to keep the client happy" (scope creep without pushback)</li>
<li>Good answer: "I'll acknowledge the request, explain the timeline and cost impact, offer alternatives (Phase 2 or paid add-on), and document the decision"</li>
</ul>
<strong>Tool Proficiency:</strong>
<ul>
<li>Must demonstrate hands-on experience with project management tools (Jira, Asana, ClickUp)</li>
<li>Ask them to walk through how they set up a project board — reveals whether they actually used the tool or just listed it on their resume</li>
<li>References from previous clients or team members are highly valuable for PM roles</li>
</ul>
</div>

<h4>✍️ Content Writer Filtering</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Writing Samples:</strong>
<ul>
<li>Must show samples across different industries and voices — not just one style</li>
<li>Check for: clear structure, engaging intros, proper subheadings, calls to action</li>
<li><strong style="color:#EF4444;">Red flag:</strong> All samples sound identical — means they cannot adapt to different brand voices</li>
</ul>
<strong>SEO Knowledge Test:</strong>
<ul>
<li>Give them a topic (e.g., "best Shopify themes for fashion stores") and ask for: target keyword, 3 long-tail keywords, a meta title, a meta description, and a blog outline</li>
<li>This takes 15 minutes and reveals whether they understand SEO or just claim to</li>
</ul>
<strong>Speed Test:</strong>
<ul>
<li>Ask them to write a product description (150-200 words) for a specific product in 15 minutes</li>
<li>Evaluates: speed under pressure, quality of first draft, ability to write benefit-focused copy</li>
</ul>
<strong>Grammar Test:</strong>
<ul>
<li>Provide a paragraph with 10 deliberate errors. Ask them to find all of them.</li>
<li>Good writers catch 8-10. Average catch 5-7. Below 5 = immediate reject.</li>
</ul>
</div>

<h4>💰 Sales Executive Filtering</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Metrics-Based Assessment:</strong>
<ul>
<li>Ask for previous sales metrics: conversion rate, AOV, quota attainment percentage</li>
<li>Good sales candidates know their numbers. If they cannot tell you their conversion rate, they were not tracking it.</li>
</ul>
<strong>Role-Play Test:</strong>
<ul>
<li>Send them a mock Fiverr inquiry: <em>"Hi, I need a Shopify store built. What's your pricing?"</em></li>
<li>Evaluate: response speed (did they reply within hours or days?), qualification questions asked, pricing presentation, tone</li>
<li><strong style="color:#10B981;">Green flag:</strong> They ask qualifying questions (budget, timeline, store type) before quoting price</li>
<li><strong style="color:#EF4444;">Red flag:</strong> They immediately quote the lowest price or offer a discount to "win the deal"</li>
</ul>
<strong>Response Speed During Hiring:</strong>
<ul>
<li>How quickly do they reply to YOUR messages during the hiring process? If they take 3 days to respond to an HR email, they will take 3 days to respond to a client inquiry.</li>
<li>Sales is about speed. Evaluate their speed from the first interaction.</li>
</ul>
<strong>Objection Handling:</strong>
<ul>
<li>Throw 3 objections at them: "Your price is too high," "I found someone cheaper on Fiverr," "Can you do a free trial first?"</li>
<li>Good sales candidates handle objections with confidence and value-based responses, not panic discounting</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🌐 Sourcing Channels — Ranked by Quality</h3>
<p>Not all sourcing channels are created equal. Here is the DH ranking based on actual hiring data — quality of candidates, cost per hire, and time to hire for each channel.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Rank</th><th style="padding:12px;text-align:left;">Channel</th><th style="padding:12px;text-align:left;">Best For</th><th style="padding:12px;text-align:left;">Quality Rating</th><th style="padding:12px;text-align:left;">Cost</th><th style="padding:12px;text-align:left;">Notes</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>LinkedIn</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Experienced professionals (2+ years)</td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">Medium (InMail credits, LinkedIn Recruiter)</td><td style="padding:10px;border:1px solid #E2E8F0;">Use Boolean search for targeted outreach. Best ROI for skilled roles.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">2</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Employee Referrals</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">All roles — highest quality candidates</td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">Low (referral bonus only)</td><td style="padding:10px;border:1px solid #E2E8F0;">Pre-vetted by someone who knows the work. Include referral bonus: ₹5,000-₹15,000 based on role.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">3</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Naukri / Indeed</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Volume hiring, entry-level roles</td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">Low-Medium</td><td style="padding:10px;border:1px solid #E2E8F0;">High volume but lower quality. Need rigorous screening. Good for HR, finance, content roles.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">4</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Campus Hiring</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Interns, train-from-scratch roles</td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">Low</td><td style="padding:10px;border:1px solid #E2E8F0;">Raw talent. Good for building loyalty. High training investment required.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Freelance Platforms (Fiverr, Upwork)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Testing before full-time hiring</td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">Variable</td><td style="padding:10px;border:1px solid #E2E8F0;">Give them 2-3 paid projects first. If quality is consistent, offer full-time. Proven work > resume.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">6</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Social Media (Instagram, X/Twitter)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Creative roles (designers, social media managers)</td><td style="padding:10px;border:1px solid #E2E8F0;">⭐⭐⭐</td><td style="padding:10px;border:1px solid #E2E8F0;">Free-Low</td><td style="padding:10px;border:1px solid #E2E8F0;">Great for finding designers and content creators whose work is publicly visible.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🔎 Boolean Search — LinkedIn Power Techniques</h3>
<p>Boolean search transforms LinkedIn from a social network into a precision talent-finding tool. Master these techniques and you will find candidates that other recruiters miss entirely.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Boolean Operators:</strong>
<ul>
<li><strong>AND</strong> — both terms must be present: <code>"Shopify" AND "developer"</code></li>
<li><strong>OR</strong> — either term: <code>"UI/UX" OR "Figma"</code></li>
<li><strong>NOT</strong> — exclude term: <code>"developer" NOT "WordPress"</code></li>
<li><strong>" "</strong> — exact phrase: <code>"Shopify developer"</code></li>
<li><strong>( )</strong> — grouping: <code>("Shopify" OR "Liquid") AND ("developer" OR "engineer")</code></li>
</ul>
</div>

<h4>Ready-to-Use Boolean Strings for DH Roles:</h4>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Shopify Developer:</strong><br>
<code>("Shopify" OR "Liquid") AND ("developer" OR "engineer") AND ("freelance" OR "agency") NOT "WordPress"</code><br><br>
<strong>UI/UX Designer:</strong><br>
<code>("UI/UX" OR "Figma") AND ("e-commerce" OR "Shopify") AND "portfolio" NOT "graphic design only"</code><br><br>
<strong>Full Stack Developer:</strong><br>
<code>("React" OR "Vue" OR "Next.js") AND ("Node.js" OR "Express") AND ("MongoDB" OR "PostgreSQL") AND ("API" OR "full stack")</code><br><br>
<strong>Content Writer:</strong><br>
<code>("SEO" OR "content writer") AND ("e-commerce" OR "Shopify" OR "D2C") AND ("blog" OR "copywriting")</code><br><br>
<strong>Sales Executive:</strong><br>
<code>("sales" OR "business development") AND ("Fiverr" OR "Upwork" OR "freelance" OR "agency") AND ("Shopify" OR "e-commerce" OR "web development")</code><br><br>
<strong>Project Manager:</strong><br>
<code>("project manager" OR "delivery manager") AND ("Shopify" OR "e-commerce" OR "web development" OR "agency") AND ("Jira" OR "Asana" OR "agile")</code>
</div>
</div>

<div class="content-section">
<h3>📧 Passive Candidate Outreach</h3>
<p>The best candidates are not actively looking for jobs. They are happily employed, doing great work, and not browsing Naukri. To hire them, you need to reach out proactively — and your first message determines whether they respond or ignore you forever.</p>

<h4>InMail Template for Passive Outreach:</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Loved your [specific project/work] — opportunity at Digital Heroes<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
I came across your [specific work — e.g., "Shopify theme for BrandX" or "product page redesign on Dribbble"] and was genuinely impressed by [specific detail — e.g., "the section schema implementation" or "the mobile checkout flow"].<br><br>
I'm with Digital Heroes — we build Shopify stores for global D2C brands ($5M-$50M revenue). We're looking for a [role] who can [1 specific thing they'd do — e.g., "own 2-3 client stores and lead our theme development"].<br><br>
CTC range: [range]. Growth to [next role] within [timeline].<br><br>
Would you be open to a 15-minute chat this week? No pressure — happy to share more about the role even if the timing isn't right.<br><br>
Best,<br>
[Your name] | HR, Digital Heroes
</div>

<h4>Follow-Up Sequence:</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Day</th><th style="padding:12px;text-align:left;">Action</th><th style="padding:12px;text-align:left;">Tone</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Day 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Initial InMail (personalized as above)</td><td style="padding:10px;border:1px solid #E2E8F0;">Warm, specific, value-driven</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Day 3</td><td style="padding:10px;border:1px solid #E2E8F0;">Follow-up: "Just checking if you saw my message. Happy to share more details about the role and team."</td><td style="padding:10px;border:1px solid #E2E8F0;">Brief, no pressure</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Day 7</td><td style="padding:10px;border:1px solid #E2E8F0;">Final follow-up: "Last ping — no worries if the timing isn't right. Feel free to connect for future opportunities."</td><td style="padding:10px;border:1px solid #E2E8F0;">Graceful close, leave door open</td></tr>
</tbody>
</table>
<strong>After Day 7 with no response:</strong> Move on. Do NOT send 4th, 5th, or 6th messages. Three is the maximum. Anything beyond that damages the DH brand.
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 What Makes Candidates Respond:</strong><br>
<ul>
<li><strong>Personalization:</strong> Mention their specific work — not "I loved your profile" but "I loved your product page redesign for BrandX"</li>
<li><strong>Specificity:</strong> Tell them exactly what they would do, not vague "exciting opportunity" language</li>
<li><strong>Growth opportunity:</strong> Top candidates care about career trajectory as much as salary</li>
<li><strong>Salary range upfront:</strong> Saves everyone's time and signals transparency</li>
<li><strong>Low-pressure tone:</strong> "15-minute chat, no pressure" converts better than "immediate interview"</li>
</ul>
<strong>Response rate benchmarks:</strong> Generic InMails get 5-10% response. Personalized InMails get 25-40%. The extra 5 minutes of personalization are worth it every time.
</div>
</div>

<div class="content-section">
<h3>🏢 Employer Branding — Making DH Attractive to Top Talent</h3>
<p>Employer branding is the long game. It is what makes candidates choose DH over a competitor offering ₹5,000 more per month. It is the reason top talent reaches out to YOU instead of you chasing them.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🎯 The 5 Pillars of DH Employer Branding:</strong><br><br>

<strong>1. LinkedIn Company Page Optimization:</strong>
<ul>
<li>Professional banner showcasing team and clients</li>
<li>Regular posts about client wins, team achievements, and company milestones</li>
<li>"Life at DH" posts showing real work culture (not staged stock photos)</li>
<li>Employee spotlight features — let team members share their growth stories</li>
</ul>

<strong>2. Team Culture Content:</strong>
<ul>
<li>Behind-the-scenes content: team meetings, brainstorming sessions, celebrations</li>
<li>Project showcases: before/after of stores DH has built</li>
<li>Learning and growth: share training modules, certifications, upskilling opportunities</li>
<li>Avoid toxic positivity — authentic content performs better than fake "best workplace ever" posts</li>
</ul>

<strong>3. Glassdoor/AmbitionBox Presence:</strong>
<ul>
<li>Encourage (never pressure) happy employees to leave reviews</li>
<li>Respond professionally to every review — positive and negative</li>
<li>Address negative feedback constructively — shows maturity</li>
<li>Target: 4.0+ rating with 20+ reviews for credibility</li>
</ul>

<strong>4. Referral Program:</strong>
<ul>
<li>Structured referral bonus: ₹5,000 for entry-level, ₹10,000 for mid-level, ₹15,000 for senior roles</li>
<li>Bonus paid after the referred candidate completes 3 months</li>
<li>Recognition in team meetings for successful referrals</li>
</ul>

<strong>5. Career Page & JDs:</strong>
<ul>
<li>Careers page should showcase: mission, culture, benefits, growth paths, and current openings</li>
<li>Every JD is a marketing document — write it as such</li>
<li>Include real employee testimonials (not corporate-sounding quotes)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🔧 Shopify Developer Trial Task — The 1-Day Practical Test</h3>
<p>For Shopify Developer hires specifically, DH uses a paid 1-day trial task that goes beyond the AI app task. This is the final gate before an offer is extended.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">🛠️ What the Trial Task Involves:</strong><br><br>
<p style="color: #000;">The candidate receives a <strong>real broken Shopify store</strong> (or a staging copy) and must complete the following within one working day:</p>
<ul style="color: #000; line-height: 2;">
<li><strong>Fix 3 bugs</strong> — Could be broken Liquid logic, CSS layout issues, or JavaScript errors on the storefront</li>
<li><strong>1 speed optimization</strong> — Identify and fix a performance bottleneck (lazy loading, image compression, render-blocking scripts, etc.)</li>
<li><strong>1 custom section build</strong> — Create a new dynamic Liquid section with schema settings that the store owner can customize from the theme editor</li>
</ul>
<br>
<strong style="color: #000;">💰 Compensation:</strong> <span style="color: #000;">₹500 paid for the day, regardless of outcome. This ensures fairness and shows respect for the candidate's time.</span><br><br>
<strong style="color: #000;">📊 Evaluation Criteria:</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Criteria</th><th style="padding:12px;text-align:left;">Weight</th><th style="padding:12px;text-align:left;">What You're Looking For</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Code Quality</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">30%</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Clean, readable code. Proper Liquid syntax. No hardcoded values. Uses schema settings correctly.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Speed</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">25%</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Can they complete all 5 items in a single day? Time management under real conditions.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Communication</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">25%</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Do they ask clarifying questions? Do they update progress? Do they explain their approach?</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Problem-Solving Approach</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">20%</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">How do they debug? Do they use dev tools effectively? Do they Google efficiently or struggle blindly?</td></tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>⏱️ Hiring Pipeline Timing — From Resume to Offer</h3>
<p>Every stage of the DH hiring pipeline has a specific time allocation. Sticking to these ensures you don't lose good candidates to slow processes.</p>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">Stage-by-Stage Time Breakdown:</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Stage</th><th style="padding:12px;text-align:left;">Time Per Candidate</th><th style="padding:12px;text-align:left;">HR Action</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Resume Filter</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">2 minutes</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">30-second scan + tag as Yes/No/Maybe. Use role-specific checklist.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Phone Screen</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">10 minutes</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Verify CTC, notice period, availability. Check basic communication. Use the script.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>AI App Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">2 hours (candidate time)</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Send task, wait 48hrs for submission, evaluate with hiring manager. ~30 min to review each.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Video Interview</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">20 minutes (core)</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Structured interview with scorecard. 45-60 min total with warm-up and close.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Trial Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">1 day</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Coordinate with hiring manager. Paid ₹500. Evaluate code quality, speed, communication, problem-solving.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways — Module 2</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Your JD is your first interview</strong> — a specific JD attracts 15 qualified applicants; a generic one attracts 200 unqualified ones</li>
<li><strong>7 essential JD components:</strong> Title, Company Intro, Responsibilities, Requirements, Nice-to-Haves, Benefits/CTC, Application Process</li>
<li><strong>Never write "competitive salary"</strong> — always include a CTC range. Posts with ranges get 75% more applications.</li>
<li><strong>Role-specific filtering is non-negotiable:</strong> Check GitHub for developers, Figma portfolios for designers, writing samples for content writers, response speed for sales</li>
<li><strong>LinkedIn Boolean search is your power tool:</strong> Master AND, OR, NOT, quotes, and parentheses for precision targeting</li>
<li><strong>Passive outreach requires personalization:</strong> Generic InMails get 5-10% response. Personalized ones get 25-40%.</li>
<li><strong>Maximum 3 follow-ups:</strong> Day 1, Day 3, Day 7 — then move on. Never send more.</li>
<li><strong>Employer branding is the long game:</strong> LinkedIn content, Glassdoor reviews, referral programs, and authentic culture posts make candidates come to you.</li>
</ol>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li>A specific JD attracts 15 qualified applicants; a generic one attracts 200 unqualified ones — the JD IS your first interview</li>
        <li>Every JD needs 7 components: Title, Company Intro, Responsibilities, Requirements, Nice-to-Haves, Benefits/CTC, Application Process</li>
        <li>Role-specific filtering is non-negotiable: GitHub for devs, Figma portfolios for designers, writing samples for content, response speed for sales</li>
        <li>The Shopify trial task is the ultimate filter: 3 bugs + 1 speed optimization + 1 custom section, paid ₹500, evaluated on code quality, speed, communication, and problem-solving</li>
        <li>Hiring pipeline timing: 2 min resume filter, 10 min phone screen, 2hr AI task, 20 min video interview, 1 day trial</li>
        <li>LinkedIn Boolean search and personalized outreach (25-40% response rate) are your power tools for passive candidates</li>
        <li>Maximum 3 follow-ups: Day 1, Day 3, Day 7 — then move on. Never chase a candidate who isn't interested</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">Every great hire starts with a great JD and a great sourcing strategy — both of which are 100% in YOUR control. The developers building stores, the designers creating landing pages, the sales executives closing deals — they all entered the pipeline because YOU wrote a JD that attracted them and YOU filtered them through the right channels.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The best executive is the one who has sense enough to pick good people to do what needs to be done, and self-restraint to keep from meddling with them while they do it." — Theodore Roosevelt</p>
    </div>
</div>

`;

const task2Quiz = [
    { q: "At DH, a generic Shopify developer JD attracted 200 applications. How many were qualified?", o: ["About 50 (25%)", "About 25 (12.5%)", "Only 5 (2.5%)", "About 100 (50%)"], c: 2 },
    { q: "How many essential components should every DH Job Description include?", o: ["7 — Title, Company Intro, Responsibilities, Requirements, Nice-to-Haves, Benefits/CTC, Application Process", "5 — Title, Intro, Skills, Salary, Benefits", "4 — Title, Skills, Salary, Apply button", "10 — including team photos and office location details"], c: 0 },
    { q: "When filtering Shopify Developer candidates, what is a red flag on their GitHub profile?", o: ["Having less than 100 repositories", "An empty GitHub or only forked repos with zero personal contributions", "Not having a GitHub Pro subscription", "Having repositories in multiple programming languages"], c: 1 },
    { q: "What is the correct Boolean search string format for finding Shopify developers on LinkedIn?", o: ["Shopify + developer + freelance (using plus signs)", "shopify developer freelance (plain text without operators)", "#shopify #developer #freelance (using hashtags)", "\"Shopify\" AND \"developer\" AND \"freelance\" (using Boolean operators with quotes)"], c: 3 },
    { q: "According to the sourcing channels ranking, which channel provides the HIGHEST quality candidates?", o: ["Naukri/Indeed (highest volume = highest quality)", "Campus hiring (fresh talent is most trainable)", "LinkedIn and Employee Referrals (tied at 5 stars)", "Social media platforms like Instagram"], c: 2 },
    { q: "When reaching out to passive candidates, what is the maximum number of follow-up messages before you stop?", o: ["2 follow-ups (Day 1 initial + Day 3 follow-up)", "3 total messages (Day 1, Day 3, Day 7) — then move on", "5 messages spread over 2 weeks", "Keep following up monthly until they respond"], c: 1 },
    { q: "For UI/UX Designer filtering, which of the following is a RED flag?", o: ["Having a portfolio with only print/graphic design and no web/UI experience", "Using Figma instead of Adobe XD", "Showing wireframes alongside final designs", "Having fewer than 50 Dribbble shots"], c: 0 },
    { q: "What specific test should you give Content Writer candidates to verify their SEO knowledge?", o: ["Ask them to write a 3,000-word blog post in 1 hour", "Have them analyze a competitor's blog and list 5 weaknesses", "Ask them to explain the PageRank algorithm in technical detail", "Give them a topic and ask for: target keyword, 3 long-tail keywords, meta title, meta description, and blog outline"], c: 3 },
    { q: "When filtering Sales Executive candidates, what is the MOST revealing signal during the hiring process itself?", o: ["The quality of their resume formatting", "Their response speed to your messages — if they take days to reply to HR, they will take days to reply to clients", "The number of LinkedIn connections they have", "Whether they negotiate their own salary aggressively"], c: 1 },
    { q: "What is the PM scenario test question recommended in this module, and what constitutes a GOOD answer?", o: ["'Client wants a free feature mid-project' — Good answer: 'Acknowledge, explain impact, offer alternatives (Phase 2 or paid add-on), document the decision'", "'How do you handle tight deadlines?' — Good answer: 'I work overtime'", "'What's your management style?' — Good answer: 'I'm a servant leader'", "'How do you motivate teams?' — Good answer: 'I use incentives and bonuses'"], c: 0 },
    { q: "What KPI should Shopify Developers achieve for mobile PageSpeed scores according to the JD template?", o: ["50+ mobile score", "70+ mobile score", "85+ mobile score", "100 perfect mobile score"], c: 2 },
    { q: "For the passive candidate InMail template, what element has the BIGGEST impact on response rate?", o: ["Using DH's official logo in the message", "Sending the message on Monday mornings for maximum visibility", "Including the full JD as an attachment", "Personalization — mentioning their specific work, not generic 'I loved your profile'"], c: 3 },
    { q: "What is the referral bonus structure at DH?", o: ["₹5,000 entry-level, ₹10,000 mid-level, ₹15,000 senior — paid after 3 months", "Flat ₹10,000 for all roles, paid immediately", "₹25,000 for all roles, paid after 6 months", "No cash bonus — referrers get extra leave days instead"], c: 0 },
    { q: "According to the module, what response rate do personalized LinkedIn InMails achieve vs generic ones?", o: ["Personalized: 10-15%, Generic: 1-2%", "Personalized: 25-40%, Generic: 5-10%", "Personalized: 50-60%, Generic: 20-30%", "Both achieve roughly the same rate (15-20%)"], c: 1 },
    { q: "What is the Sales Executive KPI for average order value (AOV) listed in the JD template?", o: ["$500+ AOV", "$800+ AOV", "$1,200+ AOV", "$2,000+ AOV"], c: 2 }
];

const task3Content = `
<h2>📚 TASK 3: Screening & Interviews — Full Hiring Funnel Mastery</h2>

<div class="content-section">
<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">Screening and interviewing is where theory meets reality. This is the stage where you separate genuine talent from polished resumes. A great screener saves DH hundreds of hours of wasted interview time and prevents costly bad hires from ever reaching the offer stage.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Hiring people is an art, not a science, and resumes can't tell you whether someone will fit into a company's culture." — Howard Schultz</p>
</div>
</div>

<div class="content-section">
<h3>🔬 The 100→1 Funnel — DH Real Numbers</h3>
<p>Every hire at Digital Heroes follows a strict multi-stage funnel. Understanding the math behind hiring helps you set realistic expectations, measure your efficiency, and justify the time investment to managers who say "just get someone in."</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Stage</th><th style="padding:12px;text-align:left;">Count</th><th style="padding:12px;text-align:left;">Conversion</th><th style="padding:12px;text-align:left;">Your Time Investment</th><th style="padding:12px;text-align:left;">Pass/Fail Criteria</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">CVs Received</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>100</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">—</td><td style="padding:10px;border:1px solid #E2E8F0;">2-3 hrs batch screening</td><td style="padding:10px;border:1px solid #E2E8F0;">Relevant skills, tenure, no critical red flags</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Initial Screen Pass</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">15%</td><td style="padding:10px;border:1px solid #E2E8F0;">—</td><td style="padding:10px;border:1px solid #E2E8F0;">Resume meets minimum bar for phone screen</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Phone Screens</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>8</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">53%</td><td style="padding:10px;border:1px solid #E2E8F0;">80 min (10 min each)</td><td style="padding:10px;border:1px solid #E2E8F0;">CTC match, notice period, location, basic role fit</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">AI App Task Sent</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">63%</td><td style="padding:10px;border:1px solid #E2E8F0;">2.5 hrs evaluating submissions</td><td style="padding:10px;border:1px solid #E2E8F0;">Quality, instructions followed, on-time submission</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Task Pass</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2-3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">40-60%</td><td style="padding:10px;border:1px solid #E2E8F0;">—</td><td style="padding:10px;border:1px solid #E2E8F0;">Work quality meets DH standards</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Video Interview</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1-2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">50%</td><td style="padding:10px;border:1px solid #E2E8F0;">45-60 min each</td><td style="padding:10px;border:1px solid #E2E8F0;">Technical depth, STAR answers, culture fit</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Hired</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">—</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>~12 hrs total per hire</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Scorecard 20+/30, references checked</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ The Golden Rule:</strong> Never skip a stage, even if "the candidate seems perfect." We once skipped the AI app task for a designer who had an incredible portfolio. Turns out, the portfolio was done by a team — she couldn't design a basic product page on her own. That hire lasted 3 weeks and cost us ₹80,000+. <strong>Every stage exists because we learned the hard way.</strong>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Key Insight:</strong> It takes ~100 applications to make 1 hire. If your funnel converts better, your JD and sourcing are excellent. If it converts worse, fix the top of the funnel first — don't lower the bar at later stages. A weak pipeline is a sourcing problem, not a screening problem.
</div>
</div>

<div class="content-section">
<h3>📋 CV Screening Masterclass — The 30-Second Scan</h3>
<p>You have 30 seconds per resume in the initial scan. That's not a suggestion — it's a necessity when you're reviewing 100+ CVs. Here's how to make every second count:</p>

<h4>What to Look for in the First 30 Seconds</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Check</th><th style="padding:12px;text-align:left;">What You're Looking For</th><th style="padding:12px;text-align:left;">Time</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Role Title Match</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Current or recent title aligns with the open position</td><td style="padding:10px;border:1px solid #E2E8F0;">3 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Relevant Experience</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Has worked on similar projects, tools, or domains</td><td style="padding:10px;border:1px solid #E2E8F0;">5 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Education Baseline</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Meets minimum qualification (varies by role — dev needs technical degree or equivalent portfolio)</td><td style="padding:10px;border:1px solid #E2E8F0;">3 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Skills Section</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lists specific tools/technologies from JD, not just generic buzzwords</td><td style="padding:10px;border:1px solid #E2E8F0;">5 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Tenure Pattern</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1+ year at most recent jobs, no excessive hopping</td><td style="padding:10px;border:1px solid #E2E8F0;">5 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Portfolio/GitHub</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Link present for design/dev roles</td><td style="padding:10px;border:1px solid #E2E8F0;">3 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Location</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Jaipur-based or open to relocation</td><td style="padding:10px;border:1px solid #E2E8F0;">3 sec</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Overall Impression</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Clean formatting, no obvious typos, professional presentation</td><td style="padding:10px;border:1px solid #E2E8F0;">3 sec</td></tr>
</tbody>
</table>

<h4>Red Flags Checklist — Instant Disqualifiers</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚩 Hard Red Flags (Immediate Reject):</strong>
<ul>
<li><strong>5+ jobs in 3 years with &lt;6 months each</strong> — Serial job hopper. At DH, 3 out of 3 job hoppers we hired left within 4 months</li>
<li><strong>No portfolio link for designers/developers</strong> — If they can't show their work, they likely don't have meaningful work to show</li>
<li><strong>Copy-paste generic resume</strong> — Same resume for every job, not tailored to DH. Shows zero effort and research</li>
<li><strong>Typos in job title or company name</strong> — If they can't proofread their own resume, imagine their client deliverables</li>
<li><strong>Buzzword stuffing without specifics</strong> — "Results-oriented team player with strong communication skills" says nothing</li>
</ul>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚡ Soft Red Flags (Investigate Further):</strong>
<ul>
<li><strong>Gaps &gt;6 months unexplained</strong> — Could be legitimate (health, family, education), but probe during phone screen</li>
<li><strong>Resume longer than 2 pages for &lt;5 years experience</strong> — Inability to prioritize information, but may have good content</li>
<li><strong>"Freelancing" with no client details</strong> — Often means unemployed. Ask for specific projects during phone screen</li>
<li><strong>Different email vs LinkedIn name</strong> — Could indicate fake profile or mismatch. Verify before proceeding</li>
<li><strong>Generic objectives</strong> — "Seeking a challenging position" tells you nothing about motivation</li>
</ul>
</div>

<h4>Green Flags — Signs of a Strong Candidate</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ What Great Resumes Have:</strong>
<ul>
<li><strong>Specific project outcomes</strong> — "Increased PageSpeed from 40 to 85" beats "Improved website performance"</li>
<li><strong>Quantified results</strong> — "Managed 15 client accounts generating $45K/month" shows impact</li>
<li><strong>Consistent growth trajectory</strong> — Junior → Mid → Senior shows ambition and capability</li>
<li><strong>Relevant certifications</strong> — Shopify Partner certification, Google Analytics, Figma Community author</li>
<li><strong>Agency or freelance experience</strong> — They understand client pressure, deadlines, and scope management (critical for DH)</li>
<li><strong>Active GitHub/Dribbble/Behance</strong> — Shows passion beyond just the job</li>
<li><strong>Tailored resume</strong> — References Shopify, e-commerce, or DH specifically</li>
</ul>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 DH-Specific Insight:</strong> For DH roles, agency/freelance experience is a major green flag. People who've worked with clients directly understand the pressure of deadlines, scope creep, and client expectations. A developer who's only worked on internal tools at a big company may struggle with DH's client-facing culture, even if their technical skills are stronger on paper.
</div>
</div>

<div class="content-section">
<h3>📞 Phone Screening Script Template — The 10-Minute Filter</h3>
<p>The phone screen is NOT an interview — it's a filter. You have 10 minutes to decide if this person deserves a full hour of the team's time. Don't ask deep technical questions here. Focus on dealbreakers.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📞 The 10-Minute Phone Screen Script:</strong><br><br>

<strong>Minute 0-0:30 — Opening (Set the Tone):</strong><br>
"Hi [Name], I'm [Your Name] from Digital Heroes. Thanks for applying for the [Role] position. This is a quick 10-minute call to understand your background and see if there's a mutual fit. Is this a good time?"<br><br>

<strong>Minute 0:30-2:30 — Current Situation (Filter for Availability):</strong><br>
"Tell me about your current role in 2 minutes — what do you do day-to-day?"<br>
<em>Listen for:</em> Relevant experience, enthusiasm, ability to communicate clearly<br><br>

<strong>Minute 2:30-5:30 — Knockout Questions (Filter for Dealbreakers):</strong><br>
1. "What's your current CTC and expected CTC?" <em>(If 2x our budget, stop here politely)</em><br>
2. "What's your notice period?" <em>(If 90 days and we need someone in 30, flag it)</em><br>
3. "Are you comfortable with 6 days/week in-office in Jaipur?" <em>(Non-negotiable for most DH roles)</em><br>
4. "Why are you looking to change?" <em>(Listen for red flags — badmouthing, only money-motivated)</em><br><br>

<strong>Minute 5:30-8:30 — Role-Specific Quick Check (2-3 Questions):</strong><br>
<em>Developer:</em> "Have you worked with Shopify Liquid? Can you describe a custom section you've built?"<br>
<em>Sales:</em> "Tell me about your biggest deal. What was the value and how did you close it?"<br>
<em>Designer:</em> "Do you have a portfolio I can review? What's your preferred design tool?"<br>
<em>Content:</em> "What types of content have you written? Can you share 2-3 published samples?"<br>
<em>CS/PM:</em> "How many clients have you managed simultaneously? What tools did you use?"<br><br>

<strong>Minute 8:30-9:30 — Logistics Check:</strong><br>
"When can you join if selected?" <em>(Confirms availability aligns with your timeline)</em><br>
"Do you have any WFH expectations we should know about?" <em>(DH is primarily in-office)</em><br><br>

<strong>Minute 9:30-10:00 — Close (Clear Next Steps):</strong><br>
"Thanks [Name]. We'll review and get back to you within 3 business days. Do you have any quick questions for me?"
</div>

<h4>Phone Screen Scoring Card</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Criteria</th><th style="padding:12px;text-align:left;">1 (Poor)</th><th style="padding:12px;text-align:left;">3 (Average)</th><th style="padding:12px;text-align:left;">5 (Excellent)</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>CTC Fit</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Expects 50%+ above budget</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 10-20% of budget</td><td style="padding:10px;border:1px solid #E2E8F0;">Within budget range</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Availability</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">90+ day notice, no flexibility</td><td style="padding:10px;border:1px solid #E2E8F0;">30-60 day notice</td><td style="padding:10px;border:1px solid #E2E8F0;">Immediate to 15 days</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Location/Schedule</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Refuses in-office or relocation</td><td style="padding:10px;border:1px solid #E2E8F0;">Open to hybrid, needs negotiation</td><td style="padding:10px;border:1px solid #E2E8F0;">Jaipur-based, 6 days/week OK</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Role Fit</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">No relevant experience</td><td style="padding:10px;border:1px solid #E2E8F0;">Some relevant experience</td><td style="padding:10px;border:1px solid #E2E8F0;">Strong match, specific examples</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Communication</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Unclear, rambling, unprofessional</td><td style="padding:10px;border:1px solid #E2E8F0;">Adequate, needs prompting</td><td style="padding:10px;border:1px solid #E2E8F0;">Clear, concise, confident</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Motivation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Only cares about salary/WFH</td><td style="padding:10px;border:1px solid #E2E8F0;">Interested but not passionate</td><td style="padding:10px;border:1px solid #E2E8F0;">Genuine interest in role and DH</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Score Thresholds:</strong>
<ul>
<li><strong>25-30 points:</strong> Strong — advance to AI app task immediately</li>
<li><strong>18-24 points:</strong> Moderate — advance if pipeline is thin, otherwise waitlist</li>
<li><strong>Below 18:</strong> Reject — send a polite rejection email within 24 hours</li>
</ul>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Knockout Question Rules:</strong> If ANY knockout question answer is a dealbreaker, end the call politely. Don't waste 45 more minutes interviewing someone who needs ₹15 LPA when your budget is ₹6 LPA. Be respectful: "Thanks for your time. This role may not be the right fit for your expectations right now, but we'll keep your profile for future opportunities."
</div>
</div>

<div class="content-section">
<h3>🤖 AI App Task / Take-Home Assignment</h3>
<p>The AI app task is DH's secret weapon for filtering candidates. It sits between the phone screen and the video interview, and it eliminates 40-60% of candidates who either aren't serious or can't deliver quality work.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Task Parameters:</strong>
<ul>
<li><strong>Duration:</strong> 2 hours of focused work</li>
<li><strong>Submission Window:</strong> 48-72 hours from when it's sent</li>
<li><strong>Format:</strong> Role-specific practical task that mirrors actual DH work</li>
<li><strong>Paid:</strong> No — this is a screening tool, not a work assignment. Keep tasks small enough that unpaid is reasonable</li>
</ul>
</div>

<h4>Role-Specific AI App Tasks</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Role</th><th style="padding:12px;text-align:left;">Task</th><th style="padding:12px;text-align:left;">What You're Evaluating</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Shopify Developer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Build a custom product card section with Liquid. Must pull title, price, and image from metafields</td><td style="padding:10px;border:1px solid #E2E8F0;">Liquid proficiency, schema understanding, clean code</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>UI/UX Designer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Design a mobile-first product page hero section for a premium skincare brand in Figma</td><td style="padding:10px;border:1px solid #E2E8F0;">Layout skills, mobile-first thinking, visual hierarchy, typography</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Sales Executive</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Write a proposal email for a $5,000 Shopify store redesign. Include scope, timeline, and pricing justification</td><td style="padding:10px;border:1px solid #E2E8F0;">Communication skills, value framing, professionalism</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Content Writer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Write 3 product descriptions (50 words each) for given Shopify products + 1 blog intro (200 words)</td><td style="padding:10px;border:1px solid #E2E8F0;">E-commerce writing, tone adaptability, SEO awareness</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Customer Success</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Respond to 3 mock client scenarios: angry client, feature request, billing dispute</td><td style="padding:10px;border:1px solid #E2E8F0;">Empathy, problem-solving, communication tone</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Project Manager</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Create a project plan for a Shopify store launch (timeline, milestones, risk register)</td><td style="padding:10px;border:1px solid #E2E8F0;">Planning skills, risk awareness, communication structure</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Full Stack</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Build a simple REST API endpoint + front-end component that consumes it</td><td style="padding:10px;border:1px solid #E2E8F0;">Full-stack capability, API design, code quality</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Social Media</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Create a 1-week social media calendar for a Shopify brand (3 posts per day, captions + hashtags)</td><td style="padding:10px;border:1px solid #E2E8F0;">Creativity, platform knowledge, consistency</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚩 AI App Task Red Flags:</strong>
<ul>
<li><strong>Late submission without informing:</strong> If they can't manage a 72-hour deadline, they'll miss client deadlines</li>
<li><strong>Didn't follow instructions:</strong> Submitted in wrong format, missed a requirement, or built something different from what was asked</li>
<li><strong>Copy-pasted from internet:</strong> Run a plagiarism check. Generic content lifted from blogs = instant reject</li>
<li><strong>Overly complex but poorly executed:</strong> Tried to show off with advanced features but basic requirements are broken</li>
<li><strong>No questions asked:</strong> A thoughtful candidate clarifies ambiguities. No questions often means no attention to detail</li>
</ul>
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ AI App Task Green Flags:</strong>
<ul>
<li><strong>Submitted early:</strong> Shows enthusiasm and good time management</li>
<li><strong>Asked clarifying questions:</strong> Shows attention to detail and client-interaction skills</li>
<li><strong>Clean, well-organized work:</strong> Code is commented, design has layers organized, writing is structured</li>
<li><strong>Went slightly above:</strong> Added a small extra touch (not over-engineering, just showing initiative)</li>
<li><strong>Included a brief explanation:</strong> "Here's why I made these design choices..." demonstrates thought process</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎥 Video Interview Guide — 45-60 Minutes</h3>
<p>The video interview is your deepest assessment of the candidate. By this point, they've passed the resume screen, phone screen, and AI app task. This is where you confirm everything and test for culture fit.</p>

<h4>Interview Structure (60 Minutes)</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Phase</th><th style="padding:12px;text-align:left;">Time</th><th style="padding:12px;text-align:left;">Purpose</th><th style="padding:12px;text-align:left;">Key Questions</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1. Warm-up</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">5 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Put candidate at ease, build rapport</td><td style="padding:10px;border:1px solid #E2E8F0;">"How's your day going? Did you find us okay?" Small talk to reduce nerves</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2. Background</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">10 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Walk through their career journey</td><td style="padding:10px;border:1px solid #E2E8F0;">"Walk me through your career — what's the thread connecting your jobs?" Listen for growth narrative</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3. STAR Behavioral</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">15 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Assess real experience with structured answers</td><td style="padding:10px;border:1px solid #E2E8F0;">3-4 STAR questions tailored to role (see bank below)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4. Technical/Role</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">15 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Test domain knowledge and problem-solving</td><td style="padding:10px;border:1px solid #E2E8F0;">Role-specific technical questions + live task discussion</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5. Culture Fit</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">5 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Assess alignment with DH values</td><td style="padding:10px;border:1px solid #E2E8F0;">"What does ownership mean to you?" "How do you handle working weekends if a client needs something urgent?"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>6. Candidate Qs</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">5 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Let them interview you (reveals priorities)</td><td style="padding:10px;border:1px solid #E2E8F0;">Their questions tell you what matters to them. "What will I work on?" = great. "How many leaves?" = concern</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>7. Close</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">5 min</td><td style="padding:10px;border:1px solid #E2E8F0;">Set expectations for next steps</td><td style="padding:10px;border:1px solid #E2E8F0;">"We'll complete all interviews by [date] and get back to you within [timeline]. Is there anything else you'd like to share?"</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎯 The STAR Interview Method Deep Dive</h3>
<p>STAR stands for <strong>Situation, Task, Action, Result</strong>. It forces candidates to give specific examples instead of vague claims. Without STAR, you get answers like "I'm a great team player" — with STAR, you get "I coordinated 3 teams across time zones to deliver a project 2 days early."</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Component</th><th style="padding:12px;text-align:left;">What You're Asking</th><th style="padding:12px;text-align:left;">What to Listen For</th><th style="padding:12px;text-align:left;">Red Flag</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Situation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"Tell me about a time when..."</td><td style="padding:10px;border:1px solid #E2E8F0;">Specific context, real scenario, enough detail</td><td style="padding:10px;border:1px solid #E2E8F0;">Vague, hypothetical, or generic examples</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Task</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What was YOUR responsibility?"</td><td style="padding:10px;border:1px solid #E2E8F0;">Clear individual role, not just team credits</td><td style="padding:10px;border:1px solid #E2E8F0;">Can't distinguish their role from the team's</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Action</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What specifically did YOU do?"</td><td style="padding:10px;border:1px solid #E2E8F0;">Concrete steps, decision-making, initiative</td><td style="padding:10px;border:1px solid #E2E8F0;">Uses "we" for everything, can't articulate personal contribution</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Result</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"What was the outcome? Numbers?"</td><td style="padding:10px;border:1px solid #E2E8F0;">Quantified impact, lessons learned</td><td style="padding:10px;border:1px solid #E2E8F0;">No measurable outcome, "it went well" without specifics</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Watch for "We" Answers:</strong> If a candidate keeps saying "We did X, we achieved Y" — push back with: "That's great, but what was YOUR specific contribution?" Genuine contributors can always articulate their individual role. If they freeze or give vague answers after the push, they were likely riding on the team's work.
</div>

<h4>Behavioral Question Bank — Organized by Competency</h4>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🧩 Problem Solving:</strong>
<ol>
<li>"Describe a time you had to solve a problem with incomplete information. What did you do?"</li>
<li>"Tell me about a project that failed. What happened, and what did you learn?"</li>
<li>"How do you approach a situation where you've never done something before?"</li>
</ol>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💬 Communication:</strong>
<ol>
<li>"Give an example of explaining a complex technical concept to a non-technical person."</li>
<li>"Describe a conflict with a colleague and how you resolved it."</li>
<li>"Tell me about a time you had to deliver bad news. How did you handle it?"</li>
</ol>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🏆 Ownership:</strong>
<ol>
<li>"Tell me about a time you went above and beyond your job description."</li>
<li>"Describe a situation where you took responsibility for a mistake. What happened?"</li>
<li>"Give an example of when you identified a problem nobody asked you to fix, and you fixed it anyway."</li>
</ol>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🤝 Client Handling:</strong>
<ol>
<li>"How would you handle an angry client demanding a refund for work that was delivered on time?"</li>
<li>"Tell me about managing competing priorities from two different clients who both think they're your #1."</li>
<li>"Describe a time you turned a dissatisfied client into a repeat customer."</li>
</ol>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📈 Growth & Learning:</strong>
<ol>
<li>"What's the last new skill you taught yourself? How did you go about learning it?"</li>
<li>"Tell me about a piece of feedback that was hard to hear but changed the way you work."</li>
<li>"Where do you want to be professionally in 2 years? What steps are you taking to get there?"</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💼 Role-Specific Interview Questions for DH</h3>
<p>Beyond behavioral STAR questions, each DH role requires technical/domain-specific probing. Here are 5+ targeted questions for every role:</p>

<h4>Shopify Developer Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"Walk me through how you'd build a custom Shopify section from scratch — from schema to rendering."</li>
<li>"A client's store loads in 8 seconds. How do you diagnose and fix the performance issue?"</li>
<li>"Explain the difference between Shopify REST API and GraphQL API. When would you use each?"</li>
<li>"What's the difference between Liquid objects, tags, and filters? Give examples of each."</li>
<li>"How do you handle theme customization for a client who needs something not supported by the theme editor?"</li>
<li><strong>Live coding test (30 min):</strong> "Build a product card component using Liquid that pulls data from metafields."</li>
</ol>
</div>

<h4>UI/UX Designer Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"Show us your portfolio and explain the design decisions for your best project."</li>
<li>"How would you approach redesigning a Shopify product page to increase conversions?"</li>
<li>"How do you decide between a 2-column and single-column product page layout?"</li>
<li>"Explain your mobile-first design process. How does it differ from desktop-first?"</li>
<li>"What's the difference between UX and UI? Give a real example from your work."</li>
<li><strong>Design test (2 hrs):</strong> "Design a mobile-first homepage hero section for a premium skincare brand."</li>
</ol>
</div>

<h4>Project Manager Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"A client wants 3 new features added mid-project for free. Walk me through your response."</li>
<li>"How do you prioritize tasks when you have 5 projects running simultaneously?"</li>
<li>"A developer misses a deadline and the client is upset. How do you handle both the client and the developer?"</li>
<li>"Walk me through how you'd plan a Shopify store launch from kickoff to go-live."</li>
<li>"How do you communicate project risks to clients without causing panic?"</li>
</ol>
</div>

<h4>Sales Executive Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"A lead says 'Your price is too high.' Role-play your response right now." <em>(Observe: Do they discount immediately or build value?)</em></li>
<li>"You have 10 leads in your pipeline. How do you prioritize which ones to call first?"</li>
<li>"Tell me about a deal you lost. What happened and what did you learn?"</li>
<li>"How would you sell a $10,000 Shopify project to someone who's never invested in their website?"</li>
<li>"What's your follow-up strategy when a lead goes cold after an initial call?"</li>
<li><strong>Written test:</strong> "Write a proposal email for a $5,000 Shopify store redesign project."</li>
</ol>
</div>

<h4>Content Writer Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"Write a 50-word product description for this [item] right now." <em>(Timed, 3 minutes)</em></li>
<li>"What's the difference between writing for SEO and writing for conversion?"</li>
<li>"How do you adapt your writing tone for different brands — say, a luxury fashion brand vs a tech gadget store?"</li>
<li>"Walk me through your content research process before writing a blog post."</li>
<li>"What tools do you use for keyword research and content optimization?"</li>
</ol>
</div>

<h4>Customer Success Interview</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li>"A client gave a 3-star review on Fiverr. What do you do in the next 30 minutes?"</li>
<li>"How do you handle a client who keeps changing requirements and then blames you for delays?"</li>
<li>"A client wants something that's technically impossible within budget. How do you manage their expectations?"</li>
<li>"What's your approach to proactive client communication vs reactive?"</li>
<li>"Role-play: I'm a client who received the wrong deliverable. Handle this situation."</li>
</ol>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Story — "The Senior Developer Who Couldn't Code":</strong><br>
We hired a "senior developer" based on a great interview and impressive resume. He talked about React, Node.js, and system architecture beautifully. We skipped the live coding test because he "seemed too senior for that." Week 2: he couldn't write a basic Liquid for loop. His "previous projects" were done by his team, not him. <strong>Now we ALWAYS do a 30-minute live coding test, regardless of seniority level.</strong>
</div>
</div>

<div class="content-section">
<h3>📊 Interview Scorecard Template</h3>
<p>After every interview, fill out this scorecard immediately (within 10 minutes). Waiting until end of day introduces memory bias.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Category</th><th style="padding:12px;text-align:left;">Weight</th><th style="padding:12px;text-align:left;">Score (1-5)</th><th style="padding:12px;text-align:left;">Notes</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Technical Skills</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">High</td><td style="padding:10px;border:1px solid #E2E8F0;">___/5</td><td style="padding:10px;border:1px solid #E2E8F0;">Specific examples, depth of knowledge, live test results</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Communication</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">High</td><td style="padding:10px;border:1px solid #E2E8F0;">___/5</td><td style="padding:10px;border:1px solid #E2E8F0;">Clarity, articulation, listening skills, English proficiency</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Culture Fit</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">High</td><td style="padding:10px;border:1px solid #E2E8F0;">___/5</td><td style="padding:10px;border:1px solid #E2E8F0;">DH values alignment, ownership mentality, client-first attitude</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Problem Solving</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Medium</td><td style="padding:10px;border:1px solid #E2E8F0;">___/5</td><td style="padding:10px;border:1px solid #E2E8F0;">STAR quality, real examples, analytical thinking</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Initiative</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Medium</td><td style="padding:10px;border:1px solid #E2E8F0;">___/5</td><td style="padding:10px;border:1px solid #E2E8F0;">Goes beyond minimum, proactive, self-driven</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Growth Potential</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Medium</td><td style="padding:10px;border:1px solid #E2E8F0;">___/5</td><td style="padding:10px;border:1px solid #E2E8F0;">Learning agility, curiosity, career trajectory</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>TOTAL</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>___/30</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"></td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Decision Thresholds:</strong>
<ul>
<li><strong>20-30 points = Strong Hire</strong> — Move to reference check and offer immediately</li>
<li><strong>15-19 points = Maybe</strong> — Discuss with hiring manager. If pipeline is strong, pass. If pipeline is weak, proceed with caution</li>
<li><strong>&lt;15 points = No Hire</strong> — Do not proceed regardless of how "nice" they seemed</li>
</ul>
<strong>Critical Rule:</strong> No single category should be a 1. Even if the total is 20+, a 1 in any category is an automatic "discuss before proceeding."
</div>
</div>

<div class="content-section">
<h3>🧠 Unconscious Bias in Hiring</h3>
<p>Every interviewer carries biases — the key is recognizing and mitigating them. At DH, structured interviews and scorecards exist specifically to combat these biases.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Bias Type</th><th style="padding:12px;text-align:left;">What It Is</th><th style="padding:12px;text-align:left;">How It Affects Hiring</th><th style="padding:12px;text-align:left;">DH Mitigation</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Affinity Bias</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Favoring people who are similar to you</td><td style="padding:10px;border:1px solid #E2E8F0;">"She went to my college, she must be good"</td><td style="padding:10px;border:1px solid #E2E8F0;">Use scorecards, not gut feelings. Rate before discussing</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Halo Effect</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">One positive trait overshadows everything</td><td style="padding:10px;border:1px solid #E2E8F0;">"He worked at Google, he must be amazing at everything"</td><td style="padding:10px;border:1px solid #E2E8F0;">Evaluate each category independently. Big-name companies don't guarantee DH fit</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Confirmation Bias</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Seeking info that confirms first impression</td><td style="padding:10px;border:1px solid #E2E8F0;">Liked their resume → only asking easy questions in interview</td><td style="padding:10px;border:1px solid #E2E8F0;">Standardized question set. Same questions for all candidates in the same role</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Horn Effect</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">One negative trait overshadows everything</td><td style="padding:10px;border:1px solid #E2E8F0;">"She was 5 minutes late, she must be unreliable"</td><td style="padding:10px;border:1px solid #E2E8F0;">Note individual data points, but base decisions on the full scorecard</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Contrast Effect</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Rating candidates relative to each other instead of against the bar</td><td style="padding:10px;border:1px solid #E2E8F0;">Average candidate looks great after 3 terrible interviews</td><td style="padding:10px;border:1px solid #E2E8F0;">Rate against scorecard criteria, not against other candidates</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Recency Bias</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Remembering the last answer more than earlier ones</td><td style="padding:10px;border:1px solid #E2E8F0;">Strong close-to-interview answer masks weak earlier answers</td><td style="padding:10px;border:1px solid #E2E8F0;">Fill scorecard immediately. Take notes during the interview, not after</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Bias Mitigation Best Practices:</strong>
<ul>
<li><strong>Structured interviews:</strong> Ask every candidate the same questions in the same order</li>
<li><strong>Diverse interview panels:</strong> Include at least 2 people in the final interview when possible</li>
<li><strong>Blind resume screening:</strong> Remove name, photo, college name from initial review when feasible</li>
<li><strong>Score independently:</strong> Each interviewer fills their scorecard before discussing with others</li>
<li><strong>Document decisions:</strong> Write down why you're saying yes or no — if you can't articulate it, it might be bias</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📞 Reference Check — The Final Verification</h3>
<p>Reference checks happen after the interview but before the offer. They're NOT optional at DH. Every hire must have at least 2 references checked.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📞 Reference Check Script (10 minutes):</strong><br><br>
1. "How long did [Candidate] work with you, and in what capacity?"<br>
2. "On a scale of 1-10, how would you rate their work quality? Why that number?"<br>
3. "What were their biggest strengths?"<br>
4. "If you could change ONE thing about their work, what would it be?" <em>(This is where the truth comes out)</em><br>
5. "Were they punctual and reliable with deadlines?"<br>
6. "How did they handle pressure or tight deadlines?"<br>
7. <strong>"Would you re-hire them? Why or why not?"</strong> <em>(Most important question — hesitation = soft no)</em><br>
8. "Is there anything else I should know?"
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Reference Check Red Flags:</strong>
<ul>
<li><strong>Hesitation on "Would you re-hire?"</strong> — If they pause or say "probably" instead of "absolutely," that's a soft no</li>
<li><strong>Vague praise:</strong> "He was a nice person" without mentioning work quality = average performer at best</li>
<li><strong>Only personal references:</strong> Can't provide a single professional reference = problem</li>
<li><strong>"No comment":</strong> Former employer refusing to comment often means legal issues or termination</li>
<li><strong>Contradicting the candidate:</strong> Candidate said they "led the project" but reference says they were a junior contributor</li>
</ul>
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ What Reference Checks Verify vs Reveal:</strong>
<ul>
<li><strong>Verify:</strong> Employment dates, job title, responsibilities (confirming the resume is accurate)</li>
<li><strong>Reveal:</strong> Work style, reliability under pressure, interpersonal dynamics, reasons for leaving (new insights you can't get from interviews)</li>
</ul>
Focus 30% on verification and 70% on revelation. The most valuable reference check insights are things the candidate would never tell you themselves.
</div>
</div>

<div class="content-section">
<h3>🚩 Red Flags During Interviews — Quick Reference</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Red Flag</th><th style="padding:12px;text-align:left;">What It Signals</th><th style="padding:12px;text-align:left;">Action</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Checking phone during interview</td><td style="padding:10px;border:1px solid #E2E8F0;">Disrespect, low engagement</td><td style="padding:10px;border:1px solid #E2E8F0;">Strong negative — eliminate</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Can't explain own resume items</td><td style="padding:10px;border:1px solid #E2E8F0;">Inflated or fabricated experience</td><td style="padding:10px;border:1px solid #E2E8F0;">Probe deeper — likely disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Vague answers to every STAR question</td><td style="padding:10px;border:1px solid #E2E8F0;">No real experience to draw from</td><td style="padding:10px;border:1px solid #E2E8F0;">Ask for another example — if still vague, disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Badmouthing previous employer</td><td style="padding:10px;border:1px solid #E2E8F0;">Attitude problem, will do same to DH</td><td style="padding:10px;border:1px solid #E2E8F0;">Immediate disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Arriving late without informing</td><td style="padding:10px;border:1px solid #E2E8F0;">Poor time management, low respect</td><td style="padding:10px;border:1px solid #E2E8F0;">Note it — one data point, not instant disqualify</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Asking about leaves/WFH before asking about work</td><td style="padding:10px;border:1px solid #E2E8F0;">Priorities misaligned with DH culture</td><td style="padding:10px;border:1px solid #E2E8F0;">Note it — probe motivation further</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Over-confident without substance</td><td style="padding:10px;border:1px solid #E2E8F0;">All talk, no delivery</td><td style="padding:10px;border:1px solid #E2E8F0;">Give a live test — confidence without skills will show quickly</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Unrealistic salary expectations with no justification</td><td style="padding:10px;border:1px solid #E2E8F0;">Poor market awareness or inflated self-assessment</td><td style="padding:10px;border:1px solid #E2E8F0;">Present DH bands transparently — if they insist, politely close</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🤖 ChatGPT Prompts for Screening — AI-Assisted HR</h3>
<p>Use these ready-made prompts to leverage AI in your screening process. These save time and ensure consistency across candidates.</p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">Ready-to-Use ChatGPT Prompts:</strong><br><br>

<strong style="color: #000;">1. Resume Evaluation:</strong>
<div style="background: #1E293B; color: #E2E8F0; padding: 12px; border-radius: 6px; margin: 10px 0; font-family: monospace; font-size: 0.9em;">
"Evaluate this resume for the role of [Shopify Developer / UI/UX Designer / Sales Executive]. Score it on: relevant experience (1-10), technical skills match (1-10), red flags (list any), and overall recommendation (Strong Yes / Yes / Maybe / No). Here is the resume: [paste resume text]"
</div>

<strong style="color: #000;">2. Behavioral Question Generation:</strong>
<div style="background: #1E293B; color: #E2E8F0; padding: 12px; border-radius: 6px; margin: 10px 0; font-family: monospace; font-size: 0.9em;">
"Generate 5 behavioral interview questions for a [role] position at a Shopify agency. Focus on: client communication, problem-solving under pressure, deadline management, teamwork, and ownership. Format each question with the expected STAR response structure."
</div>

<strong style="color: #000;">3. Candidate Response Scoring:</strong>
<div style="background: #1E293B; color: #E2E8F0; padding: 12px; border-radius: 6px; margin: 10px 0; font-family: monospace; font-size: 0.9em;">
"Score this candidate response using the STAR method (Situation, Task, Action, Result). Rate each component 1-5. Identify if the answer is specific or vague, individual or team-based, and flag any potential fabrication indicators. Response: [paste candidate answer]"
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 12px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">⚠️ Important:</strong> <span style="color: #000;">AI is a tool, not a decision-maker. Always verify AI-generated assessments with your own judgment. Use AI to speed up initial screening and ensure consistency, but never let it make the final call on a candidate.</span>
</div>
</div>
</div>

<div class="content-section">
<h3>📊 Weekly Performance Calls — Mandatory Data Collection</h3>
<p>Once a candidate is hired, the screening doesn't stop. Weekly performance calls during the probation period are mandatory to catch issues early and validate your hiring decision.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #000;">📋 Weekly Performance Call Format:</strong><br><br>
<p style="color: #000;">Every week during the first 90 days, HR collects the following data from the reporting manager:</p>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Metric</th><th style="padding:12px;text-align:left;">What to Collect</th><th style="padding:12px;text-align:left;">Red Flag Threshold</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Attendance %</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Days present / total working days. Include late arrivals.</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Below 90% in any week = conversation needed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Tasks Completed</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Number of assigned tasks completed vs assigned. Include on-time vs late.</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Below 70% completion rate = early warning</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Quality Scores</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Manager rates output quality 1-10. Track trend over weeks.</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Declining trend or consistent below 6 = PIP discussion</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0; color:#000;"><strong>Client Feedback</strong></td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Any direct client feedback — positive or negative. Verbatim quotes preferred.</td><td style="padding:10px;border:1px solid #E2E8F0; color:#000;">Any client complaint = immediate conversation</td></tr>
</tbody>
</table>
<p style="color: #000;"><strong>Why this matters:</strong> Without data, performance reviews become opinion-based arguments. With weekly data, you have an objective trail that makes 30-day PIP decisions clear, defensible, and fair to the employee.</p>
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>The funnel is 100→15→8→5→2-3→1-2→1.</strong> Never skip a stage. Each stage eliminates candidates who would fail later — at greater cost</li>
<li><strong>Resume screening = 30 seconds per CV.</strong> Use the checklist: role match, experience, tenure, portfolio, quantified achievements</li>
<li><strong>Phone screen = 10 minutes.</strong> Focus on knockout questions: CTC, notice period, location, schedule. Use the scoring card</li>
<li><strong>AI app task filters 40-60% of candidates.</strong> Evaluate quality, instructions-following, timeliness. Late submission = red flag</li>
<li><strong>Video interview = 60 minutes, 7 phases.</strong> Warm-up → Background → STAR → Technical → Culture → Candidate Qs → Close</li>
<li><strong>Always use STAR method.</strong> Forces specific examples, exposes fabricated experience, reveals individual vs team contribution</li>
<li><strong>Never skip live tests.</strong> The "senior developer who couldn't code" story is your permanent reminder</li>
<li><strong>Fill the scorecard immediately.</strong> 20+/30 = Strong Hire, 15-19 = Maybe, &lt;15 = No Hire</li>
<li><strong>Unconscious bias is real.</strong> Use structured interviews, independent scoring, and documented decisions</li>
<li><strong>Reference checks are mandatory.</strong> "Would you re-hire them?" is the most revealing question. Hesitation = soft no</li>
</ol>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li>The hiring funnel is 100 → 15 → 8 → 5 → 2-3 → 1-2 → 1. Each stage exists because DH learned the hard way what happens when you skip it</li>
        <li>Resume screening takes 30 seconds per CV — use the checklist for role match, experience, tenure, portfolio, and quantified achievements</li>
        <li>Phone screen is 10 minutes max — focus on knockout criteria: CTC, notice period, location, schedule compatibility</li>
        <li>STAR method is mandatory for every behavioral question — it exposes fabricated experience and reveals individual vs team contribution</li>
        <li>Use ChatGPT prompts for resume evaluation, question generation, and response scoring — but never let AI make the final hiring decision</li>
        <li>Weekly performance calls during probation collect 4 mandatory data points: attendance %, tasks completed, quality scores, client feedback</li>
        <li>Reference checks are non-negotiable — "Would you re-hire them?" is the most revealing question. Hesitation equals a soft no</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">You are the gatekeeper. Every candidate who makes it past your screening will consume interview time from hiring managers, team leads, and senior staff. A poor screen wastes dozens of hours across the organization. A great screen ensures that only the best 2-3 candidates out of 100 ever reach the interview stage — saving the company hundreds of hours and ensuring every person who joins DH can move clients from Point A to Point B.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The key for us, number one, has always been hiring people. And we go after the best." — Satya Nadella</p>
    </div>
</div>

`;

const task3Quiz = [
    { q: "In the DH hiring funnel, approximately how many CVs does it take to make 1 successful hire?", o: ["25 applications", "50 applications", "100 applications", "200 applications"], c: 2 },
    { q: "How much time should you spend on the initial scan of each resume during CV screening?", o: ["5 minutes — thorough reading is essential", "2 minutes — read the full resume and take notes", "10 seconds — just check the job title and years of experience", "30 seconds — use the checklist to quickly identify pass/fail criteria"], c: 3 },
    { q: "Which of these is a GREEN flag on a candidate's resume at DH?", o: ["Specific project outcomes like 'increased PageSpeed from 40 to 85'", "5+ jobs in the last 3 years showing broad exposure", "Generic objectives like 'seeking a challenging position'", "Resume longer than 3 pages showing thoroughness for a fresh graduate"], c: 0 },
    { q: "The phone screening call should last approximately how long, and what is its primary purpose?", o: ["30 minutes — to conduct a mini-interview covering all role requirements", "10 minutes — to filter for dealbreakers like CTC, notice period, and location before investing full interview time", "5 minutes — just to confirm the candidate received the interview invitation", "60 minutes — to thoroughly assess both technical skills and cultural fit"], c: 1 },
    { q: "What is the purpose of the AI app task / take-home assignment in DH's hiring funnel?", o: ["To get free work done by candidates before hiring them", "To assess the candidate's salary expectations based on how much effort they put in", "To replace the video interview entirely for roles that don't need face-to-face assessment", "To test if the candidate can follow instructions, deliver quality work, and meet a deadline — filtering 40-60% of non-serious candidates"], c: 3 },
    { q: "A candidate submits their AI app task 24 hours late without any prior communication. What does this signal?", o: ["They couldn't manage a 72-hour deadline, which means they'll likely miss client deadlines — this is a red flag", "They were being thorough and wanted to deliver perfect work — a good sign of quality focus", "Late submissions are acceptable as long as the quality is high — evaluate the work only", "Contact them to ask why — there might be a reasonable explanation that excuses the delay"], c: 0 },
    { q: "What does STAR stand for in the STAR interview method?", o: ["Skills, Training, Aptitude, Results", "Situation, Task, Action, Result", "Strategy, Tactics, Achievement, Review", "Strengths, Threats, Advantages, Risks"], c: 1 },
    { q: "A candidate keeps answering STAR questions with 'We did X, we achieved Y.' What should you do?", o: ["Accept their answers — teamwork is important and they're showing collaboration skills", "End the interview immediately as this is a clear sign of dishonesty", "Push with 'What was YOUR specific contribution?' to distinguish individual impact from team credit", "Ask them to provide a written summary of their contributions after the interview"], c: 2 },
    { q: "On the interview scorecard (30-point scale), what score threshold indicates a 'Strong Hire'?", o: ["25+ points out of 30", "20+ points out of 30", "15+ points out of 30", "10+ points out of 30"], c: 0 },
    { q: "DH hired a 'senior developer' who couldn't write a basic Liquid for loop. What policy change resulted?", o: ["All developers now need a computer science degree from a Tier-1 college", "A mandatory 30-minute live coding test is now required for ALL developer candidates regardless of seniority", "Senior developers are now only hired through recruitment agencies who pre-screen technical skills", "All developer interviews must now be conducted by the CTO personally"], c: 1 },
    { q: "Which type of unconscious bias causes you to favor a candidate because they went to the same college as you?", o: ["Halo effect", "Confirmation bias", "Affinity bias", "Contrast effect"], c: 2 },
    { q: "During a reference check, which question is identified as the MOST important and revealing?", o: ["'Would you re-hire them? Why or why not?'", "'How did they handle pressure or tight deadlines?'", "'What were their biggest strengths?'", "'On a scale of 1-10, how would you rate their work quality?'"], c: 0 },
    { q: "A reference hesitates and says 'probably' when asked 'Would you re-hire this candidate?' What does this signal?", o: ["A positive response — 'probably' means they would likely re-hire with minor reservations", "A soft no — hesitation on this question typically indicates significant concerns they're being diplomatic about", "A neutral response that requires no further investigation", "They simply need more time to think about their answer"], c: 1 },
    { q: "According to the video interview structure, how much total time should a DH interview last?", o: ["30 minutes — keep it short and focused on technical skills only", "90 minutes — to thoroughly cover every possible competency area", "15 minutes — most of the assessment is done through the AI app task", "45-60 minutes — structured into 7 phases from warm-up through closing"], c: 3 },
    { q: "A candidate badmouths their previous employer during the interview. According to DH's guidelines, what action should you take?", o: ["Note it but continue — everyone has bad employer experiences", "Probe deeper to understand if their complaints are legitimate before deciding", "Immediate disqualify — at DH, every badmouther became a problem employee", "Ask for specifics and verify with a reference check before making a decision"], c: 2 }
];

const task4Content = `
<h2>📚 TASK 4: Offer, Onboarding & First 90 Days</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">The offer and onboarding experience defines whether a new hire becomes a long-term asset or a costly turnover statistic. At Digital Heroes, the first 90 days are make-or-break — this is where culture is absorbed, habits are formed, and the foundation for high performance is laid. As HR, you are the architect of this entire journey.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"You never get a second chance to make a first impression. Onboarding IS that first impression — make it unforgettable."</p>
</div>

<div class="content-section">
<h3>💼 Making the Offer — Getting to Yes</h3>
<p>An offer isn't just a salary number — it's a complete package that must be competitive, clear, and compelling. The way you present the offer often matters as much as the numbers themselves.</p>

<h4>Salary Negotiation Framework</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>The 4-Step Framework:</strong>
<ol>
<li><strong>Research Market Rates:</strong> Check Glassdoor, AmbitionBox, and LinkedIn Salary Insights for the role in Jaipur. Know the market before the candidate tells you what the market pays</li>
<li><strong>Set a Range:</strong> Determine your walk-away price and your maximum. Never start at your maximum — leave room for negotiation</li>
<li><strong>Present with Confidence:</strong> Don't apologize for the offer. Present the full package — base + bonus + incentives + growth path + equity sharing</li>
<li><strong>Be Transparent:</strong> Break down CTC clearly. Candidates who understand their package are less likely to feel "tricked" later</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📊 DH Salary Bands — By Role and Level</h3>
<p>These are the standard DH salary bands. The Delhi team has final authority on all hiring salary decisions — this is non-negotiable.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Role</th><th style="padding:12px;text-align:left;">Entry Level</th><th style="padding:12px;text-align:left;">Mid Level</th><th style="padding:12px;text-align:left;">Senior Level</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Shopify Developer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K-20K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹20K-30K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹30K-45K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>UI/UX Designer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K-20K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹20K-28K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹28K-40K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Full Stack Developer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹20K-25K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25K-35K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹35K-50K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Project Manager</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹18K-22K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹22K-32K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹32K-45K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Content Writer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹10K-15K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K-22K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹22K-30K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Sales Associate</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹12K-18K/mo + comm</td><td style="padding:10px;border:1px solid #E2E8F0;">₹18K-25K/mo + comm</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25K-35K/mo + comm</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>HR</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹12K-18K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹18K-25K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25K-35K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Social Media</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹10K-15K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K-22K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹22K-28K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>CS/CSM</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹15K-20K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹20K-28K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹28K-38K/mo</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Finance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹12K-18K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹18K-25K/mo</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25K-35K/mo</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Critical Rule:</strong> Hiring salary decisions are DELHI TEAM ONLY. You do not have authority to extend an offer above the standard band without explicit approval from Delhi leadership. This applies to all roles, all levels, no exceptions. When in doubt, escalate before extending the offer.
</div>
</div>

<div class="content-section">
<h3>💰 CTC Structure Breakdown</h3>
<p>When explaining offers to candidates, always break CTC down transparently. Here's how DH structures compensation:</p>

<h4>CTC Components</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Component</th><th style="padding:12px;text-align:left;">What It Is</th><th style="padding:12px;text-align:left;">Typical %</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Basic Salary</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Fixed monthly pay — the guaranteed amount</td><td style="padding:10px;border:1px solid #E2E8F0;">50-60% of CTC</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>HRA (House Rent Allowance)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Tax-saving component for those paying rent</td><td style="padding:10px;border:1px solid #E2E8F0;">20-25% of CTC</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Special Allowance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Flexible component covering miscellaneous expenses</td><td style="padding:10px;border:1px solid #E2E8F0;">10-15% of CTC</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>PF Contribution (Employer)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">12% of basic salary, matched by employer</td><td style="padding:10px;border:1px solid #E2E8F0;">Applicable if CTC &gt; statutory threshold</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Performance Bonus</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Quarterly bonus based on KPI achievement</td><td style="padding:10px;border:1px solid #E2E8F0;">Variable</td></tr>
</tbody>
</table>

<h4>Example CTC Calculation — ₹20,000/month</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#334155;color:white;"><th style="padding:10px;text-align:left;">Component</th><th style="padding:10px;text-align:left;">Monthly</th><th style="padding:10px;text-align:left;">Annual</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Basic Salary</td><td style="padding:8px;border:1px solid #E2E8F0;">₹10,000</td><td style="padding:8px;border:1px solid #E2E8F0;">₹1,20,000</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">HRA</td><td style="padding:8px;border:1px solid #E2E8F0;">₹5,000</td><td style="padding:8px;border:1px solid #E2E8F0;">₹60,000</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Special Allowance</td><td style="padding:8px;border:1px solid #E2E8F0;">₹5,000</td><td style="padding:8px;border:1px solid #E2E8F0;">₹60,000</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Total CTC</strong></td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹20,000</strong></td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹2,40,000</strong></td></tr>
</tbody>
</table>
<em>In-hand: approximately ₹18,500-19,500/month after minor deductions.</em>
</div>

<h4>Example CTC Calculation — ₹35,000/month</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#334155;color:white;"><th style="padding:10px;text-align:left;">Component</th><th style="padding:10px;text-align:left;">Monthly</th><th style="padding:10px;text-align:left;">Annual</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Basic Salary</td><td style="padding:8px;border:1px solid #E2E8F0;">₹17,500</td><td style="padding:8px;border:1px solid #E2E8F0;">₹2,10,000</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">HRA</td><td style="padding:8px;border:1px solid #E2E8F0;">₹8,750</td><td style="padding:8px;border:1px solid #E2E8F0;">₹1,05,000</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Special Allowance</td><td style="padding:8px;border:1px solid #E2E8F0;">₹6,650</td><td style="padding:8px;border:1px solid #E2E8F0;">₹79,800</td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">PF (Employer Contribution)</td><td style="padding:8px;border:1px solid #E2E8F0;">₹2,100</td><td style="padding:8px;border:1px solid #E2E8F0;">₹25,200</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Total CTC</strong></td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹35,000</strong></td><td style="padding:8px;border:1px solid #E2E8F0;"><strong>₹4,20,000</strong></td></tr>
</tbody>
</table>
<em>In-hand: approximately ₹30,500-32,000/month after PF employee contribution and professional tax.</em>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Payment & Advance Policy:</strong>
<ul>
<li><strong>Payment date:</strong> Last working day of the month via bank transfer</li>
<li><strong>Salary advance:</strong> Eligible after 3 months of employment, maximum 50% of monthly salary, for genuine reasons only (medical emergency, relocation, etc.)</li>
<li><strong>Equity sharing:</strong> Even interns get equity from Day 1 — this is a key DH differentiator. Make sure candidates know about this during offer discussions</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🤝 Counter-Offer Handling</h3>
<p>Counter-offers happen when a candidate who has already accepted your offer gets a counter-offer from their current employer. Here are the 3 most common scenarios with ready-to-use scripts:</p>

<h4>Scenario 1: Candidate Asks for 30% More Than Offered</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Context:</strong> You've offered a mid-level developer ₹25K/month. They want ₹32K/month (30% more).<br><br>
<strong>HR Script:</strong><br>
"I understand your expectation, and I appreciate you being upfront. Let me walk you through our full compensation picture so we're comparing apples to apples.<br><br>
Our ₹25K offer includes a fixed base plus quarterly performance bonuses. Top performers consistently hit these bonuses — 70% of our developers earned full bonus last quarter. Your effective take-home for strong performance is closer to ₹28-30K/month.<br><br>
Beyond the numbers: you'll be working on international Shopify clients (US, UK, Australia), building a portfolio that commands premium rates. Plus, our 90-day review has a built-in revision for high performers.<br><br>
Can we start at ₹25K and revisit at your 90-day review? If your work matches your interview performance, I'm confident we'll close the gap quickly."<br><br>
<strong>Why this works:</strong> You're reframing CTC, highlighting non-monetary benefits, and offering a concrete path to their target number.
</div>

<h4>Scenario 2: Candidate Has a Competing Offer</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Context:</strong> A strong designer has 2 other offers. The highest is ₹35K/month. Your band tops out at ₹30K for this level.<br><br>
<strong>HR Script:</strong><br>
"Congratulations on having multiple offers — that speaks to your skills. I won't ask you to share offer letters, but I'd like to understand what's important to you beyond salary.<br><br>
₹30K is our maximum for this band, and I want to be transparent about that. However, at DH, you'll be the design owner for international Shopify brands. Our designers have built portfolios that landed them Dribbble features. You'll have direct client interaction, not filtered through 3 layers of management.<br><br>
If ₹35K is a non-negotiable number, I understand. But if the type of work and growth matters, I'd love to have you here at ₹30K with a 6-month review for a band upgrade."<br><br>
<strong>Why this works:</strong> Honest ceiling, creative positioning, and conversation refocused on growth.
</div>

<h4>Scenario 3: Current Employer Counter-Offers</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Context:</strong> Candidate accepted your offer but their current employer offered a 40% raise to stay.<br><br>
<strong>HR Script:</strong><br>
"That's great that they value you! But consider this: they only offered more because you were leaving. Why didn't they pay you fairly before? The reasons you wanted to leave — the growth ceiling, the boring projects, the lack of international exposure — those haven't changed.<br><br>
At DH, we pay fairly from Day 1. You won't need to threaten resignation to get a raise. And here's a number that might matter: 80% of people who accept counter-offers leave within 6 months anyway. The relationship is already broken."<br><br>
<strong>Decision:</strong> Give them 24 hours maximum to decide. Say: "I need your final answer by tomorrow at 5 PM so we can finalize onboarding." Never enter a bidding war.
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ When to Walk Away:</strong> If the counter-offer is 30%+ above your maximum and the candidate is clearly leaning toward staying, withdraw gracefully: "We respect your decision. The door is always open if things change." Don't beg, don't match blindly, don't break internal equity for one person.
</div>
</div>

<div class="content-section">
<h3>📋 The Complete Onboarding Checklist (Pre-Day 1)</h3>
<p>A great first impression starts before the employee walks in. Everything on this list must be done BEFORE the new hire's first day. No exceptions.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Category</th><th style="padding:12px;text-align:left;">Task</th><th style="padding:12px;text-align:left;">Ready By</th><th style="padding:12px;text-align:left;">Owner</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Communication</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Company email, Slack workspace, Discord server access</td><td style="padding:10px;border:1px solid #E2E8F0;">2 days before</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Project Tools</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Jira/ClickUp access, Google Drive folders, SOPs library</td><td style="padding:10px;border:1px solid #E2E8F0;">2 days before</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Hardware</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Workstation configured, charger, mouse, headset ready</td><td style="padding:10px;border:1px solid #E2E8F0;">2 days before</td><td style="padding:10px;border:1px solid #E2E8F0;">IT</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Training</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Training module link ready, SOP document identified</td><td style="padding:10px;border:1px solid #E2E8F0;">2 days before</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>People</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Buddy assigned, manager briefed, team informed</td><td style="padding:10px;border:1px solid #E2E8F0;">3 days before</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Documents</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">NDA prepared, employment contract ready, welcome email drafted</td><td style="padding:10px;border:1px solid #E2E8F0;">3 days before</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Welcome Kit</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Welcome letter, ID card, office keys/access card, stationery</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 1 on desk</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 HR Pro Tip:</strong> Create a shared Google Sheet called "New Joiner Setup Tracker" with the employee name as a row and each tool/task as a column. Mark each as Done/Pending. Share it with IT admin 3 days before joining date. This single spreadsheet has eliminated 90% of DH's "Day 1 access issues."
</div>
</div>

<div class="content-section">
<h3>📅 Day 1 Schedule — Hour by Hour</h3>
<p>Don't leave anything to chance. Here's the exact schedule every new joiner follows at DH:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Time</th><th style="padding:12px;text-align:left;">Activity</th><th style="padding:12px;text-align:left;">Led By</th><th style="padding:12px;text-align:left;">Duration</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">9:00 AM</td><td style="padding:10px;border:1px solid #E2E8F0;">Welcome, office tour, desk setup, verify hardware works</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">30 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">9:30 AM</td><td style="padding:10px;border:1px solid #E2E8F0;">Team introductions — walk around and meet every team member by name</td><td style="padding:10px;border:1px solid #E2E8F0;">Buddy</td><td style="padding:10px;border:1px solid #E2E8F0;">30 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">10:00 AM</td><td style="padding:10px;border:1px solid #E2E8F0;">HR orientation: company overview, DH Manifesto, policies, leave system, handbook overview</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">60 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">11:00 AM</td><td style="padding:10px;border:1px solid #E2E8F0;">Tool setup: log into every account, join Discord channels, test email, verify all access</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/Buddy</td><td style="padding:10px;border:1px solid #E2E8F0;">60 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">12:00 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Buddy introduction and shadow session — watch how your buddy works</td><td style="padding:10px;border:1px solid #E2E8F0;">Buddy</td><td style="padding:10px;border:1px solid #E2E8F0;">60 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1:00 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Team lunch with buddy and 1-2 team members (informal, relationship building)</td><td style="padding:10px;border:1px solid #E2E8F0;">Buddy</td><td style="padding:10px;border:1px solid #E2E8F0;">60 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">2:00 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager 1-on-1 briefing: role expectations, first week plan, KPIs, Q&A</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">60 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">3:00 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">SOP reading begins — the new hire's primary resource for how things work</td><td style="padding:10px;border:1px solid #E2E8F0;">Self-study</td><td style="padding:10px;border:1px solid #E2E8F0;">90 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">4:30 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Start Training Module — complete Task 1 (orientation/mindset)</td><td style="padding:10px;border:1px solid #E2E8F0;">Self-study</td><td style="padding:10px;border:1px solid #E2E8F0;">30 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5:00 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 1 check-in with HR: questions, concerns, how was the experience?</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">15 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5:15 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Submit first EOD report on Discord (teach the habit from Day 1)</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire</td><td style="padding:10px;border:1px solid #E2E8F0;">15 min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5:30 PM</td><td style="padding:10px;border:1px solid #E2E8F0;">End of day</td><td style="padding:10px;border:1px solid #E2E8F0;">—</td><td style="padding:10px;border:1px solid #E2E8F0;">—</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📅 Week 1 Plan — Day by Day</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Day</th><th style="padding:12px;text-align:left;">Focus</th><th style="padding:12px;text-align:left;">Deliverables</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 1 (Mon)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Orientation & Setup</td><td style="padding:10px;border:1px solid #E2E8F0;">All tools working, SOP read started, Training Module started, first EOD submitted</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 2 (Tue)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">SOP Deep Dive + Training</td><td style="padding:10px;border:1px solid #E2E8F0;">Complete SOP reading, Training tasks 2-3 done, attend first team standup</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 3 (Wed)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Shadow Experienced Team Member</td><td style="padding:10px;border:1px solid #E2E8F0;">Watch a senior handle a real project, continue training tasks 4-5, take notes</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 4 (Thu)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">First Supervised Task</td><td style="padding:10px;border:1px solid #E2E8F0;">Low-risk real task assigned by manager (supervised), training tasks 6-7</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 5 (Fri)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Week 1 Review</td><td style="padding:10px;border:1px solid #E2E8F0;">First assignment submitted, buddy check-in, manager check-in, HR Week 1 feedback form</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 HR Action at End of Week 1:</strong> Send a brief feedback form to the new hire: "Rate your first week 1-5 on: Welcome experience, Tool readiness, Manager availability, Clarity of role, Buddy support." This data helps you catch problems early and improve the process for future hires.
</div>
</div>

<div class="content-section">
<h3>🤝 The Buddy System</h3>
<p>Every new hire at DH gets assigned a buddy — an experienced team member who acts as their go-to person for the first 30 days.</p>

<h4>Who Qualifies as a Buddy?</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Selection Criteria:</strong>
<ul>
<li><strong>Same or adjacent role:</strong> A developer buddy for a developer hire, not a designer buddy</li>
<li><strong>6+ month tenure at DH:</strong> They need to know the culture, processes, and tools well</li>
<li><strong>Good communicator:</strong> Patient, approachable, not too busy to help</li>
<li><strong>Good performer:</strong> Don't assign someone currently on a PIP or frustrated</li>
<li><strong>Voluntary:</strong> Ask, don't assign. Forced buddies create resentment</li>
</ul>
</div>

<h4>Buddy Responsibilities</h4>
<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin:15px 0;">
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px;">
<strong>✅ What a Buddy Does:</strong>
<ul>
<li>Answers "dumb" questions without judgment</li>
<li>Shows how things actually work day-to-day</li>
<li>Introduces them to the team personally</li>
<li>Eats lunch with them for the first week</li>
<li>Daily 10-minute check-in for the first 2 weeks</li>
<li>Weekly check-in for weeks 3-4</li>
<li>Flags concerns to HR proactively</li>
</ul>
</div>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px;">
<strong>❌ What a Buddy Does NOT Do:</strong>
<ul>
<li>Replace the reporting manager</li>
<li>Assign or review work</li>
<li>Make performance decisions</li>
<li>Share opinions about other team members</li>
<li>Give salary or promotion advice</li>
<li>Act as a therapist for personal issues</li>
</ul>
</div>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Buddy Incentive:</strong> Buddies who successfully onboard a new hire (confirmed after 30-day check-in) get a ₹500 bonus and public acknowledgment in the team standup. It's a small amount but the recognition matters.
</div>
</div>

<div class="content-section">
<h3>📅 The 30-60-90 Day Plan</h3>

<h4>30 Days — Learning & Foundation</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Expected Outcomes:</strong>
<ul>
<li>Complete all training modules (100%)</li>
<li>Pass knowledge test (90%+ score)</li>
<li>Complete SOP reading and understand daily workflow</li>
<li>Handle 2-3 supervised tasks successfully</li>
<li>Understand DH tools ecosystem and can use all tools independently</li>
<li>Weekly 1:1 with manager established as routine</li>
<li>EOD reports submitted every day without reminders</li>
</ul>
<strong>HR Action:</strong> Conduct 30-day review with manager. Gather buddy feedback. Complete Day 30 survey.
</div>

<h4>60 Days — Independence & Contribution</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Expected Outcomes:</strong>
<ul>
<li>Handle tasks independently with minimal hand-holding</li>
<li>Meet basic KPIs for the role</li>
<li>Contribute meaningfully to team meetings and discussions</li>
<li>Build relationships across departments</li>
<li>Monthly review score: 6.0+ minimum (out of 10)</li>
<li>Zero client complaints attributable to the new hire</li>
</ul>
<strong>HR Action:</strong> Conduct 60-day review. Identify any concerns early. If performance is below expectations, start informal improvement conversation.
</div>

<h4>90 Days — Probation Decision</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Expected Outcomes:</strong>
<ul>
<li>Meet full KPIs consistently</li>
<li>Zero client complaints</li>
<li>Positive feedback from buddy and manager</li>
<li>Working fully independently</li>
<li>Monthly review score: 7.0+ for confirmation</li>
</ul>
<strong>Probation Decision:</strong>
<ul>
<li><strong>7.0+ score = CONFIRM</strong> — Employee confirmed as permanent. Salary revision if applicable</li>
<li><strong>5.0-6.9 score = EXTEND</strong> — Probation extended by 30 days with specific improvement areas documented</li>
<li><strong>&lt;5.0 score = TERMINATE</strong> — Employment ended. Proper documentation and notice provided</li>
</ul>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Critical:</strong> The probation review must happen ON or BEFORE Day 90. If you miss this deadline without taking action, many labor practices consider the employee auto-confirmed. Set calendar reminders at Day 75 and Day 85 to ensure the review happens on time. Never let probation expire passively.
</div>
</div>

<div class="content-section">
<h3>📊 Probation Review Criteria</h3>
<p>At Day 90, HR facilitates a formal probation review. This is a decision point, not a casual conversation.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Criteria</th><th style="padding:12px;text-align:left;">What You're Assessing</th><th style="padding:12px;text-align:left;">Evidence Sources</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Technical Competence</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Can they do the job independently?</td><td style="padding:10px;border:1px solid #E2E8F0;">Task completion rate, quality scores, client feedback</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Cultural Fit</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Do they embody DH values?</td><td style="padding:10px;border:1px solid #E2E8F0;">Buddy feedback, team observations, attitude in standups</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Communication</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Are they responsive and professional?</td><td style="padding:10px;border:1px solid #E2E8F0;">Response times on Discord/Slack, EOD report quality, client interactions</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Learning Agility</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Did they improve over 90 days?</td><td style="padding:10px;border:1px solid #E2E8F0;">Training module completion, skill progression, feedback responsiveness</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Attendance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Any unexplained absences?</td><td style="padding:10px;border:1px solid #E2E8F0;">Attendance records, punctuality, leave requests</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🛠️ Tools & Accounts Setup Checklist — By Role</h3>
<p>Different roles need different tools. Here's what needs to be set up per role, BEFORE Day 1:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">Category</th><th style="padding:12px;text-align:left;">Tools</th><th style="padding:12px;text-align:left;">Applicable Roles</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>All Roles</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Slack, Discord, Google Workspace (email + Drive), Jira/ClickUp, Company calendar</td><td style="padding:10px;border:1px solid #E2E8F0;">Everyone</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Development</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">GitHub org access, Shopify Partner account, VS Code, Shopify CLI, Theme Kit</td><td style="padding:10px;border:1px solid #E2E8F0;">Developers, Full Stack</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Design</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Figma (team invite), Canva Pro, Adobe CC (if needed)</td><td style="padding:10px;border:1px solid #E2E8F0;">Designers, Content</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Project Mgmt</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Jira admin access, Google Calendar, client communication platforms</td><td style="padding:10px;border:1px solid #E2E8F0;">PM</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Sales & CS</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Fiverr/Upwork sub-accounts, CRM access, Shopify collaborator invites</td><td style="padding:10px;border:1px solid #E2E8F0;">Sales, CS, PM</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Content</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">WordPress admin, SEO tools (Ahrefs/SEMrush), Grammarly Premium</td><td style="padding:10px;border:1px solid #E2E8F0;">Content Writers</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Finance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Accounting software, banking portal access (limited)</td><td style="padding:10px;border:1px solid #E2E8F0;">Finance</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>HR & Admin</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HRMS portal, attendance system, leave management tool</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>AI Tools</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Claude/ChatGPT access (team plan), Claude Code CLI</td><td style="padding:10px;border:1px solid #E2E8F0;">Developers, Designers, Content</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>⚠️ Common New Joiner Mistakes & HR Prevention</h3>
<p>These are the most common mistakes we've seen new hires make at DH. As HR, your job is to prevent these proactively during onboarding:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;"><th style="padding:12px;text-align:left;">#</th><th style="padding:12px;text-align:left;">Mistake</th><th style="padding:12px;text-align:left;">Why It Happens</th><th style="padding:12px;text-align:left;">Prevention</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1</td><td style="padding:10px;border:1px solid #E2E8F0;">Not reading the SOP thoroughly</td><td style="padding:10px;border:1px solid #E2E8F0;">Thinks they already know the job</td><td style="padding:10px;border:1px solid #E2E8F0;">Make SOP completion a probation requirement. Quiz them on Day 5</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">2</td><td style="padding:10px;border:1px solid #E2E8F0;">Being afraid to ask questions</td><td style="padding:10px;border:1px solid #E2E8F0;">Fear of looking incompetent</td><td style="padding:10px;border:1px solid #E2E8F0;">DH encourages questions! Say this explicitly during orientation. Buddy creates safe space</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">3</td><td style="padding:10px;border:1px solid #E2E8F0;">Not sending daily progress updates</td><td style="padding:10px;border:1px solid #E2E8F0;">Nobody showed them the format</td><td style="padding:10px;border:1px solid #E2E8F0;">Demonstrate EOD submission on Day 1. Check daily for first week</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">4</td><td style="padding:10px;border:1px solid #E2E8F0;">Taking shortcuts on quality</td><td style="padding:10px;border:1px solid #E2E8F0;">Trying to impress with speed over quality</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager should emphasize: "Quality first, speed comes with practice"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5</td><td style="padding:10px;border:1px solid #E2E8F0;">Not responding to messages quickly enough</td><td style="padding:10px;border:1px solid #E2E8F0;">Not used to DH's communication speed</td><td style="padding:10px;border:1px solid #E2E8F0;">Explain SLA on Day 1: 15 min for internal, 5 min for client messages</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real DH Story — "The Priya Incident":</strong><br>
Priya joined as a designer but nobody told her about DH's Figma conventions for 3 weeks. She used her own file structure, wrong color tokens, and non-standard component naming. Her first 5 designs were all in the wrong format and had to be completely redone.<br><br>
<strong>What went wrong:</strong> No Day 1 onboarding checklist, no buddy assigned, no Figma template pack shared.<br><br>
<strong>What we changed:</strong> Now every new designer gets our Figma template pack, style guide, and component library on Day 1. A design buddy walks them through conventions on their first morning. <strong>Result: New designers now deliver correct-format work by Day 3 instead of Day 21.</strong>
</div>
</div>

<div class="content-section">
<h3>📝 Onboarding Feedback Survey</h3>
<p>Send surveys at Day 7, Day 30, and Day 90 to track the new hire's experience and identify systemic issues:</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Day 7 Survey Questions (1-5 scale + open text):</strong>
<ol>
<li>Was your workstation/laptop ready on Day 1?</li>
<li>Did you receive a clear explanation of your role and expectations?</li>
<li>Was your buddy helpful and available?</li>
<li>Were all required tool accounts set up and working?</li>
<li>Did you feel welcomed by the team?</li>
<li>What is one thing that could have been better about your first week? (open text)</li>
</ol>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Day 30 Survey Questions:</strong>
<ol>
<li>Do you have clarity on your daily responsibilities?</li>
<li>How would you rate the quality of feedback from your manager?</li>
<li>Is the training module helping you learn your role effectively?</li>
<li>Do you feel comfortable asking questions when stuck?</li>
<li>Would you recommend working at DH to a friend?</li>
</ol>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Day 90 Survey Questions:</strong>
<ol>
<li>Do you feel you've ramped up to the expected performance level?</li>
<li>Has the onboarding process prepared you well for your role?</li>
<li>Do you see a clear growth path for yourself at DH?</li>
<li>How would you rate your overall onboarding experience?</li>
<li>What one thing would you change about the onboarding process? (open text)</li>
</ol>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 How to Use This Data:</strong> Track average scores per question across all new hires. If any question consistently scores below 3.5, that's a systemic issue HR needs to fix. For example, if "Was your buddy helpful?" averages 2.8, you need to revamp how you select and train buddies — not just find a better buddy for the next hire.
</div>
</div>

<div class="content-section">
<h3>📈 Equity Sharing / Profit-Sharing Model</h3>
<p>One of Digital Heroes' most powerful differentiators is that <strong>even interns are eligible for equity sharing from Day 1</strong>. This is not a gimmick — it's a core philosophy that aligns individual effort with company growth.</p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>5 Criteria for Equity Sharing Evaluation:</strong>
<ol>
<li><strong>Individual Performance:</strong> Your KPI scores, task completion rates, and quality metrics</li>
<li><strong>Team Contribution:</strong> How you lift others — mentoring, cross-training, collaboration</li>
<li><strong>Innovation:</strong> Process improvements, creative solutions, new ideas that save time or increase revenue</li>
<li><strong>Consistency:</strong> Month-over-month reliability — not just one good sprint, but sustained excellence</li>
<li><strong>Growth Mindset:</strong> Actively upskilling, taking on challenges, learning from mistakes</li>
</ol>
<strong>The Formula: More Impact = More Value = Larger Share.</strong><br>
Communicate this clearly during onboarding — it motivates from Day 1 and shows that DH rewards contribution, not just tenure.
</div>
</div>

<div class="content-section">
<h3>📖 SOP Obsession — Why SOPs Are Non-Negotiable</h3>
<p>At Digital Heroes, SOPs (Standard Operating Procedures) are not bureaucratic paperwork — they are the backbone of scalable, consistent quality delivery.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">What is an SOP?</strong><br>
<span style="color: #1E293B;">An SOP is a step-by-step document that defines <em>exactly</em> how a task or process should be executed. It ensures that whether the task is done by Person A or Person Z, the output quality is identical.</span><br><br>

<strong style="color: #1E293B;">Why Every Employee Must Follow SOPs:</strong>
<ul style="color: #1E293B;">
<li><strong>Daily SOP:</strong> Every team member has a Daily SOP that defines their routine — morning standup, task execution, communication cadence, EOD reports. Following this daily ensures nothing falls through the cracks.</li>
<li><strong>Role SOP:</strong> Each role (developer, designer, PM, CS, etc.) has a detailed Role SOP that covers every process specific to their function — from how to handle a client request to how to submit deliverables.</li>
</ul>

<strong style="color: #1E293B;">The Duty to Evolve SOPs:</strong><br>
<span style="color: #1E293B;">SOPs are living documents. If an employee discovers a better way to do something, they are expected to flag it to their manager and suggest an update. The best SOPs are written by the people who actually do the work.</span><br><br>

<strong style="color: #1E293B;">First Week Mandate:</strong> <span style="color: #1E293B;">New hires must complete their Daily SOP + Role SOP reading within the first week. This is tracked by the buddy and confirmed by the manager at the Week 1 review.</span>
</div>
</div>

<div class="content-section">
<h3>🚀 Growth & Income Formulas</h3>
<p>During onboarding, share these DH formulas with every new hire. They set expectations and create alignment from Day 1.</p>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">📊 The Growth Formula:</strong><br>
<span style="font-size: 1.1em; color: #1E293B;"><strong>Employee Growth = Company Growth x HIGH WILL x HIGH SKILL</strong></span><br><br>
<span style="color: #1E293B;">This means: your personal growth is directly proportional to the company's growth, multiplied by your willingness to push (WILL) and your competence to deliver (SKILL). <strong>Skill requires constant uplevelling and innovation</strong> — the market changes every quarter, and stagnant skills mean stagnant careers.</span><br><br>

<strong style="color: #1E293B;">💰 The Income Formula:</strong><br>
<span style="font-size: 1.1em; color: #1E293B;"><strong>Income = Happy Clients x Skill x Speed</strong></span><br><br>
<span style="color: #1E293B;">More happy clients + higher skill level + faster turnaround = higher income. This applies to every role — from sales (more deals closed faster) to developers (more bug-free deliveries per sprint) to HR (faster, better hires).</span>
</div>
</div>

<div class="content-section">
<h3>🗣️ Things to Communicate During Onboarding</h3>
<p>Beyond tools and processes, there are several cultural and behavioral expectations that must be communicated clearly on Day 1:</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">Daily Communication:</strong>
<ul style="color: #1E293B;">
<li><strong>Good morning greeting is MANDATORY:</strong> Every team member greets the team when they come online or walk into the office. It sounds small, but it builds team cohesion and signals that you're present and ready to work.</li>
</ul>

<strong style="color: #1E293B;">Dress Code — Smart Casual:</strong>
<ul style="color: #1E293B;">
<li>No shorts in the office</li>
<li>No t-shirts with offensive slogans, graphics, or inappropriate content</li>
<li>Clean, presentable appearance — you may be on a client video call at any time</li>
<li>For client meetings: business casual minimum (collared shirts, no flip-flops)</li>
</ul>

<strong style="color: #1E293B;">Office Security — No Visitors Policy:</strong>
<ul style="color: #1E293B;">
<li><strong>No friends, family, or personal visitors in the office.</strong> This is a strict data security policy — client data, project details, and internal discussions are confidential.</li>
<li>If someone needs to drop off something urgent (medicine, keys), they wait at reception. They do NOT enter the workspace area.</li>
<li>Exception: pre-approved visitors for official business (vendors, contractors) with HR notification.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>Salary bands are set by Delhi team — non-negotiable.</strong> Always get approval before exceeding the band</li>
<li><strong>CTC = Basic + HRA + Special Allowance + PF + Bonus.</strong> Always explain in-hand vs CTC to avoid surprises</li>
<li><strong>Equity sharing starts from Day 1</strong> — even for interns. This is a DH differentiator worth highlighting in offers</li>
<li><strong>Payment: last working day of month.</strong> Advance eligible after 3 months, max 50%, genuine reasons only</li>
<li><strong>Counter-offer rule:</strong> 80% who accept counter-offers leave within 6 months. Give candidates 24 hours max to decide</li>
<li><strong>Pre-Day 1 checklist:</strong> All tools, accounts, hardware, buddy, and documents must be ready 2 days before joining</li>
<li><strong>Day 1 follows an hour-by-hour schedule.</strong> 9 AM welcome → 5:30 PM end, every minute planned</li>
<li><strong>Buddy system:</strong> Same role, 6+ months tenure, voluntary. Daily check-ins for 2 weeks, weekly for weeks 3-4</li>
<li><strong>30-60-90 framework:</strong> Day 30 = training complete, Day 60 = independent work, Day 90 = probation decision</li>
<li><strong>Probation thresholds:</strong> 7.0+ = confirm, 5.0-6.9 = extend 30 days, &lt;5.0 = terminate. Review must happen BEFORE Day 90</li>
<li><strong>Collect feedback at Day 7, 30, 90.</strong> Track scores to find systemic onboarding issues</li>
</ol>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li>Equity sharing from Day 1 is a powerful differentiator — communicate the 5 criteria clearly during every offer</li>
        <li>SOP reading must be completed in the first week — Daily SOP + Role SOP are non-negotiable</li>
        <li>Growth Formula: Employee Growth = Company Growth x HIGH WILL x HIGH SKILL — share this on Day 1</li>
        <li>Income Formula: Income = Happy Clients x Skill x Speed — aligns individual effort with company success</li>
        <li>Good morning greetings are mandatory — small habits build big culture</li>
        <li>Smart Casual dress code enforced — no shorts, no offensive slogans, always video-call ready</li>
        <li>No personal visitors in office — strict data security policy with zero exceptions</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">You are the first person a new hire truly connects with at DH. The onboarding experience you design doesn't just fill a desk — it shapes whether someone becomes a passionate contributor or a disengaged seat-warmer. Every checklist you complete, every buddy you assign, every Day 1 schedule you execute is an investment in DH's future.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Great companies are built by great people — and great people stay because of great onboarding."</p>
    </div>
</div>
`;

const task4Quiz = [
    { q: "At DH, who has final authority on all hiring salary decisions?", o: ["The local HR manager in Jaipur", "The hiring manager for each team", "The candidate and HR negotiate independently", "The Delhi team — this is non-negotiable"], c: 3 },
    { q: "What is the entry-level salary band for a Content Writer at DH?", o: ["₹15K-20K/month", "₹10K-15K/month", "₹20K-25K/month", "₹8K-12K/month"], c: 1 },
    { q: "In the DH CTC structure, which component typically makes up the largest percentage?", o: ["HRA (House Rent Allowance)", "Special Allowance", "Basic Salary — typically 50-60% of CTC", "Performance Bonus"], c: 2 },
    { q: "When is an employee eligible for a salary advance at DH?", o: ["After 3 months, maximum 50% of monthly salary, for genuine reasons only", "From Day 1 — all employees can request advances at any time", "After 6 months, maximum 100% of monthly salary for any reason", "Salary advances are never allowed — DH has a strict no-advance policy"], c: 0 },
    { q: "According to DH's counter-offer handling guidelines, what percentage of people who accept counter-offers leave within 6 months?", o: ["30%", "50%", "80%", "95%"], c: 2 },
    { q: "How much time should you give a candidate to decide after a counter-offer situation?", o: ["1 week — major life decisions need time", "24 hours maximum — longer deliberation means they're likely to stay", "48-72 hours — same window as the AI app task", "No time limit — the best candidates are worth waiting for"], c: 1 },
    { q: "According to the Day 1 schedule, what activity happens at 2:00 PM?", o: ["Manager 1-on-1 briefing: role expectations, first week plan, KPIs", "SOP reading begins", "Team lunch with buddy", "Start Training Module — complete Task 1"], c: 0 },
    { q: "What are the criteria for selecting a buddy at DH?", o: ["Any available team member who volunteers — role doesn't matter", "The most senior person in the department, assigned by HR regardless of preference", "External mentors hired specifically for onboarding support", "Same or adjacent role, 6+ months tenure, good communicator, good performer, voluntary"], c: 3 },
    { q: "What is the buddy compensation at DH after successful onboarding?", o: ["₹5,000 bonus and a promotion recommendation", "₹500 bonus and public acknowledgment in team standup", "No compensation — it's an expected part of the job", "One extra day off and a certificate of appreciation"], c: 1 },
    { q: "In the 30-60-90 day plan, what is the minimum monthly review score required for probation confirmation at Day 90?", o: ["7.0 out of 10", "5.0 out of 10", "6.0 out of 10", "8.0 out of 10"], c: 0 },
    { q: "What happens if an employee scores between 5.0 and 6.9 at their 90-day probation review?", o: ["They are immediately terminated — below 7.0 is unacceptable", "They are confirmed but placed on a development plan with bi-weekly check-ins", "Probation is extended by 30 days with specific improvement areas documented", "They are moved to a different role that better suits their skills"], c: 2 },
    { q: "What happened in the 'Priya Incident' and what was the root cause?", o: ["Priya was a poor designer who couldn't follow instructions", "Priya quit after 1 week because the office culture was too intense", "Priya's laptop broke and IT took 3 weeks to replace it", "Nobody shared Figma conventions for 3 weeks, so her first 5 designs were in the wrong format"], c: 3 },
    { q: "How many days before the new hire's start date should all tools and accounts be ready?", o: ["2 days before joining date", "On the same day — set things up while they do orientation", "1 week before joining date", "1 day before"], c: 0 },
    { q: "Which of these is a DH policy regarding equity sharing?", o: ["Only senior employees (3+ years) qualify for equity", "Equity is offered as a retention bonus after 1 year", "Equity sharing is decided by Delhi team on a case-by-case basis", "Even interns get equity from Day 1"], c: 3 },
    { q: "According to the onboarding feedback system, what should HR do if a survey question consistently scores below 3.5 across multiple new hires?", o: ["Ignore it — some questions will always score low because new hires are anxious", "Find a systemic fix for that area rather than just addressing it per individual", "Remove the question from future surveys since it's clearly not relevant", "Schedule 1-on-1 meetings with each new hire to explain why the score should be higher"], c: 1 }
];

const task5Content = `
<h2>📚 TASK 5: Performance Management & Company Policies</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">Performance management and company policies are where HR moves from administrative to strategic. Getting reviews right means the difference between a team that grows together and one that stagnates. Knowing policies inside-out means you can answer any question confidently and enforce standards fairly — protecting both the company and its people.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"What gets measured gets managed. What gets managed gets improved. As HR, you own the measurement system."</p>
</div>

<div class="content-section">
<h3>📊 DH Performance Review System — Complete Guide</h3>
<p>Performance reviews at DH are conducted during the <strong>first week of each month</strong>, covering the previous month's performance. This is not optional, not negotiable, and not "when the manager gets around to it." Every team member gets reviewed. Every month. No exceptions.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🔑 Why Monthly?</strong><br>
Most companies do annual reviews. That's a terrible idea. If someone is underperforming, you've wasted 11 months before addressing it. If someone is excelling, you've waited 11 months to recognize them. Monthly reviews give us agility — we can course-correct quickly, reward fast, and never let problems fester.
</div>

<h4>The 1-10 Scoring Scale</h4>
<p>Every employee receives a single composite score from 1.0 to 10.0. This score determines their bonus, promotion eligibility, and whether they stay employed. Here's exactly how each tier works:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Score Range</th>
<th style="padding:12px;text-align:left;">Rating</th>
<th style="padding:12px;text-align:left;">Recognition</th>
<th style="padding:12px;text-align:left;">Bonus</th>
<th style="padding:12px;text-align:left;">Promotion Eligibility</th>
</tr></thead>
<tbody>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>9.0 – 10.0</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Exceptional</td><td style="padding:10px;border:1px solid #E2E8F0;">Exceptional recognition (public + team announcement)</td><td style="padding:10px;border:1px solid #E2E8F0;">100% bonus + 25% extra incentive</td><td style="padding:10px;border:1px solid #E2E8F0;">Immediately eligible</td></tr>
<tr style="background:#EFF6FF;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>8.0 – 8.9</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Exceeds Expectations</td><td style="padding:10px;border:1px solid #E2E8F0;">Acknowledged (team meeting mention)</td><td style="padding:10px;border:1px solid #E2E8F0;">100% bonus</td><td style="padding:10px;border:1px solid #E2E8F0;">Eligible after 2 consecutive months at this level</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>6.0 – 7.9</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Meets Expectations</td><td style="padding:10px;border:1px solid #E2E8F0;">Private acknowledgment</td><td style="padding:10px;border:1px solid #E2E8F0;">75% bonus</td><td style="padding:10px;border:1px solid #E2E8F0;">Eligible after 4 consecutive months at this level</td></tr>
<tr style="background:#FEF3C7;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4.0 – 5.9</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Below Expectations</td><td style="padding:10px;border:1px solid #E2E8F0;">Improvement plan issued</td><td style="padding:10px;border:1px solid #E2E8F0;">25% bonus</td><td style="padding:10px;border:1px solid #E2E8F0;">Not eligible for promotion</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1.0 – 3.9</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Poor</td><td style="padding:10px;border:1px solid #E2E8F0;">PIP (30-day plan)</td><td style="padding:10px;border:1px solid #E2E8F0;">No bonus</td><td style="padding:10px;border:1px solid #E2E8F0;">Termination risk</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Critical Note for HR:</strong><br>
The difference between 5.9 and 6.0 is massive — it's the line between "improvement plan + 25% bonus" and "private acknowledgment + 75% bonus." As HR, you must ensure managers score accurately and don't inflate or deflate ratings. A 6.0 given out of sympathy when the real score is 5.5 cheats the employee out of the improvement support they need, and cheats the company out of honest data.
</div>
</div>

<div class="content-section">
<h3>📏 Role-Specific Performance Metrics (Exact Weightings)</h3>
<p>Each role at DH has a unique set of metrics with precise percentage weightings. These are not negotiable — every review uses these exact weightings to calculate the composite score.</p>

<h4>Developer Metrics</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Metric</th>
<th style="padding:12px;text-align:left;">Weight</th>
<th style="padding:12px;text-align:left;">What It Measures</th>
<th style="padding:12px;text-align:left;">Data Source</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">On-Time Task Completion</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>20%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Tasks delivered by deadline vs total assigned</td><td style="padding:10px;border:1px solid #E2E8F0;">Jira/PM tool</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Bug-Free Delivery</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Percentage of tasks with zero QA issues</td><td style="padding:10px;border:1px solid #E2E8F0;">QA logs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">PageSpeed Scores</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lighthouse scores on delivered pages (target: 90+)</td><td style="padding:10px;border:1px solid #E2E8F0;">PageSpeed Insights</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Revision Count</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Average revisions per task (target: &lt;2)</td><td style="padding:10px;border:1px solid #E2E8F0;">PM tracking</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Code Quality (Lead Review)</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Clean, maintainable, well-documented code</td><td style="padding:10px;border:1px solid #E2E8F0;">Lead's assessment</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Daily Progress Updates</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Consistency of EOD reports and standup participation</td><td style="padding:10px;border:1px solid #E2E8F0;">Discord/Slack logs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Response to Messages</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Average response time during work hours (target: &lt;15 min)</td><td style="padding:10px;border:1px solid #E2E8F0;">Chat timestamps</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Proactive Problem-Solving</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Flagging issues before they escalate, suggesting solutions</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager observation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Collaboration & Helping Others</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Assisting teammates, knowledge sharing</td><td style="padding:10px;border:1px solid #E2E8F0;">Peer feedback</td></tr>
<tr style="background:#EFF6FF;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>TOTAL</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>100%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;" colspan="2"></td></tr>
</tbody>
</table>

<h4>Designer Metrics</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Metric</th>
<th style="padding:12px;text-align:left;">Weight</th>
<th style="padding:12px;text-align:left;">What It Measures</th>
<th style="padding:12px;text-align:left;">Data Source</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">On-Time Mockup Delivery</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>20%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Mockups delivered by deadline</td><td style="padding:10px;border:1px solid #E2E8F0;">PM tool</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">First Concept Approval Rate</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>20%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">% of designs approved on first submission</td><td style="padding:10px;border:1px solid #E2E8F0;">Client feedback</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Revision Count</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Average revisions per design (target: &lt;3)</td><td style="padding:10px;border:1px solid #E2E8F0;">PM tracking</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Design Quality (Lead Review)</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Visual consistency, brand alignment, creativity</td><td style="padding:10px;border:1px solid #E2E8F0;">Lead's assessment</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Image Optimization</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Properly compressed, web-ready assets</td><td style="padding:10px;border:1px solid #E2E8F0;">Technical review</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Daily Progress Updates</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">EOD reports, standup participation</td><td style="padding:10px;border:1px solid #E2E8F0;">Discord/Slack logs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Collaboration with Developers</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Dev-ready handoffs, responsive to implementation questions</td><td style="padding:10px;border:1px solid #E2E8F0;">Dev feedback</td></tr>
<tr style="background:#EFF6FF;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>TOTAL</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>100%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;" colspan="2"></td></tr>
</tbody>
</table>

<h4>Project Manager Metrics</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Metric</th>
<th style="padding:12px;text-align:left;">Weight</th>
<th style="padding:12px;text-align:left;">What It Measures</th>
<th style="padding:12px;text-align:left;">Data Source</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">On-Time Project Delivery</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>25%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Projects delivered within agreed timelines</td><td style="padding:10px;border:1px solid #E2E8F0;">PM tool + client records</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client Satisfaction Scores</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>20%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Average client rating (target: 4.5+)</td><td style="padding:10px;border:1px solid #E2E8F0;">Feedback forms, reviews</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Team Utilization (75-85%)</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Team members billable hours vs capacity</td><td style="padding:10px;border:1px solid #E2E8F0;">Resource planner</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Escalation Prevention</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>15%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Issues resolved before escalation to leadership</td><td style="padding:10px;border:1px solid #E2E8F0;">Escalation log</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Daily Communication Consistency</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Daily updates to clients and team</td><td style="padding:10px;border:1px solid #E2E8F0;">Communication logs</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Process Improvement Contributions</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>10%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">SOPs updated, workflows optimized</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager observation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Team Development</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Mentoring, training, team growth</td><td style="padding:10px;border:1px solid #E2E8F0;">Peer/team feedback</td></tr>
<tr style="background:#EFF6FF;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>TOTAL</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>100%</strong></td><td style="padding:10px;border:1px solid #E2E8F0;" colspan="2"></td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ HR's Role in Metrics:</strong><br>
You don't calculate these scores yourself — managers do. But you ARE responsible for:<br>
1. Ensuring managers submit reviews on time (by Day 5 of each month)<br>
2. Verifying that scores match the data (no inflation or deflation)<br>
3. Identifying trends (someone dropping month-over-month is a red flag)<br>
4. Flagging discrepancies to the Delhi Team<br>
5. Processing the resulting bonuses, PIPs, or promotions
</div>
</div>

<div class="content-section">
<h3>📅 Review Process Timeline — 10-Day Cycle</h3>
<p>Every month, the review process follows this exact timeline. As HR, you own this calendar and must enforce every deadline.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Day</th>
<th style="padding:12px;text-align:left;">Activity</th>
<th style="padding:12px;text-align:left;">Owner</th>
<th style="padding:12px;text-align:left;">Output</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Days 1-3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Data collection from tools (Jira, Slack, client feedback, QA logs, Git commits)</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Team Leads</td><td style="padding:10px;border:1px solid #E2E8F0;">Raw performance data spreadsheet</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Days 4-5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Review forms filled by managers using data + observations</td><td style="padding:10px;border:1px solid #E2E8F0;">Managers</td><td style="padding:10px;border:1px solid #E2E8F0;">Completed review forms with scores</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Days 6-7</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1:1 meetings with each team member (review discussion, goal setting)</td><td style="padding:10px;border:1px solid #E2E8F0;">Managers + Employees</td><td style="padding:10px;border:1px solid #E2E8F0;">Signed review acknowledgment</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 8</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Delhi Team reviews all scores for calibration</td><td style="padding:10px;border:1px solid #E2E8F0;">Delhi Team</td><td style="padding:10px;border:1px solid #E2E8F0;">Approved final scores</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 9</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR processes bonuses, penalties, PIP initiations</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Bonus/penalty calculations sent to Finance</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Day 10</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Results communicated to team (individual, not public)</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Managers</td><td style="padding:10px;border:1px solid #E2E8F0;">Team informed, cycle complete</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Common Pitfall:</strong> Managers often try to skip the 1:1 meetings (Days 6-7) because they're "too busy." Never allow this. The 1:1 is where the employee hears their score, understands why, and gets actionable next-month goals. Without it, the review is just a number in a spreadsheet — useless for improvement. If a manager tries to skip, escalate to their manager or the Delhi Team.
</div>
</div>

<div class="content-section">
<h3>💬 The SBI Feedback Framework</h3>
<p>SBI stands for <strong>Situation, Behavior, Impact</strong>. This is the ONLY framework you should use for delivering performance feedback — both positive and negative. It keeps feedback specific, factual, and non-personal.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Component</th>
<th style="padding:12px;text-align:left;">What You Say</th>
<th style="padding:12px;text-align:left;">Purpose</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Situation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">When and where it happened (specific date, meeting, project)</td><td style="padding:10px;border:1px solid #E2E8F0;">Sets context — the employee knows exactly what you're referring to</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Behavior</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">What they DID (observable action, not personality judgment)</td><td style="padding:10px;border:1px solid #E2E8F0;">Keeps it factual — "You did X" not "You are Y"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Impact</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">What happened as a result (on team, client, project, company)</td><td style="padding:10px;border:1px solid #E2E8F0;">Shows consequences — makes it real, not abstract</td></tr>
</tbody>
</table>

<h4>5 DH Scenarios Using SBI</h4>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 1: Developer Delivered Late (Corrective)</strong><br><br>
<strong>S:</strong> "Last Tuesday, the homepage redesign for Client XYZ was due by 5 PM."<br>
<strong>B:</strong> "You delivered the code at 11 PM — 6 hours late — without informing the PM or the client about the delay beforehand."<br>
<strong>I:</strong> "The client had scheduled a review meeting for 6 PM that had to be cancelled. They emailed expressing frustration, and it took the PM 2 days to rebuild trust. Our reliability score with this client dropped."<br><br>
<strong>Next Steps:</strong> "Going forward, if you see a deadline at risk, flag it to the PM at least 4 hours before — never after. Let's set up a check-in system."
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 2: Designer Created Brilliant Mockup (Positive)</strong><br><br>
<strong>S:</strong> "During the Brand ABC project last week..."<br>
<strong>B:</strong> "You created three homepage concepts instead of the required one, each with a different creative direction, and presented them with annotations explaining your design rationale."<br>
<strong>I:</strong> "The client was so impressed they approved the design in the first meeting — zero revisions. They also mentioned it in their Fiverr review, giving us a 5-star rating. This saved the team approximately 10 hours of revision work."<br><br>
<strong>Recognition:</strong> Share this in the team meeting. This is exactly the kind of proactive work that earns Exceptional ratings.
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 3: PM Went Dark on Client (Corrective)</strong><br><br>
<strong>S:</strong> "Between Monday and Wednesday this week, Client DEF sent three messages on Slack asking for a project update."<br>
<strong>B:</strong> "You didn't respond to any of those messages for 48 hours. No acknowledgment, no 'I'll get back to you,' nothing."<br>
<strong>I:</strong> "The client escalated to the Delhi Team directly, expressing concern that their project was being neglected. It took a 30-minute call from leadership to reassure them. This kind of escalation damages our brand and wastes leadership's time."<br><br>
<strong>Next Steps:</strong> "Set a rule: never let a client message go unanswered for more than 2 hours. Even a quick 'Got it, will update you by EOD' is enough."
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 4: Sales Rep Gave Unauthorized Discount (Formal Warning)</strong><br><br>
<strong>S:</strong> "During the deal with Prospect GHI last Friday..."<br>
<strong>B:</strong> "You offered a 30% discount on our standard package without consulting the team lead or following the pricing approval process. Our maximum discount authority for your role is 10%."<br>
<strong>I:</strong> "We closed the deal at $700 instead of $1,000. That's $300 in lost revenue per month — $3,600 annually. It also sets a precedent: the client now expects discounts on future work. This is a formal pricing policy violation."<br><br>
<strong>Action:</strong> Written warning issued. Future pricing deviations beyond 10% without approval will escalate to PIP.
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 5: CS Team Member Turned 3-Star into 5-Star (Recognition)</strong><br><br>
<strong>S:</strong> "Last month, Client JKL left a 3-star review on Fiverr citing communication delays."<br>
<strong>B:</strong> "You personally reached out to the client within 2 hours of the review, acknowledged their frustration, offered a free speed optimization as goodwill, and followed up daily for a week until all their concerns were addressed."<br>
<strong>I:</strong> "The client updated their review to 5 stars and added a comment praising our responsiveness. They've since placed 2 more orders. You turned a potential churn into a loyal repeat customer."<br><br>
<strong>Recognition:</strong> This is the definition of Exceptional performance. Nominate for team spotlight.
</div>
</div>

<div class="content-section">
<h3>📋 PIP — Performance Improvement Plan (Complete Guide)</h3>
<p>A PIP is the last structured opportunity before termination. It's serious, formal, and must be executed precisely.</p>

<h4>When to Issue a PIP</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Prerequisites (ALL must be met before PIP):</strong>
<ol>
<li>Verbal warning has been given and documented (minimum 2 weeks prior)</li>
<li>Written warning has been given and signed (minimum 2 weeks after verbal)</li>
<li>Performance has not improved despite both warnings</li>
<li>Minimum 2 months of documented underperformance</li>
<li>Manager and HR agree PIP is warranted</li>
</ol>
<strong>Never jump straight to PIP.</strong> The progressive discipline path must be followed unless the offense is severe enough for immediate action (theft, harassment, etc.).
</div>

<h4>PIP Duration & Structure</h4>
<p><strong>Duration: 30 days (non-negotiable)</strong></p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">PIP Section</th>
<th style="padding:12px;text-align:left;">Details Required</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Employee Information</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Name, Role, Department, Manager, Start Date, PIP Start Date</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Current Performance Data</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Last 2 months' scores, specific metrics that are failing, comparison to expected targets</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Expected Performance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Clear numeric targets (e.g., "On-time delivery must reach 85% from current 60%")</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Specific SMART Goals</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">3-5 measurable goals with deadlines within the 30-day period</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Support Provided</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Training, mentorship, tool access, reduced workload if needed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Review Checkpoints</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Weekly check-ins (Days 7, 14, 21, 30) with documented progress</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Consequences</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Clear statement: failure to meet goals = termination</td></tr>
</tbody>
</table>

<h4>Sample Filled PIP — Developer Scoring 4.2</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Employee:</strong> Rohit Sharma | <strong>Role:</strong> Shopify Developer | <strong>Score:</strong> 4.2 (Below Expectations)<br>
<strong>PIP Duration:</strong> March 1 – March 30, 2026<br><br>

<strong>Current Gaps:</strong><br>
- On-Time Task Completion: 55% (target: 85%)<br>
- Bug-Free Delivery: 40% (target: 75%)<br>
- Daily Progress Updates: 3/5 days average (target: 5/5)<br>
- Response Time: 45 min average (target: &lt;15 min)<br><br>

<strong>SMART Goals for 30 Days:</strong><br>
1. Complete 90% of assigned tasks on time for 4 consecutive weeks<br>
2. Reduce bug rate to below 25% (max 1 QA return per 4 tasks)<br>
3. Submit EOD report every working day by 6:15 PM — zero misses<br>
4. Respond to all messages within 15 minutes during work hours<br>
5. Complete 2 Shopify Liquid tutorial modules (provided by lead)<br><br>

<strong>Support:</strong> Daily 15-min check-in with team lead, access to Shopify dev course, reduced task load (8/week vs usual 12)<br><br>

<strong>Checkpoints:</strong> Weekly Friday reviews with manager + HR present<br>
<strong>Consequence:</strong> If goals are not met by Day 30, employment will be terminated.
</div>

<h4>Weekly Check-In Template During PIP</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Check-In Item</th>
<th style="padding:12px;text-align:left;">Week 1</th>
<th style="padding:12px;text-align:left;">Week 2</th>
<th style="padding:12px;text-align:left;">Week 3</th>
<th style="padding:12px;text-align:left;">Week 4</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">On-time delivery %</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Bug-free rate %</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td><td style="padding:10px;border:1px solid #E2E8F0;">____%</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">EOD reports submitted</td><td style="padding:10px;border:1px solid #E2E8F0;">__/5</td><td style="padding:10px;border:1px solid #E2E8F0;">__/5</td><td style="padding:10px;border:1px solid #E2E8F0;">__/5</td><td style="padding:10px;border:1px solid #E2E8F0;">__/5</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Avg response time</td><td style="padding:10px;border:1px solid #E2E8F0;">____min</td><td style="padding:10px;border:1px solid #E2E8F0;">____min</td><td style="padding:10px;border:1px solid #E2E8F0;">____min</td><td style="padding:10px;border:1px solid #E2E8F0;">____min</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Training modules done</td><td style="padding:10px;border:1px solid #E2E8F0;">__/2</td><td style="padding:10px;border:1px solid #E2E8F0;">__/2</td><td style="padding:10px;border:1px solid #E2E8F0;">__/2</td><td style="padding:10px;border:1px solid #E2E8F0;">__/2</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Manager notes</td><td style="padding:10px;border:1px solid #E2E8F0;">________</td><td style="padding:10px;border:1px solid #E2E8F0;">________</td><td style="padding:10px;border:1px solid #E2E8F0;">________</td><td style="padding:10px;border:1px solid #E2E8F0;">________</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">On track? (Y/N)</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td></tr>
</tbody>
</table>

<h4>PIP Outcome Options</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Outcome</th>
<th style="padding:12px;text-align:left;">When</th>
<th style="padding:12px;text-align:left;">Action</th>
</tr></thead>
<tbody>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Pass</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">All goals met by Day 30</td><td style="padding:10px;border:1px solid #E2E8F0;">Continue employment, monitor for 60 more days, PIP removed from active file</td></tr>
<tr style="background:#FEF3C7;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Extend</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Significant improvement but not all goals met</td><td style="padding:10px;border:1px solid #E2E8F0;">Extend PIP by 15 days (one-time only), revised goals</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Terminate</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Goals not met, no meaningful improvement</td><td style="padding:10px;border:1px solid #E2E8F0;">Termination processed, F&F calculated, exit formalities</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>⚖️ Progressive Discipline — The 5-Step Path</h3>
<p>DH follows a strict progressive discipline process. You cannot skip steps except in cases of gross misconduct (theft, harassment, violence, fraud).</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Step</th>
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">Documentation</th>
<th style="padding:12px;text-align:left;">Who Delivers</th>
<th style="padding:12px;text-align:left;">Signed?</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Verbal Warning</td><td style="padding:10px;border:1px solid #E2E8F0;">Documented in employee file (date, issue, conversation summary)</td><td style="padding:10px;border:1px solid #E2E8F0;">Direct Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">No (but documented)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Written Warning</td><td style="padding:10px;border:1px solid #E2E8F0;">Formal letter describing the issue, expected improvement, timeline</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Yes (employee signs)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Final Written Warning</td><td style="padding:10px;border:1px solid #E2E8F0;">Formal letter with explicit "next step is PIP/termination" language</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Yes (employee + HR witness)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PIP (30 days)</td><td style="padding:10px;border:1px solid #E2E8F0;">Full PIP document with SMART goals, weekly checkpoints</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Manager + Delhi Team</td><td style="padding:10px;border:1px solid #E2E8F0;">Yes (all parties)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Termination</td><td style="padding:10px;border:1px solid #E2E8F0;">Termination letter, F&F calculation, exit formalities</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Delhi Team approval</td><td style="padding:10px;border:1px solid #E2E8F0;">Yes (acknowledgment)</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ If Employee Refuses to Sign:</strong><br>
Note "Employee declined to sign" on the document. Have an HR witness present and sign as witness. The warning/PIP is still valid and enforceable. Do NOT let a refusal to sign delay the process.
</div>
</div>

<div class="content-section">
<h3>🏖️ Leave Policies (Complete)</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Leave Type</th>
<th style="padding:12px;text-align:left;">Annual Quota</th>
<th style="padding:12px;text-align:left;">Rules</th>
<th style="padding:12px;text-align:left;">Special Conditions</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Casual Leave</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">12 days/year</td><td style="padding:10px;border:1px solid #E2E8F0;">Maximum 2 days per month</td><td style="padding:10px;border:1px solid #E2E8F0;">More than 2/month requires Delhi Team approval + balance must be available</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Sick Leave</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">6 days/year</td><td style="padding:10px;border:1px solid #E2E8F0;">Can be used as needed</td><td style="padding:10px;border:1px solid #E2E8F0;">Medical certificate required for 3+ consecutive days</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Earned Leave</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1 day/month (after 1 year)</td><td style="padding:10px;border:1px solid #E2E8F0;">Accrues monthly after 1 year completion</td><td style="padding:10px;border:1px solid #E2E8F0;">Not available during probation or first year</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>National Holidays</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">~10 days/year</td><td style="padding:10px;border:1px solid #E2E8F0;">As per official holiday calendar</td><td style="padding:10px;border:1px solid #E2E8F0;">Announced at start of year</td></tr>
</tbody>
</table>

<h4>Leave Request Rules</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Key Rules:</strong>
<ul>
<li><strong>Planned leave:</strong> Minimum 7 days advance notice</li>
<li><strong>Approval:</strong> PM checks team coverage before approving — if critical project phase, leave may be denied</li>
<li><strong>Probation period:</strong> Leave is lenient but communication is mandatory — inform PM before taking any leave</li>
<li><strong>Unapproved absence:</strong> 1 day salary deducted + written warning</li>
<li><strong>Leave balance:</strong> Casual leave does not carry forward to next year. Earned leave can be encashed at exit.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⏰ Attendance & Punctuality Policy</h3>

<p><strong>Standard working hours:</strong> 9:00 AM – 6:00 PM (or role-specific shifts as defined in offer letter)</p>

<h4>Late Arrival Penalty Progression</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Occurrence (per month)</th>
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">Financial Impact</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1st late</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Verbal warning from manager</td><td style="padding:10px;border:1px solid #E2E8F0;">None</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2nd late</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Written notice</td><td style="padding:10px;border:1px solid #E2E8F0;">₹200 penalty</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3rd late</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Formal warning</td><td style="padding:10px;border:1px solid #E2E8F0;">₹500 penalty</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4th+ late</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Escalation to HR file</td><td style="padding:10px;border:1px solid #E2E8F0;">Full day's pay deducted per occurrence</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Unplanned Leave Without Notice:</strong><br>
If an employee doesn't show up and doesn't inform anyone: 1 full day's salary is deducted + written warning. The only exception is a documented medical emergency (hospital visit, accident) — but even then, someone (family member, friend) must inform the PM within 2 hours of shift start.
</div>
</div>

<div class="content-section">
<h3>🏠 Work from Home Policy</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Policy Item</th>
<th style="padding:12px;text-align:left;">Requirement</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Maximum WFH days</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2 days per week</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Advance notice</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>24 hours</strong> before planned WFH day</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Approval authority</td><td style="padding:10px;border:1px solid #E2E8F0;">PM (based on workload and scheduled meetings)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Extended WFH (beyond 2 days/week)</td><td style="padding:10px;border:1px solid #E2E8F0;">Requires <strong>Delhi Team approval</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Availability</td><td style="padding:10px;border:1px solid #E2E8F0;">Must be reachable on ALL communication channels during work hours</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Daily updates</td><td style="padding:10px;border:1px solid #E2E8F0;">Mandatory — even more strictly enforced on WFH days</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Camera policy</td><td style="padding:10px;border:1px solid #E2E8F0;">Camera ON for all team meetings during WFH</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ WFH Abuse:</strong><br>
If an employee is "online" but unresponsive repeatedly during WFH days, the progression is:<br>
1st occurrence: Verbal warning<br>
2nd occurrence: Written warning + WFH privilege suspended for 2 weeks<br>
3rd occurrence: WFH privilege revoked permanently + added to performance file
</div>
</div>

<div class="content-section">
<h3>🤝 Grievance Handling Procedure</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Step</th>
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">Timeline</th>
<th style="padding:12px;text-align:left;">Owner</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Step 1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Employee raises concern with direct manager</td><td style="padding:10px;border:1px solid #E2E8F0;">Immediate</td><td style="padding:10px;border:1px solid #E2E8F0;">Employee + Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Step 2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">If unresolved, escalate to HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 3 days of Step 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Employee + HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Step 3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR investigates (interviews, documentation review, evidence gathering)</td><td style="padding:10px;border:1px solid #E2E8F0;">5 business days</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Step 4</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">If unresolved, escalate to Delhi Team</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 2 days of Step 3</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + Delhi Team</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Step 5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Final decision communicated (non-appealable for policy matters)</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 3 days of Step 4</td><td style="padding:10px;border:1px solid #E2E8F0;">Delhi Team</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ HR's Role in Grievance Handling:</strong><br>
- Be neutral — you're not on anyone's "side"<br>
- Document everything from the first conversation<br>
- Never promise outcomes ("I'll make sure you get what you want")<br>
- Maintain strict confidentiality — do not discuss cases with uninvolved parties<br>
- If the grievance is against YOU, recuse yourself and escalate to Delhi Team
</div>
</div>

<div class="content-section">
<h3>🛡️ Anti-Harassment Policy</h3>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Zero Tolerance — No Exceptions</strong><br><br>

<strong>Definition of Harassment:</strong>
<ul>
<li><strong>Verbal:</strong> Offensive comments, slurs, threats, intimidation, yelling</li>
<li><strong>Physical:</strong> Unwanted touching, blocking movement, physical intimidation</li>
<li><strong>Digital:</strong> Offensive messages on Slack/Discord/WhatsApp, cyberbullying, sharing inappropriate content</li>
<li><strong>Sexual:</strong> Unwanted advances, inappropriate comments about appearance, quid pro quo situations</li>
</ul>
</div>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Item</th>
<th style="padding:12px;text-align:left;">Details</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Reporting Mechanism</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Direct to HR (in person, email, or call) OR anonymous submission (written note to HR mailbox)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Investigation Timeline</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">7 business days from report to conclusion</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Investigation Steps</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Interview complainant → interview accused → interview witnesses → review evidence → decision</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Interim Measures</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Separate the parties during investigation (different shifts, WFH, project reassignment)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Consequences</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Warning to immediate termination — depends on severity, pattern, and evidence</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Retaliation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Retaliation against a complainant is itself a terminable offense</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎭 Conflict Resolution — 5 Role-Play Scenarios</h3>
<p>As HR, you'll deal with conflicts regularly. Here are 5 common scenarios at DH and how to handle them:</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 1: Two Developers Disagree on Code Approach</strong><br><br>
<strong>Situation:</strong> Dev A wants to use a custom Liquid section. Dev B insists on using an app. Both are getting heated in Slack.<br><br>
<strong>Wrong approach:</strong> "Just figure it out yourselves" or picking sides without technical understanding.<br><br>
<strong>Right approach:</strong><br>
1. Private DM to both: "I noticed the discussion is getting intense. Let's resolve this constructively."<br>
2. Schedule a 15-min call with both devs + the tech lead<br>
3. Let the tech lead make the final technical decision based on merits (performance, maintenance, cost)<br>
4. Once decided, both devs must commit to the chosen approach — no passive resistance<br>
5. Follow up in 2 days: "How's the implementation going?"<br><br>
<strong>HR takeaway:</strong> You don't resolve technical disputes — the tech lead does. Your job is to ensure the conflict doesn't damage the working relationship.
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 2: Designer and Developer Clash on Implementation Feasibility</strong><br><br>
<strong>Situation:</strong> Designer created an animation-heavy homepage. Developer says "This is impossible to build in the timeline." Designer says "You just don't want to put in the effort."<br><br>
<strong>Right approach:</strong><br>
1. Separate conversation with each party first (understand their perspective without the other present)<br>
2. Joint meeting with PM present: focus on the project timeline and client requirements, not personal attacks<br>
3. Find the compromise: "Which animations are must-haves for the client, and which are nice-to-haves?"<br>
4. Document the agreed scope and timeline adjustment<br>
5. Address the personal comment: privately tell the designer that questioning someone's work ethic is not acceptable — stick to project facts<br><br>
<strong>HR takeaway:</strong> Design vs dev conflicts are usually about timeline and scope, not personality. Redirect the conversation to deliverables.
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 3: PM and Client Have Miscommunication About Scope</strong><br><br>
<strong>Situation:</strong> Client says "I told you I wanted 10 pages." PM says "The agreement says 5 pages." Client is threatening to leave a bad review.<br><br>
<strong>Right approach:</strong><br>
1. Review all written communication (emails, Slack messages, project briefs) to establish facts<br>
2. If PM is right: support the PM, provide communication template for client, involve team lead if needed<br>
3. If client is right: coach the PM on better documentation practices, discuss with leadership about delivering extra pages as goodwill<br>
4. Either way: implement mandatory "scope confirmation email" after every client call going forward<br><br>
<strong>HR takeaway:</strong> Always check the paper trail before taking sides. Use conflicts as opportunities to improve processes.
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 4: Team Member Feels Workload Is Unfair</strong><br><br>
<strong>Situation:</strong> Dev C says "I'm doing 15 tasks a week while Dev D does 8. It's not fair."<br><br>
<strong>Right approach:</strong><br>
1. Pull actual task data from PM tool — verify the claim with numbers<br>
2. If true: discuss with the PM about rebalancing. Ask why Dev D has fewer tasks (are they on a different project? Junior? On PIP?)<br>
3. If not true: show Dev C the data. Maybe Dev D's tasks are more complex but fewer in number<br>
4. Address the emotional component: "I hear you feeling overwhelmed. Let's see if the workload distribution makes sense."<br>
5. Never reveal another employee's performance details or PIP status<br><br>
<strong>HR takeaway:</strong> Fairness complaints need data first, empathy second. Never dismiss the feeling, but verify the facts.
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Scenario 5: Senior Team Member Bullying Junior</strong><br><br>
<strong>Situation:</strong> A junior developer reports that a senior dev publicly criticizes their code in team channels, makes sarcastic comments, and refuses to help when asked.<br><br>
<strong>Right approach:</strong><br>
1. Take this seriously immediately — do NOT dismiss as "senior being tough" or "they need to toughen up"<br>
2. Document with screenshots/examples from Slack/Discord<br>
3. Private conversation with senior dev using SBI: "In yesterday's code review, you wrote 'this is the worst code I've ever seen.' This made the junior feel humiliated and afraid to ask for help."<br>
4. Set clear expectations: "Code reviews are for improvement, not ridicule. Constructive feedback only."<br>
5. If behavior continues: written warning, then PIP. Seniority does not protect anyone from anti-harassment policy.<br>
6. Check in with junior regularly for 30 days<br><br>
<strong>HR takeaway:</strong> Power dynamics make this a form of workplace bullying. Protect the junior. Hold the senior accountable regardless of their value to the company.
</div>
</div>

<div class="content-section">
<h3>📅 Holiday Calendar 2026-27</h3>
<p>DH observes approximately <strong>10 national holidays</strong> per year. The holiday list is announced at the beginning of each financial year.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Holiday</th>
<th style="padding:12px;text-align:left;">Approximate Date</th>
<th style="padding:12px;text-align:left;">Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Republic Day</td><td style="padding:10px;border:1px solid #E2E8F0;">January 26</td><td style="padding:10px;border:1px solid #E2E8F0;">National Holiday</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Holi</td><td style="padding:10px;border:1px solid #E2E8F0;">March (date varies)</td><td style="padding:10px;border:1px solid #E2E8F0;">Festival of Colors</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Independence Day</td><td style="padding:10px;border:1px solid #E2E8F0;">August 15</td><td style="padding:10px;border:1px solid #E2E8F0;">National Holiday</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Gandhi Jayanti</td><td style="padding:10px;border:1px solid #E2E8F0;">October 2</td><td style="padding:10px;border:1px solid #E2E8F0;">National Holiday</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Diwali</td><td style="padding:10px;border:1px solid #E2E8F0;">October/November (date varies)</td><td style="padding:10px;border:1px solid #E2E8F0;">Festival of Lights — typically 2 days off</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Christmas</td><td style="padding:10px;border:1px solid #E2E8F0;">December 25</td><td style="padding:10px;border:1px solid #E2E8F0;">National Holiday</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">New Year</td><td style="padding:10px;border:1px solid #E2E8F0;">January 1</td><td style="padding:10px;border:1px solid #E2E8F0;">National Holiday</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Critical Leave Policy Notes:</strong>
<ul>
<li><strong>CLs and SLs do NOT carry forward</strong> — they lapse at year-end. Use them or lose them. HR must remind employees quarterly about remaining balances.</li>
<li><strong>No overtime pay:</strong> DH is output-based, not hours-based. If an employee works extra to meet a deadline, that's part of the role expectation. Compensatory offs may be given for extraordinary situations (weekend work, all-night deployments) at manager discretion.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⏰ Working Hours & Special Schedules</h3>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">Standard Schedule:</strong>
<ul style="color: #1E293B;">
<li><strong>Working hours:</strong> 9:00 AM – 6:00 PM (standard)</li>
<li><strong>Sunday off</strong> — this is the weekly rest day for all teams</li>
<li><strong>Lunch break:</strong> 1:00 PM – 2:00 PM</li>
</ul>

<strong style="color: #1E293B;">Fiverr/Sales Team — Flexible Hours:</strong>
<ul style="color: #1E293B;">
<li>Flexible window: <strong>9 AM – 9 PM</strong> (must complete 9 working hours within this window)</li>
<li>This flexibility exists because Fiverr and sales activities depend on international client time zones</li>
<li>The flexibility is not a license to start at noon — communicate your schedule to your PM daily</li>
</ul>

<strong style="color: #1E293B;">Delhi Team — Night Shift:</strong>
<ul style="color: #1E293B;">
<li>The Delhi team operates night shifts to serve foreign clients in US/UK/Australian time zones</li>
<li>Night shift schedules are set by Delhi leadership — not negotiable at the Jaipur level</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 Additional Performance & Policy Details</h3>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">💰 Stipend-Performance Connection (Probation Period):</strong><br>
<span style="color: #1E293B;">During the probation period, stipend deductions are possible for consistent underperformance. If a probationer scores below 4.0 for 2 consecutive months and shows no improvement despite coaching, the stipend may be reduced as a final warning before termination. This must be communicated clearly at the time of offer acceptance.</span>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">📞 Weekly Performance Calls:</strong><br>
<span style="color: #1E293B;">Mandatory for all team leads. These weekly calls with HR and management review:</span>
<ul style="color: #1E293B;">
<li><strong>Attendance %</strong> — who was present, late, or absent</li>
<li><strong>Tasks completed</strong> — on-time delivery rates per team member</li>
<li><strong>Quality scores</strong> — bug rates, revision rates, client satisfaction</li>
<li><strong>Client feedback</strong> — any complaints, compliments, or escalations</li>
</ul>
<span style="color: #1E293B;">These calls ensure problems are caught weekly, not monthly. Team leads who consistently miss these calls are flagged in their own performance reviews.</span>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">🖥️ Screen/Time Tracking Policy:</strong><br>
<span style="color: #1E293B;">DH does NOT micro-manage with constant screen monitoring or keystroke tracking. However, if an employee's performance dips significantly or there are concerns about productivity during WFH, screen/time tracking tools may be temporarily enabled as part of a performance improvement process. This is always communicated to the employee — never done secretly.</span>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">📹 Camera ON Policy — Mandatory for WFH Meetings:</strong><br>
<span style="color: #1E293B;">All team meetings during WFH require camera ON. No exceptions unless pre-approved by PM (e.g., internet bandwidth issues). This ensures engagement, accountability, and prevents the "multi-tasking during meetings" problem. Repeated camera-off violations are treated as WFH abuse.</span>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li>CLs and SLs do NOT carry forward — lapse at year-end, so remind employees quarterly</li>
        <li>Camera ON is mandatory for all WFH meetings — no exceptions without PM pre-approval</li>
        <li>Fiverr/Sales teams have flexible hours (9 AM - 9 PM window) — communicate schedule daily</li>
        <li>Sunday is the universal off day; Lunch is 1-2 PM for all teams</li>
        <li>No overtime pay — DH is output-based, not hours-based</li>
        <li>Weekly performance calls are mandatory for all team leads — attendance, tasks, quality, client feedback</li>
        <li>Screen tracking is not default but can be enabled if performance dips — always communicated transparently</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">Performance management is where HR earns its seat at the leadership table. When you enforce fair reviews, catch underperformance early, and ensure policies are followed consistently, you protect both the company's bottom line and every employee's right to a fair workplace. Your data-driven approach to performance is what keeps DH competitive.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Fair policies, consistently enforced, build the trust that great teams run on."</p>
    </div>
</div>
`;

const task5Quiz = [
    { q: "At DH, performance reviews are conducted during which time period?", o: ["Last week of each month, covering the current month's performance so far", "Quarterly, covering the past 3 months of performance data", "Annually, with a mid-year check-in for feedback only", "First week of each month, covering the previous month's performance"], c: 3 },
    { q: "An employee scores 8.5 on their monthly review. What bonus and promotion eligibility do they receive?", o: ["100% bonus + 25% extra incentive, immediately eligible for promotion", "100% bonus, but must wait 6 months minimum before promotion consideration", "100% bonus, eligible for promotion after 2 consecutive months at this level", "75% bonus, eligible for promotion after 4 consecutive months at this level"], c: 2 },
    { q: "What bonus percentage does an employee scoring 6.5 (Meets Expectations) receive?", o: ["75% bonus", "100% bonus", "50% bonus", "25% bonus"], c: 0 },
    { q: "In the Developer performance metrics, which metric carries the highest weighting?", o: ["Bug-Free Delivery at 20%", "On-Time Task Completion at 20%", "Code Quality (Lead Review) at 25%", "Proactive Problem-Solving at 15%"], c: 1 },
    { q: "What is the weighting for 'First Concept Approval Rate' in the Designer metrics?", o: ["20%", "10%", "15%", "25%"], c: 0 },
    { q: "In the PM metrics, what is the target range for Team Utilization?", o: ["60-70%", "70-80%", "85-95%", "75-85%"], c: 3 },
    { q: "On which days of the 10-day review cycle does the Delhi Team review all scores for calibration?", o: ["Days 1-3", "Days 4-5", "Day 8", "Day 10"], c: 2 },
    { q: "In the SBI feedback framework, the 'B' stands for:", o: ["Budget — the financial impact of the situation being discussed", "Behavior — the specific observable action the person took", "Benchmark — the standard the employee is being compared against", "Background — the context and history behind the feedback"], c: 1 },
    { q: "What is the standard PIP duration at DH?", o: ["14 days", "21 days", "60 days", "30 days"], c: 3 },
    { q: "What are all prerequisites that must be met BEFORE issuing a PIP?", o: ["Verbal warning + written warning + minimum 2 months documented underperformance", "Only a single written warning is required before escalating to PIP", "Manager recommendation only — no prior warnings needed if performance is below 4.0", "Three written warnings spaced 30 days apart"], c: 0 },
    { q: "What is the correct order of progressive discipline steps at DH?", o: ["Written warning → Verbal warning → PIP → Final warning → Termination", "Verbal warning → PIP → Written warning → Final warning → Termination", "Verbal warning → Written warning → Final written warning → PIP → Termination", "Written warning → Final warning → Verbal warning → PIP → Termination"], c: 2 },
    { q: "How many days of Casual Leave does a DH employee get per year, and what is the monthly maximum?", o: ["10 days/year, max 1 day/month", "12 days/year, max 2 days/month", "15 days/year, max 3 days/month", "18 days/year, no monthly limit"], c: 1 },
    { q: "What is the penalty for the 3rd late arrival in a single month?", o: ["₹500 penalty", "Verbal warning only", "₹200 penalty", "Full day's pay deducted"], c: 0 },
    { q: "What is the maximum number of WFH days allowed per week, and who approves them?", o: ["1 day/week, approved by HR", "3 days/week, approved by Delhi Team", "Unlimited, approved by direct manager", "2 days/week, approved by PM"], c: 3 },
    { q: "In the grievance handling procedure, how long does HR have to investigate once a grievance is escalated to them?", o: ["3 business days", "5 business days", "7 business days", "10 business days"], c: 2 }
];

const task6Content = `
<h2>📋 TASK 6: Offboarding, Remote Work & Exit Management</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">How a company handles departures says more about its culture than how it handles arrivals. A clean offboarding protects client relationships, company data, and DH's reputation. And with remote work becoming the norm, HR must master the policies that keep distributed teams productive, accountable, and connected.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The way you treat people on their way out determines the story they tell about you forever."</p>
</div>

<div class="content-section">
<h3>📜 Notice Periods</h3>
<p>Notice periods at DH are straightforward but strictly enforced. There are no exceptions to these timelines unless the Delhi Team explicitly approves.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Employee Status</th>
<th style="padding:12px;text-align:left;">Notice Period</th>
<th style="padding:12px;text-align:left;">Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Probation Period</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">7 days</td><td style="padding:10px;border:1px solid #E2E8F0;">Applies to both employee and employer</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Post-Confirmation (Full-Time)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">30 days</td><td style="padding:10px;border:1px solid #E2E8F0;">Must be served or bought out</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Non-Negotiable:</strong><br>
The notice period must be served or bought out (salary in lieu of notice). This is a Delhi Team decision — neither the employee nor the direct manager can waive it. Early release is only possible if knowledge transfer is complete AND Delhi Team approves.
</div>
</div>

<div class="content-section">
<h3>📝 Resignation Process — Step by Step</h3>
<p>When an employee decides to leave, this is the exact process that must be followed. Every step. In order. No shortcuts.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Step</th>
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">Timeline</th>
<th style="padding:12px;text-align:left;">Owner</th>
<th style="padding:12px;text-align:left;">Output</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Employee submits written resignation (email to manager + CC HR)</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 0</td><td style="padding:10px;border:1px solid #E2E8F0;">Employee</td><td style="padding:10px;border:1px solid #E2E8F0;">Resignation email on record</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Manager conducts initial discussion (understand reasons, retention attempt if warranted)</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 24 hours</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">Discussion notes, retention decision</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR schedules exit interview</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 3 business days</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Exit interview scheduled</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Notice period begins from acceptance date</td><td style="padding:10px;border:1px solid #E2E8F0;">Acceptance date → LWD</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Notice period calendar confirmed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Knowledge transfer plan created (mandatory minimum 7 days)</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 1-3 of notice</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + Employee</td><td style="padding:10px;border:1px solid #E2E8F0;">KT plan document</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>6</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Tasks reassigned and documented</td><td style="padding:10px;border:1px solid #E2E8F0;">During notice period</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td><td style="padding:10px;border:1px solid #E2E8F0;">Task reassignment log</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>7</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Last working day formalities (asset return, farewell)</td><td style="padding:10px;border:1px solid #E2E8F0;">LWD</td><td style="padding:10px;border:1px solid #E2E8F0;">HR + IT</td><td style="padding:10px;border:1px solid #E2E8F0;">Asset return checklist signed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>8</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Full & final settlement processed</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 45 days of LWD</td><td style="padding:10px;border:1px solid #E2E8F0;">Finance + HR</td><td style="padding:10px;border:1px solid #E2E8F0;">F&F settlement complete</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Retention Attempts — When to Try:</strong><br>
Not every resignation warrants a retention effort. Try to retain if:<br>
- The employee is a top performer (score 8.0+)<br>
- Their reason for leaving is addressable (salary, role, work-life balance)<br>
- Losing them would significantly impact a client relationship<br><br>
Do NOT try to retain if:<br>
- They've already accepted another offer<br>
- Their performance has been mediocre (score &lt; 7.0)<br>
- Their stated reasons are not addressable (relocation, career change)<br>
- They've been a cultural problem
</div>
</div>

<div class="content-section">
<h3>🎤 Exit Interview Template</h3>
<p>The exit interview is HR's most underutilized tool. Done right, it gives you data to improve retention, fix management issues, and strengthen company culture. Every departing employee gets one — no exceptions.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>15 Exit Interview Questions:</strong><br><br>
<strong>Understanding the Decision:</strong><br>
1. What prompted your decision to leave?<br>
2. Was there a specific event or moment that made you start looking?<br>
3. What could DH have done differently to keep you?<br><br>

<strong>Manager & Team Dynamics:</strong><br>
4. How would you describe your relationship with your manager?<br>
5. Did you feel your contributions were recognized adequately?<br>
6. How would you describe the team culture?<br><br>

<strong>Role & Growth:</strong><br>
7. Were you given adequate tools and resources to do your job?<br>
8. Were there career growth opportunities available to you?<br>
9. Did you feel your compensation was fair for your role and contributions?<br><br>

<strong>Company Experience:</strong><br>
10. How would you rate the onboarding experience when you joined?<br>
11. What was your best experience at DH?<br>
12. What was your worst experience at DH?<br><br>

<strong>Operations & Feedback:</strong><br>
13. How effective was the communication from leadership?<br>
14. Did you face any challenges with remote work or hybrid arrangements?<br>
15. Would you recommend DH to a friend as a place to work? Why or why not?<br><br>

<strong>Open-Ended:</strong><br>
16. If you could change one thing about DH, what would it be?<br>
17. Any final suggestions for improvement?
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Exit Interview Tips:</strong><br>
- Conduct it 2-3 days before LWD (not on the last day — too emotional)<br>
- Keep it conversational, not interrogative<br>
- Take notes but don't record without permission<br>
- Never argue with their answers — you're gathering data, not defending the company<br>
- Look for patterns: if 3 people in 6 months mention the same manager problem, that's a fire you need to address<br>
- Share anonymized themes (not individual responses) with leadership quarterly
</div>
</div>

<div class="content-section">
<h3>📦 Knowledge Transfer Plan</h3>
<p>The KT plan is mandatory. Minimum 7 days. No employee leaves without completing it.</p>

<h4>Knowledge Transfer Checklist</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">KT Item</th>
<th style="padding:12px;text-align:left;">Action Required</th>
<th style="padding:12px;text-align:left;">Completed?</th>
<th style="padding:12px;text-align:left;">Signed Off By</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Ongoing projects documented</td><td style="padding:10px;border:1px solid #E2E8F0;">List all active projects with current status, next steps, deadlines</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Video walkthroughs recorded</td><td style="padding:10px;border:1px solid #E2E8F0;">Loom/video for complex tasks, custom code, or non-obvious processes</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">SOPs updated</td><td style="padding:10px;border:1px solid #E2E8F0;">Any undocumented processes now documented in team SOPs</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client introductions</td><td style="padding:10px;border:1px solid #E2E8F0;">Replacement introduced to all client contacts via email/call</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">PM</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Passwords & access handed over</td><td style="padding:10px;border:1px solid #E2E8F0;">All login credentials, API keys, admin access documented and transferred</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">IT + Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Files organized and shared</td><td style="padding:10px;border:1px solid #E2E8F0;">All project files in shared drives, nothing on personal storage only</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Pending tasks listed</td><td style="padding:10px;border:1px solid #E2E8F0;">All incomplete tasks with deadlines and who will take over</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Handover meeting conducted</td><td style="padding:10px;border:1px solid #E2E8F0;">Final meeting with replacement to answer questions</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real Story — The Amit Incident:</strong><br>
When Amit left without proper knowledge transfer, we lost 2 weeks on his client projects. Three active Shopify stores had pending customizations that nobody else understood. The cost: 2 weeks of delays, 3 frustrated clients, and a PM who had to reverse-engineer Amit's code. Now we have a mandatory 7-day handover checklist — no exceptions. If KT is incomplete, the experience letter is withheld until all items are checked off.
</div>
</div>

<div class="content-section">
<h3>💰 Full & Final Settlement Calculation</h3>
<p>The F&F settlement is the final financial transaction between DH and the departing employee. It must be accurate, transparent, and processed within <strong>45 days of the last working day</strong>.</p>

<h4>F&F Components</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Component</th>
<th style="padding:12px;text-align:left;">Type</th>
<th style="padding:12px;text-align:left;">Details</th>
</tr></thead>
<tbody>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;">Remaining Salary</td><td style="padding:10px;border:1px solid #E2E8F0;">Addition</td><td style="padding:10px;border:1px solid #E2E8F0;">Pro-rated salary for days worked in final month</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;">Earned Leave Encashment</td><td style="padding:10px;border:1px solid #E2E8F0;">Addition</td><td style="padding:10px;border:1px solid #E2E8F0;">Unused earned leave paid at daily rate (basic salary / 30)</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;">Bonus Due</td><td style="padding:10px;border:1px solid #E2E8F0;">Addition</td><td style="padding:10px;border:1px solid #E2E8F0;">Any pending performance bonus from last review</td></tr>
<tr style="background:#D1FAE5;"><td style="padding:10px;border:1px solid #E2E8F0;">Reimbursements</td><td style="padding:10px;border:1px solid #E2E8F0;">Addition</td><td style="padding:10px;border:1px solid #E2E8F0;">Pending travel/expense reimbursements with receipts</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;">Advance Salary Recovery</td><td style="padding:10px;border:1px solid #E2E8F0;">Deduction</td><td style="padding:10px;border:1px solid #E2E8F0;">Any salary advance that hasn't been repaid</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;">Penalty Dues</td><td style="padding:10px;border:1px solid #E2E8F0;">Deduction</td><td style="padding:10px;border:1px solid #E2E8F0;">Outstanding late penalties, policy violation fines</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;">Notice Period Shortfall</td><td style="padding:10px;border:1px solid #E2E8F0;">Deduction</td><td style="padding:10px;border:1px solid #E2E8F0;">If notice not fully served: (30 - days served) x daily rate</td></tr>
</tbody>
</table>

<h4>Example F&F Calculation</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Employee: Priya Patel | Salary: ₹25,000/month | LWD: March 15 (mid-month) | Earned Leave Balance: 5 days</strong><br><br>

<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#334155;color:white;"><th style="padding:10px;text-align:left;">Item</th><th style="padding:10px;text-align:right;">Amount</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Salary (15 days worked in March): ₹25,000 x 15/30</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;color:#10B981;"><strong>+ ₹12,500</strong></td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Earned Leave Encashment: 5 days x (₹25,000/30)</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;color:#10B981;"><strong>+ ₹4,167</strong></td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Pending Feb bonus (scored 7.5 = 75%): 75% of ₹2,000</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;color:#10B981;"><strong>+ ₹1,500</strong></td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Travel reimbursement (with receipts)</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;color:#10B981;"><strong>+ ₹800</strong></td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Salary advance recovery (₹5,000 taken in Jan)</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;color:#EF4444;"><strong>- ₹5,000</strong></td></tr>
<tr><td style="padding:8px;border:1px solid #E2E8F0;">Late penalty dues (2 instances)</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;color:#EF4444;"><strong>- ₹700</strong></td></tr>
<tr style="background:#F1F5F9;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Net F&F Amount</strong></td><td style="padding:10px;border:1px solid #E2E8F0;text-align:right;"><strong>₹13,267</strong></td></tr>
</tbody>
</table>
</div>

<h4>Documentation Issued at Exit</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Document</th>
<th style="padding:12px;text-align:left;">When Issued</th>
<th style="padding:12px;text-align:left;">Timeline</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Experience Letter</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Standard for ALL employees completing their tenure</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 7 days of LWD</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Relieving Letter</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Confirms no dues, employment ended</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 7 days of LWD</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Recommendation Letter</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">TOP performers ONLY — requires management approval</td><td style="padding:10px;border:1px solid #E2E8F0;">Upon request + approval</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Salary Slips</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Last 3-6 months (upon request)</td><td style="padding:10px;border:1px solid #E2E8F0;">With F&F</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Poor Performance Exception:</strong><br>
Employees who were terminated for poor performance or left during/after a PIP must wait an additional 10 days before their experience certificate is generated. All assigned tasks must be fully complete and KT verified before any certificates are issued.
</div>
</div>

<div class="content-section">
<h3>🚨 Absconding Employee Protocol</h3>
<p>An employee is classified as "absconding" when they are AWOL (Absent Without Official Leave) for 3 or more consecutive days without any communication.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Step</th>
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">Timeline</th>
<th style="padding:12px;text-align:left;">Documentation</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>1</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Attempt contact: Call, WhatsApp, Email (3 attempts over 3 days)</td><td style="padding:10px;border:1px solid #E2E8F0;">Days 1-3</td><td style="padding:10px;border:1px solid #E2E8F0;">Log every attempt with timestamp</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Send formal written notice (email + registered letter to permanent address)</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 4</td><td style="padding:10px;border:1px solid #E2E8F0;">Copy of notice, postal receipt</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">If no response in 7 days from notice, terminate employment</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 11</td><td style="padding:10px;border:1px solid #E2E8F0;">Termination letter sent</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>4</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Block all system access immediately</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 11</td><td style="padding:10px;border:1px solid #E2E8F0;">Access revocation confirmation from IT</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>5</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Mark as "absconded" in records (affects future references)</td><td style="padding:10px;border:1px solid #E2E8F0;">Day 11</td><td style="padding:10px;border:1px solid #E2E8F0;">Updated employee file</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ F&F for Absconding Employees:</strong><br>
Full & final settlement is processed ONLY after the return of all company assets (laptop, ID card, documents). If assets are not returned within 30 days, their value is deducted from the F&F amount. No experience letter is issued. If a future employer calls for reference, HR can confirm dates of employment but will note "did not complete exit formalities."
</div>
</div>

<div class="content-section">
<h3>🔐 Asset Return Checklist</h3>
<p>Every departing employee must return ALL company assets on or before their last working day. HR owns this checklist.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Asset</th>
<th style="padding:12px;text-align:left;">Returned?</th>
<th style="padding:12px;text-align:left;">Condition</th>
<th style="padding:12px;text-align:left;">Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Laptop/Computer</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Including charger, accessories</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">ID Card / Access Badge</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Deactivate in system</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Company Phone (if provided)</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Factory reset before return</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Physical Documents/Files</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Client contracts, SOPs, etc.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Credit Cards / Petty Cash</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Final reconciliation required</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Keys / Access Cards</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Office, cabinets, storage</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Uniform (if applicable)</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">____</td><td style="padding:10px;border:1px solid #E2E8F0;">Laundered before return</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🖥️ Account Deactivation Checklist</h3>
<p>All accounts must be deactivated on the employee's last working day — EOD, not the next morning. This is a security requirement.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Account/Platform</th>
<th style="padding:12px;text-align:left;">Deactivated?</th>
<th style="padding:12px;text-align:left;">Owner</th>
<th style="padding:12px;text-align:left;">Priority</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Company Email</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/Admin</td><td style="padding:10px;border:1px solid #E2E8F0;color:#EF4444;"><strong>CRITICAL</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Slack Workspace</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/Admin</td><td style="padding:10px;border:1px solid #E2E8F0;color:#EF4444;"><strong>CRITICAL</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Discord Server</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/Admin</td><td style="padding:10px;border:1px solid #E2E8F0;color:#EF4444;"><strong>CRITICAL</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Jira / Project Management Tools</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">PM/IT</td><td style="padding:10px;border:1px solid #E2E8F0;color:#F59E0B;">HIGH</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">GitHub Organization</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Tech Lead</td><td style="padding:10px;border:1px solid #E2E8F0;color:#F59E0B;">HIGH</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Google Drive / Docs</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">IT/Admin</td><td style="padding:10px;border:1px solid #E2E8F0;color:#F59E0B;">HIGH</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Shopify Partner Access</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Tech Lead</td><td style="padding:10px;border:1px solid #E2E8F0;color:#EF4444;"><strong>CRITICAL</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client Communication Platforms</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">PM</td><td style="padding:10px;border:1px solid #E2E8F0;color:#EF4444;"><strong>CRITICAL</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">VPN / Remote Access</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">IT</td><td style="padding:10px;border:1px solid #E2E8F0;color:#EF4444;"><strong>CRITICAL</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">All Vendor/Third-Party Tool Accounts</td><td style="padding:10px;border:1px solid #E2E8F0;">☐</td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + IT</td><td style="padding:10px;border:1px solid #E2E8F0;color:#F59E0B;">HIGH</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Security Risk:</strong><br>
A former employee with active Shopify Partner access can see client store data, customer information, and even make changes. A former employee with GitHub access can access or delete code repositories. These are not theoretical risks — they have happened at agencies. Account deactivation is a SAME DAY requirement, not "whenever IT gets around to it."
</div>
</div>

<div class="content-section">
<h3>🌐 Remote Work Comprehensive Guide</h3>
<p>Remote work at DH is a privilege, not a right. When approved, these are the non-negotiable requirements.</p>

<h4>Equipment & Setup Requirements</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Requirement</th>
<th style="padding:12px;text-align:left;">Minimum Standard</th>
<th style="padding:12px;text-align:left;">Why It Matters</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Laptop/Computer</td><td style="padding:10px;border:1px solid #E2E8F0;">Own device with minimum specs for role</td><td style="padding:10px;border:1px solid #E2E8F0;">Must run all required tools without lag</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Internet Connection</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Minimum 50 Mbps</strong> (stable, not shared with 10 family members)</td><td style="padding:10px;border:1px solid #E2E8F0;">Video calls, screen sharing, file uploads</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Workspace</td><td style="padding:10px;border:1px solid #E2E8F0;">Quiet, dedicated space (not a cafe or shared living room)</td><td style="padding:10px;border:1px solid #E2E8F0;">Client calls require professional background</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Backup Internet</td><td style="padding:10px;border:1px solid #E2E8F0;">Mobile hotspot available</td><td style="padding:10px;border:1px solid #E2E8F0;">ISP outages cannot be a full-day excuse</td></tr>
</tbody>
</table>

<h4>Communication Expectations</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Non-Negotiable Communication Rules During WFH:</strong>
<ul>
<li><strong>Camera ON</strong> for all team meetings — no exceptions (unless pre-approved by PM)</li>
<li><strong>Response time:</strong> Within 15 minutes during work hours on all channels</li>
<li><strong>Morning standup post:</strong> By 9:15 AM — what you'll work on today</li>
<li><strong>EOD summary:</strong> By 6:00 PM — what you completed, blockers, tomorrow's plan</li>
<li><strong>Status visibility:</strong> Discord/Slack must show "Online" during work hours</li>
<li><strong>Availability:</strong> Reachable on phone, email, Slack, and Discord simultaneously</li>
</ul>
</div>

<h4>Productivity Tracking</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Tracking Method</th>
<th style="padding:12px;text-align:left;">Frequency</th>
<th style="padding:12px;text-align:left;">Reviewed By</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Jira task completion rate</td><td style="padding:10px;border:1px solid #E2E8F0;">Daily</td><td style="padding:10px;border:1px solid #E2E8F0;">PM</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Message response times</td><td style="padding:10px;border:1px solid #E2E8F0;">Spot-checked weekly</td><td style="padding:10px;border:1px solid #E2E8F0;">PM + HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Meeting attendance & camera usage</td><td style="padding:10px;border:1px solid #E2E8F0;">Per meeting</td><td style="padding:10px;border:1px solid #E2E8F0;">PM</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">EOD report consistency</td><td style="padding:10px;border:1px solid #E2E8F0;">Daily</td><td style="padding:10px;border:1px solid #E2E8F0;">PM + HR</td></tr>
</tbody>
</table>

<h4>Common Remote Work Challenges & Solutions</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Challenge</th>
<th style="padding:12px;text-align:left;">Solution</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Employee feels isolated</td><td style="padding:10px;border:1px solid #E2E8F0;">Weekly virtual coffee chats, team channels for non-work talk</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Work-life boundary blur</td><td style="padding:10px;border:1px solid #E2E8F0;">Strict sign-off times, no messages after 7 PM unless emergency</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Distractions at home</td><td style="padding:10px;border:1px solid #E2E8F0;">Dedicated workspace requirement, performance-based evaluation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Internet issues</td><td style="padding:10px;border:1px solid #E2E8F0;">Backup hotspot required, notify PM within 15 min of outage</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Communication gaps</td><td style="padding:10px;border:1px solid #E2E8F0;">Over-communicate — better to message too much than too little</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎉 Virtual Team Engagement Activities</h3>
<p>Remote teams need deliberate connection-building. These activities are not optional — they're scheduled and expected.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Activity</th>
<th style="padding:12px;text-align:left;">Frequency</th>
<th style="padding:12px;text-align:left;">Duration</th>
<th style="padding:12px;text-align:left;">Owner</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Virtual team lunch/coffee</td><td style="padding:10px;border:1px solid #E2E8F0;">Weekly</td><td style="padding:10px;border:1px solid #E2E8F0;">15 min (informal, no agenda)</td><td style="padding:10px;border:1px solid #E2E8F0;">HR rotates host</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Team building (quiz, games)</td><td style="padding:10px;border:1px solid #E2E8F0;">Monthly</td><td style="padding:10px;border:1px solid #E2E8F0;">30-45 min</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Birthday/work anniversary celebrations</td><td style="padding:10px;border:1px solid #E2E8F0;">As needed</td><td style="padding:10px;border:1px solid #E2E8F0;">Slack/Discord post + virtual shoutout</td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Peer recognition (kudos channel)</td><td style="padding:10px;border:1px solid #E2E8F0;">Ongoing</td><td style="padding:10px;border:1px solid #E2E8F0;">Quick posts recognizing teammates</td><td style="padding:10px;border:1px solid #E2E8F0;">Everyone</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Learning sessions (team teaches team)</td><td style="padding:10px;border:1px solid #E2E8F0;">Bi-weekly</td><td style="padding:10px;border:1px solid #E2E8F0;">30 min presentation + Q&A</td><td style="padding:10px;border:1px solid #E2E8F0;">Rotating presenter</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🏢 Agency-Specific HR Challenges</h3>
<p>Digital agencies like DH face unique HR challenges that traditional companies don't. Understanding these is critical to your role.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Challenge</th>
<th style="padding:12px;text-align:left;">What Happens</th>
<th style="padding:12px;text-align:left;">HR's Role</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Workload fluctuation (feast or famine)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Some months 12 projects, some months 4. Team is either burning out or bored.</td><td style="padding:10px;border:1px solid #E2E8F0;">Work with PMs on resource planning. During slow periods: training, SOPs, skill development. During peak: approve OT, monitor burnout.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Client time zone management</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">US clients = meetings at 8-10 PM IST. Team resentment builds.</td><td style="padding:10px;border:1px solid #E2E8F0;">Rotate late-night meeting duty. Compensatory off the next morning. Track who's doing more late calls.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Creative burnout</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Designers/developers doing similar Shopify work can stagnate.</td><td style="padding:10px;border:1px solid #E2E8F0;">Rotate project types when possible. Introduce learning days. Recognize creative excellence publicly.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Scaling for big projects</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Sudden need for 3 extra developers for a 2-month project.</td><td style="padding:10px;border:1px solid #E2E8F0;">Maintain a vetted freelancer bench. Quick onboarding process. Clear SOW for short-term hires.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Managing across cities/countries</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Team in multiple locations, cultural differences, time zone gaps.</td><td style="padding:10px;border:1px solid #E2E8F0;">Standardize communication norms. Overlap hours mandatory. Document everything — verbal agreements fail remotely.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>⚖️ Freelancer vs Full-Time: Decision Matrix</h3>
<p>As HR at a digital agency, you'll regularly face the "freelancer or full-time?" question. Here's the framework for deciding.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Factor</th>
<th style="padding:12px;text-align:left;">Freelancer</th>
<th style="padding:12px;text-align:left;">Full-Time</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Cost</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Higher per hour, no benefits cost</td><td style="padding:10px;border:1px solid #E2E8F0;">Lower per hour, benefits add 20-30%</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Availability</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">On-demand, may have other clients</td><td style="padding:10px;border:1px solid #E2E8F0;">40 hrs/week guaranteed</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Loyalty</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Low — goes where the money is</td><td style="padding:10px;border:1px solid #E2E8F0;">Higher — invested in company growth</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Training needed</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Less (already skilled in their niche)</td><td style="padding:10px;border:1px solid #E2E8F0;">More (invest in long-term growth)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>IP Risk</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Higher (may work for competitors)</td><td style="padding:10px;border:1px solid #E2E8F0;">Lower (NDA + employment contract)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Best For</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Surge capacity, specialized one-off skills</td><td style="padding:10px;border:1px solid #E2E8F0;">Core team, long-term projects, client relationships</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ DH Rule of Thumb:</strong><br>
<strong>Full-time if:</strong> The role is needed 6+ months, involves client relationships, or requires deep company knowledge.<br>
<strong>Freelancer if:</strong> The project is under 3 months, requires a niche skill we don't have, or it's overflow work during peak season.<br>
<strong>Never freelance:</strong> Client-facing roles (PM, CS, Sales) — these need company alignment and accountability.
</div>
</div>

<div class="content-section">
<h3>🔄 Alumni Network & Rehiring Policy</h3>
<p>Departed employees aren't gone forever. Smart agencies maintain relationships.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Policy Item</th>
<th style="padding:12px;text-align:left;">Details</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Alumni Group</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Keep departed employees in an alumni WhatsApp/Slack group (optional participation)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Annual Check-In</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Send a casual "How are you doing?" message once a year</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Rehiring Priority</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Previous good performers (score 7.0+) get priority in hiring pipeline — skip initial screening</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Boomerang Advantages</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Already knows the culture, tools, and clients. Faster onboarding. Often returns with new skills. Higher loyalty the second time.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Not Eligible for Rehire</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Terminated for misconduct, absconded, breached NDA, poor performance (score &lt;5.0 at exit)</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎯 Succession Planning Basics</h3>
<p>The most dangerous thing in any agency is a "bus factor" of 1 — meaning if one person gets hit by a bus (or just quits), everything breaks.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ The Bus Factor Test:</strong><br>
Ask yourself every month: <strong>"If [person] left tomorrow, what breaks?"</strong><br><br>
If the answer is "a lot," that's a succession planning failure. Here's how to fix it:
</div>

<h4>Succession Planning Framework</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Action</th>
<th style="padding:12px;text-align:left;">How To Do It</th>
<th style="padding:12px;text-align:left;">Frequency</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Identify key positions</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">List every role where only 1 person has the knowledge/skills</td><td style="padding:10px;border:1px solid #E2E8F0;">Quarterly review</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Cross-train team members</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Pair a primary with a backup for every critical function</td><td style="padding:10px;border:1px solid #E2E8F0;">Ongoing</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Document all processes</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">SOPs, video walkthroughs, knowledge base articles</td><td style="padding:10px;border:1px solid #E2E8F0;">Updated monthly</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Build client relationship backups</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Ensure at least 2 people have a relationship with each major client</td><td style="padding:10px;border:1px solid #E2E8F0;">Ongoing</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Monthly risk assessment</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"If [person] left tomorrow, what breaks?" — track and mitigate</td><td style="padding:10px;border:1px solid #E2E8F0;">Monthly</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Succession Planning Success Metric:</strong><br>
The goal is that NO single person's departure should cause more than 1 week of disruption. If someone leaves and it takes the team more than 5 business days to resume normal operations, your succession plan has failed.
</div>
</div>

<div class="content-section">
<h3>🔧 Asset Damage Policy</h3>
<p>Company assets (laptops, monitors, peripherals) are the employee's responsibility while in their possession. Here's how damage is handled:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;">Scenario</th>
<th style="padding:12px;text-align:left;">Liability Split</th>
<th style="padding:12px;text-align:left;">Example</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Accidental Damage</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>50/50 split</strong> — company and employee share the repair/replacement cost equally</td><td style="padding:10px;border:1px solid #E2E8F0;">Coffee spill on laptop keyboard, screen crack from a fall</td></tr>
<tr style="background:#FEE2E2;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Negligence</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>100% employee liability</strong> — full cost borne by the employee</td><td style="padding:10px;border:1px solid #E2E8F0;">Leaving laptop unattended in a public place, using it in rain, ignoring overheating warnings</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">💡 How HR Determines Accidental vs Negligence:</strong><br>
<span style="color: #1E293B;">Review the circumstances with IT and the employee's manager. If there's reasonable doubt, default to accidental (50/50). The goal is fairness, not punishment. Document every asset damage case in the employee's file for pattern detection.</span>
</div>
</div>

<div class="content-section">
<h3>💼 Notice Period Buyout</h3>
<p>An employee can buy out their remaining notice period instead of serving it — but this is not an automatic right.</p>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">Notice Period Buyout Rules:</strong>
<ul style="color: #1E293B;">
<li><strong>Subject to management approval:</strong> The employee requests buyout, but the Delhi Team decides whether to accept</li>
<li><strong>Cost:</strong> The employee pays the equivalent of their daily salary x remaining notice days</li>
<li><strong>KT must be complete:</strong> Even with buyout, knowledge transfer cannot be skipped. If KT is incomplete, buyout is denied</li>
<li><strong>Common reason for denial:</strong> If the employee is the only person who can handle a critical client, early release may not be approved regardless of willingness to pay</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📜 Experience Certificate Policy</h3>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Experience Certificates — Not for Everyone:</strong><br><br>
Experience certificates are issued only to employees who <strong>left on good terms</strong>. This means:
<ul>
<li>Completed their full notice period (or approved buyout)</li>
<li>Finished knowledge transfer satisfactorily</li>
<li>Returned all company assets</li>
<li>Did not abscond, get terminated for misconduct, or breach NDA</li>
</ul>
<strong>No certificate for "burning bridges":</strong> If an employee leaves abruptly, bad-mouths the company, or refuses to cooperate during the exit process, the experience certificate is withheld. This is a Delhi Team decision and is final.<br><br>
<strong>Note:</strong> A relieving letter (confirming employment dates and that no dues remain) is issued to all employees who complete exit formalities, regardless of performance. The experience certificate — which includes role descriptions and performance highlights — is the one that requires good standing.
</div>
</div>

<div class="content-section">
<h3>💻 Laptop & Device Policy for Remote Work</h3>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">Laptop Provision:</strong>
<ul style="color: #1E293B;">
<li><strong>Lucknow in-office team:</strong> Company laptops provided (tracked in asset register)</li>
<li><strong>WFH employees:</strong> Must use their own devices that meet minimum specifications for their role. Company does NOT provide laptops for WFH setups.</li>
</ul>

<strong style="color: #1E293B;">Personal Laptop Use in Office:</strong>
<ul style="color: #1E293B;">
<li>Only with <strong>explicit written permission</strong> from IT and the manager</li>
<li><strong>No client data on personal devices</strong> — all client files, code, and communications must stay on company systems</li>
<li>Personal devices must have antivirus and up-to-date OS before connecting to company network</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🌐 WFH Contingency — Internet & Workspace Issues</h3>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color: #1E293B;">Internet Goes Down During WFH:</strong>
<ul style="color: #1E293B;">
<li><strong>First response:</strong> Switch to mobile hotspot immediately and notify your PM within 15 minutes</li>
<li><strong>If hotspot is also unavailable:</strong> Take leave for the day (CL or unpaid if balance is zero). Internet outage is not a valid reason to remain offline and unaccounted for an entire day.</li>
<li><strong>Repeated internet issues:</strong> If internet goes down 3+ times in a month, WFH privilege may be suspended — the employee must work from office until they have a stable connection.</li>
</ul>

<strong style="color: #1E293B;">Cafe Work:</strong>
<ul style="color: #1E293B;">
<li><strong>Allowed</strong> if the internet is stable and the environment is quiet enough for video calls</li>
<li>Must inform PM before switching to cafe work</li>
<li>No sensitive client discussions in public spaces — use headphones and be aware of surroundings</li>
<li>Not a daily arrangement — occasional cafe days are fine, but if it becomes regular, the employee needs a proper home office setup</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li>Asset damage: Accidental = 50/50 cost split, Negligence = 100% employee liability</li>
        <li>Notice period buyout is possible but requires Delhi Team approval and completed KT</li>
        <li>Experience certificates only for employees who left on good terms — no cert for burning bridges</li>
        <li>Company laptops only for Lucknow in-office team — WFH employees use their own devices</li>
        <li>Personal laptop use requires explicit permission; no client data on personal devices ever</li>
        <li>Internet down during WFH: use mobile hotspot or take leave — staying offline all day is not acceptable</li>
        <li>Cafe work is allowed if internet is stable and environment is quiet — inform PM first</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">Offboarding and remote work management are where HR protects DH's most valuable assets — its data, its client relationships, and its reputation. Every exit you handle professionally becomes a brand ambassador story. Every remote work policy you enforce keeps the team productive and accountable, whether they're in the office or across the country.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"A company's culture is defined not just by how it welcomes people in, but by how it treats them on the way out."</p>
    </div>
</div>
`;

const task6Quiz = [
    { q: "What is the notice period for an employee still in their probation period?", o: ["No notice required during probation", "7 days", "14 days", "30 days"], c: 1 },
    { q: "What is the notice period for a confirmed (post-probation) employee at DH?", o: ["30 days", "7 days", "15 days", "60 days"], c: 0 },
    { q: "Within how many business days must HR schedule an exit interview after receiving a resignation?", o: ["1 business day", "5 business days", "7 business days", "3 business days"], c: 3 },
    { q: "What is the minimum mandatory duration for knowledge transfer at DH?", o: ["3 days", "5 days", "7 days", "14 days"], c: 2 },
    { q: "Within how many days of the last working day must Full & Final settlement be processed?", o: ["45 days", "15 days", "30 days", "60 days"], c: 0 },
    { q: "An employee is classified as 'absconding' after how many consecutive days AWOL without communication?", o: ["1 day", "2 days", "5 days", "3 days"], c: 3 },
    { q: "In the absconding protocol, after how many days from the formal written notice is employment terminated if there's no response?", o: ["3 days", "5 days", "7 days", "14 days"], c: 2 },
    { q: "Who receives a recommendation letter at DH?", o: ["All employees who complete their notice period", "TOP performers ONLY with management approval", "Employees with 1+ year tenure automatically", "Anyone who requests one in writing"], c: 1 },
    { q: "What is the minimum internet speed requirement for remote work at DH?", o: ["50 Mbps", "10 Mbps", "25 Mbps", "100 Mbps"], c: 0 },
    { q: "Which of these accounts is marked as CRITICAL priority for deactivation on last working day?", o: ["Google Drive / Docs", "Jira / PM Tools", "Third-party vendor accounts", "Shopify Partner Access"], c: 3 },
    { q: "In the freelancer vs full-time decision, which roles should NEVER be freelanced at DH?", o: ["Developers — code quality requires full-time commitment", "Designers — brand consistency requires full-time presence", "Client-facing roles (PM, CS, Sales) — need company alignment", "All technical roles — freelancers lack accountability"], c: 2 },
    { q: "What performance score at exit makes a former employee NOT eligible for rehire?", o: ["Below 5.0", "Below 7.0", "Below 6.0", "Below 4.0"], c: 0 },
    { q: "What is the 'bus factor' test in succession planning?", o: ["How quickly can the team deliver under pressure?", "How many people can the company afford to lose in a month?", "What is the maximum acceptable employee turnover rate?", "If a key person left tomorrow, what breaks?"], c: 3 },
    { q: "What is the correct order of the first 3 steps in the resignation process?", o: ["Exit interview → Resignation letter → Manager discussion", "Resignation letter submitted → Manager initial discussion → HR schedules exit interview", "Manager discussion → Resignation letter → HR schedules exit interview", "HR schedules exit interview → Resignation letter → Manager discussion"], c: 1 },
    { q: "Employees terminated for poor performance must wait how many additional days before their experience certificate is generated?", o: ["5 days", "15 days", "10 days", "30 days"], c: 2 }
];

const task7Content = `
<h2>🏢 TASK 7: DH Deep Dive — Culture, Rules, Incentives & Communication</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">This is the most important module in your entire HR certification. Culture is not a poster on the wall — it is the invisible force that determines whether a company thrives or dies. At Digital Heroes, HR does not just enforce rules; you are the living embodiment of the DH way. Every hire you make, every policy you enforce, every conversation you have shapes the culture.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Culture eats strategy for breakfast." — Peter Drucker</p>
</div>

<div class="content-section">
<h3>🌟 The DH Manifesto: 7 Non-Negotiable Principles</h3>
<p>These aren't suggestions. These aren't guidelines you can "mostly follow." These are the 7 principles that define Digital Heroes. Every employee — from Day-1 intern to senior leadership — lives by these. As HR, you are the <strong>guardian</strong> of this culture. You hire for it, you coach it, you enforce it, and you fire when someone violates it.</p>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Why This Module Matters Most:</strong><br>
You can teach someone to write a JD or screen a resume. You <strong>cannot</strong> teach someone to care about the culture. This module contains EVERYTHING about DH that an HR person needs to know — manifesto, zero-tolerance rules, authority matrix, escalation matrix, incentives, penalties, communication SLAs, and career growth paths. Treat this as your HR Bible at Digital Heroes.
</div>

<h4>Principle 1: Talent is Irrelevant. Volume is Everything.</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>Skills can be learned through 100+ hours of dedicated, focused effort</li>
<li>Degrees and credentials are irrelevant — OUTPUT is what matters</li>
<li>Nobody is "born talented" — talent is just accumulated volume of practice</li>
<li>A person who puts in 10 hours/day for 6 months will beat a "talented" person who coasts on natural ability</li>
</ul>
<p><strong>DH Example:</strong> We hired a developer who knew absolutely zero Liquid (Shopify's templating language) when he joined. He had never built a Shopify store. But he committed to volume — 3 months of building stores every single day, watching tutorials, breaking things, fixing things. By month 4, he was outperforming developers with 2+ years of "experience." His secret? Not talent. Volume.</p>
<p><strong>Another Example:</strong> A content writer joined with no e-commerce experience. She wrote 300+ product descriptions in her first 2 months — terrible ones at first, decent ones by week 3, excellent ones by month 2. Volume turned her from a zero into a content machine.</p>
<p><strong>HR Implication:</strong></p>
<ul>
<li>Don't reject candidates for lack of a specific skill if they show learning ability and drive</li>
<li>In interviews, ask: "Tell me about a time you learned something completely new from scratch. How long did it take? What was your process?"</li>
<li>A candidate who says "I watched 50 YouTube tutorials, built 10 practice projects, and then got my first paid client" is GOLD</li>
<li>A candidate who says "I have 3 years of experience" but can't show what they've actually built is a RED FLAG</li>
</ul>
</div>

<h4>Principle 2: Emotional Intelligence > IQ</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>How you respond under pressure defines you more than how fast you code or how well you design</li>
<li>EQ is a better predictor of performance than cognitive ability, especially in client-facing agency work</li>
<li>A brilliant developer who blows up at clients when they request changes is WORSE than an average developer who handles feedback gracefully</li>
<li>EQ includes: self-awareness, self-regulation, empathy, social skills, and motivation</li>
</ul>
<p><strong>DH Example:</strong> Two candidates for a CSM position. Candidate A had 4 years of experience, knew Shopify inside-out, but during the interview said "Clients don't understand tech, you just have to educate them" with visible frustration. Candidate B had 1 year of experience but said "I love the challenge of translating technical concepts into language clients can understand — it's like being a bridge." We hired B. Six months later, B had a 4.9-star rating. A (whom a competitor hired) was fired for arguing with clients.</p>
<p><strong>HR Implication:</strong></p>
<ul>
<li>Test EQ in interviews, not just technical skill — use scenario-based questions</li>
<li>"A client sends you an angry message at 5:55 PM saying the store you delivered is 'terrible.' How do you respond?" — look for empathy FIRST, then problem-solving</li>
<li>Red flag answers: "I'd tell them they approved the design" or "That's not my fault, the brief was unclear"</li>
<li>Green flag answers: "I'd acknowledge their frustration, ask what specifically isn't meeting expectations, and propose a fix timeline"</li>
<li>During trial tasks, observe how candidates handle feedback — do they get defensive or do they adapt?</li>
</ul>
</div>

<h4>Principle 3: Instant Reply = Respect</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>Quick response = "I respect you, I'm reliable, I care about this relationship"</li>
<li>Slow response = "You're not a priority, I'll get to you when I feel like it"</li>
<li>This applies to EVERYONE: clients, teammates, managers, HR</li>
<li>Even if you don't have the answer, acknowledge the message: "Got it, checking and will update in 15 minutes"</li>
</ul>
<p><strong>Client message SLA:</strong> Within <strong>5 minutes</strong> during work hours. This is non-negotiable. A client who waits 30 minutes for a reply will go to a competitor who replies in 2 minutes.</p>
<p><strong>Internal SLA:</strong> Within <strong>15 minutes</strong> during work hours. Your teammate is blocked waiting for your response — every minute you delay, you're burning their productivity too.</p>
<p><strong>DH Example:</strong> One of our top sales executives had a simple habit — he replied to every client message within 90 seconds. Not with answers, but with acknowledgments: "Great question, let me check with the dev team and get back to you in 30 mins." Clients LOVED him. His conversion rate was 40% higher than the team average. Why? Because speed = trust.</p>
<p><strong>Counter-Example:</strong> A developer consistently took 2-3 hours to reply to PM messages. The PM couldn't update the client, the client got anxious, the client escalated to Delhi. All because one person was "too busy coding" to type "Noted, will check." That developer is no longer with us.</p>
<p><strong>HR Implication:</strong></p>
<ul>
<li>Test response speed during the hiring process itself — send a follow-up email or message and see how quickly they reply</li>
<li>If a candidate takes 48 hours to respond to your interview scheduling email, they'll take 48 hours to respond to clients</li>
<li>During onboarding, set this expectation on Day 1: "At DH, response speed IS your reputation"</li>
<li>Track and enforce response SLAs as part of performance reviews</li>
</ul>
</div>

<h4>Principle 4: Protect Your Mindset</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>Eliminate negative self-talk — "I can't do this" becomes "I haven't learned this YET"</li>
<li>Build a character that supports growth, not one that crumbles under pressure</li>
<li>Zero tolerance for a defeatist "I can't" attitude</li>
<li>Your mindset is contagious — negativity from one person infects the entire team</li>
</ul>
<p><strong>DH Example:</strong> A junior designer was given a complex landing page project. Instead of saying "I've never done this," she said "Let me study 20 examples first, then attempt it." Her first attempt was 60% there. By her third revision (with feedback), it was client-ready. The mindset of "let me try" made all the difference.</p>
<p><strong>Counter-Example:</strong> A content writer received feedback that his blog post needed restructuring. His response: "Well, if you wanted it written differently, you should have told me before." That's a fixed mindset. That writer was on PIP within a month.</p>
<p><strong>HR Role:</strong></p>
<ul>
<li>Foster positive culture by recognizing effort, not just results</li>
<li>Address negativity early — one complainer in a team meeting poisons the whole room</li>
<li>In interviews, ask: "Tell me about a time you received harsh feedback. What did you do?" — look for growth response</li>
<li>During 1:1s, coach language: replace "I can't" with "How can I?" and "This is too hard" with "What do I need to learn?"</li>
</ul>
</div>

<h4>Principle 5: Clients Aren't a Burden</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>Clients represent opportunity, not problems. Without clients, there is no DH</li>
<li>Client success = your success. When they grow, we grow</li>
<li>A demanding client is a client who CARES about results — they're pushing for excellence, which is what we should want too</li>
<li>"Difficult" clients often become the most loyal clients when handled well</li>
</ul>
<p><strong>DH Example:</strong> We had a client who sent 47 revision requests on a single homepage design. The designer was frustrated. But the PM reframed it: "This client is investing $8,000 — of course they want it perfect." After 47 revisions, the client was ecstatic, left a 5-star review, and ordered 3 more projects worth $22,000. That "difficult" client became our 2nd biggest account.</p>
<p><strong>HR Implication:</strong></p>
<ul>
<li>Screen for customer service attitude in EVERY role, not just CSM</li>
<li>Ask: "Tell me about the most demanding person you've ever worked with. How did you handle it?"</li>
<li>Red flag: "I told them that's not in the scope" — correct PROCESS but wrong ATTITUDE</li>
<li>Green flag: "I understood their frustration, offered alternatives within scope, and found a solution that made them happy"</li>
<li>During onboarding, tell every new hire: "At DH, the client's success IS your KPI"</li>
</ul>
</div>

<h4>Principle 6: The 80/20 Principle</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>80% of your time should be productive work — building skills, delivering output, solving problems</li>
<li>20% for everything else — breaks, socializing, admin tasks, rest</li>
<li>Self-accountability is required — DH doesn't believe in micromanagement</li>
<li>If you need someone watching over your shoulder to be productive, you're not DH material</li>
</ul>
<p><strong>DH Example:</strong> We don't track bathroom breaks or count your coffee runs. But we DO track output. A developer who produces 3 quality pages per day is performing — we don't care if they took a 30-minute walk in the middle. A developer who sits at their desk for 10 hours but only produces 1 sloppy page is NOT performing — the hours don't matter, the output does.</p>
<p><strong>HR Implication:</strong></p>
<ul>
<li>Set expectations about productivity standards from Day 1 during onboarding</li>
<li>Don't create a surveillance culture — track OUTPUT, not HOURS</li>
<li>In performance reviews, focus on deliverables and quality, not "time in seat"</li>
<li>When an employee is underperforming, ask "Is your output meeting standards?" not "Are you working enough hours?"</li>
</ul>
</div>

<h4>Principle 7: Work = Highest Priority</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📖 What It Means:</strong>
<ul>
<li>Meaningful work leads to life satisfaction — not the other way around</li>
<li>Real fulfillment comes from BUILDING something that matters, not from "work-life balance" platitudes</li>
<li>This doesn't mean working 16-hour days — it means making your work hours COUNT</li>
<li>It's not about hours — it's about IMPACT. Someone who delivers exceptional work in 8 hours is more valuable than someone who delivers mediocre work in 12 hours</li>
</ul>
<p><strong>DH Example:</strong> The team members who grow fastest at DH aren't the ones who work the longest hours. They're the ones who are genuinely passionate about their craft. A developer who spends weekends building side projects isn't "overworking" — they're investing in themselves because they LOVE what they do.</p>
<p><strong>HR Implication:</strong></p>
<ul>
<li>Hire people who are passionate about their craft — not people looking for "just a job"</li>
<li>In interviews, ask: "What's the last thing you built/created outside of work?" — passionate people have side projects, portfolios, blogs, or at least strong opinions about their field</li>
<li>Watch out for candidates who only ask about salary, WFH policy, and leave days — they're optimizing for MINIMUM effort, not MAXIMUM impact</li>
<li>Foster an environment where passion is rewarded: recognition, growth opportunities, and challenging work</li>
</ul>
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ The Manifesto Hiring Checklist — Use This in Every Interview:</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#065F46;color:white;">
<th style="padding:10px;text-align:left;">Principle</th>
<th style="padding:10px;text-align:left;">What to Test</th>
<th style="padding:10px;text-align:left;">How to Test</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #A7F3D0;"><td style="padding:10px;">Volume > Talent</td><td style="padding:10px;">Learning ability & drive</td><td style="padding:10px;">"Tell me about something you taught yourself from zero"</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;background:#ECFDF5;"><td style="padding:10px;">EQ > IQ</td><td style="padding:10px;">Emotional response under pressure</td><td style="padding:10px;">"How do you react when someone harshly criticizes your work?"</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;"><td style="padding:10px;">Instant Reply</td><td style="padding:10px;">Response speed & reliability</td><td style="padding:10px;">Track how fast they respond to your scheduling emails</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;background:#ECFDF5;"><td style="padding:10px;">Protect Mindset</td><td style="padding:10px;">Growth vs. fixed mindset</td><td style="padding:10px;">"Describe a time you failed. What did you learn?"</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;"><td style="padding:10px;">Clients Aren't Burden</td><td style="padding:10px;">Service attitude</td><td style="padding:10px;">"Tell me about the most demanding person you've served"</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;background:#ECFDF5;"><td style="padding:10px;">80/20</td><td style="padding:10px;">Self-management & productivity</td><td style="padding:10px;">"How do you structure your typical workday?"</td></tr>
<tr style="border-bottom:1px solid #A7F3D0;"><td style="padding:10px;">Work = Priority</td><td style="padding:10px;">Passion for their craft</td><td style="padding:10px;">"What did you build/create outside of work recently?"</td></tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>🚫 Zero-Tolerance Rules — Immediate Termination</h3>
<p>These result in <strong>immediate termination</strong>. No warnings. No second chances. No "let's give them one more opportunity." HR must enforce these without exception — regardless of how senior the person is or how "valuable" they seem.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 CATEGORY 1: DATA & CONFIDENTIALITY BREACHES</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#DC2626;color:white;">
<th style="padding:10px;text-align:left;">Violation</th>
<th style="padding:10px;text-align:left;">Why It's Zero Tolerance</th>
<th style="padding:10px;text-align:left;">Consequence</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sharing client passwords, store access, or credentials with ANYONE outside DH</td><td style="padding:10px;border:1px solid #E2E8F0;">Direct NDA violation, client trust breach, potential legal liability</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Discussing client details, revenue data, or strategies on social media</td><td style="padding:10px;border:1px solid #E2E8F0;">Public exposure of confidential business information</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Taking screenshots of internal documents, SOPs, processes, or Slack/Discord channels and sharing externally</td><td style="padding:10px;border:1px solid #E2E8F0;">Competitive intelligence theft, IP violation</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sharing employee personal data (salary, Aadhaar, PAN, bank details) with unauthorized parties</td><td style="padding:10px;border:1px solid #E2E8F0;">Privacy violation, trust breach, potential legal liability</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Discussing individual salaries publicly or sharing salary structures with other employees</td><td style="padding:10px;border:1px solid #E2E8F0;">Creates team discord, undermines compensation framework</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION</td></tr>
</tbody>
</table>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 CATEGORY 2: NON-COMPETE & INTEGRITY VIOLATIONS</strong>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#DC2626;color:white;">
<th style="padding:10px;text-align:left;">Violation</th>
<th style="padding:10px;text-align:left;">Why It's Zero Tolerance</th>
<th style="padding:10px;text-align:left;">Consequence</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Freelancing on Fiverr, Upwork, or any platform while employed at DH (without written approval)</td><td style="padding:10px;border:1px solid #E2E8F0;">Conflict of interest, using DH-trained skills for personal gain on company time</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Working for a competitor or moonlighting without prior written approval from Delhi</td><td style="padding:10px;border:1px solid #E2E8F0;">Direct non-compete violation, breach of employment terms</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Fraud or theft of any kind — financial, data, or intellectual property</td><td style="padding:10px;border:1px solid #E2E8F0;">Criminal activity, absolute trust destruction</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION + FIR</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Fake attendance, fabricated EOD reports, logging hours not worked</td><td style="padding:10px;border:1px solid #E2E8F0;">Equivalent to time theft, trust violation</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Workplace harassment, bullying, or violence of any form</td><td style="padding:10px;border:1px solid #E2E8F0;">Toxic culture, legal liability, safety concern</td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION + LEGAL ACTION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Substance abuse — coming to work under the influence of drugs or alcohol</td><td style="padding:10px;border:1px solid #E2E8F0;">Safety hazard, professional liability, client trust risk</td><td style="padding:10px;border:1px solid #E2E8F0;">IMMEDIATE TERMINATION</td></tr>
</tbody>
</table>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Real Examples (Anonymized) — Zero-Tolerance Violations at DH:</strong><br><br>
<strong>Case 1 — "The Screenshot Leak":</strong> A developer took screenshots of our internal pricing sheet and Shopify workflow documentation and shared them with a friend at a competing agency "just to show them how we do things." A competitor started using our exact pricing structure within 2 weeks. The developer was terminated immediately, and legal notice was served. The damage? We lost competitive pricing advantage for 3 months until we restructured.<br><br>
<strong>Case 2 — "The Secret Freelancer":</strong> A designer was delivering excellent work at DH but started missing deadlines. When the PM investigated, they found the designer had active Fiverr and 99designs profiles, taking on 5-6 freelance projects while on DH payroll. She was using DH's Figma account and design templates for freelance work. Terminated same day. She'd been doing it for 4 months — meaning DH effectively subsidized her freelance business.<br><br>
<strong>Case 3 — "The Salary Gossip":</strong> An HR intern, during a casual lunch conversation, revealed to a group of developers what another developer was earning. Within 24 hours, 3 team members demanded salary renegotiations, 1 threatened to quit, and team morale dropped significantly. The intern was terminated immediately. Even "innocent" information sharing by HR can cause massive damage. HR handles the most sensitive data in the company — one slip can destroy team trust.
</div>
</div>

<div class="content-section">
<h3>👔 Authority Matrix — Who Decides What (Complete Reference)</h3>
<p>At DH, not everyone has authority to make every decision. Knowing WHO approves WHAT prevents overstepping, delays, and costly mistakes. This is your complete reference — memorize the "DELHI TEAM ONLY" items especially.</p>

<h4>💰 Financial Decisions</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Decision</th>
<th style="padding:10px;text-align:left;">Who Can Decide</th>
<th style="padding:10px;text-align:left;">Limits / Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Discount on package</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">NO discounts EVER. DH has premium positioning. If a client asks for a discount, the answer is NO. Offer value-adds instead.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Refund</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Any amount, any reason. 24-hour decision window. CSM can acknowledge the request but CANNOT promise or process a refund.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Goodwill gesture</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">CSM can decide</td><td style="padding:10px;border:1px solid #E2E8F0;">Up to <strong>$50</strong> value (e.g., free minor revision, small add-on). Above $50 requires Delhi approval.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Tool/software purchase</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM can decide</td><td style="padding:10px;border:1px solid #E2E8F0;">Up to <strong>₹5,000/month</strong> per tool. Above that requires Delhi approval + justification.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Advance salary</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR can decide</td><td style="padding:10px;border:1px solid #E2E8F0;">Maximum <strong>50% of monthly salary</strong>, once per quarter. Recovered in 2 equal installments.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Hiring salary</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR can recommend a range, but final CTC approval is always Delhi.</td></tr>
</tbody>
</table>

<h4>🤝 Client Decisions</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Decision</th>
<th style="padding:10px;text-align:left;">Who Can Decide</th>
<th style="padding:10px;text-align:left;">Limits / Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Deadline extension</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM can decide</td><td style="padding:10px;border:1px solid #E2E8F0;">Up to <strong>3 days</strong>. Beyond 3 days requires Delhi approval. Client must be informed BEFORE the original deadline passes.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Free scope change</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM can decide</td><td style="padding:10px;border:1px solid #E2E8F0;">Only if the change is <strong>under 2 hours of work</strong>. Above 2 hours = paid change order required.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Fire a client</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Even the worst client cannot be dropped without Delhi approval. Document everything and escalate.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Rush orders</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM can decide</td><td style="padding:10px;border:1px solid #E2E8F0;">With <strong>50% rush surcharge</strong>, and only if team capacity is below 80%. Above 80% capacity = Delhi decides.</td></tr>
</tbody>
</table>

<h4>💻 Technical Decisions</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Decision</th>
<th style="padding:10px;text-align:left;">Who Can Decide</th>
<th style="padding:10px;text-align:left;">Limits / Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Theme selection</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lead Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">From approved theme list only. Non-approved themes need Delhi sign-off.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>App recommendation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">Free apps or client-approved paid apps. Never install paid apps without client's billing consent.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Custom code implementation</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lead Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">Under <strong>8 hours</strong> of work. Above 8 hours requires approval + separate quote to client.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Bug fix priority</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lead Developer</td><td style="padding:10px;border:1px solid #E2E8F0;">Uses 4-tier severity system: Critical (fix NOW), High (same day), Medium (48h), Low (72h).</td></tr>
</tbody>
</table>

<h4>👥 People Decisions</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Decision</th>
<th style="padding:10px;text-align:left;">Who Can Decide</th>
<th style="padding:10px;text-align:left;">Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Hire any employee</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Non-negotiable. HR screens and recommends, Delhi makes the final call.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Terminate any employee</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Non-negotiable. Even with zero-tolerance violations, HR documents and escalates — Delhi confirms termination.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Approve leave</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR</td><td style="padding:10px;border:1px solid #E2E8F0;">Within policy limits. Extended/exceptional leave needs Delhi approval.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>WFH approval</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM</td><td style="padding:10px;border:1px solid #E2E8F0;">Maximum <strong>2 days/week</strong>, with <strong>24-hour advance notice</strong>. Beyond 2 days needs Delhi approval.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Promotion</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong style="color:#DC2626;">DELHI TEAM ONLY</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Manager + HR can recommend with data. Delhi decides based on performance, team need, and budget.</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Critical HR Takeaway:</strong> When in doubt about who has authority, the answer is almost always "escalate to Delhi." It's better to ask and confirm than to approve something you don't have authority for. Unauthorized approvals can get YOU in trouble, even if they seem like "small" decisions.
</div>
</div>

<div class="content-section">
<h3>🔥 Escalation Matrix — How to Handle Crises (Complete Reference)</h3>
<p>Things go wrong. Clients get angry. Stores break. Team members disappear. How you respond in the first 30 minutes determines whether a problem becomes a crisis or gets resolved quickly. Here's the complete escalation matrix for DH.</p>

<h4>🔴 CRITICAL — 30-Minute Response Required</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#DC2626;color:white;">
<th style="padding:10px;text-align:left;">Situation</th>
<th style="padding:10px;text-align:left;">Step 1</th>
<th style="padding:10px;text-align:left;">Step 2</th>
<th style="padding:10px;text-align:left;">Resolution Time</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Client threatens bad review</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">CSM acknowledges within 15 min, de-escalates</td><td style="padding:10px;border:1px solid #E2E8F0;">Escalate to Delhi if client not calm after 30 min</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Max 2 hours</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Client demands refund</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">CSM acknowledges, does NOT promise anything</td><td style="padding:10px;border:1px solid #E2E8F0;">Escalate to Delhi within 30 min — Delhi makes final decision</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>24 hours</strong> (Delhi decision)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Live store broken/down</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Lead Developer within 15 min — assess damage</td><td style="padding:10px;border:1px solid #E2E8F0;">Rollback to last working version if needed</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Max 4 hours</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Checkout not working</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">IMMEDIATE attention — direct revenue impact</td><td style="padding:10px;border:1px solid #E2E8F0;">All hands on deck until resolved</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Max 2 hours</strong></td></tr>
</tbody>
</table>

<h4>🟠 HIGH — 2-Hour Response Required</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#EA580C;color:white;">
<th style="padding:10px;text-align:left;">Situation</th>
<th style="padding:10px;text-align:left;">Step 1</th>
<th style="padding:10px;text-align:left;">Step 2</th>
<th style="padding:10px;text-align:left;">Resolution Time</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Client angry about quality</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM acknowledges within 1 hour</td><td style="padding:10px;border:1px solid #E2E8F0;">Create fix plan with specific timeline</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Max 48 hours</strong> for fixes</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Page speed below 70 (mobile)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Developer investigates root cause</td><td style="padding:10px;border:1px solid #E2E8F0;">Optimize images, code, apps</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>24-hour fix</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Team member absent without notice</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR contacts within 30 min (call + message)</td><td style="padding:10px;border:1px solid #E2E8F0;">PM reassigns tasks; written warning on return</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Same day</strong> task reassignment</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Missed deadline</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Inform client BEFORE deadline passes</td><td style="padding:10px;border:1px solid #E2E8F0;">Assign additional resource if needed</td><td style="padding:10px;border:1px solid #E2E8F0;">Escalate if pattern (3+ misses)</td></tr>
</tbody>
</table>

<h4>🟡 MEDIUM — 6-Hour Response Required</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#CA8A04;color:white;">
<th style="padding:10px;text-align:left;">Situation</th>
<th style="padding:10px;text-align:left;">Step 1</th>
<th style="padding:10px;text-align:left;">Step 2</th>
<th style="padding:10px;text-align:left;">Resolution</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Client not responding 3+ days</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">WhatsApp follow-up on Day 3</td><td style="padding:10px;border:1px solid #E2E8F0;">Email Day 4 → Pause notice Day 5 → Pause project Day 7</td><td style="padding:10px;border:1px solid #E2E8F0;">Document all attempts</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Scope creep detected</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Document original scope vs. new requests</td><td style="padding:10px;border:1px solid #E2E8F0;">List new items with cost/time → issue change order</td><td style="padding:10px;border:1px solid #E2E8F0;">PM handles with Delhi approval if large</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Conflict between team members</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM/HR mediates — talk to each person separately first</td><td style="padding:10px;border:1px solid #E2E8F0;">Document resolution, follow up at 1 week and 1 month</td><td style="padding:10px;border:1px solid #E2E8F0;">Escalate if unresolved after mediation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Consistently low quality work</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Document with specific examples</td><td style="padding:10px;border:1px solid #E2E8F0;">Private conversation → improvement plan → PIP if no change</td><td style="padding:10px;border:1px solid #E2E8F0;">2-month improvement window</td></tr>
</tbody>
</table>

<h4>🟢 LOW — 24-Hour Response Required</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#16A34A;color:white;">
<th style="padding:10px;text-align:left;">Situation</th>
<th style="padding:10px;text-align:left;">Resolution Time</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Minor visual bugs (alignment, spacing, color mismatch)</td><td style="padding:10px;border:1px solid #E2E8F0;">72-hour resolution</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">App conflicts or compatibility issues</td><td style="padding:10px;border:1px solid #E2E8F0;">48-hour resolution</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Content updates requested by client</td><td style="padding:10px;border:1px solid #E2E8F0;">48-hour resolution</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Internal process improvement suggestions</td><td style="padding:10px;border:1px solid #E2E8F0;">Reviewed in weekly meeting</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ HR's Role in Escalation:</strong>
<ul>
<li>People-related escalations (absent team member, conflict, harassment) — HR leads</li>
<li>Client-related escalations — CSM/PM leads, HR supports if people issues are involved</li>
<li>Technical escalations — Lead Developer leads, HR is informed if it affects team capacity</li>
<li>ALWAYS document escalations — who, what, when, resolution. This protects DH legally and creates learning opportunities</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>💰 Incentive Structure — Complete for ALL Roles</h3>
<p>Incentives reward excellence. They're not guaranteed income — they're EARNED through exceptional performance. Here's the complete incentive structure for every role at DH.</p>

<h4>🌐 Universal Incentives (All Roles)</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Incentive</th>
<th style="padding:10px;text-align:left;">Amount</th>
<th style="padding:10px;text-align:left;">Criteria</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Perfect Attendance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000/month</td><td style="padding:10px;border:1px solid #E2E8F0;">Zero unplanned leaves AND zero late arrivals in the month</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Process Improvement</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000 per approved improvement; ₹5,000 if it saves 10+ hours/month</td><td style="padding:10px;border:1px solid #E2E8F0;">Must be submitted, reviewed, and approved through Kaizen process</td></tr>
</tbody>
</table>

<h4>📈 Sales Incentives</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💰 Per-Order Commission (kicks in when monthly sales exceed $20,000):</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#065F46;color:white;">
<th style="padding:10px;text-align:left;">Order Value</th>
<th style="padding:10px;text-align:left;">Commission Rate</th>
<th style="padding:10px;text-align:left;">Example</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #A7F3D0;">Under $2,000</td><td style="padding:10px;border:1px solid #A7F3D0;">1% per order</td><td style="padding:10px;border:1px solid #A7F3D0;">$1,500 order = $15 commission</td></tr>
<tr style="background:#ECFDF5;"><td style="padding:10px;border:1px solid #A7F3D0;">$2,000 - $5,000</td><td style="padding:10px;border:1px solid #A7F3D0;">2% per order</td><td style="padding:10px;border:1px solid #A7F3D0;">$3,000 order = $60 commission</td></tr>
<tr><td style="padding:10px;border:1px solid #A7F3D0;">$5,000+</td><td style="padding:10px;border:1px solid #A7F3D0;">3% per order</td><td style="padding:10px;border:1px solid #A7F3D0;">$8,000 order = $240 commission</td></tr>
</tbody>
</table>
<p><strong>Important Rules:</strong></p>
<ul>
<li>Subject to <strong>Delhi Team discretion</strong> — not automatic</li>
<li>Commission is counted when order is <strong>DELIVERED</strong> (not when booked)</li>
<li>Credited 1 month after delivery confirmation</li>
<li>If a client requests a refund on a delivered order, commission is reversed</li>
</ul>
</div>

<h4>💻 Developer / Shopify Incentives</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Incentive</th>
<th style="padding:10px;text-align:left;">Amount</th>
<th style="padding:10px;text-align:left;">Criteria</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Upsell Bonus</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Client buys additional services within 90 days of project completion</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client Retention</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Client returns for 3rd or subsequent project</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Perfect Delivery</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Zero revisions required AND client gives 4.5+ star rating</td></tr>
</tbody>
</table>

<h4>🎧 CSM (Customer Success Manager) Incentives</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Incentive</th>
<th style="padding:10px;text-align:left;">Amount</th>
<th style="padding:10px;text-align:left;">Criteria</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">5-Star Client Review</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Client leaves 5-star review (4-star = ₹0)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Upsell</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Client purchases additional services</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Client Retention</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Client returns for 3rd+ project</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Response Time Excellence</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,500/month</td><td style="padding:10px;border:1px solid #E2E8F0;">Average response time under 30 minutes for the entire month</td></tr>
</tbody>
</table>

<h4>👥 HR Incentives (Quarterly)</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Incentive</th>
<th style="padding:10px;text-align:left;">Amount</th>
<th style="padding:10px;text-align:left;">Criteria</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Quality Hire</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,500</td><td style="padding:10px;border:1px solid #E2E8F0;">New hire passes probation with performance score of 7.5 or above</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Retention Excellence</td><td style="padding:10px;border:1px solid #E2E8F0;">₹3,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Zero voluntary attrition in the quarter</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Training Completion</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000</td><td style="padding:10px;border:1px solid #E2E8F0;">100% of team members completed assigned training modules</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Onboarding Compliance</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000</td><td style="padding:10px;border:1px solid #E2E8F0;">All new hires onboarded with complete documentation (NDA, ID, bank details)</td></tr>
</tbody>
</table>

<h4>🎨 Designer Incentives</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Incentive</th>
<th style="padding:10px;text-align:left;">Amount</th>
<th style="padding:10px;text-align:left;">Criteria</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Social Media Batch</td><td style="padding:10px;border:1px solid #E2E8F0;">₹500/batch</td><td style="padding:10px;border:1px solid #E2E8F0;">Delivered on time with no revisions</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">YouTube Thumbnail</td><td style="padding:10px;border:1px solid #E2E8F0;">₹300/video</td><td style="padding:10px;border:1px solid #E2E8F0;">First submission approval (no revisions)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Brand Asset Package</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,500</td><td style="padding:10px;border:1px solid #E2E8F0;">Complete brand asset set delivered on time</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">AI Innovation</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Creates a new AI-powered design workflow adopted by the team</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>⚡ Penalty Structure — Complete for ALL Roles</h3>
<p>Penalties exist to maintain standards, not to punish. They ensure that everyone takes quality, punctuality, and professionalism seriously. HR must apply them consistently — no favorites, no exceptions.</p>

<h4>🌐 Universal Penalties (All Roles)</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Violation</th>
<th style="padding:10px;text-align:left;">Penalty (Progressive)</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Late without notice</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1st: Verbal warning → 2nd: ₹200 fine → 3rd: ₹500 fine → 4th+: Full day salary deduction</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Unplanned leave (no prior notice)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">1 day salary deduction + written warning</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>3 consecutive months below 5.0 performance score</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">TERMINATION</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Below standard quality work</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Month 1-2: Warning + coaching → Month 3 (no improvement): TERMINATION</td></tr>
</tbody>
</table>

<h4>💻 Developer / Designer Specific Penalties</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Violation</th>
<th style="padding:10px;text-align:left;">Penalty</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1-3 star client review</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹1,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Revision overages (excessive revisions due to quality issues)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹500</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Missed PageSpeed target (below 70 on mobile)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹300</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Late delivery (per day late)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹200/day</td></tr>
</tbody>
</table>

<h4>🎧 CSM Specific Penalties</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Violation</th>
<th style="padding:10px;text-align:left;">Penalty</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">1-3 star client review</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹2,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Unnecessary escalation to Delhi</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹1,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Response time exceeding 2 hours</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹200 per occurrence</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Lost client (client churns)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹2,500 + mandatory review of what went wrong</td></tr>
</tbody>
</table>

<h4>👥 HR Specific Penalties</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Violation</th>
<th style="padding:10px;text-align:left;">Penalty</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Bad hire (terminated during probation)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹2,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Hiring delay (beyond 14 days from approved request)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹500/week overdue</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Missed payroll (employee not paid on time due to HR error)</td><td style="padding:10px;border:1px solid #E2E8F0;">-₹1,000</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Confidentiality breach (sharing employee data)</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>IMMEDIATE TERMINATION</strong></td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📱 Communication SLAs & Tools</h3>
<p>Communication at DH follows strict SLAs. These aren't guidelines — they're rules with real consequences.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Channel</th>
<th style="padding:10px;text-align:left;">Purpose</th>
<th style="padding:10px;text-align:left;">Response SLA</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Discord</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Primary internal communication, standups, daily updates</td><td style="padding:10px;border:1px solid #E2E8F0;">Must be online during work hours</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Fiverr / Client Chat</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Direct client communication</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Within 5 minutes</strong> during work hours</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Internal Messages</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Team questions, updates, requests</td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Within 15 minutes</strong></td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Email</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Formal communication (offers, terminations, policy changes)</td><td style="padding:10px;border:1px solid #E2E8F0;">Within 24 hours</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>WhatsApp</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Urgent matters only (outages, emergencies)</td><td style="padding:10px;border:1px solid #E2E8F0;">Immediate</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Google Meet</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Client calls, team meetings, interviews</td><td style="padding:10px;border:1px solid #E2E8F0;">Join on time (late = disrespectful)</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 Communication Don'ts:</strong>
<ul>
<li>NEVER share internal screenshots (Discord channels, Slack conversations, internal docs) externally</li>
<li>NEVER discuss client details, revenue, or internal matters on personal social media</li>
<li>LinkedIn mentions of the company are permitted, but internal info is NOT</li>
<li>Daily standup/progress updates are MANDATORY — missing them is a performance issue</li>
<li>Using personal phone for extended calls during work hours is not acceptable</li>
</ul>
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Other Tools Used at DH:</strong>
<ul>
<li><strong>Jira:</strong> Project management and task tracking</li>
<li><strong>Figma:</strong> Design collaboration</li>
<li><strong>Google Drive:</strong> Document storage and sharing</li>
<li><strong>Shopify Partner Dashboard:</strong> Store management</li>
<li><strong>VS Code:</strong> Development</li>
<li><strong>GitHub:</strong> Code repository</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📈 Career Growth Paths at DH</h3>
<p>Every role at DH has a clear progression path. HR must communicate these during onboarding and reinforced during quarterly reviews. Growth is NOT automatic — it's earned through consistent performance.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Role Track</th>
<th style="padding:10px;text-align:left;">Progression</th>
<th style="padding:10px;text-align:left;">Typical Timeline</th>
<th style="padding:10px;text-align:left;">Promotion Criteria</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Developer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Intern → Junior Dev → Mid Dev → Senior Dev → Lead Dev → Head of Development</td><td style="padding:10px;border:1px solid #E2E8F0;">6mo → 12mo → 18mo → 24mo → varies</td><td style="padding:10px;border:1px solid #E2E8F0;">7.5+ avg score, 0 critical bugs, mentoring juniors, consistent 5-star reviews</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Designer</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Intern → Junior Designer → Mid Designer → Senior Designer → Lead Designer → Creative Head</td><td style="padding:10px;border:1px solid #E2E8F0;">6mo → 12mo → 18mo → 24mo → varies</td><td style="padding:10px;border:1px solid #E2E8F0;">7.5+ avg score, strong portfolio growth, client satisfaction, design system contribution</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Sales</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Sales Intern → Sales Associate → Senior Sales → Sales Lead → Sales Head</td><td style="padding:10px;border:1px solid #E2E8F0;">3mo → 12mo → 18mo → 24mo → varies</td><td style="padding:10px;border:1px solid #E2E8F0;">Consistent target achievement, high conversion rate, upselling track record</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>CSM</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">CSM Intern → Junior CSM → CSM → Senior CSM → CSM Lead → Head of CS</td><td style="padding:10px;border:1px solid #E2E8F0;">3mo → 12mo → 18mo → 24mo → varies</td><td style="padding:10px;border:1px solid #E2E8F0;">4.5+ avg review score, high retention rate, zero client escalations to Delhi</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>PM</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PM Intern → Junior PM → PM → Senior PM → PM Lead → Head of Operations</td><td style="padding:10px;border:1px solid #E2E8F0;">6mo → 12mo → 18mo → 24mo → varies</td><td style="padding:10px;border:1px solid #E2E8F0;">On-time delivery rate >90%, team satisfaction, budget management, process improvements</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>HR</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">HR Intern → HR Associate → HR Manager → Senior HR → HR Head</td><td style="padding:10px;border:1px solid #E2E8F0;">6mo → 12mo → 24mo → varies</td><td style="padding:10px;border:1px solid #E2E8F0;">Hiring quality, retention metrics, training completion rates, zero compliance issues</td></tr>
</tbody>
</table>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📋 Quarterly Review Requirements for Promotion Eligibility:</strong>
<ul>
<li>Performance score of <strong>7.5+ average</strong> over the last 2 quarters (minimum)</li>
<li>Zero active PIPs or disciplinary actions</li>
<li>Completed all assigned training modules with certification</li>
<li>Demonstrated leadership qualities: mentoring, process improvement, client escalation handling</li>
<li>Manager + HR recommendation submitted to Delhi</li>
<li>Delhi final approval required for ALL promotions and associated salary changes</li>
</ul>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ HR Must Know:</strong> When employees ask "When will I get promoted?", the answer is NEVER "after X months." It's ALWAYS "when you consistently meet the promotion criteria." Time-based promotions create entitlement. Performance-based promotions create excellence. DH rewards PERFORMANCE, not tenure.
</div>
</div>

<div class="content-section">
<h3>🔑 Key Takeaways — The DH Deep Dive Summary</h3>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ol>
<li><strong>7 Manifesto Principles</strong> — hire for them, coach them, enforce them</li>
<li><strong>Zero-Tolerance Rules</strong> — no exceptions, no second chances for data breaches, moonlighting, fraud, or harassment</li>
<li><strong>Authority Matrix</strong> — when in doubt, "DELHI TEAM ONLY" (hiring, firing, salary, discounts, refunds, promotions)</li>
<li><strong>Escalation Matrix</strong> — CRITICAL = 30 min, HIGH = 2 hours, MEDIUM = 6 hours, LOW = 24 hours</li>
<li><strong>Incentives</strong> — reward excellence, role-specific, subject to Delhi discretion for sales commission</li>
<li><strong>Penalties</strong> — progressive for attendance, immediate for confidentiality breaches</li>
<li><strong>Communication SLAs</strong> — Client: 5 min, Internal: 15 min, Email: 24 hours</li>
<li><strong>Career Growth</strong> — performance-based promotion, 7.5+ score for eligibility, Delhi approves</li>
<li><strong>Discounts</strong> — The answer is ALWAYS no. DH is premium positioning.</li>
<li><strong>Sales Commission</strong> — Only kicks in after $20K monthly, 1%/2%/3% tiered by order value, credited after delivery</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🤝 Client Relationship Philosophy: "Allies, Not Adversaries"</h3>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<p>At Digital Heroes, we follow a fundamental rule: <strong>The common enemy is the client's PROBLEM, not the client.</strong> Frame every interaction as "us + client vs. the problem." This subtle shift transforms difficult conversations from confrontation into collaboration.</p>
<ul>
<li><strong>Instead of:</strong> "You didn't provide the assets on time" → <strong>Say:</strong> "Let's figure out how we can get the assets sorted so we hit the deadline together"</li>
<li><strong>Instead of:</strong> "That's not in scope" → <strong>Say:</strong> "Great idea — let's discuss how we can include this, possibly in the next phase"</li>
<li>Every client interaction should reinforce: <strong>We are on the same team. We want the same outcome.</strong></li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📱 Communication Channel Rules</h3>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Golden Rule: Never Mix Personal and Work Communications</strong>
<ul>
<li><strong>Personal issues</strong> (sick leave, personal emergencies, salary questions) → <strong>DM only.</strong> Never discuss in group chats.</li>
<li><strong>Work issues</strong> (project updates, task queries, client feedback) → <strong>Group chats.</strong> Keep visibility for the team.</li>
<li>Mixing channels causes confusion, unnecessary drama, and unprofessional impressions.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📐 The Rule of Specificity — 6 Scenarios</h3>
<p>Vague communication is the #1 source of workplace misunderstandings. At DH, we demand specificity. Here are 6 real-world comparisons every employee must learn:</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:15%;">Scenario</th>
<th style="padding:12px;text-align:left;width:40%;">❌ Vague (Unacceptable)</th>
<th style="padding:12px;text-align:left;width:45%;">✅ Specific (Expected)</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Running Late</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"I'll be late"</td><td style="padding:10px;border:1px solid #E2E8F0;">"I'll be 15 minutes late, reaching by 9:30"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Task Acknowledgment</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"OK"</td><td style="padding:10px;border:1px solid #E2E8F0;">"Understood. Starting the homepage redesign now. ETA: 4 PM today"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Deadline Risk</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"Might not finish"</td><td style="padding:10px;border:1px solid #E2E8F0;">"Task is 70% done. Need 3 more hours. Can deliver by 8 PM"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Leave Request</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"Need leave tomorrow"</td><td style="padding:10px;border:1px solid #E2E8F0;">"Requesting CL for March 22. Coverage arranged with [name]. No pending deliverables"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Reporting Bugs</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"Something's broken"</td><td style="padding:10px;border:1px solid #E2E8F0;">"Checkout page returning 500 error on mobile Safari. Screenshot attached. Started at 2 PM"</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Owning Mistakes</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">"It wasn't my fault"</td><td style="padding:10px;border:1px solid #E2E8F0;">"I missed the deadline because I underestimated the task. Here's my plan to prevent this: [steps]"</td></tr>
</tbody>
</table>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ HR Action:</strong> Share this table during onboarding. Pin it in the team Discord. Reference it in performance reviews when communication quality is lacking. Specificity is not optional — it is a core DH skill.
</div>
</div>

<div class="content-section">
<h3>👔 Professionalism Standards</h3>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ Professionalism DOs:</strong>
<ul>
<li>Use <strong>proper grammar and spelling</strong> in all written communication — especially client-facing messages</li>
<li><strong>Confirm understanding</strong> after receiving tasks: repeat back what you understood</li>
<li><strong>Give ETAs</strong> for every task, even if approximate. "I'll get back to you by 3 PM" is always better than silence</li>
<li><strong>Update proactively</strong> — if something changes (timeline, scope, blocker), inform BEFORE someone has to ask</li>
</ul>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 Professionalism DONTs:</strong>
<ul>
<li><strong>No slang or casual language with clients</strong> — even if the client is friendly. You represent DH.</li>
<li><strong>No arguing publicly</strong> — if you disagree with a colleague, take it to DM or a call. Never in group chats.</li>
<li><strong>No leaving messages on read</strong> — always acknowledge receipt, even if the full answer takes time. A simple "Noted, will respond by [time]" is enough.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📢 Social Media Policy</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">🚫 NOT Allowed</th>
<th style="padding:10px;text-align:left;">✅ Encouraged</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sharing internal screenshots (Discord, Slack, internal docs)</td><td style="padding:10px;border:1px solid #E2E8F0;">Sharing learnings and professional achievements</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Mentioning client names or projects without explicit permission</td><td style="padding:10px;border:1px solid #E2E8F0;">Mentioning Digital Heroes on LinkedIn professionally</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Sharing revenue data, internal strategies, or pricing</td><td style="padding:10px;border:1px solid #E2E8F0;">Sharing general industry knowledge and career growth stories</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Posting anything that could damage DH reputation</td><td style="padding:10px;border:1px solid #E2E8F0;">Building your personal brand while crediting the DH experience</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>💸 The Income Formula & Culture Perks</h3>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 The DH Income Formula:</strong><br><br>
<p style="text-align:center; font-size:1.3em;"><strong>Income = Happy Clients × Skill × Speed</strong></p>
<p>This is not a metaphor — it is literally how compensation grows at DH. More happy clients means more revenue. More skill means higher-value work. More speed means higher throughput. All three together multiply your earning potential. Communicate this formula to every new hire during onboarding.</p>
</div>

<h4>🎉 Culture Perks at Digital Heroes</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Perk</th>
<th style="padding:10px;text-align:left;">Details</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Offsite Trips</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Twice per year, fully company-paid</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Monthly Outing Budget</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">₹500-1,000 per person per month</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Birthday Perk</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Half-day off + cake</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Learning Hours</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">4 hours per week dedicated to learning</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Course Reimbursement</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Up to ₹5,000 per year for approved courses</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Weekly Training Sessions</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Internal knowledge sharing every week</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🔄 Internal Mobility & Salary Confidentiality</h3>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🔄 Internal Mobility:</strong> Employees CAN switch departments at DH. The process: discuss with HR + both current and target department managers. If the employee has the aptitude and both teams agree, the transfer can happen. DH encourages growth in any direction — not just vertical promotion.
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 Salary Confidentiality — Critical Detail:</strong><br>
Sharing salary information results in termination for <strong>BOTH parties</strong> — the person who shares AND the person who receives the information. This is not a one-sided rule. If someone tells you their salary, you are obligated to report it to HR and NOT spread it further. If you listen and share it with others, you are equally liable. HR must communicate this dual-accountability clearly during onboarding.
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li><strong>7 Manifesto Principles</strong> — hire for them, coach them, enforce them. They are non-negotiable.</li>
        <li><strong>Zero-Tolerance Rules</strong> — no exceptions for data breaches, moonlighting, fraud, harassment, or substance abuse</li>
        <li><strong>Authority Matrix</strong> — when in doubt, "DELHI TEAM ONLY" (hiring, firing, salary, discounts, refunds, promotions)</li>
        <li><strong>Client Philosophy</strong> — "Allies, Not Adversaries." The enemy is the problem, never the client.</li>
        <li><strong>Rule of Specificity</strong> — vague communication is unacceptable. Every message must include WHO, WHAT, WHEN.</li>
        <li><strong>Salary Confidentiality</strong> — BOTH the sharer and receiver get terminated. Dual accountability.</li>
        <li><strong>Income = Happy Clients × Skill × Speed</strong> — this is the formula every employee should internalize</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">As the guardian of DH culture, you are not just enforcing rules — you are building the foundation that every employee stands on. When you enforce zero-tolerance policies, you protect every person in the company. When you teach the Rule of Specificity, you prevent a thousand misunderstandings. Culture does not maintain itself — it needs a champion, and that champion is you.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The strength of the team is each individual member. The strength of each member is the team." — Phil Jackson</p>
    </div>
</div>
`;

const task7Quiz = [
    { q: "According to DH Manifesto Principle 1 ('Talent is Irrelevant, Volume is Everything'), what matters most when evaluating a candidate?", o: ["Their university degree and certifications", "Their accumulated output and learning ability", "Their years of work experience", "Their IQ test score"], c: 1 },
    { q: "Which DH Manifesto principle states that how you respond under pressure matters more than cognitive ability?", o: ["Talent is Irrelevant, Volume is Everything", "Instant Reply = Respect", "Emotional Intelligence > IQ", "Protect Your Mindset"], c: 2 },
    { q: "What is a zero-tolerance violation that results in IMMEDIATE TERMINATION + LEGAL ACTION at DH?", o: ["Sharing client store credentials with someone outside DH", "Missing 3 EOD reports in a week", "Getting a 3-star client review", "Being late to work 5 times in a month"], c: 0 },
    { q: "In the Authority Matrix, who has the power to approve discounts on DH packages?", o: ["CSM for up to 10%", "PM for up to 15%", "Sales Lead for up to 20%", "DELHI TEAM ONLY — but DH NEVER gives discounts (premium positioning)"], c: 3 },
    { q: "A live Shopify store breaks and checkout stops working. According to the Escalation Matrix, what is the maximum resolution time?", o: ["30 minutes", "2 hours", "4 hours", "24 hours"], c: 1 },
    { q: "When do sales per-order commissions kick in at DH?", o: ["When monthly sales exceed $20,000", "From the first order of the month", "When monthly sales exceed $10,000", "When monthly sales exceed $50,000"], c: 0 },
    { q: "What commission rate applies to a single order worth $3,500 (when monthly sales are above $20K)?", o: ["1% per order", "3% per order", "5% per order", "2% per order"], c: 3 },
    { q: "What is the HR-specific penalty for a 'bad hire' (new employee terminated during probation)?", o: ["Verbal warning only", "-₹500", "-₹2,000", "-₹5,000"], c: 2 },
    { q: "What is the response SLA for internal messages at DH?", o: ["Within 5 minutes", "Within 15 minutes", "Within 30 minutes", "Within 1 hour"], c: 1 },
    { q: "What is the CSM-specific penalty for a client being lost (client churns)?", o: ["-₹2,500 + mandatory review", "-₹500 + verbal warning", "-₹1,000 + coaching", "-₹5,000 + PIP"], c: 0 },
    { q: "What is the maximum goodwill gesture amount a CSM can approve without Delhi approval?", o: ["$20", "$100", "$200", "$50"], c: 3 },
    { q: "What happens when a PM wants to accept a rush order from a client?", o: ["They can accept immediately without conditions", "They must always get Delhi approval first", "They can accept with a 50% rush surcharge if team is below 80% capacity", "Rush orders are never accepted at DH"], c: 2 },
    { q: "What minimum average performance score is required for promotion eligibility at DH?", o: ["7.5+ over 2 quarters", "5.0+ over 2 quarters", "6.0+ over 3 quarters", "8.0+ over 4 quarters"], c: 0 },
    { q: "According to the penalty structure, what happens after 3 consecutive months of a performance score below 5.0?", o: ["Performance Improvement Plan (PIP)", "Salary reduction of 10%", "Transfer to a different team", "Termination"], c: 3 },
    { q: "When is a sales commission credited to the employee's account?", o: ["Immediately when the order is booked", "1 month after order DELIVERY", "At the end of the quarter", "At the end of the month the order was placed"], c: 1 }
];

const task8Content = `
<h2>📊 TASK 8: HR Analytics, AI Tools & Practical Scenarios</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">The best HR professionals do not rely on gut feeling — they rely on data, tools, and frameworks. This module transforms you from a reactive HR person into a proactive, data-driven strategist. You will learn to measure what matters, leverage AI to 10x your productivity, and handle real-world scenarios with confidence and consistency.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"Without data, you're just another person with an opinion." — W. Edwards Deming</p>
</div>

<div class="content-section">
<h3>📈 Part 1: 6 Key HR Metrics Every HR Must Track</h3>
<p>You can't improve what you don't measure. At DH, HR isn't just about "people skills" — it's about DATA-DRIVEN decisions. Here are the 6 metrics that define how well you're performing as HR, complete with formulas, DH benchmarks, and what to do when numbers go wrong.</p>

<h4>1. Time to Hire</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Formula:</strong> Date of Offer Acceptance - Date Job Posted = Time to Hire<br><br>
<strong>DH Target:</strong> Under <strong>14 days</strong><br>
<strong>Industry Average:</strong> 36 days<br><br>
<strong>Why Faster is Better:</strong>
<ul>
<li>Every day a position is empty = lost revenue. A developer seat earns $3,000-5,000/month. An empty seat for 30 days = $3,000-5,000 in lost revenue.</li>
<li>The best candidates get multiple offers. If your process takes 30 days, they'll accept a competitor's offer on day 15.</li>
<li>Extended hiring creates burnout for existing team members covering the workload.</li>
</ul>
<strong>How to Stay Under 14 Days:</strong>
<ul>
<li>Day 1-2: Post JD on all channels simultaneously (not one at a time)</li>
<li>Day 2-5: Screen resumes as they come in (don't wait to "collect a batch")</li>
<li>Day 5-8: Conduct interviews within 48 hours of shortlisting</li>
<li>Day 8-10: Evaluate trial tasks within 24 hours of submission</li>
<li>Day 10-14: Extend offer and close the candidate</li>
</ul>
<strong>Red Flag:</strong> If your average is consistently above 14 days, investigate: slow posting approval? Not enough sourcing channels? Interview scheduling delays? Decision paralysis?
</div>

<h4>2. Cost per Hire</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Formula:</strong> (Internal Costs + External Costs) / Number of Hires = Cost per Hire<br><br>
<strong>Internal Costs Include:</strong>
<ul>
<li>HR salary allocation (hours spent on hiring × hourly rate)</li>
<li>Manager/interviewer time for interviews and evaluations</li>
<li>Tool costs (ATS, assessment platforms)</li>
<li>Onboarding costs (training, equipment setup)</li>
</ul>
<strong>External Costs Include:</strong>
<ul>
<li>Job posting fees (Naukri, Internshala, LinkedIn)</li>
<li>Recruitment agency fees (if applicable)</li>
<li>Referral bonuses</li>
<li>Background verification costs</li>
</ul>
<strong>DH Target:</strong> Under <strong>₹10,000</strong> per hire<br><br>
<strong>Best Channels by Cost (Cheapest to Most Expensive):</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Channel</th>
<th style="padding:10px;text-align:left;">Avg Cost per Hire</th>
<th style="padding:10px;text-align:left;">Quality Rating</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Employee Referrals</td><td style="padding:10px;border:1px solid #E2E8F0;">₹1,000-3,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Highest (pre-vetted culturally)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Social Media (LinkedIn organic, Instagram)</td><td style="padding:10px;border:1px solid #E2E8F0;">₹2,000-5,000</td><td style="padding:10px;border:1px solid #E2E8F0;">High (targeted reach)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Naukri / Internshala</td><td style="padding:10px;border:1px solid #E2E8F0;">₹5,000-10,000</td><td style="padding:10px;border:1px solid #E2E8F0;">Medium (volume, needs filtering)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">LinkedIn Premium / Recruiter</td><td style="padding:10px;border:1px solid #E2E8F0;">₹10,000-20,000</td><td style="padding:10px;border:1px solid #E2E8F0;">High (for senior roles only)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Recruitment Agencies</td><td style="padding:10px;border:1px solid #E2E8F0;">₹25,000-50,000+</td><td style="padding:10px;border:1px solid #E2E8F0;">Variable (only for niche/urgent roles)</td></tr>
</tbody>
</table>
<strong>Example Calculation:</strong> Last quarter — Internshala premium ₹15,000, LinkedIn posting ₹8,000, HR time (80 hours x ₹300/hr) = ₹24,000, interviewer time (40 hours x ₹500/hr) = ₹20,000. Total hires: 6. Cost per hire = (₹15,000 + ₹8,000 + ₹24,000 + ₹20,000) / 6 = <strong>₹11,167 per hire</strong>. This is above the ₹10K target — investigate which channel to optimize.
</div>

<h4>3. Offer Acceptance Rate</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Formula:</strong> (Offers Accepted / Offers Made) x 100 = Offer Acceptance Rate<br><br>
<strong>DH Target:</strong> Above <strong>85%</strong><br><br>
<strong>If Your Rate is Low, Diagnose:</strong>
<ul>
<li><strong>Salary not competitive?</strong> → Research market rates on Glassdoor, AmbitionBox. DH doesn't need to be the highest payer, but must be within 10% of market.</li>
<li><strong>Slow process?</strong> → If it takes you 3 weeks from interview to offer, candidates have already accepted elsewhere. Aim for offer within 48 hours of final interview.</li>
<li><strong>Poor candidate experience?</strong> → Were interviews rescheduled? Did candidates wait 30+ minutes? Were interviewers unprepared? Every touchpoint matters.</li>
<li><strong>Unclear value proposition?</strong> → Are you selling DH's growth story, training investment, and career path during interviews? Salary is one factor — growth opportunity is another.</li>
</ul>
</div>

<h4>4. Turnover Rate (Attrition)</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Formula:</strong> (Employees Who Left / Average Headcount) x 100 = Turnover Rate<br><br>
<strong>DH Target:</strong> Under <strong>15% annually</strong><br><br>
<strong>Voluntary vs. Involuntary Breakdown:</strong>
<ul>
<li><strong>Voluntary</strong> (employee chose to leave): Concerns about salary, growth, management, culture. HIGH voluntary turnover = HR problem.</li>
<li><strong>Involuntary</strong> (company terminated): Performance issues, misconduct. Some involuntary turnover is HEALTHY — it means you're maintaining standards.</li>
</ul>
<strong>Cost of Turnover:</strong> Industry estimates say replacing an employee costs <strong>50-200% of their annual salary</strong>. For a ₹25,000/month employee, that's ₹1.5L-6L when you factor in lost productivity, hiring costs, training costs, and knowledge loss.<br><br>
<strong>DH Action Items When Turnover is High:</strong>
<ul>
<li>Conduct exit interviews for EVERY departure — look for patterns</li>
<li>Are people leaving one specific team/manager? That's a management problem, not an HR problem</li>
<li>Are people leaving after 3-6 months? That's an onboarding/expectation problem</li>
<li>Are people leaving for salary? Research market rates and present data to Delhi</li>
</ul>
</div>

<h4>5. New Hire Retention (90-Day)</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Formula:</strong> (New Hires Still Employed at 90 Days / Total New Hires) x 100 = 90-Day Retention<br><br>
<strong>DH Target:</strong> Above <strong>80%</strong><br><br>
<strong>If Retention is Low, Diagnose:</strong>
<ul>
<li><strong>Bad screening?</strong> → Are trial tasks actually testing relevant skills? Are you checking references?</li>
<li><strong>Poor onboarding?</strong> → Is the new hire left to figure things out alone? No buddy? No structured 30-60-90?</li>
<li><strong>Unrealistic expectations?</strong> → Did you oversell the role during hiring? If the job is different from what was promised, people leave fast.</li>
<li><strong>Manager issues?</strong> → Is the direct manager accessible, supportive, and providing feedback?</li>
</ul>
<strong>DH Best Practice:</strong> Schedule 3 check-ins with every new hire: Day 7 (how's the first week?), Day 30 (any concerns?), Day 60 (are you on track?). Catching problems early prevents Day-89 resignations.
</div>

<h4>6. Employee Satisfaction Score</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Measurement:</strong> Anonymous quarterly survey<br>
<strong>DH Target:</strong> <strong>4.0+ out of 5.0</strong><br><br>
<strong>Key Survey Questions:</strong>
<ol>
<li>On a scale of 1-5, how satisfied are you with your role? (Job satisfaction)</li>
<li>On a scale of 1-5, how would you rate your relationship with your manager? (Manager quality)</li>
<li>On a scale of 1-5, how confident are you about your growth opportunities here? (Career growth)</li>
<li>On a scale of 1-5, how fairly do you feel you are compensated? (Compensation perception)</li>
<li>On a scale of 1-5, would you recommend DH as a workplace to a friend? (eNPS indicator)</li>
</ol>
<strong>What to Do with Results:</strong>
<ul>
<li>Score 4.5+: Team is thriving. Share positive feedback with Delhi. Maintain current practices.</li>
<li>Score 3.5-4.4: Room for improvement. Identify lowest-scoring questions and create action plans.</li>
<li>Score below 3.5: RED ALERT. Schedule 1:1s with team members. Identify systemic issues. Escalate to Delhi with proposed solutions.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 HR Dashboard Guide</h3>
<p>A dashboard turns raw data into actionable insights. Here's what to track and when.</p>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Frequency</th>
<th style="padding:10px;text-align:left;">What to Track</th>
<th style="padding:10px;text-align:left;">Red Flag If...</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Weekly</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Open positions count, interview pipeline (candidates per stage), attendance summary, pending onboarding tasks</td><td style="padding:10px;border:1px solid #E2E8F0;">Any position open >14 days; interview pipeline has 0 candidates for an open role</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Monthly</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Hires made, exits, time-to-hire trend, cost per hire, new joiner count, pulse survey results, training completion rate</td><td style="padding:10px;border:1px solid #E2E8F0;">Exits > hires for 2+ months; time-to-hire trending upward; training completion <80%</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Quarterly</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Attrition rate, 90-day retention, offer acceptance trend, channel effectiveness, performance review completion, salary benchmarking</td><td style="padding:10px;border:1px solid #E2E8F0;">Attrition >15% annualized; 90-day retention <80%; offer acceptance <85%</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ How to Build a Simple HR Dashboard (Google Sheets):</strong>
<ol>
<li><strong>Sheet 1 — Hiring Pipeline:</strong> Columns: Position, Date Posted, Candidates Applied, Screened, Interviewed, Offered, Accepted, Start Date. Use conditional formatting: green if filled <14 days, yellow if 14-21, red if >21.</li>
<li><strong>Sheet 2 — Employee Master:</strong> Name, Role, Department, Join Date, Manager, Salary, Status (Active/On PIP/Notice Period/Exited). Auto-calculate headcount and departmental breakdown.</li>
<li><strong>Sheet 3 — Monthly Metrics:</strong> Time to Hire, Cost per Hire, Hires, Exits, Retention. Add sparkline charts for trend visualization.</li>
<li><strong>Sheet 4 — Survey Results:</strong> Track quarterly satisfaction scores. Chart trends over time. Flag any question dropping below 3.5.</li>
</ol>
</div>

<h4>Predictive Analytics: Spotting Attrition Before It Happens</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚩 Warning Signs of Imminent Resignation:</strong>
<ul>
<li><strong>Missed EODs:</strong> Employee who was diligent starts missing 2-3 EODs per week</li>
<li><strong>Reduced Communication:</strong> Previously active team member goes quiet on Discord — fewer messages, shorter responses</li>
<li><strong>Declining Quality:</strong> Sudden increase in revision requests or client complaints from a previously reliable person</li>
<li><strong>Clock-Watching:</strong> Logging off at exactly shift end when they used to stay late occasionally</li>
<li><strong>Disengagement:</strong> Stops participating in team meetings, gives one-word answers, skips optional events</li>
<li><strong>LinkedIn Activity:</strong> Updated profile photo, new headline, connections with recruiters (yes, check periodically)</li>
<li><strong>Taking More Leaves:</strong> Sudden increase in "sick days" — likely interview days (especially Mondays/Fridays)</li>
<li><strong>Negativity Increase:</strong> Complaining about things they previously accepted without issue</li>
</ul>
<p><strong>Action Plan:</strong> When you spot 3+ signs, schedule a casual 1:1 "check-in" — NOT "exit prevention" (that spooks them). Say: "Hey, I noticed you've seemed a bit quiet recently. How are things going? Anything I can help with?" Listen more than you talk. If they're considering leaving, understanding their reasons gives you a chance to address the issue before it's too late.</p>
</div>
</div>

<div class="content-section">
<h3>🤖 Part 2: AI Tools for Modern HR</h3>
<p>AI isn't replacing HR — it's making HR 10x faster. But AI is a TOOL, not a replacement for human judgment. Here are 20+ ready-to-use prompts organized by HR function, plus critical ethics rules.</p>

<h4>📝 JD Writing Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 1 — Complete JD:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write a job description for a Shopify Developer at a web development agency. Include: responsibilities, required skills, nice-to-haves, tools used, salary range ₹15K-35K. Tone: professional but approachable."
</p>
<strong style="color:#000;">Prompt 2 — Title Optimization:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Rewrite this job title to be more searchable on LinkedIn/Naukri. Current title: [paste title]. Suggest 3 alternatives that will attract more relevant candidates while accurately describing the role."
</p>
<strong style="color:#000;">Prompt 3 — JD Review:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Review this job description for a [role] position. Check for: gender-biased language, unrealistic requirements, missing information, clarity issues, and SEO optimization for job boards. Suggest improvements."
</p>
</div>

<h4>🔍 Screening & Interview Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 4 — Resume Analysis:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Analyze this resume for a PM position. Rate it 1-10 on: relevance, experience quality, red flags, overall fit. Explain your reasoning for each score."
</p>
<strong style="color:#000;">Prompt 5 — Interview Questions:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Generate 5 behavioral interview questions for a candidate applying for a CSM role at an e-commerce agency. For each question, include: the competency being tested, what a strong answer looks like, and red flags to watch for."
</p>
<strong style="color:#000;">Prompt 6 — Technical Assessment:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Create a practical assessment task for a Shopify Developer candidate. Task should take 2-3 hours, test Liquid, CSS, JavaScript skills, and involve customizing a product page. Include evaluation rubric."
</p>
<strong style="color:#000;">Prompt 7 — Reference Check Questions:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Generate 8 reference check questions for a [role] candidate. Focus on: work ethic, teamwork, response to feedback, reliability, and any concerns. Include follow-up probing questions."
</p>
</div>

<h4>✉️ Email Template Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 8 — Rejection Email:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write a rejection email that is respectful and encourages future applications. The candidate interviewed for a [role] position but was not selected because [reason]. Keep it brief, warm, and professional."
</p>
<strong style="color:#000;">Prompt 9 — Follow-up Email:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write a follow-up email to a candidate who hasn't responded in 3 days after we sent the interview scheduling link. Tone: friendly but professional. Include a sense of urgency without being pushy."
</p>
<strong style="color:#000;">Prompt 10 — Offer Letter Email:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Draft an offer letter email for a Shopify Developer, salary ₹25K/month, start date [date], reporting to [manager]. Include: role summary, compensation, joining documents needed, and next steps. Excited but professional tone."
</p>
<strong style="color:#000;">Prompt 11 — Onboarding Welcome:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write a welcome email for a new [role] joining Digital Heroes. Include: warm welcome, first-day logistics, tool setup links, who they'll report to, and what to expect in their first week. Make it feel exciting, not corporate."
</p>
</div>

<h4>📋 Policy & Performance Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 12 — WFH Policy:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Draft a work-from-home policy for a 20-person web development agency. Include: eligibility, max WFH days, request process, expectations (response times, availability), and consequences for violations."
</p>
<strong style="color:#000;">Prompt 13 — SBI Feedback:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write SBI (Situation-Behavior-Impact) feedback for a developer who delivered 3 projects late this month. Include: specific situations, the behavior observed, the impact on clients and team, and expected improvement."
</p>
<strong style="color:#000;">Prompt 14 — PIP Draft:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Draft a PIP outline for an employee scoring 4.2 on a 10-point performance scale. Include: current performance summary, specific areas for improvement with measurable goals, 30-day timeline, support provided, and consequences."
</p>
<strong style="color:#000;">Prompt 15 — Onboarding Checklist:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Create a checklist for onboarding a new developer including: tools to install, accounts to create, access permissions needed, training modules to complete, team introductions, and 30-60-90 day milestones."
</p>
</div>

<h4>🚪 Offboarding Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 16 — Knowledge Transfer Template:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Create a knowledge transfer template for a departing project manager. Include: active projects list, client details, team member responsibilities, ongoing issues, tool access, and documentation locations."
</p>
<strong style="color:#000;">Prompt 17 — Exit Interview Summary:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Summarize these exit interview notes into an actionable report. Categorize feedback into: compensation, management, growth, culture, and workload. Identify top 3 action items for leadership. Notes: [paste notes]"
</p>
<strong style="color:#000;">Prompt 18 — Professional Reference:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Write a professional reference for a top-performing designer who worked at Digital Heroes for 18 months. Highlight: design quality, client feedback, team collaboration, and growth during tenure."
</p>
</div>

<h4>📊 Analytics & Strategy Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 19 — Attrition Analysis:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Analyze these exit interview themes from our last 6 departures: [paste themes]. Identify the root causes of attrition and suggest 5 specific, implementable retention strategies for a small agency."
</p>
<strong style="color:#000;">Prompt 20 — Salary Benchmarking:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Based on current market data, what is the competitive salary range for a [role] with [X years experience] in [city] at a digital agency? Consider: base salary, variable pay, benefits. Cite sources if available."
</p>
<strong style="color:#000;">Prompt 21 — Engagement Ideas:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Suggest 10 low-cost employee engagement activities for a 20-person remote/hybrid team at a web agency. Budget: under ₹5,000/month. Must be inclusive and not require physical presence. Include: estimated cost, effort, expected impact."
</p>
</div>

<h4>🔍 Advanced HR SOP Prompts</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong style="color:#000;">Prompt 22 — Resume vs JD Evaluation:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Evaluate this resume against our JD for [role]: [paste resume]. Score the candidate 1-10 on relevance, skills match, experience quality, and cultural fit. Highlight gaps and strengths."
</p>
<strong style="color:#000;">Prompt 23 — Behavioral Interview Questions:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Generate 10 behavioral interview questions for a [role] at a Shopify agency. For each question, specify: the competency tested, what a strong STAR response looks like, and red flags to watch for."
</p>
<strong style="color:#000;">Prompt 24 — STAR Response Scoring:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Score this candidate's STAR response on a scale of 1-10: [paste answer]. Evaluate: clarity of situation, specificity of task, quality of action taken, measurability of result. Suggest follow-up probing questions."
</p>
<strong style="color:#000;">Prompt 25 — PIP Document Generation:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Draft a performance improvement plan for an employee scoring 4.2/10 on code quality. Include: current performance summary, 3 specific improvement areas with measurable targets, weekly check-in schedule, 30-day timeline, support resources, and consequences of not meeting targets."
</p>
<strong style="color:#000;">Prompt 26 — 30-60-90 Day Onboarding Plan:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Create a 30-60-90 day onboarding plan for a new [role] at a Shopify agency. Include: learning milestones, tool setup checklist, shadowing schedule, first independent task, performance expectations at each stage, and buddy system integration."
</p>
<strong style="color:#000;">Prompt 27 — Exit Interview Analysis:</strong>
<p style="background:#1E293B;color:#E2E8F0;padding:12px;border-radius:6px;font-family:monospace;font-size:0.9em;">
"Analyze these exit interview notes and identify the top 3 retention risks: [paste notes]. For each risk, provide: root cause analysis, affected team/department, urgency level (1-5), and 2 specific actionable recommendations."
</p>
</div>
</div>

<div class="content-section">
<h3>⚖️ AI Ethics for HR</h3>
<p>AI is powerful, but with power comes responsibility. Here are the non-negotiable rules for using AI in HR at DH.</p>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>🚫 NEVER Do These with AI:</strong>
<ul>
<li><strong>NEVER paste employee PII into AI tools:</strong> No Aadhaar numbers, PAN cards, bank details, salary figures, medical records, or personal contact information</li>
<li><strong>NEVER send raw AI output without human review:</strong> AI can draft, but a human must review, customize, and approve before anything goes to an employee or candidate</li>
<li><strong>NEVER use AI to make final hiring/firing decisions:</strong> AI can assist with screening, but the HUMAN makes the decision. Always.</li>
<li><strong>NEVER trust AI for legal/compliance advice:</strong> AI doesn't know Indian labor law nuances. For legal questions, consult the actual policy or legal counsel.</li>
<li><strong>NEVER paste confidential company data:</strong> No revenue numbers, client lists, internal strategies, or proprietary information into any AI tool</li>
</ul>
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>✅ AI Best Practices for HR:</strong>
<ul>
<li><strong>Use AI as a draft generator, human as editor:</strong> AI writes first draft, you customize for DH context and tone</li>
<li><strong>Always review for bias:</strong> If AI training data was biased, AI output will be biased. Check JDs for gender-coded language, resume screening for name/background bias</li>
<li><strong>Document AI usage:</strong> Keep a log of what AI tools you use, for what tasks, and how you modified the output</li>
<li><strong>Test AI outputs:</strong> Before using an AI-generated interview question template, test it on a colleague. Does it actually test what you need?</li>
<li><strong>Stay updated:</strong> AI tools evolve fast. What ChatGPT couldn't do 6 months ago, it might do now. Periodically explore new capabilities</li>
</ul>
</div>

<h4>ChatGPT vs Claude for HR Tasks</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;text-align:left;">Use Case</th>
<th style="padding:10px;text-align:left;">ChatGPT</th>
<th style="padding:10px;text-align:left;">Claude</th>
<th style="padding:10px;text-align:left;">Recommendation</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Creative writing (JDs, emails)</td><td style="padding:10px;border:1px solid #E2E8F0;">Strong</td><td style="padding:10px;border:1px solid #E2E8F0;">Strong</td><td style="padding:10px;border:1px solid #E2E8F0;">Either works well</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Long document analysis (policies, handbooks)</td><td style="padding:10px;border:1px solid #E2E8F0;">Good</td><td style="padding:10px;border:1px solid #E2E8F0;">Excellent</td><td style="padding:10px;border:1px solid #E2E8F0;">Claude — handles longer context better</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Nuanced reasoning (PIP, conflict scenarios)</td><td style="padding:10px;border:1px solid #E2E8F0;">Good</td><td style="padding:10px;border:1px solid #E2E8F0;">Excellent</td><td style="padding:10px;border:1px solid #E2E8F0;">Claude — more careful, nuanced analysis</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Brainstorming (engagement ideas, solutions)</td><td style="padding:10px;border:1px solid #E2E8F0;">Excellent</td><td style="padding:10px;border:1px solid #E2E8F0;">Good</td><td style="padding:10px;border:1px solid #E2E8F0;">ChatGPT — more creative ideation</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;">Data/spreadsheet tasks</td><td style="padding:10px;border:1px solid #E2E8F0;">Good (with Code Interpreter)</td><td style="padding:10px;border:1px solid #E2E8F0;">Limited</td><td style="padding:10px;border:1px solid #E2E8F0;">ChatGPT — can process files directly</td></tr>
</tbody>
</table>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Golden Rule for Both:</strong> NEVER paste confidential employee data into either tool. Use anonymized or fictional data when you need AI to help with sensitive scenarios. "Draft a PIP for Employee X who missed 4 deadlines" — NOT "Draft a PIP for Rahul Sharma, Developer, Employee ID DH-0234."
</div>
</div>

<div class="content-section">
<h3>📋 HR Reporting Templates</h3>
<p>Consistent reporting demonstrates HR's value to leadership. Here's what to include in each report.</p>

<h4>📅 Weekly Report</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Submit every Friday by 5 PM:</strong>
<ul>
<li><strong>Hiring Pipeline Status:</strong> Open positions, candidates at each stage, interviews scheduled next week</li>
<li><strong>Attendance Summary:</strong> Late arrivals, unplanned leaves, WFH count</li>
<li><strong>Pending Tasks:</strong> Onboarding items incomplete, documents pending, payroll items</li>
<li><strong>Issues/Escalations:</strong> Any people-related issues that need attention</li>
</ul>
</div>

<h4>📅 Monthly Report</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Submit by 5th of next month:</strong>
<ul>
<li><strong>Hires Made:</strong> Names, roles, start dates, sourcing channel</li>
<li><strong>Exits:</strong> Names, roles, reason (voluntary/involuntary), exit interview summary</li>
<li><strong>Time-to-Hire:</strong> Average days per position filled this month</li>
<li><strong>Cost per Hire:</strong> Total recruitment spend / hires made</li>
<li><strong>Training Completion:</strong> % of team with completed training modules</li>
<li><strong>Satisfaction Score:</strong> Latest pulse survey results (if applicable)</li>
<li><strong>Key Wins:</strong> Quality hires, process improvements, retention saves</li>
</ul>
</div>

<h4>📅 Quarterly Report</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Submit by 10th of the month following quarter end:</strong>
<ul>
<li><strong>Retention Trends:</strong> 90-day retention, overall attrition rate, voluntary vs involuntary split</li>
<li><strong>Channel Effectiveness:</strong> Which sourcing channel produced the best hires (quality + retention)?</li>
<li><strong>Salary Benchmarking:</strong> How do DH salaries compare to market? Any roles significantly below market?</li>
<li><strong>Performance Review Summary:</strong> Average team scores, top performers, employees on PIP</li>
<li><strong>Improvement Initiatives:</strong> What changes were implemented and their impact</li>
<li><strong>Next Quarter Plan:</strong> Anticipated hires, training goals, process improvement targets</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎯 Part 3: Practical Scenarios — Real Decisions You'll Face</h3>
<p>Theory is important, but HR is learned by DOING. Work through these 12 scenarios — each represents a real situation you will face at DH. For each one, think about what you'd do BEFORE reading the recommended approach.</p>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💡 Decision Framework for Every Scenario:</strong>
<ol>
<li><strong>ASSESS:</strong> What exactly happened? Get facts, not opinions. Talk to all parties involved.</li>
<li><strong>CLASSIFY:</strong> Is this a policy issue, performance issue, conflict issue, or emergency?</li>
<li><strong>AUTHORITY:</strong> Do you have authority to resolve this, or does it need escalation to Delhi?</li>
<li><strong>ACT:</strong> Take action within the appropriate timeframe (escalation matrix).</li>
<li><strong>DOCUMENT:</strong> Record everything — dates, conversations, decisions, outcomes.</li>
<li><strong>FOLLOW UP:</strong> Check back at 1 week and 1 month. Is the issue truly resolved?</li>
</ol>
</div>

<h4>Scenario 1: Top Performer Demands 50% Raise or Leaves</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> Your best developer says: "I've got an offer for 50% more. Match it or I'm leaving next Friday."<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Don't panic or make emotional promises.</strong> Say: "I appreciate you being upfront. Let me understand the full picture."</li>
<li><strong>Ask questions:</strong> What's the full package? (Sometimes "50% more" is base salary only — no benefits, no growth). What do they value beyond salary? (Some people stay for growth, team, flexibility).</li>
<li><strong>Check authority:</strong> Salary decisions = DELHI TEAM ONLY. You cannot promise anything.</li>
<li><strong>Escalate to Delhi with data:</strong> Employee performance score, revenue they generate, cost of replacing them, market salary data.</li>
<li><strong>Delhi decides:</strong> Counter-offer? Partial match with non-monetary benefits? Let them go gracefully?</li>
<li><strong>If they leave:</strong> Ensure full KT, exit interview, graceful departure. Don't burn bridges — top performers sometimes come back.</li>
</ol>
<strong>Key Lesson:</strong> Never match a counter-offer out of panic. If you match today, they'll do the same thing in 6 months. Counter-offers should only be made when the employee is genuinely undercompensated AND a top performer.
</div>

<h4>Scenario 2: Personal Conflict Affecting Team Work</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> Two team members had a personal disagreement outside work. Now they refuse to collaborate on projects, and the PM is struggling to assign tasks.<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Talk to each person separately first.</strong> Understand their perspective without the other present.</li>
<li><strong>Set the boundary:</strong> "Personal issues cannot affect work output. At DH, team collaboration is non-negotiable."</li>
<li><strong>Mediate if needed:</strong> Bring both together, set ground rules (no personal attacks, focus on work), find a working arrangement.</li>
<li><strong>Document the conversation and the agreement.</strong></li>
<li><strong>Follow up at 1 week and 1 month.</strong> If collaboration doesn't improve, issue written warnings to both.</li>
<li><strong>Escalate if persistent:</strong> If after warnings the situation continues, escalate to Delhi — one or both may need reassignment or further action.</li>
</ol>
</div>

<h4>Scenario 3: New Hire Struggling at Week 3</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> A new content writer joined 3 weeks ago. Their work quality is below expectations — grammatical errors, wrong tone, missing deadlines.<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Schedule a 1:1 check-in.</strong> Start with "How are you finding things so far?" before addressing performance.</li>
<li><strong>Diagnose the root cause:</strong> Is it a training gap? (Give more resources). Is it unclear expectations? (Re-clarify standards with examples). Is it a fit issue? (Wrong role entirely).</li>
<li><strong>Assign a buddy/mentor</strong> if not already done. Have a senior writer review their work daily for 2 weeks.</li>
<li><strong>Set clear 2-week improvement goals:</strong> "By Day 35, I need to see zero grammatical errors and all deadlines met."</li>
<li><strong>If no improvement by Day 45:</strong> This is a "hire slow, fire fast" moment. Probation exists for a reason. Terminate before 90 days if the trajectory is clearly downward.</li>
</ol>
</div>

<h4>Scenario 4: Client Complains About Specific Team Member</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> A client sends an email: "The developer assigned to my project is slow to respond, doesn't understand my requirements, and I want someone else."<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Acknowledge to client immediately</strong> (within 15 minutes — CRITICAL escalation): "We take this seriously and will resolve it within 24 hours."</li>
<li><strong>Investigate:</strong> Talk to the developer. Get their side. Check message response times. Review deliverables. Is the client's complaint valid?</li>
<li><strong>If valid:</strong> Coach the developer. If severe, reassign the project to a stronger developer. Start improvement plan.</li>
<li><strong>If exaggerated:</strong> Still address the client's perception — perception IS reality in client work. Offer a solution.</li>
<li><strong>Follow up with client:</strong> After resolution, check if they're satisfied. A handled complaint = loyalty. An ignored complaint = churn.</li>
</ol>
</div>

<h4>Scenario 5: Employee Caught Moonlighting on Fiverr</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> You discover that a developer has an active Fiverr profile, taking Shopify orders while employed at DH full-time.<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>This is a ZERO-TOLERANCE violation.</strong> Freelancing while employed = immediate termination. No warnings.</li>
<li><strong>Document the evidence:</strong> Take screenshots of the Fiverr profile (dated), note active gigs, compare timelines with DH work hours.</li>
<li><strong>Escalate to Delhi immediately</strong> with documented evidence. Delhi confirms termination.</li>
<li><strong>Conduct the termination meeting</strong> with documentation. Revoke all access (Shopify stores, Discord, tools) before the meeting ends.</li>
<li><strong>Important:</strong> Even if the employee says "I only did it on weekends" — the non-compete clause covers all freelancing without written approval. The answer is termination.</li>
</ol>
</div>

<h4>Scenario 6: Salary Leak in Team WhatsApp</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> Someone shared salary information in a team WhatsApp group. Now multiple team members are upset about pay differences.<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Identify the source.</strong> Who leaked? Was it an HR team member? (If yes — IMMEDIATE TERMINATION for confidentiality breach).</li>
<li><strong>Damage control:</strong> Schedule individual 1:1s with affected team members. Don't confirm or deny specific numbers. Say: "Salaries are determined by multiple factors including experience, skills, role scope, and market rates."</li>
<li><strong>Address the root issue:</strong> If salary inequity genuinely exists, document it and present to Delhi for correction.</li>
<li><strong>Reinforce policy:</strong> Send a team-wide reminder that salary information is confidential and sharing it violates DH policy.</li>
<li><strong>Prevent recurrence:</strong> Review who has access to salary data. Limit access to only those who absolutely need it.</li>
</ol>
</div>

<h4>Scenario 7: Remote Employee Not Responding During Work Hours</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> A WFH employee has been unreachable during work hours twice this week — not on Discord, not answering calls, not responding to messages for 2+ hours each time.<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>First occurrence:</strong> Give benefit of the doubt. Call them. "Hey, I noticed you were offline for 2 hours. Everything okay?"</li>
<li><strong>If it repeats:</strong> Formal conversation. "WFH privilege requires the same availability as office. Being unreachable violates communication SLAs."</li>
<li><strong>Third occurrence:</strong> Written warning + WFH privilege revoked. Must work from office until further notice.</li>
<li><strong>If pattern continues from office:</strong> This is now a performance/attendance issue. Follow standard progressive discipline.</li>
</ol>
</div>

<h4>Scenario 8: Family Emergency WFH Request Exceeding Policy</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> An employee requests 2 weeks WFH because of a family emergency. Policy says max 2 days/week WFH.<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Show empathy first:</strong> "I'm sorry to hear about your situation. Let's figure out how to support you."</li>
<li><strong>This exceeds your authority:</strong> Extended WFH beyond policy limits requires Delhi approval.</li>
<li><strong>Escalate to Delhi with recommendation:</strong> Present the case with the employee's track record. If they're a good performer, recommend approval with clear expectations.</li>
<li><strong>Set expectations if approved:</strong> Same response SLAs, daily EOD mandatory, weekly check-in with manager.</li>
<li><strong>If the situation extends beyond 2 weeks:</strong> Consider leave of absence or alternative arrangements. Discuss with Delhi.</li>
</ol>
</div>

<h4>Scenario 9: Intern Asks for Full-Time Conversion After 2 Months</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> An intern (typical 3-month term) approaches HR at month 2: "Can I be converted to full-time early? I'm performing well."<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Acknowledge their enthusiasm:</strong> "It's great that you're enjoying the work and want to stay."</li>
<li><strong>Check the facts:</strong> IS their performance actually strong? Ask their manager. Check deliverable quality. Check training module completion.</li>
<li><strong>Standard answer:</strong> "Full-time conversion is performance-based and happens at the end of the internship period. Keep up the good work, and we'll evaluate at the 90-day mark."</li>
<li><strong>Exception:</strong> If their performance is genuinely exceptional AND there's a business need, escalate to Delhi for early conversion consideration.</li>
<li><strong>Key point:</strong> Don't promise anything. Conversion decisions = Delhi.</li>
</ol>
</div>

<h4>Scenario 10: Team Member Refuses to Work with Colleague</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> A designer says: "I refuse to work on any project with [developer's name]. I won't discuss why."<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Take it seriously.</strong> "I refuse to discuss why" could mean anything from a petty disagreement to a harassment situation.</li>
<li><strong>Investigate privately:</strong> "I understand you may not want to share details, but I need to understand if there's a safety or conduct concern. Anything you share is confidential."</li>
<li><strong>If it's interpersonal:</strong> Attempt mediation. If they truly can't work together, adjust project assignments where possible — but clarify that long-term refusal to collaborate isn't sustainable.</li>
<li><strong>If it reveals harassment/misconduct:</strong> This becomes a zero-tolerance investigation. Escalate to Delhi immediately.</li>
</ol>
</div>

<h4>Scenario 11: Mass Hiring — 5 Developers in 2 Weeks</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> A big project is signed. Delhi says: "We need 5 developers in 2 weeks."<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Be honest about trade-offs.</strong> Tell Delhi: "Hiring 5 quality developers in 2 weeks is extremely challenging. The typical time-to-hire is 14 days for 1 position. Here are the options:"</li>
<li><strong>Option A — Speed with risk:</strong> Hire 5 quickly but accept that 1-2 may not work out. Plan for 30-day evaluation and quick replacement.</li>
<li><strong>Option B — Phased hiring:</strong> Hire 3 immediately (your best candidates from pipeline + urgent referrals), 2 more in the next 2 weeks.</li>
<li><strong>Option C — Contract/freelance bridge:</strong> Bring in 2 contractors for the initial rush while hiring full-time at proper pace.</li>
<li><strong>DO NOT compromise on screening:</strong> Skipping reference checks or trial tasks to save time = guaranteed bad hires. The "Rahul Incident" cost ₹1.65L from ONE rushed hire. Imagine 5.</li>
<li><strong>Activate all channels simultaneously:</strong> Referrals, Naukri, LinkedIn, Internshala, Discord communities, portfolio sites — cast the widest net possible.</li>
</ol>
</div>

<h4>Scenario 12: Exit Interview Reveals Manager Is Bullying Team</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Situation:</strong> During an exit interview, a departing employee says: "The real reason I'm leaving is because [Manager Name] yells at the team, makes personal insults, and creates a fear-based environment. Two other people are also looking to leave."<br><br>
<strong>Recommended Approach:</strong>
<ol>
<li><strong>Take this VERY seriously.</strong> This is a potential harassment/bullying situation affecting multiple people.</li>
<li><strong>Document the exit interview claims in detail.</strong> Note specific incidents mentioned (dates, witnesses if named).</li>
<li><strong>Do NOT confront the manager directly.</strong> This needs proper investigation.</li>
<li><strong>Escalate to Delhi IMMEDIATELY</strong> with documented claims. Delhi decides the investigation process.</li>
<li><strong>Conduct confidential 1:1s</strong> with other team members (with Delhi's approval). Ask about their experience without leading questions.</li>
<li><strong>If bullying is confirmed:</strong> This is a people decision (Delhi only). Could range from coaching to termination depending on severity.</li>
<li><strong>Protect the departing employee:</strong> Assure them their feedback will be acted on confidentially. They should not face retaliation.</li>
</ol>
<strong>Key Lesson:</strong> A bullying manager can cause more damage than any individual contributor. One bad manager = entire team attrition. HR's job is to protect the team, even from management.
</div>
</div>

<div class="content-section">
<h3>🔄 Process Improvement (Kaizen) System</h3>
<p>DH encourages every employee to improve how things are done. The Kaizen system provides a structured way to submit, review, and implement improvements.</p>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📋 Submission Template:</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#065F46;color:white;">
<th style="padding:10px;text-align:left;">Field</th>
<th style="padding:10px;text-align:left;">What to Include</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #A7F3D0;"><strong>Current Problem</strong></td><td style="padding:10px;border:1px solid #A7F3D0;">What's broken/slow/inefficient? Be specific with data if possible.</td></tr>
<tr style="background:#ECFDF5;"><td style="padding:10px;border:1px solid #A7F3D0;"><strong>Proposed Solution</strong></td><td style="padding:10px;border:1px solid #A7F3D0;">How would you fix it? Step-by-step if needed.</td></tr>
<tr><td style="padding:10px;border:1px solid #A7F3D0;"><strong>Expected Benefit</strong></td><td style="padding:10px;border:1px solid #A7F3D0;">Hours saved per week/month? Better quality? Fewer errors?</td></tr>
<tr style="background:#ECFDF5;"><td style="padding:10px;border:1px solid #A7F3D0;"><strong>Effort Required</strong></td><td style="padding:10px;border:1px solid #A7F3D0;">How much time/resources to implement? Who's involved?</td></tr>
</tbody>
</table>
</div>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>📊 Review Process:</strong>
<ol>
<li><strong>Submit:</strong> Post in #process-improvements Discord channel using the template</li>
<li><strong>Manager Review:</strong> Your manager reviews within 24-48 hours, adds comments</li>
<li><strong>Delhi Review:</strong> Approved improvements go to Delhi's weekly review</li>
<li><strong>Decision:</strong> Approved, Modified, or Deferred (with reason)</li>
<li><strong>Implementation:</strong> Assigned owner, timeline, and success metric</li>
<li><strong>Recognition:</strong> Acknowledged in monthly team meeting</li>
</ol>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>💰 Rewards:</strong>
<ul>
<li><strong>₹1,000</strong> for any approved process improvement</li>
<li><strong>₹5,000</strong> for improvements that save 10+ hours/month across the team</li>
<li>Public recognition in monthly team meeting</li>
<li>Considered as a positive factor in quarterly performance reviews and promotion decisions</li>
</ul>
</div>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li><strong>6 Key Metrics:</strong> Time to Hire (&lt;14 days), Cost per Hire (&lt;₹10K), Offer Acceptance (&gt;85%), Turnover (&lt;15%), 90-Day Retention (&gt;80%), Satisfaction (&gt;4.0/5)</li>
        <li><strong>27+ AI Prompts:</strong> JD writing, screening, emails, performance, offboarding, analytics, and advanced SOP prompts ready to use</li>
        <li><strong>AI is a tool, not a replacement.</strong> Draft with AI, edit with human judgment. NEVER paste PII or confidential data.</li>
        <li><strong>Scenarios = framework:</strong> ASSESS → CLASSIFY → AUTHORITY → ACT → DOCUMENT → FOLLOW UP</li>
        <li><strong>Kaizen culture:</strong> ₹1,000 per approved improvement, ₹5,000 for major time savers</li>
        <li><strong>Predictive analytics:</strong> Watch for 3+ warning signs of resignation. Act early with casual check-ins.</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">Data-driven HR is what separates a good company from a great one. When you track metrics, you catch problems before they become crises. When you use AI effectively, you free up time for the human connections that actually matter — coaching, mentoring, and building trust. You are the bridge between data and people.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"In God we trust. All others must bring data." — W. Edwards Deming</p>
    </div>
</div>
`;

const task8Quiz = [
    { q: "What is DH's target for Time to Hire?", o: ["Less than 7 days", "Less than 21 days", "Less than 30 days", "Less than 14 days"], c: 3 },
    { q: "What is the formula for Cost per Hire?", o: ["(Internal costs + External costs) / Number of hires", "Total salary / Number of employees", "Job posting fees / Applications received", "HR salary / Positions filled"], c: 0 },
    { q: "What is DH's target for the Offer Acceptance Rate?", o: ["Above 70%", "Above 75%", "Above 85%", "Above 95%"], c: 2 },
    { q: "What is DH's target annual turnover (attrition) rate?", o: ["Under 5%", "Under 15%", "Under 10%", "Under 25%"], c: 1 },
    { q: "DH's target for 90-Day New Hire Retention is above what percentage?", o: ["80%", "60%", "70%", "90%"], c: 0 },
    { q: "How is Employee Satisfaction measured at DH?", o: ["Annual in-person interview with HR", "Monthly manager rating on a 10-point scale", "Bi-weekly team vote", "Anonymous quarterly survey with 4.0+ out of 5.0 target"], c: 3 },
    { q: "When using AI to draft HR documents, what is the MOST important rule?", o: ["Always use ChatGPT over Claude", "Send the AI output directly without changes for speed", "Always review, customize, and approve AI output before use — AI drafts, humans decide", "Only use AI for rejection emails, never for offers"], c: 2 },
    { q: "What should you NEVER paste into AI tools like ChatGPT or Claude?", o: ["Job descriptions", "Employee PII (Aadhaar, PAN, bank details, salary figures)", "Interview questions", "Generic onboarding checklists"], c: 1 },
    { q: "In Scenario 5 (employee caught freelancing on Fiverr), what is the correct action?", o: ["Immediate termination — zero-tolerance violation", "Verbal warning and second chance", "Written warning with 30-day improvement plan", "Salary reduction as penalty"], c: 0 },
    { q: "When a top performer demands a 50% raise or they'll leave, what should you do FIRST?", o: ["Immediately match their offer to retain them", "Tell them DH can't compete on salary and accept their resignation", "Counter-offer with 25% as a compromise", "Don't panic — ask about the full package details and escalate to Delhi with data"], c: 3 },
    { q: "What should be tracked on the HR dashboard WEEKLY?", o: ["Attrition rate and salary benchmarking", "Open positions count, interview pipeline, and attendance summary", "90-day retention and offer acceptance trends", "Annual performance reviews and promotion decisions"], c: 1 },
    { q: "Which sourcing channel typically has the LOWEST cost per hire?", o: ["LinkedIn Premium/Recruiter", "Recruitment agencies", "Employee referrals", "Naukri job postings"], c: 2 },
    { q: "What is the reward for a process improvement (Kaizen) that saves 10+ hours per month?", o: ["₹5,000", "₹500", "₹1,000", "₹10,000"], c: 0 },
    { q: "For what type of HR task is Claude recommended over ChatGPT?", o: ["Creative brainstorming", "Long document analysis and nuanced reasoning", "Data/spreadsheet processing", "Image generation for JD posts"], c: 1 },
    { q: "In the monthly HR report, which of these should NOT be included?", o: ["Hires made this month", "Time-to-hire trend", "Training completion rate", "Individual employee salary details"], c: 3 }
];

const task9Content = `
<h2>❓ TASK 9: HR FAQ, Email Templates & Joining Documentation</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">Employees judge HR by one thing above all else: how quickly and accurately you answer their questions. This module is your encyclopedia — every FAQ, every email template, every joining document checklist. When someone asks "How many leaves do I get?" or "When do I get my Form 16?", you need the answer instantly, not after 30 minutes of searching. Master this module and you become the most trusted person in the office.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The key is not to prioritize what's on your schedule, but to schedule your priorities." — Stephen Covey</p>
</div>

<div class="content-section">
<h3>📌 About This Module</h3>
<p>This is your <strong>complete HR reference guide</strong> — the single source of truth for every question employees, interns, and managers will throw at you. Memorize the categories, know where to find each answer, and you will never be caught off guard. This module also includes ready-to-use email templates for every HR scenario and a comprehensive joining documentation checklist.</p>
</div>

<div class="content-section">
<h3>💰 Salary & Compensation FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"When is salary paid?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Pay period is 1st–30th/31st. Salary is credited <strong>by the 10th of the next month</strong> via bank transfer. Example: January salary arrives by February 10th.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I get a salary advance?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, after <strong>3 months tenure</strong>. Maximum <strong>50% of monthly salary</strong>. Only for genuine reasons (medical emergency, family emergency). Once per quarter maximum. HR reviews and decides on a case-by-case basis. Recovered in 2 equal installments from next 2 months.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How often are salary reviews?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Quarterly reviews</strong> for compensation adjustments. There are no automatic increments based on tenure — your work quality, KRA achievement, and client feedback determine raises. Delhi Team makes the final call.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is the CTC structure?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">CTC = <strong>Basic + HRA + Special Allowance + PF (employer contribution)</strong>. Basic is typically 40-50% of CTC. HRA depends on city. PF: employer contributes 12% of basic. Your in-hand salary = CTC minus PF (employee share), professional tax, and TDS (if applicable).</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do interns get equity-sharing?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, DH has an <strong>equity-sharing model from Day 1</strong>. All team members, including interns, participate. Details are covered during onboarding by the Delhi Team.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How are bonuses calculated?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Based on your <strong>monthly performance score</strong> (Module 5). Score 8.0+ = full bonus eligibility. Score 6.0-7.9 = partial bonus. Below 6.0 = no bonus. Sales roles also get per-order commissions (1%/2%/3% tiered).</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if my salary is delayed?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">This should <strong>never happen</strong>. If salary is not credited by the 10th, immediately email HR with your bank statement showing non-receipt. If HR doesn't resolve within 24 hours, escalate to Delhi Team directly.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is there overtime pay?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>No formal overtime pay</strong>. Standard work hours are 9 AM–6 PM. However, exceptional effort during crunch periods is recognized through performance bonuses and higher monthly scores.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What deductions are made from salary?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>PF (12% of basic)</strong>, professional tax (state-dependent, ~₹200/month), <strong>TDS</strong> (if annual income exceeds taxable limit), and any <strong>penalty deductions</strong> (late attendance, SLA breaches — see Module 5).</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I negotiate my salary during reviews?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">You can present your achievements, KRA scores, and market data. However, <strong>Delhi Team makes the final decision</strong> on all compensation changes. Come prepared with numbers, not emotions.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is probation salary vs confirmed salary?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Usually the <strong>same amount</strong>. Probation confirmation means you met minimum standards. A raise at confirmation is considered <strong>only for exceptional performers</strong> — it is not guaranteed.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Are there salary bands for each role?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes. Refer to the salary structure table in Module 4. Each role has Junior, Mid, Senior, and Lead bands. Movement between bands depends on performance, not tenure.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What happens to salary if I'm on PIP?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Salary <strong>continues unchanged</strong> during PIP. However, your bonus is affected: PIP employees receive <strong>25% bonus or 0%</strong> depending on progress. Successfully completing PIP restores full bonus eligibility.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is a 13th month bonus guaranteed?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>No</strong>. There is no guaranteed 13th-month bonus at DH. All bonuses are <strong>performance-based and monthly</strong>. Consistent high performers earn significantly more through regular bonus cycles.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How do I report a payroll error?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Email HR <strong>immediately</strong> with: (1) your payslip screenshot, (2) the correct calculation, (3) the discrepancy amount. HR must acknowledge within 24 hours and resolve within the next pay cycle.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do interns get paid?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, interns receive a <strong>fixed monthly stipend</strong> as stated in the offer letter. Stipend amount varies by role and is non-negotiable during the internship period.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🏖️ Leaves & Time Off FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How many casual leaves do I get?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>12 casual leaves per year</strong> (maximum 2 per month by default). These are for personal reasons, appointments, or emergencies. Cannot be accumulated or carried forward to the next year.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What about sick leave?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>6 sick days per year</strong>. Medical certificate required for <strong>3 or more consecutive sick days</strong>. Inform your Team Lead on Discord <strong>before your shift starts</strong>. Sick leave does not carry forward.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I carry forward leaves?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Earned leave only</strong> can be carried forward (up to a cap set by policy). Casual leave and sick leave <strong>do not</strong> carry forward — use them or lose them by year-end.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How far in advance should I request leave?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Minimum <strong>7 days advance notice</strong> for planned leave (vacations, personal commitments). Emergencies are exceptions but must be communicated ASAP — ideally before shift start.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can leave be denied?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes</strong>, if it falls during a critical project phase, a client deadline, or there is insufficient team coverage. Manager has the right to ask you to reschedule. Always have a backup plan.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if I'm sick on a workday?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Inform your manager + HR <strong>as soon as possible</strong> (before shift if possible). Use Discord — not just WhatsApp. If you cannot message, have a family member inform your Team Lead.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Maternity/paternity leave policy?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">As per <strong>government mandate</strong> (26 weeks maternity for first 2 children, 15 days paternity). Discuss specific eligibility and timing with HR at least 2 months in advance.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if I need more than 2 casual leaves in a month?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Requires <strong>Delhi Team approval</strong> + sufficient leave balance must be available. Provide a genuine reason. Frequent requests for extra CL will raise performance red flags.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I take half-day leave?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes</strong>. Coordinate with your manager. Must be requested by morning of the same day at the latest. Half-day counts as 0.5 casual leave from your balance.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I take leave during probation?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Emergency leaves only</strong> during probation. Planned leaves (vacations, personal trips) are generally not approved in the first 90 days. Medical emergencies are always an exception.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What about public holidays?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">DH follows a <strong>published holiday calendar</strong> shared at the start of each year. Typically includes major national holidays and festivals. Check with HR for the current year's list.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🏠 Work From Home FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How many WFH days are allowed?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Maximum <strong>2 days per week</strong> with PM/manager approval. DH is an <strong>office-first</strong> company — WFH is a privilege, not a right.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do I need advance notice for WFH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, minimum <strong>24 hours advance notice</strong>. Request through your manager on Discord. Last-minute WFH requests are only approved for genuine emergencies.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if I need extended WFH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">More than 2 days/week requires <strong>Delhi Team approval</strong> with a valid reason (medical recovery, family emergency, etc.). Submit a written request through HR with supporting documentation.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What equipment do I need for WFH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Your own laptop, stable internet (<strong>minimum 50 Mbps</strong>), quiet workspace with minimal background noise. Camera-ready setup for meetings. DH does not provide home office equipment.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Are WFH rules different during probation?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Generally discouraged</strong> during probation. Interns and probationary employees need office presence for training, mentoring, and culture absorption. Exceptions only for valid medical reasons with HR approval.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do I still need daily updates on WFH days?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes — even MORE critical on WFH days.</strong> Discord must show online during work hours. EOD report is mandatory. All response time SLAs apply (client: 5 min, internal: 15 min). Camera on for all meetings.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I work from a different city?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Discuss with HR first. Working from another city may affect work hours, team collaboration, and tax implications. <strong>Not permitted without explicit approval</strong> from manager + Delhi Team.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if internet goes down during WFH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Inform your manager <strong>immediately</strong> on Discord (use mobile data). Switch to mobile hotspot as backup. Persistent connectivity issues = <strong>WFH privilege revoked</strong> — come to office. You are responsible for your WFH infrastructure.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can interns WFH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Generally no</strong>. Interns need office presence for training, mentorship, and culture integration. Only approved in special circumstances (medical) with HR sign-off.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🚀 Career Growth FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How do I get promoted?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Consistently score <strong>8.0+ for 2 or more consecutive months</strong>, OR score 6.0+ for 4 consecutive months with a clear upward trend. <strong>Delhi Team decides</strong> — there is no automatic promotion timer.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is there a clear career path?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes: <strong>Junior → Mid → Senior → Lead → Head</strong> (per role). Each level has defined KRA expectations, salary bands, and responsibility scope. See Module 4 for role-specific paths.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How long does it take to get promoted?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Depends entirely on performance. <strong>Fastest at DH is 6 months</strong> (Junior → Mid). Average is 9-12 months. Some roles with steeper learning curves may take longer. It is never about time — it is about results.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I switch roles internally?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes</strong>, internal transfers are possible. Discuss with HR and both your current and prospective managers. You may need to complete the new role's training module. Transfer requires Delhi Team approval.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Are there training/upskilling opportunities?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes — extensive training modules (you are in one right now), buddy system pairing with experienced colleagues, and team learning sessions. DH invests heavily in employee growth.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Who decides promotions?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Delhi Team ONLY.</strong> This is non-negotiable. Managers can recommend, HR can compile performance data, but the final decision rests solely with the Delhi Team.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I get certified through DH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes — complete your <strong>role-specific training module and pass the certification exam</strong> (100% required). You receive a verifiable DH certificate (DMH format with checksum verification).</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if I've been at the same level for 2+ years?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Schedule a <strong>growth discussion with HR</strong>. Together you will create a development plan with specific KRAs, skill gaps to address, and a timeline. If you are stuck, it means something needs to change — figure out what.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📜 Policies & Rules FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What are the zero-tolerance rules?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">These result in <strong>immediate termination, no second chances</strong>: (1) Data breach, (2) Confidentiality breach, (3) Moonlighting without approval, (4) Fraud/financial misconduct, (5) Harassment of any kind, (6) Client data theft, (7) Falsifying records or attendance.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I work on freelance projects outside DH?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>NO.</strong> Moonlighting without explicit written approval = grounds for immediate termination. If you want to freelance, discuss with Delhi Team FIRST. Undisclosed freelancing discovered later is treated as a breach of trust.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I mention DH on LinkedIn?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes.</strong> You may list Digital Heroes as your employer and describe your role. Do NOT share internal metrics, client names, revenue figures, or proprietary processes publicly.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I share internal screenshots externally?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Absolutely NOT.</strong> Sharing internal documents, screenshots, Slack/Discord messages, dashboards, or client data externally is a <strong>data breach</strong> = immediate termination + potential legal action.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is the dress code?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Smart casual.</strong> No shorts, no sleeveless tops. Client video calls require professional attire. Casual Fridays are permitted but still presentable. No specific uniform required.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I use personal devices for work?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Own laptop is required for WFH. Company data should only be on secured devices. No storing client files on personal cloud drives. Company can audit work devices at any time.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What are the working hours?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>9 AM – 6 PM</strong> (standard). Some roles may have different hours based on client time zones (especially sales and CS dealing with US/EU clients). Your offer letter specifies your exact schedule.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is the notice period?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>7 days during probation</strong>, <strong>30 days after confirmation.</strong> Early release is possible if knowledge transfer is complete and manager approves. Absconding (leaving without notice) forfeits F&F settlement.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What happens if I violate the NDA?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Legal action + immediate termination.</strong> The NDA is legally binding. Sharing client data, business strategies, pricing, or proprietary methods with anyone outside DH (including on social media) triggers legal proceedings.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I discuss my salary with colleagues?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Strongly discouraged.</strong> Salary information is confidential. Discussing salaries creates unnecessary friction, demotivation, and workplace politics. If you have compensation concerns, discuss them with HR privately.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is time tracking compulsory?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes.</strong> Daily EOD report on Discord is mandatory for ALL employees — full-time, interns, and WFH. Missing EOD reports directly impacts your monthly performance score.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎁 Benefits & Perks FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is there health insurance?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Discuss current coverage details with HR. Coverage options and eligibility may vary based on tenure and role level.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Are there team events?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes — monthly team building activities, birthday celebrations, quarterly team outings, and festival celebrations. Participation is encouraged as it builds team culture.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do I get tools/software provided?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes — role-specific tools are provided (Shopify Partner account, Figma, paid plugins, etc.). See your role's onboarding checklist in Module 4 for the full list. Personal software must not be installed on work devices.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is there a referral bonus?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes — for successful hires through employee referrals. The referred candidate must complete probation for the bonus to be paid. Ask HR for the current referral bonus amount by role.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What about meal/transport allowance?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Per company policy — discuss with HR for current benefits. Some locations may offer subsidized meals or transport support.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do interns get certificates?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, after completing minimum <strong>30 days + role-specific training module + certification exam</strong>. Certificate is verifiable through the DH verification portal.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>👔 Manager-Specific FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How do I onboard a new team member?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Follow the <strong>30-60-90 day plan</strong> (Module 4): assign a buddy, schedule weekly 1:1s, set clear first-week deliverables, ensure training module is started within Day 3. No "figure it out yourself" onboarding.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"When should I escalate to Delhi Team?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Always escalate:</strong> hiring decisions, firing decisions, salary/promotion decisions, client fires/refunds, policy violations, inter-team conflicts, budget requests, and any decision with revenue impact over $1,000.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How do I handle underperformance?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Follow the documented path: <strong>Document issues → Verbal warning → Written warning → PIP → Termination.</strong> Skip steps only for zero-tolerance violations. Every step must be documented with dates and specifics.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I approve WFH for my team?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">PMs can approve up to <strong>2 WFH days per week</strong> for team members, with 24-hour advance notice. Extended WFH or permanent arrangements need Delhi Team approval.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How do I request additional headcount?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Submit a <strong>business case to Delhi Team</strong> with: current workload data, capacity analysis, expected revenue from the new hire, and the role/seniority needed. Do not post a JD until approved.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I terminate someone without HR involvement?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Never.</strong> All terminations must go through HR + Delhi Team approval. Even for zero-tolerance violations, HR must be involved for documentation, legal compliance, and F&F processing.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🎓 Internship FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is the internship duration?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Typically <strong>3-6 months</strong> depending on the role and performance. High performers may be converted to full-time earlier. Extensions are possible for those showing steady improvement.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can interns become full-time?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes</strong> — based on performance. Consistently scoring <strong>7.5+ at monthly reviews</strong> makes you eligible for conversion. Delhi Team makes the final decision based on headcount needs and budget.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do interns get paid?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, a <strong>fixed monthly stipend</strong> as stated in the offer letter. Stipend is paid on the same cycle as regular salary (by the 10th of the next month).</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is the intern evaluation process?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Monthly reviews</strong> using the same scoring system as full-time employees. Same KRA framework, same metrics. Probation confirmation review at the end of internship period.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Are intern leaves different?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Slightly more lenient policy, but <strong>communication is mandatory</strong>. Planned leaves during probation are discouraged. Emergency leaves require informing manager + HR before shift start. No-shows without communication = immediate red flag.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can interns attend client meetings?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, as observers initially. After 30 days, interns may participate actively with manager approval. Always be camera-ready and professional on client calls.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🚪 Exit & Separation FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;">DH Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What is my notice period?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">As per your offer letter — typically <strong>7 days during probation, 30 days after confirmation</strong>. Early release possible if knowledge transfer is complete and manager approves.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Will I get an experience letter?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, <strong>after full and final settlement is complete</strong>. Not issued if terminated for misconduct or if the employee absconded without serving notice.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I use DH as a reference?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Yes, <strong>with manager approval</strong>. Provide the reference checker with your manager's contact details. HR provides only factual verification (dates, designation).</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"When will I get my F&F settlement?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Within 30 days</strong> of last working day. Requires: all company assets returned, all access revoked, knowledge transfer complete, exit interview done. Delays in returning assets = delays in F&F.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I get a Letter of Recommendation?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">LOR is reserved for <strong>top 10% performers only</strong>. Standard performers receive an experience letter. Exceptional contributions and consistently high scores (8.0+) are required for LOR consideration.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📧 HR Email Templates — Ready to Use</h3>
<p>Copy, customize, and send. Every template follows DH's professional communication standards. Replace placeholders in <strong>[brackets]</strong> with actual information.</p>

<h4>1. Job Posting Email to Recruitment Agency</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Open Position — [Job Title] at Digital Heroes<br><br>
<strong>Body:</strong><br>
Hi [Agency Contact Name],<br><br>
We have an opening for a <strong>[Job Title]</strong> at Digital Heroes. Please find the job description attached.<br><br>
<strong>Key details:</strong><br>
- Role: [Job Title]<br>
- Location: [City / Remote]<br>
- Experience: [X-Y years]<br>
- CTC Range: [Range]<br>
- Start Date: [Expected date]<br>
- Hiring Urgency: [High / Medium / Low]<br><br>
Please share relevant profiles within <strong>5 business days</strong>. Candidates must include portfolio/GitHub links where applicable.<br><br>
Regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>2. Phone Screen Scheduling Email</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Digital Heroes — Phone Screen for [Job Title] Role<br><br>
<strong>Body:</strong><br>
Hi [Candidate Name],<br><br>
Thank you for your interest in the <strong>[Job Title]</strong> position at Digital Heroes. We would like to schedule a <strong>15-minute phone screen</strong> to learn more about your background.<br><br>
<strong>Proposed time:</strong> [Date] at [Time] IST<br>
<strong>Call type:</strong> Phone / Google Meet<br><br>
Please confirm your availability or suggest an alternative slot within the next 2 business days.<br><br>
Looking forward to speaking with you!<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>3. Interview Invitation Email</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Interview Invitation — [Job Title] at Digital Heroes<br><br>
<strong>Body:</strong><br>
Hi [Candidate Name],<br><br>
We enjoyed our initial conversation and would like to invite you for a <strong>[Technical / Design / Final] interview</strong> for the [Job Title] role.<br><br>
<strong>Details:</strong><br>
- Date: [Date]<br>
- Time: [Time] IST<br>
- Duration: [45-60 minutes]<br>
- Format: [Google Meet / In-person at office address]<br>
- Interviewers: [Names and titles]<br><br>
<strong>Please prepare:</strong><br>
- [Portfolio / GitHub profile / recent projects (for tech/design roles)]<br>
- [A brief presentation on a past project you're proud of]<br>
- Any questions you have about the role or team<br><br>
Please confirm by [Date]. If the slot doesn't work, reply with 2-3 alternatives.<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>4. Post-Interview Rejection Email</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Update on Your Application — Digital Heroes<br><br>
<strong>Body:</strong><br>
Hi [Candidate Name],<br><br>
Thank you for taking the time to interview for the <strong>[Job Title]</strong> position at Digital Heroes. We appreciated the opportunity to learn about your experience and skills.<br><br>
After careful consideration, we have decided to move forward with another candidate whose experience more closely matches our current requirements.<br><br>
This does not reflect on your abilities — we encourage you to apply again in the future as new roles open up. We will keep your profile on file for future opportunities.<br><br>
We wish you all the best in your career journey.<br><br>
Warm regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>5. Offer Letter Email</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Offer Letter — [Job Title] at Digital Heroes 🎉<br><br>
<strong>Body:</strong><br>
Hi [Candidate Name],<br><br>
We are pleased to extend an offer for the position of <strong>[Job Title]</strong> at Digital Heroes!<br><br>
<strong>Offer details:</strong><br>
- Designation: [Job Title]<br>
- Department: [Department]<br>
- Reporting to: [Manager Name]<br>
- CTC: [Amount] per annum<br>
- Joining Date: [Date]<br>
- Probation Period: [90 days]<br>
- Location: [Office Address]<br><br>
Please find the <strong>formal offer letter attached</strong>. Kindly review, sign, and return a copy by <strong>[Deadline Date]</strong>.<br><br>
If you have any questions about the offer, compensation, or role, feel free to reach out.<br><br>
Welcome to Digital Heroes — we are excited to have you on the team!<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>6. Welcome Email (Day -1, Before Joining)</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Welcome to Digital Heroes! Your Day 1 Guide 🚀<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
Welcome to <strong>Digital Heroes</strong>! We are thrilled to have you join us as <strong>[Job Title]</strong> starting <strong>[Date]</strong>.<br><br>
<strong>Day 1 essentials:</strong><br>
- 🕘 Reporting time: 9:00 AM<br>
- 📍 Location: [Office Address]<br>
- 👤 Ask for: [HR/Manager Name] at reception<br>
- 📱 Discord: Download and install before Day 1 — invite link: [Link]<br><br>
<strong>Please bring on Day 1:</strong><br>
- Aadhaar card (original + photocopy)<br>
- PAN card (photocopy)<br>
- 2 passport-size photographs<br>
- Highest education certificate<br>
- Previous employment relieving letter (if applicable)<br>
- Bank account details (cancelled cheque or passbook copy)<br>
- Signed offer letter (your copy)<br><br>
<strong>Resources to explore:</strong><br>
- SOP Library: [Link]<br>
- Employee Handbook: [Link]<br>
- Your Training Module: [Link]<br><br>
Your buddy for the first month will be <strong>[Buddy Name]</strong> — they will help you navigate everything.<br><br>
See you soon!<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>7. Probation Confirmation Email</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Probation Confirmation — Congratulations! 🎉<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
We are pleased to confirm that you have <strong>successfully completed your probation period</strong> at Digital Heroes.<br><br>
Effective <strong>[Date]</strong>, you are now a confirmed employee in the role of <strong>[Job Title]</strong>.<br><br>
<strong>What changes:</strong><br>
- You are now eligible for full leave benefits<br>
- Notice period changes to 30 days<br>
- Eligible for quarterly performance bonuses<br><br>
Your consistent performance and dedication have been noted. Keep up the great work!<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>8. Probation Extension Email</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Probation Extension — Action Required<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
Your probation period was scheduled to end on <strong>[Original Date]</strong>. After reviewing your performance with your manager, we have decided to <strong>extend your probation by [30/60] days</strong> until <strong>[New End Date]</strong>.<br><br>
<strong>Reason for extension:</strong><br>
- [Specific area 1 needing improvement]<br>
- [Specific area 2 needing improvement]<br><br>
<strong>What we expect during the extension:</strong><br>
- [Measurable target 1]<br>
- [Measurable target 2]<br>
- Weekly check-ins with your manager every [Day]<br><br>
This is an opportunity to demonstrate your potential. We want you to succeed and are committed to supporting your growth.<br><br>
Please acknowledge this email and schedule a meeting with your manager to discuss your improvement plan.<br><br>
Regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>9. Warning Letter Email</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Written Warning — [Nature of Issue]<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
This is a <strong>formal written warning</strong> regarding [specific issue].<br><br>
<strong>Details of the incident:</strong><br>
- Date(s): [Date(s)]<br>
- Description: [Clear factual description of the issue]<br>
- Policy violated: [Reference to specific company policy]<br>
- Previous verbal warning date: [Date] (if applicable)<br><br>
<strong>Expected corrective action:</strong><br>
- [Specific measurable improvement expected]<br>
- Timeline: [Number of days/weeks]<br><br>
Failure to address this issue may result in further disciplinary action, including a Performance Improvement Plan (PIP) or termination.<br><br>
Please acknowledge receipt of this warning by replying to this email. A meeting has been scheduled on [Date] at [Time] to discuss this further.<br><br>
Regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>10. PIP Initiation Email</h4>
<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Performance Improvement Plan (PIP) — Effective [Date]<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
Following our discussions on [Date] regarding your performance, we are placing you on a <strong>Performance Improvement Plan (PIP)</strong> effective <strong>[Start Date]</strong> through <strong>[End Date]</strong> ([30/60/90 days]).<br><br>
<strong>Areas requiring improvement:</strong><br>
1. [Specific area with data/examples]<br>
2. [Specific area with data/examples]<br>
3. [Specific area with data/examples]<br><br>
<strong>Success criteria (must achieve ALL):</strong><br>
1. [Measurable target 1 with deadline]<br>
2. [Measurable target 2 with deadline]<br>
3. [Measurable target 3 with deadline]<br><br>
<strong>Support provided:</strong><br>
- Weekly check-ins with [Manager Name] every [Day]<br>
- Access to additional training resources<br>
- Buddy support from [Name]<br><br>
Failure to meet the success criteria by [End Date] may result in termination of employment.<br><br>
Please sign and return the attached PIP document by [Date].<br><br>
Regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>11. Resignation Acknowledgment Email</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Acknowledgment of Resignation<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
We acknowledge receipt of your resignation letter dated <strong>[Date]</strong>.<br><br>
<strong>Key details:</strong><br>
- Notice period: [30 days]<br>
- Last working day: [Date]<br>
- Knowledge transfer to: [Name]<br>
- Exit interview: Will be scheduled in your final week<br><br>
<strong>During your notice period:</strong><br>
- Complete all pending deliverables<br>
- Document all ongoing projects and hand over to [Name]<br>
- Return all company assets (laptop, access cards, etc.) by last day<br>
- Ensure all access credentials are transferred/revoked<br><br>
F&F settlement will be processed within 30 days of your last working day.<br><br>
We appreciate your contributions to Digital Heroes and wish you success ahead.<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>12. Experience/Relieving Letter Cover Email</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Experience Letter & Relieving Letter — [Employee Name]<br><br>
<strong>Body:</strong><br>
Hi [Name],<br><br>
Please find attached your <strong>Experience Letter</strong> and <strong>Relieving Letter</strong> from Digital Heroes.<br><br>
<strong>Details:</strong><br>
- Designation: [Job Title]<br>
- Duration: [Joining Date] to [Last Working Date]<br>
- Department: [Department]<br><br>
Your full and final settlement has been processed and will be credited to your bank account within [X] business days.<br><br>
We wish you all the best in your future endeavors. Feel free to reach out if you need any clarification.<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>13. Reference Check Request Email</h4>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Reference Check — [Candidate Name]<br><br>
<strong>Body:</strong><br>
Hi [Reference Person Name],<br><br>
We are considering <strong>[Candidate Name]</strong> for a <strong>[Job Title]</strong> position at Digital Heroes. They have listed you as a professional reference.<br><br>
Could you please confirm the following:<br>
1. Duration of their employment at [Company]?<br>
2. Their role and key responsibilities?<br>
3. Reason for leaving?<br>
4. Would you rehire them? Why or why not?<br>
5. Any areas of improvement you noticed?<br><br>
This information is confidential and will only be used for hiring purposes. A brief email response or a 10-minute call would be greatly appreciated.<br><br>
Thank you for your time.<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>14. Employee of the Month Announcement</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> 🏆 Employee of the Month — [Month Year]<br><br>
<strong>Body:</strong><br>
Hi Team,<br><br>
We are excited to announce our <strong>Employee of the Month</strong> for [Month Year]!<br><br>
🎉 <strong>[Employee Name] — [Job Title]</strong> 🎉<br><br>
<strong>Why [Name] stands out:</strong><br>
- [Achievement 1 — specific and data-backed]<br>
- [Achievement 2 — client/team impact]<br>
- [Achievement 3 — cultural contribution]<br><br>
[Name] has consistently demonstrated the DH values of [relevant manifesto principle] and has been an inspiration to the team.<br><br>
Please join me in congratulating [Name]! 👏<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>

<h4>15. Policy Update Communication</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Subject:</strong> Policy Update — [Policy Name] — Effective [Date]<br><br>
<strong>Body:</strong><br>
Hi Team,<br><br>
This is to inform you of an update to our <strong>[Policy Name]</strong>, effective <strong>[Date]</strong>.<br><br>
<strong>What's changing:</strong><br>
- [Change 1 — clear, concise description]<br>
- [Change 2 — clear, concise description]<br><br>
<strong>Why this change:</strong><br>
[1-2 sentences explaining the rationale — be transparent]<br><br>
<strong>What you need to do:</strong><br>
- [Action item 1, if any]<br>
- [Action item 2, if any]<br>
- Acknowledge this policy update by [Date]<br><br>
The updated policy document is available at [Link]. If you have questions, please reach out to HR.<br><br>
Best regards,<br>
[Your Name]<br>
HR, Digital Heroes
</div>
</div>

<div class="content-section">
<h3>📥 Joining Document Checklist — Complete Reference</h3>

<p>On Day 1, HR has a LOT to handle. Miss a document and you will be chasing it for weeks. Use this checklist religiously for every new joiner.</p>

<h4>📋 Documents to COLLECT from New Joiner</h4>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;border:1px solid #E2E8F0;">Document</th>
<th style="padding:10px;border:1px solid #E2E8F0;">Format</th>
<th style="padding:10px;border:1px solid #E2E8F0;">Priority</th>
<th style="padding:10px;border:1px solid #E2E8F0;">Notes</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Signed NDA</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Signed hard copy</td><td style="padding:10px;border:1px solid #E2E8F0;">🔴 CRITICAL</td><td style="padding:10px;border:1px solid #E2E8F0;">MUST be signed BEFORE accessing ANY client work. Non-negotiable.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Employment Contract / Offer Letter</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Signed copy returned</td><td style="padding:10px;border:1px solid #E2E8F0;">🔴 CRITICAL</td><td style="padding:10px;border:1px solid #E2E8F0;">Both parties must have signed copies. File one, give one to employee.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Aadhaar Card</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Photocopy + original for verification</td><td style="padding:10px;border:1px solid #E2E8F0;">🔴 CRITICAL</td><td style="padding:10px;border:1px solid #E2E8F0;">Primary ID proof. Return original after verification.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>PAN Card</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Photocopy</td><td style="padding:10px;border:1px solid #E2E8F0;">🔴 CRITICAL</td><td style="padding:10px;border:1px solid #E2E8F0;">Required for tax (TDS) purposes. Cannot process payroll without it.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>2 Passport-Size Photographs</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Physical (white background)</td><td style="padding:10px;border:1px solid #E2E8F0;">🟡 Day 1</td><td style="padding:10px;border:1px solid #E2E8F0;">For employee records and ID card (if applicable).</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Educational Certificates</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Photocopy of highest qualification</td><td style="padding:10px;border:1px solid #E2E8F0;">🟡 Day 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Degree / diploma / marksheet of most recent qualification.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Previous Experience Letters</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Original or copy</td><td style="padding:10px;border:1px solid #E2E8F0;">🟡 If applicable</td><td style="padding:10px;border:1px solid #E2E8F0;">Not required for freshers. Verify dates and designations.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Previous Relieving Letter</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Original or copy</td><td style="padding:10px;border:1px solid #E2E8F0;">🟡 If applicable</td><td style="padding:10px;border:1px solid #E2E8F0;">Confirms clean exit from previous employer. Flag if missing.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Last 3 Months Salary Slips</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Digital / photocopy</td><td style="padding:10px;border:1px solid #E2E8F0;">🟢 If applicable</td><td style="padding:10px;border:1px solid #E2E8F0;">For salary verification (experienced hires only).</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Bank Account Details</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Cancelled cheque or passbook copy</td><td style="padding:10px;border:1px solid #E2E8F0;">🔴 CRITICAL</td><td style="padding:10px;border:1px solid #E2E8F0;">For salary credit setup. Must match employee name exactly.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Emergency Contact Info</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Written / digital form</td><td style="padding:10px;border:1px solid #E2E8F0;">🟡 Day 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Name, relationship, phone number. At least 2 contacts.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Address Proof</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Aadhaar or utility bill</td><td style="padding:10px;border:1px solid #E2E8F0;">🟢 Week 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Current residential address verification.</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Medical Fitness (Self-Declaration)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Signed declaration</td><td style="padding:10px;border:1px solid #E2E8F0;">🟢 Week 1</td><td style="padding:10px;border:1px solid #E2E8F0;">Simple self-declaration form provided by HR.</td></tr>
</tbody>
</table>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Where to Get Each Document:</strong>
<ul>
<li><strong>NDA:</strong> HR provides the template — employee signs and returns</li>
<li><strong>Aadhaar:</strong> UIDAI website (uidai.gov.in) or nearest enrollment center</li>
<li><strong>PAN:</strong> Income Tax Department or NSDL portal</li>
<li><strong>Salary Slips:</strong> Previous employer's HR department or payroll portal</li>
<li><strong>Bank Details:</strong> From the employee's bank — cancelled cheque or first page of passbook photocopy</li>
<li><strong>Relieving Letter:</strong> Previous employer's HR — request during notice period</li>
</ul>
</div>

<h4>📤 Documents to GIVE to New Joiner</h4>
<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li><strong>Welcome email</strong> — with all relevant links: SOP Library, Discord invite, tool access</li>
<li><strong>Signed offer letter</strong> — their copy to retain</li>
<li><strong>Signed NDA</strong> — their copy to retain</li>
<li><strong>Employee handbook link</strong> — must read during first week</li>
<li><strong>Start Here / Onboarding guide link</strong> — role-specific onboarding guide</li>
<li><strong>Training module assignment</strong> — which training to complete and deadline (usually 2 weeks)</li>
<li><strong>Reporting manager introduction</strong> — email + Discord intro to Team Lead and Manager</li>
<li><strong>IT setup instructions</strong> — tool installations, account creations, access requests</li>
<li><strong>Buddy assignment notification</strong> — introduce their assigned buddy for the first month</li>
</ul>
</div>

<h4>📁 Documents HR Must FILE</h4>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>For EVERY new joiner, HR must complete these actions within 3 days:</strong>
<ol>
<li><strong>Create digital employee folder</strong> — All collected documents + offer letter + NDA, organized by employee name and joining date</li>
<li><strong>Update employee master sheet</strong> — Name, role, joining date, reporting manager, salary, bank details, emergency contacts</li>
<li><strong>Update headcount tracker</strong> — Department-wise headcount for monthly reporting to Delhi Team</li>
<li><strong>Notify accounts/finance team</strong> — For payroll setup (must be done within 3 days of joining, or they miss the first pay cycle)</li>
<li><strong>Add to attendance system</strong> — Ensure they can mark attendance from Day 1</li>
<li><strong>Add to Discord channels</strong> — Team channel, announcements, relevant project channels</li>
<li><strong>Schedule Day-7 check-in</strong> — Calendar reminder to check on them after first week</li>
<li><strong>Schedule Day-30 review</strong> — First formal performance check-in</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💼 PF & Tax Setup Guide</h3>

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Provident Fund (PF) — What HR Must Know:</strong>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:10px;border:1px solid #E2E8F0;">Component</th>
<th style="padding:10px;border:1px solid #E2E8F0;">Details</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Employee Contribution</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">12% of Basic salary (deducted from employee's salary)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Employer Contribution</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">12% of Basic salary (additional cost to company, included in CTC)</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>UAN (Universal Account Number)</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Assigned once by EPFO, stays with employee for life across employers</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>How to Check PF Balance</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">EPFO portal (epfindia.gov.in), UMANG app, or SMS to 7738299899</td></tr>
<tr><td style="padding:10px;border:1px solid #E2E8F0;"><strong>PF Withdrawal</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Allowed after 2 months of leaving a job (full withdrawal) or for specific reasons (housing, medical, education)</td></tr>
</tbody>
</table>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>Tax Setup — Key Points:</strong>
<ul>
<li><strong>Tax Declaration:</strong> Employees must submit their tax-saving investment declarations at the start of the financial year (April) so HR/payroll can calculate correct TDS deductions</li>
<li><strong>Form 16:</strong> Issued annually by the employer (by June 15) — this is the employee's TDS certificate needed for filing income tax returns</li>
<li><strong>TDS (Tax Deducted at Source):</strong> If annual income exceeds the basic exemption limit (~₹2.5L under old regime, ₹3L under new regime), employer deducts tax monthly from salary</li>
<li><strong>Professional Tax:</strong> State-level tax (~₹200/month in most states), deducted automatically from salary</li>
<li><strong>New vs Old Tax Regime:</strong> Employee must choose at the start of the financial year. New regime has lower rates but no deductions. Old regime allows 80C, HRA, etc.</li>
</ul>
</div>

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>⚠️ Common HR Mistakes with Joining:</strong>
<ul>
<li><strong>Forgetting to collect NDA</strong> — employee starts working on client projects without legal protection. This is the #1 worst mistake.</li>
<li><strong>Not setting up payroll on time</strong> — employee does not get paid on the first cycle. Terrible first impression that damages trust immediately.</li>
<li><strong>No Day 1 orientation</strong> — new joiner sits idle because nobody told their team they are starting today. Plan the first day minute by minute.</li>
<li><strong>Missing welcome email</strong> — joiner arrives with no Discord access, no tool links, and no idea who to report to. Send the welcome email the day before joining.</li>
<li><strong>Not assigning a buddy</strong> — new employee feels lost and isolated. Always pair them with an experienced team member for the first month.</li>
<li><strong>Skipping Day-7 check-in</strong> — small problems in week 1 become big problems by month 2. Always check in after the first week.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🏢 Workplace & Office FAQs (From the Handbook)</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;width:65%;">Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What's the dress code?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Smart Casual.</strong> No shorts, no offensive slogans on t-shirts, no flip-flops. Look presentable — you represent DH even in the office.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I bring friends/visitors to the office?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>No.</strong> No visitors or friends allowed in the office. This is a data security measure — client work, internal systems, and confidential information are visible throughout the workspace.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I use headphones at my desk?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes, for deep work.</strong> Headphones are allowed to help you focus. But when someone waves at you or taps your shoulder, take them off immediately. Do not ignore colleagues.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I eat at my desk?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Dry snacks only.</strong> Full meals must be eaten in the pantry. No strong-smelling food at your desk — it affects everyone around you.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do I have to say good morning?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes, mandatory.</strong> Greeting everyone with "Good morning" when you arrive is a basic professional courtesy and expected of every employee.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>🏥 Benefits, Insurance & Compensation FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;width:65%;">Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Does DH provide medical insurance?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Currently handled <strong>case-by-case.</strong> A comprehensive group medical insurance plan is being planned for late 2026. Until then, medical emergencies are evaluated individually by HR and Delhi Team.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I get a Letter of Recommendation (LOR)?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">LORs are provided <strong>only for top 10% performers</strong> after internship completion. Not everyone gets one — it is earned based on performance, not tenure.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is the training period paid?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Training period is <strong>unpaid</strong>, but a certificate is provided upon completion. This is communicated upfront before joining.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Does DH provide a laptop?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Laptops are provided <strong>only for Lucknow in-office employees.</strong> WFH employees must use their own equipment. No client data on personal devices without explicit permission.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is TDS deducted from my salary?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Yes.</strong> TDS is deducted as per applicable tax slab. Form 16 is provided annually for filing income tax returns.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Do we get Diwali/festival bonuses?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Festival bonuses are <strong>based on company performance and employee tenure.</strong> They are not guaranteed and are decided by Delhi Team each year.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Is there overtime pay?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>No.</strong> DH is output-based, not hours-based. If you finish your work efficiently, you are not expected to sit idle. If deadlines require extra hours occasionally, that is part of agency life.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"Can I use my personal laptop?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Only with explicit permission.</strong> No client data, credentials, or internal tools on personal devices without HR and manager approval.</td></tr>
</tbody>
</table>
</div>

<div class="content-section">
<h3>📈 Growth, Policies & Conflict Resolution FAQs</h3>

<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:35%;">Question</th>
<th style="padding:12px;text-align:left;width:65%;">Answer</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"What if I have a conflict with my manager?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;"><strong>Open Door Policy:</strong> For manager conflicts, speak directly to HR (Agrima) or Ops Head (Anurag). All conversations are confidential. DH does not tolerate retaliation.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How long is probation?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">Probation duration <strong>varies by role</strong> — typically 3 months. During probation, notice period is 7 days (vs 30 days for confirmed employees). Performance is reviewed before confirmation.</td></tr>
<tr style="border-bottom:1px solid #E2E8F0;"><td style="padding:10px;border:1px solid #E2E8F0;"><strong>"How do I become a Team Lead?"</strong></td><td style="padding:10px;border:1px solid #E2E8F0;">There is no shortcut: <strong>(1)</strong> Show ownership — take responsibility for outcomes, not just tasks. <strong>(2)</strong> Help others — mentor juniors without being asked. <strong>(3)</strong> Solve problems proactively — bring solutions, not just problems. <strong>(4)</strong> Maintain consistent 8+ review scores over multiple quarters.</td></tr>
</tbody>
</table>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li><strong>Know the FAQs cold</strong> — salary by 10th, 12 CL/year, 6 sick days/year, max 2 WFH days/week, NDA before any client work</li>
        <li><strong>Workplace rules matter</strong> — Smart Casual dress code, no visitors, mandatory greetings, headphone etiquette</li>
        <li><strong>The NDA is the most critical joining document</strong> — no NDA = no access to client work, period</li>
        <li><strong>No overtime pay</strong> — DH is output-based, not hours-based. Communicate this clearly during onboarding.</li>
        <li><strong>Open Door Policy</strong> — manager conflicts go to HR (Agrima) or Ops Head (Anurag). Always confidential.</li>
        <li><strong>LOR is earned</strong> — only top 10% performers after internship. Not automatic.</li>
        <li><strong>Team Lead path</strong> — ownership + helping others + proactive problem-solving + consistent 8+ scores</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">You are the person everyone turns to when they have a question, a concern, or a problem. Every accurate, instant answer you give builds trust. Every email template you use professionally reflects the company's standards. You are not just answering questions — you are creating the employee experience that determines whether people stay and thrive or leave and tell others not to come.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"People will forget what you said, people will forget what you did, but people will never forget how you made them feel." — Maya Angelou</p>
    </div>
</div>
`;

const task9Quiz = [
    { q: "When does salary get credited at DH?", o: ["1st of the same month", "Last day of the month", "15th of the next month", "By the 10th of the next month"], c: 3 },
    { q: "What is the salary advance policy at DH?", o: ["Max 50% salary after 3 months tenure, once per quarter, HR decides", "No advances allowed", "Max 1 month salary after 6 months tenure", "Max 100% salary anytime with manager approval"], c: 0 },
    { q: "How many casual leaves are provided per year at DH?", o: ["6 days", "10 days", "12 days (max 2 per month)", "15 days"], c: 2 },
    { q: "What is the maximum number of WFH days allowed per week?", o: ["1 day with manager approval", "2 days with PM/manager approval", "3 days for confirmed employees", "WFH is not allowed at DH"], c: 1 },
    { q: "What score must you consistently achieve for promotion eligibility?", o: ["6.0+ for 2 months", "7.0+ for 3 months", "9.0+ for 1 month", "8.0+ for 2+ consecutive months (or 6.0+ for 4 months)"], c: 3 },
    { q: "Which of the following is NOT a zero-tolerance violation at DH?", o: ["Missing 2 EOD reports in a month", "Data breach", "Moonlighting without approval", "Harassment of any kind"], c: 0 },
    { q: "Which document must be signed by a new joiner BEFORE they can access any client work?", o: ["Employment contract only", "NDA (Non-Disclosure Agreement)", "Performance agreement", "Tax declaration form"], c: 1 },
    { q: "Within how many days of joining must HR notify finance for payroll setup?", o: ["Within 7 days", "Within 14 days", "Same day", "Within 3 days"], c: 3 },
    { q: "Who makes the final decision on all promotions and salary changes at DH?", o: ["Direct manager", "HR department", "Delhi Team only", "Department head"], c: 2 },
    { q: "What is the employer's PF contribution rate?", o: ["12% of basic salary", "8% of basic salary", "10% of CTC", "15% of gross salary"], c: 0 },
    { q: "Who is eligible for a Letter of Recommendation at DH?", o: ["Anyone who completes 1 year", "Top 10% performers only", "All departing employees", "Anyone who asks"], c: 1 },
    { q: "What should an employee do if salary is delayed past the 10th?", o: ["Wait for the next cycle", "Ask their manager to follow up", "Email HR with bank statement, escalate to Delhi Team if unresolved in 24 hours", "Post about it on Discord"], c: 2 },
    { q: "Which email template should HR use when an employee's probation performance is below expectations but they are not being terminated?", o: ["Probation extension email", "Warning letter email", "PIP initiation email", "Resignation acknowledgment email"], c: 0 },
    { q: "Can an employee discuss their salary with colleagues at DH?", o: ["Yes, salary transparency is encouraged", "Only with their manager", "Only during town halls", "Strongly discouraged — salary information is confidential"], c: 3 },
    { q: "What is the notice period for a confirmed (post-probation) employee at DH?", o: ["7 days", "30 days", "14 days", "60 days"], c: 1 }
];


const task10Content = `
<h2>🎓 TASK 10: Final Certification Exam — HR Mastery</h2>

<div style="background: linear-gradient(135deg, #1E3A5F, #2D5016); border-radius: 16px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
    <h3 style="color: #7DD3FC; margin-bottom: 10px;">💡 Why This Module Matters</h3>
    <p style="color: #E2E8F0; font-size: 1.05em; line-height: 1.7;">This is the final step in your HR certification journey. You have studied hiring economics, JD writing, screening, interviews, onboarding, performance management, offboarding, DH culture, analytics, AI tools, and the complete FAQ reference. This exam tests not just your memory — it tests your judgment. Can you apply what you have learned to real DH scenarios? Prove it here.</p>
    <p style="color: #FCD34D; font-style: italic; margin-top: 10px;">"The expert in anything was once a beginner." — Helen Hayes</p>
</div>

<div class="content-section">
<h3>📋 Exam Overview</h3>
<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px; margin: 15px 0;">
<strong>This is your final certification exam.</strong> It covers all 9 modules of the HR training program. You must score <strong>100%</strong> to earn your Digital Heroes HR certification.<br><br>
<strong>What to expect:</strong>
<ul>
<li>15 comprehensive questions drawn from all 9 modules</li>
<li>Questions test application and scenario-based thinking, not just memory</li>
<li>You can retake the exam as many times as needed</li>
<li>Review the module summaries below before attempting</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📚 Module-by-Module Review</h3>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; margin:15px 0; table-layout:fixed;">
<thead><tr style="background:#1E293B;color:white;">
<th style="padding:12px;text-align:left;width:20%;">Module</th>
<th style="padding:12px;text-align:left;width:35%;">Key Topics</th>
<th style="padding:12px;text-align:left;width:45%;">Critical Numbers & Facts</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>1. HR Mindset & Economics</strong></td>
<td style="padding:12px;word-wrap:break-word;">Bad hire cost, hire slow/fire fast, people = revenue, 6-step hiring process</td>
<td style="padding:12px;word-wrap:break-word;">Bad hire costs 10x monthly salary. A ₹15K/month hire can cause ₹1.65L+ damage. Every hiring decision is a $50,000+ decision.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>2. JD Writing & Sourcing</strong></td>
<td style="padding:12px;word-wrap:break-word;">JD structure, sourcing channels, employer branding, cost-per-hire</td>
<td style="padding:12px;word-wrap:break-word;">Internshala for interns, LinkedIn/referrals for experienced. Clear role expectations + portfolio requirements are most important in JDs.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>3. Screening & Interviews</strong></td>
<td style="padding:12px;word-wrap:break-word;">Resume screening funnel (100 CVs to 1 hire), STAR method, interview scorecards, role-specific questions</td>
<td style="padding:12px;word-wrap:break-word;">STAR = Situation, Task, Action, Result. Red flags: job hopping, badmouthing, scripted answers, only asking about salary/WFH.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>4. Offer & Onboarding</strong></td>
<td style="padding:12px;word-wrap:break-word;">CTC structure, counter-offer handling, 30-60-90 day plan, buddy system</td>
<td style="padding:12px;word-wrap:break-word;">First 30 days: learn tools, complete training, shadow colleagues. CTC = Basic + HRA + Special Allowance + PF.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>5. Performance & Policies</strong></td>
<td style="padding:12px;word-wrap:break-word;">Monthly scoring, SBI feedback, PIP process, leave management, attendance</td>
<td style="padding:12px;word-wrap:break-word;">Score 8.0+ = full bonus. PIP only after verbal + written warnings fail. 12 CL/year, 6 sick days/year.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>6. Offboarding & Remote</strong></td>
<td style="padding:12px;word-wrap:break-word;">Exit checklist, F&F settlement, knowledge transfer, WFH policy enforcement</td>
<td style="padding:12px;word-wrap:break-word;">Minimum 7 days knowledge transfer. F&F within 30 days of last working day. Notice: 7 days (probation), 30 days (confirmed).</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>7. DH Deep Dive</strong></td>
<td style="padding:12px;word-wrap:break-word;">7 Manifesto principles, authority matrix, escalation rules, zero-tolerance, incentive/penalty structure, client philosophy, communication rules, Rule of Specificity, professionalism standards, social media policy, culture perks</td>
<td style="padding:12px;word-wrap:break-word;">Client SLA: 5 min. Internal SLA: 15 min. "Allies, Not Adversaries" client philosophy. Income = Happy Clients × Skill × Speed. Salary confidentiality = BOTH parties terminated.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>8. Analytics, AI & Practice</strong></td>
<td style="padding:12px;word-wrap:break-word;">6 key HR metrics, 27+ AI prompts (including resume evaluation, behavioral questions, STAR scoring, PIP drafts, 30-60-90 plans, exit analysis), 8 real-world scenarios, process improvement</td>
<td style="padding:12px;word-wrap:break-word;">Target: 14 days time-to-hire, 80% 90-day retention. AI rule: always review, fact-check, and customize before using. Never paste PII.</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.15);">
<td style="padding:12px;word-wrap:break-word;"><strong>9. HR FAQ & Joining Docs</strong></td>
<td style="padding:12px;word-wrap:break-word;">70+ FAQs (including workplace rules, benefits, growth path), 15 email templates, joining checklist, PF & tax guide, dress code, office etiquette, Open Door Policy</td>
<td style="padding:12px;word-wrap:break-word;">Salary by 10th. NDA before client access. PF: 12% + 12%. LOR for top 10% only. Smart Casual dress code. No overtime pay. Team Lead = ownership + 8+ scores.</td>
</tr>
</tbody>
</table>
</div>
</div>

<div class="content-section">
<h3>🎯 Critical Concepts Cheat Sheet</h3>

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin:15px 0;">

<div style="background: #FEE2E2; border-left: 4px solid #EF4444; padding: 15px; border-radius: 8px;">
<strong>🚫 Zero-Tolerance Violations:</strong>
<ol>
<li>Data breach</li>
<li>Confidentiality breach</li>
<li>Moonlighting without approval</li>
<li>Fraud / financial misconduct</li>
<li>Harassment of any kind</li>
<li>Client data theft</li>
<li>Falsifying records / attendance</li>
<li>Substance abuse (coming to work under influence)</li>
</ol>
<strong>Result:</strong> Immediate termination. No PIP, no second chance.
</div>

<div style="background: #D1FAE5; border-left: 4px solid #10B981; padding: 15px; border-radius: 8px;">
<strong>✅ The DH Decision Authority:</strong>
<ul>
<li>Hiring decisions → Delhi Team</li>
<li>Firing decisions → Delhi Team</li>
<li>Salary changes → Delhi Team</li>
<li>Promotions → Delhi Team</li>
<li>Client fires/refunds → Delhi Team</li>
<li>Policy changes → Delhi Team</li>
<li>WFH (up to 2 days) → PM can approve</li>
<li>Leave (standard) → Manager can approve</li>
</ul>
</div>

</div>

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin:15px 0;">

<div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; border-radius: 8px;">
<strong>📊 Key Metrics to Remember:</strong>
<ul>
<li>Time to hire target: <strong>14 days</strong></li>
<li>90-day retention target: <strong>80%</strong></li>
<li>Client message SLA: <strong>5 minutes</strong></li>
<li>Internal message SLA: <strong>15 minutes</strong></li>
<li>Bad hire cost multiplier: <strong>10x salary</strong></li>
<li>Casual leaves: <strong>12/year</strong></li>
<li>Sick leaves: <strong>6/year</strong></li>
<li>F&F settlement: <strong>within 30 days</strong></li>
<li>Knowledge transfer minimum: <strong>7 days</strong></li>
</ul>
</div>

<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px;">
<strong>⚡ HR Process Order:</strong>
<ul>
<li><strong>Hiring:</strong> JD → Source → Screen → Interview → Trial → Offer</li>
<li><strong>Onboarding:</strong> NDA → Documents → Tools → Training → Buddy → 30-60-90</li>
<li><strong>Performance issue:</strong> Document → Verbal → Written → PIP → Terminate</li>
<li><strong>Exit:</strong> Resignation → Notice → KT → Exit Interview → F&F → Letters</li>
<li><strong>Promotion:</strong> 8.0+ for 2 months → Manager recommends → Delhi Team decides</li>
</ul>
</div>

</div>
</div>

<div class="content-section">
<h3>💡 Exam Tips</h3>
<div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 8px; margin: 15px 0;">
<ul>
<li><strong>Think DH-specific</strong> — answers should reflect Digital Heroes policies, not generic HR textbook answers</li>
<li><strong>Numbers matter</strong> — know the SLAs (5 min client, 15 min internal), targets (14 days time-to-hire, 80% 90-day retention), salary policies, and leave counts</li>
<li><strong>Module 7 (DH Deep Dive) carries the most weight</strong> — Manifesto principles, authority matrix, and incentive structure are heavily tested</li>
<li><strong>Scenario questions</strong> — think about WHAT DH would do, not what a generic company would do</li>
<li><strong>When in doubt</strong> — the answer that involves "escalate to Delhi Team" or "document first" is usually correct</li>
</ul>
</div>

<p style="text-align:center; font-size:1.2em; margin:20px 0;"><strong>Good luck! You have got this. 🎯</strong></p>
</div>

<div style="background: linear-gradient(135deg, #0F4C3A, #1E3A5F); border-radius: 16px; padding: 25px; margin-top: 30px; border: 1px solid rgba(34, 197, 94, 0.3);">
    <h3 style="color: #22C55E; margin-bottom: 15px;">🎯 Key Takeaways</h3>
    <ul style="color: #E2E8F0; line-height: 2;">
        <li><strong>10 comprehensive modules</strong> covering every aspect of HR at Digital Heroes</li>
        <li><strong>Hiring economics</strong> — a bad hire costs 10x the monthly salary. Hire slow, fire fast.</li>
        <li><strong>DH Culture is non-negotiable</strong> — 7 Manifesto principles, zero-tolerance rules, "Allies Not Adversaries" client philosophy</li>
        <li><strong>Data-driven HR</strong> — 6 key metrics, 27+ AI prompts, predictive analytics for retention</li>
        <li><strong>Communication excellence</strong> — Rule of Specificity, professionalism standards, channel rules</li>
        <li><strong>Complete FAQ mastery</strong> — workplace policies, benefits, growth paths, conflict resolution</li>
        <li><strong>100% pass required</strong> — this certification proves you are ready to be the backbone of Digital Heroes</li>
    </ul>
    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
        <h4 style="color: #7DD3FC;">🌟 Why YOUR Role Matters</h4>
        <p style="color: #E2E8F0; line-height: 1.7;">Congratulations on reaching the final certification exam. By completing this training, you have demonstrated commitment to excellence that few possess. HR is not a support function — it is THE function that determines whether a company succeeds or fails. Every great company was built on the foundation of great people, and great people were found, hired, developed, and retained by great HR professionals. That is who you are becoming.</p>
        <p style="color: #E2E8F0; line-height: 1.7; margin-top: 10px;">At Digital Heroes, you are not just managing paperwork or answering questions. You are shaping careers, building teams, protecting culture, and creating an environment where talented people can do their best work. That is the most important job in any organization.</p>
        <p style="color: #FCD34D; font-style: italic; margin-top: 15px; font-size: 1.1em;">"Human Resources isn't a thing we do. It's the thing that runs our business." — Steve Wynn</p>
    </div>
</div>
`;

const task10Quiz = [
    // Module 1: HR Mindset (1 question)
    { q: "A team lead says 'We're desperate — just hire someone fast, anyone will do.' As HR, what should you do?", o: ["Comply and hire the first available candidate", "Tell them to hire on their own", "Hire someone on a temporary contract without screening", "Push back — explain that rushing hires costs 10x more than waiting, and follow the proper screening process"], c: 3 },
    // Module 2: JD & Sourcing (1 question)
    { q: "For hiring a Shopify Developer at DH, which sourcing strategy is MOST effective?", o: ["Internshala for interns, LinkedIn and employee referrals for experienced hires", "Newspaper classified ads", "Walk-in interviews only", "Post on all social media platforms randomly"], c: 0 },
    // Module 3: Screening & Interviews (1 question)
    { q: "A candidate gives perfect, rehearsed-sounding answers to every question. What is the best STAR-method follow-up?", o: ["Accept the answers and move on", "Reject them immediately", "Ask 'Why?' twice more to get past scripted responses and test real experience", "Ask them to write an essay instead"], c: 2 },
    // Module 4: Offer & Onboarding (1 question)
    { q: "During a 30-60-90 onboarding plan, what should a new hire accomplish in the FIRST 30 days?", o: ["Independently manage 5+ client projects", "Learn DH tools, complete training module, shadow experienced colleagues, and attend team meetings", "Lead client presentations", "Write SOPs for their department"], c: 1 },
    // Module 5: Performance & Policies (2 questions)
    { q: "An employee has been underperforming for 2 months. Their manager wants to fire them immediately. What is the correct HR process?", o: ["Document issues, issue verbal warning, then written warning, then PIP — skip steps only for zero-tolerance violations", "Support immediate termination to stop further damage", "Put them on PIP directly without any warnings to save time", "Transfer them to a different team to see if performance improves"], c: 0 },
    { q: "An employee scores 5.5 on their monthly performance review. What is their bonus eligibility?", o: ["Full bonus — any passing score qualifies", "Partial bonus (50%)", "No bonus — score is below 6.0 threshold", "Bonus decision is left to the manager"], c: 2 },
    // Module 6: Offboarding (1 question)
    { q: "An employee resigns and wants to leave in 3 days instead of serving 30 days notice. What should HR do?", o: ["Allow it since they want to leave anyway", "Force them to stay the full 30 days regardless of circumstances", "Terminate them immediately to avoid the issue", "Early release is possible only if knowledge transfer is complete AND manager approves"], c: 3 },
    // Module 7: DH Deep Dive (3 questions — most weight)
    { q: "A client leaves a 4-star review on Fiverr. According to the DH Manifesto, how is this treated?", o: ["Celebrated as a positive review", "Treated as a failure — Quality Is Non-Negotiable means 5 stars is the only acceptable standard", "Ignored unless it drops below 3 stars", "Reviewed only if the client complains"], c: 1 },
    // Module 7 continued
    { q: "A team member receives a client message during work hours. What is the maximum allowed response time?", o: ["Within 5 minutes", "Within 1 minute", "Within 15 minutes", "Within 30 minutes"], c: 0 },
    { q: "Sales incentives at DH use a tiered per-order commission structure. For orders over $5,000 (when monthly sales exceed $20K), what commission rate applies?", o: ["1% per order", "2% per order", "5% per order", "3% per order"], c: 3 },
    // Module 8: Analytics & AI (1 question)
    { q: "An HR manager uses ChatGPT to draft a PIP document. What is the CRITICAL rule before sending it?", o: ["Send it directly — AI output is always accurate", "Always review, fact-check, and customize AI output before using it for any HR decision", "Only use AI for emails, never for formal documents", "Have another AI tool verify the first AI's output"], c: 1 },
    // Module 9: FAQ & Joining Docs (3 questions)
    { q: "A new joiner arrives on Day 1 but has not signed the NDA yet. Their manager wants them to start working on a client project immediately. What should HR do?", o: ["Let them start — they can sign the NDA later this week", "Have them sign a verbal agreement instead", "Refuse access to client work until the NDA is signed — this is non-negotiable", "Let the manager decide since it is their team"], c: 2 },
    { q: "What is the employer's Provident Fund (PF) contribution as a percentage of basic salary?", o: ["12%", "8%", "10%", "15%"], c: 0 },
    { q: "An employee asks about switching to a different role within DH. What is the correct process?", o: ["They can switch anytime by informing their current manager", "Internal transfers are not allowed at DH", "Submit a resignation and reapply for the new role", "Discuss with HR and both managers, complete new role's training, and get Delhi Team approval"], c: 3 },
    // Additional Final Cert questions (Module 1-9 cross-cutting)
    { q: "When screening a Shopify Developer candidate, which GitHub indicator is MOST valuable for assessing real skill?", o: ["Total number of repositories", "Consistent 4+ year contribution history with Liquid/Shopify code in repos", "Number of GitHub followers", "Star count on repositories"], c: 1 },
    { q: "At DH, who has the authority to decide the salary offered to a new hire?", o: ["HR Manager based on market research", "The hiring PM or team lead", "Delhi Team ONLY — this is non-negotiable", "The candidate negotiates directly with their manager"], c: 2 },
    { q: "An employee has been absent without notice for 4 consecutive days and is not responding to calls. What is this classified as at DH?", o: ["Absconding — trigger formal notice process with registered letter", "Extended sick leave", "Unauthorized work from home", "Voluntary resignation"], c: 0 },
    { q: "What is the maximum goodwill gesture a CSM can authorize WITHOUT needing Delhi Team approval?", o: ["$25", "$100", "$200", "$50"], c: 3 },
    { q: "According to DH policy, what is the minimum monthly performance score required for probation confirmation?", o: ["5.0", "7.0", "6.0", "8.0"], c: 1 },
    { q: "HR receives a harassment complaint from an employee. What is the maximum investigation timeline per DH policy?", o: ["3 business days", "14 business days", "7 business days", "5 business days"], c: 2 }
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
