import React from "react";
import { footerLinks, navMenu } from "../mock";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const about = navMenu[0];
  const academics = navMenu[1];
  return (
    <footer className="bg-[#1a0a0a] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center">
                <span className="text-white font-serif font-bold">GD</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-serif font-bold">GD GOENKA</div>
                <div className="text-[10px] text-amber-300 tracking-widest">UNIVERSITY</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              GD Goenka University, Sohna-Gurugram Road, Sohna, Haryana 122103, India
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+919910000062" className="flex items-center gap-2 hover:text-amber-300 transition">
                <Phone size={14} className="text-[#8B0000]" /> +91-9910000062
              </a>
              <a href="mailto:info@gdgoenka.ac.in" className="flex items-center gap-2 hover:text-amber-300 transition">
                <Mail size={14} className="text-[#8B0000]" /> info@gdgoenka.ac.in
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#8B0000] mt-1" /> Sohna, Gurugram
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8B0000] flex items-center justify-center transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              {about.items.slice(0, 7).map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-300 transition">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              {academics.items.slice(0, 7).map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-300 transition">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-300 transition">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Rankings</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.rankings.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-300 transition">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-serif font-bold mb-3 mt-6">GD Goenka Group</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.group.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-300 transition">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} GD Goenka University. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-300 transition">Terms of Use</a>
            <a href="#" className="hover:text-amber-300 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
