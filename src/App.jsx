import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Gallery from "./screens/gallery/Gallery";
import Blog from "./screens/blog/Blog";
import Classes from "./screens/classes/Classes";
import BlogDetail from "./screens/blog/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import "aos/dist/aos.css";
import Aos from "aos";
import Loader from "./components/Loader";
function AOSHandler() {
  const location = useLocation();

  useEffect(() => {
    // Small timeout to ensure DOM is updated
    setTimeout(() => {
      Aos.refresh();
    }, 100);
  }, [location.pathname]);

  return null;
}
function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
      offset: 200,
      easing: "ease-in-out",
      delay: 250,
      mirror: false, 
    });
  }, []);
  return (
    <Router>
      <div className="App">
        
        <AOSHandler/>

        <Navbar />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <FooterBanner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
