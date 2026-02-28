/**
 * Certificate Enhancements
 * Adds PDF download and Verification features to certificates
 * UPDATED v3: Checksum-based verification codes (DMH-CC-II-NNNN-KKKK)
 */

(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════════
    // CHECKSUM CONSTANTS — MUST MATCH verify.html EXACTLY
    // ═══════════════════════════════════════════════════════════
    const CERT_SECRET = 'dh_cert_2026_v3_salt';

    const COURSE_MAP = {
        'sales-training':        'SL',
        'cs-training':           'CS',
        'finance-training':      'FN',
        'content-training':      'CW',
        'client-chat-training':  'CC',
        'hr-training':           'HR',
        'social-media-training': 'SM',
        'pm-training':           'PM',
        'designer-training':     'DS',
        'fullstack-training':    'FS',
        'developer-training':    'DV',
        'operations-training':   'OP',
        'wordpress-training':    'WP',
        'fiverr-risk-training':  'FR'
    };

    /**
     * Detect course code from current page URL
     */
    function detectCourseCode() {
        var path = window.location.pathname;
        var filename = path.split('/').pop().replace('.html', '').replace(/\?.*$/, '');
        return COURSE_MAP[filename] || 'XX';
    }

    /**
     * Compute 4-char checksum (cyrb53-variant hash)
     * MUST BE IDENTICAL to the copy in verify.html
     */
    function computeChecksum(courseCode, initials, nonce, secret) {
        var payload = secret + '|' + courseCode + '|' + initials + '|' + nonce;
        var h1 = 0xDEADBEEF;
        var h2 = 0x41C6CE57;
        for (var i = 0; i < payload.length; i++) {
            var ch = payload.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        var combined = (h2 >>> 0) * 4294967296 + (h1 >>> 0);
        return combined.toString(36).substring(0, 4).toUpperCase().padEnd(4, '0');
    }
    // ═══════════════════════════════════════════════════════════

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCertificateEnhancements);
    } else {
        initCertificateEnhancements();
    }

    function initCertificateEnhancements() {
        // Patch showCertificate to add enhanced features
        patchShowCertificate();
        console.log('✅ Certificate enhancements loaded (v3 - Checksum Verification)');
    }

    /**
     * Get initials from a name (first letter of first and last name)
     */
    function getInitials(name) {
        if (!name) return 'XX';
        const parts = name.trim().split(/\s+/);
        if (parts.length === 1) {
            return parts[0].substring(0, 2).toUpperCase();
        }
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    /**
     * Generate verification code with checksum: DMH-CC-II-NNNN-KKKK
     * CC = course code, II = initials, NNNN = random nonce, KKKK = checksum
     */
    function generateVerificationCode(name) {
        const initials = getInitials(name);
        const courseCode = detectCourseCode();
        const nonce = Math.random().toString(36).substring(2, 6).toUpperCase();
        const checksum = computeChecksum(courseCode, initials, nonce, CERT_SECRET);
        return 'DMH-' + courseCode + '-' + initials + '-' + nonce + '-' + checksum;
    }

    /**
     * Patch showCertificate to add PDF download and verification features
     */
    function patchShowCertificate() {
        const originalShowCertificate = window.showCertificate;
        if (!originalShowCertificate) {
            setTimeout(patchShowCertificate, 100);
            return;
        }

        window.showCertificate = function () {
            // Guard: Only allow certificate if ALL tasks are completed
            const _progress = (typeof progress !== 'undefined') ? progress : null;
            const _tasks = (typeof trainingTasks !== 'undefined') ? trainingTasks : [];
            if (_progress && _tasks.length > 0 && _progress.completedTasks.length < _tasks.length) {
                alert('Complete all ' + _tasks.length + ' tasks to unlock your certificate!');
                return;
            }

            // Call original first
            originalShowCertificate.call(this);

            // Wait for modal to render, then enhance it
            setTimeout(enhanceCertificateModal, 100);
        };
    }

    /**
     * Enhance the certificate modal with verification features
     */
    function enhanceCertificateModal() {
        const modal = document.getElementById('certificateModal');
        if (!modal) return;

        const content = document.getElementById('certificateContent');
        if (!content) return;

        // ── FIX 1: Enable scrolling on the modal ──
        modal.style.overflowY = 'auto';
        modal.style.alignItems = 'flex-start';
        modal.style.paddingTop = '40px';
        modal.style.paddingBottom = '40px';

        // ── FIX 2: Responsive certificate styles ──
        addCertificateResponsiveStyles();

        // ── FIX 3: Name prompt — ask for name if not set or is default ──
        const nameElement = document.getElementById('recipientName');
        let traineeName = nameElement ? nameElement.textContent.trim() : '';

        // Check if name is missing, default, or "QA Tester"
        const badNames = ['your name', 'qa tester', 'trainee', ''];
        if (badNames.includes(traineeName.toLowerCase())) {
            // Try to get from any localStorage key
            const savedName = localStorage.getItem('dhTraineeName')
                || localStorage.getItem('salesTraineeName')
                || localStorage.getItem('developerTraineeName')
                || localStorage.getItem('csTraineeName')
                || '';

            if (savedName && !badNames.includes(savedName.toLowerCase())) {
                traineeName = savedName;
                if (nameElement) nameElement.textContent = traineeName;
            } else {
                // Prompt the user for their name
                const enteredName = prompt('Enter your full name for the certificate:');
                if (enteredName && enteredName.trim()) {
                    traineeName = enteredName.trim();
                    if (nameElement) nameElement.textContent = traineeName;
                    // Save for future use
                    localStorage.setItem('dhTraineeName', traineeName);
                } else {
                    traineeName = 'Trainee';
                    if (nameElement) nameElement.textContent = traineeName;
                }
            }
        }

        // Make name editable on click
        if (nameElement) {
            nameElement.style.cursor = 'pointer';
            nameElement.title = 'Click to edit name';
            nameElement.onclick = function () {
                const newName = prompt('Enter your full name:', this.textContent.trim());
                if (newName && newName.trim()) {
                    this.textContent = newName.trim();
                    localStorage.setItem('dhTraineeName', newName.trim());
                    // Regenerate verification code with new name
                    const newCode = generateVerificationCode(newName.trim());
                    replaceCertificateCode(content, newCode);
                    const verifySection = document.getElementById('verificationSection');
                    if (verifySection) verifySection.remove();
                    addVerificationButton(content, newCode);
                }
            };
        }

        // Generate verification code
        const verificationCode = generateVerificationCode(traineeName);

        // Replace the old Certificate ID with new DMH format
        replaceCertificateCode(content, verificationCode);

        // Add prominent verification button
        addVerificationButton(content, verificationCode);

        // Add PDF download button
        addPdfDownloadButton(content);
    }

    /**
     * Add responsive styles for certificate on mobile and desktop
     */
    function addCertificateResponsiveStyles() {
        if (document.getElementById('cert-responsive-styles')) return;

        const style = document.createElement('style');
        style.id = 'cert-responsive-styles';
        style.textContent = `
            #certificateModal {
                overflow-y: auto !important;
                -webkit-overflow-scrolling: touch;
            }
            @media (max-width: 768px) {
                #certificateContent {
                    padding: 25px 15px !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    border-radius: 12px !important;
                    margin: 10px !important;
                }
                #certificateContent h1 {
                    font-size: 1.6em !important;
                }
                #certificateContent h2 {
                    font-size: 1.3em !important;
                }
                #certificateContent h3 {
                    font-size: 1.2em !important;
                }
                #recipientName {
                    font-size: 1.4em !important;
                    padding: 8px 15px !important;
                    min-width: unset !important;
                }
                #certificateContent > div:last-of-type {
                    flex-direction: column !important;
                    align-items: center !important;
                    gap: 20px !important;
                }
                #verificationSection {
                    padding: 15px !important;
                    margin: 15px 0 !important;
                }
                #verificationSection a {
                    padding: 14px 25px !important;
                    font-size: 1em !important;
                }
                .no-print button, .no-print a {
                    margin: 5px !important;
                }
            }
            @media (max-width: 480px) {
                #certificateContent {
                    padding: 20px 12px !important;
                }
                #certificateContent h1 {
                    font-size: 1.3em !important;
                }
                #recipientName {
                    font-size: 1.2em !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Replace certificate code with DMH-initials format
     */
    function replaceCertificateCode(container, verificationCode) {
        // Find the existing certificate code section
        const codeSection = container.querySelector('[style*="inline-block"][style*="background: rgba(139, 92, 246"]');
        if (codeSection) {
            codeSection.innerHTML = `
                <span style="color: #94A3B8; font-size: 0.85em;">Verification Code: </span>
                <span style="color: #10B981; font-weight: 700; font-family: monospace; letter-spacing: 0.1em; font-size: 1.1em;">
                    ${verificationCode}
                </span>
            `;
        } else {
            // Try another selector for the code
            const spans = container.querySelectorAll('span');
            spans.forEach(span => {
                if (span.textContent.includes('Certificate ID:') || span.textContent.includes('DH-')) {
                    const parent = span.parentElement;
                    if (parent) {
                        parent.innerHTML = `
                            <span style="color: #94A3B8; font-size: 0.85em;">Verification Code: </span>
                            <span style="color: #10B981; font-weight: 700; font-family: monospace; letter-spacing: 0.1em; font-size: 1.1em;">
                                ${verificationCode}
                            </span>
                        `;
                    }
                }
            });
        }
    }

    /**
     * Add prominent verification button
     */
    function addVerificationButton(container, verificationCode) {
        // Find the print button area
        const printArea = container.querySelector('.no-print');
        if (!printArea) return;

        // Check if verification section already exists
        if (container.querySelector('#verificationSection')) return;

        // Create verification section
        const verifySection = document.createElement('div');
        verifySection.id = 'verificationSection';
        verifySection.className = 'no-print';
        verifySection.style.cssText = `
            text-align: center;
            margin: 30px 0 20px 0;
            padding: 25px;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.1));
            border: 2px solid rgba(16, 185, 129, 0.4);
            border-radius: 16px;
        `;

        const verifyUrl = `https://library.digitalheroes.co.in/verify?code=${verificationCode}`;

        verifySection.innerHTML = `
            <div style="margin-bottom: 20px;">
                <div style="
                    display: inline-block;
                    background: rgba(0, 0, 0, 0.3);
                    padding: 15px 30px;
                    border-radius: 10px;
                    border: 1px solid rgba(16, 185, 129, 0.3);
                ">
                    <span style="color: #94A3B8; font-size: 0.9em;">Code: </span>
                    <span style="
                        color: #10B981;
                        font-size: 1.4em;
                        font-weight: 700;
                        font-family: 'Courier New', monospace;
                        letter-spacing: 0.15em;
                    ">${verificationCode}</span>
                </div>
            </div>
            <a href="${verifyUrl}" target="_blank" style="
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: linear-gradient(135deg, #10B981, #059669);
                color: white;
                font-weight: 700;
                padding: 18px 45px;
                border-radius: 12px;
                text-decoration: none;
                font-size: 1.15em;
                box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-3px) scale(1.02)'; this.style.boxShadow='0 12px 40px rgba(16, 185, 129, 0.5)';"
               onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 8px 30px rgba(16, 185, 129, 0.4)';">
                <span style="font-size: 1.3em;">✓</span>
                <span>Verify This Certificate</span>
            </a>
            <div style="margin-top: 15px; color: #64748B; font-size: 0.85em;">
                library.digitalheroes.co.in/verify
            </div>
        `;

        // Insert AFTER the print area (in footer)
        printArea.parentNode.appendChild(verifySection);
    }

    /**
     * Add PDF download button
     */
    function addPdfDownloadButton(container) {
        const printBtn = container.querySelector('[onclick="printCertificate()"]');
        if (!printBtn) return;

        // Check if already added
        if (container.querySelector('#pdfDownloadBtn')) return;

        // Create download button
        const downloadBtn = document.createElement('button');
        downloadBtn.id = 'pdfDownloadBtn';
        downloadBtn.className = 'no-print';
        downloadBtn.style.cssText = `
            background: linear-gradient(135deg, #6366F1, #8B5CF6);
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
})();
