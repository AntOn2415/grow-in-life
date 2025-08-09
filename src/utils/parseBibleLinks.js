// src/utils/parseBibleLinks.js
import React from "react";
import BibleLink from "../components/BibleLink/BibleLink";

// Оновлений регулярний вираз для пошуку посилань: [bookKey:ref:displayedText]
// Тепер він коректно обробляє посилання з двокрапками, тире та комами
const bibleRefRegex = /\[([a-z0-9_]+(?::[\d:,-]+)?):([^\]]+)]/g;

export function parseBibleLinks(text) {
  if (typeof text !== "string") {
    return text;
  }

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = bibleRefRegex.exec(text)) !== null) {
    const fullMatch = match[0];
    const bibleRef = `[${match[1]}]`; // "[1_corinthians:1:15,18,20]"
    const displayedText = match[2]; // "1 Кор. 1:15, 18, 20"

    const textBefore = text.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push(textBefore);
    }

    parts.push(
      <BibleLink key={match.index} bibleRef={bibleRef}>
        {displayedText}
      </BibleLink>
    );

    lastIndex = match.index + fullMatch.length;
  }

  const textAfter = text.substring(lastIndex);
  if (textAfter) {
    parts.push(textAfter);
  }

  return parts;
}
