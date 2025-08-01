// src/styles/themes/dark.js
import { breakpoints } from "../shared/breakpoints";
import { media } from "../shared/media";
import { commonSpacing } from "../shared/commonSpacing";

export const dark = {
  colors: {
    background: "#2C2C2C",
    cardBackground: "#3A3A3A",
    color: "#E0E0E0", // Основний колір тексту
    navBg: "#3A3A3A",
    navActive: "#6B6B6B",
    buttonBg: "#B3B3B3",
    buttonColor: "#2C2C2C",
    hoverBtn: "#8A8A8A",

    borderColor: "#4A4A4A",
    dividerColor: "#5C5C5C",
    hoverBg: "#4C4C4C",
    accentBg: "#5C5C5C",
    accentColor: "#F7F4EB",
    colorSecondary: "#B0B0B0", // Вторинний колір тексту

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

    interactiveBgLight: "#3A4A5A",
    interactiveBorderLight: "#6A8AA0",
    interactiveBgYellow: "#4A4030",
    interactiveBorderYellow: "#E0B000",
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
    small: "0 2px 4px rgba(0, 0, 0, 0.2)",
    medium: "0 4px 12px rgba(0, 0, 0, 0.3)",
    large: "0 8px 24px rgba(0, 0, 0, 0.4)",
  },
  spacing: commonSpacing,
  breakpoints,
  media,
};
