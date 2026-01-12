// Shopify Developer Training Data - COMPLETE OVERHAUL
// Digital Heroes Shopify Developer Certification Program
// 10 Tasks, 120 Quiz Questions, Comprehensive Content

const trainingTasks = [
    {
        id: 1,
        title: "Developer Mindset",
        description: "Non-negotiable standards & quality",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: Developer Standards section",
            "📖 Study: Quality Standards & Ownership",
            "🔍 YouTube: 'Shopify development best practices'"
        ]
    },
    {
        id: 2,
        title: "Store Access & Setup",
        description: "Collaborator access & theme selection",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 30 minutes",
            "📖 Read SOP: Getting Store Access section",
            "📖 Read SOP: Theme Selection & Initial Setup",
            "🔍 YouTube: 'Shopify collaborator access'"
        ]
    },
    {
        id: 3,
        title: "Homepage Structure",
        description: "Section flow & page architecture",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read SOP: Homepage Section Structure",
            "📖 Read SOP: Standard Menu & Pages Structure",
            "🔍 YouTube: 'high converting Shopify homepage'"
        ]
    },
    {
        id: 4,
        title: "Product Page CRO",
        description: "Conversion rate optimization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: Product Page Optimization",
            "📖 Read SOP: Conversion Rate Optimization Guide",
            "🔍 YouTube: 'high converting product page Shopify'"
        ]
    },
    {
        id: 5,
        title: "Speed Optimization",
        description: "85+ PageSpeed target",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read SOP: Speed Optimization section",
            "📖 Read SOP: Performance Debugging Flowchart",
            "🔍 YouTube: 'Shopify speed optimization'"
        ]
    },
    {
        id: 6,
        title: "Apps & Checkout",
        description: "Essential apps & payment setup",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 35 minutes",
            "📖 Read SOP: Essential Shopify Apps",
            "📖 Read SOP: Checkout & Payment Setup",
            "🤖 ChatGPT: 'Best Shopify apps for conversion'"
        ]
    },
    {
        id: 7,
        title: "QA Protocol",
        description: "60-point checklist mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: 60-Point QA Checklist",
            "📖 Read SOP: Self QA Protocol",
            "🔍 YouTube: 'website QA testing checklist'"
        ]
    },
    {
        id: 8,
        title: "Troubleshooting",
        description: "Debugging & difficult situations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read SOP: Troubleshooting Common Issues",
            "📖 Read SOP: Debugging Decision Tree",
            "🤖 ChatGPT: 'How to debug Shopify Liquid errors'"
        ]
    },
    {
        id: 9,
        title: "AI Development",
        description: "ChatGPT/Claude for custom sections",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: Using AI for Development",
            "📖 Read SOP: Creating Custom Blocks & Sections",
            "🤖 Practice: Create a custom section with AI"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive exam (20 questions)",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60 minutes",
            "📖 Review entire Developer SOP",
            "📖 Memorize 4 Non-Negotiable Standards",
            "📖 Know the 60-Point QA Checklist",
            "🎥 Prepare for 30-minute video submission"
        ]
    }
];

// ===============================================
// TASK 1: DEVELOPER MINDSET & STANDARDS
// ===============================================

const task1Content = `
<div class="content-section">
    <img src="images/dev_4_standards.png" alt="4 Non-Negotiable Developer Standards" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <h2>🎯 Core Philosophy</h2>
    <div class="highlight-box">
        <strong>"Your code doesn't just need to work. It needs to SELL."</strong>
        <p>A 1-second delay in load time = 7% loss in conversions. Your job isn't just development — it's revenue generation through technical excellence.</p>
    </div>
    
    <h3>📖 The Story That Defines Our Standard</h3>
    <p>A client came to us after their "cheap" developer delivered a store. Hidden underneath:</p>
    <ul>
        <li>❌ PageSpeed: 23 (should be 85+)</li>
        <li>❌ 4+ seconds load time on mobile</li>
        <li>❌ Checkout had JavaScript errors</li>
        <li>❌ 10% of add-to-cart clicks didn't work</li>
    </ul>
    <p><strong>Result:</strong> For every 100 visitors, only 1 completed a purchase. They were losing <strong style="color: #EF4444;">$50,000+ per day</strong> in potential sales.</p>
</div>

<div class="content-section">
    <h2>🚨 THE 4 NON-NEGOTIABLE STANDARDS</h2>
    
    <h3>STANDARD 1: NEVER Work on Live Theme</h3>
    <p>Always <strong>duplicate theme</strong> or work on development store. One mistake = client's live store broken.</p>
    
    <h3>STANDARD 2: Mobile-First ALWAYS</h3>
    <p><strong>70% of ecommerce traffic is mobile.</strong> Build for 375px width FIRST, then scale up to desktop.</p>
    
    <h3>STANDARD 3: Speed is NOT Optional</h3>
    <p>Mobile PageSpeed target: <strong>85+</strong>. Every decision — image size, app choice, custom code — must consider speed.</p>
    
    <h3>STANDARD 4: Test EVERYTHING</h3>
    <p>Before marking any task complete: Test on mobile, Test on desktop, Test checkout flow, Check console errors.</p>
</div>

<div class="content-section">
    <h2>⚠️ CRITICAL: Currency Check - FIRST STEP</h2>
    <div class="warning-box">
        <strong>🚨 NEVER keep currency as INR for US/international clients!</strong>
        <ul>
            <li>Verify currency setting IMMEDIATELY after store creation</li>
            <li>Change to USD (or client's target currency)</li>
            <li>Double-check currency on checkout page during QA</li>
        </ul>
    </div>
    
    <h3>📋 Mandatory Store Elements</h3>
    <ul>
        <li>✅ Minimum 3 trending products per practice store</li>
        <li>✅ ALL policy pages with content</li>
        <li>✅ Live chat integration (Shopify Inbox)</li>
        <li>✅ Track Order page - functional</li>
        <li>✅ About Us page - real content</li>
        <li>✅ Contact page - functional form</li>
        <li>✅ SEO completed for ALL pages</li>
    </ul>
    
    <h3>⏱️ Time Standards</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Task Type</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Expected Time</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Practice store</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Maximum 2 hours</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client store (full)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1 complete store + homepage of 2nd = 1 day</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom section (with AI)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-60 minutes</td>
        </tr>
    </table>
    <p><em>Remember: Shopify is 2x easier than WordPress — your speed should reflect this!</em></p>
</div>

<div class="content-section">
    <h2>🔍 SELF QA PROTOCOL - MANDATORY</h2>
    <p><strong>Review EVERY element 3-5 times before submission</strong></p>
    <ul>
        <li>✅ Desktop view check: All pages, all links, all buttons</li>
        <li>✅ Mobile responsiveness: Every section, every page</li>
        <li>✅ Click EVERY link on the site</li>
        <li>✅ Test complete flow: Add to Cart → Checkout</li>
        <li>✅ Verify ALL images display correctly</li>
        <li>✅ Spelling/grammar check on ALL text</li>
        <li>✅ PageSpeed test - must meet 85+ benchmark</li>
    </ul>
    
    <div class="warning-box">
        <strong>⚠️ Zero Tolerance Policy</strong>
        <p>After 15 days of onboarding: ONE careless mistake = Potential removal</p>
        <p>Check 10 times before giving to client - each line, each design element.</p>
    </div>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Developer Foundations</h2>
    <div class="highlight-box">
        <strong>📺 MANDATORY VIEWING: Complete Before Proceeding</strong>
        <p>These foundational videos will be evaluated during your final certification. Complete all videos and implementation tasks. <strong>Estimated time: 4-5 hours.</strong></p>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ WHY THIS MATTERS</strong>
        <p>Understanding Shopify fundamentals is the difference between a developer who struggles with every task and one who delivers with confidence. Without this foundation, you'll spend hours debugging issues that should take minutes. These videos give you the complete picture that will make everything else easier.</p>
    </div>
    
    <h3>📚 1. Shopify Tutorial for Beginners 2026 – Complete Guide</h3>
    <p><strong>What you'll learn:</strong> Full start-to-finish walkthrough for building a Shopify store — the best overall foundational video for new builders. This comprehensive guide covers everything from account creation to your first sale.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/YtbaxJFb9zE" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 2. Shopify Tutorial for Beginners 2025 (Full Setup)</h3>
    <p><strong>What you'll learn:</strong> Step-by-step tutorial focused on store setup from scratch, including navigation, theme configuration, essential pages, and product management. Perfect for understanding the admin panel deeply.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/fO7bb5Dfukk" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
        <strong>✅ IMPLEMENTATION TASK (Required for Certification)</strong>
        <p style="margin-bottom: 15px;"><strong>Your senior developer will evaluate this during your final review:</strong></p>
        <ol>
            <li>Create a Shopify Partner account (free at partners.shopify.com)</li>
            <li>Create a development store</li>
            <li>Install the Dawn theme and <strong>duplicate it immediately</strong> (NEVER work on original)</li>
            <li>Navigate through every section of the Shopify admin panel</li>
            <li>Find 5 trending products from AliExpress or Zendrop</li>
            <li>Add products with proper images, titles, and descriptions</li>
            <li>Set currency to USD (NOT INR) for all US client stores</li>
            <li>Run a PageSpeed test and screenshot your baseline score</li>
            <li>Record time taken — target: under 3 hours for complete setup</li>
        </ol>
        <p style="margin-top: 15px; font-style: italic;">📸 Take screenshots of each step. You will need these for your certification portfolio.</p>
    </div>
</div>
`;

