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
    { q: "According to the training, a bad hire costs approximately:", o: ["Just their monthly salary amount", "Double their annual compensation", "3x salary plus lost productivity and replacement costs", "Only the recruitment fees paid"], c: 2 },
    { q: "HR's primary mission at Digital Heroes is to:", o: ["Fill open positions as quickly as possible", "Build a championship team that multiplies output", "Maintain employee records and policies", "Organize company events and activities"], c: 1 },
    { q: "The WRONG mindset for HR is thinking:", o: ["I need to find someone who multiplies output", "I need to hire someone for this role", "Quality matters more than speed", "Cultural fit is essential"], c: 1 },
    { q: "The 'Hire Slow, Fire Fast' principle means:", o: ["Take months to hire anyone at all", "Invest time vetting candidates, but act quickly on bad fits", "Hire the first person and fire if wrong", "Never fire anyone, always retrain"], c: 1 },
    { q: "According to the economics of hiring, what costs ₹1,00,000+?", o: ["Job posting fees", "Interview time investment", "Bad hire replacement", "Training materials"], c: 2 },
    { q: "In the 6→10 performance equation, you can train:", o: ["Attitude and character", "Skills but not attitude", "Neither skills nor attitude", "Attitude but not skills"], c: 1 },
    { q: "What demotivates existing team members?", o: ["Hiring exceptionally talented people", "Working alongside a bad hire", "Competitive salary increases", "Challenging project assignments"], c: 1 },
    { q: "A bad hire creates a cycle of:", o: ["Continuous improvement", "Repeated hiring failures and wasted time", "Team motivation", "Knowledge sharing"], c: 1 },
    { q: "The key insight from Task 1 is:", o: ["Hire anyone and hope for the best", "People ARE revenue — wrong people break the chain", "Speed of hiring matters most", "Experience always equals quality"], c: 1 },
    { q: "At Digital Heroes, even interns benefit from:", o: ["Free lunch program", "Equity-sharing model from Day 1", "Unlimited vacation", "Company car"], c: 1 }
];

const task2Quiz = [
    { q: "A job description serves as your:", o: ["Legal requirement only", "First filter for candidates", "Marketing brochure", "Internal document nobody reads"], c: 1 },
    { q: "How many essential JD elements are taught in this task?", o: ["4 elements", "6 elements", "8 elements", "10 elements"], c: 2 },
    { q: "Using language like 'Rockstar/Ninja' in a JD is:", o: ["Trendy and attractive", "Unprofessional — use proper titles instead", "Required for tech roles", "Preferred by young candidates"], c: 1 },
    { q: "Instead of 'Competitive salary', a JD should:", o: ["Remove salary information entirely", "Give a specific range like '₹40-60k/month'", "Say 'salary negotiable'", "Promise the highest in market"], c: 1 },
    { q: "'Fast-paced environment' is a red flag because:", o: ["It attracts overachievers", "It's code for 'chaotic'", "Candidates love it", "It's legally required"], c: 1 },
    { q: "Must-Have vs Nice-to-Have requirements help:", o: ["Make the JD longer", "Avoid creating impossible requirements", "Scare away all candidates", "Meet legal compliance only"], c: 1 },
    { q: "Disqualifiers in a JD help by:", o: ["Reducing diversity", "Saving everyone time by stating what you DON'T want", "Making the company look strict", "Increasing application volume"], c: 1 },
    { q: "Application instructions should include:", o: ["Just 'send resume to email'", "A screening question to filter lazy applicants", "Nothing — let them figure it out", "A long essay requirement"], c: 1 },
    { q: "Building a talent pipeline means:", o: ["Waiting until you need to hire", "Building relationships with candidates before you need them", "Posting jobs on every platform", "Hiring recruiters only"], c: 1 },
    { q: "The highest quality sourcing channel according to the data is:", o: ["Naukri job postings", "LinkedIn premium", "Employee referrals", "YouTube community"], c: 2 }
];

