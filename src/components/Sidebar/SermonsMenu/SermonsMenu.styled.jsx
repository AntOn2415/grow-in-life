// src/Sidebar/SermonsMenu/SermonsMenu.styled.jsx

import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 16px;
  // Не має theme-залежних властивостей, які потребують transition.
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;

  // ОНОВЛЕНО: Плавний перехід для фону та кольору, для Hover та Focus
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.navActive}; // Колір фону при наведенні/фокусі
    color: ${({ theme }) => theme.background}; // Колір тексту при наведенні/фокусі (для контрасту)
    outline: none; // Прибираємо стандартний outline при фокусі
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: column;
  // Не має theme-залежних властивостей, які потребують transition.
`;

export const ListItem = styled.li`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.color}; /* Тепер використовує основний колір тексту з теми */
  font: inherit;
  text-align: left;
  display: block;
  width: 100%;
  font-size: 14px;

  // ДОДАНО: Плавні переходи для кольору тексту та фону (для hover)
  transition: color 0.4s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.hoverBg}; // Колір фону при наведенні
    // Колір тексту при наведенні може залишитися theme.color або змінитись на theme.accentColor
    // Якщо потрібно змінити, додайте: color: ${({ theme }) => theme.accentColor};
  }
`;

export const Toggle = styled.span`
  color: ${({ theme }) => theme.buttonBg}; // Колір іконки
  font-size: 16px;
  margin-left: auto;
  pointer-events: none; // Цей елемент не повинен перехоплювати події кліків

  // ДОДАНО: Плавний перехід для кольору іконки
  transition: color 0.4s ease-in-out;
`;
