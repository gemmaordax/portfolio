import React, { useState, useRef } from "react";
import { FaCode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import projects from "../../data/projectsData";
import "./Projects.css";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const detailsRef = useRef(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setTimeout(() => {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    return (
        <section className="projects" ref={detailsRef}>
            <h2>Projects</h2>
            <div
                className="project-details-section"
                style={{ display: selectedProject ? "flex" : "none" }}
            >
                {selectedProject && (
                    <div className="project-details-content">
                        <div className="project-info">
                            <h2>{selectedProject.name}</h2>
                            <div className="project-description">
                                {selectedProject.description.split("\n").map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                            {/* Section for Technologies Used */}
                            <div className="project-technologies">
                                <h3>Technologies Used:</h3>
                                <ul>
                                    {selectedProject.technologies && selectedProject.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-buttons">
                                {selectedProject.liveDemoLink && (
                                    <a
                                        href={selectedProject.liveDemoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="live-demo-btn"
                                    >
                                        <span>LIVE DEMO</span>
                                    </a>
                                )}
                                {selectedProject.githubLink && (
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn"
                                    >
                                        <FaCode />
                                    </a>
                                )}
                                {selectedProject.figmaLink && (
                                    <a
                                        href={selectedProject.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn"
                                    >
                                        <FaFigma />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="project-mockup">
                            <img src={selectedProject.mockup} alt={`${selectedProject.name} mockup`} />
                        </div>
                    </div>
                )}
            </div>
            <div className="projects-container">
                {projects.map((project) => (
                    <div
                        className="project-card"
                        key={project.id}
                        onClick={() => handleProjectClick(project)}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project-details">
                            <h3>{project.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
