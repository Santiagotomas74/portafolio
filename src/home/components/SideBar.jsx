import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Santiago Taher</h2>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">Sobre mí</Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active' : ''}>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
