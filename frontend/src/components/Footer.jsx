import React from "react";
import { footerLinks, navMenu, ISHAN_LOGO } from "../mock";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const about = navMenu[0];
  const admissions = navMenu[2];
  return (
    <footer className="bg-[#0a1232] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={ISHAN_LOGO} alt="Ishan" className="h-14 w-auto" />
              <div className="leading-tight border-l border-white/20 pl-3">
                <div className="text-white font-serif font-bold">ISHAN</div>
                <div className="text-[9px] text-amber-400 tracking-[0.2em]">EDUCATIONAL INSTITUTIONS</div>
                <div className="text-[9px] text-white/60 italic">Since 1994</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              The first multi-disciplinary institution of Greater Noida — five colleges, one legacy.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-400 mt-1 shrink-0" />
                <span>Knowledge Park-1, Greater Noida, Uttar Pradesh 201310</span>
              </div>
              <a href="tel:+911204321400" className="flex items-center gap-2 hover:text-amber-400 transition">
                <Phone size={14} className="text-amber-400" /> +91-120-4321400
              </a>
              <a href="mailto:admissions@ishan.ac" className="flex items-center gap-2 hover:text-amber-400 transition">
                <Mail size={14} className="text-amber-400" /> admissions@ishan.ac
              </a>
            </div>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-amber-500 hover:text-[#0a1232] flex items-center justify-center transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">About Ishan</h4>
            <ul className="space-y-2 text-sm">
              {about.items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition">{i}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm">
              {admissions.items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition">{i}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition">{i}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Approvals</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.rankings.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition">{i}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-serif font-bold mb-3 mt-6">Ishan Group</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.group.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Ishan Educational Institutions. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms of Use</a>
            <a href="#" className="hover:text-amber-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
