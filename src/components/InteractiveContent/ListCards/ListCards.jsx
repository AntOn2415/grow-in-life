// src/components/ListCards/ListCards.jsx
import React, {
  useState,
  useReducer,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const COLLAPSED_LINES = 5;
  const AUTO_EXPAND_THRESHOLD_LINES = 2;

  const performMeasurements = useCallback(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const computedStyle = getComputedStyle(el);

    let lineHeight = parseFloat(computedStyle.lineHeight);
    if (isNaN(lineHeight)) {
      const fontSize = parseFloat(computedStyle.fontSize);
      lineHeight = fontSize * 1.2;
    }

    const originalOverflow = el.style.overflow;
    el.style.overflow = "visible";
    const fullHeight = el.scrollHeight;
    el.style.overflow = originalOverflow;

    const calculatedCollapsedHeight = lineHeight * COLLAPSED_LINES + (COLLAPSED_LINES > 0 ? 1 : 0);
    setInitialContentHeight(calculatedCollapsedHeight);
    setFullContentHeight(fullHeight);

    const hiddenHeight = fullHeight - calculatedCollapsedHeight;
    const autoExpandThresholdPx = lineHeight * AUTO_EXPAND_THRESHOLD_LINES;

    setIsContentLong(hiddenHeight > autoExpandThresholdPx + 5);
  }, [COLLAPSED_LINES]);

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

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(performMeasurements);
    }, 100);

    return () => {
      resizeObserver.unobserve(currentContentElement);
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [performMeasurements]);

  const handleBlur = useCallback(
    e => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        // Залишаємо onBlur для згортання, якщо користувач відійшов фокусом від картки
        collapseCard(index);
      }
    },
    [index, collapseCard]
  );

  const currentMaxHeight = isExpanded || !isContentLong ? fullContentHeight : initialContentHeight;
  return (
    <CardWrapper
      variants={{
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            mass: 0.8,
          },
        },
      }}
      layout
      // ✅ ВИДАЛЕНО onClick З CardWrapper
      onBlur={handleBlur}
      // tabIndex залишаємо 0, щоб картка була фокусованою для onBlur, якщо є довгий контент.
      // Але вона не буде розгортатися/згортатися за допомогою клавіатури, окрім кнопки.
      tabIndex={isContentLong ? 0 : -1}
      aria-expanded={isExpanded}
      whileHover={{ scale: 1.01, translateY: -1 }}
      whileFocus={{ scale: 1.01, translateY: -1 }}
    >
      <CardHeader>
        <Emoji role="img" aria-label={`Emoji for ${card.title}`}>
          {card.emoji}
        </Emoji>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContentWrapper
        ref={contentRef}
        animate={{
          maxHeight: currentMaxHeight,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        // ✅ ВИДАЛЕНО onClick З CardContentWrapper
      >
        {card.content}
      </CardContentWrapper>
      <AnimatePresence>
        {isContentLong && (
          <ReadMoreButton
            onClick={e => {
              e.stopPropagation(); // Залишаємо, щоб уникнути спливання, якщо батьківський елемент мав би onClick
              toggleExpand(index); // Ця кнопка тепер єдиний спосіб розгорнути/згорнути
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-controls={`card-content-${index}`}
            tabIndex={0} // Важливо, щоб кнопка була фокусованою для клавіатури
          >
            {isExpanded ? (
              <>
                Згорнути{" "}
                <motion.span animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  ▲
                </motion.span>
              </>
            ) : (
              <>
                Читати далі{" "}
                <motion.span animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  ▼
                </motion.span>
              </>
            )}
          </ReadMoreButton>
        )}
      </AnimatePresence>
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

  const containerVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <ListContainer>
      {title && <Title>{title}</Title>}
      <CardsGrid as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <AnimatePresence>
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
        </AnimatePresence>
      </CardsGrid>
    </ListContainer>
  );
};

export default ListCards;
