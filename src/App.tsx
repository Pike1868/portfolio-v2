import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./index.css";

function App() {
    return (
        <div className="">
            <div className="container mx-auto px-4">
                <Header />
                {/* Main content */}
                <main className="mt-8">
                    <HeroSection />
                </main>
                <footer className="bg-gray-800 text-white p-6 mt-8">
                    {/* Footer content */}
                </footer>
            </div>
        </div>
    );
}

export default App;
