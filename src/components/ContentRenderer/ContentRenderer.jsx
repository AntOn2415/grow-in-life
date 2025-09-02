// src/components/ContentRenderer/ContentRenderer.jsx
import React from "react";
import styled from "styled-components";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import TokenRenderer from "../TokenRenderer/TokenRenderer";
import QuizCard from "../InteractiveContent/QuizCard/QuizCard";
import RevealCard from "../InteractiveContent/RevealCard/RevealCard";
import Diagram from "../InteractiveContent/Diagram/Diagram";
import HighlightBox from "../InteractiveContent/HighlightBox/HighlightBox";
import QuestionPrompt from "../InteractiveContent/QuestionPrompt/QuestionPrompt";
import ListCards from "../InteractiveContent/ListCards/ListCards";
import List from "../InteractiveContent/List/List";
import Timeline from "../InteractiveContent/Timeline/Timeline";
import ContrastDisplay from "../InteractiveContent/ContrastDisplay/ContrastDisplay";
import DescriptionWithImage from "../InteractiveContent/DescriptionWithImage/DescriptionWithImage";
import ImagePlaceholder from "../InteractiveContent/ImagePlaceholder/ImagePlaceholder";

const ContentRenderer = ({ sections, allSectionsWithIds, parentIndex = [], level = 2 }) => {
  if (!sections || !Array.isArray(sections)) {
    return null;
  }
  return sections.map((section, index) => {
    const currentIndex = [...parentIndex, index];
    const sectionHeadingLevel = level;
    const childLevel = level + 1;

    const sectionData = allSectionsWithIds.find(
      item => JSON.stringify(item.originalIndex) === JSON.stringify(currentIndex)
    );
    const sectionId = sectionData?.id;

    const hasTitle =
      Array.isArray(section.title) &&
      typeof section.title[0] === "string" &&
      section.title[0].trim().length > 0;

    switch (section.type) {
      case "list":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <List items={section.items} />
          </SectionContainer>
        );
      case "quiz":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <QuizCard quizData={section} titleLevel={childLevel} />
          </SectionContainer>
        );
      case "reveal-cards":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            {section.cards.map((card, cardIndex) => (
              <RevealCard key={cardIndex} {...card} titleLevel={childLevel} />
            ))}
          </SectionContainer>
        );
      case "highlight-box":
        return (
          <SectionContainer key={index}>
            <HighlightBox {...section} titleLevel={sectionHeadingLevel} id={sectionId} />
          </SectionContainer>
        );
      case "question-prompt":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <QuestionPrompt
              question={section.question}
              answer={section.answer}
              emoji={section.emoji}
              headingLevel={childLevel}
            />
          </SectionContainer>
        );
      case "list-cards":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <ListCards cards={section.cards} titleLevel={childLevel} />
          </SectionContainer>
        );
      case "timeline":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <Timeline events={section.events} eventTitleLevel={childLevel} />
          </SectionContainer>
        );
      case "contrast-section":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <ContrastDisplay items={section.items} itemTitleLevel={childLevel} />
          </SectionContainer>
        );
      case "diagram":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <Diagram {...section} titleLevel={childLevel} />
          </SectionContainer>
        );
      case "description-with-image":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <DescriptionWithImage {...section} titleLevel={childLevel} />
          </SectionContainer>
        );
      case "image-placeholder":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <ImagePlaceholder {...section} />
          </SectionContainer>
        );
      case "text":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="medium" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            {section.subtitle && (
              <SectionHeading as={`h${Math.min(sectionHeadingLevel + 1, 6)}`} size="small">
                <TokenRenderer tokens={section.subtitle} />
              </SectionHeading>
            )}
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>
                <TokenRenderer tokens={paragraph} />
              </p>
            ))}
          </SectionContainer>
        );
      case "section-group":
        return (
          <SectionContainer key={index}>
            {hasTitle && (
              <SectionHeading as={`h${sectionHeadingLevel}`} size="default" id={sectionId}>
                <TokenRenderer tokens={section.title} />
              </SectionHeading>
            )}
            <ContentRenderer
              sections={section.sections}
              allSectionsWithIds={allSectionsWithIds}
              parentIndex={currentIndex}
              level={childLevel}
            />
          </SectionContainer>
        );
      default:
        console.warn("Невідомий тип секції:", section.type);
        return null;
    }
  });
};

export default ContentRenderer;

export const SectionContainer = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  &:not(:first-child) {
    padding-left: 2rem;
    border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
  }
`;
