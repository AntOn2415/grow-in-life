// src/components/Sermons/Sermons.jsx
import React, { useEffect } from "react";
import { Container, NoSermonMessage } from "./Sermons.styled";
import SermonDisplay from "../SpecificContentDisplays/SermonDisplay/SermonDisplay";
import { sermonsContent } from "../../data/sermons/sermonsContent"; // Переконайтесь, що цей шлях правильний
import { useSermons } from "../../contexts/SermonsContext";

// Нова функція для отримання даних проповіді за її ID
const getSermonDataById = sermonId => {
  if (!sermonId) return null;

  // Проходимо по всіх категоріях (книги, тематичні, особливі) в sermonsContent
  for (const categoryKey in sermonsContent) {
    if (sermonsContent.hasOwnProperty(categoryKey)) {
      const sermonsArray = sermonsContent[categoryKey];
      // Перевіряємо, чи це масив і чи він не порожній
      if (Array.isArray(sermonsArray) && sermonsArray.length > 0) {
        const foundSermon = sermonsArray.find(sermon => sermon.id === sermonId);
        if (foundSermon) {
          return foundSermon;
        }
      }
    }
  }
  return null; // Якщо проповідь з таким ID не знайдено
};

const Sermons = () => {
  const { selectedSermon, setSelectedSermon } = useSermons();

  // Тепер використовуємо нову функцію пошуку за ID
  const sermonData = getSermonDataById(selectedSermon);

  useEffect(() => {
    // Якщо жодна проповідь не обрана (при першому завантаженні або перезавантаженні)
    if (!selectedSermon) {
      // Знаходимо першу доступну проповідь для відображення за замовчуванням
      let firstSermonId = null;
      for (const categoryKey in sermonsContent) {
        if (sermonsContent.hasOwnProperty(categoryKey)) {
          const sermonsArray = sermonsContent[categoryKey];
          if (Array.isArray(sermonsArray) && sermonsArray.length > 0) {
            firstSermonId = sermonsArray[0].id; // Беремо ID першої проповіді з першої категорії
            break; // Зупиняємо пошук після знаходження першої проповіді
          }
        }
      }

      if (firstSermonId) {
        setSelectedSermon(firstSermonId); // Встановлюємо ID першої проповіді
      }
    }
  }, [selectedSermon, setSelectedSermon]);

  return (
    <Container>
      {sermonData ? (
        <SermonDisplay sermonData={sermonData} />
      ) : (
        <NoSermonMessage>Будь ласка, оберіть проповідь зі списку в меню.</NoSermonMessage>
      )}
    </Container>
  );
};

export default Sermons;
