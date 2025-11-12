import React from "react";
import { Code, Palette, Briefcase, ChevronRight } from "lucide-react";

const Service = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, accessible, and user-friendly web interfaces using core technologies like HTML, CSS, and JavaScript.",
      icon: <Code size={32} />,
      features: [
        "Semantic HTML Structure",
        "Modern CSS Styling & Animations",
        "JavaScript Interactivity",
        "Cross-Browser Compatibility",
        "Responsive Design for All Devices",
      ],
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly and visually appealing interfaces through hand-drawn sketches and personal creativity.",
      icon: <Palette size={32} />,
      features: [
        "Creative Hand-Sketched Wireframes",
        "User-Centered Design Approach",
        "Prototype Concepts from Scratch",
        "Focus on Simplicity and Accessibility",
      ],
    },
    {
      title: "MERN Fullstack Developer",
      description: "Designing and developing scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      icon: <Briefcase size={32} />,
      features: [
        "Frontend Development with React.js",
        "Backend APIs using Node.js & Express.js",
        "Database Management with MongoDB",
        "Authentication & Authorization (JWT/OAuth)",
        "Deployment on AWS/Heroku/Vercel",
        "Version Control with Git/GitHub",
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
            Services
          </h2>
          <p className="text-xl text-gray-500 mt-6">What I can do for you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:to-purple-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="mb-8 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <ChevronRight size={16} className="text-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;