import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        isDarkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }, [isDarkMode]);

    return (
        <header className="py-2 flex justify-between items-center">
            <div className="flex items-end">
                {isDarkMode ? (
                    <img
                        src="/lm-logo-white.svg"
                        alt="logo"
                        className="w-10 h-10 shadow-xl"
                    />
                ) : (
                    <img
                        src="/lm-logo-black.svg"
                        alt="logo"
                        className="w-10 h-10 shadow-xl"
                    />
                )}
                <span className="ml-2 font-semibold text-2xl">
                    Luis Mendoza
                </span>
            </div>
            <nav className="flex items-center">
                <ul className="hidden sm:flex list-none gap-x-6">
                    <li>
                        <a href="#about" className="hover:underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className="hover:underline">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" className="hover:underline">
                            Testimonials
                        </a>
                    </li>
                </ul>
                <div className="sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="px-4 py-2 bg-gray-200 rounded-md"
                            onClick={toggleMenu}
                        >
                            <FaBars />
                        </DropdownMenuTrigger>
                        {isOpen && (
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <a href="#about">About</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#footer">Contact</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#projects">Projects</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#skills">Skills</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#testimonials">Testimonials</a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        )}
                    </DropdownMenu>
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800"
                >
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
}
