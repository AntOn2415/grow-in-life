import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { homeGroupsContent } from "../data/homeGroups/homeGroupsContent";
import {
  homeGroupCategories,
  oldTestamentBooksList,
  newTestamentBooksList,
} from "../data/homeGroups/homeGroupCategories";

const HomeGroupsContext = createContext(null);

// ✅ Moved the entire initialization logic into a single function
const getInitialState = () => {
  let savedState = null;
  try {
    const serializedState = localStorage.getItem("homeGroupsState");
    if (serializedState) {
      savedState = JSON.parse(serializedState);
    }
  } catch (error) {
    console.error("Помилка при отриманні стану з localStorage", error);
  }

  // ✅ Find the first lesson as a fallback, outside of the useEffect
  const findFirstLesson = () => {
    for (const category of homeGroupCategories) {
      if (category.id === "old-testament-books" || category.id === "new-testament-books") {
        const booksList =
          category.id === "old-testament-books" ? oldTestamentBooksList : newTestamentBooksList;
        for (const book of booksList) {
          const lessons = homeGroupsContent[book.internalKey];
          if (lessons && lessons.length > 0) {
            return {
              lessonId: lessons[0].id,
              bookKey: book.internalKey,
            };
          }
        }
      } else if (category.type === "thematic" || category.type === "special") {
        const lessons = homeGroupsContent[category.id];
        if (lessons && lessons.length > 0) {
          return {
            lessonId: lessons[0].id,
            bookKey: category.id,
          };
        }
      }
    }
    return { lessonId: null, bookKey: null };
  };

  if (savedState && savedState.selectedHomeGroupLesson) {
    return savedState;
  } else {
    return findFirstLesson();
  }
};

export const HomeGroupsProvider = ({ children }) => {
  // ✅ Initialize state once using the `getInitialState` function
  const [state, setState] = useState(getInitialState);

  // ✅ Stabilized state setters with useCallback to prevent re-renders
  const setSelectedHomeGroupLesson = useCallback(lessonId => {
    setState(prev => ({
      ...prev,
      selectedHomeGroupLesson: lessonId,
    }));
  }, []);

  const setSelectedHomeGroupBook = useCallback(bookKey => {
    setState(prev => ({
      ...prev,
      selectedHomeGroupBook: bookKey,
    }));
  }, []);

  // ✅ useEffect for saving state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("homeGroupsState", JSON.stringify(state));
    } catch (error) {
      console.error("Помилка при збереженні стану в localStorage", error);
    }
  }, [state]);

  // ✅ Stabilize the context value with useMemo
  const value = useMemo(
    () => ({
      selectedHomeGroupLesson: state.selectedHomeGroupLesson,
      setSelectedHomeGroupLesson,
      selectedHomeGroupBook: state.selectedHomeGroupBook,
      setSelectedHomeGroupBook,
    }),
    [
      state.selectedHomeGroupLesson,
      state.selectedHomeGroupBook,
      setSelectedHomeGroupLesson,
      setSelectedHomeGroupBook,
    ]
  );

  return <HomeGroupsContext.Provider value={value}>{children}</HomeGroupsContext.Provider>;
};

export const useHomeGroups = () => {
  const context = useContext(HomeGroupsContext);
  if (!context) {
    throw new Error("useHomeGroups must be used within a HomeGroupsProvider");
  }
  return context;
};
