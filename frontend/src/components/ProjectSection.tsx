import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    const projects = [
        {
            title: "Social Calendar",
            description:
                "Developed a full-stack social calendar application integrating the Google Calendar API and Ticketmaster API. Built with React.js, Redux, Node.js, PostgreSQL, JWT.",
            image: "/social-calendar-app-screenshot.png",
            liveUrl: "https://react-social-calendar-app.onrender.com/signup",
            repoUrl: "https://github.com/Pike1868/social-calendar-app",
        },
        {
            title: "SyntaxThreads Storefront",
            description:
                "SyntaxThreads.com is the production storefront for my developer apparel brand. Built with Vite, React, TypeScript, Tailwind, and Redux Toolkit, it hydrates the Etsy catalog from structured JSON, includes collection filters and auto-rotating galleries, and routes shoppers to Etsy checkout with trust-building merch detail pages.",
            image: "/syntaxthreads-main-page-pic.png",
            liveUrl: "https://www.syntaxthreads.com/",
            repoUrl: "https://github.com/Pike1868/syntaxthreadsco",
        },
        {
            title: "Jobly",
            description:
                "React.js Single-Page Application (SPA) simulating a job application portal. Users can browse jobs, apply for positions, and manage profiles. Built with React.js, Node.js, PostgreSQL, JWT.",
            image: "/jobly-app-screenshot.png",
            liveUrl: "https://lm-jobly-fe.onrender.com/",
            repoUrl: "https://github.com/Pike1868/react-jobly",
        },
        {
            title: "Next Read Book Tracker App",
            description:
                "Next Read is a web application developed using Flask. This app leverages the Google Books API for a vast library of book data retrieval.",
            image: "/next-read-flask-screenshot.png",
            liveUrl: "https://next-read-app.onrender.com/",
            repoUrl: "https://github.com/Pike1868/next_read_book_tracker_app",
        },
    ];

    return (
        <section className=" p-6 py-16 border-b-2 mb-8" id="projects">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8  justify-items-center mx-auto ">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        liveUrl={project.liveUrl}
                        repoUrl={project.repoUrl}
                    />
                ))}
            </div>
        </section>
    );
}
