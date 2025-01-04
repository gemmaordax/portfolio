/**
 * @file About.js
 * @description Componente "About" en React.
 * Este archivo contiene la implementación de una sección de "Sobre mí" con una breve descripción, redes sociales, y un botón de descarga de CV.
 * 
 * @author Gemma Ordax
 */
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
  FaCheck,
} from "react-icons/fa";
import Perfil from "../../assets/perfil.jpg";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";

const About = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Función que maneja el clic en el botón de descarga
  const handleCVDownload = (e) => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };
  return (
    <div className="about">
      <div className="about-container">
        {/* Sección derecha con la imagen */}
        <div className="about-left">
          <img src={Perfil} alt="Gemma Ordax" className="about-image" />
        </div>
        {/* Sección izquierda con la información */}
        <div className="about-right">
          <div className="about-title">
            <h2>{t.aboutMe}</h2>
            <ReactTyped
              className="typed-text"
              strings={t.roles}
              typeSpeed={90}
              backSpeed={50}
              loop
            />
          </div>
          <p className="about-description">
          {t.aboutDescription}
          </p>
          {/* Redes sociales y botón de CV */}
          <div className="about-socials">
            <div className="about-socials-icons">
              <a
                href="https://www.linkedin.com/in/gemmaordax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="about-social-icon" />
              </a>
              <a
                href="https://github.com/gemmaordax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="about-social-icon" />
              </a>
              <a
                href="https://www.instagram.com/gemmma89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="about-social-icon" />
              </a>
            </div>
            <a
             href={`${process.env.PUBLIC_URL}/CV_GemmaOrdax.pdf`}
              className={`about-cv-button ${isClicked ? "clicked" : ""}`}
              onClick={handleCVDownload}
              download
            >
              <span>{t.resume}</span>
              <i className={`about-cv-icon ${isClicked ? "icon-checked" : ""}`}>
                {isClicked ? <FaCheck /> : <FaDownload />}
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
