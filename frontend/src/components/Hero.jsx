import React, { useState, useEffect } from "react";
import { heroSlides } from "../mock";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[idx];

  return (
    <section className="relative w-full h-[560px] md:h-[640px] overflow-hidden bg-black">
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={s.image} alt={s.tag} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center text-white">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-[#8B0000] text-[11px] font-bold tracking-[0.2em] mb-5 animate-in fade-in slide-in-from-left-4 duration-700">
            {slide.tag}
          </div>
          <h1
            key={slide.id}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-in fade-in slide-in-from-left-6 duration-700"
          >
            {slide.title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-5 max-w-xl">{slide.subtitle}</p>

          {slide.specialisations && (
            <div className="mb-6">
              <h4 className="text-amber-300 font-semibold text-sm mb-2 tracking-wide">
                Specialisations
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm max-w-lg">
                {slide.specialisations.map((s) => (
                  <span key={s} className="text-gray-100">
                    • {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {slide.programs && (
            <div className="flex flex-wrap gap-4 mb-6">
              {slide.programs.map((p) => (
                <div
                  key={p}
                  className="text-lg md:text-xl font-serif font-semibold text-amber-300 border-b-2 border-amber-300/40 pb-1"
                >
                  {p}
                </div>
              ))}
            </div>
          )}

          {slide.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {slide.stats.map((st) => (
                <div key={st.label}>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-amber-300">{st.num}</div>
                  <div className="text-xs text-gray-200 leading-tight">{st.label}</div>
                </div>
              ))}
            </div>
          )}

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#8B0000] font-bold px-7 py-3 text-sm uppercase tracking-wider hover:bg-amber-200 transition-all shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </div>

      <button
        onClick={() => setIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur flex items-center justify-center transition"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => setIdx((i) => (i + 1) % heroSlides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur flex items-center justify-center transition"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-8 bg-amber-300" : "w-4 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
