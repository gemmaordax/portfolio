import React, { useState, useEffect, useRef } from "react";
import { FaCode, FaFigma } from "react-icons/fa";
import projectsData from "../../data/projectsData";
import "./Projects.css";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);
    const detailsRef = useRef(null);

    const { language } = useLanguage();
    const t = translations[language];

    // Actualizar proyectos cuando el idioma cambie
    useEffect(() => {
        const selectedProjects = projectsData[language];
        setProjects(selectedProjects || []);
        setSelectedProject(null); 
    }, [language]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setTimeout(() => {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    return (
        <section className="projects" ref={detailsRef}>
            <h2>{t.projectsTitle}</h2>
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
                                <h3>{t.technologies}</h3>
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
                        <div className="project-hover">
                            <img src={project.mockup} alt={project.name} />
                            <h3>{project.name}</h3>
                        </div>
                        <div className="project-title">
                            <span>{project.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
