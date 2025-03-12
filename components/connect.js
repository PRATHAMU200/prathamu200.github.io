"use client";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    const payload = {
      content: `**New Contact Form Submission**\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.message}`,
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("Discord Webhook Error:", error);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - Contact Form */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Let's <span className="text-yellow-500">Talk</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        {/* Contact Links */}
        <div className="flex gap-4 mb-6">
          <a
            href="mailto:prathamu200@gmail.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Mail className="w-5 h-5 text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/prathamu200"
            target="_blank"
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
          >
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://github.com/prathamu200"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-900 transition"
          >
            <FaGithub className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://twitter.com/mercykknight"
            target="_blank"
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition"
          >
            <FaTwitter className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/finalgif.gif"
          alt="Contact"
          // className="w-full max-w-md mx-auto"
          className="w-[450px] h-[450px] object-cover mx-auto"
        />
      </div>
    </div>
  );
}
