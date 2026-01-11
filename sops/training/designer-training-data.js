// UI/UX Designer Training Data - COMPLETE OVERHAUL
// Digital Heroes UI/UX Designer Certification Program
// 10 Tasks, 120 Quiz Questions, Comprehensive Content

const trainingTasks = [
    {
        id: 1,
        title: "Designer Mindset",
        description: "5 Laws of Premium Design",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: Designer Principles section",
            "📖 Study: Creative Ownership & Quality",
            "🔍 YouTube: 'premium ecommerce design principles'"
        ]
    },
    {
        id: 2,
        title: "Color Theory",
        description: "Brand styling & 60-30-10 rule",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read SOP: Brand Styling Process",
            "📖 Read SOP: Color Theory for Ecommerce",
            "🔍 YouTube: 'color psychology in ecommerce'"
        ]
    },
    {
        id: 3,
        title: "Typography System",
        description: "Font pairing & hierarchy",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 35 minutes",
            "📖 Read SOP: Typography System section",
            "🔍 YouTube: 'typography for web design'",
            "🤖 ChatGPT: 'What font pairings work for luxury ecommerce?'"
        ]
    },
    {
        id: 4,
        title: "Layout & Spacing",
        description: "8px grid system & containers",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 35 minutes",
            "📖 Read SOP: Layout & Spacing section",
            "🔍 YouTube: 'web design spacing systems'",
            "🤖 ChatGPT: 'What is the 8px spacing grid system?'"
        ]
    },
    {
        id: 5,
        title: "Trust Elements",
        description: "Conversion rate optimization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read SOP: Trust Elements Design",
            "🔍 YouTube: 'ecommerce trust badges'",
            "🤖 ChatGPT: 'What trust elements increase conversions?'"
        ]
    },
    {
        id: 6,
        title: "Mobile-First Design",
        description: "70% traffic, 375px width",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read SOP: Mobile-First Design section",
            "🔍 YouTube: 'mobile-first design principles'",
            "🤖 ChatGPT: 'Mobile UX best practices for ecommerce'"
        ]
    },
    {
        id: 7,
        title: "Design QA Checklist",
        description: "Visual consistency & polish",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: Design QA Checklist",
            "📖 Read SOP: Design Review Checklist",
            "🤖 ChatGPT: 'What to check before sending design to client?'"
        ]
    },
    {
        id: 8,
        title: "Design Scenarios",
        description: "8 difficult client situations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: Handling Difficult Situations",
            "📖 Read SOP: All 8 scenario scripts",
            "🤖 ChatGPT: 'How to handle difficult design clients?'"
        ]
    },
    {
        id: 9,
        title: "AI Tools & Figma",
        description: "ChatGPT prompts & workflow",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Read SOP: ChatGPT Prompts for Designers",
            "📖 Read SOP: Figma Workflow & Organization",
            "🤖 Practice: Use AI for design direction"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive exam (20 questions)",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60 minutes",
            "📖 Review entire Designer SOP",
            "📖 Memorize 5 Laws of Premium Design",
            "📖 Know all 8 scenario scripts",
            "🎥 Prepare for 30-minute video submission"
        ]
    }
];

// ===============================================
// TASK 1: DESIGNER MINDSET & 5 LAWS
// ===============================================

const task1Content = `
<div class="content-section">
    <img src="images/designer_5_laws.png" alt="5 Laws of Premium Design" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <h2>🎯 Core Philosophy</h2>
    <div class="highlight-box">
        <strong>"Design is not just what it looks like. Design is how it works. And how it CONVERTS."</strong>
    </div>
    
    <h3>📖 The $50,000 Difference in Design</h3>
    <p>Two skincare brands launched in the same month. Same products. Same prices. Same marketing budget.</p>
    <p><strong>Store A:</strong> Basic template, default fonts, stock images, cluttered layout.</p>
    <p><strong>Store B:</strong> Custom color palette, premium typography, lifestyle photography, generous whitespace.</p>
    <p><strong style="color: #10B981;">Results after 30 days:</strong> Store A: 0.8% conversion. Store B: 3.2% conversion (<strong>4x more revenue</strong>)</p>
</div>

<div class="content-section">
    <h2>🎨 THE 5 LAWS OF PREMIUM DESIGN</h2>
    
    <h3>LAW 1: WHITESPACE = LUXURY</h3>
    <p><strong>Crowded = cheap. Breathing room = premium.</strong> When in doubt, add more space. Think Apple, Chanel, Tesla.</p>
    
    <h3>LAW 2: CONSISTENCY IS KING</h3>
    <p>Same fonts, same colors, same button styles, same spacing — <strong>EVERYWHERE</strong>. Inconsistency = amateur.</p>
    
    <h3>LAW 3: HIERARCHY GUIDES THE EYE</h3>
    <p><strong>Most important = biggest and first.</strong> Guide users to what matters. Don't make them think.</p>
    
    <h3>LAW 4: MOBILE FIRST, ALWAYS</h3>
    <p><strong>70% of traffic is mobile.</strong> Design for 375px width FIRST, then scale up to desktop.</p>
    
    <h3>LAW 5: DESIGN FOR CONVERSION, NOT AWARDS</h3>
    <p>A beautiful store that doesn't sell is a <strong>failure</strong>. Every decision should answer: "Will this help visitors buy?"</p>
</div>

<div class="content-section">
    <h2>⭐ Creative Ownership & Quality</h2>
    <p><strong>You own your work 100%:</strong> Colors, typography, layouts, imagery — all YOUR responsibility.</p>
    
    <div class="warning-box">
        <strong>⚠️ Zero Tolerance Policy</strong>
        <p>After 15 days of onboarding: ONE careless mistake on a live design = potential removal from client work.</p>
        <ul>
            <li>No typos in hero text</li>
            <li>No broken images</li>
            <li>No misaligned elements</li>
            <li>Check your work <strong>10x</strong> before delivery</li>
        </ul>
    </div>
    
    <h3>🎯 Task Priority Order</h3>
    <ul>
        <li><strong style="color: #EF4444;">P0:</strong> Revision requests, deadline deliveries, PM/client questions</li>
        <li><strong style="color: #F59E0B;">P1:</strong> Active design work, asset preparation</li>
        <li><strong style="color: #10B981;">P2:</strong> Design system updates, mockup refinements</li>
        <li><strong style="color: #94A3B8;">P3:</strong> Inspiration & learning</li>
    </ul>
</div>
`;

