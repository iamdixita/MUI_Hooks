import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FF4D8D", // Dark Purple Background
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Soft shadow
        width: "134%",
        ml: "-13.4rem",
        mt: "-2rem",
      }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            cursor: "pointer",
            "&:hover": { color: "#ffeb3b" },
          }}
          onClick={() => navigate("/")}>
          PureBliss
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 10, mr: "37rem" }}>
          <Button
            sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.3rem" }}
            onClick={() => navigate("/")}
            disabled={location.pathname === "/"}>
            Home
          </Button>
          <Button
            sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.3rem" }}
            onClick={() => navigate("/about")}
            disabled={location.pathname === "/about"}>
            About
          </Button>
          <Button
            sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.3rem" }}
            onClick={() => navigate("/products")}
            disabled={location.pathname === "/products"}>
            Products
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
