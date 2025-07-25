// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // --- Базові CSS скидання та глобальні налаштування ---
  *, *::before, *::after {
    box-sizing: border-box; // Всі елементи включають padding та border у свою ширину/висоту
  }

  html {
    font-size: 16px; // Базовий розмір шрифту для кореневого елемента (для легкого використання rem одиниць)
  }

  body {
    // Основні кольори, які змінюються з темою, отримуються з об'єкта theme
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};

    // ГЛОБАЛЬНІ ПЛАВНІ ПЕРЕХОДИ для зміни кольорів теми
    // Це забезпечить анімацію при перемиканні між світлою та темною темами
    transition: background-color 0.4s ease-in-out, // Фон тіла
                color 0.4s ease-in-out,           // Колір основного тексту
                border-color 0.4s ease-in-out;    // Колір меж, якщо вони змінюються глобально

    // Базові стилі шрифтів та відступів
    font-family: 'Roboto', 'Arial', sans-serif; // Приклад: використовуйте ваші фактичні шрифти
    line-height: 1.6;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased; // Покращує згладжування шрифтів на WebKit-браузерах
    -moz-osx-font-smoothing: grayscale; // Покращує згладжування шрифтів на Firefox
  }

  // --- Переходи для загальних HTML-елементів ---

  // Посилання
  a {
    color: ${({ theme }) => theme.color}; // Колір посилань за замовчуванням
    text-decoration: none; // Без підкреслення
    transition: color 0.3s ease-in-out; // Плавний перехід кольору посилання
    &:hover {
      color: ${({ theme }) => theme.accentColor}; // Приклад: акцентний колір при наведенні
    }
  }

  // Кнопки
  button {
    cursor: pointer;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    // Кольори з теми та переходи
    background-color: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonColor};
    transition: background-color 0.3s ease-in-out,
                color 0.3s ease-in-out,
                transform 0.2s ease-out, // Невеликий рух при наведенні
                box-shadow 0.3s ease-in-out; // Тінь при наведенні
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Легка тінь
    }
    &:active {
      transform: translateY(0); // Повернення у вихідне положення при кліку
      box-shadow: none;
    }
  }

  // Поля введення (input, textarea, select)
  input, textarea, select {
    border: 1px solid ${({ theme }) => theme.borderColor}; // Колір рамки з теми
    background-color: ${({ theme }) => theme.background}; // Фон поля з теми
    color: ${({ theme }) => theme.color}; // Колір тексту з теми
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: border-color 0.3s ease-in-out,
                background-color 0.3s ease-in-out,
                color 0.3s ease-in-out; // Переходи для кольорів полів
    &:focus {
      outline: none; // Прибираємо стандартний outline
      border-color: ${({ theme }) => theme.accentColor}; // Акцентна рамка при фокусі
      box-shadow: 0 0 0 2px ${({ theme }) => theme.accentColor + "33"}; // Легка тінь фокусу
    }
  }

  // Заголовки
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color}; // Колір заголовків з теми
    transition: color 0.4s ease-in-out; // Плавний перехід кольору заголовків
  }

  // Зображення (якщо вони можуть змінювати фільтри/опаситість залежно від теми)
  img {
    transition: filter 0.4s ease-in-out; // Приклад: для застосування фільтрів у темній темі
  }

`;

export default GlobalStyles;
