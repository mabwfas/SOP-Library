const fs = require('fs');
const path = require('path');

const trainingDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/training';

// Role-specific certificate skill descriptions
const roleDescriptions = {
    'pm-training-app.js': 'Demonstrating proficiency in PM mindset, project lifecycle, client onboarding, daily operations, scenario handling, revision management, escalation protocols, QA processes, and certification requirements.',
    'sales-training-app.js': 'Demonstrating proficiency in sales mindset, company knowledge, product mastery, lead qualification, response templates, sales psychology, objection handling, closing techniques, and practice scenarios.',
    'developer-training-app.js': 'Demonstrating proficiency in development workflows, code standards, Shopify architecture, theme customization, app integration, performance optimization, debugging, and deployment processes.',
    'designer-training-app.js': 'Demonstrating proficiency in design principles, UI/UX fundamentals, brand identity, Shopify design systems, responsive design, accessibility, prototyping, and design handoff.',
    'fullstack-training-app.js': 'Demonstrating proficiency in full-stack development, frontend & backend integration, Shopify APIs, database management, security practices, testing, and deployment pipelines.',
    'content-training-app.js': 'Demonstrating proficiency in content strategy, SEO writing, brand voice, product descriptions, blog writing, email marketing, social copy, and content optimization.',
    'social-media-training-app.js': 'Demonstrating proficiency in social media strategy, content calendars, platform best practices, community management, analytics, paid advertising, and engagement tactics.',
    'hr-training-app.js': 'Demonstrating proficiency in HR processes, recruitment, onboarding, employee relations, performance management, policy compliance, documentation, and team building.',
    'finance-training-app.js': 'Demonstrating proficiency in financial reporting, budgeting, invoicing, expense management, payroll basics, compliance, and financial analysis.',
    'cs-training-app.js': 'Demonstrating proficiency in customer success principles, client retention, support workflows, upselling, issue resolution, feedback collection, and relationship management.',
    'client-chat-training-app.js': 'Demonstrating proficiency in live chat protocols, response templates, customer service excellence, issue triage, escalation procedures, and client satisfaction.'
};

// Old text to replace (spans multiple lines in some files)
const oldTextPatterns = [
    `Demonstrating proficiency in sales mindset, company knowledge, product mastery, 
                    lead qualification, response templates, sales psychology, objection handling, 
                    closing techniques, and practice scenarios.`,
    `Demonstrating proficiency in sales mindset, company knowledge, product mastery, lead qualification, response templates, sales psychology, objection handling, closing techniques, and practice scenarios.`
];

Object.entries(roleDescriptions).forEach(([filename, newDescription]) => {
    const filePath = path.join(trainingDir, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filename}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Try to replace the old text with new role-specific text
    oldTextPatterns.forEach(oldText => {
        if (content.includes(oldText)) {
            content = content.replace(oldText, newDescription);
            changed = true;
        }
    });

    // Also try matching just the start of the text
    if (!changed && content.includes('Demonstrating proficiency in sales mindset')) {
        // Find and replace the full sentence
        content = content.replace(
            /Demonstrating proficiency in sales mindset[^.]+\./g,
            newDescription
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${filename}`);
    } else {
        console.log(`No match found: ${filename}`);
    }
});

console.log('Done!');
