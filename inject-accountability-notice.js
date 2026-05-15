// One-off injector: adds the Digital Heroes Accountability & Response-Time notice
// into onboarding, training, and "who we are" pages. Idempotent — safe to re-run.
// Usage: node inject-accountability-notice.js [--dry]
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry');
const SOPS = path.join(__dirname, 'sops');
const MARKER = 'DH-ACCOUNTABILITY-NOTICE';

const NOTICE = `
        <!-- ${MARKER} -->
        <div style="background:#FEF2F2;border:2px solid #EF4444;border-left:8px solid #EF4444;border-radius:12px;padding:22px 26px;margin:20px auto;max-width:1100px;font-family:'Inter',system-ui,-apple-system,sans-serif;box-shadow:0 4px 14px rgba(239,68,68,0.18);">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
                <span style="font-size:1.4rem;">&#9888;&#65039;</span>
                <span style="color:#991B1B;font-size:1.1rem;font-weight:800;letter-spacing:-0.2px;">#1 RULE &mdash; ACCOUNTABILITY &amp; RESPONSE TIME</span>
            </div>
            <p style="margin:0 0 10px 0;color:#7F1D1D;font-size:1.05rem;font-weight:800;line-height:1.6;">NO RESPONSE = INSTANT TERMINATION.</p>
            <p style="margin:0 0 10px 0;color:#991B1B;font-size:0.95rem;line-height:1.65;">If you do not know how to respond in a timely manner to seniors as well as your team members, you are not a good team player and you do not deserve to be a Digital Hero. We will remove you from Digital Heroes as soon as we find it.</p>
            <p style="margin:0 0 10px 0;color:#991B1B;font-size:0.95rem;line-height:1.65;font-weight:700;">In a work-from-home environment, this is very, very important.</p>
            <p style="margin:0 0 10px 0;color:#991B1B;font-size:0.95rem;line-height:1.65;"><strong>Taking accountability and responsibility is the number one thing you must have when joining Digital Heroes.</strong></p>
            <p style="margin:0;color:#7F1D1D;font-size:0.9rem;line-height:1.6;font-style:italic;border-top:1px dashed rgba(239,68,68,0.4);padding-top:10px;">Why this rule exists: To make teams more efficient and well-communicated, we must implement this to have fewer disappointments &mdash; from your colleagues as well as from the management. From the management, and for the management.</p>
        </div>
        <!-- END ${MARKER} -->
`;

// group -> { glob dir, anchor string, mode: 'after' | 'before' }
const targets = [];

// Training role files: insert right after the always-visible top container
for (const f of fs.readdirSync(path.join(SOPS, 'training')).filter(n => n.endsWith('-training.html'))) {
  targets.push({ file: path.join(SOPS, 'training', f), anchor: '<div class="training-container">', mode: 'after' });
}
// Onboarding role files: insert right before the timeline content
for (const f of fs.readdirSync(path.join(SOPS, 'onboarding')).filter(n => n.endsWith('-onboarding.html'))) {
  targets.push({ file: path.join(SOPS, 'onboarding', f), anchor: '<div class="timeline">', mode: 'before' });
}
// Main / "who we are" pages with their specific anchors
targets.push({ file: path.join(SOPS, 'onboarding.html'), anchor: '<!-- Start Here Banner -->', mode: 'before' });
targets.push({ file: path.join(SOPS, 'training-hub.html'), anchor: '<!-- Training Section -->', mode: 'before' });
targets.push({ file: path.join(SOPS, 'start-here.html'), anchor: '<!-- Welcome -->', mode: 'before' });
targets.push({ file: path.join(SOPS, 'index.html'), anchor: '<!-- What\'s New Banner -->', mode: 'before' });
targets.push({ file: path.join(SOPS, 'about-ai.html'), anchor: '<!-- TEAM CLAUDE CODE PROMPT -->', mode: 'before' });

let changed = 0, skipped = 0, missing = 0;
for (const t of targets) {
  const name = path.relative(SOPS, t.file);
  if (!fs.existsSync(t.file)) { console.log(`MISSING FILE  ${name}`); missing++; continue; }
  let html = fs.readFileSync(t.file, 'utf8');
  if (html.includes(MARKER)) { console.log(`already has    ${name}`); skipped++; continue; }
  const idx = html.indexOf(t.anchor);
  if (idx === -1) { console.log(`ANCHOR MISSING ${name}  (anchor: ${t.anchor})`); missing++; continue; }
  let out;
  if (t.mode === 'after') {
    const at = idx + t.anchor.length;
    out = html.slice(0, at) + NOTICE + html.slice(at);
  } else {
    out = html.slice(0, idx) + NOTICE.trimStart() + '\n        ' + html.slice(idx);
  }
  if (!DRY) fs.writeFileSync(t.file, out, 'utf8');
  console.log(`${DRY ? 'WOULD INJECT  ' : 'injected      '}${name}`);
  changed++;
}
console.log(`\n${DRY ? '[DRY RUN] ' : ''}injected=${changed} skipped=${skipped} missing=${missing} total=${targets.length}`);
