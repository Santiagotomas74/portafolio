import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';


function ProjectMensajeria() {
  const navigate = useNavigate();
  return (
    
    <div>
      <div className="back-button-container">
        <Tooltip title="Volver">
          <IconButton onClick={() => navigate("/projects")} >
            <ArrowBackIcon fontSize="large" className="back-button" />
          </IconButton>
        </Tooltip>
      </div>
    <div className="project-detail-container">
      
      <h1>Mensajería Segura en Tiempo Real</h1>
      <p><strong>Rol:</strong> Desarrollador Full Stack</p>
       <p><strong>Sitio web:</strong> <a href="https://tp-final-sor2.vercel.app" target="_blank" rel="noopener noreferrer">Secure Message Hub</a></p>
      <p><strong>Proyecto académico final - Materia:</strong> Sistemas Operativos en Red II (SOR2)</p>

      <h3>Descripción general del proyecto</h3>
      <p>
        Este proyecto consistió en el diseño e implementación de una aplicación web full-stack para mensajería segura en tiempo real.
        Se aplicaron tecnologías modernas de desarrollo web y se incorporaron protocolos robustos de cifrado para garantizar 
        la confidencialidad y la integridad de los mensajes intercambiados.
      </p>

      <h3>Frontend (React.js + Material UI)</h3>
      <ul>
        <li>
          Desarrollo de una interfaz de usuario responsiva, clara y moderna utilizando <strong>React.js</strong> y <strong>Material UI</strong>.
        </li>
        <li>
          Funcionalidades clave como <strong>registro, inicio de sesión, lista de usuarios activos y chat en vivo</strong> con diseño adaptado a distintos dispositivos.
        </li>
        <li>
          Validaciones de formularios y gestión de sesiones en el cliente, mejorando la experiencia de usuario.
        </li>
      </ul>

      <h3>Backend (Node.js + Express + Socket.IO)</h3>
      <ul>
        <li>
          Construcción de un servidor con <strong>Node.js</strong> y <strong>Express</strong>, encargado de manejar la lógica de negocio, autenticación, sesiones y conexiones WebSocket.
        </li>
        <li>
          Implementación de <strong>JWT (JSON Web Token)</strong> para autenticación segura y persistente.
        </li>
        <li>
          Integración de <strong>Socket.IO</strong> para establecer un canal de comunicación bidireccional en tiempo real entre los usuarios.
        </li>
        <li>
          Separación clara entre capas: rutas, controladores, servicios y middleware.
        </li>
      </ul>

      <h3>Base de Datos (PostgreSQL)</h3>
      <ul>
        <li>
          Persistencia de usuarios y mensajes en una base de datos relacional con <strong>PostgreSQL</strong>.
        </li>
        <li>
          Estructura normalizada y uso de claves foráneas para mantener integridad referencial entre usuarios y sus conversaciones.
        </li>
        <li>
          Consultas seguras y optimizadas, evitando redundancia y mejorando la performance.
        </li>
      </ul>

      <h3>Seguridad y Criptografía</h3>
      <ul>
        <li>
          Se implementó <strong>cifrado de extremo a extremo</strong> con <strong>criptografía asimétrica RSA</strong>, generando claves públicas y privadas con OpenSSL.
        </li>
        <li>
          Cada mensaje enviado se cifraba con la clave pública del receptor y solo podía ser descifrado con su clave privada, asegurando total confidencialidad.
        </li>
        <li>
          Validación de identidad mediante firma de tokens y mecanismos de protección de rutas.
        </li>
      </ul>

      <h3>Despliegue en la nube</h3>
      <ul>
        <li>
          El backend fue desplegado en <strong>Railway</strong> (servidor + base de datos), y el frontend en <strong>Vercel</strong>, permitiendo acceso universal desde cualquier navegador.
        </li>
        <li>
          Configuración de variables de entorno y manejo de dominios para producción.
        </li>
      </ul>

      <h3>Resultado</h3>
      <p>
        Esta aplicación demuestra la integración efectiva de comunicación en tiempo real con seguridad avanzada, una interfaz amigable y una arquitectura sólida. 
        El proyecto fue clave para profundizar mis conocimientos en redes, criptografía aplicada y desarrollo web full stack orientado a la seguridad.
      </p>
    </div>
    </div>
   
  );
}

export default ProjectMensajeria;
