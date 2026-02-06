// Shopify Developer Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program
// 13 Tasks, 150+ Quiz Questions, Deep Content

const trainingTasks = [
    {
        id: 1,
        title: "Developer Mindset",
        description: "Code that SELLS - Your work touches money",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Read ALL content sections completely",
            "🎯 Understand: The $50,000/day reality",
            "🧠 Learn: Zero Tolerance Philosophy"
        ]
    },
    {
        id: 2,
        title: "Platform Fundamentals",
        description: "Shopify Architecture Deep Dive",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🏗️ Master: Online Store 2.0 Architecture",
            "🛍️ Understand: Product/Variant/Metafield hierarchy",
            "🌍 Learn: Multi-Currency & International setup"
        ]
    },
    {
        id: 3,
        title: "Theme Architecture",
        description: "Dawn/Prestige Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🎨 Rule: NEVER edit Live Theme",
            "🏠 Learn: 12 Essential Homepage Sections",
            "📱 Master: Mobile-First Development"
        ]
    },
    {
        id: 4,
        title: "Liquid Programming",
        description: "Deep Dive into Shopify's Language",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "💻 Master: Objects, Tags, Filters",
            "🔄 Practice: Loops & Conditionals",
            "🧱 Learn: Metafields & JSON Schemas"
        ]
    },
    {
        id: 5,
        title: "Product Page Optimization",
        description: "High-Conversion PDPs",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "🛒 Master: Above-the-Fold Anatomy",
            "📸 Learn: Media Gallery Best Practices",
            "🧩 Build: Custom Liquid Blocks"
        ]
    },
    {
        id: 6,
        title: "Speed Optimization",
        description: "Core Web Vitals Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "⚡ Target: Mobile 85+, Desktop 90+",
            "🖼️ Learn: Image Optimization & WebP",
            "📜 Master: Script Deferral & Lazy Loading"
        ]
    },
    {
        id: 7,
        title: "Apps & Integrations",
        description: "The Healthy App Stack",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔌 Rule: Max 5-8 Apps Only",
            "🗑️ Process: Clean Uninstall Protocol",
            "⚠️ Learn: App Conflict Resolution"
        ]
    },
    {
        id: 8,
        title: "Checkout & Policies",
        description: "Trust & Transaction Setup",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "💳 Configure: Payment Gateways",
            "📦 Setup: Shipping Profiles",
            "📜 Create: All Required Policy Pages"
        ]
    },
    {
        id: 9,
        title: "QA & Testing",
        description: "The 60-Point Quality Gate",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "🕵️‍♀️ Master: Cross-Browser Testing",
            "📱 Learn: Real Device Testing (iOS/Android)",
            "🐞 Practice: Console Error Diagnosis"
        ]
    },
    {
        id: 10,
        title: "Troubleshooting",
        description: "Debugging Mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔧 Tool: Theme Inspector Pro Usage",
            "🐛 Learn: The 7-Step Debug Decision Tree",
            "🚨 Master: Error Log Interpretation"
        ]
    },
    {
        id: 11,
        title: "Crisis Management",
        description: "Handling Dev Emergencies",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔥 Scenario: Site Down Protocol",
            "🔥 Scenario: Data Loss Recovery",
            "🔥 Scenario: Angry Client Communication"
        ]
    },
    {
        id: 12,
        title: "AI-Powered Development",
        description: "Coding with AI Copilots",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🤖 Tool: ChatGPT for Liquid Code",
            "🤖 Tool: GitHub Copilot Integration",
            "⚠️ Critical: AI Code Verification Process"
        ]
    },
    {
        id: 13,
        title: "Career Growth & Final Exam",
        description: "Junior to Expert Path",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🌱 Path: Junior → Mid → Senior → Lead",
            "📚 Learn: Continuous Learning Strategy",
            "🎓 Complete: Final Certification Exam"
        ]
    }
];

// =============================================================================
// TASK 1: DEVELOPER MINDSET - THE $50,000/DAY REALITY
// =============================================================================
const task1Content = `
<h2>📚 PART 1: THE FOUNDATION - Code That SELLS</h2>

<div class="content-section">
    <h3>🎯 Why Are You Here?</h3>
    <p>You're about to learn a skill that can change your entire career. Development is not just a job — it's the <strong>backbone of e-commerce revenue</strong>.</p>
    <ul>
        <li>❌ Anyone can write code that "works"</li>
        <li>❌ Anyone can copy from Stack Overflow</li>
        <li>❌ Anyone can install apps</li>
        <li>✅ Only <strong>Digital Heroes Developers</strong> write code that <strong>SELLS</strong></li>
    </ul>
    <div class="warning-box">
        <strong>⚠️ The Uncomfortable Truth:</strong><br>
        95% of Shopify developers focus on making things look pretty. The top 5% focus on making things <strong>convert</strong>. You're reading this because someone saw potential in you to be in that 5%. The question is: <strong>Do you have what it takes?</strong>
    </div>
</div>

<div class="content-section">
    <h3>💰 The $50,000/Day Difference</h3>
    <p>A "coder" writes lines that work mechanically. A "<strong>Digital Heroes Developer</strong>" writes code that drives revenue.</p>
    <div class="highlight-box">
        <strong>Real Story from Our Agency:</strong>
        <p>A previous developer saved 200KB of JavaScript by removing "unnecessary" code. Sounds good, right?</p>
        <p><strong>The Problem:</strong> He broke the "Add to Cart" button on iPhones. The client's store was making $50,000/day. For 12 hours, no iPhone user could purchase.</p>
        <p style="color: #EF4444; font-size: 1.2em; font-weight: bold;">Revenue Lost: $25,000+ in ONE incident</p>
        <p><strong>Lesson:</strong> Reliability > Cleverness. Your code touches REAL money. Every. Single. Day.</p>
    </div>
</div>

<div class="content-section">
    <h3>👤 The Two Types of Developers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚶 Type 1: The Script Kid</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Copy-pastes from tutorials<br>
                • Thinks "it works on my machine"<br>
                • Quits when bugs appear<br>
                • Blames Shopify, themes, apps<br>
                <em style="color: #EF4444;">Will be replaced by AI ❌</em>
            </td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎓 Type 2: The Revenue Developer</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Understands WHY code works<br>
                • Tests on real devices before shipping<br>
                • Debugs systematically, fixes root cause<br>
                • Takes ownership of results<br>
                <em style="color: #10B981;">Will command $100+/hour ✅</em>
            </td>
        </tr>
    </table>
    <div class="highlight-box">
        <strong>Which one are you?</strong> The answer isn't what you say. It's what you <strong>DO</strong> when no one is watching.
    </div>
</div>

<h2>📚 PART 2: CORE MINDSET PRINCIPLES</h2>

<div class="content-section">
    <h3>🛡️ Principle 1: Zero Tolerance for Bugs</h3>
    <p>We do NOT use clients as beta testers. If a bug reaches the client, <strong>we have failed.</strong></p>
    <div class="warning-box">
        <strong>The Digital Heroes QA Standard:</strong>
        <ul style="margin-bottom: 0;">
            <li>✅ Test on Chrome, Safari, Firefox, Edge</li>
            <li>✅ Test on real iPhone (not just Chrome DevTools)</li>
            <li>✅ Test on real Android device</li>
            <li>✅ Test Add to Cart flow end-to-end</li>
            <li>✅ Check console for ANY errors (red = fail)</li>
            <li>✅ Test with slow 3G network simulation</li>
        </ul>
    </div>
    <p><strong>Remember:</strong> The client is paying $1,200-$1,800+ for premium quality. If we deliver bugs, we're no different from the $300 Fiverr developer.</p>
</div>

<div class="content-section">
    <h3>⚡ Principle 2: Speed is Revenue</h3>
    <p>Every 1 second of load time = <strong>7% conversion drop</strong>. Here's the math:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Store Revenue</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Load Time</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Conversion Drop</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Annual Loss</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$10,000/day</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+1 second</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">$255,500</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$10,000/day</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+2 seconds</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14%</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">$511,000</td>
        </tr>
    </table>
    <div class="highlight-box">
        <strong>Your Responsibility:</strong> Every heavy image, every unnecessary app, every unoptimized script YOU add is costing the client REAL money.
    </div>
</div>

<div class="content-section">
    <h3>📝 Principle 3: Plan Twice, Code Once</h3>
    <p>The amateur starts coding immediately. The professional:</p>
    <ol>
        <li><strong>Reads the task brief carefully</strong> — What exactly is needed?</li>
        <li><strong>Reads Shopify documentation</strong> — What's the official way?</li>
        <li><strong>Checks existing theme code</strong> — How does this theme handle it?</li>
        <li><strong>Plans the approach</strong> — What files need changes?</li>
        <li><strong>Then codes</strong> — With full understanding</li>
    </ol>
    <div class="warning-box">
        <strong>The Cost of Skipping Steps:</strong><br>
        • Guessing = 2 hours of debugging later<br>
        • Reading docs first = 30 minutes saved
    </div>
</div>

<div class="content-section">
    <h3>🔧 Principle 4: The 10x Developer Myth</h3>
    <p>You've heard of "10x developers" — devs who are 10 times more productive than average.</p>
    <div class="highlight-box">
        <strong>The Truth:</strong> They're not 10x smarter. They're 10x more <strong>systematic</strong>.
        <ul style="margin-bottom: 0;">
            <li>📁 Organized code structure</li>
            <li>📝 Clear naming conventions</li>
            <li>🔍 Systematic debugging process</li>
            <li>♻️ Reusable components library</li>
            <li>📚 Documentation habits</li>
        </ul>
    </div>
    <p>This training will teach you the <strong>systems</strong> that make you faster, not just the code that makes features work.</p>
</div>

<h2>📚 PART 3: THE DIGITAL HEROES DEVELOPER STANDARDS</h2>

<div class="content-section">
    <h3>📋 The Non-Negotiable Rules</h3>
    <p>These rules are ABSOLUTE. No exceptions. No "just this once."</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.3);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);" colspan="2"><strong>❌ NEVER DO THESE</strong></td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edit the LIVE theme directly</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always duplicate first</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hardcode currency symbols ($, £, €)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use {{ cart.currency.symbol }}</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use deprecated tags (include, assign in wrong context)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use render, capture</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Leave console errors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Zero errors = shipping standard</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ship without testing on mobile</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">70%+ traffic is mobile</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>✅ The Quality Checklist</h3>
    <p>Before you mark ANY task as complete, verify:</p>
    <div class="highlight-box">
        <ul style="margin-bottom: 0;">
            <li>☐ Works on Desktop Chrome</li>
            <li>☐ Works on Mobile Safari (iPhone)</li>
            <li>☐ Works on Mobile Chrome (Android)</li>
            <li>☐ No console errors</li>
            <li>☐ No layout shifts (CLS)</li>
            <li>☐ Loads under 3 seconds on 3G</li>
            <li>☐ All links functional</li>
            <li>☐ Add to Cart works</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Impact Calculation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Calculate Revenue Impact</h4>
        <p>A store makes $10,000/day. A 1-second delay reduces conversions by 7%. Calculate:</p>
        <code style="background: #1e1e1e; padding: 10px; border-radius: 6px; display: block; font-family: monospace;">
        Daily Loss = $10,000 × 0.07 = ?<br>
        Annual Loss = Daily × 365 = ?
        </code>
        <p style="margin-top: 15px;"><strong>Answer:</strong> $700/day × 365 = <span style="color: #EF4444;">$255,500/year</span></p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Developer Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
        <li>💡 Questions test UNDERSTANDING, not memorization</li>
    </ul>
</div>
`;

// =============================================================================
// TASK 2: SHOPIFY PLATFORM FUNDAMENTALS
// =============================================================================
const task2Content = `
<h2>📚 TASK 2: SHOPIFY PLATFORM FUNDAMENTALS</h2>

<div class="content-section">
    <h3>🏗️ Shopify is NOT WordPress</h3>
    <p>If you're coming from WordPress, forget everything. Shopify is fundamentally different:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Aspect</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>WordPress</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hosting</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Self-hosted (you manage server)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fully hosted SaaS</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Language</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PHP</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Liquid (Ruby-based)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Database</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direct MySQL access</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">API only (no direct DB access)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customization</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited (can break anything)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sandboxed (safer but limited)</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🏠 Online Store 2.0 Architecture</h3>
    <p>In 2021, Shopify released Online Store 2.0 - the modern way to build themes:</p>
    <div class="highlight-box">
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>JSON Templates:</strong> Pages are defined in JSON, not Liquid</li>
            <li><strong>Sections Everywhere:</strong> Add sections to ANY page type</li>
            <li><strong>App Blocks:</strong> Apps can inject content without editing code</li>
            <li><strong>Metafields:</strong> Custom data on products, collections, pages</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📦 The Data Model Hierarchy</h3>
    <p>Understanding this hierarchy is CRITICAL:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        <strong style="color: #10B981;">SHOP</strong> (Root)<br>
        ├── <strong style="color: #6366F1;">COLLECTION</strong> (Groups products)<br>
        │   └── products[] (Array of products)<br>
        ├── <strong style="color: #F59E0B;">PRODUCT</strong><br>
        │   ├── title, description, vendor<br>
        │   ├── images[] (Array of images)<br>
        │   ├── <strong style="color: #EC4899;">VARIANT</strong>[] (Size/Color combos)<br>
        │   │   ├── price, compare_at_price<br>
        │   │   ├── inventory_quantity<br>
        │   │   └── sku, barcode<br>
        │   └── <strong style="color: #8B5CF6;">METAFIELD</strong>[] (Custom data)<br>
        ├── <strong>CUSTOMER</strong><br>
        ├── <strong>ORDER</strong><br>
        └── <strong>PAGE</strong>
    </div>
</div>

<div class="content-section">
    <h3>🌍 Multi-Market & International</h3>
    <div class="warning-box">
        <strong>The Hardcoding Trap:</strong><br>
        Never, EVER hardcode currency symbols like "$" or "£".<br><br>
        <strong>❌ WRONG:</strong> <code>$$\{product.price}</code><br>
        <strong>✅ RIGHT:</strong> <code>{{ product.price | money }}</code><br><br>
        A user in UK expects to see "£", not "$". The money filter handles this automatically.
    </div>
</div>

<div class="content-section">
    <h3>🔧 Shopify Limits You Must Know</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Limit</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Value</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It Matters</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variants per product</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">100 max</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can't have 200 size/color combos</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product images</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">250 max</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Usually plenty</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collections</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5000 max</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rarely an issue</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">products.all limit</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1000 in loop</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use pagination for large catalogs</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Metafield Design</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Exercise: Plan Metafields for a Coffee Product</h4>
        <p>Design the metafield structure for a "Coffee Bean" product with:</p>
        <ul>
            <li>Roast Level (1-5 scale)</li>
            <li>Origin Country</li>
            <li>Tasting Notes (multiple)</li>
            <li>Brewing Instructions</li>
        </ul>
        <p>Write down Namespace.Key format (e.g., <code>custom.roast_level</code>).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Shopify Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
    </ul>
</div>
`;

