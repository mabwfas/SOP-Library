// Content Writer Training Data
// Complete training content for Content Writer certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "Writer Mindset",
        description: "Voice & Tone",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize the 'Value-First' mindset",
            "🚫 Understand why 'Fluff' is the enemy",
            "📣 Learn the Digital Heroes Brand Voice"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🔺 Study the Content Strategy Pyramid",
            "🏢 Memorize the 3 ecosystem arms",
            "💎 Understand the 'Premium' quality standard"
        ]
    },
    {
        id: 3,
        title: "Copywriting Formulas",
        description: "Structuring persuasion",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📐 Master the AIDA & PAS formulas",
            "🎣 Learn how to write 'Hooks' that stop the scroll",
            "🏁 Understand 'Calls to Action' (CTAs)"
        ]
    },
    {
        id: 4,
        title: "SEO Mastery",
        description: "Writing for Google",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-40 minutes",
            "🔍 Study the Keyword Placement Blueprint",
            "🏷️ Learn Meta Titles & Descriptions",
            "🔗 Understand Internal vs External linking"
        ]
    },
    {
        id: 5,
        title: "Research & Fact-Checking",
        description: "Authority building",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🕵️‍♀️ Learn the 'Zero-Click' search method",
            "📊 How to find and cite data sources",
            "🚫 Avoiding plagiarism and AI detection"
        ]
    },
    {
        id: 6,
        title: "Editing & Polish",
        description: "The rewriting process",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "✂️ Master the 'Hemingway' technique",
            "📖 Learn to spot passive voice",
            "👀 The 'Read Aloud' proofreading trick"
        ]
    },
    {
        id: 7,
        title: "Tools of the Trade",
        description: "CMS & Software",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-30 minutes",
            "📝 Working in Google Docs/Notion",
            "✅ Using Grammarly effectively",
            "📸 Sourcing royalty-free images (Unsplash)"
        ]
    },
    {
        id: 8,
        title: "Content Repurposing",
        description: "Maximizing value",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "♻️ Turning 1 blog post into 5 social posts",
            "📧 Writing email newsletters from existing content",
            "🧵 Creating Twitter threads"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world challenges",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🧠 Rewrite a 'Boring' headline",
            "📝 Fix a paragraph full of jargon",
            "🔥 Create 3 hook variations for a topic"
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
            "🎉 Get ready to publish!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: WRITER MINDSET - Becoming the Smart Friend</h2>

<div class="content-section">
<h3>🎯 Why Are You Here?</h3>
<p>Content is not about filling space. It's about <strong>moving people</strong>. Every sentence you write should earn the reader's next second of attention. If your content doesn't educate, entertain, or convert — it's noise.</p>

<div class="warning-box">
<strong>⚠️ The Uncomfortable Truth:</strong><br>
The average person encounters <strong>5,000+ marketing messages per day</strong>. If your content is forgettable, you've already lost.
<p style="margin-top: 10px;">We don't write to publish. We write to <strong>make an impact</strong>.</p>
</div>
</div>

<div class="content-section">
<h3>💡 The Three Purposes of Content</h3>
<p>Every piece of content must accomplish at least one of these:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
<div style="padding: 25px; background: rgba(16, 185, 129, 0.1); border-radius: 12px; border: 2px solid rgba(16, 185, 129, 0.3);">
<h4 style="color: #10B981; margin-top: 0;">📚 Educate</h4>
<p>Solve a specific problem for the reader. Give them knowledge they can use immediately.</p>
</div>

<div style="padding: 25px; background: rgba(6, 182, 212, 0.1); border-radius: 12px; border: 2px solid rgba(6, 182, 212, 0.3);">
<h4 style="color: #06B6D4; margin-top: 0;">🎭 Entertain</h4>
<p>Make the reading experience enjoyable. If it's boring, readers leave. Keep them hooked.</p>
</div>

<div style="padding: 25px; background: rgba(139, 92, 246, 0.1); border-radius: 12px; border: 2px solid rgba(139, 92, 246, 0.3);">
<h4 style="color: #8B5CF6; margin-top: 0;">💰 Convert</h4>
<p>Guide the reader to the next step. Whether it's a click, signup, or purchase.</p>
</div>
</div>
</div>

<div class="content-section">
<h3>📣 The Brand Voice: "The Smart Friend"</h3>
<p>Imagine explaining something to a friend who's smart but not an expert. That's our voice.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Our Voice Is</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>Example</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Confident but Humble</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's what works best..." (not "We're the greatest at...")</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Clear, Not Clever</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This helps your site load faster" (not "Optimizing perceived latency")</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Empathetic</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We know how frustrating slow sales can be..." (acknowledge the struggle)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Actionable</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's exactly what to do..." (not vague advice)</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🚫 Fluff is the Enemy</h3>
<p>Fluff = words that add no value. It makes readers leave.</p>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Fluffy Writing</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Tight Writing</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"In today's fast-paced digital landscape..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's what's working in 2024..."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It goes without saying that..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[Just delete it]</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"As a matter of fact..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[State the fact directly]</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I believe that maybe..."</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This works because..."</td>
</tr>
</table>

<div class="highlight-box">
<strong>The Test:</strong> Read every sentence. If removing it doesn't change the meaning → delete it.
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Find Your Voice</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Fluff Detection (5 min)</h4>
<p>Rewrite this fluffy paragraph to be half the length while keeping the meaning:</p>
<p style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; font-style: italic;">"In today's ever-changing digital landscape, it is absolutely crucial and important for businesses of all sizes to basically understand that they need to leverage synergistic marketing strategies in order to effectively reach and engage with their target audience in a meaningful way."</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Voice Comparison (5 min)</h4>
<p>Write the same message in two voices:</p>
<ul>
<li><strong>Corporate/Stiff:</strong> "Dear valued customer, we wish to inform you..."</li>
<li><strong>Smart Friend:</strong> Write the same thing in our brand voice</li>
</ul>
<p>Topic: Telling a customer their order shipped</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Content Purpose Check (5 min)</h4>
<p>Think of a recent blog post or article you read. Identify:</p>
<ol>
<li>Did it Educate? What did you learn?</li>
<li>Did it Entertain? What made it engaging?</li>
<li>Did it Convert? What action did it want you to take?</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned the content writer mindset. Now prove your understanding.</p>
<ul>
<li>📝 10 questions about brand voice and writing principles</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🔺 Content Strategy Pyramid</h3>
<img src="images/content_pyramid_strategy.png" alt="Content Strategy Pyramid" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🏢 Where You Fit In</h3>
<p>Content fuels the entire ecosystem:</p>
<ul>
<li><strong>Blog:</strong> Drives SEO traffic (Top of Funnel).</li>
<li><strong>Email:</strong> Nurtures leads (Middle of Funnel).</li>
<li><strong>Case Studies:</strong> Closes deals (Bottom of Funnel).</li>
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
<h2>📚 TASK 3: COPYWRITING FORMULAS</h2>

<div class="content-section">
<h3>📐 The Blueprints of Persuasion</h3>
<img src="images/copywriting_formula_visual.png" alt="AIDA vs PAS Formulas" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🎣 How to Write a Hook</h3>
<p>The first sentence determines if the rest is read.</p>
<ul>
<li><strong>The Curiosity Gap:</strong> "The #1 mistake Shopify stores make..."</li>
<li><strong>The Contrarian:</strong> "Why SEO is dead (and what replaced it)."</li>
<li><strong>The Promise:</strong> "Double your conversion rate in 5 minutes."</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about formulas</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: SEO WRITING MASTERY - Writing for Humans AND Google</h2>

<div class="content-section">
<h3>🔍 The Two Audiences</h3>
<div class="highlight-box">
<strong>Every piece of content serves TWO masters:</strong>
<ul>
<li><strong>Humans:</strong> They need to want to READ it (engaging, valuable)</li>
<li><strong>Google:</strong> It needs to be FOUND (optimized, structured)</li>
</ul>
<p>Write for humans first, optimize for Google second. Never the other way around.</p>
</div>
</div>

<div class="content-section">
<h3>🏷️ On-Page SEO Checklist</h3>

<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Element</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Requirement</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Example</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Title</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50-60 characters, keyword near start</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify SEO Guide: Rank #1 in 2024"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Meta Description</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">150-160 characters, includes CTA</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Learn the exact steps to rank your store. Free checklist included."</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>URL Slug</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Short, keyword-rich, no dates</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">/shopify-seo-guide (NOT /blog/2023/seo)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>H1 Heading</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">One per page, includes keyword</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"The Complete Shopify SEO Guide"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Image Alt Text</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Descriptive, keyword if natural</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Shopify product page SEO settings"</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📍 Keyword Placement Strategy</h3>
<p>Where to place your primary keyword naturally:</p>
<ol>
<li><strong>Title/H1:</strong> Within the first 60 characters</li>
<li><strong>First paragraph:</strong> Within the first 100 words</li>
<li><strong>Subheadings:</strong> 1-2 H2s should include keyword variations</li>
<li><strong>Body:</strong> 1-2% density (don't overdo it)</li>
<li><strong>Conclusion:</strong> Mention it naturally in the wrap-up</li>
</ol>

<div class="warning-box">
<strong>⚠️ Keyword Stuffing = Penalty</strong>
<p>If it sounds weird when read aloud, you've gone too far. Always prioritize readability.</p>
</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Master SEO Writing</h3>
<p><strong>Before taking the quiz, complete these exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Write SEO Meta Tags (10 min)</h4>
<p>For the keyword "best coffee grinder 2024", write:</p>
<ol>
<li>A meta title (50-60 characters)</li>
<li>A meta description (150-160 characters with CTA)</li>
<li>A clean URL slug</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Keyword Placement Audit (10 min)</h4>
<p>Find a blog post on any Shopify store. Check if it has:</p>
<ul>
<li>Keyword in the title/H1?</li>
<li>Keyword in the first paragraph?</li>
<li>Natural keyword density (not stuffed)?</li>
<li>Image alt text with description?</li>
</ul>
<p>Give it a score out of 4.</p>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Read the Content SOP (10 min)</h4>
<p>Open the <a href="../content-sop.html" target="_blank" style="color: #8B5CF6;">Content Writer SOP document</a> and read:</p>
<ul>
<li>SEO Writing Guidelines section</li>
<li>Meta Tag Best Practices section</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about SEO writing</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: RESEARCH & FACT-CHECKING</h2>

<div class="content-section">
<h3>🕵️‍♀️ Sourcing Like a Pro</h3>
<div class="highlight-box">
<strong>Never guess statistics.</strong>
<ul>
<li>Use primary sources (Statista, Pew Research, Google Trends).</li>
<li>Link to the original study, not a blog talking about the study.</li>
<li>Check the date: Data older than 2 years is likely irrelevant in tech.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚫 Plagiarism & AI</h3>
<div class="warning-box">
<strong>We use checkers.</strong>
<p>It's okay to use AI for outlines or brainstorming. It is NOT okay to copy-paste AI output. It lacks soul, nuance, and accuracy.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about research</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: EDITING & POLISH</h2>

<div class="content-section">
<h3>✂️ The Hemingway Method</h3>
<p>Ernest Hemingway wrote short sentences. Be like him.</p>
<ul>
<li><strong>Cut adverbs:</strong> "He ran quickly" -> "He sprinted".</li>
<li><strong>Break up walls of text:</strong> Paragraphs should be 2-3 sentences max.</li>
<li><strong>Use bullet points:</strong> Like this list. It scans better.</li>
</ul>
</div>

<div class="content-section">
<h3>👀 The Read-Aloud Test</h3>
<p>If you stumble when reading your work out loud, the reader will stumble in their head. Rewrite it until it flows like conversation.</p>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about editing</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS OF THE TRADE</h2>

<div class="content-section">
<h3>📝 Essential Software</h3>
<ul>
<li><strong>Google Docs:</strong> Drafting and collaboration (Suggesting Mode).</li>
<li><strong>Grammarly:</strong> Spell check (but don't blindly accept all changes).</li>
<li><strong>Hemingway App:</strong> Check readability score (Aim for Grade 6-8).</li>
<li><strong>Ahrefs/SEMrush:</strong> For keyword research.</li>
</ul>
</div>

<div class="content-section">
<h3>📸 Visuals</h3>
<p>Content without images is boring.</p>
<ul>
<li>Use screenshots to explain steps.</li>
<li>Use Unsplash/Pexels for mood images (avoid cheesy stock photos).</li>
<li>Always compress images (WebP format) before uploading.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about tools</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: CONTENT REPURPOSING</h2>

<div class="content-section">
<h3>♻️ Work Smarter</h3>
<p>One good idea = Many pieces of content.</p>
<div class="highlight-box">
<strong>The Waterfall Method:</strong>
<ol>
<li><strong>Video/Podcast (Source):</strong> Record a conversation.</li>
<li><strong>Blog Post:</strong> Transcribe and structure it.</li>
<li><strong>Twitter Thread:</strong> Extract 5 key points.</li>
<li><strong>LinkedIn Post:</strong> Share a personal insight from it.</li>
<li><strong>Newsletter:</strong> Summarize it for subscribers.</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about repurposing</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🧠 Scenario 1: Boring Headline</h3>
<p><strong>Original:</strong> "Tips for E-commerce Marketing"</p>
<div class="highlight-box">
<strong>Make it Better:</strong>
<ul>
<li>"5 E-commerce Marketing Hacks Under $100" (Specific benefit)</li>
<li>"Why Your Marketing Isn't Working (And How to Fix It)" (Problem/Solution)</li>
<li>"The Marketing Strategy That Made $1M in 30 Days" (Proof/Aspiration)</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📝 Scenario 2: Jargon Overload</h3>
<p><strong>Original:</strong> "We leverage synergistic paradigms to optimize KPI throughput."</p>
<div class="warning-box">
<strong>Translation:</strong> "We work together to improve your results."
</div>
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
<p>You've completed the Content Writer training. This final assessment covers:</p>
<ul>
<li>✅ Brand Value & Tone</li>
<li>✅ Content Stragegy</li>
<li>✅ Copywriting Formulas (AIDA, PAS)</li>
<li>✅ SEO Standards</li>
<li>✅ Research & Ethics</li>
<li>✅ Editing Techniques</li>
<li>✅ Tools & Workflow</li>
<li>✅ Repurposing Strategy</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your Writer Certification.</p>
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

// Quiz Questions
const allQuizzes = [
    // Task 1: Mindset
    [
        { q: "Our brand voice is:", o: ["Corporate and stiff", "Smart friend", "Silly and loud", "Academic"], c: 1 },
        { q: "Content purpose 1:", o: ["Confuse", "Educate", "Hide info", "Fill space"], c: 1 },
        { q: "Content purpose 2:", o: ["Bore", "Entertain", "Annoy", "Distract"], c: 1 },
        { q: "Content purpose 3:", o: ["Convert", "Stop", "Block", "Reject"], c: 0 },
        { q: "We avoid:", o: ["Facts", "Fluff", "Clarity", "Value"], c: 1 },
        { q: "Clear is better than:", o: ["Correct", "Clever", "Fast", "Kind"], c: 1 },
        { q: "Tone should be:", o: ["Arrogant", "Confident but humble", "Shy", "Aggressive"], c: 1 },
        { q: "Empathetic means:", o: ["Ignoring feelings", "Understanding the reader's struggle", "Crying", "Complaining"], c: 1 },
        { q: "Writing to fill space is:", o: ["Good", "Bad", "Required", "Fun"], c: 1 },
        { q: "The Smart Friend explains:", o: ["Without jargon", "With complex words", "Condescendingly", "Poorly"], c: 0 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Pyramid Base:", o: ["Viral", "SEO Content", "Value", "Ads"], c: 1 },
        { q: "Pyramid Middle:", o: ["SEO", "Value/Education", "Viral", "Sales"], c: 1 },
        { q: "Pyramid Top:", o: ["SEO", "Value", "Viral/Engagement", "Support"], c: 2 },
        { q: "Blog content is usually:", o: ["Bottom Funnel", "Top Funnel", "Useless", "Internal"], c: 1 },
        { q: "Email nurtures:", o: ["Leads", "Spam folders", "Robots", "Nobody"], c: 0 },
        { q: "Case studies are:", o: ["Top Funnel", "Bottom Funnel / Closing", "Middle Funnel", "Secret"], c: 1 },
        { q: "Premium quality means:", o: ["No typos, deep research", "Fast and cheap", "AI generated", "Short"], c: 0 },
        { q: "Youtube subscribers:", o: ["1M", "2.5M+", "5M", "10M"], c: 1 },
        { q: "Content fuels:", o: ["Nothing", "The entire ecosystem", "Only blog", "Only ads"], c: 1 },
        { q: "We prioritize:", o: ["Quantity", "Quality", "Speed", "Noise"], c: 1 }
    ],
    // Task 3: Formulas
    [
        { q: "AIDA stands for:", o: ["Always In Direct Action", "Attention Interest Desire Action", "Apple Is Doing Awesome", "None"], c: 1 },
        { q: "PAS stands for:", o: ["Problem Agitate Solution", "Pass All Students", "Post And See", "Push And Shove"], c: 0 },
        { q: "The Hook's job is:", o: ["Summarize", "Stop the scroll", "Sell", "End the post"], c: 1 },
        { q: "Curiosity gap uses:", o: ["Facts", "Mystery/Missing info", "Jokes", "Lies"], c: 1 },
        { q: "A CTA is:", o: ["Call To Action", "Cat To Adopt", "Click The Ad", "None"], c: 0 },
        { q: "Agitate means:", o: ["Calm down", "Rub salt in the wound / Intensify pain", "Fix it", "Ignore it"], c: 1 },
        { q: "Interest keeps them:", o: ["Reading", "Sleeping", "Leaving", "Buying"], c: 0 },
        { q: "Desire creates:", o: ["Confusion", "Want for the solution", "Anger", "Boredom"], c: 1 },
        { q: "Problem stage:", o: ["Identifies pain", "Solves it", "Ignores it", "Creates it"], c: 0 },
        { q: "Contrarian hook:", o: ["Agrees with everyone", "Goes against common belief", "Is boring", "Is standard"], c: 1 }
    ],
    // Task 4: SEO
    [
        { q: "H1 Tag is for:", o: ["Subheading", "Main Title", "Paragraph", "Link"], c: 1 },
        { q: "Primary keyword goes in:", o: ["H1, First 100 words, URL", "Footer only", "Nowhere", "Images only"], c: 0 },
        { q: "Meta Title length:", o: ["10 chars", "50-60 chars", "100+ chars", "Unlimited"], c: 1 },
        { q: "Meta Description is:", o: ["Ranking factor", "A mini-ad for clicks", "Useless", "Hidden"], c: 1 },
        { q: "Alt text is for:", o: ["Styling", "Accessibility & Image SEO", "Hiding text", "Nothing"], c: 1 },
        { q: "URL slug should be:", o: ["Long and messy", "Short and clean", "Numbers only", "Random"], c: 1 },
        { q: "Internal links go to:", o: ["Other sites", "Your own site pages", "Google", "Nowhere"], c: 1 },
        { q: "External links go to:", o: ["Your site", "Authoritative other sites", "Spam sites", "Nowhere"], c: 1 },
        { q: "Keyword stuffing is:", o: ["Good", "Bad/Penalized", "Required", "Fun"], c: 1 },
        { q: "First 100 words should:", o: ["Hide topic", "Include keyword", "Be empty", "Be an image"], c: 1 }
    ],
    // Task 5: Research
    [
        { q: "Zero-click search:", o: ["Clicking nothing", "Using Google snippets without opening sites", "Searching zero times", "None"], c: 1 },
        { q: "Primary source example:", o: ["Random blog", "Statista/Original Study", "Twitter comment", "Opinion"], c: 1 },
        { q: "Data age limit:", o: ["10 years", "5 years", "2 years", "1 month"], c: 2 },
        { q: "Plagiarism is:", o: ["Stealing work", "Sharing", "Quoting", "Research"], c: 0 },
        { q: "AI copy-paste is:", o: ["Encouraged", "Forbidden generally", "Required", "Standard"], c: 1 },
        { q: "When citing:", o: ["Link to original", "Link to listicle", "Don't link", "Link to homepage"], c: 0 },
        { q: "Fact checking prevents:", o: ["Accuracy", "Misinformation", "Speed", "Publishing"], c: 1 },
        { q: "AI is good for:", o: ["Final draft", "Outlining/Brainstorming", "Everything", "Nothing"], c: 1 },
        { q: "Guessing stats is:", o: ["Professional", "Unprofessional/Dangerous", "Okay sometimes", "Faster"], c: 1 },
        { q: "Authority comes from:", o: ["Lying", "Accuracy and depth", "Typing fast", "Using bold"], c: 1 }
    ],
    // Task 6: Editing
    [
        { q: "Hemingway app checks:", o: ["Spelling", "Readability/Grade Level", "SEO", "Plagiarism"], c: 1 },
        { q: "Passive voice example:", o: ["I wrote the post", "The post was written by me", "Write the post", "I am writing"], c: 1 },
        { q: "Adverbs should be:", o: ["Multiplied", "Cut/Reduced", "Capitalized", "Bolded"], c: 1 },
        { q: "Paragraph length:", o: ["10 sentences", "2-3 sentences", "1 page", "1 word"], c: 1 },
        { q: "Read aloud test finds:", o: ["Typos and flow issues", "Keywords", "Images", "Links"], c: 0 },
        { q: "Bullet points help:", o: ["SEO", "Scannability", "Loading speed", "Nothing"], c: 1 },
        { q: "Wall of text:", o: ["Good", "Bad/Intimidating", "Professional", "Academic"], c: 1 },
        { q: "Short sentences are:", o: ["Punchy", "Childish", "Bad", "Wrong"], c: 0 },
        { q: "Editing happens:", o: ["While writing", "After drafting", "Never", "Before research"], c: 1 },
        { q: "Aim for Grade Level:", o: ["12+", "6-8", "1-2", "PhD"], c: 1 }
    ],
    // Task 7: Tools
    [
        { q: "Google Docs mode for feedback:", o: ["Editing", "Suggesting", "Viewing", "Deleting"], c: 1 },
        { q: "Grammarly is for:", o: ["SEO", "Spell/Grammar check", "Design", "Coding"], c: 1 },
        { q: "Unsplash provides:", o: ["Code", "Royalty-free images", "Music", "Videos"], c: 1 },
        { q: "Ahrefs is for:", o: ["Writing", "Keyword Research", "Design", "Email"], c: 1 },
        { q: "Compress images to:", o: ["BMP", "WebP", "TIFF", "RAW"], c: 1 },
        { q: "Notion is used for:", o: ["Organization/Docs", "Hosting", "Emailing", "Coding"], c: 0 },
        { q: "Avoid stock photos that look:", o: ["Professional", "Cheesy/Fake", "Real", "High quality"], c: 1 },
        { q: "Blindly accepting Grammarly is:", o: ["Smart", "Bad practice", "Required", "Fast"], c: 1 },
        { q: "Screenshots help:", o: ["Confuse", "Explain steps", "Hide text", "Fill space"], c: 1 },
        { q: "Tool mastery increases:", o: ["Efficiency", "Boredom", "Cost", "Errors"], c: 0 }
    ],
    // Task 8: Repurposing
    [
        { q: "Waterfall method starts with:", o: ["Tweet", "Long-form (Video/Podcast)", "Email", "Image"], c: 1 },
        { q: "One idea can become:", o: ["1 post", "Many pieces of content", "Nothing", "A book only"], c: 1 },
        { q: "Transcription turns video into:", o: ["Audio", "Text/Blog", "Image", "Code"], c: 1 },
        { q: "Thread extracts:", o: ["Whole article", "Key points", "Comments", "Links"], c: 1 },
        { q: "Newsletter summarizes for:", o: ["Subscribers", "Bots", "Strangers", "Nobody"], c: 0 },
        { q: "Repurposing saves:", o: ["Money", "Time/Effort", "Space", "Data"], c: 1 },
        { q: "LinkedIn post can be:", o: ["Personal insight", "Full blog", "Video only", "Meme"], c: 0 },
        { q: "Don't just copy-paste, you should:", o: ["Delete", "Adapt for platform", "Hide it", "Translation"], c: 1 },
        { q: "Twitter threads need:", o: ["Hooks", "Titles", "Conclusions", "Sources"], c: 0 },
        { q: "Repurposing extends:", o: ["Content lifespan", "Loading time", "Writing time", "None"], c: 0 }
    ],
    // Task 9: Scenarios
    // Task 9: Scenarios
    [
        { q: "Fix boring headline 'Marketing Tips':", o: ["Tips for Marketing", "Marketing 101", "5 Marketing Hacks to Double Sales", "Good Marketing"], c: 2 },
        { q: "Fix jargon 'Leverage synergies':", o: ["Work together", "Utilize paradigms", "Touching base", "Circle back"], c: 0 },
        { q: "Headline 'How to lose weight':", o: ["Weight Loss", "Lose 10lbs in 10 Days Without Starving", "Dieting", "Health"], c: 1 },
        { q: "Fix passive 'Mistakes were made':", o: ["I made a mistake", "It happened", "Errors occurred", "Bad things"], c: 0 },
        { q: "Specific benefit headline:", o: ["Good stuff", "Get X in Y time", "Stuff happening", "News"], c: 1 },
        { q: "Problem/Solution headline:", o: ["Why X sucks and how to fix it", "X is bad", "Fixing things", "Solutions"], c: 0 },
        { q: "Jargon alienates:", o: ["Nobody", "The reader", "Experts", "Bots"], c: 1 },
        { q: "Proof in headline:", o: ["Trust me", "How I made $1M", "Maybe works", "Try it"], c: 1 },
        { q: "Scenario practice helps:", o: ["Nothing", "Real skills", "Memorization", "Typing"], c: 1 },
        { q: "Simple language is:", o: ["Dumb", "Persuasive", "Unprofessional", "Slow"], c: 1 }
    ],
    // Task 10: Final (20)
    [
        { q: "AIDA:", o: ["Attention Interest Desire Action", "All In", "Apple", "None"], c: 0 },
        { q: "Zero-click:", o: ["Answer on SERP", "No results", "Broken mouse", "None"], c: 0 },
        { q: "Hemingway App:", o: ["Readability", "Coding", "Design", "SEO"], c: 0 },
        { q: "Meta Title chars:", o: ["10", "50-60", "100", "200"], c: 1 },
        { q: "Primary Keyword location:", o: ["Footer", "H1 & First 100 words", "Hidden", "Nowhere"], c: 1 },
        { q: "Passive voice:", o: ["Action doer first", "Object first (was done by)", "Loud voice", "Quiet"], c: 1 },
        { q: "Evergreen content:", o: ["News", "Timeless value", "Viral trends", "Gossip"], c: 1 },
        { q: "Repurposing:", o: ["Copy paste", "Adapting content", "Deleting", "Ignoring"], c: 1 },
        { q: "Alt Text:", o: ["Styling", "Descriptions for SEO/Access", "Links", "Tags"], c: 1 },
        { q: "CTA:", o: ["Call To Action", "Click This Area", "Content To Author", "None"], c: 0 },
        { q: "Internal Link:", o: ["Link to own site", "Link to Google", "Link out", "No link"], c: 0 },
        { q: "Brand Voice:", o: ["Smart Friend", "Strict Teacher", "Clown", "Robot"], c: 0 },
        { q: "H2 tags:", o: ["Subheadings", "Titles", "Paragraphs", "Links"], c: 0 },
        { q: "Plagiarism:", o: ["Stealing", "Sharing", "Creating", "Borrowing"], c: 0 },
        { q: "Hook:", o: ["First sentence", "Last sentence", "Image", "Link"], c: 0 },
        { q: "Value First:", o: ["Give before taking", "Take money", "Sell hard", "Hide info"], c: 0 },
        { q: "Search Volume:", o: ["How many people search", "Loudness", "Number of words", "Results"], c: 0 },
        { q: "Backlink:", o: ["Link from other site", "Link to other site", "Menu link", "Footer"], c: 0 },
        { q: "Slug:", o: ["URL ending", "Animal", "Slow site", "Bug"], c: 0 },
        { q: "Bounce Rate:", o: ["Leaving quickly", "Buying", "Returning", "Scrolling"], c: 0 }
    ]
];
