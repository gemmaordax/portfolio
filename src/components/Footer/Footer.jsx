/**
 * @file Footer.js
 * @description Componente de pie de página en React.
 * Este archivo contiene la implementación del Footer con un mensaje de agradecimiento.
 * 
 * @author Gemma Ordax
 */

import React from "react";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="footer">
      {/* Mensaje de pie de página con el corazón y nombre del autor */}
      <p>
       {t.made}
        <span>❤</span>
        {t.por} <p style={{ fontWeight: "bold" }}>Gemma Ordax</p>
      </p>
    </div>
  );
}

export default Footer;

