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
    isHome ? "0" : sidebarCollapsed ? "60px" : "200px"};
  transition: padding-left 0.2s ease-in-out; /* Плавний перехід відступу */
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
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
  width: ${({ collapsed, isHome }) => (isHome ? "0" : collapsed ? "60px" : "200px")};
  transition: width 0.2s ease-in-out; /* Плавний перехід ширини */

  display: flex;
  flex-direction: column;
  height: 100%; /* Забезпечує заповнення висоти fixed-контейнера */
  /* Фон та тінь будуть встановлені в SidebarWrapper, який всередині */
`;

export const Main = styled.main`
  grid-column: 1; /* Тепер Main займає єдину колонку */
  grid-row: 2;
  overflow-y: auto; /* Дозволяє основному контенту прокручуватися незалежно */
  padding: 24px;
  padding-top: 0; /* Додаємо відступ знизу для контенту */
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  &.active {
    background: ${({ theme }) => theme.navActive};
    color: ${({ theme }) => theme.background};
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
