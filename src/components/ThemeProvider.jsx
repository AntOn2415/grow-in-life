import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const themes = {
  light: {
    background: "#F7F4EB", // Дуже світлий, теплий бежевий (буде кінцем градієнта)
    color: "#4A4A4A", // М'який темно-сірий (буде кольором тексту героя)
    navBg: "#EFEADD", // Світліший бежевий (колір хедера, буде початком градієнта)
    navActive: "#D4C9B6", // Приглушений сіро-бежевий
    buttonBg: "#8D8D8D", // Середній сірий
    buttonColor: "#FFFFFF", // Білий

    borderColor: "#D3D3D3", // Світло-сірий для меж
    hoverBg: "#EBE6D8", // Дуже світлий бежевий для ховеру (трохи темніше за background)
    accentBg: "#E8E2D4", // М'який акцентний фон для вибору (світліший за navActive)
    accentColor: "#8D8D8D", // Колір акценту (як buttonBg)

    successBg: "#D4EDDA", // Світло-зелений для успіху
    successColor: "#28A745", // Зелений для успіху
    successText: "#155724", // Темно-зелений для тексту успіху

    dangerBg: "#F8D7DA", // Світло-червоний для помилки
    dangerColor: "#DC3545", // Червоний для помилки
    dangerText: "#721c24", // Темно-червоний для тексту помилки

    // ОНОВЛЕНО: Градієнтні властивості для "герой" секції у світлій темі
    // Починаємо з кольору хедера (navBg) і градуємо до фонового кольору (background)
    gradientStart: "#EFEADD",
    gradientEnd: "#F7F4EB",
  },
  dark: {
    background: "#2C2C2C",
    color: "#E0E0E0",
    navBg: "#3A3A3A",
    navActive: "#6B6B6B",
    buttonBg: "#B3B3B3",
    buttonColor: "#2C2C2C",

    borderColor: "#4A4A4A",
    hoverBg: "#4C4C4C",
    accentBg: "#5C5C5C",
    accentColor: "#E0E0E0",

    successBg: "#1F4228",
    successColor: "#9CCC65",
    successText: "#D4EDDA",

    dangerBg: "#5C1C1E",
    dangerColor: "#F8D7DA",
    dangerText: "#FAECEC",

    gradientStart: "#2C2C2C",
    gradientEnd: "#6B6B6B",
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
