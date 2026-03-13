// HR Training Data - COMPREHENSIVE MODULE
// Digital Heroes Certification Program  
// 14 Tasks, 100+ Quiz Questions

const trainingTasks = [
    { id: 1, title: "HR Mindset", description: "People = Revenue", contentFirst: true, studyGuide: ["Time: 60 min", "Bad hire = 3x salary", "Hire slow, fire fast"] },
    { id: 2, title: "Job Description Mastery", description: "Writing JDs that attract A-players", contentFirst: true, studyGuide: ["Time: 45 min", "8 essential elements", "Red flag language to avoid"] },
    { id: 3, title: "Sourcing Candidates", description: "Where to find talent", contentFirst: true, studyGuide: ["Time: 45 min", "LinkedIn, Naukri, referrals", "Building talent pipeline"] },
    { id: 4, title: "Resume Screening", description: "100 CVs to 15 calls", contentFirst: true, studyGuide: ["Time: 60 min", "Red flags checklist", "Scoring system"] },
    { id: 5, title: "Phone Screening", description: "15 calls to 5 interviews", contentFirst: true, studyGuide: ["Time: 45 min", "10-min script", "Knockout questions"] },
    { id: 6, title: "Interview Mastery", description: "The 60-minute deep dive", contentFirst: true, studyGuide: ["Time: 90 min", "STAR method", "Role-specific questions"] },
    { id: 7, title: "Reference Checks", description: "Verifying before offering", contentFirst: true, studyGuide: ["Time: 30 min", "What to ask", "Red flags"] },
    { id: 8, title: "Offer & Negotiation", description: "Closing the candidate", contentFirst: true, studyGuide: ["Time: 45 min", "Offer letter template", "Counter-offer handling"] },
    { id: 9, title: "Onboarding Excellence", description: "First 90 days", contentFirst: true, studyGuide: ["Time: 60 min", "Day 1 checklist", "30-60-90 plan"] },
    { id: 10, title: "Performance Management", description: "Reviews & PIPs", contentFirst: true, studyGuide: ["Time: 60 min", "1:1 templates", "Difficult conversations"] },
    { id: 11, title: "Policies & Compliance", description: "Legal essentials", contentFirst: true, studyGuide: ["Time: 60 min", "Leave policy", "Contracts & NDA"] },
    { id: 12, title: "Employee Relations", description: "Conflict & Culture", contentFirst: true, studyGuide: ["Time: 45 min", "Mediation process", "Building culture"] },
    { id: 13, title: "Offboarding", description: "Exit protocol", contentFirst: true, studyGuide: ["Time: 30 min", "Exit interview", "Knowledge transfer"] },
    { id: 14, title: "Remote & Hybrid Teams", description: "Managing Distributed Workforce", contentFirst: true, studyGuide: ["Time: 60-90 min", "WFH policy enforcement", "Remote onboarding checklist", "Handling remote work abuse"] },
    { id: 15, title: "Agency-Specific HR", description: "HR for Fiverr Digital Agencies", contentFirst: true, studyGuide: ["Time: 90-120 min", "Hiring for gig economy", "Creative vs technical teams", "Scaling rapidly"] },
    { id: 16, title: "HR Data & Metrics", description: "Analytics, Dashboards & Reporting", contentFirst: true, studyGuide: ["Time: 60-75 min", "Key HR metrics", "Building dashboards", "Predicting attrition"] },
    { id: 17, title: "Practical HR Exercises", description: "8 Real-World Scenarios", contentFirst: true, studyGuide: ["Time: 90-120 min", "Draft JDs, PIPs, exit reports", "Screen sample resumes", "Handle difficult scenarios"] },
    { id: 18, title: "Digital Heroes HR Deep Dive", description: "DH Policies, Matrices & Frameworks", contentFirst: true, studyGuide: ["Time: 60-90 min", "Authority & escalation matrices", "Incentive-penalty framework", "Cross-city coordination"] },
    { id: 19, title: "Final Certification", description: "HR Mastery Exam", contentFirst: false, studyGuide: ["Time: 90 min", "Covers tasks 1-18", "Score 100% to certify"] }
];

const task1Content = `
<h2>📚 TASK 1: HR MINDSET - People ARE Revenue</h2>

<div class="content-section">
<h3>💰 The ₹15 Lakh Hiring Mistake</h3>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ Real Story from Digital Heroes:</strong><br><br>
We once hired a "rockstar developer" who interviewed perfectly. Excellent communication, great portfolio, passed all technical tests. Three months in, we discovered he was outsourcing his work to someone else while collecting full salary.<br><br>
<strong>Total Cost:</strong>
<ul>
<li>3 months salary: ₹1,80,000</li>
<li>Projects delayed: ₹5,00,000+ in client refunds</li>
<li>Re-hiring costs: ₹50,000</li>
<li>Training new hire: ₹1,00,000</li>
<li>Team morale damage: Priceless (negative)</li>
</ul>
<strong style="color: #EF4444; font-size: 1.2em;">Total: ₹15+ Lakhs lost</strong>
</div>
<p><strong>Lesson:</strong> Verification > Belief. Test ACTIONS, not just words. References are not optional.</p>
</div>

<div class="content-section">
<h3>🎯 The HR Mission at Digital Heroes</h3>
<p>Your job is NOT to fill seats. Your job is to <strong>build a championship team</strong>.</p>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong Mindset</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to hire someone for this role"</td></tr>
<tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right Mindset</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to find someone who will multiply team output"</td></tr>
<tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong Mindset</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"They have good skills"</td></tr>
<tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right Mindset</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"They have skills AND attitude AND culture fit"</td></tr>
</table>
</div>

<div class="content-section">
<h3>📊 The Economics of Hiring</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stage</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cost</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Job Posting + Screening</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5,000-15,000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 weeks</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interview Process</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹15,000-30,000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-3 weeks</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training Period</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹40,000-80,000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4-8 weeks</td></tr>
<tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bad Hire Replacement</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>₹2,00,000+</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>3-6 months</strong></td></tr>
</table>
<div class="highlight-box"><strong>The Rule:</strong> Invest 10 extra minutes in screening = Save 3 months of pain.</div>
</div>

<div class="content-section">
<h3>🧠 The "Hire Slow, Fire Fast" Philosophy</h3>
<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">HIRE SLOW</h4>
<ul>
<li>Multiple interview rounds (3 minimum)</li>
<li>Technical + Cultural + Behavioral assessment</li>
<li>Reference checks (2-3 per candidate)</li>
<li>Trial task before offer</li>
<li>Wait for the RIGHT person, not just ANY person</li>
</ul>
</div>
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">FIRE FAST</h4>
<ul>
<li>If someone shows attitude problems in first 2 weeks = Exit immediately</li>
<li>If performance issues persist after 1 month = Start PIP</li>
<li>Don't hold on to bad hires hoping they'll improve</li>
<li>One bad apple spoils the whole team</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>📈 The 6→10 Performance Equation</h3>
<div class="highlight-box" style="text-align: center; padding: 25px;">
<h4 style="margin-top: 0; color: #10B981; font-size: 1.3em;">Your job: Find "6" performers and help them become "10"s</h4>
<p>We don't need people who are already perfect. We need people with:<br>
<strong>Right Attitude + Willingness to Learn + Basic Skills</strong></p>
</div>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skill</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Attitude</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hire?</th></tr>
<tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">A-Player</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8-10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ HIRE FAST</td></tr>
<tr style="background: rgba(245, 158, 11, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Diamond in Rough</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">✅ HIRE & TRAIN</td></tr>
<tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Toxic Talent</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ NEVER HIRE</td></tr>
<tr style="background: rgba(239, 68, 68, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lost Cause</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ NEVER HIRE</td></tr>
</table>
<p><strong>Key Insight:</strong> You can train skills. You cannot train attitude.</p>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: JOB DESCRIPTION MASTERY</h2>

<div class="content-section">
<h3>📝 The 8 Essential JD Elements</h3>
<p>A job description is your first filter. Good JD = Good candidates. Bad JD = Wasted interviews.</p>

<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
<h4 style="color: #6366F1; margin-top: 0;">1. HOOK TITLE</h4>
<p>❌ "Developer Needed"<br>✅ "Shopify Developer - Build Stores for US Clients (₹40-60k/month)"</p>
</div>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">2. COMPANY INTRO (2-3 lines)</h4>
<p>"Digital Heroes is a premium Shopify agency with 4.9★ rating across 2000+ projects. We serve US/UK clients and build stores that generate $10K-$500K/month in revenue."</p>
</div>

<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">3. ROLE SUMMARY</h4>
<p>What they'll actually DO day-to-day. Be specific, not vague.</p>
</div>

<div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EC4899;">
<h4 style="color: #EC4899; margin-top: 0;">4. REQUIREMENTS (Must-Have vs Nice-to-Have)</h4>
<p>Separate mandatory skills from optional ones. Don't create impossible requirements.</p>
</div>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #8B5CF6;">
<h4 style="color: #8B5CF6; margin-top: 0;">5. BENEFITS & PERKS</h4>
<p>What's in it for them? Salary range, growth, learning, flexibility.</p>
</div>

<div style="background: rgba(6, 182, 212, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #06B6D4;">
<h4 style="color: #06B6D4; margin-top: 0;">6. WORK ARRANGEMENT</h4>
<p>Remote/Hybrid/Office? Timings? Equipment provided?</p>
</div>

<div style="background: rgba(34, 197, 94, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #22C55E;">
<h4 style="color: #22C55E; margin-top: 0;">7. APPLICATION INSTRUCTIONS</h4>
<p>Clear next steps. Include a screening question to filter lazy applicants.</p>
</div>

<div style="background: rgba(249, 115, 22, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F97316;">
<h4 style="color: #F97316; margin-top: 0;">8. DISQUALIFIERS</h4>
<p>State what you DON'T want. Saves everyone time.</p>
</div>
</div>
</div>

<div class="content-section">
<h3>🚩 Red Flag Language to Avoid</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(239, 68, 68, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Bad</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It's Bad</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Better</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Fast-paced environment"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code for "chaotic"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Dynamic projects with clear deadlines"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Wear many hats"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code for "no boundaries"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specify the actual roles</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Competitive salary"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Means nothing</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Give a range: "₹40-60k/month"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Rockstar/Ninja"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unprofessional</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Senior Developer"</td></tr>
</table>
</div>

<div class="content-section">
<h3>📋 JD Template: Shopify Developer</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>🚀 Shopify Developer - Build Premium Stores for US Clients</strong><br>
<strong>Location:</strong> Remote (India) | <strong>Salary:</strong> ₹40,000 - ₹70,000/month<br><br>

<strong>About Digital Heroes:</strong><br>
We're a premium Shopify agency with 4.9★ rating, 2000+ projects, serving US/UK brands. Our developers build stores generating $10K-$500K/month.<br><br>

<strong>What You'll Do:</strong><br>
• Customize Shopify themes using Liquid, HTML, CSS, JavaScript<br>
• Build high-converting product pages and landing pages<br>
• Optimize site speed (Target: Mobile 85+, Desktop 90+)<br>
• Work directly with international clients<br><br>

<strong>Must Have:</strong><br>
• 1+ year Shopify/Liquid experience<br>
• Own laptop with stable internet<br>
• Fluent English (written)<br>
• Available during US overlap hours (6PM-10PM IST)<br><br>

<strong>Nice to Have:</strong><br>
• Shopify Partner certification<br>
• JavaScript frameworks (React, Vue)<br><br>

<strong>Benefits:</strong><br>
• 5-day work week<br>
• Paid training on latest Shopify features<br>
• Performance bonuses<br>
• Growth path to Senior Developer<br><br>

<strong>To Apply:</strong><br>
Send your resume + portfolio link + answer: "What's your favorite Shopify theme and why?"<br><br>

<strong>❌ Do NOT Apply If:</strong><br>
• You don't have your own laptop<br>
• You can't work evening hours<br>
• You're looking for only part-time
</div>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: SOURCING CANDIDATES</h2>

<div class="content-section">
<h3>🔍 Where to Find Talent</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Source</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cost</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quality</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LinkedIn</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Senior roles, PM, Sales</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹1,500/month</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">High</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Naukri</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Volume hiring</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5,000-15,000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">Medium</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Internshala</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interns, freshers</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹2,000-5,000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">Variable</td></tr>
<tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Employee Referrals</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All roles</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5-10k bonus</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>HIGHEST</strong></td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>YouTube Community</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Developers who know us</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">High (pre-filtered)</td></tr>
</table>
<div class="highlight-box"><strong>Pro Tip:</strong> Employee referrals have 4x higher retention rate. Always ask team first before posting externally.</div>
</div>

<div class="content-section">
<h3>🎯 Building a Talent Pipeline</h3>
<p>Don't wait until you need someone. Build relationships now.</p>
<ul>
<li><strong>Keep a database</strong> of good candidates who weren't right for previous roles</li>
<li><strong>Follow up quarterly</strong> with promising candidates</li>
<li><strong>Build relationships</strong> before you need to hire</li>
<li><strong>Create a talent pool</strong> for each role type</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: RESUME SCREENING - 100 CVs → 15 Calls</h2>

<div class="content-section">
<h3>⏱️ The Speed Screening Method</h3>
<p>You'll receive 100+ applications per role. You have ~30 seconds per resume initially.</p>

<div class="highlight-box">
<strong>The 30-Second Scan:</strong>
<ol>
<li><strong>Current/Recent Role:</strong> Relevant experience?</li>
<li><strong>Years of Experience:</strong> Meets minimum?</li>
<li><strong>Skills Match:</strong> Has required tech stack?</li>
<li><strong>Location:</strong> Can work our hours?</li>
<li><strong>Red Flags:</strong> Any immediate disqualifiers?</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚩 Resume Red Flags (Immediate Reject)</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(239, 68, 68, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Red Flag</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Job hopping (3+ jobs in 2 years)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Will leave us too</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No portfolio/GitHub link</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Claims skills but no proof</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Typos and formatting errors</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low attention to detail</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Generic objective statement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Didn't customize for us</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No email response to screening Q</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can't follow instructions</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gaps with no explanation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What were they doing?</td></tr>
</table>
</div>

<div class="content-section">
<h3>✅ Green Flags (Move to Call)</h3>
<ul>
<li>Relevant Shopify/ecommerce experience</li>
<li>Portfolio with live sites</li>
<li>GitHub activity</li>
<li>Clear progression in career</li>
<li>Specific achievements with numbers</li>
<li>Custom cover letter mentioning Digital Heroes</li>
<li>Answered screening question thoughtfully</li>
</ul>
</div>

<div class="content-section">
<h3>📊 CV Scoring System</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Criteria</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Max Points</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Relevant Experience</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skills Match</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Portfolio Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Career Progression</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Attention to Detail</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15</td></tr>
<tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Total</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>100</strong></td></tr>
</table>
<p><strong>70+ = Phone Screen</strong> | <strong>50-69 = Maybe</strong> | <strong>&lt;50 = Reject</strong></p>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: PHONE SCREENING - 15 Calls → 5 Interviews</h2>

<div class="content-section">
<h3>📞 The 10-Minute Phone Screen Script</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>OPENING (30 sec):</strong><br>
"Hi [Name], this is [Your Name] from Digital Heroes. I saw your application for the [Role] position. I have a few quick questions - will take about 10 minutes. Is this a good time?"<br><br>

<strong>QUESTION 1 - LAPTOP (30 sec):</strong><br>
"Do you have your own laptop that you can use for work?"<br>
✅ Yes = Continue | ❌ No = Polite reject<br><br>

<strong>QUESTION 2 - COMPUTER USAGE (30 sec):</strong><br>
"How many hours per day do you use a computer - not phone, computer?"<br>
✅ 4+ hours = Continue | ❌ Less = Reject<br><br>

<strong>QUESTION 3 - PROBLEM SOLVING (1 min):</strong><br>
"If your laptop has a problem - slow, virus, errors - what do you typically do?"<br>
✅ "Google it, try to fix" = Tech-savvy | ❌ "Take to shop" = Reject<br><br>

<strong>QUESTION 4 - WHY US (1 min):</strong><br>
"What do you know about Digital Heroes and why did you apply?"<br>
✅ Did research = Continue | ❌ Generic answer = Yellow flag<br><br>

<strong>QUESTION 5 - AVAILABILITY (30 sec):</strong><br>
"This role requires working evening hours (6PM-10PM IST) for US client overlap. Is that okay?"<br>
✅ Yes = Continue | ❌ No = Reject<br><br>

<strong>QUESTION 6 - SALARY (30 sec):</strong><br>
"What's your expected monthly salary?"<br>
Note: If way above budget, clarify our range.<br><br>

<strong>QUESTION 7 - NOTICE PERIOD (30 sec):</strong><br>
"When can you start if selected?"<br>
Note: 30+ days may be negotiable with current employer.<br><br>

<strong>CLOSING (30 sec):</strong><br>
"Thanks [Name]. If you clear this round, we'll invite you for a 45-min interview where you'll meet the team. You'll hear from us within 3 days. Any questions for me?"
</div>
</div>

<div class="content-section">
<h3>📊 Phone Screen Scoring</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Criteria</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Points</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Has own laptop</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pass/Fail</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Computer usage 4+ hrs</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pass/Fail</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Problem-solving mindset</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">/20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Research on company</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">/20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Communication clarity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">/20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Availability match</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">/20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Salary expectation match</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">/20</td></tr>
</table>
<p><strong>80+ = Interview</strong> | <strong>60-79 = Maybe</strong> | <strong>&lt;60 = Reject</strong></p>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: INTERVIEW MASTERY - The 60-Minute Deep Dive</h2>

<div class="content-section">
<h3>🎯 Interview Structure</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Phase</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Duration</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1. Warm-up</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rapport building, set agenda</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2. Background</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Career story, why us</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3. Technical</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Role-specific skills</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4. Behavioral</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">STAR method questions</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5. Culture Fit</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Values alignment</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6. Q&A</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Their questions</td></tr>
</table>
</div>

<div class="content-section">
<h3>🎤 Developer Interview Questions</h3>
<div class="highlight-box">
<strong>Technical (20 min)</strong>
<ol>
<li>"Walk me through how you'd customize a Shopify product page."</li>
<li>"What's the difference between {% render %} and {% include %}?"</li>
<li>"How do you optimize a slow Shopify store?"</li>
<li>"Show me your favorite project. What was challenging?"</li>
<li>"How do you handle a bug on a live client site?"</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>Behavioral (STAR Method)</strong>
<ol>
<li>"Tell me about a time you missed a deadline. What happened?"</li>
<li>"Describe a conflict with a teammate. How did you resolve it?"</li>
<li>"Give an example of receiving tough feedback. How did you react?"</li>
<li>"Tell me about a project that failed. What did you learn?"</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🎤 PM Interview Questions</h3>
<div class="highlight-box">
<strong>Scenario-Based</strong>
<ol>
<li>"A client is angry about a delay. How do you handle it?"</li>
<li>"Developer says task will take 5 days. Client wants it in 2. What do you do?"</li>
<li>"You discover the project is off-track. When and how do you communicate?"</li>
<li>"Client keeps adding scope. How do you manage?"</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🎤 Sales Interview Questions</h3>
<div class="highlight-box">
<strong>Role-Play</strong>
<ol>
<li>"Sell me this pen." (Classic test)</li>
<li>"I think you're too expensive." - How do you respond?</li>
<li>"Your competitor quoted half the price." - Response?</li>
<li>"I need to think about it." - What's your next move?</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📊 Interview Scoring Matrix</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Criteria</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Max Points</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical Skills</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Problem Solving</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Communication</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">20</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Culture Fit</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Attitude & Growth</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Red Flags</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">-10 each</td></tr>
<tr style="background: rgba(16, 185, 129, 0.15);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hire Threshold</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>70/90</strong></td></tr>
</table>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: REFERENCE CHECKS</h2>

<div class="content-section">
<h3>📞 Why References Matter</h3>
<p>Remember the ₹15 Lakh mistake? That could have been prevented with one reference call.</p>
<div class="warning-box">
<strong>Non-Negotiable:</strong> NEVER make an offer without 2 reference checks minimum.
</div>
</div>

<div class="content-section">
<h3>📋 Reference Check Script</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>INTRO:</strong><br>
"Hi, I'm [Name] from Digital Heroes. [Candidate] has applied for a role with us and listed you as a reference. Do you have 5 minutes?"<br><br>

<strong>QUESTION 1:</strong> "What was your working relationship with [Candidate]?"<br>
<strong>QUESTION 2:</strong> "What were their key responsibilities?"<br>
<strong>QUESTION 3:</strong> "How would you rate their quality of work on a scale of 1-10?"<br>
<strong>QUESTION 4:</strong> "How did they handle pressure and deadlines?"<br>
<strong>QUESTION 5:</strong> "Were there any concerns about their performance?"<br>
<strong>QUESTION 6:</strong> "Would you rehire them? Why or why not?"<br>
<strong>QUESTION 7:</strong> "Is there anything I should know before making a decision?"<br><br>

<strong>THANK:</strong> "Thank you so much for your time and honesty."
</div>
</div>

<div class="content-section">
<h3>🚩 Reference Red Flags</h3>
<ul>
<li>Reference is hesitant to speak</li>
<li>"I can only confirm employment dates"</li>
<li>Long pauses before answering</li>
<li>Vague answers about performance</li>
<li>Reference is a friend, not a manager</li>
<li>"Would you rehire?" answered with anything other than "Yes"</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: OFFER & NEGOTIATION</h2>

<div class="content-section">
<h3>📧 Offer Letter Template</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Subject: Welcome to Digital Heroes! - Offer Letter</strong><br><br>

Dear [Name],<br><br>

We're thrilled to offer you the position of <strong>[Role]</strong> at Digital Heroes!<br><br>

<strong>Compensation:</strong><br>
• Monthly Gross Salary: ₹[Amount]<br>
• Performance Bonus: Up to [X]% of salary<br>
• [Any other benefits]<br><br>

<strong>Start Date:</strong> [Date]<br>
<strong>Reporting To:</strong> [Manager Name]<br>
<strong>Work Arrangement:</strong> [Remote/Hybrid/Office]<br>
<strong>Working Hours:</strong> [Timing]<br><br>

<strong>Probation:</strong> 3 months with monthly performance reviews.<br><br>

Please sign and return this offer by [Deadline]. If you have any questions, feel free to reach out.<br><br>

We're excited to have you on the team! 🚀<br><br>

Welcome aboard,<br>
[HR Name]<br>
Digital Heroes
</div>
</div>

<div class="content-section">
<h3>💬 Counter-Offer Handling</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Candidate Says</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your Response</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I want 10% more"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We can discuss performance-based increment after 3 months probation"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I have another offer"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What's attracting you there? Let me see how we compare on growth, not just salary"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Current employer is matching"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Counter-offers rarely work out. Why were you looking to leave in the first place?"</td></tr>
</table>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: ONBOARDING EXCELLENCE - First 90 Days</h2>

<div class="content-section">
<h3>📋 Pre-Boarding Checklist (Before Day 1)</h3>
<ul>
<li>☐ System access created (Email, Slack, project tools)</li>
<li>☐ Signed offer letter received</li>
<li>☐ Documents collected (ID, PAN, bank details)</li>
<li>☐ Buddy assigned from team</li>
<li>☐ First week schedule planned</li>
<li>☐ Welcome email sent with Day 1 instructions</li>
<li>☐ Manager briefed on new hire</li>
<li>☐ Training materials ready</li>
</ul>
</div>

<div class="content-section">
<h3>📅 Day 1 Protocol</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Activity</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Owner</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:00 AM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Welcome call with HR</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9:30 AM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">System setup & access verification</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR + IT</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10:30 AM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Company overview & culture</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">11:30 AM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team introductions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12:00 PM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lunch break</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">-</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1:00 PM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Role-specific training begins</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4:00 PM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First task assignment</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5:30 PM</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">End of day check-in</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buddy</td></tr>
</table>
</div>

<div class="content-section">
<h3>📊 30-60-90 Day Plan</h3>

<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
<h4 style="color: #6366F1; margin-top: 0;">DAYS 1-30: LEARN</h4>
<ul>
<li>Complete role-specific training modules</li>
<li>Shadow senior team members</li>
<li>Understand tools and processes</li>
<li>Complete first small project/task</li>
<li>Weekly 1:1 with manager</li>
</ul>
<p><strong>Success Metric:</strong> Passed training certification</p>
</div>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">DAYS 31-60: CONTRIBUTE</h4>
<ul>
<li>Handle projects with supervision</li>
<li>Start client interaction (if applicable)</li>
<li>Identify areas for improvement</li>
<li>Seek feedback proactively</li>
<li>Bi-weekly 1:1 with manager</li>
</ul>
<p><strong>Success Metric:</strong> 3-5 projects completed with minimal revisions</p>
</div>

<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">DAYS 61-90: OWN</h4>
<ul>
<li>Work independently on projects</li>
<li>Mentor newer team members</li>
<li>Propose process improvements</li>
<li>Client-facing without supervision</li>
<li>Probation review meeting</li>
</ul>
<p><strong>Success Metric:</strong> Operating at full capacity, positive client feedback</p>
</div>
</div>
</div>

<div class="content-section">
<h3>📋 Probation Review Meeting (Day 90)</h3>
<div class="highlight-box">
<strong>Agenda:</strong>
<ol>
<li>Review 30-60-90 milestones achieved</li>
<li>Discuss performance metrics</li>
<li>Address any concerns</li>
<li>Confirm/extend/terminate based on performance</li>
<li>Set goals for next quarter</li>
</ol>
</div>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: PERFORMANCE MANAGEMENT</h2>

<div class="content-section">
<h3>📅 1:1 Meeting Template</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Weekly 1:1 Agenda (30 min)</strong><br><br>

<strong>1. WINS (5 min)</strong><br>
"What went well this week? Any wins to celebrate?"<br><br>

<strong>2. CHALLENGES (10 min)</strong><br>
"What's blocking you? Any frustrations?"<br><br>

<strong>3. SUPPORT (5 min)</strong><br>
"What do you need from me to be more effective?"<br><br>

<strong>4. GOALS (5 min)</strong><br>
"What are your priorities for next week?"<br><br>

<strong>5. DEVELOPMENT (5 min)</strong><br>
"Any skills you want to develop? Training needed?"<br><br>

<strong>Action Items:</strong> [Document and track]
</div>
</div>

<div class="content-section">
<h3>📊 Performance Review Template</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rating (1-5)</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Comments</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quality of Work</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[   ]</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"></td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Productivity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[   ]</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"></td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Communication</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[   ]</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"></td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Teamwork</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[   ]</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"></td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reliability</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[   ]</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"></td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Initiative</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[   ]</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"></td></tr>
</table>
<p><strong>Scale:</strong> 1=Below Expectations, 2=Needs Improvement, 3=Meets, 4=Exceeds, 5=Outstanding</p>
</div>

<div class="content-section">
<h3>🔥 Performance Improvement Plan (PIP)</h3>
<div class="warning-box">
<strong>When to Use:</strong> When an employee is underperforming for 30+ days despite feedback.
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>PIP Structure:</strong>
<ol>
<li><strong>Problem Statement:</strong> Specific performance issues</li>
<li><strong>Expected Standard:</strong> What success looks like</li>
<li><strong>Timeline:</strong> Usually 30-60 days</li>
<li><strong>Support Provided:</strong> Training, mentoring, tools</li>
<li><strong>Check-in Schedule:</strong> Weekly reviews</li>
<li><strong>Consequences:</strong> What happens if not improved</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💬 Difficult Conversation Scripts</h3>

<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Script: Performance Concern</strong><br><br>
"[Name], I want to discuss something I've noticed. Over the past [timeframe], [specific issue - e.g., 'you've missed 3 deadlines']. This is concerning because [impact - e.g., 'it affects client trust and team workload'].<br><br>
I want to understand what's happening. Is there something blocking you that I can help with?<br><br>
[Listen]<br><br>
Going forward, I need [specific improvement]. Let's check in again in [timeframe]. Does that work?"
</div>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: HR POLICIES & COMPLIANCE</h2>

<div class="content-section">
<h3>📋 Essential Policy Documentation</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Policy</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review Frequency</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Attendance & Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sets expectations for working hours and leave entitlements</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annually</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Work from Home</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defines remote work guidelines</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annually</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code of Conduct</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Behavioral expectations and ethics</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annually</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Anti-Harassment (POSH)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Legal compliance and safe workplace</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annually</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data Protection</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client and company data security</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annually</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disciplinary Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Actions for policy violations</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annually</td></tr>
</table>
</div>

<div class="content-section">
<h3>⚖️ POSH Compliance (Prevention of Sexual Harassment)</h3>
<div class="warning-box">
<strong>⚠️ Legal Requirement:</strong> Under the POSH Act 2013, every organization with 10+ employees MUST have an Internal Complaints Committee (ICC).
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>ICC Requirements:</strong>
<ul>
<li>Presiding Officer: Senior woman employee</li>
<li>2+ members from employees (committed to women's cause)</li>
<li>1 external member from NGO/legal background</li>
<li>At least 50% women members</li>
</ul>
</div>

<p><strong>Your Role as HR:</strong></p>
<ol>
<li>Ensure ICC is properly constituted</li>
<li>Conduct annual POSH training for all employees</li>
<li>Display POSH policy prominently</li>
<li>Maintain confidentiality in all complaints</li>
<li>Complete inquiry within 90 days</li>
</ol>
</div>

<div class="content-section">
<h3>📅 Leave Policy Template</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leave Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Days/Year</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Carry Forward</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Encashment</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Casual Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sick Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Earned Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes (Max 30)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maternity Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">182 (26 weeks)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">N/A</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">N/A</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paternity Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No</td></tr>
</table>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: EMPLOYEE RELATIONS & CONFLICT RESOLUTION</h2>

<div class="content-section">
<h3>🔥 Common Workplace Conflicts</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Conflict Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Signs</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Resolution Approach</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interpersonal Clash</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team members avoiding each other, tension in meetings</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mediation session, focus on behaviors not personalities</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Workload Dispute</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complaints about unfair distribution</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data-driven review of tasks, redistribution</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager-Employee Tension</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skip-level complaints, disengagement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Facilitate communication, coaching for manager</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Salary/Promotion Dispute</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Resignation threats, decreased performance</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Transparent review of criteria, career path discussion</td></tr>
</table>
</div>

<div class="content-section">
<h3>🎯 Conflict Resolution Framework (PEACE)</h3>
<div style="display: grid; gap: 10px; margin: 20px 0;">
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px;">
<strong style="color: #6366F1;">P - Prepare</strong>
<p>Gather facts, understand both perspectives before meeting</p>
</div>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px;">
<strong style="color: #6366F1;">E - Engage</strong>
<p>Meet with parties separately first, then together if needed</p>
</div>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px;">
<strong style="color: #6366F1;">A - Acknowledge</strong>
<p>Validate feelings without taking sides</p>
</div>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px;">
<strong style="color: #6366F1;">C - Collaborate</strong>
<p>Work together to find mutually acceptable solutions</p>
</div>
<div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px;">
<strong style="color: #6366F1;">E - Execute</strong>
<p>Document agreement, follow up to ensure resolution holds</p>
</div>
</div>
</div>

<div class="content-section">
<h3>💬 Mediation Script</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Opening:</strong><br>
"Thank you both for coming. The goal today is to understand each other's perspective and find a way forward. Ground rules: one person speaks at a time, we focus on behaviors and impacts, not personal attacks. [Name], would you like to start by sharing your perspective?"<br><br>

<strong>After first person:</strong><br>
"[Name 2], what do you hear [Name 1] saying? And now, share your perspective."<br><br>

<strong>Finding common ground:</strong><br>
"It sounds like you both want [common goal]. Where might you be able to meet in the middle?"<br><br>

<strong>Closing:</strong><br>
"Let me summarize what we've agreed. [Summary]. I'll follow up in one week to see how things are going."
</div>
</div>

<div class="content-section">
<h3>📊 Employee Engagement Initiatives</h3>
<ul>
<li><strong>Monthly Team Events:</strong> Virtual games, celebrations, team lunches</li>
<li><strong>Recognition Programs:</strong> Employee of the Month, peer recognition</li>
<li><strong>Feedback Channels:</strong> Anonymous surveys, suggestion boxes</li>
<li><strong>Wellness Initiatives:</strong> Mental health days, fitness challenges</li>
<li><strong>Learning & Development:</strong> Training budgets, certification support</li>
</ul>
</div>
`;

