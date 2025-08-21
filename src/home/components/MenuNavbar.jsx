import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuTartas from "./MenuTartas";
import MenuTortas from "./MenuTortas";
import MenuCookies from "./MenuCookies";
import MenuButtercream from "./MenuButtercream";
import Rellenos from "./Rellenos"


export default function NavBar() {
  const [activeSection, setActiveSection] = useState("Tortas");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const sections = ["Tortas", "Tartas", "Cookies", "ButterCream", "Minis Tortas"];

  return (
    <>
   
    <Box className="container2" sx={{ flexGrow: 1 }}>
      {/* NavBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "10px 0",
        }}
      >
          
        <Toolbar
          sx={{
            flexWrap: "wrap", // Permite que los elementos se adapten a múltiples líneas
            justifyContent: "center",
            gap: 2,
          }}
        >
          {sections.map((section) => (
            <Typography
              key={section}
              variant="h6"
              component="div"
              sx={{
                cursor: "pointer",
                color: "white",
                backgroundColor: "darkred",
                fontWeight: activeSection === section ? "bold" : "normal",
                border: "2px solid darkred",
                borderRadius: "8px",
                padding: "5px 15px",
                margin: "5px", // Espaciado ajustado para pantallas pequeñas
                textAlign: "center",
               
              }}
              onClick={() => handleSectionChange(section)}
            >
              {section}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>

      {/* Contenido Dinámico */}
      <Container
        sx={{
          padding: 2,
          backgroundColor: "#96000d",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {activeSection === "Tortas" && <MenuTortas />}
        {activeSection === "Tartas" && <MenuTartas />}
        {activeSection === "Cookies" && <MenuCookies />}
        {activeSection === "ButterCream" && <MenuButtercream/>}
        {activeSection === "Minis Tortas" && <Rellenos/>}
      </Container>
    </Box>
    </>
  );
}
