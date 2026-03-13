// AI Training - Digital Heroes AI Mastery Module

const trainingTasks = [
    { id: 1, title: "What is AI?", description: "From Sci-Fi to Your Desktop", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🤖 AI fundamentals", "📖 Models & capabilities"] },
    { id: 2, title: "Prompt Engineering", description: "Mastering AI Communication", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "✍️ Prompt techniques", "📖 Templates & patterns"] },
    { id: 3, title: "Custom GPTs", description: "Building AI Assistants", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🛠️ GPT Builder", "📖 Claude Projects"] },
    { id: 4, title: "Claude Code", description: "AI-Powered Development", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "💻 CLI agent mastery", "📖 CLAUDE.md & workflows"] },
    { id: 5, title: "Chrome & Antigravity", description: "Claude Extensions & MCP", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🌐 Browser AI tools", "📖 MCP servers"] },
    { id: 6, title: "Shopify CLI + AI", description: "AI-Powered Store Development", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🛒 Theme development", "📖 Liquid + AI workflow"] },
    { id: 7, title: "AI for Design", description: "Branding & Visual Creation", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🎨 AI design tools", "📖 Stitch, 21st.dev, Midjourney"] },
    { id: 8, title: "AI for Content & SEO", description: "Writing, Marketing & Optimization", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 AI content creation", "📖 SEO optimization"] },
    { id: 9, title: "AI for PM & Ops", description: "Project Management & Automation", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 AI for planning", "📖 Workflow automation"] },
    { id: 10, title: "Final Certification", description: "AI Ethics, Security & Exam", contentFirst: false, studyGuide: ["⏱️ Time: 90 min", "📝 15 Questions", "🎓 Comprehensive exam"] }
];


// ═══════════════════════════════════════
// TASK 1: What is AI?
// ═══════════════════════════════════════

const task1Content = `
<h2>🤖 TASK 1: WHAT IS AI? — From Sci-Fi to Your Desktop</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🚀 Welcome to AI Training</h3>
    <p>AI is not the future — it's the <strong>present</strong>. At Digital Heroes, every single team member is expected to use AI tools daily to 10x their output. This isn't optional. If you're not using AI, you're working at 10% capacity.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🎯 The DH AI Philosophy</strong>
        <p>Every task you do — writing emails, creating designs, coding, managing projects — can be enhanced with AI. Your job is to become the <strong>human-in-the-loop</strong> who directs AI to produce exceptional work.</p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📚 AI vs ML vs Deep Learning vs LLMs</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Term</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">What It Means</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Example</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>AI</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Broad field — machines that mimic human intelligence</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Siri, Tesla Autopilot</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>ML</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Subset of AI — learns from data patterns</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Netflix recommendations</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Deep Learning</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Subset of ML — neural networks with many layers</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Face recognition</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>LLM</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Large Language Model — trained on text to generate text</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">ChatGPT, Claude</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚙️ How LLMs Actually Work</h3>
    <p><strong>Tokens:</strong> LLMs break text into tokens (roughly 4 characters = 1 token). "Hello world" = 2 tokens. When you send a prompt, you're spending tokens.</p>
    <p><strong>Context Window:</strong> The total tokens an AI can "see" at once. Claude Opus has a 200K token context window — that's roughly 500 pages of text. GPT-4o has 128K tokens.</p>
    <p><strong>Temperature:</strong> Controls randomness. Temperature 0 = deterministic (same answer every time). Temperature 1 = creative (varied answers). For coding, use low temperature. For brainstorming, use high.</p>
    <p><strong>System Prompt:</strong> Hidden instructions that define the AI's persona and rules BEFORE the user speaks. This is how Custom GPTs and Claude Projects work — they set the system prompt.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🏆 The AI Model Landscape (2026)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Model</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DH Use Case</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Claude Opus</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Complex reasoning, coding, long documents</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude Code, architecture decisions</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Claude Sonnet</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Balanced speed + quality</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Daily tasks, content, analysis</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>GPT-4o</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom GPTs, multimodal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom GPTs for client workflows</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Gemini</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Google integration, large context</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Research, Google Workspace tasks</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">⚠️ When AI Fails — Hallucinations & Limits</h3>
    <ul>
        <li><strong>Hallucinations:</strong> AI confidently generates wrong information. It might invent fake APIs, wrong function names, or fictional statistics. ALWAYS verify critical facts.</li>
        <li><strong>Knowledge Cutoff:</strong> Models have training data cutoffs. They may not know about very recent events or updates.</li>
        <li><strong>No Real Understanding:</strong> AI predicts the next likely token — it doesn't truly "understand" like a human. It can produce plausible-sounding nonsense.</li>
        <li><strong>DH Rule:</strong> NEVER submit AI output to a client without human review. You are responsible for every deliverable, not the AI.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: Your First AI Conversation</h3>
    <p><strong>Open Claude (claude.ai) and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">You are a senior Shopify developer at a digital agency. Explain to a new intern in 5 bullet points: What is the difference between an AI model's "context window" and its "training data"? Use simple analogies. End with one practical tip for using Claude effectively at work.</div>
    <p><strong>Expected output:</strong> 5 clear bullet points with analogies (e.g., context window = desk space, training data = everything you've ever read) plus a practical tip.</p>
    <p><strong>Why this works:</strong> You gave AI a <em>role</em> (senior dev), an <em>audience</em> (new intern), a <em>format</em> (5 bullets), and a <em>constraint</em> (simple analogies + practical tip). This is the ROLE-CONTEXT-FORMAT framework you'll master in Task 2.</p>
</div>
`;

const task1Quiz = [
    { q: "You're explaining AI to a new DH intern. They ask: 'Is ChatGPT an example of Machine Learning or AI?' The most accurate answer is:", o: ["It's only Machine Learning because it learns from data patterns", "It's only AI because it doesn't learn — it just retrieves stored answers from a database", "It's both — LLMs are a subset of Deep Learning, which is a subset of ML, which is a subset of AI", "It's neither — ChatGPT is a search engine with a conversational interface"], c: 2 },
    { q: "A developer asks Claude to generate a Shopify Liquid template. The response uses a function that doesn't exist in Liquid. This is an example of:", o: ["A context window overflow causing memory corruption in the model", "An AI hallucination — the model generated plausible but incorrect code that must be verified", "A bug in Claude's code that Anthropic needs to fix before it can be used", "Proof that AI can't be used for coding tasks and should only handle text"], c: 1 },
    { q: "You need to analyze a 200-page client document and extract key requirements. Which model characteristic matters most?", o: ["Temperature setting — higher temperature means better document analysis", "Training data size — bigger training data always means better analysis", "Context window size — you need a model that can fit the entire document in one session", "Model release date — newer models are always better for document analysis"], c: 2 },
    { q: "Your PM asks you to use AI for writing a client proposal. According to DH's AI policy, the correct approach is:", o: ["Generate the proposal with AI and send it directly — AI output is reliable enough for client communication", "Use AI to draft the proposal, then thoroughly review, edit, and verify every claim before sending", "Refuse to use AI — proposals should be 100% human-written to maintain quality standards", "Use AI but remove any mention of using AI tools since clients might not trust AI-generated content"], c: 1 },
    { q: "When setting temperature for AI to generate Shopify Liquid code for a production store, you should use:", o: ["Temperature 1.0 for maximum creativity in code solutions", "Temperature 0 or very low — deterministic output is critical for production code", "Temperature 0.7 as a balanced default for all tasks", "Temperature doesn't matter for code generation — it only affects creative writing"], c: 1 },
    { q: "Claude Opus has a 200K token context window. A client sends you a 600-page document to analyze. The best strategy is:", o: ["Paste the entire document at once — Claude will automatically handle overflow", "Break it into logical sections, analyze each separately, then synthesize the findings", "Convert it to a smaller format to reduce token count while keeping all content", "Tell the client AI can't handle documents this large and do it manually"], c: 1 },
    { q: "What is a 'system prompt' in the context of LLMs?", o: ["The first message the user sends to start a conversation with an AI model", "Hidden instructions that define the AI's role, behavior, and rules before the user interacts", "A debugging tool used only by AI developers to test model performance", "The AI's built-in personality that cannot be changed or customized by users"], c: 1 },
    { q: "A new DH employee says: 'I don't need AI training — I already use ChatGPT for personal stuff.' Why is this thinking problematic?", o: ["Personal ChatGPT usage means they're already an expert — they can skip this training entirely", "Using AI casually vs professionally is vastly different — professional use requires prompt engineering, verification, and workflow integration", "They should only use Claude, never ChatGPT, because DH has an exclusive contract with Anthropic", "Personal AI usage actually makes them worse at professional tasks due to bad habits"], c: 1 },
    { q: "Which statement about AI tokens is CORRECT?", o: ["1 token always equals exactly 1 word in English and all other languages", "Tokens are the billing unit and processing unit — more tokens = more cost and more context used", "Tokens only matter for input — AI output doesn't consume any tokens from the context window", "Token limits only apply to free tier users — paid plans have unlimited context windows"], c: 1 },
    { q: "Your team lead asks why Claude gave a wrong answer about a Shopify API endpoint released last month. The most likely explanation is:", o: ["Claude is broken and shouldn't be trusted for any technical questions going forward", "The model's training data has a knowledge cutoff — it may not know about very recent API changes", "Claude deliberately gave wrong information because it doesn't support Shopify", "The question was too complex for any AI model to handle accurately"], c: 1 },
    { q: "At Digital Heroes, the PRIMARY role of AI tools is to:", o: ["Replace human workers entirely so the company can scale with fewer employees", "Serve as a 10x multiplier for human output — you direct the AI, verify its work, and deliver excellence", "Handle all repetitive tasks while humans focus exclusively on creative and strategic work", "Impress clients by mentioning AI in proposals and charging premium rates for AI-assisted work"], c: 1 },
    { q: "Deep Learning differs from traditional Machine Learning because:", o: ["Deep Learning uses neural networks with many layers that can learn complex patterns automatically from raw data", "Deep Learning always requires more data and is therefore always better than ML for any task", "Deep Learning is just a marketing term — there's no real technical difference from basic ML", "Deep Learning only works for image recognition and cannot process text or audio data"], c: 0 }
];


// ═══════════════════════════════════════
// TASK 2: Prompt Engineering
// ═══════════════════════════════════════

const task2Content = `
<h2>✍️ TASK 2: PROMPT ENGINEERING — Mastering AI Communication</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">💡 Why Prompt Engineering Matters</h3>
    <p>The difference between a junior and senior AI user isn't the model they use — it's <strong>how they prompt</strong>. A great prompt can get a $20/month Claude subscription to outperform a $200/month setup with bad prompts.</p>
    <p><strong>Think of it this way:</strong> AI is like having a genius intern with amnesia. Every conversation starts fresh. Your prompt is the briefing document that turns that intern into a specialist.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🏗️ The RCFC Framework (Role-Context-Format-Constraints)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Component</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Role</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Who the AI should be</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"You are a senior Shopify developer with 10 years of experience"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Context</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Background information</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"We're building an e-commerce store for a luxury watch brand"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Format</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Desired output structure</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Provide the answer as a numbered checklist with code snippets"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Constraints</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Rules and boundaries</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Use only Dawn theme APIs. No external JS libraries. Max 50 lines."</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧠 Prompting Techniques</h3>

    <h4>1. Zero-Shot Prompting</h4>
    <p>Ask directly with no examples. Works for simple tasks.</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Write a product description for a blue silk scarf."</div>

    <h4>2. Few-Shot Prompting</h4>
    <p>Give 2-3 examples of what you want, then ask. Works for specific styles/formats.</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Here are examples of our brand voice:<br>Product A: 'Crafted for those who dare to stand out.'<br>Product B: 'Where elegance meets everyday.'<br>Now write one for Product C (leather wallet):"</div>

    <h4>3. Chain-of-Thought (CoT)</h4>
    <p>Ask AI to think step-by-step. Essential for complex reasoning.</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Think step by step: A client's conversion rate dropped from 3.2% to 1.8% after a redesign. Analyze possible causes and suggest fixes."</div>

    <h4>4. Iterative Refinement</h4>
    <p>Start broad, then narrow. Don't try to get perfection in one prompt.</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">Prompt 1: "Draft a homepage hero section for a pet food brand."<br>Prompt 2: "Make it more playful. Add a CTA button. Target millennial dog owners."<br>Prompt 3: "Now convert this to Shopify Liquid with Dawn theme classes."</div>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">❌ Common Prompt Mistakes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Bad Prompt</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Why It Fails</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Better Version</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Make me a website"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">No context, no specs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Create a Shopify Dawn homepage section for a luxury candle brand with a hero banner, 3 product cards, and a newsletter signup"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Fix this code" (pastes 500 lines)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">No error description</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"This Liquid section throws 'undefined variable product' on line 42. Here's the relevant code: [snippet]. Expected behavior: show product grid"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write something creative"</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Too vague</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write 3 Instagram captions for a skincare brand launching a vitamin C serum. Tone: fun, Gen-Z friendly. Include emoji and CTA."</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: Few-Shot Product Description</h3>
    <p><strong>Open Claude and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">You are a luxury e-commerce copywriter. Here are 2 examples of our brand voice:

Example 1 (Gold Watch): "Time doesn't wait. Neither should your style. The Meridian Gold — precision-engineered for those who lead."

Example 2 (Leather Bag): "From boardroom to boulevard. The Atlas Carry-All redefines what it means to travel in command."

Now write a product description for: Premium Bluetooth Headphones ($299, noise-canceling, 40-hour battery). Match the exact brand voice, tone, and sentence structure from the examples. Keep it under 40 words.</div>
    <p><strong>Expected output:</strong> A short, punchy product description matching the luxury brand voice with powerful verbs and aspirational language.</p>
    <p><strong>Why this works:</strong> Few-shot prompting gives the AI concrete examples to mimic. Combined with constraints (40 words, match exact voice), it produces highly consistent, on-brand output.</p>
</div>
`;

const task2Quiz = [
    { q: "A DH designer needs AI to create Instagram captions matching a specific brand voice. Which prompting technique is BEST?", o: ["Zero-shot — just ask for captions and let AI be creative with the style", "Few-shot — provide 2-3 examples of existing captions in the brand voice, then ask for new ones", "Chain-of-thought — ask AI to think step-by-step about what makes good captions", "Just copy captions from competitors and ask AI to rewrite them slightly"], c: 1 },
    { q: "In the RCFC framework, you write: 'You are a Shopify expert. We're building a pet food store. Give me a JSON schema. Use only Shopify metafield types.' Which part is the FORMAT?", o: ["'You are a Shopify expert'", "'We're building a pet food store'", "'Give me a JSON schema'", "'Use only Shopify metafield types'"], c: 2 },
    { q: "A developer pastes 500 lines of code and says 'fix this.' The AI gives a wrong fix. The primary problem is:", o: ["The AI model is too weak for coding tasks and a better model should be used", "The prompt lacks specificity — no error description, expected behavior, or relevant code section identified", "500 lines exceeds all model context windows so the code was truncated", "AI cannot fix code — it can only generate new code from scratch"], c: 1 },
    { q: "You need AI to analyze why a client's conversion rate dropped from 3.2% to 1.8%. The best prompting technique is:", o: ["Zero-shot — 'Why did conversions drop?' is sufficient for simple analysis", "Few-shot — show examples of other conversion analyses first", "Chain-of-thought — ask AI to 'think step-by-step' through possible causes systematically", "Just ask for the fix directly — analysis wastes time when you need quick solutions"], c: 2 },
    { q: "Your prompt says: 'Write product descriptions.' This violates the RCFC framework because it's missing:", o: ["Only the Role component — everything else is implied by the task", "Role, Context, Format, AND Constraints — it has none of the four components", "Only the Constraints — the rest can be inferred by the AI model", "Nothing — short prompts are always better because they give AI more creative freedom"], c: 1 },
    { q: "Iterative refinement means:", o: ["Writing one perfect prompt that gets the exact output you need on the first try", "Starting broad, then progressively narrowing with follow-up prompts until the output is right", "Asking the same prompt multiple times and picking the best result from many attempts", "Using multiple AI models simultaneously and combining their different outputs"], c: 1 },
    { q: "A content writer asks: 'Should I use few-shot or zero-shot for writing blog post outlines?' The best answer is:", o: ["Always zero-shot — blog outlines are simple enough that examples aren't needed", "Always few-shot — you should always provide examples no matter what the task is", "Zero-shot if the format is standard, few-shot if you need a specific structure or style", "Neither — use chain-of-thought for all content writing tasks instead"], c: 2 },
    { q: "You write a prompt for Claude: 'Create a Shopify section.' Claude produces generic code. To improve the output, you should:", o: ["Switch to GPT-4o since Claude can't handle Shopify code generation properly", "Add context (brand type, design requirements), format (Liquid + schema JSON), and constraints (Dawn-compatible, no external JS)", "Increase the temperature setting to make the AI more creative with code", "Ask Claude to try again — sometimes AI gives better results on a second attempt"], c: 1 },
    { q: "The 'genius intern with amnesia' analogy teaches us that:", o: ["AI is unreliable and should only be used for trivial tasks that don't matter", "Every AI conversation starts fresh — your prompt must include all necessary context each time", "AI has the same limitations as a human intern and makes the same types of mistakes", "You should treat AI rudely because being polite wastes tokens and doesn't affect output quality"], c: 1 },
    { q: "A PM needs to create 50 product descriptions for a client store. The most efficient AI workflow is:", o: ["Write all 50 prompts individually — each product is unique and needs a custom prompt", "Create a few-shot template with 2-3 examples, define the format and constraints, then batch process products using that template", "Have AI generate all 50 at once in a single prompt for maximum efficiency", "Manually write 25 and use AI for the other 25 to maintain a human touch"], c: 1 },
    { q: "What makes a 'constraint' different from 'context' in the RCFC framework?", o: ["They're the same thing — constraints and context both provide background information", "Context describes the situation; constraints define rules, limits, and boundaries the output must follow", "Context is optional while constraints are always required for good prompts", "Constraints only matter for coding prompts — content writing doesn't need constraints"], c: 1 },
    { q: "You notice AI keeps generating responses that are too long and formal. The best fix is:", o: ["Switch to a different AI model that produces shorter responses by default", "Add explicit format constraints: 'Keep responses under 100 words. Use casual, conversational tone. Bullet points preferred.'", "Start a new conversation — long responses mean the context window is getting full", "Accept it — AI always produces formal, verbose output and cannot be controlled"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 3: Custom GPTs
// ═══════════════════════════════════════

const task3Content = `
<h2>🛠️ TASK 3: CUSTOM GPTs — Building AI Assistants That Work For You</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">💡 What Are Custom GPTs?</h3>
    <p>Custom GPTs are <strong>pre-configured AI assistants</strong> with specific instructions, knowledge files, and capabilities baked in. Instead of writing the same long prompt every time, you build it once and reuse it forever.</p>
    <p><strong>Think of it as:</strong> Instead of briefing your genius intern every morning, you write them a permanent job description with a training manual.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🏢 Why DH Uses Custom GPTs</strong>
        <ul>
            <li><strong>Consistency:</strong> Every team member gets the same quality AI assistance</li>
            <li><strong>Speed:</strong> No need to re-explain context every conversation</li>
            <li><strong>Knowledge:</strong> Upload SOPs, brand guides, and client docs directly</li>
            <li><strong>Specialization:</strong> One GPT for client comms, another for QA, another for content</li>
        </ul>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔨 Building a Custom GPT (Step-by-Step)</h3>
    <ol>
        <li><strong>Go to ChatGPT → Explore GPTs → Create</strong></li>
        <li><strong>Name & Description:</strong> Clear, descriptive name (e.g., "DH Client Communication Assistant")</li>
        <li><strong>Instructions:</strong> This is the system prompt — the most critical part. Include:
            <ul>
                <li>Role definition ("You are a client communication specialist for Digital Heroes...")</li>
                <li>Tone and style guidelines</li>
                <li>Rules and constraints</li>
                <li>Output format requirements</li>
            </ul>
        </li>
        <li><strong>Knowledge Files:</strong> Upload PDFs, docs, spreadsheets that the GPT can reference (SOPs, brand guides, pricing)</li>
        <li><strong>Capabilities:</strong> Enable web browsing, code interpreter, DALL-E as needed</li>
        <li><strong>Actions:</strong> Connect to external APIs (advanced — for automations)</li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏢 DH Custom GPTs You Should Know</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">GPT Name</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Who Uses It</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client Comms Bot</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Draft professional client messages, handle objections, upsell templates</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sales, PM, CS</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">QA Review Bot</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Check deliverables against DH standards, find issues</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">QA, Developers</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SOP Assistant</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Answer questions about DH processes and SOPs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">All Roles</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content Writer</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Generate blog posts, product descriptions, social captions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content, Social Media</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔄 Claude Projects vs Custom GPTs</h3>
    <p>Claude has a similar feature called <strong>Projects</strong>. Key differences:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom GPTs</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude Projects</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Platform</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">ChatGPT</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude.ai</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Knowledge</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">File uploads (PDFs, docs)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Project knowledge + file uploads</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sharing</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Public GPT Store or link</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Team workspace sharing</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Best For</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client-facing tools, public bots</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Internal team workflows, code projects</td></tr>
    </table>
    <p><strong>DH Rule:</strong> Use Custom GPTs for repeatable, team-wide tasks. Use Claude Projects for deep, ongoing work with large codebases or document sets.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: Design a Custom GPT</h3>
    <p><strong>Open Claude or ChatGPT and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">I want to create a Custom GPT called "Shopify QA Bot" for my digital agency. It should:
1. Review Shopify store URLs and identify UX issues
2. Check for mobile responsiveness problems
3. Verify SEO meta tags are present
4. Flag accessibility issues (alt text, contrast, ARIA)
5. Output findings as a prioritized checklist (Critical / Major / Minor)

Write the complete GPT instruction set (system prompt) I should paste into the GPT Builder. Include the role definition, behavioral rules, output format, and 3 example interactions.</div>
    <p><strong>Expected output:</strong> A complete, copy-paste-ready GPT instruction set with role, rules, format, and examples.</p>
    <p><strong>Why this works:</strong> You're using AI to build AI tools. The meta-skill of using AI to create Custom GPTs is one of the most powerful force multipliers at DH.</p>
</div>
`;

const task3Quiz = [
    { q: "Your PM asks you to build a Custom GPT that helps the sales team write client proposals. The MOST important component to get right is:", o: ["The GPT's profile picture — first impressions matter for team adoption", "The instruction set (system prompt) — it defines the GPT's role, tone, rules, and output format", "The name — a catchy name increases team usage by 40% according to research", "The capabilities toggles — enabling all options (browsing, DALL-E, code) makes the GPT more powerful"], c: 1 },
    { q: "You upload the DH Employee Handbook PDF as a knowledge file to a Custom GPT. An employee asks the GPT about leave policy. The GPT should:", o: ["Search the internet for the latest leave policy information since the PDF might be outdated", "Reference ONLY the uploaded handbook content for leave policy answers — that's the authoritative source", "Refuse to answer HR questions since it's not an HR-specific GPT and redirect to the HR team", "Combine handbook info with general HR best practices from its training data for a comprehensive answer"], c: 1 },
    { q: "Claude Projects differ from Custom GPTs primarily because:", o: ["Claude Projects are free while Custom GPTs require ChatGPT Plus subscription", "Claude Projects are better for deep, ongoing work with large codebases; Custom GPTs are better for repeatable, shareable tools", "Claude Projects can only handle text while Custom GPTs support images and files", "There's no real difference — they're the same feature on different platforms"], c: 1 },
    { q: "A new employee creates a Custom GPT with instructions that say 'Always be helpful and answer any question.' This is problematic because:", o: ["Custom GPTs should never be helpful — they should only follow strict rules", "The instructions are too vague — they lack role definition, constraints, output format, and knowledge boundaries", "GPTs can't be configured to 'always' do anything — they randomly ignore instructions", "This is actually a perfectly fine instruction set for a general-purpose GPT"], c: 1 },
    { q: "You need a tool that helps the entire team check Shopify stores for QA issues. Should you build a Custom GPT or a Claude Project?", o: ["Claude Project — it has better code analysis capabilities for Shopify", "Custom GPT — it can be shared via link with the whole team and reused for every store review", "Neither — QA should always be done manually by a human reviewer without AI assistance", "Both — build identical tools on both platforms for redundancy in case one goes down"], c: 1 },
    { q: "The 'Knowledge Files' feature in Custom GPTs is most useful for:", o: ["Making the GPT look more professional by showing uploaded file counts to users", "Giving the GPT access to proprietary data (SOPs, brand guides, pricing) that isn't in its training data", "Bypassing the GPT's token limits by offloading content to files", "Replacing the instruction set — knowledge files override whatever instructions you write"], c: 1 },
    { q: "Your Custom GPT for client communication starts giving inconsistent tone — sometimes formal, sometimes casual. The fix is:", o: ["Delete and rebuild the GPT from scratch — inconsistency means the GPT is corrupted", "Add explicit tone examples and rules in the instructions: 'Always use professional but friendly tone. Example: ...'", "Switch from GPT-4o to GPT-4 since the older model is more consistent", "Tell users to always start their messages with 'Be professional' as a workaround"], c: 1 },
    { q: "At DH, the 'SOP Assistant' Custom GPT is valuable because:", o: ["It replaces the need for written SOPs — employees just ask the GPT instead of reading documents", "It makes SOPs searchable and instantly accessible — employees get quick, accurate answers based on official DH processes", "It automatically updates SOPs when processes change without human intervention", "It monitors employee SOP compliance and reports violations to management"], c: 1 },
    { q: "You're building a GPT and need to decide: should you enable web browsing capability? The answer depends on:", o: ["Always enable it — more capabilities is always better for any Custom GPT", "Never enable it — web browsing makes GPTs slower and less reliable for all tasks", "Whether the GPT needs current information from the internet vs. only referencing uploaded knowledge", "Your ChatGPT subscription tier — web browsing is only available on Enterprise plans"], c: 2 },
    { q: "A team member says: 'I don't need Custom GPTs — I just copy-paste my prompt every time.' Why is this inefficient?", o: ["It's actually fine — Custom GPTs and copy-paste prompts produce identical results every time", "Custom GPTs persist instructions + knowledge files + capabilities, saving time and ensuring consistency across the team", "Copy-paste prompts are better because you can modify them each time for different situations", "Custom GPTs are only useful for non-technical roles — developers should always use raw prompts"], c: 1 },
    { q: "When designing a Custom GPT's instruction set, including 'example interactions' helps because:", o: ["They count as few-shot examples that teach the GPT exactly what format and style of output you expect", "They make the instruction set longer, which makes the GPT smarter", "They're required by OpenAI's GPT Builder — GPTs won't work without them", "They're only useful for testing during development and should be removed before sharing"], c: 0 },
    { q: "Your DH team has 5 Custom GPTs. The best way to decide WHEN to create a new one vs. modify an existing one is:", o: ["Always create new GPTs — modifying existing ones risks breaking them for current users", "If the use case overlaps significantly, modify the existing GPT; if it's a distinctly different workflow, create a new one", "Never create more than 5 — too many GPTs confuses the team and reduces adoption", "Let the team vote on it — AI tool decisions should always be made democratically"], c: 1 }
];

// ═══════════════════════════════════════
// TASK 4: Claude Code
// ═══════════════════════════════════════

const task4Content = `
<h2>💻 TASK 4: CLAUDE CODE — AI-Powered Development</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚡ What is Claude Code?</h3>
    <p>Claude Code is an <strong>agentic CLI tool</strong> that lives in your terminal. Unlike ChatGPT or Claude.ai where you chat in a browser, Claude Code directly reads your files, writes code, runs commands, and manages your entire codebase.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🔑 Why DH Uses Claude Code</strong>
        <ul>
            <li>Generates Shopify Liquid sections, WordPress PHP, and React components directly in your project</li>
            <li>Reads your entire codebase for context — understands your architecture before writing code</li>
            <li>Runs git commands, npm scripts, builds, and tests autonomously</li>
            <li>Creates CLAUDE.md project files that persist context between sessions</li>
        </ul>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔧 Getting Started with Claude Code</h3>
    <h4>Installation</h4>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">npm install -g @anthropic-ai/claude-code<br>claude</div>
    <h4>Essential Slash Commands</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/init</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create a CLAUDE.md project file with codebase context</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/compact</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Summarize conversation to free up context window</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/clear</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Start fresh conversation while keeping project context</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/cost</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show token usage and cost for current session</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📄 CLAUDE.md — Your Project's AI Brain</h3>
    <p>CLAUDE.md is a markdown file at the root of your project that gives Claude Code persistent context. It's like a permanent briefing document.</p>
    <h4>What to Include:</h4>
    <ul>
        <li><strong>Project overview:</strong> What the project is, tech stack, architecture</li>
        <li><strong>File structure:</strong> Key directories and their purposes</li>
        <li><strong>Coding conventions:</strong> Naming patterns, style preferences</li>
        <li><strong>Common commands:</strong> Build, test, deploy scripts</li>
        <li><strong>Known issues:</strong> Gotchas, workarounds, technical debt</li>
    </ul>
    <p><strong>DH Example:</strong> For Shopify projects, your CLAUDE.md should mention: Dawn theme version, custom section naming convention, metafield schemas, and deployment workflow (GitHub → Shopify theme push).</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔄 Claude Code Workflow at DH</h3>
    <ol>
        <li><strong>Navigate to project:</strong> <code>cd my-shopify-theme</code></li>
        <li><strong>Start Claude Code:</strong> <code>claude</code></li>
        <li><strong>Give clear instructions:</strong> "Create a new Shopify section called featured-collection-grid with a 3-column product grid, collection picker in schema, and mobile responsive design"</li>
        <li><strong>Review generated code:</strong> Claude Code shows you diffs before applying</li>
        <li><strong>Accept or modify:</strong> Approve changes or ask for adjustments</li>
        <li><strong>Test:</strong> Claude Code can run <code>shopify theme dev</code> to preview</li>
        <li><strong>Commit:</strong> Claude Code handles git add, commit, push</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: Generate a Shopify Section</h3>
    <p><strong>Open your terminal in a Shopify project and type:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">claude

Then type this prompt:

Create a new Shopify section file called "hero-with-video.liquid" in the sections/ directory. Requirements:
- Full-width hero with background video (YouTube embed)
- Overlay text with heading, subheading, and CTA button
- Schema settings for: video URL, heading text, subheading text, button text, button link, overlay opacity
- Mobile: stack vertically, video becomes poster image
- Use Dawn theme CSS variables and class naming conventions
- Include the section schema JSON at the bottom</div>
    <p><strong>Expected output:</strong> A complete .liquid file with HTML structure, CSS, and JSON schema ready to deploy.</p>
    <p><strong>Why this works:</strong> Claude Code reads your existing project structure, understands the Dawn theme patterns, and generates code that fits your codebase — not generic code.</p>
</div>
`;

const task4Quiz = [
    { q: "A developer says: 'I already use Claude.ai for coding. Why do I need Claude Code?' The key difference is:", o: ["Claude Code is free while Claude.ai requires a paid subscription", "Claude Code runs in the terminal and directly reads/writes your project files — it's an agentic tool, not a chat interface", "Claude Code uses a different AI model that's specifically trained on code", "There's no difference — Claude Code is just Claude.ai with a different name and interface"], c: 1 },
    { q: "You run /init in a Shopify project. Claude Code creates a CLAUDE.md file. This file's primary purpose is:", o: ["To track billing and token usage for the project across all sessions", "To give Claude Code persistent project context — architecture, conventions, and commands — that persists between sessions", "To replace the README.md file with AI-generated documentation", "To lock the project to a specific Claude model version for consistency"], c: 1 },
    { q: "Your CLAUDE.md for a Shopify Dawn project should include:", o: ["Only the project name and team member list — Claude Code figures out everything else", "Project overview, file structure, Shopify theme version, naming conventions, and deployment workflow", "A complete copy of the Shopify Liquid documentation for reference", "The client's personal information and billing details for context"], c: 1 },
    { q: "Claude Code generates a Shopify section with a bug. According to the DH workflow, your next step is:", o: ["Accept the code anyway — fixing bugs is faster than regenerating entire sections", "Tell Claude Code about the specific bug and ask it to fix it — show the error message and expected behavior", "Delete the generated code and write it manually — AI code is unreliable", "Report the bug to Anthropic support and wait for a model update"], c: 1 },
    { q: "The /compact command in Claude Code is used when:", o: ["You want to delete the current project and start fresh with a new one", "The conversation is getting long — /compact summarizes it to free up context window space", "You want to compress generated code files to save disk space", "You need to switch between different AI models mid-session"], c: 1 },
    { q: "A DH developer uses Claude Code to generate 5 Shopify sections in one session. The best practice for git workflow is:", o: ["Commit all 5 sections in one big commit at the end for efficiency", "Let Claude Code handle git automatically — it commits after each file generation", "Review each section, test it, and commit individually with descriptive messages", "Never use git with Claude Code — version control conflicts with AI-generated code"], c: 2 },
    { q: "Claude Code can run terminal commands like 'shopify theme dev' or 'npm test'. The security implication is:", o: ["No security concern — Claude Code only runs safe, read-only commands", "You should review commands before approving — Claude Code asks permission before executing potentially impactful commands", "Never let Claude Code run commands — only use it for code generation", "Claude Code has full system access and can run any command without asking"], c: 1 },
    { q: "You're starting a new WordPress project at DH. The first thing to include in CLAUDE.md is:", o: ["The WordPress admin password for Claude Code to access the dashboard", "Project overview: WordPress version, theme framework, plugin list, custom post types, and coding standards", "A link to the WordPress documentation — Claude Code will read it automatically", "Nothing — CLAUDE.md is only useful for Shopify projects, not WordPress"], c: 1 },
    { q: "Claude Code generates a Liquid section that works but doesn't follow the team's naming convention. You should:", o: ["Accept it — functionality matters more than naming conventions", "Ask Claude Code to refactor using the correct convention: 'Rename all CSS classes to follow our BEM convention: block__element--modifier'", "Manually rename everything — it's faster than explaining conventions to AI", "Update CLAUDE.md with naming conventions so future generations follow the pattern automatically"], c: 3 },
    { q: "The /clear command differs from /compact because:", o: ["/clear starts a fresh conversation losing all context; /compact summarizes the conversation and keeps key context", "/clear deletes project files; /compact only removes temporary files", "They're identical — both reset the conversation to the beginning", "/clear is for clearing terminal output; /compact is for compressing code files"], c: 0 },
    { q: "A non-developer PM asks: 'Can I use Claude Code even though I don't write code?' The answer is:", o: ["No — Claude Code is exclusively for developers who write production code", "Yes — Claude Code can also generate documents, analyze data, manage files, and run project commands", "Only if they complete a 40-hour coding bootcamp first to understand the output", "They should use ChatGPT instead — Claude Code's terminal interface is too technical for PMs"], c: 1 },
    { q: "When Claude Code generates code that uses an API function you've never seen before, you should:", o: ["Trust it — Claude Code wouldn't use non-existent functions since it's trained on documentation", "Verify the function exists in the official documentation — AI can hallucinate API methods that don't exist", "Delete the entire generated code and start over with a more specific prompt", "Ask Claude Code if the function is real — it will honestly tell you if it hallucinated"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 5: Chrome & Antigravity
// ═══════════════════════════════════════

const task5Content = `
<h2>🌐 TASK 5: CHROME & ANTIGRAVITY — Claude Extensions & MCP</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔌 Claude in Chrome</h3>
    <p><strong>Claude in Chrome</strong> is a browser extension that lets Claude interact directly with your browser tabs. It can read web pages, fill forms, click buttons, take screenshots, and automate browser workflows.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🏢 How DH Uses Claude in Chrome</strong>
        <ul>
            <li><strong>QA Testing:</strong> Claude reads a live store and identifies UX issues, broken links, missing alt text</li>
            <li><strong>Competitor Analysis:</strong> Open a competitor's site and ask Claude to analyze their pricing, design, and features</li>
            <li><strong>Data Extraction:</strong> Extract product info, reviews, or pricing from web pages into structured data</li>
            <li><strong>Form Automation:</strong> Fill out repetitive forms with structured data across multiple tools</li>
        </ul>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Antigravity Platform</h3>
    <p><strong>Antigravity</strong> is DH's internal platform that connects AI tools, automation workflows, and team processes into one unified system. Think of it as the mission control center for all DH AI operations.</p>
    <h4>Key Antigravity Features:</h4>
    <ul>
        <li><strong>AI Workspace:</strong> Centralized environment for running Claude Code with project templates</li>
        <li><strong>Workflow Automation:</strong> Trigger AI tasks on schedules or events (e.g., daily QA scans)</li>
        <li><strong>Knowledge Base:</strong> SOPs, brand guides, and training materials accessible to AI tools</li>
        <li><strong>Team Collaboration:</strong> Share AI sessions, prompts, and outputs across the team</li>
    </ul>
    <p><strong>Why Antigravity matters:</strong> Instead of each person using AI in isolation, Antigravity ensures the whole team benefits from shared AI knowledge, consistent processes, and automated workflows.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔗 MCP — Model Context Protocol</h3>
    <p><strong>MCP</strong> is a protocol that lets AI models connect to external tools and data sources. Think of it as USB ports for AI — you can plug in different capabilities.</p>
    <h4>MCP at Digital Heroes:</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">MCP Server</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DH Use Case</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Scheduled Tasks</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Run AI tasks on a schedule (cron jobs)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Daily QA scans, automated reports</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Registry Connectors</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Connect to external apps (Asana, Jira, Slack)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sync tasks, send notifications</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Preview Server</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Live preview of web development</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Real-time Shopify theme preview</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Browser Automation</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Control Chrome programmatically</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">QA testing, competitor analysis</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🛡️ AI-Assisted QA with Claude + Chrome</h3>
    <p>One of the most powerful DH workflows combines Claude Code with Chrome automation for comprehensive QA:</p>
    <ol>
        <li><strong>Open the client's live store</strong> in Chrome</li>
        <li><strong>Ask Claude to analyze:</strong> "Read this page and identify all UX issues, missing SEO meta tags, accessibility problems, and mobile responsiveness concerns"</li>
        <li><strong>Claude reads the page</strong> (DOM, accessibility tree, screenshots) and produces a prioritized issue list</li>
        <li><strong>Navigate to key pages</strong> (product, collection, cart, checkout) and repeat</li>
        <li><strong>Export findings</strong> as a structured QA report for the PM</li>
    </ol>
    <p><strong>This replaces hours of manual QA</strong> with a 15-minute AI-assisted session that catches issues humans often miss.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: AI-Powered Competitor Analysis</h3>
    <p><strong>Open Claude and type this prompt:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">I want to create an MCP-powered workflow for automated competitor analysis. The workflow should:

1. Accept a list of 5 competitor Shopify store URLs
2. For each store, extract: homepage design approach, product page layout, pricing strategy, unique features, technology stack
3. Score each competitor on: Design (1-10), UX (1-10), Speed (1-10), Features (1-10)
4. Generate a comparison matrix as an HTML table
5. Recommend 3 actionable improvements for our client's store based on the analysis

Design the complete prompt template I would use for this workflow. Include placeholders for the competitor URLs and client context.</div>
    <p><strong>Expected output:</strong> A reusable prompt template with clear placeholders, structured output format, and scoring criteria.</p>
    <p><strong>Why this works:</strong> You're designing a scalable AI workflow that combines browser analysis with structured output — a core DH skill for client QA and competitive intelligence.</p>
</div>
`;

const task5Quiz = [
    { q: "Claude in Chrome differs from Claude.ai primarily because:", o: ["Claude in Chrome uses a different AI model optimized for browser tasks", "Claude in Chrome can directly read, interact with, and automate your browser tabs — it sees what you see", "Claude in Chrome is free while Claude.ai requires a subscription", "Claude in Chrome only works on Chrome; Claude.ai works on all browsers"], c: 1 },
    { q: "MCP (Model Context Protocol) is best described as:", o: ["A security protocol that encrypts AI communications end-to-end", "A protocol that connects AI models to external tools and data sources — like USB ports for AI", "A programming language specifically designed for building AI applications", "A communication standard between different AI models (Claude, GPT, Gemini)"], c: 1 },
    { q: "Antigravity at DH serves as:", o: ["A competitor to ChatGPT that DH built in-house for proprietary use", "A centralized platform connecting AI tools, automation workflows, and team processes into one unified system", "An anti-gravity simulation tool used by the physics department", "A project management tool that replaced Asana and Jira at DH"], c: 1 },
    { q: "A PM wants to run automatic QA scans on client stores every morning at 9 AM. The right MCP component is:", o: ["Registry Connectors — they connect to Shopify stores for scanning", "Scheduled Tasks — they run AI tasks on cron schedules like daily QA scans", "Preview Server — it continuously monitors stores for changes", "Browser Automation — it keeps Chrome running 24/7 scanning stores"], c: 1 },
    { q: "During AI-assisted QA, Claude reads a page and finds 15 issues. The DH process is:", o: ["Fix all 15 issues immediately using Claude Code without reviewing them", "Prioritize findings (Critical/Major/Minor), create a QA report, and share with the PM for review", "Ignore AI findings — only human-detected issues are valid for QA reports", "Send the raw AI output directly to the client as the QA deliverable"], c: 1 },
    { q: "A developer asks: 'Can MCP servers connect to tools like Asana and Slack?' The answer is:", o: ["No — MCP only works with file systems and code repositories", "Yes — Registry Connectors allow MCP to connect to external apps for task syncing and notifications", "Only through custom API integrations that require weeks of development", "MCP can read from external tools but never write or send data to them"], c: 1 },
    { q: "The AI-assisted QA workflow (Claude + Chrome) replaces hours of manual QA because:", o: ["AI never makes mistakes so there's no need for human review afterward", "Claude can read the DOM, accessibility tree, and take screenshots simultaneously — analyzing in minutes what takes humans hours", "The workflow automatically fixes all issues it finds without developer intervention", "It only works for simple static websites, not complex Shopify stores"], c: 1 },
    { q: "Why does DH use Antigravity instead of having each team member use AI independently?", o: ["Independent AI usage is more efficient — Antigravity adds unnecessary overhead", "Antigravity ensures shared AI knowledge, consistent processes, and team-wide benefits from automated workflows", "DH mandates Antigravity usage to track and monitor employee AI usage patterns", "Antigravity is cheaper than individual AI subscriptions for each team member"], c: 1 },
    { q: "Claude in Chrome can help with competitor analysis by:", o: ["Hacking into competitor systems to extract their proprietary data", "Reading visible page content, analyzing design patterns, extracting pricing, and generating structured comparison reports", "Only taking screenshots — it cannot read or analyze page content", "Accessing competitor admin panels to view their internal data"], c: 1 },
    { q: "An MCP Preview Server is useful at DH for:", o: ["Hosting production client websites on DH servers", "Live previewing web development work — seeing real-time changes during Shopify theme development", "Recording video demos of client stores for presentations", "Monitoring store uptime and alerting when stores go down"], c: 1 },
    { q: "A new employee says: 'I'll skip the Antigravity section — I only do design work.' This is wrong because:", o: ["Designers don't need AI tools — only developers benefit from Antigravity", "Antigravity connects ALL roles — designers use it for AI design tools, brand asset management, and collaborative workflows", "Antigravity is optional for all roles — it's a nice-to-have, not a must-have", "Designers should only learn the design-specific sections and skip everything else"], c: 1 },
    { q: "The key advantage of MCP's Scheduled Tasks over manual AI usage is:", o: ["Scheduled tasks use a more powerful AI model than manual conversations", "They run automatically without human intervention — enabling daily scans, reports, and checks that would be forgotten manually", "They're cheaper per token than regular Claude Code usage", "They can only run simple tasks — complex analysis still requires manual interaction"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 6: Shopify CLI + AI
// ═══════════════════════════════════════

const task6Content = `
<h2>🛒 TASK 6: SHOPIFY CLI + AI — AI-Powered Store Development</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔧 Shopify CLI Overview</h3>
    <p>Shopify CLI is the command-line tool for Shopify theme development. Combined with AI, it becomes a supercharged development environment.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme pull</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Download live theme to local</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme dev</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Start local dev server with hot reload</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme push</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Push local changes to Shopify</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme check</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lint theme for best practices</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">⚡ The AI + CLI Workflow</h3>
    <p>The magic happens when you combine Shopify CLI with Claude Code:</p>
    <ol>
        <li><strong>Pull theme:</strong> <code>shopify theme pull --store mystore.myshopify.com</code></li>
        <li><strong>Start Claude Code:</strong> <code>claude</code> in the theme directory</li>
        <li><strong>Generate sections:</strong> "Create a featured-collection section with a 4-column grid, collection picker, product count slider (4-12), and lazy-loaded images"</li>
        <li><strong>Preview live:</strong> <code>shopify theme dev</code> → see changes in real-time</li>
        <li><strong>Iterate with AI:</strong> "The grid breaks on mobile. Make it 2 columns on mobile, 4 on desktop. Add swipe for mobile."</li>
        <li><strong>Quality check:</strong> <code>shopify theme check</code> → fix any linting issues</li>
        <li><strong>Deploy:</strong> <code>shopify theme push</code></li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧱 AI-Generated Liquid Code Patterns</h3>
    <h4>Section Schema with AI</h4>
    <p>Instead of manually writing JSON schemas, describe what you need:</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Generate a Shopify section schema with these settings: heading (text), background color (color picker), product collection (collection picker), products per row (range 2-6), show price (checkbox), card style (select: minimal/detailed/image-only)"</div>
    <p>Claude Code generates the complete JSON schema with proper types, defaults, and labels.</p>

    <h4>Metafield Schemas with AI</h4>
    <p>For complex product data, AI generates metafield definitions:</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Create Shopify metafield definitions for a custom jewelry store: material (single_line_text), gemstone type (single_line_text), ring size (number_integer), care instructions (multi_line_text), certification PDF (file_reference)"</div>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">⚡ Speed Tips: AI + Shopify CLI</h3>
    <ul>
        <li><strong>Use /init first:</strong> Create CLAUDE.md with your theme's architecture before starting work</li>
        <li><strong>Reference existing sections:</strong> "Look at featured-collection.liquid and create a similar section for blog posts"</li>
        <li><strong>Bulk operations:</strong> "Generate 5 color scheme presets for the theme settings schema"</li>
        <li><strong>Debug with AI:</strong> "shopify theme check shows error X on line Y — fix it"</li>
        <li><strong>Dawn conventions:</strong> Always remind Claude to use Dawn CSS variables and utility classes</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: AI-Generate a Complete Section</h3>
    <p><strong>Open Claude Code in a Shopify theme directory and type:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">Create a new Shopify section called "testimonial-carousel" with these exact requirements:

1. Display customer testimonials in a horizontal carousel
2. Each testimonial card shows: customer photo (image_picker), name (text), rating (range 1-5 as stars), review text (richtext)
3. Schema: section heading, background color, auto-play toggle, slide speed (range 2-8 seconds)
4. Use CSS scroll-snap for the carousel (no external JS libraries)
5. Mobile: single card view with swipe. Desktop: 3 cards visible
6. Star rating rendered with CSS (not images)
7. Follow Dawn theme conventions for class names and CSS variables

Put the file in sections/testimonial-carousel.liquid with the schema JSON at the bottom.</div>
    <p><strong>Expected output:</strong> A production-ready .liquid section file with HTML, CSS, Liquid logic, and JSON schema.</p>
    <p><strong>Why this works:</strong> Specific requirements with numbered constraints produce consistent, production-quality code. The "no external JS" constraint prevents AI from importing unnecessary dependencies.</p>
</div>
`;

const task6Quiz = [
    { q: "The correct workflow for AI-powered Shopify theme development at DH is:", o: ["Write code manually first, then ask AI to review it — AI should never generate initial code", "shopify theme pull → claude (AI generates code) → shopify theme dev (preview) → iterate → shopify theme push (deploy)", "Start with shopify theme push to create a blank theme, then use AI to fill it in", "Use the Shopify admin editor instead — CLI is outdated and AI can't integrate with it"], c: 1 },
    { q: "Before starting Claude Code in a Shopify theme directory, you should run /init to:", o: ["Initialize a new Shopify store from scratch", "Create a CLAUDE.md that documents the theme architecture, file structure, and conventions for AI context", "Install Claude Code dependencies in the theme", "Connect Claude Code to the Shopify admin API"], c: 1 },
    { q: "You ask Claude Code to generate a product grid section. It uses JavaScript from an external CDN. The issue is:", o: ["External CDN usage is fine — it's best practice for Shopify themes", "DH requires no external JS libraries — sections should use native CSS/JS and Dawn utilities only", "External CDN is only a problem for speed — it doesn't affect functionality", "There's no issue — all Shopify themes use external libraries"], c: 1 },
    { q: "A developer runs 'shopify theme check' and gets 10 warnings. The AI-assisted fix approach is:", o: ["Ignore warnings — only errors matter for theme deployment", "Copy the warnings into Claude Code and ask: 'Fix these theme check warnings in [filename]' — AI can resolve most linting issues", "Manually fix each warning — AI can't understand Shopify theme check output", "Disable theme check — it produces too many false positives"], c: 1 },
    { q: "When asking AI to generate a section schema JSON, the BEST prompt includes:", o: ["Just 'Generate a schema' — AI knows what settings Shopify supports", "Specific setting names, types (text, color, collection, range), defaults, and labels", "A link to Shopify documentation — AI will read it and generate the schema", "The entire Dawn theme source code for reference"], c: 1 },
    { q: "You need Claude Code to create a section that matches an existing one's style. The best approach is:", o: ["Describe the style from memory — 'make it look like the hero section'", "Tell Claude: 'Look at sections/featured-collection.liquid and create a similar section for blog posts' — AI reads the reference file", "Copy the existing section code into the chat manually for AI to reference", "Take a screenshot and describe it — AI can't read other files in the project"], c: 1 },
    { q: "The 'shopify theme dev' command during AI development is essential because:", o: ["It deploys changes to the live store immediately", "It starts a local dev server with hot reload so you can preview AI-generated code in real-time before deploying", "It validates that AI-generated code compiles without errors", "It's required to activate Claude Code's Shopify integration features"], c: 1 },
    { q: "AI generates a section with metafield references. To ensure they work, you also need to:", o: ["Nothing extra — metafield references work automatically in Shopify", "Create the metafield definitions in Shopify admin and populate data — AI generates Liquid code but can't create metafields", "Ask AI to create the metafields via API — Claude Code handles this automatically", "Metafields don't work with AI-generated code — use product tags instead"], c: 1 },
    { q: "A client wants 5 unique page sections built in 2 days. The AI-powered approach is:", o: ["It's impossible — 5 sections in 2 days requires at least 3 developers working manually", "Use Claude Code to generate each section from detailed specs, preview with shopify theme dev, iterate, and deploy — AI makes this feasible solo", "Use a pre-built theme and just modify colors — custom sections take too long", "Outsource to a freelancer — AI isn't reliable enough for client-facing sections"], c: 1 },
    { q: "When Claude Code generates Liquid code with a syntax error, the fastest fix is:", o: ["Delete the file and start over — it's faster than debugging AI code", "Paste the error from shopify theme dev into Claude Code: 'Line 42 throws [error]. Fix it.' — AI resolves most Liquid syntax errors", "Search Stack Overflow for the error — AI can't debug its own code", "Manually trace through the Liquid code line by line without AI assistance"], c: 1 },
    { q: "Why does DH prefer 'no external JS libraries' as a constraint for AI-generated Shopify sections?", o: ["External JS makes stores load slower, adds dependencies, and can break with Shopify updates — native CSS/JS is more maintainable", "It's just a preference — external libraries are equally acceptable", "Shopify doesn't allow any JavaScript in themes at all", "External libraries cost money and add to the client's monthly Shopify bill"], c: 0 },
    { q: "Bulk operations with AI + Shopify CLI means:", o: ["Pushing changes to multiple stores simultaneously using CLI batch commands", "Using AI to generate multiple theme components at once — like 5 color schemes or 10 metafield definitions in a single prompt", "Running shopify theme push on every branch in the repository", "Automatically duplicating the theme across all client stores"], c: 1 }
];

// ═══════════════════════════════════════
// TASK 7: AI for Design
// ═══════════════════════════════════════

const task7Content = `
<h2>🎨 TASK 7: AI FOR DESIGN — Branding & Visual Creation</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎯 AI is the Designer's Superpower</h3>
    <p>AI doesn't replace designers — it <strong>amplifies</strong> them. What used to take 4 hours (mood boards, concept exploration, mockup iterations) now takes 30 minutes. At DH, every designer is expected to use AI tools daily.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🖼️ AI Image Generation Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Tool</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Strength</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DH Use Case</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Midjourney</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Photorealistic, artistic quality</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Hero banners, lifestyle mockups, brand concepts</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>DALL-E 3</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Text rendering, prompt adherence</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Social media graphics, icons, illustrations</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Stable Diffusion</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Customizable, local control</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product backgrounds, pattern generation</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧵 Stitch — AI for E-Commerce Design</h3>
    <p><strong>Stitch</strong> is an AI-powered design tool specifically built for e-commerce. At DH, we use it for:</p>
    <ul>
        <li><strong>Product photo enhancement:</strong> Remove backgrounds, add lifestyle settings, create consistent product grids</li>
        <li><strong>Brand-consistent templates:</strong> Generate social posts, email headers, and banners that match brand guidelines</li>
        <li><strong>A/B test variants:</strong> Quickly create multiple design versions for testing</li>
        <li><strong>Bulk product images:</strong> Process entire catalogs with consistent style and lighting</li>
    </ul>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🏗️ 21st.dev — AI UI Components</h3>
    <p><strong>21st.dev</strong> generates production-ready UI components from natural language descriptions. For DH developers:</p>
    <ul>
        <li>Describe a component: "A pricing table with 3 tiers, toggle for monthly/annual, highlighted recommended tier"</li>
        <li>21st.dev generates clean React/HTML/CSS code</li>
        <li>Copy into your Shopify theme or client project</li>
        <li>Customize colors and content to match the brand</li>
    </ul>
    <p><strong>Pro tip:</strong> Use 21st.dev for rapid prototyping, then refine with Claude Code for production-quality Liquid code.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎨 AI-Powered Design Workflows</h3>
    <h4>Logo Concepts (Midjourney + Figma)</h4>
    <ol>
        <li>Generate 20 logo concepts with Midjourney using brand keywords</li>
        <li>Select top 5, refine in Figma with vector tracing</li>
        <li>Present 3 polished options to client</li>
    </ol>
    <h4>Color Palette Generation</h4>
    <p>Ask AI: "Generate 5 color palettes for a luxury organic skincare brand. Each palette should have: primary, secondary, accent, background, and text colors as hex codes. Include emotional associations."</p>
    <h4>AI Product Photography</h4>
    <p>Use AI to place products in lifestyle settings without expensive photo shoots. A $10 product image can look like a $500 professional shoot.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: AI Design Brief</h3>
    <p><strong>Open Claude and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">You are a senior brand designer at a premium digital agency. A client is launching a luxury handmade candle brand called "Ember & Oak."

Create a comprehensive design brief that includes:
1. Brand personality (5 adjectives with explanations)
2. Color palette (5 colors with hex codes and usage rules)
3. Typography recommendations (heading + body font pairs from Google Fonts)
4. Midjourney prompt for the hero banner image (include style, lighting, mood, composition details)
5. 3 Instagram post design concepts with descriptions
6. Shopify store design recommendations (homepage layout, product page layout)

Format as a professional design brief document with clear sections and bullet points.</div>
    <p><strong>Expected output:</strong> A complete design brief document ready to guide all visual work for the brand.</p>
    <p><strong>Why this works:</strong> The RCFC framework (Role: senior designer, Context: luxury candle brand, Format: professional brief, Constraints: specific sections) produces agency-quality deliverables.</p>
</div>
`;

const task7Quiz = [
    { q: "A DH designer needs to create 50 product photos with consistent backgrounds for a Shopify store. The most efficient AI approach is:", o: ["Take professional photos of all 50 products — AI can't handle product photography", "Use Stitch AI to batch-process product images with consistent backgrounds, lighting, and styling", "Generate all 50 products from scratch with Midjourney — no photos needed", "Manually edit each photo in Photoshop — AI tools produce inconsistent results for e-commerce"], c: 1 },
    { q: "21st.dev is most useful at DH for:", o: ["Replacing Figma as the primary design tool for all DH projects", "Generating production-ready UI components from natural language descriptions for rapid prototyping", "Creating AI-generated logos and brand identity packages automatically", "Managing design team workflow and project timelines"], c: 1 },
    { q: "A client asks for 3 logo concepts. The AI-powered workflow is:", o: ["Generate 3 logos with DALL-E and send them directly to the client as final deliverables", "Generate 20 concepts with Midjourney, select top 5, refine in Figma, present 3 polished options", "Skip AI entirely — logos require human creativity and AI can't create original brand identities", "Use one AI tool for all 3 to maintain consistency — mixing tools creates inconsistent styles"], c: 1 },
    { q: "When generating a Midjourney prompt for a hero banner, the prompt should include:", o: ["Just the brand name — Midjourney will figure out the appropriate style and mood", "Style, lighting, mood, composition, camera angle, and color palette details for precise control", "Only technical specifications like resolution and file format", "A link to the client's website so Midjourney can analyze their existing brand"], c: 1 },
    { q: "Stitch differs from Midjourney for DH e-commerce work because:", o: ["Stitch is free while Midjourney requires a subscription", "Stitch is built specifically for e-commerce tasks like product photos, while Midjourney excels at artistic/creative imagery", "Stitch generates code while Midjourney generates images", "There's no real difference — use whichever one is faster"], c: 1 },
    { q: "AI-generated color palettes are valuable because:", o: ["AI always creates better color combinations than human designers", "They provide quick starting points with emotional associations, hex codes, and usage rules — saving hours of exploration", "AI palettes are guaranteed to meet WCAG accessibility standards", "They replace the need for brand strategy discussions with clients"], c: 1 },
    { q: "A designer says: 'AI will replace designers.' The DH perspective is:", o: ["Correct — AI will eventually handle all design work without human input", "Wrong — AI amplifies designers by accelerating exploration and iteration, but human creativity and judgment remain essential", "Partially correct — AI replaces junior designers but not senior ones", "Irrelevant — DH doesn't use AI for design work, only for coding and content"], c: 1 },
    { q: "Using 21st.dev + Claude Code together for a Shopify project means:", o: ["21st.dev generates the UI design, Claude Code converts it to production Liquid code for the Shopify theme", "They can't work together — use one or the other exclusively", "21st.dev handles all Shopify development and Claude Code is only for non-Shopify projects", "Claude Code generates designs and 21st.dev converts them to code"], c: 0 },
    { q: "For AI product photography, the key advantage over traditional photo shoots is:", o: ["AI photos are always higher quality than professional photographs", "Dramatic cost reduction ($10 vs $500) and speed — AI places products in lifestyle settings without physical shoots", "AI product photos don't need any human review or approval", "Clients prefer AI-generated images because they look more modern"], c: 1 },
    { q: "When creating a design brief with AI, the output quality depends most on:", o: ["Which AI model you use — GPT-4o always produces better design briefs than Claude", "The specificity of your prompt — including brand context, deliverable format, and section requirements", "How many times you regenerate — the more iterations, the better the result", "The time of day you prompt — AI performs better during off-peak hours"], c: 1 },
    { q: "The RCFC framework for design prompts includes Role (senior designer), Context (brand details), Format (brief document), and Constraints. Good design constraints include:", o: ["No constraints — creative freedom produces the best design output", "Specific sections to include, number of options per element, color count limits, and font source restrictions", "Only budget constraints — how much the client is willing to spend on design", "Time constraints only — when the design needs to be delivered"], c: 1 },
    { q: "A/B test design variants with AI means:", o: ["Testing whether AI or human designs perform better in conversion tests", "Using AI to quickly create multiple design variations of the same element for performance testing", "Running AI algorithms that automatically determine the winning design without human input", "A/B testing different AI models to see which generates better designs"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 8: AI for Content & SEO
// ═══════════════════════════════════════

const task8Content = `
<h2>📝 TASK 8: AI FOR CONTENT & SEO — Writing, Marketing & Optimization</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📢 Content is King — AI Makes You Emperor</h3>
    <p>Content creation is the most common AI use case at DH. From product descriptions to blog posts to email campaigns, AI can draft content 10x faster than manual writing. But <strong>AI-generated content without human editing is garbage</strong>. Your job: direct AI, then refine.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🛍️ Product Descriptions with AI</h3>
    <h4>The Template</h4>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">Role: You are an e-commerce copywriter for [brand type]<br>Context: Product is [name], [features], [price point], [target audience]<br>Format: 150-word description with: hook line, 3 benefit bullets, materials/specs, CTA<br>Constraints: Match this brand voice: [example]. Include keywords: [keyword1, keyword2]</div>
    <p><strong>Pro tip:</strong> Create a few-shot template with 3 existing descriptions, then batch-process entire catalogs maintaining consistent voice.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔍 SEO Optimization with AI</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SEO Task</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI Prompt Approach</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Meta titles</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Generate 5 meta titles (under 60 chars) for [page] targeting keyword [X]"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Meta descriptions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write 3 meta descriptions (under 155 chars) with CTA for [page]"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blog outlines</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Create SEO blog outline for '[keyword]' — include H2/H3 structure, word count targets, internal linking opportunities"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Alt text</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write SEO alt text for 20 product images — descriptive, keyword-rich, under 125 chars"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">FAQ schema</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Generate 10 FAQ questions and answers for [topic] — format as JSON-LD schema"</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📧 Email & Social Media Content</h3>
    <ul>
        <li><strong>Email sequences:</strong> "Write a 5-email welcome sequence for a skincare brand. Email 1: Brand story. Email 2: Hero product. Email 3: Social proof. Email 4: Educational. Email 5: Offer."</li>
        <li><strong>Social captions:</strong> "Write 7 Instagram captions for [brand] — one for each day of the week. Include hashtags, emoji, and CTA."</li>
        <li><strong>Ad copy:</strong> "Write 3 Facebook ad variants for [product]. Each: headline (under 40 chars), primary text (under 125 chars), description."</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: SEO Product Description</h3>
    <p><strong>Open Claude and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">You are an SEO-focused e-commerce copywriter for a premium home decor Shopify store.

Write a product description for: "Artisan Ceramic Vase" ($89, handmade, 12 inches tall, matte black finish, suitable for dried flowers).

Requirements:
1. SEO-optimized for keywords: "handmade ceramic vase", "matte black vase", "artisan home decor"
2. 150 words max
3. Structure: emotional hook (1 sentence) → 3 benefit bullets → materials/dimensions → CTA
4. Brand voice: sophisticated, warm, artisanal (not corporate)
5. Also generate: meta title (under 60 chars), meta description (under 155 chars), 3 alt text options for product images</div>
    <p><strong>Expected output:</strong> A complete SEO-ready product listing with description, meta tags, and image alt text.</p>
    <p><strong>Why this works:</strong> Specific SEO constraints (keywords, character limits) combined with brand voice examples produce content that ranks AND converts.</p>
</div>
`;

const task8Quiz = [
    { q: "A DH content writer generates 50 product descriptions with AI and publishes them without editing. This violates DH policy because:", o: ["AI-generated content is always high quality — editing is unnecessary for product descriptions", "AI content without human editing risks inaccuracies, generic tone, and brand voice inconsistency — every piece must be reviewed", "It's fine for product descriptions — only blog posts need human editing", "The issue is quantity — AI should generate max 10 descriptions at a time"], c: 1 },
    { q: "When writing SEO meta titles with AI, the constraint 'under 60 characters' matters because:", o: ["Google truncates meta titles longer than ~60 characters — longer titles get cut off in search results", "AI can't generate titles longer than 60 characters due to token limits", "60 characters is the minimum required by Google for indexing a page", "It doesn't matter — Google shows the full title regardless of length"], c: 0 },
    { q: "A few-shot template for product descriptions is better than individual prompts because:", o: ["Few-shot templates use fewer tokens and cost less per description", "They ensure brand voice consistency across all products — examples teach the AI the exact style to maintain", "Individual prompts are actually better — few-shot templates make all descriptions sound the same", "Few-shot templates only work for luxury brands — other brands need individual prompts"], c: 1 },
    { q: "The product description template uses: hook line, benefit bullets, specs, CTA. This structure works because:", o: ["It's the only format Google accepts for e-commerce product pages", "It mirrors how shoppers scan product pages — attention-grabbing hook, value propositions, details, then action prompt", "AI models are specifically trained to generate this exact format better than others", "It's a DH-specific format that no other agency uses for product copy"], c: 1 },
    { q: "AI-generated blog post outlines with H2/H3 structure help SEO because:", o: ["Google ranks pages higher just for having heading tags regardless of content quality", "Structured headings help Google understand content hierarchy and can earn featured snippets and rich results", "H2 and H3 tags are the only heading tags Google considers for ranking purposes", "Blog outlines don't affect SEO — only the actual written content matters for rankings"], c: 1 },
    { q: "For batch-processing 200 product alt texts, the best AI approach is:", o: ["Upload all 200 product images to AI and generate alt text in one massive prompt", "Create a template: 'Descriptive, keyword-rich, under 125 chars' with 3 examples, then batch in groups of 20", "Write all 200 manually — AI can't generate accurate alt text for product images", "Use the same generic alt text for all 200 — consistency matters more than uniqueness"], c: 1 },
    { q: "A 5-email welcome sequence prompt specifies each email's purpose. This is important because:", o: ["AI can't generate more than one email at a time without specific instructions", "Each email serves a different funnel stage — specifying purpose ensures strategic progression from awareness to conversion", "Email platforms require exactly 5 emails in a welcome sequence for compliance", "It's just a DH preference — any random 5 emails would achieve the same conversion rate"], c: 1 },
    { q: "AI generates a product description that sounds generic and corporate for a fun, Gen-Z skincare brand. The fix is:", o: ["Accept it — professional tone is always better for e-commerce regardless of target audience", "Add brand voice examples and tone constraints to the prompt: 'Tone: playful, emoji-heavy, Gen-Z slang okay. Example: [paste existing copy]'", "Use a different AI model that specializes in casual writing styles", "Have a Gen-Z employee manually rewrite everything — AI can't mimic specific tones"], c: 1 },
    { q: "JSON-LD FAQ schema generated by AI is valuable for SEO because:", o: ["It makes the page load faster which is a Google ranking factor", "It can earn rich snippet results in Google search — FAQ dropdowns increase visibility and click-through rates", "Google requires JSON-LD on every page for proper indexing", "JSON-LD replaces the need for traditional on-page SEO optimization"], c: 1 },
    { q: "When using AI for Facebook ad copy, specifying character limits (headline under 40, text under 125) ensures:", o: ["The AI generates shorter, punchier copy that doesn't get truncated by Facebook's ad display format", "Nothing — Facebook shows full ad copy regardless of length on all devices", "AI charges fewer tokens for shorter copy, reducing costs", "Facebook rejects ads that exceed 125 characters in primary text"], c: 0 }
];


// ═══════════════════════════════════════
// TASK 9: AI for PM & Ops
// ═══════════════════════════════════════

const task9Content = `
<h2>📋 TASK 9: AI FOR PM & OPS — Project Management & Automation</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎯 AI Makes PMs 10x More Effective</h3>
    <p>Project Managers at DH juggle multiple client projects, timelines, and team coordination. AI transforms PM from reactive firefighting to <strong>proactive, data-driven project leadership</strong>.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📊 AI-Powered Estimation</h3>
    <p>One of the hardest PM skills is accurate project estimation. AI helps by analyzing scope and generating detailed breakdowns:</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Break down this Shopify store project into tasks with time estimates:<br>- Custom Dawn theme with 8 unique sections<br>- 200 products with metafields<br>- Blog with 10 initial posts<br>- Email marketing setup (Klaviyo)<br>- SEO optimization (meta tags, schema, sitemap)<br>Include: task, responsible role, estimated hours, dependencies, risk factors"</div>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📝 Meeting Summaries & Action Items</h3>
    <p>After every client call, AI transforms raw notes into structured summaries:</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Convert these meeting notes into a structured summary:<br>[paste raw notes]<br><br>Format:<br>- Meeting: [client name] - [date]<br>- Attendees: [list]<br>- Key Decisions: [numbered list]<br>- Action Items: [who, what, deadline]<br>- Open Questions: [list]<br>- Next Meeting: [date/time]"</div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">💬 Client Communication Drafts</h3>
    <p>AI drafts professional client emails and messages in seconds:</p>
    <ul>
        <li><strong>Project updates:</strong> "Draft a weekly update email for [client] covering: completed tasks [X], in-progress [Y], blockers [Z]. Professional but warm tone."</li>
        <li><strong>Scope change requests:</strong> "The client wants to add [feature]. Draft a tactful message explaining the timeline and cost impact."</li>
        <li><strong>Delay communication:</strong> "We're 3 days behind on [deliverable] due to [reason]. Draft an honest, solutions-focused message to the client."</li>
        <li><strong>Upsell proposals:</strong> "Based on the current project, suggest 3 upsell services with value propositions for [client type]."</li>
    </ul>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚡ Operations Automation with MCP</h3>
    <p>MCP scheduled tasks automate repetitive PM operations:</p>
    <ul>
        <li><strong>Daily standup summaries:</strong> Auto-compile team updates from task boards</li>
        <li><strong>QA checklists:</strong> Generate pre-launch checklists based on project type</li>
        <li><strong>Risk identification:</strong> "Analyze this project timeline and flag any potential bottlenecks, single points of failure, or unrealistic estimates"</li>
        <li><strong>Retrospective analysis:</strong> "Based on these project metrics [scope changes, timeline adherence, client feedback], identify patterns and improvement areas"</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: AI Project Plan</h3>
    <p><strong>Open Claude and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">You are a senior project manager at a digital agency specializing in Shopify stores. A client wants a custom Shopify Plus store for their luxury jewelry brand. Budget: $15,000. Timeline: 6 weeks.

Create a complete project plan including:
1. Project phases with start/end dates (6-week timeline starting next Monday)
2. Task breakdown per phase (minimum 25 tasks total)
3. Resource allocation (Developer, Designer, Content Writer, QA, PM — with hours per task)
4. Dependencies between tasks (which tasks block others)
5. Risk register (5 risks with probability, impact, and mitigation strategy)
6. Client milestone deliverables (what the client sees and when)
7. QA checklist for pre-launch

Format as a professional project plan document with tables.</div>
    <p><strong>Expected output:</strong> A comprehensive project plan ready for client presentation and internal team alignment.</p>
    <p><strong>Why this works:</strong> Specific project parameters (budget, timeline, scope) combined with detailed format requirements produce a professional plan that would take hours to create manually.</p>
</div>
`;

const task9Quiz = [
    { q: "A PM uses AI to estimate a Shopify project. The AI estimate is 120 hours. The PM should:", o: ["Present 120 hours to the client — AI estimates are accurate and don't need adjustment", "Use the AI estimate as a baseline, then add buffer for unknowns, review with tech lead, and adjust based on team capacity", "Double the estimate to 240 hours — AI always underestimates project complexity", "Ignore the AI estimate and use their gut feeling — experience trumps AI analysis"], c: 1 },
    { q: "After a client meeting, the PM has messy handwritten notes. AI can transform them by:", o: ["Only if the notes are typed — AI can't process handwritten text", "Structuring them into formatted summaries with decisions, action items, owners, and deadlines", "Automatically sending meeting minutes to the client without PM review", "Recording future meetings instead — AI can't work with post-meeting notes"], c: 1 },
    { q: "A client wants to add 3 new features mid-project. The AI-assisted PM response is:", o: ["Accept immediately — scope changes are normal and AI can adjust the timeline automatically", "Use AI to draft a scope change message showing timeline and cost impact, then review and send to the client", "Refuse the changes — the original scope was agreed upon and changes are not allowed", "Add the features without telling the client about timeline impact — just work harder"], c: 1 },
    { q: "AI-generated QA checklists are useful because:", o: ["They replace the need for human QA — AI checklists catch everything automatically", "They ensure consistent, comprehensive testing based on project type — no checklist items get forgotten", "They're only useful for simple projects — complex projects need custom human-made checklists", "AI checklists are generic and don't account for project-specific requirements"], c: 1 },
    { q: "MCP scheduled tasks help PM operations by:", o: ["Replacing the PM role entirely with automated project management", "Automating repetitive tasks like daily summaries, standup compilations, and regular reports", "Only working for development tasks — PM operations are too complex for automation", "Sending automatic updates to clients without PM oversight or approval"], c: 1 },
    { q: "AI risk identification for projects works best when you:", o: ["Ask AI to predict the future — it can foresee all possible project risks", "Provide the project timeline, team structure, and constraints — AI flags bottlenecks and single points of failure", "Let AI analyze the project independently without any context or project details", "Only use AI for risk identification after problems have already occurred"], c: 1 },
    { q: "AI-drafted client communication should ALWAYS be:", o: ["Sent immediately — AI produces professional content that doesn't need human review", "Reviewed and edited by the PM before sending — AI drafts are starting points, not final communications", "Labeled as 'AI-generated' in the email signature for transparency", "Avoided entirely — clients can tell when communication is AI-assisted"], c: 1 },
    { q: "For project estimation, AI is most valuable when:", o: ["The project is completely novel and no similar projects have been done before", "The prompt includes specific scope details — page count, features, integrations — so AI can generate detailed task breakdowns", "Estimating simple, straightforward projects that don't need detailed analysis", "The PM has no experience and relies entirely on AI judgment for estimates"], c: 1 },
    { q: "Retrospective analysis with AI helps DH by:", o: ["Automatically firing underperforming team members based on project metrics", "Identifying patterns in project data — scope changes, timeline adherence, feedback — to improve future project management", "Replacing the need for team retrospective meetings since AI analysis is more objective", "Only analyzing financial metrics — AI can't understand qualitative project feedback"], c: 1 },
    { q: "A PM needs to upsell additional services to a current client. AI helps by:", o: ["Sending automated upsell emails to all clients without PM involvement", "Analyzing the current project and suggesting relevant upsell services with value propositions tailored to the client's needs", "Creating fake urgency to pressure the client into buying more services", "Only suggesting the most expensive services to maximize revenue regardless of client need"], c: 1 }
];

// ═══════════════════════════════════════
// TASK 10: Final Certification
// ═══════════════════════════════════════

const task10Content = `
<h2>🎓 TASK 10: AI ETHICS, SECURITY & FINAL CERTIFICATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🛡️ AI Ethics at Digital Heroes</h3>
    <p>With great power comes great responsibility. AI tools can dramatically boost your output, but misusing them can harm clients, the company, and your career. This module covers the ethical and security foundations every DH team member must understand.</p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">🔒 Data Security — The Non-Negotiables</h3>
    <ul>
        <li><strong>NEVER feed client credentials to AI:</strong> No API keys, passwords, admin URLs, or payment info in AI prompts</li>
        <li><strong>NEVER share customer PII:</strong> No real customer names, emails, phone numbers, or addresses in AI conversations</li>
        <li><strong>NEVER paste proprietary code without authorization:</strong> Check with your PM before sharing client code with AI tools</li>
        <li><strong>Use anonymized data:</strong> Replace real names with "Client A," real emails with "user@example.com"</li>
        <li><strong>Check AI tool data policies:</strong> Understand whether your AI tool stores conversations for training</li>
    </ul>
    <div style="background: rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <strong>⚠️ DH Zero-Tolerance:</strong> Sharing client credentials or customer data with AI tools is a terminable offense. No exceptions.
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">⚖️ AI Bias & Fairness</h3>
    <p>AI models can perpetuate biases present in their training data. At DH, you must be aware of:</p>
    <ul>
        <li><strong>Cultural bias:</strong> AI may generate content that doesn't resonate with diverse audiences</li>
        <li><strong>Gender/racial bias:</strong> Image generation may default to stereotypes — always review for inclusivity</li>
        <li><strong>Language bias:</strong> AI may favor formal English over regional expressions your audience uses</li>
        <li><strong>Recommendation bias:</strong> AI may recommend popular tools/approaches over better alternatives it knows less about</li>
    </ul>
    <p><strong>DH Standard:</strong> Always review AI output for bias before client delivery. Ensure content represents diverse perspectives and doesn't reinforce stereotypes.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔍 Hallucination Detection</h3>
    <p>AI hallucinations are confidently stated falsehoods. DH team members must:</p>
    <ol>
        <li><strong>Verify all statistics and data:</strong> If AI says "studies show 73% of..."— find the actual study or remove the claim</li>
        <li><strong>Test all code:</strong> Never deploy AI-generated code without testing. Verify API functions actually exist.</li>
        <li><strong>Cross-reference facts:</strong> If AI mentions a specific Shopify feature, verify it in official docs</li>
        <li><strong>Check links and references:</strong> AI may generate plausible-looking but fake URLs</li>
        <li><strong>Question certainty:</strong> If AI sounds extremely confident about a specific claim, that's when you should verify most carefully</li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📜 IP Ownership & Disclosure</h3>
    <ul>
        <li><strong>AI-assisted work is still YOUR work:</strong> You directed it, reviewed it, refined it. You own it.</li>
        <li><strong>Client transparency:</strong> DH does not hide AI usage. If asked, be honest about AI-assisted workflows.</li>
        <li><strong>Copyright caution:</strong> AI-generated images may have unclear copyright status. For client logos and brand identity, always refine AI concepts with human design tools.</li>
        <li><strong>Code attribution:</strong> AI-generated code doesn't require attribution, but document significant AI-assisted decisions in project notes.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🚀 Course Review — What You've Learned</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Task</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Key Skill</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1. What is AI?</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI fundamentals, models, hallucinations</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2. Prompt Engineering</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">RCFC framework, few-shot, chain-of-thought</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3. Custom GPTs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Building and deploying AI assistants</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4. Claude Code</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CLI agent, CLAUDE.md, code generation</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5. Chrome & Antigravity</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Browser AI, MCP servers, platform tools</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6. Shopify CLI + AI</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI-powered theme development workflow</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7. AI for Design</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Stitch, 21st.dev, Midjourney, design briefs</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8. AI for Content & SEO</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product copy, meta tags, content strategy</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">9. AI for PM & Ops</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Estimation, communication, automation</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10. Ethics & Security</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Data security, bias, hallucinations, IP</td></tr>
    </table>
    <p style="text-align: center; font-size: 1.2em; margin-top: 20px;"><strong>🎯 Complete the final exam below to earn your AI Training Certificate!</strong></p>
</div>
`;

const task10Quiz = [
    { q: "A developer is debugging a client's Shopify store. They paste the store's admin API key into Claude to get help. According to DH policy, this is:", o: ["Acceptable — Claude is a trusted tool and API keys help it provide better debugging assistance", "A zero-tolerance violation — client credentials must NEVER be shared with AI tools regardless of the reason", "Acceptable only if the developer deletes the conversation afterward to remove the key", "Fine as long as the PM approves it first — manager authorization overrides security policy"], c: 1 },
    { q: "You're using the RCFC framework for a prompt. Which sequence is correct?", o: ["Format → Constraints → Role → Context", "Role → Context → Format → Constraints", "Context → Role → Constraints → Format", "Constraints → Format → Context → Role"], c: 1 },
    { q: "Claude Code's CLAUDE.md file serves the same purpose as what feature in ChatGPT?", o: ["Chat history — both store previous conversations for reference", "Custom GPT instructions — both provide persistent context and rules for AI behavior", "Temperature settings — both control the randomness of AI output", "File uploads — both store documents for the AI to reference"], c: 1 },
    { q: "An MCP Scheduled Task runs a daily QA scan at 9 AM. The scan finds 5 issues. The correct workflow is:", o: ["The MCP task automatically fixes all 5 issues without human involvement", "Review the 5 issues, prioritize them, assign to team members, and track resolution — AI identifies, humans fix", "Ignore automated findings — only human-identified QA issues are valid and actionable", "Forward the raw AI output directly to the client as a daily QA report"], c: 1 },
    { q: "Few-shot prompting with 3 examples of brand voice produces better product descriptions than zero-shot because:", o: ["3 examples triple the token count which makes AI work harder on the response", "Examples teach AI the exact style, tone, and structure to replicate — consistency across 50+ products", "Zero-shot is actually better — examples constrain AI creativity unnecessarily", "Few-shot only works for English content — other languages need zero-shot"], c: 1 },
    { q: "Antigravity connects AI tools, automation, and team processes. Its key advantage over individual AI usage is:", o: ["It's cheaper per user than individual AI subscriptions", "Shared knowledge, consistent processes, and team-wide benefits from automated workflows — not siloed AI usage", "It uses a more powerful AI model than what's available to individual users", "It monitors employee productivity and reports to management"], c: 1 },
    { q: "AI generates a Shopify Liquid section that references a filter called 'product_url'. You've never seen this filter. You should:", o: ["Trust Claude — it's trained on Shopify documentation and wouldn't hallucinate Liquid filters", "Verify in official Shopify Liquid docs — AI can hallucinate plausible-sounding but non-existent functions", "Use it anyway and see if it works — testing is faster than documentation lookup", "Report it as a Claude bug to Anthropic support"], c: 1 },
    { q: "A designer uses AI to generate 20 hero banner concepts for a client. The images show only one ethnicity of models. The designer should:", o: ["Present them to the client — AI-generated diversity isn't required for banner concepts", "Regenerate with explicit diversity requirements — AI may default to biased representation from training data", "Only fix it if the client specifically requests diverse representation", "Accept it — AI-generated images are exempt from diversity and inclusion standards"], c: 1 },
    { q: "The Shopify CLI + AI workflow sequence is: pull → claude → dev → iterate → push. The 'iterate' step is critical because:", o: ["AI-generated code always works perfectly on the first try — iteration is optional", "First-pass AI code may have bugs, style mismatches, or missing features — iteration with live preview ensures production quality", "Iteration means running the code through shopify theme check which is required before every push", "Iteration only applies to CSS styling — AI-generated Liquid logic doesn't need iteration"], c: 1 },
    { q: "A PM uses AI to generate a project estimate of 120 hours. The correct next step is:", o: ["Present 120 hours to the client immediately — AI estimates are data-driven and accurate", "Use it as a baseline, add buffer for unknowns, validate with tech lead, adjust for team velocity", "Halve it to 60 hours — AI always overestimates to be safe", "Ignore it — only manual estimation based on past experience is valid for client-facing estimates"], c: 1 },
    { q: "AI-generated content for a client blog post contains the statistic '73% of Shopify stores see 2x revenue with email marketing.' You should:", o: ["Include it — specific statistics make blog posts more credible and authoritative", "Verify the source — if you can't find the actual study, remove or rephrase the claim as AI may have hallucinated it", "Replace 73% with 'studies show most' to make it vaguer but technically not false", "Keep it but add 'according to AI research' as a disclaimer"], c: 1 },
    { q: "A new team member asks: 'Should I use Custom GPTs or Claude Projects for everything?' The best answer is:", o: ["Always use Custom GPTs — they're more powerful and shareable", "Always use Claude Projects — Claude's models are better for professional work", "Use Custom GPTs for repeatable team-wide tools; Claude Projects for deep ongoing work with codebases and large document sets", "It doesn't matter — they produce identical results on every task"], c: 2 },
    { q: "21st.dev + Claude Code together create a powerful workflow because:", o: ["They use the same underlying AI model and share conversation context", "21st.dev generates UI components rapidly, Claude Code converts them to production Shopify Liquid code", "21st.dev replaces the need for a designer on the team entirely", "Claude Code generates designs and 21st.dev converts them to production code"], c: 1 },
    { q: "The DH AI Philosophy states that every team member should use AI to:", o: ["Replace their work entirely — AI does the work while humans supervise", "Serve as a 10x multiplier — humans direct AI, verify output, and deliver excellence", "Only handle repetitive tasks — creative and strategic work should remain 100% human", "Impress clients with AI-powered proposals to justify premium pricing"], c: 1 },
    { q: "You complete all 9 tasks and pass this certification exam. Your AI journey at DH:", o: ["Is complete — you've learned everything there is to know about AI", "Is just beginning — AI tools evolve rapidly, and continuous learning and experimentation are essential for staying effective", "Means you're now responsible for training other team members on AI", "Qualifies you for a promotion to AI Lead at Digital Heroes"], c: 1 }
];


// ═══════════════════════════════════════
// WINDOW REGISTRATIONS
// ═══════════════════════════════════════

window.task1Content = task1Content;
window.task2Content = task2Content;
window.task3Content = task3Content;
window.task4Content = task4Content;
window.task5Content = task5Content;
window.task6Content = task6Content;
window.task7Content = task7Content;
window.task8Content = task8Content;
window.task9Content = task9Content;
window.task10Content = task10Content;

window.task1Quiz = task1Quiz;
window.task2Quiz = task2Quiz;
window.task3Quiz = task3Quiz;
window.task4Quiz = task4Quiz;
window.task5Quiz = task5Quiz;
window.task6Quiz = task6Quiz;
window.task7Quiz = task7Quiz;
window.task8Quiz = task8Quiz;
window.task9Quiz = task9Quiz;
window.task10Quiz = task10Quiz;

const allQuizzes = [
    task1Quiz,
    task2Quiz,
    task3Quiz,
    task4Quiz,
    task5Quiz,
    task6Quiz,
    task7Quiz,
    task8Quiz,
    task9Quiz,
    task10Quiz
];
