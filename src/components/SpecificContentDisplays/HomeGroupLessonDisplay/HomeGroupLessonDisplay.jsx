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
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  HomeGroupLessonTitleWrapper,
  MainContentWrapper,
  SectionContainer,
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

  const renderSectionContent = section => {
    // ✅ ВИПРАВЛЕННЯ: використовуємо section.type, оскільки тепер він є рядком
    switch (section.type) {
      case "text":
        return (
          <>
            {section.title && (
              <SectionHeading
                as={section.subtitle ? "h4" : "h3"}
                size={section.subtitle ? "medium" : "default"}
              >
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            {section.content.map((paragraph, pIndex) => (
              <React.Fragment key={pIndex}>
                <TokenRenderer tokens={paragraph} />
              </React.Fragment>
            ))}
          </>
        );

      case "quiz":
        return (
          <QuizCard
            key={section.id}
            quizData={{
              ...section,
              question: <TokenRenderer tokens={section.question} />,
              options: section.options.map(opt => ({
                ...opt,
                text: <TokenRenderer tokens={opt.text} />,
                rationale: <TokenRenderer tokens={opt.rationale} />,
              })),
            }}
          />
        );

      case "reveal-cards":
        return (
          <>
            {section.title && (
              <SectionHeading as="h3" size="default">
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            {section.cards.map(card => (
              <RevealCard
                key={card.id}
                cardData={{ ...card, content: <TokenRenderer tokens={card.content} /> }}
              />
            ))}
          </>
        );

      case "highlight-box":
        return <HighlightBox {...section} content={<TokenRenderer tokens={section.content} />} />;

      case "question-prompt":
        return (
          <QuestionPrompt
            {...section}
            question={<TokenRenderer tokens={section.question} />}
            answer={<TokenRenderer tokens={section.answer} />}
          />
        );

      case "list-cards":
        return (
          <ListCards
            {...section}
            cards={section.cards.map(card => ({
              ...card,
              title: <TokenRenderer tokens={card.title} />,
              content: <TokenRenderer tokens={card.content} />,
            }))}
          />
        );

      case "timeline":
        return (
          <Timeline
            {...section}
            events={section.events.map(event => ({
              ...event,
              title: <TokenRenderer tokens={event.title} />,
              description: <TokenRenderer tokens={event.description} />,
              verses: event.verses
                ? // Спрощення: ми передаємо кожен рядок як окремий токен
                  event.verses.map((verseString, verseIndex) => (
                    <TokenRenderer key={verseIndex} tokens={verseString} />
                  ))
                : null,
            }))}
          />
        );

      case "contrast-section":
        return (
          <ContrastDisplay
            {...section}
            items={section.items.map(item => ({
              ...item,
              // ✅ ВИПРАВЛЕННЯ: тепер item.type вже є рядком завдяки fix у deepParseTags
              heading: <TokenRenderer tokens={item.heading} />,
              content: <TokenRenderer tokens={item.content} />,
            }))}
          />
        );

      case "diagram":
        return (
          <Diagram
            key={section.id}
            title={section.title}
            description={section.description}
            // ✅ ВИПРАВЛЕННЯ: chartType тепер є рядком, беремо його без [0]
            chartType={section.chartType}
            chartData={section.chartData}
            chartOptions={section.chartOptions}
          />
        );

      case "image-placeholder":
        return (
          <ImagePlaceholder
            key={section.id}
            imageUrl={section.imageUrl}
            altText={section.altText}
            caption={<TokenRenderer tokens={section.caption} />}
          />
        );

      case "description-with-image":
        return (
          <DescriptionWithImage
            key={section.id}
            {...section}
            title={<TokenRenderer tokens={section.title} />}
            content={section.content}
            caption={<TokenRenderer tokens={section.caption} />}
          />
        );

      default:
        console.warn("Невідомий тип секції:", section.type);
        return null;
    }
  };

  return (
    <HomeGroupLessonDisplayContainer>
      <HomeGroupLessonTitleWrapper>
        <h2>
          <TokenRenderer tokens={title} />
        </h2>
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
            {description && <TokenRenderer tokens={description} />}
            {sections.map((section, index) => (
              <SectionContainer key={index}>{renderSectionContent(section)}</SectionContainer>
            ))}
          </HomeGroupLessonTextWrapper>
        </Card>
      </MainContentWrapper>
    </HomeGroupLessonDisplayContainer>
  );
}

export default HomeGroupLessonDisplay;
