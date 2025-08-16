// src/utils/parserAndValidateLesson.js
import { parseTags } from "./tagParser";
import { LessonSchema } from "./validationSchemas";

// ✅ ОНОВЛЕНО: Додано 'heading' і 'subtitle' до списку TOKENIZABLE_KEYS
const TOKENIZABLE_KEYS = [
  "title",
  "shortTitle",
  "description",
  "content",
  "question",
  "answer",
  "text",
  "heading", // ✅ Додано
  "caption",
  "rationale",
  "verses",
  "items",
  "subtitle", // ✅ Додано
];

const deepParseTags = (data, parentKey = null) => {
  if (typeof data === "string") {
    if (TOKENIZABLE_KEYS.includes(parentKey)) {
      const parsedResult = parseTags(data);
      if (Array.isArray(parsedResult)) {
        return parsedResult;
      }
      return [parsedResult];
    }
    return data;
  }
  if (Array.isArray(data)) {
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

export const parseAndValidateLesson = lessonData => {
  try {
    const validatedData = LessonSchema.parse(lessonData);
    const parsedLesson = deepParseTags(validatedData, "lesson");
    return { success: true, lesson: parsedLesson, error: null };
  } catch (error) {
    console.error("Помилка валідації уроку:", error.message);
    return { success: false, lesson: null, error: error.message };
  }
};
