// src/components/Sidebar/Sidebar.styled.jsx

import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  /* NO POSITIONING PROPERTIES HERE. HANDLED BY GridSidebarContainer IN Layout.styled.jsx */
  background: ${({ theme }) => theme.colors.navBg}; // ОНОВЛЕНО: Використовуємо theme.colors
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використовуємо theme.colors
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  box-shadow: ${({ theme }) => theme.shadows.small}; // ОНОВЛЕНО: Використовуємо shadows
  // ВИПРАВЛЕНО: Прибрано горизонтальний padding, залишено лише вертикальний
  padding: ${({ theme }) => theme.spacing.xlarge} 0 ${({ theme }) => theme.spacing.xsmall} 0;

  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    /* На мобільних пристроях сайдбар прихований, тому внутрішні відступи не потрібні */
    padding: 0;
  `}
`;

export const Menu = styled.nav`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing
  margin-top: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використовуємо spacing
  overflow-y: hidden;

  // ВИПРАВЛЕНО: Горизонтальний padding перенесено сюди
  padding: 0 ${({ theme }) => theme.spacing.small};

  &:hover,
  &:focus-within {
    overflow-y: auto;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CollapseBtn = styled.button`
  margin: 0;
  background: ${({ theme }) => theme.colors.buttonBg}; // ОНОВЛЕНО: Використовуємо theme.colors
  color: ${({ theme }) => theme.colors.buttonColor}; // ОНОВЛЕНО: Використовуємо theme.colors
  border: none;
  border-radius: 0 ${({ theme }) => theme.borderRadius.small} 0 0; // ОНОВЛЕНО: Використовуємо borderRadius
  padding: ${({ theme }) => theme.spacing.xsmall} 0;
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.small}; // ОНОВЛЕНО: Використовуємо shadows

  transition: background 0.2s ease, color 0.2s ease;

  ${({ theme }) => theme.media.down("md")`
    /* Приховуємо кнопку на мобільних пристроях, оскільки навігація буде іншою */
    display: none;
  `}
`;

export const MenuBottomSpacer = styled.div`
  height: ${({ theme }) => theme.spacing.xlarge}; // ОНОВЛЕНО: Використовуємо spacing
  flex-shrink: 0;
`;
