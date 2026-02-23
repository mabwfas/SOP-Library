const fs = require('fs');
const fp = './sops/training/content-training-data.js';
let c = fs.readFileSync(fp, 'utf8');

// The problem: task2Quiz is massively bloated. Strategy: find the start of task2Quiz,
// find where task3Quiz starts, and replace everything between with a clean quiz.

const t2Start = c.indexOf('const task2Quiz = [');
const t3Start = c.indexOf('const task3Quiz = [');

if (t2Start === -1 || t3Start === -1) {
    console.log('ERROR: Could not find quiz boundaries');
    process.exit(1);
}

console.log('task2Quiz starts at char:', t2Start);
console.log('task3Quiz starts at char:', t3Start);
console.log('Distance:', t3Start - t2Start, 'chars');

// Extract unique questions from the bloated section
const bloatedSection = c.substring(t2Start, t3Start);
const qRe = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
let m;
const seen = new Set();
const questions = [];
while ((m = qRe.exec(bloatedSection)) !== null) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
    questions.push({ q: m[1], o: opts, c: parseInt(m[3]) });
}

console.log('Unique questions found:', questions.length);

// Keep first 15 unique questions (should include our 5 SOP + 10 original)
const kept = questions.slice(0, 15);

const qStr = kept.map(q => {
    const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
    return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
}).join(',\n');

const newSection = `const task2Quiz = [\n${qStr}\n];\n\n`;

c = c.substring(0, t2Start) + newSection + c.substring(t3Start);
fs.writeFileSync(fp, c);

// Verify
const c2 = fs.readFileSync(fp, 'utf8');
const totalQs = c2.match(/\{ q:/g)?.length;
console.log('Total questions after fix:', totalQs);

// Count per quiz
const quizRe = /const (task\d+Quiz) = \[/g;
let mm;
while ((mm = quizRe.exec(c2)) !== null) {
    const start = mm.index;
    let depth = 0;
    let i = c2.indexOf('[', start);
    for (; i < c2.length; i++) {
        if (c2[i] === '[') depth++;
        if (c2[i] === ']') depth--;
        if (depth === 0) break;
    }
    const qs = c2.substring(start, i + 1).match(/\{ q:/g);
    console.log('  ' + mm[1] + ': ' + qs?.length + 'q');
}