// ===============================================
// TASK 2: STORE ACCESS & THEME SETUP
// ===============================================

const task2Content = `
<div class="content-section">
    <h2>🔐 Getting Collaborator Access</h2>
    <div class="warning-box">
        <strong>⚠️ NEVER Start Work Without Proper Access</strong>
        <p>Working without official collaborator access = security risk and potential account issues.</p>
    </div>
    
    <h3>📋 Step-by-Step: Getting Access</h3>
    
    <h4>STEP 1: Request Collaborator Code</h4>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 15px; border-radius: 8px; border-left: 4px solid #10B981; margin: 15px 0; font-family: monospace; font-size: 0.9em;">
        <p>"To get started, I'll need access to your Shopify store:</p>
        <p>1. Log into your Shopify admin</p>
        <p>2. Go to Settings → Users and permissions</p>
        <p>3. Scroll to 'Collaborators' section</p>
        <p>4. Share the 4-digit code with me"</p>
    </div>
    
    <h4>STEP 2: Request Access Using the Code</h4>
    <ol>
        <li>Go to <strong>accounts.shopify.com/store-login</strong></li>
        <li>Enter the client's store URL (.myshopify.com)</li>
        <li>Click "Log in with collaborator request"</li>
        <li>Enter the 4-digit code</li>
        <li>Select permissions needed (usually "Full access")</li>
        <li>Submit the request</li>
    </ol>
    
    <h4>STEP 3: Client Approves</h4>
    <p>Client checks: Settings → Users and permissions → Collaborators → Click 'Approve'</p>
</div>

<div class="content-section">
    <h2>🎨 Theme Selection & Setup</h2>
    
    <h3>Recommended Themes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Score</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Dawn</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Free</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;"><strong>90+</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Prestige</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$350</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">85-90</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Impulse</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">$350</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">80-85</td>
        </tr>
    </table>
    
    <h3>Theme Setup Checklist</h3>
    <ol>
        <li><strong>Install Theme:</strong> Online Store → Themes → Add theme</li>
        <li><strong>DUPLICATE before customizing</strong> (Critical!)</li>
        <li><strong>Theme Settings:</strong> Colors, Typography (max 2 fonts), Buttons</li>
        <li><strong>Logo & Favicon:</strong> PNG with transparency, 200-400px wide</li>
    </ol>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Theme Customization & Pages</h2>
    <div class="highlight-box">
        <strong>📺 MANDATORY VIEWING: Master the Theme Editor</strong>
        <p>The theme editor is where you'll spend 70% of your development time. These videos will be evaluated during certification. <strong>Estimated time: 3-4 hours.</strong></p>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ WHY THIS MATTERS</strong>
        <p>The theme customizer is your primary tool for delivering client work. Clients pay for beautiful, functional stores — and this is where you build them. A developer who doesn't know the theme editor inside-out cannot deliver professional results. Every minute spent here saves hours later.</p>
    </div>
    
    <h3>📚 3. Shopify Theme Customization Tutorial (Sections & Blocks)</h3>
    <p><strong>What you'll learn:</strong> How to use Shopify's visual theme editor, blocks, and sections to style the storefront. This video teaches you to work with the drag-and-drop editor to create beautiful, conversion-focused layouts without code.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/fQZntbd5QGI" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 4. How to Create & Edit Shopify Pages</h3>
    <p><strong>What you'll learn:</strong> How to create key store pages (About, Contact, FAQ) and edit text/image content. Every professional store needs these foundational pages to build trust and answer customer questions.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/nJMqRgKkkBg" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 5. Shopify About Us & FAQ Page Tutorial</h3>
    <p><strong>What you'll learn:</strong> Demonstrates how to build compelling About Us and FAQ informational pages. These pages are essential for customer trust — stores without them see 23% lower conversion rates.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/cpGL7I2dECo" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
        <strong>✅ IMPLEMENTATION TASK (Required for Certification)</strong>
        <p style="margin-bottom: 15px;"><strong>Your senior developer will evaluate this during your final review:</strong></p>
        <ol>
            <li>Customize theme colors to match the sample brand provided</li>
            <li>Add a logo (PNG with transparency, 200-400px wide)</li>
            <li>Add a proper favicon (32x32 or 16x16 PNG)</li>
            <li>Configure the header navigation with correct links</li>
            <li>Create an <strong>About Us page</strong> with brand story, team, and values</li>
            <li>Create a <strong>Contact page</strong> with form, email, and business hours</li>
            <li>Create an <strong>FAQ page</strong> with at least 8 common questions</li>
            <li>Set up the footer with all essential links and social media</li>
            <li>Test all pages on mobile to ensure proper display</li>
        </ol>
        <p style="margin-top: 15px; font-style: italic;">📸 Take screenshots of each completed page. Include both desktop and mobile views.</p>
    </div>
</div>
`;

// ===============================================
// TASK 3: HOMEPAGE STRUCTURE
// ===============================================

