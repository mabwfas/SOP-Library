// Entry Tasks — Hiring Assignments & Filtering Tasks for All Roles
// Digital Heroes Certification Program
// Each task = one role's entry assignment

const trainingTasks = [
    { id: 1, title: "Video Editor", description: "Edit a tech tutorial from raw footage — 48hr deadline", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "🎬 Final: ≤ 10 min, 1080p+ MP4", "📋 Read full brief before starting"] },
    { id: 2, title: "Shopify Developer", description: "Build a custom Shopify section from a design mockup", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "💻 Must use Shopify Liquid", "📋 Read full brief before starting"] },
    { id: 3, title: "UI/UX Designer", description: "Redesign a product page for a real Shopify store", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "🎨 Figma deliverable required", "📋 Read full brief before starting"] },
    { id: 4, title: "Full Stack Developer", description: "Build a functional mini-app with frontend + backend", contentFirst: true, studyGuide: ["⏱️ Deadline: 72 hours", "💻 Any stack allowed", "📋 Read full brief before starting"] },
    { id: 5, title: "HR Executive", description: "Screen candidates and draft an onboarding plan", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "📋 Use provided templates", "📋 Read full brief before starting"] },
    { id: 6, title: "Content Writer", description: "Write SEO blog post + product descriptions for a Shopify store", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "✍️ Original content only", "📋 Read full brief before starting"] },
    { id: 7, title: "Social Media Manager", description: "Create a 7-day content calendar with post mockups", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "📱 Instagram + LinkedIn focus", "📋 Read full brief before starting"] },
    { id: 8, title: "Sales Executive", description: "Handle a mock client inquiry end-to-end", contentFirst: true, studyGuide: ["⏱️ Deadline: 24 hours", "💰 Fiverr/Upwork simulation", "📋 Read full brief before starting"] },
    { id: 9, title: "Project Manager", description: "Create a project plan and manage a mock sprint", contentFirst: true, studyGuide: ["⏱️ Deadline: 48 hours", "📊 Asana/Sheet deliverable", "📋 Read full brief before starting"] },
    { id: 10, title: "Customer Success", description: "Handle 5 real client scenarios with professional responses", contentFirst: true, studyGuide: ["⏱️ Deadline: 24 hours", "💬 Tone & SLA matter", "📋 Read full brief before starting"] }
];


// ═══════════════════════════════════════
// TASK 1: Video Editor Entry Task
// ═══════════════════════════════════════

