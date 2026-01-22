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
    { q: "The '$10,000 Button Story' teaches us that design is really about:", o: ["Making things look artistic and creative", "Engineering for eyes - strategic placement drives revenue", "Following the latest trends from Dribbble", "Using the most expensive fonts available"], c: 1 },
    { q: "A customer subconsciously loses trust when they notice a button is 2px off-center. This demonstrates:", o: ["Customers are too picky these days", "Pixel-perfect execution reflects overall product quality", "You should only fix issues customers report", "Alignment doesn't affect conversions"], c: 1 },
    { q: "In the 'Dribbble vs Production' exercise, what's the main problem with award-winning concepts?", o: ["They win too many awards", "They often fail usability tests when implemented", "They use too few colors", "They're too simple"], c: 1 },
    { q: "According to training, what percentage of traffic now comes from mobile devices?", o: ["Around 30% so desktop is still king", "Around 70% making mobile-first essential", "Around 50% so equal priority", "Under 20% so mobile is optional"], c: 1 },
    { q: "The difference between a 'Graphic Designer' and an 'Ecommerce Designer' is:", o: ["Years of experience in the industry", "One makes things pretty, the other makes things SELL", "The tools they use for design", "Their formal education background"], c: 1 },
    { q: "First impressions on a website happen in approximately:", o: ["About 5 seconds of viewing", "0.05 seconds - faster than conscious thought", "30 seconds of browsing", "1 minute of exploration"], c: 1 },
    { q: "When the training says 'every pixel touches revenue', it means:", o: ["Pixels are expensive to render", "Design decisions directly impact business outcomes", "You should count all pixels", "Higher resolution means more sales"], c: 1 },
    { q: "A Digital Heroes Designer differs from a basic designer by focusing on:", o: ["Using more expensive software tools", "Revenue-focused design thinking over pure aesthetics", "Working faster than competitors", "Having more certifications"], c: 1 },
    { q: "The 'Squint Test' evaluates a design by:", o: ["Checking if text is readable at small sizes", "Blurring the design to see if hierarchy is clear", "Measuring color contrast ratios", "Testing on low-quality monitors"], c: 1 },
    { q: "Why is consistency in design so critical for ecommerce?", o: ["It saves time during development", "It builds subconscious trust that affects purchase decisions", "It makes the designer's job easier", "It reduces file sizes"], c: 2 }
];

const task2Quiz = [
    { q: "The Law of Proximity means that on a product page, you should:", o: ["Spread elements far apart for breathing room", "Group related elements (price, variants, CTA) together", "Use lots of divider lines between sections", "Place the most important element in isolation"], c: 1 },
    { q: "According to Fitts's Law, why is a 44px touch target important?", o: ["It looks more balanced visually", "Larger targets are faster and easier to tap accurately", "It's a Figma default setting", "Apple requires this exact size"], c: 1 },
    { q: "Hick's Law suggests that a product page with 15 variant options should:", o: ["Display all options in a large grid", "Group variants or use progressive disclosure to reduce cognitive load", "Hide all options until clicked", "Show options in random order"], c: 1 },
    { q: "The F-pattern reading behavior suggests your homepage should:", o: ["Center all important content", "Place key messages and CTAs in the top-left horizontal area", "Put navigation at the bottom", "Use vertical text for novelty"], c: 1 },
    { q: "The Z-pattern is ideal for:", o: ["Long-form content pages with lots of text", "Landing pages with minimal text and clear CTA placement", "Mobile-only experiences", "Footer design layouts"], c: 1 },
    { q: "Miller's Law (7±2) means your main navigation should typically have:", o: ["As many items as possible for SEO", "5-9 items maximum for easy mental processing", "Exactly 7 items, no more and no less", "12 items to match the column grid"], c: 1 },
    { q: "The Von Restorff Effect is why your 'Add to Cart' button should:", o: ["Match the overall color scheme", "Stand out distinctly in color/size from other elements", "Be the same style as other buttons", "Blend into the design subtly"], c: 1 },
    { q: "Serial Position Effect explains why in a navigation menu:", o: ["Middle items get the most clicks", "First and last items are remembered and clicked most", "Random positioning works best", "Alphabetical order is ideal"], c: 1 },
    { q: "Minimizing cognitive load in checkout means:", o: ["Adding lots of helpful information everywhere", "Removing distractions and simplifying decision points", "Using complex animations to engage users", "Showing all shipping options at once"], c: 1 },
    { q: "Gestalt principles help designers understand why:", o: ["Colors evoke emotions", "Users perceive grouped elements as related units", "Typography affects readability", "Speed affects conversions"], c: 1 }
];

