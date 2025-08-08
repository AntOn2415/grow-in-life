import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  background: ${({ theme }) => theme.colors.navBg};
  color: ${({ theme }) => theme.colors.color};
  height: calc(100% - (${({ theme }) => theme.spacing.large} * 1.5));
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-sizing: border-box;
  margin-bottom: 24px;
  padding: ${({ $isCollapsed, theme }) =>
    $isCollapsed ? `${theme.spacing.small} ${theme.spacing.xsmall}` : theme.spacing.small};

  padding-bottom: ${({ $isCollapsed, theme }) =>
    $isCollapsed ? `calc(${theme.spacing.xsmall} + 45px)` : `calc(${theme.spacing.small} + 45px)`};

  display: flex;
  flex-direction: column;
  align-items: ${({ $isCollapsed }) => ($isCollapsed ? "center" : "flex-start")};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: relative;

  transition: width 0.2s ease-in-out, background 0.25s ease-in-out, color 0.25s ease-in-out,
    border 0.25s ease-in-out, padding 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.medium};
    margin: 0;
    border: none;
    border-radius: 0;
    width: 100%; 
    height: 100%;
    //padding-bottom: ${({ theme }) => theme.spacing.medium};
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

  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }
`;
