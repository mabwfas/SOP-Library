// Sample first 2 questions from task2Quiz for each module to verify generic pattern
const fs = require('fs');
const path = require('path');
const d = path.join(__dirname, 'sops', 'training');

['finance', 'pm', 'content', 'social-media', 'client-chat', 'designer', 'developer', 'fiverr-risk'].forEach(m => {
    const c = fs.readFileSync(path.join(d, m + '-training-data.js'), 'utf8');
    const s = c.match(/const task2Quiz = \[([\s\S]*?)\];/);
    if (s) {
        // Get first 2 question objects
        const qs = s[1].matchAll(/\{\s*q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*o:\s*\[(.*?)\]\s*,\s*c:\s*(\d)/g);
        let i = 0;
        console.log(`\n=== ${m.toUpperCase()} ===`);
        for (const q of qs) {
            if (i >= 2) break;
            console.log(`  Q: ${q[1].substring(0, 80)}`);
            i++;
        }
    }

    // Also check how many tasks they have
    const tasks = c.match(/title:\s*"([^"]+)"/g);
    if (tasks) console.log(`  Tasks: ${tasks.length}`);
});
