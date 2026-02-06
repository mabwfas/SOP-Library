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
<h2>📚 TASK 1: CLIENT CHAT MINDSET - Speed Wins</h2>

<div class="content-section">
    <h3>⚡ THE 60-SECOND RULE</h3>
    <p>Live chat has ONE job: convert visitors into buyers BEFORE they leave the tab. You have approximately <strong>60 seconds</strong> to respond before they're gone forever.</p>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 20px 0;">
        <strong style="color: #EF4444;">⏱️ THE BRUTAL REALITY:</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response > 60 seconds</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">50% leave the tab → competitor website</td>
            </tr>
            <tr style="background: rgba(245, 158, 11, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response > 3 minutes</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">80% are gone → sale lost forever</td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Response < 30 seconds</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x higher conversion rate → money in the bank</td>
            </tr>
        </table>
        <p style="margin-top: 15px;"><strong>Every second you delay = revenue walking out the door.</strong></p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 PART 1: PSYCHOLOGY OF LIVE CHAT</h3>
    
    <h4>1.1 Why Customers Use Chat Instead of Email</h4>
    <p>Understanding customer psychology helps you convert more:</p>
    <ul>
        <li><strong>Instant gratification:</strong> They want answers NOW, not in 24 hours</li>
        <li><strong>Low commitment:</strong> Chat feels less "official" than calling</li>
        <li><strong>Multitasking:</strong> They're browsing at work or watching TV</li>
        <li><strong>Final decision:</strong> They're usually 80% ready to buy, just need one question answered</li>
    </ul>
    
    <div class="highlight-box">
        <strong>💡 Key Insight:</strong> Most chat visitors are NOT just "browsing." They're at the point of purchase and have ONE specific question blocking them. Answer that question quickly = instant sale.
    </div>
    
    <h4>1.2 The Two Types of Chat Visitors</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #818CF8;">🛒 Hot Lead (Ready to Buy)</strong><br><br>
                "Does this come in blue?"<br>
                "What's the shipping time to Mumbai?"<br>
                "Is this compatible with iPhone 14?"<br>
                <em style="color: #A5B4FC;">→ Answer fast + suggest purchase = SALE</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #F59E0B;">🤔 Warm Lead (Researching)</strong><br><br>
                "Can you tell me about your warranty?"<br>
                "How does this compare to [competitor]?"<br>
                "What do most customers buy?"<br>
                <em style="color: #FCD34D;">→ Educate + build trust = FUTURE sale</em>
            </td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🤖 PART 2: ROBOT VS HUMAN</h3>
    
    <h4>2.1 The Robot Problem</h4>
    <p>Nothing kills a chat conversion faster than sounding like a bot:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #EF4444;">❌ Robot Response</strong><br><br>
                "Dear Valued Customer,<br>
                Thank you for contacting us. Your inquiry has been received. We will respond shortly.<br>
                Regards, Customer Service"<br><br>
                <em style="color: #F87171;">Feels cold, impersonal, scripted</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #10B981;">✅ Human Response</strong><br><br>
                "Hey! 👋<br>
                Thanks for reaching out. I'm here to help! What can I do for you today?"<br><br>
                <em style="color: #6EE7B7;">Feels warm, personal, genuine</em>
            </td>
        </tr>
    </table>
    
    <h4>2.2 Quick Personalization Techniques</h4>
    <ul>
        <li><strong>Use their name:</strong> "Hi John!" not "Dear Sir"</li>
        <li><strong>Match their energy:</strong> If they use emojis, you can too</li>
        <li><strong>Acknowledge their specific question:</strong> "Great question about the blue version!"</li>
        <li><strong>Be conversational:</strong> Write like you talk</li>
        <li><strong>Show personality:</strong> A little humor goes a long way</li>
    </ul>
    
    <h4>2.3 Emoji Guidelines</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Brand Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Emoji Usage</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Young/Casual (Fashion, Tech)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Yes! 👍 😊 🎉</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional (Law, Finance)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minimal or none</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Luxury (Jewelry, Premium)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sparingly ✨</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 PART 3: THE CONVERSION FRAMEWORK</h3>
    
    <h4>3.1 The CHAT Method</h4>
    <div class="highlight-box" style="background: rgba(99, 102, 241, 0.15); padding: 20px; border-radius: 10px;">
        <p style="font-size: 1.1em;"><strong>C</strong> - Connect: Greet quickly and warmly</p>
        <p style="font-size: 1.1em;"><strong>H</strong> - Help: Answer their specific question directly</p>
        <p style="font-size: 1.1em;"><strong>A</strong> - Add Value: Give extra helpful info they didn't ask for</p>
        <p style="font-size: 1.1em;"><strong>T</strong> - Transition: Guide them toward purchase</p>
    </div>
    
    <h4>3.2 Example in Action</h4>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong>Customer:</strong> "Does this laptop bag fit a 15-inch MacBook?"</p>
        <p><strong>C - Connect:</strong> "Hi! Great question! 👋"</p>
        <p><strong>H - Help:</strong> "Yes, our Executive Bag fits all 15-inch laptops perfectly, including the MacBook Pro."</p>
        <p><strong>A - Add Value:</strong> "It also has a dedicated padded sleeve + a secret anti-theft pocket for valuables."</p>
        <p><strong>T - Transition:</strong> "Would you like me to check stock in your preferred color? We have midnight blue in stock ready for same-day shipping! 🚀"</p>
    </div>
