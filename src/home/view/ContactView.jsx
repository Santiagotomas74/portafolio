import React from "react";
import Contactview from "../components/Contact";
import Sidebar from "../components/sideBar";
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
      <Contactview />
       </motion.div>
    </>
  );
};

export default ViewHome;