import { ExternalLink } from "lucide-react";

const tagColors = {
  AI: "bg-blue-500 text-white",
  ML: "bg-green-500 ",
  Web: "bg-purple-600 text-white",
  "Android App": "bg-yellow-500",
  "Desktop App": "bg-red-500 text-white",
  Bash: "bg-teal-500",
  "C++": "bg-pink-500",
  C: "bg-pink-800",
  Python: "bg-indigo-600 text-white",
  JavaScript: "bg-orange-500",
  "Next.js": "bg-orange-900 text-white",
  React: "bg-blue-400 text-white",
  ReactNative: "bg-blue-800 text-white",
  Cybersecurity: "bg-black text-white",
  OpenSource: "bg-yellow-800 text-white",
};

const SingleProject = ({ logo, name, description, link, tags }) => {
  return (
    <div className="bg-gray-80 dark:bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xll duration-300">
      {/* {logo && <img src={logo} alt={name} className="w-16 h-16 mb-4" />} */}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>

      {/* Tags Box */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              tagColors[tag] || "bg-green-800 text-white"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Visit Project <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default SingleProject;
