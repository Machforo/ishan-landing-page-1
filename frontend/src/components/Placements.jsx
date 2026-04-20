import React from "react";
import { placementStats, recruiters, testimonials } from "../mock";
import { ArrowRight, Quote, Building2 } from "lucide-react";

export default function Placements() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#faf7f2] to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/31040302/pexels-photo-31040302.jpeg?w=900"
              alt="Placements"
              className="w-full h-[420px] object-cover rounded"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#8B0000] text-white p-6 hidden md:block">
              <div className="text-5xl font-serif font-bold text-amber-300">100%</div>
              <div className="text-xs uppercase tracking-wider mt-1">Placement Assistance</div>
            </div>
          </div>

          <div>
            <span className="text-[#8B0000] text-xs font-semibold tracking-[0.25em] uppercase">
              Campus Placements
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Placement Support at <br />
              <span className="italic text-[#8B0000]">GD Goenka University</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
              Our dedicated career advisory and placement team provides comprehensive career
              counselling to identify the unique and distinctive goals of each student.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-[#8B0000] font-semibold border-b-2 border-[#8B0000] pb-1 hover:gap-3 transition-all"
            >
              Placement Process <ArrowRight size={16} />
            </a>

            <div className="grid grid-cols-2 gap-5 mt-8">
              {placementStats.map((s) => (
                <div key={s.label} className="p-5 bg-white border-l-4 border-[#8B0000] shadow-sm">
                  <div className="text-4xl font-serif font-bold text-[#8B0000]">{s.num}</div>
                  <div className="text-xs text-gray-600 whitespace-pre-line mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* recruiters marquee */}
        <div className="mt-20">
          <h3 className="text-center font-serif text-2xl font-semibold text-gray-800 mb-8">
            Our Top Recruiters
          </h3>
          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-[rmarquee_28s_linear_infinite]">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 w-40 h-20 bg-white border border-gray-200 flex items-center justify-center gap-2 shadow-sm rounded"
                >
                  <Building2 size={18} className="text-[#8B0000]" />
                  <span className="font-semibold text-gray-700 text-sm">{r}</span>
                </div>
              ))}
            </div>
            <style>{`@keyframes rmarquee { from {transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
          </div>
        </div>

        {/* testimonials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 border-t-4 border-[#8B0000] shadow-sm hover:shadow-lg transition"
            >
              <Quote size={30} className="text-amber-400 mb-3" />
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">
                    {t.course} • {t.batch}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
