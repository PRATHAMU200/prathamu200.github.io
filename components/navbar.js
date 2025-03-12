"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

import {
  Briefcase,
  GraduationCap,
  Code,
  Trophy,
  BookOpenText,
  Lightbulb,
  Rss,
  CircleUserRound,
  Image,
} from "lucide-react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark"; // Default to dark
    setDarkMode(storedTheme === "dark");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  //if (darkMode === null) return null; // Prevent rendering before hydration

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white/50 dark:bg-gray-900/50 shadow-md rounded-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="font-mono italic text-2xl font-bold text-gray-800 dark:text-white transition-transform transform hover:scale-105 duration-300">
          <Link href="/">{"<prathamu200/>"}</Link>
        </h1>
        {/* Mobile Screen or WebScreen */}
        {!isMobile ? (
          <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 px-1 py-1 rounded-lg transition duration-300 transition-transform transform hover:scale-110 duration-300">
              <Link href="/" className="hover:text-blue-500 flex items-center">
                <CircleUserRound className="w-4 h-4 mr-2" />
                About
              </Link>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 px-1 py-1 rounded-lg transition duration-300 transition-transform transform hover:scale-110 duration-300">
              <a
                href="/projects"
                className="hover:text-blue-500 flex items-center"
              >
                <Code className="w-4 h-4 mr-2" />
                Projects
              </a>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 px-1 py-1 rounded-lg transition duration-300 transition-transform transform hover:scale-110 duration-300">
              <a
                href="/gallery"
                className="hover:text-blue-500 flex items-center"
              >
                <Image alt="" className="w-4 h-4 mr-2" />
                Gallery
              </a>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 px-1 py-1 rounded-lg transition duration-300 transition-transform transform hover:scale-110 duration-300">
              <a
                target="_blank"
                href="https://mercykknight.github.io/"
                className="hover:text-blue-500 flex items-center"
              >
                <BookOpenText className="w-4 h-4 mr-2" />
                Blog
              </a>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 px-1 py-1 rounded-lg transition duration-300 transition-transform transform hover:scale-110 duration-300">
              <a
                href="/connect"
                className="hover:text-blue-500 flex items-center"
              >
                <Rss className="w-4 h-4 mr-2" />
                Connect
              </a>
            </li>
          </ul>
        ) : (
          <ul className="bg-glass dark:bg-glass-dark text-xs fixed space-x-2 bottom-10 left-0 right-0 mx-auto w-auto max-w-max bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 border-1 border-black dark:border-white shadow-lg rounded-lg backdrop-blur-md py-1 px-2 flex justify-between items-center">
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-300">
              <Link
                href="/"
                className="hover:text-blue-500 flex flex-col justify-center items-center py-2 px-3"
              >
                <CircleUserRound className="w-4 h-4" />
                About
              </Link>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-300">
              <a
                href="/projects"
                className="hover:text-blue-500 flex flex-col justify-center items-center py-2 px-3"
              >
                <Code className="w-4 h-4" />
                Projects
              </a>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-300">
              <a
                href="/gallery"
                className="hover:text-blue-500 flex flex-col justify-center items-center py-2 px-3"
              >
                <Image alt="Gallery" className="w-4 h-4" />
                Gallery
              </a>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-300">
              <a
                href="https://mercykknight.github.io/"
                className="hover:text-blue-500 flex flex-col justify-center items-center py-2 px-3"
              >
                <BookOpenText className="w-4 h-4" />
                Blog
              </a>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition duration-300">
              <a
                href="/connect"
                className="hover:text-blue-500 flex flex-col justify-center items-center py-2 px-3"
              >
                <Rss className="w-4 h-4" />
                Connect
              </a>
            </li>
          </ul>
        )}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-transform transform hover:scale-110 duration-300"
        >
          {darkMode ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
