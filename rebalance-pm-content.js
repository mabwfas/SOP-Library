const fs = require('fs');

function rebalance(filepath) {
    let c = fs.readFileSync(filepath, 'utf8');

    // Collect ALL questions across all quizzes with their positions
    const allQs = [];
    const quizRegex = /const (task\d+Quiz)\s*=\s*\[([\s\S]*?)\];/g;
    let qMatch;

    while ((qMatch = quizRegex.exec(c)) !== null) {
        const quizName = qMatch[1];
        const quizBody = qMatch[2];
        const qItemRegex = /\{\s*q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*o:\s*\[((?:[^\]]*?))\]\s*,\s*c:\s*(\d)\s*\}/g;
        let item;
        const questions = [];
        while ((item = qItemRegex.exec(quizBody)) !== null) {
            const opts = [];
            const optRegex = /"((?:[^"\\]|\\.)*)"/g;
            let oMatch;
            while ((oMatch = optRegex.exec(item[2])) !== null) {
                opts.push(oMatch[1]);
            }
            questions.push({ q: item[1], o: opts, c: parseInt(item[3]) });
        }
        allQs.push({ name: quizName, questions });
    }

    // For each quiz, rebalance independently
    allQs.forEach(quiz => {
        const n = quiz.questions.length;
        if (n === 0) return;

        // Create balanced assignment array
        const assignments = [];
        for (let i = 0; i < n; i++) {
            assignments.push(i % 4);
        }
        // Shuffle
        for (let i = assignments.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [assignments[i], assignments[j]] = [assignments[j], assignments[i]];
        }

        // Apply
        quiz.questions.forEach((q, idx) => {
            const newC = assignments[idx];
            const oldC = q.c;
            if (newC !== oldC && q.o.length === 4) {
                const temp = q.o[newC];
                q.o[newC] = q.o[oldC];
                q.o[oldC] = temp;
                q.c = newC;
            }
        });
    });

    // Rebuild file
    allQs.forEach(quiz => {
        const regex = new RegExp(`const ${quiz.name} = \\[[\\s\\S]*?\\];`);
        const replacement = `const ${quiz.name} = [\n` + quiz.questions.map(q => {
            const opts = q.o.map(o => `"${o}"`).join(', ');
            return `    { q: "${q.q}", o: [${opts}], c: ${q.c} }`;
        }).join(',\n') + '\n];';
        c = c.replace(regex, replacement);
    });

    fs.writeFileSync(filepath, c);

    // Report
    const all = [...c.matchAll(/,\s*c:\s*(\d)/g)];
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    all.forEach(x => dist[x[1]]++);
    const total = all.length;
    const letters = 'ABCD';
    const report = Object.entries(dist).map(([k, v]) => `${letters[k]}:${v}(${Math.round(v / total * 100)}%)`).join(' ');
    console.log(`${filepath} (${total}q): ${report}`);

    try { new Function(c); console.log('  ✅ Syntax valid'); } catch (e) { console.log('  ❌ ' + e.message); }
}

rebalance('./sops/training/pm-training-data.js');
rebalance('./sops/training/content-training-data.js');