const task3Content = `
<div class="content-section">
    <h2>🏆 The Perfect Homepage Flow</h2>
    <img src="images/dev_homepage_flow.png" alt="Perfect Homepage Section Flow" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="highlight-box">
        <strong>Every section should have a PURPOSE</strong>
        <p>No section exists just to look pretty — it either builds trust, showcases products, or drives action.</p>
    </div>
</div>

<div class="content-section">
    <h2>📋 Essential Homepage Sections</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">#</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Section</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Announcement Bar</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Highlight key offer</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Header</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Navigation & branding</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero Banner</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">First impression (7 words max)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Trust Bar</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Free shipping, returns, security</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Featured Products</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Best sellers (4-8 products)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Value Props</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Why buy from us</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Collection Grid</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Shop by category</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Testimonials</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Social proof (3-6 reviews)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">9</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">About/Story</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Brand connection</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">FAQ</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Answer objections (5-8 questions)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">11</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Newsletter</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Capture emails + incentive</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">12</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Footer</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Links, policies, trust</td></tr>
    </table>
</div>

<div class="content-section">
    <h2>📋 Standard Menu Structure</h2>
    <p>Every store MUST have these menu items:</p>
    <ul>
        <li>🏠 <strong>Home</strong> → /</li>
        <li>📦 <strong>Catalog</strong> → /collections/all</li>
        <li>📂 <strong>Collections</strong> → Dropdown menu</li>
        <li>ℹ️ <strong>About Us</strong> → /pages/about-us</li>
        <li>📧 <strong>Contact Us</strong> → /pages/contact-us</li>
        <li>❓ <strong>FAQ</strong> → /pages/faq</li>
        <li>📦 <strong>Track Your Order</strong> → /apps/17track</li>
    </ul>
</div>

<div class="content-section">
    <h2>🎥 Video Training: SEO & Navigation Setup</h2>
    <div class="highlight-box">
        <strong>📺 MANDATORY VIEWING: SEO & Structure Essentials</strong>
        <p>Without proper SEO and navigation, no one finds your store and those who do get lost. These skills will be evaluated during certification. <strong>Estimated time: 4-5 hours.</strong></p>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ WHY THIS MATTERS</strong>
        <p>A store without SEO is invisible to search engines. A store with poor navigation frustrates customers. These two elements determine whether people can find your store AND whether they can find what they want when they get there. 70% of stores fail on SEO basics — don't be one of them.</p>
    </div>
    
    <h3>📚 6. Shopify SEO – Preferences & Meta Setup</h3>
    <p><strong>What you'll learn:</strong> Walks through the Shopify Preferences section — homepage title, meta description, and SEO basics. This is the foundation for being found on Google.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/umTyBPD_Fjw" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 7. Shopify SEO Optimization for Beginners</h3>
    <p><strong>What you'll learn:</strong> Practical SEO strategy for Shopify — site structure, keywords, and optimization techniques. Learn how to rank higher and drive organic traffic.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/LMGj7N2iW2A" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 11. How To Set Up Navigation, Policies & Pages</h3>
    <p><strong>What you'll learn:</strong> Covers site structure: main menus, footer links, policies, and page linking. Essential for creating a professional store structure.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/X8FWjKaxi-E" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 12. Shopify Navigation – Drop-Down Menu Setup</h3>
    <p><strong>What you'll learn:</strong> How to create drop-down navigation menus to organize categories and pages. Makes navigation intuitive for customers with many products.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/Rsp_hc3ICUo" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
        <strong>✅ IMPLEMENTATION TASK (Required for Certification)</strong>
        <p style="margin-bottom: 15px;"><strong>Your senior developer will evaluate this during your final review:</strong></p>
        <ol>
            <li>Set up Homepage SEO: Title (max 60 chars), Description (max 160 chars)</li>
            <li>Configure SEO for ALL pages (About, Contact, FAQ)</li>
            <li>Set up SEO for ALL products with proper titles and descriptions</li>
            <li>Create complete main navigation with all essential pages</li>
            <li>Create drop-down menus for product categories</li>
            <li>Set up footer navigation with policies, contact, social links</li>
            <li>Add all required policy pages (Privacy, Terms, Shipping, Refund)</li>
            <li>Test navigation on mobile — ensure all menus work properly</li>
            <li>Run SEO audit and fix any issues found</li>
        </ol>
        <p style="margin-top: 15px; font-style: italic;">📸 Take screenshots of your navigation structure and SEO settings for each page.</p>
    </div>
</div>
`;

// ===============================================
// TASK 4: PRODUCT PAGE CRO
// ===============================================

const task4Content = `
<div class="content-section">
    <h2>🚨 This Is Where Sales Happen</h2>
    <div class="warning-box">
        <strong>A beautiful homepage means nothing if the product page doesn't convert.</strong>
        <p>90% of your conversion optimization effort should be HERE.</p>
    </div>
    
    <h3>📸 Above the Fold (Without Scrolling)</h3>
    <ul>
        <li>✅ <strong>Product Images:</strong> 3-5 high-quality images minimum</li>
        <li>✅ <strong>Price & Variants:</strong> Price clearly visible, variant selectors</li>
        <li>✅ <strong>Add to Cart:</strong> Prominent button, trust badges below</li>
        <li>✅ <strong>Trust Elements:</strong> Free shipping, returns, security</li>
    </ul>
</div>

<div class="content-section">
    <h2>📈 The 5 Psychological Conversion Triggers</h2>
    
    <h3>🛡️ 1. TRUST</h3>
    <ul>
        <li>Professional design, SSL certificate</li>
        <li>Payment security badges</li>
        <li>Customer reviews with photos</li>
        <li>Clear return policy</li>
    </ul>
    
    <h3>⚡ 2. URGENCY</h3>
    <ul>
        <li>"Only 3 left!" limited stock</li>
        <li>Sale countdown timers</li>
        <li>Shipping deadline ("Order in 2 hrs for same-day")</li>
    </ul>
    
    <h3>👥 3. SOCIAL PROOF</h3>
    <ul>
        <li>Star ratings on products</li>
        <li>Review count ("Based on 127 reviews")</li>
        <li>Customer photos in reviews</li>
    </ul>
    
    <h3>🎁 4. VALUE</h3>
    <ul>
        <li>Free shipping threshold visible</li>
        <li>Bundle deals</li>
        <li>Compare-at price (show savings)</li>
    </ul>
    
    <h3>🚀 5. EASE</h3>
    <ul>
        <li>One-page checkout</li>
        <li>Guest checkout enabled</li>
        <li>Express checkout (Shop Pay, Apple Pay)</li>
    </ul>
</div>

<div class="content-section">
    <h2>📱 Mobile Conversion Optimization</h2>
    <p><strong>70% of traffic is mobile — optimize or die</strong></p>
    <ul>
        <li><strong>Sticky Add to Cart:</strong> Always visible on scroll</li>
        <li><strong>Touch targets:</strong> 44x44px minimum for buttons</li>
        <li><strong>Fast loading:</strong> 3 seconds max or they leave</li>
        <li><strong>Thumb-friendly:</strong> Important actions at bottom of screen</li>
    </ul>
    
    <div class="highlight-box">
        <strong>💡 Key Insight</strong>
        <p>Size guide reduces returns by <strong>30%+</strong>. Always include measurement charts.</p>
        <p>Related Products section increases AOV by <strong>15-30%</strong>.</p>
    </div>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Product Management & CRO</h2>
    <div class="highlight-box">
        <strong>📺 MANDATORY VIEWING: Master Product Pages</strong>
        <p>Products are the heart of every store. These skills will be evaluated during certification. <strong>Estimated time: 4-5 hours.</strong></p>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ WHY THIS MATTERS</strong>
        <p>A beautiful homepage means nothing if the product page doesn't convert. 90% of your conversion optimization effort should be on product pages. Every element — images, descriptions, variants, pricing — directly impacts whether customers click "Buy Now" or leave. Master this or lose sales.</p>
    </div>
    
    <h3>📚 8. How to Add Products on Shopify (Beginner's Guide)</h3>
    <p><strong>What you'll learn:</strong> How to create product listings, set prices, manage inventory, and configure variants. The foundation for every store's catalog.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/YvllH3MhPWY" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 9. Shopify Product Page Customization Tutorial</h3>
    <p><strong>What you'll learn:</strong> How to organize and customize product page templates for higher conversion. Learn to create product pages that sell.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/B4OE1lvTBp0" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 10. Shopify Variants & Inventory Management Explained</h3>
    <p><strong>What you'll learn:</strong> Detailed explanation of product variants, SKU logic, and stock tracking. Essential for stores with sizes, colors, and multiple options.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/gsw2NYVrPfM" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
        <strong>✅ IMPLEMENTATION TASK (Required for Certification)</strong>
        <p style="margin-bottom: 15px;"><strong>Your senior developer will evaluate this during your final review:</strong></p>
        <ol>
            <li>Add at least <strong>5 products</strong> with complete information</li>
            <li>Add 3-5 high-quality images per product (multiple angles)</li>
            <li>Write benefit-focused descriptions (features AFTER benefits)</li>
            <li>Set up proper variants (Size, Color, etc.) with correct pricing</li>
            <li>Configure inventory tracking with SKU codes</li>
            <li>Add Trust Badges below Add to Cart button</li>
            <li>Create Size Guide for applicable products</li>
            <li>Add FAQ section with 3-5 questions per product</li>
            <li>Set up Related Products / "You may also like" section</li>
            <li>Test product page on mobile — ensure images load, buttons work</li>
        </ol>
        <p style="margin-top: 15px; font-style: italic;">📸 Take screenshots of each product page showing all elements. Include mobile views.</p>
    </div>
</div>
`;

// ===============================================
// TASK 5: SPEED OPTIMIZATION
// ===============================================

