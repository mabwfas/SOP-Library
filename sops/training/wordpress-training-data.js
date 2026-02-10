// WordPress Developer Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program
// 10 Tasks, 100+ Quiz Questions, Deep Content

const trainingTasks = [
    {
        id: 1,
        title: "WordPress Developer Mindset",
        description: "Building websites that CONVERT — Your code drives revenue",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Read ALL content sections completely",
            "🎯 Understand: The revenue impact of your work",
            "🧠 Learn: Digital Heroes WordPress Standards"
        ]
    },
    {
        id: 2,
        title: "WordPress Core Architecture",
        description: "Themes, Plugins, Database & The Loop",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🏗️ Master: Theme hierarchy & template system",
            "🔄 Understand: The WordPress Loop",
            "🗄️ Learn: Database structure & wp_options"
        ]
    },
    {
        id: 3,
        title: "Theme Development",
        description: "Custom Themes from Scratch",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🎨 Master: Template hierarchy",
            "📁 Learn: Required theme files & structure",
            "📱 Build: Mobile-first responsive themes"
        ]
    },
    {
        id: 4,
        title: "Custom Post Types & Taxonomies",
        description: "Extending WordPress Data Model",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📦 Create: Custom post types with register_post_type()",
            "🏷️ Build: Custom taxonomies",
            "🔧 Learn: Advanced Custom Fields (ACF)"
        ]
    },
    {
        id: 5,
        title: "WooCommerce Development",
        description: "E-Commerce Store Setup & Customization",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 90-120 minutes",
            "🛒 Master: WooCommerce hooks & filters",
            "💳 Setup: Payment gateways & shipping",
            "📦 Learn: Product types & variations"
        ]
    },
    {
        id: 6,
        title: "Plugin Development",
        description: "Building Custom WordPress Plugins",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "🔌 Master: Plugin architecture & activation hooks",
            "🪝 Learn: Actions & Filters API",
            "🗄️ Build: Custom database tables"
        ]
    },
    {
        id: 7,
        title: "Security & Hardening",
        description: "Protecting WordPress Sites",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🔒 Master: Data sanitization & validation",
            "🛡️ Learn: Nonce verification & CSRF protection",
            "⚠️ Understand: SQL injection & XSS prevention"
        ]
    },
    {
        id: 8,
        title: "Performance Optimization",
        description: "Speed is Revenue — Core Web Vitals",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-75 minutes",
            "⚡ Target: 90+ PageSpeed scores",
            "🖼️ Master: Image optimization & lazy loading",
            "📦 Learn: Caching strategies & CDN setup"
        ]
    },
    {
        id: 9,
        title: "REST API & Headless WordPress",
        description: "Modern WordPress Development",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "🌐 Master: WP REST API endpoints",
            "🔌 Build: Custom API routes",
            "⚛️ Learn: Headless WordPress with React/Next.js"
        ]
    },
    {
        id: 10,
        title: "Deployment & Final Exam",
        description: "Launch Checklist & Certification",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60-90 minutes",
            "🚀 Master: Staging → Production workflow",
            "📋 Learn: Pre-launch QA checklist",
            "🎓 Complete: Final Certification Exam (20/20)"
        ]
    }
];

// =============================================================================
// TASK 1: WORDPRESS DEVELOPER MINDSET
// =============================================================================
const task1Content = `
<h2>📚 PART 1: THE FOUNDATION — Code That CONVERTS</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(6, 182, 212, 0.15)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;">🚀 Welcome to Digital Heroes — You Are Part of Something Bigger</h3>
    <p>Before we dive into WordPress development, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #0EA5E9; padding: 20px; margin: 15px 0;">
        <strong style="color: #38BDF8;">🎯 Our Journey: Point A to Point B</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(14, 165, 233, 0.2);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point A (Now):</strong> ₹9.2 Crores</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point B (2027):</strong> ₹75 Crores</td>
            </tr>
        </table>
        <p style="margin: 0;">Every team member contributes to this journey, and every team member benefits from it through our equity-sharing model—<strong>even interns from Day 1</strong>.</p>
    </div>
</div>

<!-- THE INTERCONNECTED CHAIN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(236, 72, 153, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F472B6; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #38BDF8; font-size: 1.2em;">⭐ YOU (WordPress Developer)</strong> → <strong>THE BUILDER — deliver quality websites that drive client revenue</strong><br>
            ↓<br>
            <strong style="color: #34D399;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #60A5FA;">CS Team</strong> → protects satisfaction<br>
            ↓<br>
            <strong style="color: #A78BFA;">5-Star Reviews</strong> → boost algorithm positioning<br>
            ↓<br>
            <strong style="color: #FBBF24;">More Enquiries</strong> → the cycle continues
        </p>
    </div>
    <div class="highlight-box" style="background: rgba(236, 72, 153, 0.15); border-left: 4px solid #EC4899; padding: 15px; margin: 15px 0;">
        <strong style="color: #F472B6;">⚙️ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a WordPress developer, you are the <strong>BUILDER</strong> of Digital Heroes. When you deliver a fast, secure, beautifully coded WordPress site, you're creating client satisfaction that generates 5-star reviews. WordPress powers 43% of the internet — mastering it makes you invaluable.</p>
    </div>
    <p style="color: #F472B6; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">No quality development = No reviews = No algorithm boost = Chain breaks. You ARE the backbone.</p>
</div>

<div class="content-section">
    <h3>🎯 WordPress vs Shopify — Why Both Matter</h3>
    <p>Digital Heroes serves clients on <strong>both</strong> platforms. Here's when we use each:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Use WordPress When:</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Use Shopify When:</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Content-heavy sites (blogs, portfolios)<br>
                • Custom web applications<br>
                • Membership sites<br>
                • Complex multi-vendor marketplaces<br>
                • SEO-critical projects<br>
                • Custom functionality needed
            </td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Pure e-commerce stores<br>
                • Quick store launches<br>
                • Clients who want simple management<br>
                • Subscription box businesses<br>
                • Dropshipping stores
            </td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>👤 The Two Types of WordPress Developers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚶 The Plugin Installer</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Installs 30+ plugins for everything<br>
                • Uses page builders for ALL layouts<br>
                • Can't debug without Google<br>
                • Ignores security updates<br>
                <em style="color: #EF4444;">Will be replaced by AI ❌</em>
            </td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);"><strong>🎓 The Revenue Developer</strong></td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);">
                • Writes custom code when plugins are overkill<br>
                • Understands WordPress core deeply<br>
                • Security-first mindset<br>
                • Optimizes for speed and SEO<br>
                <em style="color: #10B981;">Commands $80+/hour ✅</em>
            </td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 The Digital Heroes WordPress Standards</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.3);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1);" colspan="2"><strong>❌ NEVER DO THESE</strong></td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Edit core WordPress files</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use child themes or plugins instead</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use nulled/pirated themes or plugins</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security risk — instant termination</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Skip backups before updates</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always backup DB + files first</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Use admin as username</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom usernames + strong passwords</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deploy without testing</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always test on staging first</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about WordPress Developer Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed to Task 2</li>
        <li>💡 Questions test UNDERSTANDING, not memorization</li>
    </ul>
</div>
`;

