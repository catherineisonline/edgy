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
//Airtable
import edgyBase from "./airtable/airtable";
import { useState } from "react";
//uuid
import { v4 as uuidv4 } from 'uuid';
import Profile from "./routes/user-profile/Profile";
import NotFound from "./components/NotFound";

export default function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const retrieveDatabase = async (email) => {
    try {
      const response = await fetch(process.env.REACT_APP_AIRTABLE_SERVER_URL);
      const data = await response.json();
      if (Object.keys(data.records.filter((record) => record.fields.email === email)[0]).length > 0) {
        setUser(data.records.filter((record) => record.fields.email === email)[0]);
        return true;
      }
      else {
        return false;
      }
    }
    catch (err) {
      console.log(err.message)
      return false;
    }
  }

  const registerUser = async (data) => {
    const { email, password, fullname } = data;
    const id = uuidv4();
    try {
      edgyBase('users').create([
        {
          "fields": {
            "id": id,
            "email": email,
            "password": password,
            "fullname": fullname,
          }
        },

      ],
        { typecast: true }, function (err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
        <Route path="/sign-in" element={<SignIn retrieveDatabase={retrieveDatabase} user={user} setLoggedIn={setLoggedIn} />} />
        <Route path="/sign-up" element={<SignUp registerUser={registerUser} />} />
        <Route path="/profile" element={loggedIn ? <Profile /> : <NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}