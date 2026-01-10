// Shopify Developer Training Data
// Complete training content for developer certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "Developer Mindset",
        description: "Code quality fundamentals",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read 'The Store That Lost $50k/Day' case study",
            "📊 Study the Revenue Impact Graph carefully",
            "🧠 Internalize the 'Revenue Engineer' concept"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Understand the 3 arms of Digital Heroes",
            "💎 Memorize Premium vs Enterprise package details",
            "🔍 Watch the 'About Us' video on the main channel (optional)"
        ]
    },
    {
        id: 3,
        title: "Non-Negotiable Standards",
        description: "Critical code rules",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🚨 Memorize the 4 Rules of Development",
            "📱 Understand Mobile-First hierarchy (375px → 768px → 1440px)",
            "⚡ Learn why Speed is non-negotiable"
        ]
    },
    {
        id: 4,
        title: "Theme Development",
        description: "Shopify Liquid basics",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🎨 Study the Theme Architecture Diagram",
            "💧 Review Liquid cheat sheet basics",
            "📂 Memorize folder purposes (sections vs snippets)"
        ]
    },
    {
        id: 5,
        title: "Speed Optimization",
        description: "PageSpeed mastery",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "⚡ Learn the '1 Second = 7% Loss' rule",
            "🖼️ Master Image Optimization techniques",
            "🚫 Understand App impact on performance"
        ]
    },
    {
        id: 6,
        title: "Quality Assurance",
        description: "Testing protocols",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "✅ Memorize the Pre-Submission Checklist",
            "👀 Commit to the 'Fresh Eyes' rule",
            "⚖️ Understand the Zero Tolerance Policy"
        ]
    },
    {
        id: 7,
        title: "Debugging & Fixes",
        description: "Problem-solving skills",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-30 minutes",
            "🐛 Study the Debugging Workflow flowchart",
            "🔧 Learn the 'Testing Trifecta'",
            "💻 Practice using Browser Console (F12)"
        ]
    },
    {
        id: 8,
        title: "Client Delivery",
        description: "Handoff best practices",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🎥 Learn how to record a Loom walkthrough",
            "💾 Understand Version Control practices",
            "🤔 Apply the 'Client Perspective Check'"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world challenges",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🧠 Solve all 3 scenarios mentally first",
            "📝 Write down your step-by-step plans",
            "🔄 Compare with provided checklists"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive assessment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Review ALL previous tasks",
            "🏆 Score 20/20 to pass",
            "🎉 Get ready to build your first store!"
        ]
    }
];

// Task 1: Developer Mindset
const task1Content = `
<h2>📚 PART 1: THE DEVELOPER MINDSET</h2>

<div class="content-section">
<h3>🎯 The Store That Lost $50,000/Day</h3>
<p>A client came to us after their "cheap" developer delivered a store. It looked okay on the surface. But hidden underneath:</p>
<ul>
<li>❌ PageSpeed: 23 (should be 85+)</li>
<li>❌ 4+ seconds load time on mobile</li>
<li>❌ Checkout had JavaScript errors</li>
<li>❌ 10% of add-to-cart clicks didn't work</li>
</ul>
<p>Result? For every 100 visitors, only 1 completed a purchase. Industry average is 2-3. They were losing <strong>$50,000+ per day</strong> in potential sales because of bad code.</p>
<p>We rebuilt the store. PageSpeed hit 92. Conversion rate tripled.</p>
<div class="highlight-box">
<strong>🎯 The Lesson:</strong> Your code doesn't just need to "work." It needs to SELL. A 1-second delay in load time = 7% loss in conversions. Your job isn't just development — it's revenue generation through technical excellence.
</div>
</div>

<div class="content-section">
<h3>📊 Visualizing Impact</h3>
<img src="images/developer_mindset_graph.png" alt="Developer Revenue Impact Graph" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
<p style="text-align: center; color: #94A3B8; font-size: 0.9em;"><em>The exponential difference between an average coder and a Digital Hero.</em></p>
</div>

<div class="content-section">
<h3>💡 You Are Not Just a Coder</h3>
<p>At Digital Heroes, we don't think of ourselves as "developers." We are:</p>
<ul>
<li>🏗️ <strong>Store Architects:</strong> Building the foundation of our client's business</li>
<li>💰 <strong>Revenue Engineers:</strong> Every optimization directly impacts sales</li>
<li>🎯 <strong>Problem Solvers:</strong> Clients come with broken stores; we fix them</li>
<li>🚀 <strong>Performance Experts:</strong> Speed is money in e-commerce</li>
</ul>
<div class="warning-box">
<strong>⚠️ Mindset Check:</strong> If you see your job as "just writing code," you will fail here. Your code DIRECTLY affects real people's livelihoods. A slow site = lost customers = business failure. Take ownership of outcomes, not just tasks.
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>Test your understanding of the developer mindset.</p>
<ul>
<li>📝 10 questions about mindset and responsibility</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
</ul>
</div>
`;

