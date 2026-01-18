/**
 * SOP Floating Table of Contents
 * Features: Auto-generated, sticky, active highlighting, progress indicator
 */

(function () {
    'use strict';

    // State
    let tocItems = [];
    let sections = [];
    let isCollapsed = false;
    let isMobileOpen = false;

    // Initialize on DOM ready (handle async loading)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTOC);
    } else {
        initTOC();
    }

    function initTOC() {
        buildTOC();
        createTOCPanel();
        bindScrollEvents();
        bindToggleEvents();
    }

    /**
     * Build TOC from headings
     */
    function buildTOC() {
        const headings = document.querySelectorAll('.section h2, .section-header h2, .critical-alert h2, .section h3');

        headings.forEach((heading, index) => {
            // Ensure heading has an ID
            if (!heading.id) {
                const section = heading.closest('.section, .critical-alert');
                if (section?.id) {
                    heading.id = section.id + '-heading';
                } else {
                    heading.id = 'section-' + index;
                }
            }

            const level = heading.tagName === 'H3' ? 3 : 2;
            const text = heading.textContent.trim().substring(0, 50);

            tocItems.push({
                id: heading.id,
                text: text,
                level: level,
                element: heading
            });

            sections.push({
                id: heading.id,
                element: heading.closest('.section, .critical-alert') || heading
            });
        });
    }

    /**
     * Create TOC panel
     */
    function createTOCPanel() {
        if (tocItems.length < 3) return; // Don't show for very short pages

        // Create panel
        const panel = document.createElement('div');
        panel.className = 'sop-toc-panel';
        panel.innerHTML = `
            <div class="sop-toc-header">
                <span><span class="toc-icon">📑</span> Contents</span>
                <button class="sop-toc-collapse-btn" title="Collapse">−</button>
            </div>
            <div class="sop-toc-progress">
                <div class="sop-toc-progress-bar"></div>
            </div>
            <div class="sop-toc-content">
                ${tocItems.map(item => `
                    <a href="#${item.id}" class="sop-toc-item level-${item.level}" data-id="${item.id}">
                        ${item.text}
                    </a>
                `).join('')}
            </div>
            <div class="sop-toc-percent">0% read</div>
        `;
        document.body.appendChild(panel);

        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sop-toc-toggle-btn';
        toggleBtn.innerHTML = '📑';
        toggleBtn.title = 'Table of Contents';
        document.body.appendChild(toggleBtn);

        // Create mobile backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'sop-toc-backdrop';
        document.body.appendChild(backdrop);

        // Bind click events on TOC items
        panel.querySelectorAll('.sop-toc-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('data-id');
                scrollToSection(targetId);

                // Close on mobile
                if (window.innerWidth <= 768) {
                    closeMobileTOC();
                }
            });
        });

        // Initial state check
        checkCollapsedState();
    }

    /**
     * Scroll to section smoothly
     */
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Account for fixed headers
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    /**
     * Bind scroll events for active tracking
     */
    function bindScrollEvents() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveSection();
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * Update active section in TOC
     */
    function updateActiveSection() {
        const scrollPos = window.scrollY + 150;
        let activeId = null;

        sections.forEach(section => {
            const element = section.element;
            const top = element.offsetTop;
            const bottom = top + element.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                activeId = section.id;
            }
        });

        // Update active class
        document.querySelectorAll('.sop-toc-item').forEach(item => {
            const isActive = item.getAttribute('data-id') === activeId;
            item.classList.toggle('active', isActive);
        });

        // Scroll active item into view in TOC
        const activeItem = document.querySelector('.sop-toc-item.active');
        if (activeItem) {
            const tocContent = document.querySelector('.sop-toc-content');
            if (tocContent) {
                const itemTop = activeItem.offsetTop - tocContent.offsetTop;
                const itemBottom = itemTop + activeItem.offsetHeight;
                const scrollTop = tocContent.scrollTop;
                const visibleHeight = tocContent.clientHeight;

                if (itemTop < scrollTop || itemBottom > scrollTop + visibleHeight) {
                    tocContent.scrollTo({
                        top: itemTop - visibleHeight / 3,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }

    /**
     * Update progress bar
     */
    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(100, Math.round((scrollTop / docHeight) * 100));

        const progressBar = document.querySelector('.sop-toc-progress-bar');
        const percentText = document.querySelector('.sop-toc-percent');

        if (progressBar) progressBar.style.width = progress + '%';
        if (percentText) percentText.textContent = progress + '% read';
    }

    /**
     * Bind toggle events
     */
    function bindToggleEvents() {
        // Collapse button
        const collapseBtn = document.querySelector('.sop-toc-collapse-btn');
        if (collapseBtn) {
            collapseBtn.addEventListener('click', toggleCollapse);
        }

        // Toggle button
        const toggleBtn = document.querySelector('.sop-toc-toggle-btn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    openMobileTOC();
                } else {
                    toggleCollapse();
                }
            });
        }

        // Backdrop
        const backdrop = document.querySelector('.sop-toc-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', closeMobileTOC);
        }

        // Resize handler
        window.addEventListener('resize', checkCollapsedState);
    }

    function toggleCollapse() {
        isCollapsed = !isCollapsed;
        const panel = document.querySelector('.sop-toc-panel');
        const toggleBtn = document.querySelector('.sop-toc-toggle-btn');
        const collapseBtn = document.querySelector('.sop-toc-collapse-btn');

        if (panel) panel.classList.toggle('collapsed', isCollapsed);
        if (toggleBtn) toggleBtn.classList.toggle('visible', isCollapsed);
        if (collapseBtn) collapseBtn.textContent = isCollapsed ? '+' : '−';

        localStorage.setItem('sop-toc-collapsed', isCollapsed);
    }

    function checkCollapsedState() {
        const saved = localStorage.getItem('sop-toc-collapsed');
        const isMobile = window.innerWidth <= 1200;

        isCollapsed = isMobile || saved === 'true';

        const panel = document.querySelector('.sop-toc-panel');
        const toggleBtn = document.querySelector('.sop-toc-toggle-btn');

        if (panel) panel.classList.toggle('collapsed', isCollapsed && !isMobile);
        if (toggleBtn) toggleBtn.classList.toggle('visible', isMobile || isCollapsed);
    }

    function openMobileTOC() {
        isMobileOpen = true;
        const panel = document.querySelector('.sop-toc-panel');
        const backdrop = document.querySelector('.sop-toc-backdrop');

        if (panel) panel.classList.add('mobile-open');
        if (backdrop) backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileTOC() {
        isMobileOpen = false;
        const panel = document.querySelector('.sop-toc-panel');
        const backdrop = document.querySelector('.sop-toc-backdrop');

        if (panel) panel.classList.remove('mobile-open');
        if (backdrop) backdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Expose to global
    window.SOPTOC = {
        toggle: toggleCollapse,
        scrollTo: scrollToSection,
        open: openMobileTOC,
        close: closeMobileTOC
    };
})();