const task3Quiz = [
    { q: "The best sourcing channel for senior roles is:", o: ["Internshala", "LinkedIn", "Walk-in interviews", "Random cold emails"], c: 1 },
    { q: "Employee referrals have what advantage?", o: ["Lowest quality candidates", "4x higher retention rate", "Most expensive option", "Slowest hiring process"], c: 1 },
    { q: "YouTube Community sourcing works because:", o: ["Everyone watches YouTube", "Candidates already know Digital Heroes (pre-filtered)", "It's the cheapest option", "YouTube has a job board"], c: 1 },
    { q: "Following up quarterly with promising candidates is part of:", o: ["Wasting time", "Building a talent pipeline", "Stalking candidates", "Legal compliance"], c: 1 },
    { q: "When should you ask your team for referrals?", o: ["Never — keep hiring external", "Always ask team first before posting externally", "Only as a last resort", "Only for executive positions"], c: 1 },
    { q: "A talent pool should be organized by:", o: ["Alphabetical order only", "Role type for each position", "Random selection", "Date of application only"], c: 1 },
    { q: "Naukri is best for:", o: ["Senior executive roles", "Volume hiring", "Intern positions only", "International candidates"], c: 1 },
    { q: "Internshala's candidate quality is rated as:", o: ["Always high", "Variable", "Always low", "Not mentioned"], c: 1 },
    { q: "Good candidates who weren't right for previous roles should be:", o: ["Deleted from records", "Kept in a database for future opportunities", "Permanently rejected", "Reported to other companies"], c: 1 },
    { q: "Building relationships before hiring needs arise helps:", o: ["Waste company resources", "Ensure faster quality hires when positions open", "Create legal liability", "Nothing meaningful"], c: 1 }
];

const task4Quiz = [
    { q: "The 30-Second Resume Scan first checks:", o: ["Educational institution prestige", "Current/recent role relevance", "Hobbies and interests", "Photo and formatting"], c: 1 },
    { q: "Job hopping (3+ jobs in 2 years) is a:", o: ["Green flag showing ambition", "Resume red flag — will likely leave quickly", "Neutral observation", "Sign of senior experience"], c: 1 },
    { q: "No portfolio/GitHub link suggests:", o: ["Privacy-conscious candidate", "Claims skills but has no proof", "Senior-level experience", "Legal concern"], c: 1 },
    { q: "Typos in a resume indicate:", o: ["English isn't their first language", "Low attention to detail", "They're overqualified", "They applied to many jobs"], c: 1 },
    { q: "A CV scoring above 70 points means:", o: ["Immediate reject", "Move to phone screen", "Maybe pile only", "Skip straight to offer"], c: 1 },
    { q: "The CV scoring system awards most points (25) for:", o: ["Portfolio quality", "Relevant experience", "Career progression", "Attention to detail"], c: 1 },
    { q: "A custom cover letter mentioning Digital Heroes is a:", o: ["Red flag", "Green flag — shows genuine interest", "Neutral signal", "Sign of desperation"], c: 1 },
    { q: "Employment gaps with no explanation are:", o: ["Perfectly normal", "A red flag worth investigating", "Always disqualifying", "Preferred by employers"], c: 1 },
    { q: "The target ratio of CVs to phone screens is:", o: ["100 CVs → 50 calls", "100 CVs → 15 calls", "100 CVs → 5 calls", "100 CVs → 100 calls"], c: 1 },
    { q: "Specific achievements with numbers on a resume are:", o: ["Irrelevant filler", "Green flags showing measurable impact", "Signs of exaggeration", "Only for sales roles"], c: 1 }
];

const task5Quiz = [
    { q: "The phone screen should take approximately:", o: ["2 minutes", "10 minutes", "45 minutes", "1 hour"], c: 1 },
    { q: "If a candidate doesn't own a laptop, the action is:", o: ["Continue screening", "Politely reject — shows dependency", "Offer to buy them one", "Schedule office interview"], c: 1 },
    { q: "A candidate who uses computer less than 4 hours daily should be:", o: ["Advanced to interview", "Rejected — not tech-comfortable enough", "Given a training program", "Asked to try harder"], c: 1 },
    { q: "'Take to repair shop' answer for laptop problems means:", o: ["Smart delegation", "Not tech-savvy — reject", "Financial stability", "Professional approach"], c: 1 },
    { q: "The phone screen scoring threshold for interview is:", o: ["60+", "70+", "80+", "90+"], c: 2 },
    { q: "Asking 'What do you know about Digital Heroes?' tests:", o: ["Memory skills", "Whether they researched the company", "Their Google skills", "Nothing important"], c: 1 },
    { q: "The closing of a phone screen should include:", o: ["Immediate offer", "Timeline for next steps (within 3 days)", "Private salary negotiation", "Assignment of first project"], c: 1 },
    { q: "Communication clarity is scored out of:", o: ["/10", "/15", "/20", "/25"], c: 2 },
    { q: "Notice period question helps determine:", o: ["Their loyalty", "When they can start if selected", "Their salary expectations", "Their age"], c: 1 },
    { q: "The target ratio of phone screens to interviews is:", o: ["15 calls → 15 interviews", "15 calls → 5 interviews", "15 calls → 1 interview", "15 calls → 10 interviews"], c: 1 }
];

