import React, { useState, useEffect } from "react";

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white/95 shadow-lg border-white/10' 
        : 'bg-white/80 backdrop-blur-xl border-white/10'
    }`}>
      <div className="max-w-[2000px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          <span>James J</span>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse"></div>
        </div>
        <nav className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative py-2 font-medium transition-colors duration-300 ${
                activeSection === item.toLowerCase() 
                  ? 'text-indigo-500' 
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
              onClick={() => setActiveSection(item.toLowerCase())}
            >
              {item}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ${
                activeSection === item.toLowerCase() ? 'w-full' : 'w-0'
              }`}></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;