import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Programmes from "./components/Programmes";
import CampusLife from "./components/CampusLife";
import Research from "./components/Research";
import Placements from "./components/Placements";
import About from "./components/About";
import Happenings from "./components/Happenings";
import SocialWall from "./components/SocialWall";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import "./App.css";

function App() {
  return (
    <div className="App bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Marquee />
      <Programmes />
      <CampusLife />
      <Research />
      <Placements />
      <About />
      <Happenings />
      <SocialWall />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
