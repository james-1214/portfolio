import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Main/>
      <About/>
      <Skill/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;