const task1Content = `
<h2>🎬 Video Editor — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our internship opening. We have found your CV to be impressive and shortlisted you for next phase.</p>
    <p style="font-size: 1.1em;">As a next step, we are expecting you to complete a short assignment.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency with <strong>2.5M+ YouTube subscribers</strong> (Genron Tech &amp; Digital Heroes). We're hiring the <strong>Top 8 video editors</strong> at <strong>₹20,000 – ₹35,000/month</strong> based on skill &amp; animation quality.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">You will edit a complete tech tutorial video using our <strong>raw camera footage + screen recordings</strong>. You must:</p>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>Merge</strong> camera footage and screen recordings seamlessly</li>
        <li><strong>Identify &amp; remove</strong> all filler/mistakes from the raw footage</li>
        <li><strong>Speed up</strong> boring parts to keep the audience engaged</li>
        <li><strong>Deliver</strong> a tight, publish-ready YouTube tutorial under 10 minutes</li>
    </ul>
    <p>All resource links (raw footage, screen recording, script, reference videos) are in the attached PDF. Read it carefully before starting.</p>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📹 Final Video</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">≤ 10 minutes, 1080p+ MP4</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📤 Submit</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your video link via the submission form (below)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Top 8 get selected. Your edit quality decides your stipend bracket.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⚡ Speed Matters</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Faster + better quality = higher chances of selection</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🔗 Assignment Brief &amp; Resources</h3>
    <p>Open the Google Doc for the <strong>full assignment brief</strong> with all links, evaluation criteria, and submission steps:</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
        <a href="https://docs.google.com/document/d/108Zgw2K6b_ZZtC7DFYe0Olgy3jCXoqOY/edit?usp=sharing&ouid=117321240320517122897&rtpof=true&sd=true" target="_blank" style="display: flex; align-items: center; gap: 12px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); border-radius: 10px; padding: 16px 20px; color: #E2E8F0; text-decoration: none; font-size: 1em;">
            <span style="font-size: 1.5em;">📄</span>
            <div>
                <strong style="color: #10B981;">Assignment Brief — Google Doc</strong><br>
                <span style="color: #94A3B8; font-size: 0.85em;">Full task details, raw footage links, script, reference videos &amp; evaluation criteria</span>
            </div>
            <span style="margin-left: auto; color: #10B981;">Open ↗</span>
        </a>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📤 Submission</h3>
    <p style="font-size: 1.05em;">Once you've completed your edit, submit your video link here:</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
        <a href="https://forms.gle/MPGERwU8yPmLTSzw9" target="_blank" style="display: flex; align-items: center; gap: 12px; background: rgba(139,92,246,0.2); border: 2px solid rgba(139,92,246,0.4); border-radius: 10px; padding: 16px 20px; color: #E2E8F0; text-decoration: none; font-size: 1em;">
            <span style="font-size: 1.5em;">📝</span>
            <div>
                <strong style="color: #A78BFA;">Submission Form — Google Forms</strong><br>
                <span style="color: #94A3B8; font-size: 0.85em;">Upload your final video link here</span>
            </div>
            <span style="margin-left: auto; color: #A78BFA;">Submit ↗</span>
        </a>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📊 Responses Tracker</h3>
    <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
        <a href="https://docs.google.com/spreadsheets/d/1fTVWIT2v88c7rF3UFzkmKIBG1zM-9hPUmVo_pi8-1Vs/edit?resourcekey#gid=1222781444" target="_blank" style="display: flex; align-items: center; gap: 12px; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); border-radius: 10px; padding: 16px 20px; color: #E2E8F0; text-decoration: none; font-size: 1em;">
            <span style="font-size: 1.5em;">📊</span>
            <div>
                <strong style="color: #60A5FA;">Responses Spreadsheet</strong><br>
                <span style="color: #94A3B8; font-size: 0.85em;">Google Sheets — View all candidate submissions</span>
            </div>
            <span style="margin-left: auto; color: #60A5FA;">Open ↗</span>
        </a>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F8FAFC; margin-top: 0;">💬 The Bottom Line</h3>
    <p style="font-size: 1.05em;">We don't work with people who aren't willing to put in the hours. If you consider yourself a <strong>pro-level editor</strong>, this should be easy and fast. If not, you'll learn from the process.</p>
    <p style="font-size: 1.05em;">Good luck — show us what you've got.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task1Content = task1Content;


// ═══════════════════════════════════════
// TASK 2: Shopify Developer Entry Task
// ═══════════════════════════════════════

const task2Content = `
<h2>💻 Shopify Developer — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our internship opening. We have found your CV to be impressive and shortlisted you for the next phase.</p>
    <p style="font-size: 1.1em;">As a next step, we are expecting you to complete a short assignment.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency with <strong>2.5M+ YouTube subscribers</strong> (Genron Tech &amp; Digital Heroes). We build and manage 50+ Shopify stores across industries. We're hiring <strong>Shopify developers</strong> at <strong>₹15,000 – ₹35,000/month</strong> based on code quality &amp; Liquid proficiency.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Build a <strong>custom Shopify section</strong> from scratch using Liquid, HTML, CSS, and JavaScript. The section must be:</p>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>A Featured Collection section</strong> — displays products from any collection with customizable grid layout</li>
        <li><strong>Fully responsive</strong> — works on mobile, tablet, and desktop</li>
        <li><strong>Schema-driven</strong> — all content editable from Shopify Customizer (collection picker, heading text, columns count, colors)</li>
        <li><strong>Performance-first</strong> — lazy-loaded images, minimal JS, clean semantic HTML</li>
        <li><strong>Use Dawn theme</strong> as base — your section should drop into a fresh Dawn install</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">A .liquid file + screenshot of it working in a Dawn theme</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📱 Responsive</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must work on mobile (375px), tablet (768px), desktop (1280px+)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚫 No AI Copy-Paste</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">You can use AI tools, but you must understand every line of code you submit</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code quality + design sense + schema completeness = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">📊 Evaluation Criteria</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Criteria</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Weight</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What We Look For</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Liquid Code Quality</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30%</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clean schema, proper Liquid filters, no hardcoded values</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Visual Design</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">25%</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Modern look, good spacing, typography, hover effects</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Responsiveness</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">20%</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Proper breakpoints, no horizontal scroll, touch-friendly</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Performance</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">15%</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lazy loading, minimal DOM, no render-blocking</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Speed of Delivery</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10%</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Faster = higher ranking among equal quality submissions</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F8FAFC; margin-top: 0;">💬 The Bottom Line</h3>
    <p style="font-size: 1.05em;">If you can build a clean, schema-driven Shopify section in under 48 hours, you belong here. If you can't, you'll learn from the process.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task2Content = task2Content;


// ═══════════════════════════════════════
// TASK 3: UI/UX Designer Entry Task
// ═══════════════════════════════════════