const task3Quiz = [
    { q: "In the 60-30-10 color rule, the '10%' accent color should be used for:", o: ["Background elements and large areas", "Headers and graphical elements", "CTAs and buttons that need to 'pop'", "Text and body copy throughout"], c: 2 },
    { q: "For a luxury jewelry brand, which color combination communicates premium best?", o: ["Bright red with yellow accents", "Black background with gold accents", "Multiple rainbow colors for variety", "Pure white with gray text"], c: 1 },
    { q: "The training recommends 4.5:1 contrast ratio because:", o: ["It's a design trend for 2024", "It meets WCAG accessibility standards for readability", "It looks more professional", "It reduces file sizes"], c: 1 },
    { q: "For an organic/natural food brand, the primary color should lean toward:", o: ["Red for appetite stimulation", "Green to communicate eco-friendly/natural", "Black for luxury positioning", "Blue for trustworthiness"], c: 1 },
    { q: "Why should you avoid using more than 3-4 colors in most ecommerce designs?", o: ["It's harder to code more colors", "Too many colors create visual confusion and reduce trust", "Printers can't handle more colors", "It's industry standard"], c: 1 },
    { q: "When a client provides brand colors that fail accessibility contrast tests, you should:", o: ["Use them anyway since client is always right", "Adjust shades while preserving brand feel + explain the accessibility issue", "Refuse the project entirely", "Ignore the issue and hope no one notices"], c: 1 },
    { q: "Red and orange are best used for:", o: ["Tech company corporate websites", "Clearance sales and urgency-driving CTAs", "Organic wellness products", "Professional services firms"], c: 1 },
    { q: "The 60% of the 60-30-10 rule is typically:", o: ["The brand's primary color", "Background color (white, off-white, or dark mode base)", "The CTA button color", "Header and navigation color"], c: 1 },
    { q: "A gray CTA button on a product page is problematic because:", o: ["Gray is too neutral - it doesn't drive action", "Gray loads slower than other colors", "Gray uses more pixels", "Gray is outdated in 2024"], c: 0 },
    { q: "Color psychology differs by culture. Before designing for international clients, you should:", o: ["Use only black and white to be safe", "Research color meanings in the target culture", "Avoid color entirely and use shapes", "Use AI to auto-translate colors"], c: 1 }
];

const task4Quiz = [
    { q: "The 2-Font Rule exists because:", o: ["Browsers can only load 2 fonts efficiently", "More than 2 font families creates visual chaos and slows loading", "Figma has a 2-font limit", "Google only offers 2 good fonts"], c: 1 },
    { q: "Minimum body text size for mobile should be:", o: ["10px to fit more content on screen", "16px minimum - Google penalizes smaller text", "8px for dense information displays", "12px is the sweet spot"], c: 1 },
    { q: "Line height for body text should be approximately:", o: ["1.0x for tight, compact text", "1.5x for comfortable reading with breathing room", "0.8x to fit more content", "2.5x for dramatic effect"], c: 1 },
    { q: "Why is pure black (#000000) on pure white (#FFFFFF) not recommended?", o: ["It's too high contrast and causes eye strain", "Black is considered unlucky", "Browsers render it incorrectly", "It doesn't work on mobile"], c: 0 },
    { q: "A Serif + Sans-Serif pairing (like Playfair Display + Lato) works well because:", o: ["They're both from Google Fonts", "The contrast creates visual interest while maintaining readability", "They have the same line height", "They load at the same speed"], c: 1 },
    { q: "For a luxury watch brand, the ideal heading font would be:", o: ["Comic Sans for friendliness", "A refined Serif font (like Didot) for elegance", "Impact for boldness", "Arial for simplicity"], c: 1 },
    { q: "ALL CAPS text should be avoided for:", o: ["Headlines and buttons", "Long paragraphs of body text (hard to read)", "Brand names only", "Mobile devices only"], c: 1 },
    { q: "Font weight hierarchy typically means:", o: ["All text should be the same weight", "Headlines get heavier weights, body gets lighter", "Body text should be bolder than headlines", "Weight doesn't matter for hierarchy"], c: 1 },
    { q: "When a client asks for a 'fancy' script font for their entire website:", o: ["Immediately implement their vision", "Explain that script fonts in body text destroy readability and conversions", "Tell them to find another designer", "Use it but make it very large"], c: 1 },
    { q: "Letter-spacing (tracking) in all-caps text should be:", o: ["Tighter than default for impact", "Slightly wider to improve legibility", "Not adjusted at all", "Extremely spread out"], c: 1 }
];

