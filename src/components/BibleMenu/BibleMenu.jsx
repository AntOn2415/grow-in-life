import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
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

export default function BibleMenu({ isRightSidebarSplit, toggleRightSidebarSplit, isMobile }) {
  const { bookKey, chapter, verse, testament, highlightedVerses, navigateTo, navId, navSource } =
    useContext(BibleContext);

  const [bookData, setBookData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isSidebarSplitBeforeModalRef = useRef(false);
  const contentRef = useRef(null);

  const lastOpenedNavIdRef = useRef(null);
  const isUserClosingRef = useRef(false);

  useEffect(() => {
    if (!bookKey || !testament) return;
    const fetchBook = async () => {
      setIsLoading(true);
      try {
        const data = await import(`../../data/booksBible/${testament}/${bookKey}.json`);
        setBookData(data.default);
      } catch (error) {
        console.error(`Не вдалося завантажити книгу: ${bookKey}`, error);
        setBookData(null);
      }
      setIsLoading(false);
    };
    fetchBook();
  }, [bookKey, testament]);

  useEffect(() => {
    if (!bookKey) return;

    const isNewNavigation = navId && navId !== lastOpenedNavIdRef.current;

    if (isNewNavigation) {
      lastOpenedNavIdRef.current = navId;
      isUserClosingRef.current = false;

      if (isMobile && navSource === "text") {
        if (!isRightSidebarSplit) {
          toggleRightSidebarSplit();
        }
      } else if (!isMobile) {
        if (!isRightSidebarSplit) {
          toggleRightSidebarSplit();
        }
      }
    }
  }, [
    navId,
    bookKey,
    chapter,
    verse,
    isRightSidebarSplit,
    toggleRightSidebarSplit,
    isMobile,
    navSource,
  ]);

  const handleCloseSidebar = () => {
    isUserClosingRef.current = true;
    toggleRightSidebarSplit();
  };

  const handleNextChapter = () => {
    if (bookData && chapter < bookData.chapters.length) {
      navigateTo(`[${bookKey}:${chapter + 1}]`);
    }
  };

  const handleOpenMenu = () => {
    isSidebarSplitBeforeModalRef.current = isRightSidebarSplit;
    if (!isRightSidebarSplit) {
      toggleRightSidebarSplit();
    }
    setShowModal(true);
    isUserClosingRef.current = false;
  };

  const handleSelectBookAndChapter = (newBookKey, newChapter) => {
    navigateTo(`[${newBookKey}:${newChapter}]`, "menu");
    setShowModal(false);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    if (isMobile) {
      const sidebarStateBeforeModal = isSidebarSplitBeforeModalRef.current;
      if (isRightSidebarSplit !== sidebarStateBeforeModal) {
        toggleRightSidebarSplit();
      }
    }
  }, [isMobile, isRightSidebarSplit, toggleRightSidebarSplit]);

  useEffect(() => {
    if (!isRightSidebarSplit && showModal) {
      handleCloseModal();
    }
  }, [isRightSidebarSplit, showModal, handleCloseModal]);

  return (
    <BibleMenuWrapper>
      <NavigationContainer>
        {/* Кнопка закриття бічної панелі (для мобільних) */}
        {isMobile && (
          <NavigationButton onClick={handleCloseSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 5L10 19L14 19L14 5L10 5ZM4 5L4 19L8 19L8 5L4 5ZM16 5L16 19L20 19L20 5L16 5Z" />
            </svg>
          </NavigationButton>
        )}

        {/* Заголовок для мобільних пристроїв, якщо є bookData */}
        {isMobile && bookData ? (
          <MobileHeader onClick={handleOpenMenu}>
            {bookData.book_name_ua} {chapter}
          </MobileHeader>
        ) : (
          isMobile && ( // Умова: якщо це мобільний і bookData === null
            <NavigationButton onClick={handleOpenMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4ZM6 6V18H18V6H6ZM8 8H16V16H8V8Z" />
              </svg>
            </NavigationButton>
          )
        )}

        {/* Кнопка відкриття меню (для десктопів) */}
        <AnimatePresence>
          {!isMobile && !showModal && (
            <motion.div
              key="menu-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <NavigationButton onClick={handleOpenMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4ZM6 6V18H18V6H6ZM8 8H16V16H8V8Z" />
                </svg>
              </NavigationButton>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationContainer>

      <ContentContainer ref={contentRef}>
        {isLoading && <p>Завантаження...</p>}
        {bookData && !isLoading && (
          <BibleTextDisplay
            bookData={bookData}
            chapter={chapter}
            verseToScroll={verse}
            highlightedVerses={highlightedVerses}
            onNextChapter={handleNextChapter}
            isMobile={isMobile}
          />
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
