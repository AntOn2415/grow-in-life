import React, { useState, useEffect, useCallback, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BibleMenuWrapper,
  NavigationContainer,
  NavigationButton,
  ContentContainer,
  MobileHeader,
} from "./BibleMenu.styled";
import BibleTextDisplay from "./BibleTextDisplay/BibleTextDisplay";
import ContentSelectorModal from "./ContentSelector/ContentSelectorModal";
import { BibleContext } from "../../contexts/BibleContext";
import Placeholder from "./Placeholder";

export default function BibleMenu({ isRightSidebarSplit, toggleRightSidebarSplit, isMobile }) {
  const { bookKey, chapter, verse, testament, highlightedVerses, navigateTo, navId } =
    useContext(BibleContext);

  const [bookData, setBookData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!bookKey || !testament) return;
    const fetchBook = async () => {
      setIsLoading(true);
      try {
        const { default: bookData } = await import(
          `../../data/booksBible/${testament}/${bookKey}.json`
        );
        // ✅ Використовуємо book_name_en як bookKey
        bookData.book_key = bookData.book_name_en;
        setBookData(bookData);
      } catch (error) {
        console.error(`Не вдалося завантажити книгу: ${bookKey}`, error);
        setBookData(null);
      }
      setIsLoading(false);
    };
    fetchBook();
  }, [bookKey, testament]);

  useEffect(() => {
    if (navId) {
      setShowModal(false);
    }
  }, [navId]);

  useEffect(() => {
    if (!isRightSidebarSplit) {
      setShowModal(false);
    }
  }, [isRightSidebarSplit]);

  const handleOpenMenu = () => {
    setShowModal(true);
  };

  const handleSelectBookAndChapter = (newBookKey, newChapter) => {
    navigateTo(`[${newBookKey}:${newChapter}]`, "menu");
    setShowModal(false);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleNavigationButtonClick = () => {
    if (!isRightSidebarSplit) {
      toggleRightSidebarSplit(true);
    }
    setShowModal(true);
  };

  return (
    <BibleMenuWrapper>
      <NavigationContainer>
        {isMobile && (
          <NavigationButton onClick={() => toggleRightSidebarSplit(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 5L10 19L14 19L14 5L10 5ZM4 5L4 19L8 19L8 5L4 5ZM16 5L16 19L20 19L20 5L16 5Z" />
            </svg>
          </NavigationButton>
        )}

        {isMobile && bookData ? (
          <MobileHeader onClick={handleOpenMenu}>
            {bookData.book_name_ua} {chapter}
          </MobileHeader>
        ) : (
          isMobile && (
            <NavigationButton onClick={handleOpenMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4ZM6 6V18H18V6H6ZM8 8H16V16H8V8Z" />
              </svg>
            </NavigationButton>
          )
        )}

        <AnimatePresence>
          {!isMobile && (
            <motion.div
              key="menu-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <NavigationButton onClick={handleNavigationButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4ZM6 6V18H18V6H6ZM8 8H16V16H8V8Z" />
                </svg>
              </NavigationButton>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationContainer>

      <ContentContainer>
        {isLoading && <p>Завантаження...</p>}
        {!bookData && !isLoading ? (
          <Placeholder onClick={handleNavigationButtonClick} />
        ) : (
          bookData &&
          !isLoading && (
            <BibleTextDisplay
              bookData={bookData}
              chapter={chapter}
              verseToScroll={verse}
              highlightedVerses={highlightedVerses}
              isMobile={isMobile}
              onNextChapter={navigateTo}
            />
          )
        )}
      </ContentContainer>

      <AnimatePresence>
        {showModal && (
          <ContentSelectorModal
            key="modal"
            onClose={handleCloseModal}
            onSelect={handleSelectBookAndChapter}
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>
    </BibleMenuWrapper>
  );
}
