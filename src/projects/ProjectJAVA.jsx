import React from 'react';
import './Java.css';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importa el hook de idioma y el archivo de traducciones.
// Debes asegurarte de que estos archivos existan en tu proyecto.
import { useLanguage } from '../home/components/context/LanguageContext';
import translations from './translation/JavaTranslations';
// Importa el componente LanguageSwitcher para los botones de idioma
import LanguageSwitcher from '../home/components/LanguageSwitcher';

function ProjectJava() {
  const navigate = useNavigate();
  // Obtiene el idioma actual y los textos traducidos
  const { language } = useLanguage();
  const t = translations[language];

  return (
    // Usa motion.div para aplicar animaciones de transición
    <motion.div
      className="project-detail-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Añade el componente para cambiar de idioma */}
      <LanguageSwitcher />

      {/* Botón fijo para volver a la página de proyectos */}
      <div className="back-button-container2">
        <Tooltip title={t.back}>
          <IconButton onClick={() => navigate("/projects")}>
            <ArrowBackIcon fontSize="large" className="back-button2" />
          </IconButton>
        </Tooltip>
      </div>

      {/* Contenido principal del proyecto */}
      <div className="project-detail-container2">
        <h1>{t.javaTitle}</h1>
        
        <p><strong>{t.role}</strong> {t.javaRole}</p>

        <h3>{t.javaTravelSimulationTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: t.javaTravelSimulationDescription }} />

        <h3>{t.javaPuzzleGameTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: t.javaPuzzleGameDescription }} />

        <h3>{t.javaPrimAlgorithmTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: t.javaPrimAlgorithmDescription }} />

        <h3>{t.javaKnapsackTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: t.javaKnapsackDescription }} />

        <h3>{t.javaJunitTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: t.javaJunitDescription }} />

        <hr />

        <h3>{t.javaGame2DTitle}</h3>
        <p>{t.javaGame2DDescription}</p>
        <ul>
          <li>{t.javaGame2DPoint1}</li>
          <li>{t.javaGame2DPoint2}</li>
          <li>{t.javaGame2DPoint3}</li>
          <li dangerouslySetInnerHTML={{ __html: t.javaGame2DPoint4 }} />
        </ul>

        <h3>{t.armProjectTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: t.armProjectDescription }} />
        <ul>
          <li>{t.armProjectPoint1}</li>
          <li>{t.armProjectPoint2}</li>
          <li>{t.armProjectPoint3}</li>
          <li dangerouslySetInnerHTML={{ __html: t.armProjectPoint4 }} />
          <li dangerouslySetInnerHTML={{ __html: t.armProjectPoint5 }} />
        </ul>

        <h3>{t.pythonWordGameTitle}</h3>
        <p>{t.pythonWordGameDescription}</p>
        <ul>
          <li>{t.pythonWordGamePoint1}</li>
          <li>{t.pythonWordGamePoint2}</li>
          <li>{t.pythonWordGamePoint3}</li>
          <li>{t.pythonWordGamePoint4}</li>
          <li>{t.pythonWordGamePoint5}</li>
        </ul>

        <h3>{t.javaGeneralResultTitle}</h3>
        <p>{t.javaGeneralResultDescription}</p>
      </div>
    </motion.div>
  );
}

export default ProjectJava;
