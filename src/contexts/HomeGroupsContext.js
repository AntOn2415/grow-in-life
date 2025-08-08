import React, { createContext, useContext, useState, useEffect } from "react";
import { homeGroupsContent } from "../data/homeGroups/homeGroupsContent";

const HomeGroupsContext = createContext(null);

// ✅ Нова функція для отримання початкового стану з localStorage
const getInitialState = () => {
  try {
    const savedState = localStorage.getItem("homeGroupsState");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Помилка при отриманні стану з localStorage", error);
  }
  return {
    selectedHomeGroupLesson: null,
    selectedHomeGroupBook: null,
  };
};

// Функція для пошуку першого доступного уроку
const findFirstLesson = () => {
  for (const categoryKey in homeGroupsContent) {
    const lessonsArray = homeGroupsContent[categoryKey];
    if (lessonsArray && lessonsArray.length > 0) {
      return {
        lessonId: lessonsArray[0].id,
        bookKey: categoryKey,
      };
    }
  }
  return { lessonId: null, bookKey: null };
};

export const HomeGroupsProvider = ({ children }) => {
  // ✅ Використовуємо єдиний об'єкт стану, ініціалізований з localStorage
  const [state, setState] = useState(getInitialState);

  // ✅ useEffect для встановлення першого уроку, якщо жодного не вибрано
  useEffect(() => {
    if (!state.selectedHomeGroupLesson) {
      const { lessonId, bookKey } = findFirstLesson();
      if (lessonId) {
        setState(prevState => ({
          ...prevState,
          selectedHomeGroupLesson: lessonId,
          selectedHomeGroupBook: bookKey,
        }));
      }
    }
  }, [state.selectedHomeGroupLesson]);

  // ✅ useEffect для збереження стану в localStorage при кожній зміні
  useEffect(() => {
    try {
      localStorage.setItem("homeGroupsState", JSON.stringify(state));
    } catch (error) {
      console.error("Помилка при збереженні стану в localStorage", error);
    }
  }, [state]); // Залежність від всього об'єкта стану

  const setSelectedHomeGroupLesson = lessonId => {
    setState(prev => ({
      ...prev,
      selectedHomeGroupLesson: lessonId,
    }));
  };

  const setSelectedHomeGroupBook = bookKey => {
    setState(prev => ({
      ...prev,
      selectedHomeGroupBook: bookKey,
    }));
  };

  return (
    <HomeGroupsContext.Provider
      value={{
        selectedHomeGroupLesson: state.selectedHomeGroupLesson,
        setSelectedHomeGroupLesson,
        selectedHomeGroupBook: state.selectedHomeGroupBook,
        setSelectedHomeGroupBook,
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
