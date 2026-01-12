// HR Specialist Training Data
// Complete training content for HR certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "People Mindset",
        description: "Culture & Care",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize that HR is 'Strategic', not just admin",
            "🛡️ Understand we are 'Guardians of Culture'",
            "🚀 Learn the 'Employee First' philosophy"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏛️ Study the Company Culture Pillars",
            "💎 Understand the 'Premium' talent standard",
            "📢 Learn how HR supports the Media & Agency arms"
        ]
    },
    {
        id: 3,
        title: "Recruitment Strategy",
        description: "Hiring the top 1%",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔻 Study the Hiring Pipeline Funnel",
            "🕵️‍♀️ Learn the 'Red Flag' screening method",
            "📝 Understand the 'Ideal Candidate Profile' (ICP)"
        ]
    },
    {
        id: 4,
        title: "Onboarding Mastery",
        description: "Day 1 Success",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🎁 The 'Wow Moment' Welcome Package",
            "🔑 System access & tools setup checklist",
            "📅 The 30-60-90 day plan structure"
        ]
    },
    {
        id: 5,
        title: "Performance Management",
        description: "Growth & Feedback",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🔄 Study the Feedback Loop Cycle",
            "📊 Understanding KPIs vs OKRs",
            "🗣️ How to have difficult conversations"
        ]
    },
    {
        id: 6,
        title: "Compensation & Benefits",
        description: "Rewards & Payroll",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "💰 Understanding salary bands vs benchmarks",
            "🎉 Managing perks (Wellness, Learning Budget)",
            "🗓️ The Payroll timeline"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "HR Tech Stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📂 Notion for Knowledge Base",
            "🗣️ Slack for Internal Comms",
            "📝 DocuSign for Contracts"
        ]
    },
    {
        id: 8,
        title: "Culture Building",
        description: "Remote connection",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🎉 Organizing remote All-Hands",
            "☕ Virtual coffee chats & bonding",
            "🏆 Employee recognition programs"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'Toxic Employee' complaint",
            "📝 Draft a Job Description for a Senior Dev",
            "🤝 Roleplay a resignation retention talk"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive assessment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Review ALL previous modules",
            "🏆 Score 20/20 to pass",
            "🎉 Get ready to build ring teams!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: PEOPLE MINDSET - The Guardian of Culture</h2>

<div class="content-section">
<h3>🎯 Why Are You Here?</h3>
<p>HR is not a support function. At Digital Heroes, HR is a <strong>strategic growth engine</strong>. You are about to learn a role that directly impacts whether this company succeeds or fails.</p>

<div class="warning-box">
<strong>⚠️ The Uncomfortable Truth:</strong><br>
Most companies fail not because of bad products or bad marketing. They fail because of <strong>bad people decisions</strong>. One toxic hire can destroy a team. One poor cultural fit can poison morale. One slow termination can cost you your best performers.
<p style="margin-top: 10px;"><strong>Your job is to prevent all of this.</strong></p>
</div>
</div>

<div class="content-section">
<h3>👤 More Than Just "Paperwork"</h3>
<p>HR at Digital Heroes is a <strong>Growth Engine</strong>.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ What HR is NOT</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ What HR IS at Digital Heroes</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Paper pushers</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Strategic talent architects</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Policy police</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Culture enablers</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Seat fillers</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Championship team builders</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Event planners</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Employee experience owners</td>
</tr>
</table>

<div class="highlight-box">
<strong>🎯 Your Core Identity:</strong>
<ul style="margin-bottom: 0;">
<li><strong>We don't just fill seats:</strong> We find athletes who want to win championships.</li>
<li><strong>We don't just police policies:</strong> We enable people to do their best work.</li>
<li><strong>We are Guardians of Culture:</strong> A toxic high-performer is fired. No exceptions.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>💡 The Employee First Philosophy</h3>
<div class="highlight-box" style="text-align: center; font-size: 1.2em;">
<strong>Happy Team = Happy Clients = Happy Business</strong>
</div>

<p>This is not just a slogan. It's the strategic foundation of everything we do:</p>

<ul>
<li>If an employee is fighting with slow software → <strong>HR has failed</strong></li>
<li>If an employee is confused about their role → <strong>HR has failed</strong></li>
<li>If an employee doesn't know their growth path → <strong>HR has failed</strong></li>
<li>If an employee feels unheard → <strong>HR has failed</strong></li>
</ul>

<div class="warning-box">
<strong>The Friction Principle:</strong><br>
Your job is to <em>remove friction</em>. Every process, every policy, every interaction should make it <strong>easier</strong> for people to do their best work. If it adds friction, it's wrong.
</div>
</div>

<div class="content-section">
<h3>🔥 The Toxic High-Performer Rule</h3>
<p>This is the single most important cultural principle at Digital Heroes:</p>

<div class="warning-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong style="color: #EF4444;">❌ NO TOXIC HIGH-PERFORMERS</strong><br>
A developer who ships 3x the code but makes 5 people want to quit is <strong>net negative</strong>. They must go.
</div>

<p><strong>Why this matters:</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Toxic Star</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>The Impact</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hits 150% of targets</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+50% individual output</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">BUT... 3 people quit because of them</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">-300% team output + hiring costs</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AND... 5 people are demotivated</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">-50% productivity across team</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>NET RESULT</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;"><strong>HUGE LOSS</strong></td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📊 The People Lifecycle</h3>
<p>As an HR professional, you own the <strong>entire employee journey</strong>:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0;">
<div style="text-align: center; padding: 20px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
<div style="font-size: 2em;">🎯</div>
<strong>Attract</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">JD, Employer Brand</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(6, 182, 212, 0.1); border-radius: 10px; border: 1px solid rgba(6, 182, 212, 0.3);">
<div style="font-size: 2em;">🔍</div>
<strong>Screen</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Resume, Red Flags</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.3);">
<div style="font-size: 2em;">🤝</div>
<strong>Interview</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Technical, Cultural</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.3);">
<div style="font-size: 2em;">📝</div>
<strong>Hire</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Offer, Docs</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(34, 197, 94, 0.1); border-radius: 10px; border: 1px solid rgba(34, 197, 94, 0.3);">
<div style="font-size: 2em;">🚀</div>
<strong>Onboard</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Day 1, Training</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border: 1px solid rgba(236, 72, 153, 0.3);">
<div style="font-size: 2em;">📈</div>
<strong>Grow</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Feedback, Promotion</p>
</div>
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Apply What You Learned</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Self-Assessment (5 min)</h4>
<p>Open a new document and write your answers to these questions:</p>
<ol>
<li>In your own words, what is the difference between "traditional HR" and "HR as a growth engine"?</li>
<li>Describe a situation where keeping a toxic high-performer would be tempting. Why should you NOT do it?</li>
<li>List 3 ways you could "remove friction" for employees in their first week.</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Scenario Analysis (5 min)</h4>
<p><strong>Scenario:</strong> A senior developer has been with the company 2 years and consistently hits 120% of their targets. However, in the last 3 months, 2 junior developers have quit citing "hostile work environment" and mentioned this senior developer by name.</p>
<p>Write your recommendation:</p>
<ul>
<li>What immediate action would you take?</li>
<li>What investigation steps would you follow?</li>
<li>What's the likely outcome if the complaints are verified?</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Read the HR SOP (10 min)</h4>
<p>Open the <a href="../hr-sop.html" target="_blank" style="color: #8B5CF6;">HR SOP document</a> and read:</p>
<ul>
<li>Section 1: Hiring Pipeline Overview</li>
<li>Section 2: Culture Pillars</li>
</ul>
<p>Take notes on any concepts you don't understand — bring them to your 1:1 with your manager.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned about the HR mindset at Digital Heroes. Now prove your understanding.</p>
<ul>
<li>📝 10 questions about mindset and culture</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
<li>💡 Questions test <strong>understanding</strong>, not memorization</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏛️ The Culture Pillars</h3>
<img src="images/culture_pillar_diagram.png" alt="Culture Pillars" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>💎 The Premium Talent Standard</h3>
<p>We hire the top 1%.</p>
<div class="warning-box">
<ul>
<li>❌ No "Clock Watchers".</li>
<li>❌ No "Job Hoppers" (without good reason).</li>
<li>✅ Builders who have side projects.</li>
<li>✅ Self-starters who don't need micromanaging.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: RECRUITMENT STRATEGY</h2>

