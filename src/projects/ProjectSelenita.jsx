import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function ProjectSelenita() {
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
      
      <h1>Pastelería Selenita – E-commerce Full Stack</h1>
      <p><strong>Rol:</strong> Desarrollador Full Stack</p>
      <p><strong>Sitio web:</strong> <a href="https://pasteleria-sele.vercel.app" target="_blank" rel="noopener noreferrer" decoration="none">pasteleria-sele.vercel.app</a></p>

      <h3>Descripción general del proyecto</h3>
      <p>
        Pastelería Selenita es una tienda online desarrollada como Single Page Application (SPA), que permite a los usuarios navegar productos, realizar compras, autenticarse y, a los administradores, gestionar el catálogo de forma segura y escalable.
        Este proyecto abarca tanto el frontend como el backend, con integración de pagos online y una base de datos optimizada.
      </p>

      <h3>Frontend (React.js + Vite)</h3>
      <ul>
        <li>
          Aplicación construida como SPA con <strong>React.js</strong> y empaquetada con <strong>Vite</strong> para lograr tiempos de carga mínimos y excelente rendimiento.
        </li>
        <li>
          Gestión del estado global mediante <strong>Redux Toolkit</strong> para manejar el carrito, sesión de usuario y productos.
        </li>
        <li>
          Navegación con <strong>React Router DOM</strong>, incluyendo rutas públicas (catálogo) y privadas (panel administrativo).
        </li>
        <li>
          Diseño responsivo y accesible utilizando <strong>Material UI</strong> y <strong>Bootstrap</strong>.
        </li>
        <li>
          <strong>SweetAlert2</strong> para notificaciones personalizadas e interactivas.
        </li>
        <li>
          Integración con <strong>MercadoPago SDK para React</strong>, permitiendo realizar pagos en línea de forma segura.
        </li>
        <li>
          Separación de lógica de presentación siguiendo el patrón <strong>MVP (Model-View-Presenter)</strong> para facilitar mantenibilidad y escalabilidad.
        </li>
      </ul>

      <h3>Principales funcionalidades desarrolladas</h3>
      <ul>
        <li><strong>Carrito de compras:</strong> agregar, eliminar y visualizar productos en tiempo real.</li>
        <li><strong>Autenticación de usuarios:</strong> login seguro con rutas protegidas para el panel de administración.</li>
        <li><strong>Panel de administración:</strong> gestión completa de productos (crear, editar, eliminar).</li>
        <li><strong>Sistema de contacto:</strong> envío de mensajes vía <strong>EmailJS</strong>.</li>
        <li><strong>Componentes reutilizables</strong> y arquitectura modular para facilitar nuevas funcionalidades.</li>
      </ul>

      <h3>Backend (Node.js + Express)</h3>
      <ul>
        <li>
          Desarrollo de una API RESTful con <strong>Node.js</strong> y <strong>Express</strong>, organizada en rutas, middlewares y controladores.
        </li>
        <li>
          <strong>Autenticación y autorización</strong> de usuarios con manejo de sesiones y rutas protegidas.
        </li>
        <li>
          Endpoints dedicados a productos, usuarios y pagos, con control de errores centralizado.
        </li>
        <li>
          Integración de la API de <strong>MercadoPago</strong> para gestionar las transacciones en línea.
        </li>
        <li>
          Despliegue en servidor para asegurar accesibilidad, disponibilidad y escalabilidad.
        </li>
      </ul>

      <h3>Base de datos (MySQL + phpMyAdmin)</h3>
      <ul>
        <li>
          Diseño y administración de una base de datos <strong>MySQL</strong> estructurada y optimizada.
        </li>
        <li>
          <strong>Modelo normalizado</strong> con relaciones entre usuarios, productos y órdenes.
        </li>
        <li>
          Consultas SQL eficientes y organizadas, con claves foráneas e integridad referencial garantizada.
        </li>
        <li>
          Respaldos y procedimientos de recuperación de datos implementados para asegurar la disponibilidad.
        </li>
      </ul>

      <h3>Resultado</h3>
      <p>
        Este proyecto me permitió aplicar de manera integral habilidades de desarrollo frontend y backend, diseño de bases de datos, y uso de herramientas modernas como Vite, MercadoPago, Redux y EmailJS. 
        Consolidé el uso de patrones de diseño, y adquirí experiencia real en la construcción de soluciones completas de e-commerce con buenas prácticas de seguridad, modularidad y optimización de rendimiento.
      </p>
    </div>
     </div>
  );
}

export default ProjectSelenita;
