// Extract task titles and brief content summaries for all modules needing rewrite
const fs = require('fs');
const path = require('path');
const d = path.join(__dirname, 'sops', 'training');
const out = [];

['finance', 'pm', 'content', 'social-media', 'client-chat'].forEach(m => {
    const c = fs.readFileSync(path.join(d, m + '-training-data.js'), 'utf8');
    out.push(`\n========== ${m.toUpperCase()} ==========`);

    // Get task list
    const tasks = c.matchAll(/id:\s*(\d+),\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g);
    for (const t of tasks) {
        if (t[1] === '0') continue; // skip intro
        out.push(`  Task ${t[1]}: ${t[2]} — ${t[3]}`);
    }

    // Extract key concepts from content (look for h3 headings)
    const h3s = c.matchAll(/<h3[^>]*>(.*?)<\/h3>/gi);
    let h3count = 0;
    for (const h of h3s) {
        if (h3count >= 15) break;
        const text = h[1].replace(/<[^>]+>/g, '').trim();
        if (text.length > 5 && text.length < 100) {
            out.push(`    📌 ${text}`);
            h3count++;
        }
    }
});

fs.writeFileSync('module-content-summary.txt', out.join('\n'));
console.log('Written to module-content-summary.txt');
