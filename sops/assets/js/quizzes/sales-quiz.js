const salesQuestions = [
    // 1-5: Principles & Mindset
    { q: "What is the #1 rule regarding client updates?", options: ["Update only when asked", "Client NEVER waits for an update", "Update once a week", "Update only on delivery"], correct: 1 },
    { q: "What should you discuss BEFORE taking an order?", options: ["Color schemes", "Hard technical problems", "Logo design", "Font choices"], correct: 1 },
    { q: "How do we price projects?", options: ["Fixed rate card", "Based on Client's Budget Perception", "Lowest market rate", "Randomly"], correct: 1 },
    { q: "What is the commission for a $6,000 project?", options: ["$0", "$300 (5%)", "$600 (10%)", "$100"], correct: 1 },
    { q: "What is the commission for a $2,000 project?", options: ["$100", "$0 (No commission under $5k)", "$50", "$200"], correct: 1 },

    // 6-10: Red Flags & Filtering
    { q: "If a client asks 'What's your lowest price?', they are a:", options: ["High value client", "Price Shopper (Red Flag)", "Strategic partner", "Good negotiator"], correct: 1 },
    { q: "What should you do if a client is disrespectful?", options: ["Tolerate it", "Immediate Disqualify", "Charge double", "Ignore it"], correct: 1 },
    { q: "A client saying 'I need this by tomorrow' indicates:", options: ["High motivation", "Rush Demand (Red Flag)", "Efficient workflow", "Professionalism"], correct: 1 },
    { q: "If a client micromanages ('need to approve every step'), you should:", options: ["Accept immediately", "Charge Premium or Pass", "Give a discount", "Compliment them"], correct: 1 },
    { q: "If a client has a 'Bad History Pattern' with devs, who is usually the problem?", options: ["The developers", "The Client", "The platform", "The internet"], correct: 1 },

    // 11-15: THE 80/20 RULE & PSYCHOLOGY FUNDAMENTALS (NEW)
    { q: "What is the 80/20 Listening Rule in sales?", options: ["Talk 80%, Listen 20%", "Listen 80%, Speak 20%", "80% closing, 20% opening", "80% objections, 20% solutions"], correct: 1 },
    { q: "Why is listening more important than talking in sales?", options: ["It's polite", "Clients reveal exactly how to sell to them", "It saves energy", "It's company policy"], correct: 1 },
    { q: "What does the 3-Yes Technique help with?", options: ["Getting 3 reviews", "Puts client in agreeing mode before pitching", "3 payment installments", "3 follow-ups"], correct: 1 },
    { q: "The Mirror Technique involves:", options: ["Showing your webcam", "Repeating client's last 3 words as a question", "Copying competitor prices", "Sending screenshots"], correct: 1 },
    { q: "What is the purpose of the Pain Calculator?", options: ["Track calories", "Convert vague problems into specific dollar amounts", "Calculate shipping costs", "Measure project difficulty"], correct: 1 },

    // 16-20: CLOSING TECHNIQUES (NEW)
    { q: "What is the Assumptive Close?", options: ["Ask if they want to buy", "Assume they're buying and ask about next steps", "Assume they won't buy", "Close without payment"], correct: 1 },
    { q: "The Takeaway Close is used when:", options: ["Client is enthusiastic", "Client hesitates - you remove the option", "Client pays immediately", "Project is canceled"], correct: 1 },
    { q: "What happens with the Silence Technique after stating price?", options: ["Keep explaining", "STOP TALKING and wait", "Immediately offer discount", "Change topic"], correct: 1 },
    { q: "Who loses leverage by speaking first after the price is stated?", options: ["The client", "The salesperson who speaks first", "Neither", "Both equally"], correct: 1 },
    { q: "The Contrast Principle works by:", options: ["Showing cheap option first", "Showing expensive option first, then your actual price", "Showing only one option", "Hiding the price"], correct: 1 },

    // 21-25: QUALIFICATION & DISCOVERY (NEW)
    { q: "How should you ask about budget?", options: ["'What's your exact budget?'", "'Are you thinking $1,000 range or $3,000+ range?'", "'How cheap can you go?'", "Don't ask about budget"], correct: 1 },
    { q: "The 'Decision Maker Check' asks:", options: ["Who designed your website?", "Are you the one making the final call?", "What's your job title?", "How many employees?"], correct: 1 },
    { q: "'What keeps you up at night?' is designed to reveal:", options: ["Sleep habits", "Their deepest pain points", "Time zone", "Work schedule"], correct: 1 },
    { q: "The Dream Store Question asks:", options: ["Which theme to use", "'If your store was perfect, what would be different?'", "What products to sell", "Which apps to install"], correct: 1 },
    { q: "Why ask about their growth stage ($0-10K, $10-50K, $50K+)?", options: ["For gossip", "To adjust your pitch based on their stage", "To report to management", "No reason"], correct: 1 },

    // 26-30: OBJECTION HANDLING (NEW)
    { q: "The 'Feel, Felt, Found' framework helps with:", options: ["Emotions only", "Handling objections empathetically", "Finding files", "Feeling confident"], correct: 1 },
    { q: "What is the Inoculation Technique?", options: ["Medical procedure", "Address objections BEFORE they raise them", "Ignore objections", "Delay objections"], correct: 1 },
    { q: "The Cost of Inaction question asks:", options: ["How much the project costs", "'What happens if you don't fix this?'", "What competitors charge", "What discounts are available"], correct: 1 },
    { q: "If client says 'too expensive', what should you ask?", options: ["'What's your budget?'", "'Compared to what?'", "'Can you pay more?'", "'Why are you poor?'"], correct: 1 },
    { q: "The Risk Reversal technique involves:", options: ["Client taking all risk", "Putting the risk on yourself (refund guarantee)", "Ignoring risk", "Increasing risk"], correct: 1 },

    // 31-35: NEGOTIATION & PRICING (NEW)
    { q: "Good-Better-Best pricing means:", options: ["Rate your clients", "Offer 3 tiers - most pick middle", "Best price only", "Good morning greeting"], correct: 1 },
    { q: "If client wants a discount, you should:", options: ["Give 20% off", "Trade-off: reduce price = reduce scope", "Double the price", "Ghost them"], correct: 1 },
    { q: "The Long-Term Value Frame explains price as:", options: ["High cost", "Less than $100/month over 3 years for a money-making asset", "Expensive", "Not worth it"], correct: 1 },
    { q: "What is a Rush Fee?", options: ["Discount for fast payment", "20% extra for priority/rush work", "Free expedited delivery", "Refund policy"], correct: 1 },
    { q: "The 'Invest in Yourself' frame positions the price as:", options: ["An expense", "An investment that generates ongoing revenue", "A donation", "A risk"], correct: 1 },

    // 36-40: FOLLOW-UP & CLOSING (NEW)
    { q: "What percentage of sales require 5+ follow-ups?", options: ["20%", "50%", "80%", "10%"], correct: 2 },
    { q: "Why should you NEVER say 'just checking in'?", options: ["It's grammatically wrong", "It adds no value - always provide value instead", "Clients hate it", "It's too formal"], correct: 1 },
    { q: "A video follow-up gets how many times higher response rate than text?", options: ["Same", "2x", "3x", "10x"], correct: 2 },
    { q: "When should you do the 6-Month Check-In?", options: ["Never", "6 months after project ends for referrals/repeat business", "Every week", "Before project starts"], correct: 1 },
    { q: "The 'Meanwhile' Follow-Up involves:", options: ["Waiting", "Analyzing their site while they decide and sharing findings", "Doing nothing", "Spam messaging"], correct: 1 },

    // 41-45: OPENING & ENGAGEMENT (NEW)
    { q: "The First 7 Seconds rule says:", options: ["Wait 7 seconds to reply", "Your first message determines everything", "Talk for 7 seconds only", "7 messages minimum"], correct: 1 },
    { q: "The Immediate Audit technique involves:", options: ["Checking their bank account", "Running their site through PageSpeed while chatting", "Auditing their finances", "Monthly audits"], correct: 1 },
    { q: "What should you do before responding to a new lead?", options: ["Nothing special", "Check their LinkedIn and research background", "Wait 24 hours", "Send template"], correct: 1 },
    { q: "A Personalized Video opener gets how many times higher response than text?", options: ["Same", "2x", "5x", "10x"], correct: 2 },
    { q: "The Question Stack technique involves:", options: ["Answering questions", "Asking 3 questions in first message to get them talking", "Stacking papers", "Question avoidance"], correct: 1 },

    // 46-50: ADVANCED PSYCHOLOGY (NEW)
    { q: "What does the Labeling Technique do?", options: ["Put labels on products", "Name client's emotion before they do to diffuse objections", "Label files", "Create name tags"], correct: 1 },
    { q: "Future Pacing helps clients by:", options: ["Rushing them", "Visualizing their life AFTER working with you", "Predicting the future", "Fast forwarding"], correct: 1 },
    { q: "The Success Story Bridge counters objections by:", options: ["Ignoring them", "Sharing story of similar client who succeeded", "Telling your own story", "Reading case studies"], correct: 1 },
    { q: "The Parrot Technique involves:", options: ["Training birds", "Repeating client's exact words back when quoting", "Copying competitors", "Colorful language"], correct: 1 },
    { q: "Why use the Hypothetical Future ('When we start building...')?", options: ["Grammatically better", "Assumes the sale using 'when' not 'if'", "Time travel", "Company policy"], correct: 1 },

    // 51-55: Sales Process (ORIGINAL)
    { q: "What is the correct order of the sales process?", options: ["Order -> Problems -> Budget", "Problems -> Budget -> Order", "Budget -> Order -> Problems", "Order -> Budget -> Problems"], correct: 1 },
    { q: "When do you collect routine assets (logo, login)?", options: ["First message", "Before order", "AFTER order is placed", "During negotiation"], correct: 2 },
    { q: "What should you do if you are unsure about a hard technical problem?", options: ["Guess YES", "Escalate to senior team before committing", "Say NO immediately", "Ignore"], correct: 1 },
    { q: "Do we offer free consulting?", options: ["Yes, unlimited", "No, solve problems briefly to confirm feasibility only", "Yes, for 1 hour", "Yes, via Zoom"], correct: 1 },
    { q: "What is the payment term for most projects?", options: ["100% Upfront", "50% deposit", "Pay after delivery", "Net 30"], correct: 0 },

    // 56-60: Closing & Objection Handling (ORIGINAL)
    { q: "If a client says 'That's too expensive', what is the likely real issue?", options: ["Price is too high", "Trust or Value not established", "They have no money", "They hate you"], correct: 1 },
    { q: "Why is holding your price firm important?", options: ["It's stubborn", "It signals confidence and quality", "It scares clients away", "It's policy"], correct: 1 },
    { q: "What is the '100% Rule' before accepting a project?", options: ["100% payment", "100% SURE you can solve every identified problem", "100% discount", "100% profit"], correct: 1 },
    { q: "If a client has a tighter budget than your quote, you should:", options: ["Discount the price", "Reduce the scope to match budget", "Ghost them", "Argue"], correct: 1 },
    { q: "What is the best response to 'Can you match X's rate'?", options: ["Yes", "Sure", "Disqualify or Explain Value Gap", "Maybe"], correct: 2 },

    // 61-65: Tools & Communication (ORIGINAL)
    { q: "Where should you communicate with leads?", options: ["WhatsApp personal", "Platform Messages (Inbox)", "Instagram", "Snapchat"], correct: 1 },
    { q: "Why use 'You-centric' language?", options: ["To sound selfish", "To focus on Client's benefits", "To sound professional", "To be grammar correct"], correct: 1 },
    { q: "Which badge is NOT a standard selling point?", options: ["$1,200+ Projects", "Price Firm", "Huge Discounts", "4.9 Rating"], correct: 2 },
    { q: "What is the goal of the first few messages?", options: ["Get the order", "Qualify/Identify Red Flags", "Become friends", "Share portfolio"], correct: 1 },
    { q: "If a client is unresponsive during sales, you should:", options: ["Spam them", "Follow up politely 1-2 times then move on", "Call them", "Report them"], correct: 1 },

    // 66-70: Advanced Principles (ORIGINAL)
    { q: "Why do we avoid 'Rush Jobs'?", options: ["We are lazy", "Rushing leads to mistakes/bad experience", "We don't like money", "No reason"], correct: 1 },
    { q: "If a project is 'Easy', what should you check for?", options: ["Nothing", "Scope Creep signals", "Payment", "Reviews"], correct: 1 },
    { q: "What does 'Solution First' mean?", options: ["Sell then think", "Confirm technical solution before selling", "Solution is optional", "Price is solution"], correct: 1 },
    { q: "Why clarify scope in writing?", options: ["To waste paper", "Verbal agreements mean nothing", "To look busy", "Legal requirement"], correct: 1 },
    { q: "What is the moral of the '$3000 Project' story?", options: ["Discounting works", "Holding price signals confidence/quality", "Clients hate expensive things", "Luck"], correct: 1 },

    // 71-75: Handover & Final (ORIGINAL)
    { q: "After the order is placed, who takes over?", options: ["Nobody", "You", "Project Manager (PM)", "CEO"], correct: 2 },
    { q: "What information do you pass to the PM?", options: ["Nothing", "Everything discussed + Scope", "Just the price", "Client name only"], correct: 1 },
    { q: "If you promised a feature, who needs to know?", options: ["No one", "The PM and Developer", "The Client only", "Instagram"], correct: 1 },
    { q: "True or False: We accept every client who pays.", options: ["True", "False (We filter)", "True, money is money", "False, we accept none"], correct: 1 },
    { q: "What defines a 'Digital Hero' salesperson?", options: ["Speed", "Lying", "Solving problems & Protecting the team", "Being cheap"], correct: 2 }
];
