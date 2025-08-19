import React, { useReducer, useCallback, useRef, useEffect, useState } from "react";
import { ListContainer, CardsGrid } from "./ListCards.styled";
import Card from "./Card"; // Імпортуємо окремий компонент Card

// Reducer для управління станом розгортання рядків
const expansionReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE_ROW":
      return action.payload.rowIndex;
    case "DEACTIVATE_ROW":
      return null;
    default:
      return state;
  }
};

const ListCards = ({ cards, titleLevel }) => {
  // Приймаємо titleLevel від ContentRenderer
  const [activeRowIndex, dispatch] = useReducer(expansionReducer, null);
  const [columnCount, setColumnCount] = useState(3);
  const gridRef = useRef(null);

  // Функція для визначення кількості колонок в залежності від ширини екрану
  const getColumnCount = useCallback(() => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1200) {
      return 2;
    } else {
      return 3;
    }
  }, []);

  // Ефект для оновлення кількості колонок при зміні розміру вікна
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
      dispatch({ type: "DEACTIVATE_ROW" }); // Згортаємо всі картки при зміні розміру
    };

    window.addEventListener("resize", handleResize);
    setColumnCount(getColumnCount()); // Встановлюємо початкову кількість колонок

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getColumnCount]);

  // Функція для перемикання стану розгортання картки
  const toggleExpand = useCallback(
    index => {
      const clickedRowIndex = Math.floor(index / columnCount);
      if (activeRowIndex === clickedRowIndex) {
        dispatch({ type: "DEACTIVATE_ROW" });
      } else {
        dispatch({ type: "ACTIVATE_ROW", payload: { rowIndex: clickedRowIndex } });
      }
    },
    [activeRowIndex, columnCount]
  );

  // Обробник втрати фокусу для закриття розгорнутих карток
  const handleRowBlur = useCallback(e => {
    if (gridRef.current && !gridRef.current.contains(e.relatedTarget)) {
      dispatch({ type: "DEACTIVATE_ROW" });
    }
  }, []);

  // Функція для згортання картки (може бути викликана з дочірнього компонента, якщо потрібно)
  const collapseCard = useCallback(() => {
    // Більше не приймає index, так як керуємо рядками
    dispatch({ type: "DEACTIVATE_ROW" });
  }, []);

  return (
    <ListContainer>
      <CardsGrid ref={gridRef}>
        {cards.map((card, index) => {
          const cardRowIndex = Math.floor(index / columnCount);
          const isCardExpanded = activeRowIndex === cardRowIndex;

          return (
            <Card
              key={index}
              card={card}
              index={index}
              isExpanded={isCardExpanded}
              toggleExpand={toggleExpand}
              collapseCard={collapseCard}
              handleRowBlur={handleRowBlur}
              titleLevel={titleLevel} // Передаємо рівень заголовка в Card
            />
          );
        })}
      </CardsGrid>
    </ListContainer>
  );
};

export default ListCards;
