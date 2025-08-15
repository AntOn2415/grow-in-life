// lesson_template.js
// =========================================================================
// 1. ОПИС СХЕМИ ВАЛІДАЦІЇ (zod)
// Тут описано структуру, яка підтверджує всі наші правила та типи даних.
// =========================================================================

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
  type: z.string(),
  title: TokenizedText.optional(),
});

// ✅ ОНОВЛЕНО: Додано 'subtitle' до TextSectionSchema
const TextSectionSchema = BaseSectionSchema.extend({
  type: z.literal("text"),
  subtitle: TokenizedText.optional(),
  content: z.array(TokenizedText),
});

// ✅ ОНОВЛЕНО: Додано 'heading' до ListSectionSchema
const ListSectionSchema = BaseSectionSchema.extend({
  type: z.literal("list"),
  heading: TokenizedText.optional(),
  items: z.array(TokenizedText),
});

// Схема для відображення картками
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

const ListCardsSchema = BaseSectionSchema.extend({
  type: z.literal("list-cards"),
  cards: z.array(
    z.object({
      title: TokenizedText.optional(),
      content: TokenizedText,
      emoji: z.string().optional(),
    })
  ),
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
  description: TokenizedText,
  sections: z.array(
    z.union([
      TextSectionSchema,
      ListCardsSectionSchema,
      ListSectionSchema,
      HighlightBoxSchema,
      QuestionPromptSchema,
      ListCardsSchema,
      TimelineSchema,
      RevealCardsSchema,
      QuizSchema,
      DiagramSchema,
      ImagePlaceholderSchema,
      DescriptionWithImageSchema,
      ContrastSectionSchema,
    ])
  ),
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

// =========================================================================

// src/utils/parserAndValidateLesson.js

// ✅ ОНОВЛЕНО: Додаємо 'items' до списку TOKENIZABLE_KEYS
// src/utils/parserAndValidateLesson.js

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

// =========================================================================
// 3. ПОВНИЙ ШАБЛОН УРОКУ (JSON)
// Це приклад уроку, який повністю відповідає всім правилам, що ми встановили.
// =========================================================================

const lessonTemplate = {
  id: "full-lesson-template",
  title: "Урок-Шаблон: Повний Приклад Оформлення",
  shortTitle: "Шаблон",
  book: "Неемія",
  bookInternalKey: "nehemiah",
  chapter: "2",
  verses: "2:1-20",
  date: "2025-07-31",
  author: "Живі Брати",
  duration: "60-90 хв",
  tags: ["шаблон", "приклад", "інструкція", "тестування"],
  description: [
    "Цей JSON-файл є вичерпним шаблоном, що демонструє правильне оформлення всіх типів секцій та внутрішніх правил форматування тексту.",
  ],
  sections: [
    {
      type: "text",
      title: "Основний контент уроку",
      subtitle: "Додаткова інформація та роз'яснення",
      content: [
        "Цей розділ використовується для розміщення основного тексту уроку. Він підтримує різні типи форматування, такі як [bold:жирний шрифт], [italic:курсив], а також [link:https://example.com:зовнішні посилання] та посилання на біблійні вірші, як-от [verse:genesis:1:1:(Бут. 1:1)].",
        "Кожен окремий рядок у масиві `content` буде відображатися як новий абзац. Це дозволяє структурувати текст і додавати цитати, наприклад [quote:Тут може бути важлива цитата або висновок].",
      ],
    },
    {
      type: "list",
      heading: "Перелік ключових пунктів",
      items: [
        "[bold:Пункт 1]: Опис першого пункту, що підкреслює його важливість.",
        "[bold:Пункт 2]: Розгорнутий опис другого пункту з додатковими деталями.",
        "[bold:Пункт 3]: Коротке зведення або висновок з третього пункту, що містить [verse:john:3:16:(Ів. 3:16)].",
        "Пункт 4: Опис, який не потребує виділення жирним шрифтом.",
      ],
    },
    {
      type: "highlight-box",
      title: "2. Секція 'highlight-box'",
      content:
        "Цей блок виділяє важливу думку або ключову ідею. Поле `content` завжди є одним рядком (`TokenizedText`).",
      emoji: "💡",
    },
    {
      type: "question-prompt",
      question: "3. Секція 'question-prompt': Запитання для роздумів?",
      answer: "Відповідь тут, і вона також може містити [bold:форматування].",
      emoji: "🤔",
    },
    {
      type: "list-cards",
      title: "4. Секція 'list-cards'",
      cards: [
        {
          title: "Картка 1: Назва",
          content:
            "Тут опис картки. Він може бути розгорнутим і містити посилання на [verse:proverbs:3:5:(Прип. 3:5)] а якщо посилань може бути перелік в скобках то оформлювати ([verse:nehemiah:5:(Неем. 5)]; [verse:proverbs:3:5:Прип. 3:5]) .",
          emoji: "👍",
        },
        {
          title: "Картка 2: Ще одна картка",
          content: "Всі поля тут є `TokenizedText`, тому підтримують форматування.",
          emoji: "✨",
        },
      ],
    },
    {
      type: "timeline",
      title: "5. Секція 'timeline'",
      events: [
        {
          year: "722 до Р.Х.",
          title: "Подія 1: Перший етап",
          description: "Опис події. Тут може бути текст, що займає кілька абзаців або рядків.",
          verses: ["[verse:2_kings:17:23-34:(2 Цар. 17:23–34)]"],
        },
        {
          title: "Подія 2: Другий етап",
          description:
            "Ця подія не прив'язана до конкретного року, але має свій опис, що також підтримує [bold:форматування].",
        },
      ],
    },
    {
      type: "reveal-cards",
      title: "6. Секція 'reveal-cards'",
      cards: [
        {
          id: "template-card-1",
          emoji: "🔒",
          title: "Картка з прихованим контентом",
          content: "Натисніть на картку, щоб розкрити цей текст.",
        },
      ],
    },
    {
      type: "quiz",
      id: "template-quiz-1",
      question: "7. Секція 'quiz': Це тестове запитання?",
      options: [
        {
          text: "Варіант 1 (правильний)",
          isCorrect: true,
          rationale: "Це пояснення, чому відповідь правильна.",
        },
        {
          text: "Варіант 2 (неправильний)",
          isCorrect: false,
          rationale: "Це пояснення, чому відповідь неправильна.",
        },
      ],
      hint: "Ця підказка допоможе знайти правильну відповідь.",
    },
    {
      type: "diagram",
      title: "8. Секція 'diagram'",
      description:
        "Цей розділ ілюструє, як можна додати діаграму. Ви можете використовувати різні типи графіків.",
      chartType: "bar",
      chartData: {
        labels: ["Перший", "Другий", "Третій"],
        datasets: [
          {
            label: "Приклад даних",
            data: [12, 19, 3],
          },
        ],
      },
      chartOptions: {},
    },
    {
      type: "image-placeholder",
      title: "9. Секція 'image-placeholder'",
      description: "Тут ви можете вставити одне зображення, що ілюструє ідею.",
      imageUrl: "https://images.unsplash.com/photo-1540879948083-d2d46e300302",
      altText: "Приклад зображення",
      caption:
        "Це підпис під зображенням, який також підтримує форматування, наприклад [bold:жирний шрифт].",
    },
    {
      type: "description-with-image",
      title: "10. Секція 'description-with-image'",
      content: [
        "Ця секція поєднує текст та зображення в одному блоці. Ви можете розмістити зображення зліва або справа від тексту.",
        " Тут ми демонструємо, що `content` — це масив, що дозволяє створювати кілька абзаців.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      altText: "Приклад з текстом",
      imagePosition: "right",
    },
    {
      type: "contrast-section",
      title: "11. Секція 'contrast-section'",
      items: [
        {
          heading: "Позитив",
          content: "Єдність, жертовність, справедливість [verse:nehemiah:5:(Неем. 5)]",
          emoji: "➕",
          type: "positive",
        },
        {
          heading: "Негатив",
          content: "Відсотки, утиски, байдужість",
          emoji: "➖",
          type: "negative",
        },
        {
          heading: "Нейтральний 1",
          content: "Фактичний фон без оцінки",
          type: "neutral1",
        },
        {
          heading: "Нейтральний 2",
          content: "Джерела даних і посилання",
          type: "neutral2",
        },
      ],
    },
  ],
};

// =========================================================================
// 4. ТЕСТОВИЙ БЛОК ДЛЯ ПЕРЕВІРКИ
// =========================================================================

const result = parseAndValidateLesson(lessonTemplate);

if (result.success) {
  console.log("✅ Валідація пройшла успішно!");
} else {
  console.error("❌ Помилка валідації!");
  console.error("Деталі помилки:", result.error);
}

// =========================================================================
// 5. шаблон назв книг для оформлювання посилань
// =========================================================================
// src/components/BibleMenu/constants.js
// Дані про книги Біблії для навігації
export const BOOK_CATEGORIES = [
  {
    id: "old-testament-books",
    label: "Книги Старого Заповіту",
    testament: "old-testament",
    items: [
      { full: "Буття", short: "Бут", internalKey: "genesis", chapters: 50 },
      { full: "Вихід", short: "Вих", internalKey: "exodus", chapters: 40 },
      { full: "Левит", short: "Лев", internalKey: "leviticus", chapters: 27 },
      { full: "Числа", short: "Чис", internalKey: "numbers", chapters: 36 },
      { full: "Повторення Закону", short: "Втор", internalKey: "deuteronomy", chapters: 34 },
      { full: "Ісуса Навина", short: "Нав", internalKey: "joshua", chapters: 24 },
      { full: "Суддів", short: "Суд", internalKey: "judges", chapters: 21 },
      { full: "Рут", short: "Рут", internalKey: "ruth", chapters: 4 },
      { full: "1 Самуїлова", short: "1Сам", internalKey: "1_samuel", chapters: 31 },
      { full: "2 Самуїлова", short: "2Сам", internalKey: "2_samuel", chapters: 24 },
      { full: "1 Царів", short: "1Цар", internalKey: "1_kings", chapters: 22 },
      { full: "2 Царів", short: "2Цар", internalKey: "2_kings", chapters: 25 },
      { full: "1 Хронік", short: "1Хр", internalKey: "1_chronicles", chapters: 29 },
      { full: "2 Хронік", short: "2Хр", internalKey: "2_chronicles", chapters: 36 },
      { full: "Ездри", short: "Езд", internalKey: "ezra", chapters: 10 },
      { full: "Неемії", short: "Неем", internalKey: "nehemiah", chapters: 13 },
      { full: "Естер", short: "Ест", internalKey: "esther", chapters: 10 },
      { full: "Йова", short: "Йов", internalKey: "job", chapters: 42 },
      { full: "Псалми", short: "Пс", internalKey: "psalms", chapters: 150 },
      { full: "Приповісті", short: "Пр", internalKey: "proverbs", chapters: 31 },
      { full: "Екклезіяст", short: "Ек", internalKey: "ecclesiastes", chapters: 12 },
      { full: "Пісня над Піснями", short: "Пісн", internalKey: "song_of_solomon", chapters: 8 },
      { full: "Ісаї", short: "Іс", internalKey: "isaiah", chapters: 66 },
      { full: "Єремії", short: "Єр", internalKey: "jeremiah", chapters: 52 },
      { full: "Плач Єремії", short: "Плач", internalKey: "lamentations", chapters: 5 },
      { full: "Єзекіїля", short: "Єз", internalKey: "ezekiel", chapters: 48 },
      { full: "Даниїла", short: "Дан", internalKey: "daniel", chapters: 12 },
      { full: "Осії", short: "Ос", internalKey: "hosea", chapters: 14 },
      { full: "Йоіла", short: "Йоіл", internalKey: "joel", chapters: 3 },
      { full: "Амоса", short: "Ам", internalKey: "amos", chapters: 9 },
      { full: "Овдія", short: "Ов", internalKey: "obadiah", chapters: 1 },
      { full: "Йони", short: "Йона", internalKey: "jonah", chapters: 4 },
      { full: "Михея", short: "Мих", internalKey: "micah", chapters: 7 },
      { full: "Наума", short: "Наум", internalKey: "nahum", chapters: 3 },
      { full: "Авакума", short: "Авак", internalKey: "habakkuk", chapters: 3 },
      { full: "Софонії", short: "Соф", internalKey: "zephaniah", chapters: 3 },
      { full: "Огія", short: "Ог", internalKey: "haggai", chapters: 2 },
      { full: "Захарії", short: "Зах", internalKey: "zechariah", chapters: 14 },
      { full: "Малахії", short: "Мал", internalKey: "malachi", chapters: 4 },
    ],
  },
  {
    id: "new-testament-books",
    label: "Книги Нового Заповіту",
    testament: "new-testament",
    items: [
      { full: "Матвія", short: "Мт", internalKey: "matthew", chapters: 28 },
      { full: "Марка", short: "Мк", internalKey: "mark", chapters: 16 },
      { full: "Луки", short: "Лк", internalKey: "luke", chapters: 24 },
      { full: "Івана", short: "Ів", internalKey: "john", chapters: 21 },
      { full: "Дії", short: "Дії", internalKey: "acts", chapters: 28 },
      { full: "Римлян", short: "Рим", internalKey: "romans", chapters: 16 },
      { full: "1 Коринтян", short: "1Кор", internalKey: "1_corinthians", chapters: 16 },
      { full: "2 Коринтян", short: "2Кор", internalKey: "2_corinthians", chapters: 13 },
      { full: "Галатів", short: "Гал", internalKey: "galatians", chapters: 6 },
      { full: "Ефесян", short: "Еф", internalKey: "ephesians", chapters: 6 },
      { full: "Филипʼян", short: "Флп", internalKey: "philippians", chapters: 4 },
      { full: "Колосян", short: "Кол", internalKey: "colossians", chapters: 4 },
      { full: "1 Солунян", short: "1Сол", internalKey: "1_thessalonians", chapters: 5 },
      { full: "2 Солунян", short: "2Сол", internalKey: "2_thessalonians", chapters: 3 },
      { full: "1 Тимофія", short: "1Тим", internalKey: "1_timothy", chapters: 6 },
      { full: "2 Тимофія", short: "2Тим", internalKey: "2_timothy", chapters: 4 },
      { full: "Тита", short: "Тит", internalKey: "titus", chapters: 3 },
      { full: "Филимона", short: "Флм", internalKey: "philemon", chapters: 1 },
      { full: "Євреїв", short: "Євр", internalKey: "hebrews", chapters: 13 },
      { full: "Якова", short: "Як", internalKey: "james", chapters: 5 },
      { full: "1 Петра", short: "1Пет", internalKey: "1_peter", chapters: 5 },
      { full: "2 Петра", short: "2Пет", internalKey: "2_peter", chapters: 3 },
      { full: "1 Івана", short: "1Ів", internalKey: "1_john", chapters: 5 },
      { full: "2 Івана", short: "2Ів", internalKey: "2_john", chapters: 1 },
      { full: "3 Івана", short: "3Ів", internalKey: "3_john", chapters: 1 },
      { full: "Юди", short: "Юд", internalKey: "jude", chapters: 1 },
      { full: "Обʼявлення", short: "Об", internalKey: "revelation", chapters: 22 },
    ],
  },
];
