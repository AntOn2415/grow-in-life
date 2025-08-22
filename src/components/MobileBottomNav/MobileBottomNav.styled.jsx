import styled from "styled-components";

export const BottomNavContainer = styled.nav`
  // ✅ Змінив на <nav> для семантичної навігації
  display: none;
  ${({ theme }) => theme.media.down("md")`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.navBg};
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    z-index: 1000;
    justify-content: space-around;
    align-items: center;
    transition: background 0.25s ease-in-out, border-top 0.25s ease-in-out;
    
    &.hidden {
      display: none;
    }
  `}
`;

export const NavLinkItem = styled.button`
  // ✅ Змінив на <button>
  // ✅ Це важливо! Скидаємо стандартні стилі кнопки
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  padding: 0;

  // ✅ Ваші існуючі стилі
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 500;
  transition: color 0.25s ease-in-out;
  padding: ${({ theme }) => theme.spacing.xxsmall};
  gap: ${({ theme }) => theme.spacing.xxxsmall};

  > span {
    display: block;
    line-height: 1;
  }
  &[data-active="true"] {
    color: ${({ theme }) => theme.colors.mobileNavButtonActiveColor};
  }
`;

export const IconWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  transition: color 0.25s ease-in-out;
`;
