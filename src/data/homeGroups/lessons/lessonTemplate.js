// lesson_template.js
// =========================================================================
// 1. ОПИС СХЕМИ ВАЛІДАЦІЇ (zod)
// Тут описано структуру, яка підтверджує всі наші правила та типи даних.
// =========================================================================

// Біблійне посилання: [verse:bibleRef:content]
// Приклад: [verse:matthew:5:14-16:(Матвія 5:14-16)]
//
// Парситься у:
// {
//   "type": "bible-link",
//   "bibleRef": "matthew:5:14-16",
//   "content": "(Матвія 5:14-16)"
// }
// посилання можуть бути і в такому формати [verse:matthew:22:37-39:(Матвія 22:37-39)] або [verse:isaiah:45:2,13:(Іс. 45:2, 13)] або [verse:nehemiah:8:(Неемії 8)]

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

// {
//   "id": "full-lesson-template",
//   "title": "Комплексний Урок: Тема та структура",
//   "shortTitle": "Комплексний Урок",
//   "book": "Приклад",
//   "bookInternalKey": "example",
//   "chapter": "1",
//   "verses": "1:1-20",
//   "date": "2025-12-01",
//   "author": "Команда Розробки",
//   "duration": "75 хв",
//   "tags": ["приклад", "структура", "дизайн", "шаблон"],
//   "description": "Це [bold:комплексний приклад уроку], який демонструє всі можливі типи секцій, інтерактивні елементи та формати, які ми розробили. Він слугує як остаточний шаблон для створення нових уроків.",
//   "sections": [
//     {
//       "type": "timeline",
//       "title": "Самостійна секція: Історична хронологія",
//       "events": [
//         {
//           "year": "1",
//           "title": "Подія 1",
//           "description": "Початковий етап розвитку подій.",
//           "verses": ["[verse:romans:8:(Римлян 8)]"]
//         },
//         {
//           "year": "2",
//           "title": "Подія 2",
//           "description": "Ключовий момент у хронології, що ілюструє принцип.",
//           "verses": [
//             "[verse:john:3:16:(Івана 3:16)]",
//             "[verse:psalms:23:1-3:(Псалом 23:1-3)]",
//             "[verse:isaiah:45:2,13,15:(Іс. 45:2, 13, 15)]"
//           ]
//         }
//       ]
//     },
//     {
//       "type": "section-group",
//       "title": "1. Вступ та Контекст",
//       "sections": [
//         {
//           "type": "text",
//           "title": "Основна ідея",
//           "content": [
//             "Цей розділ ілюструє, як [bold:ключова тема] уроку може бути представлена через вступний текст та інтерактивні елементи. Ми використаємо уривок з [verse:matthew:5:1-12:(Матвія 5:1-12)] для демонстрації."
//           ]
//         },
//         {
//           "type": "highlight-box",
//           "title": "Головна думка",
//           "content": "Головна ідея уроку зосереджена на [bold:центральному принципі] та його застосуванні в сучасному житті.",
//           "emoji": "💡"
//         },
//         {
//           "type": "question-prompt",
//           "question": "Які ваші перші асоціації з цією темою? Як вона впливає на ваше життя?",
//           "answer": "Ці питання спонукають до особистих роздумів та початку дискусії.",
//           "emoji": "🤔"
//         }
//       ]
//     },
//     {
//       "type": "section-group",
//       "title": "2. Детальний Розбір та Аналіз",
//       "sections": [
//         {
//           "type": "list-cards",
//           "title": "Ключові висновки з тексту",
//           "cards": [
//             {
//               "title": "Висновки",
//               "content": "Особистий досвід та його роль у розумінні Божого Слова.",
//               "emoji": "🙌"
//             },
//             {
//               "title": "Застосування",
//               "content": "Як перевести теорію у щоденну практику.",
//               "emoji": "🛠️"
//             }
//           ]
//         },
//         {
//           "type": "list",
//           "title": "Додаткові приклади",
//           "items": [
//             "Приклад 1: Звернення до [bold:визначних біблійних персонажів] [verse:nehemiah:3:5:(Неемія 3:5)].",
//             "Приклад 2: Аналіз ключових віршів [verse:nehemiah:8:10-12:(Неемія 8:10-12)] та [verse:psalms:19:8-10:(Псалом 19:8-10)]."
//           ]
//         },
//         {
//           "type": "table",
//           "title": "Таблиця для порівняння",
//           "tableTitle": "Таблиця ключових відмінностей",
//           "headers": ["Критерій", "Старий Заповіт", "Новий Заповіт"],
//           "rows": [
//             ["Фокус", "Закон і пророцтва", "Благодать і спасіння"],
//             ["Головна фігура", "Мойсей", "Ісус Христос"],
//             ["Принцип", "Виконання", "Віра"]
//           ]
//         },
//         {
//           "type": "image-placeholder",
//           "title": "Символічна ілюстрація",
//           "imageUrl": "https://i.imgur.com/G20aW8X.jpg",
//           "altText": "Руїни стародавнього міста",
//           "caption": "Це зображення символізує нашу тему"
//         },
//         {
//           "type": "description-with-image",
//           "title": "Ілюстративний приклад",
//           "content": [
//             "Тут ми можемо розмістити текст, який супроводжується зображенням. Це особливо корисно для візуального пояснення складних концепцій, карт чи схем. Зображення може бути розміщене зліва або справа від тексту, як це показано у цьому прикладі."
//           ],
//           "imageUrl": "https://i.imgur.com/G20aW8X.jpg",
//           "altText": "Карта відбудови Єрусалиму",
//           "caption": "Мапа Єрусалиму часів Неемії з позначенням брам",
//           "imagePosition": "left"
//         },
//         {
//           "type": "diagram",
//           "chartType": "pie",
//           "title": "Кругова діаграма",
//           "description": "Ця діаграма візуалізує [bold:умовний розподіл] основних аспектів теми, щоб дати загальне уявлення.",
//           "chartData": {
//             "labels": ["Віра", "Надія", "Любов", "Служіння"],
//             "datasets": [
//               {
//                 "label": "Відсоток",
//                 "data": [30, 25, 25, 20],
//                 "borderWidth": 1
//               }
//             ]
//           }
//         },
//         {
//           "type": "contrast-section",
//           "title": "Контрастні ідеї",
//           "items": [
//             {
//               "heading": "Позитивне трактування",
//               "content": "Тут ми бачимо, як істина приносить благословення та радість.",
//               "emoji": "✅",
//               "type": "positive"
//             },
//             {
//               "heading": "Негативне трактування",
//               "content": "Тут показано, які можуть бути наслідки відхилення від істини.",
//               "emoji": "❌",
//               "type": "negative"
//             },
//             {
//               "heading": "Нейтральна думка",
//               "content": "Аналіз історичних фактів без суб'єктивних оцінок.",
//               "type": "neutral1"
//             },
//             {
//               "heading": "Інший нейтральний факт",
//               "content": "Додаткова інформація для повного розуміння контексту.",
//               "type": "neutral2"
//             }
//           ]
//         },
//         {
//           "type": "timeline",
//           "title": "Історична хронологія",
//           "events": [
//             {
//               "year": "1",
//               "title": "Подія 1",
//               "description": "Початковий етап розвитку подій.",
//               "verses": ["[verse:romans:8:(Римлян 8)]"]
//             },
//             {
//               "year": "2",
//               "title": "Подія 2",
//               "description": "Ключовий момент у хронології, що ілюструє принцип.",
//               "verses": [
//                 "[verse:john:3:16:(Івана 3:16)]",
//                 "[verse:psalms:23:1-3:(Псалом 23:1-3)]",
//                 "[verse:isaiah:45:2,13,15:(Іс. 45:2, 13, 15)]"
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "type": "section-group",
//       "title": "3. Застосування та Закріплення",
//       "sections": [
//         {
//           "type": "list-cards",
//           "title": "Практичні поради",
//           "cards": [
//             {
//               "title": "Перший крок",
//               "content": "З чого почати застосовувати отримані знання.",
//               "emoji": "👣"
//             },
//             {
//               "title": "Другий крок",
//               "content": "Як підтримувати та поглиблювати своє розуміння.",
//               "emoji": "🌱"
//             }
//           ]
//         },
//         {
//           "type": "quiz",
//           "id": "final-quiz-1",
//           "question": "Що, згідно з уроком, є найважливішим у духовному зростанні?",
//           "options": [
//             {
//               "text": "Вивчення Біблії",
//               "isCorrect": true,
//               "rationale": "Саме так. Основою є постійне вивчення Божого Слова."
//             },
//             {
//               "text": "Відвідування церкви",
//               "isCorrect": false,
//               "rationale": "Це важливо, але не є найважливішим."
//             },
//             {
//               "text": "Молитва",
//               "isCorrect": false,
//               "rationale": "Молитва важлива, але без розуміння Слова Божого вона неповноцінна."
//             }
//           ]
//         },
//         {
//           "type": "text",
//           "title": "Заключне слово",
//           "content": [
//             "Наш урок показує, як глибоке розуміння [bold:Слова Божого] може привести до практичних змін у житті та служінні."
//           ]
//         }
//       ]
//     },
//     {
//       "type": "list",
//       "title": "Перелік усіх типів секцій",
//       "items": [
//         "section-group (група секцій)",
//         "text (текст)",
//         "highlight-box (виділений блок)",
//         "question-prompt (блок запитання)",
//         "list-cards (список карток)",
//         "list (звичайний список)",
//         "table (таблиця)",
//         "image-placeholder (просто зображення)",
//         "description-with-image (опис із зображенням)",
//         "diagram (діаграма)",
//         "contrast-section (секція порівняння)",
//         "timeline (часова шкала)",
//         "quiz (тест)"
//       ]
//     }
//   ]
// }
