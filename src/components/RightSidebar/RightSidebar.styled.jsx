import styled from "styled-components";
import { SidebarWrapper, Menu, CollapseBtn } from "../Sidebar/Sidebar.styled";

export const RightSidebarWrapper = styled(SidebarWrapper)`
  /* ✅ ВИПРАВЛЕНО: Прибрано зайві, дубльовані властивості */
  position: relative;

  // ✅ ВИПРАВЛЕНО: Змінена позиція кнопки для правого сайдбару
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
  left: auto;
  right: 6px;
  margin-bottom: 5px;

  // Інші стилі залишаємо як є
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
