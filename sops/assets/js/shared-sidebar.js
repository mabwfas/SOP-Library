/**
 * Shared Sidebar Toggle — Digital Heroes SOP Library
 * Handles mobile sidebar open/close, overlay, and click-outside-to-close.
 */
(function () {
    'use strict';

    // Toggle sidebar open/closed
    window.toggleSidebar = function () {
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) {
            sidebar.classList.toggle('active');
            sidebar.classList.toggle('open');
        }
        if (overlay) {
            overlay.classList.toggle('active');
        }
    };

    // Close sidebar
    window.closeSidebar = function () {
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) {
            sidebar.classList.remove('active');
            sidebar.classList.remove('open');
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
    };

    // Click outside to close sidebar on mobile
    document.addEventListener('click', function (event) {
        var sidebar = document.querySelector('.sidebar');
        var toggleBtn = document.querySelector('.mobile-menu-btn');
        if (!sidebar || !toggleBtn) return;

        var isOpen = sidebar.classList.contains('active') || sidebar.classList.contains('open');
        var clickedOnSidebar = sidebar.contains(event.target);
        var clickedOnToggle = toggleBtn.contains(event.target);

        if (isOpen && !clickedOnSidebar && !clickedOnToggle) {
            window.closeSidebar();
        }
    });
})();
