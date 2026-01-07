const chatQuestions = [
    // 1-5: Purpose & Ethics
    { q: "The primary purpose of simulated chats is:", options: ["Fake reviews", "Portfolio Building & Skill Development", "Spam", "Fun"], correct: 1 },
    { q: "We build reviews LEGITIMATELY through:", options: ["Fake accounts", "Real Work & Real Orders (even for friends)", "Bots", "Buying them"], correct: 1 },
    { q: "Why use real orders?", options: ["Platform detection is sophisticated (Fake patterns get caught)", "It's slower", "No reason", "To lose money"], correct: 1 },
    { q: "Who should the 'Buyer' be?", options: ["A fake bot", "A real person with an established account (Friend/Colleague)", "Yourself", "Anonymous"], correct: 1 },
    { q: "True or False: Every chat must lead to real work being delivered.", options: ["True", "False", "Maybe", "No"], correct: 0 },

    // 6-10: Chat Rules
    { q: "Minimum message count per side (Minimum Chat):", options: ["1", "4 messages (Total 8)", "10", "100"], correct: 1 },
    { q: "Message Timing Rule:", options: ["Send instantly", "1-10 minute gaps (Make it look real)", "Wait 1 day", "Random"], correct: 1 },
    { q: "Tone Rule:", options: ["Always same", "Never use the same buyer tone twice", "Always angry", "Always happy"], correct: 1 },
    { q: "Should every chat end perfectly?", options: ["Yes", "No, some should have realistic friction", "Maybe", "Always"], correct: 1 },
    { q: "Can you send messages back-to-back without gaps?", options: ["Yes", "NEVER", "Sometimes", "Maybe"], correct: 1 },

    // 11-15: Tones
    { q: "Professional Buyer characteristics:", options: ["Emojis", "Clear grammar, technical questions, specific budget", "Rude", "Lazy"], correct: 1 },
    { q: "Casual Buyer characteristics:", options: ["Formal", "Emojis, lower case, 'tbh', 'lol'", "Strict", "Angry"], correct: 1 },
    { q: "Urgent Buyer keyword:", options: ["Please", "ASAP / Rush", "Later", "Maybe"], correct: 1 },
    { q: "Demanding Buyer behavior:", options: ["Agrees instantly", "Questions everything, compares prices, skeptical", "Pays double", "Leaves"], correct: 1 },
    { q: "Seller tone should be:", options: ["Matching buyer", "Consistent Professional & Helpful", "Rude", "Funny"], correct: 1 },

    // 16-20: Mechanics
    { q: "What should you do with prices in prompts?", options: ["Keep exact", "Modify to match your actual services", "Delete them", "Randomize"], correct: 1 },
    { q: "Keywords to include:", options: ["Food names", "Shopify/Website service keywords (SEO, Design, Etc)", "Jokes", "None"], correct: 1 },
    { q: "Standard Chat length (Total):", options: ["2 messages", "12-16 messages", "50 messages", "100 messages"], correct: 1 },
    { q: "Extended Chat length (Total):", options: ["4 messages", "20-30 messages", "10 messages", "8 messages"], correct: 1 },
    { q: "All chats must eventually lead to:", options: ["A fight", "Order Placement or Update", "Cancellation", "Nothing"], correct: 1 },

    // 21-25: Scenarios 1
    { q: "Inquiry Chat Goal:", options: ["Say hi", "Discuss services, price, timeline -> Consideration", "Fight", "Sleep"], correct: 1 },
    { q: "Order Placement Chat must include:", options: ["Jokes", "Scope confirmation & Payment/Deposit mention", "Nothing", "Refund"], correct: 1 },
    { q: "Order Update Chat ending:", options: ["Client unhappy", "Client happy with progress", "Client ghosting", "Client cancelling"], correct: 1 },
    { q: "Revision Request Chat flow:", options: ["Reject changes", "Review -> Feedback -> Confirmation (Set boundaries)", "Ignore", "Block"], correct: 1 },
    { q: "Skeleton Price Comparison buyer asks:", options: ["Why are you so expensive?", "Are you free?", "Can I pay more?", "Hello"], correct: 0 },

    // 26-30: Scenarios 2
    { q: "Prompt #1 Buyer Persona:", options: ["Student", "Professional Business Owner ($2.5k budget)", "Gamer", "Bot"], correct: 1 },
    { q: "Prompt #3 (Urgent) involves:", options: ["Discount", "Rush Fee (+30%)", "Free work", "Delay"], correct: 1 },
    { q: "Prompt #10 (Bootstrapped Founder) options:", options: ["Full package", "MVP Package (Essentials only)", "Free", "Reject"], correct: 1 },
    { q: "Dropshipping Chat specific topic:", options: ["Code", "AliExpress/Oberlo/Product Imports", "Cooking", "Gaming"], correct: 1 },
    { q: "Enterprise Client Requirement:", options: ["None", "NDA, Invoicing, Procurement Approval", "Cash only", "Fast"], correct: 1 },

    // 31-35: Advanced Techniques
    { q: "Why use ChatGPT prompts?", options: ["To copy paste blindly", "To generate realistic, unique variations", "To cheat", "No reason"], correct: 1 },
    { q: "International Client (Timezone) chat:", options: ["Instant reply", "Delayed response (Async communication)", "Ignore", "Reject"], correct: 1 },
    { q: "Scope Creep handling:", options: ["Do it free", "Polite decline + Quote for extra work", "Fight", "Ghost"], correct: 1 },
    { q: "Recurring Client benefit:", options: ["None", "Speed & Trust (Maybe discount)", "Higher price", "Slower"], correct: 1 },
    { q: "Final Delivery Chat key element:", options: ["Bye", "Training/Login details & Support info", "Invoice", "Nothing"], correct: 1 },

    // 36-40: Troubleshooting Chats
    { q: "Buyer stops replying (Ghosting). You:", options: ["Spam them", "Wait significantly (Realistic decision time)", "Call", "Block"], correct: 1 },
    { q: "Buyer is angry. You:", options: ["Fight", "De-escalate, Apologize, Solve", "Ignore", "Refund"], correct: 1 },
    { q: "Buyer asks for discount. You:", options: ["Give 90% off", "Explain value or offer smaller package", "Say no rudely", "Quit"], correct: 1 },
    { q: "Buyer wants to pay off-platform. You:", options: ["Yes", "No (Violates TOS - keep on platform)", "Maybe", "Sure"], correct: 1 },
    { q: "Platform detection looks for:", options: ["Keywords", "Patterns (Same timing, same words, new accounts)", "Images", "Links"], correct: 1 },

    // 41-45: Final Check
    { q: "True or False: You should copy prompts exactly without reading.", options: ["True", "False (Modify specifics)", "Yes", "Maybe"], correct: 1 },
    { q: "True or False: A 2-message chat is acceptable.", options: ["True", "False (Minimum 4 each)", "Yes", "Maybe"], correct: 1 },
    { q: "True or False: You can fake the work delivery.", options: ["True", "False (Must be real work)", "Yes", "Maybe"], correct: 1 },
    { q: "True or False: Include typos in casual buyer messages.", options: ["True (Adds realism)", "False", "Never", "Bad"], correct: 0 },
    { q: "Goal of Portfolio Building:", options: ["Money", "Showcase communication & Quality work", "Fun", "None"], correct: 1 },

    // 46-50: Random
    { q: "Print-on-Demand key integration:", options: ["Oberlo", "Printful/Printify", "PayPal", "None"], correct: 1 },
    { q: "Migration Chat topic:", options: ["New design", "Data Transfer (SEO, Customers, Orders)", "Logo", "Colors"], correct: 1 },
    { q: "Redesign Chat focus:", options: ["Starting fresh", "Improvement (Conversion, Speed) vs Current", "Same", "Worse"], correct: 1 },
    { q: "Mid-Project Upsell example:", options: ["Full redesign", "Email Marketing / Speed / SEO", "Nothing", "Support"], correct: 1 },
    { q: "Referral Chat tone:", options: ["Cold", "Warm (Trust transfer)", "Angry", "Sad"], correct: 1 }
];
