import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
// Rutas corregidas: Asume que estos archivos están un nivel arriba o en una carpeta común como 'styles', 'assets', etc.
import './SideBar.css'; // Ruta ajustada


// Rutas corregidas: Asume que 'context' y 'translations' están en un nivel superior
import { useLanguage } from './context/LanguageContext'; // Ruta ajustada
import translations from './translations/SideBarTranslations'; // Ruta ajustada

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
      // Usamos el `profile-wrapper` para el `getBoundingClientRect` para el cálculo relativo
      const wrapperElement = imageElement.closest('.profile-wrapper'); 
      if (!wrapperElement) return; // Asegurarse de que el wrapper existe

      const { left, top, width, height } = wrapperElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Posición del mouse relativa al centro del wrapper
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calcular la cantidad de movimiento (ajusta el factor para mayor o menor efecto)
      const moveX = mouseX * -0.05; // Mueve en dirección opuesta (efecto parallax)
      const moveY = mouseY * -0.05; // Mueve en dirección opuesta

      setImageTransform({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
      // Regresa la imagen a su posición original
      setImageTransform({ x: 0, y: 0 });
    };

    // Los event listeners se añaden al 'profile-wrapper' para capturar el movimiento sobre toda la zona
    const wrapperElement = profileImageRef.current?.closest('.profile-wrapper');
    if (wrapperElement) {
        wrapperElement.addEventListener('mousemove', handleMouseMove);
        wrapperElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      // Limpia los event listeners al desmontar el componente
      if (wrapperElement) {
        wrapperElement.removeEventListener('mousemove', handleMouseMove);
        wrapperElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <>
    <motion.div
     className="projects-container"
 initial={{ opacity: 0, x: -800 }} // sale desde la izquierda
 animate={{ opacity: 1, x: -200 }} // posición final
  exit={{ opacity: 0, x: -100 }} // sale hacia la izquierda al cerrar
 transition={{ duration: 0.8, ease: "easeInOut" }}
>
      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Nuevo contenedor para el efecto giratorio */}
        <div className="profile-wrapper">
            <img
                ref={profileImageRef} // Asigna la referencia a la imagen
                src="/photoEdit3.jpg" // Asegúrate de que esta ruta de imagen sea accesible desde la raíz pública
                alt="Foto de perfil"
                className="sidebar-profile"
                // Aplica la transformación CSS dinámica del parallax
                style={{ transform: `translateX(${imageTransform.x}px) translateY(${imageTransform.y}px)` }}
            />
        </div>

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
        
      </div>
    </motion.div>
    </>
  );
}

export default Sidebar;
