import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importa el hook de idioma y las traducciones
import { useLanguage } from '../home/components/context/LanguageContext';
import translations from './translation/PerfumesTranslation';
// Importa el nuevo componente LanguageSwitcher
import LanguageSwitcher from '../home/components/LanguageSwitcher'; 

function ProjectPerfume() {
  const navigate = useNavigate();
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
      {/* Language switcher */}
      <LanguageSwitcher />

  
    
      <div className="project-detail-container">
        <h1>Perfumería Online</h1>
        
        <p><strong>{t.role}</strong> Desarrollador Full Stack</p>
        <img
          src="/caps/cap1.png"
          alt="Captura de pagina de perfumes-arabes"
          className="cert-image"
        />
        <p>
          <strong>Website: </strong> 
          <a 
            href="https://perfumes-arabes.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            perfumes-arabes
          </a>
        </p>

        {/* Descripción general */}
        <h3>{t.projectOverview}</h3>
        <p>{t.projectPerfumesDescription}</p>

        {/* Frontend */}
        <h3>{t.frontendTitle}</h3>
        <ul>
          <li>{t.frontendPoint1}</li>
          <li>{t.frontendPoint2}</li>
          <li>{t.frontendPoint3}</li>
          <li>{t.frontendPoint4}</li>
        </ul>

        {/* Backend */}
        <h3>{t.backendTitle}</h3>
        <ul>
          <li>{t.backendPoint1}</li>
          <li>{t.backendPoint2}</li>
          <li>{t.backendPoint3}</li>
          <li>{t.backendPoint4}</li>
        </ul>

        {/* Base de datos */}
        <h3>{t.databaseTitle}</h3>
        <ul>
          <li>{t.databasePoint1}</li>
          <li>{t.databasePoint2}</li>
          <li>{t.databasePoint3}</li>
        </ul>

        {/* Seguridad */}
        <h3>{t.securityPracticesTitle}</h3>
        <ul>
          <li>{t.securityPoint1}</li>
          <li>{t.securityPoint2}</li>
          <li>{t.securityPoint3}</li>
        </ul>

        {/* Panel Admin */}
        <h3>{t.adminPanelTitle}</h3>
        <ul>
          <li>{t.adminPanelPoint1}</li>
          <li>{t.adminPanelPoint2}</li>
          <li>{t.adminPanelPoint3}</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectPerfume;
