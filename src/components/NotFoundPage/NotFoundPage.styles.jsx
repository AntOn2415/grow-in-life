// src/components/NotFoundPage/NotFoundPage.styles.js
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Займає всю висоту вікна */
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background}; /* Фон з теми */
  color: ${({ theme }) => theme.colors.color}; /* Колір тексту з теми */
`;

export const StatusCode = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge}; /* Великий розмір для коду */
  color: ${({ theme }) => theme.colors.accentColor}; /* Акцентний колір для коду */
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.colorSecondary}; /* Вторинний колір тексту */
  margin-bottom: ${({ theme }) => theme.spacing.large};
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const HomeLink = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.buttonBg}; /* Колір кнопки з теми */
  color: ${({ theme }) => theme.colors.buttonColor}; /* Колір тексту кнопки з теми */
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtn}; /* Колір ховеру кнопки з теми */
  }
`;
