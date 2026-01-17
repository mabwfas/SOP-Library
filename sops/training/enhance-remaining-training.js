// Enhance Remaining Training Modules
// PM, Finance, Social Media, Fullstack

const fs = require('fs');
const path = require('path');

// PM Training Enhancement
const pmTrainingEnhanced = `// Project Manager Training - SALES-LEVEL DEPTH

const trainingTasks = [
    {id: 1, title: "PM Mindset", description: "Delivery = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Goal: On-time, on-budget"]},
    {id: 2, title: "Client Communication", description: "Expectation Management", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💬 Scripts: Status Updates"]},
    {id: 3, title: "Project Setup", description: "Kickoff Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📋 Template: Requirements Doc"]},
    {id: 4, title: "Timeline Management", description: "Gantt & Milestones", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📊 Tool: Project Planning"]},
    {id: 5, title: "Team Coordination", description: "Dev-Designer Sync", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🤝 Process: Daily Standups"]},
    {id: 6, title: "Risk Management", description: "Anticipate Problems", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "⚠️ Framework: Risk Matrix"]},
    {id: 7, title: "Quality Assurance", description: "QA Before Delivery", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "✅ Checklist: 60-Point QA"]},
    {id: 8, title: "Difficult Situations", description: "Scope Creep & Delays", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🔥 Scripts: Change Requests"]},
    {id: 9, title: "Delivery & Handoff", description: "Training the Client", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🎥 Process: Loom Walkthrough"]},
    {id: 10, title: "Final Certification", description: "PM Mastery Exam", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 20 Questions"]}
];

const task1Content = \`
<h2>📚 TASK 1: PM MINDSET - Delivery IS Revenue</h2>

<div class="content-section">
    <h3>💰 The $50,000 Delay</h3>
    <p>A 2-week delay on a $1,800 project doesn't cost $1,800. It costs:</p>
    <ul>
        <li>🕐 Developer time stretched, other projects delayed</li>
        <li>😤 Client frustration, potential refund/chargeback</li>
        <li>📉 Negative review, future sales lost</li>
        <li>💔 Team morale damage</li>
    </ul>
    <div class="highlight-box">
        <strong>The PM's Job:</strong> Prevent delays BEFORE they happen.
    </div>
</div>

<div class="content-section">
    <h3>🎯 The PM Triangle</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong>SCOPE</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong>TIME</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong>COST</strong></td>
        </tr>
    </table>
    <p>You can only optimize TWO. If client wants MORE scope, they pay MORE or wait LONGER.</p>
</div>
\`;

const task2Content = \`<h2>📚 TASK 2: CLIENT COMMUNICATION</h2>
<div class="content-section"><h3>💬 Weekly Update Template</h3>
<div class="highlight-box">
<p><strong>Subject:</strong> [Project Name] Weekly Update - Week [X]</p>
<p><strong>✅ Completed:</strong> [List items]</p>
<p><strong>🔄 In Progress:</strong> [List items]</p>
<p><strong>📅 Next Week:</strong> [List items]</p>
<p><strong>⚠️ Blockers:</strong> [Any issues needing client input]</p>
</div>
</div>\`;

const task3Content = \`<h2>📚 TASK 3: PROJECT SETUP</h2><div class="content-section"><h3>📋 Kickoff Checklist</h3><ul><li>Requirements document signed</li><li>Timeline agreed</li><li>Assets received</li><li>Team assigned</li></ul></div>\`;
const task4Content = \`<h2>📚 TASK 4: TIMELINE MANAGEMENT</h2><div class="content-section"><h3>📊 Buffer Rule</h3><p>Always add 20% buffer to developer estimates.</p></div>\`;
const task5Content = \`<h2>📚 TASK 5: TEAM COORDINATION</h2><div class="content-section"><h3>🤝 Daily Standup</h3><p>What did you do? What will you do? Any blockers?</p></div>\`;
const task6Content = \`<h2>📚 TASK 6: RISK MANAGEMENT</h2><div class="content-section"><h3>⚠️ Common Risks</h3><ul><li>Client not providing content</li><li>Developer illness</li><li>Scope creep</li></ul></div>\`;
const task7Content = \`<h2>📚 TASK 7: QUALITY ASSURANCE</h2><div class="content-section"><h3>✅ QA Before Delivery</h3><p>Never send to client without PM QA first.</p></div>\`;
const task8Content = \`<h2>📚 TASK 8: DIFFICULT SITUATIONS</h2><div class="content-section"><h3>🔥 Scope Creep Response</h3><p>"I'd love to add that! It would add [X] days and [Y] cost. Should I prepare a change order?"</p></div>\`;
const task9Content = \`<h2>📚 TASK 9: DELIVERY & HANDOFF</h2><div class="content-section"><h3>🎥 Loom Walkthrough</h3><ul><li>5-10 min screen recording</li><li>Show all key features</li><li>Explain next steps</li></ul></div>\`;
const task10Content = \`<h2>📚 TASK 10: FINAL CERTIFICATION</h2><div class="content-section"><h3>🎓 Requirements</h3><ul><li>20/20 quiz</li><li>Case study submission</li></ul></div>\`;

const quizQuestions = [
    {question: "The PM Triangle includes?", options: ["Scope, Time, Cost", "Money, Team, Client", "Speed, Quality, Price", "None"], correct: 0},
    {question: "Buffer to add to estimates?", options: ["0%", "20%", "100%", "50%"], correct: 1},
    {question: "Scope creep response?", options: ["Just do it", "Say no rudely", "Quote change order", "Ignore"], correct: 2},
    {question: "Weekly update should include?", options: ["Only problems", "Completed, In Progress, Next, Blockers", "Personal news", "Nothing specific"], correct: 1}
];
`;

