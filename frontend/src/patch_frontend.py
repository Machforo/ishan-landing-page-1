import os
import re

components_dir = r"d:\FreeLance\ishan-landing-page-1\frontend\src\components"

# Files and the variables they import from mock
files_to_patch = {
    "Research.jsx": ["researchCards", "researchLinks"],
    "Programmes.jsx": ["programCategories", "programs"],
    "Placements.jsx": ["placementStats", "recruiters", "testimonials"],
    "Navbar.jsx": ["navMenu", "ISHAN_LOGO"],
    "Hero.jsx": ["heroSlides"],
    "Happenings.jsx": ["news"],
    "Footer.jsx": ["footerLinks", "navMenu", "ISHAN_LOGO"],
    "Colleges.jsx": ["colleges"],
    "CampusLife.jsx": ["campusLife", "campusLinks", "facilityLinks"],
    "About.jsx": ["aboutImages", "universityAchievements"]
}

for filename, vars in files_to_patch.items():
    filepath = os.path.join(components_dir, filename)
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    # 1. Replace the import statement
    import_pattern = r'import\s+\{.*\}\s+from\s+["\']\.\./mock["\'];\n?'
    content = re.sub(import_pattern, 'import { useContext } from "react";\nimport { DataContext } from "../context/DataContext";\n', content)
    
    # 2. Inject useContext inside the component function
    func_pattern = r'(export\s+default\s+function\s+[A-Za-z0-9_]+\s*\([^)]*\)\s*\{)'
    content = re.sub(func_pattern, r'\1\n  const { data } = useContext(DataContext);', content)
    
    # 3. Prefix all usage of the variables with data.
    # Note: we must avoid replacing things inside object keys or imports
    for var in vars:
        # Replace occurrences of `var` that are not preceded by `data.` or a dot, and not followed by `:` (object key)
        # We use regex word boundaries.
        pattern = r'(?<!\.)\b' + var + r'\b(?!\s*:)'
        content = re.sub(pattern, f'data.{var}', content)
        
    # Special fix for Navbar.jsx and Footer.jsx if React was already imported, we might have duplicate imports
    # but the regex just adds it. It's safer to just let the linter format it, but let's fix if we can.
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Patching complete!")
