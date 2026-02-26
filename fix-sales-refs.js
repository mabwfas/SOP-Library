const fs = require('fs');

// 1. Fix sales-training-data.js - replace the 5% commission section
const salesFile = './sops/training/sales-training-data.js';
let sales = fs.readFileSync(salesFile, 'utf8');

// Replace the 5% Commission heading
sales = sales.replace('5% Commission</h3>', 'Commission Structure</h3>');
sales = sales.replace('On all projects above $5,000</p>', 'Tiered rates based on deal value</p>');
sales = sales.replace('Passive Income</div>', 'Performance-Based</div>');
sales = sales.replace('(Paid on Milestone Completion)</div>', '(As per Incentive & Penalty Framework)</div>');

// Replace the commission table with a reference box
const tableStart = '<table style="width: 100%; margin: 25px 0; border-collapse: separate; border-spacing: 0 10px;">';
const tableEnd = '</table>\r\n<p style="font-size: 0.9em; opacity: 0.7;">*Note: Commission is paid 7 days after the client\'s final payment clears. No commission on "MVP" or discounted packages (which we shouldn\'t be selling anyway).</p>';

const tableStartIdx = sales.indexOf(tableStart, 800);
const tableEndIdx = sales.indexOf(tableEnd, 800);

if (tableStartIdx !== -1 && tableEndIdx !== -1) {
    const replacement = `<div class="highlight-box">
    <strong>📋 Commission Details:</strong><br><br>
    Sales commissions are structured in tiers based on deal value — including Starter, Standard, and High-Value closure rates, plus target overachievement bonuses and enterprise acquisition bonuses.<br><br>
    <strong>👉 Refer to the <a href="incentive-penalty.html" style="color: #A78BFA;">Incentive & Penalty Framework</a> for the latest commission rates, tiers, and bonus structures.</strong><br><br>
    <em style="color: #94A3B8;">The I&P page is the single source of truth for all current incentive rates.</em>
</div>`;
    sales = sales.substring(0, tableStartIdx) + replacement + sales.substring(tableEndIdx + tableEnd.length);
    console.log('✅ Replaced commission table in sales-training-data.js');
} else {
    console.log('❌ Could not find commission table boundaries');
    console.log('tableStart found:', tableStartIdx);
    console.log('tableEnd found:', tableEndIdx);
}

fs.writeFileSync(salesFile, sales);

// 2. Fix sales-sop.html  
const sopFile = './sops/sales-sop.html';
let sop = fs.readFileSync(sopFile, 'utf8');

// Replace specific 5% commission references with generic
sop = sop.replace(
    /<strong>5% commission<\/strong> on the total project value\./g,
    '<strong>commission as per the Incentive & Penalty Framework</strong> (refer to the latest I&P page for current rates).'
);
sop = sop.replace(
    /Projects above \$1,000 = <strong>5% commission<\/strong> on everything they make from the/g,
    'Projects above threshold = <strong>commission as per the Incentive & Penalty Framework</strong> on deal value (refer to the latest I&P page for current'
);

// Fix the section header
sop = sop.replace(
    '5% Commission Structure (Projects Above $1,000)',
    'Commission Structure (As per Incentive & Penalty Framework)'
);

// Fix the detailed commission text if present
sop = sop.replace(
    /5% commission on everything they[\s\r\n]+make from the/g,
    'commission as per the Incentive & Penalty Framework on deal value (refer to the I&P page for current'
);

fs.writeFileSync(sopFile, sop);
console.log('✅ Fixed sales-sop.html');

console.log('\nDone!');
