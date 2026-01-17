// Comprehensive CSS/HTML QA Audit Script
// Checks all pages for common issues and consistency
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

const issues = [];
const stats = {
    totalFiles: 0,
    sopFiles: 0,
    kraFiles: 0,
    kpiFiles: 0,
    onboardingFiles: 0,
    resourceFiles: 0,
    otherFiles: 0,
    passed: 0,
    failed: 0
};

// Critical checks
const checks = [
    {
        name: 'Mobile Header HTML',
        test: (content) => content.includes('class="mobile-header"'),
        required: true
    },
    {
        name: 'Mobile Header CSS (display: none)',
        test: (content) => content.includes('.mobile-header') && content.includes('display: none'),
        required: true
    },
    {
        name: 'Mobile Header CSS (display: flex in media)',
        test: (content) => content.includes('@media') && content.includes('.mobile-header') && content.includes('display: flex'),
        required: true
    },
    {
        name: 'toggleSidebar Function',
        test: (content) => content.includes('function toggleSidebar'),
        required: true
    },
    {
        name: 'Sidebar Active/Open Class',
        test: (content) => content.includes('.sidebar.active') || content.includes('.sidebar.open'),
        required: true
    },
    {
        name: 'Mobile Menu Button',
        test: (content) => content.includes('mobile-menu-btn'),
        required: true
    },
    {
        name: 'Mobile Home Button',
        test: (content) => content.includes('mobile-home-btn'),
        required: true
    },
    {
        name: 'Viewport Meta Tag',
        test: (content) => content.includes('viewport') && content.includes('width=device-width'),
        required: true
    },
    {
        name: 'Hero Cursor CSS Link',
        test: (content) => content.includes('hero-cursor.css'),
        required: false
    },
    {
        name: 'Sidebar Width 280px',
        test: (content) => content.includes('width: 280px') || content.includes('width:280px'),
        required: true
    },
    {
        name: 'Main Content Margin Left',
        test: (content) => content.includes('margin-left: 280px') || content.includes('margin-left:280px'),
        required: true
    },
    {
        name: 'Print Styles',
        test: (content) => content.includes('@media print'),
        required: false
    },
    {
        name: 'Z-index for Sidebar (>=2000)',
        test: (content) => /z-index:\s*(2000|2\d{3}|3000)/i.test(content),
        required: true
    },
    {
        name: 'Sidebar Transform Hidden',
        test: (content) => content.includes('transform: translateX(-100%)'),
        required: true
    }
];

function categorizeFile(filePath) {
    if (filePath.includes('/kra/') || filePath.includes('\\kra\\')) return 'kra';
    if (filePath.includes('/kpi/') || filePath.includes('\\kpi\\')) return 'kpi';
    if (filePath.includes('/onboarding/') || filePath.includes('\\onboarding\\')) return 'onboarding';
    if (filePath.includes('/resources/') || filePath.includes('\\resources\\')) return 'resource';
    if (filePath.endsWith('-sop.html')) return 'sop';
    return 'other';
}

