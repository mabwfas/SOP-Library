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
