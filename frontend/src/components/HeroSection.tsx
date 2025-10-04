import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
    const dynamicRoles = [
        "Software Support Engineer",
        "Systems Administrator",
        "Network Engineer",
        "IT Operations Engineer",
        "Systems Engineer",
        "Software Engineer",
        "Full-Stack Developer",
    ];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex(
                (prevIndex) => (prevIndex + 1) % dynamicRoles.length
            );
        }, 800);

        return () => clearInterval(interval);
    }, [dynamicRoles.length]);

    return (
        <main className=" p-6 py-16 border-b mb-8 flex flex-col md:flex-row items-center">
            <div className="flex-1 md:mr-6">
                <h2 className="text-4xl font-bold mb-4 text-start text-gray-900 dark:text-white">
                    Hi, I'm Luis
                </h2>
                <h3 className="text-2xl font-semibold mb-2 text-start text-[#C05746] dark:text-[#E07B6D]">
                    {dynamicRoles[currentRoleIndex]}
                </h3>
                <p className="text-lg my-8 text-start text-gray-700 dark:text-gray-300">
                    I'm an IT professional focused on server administration, database support, and cloud infrastructure. I keep Windows Server and SQL Server environments running efficiently, monitor Azure resources for performance, and build software solutions in TypeScript and React when development improves operations, automation, or system reliability.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/luis-mendoza-l/"
                        className="text-blue-500 dark:text-blue-400"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/Pike1868"
                        className="text-gray-800 dark:text-gray-200"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>
            </div>
            <div className="flex-1 relative mt-6 md:mt-0">
                <div className="relative">
                    <img
                        src="/luis-img.png"
                        alt="Luis Mendoza"
                        className="relative rounded-full mx-auto z-10 mr-16"
                    />
                </div>
            </div>
        </main>
    );
}
