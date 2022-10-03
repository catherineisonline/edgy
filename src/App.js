import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components/
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




export default function App() {
    return(

        <Router>
        <Navigation />
        <Routes>
          <Route path="/edgy" element={<Landing />} />
          <Route path="/edgy/contact" element={<Contact />} />
          <Route path="/edgy/pricing" element={<Pricing />} />
          <Route path="/edgy/faq" element={<Faq />} />
          <Route path="/edgy/blog" element={<Blog />} />
          <Route path="/edgy/about" element={<About />} />
          <Route path="/edgy/terms" element={<Terms />} />
          <Route path="/edgy/refunds" element={<Refunds />} />
          <Route path="/edgy/privacy" element={<Privacy />} />
          <Route path="/edgy/jobs" element={<Jobs />} />
          <Route path="/edgy/sign-in" element={<SignIn />} />
          <Route path="/edgy/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    )
}