// Task 2: Company Knowledge
const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 The Digital Heroes Ecosystem</h3>
<p>We are not just a development agency. We are a vertically integrated ecosystem:</p>
<div class="highlight-box">
<ul style="margin: 0;">
<li>📺 <strong>Media Arm:</strong> 2.5M+ YouTube subscribers - Digital Marketing Heroes channel</li>
<li>🛠️ <strong>Agency Arm:</strong> Premium Shopify development services</li>
<li>👥 <strong>Talent Pool:</strong> 40+ full-time developers worldwide</li>
</ul>
</div>
<p>Clients trust us BEFORE they even speak to you because they've watched 10+ hours of our content. Your job is to deliver on that trust.</p>
</div>

<div class="content-section">
<h3>💎 What We Actually Sell</h3>
<p>We don't sell "Shopify development." We sell:</p>
<ul>
<li>🚀 <strong>Speed:</strong> 85+ PageSpeed scores that don't lose visitors</li>
<li>💰 <strong>Revenue:</strong> Conversion-optimized stores that make money</li>
<li>💎 <strong>Credibility:</strong> Professional designs clients can be proud of</li>
<li>🛡️ <strong>Peace of Mind:</strong> Expert support they can rely on</li>
</ul>
</div>

<div class="content-section">
<h3>📦 Our Packages</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>💎 PREMIUM</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">$1,200 - 5 pages, 25 products, 30-day support</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>👑 ENTERPRISE</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">$1,800 - 10+ pages, 100+ products, 60-day support</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
</ul>
</div>
`;

// Task 3: Non-Negotiable Standards
const task3Content = `
<h2>📚 TASK 3: NON-NEGOTIABLE CODE STANDARDS</h2>

<div class="content-section">
<h3>🚨 RULE 1: NEVER WORK ON LIVE THEME</h3>
<div class="warning-box">
<p><strong>ALWAYS duplicate theme or work on development store.</strong></p>
<p>One mistake = client's live store broken = lost sales = angry client = reputation damage.</p>
</div>
<p><strong>How to duplicate:</strong> Theme → Actions → Duplicate</p>
</div>

<div class="content-section">
<h3>📱 RULE 2: MOBILE-FIRST ALWAYS</h3>
<p>70% of e-commerce traffic is mobile. Build for <strong>375px width FIRST</strong>, then scale up to desktop.</p>
<div class="highlight-box">
<strong>Development Order:</strong>
<ol>
<li>Mobile (375px) - Build first</li>
<li>Tablet (768px) - Adjust layout</li>
<li>Desktop (1440px) - Enhance experience</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>⚡ RULE 3: SPEED IS NOT OPTIONAL</h3>
<p><strong>Mobile PageSpeed target: 85+</strong></p>
<p>Every decision — image size, app choice, custom code — must consider speed impact.</p>
<ul>
<li>Use WebP images (not PNG/JPG where possible)</li>
<li>Lazy load below-the-fold content</li>
<li>Minimize app installations</li>
<li>Optimize Liquid code loops</li>
</ul>
</div>

<div class="content-section">
<h3>✅ RULE 4: TEST EVERYTHING</h3>
<p>Before marking any task complete:</p>
<ul>
<li>✅ Test on mobile device</li>
<li>✅ Test on desktop browser</li>
<li>✅ Test complete checkout flow</li>
<li>✅ Check browser console for errors</li>
<li>✅ Check PageSpeed Insights score</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about code standards</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 4</li>
</ul>
</div>
`;

// Task 4: Theme Development
const task4Content = `
<h2>📚 TASK 4: SHOPIFY THEME DEVELOPMENT</h2>

<div class="content-section">
<h3>🎨 Shopify Theme Architecture</h3>
<p>Understanding the folder structure is crucial for efficient development.</p>
<img src="images/shopify_theme_architecture.png" alt="Shopify Theme Structure Diagram" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">

<div class="highlight-box">
<pre style="font-family: monospace; margin: 0;">
/layout/          → Base templates (theme.liquid)
/templates/       → Page templates (product.json, collection.json)
/sections/        → Reusable blocks (header, footer, product-grid)
/snippets/        → Small reusable code pieces
/assets/          → CSS, JS, images
/config/          → Theme settings
/locales/         → Translation files
</pre>
</div>
</div>

