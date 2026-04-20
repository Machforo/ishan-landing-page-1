import React, { useEffect, useState } from "react";
import { Megaphone, ArrowRight, Zap } from "lucide-react";

const TICKER = [
  {
    tag: "BREAKING",
    date: "Today",
    title: "Admissions Open 2026-27 — Apply with Early Bird Scholarship",
  },
  {
    tag: "EVENT",
    date: "15 Feb",
    title: "National Moot Court Competition at Ishan Institute of Law",
  },
  {
    tag: "ACHIEVEMENT",
    date: "10 Apr",
    title: "Ishan Pharmacy students win National Research Paper Award",
  },
  {
    tag: "NEW",
    date: "22 Mar",
    title: "IIMT hosts Annual Management Conclave 2026 with industry leaders",
  },
  {
    tag: "UPDATE",
    date: "05 May",
    title: "BAMS Free Medical Camp serves 1000+ villagers in Greater Noida",
  },
  {
    tag: "PLACEMENT",
    date: "28 Apr",
    title: "Record placements — 500+ recruiters this season across 5 colleges",
  },
];

export default function NewsFlash() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % TICKER.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-[320px] max-w-full bg-white/95 backdrop-blur-md shadow-2xl rounded-sm overflow-hidden border-t-4 border-amber-500">
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#152a5e] text-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-[#0a1232] relative">
            <Megaphone size={14} />
            <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-50" />
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] text-amber-300 font-bold">
              WHAT'S HAPPENING
            </div>
            <div className="text-[13px] font-serif font-semibold leading-tight">
              Latest @ Ishan
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-wider">LIVE</span>
        </div>
      </div>

      <div className="relative h-[150px] overflow-hidden bg-white">
        {TICKER.map((n, i) => (
          <div
            key={i}
            className={`absolute inset-0 p-4 transition-all duration-700 ${
              i === idx
                ? "opacity-100 translate-y-0"
                : i === (idx - 1 + TICKER.length) % TICKER.length
                ? "opacity-0 -translate-y-full"
                : "opacity-0 translate-y-full"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-[#1e3a8a] text-white text-[9px] font-bold tracking-widest">
                {n.tag}
              </span>
              <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide flex items-center gap-1">
                <Zap size={10} className="text-amber-500" /> {n.date}
              </span>
            </div>
            <p className="text-[13px] font-serif font-semibold text-gray-900 leading-snug">
              {n.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-t border-gray-100">
        <div className="flex gap-1">
          {TICKER.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1 rounded-full transition-all ${
                i === idx ? "w-5 bg-[#1e3a8a]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`News ${i + 1}`}
            />
          ))}
        </div>
        <a
          href="#news"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("news");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 90;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1e3a8a] hover:gap-2 transition-all"
        >
          VIEW ALL <ArrowRight size={10} />
        </a>
      </div>
    </div>
  );
}
