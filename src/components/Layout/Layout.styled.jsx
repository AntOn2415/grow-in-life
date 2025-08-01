// src/components/Layout/Layout.styled.jsx

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО

  /* Динамічний лівий відступ для основного контенту, щоб звільнити місце для сайдбару */
  padding-left: ${({ sidebarCollapsed, isHome }) =>
    isHome ? "0" : sidebarCollapsed ? "60px" : "280px"};

  // ДОДАНО/ОНОВЛЕНО: Плавні переходи для відступу, фону та кольору тексту
  transition: padding-left 0.2s ease-in-out, background 0.4s ease-in-out, color 0.4s ease-in-out; // Додано transition для color

  // Медіа-запити для Wrapper
  ${({ theme }) => theme.media.down("md")` // Застосовуємо для екранів менших за 'md' (992px)
    padding-left: 0; // На мобільних сайдбар не впливає на padding основного контенту
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr; // Залишаємо Nav зверху, контент знизу
  `}
`;

export const Nav = styled.nav`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  height: 60px;
  padding: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: використовуємо spacing
  gap: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: використовуємо spacing
  background: ${({ theme }) => theme.colors.navBg}; // ОНОВЛЕНО
  justify-content: center;
  align-items: center; // Центруємо елементи по вертикалі
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.small}; // ОНОВЛЕНО: використовуємо shadows

  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease-in-out;
  will-change: transform;

  &.nav-hidden {
    transform: translateY(-100%);
  }
  &.nav-visible {
    transform: translateY(0);
  }

  // Медіа-запити для Nav
  ${({ theme }) => theme.media.down("md")`
    justify-content: space-between; // Розподіл елементів по ширині на мобільних
    padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.medium};
    height: 50px; // Можливо, менша висота для мобільних
  `}
`;

export const GridSidebarContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 110;

  width: ${({ collapsed, isHome }) => (isHome ? "0" : collapsed ? "60px" : "280px")};
  transition: width 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  height: 100%;

  // Медіа-запити для GridSidebarContainer
  ${({ theme }) => theme.media.down("md")`
    /* На мобільних сайдбар буде повністю прихований або з'являтиметься через інший механізм (наприклад, бургер-меню),
       тому його ширина стає 0, або він керується іншим станом/логікою */
    width: 0; 
    overflow: hidden; // Приховуємо будь-який контент, що виходить за межі
  `}
`;

export const Main = styled.main`
  grid-column: 1;
  grid-row: 2;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: використовуємо spacing
  padding-top: 0;
  // Медіа-запити для Main
  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.small}; // Менші відступи на мобільних
    padding-top: 0;
  `}
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО
  text-decoration: none;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО
  border-radius: ${({ theme }) => theme.borderRadius.small}; // ОНОВЛЕНО

  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

  &.active {
    background: ${({ theme }) => theme.colors.navActive}; // ОНОВЛЕНО
    color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Колір тексту в активному стані
  }
`;

export const ToggleButton = styled.button`
  margin-left: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: використовуємо spacing
  background: ${({ theme }) => theme.colors.buttonBg}; // ОНОВЛЕНО
  color: ${({ theme }) => theme.colors.buttonColor}; // ОНОВЛЕНО
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small}; // ОНОВЛЕНО
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО
  cursor: pointer;
  min-width: 60px;

  // Медіа-запити для ToggleButton
  ${({ theme }) => theme.media.down("md")`
    /* Приховуємо кнопку на мобільних, якщо сайдбар керується іншим механізмом (бургер-меню) */
    display: none;
  `}
`;
