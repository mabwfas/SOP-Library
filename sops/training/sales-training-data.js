// Sales Training Data - Tasks 1-5
const trainingTasks = [
    {
        id: 1,
        title: "Mindset & Life Lessons",
        description: "Why sales matters, success psychology",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read the content below completely before taking the quiz",
            "🔍 YouTube: Search 'sales mindset for beginners'",
            "🤖 ChatGPT: Ask 'What mindset do top salespeople have?'"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes, values, premium positioning",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-30 minutes",
            "📖 Read SOP: sales-sop.html - All sections about Digital Heroes",
            "📖 Study 'Non-Negotiable Sales Rules' section completely",
            "🔍 YouTube: Watch Digital Marketing Heroes channel videos"
        ]
    },
    {
        id: 3,
        title: "Product Mastery",
        description: "Packages, pricing, portfolio",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read SOP: 'Pricing & Packages' section completely",
            "📖 Study all package details: Premium, Enterprise",
            "🔍 YouTube: Search 'web development packages pricing'"
        ]
    },
    {
        id: 4,
        title: "Lead Qualification",
        description: "M.T.N.D framework, red flags",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: 'Lead Qualification (M.T.N.D Framework)' section",
            "📖 Study 'Client Quality Filtering' and all Red Flags",
            "🔍 YouTube: Search 'BANT sales qualification'"
        ]
    },
    {
        id: 5,
        title: "Response Templates",
        description: "4 response types, timing",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "📖 Read SOP: 'Inquiry Response & Initial Qualification'",
            "📖 Study all 4 Response Template types",
            "📖 Study 'Follow-up Sequence' section"
        ]
    },
    {
        id: 6,
        title: "Sales Psychology",
        description: "10 techniques, 80/20 rule",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Sales Psychology Playbook' section COMPLETELY",
            "📖 Study all 10 psychological techniques",
            "🔍 YouTube: Search 'sales psychology techniques'"
        ]
    },
    {
        id: 7,
        title: "Objection Handling",
        description: "6 core objections, scripts",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: 'Objection Handling' section COMPLETELY",
            "📖 Study all 6 core objection scripts word-by-word",
            "📖 Study 'Price Objection Flowchart'"
        ]
    },
    {
        id: 8,
        title: "Closing Techniques",
        description: "Advanced closes, negotiation",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: 'Advanced Closing Techniques' section",
            "📖 Study 'Negotiation & Pricing Mastery'",
            "🔍 YouTube: Search 'sales closing techniques'"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Full conversation simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-40 minutes",
            "📖 Review ALL previous tasks",
            "📖 Study 'Handling Difficult Situations' section",
            "🤖 ChatGPT: 'Give me a difficult sales scenario to solve'"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive exam + video",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Full SOP Review: Re-read entire sales-sop.html",
            "✅ Complete Tasks 1-9 with 10/10 on all quizzes",
            "🎥 Prepare 30-minute video walkthrough"
        ]
    }
];

