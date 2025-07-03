import React from "react";
import ProjectMensajeria from "../ProjectMensajeria";
import Sidebar from "../../home/components/Sidebar";
import { motion } from "framer-motion";

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
        <ProjectMensajeria />
       </motion.div>
    </>
  );
};

export default ViewHome;