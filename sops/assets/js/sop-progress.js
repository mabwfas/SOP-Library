/**
 * Reading Progress & Estimated Time
 * Shows reading progress bar and estimated reading time
 */

(function () {
    'use strict';

    function init() {
        createProgressBar();
        showReadingTime();
        setupScrollTracking();
        console.log('✅ Reading Progress loaded');
    }

    function createProgressBar() {
        const progressContainer = document.createElement('div');
        progressContainer.id = 'reading-progress-container';
        progressContainer.innerHTML = `
            <div id="reading-progress-bar"></div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            #reading-progress-container {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: rgba(99, 102, 241, 0.2);
                z-index: 99999;
            }
            
            #reading-progress-bar {
                height: 100%;
                width: 0%;
                background: linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899);
                transition: width 0.1s ease-out;
            }
            
            .reading-time-badge {
                position: fixed;
                top: 70px;
                right: 20px;
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9));
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 0.85em;
                font-weight: 600;
                z-index: 9998;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            @media (max-width: 768px) {
                .reading-time-badge {
                    top: 65px;
                    right: 10px;
                    font-size: 0.75em;
                    padding: 6px 12px;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(progressContainer);
    }

    function showReadingTime() {
        const mainContent = document.querySelector('.main-content') || document.body;
        const text = mainContent.textContent || '';
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

        const badge = document.createElement('div');
        badge.className = 'reading-time-badge';
        badge.innerHTML = `📖 ${readingTime} min read`;
        document.body.appendChild(badge);

        // Hide after 5 seconds
        setTimeout(() => {
            badge.style.transition = 'opacity 0.5s';
            badge.style.opacity = '0';
            setTimeout(() => badge.remove(), 500);
        }, 5000);
    }

    function setupScrollTracking() {
        const progressBar = document.getElementById('reading-progress-bar');
        if (!progressBar) return;

        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = Math.min(progress, 100) + '%';
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
