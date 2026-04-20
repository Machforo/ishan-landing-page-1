import React from "react";
import { campusLife, campusLinks, facilityLinks } from "../mock";
import { ArrowRight, MapPin, Users, Trophy } from "lucide-react";

export default function CampusLife() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <span className="text-[#8B0000] text-xs font-semibold tracking-[0.25em] uppercase">
            Campus Life
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight max-w-2xl">
            A Community of <span className="italic text-[#8B0000]">Possibilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 flex flex-col justify-between bg-[#8B0000] text-white p-8 relative overflow-hidden">
            <div>
              <div className="text-6xl md:text-7xl font-serif font-bold text-amber-300">45+</div>
              <div className="text-sm tracking-wide mt-2">Nationalities</div>
              <div className="text-lg font-serif">on Campus</div>
            </div>
            <div className="mt-8 space-y-3 text-sm">
              {campusLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="flex items-center justify-between border-b border-white/20 pb-2 hover:text-amber-300 transition"
                >
                  <span>{l}</span>
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-10">
              <Users size={180} />
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusLife.map((c) => (
              <a
                key={c.id}
                href="#"
                className="group relative h-64 md:h-full min-h-[280px] overflow-hidden block"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between text-white">
                  <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
                  <ArrowRight
                    size={22}
                    className="bg-white/20 backdrop-blur p-1 rounded-full group-hover:bg-[#8B0000] transition"
                  />
                </div>
              </a>
            ))}

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilityLinks.map((f, i) => (
                <a
                  key={f}
                  href="#"
                  className="group bg-white p-6 flex items-center justify-between border-l-4 border-[#8B0000] hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#8B0000]/10 flex items-center justify-center text-[#8B0000]">
                      {i === 0 ? <MapPin size={20} /> : <Trophy size={20} />}
                    </div>
                    <span className="font-serif text-lg font-semibold text-gray-900">{f}</span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-[#8B0000] group-hover:translate-x-1 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
