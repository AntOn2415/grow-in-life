import React, { createContext, useState } from "react";
import { BOOK_CATEGORIES } from "../components/BibleMenu/constants";
import { parseVersesFromQuery } from "../utils/parseVersesFromQuery";

export const BibleContext = createContext();

export const BibleProvider = ({ children }) => {
  const [bookKey, setBookKey] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [verse, setVerse] = useState(null);
  const [testament, setTestament] = useState(null);
  const [highlightedVerses, setHighlightedVerses] = useState(null);
  const [navId, setNavId] = useState(null);
  const [navSource, setNavSource] = useState(null);

  const navigateTo = (bookRef, source = "text") => {
    const cleanRef = bookRef.replace(/[[\]]/g, "");
    const parts = cleanRef.split(":");
    const newBookKey = parts[0];
    const newTestament = BOOK_CATEGORIES.find(cat =>
      cat.items.some(book => book.internalKey === newBookKey)
    )?.testament;

    if (!newTestament) {
      console.error(`Книгу з ключем "${newBookKey}" не знайдено.`);
      return;
    }

    setBookKey(newBookKey);
    setTestament(newTestament);
    setNavId(Date.now() + Math.random());
    setNavSource(source);

    // Скидаємо виділення та вірш перед новою навігацією
    setHighlightedVerses(null);
    let newChapter = 1;
    let newVerse = 1;

    if (parts.length > 1) {
      const chapterAndVerseStr = parts.slice(1).join(":");

      // Перевірка на міжглавний діапазон
      const chapterRangeMatch = chapterAndVerseStr.match(/^(\d+):(\d+)-(\d+):(\d+)$/);
      if (chapterRangeMatch) {
        const [, startChapter, startVerse] = chapterRangeMatch;
        newChapter = parseInt(startChapter, 10);
        newVerse = parseInt(startVerse, 10);
      } else {
        // Обробка посилань в межах однієї глави
        const verseQuery = parts.length > 2 ? parts[2] : null;
        newChapter = parseInt(parts[1], 10);

        if (verseQuery) {
          const parsedVerses = parseVersesFromQuery(verseQuery);
          if (parsedVerses.length > 0) {
            setHighlightedVerses(parsedVerses);
            newVerse = parsedVerses[0];
          }
        }
      }
    }

    setChapter(newChapter);
    setVerse(newVerse);
  };

  const value = {
    bookKey,
    chapter,
    verse,
    testament,
    highlightedVerses,
    navId,
    navSource,
    navigateTo,
  };

  return <BibleContext.Provider value={value}>{children}</BibleContext.Provider>;
};
