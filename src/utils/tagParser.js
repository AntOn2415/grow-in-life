// src/utils/tagParser.js

// Регулярні вирази для тегів
const BOLD_TAG = /\[bold:(.*?)]/;
const ITALIC_TAG = /\[italic:(.*?)]/;
const BIBLE_LINK_TAG = /\[verse:([a-z0-9_]+(?::[\d:,-]+)*):([^\]]+)]/;
const LINK_TAG = /\[link:([^:]+):([^\]]+)]/;
const IMAGE_TAG = /\[img:([^:]+):([^:]+):([^\]]+)]/;
const HIGHLIGHT_TAG = /\[highlight:(.*?)]/;
const QUOTE_TAG = /\[quote:(.*?)]/;

/**
 * Рекурсивно парсить текст, розбиваючи його на токени для форматування.
 * @param {string} text Рядок для обробки.
 * @returns {Array<string | object>} Масив токенів.
 */
export const parseTags = text => {
  if (typeof text !== "string") {
    return text;
  }

  // Виправлення: Створюємо новий об'єкт RegExp при кожному виклику,
  // щоб уникнути проблем із 'lastIndex' у рекурсії
  const ALL_TAGS_REGEX = new RegExp(
    `(${BOLD_TAG.source}|${ITALIC_TAG.source}|${BIBLE_LINK_TAG.source}|${LINK_TAG.source}|${IMAGE_TAG.source}|${HIGHLIGHT_TAG.source}|${QUOTE_TAG.source})`,
    "gi"
  );

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = ALL_TAGS_REGEX.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index);
    if (textBefore) {
      parts.push(textBefore);
    }

    const matchedText = match[0];
    let token = null;

    if (BOLD_TAG.test(matchedText)) {
      const content = matchedText.match(BOLD_TAG)[1];
      token = { type: "bold", content: parseTags(content) };
    } else if (ITALIC_TAG.test(matchedText)) {
      const content = matchedText.match(ITALIC_TAG)[1];
      token = { type: "italic", content: parseTags(content) };
    } else if (HIGHLIGHT_TAG.test(matchedText)) {
      const content = matchedText.match(HIGHLIGHT_TAG)[1];
      token = { type: "highlight", content: parseTags(content) };
    } else if (QUOTE_TAG.test(matchedText)) {
      const content = matchedText.match(QUOTE_TAG)[1];
      token = { type: "quote", content: parseTags(content) };
    } else if (BIBLE_LINK_TAG.test(matchedText)) {
      const linkMatch = matchedText.match(BIBLE_LINK_TAG);
      token = {
        type: "bible-link",
        bibleRef: linkMatch[1],
        content: linkMatch[2],
      };
    } else if (LINK_TAG.test(matchedText)) {
      const linkMatch = matchedText.match(LINK_TAG);
      token = {
        type: "link",
        url: linkMatch[1],
        content: parseTags(linkMatch[2]),
      };
    } else if (IMAGE_TAG.test(matchedText)) {
      const imageMatch = matchedText.match(IMAGE_TAG);
      token = {
        type: "image",
        url: imageMatch[1],
        alt: imageMatch[2],
        caption: parseTags(imageMatch[3]),
      };
    }

    if (token) {
      parts.push(token);
    }

    lastIndex = match.index + matchedText.length;
  }

  const textAfter = text.slice(lastIndex);
  if (textAfter) {
    parts.push(textAfter);
  }

  return parts;
};
