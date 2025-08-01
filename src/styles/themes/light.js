// src/styles/themes/light.js
import { breakpoints } from "../shared/breakpoints";
import { media } from "../shared/media"; // <-- ВИПРАВЛЕНО
import { commonSpacing } from "../shared/commonSpacing";

export const light = {
  colors: {
    background: "#F7F4EB",
    cardBackground: "#EFEADD",
    color: "#4A4A4A", // Основний колір тексту
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
    colorSecondary: "#7A7A7A", // Вторинний колір тексту

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

    interactiveBgLight: "#E0F2F7",
    interactiveBorderLight: "#A7D9EE",
    interactiveBgYellow: "#FFFBE6",
    interactiveBorderYellow: "#FFD700",
  },
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
    small: "0 2px 4px rgba(0, 0, 0, 0.08)",
    medium: "0 4px 12px rgba(0, 0, 0, 0.12)",
    large: "0 8px 24px rgba(0, 0, 0, 0.16)",
  },
  spacing: commonSpacing,
  breakpoints,
  media,
};