const task5Quiz = [
    { q: "The 8px grid system creates:", o: ["Larger file sizes", "Subconscious visual rhythm and harmony", "More work for designers", "Compatibility issues"], c: 1 },
    { q: "Random spacing values like 13px, 21px, 45px feel 'off' because:", o: ["They're odd numbers", "They break the 8px multiplier system creating visual chaos", "They're prime numbers", "Browsers round them wrong"], c: 1 },
    { q: "The recommended desktop design canvas width is:", o: ["1920px always", "1440px or 1200px container width", "3000px for retina", "800px for compatibility"], c: 1 },
    { q: "'Above the fold' refers to:", o: ["Newspaper printing terminology with no web relevance", "Content visible before scrolling - critical first impression", "The top navigation bar only", "Email header sections"], c: 1 },
    { q: "Negative/white space in a design:", o: ["Is wasted real estate that should be filled", "Creates luxury perception and improves readability", "Should only be used on homepage", "Confuses users"], c: 1 },
    { q: "The standard mobile design width to design at is:", o: ["375px (iPhone standard)", "320px (very old phones)", "500px (average)", "1000px (scaled down desktop)"], c: 0 },
    { q: "When correcting a layout with 15px margins to the 8px system, you would change it to:", o: ["15px is fine, leave it", "16px (nearest 8px multiplier)", "8px (round down always)", "20px (round to nearest 10)"], c: 1 },
    { q: "12-column grids are preferred because:", o: ["They match 12 months of the year", "12 is divisible by 2, 3, 4, and 6 offering layout flexibility", "CSS requires exactly 12 columns", "Mobile screens have 12 pixels across"], c: 1 },
    { q: "Responsive breakpoints at 768px and 375px exist for:", o: ["Historical reasons only", "Targeting tablet and mobile device widths", "SEO optimization", "Animation performance"], c: 1 },
    { q: "Content width for optimal reading is:", o: ["Full width for maximum content", "50-75 characters per line for readability", "As narrow as possible", "200+ characters per line"], c: 1 }
];

const task6Quiz = [
    { q: "Trust badges (McAfee Secure, Money-Back Guarantee) should be placed:", o: ["Hidden in the footer only", "Strategically near the buy button and checkout", "On the About page only", "In a popup on exit"], c: 1 },
    { q: "Social proof is most effective when it includes:", o: ["Text-only anonymous reviews", "Real photos, verified badges, and star icons", "Only 5-star reviews (hide others)", "Stock photos of happy people"], c: 1 },
    { q: "A 'Money-Back Guarantee' badge design should:", o: ["Look cheap to emphasize savings", "Look premium and credible, not like a scam site PNG", "Be hidden until checkout", "Use flashing animations"], c: 1 },
    { q: "Customer reviews should show:", o: ["Only perfect 5-star reviews", "An authentic mix - some imperfection builds credibility", "Only text, never photos", "Anonymous reviews only"], c: 1 },
    { q: "'As Seen In' logos (Forbes, TechCrunch) should be used:", o: ["Freely, even if your product was never featured", "Only for legitimate press mentions (don't fake it)", "Never - they look arrogant", "Only on B2B websites"], c: 1 },
    { q: "CTA buttons should look:", o: ["Flat and minimal to match 2024 trends", "Slightly 3D/raised to appear 'clickable' or 'lickable'", "Invisible until hovered", "The same as body text links"], c: 1 },
    { q: "'Buy Now' vs 'Add to Cart' vs 'Get Yours' - the label matters because:", o: ["Different verbs test differently in conversion rate", "They're all exactly the same", "Google ranks different words differently", "Developers prefer certain words"], c: 0 },
    { q: "Urgency elements (countdown timers, 'Only 3 left') should be used:", o: ["On every product regardless of truth", "When genuinely true to avoid losing customer trust", "Never, they're manipulative", "Only during Black Friday"], c: 1 },
    { q: "Payment method icons (Visa, Mastercard, PayPal) should:", o: ["Be hidden to reduce visual clutter", "Be visible to show security and payment options", "Only appear at checkout", "Be replaced with text only"], c: 1 },
    { q: "The best placement for customer photo reviews is:", o: ["A separate 'Reviews' page only", "Below the product on the product page for immediate social proof", "In the footer", "In email follow-ups only"], c: 1 }
];

