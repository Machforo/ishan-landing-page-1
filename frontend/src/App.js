import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingB from "./pages/LandingB";
import DynamicPageRenderer from "./components/DynamicPageRenderer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingB />} />
          <Route path="/p/:slug" element={<DynamicPageRenderer portal="landing2" />} />
          <Route path="*" element={<LandingB />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
