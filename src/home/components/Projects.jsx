import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import HomeContentWithParallax from './HomeParallax';

import { useLanguage } from './context/LanguageContext';
import translations from './translations/ProyecTranslations';


function Projectsview() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
  
      <h1 className="titulo">{t.projectsTitle}</h1>
      <div className="projects-container">
  {[5, 1, 2, 3, 4].map((num) => (
    <div key={num} className="home-neon-wrapper2">
      <div
        className="project-card"
        style={{
          backgroundImage: `url(/caps/${t[`project${num}Img`]}.png)`,
        }}
      >
        <div className="overlay">
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
    </div>
  ))}
</div>

    </>
  );
}

export default Projectsview;