// Continue with more tasks...
// (Tasks 3-13 follow the same deep pattern)

const task3Content = `
<h2>📚 TASK 3: THEME ARCHITECTURE - The Digital Heroes Standard</h2>

<div class="content-section">
    <h3>🎨 Theme Selection Philosophy</h3>
    <p>We prefer <strong>Dawn</strong> (free base) or <strong>Prestige/Impulse</strong> (premium) themes.</p>
    <div class="warning-box">
        <strong>❌ NEVER EDIT THE LIVE THEME DIRECTLY</strong><br><br>
        <strong>The Protocol:</strong>
        <ol>
            <li>Duplicate the live theme</li>
            <li>Name it: <code>[Dev] Feature Name - YYYY-MM-DD</code></li>
            <li>Make ALL changes in the duplicate</li>
            <li>Preview and test thoroughly</li>
            <li>Only then: Publish</li>
        </ol>
        Breaking the live theme = $50,000 mistake (see Task 1)
    </div>
</div>

<div class="content-section">
    <h3>🏠 The 12 Essential Homepage Sections</h3>
    <p>A high-converting homepage follows this proven structure:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>#</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Section</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Purpose</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero Banner</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First impression + CTA</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logo Bar</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof ("As seen in...")</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Value Props</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why buy from us (icons)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Featured Collection</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best sellers</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Image + Text</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand story</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Benefits</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Features/specs</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Testimonials</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust building</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Second Collection</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category navigation</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FAQ Accordion</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Objection handling</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Newsletter</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead capture</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">11</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram Feed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social engagement</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">12</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Footer</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Links + Trust badges</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>📱 Mobile-First Development</h3>
    <p><strong>70%+ of e-commerce traffic is mobile.</strong> Design for mobile FIRST.</p>
    <div class="highlight-box">
        <strong>Mobile Priorities:</strong>
        <ul>
            <li>Touch targets: Minimum 44x44px</li>
            <li>Sticky Add to Cart button</li>
            <li>Collapsible product descriptions</li>
            <li>Swipeable image galleries</li>
            <li>No hover-only interactions</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Theme Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

// Tasks 4-13 content - EXPANDED WITH FULL DEPTH
const task4Content = `
<h2>📚 TASK 4: LIQUID PROGRAMMING - The Heart of Shopify Development</h2>

<div class="content-section">
    <h3>💧 The Three Pillars of Liquid</h3>
    <p>Liquid is Shopify's templating language. It was created by Shopify and is used to build dynamic content. Master these three concepts:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pillar</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Syntax</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Objects</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Output data</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.title }}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tags</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Logic & Control</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.available %}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Filters</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>|</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Transform output</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.price | money }}</code></td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📦 Core Shopify Objects</h3>
    <p>These are the data structures you'll work with daily:</p>
    
    <div class="highlight-box">
        <strong>Most Used Objects:</strong>
        <ul>
            <li><code>product</code> - Current product (title, price, images, variants)</li>
            <li><code>collection</code> - Group of products</li>
            <li><code>cart</code> - Shopping cart (items, total, item_count)</li>
            <li><code>customer</code> - Logged in customer data</li>
            <li><code>shop</code> - Store settings (name, currency, domain)</li>
            <li><code>settings</code> - Theme customizer values</li>
            <li><code>section</code> - Current section settings</li>
            <li><code>block</code> - Section blocks</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🔄 Loops & Iteration</h3>
    <p>Looping through products, collections, and arrays is fundamental:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">{% for</span> product <span style="color: #569cd6;">in</span> collection.products <span style="color: #569cd6;">limit:</span> 4 <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;div class="product-card"&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;img src="</span><span style="color: #ce9178;">{{ product.featured_image | image_url: width: 400 }}</span><span style="color: #808080;">"&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;h3&gt;</span><span style="color: #ce9178;">{{ product.title }}</span><span style="color: #808080;">&lt;/h3&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;p&gt;</span><span style="color: #ce9178;">{{ product.price | money }}</span><span style="color: #808080;">&lt;/p&gt;</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;/div&gt;</span><br>
        <span style="color: #569cd6;">{% else %}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;p&gt;</span>No products found in this collection.<span style="color: #808080;">&lt;/p&gt;</span><br>
        <span style="color: #569cd6;">{% endfor %}</span>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Loop Variables:</strong><br>
        <code>forloop.index</code> - Current iteration (1-based)<br>
        <code>forloop.index0</code> - Current iteration (0-based)<br>
        <code>forloop.first</code> - Boolean: is first item?<br>
        <code>forloop.last</code> - Boolean: is last item?<br>
        <code>forloop.length</code> - Total items
    </div>
</div>

<div class="content-section">
    <h3>🔀 Conditionals</h3>
    <p>Control flow is essential for dynamic content:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">{% if</span> product.available <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;button&gt;</span>Add to Cart<span style="color: #808080;">&lt;/button&gt;</span><br>
        <span style="color: #569cd6;">{% elsif</span> product.selected_or_first_available_variant <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;button&gt;</span>Select Options<span style="color: #808080;">&lt;/button&gt;</span><br>
        <span style="color: #569cd6;">{% else %}</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;button disabled&gt;</span>Sold Out<span style="color: #808080;">&lt;/button&gt;</span><br>
        <span style="color: #569cd6;">{% endif %}</span>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Operator</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meaning</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>==</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.type == 'Shoes' %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Equals</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>!=</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.vendor != 'Nike' %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not equals</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>contains</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if product.tags contains 'sale' %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">String/Array contains</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>and / or</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% if a and b %}</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Combine conditions</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔧 Essential Filters</h3>
    <p>Filters transform output. These are the ones you'll use constantly:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Filter</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Input</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Output</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| money</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1999</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$19.99</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| money_without_trailing_zeros</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2000</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$20</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| image_url: width: 400</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Image object</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Optimized URL</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| date: '%B %d, %Y'</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Date object</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">January 19, 2026</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| truncate: 100</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long text</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Truncated text...</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| strip_html</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>&lt;p&gt;Text&lt;/p&gt;</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Text</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| handleize</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">My Product Name</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">my-product-name</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| default: 'N/A'</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">empty/nil</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">N/A</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🧱 Metafields - Custom Data</h3>
    <p>Metafields store extra data on products, collections, pages, etc:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;">// Access product metafield</span><br>
        <span style="color: #ce9178;">{{ product.metafields.custom.ingredients }}</span><br><br>
        <span style="color: #6a9955;">// Check if metafield exists</span><br>
        <span style="color: #569cd6;">{% if</span> product.metafields.custom.size_guide <span style="color: #569cd6;">%}</span><br>
        &nbsp;&nbsp;<span style="color: #ce9178;">{{ product.metafields.custom.size_guide }}</span><br>
        <span style="color: #569cd6;">{% endif %}</span>
    </div>
    
    <div class="highlight-box">
        <strong>Common Metafield Uses:</strong>
        <ul>
            <li>Product ingredients/materials</li>
            <li>Size guides (reference)</li>
            <li>Care instructions</li>
            <li>Warranty information</li>
            <li>Custom tab content</li>
            <li>Related product collections</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📝 Section Schemas</h3>
    <p>Schemas make your sections configurable via Theme Customizer:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">{% schema %}</span><br>
        {<br>
        &nbsp;&nbsp;"name": "Featured Banner",<br>
        &nbsp;&nbsp;"settings": [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "image_picker",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "background_image",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Background Image"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;},<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "text",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "heading",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Heading",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"default": "Welcome to our store"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;},<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "url",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "button_link",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Button Link"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;],<br>
        &nbsp;&nbsp;"presets": [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{"name": "Featured Banner"}<br>
        &nbsp;&nbsp;]<br>
        }<br>
        <span style="color: #569cd6;">{% endschema %}</span>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: Build a Related Products Section</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #818CF8; margin-top: 0;">Your Task:</h4>
        <p>Create a Liquid section that displays 4 related products from the same collection, excluding the current product.</p>
        
        <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; font-family: monospace; color: #d4d4d4;">
            <span style="color: #569cd6;">{% for</span> related <span style="color: #569cd6;">in</span> product.collections.first.products <span style="color: #569cd6;">limit:</span> 5 <span style="color: #569cd6;">%}</span><br>
            &nbsp;&nbsp;<span style="color: #569cd6;">{% if</span> related.id != product.id <span style="color: #569cd6;">%}</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;div class="related-product"&gt;</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">{{ related.title }}</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;/div&gt;</span><br>
            &nbsp;&nbsp;<span style="color: #569cd6;">{% endif %}</span><br>
            <span style="color: #569cd6;">{% endfor %}</span>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ Common Liquid Mistakes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Wrong</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Correct</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% include 'snippet' %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% render 'snippet' %}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>$\\{product.price}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.price | money }}</code></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ img_url }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ image | image_url: width: 400 }}</code></td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 15 questions about Liquid Programming</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 5</li>
        <li>💡 Contains code output questions</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: PRODUCT PAGE (PDP) OPTIMIZATION - Converting Visitors to Buyers</h2>

<div class="content-section">
    <h3>🛒 Above the Fold - The Critical First Screen</h3>
    <p>On mobile, users must see these elements WITHOUT SCROLLING:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why Essential</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product Image (swipeable)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Visual decision driver</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Title & Price</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What am I buying, how much?</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Review Stars</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof (trust)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variant Selector</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size/color selection</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Add to Cart Button</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The conversion action</td></tr>
    </table>
    
    <div class="warning-box">
        <strong>⚠️ The Sticky Add to Cart:</strong><br>
        On mobile, implement a sticky Add to Cart bar at the bottom. This keeps the CTA visible as users scroll.
    </div>
</div>

