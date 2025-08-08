import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import {
  BibleMenuWrapper,
  NavigationContainer,
  NavigationButton,
  ContentContainer,
} from "./BibleMenu.styled";
import BibleTextDisplay from "./BibleTextDisplay/BibleTextDisplay";
import ContentSelectorModal from "./ContentSelector/ContentSelectorModal";

const loadBookJson = async (bookKey, testament) => {
  try {
    const data = await import(`../../data/booksBible/${testament}/${bookKey}.json`);
    return data.default;
  } catch (error) {
    console.error(`Не вдалося завантажити книгу: ${bookKey}`, error);
    return null;
  }
};

export default function BibleMenu({ isRightSidebarSplit, toggleRightSidebarSplit, isMobile }) {
  const [bookKey, setBookKey] = useState("matthew");
  const [chapter, setChapter] = useState(1);
  const [testament, setTestament] = useState("new-testament");

  const [bookData, setBookData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarSplitBeforeModal, setIsSidebarSplitBeforeModal] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      const data = await loadBookJson(bookKey, testament);
      setBookData(data);
      setIsLoading(false);
    };
    fetchBook();
  }, [bookKey, testament]);

  const handleNextChapter = () => {
    if (bookData && chapter < bookData.chapters.length) {
      setChapter(prevChapter => prevChapter + 1);
    }
  };

  const handleSelectBookAndChapter = (newBookKey, newChapter, newTestament) => {
    setBookKey(newBookKey);
    setChapter(newChapter);
    setTestament(newTestament);
    setShowModal(false);

    // **Зміни тут: закриваємо сайдбар, якщо не мобільна версія і сайдбар відкритий**
    if (!isMobile && isRightSidebarSplit) {
      toggleRightSidebarSplit();
    }
  };

  const handleOpenMenu = () => {
    setIsSidebarSplitBeforeModal(isRightSidebarSplit);
    if (!isRightSidebarSplit) {
      toggleRightSidebarSplit();
    }
    setShowModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    if (isSidebarSplitBeforeModal === false && isRightSidebarSplit === true) {
      toggleRightSidebarSplit();
    }
  }, [isSidebarSplitBeforeModal, isRightSidebarSplit, toggleRightSidebarSplit]);

  useEffect(() => {
    if (isRightSidebarSplit === false && showModal === true) {
      handleCloseModal();
    }
  }, [isRightSidebarSplit, showModal, handleCloseModal]);

  return (
    <BibleMenuWrapper>
      <NavigationContainer>
        <NavigationButton onClick={handleOpenMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4ZM6 6V18H18V6H6ZM8 8H16V16H8V8Z" />
          </svg>
        </NavigationButton>
        {isMobile && (
          <NavigationButton onClick={toggleRightSidebarSplit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 5L10 19L14 19L14 5L10 5ZM4 5L4 19L8 19L8 5L4 5ZM16 5L16 19L20 19L20 5L16 5Z" />
            </svg>
          </NavigationButton>
        )}
      </NavigationContainer>

      <ContentContainer ref={contentRef}>
        {isLoading && <p>Завантаження...</p>}
        {bookData && !isLoading && (
          <BibleTextDisplay
            bookData={bookData}
            chapter={chapter}
            onNextChapter={handleNextChapter}
          />
        )}
      </ContentContainer>

      <AnimatePresence>
        {showModal && (
          <ContentSelectorModal
            key="modal" // Додано унікальний key
            onClose={handleCloseModal}
            onSelect={handleSelectBookAndChapter}
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>
    </BibleMenuWrapper>
  );
}