<div class="content-section">
<h3>💧 Liquid Basics</h3>
<p>Liquid is Shopify's templating language:</p>
<ul>
<li><code>{{ }}</code> - Output variables: <code>{{ product.title }}</code></li>
<li><code>{% %}</code> - Logic tags: <code>{% if product.available %}</code></li>
<li><code>|</code> - Filters: <code>{{ product.price | money }}</code></li>
</ul>
<div class="highlight-box">
<strong>Common Liquid Objects:</strong>
<ul style="margin: 0;">
<li><code>product</code> - Current product data</li>
<li><code>collection</code> - Current collection</li>
<li><code>cart</code> - Shopping cart contents</li>
<li><code>shop</code> - Store settings</li>
<li><code>customer</code> - Logged-in customer data</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📋 Mandatory Store Elements</h3>
<ul>
<li>✅ Minimum 3 trending products per store</li>
<li>✅ ALL policy pages with real content (Privacy, Shipping, Refund, Terms)</li>
<li>✅ Live chat integration (Shopify Inbox)</li>
<li>✅ Track Order page - functional</li>
<li>✅ About Us page - real content, not placeholder</li>
<li>✅ Contact page - with functional form</li>
<li>✅ SEO completed for ALL pages and products</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about theme development</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
</ul>
</div>
`;

// Task 5: Speed Optimization
const task5Content = `
<h2>📚 TASK 5: SPEED OPTIMIZATION</h2>

<div class="content-section">
<h3>⚡ Why Speed = Money</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">1 second delay</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>7% loss</strong> in conversions</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.3);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">3 second load time</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>53%</strong> of mobile users abandon</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">85+ PageSpeed</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Target score</strong> for all builds</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🖼️ Image Optimization</h3>
<ul>
<li>Use <strong>WebP format</strong> wherever possible</li>
<li>Compress images to under 200KB</li>
<li>Use responsive images with srcset</li>
<li>Lazy load images below the fold</li>
<li>Use Shopify's CDN image resizing: <code>| image_url: width: 800</code></li>
</ul>
</div>

<div class="content-section">
<h3>📦 App Management</h3>
<div class="warning-box">
<strong>⚠️ Apps are the #1 speed killer!</strong>
<ul>
<li>Each app adds JavaScript that slows the site</li>
<li>Maximum 8-10 essential apps recommended</li>
<li>Regularly audit and remove unused apps</li>
<li>Check app impact with "App Performance" in Shopify admin</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>💻 Code Optimization</h3>
<ul>
<li>Minimize inline CSS/JS - use external files</li>
<li>Defer non-critical JavaScript</li>
<li>Avoid <code>document.write()</code></li>
<li>Use efficient Liquid loops (avoid nested loops)</li>
<li>Preload critical resources</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about speed optimization</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 6</li>
</ul>
</div>
`;

// Task 6: Quality Assurance
const task6Content = `
<h2>📚 TASK 6: QUALITY ASSURANCE</h2>

<div class="content-section">
<h3>🔍 Self QA Protocol - MANDATORY</h3>
<div class="warning-box">
<strong>Review EVERY element 3-5 times before submission</strong>
<p>This is MANDATORY, not optional.</p>
</div>
</div>

<div class="content-section">
<h3>✅ Pre-Submission Checklist</h3>
<ul>
<li>✅ <strong>Desktop view check:</strong> All pages, all links, all buttons</li>
<li>✅ <strong>Mobile responsiveness:</strong> Every section, every page</li>
<li>✅ <strong>Click EVERY link</strong> on the site - document any broken links</li>
<li>✅ <strong>Test complete flow:</strong> Browse → Add to Cart → Checkout</li>
<li>✅ <strong>Verify ALL images</strong> display correctly (no broken images)</li>
<li>✅ <strong>Spelling/grammar check</strong> on ALL text content</li>
<li>✅ <strong>Page speed test</strong> - must meet 85+ benchmark</li>
<li>✅ <strong>Currency check</strong> - correct currency for client's market</li>
</ul>
</div>

<div class="content-section">
<h3>👀 The Fresh Eyes Rule</h3>
<p>After finishing work, <strong>wait 2 hours</strong> before reviewing.</p>
<div class="highlight-box">
<em>"Your eyes see what they expect. Fresh eyes see what's there."</em>
</div>
</div>

<div class="content-section">
<h3>👥 Peer Review Process</h3>
<ul>
<li>Get projects checked by <strong>each other</strong> before sending to client</li>
<li>Fresh eyes catch issues original developer might miss</li>
<li>Peer review is teamwork - not criticism</li>
</ul>
</div>

