import React from 'react';
import './ProjectDetail.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importa el hook de idioma y las traducciones
import { useLanguage } from '../home/components/context/LanguageContext';
import translations from './translation/MensajeriaTranslation';
import LanguageSwitcher from '../home/components/LanguageSwitcher';

function ProjectMensajeria() {
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
      <LanguageSwitcher />
      <div className="back-button-container">
        <Tooltip title={t.back}>
          <IconButton onClick={() => navigate("/")} >
            <ArrowBackIcon fontSize="large" className="back-button" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="project-detail-container">
        
        <h1>{t.secureMessagingTitle}</h1>
        <p><strong>{t.role}</strong> {t.secureMessagingRole}</p>
        <p><strong>{t.website}</strong> <a href={t.secureMessagingLink} target="_blank" rel="noopener noreferrer">Secure Message Hub</a></p>
        <p><strong>{t.finalProject}</strong> {t.finalProjectSubtitle}</p>

        <h3>{t.projectOverview}</h3>
        <p>{t.secureMessagingDescription}</p>

        <h3>{t.secureMessagingFrontendTitle}</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingFrontendPoint1 }} />
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingFrontendPoint2 }} />
          <li>{t.secureMessagingFrontendPoint3}</li>
        </ul>

        <h3>{t.secureMessagingBackendTitle}</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingBackendPoint1 }} />
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingBackendPoint2 }} />
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingBackendPoint3 }} />
          <li>{t.secureMessagingBackendPoint4}</li>
        </ul>

        <h3>{t.secureMessagingDatabaseTitle}</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingDatabasePoint1 }} />
          <li>{t.secureMessagingDatabasePoint2}</li>
          <li>{t.secureMessagingDatabasePoint3}</li>
        </ul>

        <h3>{t.securityCryptoTitle}</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingSecurityPoint1 }} />
          <li>{t.secureMessagingSecurityPoint2}</li>
          <li>{t.secureMessagingSecurityPoint3}</li>
        </ul>

        <h3>{t.deploymentTitle}</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.secureMessagingDeploymentPoint1 }} />
          <li>{t.secureMessagingDeploymentPoint2}</li>
        </ul>

        <h3>{t.secureMessagingResultTitle}</h3>
        <p>{t.secureMessagingResultDescription}</p>
      </div>
    </motion.div>
  );
}

export default ProjectMensajeria;
