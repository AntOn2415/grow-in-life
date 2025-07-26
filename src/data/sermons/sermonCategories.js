// src/data/sermons/sermonCategories.js

export const sermonCategories = [
  {
    id: "books",
    label: "По книгам Біблії",
    type: "books",
    items: [
      { full: "Матвія", short: "Мт", internalKey: "matthew" },
      { full: "Марка", short: "Мк", internalKey: "mark" },
      { full: "Луки", short: "Лк", internalKey: "luke" },
      { full: "Івана", short: "Ів", internalKey: "john" },
      { full: "Дії", short: "Дії", internalKey: "acts" },
      { full: "Римлян", short: "Рим", internalKey: "romans" },
      { full: "1 Коринтян", short: "1Кор", internalKey: "firstCorinthians" }, // Додано internalKey
      { full: "2 Коринтян", short: "2Кор", internalKey: "secondCorinthians" }, // Додано internalKey
      { full: "Галатів", short: "Гал", internalKey: "galatians" },
      { full: "Ефесян", short: "Еф", internalKey: "ephesians" },
      { full: "Филипʼян", short: "Флп", internalKey: "philippians" },
      { full: "Колосян", short: "Кол", internalKey: "colossians" },
      { full: "1 Солунян", short: "1Сол", internalKey: "firstThessalonians" }, // Додано internalKey
      { full: "2 Солунян", short: "2Сол", internalKey: "secondThessalonians" }, // Додано internalKey
      { full: "1 Тимофія", short: "1Тим", internalKey: "firstTimothy" }, // Додано internalKey
      { full: "2 Тимофія", short: "2Тим", internalKey: "secondTimothy" }, // Додано internalKey
      { full: "Тита", short: "Тит", internalKey: "titus" },
      { full: "Филимона", short: "Флм", internalKey: "philemon" },
      { full: "Євреїв", short: "Євр", internalKey: "hebrews" },
      { full: "Якова", short: "Як", internalKey: "james" },
      { full: "1 Петра", short: "1Пет", internalKey: "firstPeter" }, // Додано internalKey
      { full: "2 Петра", short: "2Пет", internalKey: "secondPeter" }, // Додано internalKey
      { full: "1 Івана", short: "1Ів", internalKey: "firstJohn" }, // Додано internalKey
      { full: "2 Івана", short: "2Ів", internalKey: "secondJohn" }, // Додано internalKey
      { full: "3 Івана", short: "3Ів", internalKey: "thirdJohn" }, // Додано internalKey
      { full: "Юди", short: "Юд", internalKey: "jude" },
      { full: "Обʼявлення", short: "Об", internalKey: "revelation" },
      {},
    ],
  },
  {
    id: "thematic",
    label: "Тематичні",
    type: "thematic",
  },
  {
    id: "special",
    label: "Особливі події",
    type: "special",
  },
];

export const ntBooksList = sermonCategories.find(cat => cat.id === "books").items;
