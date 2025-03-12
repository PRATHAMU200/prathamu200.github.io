import { FaMedal } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Certifications() {
  const certifications = [
    {
      title: "Machine Learning & Deep Learning - NPTEL",
      issuer: "IIT Madras",
      year: "2024",
      url: "https://nptel.ac.in/noc/E_Certificate/NPTEL24EE146S95090211504207151",
    },
    {
      title: "Foundation Level in Programming & DataScience",
      issuer: "IIT Madras",
      year: "2023",
      url: "https://app.onlinedegree.iitm.ac.in/document_verification/a45c4256ee1e2615fa6a4725c395624f6f8c149f6b00f3ba56046488886adf3a",
    },
    {
      title: "Selected in Top 10 Finalist in the Hack-AI-Thon",
      issuer: "Deep-Solv",
      year: "2023",
    },
    {
      title: "Codechef Programming Contest",
      issuer: "IIT Madras",
      year: "2022",
      url: "https://app.onlinedegree.iitm.ac.in/document_verification/35d38963a1eba4570828f2ecb91180b4",
    },
    {
      title: "ICSI | Certified Network Security Specialist (CNSS)",
      issuer: "ICSI (International CyberSecurity Institute), UK",
      year: "2021",
      url: "https://ondemand.icsiglobal.com/certificates/kvrou0ggr7",
    },
    {
      title: "AI for India",
      issuer: "GUVI Geek Networks, IITM Research Park",
      year: "2021",
      url: "https://www.guvi.in/verify-certificate?id=D98umF68Bn198f514w",
    },
    {
      title: "CyberSec-03 [Advanced level] TechDrill",
      issuer: "GDG WTM Jalandhar",
      year: "2021",
      url: "https://www.guvi.in/verify-certificate?id=D98umF68Bn198f514w",
    },
    {
      title: "Build a Face Recognition Application",
      issuer: "GUVI Geek Networks, IITM Research Park",
      year: "2021",
      url: "https://www.guvi.in/verify-certificate?id=9170d4ox31E25qO962",
    },
    {
      title: "Pentest Fundamentals: Scanning Networks",
      issuer: "Cybrary",
      year: "2020",
      url: "https://app.cybrary.it/courses/api/certificate/CC-96cad8e7-f1a2-4bc5-858d-7ca0cf27dd1d/view",
    },
    {
      title: "Python",
      issuer: "HackerRank",
      year: "2020",
      url: "https://www.hackerrank.com/certificates/007710ee70ed",
    },
    {
      title: "Step into Robotic Process Automation",
      issuer: "GUVI Geek Networks, IITM Research Park",
      year: "2020",
      url: "https://www.guvi.in/verify-certificate?id=57932SP19pkv9676EO",
    },
  ];

  const achievements = [
    "Selected in Top 10 Finalist in the Hack-AI-Thon, receiving a Certificate of Excellence",
    "Ranked 7 in a in CodeChef Programming Contest by IIT Madras",
    "Part of EVRT Team at DTU, worked on an electric vehicle dashboard",
    "Being a Bug Bounty Hunter and helped many companies by reporting bugs in there product. {Over Hackerone}",
  ];

  return (
    <div>
      <section id="certifications" className="py-12">
        {/* Certifications List */}
        <div className="mt-1 grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border rounded-lg dark:border-gray-700 shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              <IoMdCheckmarkCircle className="text-green-500 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="achivements" className="py-12">
        {/* Achievements */}
        <div className="mt-1">
          <h2 className="text-3xl font-semibold flex items-center">
            <GiTrophyCup className="text-orange-500 w-8 h-8 mr-2" />
            Achievements
          </h2>
          <ul className="list-disc list-inside mt-8 space-y-2 text-gray-700 dark:text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center">
                <IoMdCheckmarkCircle className="text-blue-500 w-5 h-5 mr-2" />
                <span dangerouslySetInnerHTML={{ __html: achievement }} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
