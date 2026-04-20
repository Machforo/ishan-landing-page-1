import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";

export default function VariantSwitcher() {
  const { pathname } = useLocation();
  const isV2 = pathname.startsWith("/v2");
  const to = isV2 ? "/" : "/v2";
  const label = isV2 ? "Switch to Variant A" : "Switch to Variant B";
  const tag = isV2 ? "B" : "A";

  return (
    <Link
      to={to}
      className="fixed bottom-5 left-5 z-[70] group flex items-center gap-2.5 bg-[#0a1232] text-white pl-2 pr-4 py-2 rounded-full shadow-2xl border border-amber-400/50 hover:bg-[#1e3a8a] transition"
      data-testid="variant-switcher"
    >
      <span className="w-7 h-7 rounded-full bg-amber-500 text-[#0a1232] text-[11px] font-black flex items-center justify-center">
        {tag}
      </span>
      <span className="text-[11px] font-bold tracking-wider uppercase">{label}</span>
      <ArrowLeftRight
        size={13}
        className="text-amber-400 group-hover:translate-x-0.5 transition"
      />
    </Link>
  );
}
