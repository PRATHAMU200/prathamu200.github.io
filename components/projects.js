"use client";
import { useState } from "react";
import SingleProject from "./singleproject";
import { Search, Filter } from "lucide-react"; // Import icons

const projects = [
  {
    name: "CollegeHelp",
    logo: "/projects/collegehelp.png",
    description:
      "A platform to help college students with Timetable & Resources.",
    link: "https://github.com/PRATHAMU200/CollegeHelp",
    tags: [
      "Web",
      "ReactNative",
      "Firebase",
      "JavaScript",
      "Expo",
      "Android App",
    ],
  },
  {
    name: "SummariseMe",
    logo: "/projects/summariseme.png",
    description:
      "An GenAI-powered tool that summarizes long texts, PDFs, and YouTube videos.",
    link: "https://github.com/PRATHAMU200/SummariseMe",
    tags: ["AI", "ML", "Python", "Transformrs", "HuggingFace", "Web"],
  },
  {
    name: "ChatGenie",
    logo: "/projects/chatgenie.png",
    description:
      "A chatbot application using NLP and AI to assist users in real-time.",
    link: "https://github.com/PRATHAMU200/ChatGenie",
    tags: ["AI", "Javascript", "Python", "HuggingFace", "Web"],
  },
  {
    name: "Portfolio",
    logo: "/projects/portfolio.png",
    description:
      "My personal portfolio website showcasing my projects, skills, and achievements.",
    link: "https://prathamu200.github.io/",
    tags: ["Web", "Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "MercyKnight Blogging Website",
    logo: "/projects/mercyknight.png",
    description:
      "A blogging platform for sharing technical and personal blogs.",
    link: "https://github.com/PRATHAMU200/mercykknight.github.io",
    tags: ["Web", "Javascript", "Firebase"],
  },
  {
    name: "Electric Car Dashboard",
    logo: "/projects/electriccardashboard.png",
    description: "A GUI dashboard for monitoring electric vehicle parameters.",
    link: "https://github.com/PRATHAMU200/ElectricCarDashboard",
    tags: ["Python", "GUI", "PyQt5", "Desktop App"],
  },
  {
    name: "Inspire W0rld Twitter Bot",
    logo: "/projects/twitterbot.png",
    description:
      "A twitter bot which tweets every 90min time interval a random motivation quote. Made with python using twitter API.",
    link: "https://replit.com/@mahtarp2004/InspireW0rld",
    tags: ["Python", "API"],
  },
  {
    name: "DTU Profile",
    logo: "/projects/dtuprofile.png",
    description: "A web-based profile system for Searching DTU students",
    tags: ["Web", "Python", "Flask"],
  },
  {
    name: "Textify",
    logo: "/projects/textify.png",
    description:
      "A text analysis tool for extracting insights from textual data.",
    link: "https://github.com/PRATHAMU200/Textify",
    tags: ["Web", "Javascript", "Tesseract"],
  },
  {
    name: "Tor Scraper",
    logo: "/projects/torscraper.png",
    description:
      "A web scraper for gathering information from the Tor network.",
    link: "https://github.com/PRATHAMU200/Tor_Scraper",
    tags: ["Cybersecurity", "Python", "Web Scraping"],
  },
  {
    name: "Face-Recognition Attendance Application",
    logo: "/projects/facerecognition.png",
    description:
      "An AI-powered face recognition system for attendance management.",

    tags: ["AI", "ML", "Python", "OpenCV"],
  },
  {
    name: "Blinking Eye Detector",
    logo: "/projects/blinkdetector.png",
    description: "A computer vision-based blinking eye detector using OpenCV.",
    link: "https://github.com/PRATHAMU200/blinking_eye_detector",
    tags: ["AI", "ML", "OpenCV", "Python", "OpenCV"],
  },
  // {
  //   name: "Brahmastra Squad",
  //   logo: "/projects/brahmastrasquad.png",
  //   description: "A collaborative platform for tech enthusiasts.",
  //   link: "https://github.com/PRATHAMU200/BrahmastraSquad",
  //   tags: ["Web"],
  // },
  {
    name: "Fake Profile Generator",
    logo: "/projects/fakeprofile.png",
    description:
      "A tool to generate fake profiles for testing and development.",
    link: "https://github.com/PRATHAMU200/FakeProfile",
    tags: ["Web", "API", "Javascript"],
  },
  {
    name: "KeyLogger in Python",
    logo: "/projects/keylogger.png",
    description: "A keylogger developed for educational purposes.",
    link: "https://github.com/PRATHAMU200/Keylogger",
    tags: ["Cybersecurity", "Python"],
  },
  {
    name: "ChromePass Stoler",
    logo: "/projects/chromepass.png",
    description: "A tool for extracting saved passwords from Chrome.",
    link: "https://github.com/PRATHAMU200/Chromepass_Stoler",
    tags: ["Cybersecurity", "Python"],
  },
  {
    name: "Student Chat Portal",
    logo: "/projects/studentchatportal.png",
    description:
      "A web-based chat application for students. One of my old project",
    link: "https://github.com/PRATHAMU200/student_chat_portal",
    tags: ["Desktop App", "Python", "MySQL"],
  },
  {
    name: "Artificial Intelligence",
    logo: "/projects/ai.png",
    description:
      "A collection of AI-related implementations and experiments. My first and Oldmost Project",
    link: "https://github.com/PRATHAMU200/artificial_intelligence",
    tags: ["AI", "Python", "Desktop App"],
  },
  {
    name: "Timer GUI",
    logo: "/projects/timergui.png",
    description:
      "A Python-based timer application with a graphical user interface.",
    link: "https://github.com/PRATHAMU200/timer_gui",
    tags: ["Python", "GUI"],
  },
  {
    name: "VedAstro (Open Source Contribution)",
    logo: "/projects/vedastro.png",
    description: "Open source contribution to VedAstro project.",
    link: "https://github.com/VedAstro/VedAstro",
    tags: ["OpenSource", "Web", "AI"],
  },
  {
    name: "IEEE Web 2 (Open Source Contribution)",
    logo: "/projects/ieeeweb2.png",
    description: "Contributed to the IEEE Web 2 project.",
    link: "https://github.com/Prashant0664/IEEEweb2",
    tags: ["OpenSource", "Web"],
  },
  {
    name: "DB Drawer (Open Source Contribution)",
    logo: "/projects/dbdrawer.png",
    description: "Contributed to the DB Drawer open-source project.",
    link: "https://github.com/Bhanu-code/db-drawer",
    tags: ["OpenSource", "Web"],
  },
];

// Get all unique tags from projects
const allTags = [...new Set(projects.flatMap((project) => project.tags))];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Filter projects based on search term and selected tag
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTag =
      selectedTag === "All" || project.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        My Projects
      </h2>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3 transition-transform transform hover:scale-104 hover:shadow-md duration-300">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Tag Filter Dropdown */}
        <div className="relative w-full md:w-1/4 flex items-center transition-transform transform hover:scale-104 hover:shadow-lg duration-300">
          <Filter className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-300" />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="All">All</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Project Count */}
      <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
        ~ Showing {filteredProjects.length} projects
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <SingleProject key={index} {...project} />
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
