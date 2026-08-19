import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Jobs from "./pages/Jobs";
import FAQs from "./pages/FAQs";
import Donate from "./pages/Donate";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Partnership from "./pages/Partnership";


import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/volunteer" element={<Jobs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/profile/:id" element={<Profile />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
