import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Briefcase, BookOpen, GraduationCap } from "lucide-react";
import axios from "axios";

const ICON_MAP = {
  Award, Users, Briefcase, BookOpen, GraduationCap
};

const DEFAULT_ITEMS = [
  { icon: "Award", num: 30, suffix: "+", label: "Years of Legacy", sub: "Since 1994" },
  { icon: "Users", num: 50, suffix: "K+", label: "Alumni Worldwide", sub: "Across 40+ countries" },
  { icon: "Briefcase", num: 500, suffix: "+", label: "Recruiters", sub: "98% placement rate" },
  { icon: "BookOpen", num: 5, suffix: "", label: "Colleges", sub: "One multi-disciplinary group" },
  { icon: "GraduationCap", num: 120, suffix: "+", label: "Programmes", sub: "UG · PG · Diploma · PhD" },
];

function useCountUp(target, active, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

function Stat({ icon, num, suffix, label, sub, active }) {
  const value = useCountUp(num, active);
  const Icon = typeof icon === "string" ? (ICON_MAP[icon] || Award) : icon;
  return (
    <div className="relative flex items-start gap-4 p-6 border-r border-white/10 last:border-r-0">
      <div className="w-11 h-11 shrink-0 rounded-sm bg-amber-500/90 text-[#0a1232] flex items-center justify-center">
        <Icon size={20} />
      </div>
      <div>
        <div className="font-serif text-[32px] md:text-[38px] leading-none font-bold text-white">
          {value}
          <span className="text-amber-400">{suffix}</span>
        </div>
        <div className="text-[12px] font-bold tracking-wider uppercase text-white mt-1">
          {label}
        </div>
        <div className="text-[11px] text-white/60 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

export default function StatStrip() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [items, setItems] = useState(DEFAULT_ITEMS);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
        const response = await axios.get(`${apiUrl}/stats-strip`);
        const rawItems = response.data?.items || response.data;
        if (rawItems && Array.isArray(rawItems) && rawItems.length > 0) {
          setItems(rawItems.map(item => ({
            icon: item.icon || "Award",
            num: item.num || 0,
            suffix: item.suffix || "",
            label: item.label || "",
            sub: item.sub || ""
          })));
        }
      } catch (error) {
        console.error("Error fetching stats strip:", error);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-[#0a1232] via-[#152a5e] to-[#1e3a8a] border-y border-white/10"
      data-testid="v2-stat-strip"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map((it, i) => (
          <Stat key={it.label || i} {...it} active={active} />
        ))}
      </div>
    </section>
  );
}