const task6Quiz = [
    { q: "The 60-minute interview has how many phases?", o: ["3 phases", "4 phases", "6 phases", "8 phases"], c: 2 },
    { q: "The technical assessment phase lasts:", o: ["5 minutes", "10 minutes", "20 minutes", "30 minutes"], c: 2 },
    { q: "STAR method behavioral questions assess:", o: ["Technical coding skills only", "Past behavior to predict future behavior", "Salary expectations", "Educational background"], c: 1 },
    { q: "The interview scoring hire threshold is:", o: ["50/90", "60/90", "70/90", "80/90"], c: 2 },
    { q: "For developer interviews, asking to show a favorite project reveals:", o: ["Their preference in colors", "Technical depth and what they find challenging", "Their salary range", "Nothing useful"], c: 1 },
    { q: "Red flags in interview scoring deduct:", o: ["5 points each", "10 points each", "15 points each", "20 points each"], c: 1 },
    { q: "Culture fit assessment takes:", o: ["0 minutes — not important", "5 minutes", "15 minutes", "30 minutes"], c: 1 },
    { q: "PM interview uses scenario-based questions like:", o: ["Code debugging exercises", "Client anger management situations", "Math puzzles", "Typing speed tests"], c: 1 },
    { q: "The sales interview technique 'Sell me this pen' tests:", o: ["Product knowledge", "Persuasion and sales instinct", "Honesty level", "Pen quality assessment"], c: 1 },
    { q: "Warm-up phase at interview start is for:", o: ["Testing under pressure", "Building rapport and setting agenda", "Technical assessment", "Salary negotiation"], c: 1 }
];

const task7Quiz = [
    { q: "How many reference checks are MINIMUM required?", o: ["0 — optional", "1 reference", "2 references", "5 references"], c: 2 },
    { q: "The reference check relates back to preventing:", o: ["The filing system issues", "The ₹15 Lakh hiring mistake", "Employee benefits problems", "Office layout concerns"], c: 1 },
    { q: "The critical question 'Would you rehire them?' answered with anything other than 'Yes' is:", o: ["Normal variation", "A major red flag", "Unimportant", "Expected behavior"], c: 1 },
    { q: "Reference being a friend instead of a manager is:", o: ["Better for honest feedback", "A red flag — should be a professional reference", "Preferred option", "Legally required"], c: 1 },
    { q: "Long pauses before answering reference questions suggest:", o: ["Thoughtful consideration", "The reference is hiding something", "Poor phone connection", "Normal conversation flow"], c: 1 },
    { q: "'I can only confirm employment dates' from a reference means:", o: ["They're following company policy strictly", "They may have concerns they can't share openly", "They don't remember the person", "Legal requirement"], c: 1 },
    { q: "Reference check question about pressure/deadlines reveals:", o: ["Nothing useful", "How candidate handles real work stress", "Their vacation preferences", "Their typing speed"], c: 1 },
    { q: "Making an offer WITHOUT reference checks is:", o: ["Acceptable for urgent hires", "Non-negotiable — never do this", "The standard practice", "Required for senior roles only"], c: 1 },
    { q: "The reference check opening should identify:", o: ["Your personal opinion of candidate", "Your role, company, and purpose of the call", "Salary being offered", "Other candidates being considered"], c: 1 },
    { q: "Hesitant references who avoid details are:", o: ["Being professional", "Red flags suggesting performance concerns", "Saving time", "Following best practices"], c: 1 }
];