</div>

<div class="content-section">
    <h3>⚡ PART 4: SPEED OPTIMIZATION</h3>
    
    <h4>4.1 Pre-Written Responses (Canned Responses)</h4>
    <p>The fastest agents have 50+ canned responses ready. These aren't robotic copy-paste—they're starting points you personalize.</p>
    
    <div class="highlight-box">
        <strong>Essential Canned Responses to Prepare:</strong>
        <ul>
            <li>Greeting (different variations)</li>
            <li>All pricing tiers</li>
            <li>Shipping times + costs</li>
            <li>Return policy summary</li>
            <li>Common product FAQs</li>
            <li>Payment methods accepted</li>
            <li>Warranty information</li>
            <li>Closing + thank you messages</li>
        </ul>
    </div>
    
    <h4>4.2 Typing Speed Target</h4>
    <p>Professional chat agents type <strong>60+ WPM</strong> (words per minute). Test yourself at typingtest.com and practice daily if below target.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASKS</h3>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise 1: Speed Test</h4>
        <p>Type this response as fast as you can:</p>
        <p><em>"Hi there! Thanks for reaching out. I'd be happy to help you with that pricing question today. Our Pro plan is $99/month and includes unlimited users!"</em></p>
        <p><strong>Target: Complete in under 20 seconds</strong></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise 2: Robot to Human</h4>
        <p>Rewrite this robot response as a human:</p>
        <p><em>"Dear Customer, Your query has been received. The estimated delivery time is 5-7 business days. Regards, Support Team."</em></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #F87171; margin-top: 0;">Exercise 3: CHAT Method Practice</h4>
        <p>Customer asks: "Do you have any discounts for first-time buyers?"</p>
        <p>Write a response using the CHAT method (Connect, Help, Add Value, Transition).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>15 challenging questions</strong> testing your understanding of Chat Mindset</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 2</li>
        <li>⏱️ Questions cover speed, personalization, and conversion techniques</li>
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
    // Task 1 - Speed & Mindset
    {
        question: "A customer has been waiting 45 seconds for your response. According to the 60-second rule, what is the PRIMARY risk?",
        options: ["They might send a follow-up message", "They're likely switching to a competitor tab right now", "They will appreciate your thorough response", "They're probably still reading your product page"],
        correct: 1
    },
    {
        question: "Customer asks 'Does this come in red?' - they're most likely a:",
        options: ["Cold lead just browsing for fun", "Warm lead who needs more education", "Hot lead ready to buy if you answer quickly", "Someone looking to waste your time"],
        correct: 2
    },
    {
        question: "Your response says 'Dear Valued Customer, Your inquiry has been received.' What's wrong?",
        options: ["Nothing, this is professional", "It's too short", "It sounds robotic and impersonal - kills conversion", "It doesn't include your name"],
        correct: 2
    },
    {
        question: "The CHAT method's 'A' stands for:",
        options: ["Ask questions", "Apologize always", "Add Value beyond their question", "Address concerns"],
        correct: 2
    },
    {
        question: "Response time under 30 seconds typically results in:",
        options: ["Customer annoyance at being rushed", "3x higher conversion rate", "Lower quality responses", "No significant difference"],
        correct: 1
    },
    // Task 2 - Company Knowledge
    {
        question: "Customer asks 'What's your shipping time?' You don't know. Best response?",
        options: ["'I don't know'", "'Let me check our policy page and get right back to you - one moment!'", "Ignore and change subject", "'Usually pretty fast'"],
        correct: 1
    },
    {
        question: "When should you look up pricing during a chat?",
        options: ["Every time - always verify", "Never - you should have it memorized", "Only for complex products", "Only when the customer seems suspicious"],
        correct: 1
    },
    // Task 3 - Tonality
    {
        question: "Customer writes 'hey! super excited about this product 🎉' - your response should:",
        options: ["Remain formal: 'Dear Customer, thank you for your interest'", "Match their energy with warmth and an appropriate emoji", "Be completely neutral with no personality", "Tell them to calm down"],
        correct: 1
    },
    {
        question: "For a luxury jewelry brand, emoji usage should be:",
        options: ["Heavy use to seem friendly", "Sparingly or elegant ones like ✨ only", "Never use any", "Use the same as casual brands"],
        correct: 1
    },
    // Task 4 - Objection Handling
    {
        question: "Customer says 'This is way too expensive.' Best approach?",
        options: ["Immediately offer a discount", "Agree with them that it's pricey", "Highlight value and ROI - what they GET for that price", "Tell them to buy a cheaper competitor product"],
        correct: 2
    },
    {
        question: "Customer says 'I need to think about it.' This usually means:",
        options: ["They're definitely not buying", "They have an unaddressed concern - ask what's holding them back", "You should end the chat immediately", "They want you to pressure them more"],
        correct: 1
    },
    // Task 5 - Tools & Speed
    {
        question: "What's the most effective way to improve response speed?",
        options: ["Type faster", "Use pre-written canned responses as templates", "Skip greetings entirely", "Keep responses to just 2 words"],
        correct: 1
    },
    {
        question: "Professional chat agents should type at minimum:",
        options: ["20 WPM", "40 WPM", "60 WPM", "100 WPM"],
        correct: 2
    },
    // Task 6 - Closing Techniques
    {
        question: "'Would you prefer the blue or the black one?' is an example of:",
        options: ["Open-ended question", "Alternative close (assumes the sale)", "Pressure tactic to avoid", "Poor sales technique"],
        correct: 1
    },
    // Task 7 - Ticket Hygiene
    {
        question: "Why is proper ticket tagging critical?",
        options: ["To impress your manager", "For data analysis, routing, and identifying common issues", "It's not - it's busywork", "Only for billing purposes"],
        correct: 1
    },
    // Task 8 - Firefighting
    {
        question: "Customer is typing in ALL CAPS saying 'YOU CHARGED ME TWICE!!!'. First step?",
        options: ["Explain it wasn't your fault", "Empathize and let them vent before offering solution", "Disconnect the chat immediately", "Ask them to calm down before you'll help"],
        correct: 1
    },
    {
        question: "After resolving an angry customer's issue, what extra step creates loyalty?",
        options: ["Nothing extra needed - just close the chat", "Offer a small bonus/discount as goodwill gesture", "Tell them not to make the mistake again", "Transfer to your manager for an apology"],
        correct: 1
    },
    // Task 9 & 10 - Advanced
    {
        question: "A customer says 'Your competitor has 24-hour support.' Best response?",
        options: ["'Go to them then'", "Acknowledge and pivot to YOUR unique value", "'We're cheaper though'", "Ignore and change subject"],
        correct: 1
    },
    {
        question: "CSAT scores measure:",
        options: ["Chat Speed And Timing", "Customer Satisfaction rating", "Chat Sentiment Analysis Tracking", "Customer Service Action Time"],
        correct: 1
    },
    {
        question: "The goal of chat role-play training is to:",
        options: ["Embarrass new agents", "Practice handling difficult scenarios in a safe environment", "Waste time between real chats", "Test who's the fastest typer"],
        correct: 1
    }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

