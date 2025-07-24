// src/components/Sermons/Sermons.jsx
import React, { useEffect } from "react";
import { Container, NoSermonMessage } from "./Sermons.styled";
// Імпортуємо SermonDisplay замість Sermon
import SermonDisplay from "../SpecificContentDisplays/SermonDisplay/SermonDisplay"; // <--- Змінено імпорт
import { sermonsContent } from "../../data/sermonsContent";
import { useSermons } from "../../contexts/SermonsContext";

const getSermonData = selected => {
  if (!selected) return null;
  const { book, idx } = selected;
  if (sermonsContent[book] && sermonsContent[book][idx]) {
    return sermonsContent[book][idx];
  }
  return null;
};

const Sermons = () => {
  const { selectedSermon, setSelectedSermon } = useSermons();

  const sermonData = getSermonData(selectedSermon);

  useEffect(() => {
    if (!selectedSermon) {
      const books = Object.keys(sermonsContent);
      if (books.length > 0) {
        const firstBook = books[0];
        if (sermonsContent[firstBook] && sermonsContent[firstBook].length > 0) {
          setSelectedSermon({ book: firstBook, idx: 0 });
        }
      }
    }
  }, [selectedSermon, setSelectedSermon]);

  return (
    <Container>
      {sermonData ? (
        // Тепер завжди використовуємо SermonDisplay
        <SermonDisplay sermonData={sermonData} /> // <--- Змінено використання
      ) : (
        <NoSermonMessage>Будь ласка, оберіть проповідь зі списку в меню.</NoSermonMessage>
      )}
    </Container>
  );
};

export default Sermons;
