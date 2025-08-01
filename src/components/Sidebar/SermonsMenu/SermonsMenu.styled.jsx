// src/Sidebar/SermonsMenu/SermonsMenu.styled.jsx

import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing

  // Додамо медіазапит, щоб на мобільних приховувати цей елемент,
  // оскільки він є частиною сайдбару, який там прихований.
  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing
  font-size: ${({ theme }) => theme.fontSizes.small}; // ОНОВЛЕНО: Використовуємо fontSizes
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing
  min-height: 32px;
  color: ${({ theme }) => theme.colors.color}; // ДОДАНО: Основний колір тексту

  // ОНОВЛЕНО: Плавний перехід для фону та кольору, для Hover та Focus
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.navActive}; // ОНОВЛЕНО: Використовуємо theme.colors
    color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використовуємо theme.colors
    outline: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.xsmall} 0; // ОНОВЛЕНО: Використовуємо spacing
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0 ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використовуємо theme.colors
  font: inherit;
  text-align: left;
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xsmall}; // ОНОВЛЕНО: Використовуємо fontSizes

  // ДОДАНО: Плавні переходи для кольору тексту та фону (для hover)
  transition: color 0.4s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBg}; // ОНОВЛЕНО: Використовуємо theme.colors
  }
`;

export const Toggle = styled.span`
  color: ${({ theme }) => theme.colors.buttonBg}; // ОНОВЛЕНО: Використовуємо theme.colors
  font-size: 16px; // Цей розмір шрифту є універсальним для іконки, можна залишити
  margin-left: auto;
  pointer-events: none;

  // ДОДАНО: Плавний перехід для кольору іконки
  transition: color 0.4s ease-in-out;
`;
