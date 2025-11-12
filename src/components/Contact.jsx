import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-500 mt-6">Ready to start your next project?</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-3xl text-center border-2 border-transparent hover:bg-white hover:border-indigo-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">jamesjckm1011@gmail.com</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesjckm1011@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Send Message
              </a>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl text-center border-2 border-transparent hover:bg-white hover:border-indigo-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-4">Let's connect professionally</p>
              <a
                href="https://linkedin.com/in/james14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Connect
              </a>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl text-center border-2 border-transparent hover:bg-white hover:border-indigo-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Github size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">GitHub</h3>
              <p className="text-gray-600 mb-4">Check out my repositories</p>
              <a
                href="https://github.com/james-1214?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;