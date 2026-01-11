// Developer Training Quiz Questions - 120 Questions for 10 Tasks
// Each task has 10 questions (Task 10 final exam has 20)

const taskQuizzes = {
    1: [
        { q: "Before making ANY changes to a theme, you MUST:", options: ["Ask the client for permission", "Duplicate the theme first — NEVER work on live theme", "Test on your personal device", "Write a backup plan"], correct: 1 },
        { q: "What percentage of ecommerce traffic is mobile?", options: ["30%", "50%", "70%", "90%"], correct: 2 },
        { q: "Target Mobile PageSpeed score is:", options: ["50+", "70+", "85+", "95+"], correct: 2 },
        { q: "A 1-second delay in load time causes what conversion loss?", options: ["2%", "5%", "7%", "10%"], correct: 2 },
        { q: "FIRST thing to check when creating store for US clients:", options: ["Theme selection", "Currency is NOT set to INR — change to USD", "Logo upload", "Product count"], correct: 1 },
        { q: "How many times should you review EVERY element before submission?", options: ["Once", "Twice", "3-5 times (MANDATORY)", "Optional review"], correct: 2 },
        { q: "'It works on my machine' is:", options: ["Acceptable explanation", "NOT acceptable — if doesn't work for client, it's broken", "Good enough for delivery", "Developer's defense"], correct: 1 },
        { q: "After 15 days of onboarding, ONE careless mistake can result in:", options: ["A warning", "Extra training", "Potential removal", "Nothing serious"], correct: 2 },
        { q: "The Testing Trifecta means testing:", options: ["Three different devices", "Happy path, error path, and edge cases", "Three different browsers", "Three times in a row"], correct: 1 },
        { q: "P0 (highest priority) tasks are:", options: ["Learning and optimization", "Code reviews", "Production bugs, security issues, deadline-day tasks", "PM questions"], correct: 2 }
    ],
    2: [
        { q: "The secure way to access a client's Shopify store is:", options: ["Client shares login credentials", "Collaborator access with 4-digit code", "Access through their email", "Any method works"], correct: 1 },
        { q: "Where does the client find their collaborator request code?", options: ["Products page", "Settings → Users and permissions → Collaborators", "Online Store → Themes", "Apps section"], correct: 1 },
        { q: "For a full store build, what permission level is needed?", options: ["Products only", "Themes only", "Full access (all permissions)", "Settings only"], correct: 2 },
        { q: "Which free Shopify theme has the highest speed score (90+)?", options: ["Prestige", "Dawn", "Impulse", "Symmetry"], correct: 1 },
        { q: "Before customizing a theme, you MUST:", options: ["Ask client permission", "Click 'Duplicate' to create a backup", "Test on mobile", "Check PageSpeed"], correct: 1 },
        { q: "Maximum number of font families to use:", options: ["1", "2", "4", "Unlimited"], correct: 1 },
        { q: "Logo file format should be:", options: ["JPG only", "PNG with transparency, 200-400px wide", "Any format", "SVG only"], correct: 1 },
        { q: "If client's store is on trial plan, collaborator access:", options: ["Works normally", "Is not available — trial stores don't have this", "Requires extra steps", "Works with password"], correct: 1 },
        { q: "Client wants to share login instead of collaborator access. You should:", options: ["Accept it", "Politely decline — collaborator access is more secure", "Use both", "Report them"], correct: 1 },
        { q: "Favicon size should be:", options: ["500x500 PNG", "32x32 or 64x64 PNG", "Any size", "1000x1000 PNG"], correct: 1 }
    ],
    3: [
        { q: "Hero section headline should be maximum:", options: ["3 words", "7 words", "15 words", "Unlimited"], correct: 1 },
        { q: "The purpose of the Trust Bar section is to:", options: ["Show products", "Build confidence (free shipping, returns, secure payment)", "Display testimonials", "Capture emails"], correct: 1 },
        { q: "Featured Products section should show:", options: ["1-2 products", "4-8 products", "20+ products", "All products"], correct: 1 },
        { q: "Standard header menu MUST include:", options: ["Only Home and Catalog", "Home, Catalog, Collections, About Us, Contact Us, FAQ, Track Order", "Only product pages", "No specific requirements"], correct: 1 },
        { q: "Order tracking is set up using:", options: ["Custom code only", "17Track / i7 Track app", "Shopify's built-in feature", "External website"], correct: 1 },
        { q: "Every homepage section should:", options: ["Just look pretty", "Have a PURPOSE — build trust, showcase products, or drive action", "Be colorful", "Have animations"], correct: 1 },
        { q: "Testimonials section should have:", options: ["1 review", "3-6 reviews with photos if possible", "50+ reviews", "No photos needed"], correct: 1 },
        { q: "Newsletter section should include:", options: ["Just email input", "Email input + incentive (like 10% off)", "Phone number only", "Nothing specific"], correct: 1 },
        { q: "FAQ section should have:", options: ["1-2 questions", "5-8 common questions", "50+ questions", "No FAQ needed"], correct: 1 },
        { q: "Footer should include all EXCEPT:", options: ["Navigation links", "Policy pages", "Client's personal phone number", "Payment icons"], correct: 2 }
    ],
    4: [
        { q: "Minimum number of product images:", options: ["1", "3-5", "10+", "No minimum"], correct: 1 },
        { q: "Product description should lead with:", options: ["Technical features", "Benefits FIRST, Features SECOND", "Ingredients only", "Price comparison"], correct: 1 },
        { q: "What is the #1 conversion driver after price?", options: ["Product images", "Customer reviews", "Product title", "Page speed"], correct: 1 },
        { q: "Size guide reduces returns by:", options: ["5%", "15%", "30%+", "50%"], correct: 2 },
        { q: "Related Products section can increase AOV by:", options: ["1-5%", "15-30%", "50-60%", "100%"], correct: 1 },
        { q: "Minimum touch target size for mobile buttons:", options: ["20x20px", "44x44px", "100x100px", "No minimum"], correct: 1 },
        { q: "'Only 3 left!' is an example of which trigger?", options: ["Trust", "Urgency", "Social proof", "Value"], correct: 1 },
        { q: "Star ratings and review counts are examples of:", options: ["Trust", "Urgency", "Social proof", "Ease"], correct: 2 },
        { q: "Above the fold means:", options: ["Top of page after scrolling", "Visible WITHOUT scrolling", "Footer area", "Mobile only"], correct: 1 },
        { q: "Sticky Add to Cart on mobile should be:", options: ["Hidden", "Always visible on scroll", "Only at top", "Optional"], correct: 1 }
    ],
    5: [
        { q: "Target Mobile PageSpeed score:", options: ["50+", "70+", "85+", "95+"], correct: 2 },
        { q: "Maximum image file size:", options: ["100KB", "500KB", "2MB", "No limit"], correct: 1 },
        { q: "Maximum number of apps recommended:", options: ["5", "10-12", "20", "Unlimited"], correct: 1 },
        { q: "LCP (Largest Contentful Paint) issues are usually caused by:", options: ["Too many products", "Hero image too large", "Too many pages", "Wrong colors"], correct: 1 },
        { q: "CLS (Cumulative Layout Shift) is fixed by:", options: ["Compressing images", "Adding width/height to all images", "Removing apps", "Changing fonts"], correct: 1 },
        { q: "After installing a new app, you should:", options: ["Do nothing", "Check PageSpeed — did it drop significantly?", "Install another app", "Remove old theme"], correct: 1 },
        { q: "Primary tool for speed score:", options: ["GTmetrix only", "Google PageSpeed Insights", "Shopify analytics", "Browser console"], correct: 1 },
        { q: "TBT (Total Blocking Time) issues indicate:", options: ["Slow images", "Too much JavaScript", "Missing content", "Wrong fonts"], correct: 1 },
        { q: "Maximum font families to use:", options: ["1", "2", "4", "Unlimited"], correct: 1 },
        { q: "Every 1-second delay in load time causes what conversion loss?", options: ["2%", "5%", "7%", "10%"], correct: 2 }
    ],
    6: [
        { q: "Healthy number of apps for a store:", options: ["1-2", "5-8", "15-20", "30+"], correct: 1 },
        { q: "If PageSpeed drops more than 10 points after installing an app:", options: ["Keep the app anyway", "Reconsider the app", "Install another app", "Ignore it"], correct: 1 },
        { q: "When uninstalling an app, you must also:", options: ["Restart Shopify", "Check theme code for leftover snippets and remove them", "Delete all products", "Contact Shopify support"], correct: 1 },
        { q: "Test credit card number for Shopify:", options: ["1234 1234 1234 1234", "4242 4242 4242 4242", "0000 0000 0000 0000", "Any random number"], correct: 1 },
        { q: "After completing test order, you MUST:", options: ["Leave test mode on", "Disable test mode before launch", "Delete test products", "Change theme"], correct: 1 },
        { q: "Shop Pay is enabled when you activate:", options: ["PayPal", "Shopify Payments", "Manual payments", "Gift cards"], correct: 1 },
        { q: "Policy pages are set up in:", options: ["Products section", "Settings → Policies", "Theme editor", "Apps section"], correct: 1 },
        { q: "Multiple review apps should be:", options: ["Used together for more reviews", "Avoided — pick ONE only", "Installed but disabled", "Used on different pages"], correct: 1 },
        { q: "Free apps with no reviews are risky because:", options: ["They're too simple", "They often inject unwanted code or malware", "They don't work", "They're too complex"], correct: 1 },
        { q: "Which payment gateway has the lowest fees?", options: ["PayPal", "Shopify Payments", "Manual payments", "All same"], correct: 1 }
    ],
    7: [
        { q: "Total points in the QA checklist:", options: ["40", "50", "60", "100"], correct: 2 },
        { q: "Mobile PageSpeed target in QA:", options: ["50+", "70+", "85+", "95+"], correct: 2 },
        { q: "Desktop PageSpeed target:", options: ["70+", "80+", "90+", "95+"], correct: 2 },
        { q: "Minimum touch target size for mobile buttons:", options: ["20px", "44px", "60px", "100px"], correct: 1 },
        { q: "How many times should you review every element before submission?", options: ["Once", "Twice", "3-5 times", "10+ times"], correct: 2 },
        { q: "The 5-Minute Audit includes checking on:", options: ["Desktop only", "Mobile, incognito mode, different browser", "One device only", "Theme editor only"], correct: 1 },
        { q: "Console errors should be:", options: ["Ignored", "Fixed before delivery — zero console errors", "Documented but not fixed", "Hidden"], correct: 1 },
        { q: "Who catches issues — you or the client?", options: ["Client catches issues", "YOU catch all issues before delivery", "PM catches issues", "No one checks"], correct: 1 },
        { q: "Peer review is:", options: ["Criticism", "Teamwork — fresh eyes catch issues you miss", "Optional", "Only for senior developers"], correct: 1 },
        { q: "Alt text should be on:", options: ["Only hero images", "ALL images", "Only product images", "No images needed"], correct: 1 }
    ],
    8: [
        { q: "First step in debugging is:", options: ["Ask for help", "Open DevTools → Console tab for errors", "Delete all code", "Reinstall theme"], correct: 1 },
        { q: "Hard refresh (Ctrl+Shift+R) solves what percentage of 'not updating' issues?", options: ["10%", "25%", "40%", "80%"], correct: 2 },
        { q: "'expected block close' error means:", options: ["Server is down", "Missing {% endif %} or {% endfor %}", "Wrong password", "Theme is broken"], correct: 1 },
        { q: "If changes broke production, FIRST action is:", options: ["Debug on live site", "Immediately revert to backup/previous version", "Wait for client to notice", "Delete the store"], correct: 1 },
        { q: "Client provides low-res images. You should:", options: ["Use them anyway", "Pause timeline and request correct assets", "Upscale with software", "Skip those sections"], correct: 1 },
        { q: "When feature is technically impossible, you should:", options: ["Just say 'can't be done'", "Provide alternatives: 'We have option A or B'", "Try anyway", "Ignore the request"], correct: 1 },
        { q: "Client edited theme and broke things. This is:", options: ["Your responsibility to fix for free", "New scope — additional work", "PM's problem", "Ignored"], correct: 1 },
        { q: "Escalate to senior developer after debugging for:", options: ["1 minute", "15 minutes with no progress", "2 hours", "Never escalate"], correct: 1 },
        { q: "To isolate a bug, you should:", options: ["Delete everything", "Comment out sections until error goes", "Ask the client", "Ignore it"], correct: 1 },
        { q: "'It works on my machine' is:", options: ["Acceptable", "NOT acceptable — if doesn't work for client, it's broken", "Good enough", "Developer's right"], correct: 1 }
    ],
    9: [
        { q: "AI (ChatGPT/Claude) can help with:", options: ["Only writing emails", "Creating custom sections, debugging, code review", "Nothing related to code", "Only design work"], correct: 1 },
        { q: "Before adding AI-generated code to theme, you should:", options: ["Use it directly on live theme", "Test on duplicate theme first", "Skip testing", "Ask client to test"], correct: 1 },
        { q: "Custom section files are placed in:", options: ["Assets folder", "Sections folder", "Layout folder", "Config folder"], correct: 1 },
        { q: "When prompting AI for a custom section, include:", options: ["Just the section name", "Description, editable fields, Shopify 2.0, responsive requirements", "Nothing specific", "Only colors"], correct: 1 },
        { q: "The 7-Figure Designer prompt is used to:", options: ["Create sections", "Analyze store design and get improvement suggestions", "Fix bugs", "Write product descriptions"], correct: 1 },
        { q: "After AI generates code, you must:", options: ["Use it immediately", "Test on duplicate theme, check mobile, verify no console errors", "Trust it completely", "Ignore errors"], correct: 1 },
        { q: "To debug with AI, you should provide:", options: ["Just 'it's broken'", "Exact error message, file location, code snippet", "Store URL only", "Nothing specific"], correct: 1 },
        { q: "Schema in Shopify sections allows:", options: ["Nothing", "Editing from theme customizer without touching code", "Faster loading", "More products"], correct: 1 },
        { q: "Official Shopify Liquid documentation is at:", options: ["google.com", "shopify.dev/docs/api/liquid", "wordpress.org", "github.com"], correct: 1 },
        { q: "Learning path should start with:", options: ["Advanced JavaScript", "Master theme customizer first (no code)", "Custom apps", "Backend development"], correct: 1 }
    ],
    10: [
        { q: "Before making ANY theme changes:", options: ["Work on live", "Duplicate theme first", "Ask PM", "Skip backup"], correct: 1 },
        { q: "Mobile traffic percentage:", options: ["30%", "50%", "70%", "90%"], correct: 2 },
        { q: "Target Mobile PageSpeed:", options: ["50+", "70+", "85+", "95+"], correct: 2 },
        { q: "1-second delay = conversion loss of:", options: ["2%", "5%", "7%", "10%"], correct: 2 },
        { q: "FIRST check for US client store:", options: ["Theme", "Currency is USD, not INR", "Logo", "Products"], correct: 1 },
        { q: "Collaborator access code is found in:", options: ["Products", "Settings → Users → Collaborators", "Theme", "Apps"], correct: 1 },
        { q: "Hero headline max words:", options: ["3", "7", "15", "Unlimited"], correct: 1 },
        { q: "Product page #1 conversion driver (after price):", options: ["Images", "Customer reviews", "Title", "Speed"], correct: 1 },
        { q: "Maximum apps for healthy store:", options: ["5", "10-12", "20", "30+"], correct: 1 },
        { q: "Test credit card number:", options: ["1234...", "4242 4242 4242 4242", "0000...", "Random"], correct: 1 },
        { q: "QA checklist total points:", options: ["40", "50", "60", "100"], correct: 2 },
        { q: "Desktop PageSpeed target:", options: ["70+", "80+", "90+", "95+"], correct: 2 },
        { q: "Minimum touch target size:", options: ["20px", "44px", "60px", "100px"], correct: 1 },
        { q: "Hard refresh solves what % of issues:", options: ["10%", "25%", "40%", "80%"], correct: 2 },
        { q: "'expected block close' means:", options: ["Server down", "Missing {% endif %} or {% endfor %}", "Wrong password", "Theme broken"], correct: 1 },
        { q: "Custom sections go in which folder:", options: ["Assets", "Sections", "Layout", "Config"], correct: 1 },
        { q: "After AI generates code:", options: ["Use directly", "Test on duplicate theme first", "Skip testing", "Trust completely"], correct: 1 },
        { q: "P0 priority tasks are:", options: ["Learning", "Code reviews", "Production bugs, security, deadlines", "PM questions"], correct: 2 },
        { q: "'It works on my machine' is:", options: ["Acceptable", "NOT acceptable", "Good enough", "Developer's right"], correct: 1 },
        { q: "Size guide reduces returns by:", options: ["5%", "15%", "30%+", "50%"], correct: 2 }
    ]
};

// Export for use
if (typeof module !== 'undefined') {
    module.exports = { taskQuizzes };
}
