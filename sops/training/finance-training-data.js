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
    { question: "What percentage of businesses fail due to cash flow problems?", options: ["20%", "50%", "82%", "95%"], correct: 2 },
    { question: "Invoice should be sent within how many hours?", options: ["24", "48", "72", "1 week"], correct: 1 },
    { question: "Net Profit Margin target for service business:", options: [">5%", ">15%", ">50%", ">80%"], correct: 1 },
    { question: "Days Sales Outstanding target:", options: ["<7 days", "<30 days", "<90 days", "<180 days"], correct: 1 },
    { question: "GST rate for most services:", options: ["5%", "12%", "18%", "28%"], correct: 2 },
    { question: "TDS for professionals is usually:", options: ["5%", "10%", "20%", "30%"], correct: 1 },
    { question: "TDS must be deposited by:", options: ["Same day", "7th of next month", "End of quarter", "End of year"], correct: 1 },
    { question: "Cash Runway should be:", options: [">1 month", ">3 months", ">1 year", "Doesn't matter"], correct: 1 },
    { question: "CGST + SGST applies to:", options: ["Inter-state", "Intra-state", "International", "None"], correct: 1 },
    { question: "Net 30 means:", options: ["30% off", "Pay in 30 days", "30 items", "30 invoices"], correct: 1 },
    { question: "P&L Statement shows:", options: ["Assets", "Revenue - Expenses", "Bank balance", "Inventory"], correct: 1 },
    { question: "Cash Flow report frequency:", options: ["Yearly", "Monthly", "Weekly", "Daily"], correct: 2 },
    { question: "Budget buffer should be:", options: ["0%", "5%", "10%", "50%"], correct: 2 },
    { question: "Invoice must have:", options: ["Just amount", "GST number", "Logo only", "None"], correct: 1 },
    { question: "Gross Profit Margin target:", options: [">10%", ">30%", ">50%", ">90%"], correct: 2 },
    { question: "IGST applies to:", options: ["Intra-state", "Inter-state", "Same city", "None"], correct: 1 },
    { question: "50/30/20 rule: 50% for:", options: ["Growth", "Operations", "Reserve", "Salary"], correct: 1 },
    { question: "Fixed expenses include:", options: ["Ads", "Rent", "Materials", "Commissions"], correct: 1 },
    { question: "Balance Sheet shows:", options: ["Only profit", "Assets, Liabilities, Equity", "Only expenses", "Sales"], correct: 1 },
    { question: "GSTR-3B is filed:", options: ["Yearly", "Quarterly", "Monthly", "Daily"], correct: 2 },
    { question: "Payroll deductions include:", options: ["Bonus", "PF and TDS", "Overtime", "None"], correct: 1 },
    { question: "2/10 Net 30 means:", options: ["2% discount if paid in 10 days", "Pay 2% in 10 days", "10% off", "None"], correct: 0 },
    { question: "Cash In - Cash Out =", options: ["Profit", "Net Cash Flow", "Revenue", "Expenses"], correct: 1 },
    { question: "Late invoices cause:", options: ["Faster payment", "Late payment", "More sales", "Nothing"], correct: 1 },
    { question: "Every expense needs:", options: ["Nothing", "Receipt and category", "Approval only", "Meeting"], correct: 1 },
    { question: "Negative cash flow means:", options: ["Growing", "Burning cash", "Breaking even", "Profit"], correct: 1 },
    { question: "HRA stands for:", options: ["High Rate Allowance", "House Rent Allowance", "Human Resource Account", "None"], correct: 1 },
    { question: "Variable expenses include:", options: ["Salaries", "Rent", "Ads and commissions", "Insurance"], correct: 2 },
    { question: "Cash flow killer example:", options: ["Early client payment", "Late client payment", "No expenses", "High revenue"], correct: 1 },
    { question: "Finance role is:", options: ["Cost center", "Growth enabler", "Unnecessary", "Optional"], correct: 1 }
];
