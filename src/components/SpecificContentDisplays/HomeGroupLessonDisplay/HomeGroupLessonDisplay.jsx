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
import List from "../../InteractiveContent/List/List";
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
  StyledDescription,
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
                as={section.subtitle ? "h3" : "h4"}
                size={section.subtitle ? "medium" : "default"}
              >
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            {/* ✅ ДОДАНО: Підзаголовок рендериться після title */}
            {section.subtitle && (
              <SectionHeading as="h3" size="small">
                <TokenRenderer tokens={section.subtitle} />
              </SectionHeading>
            )}
            {/* ✅ ОНОВЛЕНО: Кожен абзац рендериться в тезі <p> */}
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>
                <TokenRenderer tokens={paragraph} />
              </p>
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
                id={card.id}
                emoji={card.emoji}
                // ✅ ВИПРАВЛЕННЯ: передаємо ТІЛЬКИ необроблений масив токенів
                title={card.title}
                content={card.content}
              />
            ))}
          </>
        );

      case "highlight-box":
        // ✅ ВИПРАВЛЕННЯ: Передаємо обидва пропси title та content як звичайні рядки
        return <HighlightBox {...section} />;

      case "question-prompt":
        return (
          <QuestionPrompt
            {...section}
            question={<TokenRenderer tokens={section.question} />}
            answer={<TokenRenderer tokens={section.answer} />}
          />
        );

      case "list-cards":
        return <ListCards {...section} />;

      case "timeline":
        // ✅ ВИПРАВЛЕННЯ: Передаємо секцію без змін, дозволяючи Timeline обробити її самостійно.
        return <Timeline {...section} />;

      case "contrast-section":
        // ✅ ВИПРАВЛЕННЯ: Передаємо секцію без змін, щоб ContrastDisplay обробив дані самостійно.
        return <ContrastDisplay {...section} />;

      case "diagram":
        return (
          <Diagram
            key={section.id}
            title={section.title}
            // ✅ ВИПРАВЛЕННЯ: Передаємо TokenRenderer як prop для description
            description={<TokenRenderer tokens={section.description} />}
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
      case "list":
        return <List {...section} />;

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
            <StyledDescription>
              <TokenRenderer tokens={description} />
            </StyledDescription>
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
