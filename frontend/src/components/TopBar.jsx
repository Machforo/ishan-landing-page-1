import React from "react";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex w-full bg-[#0a1232] text-white text-xs py-2 px-6 items-center justify-between">
      <div className="flex items-center gap-5">
        <a href="tel:+911204321400" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
          <Phone size={12} /> +91-120-4321400
        </a>
        <a href="mailto:admissions@ishan.ac" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
          <Mail size={12} /> admissions@ishan.ac
        </a>
        <span className="text-amber-400/80">Knowledge Park-1, Greater Noida</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-amber-400 transition-colors">Anti-Ragging</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-400 transition-colors">Grievance</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-400 transition-colors">Alumni</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-400 transition-colors">Careers</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
      </div>
    </div>
  );
}
