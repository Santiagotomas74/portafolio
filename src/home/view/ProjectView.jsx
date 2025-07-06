import React from "react";
import Projectsview from "../components/Projects";
import Sidebar from "../components/SideBar";
import { motion } from "framer-motion";
const ViewHome= () => {
  return (
    <>
     <Sidebar />
     <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
        <Projectsview />
       </motion.div>
    </>
  );
};

export default ViewHome;