<div class="content-section">
<h3>🔻 The Hiring Funnel</h3>
<img src="images/hiring_pipeline_funnel.png" alt="Hiring Funnel" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🕵️‍♀️ Screening for Red Flags</h3>
<ul>
<li><strong>The "They" vs "We" Test:</strong> Do they blame past teams? (Bad sign).</li>
<li><strong>Curiosity Test:</strong> Do they have questions for us? (If no questions -> Reject).</li>
<li><strong>Spec Work:</strong> We always pay for a small test project before hiring.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about recruitment</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: ONBOARDING MASTERY - Creating Unforgettable First Impressions</h2>

<div class="content-section">
<h3>🎯 Why Onboarding Matters</h3>
<p>The first 90 days determine whether an employee becomes a <strong>champion or a regret</strong>. Bad onboarding is the #1 reason good hires fail.</p>

<div class="warning-box">
<strong>⚠️ The Cost of Bad Onboarding:</strong>
<ul style="margin-bottom: 0;">
<li>46% of new hires fail within 18 months — and most cite "poor cultural fit" or "confusion about the role"</li>
<li>Hiring replacement costs 2-3x annual salary</li>
<li>Poor onboarding = slow ramp-up = lost productivity for 6+ months</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎁 Day 1: The "Wow" Moment</h3>
<p>First impressions are <strong>permanent impressions</strong>. Make Day 1 unforgettable.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Before Day 1</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Action Required</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email Access</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Created and tested BEFORE Day 1</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slack Workspace</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Invited to all relevant channels</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notion Access</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Added to team spaces</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Calendar</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Week 1 schedule pre-booked</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Buddy Assigned</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Peer mentor introduced via email</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Welcome Message</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Personal note from manager + team</td>
</tr>
</table>

<div class="highlight-box">
<strong>🚫 FAILURE MODE:</strong> Employee arrives Day 1 → Email doesn't work → Waits 2 hours for IT → First impression = chaos<br><br>
<strong>✅ SUCCESS MODE:</strong> Employee logs in → Everything works → Welcome messages in Slack → Feels valued from minute 1
</div>
</div>

