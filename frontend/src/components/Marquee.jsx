import React from "react";

export default function Marquee() {
  const text =
    "GD Goenka University Admissions Open for 2026–27: Engineering (B.Tech/M.Tech) • Management (MBA/BBA/BCom) • Sciences (B.Sc/M.Sc) • LAW (BA LL.B/BBA LL.B) & More";
  return (
    <div className="w-full bg-amber-400 text-[#8B0000] py-2.5 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="mx-6 text-sm font-semibold">
            {text} &nbsp;&nbsp;
            <a href="#" className="underline hover:text-[#5b0000]">
              Apply Now
            </a>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
