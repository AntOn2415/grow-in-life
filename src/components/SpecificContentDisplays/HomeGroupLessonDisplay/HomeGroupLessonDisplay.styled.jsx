// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.styled.js
import styled from "styled-components";

// Основний контейнер для сторінки уроку домашньої групи
export const HomeGroupLessonDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  // Медіа-запит для мобільних пристроїв
  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
  `}
`;

// Обгортка для заголовка та мета-інформації уроку
export const HomeGroupLessonTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    color: ${({ theme }) => theme.colors.color};
    margin-bottom: ${({ theme }) => theme.spacing.xsmall};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору заголовка

    // Медіа-запит для мобільних пристроїв, щоб зменшити шрифт
    ${({ theme }) => theme.media.down("sm")`
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
    `}
  }
`;

// Обгортка для основного вмісту (карток, тексту тощо)
export const MainContentWrapper = styled.div`
  width: 100%;
`;

// Обгортка для текстового вмісту уроку (всередині Card)
export const HomeGroupLessonTextWrapper = styled.div`
  line-height: 1.8;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для основного кольору тексту

  // Медіа-запит для мобільних пристроїв, щоб трохи зменшити шрифт
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
  `}

  p {
    margin-bottom: 1em;
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
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору жирного тексту
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.color};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору заголовків
  }
`;

// Стилізований компонент для кнопок-посилань на вірші
export const VerseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accentColor};
  display: inline;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору кнопки

  &:hover {
    color: ${({ theme }) => theme.colors.accentBg || theme.colors.accentColor};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accentColor};
    outline-offset: 2px;
  }

  &:active {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
