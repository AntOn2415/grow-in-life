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
      id: "nehemiah-4-commentary",
      title: "Неемія 4: Будівництво та Боротьба з Опозицією",
      shortTitle: "Неемії 4:1-23",
      book: "Неемія",
      bookInternalKey: "nehemiah",
      chapter: "4",
      date: "2025-07-27",
      author: "Збірник коментарів (В. Вірсбі)",
      duration: "90-120 хв",
      tags: ["Неемія", "будівництво", "опозиція", "віра", "випробування", "боротьба"],
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah4"), // ✅ Шлях до файлу уроку
    },
    {
      id: "nehemiah-1-reflections", // Унікальний ID
      title: "Неемія 1: Роздуми Живих Братів", // Повна назва
      shortTitle: "Неемія 1", // Скорочена назва для меню
      book: "Неемія",
      bookInternalKey: "nehemiah", // internalKey книги Неемії
      chapter: "1", // Глава
      verses: "Неемії 1:1-11", // Вірші
      date: "2025-07-27", // Дата уроку (можна змінити на реальну)
      author: "Живі Брати", // Автор
      duration: "60-90 хв", // Тривалість
      tags: [
        "Неемія",
        "молитва",
        "відновлення",
        "лідерство",
        "біль за народ",
        "заповіт",
        "Божа воля",
      ], // Теги
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah1Lesson"),
    },
    {
      id: "nehemiah-2-reflections", // ✅ Унікальний ID для уроку Неемія 2
      title: "Неемія 2: Боже Бажання та Початок Відбудови", // ✅ Повна назва
      shortTitle: "Неемія 2", // ✅ Скорочена назва для меню
      book: "Неемія",
      bookInternalKey: "nehemiah",
      chapter: "2", // ✅ Глава
      verses: "Неемії 2:1-20", // ✅ Вірші
      date: "2025-07-15", // ✅ Дата уроку
      author: "Живі Брати", // ✅ Автор
      duration: "60-90 хв", // ✅ Тривалість
      tags: ["Неемія", "лідерство", "Божа рука", "відбудова", "протидія", "молитва", "Божа воля"], // ✅ Теги
      // ✅ Ліниве завантаження уроку 2
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah2Lesson"),
    },
    {
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
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah3Lesson"),
    },
    {
      id: "lesson-fear-of-god",
      title: "Внутрішній конфлікт та страх Божий",
      shortTitle: "Страх Божий",
      book: "Неемії",
      bookInternalKey: "nehemiah",
      chapter: "5",
      verses: "1–19",
      date: "2025-08-03",
      author: "Антон (на основі обговорення 'Роздумів Живих Братів')",
      duration: "60 хвилин",
      tags: ["страх Божий", "Неемія", "справедливість", "служіння"],
      loadLesson: () => import("./lessons/oldTestament/nehemiah/nehemiah5Lesson"),
    },
    {
      id: "Nehemiah-5",
      title: "2 Внутрішній конфлікт та страх Божий",
      shortTitle: "Неемія 5",
      book: "Неемії",
      bookInternalKey: "nehemiah",
      chapter: "5",
      verses: "5:1–19",
      date: "2025-08-03",
      author: "Антон",
      tags: [
        "страх Божий",
        "соціальна справедливість",
        "Неемія",
        "внутрішній конфлікт",
        "лихварство",
        "милосердя",
      ],
      loadLesson: () => import("./lessons/oldTestament/nehemiah/lessonTemplate5"),
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
