/**
 * FAQ Answer Visibility Enhancement
 * Makes Q&A answers easily visible with expand all/collapse all
 */

(function () {
    'use strict';

    function init() {
        enhanceFAQSections();
        addExpandAllButton();
        console.log('✅ FAQ Enhancement loaded');
    }

    function enhanceFAQSections() {
        // Find all FAQ-like elements (details/summary, collapsibles, etc.)
        const details = document.querySelectorAll('details');

        // Style enhancement for details elements
        details.forEach((detail, i) => {
            detail.classList.add('enhanced-faq');

            // Add animation
            const summary = detail.querySelector('summary');
            if (summary) {
                summary.classList.add('enhanced-summary');

                // Add indicator
                if (!summary.querySelector('.faq-indicator')) {
                    const indicator = document.createElement('span');
                    indicator.className = 'faq-indicator';
                    indicator.textContent = '▶';
                    summary.insertBefore(indicator, summary.firstChild);
                }
            }

            detail.addEventListener('toggle', () => {
                const indicator = detail.querySelector('.faq-indicator');
                if (indicator) {
                    indicator.textContent = detail.open ? '▼' : '▶';
                }
            });
        });

        // Handle .faq-item pattern (used in employee handbook)
        enhanceFaqItems();

        // Find Q&A patterns in content
        findAndEnhanceQAPairs();
    }

    function enhanceFaqItems() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (question && answer) {
                // Style the item
                item.classList.add('faq-item-enhanced');

                // Hide answer by default
                answer.style.display = 'none';
                answer.classList.add('faq-answer-enhanced');

                // Make question clickable
                question.classList.add('faq-question-enhanced');
                question.style.cursor = 'pointer';

                // Add indicator
                if (!question.querySelector('.faq-arrow')) {
                    const arrow = document.createElement('span');
                    arrow.className = 'faq-arrow';
                    arrow.textContent = '▶ ';
                    question.insertBefore(arrow, question.firstChild);
                }

                // Toggle on click
                question.addEventListener('click', function () {
                    const isHidden = answer.style.display === 'none';
                    answer.style.display = isHidden ? 'block' : 'none';

                    const arrow = question.querySelector('.faq-arrow');
                    if (arrow) {
                        arrow.textContent = isHidden ? '▼ ' : '▶ ';
                    }

                    // Toggle active class
                    item.classList.toggle('faq-item-active', isHidden);
                });
            }
        });
    }

    function findAndEnhanceQAPairs() {
        // Look for Q: and A: patterns in text
        const allElements = document.querySelectorAll('p, div, li');

        allElements.forEach(el => {
            const text = el.textContent;
            if (text.startsWith('Q:') || text.startsWith('Q.') || text.match(/^Q\d/)) {
                el.classList.add('faq-question-text');

                // Check if next sibling is the answer
                let next = el.nextElementSibling;
                if (next && (next.textContent.startsWith('A:') || next.textContent.startsWith('A.'))) {
                    next.classList.add('faq-answer-text');

                    // Wrap in expandable container if not already
                    if (!el.classList.contains('faq-wrapped')) {
                        wrapQAPair(el, next);
                    }
                }
            }
        });
    }

    function wrapQAPair(question, answer) {
        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'faq-pair-wrapper';

        // Create toggle button
        const toggle = document.createElement('button');
        toggle.className = 'faq-toggle-btn';
        toggle.innerHTML = '👁️ Show Answer';
        toggle.onclick = function () {
            const isHidden = answer.style.display === 'none';
            answer.style.display = isHidden ? 'block' : 'none';
            toggle.innerHTML = isHidden ? '🙈 Hide Answer' : '👁️ Show Answer';
        };

        // Insert elements
        question.classList.add('faq-wrapped');
        question.parentNode.insertBefore(wrapper, question);
        wrapper.appendChild(question);
        wrapper.appendChild(toggle);
        wrapper.appendChild(answer);

        // Initially show answer (per user request)
        answer.style.display = 'block';
    }

    function addExpandAllButton() {
        const details = document.querySelectorAll('details');
        if (details.length === 0) return;

        // Create floating button container
        const container = document.createElement('div');
        container.className = 'faq-controls';
        container.innerHTML = `
            <button class="faq-control-btn expand-all" onclick="expandAllFAQs()">
                📖 Expand All
            </button>
            <button class="faq-control-btn collapse-all" onclick="collapseAllFAQs()">
                📕 Collapse All
            </button>
        `;

        // Find FAQ section or add to main content
        const faqSection = document.querySelector('#faq, .faq-section, [id*="faq"], section:has(details)') ||
            document.querySelector('.main-content') ||
            document.body;

        // Insert at top of FAQ section
        const firstDetails = document.querySelector('details');
        if (firstDetails) {
            firstDetails.parentNode.insertBefore(container, firstDetails);
        }
    }

    // Global functions
    window.expandAllFAQs = function () {
        document.querySelectorAll('details').forEach(d => {
            d.open = true;
            const indicator = d.querySelector('.faq-indicator');
            if (indicator) indicator.textContent = '▼';
        });

        document.querySelectorAll('.faq-answer-text').forEach(a => {
            a.style.display = 'block';
        });

        document.querySelectorAll('.faq-toggle-btn').forEach(btn => {
            btn.innerHTML = '🙈 Hide Answer';
        });

        // Handle .faq-item pattern
        document.querySelectorAll('.faq-answer-enhanced').forEach(a => {
            a.style.display = 'block';
        });
        document.querySelectorAll('.faq-arrow').forEach(arrow => {
            arrow.textContent = '▼ ';
        });
        document.querySelectorAll('.faq-item-enhanced').forEach(item => {
            item.classList.add('faq-item-active');
        });
    };

    window.collapseAllFAQs = function () {
        document.querySelectorAll('details').forEach(d => {
            d.open = false;
            const indicator = d.querySelector('.faq-indicator');
            if (indicator) indicator.textContent = '▶';
        });

        document.querySelectorAll('.faq-answer-text').forEach(a => {
            a.style.display = 'none';
        });

        document.querySelectorAll('.faq-toggle-btn').forEach(btn => {
            btn.innerHTML = '👁️ Show Answer';
        });

        // Handle .faq-item pattern
        document.querySelectorAll('.faq-answer-enhanced').forEach(a => {
            a.style.display = 'none';
        });
        document.querySelectorAll('.faq-arrow').forEach(arrow => {
            arrow.textContent = '▶ ';
        });
        document.querySelectorAll('.faq-item-enhanced').forEach(item => {
            item.classList.remove('faq-item-active');
        });
    };

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .faq-controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        .faq-control-btn {
            background: linear-gradient(135deg, #6366F1, #8B5CF6);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.9em;
        }
        
        .faq-control-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
        }
        
        .faq-control-btn.collapse-all {
            background: linear-gradient(135deg, #64748B, #475569);
        }
        
        .enhanced-faq {
            background: rgba(99, 102, 241, 0.05);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            margin-bottom: 10px;
            overflow: hidden;
            transition: all 0.3s;
        }
        
        .enhanced-faq[open] {
            background: rgba(99, 102, 241, 0.1);
            border-color: rgba(99, 102, 241, 0.4);
        }
        
        .enhanced-summary {
            padding: 15px 20px;
            cursor: pointer;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.2s;
        }
        
        .enhanced-summary:hover {
            background: rgba(99, 102, 241, 0.15);
        }
        
        .faq-indicator {
            color: #6366F1;
            font-size: 0.8em;
            transition: transform 0.2s;
            flex-shrink: 0;
        }
        
        .enhanced-faq[open] .faq-indicator {
            transform: rotate(0deg);
        }
        
        .enhanced-faq > *:not(summary) {
            padding: 0 20px 15px 20px;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .faq-pair-wrapper {
            background: rgba(99, 102, 241, 0.05);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            padding: 15px 20px;
            margin-bottom: 15px;
        }
        
        .faq-question-text {
            font-weight: 600;
            color: #6366F1;
            margin-bottom: 10px;
        }
        
        .faq-answer-text {
            padding: 10px 0;
            border-top: 1px dashed rgba(99, 102, 241, 0.3);
            margin-top: 10px;
        }
        
        .faq-toggle-btn {
            background: linear-gradient(135deg, #10B981, #059669);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.85em;
            transition: all 0.2s;
        }
        
        .faq-toggle-btn:hover {
            transform: scale(1.05);
        }
        
        /* Make all details open by default (per user request) */
        details.enhanced-faq {
            /* Remove this if you want collapsed by default */
        }
        
        /* FAQ Item Enhancement Styles */
        .faq-item-enhanced {
            background: rgba(99, 102, 241, 0.05);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 10px;
            margin-bottom: 10px;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .faq-item-enhanced:hover {
            border-color: rgba(99, 102, 241, 0.4);
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
        }
        
        .faq-item-active {
            background: rgba(99, 102, 241, 0.1);
            border-color: rgba(99, 102, 241, 0.4);
        }
        
        .faq-question-enhanced {
            padding: 12px 15px;
            font-weight: 600;
            color: #1E3A5F;
            display: flex;
            align-items: center;
            transition: all 0.2s ease;
        }
        
        .faq-question-enhanced:hover {
            background: rgba(99, 102, 241, 0.1);
        }
        
        .faq-arrow {
            color: #6366F1;
            font-size: 0.8em;
            margin-right: 5px;
            transition: transform 0.2s ease;
        }
        
        .faq-answer-enhanced {
            padding: 0 15px 15px 30px;
            color: #475569;
            animation: fadeIn 0.3s ease;
            border-top: 1px dashed rgba(99, 102, 241, 0.2);
            margin: 0 15px;
            padding-top: 10px;
        }
        
        /* Dark mode support */
        .dark-mode .faq-item-enhanced {
            background: rgba(99, 102, 241, 0.1);
            border-color: rgba(99, 102, 241, 0.3);
        }
        
        .dark-mode .faq-question-enhanced {
            color: #E2E8F0;
        }
        
        .dark-mode .faq-answer-enhanced {
            color: #CBD5E1;
        }
    `;
    document.head.appendChild(style);

    // Auto-expand all FAQs on load (per user's request for visibility)
    function autoExpandOnLoad() {
        setTimeout(() => {
            document.querySelectorAll('details').forEach(d => {
                d.open = true;
                const indicator = d.querySelector('.faq-indicator');
                if (indicator) indicator.textContent = '▼';
            });
        }, 500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            autoExpandOnLoad();
        });
    } else {
        init();
        autoExpandOnLoad();
    }
})();
