const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'sops', 'training');
const mods = ['cs', 'sales', 'hr', 'finance', 'pm', 'content', 'social-media', 'client-chat', 'designer', 'developer', 'wordpress', 'fiverr-risk', 'operations', 'fullstack'];

for (const m of mods) {
    const fp = path.join(dir, m + '-training-data.js');
    if (!fs.existsSync(fp)) { console.log(m + ': NOT FOUND'); continue; }
    const c = fs.readFileSync(fp, 'utf8');
    const qv = [];
    const qm = c.matchAll(/const (task\d+Quiz)\s*=\s*\[/g);
    for (const x of qm) qv.push(x[1]);
    const roleQv = qv.filter(v => v !== 'task0Quiz');
    console.log(m + ': ' + qv.length + ' total, ' + roleQv.length + ' role [' + roleQv.join(',') + ']');
}
