// src/utils/parseVersesFromQuery.js

export const parseVersesFromQuery = query => {
  const verses = new Set();
  const parts = query.split(",").map(part => part.trim());

  parts.forEach(part => {
    if (part.includes("-")) {
      // Обробка діапазону (наприклад, "1-5")
      const [start, end] = part.split("-").map(Number);
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = start; i <= end; i++) {
          verses.add(i);
        }
      }
    } else {
      // Обробка одного вірша (наприклад, "3")
      const verseNumber = Number(part);
      if (!isNaN(verseNumber)) {
        verses.add(verseNumber);
      }
    }
  });

  return Array.from(verses).sort((a, b) => a - b);
};
