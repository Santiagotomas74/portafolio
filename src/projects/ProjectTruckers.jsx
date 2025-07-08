import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


function ProjectTruckers() {
  const navigate = useNavigate();
  return (
    <>
    <div>
     <div className="back-button-container">
        <Tooltip title="Volver">
          <IconButton onClick={() => navigate("/projects")}>
           <ArrowBackIcon fontSize="large" className="back-button" />
         </IconButton>
        </Tooltip>
      </div>
      </div>



    <div className="project-detail-container">
       
     
      <h1>Truckers Talent</h1>
      <p><strong>Rol:</strong> Desarrollador Full Stack</p>
      <p><strong>Tecnologías:</strong> React.js, Node.js, Express, PostgreSQL, JWT, Material UI</p>

      <h3>Descripción general del proyecto</h3>
      <p>
        Truckers Talent es una plataforma web orientada a conectar empresas del rubro transporte con candidatos calificados. 
        El objetivo principal fue facilitar la gestión de postulaciones laborales, permitiendo a las empresas registrar sus vacantes 
        y a los usuarios crear perfiles detallados con sus experiencias y habilidades.
      </p>

      <h3>Frontend (React.js + Material UI)</h3>
      <ul>
        <li>
          Se desarrollaron interfaces responsivas y accesibles utilizando <strong>React.js</strong> junto a <strong>Material UI</strong>, 
          asegurando compatibilidad con múltiples dispositivos y una experiencia fluida para el usuario.
        </li>
        <li>
          Se implementaron <strong>formularios multi-paso</strong> para el registro tanto de empresas como de candidatos. 
          Estos formularios incluyen validaciones dinámicas, navegación paso a paso y feedback inmediato sobre los campos ingresados.
        </li>
        <li>
          Se utilizaron componentes reutilizables y estructura modular, facilitando el mantenimiento y escalabilidad del código.
        </li>
      </ul>

      <h3>Backend (Node.js + Express)</h3>
      <ul>
        <li>
          Se diseñaron e integraron múltiples endpoints utilizando <strong>Express</strong>, organizando la lógica bajo el principio 
          de <strong>arquitectura limpia</strong> con separación clara entre controladores, rutas y servicios.
        </li>
        <li>
          Se implementó un sistema de autenticación segura mediante <strong>JSON Web Tokens (JWT)</strong>, permitiendo el acceso protegido a ciertas rutas y 
          funcionalidades dentro del sistema.
        </li>
        <li>
          El backend incluye <strong>middleware personalizado</strong> para validaciones, control de acceso y manejo centralizado de errores.
        </li>
        <li>
          Se desarrolló un sistema de <strong>verificación de usuarios vía email</strong> durante el proceso de registro, asegurando mayor confianza y autenticidad.
        </li>
      </ul>

      <h3>Base de Datos (PostgreSQL)</h3>
      <ul>
        <li>
          Se estructuró y normalizó la base de datos relacional utilizando <strong>PostgreSQL</strong>, garantizando integridad de datos y rendimiento óptimo.
        </li>
        <li>
          Se diseñaron relaciones entre tablas como usuarios, empresas, postulaciones y habilidades, incluyendo restricciones y claves foráneas.
        </li>
        <li>
          Se aplicó una separación clara entre las consultas SQL y la lógica de negocio, manteniendo la organización y la seguridad del sistema.
        </li>
      </ul>

      <h3>Prácticas de seguridad</h3>
      <ul>
        <li>
          Se incorporó protección <strong>CORS</strong> para evitar accesos no autorizados entre dominios.
        </li>
        <li>
          Las contraseñas fueron <strong>encriptadas con bcrypt</strong> antes de almacenarse.
        </li>
        <li>
          Se implementó un <strong>manejador de errores centralizado</strong> para capturar y registrar errores de forma segura.
        </li>
      </ul>

      <h3>Certificado de Pasantía</h3>
      <p>
       Este es el certificado otorgado por mi participación en el proyecto Truckers Talent:
      </p>
      <img
        src="/certificados/certificado.jpg"
        alt="Certificado de pasantía Truckers Talent"
        className="cert-image"
        />

    </div>
    </>
  );
}

export default ProjectTruckers;
