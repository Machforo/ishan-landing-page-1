// Mock data for GD Goenka University clone

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1920",
    tag: "SCHOOL OF MANAGEMENT",
    title: "WE ARE PROUD TO BE AN INSTITUTION OF HAPPINESS !",
    subtitle: "Master of Business Administration (MBA) - Admissions Open",
    specialisations: [
      "Finance",
      "Entrepreneurship",
      "Operations",
      "Analytics",
      "Human Resource",
      "International Business",
      "Hospitality and Tourism",
      "Marketing",
      "Agriculture Business Management",
      "ESG & Sustainability Management",
    ],
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=1920",
    tag: "SCHOOL OF LAW",
    title: "ADMISSIONS OPEN 2026-27",
    subtitle: "Bachelor of Laws – Integrated, Honors & Masters",
    programs: ["BA LL.B (Hons.)", "BBA LL.B. (Hons.)", "LL.B (Hons.)", "LLM"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?w=1920",
    tag: "LE CORDON BLEU SCHOOL OF HOSPITALITY",
    title: "ADMISSIONS OPEN 2026-27",
    subtitle: "Programs in Hospitality Management, Culinary Arts & Pastry Arts",
    programs: ["MBA", "BBA", "DIPLOMA"],
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg?w=1920",
    tag: "SCHOOL OF ENGINEERING",
    title: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING, AI & DATA SCIENCE, CYBER SECURITY",
    subtitle: "Co-developed in collaboration with leading global tech giants like NVIDIA",
    programs: ["Accepting Applications for 2026-27"],
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/31040302/pexels-photo-31040302.jpeg?w=1920",
    tag: "PLACEMENTS",
    title: "TURNING STUDENTS INTO PROFESSIONALS, ONE PLACEMENT AT A TIME.",
    subtitle: "460 companies participated • 1788 drives hosted",
    stats: [
      { num: "460", label: "companies participated" },
      { num: "1788", label: "drives hosted on campus" },
      { num: "195", label: "conducted by dream companies" },
      { num: "854", label: "represented class a companies" },
    ],
  },
];

export const programCategories = [
  { id: "ug", label: "Undergraduate" },
  { id: "pg", label: "Postgraduate" },
  { id: "diploma", label: "Diploma" },
  { id: "doctoral", label: "Doctoral" },
];

export const programs = {
  ug: [
    { name: "B.Tech. in Computer Science & Engineering (NVIDIA DLI)", school: "School of Engineering" },
    { name: "B.Tech. in AI & Machine Learning (NVIDIA)", school: "School of Engineering" },
    { name: "B.Tech. in AI & Data Science (NVIDIA)", school: "School of Engineering" },
    { name: "B.Tech. in Cyber Security (CompTIA)", school: "School of Engineering" },
    { name: "B.Tech. in Civil Engineering (L&T)", school: "School of Engineering" },
    { name: "B.Tech. in Aerospace Engineering", school: "Aerospace & Energy" },
    { name: "B.A. (Hons.) Psychology", school: "School of Liberal Arts" },
    { name: "BA LL.B (Hons.)", school: "School of Law" },
    { name: "BBA LL.B (Hons.)", school: "School of Law" },
    { name: "B.Sc. (Hons.) Agriculture", school: "School of Agricultural Sciences" },
    { name: "B.Sc. (Hons.) Forensic Science", school: "School of Engineering & Sciences" },
    { name: "BBA (Hons.) in Hospitality Management", school: "School of Hospitality" },
    { name: "BA (Hons.) in Culinary Arts", school: "Le Cordon Bleu" },
    { name: "Bachelor of Pharmacy", school: "School of Healthcare" },
    { name: "B.Des. (Hons.) Fashion Design & Technology", school: "UID-School of Design" },
    { name: "B.Des. (Hons.) Communication Design", school: "UID-School of Design" },
    { name: "BBA / BBA (Hons.)", school: "School of Management" },
    { name: "B.Com (Hons.) with ACCA", school: "School of Management" },
  ],
  pg: [
    { name: "MBA (Master of Business Administration)", school: "School of Management" },
    { name: "MBA in Hospitality & Tourism", school: "School of Management" },
    { name: "MBA - ESG & Sustainability Management", school: "School of Management" },
    { name: "M.Tech in Aerospace Engineering", school: "Aerospace & Energy" },
    { name: "M.Tech Environmental Engineering", school: "C-OHSFE" },
    { name: "LLM", school: "School of Law" },
    { name: "M.Sc. Agriculture", school: "School of Agricultural Sciences" },
    { name: "M.Sc. - Forensic Science", school: "School of Engineering & Sciences" },
    { name: "Master of Pharmacy in Pharmaceutics", school: "School of Healthcare" },
    { name: "Master of Physiotherapy", school: "School of Healthcare" },
    { name: "Master of Arts in Psychology", school: "School of Liberal Arts" },
    { name: "M.Design - Visual Experiential Design", school: "UID-School of Design" },
    { name: "MCA - Data Science (NVIDIA)", school: "School of Engineering" },
  ],
  diploma: [
    { name: "Diploma in Culinary Arts", school: "Le Cordon Bleu" },
    { name: "Diploma in Pastry Arts", school: "Le Cordon Bleu" },
    { name: "Advance Diploma in Industrial Safety", school: "C-OHSFE" },
    { name: "Certificate in ESG & Sustainability", school: "C-OHSFE" },
    { name: "Professional Diploma in Clinical Psychology", school: "School of Liberal Arts" },
  ],
  doctoral: [
    { name: "Ph.D SoAS (Full / Part Time)", school: "School of Agricultural Sciences" },
    { name: "Ph.D SoES (Full / Part Time)", school: "School of Engineering & Sciences" },
    { name: "Ph.D SOM (Full / Part Time)", school: "School of Management" },
    { name: "Ph.D SoHT (Full / Part Time)", school: "School of Hospitality" },
    { name: "Ph.D in Psychology", school: "School of Liberal Arts" },
    { name: "Ph.D Design", school: "UID-School of Design" },
    { name: "Ph.D in Aerospace Engineering", school: "Aerospace & Energy" },
  ],
};

