import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
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
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            setTimeout(() => setSuccessMessage(""), 5000);
          },
          (error) => {
            console.error("Error al enviar el email:", error);
            setSuccessMessage("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What's your name?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="What's your email?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What's your message?"
            required
          />
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-btn">
            <span>SEND</span>
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
