import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Phone, Mail } from "lucide-react";

export default function TopBar({ scrolled }) {
  const { data } = useContext(DataContext);
  const { contactInfo } = data;
  return (
    <div
      className={`hidden lg:flex w-full text-xs py-2 px-6 items-center justify-between transition-colors duration-500 ${
        scrolled ? "bg-[#0a1232] text-white" : "bg-black/30 text-white backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center gap-5">
        <a
          href={`tel:${contactInfo?.admissionNumber || "+91-120-2326600"}`}
          className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
        >
          <Phone size={12} /> {contactInfo?.admissionNumber || "+91-120-2326600"}
        </a>
        <a
          href={`mailto:${contactInfo?.email || "admissions@ishan.ac"}`}
          className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
        >
          <Mail size={12} /> {contactInfo?.email || "admissions@ishan.ac"}
        </a>
        <span className="text-amber-400/90 truncate max-w-[200px] inline-block align-bottom">{contactInfo?.location?.split('\n')[0] || "Greater Noida"}</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#contact" className="hover:text-amber-400 transition-colors">Anti-Ragging</a>
        <span className="opacity-40">|</span>
        <a href="#contact" className="hover:text-amber-400 transition-colors">Grievance</a>
        <span className="opacity-40">|</span>
        <a href="#placements" className="hover:text-amber-400 transition-colors">Alumni</a>
        <span className="opacity-40">|</span>
        <a href="#placements" className="hover:text-amber-400 transition-colors">Careers</a>
        <span className="opacity-40">|</span>
        <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
      </div>
    </div>
  );
}
