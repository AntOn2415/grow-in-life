// src/utils/parseAndValidateContent.js

import { parseTags } from "./tagParser";
import { LessonSchema } from "./validationSchemas";

const TOKENIZABLE_KEYS = [
  "title",
  "shortTitle",
  "description",
  "content",
  "question",
  "answer",
  "text",
  "heading",
  "caption",
  "rationale",
  "verses",
  "items",
  "subtitle",
  "description",
  "year",
];

const deepParseTags = (data, parentKey = null) => {
  if (typeof data === "string") {
    // Перевіряємо, чи поточний ключ повинен бути токенізований
    if (TOKENIZABLE_KEYS.includes(parentKey)) {
      const parsedResult = parseTags(data);
      // Забезпечуємо, що результат завжди є масивом, щоб уникнути помилок рендерингу
      if (Array.isArray(parsedResult)) {
        return parsedResult;
      }
      return [parsedResult];
    }
    return data;
  }
  if (Array.isArray(data)) {
    // Рекурсивно обробляємо кожен елемент масиву
    return data.map(item => deepParseTags(item, parentKey));
  }
  if (typeof data === "object" && data !== null) {
    const newData = {};
    for (const key in data) {
      newData[key] = deepParseTags(data[key], key);
    }
    return newData;
  }
  return data;
};

export const parseAndValidateContent = lessonData => {
  try {
    const validatedData = LessonSchema.parse(lessonData);
    const parsedLesson = deepParseTags(validatedData, "lesson");
    return { success: true, lesson: parsedLesson, error: null };
  } catch (error) {
    console.error("Помилка валідації уроку:", error.message);
    return { success: false, lesson: null, error: error.message };
  }
};
