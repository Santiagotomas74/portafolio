import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function Aboutview() {
  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-container">
        <h1>Sobre mí</h1>

        <p className="intro">
          ¡Hola! Soy <strong>Santiago Taher</strong>, un desarrollador <strong>Full Stack</strong> apasionado por construir soluciones web modernas, escalables y seguras. 
          Tengo 21 años, soy de <strong>San Miguel, Buenos Aires</strong> y actualmente curso el tercer año de la <strong>Licenciatura en Sistemas</strong> en la UNGS.
        </p>

        <section>
          <h2>🎓 Formación Académica</h2>
          <ul>
            <li><strong>Universidad Nacional de General Sarmiento (UNGS)</strong> — Lic. en Sistemas (4to año en curso)</li>
            <li><strong>Instituto Luis Federico Leloir</strong> — Bachiller en Economía (Finalizado en 2021)</li>
          </ul>
        </section>

        <section>
          <h2>📘 Formación Complementaria</h2>
          <ul>
            <li>
              <strong>Curso Full Stack Web Developer – UTN (2021)</strong><br />
              HTML5, CSS, JavaScript, React.js, Node.js, MySQL, MongoDB
            </li>
          </ul>
        </section>

        <section>
          <h2>🛠️ Stack Técnico</h2>
          <ul>
            <li><strong>Lenguajes:</strong> JavaScript, Python, Java, C#, Assembler</li>
            <li><strong>Frontend:</strong> React.js, Redux Toolkit, Vite, Material UI, Bootstrap</li>
            <li><strong>Backend:</strong> Node.js, Express, JWT, REST APIs</li>
            <li><strong>Bases de datos:</strong> PostgreSQL, MySQL, MongoDB</li>
            <li><strong>Herramientas:</strong> Git, GitHub, Vercel, Railway, EmailJS, MercadoPago SDK</li>
            <li><strong>Buenas prácticas:</strong> Arquitectura MVP, Arquitectura limpia, Testing con JUnit</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}

export default Aboutview;
