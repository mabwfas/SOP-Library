// Comprehensive audit of quiz quality issues across ALL modules
// Check: (1) "only" pattern in wrong answers, (2) correct answer length vs wrong answer lengths
const fs = require('fs');

const modules = [
    'finance-training-data.js',
    'pm-training-data.js',
    'content-training-data.js',
    'socialmedia-training-data.js',
    'clientchat-training-data.js',
    'designer-training-data.js',
    'developer-training-data.js',
    'fiverr-risk-training-data.js'
];

for (const mod of modules) {
    const fp = `./sops/training/${mod}`;
    let c;
    try { c = fs.readFileSync(fp, 'utf8'); } catch { console.log(`❌ ${mod} not found`); continue; }

    // Extract all quiz questions
    const questions = [];
    const qRegex = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = qRegex.exec(c)) !== null) {
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.replace(/^"|"$/g, '')) || [];
        questions.push({ q: m[1], o: opts, c: parseInt(m[3]) });
    }

    if (questions.length === 0) continue;

    // Audit 1: Correct answer is longest
    let correctLongest = 0;
    let correctShortest = 0;
    let correctMid = 0;

    // Audit 2: "only" in wrong answers
    let onlyInWrong = 0;
    let onlyInCorrect = 0;
    let onlyTotal = 0;

    for (const q of questions) {
        const correctIdx = q.c;
        const correctLen = q.o[correctIdx]?.length || 0;
        const wrongLens = q.o.filter((_, i) => i !== correctIdx).map(o => o.length);
        const maxWrong = Math.max(...wrongLens);
        const avgWrong = wrongLens.reduce((a, b) => a + b, 0) / wrongLens.length;

        if (correctLen > maxWrong) correctLongest++;
        else if (correctLen < Math.min(...wrongLens)) correctShortest++;
        else correctMid++;

        // Check "only" usage
        for (let i = 0; i < q.o.length; i++) {
            const lower = q.o[i].toLowerCase();
            if (lower.includes('only')) {
                onlyTotal++;
                if (i === correctIdx) onlyInCorrect++;
                else onlyInWrong++;
            }
        }
    }

    const name = mod.replace('-training-data.js', '').toUpperCase();
    console.log(`\n${name} (${questions.length} questions):`);
    console.log(`  Length: Correct=longest ${correctLongest}/${questions.length} (${Math.round(correctLongest / questions.length * 100)}%) | Correct=shortest ${correctShortest}/${questions.length} (${Math.round(correctShortest / questions.length * 100)}%) | Mid ${correctMid}`);
    console.log(`  "Only": In wrong=${onlyInWrong} | In correct=${onlyInCorrect} | Total=${onlyTotal}`);
}
