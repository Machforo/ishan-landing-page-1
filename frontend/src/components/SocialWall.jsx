import React from "react";
import { socialPosts } from "../mock";
import { Heart, Instagram } from "lucide-react";

export default function SocialWall() {
  return (
    <section className="py-16 md:py-20 bg-[#faf7f2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="text-[#8B0000] text-xs font-semibold tracking-[0.25em] uppercase flex items-center gap-2">
              <Instagram size={14} /> Follow us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              GD Goenka <span className="italic text-[#8B0000]">Social Wall</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#6d0000] transition"
          >
            <Instagram size={16} /> @gdgoenkauniv
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {socialPosts.map((p) => (
            <a
              key={p.id}
              href="#"
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={p.image}
                alt={p.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#8B0000]/90 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-3 text-center">
                <Heart size={22} className="mb-2 fill-white" />
                <span className="text-sm font-semibold">{p.likes}</span>
                <span className="text-[10px] mt-1 line-clamp-3 opacity-90">{p.caption}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
