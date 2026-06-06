import os
import re

components_dir = r"d:\FreeLance\ishan-landing-page-1\frontend\src\components"

vars = ["researchCards", "researchLinks", "programCategories", "programs", 
        "placementStats", "recruiters", "testimonials", "navMenu", "ISHAN_LOGO", 
        "heroSlides", "news", "footerLinks", "colleges", "campusLife", 
        "campusLinks", "facilityLinks", "aboutImages", "universityAchievements"]

for root, _, files in os.walk(components_dir):
    for filename in files:
        if not filename.endswith(".jsx"):
            continue
        filepath = os.path.join(root, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
            for i, line in enumerate(lines):
                for v in vars:
                    # Look for standalone variable v
                    matches = re.finditer(r'(?<![.\'\"/\\\w])' + v + r'(?![:\w])', line)
                    for m in matches:
                        print(f"File: {filename}, Line {i+1}, Variable {v}: {line.strip()}")
