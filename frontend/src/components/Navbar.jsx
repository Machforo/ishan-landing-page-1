import React, { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { navMenu, ISHAN_LOGO } from "../mock";

const menuIcons = {
  About: "🏛",
  Colleges: "🎓",
  Admissions: "📝",
  Placements: "💼",
  Research: "🔬",
  Campus: "✨",
  News: "📰",
  Contact: "☎️",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]" : "bg-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 flex items-center justify-between h-[84px]">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={ISHAN_LOGO}
              alt="Ishan Educational Institutions"
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col leading-tight border-l border-gray-200 pl-3">
              <span className="text-[#1e3a8a] text-[15px] font-bold tracking-wide font-serif">
                ISHAN
              </span>
              <span className="text-[#333] text-[9px] tracking-[0.25em] font-semibold">
                EDUCATIONAL INSTITUTIONS
              </span>
              <span className="text-amber-500 text-[9px] italic mt-0.5">Since 1994</span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center" onMouseLeave={() => setActiveMenu(null)}>
            {navMenu.map((m) => (
              <div
                key={m.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(m.title)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-7 text-[12.5px] font-semibold transition-colors uppercase tracking-wide relative ${
                    activeMenu === m.title ? "text-[#1e3a8a]" : "text-gray-800 hover:text-[#1e3a8a]"
                  }`}
                >
                  {m.title}
                  <ChevronDown
                    size={12}
                    className={`opacity-60 transition-transform duration-300 ${
                      activeMenu === m.title ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-5 left-3 right-3 h-[2px] bg-[#1e3a8a] origin-left transition-transform duration-300 ${
                      activeMenu === m.title ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex w-10 h-10 items-center justify-center rounded-full text-gray-700 hover:bg-[#1e3a8a] hover:text-white transition-all"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
            <a
              href="tel:+911204321400"
              className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full text-gray-700 hover:bg-[#1e3a8a] hover:text-white transition-all"
              aria-label="Call"
            >
              <Phone size={16} />
            </a>
            <a
              href="#"
              className="hidden md:inline-flex relative items-center bg-[#1e3a8a] text-white text-[12.5px] font-bold px-6 py-3 rounded-sm shadow-md hover:shadow-xl overflow-hidden group tracking-wider transition"
            >
              <span className="relative z-10">APPLY NOW</span>
              <span className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white">
                APPLY NOW
              </span>
            </a>
            <button
              className="xl:hidden text-[#1e3a8a] p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 border-t border-gray-100 ${
            searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-8 py-3 flex items-center gap-3">
            <Search size={18} className="text-[#1e3a8a]" />
            <input
              className="flex-1 text-sm py-2 outline-none bg-transparent"
              placeholder="Search programmes, colleges, research..."
            />
            <button onClick={() => setSearchOpen(false)}>
              <X size={16} className="text-gray-400 hover:text-gray-700" />
            </button>
          </div>
        </div>

        {activeMenu && (
          <div
            className="absolute left-0 right-0 top-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-t-2 border-[#1e3a8a] animate-[mmFade_0.25s_ease-out]"
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
                    Discover the legacy of Ishan — 30+ years, 5 colleges, 50,000+ alumni.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-5 text-xs font-semibold bg-amber-500 text-[#0a1232] px-4 py-2 rounded-sm hover:bg-amber-400 transition relative z-10"
                  >
                    Know More <ArrowRight size={12} />
                  </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
                  {navMenu
                    .find((x) => x.title === activeMenu)
                    ?.items.map((it, i) => (
                      <a
                        key={it}
                        href="#"
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

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/60 xl:hidden animate-in fade-in" onClick={() => setOpen(false)}>
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
              {navMenu.map((m) => (
                <details key={m.title} className="border-b border-gray-100 group">
                  <summary className="flex items-center justify-between px-3 py-3.5 cursor-pointer text-[14px] font-semibold uppercase text-gray-800 list-none group-open:text-[#1e3a8a]">
                    <span className="flex items-center gap-2">
                      <span className="text-base">{menuIcons[m.title]}</span>
                      {m.title}
                    </span>
                    <ChevronDown size={16} className="group-open:rotate-180 transition" />
                  </summary>
                  <div className="pl-6 pb-2 bg-gray-50">
                    {m.items.map((it) => (
                      <a key={it} href="#" className="block py-2 text-[13px] text-gray-600 hover:text-[#1e3a8a]">
                        {it}
                      </a>
                    ))}
                  </div>
                </details>
              ))}
              <a href="#" className="block my-4 mx-3 text-center bg-[#1e3a8a] text-white font-semibold py-3 rounded-sm">
                APPLY NOW
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
