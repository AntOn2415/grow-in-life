import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import {
  Nav,
  Link,
  ToggleButton,
  HamburgerIcon,
  MobileMenu,
  StyledList,
  StyledListItem,
} from "./Navigation.styled";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../styles/shared/breakpoints";
import { useClickOutside } from "../../hooks/useClickOutside";

const navItems = [
  { to: "/", label: "Головна" },
  { to: "/sermons", label: "Проповіді" },
  { to: "/home-groups", label: "Домашні групи" },
  { to: "/sunday-school", label: "Недільна школа" },
  { to: "/seminars", label: "Семінари" },
  { to: "/news", label: "Новини" },
];

const Navigation = React.forwardRef(({ showNav }, ref) => {
  const { toggleTheme, mode } = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const wrapperRef = useClickOutside(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <div ref={wrapperRef}>
      <Nav ref={ref} className={showNav ? "nav-visible" : "nav-hidden"}>
        {isMobile ? (
          <>
            <HamburgerIcon
              onClick={toggleMobileMenu}
              isOpen={mobileMenuOpen}
              aria-label="Відкрити/закрити меню"
              aria-expanded={mobileMenuOpen}
            >
              <div />
              <div />
              <div />
            </HamburgerIcon>
            <Link to="/" style={{ marginRight: "auto", marginLeft: "10px" }}>
              Лого
            </Link>
            <ToggleButton
              onClick={toggleTheme}
              aria-label={mode === "light" ? "Включити нічну тему" : "Включити денну тему"}
              aria-pressed={mode === "dark"}
            >
              {mode === "light" ? "Ніч" : "День"}
            </ToggleButton>

            <MobileMenu isOpen={mobileMenuOpen}>
              <nav>
                <StyledList>
                  {navItems.map(item => (
                    <StyledListItem key={item.to}>
                      <Link
                        to={item.to}
                        className={location.pathname === item.to ? "active" : ""}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </StyledListItem>
                  ))}
                </StyledList>
              </nav>
            </MobileMenu>
          </>
        ) : (
          <>
            <nav>
              <StyledList>
                {navItems.map(item => (
                  <StyledListItem key={item.to}>
                    <Link to={item.to} className={location.pathname === item.to ? "active" : ""}>
                      {item.label}
                    </Link>
                  </StyledListItem>
                ))}
              </StyledList>
            </nav>
            <ToggleButton
              onClick={toggleTheme}
              aria-label={mode === "light" ? "Включити нічну тему" : "Включити денну тему"}
              aria-pressed={mode === "dark"}
            >
              {mode === "light" ? "Ніч" : "День"}
            </ToggleButton>
          </>
        )}
      </Nav>
    </div>
  );
});

export default Navigation;
