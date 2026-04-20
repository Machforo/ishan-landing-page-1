import React from "react";
import { campusLife, campusLinks, facilityLinks } from "../mock";
import { ArrowRight, MapPin, Users, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function CampusLife() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f7fb] relative overflow-hidden">
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
            <div className="flex flex-col justify-between bg-[#1e3a8a] text-white p-8 relative overflow-hidden h-full min-h-[480px]">
              <div>
                <div className="text-6xl md:text-7xl font-serif font-bold text-amber-400">
                  <Counter end={45} suffix="+" />
                </div>
                <div className="text-sm tracking-wide mt-2">Nationalities</div>
                <div className="text-lg font-serif">on Campus</div>
              </div>
              <div className="mt-8 space-y-3 text-sm relative z-10">
                {campusLinks.map((l) => (
                  <a
                    key={l}
                    href="#"
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
            {campusLife.map((c, i) => (
              <Reveal key={c.id} delay={i * 150}>
                <a
                  href="#"
                  className="group relative h-64 md:h-full min-h-[280px] overflow-hidden block"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#1e3a8a]/0 group-hover:bg-[#1e3a8a]/30 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between text-white">
                    <h3 className="font-serif text-xl font-semibold group-hover:translate-y-[-4px] transition-transform duration-300">
                      {c.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-[#1e3a8a] transition-all group-hover:rotate-[-45deg]">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilityLinks.map((f, i) => (
                <Reveal key={f} delay={300 + i * 100}>
                  <a
                    href="#"
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
    </section>
  );
}