// Task 1 Content (Content-First) - REORGANIZED & ENHANCED
const task1Content = `
<h2>📚 PART 1: THE FOUNDATION</h2>

<div class="content-section">
<h3>🎯 Why Are You Here?</h3>
<p>You're about to learn a skill that can change your entire financial future. Sales is not just a job — it's the <strong>highest-paid profession in the world</strong> that requires:</p>
<ul>
<li>❌ No degree</li>
<li>❌ No connections</li>
<li>❌ No starting capital</li>
<li>✅ Only your mind, discipline, and willingness to learn</li>
</ul>
<div class="warning-box">
<strong>⚠️ The Uncomfortable Truth:</strong><br>
95% of people who start sales training never finish it. Not because it's too hard. Because they don't have the right mindset. You're reading this because someone saw potential in you. The question is: <strong>Do you see it in yourself?</strong>
</div>
</div>

<div class="content-section">
<h3>🏢 Who is Digital Heroes?</h3>
<p>You're not joining just any company. You're joining <strong>Digital Heroes</strong> — one of the most trusted names in web development and digital marketing.</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(16, 185, 129, 0.2)); border: none;">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; text-align: center;">
<div>
<div style="font-size: 2em; font-weight: 700; color: #10B981;">2.5M+</div>
<div style="color: #94a3b8; font-size: 0.9em;">YouTube Subscribers</div>
</div>
<div>
<div style="font-size: 2em; font-weight: 700; color: #6366F1;">40+</div>
<div style="color: #94a3b8; font-size: 0.9em;">Expert Developers</div>
</div>
<div>
<div style="font-size: 2em; font-weight: 700; color: #F59E0B;">2000+</div>
<div style="color: #94a3b8; font-size: 0.9em;">Brands Served</div>
</div>
<div>
<div style="font-size: 2em; font-weight: 700; color: #EC4899;">$M+</div>
<div style="color: #94a3b8; font-size: 0.9em;">Revenue Generated for Clients</div>
</div>
</div>
</div>
<p style="margin-top: 15px;"><strong>What makes us different:</strong></p>
<ul>
<li>🎓 <strong>Education-First:</strong> Our YouTube channel <a href="https://www.youtube.com/@DigitalMarketingHeroes" target="_blank" style="color: #60A5FA;">@DigitalMarketingHeroes</a> has taught millions about website development & digital marketing</li>
<li>💎 <strong>Premium Quality:</strong> We build CRO-optimized websites that go on to generate millions in revenue</li>
<li>🏆 <strong>Proven Track Record:</strong> 2000+ successful brand partnerships across industries</li>
<li>👥 <strong>Expert Team:</strong> 40+ developers working to the highest standards</li>
</ul>
<div class="warning-box">
<strong>When you sell for Digital Heroes, you're not selling a service — you're offering access to a proven system that has transformed thousands of businesses.</strong> This is why your conviction matters. This is why we train so intensively.
</div>
</div>

<div class="content-section">
<h3>👤 The Two Types of People</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚶 Type 1: The Tourist</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
• Reads quickly, skims sections<br>
• Thinks "I already know this"<br>
• Quits when it gets hard<br>
• Blames external factors<br>
<em style="color: #EF4444;">Will NOT finish this training ❌</em>
</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.2);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎓 Type 2: The Student</strong></td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
• Reads carefully, takes notes<br>
• Thinks "What can I learn here?"<br>
• Pushes through when it gets hard<br>
• Takes responsibility for results<br>
<em style="color: #10B981;">Will become a top performer ✅</em>
</td>
</tr>
</table>
<div class="highlight-box">
<strong>Which one are you?</strong> The answer isn't what you say. It's what you <strong>DO</strong> in the next few hours.
</div>
</div>

<h2>📚 PART 2: CORE MINDSET LESSONS</h2>

<div class="content-section">
<h3>💡 Lesson 1: You Are Not Selling — You Are Solving</h3>
<p>The biggest mistake new salespeople make is thinking their job is to "convince" people to buy. <strong>Wrong.</strong></p>
<div class="highlight-box">
<strong>Your Real Job:</strong> Find people with problems and offer them solutions.
</div>
<p>Think about it:</p>
<ul>
<li>🩺 A <strong>doctor</strong> doesn't "convince" you to take medicine. They diagnose and prescribe.</li>
<li>⚖️ A <strong>lawyer</strong> doesn't "convince" you to hire them. They understand and offer expertise.</li>
<li>💻 <strong>You are the web development doctor.</strong> Clients come with broken websites, slow stores, and conversion problems. Your job is to diagnose and cure.</li>
</ul>
<p style="margin-top: 15px;">When you see yourself as a <strong>problem-solver</strong> instead of a salesperson:</p>
<ul>
<li>You stop begging for orders</li>
<li>You start qualifying who deserves your help</li>
<li>Clients respect you more</li>
<li>You close more deals</li>
</ul>
</div>

<div class="content-section">
<h3>💡 Lesson 2: Rejection is Information, Not Insult</h3>
<div class="highlight-box">
<strong>Here's a truth that will free you:</strong><br>
When someone says "no," they're not rejecting <strong>YOU</strong>. They're rejecting the <strong>OFFER</strong> — at <strong>THIS moment</strong> — for <strong>THEIR reasons</strong>.
</div>
<p>The rejection might mean:</p>
<ul>
<li>💰 They don't have budget <em>right now</em> (not "you're too expensive")</li>
<li>⏳ They're not ready to decide (not "you're not convincing")</li>
<li>🔒 They don't trust online services yet (not "you're untrustworthy")</li>
<li>😤 They had a bad experience before (not your fault at all)</li>
</ul>
<div class="warning-box">
<strong>📊 The Math That Matters:</strong><br>
• Salesperson A talks to 10 people, gets 2 "yes" = 20% conversion<br>
• Salesperson B talks to 100 people, gets 15 "yes" = 15% conversion<br><br>
<strong>Who makes more money?</strong> Salesperson B — even with a LOWER conversion rate!<br>
<em>The game isn't about avoiding rejection. It's about collecting rejections on your way to success.</em>
</div>
</div>

<div class="content-section">
<h3>💡 Lesson 3: Discipline Beats Motivation</h3>
<p><strong>Motivation is a lie.</strong> Not completely — but mostly.</p>
<p>Motivation is an <em>emotion</em>. It comes and goes like weather. You can't build a career on weather.</p>
<div class="highlight-box">
<strong>Discipline</strong> is doing what needs to be done, whether you feel like it or not.
</div>
<p>Here's the brutal truth about your future in sales:</p>
<ul>
<li>☀️ Some days you'll feel unstoppable. You'll close 3 deals before lunch.</li>
<li>🌧️ Some days you'll feel worthless. Every client will reject you.</li>
</ul>
<div class="warning-box">
<strong>On BOTH days, the ACTIONS are the same:</strong>
<ul style="margin-bottom: 0;">
<li>⚡ Respond to inquiries within 5 minutes</li>
<li>🔍 Qualify leads properly</li>
<li>📝 Send professional proposals</li>
<li>📞 Follow up systematically</li>
</ul>
</div>
<p style="margin-top: 15px;"><strong>The professional does the work regardless of feelings. The amateur waits until they "feel like it."</strong></p>
</div>

<div class="content-section">
<h3>💡 Lesson 4: The 10,000 Hour Reality</h3>
<p>Malcolm Gladwell popularized the "10,000 hour rule" — mastery requires 10,000 hours of practice.</p>
<div class="warning-box">
<strong>But here's what most people miss:</strong><br>
It's not 10,000 hours of <em>doing</em>. It's 10,000 hours of <strong>IMPROVING</strong>.
</div>
<p>You can spend 10 years doing sales badly and never get better. Or you can spend 1 year with intense focus and become exceptional.</p>
<p><strong>Deliberate practice means:</strong></p>
<ul>
<li>📝 <strong>Reviewing every conversation:</strong> "What worked? What didn't?"</li>
<li>🗣️ <strong>Asking for feedback:</strong> "What could I have done better?"</li>
<li>👀 <strong>Studying top performers:</strong> "What do they do differently?"</li>
<li>💪 <strong>Pushing past comfort:</strong> "Let me try that technique I'm afraid of"</li>
</ul>
<div class="highlight-box">
Your first 100 conversations will be terrible. Accept it. Embrace it. Learn from every single one. <strong>The people who become great are not the most talented. They're the ones who refuse to stay bad.</strong>
</div>
</div>

<div class="content-section">
<h3>💡 Lesson 5: Your Income is the Average of Your Skills</h3>
<p>There's a famous quote: "Your income is the average of the five people you spend the most time with."</p>
<div class="highlight-box">
<strong>But there's a more accurate version:</strong><br>
Your income is the average of your five most valuable skills.
</div>
<p><strong>Right now, you might have skills like:</strong></p>
<ul>
<li>Basic computer usage</li>
<li>Communication in your language</li>
<li>Some understanding of websites</li>
</ul>
<p>These skills might earn you ₹15,000-25,000/month in a regular job.</p>
<p><strong>But what if you added:</strong></p>
<ul>
<li>✅ Professional sales communication</li>
<li>✅ Client psychology understanding</li>
<li>✅ Objection handling mastery</li>
<li>✅ Premium positioning expertise</li>
<li>✅ Conversion optimization knowledge</li>
</ul>
<p>Now you have skills worth <strong>₹50,000-100,000/month. Or more.</strong></p>
<div class="warning-box">
<strong>This training is adding skills to your stack.</strong> Every module you complete is increasing your market value. But only if you actually LEARN it. Not just read it.
</div>
</div>

<h2>📚 PART 3: ADVANCED SALES PHILOSOPHY</h2>

<div class="content-section">
<h3>🔥 Lesson 6: The Ultimate Sales Equation</h3>
<div class="highlight-box" style="text-align: center; font-size: 1.2em;">
<strong>Conviction × Trust = Sales</strong>
</div>
<p style="text-align: center; margin-top: 10px;">Not scripts. Not rebuttals. Not persuasion tricks.</p>
<p>If you <strong>believe</strong>, people feel it. If you don't, they smell it.</p>
<p>That's why:</p>
<ul>
<li>🏆 The best salespeople are killers from week one</li>
<li>📉 Mediocre ones never "learn" their way into greatness</li>
<li><strong>You can train skills. You cannot fake belief.</strong></li>
</ul>
</div>

<div class="content-section">
<h3>🔥 Lesson 7: Conviction is a Slider, Not a Switch</h3>
<p>Most people think: "I believe or I don't." <strong>Wrong.</strong></p>
<div style="display: flex; align-items: center; gap: 10px; margin: 15px 0; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px;">
<span style="color: #EF4444;">40%</span>
<div style="flex: 1; height: 10px; background: linear-gradient(90deg, #EF4444, #F59E0B, #10B981); border-radius: 5px;"></div>
<span style="color: #10B981;">100%</span>
</div>
<p><strong>What increases conviction fastest?</strong> Seeing proof:</p>
<ul>
<li>⭐ Testimonials from happy clients</li>
<li>💰 Client wins: "This client made $40k revenue"</li>
<li>📈 Case studies: "This brand hit 4.8% CVR"</li>
<li>🚀 Results: "This ad campaign went 12x ROAS"</li>
</ul>
<div class="warning-box">
<strong>That is gasoline for your conviction.</strong> The more wins you see, the more you believe, the more you close.
</div>
</div>

<div class="content-section">
<h3>🔥 Lesson 8: Childlike Curiosity > Confrontation</h3>
<p>Most sales reps argue. <strong>Elite closers ask curious questions.</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr>
<td style="padding: 15px; background: rgba(239, 68, 68, 0.15); border-radius: 10px 10px 0 0;">
<strong>Client:</strong> "My husband won't approve."<br><br>
<strong style="color: #EF4444;">❌ Bad rep:</strong> "He's wrong."
</td>
</tr>
<tr>
<td style="padding: 15px; background: rgba(16, 185, 129, 0.15); border-radius: 0 0 10px 10px;">
<strong style="color: #10B981;">✅ Elite rep:</strong> "That's interesting — why wouldn't he?"
</td>
</tr>
</table>
<p>Now the client is explaining to <em>themselves</em>. No pressure. No conflict. Just logic.</p>
<div class="highlight-box">
<strong>People convince themselves better than you ever could.</strong>
</div>
</div>

<div class="content-section">
<h3>🔥 Lesson 9: Emotional Control = Closing Power</h3>
<p>Sales is like fighting. Under pressure:</p>
<ul>
<li>❤️ Heart rate up</li>
<li>💨 Breathing fast</li>
<li>⚡ Fight-or-flight kicks in</li>
</ul>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏳️ Losers</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">React emotionally → Push → Get defensive</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🏆 Winners</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Slow down → Ask → Stay curious</td>
</tr>
</table>
<div class="warning-box">
<strong>The calmest rep wins.</strong> When belief is real, your voice changes, speed changes, certainty comes through. People feel it.
</div>
</div>

<div class="content-section">
<h3>🔥 Lesson 10: Seasons Mindset = Psychological Freedom</h3>
<p>Most people think commitment = prison. Elite founders use <strong>time-boxed seasons.</strong></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Default thinking</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"If I start this, I'm stuck forever"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Seasonal reframe</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm committing to this for THIS season"</td>
</tr>
</table>
<p>Just like: <strong>Winter ≠ Summer</strong> | <strong>Launch season ≠ Scaling season</strong> | <strong>Cash season ≠ Brand season</strong></p>
<p>This removes: Fear of wrong decisions, overthinking, perfectionism.</p>
<div class="highlight-box">
<strong>You don't quit — you transition seasons.</strong> This is why elite founders move fast while others freeze.
</div>
</div>

<h2>📚 PART 4: YOUR COMMITMENT & STANDARDS</h2>

<div class="content-section">
<h3>📜 The Commitment Contract</h3>
<p>By continuing this training, you're making a commitment. Not to us — <strong>to yourself.</strong></p>
<div class="warning-box">
<strong>You're committing to:</strong>
<ul style="margin-bottom: 0;">
<li>✅ <strong>Complete every task</strong> — No skipping, no shortcuts</li>
<li>✅ <strong>Score 10/10 on every quiz</strong> — Perfection is the standard</li>
<li>✅ <strong>Apply what you learn</strong> — Knowledge without action is useless</li>
<li>✅ <strong>Push through difficulty</strong> — The hard parts are where growth happens</li>
<li>✅ <strong>Take responsibility</strong> — Your success or failure is YOUR doing</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🎯 Why 10/10 is Required</h3>
<p>You might wonder: "Why do I need 100% on every quiz? Isn't 80% good enough?"</p>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong style="color: #EF4444;">No. Here's why:</strong>
</div>
<p><strong>In sales, there is no 80%.</strong></p>
<ul>
<li>When a client asks about pricing, you can't give an "80% correct" answer. You either handle it right or you lose the deal.</li>
<li>When a client objects, you can't give an "80% correct" response. You either overcome it or you lose the deal.</li>
<li>When a client is ready to close, you can't do an "80% correct" close. You either get the order or you don't.</li>
</ul>
<p>We train for perfection because <strong>real situations demand perfection.</strong></p>
<div class="warning-box">
If you can't score 10/10 on a quiz when you have unlimited time and can review the material, how will you perform in a live conversation when you have 10 seconds to respond?
</div>
</div>

<div class="content-section">
<h3>🎯 The Final Truth</h3>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.3); border-color: #10B981; text-align: center; padding: 25px;">
<h4 style="margin-top: 0; color: #10B981; font-size: 1.3em;">Sales is the transfer of belief through trust.</h4>
<p style="margin-bottom: 0; font-size: 1.1em;">Everything else — scripts, frameworks, closes — are just tools to support that.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned 10 powerful lessons about the mindset of successful salespeople. Now it's time to prove you understood them.</p>
<p><strong>Remember:</strong></p>
<ul>
<li>📝 10 questions based on what you just read</li>
<li>🎯 You need <strong>10/10</strong> to proceed to Task 2</li>
<li>🔄 If you fail, you can retry immediately</li>
<li>💡 Questions test <strong>understanding</strong>, not memorization</li>
</ul>
</div>
`;

