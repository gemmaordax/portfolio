/**
 * @file Footer.js
 * @description Componente de pie de página en React.
 * Este archivo contiene la implementación del Footer con un mensaje de agradecimiento.
 * 
 * @author Gemma Ordax
 */

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* Mensaje de pie de página con el corazón y nombre del autor */}
      <p>
        Made with
        <span>❤</span>
        by <p style={{ fontWeight: "bold" }}>Gemma Ordax</p>
      </p>
    </div>
  );
}

export default Footer;

