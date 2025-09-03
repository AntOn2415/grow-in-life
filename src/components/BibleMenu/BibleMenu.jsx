import React, { useState, useEffect, useCallback, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { IoBook } from "react-icons/io5";
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
            {isRightSidebarSplit ? (
              <MdKeyboardDoubleArrowUp size={24} />
            ) : (
              <MdKeyboardDoubleArrowDown size={24} />
            )}
          </NavigationButton>
        )}

        {isMobile && bookData ? (
          <MobileHeader onClick={handleOpenMenu}>
            {bookData.book_name_ua} {chapter}
          </MobileHeader>
        ) : (
          isMobile && (
            <NavigationButton onClick={handleOpenMenu}>
              <IoBook size={24} />
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
                <IoBook size={24} />
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
