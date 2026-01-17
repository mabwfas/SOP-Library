
import os
import glob

def patch_kra_kpi(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        # Fix 1: CSS Sidear Logic
        css_search = """        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }

            .main-content {
                padding-top: 70px !important;
            }

            .header {
                margin-top: 56px;
            }
        }"""
        
        css_replace = """        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            .sidebar.open {
                transform: translateX(0);
            }
            .main-content {
                margin-left: 0;
                padding-top: 70px !important;
                width: 100%;
            }
            .header {
                margin-top: 56px;
            }
        }"""
        
        if css_search in content:
            content = content.replace(css_search, css_replace)
            print(f"Patched CSS in {file_path}")
            
        # Fix 2: Home Button Icon Only (if not already done)
        if '🏠 Home' in content:
            content = content.replace('🏠 Home', '🏠')
            print(f"Fixed Home Button in {file_path}")

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def patch_sop(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        # Fix: Replace floating toggle with header
        # Using a slightly flexible search to catch variations if any, matching the Developer SOP one
        toggle_search = '<button class="mobile-toggle" onclick="toggleSidebar()">☰ Menu</button>'
        
        header_replace = """    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
        <a href="index.html" class="mobile-home-btn">🏠</a>
    </div>"""
    
        if toggle_search in content:
            content = content.replace(toggle_search, header_replace)
            print(f"Patched SOP Header in {file_path}")

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    base_dir = r"c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops"
    
    # Patch KRA/KPI
    for subdir in ['kra', 'kpi']:
        path = os.path.join(base_dir, subdir)
        for file in glob.glob(os.path.join(path, "*.html")):
            patch_kra_kpi(file)
            
    # Patch SOPs
    for file in glob.glob(os.path.join(base_dir, "*.html")):
        if "developer-sop.html" in file: continue # Already done manually
        if "index.html" in file: continue # Skip index
        patch_sop(file)

if __name__ == "__main__":
    main()
