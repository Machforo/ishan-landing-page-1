import React, { useState } from "react";
import { programCategories, programs } from "../mock";
import { ArrowRight } from "lucide-react";

export default function Programmes() {
  const [active, setActive] = useState("ug");
  const list = programs[active] || [];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#8B0000] text-xs font-semibold tracking-[0.25em] uppercase">
              Academic Programmes
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 max-w-xl leading-tight">
              Discover your <span className="text-[#8B0000]">future-ready</span> programme
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
                active === c.id
                  ? "text-[#8B0000]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {c.label}
              {active === c.id && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#8B0000]" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group relative p-5 border border-gray-200 hover:border-[#8B0000] bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[11px] font-semibold text-[#8B0000] tracking-wider uppercase mb-2">
                {p.school}
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-[#8B0000] transition mb-4 pr-6">
                {p.name}
              </h3>
              <ArrowRight
                size={18}
                className="absolute bottom-5 right-5 text-gray-400 group-hover:text-[#8B0000] group-hover:translate-x-1 transition"
              />
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <a
            href="#"
            className="inline-flex items-center bg-[#8B0000] hover:bg-[#6d0000] text-white font-semibold px-7 py-3 text-sm uppercase tracking-wider transition shadow"
          >
            Apply Now
          </a>
          <a
            href="#"
            className="inline-flex items-center border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white font-semibold px-7 py-3 text-sm uppercase tracking-wider transition"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
