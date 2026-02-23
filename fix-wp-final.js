const fs = require('fs');
const fp = './sops/training/wordpress-training-data.js';
let c = fs.readFileSync(fp, 'utf8');

const suffixes = [
    ' — this aligns with WordPress best practices and ensures consistent results across different project types',
    ' — following this approach prevents common issues and keeps the development workflow reliable and repeatable',
    ' — this method has been validated through extensive use across production WordPress sites and is the standard',
    ' — teams adopting this strategy report fewer deployment issues and more efficient project completion cycles',
    ' — this is the recommended approach based on current WordPress documentation and expert consensus today',
    ' — implementing this correctly requires understanding the full context of how WordPress components interact',
    ' — taking this route minimizes risk while delivering professional-grade results to clients consistently',
    ' — this ensures compliance with WordPress coding standards and prevents cascading issues in production',
    ' — experienced WordPress developers recognize this as the most reliable path for maintaining quality control',
    ' — this approach balances thoroughness with efficiency which is critical for agency-level project delivery',
];
let si = 0;

// Pass 1: Pad short wrong answers + fix "only" pattern
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
        if (opts[i].length < 45 && opts[i].length < correctLen * 0.5 && !opts[i].includes(' — ')) {
            opts[i] += ' — this reflects the standard operating procedure most WordPress teams follow';
            changed = true;
        }
        if (opts[i].toLowerCase().startsWith('only ')) {
            opts[i] = opts[i].substring(5).charAt(0).toUpperCase() + opts[i].substring(6) + ' — this is the standard approach';
            changed = true;
        }
    }
    if (!changed) return match;
    return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
});

// Pass 2: At least one wrong > correct
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

// Rebalance
const qs = [];
const re2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
let x;
while ((x = re2.exec(c)) !== null) {
    const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
    qs.push({ q: x[1], o: opts, c: parseInt(x[3]), start: x.index, full: x[0] });
}

const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
qs.forEach(q => dist[q.c]++);
console.log('Pre-rebalance:', JSON.stringify(dist), 'total:', qs.length);

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

// Final audit
const finalDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
let cl = 0, ow = 0, totalQ = 0;
const re3 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
while ((x = re3.exec(c)) !== null) {
    totalQ++;
    const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
    const ci2 = parseInt(x[3]);
    finalDist[ci2]++;
    const clen = opts[ci2]?.length || 0;
    const wl = opts.filter((_, i) => i !== ci2).map(o => o.length);
    if (clen > Math.max(...wl)) cl++;
    for (let i = 0; i < opts.length; i++) {
        if (opts[i].toLowerCase().includes('only') && i !== ci2) ow++;
    }
}
console.log(`WP: ${totalQ}q | longest=${cl}(${Math.round(cl / totalQ * 100)}%) | only=${ow} | A:${finalDist[0]} B:${finalDist[1]} C:${finalDist[2]} D:${finalDist[3]}`);

// Validate syntax
try {
    global.window = {};
    const fn = new Function(c + ';return {allQuizzes};');
    const r = fn();
    console.log('Syntax: ✅ | allQuizzes:', r.allQuizzes.length, 'tasks');
    r.allQuizzes.forEach((q, i) => console.log(`  [${i}]: ${q.length}q`));
} catch (e) {
    console.log('Syntax ERROR:', e.message.substring(0, 200));
}
