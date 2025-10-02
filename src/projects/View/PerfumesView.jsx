import React from "react";
import ProjectPerfumes from "../ProjectPerfumes";
import { motion } from "framer-motion";
import Footer from "../../home/components/Footer";
import NavBar from "../NavBarProject"
const ViewHome= () => {
  return (
    <>

     <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
         <NavBar/>
        <ProjectPerfumes/>
       </motion.div>
       <Footer />
      </>
  );
};

export default ViewHome;