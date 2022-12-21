import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8f00",
    },
    secondary: {
      main: "#90CAF9",
    },
    text: {
      main: "#393E46",
    },
    textLight: {
      main: "#fff",
    },
    price: {
      main: "#E91E63",
    },
    bgBlue: {
      main: "#90CAF9",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