// ===============================================
// TASK 2: COLOR THEORY & BRAND STYLING
// ===============================================

const task2Content = `
<div class="content-section">
    <h2>🎨 The 60-30-10 Color Rule</h2>
    <img src="images/designer_60_30_10.png" alt="60-30-10 Color Rule" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="highlight-box">
        <strong>Perfect Color Balance Every Time</strong>
        <ul>
            <li><strong>60% - Dominant:</strong> Background, large sections (neutral/light)</li>
            <li><strong>30% - Secondary:</strong> Headers, cards, navigation (brand color)</li>
            <li><strong>10% - Accent:</strong> CTAs, buttons, highlights (contrasting/pop)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h2>🎨 Color Psychology by Industry</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Color</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Psychology</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Black/Gold</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Luxury, sophistication</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">High-end, premium</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blue</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Trust, reliability</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tech, healthcare</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Green</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Natural, wellness</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Health, sustainability</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Orange/Red</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Energy, urgency</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sales, food</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Pink/Purple</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Beauty, creative</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Beauty, wellness</td></tr>
    </table>
</div>

<div class="content-section">
    <h2>✅ High Contrast CTAs</h2>
    <ul>
        <li>Add to Cart should <strong>POP</strong></li>
        <li>Use brand's boldest color</li>
        <li>Ensure <strong>4.5:1 contrast ratio</strong></li>
        <li>White or dark text (test both)</li>
    </ul>
    
    <h3>❌ Low Contrast Mistakes</h3>
    <ul>
        <li>Gray text on gray background</li>
        <li>Light green on white</li>
        <li>Blue links on blue headers</li>
    </ul>
</div>
`;

// ===============================================
// TASK 3: TYPOGRAPHY SYSTEM
// ===============================================

const task3Content = `
<div class="content-section">
    <h2>🔤 Typography Hierarchy</h2>
    <img src="images/designer_typography.png" alt="Typography Hierarchy" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="highlight-box">
        <strong>The 2-Font Rule</strong>
        <p>Maximum 2 font families per store. More = amateur, slower load times, visual chaos.</p>
        <p><strong>Formula:</strong> 1 distinctive heading font + 1 clean body font</p>
    </div>
</div>

<div class="content-section">
    <h2>📋 Recommended Font Pairings</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Style</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Heading</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Body</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Luxury/High-End</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Playfair Display</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lato</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Modern/Tech</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Poppins</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Inter</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clean/Minimal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Outfit</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Open Sans</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Friendly/Approachable</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Nunito</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Roboto</td></tr>
    </table>
</div>

<div class="content-section">
    <h2>📏 Font Size Hierarchy</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Element</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Desktop</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">H1 (Hero)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">48-64px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">32-40px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">H2 (Section)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">32-40px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">24-28px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">H3 (Subsection)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">24-28px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">20-22px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Body Text</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">16-18px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>16px (never smaller!)</strong></td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Caption</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">14px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">14px</td></tr>
    </table>
    <p><strong>Line height for body:</strong> 1.5-1.7</p>
</div>
`;

// ===============================================
// TASK 4: LAYOUT & SPACING
// ===============================================

