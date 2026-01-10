const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// Files to update (SOP, KRA, KPI)
const files = [];

// Add SOP files
fs.readdirSync(sopsDir).filter(f => f.endsWith('-sop.html') || f === 'daily-sop.html').forEach(f => {
    files.push(path.join(sopsDir, f));
});

// Add KRA files
const kraDir = path.join(sopsDir, 'kra');
if (fs.existsSync(kraDir)) {
    fs.readdirSync(kraDir).filter(f => f.endsWith('.html')).forEach(f => {
        files.push(path.join(kraDir, f));
    });
}

// Add KPI files  
const kpiDir = path.join(sopsDir, 'kpi');
if (fs.existsSync(kpiDir)) {
    fs.readdirSync(kpiDir).filter(f => f.endsWith('.html')).forEach(f => {
        files.push(path.join(kpiDir, f));
    });
}

// Old CSS to replace
const oldCSS = `        /* Mobile Header */
        .mobile-header {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
            background: linear-gradient(135deg, #1E3A5F 0%, #0F2439 100%);
            z-index: 1002;
            padding: 0 15px;
            align-items: center;
            gap: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .mobile-menu-btn {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
        }
        
        .mobile-home-btn {
            color: #10B981;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            padding: 8px 14px;
            background: rgba(16, 185, 129, 0.15);
            border-radius: 8px;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }
        
        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }
            
            .main-content {
                padding-top: 60px !important;
            }
            
            .header {
                margin-top: 50px;
            }
        }`;

// New CSS with better spacing
const newCSS = `        /* Mobile Header - Fixed Collision */
        .mobile-header {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 56px;
            background: linear-gradient(135deg, #1E3A5F 0%, #0F2439 100%);
            z-index: 1002;
            padding: 0 12px;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            border-radius: 10px;
            font-size: 1.4rem;
            cursor: pointer;
            flex-shrink: 0;
        }
        
        .mobile-home-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #10B981;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 10px 16px;
            background: rgba(16, 185, 129, 0.15);
            border-radius: 10px;
            border: 1px solid rgba(16, 185, 129, 0.3);
            white-space: nowrap;
        }
        
        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }
            
            .main-content {
                padding-top: 70px !important;
            }
            
            .header {
                margin-top: 56px;
            }
        }`;

files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('/* Mobile Header */')) {
        content = content.replace(oldCSS, newCSS);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${path.basename(filePath)}`);
    } else {
        console.log(`Skipped (no match): ${path.basename(filePath)}`);
    }
});

console.log('Done!');
