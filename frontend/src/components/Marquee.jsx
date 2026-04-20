import React from "react";
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const text =
    "Ishan Educational Institutions — Admissions Open 2026-27: BA/BBA LL.B • LL.M • PGDM • MBA • B.Com • BCA • B.Pharm • BAMS • B.Ed — 30+ years of academic excellence";
  return (
    <div className="w-full bg-amber-500 text-[#0a1232] py-3 overflow-hidden relative group">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-amber-500 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-amber-500 to-transparent z-10 pointer-events-none" />
      <div className="flex whitespace-nowrap animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="mx-6 text-sm font-semibold flex items-center gap-3">
            <Sparkles size={14} className="text-[#0a1232]" />
            {text} &nbsp;
            <a href="#" className="underline hover:text-[#1e3a8a] font-bold">
              Apply Now
            </a>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
