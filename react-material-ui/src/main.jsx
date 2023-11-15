import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

///temas de material ui
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e7bfa5",
    },
    secondary: {
      main: "#b500d6",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  error:{
    main: "#e7bfa5",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
