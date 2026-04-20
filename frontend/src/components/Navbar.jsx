import React, { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { navMenu } from "../mock";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 flex items-center justify-between h-[76px]">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center shadow-md">
              <span className="text-white font-serif text-xl font-bold">GD</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#8B0000] text-[15px] font-bold tracking-wide font-serif">GD GOENKA</span>
              <span className="text-[#333] text-[11px] tracking-[0.2em] font-medium">UNIVERSITY</span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-1">
            {navMenu.map((m) => (
              <div
                key={m.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(m.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 px-3 py-5 text-[13px] font-semibold text-gray-800 hover:text-[#8B0000] transition-colors uppercase tracking-wide">
                  {m.title}
                  <ChevronDown size={12} className="opacity-60" />
                </button>
                {activeMenu === m.title && (
                  <div className="absolute top-full left-0 w-[280px] bg-white shadow-xl border-t-2 border-[#8B0000] py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    {m.items.map((it) => (
                      <a
                        key={it}
                        href="#"
                        className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-[#8B0000] hover:text-white transition-colors"
                      >
                        {it}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:block text-gray-700 hover:text-[#8B0000] p-1 transition">
              <Search size={18} />
            </button>
            <a
              href="#"
              className="hidden md:inline-flex items-center bg-[#8B0000] hover:bg-[#6d0000] text-white text-[13px] font-semibold px-5 py-2.5 rounded-sm transition-all shadow-md hover:shadow-lg"
            >
              APPLY NOW
            </a>
            <button
              className="xl:hidden text-[#8B0000] p-1"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/60 xl:hidden" onClick={() => setOpen(false)}>
          <aside
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b">
              <span className="text-[#8B0000] font-bold font-serif">GD GOENKA UNIVERSITY</span>
              <button onClick={() => setOpen(false)} className="text-gray-700" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="px-2 py-3">
              {navMenu.map((m) => (
                <details key={m.title} className="border-b border-gray-100">
                  <summary className="flex items-center justify-between px-3 py-3 cursor-pointer text-[14px] font-semibold uppercase text-gray-800">
                    {m.title}
                    <ChevronDown size={16} />
                  </summary>
                  <div className="pl-4 pb-2">
                    {m.items.map((it) => (
                      <a key={it} href="#" className="block py-2 text-[13px] text-gray-600 hover:text-[#8B0000]">
                        {it}
                      </a>
                    ))}
                  </div>
                </details>
              ))}
              <a href="#" className="block my-4 mx-3 text-center bg-[#8B0000] text-white font-semibold py-3 rounded-sm">
                APPLY NOW
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
