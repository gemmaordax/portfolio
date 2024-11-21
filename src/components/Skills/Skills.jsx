import React from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";
import { skillsData } from "../../data/skillsData";
import { FaCode, FaFigma, FaPen, FaCameraRetro, FaVideo } from "react-icons/fa";

// Importa dinámicamente las imágenes de habilidades en formato SVG
const skillsImages = require.context("../../assets/skills", false, /\.svg$/);

function Skills() {
  //Crea un array con las habilidades repetidas 30 veces para el efecto de desplazamiento continuo.
  const loopedSkills = Array(30).fill(skillsData).flat();

  //Define los servicios con su nombre y el ícono correspondiente para la sección de servicios.
  const services = [
    { name: "Front End\nDevelopment", icon: <FaCode /> },
    { name: "UI/UX\nDesign", icon: <FaFigma /> },
    { name: "Graphic\nDesign", icon: <FaPen /> },
    { name: "Photograph", icon: <FaCameraRetro /> },
    { name: "Video\nEdition/Record", icon: <FaVideo /> },
  ];

  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill-scroll">
          <div className="marquee-container">
            <Marquee
              className="marquee"
              gradient={false}
              speed={80}
              pauseOnHover={true}
              delay={0}
              play={true}
              direction="left"
              loop={0}
            >
              {loopedSkills.map((skill, id) => {
                // Importa la imagen de la habilidad desde el directorio de assets
                const skillImage = skillsImages(`./${skill.image}`);
                return (
                  <div className="skill-box" key={`${skill.name}-${id}`}>
                    <img src={skillImage} alt={skill.name} />
                    <h3>{skill.name}</h3>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="servicesHeader">
          <h2>Services</h2>
        </div>
        <div className="servicesContainer">
          {services.map((service, index) => (
            // Itera sobre el array de servicios y muestra cada uno con un pequeño retraso para la animación.
            <div
              className="service-box"
              key={index}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
