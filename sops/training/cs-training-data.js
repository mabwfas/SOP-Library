// Customer Success Training Data
// Complete training content for Customer Success certification
// UPGRADED: Expanded Lessons and Study Guides (Text Only)

const trainingTasks = [
    {
        id: 1,
        title: "Success Mindset",
        description: "Retention is Growth",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize that 'Retention > Acquisition'",
            "🛡️ Understand we are 'Partners', not support",
            "🚀 Learn the 'Proactive vs Reactive' model"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Study the service offerings (Shopify, SEO, Ads)",
            "💎 Understand the 'White Glove' service standard",
            "📢 Learn how CS bridges Sales & Delivery"
        ]
    },
    {
        id: 3,
        title: "Onboarding Mastery",
        description: "First 90 Days",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🚀 The Kickoff Call agenda",
            "📅 The 'Time to Value' (TTV) metric",
            "📝 Setting expectations early"
        ]
    },
    {
        id: 4,
        title: "Churn Prevention",
        description: "Red Flag Detection",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "⚠️ Identifying 'Ghosting' clients",
            "📉 Handling 'Budget Cuts' conversations",
            "🔥 The 'Save Playbook'"
        ]
    },
    {
        id: 5,
        title: "Upselling & Expansion",
        description: "Growing Accounts",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📈 Identifying growth opportunities",
            "🤝 The 'Trusted Advisor' pitch",
            "💰 Moving from Project to Retainer"
        ]
    },
    {
        id: 6,
        title: "QBRs & Reviews",
        description: "Strategic Alignment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📅 Quarterly Business Review (QBR) deck structure",
            "📊 Presenting ROI and results",
            "🚀 Roadmap planning for the next quarter"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "CS Tech Stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📂 HubSpot for CRM/Notes",
            "📧 Email templates for efficiency",
            "🗣️ Slack connect channels etiquette"
        ]
    },
    {
        id: 8,
        title: "Conflict Resolution",
        description: "Turning Angry to Happy",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🧘‍♀️ De-escalation techniques (LATTE method)",
            "🤝 Ownership of mistakes (Radical Responsibility)",
            "🎁 Compensation/Make-good offers"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'We want to cancel' email",
            "📝 Run a mock Kickoff Call",
            "🤝 Pitch an SEO retainer to a Design client"
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
            "🎉 Get ready to delight clients!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: SUCCESS MINDSET - The Retention Growth Engine</h2>

<div class="content-section">
<h3>🎯 Why Are You Here?</h3>
<p>Customer Success is not a support role. It's not a "nice to have." It's the <strong>single most important factor</strong> separating successful agencies from those that burn through clients.</p>

<div class="warning-box">
<strong>⚠️ The Leaky Bucket Problem:</strong><br>
Imagine pouring water into a bucket with holes. That's what happens when you focus only on sales without CS. You acquire 10 clients, lose 8, net +2. <strong>CS plugs the holes.</strong>
<p style="margin-top: 10px;">Companies with strong CS have <strong>5-25% higher profitability</strong> because keeping clients is cheaper than finding new ones.</p>
</div>
</div>

<div class="content-section">
<h3>💡 Retention is Growth</h3>
<div class="highlight-box" style="text-align: center; font-size: 1.2em;">
<strong>It costs 5x more to get a new client than to keep an existing one.</strong>
</div>

<p>This single statistic should shape everything you do:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Acquisition Focus</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Retention Focus</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Spend $500 to acquire 1 client</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Spend $100 to keep 1 client</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client lifetime: 6 months</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client lifetime: 3 years</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue focus only</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Relationships + Referrals</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>10 clients, 2 remain</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>10 clients, 8 remain + referrals</strong></td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🔥 Support vs Success: Know the Difference</h3>
<p>This is the most common confusion. You are NOT support.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🛠️ Support</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚀 Customer Success</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reactive — waits for problems</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Proactive — prevents problems</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fixes breaks</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Prevents breaks</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Transaction-based</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Relationship-based</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ticket-driven</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Strategy-driven</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's the fix"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>"How can we help you grow?"</strong></td>
</tr>
</table>

<div class="highlight-box">
<strong>Your Role:</strong> You are a <em>Partner</em>. You sit on the same side of the table as the client, looking at their business together. You call them BEFORE they have a problem. You anticipate needs. You are a strategic ally.
</div>
</div>

<div class="content-section">
<h3>📊 The Trust Equation</h3>
<p>Trust is not just a feeling — it's measurable. Use this formula to diagnose relationship health:</p>

<div style="text-align: center; padding: 20px; background: rgba(139, 92, 246, 0.1); border-radius: 12px; margin: 20px 0;">
<strong style="font-size: 1.4em; color: #8B5CF6;">Trust = (Credibility + Reliability + Intimacy) ÷ Self-Orientation</strong>
</div>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Credibility</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Do they believe you're competent?</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reliability</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Do you do what you say you'll do?</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Intimacy</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Do they feel safe sharing concerns?</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Self-Orientation</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">Are you focused on YOUR goals or THEIRS? (Lower = better)</td>
</tr>
</table>

<div class="warning-box">
<strong>Key Insight:</strong> The easiest way to destroy trust? High self-orientation. Focus on THEIR success, not your quota. If they sense you're selling, not helping — trust collapses.
</div>
</div>

<div class="content-section">
<h3>⏰ Proactive vs Reactive Model</h3>
<p>The Proactive CS Model is what separates average from exceptional:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
<div style="padding: 25px; background: rgba(239, 68, 68, 0.1); border-radius: 12px; border: 2px solid rgba(239, 68, 68, 0.3);">
<h4 style="color: #EF4444; margin-top: 0;">❌ Reactive CS</h4>
<ul style="margin: 10px 0 0 0; padding-left: 20px;">
<li>Wait for client to report issues</li>
<li>Respond to complaints</li>
<li>Only talk when asked</li>
<li>Surprised by cancellations</li>
</ul>
</div>

<div style="padding: 25px; background: rgba(16, 185, 129, 0.1); border-radius: 12px; border: 2px solid rgba(16, 185, 129, 0.3);">
<h4 style="color: #10B981; margin-top: 0;">✅ Proactive CS</h4>
<ul style="margin: 10px 0 0 0; padding-left: 20px;">
<li>Check in BEFORE problems arise</li>
<li>Anticipate needs</li>
<li>Schedule regular touchpoints</li>
<li>Know churn signals early</li>
</ul>
</div>
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Build Your CS Foundation</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Trust Audit (5 min)</h4>
<p>Think of a past relationship (client, friend, colleague) where trust was strong or weak. Score them on:</p>
<ul>
<li>Credibility (1-10)</li>
<li>Reliability (1-10)</li>
<li>Intimacy (1-10)</li>
<li>Self-Orientation (1-10)</li>
</ul>
<p>Calculate the Trust Score. Does it match your gut feeling about that relationship?</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Proactive vs Reactive Analysis (5 min)</h4>
<p><strong>Scenario:</strong> A client's website traffic dropped 30% last month. You noticed it, but they haven't mentioned it.</p>
<ol>
<li>Write the REACTIVE response (what most CSMs would do)</li>
<li>Write the PROACTIVE response (what YOU should do)</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Read the CS SOP (10 min)</h4>
<p>Open the <a href="../cs-sop.html" target="_blank" style="color: #8B5CF6;">CS SOP document</a> and read the first 2 sections. Take note of specific processes you'll follow.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned the CS mindset. Now prove your understanding.</p>
<ul>
<li>📝 10 scenario-based questions</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
<li>💡 Questions test JUDGMENT, not just recall</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 Service Offerings</h3>
<p>You must know what we sell to support it.</p>
<ul>
<li><strong>Shopify Dev:</strong> Builds/Speed optimization.</li>
<li><strong>Design:</strong> Branding/UI/UX.</li>
<li><strong>Marketing:</strong> SEO/Paid Ads/Email.</li>
</ul>
</div>

<div class="content-section">
<h3>💎 White Glove Standard</h3>
<p>We don't just "do the work". We curate the experience.</p>
<ul>
<li>Over-communicate.</li>
<li>Anticipate needs.</li>
<li>Surprise and delight.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about offerings</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: ONBOARDING MASTERY</h2>

<div class="content-section">
<h3>🚀 The First 90 Days</h3>
<p>This is where retention is won or lost.</p>
<ul>
<li><strong>Kickoff Call:</strong> Align on goals, timelines, and communication.</li>
<li><strong>Time to Value (TTV):</strong> How fast can we get them a "Quick Win"?</li>
<li><strong>Access:</strong> Get logins immediately. Delays here kill momentum.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about onboarding</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CHURN PREVENTION - Saving Clients Before They Leave</h2>

<div class="content-section">
<h3>🎯 Why Churn Prevention Matters</h3>
<p>Churn is silent. By the time a client says "I want to cancel," they made that decision <strong>weeks ago</strong>. Your job is to spot the warning signs BEFORE they decide to leave.</p>

<div class="warning-box">
<strong>⚠️ The Math of Churn:</strong>
<ul style="margin-bottom: 0;">
<li>Average client = $12,000/year revenue</li>
<li>Average churn = 20% annually = lose 2 of every 10 clients</li>
<li>Each churned client = 3-6 months to replace</li>
<li><strong>Every client saved = $12,000+ protected</strong></li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⚠️ Red Flag Detection System</h3>
<p>Learn to read the silent signals that predict churn:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Risk Level</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Immediate Action</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Ghosting</strong> — No reply to 3+ emails</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">🟡 Medium</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Switch channels (call, Slack). "Just checking in — wanted to make sure nothing fell through the cracks."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>POC Change</strong> — Champion leaves company</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">🔴 HIGH</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schedule intro call with new POC ASAP. Re-sell the value. Treat as new onboarding.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Late Payments</strong> — Invoice overdue 30+ days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">🔴 HIGH</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check in about their business health. Payment issues often signal deeper problems.</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reduced Engagement</strong> — Stopped attending calls</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">🟡 Medium</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ask directly: "I noticed we've had fewer touchpoints — is everything okay?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Competitor Mentions</strong> — "I saw Agency X..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">🔴 HIGH</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Don't panic. Ask: "What attracted you to them? Let me make sure we're meeting that need."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>NPS Decline</strong> — Score dropped 3+ points</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">🟡 Medium</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Schedule a "feedback call" — "I want to make sure we're exceeding expectations."</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🔥 The Save Playbook</h3>
<p>When a client says "I want to cancel," follow this exact sequence:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
<div style="text-align: center; padding: 20px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
<div style="font-size: 2em;">👂</div>
<strong>Step 1: LISTEN</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Let them talk. Don't interrupt. Take notes.</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(6, 182, 212, 0.1); border-radius: 10px; border: 1px solid rgba(6, 182, 212, 0.3);">
<div style="font-size: 2em;">⏸️</div>
<strong>Step 2: PAUSE</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Offer to pause instead of cancel. "Let's freeze for 30 days."</p>
</div>
<div style="text-align: center; padding: 20px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.3);">
<div style="font-size: 2em;">🔄</div>
<strong>Step 3: PIVOT</strong>
<p style="font-size: 0.9em; margin: 5px 0 0 0; color: #64748B;">Change scope: "What if we focused only on X?"</p>
</div>
</div>

<div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0; border-left: 3px solid #8B5CF6;">
<strong>📝 Save Script — The Budget Cut Scenario:</strong><br><br>
<em>"I completely understand — businesses go through different phases. Before we process the cancellation, I have two options that might work better:</em><br><br>
<em>1. <strong>Pause:</strong> We can freeze your engagement for 30-60 days. No charges, but when you're ready, we pick right back up.</em><br><br>
<em>2. <strong>Pivot:</strong> What if we reduced to a maintenance-only package? You keep the relationship active and protected for a fraction of the cost.</em><br><br>
<em>Which of these might work for your situation?"</em>
</div>
</div>

<div class="content-section">
<h3>📊 Churn Risk Matrix</h3>
<p>Score your clients regularly to prioritize intervention:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Factor</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Score 0 (Bad)</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Score 1 (Good)</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response Time</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3+ days to reply</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Same day replies</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meeting Attendance</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Misses calls</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always attends</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">NPS Score</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6 or below</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8 or above</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment Timing</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Late/chasing</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">On time</td>
</tr>
</table>

<div class="highlight-box">
<strong>Score 0-1:</strong> Immediate intervention required<br>
<strong>Score 2-3:</strong> Monitor closely, increase touchpoints<br>
<strong>Score 4:</strong> Healthy — maintain rhythm
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Practice Churn Prevention</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Red Flag Audit (5 min)</h4>
<p>Think of a real client (past or present). Score them on the Churn Risk Matrix. What's their total score (0-4)? What intervention would you recommend?</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Write a Save Script (10 min)</h4>
<p><strong>Scenario:</strong> Client emails: "We've decided to stop all marketing spend for Q4. Please cancel our SEO retainer effective immediately."</p>
<p>Write your response email using the Listen → Pause → Pivot framework. Make it empathetic, professional, and give them 2 alternative options.</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: POC Change Scenario (5 min)</h4>
<p>Your primary contact at a $15,000/year client just emailed you that they're leaving the company next week. Write:</p>
<ol>
<li>Your reply to the outgoing POC (thanking them, asking for intro)</li>
<li>Your intro message to the new POC</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned how to detect and prevent client churn. Now prove your understanding.</p>
<ul>
<li>📝 10 scenario-based questions about churn prevention</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: UPSELLING & EXPANSION</h2>

<div class="content-section">
<h3>📈 Account Expansion</h3>
<p>Selling to happy clients is easy.</p>
<div class="highlight-box">
<strong>The Logic:</strong>
"We built your site (Project). Now you need traffic (SEO Retainer)."
</div>
</div>

<div class="content-section">
<h3>🤝 Trusted Advisor</h3>
<p>Don't "pitch". Recommend solutions to problems they have admitted to you.</p>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about upselling</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: QBRs & REVIEWS</h2>

<div class="content-section">
<h3>📅 Quarterly Business Reviews</h3>
<p>The strategic check-in.</p>
<ul>
<li><strong>Review:</strong> What did we achieve last quarter? (ROI).</li>
<li><strong>Plan:</strong> What are we doing next quarter? (Roadmap).</li>
<li><strong>Feedback:</strong> How can we be better? (NPS).</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about QBRs</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📂 The Tech Stack</h3>
<ul>
<li><strong>HubSpot:</strong> Log every call. If it's not in HubSpot, it didn't happen.</li>
<li><strong>Slack Connect:</strong> Shared channels with clients. Set boundaries (Only M-F).</li>
<li><strong>Loom:</strong> Send video updates instead of long emails.</li>
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
<h2>📚 TASK 8: CONFLICT RESOLUTION</h2>

<div class="content-section">
<h3>🧘‍♀️ Turning Anger into Advocacy</h3>
<p>Mistakes happen. How we handle them defines us.</p>
<ul>
<li><strong>L.A.T.T.E:</strong> Listen, Acknowledge, Take Action, Thank, Explain.</li>
<li><strong>Radical Responsibility:</strong> Own it. Don't blame the dev team. "I will fix this."</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about conflict</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: The Angry Email</h3>
<p><strong>Situation:</strong> "This is unacceptable! The site is down!"</p>
<div class="highlight-box">
<strong>Action:</strong> Call immediately (Don't email). "I am seeing this too. I have the devs on it right now. I will update you every 30 mins until fixed."
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: The Cancellation</h3>
<p><strong>Situation:</strong> "We are cutting budget."</p>
<ul>
<li><strong>Action:</strong> "I understand. Before we cancel, what if we paused for 30 days? Or reduced scope to just maintenance to keep the gains?"</li>
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
<p>You've completed the Customer Success training. This final assessment covers:</p>
<ul>
<li>✅ Retention Strategies</li>
<li>✅ Onboarding Protocols</li>
<li>✅ Upselling Logic</li>
<li>✅ Crisis Management</li>
<li>✅ QBR Structure</li>
<li>✅ Tool Mastery</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your CS Certification.</p>
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
// Testing real-world Client Success judgment and decision-making
const allQuizzes = [
    // Task 1: Mindset - Scenario-Based
    [
        { q: "Client emails you weekly for 3 months, then suddenly stops replying for 2 weeks. What's happening?", o: ["They're happy and busy", "They're probably churning — time for immediate outreach", "Give them space — they'll reach out when ready", "Wait another 2 weeks to be sure"], c: 1 },
        { q: "Client says 'We're happy with the work' but their NPS score is 6 (Passive). What's really going on?", o: ["They're satisfied — trust the words", "Gap between politeness and loyalty — dig deeper", "NPS doesn't matter — focus on renewals", "Nothing — 6 is acceptable"], c: 1 },
        { q: "Your colleague says 'Support fixes problems, CS just does check-in calls.' You correct them by saying:", o: ["True — we do calls and check-ins", "Wrong — CS prevents problems before they happen", "We do both equally", "Support is more important than CS"], c: 1 },
        { q: "It costs 5x more to acquire a new client than to retain one. This means:", o: ["Focus spending on marketing", "Invest more in keeping existing clients happy", "Don't bother with new sales", "Reduce support costs"], c: 1 },
        { q: "Client emails: 'I'm frustrated with delays.' You should respond first by:", o: ["Explaining why delays happened", "Defending the team's workload", "Acknowledging their frustration before anything else", "Offering a discount immediately"], c: 2 },
        { q: "A $3,000/month client and a $15,000/month client both need help. You have time for one call today. What's the right approach?", o: ["$15,000 client — they pay more", "Both deserve equal attention — flip a coin", "Prioritize based on urgency and risk, not just revenue", "$3,000 client — they need more support"], c: 2 },
        { q: "Trust Equation: Trust = (Credibility + Reliability + Intimacy) / Self-Orientation. How do you increase trust?", o: ["Focus only on Credibility — do great work", "Lower Self-Orientation — focus on THEIR goals, not our revenue", "High Intimacy — become best friends", "All three numerators — ignore denominator"], c: 1 },
        { q: "Client says 'Just tell me what to do — I trust you.' This is:", o: ["Dangerous — make them decide", "A sign of strong partnership — but keep them informed", "An invitation to sell more services", "Proof you should take over their business"], c: 1 },
        { q: "Proactive CS calls the client:", o: ["Only when there's a problem", "Only when they call first", "BEFORE problems happen to prevent them", "Once a year for check-in"], c: 2 },
        { q: "You discover a bug affecting the client's site. They haven't noticed yet. What do you do?", o: ["Wait for them to report it", "Fix it silently — no need to worry them", "Tell them immediately — transparency builds trust", "Tell them only if they ask"], c: 2 }
    ],
    // Task 2: Company Knowledge - Scenario-Based
    [
        { q: "Client asks 'What services do you offer besides my Shopify project?' You should know:", o: ["Just refer them to Sales — not your job", "Design, Marketing (SEO/Ads), and Development — cross-sell opportunities", "Nothing — focus on current project only", "Only what's in their contract"], c: 1 },
        { q: "Client pays $8,000 for a Shopify store build. 2 months later they want SEO. This opportunity is:", o: ["For the Sales team only", "An expansion opportunity you should own", "Against policy — separate engagements", "Too soon — wait 6 months"], c: 1 },
        { q: "'White Glove' service means:", o: ["We wear gloves during work", "Premium, curated experience with over-communication", "Basic service at higher price", "Only for enterprise clients"], c: 1 },
        { q: "Client asks 'Why should I work with Digital Heroes vs cheaper agencies?' Your answer:", o: ["We're the cheapest option", "Premium quality + proactive partnership = better ROI", "We need your business", "All agencies are the same"], c: 1 },
        { q: "You learn the client's business is struggling financially. As CS, you should:", o: ["Ignore it — focus on deliverables", "Be proactive — offer flexible payment plans or scope adjustments", "Push harder for upsells to hit quota", "Cancel their project to avoid losses"], c: 1 },
        { q: "Client says 'I never hear from anyone at your company.' What failed?", o: ["Client has unrealistic expectations", "We failed to over-communicate — key to trust", "Sales over-promised", "Nothing — work speaks for itself"], c: 1 },
        { q: "Design team delivered amazing work but client seems distant. Why might this happen?", o: ["Client doesn't appreciate good design", "We forgot to communicate and involve them in the process", "Nothing is wrong", "They're just introverts"], c: 1 },
        { q: "CS bridges Sales and Delivery. This means:", o: ["You do both jobs", "You translate client expectations to team and vice versa", "Sales and Delivery report to you", "You have three roles"], c: 1 },
        { q: "Client's Shopify store launched. They ask about Facebook Ads. Best response:", o: ["That's not my department", "Great idea — let me connect you with our paid media team", "We don't do that", "Do it yourself"], c: 1 },
        { q: "Client says 'I've worked with 5 agencies before, all disappointed me.' Your mindset:", o: ["Red flag — avoid this client", "Opportunity to exceed expectations and earn loyalty", "They're the problem, not agencies", "Normal client behavior"], c: 1 }
    ],
    // Task 3: Onboarding - Scenario-Based
    [
        { q: "You take over a new client relationship. Their kickoff call is in 2 days but you haven't received any background. First step:", o: ["Wait for someone to send info", "Immediately request handoff docs and client history", "Wing it — you're experienced", "Reschedule the call"], c: 1 },
        { q: "During kickoff, client says 'I expect my site to be #1 on Google in 2 weeks.' Correct response:", o: ["Promise to try your best", "Set realistic expectations NOW — SEO takes 6+ months", "Say nothing — let them discover reality later", "Over-promise to win their excitement"], c: 1 },
        { q: "Time To Value (TTV) means:", o: ["How long before we get paid", "How fast the client sees a tangible, positive outcome", "Project timeline", "Time to invoice"], c: 1 },
        { q: "Day 3 of new engagement: client still hasn't provided store access. What do you do?", o: ["Wait patiently — they're busy", "Escalate immediately — delays kill momentum", "Send one reminder and wait", "Start working without access"], c: 1 },
        { q: "Kickoff call agenda should include:", o: ["Only project timeline", "Goals, timeline, communication preferences, immediate next steps", "Small talk only", "Budget discussion"], c: 1 },
        { q: "Client says 'I'm not sure what success looks like for this project.' You should:", o: ["Define it for them and move on", "Spend time together defining measurable success criteria", "Let them figure it out", "Delay the project"], c: 1 },
        { q: "Quick Win within first 2 weeks means:", o: ["Finishing the whole project", "Delivering one visible, positive outcome to build momentum", "Anything you can do quickly", "Cutting corners for speed"], c: 1 },
        { q: "Client missed 3 scheduled calls in a row. Pattern suggests:", o: ["They're very busy — reschedule", "Risk signal — something is wrong with the relationship", "They trust you to handle things", "Normal behavior"], c: 1 },
        { q: "Client's CEO joins kickoff unexpectedly. Best approach:", o: ["Ignore them — focus on your contact", "Adjust agenda to address CEO-level concerns", "Be nervous and stiff", "Ask them to leave"], c: 1 },
        { q: "After kickoff, you should send:", o: ["Nothing — they remember the call", "Recap email with clear action items and deadlines", "Invoice immediately", "Calendar invite for next year"], c: 1 }
    ],
    // Task 4: Churn Prevention - Scenario-Based
    [
        { q: "Client's Point of Contact (POC) just resigned. New person takes over. Risk level:", o: ["No risk — just update the contact", "High risk — new POC may not see value; needs re-onboarding", "Medium — only if they complain", "They'll figure it out"], c: 1 },
        { q: "Client payment is 30 days late. They haven't mentioned issues. What's likely happening?", o: ["Accounting delay — normal", "Possible churn signal — cash problems or value questioning", "They forgot — send invoice again", "Nothing to worry about"], c: 1 },
        { q: "Client emails: 'We need to talk.' Nothing else. Your first action:", o: ["Panic and prepare for the worst", "Respond immediately to schedule a call — show you care", "Wait until they explain more", "Prepare a discount offer"], c: 1 },
        { q: "'Ghosting' client hasn't replied to 3 emails in 2 weeks. Next step:", o: ["Send a 4th email", "Call directly OR visit a different communication channel", "Remove them from your pipeline", "Send invoice as a test"], c: 1 },
        { q: "Client says 'We're cutting our marketing budget by 50%.' Best response:", o: ["Accept the reduction and move on", "Explore a 'maintenance mode' reduced engagement to keep the relationship", "Fight for full budget with hard sell", "Cancel immediately"], c: 1 },
        { q: "Save Playbook: Listen → Pause → Pivot. 'Pause' means:", o: ["Stop talking forever", "Offer to pause the engagement rather than cancel completely", "Take a bathroom break", "Pause the call to think"], c: 1 },
        { q: "Client says 'I'm not seeing results.' You've been working 2 weeks. Appropriate response:", o: ["We need 3-6 months to see results — be patient", "Acknowledge their concern, explain realistic timeline, show early progress", "Results are guaranteed — wait longer", "Offer a refund"], c: 1 },
        { q: "You detect that client's 'champion' (internal advocate) is leaving the company. Impact:", o: ["None — just update contact", "Major churn risk — rebuild relationships with remaining stakeholders", "Wait for new champion to emerge", "Pause work until they hire someone"], c: 1 },
        { q: "Client complains: 'Your team keeps missing deadlines.' Root cause analysis first:", o: ["Apologize and promise to do better", "Investigate if it's scope creep, resource issues, or communication gap", "Blame the dev team", "Offer discount"], c: 1 },
        { q: "Client renewal is in 30 days. NPS is 7 (Passive), no complaints but no enthusiasm. Plan:", o: ["Send renewal invoice — they'll probably renew", "Proactive outreach to understand gaps and strengthen relationship before renewal", "Nothing — if they want to leave they'll tell us", "Offer discount to lock them in"], c: 1 }
    ],
    // Task 5: Upselling & Expansion - Scenario-Based
    [
        { q: "Client's Shopify project completed successfully. They're happy. When is the right time to discuss SEO?", o: ["Wait 6 months — don't be pushy", "During the success conversation — 'What's next for growth?'", "Never — that's Sales' job", "Day 1 before project starts"], c: 1 },
        { q: "Client asks: 'Should we do Facebook Ads or Google Ads?' As a Trusted Advisor, you:", o: ["Sell them both to maximize revenue", "Recommend the channel that best fits their business goals", "Say you don't know", "Let them decide without input"], c: 1 },
        { q: "'Project to Retainer' means:", o: ["Project failed so we give maintenance", "Converting one-time projects into ongoing monthly relationships", "Retainers are short projects", "They're the same thing"], c: 1 },
        { q: "Client's revenue increased 30% after your work. How do you leverage this?", o: ["Celebrate quietly — don't be salesy", "Document ROI for case study AND discuss expanding what's working", "Ask for more money immediately", "Do nothing — let results speak"], c: 1 },
        { q: "Expansion opportunity spotted: client needs email marketing but it's not in scope. You should:", o: ["Ignore it — stay in your lane", "Mention it as a growth opportunity; let them decide", "Add it to their invoice without asking", "Talk to their competitors about it"], c: 1 },
        { q: "Client says 'We don't have budget for more services.' Best response:", o: ["Okay, thanks anyway", "Understand their priorities; plant seed for future when budget frees up", "Push harder — budgets can change", "Give up completely"], c: 1 },
        { q: "Upsell should feel:", o: ["Pushy — sales is about pressure", "Natural — helping them achieve MORE of their goals", "Awkward — necessary evil", "Desperate — we need revenue"], c: 1 },
        { q: "Client asks for a discount on additional services. Your leverage:", o: ["None — give the discount", "Proven ROI from current work justifies full price", "We need the money more", "Match competitor pricing"], c: 1 },
        { q: "Client has 3 Shopify stores. We work on 1. Expansion opportunity:", o: ["Not our business", "Offer to manage all 3 with a multi-store package", "Wait for them to ask", "Refer to competitor"], c: 1 },
        { q: "Cross-sell vs Upsell: 'Cross-sell' means:", o: ["Selling more of the same service", "Selling a DIFFERENT related service (Design → SEO)", "Selling to competitors", "Giving discounts"], c: 1 }
    ],
    // Task 6: QBRs & Reviews - Scenario-Based
    [
        { q: "QBR stands for Quarterly Business Review. Purpose is:", o: ["Invoice review", "Strategic alignment: review results, plan ahead, strengthen relationship", "Project kickoff", "Annual celebration"], c: 1 },
        { q: "QBR deck starts with 'Review' section. What should this contain?", o: ["Invoice history", "Results achieved: KPIs, ROI, wins from last quarter", "Team bios", "Future plans only"], c: 1 },
        { q: "Client's CEO asks 'Is this worth the investment?' Best proof:", o: ["Your opinion that it's valuable", "Concrete ROI data showing business impact", "Industry benchmarks", "Promise of future results"], c: 1 },
        { q: "During QBR, client reveals new company priorities that change everything. You should:", o: ["Stick to original plan — we agreed on it", "Adapt strategy to align with their new priorities", "Ignore it — QBR is about reviewing past", "Suggest they work with a different agency"], c: 1 },
        { q: "QBR 'Plan' section should include:", o: ["Only what we want to sell them", "Roadmap for next quarter aligned to THEIR goals", "Original project scope", "Nothing — let them decide"], c: 1 },
        { q: "Net Promoter Score (NPS) during QBR is 9. What does this mean?", o: ["Average client — nothing special", "Promoter — they'd recommend you; strong relationship", "At risk — need immediate intervention", "Perfect — no follow-up needed"], c: 1 },
        { q: "Client mentions competitor doing similar work cheaper. QBR response:", o: ["Match the price immediately", "Reinforce unique value and ROI; cheaper isn't always better", "Dismiss their concern", "Tell them to switch"], c: 1 },
        { q: "QBR reveals client engagement dropped 40% compared to last quarter. You should:", o: ["Ignore it — focus on positives", "Address it head-on: 'I noticed engagement dropped — what changed?'", "Hope it rebounds next quarter", "Blame their team"], c: 1 },
        { q: "After QBR, you should send:", o: ["Nothing — they were at the meeting", "Summary email with key points, action items, and next steps", "Invoice immediately", "Thank you card"], c: 1 },
        { q: "QBR frequency for your biggest clients should be:", o: ["Annual — too much work otherwise", "Quarterly at minimum; monthly check-ins for largest accounts", "When they complain", "Ask them what they prefer"], c: 1 }
    ],
    // Task 7: Tools & Systems - Scenario-Based
    [
        { q: "You had a great call with a client but forgot to log it in HubSpot. Risk:", o: ["No risk — you remember what happened", "Major risk — if not in CRM, it didn't happen; team lacks context", "Minor — you'll update later", "CRM is optional"], c: 1 },
        { q: "Slack Connect channel with client is getting spammy with internal noise. Best practice:", o: ["Let it happen — they're part of the team", "Keep client channels focused; internal discussions stay internal", "Remove the client from Slack", "Ignore the noise"], c: 1 },
        { q: "Client prefers phone calls but you prefer email. You should:", o: ["Insist on email — it's more efficient", "Adapt to their preference — meet clients where they are", "Compromise with Slack", "Stop communicating"], c: 1 },
        { q: "Loom video updates vs text email. When is Loom better?", o: ["Never — email is faster", "When showing is clearer than telling (walkthroughs, complex updates)", "Always — it's more personal", "Only for technical people"], c: 1 },
        { q: "Client messages you on Slack at 11PM on Saturday. Response?", o: ["Reply immediately — client is king", "Acknowledge within business hours — boundaries matter", "Ignore permanently", "Reply but be annoyed"], c: 1 },
        { q: "New team member takes over account but HubSpot notes are empty. What's the impact?", o: ["They'll figure it out", "Lost context, poor handover, client may need to repeat themselves", "No impact — start fresh", "Blame the previous CSM"], c: 1 },
        { q: "Email template vs custom email: when to use templates?", o: ["Always — saves time", "For repetitive communications; customize for unique situations", "Never — clients feel ignored", "Only for new clients"], c: 1 },
        { q: "Client asks 'Can you share access to our HubSpot notes?' Your answer:", o: ["Yes — transparency always", "Depends on content; some internal notes may not be appropriate", "Never — it's confidential", "Ask your manager"], c: 1 },
        { q: "CRM says client hasn't been contacted in 45 days. What does this indicate?", o: ["Client is self-sufficient", "Relationship at risk — proactive outreach overdue", "Account is healthy", "Normal for stable clients"], c: 1 },
        { q: "Video calls vs audio-only calls. Research shows:", o: ["No difference", "Video builds stronger relationships — face-to-face connection matters", "Audio is better — less distracting", "Clients prefer audio"], c: 1 }
    ],
    // Task 8: Conflict Resolution - Scenario-Based
    [
        { q: "Client angrily emails: 'This is UNACCEPTABLE. Call me NOW.' First action:", o: ["Reply with defensive explanation", "Call immediately — urgency matters when emotions are high", "Wait for them to calm down", "Forward to your manager"], c: 1 },
        { q: "LATTE conflict framework: L-A-T-T-E. The 'L' stands for:", o: ["Learn", "LISTEN — let them fully express their frustration first", "Lead", "Love"], c: 1 },
        { q: "Client says 'Your developers are incompetent.' Correct response:", o: ["Agree to keep them happy", "Defend the team angrily", "Acknowledge frustration, own the issue, don't blame internally", "Apologize and fire the developer"], c: 2 },
        { q: "'Radical Responsibility' means:", o: ["Blame others louder", "Own the problem even if it wasn't 'your fault' — the client doesn't care whose fault it is", "Responsible for everything forever", "Blame the client tactfully"], c: 1 },
        { q: "Major bug caused client to lose $2,000 in sales. Make-good options:", o: ["Apologize only — we're not responsible", "Credit next invoice, rush fix, over-communicate until resolved", "Give $2,000 cash", "Deny the bug existed"], c: 1 },
        { q: "Client CC's your CEO on an angry email. This signals:", o: ["Normal escalation behavior", "Severe breakdown — they've lost trust in you", "They like your CEO", "Nothing — happens all the time"], c: 1 },
        { q: "After fixing a major issue, client is still cold and distant. What's missing?", o: ["Nothing — they got what they wanted", "Emotional repair — the relationship needs rebuilding beyond the fix", "A bigger discount", "More apologies"], c: 1 },
        { q: "Client threatens to leave if issue isn't resolved in 24 hours. It's a 3-day fix. Strategy:", o: ["Lie about the timeline", "Explain real timeline, show progress, communicate every 4-6 hours", "Miss the deadline silently", "Let them leave"], c: 1 },
        { q: "Team made a mistake. Client is furious. You should NOT:", o: ["Apologize sincerely", "Blame specific team members to the client", "Explain next steps", "Offer make-good"], c: 1 },
        { q: "Conflict resolved. How do you prevent similar issues?", o: ["Hope it doesn't happen again", "Document root cause, implement process change, follow up with client", "Blame the client later", "Move on immediately"], c: 1 }
    ],
    // Task 9: Practice Scenarios - Complex Real-World Cases
    [
        { q: "Client's site is DOWN at 3AM. You see the alert but it's not business hours. What do you do?", o: ["Wait until morning — it's their fault", "Alert the dev team immediately; text/call client with status update", "Send an email — async is fine", "Ignore until morning"], c: 1 },
        { q: "Client emails: 'We've decided to cancel effective immediately.' First response:", o: ["Send cancellation paperwork", "Ask for a call to understand why — every cancel is a learning opportunity", "Accept and move on", "Argue why they're wrong"], c: 1 },
        { q: "During QBR, client reveals they're evaluating 3 competitors. Your response:", o: ["Pretend you didn't hear it", "Acknowledge it: 'What are you hoping they'll offer that we don't?'", "Match any competitor price", "Get defensive"], c: 1 },
        { q: "Angry client sends ALL-CAPS EMAIL about minor issue. Best de-escalation:", o: ["Reply in all-caps back", "Switch to phone — tone gets lost in text", "Ignore the anger", "Reply with formal corporate language"], c: 1 },
        { q: "New client asks 'Can you guarantee we'll get 10x ROI?' Ethical answer:", o: ["Yes — lock in the sale", "No — set realistic expectations; explain what factors drive results", "Maybe — see how it goes", "Results aren't guaranteed at all"], c: 1 },
        { q: "Client's internal team is sabotaging your project (jealousy). Strategy:", o: ["Complain to client's CEO", "Build relationships with saboteurs; make them allies not enemies", "Ignore and push through", "Quit the account"], c: 1 },
        { q: "Project completed. Client 'happy' but no referral or testimonial. Why might this be?", o: ["They're too busy", "They're politely satisfied but not delighted — room to exceed expectations", "Testimonials are extra work", "They're introverts"], c: 1 },
        { q: "Client asks for service outside your expertise (legal advice). Correct action:", o: ["Give advice anyway to help", "Clearly state it's not your area; offer to connect them with someone qualified", "Ignore the request", "Google the answer"], c: 1 },
        { q: "Your colleague left the company mid-project. New accounts landed on you. First priority:", o: ["Wait for clients to reach out", "Proactive outreach to all inherited accounts immediately", "Read old emails eventually", "Hope for the best"], c: 1 },
        { q: "High-value client asks for scope changes that will lose money. How do you handle it?", o: ["Say yes to everything — keep them happy", "Discuss trade-offs: 'We can do X, but Y will need to shift'", "Refuse completely", "Do the work but complain internally"], c: 1 }
    ],
    // Task 10: Final - 20 Challenging Scenario Questions
    [
        { q: "Client's POC resigned. No response from anyone at the company for 2 weeks. Next action:", o: ["Wait for them to contact you", "Attempt multiple channels (email, phone, LinkedIn) to find new contact", "Close the account", "Send invoice and hope"], c: 1 },
        { q: "NPS 3 (Detractor). Client hasn't complained but score is terrible. What's likely?", o: ["Survey mistake", "Silent dissatisfaction — proactive outreach needed immediately", "They're fine — don't trust surveys", "Competitor influence"], c: 1 },
        { q: "Client asks for 40% discount on renewal. Your annual revenue from them is $50K. Negotiation approach:", o: ["Give the discount — retention matters", "Understand WHY; propose reduced scope instead of just cheaper price", "Refuse and lose them", "Give 50% discount"], c: 1 },
        { q: "Project delivered on time, on budget. Client gives NPS 6. Gap analysis:", o: ["They're ungrateful", "Delivery is table stakes; experience and partnership need improvement", "NPS is broken", "Nothing wrong"], c: 1 },
        { q: "Client's CEO says your work is 'fine' but you sense something's off. Trust your gut?", o: ["No — take words at face value", "Yes — probe deeper: 'What would make this excellent instead of fine?'", "They're just busy", "It's their personality"], c: 1 },
        { q: "You made a mistake that cost the client money. Manager says 'don't tell them.' You should:", o: ["Follow manager's advice", "Be transparent — hiding mistakes destroys trust when discovered", "Quit your job", "Tell a colleague first"], c: 1 },
        { q: "Client says 'We love working with you, but we're shrinking budget 30%.' Best retention play:", o: ["Accept reduction and do less work", "Propose 'maintenance mode' to stay involved; protect relationship for future growth", "Push for same budget harder", "Let them go"], c: 1 },
        { q: "Three clients at risk of churning this month. You can deeply focus on one. Prioritization:", o: ["Biggest revenue first", "Highest likelihood of saving based on signals and relationship strength", "Random selection", "Ignore all three"], c: 1 },
        { q: "Client missed 5 calls in 3 weeks. Your interpretation:", o: ["They're very busy", "Critical churn signal — escalate to leadership and try alternative channels", "Respectful distance", "They trust you to handle things"], c: 1 },
        { q: "Client loves you personally but hates another team member. How do you address this?", o: ["Hide the team member from all calls", "Address the concern directly; protect team while solving the issue", "Fire the team member", "Let client complain freely"], c: 1 },
        { q: "You discover client pays 40% more than a similar account. They don't know. Ethics:", o: ["Tell them — they deserve to know", "Pricing is business confidential; ensure they're getting value for THEIR investment", "Reduce their price secretly", "Charge the other client more"], c: 1 },
        { q: "Client's business is failing (industry news). Their contract renews in 60 days. You should:", o: ["Wait for renewal conversation", "Proactively discuss their situation; offer flexible options before they ask", "Push for early renewal lock-in", "Ghost them"], c: 1 },
        { q: "Anonymous feedback: 'Our CSM doesn't understand our business.' Mirror moment:", o: ["Feedback is wrong — I know their business", "Honest reflection — am I truly learning their context or just executing tasks?", "Find who said it", "Ignore anonymous feedback"], c: 1 },
        { q: "Client says 'Every agency says they're different but they're all the same.' Response:", o: ["We're truly different, trust me", "Show don't tell — let our partnership prove the difference", "All agencies are similar honestly", "Give up on differentiation"], c: 1 },
        { q: "Major project success. Client is thrilled. You want to ask for referral. Timing:", o: ["Wait 6 months to not seem pushy", "At the peak of happiness — strike while iron is hot", "Never ask — let it happen naturally", "Only if they offer first"], c: 1 },
        { q: "Client says competitor offered the same service for 50% less. Your analysis:", o: ["Match the price immediately", "Understand what 'same service' means; cheaper often means different", "Let them go to competitor", "Say competitor is lying"], c: 1 },
        { q: "Internal team says client is 'impossible to work with.' Client says 'team doesn't care.' Reality:", o: ["Client is the problem", "Communication breakdown — both sides need mediation", "Team is the problem", "End the relationship"], c: 1 },
        { q: "QBR reveals client achieved 150% of goals. They still seem unhappy. Possible reason:", o: ["They want more", "Goals were wrong — we're measuring/celebrating the wrong things", "They're greedy", "Nothing we can do"], c: 1 },
        { q: "Client's billing contact changed. New person questions every invoice. Approach:", o: ["Defensive stance — we earned this", "Proactive relationship building; help them understand value before next invoice", "Ignore and bill anyway", "Reduce prices to avoid questions"], c: 1 },
        { q: "Legacy client paying below market rate. Company policy: raise prices. Your relationship:", o: ["Surprise them with new pricing", "Have honest conversation: explain changes, give options, maintain trust", "Grandfather them forever", "Lose the client secretly"], c: 1 }
    ]
];