<div class="content-section">
<h3>🚨 Zero Tolerance Policy</h3>
<div class="warning-box">
<strong>After 15 days of onboarding: ONE careless mistake = Potential removal</strong>
<ul>
<li>No space for making preventable mistakes in live projects</li>
<li>Mistakes that client points out = Personal responsibility</li>
<li>Check 10 times before giving to client</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about quality assurance</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 7</li>
</ul>
</div>
`;

// Task 7: Debugging & Fixes
const task7Content = `
<h2>📚 TASK 7: DEBUGGING & PROBLEM SOLVING</h2>

<div class="content-section">
<h3>🧠 The Debugging Protocol</h3>
<img src="images/debugging_workflow.png" alt="Debugging Protocol Flowchart" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🐌 Scenario: Site is Slow</h3>
<p><strong>Steps to diagnose:</strong></p>
<ol>
<li>Run PageSpeed Insights - identify issues</li>
<li>Check app list - disable unused apps</li>
<li>Audit images - compress large files</li>
<li>Check for render-blocking resources</li>
<li>Review custom code for inefficiencies</li>
</ol>
</div>

<div class="content-section">
<h3>💥 Scenario: Production Bug</h3>
<div class="warning-box">
<strong>BEFORE doing anything:</strong>
<ol>
<li>Screenshot the error</li>
<li>Check browser console (F12)</li>
<li>Document steps to reproduce</li>
<li>DO NOT make changes to live theme until you understand the issue</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🔄 Scenario: Theme Update Broke Something</h3>
<ol>
<li>Restore from previous theme backup</li>
<li>Compare code changes between versions</li>
<li>Identify conflicting customizations</li>
<li>Re-apply customizations carefully to new theme</li>
</ol>
</div>

<div class="content-section">
<h3>⚡ Scenario: App Conflict</h3>
<ul>
<li>Disable apps one by one to identify conflict</li>
<li>Check app settings for overlap</li>
<li>Contact app support if needed</li>
<li>Consider alternative apps if conflict persists</li>
</ul>
</div>

<div class="content-section">
<h3>🔧 The Testing Trifecta</h3>
<p>Test every feature 3 ways:</p>
<ol>
<li><strong>Happy path</strong> — as intended</li>
<li><strong>Error path</strong> — with wrong inputs</li>
<li><strong>Edge cases</strong> — extreme scenarios</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about debugging</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 8</li>
</ul>
</div>
`;

// Task 8: Client Delivery
const task8Content = `
<h2>📚 TASK 8: CLIENT DELIVERY BEST PRACTICES</h2>

<div class="content-section">
<h3>📸 Show, Don't Tell</h3>
<p>Never say "it's done." Show proof:</p>
<ul>
<li>📷 Screenshot of completed work</li>
<li>🎥 Loom video walkthrough</li>
<li>🔗 Live preview link</li>
</ul>
<div class="highlight-box">
<strong>For every major delivery, record a 2-minute Loom explaining what was built.</strong>
<p style="color: #10B981; margin-top: 10px;">Reduces back-and-forth by 80%</p>
</div>
</div>

<div class="content-section">
<h3>🤔 The Client Perspective Check</h3>
<p>Before submitting, ask yourself:</p>
<div class="warning-box">
<em style="font-size: 1.2em;">"Would I be happy if I paid for this?"</em>
</div>
</div>

<div class="content-section">
<h3>📁 Version Control</h3>
<ul>
<li>Never overwrite - always save versions: v1, v2, v3</li>
<li>Keep theme backups before major changes</li>
<li>Document what was changed in each version</li>
</ul>
</div>

<div class="content-section">
<h3>🔙 The Rollback Plan</h3>
<p>Before any major change, know how to undo it in 5 minutes.</p>
<ul>
<li>Duplicate theme before changes</li>
<li>Export settings/configurations</li>
<li>Document original state</li>
</ul>
</div>