function auditFile(filePath) {
    const fileName = path.basename(filePath);
    const relativePath = path.relative(sopsDir, filePath);
    let content;

    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        issues.push({ file: relativePath, issue: 'Cannot read file', severity: 'error' });
        return;
    }

    stats.totalFiles++;
    const category = categorizeFile(filePath);
    stats[category + 'Files']++;

    let fileIssues = [];

    checks.forEach(check => {
        const passed = check.test(content);
        if (!passed && check.required) {
            fileIssues.push({
                file: relativePath,
                issue: `Missing: ${check.name}`,
                severity: 'error'
            });
        } else if (!passed && !check.required) {
            fileIssues.push({
                file: relativePath,
                issue: `Optional missing: ${check.name}`,
                severity: 'warning'
            });
        }
    });

    // Additional specific checks

    // Check for duplicate toggleSidebar functions
    const toggleMatches = content.match(/function toggleSidebar/g);
    if (toggleMatches && toggleMatches.length > 1) {
        fileIssues.push({
            file: relativePath,
            issue: `Duplicate toggleSidebar function (${toggleMatches.length} found)`,
            severity: 'warning'
        });
    }

    // Check for broken paths (common issue)
    if (content.includes('href=""') || content.includes("href=''")) {
        fileIssues.push({
            file: relativePath,
            issue: 'Empty href attribute found',
            severity: 'warning'
        });
    }

    // Check for missing closing tags
    const styleOpens = (content.match(/<style/g) || []).length;
    const styleCloses = (content.match(/<\/style>/g) || []).length;
    if (styleOpens !== styleCloses) {
        fileIssues.push({
            file: relativePath,
            issue: `Mismatched <style> tags (${styleOpens} opens, ${styleCloses} closes)`,
            severity: 'error'
        });
    }

    // Check mobile responsiveness
    if (!content.includes('@media (max-width: 768px)') && !content.includes('@media (max-width:768px)')) {
        fileIssues.push({
            file: relativePath,
            issue: 'Missing 768px mobile breakpoint',
            severity: 'warning'
        });
    }

    if (fileIssues.filter(i => i.severity === 'error').length === 0) {
        stats.passed++;
    } else {
        stats.failed++;
    }

    issues.push(...fileIssues);
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Skip training, hr-docs-editor, and assets
            if (['training', 'hr-docs-editor', 'assets'].includes(item)) return;
            processDirectory(fullPath);
        } else if (item.endsWith('.html') && item !== 'index.html') {
            auditFile(fullPath);
        }
    });
}

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║              CSS/HTML QA AUDIT REPORT                          ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

processDirectory(sopsDir);

// Group issues by file
const issuesByFile = {};
issues.forEach(issue => {
    if (!issuesByFile[issue.file]) {
        issuesByFile[issue.file] = [];
    }
    issuesByFile[issue.file].push(issue);
});

// Print summary
console.log('📊 SUMMARY');
console.log('─'.repeat(50));
console.log(`Total Files Audited: ${stats.totalFiles}`);
console.log(`  • SOP Files: ${stats.sopFiles}`);
console.log(`  • KRA Files: ${stats.kraFiles}`);
console.log(`  • KPI Files: ${stats.kpiFiles}`);
console.log(`  • Onboarding Files: ${stats.onboardingFiles}`);
console.log(`  • Resource Files: ${stats.resourceFiles}`);
console.log(`  • Other Files: ${stats.otherFiles}`);
console.log('');
console.log(`✅ Passed: ${stats.passed}`);
console.log(`❌ Failed: ${stats.failed}`);
console.log('');

// Print errors first
const errors = issues.filter(i => i.severity === 'error');
const warnings = issues.filter(i => i.severity === 'warning');

if (errors.length > 0) {
    console.log('🚨 ERRORS (Must Fix)');
    console.log('─'.repeat(50));

    const errorsByFile = {};
    errors.forEach(e => {
        if (!errorsByFile[e.file]) errorsByFile[e.file] = [];
        errorsByFile[e.file].push(e.issue);
    });

    Object.keys(errorsByFile).forEach(file => {
        console.log(`\n📄 ${file}`);
        errorsByFile[file].forEach(issue => {
            console.log(`   ❌ ${issue}`);
        });
    });
    console.log('');
}

if (warnings.length > 0) {
    console.log('\n⚠️  WARNINGS (Optional)');
    console.log('─'.repeat(50));

    const warningsByFile = {};
    warnings.forEach(w => {
        if (!warningsByFile[w.file]) warningsByFile[w.file] = [];
        warningsByFile[w.file].push(w.issue);
    });

    Object.keys(warningsByFile).slice(0, 10).forEach(file => {
        console.log(`\n📄 ${file}`);
        warningsByFile[file].forEach(issue => {
            console.log(`   ⚠️  ${issue}`);
        });
    });

    if (Object.keys(warningsByFile).length > 10) {
        console.log(`\n   ... and ${Object.keys(warningsByFile).length - 10} more files with warnings`);
    }
}

// Final verdict
console.log('\n' + '═'.repeat(50));
if (errors.length === 0) {
    console.log('✅ ALL CRITICAL CHECKS PASSED!');
    console.log('   Mobile header, sidebar, and CSS are consistent across all pages.');
} else {
    console.log(`❌ ${errors.length} CRITICAL ISSUES FOUND`);
    console.log('   Run the fix scripts to resolve these issues.');
}
console.log('═'.repeat(50));
