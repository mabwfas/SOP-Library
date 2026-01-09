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

// Task 1 Content (Content-First)
const task1Content = `
<h2>🧠 Why Are You Here?</h2>
<div class="content-section">
<h3>The Truth About This Opportunity</h3>
<p>You're about to learn a skill that can change your entire financial future. Sales is not just a job — it's the <strong>highest-paid profession in the world</strong> that requires no degree, no connections, and no starting capital.</p>
<div class="warning-box">
<strong>But here's what nobody tells you:</strong><br>
95% of people who start sales training never finish it. Not because it's too hard. Because they don't have the right mindset.
</div>
</div>

<div class="content-section">
<h3>The Two Types of People</h3>
<p><strong>Type 1: The Tourist</strong></p>
<ul>
<li>Reads quickly, skims sections</li>
<li>Thinks "I already know this"</li>
<li>Quits when it gets hard</li>
<li>Blames external factors for failure</li>
<li><em>Will NOT finish this training</em></li>
</ul>
<p><strong>Type 2: The Student</strong></p>
<ul>
<li>Reads carefully, takes notes</li>
<li>Thinks "What can I learn here?"</li>
<li>Pushes through when it gets hard</li>
<li>Takes responsibility for results</li>
<li><em>Will become a top performer</em></li>
</ul>
<div class="highlight-box">
<strong>Which one are you?</strong> The answer isn't what you say. It's what you DO in the next few hours.
</div>
</div>

<div class="content-section">
<h3>Lesson 1: You Are Not Selling — You Are Solving</h3>
<p>The biggest mistake new salespeople make is thinking their job is to "convince" people to buy. <strong>Wrong.</strong></p>
<p>Your job is to <strong>find people with problems and offer them solutions.</strong></p>
<ul>
<li>A doctor doesn't "convince" you to take medicine. They diagnose and prescribe.</li>
<li>A lawyer doesn't "convince" you to hire them. They understand and offer expertise.</li>
<li><strong>You are the web development doctor.</strong> Clients come with broken websites, slow stores, and conversion problems. Your job is to diagnose and cure.</li>
</ul>
</div>

<div class="content-section">
<h3>Lesson 2: Rejection is Information, Not Insult</h3>
<p><strong>When someone says "no," they're not rejecting YOU. They're rejecting the OFFER — at THIS moment — for THEIR reasons.</strong></p>
<p>The rejection might mean:</p>
<ul>
<li>They don't have budget <em>right now</em></li>
<li>They're not ready to decide</li>
<li>They don't trust online services yet</li>
<li>They had a bad experience before</li>
</ul>
<div class="highlight-box">
<strong>The Math:</strong> Salesperson A talks to 10 people, gets 2 "yes". Salesperson B talks to 100 people, gets 15 "yes" (lower %). Who makes more money? <strong>Salesperson B.</strong>
</div>
</div>

<div class="content-section">
<h3>Lesson 3: Discipline Beats Motivation</h3>
<p><strong>Motivation is a lie.</strong> It comes and goes like weather. You can't build a career on weather.</p>
<p><strong>Discipline</strong> is doing what needs to be done, whether you feel like it or not.</p>
<div class="warning-box">
Some days you'll feel unstoppable. Some days you'll feel worthless. <strong>On both days, the ACTIONS are the same:</strong>
<ul>
<li>Respond to inquiries within 5 minutes</li>
<li>Qualify leads properly</li>
<li>Send professional proposals</li>
<li>Follow up systematically</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>Why 10/10 is Required</h3>
<p><strong>In sales, there is no 80%.</strong></p>
<ul>
<li>When a client asks about pricing, you can't give an "80% correct" answer.</li>
<li>When a client objects, you can't give an "80% correct" response.</li>
<li>When a client is ready to close, you can't do an "80% correct" close.</li>
</ul>
<p>We train for perfection because <strong>real situations demand perfection.</strong></p>
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