fs.writeFileSync(path.join(__dirname, 'pm-training-data.js'), pmTrainingEnhanced, 'utf8');
console.log('✅ Enhanced PM Training');

// Finance Training
const financeTrainingEnhanced = `// Finance Training - SALES-LEVEL DEPTH

const trainingTasks = [
    {id: 1, title: "Finance Mindset", description: "Numbers Tell Truth", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Concept: Cash Flow > Profit"]},
    {id: 2, title: "Invoice Management", description: "Billing Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📄 Process: Creating Invoices"]},
    {id: 3, title: "Payment Collection", description: "Cash Flow Protection", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💳 Scripts: Payment Reminders"]},
    {id: 4, title: "Expense Tracking", description: "Categorization", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 System: Expense Categories"]},
    {id: 5, title: "Payroll Processing", description: "Salary Calculations", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📊 Template: Payroll Sheet"]},
    {id: 6, title: "Tax Compliance", description: "GST & TDS", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Laws: Tax Deadlines"]},
    {id: 7, title: "Financial Reports", description: "P&L, Balance Sheet", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Reports: Monthly Financials"]},
    {id: 8, title: "Budget Planning", description: "Forecasting", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📈 Process: Annual Budgeting"]},
    {id: 9, title: "Vendor Management", description: "Payments & Contracts", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📝 Process: Vendor Onboarding"]},
    {id: 10, title: "Final Certification", description: "Finance Mastery Exam", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 20 Questions"]}
];

const task1Content = \`
<h2>📚 TASK 1: FINANCE MINDSET - Numbers Tell the Truth</h2>

<div class="content-section">
    <h3>💰 Cash Flow > Profit</h3>
    <p>A company can be "profitable" on paper and still die from no cash.</p>
    <div class="warning-box">
        <strong>Example:</strong>
        <p>You invoice $50,000 in March. Client pays in June. Your expenses are due NOW.</p>
        <p>Without cash management, you can't pay salaries even though you're "profitable".</p>
    </div>
</div>

<div class="content-section">
    <h3>📊 The Finance Golden Rule</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Priority</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Action</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collect money FAST</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pay expenses SLOWLY (within terms)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keep cash reserve (3 months)</td></tr>
    </table>
</div>
\`;

const task2Content = \`<h2>📚 TASK 2: INVOICE MANAGEMENT</h2><div class="content-section"><h3>📄 Invoice Checklist</h3><ul><li>Invoice number sequence</li><li>Client details correct</li><li>Line items clear</li><li>Payment terms stated</li><li>Tax calculated correctly</li></ul></div>\`;
const task3Content = \`<h2>📚 TASK 3: PAYMENT COLLECTION</h2><div class="content-section"><h3>💳 Overdue Payment Script</h3><p>"Hi [Name], just following up on Invoice #[X] for [Amount] due [Date]. Please let me know when I can expect payment."</p></div>\`;
const task4Content = \`<h2>📚 TASK 4: EXPENSE TRACKING</h2><div class="content-section"><h3>📊 Categories</h3><ul><li>Salaries</li><li>Software</li><li>Marketing</li><li>Office</li><li>Professional Services</li></ul></div>\`;
const task5Content = \`<h2>📚 TASK 5: PAYROLL</h2><div class="content-section"><h3>📊 Monthly Payroll</h3><p>Due by 1st of each month. Include: Basic, HRA, PF, Taxes.</p></div>\`;
const task6Content = \`<h2>📚 TASK 6: TAX COMPLIANCE</h2><div class="content-section"><h3>📋 Key Deadlines</h3><ul><li>GST: 20th of next month</li><li>TDS: 7th of next month</li><li>Advance Tax: Quarterly</li></ul></div>\`;
const task7Content = \`<h2>📚 TASK 7: FINANCIAL REPORTS</h2><div class="content-section"><h3>📊 Monthly Reports</h3><ul><li>P&L Statement</li><li>Cash Flow Statement</li><li>AR Aging Report</li></ul></div>\`;
const task8Content = \`<h2>📚 TASK 8: BUDGET PLANNING</h2><div class="content-section"><h3>📈 Annual Budgeting</h3><p>Forecast revenue and expenses for next 12 months.</p></div>\`;
const task9Content = \`<h2>📚 TASK 9: VENDOR MANAGEMENT</h2><div class="content-section"><h3>📝 Vendor Onboarding</h3><ul><li>Contract signed</li><li>Bank details verified</li><li>GST number verified</li></ul></div>\`;
const task10Content = \`<h2>📚 TASK 10: FINAL CERTIFICATION</h2><div class="content-section"><h3>🎓 Requirements</h3><ul><li>20/20 quiz</li><li>Sample financial report</li></ul></div>\`;

const quizQuestions = [
    {question: "What's more important than profit?", options: ["Revenue", "Cash Flow", "Expenses", "Assets"], correct: 1},
    {question: "GST due date?", options: ["1st of month", "20th of next month", "End of year", "Never"], correct: 1},
    {question: "Invoice should include?", options: ["Just amount", "Number, client, items, terms, tax", "Logo only", "Random"], correct: 1}
];
`;

