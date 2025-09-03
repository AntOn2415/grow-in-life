// lesson_template.js
// =========================================================================
// 1. ОПИС СХЕМИ ВАЛІДАЦІЇ (zod)
// Тут описано структуру, яка підтверджує всі наші правила та типи даних.
// =========================================================================

// src/utils/validationSchemas.js

import { z } from "zod";

// Оновлена схема для звичайного тексту, щоб вона була універсальною
const TokenizedText = z.lazy(() =>
  z.union([
    z.string(),
    z.array(
      z.union([
        z.string(),
        z.object({ type: z.literal("bold"), content: TokenizedText }),
        z.object({ type: z.literal("italic"), content: TokenizedText }),
        z.object({
          type: z.literal("bible-link"),
          bibleRef: z.string(),
          content: z.string(),
        }),
        z.object({
          type: z.literal("link"),
          url: z.string(),
          content: TokenizedText,
        }),
        z.object({
          type: z.literal("image"),
          url: z.string(),
          alt: z.string(),
          caption: TokenizedText,
        }),
        z.object({ type: z.literal("highlight"), content: TokenizedText }),
        z.object({ type: z.literal("quote"), content: TokenizedText }),
      ])
    ),
  ])
);

// Базова схема для всіх секцій
const BaseSectionSchema = z.object({
  title: TokenizedText.optional(),
});

const TextSectionSchema = BaseSectionSchema.extend({
  type: z.literal("text"),
  subtitle: TokenizedText.optional(),
  content: z.array(TokenizedText),
});

const ListSectionSchema = BaseSectionSchema.extend({
  type: z.literal("list"),
  items: z.array(TokenizedText),
});

const ListCardsSectionSchema = BaseSectionSchema.extend({
  type: z.literal("list-cards"),
  cards: z.array(
    z.object({
      title: TokenizedText,
      content: TokenizedText,
      emoji: z.string().optional(),
    })
  ),
});

const HighlightBoxSchema = BaseSectionSchema.extend({
  type: z.literal("highlight-box"),
  content: TokenizedText,
  emoji: z.string().optional(),
});

const QuestionPromptSchema = BaseSectionSchema.extend({
  type: z.literal("question-prompt"),
  question: TokenizedText,
  answer: TokenizedText.optional(),
  emoji: z.string().optional(),
});

const TimelineSchema = BaseSectionSchema.extend({
  type: z.literal("timeline"),
  events: z.array(
    z.object({
      year: z.string().optional(),
      title: TokenizedText,
      description: TokenizedText.optional(),
      verses: z.array(TokenizedText).optional(),
    })
  ),
});

const RevealCardsSchema = BaseSectionSchema.extend({
  type: z.literal("reveal-cards"),
  cards: z.array(
    z.object({
      id: z.string(),
      emoji: z.string().optional(),
      title: TokenizedText.optional(),
      content: TokenizedText,
    })
  ),
});

const QuizSchema = BaseSectionSchema.extend({
  type: z.literal("quiz"),
  id: z.string(),
  question: TokenizedText,
  options: z.array(
    z.object({
      text: TokenizedText,
      isCorrect: z.boolean(),
      rationale: TokenizedText.optional(),
    })
  ),
  hint: TokenizedText.optional(),
});

const DiagramSchema = BaseSectionSchema.extend({
  type: z.literal("diagram"),
  chartType: z.string(),
  description: TokenizedText.optional(),
  chartData: z.any(),
  chartOptions: z.any(),
});

const ImagePlaceholderSchema = BaseSectionSchema.extend({
  type: z.literal("image-placeholder"),
  description: TokenizedText.optional(),
  imageUrl: z.string(),
  altText: z.string().optional(),
  caption: TokenizedText.optional(),
});

const DescriptionWithImageSchema = BaseSectionSchema.extend({
  type: z.literal("description-with-image"),
  content: z.array(TokenizedText),
  imageUrl: z.string(),
  altText: z.string().optional(),
  caption: TokenizedText.optional(),
  imagePosition: z.string().optional(),
});

const ContrastSectionSchema = BaseSectionSchema.extend({
  type: z.literal("contrast-section"),
  items: z.array(
    z.object({
      heading: TokenizedText,
      content: TokenizedText,
      emoji: z.string().optional(),
      type: z.string(),
    })
  ),
});

// ✅ НОВА РЕКУРСИВНА СХЕМА
const LessonSectionSchema = z.lazy(() =>
  z.union([
    TextSectionSchema.extend({ type: z.literal("text") }),
    ListCardsSectionSchema.extend({ type: z.literal("list-cards") }),
    ListSectionSchema.extend({ type: z.literal("list") }),
    HighlightBoxSchema.extend({ type: z.literal("highlight-box") }),
    QuestionPromptSchema.extend({ type: z.literal("question-prompt") }),
    TimelineSchema.extend({ type: z.literal("timeline") }),
    RevealCardsSchema.extend({ type: z.literal("reveal-cards") }),
    QuizSchema.extend({ type: z.literal("quiz") }),
    DiagramSchema.extend({ type: z.literal("diagram") }),
    ImagePlaceholderSchema.extend({ type: z.literal("image-placeholder") }),
    DescriptionWithImageSchema.extend({ type: z.literal("description-with-image") }),
    ContrastSectionSchema.extend({ type: z.literal("contrast-section") }),
    // Додаємо новий тип для групування
    z.object({
      type: z.literal("section-group"),
      title: TokenizedText,
      sections: z.array(LessonSectionSchema), // Рекурсія тут!
    }),
  ])
);

