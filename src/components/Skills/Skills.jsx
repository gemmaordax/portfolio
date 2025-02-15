/**
 * @file Skills.js
 * @description Componente que muestra las habilidades y servicios en la página.
 * Este archivo contiene la implementación de un componente que utiliza un efecto de
 * desplazamiento continuo para mostrar habilidades y presenta los servicios ofrecidos
 * con iconos correspondientes.
 *
 * @author Gemma Ordax
 */
import React from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";
import { skillsData } from "../../data/skillsData";
import { FaCode, FaFigma, FaPen, FaCameraRetro, FaVideo } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";

// Importa dinámicamente las imágenes de habilidades en formato SVG
const skillsImages = require.context("../../assets/skills", false, /\.svg$/);

function Skills() {
  //Crea un array con las habilidades repetidas 30 veces para el efecto de desplazamiento continuo.
  const loopedSkills = Array(30).fill(skillsData).flat();

  const { language } = useLanguage();
  const t = translations[language];

  //Define los servicios con el ícono correspondiente para la sección de servicios.
  const icons = {
    FaCode: <FaCode />,
    FaFigma: <FaFigma />,
    FaPen: <FaPen />,
    FaCameraRetro: <FaCameraRetro />,
    FaVideo: <FaVideo />,
  };

  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2>{t.skills}</h2>
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
          <h2>{t.services}</h2>
        </div>
        <div className="servicesContainer">
          {t.servicesRoles.map((service, index) => (
            // Itera sobre el array de servicios y muestra cada uno con un pequeño retraso para la animación.
            <div
              className="service-box"
              key={index}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="service-icon">{icons[service.icon]}</div>{" "}
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
