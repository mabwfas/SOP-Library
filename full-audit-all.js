const fs = require('fs');
const path = require('path');

const dir = './sops/training/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('-data.js') || f.endsWith('-data-new.js') || f.endsWith('-part1.js') || f.endsWith('-part2.js'));

console.log('=== COMPREHENSIVE TRAINING MODULE AUDIT ===');
console.log('Date:', new Date().toISOString());
console.log('Files found:', files.length);
console.log('');

const results = [];
let grandTotal = 0;

files.forEach(f => {
    const c = fs.readFileSync(dir + f, 'utf8');
    const lines = c.split('\n').length;

    // Count questions
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let cl = 0, ow = 0, tot = 0, scenario = 0, badOpts = 0;
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = re.exec(c)) !== null) {
        tot++;
        const qText = m[1];
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        const ci = parseInt(m[3]);

        if (opts.length !== 4) badOpts++;

        dist[ci]++;
        const clen = opts[ci]?.length || 0;
        const wl = opts.filter((_, i) => i !== ci).map(o => o.length);
        if (wl.length > 0 && clen > Math.max(...wl)) cl++;

        for (let i = 0; i < opts.length; i++) {
            if (opts[i].toLowerCase().includes('only') && i !== ci) ow++;
        }

        // Scenario detection (contains situation-based keywords)
        if (/you |your |client |colleague |team |manager |developer |designer |during |scenario|situation/i.test(qText)) {
            scenario++;
        }
    }

    // Check for allQuizzes
    const hasAllQuizzes = c.includes('allQuizzes');

    // Check for task content variables
    const contentVars = [...c.matchAll(/const\s+(task\d+Content)\s*=/g)].map(m => m[1]);
    const quizVars = [...c.matchAll(/const\s+(task\d+Quiz)\s*=/g)].map(m => m[1]);

    grandTotal += tot;

    if (tot === 0 && !hasAllQuizzes) {
        console.log(`📄 ${f} — ${lines} lines | Content-only file (${contentVars.length} content vars, no quizzes)`);
        return;
    }

    const scenarioPct = tot > 0 ? Math.round(scenario / tot * 100) : 0;
    const longestPct = tot > 0 ? Math.round(cl / tot * 100) : 0;
    const maxDist = Math.max(dist[0], dist[1], dist[2], dist[3]);
    const minDist = Math.min(dist[0], dist[1], dist[2], dist[3]);
    const skew = tot > 0 ? Math.round((maxDist - minDist) / tot * 100) : 0;

    let status = '✅';
    const issues = [];
    if (longestPct > 10) { status = '⚠️'; issues.push(`longest=${longestPct}%`); }
    if (skew > 10) { status = '⚠️'; issues.push(`skew=${skew}%`); }
    if (ow > tot * 0.3) { status = '⚠️'; issues.push(`only=${ow}`); }
    if (badOpts > 0) { status = '❌'; issues.push(`badOpts=${badOpts}`); }
    if (scenarioPct < 20 && tot > 10) { issues.push(`low-scenario=${scenarioPct}%`); }

    console.log(`${status} ${f}`);
    console.log(`   ${tot}q | longest=${cl}(${longestPct}%) | only=${ow} | scenario=${scenario}(${scenarioPct}%)`);
    console.log(`   A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]} | quizVars: ${quizVars.length} | allQuizzes: ${hasAllQuizzes ? 'YES' : 'NO'}`);
    if (issues.length > 0) console.log(`   Issues: ${issues.join(', ')}`);
    console.log('');

    results.push({ file: f, tot, cl, longestPct, ow, scenario, scenarioPct, dist, status, issues, quizVars: quizVars.length, hasAllQuizzes });
});

console.log('=== SUMMARY ===');
console.log(`Total questions across all files: ${grandTotal}`);
const passing = results.filter(r => r.status === '✅').length;
const warning = results.filter(r => r.status === '⚠️').length;
const failing = results.filter(r => r.status === '❌').length;
console.log(`✅ Passing: ${passing} | ⚠️ Warning: ${warning} | ❌ Failing: ${failing}`);

// Check which HTML files load which data files
console.log('\n=== HTML → DATA FILE MAPPING ===');
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(h => {
    const html = fs.readFileSync(dir + h, 'utf8');
    const scripts = [...html.matchAll(/src="([^"]*training-data[^"]*)"/g)].map(m => m[1]);
    console.log(`${h} → ${scripts.length > 0 ? scripts.join(', ') : 'NO DATA FILE'}`);
});

// Check for duplicate hr-training-data files
console.log('\n=== HR DATA FILE CHECK ===');
const hrHtml = fs.readFileSync(dir + 'hr-training.html', 'utf8');
const hrScripts = [...hrHtml.matchAll(/src="([^"]*)"/g)].map(m => m[1]).filter(s => s.includes('training-data'));
console.log('HR HTML loads:', hrScripts.join(', '));

// Write results to file
fs.writeFileSync('full-audit-results.txt', JSON.stringify(results, null, 2));
console.log('\nDetailed results written to full-audit-results.txt');
