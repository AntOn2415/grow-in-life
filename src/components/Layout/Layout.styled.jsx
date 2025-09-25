import styled from "styled-components";

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
    "isMainSplit",
  ].includes(prop);

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
`;

export const ContentGrid = styled.div.withConfig({ shouldForwardProp })`
  display: grid;
  grid-template-columns: ${({ sidebarCollapsed, isHome, rightSidebarExpanded }) =>
    isHome
      ? "0 1fr 0"
      : ` 
        ${sidebarCollapsed ? "64px" : "calc(100vw / 5)"} 
        1fr 
        ${rightSidebarExpanded ? "calc(100vw / 2.5)" : "75px"} 
      `};
  grid-template-rows: 1fr;
  height: 100%;
  transition: grid-template-columns 0.25s ease-in-out;

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
  padding-top: ${({ navHeight }) => navHeight + 10}px;
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
    
    height: ${({ isMainSplit }) => (isMainSplit ? "calc(50vh - 1px)" : "100%")};
    transition: height 0.25s ease-in-out;
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

export const MobileLeftSidebarOverlay = styled.div.withConfig({ shouldForwardProp })`
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background + "99"};
    backdrop-filter: blur(1px);
    z-index: 997;
    cursor: pointer;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out, background 0.25s ease-in-out;
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
    background: ${({ theme }) => theme.colors.background + "99"};
    backdrop-filter: blur(1px);
    z-index: 997;
    cursor: pointer;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out, background 0.25s ease-in-out, backdrop-filter 0.25s ease-in-out;
    ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit &&
      `
      display: none;
    `}
  `}
`;
