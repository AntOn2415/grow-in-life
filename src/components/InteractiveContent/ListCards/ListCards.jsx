import React, { useState, useRef, useEffect, useCallback } from "react";

import {
  ListCardsContainer,
  CardItem,
  CardTitle,
  CardContent,
  CardEmoji,
  ReadMoreButton,
  ExpandedContentWrapper,
} from "./ListCards.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";

// Функція для плавного скролу
const smoothScrollTo = (element, target, duration = 300) => {
  let animationFrameId;
  const start = element.scrollTop;
  const change = target - start;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    // Використовуємо функцію згладжування (ease-in-out)
    // easeInOutQuad: f(t) = 2t^2 for t < 0.5, else 1 - 2(1-t)^2
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress =
      progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

    element.scrollTop = start + change * easeProgress;

    if (elapsed < duration) {
      animationFrameId = requestAnimationFrame(animateScroll);
    }
  }

  animationFrameId = requestAnimationFrame(animateScroll);

  return () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };
};

const ListCards = ({ title, cards }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showReadMore, setShowReadMore] = useState({});
  // НОВИЙ СТАН: для збереження позиції скролу вікна перед відкриттям картки
  const [windowScrollPosition, setWindowScrollPosition] = useState(0);

  const contentRefs = useRef([]); // Для перевірки чи потрібна кнопка "Читати далі"
  const expandedContentInnerRefs = useRef([]); // Для вмісту всередині розгорнутої картки
  const expandedWrapperRefs = useRef([]); // Для самої розгорнутої картки (обгортки)
  const cancelScrollRef = useRef(null); // Для зберігання функції відміни скролу

  // Визначення, чи потрібна кнопка "Читати далі" (тільки при початковому рендері або зміні карт)
  useEffect(() => {
    const newShowReadMore = {};
    contentRefs.current.forEach((ref, index) => {
      // Додаємо невеликий допуск, щоб уникнути помилок округлення
      if (ref) {
        newShowReadMore[index] = ref.scrollHeight > ref.clientHeight + 4;
      }
    });
    setShowReadMore(newShowReadMore);
  }, [cards]);

  // Обробник кліку поза карткою для закриття
  const handleClickOutside = useCallback(
    e => {
      if (activeIndex !== null) {
        const activeCardWrapper = expandedWrapperRefs.current[activeIndex];
        if (activeCardWrapper && !activeCardWrapper.contains(e.target)) {
          if (cancelScrollRef.current) cancelScrollRef.current(); // Відміняємо попередній скрол
          cancelScrollRef.current = smoothScrollTo(activeCardWrapper, 0, 500); // Скролимо догори
          setTimeout(() => {
            setActiveIndex(null); // Закриваємо картку після скролу
            cancelScrollRef.current = null;
            // Відновлюємо скрол вікна після закриття картки
            window.scrollTo({ top: windowScrollPosition, behavior: "smooth" });
          }, 500); // Час має відповідати тривалості smoothScrollTo
        }
      }
    },
    [activeIndex, windowScrollPosition] // Додаємо windowScrollPosition в залежності
  );

  // Додаємо/видаляємо слухача подій для кліку поза карткою
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Обробник натискання кнопки "Читати далі"
  const handleReadMoreClick = index => {
    if (activeIndex === index) {
      // Якщо картка вже відкрита, закриваємо її
      const expandedWrapper = expandedWrapperRefs.current[index];
      if (expandedWrapper) {
        if (cancelScrollRef.current) cancelScrollRef.current(); // Відміняємо будь-який активний скрол
        cancelScrollRef.current = smoothScrollTo(expandedWrapper, 0, 500); // Плавний скрол догори
        setTimeout(() => {
          setActiveIndex(null); // Закриваємо картку після завершення скролу
          cancelScrollRef.current = null;
          // Відновлюємо скрол вікна після закриття картки
          window.scrollTo({ top: windowScrollPosition, behavior: "smooth" });
        }, 500); // Час тайм-ауту має відповідати тривалості smoothScrollTo
      } else {
        setActiveIndex(null); // На випадок, якщо wrapper ще не існує
      }
    } else {
      // Якщо картка закрита, відкриваємо її
      // Зберігаємо поточну позицію скролу вікна перед відкриттям
      setWindowScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
      setActiveIndex(index);
    }
  };

  // Ефект для скролу до початку контенту при відкритті картки
  useEffect(() => {
    if (activeIndex !== null) {
      const wrapper = expandedWrapperRefs.current[activeIndex];
      const inner = expandedContentInnerRefs.current[activeIndex];

      if (wrapper && inner) {
        // Використовуємо requestAnimationFrame для забезпечення, що DOM оновився
        requestAnimationFrame(() => {
          if (cancelScrollRef.current) cancelScrollRef.current(); // Відміняємо попередній скрол

          const firstContentElement = inner.querySelector(
            "p, div, span, h1, h2, h3, h4, h5, h6, ul, ol"
          );

          let targetScrollTop = 0;
          if (firstContentElement) {
            targetScrollTop = firstContentElement.offsetTop;
          } else {
            // Запасний варіант, якщо елементи контенту не знайдені
            targetScrollTop = inner.offsetTop + (1.3 * 16 + 0.8 * 16) + 20;
          }

          cancelScrollRef.current = smoothScrollTo(wrapper, targetScrollTop, 500); // Плавний скрол
        });
      }
    }
    // При розмонтуванні компонента або зміні activeIndex, очищаємо поточний скрол
    return () => {
      if (cancelScrollRef.current) {
        cancelScrollRef.current();
        cancelScrollRef.current = null;
      }
    };
  }, [activeIndex]);

  return (
    <>
      {title && (
        <SectionHeading
          as="h3"
          size="default"
          style={{
            marginTop: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {title}
        </SectionHeading>
      )}
      <ListCardsContainer>
        {cards.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <CardItem key={index} $isActive={isActive}>
              {!isActive && (
                <>
                  {card.emoji && <CardEmoji>{card.emoji}</CardEmoji>}
                  {card.title && <CardTitle>{card.title}</CardTitle>}
                  <CardContent
                    ref={el => {
                      if (el) contentRefs.current[index] = el;
                    }}
                    $isActive={isActive}
                  >
                    {card.content}
                  </CardContent>
                  {showReadMore[index] && (
                    <ReadMoreButton onClick={() => handleReadMoreClick(index)}>
                      Читати далі...
                    </ReadMoreButton>
                  )}
                </>
              )}

              {isActive && (
                <ExpandedContentWrapper ref={el => (expandedWrapperRefs.current[index] = el)}>
                  {card.emoji && <CardEmoji>{card.emoji}</CardEmoji>}
                  {card.title && <CardTitle>{card.title}</CardTitle>}
                  <div ref={el => (expandedContentInnerRefs.current[index] = el)}>
                    {card.content}
                  </div>
                </ExpandedContentWrapper>
              )}
            </CardItem>
          );
        })}
      </ListCardsContainer>
    </>
  );
};

export default ListCards;
