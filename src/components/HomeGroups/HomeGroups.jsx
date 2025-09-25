import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { parseAndValidateContent } from "../../utils/parseAndValidateLesson";

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
  const [parsedLesson, setParsedLesson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // ✅ Замість hasLoaded useRef, використовуємо новий ефект для ініціалізації.
  // Цей ефект запустить `setSelectedHomeGroupLesson` лише один раз,
  // якщо урок ще не обрано. Це дозволяє основному ефекту
  // реагувати на наступні зміни.
  useEffect(() => {
    if (!selectedHomeGroupLesson) {
      const firstLesson = findFirstLesson();
      if (firstLesson) {
        setSelectedHomeGroupLesson(firstLesson);
      } else {
        setLoading(false);
      }
    }
  }, [selectedHomeGroupLesson, setSelectedHomeGroupLesson]);

  useEffect(() => {
    if (!selectedHomeGroupLesson) {
      return;
    }

    const loadContent = async () => {
      setLoading(true);
      setError(null);

      const lessonMetaData = getLessonMetaDataById(selectedHomeGroupLesson);
      if (lessonMetaData && lessonMetaData.loadLesson) {
        try {
          const module = await lessonMetaData.loadLesson();
          const lessonJson = module.default;
          const { success, lesson, error: validationError } = parseAndValidateContent(lessonJson);

          if (success) {
            setParsedLesson(lesson);
          } else {
            setError(`Помилка валідації: ${validationError}`);
            setParsedLesson(null);
          }
        } catch (err) {
          console.error("Помилка завантаження або парсингу уроку:", err);
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

    loadContent();
  }, [selectedHomeGroupLesson]);

  useLayoutEffect(() => {
    if (parsedLesson && mainRef && mainRef.current) {
      const savedScrollY = sessionStorage.getItem(`scrollPosition-${location.pathname}`);
      if (savedScrollY) {
        const parsedScroll = parseInt(savedScrollY, 10);
        mainRef.current.scrollTop = parsedScroll;
      }
    }
  }, [parsedLesson, mainRef, location.pathname]);

  return (
    <HomeGroupsContainer>
      {loading ? (
        <NoLessonMessage>Завантаження уроку...</NoLessonMessage>
      ) : error ? (
        <NoLessonMessage>{error}</NoLessonMessage>
      ) : parsedLesson ? (
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
