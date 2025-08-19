import React from "react";
import Card from "../../Common/Card/Card";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import HomeGroupLessonMetaInfo from "../HomeGroupLessonMetaInfo/HomeGroupLessonMetaInfo";
import ContentRenderer from "../../ContentRenderer/ContentRenderer";
import {
  HomeGroupLessonDisplayContainer,
  HomeGroupLessonTextWrapper,
  HomeGroupLessonTitleWrapper,
  MainContentWrapper,
  StyledDescription,
} from "./HomeGroupLessonDisplay.styled";

// ✅ Використання React.memo для запобігання зайвим рендерам
const HomeGroupLessonDisplay = React.memo(({ lessonData }) => {
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
      </HomeGroupLessonTitleWrapper>

      <MainContentWrapper>
        <Card>
          <HomeGroupLessonTextWrapper>
            <StyledDescription>
              <TokenRenderer tokens={description} />
            </StyledDescription>
            {/* ✅ Тут ми передаємо рівень 2, і це єдина точка входу */}
            <ContentRenderer sections={sections} level={2} />
          </HomeGroupLessonTextWrapper>
        </Card>
      </MainContentWrapper>
    </HomeGroupLessonDisplayContainer>
  );
});

export default HomeGroupLessonDisplay;
