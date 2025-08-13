// src/utils/parseBibleLinks.js
import React from "react";
import BibleLink from "../components/BibleLink/BibleLink";

// Регулярка для формату [verse:bookKey:displayText]
const bibleRefRegex = /\[verse:([a-z0-9_]+(?::[\d:,-]+)*):([^\]]+)]/gi;

export function parseBibleLinks(text) {
  if (typeof text !== "string") return text;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = bibleRefRegex.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index);
    if (textBefore) parts.push(textBefore);

    parts.push(
      <BibleLink key={match.index} bibleRef={match[1]}>
        {match[2]}
      </BibleLink>
    );

    lastIndex = match.index + match[0].length;
  }

  const textAfter = text.slice(lastIndex);
  if (textAfter) parts.push(textAfter);

  return parts;
}
