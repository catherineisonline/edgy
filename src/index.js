import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route direct path="/" element={<Landing />} />
        <Route direct path="/contact" element={<Contact />} />
        <Route direct path="/pricing" element={<PricingPage />} />
        <Route direct path="/faq" element={<FaqPage />} />
        <Route direct path="/blog" element={<Blog />} />
        <Route direct path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
