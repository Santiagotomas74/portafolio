import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import HomeContentWithParallax from './HomeParallax';

import { useLanguage } from './context/LanguageContext';
import translations from './translations/ProyecTranslations';
import LanguageSwitcher from './LanguageSwitcher';

function Projectsview() {
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
      <LanguageSwitcher />

      <div className="projects-container">
        <h1 className="titulo">{t.projectsTitle}</h1>

        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="home-neon-wrapper2">
            <div className="project-card">
              <HomeContentWithParallax>
                <h2>{t[`project${num}Title`]}</h2>
                <p>{t[`project${num}Subtitle`]}</p>
                <ul>
                  {t[`project${num}Tech`].map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
                <div className="project-details">
                  <p>{t[`project${num}Description`]}</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="project-button"
                    component={Link}
                    to={t[`project${num}Link`]}
                  >
                    {t.viewDetails}
                  </Button>
                </div>
              </HomeContentWithParallax>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projectsview;
