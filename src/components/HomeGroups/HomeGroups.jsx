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
  const [loadedLessonContent, setLoadedLessonContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // ✅ НОВИЙ СТАН: Прапорець для відстеження, чи це перше завантаження компонента
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
    const loadLessonContent = async () => {
      setLoading(true);
      setLoadedLessonContent(null);

      if (mainRef && mainRef.current && !isInitialLoad.current) {
        mainRef.current.scrollTop = 0;
      }

      const lessonMetaData = getLessonMetaDataById(selectedHomeGroupLesson);
      if (lessonMetaData && lessonMetaData.loadLesson) {
        try {
          const module = await lessonMetaData.loadLesson();
          setLoadedLessonContent(module.default);
        } catch (error) {
          console.error("Помилка завантаження уроку:", error);
          setLoadedLessonContent(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (selectedHomeGroupLesson) {
      loadLessonContent();
    }
  }, [selectedHomeGroupLesson, mainRef]);

  // useEffect для відновлення скролу після завантаження контенту
  useEffect(() => {
    if (loadedLessonContent && mainRef && mainRef.current) {
      const savedScrollY = sessionStorage.getItem(`scrollPosition-${location.pathname}`);

      if (savedScrollY && isInitialLoad.current) {
        const parsedScroll = parseInt(savedScrollY, 10);
        mainRef.current.scrollTop = parsedScroll;
      }

      isInitialLoad.current = false;
    }
  }, [loadedLessonContent, mainRef, location.pathname]);

  return (
    <HomeGroupsContainer>
      {loading ? (
        <NoLessonMessage>Завантаження уроку...</NoLessonMessage>
      ) : loadedLessonContent ? (
        <HomeGroupLessonDisplay lessonData={loadedLessonContent} />
      ) : (
        <NoLessonMessage>
          Будь ласка, оберіть урок домашньої групи зі списку в меню.
        </NoLessonMessage>
      )}
    </HomeGroupsContainer>
  );
};

export default HomeGroups;
