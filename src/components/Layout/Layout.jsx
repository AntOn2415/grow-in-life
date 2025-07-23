import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider";

const navItems = [
  { to: "/", label: "Головна" },
  { to: "/sermons", label: "Проповіді" },
  { to: "/home-groups", label: "Домашні групи" },
  { to: "/sunday-school", label: "Воскресна школа" },
  { to: "/seminars", label: "Семінари" },
  { to: "/news", label: "Новини" },
];

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
const Nav = styled.nav`
  display: flex;
  gap: 16px;
  background: ${({ theme }) => theme.navBg};
  padding: 16px;
  justify-content: center;
`;
const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  &.active {
    background: ${({ theme }) => theme.navActive};
    color: ${({ theme }) => theme.background};
  }
`;
const Main = styled.main`
  flex: 1;
  padding: 24px;
`;
const ToggleButton = styled.button`
  margin-left: 16px;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Layout = () => {
  const { toggleTheme, mode } = useTheme();
  return (
    <Wrapper>
      <Nav>
        {navItems.map(item => (
          <Link key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
            {item.label}
          </Link>
        ))}
        <ToggleButton onClick={toggleTheme}>{mode === "light" ? "Ніч" : "День"}</ToggleButton>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
