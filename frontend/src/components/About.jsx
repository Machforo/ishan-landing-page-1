import React, { useState } from "react";
import { aboutImages, universityAchievements } from "../mock";
import { ArrowRight, ChevronLeft, ChevronRight, Award } from "lucide-react";

export default function About() {
  const [img, setImg] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#1a0a0a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8B0000]/20 rounded-full blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-300 text-xs font-semibold tracking-[0.25em] uppercase">
              GD Goenka University
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-4 leading-tight">
              The university holds <span className="text-amber-300">NAAC A+</span> accreditation
              and is located on a 20-acre sustainable campus with state-of-the-art facilities
            </h2>
            <p className="mt-5 text-gray-300 leading-relaxed text-[15px] max-w-lg">
              Founded in 2013, GD Goenka University is one of the leading private universities in
              Delhi NCR — offering a multidisciplinary approach to higher education.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-7 bg-[#8B0000] hover:bg-[#a00000] px-7 py-3 text-sm font-semibold uppercase tracking-wider transition"
            >
              Know More <ArrowRight size={16} />
            </a>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-amber-300 pl-5">
                <div className="text-4xl font-serif font-bold text-amber-300">30+</div>
                <div className="text-sm text-gray-200 mt-1">Years of Experience</div>
              </div>
              <div className="border-l-2 border-amber-300 pl-5">
                <div className="text-4xl font-serif font-bold text-amber-300">45+</div>
                <div className="text-sm text-gray-200 mt-1">Nationalities across the globe</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[480px] overflow-hidden">
              {aboutImages.map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt="campus"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === img ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={() => setImg((i) => (i - 1 + aboutImages.length) % aboutImages.length)}
                className="w-10 h-10 bg-white/20 hover:bg-[#8B0000] backdrop-blur flex items-center justify-center transition"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setImg((i) => (i + 1) % aboutImages.length)}
                className="w-10 h-10 bg-white/20 hover:bg-[#8B0000] backdrop-blur flex items-center justify-center transition"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {universityAchievements.map((a) => (
              <div
                key={a.id}
                className="text-center p-5 bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <Award size={30} className="mx-auto text-amber-300 mb-3" />
                <div className="font-serif font-bold text-amber-200">{a.title}</div>
                <div className="text-xs text-gray-300 mt-1 leading-tight">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
