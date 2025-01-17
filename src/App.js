/**
 * @file App.js
 * @description Este componente principal de la aplicación maneja el estado global del tema (oscuro o claro),
 * la apertura del menú de navegación, y la gestión del cambio de favicon basado en el tema.
 * Además, incluye todos los componentes de la aplicación como Navbar, About, Skills, Projects, Contact, Footer,
 * y el botón para volver al inicio.
 *
 * @author Gemma Ordax
 */
import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton"; // Importa el botón

function App() {
  // Estado para el modo oscuro o claro
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cambia la clase del body cuando cambia el tema
  useEffect(() => {
    // Verificar si ya hay una preferencia de tema guardada en localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Si no se encuentra, verificar el tema preferido del sistema
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkScheme);
    }
  }, []);

  // Guardar el tema actual en localStorage cuando cambia
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Cambia el favicon en función del modo
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const favicon = document.querySelector("#favicon");

    const updateFavicon = () => {
      if (mediaQuery.matches) {
        favicon.href = process.env.PUBLIC_URL + "/favicon_dark.ico";
      } else {
        favicon.href = process.env.PUBLIC_URL + "/favicon_light.ico";
      }
    };

    updateFavicon(); // Cambia el favicon al cargar la página
    mediaQuery.addEventListener("change", updateFavicon);

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);

  return (
    <div className="App">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <main className="main-content">
        <About isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Skills isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Projects isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Contact isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </main>
      <ScrollToTopButton />
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
