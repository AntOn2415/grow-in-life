import React, { createContext, useState, useMemo, useCallback, useEffect } from "react";
import { BOOK_CATEGORIES } from "../components/BibleMenu/constants";
import { parseVersesFromQuery } from "../utils/parseVersesFromQuery";

export const BibleContext = createContext();

// Допоміжна функція для визначення Заповіту
const getTestamentFromBookKey = bookKey => {
  for (const category of BOOK_CATEGORIES) {
    if (category.items.some(book => book.internalKey === bookKey)) {
      return category.testament;
    }
  }
  return null;
};

// Допоміжна функція для ініціалізації стану з localStorage
const getInitialNavState = () => {
  const lastBookKey = localStorage.getItem("lastBookKey");
  const lastChapter = localStorage.getItem("lastChapter");
  const lastVerse = localStorage.getItem("lastVerse");

  if (lastBookKey && lastChapter) {
    return {
      bookKey: lastBookKey,
      chapter: parseInt(lastChapter, 10),
      verse: lastVerse ? parseInt(lastVerse, 10) : 1,
      testament: getTestamentFromBookKey(lastBookKey),
      highlightedVerses: null,
      navId: Date.now(),
      navSource: "initial",
    };
  }
  return {
    bookKey: null,
    chapter: null,
    verse: null,
    testament: null,
    highlightedVerses: null,
    navId: null,
    navSource: null,
  };
};

export const BibleProvider = ({ children }) => {
  const [navState, setNavState] = useState(getInitialNavState);

  const { bookKey, chapter, verse, testament, highlightedVerses, navId, navSource } = navState;

  // Використовуємо useCallback для стабілізації функції navigateTo
  const navigateTo = useCallback((bookRef, source = "text") => {
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

    let newChapter = 1;
    let newVerse = 1;
    let newHighlightedVerses = null;

    if (parts.length > 1) {
      const chapterAndVerseStr = parts.slice(1).join(":");
      const chapterRangeMatch = chapterAndVerseStr.match(/^(\d+):(\d+)-(\d+):(\d+)$/);

      if (chapterRangeMatch) {
        const [, startChapter, startVerse] = chapterRangeMatch;
        newChapter = parseInt(startChapter, 10);
        newVerse = parseInt(startVerse, 10);
      } else {
        const verseQuery = parts.length > 2 ? parts[2] : null;
        newChapter = parseInt(parts[1], 10);

        if (verseQuery) {
          const parsedVerses = parseVersesFromQuery(verseQuery);
          if (parsedVerses.length > 0) {
            newHighlightedVerses = parsedVerses;
            newVerse = parsedVerses[0];
          }
        }
      }
    }

    setNavState({
      bookKey: newBookKey,
      chapter: newChapter,
      verse: newVerse,
      testament: newTestament,
      highlightedVerses: newHighlightedVerses,
      navId: Date.now() + Math.random(),
      navSource: source,
    });
  }, []);

  // Зберігаємо стан в localStorage, коли він змінюється
  useEffect(() => {
    if (bookKey) {
      localStorage.setItem("lastBookKey", bookKey);
      localStorage.setItem("lastChapter", chapter.toString());
      localStorage.setItem("lastVerse", verse.toString());
    }
  }, [bookKey, chapter, verse]);

  const value = useMemo(
    () => ({
      bookKey,
      chapter,
      verse,
      testament,
      highlightedVerses,
      navId,
      navSource,
      navigateTo,
    }),
    [bookKey, chapter, verse, testament, highlightedVerses, navId, navSource, navigateTo]
  );

  return <BibleContext.Provider value={value}>{children}</BibleContext.Provider>;
};
