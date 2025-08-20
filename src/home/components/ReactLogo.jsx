import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <motion.img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="React Logo"
      style={{ width: '50px', height: '50px', zIndex: 1000000 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    />
  );
};

export default AnimatedLogo;
