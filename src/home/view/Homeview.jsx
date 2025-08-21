import React from "react";
import Home from "../components/Home";
import Sidebar from "../components/SideBar";
import TechStack from "../components/TechStack";
import Hero from "../components/Hero";
const ViewHome= () => {
  return (
    <>
      <Hero />
     <Sidebar />
        <Home />
        <TechStack />
       
    </>
  );
};

export default ViewHome;