const task8Quiz = [
    { q: "The offer letter must include:", o: ["Just salary amount", "Role, compensation, start date, and reporting structure", "Only job title", "Verbal agreement is enough"], c: 1 },
    { q: "When a candidate says 'I want 10% more', the response should be:", o: ["Immediately agree", "Discuss performance-based increment after probation", "Reject the candidate", "Ignore the request"], c: 1 },
    { q: "Probation period mentioned in the offer template is:", o: ["1 month", "2 months", "3 months with monthly reviews", "6 months"], c: 2 },
    { q: "When a candidate says 'I have another offer', best response is:", o: ["Match their offer immediately", "Ask what attracts them there — compare growth, not just salary", "Tell them to take the other offer", "Panic and increase offer"], c: 1 },
    { q: "Counter-offer from current employer usually:", o: ["Works out great long-term", "Rarely works out — ask why they wanted to leave", "Should be matched immediately", "Means the candidate is worth more"], c: 1 },
    { q: "The offer deadline creates:", o: ["Unnecessary pressure", "Urgency for candidate to decide", "Legal obligation", "Nothing useful"], c: 1 },
    { q: "Performance bonus in the offer is described as:", o: ["Guaranteed monthly", "Up to X% of salary based on performance", "Not included", "Replacing base salary"], c: 1 },
    { q: "The offer letter closing tone should be:", o: ["Formal and threatening", "Exciting and welcoming", "Neutral and cold", "Demanding and urgent"], c: 1 },
    { q: "Work arrangement details in the offer letter include:", o: ["Only office location", "Remote/Hybrid/Office and working hours", "Nothing about schedule", "Flexible by default"], c: 1 },
    { q: "The offer letter should be returned by:", o: ["No deadline needed", "A specified deadline date", "Within 1 hour", "Only after joining"], c: 1 }
];

const task9Quiz = [
    { q: "Pre-boarding (before Day 1) includes:", o: ["Nothing — everything starts on Day 1", "System access, documents, buddy assignment, schedule", "Only sending address", "Only salary information"], c: 1 },
    { q: "The buddy system helps new hires by:", o: ["Creating dependency", "Providing a go-to person for questions and support", "Slowing down onboarding", "Adding more paperwork"], c: 1 },
    { q: "Day 1 protocol starts at what time?", o: ["Whenever they wake up", "9:00 AM with welcome call from HR", "12:00 PM after lunch", "They choose their own time"], c: 1 },
    { q: "The 30-60-90 day plan divides into:", o: ["Learn, Contribute, Own", "Rest, Work, Leave", "Train, Test, Teach", "Watch, Do, Lead"], c: 0 },
    { q: "Days 1-30 success metric is:", o: ["Client-facing without supervision", "Passed training certification", "Mentoring new joiners", "Proposing process improvements"], c: 1 },
    { q: "Days 61-90 expects the hire to:", o: ["Still be learning basics", "Work independently and mentor newer members", "Decide if they want to stay", "Complete probation paperwork only"], c: 1 },
    { q: "First task assignment should be on:", o: ["After 1 week of observation", "Day 1 at 4:00 PM", "After 30 days", "Never on the first day"], c: 1 },
    { q: "End of day check-in on Day 1 is done by:", o: ["CEO", "HR only", "Buddy", "Nobody"], c: 2 },
    { q: "Probation review meeting happens at:", o: ["Day 30", "Day 60", "Day 90", "Day 180"], c: 2 },
    { q: "The probation review covers:", o: ["Only attendance records", "Milestone review, performance, concerns, and next quarter goals", "Just salary discussion", "Office furniture requests"], c: 1 }
];

const task10Quiz = [
    { q: "Weekly 1:1 meetings should last:", o: ["5 minutes", "15 minutes", "30 minutes", "2 hours"], c: 2 },
    { q: "The 1:1 meeting starts with:", o: ["Complaints about performance", "WINS — what went well this week", "Salary discussion", "Attendance review"], c: 1 },
    { q: "PIP is used when:", o: ["Someone is doing great work", "Underperformance persists for 30+ days despite feedback", "A new hire joins", "Annual reviews happen"], c: 1 },
    { q: "PIP timeline is usually:", o: ["1 week", "2 weeks", "30-60 days", "6 months"], c: 2 },
    { q: "Performance review rating scale goes:", o: ["1-3", "1-5 (Below Expectations to Outstanding)", "1-10", "Pass/Fail only"], c: 1 },
    { q: "The difficult conversation script starts with:", o: ["Threats of termination", "Stating specific behavior observed", "Asking about personal life", "Discussing salary cuts"], c: 1 },
    { q: "After a difficult conversation, the manager should:", o: ["Forget about it", "Send a summary email documenting what was agreed", "Gossip about it", "File for termination"], c: 1 },
    { q: "The DEVELOPMENT portion of 1:1 asks about:", o: ["Complaints about coworkers", "Skills they want to develop and training needed", "Personal relationship issues", "Their next job plans"], c: 1 },
    { q: "Performance reviews should be based on:", o: ["Gut feeling only", "Ongoing documented feedback, not surprises", "One bad day observation", "Personal relationship with manager"], c: 1 },
    { q: "The SUPPORT question in 1:1 reveals:", o: ["Nothing useful", "What the employee needs to be more effective", "Salary expectations", "Who they don't like"], c: 1 }
];