<div class="content-section">
<h3>⚠️ The "Works for Me" Fallacy</h3>
<div class="warning-box">
<strong>"It works on my machine" is NOT acceptable.</strong>
<p>If it doesn't work for the client, it's broken. Period.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about client delivery</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 9</li>
</ul>
</div>
`;

// Task 9: Practice Scenarios
const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🎯 Scenario 1: New Store Build</h3>
<p><strong>Client Request:</strong> "I need a new Shopify store for my fashion brand. Budget: $1,200"</p>
<div class="highlight-box">
<strong>Your Checklist:</strong>
<ul>
<li>☐ Confirm currency settings (USD for US market)</li>
<li>☐ Choose appropriate theme</li>
<li>☐ Create 5 core pages</li>
<li>☐ Add 3+ trending products</li>
<li>☐ Complete all policy pages</li>
<li>☐ Install essential apps only</li>
<li>☐ Achieve 85+ PageSpeed</li>
<li>☐ Complete full QA checklist</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⏱️ Scenario 2: Speed Optimization</h3>
<p><strong>Client Request:</strong> "My site loads slowly. Can you fix it?"</p>
<div class="highlight-box">
<strong>Your Process:</strong>
<ol>
<li>Run initial PageSpeed test (document score)</li>
<li>Audit and disable unnecessary apps</li>
<li>Compress and convert images to WebP</li>
<li>Optimize Liquid code</li>
<li>Enable lazy loading</li>
<li>Run final PageSpeed test (document improvement)</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🔧 Scenario 3: Bug Fix Request</h3>
<p><strong>Client Request:</strong> "The add to cart button doesn't work on mobile"</p>
<div class="warning-box">
<strong>Your Process:</strong>
<ol>
<li>Reproduce the bug on your device</li>
<li>Check browser console for errors</li>
<li>Test on different devices/browsers</li>
<li>Identify root cause</li>
<li>Fix on duplicate theme first</li>
<li>Test thoroughly</li>
<li>Deploy to live only after verification</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about real-world scenarios</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Final Certification</li>
</ul>
</div>
`;

// Task 10: Final Certification
const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations!</h3>
<p>You've completed the Shopify Developer training. This final assessment covers everything you've learned:</p>
<ul>
<li>✅ Developer mindset and responsibility</li>
<li>✅ Digital Heroes ecosystem</li>
<li>✅ Non-negotiable code standards</li>
<li>✅ Theme development fundamentals</li>
<li>✅ Speed optimization techniques</li>
<li>✅ Quality assurance protocols</li>
<li>✅ Debugging and problem-solving</li>
<li>✅ Client delivery best practices</li>
<li>✅ Real-world scenarios</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>This quiz contains 20 questions covering all topics.</strong>
<p>You must score 20/20 to receive your Developer Certification.</p>
</div>
</div>