const task5Content = `
<div class="content-section">
    <h2>⚡ Target PageSpeed: 85+ Mobile</h2>
    <img src="images/dev_speed_targets.png" alt="PageSpeed Targets" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="warning-box">
        <strong>Every 1-second delay = 7% conversion loss</strong>
    </div>
</div>

<div class="content-section">
    <h2>📋 Speed Optimization Checklist</h2>
    
    <h3>📸 Image Optimization</h3>
    <ul>
        <li>Compress before upload (TinyPNG, Squoosh)</li>
        <li><strong>Max 500KB per image</strong></li>
        <li>Use appropriate dimensions (not 4000px)</li>
        <li>Let Shopify serve WebP</li>
        <li>Lazy load below-fold images</li>
    </ul>
    
    <h3>📱 App Audit</h3>
    <ul>
        <li><strong>Maximum 10-12 apps</strong></li>
        <li>Remove unused apps</li>
        <li>Delete leftover app code</li>
        <li>Check PageSpeed after each app install</li>
    </ul>
    
    <h3>💻 Code Optimization</h3>
    <ul>
        <li>Minimize custom CSS/JS</li>
        <li>Defer non-critical scripts</li>
        <li>Remove unused theme features</li>
        <li>Use system fonts when possible</li>
    </ul>
    
    <h3>🔤 Font Optimization</h3>
    <ul>
        <li><strong>Maximum 2 font families</strong></li>
        <li>Limit font weights loaded</li>
        <li>Use font-display: swap</li>
    </ul>
</div>

<div class="content-section">
    <h2>🔄 Speed Debugging Flowchart</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Issue</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cause</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fix</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LCP high</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Hero image too large</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Compress to &lt;200KB, use WebP</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">TBT high</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Too much JavaScript</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defer non-critical JS, remove apps</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">CLS issues</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Images without dimensions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add width/height to all images</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Speed Optimization Mastery</h2>
    <div class="highlight-box">
        <strong>📺 WATCH THESE: Achieve 85+ PageSpeed</strong>
        <p>Complete all videos and optimize your store's speed. Estimated time: 2-3 hours.</p>
    </div>
    
    <h3>📚 1. Shopify Speed Optimization Guide</h3>
    <p>Complete tutorial on improving your store's PageSpeed score.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/z7_AZQzlHIQ" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 2. Core Web Vitals Explained</h3>
    <p>Understanding LCP, CLS, and INP for better rankings.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/1GalWZwfkyk" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 3. Image Optimization & Compression</h3>
    <p>Reduce image sizes without losing quality.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/OMYwhBWgJoo" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box">
        <strong>✅ Implementation Task: Speed Optimization Challenge</strong>
        <ol>
            <li>Run PageSpeed Insights on your practice store - record baseline score</li>
            <li>Compress ALL images using TinyPNG or Squoosh (max 500KB each)</li>
            <li>Remove unused apps (keep under 10)</li>
            <li>Check for and remove any leftover app code</li>
            <li>Limit fonts to 2 families maximum</li>
            <li>Lazy load below-fold images</li>
            <li>Run PageSpeed again - must achieve 85+ mobile</li>
            <li>Check Console for JavaScript errors - fix any found</li>
            <li>Test load time on real mobile device (target: under 3 seconds)</li>
            <li>Screenshot before/after PageSpeed scores</li>
        </ol>
    </div>
</div>
`;

// ===============================================
// TASK 6: APPS & CHECKOUT
// ===============================================

const task6Content = `
<div class="content-section">
    <h2>⚠️ App Rule: Less is More</h2>
    <div class="warning-box">
        <strong>Every app you install slows down the store.</strong>
        <p>5-8 apps is healthy. 15+ apps = performance issues.</p>
    </div>
    
    <h3>📊 Recommended Apps</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best App</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Reviews</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Judge.me / Loox</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Photo reviews</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Email</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Klaviyo</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Abandoned cart, campaigns</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Upsell</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">ReConvert</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Increase AOV</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Chat</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Shopify Inbox</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Customer support</td></tr>
    </table>
</div>

<div class="content-section">
    <h2>💳 Test Order Process</h2>
    <ol>
        <li>Enable test mode (Settings → Payments → Manage → Enable test mode)</li>
        <li>Add product to cart → Proceed to checkout</li>
        <li>Fill shipping info → Select shipping method</li>
        <li>Use test card: <strong>4242 4242 4242 4242</strong></li>
        <li>Any future date, any 3-digit CVV</li>
        <li>Complete order → Verify confirmation email</li>
        <li>Check order in admin → Test refund process</li>
        <li><strong style="color: #EF4444;">REMEMBER: Disable test mode before launch!</strong></li>
    </ol>
</div>

<div class="content-section">
    <h2>📋 Required Policy Pages</h2>
    <ul>
        <li><strong>Shipping Policy:</strong> Processing time, methods, costs</li>
        <li><strong>Return & Refund:</strong> Return window, condition, process</li>
        <li><strong>Privacy Policy:</strong> Data collection, usage, cookies</li>
        <li><strong>Terms of Service:</strong> Usage terms, liability</li>
    </ul>
    <p>💡 <strong>Pro Tip:</strong> Settings → Policies → "Create from template"</p>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Shipping, Payments & Markets</h2>
    <div class="highlight-box">
        <strong>📺 MANDATORY VIEWING: Essential Store Operations</strong>
        <p>Without proper shipping, payments, and markets setup, no one can buy from your store. These skills will be evaluated. <strong>Estimated time: 5-6 hours.</strong></p>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ WHY THIS MATTERS</strong>
        <p>Shipping and payment errors cause 35% of cart abandonment. Wrong shipping rates lose money. Payment gateway mistakes mean refunds and chargebacks. Shopify Markets unlocks global revenue. These operational foundations must be perfect — there's no room for error.</p>
    </div>
    
    <h3>📚 13. Shopify Payments & Shipping Setup Tutorial</h3>
    <p><strong>What you'll learn:</strong> How to configure payment providers and shipping basics in Shopify. The essential setup that enables transactions.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/X6hBF5bnnto" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 14. Shopify Shipping Profiles Explained</h3>
    <p><strong>What you'll learn:</strong> Shipping profiles, how rates are applied, and zone configuration. Critical for accurate delivery costs.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/p45DB8aY2Vc" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 15. Shopify Shipping Tutorial – Rates & Portfolios</h3>
    <p><strong>What you'll learn:</strong> Detailed tutorial on setting shipping rates and custom profiles for products. Advanced shipping configuration.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/OMJv0n3INJ8" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 16. Shopify Markets Explained – International Sales</h3>
    <p><strong>What you'll learn:</strong> Overview of how to activate and manage Shopify Markets for international selling. Expand your reach globally.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/F9R7Pwkao8k" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 17. Shopify Markets Setup – How to Sell Internationally</h3>
    <p><strong>What you'll learn:</strong> Step-by-step setup of Shopify Markets including localization and multi-currency. Detailed configuration guide.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/jPQSg5lTR0g" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 18. Shopify Multi-Currency Checkout Tutorial</h3>
    <p><strong>What you'll learn:</strong> How to set up multi-currency pricing and checkout experiences using Shopify Payments & Markets. Essential for global stores.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/uiBLBX9HTRA" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
        <strong>✅ IMPLEMENTATION TASK (Required for Certification)</strong>
        <p style="margin-bottom: 15px;"><strong>Your senior developer will evaluate this during your final review:</strong></p>
        <ol>
            <li>Set up shipping zones: US, Canada, Europe, International</li>
            <li>Configure flat-rate shipping ($5.99 domestic, $14.99 international)</li>
            <li>Add free shipping threshold at $75</li>
            <li>Enable Shopify Payments (or alternative payment provider)</li>
            <li>Add PayPal Express Checkout</li>
            <li>Enable Shop Pay, Apple Pay, Google Pay</li>
            <li>Create at least 2 international markets (e.g., Europe EUR, UK GBP)</li>
            <li>Set up country-specific pricing adjustments</li>
            <li>Configure duties and import taxes display</li>
            <li>Test complete checkout flow with test card: 4242 4242 4242 4242</li>
            <li>Test market switcher on storefront</li>
        </ol>
        <p style="margin-top: 15px; font-style: italic;">📸 Take screenshots of shipping zones, payment settings, markets configuration, and test order confirmation.</p>
    </div>
</div>
`;

// ===============================================
// TASK 7: QA PROTOCOL
// ===============================================

