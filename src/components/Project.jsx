import React from "react";
import { ExternalLink, ChevronRight } from "lucide-react";

const Project = () => {
  const projects = [
    // {
    //   title: "E-Commerce Platform",
    //   description: "A modern e-commerce solution with advanced features and seamless user experience.",
    //   image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    //   tech: ["React"],
    // },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for portfolio management with real-time data visualization.",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tech: ["React","Tailwind"],
    },
    {
      title: "Landing Page Suite",
      description: "Collection of high-converting landing pages for various industries and use cases.",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tech: ["HTML5", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-500 mt-6">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="h-64 relative overflow-hidden group"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-indigo-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 bg-white text-indigo-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <ExternalLink size={24} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-700 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-indigo-500 px-3 py-1 rounded-xl text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-indigo-500 font-semibold hover:text-indigo-600 hover:translate-x-1 transition-all duration-300">
                  View Project <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;