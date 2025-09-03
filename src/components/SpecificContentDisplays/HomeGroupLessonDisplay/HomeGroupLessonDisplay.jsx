//src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.jsx
import React, { useMemo } from "react";
import { useTheme } from "styled-components";
import Card from "../../Common/Card/Card";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import HomeGroupLessonMetaInfo from "../HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo";
import ContentRenderer from "../../ContentRenderer/ContentRenderer";
import PageNavigation from "../../PageNavigation/PageNavigation";
import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  MainContentWrapper,
  StyledDescription,
  HeroSection,
  HeroContentWrapper,
} from "./HomeGroupLessonDisplay.styled";
import { generateId } from "../../../utils/generateId";
import lightHeroImage from "../../../images/photo-light3.png";
import darkHeroImage from "../../../images/photo-dark3.png";

const collectAllSections = (sections, parentIndex = []) => {
  let allSections = [];
  sections.forEach((section, index) => {
    const currentIndex = [...parentIndex, index];
    const hasTitle =
      Array.isArray(section.title) &&
      typeof section.title[0] === "string" &&
      section.title[0].trim().length > 0;
    if (hasTitle) {
      const titleText = section.title[0];
      const id = generateId(titleText, currentIndex);
      allSections.push({
        id,
        title: titleText,
        originalIndex: currentIndex,
      });
    }
    if (section.type === "section-group" && section.sections) {
      allSections = allSections.concat(collectAllSections(section.sections, currentIndex));
    }
  });
  return allSections;
};

const HomeGroupLessonDisplay = React.memo(({ lessonData }) => {
  const theme = useTheme();

  // Додаємо додаткову залежність у useMemo, щоб забезпечити оновлення, якщо lessonData змінився
  const sectionsWithTitles = useMemo(() => {
    if (!lessonData || !lessonData.sections) {
      return [];
    }
    return collectAllSections(lessonData.sections);
  }, [lessonData]);

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
      {sectionsWithTitles.length > 0 && <PageNavigation sections={sectionsWithTitles} />}
      <MainContentWrapper>
        <Card>
          <HomeGroupLessonTextWrapper>
            <StyledDescription>
              <TokenRenderer tokens={description} />
            </StyledDescription>
            <ContentRenderer
              sections={sections}
              allSectionsWithIds={sectionsWithTitles}
              parentIndex={[]}
              level={2}
            />
          </HomeGroupLessonTextWrapper>
        </Card>
      </MainContentWrapper>
    </HomeGroupLessonDisplayContainer>
  );
});

export default HomeGroupLessonDisplay;
