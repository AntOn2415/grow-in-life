// src/data/sermons/sermonsContent.js

import { sermonGodOverAll } from "./sermonGodOverAll";
// Імпортуйте тут інші ваші файли проповідей, наприклад:
// import { test1 } from "./test1";
// import { yourMarkSermon } from "./yourMarkSermon";

export const sermonsContent = {
  // Новий Завіт - всі книги, ініціалізовані як порожні масиви.
  // Додавайте сюди об'єкти проповідей, імпортуючи їх вище.

  matthew: [],
  mark: [],
  luke: [sermonGodOverAll], // Зберігаємо існуючий вміст
  john: [],
  acts: [],
  romans: [],
  firstCorinthians: [], // Зберігаємо існуючий вміст
  secondCorinthians: [],
  galatians: [],
  ephesians: [],
  philippians: [],
  colossians: [],
  firstThessalonians: [],
  secondThessalonians: [],
  firstTimothy: [],
  secondTimothy: [],
  titus: [],
  philemon: [],
  hebrews: [],
  james: [],
  firstPeter: [],
  secondPeter: [],
  firstJohn: [],
  secondJohn: [],
  thirdJohn: [],
  jude: [],
  revelation: [],

  // Категорії, що не є книгами (тематичні, особливі події)
  thematic: [
    sermonGodOverAll, // Приклад: проповідь, яка є "тематичною"
  ],
  special: [
    // Приклад: проповідь, яка є "особливою подією"
  ],
};
