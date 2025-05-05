import React, { useState } from "react";
import { LiveDemoModal } from "../LiveDemoModal";
import { ChevronUp, ChevronRight, Info, ExternalLink, Github } from "lucide-react";

const Projects = ({ projects = [], pageInfo }) => {
    const { header2, defaultImage } = pageInfo;
    const completedProjects = projects.filter((project) => project.status === "Completed");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLiveDemoClick = (project) => {
        if (project.name === "Portfolio Website") {
            setIsModalOpen(true);
        } else {
            window.open(project.liveDemo, "_blank");
        }
    };

    return (
        <section id="projects" className="mx-auto p-10 mb-12 max-w-5xl">
            <h2 className="relative text-4xl font-heading text-center drop-shadow-md mb-6">
                            {header2}
                <span className="absolute -bottom-2 left-1/2 w-20 h-[3px] bg-[var(--border-color)] transform -translate-x-1/2"></span>
            </h2>
            <div>
                {completedProjects.map((project, index) => (
                    <div key={index} className="flex flex-col my-2">
                        <div className="m-4 p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6 rounded-2xl shadow-lg border-4 border-[var(--primary-light)] border-y-gray-200">
                            <img
                                src={project.image}
                                alt="text"
                                className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                            />
                            <div className="mx-5">
                                <h3 className="text-2xl text-center font-bold text-[var(--secondary-color)] dark:text-[var(--secondary-color)]">{project.name}</h3>
                                <p className="text-md text-center font-bold font-body mt-2">
                                    Tools & Frameworks: {project.stack.join(", ")}
                                </p>
                                <p className="mt-2 text-center text-sm p-3 transition-all duration-300">
                                  {project.description}
                                </p>

                                {/* Contributions*/}
                                <ul className="mt-4 px-2 space-y-2">
                                    {project.contributions.map((contribution, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm">
                                            <span className="text-[var(--secondary-color)] font-bold">|</span>
                                            <span>{contribution}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* 🛠️ Buttons Row */}
                                <div className="flex flex-wrap justify-center gap-5 mt-4">
                                    {project.github && (
                                        <a
                                          href={project.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="px-4 py-2 text-sm font-semibold text-white bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)] rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)]"
                                        >
                                          🔗 GitHub
                                        </a>
                                    )}

                                {(project.name === "Portfolio Website" || project.liveDemo) && (
                                    <button
                                      onClick={() => handleLiveDemoClick(project)}
                                      className="px-4 py-2 text-sm font-semibold text-white bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)] rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)]"
                                    >
                                    🌐 View Site
                                    </button>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;