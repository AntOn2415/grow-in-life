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
