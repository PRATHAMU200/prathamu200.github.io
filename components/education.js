import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="space-y-8">
      {/* College Entry */}
      <div className="bg-gray-80 dark:bg-gray-800 p-4 rounded-lg shadow-xl flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
        {/* Icon */}
        <img src="/DTU.png" className="w-8 h-8 flex-shrink-0"></img>

        {/* College Details */}
        <div>
          <h3 className="text-xl font-bold">
            Delhi Technological University (DTU)
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Bachelor of Technology (B.Tech) in Electrical Engineering
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            2021 - 2026
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
            <li>
              Currently in 6th Semester, aggregate till now is <i>8.16 CGPA </i>
            </li>
            <li>
              Gained expertise in Power Systems, Control Systems, and Embedded
              Systems.
            </li>
            <li>
              Worked on projects involving EV dashboards, web&app rojects and
              other.{" "}
              <a className="text-blue-400" href="/project">
                [Project Links]
              </a>
            </li>
            <li>
              Active member of IEEE DTU, contributing to web development and
              research work.
            </li>
            <li>Ranked in coding competitions like Codeforces and Leetcode.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-80 dark:bg-gray-800 p-4 rounded-lg shadow-xl flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
        {/* Icon */}
        <img src="/iitm.png" className="w-8 h-8 flex-shrink-0"></img>

        {/* College Details */}
        <div>
          <h3 className="text-xl font-bold">
            Indian Institute Of Technology, Madras (IIT Madras)
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Bachelors of Science in Programming & Data Science{" "}
            {"{Foundation level}"}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            2022 - 2023
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
            <li>
              I have completed my Foundation Degree and score <i>8.5 CGPA</i>
            </li>
            <li>
              I have been a part of Kanha Group and organised digital gaming
              contest
            </li>
            <li>
              I have also Score 7th rank in codechef contest in python organised
              by codechef
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-80 dark:bg-gray-800 p-4 rounded-lg shadow-xl flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
        {/* Icon */}
        <GraduationCap className="w-8 h-8 text-blue-500 flex-shrink-0" />

        {/* College Details */}
        <div>
          <h3 className="text-xl font-bold">Hans Raj Smarak Sr. Sec. School</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Senior Secondary [12th]
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            2020 - 2021
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
            <li>
              Scored 93% , I was having Science with Maths and CS as Subjects.
            </li>
            <li>
              Scored 99 in maths out of 100, and stand in Top 3 in the School
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
