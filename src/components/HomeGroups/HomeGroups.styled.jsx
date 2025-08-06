// src/components/HomeGroups/HomeGroups.styled.jsx
import styled from "styled-components";

// Контейнер для головного блоку HomeGroups
export const HomeGroupsContainer = styled.div`
  margin: 0;
  //padding: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано theme.spacing
  background-color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: background-color 0.25s ease-in-out;
`;

// Повідомлення, коли немає уроків
export const NoLessonMessage = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxlarge}; // ОНОВЛЕНО: Використано theme.spacing
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: Використано theme.fontSizes
  color: ${({ theme }) => theme.colors.colorSecondary}; // ОНОВЛЕНО: Використано theme.colors
`;