const task1Quiz = [
    { q: "What is the core mindset for this role?", o: ["Just complete tasks", "Revenue-focused excellence", "Speed only", "Minimum effort"], c: 1 },
    { q: "Digital Heroes standard is:", o: ["Basic quality", "Premium quality only", "Cheap and fast", "Average"], c: 1 },
    { q: "Client satisfaction is:", o: ["Optional", "Our primary goal", "Secondary", "Not important"], c: 1 },
    { q: "Quality vs Speed priority:", o: ["Speed always", "Quality with efficiency", "Neither", "Random"], c: 1 },
    { q: "Continuous learning is:", o: ["Optional", "Essential for growth", "Wasted time", "Not needed"], c: 1 },
    { q: "Team collaboration means:", o: ["Work alone", "Share knowledge and support", "Compete only", "Ignore others"], c: 1 },
    { q: "Taking ownership means:", o: ["Blame others", "Be responsible for outcomes", "Avoid responsibility", "Wait for instructions"], c: 1 },
    { q: "Professional communication is:", o: ["Casual", "Clear, timely, and respectful", "Optional", "Slow"], c: 1 },
    { q: "Handling mistakes correctly:", o: ["Hide them", "Acknowledge and fix quickly", "Blame system", "Ignore"], c: 1 },
    { q: "Growth at Digital Heroes:", o: ["Limited", "Based on performance and initiative", "Random", "Impossible"], c: 1 }
];

