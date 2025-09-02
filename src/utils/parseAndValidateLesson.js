// src/utils/parseAndValidateContent.js
import { parseTags } from "./tagParser";
import { LessonSchema } from "./validationSchemas";

const deepParseTags = data => {
  if (typeof data === "string") {
    return parseTags(data);
  }

  if (Array.isArray(data)) {
    return data.map(item => deepParseTags(item));
  }

  if (typeof data === "object" && data !== null) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        // ✅ Ось виправлена логіка
        // Ми ігноруємо ключі, що визначають тип, а не обробляємо їх як теги
        if (key === "type" || key === "chartType") {
          newData[key] = data[key];
        } else {
          newData[key] = deepParseTags(data[key]);
        }
      }
    }
    return newData;
  }

  return data;
};

export const parseAndValidateContent = lessonData => {
  try {
    const validatedData = LessonSchema.parse(lessonData);
    const parsedLesson = deepParseTags(validatedData);
    return { success: true, lesson: parsedLesson, error: null };
  } catch (error) {
    console.error("Помилка валідації уроку:", error.message);
    return { success: false, lesson: null, error: error.message };
  }
};
