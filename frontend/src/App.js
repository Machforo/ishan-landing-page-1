import React from "react";
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
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import "./App.css";

import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Colleges />
      <Programmes />
      <About />
      <CampusLife />
      <Research />
      <Placements />   {/*  Coming from fro */}
      <Happenings />
      <SocialWall />
      <Contact />
      <Footer />
      <FloatingWidgets />
      <Toaster />
    </div>
  );
}

export default App;
