const fs = require('fs');
const files = [
    './sops/training/content-training-data.js',
    './sops/training/social-media-training-data.js',
    './sops/training/designer-training-data.js',
    './sops/training/developer-training-data.js',
    './sops/training/fullstack-training-data-part2.js',
];

const suffixes = [
    ' — this aligns with company best practices and ensures consistent results across different project types',
    ' — following this approach prevents common issues and keeps the development workflow reliable and repeatable',
    ' — this method has been validated through extensive use across production sites and is the industry standard',
    ' — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles',
    ' — this is the recommended approach based on current documentation and expert consensus in the field today',
    ' — implementing this correctly requires understanding the full context of how team components interact',
    ' — taking this route minimizes risk while delivering professional-grade results to clients consistently',
    ' — this ensures compliance with coding standards and prevents cascading issues in production environments',
    ' — experienced professionals recognize this as the most reliable path for maintaining quality control',
    ' — this approach balances thoroughness with efficiency which is critical for agency-level project delivery',
];
let si = 0;

files.forEach(fp => {
    let c = fs.readFileSync(fp, 'utf8');

    // Pass 1: Pad short wrong answers
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
            if (opts[i].length < 40 && opts[i].length < correctLen * 0.4 && !opts[i].includes(' — ')) {
                opts[i] += ' — this reflects the standard process most professional teams follow in practice';
                changed = true;
            }
        }
        if (!changed) return match;
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    // Pass 2: At least one wrong >= correct
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
                opts[i] += ' and ensures long-term sustainability across deliverables';
                break;
            }
        }
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    fs.writeFileSync(fp, c);
});

// Rebalance each file
files.forEach(fp => {
    let c = fs.readFileSync(fp, 'utf8');
    const qs = [];
    const re2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let x;
    while ((x = re2.exec(c)) !== null) {
        const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        qs.push({ q: x[1], o: opts, c: parseInt(x[3]), start: x.index, full: x[0] });
    }

    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    qs.forEach(q => dist[q.c]++);

    const total = qs.length;
    const target = Math.floor(total / 4);
    const rem = total % 4;
    const targets = { 0: target + (rem > 0 ? 1 : 0), 1: target + (rem > 1 ? 1 : 0), 2: target + (rem > 2 ? 1 : 0), 3: target };

    const overCounts = {}, underCounts = {};
    for (let i = 0; i < 4; i++) {
        if (dist[i] > targets[i]) overCounts[i] = dist[i] - targets[i];
        if (dist[i] < targets[i]) underCounts[i] = targets[i] - dist[i];
    }

    const shuffled = qs.map((_, i) => i).sort(() => Math.random() - 0.5);
    const swaps = [];
    for (const oi of Object.keys(overCounts).map(Number)) {
        let need = overCounts[oi];
        for (const ui of Object.keys(underCounts).map(Number)) {
            if (need <= 0) break;
            let canSwap = Math.min(need, underCounts[ui]);
            for (const qi of shuffled) {
                if (canSwap <= 0) break;
                if (qs[qi].c !== oi || qs[qi]._swapped) continue;
                swaps.push({ qi, from: oi, to: ui });
                qs[qi]._swapped = true;
                canSwap--; need--;
                underCounts[ui]--;
            }
        }
    }

    const sorted = swaps.sort((a, b) => qs[b.qi].start - qs[a.qi].start);
    for (const s of sorted) {
        const q = qs[s.qi];
        const newOpts = [...q.o];
        const temp = newOpts[s.from];
        newOpts[s.from] = newOpts[s.to];
        newOpts[s.to] = temp;
        const newQ = `{ q: "${q.q}", o: [${newOpts.map(o => `"${o}"`).join(', ')}], c: ${s.to} }`;
        c = c.substring(0, q.start) + newQ + c.substring(q.start + q.full.length);
    }
    fs.writeFileSync(fp, c);
});

// Final audit ALL files
console.log('=== FINAL AUDIT — ALL FILES ===\n');
const allFiles = [
    'cs-training-data.js', 'sales-training-data.js', 'operations-training-data.js',
    'finance-training-data.js', 'pm-training-data.js', 'content-training-data.js',
    'social-media-training-data.js', 'client-chat-training-data.js',
    'designer-training-data.js', 'developer-training-data.js',
    'fiverr-risk-training-data.js', 'hr-training-data-new.js', 'hr-training-data.js',
    'wordpress-training-data.js', 'fullstack-training-data.js', 'fullstack-training-data-part2.js',
];

const sopKw = ['digital heroes', 'sop', 'eod', 'discord', 'fiverr', 'shopify', 'pm ', 'project manager', 'kpi', 'kra', 'interconnected', 'manifesto', 'zero tolerance', 'probation', 'equity', 'agency', 'our ', 'we ', 'qa ', 'quality gate', 'crisis', 'escalat', 'handover', 'staging', 'client', 'sprint', 'review', 'deadline', 'team lead', 'company', 'brief', 'deliverable', 'milestone', '60-point', 'revenue developer', 'instant reply', 'buddy system'];

let output = '';
let grandTotal = 0;

allFiles.forEach(f => {
    const c2 = fs.readFileSync('./sops/training/' + f, 'utf8');
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let cl = 0, ow = 0, tot = 0, scenario = 0, sopAligned = 0;
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = re.exec(c2)) !== null) {
        tot++;
        const qText = m[1].toLowerCase();
        const allOpts = m[2].toLowerCase();
        const full = qText + ' ' + allOpts;
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        const ci = parseInt(m[3]);
        dist[ci]++;
        const clen = opts[ci]?.length || 0;
        const wl = opts.filter((_, i) => i !== ci).map(o => o.length);
        if (wl.length > 0 && clen > Math.max(...wl)) cl++;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
        if (/you |your |client |team |manager |developer |designer |during |scenario|situation/i.test(m[1])) scenario++;
        for (const kw of sopKw) { if (full.includes(kw)) { sopAligned++; break; } }
    }
    if (tot === 0) return;
    grandTotal += tot;
    const line = `${Math.round(cl / tot * 100) > 10 ? '⚠️' : '✅'} ${f.padEnd(38)} ${String(tot).padStart(3)}q | longest=${String(Math.round(cl / tot * 100)).padStart(2)}% | scn=${String(Math.round(scenario / tot * 100)).padStart(2)}% | sop=${String(Math.round(sopAligned / tot * 100)).padStart(2)}% | A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`;
    output += line + '\n';
});
output += `\nTotal: ${grandTotal} questions\n`;
console.log(output);
fs.writeFileSync('final-sop-audit.txt', output);
