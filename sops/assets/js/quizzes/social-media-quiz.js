const socialMediaQuestions = [
    // 1-5: Principles
    { q: "The '0 sales' Instagram account had:", options: ["No followers", "50k followers but 0.1% engagement", "Bad photos", "No links"], correct: 1 },
    { q: "Core Principle #1:", options: ["Buy followers", "Engagement Over Followers", "Post rarely", "Spam"], correct: 1 },
    { q: "Core Principle #2:", options: ["Post daily", "Consistency is King (Sustainable rhythm)", "Post once", "Sleep"], correct: 1 },
    { q: "Response Time Rule:", options: ["24 hours", "1 Hour (Social is SOCIAL)", "1 week", "Never"], correct: 1 },
    { q: "What is better?", options: ["100k dead followers", "1k engaged followers", "Buying followers", "No followers"], correct: 1 },

    // 6-10: Content Strategy
    { q: "80/20 Rule means:", options: ["80% Promo, 20% Value", "80% Value, 20% Promotional", "50/50", "100% Promo"], correct: 1 },
    { q: "What is a 'Hook' in a caption?", options: ["The end", "The first line that stops the scroll", "Hashtags", "Link"], correct: 1 },
    { q: "Caption Formula:", options: ["Link -> Text", "Hook -> Value -> CTA", "CTA -> Hook", "Random"], correct: 1 },
    { q: "Content Pillars are:", options: ["Columns", "Main themes (e.g., Education, BTS)", "Posts", "Hashtags"], correct: 1 },
    { q: "Value content includes:", options: ["Sales", "Education, Tips, How-tos", "Links", "Ads"], correct: 1 },

    // 11-15: Platforms
    { q: "Platform Rule:", options: ["Be everywhere", "Master 2-3 platforms", "Only one", "None"], correct: 1 },
    { q: "Instagram is best for:", options: ["Text", "Visuals/Lifestyle", "Long videos", "Links"], correct: 1 },
    { q: "LinkedIn is best for:", options: ["Teenagers", "B2B Clients / High Value Leads", "Dance videos", "Food"], correct: 1 },
    { q: "TikTok is best for:", options: ["B2B", "Gen Z / Viral Reach", "Photos", "Text"], correct: 1 },
    { q: "Twitter is best for:", options: ["Photos", "Text/Updates", "Videos", "Shopping"], correct: 1 },

    // 16-20: LinkedIn Strategy
    { q: "Why LinkedIn for Digital Heroes?", options: ["Fun", "#1 for B2B Clients ($10k+ projects)", "Easy", "Photos"], correct: 1 },
    { q: "LinkedIn Portfolio Post showcases:", options: ["Selfies", "Before/After Transformation", "Food", "Pets"], correct: 1 },
    { q: "LinkedIn Results Post:", options: ["We are good", "We increased conversion by 47% (Numbers)", "Hire us", "Hello"], correct: 1 },
    { q: "LinkedIn Educational Post:", options: ["Promos", "Expert tips (Shopify/Design)", "Jokes", "News"], correct: 1 },
    { q: "LinkedIn Post Frequency:", options: ["Daily", "3-5x/week", "Monthly", "never"], correct: 1 },

    // 21-25: Engagement
    { q: "Reply to comments involves:", options: ["Emoji", "Genuine conversation/Value", "Deleting", "Ignoring"], correct: 1 },
    { q: "DM: Product Inquiry response time:", options: ["1 day", "< 1 Hour", "1 week", "When free"], correct: 1 },
    { q: "DM: Complaint response time:", options: ["1 hour", "< 30 mins (Empathetic)", "Ignore", "Block"], correct: 1 },
    { q: "If someone compliments:", options: ["Ignore", "Thank & Encourage Review", "Delete", "Report"], correct: 1 },
    { q: "Why engage?", options: ["Boredom", "Builds Community & Trust", "Rules", "Nothing"], correct: 1 },

    // 26-30: Scheduling & Tools
    { q: "Best Posting Time (General India):", options: ["Midnight", "11 AM - 1 PM / 7 PM - 9 PM", "4 AM", "All day"], correct: 1 },
    { q: "Tools for Scheduling:", options: ["Paint", "Later, Buffer, Hootsuite", "Word", "Excel"], correct: 1 },
    { q: "Tool for Design:", options: ["Notepad", "Canva / Adobe Express", "Calc", "None"], correct: 1 },
    { q: "Why Schedule?", options: ["To forget", "Consistency & Efficiency", "Lazy", "Robotic"], correct: 1 },
    { q: "Hashtag Research Tools:", options: ["Google", "Flick / Display Purposes", "Bing", "None"], correct: 1 },

    // 31-35: Analytics
    { q: "Engagement Rate formula:", options: ["Likes/Followers", "(Interactions / Followers) * 100", "Views", "None"], correct: 1 },
    { q: "Target Engagement Rate:", options: ["0.1%", "3-5%+", "0%", "100%"], correct: 1 },
    { q: "Vanity Metric to ignore:", options: ["Sales", "Follower Count (without engagement)", "Clicks", "DM"], correct: 1 },
    { q: "Metric that matters:", options: ["Likes", "Sales / Website Clicks / Shares", "Views", "Followers"], correct: 1 },
    { q: "Saves indicate:", options: ["Accident", "High Value Content", "Dislike", "Spam"], correct: 1 },

    // 36-40: Scenarios
    { q: "Client wants to buy followers. You:", options: ["Do it", "Advise Against (Dead audience)", "Ignore", "Sure"], correct: 1 },
    { q: "Post gets 0 likes. You:", options: ["Delete immediately", "Analyze why & improve next time", "Quit", "Cry"], correct: 1 },
    { q: "Negative comment appears. You:", options: ["Delete", "Respond professionally or take offline", "Fight", "Block"], correct: 1 },
    { q: "Engagement is dropping. You:", options: ["Post more ads", "Check content quality & Ask audience", "Stop", "Panic"], correct: 1 },
    { q: "Viral post happens. You:", options: ["Ignore", "Engage with ALL comments & ride wave", "Delete", "Nothing"], correct: 1 },

    // 41-45: 2026 Mastery
    { q: "Algorithm loves:", options: ["Spam", "Retention (Watch time) & Engagement", "Links", "Bots"], correct: 1 },
    { q: "Video content (Reels/Shorts) is:", options: ["Dead", "Priority for Reach", "Optional", "Bad"], correct: 1 },
    { q: "SEO on Social Media means:", options: ["Nothing", "Using keywords in captions/bio", "Links", "Ads"], correct: 1 },
    { q: "UGC (User Generated Content) is:", options: ["Bad", "Gold (High trust)", "Expensive", "Fake"], correct: 1 },
    { q: "Community building is:", options: ["Optional", "The ultimate goal", "Hard", "Fast"], correct: 1 },

    // 46-50: Final Check
    { q: "True or False: You should post same content everywhere without edits.", options: ["True", "False (Tailor to platform)", "Yes", "Maybe"], correct: 1 },
    { q: "True or False: Consistency beats intensity.", options: ["True", "False", "No", "Maybe"], correct: 0 },
    { q: "True or False: Social Media is just for broadcasting.", options: ["True", "False (It's for dialogue)", "Maybe", "Yes"], correct: 1 },
    { q: "True or False: You can ignore DMs.", options: ["True", "False (Lost money)", "Yes", "Okay"], correct: 1 },
    { q: "The goal is:", options: ["Likes", "Revenue & Brand Impact", "Followers", "Fame"], correct: 1 }
];
