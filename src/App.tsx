import "./App.css";
import Header from "./components/Header";
import "./index.css";

function App() {
    return (
        <div className="">
            <div className="container mx-auto px-4">
                {/**Header */}
                <Header />
                {/* Main content */}
                <main className="mt-8">
                    <section className="bg-white p-6 rounded-lg shadow mb-8">
                        {/* Section content */}
                    </section>
                </main>
                <footer className="bg-gray-800 text-white p-6 mt-8">
                    {/* Footer content */}
                </footer>
            </div>
        </div>
    );
}

export default App;