const task7Content = `
<div class="content-section">
    <h2>✅ 60-Point QA Checklist</h2>
    <img src="images/dev_60point_qa.png" alt="60-Point QA Checklist" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="warning-box">
        <strong>🚨 NEVER deliver without completing the QA checklist</strong>
        <p>Every issue caught before delivery = trust built. Every issue found after = trust destroyed.</p>
    </div>
</div>

<div class="content-section">
    <h2>📋 QA Categories</h2>
    
    <h3>🎨 Design (15 points)</h3>
    <ul>
        <li>Consistent typography, Brand colors applied</li>
        <li>No pixelated images, Proper spacing</li>
        <li>Mobile looks as good as desktop</li>
        <li>Logo, Favicon installed, No placeholder text</li>
    </ul>
    
    <h3>⚙️ Functionality (15 points)</h3>
    <ul>
        <li>All navigation links work</li>
        <li>Add to cart works on ALL products</li>
        <li>Checkout completes successfully</li>
        <li>Forms submit correctly</li>
        <li>Mobile menu opens/closes</li>
    </ul>
    
    <h3>⚡ Performance (10 points)</h3>
    <ul>
        <li>Mobile PageSpeed <strong>85+</strong></li>
        <li>Desktop PageSpeed <strong>90+</strong></li>
        <li>No console errors</li>
        <li>Load time under 3 seconds</li>
    </ul>
    
    <h3>🔍 SEO (10 points)</h3>
    <ul>
        <li>Page titles set (unique per page)</li>
        <li>Meta descriptions written</li>
        <li>Alt text on ALL images</li>
        <li>URLs are SEO-friendly</li>
    </ul>
    
    <h3>📱 Mobile Testing (10 points)</h3>
    <ul>
        <li>Test on real iPhone AND Android</li>
        <li>Touch targets 44px+ minimum</li>
        <li>No horizontal scroll</li>
        <li>Text readable without zoom</li>
    </ul>
</div>

<div class="content-section">
    <h2>⏱️ The 5-Minute Audit</h2>
    <p>After every delivery:</p>
    <ol>
        <li>Check on <strong>mobile</strong> — real device, not browser resize</li>
        <li>Check in <strong>incognito mode</strong> — no cache issues</li>
        <li>Check in <strong>different browser</strong> — Chrome AND Safari</li>
    </ol>
</div>

<div class="content-section">
    <h2>🎥 Video Training: QA & Testing Excellence</h2>
    <div class="highlight-box">
        <strong>📺 WATCH THESE: Master Quality Assurance</strong>
        <p>Complete all videos and perform full QA on your store. Estimated time: 3-4 hours.</p>
    </div>
    
    <h3>📚 1. Shopify Launch Checklist</h3>
    <p>Everything to check before launching a store.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/tc1ou-8OTuc" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 2. How to Test Your Shopify Store</h3>
    <p>Complete testing walkthrough for checkout and functionality.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/8M1rNIdkKAM" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 3. Pre-Launch Essentials</h3>
    <p>Final checks before going live.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/ItO0mOLYLhY" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box">
        <strong>✅ Implementation Task: Complete 60-Point QA</strong>
        <ol>
            <li>Download/create 60-point QA checklist</li>
            <li><strong>Design (15 pts):</strong> Check typography, colors, images, spacing, mobile design</li>
            <li><strong>Functionality (15 pts):</strong> Test ALL links, buttons, forms, checkout</li>
            <li><strong>Performance (10 pts):</strong> Run PageSpeed, check console errors</li>
            <li><strong>SEO (10 pts):</strong> Page titles, meta descriptions, alt text, URLs</li>
            <li><strong>Mobile (10 pts):</strong> Test on real iPhone AND Android device</li>
            <li>Place test order with test card: 4242 4242 4242 4242</li>
            <li>Check confirmation email delivery</li>
            <li>Test in incognito mode and different browsers</li>
            <li>Screenshot your completed checklist (all 60 points marked)</li>
        </ol>
    </div>
</div>
`;

// ===============================================
// TASK 8: TROUBLESHOOTING
// ===============================================

const task8Content = `
<div class="content-section">
    <h2>🔍 Debugging Decision Tree</h2>
    <img src="images/dev_debugging_flow.png" alt="Debugging Decision Tree" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <p><strong>Before asking for help, follow this. 80% of issues are solved in first 3 steps.</strong></p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Step</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fix</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Console Check</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Red errors point to exact line</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Preview vs Live?</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Changes only in preview until published</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cache Clear</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hard refresh: Ctrl+Shift+R (40% of issues!)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Syntax Check</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Missing endif, quotes?</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Object Exists?</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Wrap in {% if object %}</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Isolate Issue</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Comment out sections</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">App Conflict</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Disable apps one by one</td></tr>
    </table>
</div>

<div class="content-section">
    <h2>🔴 Handling Difficult Situations</h2>
    
    <h3>Client's Theme is Heavily Broken</h3>
    <p><strong>Response:</strong> Document issues, inform PM, recommend cleanup before new features.</p>
    
    <h3>Feature is Technically Impossible</h3>
    <p><strong>Response:</strong> "This isn't natively supported. We have two options: [A] or [B]. Here are pros/cons."</p>
    
    <h3>Changes Broke Production</h3>
    <p><strong>Response:</strong> <strong style="color: #EF4444;">Immediately revert to backup.</strong> Document what happened. Fix in dev first.</p>
    
    <h3>Client Editing Theme and Breaking Things</h3>
    <p><strong>Response:</strong> "Changes were made since our delivery. Fixing these would be additional work."</p>
    
    <div class="warning-box">
        <strong>🚨 Escalate to Senior Developer After 15 Minutes</strong>
        <p>If you can't debug an issue after 15 minutes of systematic troubleshooting, escalate.</p>
    </div>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Troubleshooting & Debugging</h2>
    <div class="highlight-box">
        <strong>📺 WATCH THESE: Master Problem-Solving</strong>
        <p>Complete all videos and practice debugging scenarios. Estimated time: 2-3 hours.</p>
    </div>
    
    <h3>📚 1. Common Shopify Errors & Fixes</h3>
    <p>Learn to identify and resolve the most common issues.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/OMYwhBWgJoo" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 2. Browser Developer Tools Tutorial</h3>
    <p>Use console and inspector to debug code issues.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/7cx15NZmGO4" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 3. Why Your Store Isn't Making Sales</h3>
    <p>Diagnose and fix conversion issues.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/Oc9zCbsN5Q4" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box">
        <strong>✅ Implementation Task: Debug & Fix Scenarios</strong>
        <ol>
            <li>Open Browser DevTools (F12) and find the Console tab</li>
            <li>Check your practice store for any red console errors</li>
            <li>If errors exist - document and attempt to fix each one</li>
            <li>Use "Inspect Element" on 5 different page elements</li>
            <li>Practice clearing cache (Ctrl+Shift+R) to test changes</li>
            <li>Intentionally break something (like a typo in Liquid) and practice fixing it</li>
            <li>Test checkout flow - find and document any friction points</li>
            <li>Write a troubleshooting report with all issues found and fixed</li>
        </ol>
    </div>
</div>
`;

// ===============================================
// TASK 9: AI DEVELOPMENT
// ===============================================