// Task 2 Content: Company Knowledge
const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 Who is Digital Heroes?</h3>
<p>Before you can sell for us, you need to <strong>understand who we are</strong> and why clients trust us.</p>
<div class="highlight-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(16, 185, 129, 0.2)); border: none;">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px; text-align: center;">
<div>
<div style="font-size: 2em; font-weight: 700; color: #10B981;">2.5M+</div>
<div style="color: #94a3b8; font-size: 0.9em;">YouTube Subscribers</div>
</div>
<div>
<div style="font-size: 2em; font-weight: 700; color: #6366F1;">40+</div>
<div style="color: #94a3b8; font-size: 0.9em;">Expert Developers</div>
</div>
<div>
<div style="font-size: 2em; font-weight: 700; color: #F59E0B;">2000+</div>
<div style="color: #94a3b8; font-size: 0.9em;">Stores Built</div>
</div>
<div>
<div style="font-size: 2em; font-weight: 700; color: #EC4899;">4.9★</div>
<div style="color: #94a3b8; font-size: 0.9em;">Fiverr Rating</div>
</div>
</div>
</div>
<p style="margin-top: 15px;">Our YouTube channel <a href="https://www.youtube.com/@DigitalMarketingHeroes" target="_blank" style="color: #60A5FA;">@DigitalMarketingHeroes</a> has taught millions about web development and digital marketing. When you mention this to clients, they recognize the name and trust us immediately.</p>
</div>

<div class="content-section">
<h3>💎 Premium Positioning</h3>
<p>Digital Heroes is a <strong>premium agency</strong>. We are NOT the cheapest option — and that's intentional.</p>
<div class="warning-box">
<strong>Why Premium?</strong>
<ul style="margin-bottom: 0;">
<li><strong>Better clients:</strong> Price-shoppers waste time negotiating, request endless revisions, and leave bad reviews. Premium prices filter them out.</li>
<li><strong>Quality work:</strong> Our developers earn properly, so they deliver properly.</li>
<li><strong>Real support:</strong> We provide 30-90 days of support, not "best of luck" after delivery.</li>
<li><strong>Credibility:</strong> Low prices signal desperation. Premium prices signal confidence.</li>
</ul>
</div>
<p><strong>The $200-300 freelancer reality:</b></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cheap Freelancer</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Template with logo swap, no speed optimization, no conversion focus, disappears after delivery</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Digital Heroes</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom conversion-focused design, speed optimization, proper support, revision guarantee, ongoing help</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>🚫 Non-Negotiable Rules</h3>
<p>These rules exist to protect both you and the company. Breaking them damages the entire team.</p>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-color: #EF4444;">
<strong style="color: #EF4444;">NEVER DO THESE:</strong>
<ul style="margin-bottom: 0;">
<li>❌ <strong>Never give discounts:</strong> If they can't afford us, let them go elsewhere</li>
<li>❌ <strong>Never work before payment:</strong> Full upfront payment, always</li>
<li>❌ <strong>Never give free consulting:</strong> Our expertise has value — don't solve their problems before they pay</li>
<li>❌ <strong>Never promise what we can't deliver:</strong> Under-promise, over-deliver</li>
<li>❌ <strong>Never badmouth competitors:</strong> Stay professional, focus on our value</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>💰 Why No Discounts? (Deep Dive)</h3>
<p>This is so important it deserves its own section.</p>
<div class="warning-box">
<strong>When you offer a discount, you're saying:</strong>
<ul style="margin-bottom: 0;">
<li>"I wasn't confident in the original price"</li>
<li>"My service isn't worth what I quoted"</li>
<li>"If you push, I'll bend"</li>
</ul>
</div>
<p><strong>What happens next:</strong></p>
<ul>
<li>They'll ask for MORE discounts on future projects</li>
<li>They'll refer friends who also expect discounts</li>
<li>They'll be more demanding (they "won" so they feel entitled)</li>
<li>You've trained them that your word means nothing</li>
</ul>
<div class="highlight-box">
<strong>Alternative to discounts:</strong> If budget is genuinely an issue, reduce SCOPE, not price. 
<br><br>
"I understand budget is tight. For $800, we could do the core store setup without the advanced features. Would that work better for you?"
</div>
</div>

<div class="content-section">
<h3>🎯 What We Actually Sell</h3>
<p>You're not selling "a website" or "Shopify development." You're selling:</p>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li>🚀 <strong>Revenue:</strong> CRO-optimized stores that convert visitors into customers</li>
<li>⚡ <strong>Speed:</strong> Fast-loading sites that don't lose impatient visitors</li>
<li>💎 <strong>Credibility:</strong> Professional design that makes their brand look trustworthy</li>
<li>🛡️ <strong>Peace of mind:</strong> Expert team + support period = they're not alone</li>
<li>⏰ <strong>Time:</strong> They can focus on their business while we handle the technical work</li>
</ul>
</div>
<p style="margin-top: 15px;">When a client says "I want a Shopify store," what they ACTUALLY want is <strong>a successful online business</strong>. We deliver that.</p>
</div>

<div class="content-section">
<h3>🚩 Red Flag Clients</h3>
<p>Not every client deserves our time. Learn to spot problematic clients early:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It's Bad</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"My last 4 developers were terrible"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The common factor in all failures is THEM</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can you match this $300 quote?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price-shopper who will haggle forever</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'll pay after I see the final work"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Doesn't trust anyone — endless revisions, possible non-payment</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need this in 2 days" (complex project)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unrealistic expectations, will blame you when it's not perfect</td>
</tr>
</table>
<div class="warning-box">
<strong>The 2+ Red Flags Rule:</strong> If a lead shows 2 or more red flags, politely disqualify them. Your time is better spent on quality clients.
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned about Digital Heroes' positioning, rules, and values. Now prove your understanding.</p>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
</ul>
</div>
`;

// Task 3 Content: Product Mastery
const task3Content = `
<h2>📚 TASK 3: PRODUCT MASTERY</h2>

