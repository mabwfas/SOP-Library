/**
 * Certificate Enhancements
 * Adds PDF download and QR verification to certificates
 */

(function () {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCertificateEnhancements);
    } else {
        initCertificateEnhancements();
    }

    function initCertificateEnhancements() {
        // Patch showCertificate to add enhanced features
        patchShowCertificate();
        console.log('✅ Certificate enhancements loaded');
    }

    /**
     * Patch showCertificate to add PDF download and training scores
     */
    function patchShowCertificate() {
        const originalShowCertificate = window.showCertificate;
        if (!originalShowCertificate) {
            setTimeout(patchShowCertificate, 100);
            return;
        }

        window.showCertificate = function () {
            // Call original first
            originalShowCertificate.call(this);

            // Wait for modal to render, then enhance it
            setTimeout(enhanceCertificateModal, 100);
        };
    }

    /**
     * Enhance the certificate modal with additional features
     */
    function enhanceCertificateModal() {
        const modal = document.getElementById('certificateModal');
        if (!modal) return;

        const content = document.getElementById('certificateContent');
        if (!content) return;

        // Add training summary section
        addTrainingSummary(content);

        // Add PDF download button
        addPdfDownloadButton(content);

        // Add QR code for verification
        addVerificationQR(content);
    }

    /**
     * Add training summary showing all task scores
     */
    function addTrainingSummary(container) {
        if (!window.TrainingCore) return;

        // Get module ID from current page
        const path = window.location.pathname;
        const match = path.match(/(\w+)-training\.html/);
        const moduleId = match ? match[1] : null;

        if (!moduleId) return;

        // Get all task scores
        const scores = window.TrainingCore.getAllScores();
        const taskScores = [];

        for (let i = 1; i <= 10; i++) {
            const key = `${moduleId}_task${i}`;
            const attempts = scores[key] || [];
            const best = attempts.length > 0
                ? attempts.reduce((best, curr) => (curr.score / curr.total) > (best.score / best.total) ? curr : best)
                : null;

            taskScores.push({
                taskId: i,
                score: best ? best.score : 0,
                total: best ? best.total : 10,
                attempts: attempts.length,
                passed: attempts.some(a => a.passed)
            });
        }

        // Create summary element
        const summary = document.createElement('div');
        summary.id = 'training-summary';
        summary.style.cssText = `
            margin: 30px 0;
            padding: 20px;
            background: rgba(99, 102, 241, 0.05);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
        `;

        summary.innerHTML = `
            <h4 style="margin: 0 0 15px 0; color: #94A3B8; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;">Training Summary</h4>
            <div class="task-scores-grid" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
                ${taskScores.map(t => `
                    <div class="task-score-item" style="
                        text-align: center;
                        padding: 10px;
                        background: ${t.passed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.02)'};
                        border-radius: 8px;
                        border: 1px solid ${t.passed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.05)'};
                    ">
                        <div style="font-size: 0.75em; color: #64748B;">Task ${t.taskId}</div>
                        <div style="font-size: 1.2em; font-weight: 700; color: ${t.passed ? '#10B981' : '#64748B'};">
                            ${t.passed ? '✓' : '-'}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Find print button area and insert before it
        const printArea = container.querySelector('.no-print');
        if (printArea) {
            printArea.parentNode.insertBefore(summary, printArea);
        }
    }

    /**
     * Add PDF download button
     */
    function addPdfDownloadButton(container) {
        const printBtn = container.querySelector('[onclick="printCertificate()"]');
        if (!printBtn) return;

        // Create download button
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'no-print';
        downloadBtn.style.cssText = `
            background: linear-gradient(135deg, #10B981, #059669);
            color: white;
            font-weight: 700;
            padding: 16px 40px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-size: 1.1em;
            margin-left: 15px;
            transition: transform 0.2s;
        `;
        downloadBtn.innerHTML = '💾 Save as PDF';
        downloadBtn.onmouseover = function () { this.style.transform = 'scale(1.05)'; };
        downloadBtn.onmouseout = function () { this.style.transform = 'scale(1)'; };
        downloadBtn.onclick = function () {
            // Use browser print dialog with PDF option
            alert('Tip: In the print dialog, select "Save as PDF" as the destination to download your certificate.');
            window.print();
        };

        printBtn.parentNode.appendChild(downloadBtn);
    }

    /**
     * Add verification QR code
     */
    function addVerificationQR(container) {
        // Get certificate ID from the modal
        const certIdElement = container.querySelector('[style*="font-family: monospace"]');
        if (!certIdElement) return;

        const certId = certIdElement.textContent.trim();

        // Create QR placeholder (since we can't generate actual QR without library)
        const qrSection = document.createElement('div');
        qrSection.className = 'no-print';
        qrSection.style.cssText = `
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 15px;
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
        `;

        qrSection.innerHTML = `
            <span style="font-size: 1.5em;">📱</span>
            <span style="color: #64748B; font-size: 0.85em;">
                Verify: <a href="https://digitalheroes.co.in/verify/${certId}" target="_blank" style="color: #6366F1;">digitalheroes.co.in/verify</a>
            </span>
        `;

        // Insert after certificate ID
        const certIdContainer = certIdElement.closest('div[style*="inline-block"]');
        if (certIdContainer) {
            certIdContainer.parentNode.insertBefore(qrSection, certIdContainer.nextSibling);
        }
    }
})();
