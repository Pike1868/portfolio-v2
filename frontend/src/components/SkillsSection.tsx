import { DiJavascript1 } from "react-icons/di";
import {
    FaCss3Alt,
    FaGit,
    FaHtml5,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiPostgresql,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export default function SkillsSection() {
    return (
        <section
            className="bg-white dark:bg-gray-800 p-6 py-16 rounded-lg shadow mb-8"
            id="skills"
        >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <FaReact className="text-6xl text-blue-500 dark:text-blue-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        React
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <SiTypescript className="text-6xl text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        TypeScript
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaNodeJs className="text-6xl text-green-500 dark:text-green-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        Node.js
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <SiPostgresql className="text-6xl text-blue-400 dark:text-blue-300 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        PostgreSQL
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaReact className="text-6xl text-blue-500 dark:text-blue-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        React Native
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <SiRedux className="text-6xl text-purple-600 dark:text-purple-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        Redux
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <SiTailwindcss className="text-6xl text-blue-400 dark:text-blue-300 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        Tailwind CSS
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <DiJavascript1 className="text-6xl text-yellow-600 dark:text-yellow-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        JavaScript
                    </span>
                </div>

                <div className="flex flex-col items-center">
                    <FaPython className="text-6xl text-yellow-300 dark:text-yellow-200 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        Python
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaHtml5 className="text-6xl text-orange-500 dark:text-orange-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        HTML
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaCss3Alt className="text-6xl text-blue-500 dark:text-blue-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        CSS
                    </span>
                </div>

                <div className="flex flex-col items-center">
                    <FaGit className="text-6xl text-orange-500 dark:text-orange-400 mb-2" />
                    <span className="text-lg text-gray-900 dark:text-white">
                        Git
                    </span>
                </div>
            </div>
        </section>
    );
}
