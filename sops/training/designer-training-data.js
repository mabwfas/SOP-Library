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
