import React from "react";
import { news } from "../mock";
import { ArrowRight, Calendar } from "lucide-react";

export default function Happenings() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-5">
          <div>
            <span className="text-[#8B0000] text-xs font-semibold tracking-[0.25em] uppercase">
              News & Events
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Happenings @ <span className="italic text-[#8B0000]">GD Goenka University</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#8B0000] font-semibold border-b-2 border-[#8B0000] pb-1 hover:gap-3 transition-all"
          >
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((n) => (
            <a
              key={n.id}
              href="#"
              className="group bg-white border border-gray-100 hover:border-[#8B0000] hover:shadow-xl transition-all overflow-hidden block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8B0000] uppercase tracking-wider mb-3">
                  <Calendar size={13} />
                  {n.date}
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-gray-900 leading-snug group-hover:text-[#8B0000] transition line-clamp-3">
                  {n.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-500 group-hover:text-[#8B0000] transition">
                  READ MORE <ArrowRight size={13} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
