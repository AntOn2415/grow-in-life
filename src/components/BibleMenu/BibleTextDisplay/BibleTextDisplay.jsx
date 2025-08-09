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

// Компонент основного тексту Біблії
const BibleTextDisplay = ({
  bookData,
  chapter,
  verseToScroll,
  highlightedVerses,
  onNextChapter,
}) => {
  const currentChapterIndex = bookData.chapters.findIndex(c => c.chapter_number === chapter);
  const currentChapter = bookData.chapters[currentChapterIndex];

  // Визначаємо, чи існує наступний розділ
  const nextChapterExists = currentChapterIndex < bookData.chapters.length - 1;

  const verseRefs = useRef([]);
  const textContainerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Додаємо невелику затримку, щоб DOM встиг оновитися
    const scrollTimeout = setTimeout(() => {
      if (verseToScroll && verseRefs.current[verseToScroll - 1]) {
        const verseElement = verseRefs.current[verseToScroll - 1];
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight + 20 : 0;

        // Визначаємо позицію для скролу з урахуванням висоти заголовка
        const scrollPosition = verseElement.offsetTop - headerHeight;

        textContainerRef.current.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      } else if (textContainerRef.current) {
        // Якщо вірш не вказано, скролимо на початок розділу
        textContainerRef.current.scrollTo(0, 0);
      }
    }, 100); // 100 мс — достатньо для рендеру

    // Очищення таймауту при зникненні компонента
    return () => clearTimeout(scrollTimeout);
  }, [chapter, verseToScroll]);

  if (!currentChapter) {
    return <div>Розділ не знайдено.</div>;
  }

  // Додаємо функцію для перевірки, чи потрібно виділяти вірш
  const isVerseHighlighted = verseNumber => {
    if (!highlightedVerses) return false;
    // Обробка діапазону та вибіркових віршів
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
            ref={el => (verseRefs.current[verse.verse_number - 1] = el)}
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
