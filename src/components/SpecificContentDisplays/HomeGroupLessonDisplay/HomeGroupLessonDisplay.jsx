// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.jsx
import React from "react";
import Card from "../../Common/Card/Card";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import QuizCard from "../../InteractiveContent/QuizCard/QuizCard";
import RevealCard from "../../InteractiveContent/RevealCard/RevealCard";
import HomeGroupLessonMetaInfo from "../HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo";
import Diagram from "../../InteractiveContent/Diagram/Diagram";
import ImagePlaceholder from "../../InteractiveContent/ImagePlaceholder/ImagePlaceholder";
import HighlightBox from "../../InteractiveContent/HighlightBox/HighlightBox";
import QuestionPrompt from "../../InteractiveContent/QuestionPrompt/QuestionPrompt";
import ListCards from "../../InteractiveContent/ListCards/ListCards";
import Timeline from "../../InteractiveContent/Timeline/Timeline";
import ContrastDisplay from "../../InteractiveContent/ContrastDisplay/ContrastDisplay";
import DescriptionWithImage from "../../InteractiveContent/DescriptionWithImage/DescriptionWithImage";
import { parseBibleLinks } from "../../../utils/parseBibleLinks"; // Імпортуємо утиліту

import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  HomeGroupLessonTitleWrapper,
  MainContentWrapper,
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
    theme: lessonTheme,
    tags,
    description,
    sections,
  } = lessonData;

  return (
    <HomeGroupLessonDisplayContainer>
      <HomeGroupLessonTitleWrapper>
        <h2>{parseBibleLinks(title)}</h2>
        <HomeGroupLessonMetaInfo
          author={author}
          book={book}
          chapter={chapter}
          verses={verses}
          date={date}
          duration={duration}
          theme={lessonTheme}
          tags={tags}
        />
      </HomeGroupLessonTitleWrapper>
      <MainContentWrapper>
        <Card>
          <HomeGroupLessonTextWrapper>
            {/* Парсимо опис, якщо він є */}
            {description && parseBibleLinks(description)}
            {sections.map((section, index) => {
              switch (section.type) {
                case "text":
                  return (
                    <React.Fragment key={index}>
                      {section.title && (
                        <SectionHeading
                          as={section.subtitle ? "h4" : "h3"}
                          size={section.subtitle ? "medium" : "default"}
                        >
                          {/* Парсимо заголовок секції */}
                          {parseBibleLinks(section.title)}
                        </SectionHeading>
                      )}
                      {section.content.map((paragraph, pIndex) => (
                        <React.Fragment key={pIndex}>
                          {/* Парсимо кожен параграф */}
                          {parseBibleLinks(paragraph)}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  );
                case "quiz":
                  // Парсимо текст питання та обґрунтування
                  return (
                    <QuizCard
                      key={section.id}
                      quizData={{
                        ...section,
                        question: parseBibleLinks(section.question),
                        options: section.options.map(opt => ({
                          ...opt,
                          rationale: parseBibleLinks(opt.rationale),
                        })),
                      }}
                    />
                  );
                case "reveal-cards":
                  return (
                    <React.Fragment key={index}>
                      {section.title && (
                        <SectionHeading as="h3" size="default">
                          {parseBibleLinks(section.title)}
                        </SectionHeading>
                      )}
                      {section.cards.map(card => (
                        <RevealCard
                          key={card.id}
                          cardData={{
                            ...card,
                            content: parseBibleLinks(card.content),
                          }}
                        />
                      ))}
                    </React.Fragment>
                  );
                case "highlight-box":
                  // Парсимо контент у виділеному блоці
                  return (
                    <HighlightBox
                      key={index}
                      {...section}
                      content={parseBibleLinks(section.content)}
                    />
                  );
                case "question-prompt":
                  // Парсимо питання та відповідь
                  return (
                    <QuestionPrompt
                      key={index}
                      {...section}
                      question={parseBibleLinks(section.question)}
                      answer={parseBibleLinks(section.answer)}
                    />
                  );
                case "list-cards":
                  // Парсимо контент карток зі списку
                  return (
                    <ListCards
                      key={index}
                      {...section}
                      cards={section.cards.map(card => ({
                        ...card,
                        content: parseBibleLinks(card.content),
                      }))}
                    />
                  );
                case "timeline":
                  // Парсимо опис кожного пункту в таймлайні
                  return (
                    <Timeline
                      key={index}
                      {...section}
                      events={section.events.map(event => ({
                        ...event,
                        description: parseBibleLinks(event.description),
                      }))}
                    />
                  );
                case "contrast-section":
                  // Парсимо контент у ContrastDisplay
                  return (
                    <ContrastDisplay
                      key={index}
                      {...section}
                      items={section.items.map(item => ({
                        ...item,
                        content: parseBibleLinks(item.content),
                      }))}
                    />
                  );
                case "diagram":
                  // Парсимо опис діаграми
                  return (
                    <Diagram
                      key={index}
                      chartType={section.chartType}
                      title={parseBibleLinks(section.title)}
                      description={parseBibleLinks(section.description)}
                      chartData={section.chartData}
                      chartOptions={section.chartOptions}
                    />
                  );
                case "image-placeholder":
                  // Парсимо опис та підпис до зображення
                  return (
                    <ImagePlaceholder
                      key={index}
                      title={parseBibleLinks(section.title)}
                      description={parseBibleLinks(section.description)}
                      imageUrl={section.imageUrl}
                      altText={section.altText}
                      caption={parseBibleLinks(section.caption)}
                    />
                  );
                case "description-with-image":
                  // Парсимо заголовок та контент
                  return (
                    <DescriptionWithImage
                      key={index}
                      title={parseBibleLinks(section.title)}
                      content={parseBibleLinks(section.content)}
                      imageUrl={section.imageUrl}
                      altText={section.altText}
                      caption={parseBibleLinks(section.caption)}
                      imagePosition={section.imagePosition}
                    />
                  );
                default:
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
