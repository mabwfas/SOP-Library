// Finance Executive Training Data
// Complete training content for Finance certification
// UPGRADED: Expanded Lessons and Study Guides (Text Only)

const trainingTasks = [
    {
        id: 1,
        title: "Financial Mindset",
        description: "Guardian of Profit",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize 'Profit First' mentality",
            "🛡️ Understand we are 'Guardians of Net Income'",
            "🚀 Learn the difference between 'Cash' and 'Profit'"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Study the revenue streams of Media vs Agency",
            "💎 Understand high-ticket margins",
            "📢 Learn how Finance supports growth"
        ]
    },
    {
        id: 3,
        title: "P&L Mastery",
        description: "Reading the Scoreboard",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "📊 Anatomy of a Profit & Loss Statement",
            "📉 Gross Margin vs Net Margin",
            "📝 EBITDA explained"
        ]
    },
    {
        id: 4,
        title: "Cash Flow Management",
        description: "Cash is Oxygen",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "💧 The Cash Conversion Cycle",
            "📅 Managing Accounts Payable (AP) vs Receivable (AR)",
            "⚠️ Warning signs of a cash crunch"
        ]
    },
    {
        id: 5,
        title: "Unit Economics",
        description: "Scalability Science",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📈 CAC (Customer Acquisition Cost)",
            "💰 LTV (Lifetime Value)",
            "⚖️ LTV:CAC Ratio (Target > 3:1)"
        ]
    },
    {
        id: 6,
        title: "Budgeting & Forecasting",
        description: "Predicting the Future",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🔮 Zero-Based Budgeting",
            "📅 Variance Analysis (Budget vs Actual)",
            "🚀 Runway calculation"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "Finance Tech Stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📂 QuickBooks/Xero basics",
            "💳 Brex/Ramp for expense management",
            "📊 Excel/Google Sheets mastery"
        ]
    },
    {
        id: 8,
        title: "Compliance & Tax",
        description: "Staying Safe",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🏛️ Sales Tax Nexus",
            "📝 1099 vs W2 classification",
            "📅 Key filing deadlines"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'Cash Crunch' emergency",
            "📝 Approve/Deny expense requests",
            "🤝 audit a project's profitability"
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
            "🎉 Get ready to manage millions!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: FINANCIAL MINDSET - Guardian of the House</h2>

<div class="content-section">
<h3>🎯 Why Are You Here?</h3>
<p>Finance is not about counting money. It's about <strong>telling money where to go</strong>. You are the guardian of the company's financial health — and in a fast-moving agency, that's a critical strategic role.</p>

<div class="warning-box">
<strong>⚠️ The Uncomfortable Truth:</strong><br>
Most businesses don't fail because of bad products. They fail because they <strong>run out of cash</strong>. Your job is to make sure that never happens here.
<p style="margin-top: 10px;">Revenue makes headlines. Profit pays salaries. <strong>Cash keeps the lights on.</strong></p>
</div>
</div>

<div class="content-section">
<h3>💡 The Trinity of Financial Health</h3>
<div class="highlight-box" style="text-align: center; font-size: 1.2em;">
<strong>Revenue is vanity. Profit is sanity. Cash is king.</strong>
</div>

<p>Understand what each means:</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Tells You</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Danger Zone</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Revenue</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Total money coming in</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">High revenue + low profit = burning cash</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Profit</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money left after expenses</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Profitable on paper but no cash = timing problem</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cash</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money in the bank TODAY</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No cash = can't pay salaries = game over</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🛡️ Your Three Core Responsibilities</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
<div style="padding: 25px; background: rgba(16, 185, 129, 0.1); border-radius: 12px; border: 2px solid rgba(16, 185, 129, 0.3);">
<h4 style="color: #10B981; margin-top: 0;">💰 Direct Money</h4>
<p>We don't just "count" money. We decide where every dollar goes. Budget allocation is strategic decision-making.</p>
</div>

<div style="padding: 25px; background: rgba(6, 182, 212, 0.1); border-radius: 12px; border: 2px solid rgba(6, 182, 212, 0.3);">
<h4 style="color: #06B6D4; margin-top: 0;">⚡ Enable Speed</h4>
<p>When a team needs resources NOW, finance shouldn't be a blocker. Have the info ready so decisions happen fast.</p>
</div>

<div style="padding: 25px; background: rgba(239, 68, 68, 0.1); border-radius: 12px; border: 2px solid rgba(239, 68, 68, 0.3);">
<h4 style="color: #EF4444; margin-top: 0;">🚨 Protect the House</h4>
<p>Detect risks before they become crises. See the cash crunch coming 3 months out, not 3 days.</p>
</div>
</div>
</div>

<div class="content-section">
<h3>📊 Profit First Philosophy</h3>
<p>Most businesses: <strong>Revenue - Expenses = Profit</strong> (hope for leftovers)</p>
<p>Digital Heroes: <strong>Revenue - Profit = Expenses</strong> (profit is non-negotiable)</p>

<div class="highlight-box">
<strong>Expense Discipline Rule:</strong><br>
Every dollar spent must have an ROI. If it doesn't bring back >$1, why are we spending it?
<ul style="margin: 10px 0 0 0;">
<li>❌ "We need this software" → ✅ "This software will save 10hrs/week = $400/month value"</li>
<li>❌ "This is nice to have" → ✅ "What's the ROI? If none, it waits."</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎯 The Financial Mindset Checklist</h3>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Non-Financial Mindset</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Financial Mindset</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We made a lot of sales this month!"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How much PROFIT did those sales generate?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We need this tool — it's only $50/month"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What value does this tool return? Who approved it?"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Client will pay eventually"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Every day AR ages, our cash position weakens"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Finance is boring paperwork"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Finance is strategic intelligence for growth"</td>
</tr>
</table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Build Your Financial Foundation</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: ROI Thought Exercise (5 min)</h4>
<p>Think of a tool/expense the company uses. Calculate:</p>
<ol>
<li>Annual cost of the tool</li>
<li>Hours saved per week</li>
<li>Value of those hours (hourly rate × hours)</li>
<li>Annual value created</li>
<li>Is ROI positive? (Value > Cost?)</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Revenue vs Profit Analysis (5 min)</h4>
<p><strong>Scenario:</strong> A project brought in $10,000 in revenue. But it required:</p>
<ul>
<li>$3,000 in developer time</li>
<li>$500 in software/tools</li>
<li>$1,500 in project management time</li>
</ul>
<p>Calculate the profit and profit margin. Is this a healthy project?</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Read the Finance SOP (10 min)</h4>
<p>Open the <a href="../finance-sop.html" target="_blank" style="color: #8B5CF6;">Finance SOP document</a> and read:</p>
<ul>
<li>Section 1: P&L Overview</li>
<li>Section 3: Cash Flow Management</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned the finance mindset. Now prove your understanding.</p>
<ul>
<li>📝 10 questions about financial thinking</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 Revenue Streams</h3>
<ul>
<li><strong>Agency Arm:</strong> Service revenue. High margin on labor, low scalability.</li>
<li><strong>Media Arm:</strong> Ad revenue/Sponsorships. Extremely high margin, high scalability.</li>
</ul>
</div>

<div class="content-section">
<h3>💎 High Ticket Margins</h3>
<p>We charge premium prices because we deliver premium results. This allows us to pay premium salaries.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Model Master</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Margin Calculator (5 min)</h4>
        <p><strong>Scenario:</strong> We sell a Website for $10,000.</p>
        <ul>
            <li>Developer Cost: $3,000</li>
            <li>PM Cost: $1,000</li>
            <li>Hosting: $100</li>
        </ul>
        <p>Calculate the <strong>Gross Profit</strong> and <strong>Gross Margin %</strong>.</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Pitch the Premium (5 min)</h4>
        <p>A new employee asks: "Why are our prices so high?" Write a 1-sentence answer explaining how Price = Value = Salaries.</p>
    </div>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: P&L MASTERY</h2>

<div class="content-section">
<h3>📊 Reading the Scoreboard</h3>
<p>The P&L tells the story of the business.</p>
<ul>
<li><strong>Top Line:</strong> Revenue (Sales).</li>
<li><strong>COGS:</strong> Cost of Goods Sold (Direct labor/hosting).</li>
<li><strong>Gross Profit:</strong> Revenue - COGS. (Must be >70% for us).</li>
<li><strong>OpEx:</strong> Operating Expenses (Rent, Software, Admin).</li>
<li><strong>Bottom Line:</strong> Net Income (What we keep).</li>
</ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: P&L Analyst</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Spot the Error (10 min)</h4>
        <p>You review a P&L draft. You see "Office Rent" listed under COGS. Is this correct? Why or why not?</p>
        <p><em>(Hint: Does rent change if we sell 1 more website?)</em></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Calculate EBITDA (5 min)</h4>
        <ul>
            <li>Net Income: $50,000</li>
            <li>Interest: $2,000</li>
            <li>Taxes: $10,000</li>
            <li>Depreciation: $5,000</li>
            <li>Amortization: $0</li>
        </ul>
        <p>What is the EBITDA?</p>
    </div>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CASH FLOW MANAGEMENT - The Lifeblood of the Business</h2>

<div class="content-section">
<h3>💧 Cash is Oxygen</h3>
<div class="warning-box">
<strong>⚠️ A profitable business can die if it runs out of cash.</strong>
<p>Profit is on paper. Cash is in the bank. You can't pay salaries with invoices.</p>
</div>
</div>

<div class="content-section">
<h3>📊 AR vs AP Management</h3>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Is</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Your Goal</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>AR (Accounts Receivable)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money clients owe us</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #22C55E;"><strong>Collect FAST</strong> (< 14 days)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>AP (Accounts Payable)</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money we owe vendors</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;"><strong>Pay ON TIME</strong> (not early)</td>
</tr>
</table>

<div class="highlight-box">
<strong>The Golden Rule:</strong> Money should come IN faster than it goes OUT. If AR > AP for too long, you can't make payroll.
</div>
</div>

<div class="content-section">
<h3>📅 Weekly Cash Flow Review</h3>
<p>Every week, check:</p>
<ul>
<li><strong>Opening Balance:</strong> What we started with</li>
<li><strong>Expected Inflows:</strong> Payments due this week (from Fiverr, clients)</li>
<li><strong>Expected Outflows:</strong> Salaries, subscriptions, bills due</li>
<li><strong>Projected Close:</strong> What we'll end with</li>
</ul>

<div class="warning-box">
<strong>⚠️ Cash Crunch Danger Zone:</strong>
<p>If projected close is less than 2 weeks of payroll, escalate immediately to leadership.</p>
</div>
</div>

<div class="content-section">
<h3>⚡ Collection Best Practices</h3>
<ol>
<li><strong>Day 1:</strong> Send invoice same day as delivery</li>
<li><strong>Day 7:</strong> Friendly reminder if not paid</li>
<li><strong>Day 14:</strong> Second reminder, flag to PM</li>
<li><strong>Day 21:</strong> Escalate to senior team</li>
<li><strong>Day 30+:</strong> Consider collection actions</li>
</ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Master Cash Flow Analysis</h3>
<p><strong>Before taking the quiz, complete these exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Cash Crunch Scenario (10 min)</h4>
<p>Scenario: Opening balance is ₹5 lakhs. Expected inflows this week: ₹3 lakhs. Expected outflows: Payroll ₹8 lakhs, subscriptions ₹50K.</p>
<p>Questions:</p>
<ol>
<li>What's the projected close?</li>
<li>Is this a danger zone?</li>
<li>What action would you take?</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Write a Collection Email (10 min)</h4>
<p>Write a friendly Day 7 reminder email for an invoice that hasn't been paid. It should be:</p>
<ul>
<li>Professional but warm</li>
<li>Include the invoice number and amount</li>
<li>Provide payment options</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Read the Finance SOP (10 min)</h4>
<p>Open the <a href="../finance-sop.html" target="_blank" style="color: #8B5CF6;">Finance SOP document</a> and read:</p>
<ul>
<li>Cash Flow Management section</li>
<li>AR Collection Procedures section</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about cash flow</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: UNIT ECONOMICS</h2>

<div class="content-section">
<h3>📈 Scalability Science</h3>
<ul>
<li><strong>CAC:</strong> Cost to acquire a customer (Ads + Sales Comm).</li>
<li><strong>LTV:</strong> How much they pay us over time.</li>
</ul>
<div class="highlight-box">
<strong>The Golden Ratio:</strong> LTV > 3x CAC.
<p>If we spend $100 to get a client, we must make at least $300.</p>
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Growth Engineer</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Calculate CAC (5 min)</h4>
        <p>We spent $5,000 on ads. We got 10 new clients.</p>
        <p>What is our CAC?</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Analyze Ratio (5 min)</h4>
        <p>CAC is $500. Average client pays us $1,200 total.</p>
        <p>LTV:CAC Ratio is 2.4:1.</p>
        <p>Is this Good, Bad, or OK? Should we scale ads?</p>
    </div>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: BUDGETING & FORECASTING</h2>

<div class="content-section">
<h3>🔮 Predicting the Future</h3>
<ul>
<li><strong>Zero-Based Budgeting:</strong> Start from $0 every quarter. Justify every expense again.</li>
<li><strong>Variance Analysis:</strong> Did we spend what we said we would? Why not?</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Runway</h3>
<p>Cash in Bank / Monthly Burn Rate = Months of Life left.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Forecaster</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Runway Check (5 min)</h4>
        <p>Bank Balance: $40,000.</p>
        <p>Monthly Expenses (Burn): $15,000.</p>
        <p>What is our Runway? Are we in danger? (<6 months is danger).</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: The Cut (10 min)</h4>
        <p>We need to cut burn by $2,000/month. Look at this list:</p>
        <ul>
            <li>Office Snacks: $300</li>
            <li>Unused Zoom Seats: $200</li>
            <li>Marketing Assistant (Contractor): $1,500</li>
            <li>Production Server: $500</li>
        </ul>
        <p>What do you cut and why?</p>
    </div>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📂 The Tech Stack</h3>
<ul>
<li><strong>QuickBooks:</strong> The ledger of truth.</li>
<li><strong>Excel/Sheets:</strong> Where analysis happens. VLOOKUP is mandatory.</li>
<li><strong>Brex:</strong> Corporate cards. Controls spending limits.</li>
<li><strong>Stripe:</strong> Payment processing.</li>
</ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Tool Master</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Expense Categorization (5 min)</h4>
        <p>Match the expense to the tool:</p>
        <ul>
            <li>Client paid invoice → ? (Stripe/QuickBooks)</li>
            <li>Buying team lunch → ? (Brex)</li>
            <li>Modeling growth forecast → ? (Excel)</li>
            <li>Generating P&L header → ? (QuickBooks)</li>
        </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Excel Audit (5 min)</h4>
        <p>Which Excel function would you use to find a client's specific payment amount from a list of 1000 transactions?</p>
    </div>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: COMPLIANCE & TAX</h2>

<div class="content-section">
<h3>🏛️ Playing by the Rules</h3>
<ul>
<li><strong>Sales Tax Nexus:</strong> Where do we have physical presence?</li>
<li><strong>1099 vs W2:</strong> Contractors vs Employees. Getting this wrong causes huge fines.</li>
</ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Compliance Officer</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Classification Test (5 min)</h4>
        <p>Worker A: Works 9-5, uses company laptop, managed daily. (W2 or 1099?)</p>
        <p>Worker B: Uses own laptop, paid per project, sets own hours. (W2 or 1099?)</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Nexus Check (5 min)</h4>
        <p>We hired a remote employee in Texas. Do we now have "Nexus" in Texas? What does that mean for Sales Tax?</p>
    </div>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: Cash Crunch</h3>
<p><strong>Situation:</strong> Client delays payment 30 days. Payroll is in 5 days.</p>
<div class="highlight-box">
<strong>Action:</strong> Chase AR immediately. Pause discretionary OpEx. Draw on credit line if needed.
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: ROI Analysis</h3>
<p><strong>Situation:</strong> Marketing wants $10k for a new campaign.</p>
<ul>
<li><strong>Action:</strong> Ask for projected CAC and LTV. If LTV:CAC < 3, reject.</li>
</ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: CFO Simulator</h3>
    <p><strong>Before taking the quiz, complete these exercises:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: The "No" Email (10 min)</h4>
        <p>Draft an email to the Marketing Manager rejecting their $2,000 tool request because the ROI isn't clear.</p>
        <p>Keep it professional but firm on the "Profit First" principle.</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Price Increase Defense (10 min)</h4>
        <p>A client complains about a 5% inflation price increase.</p>
        <p>Write a script explaining that this allows us to retain top talent (W2 employees) who work on their account.</p>
    </div>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations!</h3>
<p>You've completed the Finance Executive training. This final assessment covers:</p>
<ul>
<li>✅ P&L Analysis</li>
<li>✅ Cash Flow Management</li>
<li>✅ Unit Economics (CAC/LTV)</li>
<li>✅ Budgeting Protocols</li>
<li>✅ Tools & Compliance</li>
<li>✅ Risk Management</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your Finance Certification.</p>
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Final Audit</h3>
    <p><strong>One final check before you're certified:</strong></p>
    
    <div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Risk Assessment (20 min)</h4>
        <p>Look at the company's mock dashboard (imagine one):</p>
        <ul>
            <li>Runway: 8 months</li>
            <li>LTV:CAC: 2.1</li>
            <li>AR > 60 days: $20,000</li>
        </ul>
        <p>Identify the BIGGEST risk here and write a 3-bullet action plan to fix it.</p>
    </div>
</div>
`;

// Quiz Questions
const allQuizzes = [
    // Task 1: Mindset
    [
        { q: "Profit is:", o: ["Vanity", "Sanity/Goal", "Optional", "Bad"], c: 1 },
        { q: "Revenue is:", o: ["Vanity/Ego", "Sanity", "Profit", "Cash"], c: 0 },
        { q: "Cash is:", o: ["King/Oxygen", "Trash", "Unimportant", "Same as profit"], c: 0 },
        { q: "Expense rule:", o: ["Spend freely", "ROI > $1", "Don't spend", "Guess"], c: 1 },
        { q: "We are guardians of:", o: ["Fun", "Net Income/Profit", "Nothing", "Snacks"], c: 1 },
        { q: "Speed enabled by:", o: ["Resource availability", "Slowing checks", "Bureaucracy", "None"], c: 0 },
        { q: "Risk detection:", o: ["Ignore", "Detect early", "Hide", "Hope"], c: 1 },
        { q: "Profit First means:", o: ["Pay expenses first", "Allocating profit first/Discipline", "Spending all", "None"], c: 1 },
        { q: "Finance role is:", o: ["Counting beans", "Strategic enablement", "Boring", "Quiet"], c: 1 },
        { q: "If NO ROI:", o: ["Spend anyway", "Don't spend", "Ask later", "Hope"], c: 1 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Agency margin source:", o: ["Ads", "Services/Labor", "Products", "None"], c: 1 },
        { q: "Media margin source:", o: ["Services", "Ads/Sponsorships", "Consulting", "None"], c: 1 },
        { q: "Scalability winner:", o: ["Agency", "Media", "Equal", "None"], c: 1 },
        { q: "Premium pricing enables:", o: ["Losses", "Premium salaries/Talent", "Cheap labor", "None"], c: 1 },
        { q: "We charge:", o: ["Market rate", "Premium", "Low", "Free"], c: 1 },
        { q: "Agency services:", o: ["Shopify/Design", "Plumbing", "Cooking", "None"], c: 0 },
        { q: "Eco-system include:", o: ["Agency & Media", "Only Agency", "Only Media", "None"], c: 0 },
        { q: "Gross margin target:", o: ["10%", "70%+", "0%", "100%"], c: 1 },
        { q: "Finance supports:", o: ["Growth", "Stagnation", "Losses", "Competitors"], c: 0 },
        { q: "High ticket means:", o: ["Expensive/High Value", "Cheap", "Ticket selling", "Events"], c: 0 }
    ],
    // Task 3: P&L
    [
        { q: "Top line:", o: ["Net Income", "Revenue", "Expenses", "Tax"], c: 1 },
        { q: "Bottom line:", o: ["Net Income", "Revenue", "COGS", "Rent"], c: 0 },
        { q: "COGS:", o: ["Cost of Goods Sold", "Cats", "Costs of Good Service", "None"], c: 0 },
        { q: "OpEx:", o: ["Operating Expenses", "Opportunity", "Operations", "None"], c: 0 },
        { q: "Gross Profit:", o: ["Rev - COGS", "Rev - OpEx", "Rev + Cash", "None"], c: 0 },
        { q: "Net Income:", o: ["Rev - All Expenses", "Revenue", "COGS", "None"], c: 0 },
        { q: "EBITDA:", o: ["Earnings Before Interest Tax Depr Amort", "Earnings Bad", "None", "Cash"], c: 0 },
        { q: "P&L tells:", o: ["Story of business", "Nothing", "Future", "Past only"], c: 0 },
        { q: "Rent belongs in:", o: ["COGS", "OpEx", "Revenue", "None"], c: 1 },
        { q: "Hosting server cost:", o: ["COGS", "OpEx", "Revenue", "None"], c: 0 }
    ],
    // Task 4: Cash Flow
    [
        { q: "AR:", o: ["Accounts Receivable (In)", "Accounts Payable", "Rent", "None"], c: 0 },
        { q: "AP:", o: ["Accounts Receivable", "Accounts Payable (Out)", "Profit", "None"], c: 1 },
        { q: "Cash Crunch:", o: ["Good", "Ran out of cash", "Too much cash", "None"], c: 1 },
        { q: "Collect AR:", o: ["Slowly", "Fast", "Never", "Whenever"], c: 1 },
        { q: "Pay AP:", o: ["Early", "On Time (not early)", "Late", "Never"], c: 1 },
        { q: "Cash vs Profit:", o: ["Same", "Different (Timing)", "Unrelated", "None"], c: 1 },
        { q: "Payroll priority:", o: ["Low", "High/#1", "Optional", "None"], c: 1 },
        { q: "Conversion Cycle:", o: ["Time from cash out to cash in", "Biking", "Sales", "None"], c: 0 },
        { q: "Risk of crunch:", o: ["Bankruptcy", "Profit", "Growth", "Fun"], c: 0 },
        { q: "Insolvent means:", o: ["Rich", "Cant pay debts", "Solved", "None"], c: 1 }
    ],
    // Task 5: Unit Economics
    [
        { q: "CAC:", o: ["Customer Acquisition Cost", "Car", "Cake", "Cost Average"], c: 0 },
        { q: "LTV:", o: ["Lifetime Value", "Live TV", "Long Time", "None"], c: 0 },
        { q: "Golden Ratio:", o: ["1:1", "3:1 (LTV:CAC)", "1:3", "0:0"], c: 1 },
        { q: "Bad Ratio:", o: ["1:1 (Break even)", "4:1", "5:1", "10:1"], c: 0 },
        { q: "CAC includes:", o: ["Ads + Sales Comm", "Rent", "Server", "None"], c: 0 },
        { q: "Scale healthy when:", o: ["LTV > CAC", "LTV < CAC", "No customers", "No sales"], c: 0 },
        { q: "Churn affects:", o: ["LTV (Lowers it)", "CAC", "Rent", "None"], c: 0 },
        { q: "Marketing spend is:", o: ["CAC", "LTV", "Profit", "Loss"], c: 0 },
        { q: "Recurring revenue increases:", o: ["CAC", "LTV", "Risk", "None"], c: 1 },
        { q: "Payback period:", o: ["Time to recover CAC", "Loan", "Never", "Instant"], c: 0 }
    ],
    // Task 6: Budgeting
    [
        { q: "Zero-based:", o: ["Start from previous year", "Start from $0/Justify all", "No budget", "Unlimited"], c: 1 },
        { q: "Variance Analysis:", o: ["Budget vs Actual", "Profit vs Loss", "Cash vs Bank", "None"], c: 0 },
        { q: "Runway:", o: ["Fashion", "Cash / Monthly Burn", "Profit / Sales", "None"], c: 1 },
        { q: "Burn Rate:", o: ["Fire", "Monthly Cash Loss", "Sales Speed", "None"], c: 1 },
        { q: "Forecast:", o: ["Prediction", "History", "Fact", "Lie"], c: 0 },
        { q: "Budget goal:", o: ["Restrict", "Align resources to goals", "Annoy", "None"], c: 1 },
        { q: "If over budget:", o: ["Investigate", "Ignore", "Spend more", "Cheer"], c: 0 },
        { q: "Runway < 3 months:", o: ["Safe", "Emergency", "Good", "Normal"], c: 1 },
        { q: "Budget frequency:", o: ["Once", "Quarterly/Annual", "Never", "Daily"], c: 1 },
        { q: "Conservative forecasting:", o: ["Underestimate rev, Overestimate exp", "Opposite", "Guess", "None"], c: 0 }
    ],
    // Task 7: Tools
    [
        { q: "QuickBooks:", o: ["Chat", "Accounting/Ledger", "Design", "Code"], c: 1 },
        { q: "Excel VLOOKUP:", o: ["Mandatory", "Optional", "Forbidden", "Bad"], c: 0 },
        { q: "Brex:", o: ["Corporate Card/Expense", "Game", "Food", "None"], c: 0 },
        { q: "Stripe:", o: ["Payments", "Lines", "Design", "None"], c: 0 },
        { q: "Ledger of Truth:", o: ["Slack", "QuickBooks/Xero", "Notion", "Email"], c: 1 },
        { q: "Spreadsheets used for:", o: ["Analysis/Modeling", "Design", "Comms", "Nothing"], c: 0 },
        { q: "Receipt storage:", o: ["Trash", "Digital/Required", "Optional", "Lost"], c: 1 },
        { q: "Expense approval:", o: ["Brex/Ramp", "Slack", "Text", "None"], c: 0 },
        { q: "Bank recs:", o: ["Monthly", "Never", "Yearly", "Daily"], c: 0 },
        { q: "Tech stack speed:", o: ["Slow", "Fast/Automated", "Manual", "None"], c: 1 }
    ],
    // Task 8: Compliance
    [
        { q: "Nexus:", o: ["Connection", "Tax Presence", "Phone", "None"], c: 1 },
        { q: "1099:", o: ["Employee", "Contractor", "Bonus", "Tax"], c: 1 },
        { q: "W2:", o: ["Employee", "Contractor", "Form", "None"], c: 0 },
        { q: "Misclassification:", o: ["Fine/Illegal", "Okay", "Good", "Recommended"], c: 0 },
        { q: "Sales tax collection:", o: ["Optional", "Mandatory w/ Nexus", "Never", "Always"], c: 1 },
        { q: "Filing deadlines:", o: ["Flexible", "Strict", "Optional", "Random"], c: 1 },
        { q: "Audit:", o: ["Party", "Review of books", "Game", "None"], c: 1 },
        { q: "Compliance is:", o: ["Safety", "Boring", "Optional", "Bad"], c: 0 },
        { q: "Contract needs:", o: ["Handshake", "Signed agreement", "Nothing", "Wink"], c: 1 },
        { q: "Tax avoidance:", o: ["Legal (Minimization)", "Illegal (Evasion)", "Bad", "None"], c: 0 }
    ],
    // Task 9: Scenarios
    [
        { q: "Cash Crunch Action:", o: ["Chase AR", "Spend more", "Ignore", "Sleep"], c: 0 },
        { q: "Low ROI Campaign:", o: ["Approve", "Reject", "Discuss", "Delay"], c: 1 },
        { q: "Expense approval:", o: ["Check ROI/Budget", "Auto yes", "Auto no", "Coin flip"], c: 0 },
        { q: "Late client:", o: ["Wait", "Follow up/Stop work", "Refund", "Gift"], c: 1 },
        { q: "Profitability audit:", o: ["Check Rev vs Expenses", "Guess", "Ask Mom", "None"], c: 0 },
        { q: "Emergency Fund:", o: ["Spend it", "Save for rainy day", "Burn it", "None"], c: 1 },
        { q: "Price increase:", o: ["Improves margin", "Lowers margin", "Does nothing", "Bad"], c: 0 },
        { q: "Discounting:", o: ["Hurts margin", "Helps margin", "Good", "Best"], c: 0 },
        { q: "Hiring decision:", o: ["Can we afford it?", "Just hire", "Guess", "None"], c: 0 },
        { q: "Software subscription audit:", o: ["Cancel unused", "Keep all", "Add more", "None"], c: 0 }
    ],
    // Task 10: Final (20)
    [
        { q: "Net Income:", o: ["Top line", "Bottom Line", "Middle", "None"], c: 1 },
        { q: "CAC:", o: ["Acquisition Cost", "Cake", "Car", "None"], c: 0 },
        { q: "LTV:", o: ["Lifetime Value", "TV", "Time", "None"], c: 0 },
        { q: "Cash vs Profit:", o: ["Different", "Same", "None", "Equal"], c: 0 },
        { q: "Burn Rate:", o: ["Monthly Loss", "Fire", "Speed", "None"], c: 0 },
        { q: "Runway:", o: ["Life left", "Plane", "Fashion", "None"], c: 0 },
        { q: "COGS:", o: ["Cost of Goods", "Dogs", "Logs", "None"], c: 0 },
        { q: "Golden Ratio:", o: ["3:1", "1:1", "10:1", "None"], c: 0 },
        { q: "1099:", o: ["Contractor", "Employee", "Boss", "None"], c: 0 },
        { q: "Nexus:", o: ["Tax Presence", "Phone", "Car", "None"], c: 0 },
        { q: "Zero-based:", o: ["From $0", "From last year", "None", "All"], c: 0 },
        { q: "Brex:", o: ["Card", "Food", "Drink", "None"], c: 0 },
        { q: "AR:", o: ["Receivable (In)", "Payable", "Rent", "None"], c: 0 },
        { q: "AP:", o: ["Payable (Out)", "Receivable", "Asset", "None"], c: 0 },
        { q: "QuickBooks:", o: ["Ledger", "Chat", "Game", "None"], c: 0 },
        { q: "Variance:", o: ["Diff", "Same", "None", "Equal"], c: 0 },
        { q: "ROI:", o: ["Return On Investment", "Radio", "Run", "None"], c: 0 },
        { q: "Gross Margin:", o: ["Rev - COGS", "Net", "Tax", "None"], c: 0 },
        { q: "OpEx:", o: ["Operating Exp", "Opportunity", "Open", "None"], c: 0 },
        { q: "Profit First:", o: ["Mindset", "Bank", "Software", "None"], c: 0 }
    ]
];