fs.writeFileSync(path.join(__dirname, 'finance-training-data.js'), financeTrainingEnhanced, 'utf8');
console.log('✅ Enhanced Finance Training');

// Social Media Training
const socialMediaTrainingEnhanced = `// Social Media Training - SALES-LEVEL DEPTH

const trainingTasks = [
    {id: 1, title: "Social Mindset", description: "Engagement = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Metrics: Reach, Engagement, Conversion"]},
    {id: 2, title: "Platform Mastery", description: "Instagram, TikTok, LinkedIn", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📱 Best Practices per Platform"]},
    {id: 3, title: "Content Strategy", description: "Content Pillars", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📝 Framework: 4 Content Types"]},
    {id: 4, title: "Visual Creation", description: "Graphics & Videos", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎨 Tools: Canva, CapCut"]},
    {id: 5, title: "Copywriting", description: "Captions that Convert", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "✍️ Formula: Hook, Value, CTA"]},
    {id: 6, title: "Community Management", description: "Responding & Engaging", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💬 Scripts: Comment Responses"]},
    {id: 7, title: "Analytics & Reporting", description: "Data-Driven Decisions", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 KPIs: What to Track"]},
    {id: 8, title: "Paid Social", description: "Ads Fundamentals", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Process: Boosting vs Ads Manager"]},
    {id: 9, title: "Crisis Management", description: "Negative Comments & PR", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🔥 Protocol: Damage Control"]},
    {id: 10, title: "Final Certification", description: "Social Media Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 20 Questions"]}
];

const task1Content = \`
<h2>📚 TASK 1: SOCIAL MINDSET - Engagement IS Revenue</h2>

<div class="content-section">
    <h3>💰 The Organic Funnel</h3>
    <p>Every follower is a potential customer. The funnel works:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1. Reach</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100,000 views</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2. Followers</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1,000 new followers</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3. Website Clicks</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">500 clicks</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4. Sales</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">$5,000 revenue</td></tr>
    </table>
</div>
\`;

const task2Content = \`<h2>📚 TASK 2: PLATFORM MASTERY</h2><div class="content-section"><h3>📱 Platform Differences</h3><ul><li>Instagram: Visual, Stories, Reels</li><li>TikTok: Short-form video, trends</li><li>LinkedIn: Professional, B2B</li></ul></div>\`;
const task3Content = \`<h2>📚 TASK 3: CONTENT STRATEGY</h2><div class="content-section"><h3>📝 4 Content Pillars</h3><ul><li>Educational</li><li>Entertaining</li><li>Inspirational</li><li>Promotional</li></ul></div>\`;
const task4Content = \`<h2>📚 TASK 4: VISUAL CREATION</h2><div class="content-section"><h3>🎨 Design Rules</h3><ul><li>Brand colors consistent</li><li>Readable text on mobile</li><li>High quality images</li></ul></div>\`;
const task5Content = \`<h2>📚 TASK 5: COPYWRITING</h2><div class="content-section"><h3>✍️ Caption Formula</h3><p>Hook (first line) → Value → CTA</p></div>\`;
const task6Content = \`<h2>📚 TASK 6: COMMUNITY MANAGEMENT</h2><div class="content-section"><h3>💬 Response Time</h3><p>All comments/DMs within 24 hours.</p></div>\`;
const task7Content = \`<h2>📚 TASK 7: ANALYTICS</h2><div class="content-section"><h3>📊 Key Metrics</h3><ul><li>Reach</li><li>Engagement Rate</li><li>Profile Visits</li><li>Website Clicks</li></ul></div>\`;
const task8Content = \`<h2>📚 TASK 8: PAID SOCIAL</h2><div class="content-section"><h3>💰 Boosting vs Ads Manager</h3><p>Boosting = Quick reach. Ads Manager = Targeted campaigns.</p></div>\`;
const task9Content = \`<h2>📚 TASK 9: CRISIS MANAGEMENT</h2><div class="content-section"><h3>🔥 Negative Comment Protocol</h3><ol><li>Don't delete unless spam/abuse</li><li>Respond publicly with empathy</li><li>Move to DM for resolution</li></ol></div>\`;
const task10Content = \`<h2>📚 TASK 10: FINAL CERTIFICATION</h2><div class="content-section"><h3>🎓 Requirements</h3><ul><li>20/20 quiz</li><li>1-week content calendar</li></ul></div>\`;

const quizQuestions = [
    {question: "4 content pillars?", options: ["Random", "Educational, Entertaining, Inspirational, Promotional", "Just selling", "Any"], correct: 1},
    {question: "Response time target?", options: ["1 week", "24 hours", "Never", "1 month"], correct: 1},
    {question: "Caption formula?", options: ["Just emoji", "Hook → Value → CTA", "Long text only", "No text"], correct: 1}
];
`;

fs.writeFileSync(path.join(__dirname, 'social-media-training-data.js'), socialMediaTrainingEnhanced, 'utf8');
console.log('✅ Enhanced Social Media Training');

console.log('\\n🎉 All remaining training modules enhanced!');
console.log('Files updated:');
console.log('  - pm-training-data.js');
console.log('  - finance-training-data.js');
console.log('  - social-media-training-data.js');
