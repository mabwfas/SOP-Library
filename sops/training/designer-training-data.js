// UI/UX Designer Training Data
// Complete training content for designer certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "Design Thinking",
        description: "Creative mindset fundamentals",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read 'Why Your Design Matters' case study",
            "📊 Internalize the 'Art vs Science' balance",
            "🧠 Understand the 'Problem Solver' vs 'Pixel Pusher' mindset"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Memorize the 3 arms of the ecosystem",
            "💎 Understand the 'Premium' expectation",
            "📱 Learn why Mobile-First is a business requirement"
        ]
    },
    {
        id: 3,
        title: "Design Principles",
        description: "Core UI/UX rules",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🎨 Study the 'Visual Hierarchy' diagram",
            "📏 Memorize the '5-Second Rule'",
            "🚫 Learn to spot the 5 Common Mistakes"
        ]
    },
    {
        id: 4,
        title: "Figma Mastery",
        description: "Tool proficiency",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-40 minutes",
            "🧩 Study the Figma Workflow Process",
            "⌨️ Memorize key keyboard shortcuts",
            "📁 Learn proper File Organization hierarchy"
        ]
    },
    {
        id: 5,
        title: "Brand & Typography",
        description: "Visual identity",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🔤 Learn the Typography Rules (fonts, sizes, contrast)",
            "🎨 Understand the Brand Color system",
            "⚖️ Master font pairing basics"
        ]
    },
    {
        id: 6,
        title: "Responsive Design",
        description: "Multi-device layouts",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-30 minutes",
            "📱 Memorize the breakpoints (375px, 768px, 1440px)",
            "👆 Learn Mobile Design Rules (touch targets)",
            "📐 Understand the grid system for responsive scaling"
        ]
    },
    {
        id: 7,
        title: "E-commerce Design",
        description: "Conversion optimization",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🛒 Study Conversion-Focused elements",
            "📦 Learn Product Page must-haves",
            "🏠 Understand Homepage structural essentials"
        ]
    },
    {
        id: 8,
        title: "Client Handoff",
        description: "Developer collaboration",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📤 Master the Asset Export checklist",
            "🎥 Learn to record Handoff Looms",
            "🤝 Understand Dev Mode requirements"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world challenges",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🧠 Solve the 3 difficult client scenarios",
            "📝 Write down your response scripts",
            "🗣️ Practice saying them out loud"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive assessment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Review ALL previous modules",
            "🏆 Score 20/20 to pass",
            "🎉 Get ready to design your first premium store!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: DESIGN THINKING</h2>

<div class="content-section">
<h3>🎯 Why Your Design Matters</h3>
<p>A client's website had beautiful visuals but a 0.5% conversion rate. Why? Users couldn't find the "Add to Cart" button.</p>
<div class="highlight-box">
<strong>Key Insight:</strong> Pretty ≠ Effective. Good design guides users to take action. Your job is to create designs that are BOTH beautiful AND functional.
</div>
</div>

<div class="content-section">
<h3>📊 The Sweet Spot</h3>
<img src="images/designer_mindset_graph.png" alt="Design Mindset Venn Diagram" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
<p style="text-align: center; color: #94A3B8; font-size: 0.9em;"><em>We operate at the intersection of Art and Science.</em></p>
</div>

<div class="content-section">
<h3>💡 Design is Problem-Solving</h3>
<p>At Digital Heroes, designers are not just "pixel pushers." You are:</p>
<ul>
<li>🎯 <strong>Problem Solvers:</strong> Every design addresses a user need</li>
<li>💰 <strong>Conversion Architects:</strong> Designs drive sales</li>
<li>🎨 <strong>Brand Storytellers:</strong> Visuals communicate identity</li>
<li>📱 <strong>Experience Creators:</strong> Users feel emotions through design</li>
</ul>
</div>

<div class="content-section">
<h3>🔑 The 3 Pillars of Great Design</h3>
<ol>
<li><strong>Clarity:</strong> Users know exactly what to do</li>
<li><strong>Consistency:</strong> Elements behave predictably</li>
<li><strong>Conversion:</strong> Design leads to action</li>
</ol>
<div class="warning-box">
<strong>Remember:</strong> If users are confused, the design failed—no matter how beautiful it looks.
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about design thinking</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 The Digital Heroes Ecosystem</h3>
<ul>
<li>📺 <strong>Media Arm:</strong> 2.5M+ YouTube subscribers</li>
<li>🛠️ <strong>Agency Arm:</strong> Premium Shopify services</li>
<li>👥 <strong>Talent Pool:</strong> 40+ full-time professionals</li>
</ul>
<p>Clients arrive pre-educated and expect premium quality.</p>
</div>

<div class="content-section">
<h3>🎨 What Designers Deliver</h3>
<ul>
<li>💎 <strong>Premium Look:</strong> $1,200-$1,800 quality designs</li>
<li>📱 <strong>Mobile-First:</strong> 70% of traffic is mobile</li>
<li>⚡ <strong>Conversion Focus:</strong> Beautiful AND functional</li>
<li>🎯 <strong>Brand Alignment:</strong> Consistent visual identity</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: DESIGN PRINCIPLES</h2>

<div class="content-section">
<h3>👁️ Visual Hierarchy Explained</h3>
<p>Where does the eye go? You control the user's journey.</p>
<img src="images/visual_hierarchy_guide.png" alt="Visual Hierarchy Guide" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🎨 Non-Negotiable Design Rules</h3>
<ul>
<li>✅ <strong>Visual Hierarchy:</strong> Most important elements stand out (Size, Color, Position)</li>
<li>✅ <strong>White Space:</strong> Breathing room for content. It's not empty, it's active.</li>
<li>✅ <strong>Contrast:</strong> Text must be readable (WCAG standards)</li>
<li>✅ <strong>Alignment:</strong> Everything snaps to grid. Chaos = Distrust.</li>
<li>✅ <strong>Consistency:</strong> Same patterns throughout. Don't confuse the user.</li>
</ul>
</div>

<div class="content-section">
<h3>❌ Common Design Mistakes</h3>
<ul>
<li>❌ Text over busy images (unreadable)</li>
<li>❌ Too many fonts (3 max)</li>
<li>❌ Inconsistent spacing (use 8px grid)</li>
<li>❌ Hidden CTA buttons (ghost buttons on busy backgrounds)</li>
<li>❌ Ignoring mobile users</li>
</ul>
</div>

<div class="content-section">
<h3>🎯 The 5-Second Rule</h3>
<div class="highlight-box">
<strong>Test:</strong> Show a design for 5 seconds. Can users identify:
<ol>
<li>What the site sells?</li>
<li>Where to click next?</li>
<li>Why they should trust it?</li>
</ol>
If no, redesign.
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about design principles</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: FIGMA MASTERY</h2>

<div class="content-section">
<h3>🔄 The Professional Workflow</h3>
<img src="images/figma_workflow_diagram.png" alt="Figma Workflow Diagram" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🎨 Figma Essentials</h3>
<ul>
<li>📐 <strong>Frames:</strong> Use frames, not groups (better constraints)</li>
<li>🔧 <strong>Auto Layout:</strong> Essential for responsive components</li>
<li>🎨 <strong>Styles:</strong> Color & text styles (never use raw hex codes)</li>
<li>📦 <strong>Components:</strong> Reusable elements (Master > Instance)</li>
<li>🔗 <strong>Variants:</strong> Component states (Hover, Active, Disabled)</li>
</ul>
</div>

<div class="content-section">
<h3>📁 File Organization</h3>
<p>A messy file = A messy mind = An angry developer.</p>
<ul>
<li><strong>Cover Page:</strong> Thumbnail for project overview</li>
<li><strong>Style Guide:</strong> Colors, fonts, components, grid settings</li>
<li><strong>Pages:</strong> Separate 'Desktop', 'Mobile', 'Archive', 'In Progress'</li>
<li><strong>Components:</strong> Master component library</li>
</ul>
<div class="highlight-box">
<strong>Naming Convention:</strong> Use clear names like "Button/Primary/Hover" not "Rectangle 37"
</div>
</div>

<div class="content-section">
<h3>⚡ Figma Shortcuts to Know</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>Shift + A</code></td><td style="padding: 10px;">Auto Layout</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>Ctrl/Cmd + D</code></td><td style="padding: 10px;">Duplicate</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>Alt + Drag</code></td><td style="padding: 10px;">Copy element</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>Ctrl/Cmd + G</code></td><td style="padding: 10px;">Group</td></tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about Figma</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: BRAND & TYPOGRAPHY</h2>

<div class="content-section">
<h3>🎨 Brand Styling</h3>
<p>Every brand needs:</p>
<ul>
<li>🎨 <strong>Primary Color:</strong> Main brand color (Action, Highlights)</li>
<li>🎨 <strong>Secondary Color:</strong> Accent color (Supporting elements)</li>
<li>⚫ <strong>Neutrals:</strong> Black, white, grays (Background, Text)</li>
<li>✅ <strong>Status Colors:</strong> Success (Green), warning (Yellow), error (Red)</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Typography Rules</h3>
<ul>
<li>Use <strong>2-3 fonts maximum</strong></li>
<li>Headings: 24-48px (bold, expressive)</li>
<li>Body: 16-18px (regular, legible)</li>
<li>Line height: 1.5-1.7 (for readability)</li>
<li>Contrast ratio: 4.5:1 minimum (accessibility)</li>
</ul>
<div class="warning-box">
<strong>Common Mistake:</strong> Using decorative fonts for body text. Save fancy fonts for headings only.
</div>
</div>

<div class="content-section">
<h3>🔤 Font Pairing Tips</h3>
<ul>
<li>Serif + Sans-Serif = Classic combination</li>
<li>Same font family, different weights (e.g., Roboto Bold + Roboto Regular)</li>
<li>Reference: Google Fonts (Inter, Roboto, Poppins, Playfair Display)</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about brand & typography</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: RESPONSIVE DESIGN</h2>

<div class="content-section">
<h3>📱 Mobile-First Design</h3>
<p><strong>70% of e-commerce traffic is mobile.</strong> Always design mobile first.</p>
<ul>
<li>Start at 375px width (iPhone standard)</li>
<li>Scale up to tablet (768px)</li>
<li>Then desktop (1440px)</li>
</ul>
</div>

<div class="content-section">
<h3>📐 Breakpoints</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mobile</strong></td><td style="padding: 10px;">375px - 767px</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Tablet</strong></td><td style="padding: 10px;">768px - 1023px</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Desktop</strong></td><td style="padding: 10px;">1024px+</td></tr>
</table>
</div>

<div class="content-section">
<h3>📱 Mobile Design Rules</h3>
<ul>
<li>Touch targets: Minimum 44x44px (fingers are fat!)</li>
<li>Text: Minimum 16px (no pinch-to-zoom needed)</li>
<li>Single column layouts (easier to scroll)</li>
<li>Sticky navigation for easy access</li>
<li>Thumb-friendly button placement (bottom half of screen)</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about responsive design</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: E-COMMERCE DESIGN</h2>

<div class="content-section">
<h3>🛒 Conversion-Focused Design</h3>
<p>E-commerce design is about <strong>selling products</strong>, not winning art awards.</p>
<ul>
<li>✅ Clear product images (Hero of the page)</li>
<li>✅ Visible price and CTA (Above the fold)</li>
<li>✅ Trust badges (Secure payment icons)</li>
<li>✅ Social proof (Star ratings with count)</li>
<li>✅ Urgency elements (Low stock warnings)</li>
</ul>
</div>

<div class="content-section">
<h3>📦 Product Page Must-Haves</h3>
<ul>
<li>🖼️ High-quality images (multiple angles, zoom)</li>
<li>💰 Clear price (with compare price if on sale)</li>
<li>🛒 Prominent Add to Cart button (contrasting color)</li>
<li>📋 Variant selectors (size, color) - make them easy to tap</li>
<li>⭐ Customer reviews (builds trust)</li>
<li>📦 Shipping information (removes anxiety)</li>
</ul>
</div>

<div class="content-section">
<h3>🏠 Homepage Essentials</h3>
<ol>
<li>Hero section with clear value proposition + CTA</li>
<li>Featured/bestselling products (Social proof)</li>
<li>Trust signals (reviews, media logos)</li>
<li>Collection navigation (Easy browsing)</li>
<li>Footer with policies and contact (Legitimacy)</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about e-commerce design</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: CLIENT HANDOFF</h2>

<div class="content-section">
<h3>📤 Design Handoff Best Practices</h3>
<ul>
<li>Organize layers and name them properly</li>
<li>Create a clear style guide page</li>
<li>Export assets in correct formats</li>
<li>Provide design specs (margins, padding)</li>
<li>Use Figma Dev Mode for developers</li>
</ul>
</div>

<div class="content-section">
<h3>📁 Asset Export Formats</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Photos</strong></td><td style="padding: 10px;">WebP/JPG (Compressed)</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Icons</strong></td><td style="padding: 10px;">SVG (Vector = Scalable)</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Logos</strong></td><td style="padding: 10px;">SVG + PNG (Transparent)</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Backgrounds</strong></td><td style="padding: 10px;">WebP/JPG</td></tr>
</table>
</div>

<div class="content-section">
<h3>🎥 Loom Walkthrough</h3>
<div class="highlight-box">
<strong>Record a 2-5 minute video explaining:</strong>
<ul>
<li>Overall design approach and decisions</li>
<li>Key interactions and animations</li>
<li>Responsive behavior (how it scales)</li>
<li>Any special notes for developers</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about handoff</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🎯 Scenario 1: Bad Brief</h3>
<p><strong>Client says:</strong> "Make it pop" or "I'll know it when I see it"</p>
<div class="highlight-box">
<strong>Your Response:</strong>
<ol>
<li>Ask clarifying questions ("Can you define 'pop' with an example?")</li>
<li>Request visual examples they like (Competitor analysis)</li>
<li>Create a mood board for approval FIRST</li>
<li>Get sign-off before designing full pages</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🔄 Scenario 2: Endless Revisions</h3>
<p><strong>Client keeps asking for changes that contradict previous feedback.</strong></p>
<div class="warning-box">
<strong>Your Response:</strong>
<ul>
<li>Document all feedback in writing</li>
<li>Summarize changes before implementing ("Just to confirm, we are changing X to Y...")</li>
<li>Set clear revision limits upfront (e.g., 2 rounds included)</li>
<li>Escalate to PM if scope creep occurs</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📷 Scenario 3: Bad Client Assets</h3>
<p><strong>Client provides low-resolution images and no brand guidelines.</strong></p>
<ul>
<li>Request higher quality assets immediately</li>
<li>Suggest stock photo alternatives (Unsplash/Pexels)</li>
<li>Create basic brand guidelines (simple palette/font choice) based on logo</li>
<li>Document limitations for clarity ("Low-res logo used as placeholder")</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about scenarios</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations!</h3>
<p>You've completed the UI/UX Designer training. This final assessment covers everything you've learned:</p>
<ul>
<li>✅ Design thinking and mindset</li>
<li>✅ Digital Heroes ecosystem</li>
<li>✅ Core design principles</li>
<li>✅ Figma proficiency and workflow</li>
<li>✅ Brand and typography rules</li>
<li>✅ Responsive design standards</li>
<li>✅ E-commerce conversion design</li>
<li>✅ Client handoff best practices</li>
<li>✅ Real-world problem solving</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all topics.</strong>
<p>Score 20/20 to receive your Designer Certification.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Final Quiz?</h3>
<ul>
<li>📝 20 questions covering all training modules</li>
<li>🎯 Score <strong>20/20</strong> to receive certification</li>
</ul>
</div>
`;

// Keep existing quizzes
const allQuizzes = [
    // Task 1: Design Thinking
    [
        { q: "Good design is:", o: ["Pretty but confusing", "Ugly but functional", "Beautiful AND functional", "Complex and detailed"], c: 2 },
        { q: "At Digital Heroes, designers are considered:", o: ["Pixel pushers", "Problem solvers", "Artists only", "Decorators"], c: 1 },
        { q: "The 3 pillars of great design are:", o: ["Color, Font, Image", "Clarity, Consistency, Conversion", "Speed, Beauty, Complexity", "Mobile, Desktop, Tablet"], c: 1 },
        { q: "If users are confused by a design:", o: ["They'll figure it out", "Add more instructions", "The design failed", "Blame the user"], c: 2 },
        { q: "A low conversion rate despite beautiful design means:", o: ["Users don't appreciate art", "Pretty ≠ Effective", "Add more colors", "It's the developer's fault"], c: 1 },
        { q: "Design is primarily about:", o: ["Making things look good", "Problem-solving", "Following trends", "Personal expression"], c: 1 },
        { q: "Designers at Digital Heroes are:", o: ["Conversion architects", "Just visual creators", "Only decorators", "IT support"], c: 0 },
        { q: "What should design guide users to do?", o: ["Look at visuals", "Take action", "Scroll endlessly", "Nothing specific"], c: 1 },
        { q: "Brand storytelling through design means:", o: ["Writing blog posts", "Visuals communicate identity", "Adding more text", "Using animations"], c: 1 },
        { q: "Experience creators shape:", o: ["Only visuals", "User emotions", "Code quality", "Server speed"], c: 1 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Digital Heroes YouTube subscribers:", o: ["500K+", "1M+", "2.5M+", "5M+"], c: 2 },
        { q: "Premium package price range:", o: ["$500-$800", "$800-$1,000", "$1,200-$1,800", "$2,000-$3,000"], c: 2 },
        { q: "Mobile traffic percentage in e-commerce:", o: ["30%", "50%", "70%", "90%"], c: 2 },
        { q: "Clients arrive at Digital Heroes:", o: ["Uneducated", "Pre-educated via YouTube", "Through cold calling", "Randomly"], c: 1 },
        { q: "Full-time professionals at Digital Heroes:", o: ["10+", "20+", "40+", "100+"], c: 2 },
        { q: "Designers must deliver:", o: ["Quick drafts", "Premium quality", "Basic designs", "Templates only"], c: 1 },
        { q: "Primary design approach:", o: ["Desktop-first", "Mobile-first", "Tablet-first", "Print-first"], c: 1 },
        { q: "Visual identity must be:", o: ["Different each page", "Consistent", "Experimental", "Changing"], c: 1 },
        { q: "The agency arm provides:", o: ["Free services", "Premium Shopify services", "Only consulting", "Hardware sales"], c: 1 },
        { q: "Design quality expectation:", o: ["Basic", "Moderate", "$1,200-$1,800 quality", "Free tier"], c: 2 }
    ],
    // Task 3: Design Principles
    [
        { q: "Visual hierarchy means:", o: ["All equal importance", "Most important elements stand out", "Random placement", "Hidden elements"], c: 1 },
        { q: "Maximum recommended fonts:", o: ["1", "2-3", "5-6", "Unlimited"], c: 1 },
        { q: "The 5-second test checks if users can identify:", o: ["Colors used", "Font names", "What site sells, where to click, trust signals", "Designer name"], c: 2 },
        { q: "White space is:", o: ["Wasted space", "Breathing room for content", "A mistake", "Cheap design"], c: 1 },
        { q: "Text over busy images is:", o: ["Professional", "Unreadable", "Trendy", "Recommended"], c: 1 },
        { q: "CTA buttons should be:", o: ["Hidden", "Small", "Prominent", "Same color as background"], c: 2 },
        { q: "Consistency in design means:", o: ["Same patterns throughout", "Different for each page", "Experimental", "Random choices"], c: 0 },
        { q: "Contrast is important for:", o: ["Aesthetics only", "Readability", "Confusion", "Decoration"], c: 1 },
        { q: "If the 5-second test fails, you should:", o: ["Ignore it", "Redesign", "Add more content", "Change colors"], c: 1 },
        { q: "Alignment means elements:", o: ["Are placed randomly", "Snap to grid", "Overlap", "Float freely"], c: 1 }
    ],
    // Task 4: Figma
    [
        { q: "Auto Layout shortcut:", o: ["Ctrl+A", "Shift+A", "Alt+A", "Cmd+A"], c: 1 },
        { q: "Use frames instead of:", o: ["Shapes", "Groups", "Lines", "Text"], c: 1 },
        { q: "Component states are managed through:", o: ["Layers", "Variants", "Groups", "Pages"], c: 1 },
        { q: "Naming like 'Rectangle 37' is:", o: ["Acceptable", "Recommended", "Bad practice", "Required"], c: 2 },
        { q: "Good naming convention example:", o: ["Rectangle 37", "Button/Primary/Hover", "New Layer", "Copy 5"], c: 1 },
        { q: "Duplicate shortcut:", o: ["Ctrl+A", "Ctrl+D", "Ctrl+C", "Ctrl+V"], c: 1 },
        { q: "File organization should include:", o: ["Random pages", "Cover, Style Guide, Pages, Components", "One page only", "No structure"], c: 1 },
        { q: "Styles in Figma are for:", o: ["Decoration", "Color & text consistency", "Animation", "Prototyping"], c: 1 },
        { q: "Reusable elements should be:", o: ["Grouped", "Made into Components", "Flattened", "Deleted"], c: 1 },
        { q: "Alt + Drag does:", o: ["Delete", "Copy element", "Rotate", "Scale"], c: 1 }
    ],
    // Task 5: Brand & Typography
    [
        { q: "Maximum fonts recommended:", o: ["1", "2-3", "5", "10"], c: 1 },
        { q: "Body text size range:", o: ["10-12px", "14-15px", "16-18px", "20-24px"], c: 2 },
        { q: "Line height should be:", o: ["1.0", "1.2", "1.5-1.7", "2.0+"], c: 2 },
        { q: "Minimum contrast ratio:", o: ["2:1", "3:1", "4.5:1", "10:1"], c: 2 },
        { q: "Decorative fonts should be used for:", o: ["Body text", "Headings only", "Everything", "Never"], c: 1 },
        { q: "Brand colors include:", o: ["One color only", "Primary, Secondary, Neutrals", "Rainbow", "Black only"], c: 1 },
        { q: "Status colors are for:", o: ["Decoration", "Success, warning, error states", "Brand identity", "Backgrounds"], c: 1 },
        { q: "Classic font pairing:", o: ["Two decorative fonts", "Serif + Sans-Serif", "Comic Sans only", "Random fonts"], c: 1 },
        { q: "Heading text size range:", o: ["12-16px", "16-20px", "24-48px", "60-80px"], c: 2 },
        { q: "Google Fonts examples:", o: ["Arial, Times", "Inter, Roboto, Poppins", "Comic Sans", "Wingdings"], c: 1 }
    ],
    // Task 6: Responsive Design
    [
        { q: "Mobile traffic percentage:", o: ["30%", "50%", "70%", "90%"], c: 2 },
        { q: "Mobile-first means starting at:", o: ["1440px", "1024px", "768px", "375px"], c: 3 },
        { q: "Mobile breakpoint range:", o: ["0-374px", "375px-767px", "768px-1023px", "1024px+"], c: 1 },
        { q: "Minimum touch target size:", o: ["24x24px", "32x32px", "44x44px", "60x60px"], c: 2 },
        { q: "Minimum mobile text size:", o: ["10px", "12px", "14px", "16px"], c: 3 },
        { q: "Desktop breakpoint starts at:", o: ["768px", "960px", "1024px", "1440px"], c: 2 },
        { q: "Mobile layouts should be:", o: ["Multi-column", "Single column", "Grid-based", "Complex"], c: 1 },
        { q: "Thumb-friendly means buttons are:", o: ["At top of screen", "Easy to reach with thumb", "Very small", "Hidden"], c: 1 },
        { q: "Tablet breakpoint:", o: ["375px-500px", "500px-767px", "768px-1023px", "1024px+"], c: 2 },
        { q: "Sticky navigation helps with:", o: ["Aesthetics", "Easy access", "Loading speed", "SEO"], c: 1 }
    ],
    // Task 7: E-commerce Design
    [
        { q: "E-commerce design is primarily about:", o: ["Art", "Selling products", "Personal style", "Complexity"], c: 1 },
        { q: "Product page must have:", o: ["Only images", "Image, price, CTA, reviews", "Just text", "Animation"], c: 1 },
        { q: "Trust badge examples:", o: ["Social links", "Payment icons, security badges", "Animations", "Large fonts"], c: 1 },
        { q: "Social proof includes:", o: ["Brand colors", "Customer reviews", "Footer links", "Header text"], c: 1 },
        { q: "Urgency elements show:", o: ["Brand story", "Stock levels, time limits", "Company history", "Team photos"], c: 1 },
        { q: "Hero section should have:", o: ["Just an image", "Clear value proposition", "Many paragraphs", "Small text"], c: 1 },
        { q: "CTA button on product page:", o: ["Should be hidden", "Prominent Add to Cart", "Same as background", "At bottom only"], c: 1 },
        { q: "Product images should be:", o: ["Single angle", "Multiple angles, high quality", "Low resolution", "Text only"], c: 1 },
        { q: "Shipping info placement:", o: ["Hidden", "On product page", "Footer only", "Checkout only"], c: 1 },
        { q: "Homepage should include:", o: ["Just hero", "Hero, products, trust, navigation", "Only text", "Animation only"], c: 1 }
    ],
    // Task 8: Client Handoff
    [
        { q: "Layers should be:", o: ["Randomly named", "Properly named and organized", "Unnamed", "Deleted"], c: 1 },
        { q: "Photos should be exported as:", o: ["SVG", "WebP/JPG", "PDF", "AI"], c: 1 },
        { q: "Icons should be exported as:", o: ["JPG", "PNG only", "SVG", "GIF"], c: 2 },
        { q: "Style guide includes:", o: ["Random notes", "Colors, fonts, components", "Only wireframes", "Sketches"], c: 1 },
        { q: "Loom video length:", o: ["30 seconds", "2-5 minutes", "30 minutes", "1 hour"], c: 1 },
        { q: "Figma Dev Mode is for:", o: ["Designers only", "Developers", "Clients", "Marketing"], c: 1 },
        { q: "Walkthrough video should explain:", o: ["Personal opinions", "Design approach, interactions, responsive behavior", "Salary expectations", "Personal life"], c: 1 },
        { q: "Logos should be exported as:", o: ["JPG only", "SVG + PNG", "GIF", "BMP"], c: 1 },
        { q: "Design specs are:", o: ["Optional", "Required for developers", "Only for print", "Not needed"], c: 1 },
        { q: "Asset organization matters because:", o: ["It looks nice", "Saves developer time", "Not important", "Only for large projects"], c: 1 }
    ],
    // Task 9: Practice Scenarios
    [
        { q: "When client says 'make it pop', you should:", o: ["Just guess", "Ask clarifying questions", "Ignore them", "Refuse the project"], c: 1 },
        { q: "Endless revisions should be handled by:", o: ["Accepting everything", "Documenting feedback, setting limits", "Quitting", "Ignoring client"], c: 1 },
        { q: "Bad client assets require:", o: ["Using them anyway", "Request better quality or suggest alternatives", "Refusing project", "Complaining"], c: 1 },
        { q: "Mood board should be created:", o: ["After final design", "Before designing for approval", "Never", "Only for print"], c: 1 },
        { q: "Contradicting feedback should be:", o: ["Ignored", "Documented in writing", "Accepted without question", "Argued about"], c: 1 },
        { q: "Revision limits should be set:", o: ["Never", "Upfront", "After completion", "When annoyed"], c: 1 },
        { q: "Low-resolution images need:", o: ["To be used anyway", "Higher quality alternatives", "More filters", "Stretching"], c: 1 },
        { q: "Missing brand guidelines means:", o: ["Skip branding", "Create basic guidelines", "Use random colors", "Refuse project"], c: 1 },
        { q: "PM escalation is needed when:", o: ["Never", "Problems persist", "Always", "First day"], c: 1 },
        { q: "Clarifying questions help:", o: ["Waste time", "Get clear direction", "Annoy client", "Delay project"], c: 1 }
    ],
    // Task 10: Final Certification (20 questions)
    [
        { q: "Good design is:", o: ["Pretty only", "Functional only", "Beautiful AND functional", "Complex"], c: 2 },
        { q: "Mobile traffic percentage:", o: ["30%", "50%", "70%", "90%"], c: 2 },
        { q: "Maximum fonts:", o: ["1", "2-3", "5", "10"], c: 1 },
        { q: "Mobile-first starts at:", o: ["1440px", "768px", "375px", "320px"], c: 2 },
        { q: "Minimum touch target:", o: ["24px", "32px", "44px", "60px"], c: 2 },
        { q: "5-second test checks:", o: ["Speed", "What sells, where to click, trust", "Colors", "Fonts"], c: 1 },
        { q: "Auto Layout shortcut:", o: ["Ctrl+A", "Shift+A", "Alt+A", "Tab"], c: 1 },
        { q: "Icons export format:", o: ["JPG", "PNG", "SVG", "GIF"], c: 2 },
        { q: "Digital Heroes subscribers:", o: ["1M", "2.5M+", "5M", "10M"], c: 1 },
        { q: "CTA buttons should be:", o: ["Hidden", "Small", "Prominent", "Same as background"], c: 2 },
        { q: "Line height:", o: ["1.0", "1.2", "1.5-1.7", "2.5"], c: 2 },
        { q: "Contrast ratio minimum:", o: ["2:1", "3:1", "4.5:1", "10:1"], c: 2 },
        { q: "Loom video length:", o: ["30 sec", "2-5 min", "30 min", "1 hour"], c: 1 },
        { q: "Visual hierarchy means:", o: ["All equal", "Important stands out", "Random", "Hidden"], c: 1 },
        { q: "E-commerce design is about:", o: ["Art", "Selling", "Complexity", "Decoration"], c: 1 },
        { q: "White space is:", o: ["Wasted", "Breathing room", "Mistake", "Bad"], c: 1 },
        { q: "When brief is unclear:", o: ["Guess", "Ask questions", "Refuse", "Start anyway"], c: 1 },
        { q: "Components in Figma are:", o: ["One-time use", "Reusable elements", "Layers", "Pages"], c: 1 },
        { q: "Premium price range:", o: ["$500", "$800", "$1,200-$1,800", "$3,000"], c: 2 },
        { q: "Mobile text minimum:", o: ["10px", "12px", "14px", "16px"], c: 3 }
    ]
];