export const campusLife = [
  {
    id: 1,
    title: "Events & Celebrations",
    image: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=800",
  },
  {
    id: 2,
    title: "Art & Culture",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800",
  },
  {
    id: 3,
    title: "Sports",
    image: "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?w=800",
  },
];

export const campusLinks = [
  "Sports",
  "National Service Scheme (NSS)",
  "Innovation & Entrepreneurship",
  "UNIBUZZ - MAGAZINE",
  "360° Virtual Tour",
];

export const facilityLinks = ["Campus Facilities", "Academic Facilities"];

export const researchCards = [
  {
    id: 1,
    tag: "Science Journal",
    title: "Focal Point on Building a Carbon-Neutral Society",
    image: "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?w=800",
  },
  {
    id: 2,
    tag: "IEEE Research",
    title: "Space Omics and Medical Atlas (SOMA) across orbits",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
  },
];

export const researchLinks = [
  "IPR cell",
  "Collaborations",
  "Ph.D. Scholar & Topics",
  "Funded Research Projects",
  "Publications",
];

export const placementStats = [
  { num: "460", label: "companies\nparticipated" },
  { num: "1788", label: "drives hosted on\ncampus" },
  { num: "195", label: "conducted by\ndream companies" },
  { num: "854", label: "represented class\na companies" },
];

export const recruiters = [
  "Amazon",
  "Microsoft",
  "Deloitte",
  "Accenture",
  "Infosys",
  "TCS",
  "Wipro",
  "KPMG",
  "EY",
  "PwC",
  "Cognizant",
  "HCL",
  "IBM",
  "Oracle",
];

export const testimonials = [
  {
    id: 1,
    quote: "A heartfelt thank you to GD Goenka University and the MBA team for their invaluable support in my placement journey.",
    name: "Deepakshi",
    course: "MBA",
    batch: "2022-24",
    image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=600",
  },
  {
    id: 2,
    quote: "Sincere gratitude to the Placement Department of GD Goenka University for their invaluable support in this achievement.",
    name: "Urmila Kumari",
    course: "MBA",
    batch: "2022-24",
    image: "https://images.unsplash.com/photo-1623461487986-9400110de28e?w=600",
  },
  {
    id: 3,
    quote: "The faculty, infrastructure and global exposure at GD Goenka University helped shape my career in the best way possible.",
    name: "Rahul Sharma",
    course: "B.Tech CSE",
    batch: "2021-25",
    image: "https://images.pexels.com/photos/12497061/pexels-photo-12497061.jpeg?w=600",
  },
];

export const universityAchievements = [
  { id: 1, title: "QS I-GAUGE Gold", desc: "Rated University" },
  { id: 2, title: "India's Top Pvt.", desc: "B-School Ranking 2024" },
  { id: 3, title: "Delhi NCR", desc: "by Outlook-ICARE Ranking 2023" },
  { id: 4, title: "NAAC A+", desc: "Accredited University" },
  { id: 5, title: "NIRF Ranking 2023", desc: "for Pharmacy Top 100-150" },
];

export const aboutImages = [
  "https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=1200",
  "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200",
  "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=1200",
];

