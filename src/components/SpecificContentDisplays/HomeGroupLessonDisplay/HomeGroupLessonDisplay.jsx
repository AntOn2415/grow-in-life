// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.js
import React from "react";
import Card from "../../Common/Card/Card";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import QuizCard from "../../InteractiveContent/QuizCard/QuizCard";
import RevealCard from "../../InteractiveContent/RevealCard/RevealCard";

// ✅ ЗМІНЕНО: Імпорт нового компонента метаінформації
import HomeGroupLessonMetaInfo from "../HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo";

// --- НОВІ ІМПОРТИ КОМПОНЕНТІВ ---
import HighlightBox from "../../InteractiveContent/HighlightBox/HighlightBox"; // Приклад шляху
import QuestionPrompt from "../../InteractiveContent/QuestionPrompt/QuestionPrompt"; // Приклад шляху
import ListCards from "../../InteractiveContent/ListCards/ListCards"; // Приклад шляху
import Timeline from "../../InteractiveContent/Timeline/Timeline"; // Приклад шляху
// import QuoteBlock from "../../Common/QuoteBlock/QuoteBlock"; // Якщо ви вирішили його створити

import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  StyledParagraph,
  RevealCardsGrid,
  HomeGroupLessonTitleWrapper,
  MainContentWrapper,
  // --- НОВІ ІМПОРТИ СТИЛІВ, ЯКЩО ПОТРІБНО ---
  // ListCardsContainer, // Приклад: якщо ListCards потребує зовнішнього контейнера
  // TimelineWrapper, // Приклад: якщо Timeline потребує зовнішнього контейнера
} from "./HomeGroupLessonDisplay.styled";

function HomeGroupLessonDisplay({ lessonData }) {
  if (!lessonData) {
    return <p>Завантаження уроку домашньої групи...</p>;
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
    // Важливо: для безпеки використовуйте DOMPurify, якщо контент може надходити від користувачів
    // У цьому прикладі припускається, що контент є безпечним або вже очищеним
    return { __html: htmlString };
  };

  return (
    <HomeGroupLessonDisplayContainer>
      <HomeGroupLessonTitleWrapper>
        <h2>{title}</h2>
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
            {description && (
              <StyledParagraph dangerouslySetInnerHTML={renderHtmlContent(description)} />
            )}
            {sections.map((section, index) => {
              // Краще використовувати switch-case для чистоти, коли багато типів секцій
              switch (section.type) {
                case "text":
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
                case "quiz":
                  return <QuizCard key={section.id} quizData={section} />;
                case "reveal-cards":
                  // Якщо 'reveal-cards' вже має свою внутрішню логіку рендерингу Card,
                  // тоді RevealCardsGrid може бути не потрібна, або бути частиною самого компонента RevealCards.
                  // Я залишив як у вашому прикладі, але будьте уважні до вкладеності.
                  return (
                    <RevealCardsGrid key={index}>
                      {section.cards.map(card => (
                        <RevealCard key={card.id} cardData={card} />
                      ))}
                    </RevealCardsGrid>
                  );
                // --- НОВІ ТИПИ СЕКЦІЙ ---
                case "highlight-box":
                  return <HighlightBox key={index} {...section} />; // Передаємо всі властивості секції
                case "question-prompt":
                  return <QuestionPrompt key={index} {...section} />;
                case "list-cards":
                  return <ListCards key={index} {...section} />;
                case "timeline":
                  return <Timeline key={index} {...section} />;
                // case "quote-block": // Якщо ви вирішили його створити
                //   return <QuoteBlock key={index} {...section} />;

                default:
                  // Якщо зустрічається невідомий тип секції, можна вивести попередження
                  console.warn(`Невідомий тип секції: ${section.type}`);
                  return null;
              }
            })}
          </HomeGroupLessonTextWrapper>
        </Card>
      </MainContentWrapper>
    </HomeGroupLessonDisplayContainer>
  );
}

export default HomeGroupLessonDisplay;
