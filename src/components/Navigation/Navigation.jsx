import React, { useState } from "react"; // Додаємо useState
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import {
  Nav,
  Link,
  ToggleButton,
  HamburgerIcon, // Імпортуємо нові стилі
  MobileMenu, // Імпортуємо нові стилі
} from "./Navigation.styled"; // ІМПОРТУЄМО СТИЛІ З НОВОГО ФАЙЛУ
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../styles/shared/breakpoints";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Стан для бургер-меню

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <Nav ref={ref} className={showNav ? "nav-visible" : "nav-hidden"}>
      {isMobile ? (
        <>
          <HamburgerIcon onClick={toggleMobileMenu} isOpen={mobileMenuOpen}>
            <div />
            <div />
            <div />
          </HamburgerIcon>
          {/* Логотип або назва сайту, якщо потрібно */}
          <Link to="/" style={{ marginRight: "auto", marginLeft: "10px" }}>
            Лого
          </Link>
          <ToggleButton onClick={toggleTheme}>{mode === "light" ? "Ніч" : "День"}</ToggleButton>
          <MobileMenu isOpen={mobileMenuOpen}>
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? "active" : ""}
                onClick={toggleMobileMenu} // Закриваємо меню при кліку на посилання
              >
                {item.label}
              </Link>
            ))}
          </MobileMenu>
        </>
      ) : (
        <>
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <ToggleButton onClick={toggleTheme}>{mode === "light" ? "Ніч" : "День"}</ToggleButton>
        </>
      )}
    </Nav>
  );
});

export default Navigation;
