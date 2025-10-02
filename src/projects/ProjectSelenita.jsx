import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importa el hook de idioma y las traducciones
import { useLanguage } from '../home/components/context/LanguageContext';
import translations from './translation/PasteleriaTranslations';
// Importa el nuevo componente LanguageSwitcher
import LanguageSwitcher from '../home/components/LanguageSwitcher'; 

function ProjectSelenita() {
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

   
    
      <div className="project-detail-container">
        <h1>{t.pasteleriaTitle}</h1>
        <p><strong>{t.role}</strong> Desarrollador Full Stack</p>
        <img
          src="/caps/cap2.png"
          alt="Captura de pagina de perfumes-arabes"
          className="cert-image"
        />
        <p><strong>{t.website}</strong> <a href="https://pasteleria-sele.vercel.app" target="_blank" rel="noopener noreferrer" decoration="none">pasteleria-sele.vercel.app</a></p>

        <h3>{t.projectOverview}</h3>
        <p>{t.pasteleriaDescription}</p>

        <h3>{t.frontendTitle}</h3>
        <ul>
          <li>{t.pasteleriaFrontendPoint1}</li>
          <li>{t.pasteleriaFrontendPoint2}</li>
          <li>{t.pasteleriaFrontendPoint3}</li>
          <li>{t.pasteleriaFrontendPoint4}</li>
          <li>{t.pasteleriaFrontendPoint5}</li>
          <li>{t.pasteleriaFrontendPoint6}</li>
          <li>{t.pasteleriaFrontendPoint7}</li>
        </ul>

        <h3>{t.mainFeaturesTitle}</h3>
        <ul>
          <li><strong>{t.mainFeaturesPoint1}</strong></li>
          <li><strong>{t.mainFeaturesPoint2}</strong></li>
          <li><strong>{t.mainFeaturesPoint3}</strong></li>
          <li><strong>{t.mainFeaturesPoint4}</strong></li>
          <li><strong>{t.mainFeaturesPoint5}</strong></li>
        </ul>

        <h3>{t.backendTitle}</h3>
        <ul>
          <li>{t.pasteleriaBackendPoint1}</li>
          <li>{t.pasteleriaBackendPoint2}</li>
          <li>{t.pasteleriaBackendPoint3}</li>
          <li>{t.pasteleriaBackendPoint4}</li>
          <li>{t.pasteleriaBackendPoint5}</li>
        </ul>

        <h3>{t.databaseTitle}</h3>
        <ul>
          <li>{t.pasteleriaDatabasePoint1}</li>
          <li>{t.pasteleriaDatabasePoint2}</li>
          <li>{t.pasteleriaDatabasePoint3}</li>
          <li>{t.pasteleriaDatabasePoint4}</li>
        </ul>

        <h3>{t.resultTitle}</h3>
        <p>{t.pasteleriaResultDescription}</p>
      </div>
    </motion.div>
  );
}

export default ProjectSelenita;
