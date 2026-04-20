import React, { useEffect, useState } from "react";
import { Megaphone, ArrowRight, Zap, X } from "lucide-react";

const TICKER = [
  { tag: "BREAKING", date: "Today", title: "Admissions Open 2026-27 — Apply with Early Bird Scholarship", body: "Early-bird scholarships up to 50% tuition fee. Limited seats across all 5 colleges." },
  { tag: "EVENT", date: "15 Feb", title: "National Moot Court Competition at Ishan Institute of Law", body: "Teams from 40+ law schools competing. Supreme Court judges as panelists." },
  { tag: "ACHIEVEMENT", date: "10 Apr", title: "Ishan Pharmacy students win National Research Paper Award", body: "Three B.Pharm students bag gold at All-India Pharma Research Conclave 2026." },
  { tag: "NEW", date: "22 Mar", title: "IIMT hosts Annual Management Conclave 2026 with industry leaders", body: "CEOs from Infosys, TCS, Deloitte address 500+ students on future of work." },
  { tag: "UPDATE", date: "05 May", title: "BAMS Free Medical Camp serves 1000+ villagers in Greater Noida", body: "Ayurveda consultation, Panchakarma sessions, free medicines and awareness." },
  { tag: "PLACEMENT", date: "28 Apr", title: "Record placements — 500+ recruiters this season across 5 colleges", body: "Highest package INR 24 LPA. Average 98% placement rate across departments." },
];

export default function NewsFlash() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % TICKER.length), 3800);
    return () => clearInterval(t);
  }, [paused]);

  const active = TICKER[idx];

  return (
    <>
      <div
        className="w-full bg-white/95 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden border-t-4 border-amber-500"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-[#1e3a8a] to-[#152a5e] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-[#0a1232] relative">
              <Megaphone size={15} />
              <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-50" />
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] text-amber-300 font-bold">
                WHAT'S HAPPENING
              </div>
              <div className="text-[15px] font-serif font-semibold leading-tight">
                Latest @ Ishan
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider">LIVE</span>
          </div>
        </div>

        <div className="relative h-[240px] overflow-hidden bg-white">
          {TICKER.map((n, i) => (
            <div
              key={i}
              className={`absolute inset-0 p-5 transition-all duration-700 ${
                i === idx
                  ? "opacity-100 translate-y-0"
                  : i === (idx - 1 + TICKER.length) % TICKER.length
                  ? "opacity-0 -translate-y-full"
                  : "opacity-0 translate-y-full"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-[#1e3a8a] text-white text-[10px] font-bold tracking-widest">
                  {n.tag}
                </span>
                <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide flex items-center gap-1">
                  <Zap size={11} className="text-amber-500" /> {n.date}
                </span>
              </div>
              <h4 className="text-[15px] font-serif font-bold text-gray-900 leading-snug mb-2">
                {n.title}
              </h4>
              <p className="text-[12.5px] text-gray-600 leading-relaxed line-clamp-3">{n.body}</p>
              <button
                onClick={() => setModal(true)}
                className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold text-[#1e3a8a] hover:gap-2 transition-all"
              >
                READ MORE <ArrowRight size={11} />
              </button>
            </div>
          ))}
          {/* progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
            <div
              key={idx}
              className={`h-full bg-gradient-to-r from-[#1e3a8a] to-amber-500 ${
                paused ? "" : "animate-progress"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-t border-gray-100">
          <div className="flex gap-1">
            {TICKER.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-[#1e3a8a]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
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
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1e3a8a] hover:gap-2 transition-all"
          >
            VIEW ALL <ArrowRight size={11} />
          </a>
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-white max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#1e3a8a]"
            >
              <X size={20} />
            </button>
            <div className="inline-block px-2.5 py-0.5 bg-[#1e3a8a] text-white text-[10px] font-bold tracking-widest mb-3">
              {active.tag}
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{active.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{active.date}</p>
            <p className="text-gray-700 leading-relaxed">{active.body}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        .animate-progress { animation: progress 3.8s linear forwards; }
      `}</style>
    </>
  );
}
