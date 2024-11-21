import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

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
    const favicon = document.querySelector("link[rel='icon']");
    const updateFavicon = () => {
      if (mediaQuery.matches) {
        favicon.href = "/favicon_dark.ico";
      } else {
        favicon.href = "/favicon_light.ico";
      }
    };
    updateFavicon();
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
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
