import React from "react";
import { socialPosts } from "../mock";
import { Heart, Instagram } from "lucide-react";
import Reveal from "./Reveal";

export default function SocialWall() {
  return (
    <section className="py-16 md:py-20 bg-[#f5f7fb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
                <Instagram size={14} /> Follow us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                GD Goenka <span className="italic text-[#1e3a8a]">Social Wall</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#152a5e] hover:scale-105 transition-all"
            >
              <Instagram size={16} /> @gdgoenkauniv
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {socialPosts.map((p, i) => (
            <a
              key={p.id}
              href="#"
              className="group relative aspect-square overflow-hidden block"
              style={{ animation: `scaleIn 0.5s ease-out ${i * 0.06}s both` }}
            >
              <img
                src={p.image}
                alt={p.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1e3a8a]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                <Heart size={22} className="mb-2 fill-white animate-pulse" />
                <span className="text-sm font-semibold">{p.likes}</span>
                <span className="text-[10px] mt-1 line-clamp-3 opacity-90">{p.caption}</span>
              </div>
            </a>
          ))}
        </div>
        <style>{`@keyframes scaleIn { from { opacity: 0; transform: scale(0.9);} to { opacity: 1; transform: scale(1);} }`}</style>
      </div>
    </section>
  );
}