const task11Quiz = [
    { q: "Under the POSH Act 2013, ICC is required for organizations with:", o: ["5+ employees", "10+ employees", "50+ employees", "100+ employees"], c: 1 },
    { q: "ICC must have at minimum what percentage of women members?", o: ["25%", "33%", "50%", "75%"], c: 2 },
    { q: "POSH inquiry must be completed within:", o: ["30 days", "60 days", "90 days", "180 days"], c: 2 },
    { q: "The Presiding Officer of ICC must be a:", o: ["Male manager", "Senior woman employee", "External lawyer only", "CEO or founder"], c: 1 },
    { q: "Leave policy for maternity is:", o: ["30 days", "90 days (13 weeks)", "182 days (26 weeks)", "365 days"], c: 2 },
    { q: "Casual leave can be carried forward:", o: ["Yes, unlimited", "Yes, up to 30 days", "No, it cannot be carried forward", "Only if manager approves"], c: 2 },
    { q: "Earned leave carry forward maximum is:", o: ["10 days", "15 days", "30 days", "Unlimited"], c: 2 },
    { q: "Policy review frequency should be:", o: ["Monthly", "Quarterly", "Annually", "Never — once created is enough"], c: 2 },
    { q: "Data Protection policy covers:", o: ["Only employee data", "Client and company data security", "Only financial data", "Public information only"], c: 1 },
    { q: "HR's role in POSH compliance includes:", o: ["Only displaying the policy poster", "Ensuring ICC constitution, annual training, confidentiality, and timely inquiry", "Ignoring complaints", "Delegating everything to external lawyers"], c: 1 }
];

const task12Quiz = [
    { q: "The PEACE conflict resolution framework starts with:", o: ["Execute a solution", "Prepare — gather facts and understand perspectives", "Acknowledge feelings", "Collaborate on solutions"], c: 1 },
    { q: "In mediation, the opening ground rules include:", o: ["Yell louder to win", "One person speaks at a time, focus on behaviors not attacks", "Take sides immediately", "Skip to the solution"], c: 1 },
    { q: "When an interpersonal clash is detected, the first step is:", o: ["Fire both employees", "Mediation session focusing on behaviors, not personalities", "Ignore and hope it resolves", "Public announcement"], c: 1 },
    { q: "Manager-employee tension signs include:", o: ["Increased productivity", "Skip-level complaints and disengagement", "More collaboration", "Positive team dynamics"], c: 1 },
    { q: "Salary/promotion disputes should be resolved with:", o: ["Ignoring the concerns", "Transparent review of criteria and career path discussion", "Immediate promotion", "Transferring the employee"], c: 1 },
    { q: "Employee engagement initiatives include:", o: ["Only annual parties", "Monthly events, recognition, feedback channels, and wellness", "Nothing — employees should self-motivate", "Only salary increases"], c: 1 },
    { q: "The 'C' in PEACE stands for:", o: ["Complain", "Collaborate — work together for solutions", "Criticize", "Cancel"], c: 1 },
    { q: "Anonymous feedback channels serve to:", o: ["Create gossip", "Provide safe space for honest input", "Waste management time", "Identify troublemakers"], c: 1 },
    { q: "Finding common ground in mediation means:", o: ["Declaring a winner", "Identifying shared goals both parties want", "Forcing agreement", "Avoiding the real issue"], c: 1 },
    { q: "Follow-up after conflict resolution should happen:", o: ["Never", "In one week to check if resolution holds", "After one year", "Only if someone complains again"], c: 1 }
];

