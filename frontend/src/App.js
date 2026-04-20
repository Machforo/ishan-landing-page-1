import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingA from "./pages/LandingA";
import LandingB from "./pages/LandingB";
import VariantSwitcher from "./components/v2/VariantSwitcher";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingA />} />
          <Route path="/v2" element={<LandingB />} />
          <Route path="*" element={<LandingA />} />
        </Routes>
        <VariantSwitcher />
      </div>
    </BrowserRouter>
  );
}

export default App;