const task4Content = `
<div class="content-section">
    <h2>📐 The Spacing Multiplier System</h2>
    <div class="highlight-box">
        <strong>Use multiples of 8 for all spacing:</strong>
        <p style="font-size: 1.2em; margin-top: 10px;">8px → 16px → 24px → 32px → 48px → 64px</p>
        <p>This creates visual rhythm and consistency throughout the design.</p>
    </div>
</div>

<div class="content-section">
    <h2>📋 Section Spacing Guidelines</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Spacing Type</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Desktop</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Between Sections</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">80-120px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">48-64px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Between Elements</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">24-32px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">16-24px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Card Padding</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">24-32px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">16-20px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Button Padding</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">16px 32px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">14px 24px</td></tr>
    </table>
</div>

<div class="content-section">
    <h2>📐 Grid Systems</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Screen</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Columns</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Gutter</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Desktop (1200px+)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>12 columns</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">24-32px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tablet (768-1199px)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8 columns</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">16-24px</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Mobile (&lt;768px)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4 columns</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">16px</td></tr>
    </table>
    
    <h3>Container Widths</h3>
    <ul>
        <li><strong>Max content width:</strong> 1200-1400px</li>
        <li><strong>Text max-width:</strong> 65-75 characters per line</li>
        <li><strong>Product grids:</strong> 4-5 columns desktop, 2 mobile</li>
    </ul>
</div>
`;

// ===============================================
// TASK 5: TRUST ELEMENTS & CONVERSIONS
// ===============================================

const task5Content = `
<div class="content-section">
    <h2>🛡️ Trust Elements = Conversions</h2>
    <img src="images/designer_trust_elements.png" alt="Trust Elements for Conversions" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="highlight-box">
        <strong>Visitors need to feel SAFE before buying.</strong>
        <p>Trust elements reduce friction and increase confidence.</p>
    </div>
</div>

<div class="content-section">
    <h2>📋 Essential Trust Elements</h2>
    
    <h3>🚚 Free Shipping Badge</h3>
    <p><strong>Location:</strong> Trust bar below hero, product page near ATC</p>
    <p><strong>Copy:</strong> "Free Shipping Over $50" or "Free Express Shipping"</p>
    
    <h3>↩️ Easy Returns Badge</h3>
    <p><strong>Location:</strong> Trust bar, product page, footer</p>
    <p><strong>Copy:</strong> "30-Day Easy Returns" or "Hassle-Free Returns"</p>
    
    <h3>🔒 Secure Payment Badge</h3>
    <p><strong>Location:</strong> Near checkout button, footer</p>
    <p><strong>Copy:</strong> "Secure Checkout" + Visa/MC/PayPal icons</p>
    
    <h3>⭐ Customer Reviews</h3>
    <p><strong>Location:</strong> Homepage section, product pages</p>
    <p><strong>Best Practice:</strong> Star ratings, customer photos, verified badges</p>
</div>

<div class="content-section">
    <h2>💰 The Button That Made $10,000</h2>
    <p>A client's "Add to Cart" button was the <strong>same color as the background</strong> — barely visible.</p>
    <p>Our designer made ONE change: a high-contrast, bold button with subtle animation.</p>
    <p><strong style="color: #10B981;">Result:</strong> Conversion jumped from 1.2% to 2.8% overnight. That single button generated <strong>$10,000 extra revenue that month.</strong></p>
    
    <div class="warning-box">
        <strong>🎯 The Lesson</strong>
        <p>Every pixel matters. The smallest design decision can have massive business impact.</p>
    </div>
</div>
`;

// ===============================================
// TASK 6: MOBILE-FIRST DESIGN
// ===============================================

const task6Content = `
<div class="content-section">
    <h2>📱 Mobile-First Design</h2>
    <img src="images/designer_mobile_first.png" alt="Mobile-First Design" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="warning-box">
        <strong>🚨 70% OF TRAFFIC IS MOBILE</strong>
        <p>If mobile isn't perfect, you're losing 70% of potential sales. Mobile isn't an afterthought — it's the PRIMARY experience.</p>
    </div>
</div>

<div class="content-section">
    <h2>📋 Mobile Design Checklist</h2>
    
    <h3>👆 Touch Targets</h3>
    <ul>
        <li>Button minimum: <strong>44px × 44px</strong></li>
        <li>Link spacing: 8px+ between links</li>
        <li>Form inputs: 48px height minimum</li>
    </ul>
    
    <h3>📱 Layout</h3>
    <ul>
        <li>Single column for text content</li>
        <li><strong>2-column max</strong> for product grids</li>
        <li>Full-width CTAs</li>
        <li>No horizontal scrolling</li>
    </ul>
    
    <h3>🛒 Sticky Add to Cart</h3>
    <ul>
        <li>Fixed at bottom on scroll</li>
        <li>Price + Add to Cart visible</li>
        <li>Doesn't block content</li>
    </ul>
    
    <h3>🔤 Typography</h3>
    <ul>
        <li>Body text: <strong>16px minimum</strong></li>
        <li>Line height: 1.5-1.7</li>
        <li>Readable without zooming</li>
    </ul>
</div>

<div class="content-section">
    <h2>📱 Mobile Width Standards</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Device</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Width</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">iPhone SE</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>375px</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">Primary design width</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">iPhone 12/13/14</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">390px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Test width</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tablet</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">768px</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Secondary</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Desktop</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1200px+</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Scale up</td></tr>
    </table>
</div>
`;

// ===============================================
// TASK 7: DESIGN QA CHECKLIST
// ===============================================

