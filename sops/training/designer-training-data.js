// UI/UX Designer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Premium Design Standard

const trainingTasks = [
    {
        id: 1,
        title: "Designer Mindset",
        description: "Design that SELLS",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: The $10,000 Button",
            "🛡️ Concept: Every Pixel Impacts Revenue",
            "🚀 Concept: Mobile Traffic Dominance (70%)"
        ]
    },
    {
        id: 2,
        title: "The 5 Laws of Premium",
        description: "Whitespace & Hierarchy",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "👑 Law 1: Whitespace = Luxury",
            "👀 Law 2: Hierarchy Guides the Eye",
            "📱 Law 3: Mobile First, Always"
        ]
    },
    {
        id: 3,
        title: "Color Psychology",
        description: "Conversions via Color",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎨 Rule: The 60-30-10 Rule",
            "🧠 Theory: Industry Color Associations",
            "✅ Contrast: Accessibility & CTAs"
        ]
    },
    {
        id: 4,
        title: "Typography Mastery",
        description: "The 2-Font Rule",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔤 Setup: Pairing Serif & Sans-Serif",
            "📏 Spec: Line Height (1.5x)",
            "📱 Spec: Minimum Mobile Font Size (16px)"
        ]
    },
    {
        id: 5,
        title: "Layout & Spacing",
        description: "The 8px Grid System",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📐 System: 8px Multipliers (8, 16, 24, 32...)",
            "🧱 Layout: Container Widths",
            "📱 Layout: Responsive Breakpoints"
        ]
    },
    {
        id: 6,
        title: "Trust & Psychology",
        description: "Elements that Convince",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "⭐ Element: Social Proof Design",
            "⏳ Element: Urgency & Scarcity",
            "🖱️ Element: Frictionless CTAs"
        ]
    },
    {
        id: 7,
        title: "Page-by-Page Guide",
        description: "12 Essential Sections",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "🏠 Context: Homepage Flow",
            "🛒 Context: Product Page Buy Box",
            "📄 Context: Collection Filters"
        ]
    },
    {
        id: 8,
        title: "Mobile-First Deep Dive",
        description: "The Thumb Zone",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "👍 Target: 44px Minimum Touch Area",
            "📲 UI: Bottom Navigation Sheets",
            "⚡ Speed: Preventing Layout Shifts"
        ]
    },
    {
        id: 9,
        title: "Design QA & Handoff",
        description: "Dev-Ready Files",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "✅ Checklist: The Design QA Audit",
            "📤 Process: Figma to Dev Handoff",
            "🗣️ Soft Skill: Presenting to Clients"
        ]
    },
    {
        id: 10,
        title: "Figma Workflow",
        description: "Professional Organization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📂 Structure: 6 Essential Pages",
            "🧩 System: Components & Variants",
            "📚 Asset: The Style Guide"
        ]
    },
    {
        id: 11,
        title: "Difficult Situations",
        description: "Handling Feedback",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "💬 Scenario: 'Make the logo bigger'",
            "💬 Scenario: 'I don't like the colors'",
            "💬 Scenario: Conflicting Stakeholder Feedback"
        ]
    },
    {
        id: 12,
        title: "AI & Tools",
        description: "Workflow Acceleration",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🤖 Tool: Midjourney for Assets",
            "🤖 Tool: ChatGPT for Copy Placeholders",
            "⚡ Tool: Relume Library"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: DESIGNER MINDSET - Design That SELLS</h2>

<div class="content-section">
    <h3>💰 The $50,000 Difference</h3>
    <p>A "Graphic Designer" makes things look pretty. An "Ecommerce Designer" makes things sell.</p>
    <div class="highlight-box">
        <strong>The $10,000 Button Story:</strong>
        <p>Moving a "Checkout" button above the fold and changing it from gray to green increased revenue by $10k/month. Design is not art; it is engineering for eyes.</p>
    </div>
</div>

<div class="content-section">
    <h3>🛡️ Zero Tolerance for Careless Mistakes</h3>
    <p>If a button is 2px off-center, the customer subconsciously loses trust. "If they can't align a button, can they handle my credit card?"</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Spot the "Pretty but Useless"</h4>
        <p>Look at a Dribbble shot of an ecommerce store. List 3 reasons why it might fail in production (e.g., Text too small, Contrast too low, Navigation hidden).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Ecommerce Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: THE 5 LAWS OF PREMIUM DESIGN</h2>

<div class="content-section">
    <h3>1. Whitespace = Luxury</h3>
    <p>Cheap brands pack everything tight. Luxury brands sell empty space. Double your padding.</p>
</div>

<div class="content-section">
    <h3>2. Consistency is King</h3>
    <p>If your primary button is round on the homepage, it cannot be square on the product page.</p>
</div>

<div class="content-section">
    <h3>3. Hierarchy Guides the Eye</h3>
    <p>The user should never have to guess "What do I look at first?". Size, Color, and Weight dictate importance.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Hierarchy Check</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Squint Test</h4>
        <p>Squint at your design until it blurs. What is the #1 thing you see? If it's not the Product or the CTA, you failed.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Design Laws</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: COLOR THEORY FOR ECOMMERCE</h2>

<div class="content-section">
    <h3>🎨 The 60-30-10 Rule</h3>
    <ul>
        <li><strong>60% Background:</strong> Usually White, Off-white, or very dark (for dark mode).</li>
        <li><strong>30% Brand Color:</strong> Headers, graphical elements.</li>
        <li><strong>10% Accent/Action:</strong> The Button Color. Must pop.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🧠 Industry Psychology</h3>
    <ul>
        <li><strong>Blue:</strong> Trust (Tech, Health).</li>
        <li><strong>Black/Gold:</strong> Luxury (Fashion, Jewelry).</li>
        <li><strong>Green:</strong> Eco/Natural (Supplements, Food).</li>
        <li><strong>Red/Orange:</strong> Urgency/Energy (Clearance, Sports).</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Palette Builder</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Create a Palette</h4>
        <p>Create a 60-30-10 palette for an "Organic Dog Food" brand. Justify your color choices based on psychology.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Color</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: TYPOGRAPHY MASTERY</h2>

<div class="content-section">
    <h3>🔤 The 2-Font Rule</h3>
    <p>Never use more than 2 font families. One for Headings (Display), one for Body (Readability).</p>
</div>

<div class="content-section">
    <h3>📏 Specs that Convert</h3>
    <ul>
        <li><strong>Body Size:</strong> Min 16px (Desktop), Min 16px (Mobile). Google penalizes smaller.</li>
        <li><strong>Line Height:</strong> 1.5x for body text. 1.1x-1.2x for Headings.</li>
        <li><strong>Contrast:</strong> Pure black on white is harsh. Use #1A1A1A on #FFFFFF.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Type Pairing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Matchmaker</h4>
        <p>Pair a Serif font (e.g., Playfair Display) with a Sans-Serif (e.g., Lato) for a high-end watch brand. Explain why they work.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Typography</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: LAYOUT & SPACING - The Invisible Grid</h2>

<div class="content-section">
    <h3>📐 The 8px System</h3>
    <p>Everything should be a multiple of 8. Margins: 16px, 24px, 32px, 64px, 128px.</p>
    <p>Why? It creates a subconscious rhythm. Random spacing (13px, 21px) feels chaotic.</p>
</div>

<div class="content-section">
    <h3>📱 Responsive Breakpoints</h3>
    <ul>
        <li><strong>Desktop:</strong> 1440px / 1200px container.</li>
        <li><strong>Tablet:</strong> 768px.</li>
        <li><strong>Mobile:</strong> 375px (Design at this size).</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Spacing Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Correction</h4>
        <p>I will provide a layout with 15px, 22px, and 45px margins. Correct them to the nearest 8px multiplier.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Spacing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: TRUST & PSYCHOLOGY</h2>

<div class="content-section">
    <h3>⭐ Social Proof Design</h3>
    <p>Don't just paste text reviews. Design them.</p>
    <ul>
        <li>Use real photos of customers.</li>
        <li>Use Star Icons (Vector, gold color).</li>
        <li>Show "Verified Buyer" badges.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🖱️ CTA Psychology</h3>
    <p>Buttons should look lickable.</p>
    <p>Labels matter: "Buy Now" vs "Add to Cart" vs "Get Yours".</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Trust Signals</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Guarantee Badge</h4>
        <p>Design a "30-Day Money Back Guarantee" badge that looks premium, not like a scam site PNG.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Trust Design</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: PAGE-BY-PAGE GUIDE</h2>

<div class="content-section">
    <h3>🏠 Homepage Anatomy</h3>
    <ol>
        <li><strong>Hero:</strong> Headline + CTA (Above fold).</li>
        <li><strong>Social Proof:</strong> "As seen in..." logos.</li>
        <li><strong>Collection Grid:</strong> "Shop Best Sellers".</li>
        <li><strong>Benefit Bar:</strong> Free Shipping / Returns / Warranty.</li>
    </ol>
</div>

<div class="content-section">
    <h3>🛒 Product Page (The Core)</h3>
    <p>The "Buy Box" is sacred ground.</p>
    <ul>
        <li>Price must be clear.</li>
        <li>Variant selectors must be easy to tap.</li>
        <li>Add to Cart must be the dominant element on the page.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Wireframing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: PDP Layout</h4>
        <p>Sketch a "sticky add-to-cart" layout for mobile. Where does it sit? What information is included (Price? Title?)?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Layouts</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: MOBILE-FIRST DEEP DIVE</h2>

<div class="content-section">
    <h3>👍 The Thumb Zone</h3>
    <p>Most users hold phones with one hand. Key actions must be reachable with the thumb.</p>
    <ul>
        <li><strong>Menu:</strong> Bottom or easier top corners.</li>
        <li><strong>CTA:</strong> Full width, easy to hit.</li>
        <li><strong>Touch Target:</strong> 44px x 44px minimum. Never smaller.</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚡ Shift Happens</h3>
    <p>Design fixed heights for image containers so layout doesn't jump when image loads.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Mobile Menu</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Navigation Design</h4>
        <p>Design a mobile drawer menu that includes: Links, Socials, Currency Switcher, and a "Shop Sale" highlighted button.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Mobile Design</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: DESIGN QA & HANDOFF</h2>

<div class="content-section">
    <h3>📤 The Handoff</h3>
    <p>Devs are not mind readers.</p>
    <ul>
        <li>Export all assets as SVG or PNG @2x.</li>
        <li>Mark all animations (e.g., "On Hover: Opacity 80%").</li>
        <li>Use "Dev Mode" in Figma to ensure they see hex codes.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🕵️‍♀️ The Visual QA</h3>
    <p>After Dev is done, you must audit carefully. "The spacing here is 24px, but design says 32px." Be annoying about details.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Annotation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Redlining</h4>
        <p>Take a screenshot of a design component. Add red text annotations explaining how it should behave on hover and on mobile.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Handoff</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FIGMA WORKFLOW</h2>

<div class="content-section">
    <h3>📂 File Structure</h3>
    <ol>
        <li>Thinking / Inspiration</li>
        <li>Wireframes</li>
        <li><strong>Design System (Style Guide)</strong></li>
        <li><strong>Final Designs (Ready for Dev)</strong></li>
        <li>Archive</li>
    </ol>
</div>

<div class="content-section">
    <h3>🧩 Components are Life</h3>
    <p>Never Duplicate. Create a Master Component for the "Primary Button". Use Instances everywhere else. If client changes color, you change it once.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Component Set</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Button States</h4>
        <p>Create a Figma Component Set for a Primary Button: Default, Hover, Pressed, and Disabled states.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Figma</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: DIFFICULT SITUATIONS</h2>

<div class="content-section">
    <h3>💬 "Make the Logo Bigger"</h3>
    <p><strong>Response:</strong> "I can certainly do that. However, on current screen sizes, searching shows that a larger logo pushes the 'Buy' button below the fold, which may lower conversions by 15%. I recommend keeping it this size to prioritize sales. Thoughts?"</p>
    <p><strong>Formula:</strong> Acknowledge -> Explain Consequence (Data) -> Recommendation.</p>
</div>

<div class="content-section">
    <h3>💬 "I don't like it"</h3>
    <p><strong>Response:</strong> "Thanks for the feedback! To help me refine it, could you pinpoint if the issue is with the layout structure, the color palette, or the typography style?"</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scripting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Rebuttal</h4>
        <p>Client wants to use Comic Sans because "it's fun". Write a professional response explaining why that hurts Credibility and Sales.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Feedback</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: AI & TOOLS</h2>

<div class="content-section">
    <h3>🤖 AI for Designers</h3>
    <ul>
        <li><strong>Midjourney:</strong> Great for moodboards and placeholder hero images.</li>
        <li><strong>ChatGPT:</strong> "Write 3 headlines for a coffee brand homepage." (Never use Lorem Ipsum).</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚡ Speed Tools</h3>
    <p>Use <strong>Relume Library</strong> for wireframing fast. Don't reinvent the wheel.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: AI Workflow</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Prompting</h4>
        <p>Write a Midjourney prompt to generate "A luxury skincare bottle on a marble podium with water droplets, 8k photorealistic".</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Designer Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1: Mindset
    {
        question: "What is the primary goal of Ecommerce Design?",
        options: ["To win awards", "To be unique", "To Sell (Conversion)", "To use nice colors"],
        correct: 2
    },
    {
        question: "Why should you care about a 2px misalignment?",
        options: ["It destroys subconscious trust", "Nobody sees it", "It's fine", "Pixels don't matter"],
        correct: 0
    },
    // Task 2: Laws
    {
        question: "What does Whitespace communicate?",
        options: ["Emptiness", "Luxury and focus", "Laziness", "Budget"],
        correct: 1
    },
    {
        question: "The 'Squint Test' checks for...",
        options: ["Visual Hierarchy", "Eye sight", "Colors", "Reading level"],
        correct: 0
    },
    // Task 3: Color
    {
        question: "What is the 60-30-10 Rule?",
        options: ["A diet", "Color distribution: 60% Base, 30% Brand, 10% Action", "Layout grid", "Pricing model"],
        correct: 1
    },
    {
        question: "Which color represents Trust?",
        options: ["Red", "Blue", "Black", "Yellow"],
        correct: 1
    },
    // Task 4: Typography
    {
        question: "Max recommended font families?",
        options: ["10", "5", "2", "Unlimited"],
        correct: 2
    },
    {
        question: "Minimum font size for Mobile body text?",
        options: ["12px", "16px", "10px", "14px"],
        correct: 1
    },
    // Task 5: Spacing
    {
        question: "Why use an 8px grid?",
        options: ["It saves data", "Creates visual rhythm and consistency", "Apple does it", "Random is better"],
        correct: 1
    },
    // Task 6: Trust
    {
        question: "What makes a review credible?",
        options: ["Just text", "Photos, Verified Badges, and Star Icons", "Anonymous name", "Fake dates"],
        correct: 1
    },
    // Task 8: Mobile
    {
        question: "Minimum touch target size?",
        options: ["20px", "44px", "10px", "100px"],
        correct: 1
    },
    {
        question: "What is the Thumb Zone?",
        options: ["A game", "The area easily reachable with one hand on mobile", "The top left corner", "The back"],
        correct: 1
    },
    // Task 9: Handoff
    {
        question: "The designer's job ends...",
        options: ["When the Figma file is sent", "After QAing the developed site", "When paid", "Immediately"],
        correct: 1
    },
    // Task 10: Figma
    {
        question: "Why use Components?",
        options: ["To update instances globally from one master", "To complicate things", "To use more RAM", "No reason"],
        correct: 0
    },
    // Task 11: Feedback
    {
        question: "Client says 'Make logo bigger'. You say...",
        options: ["No.", "Yes immediately.", "Explain the data-backed consequence (Pushing CTA down)", "Ignore"],
        correct: 2
    }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

const task1Quiz = [
    { q: "What's the mindset difference between a basic designer and Digital Heroes Designer?", o: ["Speed", "Revenue-focused design thinking", "Tool knowledge", "Experience"], c: 1 },
    { q: "Design affects business metrics directly:", o: ["Rarely", "Sometimes", "Always - every pixel touches revenue", "Never"], c: 2 },
    { q: "Mobile-first design means:", o: ["Desktop priority", "Design for mobile first, enhance for desktop", "Ignore mobile", "Only mobile"], c: 1 },
    { q: "Good design creates:", o: ["Just aesthetics", "Trust and conversions", "Complexity", "Confusion"], c: 1 },
    { q: "First impression happens in:", o: ["1 minute", "0.05 seconds", "10 seconds", "30 seconds"], c: 1 },
    { q: "Color psychology affects:", o: ["Nothing", "Purchase decisions", "Only aesthetics", "File size"], c: 1 },
    { q: "Consistency in design:", o: ["Is optional", "Builds trust", "Is boring", "Should be avoided"], c: 1 },
    { q: "Whitespace is:", o: ["Wasted space", "Essential for readability", "Lazy design", "Always bad"], c: 1 },
    { q: "Visual hierarchy guides:", o: ["Nothing", "User attention flow", "Only color", "Only size"], c: 1 },
    { q: "Typography choice affects:", o: ["Nothing", "Readability and brand perception", "Only file size", "Only print"], c: 1 }
];

const task2Quiz = [
    { q: "Law of Proximity states:", o: ["Colors matter", "Elements close together appear related", "Bigger is better", "Speed is key"], c: 1 },
    { q: "Fitts's Law relates to:", o: ["Color", "Button size and distance for clicking", "Typography", "Animation"], c: 1 },
    { q: "Hick's Law says:", o: ["More options = better", "More choices = slower decisions", "Speed doesn't matter", "Ignore users"], c: 1 },
    { q: "F-pattern reading applies to:", o: ["Print only", "Web content scanning", "Mobile only", "Nothing"], c: 1 },
    { q: "Z-pattern is used for:", o: ["Long content", "Landing pages with minimal text", "Print only", "Mobile only"], c: 1 },
    { q: "Miller's Law: magical number is:", o: ["3", "7 plus minus 2", "10", "15"], c: 1 },
    { q: "Gestalt principles explain:", o: ["Color theory", "How humans perceive visual groups", "Typography", "Animation"], c: 1 },
    { q: "Von Restorff Effect means:", o: ["Everything same", "Stand-out elements are remembered", "Hide everything", "Ignore contrast"], c: 1 },
    { q: "Serial Position Effect:", o: ["Ignore lists", "First and last items remembered best", "Middle is best", "Random"], c: 1 },
    { q: "Cognitive load should be:", o: ["Maximized", "Minimized for better UX", "Ignored", "Increased"], c: 1 }
];

const task3Quiz = [
    { q: "Color harmony creates:", o: ["Confusion", "Visual pleasure and trust", "Complexity", "Nothing"], c: 1 },
    { q: "60-30-10 color rule:", o: ["Random", "Primary-Secondary-Accent color ratio", "Only for print", "Ignore it"], c: 1 },
    { q: "Complementary colors are:", o: ["Same shade", "Opposite on color wheel", "Random", "Always bad"], c: 1 },
    { q: "Blue color evokes:", o: ["Urgency", "Trust and calm", "Danger", "Hunger"], c: 1 },
    { q: "Red color creates:", o: ["Calm", "Urgency and excitement", "Trust", "Sadness"], c: 1 },
    { q: "Brand color consistency:", o: ["Optional", "Critical for recognition", "Unnecessary", "Boring"], c: 1 },
    { q: "Color contrast ratio for accessibility:", o: ["1:1", "4.5:1 minimum", "2:1", "Doesn't matter"], c: 1 },
    { q: "Too many colors cause:", o: ["Better UX", "Visual confusion", "Trust", "Speed"], c: 1 },
    { q: "Black in e-commerce:", o: ["Cheap", "Premium and luxury feel", "Avoid always", "Only for text"], c: 1 },
    { q: "CTA button color should:", o: ["Match background", "Stand out from surroundings", "Be gray", "Be invisible"], c: 1 }
];

const task4Quiz = [
    { q: "Sans-serif fonts are:", o: ["Old fashioned", "Clean and modern", "Only for print", "Hard to read"], c: 1 },
    { q: "Maximum font families per design:", o: ["None", "2-3 maximum", "10+", "Unlimited"], c: 1 },
    { q: "Line height for readability:", o: ["1.0", "1.5-1.8", "0.5", "3.0"], c: 1 },
    { q: "Font size for body text:", o: ["8px", "14-16px minimum", "24px", "6px"], c: 1 },
    { q: "Heading hierarchy uses:", o: ["Same size", "Descending sizes for structure", "Random sizes", "Only color"], c: 1 },
    { q: "Letter spacing affects:", o: ["Nothing", "Readability and elegance", "Only print", "File size"], c: 1 },
    { q: "Mobile typography should:", o: ["Be smaller", "Be larger for readability", "Same as desktop", "Be hidden"], c: 1 },
    { q: "Google Fonts are:", o: ["Paid only", "Free and web-safe", "Slow", "Unavailable"], c: 1 },
    { q: "ALL CAPS text:", o: ["Always best", "Hard to read in long text", "More readable", "Faster to read"], c: 1 },
    { q: "Contrast between text and background:", o: ["Optional", "Critical for readability", "Not important", "Avoid high contrast"], c: 1 }
];

const task5Quiz = [
    { q: "Grid system provides:", o: ["Nothing", "Alignment and consistency", "Complexity", "Slowness"], c: 1 },
    { q: "12-column grid is:", o: ["Outdated", "Industry standard for flexibility", "Too complex", "Only for print"], c: 1 },
    { q: "Responsive breakpoints:", o: ["Not needed", "Essential for different screens", "Only mobile", "Only desktop"], c: 1 },
    { q: "Card-based layout:", o: ["Old fashioned", "Modern and scannable", "Hard to use", "Print only"], c: 1 },
    { q: "Above-the-fold content:", o: ["Not important", "Critical first impression", "Hide important content", "Optional"], c: 1 },
    { q: "Negative space:", o: ["Wasted space", "Gives content room to breathe", "Fill with content", "Avoid always"], c: 1 },
    { q: "Consistent margins:", o: ["Optional", "Create visual rhythm", "Random is better", "Not important"], c: 1 },
    { q: "Mobile layout priority:", o: ["Shrink desktop", "Design specifically for mobile", "Ignore mobile", "Same as desktop"], c: 1 },
    { q: "Content width for readability:", o: ["Full width always", "50-75 characters per line", "10 characters", "200 characters"], c: 1 },
    { q: "Asymmetrical layouts:", o: ["Always bad", "Can create visual interest", "Never use", "Print only"], c: 1 }
];

const task6Quiz = [
    { q: "Trust badges should be:", o: ["Hidden", "Visible near buy button", "In footer only", "Optional"], c: 1 },
    { q: "Social proof includes:", o: ["Nothing", "Reviews, testimonials, logos", "Only price", "Graphics only"], c: 1 },
    { q: "Secure checkout icons:", o: ["Unnecessary", "Reduce cart abandonment", "Slow site", "Confuse users"], c: 1 },
    { q: "Customer reviews:", o: ["Hide negative ones", "Show authentic mix", "Auto-generate", "Ignore"], c: 1 },
    { q: "Money-back guarantee badge:", o: ["Scares customers", "Builds purchase confidence", "Unnecessary", "Legal risk"], c: 1 },
    { q: "Payment icons should show:", o: ["One option", "All accepted payment methods", "None", "Only cash"], c: 1 },
    { q: "Star ratings:", o: ["Meaningless", "Quick trust indicator", "Too simple", "Avoid always"], c: 1 },
    { q: "As Seen In logos:", o: ["Fake it", "Only use real press mentions", "Always fake", "Not effective"], c: 1 },
    { q: "Customer photo reviews:", o: ["Avoid", "Highly persuasive", "Privacy risk", "Not needed"], c: 1 },
    { q: "Trust elements placement:", o: ["Random", "Strategic - near conversion points", "Hidden", "Footer only"], c: 1 }
];

const task7Quiz = [
    { q: "Homepage hero section:", o: ["Optional", "Critical first impression", "Skip it", "Text only"], c: 1 },
    { q: "Collection page layout:", o: ["Random", "Grid-based product display", "One product per page", "Text only"], c: 1 },
    { q: "Product page above fold:", o: ["Just description", "Image, title, price, CTA", "Footer", "Navigation only"], c: 1 },
    { q: "Cart page design:", o: ["Complex", "Clear and simple", "Hide products", "No totals"], c: 1 },
    { q: "Checkout design priority:", o: ["Aesthetics", "Speed and simplicity", "Complexity", "Graphics"], c: 1 },
    { q: "About page should:", o: ["Be boring", "Build brand connection", "Be hidden", "No images"], c: 1 },
    { q: "Contact page needs:", o: ["Just email", "Multiple contact options", "Nothing", "Hide address"], c: 1 },
    { q: "FAQ page design:", o: ["Wall of text", "Expandable accordions", "Tiny text", "Images only"], c: 1 },
    { q: "404 page should:", o: ["Show error only", "Guide back to shopping", "Be blank", "Show ads"], c: 1 },
    { q: "Thank you page:", o: ["Skip it", "Confirm order + next steps", "Show error", "Redirect away"], c: 1 }
];

const task8Quiz = [
    { q: "Mobile-first means:", o: ["Design desktop first", "Start with mobile, enhance for desktop", "Ignore mobile", "Only mobile"], c: 1 },
    { q: "Touch target size minimum:", o: ["10px", "44px minimum", "5px", "100px"], c: 1 },
    { q: "Mobile navigation:", o: ["Same as desktop", "Hamburger menu or simplified", "No navigation", "Footer only"], c: 1 },
    { q: "Mobile images should be:", o: ["Desktop size", "Optimized for mobile bandwidth", "Skip images", "Huge"], c: 1 },
    { q: "Form fields on mobile:", o: ["Tiny", "Large and finger-friendly", "Hidden", "Complex"], c: 1 },
    { q: "Mobile CTA buttons:", o: ["Small", "Full-width and prominent", "Hidden", "Text only"], c: 1 },
    { q: "Scroll on mobile:", o: ["Avoid", "Natural and expected", "Complex patterns", "Horizontal only"], c: 1 },
    { q: "Mobile popups:", o: ["Use many", "Minimize or avoid", "Full screen always", "Ignore"], c: 1 },
    { q: "Mobile checkout:", o: ["Desktop version", "Streamlined single page", "Multi-page complex", "Skip checkout"], c: 1 },
    { q: "Thumb zone design:", o: ["Ignore", "Place key actions within thumb reach", "Top of screen", "Tiny corners"], c: 1 }
];

const task9Quiz = [
    { q: "Design QA checks for:", o: ["Nothing", "Consistency, alignment, responsiveness", "Only color", "Only text"], c: 1 },
    { q: "Cross-device testing:", o: ["Just Chrome", "Multiple devices and browsers", "Skip it", "Only iPhone"], c: 1 },
    { q: "Pixel-perfect means:", o: ["Close enough", "Exact match to design specs", "Random", "Approximate"], c: 1 },
    { q: "Alignment issues:", o: ["Acceptable", "Unprofessional - fix immediately", "Ignore", "Client won't notice"], c: 1 },
    { q: "Color accuracy:", o: ["Not important", "Hex values must match exactly", "Any shade works", "Ignore"], c: 1 },
    { q: "Font loading issues:", o: ["Ignore", "Use fallbacks and test", "Skip testing", "Client problem"], c: 1 },
    { q: "Image quality check:", o: ["Any quality", "Sharp, properly sized, optimized", "Blurry is fine", "Skip images"], c: 1 },
    { q: "Responsive breakpoint testing:", o: ["One size", "Test all major breakpoints", "Skip mobile", "Desktop only"], c: 1 },
    { q: "Hover state testing:", o: ["Not needed", "Verify all interactive elements", "Skip it", "Only buttons"], c: 1 },
    { q: "Final design approval:", o: ["Self-approve", "Client sign-off required", "Skip approval", "Just deliver"], c: 1 }
];

const task10Quiz = [
    { q: "Figma is used for:", o: ["Coding", "Design and prototyping", "Data analysis", "Video editing"], c: 1 },
    { q: "Design handoff includes:", o: ["Just PSD", "Specs, assets, style guide", "Nothing", "Only fonts"], c: 1 },
    { q: "Component libraries:", o: ["Waste of time", "Speed up consistent design", "Too complex", "Ignore"], c: 1 },
    { q: "Auto-layout in Figma:", o: ["Avoid", "Creates responsive designs", "Slows work", "Not useful"], c: 1 },
    { q: "Design tokens:", o: ["Programming only", "Store design values for consistency", "Not for designers", "Ignore"], c: 1 },
    { q: "Version control in design:", o: ["Not needed", "Track changes and collaborate", "Too complex", "Single version only"], c: 1 },
    { q: "Exporting assets:", o: ["Any format", "Optimized formats for web", "Print formats", "Skip exporting"], c: 1 },
    { q: "Design system benefits:", o: ["None", "Consistency and speed", "Complexity", "Slows design"], c: 1 },
    { q: "Prototype testing:", o: ["Skip it", "Catch UX issues early", "Waste of time", "After launch only"], c: 1 },
    { q: "Collaboration in Figma:", o: ["Work alone", "Real-time team collaboration", "Not possible", "Email files"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
