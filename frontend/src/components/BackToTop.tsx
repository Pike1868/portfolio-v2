import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-12 right-16 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700"
        >
            <FaArrowUp size={24} />
        </button>
    );
}