<div class="content-section">
    <h3>📸 Image Gallery Best Practices</h3>
    <ul>
        <li>✅ First image: Product on white/clean background</li>
        <li>✅ 2-4: Lifestyle shots showing product in use</li>
        <li>✅ Close-up of texture/details</li>
        <li>✅ Size reference (product in hand, on model)</li>
        <li>✅ Video if available (Shopify supports embedded video)</li>
    </ul>
    
    <div class="highlight-box">
        <strong>Image Optimization:</strong>
        <ul>
            <li>Use <code>| image_url: width: 800</code> for main images</li>
            <li>Use <code>| image_url: width: 100</code> for thumbnails</li>
            <li>Always include <code>loading="lazy"</code> on below-fold images</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🧩 Metafields for Product Data</h3>
    <p>Don't dump everything in description. Use metafields for structured data:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metafield</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Namespace.Key</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Type</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ingredients</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.ingredients</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multi-line text</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Size Guide</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.size_guide</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page reference</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Care Instructions</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.care</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rich text</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Warranty</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>custom.warranty</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Single-line text</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🛒 Add to Cart Button Manipulation - Opening Cart Drawer</h3>
    <p>One of the most common customizations is making the "Add to Cart" button open a cart drawer instead of redirecting to the cart page. Here's how it works:</p>
    
    <div class="highlight-box">
        <strong>The Flow:</strong>
        <ol>
            <li>User clicks "Add to Cart" button</li>
            <li>JavaScript intercepts the click (prevents default form submit)</li>
            <li>AJAX call adds product to cart via Shopify Cart API</li>
            <li>Cart drawer slides open showing the added item</li>
            <li>User can continue shopping or proceed to checkout</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>💻 JavaScript: Cart API & Drawer Toggle</h3>
    <p>Here's the core JavaScript pattern for this functionality:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; overflow-x: auto;">
        <span style="color: #6a9955;">// 1. Listen for Add to Cart form submit</span><br>
        <span style="color: #569cd6;">const</span> form = document.querySelector(<span style="color: #ce9178;">'form[action*="/cart/add"]'</span>);<br><br>
        
        form.addEventListener(<span style="color: #ce9178;">'submit'</span>, <span style="color: #569cd6;">async</span> (e) =&gt; {<br>
        &nbsp;&nbsp;e.preventDefault(); <span style="color: #6a9955;">// Stop normal form submission</span><br><br>
        
        &nbsp;&nbsp;<span style="color: #6a9955;">// 2. Get form data</span><br>
        &nbsp;&nbsp;<span style="color: #569cd6;">const</span> formData = <span style="color: #569cd6;">new</span> FormData(form);<br><br>
        
        &nbsp;&nbsp;<span style="color: #6a9955;">// 3. Add to cart via AJAX</span><br>
        &nbsp;&nbsp;<span style="color: #569cd6;">const</span> response = <span style="color: #569cd6;">await</span> fetch(<span style="color: #ce9178;">'/cart/add.js'</span>, {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;method: <span style="color: #ce9178;">'POST'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;body: formData<br>
        &nbsp;&nbsp;});<br><br>
        
        &nbsp;&nbsp;<span style="color: #569cd6;">if</span> (response.ok) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955;">// 4. Open the cart drawer</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;openCartDrawer();<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955;">// 5. Update cart count in header</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;updateCartCount();<br>
        &nbsp;&nbsp;}<br>
        });
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Key Points:</strong>
        <ul>
            <li><code>e.preventDefault()</code> - Stops the page from redirecting</li>
            <li><code>/cart/add.js</code> - Shopify's AJAX endpoint for adding items</li>
            <li>The drawer is usually a <code>&lt;div&gt;</code> that slides in via CSS transform</li>
            <li>Most premium themes (Dawn, Impulse, Prestige) already have this built in</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎨 Cart Drawer CSS Pattern</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;">/* Drawer hidden by default */</span><br>
        .cart-drawer {<br>
        &nbsp;&nbsp;position: fixed;<br>
        &nbsp;&nbsp;right: -400px; <span style="color: #6a9955;">/* Hidden off-screen */</span><br>
        &nbsp;&nbsp;width: 400px;<br>
        &nbsp;&nbsp;height: 100vh;<br>
        &nbsp;&nbsp;transition: right 0.3s ease;<br>
        &nbsp;&nbsp;z-index: 1000;<br>
        }<br><br>
        
        <span style="color: #6a9955;">/* Drawer visible */</span><br>
        .cart-drawer.is-open {<br>
        &nbsp;&nbsp;right: 0;<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>🔧 Common Drawer Customizations</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customization</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How To</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add upsell products</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fetch related products via AJAX and display in drawer</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Show free shipping bar</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Calculate cart total vs threshold, show progress</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add gift message field</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use cart attributes to store custom notes</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quantity +/- buttons</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Update via /cart/change.js endpoint</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: PDP Audit</h3>
    <p>Open any Shopify store PDP and check:</p>
    <ul>
        <li>☐ Can you see Add to Cart without scrolling on mobile?</li>
        <li>☐ Are images swipeable?</li>
        <li>☐ Is there a sticky add-to-cart?</li>
        <li>☐ Are there trust badges below the button?</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: Cart Drawer Implementation</h3>
    <p>Using Antigravity AI or your IDE:</p>
    <ol>
        <li>☐ Identify the Add to Cart form in your theme's product template</li>
        <li>☐ Find the cart drawer component (usually cart-drawer.liquid or similar)</li>
        <li>☐ Trace the JavaScript that handles form submission</li>
        <li>☐ Add a console.log to verify the AJAX flow</li>
        <li>☐ Try adding a custom upsell section to the drawer</li>
    </ol>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: SPEED OPTIMIZATION - Every Second Costs Money</h2>

<div class="content-section">
    <h3>⚡ Core Web Vitals Explained</h3>
    <p>Google ranks sites based on these performance metrics. Know them by heart:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Target</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Measures</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How to Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 2.5s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Largest Content Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Optimize hero images</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 0.1</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cumulative Layout Shift</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Set width/height on images</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>TBT</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 200ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Total Blocking Time</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defer non-critical JS</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FCP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">< 1.8s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Content Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reduce server time</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization Checklist</h3>
    <div class="highlight-box">
        <ul>
            <li>✅ Use <code>image_url</code> filter (not img_url - deprecated)</li>
            <li>✅ Specify width: <code>{{ image | image_url: width: 600 }}</code></li>
            <li>✅ Use WebP format (Shopify auto-converts)</li>
            <li>✅ Add <code>loading="lazy"</code> for below-fold images</li>
            <li>✅ Set explicit width/height to prevent CLS</li>
            <li>✅ Use srcset for responsive images</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📜 JavaScript Optimization</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Bad Practice</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Good Practice</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Loading all scripts in head</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use <code>defer</code> or put before </body></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10+ apps installed</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Keep to 5-8 essential apps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inline CSS/JS everywhere</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Consolidate into external files</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 Speed Testing Tools</h3>
    <ul>
        <li><strong>PageSpeed Insights:</strong> pagespeed.web.dev</li>
        <li><strong>GTmetrix:</strong> gtmetrix.com</li>
        <li><strong>WebPageTest:</strong> webpagetest.org</li>
        <li><strong>Shopify Theme Inspector:</strong> Chrome extension</li>
    </ul>
    
    <div class="warning-box">
        <strong>Target Scores:</strong><br>
        Mobile: 85+ | Desktop: 90+
    </div>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: APPS & INTEGRATIONS - The Healthy App Stack</h2>

<div class="content-section">
    <h3>🔌 The 5-8 App Rule</h3>
    <p>More apps = Slower site + JS Conflicts + Higher costs. Be ruthless about app selection.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recommended App</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reviews</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Judge.me / Loox</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Social proof</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Marketing automation</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Manager</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta tags, sitemaps</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upsells</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bold / ReConvert</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AOV increase</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🗑️ The Clean Uninstall Protocol</h3>
    <div class="warning-box">
        <strong>⚠️ CRITICAL:</strong> Simply deleting an app doesn't remove its code!
        <ol>
            <li>Read the app's uninstall documentation</li>
            <li>Delete the app from Shopify Admin</li>
            <li>Search theme code for leftover snippets</li>
            <li>Check for liquid files with app name</li>
            <li>Remove any theme settings referencing the app</li>
            <li>Test site speed before and after</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ App Conflict Diagnosis</h3>
    <p>When two apps break each other:</p>
    <ol>
        <li>Open Console (F12) - look for errors</li>
        <li>Disable apps one by one</li>
        <li>Check for jQuery version conflicts</li>
        <li>Contact both app support teams</li>
    </ol>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: CHECKOUT & POLICIES - Trust & Legal Compliance</h2>

<div class="content-section">
    <h3>📜 Required Legal Pages</h3>
    <p>Missing these = Ad Account Bans + Legal Risk + Lost Customer Trust</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Policy Page</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Covers</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why Required</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Privacy Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Data collection, cookies</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">GDPR, CCPA law</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Terms of Service</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rules of using site</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Legal protection</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Delivery times, costs</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer expectations</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Refund Policy</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Returns process</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FB/Google Ads requirement</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contact Page</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email, phone, address</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust + Ad approval</td></tr>
    </table>
    
    <div class="warning-box">
        <strong>Location:</strong> Settings > Policies in Shopify Admin. These auto-link in checkout footer.
    </div>
</div>

<div class="content-section">
    <h3>💳 Payment Gateway Setup</h3>
    <ul>
        <li>✅ Enable Shopify Payments (lowest fees)</li>
        <li>✅ Add PayPal as backup</li>
        <li>✅ Enable Apple Pay / Google Pay</li>
        <li>✅ Test checkout in test mode before going live</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: QA & TESTING - The 60-Point Quality Gate</h2>

<div class="content-section">
    <h3>✅ Pre-Launch Checklist</h3>
    <p>Before shipping ANY work, verify:</p>
    
    <div class="highlight-box">
        <strong>🖥️ Desktop Testing:</strong>
        <ul>
            <li>☐ Chrome - Latest version</li>
            <li>☐ Safari - Check on Mac</li>
            <li>☐ Firefox - Check forms</li>
            <li>☐ Edge - Windows users</li>
        </ul>
    </div>
    
    <div class="highlight-box">
        <strong>📱 Mobile Testing:</strong>
        <ul>
            <li>☐ Real iPhone Safari (not Chrome DevTools)</li>
            <li>☐ Real Android Chrome</li>
            <li>☐ Test with slow 3G simulation</li>
            <li>☐ Check touch targets (44x44px min)</li>
        </ul>
    </div>
    
    <div class="highlight-box">
        <strong>🛒 Functional Testing:</strong>
        <ul>
            <li>☐ Mobile menu opens/closes</li>
            <li>☐ Cart drawer add/remove items</li>
            <li>☐ Search returns results</li>
            <li>☐ All forms submit correctly</li>
            <li>☐ Complete a test checkout</li>
            <li>☐ Check email notifications</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🐛 Console Error Standard</h3>
    <div class="warning-box">
        <strong>Digital Heroes Standard: ZERO Console Errors</strong><br>
        Open DevTools (F12) > Console tab. If you see ANY red errors, do not ship.
    </div>
</div>

<div class="content-section">
    <h3>🔧 BrowserStack / Real Device Testing</h3>
    <p>Chrome DevTools is NOT enough. You need:</p>
    <ul>
        <li>Real iPhone (Safari has unique bugs)</li>
        <li>Real Android device</li>
        <li>BrowserStack for devices you don't own</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: TROUBLESHOOTING - The Debugging Master</h2>

<div class="content-section">
    <h3>🐛 The 7-Step Debug Decision Tree</h3>
    <ol>
        <li><strong>Theme or App issue?</strong> → Test on fresh Dawn theme</li>
        <li><strong>Cache issue?</strong> → Test in Incognito window</li>
        <li><strong>Console Error?</strong> → Open DevTools (F12), read the message</li>
        <li><strong>Specific product/page?</strong> → It's probably data issue</li>
        <li><strong>Recent code change?</strong> → Check theme version history</li>
        <li><strong>Shopify down?</strong> → Check status.shopify.com</li>
        <li><strong>Ask for help</strong> → ChatGPT, Shopify Community, PM</li>
    </ol>
</div>

<div class="content-section">
    <h3>🔧 Essential Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme Inspector Chrome Extension</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">See which file renders what</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DevTools Elements Tab</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inspect HTML/CSS live</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DevTools Console</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">JavaScript errors</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">DevTools Network Tab</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">API calls, load times</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚨 Common Error Messages</h3>
    <div class="warning-box">
        <code>Uncaught TypeError: Cannot read property 'X' of null</code><br>
        <strong>Meaning:</strong> Trying to access something that doesn't exist. Check if element exists before accessing.
    </div>
    <br>
    <div class="warning-box">
        <code>Liquid error: Array 'product.images' is not paginateable</code><br>
        <strong>Meaning:</strong> Can't use paginate with this array. Use for loop instead.
    </div>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: CRISIS MANAGEMENT - Handling Dev Emergencies</h2>

<div class="content-section">
    <h3>🔥 Scenario 1: Site Down</h3>
    <div class="warning-box">
        <strong>Protocol:</strong>
        <ol>
            <li>DON'T PANIC</li>
            <li>Check <a href="https://status.shopify.com" target="_blank">status.shopify.com</a></li>
            <li>If Shopify is green → It's your code</li>
            <li>Rollback to previous theme version immediately</li>
            <li>Inform PM within 5 minutes</li>
            <li>Document what happened</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🔥 Scenario 2: Checkout Broken</h3>
    <div class="warning-box">
        <strong>This is a $$$$ emergency!</strong>
        <ol>
            <li>Disable any recent apps</li>
            <li>Remove any checkout customizations</li>
            <li>Test in Incognito</li>
            <li>If still broken, contact Shopify Support IMMEDIATELY</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>🔥 Scenario 3: Angry Client</h3>
    <ul>
        <li>✅ Acknowledge the issue immediately</li>
        <li>✅ Don't make excuses</li>
        <li>✅ Give a realistic ETA for fix</li>
        <li>✅ Over-communicate updates</li>
        <li>✅ Loop in PM if client is escalating</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔥 Scenario 4: Data Loss</h3>
    <div class="highlight-box">
        <strong>Recovery Options:</strong>
        <ul>
            <li>Check for CSV exports in Admin</li>
            <li>Use Rewind or other backup apps</li>
            <li>Contact Shopify Support (they have backups)</li>
            <li><strong>Prevention:</strong> Always export before major changes</li>
        </ul>
    </div>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: AI-POWERED DEVELOPMENT - Using AI Copilots Effectively</h2>

<div class="content-section">
    <h3>🤖 AI Tools for Shopify Development</h3>
    <ul>
        <li><strong>ChatGPT / Claude:</strong> Liquid code, debugging, explanations</li>
        <li><strong>GitHub Copilot:</strong> Real-time code completion</li>
        <li><strong>Cursor AI:</strong> IDE with AI built-in</li>
    </ul>
</div>

<div class="content-section">
    <h3>📝 Effective AI Prompts for Liquid</h3>
    <div class="highlight-box">
        <strong>Example 1: Related Products</strong><br>
        <code>"Write a Liquid loop for related products from the same collection. Exclude current product. Limit 4. Handle empty state. Use OS 2.0 image_url filter."</code>
    </div>
    <br>
    <div class="highlight-box">
        <strong>Example 2: Sale Badge</strong><br>
        <code>"Create a Liquid snippet that shows a 'SALE' badge when compare_at_price is higher than price. Calculate and show the percentage off."</code>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ AI Code Review Checklist</h3>
    <div class="warning-box">
        <strong>NEVER trust AI code blindly. Always check:</strong>
        <ul>
            <li>☐ Uses <code>render</code> not <code>include</code> (deprecated)</li>
            <li>☐ Uses <code>image_url</code> not <code>img_url</code> (deprecated)</li>
            <li>☐ Money values use <code>| money</code> filter</li>
            <li>☐ Has proper empty state handling</li>
            <li>☐ No hardcoded currency symbols</li>
            <li>☐ Works on mobile</li>
        </ul>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(139, 92, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>🚀 Antigravity AI: Pull Theme & Edit via Prompts</h3>
    <p><strong>Antigravity</strong> is Google DeepMind's agentic AI coding assistant. It can pull a Shopify theme from Git/Shopify CLI and make edits based on natural language prompts.</p>
    
    <div class="highlight-box">
        <strong>The Workflow:</strong>
        <ol>
            <li><strong>Pull Theme:</strong> Clone your theme locally or use Shopify CLI</li>
            <li><strong>Set Workspace:</strong> Point Antigravity to the theme folder</li>
            <li><strong>Prompt for Changes:</strong> Describe what you want in natural language</li>
            <li><strong>AI Edits Files:</strong> Antigravity modifies Liquid/CSS/JS files</li>
            <li><strong>Push Changes:</strong> Commit and push to your theme</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>💻 Step 1: Pull Theme Locally</h3>
    <p>Use Shopify CLI to download your theme:</p>
    
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;"># Install Shopify CLI (if not installed)</span><br>
        npm install -g @shopify/cli<br><br>
        
        <span style="color: #6a9955;"># Login to your store</span><br>
        shopify auth login --store your-store.myshopify.com<br><br>
        
        <span style="color: #6a9955;"># Pull the live theme</span><br>
        shopify theme pull --theme-id 123456789<br><br>
        
        <span style="color: #6a9955;"># Or pull to a specific folder</span><br>
        shopify theme pull --path ./my-theme
    </div>
</div>

<div class="content-section">
    <h3>💬 Step 2: Prompt Antigravity for Changes</h3>
    <p>Once the theme is in your workspace, use natural language prompts:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Prompt Example</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What Antigravity Does</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Make the Add to Cart button open a drawer instead of redirecting"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modifies product-form.liquid and adds drawer JS</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a % off badge when product is on sale"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates snippet with compare_at_price logic</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Add a sticky add to cart bar on mobile"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates fixed-position bar with CSS media queries</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Create a related products section using product tags"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Builds section with schema and Liquid loop</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📤 Step 3: Push Changes Back</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;"># Preview changes first (opens preview URL)</span><br>
        shopify theme dev<br><br>
        
        <span style="color: #6a9955;"># Push to development theme</span><br>
        shopify theme push --theme-id DEV_THEME_ID<br><br>
        
        <span style="color: #6a9955;"># Or push to live (be careful!)</span><br>
        shopify theme push --live<br><br>
        
        <span style="color: #6a9955;"># Commit to Git</span><br>
        git add -A && git commit -m "feat: Cart drawer + sale badge" && git push
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ PRACTICAL EXERCISE: AI-Powered Theme Editing</h3>
    <p>Complete this workflow using Antigravity or your preferred AI tool:</p>
    <ol>
        <li>☐ Pull a test theme locally using <code>shopify theme pull</code></li>
        <li>☐ Open the theme folder in your IDE with AI (Cursor, VS Code + Copilot)</li>
        <li>☐ Prompt: "Add a free shipping progress bar to the cart drawer"</li>
        <li>☐ Review the AI's changes - check for deprecated tags</li>
        <li>☐ Test with <code>shopify theme dev</code></li>
        <li>☐ Push to a development theme</li>
    </ol>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ NEVER push AI changes directly to live!</strong> Always test on dev theme first.
    </div>
</div>

<div class="content-section">
    <h3>💡 When AI Saves Time vs. Wastes Time</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Good for</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ Bad for</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Boilerplate code</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complex business logic</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Simple Liquid loops</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme architecture decisions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS tweaks</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Debugging complex issues</td>
        </tr>
    </table>
</div>
`;

const task13Content = `
<h2>📚 TASK 13: CAREER GROWTH & FINAL EXAM - Your Path to Senior Developer</h2>

<div class="content-section">
    <h3>🌱 The Developer Career Path</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Level</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skills Required</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Salary Range</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeframe</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Junior</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS edits, app installs, basic Liquid</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹25-40k/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0-1 year</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mid-Level</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom sections, complex Liquid, speed optimization</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹50-80k/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-3 years</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Senior</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Architecture, headless, mentoring juniors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹1-1.5L/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5 years</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Lead</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Team management, strategy, client calls</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹1.5-2.5L/month</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5+ years</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📚 Continuous Learning Resources</h3>
    <ul>
        <li><strong>Shopify Dev Docs:</strong> shopify.dev (official, always up-to-date)</li>
        <li><strong>Shopify Community:</strong> community.shopify.com</li>
        <li><strong>YouTube:</strong> Code with Chris the Freelancer</li>
        <li><strong>Twitter:</strong> Follow Shopify Partners, theme developers</li>
    </ul>
</div>

<div class="content-section">
    <h3>🏆 Skills to Develop Next</h3>
    <div class="highlight-box">
        <ul>
            <li>Headless Shopify (Hydrogen, Next.js)</li>
            <li>Shopify Functions (custom checkout logic)</li>
            <li>App Development (Remix, Node.js)</li>
            <li>Advanced JavaScript/TypeScript</li>
            <li>GraphQL API mastery</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎓 Final Certification Requirements</h3>
    <ul>
        <li>📝 Complete all 13 training tasks with 100% quiz scores</li>
        <li>🎯 Pass the 25-question Final Exam</li>
        <li>🎥 Submit a 30-min video walkthrough of a live store</li>
        <li>👔 Receive your Digital Heroes Developer Certificate</li>
    </ul>
</div>
`;

// Quiz Questions (expanded to 130+ questions)
const quizQuestions = [
    // Task 1: Mindset (15 questions)
    { question: "A store losing sales due to slow load time is losing _______ monthly?", options: ["Thousands", "Hundreds of thousands annually", "Nothing", "Unknown"], correct: 1 },
    { question: "What is the primary goal of your code?", options: ["To be clever", "To drive revenue", "To follow tutorials", "To impress"], correct: 1 },
    { question: "A bug on production costing $50k - who is responsible?", options: ["Client", "Developer", "Shopify", "No one"], correct: 1 },
    { question: "'Plan Twice, Code Once' prevents what?", options: ["Innovation", "Wasted hours and bugs", "Fun", "Nothing"], correct: 1 },
    { question: "Should you use clients as beta testers?", options: ["Yes", "No - Zero Tolerance for bugs", "Sometimes", "Often"], correct: 1 },
    { question: "What makes a '10x developer' effective?", options: ["Being smarter", "Being systematic", "Working alone", "Coding faster"], correct: 1 },
    { question: "Every 1 second of load time equals what conversion drop?", options: ["1%", "7%", "20%", "50%"], correct: 1 },
    { question: "The Digital Heroes standard for console errors is?", options: ["Some allowed", "Zero errors", "Only warnings", "Ignore them"], correct: 1 },
    { question: "What percentage of traffic is mobile?", options: ["30%", "50%", "70%+", "10%"], correct: 2 },
    { question: "A $10,000/day store with 1 sec delay loses _____ annually?", options: ["$25,000", "$255,500", "$1M", "$500"], correct: 1 },
    { question: "What browser should ALWAYS be tested for e-commerce?", options: ["Internet Explorer", "Safari on iPhone", "Netscape", "Opera Mini"], correct: 1 },
    { question: "The Digital Heroes QA Standard requires testing on:", options: ["Just Chrome", "Chrome and Firefox only", "Chrome, Safari, Firefox, Edge + real mobile", "Only desktop"], correct: 2 },
    { question: "What should you ALWAYS check before marking a task complete?", options: ["Email", "Console for errors", "Social media", "Weather"], correct: 1 },
    { question: "A 'Script Kid' developer does what?", options: ["Writes systematic code", "Copy-pastes from tutorials", "Tests thoroughly", "Documents code"], correct: 1 },
    { question: "What's the difference between a coder and a Digital Heroes Developer?", options: ["Nothing", "DH developers write code that SELLS", "Coders are better", "DH developers work less"], correct: 1 },

    // Task 2: Platform (15 questions)
    { question: "Shopify uses what templating language?", options: ["PHP", "Liquid", "Python", "JavaScript"], correct: 1 },
    { question: "Maximum variants per product?", options: ["50", "100", "200", "Unlimited"], correct: 1 },
    { question: "To output a currency properly, use what filter?", options: ["| currency", "| money", "| dollar", "| price"], correct: 1 },
    { question: "Online Store 2.0 uses what for page templates?", options: ["PHP", "JSON", "XML", "YAML"], correct: 1 },
    { question: "What's the correct hierarchy?", options: ["Variant > Product", "Product > Variant", "Both same level", "Collection > Variant"], correct: 1 },
    { question: "What is a metafield namespace?", options: ["Product name", "Category for metafield like custom.ingredients", "HTML tag", "CSS class"], correct: 1 },
    { question: "Maximum product images allowed?", options: ["50", "100", "250", "Unlimited"], correct: 2 },
    { question: "Where is shop currency accessed?", options: ["settings.currency", "shop.currency", "cart.currency", "checkout.currency"], correct: 1 },
    { question: "What's the limit for products in a for loop?", options: ["50", "100", "1000", "Unlimited"], correct: 2 },
    { question: "Shopify is hosted where?", options: ["Self-hosted", "AWS", "Google Cloud", "Shopify's own infrastructure (SaaS)"], correct: 3 },
    { question: "What does OS 2.0 stand for?", options: ["Operating System 2.0", "Online Store 2.0", "Open Source 2.0", "Old Standard 2.0"], correct: 1 },
    { question: "Can you directly access Shopify's database?", options: ["Yes", "No - API only", "Sometimes", "With permission"], correct: 1 },
    { question: "What is an App Block in OS 2.0?", options: ["Block for apps", "Apps can inject content into sections", "App settings", "App dashboard"], correct: 1 },
    { question: "How do sections work in OS 2.0?", options: ["Only on homepage", "Sections everywhere - any page type", "Only on product pages", "Not supported"], correct: 1 },
    { question: "What's the customer object in Liquid?", options: ["All customers", "Current logged-in customer", "Guest customer", "Admin"], correct: 1 },

    // Task 3: Theme (10 questions)
    { question: "Should you edit the live theme directly?", options: ["Yes", "No - duplicate first", "Only CSS", "If urgent"], correct: 1 },
    { question: "What is Dawn?", options: ["A plugin", "Shopify's OS 2.0 reference theme", "An app", "A framework"], correct: 1 },
    { question: "Minimum touch target size for mobile?", options: ["20px", "44px", "60px", "100px"], correct: 1 },
    { question: "Theme duplicate naming convention?", options: ["Copy 1", "[Dev] Feature - Date", "Backup", "New Theme"], correct: 1 },
    { question: "How many essential homepage sections?", options: ["5", "8", "12", "20"], correct: 2 },
    { question: "What section builds trust with 'As seen in...'?", options: ["Hero", "Logo Bar", "Products", "Footer"], correct: 1 },
    { question: "First section on a homepage should be?", options: ["Footer", "Hero Banner", "FAQ", "Newsletter"], correct: 1 },
    { question: "Mobile-first development means?", options: ["Design desktop first", "Design mobile first, then desktop", "Only mobile", "Ignore mobile"], correct: 1 },
    { question: "What's a sticky Add to Cart?", options: ["Glue on button", "Button stays visible when scrolling", "Slow button", "Hidden button"], correct: 1 },
    { question: "Prestige and Impulse are?", options: ["Free themes", "Premium themes we use", "Old themes", "App names"], correct: 1 },

    // Task 4: Liquid (20 questions)
    { question: "Which outputs data?", options: ["{% tag %}", "{{ object }}", "[[ object ]]", "( object )"], correct: 1 },
    { question: "Correct loop syntax?", options: ["foreach", "{% for x in y %}", "loop x", "for x in y"], correct: 1 },
    { question: "Check product availability with?", options: ["{% if product.available %}", "{{ product.stock }}", "{% check stock %}", "product.quantity > 0"], correct: 0 },
    { question: "What is a metafield?", options: ["Standard field", "Custom data on resources", "An app", "Database table"], correct: 1 },
    { question: "Deprecated tag to avoid?", options: ["render", "include", "assign", "capture"], correct: 1 },
    { question: "What filter makes 'My Product' into 'my-product'?", options: ["| lowercase", "| handleize", "| slugify", "| url"], correct: 1 },
    { question: "Access first item in for loop with?", options: ["forloop.first", "forloop.index == 0", "for.start", "loop.begin"], correct: 0 },
    { question: "What's forloop.index?", options: ["0-based counter", "1-based counter", "Array length", "Loop name"], correct: 1 },
    { question: "Combine conditions with?", options: ["and / or", "&& / ||", "plus / minus", "combine"], correct: 0 },
    { question: "Filter to truncate text?", options: ["| shorten", "| truncate: 100", "| cut", "| limit"], correct: 1 },
    { question: "Remove HTML from string?", options: ["| no_html", "| strip_html", "| clean", "| text_only"], correct: 1 },
    { question: "Provide default value with?", options: ["| fallback", "| default: 'N/A'", "| or", "| else"], correct: 1 },
    { question: "What replaces img_url in OS 2.0?", options: ["image_tag", "image_url", "picture_url", "media_url"], correct: 1 },
    { question: "Schema goes inside what tags?", options: ["{% script %}", "{% schema %}", "{% config %}", "{% settings %}"], correct: 1 },
    { question: "What creates a Theme Customizer option?", options: ["CSS", "Section schema settings", "JavaScript", "HTML"], correct: 1 },
    { question: "Access section setting with?", options: ["settings.x", "section.settings.x", "block.x", "config.x"], correct: 1 },
    { question: "What's a preset in schema?", options: ["Default values for section", "CSS preset", "Theme color", "Font preset"], correct: 0 },
    { question: "Contains operator checks?", options: ["If number is greater", "If string/array contains value", "If file exists", "If page loaded"], correct: 1 },
    { question: "Correct date filter syntax?", options: ["| format_date", "| date: '%B %d, %Y'", "| toDate", "| dateFormat"], correct: 1 },
    { question: "What does capture do?", options: ["Takes screenshot", "Stores output in variable", "Captures form", "Records video"], correct: 1 },

    // Task 5: PDP (10 questions)
    { question: "Above the fold must include?", options: ["Footer", "Add to Cart button", "Blog link", "Map"], correct: 1 },
    { question: "Where to store product specs?", options: ["Description only", "Metafields", "Title", "Tags"], correct: 1 },
    { question: "Image gallery should be?", options: ["Static", "Swipeable on mobile", "Hidden", "Text only"], correct: 1 },
    { question: "First product image should be?", options: ["Lifestyle shot", "Product on white/clean background", "Text only", "Video thumbnail"], correct: 1 },
    { question: "Why use sticky Add to Cart on mobile?", options: ["Looks cool", "Keeps CTA visible while scrolling", "Saves space", "Required by Shopify"], correct: 1 },
    { question: "Review stars provide what?", options: ["Decoration", "Social proof (trust)", "Speed boost", "SEO only"], correct: 1 },
    { question: "Image width filter for thumbnails?", options: ["width: 800", "width: 100", "width: 1200", "width: 50"], correct: 1 },
    { question: "loading='lazy' should be used on?", options: ["All images", "Below-fold images", "Hero images", "No images"], correct: 1 },
    { question: "Variant selector lets user choose?", options: ["Shipping method", "Size/color", "Payment method", "Pickup location"], correct: 1 },
    { question: "Trust badges should be placed?", options: ["In footer only", "Below Add to Cart button", "On contact page", "Hidden"], correct: 1 },

    // Task 6: Speed (15 questions)
    { question: "Target mobile PageSpeed score?", options: ["50", "85+", "10", "100"], correct: 1 },
    { question: "LCP target?", options: ["< 5s", "< 2.5s", "< 10s", "< 1s"], correct: 1 },
    { question: "What hurts speed most?", options: ["Text", "Too many apps/scripts", "Colors", "Fonts"], correct: 1 },
    { question: "Off-screen images should load how?", options: ["Eager", "Lazy", "Never", "Immediately"], correct: 1 },
    { question: "CLS target?", options: ["< 1", "< 0.1", "< 5", "< 0.5"], correct: 1 },
    { question: "What is LCP?", options: ["Largest Content Paint", "Last Content Placed", "Loading Complete Point", "Liquid Code Parser"], correct: 0 },
    { question: "TBT stands for?", options: ["Total Block Time", "Total Blocking Time", "Theme Build Time", "Test Browser Time"], correct: 1 },
    { question: "TBT target?", options: ["< 500ms", "< 200ms", "< 1s", "< 50ms"], correct: 1 },
    { question: "What causes CLS (layout shift)?", options: ["Slow server", "Images without width/height", "Too much text", "Dark colors"], correct: 1 },
    { question: "Defer attribute does what?", options: ["Deletes script", "Loads script after HTML", "Speeds up script", "Disables script"], correct: 1 },
    { question: "WebP format is used for?", options: ["Audio", "Optimized images", "Documents", "Videos"], correct: 1 },
    { question: "Best tool to test speed?", options: ["Google Docs", "PageSpeed Insights", "Excel", "Photoshop"], correct: 1 },
    { question: "Target desktop PageSpeed score?", options: ["70", "90+", "50", "100"], correct: 1 },
    { question: "Scripts should go where?", options: ["In head tag", "Before </body> or use defer", "In footer", "In header section"], correct: 1 },
    { question: "How to fix slow LCP?", options: ["Add more scripts", "Optimize hero images", "Use more apps", "Increase file size"], correct: 1 },

    // Task 7: Apps (10 questions)
    { question: "Max recommended apps?", options: ["20", "5-8", "0", "50"], correct: 1 },
    { question: "Deleting app removes code from theme?", options: ["Yes", "No - manual cleanup often needed", "Usually", "Always"], correct: 1 },
    { question: "App conflicts cause?", options: ["Better speed", "JS errors", "More sales", "Nothing"], correct: 1 },
    { question: "First step to diagnose app conflict?", options: ["Email Shopify", "Open Console (F12)", "Delete all apps", "Ignore it"], correct: 1 },
    { question: "Klaviyo is used for?", options: ["Reviews", "Email marketing automation", "Speed", "SEO"], correct: 1 },
    { question: "Judge.me helps with?", options: ["Reviews/social proof", "Speed", "Email", "Shipping"], correct: 0 },
    { question: "After uninstalling app, check theme for?", options: ["New features", "Leftover snippets/code", "Speed increase", "Nothing"], correct: 1 },
    { question: "More apps generally means?", options: ["Faster site", "Slower site + conflicts", "Better SEO", "More sales"], correct: 1 },
    { question: "jQuery version conflicts cause?", options: ["Better compatibility", "JS errors between apps", "Faster loading", "Nothing"], correct: 1 },
    { question: "Before installing app, consider?", options: ["Only price", "Speed impact + alternatives", "Just install it", "Color scheme"], correct: 1 },

    // Task 8: Checkout (10 questions)
    { question: "Which policy page is NOT required?", options: ["Privacy", "Returns", "Blog Guidelines", "Shipping"], correct: 2 },
    { question: "Missing policies can cause?", options: ["Nothing", "Ad account bans", "More sales", "Faster site"], correct: 1 },
    { question: "Where are policies configured?", options: ["Theme editor", "Settings > Policies", "Apps", "Code editor"], correct: 1 },
    { question: "GDPR requires what page?", options: ["About Us", "Privacy Policy", "Blog", "FAQ"], correct: 1 },
    { question: "Shopify Payments offers?", options: ["Highest fees", "Lowest transaction fees", "No payment support", "Only PayPal"], correct: 1 },
    { question: "Before going live, test checkout in?", options: ["Live mode", "Test mode", "Don't test", "Production"], correct: 1 },
    { question: "Contact page builds what?", options: ["Speed", "Trust + Ad approval", "SEO only", "Nothing"], correct: 1 },
    { question: "Refund Policy is required for?", options: ["Nothing", "FB/Google Ads approval", "Theme installation", "App installation"], correct: 1 },
    { question: "Apple Pay / Google Pay should be?", options: ["Disabled", "Enabled for faster checkout", "Only on desktop", "Only on mobile"], correct: 1 },
    { question: "Policies auto-link in?", options: ["Header", "Checkout footer", "Product pages", "Cart"], correct: 1 },

    // Task 9: QA (12 questions)
    { question: "Where to test iOS issues?", options: ["Windows Chrome", "Real iPhone/BrowserStack", "DevTools only", "Don't test"], correct: 1 },
    { question: "Console red errors mean?", options: ["Ignore", "Fix them - Zero Tolerance", "It's fine", "Normal"], correct: 1 },
    { question: "Test checkout with?", options: ["Real payment", "Test mode order", "Skip it", "Trust it works"], correct: 1 },
    { question: "Chrome DevTools is enough for mobile testing?", options: ["Yes", "No - need real devices", "Sometimes", "Always"], correct: 1 },
    { question: "Minimum touch target size?", options: ["20px", "44x44px", "10px", "100px"], correct: 1 },
    { question: "Which browsers must be tested?", options: ["Just Chrome", "Chrome, Safari, Firefox, Edge", "Only Safari", "None"], correct: 1 },
    { question: "BrowserStack is used for?", options: ["Speed testing", "Testing on devices you don't own", "Email", "SEO"], correct: 1 },
    { question: "Cart drawer should be tested for?", options: ["Add/remove items", "Just display", "Colors only", "Nothing"], correct: 0 },
    { question: "Slow 3G simulation tests?", options: ["Desktop speed", "Site on slow connections", "Server speed", "Nothing"], correct: 1 },
    { question: "What should work on mobile menu?", options: ["Nothing", "Open and close properly", "Only colors", "Just logo"], correct: 1 },
    { question: "Forms should be tested for?", options: ["Colors", "Correct submission", "Font size", "Nothing"], correct: 1 },
    { question: "Email notifications should be?", options: ["Ignored", "Tested to ensure they work", "Deleted", "Hidden"], correct: 1 },

    // Task 10: Debug (10 questions)
    { question: "First debug step?", options: ["Panic", "Test on fresh Dawn", "Email Shopify", "Delete code"], correct: 1 },
    { question: "Cache test method?", options: ["Reload", "Incognito window", "Wait", "Reboot"], correct: 1 },
    { question: "Theme Inspector Chrome Extension shows?", options: ["Colors", "Which file renders what", "Speed", "SEO"], correct: 1 },
    { question: "Network tab in DevTools shows?", options: ["Colors", "API calls and load times", "Fonts", "Nothing"], correct: 1 },
    { question: "status.shopify.com shows?", options: ["Your store status", "Shopify platform status", "Theme status", "App status"], correct: 1 },
    { question: "'Cannot read property of null' means?", options: ["Code works", "Trying to access something that doesn't exist", "Server error", "Network issue"], correct: 1 },
    { question: "If bug only on one product, it's likely?", options: ["Theme issue", "Data issue", "Server issue", "Shopify bug"], correct: 1 },
    { question: "Theme version history helps find?", options: ["Best design", "Recent changes that caused bugs", "Speed issues", "SEO problems"], correct: 1 },
    { question: "Elements tab in DevTools inspects?", options: ["Network calls", "HTML/CSS live", "Server logs", "Database"], correct: 1 },
    { question: "After all debugging fails, ask?", options: ["No one", "ChatGPT, Community, PM", "Random person", "Delete everything"], correct: 1 },

    // Task 11: Crisis (8 questions)
    { question: "Site down first action?", options: ["Panic", "Check status.shopify.com", "Delete theme", "Email client"], correct: 1 },
    { question: "Data loss recovery?", options: ["Cry", "Check backups/CSV exports", "Start over", "Blame client"], correct: 1 },
    { question: "Checkout broken - priority level?", options: ["Low", "$$$ Emergency - highest priority", "Medium", "Ignore"], correct: 1 },
    { question: "Angry client - first response?", options: ["Make excuses", "Acknowledge the issue immediately", "Ignore", "Blame Shopify"], correct: 1 },
    { question: "Inform PM of site down within?", options: ["1 hour", "5 minutes", "Next day", "Never"], correct: 1 },
    { question: "If Shopify status is green but site is down?", options: ["Wait for Shopify", "It's your code - rollback theme", "Email Shopify", "Do nothing"], correct: 1 },
    { question: "Rewind is used for?", options: ["Speed", "Store backups", "Email", "SEO"], correct: 1 },
    { question: "Before major changes, always?", options: ["Just do it", "Export data as backup", "Skip backup", "Ask client"], correct: 1 },

    // Task 12: AI (10 questions)
    { question: "Can you trust AI code 100%?", options: ["Yes", "No - always verify", "Mostly", "Sure"], correct: 1 },
    { question: "AI often uses what deprecated tag?", options: ["render", "include", "capture", "assign"], correct: 1 },
    { question: "ChatGPT is good for?", options: ["Final production code", "Boilerplate and explanations", "Replacing devs", "Nothing"], correct: 1 },
    { question: "GitHub Copilot provides?", options: ["Project management", "Real-time code completion", "Hosting", "Email"], correct: 1 },
    { question: "AI code must be checked for?", options: ["Nothing", "Deprecated tags, proper filters, mobile support", "Just syntax", "Colors"], correct: 1 },
    { question: "AI is bad for?", options: ["Boilerplate", "Complex business logic decisions", "Simple loops", "CSS tweaks"], correct: 1 },
    { question: "AI-generated Liquid should use?", options: ["img_url", "image_url (OS 2.0)", "picture_url", "photo_url"], correct: 1 },
    { question: "AI code should handle?", options: ["Nothing", "Empty states", "Only success", "Just errors"], correct: 1 },
    { question: "Best AI prompt includes?", options: ["Vague request", "Specific requirements + constraints", "Single word", "Nothing"], correct: 1 },
    { question: "Cursor AI is?", options: ["Mouse pointer", "IDE with AI built-in", "Terminal", "Browser"], correct: 1 },

    // Task 13: Career (10 questions)
    { question: "Junior developer salary range?", options: ["₹5-10k", "₹25-40k/month", "₹1-2L/month", "₹5L/month"], correct: 1 },
    { question: "Senior developer skills include?", options: ["Basic CSS only", "Architecture, headless, mentoring", "Just app installs", "Only frontend"], correct: 1 },
    { question: "Time to reach Senior level?", options: ["1 month", "3-5 years", "10 years", "Never"], correct: 1 },
    { question: "Shopify Dev Docs URL?", options: ["shopify.com", "shopify.dev", "docs.shopify", "help.shopify"], correct: 1 },
    { question: "Lead developer does?", options: ["Only code", "Team management + strategy + client calls", "Just CSS", "Nothing"], correct: 1 },
    { question: "To level up, learn?", options: ["Nothing new", "Headless, Hydrogen, GraphQL", "Only Liquid", "Just CSS"], correct: 1 },
    { question: "Hydrogen is for?", options: ["Water", "Headless Shopify (React framework)", "Theme editor", "Apps"], correct: 1 },
    { question: "GraphQL is?", options: ["Graph drawing", "API query language", "Database", "CSS framework"], correct: 1 },
    { question: "Final certification requires?", options: ["Nothing", "100% quiz scores + video walkthrough", "Just reading", "One quiz"], correct: 1 },
    { question: "Continuous learning is?", options: ["Optional", "Essential for career growth", "Waste of time", "Only for juniors"], correct: 1 }
];

// Export all
console.log("Enhanced Developer Training File Generated!");

// =============================================================================
// EXPANDED CONTENT: SHOPIFY DEVELOPER DEEP DIVE
// =============================================================================

// Expanded Task 2 Content - Platform Fundamentals Deep Dive
const task2ContentExpanded = `
<h2>📚 PART 2: PLATFORM FUNDAMENTALS - Shopify Architecture</h2>

<div class="content-section">
    <h3>🏗️ Online Store 2.0 Architecture</h3>
    <p>Shopify's Online Store 2.0 revolutionized theme development. Understanding this architecture is <strong>non-negotiable</strong>.</p>
    
    <div class="highlight-box">
        <strong>Key OS 2.0 Features:</strong>
        <ul>
            <li><strong>JSON Templates:</strong> No more hardcoded templates - sections everywhere</li>
            <li><strong>Section Rendering API:</strong> Dynamic section loading for AJAX</li>
            <li><strong>App Blocks:</strong> Apps integrate directly into theme sections</li>
            <li><strong>Metafields Everywhere:</strong> Custom data on any resource</li>
            <li><strong>Theme Architecture:</strong> Structured file organization</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📁 Theme File Structure</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Folder</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Examples</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/assets</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CSS, JS, images</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">base.css, theme.js</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/config</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme settings</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">settings_schema.json, settings_data.json</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/layout</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page wrappers</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">theme.liquid, password.liquid</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/locales</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Translation strings</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">en.default.json, es.json</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/sections</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reusable modules</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">header.liquid, featured-collection.liquid</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/snippets</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Small reusable bits</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">product-card.liquid, icons.liquid</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/templates</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page blueprints (JSON)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">product.json, collection.json</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🛍️ Product/Variant/Metafield Hierarchy</h3>
    <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; font-family: monospace;">
        <pre style="margin: 0; color: #E2E8F0;">
PRODUCT (Parent)
├── title, description, vendor, product_type
├── images[] (first image = featured)
├── tags[]
├── metafields (custom data)
│
└── VARIANTS[] (Children)
    ├── title, price, compare_at_price
    ├── sku, barcode
    ├── inventory_quantity
    ├── option1, option2, option3
    └── metafields (variant-specific data)
        </pre>
    </div>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Critical Limits:</strong>
        <ul>
            <li>Max 100 variants per product</li>
            <li>Max 3 options (Size, Color, Material)</li>
            <li>Max 250 images per product</li>
            <li>Each variant can only have 1 image</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Metafields Mastery</h3>
    <p>Metafields allow you to store custom data on any Shopify resource. This is <strong>essential</strong> for advanced customizations.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Resource</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common Metafields</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use Case</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">specifications, materials, care_instructions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product detail tabs</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variant</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">weight_unit, dimensions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping calculator</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Collection</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">banner_video, collection_story</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom collection pages</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">company_name, vip_tier</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">B2B, loyalty programs</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shop</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">announcement_bar, global_settings</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Store-wide config</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>Liquid Access:</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto;">{{ product.metafields.custom.specifications.value }}
{{ product.metafields.custom.care_instructions | metafield_tag }}</pre>
    </div>
</div>

<div class="content-section">
    <h3>🌍 Multi-Currency & International Setup</h3>
    <p>Shopify Markets allows selling to multiple countries with localized experiences.</p>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">Currency</h4>
            <ul>
                <li>Shopify Payments enables auto-conversion</li>
                <li>Use <code>| money</code> filter (auto-converts)</li>
                <li><strong>Never</strong> hardcode currency symbols</li>
            </ul>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Language</h4>
            <ul>
                <li>Use <code>{{ 'general.button' | t }}</code> for translations</li>
                <li>All text in locale files, never hardcoded</li>
                <li>Test RTL languages (Arabic, Hebrew)</li>
            </ul>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">Markets</h4>
            <ul>
                <li>Configure duties & import taxes</li>
                <li>Set up local payment methods</li>
                <li>Adjust shipping zones per market</li>
            </ul>
        </div>
    </div>
</div>
`;

// Expanded Task 4 Content - Liquid Programming Deep Dive
const task4ContentExpanded = `
<h2>📚 PART 4: LIQUID PROGRAMMING MASTERY</h2>

<div class="content-section">
    <h3>💧 Liquid Fundamentals</h3>
    <p>Liquid is Shopify's templating language. Master it and you master Shopify development.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px;">
            <h4 style="color: #6366F1; margin-top: 0;">{{ Output Tags }}</h4>
            <p>Output data to the page</p>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">{{ product.title }}
{{ product.price | money }}
{{ 'now' | date: "%B %d, %Y" }}</pre>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px;">
            <h4 style="color: #10B981; margin-top: 0;">{% Logic Tags %}</h4>
            <p>Control flow, no output</p>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">{% if product.available %}
  In Stock
{% endif %}

{% for item in cart.items %}
  {{ item.title }}
{% endfor %}</pre>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🔧 Essential Filters</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Filter</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| money</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Format price with currency</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ product.price | money }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| image_url</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Get sized image URL</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ img | image_url: width: 400 }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| t</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Translate string</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ 'products.add_to_cart' | t }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| append</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add to end of string</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ 'file' | append: '.css' }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| where</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Filter array</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ products | where: 'available', true }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| sort</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sort array</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ products | sort: 'price' }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| default</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fallback value</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ product.vendor | default: 'Digital Heroes' }}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| json</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Convert to JSON</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">{{ product | json }}</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Common Patterns</h3>
    
    <div class="highlight-box">
        <strong>Pattern 1: Related Products</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px;">
{% assign related = product.collections.first.products | where: 'available', true %}
{% for item in related limit: 4 %}
  {% unless item.id == product.id %}
    {% render 'product-card', product: item %}
  {% endunless %}
{% endfor %}
        </pre>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Pattern 2: Color Swatches</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px;">
{% for option in product.options_with_values %}
  {% if option.name == 'Color' %}
    {% for value in option.values %}
      <button 
        class="swatch"
        style="background-color: {{ value | handleize }};"
        data-value="{{ value }}"
      >
        {{ value }}
      </button>
    {% endfor %}
  {% endif %}
{% endfor %}
        </pre>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Pattern 3: Cart Drawer Item</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px;">
{% for item in cart.items %}
  <div class="cart-item" data-key="{{ item.key }}">
    <img src="{{ item.image | image_url: width: 100 }}" alt="{{ item.title }}">
    <div class="cart-item__details">
      <h4>{{ item.product.title }}</h4>
      {% if item.variant.title != 'Default Title' %}
        <p>{{ item.variant.title }}</p>
      {% endif %}
      <p>{{ item.line_price | money }}</p>
    </div>
    <input type="number" value="{{ item.quantity }}" min="1">
    <button data-action="remove" data-key="{{ item.key }}">Remove</button>
  </div>
{% endfor %}
        </pre>
    </div>
