import React, { useState } from "react";
import { aboutImages, universityAchievements } from "../mock";
import { ArrowRight, ChevronLeft, ChevronRight, Award } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  const [img, setImg] = useState(0);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#0a1232] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1e3a8a]/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-amber-400" /> About Ishan
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] font-bold mt-4 leading-[1.15]">
              The first multi-disciplinary institution of{" "}
              <span className="text-amber-400">Greater Noida</span>, shaping professionals since 1994
            </h2>
            <p className="mt-5 text-gray-300 leading-relaxed text-[15px] max-w-lg">
              From a single management institute to five thriving colleges across Law, Management,
              Pharmacy, Ayurveda and Education, Ishan has grown into one of North India's most
              respected names in higher education, with 50,000+ alumni in leadership roles worldwide.
            </p>
            <a
              href="#"
              className="relative inline-flex items-center gap-2 mt-7 bg-[#1e3a8a] text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider overflow-hidden group"
            >
              <span className="relative z-10">Our Story</span>
              <ArrowRight size={16} className="relative z-10" />
              <span className="absolute inset-0 bg-amber-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition text-[#0a1232]">
                Our Story <ArrowRight size={16} />
              </span>
            </a>
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl font-serif font-bold text-amber-400">
                  <Counter end={30} suffix="+" />
                </div>
                <div className="text-xs text-gray-200 mt-1">Years Legacy</div>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl font-serif font-bold text-amber-400">
                  <Counter end={50} suffix="k+" />
                </div>
                <div className="text-xs text-gray-200 mt-1">Alumni Worldwide</div>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl font-serif font-bold text-amber-400">
                  <Counter end={5} />
                </div>
                <div className="text-xs text-gray-200 mt-1">Colleges</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                {aboutImages.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="campus"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      i === img ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 ring-1 ring-amber-400/20 pointer-events-none" />
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => setImg((i) => (i - 1 + aboutImages.length) % aboutImages.length)}
                  className="w-11 h-11 bg-white/20 hover:bg-[#1e3a8a] backdrop-blur flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setImg((i) => (i + 1) % aboutImages.length)}
                  className="w-11 h-11 bg-white/20 hover:bg-[#1e3a8a] backdrop-blur flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-amber-500 text-[#0a1232] px-3 py-1.5 text-xs font-bold tracking-widest">
                KNOWLEDGE PARK-1, GREATER NOIDA
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {universityAchievements.map((a, i) => (
              <Reveal key={a.id} delay={i * 80}>
                <div className="text-center p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
                  <Award
                    size={34}
                    className="mx-auto text-amber-400 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                  />
                  <div className="font-serif font-bold text-amber-300">{a.title}</div>
                  <div className="text-xs text-gray-300 mt-1 leading-tight">{a.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
