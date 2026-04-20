import React, { useState } from "react";
import { programCategories, programs } from "../mock";
import { ArrowRight, BookOpen } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Programmes() {
  const [active, setActive] = useState("ug");
  const list = programs[active] || [];
  const [headRef, headIn] = useReveal();

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-[#1e3a8a]" /> Academic Programmes
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 max-w-xl leading-tight">
              Discover your <span className="text-[#1e3a8a] italic">future-ready</span> programme
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-[15px] leading-relaxed">
            Explore 100+ future-focused programmes across 10 schools — co-designed with global
            leaders like NVIDIA, BOSCH, L&T, CompTIA and more.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {programCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-3 text-sm font-semibold transition-all relative ${
                active === c.id ? "text-[#1e3a8a]" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {c.label}
              <span
                className={`absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#1e3a8a] origin-left transition-transform duration-300 ${
                  active === c.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p, i) => (
            <a
              key={`${active}-${i}`}
              href="#"
              className="group relative p-5 border border-gray-200 hover:border-[#1e3a8a] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animation: `cardFade 0.5s ease-out ${i * 0.04}s both` }}
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1e3a8a] tracking-wider uppercase mb-2">
                <BookOpen size={12} />
                {p.school}
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-[#1e3a8a] transition mb-4 pr-6">
                {p.name}
              </h3>
              <ArrowRight
                size={18}
                className="absolute bottom-5 right-5 text-gray-400 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-all duration-300"
              />
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1e3a8a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <a
            href="#"
            className="relative inline-flex items-center bg-[#1e3a8a] text-white font-semibold px-7 py-3 text-sm uppercase tracking-wider shadow overflow-hidden group"
          >
            <span className="relative z-10">Apply Now</span>
            <span className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[#1e3a8a]">
              Apply Now
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-semibold px-7 py-3 text-sm uppercase tracking-wider transition"
          >
            View All
          </a>
        </div>
      </div>
      <style>{`
        @keyframes cardFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
