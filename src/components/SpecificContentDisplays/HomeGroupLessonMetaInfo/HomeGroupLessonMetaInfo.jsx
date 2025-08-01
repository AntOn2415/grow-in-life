// src/components/SpecificContentDisplays/HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo.jsx
import React from "react";
import styled from "styled-components";

// Ця назва компонента є достатньо описовою, її можна залишити.
const MetaInfoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small}; // ОНОВЛЕНО: Використовуємо fontSizes
  color: ${({ theme }) => theme.colors.colorSecondary}; // ОНОВЛЕНО: Використовуємо theme.colors
  margin-top: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
  // Медіа-запит для мобільних пристроїв, щоб зменшити шрифт
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  `}

  p {
    margin: calc(${({ theme }) => theme.spacing.xsmall} / 2) 0; // ОНОВЛЕНО: Використовуємо spacing
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використовуємо theme.colors
  }

  .lesson-tags {
    margin-top: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing

    // Додаємо flexbox для кращого відображення тегів на мобільних пристроях
    display: flex;
    flex-wrap: wrap;
    gap: calc(${({ theme }) => theme.spacing.xsmall} / 2);

    span {
      display: inline-block;
      background-color: ${({ theme }) =>
        theme.colors.tagBg}; // ОНОВЛЕНО: Використовуємо theme.colors
      color: ${({ theme }) => theme.colors.tagColor}; // ОНОВЛЕНО: Використовуємо theme.colors
      padding: 4px 8px; // Не змінюємо, оскільки це точні значення
      border-radius: ${({ theme }) =>
        theme.borderRadius.small}; // ОНОВЛЕНО: Використовуємо borderRadius
      font-size: ${({ theme }) => theme.fontSizes.small}; // ОНОВЛЕНО: Використовуємо fontSizes
    }
  }
`;

function HomeGroupLessonMetaInfo({ author, book, chapter, verses, date, duration, theme, tags }) {
  return (
    <MetaInfoContainer>
      {author && (
        <p>
          Автор: <span>{author}</span>
        </p>
      )}
      {(book || chapter || verses) && (
        <p>
          Книга:{" "}
          <span>
            {book} {chapter ? `глава ${chapter}` : ""}
            {verses ? `, вірші ${verses}` : ""}
          </span>
        </p>
      )}
      {date && (
        <p>
          Дата: <span>{date}</span>
        </p>
      )}
      {duration && (
        <p>
          Тривалість: <span>{duration}</span>
        </p>
      )}
      {theme && (
        <p>
          Тема: <span>{theme}</span>
        </p>
      )}
      {tags && tags.length > 0 && (
        <div className="lesson-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      )}
    </MetaInfoContainer>
  );
}

export default HomeGroupLessonMetaInfo;
