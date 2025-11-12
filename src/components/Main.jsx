import React from "react";
import { Download, ExternalLink, Code, Palette, Briefcase } from "lucide-react";

const Main = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" id="home">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-red-500 opacity-10 top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 opacity-10 bottom-[20%] left-[20%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 text-lg text-indigo-500 font-medium mb-4">
              <span className="text-2xl animate-[wave_2s_linear_infinite]">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">James J</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-medium mb-6">
              FullStack [MERN] Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              Passionate about creating beautiful, responsive web experiences that delight users and drive business growth through modern technologies and innovative design solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/myresume.pdf"
                download="JAMES_J_CV.pdf"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-indigo-500 border-2 border-indigo-500 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5"
              >
                <ExternalLink size={20} />
                View Work
              </a>
            </div>

            <div className="flex gap-8">
              <div>
                <span className="block text-2xl font-bold text-indigo-500">4</span>
                <span className="text-sm text-gray-500">Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-indigo-500"></span>
                {/* <span className="text-sm text-gray-500">Companies</span> */}
              </div>
              <div>
                <span className="block text-2xl font-bold text-indigo-500">freshie</span>
                {/* <span className="text-sm text-gray-500">Years</span> */}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-4/5 h-4/5 rounded-full bg-cover bg-center" style={{backgroundImage: "url('mercuri.jpg')"}}></div>
              </div>
              <div className="absolute inset-0">
                <Code className="absolute top-[20%] right-[10%] bg-white p-3 rounded-full shadow-lg text-indigo-500 animate-[float_4s_ease-in-out_infinite]" />
                <Palette className="absolute bottom-[30%] left-[5%] bg-white p-3 rounded-full shadow-lg text-indigo-500 animate-[float_4s_ease-in-out_infinite_1s]" />
                <Briefcase className="absolute top-[10%] left-[20%] bg-white p-3 rounded-full shadow-lg text-indigo-500 animate-[float_4s_ease-in-out_infinite_2s]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;