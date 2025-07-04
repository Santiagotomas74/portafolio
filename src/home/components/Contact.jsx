import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import './Contact.css';

function Contactview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://formsubmit.co/ajax/santiago_lucas1@hotmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme. Te responderé lo antes posible.',
        confirmButtonColor: '#0077b6',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal. Intentá nuevamente más tarde.',
      });
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Contacto</h1>

      <p>¿Tenés una propuesta o querés contactarme? ¡Escribime!</p>

      <div className="contact-info">
        <p><strong>📧 Email:</strong> <a href="mailto:santiago_lucas1@hotmail.com">santiago_lucas1@hotmail.com</a></p>
        <p><strong>📱 Teléfono:</strong> +54 11 2604-2925</p>
        <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/santiago-taher-239008317" target="_blank" rel="noreferrer">Santiago Taher</a></p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre..."
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email..."
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Tu mensaje..."
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button type="submit">📨 Enviar mensaje</button>
      </form>
    </motion.div>
  );
}

export default Contactview;
