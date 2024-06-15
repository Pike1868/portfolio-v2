import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialSection from "./components/TestimonialSection";
import "./index.css";

function App() {
    return (
        <div className="">
            <div className="container mx-auto px-4">
                <Header />
                {/* Main content */}
                <HeroSection />
                <SkillsSection />
                <ProjectSection />
                <TestimonialSection />
                <footer className="bg-gray-800 text-white p-6 mt-8">
                    {/* Footer content */}
                </footer>
            </div>
        </div>
    );
}

export default App;