<div class="content-section">
<h3>🎓 After Certification</h3>
<p><strong>Next Steps:</strong></p>
<ol>
<li>Record a 30-minute walkthrough video of a practice store</li>
<li>Submit for review by your manager</li>
<li>Begin working on real client projects</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Final Quiz?</h3>
<ul>
<li>📝 20 questions covering all training modules</li>
<li>🎯 Score <strong>20/20</strong> to receive your certification</li>
</ul>
</div>
`;

// Quiz Questions (Keep existing quizzes as they are extensive and accurate)
const allQuizzes = [
    // Task 1: Developer Mindset
    [
        { q: "A 1-second delay in load time results in what percentage loss in conversions?", o: ["2%", "5%", "7%", "10%"], c: 2 },
        { q: "What was the PageSpeed score of the store that was losing $50,000/day?", o: ["23", "45", "65", "85"], c: 0 },
        { q: "What percentage of e-commerce traffic comes from mobile devices?", o: ["40%", "50%", "60%", "70%"], c: 3 },
        { q: "As a Digital Heroes developer, your primary job is:", o: ["Writing clean code", "Revenue generation through technical excellence", "Following instructions", "Building websites quickly"], c: 1 },
        { q: "What mindset should you have about your code?", o: ["It just needs to work", "It needs to look good", "It needs to sell", "It needs to be complex"], c: 2 },
        { q: "What is the target PageSpeed score for all builds?", o: ["65+", "75+", "85+", "95+"], c: 2 },
        { q: "What happened after the store was rebuilt with PageSpeed 92?", o: ["Bounce rate increased", "Conversion rate tripled", "Traffic decreased", "Nothing changed"], c: 1 },
        { q: "At Digital Heroes, developers are considered:", o: ["Just coders", "Revenue engineers", "Website builders", "IT support"], c: 1 },
        { q: "Bad code in an e-commerce store affects:", o: ["Only aesthetics", "Only the developer", "Real people's livelihoods", "Only technical metrics"], c: 2 },
        { q: "What should you take ownership of?", o: ["Only your tasks", "Only your code", "Outcomes, not just tasks", "Only deadlines"], c: 2 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "How many YouTube subscribers does Digital Marketing Heroes have?", o: ["500K+", "1M+", "2.5M+", "5M+"], c: 2 },
        { q: "What is the price of the Premium package?", o: ["$800", "$1,000", "$1,200", "$1,500"], c: 2 },
        { q: "What is the price of the Enterprise package?", o: ["$1,200", "$1,500", "$1,800", "$2,000"], c: 2 },
        { q: "How many full-time developers does Digital Heroes have?", o: ["20+", "30+", "40+", "50+"], c: 2 },
        { q: "Premium package includes how many days of support?", o: ["15 days", "30 days", "45 days", "60 days"], c: 1 },
        { q: "Enterprise package includes how many days of support?", o: ["30 days", "45 days", "60 days", "90 days"], c: 2 },
        { q: "What we actually sell is NOT:", o: ["Speed", "Revenue", "Cheap websites", "Peace of mind"], c: 2 },
        { q: "Why do clients trust us before speaking to us?", o: ["Good reviews", "Low prices", "They've watched our YouTube content", "Advertising"], c: 2 },
        { q: "The Digital Heroes ecosystem includes:", o: ["Only agency services", "Media, Agency, and Talent Pool", "Only development", "Only marketing"], c: 1 },
        { q: "Premium package includes how many products uploaded?", o: ["10", "15", "25", "50"], c: 2 }
    ],
    // Task 3: Non-Negotiable Standards
    [
        { q: "What should you NEVER do with a live theme?", o: ["View it", "Test on it", "Work directly on it", "Share it"], c: 2 },
        { q: "Mobile-first means building for what width FIRST?", o: ["320px", "375px", "414px", "768px"], c: 1 },
        { q: "What percentage of e-commerce traffic is mobile?", o: ["50%", "60%", "70%", "80%"], c: 2 },
        { q: "Before marking any task complete, you must:", o: ["Just check desktop", "Only check mobile", "Test on mobile, desktop, checkout, and console", "Ask a colleague"], c: 2 },
        { q: "How should you handle working on client sites?", o: ["Work directly on live theme", "Duplicate theme first", "Only work during off-hours", "Work without backups"], c: 1 },
        { q: "Image format preferred for web optimization:", o: ["PNG", "JPG", "GIF", "WebP"], c: 3 },
        { q: "What happens if you break a live store?", o: ["Nothing serious", "Lost sales and reputation damage", "Just apologize", "Client won't notice"], c: 1 },
        { q: "Development order for responsive design:", o: ["Desktop first", "Tablet first", "Mobile first", "All at once"], c: 2 },
        { q: "What should every decision consider?", o: ["Only aesthetics", "Speed impact", "Only client preference", "Complexity"], c: 1 },
        { q: "Console errors should be checked:", o: ["Only when reported", "Never", "Before every delivery", "Only on desktop"], c: 2 }
    ],
    // Task 4: Theme Development
    [
        { q: "What folder contains base templates like theme.liquid?", o: ["/templates/", "/sections/", "/layout/", "/assets/"], c: 2 },
        { q: "What syntax outputs variables in Liquid?", o: ["{% %}", "{{ }}", "[[ ]]", "(( ))"], c: 1 },
        { q: "What syntax is used for logic in Liquid?", o: ["{{ }}", "{% %}", "[% %]", "// //"], c: 1 },
        { q: "The pipe symbol (|) in Liquid is used for:", o: ["Comments", "Variables", "Filters", "Loops"], c: 2 },
        { q: "Minimum number of trending products per store:", o: ["1", "2", "3", "5"], c: 2 },
        { q: "Which pages must have REAL content (not placeholder)?", o: ["Only homepage", "All policy pages and About Us", "Only product pages", "Only contact page"], c: 1 },
        { q: "What object contains current product data in Liquid?", o: ["item", "product", "goods", "merchandise"], c: 1 },
        { q: "Sections folder contains:", o: ["Base templates", "Reusable blocks", "CSS files", "Translation files"], c: 1 },
        { q: "SEO should be completed for:", o: ["Only homepage", "Only products", "ALL pages and products", "Only collections"], c: 2 },
        { q: "Live chat integration is:", o: ["Optional", "Recommended", "Mandatory", "Not needed"], c: 2 }
    ],
    // Task 5: Speed Optimization
    [
        { q: "Target PageSpeed score for all builds:", o: ["65+", "75+", "85+", "95+"], c: 2 },
        { q: "What percentage of mobile users abandon at 3-second load time?", o: ["23%", "33%", "43%", "53%"], c: 3 },
        { q: "What is the #1 speed killer on Shopify stores?", o: ["Images", "Fonts", "Apps", "Videos"], c: 2 },
        { q: "Maximum recommended number of apps:", o: ["5-6", "8-10", "12-15", "Unlimited"], c: 1 },
        { q: "Images should be compressed to under:", o: ["100KB", "200KB", "500KB", "1MB"], c: 1 },
        { q: "Liquid filter for image resizing:", o: ["| image_size", "| image_url: width:", "| resize_image", "| img_width"], c: 1 },
        { q: "Content below the fold should be:", o: ["Loaded first", "Lazy loaded", "Never loaded", "Preloaded"], c: 1 },
        { q: "Document.write() should be:", o: ["Used frequently", "Avoided", "Used for all scripts", "Required"], c: 1 },
        { q: "Inline CSS/JS should be:", o: ["Preferred", "Minimized", "Required", "Ignored"], c: 1 },
        { q: "App performance can be checked in:", o: ["Browser console", "PageSpeed Insights", "Shopify Admin", "Theme editor"], c: 2 }
    ],
    // Task 6: Quality Assurance
    [
        { q: "How many times should you review each element before submission?", o: ["1-2 times", "3-5 times", "Once", "No specific number"], c: 1 },
        { q: "After finishing work, how long should you wait before reviewing?", o: ["30 minutes", "1 hour", "2 hours", "No wait needed"], c: 2 },
        { q: "After 15 days of onboarding, how many careless mistakes are acceptable?", o: ["1-2", "3-5", "Zero", "Depends on severity"], c: 2 },
        { q: "Peer review is:", o: ["Criticism", "Teamwork", "Optional", "Not recommended"], c: 1 },
        { q: "When should you ask a client to check the store?", o: ["When 50% complete", "When 80% complete", "When 100% complete and self-verified", "Anytime"], c: 2 },
        { q: "If a client points out preventable mistakes:", o: ["Blame the tools", "It's shared responsibility", "You are personally responsible", "Ask for help"], c: 2 },
        { q: "'Fresh eyes' means:", o: ["Using eye drops", "New team member", "Reviewing after a break", "Looking closer"], c: 2 },
        { q: "The pre-submission checklist includes:", o: ["Only mobile check", "Only desktop check", "Desktop, mobile, checkout, links, images, spelling, speed", "Only speed check"], c: 2 },
        { q: "Currency must be checked:", o: ["Only for US clients", "For international clients", "Never", "Only if client asks"], c: 1 },
        { q: "Self QA Protocol is:", o: ["Optional", "Recommended", "Mandatory", "Only for juniors"], c: 2 }
    ],
    // Task 7: Debugging
    [
        { q: "First step when diagnosing a slow site:", o: ["Disable all apps", "Run PageSpeed Insights", "Call client", "Rebuild everything"], c: 1 },
        { q: "Before fixing a production bug, you should:", o: ["Make changes immediately", "Screenshot and document the error", "Ignore it", "Tell the PM"], c: 1 },
        { q: "If theme update broke something:", o: ["Update again", "Restore from backup", "Ignore it", "Start fresh"], c: 1 },
        { q: "To identify app conflicts:", o: ["Disable all apps permanently", "Disable apps one by one", "Remove all apps", "Contact Shopify"], c: 1 },
        { q: "The Testing Trifecta includes:", o: ["Happy path only", "Error path only", "Happy path, error path, edge cases", "Random testing"], c: 2 },
        { q: "Browser console can be accessed with:", o: ["F5", "F12", "F1", "Ctrl+S"], c: 1 },
        { q: "Before making changes to live theme:", o: ["Just do it", "Understand the issue first", "Ask permission", "Wait a day"], c: 1 },
        { q: "When comparing theme versions, you should:", o: ["Guess what changed", "Identify conflicting customizations", "Start fresh", "Use only new version"], c: 1 },
        { q: "Edge cases in testing means:", o: ["Normal scenarios", "Expected inputs", "Extreme scenarios", "Easy tests"], c: 2 },
        { q: "App support should be contacted:", o: ["Never", "Only as a last resort", "When conflict persists", "For every issue"], c: 2 }
    ],
    // Task 8: Client Delivery
    [
        { q: "Instead of saying 'it's done', you should:", o: ["Send email", "Show proof (screenshot/video)", "Wait for feedback", "Ask if they're happy"], c: 1 },
        { q: "Loom walkthrough reduces back-and-forth by:", o: ["20%", "50%", "80%", "100%"], c: 2 },
        { q: "Before submitting, ask yourself:", o: ["Is it fast enough?", "Would I be happy if I paid for this?", "Is the code clean?", "Will client understand?"], c: 1 },
        { q: "Version control means:", o: ["Deleting old versions", "Always saving versions (v1, v2, v3)", "Only keeping latest", "Using Git only"], c: 1 },
        { q: "Before major changes, you should:", o: ["Just make changes", "Know how to undo in 5 minutes", "Inform client", "Wait a day"], c: 1 },
        { q: "'It works on my machine' is:", o: ["Acceptable", "NOT acceptable", "A valid excuse", "Technical truth"], c: 1 },
        { q: "Theme backups should be made:", o: ["Monthly", "Weekly", "Before major changes", "Never"], c: 2 },
        { q: "For every major delivery, record a:", o: ["30-second clip", "2-minute Loom", "10-minute tutorial", "Audio message"], c: 1 },
        { q: "If something doesn't work for the client:", o: ["It's their problem", "It's still working", "It's broken. Period.", "Need more testing"], c: 2 },
        { q: "Proof of work should include:", o: ["Just a message", "Screenshot, video, or live link", "Nothing", "Just completion date"], c: 1 }
    ],
    // Task 9: Practice Scenarios
    [
        { q: "First step for a new store build:", o: ["Add products", "Confirm currency settings", "Choose theme", "Add apps"], c: 1 },
        { q: "Time limit for a practice store:", o: ["1 hour", "2 hours", "4 hours", "8 hours"], c: 1 },
        { q: "For speed optimization, first step is:", o: ["Disable apps", "Run initial PageSpeed test", "Compress images", "Contact client"], c: 1 },
        { q: "For a bug fix, first reproduction step is:", o: ["Fix immediately", "Reproduce on your device", "Ask client for details", "Escalate to manager"], c: 1 },
        { q: "Bug fixes should be deployed to live:", o: ["Immediately", "After testing on duplicate theme", "Without testing", "Within 1 hour"], c: 1 },
        { q: "Client store speed target (per day):", o: ["1 complete store", "1 complete + homepage of 2nd", "2 complete stores", "Half a store"], c: 1 },
        { q: "Final PageSpeed improvement should be:", o: ["Ignored", "Documented", "Estimated", "Not measured"], c: 1 },
        { q: "For new store, policy pages need:", o: ["Placeholder text", "Real content", "No content", "Coming soon"], c: 1 },
        { q: "Essential apps for new store is:", o: ["All available apps", "Only essential apps", "No apps", "Free apps only"], c: 1 },
        { q: "Full QA checklist should be done:", o: ["Before starting", "During development", "Before delivery", "After delivery"], c: 2 }
    ],
    // Task 10: Final Certification (20 questions)
    [
        { q: "Target PageSpeed score for all builds?", o: ["65+", "75+", "85+", "95+"], c: 2 },
        { q: "Mobile-first means building for what width?", o: ["320px", "375px", "768px", "1024px"], c: 1 },
        { q: "How many YouTube subscribers does Digital Heroes have?", o: ["1M+", "2.5M+", "5M+", "10M+"], c: 1 },
        { q: "1-second delay causes what % conversion loss?", o: ["3%", "7%", "10%", "15%"], c: 1 },
        { q: "What is the #1 speed killer on Shopify?", o: ["Images", "Apps", "Fonts", "Videos"], c: 1 },
        { q: "Self QA review should happen how many times?", o: ["1-2", "3-5", "Once", "10+"], c: 1 },
        { q: "After finishing work, wait how long to review?", o: ["30 min", "1 hour", "2 hours", "No wait"], c: 2 },
        { q: "Premium package price?", o: ["$800", "$1,200", "$1,500", "$1,800"], c: 1 },
        { q: "Enterprise package price?", o: ["$1,200", "$1,500", "$1,800", "$2,000"], c: 2 },
        { q: "Minimum products per practice store?", o: ["1", "2", "3", "5"], c: 2 },
        { q: "What indicates a variable in Liquid?", o: ["{% %}", "{{ }}", "[[ ]]", "(( ))"], c: 1 },
        { q: "Theme sections folder contains?", o: ["Base templates", "Reusable blocks", "CSS files", "Images"], c: 1 },
        { q: "Fresh eyes rule means?", o: ["New team member", "Review after break", "Morning review", "Eye care"], c: 1 },
        { q: "Peer review is?", o: ["Criticism", "Competition", "Teamwork", "Optional"], c: 2 },
        { q: "Before major changes, know how to undo in?", o: ["1 minute", "5 minutes", "30 minutes", "1 hour"], c: 1 },
        { q: "'Works on my machine' is?", o: ["Acceptable", "NOT acceptable", "Valid excuse", "Technical issue"], c: 1 },
        { q: "Loom reduces back-and-forth by?", o: ["20%", "50%", "80%", "100%"], c: 2 },
        { q: "Practice store time limit?", o: ["1 hour", "2 hours", "4 hours", "8 hours"], c: 1 },
        { q: "After 15 days, careless mistakes allowed?", o: ["1-2", "3-5", "Zero", "Unlimited"], c: 2 },
        { q: "Live theme should NEVER be?", o: ["Viewed", "Shared", "Worked on directly", "Tested"], c: 2 }
    ]
];
