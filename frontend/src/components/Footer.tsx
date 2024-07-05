import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
       <section id="footer">
         <footer className="py-6 mb-2">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0 ">
                    <h5 className="text-bold">
                        &copy; {new Date().getFullYear()} Luis Mendoza. All
                        rights reserved.
                    </h5>
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a
                        href="https://www.linkedin.com/in/luis-mendoza-l/"
                        className="text-blue-500 dark:text-blue-400"
                    >
                        <FaLinkedin size={36} />
                    </a>
                    <a
                        href="https://github.com/Pike1868"
                        className="text-gray-800 dark:text-gray-200"
                    >
                        <FaGithub size={36} />
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <a
                        href="mailto:mendoza.L@protonmail.com"
                        className="text-slate-500 hover:text-[#C05746]"
                    >
                        mendoza.L@protonmail.com
                    </a>
                </div>
            </div>
        </footer>
       </section>
    );
}
