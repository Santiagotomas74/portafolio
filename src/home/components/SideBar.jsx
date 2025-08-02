import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './SideBar.css';
import AnimatedReactLogo from './logo';

// Importa el hook de idioma y las traducciones
import { useLanguage } from './context/LanguageContext';
import translations from './translations/SideBarTranslations';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Obtiene el idioma actual y los textos traducidos
  const { language } = useLanguage();
  const t = translations[language];

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img
            src="/photoEdit3.jpg"
            alt="Foto de perfil"
            className="sidebar-profile"
        />

        <h2>{t.name}</h2>
        <nav>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">{t.home}</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">{t.about}</Link>
            </li>
            <li className={location.pathname === '/projects' ? 'active' : ''}>
              <Link to="/projects">{t.projects}</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact">{t.contact}</Link>
            </li>
          </ul>
        </nav>
        <AnimatedReactLogo />
      </div>
    </>
  );
}

export default Sidebar;
