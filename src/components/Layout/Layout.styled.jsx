import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const ContentGrid = styled.div`
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
  transition: grid-template-columns 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit
        ? `
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: 100vh;
        overflow: hidden;
        padding-top: 50px;
        padding-bottom: 50px;
      `
        : `
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        min-height: calc(100vh - 50px - 50px);
      `}
  `}
`;

export const Main = styled.main`
  box-sizing: border-box;
  grid-column: 2;
  grid-row: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.medium};
  padding-top: ${({ navHeight }) => navHeight}px;
  transition: padding 0.2s ease-in-out, background 0.4s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    grid-column: 1;
    grid-row: 1;
    padding: ${({ theme }) => theme.spacing.small};
    
    // КЛЮЧОВА ЗМІНА:
    padding-top: 50px;

    ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit &&
      `
      overflow-y: auto;
      height: 100%;
      padding-top: 0;
      padding-bottom: 0;
    `}
  `}
`;

/* --- СТИЛІ ДЛЯ ЛІВОГО САЙДБАРУ --- */
export const LeftSidebarContainer = styled.div`
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

  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    position: fixed;
    top: 50px;
    left: 0;
    width: 300px;
    height: calc(100vh - 50px - 50px);
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.navBg};
    z-index: 998;
    transform: translateX(${({ showMobile }) => (showMobile ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.shadows.large};
    margin-left: 0;
  `}
`;

/* --- СТИЛІ ДЛЯ ПРАВОГО САЙДБАРУ --- */
export const RightSidebarContainer = styled.div`
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
  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    position: fixed;
    top: 50px;
    right: 0;
    width: 100%;
    height: calc(100vh - 50px - 50px);
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.navBg};
    z-index: 998;
    transform: translateX(${({ showMobile }) => (showMobile ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.shadows.large};
    margin-right: 0;
    
    ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit &&
      `
      position: relative;
      width: 100%;
      height: 100%;
      grid-column: 1;
      grid-row: 2;
      overflow-y: auto;
      top: auto;
      right: auto;
      transform: translateX(0);
      transition: all 0.3s ease-in-out;
      box-shadow: ${theme.shadows.medium};
      z-index: 998;
    `}
  `}
`;

/* --- ОВЕРЛЕЇ ДЛЯ МОБІЛЬНИХ САЙДБАРІВ --- */
export const MobileLeftSidebarOverlay = styled.div`
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 997;
    cursor: pointer;
  `}
`;

export const MobileRightSidebarOverlay = styled.div`
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 997;
    cursor: pointer;
    
    ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit &&
      `
      display: none;
    `}
  `}
`;
