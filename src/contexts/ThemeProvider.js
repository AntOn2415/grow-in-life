// src/contexts/ThemeProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider, css } from "styled-components";

const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1440px",
};

const media = {
  up:
    key =>
    (...args) =>
      css`
        @media (min-width: ${breakpoints[key]}) {
          ${css(...args)}
        }
      `,
  down:
    key =>
    (...args) =>
      css`
        @media (max-width: ${breakpoints[key]}) {
          ${css(...args)}
        }
      `,
  between:
    (minKey, maxKey) =>
    (...args) =>
      css`
        @media (min-width: ${breakpoints[minKey]}) and (max-width: ${breakpoints[maxKey]}) {
          ${css(...args)}
        }
      `,
};

const commonSpacing = {
  xsmall: "0.5rem", // 8px
  small: "1rem", // 16px
  medium: "1.5rem", // 24px
  large: "2rem", // 32px
  xlarge: "3rem", // 48px
};

const themes = {
  light: {
    background: "#F7F4EB",
    cardBackground: "#EFEADD",
    color: "#4A4A4A",
    navBg: "#EFEADD",
    navActive: "#D4C9B6",
    buttonBg: "#8D8D8D",
    buttonColor: "#FFFFFF",
    hoverBtn: "#B3B3B3",

    borderColor: "#D3D3D3",
    dividerColor: "#D3D3D3",
    hoverBg: "#EBE6D8",
    accentBg: "#E8E2D4",
    accentColor: "#8D8D8D",
    colorSecondary: "#7A7A7A", // Додано для EventYear, якщо немає

    successBg: "#D4EDDA",
    successColor: "#28A745",
    successText: "#155724",

    dangerBg: "#F8D7DA",
    dangerColor: "#DC3545",
    dangerText: "#721c24",

    positiveBackground: "#D4EDDA",
    positiveBorder: "#A3D9A3",
    positiveText: "#155724",

    negativeBackground: "#F8D7DA",
    negativeBorder: "#D9A3A3",
    negativeText: "#721c24",

    neutralBackground1: "#E8E2D4",
    neutralBorder1: "#D4C9B6",
    neutralText1: "#4A4A4A",

    neutralBackground2: "#EFEADD",
    neutralBorder2: "#D4C9B6",
    neutralText2: "#4A4A4A",

    gradientStart: "#EFEADD",
    gradientEnd: "#F7F4EB",

    fontSizes: {
      xsmall: "0.75rem",
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

    // ✅ ДОДАНО: Spacing
    spacing: commonSpacing,
    // ✅ ДОДАНО: Брейкпоінти та медіа-функції
    breakpoints,
    media,
  },
  dark: {
    background: "#2C2C2C",
    cardBackground: "#3A3A3A",
    color: "#E0E0E0",
    navBg: "#3A3A3A",
    navActive: "#6B6B6B",
    buttonBg: "#B3B3B3",
    buttonColor: "#2C2C2C",
    hoverBtn: "#8A8A8A",

    borderColor: "#4A4A4A",
    dividerColor: "#5C5C5C",
    hoverBg: "#4C4C4C",
    accentBg: "#5C5C5C",
    accentColor: "#E0E0E0",
    colorSecondary: "#B0B0B0", // Додано для EventYear, якщо немає

    successBg: "#1F4228",
    successColor: "#9CCC65",
    successText: "#D4EDDA",

    dangerBg: "#5C1C1E",
    dangerColor: "#F8D7DA",
    dangerText: "#FAECEC",

    positiveBackground: "#1F4228",
    positiveBorder: "#346F41",
    positiveText: "#D4EDDA",

    negativeBackground: "#5C1C1E",
    negativeBorder: "#8B2B2F",
    negativeText: "#FAECEC",

    neutralBackground1: "#5C5C5C",
    neutralBorder1: "#6B6B6B",
    neutralText1: "#E0E0E0",

    neutralBackground2: "#3A3A3A",
    neutralBorder2: "#6B6B6B",
    neutralText2: "#E0E0E0",

    gradientStart: "#2C2C2C",
    gradientEnd: "#6B6B6B",

    fontSizes: {
      xsmall: "0.75rem",
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

    // ✅ ДОДАНО: Spacing
    spacing: commonSpacing,
    // ✅ ДОДАНО: Брейкпоінти та медіа-функції
    breakpoints,
    media,
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
