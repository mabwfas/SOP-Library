const fs = require('fs');
const mods = ['finance', 'pm', 'content', 'socialmedia', 'clientchat', 'designer', 'developer', 'fiverr-risk'];
const results = [];

for (const mod of mods) {
    const fp = `./sops/training/${mod}-training-data.js`;
    let c;
    try { c = fs.readFileSync(fp, 'utf8'); } catch { continue; }

    const qs = [];
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let x;
    while ((x = re.exec(c)) !== null) {
        const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        qs.push({ o: opts, c: parseInt(x[3]) });
    }

    let cl = 0, ow = 0;
    for (const q of qs) {
        const ci = q.c;
        const clen = q.o[ci]?.length || 0;
        const wl = q.o.filter((_, i) => i !== ci).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < q.o.length; i++) {
            if (q.o[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
    }

    results.push(`${mod}: ${qs.length}q | correct=longest: ${cl} (${Math.round(cl / qs.length * 100)}%) | only_in_wrong: ${ow}`);
}

console.log(results.join('\n'));
