import styled from "styled-components";
import { SidebarWrapper, Menu, CollapseBtn } from "../Sidebar/Sidebar.styled";

export const RightSidebarWrapper = styled(SidebarWrapper)`
  /* Наслідуємо всі базові стилі від SidebarWrapper */
  /* Оверрайд для RightSidebar */
  position: relative;
  height: calc(100% - (${({ theme }) => theme.spacing.large} * 1.5));
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 24px;
  padding: ${({ $isCollapsed, theme }) =>
    $isCollapsed ? theme.spacing.xsmall : theme.spacing.small};
  transition: width 0.2s ease-in-out, background 0.25s ease-in-out, color 0.25s ease-in-out,
    border 0.25s ease-in-out, margin 0.2s ease, padding 0.2s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.spacing.medium};
    margin: 0;
    border: none;
    border-radius: 0;
  `}
`;

export const RightSidebarMenu = styled(Menu)``;

export const RightSidebarCollapseBtn = styled(CollapseBtn)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-left: 6px;
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
  left: 0;
  right: auto;

  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }
`;