const task9Content = `
<div class="content-section">
    <h2>🔥 SUPERPOWER: Use AI to Create ANY Custom Section</h2>
    <div class="highlight-box">
        <strong>You don't need to memorize Liquid syntax. AI can write it for you.</strong>
    </div>
    
    <h3>📋 Step-by-Step Custom Section Creation</h3>
    
    <h4>STEP 1: Prompt ChatGPT/Claude</h4>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 15px; border-radius: 8px; border-left: 4px solid #10B981; margin: 15px 0; font-family: monospace; font-size: 0.9em;">
        <p>"I need to create a custom Shopify section for [DESCRIBE WHAT YOU NEED].</p>
        <p>The section should be editable from the theme customizer.</p>
        <p>Include a schema with these editable fields: [LIST FIELDS].</p>
        <p>Use Shopify 2.0 JSON templates. Make it responsive for mobile."</p>
    </div>
    
    <h4>STEP 2: AI generates the code</h4>
    
    <h4>STEP 3: Where to Paste</h4>
    <ol>
        <li>Online Store → Themes → Edit Code</li>
        <li>Navigate to <strong>Sections/</strong> folder</li>
        <li>Click "Add a new section" → name it</li>
        <li>Paste AI code → Save</li>
        <li>Customize theme → Add section → Your section appears!</li>
    </ol>
</div>

<div class="content-section">
    <h2>🔥 The 7-Figure Designer Prompt</h2>
    <p>Have AI analyze your store like a $100K/year designer:</p>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6; margin: 15px 0; font-family: monospace; font-size: 0.85em;">
        <p>"You are a 7-figure ecommerce designer who has designed 1000+ high-converting Shopify stores.</p>
        <p>Analyze this screenshot. Be brutally honest.</p>
        <p>Evaluate: First impression, Visual hierarchy, Trust elements, Mobile-friendliness, Conversion blockers, Typography, Color usage.</p>
        <p>Give me 5 specific improvements ranked by impact on sales."</p>
    </div>
    
    <h3>🤖 Developer Prompts</h3>
    <ul>
        <li><strong>Debugging:</strong> "I'm getting this error: [error]. File: [file]. Code: [code]. Help me fix it."</li>
        <li><strong>Code Generation:</strong> "Create a Shopify 2.0 section for [describe] with schema"</li>
        <li><strong>Speed Optimization:</strong> "Optimize this Shopify section for speed: [code]"</li>
        <li><strong>Code Review:</strong> "Review this code for performance, best practices, accessibility"</li>
    </ul>
    
    <div class="warning-box">
        <strong>⚠️ Always Test AI-Generated Code</strong>
        <ul>
            <li>Test on duplicate theme first</li>
            <li>Check mobile responsiveness</li>
            <li>Verify no console errors</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h2>🎥 Video Training: Apps & Integrations</h2>
    <div class="highlight-box">
        <strong>📺 MANDATORY VIEWING: Essential Store Integrations</strong>
        <p>Order tracking and email marketing are non-negotiables for professional stores. These skills will be evaluated. <strong>Estimated time: 3-4 hours.</strong></p>
    </div>
    
    <div class="warning-box">
        <strong>⚠️ WHY THIS MATTERS</strong>
        <p>Order tracking reduces "Where is my order?" support tickets by 80%. Email marketing drives 30-40% of e-commerce revenue. Stores without these integrations look unprofessional and miss revenue. Master these tools to deliver complete, professional stores.</p>
    </div>
    
    <h3>📚 19. 17TRACK Order Tracking on Shopify – Full Setup</h3>
    <p><strong>What you'll learn:</strong> Sets up 17TRACK for real-time order tracking and customer notifications. Reduces customer anxiety and support requests.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/-msd5yDGn34" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 20. Klaviyo Shopify Integration & Email Marketing</h3>
    <p><strong>What you'll learn:</strong> End-to-end Klaviyo integration with Shopify. Set up automated email flows that drive repeat purchases and recover abandoned carts.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/UKnpUB8RslQ" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
        <strong>✅ IMPLEMENTATION TASK (Required for Certification)</strong>
        <p style="margin-bottom: 15px;"><strong>Your senior developer will evaluate this during your final review:</strong></p>
        <ol>
            <li>Install and configure 17TRACK app or equivalent order tracking</li>
            <li>Set up tracking page accessible from customer account</li>
            <li>Configure tracking notification emails</li>
            <li>Install Klaviyo app and connect to Shopify</li>
            <li>Create Welcome Series email flow (3 emails minimum)</li>
            <li>Create Abandoned Cart recovery flow</li>
            <li>Use AI to generate a custom Shopify section (testimonials, FAQ, etc.)</li>
            <li>Add the custom section to your homepage</li>
            <li>Test all email flows and tracking notifications</li>
        </ol>
        <p style="margin-top: 15px; font-style: italic;">📸 Take screenshots of tracking page, Klaviyo flows, and custom section in theme editor.</p>
    </div>
</div>
`;

// ===============================================
// TASK 10: FINAL CERTIFICATION
// ===============================================

const task10Content = `
<div class="content-section">
    <h2>🎓 Final Certification Requirements</h2>
    
    <div class="highlight-box">
        <strong>📋 Pre-Certification Checklist</strong>
        <ul>
            <li>✅ Complete Tasks 1-9 with 10/10 on all quizzes</li>
            <li>✅ Review entire Developer SOP</li>
            <li>📖 Memorize 4 Non-Negotiable Standards</li>
            <li>📖 Know the 60-Point QA Checklist</li>
            <li>📖 Understand Speed Optimization targets</li>
        </ul>
    </div>
    
    <h3>🎥 Video Submission (30 minutes)</h3>
    <ol>
        <li><strong>Introduction (2 min):</strong> Name, background, what you learned</li>
        <li><strong>SOP Walkthrough (10 min):</strong> 4 Standards, 60-Point QA, Speed targets</li>
        <li><strong>Mock Development (15 min):</strong> Theme setup, QA process, AI section creation</li>
        <li><strong>Closing (3 min):</strong> Your commitment, questions</li>
    </ol>
</div>

<div class="content-section">
    <h2>🏆 Certification Complete When</h2>
    <ul>
        <li>✅ All 10 tasks done</li>
        <li>✅ All quizzes passed with 10/10</li>
        <li>✅ Final exam 20/20</li>
        <li>✅ 30-minute video submitted</li>
        <li>✅ Video approved by senior developer</li>
    </ul>
    
    <h3>📈 Post-Certification Pathway</h3>
    <ul>
        <li><strong>Week 1-2:</strong> Build stores with senior review</li>
        <li><strong>Week 3-4:</strong> Handle 1-2 projects with QA oversight</li>
        <li><strong>Month 2:</strong> Manage multiple projects, weekly check-ins</li>
        <li><strong>Month 3+:</strong> Full Developer — independent ownership</li>
    </ul>
    
    <div class="highlight-box">
        <strong>🎯 Your Daily Mantra</strong>
        <p style="font-style: italic; font-size: 1.1em;">"Today, I write code that changes lives. Every optimization, every fix, every feature makes a difference."</p>
    </div>
</div>

<div class="content-section">
    <h2>🎥 Final Review Videos</h2>
    <div class="highlight-box">
        <strong>📺 WATCH BEFORE YOUR FINAL EXAM</strong>
        <p>Review these comprehensive videos to prepare for certification. Estimated time: 4-5 hours.</p>
    </div>
    
    <h3>📚 1. Complete Shopify Store Build (Full Tutorial)</h3>
    <p>Watch a professional build a complete store from start to finish.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/7cx15NZmGO4" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 2. Shopify Tips & Tricks Every Developer Should Know</h3>
    <p>Advanced techniques for professional-level work.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/aCav7RwkrZU" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <h3>📚 3. Shopify Store That Made $1M+ Case Study</h3>
    <p>Learn from real successful stores.</p>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; border-radius: 12px; overflow: hidden;">
        <iframe src="https://www.youtube.com/embed/tlXHPg411zI" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
    
    <div class="warning-box">
        <strong>✅ Final Implementation Task: Certification Portfolio</strong>
        <ol>
            <li><strong>Complete Practice Store:</strong> Final polish on your store (2-3 hours)</li>
            <li><strong>Speed Test:</strong> Achieve 85+ PageSpeed mobile score</li>
            <li><strong>60-Point QA:</strong> Complete entire checklist with screenshots</li>
            <li><strong>Test Order:</strong> Place and document test order flow</li>
            <li><strong>Create Portfolio:</strong> Compile screenshots of:
                <ul>
                    <li>Homepage (desktop + mobile)</li>
                    <li>Product page with all CRO elements</li>
                    <li>PageSpeed before/after scores</li>
                    <li>Custom section you created</li>
                    <li>Checkout flow completion</li>
                </ul>
            </li>
            <li><strong>Record Video (30 min):</strong>
                <ul>
                    <li>Introduction (2 min)</li>
                    <li>SOP Walkthrough (10 min)</li>
                    <li>Live Development Demo (15 min)</li>
                    <li>Closing (3 min)</li>
                </ul>
            </li>
            <li>Submit portfolio + video for review</li>
        </ol>
    </div>
</div>
`;

// Export content for each task
trainingTasks[0].content = task1Content;
trainingTasks[1].content = task2Content;
trainingTasks[2].content = task3Content;
trainingTasks[3].content = task4Content;
trainingTasks[4].content = task5Content;
trainingTasks[5].content = task6Content;
trainingTasks[6].content = task7Content;
trainingTasks[7].content = task8Content;
trainingTasks[8].content = task9Content;
trainingTasks[9].content = task10Content;

// ===============================================
// QUIZ QUESTIONS - 120 Total (10 per task + 20 final)
// Answer positions randomized for equal A/B/C/D distribution
// ===============================================

