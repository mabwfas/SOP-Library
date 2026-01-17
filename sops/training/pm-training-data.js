// Project Manager Training - COMPREHENSIVE EXPANDED VERSION
// Based on Digital Heroes PM Mega-Prompt Framework

const trainingTasks = [
    { id: 1, title: "PM Mindset & Philosophy", description: "Ownership, accountability, elite habits", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎯 The bridge between client & team", "📖 Read pm-sop.html completely"] },
    { id: 2, title: "Client Communication Mastery", description: "8 Non-Negotiable Rules", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "💬 Response standards", "📖 Master all templates"] },
    { id: 3, title: "Project Lifecycle", description: "14-Day Timeline Deep Dive", contentFirst: true, studyGuide: ["⏱️ Time: 75 min", "📋 Phase-by-phase breakdown", "📖 Study milestones"] },
    { id: 4, title: "Team Coordination", description: "Leadership & Delegation", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "👥 Work with devs & designers", "📖 Shield mentality"] },
    { id: 5, title: "Scope Management", description: "Change Control Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Scope creep prevention", "📖 Change request flowchart"] },
    { id: 6, title: "Quality Assurance", description: "60-Point QA Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "✅ Complete QA checklist", "📖 Delivery standards"] },
    { id: 7, title: "Tools & Systems", description: "PM Software Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🖥️ Essential tools", "📖 Automation workflows"] },
    { id: 8, title: "Difficult Situations", description: "15 Crisis Scenarios", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🔥 De-escalation scripts", "📖 Crisis management"] },
    { id: 9, title: "Metrics & Performance", description: "KPIs & Self-Assessment", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📊 Track what matters", "📖 Weekly reviews"] },
    { id: 10, title: "Final Certification", description: "Comprehensive PM Exam", contentFirst: false, studyGuide: ["⏱️ Time: 90 min", "📝 30 Questions + Video", "🎓 Pass to certify"] }
];

// TASK 1: PM MINDSET & PHILOSOPHY
const task1Content = `
<h2>📚 TASK 1: PM MINDSET & PHILOSOPHY</h2>

<div class="content-section">
<h3>🎯 Why This Role Matters</h3>
<p>At Digital Heroes, the Project Manager is the <strong>bridge between client expectations and team capabilities</strong>. You are not a task tracker — you are the <strong>owner of project success</strong>.</p>

<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong>⚠️ The ₹15 Lakh Disaster Story:</strong><br><br>
A PM once assumed the developer understood the requirements. No documentation. No check-ins. 3 weeks later: wrong product built. Client demanded refund. We lost ₹15 lakhs in revenue AND our reputation with that client forever.<br><br>
<strong>The lesson:</strong> Assumptions kill projects. Communication saves them.
</div>
</div>

<div class="content-section">
<h3>🧠 The PM Ownership Principle</h3>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981; text-align: center; padding: 25px;">
<h4 style="margin-top: 0; color: #10B981; font-size: 1.3em;">If the project succeeds → You enabled it<br>If the project fails → You failed to prevent it</h4>
<p style="margin-bottom: 0;">No excuses. No blame. Only solutions.</p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<th style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">❌ Amateur PM Says</th>
<th style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">✅ Professional PM Says</th>
</tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The developer was late"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I didn't catch the delay early enough"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Client keeps changing things"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to set clearer scope boundaries"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm waiting for an answer"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'll follow up until I get one"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That's not my job"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"If it affects my project, it's my responsibility"</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"They should have known"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I should have communicated clearer"</td></tr>
</table>
</div>

<div class="content-section">
<h3>💡 The 5 Core PM Principles</h3>

<div style="display: grid; gap: 15px; margin: 20px 0;">
<div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
<h4 style="color: #6366F1; margin-top: 0;">1. PLAN TWICE, EXECUTE ONCE</h4>
<p>Every hour spent planning saves 10 hours in chaos. Never start a project without clear scope, timeline, and success criteria documented and approved.</p>
</div>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
<h4 style="color: #10B981; margin-top: 0;">2. OVER-COMMUNICATE, NEVER UNDER</h4>
<p>Clients don't complain about too many updates. They complain about surprises. A weekly update takes 10 minutes. Fixing a surprised angry client takes 10 hours.</p>
</div>

<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">3. PROBLEMS EARLY, SOLUTIONS ATTACHED</h4>
<p>When you find an issue, immediately: (1) Identify the problem, (2) Assess impact, (3) Propose 2-3 solutions, (4) Recommend one. Never bring problems without solutions.</p>
</div>

<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
<h4 style="color: #EF4444; margin-top: 0;">4. PROTECT THE TEAM, SHIELD THE NOISE</h4>
<p>Your developers and designers need focus time. YOU absorb client pressure, unclear requirements, and scope discussions. They code. You coordinate.</p>
</div>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #8B5CF6;">
<h4 style="color: #8B5CF6; margin-top: 0;">5. DOCUMENT EVERYTHING</h4>
<p>If it's not written, it didn't happen. Every decision, change, approval — documented. This protects you, the team, and the company.</p>
</div>
</div>
</div>

<div class="content-section">
<h3>📊 The Project Success Triangle</h3>
<div class="highlight-box">
<p><strong>Every project has three constraints:</strong></p>
<ul>
<li><strong>SCOPE:</strong> What gets delivered (features, pages, functionality)</li>
<li><strong>TIME:</strong> When it's delivered (deadline, milestones)</li>
<li><strong>COST:</strong> Resource investment (team hours, budget)</li>
</ul>
<p><strong>The Iron Rule:</strong> You can optimize 2, never all 3.</p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">If Client Wants</th><th style="padding: 12px;">The Trade-off</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fast + Cheap</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">= Low Quality (reduced scope)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fast + High Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">= Expensive (rush fees, more resources)</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cheap + High Quality</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">= Slow (extended timeline)</td></tr>
</table>
</div>

<div class="content-section">
<h3>🌅 Daily Habits of Elite PMs</h3>
<div class="highlight-box">
<strong>Morning Routine (First 30 minutes):</strong>
<ol>
<li>Check all project channels for overnight messages</li>
<li>Review today's deadlines and milestones</li>
<li>Identify top 3 priorities for the day</li>
<li>Send proactive updates on any at-risk items</li>
<li>Clear any blockers for your team</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 15px;">
<strong>End of Day Routine (Last 15 minutes):</strong>
<ol>
<li>Update project tracking with today's progress</li>
<li>Flag any items that need tomorrow's attention</li>
<li>Respond to all pending client messages</li>
<li>Prepare tomorrow's standup notes</li>
<li>Document any decisions made today</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for Quiz?</h3>
<p>You've learned the PM mindset. Now prove you understand ownership, the 5 principles, and what separates amateur from professional PMs.</p>
</div>
`;

// TASK 2: CLIENT COMMUNICATION MASTERY
const task2Content = `
<h2>📚 TASK 2: CLIENT COMMUNICATION MASTERY</h2>

<div class="content-section">
<h3>📜 The 8 Non-Negotiable Communication Rules</h3>

<div style="background: rgba(239, 68, 68, 0.15); padding: 20px; border-radius: 12px; margin: 20px 0;">
<strong style="color: #EF4444;">⚠️ CRITICAL:</strong> Breaking ANY of these rules can cost us our 4.9★ rating and client relationships worth lakhs.
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px; width: 50px;">#</th><th style="padding: 12px;">Rule</th><th style="padding: 12px;">Standard</th></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Response Time</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2 hours during work hours, < 12 hours outside</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>2</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Weekly Updates</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Every Friday minimum (more for active projects)</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>3</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Bad News Early</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 24 hours of discovering issue</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>4</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Professional Tone</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Warm but professional, never defensive</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>5</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Clear Next Steps</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Every message ends with clear action item</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>6</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Proactive Updates</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Don't wait for client to ask status</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>7</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Document Everything</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All decisions in writing, confirmed by client</td></tr>
<tr><td style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);"><strong>8</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Set Expectations</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Under-promise, over-deliver always</td></tr>
</table>
</div>

<div class="content-section">
<h3>📧 Weekly Status Update Template</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Subject: [Project Name] Weekly Update - Week X</strong><br><br>

Hi [Client Name]! 👋<br><br>

<strong>✅ COMPLETED THIS WEEK:</strong><br>
• Homepage design finalized<br>
• Product page template built<br>
• Navigation menu implemented<br><br>

<strong>🔄 IN PROGRESS:</strong><br>
• Collection page development (70% done)<br>
• Speed optimization started<br><br>

<strong>⚡ NEEDS YOUR INPUT:</strong><br>
• Please review the product page: [link]<br>
• Awaiting final logo files<br><br>

<strong>📅 NEXT WEEK PLAN:</strong><br>
• Complete collection page<br>
• Begin checkout customization<br>
• Internal QA round 1<br><br>

<strong>📊 TIMELINE STATUS:</strong> ✅ On Track<br><br>

Let me know if you have any questions!<br>
[Your Name]
</div>
</div>

<div class="content-section">
<h3>🔥 Delivering Bad News Framework</h3>
<div class="warning-box">
<strong>The SPEAR Method:</strong>
<ol>
<li><strong>S</strong>ituation: State the issue clearly</li>
<li><strong>P</strong>roblem: Explain the impact</li>
<li><strong>E</strong>xplanation: Why it happened (no excuses)</li>
<li><strong>A</strong>ction: What we're doing to fix it</li>
<li><strong>R</strong>esolution: Expected outcome and timeline</li>
</ol>
</div>

<div class="highlight-box" style="margin-top: 15px; background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Example - Delay Notification:</strong><br><br>

Hi [Client],<br><br>

I need to update you on our timeline.<br><br>

<strong>Situation:</strong> We've discovered a compatibility issue between your required app and the theme.<br><br>

<strong>Impact:</strong> This will add approximately 2 days to our delivery timeline.<br><br>

<strong>What happened:</strong> The app's latest update changed how it integrates with themes. This wasn't apparent until we began testing.<br><br>

<strong>Our solution:</strong> Our senior developer is already working on a custom integration. We've also contacted the app developer for guidance.<br><br>

<strong>New timeline:</strong> Original delivery was Friday. New delivery will be Tuesday, giving us buffer for thorough testing.<br><br>

I sincerely apologize for this delay. We're prioritizing this to minimize any inconvenience.<br><br>

Questions? I'm here.<br>
[Your Name]
</div>
</div>

<div class="content-section">
<h3>😤 Handling Difficult Client Types</h3>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Client Type</th><th style="padding: 12px;">Signs</th><th style="padding: 12px;">Strategy</th></tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Micromanager</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily check-ins, wants to see every step</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proactive daily updates. Over-communicate. Make them feel in control.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Ghost</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disappears for days, slow approvals</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set clear deadlines. "If no response by X, we'll proceed with Y."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Scope Creeper</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just one more thing" constantly</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Document original scope. Use change request process. Quote additions.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Angry Client</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Frustrated, uses strong language</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stay calm. Acknowledge feelings. Focus on solutions. Never defensive.</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for Quiz?</h3>
<p>Master these templates and rules. They're your shield against client issues.</p>
</div>
`;

// TASK 3: PROJECT LIFECYCLE
const task3Content = `
<h2>📚 TASK 3: PROJECT LIFECYCLE - 14-DAY TIMELINE</h2>

<div class="content-section">
<h3>📅 The Complete 14-Day Shopify Project Timeline</h3>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; margin: 20px 0;">
<strong>Standard Premium Package Delivery: 14 Days</strong><br>
This timeline applies to most $1,200-$1,800 projects. Complex projects may need 21-28 days.
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Day</th><th style="padding: 12px;">Phase</th><th style="padding: 12px;">PM Tasks</th><th style="padding: 12px;">Deliverable</th></tr>
<tr style="background: rgba(16, 185, 129, 0.1);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Kickoff</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Handoff meeting, collect assets, set expectations</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project brief document</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>2-3</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Coordinate with designer, review mockups</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Homepage mockup for review</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design Review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Present to client, collect feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Approved design direction</td></tr>
<tr style="background: rgba(245, 158, 11, 0.1);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>5-8</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Development</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily dev check-ins, unblock issues</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functional store on dev</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>9-10</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content & Polish</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content upload, speed optimization</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content-complete store</td></tr>
<tr style="background: rgba(139, 92, 246, 0.1);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>11</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Internal QA</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full QA checklist, bug fixing</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">QA-passed store</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>12</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Review</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Walkthrough with client, collect feedback</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision list</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>13</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revisions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Implement feedback, final polish</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision-complete store</td></tr>
<tr style="background: rgba(16, 185, 129, 0.2);"><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>14</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Final delivery, handover, support kickoff</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Live store + docs</td></tr>
</table>
</div>

<div class="content-section">
<h3>⏰ Buffer Management</h3>
<div class="highlight-box">
<strong>The 20-30% Rule:</strong><br>
Always build 20-30% buffer into your timelines. If development estimate is 5 days, plan for 6-7.
<br><br>
<strong>Why?</strong> Bugs, client delays, unclear requirements, sick days, app conflicts — reality is never perfect.
</div>
</div>

<div class="content-section">
<h3>📋 Project Kickoff Checklist</h3>
<ul>
<li>☐ Scope document reviewed and confirmed</li>
<li>☐ Client contact info and timezone noted</li>
<li>☐ All assets received (logo, images, content)</li>
<li>☐ Shopify access granted</li>
<li>☐ Team members assigned and briefed</li>
<li>☐ Communication cadence agreed</li>
<li>☐ First milestone date confirmed</li>
<li>☐ Risk assessment completed</li>
<li>☐ Internal project board created</li>
<li>☐ Kickoff message sent to client</li>
</ul>
</div>
`;

// Continuing with remaining tasks...
const task4Content = `
<h2>📚 TASK 4: TEAM COORDINATION & LEADERSHIP</h2>

<div class="content-section">
<h3>👥 Working with Developers</h3>
<div class="highlight-box">
<strong>What Developers Need From You:</strong>
<ul>
<li>Clear, written requirements (not verbal)</li>
<li>All assets and access before they start</li>
<li>Protection from direct client contact during work</li>
<li>Quick unblocking when they're stuck</li>
<li>Reasonable deadlines with buffer</li>
<li>Context on WHY, not just WHAT</li>
</ul>
</div>

<div class="warning-box" style="margin-top: 15px;">
<strong>⚠️ Never Do This:</strong>
<ul>
<li>Give verbal instructions for complex work</li>
<li>Pass client messages directly without filtering</li>
<li>Promise client deadlines without checking with dev</li>
<li>Interrupt deep work for non-urgent questions</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎨 Working with Designers</h3>
<div class="highlight-box">
<strong>What Designers Need From You:</strong>
<ul>
<li>Brand guidelines and references</li>
<li>Clear design briefs with goals</li>
<li>Consolidated feedback (not scattered messages)</li>
<li>Protection from "can you just try this" requests</li>
<li>Reasonable revision rounds</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🛡️ The Shield Mentality</h3>
<div style="background: rgba(16, 185, 129, 0.2); padding: 25px; border-radius: 12px; text-align: center;">
<h4 style="color: #10B981; margin-top: 0;">YOU absorb the pressure so the team can focus.</h4>
<p>When clients are anxious, demanding, or unclear — you translate that into calm, clear direction for your team.</p>
</div>
</div>

<div class="content-section">
<h3>📋 Daily Standup Format</h3>
<div class="highlight-box">
<strong>15 Minutes Max. Standing Up. No Rabbit Holes.</strong>
<br><br>
Each team member answers:
<ol>
<li><strong>What I completed:</strong> Yesterday's work</li>
<li><strong>What I'm doing:</strong> Today's focus</li>
<li><strong>Any blockers:</strong> What's stopping me</li>
</ol>
<br>
<strong>Your job:</strong> Listen for blockers, assign action items, follow up after standup.
</div>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: SCOPE MANAGEMENT & CHANGE CONTROL</h2>

<div class="content-section">
<h3>🎯 What is Scope and Why It Matters</h3>
<p>Scope defines <strong>exactly what is included</strong> in the project price. Everything outside scope = additional work = additional cost.</p>

<div class="warning-box">
<strong>The Cost of Scope Creep:</strong><br>
A $1,500 project can become a $3,000 project (at our cost) if scope isn't managed. That's -$1,500 from company profit. Scale that to 10 projects = -₹12 lakhs per year in lost revenue.
</div>
</div>

<div class="content-section">
<h3>📋 The Scope Change Flowchart</h3>
<div class="highlight-box">
<strong>When client requests something new:</strong>
<ol>
<li>Is it in the original scope document? → If YES: Do it</li>
<li>If NO: Is it a small goodwill item (< 15 min work)? → If YES: Do it + document</li>
<li>If NO: Create change request with estimate</li>
<li>Present options: Add now (cost X), Add later, Skip</li>
<li>Get WRITTEN approval before any work</li>
<li>Update scope document</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💬 Scripts for Scope Discussions</h3>

<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
<strong>Script: Polite Scope Boundary</strong><br><br>
"Great idea! That feature wasn't part of our original scope, but I'd love to see it in your store too.
<br><br>
I can get you a quick quote for adding this — would you like me to prepare that? Alternatively, we could add it in a Phase 2 after launch."
</div>

<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em; margin-top: 15px;">
<strong>Script: When Client Pushes Back</strong><br><br>
"I completely understand. To keep our delivery on schedule and within budget, I need to clarify what's included.
<br><br>
Our original agreement covered [X, Y, Z]. This request is additional work. Happy to discuss options — we could swap another feature for this one, or add it separately."
</div>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: QUALITY ASSURANCE & DELIVERY</h2>

<div class="content-section">
<h3>✅ Complete 60-Point QA Checklist (Key Items)</h3>

<h4>🎨 Design QA</h4>
<ul>
<li>☐ Matches approved mockups</li>
<li>☐ Brand colors consistent throughout</li>
<li>☐ Typography matches spec</li>
<li>☐ Images high quality, properly sized</li>
<li>☐ Spacing and alignment consistent</li>
<li>☐ Hover states work correctly</li>
</ul>

<h4>📱 Mobile Responsiveness</h4>
<ul>
<li>☐ All pages tested on mobile</li>
<li>☐ Touch targets large enough (44px+)</li>
<li>☐ Text readable without zooming</li>
<li>☐ No horizontal scrolling</li>
<li>☐ Forms usable on mobile</li>
</ul>

<h4>⚡ Performance</h4>
<ul>
<li>☐ Mobile PageSpeed 85+</li>
<li>☐ Desktop PageSpeed 90+</li>
<li>☐ Images lazy loading</li>
<li>☐ No console errors</li>
</ul>

<h4>🛒 E-commerce Functions</h4>
<ul>
<li>☐ Add to cart works</li>
<li>☐ Cart update and remove work</li>
<li>☐ Checkout flow complete</li>
<li>☐ Test order placed successfully</li>
<li>☐ Order confirmation received</li>
</ul>

<h4>📄 Content & SEO</h4>
<ul>
<li>☐ All content proofread</li>
<li>☐ Meta titles on all pages</li>
<li>☐ Meta descriptions on all pages</li>
<li>☐ Alt text on images</li>
<li>☐ 404 page working</li>
</ul>
</div>

<div class="content-section">
<h3>📦 Perfect Delivery Message</h3>
<div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); font-family: monospace; font-size: 0.9em;">
Hi [Client]! 🎉<br><br>

<strong>Your store is ready for launch!</strong><br><br>

I'm thrilled to share the final result: [Preview Link]<br><br>

<strong>WHAT'S INCLUDED:</strong><br>
✅ 5 custom pages designed and developed<br>
✅ 25 products uploaded and organized<br>
✅ Mobile-responsive throughout<br>
✅ Speed optimized (Mobile: 87, Desktop: 94)<br>
✅ Checkout tested and working<br><br>

<strong>WALKTHROUGH VIDEO:</strong><br>
[Loom link] - 10 min tour of your store + how to manage it<br><br>

<strong>DOCUMENTATION:</strong><br>
[Google Doc link] - How to edit content, add products, etc.<br><br>

<strong>NEXT STEPS:</strong><br>
1. Review your store thoroughly<br>
2. Let me know any final tweaks needed<br>
3. Once approved, we'll connect your domain and launch!<br><br>

<strong>SUPPORT:</strong><br>
You have 30 days of support starting today. Just message here for any questions!<br><br>

Excited to see this go live! 🚀<br>
[Your Name]
</div>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>🖥️ Essential PM Tools</h3>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Category</th><th style="padding: 12px;">Tool</th><th style="padding: 12px;">Purpose</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Tracking</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trello / Asana / Monday</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task management, Kanban boards</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Team Comms</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slack / Discord</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Internal communication</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Comms</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fiverr / Email</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client messaging</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Video Calls</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Meet / Zoom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client calls, demos</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Documentation</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Docs / Notion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Specs, notes, handover</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Screen Recording</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loom</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Walkthroughs, bug reports</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Time Tracking</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Toggl / Clockify</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project hours tracking</td></tr>
</table>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: DIFFICULT SITUATIONS & CRISIS MANAGEMENT</h2>

<div class="content-section">
<h3>🔥 15 PM Crisis Scenarios</h3>

<div style="margin: 20px 0;">
<div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #EF4444;">Scenario 1: Client Hates the Design</h4>
<p><strong>Situation:</strong> Client says "This isn't what I wanted at all."</p>
<p><strong>Response:</strong></p>
<ul>
<li>Don't get defensive</li>
<li>Ask specific questions: "What specifically isn't working for you?"</li>
<li>Reference original brief: "Let me pull up our original discussion..."</li>
<li>Propose next steps: "Let's schedule a call to align on your vision"</li>
</ul>
</div>

<div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #F59E0B;">Scenario 2: Project is Running Late</h4>
<p><strong>Situation:</strong> You realize you'll miss the deadline.</p>
<p><strong>Response:</strong></p>
<ul>
<li>Notify client IMMEDIATELY (not the day before)</li>
<li>Explain why without making excuses</li>
<li>Provide new realistic timeline</li>
<li>Offer something: "I'll add an extra revision round / 7 more days support"</li>
</ul>
</div>

<div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #10B981;">Scenario 3: Developer Made Mistake on Live Site</h4>
<p><strong>Situation:</strong> A bug was pushed to production and client sees it.</p>
<p><strong>Response:</strong></p>
<ul>
<li>Acknowledge immediately: "I see the issue. We're on it right now."</li>
<li>Assign urgent fix to developer</li>
<li>Provide timeline: "This will be fixed within 2 hours"</li>
<li>Follow up when fixed: "All resolved. Here's what happened and how we're preventing it."</li>
</ul>
</div>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #8B5CF6;">Scenario 4: Client Wants Refund</h4>
<p><strong>Situation:</strong> Client demands their money back.</p>
<p><strong>Response:</strong></p>
<ul>
<li>Stay calm. Don't agree or deny immediately.</li>
<li>Understand the issue: "I want to understand what went wrong. Can you share specifics?"</li>
<li>Escalate to management for decision</li>
<li>Document everything</li>
</ul>
</div>

<div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
<h4 style="color: #6366F1;">Scenario 5: Client Threatens Bad Review</h4>
<p><strong>Situation:</strong> "I'll leave a 1-star review if you don't..."</p>
<p><strong>Response:</strong></p>
<ul>
<li>Don't panic or cave to unreasonable demands</li>
<li>Focus on resolution: "Let's solve the actual issue. What would make this right?"</li>
<li>Document the threat</li>
<li>Escalate to senior management</li>
</ul>
</div>
</div>
</div>

<div class="content-section">
<h3>🧘 De-escalation Techniques</h3>
<div class="highlight-box">
<ol>
<li><strong>Acknowledge feelings:</strong> "I understand this is frustrating."</li>
<li><strong>Take ownership:</strong> "This is on us, and we'll make it right."</li>
<li><strong>Stay calm:</strong> Never match their energy if they're upset.</li>
<li><strong>Focus on solutions:</strong> "Here's what we can do..."</li>
<li><strong>Set clear next steps:</strong> "By tomorrow 5PM, you'll have..."</li>
</ol>
</div>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: METRICS & PERFORMANCE</h2>

<div class="content-section">
<h3>📊 KPIs Every PM Should Track</h3>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);"><th style="padding: 12px;">Metric</th><th style="padding: 12px;">Target</th><th style="padding: 12px;">Why It Matters</th></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>On-Time Delivery Rate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">90%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client satisfaction, reputation</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Satisfaction (Rating)</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4.8+ / 5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Repeat business, reviews</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Response Time</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2 hours</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client trust</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Revision Rounds</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Project efficiency</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>First-Time Approval Rate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quality of work</td></tr>
<tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Scope Change Frequency</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2 per project</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope management</td></tr>
</table>
</div>

<div class="content-section">
<h3>📈 Weekly Self-Assessment</h3>
<div class="highlight-box">
<strong>Every Friday, ask yourself:</strong>
<ol>
<li>Did all my projects get weekly updates?</li>
<li>Were there any client complaints? What can I learn?</li>
<li>Did I unblock my team quickly?</li>
<li>Am I ahead of schedule or behind?</li>
<li>What one thing can I improve next week?</li>
</ol>
</div>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FINAL PM CERTIFICATION</h2>

<div class="content-section">
<h3>🎓 Certification Requirements</h3>
<div class="highlight-box">
<strong>To become a Certified Digital Heroes PM:</strong>
<ol>
<li>✅ Complete all 9 training modules (10/10 each quiz)</li>
<li>✅ Score 28/30 on final comprehensive exam</li>
<li>✅ Create sample project plan document</li>
<li>✅ Pass scenario-based live assessment</li>
<li>✅ Shadow a senior PM for 1 week</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>📋 Final Exam Covers</h3>
<ul>
<li>PM mindset and ownership principles</li>
<li>Client communication standards and templates</li>
<li>Project lifecycle and timeline management</li>
<li>Team coordination and leadership</li>
<li>Scope management and change control</li>
<li>QA processes and delivery standards</li>
<li>Tools and systems proficiency</li>
<li>Crisis management and de-escalation</li>
<li>Metrics and performance tracking</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 You're Ready!</h3>
<p>You've learned everything needed to be an exceptional PM at Digital Heroes. Now prove it.</p>
<div style="background: rgba(16, 185, 129, 0.2); padding: 25px; border-radius: 12px; text-align: center;">
<h4 style="color: #10B981; margin-top: 0;">Complete the Final Quiz to Earn Your PM Certification 🎓</h4>
</div>
</div>
`;

// QUIZ: 30 Comprehensive Questions
const quizQuestions = [
    // PM Mindset (6 questions)
    { question: "PM core responsibility is:", options: ["Track tasks only", "Ownership of project success", "Blame team for failures", "Just coordinate meetings"], correct: 1 },
    { question: "'Plan twice, execute once' means:", options: ["Skip planning", "Plan thoroughly before work", "Plan during development", "No planning needed"], correct: 1 },
    { question: "When developer is late, professional PM says:", options: ["Developer's fault", "Not my problem", "I didn't catch delay early", "Ignore it"], correct: 2 },
    { question: "The Project Triangle constraints are:", options: ["Speed, Quality, Price", "Scope, Time, Cost", "Team, Tools, Tech", "Design, Dev, Deploy"], correct: 1 },
    { question: "How many triangle constraints can you optimize?", options: ["All 3", "2 out of 3", "Only 1", "None"], correct: 1 },
    { question: "Fast + Cheap equals:", options: ["High Quality", "Low Quality", "Perfect", "Impossible"], correct: 1 },

    // Communication (6 questions)
    { question: "Client response time standard:", options: ["24 hours", "< 2 hours work hours", "1 week", "When convenient"], correct: 1 },
    { question: "Weekly updates should include:", options: ["Just completed work", "Progress + blockers + next steps", "Only timeline", "Nothing"], correct: 1 },
    { question: "When delivering bad news:", options: ["Hide it", "Wait until last minute", "Tell client immediately with solution", "Blame team"], correct: 2 },
    { question: "For micromanager client:", options: ["Ignore them", "Over-communicate proactively", "Reduce updates", "Avoid them"], correct: 1 },
    { question: "Every message should end with:", options: ["Emoji only", "Clear next action item", "Question", "Nothing"], correct: 1 },
    { question: "SPEAR method is for:", options: ["Budget planning", "Delivering bad news", "Design feedback", "Hiring"], correct: 1 },

    // Lifecycle & Timeline (5 questions)
    { question: "Standard project delivery time:", options: ["1 day", "7 days", "14 days", "30 days"], correct: 2 },
    { question: "Buffer rule for complex tasks:", options: ["+10%", "+30%", "+100% (2x)", "+200%"], correct: 2 },
    { question: "Internal QA happens on day:", options: ["1", "5", "11", "14"], correct: 2 },
    { question: "Project kickoff must include:", options: ["Just start coding", "Scope document signed off", "Nothing documented", "Verbal agreement only"], correct: 1 },
    { question: "Buffer management rule:", options: ["No buffer needed", "20-30% buffer always", "50% buffer", "100% buffer"], correct: 1 },

    // Team & Scope (5 questions)
    { question: "Shield mentality means:", options: ["Hide from clients", "PM absorbs pressure for team", "Team handles everything", "No protection needed"], correct: 1 },
    { question: "Standup duration max:", options: ["30 min", "1 hour", "15 min", "No limit"], correct: 2 },
    { question: "When client requests new feature:", options: ["Do it free", "Document + estimate + get approval", "Refuse", "Ignore"], correct: 1 },
    { question: "Scope creep prevention needs:", options: ["Nothing", "Written change request", "Verbal yes", "Ignore changes"], correct: 1 },
    { question: "Developers need from PM:", options: ["Verbal instructions", "Clear written requirements + assets", "Just deadlines", "Nothing"], correct: 1 },

    // QA & Delivery (4 questions)
    { question: "Mobile PageSpeed target:", options: ["50+", "70+", "85+", "100"], correct: 2 },
    { question: "Before delivery, test order must:", options: ["Skip testing", "Be placed successfully", "Fail on purpose", "Only check design"], correct: 1 },
    { question: "Delivery message must include:", options: ["Just link", "Walkthrough video + docs + next steps", "Nothing extra", "Only invoice"], correct: 1 },
    { question: "Cross-browser testing means:", options: ["Chrome only", "Multiple browsers", "Skip it", "Mobile only"], correct: 1 },

    // Crisis & Metrics (4 questions)
    { question: "When client threatens bad review:", options: ["Panic", "Cave to demands", "Stay calm + focus on resolution + escalate", "Ignore"], correct: 2 },
    { question: "On-time delivery target:", options: ["50%", "70%", "90%+", "100%"], correct: 2 },
    { question: "If bug found on live site:", options: ["Hide it", "Acknowledge + fix immediately + prevent future", "Blame developer", "Wait"], correct: 1 },
    { question: "First-time approval target:", options: ["30%", "50%", "70%+", "100%"], correct: 2 }
];
