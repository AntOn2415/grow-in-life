// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.styled.js
import styled from "styled-components";

export const HomeGroupLessonDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const HomeGroupLessonTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    color: ${({ theme }) => theme.colors.color};
    margin-bottom: ${({ theme }) => theme.spacing.xsmall};
    transition: color 0.25s ease-in-out;

    ${({ theme }) => theme.media.down("sm")`
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
    `}
  }
`;

export const MainContentWrapper = styled.div`
  width: 100%;
`;

export const HomeGroupLessonTextWrapper = styled.div`
  line-height: 1.8;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  transition: color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
  `}

  p {
    margin-bottom: 1em;
    color: red;
  }

  ul {
    list-style-type: disc;
    margin-left: ${({ theme }) => theme.spacing.medium};
    margin-bottom: 1em;
  }

  ol {
    list-style-type: decimal;
    margin-left: ${({ theme }) => theme.spacing.medium};
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${({ theme }) => theme.colors.color};
    transition: color 0.25s ease-in-out;
  }

  // Додаємо відступ між компонентами, що знаходяться всередині обгортки
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    // Забираємо відступ у останнього елемента, щоб не було зайвого порожнього місця
    &:last-child {
      margin-bottom: 0;
    }
  }

  // Додаємо відступ для SectionHeading
  .section-heading {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

// Створюємо новий стилізований компонент для обгортки секцій
export const SectionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  // Щоб останній елемент не мав зайвого відступу
  &:last-child {
    margin-bottom: 0;
  }

  // Додаємо стилі для заголовків всередині секції
  h3,
  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  // Забираємо відступ у першого заголовка, якщо він є першим елементом секції
  h3:first-child,
  h4:first-child {
    margin-top: 0;
  }
`;

export const VerseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  color: inherit;
  display: inline;
  transition: color 0.25s ease-in-out, text-shadow 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }

  &:active {
  }
`;
