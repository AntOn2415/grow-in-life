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
  "verses", // ✅ Цей ключ потрібно токенізувати!
];

const deepParseTags = (data, parentKey = null) => {
  if (typeof data === "string") {
    if (TOKENIZABLE_KEYS.includes(parentKey)) {
      return parseTags(data);
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
