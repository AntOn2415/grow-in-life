import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: -79px;
  z-index: 999;
  width: 100%;
  background: ${({ theme }) => theme.colors.navBg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.navItemActive};
  padding: ${({ theme }) => theme.spacing.xxsmall} 0;

  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out,
    border-color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
  display: none;
  `}
`;

export const ScrollButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 0;
  margin: 0 ${({ theme }) => theme.spacing.xsmall};

  color: ${({ theme }) => theme.colors.buttonColor};

  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  flex-shrink: 0; // Це вирішує проблему

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtn};
  }
  &:active {
    transform: scale(0.95);
  }
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.buttonColor};
    transition: fill 0.25s ease-in-out;
  }
`;

export const NavigationContainer = styled.nav`
  flex-grow: 1;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const NavigationItem = styled.li`
  flex-shrink: 0;
  min-width: fit-content;
`;

export const NavigationLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.color};
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xsmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  white-space: normal;
  line-height: 1.2;
  border-bottom: 2px solid transparent; /* Додаємо прозорий бордер для плавної анімації */

  transition: all 0.25s ease-in-out;

  &.active {
    background-color: ${({ theme }) => theme.colors.navItemActive};
    color: ${({ theme }) => theme.colors.accentColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor}; /* Виділяємо активний бордер */
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.navItemHover};
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor}; /* Додаємо бордер при наведенні */
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.navItemActive};
  }
`;
