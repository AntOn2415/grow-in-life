import styled from "styled-components";

export const BottomNavContainer = styled.div`
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

export const NavLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.color};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.25s ease-in-out;
  padding: ${({ theme }) => theme.spacing.xsmall};

  &:hover {
    color: ${({ theme }) => theme.colors.navActive};
  }
  &[data-active="true"] {
    color: ${({ theme }) => theme.colors.navActive};
  }
`;

export const IconWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  transition: color 0.25s ease-in-out;
`;