<div class="content-section">
<h3>🎯 Why Product Knowledge Matters</h3>
<p><strong>You can't sell what you don't understand.</strong></p>
<p>When a client asks about your services and you hesitate, stumble, or sound unsure — you've already lost them. They came to an expert. If the expert doesn't know their own products, why should the client trust them?</p>
<div class="highlight-box">
Product mastery gives you:
<ul style="margin-bottom: 0;">
<li><strong>Confidence:</strong> Clients feel it when you know your stuff</li>
<li><strong>Speed:</strong> You answer questions instantly, not after checking</li>
<li><strong>Trust:</strong> Hesitation = doubt. Certainty = credibility</li>
<li><strong>Control:</strong> You guide the conversation instead of reacting</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>📦 Our Two Main Packages</h3>
<p>We keep it simple: <strong>two core packages</strong> that cover 90% of client needs.</p>

<div class="highlight-box" style="background: rgba(99, 102, 241, 0.2); border-color: #6366F1;">
<h4 style="color: #6366F1; margin-top: 0;">💎 PREMIUM PACKAGE — $1,200</h4>
<p><strong>Best for:</strong> New stores, small catalogs, standard needs</p>
<ul style="margin-bottom: 0;">
<li>✅ 5-page custom design (Home, Collection, Product, About, Contact)</li>
<li>✅ Up to 25 products uploaded</li>
<li>✅ Mobile-responsive design</li>
<li>✅ Speed optimization (85+ PageSpeed score)</li>
<li>✅ Basic SEO setup (meta titles, descriptions)</li>
<li>✅ Payment & shipping configuration</li>
<li>✅ <strong>30-day support</strong></li>
<li>✅ 1 training walkthrough session</li>
<li>✅ Unlimited revisions within scope</li>
</ul>
</div>

<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981; margin-top: 15px;">
<h4 style="color: #10B981; margin-top: 0;">👑 ENTERPRISE PACKAGE — $1,800</h4>
<p><strong>Best for:</strong> Established brands, large catalogs, complex needs</p>
<ul style="margin-bottom: 0;">
<li>✅ 10+ pages custom design</li>
<li>✅ <strong>Unlimited products</strong> uploaded</li>
<li>✅ Advanced animations & interactions</li>
<li>✅ Custom functionality (filters, lookbooks, size guides)</li>
<li>✅ Email popup & list integration</li>
<li>✅ <strong>Priority development</strong></li>
<li>✅ <strong>90-day support</strong></li>
<li>✅ Multiple training sessions</li>
<li>✅ Unlimited revisions within scope</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>⏱️ Delivery Timeline</h3>
<p>Our <strong>standard delivery is 14 days</strong> from order confirmation.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Delivery Type</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Timeline</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Notes</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">14 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Included in package price</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rush (7 days)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+$200 rush fee, subject to availability</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Express (5 days)</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5 days</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">+$400, only if content 100% ready</td>
</tr>
</table>
<div class="warning-box">
<strong>Critical for Rush Delivery:</strong> Client must have ALL content ready (logo, product images, descriptions, branding). Rush timeline only starts when we have everything. No exceptions.
</div>
</div>

<div class="content-section">
<h3>🛡️ Support Periods</h3>
<p>Support is what separates us from cheap freelancers who disappear after delivery.</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cheap Freelancers</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 days or "best of luck" after delivery</td>
</tr>
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Premium Package</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>30 days</strong> of post-delivery support</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Enterprise Package</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>90 days</strong> of post-delivery support</td>
</tr>
</table>
<p><strong>What's included in support:</strong></p>
<ul>
<li>Bug fixes and technical issues</li>
<li>Minor content updates</li>
<li>Questions and training</li>
<li>Troubleshooting integrations</li>
</ul>
<p><strong>NOT included in support:</strong></p>
<ul>
<li>Major new features (quoted separately)</li>
<li>Redesigns or scope changes</li>
<li>Third-party app issues</li>
</ul>
</div>

<div class="content-section">
<h3>💰 The MVP Option (When Budget is Tight)</h3>
<p>Sometimes a good lead genuinely can't afford our full packages. <strong>Never discount — reduce scope instead.</strong></p>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.2); border-color: #F59E0B;">
<h4 style="color: #F59E0B; margin-top: 0;">🚀 MVP PACKAGE — $800</h4>
<p><strong>Best for:</strong> Startups testing the market, limited initial budget</p>
<ul style="margin-bottom: 0;">
<li>✅ 3-page design (Home, Collection, Contact)</li>
<li>✅ Up to 15 products</li>
<li>✅ Mobile-responsive</li>
<li>✅ Basic speed optimization</li>
<li>✅ <strong>14-day support</strong></li>
<li>✅ Clear upgrade path to Premium later</li>
</ul>
</div>
<div class="warning-box" style="margin-top: 15px;">
<strong>Important:</strong> MVP is offered ONLY to qualified leads who pass M.T.N.D. but genuinely have budget constraints. It's NOT a discount — it's less scope for less money. Pathway to expand later is always mentioned.
</div>
</div>

<div class="content-section">
<h3>🎯 How to Present Packages</h3>
<p>The way you present options matters more than the options themselves.</p>

<h4>The Good-Better-Best Technique</h4>
<p>Human psychology: Most people choose the middle option. Position your target package in the middle.</p>
<div class="highlight-box">
<strong>Example Presentation:</strong><br><br>
"Based on what you've described, I'd recommend our <strong>Premium package at $1,200</strong> — it covers everything you need for launch. If you want the full premium experience with 90-day support and unlimited products, our <strong>Enterprise at $1,800</strong> is the way to go. And if you're testing the waters first, we have an <strong>MVP option at $800</strong> with fewer pages that you can expand later."
</div>

<h4>The Price Sandwich</h4>
<p>Never state price alone. Wrap it in value:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Our price is $1,200."</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"For a complete 5-page custom store with speed optimization, SEO setup, mobile-first design, and 30 days of support — $1,200."</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📋 What We Include (That Cheap Freelancers Don't)</h3>
<p>When clients compare us to $300-500 options, here's what they're missing:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Feature</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Digital Heroes</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cheap Freelancer</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design Approach</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom CRO-focused</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Template with logo swap</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed Score</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">85+ guaranteed</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not measured</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO Setup</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta titles, descriptions, structure</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Not included</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile Design</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile-first priority</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It works on mobile"</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full walkthrough session</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">None</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Support</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">30-90 days included</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">7 days or nothing</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revisions</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unlimited within scope</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-2 rounds max</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>💸 Post-Project Upsells</h3>
<p>After the initial project, there are recurring revenue opportunities:</p>
<div class="highlight-box">
<ul style="margin-bottom: 0;">
<li><strong>Monthly Maintenance:</strong> $100-300/month — ongoing updates, monitoring, support</li>
<li><strong>Additional Pages:</strong> $100-200 per page</li>
<li><strong>Product Uploads:</strong> $2-5 per product for bulk additions</li>
<li><strong>Custom Features:</strong> Quoted per project</li>
<li><strong>Speed Optimization:</strong> $200 for existing stores</li>
<li><strong>SEO Enhancement:</strong> $300-500 for advanced setup</li>
</ul>
</div>
<p style="margin-top: 15px;">Always mention future services during closing: <em>"After support period ends, we offer monthly maintenance if you want ongoing help."</em></p>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You now know every package, price, timeline, and feature. Prove your mastery.</p>
<ul>
<li>📝 10 questions about products and pricing</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 4</li>
</ul>
</div>
`;

// Task 4 Content: Lead Qualification
const task4Content = `
<h2>📚 TASK 4: LEAD QUALIFICATION</h2>

<div class="content-section">
<h3>🎯 Why Qualification Matters</h3>
<p>Not every person who messages you deserves your time. In fact, <strong>most don't.</strong></p>
<p>A single bad client can cost you:</p>
<ul>
<li>20+ hours of wasted communication</li>
<li>Endless revision requests</li>
<li>Mental stress and frustration</li>
<li>Potential negative review</li>
<li>Time you could've spent on 3+ good clients</li>
</ul>
<div class="warning-box">
<strong>The Math of Bad Clients:</strong><br>
1 nightmare client at $1,200 who takes 40 hours of drama = $30/hour<br>
3 good clients at $1,200 each who take 10 hours each = $120/hour<br><br>
<strong>20% of your leads will cause 80% of your problems.</strong> Qualification helps you focus on the other 80%.
</div>
</div>

