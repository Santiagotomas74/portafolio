import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

// Importa el hook de idioma y las traducciones
import { useLanguage } from './context/LanguageContext';
import translations from './translations/ProyecTranslations';
// Importa el nuevo componente LanguageSwitcher
import LanguageSwitcher from './LanguageSwitcher'; 

function Projectsview() {
  // Obtiene el idioma actual y los textos traducidos
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      className="projects-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Inserta el componente LanguageSwitcher */}
      <LanguageSwitcher />
      
      <div className="projects-container">
        <h1 className="titulo">{t.projectsTitle}</h1>
        <div className="home-neon-wrapper2">
          <div className="project-card">
            <h2>{t.project1Title}</h2>
            <p>{t.project1Subtitle}</p>
            <ul>
              <li>React + Material UI</li>
              <li>Node.js + Express</li>
              <li>PostgreSQL + JWT</li>
            </ul>
            <div className="project-details">
              <p>{t.project1Description}</p>
              <Button
                variant="contained"
                color="primary"
                className="project-button"
                component={Link}
                to="/projects/truckers-talent"
              >
                {t.viewDetails}
              </Button>
            </div>
          </div>
        </div>

        <div className="home-neon-wrapper2">
          <div className="project-card">
            <h2>{t.project2Title}</h2>
            <p>{t.project2Subtitle}</p>
            <ul>
              <li>React + Socket.IO</li>
              <li>Express + PostgreSQL</li>
              <li>Criptografía RSA</li>
            </ul>
            <div className="project-details">
              <p>{t.project2Description}</p>
              <Button
                variant="contained"
                color="primary"
                className="project-button"
                component={Link}
                to="/projects/mensajeria-segura"
              >
                {t.viewDetails}
              </Button>
            </div>
          </div>
        </div>

        <div className="home-neon-wrapper2">
          <div className="project-card">
            <h2>{t.project3Title}</h2>
            <p>{t.project3Subtitle}</p>
            <ul>
              <li>React + Redux Toolkit</li>
              <li>Node.js + MySQL</li>
              <li>MercadoPago SDK</li>
            </ul>
            <div className="project-details">
              <p>{t.project3Description}</p>
              <Button
                variant="contained"
                color="primary"
                className="project-button"
                component={Link}
                to="/projects/pasteleria-selenita"
              >
                {t.viewDetails}
              </Button>
            </div>
          </div>
        </div>

        <div className="home-neon-wrapper2">
          <div className="project-card">
            <h2>{t.project4Title}</h2>
            <p>{t.project4Subtitle}</p>
            <ul>
              <li>Juego 2D (JavaScript)</li>
              <li>JMapViewer + Java</li>
              <li>Algoritmos optimizados</li>
            </ul>
            <div className="project-details">
              <p>{t.project4Description}</p>
              <Button
                variant="contained"
                color="primary"
                className="project-button"
                component={Link}
                to="/projects/java"
              >
                {t.viewDetails}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projectsview;
