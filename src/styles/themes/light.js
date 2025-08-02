// src/styles/themes/light.js
import { breakpoints } from "../shared/breakpoints";
import { media } from "../shared/media";
import { commonSpacing } from "../shared/commonSpacing";

export const light = {
  colors: {
    // Основні кольори фону та тексту
    background: "#FEFBF2", // Дуже світлий кремово-білий, щоб F7EEC4 виділявся
    cardBackground: "#FFFCE6", // Світлий, майже білий жовтий для карток
    color: "#4A453A", // Темний, теплий коричневий для основного тексту
    colorSecondary: "#857D6F", // Вторинний колір тексту

    // Кольори навігації та кнопок
    navBg: "#F7EEC4", // F7EEC4 як фон для навігації
    navActive: "#E8D9B4", // Трохи темніший відтінок F7EEC4 для активного стану
    buttonBg: "#A89A82", // Теплий сіро-коричневий для кнопок
    buttonColor: "#FFFFFF", // Білий текст кнопок
    hoverBtn: "#B8ACA2", // Світліший відтінок для ховеру кнопок

    // Межі та розділювачі
    borderColor: "#DDCBA6", // М'який сіро-жовтий, гармонійний з F7EEC4
    dividerColor: "#EBE3D0", // Світліший для розділювачів

    // Кольори для ховерів та акцентів
    hoverBg: "#F3E7C9", // **ОНОВЛЕНО: Світліший, але помітний відтінок F7EEC4 для ховеру елементів списку**
    accentBg: "#F7EEC4", // F7EEC4 як основний акцентний фон
    accentColor: "#4A453A", // Темний текст на акценті F7EEC4

    // **НОВІ КОЛЬОРИ ДЛЯ МЕНЮ**
    navItemHover: "#E8D9B4", // Колір ховеру для елементів меню (темніший F7EEC4)
    navItemActive: "#D3C29D", // Колір активного стану для елементів меню (ще темніший F7EEC4)
    sectionTitleHover: "#8A7D69", // Темніший, більш насичений колір для ховеру заголовка розділу

    // Кольори сповіщень
    successBg: "#E6F3E6", // Світлий зелений
    successColor: "#28A745",
    successText: "#1F7A3E",

    dangerBg: "#FBE7E7", // Світлий червоний
    dangerColor: "#DC3545",
    dangerText: "#9B333B",

    positiveBackground: "#E6F3E6",
    positiveBorder: "#B3E0B3",
    positiveText: "#1F7A3E",

    negativeBackground: "#FBE7E7",
    negativeBorder: "#E0B3B3",
    negativeText: "#9B333B",

    neutralBackground1: "#EEE9DE", // Нейтральний фон
    neutralBorder1: "#DDCBA6", // Нейтральний бордер
    neutralText1: "#4A4A4A", // Нейтральний текст

    neutralBackground2: "#F7F4EB", // Інший нейтральний фон
    neutralBorder2: "#EBE3D0", // Інший нейтральний бордер
    neutralText2: "#4A4A4A", // Інший нейтральний текст

    // Градієнти
    gradientStart: "#FFFCE6", // Починаємо з дуже світлого жовтого
    gradientEnd: "#FEFBF2", // Закінчуємо на базовому фоні

    // Інтерактивні елементи
    interactiveBgLight: "#E0F2F7", // Збережений блакитний
    interactiveBorderLight: "#A7D9EE",
    interactiveBgYellow: "#F7EEC4", // Використовуємо F7EEC4 як фон інтерактивного жовтого
    interactiveBorderYellow: "#E8D9B4", // Темніший відтінок F7EEC4 для бордера
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
    small: "0 2px 4px rgba(0, 0, 0, 0.05)",
    medium: "0 4px 12px rgba(0, 0, 0, 0.08)",
    large: "0 8px 24px rgba(0, 0, 0, 0.1)",
  },
  spacing: commonSpacing,
  breakpoints,
  media,
};
