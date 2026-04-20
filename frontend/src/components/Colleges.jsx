import React from "react";
import { colleges } from "../mock";
import { ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Colleges() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, #1e3a8a 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-8 h-px bg-[#1e3a8a]" /> Our 5 Colleges
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight max-w-2xl">
                Five colleges. One <span className="italic text-[#1e3a8a]">unified legacy</span> of excellence.
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-[15px] leading-relaxed">
              Across Law, Management, Pharmacy, Ayurveda and Education — choose your calling from
              the Ishan ecosystem, all approved by respective national regulators.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <a
                href="#"
                className="group block bg-white border border-gray-200 hover:border-[#1e3a8a] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1232] via-[#0a1232]/40 to-transparent" />
                  <div className="absolute top-3 left-3 bg-amber-500 text-[#0a1232] px-2.5 py-1 text-[10px] font-bold tracking-widest">
                    {c.short}
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-[#1e3a8a] uppercase">
                    <ShieldCheck size={12} />
                    {c.accreditation}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[20px] font-bold text-gray-900 leading-snug group-hover:text-[#1e3a8a] transition mb-2">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{c.desc}</p>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-5">
                    <GraduationCap size={13} />
                    <span className="truncate">{c.programs}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-[#1e3a8a] transition">
                      EXPLORE COLLEGE
                    </span>
                    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#1e3a8a] group-hover:border-[#1e3a8a] group-hover:text-white text-[#1e3a8a] transition-all">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
