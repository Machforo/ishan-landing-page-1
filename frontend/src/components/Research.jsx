import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ArrowRight, Microscope } from "lucide-react";
import Reveal from "./Reveal";

export default function Research() {
  const { data } = useContext(DataContext);
  return (
    <section id="research" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute -left-6 top-20 hidden lg:block">
        <div className="w-1 h-64 bg-gradient-to-b from-[#1e3a8a] to-transparent" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Reveal direction="left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]">
              <Microscope size={18} />
            </div>
            <span className="text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
              Research
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight whitespace-pre-line">
            {data.researchSection?.heading || "Building blocks\nfor breakthroughs"}
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed text-[15px] max-w-lg">
            {data.researchSection?.subheading || "At Ishan Educational Institutions, research is a commitment to discovery."}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-[#1e3a8a] font-semibold border-b-2 border-[#1e3a8a] pb-1 hover:gap-3 transition-all"
          >
            {data.researchSection?.ctaText|| "Explore Research"} <ArrowRight size={16} />
          </a>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {data.researchLinks.map((l, i) => (
              <a
                key={l}
                href="#"
                className="flex items-center justify-between border-b border-gray-200 py-3 text-[14px] text-gray-800 hover:text-[#1e3a8a] hover:border-[#1e3a8a] group transition-all"
                style={{ animation: `fadeUp 0.5s ease-out ${i * 0.08}s both` }}
              >
                <span className="group-hover:translate-x-1 transition">{l}</span>
                <ArrowRight
                  size={14}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.researchCards.map((c, i) => (
            <Reveal key={c.id} delay={i * 150} direction="right">
              <a href="#" className="group relative overflow-hidden block">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white translate-y-0 group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase mb-1">
                    {c.tag}
                  </div>
                  <h3 className="font-serif text-lg font-semibold leading-snug">{c.title}</h3>
                  <div className="mt-3 w-10 h-10 rounded-full bg-white/20 group-hover:bg-[#1e3a8a] flex items-center justify-center transition-all group-hover:rotate-[-45deg]">
                    <ArrowRight size={16} />
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