const task7Content = `
<div class="content-section">
    <h2>✅ Design QA Checklist</h2>
    
    <h3>🎨 Visual Consistency</h3>
    <ul>
        <li>Same fonts throughout</li>
        <li>Brand colors applied correctly</li>
        <li>Consistent button styles</li>
        <li>Uniform spacing</li>
        <li>Aligned elements</li>
    </ul>
    
    <h3>📸 Images</h3>
    <ul>
        <li>No pixelation</li>
        <li>Consistent aspect ratios</li>
        <li>Compressed for speed</li>
        <li>No broken images</li>
    </ul>
    
    <h3>📱 Responsive</h3>
    <ul>
        <li>Tested on real iPhone</li>
        <li>Tested on real Android</li>
        <li>No horizontal scroll</li>
        <li>Touch targets 44px+</li>
    </ul>
    
    <h3>✨ Polish</h3>
    <ul>
        <li>Hover states work</li>
        <li>Smooth transitions</li>
        <li><strong>No placeholder content / Lorem Ipsum</strong></li>
        <li>Favicon set</li>
    </ul>
</div>

<div class="content-section">
    <h2>⚠️ Common Design Problems & Fixes</h2>
    
    <h3>Problem: Store Looks "Template-y"</h3>
    <p><strong>Fix:</strong> Customize every section with brand colors, use unique typography, replace stock photos.</p>
    
    <h3>Problem: Mobile Layout Broken</h3>
    <p><strong>Fix:</strong> Test on real devices, use percentage widths, ensure images max-width: 100%.</p>
    
    <h3>Problem: Images Look Blurry</h3>
    <p><strong>Fix:</strong> Request 2x resolution from client, avoid upscaling small images.</p>
</div>
`;

// ===============================================
// TASK 8: DESIGN SCENARIOS
// ===============================================

const task8Content = `
<div class="content-section">
    <h2>🔴 8 DIFFICULT SITUATIONS WITH SCRIPTS</h2>
    
    <h3>SCENARIO 1: "I'll Know It When I See It"</h3>
    <p><strong>Response:</strong> "Let me show you 3 different directions. Please point to elements you like in each. This will help me understand your vision."</p>
    
    <h3>SCENARIO 2: Client Wants Bad Design</h3>
    <p><strong>Response:</strong> "Thank you for sharing your vision! I'd like to suggest some enhancements that will improve conversions. Can I show you some options?"</p>
    
    <h3>SCENARIO 3: Multiple Stakeholders</h3>
    <p><strong>Response:</strong> "Could you consolidate into one unified feedback document? This ensures we stay on timeline."</p>
    
    <h3>SCENARIO 4: Design Won't Convert</h3>
    <p><strong>Response:</strong> "I want to share some data: [stat]. Your current request may impact sales negatively. I recommend [alternative]."</p>
</div>

<div class="content-section">
    <h3>SCENARIO 5: Endless Revisions</h3>
    <p><strong>Response:</strong> "We've completed the included revisions. I'll check with the PM about options for additional design work."</p>
    
    <h3>SCENARIO 6: Disapproves Everything</h3>
    <p><strong>Response:</strong> "What specific elements aren't working? Can you show me examples of designs you love?"</p>
    
    <h3>SCENARIO 7: Free Concepts Before Order</h3>
    <p><strong>Response:</strong> "We don't create custom designs before project confirmation. Our portfolio demonstrates our quality."</p>
    
    <h3>SCENARIO 8: Low Quality Assets</h3>
    <p><strong>Response:</strong> "To achieve premium results, I need high-resolution assets: Logo in SVG/PNG, photos min 2000px wide."</p>
</div>

<div class="content-section">
    <h2>🔄 Client Feedback Translation</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client Says</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">They Mean</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Your Action</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It doesn't pop"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Needs more contrast</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Increase saturation, add bold accent</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It looks too busy"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Too many elements</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add whitespace, reduce colors</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"It feels cheap"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lacks premium cues</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add spacing, upgrade typography</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Make logo bigger"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">More brand presence</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Add brand colors elsewhere</td></tr>
    </table>
</div>
`;

// ===============================================
// TASK 9: AI TOOLS & FIGMA WORKFLOW
// ===============================================

