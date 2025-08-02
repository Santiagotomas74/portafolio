import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link, IconButton } from "@mui/material"; // Elimina la importación de 'Button'
import AnimatedLogo from './ReactLogo';

import { useLanguage } from './context/LanguageContext';
import translations from './translations/translations';

// Importa el nuevo componente LanguageSwitcher
import LanguageSwitcher from './LanguageSwitcher'; // Asegúrate de que la ruta sea correcta
import { i } from 'framer-motion/m';

function Homeview() {
  const { language } = useLanguage(); // Ya no necesitas changeLanguage aquí
  const t = translations[language];

  const rawPhoneNumber = "+54 11 2604-2925";
  const formattedPhoneNumber = rawPhoneNumber.replace(/\D/g, "");

  return (
    <motion.div
      className="projects-container" // Considera cambiar este nombre si no es solo para proyectos
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Inserta el componente LanguageSwitcher aquí */}
      <LanguageSwitcher />

      <div className="home-container">
        <div className="home-content">
          <div className="logo">
            <AnimatedLogo />
          </div>
          <h1>{t.name}</h1>
          <h2>{t.title}</h2>
          <p>{t.welcome}</p>
          <p>{t.aboutMeParagraph1}</p>
          <p>{t.aboutMeParagraph2}</p>
          <div className="home-links">
            <Link href="https://www.linkedin.com/in/santiago-taher-239008317" target="_blank" color="inherit" underline="hover">
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              {t.linkedin}
            </Link>

            <Link href={`https://wa.me/${formattedPhoneNumber}`} target="_blank" color="inherit" underline="hover">
              <IconButton color="inherit">
                <WhatsAppIcon />
              </IconButton>
              {t.whatsapp}
            </Link>

            <Link href={`mailto:santiago_lucas1@hotmail.com`} target="_blank" color="inherit" underline="hover">
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              {t.email}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Homeview;