import React from "react";
// ✅ Імпортуємо useTheme з styled-components
import { useTheme } from "styled-components";
import Card from "../../Common/Card/Card";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import HomeGroupLessonMetaInfo from "../HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo";
import ContentRenderer from "../../ContentRenderer/ContentRenderer";
import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  MainContentWrapper,
  StyledDescription,
  HeroSection,
  HeroContentWrapper,
} from "./HomeGroupLessonDisplay.styled";

// ✅ Імпортуємо локальні зображення
import lightHeroImage from "../../../images/photo-light.png";
import darkHeroImage from "../../../images/photo-dark.png";

const HomeGroupLessonDisplay = React.memo(({ lessonData }) => {
  // ✅ Отримуємо поточну тему
  const theme = useTheme();

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
    // heroImage, ✅ Це поле більше не потрібне
  } = lessonData;

  // ✅ Визначаємо, яке зображення використовувати на основі теми
  const heroImage = theme.colors.background === "#FEFBF2" ? lightHeroImage : darkHeroImage;

  return (
    <HomeGroupLessonDisplayContainer>
      <HeroSection $heroImage={heroImage}>
        <HeroContentWrapper>
          <h1>
            <TokenRenderer tokens={title} />
          </h1>
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
        </HeroContentWrapper>
      </HeroSection>

      <MainContentWrapper>
        <Card>
          <HomeGroupLessonTextWrapper>
            <StyledDescription>
              <TokenRenderer tokens={description} />
            </StyledDescription>
            <ContentRenderer sections={sections} level={2} />
          </HomeGroupLessonTextWrapper>
        </Card>
      </MainContentWrapper>
    </HomeGroupLessonDisplayContainer>
  );
});

export default HomeGroupLessonDisplay;
