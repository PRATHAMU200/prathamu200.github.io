import { Code, ShieldCheck, BrainCircuit } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaDatabase,
  FaAndroid,
  FaJava,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiFirebase,
  SiVercel,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiApache,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiArduino,
  SiMlb,
  SiWireshark,
  SiCyberdefenders,
} from "react-icons/si";

export default function TechnicalSkills() {
  const skills = [
    { name: "C", icon: <SiC className="text-blue-600 w-10 h-10" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700 w-10 h-10" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-10 h-10" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-10 h-10" /> },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 w-10 h-10" />,
    },
    { name: "Python", icon: <FaPython className="text-blue-500 w-10 h-10" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 w-10 h-10" /> },
    {
      name: "React Native",
      icon: <FaReact className="text-cyan-400 w-10 h-10" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white w-10 h-10" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500 w-10 h-10" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600 w-10 h-10" />,
    },
    { name: "Django", icon: <SiDjango className="text-green-700 w-10 h-10" /> },
    {
      name: "Flask",
      icon: <SiFlask className="text-gray-600 dark:text-white w-10 h-10" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 w-10 h-10" />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-black dark:text-white w-10 h-10" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-700 w-10 h-10" /> },
    { name: "Apache", icon: <SiApache className="text-red-600 w-10 h-10" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-500 w-10 h-10" /> },
    {
      name: "Pandas",
      icon: <SiPandas className="text-black dark:text-white w-10 h-10" />,
    },
    {
      name: "Scikit-Learn",
      icon: <SiScikitlearn className="text-orange-500 w-10 h-10" />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-orange-500 w-10 h-10" />,
    },
    {
      name: "Arduino",
      icon: <SiArduino className="text-blue-500 w-10 h-10" />,
    },
    { name: "Docker", icon: <FaDocker className="text-blue-500 w-10 h-10" /> },
    {
      name: "Linux",
      icon: <FaLinux className="text-black dark:text-white w-10 h-10" />,
    },
    {
      name: "Cybersecurity",
      icon: <SiCyberdefenders className="text-red-500 w-10 h-10" />,
    },
    {
      name: "MATLAB",
      icon: <img src="/MATLAB.png" className="w-10 h-10"></img>,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 w-10 h-10" /> },
    {
      name: "Android Studio",
      icon: <FaAndroid className="text-green-500 w-10 h-10" />,
    },
    {
      name: "Wireshark",
      icon: <SiWireshark className="text-blue-600 w-10 h-10" />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Tech Stack Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-150 duration-300"
          >
            {skill.icon}
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Skills Description */}
      <div className="mt-4 space-y-3">
        <p className="flex items-center space-x-2">
          <Code className="text-blue-500 w-5 h-5" />
          <span>
            Develop Front-end / Back-end for web and mobile applications.
          </span>
        </p>
        <p className="flex items-center space-x-2">
          <ShieldCheck className="text-green-500 w-5 h-5" />
          <span>
            Find vulnerabilities in websites and help in resolving them.
          </span>
        </p>
        <p className="flex items-center space-x-2">
          <BrainCircuit className="text-yellow-500 w-5 h-5" />
          <span>
            Build software for Machine Learning and Data Science in Python.
          </span>
        </p>
      </div>
    </div>
  );
}
