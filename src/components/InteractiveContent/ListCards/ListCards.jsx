import React, { useReducer, useCallback, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // AnimatePresence не потрібен, оскільки елементи не монтуються/демонтуються
import {
  ListContainer,
  Title,
  CardsGrid,
  CardWrapper,
  CardHeader,
  Emoji,
  CardTitle,
  CardContentWrapper,
  ReadMoreButton,
  ButtonWrapper,
} from "./ListCards.styled";

// Reducer для управління станом активного рядка
// Тепер state буде зберігати індекс активного ряду, або null, якщо жоден ряд не активний
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

const PREVIEW_HEIGHT = 160;

const Card = React.memo(
  ({ card, index, isExpanded, toggleExpand, collapseCard, handleRowBlur }) => {
    const contentRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [contentFullHeight, setContentFullHeight] = useState(PREVIEW_HEIGHT);

    useEffect(() => {
      const checkOverflow = () => {
        if (contentRef.current) {
          const { scrollHeight } = contentRef.current;
          setIsOverflowing(scrollHeight > PREVIEW_HEIGHT);
          if (scrollHeight > PREVIEW_HEIGHT) {
            setContentFullHeight(scrollHeight);
          } else {
            setContentFullHeight(PREVIEW_HEIGHT);
          }
        }
      };

      checkOverflow();
      window.addEventListener("resize", checkOverflow);
      const timeoutId = setTimeout(checkOverflow, 150);

      return () => {
        window.removeEventListener("resize", checkOverflow);
        clearTimeout(timeoutId);
      };
    }, [card.content]);

    useEffect(() => {
      if (isExpanded && contentRef.current) {
        setContentFullHeight(contentRef.current.scrollHeight);
      } else if (!isExpanded) {
        setContentFullHeight(PREVIEW_HEIGHT);
      }
    }, [isExpanded]);

    return (
      // Використовуємо handleRowBlur на CardWrapper, щоб обробляти втрату фокусу з ряду
      <CardWrapper
        onBlur={handleRowBlur} // Новий обробник
        tabIndex={isOverflowing ? 0 : -1}
        aria-expanded={isExpanded}
      >
        <CardHeader>
          <Emoji role="img" aria-label={`Emoji for ${card.title}`}>
            {card.emoji}
          </Emoji>
          <CardTitle>{card.title}</CardTitle>
        </CardHeader>

        <motion.div
          layout
          initial={{ height: PREVIEW_HEIGHT }}
          animate={{
            height: isExpanded ? contentFullHeight : PREVIEW_HEIGHT,
            opacity: 1,
          }}
          transition={{
            duration: 0.3, // Тривалість анімації
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ overflow: "hidden", width: "100%" }}
        >
          <CardContentWrapper ref={contentRef} isExpanded={isExpanded} id={`card-content-${index}`}>
            {card.content}
          </CardContentWrapper>
        </motion.div>

        {isOverflowing && (
          <ButtonWrapper isExpanded={isExpanded}>
            <ReadMoreButton
              onClick={e => {
                e.stopPropagation();
                toggleExpand(index);
              }}
              aria-controls={`card-content-${index}`}
              tabIndex={0}
              isExpanded={isExpanded}
            >
              {isExpanded ? <>Згорнути</> : <>Читати далі</>}
            </ReadMoreButton>
          </ButtonWrapper>
        )}
      </CardWrapper>
    );
  }
);

const ListCards = ({ title, cards }) => {
  // activeRowIndex зберігатиме індекс активного ряду (або null)
  const [activeRowIndex, dispatch] = useReducer(expansionReducer, null);
  const [columnCount, setColumnCount] = useState(3); // За замовчуванням 3 колонки
  const gridRef = useRef(null); // Реф для CardsGrid

  // Функція для визначення кількості колонок
  const getColumnCount = useCallback(() => {
    // Визначення кількості колонок на основі ширини вікна
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1200) {
      return 2;
    } else {
      return 3;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
      // При зміні кількості колонок скидаємо активний ряд
      dispatch({ type: "DEACTIVATE_ROW" });
    };

    window.addEventListener("resize", handleResize);
    // Встановлюємо початкове значення при монтуванні
    setColumnCount(getColumnCount());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getColumnCount]);

  // Ця функція активує ряд
  const toggleExpand = useCallback(
    index => {
      const clickedRowIndex = Math.floor(index / columnCount);
      // Якщо клікнуто на картку вже активного ряду, то закриваємо весь ряд
      if (activeRowIndex === clickedRowIndex) {
        dispatch({ type: "DEACTIVATE_ROW" });
      } else {
        // Інакше активуємо новий ряд
        dispatch({ type: "ACTIVATE_ROW", payload: { rowIndex: clickedRowIndex } });
      }
    },
    [activeRowIndex, columnCount]
  );

  // Функція для обробки втрати фокусу з ряду карток
  const handleRowBlur = useCallback(e => {
    // Перевіряємо, чи новий фокус НЕ знаходиться всередині gridRef
    // (тобто, фокус перемістився за межі сітки карток)
    if (gridRef.current && !gridRef.current.contains(e.relatedTarget)) {
      dispatch({ type: "DEACTIVATE_ROW" });
    }
  }, []);

  const collapseCard = useCallback(index => {
    // Ця функція більше не використовується безпосередньо, але залишаємо для повноти
    // Якщо потрібно буде закрити окрему картку, її можна використовувати
    dispatch({ type: "DEACTIVATE_ROW" }); // Закриває весь ряд, якщо фокус втрачено
  }, []);

  return (
    <ListContainer>
      {title && <Title>{title}</Title>}
      <CardsGrid ref={gridRef}>
        {" "}
        {/* Призначаємо реф для відстеження фокусу */}
        {cards.map((card, index) => {
          const cardRowIndex = Math.floor(index / columnCount);
          // isExpanded тепер залежить від того, чи є її ряд активним
          const isCardExpanded = activeRowIndex === cardRowIndex;

          return (
            <Card
              key={index}
              card={card}
              index={index}
              isExpanded={isCardExpanded} // Передаємо новий стан розширення
              toggleExpand={toggleExpand}
              collapseCard={collapseCard} // Можна прибрати, якщо не використовується
              handleRowBlur={handleRowBlur} // Передаємо обробник blur
            />
          );
        })}
      </CardsGrid>
    </ListContainer>
  );
};

export default ListCards;
