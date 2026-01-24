// Finance Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "Finance Mindset", description: "Money is Business Oxygen", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Why finance matters", "📖 Read finance-sop.html"] },
    { id: 2, title: "Invoicing Excellence", description: "Get Paid On Time", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Invoice best practices", "📖 Study invoice templates"] },
    { id: 3, title: "Expense Management", description: "Track Every Rupee", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Expense categories", "📖 Study expense protocols"] },
    { id: 4, title: "Cash Flow", description: "Timing is Everything", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "💵 Cash flow management", "📖 Study cash flow reports"] },
    { id: 5, title: "Payroll Basics", description: "Pay People Right", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "👥 Payroll processing", "📖 Study payroll checklist"] },
    { id: 6, title: "Tax Compliance", description: "GST & TDS", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📑 Tax requirements", "📖 Study compliance calendar"] },
    { id: 7, title: "Financial Reports", description: "P&L, Balance Sheet", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📈 Key reports", "📖 Study report templates"] },
    { id: 8, title: "Budgeting", description: "Plan Spend Wisely", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Budget creation", "📖 Study budget templates"] },
    { id: 9, title: "Vendor Management", description: "Pay & Negotiate", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🤝 Vendor relations", "📖 Study payment terms"] },
    { id: 10, title: "Final Certification", description: "Finance Mastery", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions"] }
];

const task1Content = `
<h2>📚 TASK 1: FINANCE MINDSET</h2>

<div class="content-section">
    <h3>💰 Money is Business Oxygen</h3>
    <p>A business can survive without many things. <strong>It cannot survive without cash.</strong></p>
    
    <div class="highlight-box">
        <strong>Financial Reality:</strong>
        <ul>
            <li>82% of businesses fail due to cash flow problems</li>
            <li>Not lack of sales. Not bad products. <strong>Cash timing.</strong></li>
            <li>Your job: Ensure money flows smoothly</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The Finance Professional's Role</h3>
    <ul>
        <li>💵 <strong>Cash Flow Guardian:</strong> Ensure money comes in before it goes out</li>
        <li>📊 <strong>Accuracy Keeper:</strong> Every rupee tracked, every number verified</li>
        <li>⚖️ <strong>Compliance Officer:</strong> GST, TDS, all regulations met</li>
        <li>📈 <strong>Growth Enabler:</strong> Smart spending, smart saving</li>
    </ul>
</div>

<div class="content-section">
    <h3>📊 Key Financial Metrics</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Metric</th>
            <th style="padding: 12px;">What It Tells You</th>
            <th style="padding: 12px;">Target</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Gross Profit Margin</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue after direct costs</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;50% for services</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Net Profit Margin</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What's left after ALL expenses</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;15%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Days Sales Outstanding</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How fast clients pay</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;30 days</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cash Runway</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Months of expenses in bank</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;3 months</td>
        </tr>
    </table>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: INVOICING EXCELLENCE</h2>

<div class="content-section">
    <h3>📋 Invoice Components</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Must Have</th>
            <th style="padding: 12px;">Purpose</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Invoice Number</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unique tracking</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Date & Due Date</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment timeline</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GST Number</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tax compliance</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Line Items</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What they're paying for</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment Details</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bank account, UPI</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>⏰ Invoice Timing</h3>
    <div class="highlight-box">
        <strong>The 48-Hour Rule:</strong><br>
        Invoice within 48 hours of project completion. Delayed invoices = delayed payments.
    </div>
</div>
`;

const task3Content = `<h2>📚 TASK 3: EXPENSE MANAGEMENT</h2>
<div class="content-section">
    <h3>📊 Expense Categories</h3>
    <ul>
        <li><strong>Fixed:</strong> Rent, salaries, subscriptions</li>
        <li><strong>Variable:</strong> Ads, commissions, materials</li>
        <li><strong>One-time:</strong> Equipment, setup costs</li>
    </ul>
    <div class="highlight-box">
        <strong>Golden Rule:</strong> Every expense needs a receipt and category.
    </div>
</div>`;

const task4Content = `<h2>📚 TASK 4: CASH FLOW</h2>
<div class="content-section">
    <h3>💵 Cash Flow Formula</h3>
    <div class="highlight-box">
        <strong>Cash In - Cash Out = Net Cash Flow</strong><br><br>
        Positive = Growing | Negative = Burning | Zero = Surviving
    </div>
    <h3>⚡ Cash Flow Killers</h3>
    <ul>
        <li>Late client payments</li>
        <li>Upfront vendor payments</li>
        <li>Unplanned expenses</li>
        <li>No payment terms enforcement</li>
    </ul>
</div>`;

const task5Content = `<h2>📚 TASK 5: PAYROLL BASICS</h2>
<div class="content-section">
    <h3>👥 Payroll Components</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Component</th>
            <th style="padding: 12px;">Description</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Basic Salary</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fixed monthly amount</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">HRA</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">House Rent Allowance</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deductions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PF, TDS, etc.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Net Pay</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Take-home amount</td></tr>
    </table>
</div>`;

const task6Content = `<h2>📚 TASK 6: TAX COMPLIANCE</h2>
<div class="content-section">
    <h3>📑 GST Basics</h3>
    <ul>
        <li><strong>CGST + SGST:</strong> Intra-state (same state)</li>
        <li><strong>IGST:</strong> Inter-state (different states)</li>
        <li><strong>Rate:</strong> 18% for most services</li>
        <li><strong>Filing:</strong> Monthly returns (GSTR-1, GSTR-3B)</li>
    </ul>
    <h3>💼 TDS Basics</h3>
    <ul>
        <li>Deduct at source for contractor payments</li>
        <li>Rate: Usually 10% for professionals</li>
        <li>Deposit by 7th of next month</li>
    </ul>
</div>`;

const task7Content = `<h2>📚 TASK 7: FINANCIAL REPORTS</h2>
<div class="content-section">
    <h3>📈 Key Reports</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Report</th>
            <th style="padding: 12px;">Shows</th>
            <th style="padding: 12px;">Frequency</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">P&L Statement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revenue - Expenses = Profit</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Monthly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Balance Sheet</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assets, Liabilities, Equity</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quarterly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cash Flow</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Money in vs out</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weekly</td></tr>
    </table>
</div>`;

const task8Content = `<h2>📚 TASK 8: BUDGETING</h2>
<div class="content-section">
    <h3>🎯 Budget Creation</h3>
    <ol>
        <li>Review last 3 months actual spending</li>
        <li>Project expected revenue</li>
        <li>Allocate by category (fixed, variable, growth)</li>
        <li>Build 10% buffer for unexpected</li>
        <li>Review weekly, adjust monthly</li>
    </ol>
    <div class="highlight-box">
        <strong>50/30/20 Rule:</strong> 50% operations, 30% growth, 20% reserve
    </div>
</div>`;

const task9Content = `<h2>📚 TASK 9: VENDOR MANAGEMENT</h2>
<div class="content-section">
    <h3>🤝 Payment Terms</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Term</th>
            <th style="padding: 12px;">Meaning</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Net 30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pay within 30 days</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2/10 Net 30</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2% discount if paid in 10 days</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">COD</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cash on delivery</td></tr>
    </table>
</div>`;

const task10Content = `<h2>📚 TASK 10: FINAL CERTIFICATION</h2>
<div class="content-section">
    <h3>🎓 Requirements</h3>
    <ul>
        <li>✅ Score 28/30 on quiz</li>
        <li>✅ Create sample invoice correctly</li>
        <li>✅ Pass compliance knowledge check</li>
    </ul>
</div>`;

const quizQuestions = [
    { question: "A company is profitable but can't pay salaries. This is likely a:", options: ["Revenue problem", "Cash flow timing problem", "Marketing problem", "Hiring problem"], correct: 1 },
    { question: "82% of businesses fail due to:", options: ["Bad products", "Poor marketing", "Cash flow problems", "Competitor pressure"], correct: 2 },
    { question: "Invoice sent 2 weeks after project completion - likely outcome:", options: ["Client pays faster out of guilt", "Delayed payment or forgotten", "No difference in payment timing", "Client appreciates the flexibility"], correct: 1 },
    { question: "Net Profit Margin of 8% for a service business is:", options: ["Excellent - above target", "Below target - needs improvement to >15%", "Industry standard", "Dangerously low"], correct: 1 },
    { question: "Client owes ₹5 lakhs. DSO of 45 days means:", options: ["They're paying ahead of schedule", "They're paying slower than 30-day target", "They need a discount", "Payment is overdue for legal action"], correct: 1 },
    { question: "A Mumbai client buys from a Delhi vendor. GST applied is:", options: ["CGST + SGST (split between states)", "IGST (single tax to central)", "No GST applies to inter-state", "Client chooses which tax"], correct: 1 },
    { question: "₹50,000 paid to a freelancer. TDS to deduct at 10% is:", options: ["₹500", "₹5,000", "₹10,000", "No TDS on freelancers"], correct: 1 },
    { question: "TDS deducted in January must be deposited by:", options: ["January 31st", "February 7th", "March 31st", "April 15th"], correct: 1 },
    { question: "Monthly burn rate ₹10 lakhs, bank balance ₹45 lakhs. Cash runway is:", options: ["Dangerously low at 4.5 months", "Above 3-month target but monitor", "Excellent position", "Need immediate funding"], correct: 1 },
    { question: "'Net 30' payment terms mean:", options: ["30% upfront payment required", "Full payment due within 30 days", "30-day money back guarantee", "Payment in 30 installments"], correct: 1 },
    { question: "P&L shows ₹50L revenue, ₹35L expenses. Net profit is:", options: ["₹50 lakhs", "₹35 lakhs", "₹15 lakhs", "₹85 lakhs"], correct: 2 },
    { question: "Cash flow should be reviewed:", options: ["Only during tax season", "Annually during audit", "Weekly for active management", "When problems arise"], correct: 2 },
    { question: "Budget shows 10% buffer. Actual spend hits 95% of budget. This means:", options: ["Critical overspend warning", "Within acceptable range using buffer", "Need to cut all expenses", "Budget was set too high"], correct: 1 },
    { question: "Invoice missing GST number but has correct amount. This is:", options: ["Acceptable for small amounts", "Non-compliant - client can't claim input credit", "Only a problem for exports", "Fine if client doesn't ask"], correct: 1 },
    { question: "Gross Profit 60%, Net Profit 10%. Operating expenses are:", options: ["10% of revenue", "50% of revenue", "60% of revenue", "Impossible to calculate"], correct: 1 },
    { question: "IGST collected from inter-state sale goes to:", options: ["Only seller's state", "Only buyer's state", "Central government (redistributed)", "Split 50-50 between states"], correct: 2 },
    { question: "50/30/20 budget rule allocates 50% to:", options: ["Growth initiatives", "Operations and salaries", "Emergency reserves", "Tax payments"], correct: 1 },
    { question: "Office rent is classified as:", options: ["Variable expense (changes monthly)", "Fixed expense (predictable)", "Growth investment", "One-time cost"], correct: 1 },
    { question: "Assets = Liabilities + ___:", options: ["Revenue", "Expenses", "Equity", "Profit"], correct: 2 },
    { question: "GSTR-3B filing deadline is typically:", options: ["7th of next month", "20th of next month", "End of quarter", "End of financial year"], correct: 1 },
    { question: "Employee PF deducted but not deposited by employer is:", options: ["Acceptable if done eventually", "Illegal - employer obligations", "Only a problem if employee complains", "Standard practice for cash flow"], correct: 1 },
    { question: "'2/10 Net 30' means pay within 10 days for:", options: ["10% discount", "2% discount", "Free shipping", "Extended warranty"], correct: 1 },
    { question: "Positive cash flow but negative profit indicates:", options: ["Healthy business growth", "Selling assets or collecting receivables", "Normal operations", "Accounting error"], correct: 1 },
    { question: "Client pays 60 days late consistently. Best action:", options: ["Accept it silently", "Require upfront payment or deposits", "Refuse future work", "Sue immediately"], correct: 1 },
    { question: "Expense ₹500 with no receipt can be:", options: ["Claimed in full with no issue", "Problematic for tax compliance and audit", "Only an issue above ₹5,000", "Claimed if manager approves verbally"], correct: 1 },
    { question: "Negative cash flow for 3 months straight means:", options: ["Normal business cycle", "Business is burning cash reserves", "Time to celebrate growth", "Accounting needs audit"], correct: 1 },
    { question: "HRA is:", options: ["Holiday Relief Amount", "House Rent Allowance in salary", "Health Risk Assessment", "Human Resource Audit"], correct: 1 },
    { question: "Google Ads spending is classified as:", options: ["Fixed expense", "Variable expense", "Capital expenditure", "Liability"], correct: 1 },
    { question: "Client consistently pays 15 days late. This is a:", options: ["Cash flow helper", "Cash flow killer", "Non-issue if profitable", "Marketing problem"], correct: 1 },
    { question: "Finance team's role in growth is:", options: ["Cost center to minimize", "Growth enabler through smart allocation", "Only for compliance", "Optional overhead"], correct: 1 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

const task1Quiz = [
    { q: "What is the core mindset for this role?", o: ["Just complete tasks", "Revenue-focused excellence", "Speed only", "Minimum effort"], c: 1 },
    { q: "Digital Heroes standard is:", o: ["Basic quality", "Premium quality only", "Cheap and fast", "Average"], c: 1 },
    { q: "Client satisfaction is:", o: ["Optional", "Our primary goal", "Secondary", "Not important"], c: 1 },
    { q: "Quality vs Speed priority:", o: ["Speed always", "Quality with efficiency", "Neither", "Random"], c: 1 },
    { q: "Continuous learning is:", o: ["Optional", "Essential for growth", "Wasted time", "Not needed"], c: 1 },
    { q: "Team collaboration means:", o: ["Work alone", "Share knowledge and support", "Compete only", "Ignore others"], c: 1 },
    { q: "Taking ownership means:", o: ["Blame others", "Be responsible for outcomes", "Avoid responsibility", "Wait for instructions"], c: 1 },
    { q: "Professional communication is:", o: ["Casual", "Clear, timely, and respectful", "Optional", "Slow"], c: 1 },
    { q: "Handling mistakes correctly:", o: ["Hide them", "Acknowledge and fix quickly", "Blame system", "Ignore"], c: 1 },
    { q: "Growth at Digital Heroes:", o: ["Limited", "Based on performance and initiative", "Random", "Impossible"], c: 1 }
];

const task2Quiz = [
    { q: "Understanding client needs is:", o: ["Optional", "Foundation of good work", "Not important", "Secondary"], c: 1 },
    { q: "Asking clarifying questions is:", o: ["Annoying", "Professional and necessary", "Waste of time", "Avoid always"], c: 1 },
    { q: "Active listening involves:", o: ["Interrupting", "Full attention and understanding", "Multi-tasking", "Ignoring details"], c: 1 },
    { q: "Documentation is:", o: ["Optional", "Critical for clarity", "Waste of time", "Not needed"], c: 1 },
    { q: "Following SOPs ensures:", o: ["Boredom", "Consistency and quality", "Slow work", "Nothing"], c: 1 },
    { q: "Deadline management means:", o: ["Miss deadlines", "Deliver on time or communicate early", "Ignore time", "Rush everything"], c: 1 },
    { q: "Quality check before delivery:", o: ["Skip it", "Always verify your work", "Client will check", "Optional"], c: 1 },
    { q: "Feedback should be:", o: ["Ignored", "Used for improvement", "Argued against", "Avoided"], c: 1 },
    { q: "Problem escalation path:", o: ["Hide problems", "Inform senior when stuck", "Ignore issues", "Wait it out"], c: 1 },
    { q: "Daily updates are:", o: ["Unnecessary", "Important for transparency", "Micromanagement", "Optional"], c: 1 }
];

const task3Quiz = [
    { q: "Tool proficiency is:", o: ["Optional", "Essential for efficiency", "Not needed", "Basic only"], c: 1 },
    { q: "Best practice adherence:", o: ["Sometimes", "Always follow proven methods", "Never", "Random"], c: 1 },
    { q: "Process optimization:", o: ["Avoid change", "Continuously improve", "Resist", "Ignore"], c: 1 },
    { q: "Cross-functional knowledge:", o: ["Not needed", "Adds value to work", "Confusing", "Avoid"], c: 1 },
    { q: "Attention to detail:", o: ["Overrated", "Differentiates premium work", "Slow", "Skip details"], c: 1 },
    { q: "Standard templates:", o: ["Unnecessary", "Save time and ensure consistency", "Boring", "Avoid"], c: 1 },
    { q: "Automation opportunities:", o: ["Threats", "Increase efficiency", "Avoid", "Not possible"], c: 1 },
    { q: "Knowledge sharing:", o: ["Competitive disadvantage", "Strengthens the team", "Avoid", "Optional"], c: 1 },
    { q: "Error prevention:", o: ["Not possible", "Better than error correction", "Not important", "Skip"], c: 1 },
    { q: "Work organization:", o: ["Random", "Systematic approach works best", "Chaos is good", "Avoid planning"], c: 1 }
];

const task4Quiz = [
    { q: "Communication clarity:", o: ["Optional", "Prevents misunderstandings", "Slow", "Not needed"], c: 1 },
    { q: "Response time matters:", o: ["Not really", "Shows professionalism", "Slow is fine", "Ignore"], c: 1 },
    { q: "Written communication:", o: ["Casual", "Professional and clear", "Any style", "Avoid"], c: 1 },
    { q: "Meeting preparation:", o: ["Not needed", "Shows respect and efficiency", "Waste of time", "Optional"], c: 1 },
    { q: "Follow-up actions:", o: ["Forget them", "Track and complete", "Optional", "Ignore"], c: 1 },
    { q: "Conflict resolution:", o: ["Avoid", "Address professionally", "Escalate everything", "Ignore"], c: 1 },
    { q: "Giving updates:", o: ["When asked", "Proactively share progress", "Never", "Only problems"], c: 1 },
    { q: "Asking for help:", o: ["Sign of weakness", "Smart when needed", "Never", "Avoid always"], c: 1 },
    { q: "Handling criticism:", o: ["Get defensive", "Accept and improve", "Ignore", "Argue back"], c: 1 },
    { q: "Positive attitude:", o: ["Fake", "Improves productivity", "Not important", "Optional"], c: 1 }
];

const task5Quiz = [
    { q: "Priority management:", o: ["Random order", "Focus on high impact first", "Easy first", "Avoid prioritizing"], c: 1 },
    { q: "Time blocking:", o: ["Unnecessary", "Increases focus", "Too rigid", "Avoid"], c: 1 },
    { q: "Multi-tasking:", o: ["Efficient", "Reduces quality", "Best approach", "Always do"], c: 1 },
    { q: "Deep work sessions:", o: ["Not productive", "Allow complex problem solving", "Waste time", "Avoid"], c: 1 },
    { q: "Distraction management:", o: ["Impossible", "Essential for productivity", "Not needed", "Ignore"], c: 1 },
    { q: "Break scheduling:", o: ["Lazy", "Improves sustained performance", "Avoid", "Never break"], c: 1 },
    { q: "Energy management:", o: ["Not relevant", "Match tasks to energy levels", "Ignore", "Push through"], c: 1 },
    { q: "Task batching:", o: ["Inefficient", "Reduces context switching", "Avoid", "Random is better"], c: 1 },
    { q: "Deadline buffer:", o: ["Unnecessary", "Accounts for unexpected issues", "Lazy", "Skip"], c: 1 },
    { q: "Progress tracking:", o: ["Micromanagement", "Keeps work on track", "Avoid", "Optional"], c: 1 }
];

const task6Quiz = [
    { q: "Quality standards:", o: ["Negotiable", "Must be maintained", "Optional", "Client decides"], c: 1 },
    { q: "Review process:", o: ["Skip it", "Catches errors before delivery", "Waste of time", "Optional"], c: 1 },
    { q: "Peer feedback:", o: ["Threatening", "Valuable for improvement", "Avoid", "Ignore"], c: 1 },
    { q: "Revision handling:", o: ["Complain", "Professional and timely", "Argue", "Delay"], c: 1 },
    { q: "Client expectations:", o: ["Ignore", "Set and exceed appropriately", "Lower them", "Avoid discussing"], c: 1 },
    { q: "Scope clarity:", o: ["Not important", "Prevents scope creep", "Optional", "Ignore"], c: 1 },
    { q: "Deliverable standards:", o: ["Variable", "Consistent premium quality", "Random", "Basic"], c: 1 },
    { q: "Testing before delivery:", o: ["Skip", "Always verify", "Optional", "Client tests"], c: 1 },
    { q: "Documentation of work:", o: ["Not needed", "Enables handoff and clarity", "Waste of time", "Skip"], c: 1 },
    { q: "Continuous improvement:", o: ["Not possible", "Part of professional growth", "Unnecessary", "Avoid"], c: 1 }
];

const task7Quiz = [
    { q: "Team support:", o: ["Competition", "Collaborative success", "Avoid helping", "Only when asked"], c: 1 },
    { q: "Knowledge transfer:", o: ["Keep secrets", "Share to strengthen team", "Avoid", "Optional"], c: 1 },
    { q: "Cross-training:", o: ["Waste of time", "Creates backup capabilities", "Unnecessary", "Avoid"], c: 1 },
    { q: "Positive team culture:", o: ["Not important", "Improves productivity", "Fake", "Optional"], c: 1 },
    { q: "Constructive feedback:", o: ["Avoid", "Helps improvement", "Offensive", "Skip"], c: 1 },
    { q: "Recognition of others:", o: ["Unnecessary", "Motivates team", "Fake", "Avoid"], c: 1 },
    { q: "Conflict with colleagues:", o: ["Escalate immediately", "Address professionally", "Ignore always", "Complain"], c: 1 },
    { q: "Team meetings:", o: ["Waste of time", "Align and coordinate work", "Skip when possible", "Unnecessary"], c: 1 },
    { q: "Shared responsibilities:", o: ["Avoid", "Distribute appropriately", "Do everything alone", "Ignore"], c: 1 },
    { q: "Celebrating wins:", o: ["Unnecessary", "Builds morale", "Waste of time", "Skip"], c: 1 }
];

const task8Quiz = [
    { q: "Difficult situations require:", o: ["Panic", "Calm professional response", "Avoid", "Ignore"], c: 1 },
    { q: "Client complaints:", o: ["Argue back", "Listen and resolve", "Ignore", "Blame others"], c: 1 },
    { q: "Mistake acknowledgment:", o: ["Hide", "Own and fix quickly", "Blame system", "Deny"], c: 1 },
    { q: "Pressure handling:", o: ["Break down", "Stay focused and prioritize", "Complain", "Give up"], c: 1 },
    { q: "Unexpected changes:", o: ["Refuse", "Adapt professionally", "Complain loudly", "Quit"], c: 1 },
    { q: "Tight deadlines:", o: ["Miss them", "Communicate and prioritize", "Ignore quality", "Panic"], c: 1 },
    { q: "Unclear requirements:", o: ["Guess", "Ask for clarification", "Ignore", "Complain"], c: 1 },
    { q: "Resource constraints:", o: ["Give up", "Find creative solutions", "Complain", "Do nothing"], c: 1 },
    { q: "Feedback rejection:", o: ["Get upset", "Ask for specifics and improve", "Argue", "Ignore"], c: 1 },
    { q: "Burnout prevention:", o: ["Not important", "Essential for sustained performance", "Ignore", "Push through"], c: 1 }
];

const task9Quiz = [
    { q: "Process adherence:", o: ["Optional", "Ensures quality and consistency", "Slows work", "Ignore"], c: 1 },
    { q: "Checklist usage:", o: ["Unnecessary", "Prevents missed steps", "Waste of time", "Skip"], c: 1 },
    { q: "Standard operating procedures:", o: ["Ignore", "Follow for consistency", "Outdated", "Optional"], c: 1 },
    { q: "Quality gates:", o: ["Skip", "Ensure standards are met", "Slow", "Unnecessary"], c: 1 },
    { q: "Approval workflows:", o: ["Avoid", "Ensure proper sign-off", "Bureaucracy", "Skip"], c: 1 },
    { q: "Version control:", o: ["Not needed", "Tracks changes safely", "Complex", "Avoid"], c: 1 },
    { q: "Backup practices:", o: ["Optional", "Essential protection", "Waste of storage", "Skip"], c: 1 },
    { q: "Security practices:", o: ["Paranoid", "Protect client and company data", "Unnecessary", "Optional"], c: 1 },
    { q: "Compliance requirements:", o: ["Ignore", "Must be followed", "Optional", "Outdated"], c: 1 },
    { q: "Audit preparation:", o: ["Panic", "Maintain records proactively", "Fake it", "Ignore"], c: 1 }
];

const task10Quiz = [
    { q: "Certification validates:", o: ["Nothing", "Competency in role", "Waste of time", "Luck"], c: 1 },
    { q: "Continuous learning:", o: ["Ends at certification", "Ongoing requirement", "Optional", "Not needed"], c: 1 },
    { q: "Video walkthrough:", o: ["Skip it", "Demonstrates practical knowledge", "Optional", "Unnecessary"], c: 1 },
    { q: "Career growth requires:", o: ["Luck only", "Skill development and initiative", "Politics", "Time only"], c: 1 },
    { q: "Professional development:", o: ["Company responsibility", "Personal responsibility", "Not important", "Optional"], c: 1 },
    { q: "Mentoring others:", o: ["Threat", "Strengthens your knowledge", "Avoid", "Not possible"], c: 1 },
    { q: "Industry updates:", o: ["Ignore", "Stay current for relevance", "Not important", "Optional"], c: 1 },
    { q: "Skill gaps:", o: ["Hide them", "Identify and address", "Ignore", "Not possible"], c: 1 },
    { q: "Performance reviews:", o: ["Avoid", "Opportunity for growth feedback", "Threatening", "Skip"], c: 1 },
    { q: "Long-term goals:", o: ["Not needed", "Guide development efforts", "Unrealistic", "Avoid"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
