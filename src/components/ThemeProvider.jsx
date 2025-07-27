// src/contexts/ThemeProvider.js (або src/theme.js)
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

    gradientStart: "#EFEADD",
    gradientEnd: "#F7F4EB",

    // ✅ ДОДАНО: Розміри шрифтів
    fontSizes: {
      small: "0.875rem", // 14px
      medium: "1rem", // 16px (базовий)
      large: "1.25rem", // 20px
      xlarge: "1.5rem", // 24px
      xxlarge: "2.5rem", // 40px
    },
    // ✅ ДОДАНО: Радіуси заокруглення
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
    // ✅ ДОДАНО: Тіні
    shadows: {
      small: "0 2px 4px rgba(0, 0, 0, 0.08)",
      medium: "0 4px 12px rgba(0, 0, 0, 0.12)",
      large: "0 8px 24px rgba(0, 0, 0, 0.16)",
    },
    // ✅ ДОДАНО: Додаткові кольори для інтерактивних елементів
    // Ці кольори відповідають світло-блакитному та світло-жовтому, які були у вас раніше
    interactiveBgLight: "#E0F2F7", // Легкий фон для HighlightBox (світло-блакитний)
    interactiveBorderLight: "#A7D9EE", // Бордюр для HighlightBox (темніший блакитний)
    interactiveBgYellow: "#FFFBE6", // Легкий фон для QuestionPrompt (світло-жовтий)
    interactiveBorderYellow: "#FFD700", // Бордюр для QuestionPrompt (темніший жовтий)
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

    // ✅ ДОДАНО: Розміри шрифтів
    fontSizes: {
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
      xlarge: "1.5rem",
      xxlarge: "2.5rem",
    },
    // ✅ ДОДАНО: Радіуси заокруглення
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
    // ✅ ДОДАНО: Тіні
    shadows: {
      small: "0 2px 4px rgba(0, 0, 0, 0.2)",
      medium: "0 4px 12px rgba(0, 0, 0, 0.3)",
      large: "0 8px 24px rgba(0, 0, 0, 0.4)",
    },
    // ✅ ДОДАНО: Додаткові кольори для інтерактивних елементів
    interactiveBgLight: "#3A4A5A", // Темний фон для HighlightBox
    interactiveBorderLight: "#6A8AA0", // Темний бордюр для HighlightBox
    interactiveBgYellow: "#4A4030", // Темний фон для QuestionPrompt
    interactiveBorderYellow: "#E0B000", // Темний бордюр для QuestionPrompt
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