// =============================================================================
// TASK 2: WORDPRESS CORE ARCHITECTURE
// =============================================================================
const task2Content = `
<h2>📚 TASK 2: WORDPRESS CORE ARCHITECTURE</h2>

<div class="content-section">
    <h3>🏗️ The WordPress Stack</h3>
    <p>WordPress runs on the LAMP/LEMP stack:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        <strong style="color: #0EA5E9;">SERVER</strong> (Linux/Ubuntu)<br>
        ├── <strong style="color: #10B981;">Web Server</strong> (Apache/Nginx)<br>
        ├── <strong style="color: #F59E0B;">PHP</strong> (8.0+ recommended)<br>
        ├── <strong style="color: #EC4899;">MySQL/MariaDB</strong> (Database)<br>
        └── <strong style="color: #8B5CF6;">WordPress</strong> (Application Layer)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-content/themes/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-content/plugins/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-content/uploads/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── wp-config.php (⚠️ Critical)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;└── wp-admin/, wp-includes/ (❌ Never edit)
    </div>
</div>

<div class="content-section">
    <h3>🔄 The WordPress Loop</h3>
    <p>The Loop is the <strong>heart</strong> of WordPress. It processes and displays posts:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #569cd6;">&lt;?php</span> <span style="color: #c586c0;">if</span> ( <span style="color: #dcdcaa;">have_posts</span>() ) : <span style="color: #c586c0;">while</span> ( <span style="color: #dcdcaa;">have_posts</span>() ) : <span style="color: #dcdcaa;">the_post</span>(); <span style="color: #569cd6;">?&gt;</span><br><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;article&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;h2&gt;</span><span style="color: #569cd6;">&lt;?php</span> <span style="color: #dcdcaa;">the_title</span>(); <span style="color: #569cd6;">?&gt;</span><span style="color: #808080;">&lt;/h2&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #569cd6;">&lt;?php</span> <span style="color: #dcdcaa;">the_content</span>(); <span style="color: #569cd6;">?&gt;</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;/article&gt;</span><br><br>
        <span style="color: #569cd6;">&lt;?php</span> <span style="color: #c586c0;">endwhile</span>; <span style="color: #c586c0;">else</span> : <span style="color: #569cd6;">?&gt;</span><br>
        &nbsp;&nbsp;<span style="color: #808080;">&lt;p&gt;</span>No posts found.<span style="color: #808080;">&lt;/p&gt;</span><br>
        <span style="color: #569cd6;">&lt;?php</span> <span style="color: #c586c0;">endif</span>; <span style="color: #569cd6;">?&gt;</span>
    </div>
</div>

<div class="content-section">
    <h3>📁 Template Hierarchy</h3>
    <p>WordPress uses a specific order to determine which template file to load:</p>
    <div class="highlight-box">
        <strong>Priority Order (Most → Least Specific):</strong>
        <ol>
            <li><code>single-{post-type}-{slug}.php</code> — Most specific</li>
            <li><code>single-{post-type}.php</code></li>
            <li><code>single.php</code></li>
            <li><code>singular.php</code></li>
            <li><code>index.php</code> — Ultimate fallback</li>
        </ol>
    </div>
    <div class="warning-box">
        <strong>⚠️ Critical Rule:</strong> Every theme MUST have <code>index.php</code> and <code>style.css</code> at minimum.
    </div>
</div>

<div class="content-section">
    <h3>🗄️ WordPress Database Tables</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Table</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Purpose</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_posts</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All content (posts, pages, CPTs, revisions)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_postmeta</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Custom fields for posts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_options</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Site settings (⚠️ autoload matters!)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_users</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User accounts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>wp_terms</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Categories, tags, custom taxonomies</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about WordPress Core Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

// =============================================================================
// TASKS 3-10: Content placeholders (study guides + quizzes active)
// =============================================================================
const task3Content = `
<h2>📚 TASK 3: THEME DEVELOPMENT</h2>

<div class="content-section">
    <h3>📁 Required Theme Files</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        <strong style="color: #0EA5E9;">my-theme/</strong><br>
        ├── <strong>style.css</strong> (Theme header + styles)<br>
        ├── <strong>index.php</strong> (Main template)<br>
        ├── <strong>functions.php</strong> (Theme setup & hooks)<br>
        ├── <strong>header.php</strong> (Site header)<br>
        ├── <strong>footer.php</strong> (Site footer)<br>
        ├── <strong>sidebar.php</strong> (Widget area)<br>
        ├── <strong>single.php</strong> (Single post)<br>
        ├── <strong>page.php</strong> (Static pages)<br>
        ├── <strong>archive.php</strong> (Post archives)<br>
        ├── <strong>search.php</strong> (Search results)<br>
        ├── <strong>404.php</strong> (Error page)<br>
        ├── template-parts/ (Reusable components)<br>
        ├── assets/css/ (Stylesheets)<br>
        ├── assets/js/ (Scripts)<br>
        └── assets/images/ (Theme images)
    </div>
</div>

<div class="content-section">
    <h3>⚙️ functions.php Essentials</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0;">
        <span style="color: #6a9955;">// Theme Setup</span><br>
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">mytheme_setup</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">add_theme_support</span>( <span style="color: #ce9178;">'title-tag'</span> );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">add_theme_support</span>( <span style="color: #ce9178;">'post-thumbnails'</span> );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">add_theme_support</span>( <span style="color: #ce9178;">'custom-logo'</span> );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">register_nav_menus</span>([ <span style="color: #ce9178;">'primary'</span> => <span style="color: #ce9178;">'Primary Menu'</span> ]);<br>
        }<br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'after_setup_theme'</span>, <span style="color: #ce9178;">'mytheme_setup'</span> );<br><br>
        <span style="color: #6a9955;">// Enqueue Scripts & Styles (NEVER hardcode!)</span><br>
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">mytheme_scripts</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">wp_enqueue_style</span>( <span style="color: #ce9178;">'main-style'</span>, <span style="color: #dcdcaa;">get_stylesheet_uri</span>() );<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">wp_enqueue_script</span>( <span style="color: #ce9178;">'main-js'</span>, <span style="color: #dcdcaa;">get_template_directory_uri</span>() . <span style="color: #ce9178;">'/assets/js/main.js'</span>, [], <span style="color: #b5cea8;">false</span>, <span style="color: #b5cea8;">true</span> );<br>
        }<br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'wp_enqueue_scripts'</span>, <span style="color: #ce9178;">'mytheme_scripts'</span> );
    </div>
    <div class="warning-box">
        <strong>⚠️ NEVER hardcode CSS/JS in header.php!</strong> Always use <code>wp_enqueue_style()</code> and <code>wp_enqueue_script()</code>. This prevents conflicts and enables proper dependency management.
    </div>
