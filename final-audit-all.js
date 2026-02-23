const fs = require('fs');
const mods = [
    { name: 'finance', file: 'finance-training-data.js' },
    { name: 'pm', file: 'pm-training-data.js' },
    { name: 'content', file: 'content-training-data.js' },
    { name: 'social-media', file: 'social-media-training-data.js' },
    { name: 'client-chat', file: 'client-chat-training-data.js' },
    { name: 'designer', file: 'designer-training-data.js' },
    { name: 'developer', file: 'developer-training-data.js' },
    { name: 'fiverr-risk', file: 'fiverr-risk-training-data.js' }
];
const out = [];
for (const { name, file } of mods) {
    const c = fs.readFileSync(`./sops/training/${file}`, 'utf8');
    const qs = [];
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let x;
    while ((x = re.exec(c)) !== null) {
        const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        qs.push({ o: opts, c: parseInt(x[3]) });
    }
    let cl = 0, ow = 0;
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    for (const q of qs) {
        dist[q.c]++;
        const ci = q.c;
        const clen = q.o[ci]?.length || 0;
        const wl = q.o.filter((_, i) => i !== ci).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < q.o.length; i++) {
            if (q.o[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
    }
    out.push(`${name}: ${qs.length}q | longest=${cl}(${Math.round(cl / qs.length * 100)}%) | only=${ow} | A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`);
}
fs.writeFileSync('complete-audit.txt', out.join('\n'));