<div class="content-section">
<h3>👥 The Buddy System</h3>
<p>Every new hire gets a <strong>Buddy</strong> (peer mentor) for their first 30 days.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(139, 92, 246, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Buddy's Role</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Manager's Role</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Answer "stupid" questions</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set expectations & goals</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Navigate culture & tools</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assign work & give feedback</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social introductions</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Career development</td>
</tr>
</table>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0; border-left: 3px solid #8B5CF6;">
<strong>📝 Buddy Introduction Script:</strong><br><br>
<em>"Hey [New Hire], I'm [Buddy Name], your onboarding buddy! 👋 I've been here [X months/years] and I'm here to help you navigate the first few weeks. No question is too small — literally ask me anything from 'where's the best Slack channel for memes' to 'how do I submit expenses'. Let's grab a virtual coffee this week!"</em>
</div>
</div>

<div class="content-section">
<h3>📅 The 30-60-90 Day Plan</h3>
<p>Every new hire follows this structured ramp-up:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
<div style="padding: 25px; background: rgba(16, 185, 129, 0.1); border-radius: 12px; border: 2px solid rgba(16, 185, 129, 0.3);">
<h4 style="color: #10B981; margin-top: 0;">📚 Days 1-30: LEARN</h4>
<ul style="margin: 10px 0 0 0; padding-left: 20px;">
<li>Complete role-specific training</li>
<li>Shadow team members</li>
<li>Read all SOPs</li>
<li>Attend all team meetings</li>
<li>Daily check-ins with buddy</li>
</ul>
<p style="margin: 10px 0 0 0; font-size: 0.9em; color: #64748B;"><strong>Goal:</strong> Understand how we work</p>
</div>

<div style="padding: 25px; background: rgba(6, 182, 212, 0.1); border-radius: 12px; border: 2px solid rgba(6, 182, 212, 0.3);">
<h4 style="color: #06B6D4; margin-top: 0;">🛠️ Days 31-60: CONTRIBUTE</h4>
<ul style="margin: 10px 0 0 0; padding-left: 20px;">
<li>Take on assigned tasks</li>
<li>Ask for feedback actively</li>
<li>Identify process improvements</li>
<li>Weekly 1:1s with manager</li>
<li>Start cross-team collaboration</li>
</ul>
<p style="margin: 10px 0 0 0; font-size: 0.9em; color: #64748B;"><strong>Goal:</strong> Add value consistently</p>
</div>

<div style="padding: 25px; background: rgba(139, 92, 246, 0.1); border-radius: 12px; border: 2px solid rgba(139, 92, 246, 0.3);">
<h4 style="color: #8B5CF6; margin-top: 0;">🚀 Days 61-90: OWN</h4>
<ul style="margin: 10px 0 0 0; padding-left: 20px;">
<li>Lead small projects independently</li>
<li>Mentor newer team members</li>
<li>Propose new initiatives</li>
<li>Hit KPIs consistently</li>
<li>90-day review & goal setting</li>
</ul>
<p style="margin: 10px 0 0 0; font-size: 0.9em; color: #64748B;"><strong>Goal:</strong> Full autonomy</p>
</div>
</div>
</div>

<div class="content-section">
<h3>🚨 Onboarding Red Flags</h3>
<p>Watch for these warning signs during onboarding:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Action</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Doesn't ask questions (Week 1)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Proactively check in — they may be overwhelmed</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Misses meetings without notice</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direct conversation about expectations</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Negative talk about previous employer</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Note for review — pattern of blame?</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Resists feedback (Week 2+)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Escalate to manager — cultural fit concern</td>
</tr>
</table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Create an Onboarding Plan</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Day 1 Checklist (10 min)</h4>
<p>Create a detailed Day 1 checklist for a new <strong>Developer</strong> joining Digital Heroes:</p>
<ol>
<li>List all access/accounts they need</li>
<li>List all Slack channels they should join</li>
<li>List the people they should meet on Day 1</li>
<li>Write the welcome message you'd send in #general</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Write a 30-60-90 Plan (10 min)</h4>
<p>Draft a 30-60-90 day plan for a <strong>Sales Representative</strong>:</p>
<ul>
<li>Days 1-30: What should they learn? What training?</li>
<li>Days 31-60: What tasks should they start? What metrics?</li>
<li>Days 61-90: What ownership should they have?</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Buddy Introduction (5 min)</h4>
<p>Write a personalized buddy introduction message for a new hire joining your team. Make it warm, helpful, and specific to your role.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned how to create world-class onboarding experiences. Now prove your understanding.</p>
<ul>
<li>📝 10 questions about onboarding best practices</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: PERFORMANCE MANAGEMENT</h2>

<div class="content-section">
<h3>🔄 The Feedback Loop</h3>
<img src="images/feedback_loop_cycle.png" alt="Feedback Loop" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🗣️ Radiant Candor</h3>
<div class="highlight-box">
<strong>We care personally, but challenge directly.</strong>
<p>Don't save feedback for the annual review. Give it immediately. "Hey, that presentation was great, but next time condense the metrics slide."</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about performance</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: COMPENSATION & BENEFITS</h2>

<div class="content-section">
<h3>💰 Fair & Competitive</h3>
<ul>
<li><strong>Benchmarking:</strong> We pay above market rate to attract the best.</li>
<li><strong>Performance Bonus:</strong> Tied to company profit (Profit Share).</li>
</ul>
</div>

<div class="content-section">
<h3>🎉 Perks That Matter</h3>
<ul>
<li><strong>Remote First:</strong> Work from anywhere.</li>
<li><strong>Learning Budget:</strong> $1000/yr for courses/books.</li>
<li><strong>Wellness:</strong> Monthly gym/health stipend.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about comp & benefits</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📂 The Tech Stack</h3>
<ul>
<li><strong>Notion:</strong> The brain. All SOPs and Policies live here.</li>
<li><strong>Slack:</strong> The nervous system. Comms happen here (Async preferred).</li>
<li><strong>Gusto/Deel:</strong> Payroll and compliance.</li>
<li><strong>Greenhouse/Ashby:</strong> ATS (Applicant Tracking System).</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about tools</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: CULTURE BUILDING</h2>

<div class="content-section">
<h3>🎉 Remote != Isolated</h3>
<p>Culture is what happens when no one is looking.</p>
</div>

<div class="content-section">
<h3>☕ Rituals</h3>
<ul>
<li><strong>All-Hands:</strong> Weekly updates from founders (Transparency).</li>
<li><strong>Donut Chats:</strong> Random 1:1 pairings in Slack for coffee.</li>
<li><strong>Shoutouts:</strong> #wins channel to celebrate small victories publicly.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about culture</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: Toxic High Performer</h3>
<p><strong>Situation:</strong> Top sales rep hits targets but bullies the support team.</p>
<div class="warning-box">
<strong>Action:</strong> Warning -> PIP -> Fire.
<p>Culture > Revenue. If we keep them, the support team quits. We lose more in the long run.</p>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: Resignation</h3>
<p><strong>Situation:</strong> Senior Dev quits for more money.</p>
<ul>
<li><strong>Action:</strong> Exit Interview. Find out WHY. if it's just money, wish them well. If it's bad management, fix the manager.</li>
<li><strong>Do not counter-offer</strong> purely on desperation. It sets a bad precedent.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about scenarios</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations!</h3>
<p>You've completed the HR Specialist training. This final assessment covers:</p>
<ul>
<li>✅ Culture Pillars & Philosophy</li>
<li>✅ Recruitment Funnel Strategy</li>
<li>✅ Onboarding Process</li>
<li>✅ Performance Feedback Loops</li>
<li>✅ Compensation Models</li>
<li>✅ Crisis Management</li>
<li>✅ HR Tools & Remote Culture</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your HR Certification.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Final Quiz?</h3>
<ul>
<li>📝 20 questions covering all training modules</li>
<li>🎯 Score <strong>20/20</strong> to receive certification</li>
</ul>
</div>
`;

// Quiz Questions - ENHANCED with challenging scenario-based questions
// Testing real-world HR judgment and decision-making
const allQuizzes = [
    // Task 1: Mindset - Scenario-Based
    [
        { q: "A developer closed 3x the average deals but constantly belittles teammates in Slack. Other devs are scared to speak up. What do you do?", o: ["Keep them — revenue matters most", "Give them a final warning and 30 days", "Fire them immediately — toxic behavior destroys culture", "Promote them to management to leverage their skills"], c: 2 },
        { q: "New hire complains their laptop is slow, their Slack notifications are broken, and they can't access the design files. This is:", o: ["Normal startup chaos — they'll figure it out", "The PM's problem to solve", "HR's failure — friction kills productivity", "Not urgent — wait until IT is free"], c: 2 },
        { q: "CEO asks you to hire her nephew who has no relevant skills 'just to help him out.' What do you say?", o: ["Yes — keep the CEO happy", "Yes, but put him on a PIP immediately", "No — hiring standards apply to everyone, including family", "Yes, but in a different department"], c: 2 },
        { q: "A mid-level manager asks: 'What's more important — filling the role fast or finding the right person?' Your answer:", o: ["Speed — empty seats cost money every day", "Right person — a bad hire costs 3x their salary to fix", "Balance both — 50% quality, 50% speed", "It depends on the department"], c: 1 },
        { q: "You notice morale dropping. Team members are quiet in All-Hands, Slack is dead, sick days are up 40%. What's happening?", o: ["Normal seasonal slowdown", "They're job hunting — time for exit interviews", "Something is broken — time for 1:1s to find root cause", "Nothing — people are just busy"], c: 2 },
        { q: "An employee sends you a spreadsheet showing their salary is 20% below market. They're right. What do you do?", o: ["Ignore it — they signed the contract", "Promise to look into it (and forget)", "Acknowledge it, discuss with leadership, and fix it if possible", "Tell them to accept it or leave"], c: 2 },
        { q: "A candidate says 'my last company was terrible, management was clueless, and my teammates were lazy.' This is:", o: ["Honest feedback — they're transparent", "A red flag — they blame others instead of owning their role", "Neutral — everyone has bad experiences", "A green flag — they have high standards"], c: 1 },
        { q: "Someone asks 'What does HR actually DO here?' The correct answer is:", o: ["We process paperwork and payroll", "We're the company police making sure rules are followed", "We're a strategic growth engine — finding and retaining top talent", "We plan parties and events"], c: 2 },
        { q: "A top performer wants a 30% raise or they'll leave. They've been here 6 months. What's the best approach?", o: ["Match it immediately — can't lose them", "Counter-offer with 15% to meet halfway", "Understand their motivations first — money might not be the real issue", "Let them go — ultimatums set bad precedents"], c: 2 },
        { q: "The Engineering lead says 'I don't have time for feedback, just let me code.' Performance reviews are:", o: ["Optional for senior staff", "Only for underperformers", "Mandatory for everyone — growth requires feedback", "Replaced by shipping features"], c: 2 }
    ],
    // Task 2: Company Knowledge - Scenario-Based
    [
        { q: "A recruiter asks what 'Top 1%' means at Digital Heroes. The most accurate answer:", o: ["Highest paid 1% in the industry", "People with the best resumes from top schools", "Self-starters who build, own outcomes, and don't need micromanaging", "Anyone who passes our technical interview"], c: 2 },
        { q: "Candidate has 6 jobs in 4 years. Each lasted 6-8 months. They say 'companies kept failing.' Your assessment:", o: ["Unlucky — bad companies happen", "Red flag — pattern of short tenures needs deep investigation", "Great — diverse experience is valuable", "Hire them for a short-term contract first"], c: 1 },
        { q: "Marketing manager candidate has zero side projects and says 'I separate work and personal life.' This indicates:", o: ["Healthy work-life balance — hire them", "Red flag — no passion signals a 'clock watcher'", "Neutral — side projects aren't required", "Perfect — less burnout risk"], c: 1 },
        { q: "You need to explain why Digital Heroes pays above market despite being a startup. The reason is:", o: ["We're funded by investors", "Top 1% talent requires competitive compensation", "We can't attract talent otherwise", "It's temporary until we're profitable"], c: 1 },
        { q: "A team lead asks 'Should I check on my remote workers hourly?' Your advice:", o: ["Yes — remote work requires oversight", "No — if you hired self-starters, trust them to deliver", "Yes — but use subtle monitoring software", "Only check on underperformers"], c: 1 },
        { q: "Someone says 'Culture fit is just an excuse to hire people like ourselves.' How do you respond?", o: ["They're right — skip culture fit interviews", "Culture fit means shared VALUES, not similar backgrounds", "Ignore it — culture fit isn't important", "Agree and remove culture questions"], c: 1 },
        { q: "Agency arm charges $15,000+ per project. HR's role in supporting this is:", o: ["Nothing — we don't touch revenue", "Find talent who can deliver premium-quality work", "Reduce hiring costs to improve margins", "Hire cheaper staff to increase profits"], c: 1 },
        { q: "Media arm releases 100 videos/month. What HR metric matters most for this team?", o: ["Cost per hire", "Time to fill positions", "Retention rate of skilled video editors", "Number of applicants"], c: 2 },
        { q: "Someone complains 'there's no clear career path here.' This is most likely:", o: ["Normal for a startup — figure it out yourself", "HR failure — growth paths should be documented", "Not HR's problem — managers should handle it", "Fixed by giving a promotion title"], c: 1 },
        { q: "Engineering requests a hire with 10 years React experience. React is 11 years old. This means:", o: ["Reject the requirement — it's unrealistic", "Find someone with 9 years and close enough", "Work with Engineering to define realistic requirements", "Post the job anyway and see what happens"], c: 2 }
    ],
    // Task 3: Recruitment - Scenario-Based
    [
        { q: "You get 500 applicants for a Senior Developer role. 450 don't meet basic requirements. First step:", o: ["Review all 500 manually to be fair", "Automate screening to filter unqualified candidates", "Hire someone to manually review all", "Close the job and try again with better job description"], c: 1 },
        { q: "A candidate's interview went great, but their references say 'they were difficult to work with.' What now?", o: ["Ignore references — interviews matter more", "Reject immediately — references don't lie", "Dig deeper — ask specific scenarios and probe the pattern", "Hire but on probation"], c: 2 },
        { q: "Strong candidate asks for $30K above your salary band. They bring rare skills. What do you do?", o: ["Reject them — budget is budget", "Match it — rules are meant to be broken for top talent", "Negotiate with leadership about the value they bring", "Lowball them and hope they accept"], c: 2 },
        { q: "Candidate in interview says: 'I don't have any questions for you.' This signals:", o: ["They're confident and prepared", "Red flag — lack of curiosity or genuine interest", "They'll ask questions later if hired", "Nothing — some people are just quiet"], c: 1 },
        { q: "You've been searching for a Frontend Lead for 3 months. Hiring manager says 'just hire someone.' You should:", o: ["Hire the next adequate candidate", "Lower standards to fill the seat", "Never compromise — the wrong hire is worse than no hire", "Blame the market and give up"], c: 2 },
        { q: "A candidate aces technical interview but was rude to the receptionist. Your recommendation:", o: ["Hire — technical skills matter most", "Strong reject — how you treat 'unimportant' people matters", "Ignore it — one incident doesn't define them", "Hire but give feedback on behavior"], c: 1 },
        { q: "Engineering wants a $200 paid coding challenge. Finance says tests should be free. Correct answer:", o: ["Free tests — candidates should prove themselves", "Paid tests — respects candidate time and attracts serious talent", "Let Engineering decide — it's their department", "Compromise with a shorter free test"], c: 1 },
        { q: "Best source for quality hires at Digital Heroes:", o: ["Job boards like Indeed", "Referrals from current top performers", "LinkedIn job posts", "Campus recruiting"], c: 1 },
        { q: "A candidate's portfolio is stunning but their GitHub is empty. What does this suggest?", o: ["They're a designer, not coder — that's fine", "Investigate — portfolio may not be their work", "GitHub doesn't matter for non-developers", "Reject them — no proof of work"], c: 1 },
        { q: "The CEO wants to hire someone 'like them' — same school, same background. Your response:", o: ["Do it — CEO knows best", "Push back — diversity of thought requires diverse hiring", "Find a lookalike to keep CEO happy", "Agree but secretly look for different candidates"], c: 1 }
    ],
    // Task 4: Onboarding - Scenario-Based
    [
        { q: "New hire is Day 1 and their Slack, email, and Notion access aren't set up. Whose failure is this?", o: ["IT's fault — they dropped the ball", "The new hire should have reminded us", "HR's failure — this should have been done BEFORE Day 1", "Nobody's fault — these things happen"], c: 2 },
        { q: "Week 2, new hire is struggling but hasn't asked for help. They seem overwhelmed. What do you do?", o: ["Wait for them to ask — they're adults", "Proactively check in — new hires often don't want to seem incompetent", "Assume they're not a good fit", "Add more training videos"], c: 1 },
        { q: "New designer finishes Day 1 and says 'that was boring — I just read documents all day.' This onboarding was:", o: ["Normal — first days are always admin", "A failure — Day 1 should be a 'Wow Moment'", "Expected — reading is important", "Too short — add more documents"], c: 1 },
        { q: "It's Day 30. New hire is still confused about their responsibilities and priorities. Root cause:", o: ["They're slow learners", "Manager failed to set clear expectations", "They should have asked more questions", "It's too early to judge"], c: 1 },
        { q: "New remote hire says 'I feel isolated, I haven't met anyone on my team.' What's missing?", o: ["They should schedule their own meetings", "Buddy system and intentional team introductions", "Office workers don't have this problem", "Remote work is naturally isolating"], c: 1 },
        { q: "A new hire's buddy (peer mentor) is too busy to meet with them. What do you do?", o: ["Tell the new hire to wait", "Assign a new buddy — the system must work", "Cancel the buddy program", "Let manager handle it"], c: 1 },
        { q: "30-60-90 day plan says 'Learn' for Day 30, 'Contribute' for Day 60, 'Own' for Day 90. At Day 90, hire is still 'Learning.' This means:", o: ["They're a slow learner — give more time", "Something is wrong — could be hire fit, training, or manager", "Normal for complex roles", "Fire them immediately"], c: 1 },
        { q: "New hire's first impression of the company was 'disorganized and chaotic.' Impact:", o: ["They'll forget about it once they're working", "May cause early churn — first impressions shape retention", "Doesn't matter if the work is good", "Makes them tougher and more resilient"], c: 1 },
        { q: "Engineering manager says 'Onboarding is HR's job, not mine.' Correct response:", o: ["Agree — that's how it works", "Wrong — manager owns department-specific onboarding, HR owns culture", "Take over all onboarding", "Let the new hire figure it out"], c: 1 },
        { q: "Ideal first-week experience for a new hire should include all EXCEPT:", o: ["Meeting their team", "Access to all tools", "Being assigned a complex client project immediately", "Understanding company culture and values"], c: 2 }
    ],
    // Task 5: Performance - Scenario-Based
    [
        { q: "Manager gives feedback to employee once a year during annual review. Employee is shocked by the criticism. This is:", o: ["Normal — annual reviews are for feedback", "A failure — feedback should be immediate and ongoing", "The employee's fault for not asking", "How all companies work"], c: 1 },
        { q: "Employee is underperforming but no one has given direct feedback. They don't know there's a problem. Root cause:", o: ["Employee lacks self-awareness", "Manager is avoiding difficult conversations", "Performance isn't being measured", "It's not a real problem"], c: 1 },
        { q: "Top performer asks 'How can I grow here?' but seems bored. Risk if you don't address it:", o: ["No risk — they're performing well", "High churn risk — top performers leave when growth stalls", "They'll stay for the salary", "Let their manager handle it"], c: 1 },
        { q: "During 1:1, employee says 'I don't know what success looks like in my role.' This indicates:", o: ["They're confused — normal for new hires", "Missing KPIs and clear expectations", "They need more training", "They should ask their peers"], c: 1 },
        { q: "Radical Candor means:", o: ["Being brutally honest without caring about feelings", "Caring personally while challenging directly", "Avoiding confrontation to keep peace", "Only giving positive feedback"], c: 1 },
        { q: "An employee's OKR is 'Be a better designer.' What's wrong with this?", o: ["Nothing — it's aspirational", "Not measurable — how do you know when it's achieved?", "Too specific", "Designers don't need OKRs"], c: 1 },
        { q: "Employee received a 'Needs Improvement' rating for Q3. They're surprised because Q2 was 'Exceeds.' What happened?", o: ["Normal performance fluctuation", "Feedback gap — they should have been warned earlier", "They got complacent", "Manager changed expectations"], c: 1 },
        { q: "Manager says 'I can't fire this person, we'll miss our deadline.' Best response:", o: ["Agree and keep the person", "Deadlines matter less than team health — address the problem", "Hire someone else to do their work", "Wait until after the deadline"], c: 1 },
        { q: "An employee asks for feedback but their manager never gives any. HR should:", o: ["Nothing — it's between them", "Coach the manager on giving effective feedback", "Tell the employee to accept it", "Move the employee to a different team"], c: 1 },
        { q: "PIP stands for Performance Improvement Plan. When should it be used?", o: ["First sign of any problem", "After coaching has failed and termination is the alternative", "Instead of termination always", "Never — just fire people"], c: 1 }
    ],
    // Task 6: Comp & Benefits - Scenario-Based
    [
        { q: "Two developers doing the same job: one makes $80K, the other makes $100K. Neither knows. This is:", o: ["Normal — negotiation skills vary", "A legal and morale risk — salary bands should prevent this", "Fine as long as they don't find out", "The $80K person's fault for not negotiating"], c: 1 },
        { q: "Candidate asks for salary higher than your range. All other candidates accepted your offer. You should:", o: ["Reject them — stay within budget", "Pay over budget for a clearly superior candidate (if justified)", "Lowball and hope they accept", "Ghost them"], c: 1 },
        { q: "Team member says 'I know a colleague makes more than me for the same work.' How do you respond?", o: ["Tell them salaries are confidential", "Investigate — pay equity is a real issue", "Say 'that's life'", "Deny it without checking"], c: 1 },
        { q: "Payroll is delayed by 2 days due to a bank issue. What's the impact?", o: ["Minor — they can wait", "Severe — employees rely on timely pay; this breaks trust", "No impact — it's beyond our control", "Good — saves the company 2 days of interest"], c: 1 },
        { q: "Learning budget is $1000/year per person. Employee spent $0 all year. This suggests:", o: ["They're saving company money", "Possible disengagement — check if they're investing in growth", "They don't need learning", "Perfect employee"], c: 1 },
        { q: "Remote-first means:", o: ["Remote is allowed but office is preferred", "Remote is the default; office is optional", "100% remote, no office exists", "Remote only for senior staff"], c: 1 },
        { q: "An employee is offered 20% more at another company. Counter-offer strategy:", o: ["Always match to keep them", "Rarely counter — it often just delays departure", "Counter with 25% to show you care", "Never counter — let them go"], c: 1 },
        { q: "Employee asks 'Why do we offer unlimited PTO?' Real reason:", o: ["So employees never take vacation and we pay less", "Trust-based culture — treat adults like adults", "It's free — no payout when they leave", "Industry trend — we're following others"], c: 1 },
        { q: "You discover your salaries are 15% below market for a hot role. What do you do?", o: ["Nothing — they already accepted", "Adjust proactively — retention is cheaper than replacement", "Wait until they complain", "Hope they don't find out"], c: 1 },
        { q: "Bonus payout is late. Three employees ask about it within an hour. HR should:", o: ["Tell them to be patient", "Communicate proactively to everyone before more ask", "Ignore it — it's coming", "Blame finance"], c: 1 }
    ],
    // Task 7: Tools - Scenario-Based
    [
        { q: "Someone asks 'Where do I find our PTO policy?' You should direct them to:", o: ["Their manager", "Notion Knowledge Base — single source of truth", "An old email from 2020", "They should Google it"], c: 1 },
        { q: "Employee posts salary details in #general Slack channel. What's the correct action?", o: ["Delete it quietly — pretend it didn't happen", "Address it openly — salary transparency depends on company policy", "Ignore it — it's their right", "Fire them immediately"], c: 1 },
        { q: "You need a new hire to sign their offer letter and it's midnight in their timezone. Best approach:", o: ["Call them anyway — urgency matters", "Send via DocuSign — async and respectful of their time", "Wait until morning to email them", "Skip the signature and start them anyway"], c: 1 },
        { q: "Manager asks to monitor an employee's Slack messages because they 'seem distracted.' You should:", o: ["Set it up — managers should know everything", "Refuse — surveillance destroys trust", "Do it secretly so the employee doesn't know", "Ask the employee if it's okay"], c: 1 },
        { q: "New hire says 'I've been here a week and still don't have Notion access.' Who failed?", o: ["IT — they're slow", "The new hire — they should have asked", "HR — access should be ready before Day 1", "Nobody — a week is reasonable"], c: 2 },
        { q: "Employee says 'Slack is overwhelming — I get 500 notifications a day.' HR should:", o: ["Tell them to deal with it", "Work with teams to improve async communication practices", "Remove them from channels", "Let them ignore Slack"], c: 1 },
        { q: "Someone suggests 'We should share all employee salaries in Notion.' Response:", o: ["Great idea — implement immediately", "Requires careful policy decision — salary transparency has trade-offs", "Terrible idea — reject it", "Ask the CEO to decide alone"], c: 1 },
        { q: "ATS (Applicant Tracking System) shows a candidate applied 6 months ago and was rejected. They're applying again. You should:", o: ["Auto-reject — we already said no", "Review their application fresh — people improve", "Tell them to wait another 6 months", "Block their email"], c: 1 },
        { q: "Knowledge Base hasn't been updated in 8 months. Policies are outdated. This is:", o: ["Fine — policies don't change that often", "A risk — employees are following wrong information", "IT's job to fix", "Not HR's responsibility"], c: 1 },
        { q: "Best way to communicate sensitive layoff information:", o: ["Slack message to affected employees", "Mass email to everyone", "Direct 1:1 calls, then follow-up email", "Post in Notion and let them find it"], c: 2 }
    ],
    // Task 8: Culture - Scenario-Based
    [
        { q: "Team stopped showing up to the weekly All-Hands. Attendance dropped from 95% to 40%. This signals:", o: ["People are too busy — cancel the meeting", "Meetings aren't adding value — need to reinvent them", "Force attendance with mandatory rules", "Nothing — optional meetings have low turnout"], c: 1 },
        { q: "Remote team member says 'I haven't spoken to anyone in 3 days.' This is:", o: ["Normal for remote work", "A sign of isolation — intentional connection needed", "Their fault for not reaching out", "Perfect — they're focused on work"], c: 1 },
        { q: "Shoutouts channel has 3 posts this month. Last year it was 30/month. What's happening?", o: ["Less good work to celebrate", "Culture is weakening — recognition habits are dying", "People are too busy to celebrate", "Channel is outdated — move to DMs"], c: 1 },
        { q: "CEO says 'We're a family here.' What's the right way to interpret this?", o: ["Great — families are unconditional", "Problematic — families don't fire people; this sets wrong expectations", "Perfect culture statement", "Use it in all job postings"], c: 1 },
        { q: "Someone was publicly criticized in a team meeting for a mistake. Impact:", o: ["Good — others will learn from it", "Destroys psychological safety — mistakes should be addressed privately", "Efficient — saves time", "Natural leadership"], c: 1 },
        { q: "Two team members are in conflict. Neither will collaborate. Manager says 'let them figure it out.' HR should:", o: ["Agree — adults should handle conflict", "Step in — unresolved conflict affects the team", "Fire both of them", "Take sides"], c: 1 },
        { q: "New hire observes: 'Everyone works 12-hour days here.' What does this suggest about culture?", o: ["Strong work ethic — positive sign", "Burnout risk — workload or expectations may be unsustainable", "Dedication to success", "Efficient operation"], c: 1 },
        { q: "Friday Happy Hour used to have 20 attendees. Now it's 3 people. What happened?", o: ["People are tired — it's Friday", "Something shifted — culture rituals need attention", "Happy Hours are outdated", "3 is enough for a good time"], c: 1 },
        { q: "Manager gives public recognition only to their favorite team members. Others feel excluded. Root problem:", o: ["Manager's favorites are the best performers", "Bias — recognition should be based on merit, not relationships", "Others should work harder", "Normal management behavior"], c: 1 },
        { q: "Remote worker says 'I feel like a contractor, not an employee.' What's missing?", o: ["Better benefits", "Connection and belonging — inclusion beyond tasks", "Nothing — remote work is transactional", "A promotion"], c: 1 }
    ],
    // Task 9: Scenarios - Complex Real-World Cases
    [
        { q: "Top sales rep brings in 40% of revenue. But 3 people have quit citing them as 'unbearable to work with.' Action:", o: ["Keep them — 40% revenue can't be replaced", "Fire them — revenue doesn't justify destroying team morale", "Move them to work alone", "Give them their own department"], c: 1 },
        { q: "Employee submits resignation. Their manager's leadership has been criticized before. What do you investigate?", o: ["Nothing — people leave for many reasons", "Whether this is a pattern — manager may be causing churn", "Give exit survey and move on", "Blame the employee"], c: 1 },
        { q: "Candidate says 'I'll accept your offer but I need a week to think.' You have another candidate waiting. What do you do?", o: ["Give them 2 days max — pressure works", "Give them the week — rushed decisions lead to regret", "Move to the next candidate immediately", "Rescind the offer"], c: 1 },
        { q: "An employee shares with you that their manager made an inappropriate comment. What's your FIRST action?", o: ["Tell the manager to apologize", "Document and investigate — take reports seriously", "Ask the employee to handle it directly", "Wait to see if it happens again"], c: 1 },
        { q: "Startup CEO asks 'Should we offer someone more than our CTO makes?' The candidate is exceptional. Your advice:", o: ["Never — it will cause problems", "Yes, if justified — but address internal equity proactively", "Pay less and hope they accept", "Hire them but at a hidden contract rate"], c: 1 },
        { q: "A high-performer requests to go part-time for 6 months due to family situation. Policy says no part-time for their role. What do you do?", o: ["Reject — policy is policy", "Explore exception — retaining talent sometimes means flexibility", "Tell them to take leave instead", "Let them work secretly part-time"], c: 1 },
        { q: "Three employees from the same team quit within 2 months. Manager says it's 'just bad luck.' HR should:", o: ["Accept the explanation", "Investigate deeply — patterns often point to systemic issues", "Replace them quickly", "Ignore it"], c: 1 },
        { q: "Remote employee hasn't turned on their camera in 3 months of meetings. Manager complains. What's the guidance?", o: ["Force cameras on — it's policy", "Investigate reason before making rules — there may be valid cause", "Fire them for non-compliance", "Ignore it — cameras don't matter"], c: 1 },
        { q: "Layoffs are coming. CEO wants to do it Friday 5pm so 'people have the weekend to process.' Best approach:", o: ["Good idea — gives them time", "Bad idea — avoid Friday afternoon; give time for questions and support", "It doesn't matter when", "Do it on Monday morning"], c: 1 },
        { q: "Valued employee got a competing offer for 20% more. They don't seem excited about leaving. What's actually happening?", o: ["They want more money", "They may want to be valued — find the real reason before counter-offer", "They're testing you", "Let them go"], c: 1 }
    ],
    // Task 10: Final - 20 Challenging Scenario Questions
    [
        { q: "Engineer is brilliant but toxic. 3 people threaten to quit if they stay. Revenue at risk either way. Framework for decision:", o: ["Keep the engineer — individual performance matters most", "Exit the engineer — team health > individual brilliance", "Let the 3 people quit", "Ignore the conflict"], c: 1 },
        { q: "Offer letter has a mistake — salary is $10K higher than approved. Candidate signed. What now?", o: ["Honor it — we made the mistake", "Tell them it was an error and reduce", "Say nothing and hope they don't notice", "Rescind the offer"], c: 0 },
        { q: "Candidate with a criminal record (non-violent, 10 years ago) applies. Skills match perfectly. What's the ethical approach?", o: ["Automatic rejection — liability risk", "Consider them fairly — skills and rehabilitation matter", "Hire but don't tell anyone about the record", "Ask them to withdraw"], c: 1 },
        { q: "Employee's work quality dropped 30% in 2 weeks. No communication about issues. First step:", o: ["Fire them for underperformance", "Check in privately — something may be wrong personally", "Public warning in team meeting", "Ignore it — it might resolve itself"], c: 1 },
        { q: "New company policy reduces benefits. How should you communicate it?", o: ["Email blast and move on", "Transparent announcement explaining why + addressing concerns", "Slip it into a document update", "Let managers tell their teams"], c: 1 },
        { q: "Manager fires someone without proper documentation or prior warnings. What's the risk?", o: ["None — managers can fire freely", "Legal and morale risk — documentation protects the company", "The person deserved it", "Performance issues are obvious"], c: 1 },
        { q: "You discover a pay gap: women in the same role make 8% less on average. Immediate action:", o: ["Nothing — correlation isn't causation", "Investigate and address — pay equity is critical", "Hope the data is wrong", "Blame historical hiring"], c: 1 },
        { q: "Employee has worked 14 straight days with no day off. Manager says 'they're dedicated.' HR should:", o: ["Praise the dedication", "Intervene — burnout destroys people and productivity", "Let them choose their hours", "This is startup life"], c: 1 },
        { q: "Someone leaks confidential salary info to Glassdoor. Impact:", o: ["Minimal — it's public info anyway", "Trust breach — investigate source and review confidentiality practices", "Good — transparency is healthy", "Sue them"], c: 1 },
        { q: "'Culture fit' interview is being used to reject minorities at higher rates. This is:", o: ["Normal — cultural differences exist", "Discrimination risk — redesign the assessment immediately", "Not HR's problem", "Interviewers know best"], c: 1 },
        { q: "Founder says 'I don't care about diversity, just hire the best.' Correct response:", o: ["Agree — meritocracy is fair", "Explain — diverse teams perform better; homogenous hiring limits talent pool", "Ignore founder's view", "Nod and do nothing"], c: 1 },
        { q: "Someone from a protected class is fired for performance. Manager has documented issues over 6 months. Risk assessment:", o: ["High risk — protected class means lawsuit likely", "Lower risk — documentation protects fair termination", "No risk — performance fires are legal", "Medium — depends on lawyer"], c: 1 },
        { q: "Employee reports sexual harassment. Accused person is a VP. First action:", o: ["Tell the employee to be careful about accusations", "Investigate independently — seniority doesn't protect misconduct", "Ask the VP directly and trust their answer", "Suggest it was a misunderstanding"], c: 1 },
        { q: "Competitor poaches 5 employees in one month from your Design team. Warning sign is:", o: ["Normal market competition", "Compensation or culture issue — conduct stay interviews", "Bad luck — can't prevent poaching", "Design team isn't important"], c: 1 },
        { q: "Intern made a mistake that cost $5,000. Manager wants to fire them. Your guidance:", o: ["Fire them — money is money", "Mistakes are learning — this intern might be your future employee", "Bill the intern for the loss", "Make them work it off"], c: 1 },
        { q: "Anonymous feedback says 'HR is useless and doesn't help anyone.' Best response:", o: ["Ignore — anonymous feedback is unreliable", "Investigate what's driving the perception and address gaps", "Defend HR in the next All-Hands", "Find out who wrote it"], c: 1 },
        { q: "Vacation request denied by manager. Employee says 'I'll take it anyway.' What's the real issue?", o: ["Insubordination — discipline them", "Trust breakdown — work/life policy needs review", "Fire them for threatening behavior", "Approve to avoid conflict"], c: 1 },
        { q: "Hiring committee loves a candidate. You sense 'halo effect' from their famous previous company. Next step:", o: ["Trust the committee's judgment", "Probe deeper — fame is not performance proof", "Hire immediately before they're gone", "Reject for being overqualified"], c: 1 },
        { q: "CEO wants you to 'have a beer' with a problem employee instead of documenting issues. You should:", o: ["Do it — CEO knows best", "Push back — documentation protects everyone, including the employee", "Have the beer but document secretly", "Delegate to manager"], c: 1 },
        { q: "Your company is 90% men. A male candidate scores 85%, female candidate scores 80%. Diversity hire?", o: ["Always hire the higher score — meritocracy first", "If difference is marginal, factor in diversity value", "Never consider gender in hiring", "Hire both"], c: 1 }
    ]
];
