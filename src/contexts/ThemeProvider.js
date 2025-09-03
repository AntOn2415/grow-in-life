import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themes } from "../styles/themes";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode || "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // ✅ Використовуємо useCallback для стабілізації функції
  const toggleTheme = useCallback(() => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const currentTheme = themes[mode];

  // ✅ Використовуємо useMemo для стабілізації об'єкта value
  const value = useMemo(
    () => ({
      mode,
      toggleTheme,
      currentTheme,
    }),
    [mode, toggleTheme, currentTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
