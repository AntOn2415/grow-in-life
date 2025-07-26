// src/data/sermons/sermonsContent.js

import { sermonGodOverAll } from "./sermonGodOverAll";
// Імпортуйте тут інші ваші файли проповідей, наприклад:
import { test1 } from "./test1";
import { nehemiah4Commentary } from "./nehemiah4Commentary";

export const sermonsContent = {
  // Новий Завіт - всі книги, ініціалізовані як порожні масиви.
  // Додавайте сюди об'єкти проповідей, імпортуючи їх вище.

  matthew: [],
  mark: [test1],
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
    nehemiah4Commentary, // Приклад: проповідь, яка є "тематичною"
  ],
  special: [
    // Приклад: проповідь, яка є "особливою подією"
  ],
};
