import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",

    h1: {
      fontWeight: 800,
      fontSize: "72px",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      "@media (max-width:600px)": { fontSize: "44px" },
    },

    h2: {
      fontWeight: 800,
      fontSize: "48px",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      "@media (max-width:600px)": { fontSize: "32px" },
    },

    h3: {
      fontWeight: 800,
      fontSize: "40px",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      "@media (max-width:600px)": { fontSize: "28px" },
    },

    h4: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "1.2",
      "@media (max-width:600px)": { fontSize: "24px" },
    },

    body1: {
      fontSize: "16px",
      lineHeight: "28px",
    },

    body2: {
      fontSize: "14px",
      lineHeight: "24px",
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

export default theme;
