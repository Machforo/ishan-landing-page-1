import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const FOOTER_MAP = {
  "Anti-Ragging Zone": "contact",
  "Grievance Redressal": "contact",
  "PoSH Policy": "contact",
  "Privacy Policy": "contact",
  "Mandatory Disclosures": "contact",
  "Downloads Hub": "contact",
  "Careers @ Ishan": "placements",
  Sitemap: "top",
  "NAAC Accreditation": "about",
  "BCI Approval": "colleges",
  "AICTE Approval": "colleges",
  "PCI Approval": "colleges",
  "NCISM Approval": "colleges",
  "NCTE Recognition": "colleges",
  "Chronicle India Ranking": "about",
  "About Ishan": "about",
  "5 Colleges": "colleges",
  "Chairman's Message": "about",
  "Media Room": "news",
};

const scrollToId = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Footer() {
  const { data } = useContext(DataContext);
  const about = data?.navMenu?.[0] || { items: [] };
  const admissions = data?.navMenu?.[2] || { items: [] };
  const pick = (label, fallback) => FOOTER_MAP[label] || fallback || "top";

  const quickLinks = data?.footerLinks?.quickLinks || [];
  const rankings = data?.footerLinks?.rankings || [];
  const groupLinks = data?.footerLinks?.group || [];

  const getColumnData = (labelField, arrayItems, defaultHeader) => {
    if (labelField && labelField.includes('\n')) {
      const items = labelField.split('\n').map(s => s.trim()).filter(Boolean);
      return {
        header: defaultHeader,
        items: items
      };
    }
    return {
      header: labelField || defaultHeader,
      items: arrayItems || []
    };
  };

  const aboutCol = getColumnData(data?.footerLabels?.about, about.items, "About Ishan");
  const admissionsCol = getColumnData(data?.footerLabels?.admissions, admissions.items, "Admissions");
  const quickLinksCol = getColumnData(data?.footerLabels?.quickLinks, quickLinks, "Quick Links");
  const rankingsCol = getColumnData(data?.footerLabels?.approvals, rankings, "Approvals & Rankings");
  const groupLinksCol = getColumnData(data?.footerLabels?.group, groupLinks, "Ishan Group");

  const renderLink = (item, defaultTarget) => {
    const label = item.name || item.text || item;
    const url = item.url;
    return (
      <li key={label}>
        <a
          href={url ? url : `#${pick(label, defaultTarget)}`}
          onClick={(e) => {
            if (!url) scrollToId(e, pick(label, defaultTarget));
          }}
          className="hover:text-amber-400 transition"
        >
          {label}
        </a>
      </li>
    );
  };

  return (
    <footer className="bg-[#0a1232] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <img src={data?.ISHAN_LOGO} alt="Ishan" className="h-14 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              {data?.aboutContent?.title || "The first multidisciplinary institution of Greater Noida, five colleges, one legacy."}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-400 mt-1 shrink-0" />
                <span>{data?.contactInfo?.location || ""}</span>
              </div>
              <a
                href={`tel:${data?.contactInfo?.admissionNumber || ""}`}
                className="flex items-center gap-2 hover:text-amber-400 transition"
              >
                <Phone size={14} className="text-amber-400" /> {data?.contactInfo?.admissionNumber || ""}
              </a>
              <a
                href={`mailto:${data?.contactInfo?.email || ""}`}
                className="flex items-center gap-2 hover:text-amber-400 transition"
              >
                <Mail size={14} className="text-amber-400" /> {data?.contactInfo?.email || ""}
              </a>
            </div>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#social"
                  onClick={(e) => scrollToId(e, "social")}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-amber-500 hover:text-[#0a1232] flex items-center justify-center transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">{aboutCol.header}</h4>
            <ul className="space-y-2 text-sm">
              {aboutCol.items.map((i) => renderLink(i, "about"))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">{admissionsCol.header}</h4>
            <ul className="space-y-2 text-sm">
              {admissionsCol.items.map((i) => renderLink(i, "programmes"))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">{quickLinksCol.header}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinksCol.items.map((i) => renderLink(i, "contact"))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">{rankingsCol.header}</h4>
            <ul className="space-y-2 text-sm">
              {rankingsCol.items.map((i) => renderLink(i, "about"))}
            </ul>
            <h4 className="text-white font-serif font-bold mb-3 mt-6">{groupLinksCol.header}</h4>
            <ul className="space-y-2 text-sm">
              {groupLinksCol.items.map((i) => renderLink(i, "about"))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>
            {data.footerLabels?.copyright || ""}
          </p>
          <div className="flex gap-5">
            <a
              href="#contact"
              onClick={(e) => scrollToId(e, "contact")}
              className="hover:text-amber-400 transition"
            >
              {data.footerLabels?.privacy || ""}
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToId(e, "contact")}
              className="hover:text-amber-400 transition"
            >
              {data.footerLabels?.terms || ""}
            </a>
            <a
              href="#top"
              onClick={(e) => scrollToId(e, "top")}
              className="hover:text-amber-400 transition"
            >
              {data.footerLabels?.sitemap || ""}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
