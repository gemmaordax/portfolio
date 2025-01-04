/**
 * @file Navbar.js
 * @description Componente de barra de navegación en React.
 * Este archivo contiene la implementación de un Navbar con un menú móvil, cambio de tema y scroll.
 * 
 * @author [Gemma Ordax]
 */

import React, { useState, useEffect, useRef, useCallback  } from 'react';
import './Navbar.css';
import logoLight from '../../assets/logo_light.svg';
import logoDark from '../../assets/logo_dark.svg';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";

function Navbar({ isDarkMode, toggleTheme }) {
  // Estado que maneja si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado que maneja si el navbar se ha desplazado hacia abajo
  const [isScrolled, setIsScrolled] = useState(false);

  // Referencia al navbar para verificar clics fuera de él
  const navbarRef = useRef(null); 

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

    // Función que cambia el estado 'isScrolled' según el desplazamiento de la página
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

    // Función que cierra el menú al hacer clic en un enlace de navegación
  const handleLinkClick = () => {
    setIsMenuOpen(false); 
    const appElement = document.querySelector('.main-content');
    if (appElement) {
      appElement.classList.remove('blur'); // Elimina el desenfoque del contenido
    }
  };

  // Función que se activa en el redimensionamiento de la ventana para ajustar el menú
  const handleResize = useCallback(() => {
    if (window.innerWidth > 848 && isMenuOpen) {
      setIsMenuOpen(false); // Cierra el menú si el tamaño de la ventana es mayor a 848px
      const appElement = document.querySelector('.main-content');
      if (appElement) {
        appElement.classList.remove('blur'); // Elimina el desenfoque del contenido
      }
    }
  }, [isMenuOpen]);

 // Función que alterna el estado del menú (abierto o cerrado) y aplica el desenfoque al contenido
 const toggleMenu = () => {
  setIsMenuOpen((prev) => !prev); // Cambia el estado del menú
  const appElement = document.querySelector('.main-content');
  if (!isMenuOpen) {
    appElement.classList.add('blur'); // Aplica el desenfoque cuando el menú está abierto
  } else {
    appElement.classList.remove('blur'); // Elimina el desenfoque cuando el menú está cerrado
  }
};

  // Efecto para manejar clics fuera del navbar y cerrar el menú si ocurre
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsMenuOpen(false); // Cierra el menú si se hace clic fuera del navbar
        const appElement = document.querySelector('.main-content');
        if (appElement) {
          appElement.classList.remove('blur'); // Elimina el desenfoque
        }
      }
    };

    // Añadir el evento de escucha para clics fuera del navbar
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup: eliminar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // Efecto para manejar eventos de scroll y resize
  useEffect(() => {
    // Añadir los eventos de scroll y resize al montar el componente
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup: eliminar los eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <nav ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={isDarkMode ? logoDark : logoLight} alt="Logo" />
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to='about' smooth={true} duration={500} onClick={handleLinkClick}>{t.about}</Link></li>
        <li><Link to='skills' smooth={true} duration={500} onClick={handleLinkClick}>{t.skills}</Link></li>
        <li><Link to='projects' smooth={true} duration={500} onClick={handleLinkClick}>{t.projectsTitle}</Link></li>
        <li><Link to='contact' smooth={true} duration={500} onClick={handleLinkClick}>{t.contact}</Link></li>
        <li onClick={toggleTheme} className="theme-toggle">{isDarkMode ? <FaSun /> : <FaMoon />}</li>
        <li onClick={toggleLanguage} className="theme-toggle">
                    {language === "en" ? "ES" : "EN"}
                </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
  {isMenuOpen ? <FaTimes /> : <FaBars />}
</div>
    </nav>
  );
}

export default Navbar;
