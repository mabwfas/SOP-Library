// Rebalance answer distributions for modules with heavy B-skew
// Strategy: For questions with c:1 (B), rotate some to c:0,2,3 by swapping option text
const fs = require('fs');

const modules = [
    'designer-training-data.js',
    'developer-training-data.js',
    'fiverr-risk-training-data.js',
    'social-media-training-data.js',
    'client-chat-training-data.js',
    'finance-training-data.js',
    'pm-training-data.js',
    'content-training-data.js'
];

for (const mod of modules) {
    const fp = `./sops/training/${mod}`;
    let c;
    try { c = fs.readFileSync(fp, 'utf8'); } catch { continue; }

    // Extract all questions with positions
    const questions = [];
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = re.exec(c)) !== null) {
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        questions.push({ q: m[1], o: opts, c: parseInt(m[3]), start: m.index, full: m[0] });
    }

    if (questions.length === 0) continue;

    // Count distribution
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    for (const q of questions) dist[q.c]++;

    const total = questions.length;
    const target = Math.floor(total / 4);
    const remainder = total % 4;

    // Target: roughly 25% each, +1 for first few
    const targets = {
        0: target + (remainder > 0 ? 1 : 0),
        1: target + (remainder > 1 ? 1 : 0),
        2: target + (remainder > 2 ? 1 : 0),
        3: target
    };

    // Find which answers need to give and receive
    const overCounts = {};
    const underCounts = {};
    for (let i = 0; i < 4; i++) {
        if (dist[i] > targets[i]) overCounts[i] = dist[i] - targets[i];
        if (dist[i] < targets[i]) underCounts[i] = targets[i] - dist[i];
    }

    // No rebalancing needed if all within ±2
    const maxDev = Math.max(...Object.values(dist)) - Math.min(...Object.values(dist));
    if (maxDev <= 4) {
        console.log(`${mod.replace('-training-data.js', '')}: balanced (dev=${maxDev}) | A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`);
        continue;
    }

    // Shuffle questions to distribute changes evenly
    const shuffledIndices = questions.map((_, i) => i).sort(() => Math.random() - 0.5);

    // For each overrepresented answer, swap some to underrepresented
    const swaps = [];
    for (const overIdx of Object.keys(overCounts).map(Number)) {
        let need = overCounts[overIdx];
        for (const underIdx of Object.keys(underCounts).map(Number)) {
            if (need <= 0) break;
            let canSwap = Math.min(need, underCounts[underIdx]);

            // Find questions with correct=overIdx from shuffled list
            for (const qi of shuffledIndices) {
                if (canSwap <= 0) break;
                const q = questions[qi];
                if (q.c !== overIdx || q._swapped) continue;

                // Swap: move correct answer from position overIdx to position underIdx
                // Swap the option text at those positions
                swaps.push({ qi, from: overIdx, to: underIdx });
                q._swapped = true;
                canSwap--;
                need--;
                underCounts[underIdx]--;
            }
        }
    }

    // Apply swaps to file content
    // Work from end to start to preserve positions
    const sortedSwaps = swaps.sort((a, b) => questions[b.qi].start - questions[a.qi].start);

    for (const swap of sortedSwaps) {
        const q = questions[swap.qi];
        const newOpts = [...q.o];

        // Swap option text between 'from' and 'to' positions
        const temp = newOpts[swap.from];
        newOpts[swap.from] = newOpts[swap.to];
        newOpts[swap.to] = temp;

        // New correct index is 'to' (since we moved the correct text there)
        const newCorrect = swap.to;

        const newQ = `{ q: "${q.q}", o: [${newOpts.map(o => `"${o}"`).join(', ')}], c: ${newCorrect} }`;
        c = c.substring(0, q.start) + newQ + c.substring(q.start + q.full.length);
    }

    fs.writeFileSync(fp, c);

    // Re-count distribution
    const newDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    const re2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m2;
    while ((m2 = re2.exec(c)) !== null) newDist[parseInt(m2[3])]++;

    const name = mod.replace('-training-data.js', '');
    console.log(`${name}: ${swaps.length} swaps | A:${newDist[0]} B:${newDist[1]} C:${newDist[2]} D:${newDist[3]}`);
}