<div class="content-section">
<h3>📊 The M.T.N.D. Framework</h3>
<p>Every lead gets scored on four criteria:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(99, 102, 241, 0.3);">
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">M</strong><br>Money</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">T</strong><br>Timeline</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">N</strong><br>Need</td>
<td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center;"><strong style="font-size: 1.5em;">D</strong><br>Decision-Maker</td>
</tr>
</table>

<h4 style="color: #10B981;">💰 M — Money</h4>
<p><em>"Do they have budget for our services?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Budget isn't an issue for quality work"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm looking in the $1,000-2,000 range"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What's your cheapest option?"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I found someone for $300, can you match?"</td>
</tr>
</table>

<h4 style="color: #6366F1;">⏱️ T — Timeline</h4>
<p><em>"When do they actually need this?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Ready to start this week"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Launch planned for next month"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Need it by tomorrow" (for complex project)</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just exploring for someday"</td>
</tr>
</table>

<h4 style="color: #F59E0B;">🎯 N — Need</h4>
<p><em>"Is there a real problem to solve?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Launching my brand, need professional store"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Current store isn't converting, need redesign"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Just curious about prices"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Thinking about maybe starting a business"</td>
</tr>
</table>

<h4 style="color: #EC4899;">👤 D — Decision-Maker</h4>
<p><em>"Can this person say YES?"</em></p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm the owner, I make all decisions"</td>
</tr>
<tr style="background: rgba(16, 185, 129, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Green Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"It's my business, I can decide today"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Need to check with my partner/team/spouse"</td>
</tr>
<tr style="background: rgba(239, 68, 68, 0.15);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm researching for someone else"</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>❓ The 5 Quick Qualification Questions</h3>
<p>Ask these within your first few messages:</p>
<div class="highlight-box">
<ol style="margin-bottom: 0;">
<li><strong>"What's your budget range for this project?"</strong> → Tests Money</li>
<li><strong>"When do you need this completed?"</strong> → Tests Timeline</li>
<li><strong>"Have you worked with developers before?"</strong> → Reveals expectations & history</li>
<li><strong>"Are you the decision-maker on this?"</strong> → Tests Decision-Maker</li>
<li><strong>"What does success look like for you?"</strong> → Reveals Need + expectations</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🚩 The Complete Red Flag List</h3>
<p>Watch for these warning signs:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
<tr style="background: rgba(239, 68, 68, 0.2);">
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Red Flag</strong></td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Really Means</strong></td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "What's cheapest?"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price-shopper, will never see value</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Need it in 2-3 days"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unrealistic, will blame you for rushed quality</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "My last 3 developers failed"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Common factor is THEM, not bad luck</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Pay after I see result"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Trust issues, risk of non-payment</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "It's just a simple site"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Scope creep coming, will expect more for less</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Approve every small step"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Micromanager, triple the communication time</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 Rude/condescending tone</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Will get worse under stress of project</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚩 "Just exploring options"</td>
<td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No real need, wasting your time</td>
</tr>
</table>
</div>

<div class="content-section">
<h3>📊 The 2+ Red Flags Rule</h3>
<p>Here's how to interpret your qualification:</p>
<div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: #10B981;">
<strong>0-1 Red Flags:</strong> ✅ PROCEED — Engage normally
</div>
<div class="highlight-box" style="background: rgba(245, 158, 11, 0.2); border-color: #F59E0B; margin-top: 10px;">
<strong>2 Red Flags:</strong> ⚠️ CAUTION — Proceed with higher standards, be ready to walk
</div>
<div class="highlight-box" style="background: rgba(239, 68, 68, 0.2); border-color: #EF4444; margin-top: 10px;">
<strong>3+ Red Flags:</strong> 🚫 DISQUALIFY — Politely decline and move on
</div>
</div>

<div class="content-section">
<h3>🗣️ Polite Disqualification Scripts</h3>
<p>When you need to decline, do it professionally:</p>
<div class="highlight-box">
<strong>For Price-Shoppers:</strong><br>
"Based on what you're describing, it sounds like you're looking for something more budget-friendly. We specialize in premium development for businesses ready to invest $1,200+. I'd recommend checking [Fiverr / freelancer platforms] for options in your range. Best of luck!"
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>For Unrealistic Timelines:</strong><br>
"For the quality we deliver, we need at least 10-14 days. Rush delivery in 3 days wouldn't give you the results either of us would be proud of. If your timeline is flexible, we'd love to help!"
</div>
<div class="highlight-box" style="margin-top: 15px;">
<strong>For Multiple Red Flags:</strong><br>
"After reviewing your requirements, I don't think we're the right fit for this project. We specialize in [specific niche] and want to make sure you find the best match for your needs. Wishing you success!"
</div>
</div>