const task2Quiz = [
    { q: "Understanding client needs is:", o: ["Optional", "Foundation of good work", "Not important", "Secondary"], c: 1 },
    { q: "Asking clarifying questions is:", o: ["Annoying", "Professional and necessary", "Waste of time", "Avoid always"], c: 1 },
    { q: "Active listening involves:", o: ["Interrupting", "Full attention and understanding", "Multi-tasking", "Ignoring details"], c: 1 },
    { q: "Documentation is:", o: ["Optional", "Critical for clarity", "Waste of time", "Not needed"], c: 1 },
    { q: "Following SOPs ensures:", o: ["Boredom", "Consistency and quality", "Slow work", "Nothing"], c: 1 },
    { q: "Deadline management means:", o: ["Miss deadlines", "Deliver on time or communicate early", "Ignore time", "Rush everything"], c: 1 },
    { q: "Quality check before delivery:", o: ["Skip it", "Always verify your work", "Client will check", "Optional"], c: 1 },
    { q: "Feedback should be:", o: ["Ignored", "Used for improvement", "Argued against", "Avoided"], c: 1 },
    { q: "Problem escalation path:", o: ["Hide problems", "Inform senior when stuck", "Ignore issues", "Wait it out"], c: 1 },
    { q: "Daily updates are:", o: ["Unnecessary", "Important for transparency", "Micromanagement", "Optional"], c: 1 }
];

const task3Quiz = [
    { q: "Tool proficiency is:", o: ["Optional", "Essential for efficiency", "Not needed", "Basic only"], c: 1 },
    { q: "Best practice adherence:", o: ["Sometimes", "Always follow proven methods", "Never", "Random"], c: 1 },
    { q: "Process optimization:", o: ["Avoid change", "Continuously improve", "Resist", "Ignore"], c: 1 },
    { q: "Cross-functional knowledge:", o: ["Not needed", "Adds value to work", "Confusing", "Avoid"], c: 1 },
    { q: "Attention to detail:", o: ["Overrated", "Differentiates premium work", "Slow", "Skip details"], c: 1 },
    { q: "Standard templates:", o: ["Unnecessary", "Save time and ensure consistency", "Boring", "Avoid"], c: 1 },
    { q: "Automation opportunities:", o: ["Threats", "Increase efficiency", "Avoid", "Not possible"], c: 1 },
    { q: "Knowledge sharing:", o: ["Competitive disadvantage", "Strengthens the team", "Avoid", "Optional"], c: 1 },
    { q: "Error prevention:", o: ["Not possible", "Better than error correction", "Not important", "Skip"], c: 1 },
    { q: "Work organization:", o: ["Random", "Systematic approach works best", "Chaos is good", "Avoid planning"], c: 1 }
];

const task4Quiz = [
    { q: "Communication clarity:", o: ["Optional", "Prevents misunderstandings", "Slow", "Not needed"], c: 1 },
    { q: "Response time matters:", o: ["Not really", "Shows professionalism", "Slow is fine", "Ignore"], c: 1 },
    { q: "Written communication:", o: ["Casual", "Professional and clear", "Any style", "Avoid"], c: 1 },
    { q: "Meeting preparation:", o: ["Not needed", "Shows respect and efficiency", "Waste of time", "Optional"], c: 1 },
    { q: "Follow-up actions:", o: ["Forget them", "Track and complete", "Optional", "Ignore"], c: 1 },
    { q: "Conflict resolution:", o: ["Avoid", "Address professionally", "Escalate everything", "Ignore"], c: 1 },
    { q: "Giving updates:", o: ["When asked", "Proactively share progress", "Never", "Only problems"], c: 1 },
    { q: "Asking for help:", o: ["Sign of weakness", "Smart when needed", "Never", "Avoid always"], c: 1 },
    { q: "Handling criticism:", o: ["Get defensive", "Accept and improve", "Ignore", "Argue back"], c: 1 },
    { q: "Positive attitude:", o: ["Fake", "Improves productivity", "Not important", "Optional"], c: 1 }
];

