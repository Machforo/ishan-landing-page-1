import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Colleges from "../components/Colleges";
import Programmes from "../components/Programmes";
import CampusLife from "../components/CampusLife";
import Research from "../components/Research";
import Placements from "../components/Placements";
import About from "../components/About";
import Happenings from "../components/Happenings";
import SocialWall from "../components/SocialWall";
import Contact from "../components/Contact";
import PageGallery from "../components/PageGallery";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import DynamicPageSections from "../components/DynamicPageSections";

const defaultOrder = [
  "hero",
  "marquee",
  "colleges",
  "programmes",
  "about",
  "campus_life",
  "research",
  "placements",
  "happenings",
  "social_wall",
  "contact",
  "page_gallery",
];

export default function LandingA() {
  const defaultSections = {
    hero: <Hero />,
    marquee: <Marquee />,
    colleges: <Colleges />,
    programmes: <Programmes />,
    about: <About />,
    campus_life: <CampusLife />,
    research: <Research />,
    placements: <Placements />,
    happenings: <Happenings />,
    social_wall: <SocialWall />,
    contact: <Contact />,
    page_gallery: <PageGallery />,
  };

  return (
    <div className="bg-white" data-testid="landing-variant-a">
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
