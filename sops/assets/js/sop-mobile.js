/**
 * SOP Mobile Enhancements
 * Features: Swipe gestures, bottom action bar, back-to-top, touch improvements
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        swipeThreshold: 80,
        swipeVelocity: 0.3
    };

    // State
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isSwiping = false;

    // Initialize on DOM ready (handle async loading)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobile);
    } else {
        initMobile();
    }

    function initMobile() {
        if (isMobile()) {
            initSwipeGestures();
            createBottomActionBar();
            createBackToTop();
            enhanceTouchTargets();
            initOfflineDetection();
        }
    }

    function isMobile() {
        return window.innerWidth <= 768 || 'ontouchstart' in window;
    }

    /**
     * Initialize swipe gestures for sidebar
     */
    function initSwipeGestures() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');

        if (!sidebar) return;

        // Track touch on main content
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });

        function handleTouchStart(e) {
            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            touchStartTime = Date.now();
            isSwiping = false;
        }

        function handleTouchMove(e) {
            if (!touchStartX) return;

            const touch = e.touches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;

            // Check if horizontal swipe
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
                isSwiping = true;

                // Prevent vertical scrolling during horizontal swipe
                if (Math.abs(deltaX) > 30) {
                    e.preventDefault();
                }
            }
        }

        function handleTouchEnd(e) {
            if (!isSwiping) return;

            const touch = e.changedTouches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaTime = Date.now() - touchStartTime;
            const velocity = Math.abs(deltaX) / deltaTime;

            const sidebarOpen = sidebar.classList.contains('active') || sidebar.classList.contains('open');

            // Right swipe from left edge - open sidebar
            if (deltaX > CONFIG.swipeThreshold && touchStartX < 50 && !sidebarOpen) {
                openSidebar();
            }
            // Left swipe - close sidebar
            else if (deltaX < -CONFIG.swipeThreshold && sidebarOpen) {
                closeSidebar();
            }
            // Fast swipe
            else if (velocity > CONFIG.swipeVelocity) {
                if (deltaX > 0 && touchStartX < 100 && !sidebarOpen) {
                    openSidebar();
                } else if (deltaX < 0 && sidebarOpen) {
                    closeSidebar();
                }
            }

            isSwiping = false;
            touchStartX = 0;
        }
    }

    function openSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        if (sidebar) {
            sidebar.classList.add('active', 'open');
        }
        if (overlay) {
            overlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        if (sidebar) {
            sidebar.classList.remove('active', 'open');
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    /**
     * Create bottom action bar for mobile
     */
    function createBottomActionBar() {
        if (document.querySelector('.mobile-action-bar')) return;

        const bar = document.createElement('div');
        bar.className = 'mobile-action-bar';
        bar.innerHTML = `
            <button class="action-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" title="Top">
                <span>⬆️</span>
                <small>Top</small>
            </button>
            <button class="action-btn" onclick="SOPTOC && SOPTOC.open()" title="Contents">
                <span>📑</span>
                <small>TOC</small>
            </button>
            <button class="action-btn" onclick="SOPSearch && SOPSearch.open()" title="Search">
                <span>🔍</span>
                <small>Search</small>
            </button>
            <button class="action-btn" onclick="toggleBookmarksPanel()" title="Bookmarks">
                <span>🔖</span>
                <small>Saved</small>
            </button>
        `;
        document.body.appendChild(bar);

        // Add styles
        addActionBarStyles();
    }

    /**
     * Create back-to-top button
     */
    function createBackToTop() {
        const btn = document.createElement('button');
        btn.className = 'back-to-top-btn';
        btn.innerHTML = '↑';
        btn.title = 'Back to top';
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);

        // Show/hide based on scroll
        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const show = scrollY > 500;
            const goingUp = scrollY < lastScrollY;

            btn.classList.toggle('visible', show && goingUp);
            lastScrollY = scrollY;
        });
    }

    /**
     * Enhance touch targets for better mobile UX
     */
    function enhanceTouchTargets() {
        // Ensure all clickable elements have minimum 44px touch target
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .sidebar-nav a,
                .sidebar-nav-grid a,
                .nav-links a,
                button,
                .bookmark-btn {
                    min-height: 44px !important;
                    display: flex !important;
                    align-items: center !important;
                }
                
                /* Increase tap areas */
                .section-header,
                .info-box h4,
                .template-header {
                    padding: 15px !important;
                }
                
                /* Add touch feedback */
                button:active,
                a:active {
                    transform: scale(0.98);
                    opacity: 0.9;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Initialize offline detection
     */
    function initOfflineDetection() {
        const showOfflineBanner = () => {
            let banner = document.querySelector('.offline-banner');
            if (!banner) {
                banner = document.createElement('div');
                banner.className = 'offline-banner';
                banner.innerHTML = '📴 You are offline. Some features may be unavailable.';
                document.body.appendChild(banner);
            }
            banner.classList.add('visible');
        };

        const hideOfflineBanner = () => {
            const banner = document.querySelector('.offline-banner');
            if (banner) banner.classList.remove('visible');
        };

        window.addEventListener('online', hideOfflineBanner);
        window.addEventListener('offline', showOfflineBanner);

        if (!navigator.onLine) {
            showOfflineBanner();
        }
    }

    /**
     * Add action bar styles
     */
    function addActionBarStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .mobile-action-bar {
                display: none;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #1E293B, #0F172A);
                padding: 8px 10px;
                padding-bottom: calc(8px + env(safe-area-inset-bottom));
                z-index: 99997;
                justify-content: space-around;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
            }
            
            @media (max-width: 768px) {
                .mobile-action-bar {
                    display: flex;
                }
                
                .main-content {
                    padding-bottom: 80px !important;
                }
            }
            
            .action-btn {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2px;
                background: none;
                border: none;
                color: rgba(255, 255, 255, 0.8);
                cursor: pointer;
                padding: 8px 15px;
                border-radius: 10px;
                transition: all 0.2s ease;
            }
            
            .action-btn:active {
                background: rgba(255, 255, 255, 0.1);
                transform: scale(0.95);
            }
            
            .action-btn span {
                font-size: 20px;
            }
            
            .action-btn small {
                font-size: 10px;
                opacity: 0.7;
            }
            
            .back-to-top-btn {
                position: fixed;
                right: 15px;
                bottom: 140px;
                width: 44px;
                height: 44px;
                background: linear-gradient(135deg, #3B82F6, #1D4ED8);
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 18px;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                z-index: 99996;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
                pointer-events: none;
            }
            
            .back-to-top-btn.visible {
                opacity: 1;
                transform: translateY(0);
                pointer-events: auto;
            }
            
            @media (min-width: 769px) {
                .back-to-top-btn {
                    bottom: 30px;
                }
            }
            
            .offline-banner {
                position: fixed;
                top: 56px;
                left: 0;
                right: 0;
                background: #F59E0B;
                color: #0F172A;
                text-align: center;
                padding: 8px 15px;
                font-size: 12px;
                font-weight: 600;
                z-index: 99998;
                transform: translateY(-100%);
                transition: transform 0.3s ease;
            }
            
            .offline-banner.visible {
                transform: translateY(0);
            }
            
            /* Swipe indicator */
            .swipe-indicator {
                position: fixed;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 4px;
                height: 100px;
                background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5), transparent);
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 99999;
                pointer-events: none;
            }
            
            @media (max-width: 768px) {
                .swipe-indicator {
                    opacity: 0.5;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Expose to global
    window.SOPMobile = {
        openSidebar,
        closeSidebar,
        isMobile
    };
})();
