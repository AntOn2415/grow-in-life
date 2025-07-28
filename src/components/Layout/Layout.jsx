// src/components/Layout/Layout.jsx

import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import Sidebar from "../Sidebar/Sidebar";

import { Wrapper, Nav, GridSidebarContainer, Main, Link, ToggleButton } from "./Layout.styled";

const navItems = [
  { to: "/", label: "Головна" },
  { to: "/sermons", label: "Проповіді" },
  { to: "/home-groups", label: "Домашні групи" },
  { to: "/sunday-school", label: "Воскресна школа" },
  { to: "/seminars", label: "Семінари" },
  { to: "/news", label: "Новини" },
];

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
            setShowNav(false);
          } else if (curr < lastScroll.current) {
            setShowNav(true);
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

  const isHome = location.pathname === "/";

  return (
    <Wrapper sidebarCollapsed={sidebarCollapsed} isHome={isHome}>
      {/* Main Header */}
      <Nav className={showNav ? "nav-visible" : "nav-hidden"}>
        {navItems.map(item => (
          <Link key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
            {item.label}
          </Link>
        ))}
        <ToggleButton onClick={toggleTheme}>{mode === "light" ? "Ніч" : "День"}</ToggleButton>
      </Nav>

      {/* Sidebar (Full Height, Fixed Position) */}
      {/* Передаємо пропси collapsed та isHome до GridSidebarContainer */}
      {!isHome && (
        <GridSidebarContainer collapsed={sidebarCollapsed} isHome={isHome}>
          <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        </GridSidebarContainer>
      )}

      {/* Main Content Area */}
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
