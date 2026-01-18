/**
 * SOP Features Loader
 * Single entry point that loads all enhancement modules
 * Version: 1.0.0
 */

(function () {
    'use strict';

    // Feature flags - set to false to disable specific features
    const FEATURES = {
        search: true,
        toc: true,
        bookmarks: true,
        mobile: true,
        theme: true,
        progress: true,
        gamification: true,
        globalSearch: true,
        shortcuts: true,
        faq: true
    };

    // Module paths (relative to this file's location in assets/js/)
    const MODULES = {
        search: 'sop-search.js',
        toc: 'sop-toc.js',
        bookmarks: 'sop-bookmarks.js',
        mobile: 'sop-mobile.js',
        theme: 'sop-theme.js',
        progress: 'sop-progress.js',
        gamification: 'sop-gamification.js',
        globalSearch: 'sop-global-search.js',
        shortcuts: 'sop-shortcuts.js',
        faq: 'sop-faq.js'
    };

    // CSS paths (relative to this file's location in assets/js/)
    const STYLES = {
        search: '../css/sop-search.css',
        toc: '../css/sop-toc.css'
    };

    // Get base path from current script
    function getBasePath() {
        // Try document.currentScript first (most reliable)
        let scriptSrc = '';
        if (document.currentScript && document.currentScript.src) {
            scriptSrc = document.currentScript.src;
        } else {
            // Fallback: search for the script tag
            const scripts = document.getElementsByTagName('script');
            for (let i = scripts.length - 1; i >= 0; i--) {
                if (scripts[i].src && scripts[i].src.includes('sop-features.js')) {
                    scriptSrc = scripts[i].src;
                    break;
                }
            }
        }

        if (scriptSrc) {
            return scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);
        }

        // Final fallback: use relative path from document root
        return 'assets/js/';
    }

    // Load a script dynamically
    function loadScript(path) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = path;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Load a stylesheet dynamically
    function loadStyle(path) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        document.head.appendChild(link);
    }

    // Initialize all features
    async function init() {
        const basePath = getBasePath();

        // Load styles first
        Object.entries(STYLES).forEach(([feature, path]) => {
            if (FEATURES[feature]) {
                loadStyle(basePath + path);
            }
        });

        // Load scripts
        const loadPromises = [];
        Object.entries(MODULES).forEach(([feature, path]) => {
            if (FEATURES[feature]) {
                loadPromises.push(loadScript(basePath + path).catch(err => {
                    console.warn(`Failed to load ${feature} module:`, err);
                }));
            }
        });

        await Promise.all(loadPromises);

        console.log('✅ SOP Features loaded successfully');
    }

    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose configuration
    window.SOPFeatures = {
        version: '1.0.0',
        features: FEATURES,
        toggle: (feature, enabled) => {
            FEATURES[feature] = enabled;
            console.log(`Feature "${feature}" ${enabled ? 'enabled' : 'disabled'}`);
        }
    };
})();