const task5Quiz = [
    { q: "Priority management:", o: ["Random order", "Focus on high impact first", "Easy first", "Avoid prioritizing"], c: 1 },
    { q: "Time blocking:", o: ["Unnecessary", "Increases focus", "Too rigid", "Avoid"], c: 1 },
    { q: "Multi-tasking:", o: ["Efficient", "Reduces quality", "Best approach", "Always do"], c: 1 },
    { q: "Deep work sessions:", o: ["Not productive", "Allow complex problem solving", "Waste time", "Avoid"], c: 1 },
    { q: "Distraction management:", o: ["Impossible", "Essential for productivity", "Not needed", "Ignore"], c: 1 },
    { q: "Break scheduling:", o: ["Lazy", "Improves sustained performance", "Avoid", "Never break"], c: 1 },
    { q: "Energy management:", o: ["Not relevant", "Match tasks to energy levels", "Ignore", "Push through"], c: 1 },
    { q: "Task batching:", o: ["Inefficient", "Reduces context switching", "Avoid", "Random is better"], c: 1 },
    { q: "Deadline buffer:", o: ["Unnecessary", "Accounts for unexpected issues", "Lazy", "Skip"], c: 1 },
    { q: "Progress tracking:", o: ["Micromanagement", "Keeps work on track", "Avoid", "Optional"], c: 1 }
];

const task6Quiz = [
    { q: "Quality standards:", o: ["Negotiable", "Must be maintained", "Optional", "Client decides"], c: 1 },
    { q: "Review process:", o: ["Skip it", "Catches errors before delivery", "Waste of time", "Optional"], c: 1 },
    { q: "Peer feedback:", o: ["Threatening", "Valuable for improvement", "Avoid", "Ignore"], c: 1 },
    { q: "Revision handling:", o: ["Complain", "Professional and timely", "Argue", "Delay"], c: 1 },
    { q: "Client expectations:", o: ["Ignore", "Set and exceed appropriately", "Lower them", "Avoid discussing"], c: 1 },
    { q: "Scope clarity:", o: ["Not important", "Prevents scope creep", "Optional", "Ignore"], c: 1 },
    { q: "Deliverable standards:", o: ["Variable", "Consistent premium quality", "Random", "Basic"], c: 1 },
    { q: "Testing before delivery:", o: ["Skip", "Always verify", "Optional", "Client tests"], c: 1 },
    { q: "Documentation of work:", o: ["Not needed", "Enables handoff and clarity", "Waste of time", "Skip"], c: 1 },
    { q: "Continuous improvement:", o: ["Not possible", "Part of professional growth", "Unnecessary", "Avoid"], c: 1 }
];

const task7Quiz = [
    { q: "Team support:", o: ["Competition", "Collaborative success", "Avoid helping", "Only when asked"], c: 1 },
    { q: "Knowledge transfer:", o: ["Keep secrets", "Share to strengthen team", "Avoid", "Optional"], c: 1 },
    { q: "Cross-training:", o: ["Waste of time", "Creates backup capabilities", "Unnecessary", "Avoid"], c: 1 },
    { q: "Positive team culture:", o: ["Not important", "Improves productivity", "Fake", "Optional"], c: 1 },
    { q: "Constructive feedback:", o: ["Avoid", "Helps improvement", "Offensive", "Skip"], c: 1 },
    { q: "Recognition of others:", o: ["Unnecessary", "Motivates team", "Fake", "Avoid"], c: 1 },
    { q: "Conflict with colleagues:", o: ["Escalate immediately", "Address professionally", "Ignore always", "Complain"], c: 1 },
    { q: "Team meetings:", o: ["Waste of time", "Align and coordinate work", "Skip when possible", "Unnecessary"], c: 1 },
    { q: "Shared responsibilities:", o: ["Avoid", "Distribute appropriately", "Do everything alone", "Ignore"], c: 1 },
    { q: "Celebrating wins:", o: ["Unnecessary", "Builds morale", "Waste of time", "Skip"], c: 1 }
];

