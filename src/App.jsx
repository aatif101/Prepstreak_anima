import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frame as LandingPage } from "./screens/Frames/Frame1";
import { Frame as OnboardingPage } from "./screens/Frames/Frame2";
import { Frame as DashboardPage } from "./screens/Frames/Frame3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
