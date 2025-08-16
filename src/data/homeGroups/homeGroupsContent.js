// src/data/homeGroups/homeGroupsContent.js

// Тут ви будете імпортувати ваші файли уроків для домашніх груп.
// Наприклад:
// import { lessonGenesisCreation } from "./lessons/genesis/lessonGenesisCreation";
// import { lessonRomansJustification } from "./lessons/romans/lessonRomansJustification";
// import { lessonFamilyRelationships } from "./lessons/thematic/lessonFamilyRelationships";

export const homeGroupsContent = {
  // --- Книги Старого Заповіту ---
  genesis: [], // Буття
  exodus: [], // Вихід
  leviticus: [], // Левит
  numbers: [], // Числа
  deuteronomy: [], // Повторення Закону
  joshua: [], // Ісуса Навина
  judges: [], // Суддів
  ruth: [], // Рут
  firstSamuel: [], // 1 Самуїлова
  secondSamuel: [], // 2 Самуїлова
  firstKings: [], // 1 Царів
  secondKings: [], // 2 Царів
  firstChronicles: [], // 1 Хронік
  secondChronicles: [], // 2 Хронік
  ezra: [], // Ездри
  nehemiah: [
    {
      id: "nehemiah-1-reflections",
      title: "Роздуми Живих Братів",
      shortTitle: "Неемія 1",
      book: "Неемія",
      bookInternalKey: "nehemiah",
      chapter: "1",
      verses: "Неемії 1:1-11",
      date: "2025-07-27",
      author: "Живі Брати",
      duration: "60-90 хв",
      tags: [
        "Неемія",
        "молитва",
        "відновлення",
        "лідерство",
        "біль за народ",
        "заповіт",
        "Божа воля",
      ], // Теги
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah1"),
    },
    {
      id: "nehemiah-2-reflections",
      title: "Боже Бажання та Початок Відбудови",
      shortTitle: "Неемія 2",
      book: "Неемія",
      bookInternalKey: "nehemiah",
      chapter: "2",
      verses: "2:1-20",
      date: "2025-07-15",
      author: "Живі Брати",
      duration: "60-90 хв",
      tags: ["Неемія", "лідерство", "Божа рука", "відбудова", "протидія", "молитва", "Божа воля"],
      // ✅ Ліниве завантаження уроку 2
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah2"),
    },
    {
      id: "nehemiah-3-rebuilding",
      title: "Відбудова Стін Єрусалиму – Кожен на Своєму Місці",
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
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah3"),
    },
    //   {
    //     id: "lesson-fear-of-god",
    //     title: "Внутрішній конфлікт та страх Божий",
    //     shortTitle: "Страх Божий",
    //     book: "Неемії",
    //     bookInternalKey: "nehemiah",
    //     chapter: "5",
    //     verses: "1–19",
    //     date: "2025-08-03",
    //     author: "Антон (на основі обговорення 'Роздумів Живих Братів')",
    //     duration: "60 хвилин",
    //     tags: ["страх Божий", "Неемія", "справедливість", "служіння"],
    //     loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah5Lesson"),
    //   },
    {
      id: "nehemiah-5",
      title: "Внутрішній конфлікт та страх Божий",
      shortTitle: "Неемія 5",
      book: "Неемія",
      bookInternalKey: "nehemiah",
      chapter: "5",
      verses: "5:1–19",
      date: "2025-08-03",
      author: "Антон",
      duration: "Приблизна тривалість",
      tags: ["страх Божий", "соціальна справедливість", "Неемія", "внутрішній конфлікт"],
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah5"),
    },
    //   {
    //     id: "nehemiah-5-test",
    //     title: "Тестовий урок з посиланнями",
    //     shortTitle: "Тест посилань",
    //     book: "Неемії",
    //     bookInternalKey: "nehemiah",
    //     chapter: "5",
    //     verses: "1–19",
    //     date: "2025-08-03",
    //     author: "Тестувальник",
    //     tags: ["тест", "посилання"],
    //     loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah5Lesson-test.json"),
    //   },
    {
      id: "nehemiah-lesson-6",
      title: "Ворожі пастки та Божа перемога",
      shortTitle: "Неемія 6",
      book: "Неемія",
      bookInternalKey: "nehemiah",
      chapter: "6",
      verses: "1-19",
      date: "2025-07-31", // Приклад
      author: "Автор уроку",
      duration: "45-60 хв",
      tags: ["Неемія", "спокуса", "вірність", "перемога"],
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiahLesson6"),
    },
  ], // Неемії
  esther: [], // Естер
  job: [], // Йова
  psalms: [], // Псалми
  proverbs: [], // Приповісті
  ecclesiastes: [], // Екклезіяст
  songOfSolomon: [], // Пісня над Піснями
  isaiah: [], // Ісаї
  jeremiah: [], // Єремії
  lamentations: [], // Плач Єремії
  ezekiel: [], // Єзекіїля
  daniel: [], // Даниїла
  hosea: [], // Осії
  joel: [], // Йоіла
  amos: [], // Амоса
  obadiah: [], // Овдія
  jonah: [], // Йони
  micah: [], // Михея
  nahum: [], // Наума
  habakkuk: [], // Авакума
  zephaniah: [], // Софонії
  haggai: [], // Огія
  zechariah: [], // Захарії
  malachi: [], // Малахії

  // --- Книги Нового Заповіту ---
  matthew: [], // Матвія
  mark: [], // Марка
  luke: [], // Луки
  john: [], // Івана
  acts: [], // Дії
  romans: [], // Римлян
  firstCorinthians: [], // 1 Коринтян
  secondCorinthians: [], // 2 Коринтян
  galatians: [], // Галатів
  ephesians: [], // Ефесян
  philippians: [], // Филипʼян
  colossians: [], // Колосян
  firstThessalonians: [], // 1 Солунян
  secondThessalonians: [], // 2 Солунян
  firstTimothy: [], // 1 Тимофія
  secondTimothy: [], // 2 Тимофія
  titus: [], // Тита
  philemon: [], // Филимона
  hebrews: [], // Євреїв
  james: [], // Якова
  firstPeter: [], // 1 Петра
  secondPeter: [], // 2 Петра
  firstJohn: [], // 1 Івана
  secondJohn: [], // 2 Івана
  thirdJohn: [], // 3 Івана
  jude: [], // Юди
  revelation: [], // Обʼявлення

  // --- Категорії, що не є книгами ---
  thematic: [], // Тематичні Уроки
  special: [], // Особливі Події та Курси
};
