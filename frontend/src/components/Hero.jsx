import React, { useState, useEffect } from "react";
import { heroSlides } from "../mock";
import { ChevronLeft, ChevronRight, Play, Search } from "lucide-react";
import NewsFlash from "./NewsFlash";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("Undergraduate");

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[idx];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative w-full h-[100svh] min-h-[640px] max-h-[820px] overflow-hidden bg-[#0a1232]"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.tag}
            className={`w-full h-full object-cover ${i === idx ? "animate-kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1232]/90 via-[#0a1232]/55 to-[#0a1232]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1232]/75 via-transparent to-[#0a1232]/40" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center pt-24 pb-28 text-white">
        <div className="inline-flex items-center gap-2 text-white/80 text-[11px] tracking-[0.35em] uppercase mb-4 slide-enter-1">
          <span className="w-8 h-px bg-amber-400" />
          Admissions 2026-27
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-center">
          <div key={slide.id} className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-[#1e3a8a] text-[10px] font-bold tracking-[0.25em] mb-4 slide-enter-1">
              {slide.tag}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.1] mb-4 slide-enter-2">
              {slide.title}
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-5 max-w-xl slide-enter-3">
              {slide.subtitle}
            </p>

            {slide.specialisations && (
              <div className="mb-5 slide-enter-4">
                <h4 className="text-amber-400 font-semibold text-xs mb-2 tracking-wide">
                  Specialisations
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[13px] max-w-lg">
                  {slide.specialisations.slice(0, 6).map((s) => (
                    <span key={s} className="text-gray-100">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {slide.programs && (
              <div className="flex flex-wrap gap-4 mb-5 slide-enter-4">
                {slide.programs.map((p) => (
                  <div
                    key={p}
                    className="text-base md:text-lg font-serif font-semibold text-amber-400 border-b-2 border-amber-400/40 pb-1"
                  >
                    {p}
                  </div>
                ))}
              </div>
            )}

            {slide.stats && (
              <div className="grid grid-cols-4 gap-3 mb-5 max-w-xl slide-enter-4">
                {slide.stats.map((st) => (
                  <div key={st.label}>
                    <div className="text-2xl md:text-3xl font-serif font-bold text-amber-400">
                      {st.num}
                    </div>
                    <div className="text-[11px] text-gray-200 leading-tight">{st.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 slide-enter-5">
              <button
                onClick={() => scrollToId("contact")}
                className="relative inline-flex items-center gap-2 bg-amber-500 text-[#0a1232] font-bold px-6 py-3 text-sm uppercase tracking-wider shadow-xl overflow-hidden group"
              >
                <span className="relative z-10">Apply Now</span>
                <span className="absolute inset-0 bg-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToId("campus")}
                className="group inline-flex items-center gap-2.5 text-white font-semibold text-sm"
              >
                <span className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-[#0a1232] transition">
                  <Play size={13} fill="currentColor" />
                </span>
                Virtual Tour
              </button>
            </div>
          </div>

          {/* Bigger NewsFlash */}
          <div className="hidden lg:block slide-enter-5">
            <NewsFlash />
          </div>
        </div>
      </div>

      {/* Find Programmes bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#0a1232] via-[#0a1232]/90 to-transparent pt-8 pb-4">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 bg-white shadow-2xl">
            <div className="pl-4 pr-2 py-3">
              <Search className="text-[#1e3a8a]" size={18} />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") scrollToId("programmes");
              }}
              placeholder="Find Programmes"
              className="flex-1 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            <div className="hidden md:flex items-center gap-4 px-3 text-[12px] font-semibold text-gray-700">
              {["Undergraduate", "Postgraduate", "Diploma", "Doctoral"].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLevel(l);
                    scrollToId("programmes");
                  }}
                  className={`hover:text-[#1e3a8a] transition ${
                    level === l ? "text-[#1e3a8a]" : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToId("contact")}
              className="bg-[#1e3a8a] hover:bg-[#152a5e] text-white font-bold px-6 py-3 text-xs uppercase tracking-wider transition"
            >
              Apply Now
            </button>
            <button
              onClick={() => scrollToId("programmes")}
              className="bg-amber-500 hover:bg-amber-400 text-[#0a1232] font-bold px-6 py-3 text-xs uppercase tracking-wider transition"
            >
              View All
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-[#1e3a8a] hover:scale-110 text-white backdrop-blur flex items-center justify-center transition-all"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setIdx((i) => (i + 1) % heroSlides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-[#1e3a8a] hover:scale-110 text-white backdrop-blur flex items-center justify-center transition-all"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === idx ? "w-10 bg-amber-400" : "w-4 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes kenburns { 0% { transform: scale(1) translate(0,0);} 100% { transform: scale(1.12) translate(-1%, -1%);} }
        .animate-kenburns { animation: kenburns 8s ease-out forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .slide-enter-1 { animation: slideUp 0.7s ease-out 0.1s both; }
        .slide-enter-2 { animation: slideUp 0.8s ease-out 0.25s both; }
        .slide-enter-3 { animation: slideUp 0.8s ease-out 0.4s both; }
        .slide-enter-4 { animation: slideUp 0.8s ease-out 0.55s both; }
        .slide-enter-5 { animation: slideUp 0.8s ease-out 0.7s both; }
      `}</style>
    </section>
  );
}
