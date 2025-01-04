/**
 * @file Contact.js
 * @description Componente de formulario de contacto en React.
 * Este archivo contiene la implementación de un formulario para enviar mensajes a través de EmailJS.
 * 
 * @author Gemma Ordax
 */

import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";

function Contact() {

  const { language } = useLanguage();
  const t = translations[language];
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Estado para mostrar un mensaje de éxito o error
  const [successMessage, setSuccessMessage] = useState("");
  // Actualiza el estado `formData` con los valores de los inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //Envía un correo electrónico a través de EmailJS si todos los campos están completos.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      emailjs
        .send(
          "service_pbjoosb", //Service ID de EmailJS
          "template_rxgm0yq", //Template ID de EmailJS
          formData,
          "IbEktCN7xgAamhJ_8" // Public Key de EmailJS
        )
        .then(
          (response) => {
            console.log(
              "Email enviado con éxito:",
              response.status,
              response.text
            );
            setSuccessMessage(t.successMessage);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            setTimeout(() => setSuccessMessage(""), 5000);
          },
          (error) => {
            console.error("Error al enviar el email:", error);
            setSuccessMessage(t.failedMessage);
          }
        );
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h2>{t.contactMe}</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t.contactName}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.phName}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t.contactEmail}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.phEmail}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t.contactMessage}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.phMessage}
            required
          />
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-btn">
            <span>{t.contactSubmit}</span>
            <i className="send-icon">
              <FaEnvelope />
            </i>
          </button>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
