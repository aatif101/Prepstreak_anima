import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

// Public Pages
import { Frame as LandingPage } from "./screens/Frames/Frame1";
import { Frame as OnboardingPage } from "./screens/Frames/Frame2";

// Dashboard
import { Frame as DashboardPage } from "./screens/Frames/Frame3";

// Quiz Flow
import { Frame as QuizSetupStep1 } from "./screens/Frames/frame4";
import { Frame as QuizSetupStep2 } from "./screens/Frames/frame5";
import { Frame as QuizSetupStep3 } from "./screens/Frames/frame6";
import { Frame as QuizActivePage } from "./screens/Frames/frame7";

// Test Mode Flow
// Note: frame9 is empty, skipping directly to Frame11 for test setup step 2
import { Frame as TestSetupStep2 } from "./screens/Frames/Frame11";
import { Frame as TestActivePage } from "./screens/Frames/frame12";

// Results
import { Frame as ResultsPage } from "./screens/Frames/frame13";

// User Pages
import { Frame as ProfilePage } from "./screens/Frames/Frame14";
import { Frame as BadgesPage } from "./screens/Frames/Frame16";

// 404
import { NotFound } from "./screens/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<OnboardingPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Quiz Flow */}
        <Route path="/quiz/setup/step1" element={<QuizSetupStep1 />} />
        <Route path="/quiz/setup/step2" element={<QuizSetupStep2 />} />
        <Route path="/quiz/setup/step3" element={<QuizSetupStep3 />} />
        <Route path="/quiz/active" element={<QuizActivePage />} />

        {/* Test Mode Flow - Using Quiz Step 1 for Test Step 1, Frame11 for Step 2 */}
        <Route path="/test/setup/step1" element={<QuizSetupStep1 />} />
        <Route path="/test/setup/step2" element={<TestSetupStep2 />} />
        <Route path="/test/active" element={<TestActivePage />} />

        {/* Results (shared for quiz & test) */}
        <Route path="/results" element={<ResultsPage />} />

        {/* User Pages */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/badges" element={<BadgesPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