const task7Quiz = [
    { q: "On a Homepage, the Hero section must have:", o: ["Multiple paragraphs of company history", "Clear headline + CTA visible above the fold", "Autoplay video only", "Just the logo"], c: 1 },
    { q: "The 'Buy Box' on a product page includes:", o: ["Company story and values", "Price, variants, and Add to Cart as the focal point", "Footer links", "Blog post excerpts"], c: 1 },
    { q: "A sticky 'Add to Cart' bar on mobile product pages:", o: ["Is annoying and should be avoided", "Keeps the CTA accessible while scrolling long descriptions", "Violates design principles", "Only works on iOS"], c: 1 },
    { q: "Collection/category page filters should:", o: ["Be hidden to encourage browsing", "Be easy to use with clear sorting options", "Show all 50 filter options at once", "Require page reload for each filter"], c: 1 },
    { q: "The Cart page should prioritize:", o: ["Maximum upselling opportunities", "Clarity - products, totals, and path to checkout", "Company policies and legal text", "Social sharing buttons"], c: 1 },
    { q: "Checkout design should be:", o: ["Branded with lots of images and promotions", "Minimal and distraction-free for completion", "Multi-page with 7+ steps", "Identical to the product page"], c: 1 },
    { q: "A 404 error page should:", o: ["Just show 'Page Not Found'", "Guide users back to shopping with search and popular links", "Redirect to homepage automatically", "Show technical error codes"], c: 1 },
    { q: "The Thank You page after purchase should:", o: ["Just say 'Thanks'", "Confirm order details and suggest next steps (track order, share)", "Immediately show a popup survey", "Redirect to the homepage"], c: 1 },
    { q: "Footer design should include:", o: ["Minimum information only", "Navigation, policies, social links, and newsletter signup", "The entire site content duplicated", "Just copyright text"], c: 1 },
    { q: "The About page for an ecommerce brand should:", o: ["Be skipped entirely", "Build emotional brand connection and trust", "Only show legal information", "Auto-redirect to products"], c: 1 }
];

const task8Quiz = [
    { q: "The 'Thumb Zone' concept means that on mobile:", o: ["Users scroll with their thumbs only", "Key actions must be in the area easily reachable by thumb", "Thumbnails should be used for all images", "Users prefer smaller buttons"], c: 1 },
    { q: "The minimum touch target size for mobile buttons is:", o: ["20px - pixels are small enough", "44px x 44px - Apple's Human Interface Guidelines", "100px - bigger is always better", "10px - precision matters"], c: 1 },
    { q: "Mobile navigation should typically be:", o: ["Identical to desktop with smaller text", "Hamburger menu or simplified tab bar", "All 20 links visible at once", "Removed entirely - trust users to search"], c: 1 },
    { q: "Layout shifts (content jumping while loading) are bad because:", o: ["They use more bandwidth", "They cause accidental clicks and frustrate users", "They're technically impressive", "Search engines don't notice them"], c: 1 },
    { q: "When designing a mobile drawer menu, it should include:", o: ["Just the main links", "Links, socials, account, and highlighted CTAs like 'Shop Sale'", "The entire desktop header", "Nothing - drawers are outdated"], c: 1 },
    { q: "Mobile images should be:", o: ["Full desktop resolution for quality", "Optimized/compressed for faster loading on mobile networks", "Removed entirely to save bandwidth", "Converted to text descriptions"], c: 1 },
    { q: "Mobile-first design means you should:", o: ["Design desktop first, then shrink for mobile", "Design for mobile first, then enhance for larger screens", "Design only for mobile and ignore desktop", "Use the same design for all screen sizes"], c: 1 },
    { q: "Popups on mobile should be:", o: ["Full-screen for maximum impact", "Minimized or avoided as they hurt mobile UX", "Triggered on every page load", "Used more than on desktop"], c: 1 },
    { q: "Fixed image container heights prevent:", o: ["High-quality images from loading", "Layout shifts when images load", "Users from seeing the full image", "Fast page loading"], c: 1 },
    { q: "Mobile checkout should be:", o: ["Identical to desktop checkout", "Streamlined, possibly single-page, with large touch targets", "Removed - redirect to desktop site", "More complex with additional verification steps"], c: 1 }
];

