// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // --- Базові CSS скидання та глобальні налаштування ---
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};

    transition: background-color 0.4s ease-in-out,
                color 0.4s ease-in-out,
                border-color 0.4s ease-in-out;

    font-family: 'Roboto', 'Arial', sans-serif; // ✅ Переконайтесь, що це ваш фактичний шрифт
    line-height: 1.6;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // --- Переходи для загальних HTML-елементів ---

  a {
    color: ${({ theme }) => theme.accentColor}; // ✅ Використовуємо accentColor для посилань
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.color}; // ✅ Поміняли на theme.color при ховері
    }
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.small}; // ✅ З теми
    background-color: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonColor};
    transition: background-color 0.3s ease-in-out,
                color 0.3s ease-in-out,
                box-shadow 0.3s ease-in-out;
    &:hover {
      background: ${({ theme }) => theme.colors.hoverBtn}; // ОНОВЛЕНО
      transition: background 0.3s ease-in-out;
    }
    &:active {
      box-shadow: none;
    }
  }
  input, textarea, select {
    border: 1px solid ${({ theme }) => theme.borderColor};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.small}; // ✅ З теми
    transition: border-color 0.3s ease-in-out,
                background-color 0.3s ease-in-out,
                color 0.3s ease-in-out;
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.accentColor};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.accentColor + "33"};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color};
    transition: color 0.4s ease-in-out;
  }
  p{
    color: ${({ theme }) => theme.color};
    transition: color 0.4s ease-in-out;
  }
  span{
    color: ${({ theme }) => theme.color};
    transition: color 0.4s ease-in-out;
  }
  strong{
    color: ${({ theme }) => theme.color};
    transition: color 0.4s ease-in-out;
  }

  img {
    transition: filter 0.4s ease-in-out;
  }
`;

export default GlobalStyles;
