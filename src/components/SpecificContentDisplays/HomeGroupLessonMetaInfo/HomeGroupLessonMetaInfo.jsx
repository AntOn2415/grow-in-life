import React from "react";
import { InfoRow, LessonDetails, TagsList } from "./HomeGroupLessonMetaInfo.styled";

function HomeGroupLessonMetaInfo({ author, book, chapter, verses, date, duration, theme, tags }) {
  const showLocation = chapter || verses;

  return (
    <>
      <LessonDetails>
        {author && (
          <InfoRow>
            <dt>Автор:</dt>
            <dd>
              <span>{author}</span>
            </dd>
          </InfoRow>
        )}
        {book && (
          <InfoRow>
            <dt>Книга:</dt>
            <dd>
              <span>
                {book} {chapter ? ` ${chapter}` : ""}
              </span>
            </dd>
          </InfoRow>
        )}
        {showLocation && (
          <InfoRow>
            <dt>Місце дослідження:</dt>
            <dd>
              <span>{verses ? `${verses}` : ""}</span>
            </dd>
          </InfoRow>
        )}
        {date && (
          <InfoRow>
            <dt>Дата:</dt>
            <dd>
              <span>{date}</span>
            </dd>
          </InfoRow>
        )}
        {duration && (
          <InfoRow>
            <dt>Тривалість:</dt>
            <dd>
              <span>{duration}</span>
            </dd>
          </InfoRow>
        )}
        {theme && (
          <InfoRow>
            <dt>Тема:</dt>
            <dd>
              <span>{theme}</span>
            </dd>
          </InfoRow>
        )}
      </LessonDetails>
      {tags && tags.length > 0 && (
        <TagsList>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </TagsList>
      )}
    </>
  );
}

export default HomeGroupLessonMetaInfo;
