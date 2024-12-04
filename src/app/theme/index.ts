import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Custom primary color for light theme
    },
    secondary: {
      main: "#f50057", // Custom secondary color
    },
    background: {
      default: "#f4f6f8", // Background color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Custom primary color for dark theme
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
