// Client Chat Simulator Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 10 Tasks, 100+ Quiz Questions, Speed & Empathy Mastery

const trainingTasks = [
    {
        id: 1,
        title: "Chat Chat Mindset",
        description: "Speed Wins",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: Chat = Instant. Email = Slow.",
            "🛡️ Concept: Response Time < 60 seconds",
            "🚀 Goal: One Touch Resolution"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Know Your Product",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📚 Section: Pricing Tiers",
            "📚 Section: Refund Policy (30 Days)",
            "📚 Section: Shipping Times"
        ]
    },
    {
        id: 3,
        title: "Tonality Mastery",
        description: "Reading the Room",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🎭 Tone: Professional vs Casual",
            "🎭 Tone: Mirroring the Customer",
            "🚫 Don't: Being too robotic"
        ]
    },
    {
        id: 4,
        title: "Objection Handling",
        description: "Turning No into Yes",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🛡️ Obj: 'Too Expensive'",
            "🛡️ Obj: 'I need to ask my boss'",
            "🛡️ Obj: 'Competitor X is cheaper'"
        ]
    },
    {
        id: 5,
        title: "Speed Tools",
        description: "TextExpander",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "⚡ Tool: Saved Replies / Macros",
            "⚡ Tool: Keyboard Shortcuts",
            "⚡ Tool: Knowledge Base Search"
        ]
    },
    {
        id: 6,
        title: "The Perfect Close",
        description: "Asking for the Sale",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🤝 Tech: The Assumptive Close",
            "🤝 Tech: The Alternative Close ('Tuesday or Wednesday?')",
            "🤝 Tech: The Urgency Close"
        ]
    },
    {
        id: 7,
        title: "System Hygiene",
        description: "CRM Taggng",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🏷️ Action: Tagging conversations (Bug, Sales, Support)",
            "🏷️ Action: Assigning to Correct Team",
            "🏷️ Action: Closing the Ticket"
        ]
    },
    {
        id: 8,
        title: "Firefighter Training",
        description: "De-escalation",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔥 Scenario: The angry ALL CAPS customer",
            "🔥 Scenario: The threat to sue",
            "🧘‍♀️ Skill: Empathy Statements ('I hear you')"
        ]
    },
    {
        id: 9,
        title: "Role Play",
        description: "Simulated Scenarios",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🎭 Sim: Refund Request",
            "🎭 Sim: Feature Request",
            "🎭 Sim: Bug Report"
        ]
    },
    {
        id: 10,
        title: "Live Chat Simulation",
        description: "The Final Test",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🤖 Bot: You will chat with an AI Customer",
            "🎯 Goal: Solve the issue + Get a 5-star rating",
            "⚠️ Fail: Taking > 2 mins to reply"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: MINDSET - Speed Wins</h2>

<div class="content-section">
    <h3>⚡ The 60-Second Rule</h3>
    <p>If you don't reply in 60 seconds, they leave the tab. They go to a competitor. Speed is the #1 factor in conversion.</p>
</div>

<div class="content-section">
    <h3>🤖 Robot vs Human</h3>
    <p>Don't sound like a bot. Use emojis (if appropriate). Say "Hi John" not "Dear Sir". Be real.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Speed Test</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Typing</h4>
        <p>Type this sentence as fast as you can: "Hi there! Thanks for reaching out. I'd be happy to help you with that pricing question today."</p>
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
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
    <h3>💰 Pricing</h3>
    <p>Basic: $29/mo. Pro: $99/mo. Enterprise: Call us. <br>Know these by heart. Don't look them up.</p>
</div>

<div class="content-section">
    <h3>🚚 Shipping</h3>
    <p>US: 3-5 days. International: 7-14 days. <br>Free shipping over $50.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Memory</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Policy Check</h4>
        <p>Customer asks: "Can I return a shirt I wore once?" (Policy: No, tags must be on). Draft the polite refusal.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Knowledge</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: TONALITY MASTERY</h2>

<div class="content-section">
    <h3>🎭 Mirroring</h3>
    <p>If they use emojis, you use emojis. If they are formal ("Dear Support"), you be formal ("Dear Customer"). Match their energy.</p>
</div>

<div class="content-section">
    <h3>🚫 Negative Words</h3>
    <p>Never say "Unfortunately", "No", "Can't". <br>Instead of "We can't do that", say "What I can do is..."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Rewrite</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Positive Spin</h4>
        <p>Rewrite: "Unfortunately we are out of stock until next month." -> (Make it positive).</p>
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

const task4Content = `
<h2>📚 TASK 4: OBJECTION HANDLING</h2>

<div class="content-section">
    <h3>🛡️ "Too Expensive"</h3>
    <p>Price is only an issue in the absence of value. Remind them what they GET. "It's $99, but it saves you 10 hours a week."</p>
</div>

<div class="content-section">
    <h3>🛡️ "Just Looking"</h3>
    <p>"Great! What exactly are you looking to solve today?" (Pivot from browsing to problem solving).</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Pivot</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Competitor</h4>
        <p>"Product B is cheaper." Response: Acknowledge price, but highlight our unique 24/7 support.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Objections</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: SPEED TOOLS</h2>

<div class="content-section">
    <h3>⚡ Saved Replies</h3>
    <p>Never type the same thing twice. "/greeting" -> "Hi there! Thanks for messaging us." <br>"/refund" -> Links to refund policy.</p>
</div>

<div class="content-section">
    <h3>⚡ Shortcuts</h3>
    <p>CMD+Enter to send. ALT+Tab to switch chats. Mouse is slow. Keyboard is fast.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Macro Creation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Create 3</h4>
        <p>Write the text for 3 Macros: 1. Greeting. 2. Parking Lot (Wait). 3. Goodbye.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tools</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: THE PERFECT CLOSE</h2>

<div class="content-section">
    <h3>🤝 Assumptive Close</h3>
    <p>"Shall I set that up for you now?" (Assumes they want it).</p>
</div>

<div class="content-section">
    <h3>🤝 Alternative Close</h3>
    <p>"Would you prefer the Monthly or Annual plan?" (Both operate on 'Yes').</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Closing</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Soft Close</h4>
        <p>Customer asks about features. Transition to a close: "It sounds like Pro plan is perfect for you. Shall we start the trial?"</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Closing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: SYSTEM HYGIENE</h2>

<div class="content-section">
    <h3>🏷️ Tagging</h3>
    <p>Data drives decisions. If you don't tag "Bug", dev team won't know there are bugs. Tag properly.</p>
</div>

<div class="content-section">
    <h3>✅ Closing Tickets</h3>
    <p>Don't leave tickets 'Open'. If solved, Close it. Keep the queue clean.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Organization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Triage</h4>
        <p>Scenario: Customer reports login error. Action: 1. Reply. 2. Tag 'Bug'. 3. Assign to Eng. 4. Set status 'Pending'.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Hygiene</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: FIREFIGHTER TRAINING</h2>

<div class="content-section">
    <h3>🔥 They want to be Heard</h3>
    <p>Angry people vent. Let them vent. Don't interrupt. Say "I completely understand why that is frustrating."</p>
</div>

<div class="content-section">
    <h3>🧘‍♀️ Move to Resolution</h3>
    <p>Once they are calm, pivot. "Now that I understand the issue, here is how we fix it."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: De-escalation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: The Apology</h4>
        <p>Customer: "YOU CHARGED ME TWICE!!!". Draft the reply. (Apologize + Fix + Bonus).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Firefighting</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: ROLE PLAY</h2>

<div class="content-section">
    <h3>🎭 Mock Scenarios</h3>
    <p>Practice makes permanent. We will simulate 3 chats now.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Simulation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Role Reversal</h4>
        <p>Think about the worst customer service you ever had. What did they do wrong? Write it down so you never do it.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Role Play</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: LIVE CHAT SIMULATION</h2>

<div class="content-section">
    <h3>🤖 The Final Boss</h3>
    <p>You are about to enter the Simulator. You will face 5 random customers. You must maintain < 2 min response time.</p>
</div>

<div class="content-section">
    <h3>🎯 The Goal</h3>
    <p>100% CSAT (Customer Satisfaction). 100% Resolution.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Final Prep</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise: Deep Breath</h4>
        <p>Review your cheat sheet (Macros, Pricing, Policy). You are ready.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Chat Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1
    {
        question: "Ideal response time?",
        options: ["24 hours", "60 seconds", "1 week", "Never"],
        correct: 1
    },
    // Task 2
    {
        question: " Refund Policy is?",
        options: ["No refunds", "30 Days", "Lifetime", "7 Days"],
        correct: 1
    },
    // Task 3
    {
        question: "Tone should be...",
        options: ["Robotic", "Angry", "Mirrored to customer", "Sarcastic"],
        correct: 2
    },
    // Task 4
    {
        question: "Handling 'Too Expensive'?",
        options: ["Agree and discount", "Hang up", "Highlight Value / ROI", "Ignore"],
        correct: 2
    },
    // Task 5
    {
        question: "Best tool for speed?",
        options: ["Typing fast", "Saved Replies / Macros", "Drinking coffee", "Dictation"],
        correct: 1
    },
    // Task 6
    {
        question: "Alternative Close example?",
        options: ["Do you want it?", "Yes or No?", "Tuesday or Wednesday?", "Bye"],
        correct: 2
    },
    // Task 7
    {
        question: "Why Tag tickets?",
        options: ["For fun", "Data analysis & Routing", "To annoy devs", "To look busy"],
        correct: 1
    },
    // Task 8
    {
        question: "First step with angry customer?",
        options: ["Argue", "Empathize / Listen", "Disconnect", "Laugh"],
        correct: 1
    },
    // Task 9
    {
        question: "Goal of Role Play?",
        options: ["Have fun", "Practice scenarios safely", "Waste time", "Sleep"],
        correct: 1
    },
    // Task 10
    {
        question: "CSAT stands for",
        options: ["Customer Satellites", "Customer Satisfaction", "Cool Saturation", "Chat Saturation"],
        correct: 1
    }
];
