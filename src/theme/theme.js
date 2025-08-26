import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    komodoro: {
      bgPrimary: "#F2C291",
      accent: "#1C1915",
      accentWeak: "#876D53",
      white: "#FFFFFF",
      shadeLight: "#F4CCA4",
      shadeDark: "#D5AA7F",
    },
  },
  typography: {
    fontFamily: "'Ari-W9500', Helvetica, Arial, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 800,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2000,
    },
  },
});

export default theme;