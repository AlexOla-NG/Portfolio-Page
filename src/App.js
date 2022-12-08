import React from "react";
import Navbar from "./components/header/Navbar";
import HomeHero from "./components/hero/HomeHero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