const task9Content = `
<div class="content-section">
    <h2>🤖 ChatGPT Prompts for Designers</h2>
    
    <h3>Design Direction Prompt</h3>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6; margin: 15px 0; font-family: monospace; font-size: 0.85em;">
        <p>"I'm designing a Shopify store for:</p>
        <p>Industry: [e.g., fashion]</p>
        <p>Target audience: [e.g., women 25-35]</p>
        <p>Brand vibe: [e.g., minimalist]</p>
        <p>Give me: Color palette, font pairing, layout style, hero approach, trust elements."</p>
    </div>
    
    <h3>CRO Review Prompt</h3>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 15px; border-radius: 8px; border-left: 4px solid #10B981; margin: 15px 0; font-family: monospace; font-size: 0.85em;">
        <p>"Review my [homepage/product page] for conversion optimization:</p>
        <p>1. Is there clear visual hierarchy?</p>
        <p>2. Are CTAs prominent and above fold?</p>
        <p>3. What trust elements are missing?</p>
        <p>4. What would increase conversions?"</p>
    </div>
</div>

<div class="content-section">
    <h2>🎨 Figma File Structure</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Contents</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">📋 Cover</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Project name, status, date</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">📌 Moodboard</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Reference screenshots, inspiration</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎨 Style Guide</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Colors, fonts, spacing, components</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">🏠 Desktop</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">All desktop page designs</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">📱 Mobile</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">All mobile page designs</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">🗑️ Archive</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Old versions, rejected concepts</td></tr>
    </table>
    
    <h3>✅ Naming Conventions</h3>
    <ul>
        <li><strong>Frames:</strong> Page-Section (e.g., "Home-Hero")</li>
        <li><strong>Components:</strong> Type/Name (e.g., "Button/Primary")</li>
        <li><strong>Never:</strong> "Frame 432", "Untitled", "Final-v2-FINAL"</li>
    </ul>
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
            <li>✅ Review entire Designer SOP</li>
            <li>📖 Memorize 5 Laws of Premium Design</li>
            <li>📖 Know all 8 scenario scripts</li>
            <li>📖 Understand QA checklist categories</li>
        </ul>
    </div>
    
    <h3>🎥 Video Submission (30 minutes)</h3>
    <ol>
        <li><strong>Introduction (2 min):</strong> Name, design background, what you learned</li>
        <li><strong>SOP Walkthrough (10 min):</strong> 5 Laws, QA checklist, mobile-first</li>
        <li><strong>Design Review (15 min):</strong> Review YOUR past design vs our principles</li>
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
        <li>✅ Video approved by senior designer</li>
    </ul>
    
    <h3>📈 Post-Certification Pathway</h3>
    <ul>
        <li><strong>Week 1-2:</strong> Create designs with senior review</li>
        <li><strong>Week 3-4:</strong> Handle 1-2 projects with QA oversight</li>
        <li><strong>Month 2:</strong> Manage multiple projects</li>
        <li><strong>Month 3+:</strong> Full Designer — independent ownership</li>
    </ul>
    
    <div class="highlight-box">
        <strong>🎯 Remember the 5 Laws</strong>
        <ol>
            <li>WHITESPACE = LUXURY</li>
            <li>CONSISTENCY IS KING</li>
            <li>HIERARCHY GUIDES THE EYE</li>
            <li>MOBILE FIRST, ALWAYS (70%)</li>
            <li>DESIGN FOR CONVERSION</li>
        </ol>
    </div>
</div>
`;

// Export content
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
// ===============================================

const task1Quiz = [
    { q: "WHITESPACE = LUXURY means:", o: ["Add as many elements as possible", "Crowded = cheap, Breathing room = premium", "White backgrounds only", "No images allowed"], c: 1 },
    { q: "What percentage of ecommerce traffic is mobile?", o: ["30%", "50%", "70%", "90%"], c: 2 },
    { q: "CONSISTENCY IS KING means:", o: ["Use the same design for every client", "Same fonts, colors, button styles, spacing — EVERYWHERE", "Never change designs", "Copy competitor designs"], c: 1 },
    { q: "Every design decision should answer:", o: ["Is this award-winning?", "Will this help visitors buy?", "Is this my favorite color?", "Will this impress other designers?"], c: 1 },
    { q: "After 15 days of onboarding, ONE careless mistake can result in:", o: ["A warning", "Extra training", "Potential removal from client work", "Nothing serious"], c: 2 },
    { q: "Maximum font families per store:", o: ["1", "2", "5", "Unlimited"], c: 1 },
    { q: "Premium design includes all EXCEPT:", o: ["Generous whitespace", "Clear visual hierarchy", "Crowded layouts with many elements", "High-quality imagery"], c: 2 },
    { q: "P0 (highest priority) tasks for designers are:", o: ["Learning and inspiration", "Revision requests, deadline deliveries, PM questions", "Design system updates", "Mockup refinements"], c: 1 },
    { q: "Peer review before delivery is:", o: ["Optional", "Recommended — fresh eyes catch what you missed", "Only for juniors", "Not needed"], c: 1 },
    { q: "A beautiful store that doesn't sell is:", o: ["A success", "A failure", "Good enough", "Award-worthy"], c: 1 }
];