</div>

<div class="content-section">
    <h3>👶 Child Themes — The Safe Way to Customize</h3>
    <div class="highlight-box">
        <strong>Why Child Themes?</strong>
        <ul>
            <li>Parent theme updates won't overwrite your changes</li>
            <li>Clean separation of customizations</li>
            <li>Easy to revert changes</li>
        </ul>
        <strong>Required files:</strong> <code>style.css</code> (with Template header) + <code>functions.php</code>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Theme Development</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: CUSTOM POST TYPES & TAXONOMIES</h2>

<div class="content-section">
    <h3>📦 Why Custom Post Types (CPTs)?</h3>
    <p>WordPress default content types (posts & pages) aren't enough for real projects. CPTs let you create <strong>any data structure</strong>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Custom Post Types Needed</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real Estate Site</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Properties, Agents, Testimonials</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Restaurant</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Menu Items, Locations, Reviews</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Portfolio</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Projects, Services, Team Members</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">E-Learning</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Courses, Lessons, Instructors</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>⚙️ Registering a Custom Post Type</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">dh_register_portfolio</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">register_post_type</span>( <span style="color: #ce9178;">'portfolio'</span>, [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'labels'</span> => [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'name'</span> => <span style="color: #ce9178;">'Portfolio'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'singular_name'</span> => <span style="color: #ce9178;">'Project'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;],<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'public'</span> => <span style="color: #b5cea8;">true</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'has_archive'</span> => <span style="color: #b5cea8;">true</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'supports'</span> => [<span style="color: #ce9178;">'title'</span>, <span style="color: #ce9178;">'editor'</span>, <span style="color: #ce9178;">'thumbnail'</span>, <span style="color: #ce9178;">'excerpt'</span>],<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'rewrite'</span> => [<span style="color: #ce9178;">'slug'</span> => <span style="color: #ce9178;">'projects'</span>],<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'menu_icon'</span> => <span style="color: #ce9178;">'dashicons-portfolio'</span>,<br>
        &nbsp;&nbsp;]);<br>
        }<br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'init'</span>, <span style="color: #ce9178;">'dh_register_portfolio'</span> );
    </div>
    <div class="highlight-box">
        <strong>Key Parameters:</strong>
        <ul>
            <li><code>public</code> — Makes CPT visible in admin and queryable on frontend</li>
            <li><code>has_archive</code> — Creates an archive listing page</li>
            <li><code>supports</code> — Controls which editor features appear (title, editor, thumbnail, etc.)</li>
            <li><code>rewrite</code> — Controls the URL slug structure</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>🏷️ Custom Taxonomies</h3>
    <p>Taxonomies organize CPTs just like categories/tags organize posts:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #dcdcaa;">register_taxonomy</span>( <span style="color: #ce9178;">'project_type'</span>, <span style="color: #ce9178;">'portfolio'</span>, [<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'labels'</span> => [<span style="color: #ce9178;">'name'</span> => <span style="color: #ce9178;">'Project Types'</span>],<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'hierarchical'</span> => <span style="color: #b5cea8;">true</span>, <span style="color: #6a9955;">// like categories</span><br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'rewrite'</span> => [<span style="color: #ce9178;">'slug'</span> => <span style="color: #ce9178;">'project-type'</span>],<br>
        ]);
    </div>
</div>

<div class="content-section">
    <h3>🔧 Advanced Custom Fields (ACF)</h3>
    <p>ACF is the <strong>#1 plugin</strong> for adding custom meta fields to CPTs without writing code for meta boxes:</p>
    <ul>
        <li><strong>Field Types:</strong> Text, Image, Gallery, Repeater, Flexible Content, Relationship</li>
        <li><strong>Usage:</strong> <code>get_field('field_name')</code> to retrieve, <code>the_field('field_name')</code> to display</li>
        <li><strong>Pro tip:</strong> Export ACF field groups as PHP for version control</li>
    </ul>
</div>

<div class="content-section">
    <h3>🔍 Querying Custom Post Types</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #569cd6;">$projects</span> = <span style="color: #c586c0;">new</span> <span style="color: #dcdcaa;">WP_Query</span>([ <br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'post_type'</span> => <span style="color: #ce9178;">'portfolio'</span>,<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'posts_per_page'</span> => <span style="color: #b5cea8;">12</span>,<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'orderby'</span> => <span style="color: #ce9178;">'date'</span>,<br>
        &nbsp;&nbsp;<span style="color: #ce9178;">'order'</span> => <span style="color: #ce9178;">'DESC'</span>,<br>
        ]);
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Custom Post Types & Taxonomies</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: WOOCOMMERCE DEVELOPMENT</h2>

<div class="content-section">
    <h3>🛒 WooCommerce Architecture</h3>
    <p>WooCommerce is the <strong>#1 e-commerce plugin</strong> powering 28% of all online stores. It extends WordPress with:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Component</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Post Type / Table</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>product</code> (CPT)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Orders</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>shop_order</code> (CPT in wp_posts)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Variations</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>product_variation</code> (child posts)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Coupons</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>shop_coupon</code> (CPT)</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🪝 Essential WooCommerce Hooks</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Hook</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Purpose</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_thankyou</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Fires after order placed (thank you page)</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_checkout_fields</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Modify checkout form fields</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_product_tabs</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add/remove product page tabs</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>woocommerce_product_add_to_cart_text</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Change Add to Cart button text</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🎨 Template Overrides</h3>
    <p>To customize WooCommerce templates <strong>safely</strong>:</p>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2;">
        Copy from: <strong style="color: #EF4444;">wp-content/plugins/woocommerce/templates/</strong><br>
        Paste to: <strong style="color: #10B981;">your-theme/woocommerce/</strong><br><br>
        Example:<br>
        <span style="color: #10B981;">your-theme/woocommerce/single-product.php</span><br>
        <span style="color: #10B981;">your-theme/woocommerce/cart/cart.php</span>
    </div>
    <div class="warning-box">
        <strong>⚠️ NEVER edit plugin files directly!</strong> Always use template overrides in your theme.
    </div>
</div>

<div class="content-section">
    <h3>💳 Payment Gateway Basics</h3>
    <p>Custom payment gateways extend <code>WC_Payment_Gateway</code>:</p>
    <ul>
        <li><strong>process_payment()</strong> — Handle the actual payment</li>
        <li><strong>init_form_fields()</strong> — Define settings fields</li>
        <li><strong>WC()->cart->get_total()</strong> — Get current cart total</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about WooCommerce Development</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;
