const designerQuestions = [
    // 1-5: The 5 Laws of Premium Design
    { q: "What is Law #1 of Premium Design?", options: ["Add more color", "Whitespace = Luxury", "Use big fonts", "Fill every space"], correct: 1 },
    { q: "What implies 'Consistency is King'?", options: ["Using random fonts", "Same fonts, colors, buttons EVERYWHERE", "Changing styles per page", "Being boring"], correct: 1 },
    { q: "How many font families maximum per store?", options: ["10", "5", "2 (Heading + Body)", "1"], correct: 2 },
    { q: "Mobile First means designing for which width first?", options: ["1920px", "375px", "768px", "1024px"], correct: 1 },
    { q: "A beautiful design that doesn't sell is:", options: ["Art", "A Failure", "Good practice", "Awards material"], correct: 1 },

    // 6-10: Mobile Design (70% Traffic)
    { q: "What is the minimum touch target size?", options: ["10px", "24px", "44px x 44px", "100px"], correct: 2 },
    { q: "What is the minimum Body Text size for mobile?", options: ["10px", "12px", "14px", "16px"], correct: 3 },
    { q: "Where should the 'Add to Cart' be on mobile?", options: ["Hidden", "Sticky at bottom or above fold", "Top right", "In menu"], correct: 1 },
    { q: "Mobile product grids should have max how many columns?", options: ["4", "3", "2", "1"], correct: 2 },
    { q: "If mobile isn't perfect, you lose how much traffic?", options: ["10%", "30%", "70%", "0%"], correct: 2 },

    // 11-15: Typography & Colors
    { q: "Which font pairing is for 'Luxury'?", options: ["Comic Sans + Arial", "Playfair Display + Lato", "Courier + Times", "Bold + Italic"], correct: 1 },
    { q: "Primary colors should be used for:", options: ["Backgrounds", "Buttons & Key CTAs", "Borders", "Everything"], correct: 1 },
    { q: "What is the result of using 3+ fonts?", options: ["Creativity", "Amateur / Visual Chaos", "Professionalism", "Speed"], correct: 1 },
    { q: "For 'Trust', which color is often used?", options: ["Red", "Blue", "Black", "Yellow"], correct: 1 },
    { q: "Body text color should usually be:", options: ["Pure Black (#000000)", "Off-Black / Dark Grey (#212529)", "Light Grey", "Blue"], correct: 1 },

    // 16-20: Trust Elements
    { q: "Where does the 'Free Shipping' badge go?", options: ["Hidden in footer", "Trust bar & near ATC button", "About us page only", "Nowhere"], correct: 1 },
    { q: "What reduces purchase friction?", options: ["More popups", "Trust Elements (Secure Payment, Returns, Reviews)", "Hidden prices", "Slow speed"], correct: 1 },
    { q: "Customer Reviews are important because:", options: ["They fill space", "Social Proof drives conversions", "Clients like them", "Google likes them"], correct: 1 },
    { q: "A 'Secure Checkout' badge helps with:", options: ["Speed", "Trust / Security concerns", "Design", "SEO"], correct: 1 },
    { q: "Trust bar usually contains:", options: ["Jokes", "Free Shipping, Returns, Secure Payment, Support", "Ads", "News"], correct: 1 },

    // 21-25: Layout & Spacing
    { q: "What is the 'Spacing Multiplier' system?", options: ["Random numbers", "Multiples of 8px (8, 16, 24...)", "5px steps", "10px steps"], correct: 1 },
    { q: "Crowded layouts make the brand look:", options: ["Busy", "Cheap", "Rich", "Popular"], correct: 1 },
    { q: "Hierarchy guides the user to:", options: ["The exit", "The most important elements first", "The footer", "The logo"], correct: 1 },
    { q: "Max characters per line for readability:", options: ["100+", "45-75", "20", "200"], correct: 1 },
    { q: "Section spacing on desktop should be:", options: ["10px", "80-120px", "200px", "0px"], correct: 1 },

    // 26-30: Images & Assets
    { q: "If client sends low-res images, you:", options: ["Use them", "Flag to PM / Request better or use AI upscale", "Stretch them", "Ignore"], correct: 1 },
    { q: "Images must be compressed to avoid:", options: ["Pixelation", "Slow load speed", "Color loss", "Theft"], correct: 1 },
    { q: "Product images should include:", options: ["Only white background", "Lifestyle / In-use shots", "Text overlays", "Watermarks"], correct: 1 },
    { q: "Consistent aspect ratio means:", options: ["All images look different", "All images have same shape (e.g., square)", "Random sizes", "None"], correct: 1 },
    { q: "Alt text is for:", options: ["SEO & Accessibility", "Internal notes", "Nothing", "filenames"], correct: 0 },

    // 31-35: Scenarios
    { q: "Client wants 'MORE' elements. You said:", options: ["Yes", "More is not better. Clarity is better.", "No", "I quit"], correct: 1 },
    { q: "Store A (Bad Design) vs Store B (Premium). Result?", options: ["Same sales", "Store B made 4x revenue", "Store A won", "No difference"], correct: 1 },
    { q: "Client asks for comic sans. You:", options: ["Do it", "Professional pushback / Advise against it", "Mock them", "Cry"], correct: 1 },
    { q: "Design looks good on desktop but broken on mobile. Is it done?", options: ["Yes", "NO. Mobile is primary.", "Maybe", "Ship it"], correct: 1 },
    { q: "Too many colors make the site look:", options: ["Fun", "Amateur / Clownish", "Professional", "Premium"], correct: 1 },

    // 36-40: Tools & Process
    { q: "What tool do we use for design?", options: ["Paint", "Figma", "Word", "Excel"], correct: 1 },
    { q: "Before starting design, you need:", options: ["Coffee", "Brand Assets (Logo, Colors, Fonts)", "Music", "Permission"], correct: 1 },
    { q: "If logo is missing, you:", options: ["Draw one", "Flag to PM (Cannot proceed)", "Use text", "Google it"], correct: 1 },
    { q: "ChatGPT prompt for colors:", options: ["Give me colors", "Suggest a color palette for [Brand Vibe]", " What is red?", "Colors"], correct: 1 },
    { q: "Where do you find inspiration?", options: ["Nowhere", "Competitors / Top Shopify Stores", "Books", "Dreams"], correct: 1 },

    // 41-45: Optimization
    { q: "Hover states on buttons:", options: ["Are useless", "Add polish & interactivity", "Slow down site", "Are optional"], correct: 1 },
    { q: "Favicon should be:", options: ["Missing", "Set (32x32)", "Huge", "Text"], correct: 1 },
    { q: "No 'Lorem Ipsum' means:", options: ["Use Latin", "Use real or placeholder marketing copy", "Leave blank", "Use strict"], correct: 1 },
    { q: "What makes a 'Premium' button?", options: ["Gradient", "Modern style, hover state, proper padding", "Red color", "Blinking"], correct: 1 },
    { q: "Visual Consistency build:", options: ["Boredom", "Trust", "Confusion", "Nothing"], correct: 1 },

    // 46-50: Final Check
    { q: "True or False: Whitespace is wasted space.", options: ["True", "False (Whitespace = Luxury)", "Sometimes", "Depends"], correct: 1 },
    { q: "True or False: You should design for desktop first.", options: ["True", "False (Mobile First)", "Both same time", "No"], correct: 1 },
    { q: "True or False: Consistency is more important than creativity.", options: ["True (in UI)", "False", "Neither", "Both"], correct: 0 },
    { q: "True or False: You can use 5 different fonts.", options: ["True", "False (Max 2)", "If client wants", "Maybe"], correct: 1 },
    { q: "True or False: Trust badges help conversion.", options: ["True", "False", "No effect", "Hurt conversion"], correct: 0 }
];
