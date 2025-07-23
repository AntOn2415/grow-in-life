import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const themes = {
  light: {
    background: "#f1faee",
    color: "#1d3557",
    navBg: "#a8dadc",
    navActive: "#457b9d",
    buttonBg: "#457b9d",
    buttonColor: "#fff",
  },
  dark: {
    background: "#1d3557",
    color: "#f1faee",
    navBg: "#457b9d",
    navActive: "#a8dadc",
    buttonBg: "#a8dadc",
    buttonColor: "#1d3557",
  },
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeProvider theme={themes[mode]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
