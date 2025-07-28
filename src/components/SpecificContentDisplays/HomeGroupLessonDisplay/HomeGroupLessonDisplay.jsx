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

import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  HomeGroupLessonTitleWrapper,
  MainContentWrapper,
  // Переконайтеся, що VerseButton експортується звідси
  // Це буде використовуватися в nehemiah3Lesson.js
  // Але визначається в HomeGroupLessonDisplay.styled.js
  // Його НЕ потрібно імпортувати тут, якщо ви не використовуєте його безпосередньо в цьому JSX.
  // Залиште його в HomeGroupLessonDisplay.styled.js для визначення стилів
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
        <h2>{title}</h2>
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
            {description && description}
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
                          {section.title}
                        </SectionHeading>
                      )}
                      {/* content тепер масив JSX елементів, рендеримо їх напряму */}
                      {section.content.map((paragraph, pIndex) => (
                        <React.Fragment key={pIndex}>{paragraph}</React.Fragment>
                      ))}
                    </React.Fragment>
                  );
                case "quiz":
                  return <QuizCard key={section.id} quizData={section} />;
                case "reveal-cards":
                  return (
                    <React.Fragment key={index}>
                      {section.title && (
                        <SectionHeading as="h3" size="default">
                          {section.title}
                        </SectionHeading>
                      )}
                      {section.cards.map(card => (
                        <RevealCard key={card.id} cardData={card} />
                      ))}
                    </React.Fragment>
                  );
                case "highlight-box":
                  return <HighlightBox key={index} {...section} />;
                case "question-prompt":
                  return <QuestionPrompt key={index} {...section} />;
                case "list-cards":
                  return <ListCards key={index} {...section} />;
                case "timeline":
                  return <Timeline key={index} {...section} />;
                case "contrast-section":
                  return <ContrastDisplay key={index} {...section} />;

                case "diagram":
                  return (
                    <Diagram
                      key={index}
                      chartType={section.chartType}
                      title={section.title}
                      description={section.description}
                      chartData={section.chartData}
                      chartOptions={section.chartOptions}
                    />
                  );
                case "image-placeholder":
                  return (
                    <ImagePlaceholder
                      key={index}
                      title={section.title}
                      description={section.description}
                      imageSrc={section.imageSrc}
                      altText={section.altText}
                      caption={section.caption}
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
