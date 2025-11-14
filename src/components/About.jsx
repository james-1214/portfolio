import React from "react";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-20" id="about">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
            About Me
          </h2>
          <p className="text-xl text-gray-500 mt-6">Discover my journey and passion</p>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-center">
          <div className="max-w-2xl">
            <p className="text-xl font-semibold text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Frontend Developer with a keen eye for creating exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With expertise spanning multiple frameworks and technologies, I transform creative concepts into interactive, responsive web applications. My approach combines technical proficiency with aesthetic sensibility to deliver solutions that not only meet functional requirements but also create memorable user experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning to stay at the forefront of web development trends and best practices.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-transparent text-indigo-500 border-2 border-indigo-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-500 hover:text-white"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/James resume.pdf";
                link.download = "James_J_Resume.pdf";
                link.click();
              }}
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-gray-300/50 text-center min-w-[200px]">
              <h3 className="text-gray-700 mb-4 text-xl">Experience</h3>
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-base text-center leading-tight">
                  Freshie
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;