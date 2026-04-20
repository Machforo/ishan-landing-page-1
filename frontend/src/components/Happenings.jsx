import React from "react";
import { news } from "../mock";
import { ArrowRight, Calendar } from "lucide-react";
import Reveal from "./Reveal";

export default function Happenings() {
  return (
    <section id="news" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-5">
            <div>
              <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-8 h-px bg-[#1e3a8a]" /> News & Events
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                Happenings @ <span className="italic text-[#1e3a8a]">GD Goenka</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold border-b-2 border-[#1e3a8a] pb-1 hover:gap-3 transition-all"
            >
              View All <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((n, i) => (
            <Reveal key={n.id} delay={i * 120}>
              <a
                href="#"
                className="group bg-white border border-gray-100 hover:border-[#1e3a8a] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block h-full"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white text-[10px] font-bold tracking-wider px-2.5 py-1">
                    NEW
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                    <Calendar size={13} />
                    {n.date}
                  </div>
                  <h3 className="font-serif text-[17px] font-semibold text-gray-900 leading-snug group-hover:text-[#1e3a8a] transition line-clamp-3 min-h-[72px]">
                    {n.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-500 group-hover:text-[#1e3a8a] transition">
                    READ MORE{" "}
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition"
                    />
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
