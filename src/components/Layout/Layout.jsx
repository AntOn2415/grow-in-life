import React, { useState, useEffect, useRef } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider";
import Sidebar from "../Sidebar/Sidebar";

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
const ContentRow = styled.div`
  display: flex;
  flex: 1;
`;
const Nav = styled.nav`
  display: flex;
  gap: 16px;
  background: ${({ theme }) => theme.navBg};
  padding: 16px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  &.nav-hidden {
    transform: translateY(-100%);
  }
  &.nav-visible {
    transform: translateY(0);
  }
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
  transition: margin-left 0.2s;
  margin-left: ${({ sidebarWidth }) => sidebarWidth};
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
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(window.scrollY);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          if (curr > lastScroll.current && curr > 60) {
            setShowNav(false); // скрол вниз — ховати
          } else if (curr < lastScroll.current) {
            setShowNav(true); // скрол вгору — показати
          }
          lastScroll.current = curr;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Визначаємо ширину сайдбара
  const sidebarWidth = sidebarCollapsed ? "60px" : "200px";
  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <Nav className={showNav ? "nav-visible" : "nav-hidden"}>
        {navItems.map(item => (
          <Link key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
            {item.label}
          </Link>
        ))}
        <ToggleButton onClick={toggleTheme}>{mode === "light" ? "Ніч" : "День"}</ToggleButton>
      </Nav>
      <ContentRow>
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        <Main sidebarWidth={isHome ? "0" : sidebarWidth}>
          <Outlet />
        </Main>
      </ContentRow>
    </Wrapper>
  );
};

export default Layout;