const task13Content = `
<h2>📚 TASK 13: OFFBOARDING EXCELLENCE</h2>

<div class="content-section">
<h3>🔥 Types of Separation</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Process</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notice Period</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Voluntary Resignation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Written resignation → Acceptance → Handover → Exit</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-60 days (as per contract)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Termination for Cause</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Documentation → Warning → Termination letter</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Immediate or as per policy</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Layoff/Redundancy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Business justification → Communication → Severance</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30 days + severance</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contract End</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Advance notice → Documentation → Exit</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">As per contract</td></tr>
</table>
</div>

<div class="content-section">
<h3>📋 Offboarding Checklist</h3>
<div class="highlight-box">
<strong>Day of Resignation/Termination:</strong>
<ul>
<li>☐ Document resignation reason (for voluntary)</li>
<li>☐ Send acceptance of resignation</li>
<li>☐ Notify IT for system access timeline</li>
<li>☐ Inform relevant stakeholders</li>
<li>☐ Schedule exit interview</li>
</ul>

<strong>During Notice Period:</strong>
<ul>
<li>☐ Create knowledge transfer plan</li>
<li>☐ Document ongoing projects and handover</li>
<li>☐ Collect company assets (laptop, ID, etc.)</li>
<li>☐ Process remaining leaves/encashment</li>
<li>☐ Prepare relieving documents</li>
</ul>

<strong>Last Working Day:</strong>
<ul>
<li>☐ Conduct exit interview</li>
<li>☐ Revoke all system access</li>
<li>☐ Collect all company property</li>
<li>☐ Issue relieving letter</li>
<li>☐ Issue experience letter</li>
<li>☐ Process full & final settlement</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>💬 Exit Interview Template</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Questions to Ask:</strong><br><br>
1. "What prompted you to start looking for a new opportunity?"<br><br>
2. "What did you enjoy most about working here?"<br><br>
3. "What could we have done differently to keep you?"<br><br>
4. "How was your relationship with your manager and team?"<br><br>
5. "Were you given adequate resources and training?"<br><br>
6. "Would you recommend Digital Heroes to a friend? Why/why not?"<br><br>
7. "Is there anything else you'd like to share?"<br><br>

<em>Note: Document responses for pattern analysis. If multiple people cite same issues, escalate to leadership.</em>
</div>
</div>

<div class="content-section">
<h3>📄 Full & Final Settlement Components</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Component</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Details</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pending Salary</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">For days worked in last month</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leave Encashment</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unused earned leave × daily rate</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bonus (Pro-rata)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">If declared before exit</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gratuity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">If 5+ years of service</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deductions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recovery for assets, advances, notice period shortfall</td></tr>
</table>
</div>
`;

const task14Content = `
<h2>📚 TASK 14: REMOTE & HYBRID TEAM MANAGEMENT</h2>

<div class="content-section">
<h3>🌐 The Distributed Workforce at Digital Heroes</h3>
<p>Digital Heroes operates across <strong>Lucknow and Delhi</strong>, with team members frequently working remotely. Managing a distributed workforce requires different HR strategies than managing everyone in one office.</p>

<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ Real DH Scenario:</strong><br><br>
A developer was approved for WFH. Over 3 weeks, their response times went from 5 minutes to 2+ hours. Standup attendance dropped from 100% to 40%. Client deliveries were delayed twice. When investigated, we found they had taken on freelance work during office hours.<br><br>
<strong>Cost:</strong> 2 client refunds (₹45,000), 3 weeks of delayed projects, team trust damaged.<br>
<strong>Lesson:</strong> WFH requires clear accountability frameworks, not blind trust.
</div>
</div>

<div class="content-section">
<h3>📋 DH Work-From-Home Policy Framework</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirement</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Verification</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Internet Speed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimum 50 Mbps</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed test screenshot on Day 1</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Camera Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Camera ON during all meetings</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager verification</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response Time</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 15 minutes during work hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slack/message audit</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Workspace</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dedicated quiet space</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Photo verification</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Availability</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full work hours (10 AM - 7 PM IST)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time tracking tool</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily Standup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mandatory attendance</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meeting attendance log</td></tr>
</table>
</div>

<div class="content-section">
<h3>🏠 Remote Onboarding: First-Week Checklist</h3>
<div class="highlight-box">
<strong>Day 1 (Remote):</strong>
<ul>
<li>Welcome video call with entire team (camera ON, 30 min)</li>
<li>System access: Slack, email, project management tools, GitHub/dev tools</li>
<li>IT setup verification: laptop, VPN, internet speed test</li>
<li>Share employee handbook, training module links, and SOPs</li>
<li>Assign buddy/mentor for daily check-ins (first 2 weeks)</li>
</ul>
</div>
<div class="highlight-box">
<strong>Days 2-3 (Remote):</strong>
<ul>
<li>Training module enrollment and first 2 tasks completion</li>
<li>Shadow 2 live client calls or project meetings</li>
<li>1:1 with direct manager — expectations, KRAs, daily routine</li>
<li>Introduction to cross-city team (Delhi/Lucknow)</li>
</ul>
</div>
<div class="highlight-box">
<strong>Days 4-5 (Remote):</strong>
<ul>
<li>First small task assignment with buddy oversight</li>
<li>HR check-in: How are you settling in? Any blockers?</li>
<li>Review of company policies: leave, attendance, escalation</li>
<li>Set up 30-60-90 day goals document</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 Communication Cadence for Remote Teams</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(16, 185, 129, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cadence</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Format</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Duration</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily Standup</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Meet (camera ON)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yesterday / Today / Blockers</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly 1:1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video call</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Performance, growth, concerns</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bi-weekly Team Sync</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All-hands video</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">45 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cross-team updates, wins</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly Review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager + HR</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">60 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">KPI review, goal setting</td></tr>
</table>
</div>

<div class="content-section">
<h3>⚠️ Detecting & Handling Remote Work Abuse</h3>
<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">Red Flags to Watch</h4>
<ul>
<li>Response times consistently exceeding 30 minutes</li>
<li>Camera always "broken" during meetings</li>
<li>Standup updates vague or repetitive ("working on same thing")</li>
<li>Deliverables quality or pace declining week-over-week</li>
<li>Unavailable during core hours without explanation</li>
<li>Background noise suggesting non-home environment</li>
<li>GitLab/GitHub commit patterns showing odd hours only</li>
</ul>
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">Investigation Process</h4>
<ol>
<li><strong>Week 1:</strong> Document patterns (times, incidents, evidence)</li>
<li><strong>Week 2:</strong> Informal 1:1 — "I noticed X, is everything okay?"</li>
<li><strong>Week 3:</strong> Formal meeting with manager + HR, present evidence</li>
<li><strong>Decision:</strong> PIP with daily check-ins OR revoke WFH privilege</li>
<li><strong>Escalation:</strong> If no improvement → disciplinary action per policy</li>
</ol>
</div>
</div>
</div>

<div class="content-section">
<h3>🎯 Remote Team Engagement Activities</h3>
<div class="highlight-box">
<strong>Monthly Activities HR Should Organize:</strong>
<ul>
<li><strong>Virtual Coffee Roulette:</strong> Randomly pair team members for 15-min non-work chats</li>
<li><strong>Show & Tell Friday:</strong> One team member presents a personal project or hobby</li>
<li><strong>Online Game Sessions:</strong> Monthly 30-min quiz or casual gaming (Kahoot, Skribbl)</li>
<li><strong>Birthday/Work Anniversary Celebrations:</strong> Virtual party with e-gift cards</li>
<li><strong>Learning Lunch:</strong> Bi-weekly knowledge sharing sessions during lunch hour</li>
<li><strong>Quarterly In-Person Meetups:</strong> Plan physical gatherings for distributed teams</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🛠️ Tools for Remote HR Management</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Case at DH</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Communication</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slack</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily async communication, channels per project</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video Meetings</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Meet</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standups, 1:1s, client calls</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time Tracking</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Toggl / Clockify</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hours logged, project time allocation</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project Management</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ClickUp / Trello</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task assignment, deadline tracking</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR Management</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Sheets / HRMS</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leave tracking, attendance, payroll</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Document Sharing</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Drive</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SOPs, policies, shared resources</td></tr>
</table>
</div>

<div class="content-section">
<h3>🏢 Managing Lucknow + Delhi Split</h3>
<div class="highlight-box">
<strong>Cross-City HR Protocols:</strong>
<ul>
<li><strong>Escalation Path:</strong> Local manager → HR → Delhi Team (as per escalation matrix)</li>
<li><strong>Policy Consistency:</strong> Same policies apply across both cities — no local exceptions</li>
<li><strong>Communication:</strong> All-hands meetings include BOTH cities every 2 weeks</li>
<li><strong>Travel:</strong> Quarterly visits between offices for team bonding and alignment</li>
<li><strong>Time Zone:</strong> Same IST — but commute/traffic patterns differ, be flexible on start times within 30-min window</li>
</ul>
</div>
</div>
`;

