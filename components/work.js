export default function Work() {
  return (
    <>
      <div className="space-y-6">
        {/* IEEE DTU Experience */}
        <div className="bg-gray-80 dark:bg-gray-800 p-4 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">IEEE DTU</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Apr 2023 - Present
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">~Web Executive</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-5 space-y-2">
            <li>Managed and updated the IEEE DTU website.</li>
            <li>Developed new features and improved UI/UX.</li>
            <li>Collaborated with teams for website maintenance.</li>
          </ul>
        </div>

        {/* EVRT DTU Experience */}
        <div className="bg-gray-80 dark:bg-gray-800 p-4 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">COE EVRT, DTU</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Jan 2023 - May 2023
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">~Team Developer</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-5 space-y-2">
            <li>Developed a Python GUI for an electric vehicle dashboard.</li>
            <li>Worked on data visualization and analysis.</li>
            <li>Integrated real-time data processing features.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
