// contexts/BibleContext.js
import React, { createContext, useState } from "react";
import { BOOK_CATEGORIES } from "../components/BibleMenu/constants";

export const BibleContext = createContext();

export const BibleProvider = ({ children }) => {
  const [bookKey, setBookKey] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [verse, setVerse] = useState(null);
  const [testament, setTestament] = useState(null);
  const [highlightedVerses, setHighlightedVerses] = useState(null);
  const [navId, setNavId] = useState(null);
  // Новий стан для зберігання джерела навігації
  const [navSource, setNavSource] = useState(null);

  // Оновлена функція navigateTo, яка приймає navSource
  const navigateTo = (bookRef, source = "menu") => {
    const cleanRef = bookRef.replace(/[[\]]/g, "");
    const match = cleanRef.match(/^([a-z0-9_]+)(?::([\d:,-]+))?$/);

    if (!match) {
      console.error(`Невірний формат посилання: ${bookRef}`);
      return;
    }

    const [, newBookKey, refStr] = match;

    const newTestament = BOOK_CATEGORIES.find(cat =>
      cat.items.some(book => book.internalKey === newBookKey)
    )?.testament;

    if (!newTestament) {
      console.error(`Книгу з ключем "${newBookKey}" не знайдено.`);
      return;
    }

    setBookKey(newBookKey);
    setTestament(newTestament);
    setHighlightedVerses(null);

    let startChapter = 1;
    let startVerse = 1;
    let versesToHighlight = [];

    if (!refStr) {
      setChapter(1);
      setVerse(1);
    } else if (refStr.includes(",")) {
      const [chapterStr, ...verseParts] = refStr.split(":");
      startChapter = parseInt(chapterStr, 10);
      versesToHighlight = verseParts
        .join(":")
        .split(",")
        .map(v => parseInt(v.trim(), 10));
      if (versesToHighlight.length > 0) startVerse = versesToHighlight[0];
    } else if (refStr.includes("-")) {
      const [startRef, endRef] = refStr.split("-");
      const [startChapterStr, startVerseStr] = startRef.split(":").map(Number);

      startChapter = startChapterStr;
      if (startVerseStr) startVerse = startVerseStr;

      const [endChapterStr, endVerseStr] = endRef.split(":").map(Number);
      if (endChapterStr && startChapter === endChapterStr) {
        for (let i = startVerse; i <= endVerseStr; i++) {
          versesToHighlight.push(i);
        }
      }
    } else {
      const [chapterStr, verseStr] = refStr.split(":");
      startChapter = parseInt(chapterStr, 10);
      if (verseStr) startVerse = parseInt(verseStr, 10);
    }

    setChapter(startChapter);
    setVerse(startVerse);

    if (versesToHighlight.length > 0) {
      setHighlightedVerses(versesToHighlight);
    }

    setNavId(Date.now() + Math.random());
    setNavSource(source); // Зберігаємо джерело навігації
  };

  const value = {
    bookKey,
    chapter,
    verse,
    testament,
    highlightedVerses,
    navId,
    navSource, // Додаємо новий стан до контексту
    navigateTo,
  };

  return <BibleContext.Provider value={value}>{children}</BibleContext.Provider>;
};
