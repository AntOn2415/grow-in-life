import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; // Висота хедера
  padding: ${({ theme }) => theme.spacing.xsmall};
  gap: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.navBg};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease-in-out;
  will-change: transform;

  &.nav-hidden {
    transform: translateY(-100%);
  }
  &.nav-visible {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.down("md")`
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.medium};
    height: 50px;
  `}
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ sidebarCollapsed, isHome, rightSidebarExpanded }) =>
    isHome
      ? "0 1fr 0"
      : `
        ${
          sidebarCollapsed ? "80px" : "calc(100vw / 5)"
        } /* Лівий сайдбар: 1/5 ширини екрану, якщо розгорнутий */
        1fr /* Основний контент */
        ${
          rightSidebarExpanded ? "calc(100vw / 2.5)" : "80px"
        } /* Правий сайдбар: 1/2.5 ширини екрану, якщо розгорнутий */
      `};
  grid-template-rows: 1fr;
  min-height: calc(100vh - 60px);
  transition: grid-template-columns 0.2s ease-in-out;
  ${({ theme }) => theme.media.down("md")`
    grid-template-columns: 1fr; /* На мобільних сайдбари приховуються */
  `}
`;

export const LeftSidebarContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: sticky;
  top: ${({ navHeight }) => navHeight}px;
  height: calc(100vh - ${({ navHeight }) => navHeight}px);
  overflow-y: auto;
  z-index: 900;
  display: ${({ isHome }) => (isHome ? "none" : "flex")};
  flex-direction: column;
  justify-content: flex-end;
  margin-left: ${({ theme }) => theme.spacing.small};

  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const RightSidebarContainer = styled.div`
  grid-column: 3;
  grid-row: 1;
  position: sticky;
  top: ${({ navHeight }) => navHeight}px;
  height: calc(100vh - ${({ navHeight }) => navHeight}px);
  overflow-y: auto;
  z-index: 900;
  display: ${({ isHome }) => (isHome ? "none" : "flex")};
  flex-direction: column;
  justify-content: flex-end;
  margin-right: ${({ theme }) => theme.spacing.small}; /* Змінено margin */
  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const Main = styled.main`
  grid-column: 2;
  grid-row: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.medium};
  padding-top: ${({ navHeight }) => navHeight}px;
  transition: padding 0.2s ease-in-out, background 0.4s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.small};
    padding-top: ${({ navHeight }) => navHeight}px;
  `}
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.color};
  text-decoration: none;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.navActive};
    color: ${({ theme }) => theme.colors.background};
  }
  &.active {
    background: ${({ theme }) => theme.colors.navActive};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ToggleButton = styled.button`
  margin-left: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  min-width: 60px;

  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn}; // ОНОВЛЕНО
    transition: background 0.3s ease-in-out;
  }
`;
