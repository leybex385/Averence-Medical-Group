import os
import glob

mobile_html = """                <div class="nav-item simple-dropdown lang-mobile">
                    <a href="#" style="display: flex; align-items: center; gap: 5px;"><i class="fas fa-globe"></i> Language <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-menu">
                        <a href="#">English</a>
                        <a href="#">中文</a>
                        <a href="#">Español</a>
                        <a href="#">Français</a>
                        <a href="#">Deutsch</a>
                    </div>
                </div>
            </nav>"""

desktop_html = """            <div class="nav-actions">
                <div class="nav-item simple-dropdown lang-desktop" style="display: flex; align-items: center; margin-right: 15px;">
                    <a href="#" style="display: flex; align-items: center; gap: 8px; border: 1px solid var(--border-subtle); padding: 8px 15px; border-radius: 4px; color: var(--primary-navy); text-decoration: none; font-weight: 500;">
                        <i class="fas fa-globe"></i> Language <i class="fas fa-chevron-down" style="font-size:0.7rem; margin-left: 2px;"></i>
                    </a>
                    <div class="dropdown-menu dropdown-right" style="min-width: 150px;">
                        <a href="#">English</a>
                        <a href="#">中文</a>
                        <a href="#">Español</a>
                        <a href="#">Français</a>
                        <a href="#">Deutsch</a>
                    </div>
                </div>"""

for filepath in glob.glob("*.html"):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if already patched
    if "lang-mobile" in content:
        continue
        
    print(f"Patching {filepath}")
    
    # Replace </nav>
    # Note: </nav> may have different indentation, so let's do a strict replacement
    content = content.replace("            </nav>", mobile_html)
    
    # Replace <div class="nav-actions">
    # Note: <div class="nav-actions"> may have different indentation. 
    # Usually it's `            <div class="nav-actions">`
    content = content.replace('            <div class="nav-actions">', desktop_html)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Done.")
