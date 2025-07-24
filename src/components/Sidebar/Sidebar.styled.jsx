import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: ${({ collapsed }) => (collapsed ? "60px" : "200px")};
  background: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.color};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  transition: width 0.2s;
  position: fixed;
  top: 64px; /* висота Nav (хедера) */
  left: 0;
  z-index: 110;
`;

export const Menu = styled.nav`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  overflow-y: hidden;
  &:hover,
  &:focus-within {
    overflow-y: auto;
  }
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const CollapseBtn = styled.button`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  margin: 0;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 0 4px 0 0;
  padding: 8px 0;
  cursor: pointer;
  width: ${({ collapsed }) => (collapsed ? "60px" : "200px")};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: width 0.2s;
`;

export const MenuBottomSpacer = styled.div`
  height: 56px;
  flex-shrink: 0;
`;
