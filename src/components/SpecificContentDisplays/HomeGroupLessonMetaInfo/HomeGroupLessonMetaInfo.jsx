// src/components/SpecificContentDisplays/HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo.jsx
import React from "react";
import styled from "styled-components";

const MetaInfoContainer = styled.div`
  // Цю назву можна залишити або змінити на HomeGroupLessonMetaInfoContainer
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colorSecondary};
  margin-top: 15px;

  p {
    margin: 5px 0;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.color};
  }

  .lesson-tags {
    margin-top: 10px;
    span {
      display: inline-block;
      background-color: ${({ theme }) => theme.tagBg};
      color: ${({ theme }) => theme.tagColor};
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 5px;
      font-size: 0.85rem;
    }
  }
`;

// Замість LessonMetaInfo використовуємо HomeGroupLessonMetaInfo
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
