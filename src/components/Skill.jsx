import React from "react";

const Skill = () => {
  const skills = [
    { name: "React", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "HTML/CSS", level: 99, category: "Frontend" },
    // { name: "Node.js", level: 70, category: "Backend" },
    // { name: "Express.js", level: 80, category: "Backend" },
    // { name: "MongoDB", level: 65, category: "Database" },
    { name: "Git", level: 75, category: "Tools" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-500 mt-6">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-700 text-lg">{skill.name}</span>
                <span className="font-semibold text-indigo-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="inline-block text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;