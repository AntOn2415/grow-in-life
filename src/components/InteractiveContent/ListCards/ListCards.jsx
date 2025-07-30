import React, {
  useState,
  useReducer,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
// motion та AnimatePresence більше не імпортуються
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
} from "./ListCards.styled";

// --- Reducer для управління станом розширення карток ---
const expansionReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case "SET":
      return {
        ...state,
        [action.payload.index]: action.payload.isExpanded,
      };
    case "RESET":
      return {};
    default:
      return state;
  }
};

// --- Single Card Component (для оптимізації) ---
const Card = React.memo(({ card, index, isExpanded, toggleExpand, collapseCard }) => {
  const contentRef = useRef(null);
  const [initialContentHeight, setInitialContentHeight] = useState(0);
  const [fullContentHeight, setFullContentHeight] = useState(0);
  const [isContentLong, setIsContentLong] = useState(false);

  // Константи для розрахунків
  const COLLAPSED_LINES = 5;
  const AUTO_EXPAND_THRESHOLD_LINES = 2;

  const performMeasurements = useCallback(() => {
    if (!contentRef.current) {
      // console.log("performMeasurements: contentRef.current is not available yet.");
      return;
    }

    const el = contentRef.current;
    const computedStyle = getComputedStyle(el);

    // --- Розрахунок lineHeight ---
    let lineHeight = parseFloat(computedStyle.lineHeight);
    if (isNaN(lineHeight) || lineHeight === 0) {
      const fontSize = parseFloat(computedStyle.fontSize);
      if (isNaN(fontSize) || fontSize === 0) {
        lineHeight = 16; // Запасне значення, якщо font-size теж не визначився
        // console.warn(`Could not determine font-size or line-height. Defaulting lineHeight to ${lineHeight}px.`);
      } else {
        lineHeight = fontSize * 1.2; // Стандартне співвідношення
        // console.log(`lineHeight was NaN/0, recalculated from fontSize: ${fontSize}, new lineHeight: ${lineHeight}`);
      }
    }
    // console.log(`Final lineHeight: ${lineHeight}`);

    // --- Розрахунок fullHeight ---
    const originalOverflow = el.style.overflow;
    el.style.overflow = "visible"; // Тимчасово для коректного scrollHeight
    const fullHeightRaw = el.scrollHeight;
    el.style.overflow = originalOverflow; // Повертаємо назад

    // Гарантуємо, що fullHeight не нуль і не NaN
    const finalFullHeight = Math.max(fullHeightRaw, lineHeight * COLLAPSED_LINES + 20); // Забезпечуємо мінімальну висоту, якщо контент дуже короткий або не провантажився
    // console.log(`Final full height: ${finalFullHeight}`);

    // --- Розрахунок collapsedHeight ---
    const calculatedCollapsedHeight = lineHeight * COLLAPSED_LINES + (COLLAPSED_LINES > 0 ? 1 : 0);
    const finalCollapsedHeight = Math.max(0, calculatedCollapsedHeight); // Гарантуємо, що не від'ємне
    // console.log(`Final collapsed height: ${finalCollapsedHeight}`);

    setInitialContentHeight(finalCollapsedHeight);
    setFullContentHeight(finalFullHeight);

    // --- Перевірка на довгий контент ---
    const hiddenHeight = finalFullHeight - finalCollapsedHeight;
    const autoExpandThresholdPx = lineHeight * AUTO_EXPAND_THRESHOLD_LINES;
    setIsContentLong(hiddenHeight > autoExpandThresholdPx + 5); // Додаємо невеликий запас
    // console.log(`isContentLong: ${hiddenHeight > autoExpandThresholdPx + 5}`);
  }, [COLLAPSED_LINES, AUTO_EXPAND_THRESHOLD_LINES]);

  // Забезпечуємо, що вимірювання відбуваються після рендера та при зміні розмірів
  useLayoutEffect(() => {
    const rafId = requestAnimationFrame(performMeasurements);
    return () => cancelAnimationFrame(rafId);
  }, [performMeasurements]);

  useEffect(() => {
    const currentContentElement = contentRef.current;
    if (!currentContentElement) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === currentContentElement) {
          requestAnimationFrame(performMeasurements);
        }
      }
    });

    resizeObserver.observe(currentContentElement);

    // Додаткова затримка для початкового рендеру
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(performMeasurements);
    }, 150); // Збільшено затримку на всяк випадок

    return () => {
      resizeObserver.unobserve(currentContentElement);
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [performMeasurements]);

  const handleBlur = useCallback(
    e => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        collapseCard(index);
      }
    },
    [index, collapseCard]
  );

  // Використовуємо безпечне значення для maxHeight, щоб уникнути NaN або від'ємних
  const currentMaxHeight = isExpanded || !isContentLong ? fullContentHeight : initialContentHeight;
  const safeMaxHeight = Math.max(0, currentMaxHeight || 0);

  return (
    <CardWrapper onBlur={handleBlur} tabIndex={isContentLong ? 0 : -1} aria-expanded={isExpanded}>
      <CardHeader>
        <Emoji role="img" aria-label={`Emoji for ${card.title}`}>
          {card.emoji}
        </Emoji>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContentWrapper
        ref={contentRef}
        style={{ maxHeight: `${safeMaxHeight}px` }} // Інлайн-стиль для анімації
      >
        {card.content}
      </CardContentWrapper>
      {isContentLong && (
        <ReadMoreButton
          onClick={e => {
            e.stopPropagation();
            toggleExpand(index);
          }}
          aria-controls={`card-content-${index}`}
          tabIndex={0}
        >
          {isExpanded ? (
            <>
              Згорнути{" "}
              <span
                style={{
                  display: "inline-block",
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                ▲
              </span>
            </>
          ) : (
            <>
              Читати далі{" "}
              <span
                style={{
                  display: "inline-block",
                  transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                ▼
              </span>
            </>
          )}
        </ReadMoreButton>
      )}
    </CardWrapper>
  );
});

// --- ListCards Component ---
const ListCards = ({ title, cards }) => {
  const [expandedCards, dispatch] = useReducer(expansionReducer, {});

  const toggleExpand = useCallback(index => {
    dispatch({ type: "TOGGLE", payload: index });
  }, []);

  const collapseCard = useCallback(index => {
    dispatch({ type: "SET", payload: { index, isExpanded: false } });
  }, []);

  return (
    <ListContainer>
      {title && <Title>{title}</Title>}
      <CardsGrid>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            isExpanded={!!expandedCards[index]}
            toggleExpand={toggleExpand}
            collapseCard={collapseCard}
          />
        ))}
      </CardsGrid>
    </ListContainer>
  );
};

export default ListCards;
