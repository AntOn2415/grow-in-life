import styled from "styled-components";
import { motion } from "framer-motion";

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
    "isCollapsed",
    "isHome",
    "navHeight",
  ].includes(prop);

export const SidebarWrapper = styled(motion.aside).withConfig({ shouldForwardProp })`
  background: ${({ theme }) => theme.colors.navBg};
  color: ${({ theme }) => theme.colors.color};
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-sizing: border-box;
  padding: ${({ $isCollapsed, theme }) =>
    $isCollapsed ? `${theme.spacing.small} ${theme.spacing.xsmall}` : theme.spacing.small};
  padding-bottom: ${({ $isCollapsed, theme }) =>
    $isCollapsed ? `calc(${theme.spacing.xsmall} + 40px)` : `calc(${theme.spacing.xsmall} + 40px)`};
  display: flex;
  flex-direction: column;
  align-items: ${({ $isCollapsed }) => ($isCollapsed ? "center" : "flex-start")};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: relative;
  margin: 0;
  transition: width 0.2s ease-in-out, background 0.25s ease-in-out, color 0.25s ease-in-out,
    border 0.25s ease-in-out, padding 0.2s ease-in-out;

  ${({ theme }) => theme.media.up("md")`
    grid-column: 1;
    grid-row: 1;
    position: sticky;
    top: ${({ navHeight }) => navHeight + 20}px;
    height: calc(100% - ${({ navHeight }) => navHeight + 20}px);
    overflow-y: auto;
    z-index: 900;
    margin: 10px 16px 10px 10px;
    margin-right: 0;
    margin-top: 0;
    transition: top 0.25s cubic-bezier(0.4, 0, 0.2, 1), padding 0.2s ease-in-out,
                background 0.25s ease-in-out, color 0.25s ease-in-out, border 0.25s ease-in-out;
    display: ${({ isHome }) => (isHome ? "none" : "flex")};
  `}

  ${({ theme }) => theme.media.down("md")`
    position: fixed;
    top: 50px;
    left: 0;
    width: 300px;
    height: calc(100vh - 50px);
    overflow-y: auto;
    z-index: 998;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.navBg};
    background: ${({ theme }) => theme.colors.navBg};
    padding: ${theme.spacing.medium};
    margin: 0;
    border: none;
    border-radius: 0;
    display: flex;
    flex-direction: column;
     transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out;
  `}
`;

export const Menu = styled.nav`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
`;

export const CollapseBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 6px;
  right: 2px;
  margin-bottom: 5px;
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.xsmall} 0;
  cursor: pointer;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
  font-size: 1.2rem;
  z-index: 10;
  transition: background 0.25s ease, color 0.25s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }
`;
