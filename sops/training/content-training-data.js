// Content Writer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Sales Copy Mastery

const trainingTasks = [
    {
        id: 1,
        title: "Writer Mindset",
        description: "Sales vs Poetry",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: We write to Sell, not to Impress",
            "🛡️ Concept: Nobody reads, they Scan",
            "🚀 Concept: Clarity > Cleverness"
        ]
    },
    {
        id: 2,
        title: "Headline Mastery",
        description: "The 80/20 Rule",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📊 Stat: 80% of people only read the headline",
            "🎣 Technique: Curiosity Gaps",
            "🔢 Technique: Numbers & Lists"
        ]
    },
    {
        id: 3,
        title: "The Editing Process",
        description: "Hemingway Grade 6",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🛠️ Tool: Hemingway App",
            "✂️ Rule: Cut Adverbs",
            "✂️ Rule: Short Sentences"
        ]
    },
    {
        id: 4,
        title: "SEO Basics",
        description: "Writing for Robots",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🔍 Concept: Keyword Intent",
            "🏗️ Structure: H1, H2, H3 Hierarchy",
            "🖼️ Asset: Alt Text"
        ]
    },
    {
        id: 5,
        title: "Research Strategy",
        description: "Stalking the Customer",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🕵️‍♀️ Source: Reddit Threads",
            "🕵️‍♀️ Source: Amazon 1-Star Reviews",
            "📝 Output: The 'Voice of Customer' Doc"
        ]
    },
    {
        id: 6,
        title: "Blog Post Anatomy",
        description: "The Listicle & How-To",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🎣 Hook: The Introduction",
            "🥩 Meat: The Value",
            "🏁 Exit: The Conclusion & CTA"
        ]
    },
    {
        id: 7,
        title: "Landing Page Copy",
        description: "High Conversion",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🦸‍♀️ Hero: The Value Prop",
            "✅ Bullets: Features vs Benefits",
            "👇 CTA: The Button Text"
        ]
    },
    {
        id: 8,
        title: "Email Marketing",
        description: "Subject Lines & Opens",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📧 Metric: Open Rate (Subject Line)",
            "📧 Metric: Click Rate (Body)",
            "📧 Rule: One Goal per Email"
        ]
    },
    {
        id: 9,
        title: "Social Media Captions",
        description: "Stopping the Scroll",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🎣 Hook: The First Line",
            "📖 Story: Micro-Blogging",
            "#️⃣ Tag: Hashtag Strategy"
        ]
    },
    {
        id: 10,
        title: "Tone of Voice",
        description: "Chameleon Writing",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎭 Style: Professional vs Playful",
            "🎭 Style: The Brand Guide",
            "🔄 Exercise: Rewrite in 3 Tones"
        ]
    },
    {
        id: 11,
        title: "AI for Writers",
        description: "Cyborg Writing",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🤖 Prompt: Ideation & Outlining",
            "🤖 Prompt: The 'Shitty First Draft'",
            "⚠️ Warn: Detecting AI Fluff"
        ]
    },
    {
        id: 12,
        title: "Lead Magnets",
        description: "Gated Content",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📥 Format: Ebooks & Checklists",
            "💰 Value: Solving One Specific Problem",
            "🎣 Title: The 'Download' factor"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: MINDSET - Sales vs Poetry</h2>

<div class="content-section">
    <h3>🚫 We are not Poets</h3>
    <p>Poetry is about expressing yourself. Copywriting is about getting the reader to take action. If it doesn't sell, it's bad writing.</p>
</div>

<div class="content-section">
    <h3>👀 The Scan</h3>
    <p>Nobody reads word-for-word. They read the subheads. If the subheads are boring, they bounce.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Trim</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Cut 50%</h4>
        <p>I will give you a 100-word paragraph. You must rewrite it in 50 words without losing meaning.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: HEADLINE MASTERY</h2>

<div class="content-section">
    <h3>The 4 U's</h3>
    <p>Urgent, Unique, Ultra-specific, Useful. <br>Bad: "Weight Loss Tips" <br>Good: "Lose 5 Pounds in 7 Days without Cardio"</p>
</div>

<div class="content-section">
    <h3>🎣 The Curiosity Gap</h3>
    <p>"The one vegetable you should never eat." (Clickbait works if you deliver on the promise).</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: 25 Headlines</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Brainstorm</h4>
        <p>Write 25 headlines for a "Dog Training Course". Pick the best one. (Upworthy Method).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Headlines</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: THE EDITING PROCESS</h2>

<div class="content-section">
    <h3>🛠️ Hemingway Editor</h3>
    <p>Aim for Grade 6 Readability. <br>Cut "very", "really", "just", "that". <br>Use Active Voice ("I hit the ball" vs "The ball was hit by me").</p>
</div>

<div class="content-section">
    <h3>✂️ Kill Your Darlings</h3>
    <p>If a sentence is clever but doesn't move the sale forward, delete it.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Polishing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Adverb Hunt</h4>
        <p>Find and destroy all adverbs in this text: "He walked quickly to the store and loudly shouted." -> "He sprinted to the store and bellowed."</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Editing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: SEO BASICS</h2>

<div class="content-section">
    <h3>🔍 Intent</h3>
    <p>Informational: "How to fix toggle" <br>Transactional: "Buy toggle switch" <br>Write for the intent.</p>
</div>

<div class="content-section">
    <h3>🏗️ Structure</h3>
    <p>Google reads H1, then H2s. Your H2s should outline the article perfectly.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Optimization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Meta Data</h4>
        <p>Write a Title Tag (60 chars) and Meta Description (160 chars) for a "Vegan Leather Jacket" page.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about SEO</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: RESEARCH STRATEGY</h2>

<div class="content-section">
    <h3>🕵️‍♀️ Voice of Customer (VOC)</h3>
    <p>Go to Amazon. Read the 1-star reviews of competitors. What do they hate? "It broke in 2 days". <br>Your copy: "Guaranteed to last 10 years, not 2 days."</p>
</div>

<div class="content-section">
    <h3>📝 Reddit Mining</h3>
    <p>Go to r/skincareaddiction. Look for phrases they use. "My skin barrier is wrecked." Use THAT phrase.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: VOC Doc</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Mining</h4>
        <p>Find 3 "Pain Points" for a "Standing Desk" from Amazon reviews.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Research</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: BLOG POST ANATOMY</h2>

<div class="content-section">
    <h3>🎣 The Hook Introduction</h3>
    <p>APP Method: <br>Agree (Ideally, you want X). <br>Promise (But Y is hard). <br>Preview (In this post, we solve Y).</p>
</div>

<div class="content-section">
    <h3>🏁 The Conclusion CTA</h3>
    <p>Never end with "Hope this helps". End with "Ready to start? Click here."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Outlining</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: The Skeleton</h4>
        <p>Outline a 1000-word post on "Remote Work Productivity". Give me 5 H2 headers.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Blogs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: LANDING PAGE COPY</h2>

<div class="content-section">
    <h3>🦸‍♀️ The Hero Section</h3>
    <p>Value Prop + Objection Handle + CTA. <br>"Get 50 Leads (Value) in 30 Days (Time) or You Don't Pay (Objection)."</p>
</div>

<div class="content-section">
    <h3>✅ Features vs Benefits</h3>
    <p>Feature: "2TB Storage". <br>Benefit: "Never delete a photo of your grandchild again."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Rewrite</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Benefit Flip</h4>
        <p>Turn these features into benefits: "Titanium casing", "Waterproof to 50m", "Sapphire Glass".</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Landing Pages</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: EMAIL MARKETING</h2>

<div class="content-section">
    <h3>📧 Subject Lines</h3>
    <p>The only goal of the subject line is to get the email OPENED. Short, Punchy, Personal.</p>
</div>

<div class="content-section">
    <h3>🎯 One Goal</h3>
    <p>One email = One link. Don't ask them to Read the blog AND follow on IG AND buy the product. Confused mind says no.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Sequence</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Abandoned Cart</h4>
        <p>Write Subject Lines for a 3-email Abandoned Cart sequence (1 hr, 24 hrs, 48 hrs).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Email</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: SOCIAL MEDIA CAPTIONS</h2>

<div class="content-section">
    <h3>🎣 The Hook</h3>
    <p>Line 1 must stop the scroll. "I lost $50k on ads. Here is what I learned."</p>
</div>

<div class="content-section">
    <h3>📖 Micro-Blogging</h3>
    <p>LinkedIn and IG are storytelling platforms. Use line breaks. Make it readable.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Writing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: LinkedIn Post</h4>
        <p>Write a LinkedIn post about "The importance of sleep" for entrepreneurs. Use a strong hook.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Social</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: TONE OF VOICE</h2>

<div class="content-section">
    <h3>🎭 Chameleon</h3>
    <p>You are not writing as YOU. You are writing as the CLIENT. <br>Client A: "Yo! Check this out!" <br>Client B: "We are pleased to announce..."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Style Transfer</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Rewrite</h4>
        <p>Rewrite "Our coffee is delicious" in 3 tones: 1. Luxury/Premium. 2. Gen-Z/Playful. 3. Scientific/Health.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tone</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: AI FOR WRITERS</h2>

<div class="content-section">
    <h3>🤖 Ideation, Not Creation</h3>
    <p>Use AI to generate 50 headline ideas. Then YOU pick and polish the best one. Don't copy-paste.</p>
</div>

<div class="content-section">
    <h3>🤖 The Shitty First Draft</h3>
    <p>Ask AI to write the first draft. It will be generic. Your job is to inject Soul, Data, and Stories.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Prompting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Prompt Engineering</h4>
        <p>Write a prompt that teaches ChatGPT to write in the style of "Apple" (Short, punchy, confident).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about AI</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: LEAD MAGNETS</h2>

<div class="content-section">
    <h3>📥 The Exchange</h3>
    <p>People don't give emails for "Newsletters" anymore. They give emails for "Solutions". <br>"Download the Checklist" vs "Sign up".</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(251, 146, 60, 0.1)); border: 2px solid rgba(244, 114, 182, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Creation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F472B6; margin-top: 0;">Exercise: Title Gen</h4>
        <p>Create 3 titles for a Lead Magnet targeting "Busy Moms who want to cook healthy".</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Content Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1
    {
        question: "What is the goal of Copywriting?",
        options: ["To sound smart", "To sell / get action", "To rhyme", "To reach word count"],
        correct: 1
    },
    // Task 2
    {
        question: "Which headline is better?",
        options: ["Water and Health", "Drink This to Live Forever", "7 Ways Water Boosts Energy", "Hydration Tips"],
        correct: 2
    },
    // Task 3
    {
        question: "What Grade Level should you write for?",
        options: ["Grade 12 (Academic)", "Grade 6 (Simple)", "Grade 1 (Baby)", "PhD"],
        correct: 1
    },
    // Task 4
    {
        question: "What is Keyword Intent?",
        options: ["What the user wants (Info vs Buy)", "The number of keywords", "The price of ads", "Nothing"],
        correct: 0
    },
    // Task 5
    {
        question: "Best place to finding Pain Points?",
        options: ["Guessing", "Amazon 1-star reviews", "Asking your mom", "Wikipedia"],
        correct: 1
    },
    // Task 7
    {
        question: "Feature vs Benefit?",
        options: ["Benefit describes the outcome/value", "Feature is better", "They are the same", "Benefits are specs"],
        correct: 0
    },
    // Task 8
    {
        question: "Goal of a Subject Line?",
        options: ["Sell the product", "Get the Open", "Tell a story", "Say hello"],
        correct: 1
    },
    // Task 10
    {
        question: "Why adapt Tone of Voice?",
        options: ["To confuse people", "To match the Client's Brand", "To show off", "Because it's fun"],
        correct: 1
    },
    // Task 11
    {
        question: "Can you trust AI facts?",
        options: ["Yes always", "No, it hallucinates", "Only on Sundays", "It is sentient"],
        correct: 1
    },
    // Task 12
    {
        question: "What makes a good Lead Magnet?",
        options: ["It's long", "It solves a specific problem", "It has a nice cover", "It's expensive"],
        correct: 1
    }
];
