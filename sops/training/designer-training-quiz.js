// Designer Training Quiz Questions - 120 Questions for 10 Tasks
// Each task has 10 questions (Task 10 final exam has 20)

const taskQuizzes = {
    1: [
        { q: "WHITESPACE = LUXURY means:", options: ["Add as many elements as possible", "Crowded = cheap, Breathing room = premium", "White backgrounds only", "No images allowed"], correct: 1 },
        { q: "What percentage of ecommerce traffic is mobile?", options: ["30%", "50%", "70%", "90%"], correct: 2 },
        { q: "CONSISTENCY IS KING means:", options: ["Use the same design for every client", "Same fonts, colors, button styles, spacing — EVERYWHERE", "Never change designs", "Copy competitor designs"], correct: 1 },
        { q: "Every design decision should answer:", options: ["Is this award-winning?", "Will this help visitors buy?", "Is this my favorite color?", "Will this impress other designers?"], correct: 1 },
        { q: "After 15 days of onboarding, ONE careless mistake can result in:", options: ["A warning", "Extra training", "Potential removal from client work", "Nothing serious"], correct: 2 },
        { q: "Maximum font families per store:", options: ["1", "2", "5", "Unlimited"], correct: 1 },
        { q: "Premium design includes all EXCEPT:", options: ["Generous whitespace", "Clear visual hierarchy", "Crowded layouts with many elements", "High-quality imagery"], correct: 2 },
        { q: "P0 (highest priority) tasks for designers are:", options: ["Learning and inspiration", "Revision requests, deadline deliveries, PM questions", "Design system updates", "Mockup refinements"], correct: 1 },
        { q: "Peer review before delivery is:", options: ["Optional", "Recommended — fresh eyes catch what you missed", "Only for juniors", "Not needed"], correct: 1 },
        { q: "A beautiful store that doesn't sell is:", options: ["A success", "A failure", "Good enough", "Award-worthy"], correct: 1 }
    ],
    2: [
        { q: "The 60-30-10 rule means:", options: ["60 colors, 30 fonts, 10 images", "60% dominant, 30% secondary, 10% accent color", "60 pages, 30 sections, 10 products", "Random color distribution"], correct: 1 },
        { q: "Blue color psychology represents:", options: ["Energy and urgency", "Trust, reliability, technology", "Luxury and sophistication", "Natural and organic"], correct: 1 },
        { q: "Black/Gold colors are best for:", options: ["Kids products", "Food and beverage", "Luxury and premium brands", "Health and wellness"], correct: 2 },
        { q: "Add to Cart button should:", options: ["Blend with background", "POP with high contrast", "Be the same color as text", "Be hidden"], correct: 1 },
        { q: "If client doesn't provide brand colors, you should:", options: ["Use random colors", "Extract from logo or create complementary palette", "Skip color entirely", "Use default theme colors"], correct: 1 },
        { q: "Orange/Red colors create:", options: ["Calm and trust", "Energy, urgency, appetite", "Luxury feel", "Natural vibe"], correct: 1 },
        { q: "Minimum contrast ratio for CTAs:", options: ["2:1", "3:1", "4.5:1", "No minimum"], correct: 2 },
        { q: "Green colors work best for:", options: ["Tech/Gadgets", "Health, wellness, sustainability", "Luxury brands", "Fashion"], correct: 1 },
        { q: "Primary color is used for:", options: ["Backgrounds only", "Buttons, links, key CTAs", "Borders and dividers", "Text only"], correct: 1 },
        { q: "The 60% (dominant color) is usually:", options: ["The brightest color", "Background, large sections (neutral/light)", "CTA buttons", "Accent highlights"], correct: 1 }
    ],
    3: [
        { q: "Maximum font families per store:", options: ["1", "2", "4", "Unlimited"], correct: 1 },
        { q: "The 2-Font Rule formula is:", options: ["2 body fonts", "1 distinctive heading font + 1 clean body font", "2 heading fonts", "Any 2 fonts"], correct: 1 },
        { q: "Minimum body text size:", options: ["10px", "12px", "16px (never smaller!)", "20px"], correct: 2 },
        { q: "Desktop H1 (Hero) size range:", options: ["16-24px", "24-32px", "48-64px", "100-120px"], correct: 2 },
        { q: "For luxury/high-end stores, recommended heading font:", options: ["Comic Sans", "Playfair Display", "Arial", "Impact"], correct: 1 },
        { q: "Mobile H1 size range:", options: ["16-20px", "32-40px", "48-64px", "80-100px"], correct: 1 },
        { q: "Body text line height should be:", options: ["1.0", "1.5-1.7", "3.0", "No line height needed"], correct: 1 },
        { q: "For modern/tech stores, recommended font pair:", options: ["Playfair Display + Lato", "Poppins + Inter", "Comic Sans + Arial", "Times New Roman + Georgia"], correct: 1 },
        { q: "More than 2 fonts creates:", options: ["Better design", "Visual chaos, slower load times, amateur look", "Premium feel", "No difference"], correct: 1 },
        { q: "Small/Caption text size:", options: ["8px", "14px", "20px", "24px"], correct: 1 }
    ],
    4: [
        { q: "The Spacing Multiplier System uses multiples of:", options: ["5px", "8px", "10px", "12px"], correct: 1 },
        { q: "Desktop spacing between sections:", options: ["8-16px", "24-32px", "80-120px", "200-300px"], correct: 2 },
        { q: "Max content width should be:", options: ["600-800px", "1200-1400px", "2000-2400px", "Full width always"], correct: 1 },
        { q: "Text max-width for readability:", options: ["20-30 characters per line", "65-75 characters per line", "100-150 characters per line", "No limit"], correct: 1 },
        { q: "Desktop product grids should have:", options: ["1-2 columns", "4-5 columns", "8-10 columns", "Single column only"], correct: 1 },
        { q: "Mobile product grids should have:", options: ["1 column only", "2 columns", "5 columns", "Same as desktop"], correct: 1 },
        { q: "Card padding on desktop:", options: ["4-8px", "24-32px", "100-120px", "No padding"], correct: 1 },
        { q: "Button padding format:", options: ["8px all around", "16px 32px (vertical horizontal)", "100px", "No padding needed"], correct: 1 },
        { q: "Mobile spacing between sections:", options: ["8-16px", "48-64px", "80-120px", "200px"], correct: 1 },
        { q: "Desktop grid typically uses:", options: ["4 columns", "8 columns", "12 columns", "20 columns"], correct: 2 }
    ],
    5: [
        { q: "Trust elements help with:", options: ["Making design prettier", "Reducing friction and increasing buyer confidence", "Adding more content", "Slowing down the site"], correct: 1 },
        { q: "Free Shipping badge should appear:", options: ["Only in footer", "Trust bar below hero AND product page near ATC", "Only on checkout", "Nowhere visible"], correct: 1 },
        { q: "Secure Payment badge includes:", options: ["Only text", "Lock icon + payment logos (Visa/MC/PayPal)", "Just an image", "No icon needed"], correct: 1 },
        { q: "Customer reviews with photos are:", options: ["Not needed", "Powerful social proof that builds trust", "Optional", "Bad for conversions"], correct: 1 },
        { q: "Trust bar placement:", options: ["Only in footer", "Below hero section", "Hidden", "Only on mobile"], correct: 1 },
        { q: "Return policy badge copy example:", options: ["No returns", "30-Day Easy Returns", "Call us maybe", "Ask your lawyer"], correct: 1 },
        { q: "Add to Cart button should:", options: ["Blend with background", "Be high-contrast and clearly visible", "Be small and hidden", "Match text color"], correct: 1 },
        { q: "Secure payment badge location on product page:", options: ["Top of page only", "Near Add to Cart button", "Only in footer", "Not on product page"], correct: 1 },
        { q: "Reviews should show:", options: ["Only negative reviews", "Star ratings, customer photos, verified badges", "No photos", "Fake reviews"], correct: 1 },
        { q: "The button that made $10,000 was changed to:", options: ["Smaller and hidden", "High-contrast, bold with subtle animation", "Same color as background", "Removed entirely"], correct: 1 }
    ],
    6: [
        { q: "What percentage of ecommerce traffic is mobile?", options: ["30%", "50%", "70%", "90%"], correct: 2 },
        { q: "Minimum touch target size:", options: ["20px × 20px", "44px × 44px", "60px × 60px", "100px × 100px"], correct: 1 },
        { q: "Primary mobile design width:", options: ["320px", "375px", "500px", "768px"], correct: 1 },
        { q: "Mobile body text minimum size:", options: ["10px", "12px", "16px", "20px"], correct: 2 },
        { q: "Mobile product grids should have:", options: ["1 column only", "2 columns maximum", "5 columns", "Same as desktop"], correct: 1 },
        { q: "Sticky Add to Cart should be:", options: ["Hidden on mobile", "Fixed at bottom on scroll", "Only at top", "Not needed"], correct: 1 },
        { q: "Horizontal scrolling on mobile is:", options: ["Good for navigation", "Never allowed — bad UX", "Recommended", "Optional"], correct: 1 },
        { q: "Mobile form input minimum height:", options: ["24px", "48px", "100px", "No minimum"], correct: 1 },
        { q: "Thumb zone design places primary actions:", options: ["At the top (hard to reach)", "At the bottom (easy to reach)", "In the middle only", "Hidden"], correct: 1 },
        { q: "Mobile-first means:", options: ["Design desktop first, then shrink", "Design for 375px FIRST, then scale up to desktop", "Mobile is optional", "Same design for all screens"], correct: 1 }
    ],
    7: [
        { q: "QA checklist includes checking:", options: ["Only colors", "Visual consistency, images, responsive, polish", "Only fonts", "Just the homepage"], correct: 1 },
        { q: "Placeholder text like Lorem Ipsum should be:", options: ["Left in final design", "Removed — no placeholder content allowed", "Made smaller", "Hidden"], correct: 1 },
        { q: "Before sharing with client, mobile should be tested at:", options: ["1200px width", "375px width", "Any width", "Desktop only"], correct: 1 },
        { q: "Images should be:", options: ["Any quality", "Compressed and optimized", "Maximum file size", "Blurry is fine"], correct: 1 },
        { q: "Brand colors must be:", options: ["Different on each page", "Applied consistently throughout", "Random", "Only on homepage"], correct: 1 },
        { q: "Store looks 'template-y' — fix by:", options: ["Using more default settings", "Customizing with brand colors, unique fonts, custom imagery", "Adding more stock photos", "Keeping defaults"], correct: 1 },
        { q: "Hover states should:", options: ["Be ignored", "Work properly", "Be removed", "Only work on mobile"], correct: 1 },
        { q: "Spelling errors in design are:", options: ["Acceptable", "Not allowed — must be checked before delivery", "Client's problem", "Normal"], correct: 1 },
        { q: "To fix blurry images:", options: ["Upscale them", "Request 2x resolution from client", "Make them smaller", "Add blur effect"], correct: 1 },
        { q: "CTAs should be:", options: ["Hidden", "Visible and above fold", "Only in footer", "Same color as background"], correct: 1 }
    ],
    8: [
        { q: "Client says 'I'll know it when I see it.' You should:", options: ["Start designing randomly", "Show 3 different directions and ask which elements they like", "Give up", "Ask PM to cancel"], correct: 1 },
        { q: "Multiple stakeholders giving conflicting feedback. You should:", options: ["Try to please everyone", "Ask for consolidated feedback into one document", "Ignore all feedback", "Pick your favorite opinion"], correct: 1 },
        { q: "Client wants design that won't convert. You should:", options: ["Just do what they want", "Advise with data, document your recommendation if they insist", "Refuse to work", "Don't say anything"], correct: 1 },
        { q: "Endless revision requests beyond included rounds. You should:", options: ["Do unlimited free revisions", "Route through PM for additional quote", "Ignore the requests", "Cancel the project"], correct: 1 },
        { q: "Client wants free design concepts before ordering. You should:", options: ["Create free designs", "Route to Sales — no spec work, portfolio demonstrates quality", "Do a quick mockup", "Negotiate half payment"], correct: 1 },
        { q: "Client provides low-quality assets. You should:", options: ["Use them anyway", "Request high-resolution assets before proceeding", "Upscale and hope for best", "Skip those sections"], correct: 1 },
        { q: "Client says 'It doesn't pop' — they mean:", options: ["Remove all colors", "Needs more contrast or vibrancy", "Make it smaller", "Add more text"], correct: 1 },
        { q: "Client disapproves of everything — you should:", options: ["Keep guessing", "Ask for specific examples of designs they love", "Give up", "Do the opposite"], correct: 1 },
        { q: "Client wants auto-playing music. You should:", options: ["Add it", "Push back — it causes instant bounce, never do this", "Add it quietly", "Add loud music"], correct: 1 },
        { q: "'Make the logo bigger' usually means:", options: ["Make logo 10x bigger", "They want more brand presence — add brand colors elsewhere", "Remove the logo", "Only show logo"], correct: 1 }
    ],
    9: [
        { q: "ChatGPT can help designers with:", options: ["Only code", "Design direction, color palettes, CRO review, microcopy", "Nothing design-related", "Only client emails"], correct: 1 },
        { q: "Figma file should include a page called:", options: ["Random stuff", "Style Guide (colors, fonts, spacing, components)", "Untitled", "Final-v2-FINAL"], correct: 1 },
        { q: "Correct layer naming for a hero section frame:", options: ["Frame 432", "Home-Hero", "Untitled", "Rectangle 17"], correct: 1 },
        { q: "Moodboard page is used for:", options: ["Final designs", "Reference screenshots and inspiration for client approval", "Code", "Deleted content"], correct: 1 },
        { q: "Tool for color palette generation:", options: ["Photoshop only", "Coolors.co", "Microsoft Word", "Excel"], correct: 1 },
        { q: "TinyPNG is used for:", options: ["Creating colors", "Image compression", "Font selection", "Background removal"], correct: 1 },
        { q: "Archive page in Figma contains:", options: ["Final approved designs", "Old versions and rejected concepts (internal only)", "Client feedback", "Live designs"], correct: 1 },
        { q: "Remove.bg is used for:", options: ["Color generation", "Background removal", "Font selection", "Compression"], correct: 1 },
        { q: "End of day design workflow includes:", options: ["Leaving work incomplete", "Respond to revisions, update Slack, prepare tomorrow", "Starting new projects", "Deleting files"], correct: 1 },
        { q: "Component naming format:", options: ["Thing 1", "Type/Name (e.g., Button/Primary)", "Random", "Final"], correct: 1 }
    ],
    10: [
        { q: "WHITESPACE = LUXURY means:", options: ["Add more elements", "Crowded = cheap, Breathing room = premium", "White only", "No images"], correct: 1 },
        { q: "Mobile traffic percentage:", options: ["30%", "50%", "70%", "90%"], correct: 2 },
        { q: "Maximum font families:", options: ["1", "2", "5", "Unlimited"], correct: 1 },
        { q: "Minimum body text size:", options: ["10px", "12px", "16px", "20px"], correct: 2 },
        { q: "The 60-30-10 rule is for:", options: ["Font sizes", "Color balance (60% dominant, 30% secondary, 10% accent)", "Spacing", "Images"], correct: 1 },
        { q: "Minimum touch target size:", options: ["20px", "44px", "60px", "100px"], correct: 1 },
        { q: "8px Spacing Multiplier means using:", options: ["Random spacing", "Multiples of 8 (8, 16, 24, 32, 48, 64)", "Only 8px", "No spacing"], correct: 1 },
        { q: "Trust elements include:", options: ["More products", "Free shipping, easy returns, secure payment badges", "More colors", "Animations"], correct: 1 },
        { q: "Primary mobile design width:", options: ["320px", "375px", "500px", "768px"], correct: 1 },
        { q: "Blue color represents:", options: ["Energy", "Trust, reliability, technology", "Luxury", "Natural"], correct: 1 },
        { q: "Client says 'I'll know it when I see it' — you should:", options: ["Guess", "Show 3 different directions", "Cancel", "Wait"], correct: 1 },
        { q: "Multiple stakeholders with conflicting feedback:", options: ["Please everyone", "Ask for consolidated feedback", "Ignore", "Pick one"], correct: 1 },
        { q: "Endless revisions beyond included rounds:", options: ["Free revisions", "Route through PM for additional quote", "Ignore", "Cancel"], correct: 1 },
        { q: "Low-quality assets from client:", options: ["Use anyway", "Request high-resolution before proceeding", "Upscale", "Skip"], correct: 1 },
        { q: "Figma Style Guide page contains:", options: ["Deleted files", "Colors, fonts, spacing, components", "Random", "Only text"], correct: 1 },
        { q: "Correct layer naming:", options: ["Frame 432", "Home-Hero", "Untitled", "Final-v3"], correct: 1 },
        { q: "P0 priority for designers:", options: ["Learning", "Revision requests, deadline deliveries, PM questions", "Inspiration", "System updates"], correct: 1 },
        { q: "After 15 days, ONE careless mistake can result in:", options: ["Warning", "Potential removal from client work", "Nothing", "Bonus"], correct: 1 },
        { q: "Add to Cart button should:", options: ["Blend in", "Be high-contrast and clearly visible", "Be hidden", "Match text"], correct: 1 },
        { q: "Design for conversion means:", options: ["Win awards", "Every decision answers 'Will this help visitors buy?'", "Look pretty", "Use many colors"], correct: 1 }
    ]
};

// Export for use
if (typeof module !== 'undefined') {
    module.exports = { taskQuizzes };
}