const task9Quiz = [
    { q: "Design QA (Quality Assurance) means:", o: ["The client checks your work", "You systematically audit designs before and after development", "Quality is optional at Digital Heroes", "Automated testing only"], c: 1 },
    { q: "When a developer implements your design with 24px spacing but your Figma shows 32px:", o: ["It's close enough, ship it", "You should flag it - being 'annoying about details' ensures quality", "Developers know best, trust their judgment", "Spacing doesn't matter to users"], c: 1 },
    { q: "Cross-device testing should include:", o: ["Chrome on your laptop only", "Multiple browsers, devices, and screen sizes", "Just iPhone 14 Pro", "Testing only after launch"], c: 1 },
    { q: "Design handoff to developers should include:", o: ["Just the Figma link", "Exported assets, animation specs, and Dev Mode access for hex codes", "A verbal description of the design", "Screenshots via email"], c: 1 },
    { q: "Assets should be exported as:", o: ["Whatever format is easiest", "SVG for icons/vectors, PNG @2x for rasters", "PDF only", "JPEG at maximum compression"], c: 1 },
    { q: "Hover states and animations should be:", o: ["Left for developers to decide", "Documented clearly in the Figma file", "Avoided to keep things simple", "Black in without client approval"], c: 1 },
    { q: "Color accuracy during QA means:", o: ["General approximation is fine", "Hex values must match exactly between design and implementation", "Developers choose final colors", "Monitors all look different anyway"], c: 1 },
    { q: "Responsive breakpoint testing should verify:", o: ["That nothing breaks at exactly 768px", "Design works correctly at all major breakpoints (desktop, tablet, mobile)", "Desktop only - mobile is developer responsibility", "Only the breakpoints the client specifically mentions"], c: 1 },
    { q: "After development is complete, the designer's job:", o: ["Is done - move to next project", "Includes visual QA audit to ensure implementation matches design", "Is only to send final invoice", "Is to start redesigning"], c: 1 },
    { q: "Font loading issues (FOUT/FOIT) on the live site should be:", o: ["Ignored - users won't notice", "Addressed with fallback fonts and proper loading strategies", "Fixed by removing custom fonts", "Blamed on the developer"], c: 1 }
];

const task10Quiz = [
    { q: "A professional Figma file should have these pages:", o: ["Just 'Designs' is enough", "Thinking/Inspiration, Wireframes, Style Guide, Finals, Archive", "As many pages as possible", "One page with everything"], c: 1 },
    { q: "You should never duplicate a button 50 times. Instead:", o: ["Copy-paste is fastest", "Create a Master Component and use Instances", "Draw each button individually", "Use rectangles with text"], c: 1 },
    { q: "Why use Components and Variants in Figma?", o: ["They look impressive to clients", "Change the Master once, all Instances update automatically", "Figma requires them", "They make files smaller"], c: 1 },
    { q: "The Style Guide page should contain:", o: ["Random design experiments", "Colors, typography, button states, spacing rules", "Client meeting notes", "Developer instructions"], c: 1 },
    { q: "Auto-layout in Figma is used for:", o: ["Automatic drawing", "Creating responsive components that adapt to content", "Auto-generating designs", "Reducing file size"], c: 1 },
    { q: "When presenting designs to clients, you should:", o: ["Just send a Figma link and wait", "Walk them through the decisions and rationale", "Let them explore randomly", "Only show the final version"], c: 1 },
    { q: "Figma Dev Mode helps developers by:", o: ["Writing code for them", "Providing exact measurements, CSS values, and asset exports", "Removing the need for designers", "Automatically deploying to production"], c: 1 },
    { q: "Version history in Figma should be used to:", o: ["Delete old versions immediately", "Track changes and restore previous states if needed", "Show off to clients", "Slow down the file"], c: 1 },
    { q: "Plugin usage in Figma:", o: ["Should be avoided entirely", "Can speed up workflow (Unsplash for images, Content Reel for data)", "Violates Figma terms of service", "Makes files incompatible"], c: 1 },
    { q: "Real-time collaboration in Figma means:", o: ["Only one person can edit at a time", "Multiple team members can work simultaneously on the same file", "Work must be done offline", "Changes sync once per day"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