</div>

<div class="content-section">
    <h3>🧱 Section Schema Deep Dive</h3>
    <p>Sections are the building blocks of OS 2.0 themes. Every section needs a schema.</p>
    
    <pre style="background: rgba(30, 41, 59, 0.8); padding: 20px; border-radius: 12px; overflow-x: auto;">
{% schema %}
{
  "name": "Featured Collection",
  "tag": "section",
  "class": "featured-collection",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Shop Our Best Sellers"
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "products_to_show",
      "min": 2,
      "max": 12,
      "step": 1,
      "default": 4,
      "label": "Products to Show"
    },
    {
      "type": "select",
      "id": "columns",
      "label": "Desktop Columns",
      "options": [
        { "value": "2", "label": "2 columns" },
        { "value": "3", "label": "3 columns" },
        { "value": "4", "label": "4 columns" }
      ],
      "default": "4"
    }
  ],
  "blocks": [
    {
      "type": "product",
      "name": "Product Card",
      "settings": [
        {
          "type": "checkbox",
          "id": "show_vendor",
          "label": "Show Vendor",
          "default": false
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Featured Collection"
    }
  ]
}
{% endschema %}
    </pre>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Common Schema Mistakes:</strong>
        <ul>
            <li>Missing comma between settings - causes entire section to break</li>
            <li>Using 'type' instead of 'id' for referencing - they're different!</li>
            <li>Forgetting 'presets' - section won't appear in theme editor</li>
            <li>Invalid JSON syntax - always validate with JSON linter</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ Deprecated vs Modern Tags</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">❌ DEPRECATED</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ USE INSTEAD</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% include 'snippet' %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{% render 'snippet' %}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Render is faster, isolated scope</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| img_url: '400x'</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>| image_url: width: 400</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New syntax, more options</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.featured_image }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>{{ product.featured_media }}</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Media includes images, video, 3D</td>
        </tr>
    </table>
</div>
`;

// Expanded Task 6 Content - Speed Optimization Deep Dive
const task6ContentExpanded = `
<h2>📚 PART 6: SPEED OPTIMIZATION - Core Web Vitals Mastery</h2>

<div class="content-section">
    <h3>⚡ Why Speed = Money</h3>
    <div class="highlight-box">
        <strong>The Speed/Revenue Connection:</strong>
        <ul>
            <li>Every 1 second delay = <strong>7% conversion drop</strong></li>
            <li>Amazon: 100ms delay = 1% revenue loss</li>
            <li>Google: 3+ second load = 53% mobile users bounce</li>
            <li>Mobile users expect < 3 seconds to load</li>
        </ul>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Digital Heroes Standard:</strong><br>
        <ul>
            <li>Mobile PageSpeed: <strong>85+</strong> (minimum)</li>
            <li>Desktop PageSpeed: <strong>90+</strong> (minimum)</li>
            <li>No project launches under these thresholds</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Core Web Vitals Explained</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Metric</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Name</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Good</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">What It Measures</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Largest Contentful Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2.5s</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">When main content loads</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FID</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Input Delay</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 100ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to first interaction</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cumulative Layout Shift</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 0.1</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Visual stability</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>INP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interaction to Next Paint</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 200ms</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Responsiveness (replaced FID)</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization</h3>
    <p>Images are typically 50-80% of page weight. Optimize them or suffer.</p>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">Use image_url with width</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">{{ image | image_url: width: 400 }}
{{ image | image_url: width: 800, height: 600, crop: 'center' }}</pre>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Always use loading="lazy"</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;"><img 
  src="{{ image | image_url: width: 400 }}"
  loading="lazy"
  width="400"
  height="300"
  alt="{{ image.alt | escape }}"
></pre>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">Use srcset for responsive</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;"><img 
  srcset="{{ image | image_url: width: 400 }} 400w,
          {{ image | image_url: width: 800 }} 800w,
          {{ image | image_url: width: 1200 }} 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
></pre>
        </div>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ Hero Images (LCP Killers):</strong>
        <ul>
            <li>Do NOT lazy load above-the-fold images</li>
            <li>Add <code>loading="eager"</code> and <code>fetchpriority="high"</code></li>
            <li>Use appropriate sizes (mobile: 750w max, desktop: 1500w max)</li>
            <li>Compress before upload (TinyPNG, Squoosh)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📜 JavaScript Optimization</h3>
    
    <div class="highlight-box">
        <strong>Script Loading Strategies:</strong>
        <pre style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 8px; margin-top: 10px;">
&lt;!-- WRONG: Blocks rendering --&gt;
&lt;script src="file.js"&gt;&lt;/script&gt;

&lt;!-- BETTER: Parse while loading --&gt;
&lt;script src="file.js" async&gt;&lt;/script&gt;

&lt;!-- BEST: Execute after DOM ready --&gt;
&lt;script src="file.js" defer&gt;&lt;/script&gt;
        </pre>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Issue</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Impact</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too many apps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Each adds 50-500KB JS</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Limit to 5-8 apps max</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Inline scripts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Block rendering</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Move to external file, defer</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unused code</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wasted bytes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clean uninstall app residue</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">jQuery dependency</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">~90KB overhead</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use vanilla JS when possible</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔧 Speed Optimization Checklist</h3>
    <div class="highlight-box">
        <ul>
            <li>☐ Run PageSpeed Insights (mobile first)</li>
            <li>☐ Compress all images before upload</li>
            <li>☐ Use loading="lazy" for below-fold images</li>
            <li>☐ Use loading="eager" for hero images</li>
            <li>☐ Add width/height attributes to prevent CLS</li>
            <li>☐ Defer non-critical JavaScript</li>
            <li>☐ Audit and remove unused apps</li>
            <li>☐ Clean up leftover app code in theme</li>
            <li>☐ Preload critical fonts</li>
            <li>☐ Use system fonts or limit custom fonts to 2</li>
            <li>☐ Enable browser caching</li>
            <li>☐ Minimize render-blocking CSS</li>
        </ul>
    </div>
</div>
`;

// Expanded Task 7 Content - Apps & Integrations
const task7ContentExpanded = `
<h2>📚 PART 7: APPS & INTEGRATIONS - The Healthy App Stack</h2>

<div class="content-section">
    <h3>🔌 The 5-8 App Rule</h3>
    <div class="warning-box">
        <strong>⚠️ Critical Rule:</strong> Never exceed 5-8 apps on a store. Every additional app adds:
        <ul>
            <li>50-500KB of JavaScript</li>
            <li>Potential conflicts with other apps</li>
            <li>Security vulnerabilities</li>
            <li>Store speed degradation</li>
            <li>Dependency on third-party uptime</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Essential App Categories</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Recommended Apps</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Notes</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reviews</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Judge.me, Loox, Yotpo</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Pick ONE, never multiple</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email Marketing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo, Mailchimp, Omnisend</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo preferred for Shopify</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upsell/Cross-sell</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart Upsell, ReConvert</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Watch for checkout conflicts</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">ShipStation, Easyship</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">International shipping complex</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Analytics</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Triple Whale, Lifetimely</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use for attribution</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Backup</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rewind</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">MANDATORY for every store</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🗑️ Clean Uninstall Protocol</h3>
    <p>Deleting an app from Shopify admin does NOT remove its code from your theme!</p>
    
    <div class="highlight-box">
        <strong>Clean Uninstall Steps:</strong>
        <ol>
            <li>Document what the app does (screenshot settings)</li>
            <li>Uninstall from Apps > App Settings</li>
            <li>Search theme files for app name/vendor</li>
            <li>Check these files for leftover code:
                <ul>
                    <li><code>theme.liquid</code> (scripts, stylesheets)</li>
                    <li><code>snippets/</code> folder</li>
                    <li><code>assets/</code> folder (CSS/JS files)</li>
                    <li><code>config/settings_data.json</code></li>
                </ul>
            </li>
            <li>Remove all references</li>
            <li>Test site functionality</li>
            <li>Run PageSpeed - score should improve</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ App Conflict Resolution</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Symptom</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Likely Cause</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Solution</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cart not updating</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Multiple cart apps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use only one cart app</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">JS console errors</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">jQuery version conflict</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standardize jQuery version</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout broken</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Checkout script conflict</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disable checkout apps one by one</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slow page load</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too many apps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Audit and reduce</td>
        </tr>
    </table>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Debug Process:</strong>
        <ol>
            <li>Test on fresh Dawn theme (isolate theme vs app)</li>
            <li>Disable apps one by one</li>
            <li>Check browser console for specific errors</li>
            <li>Contact app support with specific error messages</li>
        </ol>
    </div>
</div>
`;

// Expanded Task 9 Content - QA & Testing Deep Dive
const task9ContentExpanded = `
<h2>📚 PART 9: QA & TESTING - The 60-Point Quality Gate</h2>

<div class="content-section">
    <h3>🎯 The Digital Heroes QA Standard</h3>
    <div class="warning-box">
        <strong>⚠️ Zero Tolerance Policy:</strong><br>
        No code goes live without passing our 60-point checklist. This is non-negotiable. Every bug on production is a reflection of YOUR professionalism.
    </div>
</div>

<div class="content-section">
    <h3>📱 Device & Browser Testing Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Platform</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Browsers</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">iOS (iPhone)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Safari, Chrome</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🔴 Critical (largest segment)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Android</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chrome, Samsung Internet</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🔴 Critical</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Windows</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Chrome, Edge, Firefox</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🟡 High</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">MacOS</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Safari, Chrome</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🟡 High</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">iPad/Tablet</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Safari, Chrome</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🟢 Medium</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>Testing Tools:</strong>
        <ul>
            <li><strong>BrowserStack/LambdaTest:</strong> Real device testing</li>
            <li><strong>Chrome DevTools:</strong> Device emulation (not perfect)</li>
            <li><strong>Physical Devices:</strong> Best for iOS Safari issues</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>✅ 60-Point QA Checklist</h3>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">HOMEPAGE (10 points)</h4>
            <ul>
                <li>☐ Hero loads under 3 seconds</li>
                <li>☐ All images display correctly</li>
                <li>☐ Navigation works on all devices</li>
                <li>☐ Mobile menu opens/closes properly</li>
                <li>☐ Newsletter signup works</li>
                <li>☐ Footer links are correct</li>
                <li>☐ Trust badges display</li>
                <li>☐ Announcement bar (if any) is dismissible</li>
                <li>☐ No horizontal scroll on mobile</li>
                <li>☐ Page scroll is smooth</li>
            </ul>
        </div>
        
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">COLLECTION PAGES (10 points)</h4>
            <ul>
                <li>☐ Products display correctly</li>
                <li>☐ Filters work (price, size, color)</li>
                <li>☐ Sort functionality works</li>
                <li>☐ Pagination/infinite scroll works</li>
                <li>☐ Quick view (if applicable)</li>
                <li>☐ Product cards have hover states</li>
                <li>☐ Sale prices show correctly</li>
                <li>☐ Sold out badges display</li>
                <li>☐ Collection image/description shows</li>
                <li>☐ Mobile grid looks good</li>
            </ul>
        </div>
        
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">PRODUCT PAGES (15 points)</h4>
            <ul>
                <li>☐ Images zoom/swipe correctly</li>
                <li>☐ Variant selector works</li>
                <li>☐ Price updates on variant change</li>
                <li>☐ Image updates on variant change</li>
                <li>☐ Add to Cart button works</li>
                <li>☐ Buy Now button (if applicable)</li>
                <li>☐ Quantity selector works</li>
                <li>☐ Description/tabs content loads</li>
                <li>☐ Reviews section works</li>
                <li>☐ Related products show</li>
                <li>☐ Trust elements visible</li>
                <li>☐ Mobile CTAs sticky (if designed)</li>
                <li>☐ Metafields display correctly</li>
                <li>☐ Size chart opens (if applicable)</li>
                <li>☐ Sold out variants are disabled</li>
            </ul>
        </div>
        
        <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #EF4444;">
            <h4 style="color: #EF4444; margin-top: 0;">CART & CHECKOUT (15 points)</h4>
            <ul>
                <li>☐ Add to Cart shows feedback</li>
                <li>☐ Cart drawer/page opens correctly</li>
                <li>☐ Quantity can be changed</li>
                <li>☐ Items can be removed</li>
                <li>☐ Subtotal updates correctly</li>
                <li>☐ Discount codes work</li>
                <li>☐ Shipping calculator (if present)</li>
                <li>☐ Checkout button works</li>
                <li>☐ Checkout loads properly</li>
                <li>☐ All payment methods work</li>
                <li>☐ Express checkout buttons display</li>
                <li>☐ Order confirmation page works</li>
                <li>☐ Test order goes through</li>
                <li>☐ Order confirmation email received</li>
                <li>☐ Order appears in Shopify Admin</li>
            </ul>
        </div>
        
        <div style="background: rgba(139, 92, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #8B5CF6;">
            <h4 style="color: #8B5CF6; margin-top: 0;">TECHNICAL (10 points)</h4>
            <ul>
                <li>☐ No console errors</li>
                <li>☐ No broken images (404s)</li>
                <li>☐ No broken links</li>
                <li>☐ PageSpeed Mobile 85+</li>
                <li>☐ PageSpeed Desktop 90+</li>
                <li>☐ SSL certificate valid</li>
                <li>☐ Favicon displays</li>
                <li>☐ Meta titles/descriptions set</li>
                <li>☐ Schema markup valid</li>
                <li>☐ Robots.txt correct</li>
            </ul>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🐞 Console Error Interpretation</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Error</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meaning</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>Uncaught TypeError</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">JS accessing undefined</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add null checks</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>404 Not Found</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Missing file/image</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Upload or fix path</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>CORS blocked</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cross-origin request</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use proxy or server-side</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>Liquid error</code></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad Liquid syntax</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check Liquid code</td>
        </tr>
    </table>
</div>
`;

// Expanded Task 11 Content - Crisis Management Deep Dive
const task11ContentExpanded = `
<h2>📚 PART 11: CRISIS MANAGEMENT - Handling Dev Emergencies</h2>

<div class="content-section">
    <h3>🔥 Crisis Response Protocol</h3>
    <div class="warning-box">
        <strong>⚠️ First Rule of Crisis:</strong><br>
        <strong>DON'T PANIC.</strong> Every minute you spend panicking is money the client is losing. Stay calm, be methodical, communicate clearly.
    </div>
</div>

<div class="content-section">
    <h3>🚨 Scenario 1: Site Completely Down</h3>
    <div class="highlight-box">
        <strong>Immediate Actions (0-5 minutes):</strong>
        <ol>
            <li><strong>Run diagnostics:</strong>
                <ul>
                    <li>Check status.shopify.com - Is Shopify down?</li>
                    <li>Test in incognito - Is it cache?</li>
                    <li>Try different network - Is it CDN?</li>
                </ul>
            </li>
            <li><strong>If theme issue:</strong>
                <ul>
                    <li>Go to Online Store > Themes</li>
                    <li>Publish previous backup theme immediately</li>
                    <li>This restores site in < 30 seconds</li>
                </ul>
            </li>
            <li><strong>Communicate to PM:</strong>
                <ul>
                    <li>"Site issue detected at [time]. Scope: [description]. ETA to fix: [time]"</li>
                    <li>Never say "I don't know when"</li>
                </ul>
            </li>
        </ol>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Root Cause Analysis (after recovery):</strong>
        <ul>
            <li>What changed in the last 24 hours?</li>
            <li>Was an app updated?</li>
            <li>Was theme code edited?</li>
            <li>Document in post-mortem</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🚨 Scenario 2: Checkout Broken</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Symptom</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Likely Cause</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Immediate Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blank checkout page</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Script error</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Disable all checkout apps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment declined always</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gateway issue</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check Payments settings, enable backup</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping not showing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Zone misconfigured</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check shipping zones for gaps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Discount not applying</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Expired/conditions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check discount settings</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚨 Scenario 3: Data Loss</h3>
    <div class="highlight-box">
        <strong>Recovery Options:</strong>
        <ol>
            <li><strong>Rewind App:</strong> Restore to specific point in time (if installed)</li>
            <li><strong>CSV Exports:</strong> Check Settings > Data > Export for recent exports</li>
            <li><strong>Theme Backup:</strong> Download previous theme version from theme library</li>
            <li><strong>Shopify Support:</strong> For severe cases, contact support (they have backups)</li>
        </ol>
    </div>
    
    <div class="warning-box" style="margin-top: 15px;">
        <strong>⚠️ Prevention is Key:</strong>
        <ul>
            <li>ALWAYS install Rewind on every store</li>
            <li>Never delete products/collections without backup</li>
            <li>Test in dev theme, never live</li>
            <li>Export CSVs before bulk operations</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>💬 Crisis Communication Templates</h3>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8);">
        <strong>Template 1: Immediate Alert to PM</strong>
        <pre style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
