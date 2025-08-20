import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// Rutas corregidas: Asume que estos archivos están un nivel arriba o en una carpeta común como 'styles', 'assets', etc.
import './SideBar.css';
import AnimatedReactLogo from './logo'; // Asegúrate de que esta ruta sea correcta (ej: ../components/logo si logo.jsx está en 'components')

// Rutas corregidas: Asume que 'context' y 'translations' están en el mismo nivel que el componente que usa la Sidebar
import { useLanguage } from './context/LanguageContext'; 
import translations from './translations/SideBarTranslations'; 

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Obtiene el idioma actual y los textos traducidos
  const { language } = useLanguage();
  const t = translations[language];

  // Referencia para la imagen de perfil
  const profileImageRef = useRef(null);
  // Estado para la transformación de la imagen (parallax)
  const [imageTransform, setImageTransform] = useState({ x: 0, y: 0 });

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lógica del efecto parallax para la imagen
  useEffect(() => {
    const imageElement = profileImageRef.current;
    if (!imageElement) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = imageElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Posición del mouse relativa al centro de la imagen
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calcular la cantidad de movimiento (ajusta el factor para mayor o menor efecto)
      // Dividimos por un valor para suavizar el movimiento
      const moveX = mouseX * -0.05; // Mueve en dirección opuesta (efecto parallax)
      const moveY = mouseY * -0.05; // Mueve en dirección opuesta

      setImageTransform({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
      // Regresa la imagen a su posición original
      setImageTransform({ x: 0, y: 0 });
    };

    imageElement.addEventListener('mousemove', handleMouseMove);
    imageElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Limpia los event listeners al desmontar el componente
      imageElement.removeEventListener('mousemove', handleMouseMove);
      imageElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <>
      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img
            ref={profileImageRef} // Asigna la referencia a la imagen
            src="/photoEdit3.jpg" // Asegúrate de que esta ruta de imagen sea accesible desde la raíz pública
            alt="Foto de perfil"
            className="sidebar-profile"
            // Aplica la transformación CSS dinámica
            style={{ transform: `translateX(${imageTransform.x}px) translateY(${imageTransform.y}px)` }}
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
