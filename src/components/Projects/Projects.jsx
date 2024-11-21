import React from "react";
import { FaGithub } from "react-icons/fa";
import projects from "../../data/projectsData"; 
import "./Projects.css";

function Projects() {


  return (
    <section className="projects">
      <h2> Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <div className="project-buttons">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo-btn"
                ><span> Live Demo</span>
                 
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