🚨 ALERT: [Store Name] - [Issue Type]
Time Detected: [HH:MM]
Impact: [Brief description - e.g., "Checkout unusable"]
Current Action: [What you're doing now]
ETA to Resolution: [Time estimate]
Updates: I'll update every 15 minutes until resolved.
        </pre>
    </div>
    
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); margin-top: 15px;">
        <strong>Template 2: Resolution Confirmation</strong>
        <pre style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
✅ RESOLVED: [Store Name] - [Issue Type]
Time Resolved: [HH:MM]
Duration: [X] minutes
Root Cause: [Brief explanation]
Fix Applied: [What was done]
Preventive Action: [What we'll do to prevent recurrence]
        </pre>
    </div>
</div>
`;

// Expanded Task 12 Content - AI-Powered Development
const task12ContentExpanded = `
<h2>📚 PART 12: AI-POWERED DEVELOPMENT</h2>

<div class="content-section">
    <h3>🤖 AI as Your Coding Partner</h3>
    <p>AI tools like ChatGPT and GitHub Copilot can 10x your productivity—if used correctly.</p>
    
    <div class="highlight-box">
        <strong>When to Use AI:</strong>
        <ul>
            <li>✅ Boilerplate code (loops, conditions, basic patterns)</li>
            <li>✅ Explaining complex code</li>
            <li>✅ Generating regex patterns</li>
            <li>✅ Writing documentation</li>
            <li>✅ Debugging suggestions</li>
        </ul>
        
        <strong>When NOT to Use AI:</strong>
        <ul>
            <li>❌ Security-sensitive code without review</li>
            <li>❌ Business logic without understanding</li>
            <li>❌ Copy-pasting without testing</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📝 Effective AI Prompts for Shopify</h3>
    
    <div style="display: grid; gap: 15px; margin: 20px 0;">
        <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #6366F1;">
            <h4 style="color: #6366F1; margin-top: 0;">Prompt 1: Section Schema</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">
"Create a Shopify Liquid section schema for a 
testimonial slider. Include settings for:
- Heading text
- Background color picker  
- Number of testimonials (2-6 range)
- Blocks for individual testimonials with 
  name, role, image, and quote fields.
Use OS 2.0 syntax. Include presets."
            </pre>
        </div>
        
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #10B981;">
            <h4 style="color: #10B981; margin-top: 0;">Prompt 2: JavaScript Pattern</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">
"Write vanilla JavaScript for Shopify cart 
drawer that:
1. Opens on Add to Cart click
2. Fetches cart.js via AJAX
3. Renders cart items 
4. Handles quantity updates
5. Handles remove item
6. Closes on overlay click
7. No jQuery dependency"
            </pre>
        </div>
        
        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #F59E0B;">
            <h4 style="color: #F59E0B; margin-top: 0;">Prompt 3: Debugging Help</h4>
            <pre style="background: rgba(30, 41, 59, 0.8); padding: 10px; border-radius: 8px;">
"Shopify Liquid error on product page:
[Paste exact error message]

This is my code:
[Paste relevant code]

What's wrong and how do I fix it?
Explain the issue clearly."
            </pre>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>⚠️ AI Code Verification Checklist</h3>
    <div class="warning-box">
        <strong>NEVER trust AI code blindly. Always verify:</strong>
        <ul>
            <li>☐ Does it use <code>render</code> not <code>include</code>?</li>
            <li>☐ Does it use <code>image_url</code> not <code>img_url</code>?</li>
            <li>☐ Does it handle null/undefined cases?</li>
            <li>☐ Is the JSON schema valid?</li>
            <li>☐ Does it work on mobile?</li>
            <li>☐ Are there any console errors?</li>
            <li>☐ Does it follow DRY principles?</li>
            <li>☐ Is it secure (no XSS vulnerabilities)?</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🔧 GitHub Copilot Best Practices</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Practice</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Why</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Write clear comments first</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Copilot uses context to generate better code</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Accept suggestion, then modify</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use as starting point, not final answer</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tab through alternatives</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First suggestion isn't always best</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Test every suggestion</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">AI makes confident mistakes</td>
        </tr>
    </table>
</div>
`;

// Additional Quiz Questions for Expanded Content
const additionalQuizQuestions = [
    // Platform Fundamentals (15 more)
    { question: "What file format are OS 2.0 templates stored in?", options: ["Liquid", "JSON", "YAML", "XML"], correct: 1 },
    { question: "Maximum variants per product?", options: ["50", "100", "200", "500"], correct: 1 },
    { question: "Where are translation strings stored?", options: ["/assets", "/locales", "/config", "/templates"], correct: 1 },
    { question: "What folder contains sections?", options: ["/snippets", "/sections", "/templates", "/layout"], correct: 1 },
    { question: "Settings_schema.json is in which folder?", options: ["/assets", "/config", "/layout", "/locales"], correct: 1 },
    { question: "How many options maximum per product?", options: ["2", "3", "4", "5"], correct: 1 },
    { question: "To format price correctly, use which filter?", options: ["| currency", "| money", "| price", "| format"], correct: 1 },
    { question: "Hardcoding currency symbols is:", options: ["Recommended", "Forbidden", "Optional", "Required"], correct: 1 },
    { question: "Which file wraps all pages?", options: ["header.liquid", "theme.liquid", "base.liquid", "index.liquid"], correct: 1 },
    { question: "Metafields are accessed via:", options: ["product.meta", "product.metafields", "product.custom", "product.data"], correct: 1 },

    // Liquid Programming (15 more)
    { question: "{{ }} tags are for:", options: ["Logic", "Output", "Comments", "Loops"], correct: 1 },
    { question: "{% %} tags are for:", options: ["Output", "Logic/Control", "Comments", "Variables"], correct: 1 },
    { question: "Which filter translates strings?", options: ["| translate", "| t", "| lang", "| i18n"], correct: 1 },
    { question: "To get sized image, use:", options: ["img_url", "image_url", "picture_url", "media_url"], correct: 1 },
    { question: "Correct loop syntax is:", options: ["loop x in y", "foreach x in y", "{% for x in y %}", "for(x in y)"], correct: 2 },
    { question: "Schema must be in which section of file?", options: ["Top", "Middle", "Bottom", "Anywhere"], correct: 2 },
    { question: "Missing comma in schema causes:", options: ["Warning", "Entire section breaks", "Nothing", "Slow load"], correct: 1 },
    { question: "Presets in schema enable:", options: ["Speed", "Section in theme editor", "Caching", "Analytics"], correct: 1 },
    { question: "Use 'render' instead of:", options: ["assign", "include", "capture", "section"], correct: 1 },
    { question: "Default filter provides:", options: ["Speed", "Fallback values", "Caching", "Validation"], correct: 1 },

    // Speed Optimization (15 more) 
    { question: "Every 1 second delay equals what conversion drop?", options: ["3%", "5%", "7%", "10%"], correct: 2 },
    { question: "LCP stands for:", options: ["Lazy Content Paint", "Largest Contentful Paint", "Load Complete Point", "Layout Complete Paint"], correct: 1 },
    { question: "CLS measures:", options: ["Speed", "Visual Stability", "Interactivity", "Load time"], correct: 1 },
    { question: "Good LCP is under:", options: ["1s", "2.5s", "5s", "10s"], correct: 1 },
    { question: "Good CLS is under:", options: ["0.1", "0.5", "1.0", "2.0"], correct: 0 },
    { question: "Hero images should use:", options: ["loading=lazy", "loading=eager", "loading=defer", "No loading attr"], correct: 1 },
    { question: "To prevent CLS, images need:", options: ["Alt text", "Title", "Width/Height attributes", "Lazy loading"], correct: 2 },
    { question: "Script defer means:", options: ["Load first", "Execute after DOM", "Block rendering", "Ignore"], correct: 1 },
    { question: "Images are typically what % of page weight?", options: ["10-20%", "30-40%", "50-80%", "90%+"], correct: 2 },
    { question: "WebP provides:", options: ["Better SEO", "Better compression", "Better colors", "Better fonts"], correct: 1 },

    // Apps & Integration (10 more)
    { question: "Maximum recommended apps?", options: ["3-5", "5-8", "10-15", "20+"], correct: 1 },
    { question: "Uninstalling app removes theme code?", options: ["Yes", "No - manual cleanup needed", "Sometimes", "Always"], correct: 1 },
    { question: "Each app adds how much JavaScript?", options: ["1-10KB", "50-500KB", "1-5MB", "Nothing"], correct: 1 },
    { question: "Which backup app is recommended?", options: ["Backup Pro", "Rewind", "Save It", "Theme Guard"], correct: 1 },
    { question: "Too many cart apps cause:", options: ["Speed boost", "Cart not updating", "Better UX", "Nothing"], correct: 1 },
    { question: "jQuery version conflicts cause:", options: ["Speed boost", "JS console errors", "Better UX", "Nothing"], correct: 1 },
    { question: "App residue is found in:", options: ["Only assets", "theme.liquid and snippets", "Only config", "Nowhere"], correct: 1 },
    { question: "After clean uninstall, PageSpeed should:", options: ["Stay same", "Improve", "Decrease", "Crash"], correct: 1 },

    // QA & Testing (10 more)
    { question: "Most critical testing platform?", options: ["Windows Chrome", "iOS Safari", "Firefox", "Opera"], correct: 1 },
    { question: "Digital Heroes QA standard is:", options: ["30 points", "45 points", "60 points", "100 points"], correct: 2 },
    { question: "Zero Tolerance means:", options: ["Some bugs OK", "No bugs on production", "Client decides", "Speed matters more"], correct: 1 },
    { question: "DevTools emulation is:", options: ["Perfect", "Not perfect - use real devices", "Better than real", "Useless"], correct: 1 },
    { question: "Console red errors should be:", options: ["Ignored", "Fixed immediately", "Noted for later", "Celebrated"], correct: 1 },
    { question: "Test orders should use:", options: ["Real payment", "Test mode", "Neither", "Client's card"], correct: 1 },
    { question: "Broken checkout priority is:", options: ["Low", "Medium", "Critical - immediate fix", "Not our problem"], correct: 2 },

    // Crisis Management (10 more)
    { question: "First rule of crisis is:", options: ["Panic", "Don't panic", "Blame someone", "Hide"], correct: 1 },
    { question: "Site down - first check:", options: ["Delete theme", "status.shopify.com", "Reboot computer", "Email client"], correct: 1 },
    { question: "Fastest recovery method:", options: ["Rebuild theme", "Publish backup theme", "Contact Shopify", "Wait"], correct: 1 },
    { question: "Crisis updates should be:", options: ["Never", "Every 15 minutes", "Once a day", "When fixed"], correct: 1 },
    { question: "Post-mortem answers:", options: ["Who to blame", "Root cause & prevention", "How to hide it", "Nothing"], correct: 1 },
    { question: "Rewind app is for:", options: ["Speed", "Backups & recovery", "SEO", "Analytics"], correct: 1 },

    // AI Development (5 more)
    { question: "AI code should be:", options: ["Trusted 100%", "Always verified", "Never used", "Only for CSS"], correct: 1 },
    { question: "Good AI prompt includes:", options: ["Just 'help'", "Specific requirements", "Nothing detailed", "Random words"], correct: 1 },
    { question: "Copilot uses comments for:", options: ["Nothing", "Better context", "Speed", "Storage"], correct: 1 },
    { question: "AI often uses deprecated:", options: ["render", "include", "capture", "assign"], correct: 1 },
    { question: "First suggestion is always:", options: ["Best", "Not always best - check alternatives", "Wrong", "Ignored"], correct: 1 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

// Task 1: Developer Mindset Quiz
const task1Quiz = [
    { q: "What's the difference between a 'coder' and a 'Digital Heroes Developer'?", o: ["Speed of typing", "Coder writes mechanical code; DH Dev writes revenue-driving code", "Salary difference", "No difference"], c: 1 },
    { q: "A broken checkout for 4 hours can cost a major store:", o: ["$100", "$1,000", "$25,000+", "Nothing"], c: 2 },
    { q: "Zero Tolerance for Bugs means:", o: ["Some bugs are okay", "We don't use clients as beta testers", "Bugs are expected", "Only fix critical bugs"], c: 1 },
    { q: "Every 1 second of load time equals what conversion drop?", o: ["1%", "3%", "7%", "15%"], c: 2 },
    { q: "The First Commit Discipline means:", o: ["Commit every hour", "Every commit must be tested - if it works, push it", "Push untested code", "Wait until end of project"], c: 1 },
    { q: "Speed score target for Desktop is:", o: ["70+", "80+", "90+", "100"], c: 2 },
    { q: "Mobile speed score target is:", o: ["70+", "85+", "90+", "100"], c: 1 },
    { q: "What's the HARDEST mindset trait to develop?", o: ["Technical skill", "Ego management", "Typing speed", "Tool knowledge"], c: 1 },
    { q: "Which developer type takes ownership of results?", o: ["Regular coder", "Digital Heroes Developer", "Both equally", "Neither"], c: 1 },
    { q: "Client pays $1,500+. What quality do they expect?", o: ["Same as $300 developer", "Basic functionality", "Premium, bug-free quality", "Just good enough"], c: 2 }
];

// Task 2: Platform Fundamentals Quiz
const task2Quiz = [
    { q: "What file format are OS 2.0 templates stored in?", o: ["Liquid", "JSON", "YAML", "XML"], c: 1 },
    { q: "Maximum variants per product?", o: ["50", "100", "200", "500"], c: 1 },
    { q: "Where are translation strings stored?", o: ["/assets", "/locales", "/config", "/templates"], c: 1 },
    { q: "What folder contains sections?", o: ["/snippets", "/sections", "/templates", "/layout"], c: 1 },
    { q: "Settings_schema.json is in which folder?", o: ["/assets", "/config", "/layout", "/locales"], c: 1 },
    { q: "How many options maximum per product?", o: ["2", "3", "4", "5"], c: 1 },
    { q: "To format price correctly, use which filter?", o: ["| currency", "| money", "| price", "| format"], c: 1 },
    { q: "Which file wraps all pages?", o: ["header.liquid", "theme.liquid", "base.liquid", "index.liquid"], c: 1 },
    { q: "Metafields are accessed via:", o: ["product.meta", "product.metafields", "product.custom", "product.data"], c: 1 },
    { q: "Hardcoding currency symbols is:", o: ["Recommended", "Forbidden", "Optional", "Required"], c: 1 }
];

// Task 3: Theme Architecture Quiz
const task3Quiz = [
    { q: "What's the golden rule before editing?", o: ["Edit live theme directly", "NEVER edit Live Theme - duplicate first", "Ask permission", "Edit on weekends"], c: 1 },
    { q: "How many essential homepage sections are there?", o: ["5", "8", "12", "20"], c: 2 },
    { q: "Dawn theme is:", o: ["Premium paid theme", "Free OS 2.0 reference theme", "Deprecated theme", "Third-party theme"], c: 1 },
    { q: "Mobile-first development means:", o: ["Desktop first, then mobile", "Design for mobile first, enhance for desktop", "Ignore mobile", "Only mobile"], c: 1 },
    { q: "Theme duplication should include:", o: ["Just files", "Files and settings", "Files, settings, and naming convention", "Nothing"], c: 2 },
    { q: "Homepage hero section should be:", o: ["Last section", "Above the fold", "Hidden on mobile", "Optional"], c: 1 },
    { q: "Product grid should show:", o: ["1 product per row", "2-4 products per row", "10+ products per row", "Random"], c: 1 },
    { q: "Footer must include:", o: ["Nothing required", "Links, policies, contact", "Just logo", "Only payment icons"], c: 1 },
    { q: "Announcement bar is used for:", o: ["Navigation", "Promotions and urgency", "Footer content", "Search"], c: 1 },
    { q: "Theme settings are in:", o: ["/assets", "/config/settings_schema.json", "/layout", "/snippets"], c: 1 }
];

// Task 4: Liquid Programming Quiz
const task4Quiz = [
    { q: "{{ }} tags are for:", o: ["Logic", "Output", "Comments", "Loops"], c: 1 },
    { q: "{% %} tags are for:", o: ["Output", "Logic/Control", "Comments", "Variables"], c: 1 },
    { q: "Which filter translates strings?", o: ["| translate", "| t", "| lang", "| i18n"], c: 1 },
    { q: "To get sized image, use:", o: ["img_url", "image_url", "picture_url", "media_url"], c: 1 },
    { q: "Correct loop syntax is:", o: ["loop x in y", "foreach x in y", "{% for x in y %}", "for(x in y)"], c: 2 },
    { q: "Schema must be in which section of file?", o: ["Top", "Middle", "Bottom", "Anywhere"], c: 2 },
    { q: "Missing comma in schema causes:", o: ["Warning", "Entire section breaks", "Nothing", "Slow load"], c: 1 },
    { q: "Presets in schema enable:", o: ["Speed", "Section in theme editor", "Caching", "Analytics"], c: 1 },
    { q: "Use 'render' instead of:", o: ["assign", "include", "capture", "section"], c: 1 },
    { q: "Default filter provides:", o: ["Speed", "Fallback values", "Caching", "Validation"], c: 1 }
];

// Task 5: Product Page Optimization Quiz  
const task5Quiz = [
    { q: "Above-the-fold content should include:", o: ["Just title", "Image, title, price, CTA", "Only description", "Reviews only"], c: 1 },
    { q: "Product images should be:", o: ["Any size", "Consistent ratio, optimized", "Maximum resolution always", "Small thumbnails only"], c: 1 },
    { q: "Add to cart button should be:", o: ["Hidden", "Below the fold", "Prominent, clear CTA", "Text only"], c: 2 },
    { q: "Social proof includes:", o: ["Just price", "Reviews, badges, testimonials", "Only title", "Nothing"], c: 1 },
    { q: "Variant selector should:", o: ["Be hidden", "Show all options clearly", "Only show color", "Use dropdowns always"], c: 1 },
    { q: "Mobile product page priority:", o: ["Desktop design on mobile", "Thumb-friendly, fast-loading", "Ignore mobile users", "Same as desktop"], c: 1 },
    { q: "Trust badges should be placed:", o: ["Hidden", "Near buy button", "Only footer", "Random"], c: 1 },
    { q: "Product description should:", o: ["Be optional", "Highlight benefits, not just features", "Just list specs", "Be hidden"], c: 1 },
    { q: "Related products section:", o: ["Waste of space", "Increases AOV", "Confuses customers", "Should be removed"], c: 1 },
    { q: "Sticky add-to-cart on mobile:", o: ["Bad UX", "Improves conversions", "Not possible", "Annoying"], c: 1 }
];

// Task 6: Speed Optimization Quiz
const task6Quiz = [
    { q: "Every 1 second delay equals what conversion drop?", o: ["3%", "5%", "7%", "10%"], c: 2 },
    { q: "LCP stands for:", o: ["Lazy Content Paint", "Largest Contentful Paint", "Load Complete Point", "Layout Complete Paint"], c: 1 },
    { q: "CLS measures:", o: ["Speed", "Visual Stability", "Interactivity", "Load time"], c: 1 },
    { q: "Good LCP is under:", o: ["1s", "2.5s", "5s", "10s"], c: 1 },
    { q: "Good CLS is under:", o: ["0.1", "0.5", "1.0", "2.0"], c: 0 },
    { q: "Hero images should use:", o: ["loading=lazy", "loading=eager", "loading=defer", "No loading attr"], c: 1 },
    { q: "To prevent CLS, images need:", o: ["Alt text", "Title", "Width/Height attributes", "Lazy loading"], c: 2 },
    { q: "Script defer means:", o: ["Load first", "Execute after DOM", "Block rendering", "Ignore"], c: 1 },
    { q: "Images are typically what % of page weight?", o: ["10-20%", "30-40%", "50-80%", "90%+"], c: 2 },
    { q: "WebP provides:", o: ["Better SEO", "Better compression", "Better colors", "Better fonts"], c: 1 }
];

// Task 7: Apps & Integrations Quiz
const task7Quiz = [
    { q: "Maximum recommended apps?", o: ["3-5", "5-8", "10-15", "20+"], c: 1 },
    { q: "Uninstalling app removes theme code?", o: ["Yes", "No - manual cleanup needed", "Sometimes", "Always"], c: 1 },
    { q: "Each app adds how much JavaScript?", o: ["1-10KB", "50-500KB", "1-5MB", "Nothing"], c: 1 },
    { q: "Which backup app is recommended?", o: ["Backup Pro", "Rewind", "Save It", "Theme Guard"], c: 1 },
    { q: "Too many cart apps cause:", o: ["Speed boost", "Cart not updating", "Better UX", "Nothing"], c: 1 },
    { q: "jQuery version conflicts cause:", o: ["Speed boost", "JS console errors", "Better UX", "Nothing"], c: 1 },
    { q: "App residue is found in:", o: ["Only assets", "theme.liquid and snippets", "Only config", "Nowhere"], c: 1 },
    { q: "After clean uninstall, PageSpeed should:", o: ["Stay same", "Improve", "Decrease", "Crash"], c: 1 },
    { q: "Essential app categories include:", o: ["Only reviews", "Reviews, email, analytics, backups", "Just SEO", "None needed"], c: 1 },
    { q: "Before installing new app:", o: ["Just install", "Check reviews, test on duplicate", "Ask client", "Ignore impact"], c: 1 }
];

// Task 8: Checkout & Policies Quiz
const task8Quiz = [
    { q: "Required policy pages include:", o: ["Just privacy", "Privacy, Terms, Refund, Shipping", "Only refund", "None"], c: 1 },
    { q: "Checkout should be:", o: ["Complex", "Simple and fast", "Hidden", "Optional"], c: 1 },
    { q: "Payment gateways should:", o: ["Only PayPal", "Multiple options for conversion", "Cash only", "One option"], c: 1 },
    { q: "Shipping profiles should be:", o: ["Flat rate only", "Zone-based and accurate", "Free always", "Hidden"], c: 1 },
    { q: "Trust at checkout includes:", o: ["Nothing", "SSL, badges, clear policies", "Just logo", "Only price"], c: 1 },
    { q: "Guest checkout should be:", o: ["Disabled", "Enabled for conversion", "Hidden", "Required login"], c: 1 },
    { q: "Order confirmation should:", o: ["Be blank", "Include all order details", "Just say thanks", "Link to home"], c: 1 },
    { q: "Contact information should be:", o: ["Hidden", "Visible and accessible", "Email only", "Optional"], c: 1 },
    { q: "Tax settings should be:", o: ["Ignored", "Properly configured per region", "Manual always", "Flat rate"], c: 1 },
    { q: "Abandoned cart recovery requires:", o: ["Nothing", "Email app integration", "Just hope", "Phone calls"], c: 1 }
];

// Task 9: QA & Testing Quiz
const task9Quiz = [
    { q: "Most critical testing platform?", o: ["Windows Chrome", "iOS Safari", "Firefox", "Opera"], c: 1 },
    { q: "Digital Heroes QA standard is:", o: ["30 points", "45 points", "60 points", "100 points"], c: 2 },
    { q: "Zero Tolerance means:", o: ["Some bugs OK", "No bugs on production", "Client decides", "Speed matters more"], c: 1 },
    { q: "DevTools emulation is:", o: ["Perfect", "Not perfect - use real devices", "Better than real", "Useless"], c: 1 },
    { q: "Console red errors should be:", o: ["Ignored", "Fixed immediately", "Noted for later", "Celebrated"], c: 1 },
    { q: "Test orders should use:", o: ["Real payment", "Test mode", "Neither", "Client's card"], c: 1 },
    { q: "Broken checkout priority is:", o: ["Low", "Medium", "Critical - immediate fix", "Not our problem"], c: 2 },
    { q: "Cross-browser testing includes:", o: ["Just Chrome", "Chrome, Safari, Firefox, Edge", "Only mobile", "Only desktop"], c: 1 },
    { q: "Before delivery, always:", o: ["Just send link", "Full QA checklist completion", "Quick glance", "Nothing"], c: 1 },
    { q: "Client-reported bugs should be:", o: ["Ignored", "Fixed within 24 hours", "Blamed on client", "Added to backlog"], c: 1 }
];

// Task 10: Troubleshooting Quiz (or Final Certification)
const task10Quiz = [
    { q: "First debugging step:", o: ["Restart computer", "Check console errors", "Reinstall theme", "Call support"], c: 1 },
    { q: "Theme Inspector is for:", o: ["Installing themes", "Finding which section/snippet renders element", "Deleting themes", "Speed testing"], c: 1 },
    { q: "Console errors in red mean:", o: ["Warning", "Critical JavaScript error", "Success", "Information"], c: 1 },
    { q: "Liquid error in storefront shows:", o: ["Nothing", "Error message visible to customer", "Just logs", "Email alert"], c: 1 },
    { q: "To find broken CSS:", o: ["Just guess", "Use DevTools Inspector", "Reinstall theme", "Clear cache"], c: 1 },
    { q: "Git version control helps with:", o: ["Speed", "Tracking changes and rollback", "SEO", "Sales"], c: 1 },
    { q: "When code breaks after changes:", o: ["Panic", "Revert to last working version", "Delete everything", "Blame someone"], c: 1 },
    { q: "To debug Liquid, use:", o: ["console.log", "{{ variable | json }}", "alert()", "print()"], c: 1 },
    { q: "Network tab shows:", o: ["CSS", "All HTTP requests and load times", "JavaScript", "HTML only"], c: 1 },
    { q: "First rule of crisis:", o: ["Panic", "Don't panic - assess first", "Delete the theme", "Blame the client"], c: 1 }
];

// Export all quizzes
const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];

// Make task content available globally for openTask() function
if (typeof task1Content !== 'undefined') window.task1Content = task1Content;
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
if (typeof task3Content !== 'undefined') window.task3Content = task3Content;
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task5Content !== 'undefined') window.task5Content = task5Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task7Content !== 'undefined') window.task7Content = task7Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task9Content !== 'undefined') window.task9Content = task9Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;
if (typeof task11Content !== 'undefined') window.task11Content = task11Content;
if (typeof task12Content !== 'undefined') window.task12Content = task12Content;
if (typeof task13Content !== 'undefined') window.task13Content = task13Content;

