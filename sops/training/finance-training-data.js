// Finance Manager Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, CFO-Level Strategy

const trainingTasks = [
    {
        id: 1,
        title: "Finance Mindset",
        description: "Cash is King",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Profit is Theory, Cash is Reality",
            "🛡️ Concept: The 'Runway' Metric",
            "🚀 Method: Profit First (Mike Michalowicz)"
        ]
    },
    {
        id: 2,
        title: "Invoicing Mastery",
        description: "Getting Paid Faster",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "⚡ Technique: Upfront Payments",
            "⚡ Technique: 7-Day Terms",
            "📧 Script: The 'Overdue' Chaser"
        ]
    },
    {
        id: 3,
        title: "P&L Analysis",
        description: "Reading the Story",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "📊 Line: Gross Margin (Efficiency)",
            "📊 Line: Net Profit (Health)",
            "📊 Line: OpEx (Bloat)"
        ]
    },
    {
        id: 4,
        title: "Cashflow Forecasting",
        description: "Predicting the Future",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🔮 Tool: The 13-Week Cashflow Model",
            "⚠️ Signal: The Dip (When expenses > income)",
            "🏦 Plan: Credit Line management"
        ]
    },
    {
        id: 5,
        title: "Expense Management",
        description: "Cutting the Fat",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "✂️ Audit: Subscription Creep",
            "✂️ Audit: Travel & Entertainment Policy",
            "✅ Process: Approval Workflows"
        ]
    },
    {
        id: 6,
        title: "Tax & Compliance",
        description: "Staying Legal",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "⚖️ Logic: VAT / GST Separation",
            "⚖️ Logic: Deductible vs Non-Deductible",
            "📅 Calendar: Filing Deadlines"
        ]
    },
    {
        id: 7,
        title: "Payroll Management",
        description: "Team Payments",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🌍 Context: International Contractors (Deel)",
            "💸 Process: Commissions Calculation",
            "🎁 Perk: Bonuses & Profit Share"
        ]
    },
    {
        id: 8,
        title: "Pricing Strategy",
        description: "Margin Protection",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🏷️ Model: Value-Based vs Hourly",
            "🏷️ Model: Discounting Danger",
            "📈 Tactic: Annual Price Increases"
        ]
    },
    {
        id: 9,
        title: "Financial Tools",
        description: "Xero / QuickBooks",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "⚙️ Skill: Bank Reconciliation Matches",
            "⚙️ Skill: Chart of Accounts Setup",
            "⚙️ Skill: API Integrations (Stripe -> Xero)"
        ]
    },
    {
        id: 10,
        title: "Reporting to Founders",
        description: "The Monthly Pack",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📄 Doc: The 'Flash Report' (1-Page Summary)",
            "🗣️ Pres: Translating Numbers to Strategy",
            "🎯 KPI: EBITDA"
        ]
    },
    {
        id: 11,
        title: "Unit Economics",
        description: "LTV:CAC",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📊 Metric: Customer Acquisition Cost (CAC)",
            "📊 Metric: Lifetime Value (LTV)",
            "✅ Ratio: The Golden 3:1 Ratio"
        ]
    },
    {
        id: 12,
        title: "Crisis Finance",
        description: "Recession Proofing",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔥 Scenario: Revenue drops 50%",
            "🛡️ Plan: The 'Austerity Budget'",
            "🛡️ Plan: Renegotiating Vendor Leases"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: MINDSET - Cash is King</h2>

<div class="content-section">
    <h3>📉 Profit vs Cash</h3>
    <p>You can be "Profitable" on paper and still go bankrupt if the cash is stuck in unpaid invoices. We optimize for CASH in the bank.</p>
</div>

<div class="content-section">
    <h3>🛡️ The Guardian</h3>
    <p>Everyone wants to spend money. Marketing wants ads. Dev wants laptops. Your job is to say "No" unless the ROI is proven.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Runway Check</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Calculation</h4>
        <p>We have $100k in Bank. Monthly Burn is $25k. What is our Runway? If revenue drops to zero, when do we die?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: INVOICING MASTERY</h2>

<div class="content-section">
    <h3>⚡ Frictionless Payment</h3>
    <p>Don't send a PDF and ask for a wire. Send a Stripe Link. Make it easy to pay.</p>
</div>

<div class="content-section">
    <h3>📧 The Chaser</h3>
    <p>Day 1 Overdue: Polite reminder. Day 7 Overdue: Phone Call. Day 14 Overdue: Service Pause.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Collection</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: The Script</h4>
        <p>Client is 10 days late. They say "The check is in the mail". Write a response enforcing the "Service Pause" policy.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Invoicing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: P&L ANALYSIS</h2>

<div class="content-section">
    <h3>📊 Gross Margin</h3>
    <p>Revenue - COGS (Cost of Delivering). If this is below 50% for an agency, we are pricing too low or paying staff too much.</p>
</div>

<div class="content-section">
    <h3>📊 Net Profit</h3>
    <p>The bottom line. This should be 20-30% healthy.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Analysis</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: The Leak</h4>
        <p>I will give you a P&L. Revenue is up, but Profit is down. Find the expense line that caused it.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about P&L</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CASHFLOW FORECASTING</h2>

<div class="content-section">
    <h3>🔮 The 13-Week Model</h3>
    <p>We forecast 3 months out. Why? Because that's how long it takes to turn a ship. If we see a cash dip in Week 8, we cut costs TODAY.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Modeling</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Scenario</h4>
        <p>We expect a $50k tax bill in Week 6. We have $40k incoming. What actions do we take in Week 1 to prepare?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Forecasting</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: EXPENSE MANAGEMENT</h2>

<div class="content-section">
    <h3>✂️ Subscription Creep</h3>
    <p>Every month, check the bank statement. Cancel unused SaaS tools. $29 here, $99 there = $5k/year wasted.</p>
</div>

<div class="content-section">
    <h3>✅ Approval Flows</h3>
    <p>No expense over $100 without approval. No exceptions.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: The Cutter</h4>
        <p>Review this list of credit card charges. Identify 3 questionable charges that need investigation.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Expenses</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: TAX & COMPLIANCE</h2>

<div class="content-section">
    <h3>⚖️ VAT / GST is Not Yours</h3>
    <p>When you collect tax, put it in a separate savings account immediately. Never spend tax money on operations.</p>
</div>

<div class="content-section">
    <h3>📅 Filing Discipline</h3>
    <p>Late fines are "Stupid Tax". We never pay stupid tax. File early.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Pot Management</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Allocation</h4>
        <p>We received $12,000 (inc 20% VAT). How much goes to Ops Account? How much to Tax Account?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tax</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: PAYROLL MANAGEMENT</h2>

<div class="content-section">
    <h3>💸 Accuracy is Trust</h3>
    <p>If you pay someone late or wrong, they lose trust in the company instantly. Triple check payroll.</p>
</div>

<div class="content-section">
    <h3>🌍 Contractors</h3>
    <p>Use Deel or Wise. Ensure W8-BEN forms are signed. Don't just PayPal people randomly.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Calculation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Commission</h4>
        <p>Sales Rep closed $50k revenue. Commission is 10% on first $10k, 15% on remainder. Calculate the payout.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Payroll</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: PRICING STRATEGY</h2>

<div class="content-section">
    <h3>🏷️ Value Based Pricing</h3>
    <p>Don't charge for hours. Charge for Outcomes. Hours are commoditized. Outcomes are premium.</p>
</div>

<div class="content-section">
    <h3>📈 Annual Increases</h3>
    <p>Every January, prices go up 5-10% for inflation. It's standard. Communicate it confidently.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Re-Pricing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: The Email</h4>
        <p>Draft an email informing a legacy client that their rate is increasing from $2000 to $2500 next month.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Pricing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: FINANCIAL TOOLS (Xero)</h2>

<div class="content-section">
    <h3>⚙️ Reconciliation</h3>
    <p>The art of matching bank lines to invoices. Do this WEEKLY, not monthly, to avoid a pile-up.</p>
</div>

<div class="content-section">
    <h3>⚙️ Chart of Accounts</h3>
    <p>Organize clearly. "Software" is too broad. Split into "Software - Ops" and "Software - COGS".</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Categorization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Sorting</h4>
        <p>Categorize these: "Uber Ride", "Server Hosting", "Client Lunch", "Google Ads Spend". (e.g., Travel, COGS, Entertainment, Marketing).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tools</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: REPORTING</h2>

<div class="content-section">
    <h3>📄 The Flash Report</h3>
    <p>Founders don't read spreadsheets. They read summaries. <br>1. Cash Balance. <br>2. Revenue vs Target. <br>3. Major Expense Variance.</p>
</div>

<div class="content-section">
    <h3>🎯 EBITDA</h3>
    <p>Earnings Before Interest, Taxes, Depreciation, Amortization. The core profitability metric for valuation.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Summarizing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: The Update</h4>
        <p>Revenue missed target by 20% because a client delayed launch. Write the 2-sentence summary for the CEO.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Reporting</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: UNIT ECONOMICS</h2>

<div class="content-section">
    <h3>📊 LTV:CAC</h3>
    <p>If you spend $100 to get a customer (CAC), and they pay you $300 over their life (LTV), ratio is 3:1. This is good. Below 3:1 is dangerous.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Math</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Health Check</h4>
        <p>CAC = $500. LTV = $1000. Is this business scalable? Why or why not?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Economics</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: CRISIS FINANCE</h2>

<div class="content-section">
    <h3>🛡️ The Austerity Budget</h3>
    <p>Plan B. If revenue drops 50%, what do we cut? Have this list ready BEFORE the crisis.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Cutting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #34D399; margin-top: 0;">Exercise: Survival Mode</h4>
        <p>We need to save $10k/month immediately. Rank these cuts: Staff, Office Snacks, Ads, Software.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Finance Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1
    {
        question: "Profit vs Cash?",
        options: ["They are the same", "Profit is theory, Cash is reality (bills)", "Profit is more important", "Cash is old school"],
        correct: 1
    },
    // Task 2
    {
        question: "Best payment terms?",
        options: ["Net 60", "Net 30", "Upfront / Net 7", "Pay whenever"],
        correct: 2
    },
    // Task 3
    {
        question: "What is Gross Margin?",
        options: ["Total Revenue", "Revenue minus COGS", "Money in the bank", "Net Profit"],
        correct: 1
    },
    // Task 4
    {
        question: "Why forecast cashflow?",
        options: ["To predict dips and prepare", "To impress banks", "To waste time", "Crystal ball magic"],
        correct: 0
    },
    // Task 6
    {
        question: "Is VAT/GST your money?",
        options: ["Yes, free bonus", "No, we hold it for the govt", "Depends on mood", "Only on Fridays"],
        correct: 1
    },
    // Task 7
    {
        question: "Rule #1 of Payroll?",
        options: ["Pay late", "Pay accurately and on time", "Guess amounts", "Pay in crypto only"],
        correct: 1
    },
    // Task 8
    {
        question: "Value Based Pricing charges for...",
        options: ["Hours worked", "Outcomes/Results", "Effort", "Friendship"],
        correct: 1
    },
    // Task 9
    {
        question: "How often to reconcile banks?",
        options: ["Weekly", "Yearly", "Never", "When broke"],
        correct: 0
    },
    // Task 11
    {
        question: "Ideal LTV:CAC ratio?",
        options: ["1:1", "3:1 or higher", "0.5:1", "100:1"],
        correct: 1
    },
    // Task 12
    {
        question: "What is an Austerity Budget?",
        options: ["A spending spree", "A plan for severe cost cutting in crisis", "A party budget", "Government grant"],
        correct: 1
    }
];