const task8Quiz = [
    { q: "Difficult situations require:", o: ["Panic", "Calm professional response", "Avoid", "Ignore"], c: 1 },
    { q: "Client complaints:", o: ["Argue back", "Listen and resolve", "Ignore", "Blame others"], c: 1 },
    { q: "Mistake acknowledgment:", o: ["Hide", "Own and fix quickly", "Blame system", "Deny"], c: 1 },
    { q: "Pressure handling:", o: ["Break down", "Stay focused and prioritize", "Complain", "Give up"], c: 1 },
    { q: "Unexpected changes:", o: ["Refuse", "Adapt professionally", "Complain loudly", "Quit"], c: 1 },
    { q: "Tight deadlines:", o: ["Miss them", "Communicate and prioritize", "Ignore quality", "Panic"], c: 1 },
    { q: "Unclear requirements:", o: ["Guess", "Ask for clarification", "Ignore", "Complain"], c: 1 },
    { q: "Resource constraints:", o: ["Give up", "Find creative solutions", "Complain", "Do nothing"], c: 1 },
    { q: "Feedback rejection:", o: ["Get upset", "Ask for specifics and improve", "Argue", "Ignore"], c: 1 },
    { q: "Burnout prevention:", o: ["Not important", "Essential for sustained performance", "Ignore", "Push through"], c: 1 }
];

const task9Quiz = [
    { q: "Process adherence:", o: ["Optional", "Ensures quality and consistency", "Slows work", "Ignore"], c: 1 },
    { q: "Checklist usage:", o: ["Unnecessary", "Prevents missed steps", "Waste of time", "Skip"], c: 1 },
    { q: "Standard operating procedures:", o: ["Ignore", "Follow for consistency", "Outdated", "Optional"], c: 1 },
    { q: "Quality gates:", o: ["Skip", "Ensure standards are met", "Slow", "Unnecessary"], c: 1 },
    { q: "Approval workflows:", o: ["Avoid", "Ensure proper sign-off", "Bureaucracy", "Skip"], c: 1 },
    { q: "Version control:", o: ["Not needed", "Tracks changes safely", "Complex", "Avoid"], c: 1 },
    { q: "Backup practices:", o: ["Optional", "Essential protection", "Waste of storage", "Skip"], c: 1 },
    { q: "Security practices:", o: ["Paranoid", "Protect client and company data", "Unnecessary", "Optional"], c: 1 },
    { q: "Compliance requirements:", o: ["Ignore", "Must be followed", "Optional", "Outdated"], c: 1 },
    { q: "Audit preparation:", o: ["Panic", "Maintain records proactively", "Fake it", "Ignore"], c: 1 }
];

const task10Quiz = [
    { q: "Certification validates:", o: ["Nothing", "Competency in role", "Waste of time", "Luck"], c: 1 },
    { q: "Continuous learning:", o: ["Ends at certification", "Ongoing requirement", "Optional", "Not needed"], c: 1 },
    { q: "Video walkthrough:", o: ["Skip it", "Demonstrates practical knowledge", "Optional", "Unnecessary"], c: 1 },
    { q: "Career growth requires:", o: ["Luck only", "Skill development and initiative", "Politics", "Time only"], c: 1 },
    { q: "Professional development:", o: ["Company responsibility", "Personal responsibility", "Not important", "Optional"], c: 1 },
    { q: "Mentoring others:", o: ["Threat", "Strengthens your knowledge", "Avoid", "Not possible"], c: 1 },
    { q: "Industry updates:", o: ["Ignore", "Stay current for relevance", "Not important", "Optional"], c: 1 },
    { q: "Skill gaps:", o: ["Hide them", "Identify and address", "Ignore", "Not possible"], c: 1 },
    { q: "Performance reviews:", o: ["Avoid", "Opportunity for growth feedback", "Threatening", "Skip"], c: 1 },
    { q: "Long-term goals:", o: ["Not needed", "Guide development efforts", "Unrealistic", "Avoid"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];

// Make task content available globally for openTask() function
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
if (typeof task3Content !== 'undefined') window.task3Content = task3Content;
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task5Content !== 'undefined') window.task5Content = task5Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task7Content !== 'undefined') window.task7Content = task7Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task9Content !== 'undefined') window.task9Content = task9Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;
if (typeof task11Content !== 'undefined') window.task11Content = task11Content;
if (typeof task12Content !== 'undefined') window.task12Content = task12Content;
if (typeof task13Content !== 'undefined') window.task13Content = task13Content;
