import React from "react";
import { researchCards, researchLinks } from "../mock";
import { ArrowRight, Microscope } from "lucide-react";

export default function Research() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute -left-6 top-20 hidden lg:block">
        <div className="w-1 h-64 bg-gradient-to-b from-[#8B0000] to-transparent" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8B0000]/10 flex items-center justify-center text-[#8B0000]">
              <Microscope size={18} />
            </div>
            <span className="text-[#8B0000] text-xs font-semibold tracking-[0.25em] uppercase">
              Research
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building blocks <br />
            for <span className="italic text-[#8B0000]">breakthroughs</span>
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed text-[15px] max-w-lg">
            At GD Goenka University, research is a commitment to discovery. Explore publications,
            funded projects and collaborations across disciplines.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-[#8B0000] font-semibold border-b-2 border-[#8B0000] pb-1 hover:gap-3 transition-all"
          >
            Explore Research <ArrowRight size={16} />
          </a>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {researchLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="flex items-center justify-between border-b border-gray-200 py-3 text-[14px] text-gray-800 hover:text-[#8B0000] group transition"
              >
                <span>{l}</span>
                <ArrowRight
                  size={14}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchCards.map((c) => (
            <a key={c.id} href="#" className="group relative overflow-hidden block">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-xs text-amber-300 font-semibold tracking-wider uppercase mb-1">
                  {c.tag}
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug">{c.title}</h3>
                <div className="mt-3 w-9 h-9 rounded-full bg-white/20 group-hover:bg-[#8B0000] flex items-center justify-center transition">
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
