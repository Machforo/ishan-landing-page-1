import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function CustomSectionRenderer({ section }) {
  if (!section || section.isHidden) return null;

  // 1. Raw / Custom HTML (URL-based or Admin custom HTML)
  if (section.type === "custom_html" || (!section.type && section.htmlContent)) {
    const rawHtml = section.htmlContent || "";
    if (!rawHtml.trim()) return null;

    const isFullDoc =
      rawHtml.trim().toLowerCase().startsWith("<!doctype html") ||
      rawHtml.trim().toLowerCase().startsWith("<html");

    if (isFullDoc) {
      return (
        <section className="w-full my-6">
          <iframe
            srcDoc={rawHtml}
            title={section.name || "Custom Section"}
            className="w-full min-h-[400px] border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        </section>
      );
    }

    return (
      <section className="page-custom-section py-8 w-full">
        <div
          className="max-w-7xl mx-auto px-4"
          dangerouslySetInnerHTML={{ __html: rawHtml }}
        />
      </section>
    );
  }

  // 2. Hero / Banner Strip
  if (section.type === "hero") {
    return (
      <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-900 text-white">
        {section.image && (
          <div className="absolute inset-0 z-0">
            <img
              src={section.image}
              alt={section.heading || "Banner"}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          {section.subheading && (
            <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase block mb-3">
              {section.subheading}
            </span>
          )}
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight tracking-tight">
            {section.heading || section.name}
          </h2>
          {section.description && (
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {section.description}
            </p>
          )}
          {section.htmlContent && (
            <div
              className="text-slate-200 max-w-2xl mx-auto mb-8 text-left"
              dangerouslySetInnerHTML={{ __html: section.htmlContent }}
            />
          )}
          {section.ctaText && (
            <a
              href={section.ctaLink || "#contact"}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              {section.ctaText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>
      </section>
    );
  }

  // 3. Content & Image Split
  if (section.type === "split") {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              {section.subheading && (
                <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-600 uppercase block mb-3">
                  {section.subheading}
                </span>
              )}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {section.heading || section.name}
              </h2>
              {section.description && (
                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  {section.description}
                </p>
              )}
              {section.htmlContent && (
                <div
                  className="text-slate-700 leading-relaxed text-base mb-6"
                  dangerouslySetInnerHTML={{ __html: section.htmlContent }}
                />
              )}
              {section.ctaText && (
                <a
                  href={section.ctaLink || "#contact"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow"
                >
                  {section.ctaText} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {section.image && (
              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                  <img
                    src={section.image}
                    alt={section.heading || "Feature"}
                    className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // 4. Feature Cards Grid
  if (section.type === "cards") {
    const cardItems = Array.isArray(section.items) && section.items.length > 0 ? section.items : [];
    return (
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            {section.subheading && (
              <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-600 uppercase block mb-3">
                {section.subheading}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {section.heading || section.name}
            </h2>
            {section.description && (
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {section.description}
              </p>
            )}
          </div>

          {cardItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cardItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {item.icon && (
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 font-bold">
                      {item.icon}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title || `Feature ${idx + 1}`}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description || item.text || ""}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            section.htmlContent && (
              <div
                className="max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: section.htmlContent }}
              />
            )
          )}
        </div>
      </section>
    );
  }

  // 5. Call To Action (CTA) Strip
  if (section.type === "cta") {
    return (
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {section.subheading && (
            <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 uppercase block mb-3">
              {section.subheading}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {section.heading || section.name}
          </h2>
          {section.description && (
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {section.description}
            </p>
          )}
          {section.htmlContent && (
            <div
              className="max-w-2xl mx-auto mb-8 text-blue-100"
              dangerouslySetInnerHTML={{ __html: section.htmlContent }}
            />
          )}
          {section.ctaText && (
            <a
              href={section.ctaLink || "#contact"}
              className="inline-flex items-center px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              {section.ctaText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>
      </section>
    );
  }

  // 6. FAQ Accordion
  if (section.type === "faq") {
    const faqItems = Array.isArray(section.items) && section.items.length > 0 ? section.items : [];
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            {section.subheading && (
              <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-600 uppercase block mb-3">
                {section.subheading}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {section.heading || section.name}
            </h2>
            {section.description && (
              <p className="text-slate-600 text-base max-w-xl mx-auto">
                {section.description}
              </p>
            )}
          </div>

          {faqItems.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-slate-200 rounded-xl px-5 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 py-4 hover:no-underline">
                    {item.question || item.title || `Question ${idx + 1}`}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4 leading-relaxed text-sm">
                    {item.answer || item.description || ""}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            section.htmlContent && (
              <div
                className="max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: section.htmlContent }}
              />
            )
          )}
        </div>
      </section>
    );
  }

  return null;
}
