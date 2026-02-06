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
    { question: "Your post is 90% promotional. According to the 80/20 rule, this is:", options: ["Perfect balance", "Too much promotion - needs more value content", "Not enough promotion", "Only for LinkedIn"], correct: 1 },
    { question: "A static image post gets 50 likes. A Reel on the same topic likely gets:", options: ["About the same engagement", "67% MORE engagement on average", "Less engagement", "Only views, no engagement"], correct: 1 },
    { question: "Instagram's algorithm in 2024 primarily ranks content by:", options: ["Number of followers", "Watch time and completion rate", "Posting frequency only", "Number of hashtags used"], correct: 1 },
    { question: "You post at 3 AM. Likely outcome for engagement:", options: ["Higher because less competition", "Lower - audience is sleeping", "Same as any other time", "Best time for international reach"], correct: 1 },
    { question: "A B2B SaaS company should prioritize which platform?", options: ["TikTok for viral dances", "LinkedIn for professional content", "Instagram for product photos only", "Facebook for local business"], correct: 1 },
    { question: "Your engagement rate is 1.5%. This is:", options: ["Excellent - above target", "Below the 3% target", "Industry-leading", "Only matters for influencers"], correct: 1 },
    { question: "Caption starts with 'Hey everyone!' - this is a:", options: ["Strong hook that stops scrolling", "Weak hook - needs pattern interrupt", "Professional opening", "Required by platform rules"], correct: 1 },
    { question: "Comment response 2 days after posting affects:", options: ["Nothing - timing doesn't matter", "Algorithm negatively - should respond within 1 hour", "Only follower count", "Only for verified accounts"], correct: 1 },
    { question: "Using 50 hashtags on Instagram will:", options: ["Maximize reach guaranteed", "Likely trigger spam filters - use 15-20", "Work only for Reels", "Guarantee viral status"], correct: 1 },
    { question: "Content pillars ensure:", options: ["Random variety keeps audience guessing", "Consistent value across themes", "Only promotional content", "Less work for the creator"], correct: 1 },
    { question: "Posting Stories once a week results in:", options: ["Optimal engagement", "Losing 'top of mind' status with followers", "Better than Reels", "More profile visits"], correct: 1 },
    { question: "A post with 100 saves but only 50 likes indicates:", options: ["Content failed", "High-value content worth bookmarking", "Bot activity", "Algorithm is broken"], correct: 1 },
    { question: "The 30-Minute Rule means you should:", options: ["Delete posts after 30 minutes", "Engage with others 30 mins before AND after posting", "Post every 30 minutes", "Respond only for 30 minutes"], correct: 1 },
    { question: "You spot a trending audio 5 days after it started. You should:", options: ["Use it immediately - still relevant", "Skip it - trend window (3-7 days) is closing", "Wait for it to peak more", "Use regardless of timing"], correct: 1 },
    { question: "Canva is primarily used for:", options: ["Advanced video editing", "Quick professional graphic design", "Email marketing", "SEO optimization"], correct: 1 },
    { question: "Using 20 hashtags on LinkedIn will:", options: ["Maximize reach", "Look spammy - use 3-5 for LinkedIn", "Be hidden by the platform", "Increase connection requests"], correct: 1 },
    { question: "Carousels work well because they:", options: ["Are fastest to create", "Drive swipes and saves for education content", "Replace Reels entirely", "Only work for quotes"], correct: 1 },
    { question: "Which metrics matter MORE than likes for reach?", options: ["Follower count only", "Comments, Saves, and Shares", "Profile photo quality", "Account age"], correct: 1 },
    { question: "A niche hashtag has:", options: ["Millions of posts", "10K-500K posts for moderate competition", "Less than 1K posts", "No specific definition"], correct: 1 },
    { question: "Posting Reels once a month will:", options: ["Build consistent audience", "Miss algorithm momentum - need minimum 3x/week", "Be enough for small accounts", "Outperform daily posting"], correct: 1 },
    { question: "Increased profile visits but no follower growth means:", options: ["Success", "Bio or content isn't converting visitors", "Algorithm error", "Wait longer for results"], correct: 1 },
    { question: "First step when you see a trending topic:", options: ["Copy top creators exactly", "Evaluate if it fits your brand quickly", "Wait to see if it lasts", "Ignore trends completely"], correct: 1 },
    { question: "LinkedIn posts perform best:", options: ["At midnight", "8-10am Tuesday-Thursday", "Only on weekends", "Timing doesn't matter on LinkedIn"], correct: 1 },
    { question: "Static images vs Reels - static images get:", options: ["Highest engagement", "Medium engagement", "Lower engagement typically", "No engagement anymore"], correct: 2 },
    { question: "Brand consistency means:", options: ["Changing style to match trends", "Same colors, fonts, and visual style always", "Random posts to surprise audience", "Copying competitors"], correct: 1 },
    { question: "Checking DMs once a week is:", options: ["Sufficient for most accounts", "Too infrequent - check multiple times daily", "Only needed for business accounts", "Over-communicating"], correct: 1 },
    { question: "YouTube videos posted at 2-4pm on weekends see:", options: ["Lower views", "Higher views from leisure browsing", "No difference", "Negative algorithm impact"], correct: 1 },
    { question: "Text in Stories should be minimum:", options: ["5pt for clean look", "10pt is standard", "30pt for mobile readability", "Size doesn't matter"], correct: 2 },
    { question: "Social media leads convert 13% higher because:", options: ["Algorithms favor them", "Warm leads from relationship building", "Random statistical noise", "Only for B2B"], correct: 1 },
    { question: "A content calendar should plan:", options: ["Nothing - spontaneity is key", "At least 1 week of content ahead", "Random posts only", "Just dates without content"], correct: 1 }
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
