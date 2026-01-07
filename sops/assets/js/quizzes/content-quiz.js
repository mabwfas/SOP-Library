const contentQuestions = [
    // 1-5: Research & Prep
    { q: "What is the first step in the content creation process?", options: ["Drafting", "Research", "Editing", "Publishing"], correct: 1 },
    { q: "Which tool is recommended for keyword research?", options: ["Photoshop", "SEMrush/Ahrefs", "Excel", "Spotify"], correct: 1 },
    { q: "What distinguishes a primary source from a secondary source?", options: ["Primary is Wikipedia", "Primary is original data/interviews", "Secondary is more reliable", "Secondary is faster"], correct: 1 },
    { q: "Why is creating an outline important?", options: ["It wastes time", "It ensures logical flow", "It improves grammar", "It increases word count"], correct: 1 },
    { q: "What should be defined before writing starts?", options: ["Font size", "Target Audience & Goal", "Image styles", "Publish date"], correct: 1 },

    // 6-10: SEO Basics
    { q: "Where should the primary keyword appear?", options: ["Footer only", "H1, First 100 words, URL", "In every sentence", "Hidden in CSS"], correct: 1 },
    { q: "What is the ideal length for a Meta Description?", options: ["50 chars", "150-160 chars", "500 chars", "1000 chars"], correct: 1 },
    { q: "What is a 'Long-tail keyword'?", options: ["A single word", "A specific multi-word phrase", "A irrelevant tag", "A URL slug"], correct: 1 },
    { q: "Why use H2 and H3 tags?", options: ["For decoration", "To structure content for readers & bots", "To increase page load speed", "To make text blue"], correct: 1 },
    { q: "What is 'Alt Text' used for?", options: ["Color grading", "Image SEO & Accessibility", "Hiding images", "Video playback"], correct: 1 },

    // 11-15: Drafting
    { q: "What is the recommended paragraph length for readability?", options: ["10-15 lines", "3-4 lines", "1 line only", "No paragraphs"], correct: 1 },
    { q: "Which voice is generally preferred in content writing?", options: ["Passive Voice", "Active Voice", "Complex Voice", "Silent Voice"], correct: 1 },
    { q: "What is a 'Hook'?", options: ["The final sentence", "The opening statement that grabs attention", "A punctuation mark", "A citation style"], correct: 1 },
    { q: "How should you handle industry jargon?", options: ["Overuse it", "Explain it or avoid if unnecessary", "Invent new terms", "Translate to Latin"], correct: 1 },
    { q: "What is the 'Flesch-Kincaid' score related to?", options: ["Plagiarism", "Readability", "SEO rank", "Word count"], correct: 1 },

    // 16-20: Structuring
    { q: "What is the purpose of the Introduction?", options: ["To summarize the conclusion", "To hook the reader and state value", "To list references", "To sell a product immediately"], correct: 1 },
    { q: "Where should the 'Call to Action' (CTA) typically go?", options: ["Middle of a paragraph", "Conclusion/End", "Nowhere", "Hidden in alt text"], correct: 1 },
    { q: "How do bullet points help?", options: ["They clutter the page", "They break up text and improve scanning", "They lower SEO score", "They use more ink"], correct: 1 },
    { q: "What is an H1 tag reserved for?", options: ["Subheadings", "The main title", "Captions", "Links"], correct: 1 },
    { q: "What ensures a smooth transition between paragraphs?", options: ["Transition words", "Double spacing", "Changing fonts", "Adding images"], correct: 0 },

    // 21-25: Editing & Proofreading
    { q: "What is the difference between editing and proofreading?", options: ["No difference", "Editing is structure/flow, Proofreading is grammar/typos", "Proofreading comes first", "Editing is for images"], correct: 1 },
    { q: "Which tool checks for grammar errors?", options: ["Grammarly", "Paint", "Calculator", "Zoom"], correct: 0 },
    { q: "Why read your draft aloud?", options: ["To practice speaking", "To catch awkward phrasing and flow issues", "To memorize it", "To record a podcast"], correct: 1 },
    { q: "How do you check for plagiarism?", options: ["Guess", "Use tools like Copyscape/Turnitin", "Ask a friend", "Google every sentence"], correct: 1 },
    { q: "What is 'fluff' in writing?", options: ["Soft words", "Unnecessary words that add no value", "Bold text", "Good descriptive text"], correct: 1 },

    // 26-30: Style & Tone
    { q: "If the brand is 'Professional but Friendly', you should avoid:", options: ["Clear language", "Slang and overly casual internet speak", "Polite greetings", "Helpful tips"], correct: 1 },
    { q: "What is 'Brand Voice'?", options: ["The audio logo", "The consistent personality/style of the brand", "The CEO's voice", "The font choice"], correct: 1 },
    { q: "When writing for B2B, what is usually prioritized?", options: ["Emotional storytelling only", "Logic, Value, and ROI", "Memes", "Fiction"], correct: 1 },
    { q: "When writing for B2C, what is effective?", options: ["Complex manual style", "Emotional connection and benefits", "Legal jargon", "Abstract concepts"], correct: 1 },
    { q: "What does 'You-centric' writing mean?", options: ["Writing about yourself", "Focusing on the reader ('You')", "Writing about YouTube", "Writing in third person"], correct: 1 },

    // 31-35: Formatting
    { q: "What is the best way to emphasize a key point?", options: ["ALL CAPS", "Bold or Italics (sparingly)", "Red text", "Underline everything"], correct: 1 },
    { q: "How should hyperlinks be formatted?", options: ["'Click here'", "Descriptive anchor text", "Full URL only", "Hidden text"], correct: 1 },
    { q: "What file format is commonly used for drafts?", options: [".exe", ".docx or Google Doc", ".jpg", ".mp3"], correct: 1 },
    { q: "How many H1 tags per page?", options: ["As many as you want", "One", "Two", "Zero"], correct: 1 },
    { q: "Why use whitespace?", options: ["To save KB", "To improve visual readability", "To look empty", "To print faster"], correct: 1 },

    // 36-40: Advanced SEO
    { q: "What is an 'Internal Link'?", options: ["Link to another site", "Link to a page on the same domain", "Link to the admin panel", "Link to Google"], correct: 1 },
    { q: "What is an 'External Link'?", options: ["Link to your homepage", "Link to a different reputable domain", "Link to a local file", "Link to CSS"], correct: 1 },
    { q: "What is 'Keyword Density'?", options: ["Weight of keywords", "Percentage of times a keyword appears", "Number of bold words", "Color of keywords"], correct: 1 },
    { q: "Is 'Keyword Stuffing' good?", options: ["Yes, Google loves it", "No, it leads to penalties", "Yes, if hidden", "Maybe"], correct: 1 },
    { q: "What does SERP stand for?", options: ["Search Engine Results Page", "Simple English Reading Protocol", "System Error Report Page", "Site Editor Ranking Philosphy"], correct: 0 },

    // 41-45: Images & Media
    { q: "Where can you get free stock images?", options: ["Google Images (any)", "Unsplash/Pexels", "Competitor sites", "Instagram"], correct: 1 },
    { q: "What file size is best for web images?", options: ["10MB+", "Original Raw", "Optimized/Compressed (<500KB)", "BMP format"], correct: 2 },
    { q: "Why use captions?", options: ["To fill space", "To explain the image and engage scanners", "To hide text", "To add code"], correct: 1 },
    { q: "What format is best for logos?", options: ["JPG", "PNG/SVG", "GIF", "TIFF"], correct: 1 },
    { q: "What format is best for photos?", options: ["SVG", "JPG/WebP", "GIF", "ICO"], correct: 1 },

    // 46-50: Final Polish
    { q: "What is the last step before submission?", options: ["Writing the title", "Final Final Proofread", "Starting research", "Checking email"], correct: 1 },
    { q: "Who is the final judge of content quality?", options: ["The writer", "The audience", "The computer", "The printer"], correct: 1 },
    { q: "If you are unsure of a fact, you should:", options: ["Guess", "Verify with a reliable source", "Omit it", "Make it up"], correct: 1 },
    { q: "Consistency in formatting involves:", options: ["Changing fonts randomly", "Using same headers/bullet styles throughout", "Different colors per paragraph", "Random spacing"], correct: 1 },
    { q: "Why update old content?", options: ["You shouldn't", "To keep it relevant and improve SEO", "To delete it", "To change the author"], correct: 1 }
];
