// src/components/Common/SectionHeading/SectionHeading.styled.js
import styled, { css } from "styled-components";

export const StyledSectionTitle = styled.h3`
  color: ${({ theme }) => theme.color}; /* Тепер використовує основний колір тексту з теми */
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  // ДОДАНО: Плавні переходи для кольору та розміру шрифту
  transition: color 0.4s ease-in-out, font-size 0.3s ease-in-out;

  /* Визначення розмірів на основі prop 'size' */
  ${props =>
    props.size === "small" &&
    css`
      font-size: 1rem;
    `}
  ${props =>
    props.size === "medium" &&
    css`
      font-size: 1.25rem;
    `}
  ${props =>
    props.size === "default" &&
    css`
      font-size: 1.5rem;
    `}
  ${props =>
    props.size === "large" &&
    css`
      font-size: 2.25rem;
      margin-bottom: ${props => props.bottomMargin || "1rem"};
    `}
  ${props =>
    props.size === "extraLarge" &&
    css`
      /* Додано для головного заголовка проповіді */
      font-size: 2.5rem; /* Розмір з вашого h1 */
      margin-bottom: ${props => props.bottomMargin || "1rem"};
    `}

  /* Визначення кольору на основі prop 'color' */
  ${props =>
    props.color === "white" &&
    css`
      /* Залишаємо опцію, якщо десь знадобиться білий текст */
      color: white; /* Залишено як white, оскільки це явний override */
      // Якщо color:white встановлюється через пропси, і ви хочете анімувати цей перехід,
      // то глобальний transition на color вже спрацює.
    `}

  /* Вирівнювання тексту на основі prop 'alignment' */
  ${props =>
    props.alignment === "center" &&
    css`
      text-align: center;
    `}
`;
