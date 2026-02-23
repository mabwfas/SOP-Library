const fs = require('fs');
const files = ['./sops/training/fullstack-training-data.js', './sops/training/fullstack-training-data-part2.js'];

const suffixes = [
    ' — this aligns with industry best practices and ensures consistent results across different project types',
    ' — following this approach systematically prevents common mistakes and keeps the workflow predictable',
    ' — this method has been validated through extensive testing and produces reliable repeatable outcomes',
    ' — teams that adopt this strategy report fewer issues and more efficient project completion cycles',
    ' — this is the recommended approach based on current platform documentation and expert consensus',
    ' — implementing this correctly requires understanding the full context of how each element interacts',
    ' — taking this route minimizes risk while still delivering professional-grade results to stakeholders',
    ' — this ensures compliance with professional standards and prevents cascading issues downstream',
    ' — experienced professionals recognize this as the most reliable path for maintaining quality control',
    ' — this approach balances thoroughness with efficiency which is critical for meeting tight deadlines',
];
let si = 0;

files.forEach(fp => {
    let c = fs.readFileSync(fp, 'utf8');

    // Pass 1: Fix "only" pattern + pad short wrong answers
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
            // Fix "only" at start of wrong answers
            if (opts[i].toLowerCase().startsWith('only ')) {
                opts[i] = opts[i].substring(5).charAt(0).toUpperCase() + opts[i].substring(6) + ' — this is the standard approach';
                changed = true;
            }
            // Replace "only" in the middle with alternatives
            if (opts[i].toLowerCase().includes(' only ') && i !== idx) {
                opts[i] = opts[i].replace(/ only /gi, ' primarily ');
                changed = true;
            }
            // Pad very short answers
            if (opts[i].length < 45 && opts[i].length < correctLen * 0.5 && !opts[i].includes(' — ')) {
                opts[i] += ' — this reflects the standard operating procedure most development teams follow';
                changed = true;
            }
        }
        if (!changed) return match;
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    // Pass 2: Ensure at least one wrong answer is longer than correct
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
        // Pad the first wrong answer that doesn't have a suffix
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

    // Pass 3: Aggressive — if correct is STILL longest, pad more wrong answers
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
        // Pad ALL wrong answers that are shorter
        for (let i = 0; i < 4; i++) {
            if (i === idx) continue;
            if (opts[i].length < correctLen) {
                const needed = correctLen - opts[i].length + 10;
                opts[i] += suffixes[si++ % suffixes.length].substring(0, needed + 50);
            }
        }
        return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
    });

    fs.writeFileSync(fp, c);
    console.log('Fixed: ' + fp.split('/').pop());
});

// Now rebalance part2 (the one with 67% C)
let c2 = fs.readFileSync(files[1], 'utf8');
const qs = [];
const re2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
let x;
while ((x = re2.exec(c2)) !== null) {
    const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
    qs.push({ q: x[1], o: opts, c: parseInt(x[3]), start: x.index, full: x[0] });
}

const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
qs.forEach(q => dist[q.c]++);
console.log('\nPre-rebalance part2:', JSON.stringify(dist));

const total = qs.length;
const target = Math.floor(total / 4);
const rem = total % 4;
const targets = { 0: target + (rem > 0 ? 1 : 0), 1: target + (rem > 1 ? 1 : 0), 2: target + (rem > 2 ? 1 : 0), 3: target };

const shuffled = qs.map((_, i) => i).sort(() => Math.random() - 0.5);
const overCounts = {}, underCounts = {};
for (let i = 0; i < 4; i++) {
    if (dist[i] > targets[i]) overCounts[i] = dist[i] - targets[i];
    if (dist[i] < targets[i]) underCounts[i] = targets[i] - dist[i];
}

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
    c2 = c2.substring(0, q.start) + newQ + c2.substring(q.start + q.full.length);
}
fs.writeFileSync(files[1], c2);

// Also rebalance main file (task0)
let c1 = fs.readFileSync(files[0], 'utf8');
const qs1 = [];
const re3 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
while ((x = re3.exec(c1)) !== null) {
    const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
    qs1.push({ q: x[1], o: opts, c: parseInt(x[3]), start: x.index, full: x[0] });
}
const dist1 = { 0: 0, 1: 0, 2: 0, 3: 0 };
qs1.forEach(q => dist1[q.c]++);
console.log('Pre-rebalance main:', JSON.stringify(dist1));

// Main file is already decent (4/4/4/3) — just needs length fix

// Final audit
console.log('\n=== FINAL AUDIT ===');
files.forEach(fp => {
    const c = fs.readFileSync(fp, 'utf8');
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let cl = 0, ow = 0, tot = 0;
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = re.exec(c)) !== null) {
        tot++;
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        const ci = parseInt(m[3]);
        dist[ci]++;
        const clen = opts[ci]?.length || 0;
        const wl = opts.filter((_, i) => i !== ci).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
    }
    console.log(fp.split('/').pop() + ': ' + tot + 'q | longest=' + cl + '(' + Math.round(cl / Math.max(tot, 1) * 100) + '%) | only=' + ow + ' | A:' + dist[0] + ' B:' + dist[1] + ' C:' + dist[2] + ' D:' + dist[3]);
});
