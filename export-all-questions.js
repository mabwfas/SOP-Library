const fs = require('fs');

const files = [
    { name: 'CS Training', file: 'cs-training-data.js' },
    { name: 'Sales Training', file: 'sales-training-data.js' },
    { name: 'Operations Training', file: 'operations-training-data.js' },
    { name: 'Finance Training', file: 'finance-training-data.js' },
    { name: 'PM Training', file: 'pm-training-data.js' },
    { name: 'Content Training', file: 'content-training-data.js' },
    { name: 'Social Media Training', file: 'social-media-training-data.js' },
    { name: 'Client-Chat Training', file: 'client-chat-training-data.js' },
    { name: 'Designer Training', file: 'designer-training-data.js' },
    { name: 'Developer Training', file: 'developer-training-data.js' },
    { name: 'Fiverr Risk Training', file: 'fiverr-risk-training-data.js' },
    { name: 'HR Training (New)', file: 'hr-training-data-new.js' },
    { name: 'HR Training (Legacy)', file: 'hr-training-data.js' },
    { name: 'WordPress Training', file: 'wordpress-training-data.js' },
    { name: 'Full-Stack Training (Part 1)', file: 'fullstack-training-data.js' },
    { name: 'Full-Stack Training (Part 2)', file: 'fullstack-training-data-part2.js' },
];

const letters = ['A', 'B', 'C', 'D'];
let output = '';
let grandTotal = 0;

for (const { name, file } of files) {
    const content = fs.readFileSync(`./sops/training/${file}`, 'utf8');

    output += `${'='.repeat(80)}\n`;
    output += `  ${name.toUpperCase()}\n`;
    output += `  File: ${file}\n`;
    output += `${'='.repeat(80)}\n\n`;

    // Find each quiz
    const quizRe = /const (task\d+Quiz) = \[([\s\S]*?)\n\];/g;
    let quizMatch;
    let moduleTotal = 0;

    while ((quizMatch = quizRe.exec(content)) !== null) {
        const quizName = quizMatch[1];
        const quizBlock = quizMatch[2];

        // Extract questions
        const qRe = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
        let qMatch;
        let qNum = 1;
        const questions = [];

        while ((qMatch = qRe.exec(quizBlock)) !== null) {
            const question = qMatch[1];
            const optsStr = qMatch[2];
            const correctIdx = parseInt(qMatch[3]);

            const opts = [];
            const optRe = /"([^"]*)"/g;
            let optMatch;
            while ((optMatch = optRe.exec(optsStr)) !== null) {
                opts.push(optMatch[1]);
            }

            questions.push({ question, opts, correctIdx });
        }

        if (questions.length > 0) {
            output += `--- ${quizName} (${questions.length} questions) ---\n\n`;

            for (const q of questions) {
                moduleTotal++;
                output += `Q${qNum}. ${q.question}\n`;
                for (let i = 0; i < q.opts.length; i++) {
                    const marker = i === q.correctIdx ? ' ✅' : '';
                    output += `   ${letters[i]}) ${q.opts[i]}${marker}\n`;
                }
                output += `   Correct Answer: ${letters[q.correctIdx]}\n\n`;
                qNum++;
            }
        }
    }

    output += `[${name}: ${moduleTotal} questions total]\n\n\n`;
    grandTotal += moduleTotal;
}

output += `${'='.repeat(80)}\n`;
output += `  GRAND TOTAL: ${grandTotal} questions across ${files.length} modules\n`;
output += `${'='.repeat(80)}\n`;

fs.writeFileSync('all-questions-and-answers.txt', output, 'utf8');
console.log(`✅ Exported ${grandTotal} questions to all-questions-and-answers.txt`);