// Оновлюємо загальну схему уроку
export const LessonSchema = z.object({
  id: z.string(),
  title: TokenizedText,
  shortTitle: z.string(),
  book: z.string(),
  bookInternalKey: z.string(),
  chapter: z.string(),
  verses: z.string(),
  date: z.string(),
  author: z.string(),
  duration: z.string(),
  tags: z.array(z.string()),
  description: TokenizedText.optional(),
  sections: z.array(LessonSectionSchema), // Використовуємо нову рекурсивну схему
});

// =========================================================================
// 2. ФУНКЦІЇ ДЛЯ ПАРСИНГУ ТА ВАЛІДАЦІЇ
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

// src/utils/parseAndValidateContent.js

//import { parseTags } from "./tagParser";
//import { LessonSchema } from "./validationSchemas";

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

// =========================================================================
// 3. ШАБЛОН (JSON)
// Це приклад, який повністю відповідає всім правилам, що ми встановили.
// =========================================================================

//   {
//   "id": "nested-lesson-full-example",
//   "title": "Урок: Приклад Глибокої Вкладеності з усіма секціями",
//   "shortTitle": "Шаблон Вкладеності",
//   "book": "Псалми",
//   "bookInternalKey": "psalms",
//   "chapter": "1",
//   "verses": "1:1-6",
//   "date": "2025-08-16",
//   "author": "Живі Брати",
//   "duration": "45-60 хв",
//   "tags": ["зразок", "вкладеність", "тестування", "ієрархія"],
//   "description": "Цей JSON-файл є прикладом уроку з глибокою вкладеністю, який демонструє, як усі типи секцій працюють у новій структурі. Кожен елемент містить текст, що вказує на очікувану HTML-семантику.",
//   "sections": [
//     {
//       "type": "section-group",
//       "title": "1. Основна частина (Очікуваний HTML: H2)",
//       "sections": [
//         {
//           "type": "text",
//           "title": "Основний контент уроку",
//           "subtitle": "Додаткова інформація та роз'яснення",
//           "content": [
//             "Цей розділ використовується для розміщення основного тексту уроку. Він підтримує різні типи форматування, такі як [bold:жирний шрифт], [italic:курсив], а також [link:https://example.com:зовнішні посилання] та посилання на біблійні вірші, як-от [verse:genesis:1:1:(Бут. 1:1)].",
//             "Кожен окремий рядок у масиві `content` буде відображатися як новий абзац. Це дозволяє структурувати текст і додавати цитати, наприклад [quote:Тут може бути важлива цитата або висновок]."
//           ]
//         },
//         {
//           "type": "text",
//           "title": "1.1. Базові елементи (Очікуваний HTML: H3)",
//           "content": [
//             "Цей підрозділ показує базові елементи, що працюють з вкладеністю.",
//             "Тут ми маємо приклад звичайного тексту, що повинен бути відрендерений коректно як [bold:окремий абзац <p>].",
//             "[quote:Мудрість будує дім, і розум утверджує його. - Прип. 24:3]"
//           ]
//         },
//         {
//           "type": "list",
//           "title": "1.2. Вкладений список (Очікуваний HTML: H3)",
//           "items": [
//             "Пункт 1: Перший рівень вкладеності.",
//             "[bold:Пункт 2]: Жирний текст у списку. Очікуваний HTML: <ul>, <li>.",
//             "Пункт 3: Ще один пункт."
//           ]
//         },
//         {
//           "type": "highlight-box",
//           "title": "2. Секція 'highlight-box'",
//           "content": "Цей блок виділяє важливу думку або ключову ідею. Поле `content` завжди є одним рядком (`TokenizedText`).",
//           "emoji": "💡"
//         },
//         {
//           "type": "question-prompt",
//           "question": "1.4. Запитання для роздумів? (Очікуваний HTML: H3)",
//           "answer": "Відповідь на це питання. Очікуваний HTML: <p>."
//         }
//       ]
//     },
//     {
//       "type": "section-group",
//       "title": "2. Інтерактивні елементи (Очікуваний HTML: H2)",
//       "sections": [
//         {
//           "type": "text",
//           "title": "Основний контент уроку",
//           "subtitle": "Додаткова інформація та роз'яснення",
//           "content": [
//             "Цей розділ використовується для розміщення основного тексту уроку. Він підтримує різні типи форматування, такі як [bold:жирний шрифт], [italic:курсив], а також [link:https://example.com:зовнішні посилання] та посилання на біблійні вірші, як-от [verse:genesis:1:1:(Бут. 1:1)].",
//             "Кожен окремий рядок у масиві `content` буде відображатися як новий абзац. Це дозволяє структурувати текст і додавати цитати, наприклад [quote:Тут може бути важлива цитата або висновок]."
//           ]
//         },
//         {
//           "type": "section-group",
//           "title": "2.1. Вкладені картки (Очікуваний HTML: H3)",
//           "sections": [
//             {
//               "type": "text",
//               "content": [
//                 "Цей підрозділ показує, як різні типи карток працюють всередині `section-group`. Очікуваний HTML: <p>."
//               ]
//             },
//             {
//               "type": "list-cards",
//               "title": "2.1.1. Список карток (Очікуваний HTML: H4)",
//               "cards": [
//                 {
//                   "title": "Картка 1 (Очікуваний HTML: H5)",
//                   "content": "Ця картка знаходиться на другому рівні вкладеності. Вона повинна мати заголовок H5. Очікуваний HTML: <p>.",
//                   "emoji": "📝"
//                 },
//                 {
//                   "title": "Картка 2 (Очікуваний HTML: H5)",
//                   "content": "Інша картка для перевірки. Очікуваний HTML: <p>.",
//                   "emoji": "✨"
//                 }
//               ]
//             },
//             {
//               "type": "reveal-cards",
//               "title": "2.1.2. Картка, що розкривається (Очікуваний HTML: H4)",
//               "cards": [
//                 {
//                   "id": "nested-reveal-card",
//                   "emoji": "🕵️",
//                   "title": "Заголовок картки, що розкривається (Очікуваний HTML: H5)",
//                   "content": "Контент, що розкривається, знаходиться на другому рівні вкладеності. Очікуваний HTML: <p>."
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "type": "quiz",
//           "id": "nested-quiz-1",
//           "question": "2.2. Питання для вікторини? (Очікуваний HTML: H3)",
//           "options": [
//             {
//               "text": "Варіант А (правильний). Очікуваний HTML: <p> всередині обгортки.",
//               "isCorrect": true,
//               "rationale": "Це пояснення."
//             },
//             {
//               "text": "Варіант Б (неправильний). Очікуваний HTML: <p>.",
//               "isCorrect": false,
//               "rationale": "Це пояснення."
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "type": "section-group",
//       "title": "3. Візуальні елементи (Очікуваний HTML: H2)",
//       "sections": [
//         {
//           "type": "diagram",
//           "title": "3.1. Діаграма (Очікуваний HTML: H3)",
//           "description": "Діаграма, що відрендерена на другому рівні вкладеності. Очікуваний HTML: <p>.",
//           "chartType": "pie",
//           "chartData": {
//             "labels": ["Перший", "Другий", "Третій"],
//             "datasets": [
//               {
//                 "label": "Дані",
//                 "data": [5, 15, 10],
//                 "borderWidth": 1
//               }
//             ]
//           }
//         },
//         {
//           "type": "description-with-image",
//           "title": "3.2. Опис із зображенням (Очікуваний HTML: H3)",
//           "content": [
//             "Ця секція поєднує текст та зображення в одному блоці. Очікуваний HTML: <p>."
//           ],
//           "imageUrl": "https://images.unsplash.com/photo-1540879948083-d2d46e300302",
//           "altText": "Приклад зображення",
//           "imagePosition": "right"
//         },
//         {
//           "type": "image-placeholder",
//           "title": "3.3. Зображення-заповнювач (Очікуваний HTML: H3)",
//           "description": "Просте зображення на другому рівні вкладеності. Очікуваний HTML: <p>.",
//           "imageUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
//           "altText": "Приклад зображення",
//           "caption": "Це підпис під зображенням. Очікуваний HTML: <figcaption>."
//         }
//       ]
//     },
//     {
//       "type": "section-group",
//       "title": "4. Додаткові елементи (Очікуваний HTML: H2)",
//       "sections": [
//         {
//           "type": "contrast-section",
//           "title": "4.1. Секція 'контрасту' (Очікуваний HTML: H3)",
//           "items": [
//             {
//               "heading": "Позитив (Очікуваний HTML: H4)",
//               "content": "Тут може бути позитивна думка. Очікуваний HTML: <p>.",
//               "emoji": "➕",
//               "type": "positive"
//             },
//             {
//               "heading": "Негатив (Очікуваний HTML: H4)",
//               "content": "Тут може бути негативна думка. Очікуваний HTML: <p>.",
//               "emoji": "➖",
//               "type": "negative"
//             },
// {
//             "heading": "Нейтральний 1",
//           "content": "Фактичний фон без оцінки",
//           "type": "neutral1",
//         },
//         {
//           "heading": "Нейтральний 2",
//           "content": "Джерела даних і посилання",
//           "type": "neutral2",
//         },
//           ]
//         },
//         {
//           "type": "timeline",
//           "title": "4.2. Хронологія (Очікуваний HTML: H3)",
//           "events": [
//             {
//               "year": "Рік 1",
//               "title": "Перша подія (Очікуваний HTML: H4)",
//               "description": "Короткий опис першої події. Очікуваний HTML: <p>."
//             },
//             {
//               "year": "Рік 2",
//               "title": "Друга подія (Очікуваний HTML: H4)",
//               "description": "Короткий опис другої події. Очікуваний HTML: <p>."
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
//   ],
// };