const task15Content = `
<h2>📚 TASK 15: AGENCY-SPECIFIC HR</h2>

<div class="content-section">
<h3>🏢 What Makes Agency HR Different?</h3>
<p>Digital Heroes is a <strong>Fiverr-based digital agency</strong>. This means HR operates in a fundamentally different environment than traditional companies. Understanding these differences is critical.</p>

<div class="highlight-box">
<strong>Agency HR vs Traditional HR:</strong>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dimension</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Traditional Company</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DH (Fiverr Agency)</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue Model</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly salary, fixed clients</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Per-project, Fiverr orders</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hiring Speed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-60 day pipeline</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Need people yesterday</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skill Mix</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specialized roles</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-skill (WP + Shopify + design)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Work Pace</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sprint cycles, quarterly goals</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily deliveries, 24-48h turnarounds</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Exposure</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimal for most roles</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Everyone touches clients</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team Age</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mixed demographics</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Primarily 20-28 years old</td></tr>
</table>
</div>
</div>

<div class="content-section">
<h3>🎯 Hiring for the Gig Economy Mindset</h3>
<p>At DH, you are not hiring for a "job." You are hiring people who can handle <strong>speed, quality, and volume simultaneously</strong>.</p>
<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">What to Screen For</h4>
<ul>
<li><strong>Speed:</strong> Can they deliver a Shopify homepage in 24 hours?</li>
<li><strong>Quality:</strong> Does their portfolio show attention to detail?</li>
<li><strong>Communication:</strong> Can they write clear Fiverr delivery messages?</li>
<li><strong>Adaptability:</strong> WordPress today, Shopify tomorrow, custom code next week</li>
<li><strong>Client Handling:</strong> Can they manage revision requests without escalating?</li>
<li><strong>Self-Management:</strong> Can they juggle 3-5 active projects at once?</li>
</ul>
</div>
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">Red Flags for Agency Hires</h4>
<ul>
<li>"I prefer working on one project at a time" (agency = multi-project always)</li>
<li>"I need detailed specs before I start" (agency = work with ambiguity)</li>
<li>"I don't do client communication" (everyone communicates at DH)</li>
<li>"I only know one platform" (versatility is mandatory)</li>
<li>No freelance or gig experience (may struggle with pace)</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>👥 Managing Creative vs Technical Teams</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Aspect</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Developers</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Designers</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Writers</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Motivation</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical challenges, clean code</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creative freedom, visual impact</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Narrative quality, SEO results</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Frustration</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unclear requirements, scope creep</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make the logo bigger" feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rewriting same article 5 times</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">KPI Style</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Measurable (bug count, speed)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Subjective (client approval)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quantifiable (traffic, SEO rank)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review Style</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code reviews, PR feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design critiques, client reactions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Editor feedback, analytics</td></tr>
</table>
<div class="warning-box"><strong>HR Principle:</strong> Don't apply the same management style to all teams. A designer needs creative autonomy; a developer needs clear specs; a PM needs authority and tools. Customize your HR approach per role type.</div>
</div>

<div class="content-section">
<h3>🔄 The DH Pipeline: Sales → PM → Dev → CS</h3>
<div class="highlight-box">
<strong>Cross-Functional Coordination HR Must Understand:</strong>
<ol>
<li><strong>Sales</strong> closes the Fiverr order and collects requirements</li>
<li><strong>PM</strong> creates project plan, assigns developer, sets deadlines</li>
<li><strong>Developer/Designer</strong> builds the deliverable (Shopify/WP/custom)</li>
<li><strong>QA</strong> reviews against checklist before delivery</li>
<li><strong>PM</strong> delivers to client on Fiverr, handles revisions</li>
<li><strong>CS</strong> manages post-delivery support and upsells</li>
</ol>
<p><strong>HR Impact:</strong> When you hire for ANY role, you must understand how they fit in this pipeline. A bad PM hire doesn't just affect PM — it cascades to developers (unclear briefs), clients (missed deadlines), and sales (bad reviews).</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Rapid Scaling: Hiring 5+ People/Month</h3>
<div class="highlight-box">
<strong>DH Rapid Scaling Playbook:</strong>
<ul>
<li><strong>Always-On JDs:</strong> Keep 3-4 core roles (Shopify Dev, WP Dev, PM, Designer) permanently posted</li>
<li><strong>Talent Pool:</strong> Maintain database of 50+ pre-screened candidates ready to activate</li>
<li><strong>Batch Hiring:</strong> Interview 10+ candidates per week, extend offers in batches</li>
<li><strong>Parallel Onboarding:</strong> Start 3-5 new hires simultaneously with group training sessions</li>
<li><strong>30-Day Assessment:</strong> Quick evaluation — keep or exit decisions within first month</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>💰 Compensation for Indian Digital Agency Roles</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Role</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Intern</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Junior (0-1yr)</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mid (1-3yr)</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Senior (3+yr)</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shopify Developer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹8-12K/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹2.4-3.6L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹4-6L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹6-10L</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WordPress Developer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹8-12K/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹2-3L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹3.5-5.5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5.5-9L</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project Manager</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹10-15K/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹2.5-3.5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹4-6L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹6-9L</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UI/UX Designer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹8-12K/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹2-3L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹3.5-5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5-8L</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Writer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹6-10K/mo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹1.8-2.5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹3-4.5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹4.5-7L</td></tr>
</table>
<div class="warning-box"><strong>Note:</strong> These are Lucknow/Tier-2 city benchmarks. Delhi and metro rates are 20-40% higher. Always check current Naukri/LinkedIn salary insights before making offers.</div>
</div>

<div class="content-section">
<h3>🎓 Intern-to-Full-Time Pipeline</h3>
<div class="highlight-box">
<strong>DH Intern Conversion Framework:</strong>
<ol>
<li><strong>Month 1:</strong> Training module completion (must finish role-specific training with 100% quiz scores)</li>
<li><strong>Month 2:</strong> Supervised project work (buddy-assigned, daily reviews)</li>
<li><strong>Month 3:</strong> Semi-independent work (weekly reviews, client exposure starts)</li>
<li><strong>Evaluation Criteria:</strong> Training score ≥90%, on-time delivery ≥80%, attitude rating from 3+ team members</li>
<li><strong>Conversion Decision:</strong> Manager + HR joint review at Day 75 (not Day 90 — give time for paperwork)</li>
</ol>
<p><strong>Target:</strong> Convert 40-50% of interns to full-time. Don't lower standards to hit conversion numbers.</p>
</div>
</div>

<div class="content-section">
<h3>🏗️ Building Employer Brand</h3>
<div class="highlight-box">
<strong>Channels for DH Employer Branding:</strong>
<ul>
<li><strong>LinkedIn:</strong> Post team achievements, project showcases, culture glimpses weekly</li>
<li><strong>Naukri:</strong> Keep company profile updated with accurate reviews and culture photos</li>
<li><strong>Glassdoor:</strong> Encourage satisfied employees to leave honest reviews</li>
<li><strong>Instagram:</strong> Behind-the-scenes content, team events, workspace tours</li>
<li><strong>College Partnerships:</strong> Guest lectures, workshop sponsorships, placement drives</li>
<li><strong>Fiverr Profile:</strong> High-rated Fiverr presence attracts talent who want to work with top sellers</li>
</ul>
</div>
</div>
`;

const task16Content = `
<h2>📚 TASK 16: HR DATA, METRICS & REPORTING</h2>

<div class="content-section">
<h3>📊 Why HR Analytics Matters</h3>
<p>HR decisions based on data beat gut feelings every time. At Digital Heroes, we track metrics to make smarter hiring, retention, and performance decisions.</p>
<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ The Cost of Data-Free HR:</strong><br><br>
Without metrics, you can't answer: "Why did 5 developers leave in Q3?" Was it compensation? Management? Workload? Culture? Without data, every answer is a guess. With data, you can pinpoint: all 5 left teams managed by the same person, within 60 days of a workload spike, and all cited "work-life balance" in exit interviews.
</div>
</div>

<div class="content-section">
<h3>📈 Core HR Metrics</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formula</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DH Target</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why It Matters</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time-to-Hire</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Days from JD post to offer accepted</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≤25 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long hiring = lost revenue from empty seats</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cost-per-Hire</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">(Job boards + recruiter time + tools) ÷ hires</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≤₹15,000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hiring is an investment, track ROI</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offer Acceptance Rate</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Accepted ÷ Extended × 100</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≥80%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low = compensation or brand problem</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90-Day Retention</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Retained past 90 days ÷ Total new hires</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≥85%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Early exits = onboarding/hiring failure</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annual Attrition</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Departures ÷ Avg headcount × 100</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≤20%</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High = systemic culture/management issue</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue per Employee</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Total revenue ÷ Headcount</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growing QoQ</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Measures overall team productivity</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training Completion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modules completed ÷ Modules assigned</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100% in 30 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Incomplete training = unprepared employees</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employee Satisfaction (eNPS)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Promoters - Detractors (NPS formula)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≥30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leading indicator of future attrition</td></tr>
</table>
</div>

<div class="content-section">
<h3>📋 Building HR Dashboards</h3>
<div class="highlight-box">
<strong>Google Sheets HR Dashboard Template:</strong>
<ul>
<li><strong>Tab 1 — Recruitment Funnel:</strong> Applications → Screens → Interviews → Offers → Hires (with conversion rates)</li>
<li><strong>Tab 2 — Headcount Tracker:</strong> Current headcount by department, role, city, employment type</li>
<li><strong>Tab 3 — Attrition Analysis:</strong> Monthly exits, reasons, department breakdown, voluntary vs involuntary</li>
<li><strong>Tab 4 — Training Progress:</strong> Module completion by employee, average scores, overdue modules</li>
<li><strong>Tab 5 — Leave & Attendance:</strong> Leave balances, sick leave patterns, late arrivals</li>
<li><strong>Tab 6 — Compensation:</strong> Salary ranges by role, market comparison, last revision dates</li>
</ul>
<p><strong>Update Frequency:</strong> Weekly for recruitment, monthly for everything else. Share with management in monthly HR review.</p>
</div>
</div>

<div class="content-section">
<h3>📝 Employee Satisfaction Surveys</h3>
<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">Survey Design Best Practices</h4>
<ul>
<li>Keep it short: 10-15 questions maximum (completion rate drops after 15)</li>
<li>Mix question types: Likert scale (1-5), multiple choice, 1-2 open-ended</li>
<li>Guarantee anonymity: use Google Forms with "no email collection"</li>
<li>Key categories: Management, Workload, Growth, Compensation, Culture</li>
<li>Include eNPS question: "How likely are you to recommend DH as a workplace?" (0-10)</li>
<li>Deploy quarterly, analyze within 1 week, share results within 2 weeks</li>
</ul>
</div>
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">Common Survey Mistakes</h4>
<ul>
<li>Running surveys but never sharing results or taking action</li>
<li>Making surveys identifiable (people won't be honest)</li>
<li>Asking leading questions: "Don't you agree our culture is great?"</li>
<li>Running during high-stress periods (skewed negative results)</li>
<li>Comparing to unrealistic benchmarks instead of tracking trends</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>📊 Monthly HR Report Template</h3>
<div class="highlight-box">
<strong>What to Include in Your Monthly HR Report:</strong>
<ol>
<li><strong>Executive Summary:</strong> 3-bullet highlight (wins, concerns, actions needed)</li>
<li><strong>Recruitment:</strong> Positions open, filled, pipeline status, time-to-hire trend</li>
<li><strong>Headcount:</strong> Total, new joins, exits, net change from last month</li>
<li><strong>Attrition:</strong> Who left, why, department analysis, voluntary vs involuntary</li>
<li><strong>Training:</strong> Modules in progress, completions, overdue employees</li>
<li><strong>Compliance:</strong> POSH status, pending documentation, policy updates</li>
<li><strong>Engagement:</strong> Survey results (if quarterly), engagement activity participation</li>
<li><strong>Action Items:</strong> What HR will do next month based on this data</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🔮 Using Data to Predict & Prevent Attrition</h3>
<div class="highlight-box">
<strong>Attrition Risk Indicators to Track:</strong>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(239, 68, 68, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Signal</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Risk Level</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR Action</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn profile updated + new connections</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medium</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schedule casual 1:1 check-in</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Engagement score dropped 2+ points</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Manager + HR intervention meeting</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No salary revision in 12+ months</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proactive compensation review</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Work anniversary approaching (1yr, 2yr marks)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medium</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growth conversation, career path discussion</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Repeated leave requests on Mondays/Fridays</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medium</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wellness check-in, workload review</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Decreased participation in team activities</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Low-Medium</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buddy system activation</td></tr>
</table>
</div>
</div>

<div class="content-section">
<h3>📊 Linking HR Metrics to Business Outcomes</h3>
<div class="highlight-box">
<strong>The Business Case for Every HR Metric:</strong>
<ul>
<li><strong>Time-to-Hire ↔ Revenue:</strong> Every vacant developer seat = ~₹50K-80K/month in undelivered Fiverr orders</li>
<li><strong>Training Completion ↔ Quality:</strong> Untrained employees make 3x more errors, causing client refunds</li>
<li><strong>Attrition ↔ Cost:</strong> Each replacement costs 3x monthly salary in hiring + training + lost productivity</li>
<li><strong>eNPS ↔ Referrals:</strong> Happy employees refer 4x more candidates than neutral ones (saving ₹15-30K per hire)</li>
<li><strong>90-Day Retention ↔ ROI:</strong> Losing someone in 90 days means 100% hiring investment wasted + restarting</li>
</ul>
</div>
</div>
`;

const task17Content = `
<h2>📚 TASK 17: PRACTICAL HR EXERCISES</h2>

<div class="content-section">
<h3>🎯 Apply Your Knowledge: 8 Real-World Scenarios</h3>
<p>This task contains <strong>8 practical exercises</strong> based on real situations at Digital Heroes. For each scenario, attempt the exercise before reading the model answer. This is where theory becomes practice.</p>
<div class="warning-box"><strong>Instructions:</strong> Read each scenario carefully. Draft your response using actual DH templates and frameworks. Then compare with the model answer. Your answer doesn't need to match word-for-word, but should cover the key elements.</div>
</div>

<div class="content-section">
<h3>📝 Scenario 1: Draft a Job Description</h3>
<div class="highlight-box">
<strong>Brief:</strong> Write a JD for a <strong>Mid-Level Shopify Developer</strong> at Digital Heroes.<br>
<strong>Details:</strong> 1-3 years experience, Lucknow-based, ₹4-6 LPA, must know Liquid, theme customization, and app integration. Will handle Fiverr client orders.
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">Model Answer Key Elements:</h4>
<ul>
<li>Opening hook mentioning Fiverr Top Rated seller + real impact</li>
<li>Clear separation of "Must Have" vs "Nice to Have" skills</li>
<li>Day-in-the-life section describing typical DH workflow</li>
<li>Mention of training program (14+ training modules)</li>
<li>Growth path: Junior → Mid → Senior → Lead trajectory</li>
<li>Culture callouts: young team, fast-paced, learn daily</li>
<li>No discriminatory language (age, gender, religion)</li>
<li>Application instructions and expected response time</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: Resume Screening Exercise</h3>
<div class="highlight-box">
<strong>Brief:</strong> You received 5 resumes for the Shopify Developer role above. Score each on a 1-10 scale using DH screening criteria.
</div>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Candidate</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Profile</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Score</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Decision</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">A</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2yr Shopify exp, Liquid + JS, portfolio with 8 stores, asking ₹5.5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8/10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Phone Screen</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">B</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5yr WordPress only, no Shopify, asking ₹8L, no portfolio</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3/10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reject</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">C</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fresh graduate, Shopify course certificate, GitHub with 3 practice stores, asking ₹2.5L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6/10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Intern Track</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">D</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3yr Shopify agency, 50+ stores, Liquid + React + Node, asking ₹12L</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9/10 skill, budget mismatch</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Negotiate or Pass</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">E</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1.5yr Shopify, 3 jobs in 18 months, no references listed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5/10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Phone Screen with caution</td></tr>
</table>
</div>

<div class="content-section">
<h3>📝 Scenario 3: Write a PIP Document</h3>
<div class="highlight-box">
<strong>Brief:</strong> A developer has missed 4 out of last 8 deadlines, quality of code has declined (3 client complaints in a month), and they've been late to standups 6 times in 2 weeks. Write the PIP.
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">PIP Must Include:</h4>
<ol>
<li>Employee name, role, manager name, HR representative, date</li>
<li>Specific performance gaps with dates and evidence</li>
<li>Expected improvement targets with measurable criteria</li>
<li>Support provided: mentorship, reduced workload, training access</li>
<li>Timeline: 30 or 60 days with weekly check-in schedule</li>
<li>Consequences of non-improvement (clearly stated)</li>
<li>Employee acknowledgment signature line</li>
<li>Review dates: Week 2, Week 4 (and Week 6, 8 if 60-day PIP)</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 4: Exit Interview Summary</h3>
<div class="highlight-box">
<strong>Brief:</strong> A PM with 14 months tenure is leaving for a competitor. In the exit interview, they mention: their manager takes credit for their work, no salary revision in 14 months, and they felt "stuck" with no growth path. Write the exit interview summary report.
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">Report Must Include:</h4>
<ul>
<li>Factual summary of reasons (not editorialized)</li>
<li>Classification: Management issue / Compensation / Growth</li>
<li>Recommended actions for each issue raised</li>
<li>Cross-reference with other exit data (is this a pattern?)</li>
<li>Confidentiality note: how this information will be used</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 5: 90-Day Onboarding Plan</h3>
<div class="highlight-box">
<strong>Brief:</strong> Create a 90-day onboarding plan for a new Project Manager joining DH. Include week-by-week goals, training milestones, and evaluation criteria.
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">Plan Structure:</h4>
<ul>
<li><strong>Week 1-2:</strong> Orientation, tool setup, PM training module tasks 1-5, shadow senior PM</li>
<li><strong>Week 3-4:</strong> Training tasks 6-10, handle first supervised project, daily check-ins</li>
<li><strong>Month 2:</strong> 3-4 active projects, complete PM training certification, weekly 1:1s</li>
<li><strong>Month 3:</strong> Full project load (5-8 projects), client-facing independently, 90-day review</li>
<li><strong>Success Criteria:</strong> Training 100%, on-time delivery ≥80%, client satisfaction ≥4/5</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 6: Handle a Harassment Complaint</h3>
<div class="highlight-box">
<strong>Brief:</strong> An employee reports that a senior team member has been making inappropriate comments during meetings. The comments are not overtly sexual but make the employee uncomfortable. Walk through your response step-by-step.
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">Step-by-Step Response:</h4>
<ol>
<li>Listen without judgment, document everything the complainant says</li>
<li>Assure confidentiality and explain the investigation process</li>
<li>Inform ICC (Internal Complaints Committee) as per POSH requirements</li>
<li>Collect evidence: meeting recordings, chat logs, witness statements</li>
<li>Interview the accused separately — present allegations, get their response</li>
<li>Interview witnesses (if any) confidentially</li>
<li>ICC deliberation and recommendation within 90 days</li>
<li>Action: warning, sensitivity training, transfer, or termination based on severity</li>
<li>Follow up with complainant — ensure no retaliation</li>
<li>Document entire process for compliance records</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 7: Salary Negotiation</h3>
<div class="highlight-box">
<strong>Brief:</strong> A strong Shopify developer candidate (2.5 years experience, excellent portfolio) has a competing offer at ₹7.2 LPA. Your approved budget is ₹6 LPA max. The candidate is your top choice. How do you negotiate?
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">Negotiation Strategy:</h4>
<ul>
<li>Acknowledge their competing offer without dismissing it</li>
<li>Present total compensation: base + training value + growth path + perks</li>
<li>Offer ₹6L base + performance bonus potential (₹50K-1L after 6 months)</li>
<li>Highlight: Fiverr exposure, 14+ training modules, young team, career growth</li>
<li>Propose 6-month salary review tied to KPIs (if they hit targets, revise to ₹7L)</li>
<li>If still no: request budget exception from management with business case</li>
<li>Know your walk-away point: don't over-hire, don't compromise standards</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 8: Draft a Termination Letter</h3>
<div class="highlight-box">
<strong>Brief:</strong> An employee has failed their 60-day PIP. Performance did not improve despite documented support. Draft the termination letter.
</div>
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">Letter Must Include:</h4>
<ul>
<li>Professional, respectful tone throughout</li>
<li>Reference to PIP dates, targets, and documented shortfalls</li>
<li>Effective date of termination and notice period details</li>
<li>Final settlement details: salary, leave encashment, gratuity (if applicable)</li>
<li>Company property return requirements (laptop, ID, access cards)</li>
<li>System access revocation date</li>
<li>NDA and non-compete reminder (if applicable)</li>
<li>Contact person for questions about the process</li>
</ul>
</div>
</div>
`;

