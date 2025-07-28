// src/components/SpecificContentDisplays/SermonDisplay/SermonDisplay.js
import React from "react";
import Card from "../../Common/Card/Card";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import QuizCard from "../../InteractiveContent/QuizCard/QuizCard";
import RevealCard from "../../InteractiveContent/RevealCard/RevealCard";
import SermonMetaInfo from "../SermonMetaInfo/SermonMetaInfo";

import {
  SermonDisplayContainer,
  SermonTextWrapper,
  StyledParagraph,
  RevealCardsGrid,
  SermonTitleWrapper,
  MainContentWrapper,
} from "./SermonDisplay.styled";

function SermonDisplay({ sermonData }) {
  if (!sermonData) {
    return <p>Завантаження проповіді...</p>;
  }

  const { title, speaker, date, book, description, theme, sections } = sermonData;

  return (
    <SermonDisplayContainer>
      <SermonTitleWrapper>
        <h2>{title}</h2>
        <SermonMetaInfo
          speaker={speaker}
          date={date}
          theme={theme}
          book={book}
          description={description}
        />
      </SermonTitleWrapper>

      <MainContentWrapper>
        <Card>
          <SermonTextWrapper>
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
                      <StyledParagraph key={pIndex}>{paragraph}</StyledParagraph>
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
          </SermonTextWrapper>
        </Card>
      </MainContentWrapper>
    </SermonDisplayContainer>
  );
}

export default SermonDisplay;