const task3Content = `
<h2>🎨 UI/UX Designer — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our internship opening. We have found your CV to be impressive and shortlisted you for the next phase.</p>
    <p style="font-size: 1.1em;">As a next step, we are expecting you to complete a short assignment.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency with <strong>2.5M+ YouTube subscribers</strong>. We design high-converting e-commerce stores for brands worldwide. We're hiring <strong>UI/UX designers</strong> at <strong>₹15,000 – ₹30,000/month</strong> based on design quality &amp; attention to detail.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Redesign a <strong>Shopify product page</strong> for a premium skincare brand. You must:</p>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>Design in Figma</strong> — desktop + mobile versions of a single product page</li>
        <li><strong>Include:</strong> Hero image, product gallery, trust badges, reviews section, upsell/cross-sell, sticky add-to-cart</li>
        <li><strong>Color palette &amp; typography</strong> — define your own that says "premium but approachable"</li>
        <li><strong>Annotate</strong> your design with spacing, font sizes, and interaction notes</li>
        <li><strong>Reference brand:</strong> Use <a href="https://drfrankensteinmd.com" target="_blank" style="color: #60A5FA;">drfrankensteinmd.com</a> as inspiration (don't copy)</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Figma link (view access enabled) with desktop + mobile frames</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎨 Style</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Premium, modern, conversion-focused — no generic templates</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design taste + attention to detail + CRO thinking = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F8FAFC; margin-top: 0;">💬 The Bottom Line</h3>
    <p style="font-size: 1.05em;">We need designers who think in conversions, not just aesthetics. Show us a product page that makes people want to click "Add to Cart."</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task3Content = task3Content;


// ═══════════════════════════════════════
// TASK 4: Full Stack Developer Entry Task
// ═══════════════════════════════════════

const task4Content = `
<h2>🔧 Full Stack Developer — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our internship opening. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency. We build custom apps, integrations, and internal tools. We're hiring <strong>full stack developers</strong> at <strong>₹20,000 – ₹40,000/month</strong> based on problem-solving ability &amp; code quality.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Build a <strong>mini Order Tracker app</strong> with frontend + backend:</p>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>Frontend:</strong> A clean dashboard showing a list of orders with status (Pending, Processing, Shipped, Delivered)</li>
        <li><strong>Backend:</strong> REST API with CRUD endpoints for orders (Create, Read, Update status, Delete)</li>
        <li><strong>Database:</strong> Any (MongoDB, PostgreSQL, SQLite, or even JSON file storage)</li>
        <li><strong>Filter &amp; Search:</strong> Filter orders by status, search by order ID or customer name</li>
        <li><strong>Stack:</strong> Use any stack you're comfortable with (React/Next.js, Node/Express, Python/Flask — your choice)</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">72 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GitHub repo link + deployed URL (Vercel/Netlify/Railway) OR screen recording demo</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📄 README</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Must include setup instructions, tech stack, and API documentation</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Code architecture + UI polish + API design = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F8FAFC; margin-top: 0;">💬 The Bottom Line</h3>
    <p style="font-size: 1.05em;">We need builders who ship. Show us clean architecture, a working app, and thoughtful UI. Bonus points for error handling and edge cases.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task4Content = task4Content;


// ═══════════════════════════════════════
// TASK 5: HR Executive Entry Task
// ═══════════════════════════════════════

