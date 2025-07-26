// src/contexts/HomeGroupsContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { homeGroupsContent } from "../data/homeGroups/homeGroupsContent";

const HomeGroupsContext = createContext(null);

export const HomeGroupsProvider = ({ children }) => {
  const [selectedHomeGroupLesson, setSelectedHomeGroupLesson] = useState(null);
  // ✅ ДОДАНО: Стан для відстеження активної (розгорнутої) книги/категорії
  const [selectedHomeGroupBook, setSelectedHomeGroupBook] = useState(null);

  // Логіка для встановлення першого уроку за замовчуванням при першому завантаженні
  useEffect(() => {
    if (!selectedHomeGroupLesson) {
      let firstLessonId = null;
      let firstBookKey = null; // ✅ ДОДАНО: Для встановлення першої відкритої книги
      for (const categoryKey in homeGroupsContent) {
        if (homeGroupsContent.hasOwnProperty(categoryKey)) {
          const lessonsArray = homeGroupsContent[categoryKey];
          if (Array.isArray(lessonsArray) && lessonsArray.length > 0) {
            firstLessonId = lessonsArray[0].id; // Беремо ID першого уроку з першої категорії
            firstBookKey = categoryKey; // ✅ Встановлюємо ключ першої категорії як книгу за замовчуванням
            break;
          }
        }
      }

      if (firstLessonId) {
        setSelectedHomeGroupLesson(firstLessonId);
      }
      if (firstBookKey) {
        // ✅ Встановлюємо книгу за замовчуванням, якщо знайдено
        setSelectedHomeGroupBook(firstBookKey);
      }
    }
  }, [selectedHomeGroupLesson, setSelectedHomeGroupLesson, setSelectedHomeGroupBook]); // ✅ ОНОВЛЕНО ЗАЛЕЖНОСТІ

  return (
    <HomeGroupsContext.Provider
      value={{
        selectedHomeGroupLesson,
        setSelectedHomeGroupLesson,
        selectedHomeGroupBook, // ✅ НАДАНО: Додаємо до контексту
        setSelectedHomeGroupBook, // ✅ НАДАНО: Додаємо до контексту
      }}
    >
      {children}
    </HomeGroupsContext.Provider>
  );
};

export const useHomeGroups = () => {
  const context = useContext(HomeGroupsContext);
  if (!context) {
    throw new Error("useHomeGroups must be used within a HomeGroupsProvider");
  }
  return context;
};