const task6Content = `
<h2>📚 TASK 6: PLUGIN DEVELOPMENT</h2>

<div class="content-section">
    <h3>🔌 Plugin Architecture</h3>
    <p>Every WordPress plugin needs a <strong>plugin header comment</strong> in its main PHP file:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #569cd6;">&lt;?php</span><br>
        <span style="color: #6a9955;">/**</span><br>
        <span style="color: #6a9955;"> * Plugin Name: DH Custom Features</span><br>
        <span style="color: #6a9955;"> * Description: Custom functionality for Digital Heroes</span><br>
        <span style="color: #6a9955;"> * Version: 1.0.0</span><br>
        <span style="color: #6a9955;"> * Author: Digital Heroes</span><br>
        <span style="color: #6a9955;"> */</span>
    </div>
</div>

<div class="content-section">
    <h3>🪝 Actions vs Filters</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Actions</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Filters</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Execute code at specific points<br>
                • Don't return values<br>
                • <code>add_action()</code> / <code>do_action()</code><br>
                • Example: <code>wp_head</code>, <code>init</code>, <code>save_post</code>
            </td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                • Modify data and return it<br>
                • MUST return a value<br>
                • <code>add_filter()</code> / <code>apply_filters()</code><br>
                • Example: <code>the_content</code>, <code>the_title</code>
            </td>
        </tr>
    </table>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Action example - run code when post is saved</span><br>
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'save_post'</span>, <span style="color: #ce9178;">'my_save_function'</span>, <span style="color: #b5cea8;">10</span>, <span style="color: #b5cea8;">2</span> );<br><br>
        <span style="color: #6a9955;">// Filter example - modify content before display</span><br>
        <span style="color: #dcdcaa;">add_filter</span>( <span style="color: #ce9178;">'the_content'</span>, <span style="color: #ce9178;">'my_content_filter'</span> );<br>
        <span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">my_content_filter</span>( <span style="color: #569cd6;">$content</span> ) {<br>
        &nbsp;&nbsp;<span style="color: #c586c0;">return</span> <span style="color: #569cd6;">$content</span> . <span style="color: #ce9178;">'&lt;p&gt;Extra content&lt;/p&gt;'</span>;<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>⚙️ Activation & Deactivation Hooks</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Runs once when plugin is activated</span><br>
        <span style="color: #dcdcaa;">register_activation_hook</span>( <span style="color: #569cd6;">__FILE__</span>, <span style="color: #ce9178;">'dh_plugin_activate'</span> );<br><br>
        <span style="color: #6a9955;">// Cleanup on uninstall (not deactivation!)</span><br>
        <span style="color: #dcdcaa;">register_uninstall_hook</span>( <span style="color: #569cd6;">__FILE__</span>, <span style="color: #ce9178;">'dh_plugin_uninstall'</span> );
    </div>
    <div class="highlight-box">
        <strong>Key Functions:</strong>
        <ul>
            <li><code>add_menu_page()</code> — Add item to wp-admin sidebar</li>
            <li><code>add_shortcode()</code> — Register a shortcode like [my_shortcode]</li>
            <li><code>dbDelta()</code> — Create/modify custom database tables safely</li>
            <li><code>__() / _e()</code> — Make text translatable (i18n)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📊 Priority Parameter</h3>
    <p>The third parameter in <code>add_action()</code> controls execution order:</p>
    <ul>
        <li><strong>Lower number = runs earlier</strong> (default is 10)</li>
        <li>Priority 1 runs before priority 10, which runs before priority 99</li>
        <li>Use this to ensure your code runs at the right time relative to other hooks</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Plugin Development</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: SECURITY & HARDENING</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #F87171; margin-top: 0;">🔒 Security is NON-NEGOTIABLE</h3>
    <p>A hacked client website = <strong>destroyed trust, lost revenue, legal liability</strong>. At Digital Heroes, security failures are career-ending. Master these concepts.</p>
</div>

<div class="content-section">
    <h3>🛡️ Input Sanitization vs Output Escaping</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sanitize INPUT</strong> (going into DB)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Escape OUTPUT</strong> (displayed to user)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                <code>sanitize_text_field()</code><br>
                <code>sanitize_email()</code><br>
                <code>absint()</code><br>
                <code>wp_kses()</code> — Allow specific HTML tags
            </td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">
                <code>esc_html()</code> — Safe HTML display<br>
                <code>esc_attr()</code> — Safe for attributes<br>
                <code>esc_url()</code> — Safe URLs<br>
                <code>esc_js()</code> — Safe for inline JS
            </td>
        </tr>
    </table>
    <div class="warning-box">
        <strong>⚠️ Golden Rule:</strong> Sanitize early, escape late. NEVER trust user input. ALWAYS escape output.
    </div>
</div>

<div class="content-section">
    <h3>🔐 Nonces (CSRF Protection)</h3>
    <p>Nonces verify that a request came from your site, not an attacker:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Create nonce in form</span><br>
        <span style="color: #dcdcaa;">wp_nonce_field</span>( <span style="color: #ce9178;">'my_action'</span>, <span style="color: #ce9178;">'my_nonce'</span> );<br><br>
        <span style="color: #6a9955;">// Verify nonce on submission</span><br>
        <span style="color: #c586c0;">if</span> ( ! <span style="color: #dcdcaa;">wp_verify_nonce</span>( <span style="color: #569cd6;">$_POST</span>[<span style="color: #ce9178;">'my_nonce'</span>], <span style="color: #ce9178;">'my_action'</span> ) ) {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">die</span>( <span style="color: #ce9178;">'Security check failed'</span> );<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>💉 SQL Injection Prevention</h3>
    <p><strong>ALWAYS</strong> use <code>$wpdb->prepare()</code> for database queries:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #EF4444;">// ❌ NEVER DO THIS</span><br>
        <span style="color: #569cd6;">$wpdb</span>-><span style="color: #dcdcaa;">query</span>( <span style="color: #ce9178;">"SELECT * FROM users WHERE id = </span><span style="color: #569cd6;">$_GET</span>[<span style="color: #ce9178;">'id'</span>]<span style="color: #ce9178;">"</span> );<br><br>
        <span style="color: #10B981;">// ✅ ALWAYS DO THIS</span><br>
        <span style="color: #569cd6;">$wpdb</span>-><span style="color: #dcdcaa;">prepare</span>( <span style="color: #ce9178;">"SELECT * FROM users WHERE id = %d"</span>, <span style="color: #569cd6;">$id</span> );
    </div>
</div>

<div class="content-section">
    <h3>🔑 Capability Checks</h3>
    <p>Always verify users have permission before executing sensitive actions:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #c586c0;">if</span> ( ! <span style="color: #dcdcaa;">current_user_can</span>( <span style="color: #ce9178;">'manage_options'</span> ) ) {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">wp_die</span>( <span style="color: #ce9178;">'Unauthorized access'</span> );<br>
        }
    </div>
</div>

<div class="content-section">
    <h3>📋 Hardening Checklist</h3>
    <ul>
        <li>✅ Set <code>wp-config.php</code> permissions to <strong>440 or 400</strong></li>
        <li>✅ Hide WordPress version (remove <code>wp_generator</code>, delete <code>readme.html</code>)</li>
        <li>✅ Add <code>X-Frame-Options</code> header to prevent clickjacking</li>
        <li>✅ Enable two-factor authentication for all admin users</li>
        <li>✅ Use strong, unique usernames (never "admin")</li>
        <li>✅ Disable file editing in wp-admin: <code>define('DISALLOW_FILE_EDIT', true);</code></li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Security & Hardening</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;
const task8Content = `
<h2>📚 TASK 8: PERFORMANCE OPTIMIZATION</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(245, 158, 11, 0.15)); border: 2px solid rgba(245, 158, 11, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #FBBF24; margin-top: 0;">⚡ Speed = Revenue</h3>
    <p>A 1-second delay in page load = <strong>7% loss in conversions</strong>. Google uses Core Web Vitals as a ranking factor. Fast sites win.</p>
</div>

<div class="content-section">
    <h3>📊 Core Web Vitals</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Measures</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Target</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>LCP</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Largest Contentful Paint</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 2.5s</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>INP</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interaction to Next Paint</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 200ms</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CLS</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cumulative Layout Shift</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">< 0.1</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🗄️ Caching Layers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>What It Does</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Page Cache</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Stores full HTML pages — skips PHP execution</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Object Cache</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Redis/Memcached — caches repeated DB queries</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Browser Cache</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client stores static assets locally</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CDN</strong></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content Delivery Network — serves from nearest edge</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🖼️ Image Optimization</h3>
    <ul>
        <li><strong>WebP format</strong> — 25-35% smaller than JPEG with same quality</li>
        <li><strong>Lazy loading</strong> — Built into WordPress since 5.5: <code>loading="lazy"</code></li>
        <li><strong>Responsive images</strong> — Use <code>srcset</code> for different screen sizes</li>
        <li><strong>Compress before upload</strong> AND use server-side optimization plugins</li>
    </ul>
</div>

<div class="content-section">
    <h3>⚙️ Transients API</h3>
    <p>Cache expensive operations with built-in WordPress transients:</p>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #6a9955;">// Store data for 12 hours</span><br>
        <span style="color: #dcdcaa;">set_transient</span>( <span style="color: #ce9178;">'api_data'</span>, <span style="color: #569cd6;">$data</span>, <span style="color: #b5cea8;">12</span> * <span style="color: #b5cea8;">HOUR_IN_SECONDS</span> );<br><br>
        <span style="color: #6a9955;">// Retrieve cached data</span><br>
        <span style="color: #569cd6;">$cached</span> = <span style="color: #dcdcaa;">get_transient</span>( <span style="color: #ce9178;">'api_data'</span> );
    </div>
    <div class="highlight-box">
        <strong>wp_options autoload tip:</strong> Set autoload to <code>'no'</code> for data not needed on every page load. Too many autoloaded options = slow TTFB.
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Performance Optimization</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: REST API & HEADLESS WORDPRESS</h2>

<div class="content-section">
    <h3>🌐 The WordPress REST API</h3>
    <p>WordPress exposes all data via RESTful endpoints at <code>/wp-json/wp/v2/</code>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Endpoint</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Returns</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/posts</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All posts</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/pages</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All pages</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/media</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Media library items</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><code>/wp-json/wp/v2/users</code></td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">User profiles</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔌 Custom REST Routes</h3>
    <div style="background: #1e1e1e; padding: 20px; border-radius: 10px; font-family: monospace; color: #d4d4d4; margin: 15px 0; font-size: 0.9em;">
        <span style="color: #dcdcaa;">add_action</span>( <span style="color: #ce9178;">'rest_api_init'</span>, <span style="color: #c586c0;">function</span>() {<br>
        &nbsp;&nbsp;<span style="color: #dcdcaa;">register_rest_route</span>( <span style="color: #ce9178;">'dh/v1'</span>, <span style="color: #ce9178;">'/projects'</span>, [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'methods'</span> => <span style="color: #ce9178;">'GET'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'callback'</span> => <span style="color: #ce9178;">'get_projects'</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ce9178;">'permission_callback'</span> => <span style="color: #ce9178;">'__return_true'</span>,<br>
        &nbsp;&nbsp;]);<br>
        });
    </div>
    <div class="highlight-box">
        <strong>Key Concepts:</strong>
        <ul>
            <li><code>rest_api_init</code> — Hook that fires when REST API initializes</li>
            <li><code>permission_callback</code> — Controls who can access the endpoint</li>
            <li><code>WP_REST_Response</code> — Format responses with proper status codes</li>
            <li><code>register_rest_field()</code> — Add custom data to existing endpoints</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>⚛️ Headless WordPress</h3>
    <p>In headless mode, WordPress serves as a <strong>backend API only</strong>. The frontend is a separate app:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Traditional WP</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Headless WP</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP handles both backend + frontend<br>PHP templates render pages<br>Tightly coupled</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">WP = API backend only<br>React/Next.js/Vue = frontend<br>Better performance & flexibility</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🔒 API Security</h3>
    <ul>
        <li><strong>Application Passwords</strong> or <strong>OAuth</strong> for write operations</li>
        <li>Use <code>rest_authentication_errors</code> filter to restrict access</li>
        <li>Never expose sensitive data on public endpoints</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about REST API & Headless WordPress</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: DEPLOYMENT & FINAL EXAM</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(14, 165, 233, 0.15)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🚀 Launch Day — Where It All Comes Together</h3>
    <p>A smooth deployment is the <strong>culmination of everything you've learned</strong>. One mistake here and clients lose money. Follow the process.</p>
</div>

<div class="content-section">
    <h3>📋 Pre-Launch Checklist</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(14, 165, 233, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Category</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Checks</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Content</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All pages complete, no lorem ipsum, images optimized</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Forms</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">All forms tested, email notifications working</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SEO</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Meta titles, descriptions, sitemap submitted</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SSL active, file permissions, login hardened</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PageSpeed 90+, caching enabled, CDN active</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Mobile</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Tested on iOS + Android, responsive layout verified</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>🔄 Staging → Production Workflow</h3>
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; font-family: monospace; line-height: 2.2;">
        <span style="color: #F59E0B;">1.</span> Develop on <strong style="color: #60A5FA;">LOCAL</strong> environment<br>
        <span style="color: #F59E0B;">2.</span> Push code to <strong style="color: #A78BFA;">GIT</strong> repository<br>
        <span style="color: #F59E0B;">3.</span> Deploy to <strong style="color: #FBBF24;">STAGING</strong> for client review<br>
        <span style="color: #F59E0B;">4.</span> Client approves → <strong style="color: #10B981;">PRODUCTION</strong> deploy<br>
        <span style="color: #F59E0B;">5.</span> Post-launch: monitor uptime, errors, performance
    </div>
</div>

<div class="content-section">
    <h3>🗄️ Database Migration</h3>
    <ul>
        <li><strong>WP Migrate DB</strong> or <strong>search-replace-db</strong> for URL replacements</li>
        <li>Always use <strong>serialization-safe</strong> find/replace (not raw SQL!)</li>
        <li>Enable debug mode: <code>define('WP_DEBUG', true)</code> in wp-config.php</li>
        <li>Production: Log errors to file, <strong>NEVER display to users</strong></li>
    </ul>
</div>

<div class="content-section">
    <h3>🔧 Essential Production Settings</h3>
    <ul>
        <li>✅ <strong>SSL/HTTPS</strong> — Required by Google for rankings</li>
        <li>✅ <strong>.htaccess</strong> — URL rewrites, redirects, security headers</li>
        <li>✅ <strong>robots.txt</strong> — Allow search engines, block sensitive dirs</li>
        <li>✅ <strong>WP Cron</strong> — Pseudo-cron triggered by visits (use real cron for reliability)</li>
        <li>✅ <strong>Backups</strong> — Daily automated backups stored offsite</li>
        <li>✅ <strong>Monitoring</strong> — Uptime, performance, security scans, error logs</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎓 Final Certification Exam</h3>
    <ul>
        <li>📝 <strong>20 questions</strong> covering ALL 10 tasks</li>
        <li>🎯 Score <strong>20/20</strong> to earn your WordPress Developer Certificate</li>
        <li>🏆 Proves you're a Digital Heroes certified WordPress developer</li>
    </ul>
</div>
`;

// =============================================================================
// QUIZ QUESTIONS — ALL 10 TASKS
// =============================================================================

const allQuizzes = [
    // TASK 1: WordPress Developer Mindset (10 questions)
    [
        { q: "What percentage of the internet does WordPress power?", o: ["25%", "43%", "60%", "15%"], c: 1 },
        { q: "At Digital Heroes, what is the developer's role in the Interconnected Chain?", o: ["The Fuel System", "The Guardian", "The Builder", "The Voice"], c: 2 },
        { q: "Why should you NEVER edit core WordPress files?", o: ["They're read-only", "Updates will overwrite your changes", "It's too complex", "PHP doesn't allow it"], c: 1 },
        { q: "What is the Digital Heroes revenue goal by 2027?", o: ["₹25 Crores", "₹50 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
        { q: "When should WordPress be preferred over Shopify?", o: ["For simple stores", "For content-heavy sites and custom applications", "Always", "For dropshipping"], c: 1 },
        { q: "What type of developer will be replaced by AI?", o: ["The Revenue Developer", "The Plugin Installer who can't code", "All developers", "None"], c: 1 },
        { q: "What should you ALWAYS do before updating WordPress?", o: ["Clear cache", "Backup database and files", "Notify the client", "Update PHP first"], c: 1 },
        { q: "Using nulled/pirated themes at Digital Heroes results in?", o: ["A warning", "Extra work", "Instant termination", "Nothing"], c: 2 },
        { q: "What is the minimum testing standard before deploying?", o: ["Just desktop Chrome", "Desktop + one mobile device", "Test on staging environment first", "No testing needed for small changes"], c: 2 },
        { q: "The 'admin' username should be avoided because:", o: ["It's too short", "It's a security vulnerability — brute force target", "WordPress doesn't allow it", "It conflicts with plugins"], c: 1 }
    ],
    // TASK 2: WordPress Core Architecture (10 questions)
    [
        { q: "What is The Loop in WordPress?", o: ["A CSS animation", "The mechanism that processes and displays posts", "A plugin", "A JavaScript framework"], c: 1 },
        { q: "Which two files are the MINIMUM required for a WordPress theme?", o: ["header.php and footer.php", "functions.php and style.css", "index.php and style.css", "page.php and single.php"], c: 2 },
        { q: "Which WordPress database table stores ALL content types?", o: ["wp_content", "wp_posts", "wp_data", "wp_pages"], c: 1 },
        { q: "What does wp_options store?", o: ["User passwords", "Post content", "Site settings and configuration", "Plugin files"], c: 2 },
        { q: "In the template hierarchy, what is the ultimate fallback?", o: ["page.php", "single.php", "home.php", "index.php"], c: 3 },
        { q: "Which function starts The Loop?", o: ["start_loop()", "the_loop()", "have_posts()", "get_posts()"], c: 2 },
        { q: "Where should you NEVER make direct edits?", o: ["wp-content/themes/", "wp-content/plugins/", "wp-admin/ and wp-includes/", "wp-content/uploads/"], c: 2 },
        { q: "What PHP version is recommended for WordPress?", o: ["5.6+", "7.0+", "8.0+", "Any version"], c: 2 },
        { q: "wp_postmeta is used for:", o: ["Storing user sessions", "Custom fields attached to posts", "Database backups", "SEO settings"], c: 1 },
        { q: "Which file contains critical database credentials?", o: ["functions.php", ".htaccess", "wp-config.php", "wp-settings.php"], c: 2 }
    ],
    // TASK 3: Theme Development (10 questions)
    [
        { q: "What is the correct way to add CSS to a WordPress theme?", o: ["<link> tag in header.php", "wp_enqueue_style() in functions.php", "Inline styles", "@import in style.css"], c: 1 },
        { q: "Why use a child theme instead of editing the parent?", o: ["It's faster", "Parent updates won't overwrite your changes", "WordPress requires it", "For SEO"], c: 1 },
        { q: "What does add_theme_support('post-thumbnails') do?", o: ["Adds a thumbnail plugin", "Enables featured image support", "Creates image galleries", "Resizes all images"], c: 1 },
        { q: "Which function registers navigation menus?", o: ["add_menu()", "wp_nav_menu()", "register_nav_menus()", "create_menu()"], c: 2 },
        { q: "The last parameter 'true' in wp_enqueue_script() means:", o: ["Enable caching", "Load in footer", "Minify the file", "Enable debugging"], c: 1 },
        { q: "template-parts/ directory is used for:", o: ["Plugin files", "Reusable template components", "Admin templates", "Email templates"], c: 1 },
        { q: "get_template_directory_uri() returns:", o: ["The server path", "The URL to the theme directory", "The WordPress root URL", "The uploads URL"], c: 1 },
        { q: "Which file is loaded for single blog posts?", o: ["page.php", "post.php", "single.php", "blog.php"], c: 2 },
        { q: "A child theme's style.css must include which header?", o: ["Version", "Template (parent theme name)", "Author", "License"], c: 1 },
        { q: "What hook is used for theme setup functions?", o: ["init", "wp_loaded", "after_setup_theme", "plugins_loaded"], c: 2 }
    ],
    // TASK 4: Custom Post Types & Taxonomies (10 questions)
    [
        { q: "Which function creates a custom post type?", o: ["add_post_type()", "create_post_type()", "register_post_type()", "new_post_type()"], c: 2 },
        { q: "What hook should register_post_type() be called on?", o: ["after_setup_theme", "init", "wp_loaded", "admin_init"], c: 1 },
        { q: "ACF stands for:", o: ["Advanced Code Framework", "Advanced Custom Fields", "Auto Content Filter", "Admin Control Functions"], c: 1 },
        { q: "'public' => true in register_post_type means:", o: ["Anyone can edit", "The CPT appears in admin UI and is queryable", "No login required", "It's cached publicly"], c: 1 },
        { q: "Custom taxonomies are similar to:", o: ["Pages", "Categories and tags", "Menus", "Widgets"], c: 1 },
        { q: "Which function registers a custom taxonomy?", o: ["add_taxonomy()", "register_taxonomy()", "create_taxonomy()", "new_taxonomy()"], c: 1 },
        { q: "The 'supports' parameter in register_post_type defines:", o: ["Browser support", "Which editor features are available", "Plugin compatibility", "PHP version support"], c: 1 },
        { q: "To query custom post types, use:", o: ["get_posts() or WP_Query with post_type parameter", "custom_query()", "fetch_cpt()", "find_posts()"], c: 0 },
        { q: "The 'rewrite' parameter controls:", o: ["Database queries", "URL slug structure", "File permissions", "Cache rules"], c: 1 },
        { q: "What is the 'has_archive' parameter for?", o: ["Enables post revisions", "Creates an archive page listing all CPT entries", "Enables trash", "Creates backup files"], c: 1 }
    ],
    // TASK 5: WooCommerce Development (10 questions)
    [
        { q: "WooCommerce uses which custom post type for products?", o: ["wc_product", "product", "shop_product", "woo_product"], c: 1 },
        { q: "Which hook fires after an order is placed?", o: ["woocommerce_checkout_complete", "woocommerce_thankyou", "order_placed", "checkout_done"], c: 1 },
        { q: "To modify the Add to Cart button text, use:", o: ["CSS display:none", "woocommerce_product_add_to_cart_text filter", "Edit template directly", "JavaScript override"], c: 1 },
        { q: "WooCommerce template overrides go in:", o: ["wp-content/plugins/woocommerce/templates/", "theme/woocommerce/", "wp-content/woo-templates/", "theme/templates/woo/"], c: 1 },
        { q: "Product variations are stored as:", o: ["Custom taxonomies", "Post meta", "Child posts of type product_variation", "Separate database table"], c: 2 },
        { q: "Which WooCommerce hook modifies the checkout fields?", o: ["woocommerce_edit_checkout", "woocommerce_checkout_fields", "wc_modify_fields", "checkout_form_fields"], c: 1 },
        { q: "To add a custom tab on the product page, use:", o: ["woocommerce_product_tabs filter", "add_product_tab()", "wc_add_tab()", "register_product_tab()"], c: 0 },
        { q: "WooCommerce stores order data in:", o: ["wp_orders table", "wp_posts with post_type 'shop_order'", "wp_wc_orders", "External database"], c: 1 },
        { q: "The correct way to get the cart total is:", o: ["$_SESSION['cart_total']", "WC()->cart->get_total()", "get_cart_total()", "wc_get_total()"], c: 1 },
        { q: "For payment gateway integration, extend:", o: ["WC_Gateway", "WC_Payment_Gateway", "WC_Payment", "WooCommerce_Gateway"], c: 1 }
    ],
    // TASK 6: Plugin Development (10 questions)
    [
        { q: "Every WordPress plugin must have:", o: ["A readme.txt", "A plugin header comment in main file", "An activation hook", "A settings page"], c: 1 },
        { q: "add_action() is used to:", o: ["Create a new action", "Hook a function to a WordPress action", "Remove an action", "List all actions"], c: 1 },
        { q: "The difference between actions and filters is:", o: ["Actions return values, filters don't", "Filters modify and return data, actions execute code", "They're the same thing", "Actions are for admin, filters for frontend"], c: 1 },
        { q: "register_activation_hook() runs when:", o: ["WordPress loads", "The plugin is first activated", "On every page load", "On deactivation"], c: 1 },
        { q: "To add a menu item in wp-admin, use:", o: ["add_menu_page()", "create_admin_menu()", "register_menu()", "wp_add_menu()"], c: 0 },
        { q: "Which function creates a custom database table?", o: ["create_table()", "dbDelta() with SQL", "wp_create_table()", "new_table()"], c: 1 },
        { q: "Plugin data should be cleaned up using:", o: ["register_deactivation_hook()", "register_uninstall_hook() or uninstall.php", "delete_plugin_data()", "wp_cleanup()"], c: 1 },
        { q: "To make plugin text translatable, use:", o: ["echo 'text'", "__() or _e() functions", "translate()", "wp_translate()"], c: 1 },
        { q: "The priority parameter in add_action controls:", o: ["Permission level", "Execution order (lower = earlier)", "Memory allocation", "Cache priority"], c: 1 },
        { q: "Shortcodes are registered with:", o: ["register_shortcode()", "add_shortcode()", "create_shortcode()", "wp_shortcode()"], c: 1 }
    ],
    // TASK 7: Security & Hardening (10 questions)
    [
        { q: "Which function sanitizes text input?", o: ["clean_text()", "sanitize_text_field()", "strip_tags()", "filter_input()"], c: 1 },
        { q: "WordPress nonces are used to prevent:", o: ["SQL injection", "XSS attacks", "CSRF attacks", "Brute force"], c: 2 },
        { q: "To prevent SQL injection, always use:", o: ["mysql_real_escape_string()", "$wpdb->prepare()", "htmlspecialchars()", "addslashes()"], c: 1 },
        { q: "wp_kses() is used for:", o: ["Encoding URLs", "Sanitizing HTML by allowing only specific tags", "Creating nonces", "Hashing passwords"], c: 1 },
        { q: "The wp-config.php file should have permissions set to:", o: ["777", "644", "440 or 400", "755"], c: 2 },
        { q: "Which security header prevents clickjacking?", o: ["Content-Security-Policy", "X-Frame-Options", "X-XSS-Protection", "Strict-Transport-Security"], c: 1 },
        { q: "esc_html() is used to:", o: ["Sanitize input", "Escape output for safe HTML display", "Encode URLs", "Hash data"], c: 1 },
        { q: "current_user_can() checks:", o: ["If user is logged in", "If user has a specific capability/permission", "If user exists", "If user is admin"], c: 1 },
        { q: "To hide the WordPress version number:", o: ["Delete readme.html and remove wp_generator", "Change wp-config.php", "Use .htaccess", "It can't be hidden"], c: 0 },
        { q: "Two-factor authentication should be enabled for:", o: ["All users", "Only admins", "Only editors", "It's not needed for WordPress"], c: 0 }
    ],
    // TASK 8: Performance Optimization (10 questions)
    [
        { q: "Which caching type stores full HTML pages?", o: ["Object caching", "Page caching", "Browser caching", "Query caching"], c: 1 },
        { q: "Transients API is used for:", o: ["Storing permanent data", "Temporary cached data with expiration", "User sessions", "File uploads"], c: 1 },
        { q: "To lazy load images in WordPress, use:", o: ["loading='lazy' attribute (built-in since WP 5.5)", "A plugin only", "JavaScript only", "CSS only"], c: 0 },
        { q: "What causes high TTFB in WordPress?", o: ["Large images", "Too many database queries and slow server", "CSS files", "JavaScript"], c: 1 },
        { q: "Object caching (Redis/Memcached) speeds up:", o: ["Image loading", "Repeated database queries", "CSS rendering", "JavaScript execution"], c: 1 },
        { q: "Which image format provides best compression for photos?", o: ["PNG", "GIF", "WebP", "BMP"], c: 2 },
        { q: "The 'autoload' column in wp_options should be:", o: ["Always 'yes'", "'no' for data not needed on every page load", "Removed entirely", "Set to 'maybe'"], c: 1 },
        { q: "CDN stands for:", o: ["Content Data Network", "Content Delivery Network", "Cached Data Node", "Core Distribution Network"], c: 1 },
        { q: "To reduce database queries, use:", o: ["More plugins", "Transients and object caching", "Bigger server", "More RAM"], c: 1 },
        { q: "Core Web Vitals include LCP, FID/INP, and:", o: ["TTFB", "CLS (Cumulative Layout Shift)", "FCP", "SI"], c: 1 }
    ],
    // TASK 9: REST API & Headless WordPress (10 questions)
    [
        { q: "The WordPress REST API base URL is:", o: ["/api/v1/", "/wp-json/wp/v2/", "/rest/api/", "/wordpress/api/"], c: 1 },
        { q: "To register a custom REST route, use:", o: ["add_rest_route()", "register_rest_route()", "create_api_endpoint()", "wp_add_route()"], c: 1 },
        { q: "REST API authentication for write operations uses:", o: ["API keys only", "Application passwords or OAuth", "No auth needed", "Cookie only"], c: 1 },
        { q: "In headless WordPress, the frontend is:", o: ["WordPress themes", "A separate application (React, Next.js, etc.)", "PHP templates", "WordPress admin"], c: 1 },
        { q: "Which hook fires when REST API initializes?", o: ["rest_api_init", "wp_rest_init", "api_loaded", "rest_loaded"], c: 0 },
        { q: "To modify REST API response data, use:", o: ["register_rest_field()", "add_rest_data()", "modify_api_response()", "wp_rest_modify()"], c: 0 },
        { q: "WP_REST_Response is used to:", o: ["Make requests", "Format API responses with status codes", "Authenticate users", "Cache responses"], c: 1 },
        { q: "The 'permission_callback' in register_rest_route:", o: ["Is optional", "Controls who can access the endpoint", "Sets response format", "Enables caching"], c: 1 },
        { q: "Headless WordPress advantage:", o: ["Easier to build", "Better performance and flexibility on the frontend", "No coding needed", "Free hosting"], c: 1 },
        { q: "To disable the REST API for unauthenticated users:", o: ["Delete wp-json folder", "Use rest_authentication_errors filter", "Edit .htaccess", "Uninstall WordPress"], c: 1 }
    ],
    // TASK 10: Deployment & Final Exam (20 questions)
    [
        { q: "Before deploying to production, you MUST:", o: ["Just push the code", "Test thoroughly on staging", "Tell the client", "Update WordPress"], c: 1 },
        { q: "Which tool is used for WordPress database migration?", o: ["phpMyAdmin only", "WP Migrate DB or search-replace-db", "FTP", "cPanel"], c: 1 },
        { q: "After migration, URLs must be updated using:", o: ["Find and replace in database (serialization-safe)", "Manual editing", "DNS changes", "WordPress settings only"], c: 0 },
        { q: "WordPress debug mode is enabled by:", o: ["Installing a plugin", "Setting WP_DEBUG to true in wp-config.php", "Editing .htaccess", "PHP settings"], c: 1 },
        { q: "SSL certificate is important because:", o: ["It makes the site faster", "It encrypts data and is required by Google for ranking", "It's free", "WordPress requires it"], c: 1 },
        { q: "The .htaccess file controls:", o: ["Database connections", "URL rewrites, redirects, and server config", "Plugin settings", "Theme options"], c: 1 },
        { q: "Staging environments should:", o: ["Be public", "Mirror production exactly", "Use different WordPress version", "Skip security"], c: 1 },
        { q: "Git should be used for:", o: ["Database backups", "Version control of theme and plugin code", "Image storage", "User management"], c: 1 },
        { q: "Before going live, check:", o: ["Only homepage", "All pages, forms, checkout, mobile, speed, SEO, security", "Just desktop view", "Only the blog"], c: 1 },
        { q: "wp-config.php should NEVER contain:", o: ["Database credentials", "Debug settings", "Hardcoded passwords in plain text committed to Git", "Salt keys"], c: 2 },
        { q: "The recommended backup strategy is:", o: ["Monthly manual backup", "Daily automated backups stored offsite", "Only before updates", "No backups needed"], c: 1 },
        { q: "After deployment, monitoring should include:", o: ["Nothing", "Uptime, performance, security scans, and error logs", "Only traffic", "Just sales"], c: 1 },
        { q: "WordPress cron is:", o: ["A real system cron", "A pseudo-cron triggered by site visits", "A plugin", "A database table"], c: 1 },
        { q: "For multisite WordPress, the function to enable is:", o: ["enable_multisite()", "WP_ALLOW_MULTISITE constant in wp-config.php", "multisite_on()", "Network settings"], c: 1 },
        { q: "robots.txt should:", o: ["Block all bots", "Allow search engines while blocking sensitive directories", "Be deleted", "Redirect to sitemap"], c: 1 },
        { q: "Image optimization should be done:", o: ["After upload only", "Before upload AND via server-side optimization", "Never", "Only for homepage images"], c: 1 },
        { q: "The WordPress Coding Standards recommend:", o: ["Tabs for indentation", "Spaces for indentation", "Either is fine", "No indentation"], c: 0 },
        { q: "PHP error logging in production should:", o: ["Display errors to users", "Log to file, never display to users", "Be disabled completely", "Email every error"], c: 1 },
        { q: "The Digital Heroes post-launch checklist includes:", o: ["Submit sitemap, test speed, verify analytics, check forms", "Just tell the client", "Only check homepage", "Nothing after launch"], c: 0 },
        { q: "A WordPress developer's most important trait is:", o: ["Speed of coding", "Systematic approach: plan, code, test, deploy", "Knowing many plugins", "Working long hours"], c: 1 }
    ]
];

console.log("WordPress Developer Training Data Loaded!");
