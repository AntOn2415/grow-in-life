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

  // Визначаємо, яка кнопка має бути активною
  const isLeftMenuActive = isLeftMenuOpen;
  const isRightMenuActive = isRightMenuOpen;
  // Центральна кнопка активна, якщо жодне меню не відкрите
  const isCentralMenuActive = !isLeftMenuOpen && !isRightMenuOpen;

  const handleCentralButtonClick = () => {
    // Логіка для центральної кнопки
    if (isLeftMenuOpen) {
      onLeftMenuClick(false);
    }
    if (isRightMenuOpen) {
      onRightMenuClick(false);
    }
  };

  return (
    <BottomNavContainer className={isHome ? "hidden" : ""}>
      <NavLinkItem onClick={() => onLeftMenuClick(true)} data-active={isLeftMenuActive}>
        <IconWrapper>
          <i className="fas fa-bars"></i>
        </IconWrapper>
        <span>Меню</span>
      </NavLinkItem>

      <NavLinkItem
        onClick={handleCentralButtonClick} // або handlePageReturn
        data-active={isCentralMenuActive}
      >
        <IconWrapper>
          <i className="fas fa-times"></i>
        </IconWrapper>
        <span>Сторінка</span>
      </NavLinkItem>

      <NavLinkItem onClick={() => onRightMenuClick(true)} data-active={isRightMenuActive}>
        <IconWrapper>
          <i className="fas fa-info-circle"></i>
        </IconWrapper>
        <span>Інфо</span>
      </NavLinkItem>
    </BottomNavContainer>
  );
};

export default MobileBottomNav;
