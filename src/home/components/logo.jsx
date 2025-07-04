import { motion } from 'framer-motion';

const AnimatedReactLogo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      left: '20px',
      bottom: '20px',
      position: 'fixed',
      
      zIndex: '1000000',
   
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      color: '#aeb6c2'
    }}>
      <span>Página hecha con:</span>
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        style={{ width: '40px', height: '40px', left: '150px' , zIndex: '1000000'}}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
    </div>
  );
};

export default AnimatedReactLogo;
