import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Colleges from "./components/Colleges";
import Programmes from "./components/Programmes";
import CampusLife from "./components/CampusLife";
import Research from "./components/Research";
import Placements from "./components/Placements";
import About from "./components/About";
import Happenings from "./components/Happenings";
import SocialWall from "./components/SocialWall";
import Contact from "./components/Contact";
import PageGallery from "./components/PageGallery";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import DynamicPageRenderer from "./components/DynamicPageRenderer";
import DynamicPageSections from "./components/DynamicPageSections";
import { Toaster } from "./components/ui/sonner";
import "./App.css";

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

function Home() {
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
    <div className="App bg-white">
      <Navbar />
      <DynamicPageSections
        pageId="homepage"
        defaultOrder={defaultOrder}
        defaultSections={defaultSections}
      />
      <Footer />
      <FloatingWidgets />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/:slug" element={<DynamicPageRenderer portal="landing1" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