const task2Quiz = [
    { q: "The 60-30-10 rule means:", o: ["60 colors, 30 fonts, 10 images", "60% dominant, 30% secondary, 10% accent color", "60 pages, 30 sections, 10 products", "Random color distribution"], c: 1 },
    { q: "Blue color psychology represents:", o: ["Energy and urgency", "Trust, reliability, technology", "Luxury and sophistication", "Natural and organic"], c: 1 },
    { q: "Black/Gold colors are best for:", o: ["Kids products", "Food and beverage", "Luxury and premium brands", "Health and wellness"], c: 2 },
    { q: "Add to Cart button should:", o: ["Blend with background", "POP with high contrast", "Be the same color as text", "Be hidden"], c: 1 },
    { q: "If client doesn't provide brand colors, you should:", o: ["Use random colors", "Extract from logo or create complementary palette", "Skip color entirely", "Use default theme colors"], c: 1 },
    { q: "Orange/Red colors create:", o: ["Calm and trust", "Energy, urgency, appetite", "Luxury feel", "Natural vibe"], c: 1 },
    { q: "Minimum contrast ratio for CTAs:", o: ["2:1", "3:1", "4.5:1", "No minimum"], c: 2 },
    { q: "Green colors work best for:", o: ["Tech/Gadgets", "Health, wellness, sustainability", "Luxury brands", "Fashion"], c: 1 },
    { q: "Primary color is used for:", o: ["Backgrounds only", "Buttons, links, key CTAs", "Borders and dividers", "Text only"], c: 1 },
    { q: "The 60% (dominant color) is usually:", o: ["The brightest color", "Background, large sections (neutral/light)", "CTA buttons", "Accent highlights"], c: 1 }
];

const task3Quiz = [
    { q: "Maximum font families per store:", o: ["1", "2", "4", "Unlimited"], c: 1 },
    { q: "The 2-Font Rule formula is:", o: ["2 body fonts", "1 distinctive heading font + 1 clean body font", "2 heading fonts", "Any 2 fonts"], c: 1 },
    { q: "Minimum body text size:", o: ["10px", "12px", "16px (never smaller!)", "20px"], c: 2 },
    { q: "Desktop H1 (Hero) size range:", o: ["16-24px", "24-32px", "48-64px", "100-120px"], c: 2 },
    { q: "For luxury/high-end stores, recommended heading font:", o: ["Comic Sans", "Playfair Display", "Arial", "Impact"], c: 1 },
    { q: "Mobile H1 size range:", o: ["16-20px", "32-40px", "48-64px", "80-100px"], c: 1 },
    { q: "Body text line height should be:", o: ["1.0", "1.5-1.7", "3.0", "No line height needed"], c: 1 },
    { q: "For modern/tech stores, recommended font pair:", o: ["Playfair Display + Lato", "Poppins + Inter", "Comic Sans + Arial", "Times New Roman + Georgia"], c: 1 },
    { q: "More than 2 fonts creates:", o: ["Better design", "Visual chaos, slower load times, amateur look", "Premium feel", "No difference"], c: 1 },
    { q: "Small/Caption text size:", o: ["8px", "14px", "20px", "24px"], c: 1 }
];

const task4Quiz = [
    { q: "The Spacing Multiplier System uses multiples of:", o: ["5px", "8px", "10px", "12px"], c: 1 },
    { q: "Desktop spacing between sections:", o: ["8-16px", "24-32px", "80-120px", "200-300px"], c: 2 },
    { q: "Max content width should be:", o: ["600-800px", "1200-1400px", "2000-2400px", "Full width always"], c: 1 },
    { q: "Text max-width for readability:", o: ["20-30 characters per line", "65-75 characters per line", "100-150 characters per line", "No limit"], c: 1 },
    { q: "Desktop product grids should have:", o: ["1-2 columns", "4-5 columns", "8-10 columns", "Single column only"], c: 1 },
    { q: "Mobile product grids should have:", o: ["1 column only", "2 columns", "5 columns", "Same as desktop"], c: 1 },
    { q: "Card padding on desktop:", o: ["4-8px", "24-32px", "100-120px", "No padding"], c: 1 },
    { q: "Button padding format:", o: ["8px all around", "16px 32px (vertical horizontal)", "100px", "No padding needed"], c: 1 },
    { q: "Mobile spacing between sections:", o: ["8-16px", "48-64px", "80-120px", "200px"], c: 1 },
    { q: "Desktop grid typically uses:", o: ["4 columns", "8 columns", "12 columns", "20 columns"], c: 2 }
];

const task5Quiz = [
    { q: "Trust elements help with:", o: ["Making design prettier", "Reducing friction and increasing buyer confidence", "Adding more content", "Slowing down the site"], c: 1 },
    { q: "Free Shipping badge should appear:", o: ["Only in footer", "Trust bar below hero AND product page near ATC", "Only on checkout", "Nowhere visible"], c: 1 },
    { q: "Secure Payment badge includes:", o: ["Only text", "Lock icon + payment logos (Visa/MC/PayPal)", "Just an image", "No icon needed"], c: 1 },
    { q: "Customer reviews with photos are:", o: ["Not needed", "Powerful social proof that builds trust", "Optional", "Bad for conversions"], c: 1 },
    { q: "Trust bar placement:", o: ["Only in footer", "Below hero section", "Hidden", "Only on mobile"], c: 1 },
    { q: "Return policy badge copy example:", o: ["No returns", "30-Day Easy Returns", "Call us maybe", "Ask your lawyer"], c: 1 },
    { q: "Add to Cart button should:", o: ["Blend with background", "Be high-contrast and clearly visible", "Be small and hidden", "Match text color"], c: 1 },
    { q: "Secure payment badge location on product page:", o: ["Top of page only", "Near Add to Cart button", "Only in footer", "Not on product page"], c: 1 },
    { q: "Reviews should show:", o: ["Only negative reviews", "Star ratings, customer photos, verified badges", "No photos", "Fake reviews"], c: 1 },
    { q: "The button that made $10,000 was changed to:", o: ["Smaller and hidden", "High-contrast, bold with subtle animation", "Same color as background", "Removed entirely"], c: 1 }
];

