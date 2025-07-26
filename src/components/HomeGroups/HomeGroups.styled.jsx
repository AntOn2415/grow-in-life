// src/components/HomeGroups/HomeGroups.styled.jsx
import styled from "styled-components";

// Перейменовуємо Container на HomeGroupsContainer
export const HomeGroupsContainer = styled.div`
  /* Ваші існуючі стилі для контейнера */
`;

// Перейменовуємо NoSermonMessage на NoLessonMessage
export const NoLessonMessage = styled.p`
  /* Ваші існуючі стилі для повідомлення */
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colorSecondary};
`;