export const news = [
  {
    id: 1,
    date: "09 May, 2026",
    title: "TEDx is Coming to GD Goenka University!",
    image: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=800",
  },
  {
    id: 2,
    date: "28 May - 04 Jun, 2026",
    title: "Shaping Futures for Life",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
  },
  {
    id: 3,
    date: "13 Apr - 17 Apr, 2026",
    title: "Faculty Development Program: Integrating Numbers and Narratives – A Mixed Methods Research in Nursing",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800",
  },
  {
    id: 4,
    date: "15 Mar, 2026",
    title: "Annual Fest 2026 - A Celebration of Culture, Innovation & Excellence",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800",
  },
];

export const socialPosts = [
  { id: 1, likes: 221, image: "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?w=400", caption: "The Expert Insights series at GD Goenka University will host Dr..." },
  { id: 2, likes: 1697, image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=400", caption: "What does The Annual Fest really look like at GD Goenka..." },
  { id: 3, likes: 900, image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400", caption: "Department of Optometry celebrates World Optometry Day..." },
  { id: 4, likes: 101, image: "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?w=400", caption: "Understanding people is one thing. Having the knowledge and..." },
  { id: 5, likes: 1492, image: "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg?w=400", caption: "GD Goenka has been recognised as one of the Best Education..." },
  { id: 6, likes: 350, image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=400", caption: "This summer, curiosity gets a far more interesting address..." },
  { id: 7, likes: 510, image: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=400", caption: "The future of energy will not be built by specialists..." },
  { id: 8, likes: 180, image: "https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=400", caption: "The School of Management, GD Goenka University invites..." },
];

export const navMenu = [
  {
    title: "About Us",
    items: [
      "About GD Goenka University",
      "About GD Goenka Group",
      "Message from Chancellor",
      "Message from Vice Chancellor",
      "Deans and Directors",
      "Governance",
      "Core Values",
      "Recognitions & Affiliations",
      "Rankings & Awards",
      "Vision & Mission",
      "Mandatory Disclosures",
      "Organogram",
    ],
  },
  {
    title: "Academics",
    items: [
      "School of Agricultural Sciences",
      "School of Engineering & Sciences",
      "School of Liberal Arts",
      "School of Hospitality & Tourism",
      "School of Law",
      "School of Management",
      "School of Healthcare and Allied Sciences",
      "UID-School of Design",
      "C-OHSFE",
      "Aerospace and Energy Studies",
      "Summer School @GDGU",
    ],
  },
  {
    title: "Corporate Resource Centre",
    items: [
      "Placement Highlights",
      "Placements Past Record",
      "Student Testimonials",
      "Employability Skills",
      "Placement Process & Efforts",
      "Recruiter Testimonials",
      "Our Recruiters",
    ],
  },
  {
    title: "Facilities",
    items: [
      "Campus Accommodation",
      "Dining & Food Outlets",
      "Transport",
      "Fire Safety & Security",
      "Green Campus",
      "Medical Facilities",
      "Sports & Fitness Centre",
      "Classrooms",
      "Laboratories",
      "Libraries",
      "Auditorium",
    ],
  },
  {
    title: "Internationalisation",
    items: [
      "International Partners",
      "International Department",
      "Student Exchange Programmes",
      "International Admissions",
      "Faculty Exchange",
      "English Foundation Programme",
    ],
  },
  {
    title: "Campus Life",
    items: [
      "Eat on Campus",
      "Play on Campus",
      "Stay on Campus",
      "Culture on Campus",
      "Safety on Campus",
      "Sohna Marathon",
      "Clubs & Societies",
      "Events & Celebrations",
    ],
  },
  {
    title: "Research",
    items: [
      "AVISHKAR Center of Innovation",
      "Overview",
      "Collaborations",
      "Ph.D Scholars",
      "Ethics & Policies",
      "IPR Cell",
      "Awards & Recognitions",
      "Funded Research Projects",
      "Publications",
    ],
  },
  {
    title: "Happenings",
    items: ["News & Events", "Gallery", "Conferences"],
  },
];

export const footerLinks = {
  quickLinks: [
    "Student Verification",
    "Green Campus",
    "Student Grievance Handling",
    "Privacy and Security Policy",
    "Academic Bank of Credits",
    "Internal Committee",
    "Ombudperson",
    "Swayam Portal",
    "RTI Disclosure",
    "Library",
  ],
  rankings: [
    "NIRF",
    "OBE Ranking",
    "QS Ranking",
    "Sustainability Ranking",
    "The Impact Ranking",
    "Times B School",
    "National Service Scheme",
  ],
  group: [
    "About Group",
    "Our Ventures",
    "People & Culture",
    "Media Room",
  ],
};
