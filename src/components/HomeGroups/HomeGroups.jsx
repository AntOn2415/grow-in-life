// src/components/HomeGroups/HomeGroups.jsx
import React, { useEffect, useState } from "react"; // ✅ ДОДАНО useState
import { HomeGroupsContainer, NoLessonMessage } from "./HomeGroups.styled";
import HomeGroupLessonDisplay from "../SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay";
import { homeGroupsContent } from "../../data/homeGroups/homeGroupsContent";
import { useHomeGroups } from "../../contexts/HomeGroupsContext";

const getLessonMetaDataById = lessonId => {
  // ✅ ЗМІНЕНО НАЗВУ: тепер отримуємо метадані
  if (!lessonId) return null;

  for (const categoryKey in homeGroupsContent) {
    if (homeGroupsContent.hasOwnProperty(categoryKey)) {
      const lessonsArray = homeGroupsContent[categoryKey];
      if (Array.isArray(lessonsArray) && lessonsArray.length > 0) {
        const foundLesson = lessonsArray.find(lesson => lesson.id === lessonId);
        if (foundLesson) {
          return foundLesson; // Повертаємо об'єкт з метаданими та loadLesson
        }
      }
    }
  }
  return null;
};

const HomeGroups = () => {
  const { selectedHomeGroupLesson, setSelectedHomeGroupLesson } = useHomeGroups();
  const [loadedLessonContent, setLoadedLessonContent] = useState(null); // ✅ НОВИЙ СТАН: для зберігання завантаженого уроку
  const [loading, setLoading] = useState(true); // ✅ НОВИЙ СТАН: для індикації завантаження

  // Отримуємо метадані обраного уроку (з loadLesson функцією)
  const selectedLessonMetaData = getLessonMetaDataById(selectedHomeGroupLesson);

  useEffect(() => {
    // Встановлюємо перший урок за замовчуванням, якщо жоден не вибрано
    if (!selectedHomeGroupLesson) {
      let firstLessonId = null;
      for (const categoryKey in homeGroupsContent) {
        if (homeGroupsContent.hasOwnProperty(categoryKey)) {
          const lessonsArray = homeGroupsContent[categoryKey];
          if (Array.isArray(lessonsArray) && lessonsArray.length > 0) {
            firstLessonId = lessonsArray[0].id;
            break;
          }
        }
      }
      if (firstLessonId) {
        setSelectedHomeGroupLesson(firstLessonId);
      } else {
        setLoading(false); // Якщо немає уроків взагалі
      }
    }
  }, [selectedHomeGroupLesson, setSelectedHomeGroupLesson]);

  // ✅ НОВИЙ useEffect для завантаження контенту уроку
  useEffect(() => {
    const loadLessonContent = async () => {
      setLoading(true); // Починаємо завантаження
      setLoadedLessonContent(null); // Очищаємо попередній контент

      if (selectedLessonMetaData && selectedLessonMetaData.loadLesson) {
        try {
          const module = await selectedLessonMetaData.loadLesson();
          // Припускаємо, що module.default містить об'єкт уроку (як nehemiah4.js)
          setLoadedLessonContent(module.default);
        } catch (error) {
          console.error("Помилка завантаження уроку:", error);
          setLoadedLessonContent(null); // У випадку помилки скидаємо контент
        } finally {
          setLoading(false); // Завершуємо завантаження
        }
      } else {
        setLoading(false); // Немає метаданих або функції loadLesson
      }
    };

    if (selectedHomeGroupLesson) {
      // Запускаємо завантаження, лише якщо selectedHomeGroupLesson встановлено
      loadLessonContent();
    }
  }, [selectedLessonMetaData, selectedHomeGroupLesson]); // Залежності: зміни метаданих або ID обраного уроку

  return (
    <HomeGroupsContainer>
      {loading ? (
        <NoLessonMessage>Завантаження уроку...</NoLessonMessage> // Показати, поки урок завантажується
      ) : loadedLessonContent ? (
        <HomeGroupLessonDisplay lessonData={loadedLessonContent} /> // Передаємо завантажений контент
      ) : (
        <NoLessonMessage>
          Будь ласка, оберіть урок домашньої групи зі списку в меню.
        </NoLessonMessage>
      )}
    </HomeGroupsContainer>
  );
};

export default HomeGroups;
