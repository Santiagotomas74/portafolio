import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importa el hook de idioma y las traducciones
import { useLanguage } from '../home/components/context/LanguageContext';
import translations from './translation/TruckersTranslations';
// Importa el nuevo componente LanguageSwitcher
import LanguageSwitcher from '../home/components/LanguageSwitcher'; 

function ProjectTruckers() {
  const navigate = useNavigate();
  // Obtiene el idioma actual y los textos traducidos
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      className="project-detail-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Inserta el componente LanguageSwitcher */}
      <LanguageSwitcher />

      <div className="back-button-container">
        <Tooltip title={t.back}>
          <IconButton onClick={() => navigate("/projects")}>
           <ArrowBackIcon fontSize="large" className="back-button" />
          </IconButton>
        </Tooltip>
      </div>

      <div className="project-detail-container">
        <h1>Truckers Talent</h1>
        <p><strong>{t.role}</strong> Desarrollador Full Stack</p>
        <p><strong>{t.techStack}</strong> React.js, Node.js, Express, PostgreSQL, JWT, Material UI</p>

        <h3>{t.projectOverview}</h3>
        <p>{t.projectTruckersDescription}</p>

        <h3>{t.frontendTitle}</h3>
        <ul>
          <li>{t.frontendPoint1}</li>
          <li>{t.frontendPoint2}</li>
          <li>{t.frontendPoint3}</li>
        </ul>

        <h3>{t.backendTitle}</h3>
        <ul>
          <li>{t.backendPoint1}</li>
          <li>{t.backendPoint2}</li>
          <li>{t.backendPoint3}</li>
          <li>{t.backendPoint4}</li>
        </ul>

        <h3>{t.databaseTitle}</h3>
        <ul>
          <li>{t.databasePoint1}</li>
          <li>{t.databasePoint2}</li>
          <li>{t.databasePoint3}</li>
        </ul>

        <h3>{t.securityPracticesTitle}</h3>
        <ul>
          <li>{t.securityPoint1}</li>
          <li>{t.securityPoint2}</li>
          <li>{t.securityPoint3}</li>
        </ul>

        <h3>{t.internshipCertificateTitle}</h3>
        <p>{t.internshipCertificateDescription}</p>
        <img
          src="/certificados/certificado.jpg"
          alt="Certificado de pasantía Truckers Talent"
          className="cert-image"
        />
      </div>
    </motion.div>
  );
}

export default ProjectTruckers;
