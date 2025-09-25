import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Компонент для стилізації UL
export const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
  ${({ theme }) => theme.media.down("md")`
  align-items: start;
  `}
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: ${({ theme }) => theme.spacing.xsmall};
  background: ${({ theme }) => theme.colors.navBg};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: ${({ theme }) => theme.shadows.small};

  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s ease-in-out,
    border-bottom 0.25s ease-in-out;
  will-change: transform;

  &.nav-hidden {
    transform: translateY(-100%);
  }
  &.nav-visible {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.down("md")`
    position: fixed;
    height: 50px;
    padding: 0 ${({ theme }) => theme.spacing.medium};
    justify-content: space-between;
  `}
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.color};
  text-decoration: none;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.navActive};
  }
  &.active {
    background: ${({ theme }) => theme.colors.navActive};
  }
`;
export const LogoLink = styled(Link)`
  ${({ theme }) => theme.media.up("md")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1; 
    padding: 0 ${({ theme }) => theme.spacing.small};
    height: 100%;
  `}

  &.active {
    background: none;
  }
`;
export const LogoImage = styled.img`
  height: 40px;
  width: auto;
  vertical-align: middle;
  transition: opacity 0.25s ease-in-out;

  ${({ theme }) => theme.media.up("md")` 
    margin-bottom: 2px;
  `}

  ${({ theme }) => theme.media.down("md")`
    height: 35px; 
  `}
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;

  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
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

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }
`;

export const HamburgerIcon = styled.button`
  display: none;

  ${({ theme }) => theme.media.down("md")`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    div {
      width: 25px;
      height: 3px;
      background: ${({ theme }) => theme.colors.color};
      border-radius: 10px;
      transition: all 0.25s linear;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
        transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "translateX(0)")};
      }

      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  `}
`;

export const MobileMenu = styled.div`
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: flex;
    flex-direction: column;
    align-items: start;

    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    background: ${({ theme }) => theme.colors.navBg};
    padding: ${({ theme }) => theme.spacing.medium};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.25s ease-in-out, background 0.25s ease-in-out;
    z-index: 999;
    
    ${StyledList} {
      flex-direction: column;
    }

    ${Link} {
      display: block;
      width: 100%;
      padding: ${({ theme }) => theme.spacing.xsmall};
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
      text-align: left;
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.color};
    
      transition: color 0.25s ease-in-out, border-bottom 0.25s ease-in-out, background 0.25s ease-in-out;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: none;
        color: ${({ theme }) => theme.colors.navActive};
      }
    }
  `}
`;
