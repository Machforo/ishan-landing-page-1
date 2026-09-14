import React from "react";
import Navbar from "../components/Navbar";
import HeroV2 from "../components/v2/HeroV2";
import StatStrip from "../components/v2/StatStrip";
import Placements from "../components/Placements";
import CollegesStrip from "../components/v2/CollegesStrip";
import Programmes from "../components/Programmes";
import AboutV2 from "../components/v2/AboutV2";
import Research from "../components/Research";
import CampusLife from "../components/CampusLife";
import Happenings from "../components/Happenings";
import Contact from "../components/Contact";
import PageGallery from "../components/PageGallery";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import DynamicPageSections from "../components/DynamicPageSections";

const defaultOrder = [
  "hero",
  "stats",
  "placements",
  "colleges",
  "programmes",
  "about",
  "research",
  "campus_life",
  "happenings",
  "contact",
  "page_gallery",
];

export default function LandingB() {
  const defaultSections = {
    hero: <HeroV2 />,
    stats: <StatStrip />,
    placements: <Placements />,
    colleges: <CollegesStrip />,
    programmes: <Programmes />,
    about: <AboutV2 />,
    research: <Research />,
    campus_life: <CampusLife />,
    happenings: <Happenings />,
    contact: <Contact />,
    page_gallery: <PageGallery />,
  };

  return (
    <div className="bg-white" data-testid="landing-variant-b">
      <Navbar />
      <DynamicPageSections
        pageId="homepage"
        defaultOrder={defaultOrder}
        defaultSections={defaultSections}
      />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
