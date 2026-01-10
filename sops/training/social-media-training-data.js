// Social Media Manager Training Data
// Complete training content for Social Media certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "Social Mindset",
        description: "Community & Growth",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize that 'Engagement' is the currency",
            "🛡️ Understand we are 'Community Builders', not just posters",
            "🚀 Learn the 'Give, Give, Ask' philosophy"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Memorize the 3 ecosystem arms",
            "💎 Understand the 'Premium' aesthetic standard",
            "📢 Learn how Social supports the Agency & Media arms"
        ]
    },
    {
        id: 3,
        title: "Platform Mastery",
        description: "The right tool for the job",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "📊 Study the Platform Comparison Matrix",
            "📸 Master Instagram/TikTok (Visual)",
            "👔 Master LinkedIn/Twitter (Text/Professional)"
        ]
    },
    {
        id: 4,
        title: "Content Creation",
        description: "Making viral hits",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-40 minutes",
            "🪝 Study the Viral Hook Anatomy",
            "🎥 Learn video editing basics (CapCut)",
            "🎨 Understand static design basics (Canva/Figma)"
        ]
    },
    {
        id: 5,
        title: "The Funnel Strategy",
        description: "Views to Cash",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🔻 Study the Social Media Funnel Diagram",
            "👀 Learn 'Awareness' vs 'Engagement' vs 'Conversion'",
            "🔗 Understand the 'Link in Bio' strategy"
        ]
    },
    {
        id: 6,
        title: "Community Management",
        description: "Replying & Engaging",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "💬 The 'Reply to Everyone' rule",
            "🔥 Handling trolls and negative comments",
            "💌 Turning DMs into leads"
        ]
    },
    {
        id: 7,
        title: "Tools & Analytics",
        description: "Measuring success",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📈 Tracking KPI: Reach vs Engagement Rate",
            "📅 Using scheduling tools (Buffer/Metricool)",
            "🕵️‍♀️ Competitor analysis tools"
        ]
    },
    {
        id: 8,
        title: "Influencer Collaboration",
        description: "Expanding reach",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🤝 How to outreach to influencers",
            "🎁 The 'Seeding' strategy (Product gifting)",
            "📝 Negotiating deliverables"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world simulations",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🔥 Handle a 'PR Crisis' in the comments",
            "🎥 Script a 15-second Reel for a product launch",
            "💌 Draft a DM reply to an angry customer"
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
            "🎉 Get ready to go viral!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: SOCIAL MINDSET</h2>

<div class="content-section">
<h3>🎯 More Than Just "Posting"</h3>
<p>Social Media is the <strong>voice</strong> of the brand.</p>
<ul>
<li><strong>We represent quality:</strong> No pixelated images, no typos.</li>
<li><strong>We build trust:</strong> By being human and responsive.</li>
<li><strong>We drive growth:</strong> Every post has a purpose.</li>
</ul>
</div>

<div class="content-section">
<h3>💡 The Philosophy: Give, Give, Ask</h3>
<div class="highlight-box">
<strong>Do not just sell.</strong>
<ol>
<li><strong>Give Value:</strong> Teach something.</li>
<li><strong>Give Entertainment:</strong> Make them laugh/smile.</li>
<li><strong>Ask:</strong> Then, and only then, ask for the sale.</li>
</ol>
</div>
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
<h3>🏢 The Ecosystem Engine</h3>
<p>Social Media feeds all parts of Digital Heroes:</p>
<ul>
<li><strong>Media Arm:</strong> YouTube clips go to TikTok/Shorts to drive subscribers.</li>
<li><strong>Agency Arm:</strong> Case studies go to LinkedIn to attract high-ticket clients.</li>
<li><strong>Talent:</strong> Culture posts attract top employees.</li>
</ul>
</div>

<div class="content-section">
<h3>💎 The Aesthetic</h3>
<p>Our feed must look <strong>Premium</strong>.</p>
<div class="warning-box">
<ul>
<li>❌ No cluttered graphics.</li>
<li>❌ No generic stock photos.</li>
<li>✅ Clean typography.</li>
<li>✅ High-resolution visuals.</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: PLATFORM MASTERY</h2>

<div class="content-section">
<h3>📊 Choosing the Right Battlefield</h3>
<img src="images/platform_matrix.png" alt="Social Platform Matrix" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>📱 Platform Nuances</h3>
<ul>
<li><strong>TikTok/Reels:</strong> Unpolished, raw, trends, fast entertainment.</li>
<li><strong>Instagram Grid:</strong> Polished, aesthetic, portfolio-like.</li>
<li><strong>LinkedIn:</strong> Professional, thought leadership, educational text.</li>
<li><strong>Twitter/X:</strong> News, quick thoughts, conversation threads.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about platforms</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CONTENT CREATION</h2>

<div class="content-section">
<h3>🪝 Anatomy of a Viral Post</h3>
<img src="images/viral_hook_anatomy.png" alt="Viral Hook Anatomy" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🎥 Video Rules (Reels/TikTok)</h3>
<ul>
<li><strong>0-3 Seconds:</strong> The Visual Hook. Must move or intrigue immediately.</li>
<li><strong>Pacing:</strong> Cut out "umms" and silence. Keep it fast.</li>
<li><strong>Captions:</strong> Mandatory (Most people watch mute).</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about creation</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: THE FUNNEL STRATEGY</h2>

<div class="content-section">
<h3>🔻 From Scroll to Sale</h3>
<img src="images/social_media_funnel.png" alt="Social Media Funnel" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🎯 Success Metrics per Stage</h3>
<ul>
<li><strong>Awareness (Top):</strong> Views, Impressions. (Goal: Get seen)</li>
<li><strong>Engagement (Middle):</strong> Likes, Comments, Shares. (Goal: Build trust)</li>
<li><strong>Conversion (Bottom):</strong> Link Clicks, DM Inquiries. (Goal: Make money)</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about funnels</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: COMMUNITY MANAGEMENT</h2>

<div class="content-section">
<h3>💬 Engage or Die</h3>
<div class="highlight-box">
<strong>The Algorithm loves comments.</strong>
<p>If someone comments, reply. It doubles the comment count instantly and signals "Active" to the algorithm.</p>
</div>
</div>

<div class="content-section">
<h3>🔥 Crisis Management</h3>
<p>Negative comment? Don't delete (unless hate speech).</p>
<ul>
<li><strong>Kill with kindness:</strong> "Sorry to hear that! DM us and we'll fix it."</li>
<li><strong>Move it to private:</strong> Get them out of the public comments ASAP.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about interactions</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: TOOLS & ANALYTICS</h2>

<div class="content-section">
<h3>📈 What Matters</h3>
<ul>
<li><strong>Vanity Metrics:</strong> Likes, Followers. (Look good, but limited value).</li>
<li><strong>Real Metrics:</strong> Shares, Saves, Clicks. (Indicate high intent).</li>
</ul>
</div>

<div class="content-section">
<h3>🛠️ The Stack</h3>
<ul>
<li><strong>CapCut:</strong> Fast mobile editing.</li>
<li><strong>Canva:</strong> Graphic design.</li>
<li><strong>Metricool/Buffer:</strong> Scheduling (Don't post manually every day).</li>
<li><strong>ManyChat:</strong> Automated DM funnels.</li>
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
<h2>📚 TASK 8: INFLUENCER COLLABORATION</h2>

<div class="content-section">
<h3>🤝 The Multiplier Effect</h3>
<p>Why build an audience from scratch when you can borrow someone else's?</p>
</div>

<div class="content-section">
<h3>🎁 Seeding Strategy</h3>
<ol>
<li>Send free product with NO strings attached.</li>
<li>Include a handwritten note.</li>
<li>If they post, GREAT. If not, follow up politely once.</li>
<li>Build the relationship first, ask for the promo second.</li>
</ol>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about influencers</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🧠 Scenario 1: Angry Comment</h3>
<p><strong>"Your product is scam! It broke in 2 days!"</strong></p>
<div class="highlight-box">
<strong>Correct Reply:</strong> "Oh no! That doesn't sound right at all. We have a 1-year guarantee. Please DM us immediately so we can send a replacement + a gift for the trouble!" (Shows others you care).
</div>
</div>

<div class="content-section">
<h3>🎥 Scenario 2: Viral Trend</h3>
<p>A new audio is trending on TikTok.</p>
<ul>
<li><strong>Action:</strong> Adapt it to our niche TODAY. Speed is key. Trends die in 48 hours.</li>
</ul>
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
<p>You've completed the Social Media Manager training. This final assessment covers:</p>
<ul>
<li>✅ Platform Strategies (IG vs TikTok vs LinkedIn)</li>
<li>✅ Viral Content Creation</li>
<li>✅ Funnel Metrics</li>
<li>✅ Community Management Protocol</li>
<li>✅ Crisis Handling</li>
<li>✅ Analytics & Tools</li>
<li>✅ Influencer Outreach</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your Social Media Certification.</p>
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
        { q: "Currency of social media:", o: ["Engagement", "Money", "Followers only", "Colors"], c: 0 },
        { q: "We are:", o: ["Posters", "Community Builders", "Spammers", "Salespeople"], c: 1 },
        { q: "Give Give Ask means:", o: ["Ask Ask Give", "Value Value Sale", "Sale Sale Sale", "Give Sale Give"], c: 1 },
        { q: "Social media represents:", o: ["The CEO", "The Brand Voice", "The Intern", "Nobody"], c: 1 },
        { q: "Trust is built by:", o: ["Selling hard", "Being human & responsive", "Ignoring comments", "Deleting posts"], c: 1 },
        { q: "Every post needs:", o: ["A picture", "A purpose", "A cat", "An emoji"], c: 1 },
        { q: "Quality standard:", o: ["Low res ok", "Pixel perfect/Premium", "Blurry", "Random"], c: 1 },
        { q: "Community building involves:", o: ["Posting and leaving", "Replying and engaging", "Blocking everyone", "Hiding"], c: 1 },
        { q: "Growth comes from:", o: ["Luck", "Strategy & Consistency", "Buying followers", "Posting once"], c: 1 },
        { q: "If you don't ask for the sale:", o: ["You sell more", "You miss potential revenue", "It's better", "People guess"], c: 1 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "YouTube clips go to:", o: ["LinkedIn", "TikTok/Shorts", "Email", "Nowhere"], c: 1 },
        { q: "LinkedIn is for:", o: ["Kids", "High-ticket clients/Agency", "Dance videos", "Memes"], c: 1 },
        { q: "Aesthetic rule:", o: ["Cluttered", "Clean & Premium", "Dark only", "Neon only"], c: 1 },
        { q: "Culture posts attract:", o: ["Clients", "Talent/Employees", "Nobody", "Spam"], c: 1 },
        { q: "Avoid:", o: ["High res", "Generic stock photos", "Original content", "Videos"], c: 1 },
        { q: "Social feeds:", o: ["The Media Arm", "The Agency Arm", "The Whole Ecosystem", "Nothing"], c: 2 },
        { q: "Premium means:", o: ["Expensive", "High quality execution", "Slow", "Snobby"], c: 1 },
        { q: "Typography should be:", o: ["Clean", "Messy", "Comic Sans", "Tiny"], c: 0 },
        { q: "Visuals must be:", o: ["Low res", "High Resolution", "Black and white", "Stretched"], c: 1 },
        { q: "Agency arm sells:", o: ["Cheap items", "High ticket services", "Merch", "Food"], c: 1 }
    ],
    // Task 3: Platforms
    [
        { q: "TikTok is for:", o: ["Professional news", "Raw/Fast Entertainment", "Long articles", "Photos"], c: 1 },
        { q: "LinkedIn is for:", o: ["Dancing", "Professional/B2B", "Gaming", "Shopping"], c: 1 },
        { q: "Instagram Grid is:", o: ["Messy", "A Portfolio/Polished", "Disappearing", "Text only"], c: 1 },
        { q: "Twitter/X is for:", o: ["News/Conversation", "Long videos", "Music", "Filters"], c: 0 },
        { q: "Reels content style:", o: ["Slow", "Fast/Trends", "Static", "Boring"], c: 1 },
        { q: "Platform for B2B leads:", o: ["TikTok", "LinkedIn", "Pinterest", "Snapchat"], c: 1 },
        { q: "Platform for Gen Z:", o: ["Facebook", "TikTok", "LinkedIn", "Email"], c: 1 },
        { q: "Visual aesthetics matter most on:", o: ["Twitter", "Instagram", "Reddit", "Discord"], c: 1 },
        { q: "Real-time updates go to:", o: ["YouTube", "Twitter/X", "Pinterest", "Blog"], c: 1 },
        { q: "Looping videos best for:", o: ["LinkedIn", "TikTok", "Facebook", "Email"], c: 1 }
    ],
    // Task 4: Content Creation
    [
        { q: "Visual Hook length:", o: ["10 sec", "0-3 sec", "1 min", "End of video"], c: 1 },
        { q: "Captions are:", o: ["Optional", "Mandatory", "Annoying", "Bad"], c: 1 },
        { q: "Pacing should be:", o: ["Slow", "Fast/No silence", "Relaxed", "Silent"], c: 1 },
        { q: "Umms and pauses:", o: ["Keep them", "Cut them out", "Emphasize them", "Loop them"], c: 1 },
        { q: "Visual hook must:", o: ["Be black", "Move or intrigue", "Be static", "Be text only"], c: 1 },
        { q: "Viral anatomy includes:", o: ["Hook, Value, CTA", "Title, Body, Footer", "Image, Text, Link", "None"], c: 0 },
        { q: "CTA stands for:", o: ["Call To Action", "Cat To Adopt", "Click The Ad", "None"], c: 0 },
        { q: "Most people watch video:", o: ["With sound", "On Mute", "On TV", "In VR"], c: 1 },
        { q: "Text hook is the:", o: ["Footer", "Headline", "Hashtag", "Bio"], c: 1 },
        { q: "Stop the scroll means:", o: ["Crash the app", "Grab attention instantly", "Block user", "End video"], c: 1 }
    ],
    // Task 5: Funnel
    [
        { q: "Top of funnel:", o: ["Sales", "Awareness/Views", "Email", "Loyalty"], c: 1 },
        { q: "Middle of funnel:", o: ["Views", "Engagement/Trust", "Referrals", "Exits"], c: 1 },
        { q: "Bottom of funnel:", o: ["Likes", "Conversion/Sales", "Comments", "Shares"], c: 1 },
        { q: "Metric for Awareness:", o: ["Sales", "Views/Impressions", "Clicks", "DMs"], c: 1 },
        { q: "Metric for Conversion:", o: ["Likes", "Link Clicks/DMs", "Views", "Saves"], c: 1 },
        { q: "Metric for Engagement:", o: ["Likes/Comments", "Reach", "Impressions", "Bounces"], c: 0 },
        { q: "Link in Bio is for:", o: ["Decoration", "Conversion", "Fun", "Nothing"], c: 1 },
        { q: "Goal of Awareness:", o: ["Get money", "Get seen", "Get support", "Get emails"], c: 1 },
        { q: "Goal of Engagement:", o: ["Build Trust", "Sell immediately", "Annoy", "Ignore"], c: 0 },
        { q: "DMs often lead to:", o: ["Sales", "Bans", "Nothing", "Spam"], c: 0 }
    ],
    // Task 6: Community
    [
        { q: "Reply to:", o: ["Nobody", "Everyone", "Only friends", "Only verified"], c: 1 },
        { q: "Comments help:", o: ["The algorithm", "Nobody", "Slow down phone", "Spammers"], c: 0 },
        { q: "Negative comment action:", o: ["Delete", "Kill with kindness/Move to private", "Argue", "Ignore"], c: 1 },
        { q: "Hate speech action:", o: ["Reply", "Delete/Block", "Pin", "Like"], c: 1 },
        { q: "Move to private means:", o: ["Hide", "DM the user", "Delete account", "Block"], c: 1 },
        { q: "Responding quickly signals:", o: ["Desperation", "Good service/Active", "Boredom", "Nothing"], c: 1 },
        { q: "Algorithm loves:", o: ["Silence", "Activity/Interaction", "Static images", "Links"], c: 1 },
        { q: "Trolls want:", o: ["Help", "Attention/Reaction", "Money", "Friends"], c: 1 },
        { q: "Turning DMs into:", o: ["Leads", "Enemies", "Trash", "Spam"], c: 0 },
        { q: "Customer service on social is:", o: ["Public", "Critical", "Optional", "Bad"], c: 1 }
    ],
    // Task 7: Tools
    [
        { q: "Vanity Metrics:", o: ["Sales", "Likes/Followers", "Clicks", "Leads"], c: 1 },
        { q: "Real Metrics:", o: ["Shares/Saves/Clicks", "Likes", "Views", "Colors"], c: 0 },
        { q: "CapCut is for:", o: ["Photos", "Video Editing", "Scheduling", "Email"], c: 1 },
        { q: "Canva is for:", o: ["Coding", "Graphic Design", "Video", "Music"], c: 1 },
        { q: "Metricool is for:", o: ["Cooking", "Scheduling/Analytics", "Gaming", "Dancing"], c: 1 },
        { q: "ManyChat is for:", o: ["Video", "DM Automation", "Photos", "Text"], c: 1 },
        { q: "Manual posting is:", o: ["Efficient", "Inefficient", "Required", "Fun"], c: 1 },
        { q: "Intent is shown by:", o: ["Views", "Saves/Shares", "Scrolling", "Ignoring"], c: 1 },
        { q: "High Reach means:", o: ["Many saw it", "Many bought", "Many liked", "None"], c: 0 },
        { q: "High Engagement means:", o: ["Many saw it", "Many interacted", "Nobody saw it", "Bad content"], c: 1 }
    ],
    // Task 8: Influencers
    [
        { q: "Seeding means:", o: ["Gardening", "Gifting product freely", "Paying cash", "Begging"], c: 1 },
        { q: "First step with influencer:", o: ["Ask for promo", "Build relationship", "Send contract", "Pay money"], c: 1 },
        { q: "Multiplier effect:", o: ["Borrowing audience", "Paying ads", "Posting more", "None"], c: 0 },
        { q: "If they don't post:", o: ["Sue them", "Follow up politely once", "Harass them", "Cry"], c: 1 },
        { q: "Handwritten note adds:", o: ["Cost", "Personal touch", "Weight", "Nothing"], c: 1 },
        { q: "Outreach should be:", o: ["Generic", "Personalized", "Robotic", "Rude"], c: 1 },
        { q: "Deliverables are:", o: ["Food", "What they create (Post/Reel)", "Shipping", "Boxes"], c: 1 },
        { q: "Micro-influencers have:", o: ["Low trust", "High trust/Engagement", "Millions of followers", "Bots"], c: 1 },
        { q: "Gifting requires:", o: ["Contract", "No strings attached initially", "Payment", "Lawyer"], c: 1 },
        { q: "Follow up frequency:", o: ["Daily", "Once", "Hourly", "Never"], c: 1 }
    ],
    // Task 9: Scenarios
    [
        { q: "Angry comment reply:", o: ["You lie", "DM us to fix it + Gift", "Ignore", "Delete"], c: 1 },
        { q: "Viral trend action:", o: ["Ignore", "Adapt quickly (48hr)", "Wait a week", "Copy exactly"], c: 1 },
        { q: "Product launch needs:", o: ["Text post", "Hype video/Reel", "Nothing", "Email only"], c: 1 },
        { q: "Scam accusation:", o: ["Block", "Address publicly & politelys", "Hide", "Run"], c: 1 },
        { q: "Trend lifespan:", o: ["Months", "Years", "Hours/Days (48hr)", "Forever"], c: 2 },
        { q: "Speed matters for:", o: ["Quality", "Trends", "Scheduling", "Hashtags"], c: 1 },
        { q: "Guarantee mention helps:", o: ["Build trust", "Lose money", "Confuse", "Nothing"], c: 0 },
        { q: "Adapting trend means:", o: ["Doing same dance", "Applying concept to niche", "Changing audio", "Deleting"], c: 1 },
        { q: "Crisis goal:", o: ["Win argument", "Resolve/De-escalate", "Get likes", "Go viral"], c: 1 },
        { q: "Public apology:", o: ["Shows weakness", "Shows accountability", "Is bad", "Never do it"], c: 1 }
    ],
    // Task 10: Final (20)
    [
        { q: "Engagement currency:", o: ["Likes", "Comments/Interactions", "Views", "None"], c: 1 },
        { q: "Platform Matrix:", o: ["Choosing right platform", "Movie", "Game", "None"], c: 0 },
        { q: "Viral Anatomy:", o: ["Hook, Body, CTA", "Head, Shoulders, Knees", "Start, End", "None"], c: 0 },
        { q: "Funnel Conversion:", o: ["Top", "Bottom", "Middle", "Side"], c: 1 },
        { q: "Community Mgt:", o: ["Posting", "Replying", "Designing", "Editing"], c: 1 },
        { q: "Crisis Rule:", o: ["Delete", "Kill with kindness", "Block", "Scream"], c: 1 },
        { q: "Real Metric:", o: ["Like", "Share/Save", "View", "Scroll"], c: 1 },
        { q: "CapCut:", o: ["Editing", "Posting", "Analytics", "Writing"], c: 0 },
        { q: "Seeding:", o: ["Gifting", "Paying", "Selling", "Planting"], c: 0 },
        { q: "TikTok style:", o: ["Raw/Fast", "Polished", "Static", "Slow"], c: 0 },
        { q: "LinkedIn style:", o: ["Professional", "Dance", "Meme", "News"], c: 0 },
        { q: "Hook time:", o: ["30 sec", "3 sec", "1 min", "5 sec"], c: 1 },
        { q: "CTA:", o: ["Call To Action", "Click To Add", "None", "Call The Agent"], c: 0 },
        { q: "Algorithm likes:", o: ["Silence", "Engagement", "Reports", "Blocks"], c: 1 },
        { q: "Premium aesthetic:", o: ["Clean/High Res", "Blurry", "Cluttered", "Dark"], c: 0 },
        { q: "Metricool:", o: ["Cool meter", "Scheduling Tool", "Ice cream", "None"], c: 1 },
        { q: "Ecosystem:", o: ["Media/Agency/Talent", "Forest", "Web", "None"], c: 0 },
        { q: "Give Give Ask:", o: ["Value Value Sale", "Sale Sale Sale", "Ask Ask Ask", "None"], c: 0 },
        { q: "Captions:", o: ["Mandatory", "Optional", "Bad", "Ugly"], c: 0 },
        { q: "Link in Bio:", o: ["Conversion point", "Bio info", "Name", "Nothing"], c: 0 }
    ]
];
