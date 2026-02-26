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
    { id: 14, title: "Final Certification", description: "HR Mastery Exam", contentFirst: false, studyGuide: ["Time: 90 min", "50 questions", "Video submission"] }
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
    { q: "A company with 200 employees has 45% annual attrition. The HR team of 3 says they're 'too busy hiring to do anything else.' The root cause analysis should reveal:", o: ["HR is understaffed — the company needs to hire additional recruiters to handle the recruitment volume demand and ensures long-term sustainability across deliverables", "The company is trapped in a hire-replace cycle — fixing retention (onboarding, culture, management) would reduce hiring load", "45% attrition is normal for a growing company and the HR team simply needs better recruitment tools and automation", "The business model requires high turnover — some industries naturally have high attrition and HR should accept this"], c: 1 },
    { q: "An employee scores 95% on their training certification exam but their on-the-job performance is poor after 3 months. This disconnect suggests:", o: ["The training was ineffective — scoring well didn't translate to practical competence, indicating a curriculum design flaw and ensures long-term sustainability across deliverables", "The employee is capable but unmotivated — high test scores prove ability, so the issue is engagement not competence", "The exam was too easy and didn't adequately test applied knowledge — revise the exam to include practical scenarios", "All of these are possible — the correct diagnosis requires investigating training design, management support, and role fit simultaneously"], c: 3 },
    { q: "Across all HR functions, which single metric BEST represents overall HR effectiveness?", o: ["Time-to-fill — faster hiring demonstrates efficient talent acquisition and strong employer brand in the market and ensures long-term sustainability across deliverables", "Offer acceptance rate — high acceptance rates prove the company's value proposition resonates with target candidates", "Cost-per-hire — keeping recruitment costs low while maintaining quality demonstrates efficient resource utilization", "Employee engagement score — it captures the cumulative impact of hiring quality, onboarding, culture, and management effectiveness"], c: 3 },
    { q: "You inherit an HR department with zero documentation — no policies, no templates, no exit records. Priority order for building from scratch:", o: ["Engagement surveys → Policies → Templates → Process documentation, since you need to understand sentiment first", "Everything simultaneously — each area is equally critical and delays in any area creates organizational risk", "Core policies (leave, conduct, POSH) → Hiring templates → Onboarding SOP → Performance framework → Exit process", "Templates → Policies → Performance reviews → Recruitment, since templates are fastest to create and show immediate results"], c: 2 },
    { q: "A Board member asks 'What's the ROI of our HR department?' The STRONGEST answer uses:", o: ["Total recruitment cost savings from in-house hiring versus external agency fees for all positions filled this year — this method has been validated through extensive testing and produces reliable, repeatable outcomes", "Comparison of HR headcount ratio versus industry benchmarks showing the department operates lean and efficiently", "List of all HR programs implemented, training sessions conducted, and policies created during the reporting period", "Revenue-per-employee growth, attrition cost reduction, time-to-productivity improvement, and engagement-to-performance correlation data"], c: 3 },
    { q: "You notice that hiring managers across 3 departments are each using different interview processes, scoring methods, and offer structures. This creates:", o: ["Healthy diversity in approach — different departments have different needs and standardization would be counterproductive and ensures long-term sustainability across deliverables", "Minor inefficiency that HR should address gradually over 12-18 months to avoid disrupting departmental workflows currently", "Compliance risk, inconsistent candidate experience, impossible-to-compare data, and potential discrimination exposure across the organization", "No real issue — as long as each department fills their roles successfully, the process variations are inconsequential"], c: 2 },
    { q: "The ethical dilemma: A candidate reveals during reference check that their current employer doesn't know they're job searching. The reference provided works at a different company. This is:", o: ["A red flag — honest candidates inform their current employer and searching secretly indicates trustworthiness concerns", "Acceptable for entry-level positions — senior candidates should always be transparent about their job search activity — this is the standard approach", "Grounds for additional scrutiny — request more references to compensate for the inability to verify current performance directly", "Completely normal and expected — most candidates search confidentially, which is why you check non-current references first"], c: 3 },
    { q: "After implementing all 13 tasks of this training, what DEFINES an HR professional vs an HR administrator?", o: ["An HR administrator follows processes — an HR professional anticipates needs, influences decisions, and drives business outcomes", "The difference is primarily seniority and title — both roles perform the same fundamental functions at different scales and ensures long-term sustainability across deliverables", "HR professionals focus on strategy while administrators handle execution — the two roles should operate independently", "An HR professional has an MBA or HR certification while an administrator may have only a bachelor's degree or equivalent"], c: 0 },
    { q: "A startup founder says 'HR is overhead — we don't need it until we're 50+ people.' Your evidence-based refutation:", o: ["HR overhead concern is valid — startups should outsource HR functions until the cost of a full-time hire is justified and ensures long-term sustainability across deliverables", "Without HR from early stage, you build culture accidentally, hire inconsistently, and create legal exposure that compounds over time", "Agree partially — startups under 20 employees can rely on the founder for HR functions with occasional legal consultation", "HR is a compliance requirement — labor law mandates HR functions at any company size regardless of the founder's preference"], c: 1 },
    { q: "The ultimate measure of whether this HR training succeeded is:", o: ["Your exam score — a high percentage demonstrates strong theoretical understanding of all HR concepts covered and ensures long-term sustainability across deliverables", "Completing all 13 tasks and receiving the certification that verifies you've absorbed the full training curriculum", "Whether you can handle a real hiring pipeline, employee conflict, and compliance audit independently with professional judgment", "Positive feedback from your manager about improved performance in HR-related tasks after completing the program"], c: 2 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz, task11Quiz, task12Quiz, task13Quiz, task14Quiz];

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

