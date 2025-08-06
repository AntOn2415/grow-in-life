// src/components/HomeGroups/HomeGroups.styled.jsx
import styled from "styled-components";

// Контейнер для головного блоку HomeGroups
export const HomeGroupsContainer = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.25s ease-in-out;
`;

// Повідомлення, коли немає уроків
export const NoLessonMessage = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxlarge}; // ОНОВЛЕНО: Використано theme.spacing
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: Використано theme.fontSizes
  color: ${({ theme }) => theme.colors.colorSecondary}; // ОНОВЛЕНО: Використано theme.colors
`;
