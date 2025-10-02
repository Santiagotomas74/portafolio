import React, { useRef, useState, useEffect } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link, IconButton } from "@mui/material"; 




import { useLanguage } from './context/LanguageContext';
import translations from './translations/HomeTranslations';



function Homeview() {
  const { language } = useLanguage(); 
  const t = translations[language];

  const rawPhoneNumber = "+54 11 2604-2925";
  const formattedPhoneNumber = rawPhoneNumber.replace(/\D/g, "");

  const contentRef = useRef(null);
  const [transformValues, setTransformValues] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    // 🚫 Desactivar parallax en móviles (ej: <= 768px)
    if (window.innerWidth <= 768) return;

    let animationFrameId = null;
    const margin = 10; 

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const { left, top, width, height } = contentElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateY = (mouseX / (width / 2)) * 5;
        const rotateX = (mouseY / (height / 2)) * -5;
        const translateZ = 20;

        setTransformValues({ rotateX, rotateY, translateZ });
      });
    };

    const handlePointerLeave = (e) => {
      const rect = contentElement.getBoundingClientRect();
      if (
        e.clientX <= rect.left - margin ||
        e.clientX >= rect.right + margin ||
        e.clientY <= rect.top - margin ||
        e.clientY >= rect.bottom + margin
      ) {
        setTransformValues({ rotateX: 0, rotateY: 0, translateZ: 0 });
      }
    };

    contentElement.addEventListener('pointermove', handleMouseMove);
    contentElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      contentElement.removeEventListener('pointermove', handleMouseMove);
      contentElement.removeEventListener('pointerleave', handlePointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <> 
     

    
        
        <div className="home-container">
          <div
            ref={contentRef}
            className="home-content"
            style={{
              // En móvil NO aplicamos transform
              transform: window.innerWidth <= 768 
                ? "none" 
                : `rotateX(${transformValues.rotateX}deg) rotateY(${transformValues.rotateY}deg) translateZ(${transformValues.translateZ}px)`,
              transition: 'transform 0.2s ease',
            }}
          >
            <h1>{t.name}</h1>
            <h2>{t.title}</h2>
            <p>{t.welcome}</p>
            <div dangerouslySetInnerHTML={{ __html: t.text }} />
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
      
   
    </>
  );
}

export default Homeview;
