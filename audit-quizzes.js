// Audit all training modules for quiz state
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'sops', 'training');
const modules = [
    'cs', 'sales', 'hr', 'finance', 'pm', 'content',
    'social-media', 'client-chat', 'designer', 'developer',
    'wordpress', 'fiverr-risk', 'operations', 'fullstack'
];

for (const mod of modules) {
    const fp = path.join(dir, `${mod}-training-data.js`);
    if (!fs.existsSync(fp)) { console.log(`${mod}: FILE NOT FOUND`); continue; }
    const c = fs.readFileSync(fp, 'utf8');

    // Count tasks  
    const tasks = (c.match(/id:\s*\d+/g) || []).length;

    // Find all quiz vars
    const quizVars = [];
    const qm = c.matchAll(/const (task\d+Quiz)\s*=\s*\[/g);
    for (const m of qm) quizVars.push(m[1]);

    // Check if quizzes are generic (all answers c:1 or all questions are "X:" format)
    let genericCount = 0;
    let totalQs = 0;
    for (const qv of quizVars) {
        if (qv === 'task0Quiz') continue; // skip intro quiz
        const regex = new RegExp(`const ${qv}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
        const match = c.match(regex);
        if (match) {
            const qs = (match[1].match(/\{/g) || []).length;
            totalQs += qs;
            // Check for generic patterns: questions like "X:" with short stems
            const genericPattern = (match[1].match(/q:\s*"[^"]{5,30}:"/g) || []).length;
            genericCount += genericPattern;
        }
    }

    console.log(`${mod}: ${tasks} tasks | ${quizVars.length} quiz vars [${quizVars.join(', ')}] | ${totalQs} role Qs (${genericCount} generic-pattern)`);
}
