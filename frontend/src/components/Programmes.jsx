import React, { useState, useMemo } from "react";
import { programCategories, programs } from "../mock";
import { ArrowRight, BookOpen, Search, Filter, X } from "lucide-react";
import useReveal from "../hooks/useReveal";

const ALL_SCHOOLS = [
  "All Colleges",
  "Ishan Institute of Law",
  "Ishan Institute of Management",
  "Ishan Institute of Management & Technology",
  "Ishan Institute of Pharmacy",
  "Ishan Ayurvedic Medical Sciences",
  "Ishan Institute of Medical Sciences",
  "Ishan Institute of Education",
];

export default function Programmes() {
  const [active, setActive] = useState("ug");
  const [query, setQuery] = useState("");
  const [school, setSchool] = useState("All Colleges");
  const [headRef, headIn] = useReveal();

  const baseList = useMemo(() => programs[active] || [], [active]);

  const list = useMemo(() => {
    return baseList.filter((p) => {
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchSchool = school === "All Colleges" || p.school === school;
      return matchQuery && matchSchool;
    });
  }, [baseList, query, school]);

  const availableSchools = useMemo(() => {
    const s = new Set(baseList.map((p) => p.school));
    return ["All Colleges", ...Array.from(s)];
  }, [baseList]);

  return (
    <section
      id="programmes"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-[#1e3a8a]" /> Academic Programmes
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 max-w-xl leading-tight">
              Discover your <span className="text-[#1e3a8a] italic">future-ready</span>{" "}
              programme
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-[15px] leading-relaxed">
            Explore programmes across Law, Management, Pharmacy, Ayurveda and Education, approved
            by BCI, AICTE, PCI, NCISM and NCTE.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-5 border-b border-gray-200">
          {programCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActive(c.id);
                setSchool("All Colleges");
              }}
              className={`px-5 py-3 text-sm font-semibold transition-all relative ${
                active === c.id ? "text-[#1e3a8a]" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {c.label}
              <span
                className={`absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#1e3a8a] origin-left transition-transform duration-300 ${
                  active === c.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Search + Filter Toolbar */}
        <div className="bg-[#f5f7fb] border border-gray-200 p-4 flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1e3a8a]"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programmes (e.g. LL.B, MBA, Pharmacy)..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1e3a8a]"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div className="relative md:w-72">
            <Filter
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1e3a8a] pointer-events-none"
            />
            <select
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition appearance-none cursor-pointer"
            >
              {availableSchools.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-600 md:px-3">
            <div className="px-3 py-1.5 bg-[#1e3a8a] text-white font-bold rounded-full">
              {list.length}
            </div>
            <span>programmes found</span>
          </div>
        </div>

        {list.length === 0 ? (
          <div className="py-16 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center mx-auto mb-3">
              <Search size={22} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900">No programmes found</h3>
            <p className="text-sm text-gray-500 mt-1">
              Try clearing filters or searching a different keyword.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSchool("All Colleges");
              }}
              className="mt-4 px-5 py-2 bg-[#1e3a8a] text-white text-sm font-semibold hover:bg-[#152a5e] transition"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((p, i) => (
              <a
                key={`${active}-${i}-${p.name}`}
                href="#contact"
                className="group relative p-5 border border-gray-200 hover:border-[#1e3a8a] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ animation: `cardFade 0.5s ease-out ${i * 0.04}s both` }}
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1e3a8a] tracking-wider uppercase mb-2">
                  <BookOpen size={12} />
                  {p.school}
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-[#1e3a8a] transition mb-4 pr-6">
                  {p.name}
                </h3>
                <ArrowRight
                  size={18}
                  className="absolute bottom-5 right-5 text-gray-400 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-all duration-300"
                />
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1e3a8a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              </a>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10 gap-4">
          <a
            href="#contact"
            className="relative inline-flex items-center bg-[#1e3a8a] text-white font-semibold px-7 py-3 text-sm uppercase tracking-wider shadow overflow-hidden group"
          >
            <span className="relative z-10">Apply Now</span>
            <span className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[#0a1232]">
              Apply Now
            </span>
          </a>
          <a
            href="#colleges"
            className="inline-flex items-center border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-semibold px-7 py-3 text-sm uppercase tracking-wider transition"
          >
            View Colleges
          </a>
        </div>
      </div>
      <style>{`
        @keyframes cardFade {
          from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
}
