// Припускається, що це файл для стилів сторінки, наприклад, SermonsPage.styled.jsx

import styled from "styled-components";

export const Container = styled.div`
  // Цей компонент не має прямих властивостей кольору, які потрібно змінювати.
  // Його фон та колір тексту, швидше за все, контролюються батьківськими компонентами
  // (наприклад, Main, Wrapper у Layout) або глобальними стилями body, де переходи вже налаштовані.
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color}; // Використано основний колір тексту з теми
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h2 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює автоматично.
`;

// Новий styled component для повідомлення
export const NoSermonMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color}; // Використано основний колір тексту з теми
  margin-top: 2rem;
  font-size: 1.15rem;

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.4s ease-in-out;
`;
