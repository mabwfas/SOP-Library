const fs = require('fs');
const files = ['finance', 'pm', 'content', 'social-media', 'client-chat'];

files.forEach(m => {
    const fp = `./sops/training/${m}-training-data.js`;
    let c = fs.readFileSync(fp, 'utf8');

    // Find all quiz arrays
    const quizNames = [...c.matchAll(/const (task\d+Quiz)\s*=\s*\[/g)].map(x => x[1]);

    quizNames.forEach(name => {
        const regex = new RegExp(`const ${name} = \\[([\\s\\S]*?)\\];`);
        const match = c.match(regex);
        if (!match) return;

        // Parse questions
        const qRegex = /\{\s*q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*o:\s*\[((?:[^\]]*?))\]\s*,\s*c:\s*(\d)\s*\}/g;
        const questions = [];
        let qMatch;
        while ((qMatch = qRegex.exec(match[1])) !== null) {
            const opts = [];
            const optRegex = /"((?:[^"\\]|\\.)*)"/g;
            let oMatch;
            while ((oMatch = optRegex.exec(qMatch[2])) !== null) {
                opts.push(oMatch[1]);
            }
            questions.push({ q: qMatch[1], o: opts, c: parseInt(qMatch[3]) });
        }

        if (questions.length === 0) return;

        // Target distribution for this quiz
        const n = questions.length;
        const targets = [0, 0, 0, 0];
        const base = Math.floor(n / 4);
        const remainder = n % 4;
        for (let i = 0; i < 4; i++) targets[i] = base + (i < remainder ? 1 : 0);

        // Shuffle target assignments
        const assignments = [];
        for (let i = 0; i < 4; i++) for (let j = 0; j < targets[i]; j++) assignments.push(i);
        // Fisher-Yates shuffle
        for (let i = assignments.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [assignments[i], assignments[j]] = [assignments[j], assignments[i]];
        }

        // Apply new positions
        questions.forEach((q, idx) => {
            const newCorrectIdx = assignments[idx];
            const oldCorrectIdx = q.c;

            if (newCorrectIdx !== oldCorrectIdx) {
                // Swap positions
                const temp = q.o[newCorrectIdx];
                q.o[newCorrectIdx] = q.o[oldCorrectIdx];
                q.o[oldCorrectIdx] = temp;
                q.c = newCorrectIdx;
            }
        });

        // Rebuild quiz string
        const replacement = `const ${name} = [\n` + questions.map(q => {
            const opts = q.o.map(o => `"${o}"`).join(', ');
            return `    { q: "${q.q}", o: [${opts}], c: ${q.c} }`;
        }).join(',\n') + '\n];';

        c = c.replace(regex, replacement);
    });

    fs.writeFileSync(fp, c);

    // Verify distribution
    const all = [...c.matchAll(/,\s*c:\s*(\d)/g)];
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    all.forEach(x => dist[x[1]]++);
    const total = all.length;
    const letters = 'ABCD';
    console.log(`${m} (${total}q): ${Object.entries(dist).map(([k, v]) => `${letters[k]}:${v}(${Math.round(v / total * 100)}%)`).join(' ')}`);

    // Syntax check
    try { new Function(c); console.log(`  ✅ Syntax valid`); } catch (e) { console.log(`  ❌ Syntax error: ${e.message}`); }
});
