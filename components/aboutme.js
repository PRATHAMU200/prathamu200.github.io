"use client";
import { useState, useEffect } from "react";
import { Ear, Earth } from "lucide-react";
import Introduction from "./introduction";
import Work from "./work";
import Education from "./education";
import TechnicalSkills from "./skills";
import Certifications from "./certification";
import { FaMedal } from "react-icons/fa";
export default function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="about"
      className="items-center container mx-auto py-1 flex flex-col md:flex-row space-x-5"
    >
      <nav className="hidden md:flex items-center md:fixed md:h-screen top-0 left-8 md:w-48 z-10 ">
        <ul className="space-y-6 text-gray-700 dark:text-gray-300 ">
          <li className="hover:text-blue-500 transition-transform transform hover:translate-x-3 hover:scale-110">
            <a href="#introduction" className="hover:text-blue-500 ">
              Introduction
            </a>
          </li>
          <li className="hover:text-blue-500 transition-transform transform hover:translate-x-3 hover:scale-110">
            <a href="#work" className="hover:text-blue-500">
              Work
            </a>
          </li>
          <li className="hover:text-blue-500 transition-transform transform hover:translate-x-3 hover:scale-110">
            <a href="#education" className="hover:text-blue-500">
              Education
            </a>
          </li>
          <li className="hover:text-blue-500 transition-transform transform hover:translate-x-3 hover:scale-110">
            <a href="#skills" className="hover:text-blue-500">
              Technical Skills
            </a>
          </li>
          <li className="hover:text-blue-500 transition-transform transform hover:translate-x-3 hover:scale-110">
            <a href="#certifications" className="hover:text-blue-500">
              Certifications
            </a>
          </li>
          <li className="hover:text-blue-500 transition-transform transform hover:translate-x-3 hover:scale-110">
            <a href="#achivements" className="hover:text-blue-500">
              Achievements
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:flex w-full md:ml-48 p-4 space-x-16">
        <div className="flex flex-col items-center space-y-6 w-full md:w-1/3 ">
          <img
            src="/finalgif.gif" // Update the image path as necessary
            alt="Profile Picture"
            className="w-35 h-35 rounded-full border-4 border-blue-500 shadow-lg transition-transform transform hover:scale-110 duration-300 object-cover mx-auto"
          />
          <div className="flex flex-row justify-center items-center space-x-3 hover:text-blue-400 transition-transform transform hover:scale-110 duration-300">
            <Earth className="text-orange-400" />{" "}
            <a target="_blank" href="https://maps.app.goo.gl/uVScenVTNV2Qat2s9">
              Asia/India
            </a>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3">
            <div className="border px-2 rounded-lg transition-transform transform hover:scale-110 duration-300">
              English
            </div>
            <div className="border px-2 rounded-lg transition-transform transform hover:scale-110 duration-300">
              Hindi
            </div>
          </div>
        </div>
        <div>
          <section id="introduction" className="mb-20">
            {/* <h2 className="text-3xl font-bold">Introduction</h2> */}
            <Introduction />
          </section>
          <section id="work" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <Work />
          </section>
          <section id="education" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Education />
          </section>
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <TechnicalSkills />
          </section>
          <section id="certification" className="mb-8">
            <h2 className="text-3xl font-bold flex items-center space-x-2">
              <FaMedal className="text-yellow-500 w-8 h-8" />
              <span>Certifications</span>
            </h2>
            <Certifications />
          </section>
        </div>
      </div>
    </div>
  );
}
