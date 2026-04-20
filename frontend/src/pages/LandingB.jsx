import React from "react";
import Navbar from "../components/Navbar";
import HeroV2 from "../components/v2/HeroV2";
import StatStrip from "../components/v2/StatStrip";
import CollegesStrip from "../components/v2/CollegesStrip";
import Programmes from "../components/Programmes";
import Placements from "../components/Placements";
import AboutV2 from "../components/v2/AboutV2";
import CampusLife from "../components/CampusLife";
import Research from "../components/Research";
import Happenings from "../components/Happenings";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";

export default function LandingB() {
  return (
    <div className="bg-white" data-testid="landing-variant-b">
      <Navbar />
      <HeroV2 />
      <StatStrip />
      <Placements />
      <CollegesStrip />
      <Programmes />
      <AboutV2 />
      <Research />
      <CampusLife />
      <Happenings />
      <Contact />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
