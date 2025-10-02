import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import './Footer.css';

function FooterContact() {
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
        confirmButtonColor: '#00b4d8',
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
    <footer className="footer-contact">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Info */}
        <div className="footer-info">
          <h2>Contacto</h2>
          <p>¿Tenés una propuesta o consulta? ¡Escribime!</p>
          <ul>
            <li><strong>📧 Email:</strong> <a href="mailto:santiago_lucas1@hotmail.com">santiago_lucas1@hotmail.com</a></li>
            <li><strong>📱 Teléfono:</strong> +54 11 2604-2925</li>
            <li><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/santiago-taher-239008317" target="_blank" rel="noreferrer">Santiago Taher</a></li>
          </ul>
        </div>

        {/* Formulario */}
        <form className="footer-form" onSubmit={handleSubmit}>
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
            rows="5"
            placeholder="Tu mensaje..."
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit">📨 Enviar</button>
        </form>
      </motion.div>

      {/* Créditos */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Santiago Taher </p>
      </div>
    </footer>
  );
}

export default FooterContact;
