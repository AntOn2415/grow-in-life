// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.js
import React from "react";
import Card from "../../Common/Card/Card";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import QuizCard from "../../InteractiveContent/QuizCard/QuizCard";
import RevealCard from "../../InteractiveContent/RevealCard/RevealCard";
// ✅ ЗМІНЕНО: Імпорт нового компонента метаінформації
import HomeGroupLessonMetaInfo from "../HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo";

import {
  HomeGroupLessonDisplayContainer, // ✅ ЗМІНЕНО: Імпортуємо нові назви стилів
  HomeGroupLessonTextWrapper, // ✅ ЗМІНЕНО
  StyledParagraph,
  RevealCardsGrid,
  HomeGroupLessonTitleWrapper, // ✅ ЗМІНЕНО
  MainContentWrapper,
} from "./HomeGroupLessonDisplay.styled"; // ✅ ЗМІНЕНО: Шлях до стилів

// ✅ ЗМІНЕНО: Назва компонента та props
function HomeGroupLessonDisplay({ lessonData }) {
  if (!lessonData) {
    return <p>Завантаження уроку домашньої групи...</p>; // ✅ ЗМІНЕНО
  }

  const {
    title,
    author,
    book,
    chapter,
    verses,
    date,
    duration,
    theme,
    tags,
    description,
    sections,
  } = lessonData;

  const renderHtmlContent = htmlString => {
    return { __html: htmlString };
  };

  return (
    <HomeGroupLessonDisplayContainer>
      {" "}
      {/* ✅ ЗМІНЕНО */}
      <HomeGroupLessonTitleWrapper>
        {" "}
        {/* ✅ ЗМІНЕНО */}
        <h2>{title}</h2>
        {/* ✅ ЗМІНЕНО: Використовуємо HomeGroupLessonMetaInfo */}
        <HomeGroupLessonMetaInfo
          author={author}
          book={book}
          chapter={chapter}
          verses={verses}
          date={date}
          duration={duration}
          theme={theme}
          tags={tags}
        />
      </HomeGroupLessonTitleWrapper>
      <MainContentWrapper>
        <Card>
          <HomeGroupLessonTextWrapper>
            {" "}
            {/* ✅ ЗМІНЕНО */}
            {description && (
              <StyledParagraph dangerouslySetInnerHTML={renderHtmlContent(description)} />
            )}
            {sections.map((section, index) => {
              if (section.type === "text") {
                return (
                  <React.Fragment key={index}>
                    {section.title && (
                      <SectionHeading
                        as={section.subtitle ? "h4" : "h3"}
                        size={section.subtitle ? "medium" : "default"}
                      >
                        {section.title}
                      </SectionHeading>
                    )}
                    {section.content.map((paragraph, pIndex) => (
                      <StyledParagraph
                        key={pIndex}
                        dangerouslySetInnerHTML={renderHtmlContent(paragraph)}
                      />
                    ))}
                  </React.Fragment>
                );
              } else if (section.type === "quiz") {
                return <QuizCard key={section.id} quizData={section} />;
              } else if (section.type === "reveal-cards") {
                return (
                  <RevealCardsGrid key={index}>
                    {section.cards.map(card => (
                      <RevealCard key={card.id} cardData={card} />
                    ))}
                  </RevealCardsGrid>
                );
              }
              return null;
            })}
          </HomeGroupLessonTextWrapper>
        </Card>
      </MainContentWrapper>
    </HomeGroupLessonDisplayContainer>
  );
}

export default HomeGroupLessonDisplay; // ✅ ЗМІНЕНО
