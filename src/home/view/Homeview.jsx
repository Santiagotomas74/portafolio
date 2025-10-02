import React from "react";

import Sidebar from "../components/SideBar";
import TechStack from "../components/TechStack";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher";                      


const ViewHome= () => {
  return (
    <>


      <Hero />
     <Sidebar />
        <TechStack />
        <LanguageSwitcher/>
        <Footer />

    
  

       
    </>
  );
};

export default ViewHome;