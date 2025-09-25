// src/utils/validationSchemas.js

import { z } from "zod";

// Текст з тегами
const TokenizedText = z.lazy(() =>
  z.union([
    z.string(),
    z
      .array(
        z.union([
          z.string(),
          z.object({ type: z.literal("bold"), content: TokenizedText }),
          z.object({ type: z.literal("italic"), content: TokenizedText }),
          z.object({ type: z.literal("bible-link"), bibleRef: z.string(), content: z.string() }),
          z.object({ type: z.literal("link"), url: z.string(), content: TokenizedText }),
          z.object({
            type: z.literal("image"),
            url: z.string(),
            alt: z.string(),
            caption: TokenizedText,
          }),
          z.object({ type: z.literal("highlight"), content: TokenizedText }),
          z.object({ type: z.literal("quote"), content: TokenizedText }),
        ])
      )
      .default([]),
  ])
);

// Базова секція
const BaseSectionSchema = z.object({
  title: TokenizedText.optional(),
});

// Типи секцій
const TextSectionSchema = BaseSectionSchema.extend({
  type: z.literal("text"),
  subtitle: TokenizedText.optional(),
  content: z.array(TokenizedText).default([]),
});

const ListSectionSchema = BaseSectionSchema.extend({
  type: z.literal("list"),
  items: z.array(TokenizedText).default([]),
});

const ListCardsSectionSchema = BaseSectionSchema.extend({
  type: z.literal("list-cards"),
  cards: z
    .array(
      z.object({
        title: TokenizedText,
        content: TokenizedText,
        emoji: z.string().optional(),
      })
    )
    .default([]),
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
  events: z
    .array(
      z.object({
        year: z.string().optional(),
        title: TokenizedText,
        description: TokenizedText.optional(),
        verses: z.array(TokenizedText).default([]),
      })
    )
    .default([]),
});

const RevealCardsSchema = BaseSectionSchema.extend({
  type: z.literal("reveal-cards"),
  cards: z
    .array(
      z.object({
        id: z.string(),
        emoji: z.string().optional(),
        title: TokenizedText.optional(),
        content: TokenizedText,
      })
    )
    .default([]),
});

const QuizSchema = BaseSectionSchema.extend({
  type: z.literal("quiz"),
  id: z.string(),
  question: TokenizedText,
  options: z
    .array(
      z.object({
        text: TokenizedText,
        isCorrect: z.boolean(),
        rationale: TokenizedText.optional(),
      })
    )
    .default([]),
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
  content: z.array(TokenizedText).default([]),
  imageUrl: z.string(),
  altText: z.string().optional(),
  caption: TokenizedText.optional(),
  imagePosition: z.string().optional(),
});

const ContrastSectionSchema = BaseSectionSchema.extend({
  type: z.literal("contrast-section"),
  items: z
    .array(
      z.object({
        heading: TokenizedText,
        content: TokenizedText,
        emoji: z.string().optional(),
        type: z.string(),
      })
    )
    .default([]),
});

const TableSchema = BaseSectionSchema.extend({
  type: z.literal("table"),
  tableTitle: TokenizedText.optional(),
  headers: z.array(TokenizedText).default([]),
  rows: z.array(z.array(TokenizedText).default([])).default([]),
});

// Рекурсивна схема секцій
const LessonSectionSchema = z.lazy(() =>
  z.union([
    TextSectionSchema,
    ListSectionSchema,
    ListCardsSectionSchema,
    HighlightBoxSchema,
    QuestionPromptSchema,
    TimelineSchema,
    RevealCardsSchema,
    QuizSchema,
    DiagramSchema,
    ImagePlaceholderSchema,
    DescriptionWithImageSchema,
    ContrastSectionSchema,
    TableSchema,
    z.object({
      type: z.literal("section-group"),
      title: TokenizedText,
      sections: z.array(LessonSectionSchema).default([]),
    }),
  ])
);

// Основна схема уроку
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
  tags: z.array(z.string()).default([]),
  description: TokenizedText.optional(),
  sections: z.array(LessonSectionSchema).default([]), // ✅ завжди масив
});
