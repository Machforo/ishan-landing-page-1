import React from "react";
import { usePageLayout } from "../hooks/usePageLayout";
import CustomSectionRenderer from "./CustomSectionRenderer";

export default function DynamicPageSections({
  pageId = "homepage",
  defaultSections = {},
  defaultOrder = []
}) {
  const { data: layoutData, loading } = usePageLayout(pageId);

  // If loading or no valid sections returned, render default order
  if (loading || !layoutData || !Array.isArray(layoutData.sections) || layoutData.sections.length === 0) {
    return (
      <>
        {defaultOrder.map((id) => (
          <React.Fragment key={id}>{defaultSections[id] || null}</React.Fragment>
        ))}
      </>
    );
  }

  const sections = layoutData.sections;
  const renderedIds = new Set();

  return (
    <>
      {sections.map((sec) => {
        // Skip hidden sections
        if (sec.isHidden) {
          renderedIds.add(sec.id);
          renderedIds.add(sec.id.replace(/-/g, "_"));
          renderedIds.add(sec.id.replace(/_/g, "-"));
          return null;
        }

        // Direct or normalized key match
        const direct = defaultSections[sec.id];
        const under = defaultSections[sec.id.replace(/-/g, "_")];
        const dash = defaultSections[sec.id.replace(/_/g, "-")];
        const target = direct || under || dash;

        if (target) {
          renderedIds.add(sec.id);
          renderedIds.add(sec.id.replace(/-/g, "_"));
          renderedIds.add(sec.id.replace(/_/g, "-"));
          return <React.Fragment key={sec.id}>{target}</React.Fragment>;
        }

        // Custom template section (custom_html, hero, split, cards, cta, faq)
        if (
          sec.type === "custom_html" ||
          sec.htmlContent ||
          sec.type === "hero" ||
          sec.type === "split" ||
          sec.type === "cards" ||
          sec.type === "cta" ||
          sec.type === "faq"
        ) {
          return <CustomSectionRenderer key={sec.id} section={sec} />;
        }

        return null;
      })}

      {/* Fail-safe: Render any unmentioned default sections that were not hidden */}
      {defaultOrder.map((id) => {
        if (!renderedIds.has(id) && defaultSections[id]) {
          return <React.Fragment key={id}>{defaultSections[id]}</React.Fragment>;
        }
        return null;
      })}
    </>
  );
}
