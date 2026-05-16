// One-off: remove the DH-ACCOUNTABILITY-NOTICE block from training pages
// (training-hub + all sops/training/*-training.html). It does NOT belong on
// training. Idempotent. Usage: node remove-notice-from-training.js [--dry]
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry');
const SOPS = path.join(__dirname, 'sops');
const MARKER = 'DH-ACCOUNTABILITY-NOTICE';

const targets = [path.join(SOPS, 'training-hub.html')];
for (const f of fs.readdirSync(path.join(SOPS, 'training')).filter(n => n.endsWith('-training.html'))) {
  targets.push(path.join(SOPS, 'training', f));
}

// Strip the comment-delimited block plus any leading indentation and one
// trailing newline, then collapse 3+ blank lines to a single blank line.
const blockRe = /[ \t]*<!-- DH-ACCOUNTABILITY-NOTICE[\s\S]*?<!-- END DH-ACCOUNTABILITY-NOTICE -->\n?/;

let changed = 0, skipped = 0;
for (const file of targets) {
  const name = path.relative(SOPS, file);
  if (!fs.existsSync(file)) { console.log(`MISSING        ${name}`); continue; }
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes(MARKER)) { console.log(`already clean  ${name}`); skipped++; continue; }
  const out = html.replace(blockRe, '').replace(/\n{3,}/g, '\n\n');
  if (out.includes(MARKER)) { console.log(`STILL PRESENT  ${name} (regex did not match!)`); continue; }
  if (!DRY) fs.writeFileSync(file, out, 'utf8');
  console.log(`${DRY ? 'WOULD REMOVE  ' : 'removed       '}${name}`);
  changed++;
}
console.log(`\n${DRY ? '[DRY RUN] ' : ''}removed=${changed} clean=${skipped} total=${targets.length}`);
