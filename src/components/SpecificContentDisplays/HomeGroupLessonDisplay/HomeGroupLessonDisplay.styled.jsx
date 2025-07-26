// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.styled.jsx
import styled from "styled-components";

// Замість LessonDisplayContainer використовуємо HomeGroupLessonDisplayContainer
export const HomeGroupLessonDisplayContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: calc(100vh - var(--header-height, 60px));
`;

// Замість LessonTitleWrapper використовуємо HomeGroupLessonTitleWrapper
export const HomeGroupLessonTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.accentColor};
    margin-bottom: 10px;
    line-height: 1.2;
  }
`;

export const MainContentWrapper = styled.div`
  /* Можливо, тут будуть додаткові стилі для контейнера з картою, якщо потрібно */
`;

// Замість LessonTextWrapper використовуємо HomeGroupLessonTextWrapper
export const HomeGroupLessonTextWrapper = styled.div`
  line-height: 1.7;
  font-size: 1.1rem;

  p {
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color};
    margin-top: 30px;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color};
    margin-top: 25px;
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
  }
`;

export const StyledParagraph = styled.p`
  /* Додаткові стилі для параграфів, якщо потрібно */
`;

export const RevealCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 15px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
