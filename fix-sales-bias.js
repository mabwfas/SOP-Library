const fs = require('fs');

const fp = './sops/training/sales-training-data.js';
let c = fs.readFileSync(fp, 'utf8');

const suffixes = [
    ' — this aligns with company best practices and ensures consistent results across all project types',
    ' — following this approach prevents common issues and keeps the workflow reliable and repeatable for teams',
    ' — this method has been validated through practice and produces reliable professional outcomes consistently',
    ' — teams using this report fewer issues and more efficient project completion rates overall',
    ' — this is recommended based on documentation and expert consensus in the field of digital services',
    ' — implementing this correctly requires understanding the full operational context of the business',
];
let si = 0;

// Pass 1: pad short wrong answers
c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, q, optsStr, ci) => {
    const idx = parseInt(ci);
    const opts = [];
    const re = /"([^"]*)"/g;
    let m;
    while ((m = re.exec(optsStr)) !== null) opts.push(m[1]);
    if (opts.length !== 4) return match;
    const clen = opts[idx].length;
    const maxW = Math.max(...opts.filter((_, i) => i !== idx).map(o => o.length));
    if (maxW >= clen) return match;
    for (let i = 0; i < 4; i++) {
        if (i === idx) continue;
        if (!opts[i].includes(' — ')) {
            opts[i] += suffixes[si++ % suffixes.length];
            break;
        }
    }
    return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
});

// Pass 2: aggressive
c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, q, optsStr, ci) => {
    const idx = parseInt(ci);
    const opts = [];
    const re = /"([^"]*)"/g;
    let m;
    while ((m = re.exec(optsStr)) !== null) opts.push(m[1]);
    if (opts.length !== 4) return match;
    const clen = opts[idx].length;
    const maxW = Math.max(...opts.filter((_, i) => i !== idx).map(o => o.length));
    if (maxW >= clen) return match;
    for (let i = 0; i < 4; i++) {
        if (i === idx || opts[i].length >= clen) continue;
        opts[i] += ' and ensures sustainable long-term outcomes for the team';
        break;
    }
    return `{ q: "${q}", o: [${opts.map(o => `"${o}"`).join(', ')}], c: ${idx} }`;
});

fs.writeFileSync(fp, c);

// Verify
const v = fs.readFileSync(fp, 'utf8');
let tot = 0, cl = 0;
const r2 = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
let mm;
while ((mm = r2.exec(v)) !== null) {
    tot++;
    const opts = mm[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
    const ci = parseInt(mm[3]);
    if (opts[ci]?.length > Math.max(...opts.filter((_, j) => j !== ci).map(o => o.length))) cl++;
}
console.log('Sales: ' + tot + 'q, longest=' + Math.round(cl / tot * 100) + '%');
