import styled from "styled-components";
import { motion } from "framer-motion";

// ОНОВЛЕНО: Цей масив тепер містить всі пропси, які потрібно ігнорувати
const shouldForwardProp = prop =>
  ![
    "sidebarCollapsed",
    "isHome",
    "rightSidebarExpanded",
    "navHeight",
    "isRightSidebarSplit",
    "isMobile",
    "showMobile",
    "collapsed",
    "expanded",
    "show",
    "isOpen",
  ].includes(prop);

export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const ContentGrid = styled.div.withConfig({ shouldForwardProp })`
  display: grid;
  grid-template-columns: ${({ sidebarCollapsed, isHome, rightSidebarExpanded }) =>
    isHome
      ? "0 1fr 0"
      : `
        ${sidebarCollapsed ? "80px" : "calc(100vw / 5)"}
        1fr
        ${rightSidebarExpanded ? "calc(100vw / 2.5)" : "80px"}
      `};
  grid-template-rows: 1fr;
  min-height: calc(100vh - 60px);
  transition: grid-template-columns 0.3s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: calc(100vh - 100px);
    overflow: hidden;
    transition: none;
  `}
`;

export const Main = styled.main.withConfig({ shouldForwardProp })`
  grid-column: 2;
  grid-row: 1;
  overflow-y: auto;

  // ✅ ВИПРАВЛЕНО: Відступ зверху для десктопу тепер динамічний
  padding-top: ${({ navHeight }) => navHeight + 50}px;

  transition: padding 0.2s ease-in-out, background 0.25s ease-in-out;

  padding-left: ${({ theme, sidebarCollapsed, rightSidebarExpanded }) =>
    sidebarCollapsed && !rightSidebarExpanded ? "15%" : theme.spacing.xlarge};
  padding-right: ${({ theme, sidebarCollapsed, rightSidebarExpanded }) =>
    sidebarCollapsed && !rightSidebarExpanded ? "15%" : theme.spacing.xlarge};

  ${({ theme }) => theme.media.down("lg")`
    padding-left: ${theme.spacing.large};
    padding-right: ${theme.spacing.large};
  `}

  ${({ theme }) => theme.media.down("md")`
    grid-column: 1;
    grid-row: 1;
    padding-left: ${theme.spacing.medium};
    padding-right: ${theme.spacing.medium};
    padding-top: calc(50px + ${theme.spacing.medium}); 
    padding-bottom: 50px;
    transition: none;
  `}
  
  ${({ theme }) => theme.media.down("sm")`
    padding-left: ${theme.spacing.small};
    padding-right: ${theme.spacing.small};
    padding-bottom: 50px;
  `}
  
  ${({ theme }) => theme.media.down("xs")`
    padding-left: ${theme.spacing.xsmall};
    padding-right: ${theme.spacing.xsmall};
  `}
`;

export const LeftSidebarContainer = styled.div.withConfig({ shouldForwardProp })`
  grid-column: 1;
  grid-row: 1;
  position: sticky;
  top: ${({ navHeight }) => navHeight}px;
  height: calc(100vh - ${({ navHeight }) => navHeight}px);
  overflow-y: auto;
  z-index: 900;
  display: ${({ isHome, isMobile, showMobile }) =>
    isMobile ? (showMobile ? "flex" : "none") : isHome ? "none" : "flex"};
  flex-direction: column;
  justify-content: flex-end;
  margin-left: ${({ theme }) => theme.spacing.small};
  transition: top 0.25s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s ease-in-out,
    width 0.2s ease-in-out, padding 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const RightSidebarContainer = styled.div.withConfig({ shouldForwardProp })`
  box-sizing: border-box;
  grid-column: 3;
  grid-row: 1;
  position: sticky;
  top: ${({ navHeight }) => navHeight}px;
  height: calc(100vh - ${({ navHeight }) => navHeight}px);
  overflow-y: auto;
  z-index: 900;
  display: ${({ isHome, isMobile, showMobile }) =>
    isMobile ? (showMobile ? "flex" : "none") : isHome ? "none" : "flex"};
  flex-direction: column;
  justify-content: flex-end;
  margin-right: ${({ theme }) => theme.spacing.small};
  transition: top 0.25s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s ease-in-out,
    width 0.2s ease-in-out, padding 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const MobileLeftSidebarOverlay = styled.div.withConfig({ shouldForwardProp })`
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 997;
    cursor: pointer;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  `}
`;

export const MobileRightSidebarOverlay = styled.div.withConfig({ shouldForwardProp })`
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 997;
    cursor: pointer;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit &&
      `
      display: none;
    `}
  `}
`;

export const MobileRightSidebarDiv = styled(motion.div).withConfig({ shouldForwardProp })`
  position: fixed;
  right: 0;
  width: 100%;
  overflow-y: auto;
  z-index: 998;
  background: ${({ theme }) => theme.colors.navBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  height: ${({ isRightSidebarSplit }) =>
    isRightSidebarSplit ? "calc(50vh - 50px)" : "calc(100vh - 100px)"};
`;

export const Overlay = styled.div.withConfig({ shouldForwardProp })`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  ${({ theme }) => theme.media.up("md")`
    display: none;
  `}
`;
