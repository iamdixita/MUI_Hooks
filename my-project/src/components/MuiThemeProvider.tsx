import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define the props interface to accept children
interface MUIThemeProps {
  children: ReactNode;
}

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: { main: "#ff5722" },
    secondary: { main: "#673ab7" },
    success: { main: "#4caf50" },
    error: { main: "#f44336" },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700, marginBottom: "2rem" },
    body1: { fontSize: "1rem" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
        },
      },
    },
  },
});

// MUIThemeProvider component to wrap the app
const MUITheme: React.FC<MUIThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUITheme;