const task5Content = `
<h2>👥 HR Executive — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our HR internship opening. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency with a 30+ member remote team across India. We're hiring an <strong>HR Executive</strong> at <strong>₹12,000 – ₹25,000/month</strong> based on communication skills &amp; organizational ability.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Complete all 3 parts of this HR assignment:</p>
    <h4 style="color: #60A5FA;">Part 1: Resume Screening (30 min)</h4>
    <ul style="line-height: 1.8;">
        <li>You'll receive 10 sample resumes for a "Shopify Developer" position</li>
        <li>Screen and rank the top 5 candidates with written justification for each</li>
        <li>Create a rejection email template for candidates who don't make the cut</li>
    </ul>
    <h4 style="color: #60A5FA;">Part 2: Onboarding Plan (45 min)</h4>
    <ul style="line-height: 1.8;">
        <li>Draft a <strong>Week 1 onboarding schedule</strong> for a new Shopify Developer joining DH</li>
        <li>Include: Day 1 welcome, tool setup, introductions, first tasks, check-in meetings</li>
        <li>Write the <strong>welcome message</strong> you'd send on Discord on Day 1</li>
    </ul>
    <h4 style="color: #60A5FA;">Part 3: Conflict Resolution (30 min)</h4>
    <ul style="line-height: 1.8;">
        <li>Scenario: A developer missed 3 deadlines this month. Their PM is frustrated and wants them replaced. The developer says they're overwhelmed with too many tasks.</li>
        <li>Write your approach: What do you say to the PM? To the developer? What process do you implement?</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Doc or PDF with all 3 parts clearly labeled</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✍️ Writing</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional tone, clear formatting, no grammar errors</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Communication quality + process thinking + empathy = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F8FAFC; margin-top: 0;">💬 The Bottom Line</h3>
    <p style="font-size: 1.05em;">HR is the backbone of any company. Show us you can screen talent, onboard with warmth, and handle conflict with maturity.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task5Content = task5Content;


// ═══════════════════════════════════════
// TASK 6: Content Writer Entry Task
// ═══════════════════════════════════════

const task6Content = `
<h2>✍️ Content Writer — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our internship opening. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency. We write product descriptions, blog posts, and marketing copy for e-commerce brands. We're hiring <strong>content writers</strong> at <strong>₹10,000 – ₹25,000/month</strong> based on writing quality &amp; SEO knowledge.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Complete both parts:</p>
    <h4 style="color: #60A5FA;">Part 1: SEO Blog Post (800–1200 words)</h4>
    <ul style="line-height: 1.8;">
        <li><strong>Topic:</strong> "How to Choose the Right Shopify Theme for Your Store in 2026"</li>
        <li><strong>Target keyword:</strong> "best Shopify themes 2026"</li>
        <li>Include: H2/H3 headings, internal linking suggestions, meta title &amp; description</li>
        <li>Tone: Professional but conversational — like explaining to a friend who's starting their first store</li>
    </ul>
    <h4 style="color: #60A5FA;">Part 2: Product Descriptions (5 products)</h4>
    <ul style="line-height: 1.8;">
        <li>Write descriptions for 5 skincare products (moisturizer, serum, cleanser, sunscreen, eye cream)</li>
        <li>Each description: 80–120 words, SEO-optimized, benefit-focused (not feature-focused)</li>
        <li>Include a compelling one-liner tagline for each product</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Doc with both parts clearly formatted</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚫 100% Original</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No plagiarism. AI-assisted is fine but must sound human and unique.</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Writing quality + SEO sense + conversion focus = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task6Content = task6Content;


// ═══════════════════════════════════════
// TASK 7: Social Media Manager Entry Task
// ═══════════════════════════════════════

