import styled from "styled-components";
import { motion } from "framer-motion";

export const BibleMenuWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column; // Мобільна версія: контент і навігація в стовпчик
  // Налаштування для планшетів та десктопів
  ${({ theme }) => theme.media.up("md")`
    // Використовуємо CSS Grid для надійної двоколонкової верстки
    display: grid;
    grid-template-columns: 1fr 48px;
    grid-template-areas: "content navigation";
  `}
`;

export const NavigationContainer = styled(motion.div)`
  display: flex;
  flex-direction: row; // Мобільна версія: навігація в рядок
  width: 100%;
  justify-content: start;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xsmall};
  background-color: ${({ theme }) => theme.colors.navBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  gap: ${({ theme }) => theme.spacing.small};
  transition: background-color 0.25s ease-in-out, border-bottom 0.25s ease-in-out;
  z-index: 10;

  // Налаштування для планшетів та десктопів
  ${({ theme }) => theme.media.up("md")`
    grid-area: navigation; // Призначаємо контейнер до області "navigation"
    flex-direction: column; // Десктоп: навігація в стовпчик
    width: 46px;
    height: 100%; // Контейнер займає всю висоту
    padding: 0;
    gap: ${({ theme }) => theme.spacing.medium};
    border-bottom: none;
    position: static;
  `}
`;

export const MobileHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.color};
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xsmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  ${({ theme }) => theme.media.up("md")`
    display: none;
  `}
`;

export const NavigationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 0;
  margin: 0;

  color: ${({ theme }) => theme.colors.buttonColor};

  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtn};
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.buttonColor};
    transition: fill 0.25s ease-in-out;
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;

  ${({ theme }) => theme.media.up("md")`
    grid-area: content; // Призначаємо контейнер до області "content"
    overflow-y: auto; // Забезпечуємо прокручування лише цього контейнера
  `}
`;
