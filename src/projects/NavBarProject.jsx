"use client";


import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255,255,255,0.9)",
        color: "black",
        borderRadius: "50px",
        width: { xs: "90%", sm: "70%", md: "60%" },
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo ST con redirección */}
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              letterSpacing: 1,
              cursor: "pointer",
            }}
          >
            ST
          </Typography>
        </a>

        {/* Botón Inicio con redirección */}
        <Box>
          <a href="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                px: 3,
                backgroundColor: "#6C63FF",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#574bdb" },
              }}
            >
              Inicio
            </Button>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
