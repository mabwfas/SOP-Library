const fs = require('fs');
const dir = './sops/training/';

// All active training data files (excluding old hr-training-data.js which is unused)
const modules = [
    { name: 'CS', file: 'cs-training-data.js' },
    { name: 'Sales', file: 'sales-training-data.js' },
    { name: 'Operations', file: 'operations-training-data.js' },
    { name: 'Finance', file: 'finance-training-data.js' },
    { name: 'PM', file: 'pm-training-data.js' },
    { name: 'Content', file: 'content-training-data.js' },
    { name: 'Social Media', file: 'social-media-training-data.js' },
    { name: 'Client-Chat', file: 'client-chat-training-data.js' },
    { name: 'Designer', file: 'designer-training-data.js' },
    { name: 'Developer', file: 'developer-training-data.js' },
    { name: 'Fiverr Risk', file: 'fiverr-risk-training-data.js' },
    { name: 'HR', file: 'hr-training-data-new.js' },
    { name: 'WordPress', file: 'wordpress-training-data.js' },
    { name: 'Full-Stack', file: 'fullstack-training-data.js' },
    { name: 'Full-Stack P2', file: 'fullstack-training-data-part2.js' },
];

// SOP keywords — company-specific terms that indicate SOP alignment
const sopKeywords = [
    'digital heroes', 'sop', 'eod', 'discord', 'fiverr', 'shopify', 'delhi team',
    'pm ', 'project manager', 'kpi', 'kra', 'slack', '#ask-hr', 'lucknow',
    'point a', 'point b', 'equity', 'zero tolerance', 'termination', 'probation',
    'notice period', 'buddy system', 'interconnected chain', 'manifesto',
    'discipline', 'instant reply', 'specificity rule', 'revenue developer',
    'crisis', 'escalat', 'handover', 'staging', 'client satisfaction',
    '5-star', 'five star', 'review', 'onboarding', 'offboarding',
    'audit', 'qa ', 'quality assurance', 'sprint', 'status update',
    'daily standup', 'brief', 'deliverable', 'milestone', 'scope',
    'company', 'team lead', 'agency', 'our ', 'we '
];

console.log('=== COMPREHENSIVE AUDIT: QUALITY + SOP ALIGNMENT ===\n');

let grandTotal = 0;
const rows = [];

modules.forEach(mod => {
    const c = fs.readFileSync(dir + mod.file, 'utf8');
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let cl = 0, ow = 0, tot = 0, scenario = 0, sopAligned = 0;
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = re.exec(c)) !== null) {
        tot++;
        const qText = m[1].toLowerCase();
        const allOpts = m[2].toLowerCase();
        const fullText = qText + ' ' + allOpts;
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        const ci = parseInt(m[3]);

        dist[ci]++;
        const clen = opts[ci]?.length || 0;
        const wl = opts.filter((_, i) => i !== ci).map(o => o.length);
        if (wl.length > 0 && clen > Math.max(...wl)) cl++;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].toLowerCase().includes('only') && i !== ci) ow++;
        }

        // Scenario check
        if (/you |your |client |colleague |team |manager |developer |designer |during |scenario|situation/i.test(m[1])) {
            scenario++;
        }

        // SOP-alignment check
        let isSop = false;
        for (const kw of sopKeywords) {
            if (fullText.includes(kw.toLowerCase())) { isSop = true; break; }
        }
        if (isSop) sopAligned++;
    }

    if (tot === 0) return;
    grandTotal += tot;

    const longestPct = Math.round(cl / tot * 100);
    const scenarioPct = Math.round(scenario / tot * 100);
    const sopPct = Math.round(sopAligned / tot * 100);

    let status = '✅';
    if (longestPct > 10) status = '⚠️';

    rows.push({ name: mod.name, tot, longestPct, ow, scenarioPct, sopPct, dist, status });

    console.log(`${status} ${mod.name.padEnd(15)} | ${tot}q | longest=${String(longestPct).padStart(2)}% | only=${String(ow).padStart(2)} | scenario=${String(scenarioPct).padStart(2)}% | SOP=${String(sopPct).padStart(2)}% | A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`);
});

console.log('\n=== SUMMARY ===');
console.log(`Total questions: ${grandTotal}`);
console.log(`\nModules with longest-bias > 10%:`);
rows.filter(r => r.longestPct > 10).forEach(r => console.log(`  ⚠️ ${r.name}: ${r.longestPct}%`));
console.log(`\nModules with low SOP alignment (< 30%):`);
rows.filter(r => r.sopPct < 30).forEach(r => console.log(`  🔻 ${r.name}: ${r.sopPct}%`));
console.log(`\nModules with low scenario % (< 20%):`);
rows.filter(r => r.scenarioPct < 20).forEach(r => console.log(`  🔻 ${r.name}: ${r.scenarioPct}%`));

if (rows.filter(r => r.longestPct > 10).length === 0) {
    console.log('  None — all modules pass ✅');
}
