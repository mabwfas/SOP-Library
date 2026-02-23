const fs = require('fs');

// Fix Content module - task2Quiz has 637q (should be ~15)
function fixContentDuplication() {
    const fp = './sops/training/content-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    // Find the bloated task2Quiz and extract unique questions
    const re = /const task2Quiz = \[([\s\S]*?)\n\];/;
    const match = c.match(re);
    if (!match) { console.log('task2Quiz not found'); return; }

    const qRe = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    const seen = new Set();
    const uniqQs = [];
    while ((m = qRe.exec(match[1])) !== null) {
        const qText = m[1];
        if (seen.has(qText)) continue;
        seen.add(qText);
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        uniqQs.push({ q: qText, o: opts, c: parseInt(m[3]) });
    }

    console.log('Content task2Quiz: ' + match[1].match(/\{ q:/g)?.length + ' total → ' + uniqQs.length + ' unique');

    // Keep only first 15 (5 SOP + 10 original target)
    const kept = uniqQs.slice(0, 15);
    const qStr = kept.map(q => {
        const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
        return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
    }).join(',\n');

    c = c.replace(re, `const task2Quiz = [\n${qStr}\n];`);
    fs.writeFileSync(fp, c);

    // Verify
    const c2 = fs.readFileSync(fp, 'utf8');
    const total = c2.match(/\{ q:/g)?.length;
    console.log('Content total after fix: ' + total);
}

// Fix Developer module
function fixDeveloperDuplication() {
    const fp = './sops/training/developer-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    // Check each quiz for duplicates
    const quizRe = /const (task\d+Quiz) = \[([\s\S]*?)\n\];/g;
    let match;
    let totalBefore = 0, totalAfter = 0;

    while ((match = quizRe.exec(c)) !== null) {
        const name = match[1];
        const block = match[2];
        const qRe2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
        let m;
        const seen = new Set();
        const uniqQs = [];
        let total = 0;
        while ((m = qRe2.exec(block)) !== null) {
            total++;
            if (seen.has(m[1])) continue;
            seen.add(m[1]);
            const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
            uniqQs.push({ q: m[1], o: opts, c: parseInt(m[3]) });
        }
        totalBefore += total;
        totalAfter += uniqQs.length;
        if (total !== uniqQs.length) {
            console.log('Developer ' + name + ': ' + total + ' → ' + uniqQs.length + ' (removed ' + (total - uniqQs.length) + ' dupes)');
        }
    }

    if (totalBefore !== totalAfter) {
        // Rebuild file removing dupes
        c = c.replace(/const (task\d+Quiz) = \[([\s\S]*?)\n\];/g, (full, name, block) => {
            const qRe2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
            let m;
            const seen = new Set();
            const uniqQs = [];
            while ((m = qRe2.exec(block)) !== null) {
                if (seen.has(m[1])) continue;
                seen.add(m[1]);
                const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
                uniqQs.push({ q: m[1], o: opts, c: parseInt(m[3]) });
            }
            // Keep max 15 per quiz (except task0 which has 15 already)
            const kept = uniqQs.slice(0, 15);
            const qStr = kept.map(q => {
                const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
                return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
            }).join(',\n');
            return `const ${name} = [\n${qStr}\n];`;
        });
        fs.writeFileSync(fp, c);
    }
    console.log('Developer: ' + totalBefore + ' → ' + totalAfter + ' total');
}

fixContentDuplication();
fixDeveloperDuplication();

// Quick count check on all 5 modified files
['content-training-data.js', 'social-media-training-data.js', 'designer-training-data.js', 'developer-training-data.js', 'fullstack-training-data-part2.js'].forEach(f => {
    const c = fs.readFileSync('./sops/training/' + f, 'utf8');
    const total = c.match(/\{ q:/g)?.length;
    console.log(f + ': ' + total + 'q');
});