const task7Content = `
<h2>📱 Social Media Manager — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our internship opening. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency with <strong>2.5M+ YouTube subscribers</strong>. We manage social media for e-commerce brands. We're hiring <strong>Social Media Managers</strong> at <strong>₹10,000 – ₹22,000/month</strong> based on content strategy &amp; creative execution.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Create a <strong>7-day content calendar</strong> for a premium pet food brand launching on Shopify:</p>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>Platforms:</strong> Instagram (feed + stories + reels) and LinkedIn</li>
        <li><strong>7 posts minimum</strong> — include caption, hashtags, visual direction, CTA, and posting time</li>
        <li><strong>At least 2 Reels concepts</strong> with script outlines (hook → body → CTA)</li>
        <li><strong>Content mix:</strong> Educational, promotional, UGC-style, behind-the-scenes, engagement-focused</li>
        <li><strong>Brand voice:</strong> Warm, trustworthy, slightly playful — think "premium but not stuffy"</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Sheet/Doc with organized calendar + Canva mockup for at least 2 posts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Strategy depth + hook quality + visual thinking = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task7Content = task7Content;


// ═══════════════════════════════════════
// TASK 8: Sales Executive Entry Task
// ═══════════════════════════════════════

const task8Content = `
<h2>💰 Sales Executive — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our Sales internship. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency. We close deals on Fiverr, Upwork, and through direct outreach. We're hiring <strong>Sales Executives</strong> at <strong>₹12,000 – ₹25,000/month + commission</strong> based on closing ability &amp; communication.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Handle a <strong>mock client inquiry</strong> from start to close:</p>
    <h4 style="color: #60A5FA;">The Scenario:</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0; font-style: italic;">
        "Hi, I have a clothing brand and want to set up a Shopify store. I have around 50 products. I need a modern, clean design. My budget is around $500-800. Can you help? I need it done in 2 weeks."
    </div>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>Write your reply</strong> to this Fiverr message (professional, warm, specific)</li>
        <li><strong>Ask qualifying questions</strong> — what would you need to know before quoting?</li>
        <li><strong>Create a proposal</strong> — scope, timeline, pricing (use DH's package structure)</li>
        <li><strong>Handle the objection:</strong> "Your competitor quoted $300. Why should I pay more?"</li>
        <li><strong>Write the closing message</strong> after they agree to proceed</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Doc with all 5 parts (reply, questions, proposal, objection handling, close)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Communication + value selling + professionalism = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task8Content = task8Content;


// ═══════════════════════════════════════
// TASK 9: Project Manager Entry Task
// ═══════════════════════════════════════

const task9Content = `
<h2>📊 Project Manager — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our PM internship. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency managing 50+ client projects simultaneously. We're hiring <strong>Project Managers</strong> at <strong>₹15,000 – ₹30,000/month</strong> based on organizational skill &amp; client management ability.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Create a <strong>complete project plan</strong> for a Shopify store build:</p>
    <h4 style="color: #60A5FA;">The Client Brief:</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0; font-style: italic;">
        "Premium activewear brand, 75 products, needs custom homepage, collection pages, product pages, about page, and a blog. Budget: $1,500. Timeline: 3 weeks. Team: 1 designer, 2 developers."
    </div>
    <ul style="font-size: 1.05em; line-height: 1.8;">
        <li><strong>Project plan</strong> — break down into weekly milestones with specific deliverables</li>
        <li><strong>Task board</strong> — create an Asana-style task list (Google Sheet is fine) with assignees, due dates, priorities</li>
        <li><strong>Risk register</strong> — identify top 5 project risks and mitigation strategies</li>
        <li><strong>Client update template</strong> — write a Week 1 progress update email to the client</li>
        <li><strong>Escalation plan</strong> — what happens if the designer delivers late? If the client goes silent?</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">48 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Doc (plan, risks, email) + Google Sheet (task board)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Planning depth + realism + communication quality = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task9Content = task9Content;


// ═══════════════════════════════════════
// TASK 10: Customer Success Entry Task
// ═══════════════════════════════════════

const task10Content = `
<h2>💬 Customer Success — Entry Assignment</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.15)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ READ THIS COMPLETELY BEFORE STARTING</h3>
    <p style="font-size: 1.1em;">Thank you for your interest in our CS internship. We have found your CV to be impressive and shortlisted you for the next phase.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 WHO WE ARE</h3>
    <p><strong>Digital Marketing Heroes</strong> — a premium Shopify agency. Our CS team is the front line with clients — managing expectations, handling revisions, and ensuring client satisfaction. We're hiring at <strong>₹10,000 – ₹22,000/month</strong>.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #3B82F6; margin-top: 0;">🎯 THE TASK</h3>
    <p style="font-size: 1.05em;">Handle <strong>5 real client scenarios</strong> with professional responses:</p>

    <h4 style="color: #60A5FA;">Scenario 1: Angry Client</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #EF4444; padding: 16px; margin: 10px 0; font-style: italic;">"This is NOT what I asked for! The homepage looks completely different from the mockup. I'm very disappointed. I want a full refund or I'm leaving a 1-star review."</div>

    <h4 style="color: #60A5FA;">Scenario 2: Scope Creep</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #F59E0B; padding: 16px; margin: 10px 0; font-style: italic;">"Hey, can you also add a blog section and a loyalty program? I thought that was included in the package."</div>

    <h4 style="color: #60A5FA;">Scenario 3: Late Feedback</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 16px; margin: 10px 0; font-style: italic;">Client hasn't responded to your feedback request in 5 days. The project deadline is in 3 days. Write a follow-up message.</div>

    <h4 style="color: #60A5FA;">Scenario 4: Revision Request</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 16px; margin: 10px 0; font-style: italic;">"I want to change the entire color scheme from blue to green. Also can you change all the fonts? And make the logo bigger."</div>

    <h4 style="color: #60A5FA;">Scenario 5: Positive Upsell Opportunity</h4>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 16px; margin: 10px 0; font-style: italic;">"The store looks great! I'm really happy with the work. Do you also do marketing?"</div>

    <p style="margin-top: 16px;">For each scenario, write <strong>your complete response</strong> (the actual message you'd send the client).</p>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📋 KEY RULES</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Rule</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Details</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>⏰ Deadline</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24 hours from this message</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>📁 Deliverable</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Google Doc with all 5 responses clearly labeled</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>💬 Tone</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional, empathetic, solution-oriented — never defensive</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Selection</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Empathy + problem-solving + professional tone = stipend bracket</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #A78BFA; padding: 20px; margin: 15px 0;">
        <p style="margin: 0;"><strong>If any doubts, message on WhatsApp:</strong> +91 88409 25421</p>
        <p style="margin: 8px 0 0 0; color: #94A3B8;">Anurag Singh, Operations Head<br>Team Digital Heroes</p>
    </div>
</div>
`;
window.task10Content = task10Content;


// ═══════════════════════════════════════
// QUIZZES — 10 questions per role
// ═══════════════════════════════════════

const task1Quiz = [
    { q: "What is the maximum duration allowed for the final video?", o: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"], c: 1 },
    { q: "What is the minimum video quality required?", o: ["720p MP4", "1080p+ MP4", "4K MP4", "Any resolution"], c: 1 },
    { q: "How many top editors will be selected?", o: ["Top 3", "Top 5", "Top 8", "Top 10"], c: 2 },
    { q: "What is the stipend range for video editors?", o: ["₹10K–₹20K/month", "₹15K–₹30K/month", "₹20K–₹35K/month", "₹25K–₹40K/month"], c: 2 },
    { q: "What is the deadline?", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "What should you do with filler/mistakes?", o: ["Keep them", "Identify and remove all", "Only remove obvious ones", "Speed them up 2x"], c: 1 },
    { q: "What determines your stipend bracket?", o: ["Years of experience", "Edit quality & animation quality", "Tools you know", "Speed only"], c: 1 },
    { q: "What type of video are you editing?", o: ["Product commercial", "Tech tutorial video", "Vlog", "Music video"], c: 1 },
    { q: "What raw materials will you work with?", o: ["Screen recordings only", "Camera footage only", "Camera footage + screen recordings", "Stock footage"], c: 2 },
    { q: "What should you do with boring parts?", o: ["Remove entirely", "Speed them up", "Add music over them", "Leave as-is"], c: 1 }
];

const task2Quiz = [
    { q: "What must the custom section be built for?", o: ["WordPress", "Shopify (Dawn theme)", "Wix", "Any CMS"], c: 1 },
    { q: "The section must be:", o: ["Desktop only", "Mobile only", "Fully responsive (mobile, tablet, desktop)", "Any single breakpoint"], c: 2 },
    { q: "What does 'schema-driven' mean?", o: ["Hardcoded values", "All content editable from Shopify Customizer", "Only CSS changes allowed", "Backend API driven"], c: 1 },
    { q: "What carries the highest weight in evaluation?", o: ["Speed of delivery (10%)", "Liquid code quality (30%)", "Visual design (25%)", "Performance (15%)"], c: 1 },
    { q: "What is the deadline for developer entry task?", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "Images in the section should be:", o: ["Loaded immediately", "Lazy-loaded for performance", "External CDN only", "SVG only"], c: 1 },
    { q: "Can you use AI tools to complete the task?", o: ["No, strictly manual", "Yes, but must understand every line", "Yes, copy-paste from ChatGPT is fine", "Only Copilot is allowed"], c: 1 },
    { q: "What type of section should you build?", o: ["Header navigation", "Featured Collection section", "Footer section", "Blog post section"], c: 1 },
    { q: "The section needs a collection picker in:", o: ["The CSS file", "The JavaScript", "The Shopify schema", "The HTML only"], c: 2 },
    { q: "What's the developer stipend range?", o: ["₹10K–₹20K/month", "₹15K–₹35K/month", "₹20K–₹40K/month", "₹25K–₹45K/month"], c: 1 }
];

const task3Quiz = [
    { q: "What tool must the design be created in?", o: ["Photoshop", "Figma", "Canva", "Sketch"], c: 1 },
    { q: "What page are you redesigning?", o: ["Homepage", "Product page", "Collection page", "About page"], c: 1 },
    { q: "How many versions must be included?", o: ["Desktop only", "Mobile only", "Desktop + mobile", "Desktop + tablet + mobile"], c: 2 },
    { q: "What reference brand should you use for inspiration?", o: ["apple.com", "amazon.com", "drfrankensteinmd.com", "shopify.com"], c: 2 },
    { q: "The design color palette should feel:", o: ["Cheap and cheerful", "Premium but approachable", "Dark and edgy", "Neon and playful"], c: 1 },
    { q: "Designer stipend range at DH:", o: ["₹10K–₹20K", "₹15K–₹30K", "₹20K–₹35K", "₹25K–₹40K"], c: 1 },
    { q: "What must be annotated in the design?", o: ["Only colors", "Spacing, font sizes, and interaction notes", "Just the font names", "Nothing — design speaks for itself"], c: 1 },
    { q: "What is the deadline?", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "The Figma link must have:", o: ["Edit access", "View access enabled", "Comment only access", "No sharing needed"], c: 1 },
    { q: "Selection is based on:", o: ["Speed only", "Design taste + attention to detail + CRO thinking", "Number of screens", "Tools used"], c: 1 }
];

const task4Quiz = [
    { q: "What app should you build?", o: ["E-commerce store", "Order Tracker app", "Chat application", "Blog platform"], c: 1 },
    { q: "The app needs:", o: ["Frontend only", "Backend only", "Frontend + backend", "Database only"], c: 2 },
    { q: "What CRUD operations are required?", o: ["Create and Read only", "Create, Read, Update status, Delete", "Read only", "Create and Delete only"], c: 1 },
    { q: "What is the full stack deadline?", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 2 },
    { q: "The deliverable must include:", o: ["Code only", "GitHub repo + deployed URL or screen recording", "Just a screenshot", "Email description"], c: 1 },
    { q: "Database choice:", o: ["Must use MongoDB", "Must use PostgreSQL", "Any database (your choice)", "No database needed"], c: 2 },
    { q: "The README must include:", o: ["Just the title", "Setup instructions, tech stack, and API docs", "Only a screenshot", "Nothing required"], c: 1 },
    { q: "Full stack stipend range:", o: ["₹10K–₹25K", "₹15K–₹30K", "₹20K–₹40K", "₹25K–₹50K"], c: 2 },
    { q: "Order statuses that must be supported:", o: ["Open/Closed only", "Pending, Processing, Shipped, Delivered", "New/Done", "Active/Inactive"], c: 1 },
    { q: "What search/filter is required?", o: ["No search needed", "Filter by status, search by order ID or customer name", "Only sorting by date", "Full-text search of all fields"], c: 1 }
];

const task5Quiz = [
    { q: "How many parts does the HR assignment have?", o: ["1", "2", "3", "4"], c: 2 },
    { q: "In resume screening, how many candidates must you rank?", o: ["All 10", "Top 3", "Top 5", "Top 7"], c: 2 },
    { q: "The onboarding plan covers:", o: ["First month", "First 2 weeks", "Week 1", "First day only"], c: 2 },
    { q: "What platform is the welcome message sent on?", o: ["Email", "Slack", "Discord", "WhatsApp"], c: 2 },
    { q: "The conflict scenario involves:", o: ["Two interns fighting", "A developer missing 3 deadlines with PM frustrated", "Client complaint about design", "Budget disagreement"], c: 1 },
    { q: "HR deadline:", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "Deliverable format:", o: ["PowerPoint", "Google Doc or PDF", "Excel spreadsheet", "Video presentation"], c: 1 },
    { q: "HR stipend range:", o: ["₹8K–₹18K", "₹12K–₹25K", "₹15K–₹30K", "₹20K–₹35K"], c: 1 },
    { q: "What must be included with resume screening?", o: ["Just the ranking", "Rankings + written justification + rejection email template", "Only a rejection email", "Verbal explanation"], c: 1 },
    { q: "Selection criteria for HR:", o: ["Typing speed", "Communication quality + process thinking + empathy", "Years of experience", "Degree qualification"], c: 1 }
];

const task6Quiz = [
    { q: "Blog post word count requirement:", o: ["300–500", "500–800", "800–1200", "1500–2000"], c: 2 },
    { q: "Target keyword for the blog post:", o: ["shopify themes", "best Shopify themes 2026", "ecommerce design", "online store builder"], c: 1 },
    { q: "How many product descriptions are required?", o: ["3", "5", "7", "10"], c: 1 },
    { q: "Each product description length:", o: ["30–50 words", "80–120 words", "200–300 words", "500+ words"], c: 1 },
    { q: "Product descriptions must be:", o: ["Feature-focused", "Benefit-focused", "Technical specs only", "Price-focused"], c: 1 },
    { q: "Content must be:", o: ["Copied from competitors", "100% original (AI-assisted OK)", "Template-based only", "Translated from another language"], c: 1 },
    { q: "Blog tone should be:", o: ["Extremely formal", "Professional but conversational", "Casual slang", "Academic"], c: 1 },
    { q: "Content writer stipend range:", o: ["₹8K–₹18K", "₹10K–₹25K", "₹15K–₹30K", "₹20K–₹35K"], c: 1 },
    { q: "The blog must include:", o: ["Only paragraphs", "H2/H3 headings, internal linking suggestions, meta title & description", "Just the title and body", "Images only"], c: 1 },
    { q: "Each product needs:", o: ["Description only", "Description + tagline", "Tagline only", "Description + pricing"], c: 1 }
];

const task7Quiz = [
    { q: "Content calendar duration:", o: ["3 days", "7 days", "14 days", "30 days"], c: 1 },
    { q: "Target platforms:", o: ["Twitter only", "Instagram + LinkedIn", "Facebook + YouTube", "TikTok + Twitter"], c: 1 },
    { q: "Minimum number of Reels concepts:", o: ["1", "2", "3", "5"], c: 1 },
    { q: "The brand type in the assignment:", o: ["Fashion clothing", "Premium pet food", "Tech gadgets", "Skincare"], c: 1 },
    { q: "Brand voice should be:", o: ["Corporate formal", "Warm, trustworthy, slightly playful", "Edgy and controversial", "Academic and serious"], c: 1 },
    { q: "Social media deadline:", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "Each post must include:", o: ["Caption only", "Caption, hashtags, visual direction, CTA, posting time", "Just an image idea", "Hashtags only"], c: 1 },
    { q: "Social media stipend range:", o: ["₹8K–₹18K", "₹10K–₹22K", "₹15K–₹28K", "₹20K–₹35K"], c: 1 },
    { q: "Reel scripts must have:", o: ["Just the concept", "Hook → body → CTA structure", "Only the CTA", "A full screenplay"], c: 1 },
    { q: "Content mix should include:", o: ["Only promotional posts", "Educational, promotional, UGC-style, BTS, engagement", "Only memes", "Only product photos"], c: 1 }
];

const task8Quiz = [
    { q: "Sales entry task deadline:", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 0 },
    { q: "The mock client wants:", o: ["A WordPress site", "A Shopify store for clothing brand", "SEO services", "Social media management"], c: 1 },
    { q: "Client's budget range:", o: ["$200–$400", "$500–$800", "$1000–$1500", "$2000+"], c: 1 },
    { q: "How many parts does the sales task have?", o: ["3", "4", "5", "6"], c: 2 },
    { q: "The competitor objection is:", o: ["'Your work is slow'", "'Your competitor quoted $300'", "'I found a better agency'", "'I don't need a website anymore'"], c: 1 },
    { q: "Client has how many products?", o: ["10", "25", "50", "100"], c: 2 },
    { q: "Client's timeline requirement:", o: ["1 week", "2 weeks", "1 month", "3 months"], c: 1 },
    { q: "Sales stipend includes:", o: ["Stipend only", "Stipend + commission", "Commission only", "Project-based pay"], c: 1 },
    { q: "The reply must be:", o: ["Casual and brief", "Professional, warm, specific", "Formal and lengthy", "Template copy-paste"], c: 1 },
    { q: "You must write qualifying questions because:", o: ["It's optional", "You need info before quoting accurately", "The client asked for them", "It's a formality"], c: 1 }
];

const task9Quiz = [
    { q: "PM entry task deadline:", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "Client's project budget:", o: ["$500", "$1,000", "$1,500", "$2,500"], c: 2 },
    { q: "Project timeline:", o: ["1 week", "2 weeks", "3 weeks", "1 month"], c: 2 },
    { q: "Team size for the project:", o: ["1 person", "1 designer + 1 developer", "1 designer + 2 developers", "5 people"], c: 2 },
    { q: "How many project risks must be identified?", o: ["3", "5", "7", "10"], c: 1 },
    { q: "What client update must you write?", o: ["Final delivery email", "Week 1 progress update", "Invoice email", "Kickoff email"], c: 1 },
    { q: "Product count in the project:", o: ["25", "50", "75", "100"], c: 2 },
    { q: "PM stipend range:", o: ["₹10K–₹22K", "₹15K–₹30K", "₹20K–₹35K", "₹25K–₹40K"], c: 1 },
    { q: "The task board should resemble:", o: ["A calendar", "An Asana-style task list with assignees and due dates", "A simple checklist", "A Gantt chart only"], c: 1 },
    { q: "The escalation plan must address:", o: ["Budget issues only", "Designer delays and client going silent", "Technical failures only", "Legal concerns"], c: 1 }
];

const task10Quiz = [
    { q: "How many client scenarios must you handle?", o: ["3", "5", "7", "10"], c: 1 },
    { q: "CS entry task deadline:", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 0 },
    { q: "The angry client is threatening:", o: ["Legal action", "1-star review and refund", "To cancel the project", "To switch agencies"], c: 1 },
    { q: "Scope creep scenario involves:", o: ["Price increase", "Client asking for blog + loyalty program not in scope", "Timeline extension", "Team expansion"], c: 1 },
    { q: "Response tone must be:", o: ["Defensive", "Professional, empathetic, solution-oriented", "Casual", "Robotic"], c: 1 },
    { q: "How many days has the late feedback client been silent?", o: ["2 days", "3 days", "5 days", "7 days"], c: 2 },
    { q: "The upsell opportunity is for:", o: ["More pages", "Marketing services", "Support package", "Redesign"], c: 1 },
    { q: "CS stipend range:", o: ["₹8K–₹18K", "₹10K–₹22K", "₹15K–₹28K", "₹20K–₹30K"], c: 1 },
    { q: "For each scenario you must write:", o: ["A brief note", "Your complete response (the actual message)", "Just bullet points", "A phone script"], c: 1 },
    { q: "The revision request includes:", o: ["Minor text change", "Color scheme + fonts + logo size changes", "Just a typo fix", "Page deletion"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
