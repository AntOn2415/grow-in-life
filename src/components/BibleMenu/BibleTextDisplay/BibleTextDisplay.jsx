// src/components/BibleMenu/BibleTextDisplay.jsx
import React, { useRef, useEffect } from "react";
import {
  BibleTextContainer,
  ChapterHeader,
  VerseList,
  Verse,
  VerseNumber,
  VerseText,
  NextChapterButton,
} from "./BibleTextDisplay.styled";
import { useLocation } from "react-router-dom";

// Компонент основного тексту Біблії
const BibleTextDisplay = ({ bookData, chapter, onNextChapter }) => {
  const currentChapterIndex = bookData.chapters.findIndex(c => c.chapter_number === chapter);
  const currentChapter = bookData.chapters[currentChapterIndex];

  // Визначаємо, чи існує наступний розділ
  const nextChapterExists = currentChapterIndex < bookData.chapters.length - 1;

  // Використовуємо ref для скролу
  const textContainerRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Скролимо до початку розділу при його зміні
    if (textContainerRef.current) {
      textContainerRef.current.scrollTo(0, 0);
    }
  }, [chapter, location.pathname]);

  if (!currentChapter) {
    return <div>Розділ не знайдено.</div>;
  }

  return (
    <BibleTextContainer ref={textContainerRef}>
      <ChapterHeader>
        {bookData.book_name_ua} {chapter}
      </ChapterHeader>
      <VerseList>
        {currentChapter.verses.map(verse => (
          <Verse key={verse.verse_number}>
            <VerseNumber>{verse.verse_number}</VerseNumber>
            <VerseText>{verse.text}</VerseText>
          </Verse>
        ))}
      </VerseList>
      {nextChapterExists && <NextChapterButton onClick={onNextChapter}>Далі</NextChapterButton>}
    </BibleTextContainer>
  );
};

export default BibleTextDisplay;
