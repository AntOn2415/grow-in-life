import React, { useRef, useLayoutEffect } from "react";
import {
  BibleTextContainer,
  ChapterHeader,
  VerseList,
  Verse,
  VerseNumber,
  VerseText,
  NextChapterButton,
} from "./BibleTextDisplay.styled";

const BibleTextDisplay = ({
  bookData,
  chapter,
  verseToScroll,
  highlightedVerses,
  onNextChapter,
  isRightSidebarSplit,
}) => {
  const currentChapterIndex = bookData.chapters.findIndex(c => c.chapter_number === chapter);
  const currentChapter = bookData.chapters[currentChapterIndex];

  const nextChapterExists = currentChapterIndex < bookData.chapters.length - 1;

  const verseRefs = useRef([]);
  const textContainerRef = useRef(null);
  const headerRef = useRef(null);

  // Оновлений useLayoutEffect з доданою залежністю
  useLayoutEffect(() => {
    // verseRefs.current = []; // Цей рядок тепер непотрібний, оскільки key={navId} перемонтовує компонент

    const verseElement = verseToScroll ? verseRefs.current[verseToScroll - 1] : null;

    if (verseToScroll && verseElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight + 20 : 0;
      const scrollPosition = verseElement.offsetTop - headerHeight;

      textContainerRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    } else if (textContainerRef.current) {
      // Якщо вірш не вказано або його елемент не знайдено, прокручуємо на початок
      textContainerRef.current.scrollTo(0, 0);
    }
  }, [chapter, verseToScroll, bookData, highlightedVerses]); // Додано highlightedVerses до залежностей

  if (!currentChapter) {
    return <div>Розділ не знайдено.</div>;
  }

  const isVerseHighlighted = verseNumber => {
    if (!highlightedVerses) return false;
    return Array.isArray(highlightedVerses) && highlightedVerses.includes(verseNumber);
  };

  return (
    <BibleTextContainer ref={textContainerRef}>
      <ChapterHeader ref={headerRef}>
        {bookData.book_name_ua} {chapter}
      </ChapterHeader>
      <VerseList>
        {currentChapter.verses.map(verse => (
          <Verse
            key={verse.verse_number}
            ref={el => {
              if (el) {
                verseRefs.current[verse.verse_number - 1] = el;
              }
            }}
            className={isVerseHighlighted(verse.verse_number) ? "highlighted-verse" : ""}
          >
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
