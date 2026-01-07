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

    // 11-15: Sales Process
    { q: "What is the correct order of the sales process?", options: ["Order -> Problems -> Budget", "Problems -> Budget -> Order", "Budget -> Order -> Problems", "Order -> Budget -> Problems"], correct: 1 },
    { q: "When do you collect routine assets (logo, login)?", options: ["First message", "Before order", "AFTER order is placed", "During negotiation"], correct: 2 },
    { q: "What should you do if you are unsure about a hard technical problem?", options: ["Guess YES", "Escalate to senior team before committing", "Ignore it", "Say NO immediately"], correct: 1 },
    { q: "Do we offer free consulting?", options: ["Yes, unlimited", "No, solve problems briefly to confirm feasibility only", "Yes, for 1 hour", "Yes, via Zoom"], correct: 1 },
    { q: "What is the payment term for most projects?", options: ["100% Upfront", "50% deposit", "Pay after delivery", "Net 30"], correct: 0 },

    // 16-20: Closing & Objection Handling
    { q: "If a client says 'That's too expensive', what is the likely real issue?", options: ["Price is too high", "Trust or Value not established", "They have no money", "They hate you"], correct: 1 },
    { q: "Why is holding your price firm important?", options: ["It's stubborn", "It signals confidence and quality", "It scares clients away", "It's policy"], correct: 1 },
    { q: "What is the '100% Rule' before accepting a project?", options: ["100% payment", "100% SURE you can solve every identified problem", "100% discount", "100% profit"], correct: 1 },
    { q: "If a client has a tighter budget than your quote, you should:", options: ["Discount the price", "Reduce the scope to match budget", "Ghost them", "Argue"], correct: 1 },
    { q: "What is the best response to 'Can you match X's rate'?", options: ["Yes", "Sure", "Disqualify or Explain Value Gap", "Maybe"], correct: 2 },

    // 21-25: Commission & Earnings
    { q: "Commission is paid when?", options: ["Immediately", "After project payment is received", "Before work starts", "Monthly"], correct: 1 },
    { q: "Does a $4,500 project earn commission?", options: ["Yes", "No", "Maybe", "Depends on client"], correct: 1 },
    { q: "Who pays the commission?", options: ["The client", "The Agency", "Shopify", "The Developer"], correct: 1 },
    { q: "What helps increase project value?", options: ["Upselling", "Discounting", "Rushing", "Deleting features"], correct: 0 },
    { q: "Can you offer discounts to close deals?", options: ["Yes, up to 20%", "No, Price Firm", "Yes, if client asks", "Yes, for friends"], correct: 1 },

    // 26-30: Scenarios
    { q: "Client: 'Is Zoho integration possible?' You should:", options: ["Say YES immediately", "Confirm compatibility first", "Say NO", "Ignore"], correct: 1 },
    { q: "Client: 'I'll pay after I see the work.' You say:", options: ["Okay", "Disqualify / Firm Policy", "50% is ok", "Sure, trust me"], correct: 1 },
    { q: "Client needs a specific deadline. You should:", options: ["Say YES", "Check with team/calendar first", "Ignore it", "Guess"], correct: 1 },
    { q: "A 'Price Shopper' usually leads to:", options: ["Profit", "Haggling forever (Waste of time)", "Quick sale", "Long term partnership"], correct: 1 },
    { q: "If you have 2 red flags and 1 yellow flag, action is:", options: ["Proceed", "Consult Manager", "Disqualify", "Charge double"], correct: 2 },

    // 31-35: Tools & Communication
    { q: "Where should you communicate with leads?", options: ["WhatsApp personal", "Platform Messages (Inbox)", "Instagram", "Snapchat"], correct: 1 },
    { q: "Why use 'You-centric' language?", options: ["To sound selfish", "To focus on Client's benefits", "To sound professional", "To be grammar correct"], correct: 1 },
    { q: "Which badge is NOT a standard selling point?", options: ["$1,200+ Projects", "Price Firm", "Huge Discounts", "4.9 Rating"], correct: 2 },
    { q: "What is the goal of the first few messages?", options: ["Get the order", "Qualify/Identify Red Flags", "Become friends", "Share portfolio"], correct: 1 },
    { q: "If a client is unresponsive during sales, you should:", options: ["Spam them", "Follow up politely 1-2 times then move on", "Call them", "Report them"], correct: 1 },

    // 36-40: Advanced Principles
    { q: "Why do we avoid 'Rush Jobs'?", options: ["We are lazy", "Rushing leads to mistakes/bad experience", "We don't like money", "No reason"], correct: 1 },
    { q: "If a project is 'Easy', what should you check for?", options: ["Nothing", "Scope Creep signals", "Payment", "Reviews"], correct: 1 },
    { q: "What does 'Solution First' mean?", options: ["Sell then think", "Confirm technical solution before selling", "Solution is optional", "Price is solution"], correct: 1 },
    { q: "Why clarify scope in writing?", options: ["To waste paper", "Verbal agreements mean nothing", "To look busy", "Legal requirement"], correct: 1 },
    { q: "What is the moral of the '$3000 Project' story?", options: ["Discounting works", "Holding price signals confidence/quality", "Clients hate expensive things", "Luck"], correct: 1 },

    // 41-45: Handover
    { q: "After the order is placed, who takes over?", options: ["Nobody", "You", "Project Manager (PM)", "CEO"], correct: 2 },
    { q: "What information do you pass to the PM?", options: ["Nothing", "Everything discussed + Scope", "Just the price", "Client name only"], correct: 1 },
    { q: "If you promised a feature, who needs to know?", options: ["No one", "The PM and Developer", "The Client only", "Instagram"], correct: 1 },
    { q: "Can you stay in the chat after handover?", options: ["Yes, to support", "No, leave immediately", "Yes, to upsell", "No, hide"], correct: 0 },
    { q: "A smooth handover ensures:", options: ["Confusion", "Client confidence", "Delay", "Refund"], correct: 1 },

    // 46-50: Final Exam
    { q: "True or False: We accept every client who pays.", options: ["True", "False (We filter)", "True, money is money", "False, we accept none"], correct: 1 },
    { q: "True or False: Commission is 5% on total value for >$5k projects.", options: ["True", "False", "Only on profit", "Only on upsells"], correct: 0 },
    { q: "True or False: We discount for new clients.", options: ["True", "False (No Discounts)", "Sometimes", "Always"], correct: 1 },
    { q: "True or False: Routine questions (logo, etc) come BEFORE order.", options: ["True", "False (AFTER order)", "Both", "Never"], correct: 1 },
    { q: "What defines a 'Digital Hero' salesperson?", options: ["Speed", "Lying", "Solving problems & Protecting the team", "Being cheap"], correct: 2 }
];
