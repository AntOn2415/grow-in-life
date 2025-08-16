import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { HomeGroupsContainer, NoLessonMessage } from "./HomeGroups.styled";
import HomeGroupLessonDisplay from "../SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay";
import { homeGroupsContent } from "../../data/homeGroups/homeGroupsContent";
import { useHomeGroups } from "../../contexts/HomeGroupsContext";
import {
  homeGroupCategories,
  oldTestamentBooksList,
  newTestamentBooksList,
} from "../../data/homeGroups/homeGroupCategories";

// --- ВАЖЛИВО ---: Імпортуємо вашу нову утиліту для парсингу
import { parseAndValidateLesson } from "../../utils/parseAndValidateLesson";

// Оптимізована функція для пошуку уроку
const getLessonMetaDataById = lessonId => {
  if (!lessonId) return null;

  for (const categoryKey in homeGroupsContent) {
    const lessonsArray = homeGroupsContent[categoryKey];
    if (lessonsArray) {
      const foundLesson = lessonsArray.find(lesson => lesson.id === lessonId);
      if (foundLesson) {
        return foundLesson;
      }
    }
  }
  return null;
};

// Оптимізована функція для пошуку першого уроку
const findFirstLesson = () => {
  for (const category of homeGroupCategories) {
    if (category.id === "old-testament-books" || category.id === "new-testament-books") {
      const booksList =
        category.id === "old-testament-books" ? oldTestamentBooksList : newTestamentBooksList;
      for (const book of booksList) {
        const lessons = homeGroupsContent[book.internalKey];
        if (lessons && lessons.length > 0) {
          return lessons[0].id;
        }
      }
    } else if (category.type === "thematic" || category.type === "special") {
      const lessons = homeGroupsContent[category.id];
      if (lessons && lessons.length > 0) {
        return lessons[0].id;
      }
    }
  }
  return null;
};

const HomeGroups = () => {
  const { mainRef } = useOutletContext();
  const { selectedHomeGroupLesson, setSelectedHomeGroupLesson } = useHomeGroups();
  // --- ЗМІНА 1 ---: Змінюємо стан для зберігання спарсеного уроку або помилки
  const [parsedLesson, setParsedLesson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isInitialLoad = useRef(true);

  // useEffect для ініціалізації уроку
  useEffect(() => {
    if (!selectedHomeGroupLesson) {
      const firstLessonId = findFirstLesson();
      if (firstLessonId) {
        setSelectedHomeGroupLesson(firstLessonId);
      } else {
        setLoading(false);
      }
    }
  }, [selectedHomeGroupLesson, setSelectedHomeGroupLesson]);

  // ВИПРАВЛЕНИЙ useEffect для завантаження контенту уроку
  useEffect(() => {
    const loadAndParseLessonContent = async () => {
      setLoading(true);
      setParsedLesson(null);
      setError(null);

      if (mainRef && mainRef.current && !isInitialLoad.current) {
        mainRef.current.scrollTop = 0;
      }

      const lessonMetaData = getLessonMetaDataById(selectedHomeGroupLesson);
      if (lessonMetaData && lessonMetaData.loadLesson) {
        try {
          // Динамічно завантажуємо модуль
          const module = await lessonMetaData.loadLesson();
          const lessonJson = module.default;

          // --- ЗМІНА 2 ---: Викликаємо parseAndValidateLesson для валідації та парсингу
          const { success, lesson, error: validationError } = parseAndValidateLesson(lessonJson);

          if (success) {
            setParsedLesson(lesson);
          } else {
            // Зберігаємо помилку валідації в стані
            setError(`Помилка валідації уроку: ${validationError}`);
            setParsedLesson(null);
          }
        } catch (error) {
          console.error("Помилка завантаження або парсингу уроку:", error);
          setError("Не вдалося завантажити урок. Спробуйте пізніше.");
          setParsedLesson(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setParsedLesson(null);
        setError("Урок не знайдено.");
      }
    };

    if (selectedHomeGroupLesson) {
      loadAndParseLessonContent();
    }
  }, [selectedHomeGroupLesson, mainRef]);

  // useEffect для відновлення скролу після завантаження контенту
  useEffect(() => {
    if (parsedLesson && mainRef && mainRef.current) {
      const savedScrollY = sessionStorage.getItem(`scrollPosition-${location.pathname}`);

      if (savedScrollY && isInitialLoad.current) {
        const parsedScroll = parseInt(savedScrollY, 10);
        mainRef.current.scrollTop = parsedScroll;
      }

      isInitialLoad.current = false;
    }
  }, [parsedLesson, mainRef, location.pathname]);

  return (
    <HomeGroupsContainer>
      {loading ? (
        <NoLessonMessage>Завантаження уроку...</NoLessonMessage>
      ) : error ? (
        // --- ЗМІНА 3 ---: Показуємо повідомлення про помилку
        <NoLessonMessage>{error}</NoLessonMessage>
      ) : parsedLesson ? (
        // --- ЗМІНА 4 ---: Передаємо вже спарсений об'єкт уроку
        <HomeGroupLessonDisplay lessonData={parsedLesson} />
      ) : (
        <NoLessonMessage>
          Будь ласка, оберіть урок домашньої групи зі списку в меню.
        </NoLessonMessage>
      )}
    </HomeGroupsContainer>
  );
};

export default HomeGroups;
