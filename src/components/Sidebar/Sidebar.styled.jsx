// src/components/Sidebar/Sidebar.styled.jsx

import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  /* NO POSITIONING PROPERTIES HERE. HANDLED BY GridSidebarContainer IN Layout.styled.jsx */
  background: ${({ theme }) => theme.navBg}; /* Фон сайдбару тепер береться з теми (navBg) */
  color: ${({ theme }) => theme.color};
  height: 100%; /* Займає 100% висоти свого батьківського Grid-Cell */
  display: flex;
  flex-direction: column;
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); // Тінь залишена без змін
  padding: 60px 16px 10px; /* Додаємо відступи для внутрішнього контенту */

  // ДОДАНО: Плавні переходи для фону та кольору тексту
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
`;

export const Menu = styled.nav`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  overflow-y: hidden; /* Скрол прихований за замовчуванням */
  &:hover,
  &:focus-within {
    overflow-y: auto; /* Скрол з'являється при наведенні або фокусі */
  }
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const CollapseBtn = styled.button`
  margin: 0; /* Скидаємо зовнішні відступи */
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 0 4px 0 0; /* Зберігаємо заокруглення кута */
  padding: 8px 0;
  cursor: pointer;
  width: 100%; /* Займає всю доступну ширину свого батьківського контейнера */
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); // Тінь залишена без змін

  // ПЕРЕВІРЕНО: Перехід для фону та кольору вже є, це чудово!
  // Цей transition вже є у вашому коді і він правильно обробляє зміну кольорів.
  transition: background 0.2s ease, color 0.2s ease;
`;

export const MenuBottomSpacer = styled.div`
  height: 56px;
  flex-shrink: 0;
  // Переходи тут не потрібні, оскільки немає theme-залежних властивостей.
`;
