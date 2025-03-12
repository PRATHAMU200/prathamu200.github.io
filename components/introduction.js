import React from "react";
import { Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import {
  SiCodeforces,
  SiLeetcode,
  SiMailboxdotorg,
  SiMaildotcom,
} from "react-icons/si";
export default function Introduction({ isMobile }) {
  return (
    <>
      <div className="space-y-5 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white ">
          I'm <span className="text-blue-500 ">Pratham Upadhyay</span>
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          I am a{" "}
          <span className="text-blue-400 font-semibold">
            Software Developer
          </span>{" "}
          currently studying{" "}
          <span className="text-blue-400 font-semibold">
            Electrical Engineering
          </span>
          .
        </h2>
        <div className="mt-4 flex flex-wrap space-x-3 text-xs">
          <a
            href="https://github.com/prathamu200/"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <FaGithub className="text-sm mr-1" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/prathamu200/"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <FaLinkedin className="text-sm mr-1" />
            LinkedIn
          </a>
          <a
            href="https://www.twitter.com/@mercykknight"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <FaTwitter className="text-sm mr-1" />
            Twitter
          </a>
          <a
            href="https://instagram.com/upadhyay_pratham"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <FaInstagram className="text-sm mr-1" />
            Instagram
          </a>
          <a
            href="mailto:prathamu200@gmail.com"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <SiMailboxdotorg className="text-xs mr-1" />
            Mail
          </a>
          <a
            href="#contact"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <FaYoutube className="text-sm mr-1" />
            Youtube
          </a>
          <a
            href="https://codeforces.com/profile/prathamu200"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <SiCodeforces className="text-sm mr-1" />
            Codeforces
          </a>
          <a
            href="https://leetcode.com/u/prathamu200/"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <SiLeetcode className="text-sm mr-1" />
            Leetcode
          </a>
          <a
            href="https://discord.gg/fZC8WX9EFX"
            target="_blank"
            className="flex items-center text-black-600 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 rounded-lg shadow-lg py-1 px-2 font-semibold transition-all duration-300 border transition-transform transform hover:scale-110 duration-300"
          >
            <FaDiscord className="text-sm mr-1" />
            Discord
          </a>
        </div>
        <div className="mb-2 mt-2">
          <a
            href="/Pratham_Upadhyay_Official_Resume.pdf"
            target="_blank"
            className="space-x-3 inline-flex bg-glass font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transition-transform transform hover:scale-110 duration-300"
          >
            <div>My Resume</div>
            <Download />
          </a>
        </div>
        <p className="mt-8 text-lg">
          I'm a 3rd-year Electrical Engineering student 🎓 from Delhi
          Technological University, graduating in 2026. I have a burning passion
          for programming 💻, development, and working on innovative projects
          🚀. I'm always on the lookout for learning about new and upcoming
          technologies 🛠️ and making meaningful contributions to them.
        </p>
      </div>
    </>
  );
}
