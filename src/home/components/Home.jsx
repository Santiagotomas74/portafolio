import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link, IconButton } from "@mui/material";
import AnimatedLogo from './ReactLogo'; // Import the animated logo component



function Homeview() {
  const rawPhoneNumber = "+54 11 2604-2925";
  const formattedPhoneNumber = rawPhoneNumber.replace(/\D/g, "");
  return (
    
     <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
    
    <div className="home-container">
      <div className="home-content">
        <div className="logo">
        <AnimatedLogo />
        </div>
        <h1>Santiago Taher </h1>
        <h2>Desarrollador Full Stack</h2>
        <p>¡Bienvenido a mi portafolio!</p>
        <p>
          Soy un apasionado por la programación y el desarrollo de soluciones digitales seguras,
          escalables y centradas en el usuario. Actualmente estudio la Licenciatura en Sistemas
          en la UNGS y me desempeño como desarrollador web con experiencia en proyectos reales
          tanto personales como profesionales.
        </p>
        <div className="home-links">
          <Link href="https://www.linkedin.com/in/santiago-taher-239008317" target="_blank" color="inherit" underline="hover">
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
            LinkedIn
          </Link>

          <Link href={`https://wa.me/${formattedPhoneNumber}`} target="_blank" color="inherit" underline="hover">
            <IconButton color="inherit">
              <WhatsAppIcon />
            </IconButton>
             WhatsApp
          </Link>

          <Link href={`mailto:santiago_lucas1@hotmail.com`} target="_blank" color="inherit" underline="hover">
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
             Email
          </Link>
        </div>
      </div>
 
    </div>
    

    </motion.div>
    
  );
}

export default Homeview;
