const developerQuestions = [
    // 1-5: The Golden Code Rules
    { q: "What is the #1 Rule of Shopify Development?", options: ["Code fast", "NEVER work on the live theme directly", "Use many apps", "Ignore mobile"], correct: 1 },
    { q: "What is our target Mobile PageSpeed Score?", options: ["50+", "100", "85+", "30+"], correct: 2 },
    { q: "We build for which device FIRST?", options: ["Desktop (1920px)", "Tablet", "Mobile (375px)", "TV"], correct: 2 },
    { q: "What happens if you work on the live theme without backup?", options: ["Nothing", "You risk breaking the store during peak traffic", "It's faster", "Client loves it"], correct: 1 },
    { q: "Every 1-second delay in load time equals:", options: ["No change", "7% loss in conversions", "More sales", "Better SEO"], correct: 1 },

    // 6-10: Access & Setup
    { q: "How do you request store access?", options: ["Ask for password", "Request Collaborator Access", "Create new staff account", "Hack it"], correct: 1 },
    { q: "What do you need from the client to request access?", options: ["Their credit card", "The 4-digit Collaborator Request Code", "Their email password", "Their home address"], correct: 1 },
    { q: "If a client wants to share their login, you:", options: ["Accept it", "Politely decline and insist on Collaborator Access", "Share it with friends", "Ignore them"], correct: 1 },
    { q: "Which theme is recommended for minimalist/fast brands?", options: ["Dawn (Free)", "Impulse", "Prestige", "Warehouse"], correct: 0 },
    { q: "What is the very first step when identifying a theme?", options: ["Customize it", "Duplicate it", "Publish it", "Delete it"], correct: 1 },

    // 11-15: Homepage Structure
    { q: "What is the max word count for a Hero Headline?", options: ["20 words", "7 words", "No limit", "50 words"], correct: 1 },
    { q: "Where should the 'Track Your Order' link go?", options: ["Nowhere", "Header Menu", "Hidden", "Blog"], correct: 1 },
    { q: "Which app do we use for Order Tracking?", options: ["AfterShip", "17TRACK / i7 Track", "None", "Google Maps"], correct: 1 },
    { q: "What is the purpose of the 'Trust Bar'?", options: ["Look pretty", "Build confidence (Free shipping, returns, etc.)", "Fill space", "Show ads"], correct: 1 },
    { q: "How many images should a Product Page have minimum?", options: ["1", "3-5", "10+", "0"], correct: 1 },

    // 16-20: Product Page Optimization
    { q: "Product Descriptions should lead with:", options: ["Features", "Benefits (What it does for them)", "Technical details", "History"], correct: 1 },
    { q: "Why is a Size Guide important?", options: ["Reduces returns by 30%+", "It looks good", "Increases returns", "Nobody reads it"], correct: 0 },
    { q: "What is the #1 conversion driver after price?", options: ["Logo", "Customer Reviews", "Colors", "Footer"], correct: 1 },
    { q: "Where should the 'Add to Cart' button be on mobile?", options: ["Bottom of page", "Above the fold / Sticky", "Hidden", "Top only"], correct: 1 },
    { q: "Images should be compressed to below:", options: ["5MB", "1MB", "500KB", "10KB"], correct: 2 },

    // 21-25: Speed & Performance
    { q: "Which image format is preferred for Shopify?", options: ["BMP", "TIFF", "WebP (served by Shopify)", "GIF"], correct: 2 },
    { q: "How do you handle below-the-fold images?", options: ["Load immediately", "Lazy Load", "Delete them", "Blur them"], correct: 1 },
    { q: "Too many apps cause:", options: ["Faster speed", "Slower site speed (App bloat)", "More sales", "Better UI"], correct: 1 },
    { q: "Before marking a task complete, you must:", options: ["Go home", "Test on Mobile, Desktop, and Console", "Tell client", "Sleep"], correct: 1 },
    { q: "What is the 'Store Lost $50k/Day' lesson?", options: ["Code is art", "Code is Revenue (Bad code loses money)", "Clients are wrong", "Cheap is good"], correct: 1 },

    // 26-30: Menu & Navigation
    { q: "Which of these is a MANDATORY menu item?", options: ["Blog", "Track Your Order", "Partners", "Careers"], correct: 1 },
    { q: "Should the logo be transparent?", options: ["No", "Yes (PNG)", "Maybe", "JPG"], correct: 1 },
    { q: "What goes in the Announcement Bar?", options: [" nothing", "Key Offer (Free Shipping, Sale)", "Logo", "Menu"], correct: 1 },
    { q: "FAQ page answers:", options: ["Life questions", "Objections (Shipping, Returns)", "Jokes", "Math"], correct: 1 },
    { q: "Why use 'Compare-at' price?", options: ["To lie", "To show value/discount", "To increase tax", "No reason"], correct: 1 },

    // 31-35: Technical Workflow
    { q: "When working on a live site bug, you work on:", options: ["The live theme", "A duplicate/draft theme", "A different store", "Paper"], correct: 1 },
    { q: "If you break the live site, what was your mistake?", options: ["Bad luck", "Not working on a backup/duplicate", "Shopify's fault", "Client's fault"], correct: 1 },
    { q: "How do you test a 'Production Bug'?", options: ["Guess", "Replicate on backup theme", "Wait", "Email support"], correct: 1 },
    { q: "If an app conflicts with the theme, you:", options: ["Delete theme", "Inspect console / Contact app support", "Ignore it", "Refund"], correct: 1 },
    { q: "Client wants to edit code. You say:", options: ["Sure", "Advise against it / Offer to do it safely", "Give password", "Quit"], correct: 1 },

    // 36-40: Scenarios
    { q: "Site is slow (Score 40). First check:", options: ["Fonts", "Image sizes and App bloat", "Client name", "Logo"], correct: 1 },
    { q: "Images look blurry. Problem is:", options: ["Screen", "Image dimensions too small or compression too high", "Internet", "Browser"], correct: 1 },
    { q: "Checkout has errors. Impact is:", options: ["Low", "Critical ($0 Sales)", "Medium", "None"], correct: 1 },
    { q: "Client asks for 'Amazon style menu'. You:", options: ["Do it", "Check feasibility & Budget first", "Say no", "Laugh"], correct: 1 },
    { q: "You finished the build. Next step is:", options: ["Send invoice", "Full QA (Links, Checkout, Mobile)", "Logout", "Sleep"], correct: 1 },

    // 41-45: Optimization Details
    { q: "What is 'Alt Text' used for in Shopify?", options: ["SEO & Accessibility", "Hiding images", "Nothing", "Style"], correct: 0 },
    { q: "Why limit fonts to 2 families?", options: ["Ugly", "Performance (Load speed) & Design consistency", "Shopify limit", "Cost"], correct: 1 },
    { q: "Sticky ATC button is crucial for:", options: ["Desktop", "Mobile conversion", "Tablet", "Admin"], correct: 1 },
    { q: "What identifies a 'Trust Badge'?", options: ["Brand logo", "Secure Payment / Guarantee icons", "Product photo", "Menu"], correct: 1 },
    { q: "Where do you find the collaborator request status?", options: ["Email", "Settings -> Users -> Collaborators", "Products", "Themes"], correct: 1 },

    // 46-50: Final Exam
    { q: "True or False: We always use the 'Dawn' theme.", options: ["True", "False (Depends on brand/budget)", "Always Prestige", "Never Dawn"], correct: 1 },
    { q: "True or False: 17Track is the standard tracking app.", options: ["True", "False", "Use Aftership", "None"], correct: 0 },
    { q: "True or False: Mobile view is more important than Desktop.", options: ["True (70% traffic)", "False", "Equal", "Desktop is king"], correct: 0 },
    { q: "True or False: You can leave the site with a 50 speed score if it looks good.", options: ["True", "False (Target 85+)", "Maybe", "Client decides"], correct: 1 },
    { q: "True or False: You must test the Contact Form.", options: ["True", "False", "Rarely", "Never"], correct: 0 }
];
