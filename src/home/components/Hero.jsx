import { motion } from "framer-motion";
import "./Hero.css"; // <-- ¡IMPORTANTE! Asegúrate de que este archivo CSS esté en el MISMO DIRECTORIO que este componente, o ajusta la ruta.
import Glitch from './Glitch';


   

const Hero = () => {
  return (

    <div className="hero-container">
      <motion.div
        className="circle"
        // Animación continua de rotación y deformación
        animate={{ 
          rotate: 360, // Rotación continua
          scale: [1, 1.05, 1], // Pulsación sutil del tamaño (se agranda un poco y vuelve)
          borderRadius: ["50%", "25%", "55%", "50%"], // Deformación sutil de la forma
        }}
        // Efecto al pasar el ratón (más pronunciado)
        whileHover={{ 
          scale: 1.2, // Se agranda más
          borderRadius: ["50%", "55%", "45%", "60%", "50%"], // Deformación más notoria
        }}
        transition={{
          // Transiciones para las animaciones continuas
          rotate: { repeat: Infinity, duration: 30, ease: "linear" }, // Rotación lenta y constante
          scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }, // Pulsación suave de tamaño
          borderRadius: { repeat: Infinity, duration: 5, ease: "easeInOut" }, // Deformación suave de la forma

          // Transiciones para el whileHover (Frame Motion maneja la superposición)
          // No necesitamos especificarlas aquí si ya están en 'animate'
          // y queremos que 'whileHover' las sobrescriba temporalmente.
        }}
      />
      
      <div className="hero-text">
        <div >
      <Glitch
        text=" Santiago Taher" 
        typingSpeed={80} // Más rápido
        glitchInterval={2000} // Cada 2 segundos
        glitchDuration={400} // Dura 0.4 segundos
        neonColor="#00dbfc" // El color neón deseado
        loop={true} // Se repite infinitamente
      />
    </div>
        
        <h2>Full-Stack Developer</h2>
         <h2><span>Portfolio</span></h2>
       
      </div>
       
    </div>
    
  );
};

export default Hero;
