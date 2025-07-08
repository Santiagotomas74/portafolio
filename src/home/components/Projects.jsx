import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Projectsview() {
  return (
    <div className="projects-container">
      <h1 className="titulo">Proyectos Destacados</h1>
      <div className="home-neon-wrapper2">
      <div className="project-card">
        <h2>Truckers Talent (Full Stack)</h2>
        <p>
          Plataforma para conectar empresas de transporte con candidatos.
        </p>
        <ul>
          <li>React + Material UI</li>
          <li>Node.js + Express</li>
          <li>PostgreSQL + JWT</li>
        </ul>
        <div className="project-details">
          <p>
            Proyecto Full Stack con registro multi-paso, validaciones, autenticación segura con JWT,
            backend modular y bases de datos relacionales optimizadas. Incluye paneles de gestión, sesiones,
            control de acceso y despliegue en la nube.
          </p>
          <Button
            variant="contained"
            color="primary"
            className="project-button"
            component={Link}
            to="/projects/truckers-talent"
          >
            Ver Detalles
          </Button>
        </div>
      </div>
      </div>


      <div className="home-neon-wrapper2">
      <div className="project-card">
        <h2>App de Mensajería Segura (SOR2)</h2>
        <p>Chat seguro en tiempo real con cifrado.</p>
        <ul>
          <li>React + Socket.IO</li>
          <li>Express + PostgreSQL</li>
          <li>Criptografía RSA</li>
        </ul>
        <div className="project-details">
          <p>
            Implementación de mensajería cifrada de extremo a extremo. Cada usuario tiene claves públicas
            y privadas generadas con OpenSSL. La comunicación usa WebSocket y se gestiona en tiempo real.
            Backend desplegado en Railway, frontend en Vercel.
          </p>
          <Button
            variant="contained"
            color="primary"
            className="project-button"
            component={Link}
            to="/projects/mensajeria-segura"
          >
            Ver Detalles
          </Button>
        </div>
        </div>
      </div>

      <div className="home-neon-wrapper2">
      <div className="project-card">
        <h2>Pastelería Selenita (SPA)</h2>
        <p>Sitio e-commerce con autenticación y carrito de compras con integración de Mercado Pago.</p>
        <ul>
          <li>React + Redux Toolkit</li>
          <li>Node.js + MySQL</li>
          <li>MercadoPago SDK</li>
        </ul>
        <div className="project-details">
          <p>
            SPA que permite comprar productos, autenticarse, ver historial y acceder a un panel privado.
            Backend con rutas protegidas, validaciones y pasarela de pago integrada. Administra productos,
            usuarios y contactos vía EmailJS.
          </p>
          <Button
            variant="contained"
            color="primary"
            className="project-button"
            component={Link}
            to="/projects/pasteleria-selenita"
          >
            Ver Detalles
          </Button>
        </div>
      </div>
      </div>

      <div className="home-neon-wrapper2">
      <div className="project-card">
        <h2>Juegos y Algoritmos</h2>
        <p>Proyectos con lógica, simulación y visualización.</p>
        <ul>
          <li>Juego 2D (JavaScript)</li>
          <li>JMapViewer + Java</li>
          <li>Algoritmos optimizados</li>
        </ul>
        <div className="project-details">
          <p>
            Desde juegos de acción hasta simulaciones académicas: resolución de mochila, rompecabezas,
            algoritmos de grafos (Prim), y prácticas con arquitectura MVP y pruebas unitarias.
          </p>
          <Button
            variant="contained"
            color="primary"
            className="project-button"
            component={Link}
            to="/projects/java"
          >
            Ver Detalles
          </Button>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Projectsview;
