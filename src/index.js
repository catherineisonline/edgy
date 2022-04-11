import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  <Router>
    <Navigation />
    <Routes>
      <Route path="/edgy" element={<Landing />} />
      <Route path="/edgy/contact" element={<Contact />} />
      <Route path="/edgy/pricing" element={<PricingPage />} />
      <Route path="/edgy/faq" element={<FaqPage />} />
      <Route path="/edgy/blog" element={<Blog />} />
      <Route path="/edgy/about" element={<AboutPage />} />
      <Route path="/edgy/terms" element={<Terms />} />
      <Route path="/edgy/refunds" element={<Refunds />} />
      <Route path="/edgy/privacy" element={<Privacy />} />
      <Route path="/edgy/jobs" element={<Jobs />} />
    </Routes>
    <Footer />
  </Router>
);

reportWebVitals();
