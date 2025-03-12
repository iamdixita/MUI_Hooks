import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const theme = createTheme({
  palette: {
    primary: { main: "#ff69b4" }, // Sweet pink color
    secondary: { main: "#ffcccb" }, // Soft pink shade
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700, color: "#ff1493" },
    body1: { fontSize: "1.2rem", color: "#333" },
  },
});

const MotionBox = motion(Box);

export default function WelcomePage() {
  const navigate = useNavigate(); // Hook for navigation

  const handleGetStarted = () => {
    navigate("/products"); // Navigate to property list page
  };
  return (
    <ThemeProvider theme={theme}>
      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "relative", // Ensures elements don't extend beyond the screen
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "91.1vh",
          ml: "-13.3rem",
          width: "133.5%",
          background: "linear-gradient(to right, #ff9a9e, #fecfef)",
          textAlign: "center",
          overflow: "hidden",
        }}>
        <Typography variant="h1" sx={{ mt: "-5rem" }}>
          Welcome to PureBliss!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#990F4B", mt: 2 }}>
          "Enhance Your Glow: Must-Have Beauty Picks"
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGetStarted}
          sx={{
            borderRadius: "17px",
            px: 4,
            m: 2,
            height: "3rem",
            color: "#990F4B",
            fontWeight: "bold",
          }}>
          Get Started
        </Button>
      </MotionBox>
    </ThemeProvider>
  );
}
