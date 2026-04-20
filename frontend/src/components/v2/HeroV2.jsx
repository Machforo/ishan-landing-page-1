import React, { useEffect, useState } from "react";
import { heroSlides } from "../../mock";
import {
  User,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

const HIGHLIGHTS = [
  "30+ years of academic legacy",
  "5 colleges • one multi-disciplinary group",
  "500+ recruiters • 98% placement rate",
  "BCI • AICTE • PCI • NCISM • NCTE approved",
];

export default function HeroV2() {
  const [idx, setIdx] = useState(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    programme: "",
    college: "",
  });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[idx];

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", email: "", programme: "", college: "" });
    }, 3500);
  };

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] bg-[#0a1232] overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20"
      data-testid="hero-v2"
    >
      {/* background slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.tag}
            className={`w-full h-full object-cover ${i === idx ? "animate-v2ken" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1232] via-[#0a1232]/92 to-[#0a1232]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_55%)]" />
        </div>
      ))}

      {/* grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_480px] gap-10 lg:gap-14 items-center">
        {/* LEFT COPY */}
        <div className="text-white">
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 backdrop-blur-sm text-[11px] tracking-[0.3em] uppercase text-amber-300 font-semibold v2-enter-1"
          >
            <Sparkles size={12} /> Admissions Live · 2026-27
          </div>

          <h1 className="font-serif font-bold leading-[1.02] text-[28px] md:text-[36px] lg:text-[44px] mt-5 v2-enter-2">
            Where India's
            <br />
            <span className="text-amber-400 italic">ambition</span> meets
            <br />
            30 years of legacy.
          </h1>

          <p className="mt-5 text-gray-200/90 text-[15px] md:text-base max-w-xl leading-relaxed v2-enter-3">
            Since 1994, Ishan Educational Institutions has shaped over 50,000
            professionals across Law, Management, Pharmacy, Ayurveda & Education.
            One campus. Five accredited colleges. Limitless careers.
          </p>

          {/* rotating slide tag */}
          <div
            key={slide.id}
            className="mt-7 border-l-2 border-amber-400 pl-4 max-w-md v2-enter-4"
          >
            <div className="text-[10px] font-bold tracking-[0.3em] text-amber-400 uppercase">
              {slide.tag}
            </div>
            <div className="text-white font-serif text-base md:text-lg mt-1 leading-snug">
              {slide.title}
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mt-7 max-w-2xl v2-enter-4">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-[13px] text-gray-100/90"
              >
                <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 mt-8 v2-enter-5">
            <a
              href="#programmes"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("programmes");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 90;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="group inline-flex items-center gap-2 bg-white text-[#0a1232] font-bold px-6 py-3 text-[13px] uppercase tracking-wider hover:bg-amber-400 transition-colors"
              data-testid="hero-v2-explore-programmes"
            >
              Explore Programmes
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <div className="flex items-center gap-3 text-white/90 text-[12px]">
              <div className="flex -space-x-2">
                {["#f59e0b", "#1e3a8a", "#10b981"].map((c) => (
                  <span
                    key={c}
                    className="w-7 h-7 rounded-full border-2 border-white/40"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span className="leading-tight">
                <b className="text-amber-400">2,400+</b> applications this week
              </span>
            </div>
          </div>

          {/* slide dots */}
          <div className="mt-10 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-10 bg-amber-400" : "w-4 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — STICKY ENQUIRY FORM */}
        <div className="v2-enter-5 lg:sticky lg:top-28">
          <div className="relative">
            {/* accent frame */}
            <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/70 to-transparent blur-2xl opacity-40" />
            <div className="relative bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0a1232] text-white px-6 py-5 flex items-start justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.28em] text-amber-300 font-bold uppercase mb-1">
                    Start Your Journey
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-tight">
                    Apply in 2 minutes
                  </h3>
                  <p className="text-[11.5px] text-white/70 mt-1">
                    Call-back within 2 working hours
                  </p>
                </div>
                <div className="w-11 h-11 rounded-full bg-amber-500 text-[#0a1232] flex items-center justify-center shrink-0">
                  <GraduationCap size={19} />
                </div>
              </div>

              {sent ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-gray-900">
                    Thank you, {form.name || "future Ishanite"}!
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Your enquiry is in. An admissions counsellor will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="p-6 space-y-3.5" data-testid="hero-v2-form">
                  <LabeledInput
                    icon={<User size={13} />}
                    placeholder="Full name"
                    value={form.name}
                    onChange={onChange("name")}
                    required
                    testid="v2-form-name"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <LabeledInput
                      icon={<Phone size={13} />}
                      placeholder="Phone *"
                      type="tel"
                      value={form.phone}
                      onChange={onChange("phone")}
                      required
                      testid="v2-form-phone"
                    />
                    <LabeledInput
                      icon={<Mail size={13} />}
                      placeholder="Email *"
                      type="email"
                      value={form.email}
                      onChange={onChange("email")}
                      required
                      testid="v2-form-email"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      required
                      value={form.programme}
                      onChange={onChange("programme")}
                      className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition"
                      data-testid="v2-form-programme"
                    >
                      <option value="">Programme level *</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>Diploma</option>
                      <option>Doctoral</option>
                    </select>
                    <select
                      value={form.college}
                      onChange={onChange("college")}
                      className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition"
                      data-testid="v2-form-college"
                    >
                      <option value="">College preference</option>
                      <option>Ishan Institute of Law</option>
                      <option>Ishan Institute of Management & Tech</option>
                      <option>Ishan Institute of Pharmacy</option>
                      <option>Ishan Ayurvedic Medical Sciences</option>
                      <option>Ishan Institute of Education</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full relative overflow-hidden bg-[#1e3a8a] text-white font-bold text-[13px] uppercase tracking-wider py-3.5 group mt-1"
                    data-testid="v2-form-submit"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-2">
                      Get My Call Back
                      <ChevronRight size={14} />
                    </span>
                    <span className="absolute inset-0 bg-amber-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 text-[#0a1232] transition">
                      Get My Call Back
                      <ChevronRight size={14} />
                    </span>
                  </button>

                  <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
                    <BadgeCheck size={13} className="text-[#1e3a8a]" />
                    100% confidential · No spam · Unsubscribe anytime
                  </div>
                </form>
              )}
            </div>

            {/* little offer strip */}
            <div className="mt-3 bg-amber-400 text-[#0a1232] px-4 py-2.5 text-[12px] font-semibold flex items-center justify-between rounded-sm">
              <span className="flex items-center gap-2">
                <Sparkles size={13} /> Early-bird scholarship up to 50%
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase opacity-80">
                Limited seats
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes v2ken { 0% { transform: scale(1) translate(0,0);} 100% { transform: scale(1.1) translate(1%, 1%);} }
        .animate-v2ken { animation: v2ken 9s ease-out forwards; }
        @keyframes v2Up { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .v2-enter-1 { animation: v2Up 0.7s ease-out 0.05s both; }
        .v2-enter-2 { animation: v2Up 0.8s ease-out 0.2s both; }
        .v2-enter-3 { animation: v2Up 0.8s ease-out 0.35s both; }
        .v2-enter-4 { animation: v2Up 0.8s ease-out 0.5s both; }
        .v2-enter-5 { animation: v2Up 0.9s ease-out 0.65s both; }
      `}</style>
    </section>
  );
}

function LabeledInput({ icon, testid, ...rest }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1e3a8a]">
        {icon}
      </span>
      <input
        {...rest}
        data-testid={testid}
        className="w-full border border-gray-200 bg-gray-50 pl-9 pr-3 py-2.5 text-[13px] focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition placeholder:text-gray-500"
      />
    </div>
  );
}
