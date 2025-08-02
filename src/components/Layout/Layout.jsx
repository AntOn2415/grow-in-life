import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import Sidebar from "../Sidebar/Sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import {
  Wrapper,
  Nav,
  ContentGrid,
  LeftSidebarContainer,
  RightSidebarContainer,
  Main,
  Link, // Зверніть увагу, що Link - це styled-component
  ToggleButton,
} from "./Layout.styled";

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
  const lastScroll = useRef(0);
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [rightSidebarExpanded, setRightSidebarExpanded] = useState(false);
  const [previousLeftCollapsedState, setPreviousLeftCollapsedState] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          if (curr > lastScroll.current && curr > navHeight) {
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
  }, [navHeight]);

  const handleRightSidebarToggle = () => {
    setRightSidebarExpanded(prev => {
      const newExpandedState = !prev;
      if (newExpandedState) {
        setPreviousLeftCollapsedState(leftSidebarCollapsed);
        setLeftSidebarCollapsed(true);
      } else {
        setLeftSidebarCollapsed(previousLeftCollapsedState);
      }
      return newExpandedState;
    });
  };

  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <Nav ref={navRef} className={showNav ? "nav-visible" : "nav-hidden"}>
        {navItems.map(item => (
          // ПОМИЛКА БУЛА ТУТ: className приймав функцію замість рядка
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
        <ToggleButton onClick={toggleTheme}>{mode === "light" ? "Ніч" : "День"}</ToggleButton>
      </Nav>

      <ContentGrid
        sidebarCollapsed={leftSidebarCollapsed}
        isHome={isHome}
        rightSidebarExpanded={rightSidebarExpanded}
      >
        {!isHome && (
          <LeftSidebarContainer
            isHome={isHome}
            navHeight={navHeight}
            collapsed={leftSidebarCollapsed}
          >
            <Sidebar collapsed={leftSidebarCollapsed} setCollapsed={setLeftSidebarCollapsed} />
          </LeftSidebarContainer>
        )}

        <Main rightSidebarExpanded={rightSidebarExpanded} navHeight={navHeight}>
          <Outlet />
        </Main>

        {!isHome && (
          <RightSidebarContainer navHeight={navHeight} expanded={rightSidebarExpanded}>
            <RightSidebar
              onToggle={handleRightSidebarToggle}
              rightSidebarExpanded={rightSidebarExpanded}
            />
          </RightSidebarContainer>
        )}
      </ContentGrid>
    </Wrapper>
  );
};

export default Layout;
