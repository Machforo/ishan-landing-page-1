import React, { useRef } from "react";
import { colleges } from "../../mock";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";

export default function CollegesStrip() {
  const scroller = useRef(null);
  const scroll = (dir) => {
    const s = scroller.current;
    if (!s) return;
    s.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section
      id="colleges"
      className="relative py-20 md:py-24 bg-[#f8f7f3] overflow-hidden"
      data-testid="v2-colleges"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #0a1232 1.2px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[#1e3a8a] text-[11px] font-bold tracking-[0.3em] uppercase">
                <span className="w-8 h-px bg-[#1e3a8a]" /> Our 5 Colleges
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0a1232] leading-tight mt-3 max-w-2xl">
                Specialist faculties.
                <br />
                <span className="italic text-[#1e3a8a]">One campus.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll(-1)}
                className="w-11 h-11 rounded-full border border-[#1e3a8a]/30 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition flex items-center justify-center"
                aria-label="Scroll left"
                data-testid="v2-colleges-prev"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-11 h-11 rounded-full border border-[#1e3a8a]/30 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition flex items-center justify-center"
                aria-label="Scroll right"
                data-testid="v2-colleges-next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 lg:-mx-10 px-6 lg:px-10 scrollbar-thin"
          style={{ scrollbarWidth: "thin" }}
        >
          {colleges.map((c, i) => (
            <article
              key={c.id}
              className="group snap-start shrink-0 w-[320px] md:w-[380px] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
              data-testid={`v2-college-card-${c.id}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1232]/90 via-[#0a1232]/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-amber-500 text-[#0a1232] text-[10px] font-black tracking-widest px-2.5 py-1">
                  {c.accreditation}
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[10px] tracking-[0.25em] text-amber-300 uppercase font-bold">
                    {c.short}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-tight">
                    {c.name}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[13px] text-gray-600 leading-relaxed min-h-[60px]">
                  {c.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-[11px] font-semibold text-[#1e3a8a] tracking-wide">
                    {c.programs}
                  </div>
                  <a
                    href="#programmes"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0a1232] group-hover:text-[#1e3a8a] transition"
                  >
                    EXPLORE <ArrowRight size={11} />
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#1e3a8a] via-amber-400 to-[#1e3a8a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
