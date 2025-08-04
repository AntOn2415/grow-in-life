import React from "react";
import { useLocation } from "react-router-dom";
import { BottomNavContainer, NavLinkItem, IconWrapper } from "./MobileBottomNav.styled";
import { Link } from "../Navigation/Navigation.styled"; // Використовуємо Link з Navigation.styled для однорідності стилів

const MobileBottomNav = ({ onLeftMenuClick, onRightMenuClick, currentActivePath }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const mainButtonPath = currentActivePath || "/";

  return (
    <BottomNavContainer>
      <NavLinkItem onClick={onLeftMenuClick}>
        <IconWrapper>
          <i className="fas fa-bars"></i>
        </IconWrapper>
        {!isHome && <span>Меню</span>}
      </NavLinkItem>

      <NavLinkItem
        as={Link}
        to={mainButtonPath}
        data-active={location.pathname === mainButtonPath} // Змінено тут
      >
        <IconWrapper>
          <i className="fas fa-home"></i>
        </IconWrapper>
        <span>Головна</span>
      </NavLinkItem>

      <NavLinkItem onClick={onRightMenuClick}>
        <IconWrapper>
          <i className="fas fa-info-circle"></i>
        </IconWrapper>
        {!isHome && <span>Інфо</span>}
      </NavLinkItem>
    </BottomNavContainer>
  );
};

export default MobileBottomNav;
