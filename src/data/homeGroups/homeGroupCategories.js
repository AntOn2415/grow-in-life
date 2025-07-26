// src/data/homeGroups/homeGroupCategories.js

export const homeGroupCategories = [
  {
    id: "old-testament-books",
    label: "Книги Старого Заповіту",
    type: "books",
    items: [
      { full: "Буття", short: "Бут", internalKey: "genesis" },
      { full: "Вихід", short: "Вих", internalKey: "exodus" },
      { full: "Левит", short: "Лев", internalKey: "leviticus" },
      { full: "Числа", short: "Чис", internalKey: "numbers" },
      { full: "Повторення Закону", short: "Втор", internalKey: "deuteronomy" },
      { full: "Ісуса Навина", short: "Нав", internalKey: "joshua" },
      { full: "Суддів", short: "Суд", internalKey: "judges" },
      { full: "Рут", short: "Рут", internalKey: "ruth" },
      { full: "1 Самуїлова", short: "1Сам", internalKey: "firstSamuel" },
      { full: "2 Самуїлова", short: "2Сам", internalKey: "secondSamuel" },
      { full: "1 Царів", short: "1Цар", internalKey: "firstKings" },
      { full: "2 Царів", short: "2Цар", internalKey: "secondKings" },
      { full: "1 Хронік", short: "1Хр", internalKey: "firstChronicles" },
      { full: "2 Хронік", short: "2Хр", internalKey: "secondChronicles" },
      { full: "Ездри", short: "Езд", internalKey: "ezra" },
      { full: "Неемії", short: "Неем", internalKey: "nehemiah" },
      { full: "Естер", short: "Ест", internalKey: "esther" },
      { full: "Йова", short: "Йов", internalKey: "job" },
      { full: "Псалми", short: "Пс", internalKey: "psalms" },
      { full: "Приповісті", short: "Пр", internalKey: "proverbs" },
      { full: "Екклезіяст", short: "Ек", internalKey: "ecclesiastes" },
      { full: "Пісня над Піснями", short: "Пісн", internalKey: "songOfSolomon" },
      { full: "Ісаї", short: "Іс", internalKey: "isaiah" },
      { full: "Єремії", short: "Єр", internalKey: "jeremiah" },
      { full: "Плач Єремії", short: "Плач", internalKey: "lamentations" },
      { full: "Єзекіїля", short: "Єз", internalKey: "ezekiel" },
      { full: "Даниїла", short: "Дан", internalKey: "daniel" },
      { full: "Осії", short: "Ос", internalKey: "hosea" },
      { full: "Йоіла", short: "Йоіл", internalKey: "joel" },
      { full: "Амоса", short: "Ам", internalKey: "amos" },
      { full: "Овдія", short: "Ов", internalKey: "obadiah" },
      { full: "Йони", short: "Йона", internalKey: "jonah" },
      { full: "Михея", short: "Мих", internalKey: "micah" },
      { full: "Наума", short: "Наум", internalKey: "nahum" },
      { full: "Авакума", short: "Авак", internalKey: "habakkuk" },
      { full: "Софонії", short: "Соф", internalKey: "zephaniah" },
      { full: "Огія", short: "Ог", internalKey: "haggai" },
      { full: "Захарії", short: "Зах", internalKey: "zechariah" },
      { full: "Малахії", short: "Мал", internalKey: "malachi" },
    ],
  },
  {
    id: "new-testament-books",
    label: "Книги Нового Заповіту",
    type: "books",
    items: [
      { full: "Матвія", short: "Мт", internalKey: "matthew" },
      { full: "Марка", short: "Мк", internalKey: "mark" },
      { full: "Луки", short: "Лк", internalKey: "luke" },
      { full: "Івана", short: "Ів", internalKey: "john" },
      { full: "Дії", short: "Дії", internalKey: "acts" },
      { full: "Римлян", short: "Рим", internalKey: "romans" },
      { full: "1 Коринтян", short: "1Кор", internalKey: "firstCorinthians" },
      { full: "2 Коринтян", short: "2Кор", internalKey: "secondCorinthians" },
      { full: "Галатів", short: "Гал", internalKey: "galatians" },
      { full: "Ефесян", short: "Еф", internalKey: "ephesians" },
      { full: "Филипʼян", short: "Флп", internalKey: "philippians" },
      { full: "Колосян", short: "Кол", internalKey: "colossians" },
      { full: "1 Солунян", short: "1Сол", internalKey: "firstThessalonians" },
      { full: "2 Солунян", short: "2Сол", internalKey: "secondThessalonians" },
      { full: "1 Тимофія", short: "1Тим", internalKey: "firstTimothy" },
      { full: "2 Тимофія", short: "2Тим", internalKey: "secondTimothy" },
      { full: "Тита", short: "Тит", internalKey: "titus" },
      { full: "Филимона", short: "Флм", internalKey: "philemon" },
      { full: "Євреїв", short: "Євр", internalKey: "hebrews" },
      { full: "Якова", short: "Як", internalKey: "james" },
      { full: "1 Петра", short: "1Пет", internalKey: "firstPeter" },
      { full: "2 Петра", short: "2Пет", internalKey: "secondPeter" },
      { full: "1 Івана", short: "1Ів", internalKey: "firstJohn" },
      { full: "2 Івана", short: "2Ів", internalKey: "secondJohn" },
      { full: "3 Івана", short: "3Ів", internalKey: "thirdJohn" },
      { full: "Юди", short: "Юд", internalKey: "jude" },
      { full: "Обʼявлення", short: "Об", internalKey: "revelation" },
    ],
  },
  {
    id: "thematic",
    label: "Тематичні Уроки", // Можливо, трохи змінити назву для HomeGroups
    type: "thematic",
    // Тут можна додати список тем, якщо вони специфічні для Home Groups
    // items: [ { full: "Сімейні стосунки", internalKey: "family" }, ... ]
  },
  {
    id: "special",
    label: "Особливі Події та Курси", // Можливо, трохи змінити назву для HomeGroups
    type: "special",
    // Тут можна додати список особливих подій/курсів
    // items: [ { full: "Курс по Євангелію", internalKey: "gospelCourse" }, ... ]
  },
];

// Експортуємо окремі списки книг для зручності використання в інших компонентах
export const oldTestamentBooksList = homeGroupCategories.find(
  cat => cat.id === "old-testament-books"
).items;
export const newTestamentBooksList = homeGroupCategories.find(
  cat => cat.id === "new-testament-books"
).items;

// Додатковий експорт, якщо вам потрібен об'єднаний список усіх книг Біблії
export const allBibleBooksList = [...oldTestamentBooksList, ...newTestamentBooksList];
