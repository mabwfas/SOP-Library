// Client Chat Support Training Data
// Complete training content for Client Chat certification
// UPGRADED: Expanded Lessons and Study Guides (Text Only)

const trainingTasks = [
    {
        id: 1,
        title: "Chat Mindset",
        description: "Speed & Empathy",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize 'Speed is Trust'",
            "🛡️ Understand we are 'Problem Solvers', not robots",
            "🚀 Learn the power of capitalization and punctuation"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Know who to escalate to",
            "💎 Understand the 'Concierge' vibe",
            "📢 Learn the difference between Sales questions and Support questions"
        ]
    },
    {
        id: 3,
        title: "Tonality Mastery",
        description: "Reading the Room",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "📝 Adjusting tone to match the client (Mirroring)",
            "🚫 Words to BAN (e.g. 'Standard Policy')",
            "✅ Power phrases ('I can certainly help with that')"
        ]
    },
    {
        id: 4,
        title: "Objection Handling",
        description: "Turning No to Yes",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "⚠️ The 'Price is too high' script",
            "📉 The 'I need to think about it' script",
            "🔥 The 'Feel, Felt, Found' technique"
        ]
    },
    {
        id: 5,
        title: "Speed Protocols",
        description: "The 30 Second Rule",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "⚡ Response time targets",
            "⌨️ Keyboard shortcuts & Text Expander",
            "🔔 Notification settings mastery"
        ]
    },
    {
        id: 6,
        title: "Closing the Chat",
        description: "Ending on a High",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🤝 The 'Is there anything else?' rule",
            "⭐ Asking for Reviews/Feedback",
            "👋 The perfect sign-off"
        ]
    },
    {
        id: 7,
        title: "Tools & Systems",
        description: "Chat Tech Stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📂 Intercom/LiveChat mastery",
            "🤖 Using AI draft suggestions (but editing them)",
            "📝 Tying chats to CRM tickets"
        ]
    },
    {
        id: 8,
        title: "De-escalation",
        description: "Cooling Down Heat",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🔥 Recognizing 'Red' emotional state",
            "🧘‍♀️ Validating feelings without admitting legal fault",
            "🚫 Moving off-chat if necessary"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'Where is my order?' spammer",
            "📝 Handle a 'This is too expensive' complaint",
            "🤝 Handle a confused elderly client"
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
            "🎉 Get ready to be the face of the brand!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: CHAT MINDSET</h2>

<div class="content-section">
<h3>🎯 Speed is Trust</h3>
<p>In 2024, if you don't reply in 60 seconds, they leave.</p>
<ul>
<li><strong>We represent urgency:</strong> Fast replies = Competent brand.</li>
<li><strong>We are Human:</strong> Use Emojis (if appropriate). Be warm.</li>
<li><strong>Grammar matters:</strong> 'u r' is unacceptable. 'You are' is required.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about mindset</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 The Concierge Vibe</h3>
<p>Think "Four Seasons Hotel", not "DMV".</p>
<ul>
<li><strong>Sales Question?</strong> Connect them to a Closer immediately.</li>
<li><strong>Support Question?</strong> Solve it yourself (First Call Resolution).</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: TONALITY MASTERY</h2>

<div class="content-section">
<h3>📝 Mirroring</h3>
<p>If they are formal, be professional. If they are casual/funny, you can relax 10%.</p>
</div>

<div class="content-section">
<h3>🚫 Banned Phrases</h3>
<ul>
<li>"Unfortuntely..." (Sounds lazy).</li>
<li>"It is company policy." (Sounds robotic).</li>
<li>"I don't know." (Instead use: "Let me find that out for you right away.")</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about tonality</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: OBJECTION HANDLING</h2>

<div class="content-section">
<h3>⚠️ "It's too expensive"</h3>
<p><strong>Response:</strong> "I completely understand that budget is key. When you say expensive, are you comparing price, or the ROI you expect?"</p>
</div>

<div class="content-section">
<h3>🔥 Feel, Felt, Found</h3>
<ul>
<li>"I understand how you <strong>feel</strong>." (Empathy)</li>
<li>"Many successful clients <strong>felt</strong> the same way initially." (Social Proof)</li>
<li>"But what they <strong>found</strong> was [Benefit]." (Resolution)</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about objections</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: SPEED PROTOCOLS</h2>

<div class="content-section">
<h3>⚡ Average Response Time: <30s</h3>
<p>Use Text Expander / Saved Replies for common questions.</p>
<div class="highlight-box">
<strong>Pro Tip:</strong> Never end a message without a question. It keeps the chat alive.
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about speed</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: CLOSING THE CHAT</h2>

<div class="content-section">
<h3>🤝 The Loop</h3>
<p>Never close a ticket until they say YES.</p>
<ul>
<li><strong>Ask:</strong> "Does that fully solve what you needed today?" or "Is there anything else?"</li>
<li><strong>Sign-off:</strong> "Thanks for being a Digital Hero! - [Your Name]"</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about closing</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & SYSTEMS</h2>

<div class="content-section">
<h3>📂 Intercom/LiveChat</h3>
<ul>
<li><strong>Tagging:</strong> Tag every chat (e.g. #sales, #support, #bug).</li>
<li><strong>Notes:</strong> Leave internal notes for the next agent.</li>
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
<h2>📚 TASK 8: DE-ESCALATION</h2>

<div class="content-section">
<h3>🔥 Cooling the Heat</h3>
<p>If they Type IN CAPS, they are shouting.</p>
<ul>
<li><strong>Don't shout back.</strong> Lower the volume by being ultra-calm.</li>
<li><strong>Validate:</strong> "I can see why that is frustrating."</li>
<li><strong>Action:</strong> "Here is what I am doing right now to fix it."</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about de-escalation</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: Shipping Delay</h3>
<p><strong>Client:</strong> "Where is my stuff??"</p>
<div class="highlight-box">
<strong>Reply:</strong> "Thanks for reaching out! Let me check that tracking number immediately for you... Okay, looks like it's in transit and will be there Tuesday. Shall I email you the tracking link again?"
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
<p>You've completed the Client Chat Manager training. This final assessment covers:</p>
<ul>
<li>✅ Tonality & Mirroring</li>
<li>✅ Objection Handling Frameworks</li>
<li>✅ Speed Protocols</li>
<li>✅ De-escalation Techniques</li>
<li>✅ Closing Loops</li>
<li>✅ Tools Mastery</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your Chat Certification.</p>
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
        { q: "Speed leads to:", o: ["Trust", "Panic", "Mistakes", "None"], c: 0 },
        { q: "Target response time:", o: ["< 60 sec", "1 hour", "24 hours", "None"], c: 0 },
        { q: "Grammar:", o: ["Mandatory/Professional", "Optional", "Slang ok", "None"], c: 0 },
        { q: "Emojis:", o: ["Use if appropriate/Warmth", "Never", "Always", "None"], c: 0 },
        { q: "U R:", o: ["Unacceptable", "Fine", "Good", "None"], c: 0 },
        { q: "We are:", o: ["Humans/Problem Solvers", "Robots", "Scripts", "None"], c: 0 },
        { q: "Fast reply equals:", o: ["Competence", "Desperation", "Boredom", "None"], c: 0 },
        { q: "Chat is:", o: ["Face of brand", "Back office", "Hidden", "None"], c: 0 },
        { q: "Typing indicators:", o: ["Good/Show presence", "Bad", "Hide them", "None"], c: 0 },
        { q: "Caps lock:", o: ["Shouting", "Fine", "Exciting", "None"], c: 0 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Vibe:", o: ["Four Seasons/Concierge", "Fast Food", "Government", "None"], c: 0 },
        { q: "Sales Q:", o: ["Connect to Closer", "Ignore", "Say No", "None"], c: 0 },
        { q: "Support Q:", o: ["Solve yourself (FCR)", "Pass to sales", "Ignore", "None"], c: 0 },
        { q: "First Call Resolution:", o: ["Goal", "Impossible", "Bad", "None"], c: 0 },
        { q: "Escalation:", o: ["Know who to call", "Guess", "Panic", "None"], c: 0 },
        { q: "Ecosystem:", o: ["Know all arms", "Ignore", "Focus on one", "None"], c: 0 },
        { q: "Response style:", o: ["Premium", "Cheap", "Lazy", "None"], c: 0 },
        { q: "Client is:", o: ["Guest", "Annoyance", "Number", "None"], c: 0 },
        { q: "If unsure:", o: ["Verify then reply", "Guess", "Lie", "None"], c: 0 },
        { q: "Branding:", o: ["Consistent", "Random", "Messy", "None"], c: 0 }
    ],
    // Task 3: Tonality
    [
        { q: "Mirroring:", o: ["Match energy", "Copy paste", "Mock", "None"], c: 0 },
        { q: "Ban 'Unfortunately':", o: ["Yes", "No", "Maybe", "None"], c: 0 },
        { q: "Ban 'Policy':", o: ["Yes/Robotic", "No", "Maybe", "None"], c: 0 },
        { q: "I don't know:", o: ["Replace with 'Let me find out'", "Say it", "Hang up", "None"], c: 0 },
        { q: "Formal client:", o: ["Be Professional", "Be Casual", "Be Rude", "None"], c: 0 },
        { q: "Casual client:", o: ["Relax 10%", "Be stiff", "Be wild", "None"], c: 0 },
        { q: "Power phrase:", o: ["I can certainly help", "Maybe", "Dunno", "None"], c: 0 },
        { q: "Tone check:", o: ["Read before sending", "Send fast", "None", "Guess"], c: 0 },
        { q: "Sarcasm:", o: ["Never", "Always", "Sometimes", "None"], c: 0 },
        { q: "Warmth:", o: ["Key differentiator", "Waste of time", "Bad", "None"], c: 0 }
    ],
    // Task 4: Objections
    [
        { q: "Feel Felt Found:", o: ["Empathy Framework", "Game", "None", "Lost"], c: 0 },
        { q: "Price objection:", o: ["Check ROI vs Cost", "Discount immediately", "Argue", "None"], c: 0 },
        { q: "I need to think:", o: ["Ask what concern remains", "Say okay bye", "Hang up", "None"], c: 0 },
        { q: "Social Proof:", o: ["Others felt same way", "Lies", "None", "Stats"], c: 0 },
        { q: "Empathy first:", o: ["Validate feeling", "Prove wrong", "Ignore", "None"], c: 0 },
        { q: "Budget vs Value:", o: ["Clarify the difference", "Lower price", "None", "Agree"], c: 0 },
        { q: "Turning No to Yes:", o: ["Skill", "Luck", "Magic", "None"], c: 0 },
        { q: "Resolution:", o: ["Show benefit", "Show features", "None", "End"], c: 0 },
        { q: "Expensive:", o: ["Relative term", "Fact", "Bad", "None"], c: 0 },
        { q: "Objections are:", o: ["Opportunities", "Roadblocks", "Bad", "None"], c: 0 }
    ],
    // Task 5: Speed
    [
        { q: "Avg Response:", o: ["< 30s", "5 mins", "1 hour", "None"], c: 0 },
        { q: "Text Expander:", o: ["Efficiency Tool", "Cheat", "None", "Bad"], c: 0 },
        { q: "End with Question:", o: ["Keeps chat alive", "Annoying", "Bad", "None"], c: 0 },
        { q: "Notifications:", o: ["On/Loud", "Off", "Silent", "None"], c: 0 },
        { q: "Shortcuts:", o: ["Essential", "Optional", "Bad", "None"], c: 0 },
        { q: "Ghosting:", o: ["Bad", "Good", "Normal", "None"], c: 0 },
        { q: "Waiting leads to:", o: ["Churn", "Happiness", "None", "Sales"], c: 0 },
        { q: "Pro Tip:", o: ["Always ask next step", "Say bye", "None", "Wait"], c: 0 },
        { q: "Saved Replies:", o: ["Use but personalize", "Copy paste exact", "None", "Ban"], c: 0 },
        { q: "Speed:", o: ["Trust", "Panic", "None", "Fear"], c: 0 }
    ],
    // Task 6: Closing
    [
        { q: "Anything else rule:", o: ["Always ask", "Never ask", "Assuming no", "None"], c: 0 },
        { q: "Sign-off:", o: ["Personal/Warm", "Abrupt", "None", "Bot"], c: 0 },
        { q: "Close ticket when:", o: ["Client says Yes/Done", "I am done", "5pm", "None"], c: 0 },
        { q: "Reviews:", o: ["Ask if happy", "Never ask", "None", "Pay for"], c: 0 },
        { q: "The Loop:", o: ["Close it properly", "Leave open", "Ignore", "None"], c: 0 },
        { q: "Feedback:", o: ["Gift", "Bad", "None", "Noise"], c: 0 },
        { q: "Digital Hero:", o: ["Brand name", "None", "Joke", "Game"], c: 0 },
        { q: "Final impression:", o: ["Lasting", "Fleeting", "None", "Bad"], c: 0 },
        { q: "If unresolved:", o: ["Keep open", "Close", "Hide", "None"], c: 0 },
        { q: "Good bye:", o: ["Professional", "Slang", "None", "Rude"], c: 0 }
    ],
    // Task 7: Tools
    [
        { q: "Tagging:", o: ["Organize data", "Fun", "None", "Waste"], c: 0 },
        { q: "Internal Notes:", o: ["Context for team", "Secrets", "Gossip", "None"], c: 0 },
        { q: "AI Drafts:", o: ["Edit before sending", "Send raw", "Trust blindly", "None"], c: 0 },
        { q: "CRM Link:", o: ["Tie chat to ticket", "Separate", "None", "Ignore"], c: 0 },
        { q: "Intercom:", o: ["Chat Tool", "Phone", "None", "Game"], c: 0 },
        { q: "LiveChat:", o: ["Chat Tool", "Social", "None", "Video"], c: 0 },
        { q: "Context:", o: ["King", "Optional", "None", "Bad"], c: 0 },
        { q: "Tech stack:", o: ["Enables speed", "Slows down", "None", "Expensive"], c: 0 },
        { q: "Ticket history:", o: ["Review it", "Ignore", "None", "Delete"], c: 0 },
        { q: "Mobile app:", o: ["Use for on-go", "Never", "None", "Bad"], c: 0 }
    ],
    // Task 8: De-escalation
    [
        { q: "Caps Lock:", o: ["Shouting", "Happy", "None", "Quiet"], c: 0 },
        { q: "Shouting back:", o: ["Never", "Sometimes", "Always", "None"], c: 0 },
        { q: "Validate:", o: ["Acknowledge feeling", "Agree with facts", "None", "Ignore"], c: 0 },
        { q: "Action plan:", o: ["Calms them down", "Makes mad", "None", "Wait"], c: 0 },
        { q: "Red state:", o: ["Emotional high", "Happy", "None", "Calm"], c: 0 },
        { q: "Cool down:", o: ["Goal", "Heat up", "None", "Run"], c: 0 },
        { q: "Move off chat:", o: ["If complex/heated", "Never", "Always", "None"], c: 0 },
        { q: "Admit legal fault:", o: ["No (Validate feeling only)", "Yes", "Maybe", "None"], c: 0 },
        { q: "Empathy:", o: ["Weapon vs Anger", "Weakness", "None", "Bad"], c: 0 },
        { q: "Patience:", o: ["Required", "Optional", "None", "Bad"], c: 0 }
    ],
    // Task 9: Scenarios
    [
        { q: "Where is my order:", o: ["Check tracking/Update", "Ignore", "Say idk", "None"], c: 0 },
        { q: "Too expensive:", o: ["Value pivot", "Discount", "Agree", "None"], c: 0 },
        { q: "Elderly client:", o: ["Patience/Guide", " Rush", "Mock", "None"], c: 0 },
        { q: "Spammer:", o: ["Block/Ignore policy", "Engage", "None", "Pay"], c: 0 },
        { q: "Shipping delay:", o: ["Proactive update", "Hide", "Lie", "None"], c: 0 },
        { q: "Tracking link:", o: ["Resend", "Hide", "None", "Delete"], c: 0 },
        { q: "Confused client:", o: ["Simplify", "Complicate", "None", "Ignore"], c: 0 },
        { q: "Angry:", o: ["De-escalate", "Fight", "None", "Laugh"], c: 0 },
        { q: "Happy:", o: ["Ask review", "Ignore", "None", "Block"], c: 0 },
        { q: "Lost item:", o: ["Investigate/Resolve", "Blame client", "None", "Laugh"], c: 0 }
    ],
    // Task 10: Final (20)
    [
        { q: "Speed:", o: ["Trust", "Bad", "None", "Panic"], c: 0 },
        { q: "Mirroring:", o: ["Tone match", "Copy", "None", "Mock"], c: 0 },
        { q: "Feel Felt Found:", o: ["Objection Framework", "Game", "None", "Map"], c: 0 },
        { q: "4 Seasons:", o: ["Hospitality Level", "Hotel", "None", "Weather"], c: 0 },
        { q: "LATTE:", o: ["Service Recovery", "Coffee", "None", "Late"], c: 0 },
        { q: "Validation:", o: ["Recognize emotion", "Review", "None", "Parking"], c: 0 },
        { q: "First Call Resolution:", o: ["Metric", "Phone", "None", "First"], c: 0 },
        { q: "Caps Lock:", o: ["Yelling", "Big", "None", "Small"], c: 0 },
        { q: "Text Expander:", o: ["Speed Tool", "Stretch", "None", "Text"], c: 0 },
        { q: "Intercom:", o: ["Chat platform", "Phone", "None", "Speaker"], c: 0 },
        { q: "Closing Loop:", o: ["Confirming solution", "Circle", "None", "Knot"], c: 0 },
        { q: "Empathy:", o: ["Key skill", "Weakness", "None", "Soft"], c: 0 },
        { q: "Price Objection:", o: ["Value conversation", "Discount", "None", "Bye"], c: 0 },
        { q: "Shipping Delay:", o: ["Communicate", "Hide", "None", "Run"], c: 0 },
        { q: "Sales Q:", o: ["Transfer", "Answer", "None", "Block"], c: 0 },
        { q: "Support Q:", o: ["Solve", "Transfer", "None", "Block"], c: 0 },
        { q: "Tags:", o: ["Organization", "Graffiti", "None", "Price"], c: 0 },
        { q: "Tone:", o: ["Brand Voice", "Music", "None", "Color"], c: 0 },
        { q: "Grammar:", o: ["Competence", "School", "None", "Boring"], c: 0 },
        { q: "Digital Hero:", o: ["You", "Game", "None", "Movie"], c: 0 }
    ]
];
