import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Navigation from "./components/navigation/Navigation";
import Landing from "./routes/landing/Landing";
import Footer from "./components/footer/Footer";
import Contact from "./routes/contact/Contact";
import Pricing from "./routes/pricing/Pricing";
import Faq from "./routes/faq/Faq";
import Blog from "./routes/blog/Blog";
import About from "./routes/about/About";
import Terms from "./routes/terms/Terms";
import Refunds from "./routes/refunds/Refunds";
import Privacy from "./routes/privacy/Privacy";
import Jobs from "./routes/jobs/Jobs";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import BlogPost from "./routes/blog-post/BlogPost";




export default function App() {
  return (

    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:name" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  )
}