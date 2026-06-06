import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ArrowRight, MapPin, Users, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function CampusLife() {
  const { data } = useContext(DataContext);
  const [active, setActive] = useState(null); // facility object or null
  const [photo, setPhoto] = useState(0);

  useEffect(() => {
    if (active) {
      setPhoto(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setPhoto((p) => (p + 1) % active.gallery.length);
      if (e.key === "ArrowLeft")
        setPhoto((p) => (p - 1 + active.gallery.length) % active.gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section
      id="campus"
      className="py-16 md:py-24 bg-[#f5f7fb] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1e3a8a]/5 rounded-full blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-[#1e3a8a]" /> Campus Life
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight max-w-2xl">
              A Community of <span className="italic text-[#1e3a8a]">Possibilities</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal direction="left">
            <div className="flex flex-col justify-between bg-gradient-to-br from-[#1e3a8a] to-[#0a1232] text-white p-8 relative overflow-hidden h-full min-h-[480px]">
              <div>
                <div className="text-6xl md:text-7xl font-serif font-bold text-amber-400">
                  <Counter end={data.campusLifeStats?.nationalitiesCount || 45} suffix="+" />
                </div>
                <div className="text-sm tracking-wide mt-2">Nationalities</div>
                <div className="text-lg font-serif">on Campus</div>
              </div>
              <div className="mt-8 space-y-3 text-sm relative z-10">
                {data.campusLinks.map((l) => (
                  <a
                    key={l}
                    href="#campus"
                    className="flex items-center justify-between border-b border-white/20 pb-2 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 group"
                  >
                    <span>{l}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </a>
                ))}
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-10">
                <Users size={220} />
              </div>
              <div className="absolute top-5 right-5 w-20 h-20 border border-white/20 rounded-full" />
              <div className="absolute top-10 right-10 w-10 h-10 border border-amber-400/40 rounded-full" />
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.campusLife.map((c, i) => (
              <Reveal key={c.id} delay={i * 150}>
                <button
                  onClick={() => setActive(c)}
                  className="group relative w-full h-64 md:h-full min-h-[280px] overflow-hidden block text-left"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#1e3a8a]/0 group-hover:bg-[#1e3a8a]/30 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-[#1e3a8a] tracking-widest">
                    {c.gallery.length} PHOTOS
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-serif text-xl font-semibold group-hover:translate-y-[-4px] transition-transform duration-300">
                        {c.title}
                      </h3>
                      <p className="text-xs text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Click to view gallery
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-amber-500 group-hover:text-[#0a1232] transition-all group-hover:rotate-[-45deg]">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.facilityLinks.map((f, i) => (
                <Reveal key={f} delay={300 + i * 100}>
                  <a
                    href="#campus"
                    className="group bg-white p-6 flex items-center justify-between border-l-4 border-[#1e3a8a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition">
                        {i === 0 ? <MapPin size={20} /> : <Trophy size={20} />}
                      </div>
                      <span className="font-serif text-lg font-semibold text-gray-900">{f}</span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-gray-400 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-all"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 text-white w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500 hover:text-[#0a1232] flex items-center justify-center transition z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-white text-center">
              <div className="inline-block px-3 py-1 bg-amber-500 text-[#0a1232] text-[10px] font-bold tracking-widest mb-2">
                GALLERY
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">{active.title}</h3>
              <p className="text-sm text-white/70 max-w-xl mx-auto mt-2">{active.description}</p>
            </div>

            <div className="relative aspect-[16/9] bg-black overflow-hidden">
              {active.gallery.map((g, i) => (
                <img
                  key={i}
                  src={g}
                  alt={`${active.title} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === photo ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <button
                onClick={() => setPhoto((p) => (p - 1 + active.gallery.length) % active.gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-amber-500 hover:text-[#0a1232] text-white backdrop-blur flex items-center justify-center transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setPhoto((p) => (p + 1) % active.gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-amber-500 hover:text-[#0a1232] text-white backdrop-blur flex items-center justify-center transition"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 font-semibold">
                {photo + 1} / {active.gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 justify-center flex-wrap">
              {active.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setPhoto(i)}
                  className={`w-16 h-16 overflow-hidden border-2 transition ${
                    i === photo ? "border-amber-500" : "border-white/20 hover:border-white/60"
                  }`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
