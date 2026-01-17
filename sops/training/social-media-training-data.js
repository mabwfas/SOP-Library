// Social Media Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "Social Media Mindset", description: "Engagement = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📱 Why social matters", "📖 Read social-media-sop.html"] },
    { id: 2, title: "Platform Mastery", description: "Instagram, Facebook, LinkedIn", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎯 Platform strategies", "📖 Study platform guides"] },
    { id: 3, title: "Content Creation", description: "Posts that Perform", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📝 Content types", "📖 Study content calendar"] },
    { id: 4, title: "Visual Design", description: "Scroll-Stopping Graphics", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎨 Design principles", "📖 Study Canva templates"] },
    { id: 5, title: "Hashtag Strategy", description: "Reach More People", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "#️⃣ Hashtag research", "📖 Study hashtag lists"] },
    { id: 6, title: "Community Management", description: "Engage & Respond", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💬 Engagement tactics", "📖 Study response templates"] },
    { id: 7, title: "Analytics & Insights", description: "Data-Driven Decisions", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Metrics that matter", "📖 Study analytics tools"] },
    { id: 8, title: "Content Scheduling", description: "Consistency is Key", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📅 Scheduling tools", "📖 Study posting times"] },
    { id: 9, title: "Trend Riding", description: "Viral Opportunities", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🔥 Trend spotting", "📖 Study trend examples"] },
    { id: 10, title: "Final Certification", description: "Social Media Mastery", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions"] }
];

const task1Content = `
<h2>📚 TASK 1: SOCIAL MEDIA MINDSET</h2>

<div class="content-section">
    <h3>📱 Why Social Media Matters for Business</h3>
    <p>Social media isn't about posting pretty pictures. <strong>It's a revenue channel.</strong></p>
    
    <div class="highlight-box">
        <strong>🔥 THE REALITY:</strong>
        <ul>
            <li>54% of social browsers use social media to research products</li>
            <li>71% of consumers who have a positive experience recommend the brand</li>
            <li>Social media leads have 13% higher conversion rate than outbound leads</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The Social Media Professional's Role</h3>
    <ul>
        <li>📢 <strong>Brand Builder:</strong> Create recognition and trust</li>
        <li>🤝 <strong>Community Manager:</strong> Build relationships with followers</li>
        <li>📈 <strong>Growth Driver:</strong> Generate leads and traffic</li>
        <li>🎨 <strong>Content Creator:</strong> Produce engaging, shareable content</li>
    </ul>
</div>

<div class="content-section">
    <h3>📊 The Content Pillars</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Pillar</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Example</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Educate</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Build authority</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tips, how-tos, industry insights</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Entertain</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Increase engagement</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Memes, behind-the-scenes, fun content</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Inspire</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Create emotional connection</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Success stories, quotes, testimonials</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Promote</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Drive sales</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product posts, offers, CTAs</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>The 80/20 Rule:</strong> 80% value content (educate, entertain, inspire) + 20% promotional content
    </div>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: PLATFORM MASTERY</h2>

<div class="content-section">
    <h3>📱 Platform Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Platform</th>
            <th style="padding: 12px;">Audience</th>
            <th style="padding: 12px;">Best Content</th>
            <th style="padding: 12px;">Best Time</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Instagram</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">18-34, visual focus</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reels, Stories, Carousels</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">11am-1pm, 7-9pm</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Facebook</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25-55, broader demographic</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Video, Links, Groups</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1-4pm weekdays</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LinkedIn</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">B2B, professionals</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Articles, Insights, Case Studies</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">8-10am, 12pm Tue-Thu</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>YouTube</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All ages, search-intent</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Long-form tutorials, Shorts</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">2-4pm, weekends</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📸 Instagram Algorithm 2024</h3>
    <div class="highlight-box">
        <strong>What the algorithm favors:</strong>
        <ul>
            <li>🎬 Reels get 67% more engagement than static posts</li>
            <li>⏱️ Watch time is the #1 ranking factor</li>
            <li>💬 Comments and Saves > Likes</li>
            <li>📲 Stories keep you "top of mind" in DMs</li>
            <li>🔄 Consistency > Virality</li>
        </ul>
    </div>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: CONTENT CREATION</h2>

<div class="content-section">
    <h3>📝 Content Types & Performance</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Type</th>
            <th style="padding: 12px;">Engagement</th>
            <th style="padding: 12px;">Best For</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reels/Short Video</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐⭐⭐⭐ Highest</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reach, new followers</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Carousels</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐⭐⭐ High</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Education, saves</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Stories</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐⭐ Medium</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Connection, daily touch</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Static Image</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐⭐ Lower</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Announcements, quotes</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🎯 Caption Formula</h3>
    <div class="highlight-box">
        <strong>The HOOK-VALUE-CTA Structure:</strong>
        <ol>
            <li><strong>HOOK (Line 1):</strong> Stop the scroll - question, bold statement, emoji</li>
            <li><strong>VALUE (Body):</strong> Deliver on the hook promise - tips, story, insight</li>
            <li><strong>CTA (End):</strong> Tell them what to do - like, comment, save, click link</li>
        </ol>
    </div>
</div>
`;

const task4Content = `<h2>📚 TASK 4: VISUAL DESIGN</h2>
<div class="content-section">
    <h3>🎨 Design Principles</h3>
    <ul>
        <li><strong>Brand Consistency:</strong> Same colors, fonts, style across all posts</li>
        <li><strong>Readable Text:</strong> Large enough for mobile (min 30pt)</li>
        <li><strong>High Contrast:</strong> Text visible over images</li>
        <li><strong>White Space:</strong> Don't overcrowd</li>
        <li><strong>Quality Images:</strong> No blurry or pixelated graphics</li>
    </ul>
    <div class="highlight-box">
        <strong>Tool:</strong> Use Canva for quick, professional designs with brand kit.
    </div>
</div>`;

const task5Content = `<h2>📚 TASK 5: HASHTAG STRATEGY</h2>
<div class="content-section">
    <h3>#️⃣ Hashtag Mix Formula</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Type</th>
            <th style="padding: 12px;">Size</th>
            <th style="padding: 12px;">Count</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Niche</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><1K posts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Medium</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">10K-500K posts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-10</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Popular</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1M+ posts</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5</td></tr>
    </table>
    <div class="highlight-box">
        <strong>Total:</strong> 15-20 hashtags per Instagram post, 3-5 for LinkedIn
    </div>
</div>`;

const task6Content = `<h2>📚 TASK 6: COMMUNITY MANAGEMENT</h2>
<div class="content-section">
    <h3>💬 Engagement Rules</h3>
    <ul>
        <li>⚡ Respond to comments within 1 hour (faster = algorithm boost)</li>
        <li>💬 Reply with questions to spark conversation</li>
        <li>❤️ Like and respond to every comment</li>
        <li>📩 Check DMs multiple times per day</li>
        <li>🤝 Engage with followers' content too</li>
    </ul>
    <div class="highlight-box">
        <strong>The 30-Minute Rule:</strong> Spend 30 min before and after posting engaging with others.
    </div>
</div>`;

const task7Content = `<h2>📚 TASK 7: ANALYTICS & INSIGHTS</h2>
<div class="content-section">
    <h3>📊 Metrics That Matter</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Metric</th>
            <th style="padding: 12px;">What It Shows</th>
            <th style="padding: 12px;">Target</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Engagement Rate</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Audience interaction</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">>3%</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Reach</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unique views</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growing weekly</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Saves</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content value</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More saves = more reach</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Profile Visits</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interest generated</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growing</td></tr>
    </table>
</div>`;

const task8Content = `<h2>📚 TASK 8: CONTENT SCHEDULING</h2>
<div class="content-section">
    <h3>📅 Posting Frequency</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Platform</th>
            <th style="padding: 12px;">Minimum</th>
            <th style="padding: 12px;">Optimal</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Instagram Feed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stories</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3-5x/day</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reels</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Daily</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LinkedIn</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3x/week</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5x/week</td></tr>
    </table>
</div>`;

const task9Content = `<h2>📚 TASK 9: TREND RIDING</h2>
<div class="content-section">
    <h3>🔥 How to Ride Trends</h3>
    <ol>
        <li><strong>Spot Early:</strong> Check Explore, For You, trending hashtags daily</li>
        <li><strong>Act Fast:</strong> Trends last 3-7 days - post within 24 hours</li>
        <li><strong>Make It Relevant:</strong> Connect trend to your brand/industry</li>
        <li><strong>Don't Force It:</strong> If it doesn't fit, skip it</li>
    </ol>
    <div class="highlight-box">
        <strong>Trend Sources:</strong> Instagram Explore, TikTok For You, Twitter Trends, Google Trends
    </div>
</div>`;

const task10Content = `<h2>📚 TASK 10: FINAL CERTIFICATION</h2>
<div class="content-section">
    <h3>🎓 Requirements</h3>
    <ul>
        <li>✅ Score 28/30 on quiz</li>
        <li>✅ Create 1-week content calendar</li>
        <li>✅ Design 3 sample posts (different formats)</li>
    </ul>
</div>`;

const quizQuestions = [
    { question: "80/20 rule for content:", options: ["80% promo, 20% value", "80% value, 20% promo", "50/50", "100% promo"], correct: 1 },
    { question: "Reels get how much more engagement?", options: ["10%", "30%", "67%", "100%"], correct: 2 },
    { question: "Instagram algorithm priority 2024:", options: ["Likes only", "Watch time", "Followers", "Hashtags only"], correct: 1 },
    { question: "Best posting time Instagram:", options: ["3am", "11am-1pm, 7-9pm", "Only midnight", "Never"], correct: 1 },
    { question: "LinkedIn best for:", options: ["Memes", "B2B, professionals", "Kids content", "Random"], correct: 1 },
    { question: "Engagement rate target:", options: [">0.5%", ">1%", ">3%", ">50%"], correct: 2 },
    { question: "Caption structure:", options: ["CTA only", "Hook-Value-CTA", "Just emojis", "No text"], correct: 1 },
    { question: "Respond to comments within:", options: ["1 week", "24 hours", "1 hour", "Never"], correct: 2 },
    { question: "Hashtags per Instagram post:", options: ["1-3", "5-10", "15-20", "100+"], correct: 2 },
    { question: "Content pillars include:", options: ["Only sales", "Educate, Entertain, Inspire, Promote", "Random posts", "Nothing"], correct: 1 },
    { question: "Stories posting frequency:", options: ["Monthly", "Weekly", "Daily", "Never"], correct: 2 },
    { question: "Saves indicate:", options: ["Nothing", "Content value", "Hate", "Spam"], correct: 1 },
    { question: "30-Minute Rule means:", options: ["Post every 30 min", "Engage 30 min before/after posting", "Delete after 30 min", "None"], correct: 1 },
    { question: "Trend window lasts:", options: ["1 hour", "3-7 days", "1 year", "Forever"], correct: 1 },
    { question: "Canva is used for:", options: ["Video editing", "Design and graphics", "Email", "Coding"], correct: 1 },
    { question: "LinkedIn hashtags per post:", options: ["0", "3-5", "30", "100"], correct: 1 },
    { question: "Carousels are best for:", options: ["Stories", "Education and saves", "Only memes", "Nothing"], correct: 1 },
    { question: "Comments and Saves are > ?", options: ["Followers", "Likes", "Views", "None"], correct: 1 },
    { question: "Niche hashtags have:", options: ["1M+ posts", "10K-500K posts", "<1K posts", "No limit"], correct: 2 },
    { question: "Instagram Reels minimum frequency:", options: ["Monthly", "3x/week", "Never", "Yearly"], correct: 1 },
    { question: "Profile visits metric shows:", options: ["Nothing", "Interest generated", "Hate", "Spam"], correct: 1 },
    { question: "Trend riding step 1:", options: ["Ignore", "Spot early", "Wait months", "Copy exactly"], correct: 1 },
    { question: "Best time LinkedIn:", options: ["Midnight", "8-10am Tue-Thu", "Weekends only", "Never"], correct: 1 },
    { question: "Static image engagement is:", options: ["Highest", "Medium", "Lower", "Zero"], correct: 2 },
    { question: "Brand consistency means:", options: ["Change daily", "Same colors/fonts/style", "Random", "None"], correct: 1 },
    { question: "DMs should be checked:", options: ["Never", "Monthly", "Multiple times daily", "Yearly"], correct: 2 },
    { question: "YouTube best time:", options: ["3am", "2-4pm, weekends", "Never", "Only Monday"], correct: 1 },
    { question: "Minimum text size for mobile:", options: ["5pt", "10pt", "30pt", "100pt"], correct: 2 },
    { question: "Social media leads convert how much higher?", options: ["Same", "5%", "13%", "50%"], correct: 2 },
    { question: "Content calendar should have:", options: ["Nothing", "1 week planned content", "Only random ideas", "Just dates"], correct: 1 }
];