const task6Quiz = [
    { q: "What percentage of ecommerce traffic is mobile?", o: ["30%", "50%", "70%", "90%"], c: 2 },
    { q: "Minimum touch target size:", o: ["20px × 20px", "44px × 44px", "60px × 60px", "100px × 100px"], c: 1 },
    { q: "Primary mobile design width:", o: ["320px", "375px", "500px", "768px"], c: 1 },
    { q: "Mobile body text minimum size:", o: ["10px", "12px", "16px", "20px"], c: 2 },
    { q: "Mobile product grids should have:", o: ["1 column only", "2 columns maximum", "5 columns", "Same as desktop"], c: 1 },
    { q: "Sticky Add to Cart should be:", o: ["Hidden on mobile", "Fixed at bottom on scroll", "Only at top", "Not needed"], c: 1 },
    { q: "Horizontal scrolling on mobile is:", o: ["Good for navigation", "Never allowed — bad UX", "Recommended", "Optional"], c: 1 },
    { q: "Mobile form input minimum height:", o: ["24px", "48px", "100px", "No minimum"], c: 1 },
    { q: "Thumb zone design places primary actions:", o: ["At the top (hard to reach)", "At the bottom (easy to reach)", "In the middle only", "Hidden"], c: 1 },
    { q: "Mobile-first means:", o: ["Design desktop first, then shrink", "Design for 375px FIRST, then scale up to desktop", "Mobile is optional", "Same design for all screens"], c: 1 }
];

const task7Quiz = [
    { q: "QA checklist includes checking:", o: ["Only colors", "Visual consistency, images, responsive, polish", "Only fonts", "Just the homepage"], c: 1 },
    { q: "Placeholder text like Lorem Ipsum should be:", o: ["Left in final design", "Removed — no placeholder content allowed", "Made smaller", "Hidden"], c: 1 },
    { q: "Before sharing with client, mobile should be tested at:", o: ["1200px width", "375px width", "Any width", "Desktop only"], c: 1 },
    { q: "Images should be:", o: ["Any quality", "Compressed and optimized", "Maximum file size", "Blurry is fine"], c: 1 },
    { q: "Brand colors must be:", o: ["Different on each page", "Applied consistently throughout", "Random", "Only on homepage"], c: 1 },
    { q: "Store looks 'template-y' — fix by:", o: ["Using more default settings", "Customizing with brand colors, unique fonts, custom imagery", "Adding more stock photos", "Keeping defaults"], c: 1 },
    { q: "Hover states should:", o: ["Be ignored", "Work properly", "Be removed", "Only work on mobile"], c: 1 },
    { q: "Spelling errors in design are:", o: ["Acceptable", "Not allowed — must be checked before delivery", "Client's problem", "Normal"], c: 1 },
    { q: "To fix blurry images:", o: ["Upscale them", "Request 2x resolution from client", "Make them smaller", "Add blur effect"], c: 1 },
    { q: "CTAs should be:", o: ["Hidden", "Visible and above fold", "Only in footer", "Same color as background"], c: 1 }
];

const task8Quiz = [
    { q: "Client says 'I'll know it when I see it.' You should:", o: ["Start designing randomly", "Show 3 different directions and ask which elements they like", "Give up", "Ask PM to cancel"], c: 1 },
    { q: "Multiple stakeholders giving conflicting feedback. You should:", o: ["Try to please everyone", "Ask for consolidated feedback into one document", "Ignore all feedback", "Pick your favorite opinion"], c: 1 },
    { q: "Client wants design that won't convert. You should:", o: ["Just do what they want", "Advise with data, document your recommendation if they insist", "Refuse to work", "Don't say anything"], c: 1 },
    { q: "Endless revision requests beyond included rounds. You should:", o: ["Do unlimited free revisions", "Route through PM for additional quote", "Ignore the requests", "Cancel the project"], c: 1 },
    { q: "Client wants free design concepts before ordering. You should:", o: ["Create free designs", "Route to Sales — no spec work, portfolio demonstrates quality", "Do a quick mockup", "Negotiate half payment"], c: 1 },
    { q: "Client provides low-quality assets. You should:", o: ["Use them anyway", "Request high-resolution assets before proceeding", "Upscale and hope for best", "Skip those sections"], c: 1 },
    { q: "Client says 'It doesn't pop' — they mean:", o: ["Remove all colors", "Needs more contrast or vibrancy", "Make it smaller", "Add more text"], c: 1 },
    { q: "Client disapproves of everything — you should:", o: ["Keep guessing", "Ask for specific examples of designs they love", "Give up", "Do the opposite"], c: 1 },
    { q: "Client wants auto-playing music. You should:", o: ["Add it", "Push back — it causes instant bounce, never do this", "Add it quietly", "Add loud music"], c: 1 },
    { q: "'Make the logo bigger' usually means:", o: ["Make logo 10x bigger", "They want more brand presence — add brand colors elsewhere", "Remove the logo", "Only show logo"], c: 1 }
];

