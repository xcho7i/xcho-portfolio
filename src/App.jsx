import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import About from "./pages/About/About";
import config from "./config";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(true); // Toggle state
  document.title = config.developerName;
  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <div className="w-full bg-black h-full mx-auto bg-gray-900 shadow-lg p-6 flex flex-col items-start border border-gray-800/50 backdrop-blur-lg pb-10 pt-10 hover:shadow-xl transition-shadow duration-300">
            
            <div className="text-5xl text-center w-full font-bold text-blue-400 mb-2">
              Latest Project
            </div>
            <div className="bg-gray-900 rounded-lg w-[75%] mx-auto shadow-lg p-6 flex flex-col items-start border border-gray-800/50">
              <img src="latest.jpg" alt="Robo Apply" className="w-full object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-blue-400 mb-2 text-center">
                Robo Apply
              </h3>
              <p className="text-gray-300 mb-4">
                An advanced web application that leverages AI to analyze and score resumes, providing actionable feedback and suggestions for improvement. Built with React, Node.js, and OpenAI API integration.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/xcho7i/Robo-Apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="inline-block"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
                <a
                  href="https://roboapply.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-green-400 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="inline-block"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>`
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