const task13Quiz = [
    { q: "Voluntary resignation requires:", o: ["No notice", "Written resignation with notice period as per contract", "Verbal resignation only", "Board approval"], c: 1 },
    { q: "System access must be revoked:", o: ["Eventually, when convenient", "On the last working day", "One month after departure", "Only if fired"], c: 1 },
    { q: "Exit interview primary purpose is:", o: ["Making them regret leaving", "Gathering insights to improve retention", "Legal formality only", "Arguing about their decision"], c: 1 },
    { q: "Full & Final settlement includes:", o: ["Only pending salary", "Salary, leave encashment, bonus, gratuity, minus deductions", "Nothing — they forfeit", "Only experience letter"], c: 1 },
    { q: "Gratuity is applicable after:", o: ["1 year", "3 years", "5 years of service", "10 years"], c: 2 },
    { q: "Knowledge transfer during notice period ensures:", o: ["More work for leaving employee", "Ongoing projects and contacts aren't lost", "Punishment for resigning", "Nothing useful"], c: 1 },
    { q: "Relieving letter should be issued:", o: ["Never", "On the last working day", "After 6 months", "Only if requested"], c: 1 },
    { q: "If multiple exit interviews cite the same issues, HR should:", o: ["Ignore the pattern", "Escalate to leadership for systemic fix", "Hide the data", "Blame the departing employees"], c: 1 },
    { q: "Termination for cause requires:", o: ["No documentation", "Documentation, warning, and termination letter", "Just a phone call", "Social media announcement"], c: 1 },
    { q: "The offboarding checklist has phases for:", o: ["Only the last day", "Day of resignation, during notice, and last working day", "Only paperwork", "Monthly reviews"], c: 1 }
];

const task14Quiz = [
    { q: "Time to Fill metric target is:", o: ["<15 days", "<30 days", "<60 days", "<90 days"], c: 1 },
    { q: "Offer Acceptance Rate target is:", o: [">50%", ">60%", ">70%", ">80%"], c: 3 },
    { q: "90-Day Retention target is:", o: [">60%", ">70%", ">80%", ">85%"], c: 3 },
    { q: "Employee Turnover target is:", o: ["<5% annually", "<10% annually", "<15% annually", "<25% annually"], c: 2 },
    { q: "Employee Satisfaction survey target score is:", o: [">5.0", ">6.0", ">7.5", ">9.0"], c: 2 },
    { q: "HR certification at Digital Heroes requires:", o: ["Just watching videos", "Quiz score, role play, practical JD, and scenario handling", "Only attending meetings", "Filling out forms"], c: 1 },
    { q: "After certification, the first real task is:", o: ["Full independent recruitment", "Shadow senior HR for 2 weeks on live recruitment", "Client-facing immediately", "Managing the team"], c: 1 },
    { q: "How many end-to-end recruitment cycles with guidance?", o: ["1 cycle", "3 cycles", "5 cycles", "10 cycles"], c: 2 },
    { q: "The practical certification requirement includes:", o: ["Multiple choice test only", "Creating a JD for a given role", "Writing a report", "Nothing practical"], c: 1 },
    { q: "POSH certification after HR training is:", o: ["Optional", "Required — complete online", "Not mentioned", "Only for senior HR"], c: 1 },
    { q: "Conflict resolution scenario in certification tests:", o: ["Theoretical knowledge only", "Practical handling of a real conflict case", "Multiple choice about theory", "Nothing about conflicts"], c: 1 },
    { q: "After certification, you conduct your first solo:", o: ["Hiring decision", "Exit interview", "Board presentation", "Client call"], c: 1 },
    { q: "The role play component tests:", o: ["Acting skills", "Phone screening call ability", "Singing talent", "Typing speed"], c: 1 },
    { q: "Time to Fill is calculated from:", o: ["Interview to offer", "JD posting to offer accepted", "Offer to start date", "Resignation to replacement"], c: 1 },
    { q: "Employee Turnover formula is:", o: ["New hires ÷ total employees", "Departures ÷ average headcount × 100", "Promotions ÷ total staff", "Offers ÷ applications"], c: 1 },
    { q: "What metric measures new hire quality?", o: ["Time to Fill", "Offer Acceptance Rate", "90-Day Retention Rate", "Employee Satisfaction"], c: 2 },
    { q: "The quiz for final certification has:", o: ["10 questions", "20 questions", "50 questions", "100 questions"], c: 2 },
    { q: "Continuous learning after certification is:", o: ["Completely unnecessary", "Expected throughout career", "Only for management", "Discouraged"], c: 1 },
    { q: "The video walkthrough requirement is:", o: ["10 minutes", "20 minutes", "30 minutes", "60 minutes"], c: 2 },
    { q: "HR Executive at Digital Heroes is the:", o: ["Admin support role", "Talent Engine that powers every function", "Least important role", "Only recruiter"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz, task11Quiz, task12Quiz, task13Quiz, task14Quiz];

// Make task content available globally for openTask() function
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