const task18Content = `
<h2>📚 TASK 18: DIGITAL HEROES HR DEEP DIVE</h2>

<div class="content-section">
<h3>🏢 DH-Specific Policies & Frameworks</h3>
<p>This task covers HR systems and policies unique to Digital Heroes. You must know these inside-out because employees will come to you with questions about them daily.</p>
<div class="highlight-box">
<strong>Key DH Policy Documents You Must Master:</strong>
<ul>
<li><a href="../authority-matrix.html" style="color: #6366F1;">Authority Matrix</a> — Who can approve what (hiring, spending, firing)</li>
<li><a href="../escalation-matrix.html" style="color: #6366F1;">Escalation Matrix</a> — How issues flow from local → HR → Delhi Team</li>
<li><a href="../performance-review.html" style="color: #6366F1;">Performance Review Framework</a> — Quarterly review process and templates</li>
<li><a href="../rnr.html" style="color: #6366F1;">Roles & Responsibilities</a> — Who does what across all departments</li>
<li><a href="../incentive-penalty.html" style="color: #6366F1;">Incentive & Penalty Framework</a> — Rewards and consequences system</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 Authority Matrix for HR</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Action</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can Approve</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must Escalate To</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Post a new JD</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR + Hiring Manager</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No escalation needed</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Extend an offer within budget</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR + Manager</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No escalation needed</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Extend offer ABOVE budget</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cannot self-approve</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delhi Team approval required</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Start a PIP</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HR + Manager jointly</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inform Delhi Team</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Terminate an employee</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cannot self-approve</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delhi Team approval MANDATORY</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Approve salary revision</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cannot self-approve</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delhi Team approval required</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Change company policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cannot self-approve</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delhi Team only</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Handle POSH complaint</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ICC committee</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delhi Team informed immediately</td></tr>
</table>
</div>

<div class="content-section">
<h3>⬆️ Escalation Matrix for HR Issues</h3>
<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">Level 1: Handle Locally (HR)</h4>
<ul>
<li>Leave requests and approvals</li>
<li>Minor attendance issues (first offense)</li>
<li>Routine onboarding tasks</li>
<li>Training module tracking and reminders</li>
<li>Casual employee queries about policies</li>
</ul>
</div>
<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">Level 2: HR + Manager Joint Decision</h4>
<ul>
<li>Repeated attendance violations</li>
<li>Performance concerns requiring PIP</li>
<li>Inter-team conflicts</li>
<li>Probation extension or early confirmation</li>
<li>Role changes or internal transfers</li>
</ul>
</div>
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">Level 3: Delhi Team Escalation (Mandatory)</h4>
<ul>
<li>Any termination (voluntary or involuntary)</li>
<li>Salary revisions or budget exceptions</li>
<li>POSH complaints</li>
<li>Legal or compliance issues</li>
<li>Policy changes</li>
<li>Complaints about managers/leadership</li>
<li>Data breach or confidentiality violations</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>💰 Incentive-Penalty Framework Administration</h3>
<div class="highlight-box">
<strong>HR's Role in Incentive-Penalty System:</strong>
<ul>
<li><strong>Tracking:</strong> Maintain monthly scorecard for each employee (KPIs, attendance, quality)</li>
<li><strong>Calculation:</strong> Compute incentive amounts based on framework formula</li>
<li><strong>Communication:</strong> Inform employees of incentive earned or penalty applied with clear reasoning</li>
<li><strong>Appeals:</strong> Process appeals within 5 business days, escalate to Delhi Team if unresolved</li>
<li><strong>Documentation:</strong> Keep records of all incentive/penalty actions for quarterly audits</li>
</ul>
</div>
<div class="warning-box"><strong>Critical Rule:</strong> Never apply a penalty without documented evidence AND manager confirmation. Penalties without documentation create legal risk and destroy trust. Always follow: Evidence → Manager Review → HR Confirmation → Employee Communication → Documentation.</div>
</div>

<div class="content-section">
<h3>🏋️ Quarterly Performance Reviews at DH</h3>
<div class="highlight-box">
<strong>DH Performance Review Process:</strong>
<ol>
<li><strong>Week 1:</strong> Self-assessment forms distributed to all employees</li>
<li><strong>Week 2:</strong> Manager completes their assessment independently</li>
<li><strong>Week 3:</strong> 1:1 review meeting (Manager + Employee), HR observes if needed</li>
<li><strong>Week 4:</strong> HR compiles results, identifies patterns, shares summary with Delhi Team</li>
</ol>
<strong>Review Dimensions:</strong>
<ul>
<li>KRA achievement (40% weight)</li>
<li>Quality of work (25% weight)</li>
<li>Attitude & collaboration (20% weight)</li>
<li>Growth & learning (15% weight)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📅 Company Leave Calendar & Edge Cases</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leave Type</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Entitlement</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edge Case Rules</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Casual Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12 days/year</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Max 3 consecutive days, cannot be combined with holidays without approval</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sick Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6 days/year</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Medical certificate required for 2+ consecutive days</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Earned Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15 days/year (accrued)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can carry forward up to 30 days, encashable on exit</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Maternity Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">26 weeks (first 2 children)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">As per Maternity Benefit Act, 2017</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paternity Leave</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 days</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 30 days of child birth</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loss of Pay (LOP)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">After exhausting above</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deducted from salary, requires manager approval</td></tr>
</table>
</div>

<div class="content-section">
<h3>🔗 Cross-City Coordination (Lucknow + Delhi)</h3>
<div class="highlight-box">
<strong>HR Coordination Protocols:</strong>
<ul>
<li><strong>Weekly Sync:</strong> HR shares weekly report with Delhi Team every Monday by 11 AM</li>
<li><strong>Hiring Approvals:</strong> All offers go through Delhi Team before extension</li>
<li><strong>Escalations:</strong> Use the escalation matrix — do NOT skip levels</li>
<li><strong>Policy Updates:</strong> Delhi Team communicates policy changes, HR implements locally</li>
<li><strong>Headcount Planning:</strong> Joint quarterly planning between local HR and Delhi Team</li>
<li><strong>Compliance:</strong> Local HR ensures Lucknow labor law compliance, Delhi handles central compliance</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 Managing the Training Module System</h3>
<div class="highlight-box">
<strong>HR's Responsibilities for Training:</strong>
<ul>
<li><strong>Assignment:</strong> Assign correct training module to each new hire based on role</li>
<li><strong>Tracking:</strong> Monitor completion progress weekly via training dashboard</li>
<li><strong>Deadline:</strong> New hires must complete role-specific training within 30 days</li>
<li><strong>Escalation:</strong> If training is overdue by 7+ days, escalate to manager and flag in weekly report</li>
<li><strong>Certification:</strong> Verify certificate authenticity using verify.html before recording completion</li>
<li><strong>Records:</strong> Maintain training completion records in employee files</li>
</ul>
</div>
<div class="warning-box"><strong>DH has 14+ role-specific training modules</strong> covering Shopify, WordPress, PM, Sales, HR, CS, Designer, Finance, Social Media, Operations, Full-Stack, Content, Client Chat, and Fiverr Risk. Each module has 100-200+ quiz questions. An untrained employee should NEVER be assigned to live client work.</div>
</div>
`;

const task19Content = `
<h2>📚 TASK 19: FINAL CERTIFICATION EXAM</h2>

<div class="content-section">
<h3>🏆 Congratulations on Reaching the Final Stage!</h3>
<p>You've completed 18 comprehensive tasks covering every aspect of HR at Digital Heroes. Before certification, let's review everything you've mastered:</p>

<div class="highlight-box">
<strong>Core Competencies Mastered:</strong>
<ul>
<li>✅ <strong>HR Mindset:</strong> People = Revenue philosophy (Task 1)</li>
<li>✅ <strong>Recruitment Pipeline:</strong> JDs, sourcing, screening, interviews, references (Tasks 2-7)</li>
<li>✅ <strong>Selection & Closing:</strong> Offer negotiation, counter-offer handling (Task 8)</li>
<li>✅ <strong>Onboarding:</strong> 30-60-90 day planning, buddy system, remote onboarding (Task 9)</li>
<li>✅ <strong>Performance:</strong> KRAs/KPIs, reviews, PIPs, difficult conversations (Task 10)</li>
<li>✅ <strong>Compliance:</strong> POSH, leave policies, contracts, documentation (Task 11)</li>
<li>✅ <strong>Employee Relations:</strong> Conflict resolution, engagement, culture building (Task 12)</li>
<li>✅ <strong>Offboarding:</strong> Exit interviews, F&F settlement, knowledge transfer (Task 13)</li>
<li>✅ <strong>Remote Teams:</strong> WFH policies, distributed team management (Task 14)</li>
<li>✅ <strong>Agency HR:</strong> Fiverr-specific hiring, scaling, pipeline coordination (Task 15)</li>
<li>✅ <strong>HR Analytics:</strong> Metrics, dashboards, data-driven decisions (Task 16)</li>
<li>✅ <strong>Practical Application:</strong> 8 real-world scenarios with model answers (Task 17)</li>
<li>✅ <strong>DH Deep Dive:</strong> Authority matrix, escalation, incentive-penalty system (Task 18)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 Key HR Metrics to Remember</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formula</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DH Target</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to Fill</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Days from JD posting to offer accepted</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≤25 days</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offer Acceptance Rate</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offers accepted ÷ Total offers × 100</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≥80%</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90-Day Retention</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Retained past 90 days ÷ Total new hires</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≥85%</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Annual Attrition</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Departures ÷ Average headcount × 100</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≤20%</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employee Satisfaction (eNPS)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Promoters - Detractors</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≥30</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training Completion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Completed ÷ Assigned modules</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100% in 30 days</td></tr>
</table>
</div>

<div class="content-section">
<h3>🎯 Certification Requirements</h3>
<ol>
<li><strong>Quiz Score:</strong> 100% on the final certification exam (this quiz)</li>
<li><strong>All 18 previous tasks:</strong> Must be completed with passing scores</li>
<li><strong>Practical Competence:</strong> Ready to handle live HR operations independently</li>
</ol>

<div class="warning-box" style="margin-top: 20px;">
<strong>🚀 Next Steps After Certification:</strong>
<ul>
<li>Shadow senior HR for first 2 weeks on live recruitment cycles</li>
<li>Handle 5 end-to-end recruitment cycles with guidance</li>
<li>Conduct first solo exit interview</li>
<li>Complete POSH certification online (legal requirement)</li>
<li>Set up and maintain HR analytics dashboard</li>
<li>Begin managing training module system for new hires</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📚 Ready for the Final Exam?</h3>
<p>This exam covers ALL 18 tasks. You need 100% to earn your HR Professional certification. Good luck!</p>
</div>
`;

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK - 10 Questions Each (20 for Final)
// =============================================================================

