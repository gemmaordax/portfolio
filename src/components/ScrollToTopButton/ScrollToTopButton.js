/**
 * @file ScrollToTopButton.js
 * @description Componente que muestra un botón para desplazarse hacia arriba de la página cuando se hace scroll.
 * Este componente se vuelve visible cuando el usuario ha desplazado la página hacia abajo más de 500px.
 * Al hacer clic en el botón, la página se desplaza suavemente hacia arriba.
 * 
 * @author Gemma Ordax
 */

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500); // Mostrar botón al pasar 200px
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup del event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="scroll-icon"/>
    </button>
  );
};

export default ScrollToTopButton;