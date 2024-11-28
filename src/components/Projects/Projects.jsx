/**
 * @file Projects.js
 * @description Componente que muestra una lista de proyectos con detalles interactivos. * 
 * @author Gemma Ordax
 */

import React, { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import projects from "../../data/projectsData";
import "./Projects.css";

function Projects() {
    // Maneja el estado del proyecto seleccionado
  const [selectedProject, setSelectedProject] = useState(null); 
  const detailsRef = useRef(null);

    // Cambia el proyecto seleccionado y hace scroll a la sección de detalles
  const handleProjectClick = (project) => {
    setSelectedProject(project); 
    setTimeout(() => {
      detailsRef.current.scrollIntoView({ behavior: "smooth" }); 
    }, 0);
  };

  return (
    <section className="projects" ref={detailsRef}>
            <h2>Projects</h2>
      {/* Sección para mostrar detalles */}
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
              <div className="project-buttons">
                <a
                  href={selectedProject.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo-btn"
                >
                  <span>LIVE DEMO</span>
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="project-mockup">
              <img src={selectedProject.mockup} alt={`${selectedProject.name} mockup`} />
            </div>
          </div>
        )}
      </div>

      {/* Sección de tarjetas */}

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
