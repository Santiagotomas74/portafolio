import React from "react";
import ProjectSelenita from "../ProjectSelenita";
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
        <ProjectSelenita />
       </motion.div>
    </>
  );
};

export default ViewHome;