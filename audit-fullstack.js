const fs = require('fs');
const files = ['fullstack-training-data.js', 'fullstack-training-data-part2.js'];
files.forEach(f => {
    const c = fs.readFileSync('./sops/training/' + f, 'utf8');
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    let cl = 0, ow = 0, tot = 0;
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = re.exec(c)) !== null) {
        tot++;
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        const ci = parseInt(m[3]);
        dist[ci]++;
        const clen = opts[ci]?.length || 0;
        const wl = opts.filter((_, i) => i !== ci).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
    }
    console.log(f + ':');
    console.log('  ' + tot + 'q | longest=' + cl + '(' + Math.round(cl / Math.max(tot, 1) * 100) + '%) | only=' + ow);
    console.log('  A:' + dist[0] + ' B:' + dist[1] + ' C:' + dist[2] + ' D:' + dist[3]);
});
