import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./components/Hero/Hero.jsx";
import { ThemeProvider } from "./Common/ThemeContext.jsx";
ThemeProvider;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
