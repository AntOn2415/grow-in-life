import styled from "styled-components";
import { motion } from "framer-motion";

// Обгортка для мобільної версії, щоб забрати інлайнові стилі
export const ModalContentWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 10;
  transition: background-color 0.25s ease-in-out;

  // Стилі для модалки на мобільних
  ${({ theme }) => theme.media.down("md")`
    position: fixed;
    top: 0px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1000;
  `}
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.navBg};
  transition: background-color 0.25s ease-in-out, border-bottom 0.25s ease-in-out;
  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 11px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xxsmall};
  border-radius: 50%;
  transition: background 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBg};
  }

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.color};
    transition: background 0.25s ease-in-out;
  }

  ${({ theme }) => theme.media.down("md")`
  top: 8px;
  right: 8px;
  `}
`;

export const TestamentNav = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xsmall};

  ${({ theme }) => theme.media.down("md")`
    gap: ${({ theme }) => theme.spacing.small};
  `}
`;

export const TestamentButton = styled.button`
  background: ${({ theme, $active }) => ($active ? theme.colors.navActive : theme.colors.navBg)};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accentColor : theme.colors.colorSecondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: all 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.navActive};
  }

  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const BookList = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
  overflow-y: auto;
`;

export const BookItem = styled.div`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: background 0.25s ease-in-out;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBg};
  }
`;

export const BookTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: color 0.25s ease-in-out, border-bottom 0.25s ease-in-out;
`;

export const BookTitleBack = styled.span`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.colorSecondary};
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.color};
  }
`;

export const ChapterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;
`;

export const ChapterItem = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-align: center;
  cursor: pointer;
  transition: background 0.25s ease-in-out, border 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBg};
  }
`;
