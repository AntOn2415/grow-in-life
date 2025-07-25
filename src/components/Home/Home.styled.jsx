// Припускається, що це файл для ваших стилізованих компонентів, наприклад, Home.styled.jsx або подібний

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 64px); /* враховуємо хедер */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;

  // Якщо Container має власний фон/колір, що відрізняється від body,
  // і він повинен змінюватися з темою, розкоментуйте ці рядки:
  // background-color: ${({ theme }) => theme.background};
  // color: ${({ theme }) => theme.color};

  // Якщо ви розкоментували вищезазначені властивості, додайте перехід для них:
  // transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color}; /* Використано основний колір тексту теми */
  // Перехід для 'color' вже визначено у GlobalStyles.js для всіх h1 елементів
`;

export const Link = styled.a`
  color: ${({ theme }) =>
    theme.navActive}; /* Використано колір активного елемента навігації для посилань */
  text-decoration: underline;
  // Перехід для 'color' вже визначено у GlobalStyles.js для всіх a елементів
`;