const task9Quiz = [
    { q: "ChatGPT can help designers with:", o: ["Only code", "Design direction, color palettes, CRO review, microcopy", "Nothing design-related", "Only client emails"], c: 1 },
    { q: "Figma file should include a page called:", o: ["Random stuff", "Style Guide (colors, fonts, spacing, components)", "Untitled", "Final-v2-FINAL"], c: 1 },
    { q: "Correct layer naming for a hero section frame:", o: ["Frame 432", "Home-Hero", "Untitled", "Rectangle 17"], c: 1 },
    { q: "Moodboard page is used for:", o: ["Final designs", "Reference screenshots and inspiration for client approval", "Code", "Deleted content"], c: 1 },
    { q: "Tool for color palette generation:", o: ["Photoshop only", "Coolors.co", "Microsoft Word", "Excel"], c: 1 },
    { q: "TinyPNG is used for:", o: ["Creating colors", "Image compression", "Font selection", "Background removal"], c: 1 },
    { q: "Archive page in Figma contains:", o: ["Final approved designs", "Old versions and rejected concepts (internal only)", "Client feedback", "Live designs"], c: 1 },
    { q: "Remove.bg is used for:", o: ["Color generation", "Background removal", "Font selection", "Compression"], c: 1 },
    { q: "End of day design workflow includes:", o: ["Leaving work incomplete", "Respond to revisions, update Slack, prepare tomorrow", "Starting new projects", "Deleting files"], c: 1 },
    { q: "Component naming format:", o: ["Thing 1", "Type/Name (e.g., Button/Primary)", "Random", "Final"], c: 1 }
];

const task10Quiz = [
    { q: "WHITESPACE = LUXURY means:", o: ["Add more elements", "Crowded = cheap, Breathing room = premium", "White only", "No images"], c: 1 },
    { q: "Mobile traffic percentage:", o: ["30%", "50%", "70%", "90%"], c: 2 },
    { q: "Maximum font families:", o: ["1", "2", "5", "Unlimited"], c: 1 },
    { q: "Minimum body text size:", o: ["10px", "12px", "16px", "20px"], c: 2 },
    { q: "The 60-30-10 rule is for:", o: ["Font sizes", "Color balance (60% dominant, 30% secondary, 10% accent)", "Spacing", "Images"], c: 1 },
    { q: "Minimum touch target size:", o: ["20px", "44px", "60px", "100px"], c: 1 },
    { q: "8px Spacing Multiplier means using:", o: ["Random spacing", "Multiples of 8 (8, 16, 24, 32, 48, 64)", "Only 8px", "No spacing"], c: 1 },
    { q: "Trust elements include:", o: ["More products", "Free shipping, easy returns, secure payment badges", "More colors", "Animations"], c: 1 },
    { q: "Primary mobile design width:", o: ["320px", "375px", "500px", "768px"], c: 1 },
    { q: "Blue color represents:", o: ["Energy", "Trust, reliability, technology", "Luxury", "Natural"], c: 1 },
    { q: "Client says 'I'll know it when I see it' — you should:", o: ["Guess", "Show 3 different directions", "Cancel", "Wait"], c: 1 },
    { q: "Multiple stakeholders with conflicting feedback:", o: ["Please everyone", "Ask for consolidated feedback", "Ignore", "Pick one"], c: 1 },
    { q: "Endless revisions beyond included rounds:", o: ["Free revisions", "Route through PM for additional quote", "Ignore", "Cancel"], c: 1 },
    { q: "Low-quality assets from client:", o: ["Use anyway", "Request high-resolution before proceeding", "Upscale", "Skip"], c: 1 },
    { q: "Figma Style Guide page contains:", o: ["Deleted files", "Colors, fonts, spacing, components", "Random", "Only text"], c: 1 },
    { q: "Correct layer naming:", o: ["Frame 432", "Home-Hero", "Untitled", "Final-v3"], c: 1 },
    { q: "P0 priority for designers:", o: ["Learning", "Revision requests, deadline deliveries, PM questions", "Inspiration", "System updates"], c: 1 },
    { q: "After 15 days, ONE careless mistake can result in:", o: ["Warning", "Potential removal from client work", "Nothing", "Bonus"], c: 1 },
    { q: "Add to Cart button should:", o: ["Blend in", "Be high-contrast and clearly visible", "Be hidden", "Match text"], c: 1 },
    { q: "Design for conversion means:", o: ["Win awards", "Every decision answers 'Will this help visitors buy?'", "Look pretty", "Use many colors"], c: 1 }
];

// Export all quizzes
const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];

