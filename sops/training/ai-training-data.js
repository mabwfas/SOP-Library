// AI Training - Digital Heroes AI Mastery Module

const trainingTasks = [
    { id: 1, title: "What is AI?", description: "From Sci-Fi to Your Desktop", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🤖 AI fundamentals", "📖 Models & capabilities"] },
    { id: 2, title: "Prompt Engineering", description: "Mastering AI Communication", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "✍️ Prompt techniques", "📖 Templates & patterns"] },
    { id: 3, title: "Setup Part 1", description: "Install Claude Code (MANDATORY)", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💻 CLI installation", "📖 CLAUDE.md setup"] },
    { id: 4, title: "Setup Part 2", description: "Chrome Extension & Skills (MANDATORY)", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🌐 Browser extension", "📖 Skills & plugins"] },
    { id: 5, title: "Custom GPTs & Projects", description: "Building AI Assistants", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🛠️ GPT Builder", "📖 Claude Projects"] },
    { id: 6, title: "Claude Code Mastery", description: "AI-Powered Development", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "💻 CLI agent mastery", "📖 CLAUDE.md & workflows"] },
    { id: 7, title: "MCP & Antigravity", description: "Platform & Automation", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🌐 MCP protocol", "📖 Browser AI tools"] },
    { id: 8, title: "Skills & Plugins", description: "The AI Skills Ecosystem", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🔌 Skills deep dive", "📖 Custom commands"] },
    { id: 9, title: "Shopify CLI + AI", description: "AI-Powered Store Development", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🛒 Theme development", "📖 Liquid + AI workflow"] },
    { id: 10, title: "AI for Design", description: "Branding, Visuals & the Designer's Playbook", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "🎨 AI design tools", "📖 5 Design Pillars"] },
    { id: 11, title: "AI for Content & SEO", description: "Writing, Marketing & Optimization", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 AI content creation", "📖 SEO optimization"] },
    { id: 12, title: "AI for PM & Ops", description: "Project Management & Automation", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 AI for planning", "📖 Workflow automation"] },
    { id: 13, title: "Advanced Prompts", description: "Speed Hacks & Power Techniques", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "⚡ Mega-prompts", "📖 10x speed hacks"] },
    { id: 14, title: "AI Ethics & Security", description: "Compliance, Bias & Data Safety", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🛡️ Data security", "📖 Ethics & compliance"] },
    { id: 15, title: "Final Certification", description: "Comprehensive Exam", contentFirst: false, studyGuide: ["⏱️ Time: 90 min", "📝 15 Questions", "🎓 Comprehensive exam"] }
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

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(234, 88, 12, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">🚨 Why AI Matters — Why YOU Must Learn This</h3>
    <div style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 15px 0; border-radius: 0 8px 8px 0;">
        <p style="font-size: 1.15em; font-weight: 700; margin: 0 0 10px;">AI won't replace you. But someone using AI <em>will</em>.</p>
        <p style="margin: 0; opacity: 0.9;">This isn't a threat — it's a fact. Right now, two employees get the same task. One uses AI, finishes in 1 hour, delivers polished work. The other spends 8 hours doing it manually. Who does the company keep? Who gets promoted? That's the reality we live in.</p>
    </div>

    <h4 style="color: #FBBF24; margin-top: 20px;">Think of AI Like a Power Tool</h4>
    <p>Imagine two carpenters. One uses a hand saw. The other uses a power saw. They both know how to cut wood. But the one with the power saw finishes the house while the other is still on the first wall. That's AI.</p>
    <ul>
        <li><strong>AI doesn't do your job for you</strong> — it does the boring, repetitive parts 100x faster so YOU can focus on the creative, strategic work that actually matters</li>
        <li><strong>You're still the expert</strong> — AI generates options, you pick the right one. AI writes a draft, you make it great. AI suggests code, you verify it works.</li>
        <li><strong>The human-in-the-loop wins</strong> — AI without a skilled human produces average work ("AI slop"). A skilled human WITH AI produces exceptional work in a fraction of the time.</li>
    </ul>

    <h4 style="color: #FBBF24; margin-top: 20px;">📊 The Efficiency Gap Is Real</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.3);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Task</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Without AI</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">With AI</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Saved</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Write a product description</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981; font-weight: 700;">90%</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Build a website section</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981; font-weight: 700;">87%</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Research 10 competitors</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">20 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981; font-weight: 700;">89%</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Debug a complex issue</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981; font-weight: 700;">92%</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create a project plan</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">15 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #10B981; font-weight: 700;">88%</td></tr>
    </table>
    <p>This is not a small improvement. This is <strong>5x to 10x faster</strong>. Every. Single. Day.</p>

    <h4 style="color: #FBBF24; margin-top: 20px;">🧠 The Right Mindset vs The Wrong Mindset</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0;">
        <div style="background: rgba(239, 68, 68, 0.15); border-radius: 10px; padding: 16px; border: 1px solid rgba(239, 68, 68, 0.3);">
            <p style="font-weight: 700; color: #EF4444; margin: 0 0 8px;">❌ Wrong</p>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.9em;">
                <li>"AI will take my job"</li>
                <li>"It's just a trend"</li>
                <li>"I'll learn it someday"</li>
                <li>"AI makes people lazy"</li>
                <li>"My role doesn't need this"</li>
            </ul>
        </div>
        <div style="background: rgba(16, 185, 129, 0.15); border-radius: 10px; padding: 16px; border: 1px solid rgba(16, 185, 129, 0.3);">
            <p style="font-weight: 700; color: #10B981; margin: 0 0 8px;">✅ Right</p>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.9em;">
                <li>"AI makes me 10x more valuable"</li>
                <li>"Biggest shift since the internet"</li>
                <li>"Every week I wait, I fall behind"</li>
                <li>"It makes me <em>faster</em>, not lazier"</li>
                <li>"Every single role benefits"</li>
            </ul>
        </div>
    </div>

    <h4 style="color: #FBBF24; margin-top: 20px;">💪 The Bottom Line</h4>
    <p>You're not learning AI because your boss told you to. You're learning it because:</p>
    <ol>
        <li><strong>Your career depends on it</strong> — within 2 years, not knowing AI will be like not knowing email in 2005</li>
        <li><strong>Your paycheck depends on it</strong> — people who use AI effectively deliver 5-10x output, and they get paid accordingly</li>
        <li><strong>Your team depends on it</strong> — when one person on a team uses AI well, they lift the whole team's capability</li>
    </ol>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #10B981; padding: 16px; margin: 15px 0;">
        <p style="margin: 0;"><strong style="color: #10B981;">🎯 Your goal after this training:</strong> Become the person who uses AI so well that you're <em>irreplaceable</em>, not replaceable. That's what this entire program is about.</p>
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
    { q: "At Digital Heroes, the PRIMARY role of AI tools is to:", o: ["Replace human workers entirely so the company can scale with fewer employees", "Serve as a 10x multiplier for human output — you direct the AI, verify its work, and deliver excellence", "Handle all repetitive tasks while humans focus exclusively on creative and strategic work", "Impress clients by mentioning AI in proposals and charging premium rates for AI-assisted work"], c: 1 }
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
    { q: "What makes a 'constraint' different from 'context' in the RCFC framework?", o: ["They're the same thing — constraints and context both provide background information", "Context describes the situation; constraints define rules, limits, and boundaries the output must follow", "Context is optional while constraints are always required for good prompts", "Constraints only matter for coding prompts — content writing doesn't need constraints"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 3: Setup Part 1 — Install Claude Code
// ═══════════════════════════════════════

const task3Content = `
<h2>💻 TASK 3: SETUP PART 1 — Install Claude Code (MANDATORY)</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚡ Why Claude Code is Non-Negotiable at DH</h3>
    <p>Claude Code is the single most important tool in the DH AI stack. It's an <strong>agentic coding CLI</strong> that lives in your terminal — it reads your entire project, writes code directly to files, runs commands, and manages your git workflow. Unlike ChatGPT where you copy-paste code snippets, Claude Code works <em>inside</em> your codebase.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🔑 Why Claude Code > ChatGPT for Coding</strong>
        <ul>
            <li><strong>Reads your entire project:</strong> Understands architecture, file structure, and conventions before writing a single line</li>
            <li><strong>Writes to files directly:</strong> No copy-paste — edits are applied in-place with diffs you can review</li>
            <li><strong>200K context window:</strong> Can hold your entire codebase in memory for holistic understanding</li>
            <li><strong>Runs terminal commands:</strong> Executes builds, tests, git commands, and dev servers autonomously</li>
            <li><strong>Persists project context:</strong> CLAUDE.md files give it long-term memory about your project</li>
        </ul>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔧 Step-by-Step Installation</h3>

    <h4>Step 1: Install Node.js 18+</h4>
    <p>Claude Code requires Node.js version 18 or higher. Download and install from the official website:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">https://nodejs.org</div>
    <p>Download the LTS (Long Term Support) version. Run the installer and follow the prompts. After installation, verify by opening your terminal:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">node --version
# Should output v18.x.x or higher</div>

    <h4>Step 2: Install Claude Code</h4>
    <p>Open your terminal (Command Prompt, PowerShell, or Terminal on Mac) and run:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">npm install -g @anthropic-ai/claude-code</div>
    <p>The <code>-g</code> flag installs it globally so you can use <code>claude</code> from any directory.</p>

    <h4>Step 3: Navigate to a Project and Launch</h4>
    <p>Navigate to any project folder and start Claude Code:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">cd my-shopify-theme
claude</div>
    <p>Claude Code will launch in interactive mode, ready to read your project and accept instructions.</p>

    <h4>Step 4: Sign In with Your Anthropic Account</h4>
    <p>On first launch, Claude Code will prompt you to authenticate. Sign in with your Anthropic account. If you don't have one, create it at:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">https://claude.ai</div>
    <p>Follow the authentication flow in your browser. Once authenticated, Claude Code connects to your account automatically for future sessions.</p>

    <h4>Step 5: Run /init to Generate CLAUDE.md</h4>
    <p>Inside Claude Code, type:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">/init</div>
    <p>This creates a <code>CLAUDE.md</code> file at your project root — the AI's persistent memory for your project. It auto-detects your tech stack, file structure, and conventions.</p>

    <h4>Step 6: Learn Essential Commands</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/init</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Generate CLAUDE.md with project context</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/compact</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Summarize conversation to free context window</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/clear</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Start fresh conversation (keeps CLAUDE.md)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/cost</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show token usage and session cost</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/review</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Review pending code changes before applying</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/commit</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create a git commit with AI-generated message</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📄 CLAUDE.md — Your Project's AI Brain</h3>
    <p>CLAUDE.md is the most important file for Claude Code productivity. It persists between sessions and tells Claude everything about your project.</p>
    <h4>Example CLAUDE.md Template:</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;"># Project: Luxury Candle Store (Shopify)

## Tech Stack
- Shopify Dawn theme v12.0
- Liquid, CSS, vanilla JS (no external libraries)
- Klaviyo for email, Loox for reviews

## File Structure
- sections/ — Custom Liquid sections
- snippets/ — Reusable Liquid components
- assets/ — CSS and JS files
- templates/ — Page templates

## Coding Conventions
- BEM naming for CSS classes
- Section filenames: kebab-case (e.g., hero-banner.liquid)
- Schema settings: descriptive labels, sensible defaults
- Mobile-first responsive design

## Common Commands
- shopify theme dev — Start local dev server
- shopify theme push — Deploy to Shopify
- shopify theme check — Lint for best practices</div>
    <p><strong>Why this matters:</strong> Without CLAUDE.md, every Claude Code session starts blind. With it, Claude immediately knows your conventions, tech stack, and project structure — producing code that fits your project from the first prompt.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">✅ Installation Checklist</h3>
    <p>Complete each step before moving to Task 4:</p>
    <ul style="list-style: none; padding-left: 0;">
        <li>☐ <strong>Node.js installed</strong> — Run <code>node --version</code> and confirm v18+</li>
        <li>☐ <strong>Claude Code installed</strong> — Run <code>claude --version</code> and confirm it outputs a version number</li>
        <li>☐ <strong>Signed in</strong> — Run <code>claude</code> in any folder and complete authentication</li>
        <li>☐ <strong>CLAUDE.md created</strong> — Run <code>/init</code> inside a project and verify the file was generated</li>
    </ul>
</div>
`;

const task3Quiz = [
    { q: "A new developer installs Claude Code but skips creating CLAUDE.md with /init. What problem will they experience?", o: ["Claude Code won't launch without a CLAUDE.md file — it's a required dependency", "Claude Code will work but without project context — it won't know the tech stack, conventions, or file structure, producing generic code", "Nothing — CLAUDE.md is optional and only useful for very large projects", "Claude Code will automatically generate CLAUDE.md on the first prompt anyway"], c: 1 },
    { q: "Why does Claude Code require Node.js 18+ as a prerequisite?", o: ["Node.js provides the JavaScript runtime environment that Claude Code's CLI is built on", "Node.js is only needed for Shopify projects — non-Shopify users don't need it", "Claude Code uses Node.js to train its AI model locally on your machine", "Node.js 18+ is required because older versions don't support AI features"], c: 0 },
    { q: "An agentic coding tool like Claude Code differs from a chat-based AI like ChatGPT because:", o: ["Agentic tools are always more expensive but produce identical output to chat interfaces", "Agentic tools directly read files, write code, and execute commands in your project — they act autonomously within your codebase", "Chat-based AI is better for coding because you can carefully review before pasting", "Agentic tools only work for Python projects, not web development"], c: 1 },
    { q: "The /compact command is useful during a long Claude Code session because:", o: ["It compresses your project files to save disk space", "It summarizes the conversation history to reclaim context window space while preserving key information", "It restarts Claude Code with a faster model for better performance", "It removes unused files from the project to speed up code generation"], c: 1 },
    { q: "A CLAUDE.md file includes 'No external JS libraries' in coding conventions. This helps because:", o: ["It prevents Claude from accessing the internet to download libraries during code generation", "Claude Code reads this constraint and generates code using only native CSS/JS, matching the team's standards automatically", "External libraries are incompatible with Claude Code's code generation engine", "It only works for Shopify projects — WordPress projects need external libraries"], c: 1 },
    { q: "The difference between /clear and /compact in Claude Code is:", o: ["/clear and /compact do the same thing — both reset the conversation completely", "/compact summarizes and keeps key context; /clear starts completely fresh while still reading CLAUDE.md", "/clear deletes CLAUDE.md; /compact preserves it", "/compact is for small projects; /clear is for large projects"], c: 1 },
    { q: "Why is the npm -g flag important when installing Claude Code?", o: ["The -g flag makes Claude Code run faster by enabling GPU acceleration", "The -g flag installs globally, making the 'claude' command available from any directory on your system", "The -g flag is optional — Claude Code works the same without it", "The -g flag gives Claude Code admin permissions to modify system files"], c: 1 },
    { q: "Including common commands in CLAUDE.md (like 'shopify theme dev') is valuable because:", o: ["Claude Code can only run commands that are explicitly listed in CLAUDE.md", "Claude Code knows which commands are relevant to your project and can run them when appropriate during development", "It replaces the need for a README.md file in the project", "Common commands are only there for human reference — Claude Code doesn't read them"], c: 1 },
    { q: "A developer says: 'I'll just use Claude.ai in my browser — it's the same AI model.' Why is Claude Code still superior for development work?", o: ["Claude Code uses a more powerful AI model than Claude.ai", "Claude Code reads your entire codebase for context, writes directly to files, and runs commands — browser Claude requires manual copy-paste and lacks project awareness", "Claude.ai is actually better because it has a visual interface for reviewing code changes", "There's no real difference — both produce identical code for the same prompts"], c: 1 },
    { q: "The /cost command in Claude Code helps the team because:", o: ["It automatically bills the client for AI usage on their project", "It shows token usage and cost, helping team members monitor spending and use AI resources efficiently", "It reduces costs by compressing future prompts automatically", "It's only relevant for personal accounts — team accounts have unlimited usage"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 4: Setup Part 2 — Chrome Extension & Skills
// ═══════════════════════════════════════

const task4Content = `
<h2>🌐 TASK 4: SETUP PART 2 — Chrome Extension & Skills (MANDATORY)</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔌 Extending Claude's Powers</h3>
    <p>Claude Code in the terminal is powerful, but the DH toolkit goes further. In this task you'll install the <strong>Claude Chrome Extension</strong> for browser-based AI, plus <strong>Skills repositories</strong> that give Claude Code specialized capabilities for design, marketing, and more.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">Step 1: Install Claude Chrome Extension</h3>
    <p>The Claude Chrome Extension lets Claude interact directly with your browser — reading pages, filling forms, clicking buttons, taking screenshots, and automating workflows.</p>
    <h4>Installation:</h4>
    <ol>
        <li>Open Chrome and go to the Chrome Web Store</li>
        <li>Search for <strong>"Claude" by Anthropic</strong></li>
        <li>Click <strong>"Add to Chrome"</strong> then <strong>"Add Extension"</strong></li>
        <li>Sign in with your Claude/Anthropic account</li>
        <li>Test: Open any webpage, click the Claude icon in the toolbar, and ask it to summarize the page</li>
    </ol>
    <h4>What Claude in Chrome Can Do:</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Capability</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DH Use Case</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Read web pages</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Analyze competitor stores, extract product data</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fill forms</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Automate repetitive data entry across tools</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Take screenshots</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Visual QA testing, before/after comparisons</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Click & navigate</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Automated testing flows, multi-page workflows</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Compare pages</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Side-by-side store analysis, design review</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">Step 2: Clone Anthropic Skills Repo</h3>
    <p><strong>Skills</strong> are SKILL.md files that Claude Code auto-discovers in your project's <code>.claude/skills/</code> directory. They give Claude specialized knowledge for specific tasks.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">git clone https://github.com/anthropics/skills.git
cd skills</div>
    <h4>Key Skills in the Repo:</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skill</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">pdf</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Read, analyze, and extract data from PDF documents</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">xlsx</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Parse and analyze Excel spreadsheets</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">docx</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Read and process Word documents</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">pptx</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Analyze PowerPoint presentations</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">schedule</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create and manage scheduled automation tasks</td></tr>
    </table>
    <p>To use a skill in your project:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">cp -r skills/pdf /your-project/.claude/skills/</div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">Step 3: Clone Marketing Skills Repo</h3>
    <p>The Marketing Skills repo contains 36 specialized skills for CRO, copywriting, SEO, paid ads, analytics, and strategy.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">git clone https://github.com/coreyhaines31/marketingskills.git</div>
    <p>Or install directly with npx:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">npx skills add coreyhaines31/marketingskills</div>
    <p>This gives Claude Code expertise across 36 marketing categories including conversion rate optimization, content strategy, SEO auditing, paid ad management, and growth analytics.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">Step 4: Install UI/UX Pro Max Skill</h3>
    <p>UI/UX Pro Max is a comprehensive design skill that gives Claude Code knowledge of 67 UI styles, 96 color palettes, 57 font pairings, and 100 industry-specific design rules.</p>
    <h4>Option A: CLI Install</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">npm install -g uipro-cli
uipro init --ai claude</div>
    <h4>Option B: Manual Clone</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git</div>
    <p>Then copy the skill files to your project's <code>.claude/skills/</code> directory.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">Step 5: Install Frontend Design Skill</h3>
    <p>The Frontend Design skill enhances Claude Code's ability to generate production-quality UI components.</p>
    <h4>Option A: Inside Claude Code</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">/install-plugin frontend-design</div>
    <h4>Option B: Manual Clone</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">git clone https://github.com/anthropics/claudecode/tree/main/plugins/frontend-design</div>
    <p>Copy to your project's <code>.claude/skills/</code> directory to activate.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">✅ Setup Verification Checklist</h3>
    <p>Complete each step before moving to Task 5:</p>
    <ul style="list-style: none; padding-left: 0;">
        <li>☐ <strong>Chrome Extension installed</strong> — Claude icon visible in Chrome toolbar, can summarize any webpage</li>
        <li>☐ <strong>Anthropic Skills repo cloned</strong> — <code>ls skills/</code> shows pdf, xlsx, docx, pptx, schedule folders</li>
        <li>☐ <strong>Marketing Skills installed</strong> — 36 skill files available for CRO, SEO, content, etc.</li>
        <li>☐ <strong>UI/UX Pro Max installed</strong> — Skill files in .claude/skills/ directory</li>
        <li>☐ <strong>Frontend Design skill installed</strong> — Available in Claude Code session</li>
    </ul>
</div>
`;

const task4Quiz = [
    { q: "Skills in Claude Code are SKILL.md files placed in the .claude/skills/ directory. They work by:", o: ["Replacing Claude's AI model with a specialized model trained for that skill", "Being auto-discovered by Claude Code, which reads them as additional context and instructions for specific tasks", "Requiring manual activation with a command before each use", "Only working when connected to the internet to download additional training data"], c: 1 },
    { q: "The Claude Chrome Extension enables browser automation. In a DH context, its primary value is:", o: ["Replacing manual testing entirely — Claude Chrome catches every possible bug automatically", "Letting Claude read live web pages, interact with browser tabs, and automate QA testing and data extraction workflows", "Only useful for filling out forms — it can't read or analyze page content", "It's just a shortcut to Claude.ai — the same thing as using the web interface"], c: 1 },
    { q: "MCP (Model Context Protocol) connects AI to external tools. The best analogy for MCP is:", o: ["A programming language that AI models use to communicate with each other", "USB ports for AI — you plug in different capabilities like browser control, file access, or app integrations", "An encryption protocol that secures AI conversations from hackers", "A database that stores AI-generated content for later retrieval"], c: 1 },
    { q: "A developer installs the Marketing Skills repo (36 skills). These skills are most useful for:", o: ["Only marketers — developers have no use for marketing skills in their work", "Any DH team member working on CRO, copywriting, SEO, or content strategy for client projects", "Replacing the need for a marketing team — AI handles all marketing autonomously", "Only when creating Custom GPTs — skills don't work with Claude Code"], c: 1 },
    { q: "UI/UX Pro Max provides 67 UI styles, 96 color palettes, and 57 font pairings. This helps Claude Code by:", o: ["Automatically applying random design choices to generated code", "Giving Claude deep design knowledge so it generates more aesthetically sophisticated and industry-appropriate UI code", "Replacing Figma and all other design tools at DH", "Only working with React projects — Shopify Liquid is not supported"], c: 1 },
    { q: "To use the PDF skill from the Anthropic Skills repo in your Shopify project, you:", o: ["Install it globally on your system with npm install -g pdf-skill", "Copy the skill folder to your project's .claude/skills/ directory so Claude Code auto-discovers it", "Paste the SKILL.md content into every prompt where you need PDF analysis", "Skills only work with Python projects — Shopify projects use a different plugin system"], c: 1 },
    { q: "A PM says: 'I don't need the Chrome Extension — I only work in spreadsheets and email.' Why is this wrong?", o: ["The Chrome Extension is mandatory for all DH employees regardless of role", "The Chrome Extension can analyze any web page — spreadsheets in Google Sheets, email in Gmail, project boards, client stores — making every browser-based task faster", "PMs should only use Custom GPTs, not browser extensions", "The Chrome Extension is actually only for developers — the PM is correct"], c: 1 },
    { q: "The difference between Anthropic Skills (pdf, xlsx) and Marketing Skills (CRO, SEO) is:", o: ["Anthropic Skills are official and Marketing Skills are unofficial and unreliable", "Anthropic Skills handle file format processing; Marketing Skills provide domain-specific marketing expertise and strategy knowledge", "They're the same type of skill — the repos just have different names", "Anthropic Skills are free and Marketing Skills require a paid subscription"], c: 1 },
    { q: "Installing the Frontend Design skill alongside UI/UX Pro Max creates value because:", o: ["They conflict with each other — you should only install one design skill at a time", "They complement each other — Frontend Design focuses on code generation while UI/UX Pro Max provides design system knowledge", "Having two skills doubles the processing speed of Claude Code", "The Frontend Design skill replaces UI/UX Pro Max entirely"], c: 1 },
    { q: "A developer clones the skills repo but never copies skills to their project's .claude/skills/ directory. What happens?", o: ["Claude Code automatically finds the cloned repo anywhere on the system", "The skills remain inactive — Claude Code only discovers skills inside the project's .claude/skills/ directory", "The skills work globally from the cloned location", "Claude Code throws an error and refuses to start without skills installed"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 5: Custom GPTs & Claude Projects
// ═══════════════════════════════════════

const task5Content = `
<h2>🛠️ TASK 5: CUSTOM GPTs & CLAUDE PROJECTS — Building AI Assistants</h2>

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
    <h3 style="color: #60A5FA; margin-top: 0;">🏢 DH Custom GPTs — Live Links</h3>
    <p>These are real GPTs built for DH team workflows. Bookmark and use them daily:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">GPT</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Link</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sales Rep GPT</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Handle Fiverr messages, client pitches, objection handling</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><a href="https://chatgpt.com/g/g-6961854e56d08191a137afb0b3fbf3d9-digital-heroes-sales-rep" target="_blank" style="color: #60A5FA;">Open GPT</a></td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom Instruction Generator</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Generate system prompts for new Custom GPTs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><a href="https://chatgpt.com/g/g-2VxwgpMMk-custom-instruction-generator" target="_blank" style="color: #60A5FA;">Open GPT</a></td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Fiverr Client Chat GPT</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Website development client communication on Fiverr</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><a href="https://chatgpt.com/g/g-68bfdb067bf8819199a3a68e3534cdbf-website-development-fiv" target="_blank" style="color: #60A5FA;">Open GPT</a></td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔨 Building a Custom GPT (Step-by-Step)</h3>
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

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔄 Custom GPTs vs Claude Projects — When to Use Each</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom GPTs</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude Projects</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Platform</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">ChatGPT (OpenAI)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude.ai (Anthropic)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Knowledge</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">File uploads (PDFs, docs)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Project knowledge + file uploads</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sharing</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Public GPT Store or link sharing</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Team workspace sharing</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Context Window</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">128K tokens (GPT-4o)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">200K tokens (Claude)</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Best For</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client-facing tools, public bots, shareable assistants</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Internal workflows, deep code projects, large document analysis</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">System Prompt</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Instructions field in GPT Builder</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Project Instructions in settings</td></tr>
    </table>
    <p><strong>DH Rule:</strong> Use Custom GPTs for repeatable, team-wide tasks that benefit from sharing. Use Claude Projects for deep, ongoing work with large codebases or document sets.</p>
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

const task5Quiz = [
    { q: "Your PM asks you to build a Custom GPT that helps the sales team write client proposals. The MOST important component to get right is:", o: ["The GPT's profile picture — first impressions matter for team adoption", "The instruction set (system prompt) — it defines the GPT's role, tone, rules, and output format", "The name — a catchy name increases team usage by 40% according to research", "The capabilities toggles — enabling all options (browsing, DALL-E, code) makes the GPT more powerful"], c: 1 },
    { q: "You upload the DH Employee Handbook PDF as a knowledge file to a Custom GPT. An employee asks the GPT about leave policy. The GPT should:", o: ["Search the internet for the latest leave policy information since the PDF might be outdated", "Reference ONLY the uploaded handbook content for leave policy answers — that's the authoritative source", "Refuse to answer HR questions since it's not an HR-specific GPT and redirect to the HR team", "Combine handbook info with general HR best practices from its training data for a comprehensive answer"], c: 1 },
    { q: "Claude Projects differ from Custom GPTs primarily because:", o: ["Claude Projects are free while Custom GPTs require ChatGPT Plus subscription", "Claude Projects offer a larger 200K context window and are better for deep, ongoing work with code and large documents", "Claude Projects can only handle text while Custom GPTs support images and files", "There's no real difference — they're the same feature on different platforms"], c: 1 },
    { q: "DH has a Sales Rep GPT with a live link the team uses daily. The main advantage of sharing GPTs via link is:", o: ["Links are cheaper than giving everyone their own ChatGPT Plus subscription", "Every team member accesses the same pre-configured assistant with consistent instructions, knowledge, and behavior", "Links let team members edit the GPT's instructions to customize it for their needs", "Shared links bypass the need for each person to have a ChatGPT account"], c: 1 },
    { q: "A developer says: 'I don't need Custom GPTs — I just copy-paste my prompt every time.' Why is this inefficient?", o: ["It's actually fine — Custom GPTs and copy-paste prompts produce identical results every time", "Custom GPTs persist instructions + knowledge files + capabilities, saving time and ensuring consistency across the team", "Copy-paste prompts are better because you can modify them each time for different situations", "Custom GPTs are only useful for non-technical roles — developers should always use raw prompts"], c: 1 },
    { q: "The 'Knowledge Files' feature in Custom GPTs is most useful for:", o: ["Making the GPT look more professional by showing uploaded file counts to users", "Giving the GPT access to proprietary data (SOPs, brand guides, pricing) that isn't in its training data", "Bypassing the GPT's token limits by offloading content to files", "Replacing the instruction set — knowledge files override whatever instructions you write"], c: 1 },
    { q: "When designing a Custom GPT's instruction set, including 'example interactions' helps because:", o: ["They count as few-shot examples that teach the GPT exactly what format and style of output you expect", "They make the instruction set longer, which makes the GPT smarter", "They're required by OpenAI's GPT Builder — GPTs won't work without them", "They're only useful for testing during development and should be removed before sharing"], c: 0 },
    { q: "A new employee creates a Custom GPT with instructions that say 'Always be helpful and answer any question.' This is problematic because:", o: ["Custom GPTs should never be helpful — they should only follow strict rules", "The instructions are too vague — they lack role definition, constraints, output format, and knowledge boundaries", "GPTs can't be configured to 'always' do anything — they randomly ignore instructions", "This is actually a perfectly fine instruction set for a general-purpose GPT"], c: 1 },
    { q: "You need a tool for the whole team to check Shopify stores for QA issues. Custom GPT or Claude Project?", o: ["Claude Project — it has better code analysis capabilities for Shopify stores", "Custom GPT — it can be shared via link with the whole team and reused for every store review", "Neither — QA should always be done manually by a human reviewer without AI assistance", "Both — build identical tools on both platforms for redundancy in case one goes down"], c: 1 },
    { q: "The Custom Instruction Generator GPT helps DH by:", o: ["Automatically building GPTs without any human input or configuration", "Using AI to generate well-structured system prompts for new Custom GPTs — leveraging meta-AI to build better AI tools", "Replacing the GPT Builder interface with a simpler command-line tool", "Only generating instructions for sales-related GPTs — other roles need manual configuration"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 6: Claude Code Mastery
// ═══════════════════════════════════════

const task6Content = `
<h2>💻 TASK 6: CLAUDE CODE MASTERY — Deep Dive into AI-Powered Development</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚡ Beyond the Basics</h3>
    <p>In Task 3 you installed Claude Code and learned the essentials. Now it's time to master it. This task covers the <strong>daily DH workflow</strong>, advanced features like headless mode, multi-file editing, and the power user techniques that separate a beginner from a 10x AI developer.</p>
    <div style="background: rgba(139, 92, 246, 0.1); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 16px 0;">
        <h4 style="color: #A78BFA; margin-top: 0;">📚 Official Claude Code Docs</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <a href="https://docs.anthropic.com/en/docs/claude-code/getting-started" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">🚀 <strong>Getting Started</strong> — Install &amp; first run</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/cli-reference" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">📄 <strong>CLI Reference</strong> — All commands &amp; flags</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/memory" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">🧠 <strong>CLAUDE.md &amp; Memory</strong> — Project context</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">⚡ <strong>Custom Skills</strong> — Create slash commands</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/hooks" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">🔗 <strong>Hooks</strong> — Event-driven automation</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/tutorials" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">📖 <strong>Tutorials</strong> — Workflows &amp; tips</a>
        </div>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔧 Essential Commands — Full Reference</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">When to Use</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/init</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Generate CLAUDE.md</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">First time in a project, or after major architecture changes</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/compact</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Summarize conversation</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">When context window fills up during long sessions</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/clear</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fresh conversation</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Switching to a completely different task in the same project</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/cost</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Show usage/cost</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Budget monitoring, end of session</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/review</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Review changes</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Before accepting large multi-file edits</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/commit</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Git commit with AI message</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">After completing a feature or fix</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🤖 Headless Mode — AI Without the Chat</h3>
    <p>Headless mode runs Claude Code as a one-shot command — no interactive session needed. Perfect for automation, CI/CD pipelines, and batch operations.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">claude -p "Fix all TypeScript errors" --allowedTools Edit,Read,Bash</div>
    <h4>Headless Mode Use Cases at DH:</h4>
    <ul>
        <li><strong>Batch fixes:</strong> <code>claude -p "Add alt text to all images missing it in sections/"</code></li>
        <li><strong>Code review:</strong> <code>claude -p "Review sections/hero.liquid for Shopify best practices and suggest improvements"</code></li>
        <li><strong>Generate files:</strong> <code>claude -p "Create a Shopify section schema for a FAQ accordion"</code></li>
        <li><strong>Refactoring:</strong> <code>claude -p "Rename all instances of .old-class to .new-class across the entire project"</code></li>
    </ul>
    <p>The <code>--allowedTools</code> flag restricts which tools Claude can use (Edit, Read, Bash, etc.) for safety.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔄 The DH Daily Workflow with Claude Code</h3>
    <ol>
        <li><strong>Navigate to project:</strong> <code>cd client-shopify-theme</code></li>
        <li><strong>Start Claude Code:</strong> <code>claude</code></li>
        <li><strong>Give clear instructions:</strong> "Create a new section called announcement-bar with dismissible banner, customizable colors, countdown timer option, and mobile responsive"</li>
        <li><strong>Review the diffs:</strong> Claude Code shows you exactly what it will change before applying</li>
        <li><strong>Accept or iterate:</strong> Approve changes, or say "Make the countdown timer optional with a toggle in schema settings"</li>
        <li><strong>Test locally:</strong> <code>shopify theme dev</code> to preview in browser</li>
        <li><strong>Commit:</strong> <code>/commit</code> for an AI-generated commit message</li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📄 CLAUDE.md Deep Dive</h3>
    <p>A well-crafted CLAUDE.md is the difference between generic AI output and code that fits your project perfectly. Here's a comprehensive example:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;"># Project: Urban Threads (Shopify Plus)

## Tech Stack
- Shopify Dawn 13.0 (heavily customized)
- Liquid, CSS custom properties, vanilla JS only
- Klaviyo (email), Loox (reviews), Afterpay (payments)

## File Structure
- sections/ — 24 custom sections (prefix: ut-)
- snippets/ — Shared components (card-product, icon-*)
- assets/ — ut-global.css, ut-sections.css, ut-scripts.js
- locales/ — en.default.json (all strings i18n)

## Coding Conventions
- BEM: .ut-section__element--modifier
- CSS custom properties from :root (--ut-color-primary, etc.)
- No external JS libraries. No jQuery. No CDN imports.
- Sections must include JSON schema at bottom
- All images must have alt text and loading="lazy"

## Common Commands
- shopify theme dev --store urbanthread.myshopify.com
- shopify theme push --unpublished
- shopify theme check --fail-level error

## Known Issues
- Cart drawer JS conflicts with Afterpay widget on mobile
- Collection filter counts are incorrect (known Shopify bug)</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">📋 DH Starter CLAUDE.md — Use This in Every Project</h3>
    <p>This is the <strong>standard template</strong> every DH team member must use when starting a new project. It turns Claude Code from a basic chatbot into a <strong>senior developer</strong> that plans before building, verifies before shipping, and learns from mistakes.</p>
    <p><strong>How to use:</strong> Copy the template below, save it as <code>CLAUDE.md</code> at the root of your project folder, and customize it for your project. You can also <a href="/assets/claude-md-starter.md" download="CLAUDE.md" style="color: #A78BFA; font-weight: 700; text-decoration: underline;">⬇ Download the template file</a></p>

    <div style="background: rgba(0,0,0,0.4); border-radius: 10px; padding: 20px; margin: 16px 0; font-family: monospace; font-size: 0.8em; color: #E2E8F0; white-space: pre-wrap; max-height: 500px; overflow-y: auto; line-height: 1.5;"># Project: Lumina Jewelry Shopify Store

## Tech Stack
- Framework: Shopify Dawn 15.0
- Languages: Liquid, JavaScript, CSS
- Build: Shopify CLI 3.x

## File Structure
- sections/ — Custom Liquid sections
- snippets/ — Reusable Liquid snippets
- assets/ — CSS, JS, images

## Coding Conventions
- BEM naming for CSS classes
- No external JS libraries — vanilla JS only
- Mobile-first responsive design
- Dawn CSS variables for theming

## Known Issues
- Dawn 15.0 sticky header conflicts with announcement bar on iOS Safari

---

## Workflow Guidelines

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user, update tasks/lessons.md with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management
1. Plan First: Write plan to tasks/todo.md with checkable items
2. Verify Plans: Check in before starting implementation
3. Track Progress: Mark items complete as you go
4. Explain Changes: High-level summary at each step
5. Document Results: Add review section to tasks/todo.md
6. Capture Lessons: Update tasks/lessons.md after corrections

## Core Principles
- Simplicity First: Make every change as simple as possible. Impact minimal code.
- No Laziness: Find root causes. No temporary fixes. Senior developer standards.
- Minimal Impact: Changes should only touch what's necessary. Avoid introducing bugs.</div>

    <div style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; padding: 16px; margin: 16px 0; border-radius: 0 8px 8px 0;">
        <strong style="color: #A78BFA;">💡 Pro Tip:</strong> The top section (Tech Stack, Conventions, Known Issues) is unique per project. The bottom section (Workflow Guidelines, Core Principles) stays the <strong>same across all projects</strong> — these are your universal rules.
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🛒 Real-Life Examples — How DH Uses Claude Code Daily</h3>
    <p>Here's exactly how our team uses Claude Code with CLAUDE.md on real Shopify projects every day:</p>

    <h4 style="color: #93C5FD;">1. Building a Custom Product Page Section</h4>
    <p><strong>The task:</strong> Client wants a product page with before/after image slider, size guide popup, and trust badges.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Create a new Shopify section called product-enhanced with:
1. Before/after image comparison slider (vanilla JS, no libraries)
2. Size guide modal triggered by a link under variant selector
3. Trust badges row (free shipping, 30-day returns, secure checkout)
All must have schema settings so the client can edit text and images from the theme editor."</div>
    <p><strong>What Claude does:</strong> Reads your CLAUDE.md, sees "vanilla JS only" and "all sections must have schema settings", then builds the entire section with proper Liquid, responsive CSS, and full schema — ready for theme editor customization.</p>

    <h4 style="color: #93C5FD;">2. Redesigning a Homepage Hero</h4>
    <p><strong>The task:</strong> The hero section looks generic. Client wants something that converts better.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Our homepage hero has a low click-through rate. Redesign it using CRO best practices:
- Strong headline above the fold
- Single clear CTA button (not two competing buttons)
- Social proof (review count or 'trusted by X customers')
- Mobile: stack vertically, CTA must be visible without scrolling
Look at sections/hero-banner.liquid and improve it."</div>
    <p><strong>What Claude does:</strong> Reads the existing hero code, understands the structure, then rewrites it with better visual hierarchy, a single focused CTA, social proof elements, and mobile-first CSS.</p>

    <h4 style="color: #93C5FD;">3. Bulk-Fixing SEO Across All Templates</h4>
    <p><strong>The task:</strong> 15 templates missing proper meta descriptions and structured data.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Audit every template in templates/ for SEO issues:
1. Check if each has a unique meta description via Shopify's SEO settings
2. Add JSON-LD structured data (Product, BreadcrumbList, Organization)
3. Ensure all images have descriptive alt text
4. Fix any missing canonical tags
Report what you found, then fix everything."</div>
    <p><strong>What Claude does:</strong> Scans all 15 templates, finds the gaps, then edits every file in one pass — adding structured data, fixing alt text, and generating a summary report.</p>

    <h4 style="color: #93C5FD;">4. Creating a Collection Filter Sidebar</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Build a collection page filter sidebar that:
- Shows filters for Color, Size, Price Range, and Availability
- Uses Shopify's native storefront filtering API (not custom JS hacks)
- Filters update the page without full reload (URL params + fetch)
- Mobile: slide-in drawer from left with overlay
- Matches our design system: BEM classes, CSS custom properties from :root"</div>
    <p><strong>What Claude does:</strong> Because your CLAUDE.md specifies "BEM naming" and "CSS custom properties from :root", Claude generates code that perfectly matches your existing design system — no manual renaming needed.</p>

    <h4 style="color: #93C5FD;">5. Debugging a Cart Issue at 11 PM</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"The cart drawer opens but shows 0 items even when products are added.
Client just reported it. shopify theme check shows no errors.
Find the bug, explain what caused it, and fix it."</div>
    <p><strong>What Claude does:</strong> Reads the cart drawer code, traces the data flow from the Cart API to the DOM, finds the broken selector or stale cache, explains the root cause, and fixes it — all in under 2 minutes. Because your CLAUDE.md says "Autonomous Bug Fixing: just fix it, don't ask for hand-holding."</p>

    <div style="background: rgba(245, 158, 11, 0.15); border-left: 4px solid #F59E0B; padding: 16px; margin: 16px 0; border-radius: 0 8px 8px 0;">
        <strong style="color: #F59E0B;">🎯 The Pattern:</strong> Notice how every prompt is specific about <em>what</em> you want, <em>how</em> it should work, and <em>what constraints</em> to follow. That's not an accident — it's what separates Level 1 (generic AI slop) from Level 3+ (production-quality output). Your CLAUDE.md handles the constraints automatically, so you just focus on the what.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(234, 88, 12, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">📊 The 6 Levels of Claude Code — Where Do You Stand?</h3>
    <p>Most people get stuck at Level 1-2 and never realize it. Understanding where you are — and what to do next — is the fastest path from "vibe coder" to <strong>10x AI developer</strong>.</p>

    <div style="position:relative;width:100%;padding-bottom:56.25%;margin:20px 0;border-radius:12px;overflow:hidden;">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/TUKYbUIXLOE?si=gnArg6AL4YNjgJAA" title="The 6 Levels of Claude Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <p style="text-align:center;font-size:0.85em;opacity:0.7;margin-top:-10px;">🎬 Watch: The 6 Levels of Claude Code</p>
</div>

<div class="content-section" style="border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">🪜 The 6 Levels — Quick Visual Guide</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Level</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Name</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You Are Here If…</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skill to Master</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-weight: 700; font-size: 1.2em;">1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>📝 Prompt Engineer</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You type commands and hope for the best. Output feels generic.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Clear, specific prompts with a defined outcome</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-weight: 700; font-size: 1.2em;">2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>📋 The Planner</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You use Plan Mode and ask Claude questions before building.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Collaborative questioning — "What am I missing?"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-weight: 700; font-size: 1.2em;">3</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎯 Context Engineer</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You manage the context window and provide the right files.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Context window management — /clear before the dead zone</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-weight: 700; font-size: 1.2em;">4</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>🔧 Tool Builder</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You install MCPs and plugins — but maybe too many.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Surgical tool selection — only what the project needs</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-weight: 700; font-size: 1.2em;">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>⚡ Skill Crafter</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You create custom Skills and reusable workflows.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skill authoring + Skill Creator for optimization</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-weight: 700; font-size: 1.2em;">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>👑 The Orchestrator</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">You run multiple sessions, work trees, and agent teams.</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Parallel sessions, work trees, agent teams</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🧠 Level 1→2: Stop Commanding, Start Collaborating</h3>
    <p>The biggest trap at Level 1 is <strong>regression to the mean</strong> — you tell Claude "build me X" and get generic AI slop. The purple gradient websites, the same fonts, the same icons. That's because you're treating Claude as a tool, not a collaborator.</p>
    <p><strong>How to level up:</strong></p>
    <ul>
        <li>Use <strong>Plan Mode</strong> before every build — Claude will ask clarifying questions</li>
        <li>Ask: <em>"What am I not thinking about?"</em> or <em>"What would an expert do differently here?"</em></li>
        <li>Let Claude push back — tell it: <em>"Be adversarial. What's wrong with this approach?"</em></li>
        <li>Stop hitting Enter/Yes on everything. Read the plan. Give feedback.</li>
    </ul>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📊 Level 2→3: Master the Context Window</h3>
    <p><strong>Context rot</strong> is real — performance drops sharply after ~50-60% of the 200K token window. This doesn't improve with bigger windows.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 20px; margin: 15px 0;">
        <p style="margin: 0 0 10px;"><strong>The Context Window Rules:</strong></p>
        <ul style="margin: 0;">
            <li><code>/context</code> — check your token usage anytime</li>
            <li><code>/clear</code> — reset when you hit ~50%. <strong>Preferred over /compact</strong></li>
            <li>Why not /compact? — Claude picks what to keep, and it may pick wrong</li>
            <li>Set up a <strong>persistent status bar</strong> showing model + context % (ask Claude to build one!)</li>
        </ul>
    </div>
    <p><strong>Key insight:</strong> Use few-shot examples over extremely long instructions. Keep CLAUDE.md concise — studies show overly detailed context files can actually <em>reduce</em> task success rates while increasing token cost.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🔧 Level 3→4: Be Surgical With Tools</h3>
    <p>The trap: becoming a kid in the candy store with MCPs, plugins, and frameworks. <strong>Capability ≠ performance.</strong></p>
    <ul>
        <li>Ask: does this project <strong>actually need</strong> this MCP?</li>
        <li>Native Claude Code features often beat third-party add-ons</li>
        <li>Many framework features (like GSD) are being built into Claude Code natively now</li>
    </ul>
    <p><strong>The critical mindset shift:</strong> Learn the building blocks — front end, backend, authentication, databases, deployment. You don't need to write code, but you need to know <em>how the pieces fit together</em>. Always ask Claude: <em>"Why did you do it this way?"</em></p>
</div>

<div class="content-section" style="border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">⚡ Level 4→5: Create Your Own Skills</h3>
    <p>Skills are just text prompts — a way to tell Claude to do a specific thing in a specific manner every time.</p>
    <ul>
        <li><strong>Skill Creator</strong> (/plugin → skill-creator) lets you build, test, run evals, and optimize skills</li>
        <li>Keep skills <strong>project-scoped</strong> (not global) to avoid trigger confusion</li>
        <li>Skills can reference other skills — build higher-order workflows</li>
        <li>Use <code>/skillname</code> to guarantee skill invocation (vs. hoping Claude auto-detects it)</li>
    </ul>
</div>

<div class="content-section" style="border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">👑 Level 5→6: Scale With Agent Teams</h3>
    <p>At the highest level, you're managing multiple Claude instances working together.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Method</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">How It Works</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Multiple Terminals</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Open 2-3 terminals running Claude on the same project</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Simple parallel tasks</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Git Work Trees</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><code>claude --worktree frontend</code> — each gets its own copy of the code</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Separate features that might conflict</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sub-Agents</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude spawns worker agents in separate work trees automatically</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Large tasks Claude can divide up</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Agent Teams</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sub-agents that <em>talk to each other</em> + a supervisor agent</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cross-cutting features (auth + frontend + payments)</td></tr>
    </table>
    <p><strong>Agent Teams</strong> are experimental. A supervisor agent coordinates the team — workers talk to each other to avoid conflicts. You can switch between agents with arrow keys and even message individual workers directly.</p>
    <p>⚠️ <strong>Diminishing returns:</strong> 2-3 parallel sessions is the sweet spot. More than that and context-switching overhead kills productivity.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">⚡ Power User Tips</h3>
    <ul>
        <li><strong>Multi-file edits:</strong> "Update the color scheme in all 24 section files to use the new brand colors" — Claude Code handles all files in one operation</li>
        <li><strong>Git workflow:</strong> "Show me the diff of everything changed today" or "Create a branch called feature/new-hero and commit the current changes"</li>
        <li><strong>Code review:</strong> "Review the last 3 commits for Shopify best practices, accessibility issues, and performance concerns"</li>
        <li><strong>Reference existing code:</strong> "Look at sections/featured-collection.liquid and create a similar section for blog posts with the same card style"</li>
        <li><strong>Debug with context:</strong> "shopify theme check shows error on line 42 of hero.liquid — fix it and explain what was wrong"</li>
    </ul>
</div>
`;

const task6Quiz = [
    { q: "A developer uses Claude Code in interactive mode for everything. When would headless mode be a better choice?", o: ["Never — interactive mode is always superior for all tasks", "For one-shot tasks like batch fixes, automated code review, or CI/CD pipeline integration where no conversation is needed", "Only when the internet connection is slow — headless mode works offline", "Headless mode is only for system administrators, not developers"], c: 1 },
    { q: "The --allowedTools flag in headless mode (e.g., --allowedTools Edit,Read,Bash) serves the purpose of:", o: ["Making Claude Code faster by limiting which tools it loads into memory", "Restricting which operations Claude can perform — a safety measure to prevent unintended actions during automation", "Selecting which AI model Claude Code uses for the task", "Choosing which files Claude Code is allowed to read in the project"], c: 1 },
    { q: "A CLAUDE.md file lists 'No external JS libraries' under coding conventions. When Claude Code generates a section using jQuery, you should:", o: ["Accept it — Claude Code knows best and jQuery is standard in web development", "Ask Claude Code to refactor using vanilla JS only — it violated the CLAUDE.md constraints, and update CLAUDE.md if needed", "Delete CLAUDE.md and recreate it — the file is corrupted if Claude ignored it", "jQuery is technically not an 'external library' so the constraint doesn't apply"], c: 1 },
    { q: "The DH daily workflow is: navigate → start claude → instruct → review diffs → accept/iterate → test → commit. Why is the 'review diffs' step critical?", o: ["It's optional — you can skip it to save time when you trust Claude Code", "Diffs let you see exactly what Claude will change before applying, catching errors, unwanted modifications, and convention violations", "Reviewing diffs is only necessary for junior developers — seniors can auto-accept", "The diff review is automatic — Claude Code won't apply changes without your approval anyway"], c: 1 },
    { q: "In the 6 Levels of Claude Code, a developer says 'build me an agency website' with no follow-up questions or feedback. They're stuck at Level 1 because of:", o: ["They haven't installed the right MCP servers or plugins yet", "Regression to the mean — treating Claude as a blunt tool without collaboration produces generic 'AI slop' output", "Their internet connection is too slow for Claude Code to work properly", "They're using the wrong AI model — they should switch from Sonnet to Opus"], c: 1 },
    { q: "Context rot in Claude Code means performance drops after filling ~50-60% of the 200K token window. The BEST way to handle this is:", o: ["Use /compact to let Claude auto-summarize and carry forward the conversation", "Use /clear to reset, and let Claude rediscover the codebase fresh — it's smart enough to find the right files", "Increase the context window size in Claude Code settings to avoid the limit", "Ignore it — Opus 4.6 has solved context rot with its 1 million token window"], c: 1 },
    { q: "At Level 6 (The Orchestrator), 'Agent Teams' differ from regular sub-agents because:", o: ["Agent Teams use a more powerful AI model than regular sub-agents", "Agent Teams have sub-agents that talk to each other plus a supervisor agent coordinating the work", "Agent Teams can only work on frontend tasks, not backend", "There's no real difference — 'Agent Teams' is just a marketing name for sub-agents"], c: 1 },
    { q: "Claude Code generates a Shopify section that works but uses .hero-banner instead of the team's BEM convention .ut-hero__banner. The best fix is:", o: ["Accept it — functionality matters more than naming conventions", "Tell Claude Code: 'Rename CSS classes to follow BEM convention: .ut-hero__banner--modifier' and update CLAUDE.md to be more explicit", "Manually rename all classes — it's faster than explaining BEM to AI", "BEM conventions are outdated — Claude Code uses modern naming which is better"], c: 1 },
    { q: "A PM (non-developer) asks if Claude Code can help them. The answer is:", o: ["No — Claude Code is exclusively for writing production code", "Yes — Claude Code can generate documents, analyze data, manage files, draft emails, create project plans, and run commands", "Only if they learn JavaScript first to understand the terminal interface", "PMs should stick to ChatGPT — Claude Code's terminal is too technical"], c: 1 },
    { q: "When Claude Code generates code using a Liquid filter you've never seen, the correct response is:", o: ["Trust it — Claude Code is trained on Shopify documentation and wouldn't hallucinate", "Verify in official Shopify Liquid docs before accepting — AI can hallucinate plausible-sounding but non-existent filters", "Use it anyway and test — if it works in theme dev, it's valid", "Report it as a Claude bug immediately"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 7: MCP & Antigravity Platform
// ═══════════════════════════════════════

const task7Content = `
<h2>🌐 TASK 7: MCP & ANTIGRAVITY — Platform & Automation</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔌 What is MCP? — "USB Ports for AI"</h3>
    <p><strong>MCP (Model Context Protocol)</strong> is the protocol that lets AI models connect to external tools and data sources. Think of it like USB ports on a computer — you can plug in different peripherals (browser, file system, APIs, databases) and the AI can interact with them all through a standard interface.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">🔑 Why MCP Matters</strong>
        <p>Without MCP, AI is trapped in a text box. With MCP, AI can read your browser, execute code, manage files, connect to apps, and automate entire workflows. MCP is what makes Claude Code and Claude in Chrome possible.</p>
    </div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin: 16px 0;">
        <h4 style="color: #10B981; margin-top: 0;">📚 Official MCP Documentation</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" style="display:block; background: rgba(16,185,129,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(16,185,129,0.3);">📖 <strong>What is MCP?</strong> — Intro &amp; concepts</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank" style="display:block; background: rgba(16,185,129,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(16,185,129,0.3);">🔌 <strong>MCP in Claude Code</strong> — Setup guide</a>
            <a href="https://modelcontextprotocol.io/docs/develop/build-server" target="_blank" style="display:block; background: rgba(16,185,129,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(16,185,129,0.3);">🛠️ <strong>Build MCP Server</strong> — Create your own</a>
            <a href="https://registry.modelcontextprotocol.io/" target="_blank" style="display:block; background: rgba(16,185,129,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(16,185,129,0.3);">🔍 <strong>MCP Registry</strong> — Browse servers</a>
            <a href="https://github.com/modelcontextprotocol/servers" target="_blank" style="display:block; background: rgba(16,185,129,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(16,185,129,0.3);">💻 <strong>Reference Servers</strong> — Official GitHub</a>
            <a href="https://modelcontextprotocol.io/docs/learn/architecture" target="_blank" style="display:block; background: rgba(16,185,129,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(16,185,129,0.3);">🏗️ <strong>Architecture</strong> — How MCP works</a>
        </div>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🔧 MCP Server Types at DH</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">MCP Server</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DH Use Case</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Scheduled Tasks</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Run AI tasks on a cron schedule</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Daily QA scans, automated status reports, morning briefings</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Registry Connectors</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Connect to external apps (Asana, Jira, Slack, Google)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Sync tasks, send notifications, read/write docs</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Preview Server</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Live preview of web development</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Real-time Shopify theme preview with Claude Code</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Browser Automation</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Control Chrome programmatically</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">QA testing, competitor analysis, form filling</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🚀 Antigravity Platform</h3>
    <p><strong>Antigravity</strong> is DH's internal AI workspace that connects all AI tools, automation workflows, and team processes into one unified system. Think of it as the mission control center for all DH AI operations.</p>
    <h4>Key Antigravity Features:</h4>
    <ul>
        <li><strong>AI Workspace:</strong> Centralized environment for running Claude Code with project templates and shared configurations</li>
        <li><strong>Workflow Automation:</strong> Trigger AI tasks on schedules or events (e.g., daily QA scans, new client onboarding flows)</li>
        <li><strong>Knowledge Base:</strong> SOPs, brand guides, and training materials accessible to all AI tools</li>
        <li><strong>Team Collaboration:</strong> Share AI sessions, prompts, skills, and outputs across the entire team</li>
    </ul>
    <p><strong>Why Antigravity matters:</strong> Instead of each person using AI in isolation, Antigravity ensures the whole team benefits from shared AI knowledge, consistent processes, and automated workflows.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🌐 Claude in Chrome — Browser AI Capabilities</h3>
    <p>Claude in Chrome uses MCP to interact with your browser. Here's what it can do for DH workflows:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Workflow</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">How Claude in Chrome Helps</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">QA Testing</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Read live store pages, identify UX issues, missing SEO, accessibility problems</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Competitor Analysis</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Open competitor sites, analyze pricing, design patterns, and feature sets</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Data Extraction</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Extract product info, reviews, pricing from web pages into structured data</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Form Automation</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fill repetitive forms, submit data across multiple tools</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔗 n8n MCP Server — Workflow Automation</h3>
    <p>n8n is an open-source workflow automation tool. The n8n MCP Server connects it to Claude Code for advanced automation:</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">git clone https://github.com/czlonkowski/n8n-mcp.git</div>
    <p>This enables Claude to trigger n8n workflows, creating powerful automation chains: client inquiry → AI categorization → task creation → team notification.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: Design an MCP Workflow</h3>
    <p><strong>Open Claude and type this prompt:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">I want to create an MCP-powered workflow for automated competitor analysis. The workflow should:

1. Accept a list of 5 competitor Shopify store URLs
2. For each store, extract: homepage design approach, product page layout, pricing strategy, unique features
3. Score each competitor on: Design (1-10), UX (1-10), Speed (1-10), Features (1-10)
4. Generate a comparison matrix as an HTML table
5. Recommend 3 actionable improvements for our client's store

Design the complete prompt template for this workflow with placeholders.</div>
    <p><strong>Expected output:</strong> A reusable prompt template with clear placeholders, structured output format, and scoring criteria.</p>
</div>
`;

const task7Quiz = [
    { q: "MCP (Model Context Protocol) is best described as:", o: ["A security protocol that encrypts AI communications end-to-end", "A standard protocol that connects AI models to external tools and data sources — like USB ports for AI", "A programming language specifically designed for building AI applications", "A communication standard between different AI models (Claude, GPT, Gemini)"], c: 1 },
    { q: "Without MCP, an AI model like Claude is limited to:", o: ["Processing text input and generating text output — no interaction with files, browsers, or external tools", "Only working on small projects under 10 files", "Generating code that only works in Python, not other languages", "Processing requests that take less than 30 seconds to complete"], c: 0 },
    { q: "A PM wants automatic QA scans on client stores every morning at 9 AM. The right MCP component is:", o: ["Registry Connectors — they connect to Shopify stores for scanning", "Scheduled Tasks — they run AI tasks on cron schedules like daily QA scans", "Preview Server — it continuously monitors stores for changes", "Browser Automation — it keeps Chrome running 24/7 scanning stores"], c: 1 },
    { q: "Antigravity at DH serves as:", o: ["A competitor to ChatGPT that DH built in-house for proprietary use", "A centralized platform connecting AI tools, automation workflows, and team processes into one unified system", "An anti-gravity simulation tool used by the physics department", "A project management tool that replaced Asana and Jira at DH"], c: 1 },
    { q: "Registry Connectors in MCP allow Claude to:", o: ["Only read data from external apps — it cannot write or send data back", "Connect to external apps like Asana, Jira, and Slack for task syncing, notifications, and data exchange", "Replace all external apps with AI-powered alternatives", "Only connect to Anthropic-approved apps from a limited whitelist"], c: 1 },
    { q: "The n8n MCP Server enables:", o: ["Video editing automation for YouTube content creation", "Workflow automation chains where Claude triggers n8n workflows for complex multi-step processes", "Direct Shopify admin access bypassing the normal API", "AI model training on custom datasets for DH-specific tasks"], c: 1 },
    { q: "Claude in Chrome reads a client's live store and finds 15 UX issues. The correct DH process is:", o: ["Claude automatically fixes all 15 issues using browser automation", "Prioritize findings (Critical/Major/Minor), create a QA report, and share with the PM for review and action planning", "Ignore AI findings — only human-detected issues are valid for QA reports", "Send the raw AI output directly to the client as the QA deliverable"], c: 1 },
    { q: "Why does DH use Antigravity instead of having each team member use AI independently?", o: ["Independent AI usage is more efficient — Antigravity adds unnecessary overhead", "Antigravity ensures shared AI knowledge, consistent processes, and team-wide benefits from centralized automation", "DH mandates Antigravity usage to track and monitor employee AI usage patterns", "Antigravity is cheaper than individual AI subscriptions for each team member"], c: 1 },
    { q: "A Preview Server MCP is useful at DH for:", o: ["Hosting production client websites on DH servers permanently", "Live previewing web development work — seeing real-time changes during Shopify theme development with Claude Code", "Recording video demos of client stores for presentations", "Monitoring store uptime and alerting when stores go down"], c: 1 },
    { q: "The key advantage of MCP's Scheduled Tasks over manual AI usage is:", o: ["Scheduled tasks use a more powerful AI model than manual conversations", "They run automatically without human initiation — enabling daily scans, automated reports, and proactive monitoring", "They're cheaper per token than regular Claude Code usage", "They can only run simple tasks — complex analysis still requires manual interaction"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 8: Skills & Plugins Deep Dive
// ═══════════════════════════════════════

const task8Content = `
<h2>🔌 TASK 8: SKILLS & PLUGINS — The AI Skills Ecosystem</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧠 What Are Skills?</h3>
    <p>Skills are <strong>SKILL.md files</strong> that Claude Code auto-discovers in your project's <code>.claude/skills/</code> directory. They inject specialized knowledge and instructions into Claude's context, turning a general-purpose AI into a domain expert.</p>
    <div style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #8B5CF6; padding: 20px; margin: 15px 0;">
        <strong style="color: #A78BFA;">💡 Think of it like this</strong>
        <p>CLAUDE.md is the AI's permanent memory about your project. Skills are <strong>specialized training manuals</strong> that give Claude expertise in specific domains — design, marketing, file processing, etc.</p>
    </div>
    <div style="background: rgba(139, 92, 246, 0.1); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 16px 0;">
        <h4 style="color: #A78BFA; margin-top: 0;">📚 Official Skills Documentation</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">⚡ <strong>Create Custom Skills</strong> — Slash commands guide</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/memory" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">🧠 <strong>CLAUDE.md &amp; Memory</strong> — Project context</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/hooks" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">🔗 <strong>Hooks</strong> — Event-driven automation</a>
            <a href="https://docs.anthropic.com/en/docs/claude-code/tutorials" target="_blank" style="display:block; background: rgba(139,92,246,0.15); border-radius: 8px; padding: 10px; color: #E2E8F0; text-decoration: none; font-size: 0.85em; border: 1px solid rgba(139,92,246,0.3);">📖 <strong>Tutorials</strong> — Workflows &amp; best practices</a>
        </div>
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🏗️ The DH Power Stack</h3>
    <p>The combination of these three skill sets creates DH's AI competitive advantage:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skill Set</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Focus</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Key Capabilities</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Frontend Design</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Code generation</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Production-quality HTML/CSS/JS, responsive layouts, component architecture</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>UI/UX Pro Max</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Design systems</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">67 UI styles, 96 color palettes, 57 font pairings, 100 industry rules</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Marketing Skills</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Strategy & content</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">36 skills: CRO, copywriting, SEO, paid ads, analytics, growth</td></tr>
    </table>
    <p><strong>Combined, they mean:</strong> Claude Code can generate a Shopify section with beautiful design, optimized for conversions, with SEO-ready copy — all from a single prompt.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">📦 Anthropic Skills — File Processing</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skill</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">DH Use Case</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">pdf</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Read, analyze, extract from PDFs</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client brand guides, contracts, SOPs</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">xlsx</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Parse Excel spreadsheets</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product data imports, financial reports</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">docx</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Process Word documents</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client briefs, content drafts, proposals</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">pptx</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Analyze PowerPoint files</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client presentations, pitch decks</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">schedule</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Create scheduled tasks</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Automated daily reports, recurring scans</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📊 Marketing Skills — 36 Categories</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skills Count</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Examples</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CRO (Conversion Rate Optimization)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Landing page audit, A/B test design, funnel analysis</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blog strategy, product descriptions, email sequences</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SEO</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Keyword research, on-page audit, schema markup</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Paid Ads</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ad copy, audience targeting, campaign structure</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Strategy</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Market analysis, competitor research, growth planning</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Other</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Social media, analytics, influencer marketing, PR</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">⚡ Custom Commands</h3>
    <p>Custom commands are saved prompts you can invoke with a slash command in Claude Code. Save them to <code>.claude/commands/</code> in your project:</p>
    <h4>DH Custom Commands:</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Does</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/agent-builder</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Agent Builder Pro — creates autonomous AI agents for specific workflows</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/content-strategist</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content Strategist Pro — generates comprehensive content plans with SEO integration</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/thumbnail</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Video Thumbnail Generator — creates YouTube thumbnail concepts with composition guidance</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Building Custom Skills per Client</h3>
    <p>The most powerful DH technique: create a custom SKILL.md for each client project. Include:</p>
    <ul>
        <li><strong>Brand colors:</strong> Primary, secondary, accent hex codes</li>
        <li><strong>Typography:</strong> Font families, sizes, weights for headings and body</li>
        <li><strong>Design rules:</strong> Card styles, button shapes, spacing conventions</li>
        <li><strong>Tone of voice:</strong> Brand personality, content guidelines, forbidden words</li>
        <li><strong>Technical constraints:</strong> Shopify theme version, allowed/forbidden integrations</li>
    </ul>
    <p>Save as <code>.claude/skills/client-brand.md</code> — now every Claude Code session automatically follows the client's brand guidelines.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">🎯 Daily Use Cases — Skills + MCP in Action</h3>
    <p>Here's what your actual workday looks like when you use skills and MCP together:</p>

    <h4 style="color: #FBBF24;">🛒 Ecom Store Design (Developer)</h4>
    <ul>
        <li><strong>Frontend Design Skill</strong> — Ask Claude to redesign a product page and it follows real design principles, not AI slop</li>
        <li><strong>UI UX Pro Max Skill</strong> — 67 UI styles and 96 color palettes applied automatically to your Liquid sections</li>
        <li><strong>Preview Server MCP</strong> — Edit locally, see changes live in the browser instantly</li>
        <li><strong>Claude in Chrome</strong> — Open the live store, Claude spots broken padding, missing alt text, slow-loading images</li>
    </ul>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Redesign the hero section with bold typography, full-bleed imagery, and a sticky add-to-cart bar. Follow the client brand skill for colors and fonts."</div>

    <h4 style="color: #FBBF24;">📱 Social Media Posting (Content/Marketing)</h4>
    <ul>
        <li><strong>Marketing Skills (34 skills)</strong> — CRO, copywriting, SEO skills generate posts that actually convert</li>
        <li><strong>Claude in Chrome</strong> — Analyze competitor Instagram posts, suggest hooks and CTAs</li>
        <li><strong>Scheduled Tasks MCP</strong> — Auto-generate weekly content calendars every Monday at 9 AM</li>
        <li><strong>/social-post custom command</strong> — One slash command generates 3 post variations (Twitter, Instagram, LinkedIn)</li>
    </ul>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Analyze the last 10 posts from @competitorstore. What hooks are they using? Write 5 carousel ideas for our client's new collection launch."</div>

    <h4 style="color: #FBBF24;">📋 Project Management (PM/Ops)</h4>
    <ul>
        <li><strong>Anthropic Skills (PDF/XLSX)</strong> — Generate client reports, project timelines, SOW documents from data</li>
        <li><strong>Registry Connectors MCP</strong> — Connect Claude to Asana/Jira, manage tasks from the terminal</li>
        <li><strong>Scheduled Tasks MCP</strong> — Daily standup summaries and weekly progress reports auto-generated</li>
    </ul>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Read our Asana board. Summarize overdue tasks, blocked items, and draft a client update email for the UrbanThread project."</div>

    <h4 style="color: #FBBF24;">🎨 Design &amp; Branding (Designer)</h4>
    <ul>
        <li><strong>Frontend Design + UI UX Pro Max</strong> — Full page designs with real typography and spacing systems</li>
        <li><strong>Claude in Chrome</strong> — Screenshot a competitor site, Claude breaks down their layout, colors, and hierarchy</li>
        <li><strong>Marketing Skills</strong> — Brand positioning, taglines, messaging that match the visual identity</li>
    </ul>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">"Analyze drfrankensteinmd.com — suggest a color palette, font pairing, and homepage layout that feels premium but approachable."</div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(234, 88, 12, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F59E0B; margin-top: 0;">⚡ Create Your Own Skill in 2 Minutes</h3>
    <p>Skills aren't complicated. They're just markdown files. Here's a complete example:</p>
    <h4>Step 1: Create the file</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">mkdir -p .claude/skills
touch .claude/skills/social-post-generator.md</div>
    <h4>Step 2: Write the instructions</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">---
name: social-post-generator
description: Generate social media posts for DH clients
command: /social-post
---

# Social Media Post Generator
## Rules
- Every post MUST have a hook in first line
- Use emoji sparingly (max 3 per post)
- Include a clear CTA
- Generate 3 variations: short (Twitter), medium (Instagram), long (LinkedIn)
- Include 5-7 relevant hashtags</div>
    <h4>Step 3: Use it anytime</h4>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.85em; color: #E2E8F0; white-space: pre-wrap;">claude
/social-post
"Write posts for our client's Black Friday sale — 30% off sitewide, free shipping over $50"</div>
    <p>That's it. Make skills for <strong>anything</strong> you do more than once: client onboarding, QA checklists, SEO audits, product descriptions, code reviews, email drafts.</p>

    <h4>More Skill Ideas:</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Skill</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Who Uses It</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Store QA Checker</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/qa-store</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Developers, QA</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SEO Audit</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/seo-audit</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content, SEO</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client Email Draft</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/client-email</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">PM, Sales, CS</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product Description</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/product-desc</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content, Ecom</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Instagram Carousel</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/carousel</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Social Media</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Brand Guide Generator</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">/brand-guide</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Designers</td></tr>
    </table>
</div>
`;

const task8Quiz = [
    { q: "Skills in Claude Code are SKILL.md files. They work by:", o: ["Replacing the AI model with a specialized version trained for that skill domain", "Being auto-discovered in .claude/skills/ and injected as additional context and instructions that guide Claude's behavior", "Requiring the user to manually reference them in every prompt", "Only working with specific AI models — not all Claude models support skills"], c: 1 },
    { q: "The DH 'Power Stack' combines Frontend Design + UI/UX Pro Max + Marketing Skills. This combination is powerful because:", o: ["Each skill set increases Claude's processing speed by 33%", "Together they enable Claude to generate code that's well-designed, aesthetically sophisticated, AND optimized for conversions", "They're required by DH policy — Claude Code won't work without all three installed", "The three skill sets are identical — installing all three is just redundancy"], c: 1 },
    { q: "A developer creates a custom SKILL.md with brand colors and typography for a client. This is valuable because:", o: ["It overrides the CLAUDE.md file with brand-specific settings", "Every Claude Code session automatically follows the client's brand guidelines without repeating brand details in prompts", "Custom skills only work for design tasks — they don't affect code generation", "It's only useful if the developer can't remember the brand colors themselves"], c: 1 },
    { q: "Custom commands saved in .claude/commands/ differ from skills because:", o: ["Commands are one-time prompts invoked with a slash; skills provide persistent background knowledge for all interactions", "Commands are for developers and skills are for designers", "They're the same thing — just stored in different directories", "Commands require internet access while skills work offline"], c: 0 },
    { q: "The Anthropic Skills repo includes pdf, xlsx, docx, pptx processing. These are essential at DH for:", o: ["Converting all documents to plain text before AI can read them", "Enabling Claude Code to directly read and analyze client documents like brand guides, spreadsheets, and presentations", "Only working with Anthropic-branded documents", "Replacing Microsoft Office and Google Docs at DH"], c: 1 },
    { q: "Marketing Skills include 6 CRO skills. For a Shopify agency, CRO skills help because:", o: ["CRO is only relevant for SaaS companies, not e-commerce stores", "They give Claude expertise in landing page audits, A/B test design, and funnel analysis — directly improving client store conversions", "CRO skills automatically optimize client stores without human intervention", "They only generate reports — they can't suggest actionable improvements"], c: 1 },
    { q: "A DH team member uses the /content-strategist custom command. This triggers:", o: ["A pre-saved prompt that generates comprehensive content plans with SEO integration — saving time vs typing the full prompt", "An automatic content calendar that publishes posts without review", "A different AI model specialized in content strategy", "Nothing — custom commands are just bookmarks, not executable prompts"], c: 0 },
    { q: "When building a client-specific SKILL.md, including 'forbidden words' in tone of voice helps because:", o: ["Claude Code will refuse to start if forbidden words aren't specified", "Claude avoids brand-inappropriate language automatically, ensuring consistent tone without manual review of every output", "Forbidden words are only for legal compliance — they don't affect content quality", "This feature only works in English — other languages don't support forbidden words"], c: 1 },
    { q: "The difference between .claude/skills/ (skills) and .claude/commands/ (custom commands) is:", o: ["Skills provide persistent domain knowledge; commands are reusable prompt templates invoked on demand with a slash", "Skills are for the AI and commands are for humans only", "They are stored in the same directory and function identically", "Skills require npm installation while commands are just text files"], c: 0 },
    { q: "A PM asks: 'Why install 36 Marketing Skills when we're a web development agency?' The best answer is:", o: ["PMs are correct — marketing skills are irrelevant for a development agency", "DH builds Shopify stores that need to convert — marketing skills for CRO, SEO, and content strategy directly improve the stores we build for clients", "Marketing skills are only useful for the sales team, not project delivery", "Install them all just in case — more skills always means better AI output"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 9: Shopify CLI + AI
// ═══════════════════════════════════════

const task9Content = `
<h2>🛒 TASK 9: SHOPIFY CLI + AI — AI-Powered Store Development</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔧 The Shopify CLI + Claude Code Combo</h3>
    <p>Shopify CLI is the command-line tool for Shopify theme development. Combined with Claude Code, it becomes a supercharged development environment that lets you build production-quality stores at unprecedented speed.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Command</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Purpose</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme pull</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Download live theme to local machine</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme dev</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Start local dev server with hot reload</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme push</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Push local changes to Shopify</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;">shopify theme check</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lint theme for best practices</td></tr>
    </table>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">⚡ The AI + CLI Workflow</h3>
    <p>The DH development workflow combines Shopify CLI with Claude Code in a tight feedback loop:</p>
    <ol>
        <li><strong>Pull theme:</strong> <code>shopify theme pull --store mystore.myshopify.com</code></li>
        <li><strong>Start Claude Code:</strong> <code>claude</code> in the theme directory</li>
        <li><strong>Generate sections:</strong> "Create a featured-collection section with a 4-column grid, collection picker, product count slider (4-12), and lazy-loaded images"</li>
        <li><strong>Preview live:</strong> <code>shopify theme dev</code> — see changes in real-time</li>
        <li><strong>Iterate with AI:</strong> "The grid breaks on mobile. Make it 2 columns on mobile, 4 on desktop. Add swipe for mobile."</li>
        <li><strong>Quality check:</strong> <code>shopify theme check</code> — fix any linting issues</li>
        <li><strong>Deploy:</strong> <code>shopify theme push</code></li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🧱 What AI Can Generate for Shopify</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Component</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What AI Generates</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Example Prompt</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Liquid Sections</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Complete .liquid files with HTML, CSS, and JSON schema</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Create a testimonial carousel with star ratings and customer photos"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Section Schemas</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">JSON schemas with settings, blocks, and presets</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Schema with heading, bg color, collection picker, products per row range"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Metafield Definitions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Metafield types and Liquid access code</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Create metafields for custom jewelry: material, gemstone, ring size, care PDF"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CSS Styles</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Responsive CSS using Dawn conventions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Add hover effects and mobile responsive grid to the product cards"</td></tr>
    </table>
    <div style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <strong style="color: #EF4444;">🚫 DH Rule:</strong> No external JS libraries in Shopify themes. Claude Code must use native CSS/JS and Dawn theme utilities only. External dependencies slow stores down, add maintenance burden, and can break with Shopify updates.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
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
    <p><strong>Why this works:</strong> Specific requirements with numbered constraints produce consistent, production-quality code. The "no external JS" constraint prevents AI from importing unnecessary dependencies.</p>
</div>
`;

const task9Quiz = [
    { q: "The correct workflow for AI-powered Shopify theme development at DH is:", o: ["Write code manually first, then ask AI to review it — AI should never generate initial code", "Pull → Claude Code → Dev preview → Iterate → Check → Push — a tight feedback loop combining CLI tools with AI", "Start with shopify theme push to create a blank theme, then use AI to fill it in", "Use the Shopify admin editor instead — CLI is outdated and AI can't integrate with it"], c: 1 },
    { q: "Before starting Claude Code in a Shopify theme directory, you should run /init to:", o: ["Initialize a new Shopify store from scratch with default settings", "Create a CLAUDE.md that documents the theme architecture, file structure, and conventions for persistent AI context", "Install Claude Code dependencies into the Shopify theme folder", "Connect Claude Code to the Shopify admin API for direct store access"], c: 1 },
    { q: "Claude Code generates a product grid section using a jQuery CDN import. According to DH rules:", o: ["jQuery is acceptable — it's an industry-standard library for web development", "This violates the 'no external JS libraries' rule — ask Claude to refactor using native CSS/JS and Dawn utilities only", "jQuery is fine for product grids but not for other section types", "External CDN imports are only a problem on Shopify Plus stores"], c: 1 },
    { q: "A developer runs 'shopify theme check' and gets 10 warnings after Claude generates code. The best approach is:", o: ["Ignore warnings — only errors block deployment", "Copy the warnings into Claude Code and ask it to fix them — AI can resolve most Shopify linting issues", "Manually fix each warning — AI can't understand theme check output", "Disable theme check entirely — it produces false positives for AI-generated code"], c: 1 },
    { q: "When asking AI to generate a section schema JSON, including specific types and defaults matters because:", o: ["Shopify rejects schemas without default values and specific types defined", "Specific settings (text, color, collection, range with defaults and labels) produce functional, merchant-friendly schema controls", "AI generates the same schema regardless of prompt specificity", "Schema types only matter for Shopify Plus — basic Shopify ignores them"], c: 1 },
    { q: "The 'shopify theme dev' command during AI development is essential because:", o: ["It deploys changes to the live store immediately for real-time testing", "It starts a local dev server with hot reload so you can preview AI-generated code in real-time before deploying", "It validates that AI-generated Liquid compiles without any syntax errors", "It's required to activate Claude Code's Shopify integration features"], c: 1 },
    { q: "AI generates a section with metafield references like product.metafields.custom.material. To ensure they work:", o: ["Nothing extra — metafield references work automatically as soon as the code is deployed", "Create the metafield definitions in Shopify admin and populate data — AI generates Liquid code but can't create metafields", "Ask Claude Code to create the metafields via Shopify API automatically", "Metafields only work with custom apps, not in theme Liquid templates"], c: 1 },
    { q: "A client wants 5 unique page sections built in 2 days. With AI, this is feasible because:", o: ["AI writes perfect code that never needs testing or iteration", "Claude Code generates complete sections from detailed specs, you preview with theme dev, iterate quickly, and deploy — AI dramatically compresses development time", "You should use pre-built templates instead — custom sections are too risky with AI", "Only if you skip QA testing to save time"], c: 1 },
    { q: "Why does DH enforce 'no external JS libraries' for Shopify themes?", o: ["It's just a preference — external libraries are equally acceptable for Shopify stores", "External JS adds load time, dependencies, and maintenance risk — native CSS/JS is faster, more reliable, and survives Shopify updates", "Shopify doesn't allow any JavaScript at all in themes", "External libraries increase Shopify monthly costs for the client"], c: 1 },
    { q: "Telling Claude Code to 'Look at featured-collection.liquid and create a similar section for blog posts' works because:", o: ["Claude Code can't actually read other files — it just generates based on the name", "Claude Code reads the reference file, understands its patterns and conventions, then generates consistent code matching the existing codebase style", "This only works if the reference file is under 100 lines", "Claude Code copies the file and renames it — it doesn't actually understand the code"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 10: AI for Design & Branding
// ═══════════════════════════════════════

const task10Content = `
<h2>🎨 TASK 10: AI FOR DESIGN — Branding, Visuals & the Designer's Playbook</h2>

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
    <p><strong>DH Design Tools:</strong> We also use <strong>Stitch</strong> for e-commerce product photos (batch processing, background removal, consistent styling) and <strong>21st.dev</strong> for rapid UI component prototyping.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🏛️ The 5 Design Pillars</h3>
    <p>Every DH website must excel in these 5 areas. AI helps, but understanding the pillars ensures you direct AI toward excellence, not mediocrity:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Pillar</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Means</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI Assistance</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>1. Typography</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Font pairing, hierarchy, readability, rhythm</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">UI/UX Pro Max: 57 font pairings with mood and use case</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>2. Color & Theme</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Palette, contrast, emotional association, accessibility</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">96 palettes with hex codes and emotional associations</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>3. Motion & Animation</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Scroll effects, micro-interactions, transitions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CSS animations, scroll-snap, intersection observer patterns</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>4. Spatial Composition</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Layout, whitespace, visual hierarchy, grid systems</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Responsive grid generation, spacing scale systems</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>5. Backgrounds & Details</strong></td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Textures, gradients, patterns, visual polish</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI-generated textures, gradient generation, SVG patterns</td></tr>
    </table>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">🚩 AI Slop Red Flags</h3>
    <p>AI-generated websites can look generic and uninspired. Watch for these <strong>"AI slop"</strong> warning signs:</p>
    <ul>
        <li><strong>Generic system fonts:</strong> Inter/Roboto everywhere with no personality or brand alignment</li>
        <li><strong>Purple gradients:</strong> Default AI color schemes that look identical across thousands of sites</li>
        <li><strong>Card grid clones:</strong> 3-column card layouts with identical border-radius and shadow — no visual variety</li>
        <li><strong>Zero motion:</strong> Static pages with no scroll effects, hover states, or micro-interactions</li>
        <li><strong>Stock photo feel:</strong> Overly polished, soulless imagery that doesn't match the brand</li>
        <li><strong>No whitespace rhythm:</strong> Uniform spacing everywhere instead of deliberate visual hierarchy</li>
    </ul>
    <div style="background: rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <strong>🧪 The AI Slop Test:</strong> If someone looks at your site and says "did AI make this?" — iterate. The goal is work so good that AI-assistance is invisible.
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🎭 Aesthetic Directions</h3>
    <p>When prompting AI for design, choose a clear aesthetic direction. Mixing directions produces incoherent results:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Direction</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Characteristics</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Best For</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Brutally Minimal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Maximum whitespace, extreme simplicity, bold typography</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">High-end fashion, architecture</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Luxury/Refined</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Elegant serifs, subtle animations, muted tones</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Jewelry, premium skincare</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Editorial/Magazine</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Grid breaks, overlapping elements, strong imagery</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Lifestyle brands, media</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Retro-Futuristic</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Neon accents, dark backgrounds, tech vibes</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Gaming, tech gadgets</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Playful</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Rounded shapes, bright colors, fun animations</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Kids, pets, casual food</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Brutalist</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Raw, unconventional, intentionally jarring</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Art, experimental brands</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🎯 Vibe Coding Exercise: AI Design Brief</h3>
    <p><strong>Open Claude and type this prompt exactly:</strong></p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">You are a senior brand designer at a premium digital agency. A client is launching a luxury handmade candle brand called "Ember & Oak."

Create a comprehensive design brief that includes:
1. Brand personality (5 adjectives with explanations)
2. Color palette (5 colors with hex codes and usage rules)
3. Typography recommendations (heading + body font pairs from Google Fonts)
4. Aesthetic direction from: Brutally Minimal, Luxury/Refined, Editorial, Retro-Futuristic, Playful, Brutalist
5. Midjourney prompt for the hero banner image
6. 3 AI slop red flags to avoid for this specific brand

Format as a professional design brief.</div>
    <p><strong>Why this works:</strong> Combining RCFC framework with the 5 Design Pillars and AI Slop awareness produces agency-quality design direction that avoids generic AI output.</p>
</div>
`;

const task10Quiz = [
    { q: "A DH designer creates a Shopify store homepage that uses Inter font, purple gradients, and 3-column card grids with identical shadows. According to DH standards, this is:", o: ["Perfectly acceptable — Inter and purple are popular modern design choices", "AI slop — generic system fonts, default gradients, and clone card layouts indicate lazy AI output that needs iteration", "Only a problem if the client specifically requested a different style", "Fine for an MVP — aesthetics can be improved in later phases"], c: 1 },
    { q: "The 5 Design Pillars at DH are Typography, Color & Theme, Motion & Animation, Spatial Composition, and Backgrounds & Details. A site with great colors but zero motion is:", o: ["Acceptable — not every site needs animation and motion effects", "Missing a critical pillar — motion and micro-interactions elevate static pages from good to exceptional", "Only a problem for e-commerce — content sites don't need animation", "Perfect — minimalist sites should avoid all animation for performance"], c: 1 },
    { q: "When choosing an aesthetic direction for a luxury jewelry Shopify store, the best fit is:", o: ["Playful — bright colors and fun animations appeal to all demographics", "Luxury/Refined — elegant serifs, subtle animations, and muted tones match the brand positioning", "Brutalist — unconventional designs stand out in a crowded jewelry market", "Retro-Futuristic — tech vibes and neon accents create a modern jewelry feel"], c: 1 },
    { q: "The 'AI Slop Test' states: if someone says 'did AI make this?' you should:", o: ["Thank them — it means the AI tools are working efficiently", "Iterate further — the goal is work so polished that AI assistance is invisible", "Explain that AI-assisted design is standard practice and nothing to be ashamed of", "Switch to purely manual design work to avoid the AI stigma"], c: 1 },
    { q: "21st.dev + Claude Code together for a Shopify project means:", o: ["They can't work together — use one or the other exclusively", "21st.dev generates UI component concepts rapidly, Claude Code converts them to production-quality Shopify Liquid code", "21st.dev handles all Shopify development — Claude Code is only for non-Shopify projects", "Claude Code generates designs and 21st.dev converts them to code"], c: 1 },
    { q: "AI-generated color palettes are valuable at DH because:", o: ["AI always creates better color combinations than human designers", "They provide quick starting points with emotional associations and hex codes — saving hours of exploration while ensuring brand alignment", "AI palettes are guaranteed to meet WCAG accessibility contrast standards", "They replace the need for brand strategy discussions with clients"], c: 1 },
    { q: "Stitch AI differs from Midjourney for DH e-commerce work because:", o: ["Stitch is free while Midjourney requires a subscription", "Stitch specializes in e-commerce product photography (batch processing, backgrounds, consistency) while Midjourney excels at creative/artistic imagery", "Stitch generates code while Midjourney generates images", "There's no real difference — use whichever one is faster for your task"], c: 1 },
    { q: "UI/UX Pro Max provides 100 industry-specific design rules. For a Shopify agency, this matters because:", o: ["Industry rules are theoretical and don't apply to real client work", "Different industries have different design expectations — a jewelry store looks nothing like a pet food store, and industry rules ensure appropriate design choices", "The rules only apply to desktop design — mobile design is universal", "100 rules is too many — designers should rely on their own intuition instead"], c: 1 },
    { q: "A designer says: 'AI will replace designers at DH.' The correct DH perspective is:", o: ["Correct — AI handles all design work now and designers will be phased out", "Wrong — AI amplifies designers by accelerating exploration and iteration, but human creativity, judgment, and brand understanding remain essential", "Partially correct — AI replaces junior designers but seniors are safe", "AI only helps with coding, not with visual design decisions"], c: 1 },
    { q: "Mixing aesthetic directions (e.g., Playful + Brutalist) in a single Shopify store typically produces:", o: ["A unique and memorable brand identity that stands out from competitors", "Visual incoherence — conflicting design languages confuse users and weaken the brand, so choose one clear direction", "Better accessibility because different sections appeal to different user preferences", "The most creative results — breaking rules is how great design is achieved"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 11: AI for Content & SEO
// ═══════════════════════════════════════

const task11Content = `
<h2>📝 TASK 11: AI FOR CONTENT & SEO — Writing, Marketing & Optimization</h2>

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
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Blog outlines</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Create SEO blog outline for '[keyword]' — include H2/H3 structure, word count targets, internal linking"</td></tr>
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
3. Structure: emotional hook (1 sentence) -> 3 benefit bullets -> materials/dimensions -> CTA
4. Brand voice: sophisticated, warm, artisanal (not corporate)
5. Also generate: meta title (under 60 chars), meta description (under 155 chars), 3 alt text options</div>
    <p><strong>Why this works:</strong> Specific SEO constraints (keywords, character limits) combined with brand voice examples produce content that ranks AND converts.</p>
</div>
`;

const task11Quiz = [
    { q: "A DH content writer generates 50 product descriptions with AI and publishes them without editing. This violates DH policy because:", o: ["AI-generated content is always high quality — editing is unnecessary", "AI content without human editing risks inaccuracies, generic tone, and brand voice inconsistency — every piece must be reviewed", "It's fine for product descriptions — only blog posts need human editing", "The issue is quantity — AI should generate max 10 descriptions at a time"], c: 1 },
    { q: "When writing SEO meta titles with AI, the constraint 'under 60 characters' matters because:", o: ["Google truncates meta titles longer than roughly 60 characters — longer titles get cut off in search results", "AI can't generate titles longer than 60 characters due to token limits", "60 characters is the minimum required by Google for indexing a page", "It doesn't matter — Google shows the full title regardless of length"], c: 0 },
    { q: "A few-shot template for product descriptions is better than individual prompts because:", o: ["Few-shot templates use fewer tokens and cost less per description", "They ensure brand voice consistency across all products — examples teach the AI the exact style to maintain", "Individual prompts are actually better — few-shot templates make everything sound identical", "Few-shot templates only work for luxury brands — other brands need individual prompts"], c: 1 },
    { q: "The product description structure (hook + benefits + specs + CTA) works because:", o: ["It's the only format Google accepts for e-commerce product pages", "It mirrors how shoppers scan product pages — attention-grabbing hook, value propositions, details, then action prompt", "AI models are specifically trained to generate this exact format", "It's a DH-specific format that no other agency uses"], c: 1 },
    { q: "AI-generated blog post outlines with H2/H3 heading structure help SEO because:", o: ["Google ranks pages higher just for having heading tags regardless of content quality", "Structured headings help Google understand content hierarchy and can earn featured snippets and rich results", "H2 and H3 tags are the only heading tags Google considers for ranking", "Blog outlines don't affect SEO — only actual written content matters"], c: 1 },
    { q: "For batch-processing 200 product alt texts, the best AI approach is:", o: ["Upload all 200 product images to AI and generate alt text in one massive prompt", "Create a template with 3 examples, specify constraints (descriptive, keyword-rich, under 125 chars), then batch in groups", "Write all 200 manually — AI can't generate accurate product alt text", "Use the same generic alt text for all 200 — consistency matters more"], c: 1 },
    { q: "A 5-email welcome sequence prompt specifies each email's purpose. This is important because:", o: ["AI can't generate more than one email at a time without specific instructions", "Each email serves a different funnel stage — specifying purpose ensures strategic progression from awareness to conversion", "Email platforms require exactly 5 emails in a welcome sequence", "It's just a DH preference — any random 5 emails would convert equally"], c: 1 },
    { q: "AI generates product copy that sounds generic and corporate for a fun Gen-Z skincare brand. The fix is:", o: ["Accept it — professional tone is always better for e-commerce", "Add brand voice examples and tone constraints: 'Tone: playful, emoji-heavy, Gen-Z friendly. Example: [paste existing copy]'", "Use a different AI model that specializes in casual writing", "Have a Gen-Z employee manually rewrite everything"], c: 1 },
    { q: "JSON-LD FAQ schema generated by AI is valuable for SEO because:", o: ["It makes the page load faster which is a Google ranking factor", "It can earn rich snippet results in Google search — FAQ dropdowns increase visibility and click-through rates", "Google requires JSON-LD on every page for proper indexing", "JSON-LD replaces the need for traditional on-page SEO optimization"], c: 1 },
    { q: "When using AI for Facebook ad copy, specifying character limits (headline under 40, text under 125) ensures:", o: ["The AI generates shorter, punchier copy that doesn't get truncated by Facebook's ad display format", "Nothing — Facebook shows full ad copy regardless of length", "AI charges fewer tokens for shorter copy, reducing costs", "Facebook rejects ads that exceed 125 characters in primary text"], c: 0 }
];


// ═══════════════════════════════════════
// TASK 12: AI for PM & Operations
// ═══════════════════════════════════════

const task12Content = `
<h2>📋 TASK 12: AI FOR PM & OPS — Project Management & Automation</h2>

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
1. Project phases with start/end dates (6-week timeline)
2. Task breakdown per phase (minimum 25 tasks total)
3. Resource allocation (Developer, Designer, Content Writer, QA, PM)
4. Dependencies between tasks
5. Risk register (5 risks with probability, impact, and mitigation)
6. Client milestone deliverables
7. QA checklist for pre-launch

Format as a professional project plan document with tables.</div>
    <p><strong>Why this works:</strong> Specific project parameters combined with detailed format requirements produce a comprehensive plan that would take hours to create manually.</p>
</div>
`;

const task12Quiz = [
    { q: "A PM uses AI to estimate a Shopify project. The AI estimate is 120 hours. The PM should:", o: ["Present 120 hours to the client — AI estimates are accurate and reliable", "Use the AI estimate as a baseline, add buffer for unknowns, validate with tech lead, and adjust based on team capacity", "Double the estimate to 240 hours — AI always underestimates complexity", "Ignore the AI estimate — only manual estimation from experience is valid"], c: 1 },
    { q: "After a client meeting with messy notes, AI transforms them by:", o: ["Only if notes are typed — AI can't process informal or handwritten text", "Structuring them into formatted summaries with decisions, action items, owners, and deadlines", "Automatically sending meeting minutes to the client without PM review", "Recording future meetings instead — AI can't work with post-meeting notes"], c: 1 },
    { q: "A client wants to add 3 new features mid-project. The AI-assisted PM response is:", o: ["Accept immediately — scope changes are normal and AI adjusts the timeline automatically", "Use AI to draft a scope change impact analysis showing timeline and cost implications, then review and send to client", "Refuse the changes — the original scope was agreed upon", "Add the features without mentioning timeline impact to keep the client happy"], c: 1 },
    { q: "AI-generated QA checklists help DH because:", o: ["They replace human QA — AI checklists catch everything automatically", "They ensure consistent, comprehensive testing based on project type — no checklist items get forgotten across projects", "They're only useful for simple projects — complex ones need custom manual checklists", "AI checklists are too generic and don't account for project-specific requirements"], c: 1 },
    { q: "MCP scheduled tasks help PM operations by:", o: ["Replacing the PM role entirely with automated project management", "Automating repetitive operations like daily standup summaries, status compilations, and regular reporting", "Only working for development tasks — PM operations are too nuanced for automation", "Sending automatic updates to clients without PM oversight"], c: 1 },
    { q: "AI risk identification for projects works best when you:", o: ["Ask AI to predict the future — it can foresee all possible project risks", "Provide the project timeline, team structure, and constraints so AI can flag bottlenecks and single points of failure", "Let AI analyze the project independently without any context", "Only use AI for risk identification after problems have already occurred"], c: 1 },
    { q: "AI-drafted client communication should ALWAYS be:", o: ["Sent immediately — AI produces professional content that doesn't need human review", "Reviewed and edited by the PM before sending — AI drafts are starting points, not final communications", "Labeled as 'AI-generated' in the email signature for transparency", "Avoided entirely — clients can always tell when communication is AI-assisted"], c: 1 },
    { q: "For project estimation, AI is most valuable when:", o: ["The project is completely novel with no similar past projects for reference", "The prompt includes specific scope details — features, page count, integrations — so AI can generate detailed task breakdowns", "Estimating simple projects that don't need detailed breakdown analysis", "The PM has no experience and relies entirely on AI for estimates"], c: 1 },
    { q: "Retrospective analysis with AI helps DH by:", o: ["Automatically identifying underperforming team members based on project metrics", "Detecting patterns in project data — scope changes, timeline adherence, feedback — to improve future project management", "Replacing team retrospective meetings since AI analysis is more objective", "Only analyzing financial metrics — AI can't handle qualitative project feedback"], c: 1 },
    { q: "A PM needs to upsell additional services. AI helps by:", o: ["Sending automated upsell emails to all clients without PM involvement", "Analyzing the current project context and suggesting relevant services with tailored value propositions", "Creating fake urgency to pressure the client into purchasing more", "Only suggesting the most expensive services to maximize revenue"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 13: Advanced Prompts & Speed Hacks
// ═══════════════════════════════════════

const task13Content = `
<h2>⚡ TASK 13: ADVANCED PROMPTS & SPEED HACKS — Power Techniques for 10x Output</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🚀 Beyond RCFC — Advanced Prompt Architecture</h3>
    <p>You've mastered the RCFC framework. Now it's time to learn the techniques that separate a competent AI user from a <strong>10x AI power user</strong>. These are the patterns DH's top performers use daily.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🏗️ Mega-Prompt Architecture</h3>
    <p>A mega-prompt combines Role + Context + Task + Format + Constraints all in one dense, structured prompt. It front-loads all information so the AI produces exceptional output on the first try.</p>
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 16px; margin: 12px 0; font-family: monospace; font-size: 0.9em; color: #E2E8F0; white-space: pre-wrap;">[ROLE] You are a senior Shopify conversion optimization specialist.
[CONTEXT] Client: luxury watch brand. Current CVR: 1.2%. Industry avg: 2.8%. Traffic: 50K/mo. AOV: $450.
[TASK] Audit the product page and recommend 10 changes to increase CVR to 3%+.
[FORMAT] Numbered list. Each item: change description, expected impact (%), implementation difficulty (easy/medium/hard), Shopify implementation notes.
[CONSTRAINTS] No external apps that add monthly cost. Dawn theme only. Changes must be implementable in 1 sprint.</div>
    <p><strong>Why mega-prompts work:</strong> They eliminate the need for follow-up questions. One prompt, one shot, one deliverable.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🎭 Advanced Techniques</h3>

    <h4>"Act As + Teach Me" Pattern</h4>
    <p>Instead of just getting answers, make AI teach you. This produces deeper, more nuanced output:</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Act as a senior CRO consultant. Teach me why this product page converts poorly. Explain your reasoning step by step like you would to a junior who needs to learn."</div>

    <h4>Constraint Stacking</h4>
    <p>Layer multiple constraints to narrow AI output from generic to laser-focused:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Constraint Level</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Example</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Weak (1 constraint)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write a product description"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Medium (3 constraints)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write a 150-word product description for a luxury watch in a sophisticated tone"</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Strong (6+ constraints)</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">"Write a 150-word product description for a luxury watch. Tone: sophisticated, aspirational. Structure: hook + 3 benefits + CTA. Keywords: Swiss-made, sapphire crystal. No exclamation marks. Match voice: [example]"</td></tr>
    </table>

    <h4>Reverse Prompt Technique</h4>
    <p>Give AI the OUTPUT you want and ask it to reverse-engineer the PROMPT:</p>
    <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin: 8px 0; font-family: monospace; font-size: 0.85em;">"Here is a product description I love: [paste example]. What prompt would generate this exact style, tone, and structure? Write me a reusable prompt template."</div>

    <h4>Multi-Pass Refinement</h4>
    <p>Generate → Critique → Improve in a structured loop:</p>
    <ol>
        <li><strong>Pass 1 (Generate):</strong> "Write a landing page hero section for a fitness brand"</li>
        <li><strong>Pass 2 (Critique):</strong> "Now critique this hero section. What's weak? What would a senior designer change?"</li>
        <li><strong>Pass 3 (Improve):</strong> "Based on your critique, rewrite the hero section addressing every issue you identified"</li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">⚡ 10x Speed Hacks — Client Work</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Task</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Manual Time</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI Time</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Speed Hack</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Client proposal</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Mega-prompt with scope, budget, timeline constraints</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Status email</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">20 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Template with project data placeholders</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">QA report</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">15 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude in Chrome + structured output format</td></tr>
    </table>

    <h4>10x Speed Hacks — Shopify Stores</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Task</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Manual Time</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI Time</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Speed Hack</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Custom section</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">30 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude Code with CLAUDE.md + detailed spec</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">50 product descriptions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1 hour</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Few-shot template + batch processing</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">SEO audit</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3 hours</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">20 min</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI reads pages + generates meta tags, alt text, schema</td></tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🏆 The 5 Habits of 10x AI Users</h3>
    <ol>
        <li><strong>Front-load context:</strong> Spend 2 minutes crafting a detailed prompt instead of 20 minutes refining vague output</li>
        <li><strong>Use templates:</strong> Build reusable prompt templates for recurring tasks — don't reinvent every time</li>
        <li><strong>Iterate, don't restart:</strong> Refine output with follow-ups rather than starting from scratch</li>
        <li><strong>Verify everything:</strong> AI is a draft generator, not a fact-checker — always validate critical claims</li>
        <li><strong>Automate the repetitive:</strong> If you do it more than 3 times, create a custom command or scheduled task</li>
    </ol>
</div>
`;

const task13Quiz = [
    { q: "A mega-prompt combines Role + Context + Task + Format + Constraints into one prompt. This is effective because:", o: ["Longer prompts always produce better AI output regardless of content", "It front-loads all necessary information so the AI produces high-quality output in a single shot without follow-up questions", "Mega-prompts bypass the AI's safety filters for unrestricted output", "It forces the AI to use its maximum processing power for that single request"], c: 1 },
    { q: "The 'Act As + Teach Me' pattern produces better output than a simple question because:", o: ["AI has a special teaching mode that activates when you say 'teach me'", "Teaching requires deeper reasoning and explanation — AI provides more nuanced, structured, and insightful responses when explaining its thinking", "It only works for educational content — business tasks need different patterns", "It doubles the AI's token allocation for that specific response"], c: 1 },
    { q: "Constraint stacking (weak → medium → strong) improves AI output by:", o: ["Each additional constraint makes the AI work slower but more carefully", "Progressive constraints narrow the output from generic to laser-focused — more constraints = more specific, higher-quality results", "Strong constraints force the AI to use a more powerful model behind the scenes", "Constraints only help with text — code generation doesn't benefit from constraints"], c: 1 },
    { q: "The Reverse Prompt technique (giving AI an output and asking it to write the prompt) is useful for:", o: ["Cheating on prompt engineering certifications and training assessments", "Discovering what prompt patterns produce specific styles — creating reusable templates from examples you admire", "Only works with AI-generated content — human-written examples can't be reverse-engineered", "Debugging broken prompts by seeing what prompt would have worked better"], c: 1 },
    { q: "Multi-Pass Refinement (Generate → Critique → Improve) produces better results than a single prompt because:", o: ["AI generates perfect content on the first pass — multi-pass is just for perfectionists", "The critique step identifies weaknesses that the improvement step addresses — self-correction through structured iteration", "It triples the token cost for only marginally better output", "Multi-pass only works for creative writing — technical tasks don't benefit"], c: 1 },
    { q: "A DH developer reduces custom section creation from 4 hours to 30 minutes using AI. The key enabler is:", o: ["Skipping testing and QA to save time — AI code doesn't need testing", "Claude Code with a well-crafted CLAUDE.md, detailed section spec, and iterative refinement through theme dev preview", "Using a faster internet connection for quicker AI response times", "Copying sections from previous projects and renaming them"], c: 1 },
    { q: "The '5 Habits of 10x AI Users' includes 'Front-load context.' This means:", o: ["Always start with the longest prompt possible, even if much of it is irrelevant", "Investing 2 minutes crafting a detailed, specific prompt upfront saves 20+ minutes refining vague output later", "Providing context at the end of the prompt instead of the beginning", "Using the same context for every prompt regardless of the task"], c: 1 },
    { q: "Persona Stacking means prompting AI with multiple expert roles for complex client work. For example:", o: ["Asking AI to be everything at once — 'Be a developer, designer, marketer, and PM simultaneously'", "Sequential prompts: first as a UX designer (layout), then as a copywriter (content), then as an SEO expert (optimization) — each pass adds a layer of expertise", "Letting AI choose its own persona based on the task description", "Using different AI models for different personas simultaneously"], c: 1 },
    { q: "If you do a task more than 3 times, a 10x AI user should:", o: ["Continue doing it manually — repetition builds muscle memory", "Create a custom command, template, or scheduled task to automate it — recurring tasks deserve reusable solutions", "Switch to a different AI model for variety", "Ask a colleague to handle it instead — delegation is better than automation"], c: 1 },
    { q: "The speed hack tables show a QA report going from 2 hours to 15 minutes. This is possible because:", o: ["The AI-generated report skips most checks to save time", "Claude in Chrome reads live pages, analyzes DOM/accessibility/SEO simultaneously, and generates a structured report in minutes", "The 15-minute report has lower quality than the 2-hour manual version", "It only works for simple static sites, not complex Shopify stores"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 14: AI Ethics, Security & Compliance
// ═══════════════════════════════════════

const task14Content = `
<h2>🛡️ TASK 14: AI ETHICS, SECURITY & COMPLIANCE</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🛡️ With Great Power Comes Great Responsibility</h3>
    <p>AI tools can dramatically boost your output, but misusing them can harm clients, the company, and your career. This module covers the ethical, security, and compliance foundations <strong>every DH team member must understand and follow</strong>.</p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #EF4444; margin-top: 0;">🔒 Data Security — The Non-Negotiables</h3>
    <ul>
        <li><strong>NEVER feed client credentials to AI:</strong> No API keys, passwords, admin URLs, payment info, or access tokens in any AI prompt — ever</li>
        <li><strong>NEVER share customer PII:</strong> No real customer names, emails, phone numbers, addresses, or order details in AI conversations</li>
        <li><strong>NEVER paste proprietary code without authorization:</strong> Check with your PM before sharing client code with any AI tool</li>
        <li><strong>Always anonymize data:</strong> Replace real names with "Client A," real emails with "user@example.com," real phone numbers with placeholders</li>
        <li><strong>Check AI tool data policies:</strong> Understand whether your AI tool stores conversations for model training — opt out where possible</li>
    </ul>
    <div style="background: rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <strong>⚠️ DH Zero-Tolerance Policy:</strong> Sharing client credentials or customer personal data with AI tools is a terminable offense. No exceptions. No warnings. This applies to ChatGPT, Claude, Gemini, and all other AI tools.
    </div>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">⚖️ AI Bias & Fairness</h3>
    <p>AI models can perpetuate biases present in their training data. At DH, you must actively watch for:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(59, 130, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Bias Type</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">What It Looks Like</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">How to Counter It</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cultural bias</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Content that doesn't resonate with diverse audiences</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Specify target audience demographics in prompts</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Visual bias</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI images defaulting to one ethnicity or body type</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Explicitly request diversity in image generation prompts</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Language bias</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Favoring formal English over regional expressions</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Provide brand voice examples matching your audience</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Recommendation bias</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Suggesting popular tools over better but less known alternatives</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ask AI to consider alternatives and justify recommendations</td></tr>
    </table>
    <p><strong>DH Standard:</strong> Always review AI output for bias before client delivery. Ensure content represents diverse perspectives and doesn't reinforce stereotypes.</p>
</div>

<div class="content-section" style="border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🔍 Hallucination Detection</h3>
    <p>AI hallucinations are confidently stated falsehoods. DH team members must develop a verification habit:</p>
    <ol>
        <li><strong>Verify all statistics:</strong> If AI says "studies show 73% of..." — find the actual study or remove the claim entirely</li>
        <li><strong>Test all code:</strong> Never deploy AI-generated code without testing. Verify that API functions, Liquid filters, and methods actually exist.</li>
        <li><strong>Cross-reference facts:</strong> If AI mentions a specific Shopify feature, verify it in official documentation</li>
        <li><strong>Check links and URLs:</strong> AI can generate plausible-looking but completely fake URLs and references</li>
        <li><strong>Question extreme confidence:</strong> Paradoxically, when AI sounds most certain is when you should verify most carefully</li>
    </ol>
</div>

<div class="content-section" style="border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">📜 IP Ownership & Disclosure</h3>
    <ul>
        <li><strong>AI-assisted work is still YOUR work:</strong> You directed it, reviewed it, refined it. You own it and are responsible for it.</li>
        <li><strong>Client transparency:</strong> DH does not hide AI usage. If asked, be honest about AI-assisted workflows.</li>
        <li><strong>Copyright caution:</strong> AI-generated images may have unclear copyright status. For client logos and brand identity, always refine AI concepts with human design tools.</li>
        <li><strong>Code attribution:</strong> AI-generated code doesn't require attribution, but document significant AI-assisted decisions in project notes.</li>
        <li><strong>Image copyright:</strong> Be cautious with AI-generated images for commercial use — legal frameworks are still evolving. Never use AI to replicate copyrighted art styles or existing brand elements.</li>
    </ul>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">✅ Ethics Checklist — Before Every AI Deliverable</h3>
    <p>Run through this mental checklist before sending any AI-assisted work to a client:</p>
    <ul style="list-style: none; padding-left: 0;">
        <li>☐ <strong>Data safe?</strong> No client credentials, customer PII, or proprietary code was shared with AI</li>
        <li>☐ <strong>Facts verified?</strong> All statistics, links, API references, and claims have been verified</li>
        <li>☐ <strong>Code tested?</strong> All AI-generated code has been tested in a development environment</li>
        <li>☐ <strong>Bias checked?</strong> Content represents diverse perspectives and avoids stereotypes</li>
        <li>☐ <strong>Human reviewed?</strong> A human has reviewed, edited, and approved the final deliverable</li>
        <li>☐ <strong>IP clear?</strong> No copyrighted material was replicated; AI-generated images are safe for commercial use</li>
    </ul>
</div>
`;

const task14Quiz = [
    { q: "A developer is debugging a client's Shopify store and pastes the store's admin API key into Claude for help. According to DH policy:", o: ["Acceptable — Claude is a trusted tool and API keys help it provide better debugging assistance", "A zero-tolerance violation — client credentials must NEVER be shared with AI tools regardless of the reason or tool", "Acceptable only if the developer deletes the conversation afterward", "Fine as long as the PM approves it first — manager authorization overrides security policy"], c: 1 },
    { q: "AI generates 20 hero banner concepts for a client, but all images show only one ethnicity. The designer should:", o: ["Present them to the client — AI-generated diversity isn't required for banner concepts", "Regenerate with explicit diversity requirements — AI can default to biased representation from training data, and DH standards require inclusive content", "Only fix it if the client specifically requests diverse representation", "Accept it — AI-generated images are exempt from diversity standards"], c: 1 },
    { q: "AI hallucinations are most dangerous in which DH scenario?", o: ["Brainstorming session ideas where creative fiction is acceptable", "A QA report that claims a specific Shopify API endpoint exists when it doesn't — leading to wasted development time on non-existent features", "Draft meeting notes that are immediately reviewed by the PM", "Color palette suggestions where there's no 'wrong' answer"], c: 1 },
    { q: "The DH rule 'anonymize data before using AI' means:", o: ["Replace client names with 'Client A', real emails with 'user@example.com', and phone numbers with placeholders — never expose real identifiable information", "Only anonymize sensitive financial data — names and emails are fine to share with AI", "Anonymization is recommended but not required if the AI tool has strong privacy policies", "Only anonymize when using free AI tools — paid tools like Claude Pro are secure enough"], c: 0 },
    { q: "AI-generated content for a client blog contains the statistic '73% of Shopify stores see 2x revenue with email marketing.' You should:", o: ["Include it — specific statistics make content more credible and authoritative", "Verify the source — if you can't find the actual study, remove or rephrase the claim as AI may have fabricated it", "Replace 73% with 'most' to make it vaguer but technically not verifiable", "Keep it but add 'according to AI research' as a disclaimer"], c: 1 },
    { q: "IP ownership of AI-assisted work at DH means:", o: ["AI owns the output since it generated the content — you're just the operator", "You own and are responsible for the work — you directed, reviewed, and refined it, making it your deliverable", "The client owns everything since they're paying for the project", "Anthropic/OpenAI own all AI-generated content under their terms of service"], c: 1 },
    { q: "A team member says: 'Claude is secure, so I can paste client passwords to test login flows.' This is:", o: ["Correct — Claude has enterprise-grade security and encrypted conversations", "Wrong — NO AI tool should receive credentials regardless of security claims. Credentials must never be shared with any AI.", "Correct only for Claude but not for ChatGPT or other tools", "A gray area — check with the security team first before deciding"], c: 1 },
    { q: "Checking AI output for cultural bias is important at DH because:", o: ["It's only required for international clients — domestic projects don't need bias checking", "DH serves diverse clients and audiences — biased content can alienate customers, damage brands, and reflect poorly on the agency", "Cultural bias only affects image generation — text content is always neutral", "It's a nice-to-have but not a requirement for professional AI usage"], c: 1 },
    { q: "AI generates a Shopify Liquid section using a filter called 'product_url' that doesn't exist. This is:", o: ["A valid Liquid filter that the developer hasn't learned yet", "An AI hallucination — a plausible-sounding but fictional filter that must be verified in official Shopify docs before deployment", "A deprecated filter that used to work in older Shopify versions", "A bug in Claude that should be reported to Anthropic support"], c: 1 },
    { q: "Before sending any AI-assisted deliverable to a client, the DH ethics checklist requires:", o: ["Only a quick spell-check — AI content is reliable enough for direct delivery", "Verifying data safety, fact-checking, code testing, bias review, human editing, and IP clearance — every deliverable gets full review", "Only the PM needs to review — individual contributors can send directly", "Ethics review is only required for public-facing content, not internal client deliverables"], c: 1 }
];


// ═══════════════════════════════════════
// TASK 15: Final Certification
// ═══════════════════════════════════════

const task15Content = `
<h2>🎓 TASK 15: FINAL CERTIFICATION — AI Mastery Comprehensive Exam</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(139, 92, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #A78BFA; margin-top: 0;">🚀 Course Review — What You've Mastered</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Task</th>
            <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Key Skills</th>
        </tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">1. What is AI?</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">AI fundamentals, models, tokens, context windows, hallucinations</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">2. Prompt Engineering</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">RCFC framework, zero-shot, few-shot, chain-of-thought</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">3. Setup Part 1</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Claude Code installation, CLAUDE.md, essential commands</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">4. Setup Part 2</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Chrome Extension, skills repos, UI/UX Pro Max</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5. Custom GPTs & Projects</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Building AI assistants, GPTs vs Projects</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">6. Claude Code Mastery</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Headless mode, multi-file edits, CLAUDE.md deep dive</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">7. MCP & Antigravity</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">MCP protocol, browser AI, platform tools</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">8. Skills & Plugins</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Power Stack, custom commands, client skills</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">9. Shopify CLI + AI</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Theme development workflow, Liquid generation</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">10. AI for Design</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">5 Design Pillars, AI slop detection, aesthetic directions</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">11. AI for Content & SEO</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Product copy, meta tags, content strategy</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">12. AI for PM & Ops</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Estimation, communication, MCP automation</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">13. Advanced Prompts</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Mega-prompts, constraint stacking, 10x speed hacks</td></tr>
        <tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">14. Ethics & Security</td><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Data security, bias, hallucinations, IP compliance</td></tr>
    </table>
    <p style="text-align: center; font-size: 1.2em; margin-top: 20px;"><strong>🎯 Complete the final exam below to earn your AI Training Certificate!</strong></p>
</div>
`;

const task15Quiz = [
    { q: "You're using the RCFC framework for a client prompt. The correct sequence of components is:", o: ["Format → Constraints → Role → Context", "Role → Context → Format → Constraints", "Context → Role → Constraints → Format", "Constraints → Format → Context → Role"], c: 1 },
    { q: "Claude Code's CLAUDE.md file serves a similar purpose to what feature in ChatGPT?", o: ["Chat history — both store previous conversations for reference", "Custom GPT instructions — both provide persistent context and rules that shape AI behavior across sessions", "Temperature settings — both control the randomness of output", "File uploads — both store documents for reference"], c: 1 },
    { q: "A developer pastes a client's Shopify admin API key into Claude to debug an issue. According to DH policy, this is:", o: ["Acceptable — Claude is a trusted tool and the API key helps debugging", "A zero-tolerance security violation — client credentials must never be shared with any AI tool under any circumstances", "Acceptable if the developer deletes the conversation afterward", "Fine if the PM approves the security exception first"], c: 1 },
    { q: "The DH 'Power Stack' of Frontend Design + UI/UX Pro Max + Marketing Skills enables Claude Code to:", o: ["Run three times faster by parallelizing across the three skill sets", "Generate code that is well-structured, aesthetically sophisticated, AND optimized for conversions — combining technical, design, and marketing expertise", "Replace the need for a design team, marketing team, and development team", "Only work with Shopify themes — other platforms aren't supported by the Power Stack"], c: 1 },
    { q: "MCP Scheduled Tasks differ from manual Claude Code sessions because:", o: ["Scheduled tasks use a more powerful AI model than interactive sessions", "They run automatically without human initiation — enabling proactive daily scans, reports, and monitoring that would otherwise be forgotten", "They're cheaper per token than interactive sessions", "Manual sessions are more reliable — scheduled tasks often fail silently"], c: 1 },
    { q: "A Shopify store built with AI looks generic — Inter font, purple gradients, identical card grids. According to the Designer's Playbook, this is:", o: ["Normal for AI-assisted design — all AI-generated sites look similar", "AI slop — failing the 'did AI make this?' test means the design needs iteration with clear aesthetic direction and the 5 Design Pillars", "Acceptable if the client approved the design direction", "Only a problem for luxury brands — generic design is fine for other verticals"], c: 1 },
    { q: "Few-shot prompting with 3 brand voice examples produces consistent product descriptions because:", o: ["Three examples triple the token count which forces the AI to work harder", "The examples teach AI the exact style, tone, and structure to replicate — ensuring consistency across 50+ products in a catalog", "Zero-shot is actually more consistent — examples confuse the AI", "Few-shot only works in English — other languages need different techniques"], c: 1 },
    { q: "The Shopify CLI + Claude Code workflow sequence (Pull → Claude → Dev → Iterate → Push) includes 'Iterate' because:", o: ["AI-generated code is always perfect on the first pass — iteration is optional", "First-pass AI code may have bugs, design mismatches, or missing features — iterating with live preview in theme dev ensures production quality", "Iteration means running shopify theme check which is mandatory before every push", "Iteration only applies to CSS — Liquid code doesn't need iteration"], c: 1 },
    { q: "AI generates a blog post claiming '73% of Shopify stores see 2x revenue with email marketing.' The correct response is:", o: ["Include it — specific statistics boost credibility and SEO rankings", "Verify the source — if you can't find the actual study, remove or rephrase the claim because AI may have fabricated the statistic", "Round it to 'about 70%' to make it less precise and therefore less verifiable", "Keep it with a disclaimer: 'according to AI-generated research'"], c: 1 },
    { q: "After completing all 14 tasks and passing this exam, your AI journey at DH:", o: ["Is complete — you've mastered everything about AI for professional work", "Is just beginning — AI tools evolve rapidly, continuous learning and daily experimentation are essential for maintaining your 10x edge", "Qualifies you for a promotion to AI Lead at Digital Heroes", "Means you should train others — your primary role now shifts to AI education"], c: 1 }
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
window.task11Content = task11Content;
window.task12Content = task12Content;
window.task13Content = task13Content;
window.task14Content = task14Content;
window.task15Content = task15Content;

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
window.task11Quiz = task11Quiz;
window.task12Quiz = task12Quiz;
window.task13Quiz = task13Quiz;
window.task14Quiz = task14Quiz;
window.task15Quiz = task15Quiz;

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
    task10Quiz,
    task11Quiz,
    task12Quiz,
    task13Quiz,
    task14Quiz,
    task15Quiz
];