const task1Quiz = [
    { q: "A department head requests hiring a junior at minimum salary to 'save budget.' The role requires handling ₹50L client accounts. Your response as HR should be:", o: ["Approve the request since department heads know their budget constraints better than HR does — this aligns with industry best practices and ensures consistent results across different project types", "Post the junior role but secretly screen for mid-level candidates to satisfy both parties", "Flag the risk — a junior handling ₹50L accounts creates liability, recommend a mid-level hire with proper compensation", "Reject the request outright and escalate to the Delhi Team for overriding the department head"], c: 2 },
    { q: "During your first week as HR, you notice the sales team has 40% attrition in 6 months. What's the FIRST metric you investigate?", o: ["Check if exit interviews mention compensation gaps between market rate and current offers", "Review the sales team's LinkedIn activity to identify who might be planning to leave next", "Compare the team's average tenure against industry benchmarks for similar-sized companies", "Look at the hiring source data to determine if the recruitment channel is attracting wrong fits"], c: 0 },
    { q: "The CEO says 'We need 5 developers hired by Friday.' It's Wednesday. What's the correct HR response?", o: ["Start posting on every job board immediately and schedule back-to-back interviews for Thursday", "Set realistic expectations — explain the quality vs speed tradeoff with data on average time-to-hire", "Contact staffing agencies for contract developers as a temporary bridge while recruiting permanent hires", "Agree to the timeline but privately plan for a 2-week actual delivery without communicating the delay"], c: 1 },
    { q: "You discover that a team lead has been conducting interviews without HR present, making verbal salary promises. What's the immediate risk?", o: ["The verbal promises could create legal liability if they exceed approved compensation bands for the role", "The team lead is simply being proactive and this shows good ownership of the hiring process overall", "This only matters if the candidates actually accept — verbal promises aren't legally binding in most cases", "The primary concern is that the team lead might be hiring friends rather than qualified candidates here"], c: 0 },
    { q: "A hiring manager says 'I don't need HR in interviews, I know my domain.' The correct principle to apply is:", o: ["Respect their expertise — domain leaders are better judges of technical capability than HR generalists and ensures long-term sustainability across deliverables", "Ask the Delhi Team to mandate HR presence so the hiring manager can't refuse the standard protocol", "Explain that HR evaluates culture fit, red flags, and ensures compliance that domain experts typically miss", "Compromise by joining only final-round interviews to minimize friction with the hiring manager's process"], c: 2 },
    { q: "In the 'People = Revenue' framework, which scenario represents the HIGHEST revenue risk?", o: ["Hiring a brilliant engineer who openly mocks company values during team meetings and creates discord", "A developer who is 10% slower than peers but has zero client complaints over 12 months of service — following this approach systematically prevents common mistakes and keeps the workflow predictable", "A sales rep who exceeds targets by 20% but occasionally submits expense reports one day late", "An HR coordinator who takes 48 hours instead of 24 hours to process routine onboarding paperwork"], c: 0 },
    { q: "You're calculating the cost of a bad hire for a ₹8LPA position. Which factor is MOST commonly underestimated?", o: ["The recruiter's time spent screening candidates, which typically represents 15-20% of annual salary", "The productivity loss of the team members who covered the role during the vacancy period before hiring", "Opportunity cost — deals lost, clients frustrated, and team morale damaged during the failed tenure", "The direct cost of the job postings across multiple platforms used during the recruitment campaign"], c: 2 },
    { q: "An employee's performance drops after 6 months of excellent work. The HR Mindset approach says to FIRST:", o: ["Issue a written warning with a 30-day Performance Improvement Plan to create documentation early — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Schedule a skip-level meeting with their manager's boss to get an unbiased perspective on the situation", "Investigate root cause — personal issues, manager conflict, or role mismatch — before assuming incompetence", "Transfer them to a different team to see if the environment change resolves the performance decline"], c: 2 },
    { q: "The company is scaling from 50 to 150 employees in 12 months. What HR infrastructure MUST be built FIRST?", o: ["A comprehensive employee handbook covering all policies, benefits, and company culture expectations — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "An advanced HRIS system with automated payroll, leave tracking, and performance management modules", "Standardized hiring pipeline — JDs, screening criteria, interview scorecards, and onboarding checklists", "A formal mentorship program pairing new hires with experienced employees for knowledge transfer"], c: 2 },
    { q: "Two equally qualified candidates: one asks for ₹2L above budget with 5 years experience, another is within budget with 3 years. Which HR principle applies?", o: ["Always hire within budget — financial discipline protects the company from compensation inflation", "Calculate the revenue impact of the experience gap — if ₹2L buys ₹20L in productivity, it's worth it", "Present both options to the hiring manager with a cost-benefit analysis for informed decision-making", "Negotiate the experienced candidate down to budget since they've already shown interest in the role"], c: 2 }
];

const task2Quiz = [
    { q: "A hiring manager sends you a JD that lists 15 'required' skills including specific framework versions. What's the problem?", o: ["An inflated requirements list filters out strong candidates who have transferable skills but lack one niche tool", "The JD is thorough — better to over-specify than under-specify to avoid getting irrelevant applications and ensures long-term sustainability across deliverables", "Framework versions change rapidly so listing them shows the company stays current with technology trends", "Having 15 requirements is standard for senior roles and helps recruiters screen candidates more efficiently"], c: 0 },
    { q: "You're writing a JD for a customer service role. The manager says 'Just copy the one from Naukri.' Why is this problematic?", o: ["Generic JDs attract generic candidates — your JD should reflect YOUR company's specific challenges and culture", "Naukri JDs are usually well-written by professionals and serve as reliable templates for most positions — this is the recommended approach based on current platform documentation and expert consensus", "Copying saves time and ensures industry-standard formatting that candidates are already familiar with", "The main issue is potential plagiarism — you should paraphrase the Naukri JD rather than copying verbatim"], c: 0 },
    { q: "Which JD opening line would attract the BEST candidates for a startup PM role?", o: ["'You'll own a product used by 50K users and ship features that directly impact ₹2Cr ARR within your first quarter'", "'We are looking for a Product Manager with 5+ years of experience in agile development methodologies' — implementing this correctly requires understanding the full context of how each element interacts", "'Join our dynamic and fast-paced team working on cutting-edge technology solutions for global markets'", "'Product Manager needed — competitive salary, health insurance, and flexible work-from-home policy available'"], c: 0 },
    { q: "A JD says 'Must have 10 years experience' for a role using a technology that's only existed for 4 years. What does this signal?", o: ["The hiring manager genuinely needs deep expertise and is willing to wait for the perfect candidate match — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "The JD was written without HR review — experience requirements are disconnected from reality and will filter good candidates", "This is a negotiation tactic to attract only the most confident candidates who apply despite the requirement", "Ten years of total experience with similar technologies is a reasonable proxy for expertise in newer tools"], c: 1 },
    { q: "Your company's JDs consistently produce 200+ applications but only 3-5 quality candidates. The MOST likely cause is:", o: ["The JD's requirements section is too vague — not differentiating between 'must-have' and 'nice-to-have' skills", "The job boards you're using attract high-volume, low-quality applicant pools that don't match your needs — this ensures compliance with professional standards and prevents cascading issues downstream", "You need to invest in premium job board listings that offer better candidate targeting algorithms", "The application process is too easy — adding more screening questions would filter low-quality applicants"], c: 0 },
    { q: "A JD includes 'Only males aged 25-35 should apply.' As HR, your response is:", o: ["Remove it immediately — this violates anti-discrimination laws and exposes the company to legal liability", "Keep it if the hiring manager insists since they understand the team dynamics better than HR does", "Replace 'males' with 'candidates' but keep the age requirement since it indicates experience level needed", "Forward to legal for review since some roles may have legitimate occupational requirements for demographics"], c: 0 },
    { q: "The 'Day in the Life' section of a JD serves what strategic purpose?", o: ["It pads the JD length to appear more professional and detailed compared to competitor job postings — experienced professionals recognize this as the most reliable path for maintaining quality control", "It demonstrates transparency to job boards, which rank detailed JDs higher in search results algorithms", "It's primarily useful for entry-level roles where candidates have limited understanding of workplace norms", "It lets candidates self-select out if the daily reality doesn't match their expectations, reducing early attrition"], c: 3 },
    { q: "You need to hire a senior developer but the approved CTC is below market rate. How should the JD handle this?", o: ["Emphasize total value — equity, learning, growth trajectory, and unique projects that compensate for lower CTC", "Don't mention salary and hope strong candidates apply based on the role description and company brand", "Inflate the JD title to 'Principal Engineer' to justify the lower salary with a more prestigious designation", "Post the role with market-rate salary range and negotiate down during the offer stage with selected candidates"], c: 0 },
    { q: "A well-crafted JD typically results in which measurable outcome?", o: ["Higher application volume across all job boards, demonstrating broader market reach and employer brand visibility", "Higher offer acceptance rates because candidates who read detailed JDs tend to be more committed overall", "Lower cost-per-hire since the company receives more organic applications and reduces dependency on agencies", "Shorter time-to-fill because qualified candidates self-identify and the screening process becomes more efficient"], c: 3 },
    { q: "What's the key difference between a JD for Naukri vs LinkedIn?", o: ["LinkedIn JDs can leverage your company page, employee advocacy, and network effects — requiring different tone and structure", "There's no meaningful difference — the same JD should be posted identically across all platforms for consistency and ensures long-term sustainability across deliverables", "Naukri requires more keywords for search optimization while LinkedIn prioritizes visual formatting elements", "LinkedIn is only effective for executive-level hiring while Naukri covers all levels equally well"], c: 0 }
];

const task3Quiz = [
    { q: "You need to hire 3 Python developers in Jaipur within 30 days. Which sourcing channel should you activate FIRST?", o: ["Employee referrals — they have the fastest conversion rate, lowest cost, and typically produce culture-fit candidates", "Post on Naukri and Indeed simultaneously with sponsored listings to maximize application volume quickly — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Engage a staffing agency that specializes in tech hiring since they maintain pre-screened candidate databases", "Create LinkedIn InMail campaigns targeting Python developers in Jaipur who've changed jobs in the last year"], c: 0 },
    { q: "Your referral program offers ₹10K per hire but generates zero referrals. The MOST likely reason is:", o: ["The incentive amount is too low — employees won't risk their reputation for only ₹10K per referral", "The company culture isn't strong enough for employees to confidently recommend it to their personal network", "Employees don't have networks that match the company's hiring needs and technical skill requirements", "The process is cumbersome — employees don't know how to refer, when they get paid, or what roles are open"], c: 3 },
    { q: "A sourcing specialist relies exclusively on Naukri for all positions. What's the strategic risk?", o: ["Naukri is the market leader in India so single-channel sourcing through it is actually the most efficient approach — this aligns with industry best practices and ensures consistent results across different project types", "The cost of a single platform subscription is lower and allows better budget allocation to other HR priorities", "Single-channel dependency means you miss passive candidates on LinkedIn and niche communities like GitHub or Stack Overflow", "Naukri provides sufficient candidate diversity for most roles across all experience levels and specializations"], c: 2 },
    { q: "You're sourcing for a niche role — Shopify Plus developer with B2B experience. Where do you look BEYOND job boards?", o: ["Shopify Partner directories, GitHub contributors to Shopify repos, and Shopify community forums where specialists congregate", "Post on general social media platforms like Facebook and Instagram where a broader audience will see the listing — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Wait for applications to come in organically since niche candidates actively search for relevant opportunities", "Contact local engineering colleges and offer internship-to-hire programs to develop the talent internally"], c: 0 },
    { q: "Campus recruitment at a Tier-3 college yields 50 resumes. What's the realistic quality expectation?", o: ["Expect 2-3 trainable candidates maximum — focus on aptitude and attitude rather than current technical skills", "All 50 should meet minimum requirements since the college's curriculum covers industry-standard fundamentals", "Skip Tier-3 colleges entirely — the screening cost exceeds the hiring value for professional-grade positions", "Expect about 15-20 good candidates since Tier-3 colleges have improved their placement training significantly"], c: 0 },
    { q: "A competitor just laid off 200 people in your city. How should HR respond strategically?", o: ["Wait for those candidates to apply to your open positions since they'll be actively job searching already — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Immediately post generic 'We're hiring!' messages on social media to capture attention from displaced workers", "Proactively source from the layoff list — identify roles that match, reach out directly with personalized messages", "Avoid hiring from competitors as those employees may carry institutional biases and conflicting work cultures"], c: 2 },
    { q: "Boolean search string: (Python OR Django) AND (Jaipur OR remote) NOT intern. Which candidates does this exclude?", o: ["Candidates who list Python and Django but are based in Delhi with no remote work preference indicated — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Candidates with both Python and Django skills who are currently employed as senior developers in Jaipur", "Candidates who specify remote preference but use Flask instead of Django as their primary framework", "Candidates in Jaipur who know Python but have 'intern' anywhere in their profile including past internships"], c: 3 },
    { q: "Your sourcing pipeline shows 100 candidates contacted, 20 responded, 5 interviewed, 0 hired. Where's the bottleneck?", o: ["The interview stage is the problem — 5 interviews with 0 hires suggests unrealistic expectations or poor assessment", "The initial sourcing criteria is too broad — casting a wide net is bringing in candidates that look relevant but aren't", "The response rate of 20% is actually strong — the issue is probably compensation competitiveness or employer brand", "All metrics are concerning — 0 hires from 100 candidates indicates fundamental problems across the entire funnel"], c: 0 },
    { q: "What makes employee referrals the highest-quality sourcing channel according to HR best practices?", o: ["Referred candidates cost less to hire since you save on job board fees and agency commissions entirely — this is the recommended approach based on current platform documentation and expert consensus", "Employees pre-screen for culture fit and skill match — they stake their reputation, creating a natural quality filter", "Referral hires start faster because they can skip the standard background check and verification processes", "Referred candidates accept lower salaries because they trust the recommending employee's endorsement of the company"], c: 1 },
    { q: "You have budget for only ONE sourcing tool. For a company hiring across tech and non-tech roles, which provides maximum ROI?", o: ["Naukri — broadest reach for the Indian market across all job types, experience levels, and geographic locations", "LinkedIn Recruiter — access to passive candidates, advanced search, and InMail capabilities for direct outreach", "A niche technical job board that specializes in developer hiring since tech roles are hardest to fill", "An AI-powered resume screening tool that automates candidate matching across multiple free job board platforms"], c: 0 }
];

const task4Quiz = [
    { q: "You receive 100 resumes for a Senior PM role. The JD requires 5+ years experience and e-commerce background. A resume shows 4 years PM experience at Flipkart. Your decision:", o: ["Shortlist — Flipkart e-commerce experience compensates for the one-year gap and demonstrates relevant domain expertise", "Reject — the JD clearly states 5+ years and making exceptions undermines the screening criteria consistency and ensures long-term sustainability across deliverables", "Place in 'maybe' pile — good background but technically doesn't meet the minimum qualification threshold", "Auto-reject using ATS filters since the experience field doesn't match the 5-year minimum requirement set"], c: 0 },
    { q: "A resume has 3 jobs in 18 months. The candidate explains each was a contract role. How should you process this?", o: ["Auto-reject — 3 jobs in 18 months is a red flag regardless of explanation and indicates instability risk", "Verify the contract claim by requesting offer letters or work orders before proceeding to phone screen", "Shortlist if skills match — contract work is increasingly common and doesn't indicate commitment issues", "Reject but save the resume for future contract-based openings where short tenures are expected and acceptable"], c: 1 },
    { q: "An ATS ranks a candidate #47 out of 100, but you notice their cover letter describes solving the exact problem your company faces. What should you do?", o: ["Pull the resume for manual review — ATS keyword matching misses contextual relevance that humans can evaluate", "Trust the ATS ranking — it's designed to objectively evaluate candidates better than subjective human review", "Ignore cover letters entirely since they're often written by AI tools and don't reflect genuine capability", "Review candidates ranked in the top 20 by ATS to maintain process efficiency and time management — this is the standard approach"], c: 0 },
    { q: "A resume lists 'Proficient in MS Office' as a key skill for a Digital Marketing Manager application. This tells you:", o: ["The candidate has essential computer literacy skills that form the foundation for any marketing technology role — implementing this correctly requires understanding the full context of how each element interacts", "MS Office proficiency is still relevant for creating marketing reports and presentations for stakeholders", "The candidate likely lacks specialized marketing skills — they're padding with basic competencies that shouldn't need listing", "This is standard resume formatting in India where candidates list all technical skills comprehensively"], c: 2 },
    { q: "You're screening for a customer service role paying ₹3.5LPA. A candidate with 8 years of managerial experience applies. Your assessment:", o: ["Great find — overqualified candidates bring wisdom and leadership that elevates the entire team performance", "High flight risk — they'll leave the moment a better offer comes, wasting your training investment entirely", "Shortlist for interview to understand their motivation — life changes, career pivots, or salary mismatch fears", "Reject immediately — overqualified candidates create team dynamics issues and are never satisfied with entry-level work"], c: 2 },
    { q: "Two resumes: Candidate A has a perfect format with buzzwords but generic achievements. Candidate B has poor formatting but specific metrics ('Increased retention by 23%'). Who do you shortlist?", o: ["Candidate B — specific metrics indicate real impact, formatting can be improved but results can't be faked", "Candidate A — professional presentation demonstrates attention to detail which is critical for any role and ensures long-term sustainability across deliverables", "Both — let the phone screen differentiate between presentation skills and actual performance capabilities", "Neither without running them through ATS first — manual screening introduces bias and inconsistency"], c: 0 },
    { q: "A resume shows a 2-year employment gap. The candidate is female and the gap period coincides with typical maternity timeline. How should HR screen this?", o: ["Note the gap as a risk factor and prioritize candidates without employment gaps for scheduling efficiency", "Skip the screening question about gaps entirely to avoid any appearance of discrimination during the process", "Treat it identically to any other gap — evaluate skills and relevance without assumptions about the reason", "Automatically advance to phone screen to demonstrate the company's commitment to diversity and inclusion"], c: 2 },
    { q: "Your screening accuracy rate: you advance 15 candidates, hiring managers reject 12 after first interview. What needs fixing?", o: ["The hiring managers are being too selective — coach them on evaluating potential rather than perfection and ensures long-term sustainability across deliverables", "The interview process is flawed — hiring managers need better interview training and structured evaluation forms", "Increase the initial shortlist to 25 so that even with 80% rejection, 5 quality candidates reach final rounds", "Your screening criteria is misaligned with what hiring managers actually need — recalibrate with them immediately"], c: 3 },
    { q: "When screening 100 resumes, what's the recommended time allocation per resume for initial screening pass?", o: ["30-60 seconds for initial scan — focus on knockout criteria first, then deep-review only shortlisted candidates", "5-7 minutes per resume to thoroughly evaluate each candidate's full career history and skill alignment — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "2-3 minutes per resume provides the optimal balance between thoroughness and screening efficiency", "Let ATS handle all initial screening — human review should only start after automated ranking is complete"], c: 0 },
    { q: "A candidate's resume lists 'References available upon request.' In modern HR practice, this statement:", o: ["Is professional and expected — it signals the candidate has references ready for the verification stage", "Wastes valuable resume space — it's assumed, and the line could be replaced with actual achievements instead", "Is a red flag — candidates who don't proactively list references may be hiding problematic work history", "Should be required on all resumes as it demonstrates the candidate understands professional communication norms"], c: 1 }
];

const task5Quiz = [
    { q: "During a phone screen, a candidate's current salary is ₹6LPA but they're asking for ₹12LPA. Your budget is ₹9LPA. What's the CORRECT first step?", o: ["Explore the context — are they currently underpaid for their skill level, and does market data support ₹12LPA for this role", "End the screen — a 100% jump expectation is unrealistic and wastes everyone's time in the process and ensures long-term sustainability across deliverables", "Offer ₹9LPA take-it-or-leave-it to test their real flexibility and interest in the position itself", "Tell them budget is ₹7LPA to anchor low and leave negotiation room for the final offer stage"], c: 0 },
    { q: "A candidate answers their phone screen call while clearly in a meeting at their current job. You should:", o: ["Politely reschedule — the call environment affects their answers and signals poor professional judgment", "Proceed quickly since they made time for you, which shows strong interest in the opportunity being offered", "Note it as a red flag for judgment but continue if their responses demonstrate strong technical competency", "Use the situation to test how they handle pressure — strong candidates can perform well in any environment"], c: 0 },
    { q: "Phone screen question: 'Why are you leaving your current job?' Candidate says 'My manager is terrible.' Best interpretation:", o: ["Red flag — badmouthing current employer indicates low emotional intelligence and potential culture risk and ensures long-term sustainability across deliverables", "Immediately note as a negative and move to the next candidate on your screening list for comparison", "Valid reason — toxic managers are the #1 cause of attrition and the candidate is being honest about it", "Probe deeper with 'Can you give a specific example?' — the answer reveals whether the concern is legitimate or reactive"], c: 3 },
    { q: "You need to phone-screen 15 candidates in 2 days. Each call is scheduled for 20 minutes. A strong candidate is at minute 18 and you have another call in 2 minutes. You should:", o: ["Wrap up at 20 minutes — note key strengths and schedule a callback, respecting both candidates' time", "Extend the call to 30 minutes — quality candidates are rare and deserve thorough evaluation time", "Cancel the next call — the bird in hand is more valuable than an unknown candidate waiting to be screened", "Rush through remaining questions in 2 minutes to cover all required screening criteria before the next call"], c: 0 },
    { q: "During a phone screen, a candidate reveals they have a competing offer with a 2-day deadline. How should you handle this?", o: ["Tell them to accept the other offer — rushed hiring decisions lead to bad outcomes for both parties involved", "Escalate immediately to the hiring manager — if this candidate is strong, fast-track the interview process", "Ask them to extend the deadline with their other offer while you proceed at your standard screening pace", "Note this as a pressure tactic since genuine candidates don't use competing offers as leverage in screening"], c: 1 },
    { q: "A phone screen reveals the candidate doesn't have a key 'required' skill from the JD but has an adjacent skill. Decision:", o: ["Reject — required skills are non-negotiable and advancing them would undermine the JD's credibility entirely and ensures long-term sustainability across deliverables", "Advance with a note — adjacent skills can be developed, and the hiring manager should make the final assessment", "Put on hold until you find candidates who match all requirements to maintain screening standard consistency", "Change the JD requirements to match this candidate's profile since finding exact matches is unrealistic"], c: 1 },
    { q: "The MOST important outcome of a phone screen is:", o: ["Determining the candidate's current and expected salary to check if they're within the approved budget range — this ensures compliance with professional standards and prevents cascading issues downstream", "Getting the candidate excited about the company so they're more likely to accept if an offer is extended", "Confirming the resume details are accurate by asking the candidate to walk through their employment history", "Assessing overall fit: motivation, communication skills, basic qualifications, salary alignment, and red flags"], c: 3 },
    { q: "A strong candidate says they can only interview after 7 PM due to their current job commitments. Your company's interview hours end at 6 PM. What do you do?", o: ["Reject the candidate since accommodating exceptions creates precedent that disrupts standard scheduling", "Arrange a 7 PM interview slot — losing a strong candidate over scheduling rigidity is a poor tradeoff", "Ask if they can take a half-day off from their current job and schedule accordingly within business hours", "Add them to a waitlist and proceed with candidates who are available during standard interview windows"], c: 1 },
    { q: "You notice a pattern: most candidates you phone-screen aren't aware of what your company does. What should change?", o: ["Start each call with a 5-minute company pitch to educate candidates before the screening questions begin — experienced professionals recognize this as the most reliable path for maintaining quality control", "Review your JDs and job postings — if candidates can't research your company, your employer brand needs work", "This is normal — candidates apply to hundreds of jobs and can't research every single company thoroughly", "Add a pre-screening questionnaire asking 'What do you know about us?' and reject those who answer poorly"], c: 1 },
    { q: "Structured phone screens (same questions for all candidates) are preferred over unstructured because:", o: ["They take less time to conduct since the interviewer doesn't need to think of questions spontaneously — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "They prevent candidates from going off-topic and ensure the conversation stays focused on HR requirements", "They enable fair comparison across candidates — consistent evaluation reduces bias and improves hiring decisions", "They make documentation easier since the same template can be used for all candidates' evaluation notes"], c: 2 }
];

const task6Quiz = [
    { q: "During a behavioral interview, a candidate says 'I would handle conflict by...' vs 'Last month, I handled a conflict by...' Which response is MORE reliable and why?", o: ["'I would' is better — it shows forward thinking and how they plan to operate in your specific company culture", "Both are equally valid — the content of the answer matters more than whether it references past or hypothetical events", "'Last month, I handled...' is more reliable — past behavior with specific examples is the best predictor of future performance", "'I would' responses show strategic thinking while 'Last month' responses may describe one-off situations that aren't representative"], c: 2 },
    { q: "An interview panel of 4 people interviews a candidate. Three say 'hire' and one says 'strong no.' The correct process is:", o: ["Majority rules — 3 out of 4 is a clear mandate that outweighs a single dissenting opinion on the panel and ensures long-term sustainability across deliverables", "Take the 'strong no' seriously — understand the specific concern before proceeding, as it might reveal a critical risk", "Average the scores and if the composite rating exceeds the threshold, extend the offer without further debate", "The most senior panel member's opinion should override the others since they have the most hiring experience"], c: 1 },
    { q: "A candidate for a team lead position gives perfect answers to every question — textbook responses with no hesitation. This should:", o: ["Confirm they are an excellent candidate — preparation and confidence indicate strong leadership capability overall and ensures long-term sustainability across deliverables", "Document the perfect score and use this candidate as a benchmark for evaluating all future team lead candidates", "Fast-track them to the offer stage since perfect interview performance correlates with perfect job performance", "Raise a flag — probe for depth with unexpected follow-ups, as over-rehearsed answers may hide lack of real experience"], c: 3 },
    { q: "STAR method: A candidate describes a Situation and Task but skips Action and Result. What should the interviewer do?", o: ["Score the answer based on available information since the situation and task demonstrate adequate understanding", "Prompt: 'Walk me through the specific steps YOU took and what happened as a result' to complete the evaluation", "Move to the next question — incomplete STAR answers indicate the candidate lacks depth in that competency area", "Note it as a communication weakness and factor it into the overall assessment without additional prompting"], c: 1 },
    { q: "An interview runs 20 minutes over the scheduled 60 minutes because the candidate is exceptional. The next candidate is waiting. Best practice:", o: ["Continue the extended interview — exceptional candidates are rare and deserve thorough evaluation time and ensures long-term sustainability across deliverables", "Wrap up immediately and apologize to the waiting candidate — punctuality reflects your company's professionalism", "Inform the waiting candidate of a 10-minute delay, wrap up current interview with key remaining questions in 5 minutes", "Let the waiting candidate reschedule since they'll understand that thorough interviews benefit all parties involved"], c: 2 },
    { q: "A candidate asks 'Why did the last person in this role leave?' This question reveals:", o: ["The candidate is nosy and might be difficult to manage if they're already probing sensitive company information", "A thoughtful candidate evaluating risk — transparency here builds trust and filters for genuine mutual fit", "The candidate is trying to identify potential salary negotiation leverage from the previous employee's departure", "An inappropriate question that should be deflected since internal personnel matters are confidential always"], c: 1 },
    { q: "You're interviewing a candidate who has a speech impediment. They're technically strong. An unconscious bias risk here is:", o: ["There's no bias risk — speech impediments are obvious and interviewers can easily account for communication differences", "Assuming they'd struggle in client-facing roles without actually testing their ability to communicate with clients effectively", "Over-compensating by rating them higher to appear inclusive, which is itself a form of bias affecting fair evaluation", "Confusing communication fluency with competence — their technical ability should be evaluated independently of speech patterns"], c: 3 },
    { q: "The primary purpose of a structured scorecard after each interview is:", o: ["Creating documentation for compliance purposes in case of any future legal disputes about hiring decisions", "Providing feedback to rejected candidates about why they weren't selected to improve their future applications", "Tracking interviewer performance metrics to identify which panel members are the most effective evaluators", "Enabling objective comparison across candidates by reducing reliance on memory and gut-feeling assessments"], c: 3 },
    { q: "A candidate arrives 15 minutes late to an in-person interview with no prior communication. They're apologetic and explain traffic. Correct protocol:", o: ["Proceed with the full interview — traffic is unpredictable and penalizing for it would be unfair to the candidate", "Cancel the interview — 15 minutes late without prior notice reveals poor planning skills and lack of professionalism", "Reschedule the interview entirely since they've already started on the wrong foot and can't recover the impression", "Note the lateness as a data point, proceed with a slightly shortened interview covering the most critical questions"], c: 3 },
    { q: "What question is ILLEGAL to ask in an Indian job interview?", o: ["'What's your expected salary range for this position based on your current compensation and market research?'", "'Are you planning to start a family soon?' — this constitutes discrimination based on personal life choices", "'Can you describe a situation where you worked under significant pressure and how you managed the stress?'", "'Are you comfortable with occasional travel requirements that are part of this role's responsibilities?'"], c: 1 }
];

const task7Quiz = [
    { q: "A reference check reveals the candidate's previous manager says 'I can only confirm dates of employment.' This typically indicates:", o: ["The company has a strict HR policy about references — it's increasingly common and doesn't necessarily reflect on the candidate", "Standard corporate procedure that all large organizations follow to minimize legal liability from reference checks", "The candidate likely had performance issues — the manager is avoiding liability by not providing any assessment", "Both A and C could be true — you need to check other references and assess the overall pattern before concluding"], c: 3 },
    { q: "A candidate provides 3 references: their mother, their college friend, and a former colleague. What's the screening issue?", o: ["No issue — personal references provide valuable insights into the candidate's character and interpersonal skills", "The colleague reference is sufficient — requesting additional professional references would be excessive for this stage", "Only professional references from direct supervisors carry weight — the other two offer biased, non-work perspectives", "Personal references are only problematic for senior roles — for entry-level positions, they're perfectly acceptable"], c: 2 },
    { q: "During a reference check, a former manager reveals the candidate was on a PIP but 'turned it around brilliantly.' How do you process this?", o: ["Disqualify — being on a PIP at all indicates fundamental performance gaps that are likely to resurface eventually and ensures long-term sustainability across deliverables", "View it positively — the ability to receive critical feedback and improve demonstrates coachability and resilience", "Treat it as neutral information and proceed with standard evaluation without weighting it in either direction", "Report this to the hiring manager as a major concern since PIPs indicate the candidate required extra supervision"], c: 1 },
    { q: "You can't reach any of the candidate's listed references after 3 attempts over a week. What's the correct protocol?", o: ["Proceed with the hire — reference checks are a formality and shouldn't hold up the hiring process timeline", "Ask the candidate for alternative references and explain why this step is non-negotiable in your process", "Treat unreachable references as a red flag and deprioritize this candidate in favor of verifiable alternatives", "Skip references for this candidate and rely on the interview assessment since references are often unreliable"], c: 1 },
    { q: "A reference gives a glowing review but you notice the 'reference' and the candidate are connected on social media as close friends. This affects:", o: ["Nothing — the quality of the feedback matters more than the personal relationship between reference and candidate", "Credibility of the reference — friend references carry inherent bias and should be supplemented with supervisor references", "The reference is still valuable for assessing interpersonal skills but not for evaluating professional performance", "The reference's opinion on technical skills is compromised — their assessment of soft skills remains reliable — this is the standard approach"], c: 1 },
    { q: "Best practice: When should reference checks be conducted in the hiring process?", o: ["After final interview, before extending the offer — it validates the decision without wasting references' time prematurely", "Before the first interview — it saves time by eliminating candidates with poor references early in the process and ensures long-term sustainability across deliverables", "After the candidate accepts the offer verbally — conducting checks earlier is premature and wastes resources", "At any convenient point since the timing doesn't significantly impact the quality of information gathered"], c: 0 },
    { q: "A reference says 'I'd rehire them in a heartbeat.' Is this the most valuable reference signal?", o: ["Yes — willingness to rehire is the single most predictive question in reference checking methodology research", "No — follow up with 'In what role?' and 'What would you do differently managing them?' for actionable insight", "Yes — this is the gold-standard response that confirms the candidate's value beyond any other reference metric", "No — enthusiastic references are often favors and shouldn't be weighted heavily compared to neutral assessments"], c: 1 },
    { q: "Legal compliance: What information should you AVOID asking during a reference check?", o: ["Questions about the candidate's health conditions, religion, caste, marital status, or political affiliations", "Questions about the candidate's specific job performance, including areas of strength and development needs", "Questions about whether the candidate was eligible for rehire at their previous organization when they departed", "Questions about the candidate's attendance record and punctuality patterns during their previous employment"], c: 0 },
    { q: "You're checking references for someone who is self-employed for 3 years. Traditional employer references aren't available. What do you verify instead?", o: ["Skip the reference check entirely since self-employed individuals can't provide the standard professional references", "Client references, project portfolios, and professional network endorsements that validate their claimed capabilities", "Request tax returns and business registration documents as proof of self-employment and financial stability", "Proceed with the hire if they can provide at least one employer reference from before their self-employment period — this is the standard approach"], c: 1 },
    { q: "The primary goal of a reference check beyond verification is:", o: ["Confirming the candidate's salary history to ensure they weren't inflating their compensation during negotiations — this aligns with industry best practices and ensures consistent results across different project types", "Understanding how the candidate actually performed in real work environments versus how they presented in interviews", "Fulfilling a mandatory HR checklist requirement that protects the company from negligent hiring liability claims", "Gathering ammunition for salary negotiation by learning what the candidate's weaknesses were in previous roles"], c: 1 }
];

const task8Quiz = [
    { q: "A candidate accepts your ₹9LPA offer verbally. Two days later, they ask for ₹10.5LPA citing a competing offer. Your move:", o: ["Withdraw the offer — post-acceptance negotiation shows bad faith and predicts future behavior problems", "Match the competing offer to secure the candidate since restarting the search would cost more time and money", "Verify the competing offer exists by requesting the offer letter, then evaluate based on the candidate's value", "Hold firm at ₹9LPA — if they accepted once, they valued the role at that price and the competing offer changes nothing"], c: 2 },
    { q: "Your offer letter says 'CTC: ₹8LPA' but doesn't break down the structure. The candidate asks for a breakdown. Why is this important?", o: ["It's just a formality — CTC is the number that matters and candidates shouldn't need granular salary details and ensures long-term sustainability across deliverables", "Candidates who ask for breakdowns are overly detail-oriented and may be high-maintenance employees to manage", "Fixed vs variable split, PF deductions, and in-hand salary directly affect the candidate's decision and trust in the company", "Providing a breakdown creates legal complications if the company needs to restructure compensation later"], c: 2 },
    { q: "A candidate in final stages says 'I need 2 weeks to decide.' Your current open positions pipeline has no other strong candidates. Best approach:", o: ["Give them the full 2 weeks — rushing candidates leads to regretful acceptances and early attrition problems", "Extend the deadline to 3 weeks to demonstrate flexibility and build goodwill before their employment starts", "Pressure them for an immediate decision by implying other candidates are being considered for the same role", "Give 5 business days with a clear deadline — 2 weeks signals low interest or active counter-offer shopping"], c: 3 },
    { q: "During salary negotiation, a candidate says 'My friend in the same role at your company earns ₹2L more.' Your response should:", o: ["Explain that compensation varies based on experience, performance, and timing — then redirect to their value proposition", "Share internal salary data to prove transparency and show the candidate that compensation is fair and equitable", "Match the friend's salary immediately to avoid internal compensation complaints spreading through the organization", "Tell the candidate that discussing other employees' salaries violates company policy and is not professionally appropriate"], c: 0 },
    { q: "An offer has been extended. The candidate's current employer makes a counter-offer with 30% raise. Statistics show what about counter-offer acceptances?", o: ["Counter-offers work well — employees who accept them feel re-valued and typically stay for 3+ more productive years", "Whether counter-offers work depends entirely on the individual — there's no reliable statistical pattern to reference", "Counter-offers are the most effective retention tool available to employers and should be encouraged as standard practice", "80% of candidates who accept counter-offers leave within 6-12 months — the root dissatisfaction remains unresolved"], c: 3 },
    { q: "You're negotiating with a candidate who says 'I want work-from-home Fridays.' Company policy doesn't allow remote work. What's the HR negotiation approach?", o: ["Decline immediately — company policy is non-negotiable and exceptions create precedent that undermines organizational rules", "Ask the candidate to join first and raise the WFH request after 6 months once they've proven their productivity", "Agree to WFH Fridays secretly for this candidate only since attracting top talent requires occasional policy exceptions", "Offer alternative perks of equivalent value — flexible hours, extra leave, or professional development budget instead"], c: 3 },
    { q: "The time between verbal acceptance and formal offer letter should ideally be:", o: ["Within 24-48 hours — delays create anxiety, invite counter-offers, and signal disorganization to the candidate", "5-7 business days to allow thorough legal review of the offer terms and internal approval chain completion", "2 weeks is standard practice for most companies to process paperwork through HR and finance departments", "Timing doesn't matter significantly — the verbal commitment is binding and candidates will wait for the formalities"], c: 0 },
    { q: "A candidate negotiates for a designation upgrade from 'Senior Developer' to 'Lead Developer' at the same salary. Should you agree?", o: ["Yes — it costs nothing and shows flexibility that increases the candidate's commitment to accepting the offer and ensures long-term sustainability across deliverables", "No — inflated designations create team hierarchy confusion and set unrealistic expectations for responsibilities", "Evaluate the impact — does the designation match the role scope, and what precedent does it set for existing team members", "Always agree to designation requests since they're symbolic and employees care more about actual responsibilities"], c: 2 },
    { q: "An offer is rescinded after background verification reveals a discrepancy. The candidate threatens legal action. Your protection comes from:", o: ["The verbal agreement during the phone screen where salary expectations were discussed and mutually confirmed", "The company's general legal counsel who handles all employment disputes regardless of documentation quality", "Having a documented, transparent process with the discrepancy clearly communicated before rescinding the offer", "Background check consent forms that the candidate signed during the application process authorizing verification"], c: 2 },
    { q: "The biggest mistake HR makes during salary negotiation is:", o: ["Focusing only on salary — total compensation includes growth, learning, culture, and long-term career trajectory", "Starting too high — this leaves no room for the candidate to feel they 'won' something during the negotiation", "Being too transparent about budget ranges — this gives candidates unfair leverage during compensation discussions", "Taking too long to respond to candidate counter-proposals — speed demonstrates organizational commitment to hiring"], c: 0 }
];

const task9Quiz = [
    { q: "A new hire's Day 1 experience: they arrive and no one knows they're starting. Their laptop isn't ready. The desk is occupied. This is a failure of:", o: ["The IT department for not provisioning equipment based on the start date provided by HR weeks in advance", "The new hire for not confirming their start date and requirements with their direct manager before arriving", "The hiring manager who should have prepared their team and workspace for the new member's first day", "The onboarding process — HR should have a checklist triggered by offer acceptance covering all departments"], c: 3 },
    { q: "The 30-60-90 day plan for a new hire should be created by:", o: ["The hiring manager with HR support — the manager defines role-specific goals while HR ensures process compliance", "HR alone — they understand onboarding best practices and can create standardized plans for all departments and ensures long-term sustainability across deliverables", "The new hire themselves — it demonstrates initiative and ensures they take ownership of their integration", "The CEO or department head — senior leadership should set expectations for every new employee who joins"], c: 0 },
    { q: "A new hire's mentor reports that the employee seems disengaged after week 2. The FIRST thing HR should do:", o: ["Schedule a formal meeting and document the disengagement for potential probation period termination records", "Have an informal 1:1 check-in — ask about challenges, expectations vs reality, and what support they need", "Wait until the 30-day review — 2 weeks is too early to draw conclusions about long-term engagement levels", "Notify the hiring manager and recommend closer supervision to prevent further disengagement from escalating"], c: 1 },
    { q: "During onboarding, a new developer says 'The tech stack is different from what was described in the interview.' This risk should have been mitigated by:", o: ["Having the candidate sign an acknowledgment of the job description during the offer stage for legal protection — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Post-interview feedback surveys that capture candidate expectations for comparison with actual role requirements", "A trial period clause in the offer letter allowing either party to exit without notice during the first month", "Transparent JDs and interview discussions that accurately represent daily work, tools, and technology environment"], c: 3 },
    { q: "Onboarding metrics: Which KPI BEST predicts long-term retention at the 1-year mark?", o: ["Speed to full productivity — employees who reach targets faster tend to stay longer due to early achievement and ensures long-term sustainability across deliverables", "New hire satisfaction score at 90 days — this captures cultural integration, role clarity, and relationship building", "Time-to-fill for the original position — faster hiring processes correlate with better candidate-role alignment", "Completion rate of onboarding training modules — employees who finish training early demonstrate higher engagement"], c: 1 },
    { q: "A new hire is underperforming at Week 6 of a 90-day probation. The manager wants immediate termination. HR's guidance:", o: ["Support termination — the probation period exists specifically for quick exits when performance doesn't meet standards", "Transfer the employee to a different team before considering termination to rule out manager-employee mismatch", "Extend probation by 30 days automatically since 6 weeks is insufficient to evaluate any employee's true capability", "Ensure documented feedback was provided — if no formal performance conversations occurred, you can't fairly terminate"], c: 3 },
    { q: "The most overlooked element of onboarding that directly impacts cultural integration is:", o: ["Assigning peer buddies for social integration — technical onboarding is easy, belonging is what makes people stay", "Providing a comprehensive employee handbook covering all company policies and standard procedures on Day 1 — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Scheduling meet-and-greets with senior leadership to make new hires feel valued and recognized from day one", "Creating an onboarding portal with self-service resources so new hires can learn at their preferred pace"], c: 0 },
    { q: "A new hire says 'I don't feel challenged enough' during their Week 3 check-in. The correct interpretation is:", o: ["Positive signal — they're engaged and ready for more, adjust their ramp plan to match their learning speed", "They're arrogant — give them time to learn the system before seeking challenges on their own initiative", "Wait and see — most employees feel this way initially and naturally find their challenge level over time", "Assign them the most complex project immediately to test whether their confidence matches their actual ability"], c: 0 },
    { q: "Buddy/mentor assignment during onboarding should follow which principle?", o: ["Assign the most senior person available — they have the deepest knowledge to share with new team members and ensures long-term sustainability across deliverables", "Choose someone from a different department to broaden the new hire's network across the organization", "Select a high-performing peer at a similar level — relatable mentors create psychological safety and honest exchange", "The buddy role is informal and doesn't require specific selection criteria — any willing volunteer is suitable"], c: 2 },
    { q: "An employee's probation review at 90 days reveals 'meets expectations' across all areas but the manager says 'something feels off.' HR should:", o: ["Probe the manager's concern — ask for specific behavioral examples that triggered the concern for documentation", "Confirm the employee since they objectively meet all measurable expectations and gut feelings aren't evidence — teams that adopt this strategy report fewer issues and more efficient project completion cycles", "Extend probation by another 30 days to give the manager more time to articulate and validate their concern", "Override the manager's feeling — if the scorecard shows 'meets expectations,' the process should be respected"], c: 0 }
];

const task10Quiz = [
    { q: "A manager rates all 8 team members as 'Exceeds Expectations.' HR should:", o: ["Accept it — the manager knows their team best and interfering undermines managerial authority and autonomy and ensures long-term sustainability across deliverables", "Accept for now but note the manager for coaching on rating standards before the next review cycle begins", "Adjust the ratings yourself to force a bell curve distribution since that's what senior leadership expects", "Challenge with calibration — statistically, all 8 exceeding expectations suggests rating inflation or unclear standards"], c: 3 },
    { q: "An employee on a 60-day PIP shows improvement in Week 2 but slips back by Week 6. What's the correct call?", o: ["Close the PIP as successful since they demonstrated the capability to improve when properly motivated", "Week 2 improvement was likely performative — sustained regression confirms the original performance assessment", "Terminate immediately — inconsistent improvement during a PIP reveals a fundamental performance ceiling", "The slip-back indicates the improvement wasn't sustainable — extend the PIP by 30 days for final validation"], c: 3 },
    { q: "During a performance review, an employee disagrees with their rating and refuses to sign the review form. Correct HR protocol:", o: ["Force signature — the review is mandatory documentation and refusal to sign is insubordination that requires escalation", "Escalate to the employee's skip-level manager to mediate the disagreement and determine the appropriate rating", "Change the rating to satisfy the employee — unresolved disagreements create legal risks and employee relations issues", "Document the disagreement, allow the employee to add written comments, and proceed with the review on file"], c: 3 },
    { q: "KRA vs KPI — a content writer's KRA is 'Create high-quality blog content.' What's the correct KPI?", o: ["'Write good blogs that our clients like and that help with marketing goals across all platforms used'", "'Support the marketing team by writing content that aligns with the overall brand strategy and messaging'", "'Be responsible for the company blog and make sure it's always updated with fresh and relevant content'", "'Publish 8 SEO-optimized blogs/month with average organic traffic of 500+ sessions within 90 days each'"], c: 3 },
    { q: "A high performer requests feedback outside the formal review cycle. The manager says 'We'll discuss it in the annual review.' HR should:", o: ["Support the manager — maintaining the formal review schedule ensures consistency across all employees and ensures long-term sustainability across deliverables", "Create a policy mandating quarterly feedback sessions to prevent this situation from recurring in the future", "Coach the manager — high performers who seek feedback and get delayed lose engagement, continuous feedback is critical", "Tell the employee to be patient since annual reviews exist specifically for comprehensive performance discussions"], c: 2 },
    { q: "A PIP document should include all EXCEPT:", o: ["Specific performance gaps with measurable examples drawn from the current review period documentation — this is the recommended approach based on current platform documentation and expert consensus", "Clear targets with deadlines and the support/resources the company will provide during the improvement period", "A statement that failure to improve will result in 'possible' action — keeping consequences intentionally vague", "Regular check-in schedule (weekly/biweekly) with the manager to review progress and provide coaching"], c: 2 },
    { q: "360-degree feedback reveals that an employee's peers and subordinates rate them significantly lower than their manager does. This gap suggests:", o: ["The peers and subordinates are biased — the manager's direct observation is the most reliable data point available", "360-degree feedback is inherently unreliable due to personal conflicts and should be weighted lower than manager assessments", "The employee 'manages up' well but lacks the collaborative and leadership skills visible to anyone except their direct boss", "The gap is normal — managers evaluate performance while peers evaluate personality and those are different constructs"], c: 2 },
    { q: "An employee's performance has been 'Meets Expectations' for 3 consecutive years. No improvement, no decline. What's the HR concern?", o: ["No concern — consistent performance at expectation level is exactly what most roles require for business stability", "This is the ideal employee profile — reliable, predictable, and low-maintenance performers are the backbone of teams", "Stagnation risk — a plateaued employee may become disengaged, and the lack of growth indicates limited potential or motivation", "A concern if the employee is in a leadership track — individual contributors can plateau without negative consequences — this is the standard approach"], c: 2 },
    { q: "Legal requirement: Before terminating an employee for poor performance in India, the employer MUST have:", o: ["Documented evidence of performance gaps, feedback given, improvement opportunities provided, and failure to meet PIP targets", "Verbal agreement from the employee's manager that termination is the only remaining option for the situation — implementing this correctly requires understanding the full context of how each element interacts", "Approval from the company's legal team regardless of the documentation quality or performance management history", "A minimum of 6 months of documented underperformance since Indian labor law requires this specific time frame"], c: 0 },
    { q: "Self-assessments in performance reviews serve what primary purpose?", o: ["They're a formality — managers rarely change their ratings based on what employees write about themselves and ensures long-term sustainability across deliverables", "They protect the company legally by showing the employee had an opportunity to participate in the evaluation process", "They reveal perception gaps — comparing self-rating vs manager-rating identifies blind spots for coaching conversations", "They help HR generate report data on employee satisfaction without requiring separate engagement survey tools"], c: 2 }
];

const task11Quiz = [
    { q: "An employee discovers a colleague is working a second full-time job without company approval. Under Digital Heroes policy, this is:", o: ["Fine as long as performance remains unaffected — what employees do outside work hours is their personal choice", "Something HR should monitor quietly without confronting the employee to avoid unnecessary conflict or accusations", "A concern if the second job is with a competitor — non-competing external work is generally acceptable — this is the standard approach", "A terminable offense — undisclosed dual employment creates conflict of interest and confidentiality risks"], c: 3 },
    { q: "An employee's social media post criticizes the company without naming it directly. HR's assessment:", o: ["Investigate context — indirect public criticism can damage employer brand and may violate social media policy terms", "Not actionable — if the company isn't named, there's no policy violation and free speech applies to all employees", "Immediate termination — any negativity about the workplace, even unnamed, shows disloyalty and cultural misalignment", "Monitor but take no action — social media policing creates a toxic surveillance culture that erodes employee trust"], c: 0 },
    { q: "A manager asks HR to change an employee's leave record from 'sick leave' to 'loss of pay' retroactively. The employee used valid sick leave. This request:", o: ["Is reasonable — managers have discretion over leave approvals and can adjust records based on operational needs and ensures long-term sustainability across deliverables", "Can be processed with the employee's written consent since both parties agree to the reclassification terms", "Should be approved if the employee was already warned about excessive sick leave usage during that period", "Violates leave policy integrity — retroactive changes to valid leave usage are unethical and potentially illegal"], c: 3 },
    { q: "According to company policy, the FIRST escalation path for an employee who has a conflict with their direct manager is:", o: ["Post about it on internal communication channels to get peer perspective and crowd-source a fair resolution", "Take it directly to the CEO since managers can't be trusted to fairly handle complaints about themselves", "Report to HR or the Delhi Team — company policy specifies these as the ONLY appropriate escalation channels", "Address it directly with the manager first in a one-on-one meeting before involving any third parties"], c: 2 },
    { q: "An employee is found sharing confidential client data on a personal WhatsApp group. Under zero-tolerance policy, this results in:", o: ["Immediate termination and potential legal action — confidentiality breach is a zero-tolerance violation with no warnings", "Written warning for first offense — immediate termination is disproportionate for a messaging platform slip and ensures long-term sustainability across deliverables", "Verbal counseling and mandatory data security training since the employee may not have understood the seriousness", "Suspension pending investigation — the intent behind sharing determines whether termination is appropriate or excessive"], c: 0 },
    { q: "Digital Heroes policy on workplace relationships between employees in the same reporting chain states:", o: ["No restrictions — personal relationships are private matters that the company should not regulate or monitor", "Relationships are permitted but the employees must voluntarily agree to never discuss work matters outside office", "Automatic termination of one employee — workplace relationships in the same chain are absolutely prohibited", "Mandatory disclosure to HR — the company needs to manage potential conflicts of interest in reporting structures"], c: 3 },
    { q: "An employee submits a medical certificate for 3 days of sick leave. The certificate looks suspicious (different handwriting, no clinic stamp). HR should:", o: ["Accept it since questioning medical certificates invades employee privacy and demonstrates institutional distrust", "Accept this time but put the employee on a watchlist for future suspicious medical leave claims and patterns", "Reject the leave request immediately and convert the days to loss-of-pay without any investigation or discussion", "Verify with the issuing doctor/clinic — fraudulent medical certificates are grounds for disciplinary action"], c: 3 },
    { q: "An intern asks if they're eligible for equity sharing. According to Digital Heroes policy:", o: ["No — interns are temporary employees and equity sharing is reserved for full-time permanent staff members", "Yes — equity sharing starts from Day 1 for all team members, including interns, as stated in the company manifesto", "After conversion to full-time employment following the internship period and probation completion — this is the standard approach", "It depends on the internship duration — only interns serving 6+ months qualify for equity sharing benefits"], c: 1 },
    { q: "POSH (Prevention of Sexual Harassment) compliance requires every company with 10+ employees to:", o: ["Have a general anti-harassment policy mentioned somewhere in the employee handbook for reference purposes — taking this route minimizes risk while still delivering professional-grade results to stakeholders", "Constitute an Internal Complaints Committee (ICC) with specific composition requirements and conduct awareness training", "Designate the HR head as the sole recipient of harassment complaints with full authority to investigate and resolve", "Post anti-harassment posters in common areas and include a brief mention during new employee orientation sessions"], c: 1 },
    { q: "An employee requests to work remotely for 3 months due to a family emergency. Company policy allows 0 remote days. The correct HR approach:", o: ["Deny the request citing policy — making exceptions undermines rules and creates precedent for all future requests and ensures long-term sustainability across deliverables", "Approve automatically to demonstrate compassion — the company values people over rigid policy enforcement", "Evaluate the employee's track record, role suitability, and specific circumstances — recommend a temporary exception with clear terms", "Offer unpaid leave instead since the company can't accommodate remote work and the employee needs time off"], c: 2 }
];

const task12Quiz = [
    { q: "Two team members come to HR with contradicting accounts of the same incident. Neither has witnesses. HR's approach:", o: ["Side with the senior employee since their tenure provides more credibility in workplace dispute situations — this ensures compliance with professional standards and prevents cascading issues downstream", "Believe the employee who reported first since they took the initiative to escalate, which suggests honesty", "Close the case citing insufficient evidence and tell both employees to resolve it between themselves professionally", "Investigate objectively — review chat logs, email history, and behavioral patterns rather than relying on testimony alone"], c: 3 },
    { q: "You notice a pattern: 3 employees from the same team have independently complained about their manager's behavior in the past 2 months. This triggers:", o: ["A skip-level meeting between the employees and the manager's supervisor to air grievances in a mediated setting — experienced professionals recognize this as the most reliable path for maintaining quality control", "A formal investigation into the manager's conduct — multiple independent complaints establish a potential pattern of misconduct", "Coaching for the employees since three complaints might indicate a team with unrealistic expectations of management style", "No action until a formal written complaint is filed — verbal or informal concerns don't meet the investigation threshold"], c: 1 },
    { q: "An employee complains that their colleague plays loud music during work hours. The colleague says they need it to focus. HR should:", o: ["Tell the complaining employee to use noise-cancelling headphones — personal preferences shouldn't restrict others' behavior and ensures long-term sustainability across deliverables", "Mediate a resolution — suggest designated quiet zones, headphone policies, or scheduling compromises that respect both needs", "Issue a blanket no-music policy to eliminate all potential disputes and create a standardized quiet work environment", "Tell the music-playing employee to stop immediately since office spaces default to quiet and music is a privilege"], c: 1 },
    { q: "During an employee relations investigation, you discover that a witness's statement contradicts their earlier chat messages. How do you handle this?", o: ["Ignore the discrepancy — people remember events differently over time and chat messages lack context and nuance", "Use only the written chat evidence since documented communications are more legally defensible than verbal statements", "Address it directly with the witness — present both versions and ask them to clarify, as credibility is essential", "Disqualify the witness entirely from the investigation since their inconsistency undermines their reliability"], c: 2 },
    { q: "A senior leader asks HR to 'quietly exit' an employee without documentation 'to avoid drama.' Your response:", o: ["Comply — senior leaders have organizational context that HR may not be aware of and their judgment should be trusted and ensures long-term sustainability across deliverables", "Decline — every exit requires documentation for legal protection, compliance, and to prevent wrongful termination claims", "Compromise by creating minimal documentation after the termination to satisfy legal requirements retroactively", "Ask another HR team member to handle it since you're uncomfortable with the request but don't want to refuse leadership"], c: 1 },
    { q: "An employee engagement survey reveals 65% satisfaction. Industry benchmark is 75%. What's the FIRST action?", o: ["Implement company-wide perks like free lunches, gym memberships, and team outings to boost morale quickly", "Repeat the survey in 3 months to verify accuracy before taking any action based on potentially skewed data", "Share the results company-wide with a commitment to improve — transparency builds trust even when numbers are low", "Deep-dive into the data — identify which departments, questions, and demographics have the lowest scores first"], c: 3 },
    { q: "Handling 'conspiracy and negativity' per Digital Heroes policy: An employee privately tells 3 colleagues that 'management is unfair.' This violates:", o: ["Nothing — employees have the right to discuss working conditions with colleagues under freedom of expression", "If the statement is factually false — truthful criticism of management is protected employee communication — this is the standard approach", "Company policy — complaints must go through HR or Delhi Team ONLY, spreading negativity among colleagues is prohibited", "Nothing if done privately — the policy only covers public criticism on social media or external platforms"], c: 2 },
    { q: "Two star performers can't work together — their personal conflict is affecting team delivery. HR's highest-priority action:", o: ["Separate them into different teams immediately to protect project delivery timelines and team overall productivity — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines", "Let them work it out — star performers are mature enough to separate personal feelings from professional responsibilities", "Terminate the one with lower seniority to send a clear message that personal conflicts won't be tolerated in the workplace", "Mediate and document — attempt resolution first, but establish clear behavioral expectations with consequences for both parties"], c: 3 },
    { q: "Building a positive workplace culture is primarily the responsibility of:", o: ["HR — culture initiatives, policies, and programs are core HR functions that should be centrally designed and managed", "Everyone — but HR architects the framework, leaders model it, and employees sustain it through daily behaviors and choices", "Senior leadership exclusively — culture flows top-down and employees simply adapt to whatever culture leadership establishes", "No single party — culture develops organically from team dynamics and cannot be deliberately shaped through programs"], c: 1 },
    { q: "An exit interview reveals the departing employee's manager regularly takes credit for the team's work. How should HR use this information?", o: ["File it for reference but take no action — exit interview feedback is often emotionally charged and unreliable and ensures long-term sustainability across deliverables", "Share the exit interview feedback verbatim with the manager's supervisor to ensure accountability and transparency", "Immediately confront the manager with the accusation to get their side of the story while details are fresh", "Cross-reference with other team members' engagement data and previous complaints to validate the pattern before acting"], c: 3 }
];

const task13Quiz = [
    { q: "An employee submits resignation with immediate effect, citing a competitor offer. Company policy requires 30-day notice. HR should:", o: ["Accept immediate resignation — forcing someone who wants to leave to stay 30 days creates security and morale risks and ensures long-term sustainability across deliverables", "Enforce the full 30-day notice period — policy exists for knowledge transfer and project continuity protection", "Negotiate — explain notice period importance, offer to expedite if they complete a structured knowledge transfer in 15 days", "Report the employee to the competitor for poaching and consider legal action for breach of notice period obligations"], c: 2 },
    { q: "During an exit interview, a high-performing employee reveals toxic behavior by a senior manager. This information should:", o: ["Be treated as the departing employee's subjective opinion — they may be exaggerating to justify their decision to leave", "Be shared directly with the accused manager to give them an opportunity to improve their leadership approach", "Be filed confidentially and reviewed only if similar complaints emerge from other sources in the future period", "Trigger an investigation — corroborate with other team members' data before the information becomes stale or forgotten"], c: 3 },
    { q: "The offboarding checklist for an employee with system access to client data MUST prioritize:", o: ["Collecting the company laptop and ID card before the employee's last working day to prevent physical asset loss — this aligns with industry best practices and ensures consistent results across different project types", "Revoking all system access, email, and database credentials BEFORE or ON the last working day — not after the delay", "Conducting the exit interview to gather feedback while the employee is still engaged and cooperative during notice", "Processing final settlement and outstanding reimbursements to ensure compliance with labor law payment timelines"], c: 1 },
    { q: "An employee resigns, then changes their mind 3 days later asking to withdraw the resignation. HR should:", o: ["Automatically accept the withdrawal — retention is always better and cheaper than replacement hiring costs and ensures long-term sustainability across deliverables", "Evaluate case-by-case — consider their reason for resigning, their performance history, and potential counter-offer engagement risk", "Refuse the withdrawal — once resignation is submitted, the decision should be final to maintain professional standards", "Accept only if their replacement hasn't been hired yet — practical considerations should drive the decision logic"], c: 1 },
    { q: "Final settlement after resignation should legally be processed within:", o: ["30 days of the last working day — this is standard practice for most organizations with established payroll systems", "By the next payroll cycle — practical convenience for the finance team outweighs any urgency the employee might feel", "Within 2 working days of the last day — delayed settlements violate employee rights and damage employer reputation", "Immediately on the last working day — the employee should walk out with all financial matters completely settled"], c: 2 },
    { q: "A departing employee asks for a recommendation letter. They were a mediocre performer. How should HR handle this?", o: ["Refuse — providing a recommendation letter for a mediocre performer could be dishonest and expose the company to liability and ensures long-term sustainability across deliverables", "Provide a factual service certificate confirming dates and role — distinct from a recommendation, without performance assessment", "Write a generic recommendation praising their teamwork and dedication since burning bridges serves no business purpose", "Let the direct manager decide since they have the most accurate perspective on the employee's actual performance level"], c: 1 },
    { q: "Knowledge transfer during notice period should be:", o: ["Informal — the departing employee knows who needs what information and can handle the transfer independently", "Structured with a documented checklist, designated receiver, and weekly progress reviews verified by the manager", "Optional — critical knowledge should already be documented in SOPs and shouldn't depend on any single employee", "Handled entirely by the IT department who can extract relevant files and communications from the employee's systems"], c: 1 },
    { q: "A pattern emerges: 60% of exits in the past quarter are from the same department. What does this signal?", o: ["Normal variance — some departments naturally have higher turnover due to role type and industry labor market dynamics and ensures long-term sustainability across deliverables", "The department hired too many people recently and natural attrition is correcting the headcount to sustainable levels", "A systemic issue — likely management, culture, or workload problems specific to that department requiring immediate investigation", "The department leader is effectively managing out underperformers which represents healthy organizational self-correction"], c: 2 },
    { q: "Social media and company brand considerations during offboarding include:", o: ["No special handling needed — what former employees post about the company after leaving is entirely their prerogative and ensures long-term sustainability across deliverables", "Reminding departing employees of NDA and social media policy terms, and ensuring they leave with a positive final experience", "Monitoring former employees' social media accounts for 6 months after departure to protect company reputation online", "Requesting former employees delete all company-related posts from their personal social media accounts before leaving"], c: 1 },
    { q: "The MOST valuable long-term outcome of a well-conducted offboarding process is:", o: ["Reduced legal liability from properly documented exits that protect the company from wrongful termination claims — following this approach systematically prevents common mistakes and keeps the workflow predictable", "Alumni advocacy — well-treated departing employees become brand ambassadors, referral sources, and sometimes return as boomerang hires", "Clean data — ensuring all system access is revoked and company property is returned protects information security", "Efficient knowledge transfer that preserves institutional knowledge and minimizes disruption to ongoing project timelines"], c: 1 }
];

const task14Quiz = [
    { q: "A remote developer's response time has gone from 5 minutes to 2+ hours over the past 3 weeks. Their standup attendance dropped to 40%. What's your FIRST action as HR?", o: ["Immediately revoke their WFH privilege and require them to come to the office starting next week", "Document the pattern for one more week before taking any action to build a stronger case for termination", "Schedule an informal 1:1 check-in — ask about challenges before assuming misconduct or bad intent", "Send a formal warning letter citing the WFH policy violations with a copy to the Delhi Team"], c: 2 },
    { q: "A new hire is starting remotely. Their buddy/mentor is in a different city (Delhi while the new hire is in Lucknow). What's the BIGGEST risk?", o: ["Time zone differences will make scheduling impossible since Delhi and Lucknow operate on different schedules", "Cross-city mentorship works perfectly fine — location is irrelevant when both have internet access and tools", "The new hire may feel isolated — cross-city mentoring requires extra scheduled touchpoints and video calls to build rapport", "The mentor won't have enough time for their own work while managing someone in a different city remotely"], c: 2 },
    { q: "You're designing a remote team engagement activity. Which approach is MOST effective for a team of 20-25 year olds?", o: ["Mandatory 2-hour team building workshop every Friday afternoon with structured leadership development exercises", "Short, optional fun activities — 15-min virtual coffee roulette, Kahoot quizzes, show-and-tell — that respect people's time", "Annual company retreat to a resort — one big event creates more bonding than frequent small activities throughout the year", "Let teams self-organize their own engagement — HR shouldn't dictate how people have fun during work hours"], c: 1 },
    { q: "A team lead reports that a remote employee's camera is 'always broken' during meetings. In the past month, they've attended 12 meetings with camera off. DH policy requires cameras on. How do you handle this?", o: ["Accept it — some people have camera anxiety and forcing camera-on creates a hostile work environment for them", "Ask IT to verify — if the camera truly isn't working, provide a replacement, if it is working, address the policy violation directly", "Immediately issue a written warning since camera-on is a clear policy requirement that has been violated 12 times", "Ignore it — camera policies are unenforceable for remote workers and focusing on output matters more than video presence"], c: 1 },
    { q: "A remote employee requests to work from their hometown (a different city) for 3 months due to a family situation. Their role requires no physical office presence. What factors should HR evaluate?", o: ["Deny automatically — allowing one person to work from a different city creates precedent that every employee will exploit", "Approve immediately to show compassion — family emergencies should always override any workplace policy considerations", "Evaluate: internet reliability at the new location, time zone impact, data security, manager approval, and set clear expectations with a review date", "It depends entirely on whether the employee is a high performer — top performers deserve flexibility that average employees don't"], c: 2 },
    { q: "Your company just moved to full WFH. After 2 months, productivity metrics show a 15% drop across the development team. What's the MOST likely root cause to investigate first?", o: ["Developers are slacking off at home — implement screen monitoring software to track their activity throughout the day", "Lack of structured communication — no standups, unclear daily goals, and absence of accountability framework caused the drift", "WFH doesn't work for developers — bring the entire team back to office since coding requires in-person collaboration", "15% is within normal variance during transition — wait 3 more months before making any process changes or interventions"], c: 1 },
    { q: "Remote onboarding Day 1: the new hire's laptop hasn't arrived yet. IT says it'll take 2 more days. What should HR do?", o: ["Postpone the start date by 2 days — there's nothing the employee can do without equipment so why waste time", "Proceed with Day 1 — they can join orientation calls from their personal device, complete paperwork, and review documentation while equipment arrives", "Ask the employee to use their personal laptop for 2 days and promise to reimburse them if any issues arise", "Escalate to the Delhi Team immediately — IT delays on Day 1 indicate systemic process failure requiring urgent intervention"], c: 1 },
    { q: "A remote employee is consistently available during work hours (10 AM - 7 PM) but all their actual code commits happen between 11 PM and 3 AM. This pattern suggests:", o: ["They're a night owl — as long as work gets done and they're available for meetings, their coding schedule doesn't matter", "They may be working another job during the day and completing DH work at night — this requires investigation and a direct conversation", "Night coding is common for developers — this is a productivity preference that shouldn't concern HR or management", "Immediately check their employment contract for moonlighting clauses and begin termination if they have a second job"], c: 1 },
    { q: "You need to conduct a performance review for a remote employee you've never met in person. The employee has been working remotely for 8 months. What's the BEST approach?", o: ["Delay the review until you can meet in person — performance reviews require face-to-face interaction for authenticity", "Conduct the review over video call using the same structured format as in-person reviews — data and documentation matter more than physical presence", "Ask the employee's manager to conduct the review alone since they have more regular interaction with the remote worker", "Send a written review via email and ask the employee to respond in writing to avoid the awkwardness of a virtual meeting"], c: 1 },
    { q: "Time tracking data shows a remote employee logs exactly 9 hours every single day — never 8:55, never 9:05, always exactly 9:00. This pattern over 30 days suggests:", o: ["Excellent time management — the employee has mastered their daily routine and consistently delivers a full work day", "Normal variation — many employees round their time entries and this is standard practice across the industry", "Likely fabrication — real work patterns show natural variation, exact same hours daily for 30 days indicates fake time entries", "The employee is simply very disciplined — this should be recognized and rewarded as a model for other remote workers"], c: 2 },
    { q: "A remote team has a member in Lucknow and a manager in Delhi. The employee says 'My manager only messages me to assign work, never for feedback or check-ins.' This is a failure of:", o: ["The employee — they should proactively seek feedback instead of waiting for their manager to initiate conversations", "The communication cadence — HR should have ensured weekly 1:1s are mandatory for all remote manager-employee relationships", "The tools — the company needs better communication software that prompts managers to check in with their remote team", "Distance — remote management naturally reduces personal interaction and this is an unavoidable tradeoff of WFH culture"], c: 1 },
    { q: "You discover that 3 remote employees have been sharing their work passwords with family members to help them during busy periods. Under DH policy, this is:", o: ["Understandable — remote work blurs home/work boundaries and family help is a natural extension of the home environment", "A minor policy violation — issue a verbal reminder about password security and ask them to change their passwords", "A serious security breach — sharing credentials violates data protection policy and puts client data at risk, requiring formal disciplinary action", "Only problematic if the family members accessed client data — if they only helped with internal tasks, it's not a real concern"], c: 2 }
];

const task15Quiz = [
    { q: "A Fiverr client orders a Shopify store build. The PM assigns a developer who has completed training but has never handled a live Fiverr order. What's the HR implication?", o: ["No HR implication — task assignment is a management decision, not an HR concern under any normal circumstances", "HR should have ensured the employee completed practical training tasks before being cleared for live client-facing work", "The PM should be disciplined for assigning an untrained developer — this is a management failure not an HR issue", "This is fine — the best way to learn is by doing real projects and the training modules are just theoretical background"], c: 1 },
    { q: "At DH, developers are expected to handle WordPress today and Shopify tomorrow. A new hire says 'I only do WordPress, I don't want to learn Shopify.' How should HR frame this?", o: ["Respect their specialization — forcing employees to learn tools they don't want creates resentment and low quality work", "At a Fiverr agency, multi-platform versatility isn't optional — it's a core job requirement that was in the JD. Discuss career growth that comes with broadening skills", "Transfer them to a WordPress-only team to leverage their existing skills and avoid unnecessary conflict about learning", "Terminate them — if they won't learn Shopify, they don't fit the agency model and will be a bottleneck for the team"], c: 1 },
    { q: "DH needs to hire 5 Shopify developers in the next 30 days to handle increased Fiverr order volume. The standard hiring process takes 25 days. What's the HR strategy?", o: ["Skip phone screens and reference checks to save time — speed matters more than process when revenue is at stake", "Activate the talent pool of pre-screened candidates, run batch interviews, and parallel-process multiple candidates simultaneously", "Hire contractors from Upwork or Fiverr itself as a bridge while the standard hiring pipeline runs its normal course", "Lower the qualification bar temporarily — hire anyone who knows basic Shopify and train them intensively on the job"], c: 1 },
    { q: "A content writer at DH says they feel 'less valued' than developers because developers get more attention, faster salary revisions, and better perks. How should HR address this?", o: ["Explain that developers generate direct revenue from Fiverr orders while content writers are support functions with different value", "This is a valid concern — HR should audit compensation equity across roles and ensure non-dev roles have clear growth paths and recognition", "Tell the content writer to focus on their own career instead of comparing themselves to other roles in the organization", "Implement identical compensation structures across all roles to eliminate any perception of favoritism or role hierarchy"], c: 1 },
    { q: "The DH pipeline is: Sales → PM → Dev → CS. A PM quits suddenly. The immediate impact cascades to:", o: ["Only the PM's direct projects — other team members can absorb the workload temporarily until a replacement is hired", "Developer assignments, client communications, delivery timelines, and Fiverr seller metrics — because the PM is the central coordinator in the pipeline", "Sales only — since they can't take new orders without a PM to manage them, but existing projects continue unaffected", "Customer Service — since they'll have to handle client questions that the PM normally answers during the project phase"], c: 1 },
    { q: "An intern at DH has completed their 3-month internship. Training score: 92%. On-time delivery: 75% (target 80%). Attitude rating from team: 4.5/5. Manager recommends conversion. HR's assessment:", o: ["Convert immediately — the attitude score compensates for the slightly below-target delivery rate and they'll improve", "Do not convert — the 75% on-time delivery is below the 80% threshold and standards should not be compromised", "Convert with a conditional 30-day probation focused on improving on-time delivery to 80%+ with weekly tracking", "Ask the intern to do another month of internship to prove they can hit 80% before making the conversion decision"], c: 2 },
    { q: "DH is hiring for a PM role. Candidate A has 3 years PM experience at a traditional IT company. Candidate B has 1 year experience at another Fiverr agency. Who's likely a better fit?", o: ["Candidate A — more experience always wins and they can learn Fiverr-specific processes during onboarding training", "Candidate B — Fiverr agency experience means they understand order lifecycles, client communication on marketplaces, and fast-paced delivery which is harder to teach than general PM skills", "Both are equal — interview performance should be the only deciding factor regardless of their background type", "Neither — DH should only hire internally or promote from the intern pool since external PM hires rarely work out"], c: 1 },
    { q: "A designer at DH receives a Fiverr client review saying 'The design was good but communication was terrible — took 2 days to respond.' Who owns this feedback?", o: ["The designer — they should have responded faster regardless of other workload since client communication is everyone's job", "The PM — they manage client communication and should have been the bridge between the designer and the client", "Both PM and designer share responsibility — but HR should check if the workload allocation allowed timely communication", "Fiverr reviews aren't reliable metrics — clients often leave emotional reviews that don't reflect actual service quality"], c: 2 },
    { q: "Employee retention strategy for young professionals (20-28) at a digital agency should prioritize:", o: ["High salaries above market rate — young professionals are primarily motivated by compensation and will leave for more money", "Learning opportunities, career path visibility, mentorship, and a fun culture — young professionals value growth over marginal salary differences", "Job security and stability messaging — millennials and Gen-Z crave stability above all other workplace benefits", "Remote work and unlimited leave — flexibility is the only thing that matters to younger generation employees today"], c: 1 },
    { q: "DH is considering hiring a Head of PM to manage 5 existing PMs. Currently, PMs report directly to the Delhi Team. What should HR evaluate before recommending this hire?", o: ["Whether the ₹8-12L salary for a Head of PM generates enough additional revenue to justify the cost — pure ROI analysis", "Span of control, current PM performance metrics, whether Delhi Team bandwidth is a bottleneck, and whether adding a management layer improves or slows decision-making", "Always add management layers as the team grows — 5 direct reports to a remote leader is too many for effective oversight", "Ask the existing PMs if they want a Head of PM — employee preference should drive organizational structure decisions"], c: 1 },
    { q: "Building employer brand for a Fiverr agency is different from traditional companies because:", o: ["It isn't different — employer branding principles are universal and apply identically regardless of business model", "Fiverr agencies can showcase their seller ratings, client reviews, and project portfolio as proof of exciting work and real impact visible to potential hires", "Fiverr agencies shouldn't invest in employer branding — referrals and Naukri postings are sufficient for agency hiring needs", "Employer branding only matters for large companies with 500+ employees — agencies should focus on compensation instead"], c: 1 },
    { q: "A developer wants to transition to a PM role within DH. They have no formal PM experience but have been informally coordinating small projects. HR should:", o: ["Deny the request — role transitions create skill gaps in the current team and the developer is more valuable as a developer", "Create a structured transition plan: complete PM training module, shadow a senior PM for 2-4 weeks, handle 2-3 small projects under supervision, then evaluate", "Approve the transfer immediately — internal mobility should be encouraged and they can learn PM skills on the job", "Tell them to apply for PM roles externally, gain experience, and then return to DH as a PM if a position is available"], c: 1 }
];

const task16Quiz = [
    { q: "Your HR dashboard shows time-to-hire increased from 20 days to 35 days over the past quarter. What's the FIRST metric to investigate?", o: ["Cost-per-hire — if spending hasn't increased, the longer timeline might indicate budget constraints limiting sourcing efforts", "Stage-by-stage conversion rates — identify WHERE candidates are dropping off (sourcing, screening, interview, offer stage)", "Total application volume — fewer applicants would naturally extend the timeline and indicate a sourcing problem", "Employee satisfaction — low morale might be causing referrals to dry up, extending time-to-hire as a secondary effect"], c: 1 },
    { q: "You're designing an employee satisfaction survey for DH's team of 40 employees. The survey should be:", o: ["50+ questions covering every HR topic exhaustively — more data is always better for making informed decisions", "Anonymous, 10-15 questions, mixing Likert scale and 1-2 open-ended questions, deployed quarterly via Google Forms", "Named surveys so HR can follow up with specific employees who report low satisfaction scores for targeted interventions", "Annual surveys with 30 questions — quarterly is too frequent and causes survey fatigue that reduces response quality"], c: 1 },
    { q: "Your monthly HR report shows 90-day retention dropped from 85% to 60%. Attrition is concentrated in the dev team. What data do you present to management?", o: ["Just the numbers — management will decide what action to take based on their broader business knowledge and context", "The retention drop with exit interview themes, dev workload data, manager-specific breakdown, and comparison to previous quarters with recommended actions", "A recommendation to increase dev salaries by 20% since compensation is always the primary driver of early attrition", "Nothing yet — wait for the next quarter's data to confirm whether this is a trend or just an anomaly before alarming management"], c: 1 },
    { q: "An eNPS score of -10 means:", o: ["The score is impossible — eNPS ranges from 0 to 100 and cannot be negative under any survey methodology", "More employees are detractors than promoters — this is a serious engagement crisis requiring immediate investigation and action plan", "The survey had errors — rerun it with different questions since negative scores indicate survey design problems", "It's average for Indian companies — eNPS benchmarks in India are typically negative and this shouldn't cause concern"], c: 1 },
    { q: "You want to predict which employees are at risk of leaving in the next 6 months. Which combination of data points is MOST predictive?", o: ["Salary level alone — employees below market rate are the most likely to leave regardless of other factors", "LinkedIn activity monitoring — the only reliable predictor is whether employees are actively updating profiles and networking", "Engagement score trend + time since last salary revision + manager relationship rating + work anniversary timing", "Performance review score — low performers leave because they anticipate being managed out and want to leave first"], c: 2 },
    { q: "HR tracks training completion across 14+ modules at DH. A new hire is on Day 25 of 30 and has completed only 40% of their training module. What action does this trigger?", o: ["No action needed — some employees learn at different paces and forcing deadlines on training reduces knowledge retention", "Automatic escalation — notify the employee's manager, flag in the weekly HR report, and schedule a check-in to understand blockers", "Extend the deadline to 45 days — 30 days was always too aggressive for comprehensive training modules with 100+ quiz questions", "Remove the employee from the training program — if they can't complete it in 30 days, they likely lack the aptitude for the role"], c: 1 },
    { q: "Revenue per employee at DH is ₹3.2L/quarter. After hiring 5 new developers, it drops to ₹2.6L/quarter. This is:", o: ["A disaster — the new hires are underperforming and should be put on PIPs immediately to protect revenue metrics", "Expected short-term dip — new hires need 60-90 days to ramp up to full productivity, track again next quarter", "Proof that the company hired too many people — HR should recommend layoffs to restore the revenue-per-employee metric", "Irrelevant — revenue per employee is a finance metric that HR shouldn't track or worry about in their reporting"], c: 1 },
    { q: "You're building an HR dashboard in Google Sheets. Which tab should be updated WEEKLY (not monthly)?", o: ["Compensation analysis — salaries change frequently and weekly tracking ensures accuracy for offer benchmarking", "Recruitment funnel — active pipeline changes rapidly and weekly updates prevent losing track of candidates in process", "Attrition analysis — exits happen unpredictably and weekly tracking catches patterns that monthly reports would miss", "Leave and attendance — weekly updates give managers real-time visibility into team availability and staffing levels"], c: 1 },
    { q: "A manager says 'I don't have time for 1:1 meetings with my 6 direct reports — I'll just do a monthly team meeting instead.' HR should explain:", o: ["Monthly team meetings are fine as a replacement — the key is communication happening, not the specific format used", "1:1s are non-negotiable for remote teams — they're the primary mechanism for individual feedback, issue detection, and employee engagement that group meetings cannot replace", "Compromise — do 1:1s biweekly instead of weekly since the manager's concern about time investment is legitimate and valid", "Let the manager decide — they know their team's communication needs better than HR prescribes from the outside"], c: 1 },
    { q: "Data shows that employees who complete training within 20 days (vs 30-day deadline) have 35% higher 90-day retention. How should HR use this insight?", o: ["Make the training deadline 20 days instead of 30 — if faster completion correlates with retention, force everyone to finish faster", "Investigate causation vs correlation — fast completers may simply be more motivated employees who would stay regardless of training speed", "Ignore it — correlation between training speed and retention is coincidental and doesn't indicate any actionable HR strategy", "Use it to identify high-potential hires early — fast training completion becomes one signal in a multi-factor retention risk model"], c: 3 }
];

const task17Quiz = [
    { q: "In Scenario 1 (Draft JD for Shopify Developer), what's the MOST critical element that DH-specific JDs must include that generic JDs don't?", o: ["Salary range — all JDs should include salary information to attract the right candidates from the market", "Mention of Fiverr context, delivery pace expectations, and multi-platform versatility requirement — these define the actual working reality", "Company founding year and investor information — candidates want to know the company's financial stability and growth trajectory", "A list of every tool and technology used at the company to demonstrate technical sophistication and attract skilled developers"], c: 1 },
    { q: "In Scenario 2 (Resume Screening), Candidate D has 3 years Shopify agency experience and 50+ stores but asks for ₹12L (budget is ₹6L). What's the correct screening decision?", o: ["Reject immediately — the budget mismatch is too large and negotiation from ₹12L to ₹6L is unrealistic for any candidate", "Shortlist for phone screen — discuss total compensation, growth path, and explore whether a performance-linked structure bridges the gap", "Offer ₹6L and hope they accept — some candidates state high expectations but accept lower offers when they like the company", "Skip phone screen and go directly to the hiring manager — let them decide if a budget exception is worth pursuing"], c: 1 },
    { q: "In Scenario 3 (PIP Document), which element is MOST commonly forgotten but legally critical?", o: ["The employee's job title and department — basic identification information that every HR document should include", "The specific support the company will provide — PIPs that only list failures without offering help are legally indefensible", "The manager's signature — without the manager signing, the PIP has no authority within the organizational hierarchy", "The company logo and header — official documentation requires branding to be considered legitimate and legally binding"], c: 1 },
    { q: "In Scenario 4 (Exit Interview Summary), the departing PM mentions their manager takes credit for team work. HR should:", o: ["Include this in the report verbatim with the employee's name to ensure accountability and transparency in documentation", "Classify it under 'Management Issue,' cross-reference with previous exit data and current team engagement scores, and recommend investigation without naming the departing employee", "Dismiss it — exit interviews often contain exaggerated complaints from employees who are emotionally processing their departure", "Immediately confront the manager with the accusation before the departing employee's last day while details are fresh"], c: 1 },
    { q: "In Scenario 5 (90-Day Onboarding Plan), what differentiates a DH onboarding plan from a generic one?", o: ["DH uses different software tools — the onboarding plan should focus on tool training above all other considerations", "The integration of the training module system with specific completion deadlines, Fiverr workflow exposure, and the pipeline understanding (Sales→PM→Dev→CS)", "Nothing — onboarding best practices are universal and DH doesn't need a customized plan different from any other company", "DH's plan should be shorter since the agency moves fast and new hires should be on live projects from Week 1"], c: 1 },
    { q: "In Scenario 6 (Harassment Complaint), what's the FIRST thing HR must do before any investigation begins?", o: ["Confront the accused person immediately to get their side of the story while the complainant's account is fresh", "Separate the complainant and accused into different teams to prevent further incidents during the investigation period", "Listen to the complainant without judgment, document everything they say, and assure confidentiality and non-retaliation", "Send a company-wide email reminding all employees about the POSH policy and acceptable workplace behavior standards"], c: 2 },
    { q: "In Scenario 7 (Salary Negotiation), the candidate has a competing offer of ₹7.2L. Your max budget is ₹6L. The MOST effective negotiation lever is:", o: ["Tell the candidate their competing offer is probably inflated and they should verify the actual CTC breakdown carefully", "Offer ₹6L base + structured performance bonus potential + guaranteed 6-month review tied to KPIs that could bring total compensation close to ₹7L", "Match ₹7.2L by requesting a budget exception — losing this candidate would cost more in re-hiring time and effort", "Tell the candidate to take the other offer — at ₹1.2L gap, negotiation is futile and you shouldn't waste time trying"], c: 1 },
    { q: "In Scenario 8 (Termination Letter), including a reference to the PIP dates and documented shortfalls is legally important because:", o: ["It shows the employee was given fair warning and opportunity to improve — termination without documented process creates legal liability", "It helps the employee understand what went wrong so they can improve at their next job which is a professional courtesy", "Indian labor law requires specific PIP reference in all termination documents or the termination is automatically void", "It's a formality — most employees don't read termination letters carefully and the reference is primarily for HR records"], c: 0 },
    { q: "Across all 8 scenarios, the common thread that connects good HR practice is:", o: ["Speed — HR should prioritize resolving all situations as quickly as possible to minimize disruption to business operations", "Documentation, fairness, evidence-based decisions, and clear communication — every scenario requires these regardless of the situation type", "Following company policy exactly as written — HR's role is to enforce rules, not make judgment calls about individual circumstances", "Consulting the Delhi Team before taking any action — all HR decisions at DH must be escalated for approval before implementation"], c: 1 },
    { q: "An HR professional who cannot draft a proper PIP, conduct an exit interview, write a JD, and handle a harassment complaint should:", o: ["Be placed on their own PIP — these are fundamental HR competencies that every HR professional must demonstrate proficiency in", "Focus on one skill at a time — mastering PIP writing first, then moving to other skills over a 12-month development plan", "Not be in an HR role — these are baseline competencies, not advanced skills, and inability to perform them indicates role mismatch", "Be given more time and training — skills develop at different rates and HR competency assessments should be lenient initially"], c: 0 }
];

const task18Quiz = [
    { q: "According to the DH Authority Matrix, who can approve a salary revision for an existing employee?", o: ["HR independently — salary revisions are a core HR function that doesn't require external approval for standard adjustments", "The employee's direct manager — they know the employee's performance best and should have compensation authority", "Delhi Team approval is required — salary revisions cannot be self-approved by local HR or managers alone", "The Finance department — all compensation changes must be budget-verified by finance before HR can communicate them"], c: 2 },
    { q: "An employee has a conflict with their direct manager. According to DH's escalation matrix, the correct escalation path is:", o: ["Address it directly with the manager first in a private conversation before involving any third parties in the situation", "Post about it in the team Slack channel to get peer perspective and build consensus on the fairest resolution", "Report to HR or the Delhi Team — company policy specifies these as the appropriate channels for manager-related complaints", "Go directly to the CEO since manager conflicts are too serious for HR to handle and require executive intervention"], c: 2 },
    { q: "The DH Incentive-Penalty framework requires HR to apply a penalty to a developer for 3 missed deadlines. Before applying the penalty, HR MUST:", o: ["Inform the Delhi Team and proceed — penalties are clearly defined in the framework and don't require additional steps", "Verify documented evidence of all 3 missed deadlines AND get manager confirmation — penalties without documentation create legal risk and destroy trust", "Apply the penalty immediately and inform the employee — delayed penalties lose their corrective impact and effectiveness", "Ask the employee for their side of the story first — they may have valid reasons that override the penalty framework"], c: 1 },
    { q: "DH conducts quarterly performance reviews. The review dimensions are weighted: KRA (40%), Quality (25%), Attitude (20%), Growth (15%). An employee scores: KRA 3/5, Quality 5/5, Attitude 5/5, Growth 4/5. Their weighted score is:", o: ["4.25/5 — which means they exceed expectations overall despite the below-average KRA achievement score", "3.9/5 — calculated as (3×0.4)+(5×0.25)+(5×0.2)+(4×0.15) = 1.2+1.25+1.0+0.6", "4.0/5 — the simple average of all four dimension scores without considering the differential weighting", "Cannot be calculated — performance review scores should not be reduced to a single number due to qualitative factors"], c: 1 },
    { q: "A new hire's training module is overdue by 10 days. According to DH training management protocol, this should have been escalated at:", o: ["Day 30 — the deadline itself is the escalation trigger and overdue status is simply noted in the monthly report", "Day 37 — 7 days overdue triggers escalation to the manager and flagging in the weekly HR report to Delhi Team", "Day 45 — giving a 50% buffer on the original deadline before escalating shows reasonable flexibility for new employees", "No fixed trigger — HR should use judgment about when to escalate based on the specific employee's learning pace"], c: 1 },
    { q: "According to DH leave policy, an employee wants to take 4 consecutive days of casual leave combined with a public holiday to create a 5-day break. This requires:", o: ["No special approval — casual leave combined with holidays is automatic and employees can plan their leave freely", "Manager approval — combining casual leave with holidays for extended breaks requires explicit managerial authorization beyond standard leave approval", "Rejection — company policy does not allow combining casual leave with public holidays to create extended vacations", "Delhi Team approval — extended leave combinations of 4+ days must be escalated regardless of available leave balance"], c: 1 },
    { q: "An employee files an appeal against a penalty applied under the incentive-penalty framework. According to DH protocol, the appeal must be processed within:", o: ["24 hours — penalties affect employee morale and immediate resolution demonstrates HR's commitment to fairness", "5 business days — timely processing maintains trust while giving HR adequate time to review the evidence and decision", "30 days — appeals require thorough investigation and rushing the process could lead to incorrect reversal of penalties", "No specific timeline — appeals are handled based on HR's current workload and the complexity of each individual case"], c: 1 },
    { q: "The Delhi Team communicates a new policy change: effective immediately, all employees must work from the office 3 days per week. Currently DH is full WFH. HR's FIRST action:", o: ["Implement immediately — Delhi Team directives are final and HR's role is to enforce, not question, policy decisions", "Refuse to implement until the Delhi Team provides a written rationale — policy changes should be justified to HR first", "Communicate the change to all employees with clear effective dates, transition timeline, and answers to anticipated questions while planning logistics", "Survey employees about their preference first and share the results with Delhi Team before implementing any changes"], c: 2 },
    { q: "Verifying a training certificate at DH involves:", o: ["Checking the employee's self-reported completion status in the training dashboard without additional verification", "Using verify.html to authenticate the certificate code — the system uses checksum verification to prevent forgery", "Asking the employee's manager to confirm they observed the employee completing the training module in its entirety", "Certificates are automatically verified by the training system and HR doesn't need to perform any manual checks"], c: 1 },
    { q: "HR is coordinating a quarterly headcount planning meeting between Lucknow and Delhi teams. What must HR prepare?", o: ["Just a list of current open positions — the Delhi Team will handle all strategic planning decisions independently", "Current headcount by role and city, attrition data, pipeline status, revenue per employee trends, and projected hiring needs based on order volume growth", "A slide deck about HR achievements this quarter — headcount planning meetings are an opportunity to showcase HR's value", "Nothing — headcount planning is a finance function and HR attends only to note down hiring requirements that get decided"], c: 1 }
];

const task19Quiz = [
    { q: "A company with 200 employees has 45% annual attrition. The HR team of 3 says they're 'too busy hiring to do anything else.' The root cause analysis should reveal:", o: ["HR is understaffed — the company needs to hire additional recruiters to handle the recruitment volume demand", "The company is trapped in a hire-replace cycle — fixing retention (onboarding, culture, management) would reduce hiring load", "45% attrition is normal for a growing company and the HR team simply needs better recruitment tools and automation", "The business model requires high turnover — some industries naturally have high attrition and HR should accept this"], c: 1 },
    { q: "An employee scores 95% on their training certification exam but their on-the-job performance is poor after 3 months. This disconnect suggests:", o: ["The training was ineffective — scoring well didn't translate to practical competence, indicating a curriculum design flaw", "The employee is capable but unmotivated — high test scores prove ability, so the issue is engagement not competence", "The exam was too easy and didn't adequately test applied knowledge — revise the exam to include practical scenarios", "All of these are possible — the correct diagnosis requires investigating training design, management support, and role fit simultaneously"], c: 3 },
    { q: "Across all HR functions covered in tasks 1-18, which single metric BEST represents overall HR effectiveness?", o: ["Time-to-fill — faster hiring demonstrates efficient talent acquisition and strong employer brand in the market", "Offer acceptance rate — high acceptance rates prove the company's value proposition resonates with target candidates", "Cost-per-hire — keeping recruitment costs low while maintaining quality demonstrates efficient resource utilization", "Employee engagement score — it captures the cumulative impact of hiring quality, onboarding, culture, and management effectiveness"], c: 3 },
    { q: "You inherit an HR department with zero documentation — no policies, no templates, no exit records. Priority order for building from scratch:", o: ["Engagement surveys → Policies → Templates → Process documentation, since you need to understand sentiment first", "Everything simultaneously — each area is equally critical and delays in any area creates organizational risk", "Core policies (leave, conduct, POSH) → Hiring templates → Onboarding SOP → Performance framework → Exit process", "Templates → Policies → Performance reviews → Recruitment, since templates are fastest to create and show immediate results"], c: 2 },
    { q: "A Board member asks 'What's the ROI of our HR department?' The STRONGEST answer uses:", o: ["Total recruitment cost savings from in-house hiring versus external agency fees for all positions filled this year", "Comparison of HR headcount ratio versus industry benchmarks showing the department operates lean and efficiently", "List of all HR programs implemented, training sessions conducted, and policies created during the reporting period", "Revenue-per-employee growth, attrition cost reduction, time-to-productivity improvement, and engagement-to-performance correlation data"], c: 3 },
    { q: "You notice that hiring managers across 3 departments are each using different interview processes, scoring methods, and offer structures. This creates:", o: ["Healthy diversity in approach — different departments have different needs and standardization would be counterproductive", "Minor inefficiency that HR should address gradually over 12-18 months to avoid disrupting departmental workflows currently", "Compliance risk, inconsistent candidate experience, impossible-to-compare data, and potential discrimination exposure across the organization", "No real issue — as long as each department fills their roles successfully, the process variations are inconsequential"], c: 2 },
    { q: "A remote employee has been flagged by their manager for potential WFH abuse: irregular response times, camera always off, and declining quality. Applying tasks 10, 14, and 18, the correct sequence is:", o: ["Immediate termination — the evidence is sufficient to justify exit without further investigation or documentation", "Document patterns (Task 14) → Informal 1:1 check-in → Formal meeting with manager (Task 10) → PIP if needed → Escalate to Delhi Team per authority matrix (Task 18)", "Revoke WFH immediately and mandate office attendance — this is simpler than a lengthy investigation process", "Wait 30 days for more evidence — acting on preliminary flags without a month of data is premature and unfair"], c: 1 },
    { q: "After completing all 18 tasks of this training, what DEFINES an HR professional vs an HR administrator?", o: ["An HR administrator follows processes — an HR professional anticipates needs, influences decisions, and drives business outcomes through data-driven strategic action", "The difference is primarily seniority and title — both roles perform the same fundamental functions at different organizational scales", "HR professionals focus on strategy while administrators handle execution — the two roles should operate as separate functions", "An HR professional has an MBA or HR certification while an administrator may have only a bachelor's degree or equivalent"], c: 0 },
    { q: "A startup founder says 'HR is overhead — we don't need it until we're 50+ people.' Your evidence-based refutation integrating agency-specific HR knowledge (Task 15):", o: ["HR overhead concern is valid — startups should outsource HR functions until the cost of a full-time hire is justified financially", "Without HR from early stage, especially at a fast-paced agency, you build culture accidentally, hire inconsistently, and create legal exposure that compounds — agency scaling makes this even more urgent", "Agree partially — startups under 20 employees can rely on the founder for HR functions with occasional legal consultation", "HR is a compliance requirement — labor law mandates HR functions at any company size regardless of the founder's preference"], c: 1 },
    { q: "The ultimate measure of whether this HR training succeeded is:", o: ["Your exam score — a high percentage demonstrates strong theoretical understanding of all 18 tasks and HR concepts covered", "Completing all 18 tasks and receiving the certification that verifies you've absorbed the full training curriculum systematically", "Whether you can handle a real hiring pipeline, remote team management, employee conflict, agency-specific challenges, and compliance audit independently", "Positive feedback from your manager about improved performance in HR-related tasks after completing the entire program"], c: 2 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz, task11Quiz, task12Quiz, task13Quiz, task14Quiz, task15Quiz, task16Quiz, task17Quiz, task18Quiz, task19Quiz];

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
if (typeof task15Content !== 'undefined') window.task15Content = task15Content;
if (typeof task16Content !== 'undefined') window.task16Content = task16Content;
if (typeof task17Content !== 'undefined') window.task17Content = task17Content;
if (typeof task18Content !== 'undefined') window.task18Content = task18Content;
if (typeof task19Content !== 'undefined') window.task19Content = task19Content;

