import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-6 -mb-20 border-t border-gray-700 dark:border-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        {/* Left Side - Developer Info */}
        <div className="text-center">
          <p className="text-lg font-semibold">
            Made with <Heart className="inline text-red-500 w-5 h-5" /> by{" "}
            <span className="text-blue-400">Pratham Upadhyay</span>
          </p>
          <p className="text-sm text-gray-400">@2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
