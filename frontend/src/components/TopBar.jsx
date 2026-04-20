import React from "react";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex w-full bg-[#8B0000] text-white text-xs py-2 px-6 items-center justify-between">
      <div className="flex items-center gap-5">
        <a href="tel:+91-9910000062" className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
          <Phone size={12} /> +91-9910000062
        </a>
        <a href="mailto:info@gdgoenka.ac.in" className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
          <Mail size={12} /> info@gdgoenka.ac.in
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-amber-200 transition-colors">IQAC</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-200 transition-colors">NAAC</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-200 transition-colors">NIRF</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-200 transition-colors">Alumni</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-200 transition-colors">Careers</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-200 transition-colors">Contact</a>
      </div>
    </div>
  );
}
