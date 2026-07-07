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
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import DynamicPageRenderer from "./components/DynamicPageRenderer";
import "./App.css";

import { Toaster } from "./components/ui/sonner";

function Home() {
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
