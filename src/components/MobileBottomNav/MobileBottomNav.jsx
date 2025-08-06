import React from "react";
import { useLocation } from "react-router-dom";
import { BottomNavContainer, NavLinkItem, IconWrapper } from "./MobileBottomNav.styled";

const MobileBottomNav = ({
  onLeftMenuClick,
  onRightMenuClick,
  isLeftMenuOpen,
  isRightMenuOpen,
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleCentralButtonClick = () => {
    if (isLeftMenuOpen) {
      onLeftMenuClick(false);
    }
    if (isRightMenuOpen) {
      onRightMenuClick(false);
    }
  };

  return (
    <BottomNavContainer className={isHome ? "hidden" : ""}>
      <NavLinkItem onClick={() => onLeftMenuClick(true)}>
        <IconWrapper>
          <i className="fas fa-bars"></i>
        </IconWrapper>
        <span>Меню</span>
      </NavLinkItem>

      <NavLinkItem onClick={handleCentralButtonClick}>
        <IconWrapper>
          <i className="fas fa-times"></i>
        </IconWrapper>
        <span>Закрити</span>
      </NavLinkItem>

      <NavLinkItem onClick={() => onRightMenuClick(true)}>
        <IconWrapper>
          <i className="fas fa-info-circle"></i>
        </IconWrapper>
        <span>Інфо</span>
      </NavLinkItem>
    </BottomNavContainer>
  );
};

export default MobileBottomNav;
