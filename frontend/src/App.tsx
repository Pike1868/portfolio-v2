import "./App.css";
import AboutSection from "./components/AboutSection";
import BackToTop from "./components/BackToTop";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
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
                <AboutSection />
                <ProjectSection />
                <TestimonialSection />
                <ContactForm />
                <BackToTop />
                <Footer />
            </div>
        </div>
    );
}

export default App;