<div class="content-section">
<h3>💡 The Golden Rule of Qualification</h3>
<div class="warning-box">
<strong>"If you feel uncomfortable in the first conversation, it will only get worse during the project. Trust your gut."</strong>
</div>
<p style="margin-top: 15px;">One bad client at $2,000 can cost more than 10 good clients in:</p>
<ul>
<li>Time spent on revisions and complaints</li>
<li>Mental energy and stress</li>
<li>Potential bad review</li>
<li>Missed opportunities with good clients</li>
</ul>
<p><strong>It's better to say NO to a bad $2,000 project than suffer through a nightmare.</strong></p>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You now know how to qualify leads and protect your time. Prove your understanding.</p>
<ul>
<li>📝 10 questions about lead qualification</li>
<li>🎯 Score <strong>10/10</strong> to proceed to Task 5</li>
</ul>
</div>
`;

// Quiz Questions - Task 1: Mindset (10 Questions)
const task1Quiz = [
    { q: "A trainee reads training quickly, skips sections thinking 'I already know this'. According to the training, this person is:", o: ["An efficient learner who will succeed faster", "A 'Tourist' who will likely quit when challenged", "A confident professional ready for advanced content", "Someone who should skip to the certification exam"], c: 1 },
    { q: "According to the training, what is the PRIMARY role of a salesperson?", o: ["To use persuasion techniques to maximize revenue", "To find people with problems and offer solutions", "To memorize scripts and repeat them perfectly", "To negotiate the lowest possible delivery timeline"], c: 1 },
    { q: "A client says 'Your price is too high' and leaves. What does this rejection ACTUALLY mean?", o: ["You are a bad salesperson who should change careers", "Your services are overpriced and need discounting", "They rejected the offer at this moment for their reasons, not you personally", "The client is cheap and you should be relieved they left"], c: 2 },
    { q: "Salesperson A: 10 leads, 3 closes (30%). Salesperson B: 50 leads, 10 closes (20%). Who performs better?", o: ["Salesperson A — higher conversion percentage matters most", "Both equal — different strategies yield same results", "Salesperson B — 10 total closes beats 3 total closes", "Cannot determine without knowing deal sizes"], c: 2 },
    { q: "What separates 10,000 hours of experience from 10,000 hours of deliberate practice?", o: ["There's no difference, time invested is what matters", "Deliberate practice is easier and requires less focus", "Deliberate practice involves reviewing, feedback, and pushing past comfort", "Experience is superior because real situations teach more"], c: 2 },
    { q: "You wake up feeling unmotivated with 5 unread client messages. What should you do?", o: ["Wait until tomorrow when motivation returns", "Reply with brief answers since you're not at your best", "Respond anyway — discipline means working regardless of feelings", "Ask a colleague to handle your messages today"], c: 2 },
    { q: "Why does this training require 10/10 (100%) on every quiz instead of 80%?", o: ["To make training intentionally difficult and filter applicants", "In real sales, you either handle situations correctly or lose the deal", "Because the company has strict documentation requirements", "To ensure trainees memorize content word-for-word"], c: 1 },
    { q: "A trainee completes 6/10 tasks then stops saying 'I know enough to start selling'. What will likely happen?", o: ["They'll succeed because eagerness to start is valuable", "They'll fail — lacking discipline to finish means they'll quit when challenged", "They'll outperform those who completed all 10 tasks", "They should receive credit for their initiative and confidence"], c: 1 },
    { q: "The training states your income is determined by:", o: ["Luck, market conditions, and economic factors", "Hours worked regardless of quality or skill", "The average of your most valuable skills", "Your age, experience, and educational background"], c: 2 },
    { q: "Client sends angry message complaining previous freelancer scammed them. They're rude and demanding proof. Your mindset should be:", o: ["Get offended and suggest they find someone else", "Understand their anger is about past experience, respond professionally", "Immediately offer a discount to calm them down", "Ignore the message — rude clients aren't worth the trouble"], c: 1 }
];

// Quiz Questions - Task 2: Company Knowledge (10 Questions)
const task2Quiz = [
    { q: "Digital Heroes positions itself as premium. What is the PRIMARY reason for no discounts?", o: ["Operational costs are too high for flexibility", "Fiverr's platform policies prohibit discounting", "Discounting signals low confidence and attracts price-shoppers", "The founder personally dislikes negotiations"], c: 2 },
    { q: "Client: 'Found someone for $300. Match that?' Correct response approach:", o: ["Match the price to secure the deal", "Offer 50% discount as compromise", "Explain value difference, let them choose cheaper if they prefer", "Argue why $300 services are terrible"], c: 2 },
    { q: "Digital Heroes' approximate Fiverr rating and store count for credibility:", o: ["4.9 stars, 2000+ stores", "3.5 stars, 500+ stores", "5.0 stars, 100+ stores", "4.5 stars, 1000+ stores"], c: 0 },
    { q: "What should be discussed BEFORE taking a client's order?", o: ["Logo colors and brand preferences", "Store access credentials and login info", "Hard technical problems and complex requirements", "Product images and content details"], c: 2 },
    { q: "Client: 'My last 4 developers were terrible.' This indicates:", o: ["A great client who deserves better service", "An unlucky person we should help", "A red flag — the common factor in all failures is THEM", "Someone we should offer extra revisions to"], c: 2 },
    { q: "Digital Heroes' payment policy for most projects:", o: ["50% upfront, 50% after delivery", "Full payment upfront before work begins", "Payment after client approves final work", "Monthly installments over project duration"], c: 1 },
    { q: "Why refuse 'free consulting' before order?", o: ["We don't know answers until we start", "Our expertise has value — giving solutions before order lets them take advice elsewhere", "It takes too much time from paid work", "Fiverr platform prohibits it"], c: 1 },
    { q: "What makes Digital Heroes different from a $200-300 Fiverr freelancer?", o: ["We just charge more for identical work", "Conversion-focused design, speed optimization, proper support, guarantees", "We work slower but more carefully", "We only accept big brand clients"], c: 1 },
    { q: "Client: 'Can I pay after I see the final result?' Best response:", o: ["Yes, we can accommodate first-time clients", "Explain upfront payment enables dedicated resources, preview before live, proven track record", "Let me check with my manager about exceptions", "Just say 'No' with no explanation"], c: 1 },
    { q: "The relationship between price and client quality:", o: ["Lower prices attract better clients who appreciate savings", "Higher prices attract quality-focused clients; lower prices attract difficult price-shoppers", "Price has no effect on client quality", "Price should be adjusted based on how wealthy clients appear"], c: 1 }
];

// Quiz Questions - Task 3: Product Mastery (10 Questions)
const task3Quiz = [
    { q: "The two main package tiers in Digital Heroes' pricing:", o: ["Starter ($500) and Professional ($800)", "Premium ($1,200) and Enterprise ($1,800)", "Basic ($300) and Advanced ($600)", "Bronze ($1,000) and Gold ($2,000)"], c: 1 },
    { q: "Client: 'Just 5 products, need simple store.' Appropriate recommendation:", o: ["Enterprise ($1,800) because always upsell", "Tell them we don't work with small stores", "Premium ($1,200) for smaller stores with standard needs", "Custom $500 package not in standard offerings"], c: 2 },
    { q: "Standard delivery timeline for Shopify store projects:", o: ["3-5 days", "7 days", "14 days", "30 days"], c: 2 },
    { q: "Client wants unlimited products, custom functionality, 90 days support. Recommend:", o: ["Premium ($1,200)", "Create custom package for $1,000", "Enterprise ($1,800)", "Tell them this isn't possible"], c: 2 },
    { q: "Support period included with Premium ($1,200) package:", o: ["7 days", "14 days", "30 days", "90 days"], c: 2 },
    { q: "Client: 'What if I need changes after support ends?' Correct response:", o: ["Too bad, should have asked during support", "Mention monthly maintenance plans as ongoing option", "We'll do it free because we value relationships", "You'll need to hire someone else"], c: 1 },
    { q: "When presenting packages, recommended approach:", o: ["Only mention cheapest option to get the sale", "Only mention most expensive to maximize revenue", "Present 2-3 options and let them choose based on needs", "Wait for them to ask about pricing first"], c: 2 },
    { q: "What's included that cheap competitors DON'T include:", o: ["Basic theme installation", "Speed optimization, SEO setup, mobile responsiveness, training", "Product uploads only", "Just homepage design"], c: 1 },
    { q: "Client has $700 budget but needs Premium ($1,200) scope. Correct approach:", o: ["Discount to $700 to win the deal", "Offer reduced-scope MVP at $700, can expand later", "Tell them to return when they have more money", "Do full Premium work for $700 to build relationship"], c: 1 },
    { q: "Client: 'Your Premium seems expensive compared to others.' Highlight:", o: ["Just say 'we're worth it' without specifics", "Specific deliverables: custom design, speed optimization, SEO, revisions, support, training", "Offer to match competitor pricing", "Tell them they're wrong about the market"], c: 1 }
];

// Quiz Questions - Task 4: Lead Qualification (10 Questions)
const task4Quiz = [
    { q: "M.T.N.D. in lead qualification stands for:", o: ["Marketing, Technology, Networking, Design", "Money, Timeline, Need, Decision-maker", "Motivation, Trust, Negotiation, Delivery", "Management, Timing, Necessity, Documentation"], c: 1 },
    { q: "Lead: 'What's cheapest? Comparing 10 sellers.' This indicates about Money:", o: ["Green flag — careful with money means serious buyer", "Neutral — need more information first", "Red flag — price-shopper focused on cost, not value", "Green flag — comparing options shows they're serious"], c: 2 },
    { q: "Client: 'Need this done by tomorrow, urgent!' How to interpret:", o: ["Great opportunity — urgent clients pay premium", "Red flag — unrealistic timeline, will blame you for rushed work", "Normal request — all clients want things fast", "Green flag — shows they're ready to buy immediately"], c: 1 },
    { q: "'Are you the decision maker?' 'Need to check with partner and wife.' This indicates:", o: ["Green flag — responsible behavior", "Red flag — multiple decision-makers means delays and deal death", "Green flag — family involvement shows commitment", "Neutral — doesn't matter who decides"], c: 1 },
    { q: "'Just exploring options for someday.' How does this score on Need:", o: ["Green flag — early engagement lets you shape needs", "Red flag — no clear need means no urgency, will waste time", "Green flag — honesty is valuable", "Neutral — all leads start this way"], c: 1 },
    { q: "How many red flags should trigger client disqualification:", o: ["2 or more red flags = politely disqualify", "1 red flag = immediately disqualify", "5 or more = consider disqualifying", "Red flags don't matter if they have money"], c: 0 },
    { q: "The 5 Quick Qualification Questions to ask first:", o: ["Name, email, phone, address, company size", "Budget range, timeline, previous dev experience, decision-maker status, success definition", "Favorite color, theme, product count, shipping, payment processor", "Age, location, industry, years in business, revenue"], c: 1 },
    { q: "'Budget isn't an issue for quality work' indicates:", o: ["Red flag — they're lying about money", "Neutral — everyone says this", "Red flag — trying to get you to overcharge", "Green flag — willing to pay for value, not price-shopping"], c: 3 },
    { q: "2 red flags identified (price-shopper + unrealistic timeline). Correct approach:", o: ["Ghost them — stop responding", "Tell them directly they're a bad client", "Polite disqualification: acknowledge needs, explain not right fit, wish well", "Try to convert anyway — all revenue matters"], c: 2 },
    { q: "Client passes M.T.N.D. but says 'My last 5 developers all failed.' What now:", o: ["Proceed immediately — passed M.T.N.D.", "Recognize 'Bad History Pattern' red flag, probe deeper before committing", "Offer discount to win them from bad experiences", "Tell them developers are generally unreliable"], c: 1 }
];

// Quiz Questions - Task 5: Response Templates (10 Questions)
const task5Quiz = [
    { q: "MAXIMUM response time for Fiverr inquiry during business hours:", o: ["Under 5 minutes", "1 hour", "30 minutes", "Same day is acceptable"], c: 0 },
    { q: "General inquiry: 'Need Shopify store for clothing brand.' First response should include:", o: ["Just send price list and wait", "Thank them, ask 5 qualifying questions, share relevant portfolio, mention stats", "Ask 'What's your budget?' as only question", "Send 2-page company history document"], c: 1 },
    { q: "First message: 'How much do you charge?' What response template:", o: ["General Inquiry template", "Urgent Timeline template", "Just send '$1,200' and wait", "Price-Focused — don't give exact price, ask qualifying questions first"], c: 3 },
    { q: "'Need this launched in 5 days, can you help?' Correct approach:", o: ["Say 'yes' immediately to win deal", "Say 'no, we can't do rush jobs'", "Confirm you can help, list what YOU need from THEM, ask if ready", "Charge triple without explaining"], c: 2 },
    { q: "'Talking to 3 other developers. What makes you different?' Response:", o: ["Trash talk competitors", "List differentiators (rating, revisions, support), ask what matters to THEM", "Offer to match any lower price", "Tell them to go with whoever's cheapest"], c: 1 },
    { q: "Sent offer 24 hours ago, no response. First follow-up should say:", o: ["Are you going to order or not?", "I'll give 20% off if you order today", "Did you get my offer? Any questions I can answer?", "Wait another week before following up"], c: 2 },
    { q: "MAXIMUM follow-ups for an unresponsive lead:", o: ["1", "3", "10", "Unlimited until they respond"], c: 1 },
    { q: "+48 hour follow-up should create gentle urgency. Recommended approach:", o: ["Last chance, ordering closing soon!", "Mention schedule filling up, offer to reserve slot if planning to move forward", "Double the discount if order now", "Why haven't you responded?"], c: 1 },
    { q: "Portfolio examples to share should be:", o: ["Any random stores from portfolio", "Stores in SIMILAR niche to what client is building", "Only biggest/most expensive projects", "No examples — wait until they ask"], c: 1 },
    { q: "Client silent after +72hr follow-up. Final message:", o: ["Fine, I guess you don't want my help", "This is your LAST CHANCE", "No pressure, closing for now. Reach out when ready. Best of luck!", "Send 5 more follow-ups over next month"], c: 2 }
];

// Quiz Questions - Task 6: Sales Psychology (10 Questions)
const task6Quiz = [
    { q: "The 80/20 Rule in sales means:", o: ["80% of revenue from 20% of clients", "Spend 80% prospecting, 20% closing", "Listen 80%, speak 20% — let client reveal needs", "Close 80% of deals, lose 20%"], c: 2 },
    { q: "The '3-Yes Technique' involves:", o: ["Offering 3 package options", "Following up 3 times maximum", "Getting 3 small agreements before main pitch, putting them in agreeing mode", "Asking for the sale 3 times"], c: 2 },
    { q: "Client: 'Facebook ads didn't really work for us.' Using Mirror Technique:", o: ["That's too bad. Anyway, about our services...", "'...didn't work for you?' (repeat last words as question)", "Facebook ads are terrible, stop using them", "How much did you spend on ads?"], c: 1 },
    { q: "The 'Pain Calculator' technique involves:", o: ["Asking how much physical pain they're in", "Calculating discount amount", "Measuring emotional response", "Converting problem into specific dollar amounts lost per day/week/month"], c: 3 },
    { q: "Instead of 'Do you want to proceed?', Assumptive Close says:", o: ["So should we do this or not?", "Should we start Monday or would Wednesday work better?", "Let me know if you decide to move forward", "Take your time deciding"], c: 1 },
    { q: "Silence Technique after stating price:", o: ["Immediately offer discount", "Explain why it's worth it for 5 minutes", "Stop talking and wait — first to speak loses leverage", "Ask if it's too expensive"], c: 2 },
    { q: "Contrast Principle suggests:", o: ["Show cheapest option first", "Show expensive option first ($15K), then actual price ($3.5K) feels like bargain", "Show only one option", "Hide the price entirely"], c: 1 },
    { q: "Labeling Technique involves:", o: ["Putting labels on products", "Naming their emotion before they do: 'Sounds like you've been burned before...'", "Categorizing by budget", "Creating name tags"], c: 1 },
    { q: "'Let me think about it.' Takeaway Close response:", o: ["Take all the time you need", "Give discount if decide today", "Actually, we might not be the right fit for brands not ready to move fast", "What's there to think about?"], c: 2 },
    { q: "Why do clients often reject good offers (Brain Pain)?", o: ["They don't have money", "Brain releases cortisol with change, making status quo feel safer even when it's not", "They don't understand the offer", "Always trying to negotiate"], c: 1 }
];

// Quiz Questions - Task 7: Objection Handling (10 Questions)
const task7Quiz = [
    { q: "What do objections actually indicate:", o: ["Client will never buy", "You've failed as salesperson", "Objections are BUYING SIGNALS — if they didn't care, they'd leave", "You should offer discount immediately"], c: 2 },
    { q: "'Your price is too high. Found someone for $500.' Response:", o: ["Match the $500 price", "Tell them $500 person is a scammer", "Acknowledge, break down what's included, explain ROI, ask which features okay to skip", "Take it or leave it"], c: 2 },
    { q: "'Feel, Felt, Found' framework structure:", o: ["I feel you should buy. You felt same. Found a deal.", "I understand how you FEEL. Others FELT same. What they FOUND was...", "Feel free to leave. I felt insulted. Found better client.", "I feel tired. Felt tired. Found sleep."], c: 1 },
    { q: "'I need to think about it.' Do FIRST:", o: ["Say okay and end conversation", "Ask what specifically they need to think about — uncover REAL objection", "Offer discount to speed decision", "Send 10 follow-ups immediately"], c: 1 },
    { q: "Price Flowchart: Client has 'Value Issue' (Why so much for website?). Response:", o: ["Lower your price", "Show ROI calculation and portfolio before/after — prove value", "Tell them they're wrong", "End conversation"], c: 1 },
    { q: "Client can't afford $1,500 but is good lead. Scope Reduction technique:", o: ["Discount to whatever they can afford", "Reject them entirely", "Do full work hoping they pay more later", "Never lower PRICE — reduce SCOPE, offer MVP with fewer features"], c: 3 },
    { q: "'How do I know you won't disappear like last developer?' (Trust objection):", o: ["Just trust me", "Cite track record (2000+ stores, 4.9 rating), explain process, offer references", "'That's insulting, I'm not like them'", "Offer to work free first to prove yourself"], c: 1 },
    { q: "'Your competitor quoted $800 for same thing.' Response:", o: ["Match $800 immediately", "Ask what's included in $800, highlight your differentiators, ask priorities", "Trash talk competitor", "Say 'then go with them'"], c: 1 },
    { q: "Inoculation Technique means:", o: ["Getting medical injection before calls", "Address objections BEFORE client raises them: 'You might be thinking expensive...'", "Avoiding all difficult topics", "Injecting urgency into every message"], c: 1 },
    { q: "'I'll think about it.' After uncovering fails, critical next step:", o: ["Let them go without follow-up plan", "Send discount offers daily", "Mark as lost forever", "Set SPECIFIC follow-up time: 'Check back Thursday or Friday?'"], c: 3 }
];

// Quiz Questions - Task 8: Closing Techniques (10 Questions)
const task8Quiz = [
    { q: "The 'Assumptive Close' technique means:", o: ["Assuming client won't buy and preparing for rejection", "Asking 'Would you like to buy this?'", "Waiting for client to ask how to purchase", "Assuming they're buying and asking logistics: 'Start Monday or Wednesday?'"], c: 3 },
    { q: "'Price Sandwich' technique means:", o: ["Offering three different prices", "Hiding price between sandwiches", "Never state price alone — wrap in value: 'For complete store with X, Y, Z — $1,200'", "Give lowest price first"], c: 2 },
    { q: "'Good-Better-Best' pricing presentation means:", o: ["Only show best package", "Show cheapest only", "Present 3 tiers — most clients choose middle option", "Telling them your pricing is best in market"], c: 2 },
    { q: "'Upfront Contract' technique involves:", o: ["Signing legal contract before call", "Setting expectations at START: 'By end, we'll know if fit. If yes, next steps. If not, no pressure.'", "Asking for payment upfront", "Never discussing contracts until after sale"], c: 1 },
    { q: "Client seems ready but hasn't said yes. 'Delay Close' technique:", o: ["Wait indefinitely for decision", "Offer discount to speed up", "Tell them to take as long as needed", "Book specific follow-up: 'When should I check back — Thursday or Friday?'"], c: 3 },
    { q: "'Negative Close' technique involves:", o: ["Being negative about your product", "Telling reasons not to buy", "Disqualifying yourself first: 'If you just need basic store, we might not be right fit...'", "Ending conversation negatively"], c: 2 },
    { q: "'If I Could, Would You' technique asks:", o: ["If I could give discount, would you buy today?", "If I could address your specific concern, would you move forward?", "If I could read your mind, would you tell me?", "If I could guarantee success, would you pay double?"], c: 1 },
    { q: "'Options Close' technique:", o: ["Give only one option to simplify", "Let them create own options", "Always give 2-3 options: 'Premium at $1,200 or Enterprise at $1,800?'", "Offer unlimited options"], c: 2 },
    { q: "Client says 'Yes, let's do it!' What now:", o: ["Keep explaining why they made good decision for 10 minutes", "Offer additional discounts as thank you", "Stop selling immediately — send invoice, confirm details, don't talk them out of it", "Ask if they're really sure"], c: 2 },
    { q: "Creating urgency ethically means:", o: ["Lying about limited availability", "Using real scarcity: schedule filling, prices increasing, limited slots", "Threatening price will triple tomorrow", "Telling competitors will steal customers tonight"], c: 1 }
];

// Quiz Questions - Task 9: Practice Scenarios (10 Questions)  
const task9Quiz = [
    { q: "First message: 'Hi, need Shopify store. How much?' FIRST action:", o: ["Send price list: 'Premium $1,200, Enterprise $1,800'", "Use Price-Focused template: Ask qualifying questions before prices", "Say 'It depends' and wait", "Tell them to check gig description"], c: 1 },
    { q: "Client: Fashion brand, 50 products, logo ready, 3 weeks, budget 'not issue for quality'. M.T.N.D. score:", o: ["Cold lead — too many products", "Warm — need more info", "Hot lead — all green flags: budget, timeline, need, likely decision-maker", "Disqualify — 50 products too complex"], c: 2 },
    { q: "'Love portfolio but $1,200 more than planned. Friend got store for $400. Match?' Response:", o: ["Sure, can do $400 for you", "Your friend got ripped off", "Acknowledge budget, explain value difference, offer scope reduction if needed, never match $400", "Take it or leave it at $1,200"], c: 2 },
    { q: "After 20 min chat, present $1,800 Enterprise. 'Sounds perfect. Let me run by partner.' Response:", o: ["Great, talk soon!' and end", "Offer to join call with both, set specific follow-up: 'Check back Thursday or Friday?'", "You should decide yourself", "Okay, email when decided"], c: 1 },
    { q: "Client has 3 red flags: 'What's cheapest?', 'Do in 4 days?', 'Last 2 devs were idiots'. Action:", o: ["Try harder — revenue is revenue", "Polite disqualification: 'We might not be right fit. Specialize in premium with realistic timelines.'", "Argue about previous developers", "Offer 50% discount to win them"], c: 1 },
    { q: "Quoted $1,500. 'Reasonable, but only have $900 now. Work something out?' Good lead with green flags except budget:", o: ["Sorry, can't help", "Drop price to $900 for same scope", "Scope-reduced MVP at $900: 3-page store, 15 products, 14-day support. Add more later.", "Save up and come back"], c: 2 },
    { q: "Handled all objections. Client seems ready. Best closing combination:", o: ["Keep explaining features 20 more minutes", "Summary Close (recap value) → Options Close (Premium or Enterprise?) → Assumptive (Monday or Wednesday?)", "So do you want to buy or not?", "Wait silently until they bring up next steps"], c: 1 },
    { q: "Client: 'Yes, $1,800 Enterprise!' Immediate next step:", o: ["Explain 5 more reasons why good decision", "Offer additional discount as reward", "Ask if really sure about spending that much", "Stop selling, thank, send invoice, confirm start date"], c: 3 },
    { q: "Before handing to dev team, MUST document:", o: ["Just name and email", "Nothing — dev team will figure out", "Complete handoff: client info, niche, products, branding status, ALL features, timeline, special requests", "Only what products they're selling"], c: 2 },
    { q: "Week after delivery, client: 'Love the store! You guys are amazing!' Smart sales move:", o: ["Just say 'Thanks!' and close", "Ignore — project done", "Thank, ask for review, then referral: 'Know anyone else launching a store?'", "Try selling second store immediately"], c: 2 }
];

// Quiz Questions - Task 10: Final Certification (20 Questions)
const task10Quiz = [
    { q: "PRIMARY job of a salesperson:", o: ["Convincing people to buy things they don't need", "Finding people with problems and offering solutions", "Talking features until they agree", "Negotiating lowest possible price"], c: 1 },
    { q: "80/20 rule in sales:", o: ["80% revenue from 20% clients", "80% prospecting, 20% closing", "Listen 80%, talk 20% — let client reveal needs", "Work 80%, rest 20%"], c: 2 },
    { q: "M.T.N.D. stands for:", o: ["Marketing, Technology, Networking, Design", "Money, Timeline, Need, Decision-maker", "Motivation, Trust, Negotiation, Delivery", "Management, Timing, Necessity, Documentation"], c: 1 },
    { q: "How many red flags trigger disqualification:", o: ["1 red flag", "2 or more red flags", "5 or more", "Red flags irrelevant if paying"], c: 1 },
    { q: "Maximum Fiverr response time during business hours:", o: ["Same day", "Under 5 minutes", "30 minutes", "1 hour"], c: 1 },
    { q: "'How much charge?' without context — respond with:", o: ["Exact price immediately", "Say 'It depends' and wait", "Ask qualifying questions first, then present ranges", "Send gig description link"], c: 2 },
    { q: "Scope Reduction technique:", o: ["Lowering price to match budget", "Reducing scope to match budget — never reducing price for same work", "Asking them to reduce requirements", "Removing features without telling"], c: 1 },
    { q: "Silence Technique after stating price:", o: ["Offer discount immediately", "Explain worth for 5 minutes", "Stay silent, wait for response — first to speak loses leverage", "Ask if too expensive"], c: 2 },
    { q: "'Feel, Felt, Found' structure:", o: ["I feel you're wrong", "I feel frustrated, you felt bad, we found nothing", "I understand how you FEEL. Others FELT same. What they FOUND was...", "You should feel lucky"], c: 2 },
    { q: "'3-Yes Technique' involves:", o: ["Saying yes 3 times loudly", "3 packages", "3 small agreements before pitch to create agreeing mode", "3 follow-ups"], c: 2 },
    { q: "'Bad History Pattern' red flag:", o: ["New to ecommerce", "'Last 3-4 developers failed' — common factor is THEM", "One bad experience", "Worked with competitors"], c: 1 },
    { q: "Digital Heroes payment policy:", o: ["50% upfront, 50% after", "After delivery", "Full payment upfront before work (90% projects)", "Monthly installments"], c: 2 },
    { q: "Assumptive Close sounds like:", o: ["Do you want to buy?", "Should we start Monday or Wednesday?", "Let me know if interested", "Take your time"], c: 1 },
    { q: "Max follow-ups for unresponsive lead:", o: ["1", "3", "10", "Unlimited"], c: 1 },
    { q: "Why 10/10 required (not 80%):", o: ["Make training difficult", "In real sales, handle it right or lose deal — no 80%", "Company policy", "Filter out most trainees"], c: 1 },
    { q: "Package presentation approach:", o: ["Most expensive only", "Cheapest only", "2-3 options, let them choose", "Don't mention pricing"], c: 2 },
    { q: "Client says 'Yes!' Your action:", o: ["Explain 5 more good reasons", "Stop selling, send invoice, confirm timeline", "Ask if really sure", "Offer additional discount"], c: 1 },
    { q: "Contrast Principle:", o: ["Compare negatively to competitors", "Show expensive ($15K) first, making your price ($3.5K) feel like bargain", "Never mention other prices", "Match all competitor prices"], c: 1 },
    { q: "Handoff documentation should include:", o: ["Just name and email", "Nothing", "Complete: details, niche, products, branding, features, timeline, requests", "Only payment amount"], c: 2 },
    { q: "Happy client post-delivery. Smart move:", o: ["End immediately", "Thank, ask for review, ask for referral", "Sell 3 more stores immediately", "Ignore message"], c: 1 }
];

// Export all quizzes
const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
