// HR Training Data - COMPREHENSIVE MODULE
// Digital Heroes Certification Program  
// 14 Tasks, 100+ Quiz Questions

const trainingTasks = [
    {id: 1, title: "HR Mindset", description: "People = Revenue", contentFirst: true, studyGuide: ["Time: 60 min", "Bad hire = 3x salary", "Hire slow, fire fast"]},
    {id: 2, title: "Job Description Mastery", description: "Writing JDs that attract A-players", contentFirst: true, studyGuide: ["Time: 45 min", "8 essential elements", "Red flag language to avoid"]},
    {id: 3, title: "Sourcing Candidates", description: "Where to find talent", contentFirst: true, studyGuide: ["Time: 45 min", "LinkedIn, Naukri, referrals", "Building talent pipeline"]},
    {id: 4, title: "Resume Screening", description: "100 CVs to 15 calls", contentFirst: true, studyGuide: ["Time: 60 min", "Red flags checklist", "Scoring system"]},
    {id: 5, title: "Phone Screening", description: "15 calls to 5 interviews", contentFirst: true, studyGuide: ["Time: 45 min", "10-min script", "Knockout questions"]},
    {id: 6, title: "Interview Mastery", description: "The 60-minute deep dive", contentFirst: true, studyGuide: ["Time: 90 min", "STAR method", "Role-specific questions"]},
    {id: 7, title: "Reference Checks", description: "Verifying before offering", contentFirst: true, studyGuide: ["Time: 30 min", "What to ask", "Red flags"]},
    {id: 8, title: "Offer & Negotiation", description: "Closing the candidate", contentFirst: true, studyGuide: ["Time: 45 min", "Offer letter template", "Counter-offer handling"]},
    {id: 9, title: "Onboarding Excellence", description: "First 90 days", contentFirst: true, studyGuide: ["Time: 60 min", "Day 1 checklist", "30-60-90 plan"]},
    {id: 10, title: "Performance Management", description: "Reviews & PIPs", contentFirst: true, studyGuide: ["Time: 60 min", "1:1 templates", "Difficult conversations"]},
    {id: 11, title: "Policies & Compliance", description: "Legal essentials", contentFirst: true, studyGuide: ["Time: 60 min", "Leave policy", "Contracts & NDA"]},
    {id: 12, title: "Employee Relations", description: "Conflict & Culture", contentFirst: true, studyGuide: ["Time: 45 min", "Mediation process", "Building culture"]},
    {id: 13, title: "Offboarding", description: "Exit protocol", contentFirst: true, studyGuide: ["Time: 30 min", "Exit interview", "Knowledge transfer"]},
    {id: 14, title: "Final Certification", description: "HR Mastery Exam", contentFirst: false, studyGuide: ["Time: 90 min", "50 questions", "Video submission"]}
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
<h2>📚 TASK 14: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations on Reaching the Final Stage!</h3>
<p>You've covered comprehensive HR knowledge. Before certification, let's review the key competencies:</p>

<div class="highlight-box">
<strong>Core Competencies Checklist:</strong>
<ul>
<li>✅ <strong>Recruitment:</strong> JD creation, sourcing, screening, interviewing</li>
<li>✅ <strong>Selection:</strong> Reference checks, offer negotiation, closing</li>
<li>✅ <strong>Onboarding:</strong> 30-60-90 day planning, training coordination</li>
<li>✅ <strong>Performance:</strong> 1:1s, reviews, PIPs, difficult conversations</li>
<li>✅ <strong>Compliance:</strong> POSH, leave policies, documentation</li>
<li>✅ <strong>Relations:</strong> Conflict resolution, engagement, culture</li>
<li>✅ <strong>Offboarding:</strong> Exit interviews, F&F settlement, documentation</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📊 HR Metrics to Track</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.15);"><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Formula</th><th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to Fill</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Days from JD posting to offer accepted</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><30 days</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offer Acceptance Rate</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Offers accepted ÷ Total offers × 100</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">>80%</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90-Day Retention</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New hires retained past 90 days ÷ Total new hires</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">>85%</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employee Turnover</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Departures ÷ Average headcount × 100</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><15% annually</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employee Satisfaction</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Survey score (1-10)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">>7.5</td></tr>
</table>
</div>

<div class="content-section">
<h3>🎯 Certification Requirements</h3>
<ol>
<li><strong>Quiz Score:</strong> Minimum 80% to pass</li>
<li><strong>Role Play:</strong> Demonstrate a phone screening call</li>
<li><strong>Practical:</strong> Create a JD for a given role</li>
<li><strong>Scenario:</strong> Handle a conflict resolution case</li>
</ol>

<div class="warning-box" style="margin-top: 20px;">
<strong>🚀 Next Steps After Certification:</strong>
<ul>
<li>Shadow senior HR for first 2 weeks on live recruitment</li>
<li>Handle 5 end-to-end recruitment cycles with guidance</li>
<li>Conduct first solo exit interview</li>
<li>Complete POSH certification online</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📚 Ready for the Quiz?</h3>
<p>Proceed to the quiz to test your knowledge across all HR domains!</p>
</div>
`;
