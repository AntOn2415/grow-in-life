// src/contexts/ThemeProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
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

    // ✅ НОВІ КОЛЬОРИ ДЛЯ CONTRASTDISPLAY (LIGHT THEME)
    positiveBackground: "#D4EDDA", // Використовуємо successBg
    positiveBorder: "#A3D9A3", // Трохи темніший зелений, щоб виділити
    positiveText: "#155724", // Використовуємо successText

    negativeBackground: "#F8D7DA", // Використовуємо dangerBg
    negativeBorder: "#D9A3A3", // Трохи темніший червоний, щоб виділити
    negativeText: "#721c24", // Використовуємо dangerText
    // END ✅ НОВІ КОЛЬОРИ

    // ✅ НОВІ НЕЙТРАЛЬНІ КОЛЬОРИ ДЛЯ CONTRASTDISPLAY (LIGHT THEME)
    // Ці кольори будуть використовуватися, коли type === 'neutral'
    neutralBackground1: "#E8E2D4", // Використовуємо accentBg
    neutralBorder1: "#D4C9B6", // Використовуємо navActive
    neutralText1: "#4A4A4A", // Основний текст

    neutralBackground2: "#EFEADD", // Використовуємо navBg
    neutralBorder2: "#D4C9B6", // Використовуємо navActive
    neutralText2: "#4A4A4A", // Основний текст
    // END ✅ НОВІ НЕЙТРАЛЬНІ КОЛЬОРИ

    gradientStart: "#EFEADD",
    gradientEnd: "#F7F4EB",

    fontSizes: {
      small: "0.875rem", // 14px
      medium: "1rem", // 16px (базовий)
      large: "1.25rem", // 20px
      xlarge: "1.5rem", // 24px
      xxlarge: "2.5rem", // 40px
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
    shadows: {
      small: "0 2px 4px rgba(0, 0, 0, 0.08)",
      medium: "0 4px 12px rgba(0, 0, 0, 0.12)",
      large: "0 8px 24px rgba(0, 0, 0, 0.16)",
    },
    interactiveBgLight: "#E0F2F7",
    interactiveBorderLight: "#A7D9EE",
    interactiveBgYellow: "#FFFBE6",
    interactiveBorderYellow: "#FFD700",
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

    // ✅ НОВІ КОЛЬОРИ ДЛЯ CONTRASTDISPLAY (DARK THEME)
    positiveBackground: "#1F4228", // Використовуємо successBg
    positiveBorder: "#346F41", // Трохи темніший зелений для межі
    positiveText: "#D4EDDA", // Використовуємо successText

    negativeBackground: "#5C1C1E", // Використовуємо dangerBg
    negativeBorder: "#8B2B2F", // Трохи темніший червоний для межі
    negativeText: "#FAECEC", // Використовуємо dangerText
    // END ✅ НОВІ КОЛЬОРИ

    // ✅ НОВІ НЕЙТРАЛЬНІ КОЛЬОРИ ДЛЯ CONTRASTDISPLAY (DARK THEME)
    neutralBackground1: "#5C5C5C", // Використовуємо accentBg
    neutralBorder1: "#6B6B6B", // Використовуємо navActive
    neutralText1: "#E0E0E0", // Основний текст

    neutralBackground2: "#3A3A3A", // Використовуємо navBg
    neutralBorder2: "#6B6B6B", // Використовуємо navActive
    neutralText2: "#E0E0E0", // Основний текст
    // END ✅ НОВІ НЕЙТРАЛЬНІ КОЛЬОРИ

    gradientStart: "#2C2C2C",
    gradientEnd: "#6B6B6B",

    fontSizes: {
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
      xlarge: "1.5rem",
      xxlarge: "2.5rem",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
    shadows: {
      small: "0 2px 4px rgba(0, 0, 0, 0.2)",
      medium: "0 4px 12px rgba(0, 0, 0, 0.3)",
      large: "0 8px 24px rgba(0, 0, 0, 0.4)",
    },
    interactiveBgLight: "#3A4A5A",
    interactiveBorderLight: "#6A8AA0",
    interactiveBgYellow: "#4A4030",
    interactiveBorderYellow: "#E0B000",
  },
};

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

  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  const currentTheme = themes[mode];

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
