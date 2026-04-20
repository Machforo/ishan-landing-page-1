import React from "react";
import { placementStats, recruiters, testimonials } from "../mock";
import { ArrowRight, Quote, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Placements() {
  return (
    <section id="placements" className="py-16 md:py-24 bg-gradient-to-b from-[#f5f7fb] to-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/31040302/pexels-photo-31040302.jpeg?w=900"
                alt="Placements"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/30 to-transparent" />
              <div className="absolute -bottom-6 -right-6 bg-[#1e3a8a] text-white p-6 hidden md:block shadow-xl">
                <div className="text-5xl font-serif font-bold text-amber-400">100%</div>
                <div className="text-xs uppercase tracking-wider mt-1">Placement Assistance</div>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2">
                <div className="text-xs font-semibold text-[#1e3a8a] tracking-widest">LIVE</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-[#1e3a8a]" /> Campus Placements
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Placement Support at <br />
              <span className="italic text-[#1e3a8a]">GD Goenka University</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
              Our dedicated career advisory and placement team provides comprehensive career
              counselling to identify the unique and distinctive goals of each student.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-[#1e3a8a] font-semibold border-b-2 border-[#1e3a8a] pb-1 hover:gap-3 transition-all"
            >
              Placement Process <ArrowRight size={16} />
            </a>

            <div className="grid grid-cols-2 gap-5 mt-8">
              {placementStats.map((s, i) => (
                <div
                  key={s.label}
                  className="p-5 bg-white border-l-4 border-[#1e3a8a] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                  style={{ animation: `fadeUp 0.6s ease-out ${i * 0.1}s both` }}
                >
                  <div className="text-4xl font-serif font-bold text-[#1e3a8a]">
                    <Counter end={parseInt(s.num, 10)} />
                  </div>
                  <div className="text-xs text-gray-600 whitespace-pre-line mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-serif text-2xl font-semibold text-gray-800 mb-8">
              Our Top Recruiters
            </h3>
          </Reveal>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f7fb] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 animate-[rmarquee_32s_linear_infinite]">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 w-44 h-20 bg-white border border-gray-200 flex items-center justify-center gap-2 shadow-sm rounded hover:shadow-md hover:border-[#1e3a8a] transition-all"
                >
                  <Building2 size={18} className="text-[#1e3a8a]" />
                  <span className="font-semibold text-gray-700 text-sm">{r}</span>
                </div>
              ))}
            </div>
            <style>{`@keyframes rmarquee { from {transform: translateX(0);} to { transform: translateX(-50%);} } @keyframes fadeUp { from { opacity: 0; transform: translateY(16px);} to { opacity: 1; transform: translateY(0);} }`}</style>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 150}>
              <div className="group bg-white p-7 border-t-4 border-[#1e3a8a] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <Quote size={32} className="text-amber-400 mb-3 group-hover:scale-110 transition" />
                <p className="text-gray-700 text-[15px] leading-relaxed mb-6 italic">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-[#1e3a8a]/10" />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">
                      {t.course} • {t.batch}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
