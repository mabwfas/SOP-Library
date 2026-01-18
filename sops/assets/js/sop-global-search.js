/**
 * Global Search System
 * Search across all SOPs from the index page
 */

(function () {
    'use strict';

    const SOP_INDEX = [
        { title: 'Sales Executive SOP', url: 'sales-sop.html', icon: '💰', keywords: ['sales', 'leads', 'closing', 'clients', 'pipeline', 'deals'] },
        { title: 'Project Manager SOP', url: 'pm-sop.html', icon: '📋', keywords: ['project', 'timeline', 'coordination', 'delivery', 'milestones'] },
        { title: 'Shopify Developer SOP', url: 'developer-sop.html', icon: '💻', keywords: ['shopify', 'developer', 'liquid', 'theme', 'coding', 'apps'] },
        { title: 'Full Stack Developer SOP', url: 'fullstack-sop.html', icon: '🖥️', keywords: ['fullstack', 'backend', 'frontend', 'api', 'database'] },
        { title: 'UI/UX Designer SOP', url: 'designer-sop.html', icon: '🎨', keywords: ['design', 'figma', 'wireframe', 'prototype', 'ux', 'ui'] },
        { title: 'Client Success SOP', url: 'cs-sop.html', icon: '🌟', keywords: ['client', 'success', 'onboarding', 'retention', 'support'] },
        { title: 'HR & People SOP', url: 'hr-sop.html', icon: '👥', keywords: ['hr', 'hiring', 'recruitment', 'payroll', 'policies'] },
        { title: 'Content Writer SOP', url: 'content-sop.html', icon: '✍️', keywords: ['content', 'writing', 'blog', 'copy', 'seo'] },
        { title: 'Social Media SOP', url: 'social-media-sop.html', icon: '📱', keywords: ['social', 'media', 'instagram', 'facebook', 'marketing'] },
        { title: 'Finance SOP', url: 'finance-sop.html', icon: '💵', keywords: ['finance', 'invoice', 'payment', 'accounting', 'budget'] },
        { title: 'Daily Routine SOP', url: 'daily-sop.html', icon: '☀️', keywords: ['daily', 'routine', 'checklist', 'status', 'reporting'] },
        { title: 'Client Chat SOP', url: 'client-chat-sop.html', icon: '💬', keywords: ['chat', 'messaging', 'communication', 'response'] },
        { title: 'Employee Handbook', url: 'employee-handbook.html', icon: '📖', keywords: ['handbook', 'policies', 'leave', 'wfh', 'culture'] },
        { title: 'Training Hub', url: 'training-hub.html', icon: '🎓', keywords: ['training', 'quiz', 'learning', 'certification'] },
        { title: 'Onboarding Guide', url: 'onboarding.html', icon: '🚀', keywords: ['onboarding', 'new employee', 'start', 'first day'] }
    ];

    function init() {
        // Only run on index page
        if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/sops/' && !window.location.pathname.endsWith('/sops')) {
            return;
        }

        createSearchUI();
        console.log('✅ Global Search loaded');
    }

    function createSearchUI() {
        // Create search container
        const searchContainer = document.createElement('div');
        searchContainer.id = 'global-search-container';
        searchContainer.innerHTML = `
            <div class="global-search-bar">
                <span class="search-icon">🔍</span>
                <input type="text" id="global-search-input" placeholder="Search all SOPs... (Ctrl+K)" autocomplete="off">
                <span class="search-shortcut">Ctrl+K</span>
            </div>
            <div id="global-search-results" class="global-search-results"></div>
        `;

        // Insert after header
        const header = document.querySelector('.header');
        if (header) {
            header.after(searchContainer);
        }

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #global-search-container {
                max-width: 600px;
                margin: 20px auto;
                padding: 0 20px;
                position: relative;
            }
            
            .global-search-bar {
                display: flex;
                align-items: center;
                background: rgba(30, 41, 59, 0.8);
                border: 2px solid rgba(99, 102, 241, 0.3);
                border-radius: 15px;
                padding: 12px 20px;
                backdrop-filter: blur(10px);
                transition: all 0.3s;
            }
            
            .global-search-bar:focus-within {
                border-color: #6366F1;
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
            }
            
            .search-icon {
                font-size: 1.2em;
                margin-right: 12px;
            }
            
            #global-search-input {
                flex: 1;
                background: transparent;
                border: none;
                color: #F8FAFC;
                font-size: 1em;
                outline: none;
            }
            
            #global-search-input::placeholder {
                color: #64748B;
            }
            
            .search-shortcut {
                background: rgba(99, 102, 241, 0.2);
                color: #A5B4FC;
                padding: 4px 10px;
                border-radius: 6px;
                font-size: 0.75em;
                font-weight: 600;
            }
            
            .global-search-results {
                position: absolute;
                top: 100%;
                left: 20px;
                right: 20px;
                background: linear-gradient(135deg, #1E293B, #0F172A);
                border: 2px solid rgba(99, 102, 241, 0.3);
                border-radius: 15px;
                margin-top: 10px;
                max-height: 400px;
                overflow-y: auto;
                display: none;
                z-index: 1000;
            }
            
            .global-search-results.visible {
                display: block;
            }
            
            .search-result-item {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px 20px;
                text-decoration: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                transition: all 0.2s;
            }
            
            .search-result-item:hover,
            .search-result-item.active {
                background: rgba(99, 102, 241, 0.15);
            }
            
            .search-result-item:last-child {
                border-bottom: none;
            }
            
            .result-icon {
                font-size: 1.5em;
            }
            
            .result-info h4 {
                color: #F8FAFC;
                margin: 0 0 4px 0;
                font-size: 1em;
            }
            
            .result-info p {
                color: #64748B;
                margin: 0;
                font-size: 0.8em;
            }
            
            .no-results {
                padding: 30px;
                text-align: center;
                color: #64748B;
            }
        `;
        document.head.appendChild(style);

        // Setup event listeners
        const input = document.getElementById('global-search-input');
        const results = document.getElementById('global-search-results');

        input.addEventListener('input', (e) => handleSearch(e.target.value));
        input.addEventListener('focus', () => {
            if (input.value.length > 0) {
                results.classList.add('visible');
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                results.classList.remove('visible');
            }
        });

        // Keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                input.focus();
            }

            // Navigate results with arrows
            if (results.classList.contains('visible')) {
                const items = results.querySelectorAll('.search-result-item');
                const active = results.querySelector('.search-result-item.active');
                let index = Array.from(items).indexOf(active);

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    index = (index + 1) % items.length;
                    items.forEach(i => i.classList.remove('active'));
                    items[index].classList.add('active');
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    index = index <= 0 ? items.length - 1 : index - 1;
                    items.forEach(i => i.classList.remove('active'));
                    items[index].classList.add('active');
                } else if (e.key === 'Enter' && active) {
                    e.preventDefault();
                    active.click();
                }
            }
        });
    }

    function handleSearch(query) {
        const results = document.getElementById('global-search-results');
        if (!query || query.length < 2) {
            results.classList.remove('visible');
            return;
        }

        const lowerQuery = query.toLowerCase();
        const matches = SOP_INDEX.filter(sop =>
            sop.title.toLowerCase().includes(lowerQuery) ||
            sop.keywords.some(k => k.includes(lowerQuery))
        );

        if (matches.length === 0) {
            results.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            results.innerHTML = matches.map((sop, i) => `
                <a href="${sop.url}" class="search-result-item ${i === 0 ? 'active' : ''}">
                    <span class="result-icon">${sop.icon}</span>
                    <div class="result-info">
                        <h4>${sop.title}</h4>
                        <p>${sop.keywords.slice(0, 3).join(', ')}</p>
                    </div>
                </a>
            `).join('');
        }

        results.classList.add('visible');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
