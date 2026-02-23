// Fix Social Media and Client-Chat patterns + comprehensive rebalance + syntax verify on ALL modules
const fs = require('fs');

const modules = [
    'social-media-training-data.js',
    'client-chat-training-data.js',
    'finance-training-data.js',
    'pm-training-data.js',
    'content-training-data.js',
    'designer-training-data.js',
    'developer-training-data.js',
    'fiverr-risk-training-data.js'
];

const suffixes = [
    ' — this aligns with industry best practices and ensures consistent results across different project types',
    ' — following this approach systematically prevents common mistakes and keeps the workflow predictable',
    ' — this method has been validated through extensive testing and produces reliable, repeatable outcomes',
    ' — teams that adopt this strategy report fewer issues and more efficient project completion cycles',
    ' — this is the recommended approach based on current platform documentation and expert consensus',
    ' — implementing this correctly requires understanding the full context of how each element interacts',
    ' — taking this route minimizes risk while still delivering professional-grade results to stakeholders',
    ' — this ensures compliance with professional standards and prevents cascading issues downstream',
    ' — experienced professionals recognize this as the most reliable path for maintaining quality control',
    ' — this approach balances thoroughness with efficiency, which is critical for meeting tight deadlines',
    ' — research supports this methodology as the most effective for achieving measurable improvements',
    ' — applying this principle consistently across all projects builds a reputation for professional excellence',
    ' — this demonstrates the kind of systematic thinking that separates competent work from exceptional work',
    ' — understanding why this works helps prevent the same category of problems from recurring in the future',
    ' — the reasoning behind this connects directly to broader principles of professional service delivery',
];

let sidx = 0;
function nextSuffix() { return suffixes[sidx++ % suffixes.length]; }

const results = [];

for (const mod of modules) {
    const fp = `./sops/training/${mod}`;
    let c;
    try { c = fs.readFileSync(fp, 'utf8'); } catch { continue; }

    let pass1 = 0, pass2 = 0, onlyFix = 0;

    // Pass 1: Remove "only" from wrong answers + pad very short answers
    c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, question, optsStr, correctIdx) => {
        const ci = parseInt(correctIdx);
        const opts = [];
        const optRegex = /"([^"]*)"/g;
        let om;
        while ((om = optRegex.exec(optsStr)) !== null) opts.push(om[1]);
        if (opts.length !== 4) return match;

        const correctLen = opts[ci].length;
        let changed = false;

        for (let i = 0; i < opts.length; i++) {
            if (i === ci) continue;
            // Fix "only" patterns
            if (opts[i].toLowerCase().startsWith('only ')) {
                opts[i] = opts[i].substring(5).charAt(0).toUpperCase() + opts[i].substring(6) + ' — this is the standard approach most teams follow';
                onlyFix++; changed = true;
            } else if (/\bonly\b/i.test(opts[i]) && opts[i].length < 60) {
                opts[i] = opts[i].replace(/\bonly\b/gi, 'primarily');
                onlyFix++; changed = true;
            }
            // Pad very short answers
            if (opts[i].length < 45 && opts[i].length < correctLen * 0.5 && !opts[i].includes(' — ')) {
                opts[i] = opts[i] + ' — this reflects the standard operating procedure most organizations follow';
                pass1++; changed = true;
            }
        }

        if (!changed) return match;
        const newOpts = opts.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
        return `{ q: "${question}", o: [${newOpts}], c: ${ci} }`;
    });

    // Pass 2: Ensure at least one wrong answer exceeds correct answer
    c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, question, optsStr, correctIdx) => {
        const ci = parseInt(correctIdx);
        const opts = [];
        const optRegex = /"([^"]*)"/g;
        let om;
        while ((om = optRegex.exec(optsStr)) !== null) opts.push(om[1]);
        if (opts.length !== 4) return match;

        const correctLen = opts[ci].length;
        const maxWrong = Math.max(...opts.filter((_, i) => i !== ci).map(o => o.length));

        if (maxWrong >= correctLen) return match; // Already good

        // Find shortest wrong answer and pad it
        let shortestIdx = -1, shortestLen = Infinity;
        for (let i = 0; i < opts.length; i++) {
            if (i === ci) continue;
            if (opts[i].length < shortestLen) { shortestLen = opts[i].length; shortestIdx = i; }
        }

        if (shortestIdx >= 0) {
            if (!opts[shortestIdx].includes(' — ')) {
                opts[shortestIdx] = opts[shortestIdx] + nextSuffix();
            } else {
                // Already has " — ", pad a different one
                for (let i = 0; i < opts.length; i++) {
                    if (i === ci) continue;
                    if (!opts[i].includes(' — ') || opts[i].length < correctLen) {
                        opts[i] = opts[i] + ' and ensures long-term sustainability across your deliverables';
                        break;
                    }
                }
            }
            pass2++;
        }

        const newOpts = opts.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
        return `{ q: "${question}", o: [${newOpts}], c: ${ci} }`;
    });

    fs.writeFileSync(fp, c);

    // Audit
    const qs = [];
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let x;
    while ((x = re.exec(c)) !== null) {
        const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        qs.push({ o: opts, c: parseInt(x[3]) });
    }

    let cl = 0, ow = 0;
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    for (const q of qs) {
        dist[q.c]++;
        const ci = q.c;
        const clen = q.o[ci]?.length || 0;
        const wl = q.o.filter((_, i) => i !== ci).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < q.o.length; i++) {
            if (q.o[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
    }

    const name = mod.replace('-training-data.js', '');
    const total = qs.length;
    results.push(`${name}: ${total}q | longest=${cl}(${Math.round(cl / total * 100)}%) | only=${ow} | A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]} | fixes: p1=${pass1} p2=${pass2} only=${onlyFix}`);

    // Syntax check
    try { new Function(c); } catch (e) { results.push(`  ⚠️ ${name} syntax: ${e.message.substring(0, 60)}`); }
}

fs.writeFileSync('final-audit.txt', results.join('\n'));
console.log('Done! Results in final-audit.txt');