const task1Quiz = [
    { q: "Before making ANY changes to a theme, you MUST:", o: ["Test on your personal device", "Write a backup plan", "Ask the client for permission", "Duplicate the theme first — NEVER work on live theme"], c: 3 },
    { q: "What percentage of ecommerce traffic is mobile?", o: ["70%", "30%", "90%", "50%"], c: 0 },
    { q: "Target Mobile PageSpeed score is:", o: ["50+", "95+", "85+", "70+"], c: 2 },
    { q: "A 1-second delay in load time causes what conversion loss?", o: ["5%", "7%", "2%", "10%"], c: 1 },
    { q: "FIRST thing to check when creating store for US clients:", o: ["Currency is NOT set to INR — change to USD", "Theme selection", "Logo upload", "Product count"], c: 0 },
    { q: "How many times should you review EVERY element before submission?", o: ["Optional review", "Once", "3-5 times (MANDATORY)", "Twice"], c: 2 },
    { q: "'It works on my machine' is:", o: ["Acceptable explanation", "Developer's defense", "Good enough for delivery", "NOT acceptable — if doesn't work for client, it's broken"], c: 3 },
    { q: "After 15 days of onboarding, ONE careless mistake can result in:", o: ["Potential removal", "A warning", "Nothing serious", "Extra training"], c: 0 },
    { q: "The Testing Trifecta means testing:", o: ["Three times in a row", "Happy path, error path, and edge cases", "Three different devices", "Three different browsers"], c: 1 },
    { q: "P0 (highest priority) tasks are:", o: ["Code reviews", "PM questions", "Learning and optimization", "Production bugs, security issues, deadline-day tasks"], c: 3 }
];

const task2Quiz = [
    { q: "The secure way to access a client's Shopify store is:", o: ["Any method works", "Client shares login credentials", "Collaborator access with 4-digit code", "Access through their email"], c: 2 },
    { q: "Where does the client find their collaborator request code?", o: ["Settings → Users and permissions → Collaborators", "Products page", "Online Store → Themes", "Apps section"], c: 0 },
    { q: "For a full store build, what permission level is needed?", o: ["Themes only", "Full access (all permissions)", "Products only", "Settings only"], c: 1 },
    { q: "Which free Shopify theme has the highest speed score (90+)?", o: ["Impulse", "Symmetry", "Prestige", "Dawn"], c: 3 },
    { q: "Before customizing a theme, you MUST:", o: ["Test on mobile", "Click 'Duplicate' to create a backup", "Ask client permission", "Check PageSpeed"], c: 1 },
    { q: "Maximum number of font families to use:", o: ["4", "Unlimited", "2", "1"], c: 2 },
    { q: "Logo file format should be:", o: ["PNG with transparency, 200-400px wide", "Any format", "JPG only", "SVG only"], c: 0 },
    { q: "If client's store is on trial plan, collaborator access:", o: ["Requires extra steps", "Works with password", "Is not available — trial stores don't have this", "Works normally"], c: 2 },
    { q: "Client wants to share login instead of collaborator access. You should:", o: ["Use both", "Politely decline — collaborator access is more secure", "Report them", "Accept it"], c: 1 },
    { q: "Favicon size should be:", o: ["32x32 or 64x64 PNG", "Any size", "500x500 PNG", "1000x1000 PNG"], c: 0 }
];

const task3Quiz = [
    { q: "Hero section headline should be maximum:", o: ["15 words", "7 words", "3 words", "Unlimited"], c: 1 },
    { q: "The purpose of the Trust Bar section is to:", o: ["Build confidence (free shipping, returns, secure payment)", "Display testimonials", "Capture emails", "Show products"], c: 0 },
    { q: "Featured Products section should show:", o: ["All products", "20+ products", "4-8 products", "1-2 products"], c: 2 },
    { q: "Standard header menu MUST include:", o: ["No specific requirements", "Only product pages", "Home, Catalog, Collections, About Us, Contact Us, FAQ, Track Order", "Only Home and Catalog"], c: 2 },
    { q: "Order tracking is set up using:", o: ["External website", "17Track / i7 Track app", "Custom code only", "Shopify's built-in feature"], c: 1 },
    { q: "Every homepage section should:", o: ["Have a PURPOSE — build trust, showcase products, or drive action", "Be colorful", "Have animations", "Just look pretty"], c: 0 },
    { q: "Testimonials section should have:", o: ["No photos needed", "1 review", "50+ reviews", "3-6 reviews with photos if possible"], c: 3 },
    { q: "Newsletter section should include:", o: ["Nothing specific", "Email input + incentive (like 10% off)", "Phone number only", "Just email input"], c: 1 },
    { q: "FAQ section should have:", o: ["5-8 common questions", "No FAQ needed", "50+ questions", "1-2 questions"], c: 0 },
    { q: "Footer should include all EXCEPT:", o: ["Navigation links", "Payment icons", "Client's personal phone number", "Policy pages"], c: 2 }
];

const task4Quiz = [
    { q: "Minimum number of product images:", o: ["10+", "3-5", "No minimum", "1"], c: 1 },
    { q: "Product description should lead with:", o: ["Price comparison", "Ingredients only", "Benefits FIRST, Features SECOND", "Technical features"], c: 2 },
    { q: "What is the #1 conversion driver after price?", o: ["Customer reviews", "Product title", "Page speed", "Product images"], c: 0 },
    { q: "Size guide reduces returns by:", o: ["5%", "50%", "30%+", "15%"], c: 2 },
    { q: "Related Products section can increase AOV by:", o: ["100%", "50-60%", "15-30%", "1-5%"], c: 2 },
    { q: "Minimum touch target size for mobile buttons:", o: ["No minimum", "100x100px", "20x20px", "44x44px"], c: 3 },
    { q: "'Only 3 left!' is an example of which trigger?", o: ["Social proof", "Urgency", "Value", "Trust"], c: 1 },
    { q: "Star ratings and review counts are examples of:", o: ["Trust", "Ease", "Social proof", "Urgency"], c: 2 },
    { q: "Above the fold means:", o: ["Mobile only", "Footer area", "Visible WITHOUT scrolling", "Top of page after scrolling"], c: 2 },
    { q: "Sticky Add to Cart on mobile should be:", o: ["Always visible on scroll", "Optional", "Hidden", "Only at top"], c: 0 }
];

const task5Quiz = [
    { q: "Target Mobile PageSpeed score:", o: ["70+", "85+", "50+", "95+"], c: 1 },
    { q: "Maximum image file size:", o: ["500KB", "No limit", "2MB", "100KB"], c: 0 },
    { q: "Maximum number of apps recommended:", o: ["Unlimited", "20", "10-12", "5"], c: 2 },
    { q: "LCP (Largest Contentful Paint) issues are usually caused by:", o: ["Wrong colors", "Hero image too large", "Too many pages", "Too many products"], c: 1 },
    { q: "CLS (Cumulative Layout Shift) is fixed by:", o: ["Adding width/height to all images", "Changing fonts", "Removing apps", "Compressing images"], c: 0 },
    { q: "After installing a new app, you should:", o: ["Remove old theme", "Do nothing", "Install another app", "Check PageSpeed — did it drop significantly?"], c: 3 },
    { q: "Primary tool for speed score:", o: ["Browser console", "Google PageSpeed Insights", "Shopify analytics", "GTmetrix only"], c: 1 },
    { q: "TBT (Total Blocking Time) issues indicate:", o: ["Too much JavaScript", "Missing content", "Wrong fonts", "Slow images"], c: 0 },
    { q: "Maximum font families to use:", o: ["4", "2", "Unlimited", "1"], c: 1 },
    { q: "Every 1-second delay in load time causes what conversion loss?", o: ["5%", "2%", "7%", "10%"], c: 2 }
];

