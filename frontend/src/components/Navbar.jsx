import React, { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import TopBar from "./TopBar";

const SECTION_MAP = {
  "About Ishan": "about", "Chairman's Message": "about", "Mission, Vision & Values": "about",
  "Awards & Rankings": "about", "Approvals & Affiliations": "about", "Group Timeline (Since 1994)": "about",
  "Ishan Institute of Law": "colleges", "Ishan Institute of Management & Technology": "colleges",
  "Ishan Institute of Pharmacy": "colleges", "Ishan Ayurvedic Medical Sciences": "colleges",
  "Ishan Institute of Education": "colleges", "All Colleges, Gateway": "colleges",
  "Admissions Overview": "programmes", "All UG + PG Programs": "programmes", Scholarships: "programmes",
  "International / NRI Admissions": "programmes", "Fee Structure": "programmes", "How to Apply": "programmes",
  "Placements Overview": "placements", "Our Recruiters": "placements", "Alumni Network": "placements",
  "Careers @ Ishan": "placements", "Training & Development": "placements",
  "Research Hub": "research", "Ishan Management Journal": "research", "Ishan Law Review": "research",
  "Pharmaceutical Research": "research", "Funded Projects": "research", Publications: "research",
  "Campus Life": "campus", "Hostel & Accommodation": "campus", "Sports & Fitness": "campus",
  Libraries: "campus", "Events Calendar": "news", "Social Media Hub": "social",
  "News & Updates": "news", Gallery: "news",
  "Contact Us": "contact", "Mandatory Disclosures": "contact", "Anti-Ragging Zone": "contact",
  "Grievance Redressal": "contact", "Downloads Hub": "contact",
};

const MENU_DEFAULTS = {
  About: "about", Colleges: "colleges", Admissions: "programmes", Placements: "placements",
  Research: "research", Campus: "campus", News: "news", Contact: "contact",
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

const menuIcons = {
  About: "🏛", Colleges: "🎓", Admissions: "📝", Placements: "💼",
  Research: "🔬", Campus: "✨", News: "📰", Contact: "☎",
};

export default function Navbar() {
  const { data } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, target) => {
    e.preventDefault();
    setActiveMenu(null);
    setOpen(false);
    scrollTo(target);
  };

  const darkText = false;

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#1e3a8a] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)]" : "bg-[#0a1232]/80 backdrop-blur-md"
        }`}
      >
        <TopBar scrolled={scrolled} />
        <header className="w-full">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-8 flex items-center justify-between h-[82px] gap-4">
            <a
              href="#top"
              onClick={(e) => handleNav(e, "top")}
              className="flex items-center gap-3 group shrink-0"
            >
              <img
                src={data.ISHAN_LOGO}
                alt="Ishan Educational Institutions"
                className={`h-14 lg:h-[60px] w-auto object-contain group-hover:scale-105 transition-all ${
                  darkText ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                }`}
              />

            </a>

            <nav
              className="hidden lg:flex items-center"
              onMouseLeave={() => setActiveMenu(null)}
            >
              {data.navMenu.map((m, mi) => (
                <div
                  key={m.title || mi}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(m.title)}
                >
                  <a
                    href={`#${MENU_DEFAULTS[m.title] || "top"}`}
                    onClick={(e) => handleNav(e, MENU_DEFAULTS[m.title] || "top")}
                    className={`flex items-center gap-1 px-2.5 py-7 text-[12px] font-semibold uppercase tracking-wide relative transition-colors ${
                      activeMenu === m.title
                        ? darkText
                          ? "text-[#1e3a8a]"
                          : "text-amber-400"
                        : darkText
                        ? "text-gray-800 hover:text-[#1e3a8a]"
                        : "text-white hover:text-amber-400 drop-shadow"
                    }`}
                  >
                    {m.title}
                    <ChevronDown
                      size={11}
                      className={`opacity-70 transition-transform duration-300 ${
                        activeMenu === m.title ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-5 left-2.5 right-2.5 h-[2px] origin-left transition-transform duration-300 ${
                        darkText ? "bg-[#1e3a8a]" : "bg-amber-400"
                      } ${activeMenu === m.title ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </a>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`hidden md:flex w-10 h-10 items-center justify-center rounded-full transition-all ${
                  darkText
                    ? "text-gray-700 hover:bg-[#1e3a8a] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Search"
              >
                <Search size={16} />
              </button>
              <a
                href="tel:+911204321400"
                className={`hidden lg:flex w-10 h-10 items-center justify-center rounded-full transition-all ${
                  darkText
                    ? "text-gray-700 hover:bg-[#1e3a8a] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNav(e, "contact")}
                className={`hidden md:inline-flex relative items-center text-[12.5px] font-bold px-6 py-3 rounded-sm shadow-md hover:shadow-xl overflow-hidden group tracking-wider transition ${
                  darkText ? "bg-[#1e3a8a] text-white" : "bg-amber-500 text-[#0a1232]"
                }`}
              >
                <span className="relative z-10">APPLY NOW</span>
                <span
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${
                    darkText ? "bg-amber-500" : "bg-white"
                  }`}
                />
                <span
                  className={`absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ${
                    darkText ? "text-white" : "text-[#0a1232]"
                  }`}
                >
                  APPLY NOW
                </span>
              </a>
              <button
                className={`lg:hidden p-2 ${darkText ? "text-[#1e3a8a]" : "text-white"}`}
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            } ${darkText ? "border-t border-gray-100" : "border-t border-white/20"}`}
          >
            <div className="max-w-[1400px] mx-auto px-8 py-3 flex items-center gap-3">
              <Search size={18} className={darkText ? "text-[#1e3a8a]" : "text-white"} />
              <input
                className={`flex-1 text-sm py-2 outline-none bg-transparent ${
                  darkText ? "text-gray-800" : "text-white placeholder:text-white/70"
                }`}
                placeholder="Search programmes, colleges, research..."
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={16} className={darkText ? "text-gray-400" : "text-white/70"} />
              </button>
            </div>
          </div>

          {activeMenu && (
            <div
              className="absolute left-0 right-0 top-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border-t-2 border-[#1e3a8a] animate-[mmFade_0.25s_ease-out]"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-[1400px] mx-auto px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                  <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0a1232] text-white p-7 relative overflow-hidden rounded-sm">
                    <div className="absolute -right-6 -bottom-6 text-[120px] opacity-10">
                      {menuIcons[activeMenu]}
                    </div>
                    <div className="text-xs text-amber-400 font-semibold tracking-[0.2em] uppercase relative z-10">
                      Explore
                    </div>
                    <h3 className="font-serif text-2xl font-bold mt-2 leading-snug relative z-10">
                      {activeMenu}
                    </h3>
                    <p className="text-xs text-white/80 mt-3 relative z-10 leading-relaxed">
                      Discover the legacy of Ishan, 30+ years, 5 colleges, 50,000+ alumni.
                    </p>
                    <a
                      href={`#${MENU_DEFAULTS[activeMenu] || "top"}`}
                      onClick={(e) => handleNav(e, MENU_DEFAULTS[activeMenu] || "top")}
                      className="inline-flex items-center gap-2 mt-5 text-xs font-semibold bg-amber-500 text-[#0a1232] px-4 py-2 rounded-sm hover:bg-amber-400 transition relative z-10"
                    >
                      Know More <ArrowRight size={12} />
                    </a>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
                    {data.navMenu
                      .find((x) => x.title === activeMenu)
                      ?.items.map((it, i) => (
                        <a
                          key={`${it}-${i}`}
                          href={`#${SECTION_MAP[it] || "top"}`}
                          onClick={(e) => handleNav(e, SECTION_MAP[it] || "top")}
                          className="group flex items-center gap-2 py-2.5 border-b border-gray-100 text-[13px] text-gray-700 hover:text-[#1e3a8a] transition-all"
                          style={{ animation: `itemFade 0.35s ease-out ${i * 0.03}s both` }}
                        >
                          <span className="w-1 h-1 rounded-full bg-[#1e3a8a] opacity-0 group-hover:opacity-100 transition" />
                          <span className="flex-1 group-hover:translate-x-1 transition-transform">
                            {it}
                          </span>
                          <ArrowRight
                            size={12}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1e3a8a]"
                          />
                        </a>
                      ))}
                  </div>
                </div>
              </div>
              <style>{`
                @keyframes mmFade { from { opacity: 0; transform: translateY(-8px);} to { opacity: 1; transform: translateY(0);} }
                @keyframes itemFade { from { opacity: 0; transform: translateX(-8px);} to { opacity: 1; transform: translateX(0);} }
              `}</style>
            </div>
          )}
        </header>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 xl:hidden animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <aside
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b bg-[#1e3a8a] text-white">
              <span className="font-serif font-bold">ISHAN EDUCATIONAL INSTITUTIONS</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="px-2 py-3">
              {data.navMenu.map((m, mi) => (
                <details key={m.title || mi} className="border-b border-gray-100 group">
                  <summary className="flex items-center justify-between px-3 py-3.5 cursor-pointer text-[14px] font-semibold uppercase text-gray-800 list-none group-open:text-[#1e3a8a]">
                    <span className="flex items-center gap-2">
                      <span className="text-base">{menuIcons[m.title]}</span>
                      {m.title}
                    </span>
                    <ChevronDown size={16} className="group-open:rotate-180 transition" />
                  </summary>
                  <div className="pl-6 pb-2 bg-gray-50">
                    {m.items.map((it) => (
                      <a
                        key={it}
                        href={`#${SECTION_MAP[it] || "top"}`}
                        onClick={(e) => handleNav(e, SECTION_MAP[it] || "top")}
                        className="block py-2 text-[13px] text-gray-600 hover:text-[#1e3a8a]"
                      >
                        {it}
                      </a>
                    ))}
                  </div>
                </details>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNav(e, "contact")}
                className="block my-4 mx-3 text-center bg-[#1e3a8a] text-white font-semibold py-3 rounded-sm"
              >
                APPLY NOW
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
