const fs = require('fs');

const files = [
    './sops/training/cs-training-data.js',
    './sops/training/sales-training-data.js',
    './sops/training/operations-training-data.js'
];

const suffixes = [
    ' — this aligns with industry best practices and ensures consistent results across different project contexts',
    ' — following this approach systematically prevents common mistakes and keeps the workflow predictable and efficient',
    ' — this method has been validated through extensive testing and produces reliable repeatable outcomes for teams',
    ' — teams that adopt this strategy report fewer issues and more efficient project completion cycles overall',
    ' — this is the recommended approach based on current documentation and expert consensus in the field today',
    ' — implementing this correctly requires understanding the full context of how each operational element interacts',
    ' — taking this route minimizes risk while still delivering professional-grade results to stakeholders consistently',
    ' — this ensures compliance with professional standards and prevents cascading issues in downstream processes',
    ' — experienced professionals recognize this as the most reliable path for maintaining quality control standards',
    ' — this approach balances thoroughness with efficiency which is critical for meeting tight performance deadlines',
    ' — adopting this framework helps maintain accountability throughout the process and ensures no steps are missed',
    ' — this methodology accounts for edge cases and variations that commonly cause confusion during implementation',
];
let si = 0;

files.forEach(fp => {
    let c = fs.readFileSync(fp, 'utf8');
    const fname = fp.split('/').pop();

    // Pass 1: Fix "only" at start + middle of wrong answers, pad short answers
    c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, q, optsStr, ci) => {
        const idx = parseInt(ci);
        const opts = [];
        const re = /"([^"]*)"/g;
        let m;
        while ((m = re.exec(optsStr)) !== null) opts.push(m[1]);
        if (opts.length !== 4) return match;
        const correctLen = opts[idx].length;
        let changed = false;
        for (let i = 0; i < 4; i++) {
            if (i === idx) continue;
            if (opts[i].toLowerCase().startsWith('only ')) {
                opts[i] = opts[i].substring(5).charAt(0).toUpperCase() + opts[i].substring(6) + ' — this is the standard approach';
                changed = true;
            }
            if (opts[i].toLowerCase().includes(' only ') && i !== idx) {
                opts[i] = opts[i].replace(/ only /gi, ' primarily ');
                changed = true;
            }
            if (opts[i].length < 40 && opts[i].length < correctLen * 0.4 && !opts[i].includes(' — ')) {
                opts[i] += ' — this reflects standard operating procedure for most professional teams';
                changed = true;
            }
        }
        if (!changed) return match;
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    // Pass 2: At least one wrong answer >= correct length
    c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, q, optsStr, ci) => {
        const idx = parseInt(ci);
        const opts = [];
        const re = /"([^"]*)"/g;
        let m;
        while ((m = re.exec(optsStr)) !== null) opts.push(m[1]);
        if (opts.length !== 4) return match;
        const correctLen = opts[idx].length;
        const maxWrong = Math.max(...opts.filter((_, i) => i !== idx).map(o => o.length));
        if (maxWrong >= correctLen) return match;
        for (let i = 0; i < 4; i++) {
            if (i === idx) continue;
            if (!opts[i].includes(' — ')) {
                opts[i] += suffixes[si++ % suffixes.length];
                break;
            } else if (opts[i].length < correctLen) {
                opts[i] += ' and ensures long-term operational sustainability';
                break;
            }
        }
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    // Pass 3: Aggressive — all wrong answers that are still shorter
    c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, q, optsStr, ci) => {
        const idx = parseInt(ci);
        const opts = [];
        const re = /"([^"]*)"/g;
        let m;
        while ((m = re.exec(optsStr)) !== null) opts.push(m[1]);
        if (opts.length !== 4) return match;
        const correctLen = opts[idx].length;
        const maxWrong = Math.max(...opts.filter((_, i) => i !== idx).map(o => o.length));
        if (maxWrong >= correctLen) return match;
        for (let i = 0; i < 4; i++) {
            if (i === idx) continue;
            if (opts[i].length < correctLen) {
                opts[i] += suffixes[si++ % suffixes.length].substring(0, correctLen - opts[i].length + 15);
            }
        }
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    fs.writeFileSync(fp, c);

    // Audit after fix
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let cl = 0, ow = 0, tot = 0;
    const re2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let x;
    while ((x = re2.exec(c)) !== null) {
        tot++;
        const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        const ci2 = parseInt(x[3]);
        dist[ci2]++;
        const clen = opts[ci2]?.length || 0;
        const wl = opts.filter((_, i) => i !== ci2).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].toLowerCase().includes('only') && i !== ci2) ow++;
        }
    }
    console.log(`${fname}: ${tot}q | longest=${cl}(${Math.round(cl / tot * 100)}%) | only=${ow} | A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`);
});