const task6Quiz = [
    { q: "Healthy number of apps for a store:", o: ["30+", "15-20", "5-8", "1-2"], c: 2 },
    { q: "If PageSpeed drops more than 10 points after installing an app:", o: ["Reconsider the app", "Keep the app anyway", "Ignore it", "Install another app"], c: 0 },
    { q: "When uninstalling an app, you must also:", o: ["Delete all products", "Restart Shopify", "Check theme code for leftover snippets and remove them", "Contact Shopify support"], c: 2 },
    { q: "Test credit card number for Shopify:", o: ["4242 4242 4242 4242", "0000 0000 0000 0000", "1234 1234 1234 1234", "Any random number"], c: 0 },
    { q: "After completing test order, you MUST:", o: ["Change theme", "Disable test mode before launch", "Leave test mode on", "Delete test products"], c: 1 },
    { q: "Shop Pay is enabled when you activate:", o: ["Gift cards", "Manual payments", "PayPal", "Shopify Payments"], c: 3 },
    { q: "Policy pages are set up in:", o: ["Theme editor", "Settings → Policies", "Apps section", "Products section"], c: 1 },
    { q: "Multiple review apps should be:", o: ["Used on different pages", "Installed but disabled", "Used together for more reviews", "Avoided — pick ONE only"], c: 3 },
    { q: "Free apps with no reviews are risky because:", o: ["They often inject unwanted code or malware", "They're too complex", "They don't work", "They're too simple"], c: 0 },
    { q: "Which payment gateway has the lowest fees?", o: ["All same", "Manual payments", "Shopify Payments", "PayPal"], c: 2 }
];

const task7Quiz = [
    { q: "Total points in the QA checklist:", o: ["50", "60", "40", "100"], c: 1 },
    { q: "Mobile PageSpeed target in QA:", o: ["95+", "50+", "85+", "70+"], c: 2 },
    { q: "Desktop PageSpeed target:", o: ["80+", "70+", "95+", "90+"], c: 3 },
    { q: "Minimum touch target size for mobile buttons:", o: ["60px", "44px", "20px", "100px"], c: 1 },
    { q: "How many times should you review every element before submission?", o: ["3-5 times", "10+ times", "Twice", "Once"], c: 0 },
    { q: "The 5-Minute Audit includes checking on:", o: ["Theme editor only", "One device only", "Desktop only", "Mobile, incognito mode, different browser"], c: 3 },
    { q: "Console errors should be:", o: ["Documented but not fixed", "Fixed before delivery — zero console errors", "Hidden", "Ignored"], c: 1 },
    { q: "Who catches issues — you or the client?", o: ["PM catches issues", "Client catches issues", "YOU catch all issues before delivery", "No one checks"], c: 2 },
    { q: "Peer review is:", o: ["Teamwork — fresh eyes catch issues you miss", "Criticism", "Only for senior developers", "Optional"], c: 0 },
    { q: "Alt text should be on:", o: ["No images needed", "Only product images", "ALL images", "Only hero images"], c: 2 }
];

const task8Quiz = [
    { q: "First step in debugging is:", o: ["Delete all code", "Reinstall theme", "Open DevTools → Console tab for errors", "Ask for help"], c: 2 },
    { q: "Hard refresh (Ctrl+Shift+R) solves what percentage of 'not updating' issues?", o: ["25%", "80%", "10%", "40%"], c: 1 },
    { q: "'expected block close' error means:", o: ["Missing {% endif %} or {% endfor %}", "Theme is broken", "Server is down", "Wrong password"], c: 0 },
    { q: "If changes broke production, FIRST action is:", o: ["Delete the store", "Wait for client to notice", "Debug on live site", "Immediately revert to backup/previous version"], c: 3 },
    { q: "Client provides low-res images. You should:", o: ["Skip those sections", "Use them anyway", "Pause timeline and request correct assets", "Upscale with software"], c: 2 },
    { q: "When feature is technically impossible, you should:", o: ["Provide alternatives: 'We have option A or B'", "Ignore the request", "Just say 'can't be done'", "Try anyway"], c: 0 },
    { q: "Client edited theme and broke things. This is:", o: ["Ignored", "New scope — additional work", "PM's problem", "Your responsibility to fix for free"], c: 1 },
    { q: "Escalate to senior developer after debugging for:", o: ["Never escalate", "2 hours", "15 minutes with no progress", "1 minute"], c: 2 },
    { q: "To isolate a bug, you should:", o: ["Comment out sections until error goes", "Ignore it", "Delete everything", "Ask the client"], c: 0 },
    { q: "'It works on my machine' is:", o: ["Good enough", "Developer's right", "Acceptable", "NOT acceptable — if doesn't work for client, it's broken"], c: 3 }
];

const task9Quiz = [
    { q: "AI (ChatGPT/Claude) can help with:", o: ["Only design work", "Creating custom sections, debugging, code review", "Nothing related to code", "Only writing emails"], c: 1 },
    { q: "Before adding AI-generated code to theme, you should:", o: ["Test on duplicate theme first", "Skip testing", "Ask client to test", "Use it directly on live theme"], c: 0 },
    { q: "Custom section files are placed in:", o: ["Layout folder", "Config folder", "Sections folder", "Assets folder"], c: 2 },
    { q: "When prompting AI for a custom section, include:", o: ["Only colors", "Description, editable fields, Shopify 2.0, responsive requirements", "Just the section name", "Nothing specific"], c: 1 },
    { q: "The 7-Figure Designer prompt is used to:", o: ["Fix bugs", "Write product descriptions", "Create sections", "Analyze store design and get improvement suggestions"], c: 3 },
    { q: "After AI generates code, you must:", o: ["Ignore errors", "Trust it completely", "Test on duplicate theme, check mobile, verify no console errors", "Use it immediately"], c: 2 },
    { q: "To debug with AI, you should provide:", o: ["Exact error message, file location, code snippet", "Nothing specific", "Just 'it's broken'", "Store URL only"], c: 0 },
    { q: "Schema in Shopify sections allows:", o: ["More products", "Nothing", "Editing from theme customizer without touching code", "Faster loading"], c: 2 },
    { q: "Official Shopify Liquid documentation is at:", o: ["github.com", "shopify.dev/docs/api/liquid", "google.com", "wordpress.org"], c: 1 },
    { q: "Learning path should start with:", o: ["Custom apps", "Backend development", "Advanced JavaScript", "Master theme customizer first (no code)"], c: 3 }
];

const task10Quiz = [
    { q: "Before making ANY theme changes:", o: ["Duplicate theme first", "Skip backup", "Ask PM", "Work on live"], c: 0 },
    { q: "Mobile traffic percentage:", o: ["50%", "30%", "70%", "90%"], c: 2 },
    { q: "Target Mobile PageSpeed:", o: ["95+", "50+", "70+", "85+"], c: 3 },
    { q: "1-second delay = conversion loss of:", o: ["2%", "7%", "10%", "5%"], c: 1 },
    { q: "FIRST check for US client store:", o: ["Products", "Logo", "Currency is USD, not INR", "Theme"], c: 2 },
    { q: "Collaborator access code is found in:", o: ["Settings → Users → Collaborators", "Theme", "Products", "Apps"], c: 0 },
    { q: "Hero headline max words:", o: ["Unlimited", "7", "3", "15"], c: 1 },
    { q: "Product page #1 conversion driver (after price):", o: ["Title", "Customer reviews", "Speed", "Images"], c: 1 },
    { q: "Maximum apps for healthy store:", o: ["30+", "20", "5", "10-12"], c: 3 },
    { q: "Test credit card number:", o: ["Random", "4242 4242 4242 4242", "0000...", "1234..."], c: 1 },
    { q: "QA checklist total points:", o: ["100", "40", "60", "50"], c: 2 },
    { q: "Desktop PageSpeed target:", o: ["70+", "90+", "80+", "95+"], c: 1 },
    { q: "Minimum touch target size:", o: ["44px", "20px", "100px", "60px"], c: 0 },
    { q: "Hard refresh solves what % of issues:", o: ["10%", "40%", "80%", "25%"], c: 2 },
    { q: "'expected block close' means:", o: ["Theme broken", "Missing {% endif %} or {% endfor %}", "Server down", "Wrong password"], c: 1 },
    { q: "Custom sections go in which folder:", o: ["Config", "Layout", "Assets", "Sections"], c: 3 },
    { q: "After AI generates code:", o: ["Trust completely", "Test on duplicate theme first", "Skip testing", "Use directly"], c: 1 },
    { q: "P0 priority tasks are:", o: ["Learning", "Production bugs, security, deadlines", "PM questions", "Code reviews"], c: 1 },
    { q: "'It works on my machine' is:", o: ["NOT acceptable", "Good enough", "Developer's right", "Acceptable"], c: 0 },
    { q: "Size guide reduces returns by:", o: ["15%", "5%", "50%", "30%+"], c: 3 }
];

// Export all quizzes
const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];


