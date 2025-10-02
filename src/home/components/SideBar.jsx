import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './SideBar.css';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from './context/LanguageContext';
import translations from './translations/SideBarTranslations';

// Importá tus vistas
import AboutView from '../view/AboutView';
import ProjectsView from '../view/ProjectView';
import ContactView from '../view/ContactView';
import HomeView from './Home';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { language } = useLanguage();
  const t = translations[language];

  // Detecta el scroll para fijar el sidebar luego de 100vh
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax para la imagen
  const profileImageRef = useRef(null);
  const [imageTransform, setImageTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const imageElement = profileImageRef.current;
    if (!imageElement) return;

    const handleMouseMove = (e) => {
      const wrapperElement = imageElement.closest('.profile-wrapper');
      if (!wrapperElement) return;

      const { left, top, width, height } = wrapperElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      setImageTransform({
        x: mouseX * -0.05,
        y: mouseY * -0.05
      });
    };

    const handleMouseLeave = () => {
      setImageTransform({ x: 0, y: 0 });
    };

    const wrapperElement = profileImageRef.current?.closest('.profile-wrapper');
    if (wrapperElement) {
      wrapperElement.addEventListener('mousemove', handleMouseMove);
      wrapperElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener('mousemove', handleMouseMove);
        wrapperElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Render dinámico de secciones
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutView />;
      case "projects":
        return <ProjectsView />;
    
      default:
        return <HomeView />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Botón hamburger SIEMPRE visible en mobile */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''} ${isFixed ? 'fixed' : ''}`}>
        <div className="profile-wrapper">
          <img
            ref={profileImageRef}
            src="/photoEdit3.jpg"
            alt="Foto de perfil"
            className="sidebar-profile"
            style={{ transform: `translateX(${imageTransform.x}px) translateY(${imageTransform.y}px)` }}
          />
        </div>

        <h2>{t.name}</h2>
        <nav>
          <ul>
            <li className={activeSection === "home" ? "active" : ""} onClick={() => setActiveSection("home")}>
              {t.home}
            </li>
            <li className={activeSection === "about" ? "active" : ""} onClick={() => setActiveSection("about")}>
              {t.about}
            </li>
            <li className={activeSection === "projects" ? "active" : ""} onClick={() => setActiveSection("projects")}>
              {t.projects}
            </li>
           
          </ul>
        </nav>
      </div>

      {/* Contenido dinámico con animación */}
      <div className='renderSection'>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // fuerza re-render con animación
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Sidebar;
