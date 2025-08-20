import React from "react";
import Home from "../components/Home";
import Sidebar from "../components/SideBar";
import TechStack from "../components/TechStack";
const ViewHome= () => {
  return (
    <>
     <Sidebar />
        <Home />
        <TechStack />
       
    </>
  );
};

export default ViewHome;