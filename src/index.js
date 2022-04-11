import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Styles

import "./index.css";
//Components/
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PricingPage from "./components/PricingPage";
import FaqPage from "./components/FaqPage";
import Blog from "./components/Blog";
import AboutPage from "./components/AboutPage";
import Terms from "./components/Terms";
import Refunds from "./components/Refunds";
import Privacy from "./components/Privacy";
import Jobs from "./components/Jobs";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route direct path="/edgy" element={<Landing />} />
        <Route direct path="/edgy/contact" element={<Contact />} />
        <Route direct path="/edgy/pricing" element={<PricingPage />} />
        <Route direct path="/edgy/faq" element={<FaqPage />} />
        <Route direct path="/edgy/blog" element={<Blog />} />
        <Route direct path="/edgy/about" element={<AboutPage />} />
        <Route path="/edgy/terms" element={<Terms />} />
        <Route path="/edgy/refunds" element={<Refunds />} />
        <Route path="/edgy/privacy" element={<Privacy />} />
        <Route path="/edgy/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
