import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


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