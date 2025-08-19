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
// 3. ПОВНИЙ ШАБЛОН (JSON)
// Це приклад, який повністю відповідає всім правилам, що ми встановили.
// =========================================================================

export const ContentTemplate = {
  id: "nehemiah-3-rebuilding",
  title: "Неемія 3: Відбудова Стін Єрусалиму – Кожен на Своєму Місці",
  shortTitle: "Неемія 3",
  book: "Неемія",
  bookInternalKey: "nehemiah",
  chapter: "3",
  verses: "Неемії 3:1-32",
  date: "2025-07-22",
  author: "Живі Брати",
  duration: "60-90 хв",
  tags: [
    "Неемія",
    "відбудова",
    "єдність",
    "служіння",
    "різноманіття",
    "організація",
    "Божа рука",
    "протидія",
    "церква",
    "Божа воля",
  ],
  description:
    "У [bold:Неемії 3] ми стаємо свідками дивовижного процесу відбудови стін Єрусалиму. Цей розділ – не просто сухий перелік імен і брам, це [bold:свідчення Божої дії] через об'єднаний народ, де кожен, від первосвященника до торговця, від молодих дівчат до мешканців далеких міст, знаходить своє місце у спільній праці. Ми побачимо, як Божа справа мотивує до єдності, жертовності та організованості, незважаючи на особисті інтереси та протидію.",
  sections: [
    {
      type: "section-group",
      title: "1. Вступ та Основні Спостереження",
      sections: [
        {
          type: "text",
          content: [
            "Розділ 3 книги Неемії – це унікальний фрагмент, який на перший погляд може здатися просто списком імен і географічних точок. Однак, при уважному вивченні, він розкриває глибокі уроки про [bold:спільне служіння, організацію та Божу руку], яка діє через різноманітних людей.",
            "Ми обговорили важливість особистого вивчення тексту перед тим, як занурюватися в обговорення. Це допомагає помітити ключові аспекти:",
          ],
        },
        {
          type: "list-cards",
          title: "Ключові Спостереження в Неемії 3",
          cards: [
            {
              title: "Ключове Слово",
              content:
                "Найчастіше згадуване слово: [bold:«будували / відбудовували»]. Це чітко фокусує нас на центральній темі – фізичній відбудові стіни.",
              emoji: "🔨",
            },
            {
              title: "Відсутність Теології",
              content:
                "У тексті відсутні явні молитви, проповіді чи глибокі духовні розмови. Розділ зосереджений виключно на практичних діях.",
              emoji: "📖",
            },
            {
              title: "Індивідуальна Робота",
              content:
                "Кожен займався своєю частиною роботи, часто [bold:«навпроти свого дому»]. Це вказівка на організованість та особисту зацікавленість.",
              emoji: "🏡",
            },
            {
              title: "Географічний Напрямок",
              content:
                "Будівництво відбувалося проти годинникової стрілки, починаючи з Овечої брами і завершуючись біля неї ж. Це свідчить про системний підхід.",
              emoji: "🧭",
            },
            {
              title: "Повторювана Фраза",
              content:
                "Фраза [bold:«двері, замки, засуви»] повторюється п'ять разів (вірші 3, 6, 13, 14, 15), підкреслюючи важливість безпеки та завершеності.",
              emoji: "🔒",
            },
          ],
        },
        {
          type: "highlight-box",
          title: "Центральна Ідея Розділу",
          content:
            "Розділ 3 книги Неемії показує, як Бог використовує об'єднаний народ, де кожен знаходить своє місце у спільній праці, навіть якщо це здається сухим переліком імен. Головний герой — Бог, що діє через Свій народ.",
          emoji: "💡",
        },
      ],
    },
    {
      type: "section-group",
      title: "2. Різноманіття Будівельників:",
      sections: [
        {
          type: "text",
          subtitle: "Дошка Пошани",
          content: [
            "Список тих, хто брав участь у відбудові, є надзвичайно різноманітним, що підкреслює ідею, що [bold:Бог використовує кожного], незалежно від його статусу, професії чи здібностей. Це справжня «Дошка Пошани».",
          ],
        },
        {
          type: "list",
          title: "Хто ці будівельники?",
          items: [
            "[bold:Первосвященник та священники]: Показує їхню готовність до фізичної праці.",
            "[bold:Золотарі, торговці, виробники парфумів]: Люди, які зазвичай займаються тонкими ремеслами або комерцією, також долучилися до важкої фізичної праці.",
            "[bold:Мешканці Гівіону та Міцпи]: З інших місцевостей, що свідчить про ширшу участь.",
            "[bold:Дівчата (з дочками, вірш 12)]: Їхня участь свідчить про залученість усього народу, незалежно від статі та фізичної сили.",
            "[bold:Намісник Заріччя]: Підкреслює участь людей з-поза Єрусалиму, з-під перської юрисдикції.",
            "[bold:Храмові слуги та Левіти]: Ті, хто відповідав за духовні справи, також брали участь у відбудові.",
          ],
        },
        {
          type: "text",
          content: [
            "[bold:Висновок:] Ці люди будували не тому, що були професіоналами, а тому, що [bold:Бог діяв через них]. Це показує, що Бог використовує різних людей для Своєї справи.",
          ],
        },
        {
          type: "highlight-box",
          title: "Овеча брама: Символізм та Значення",
          content:
            "[bold:Овеча брама] була ключовим входом для жертовних овець до храму, тому її відбудову розпочали первосвященник Еліяшів та інші священики. Її освячення підкреслює глибоке релігійне значення, а її символізм, як «воріт», що ведуть до Храму, нагадує про Ісуса Христа, [bold:«Агнця Божого»], що є початком і кінцем нашої вічної надії.",
        },
        {
          type: "diagram",
          title: "Різноманіття Учасників Відбудови (Приклад)",
          description:
            "Ця діаграма візуалізує різноманіття соціальних груп та професій, що брали участь у відбудові стін Єрусалиму, показуючи, що кожен мав своє місце у Божій справі, а кожен сегмент представляє [bold:умовну частку] їхньої участі.",
          chartType: "pie",
          chartData: {
            labels: [
              "Священники та Левіти",
              "Золотарі та Виробники Парфумів",
              "Торговці та Купці",
              "Мешканці Інших Міст (Гівіон, Міцпа)",
              "Начальники та Урядовці",
              "Жінки (з дочками)",
              "Храмові Слуги та Охоронці",
            ],
            datasets: [
              { label: "Кількість учасників", data: [20, 15, 15, 25, 10, 5, 10], borderWidth: 1 },
            ],
          },
        },
        {
          type: "question-prompt",
          question:
            "Які уроки ми можемо винести для себе з різноманітності будівельників Єрусалиму?",
          answer:
            "Кожен, незалежно від походження чи здібностей, має своє місце в Божій справі. Бог використовує різних людей для Своїх цілей, і це є свідченням Його суверенітету та благодаті.",
        },
      ],
    },
    {
      type: "section-group",
      title: "3. Особливості Відбудови та Важливі Моменти",
      sections: [
        {
          type: "description-with-image",
          content: [
            "Розділ 3 детально описує кожен етап будівництва, відзначаючи як індивідуальні внески, так і загальну організацію процесу.",
            "Порядок та логічність розподілу праці: Додаткова мотивація",
            "Неемія продемонстрував винятковий організаторський талант, розподіливши роботу на [bold:42 ділянки], зокрема дозволивши багатьом людям працювати [bold:біля своїх домівок], а священиків – ділянки біля храму. Такий підхід не тільки економив час, але й значно підвищив особисту зацікавленість та мотивацію працівників. Це показує, що ефективне керівництво та взаємодія, а також можливість служити там, де є особиста зацікавленість, є ключовими для успішного виконання Божої справи.",
          ],
          imageUrl: "https://i.imgur.com/G20aW8X.jpg",
          altText: "Карта відбудови Єрусалиму часів Неемії",
          caption: "Схема розподілу праці під час відбудови стін Єрусалиму",
          imagePosition: "right",
        },
        {
          type: "timeline",
          title: "Ключові Етапи Відбудови Стін",
          events: [
            {
              title: "Початок біля Овечої брами",
              description:
                "Відбудова розпочалася первосвященником Еліяшівом та іншими священиками біля Овечої брами, яка мала символічне значення.",
            },
            {
              title: "Робота 'навпроти свого дому'",
              description:
                "Багато учасників працювали на ділянках, розташованих безпосередньо навпроти їхніх домівок, що свідчить про особисту зацікавленість та ефективну логістику.",
            },
            {
              title: "Участь різноманітних груп",
              description:
                "Від золотарів і торговців до жінок та мешканців інших міст — усі долучилися до спільної справи.",
            },
            {
              title: "Протидія ворогів",
              description:
                "Навіть під час будівництва виникала протидія та насмішки з боку ворогів, що, однак, не зупинило роботу.",
            },
            {
              title: "Завершення",
              description:
                "Стіна була повністю відбудована, включаючи встановлення дверей, замків та засувів, що підкреслює завершеність та безпеку.",
            },
          ],
        },
      ],
    },
    {
      type: "section-group",
      title: "4. Контраст у Служінні та Мотивація",
      sections: [
        {
          type: "contrast-section",
          title: "Контраст у Служінні: Активність та Бездіяльність",
          items: [
            {
              heading: "Ті, хто працювали: Відданість Божій Справі",
              content:
                "Більшість народу, незалежно від свого статусу чи професії, активно долучилася до відбудови стін. Вони працювали 'навпроти свого дому' або на призначених ділянках, демонструючи єдність, жертовність та особисту зацікавленість у Божій справі. Їхня праця була відповіддю на Божу руку, що діяла через Неемію. Неемія виділяє тих, хто працював 'на другій ділянці' або 'ревним', як Барух [verse:nehemiah:3:20:(Неемії 3:20)], демонструючи, що Бог пам'ятає кожну працю, виконану з відданістю. Це підкреслює, що кожен християнин покликаний робити все, що в його силах, не очікуючи лише мінімальної участі, адже в Божій справі є місце для всіх.",
              emoji: "💪",
              type: "positive",
            },
            {
              heading: "Ті, хто не працювали: Приклад Вельмож Такої",
              content:
                "На жаль, не всі виявили таку ж відданість. Зокрема, [bold:«вельможі з Такої не захотіли працювати для свого Господа»] [verse:nehemiah:3:5:(Неемії 3:5)]. Це яскравий контраст, що підкреслює, що навіть у великій Божій справі можуть бути ті, хто відмовляється від участі, можливо, через гордість, лінь або зв'язки з ворогами, як Товія [verse:nehemiah:6:17-19:(Неемії 6:17-19)].",
              emoji: "❌",
              type: "negative",
            },
          ],
        },
        {
          type: "text",
          title: "Мотивація та Причини Єдності",
          content: [
            "Були також особливі випадки та повторення, які варті уваги:",
            "[bold:Особливо відзначені працівники:] Деякі особи були виділені за обсяг виконаної роботи (наприклад, Шалум). Були також ті, хто працював у кількох місцях або над кількома секціями (наприклад, мешканці Такої в 5-му та 27-му віршах, Меремот в 4-му та 21-му, Біннуй у 24-му та Хананій 30-му).",
          ],
        },
        {
          type: "list",
          title: "Причини Єдності, Жертовності та Організованості",
          heading: "Чому ж такий різноманітний народ об'єднався для такої важкої справи?",
          items: [
            "[bold:Мотивація від Неемії:] Неемія розповів народу про [bold:«доброзичливу Божу руку»], яка була над ним, і про підтримку царя [verse:nehemiah:2:(Неемія 2)].",
            "[bold:Реакція народу:] Народ відгукнувся на цю звістку, усвідомивши, що це не просто людська ініціатива, а справа, яку робить Бог. Вони прийняли це твердження і вирішили взятися за будівництво: [bold:«Давайте візьмемося за будівництво»] [verse:nehemiah:2:18:(Неемія 2:18)].",
            "[bold:Особиста зацікавленість:] Частковою мотивацією могла бути й особиста зацікавленість – відбудова власного дому та міста, де вони живуть, забезпечуючи захист.",
          ],
        },
      ],
    },
    {
      type: "section-group",
      title: "5. Висновки",
      sections: [
        {
          type: "text",
          title: "Реакція Ворогів",
          content: [
            "Навіть Божа справа стикається з протидією. Вороги (зокрема Санваллат) відреагували на будівництво гнівом та насмішками. Це може бути гірше за прямий напад, оскільки принижує і демотивує.",
          ],
        },
        {
          type: "list-cards",
          title: "Практичне Застосування та Значення для Церкви",
          cards: [
            {
              title: "Аналогія з Церквою",
              content:
                "Список різноманітних людей, об'єднаних однією Божою справою, нагадує структуру та функціонування сучасної церкви. Незважаючи на відмінності, всі об'єднані Христом та Його справою.",
              emoji: "🤝",
            },
            {
              title: "Бог – головний герой",
              content:
                "Головним героєм книги Неемії є не сам Неемія, а Бог, який діє через Свій народ.",
              emoji: "👑",
            },
            {
              title: "Мотивація Божої справи",
              content:
                "Божа справа завжди мотивує до єдності, жертовності та організованості серед Божого народу. Однак, як показує приклад вельмож Такої, не всі захочуть брати участь.",
              emoji: "💡",
            },
            {
              title: "«Хто я в списку?»",
              content:
                "Це ключове питання для кожного з нас. Якщо в часи Неемії Бог відбудовував Єрусалим, то сьогодні Його головною справою є будівництво Своєї Церкви та спасіння людей. Це відбувається через Його народ.",
              emoji: "❓",
            },
            {
              title: "Практична духовність",
              content:
                "Будівництво стін Єрусалиму було фізичною, «недуховною» роботою. Це нагадує, що багато практичних справ у церкві (розставляння стільців, приготування кави тощо) є частиною Божої роботи і мають духовну цінність.",
              emoji: "🛠️",
            },
            {
              title: "Місце для кожного",
              content:
                "Кожен, хто є Божим, має своє місце у Божій справі, незалежно від віку, статі, професії чи здібностей.",
              emoji: "🙌",
            },
          ],
        },
        {
          type: "list-cards",
          title: "Надія на Майбутнє: Новий Єрусалим",
          cards: [
            {
              title: "Виконання Божих Обіцянок",
              content:
                "Відбудова Єрусалиму є частиною ідентичності Божого обраного народу і символом Божої турботи та благословення. Це було виконанням давніх обіцянок Бога, зокрема: [verse:jeremiah:31:38:Єремії 31:38] - Пророцтво про відбудову Єрусалиму [bold:«від башти Хананаїла»]. [verse:zechariah:14:10:Захарії 14:10] - Пророцтво про Єрусалим, який [bold:«стане високим і пробуватиме на місці своєму»].",
              emoji: "📜",
            },
            {
              title: "Мотивація до Праці",
              content:
                "Євреї часів Неемії знали про ці обіцянки. Розуміння того, що Бог виконує Своє слово, зміцнювало їхню віру та мотивувало до праці. Їхні дії були відповіддю на Божу обітницю. Люди хотіли приєднатися до цієї Божої роботи, навіть якщо Бог міг би зробити це Сам.",
              emoji: "🌟",
            },
            {
              title: "Контраст з Новим Єрусалимом",
              content:
                "Цікавий контраст з [verse:revelation:21:25:Об'явлення 21:25]: [bold:«брами його зачинятись не будуть у день, бо там ночі не буде»]. Це протиставлення до того, як євреї будували стіни та ставили «двері, замки, засуви» для захисту. Цей контраст підкреслює надію на майбутнє, де не буде потреби у захисті від гріха, зла та небезпек. Це метафора повного виконання Божих обіцянок, де все буде відкрито, бо не буде потреби щось зачиняти.",
              emoji: "🌅",
            },
          ],
        },
        {
          type: "text",
          title: "Молитва",
          content: [
            "Обговорення завершилося спільною молитвою подяки за Боже Слово та Його обіцянки. Учасники просили Бога використовувати їх у Його справі – будівництві Церкви, спасінні людей, зміцненні віруючих. Молилися за мотивацію, єдність та жертовність у служінні, усвідомлюючи, що Бог може все зробити Сам, але надає людям честь бути Його інструментом. Також молилися за Україну, військових та мир.",
          ],
        },
      ],
    },
    {
      type: "section-group",
      title: "Питання для закріплення",
      sections: [
        {
          type: "text",
          content: ["Щоб краще закріпити матеріал, поміркуйте над наступними питаннями:"],
        },
        {
          type: "quiz",
          id: "nehemiah3-quiz-1",
          question: "Яке ключове слово найчастіше згадується в Неемії 3?",
          options: [
            {
              text: "Молилися",
              isCorrect: false,
              rationale: "Розділ 3 зосереджений на практичних діях, а не на молитвах.",
            },
            {
              text: "Будували / Відбудовували",
              isCorrect: true,
              rationale: "Саме це слово підкреслює центральну тему відбудови стіни.",
            },
            {
              text: "Зміцнювали",
              isCorrect: false,
              rationale: "Хоча стіни зміцнювалися, це не є найчастішим словом.",
            },
          ],
          hint: "Згадайте основну дію, описану в розділі.",
        },
        {
          type: "quiz",
          id: "nehemiah3-quiz-2",
          question: "Яка група людей, згадана в Неемії 3, відмовилася працювати для Господа?",
          options: [
            {
              text: "Священники",
              isCorrect: false,
              rationale: "Священники активно брали участь у відбудові Овечої брами.",
            },
            {
              text: "Золотарі",
              isCorrect: false,
              rationale: "Золотарі були серед різноманітних учасників відбудови.",
            },
            {
              text: "Вельможі з Такої",
              isCorrect: true,
              rationale:
                "Неемія 3:5 прямо вказує на те, що 'вельможі з Такої не захотіли працювати для свого Господа'.",
            },
          ],
          hint: "Згадайте контраст між тими, хто працював, і тими, хто ні.",
        },
        {
          type: "quiz",
          id: "nehemiah3-quiz-3",
          question:
            "Яке значення має відбудова Овечої брами, яку розпочали первосвященник та священники?",
          options: [
            {
              text: "Вона була найменшою і найлегшою для відбудови.",
              isCorrect: false,
              rationale: "Значення брами було не в її розмірі чи складності, а в її символізмі.",
            },
            {
              text: "Вона була ключовим входом для жертовних овець до храму, символізуючи Ісуса Христа.",
              isCorrect: true,
              rationale:
                "Овеча брама мала глибоке релігійне значення та символізм, пов'язаний з жертвою.",
            },
            {
              text: "Це була найближча брама до їхніх домівок.",
              isCorrect: false,
              rationale:
                "Хоча 'навпроти свого дому' було принципом, для священників важливішим був символізм.",
            },
          ],
          hint: "Подумайте про її функцію та зв'язок з храмом.",
        },
        {
          type: "quiz",
          id: "nehemiah3-quiz-4",
          question:
            "Який контраст з [verse:revelation:21:25:Об'явлення 21:25] (брами Нового Єрусалиму не зачиняються) підкреслюється в уроці?",
          options: [
            {
              text: "Контраст між фізичною працею та духовною роботою.",
              isCorrect: false,
              rationale: "Урок підкреслює, що фізична праця також має духовну цінність.",
            },
            {
              text: "Контраст між необхідністю захисту в Єрусалимі часів Неемії та відсутністю потреби в захисті в Новому Єрусалимі.",
              isCorrect: true,
              rationale:
                "Саме так. Будівництво замків та засувів у Неемії контрастує з відсутністю потреби в них у Новому Єрусалимі, де немає зла.",
            },
            {
              text: "Контраст між єврейським народом та іншими народами.",
              isCorrect: false,
              rationle:
                "Хоча це згадується, основний контраст стосується безпеки та потреби в ній.",
            },
          ],
          hint: "Згадайте, для чого будували 'двері, замки, засуви' в Неемії.",
        },
      ],
    },
  ],
};
