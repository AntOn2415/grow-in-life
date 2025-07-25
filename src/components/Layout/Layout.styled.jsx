// src/components/Layout/Layout.styled.jsx

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
  /* Тепер у нас лише одна колонка для контенту. Сайдбар буде position: fixed */
  grid-template-columns: 1fr;
  /* Два рядки: для навігації та для основного контенту */
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  /* Динамічний лівий відступ для основного контенту, щоб звільнити місце для сайдбару */
  padding-left: ${({ sidebarCollapsed, isHome }) =>
    isHome ? "0" : sidebarCollapsed ? "60px" : "280px"}; /* Змінено з 200px на 250px */

  // ДОДАНО/ОНОВЛЕНО: Плавні переходи для відступу, фону та кольору тексту
  transition: padding-left 0.2s ease-in-out, background 0.4s ease-in-out,
    /* Для зміни теми */ color 0.4s ease-in-out; /* Для зміни теми */
`;

export const Nav = styled.nav`
  grid-column: 1; /* Тепер навігація займає єдину колонку */
  grid-row: 1;
  display: flex;
  gap: 16px;
  background: ${({ theme }) => theme.navBg};
  padding: 16px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  // ОНОВЛЕНО: Переходи для transform (приховування/показу) та background (зміна теми)
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease-in-out; /* Для зміни теми */
  will-change: transform; /* Оптимізація для анімації transform */

  &.nav-hidden {
    transform: translateY(-100%);
  }
  &.nav-visible {
    transform: translateY(0);
  }
`;

// Styled component for the Sidebar container, now fixed
export const GridSidebarContainer = styled.div`
  /* Видаляємо grid-column та grid-row, оскільки тепер він position: fixed */
  position: fixed; /* Сайдбар фіксований відносно вікна перегляду */
  top: 0; /* Починається з самого верху */
  bottom: 0; /* Простягається до самого низу */
  left: 0; /* Прилипає до лівого краю */
  z-index: 110; /* Вищий z-index, щоб бути над Nav */

  /* Динамічна ширина сайдбару, враховуючи стан collapsed та isHome */
  width: ${({ collapsed, isHome }) =>
    isHome ? "0" : collapsed ? "60px" : "280px"}; /* Змінено з 200px на 250px */
  transition: width 0.2s ease-in-out; /* Плавний перехід ширини вже був, це чудово */

  display: flex;
  flex-direction: column;
  height: 100%; /* Забезпечує заповнення висоти fixed-контейнера */
  /* Фон та тінь будуть встановлені в SidebarWrapper, який всередині */
  /* Якщо SidebarWrapper буде мати theme.background, йому теж потрібен transition */
`;

export const Main = styled.main`
  grid-column: 1; /* Тепер Main займає єдину колонку */
  grid-row: 2;
  overflow-y: auto; /* Дозволяє основному контенту прокручуватися незалежно */
  padding: 24px;
  padding-top: 0; /* Додаємо відступ знизу для контенту */
  /* Основний фон та колір тексту Main, як правило, успадковуються від Wrapper або body,
     тому тут додаткові transition не потрібні, якщо ви не переозначаєте їх явно. */
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;

  // ДОДАНО: Переходи для кольору тексту та фону (для активного стану)
  // 0.3s - для інтерактивних елементів, узгоджується з глобальними стилями для <a>
  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

  &.active {
    background: ${({ theme }) => theme.navActive};
    color: ${({ theme }) => theme.background}; /* Колір тексту в активному стані */
  }
`;

export const ToggleButton = styled.button`
  margin-left: 16px;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
