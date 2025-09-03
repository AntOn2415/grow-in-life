import styled from "styled-components";
import { motion } from "framer-motion";
import { Menu, CollapseBtn } from "../Sidebar/Sidebar.styled";

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
    "isMainSplit",
  ].includes(prop);

export const RightSidebarWrapper = styled(motion.aside).withConfig({ shouldForwardProp })`
  background: ${({ theme }) => theme.colors.navBg};
  color: ${({ theme }) => theme.colors.color};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ $isCollapsed, theme }) =>
    $isCollapsed
      ? `${theme.spacing.small} ${theme.spacing.xsmall}`
      : `${theme.spacing.small} ${theme.spacing.xsmall} ${theme.spacing.small} ${theme.spacing.small}`};
  padding-bottom: ${({ $isCollapsed, theme }) =>
    $isCollapsed ? `calc(${theme.spacing.xsmall} + 40px)` : `calc(${theme.spacing.xsmall} + 40px)`};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: relative;
  transition: width 0.2s ease-in-out, background 0.25s ease-in-out;
  margin: 0;

  ${({ theme }) => theme.media.up("md")`
    grid-column: 3;
    grid-row: 1;
    position: sticky;
    top: ${({ navHeight }) => navHeight + 20}px;
    height: calc(100% - ${({ navHeight }) => navHeight + 20}px);
    overflow-y: auto;
    z-index: 900;
    display: ${({ isHome }) => (isHome ? "none" : "flex")};
    flex-direction: column;
    transition: top 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 10px;
    margin-left: 0;
    margin-top: 0;
  `}

  ${({ theme }) => theme.media.down("md")`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    overflow-y: auto;
    z-index: 998;
    background: ${({ theme }) => theme.colors.navBg};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.navBg};
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
    margin: 0;
    border: none;
    border-radius: 0;
     
    height: ${({ isRightSidebarSplit }) =>
      isRightSidebarSplit ? "calc(50vh)" : "calc(100vh - 50px)"};
    transition: height 0.25s ease-in-out;  
  `}
`;

export const RightSidebarMenu = styled(Menu)``;

export const RightSidebarCollapseBtn = styled(CollapseBtn)`
  position: absolute;
  bottom: 0;
  left: auto;
  right: 6px;
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
  transition: background 0.2s ease, color 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }
  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;
