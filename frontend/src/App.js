import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingB from "./pages/LandingB";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingB />} />
          <Route path="*" element={<LandingB />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
