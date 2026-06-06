import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Reveal from "../Reveal";
import { Quote } from "lucide-react";
import { aboutImages as mockAboutImages, testimonials as mockTestimonials } from "../../mock";

export default function AboutV2() {
  const { data } = useContext(DataContext);
  const aboutImages = data.aboutImages?.length >= 2 ? data.aboutImages : mockAboutImages;
  const testimonial = data.testimonials?.[0] || mockTestimonials[0];
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white relative"
      data-testid="v2-about"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="left">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={aboutImages[0]?.url || aboutImages[0]}
                alt=""
                className="w-full h-64 md:h-80 object-cover"
              />
              <img
                src={aboutImages[1]?.url || aboutImages[1]}
                alt=""
                className="w-full h-64 md:h-80 object-cover mt-10"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1e3a8a] text-white px-6 py-5 shadow-xl max-w-[220px]">
              <div className="font-serif text-4xl font-bold leading-none">1994</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-amber-300 mt-1">
                Founded
              </div>
              <div className="text-[12px] text-white/80 mt-2 leading-relaxed">
                Three decades of uncompromising academic quality.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div>
            <div className="inline-flex items-center gap-2 text-[#1e3a8a] text-[11px] font-bold tracking-[0.3em] uppercase">
              <span className="w-8 h-px bg-[#1e3a8a]" /> About Ishan
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0a1232] leading-tight mt-3 whitespace-pre-line">
              {data.aboutContent?.title || "Education that\noutlasts trends."}
            </h2>
            <p className="mt-5 text-gray-600 text-[15px] leading-relaxed whitespace-pre-line">
              {data.aboutContent?.description || "Ishan Educational Institutions was founded in 1994 with a singular purpose: to build an academic group that prepares professionals for the real world."}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { k: "200+", v: "Faculty" },
                { k: "120+", v: "Programmes" },
                { k: "50+", v: "Industry partners" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="border-l-2 border-amber-400 pl-3 py-1"
                >
                  <div className="font-serif text-2xl font-bold text-[#0a1232]">
                    {s.k}
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-500">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* testimonial quote */}
            <div className="mt-8 relative bg-[#f8f7f3] border-l-4 border-[#1e3a8a] p-6">
              <Quote
                size={28}
                className="text-amber-400 absolute -top-3 left-5 bg-white p-1 rounded-sm"
              />
              <p className="text-[14px] text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-[13px] font-bold text-[#0a1232]">
                    {testimonial.name}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {testimonial.course} · Batch {testimonial.batch}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
