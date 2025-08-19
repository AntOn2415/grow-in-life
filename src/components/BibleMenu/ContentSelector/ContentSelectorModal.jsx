import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Portal from "../../Portal/Portal";
import { BibleContext } from "../../../contexts/BibleContext";
import {
  ModalContentWrapper,
  ModalContainer,
  ModalHeader,
  TestamentNav,
  TestamentButton,
  BookList,
  BookItem,
  BookTitle,
  BookTitleBack,
  ChapterGrid,
  ChapterItem,
  CloseButton,
} from "./ContentSelectorModal.styled";
import { BOOK_CATEGORIES } from "../constants";

// Варіанти анімації для мобільної версії
const mobileModalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

// Варіанти анімації для десктопної версії (плавне зникнення)
const desktopModalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ContentSelectorModal = ({ onClose, isMobile }) => {
  // Використовуємо контекст замість пропсу onSelect
  const { navigateTo } = useContext(BibleContext);
  const [selectedTestament, setSelectedTestament] = useState("new-testament");
  const [selectedBookKey, setSelectedBookKey] = useState(null);

  const testamentData = BOOK_CATEGORIES.find(c => c.testament === selectedTestament);
  const selectedBookData = selectedBookKey
    ? testamentData.items.find(b => b.internalKey === selectedBookKey)
    : null;

  const handleSelectChapter = chapterNum => {
    // Використовуємо navigateTo з контексту
    navigateTo(`[${selectedBookKey}:${chapterNum}]`);
    onClose();
  };

  const modalContent = (
    <>
      <ModalHeader>
        <motion.div
          key="modal-desktop-wrapper"
          variants={desktopModalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <TestamentNav>
            <TestamentButton
              $active={selectedTestament === "old-testament"}
              onClick={() => {
                setSelectedTestament("old-testament");
                setSelectedBookKey(null);
              }}
            >
              Старий Заповіт
            </TestamentButton>
            <TestamentButton
              $active={selectedTestament === "new-testament"}
              onClick={() => {
                setSelectedTestament("new-testament");
                setSelectedBookKey(null);
              }}
            >
              Новий Заповіт
            </TestamentButton>
          </TestamentNav>
        </motion.div>
        <CloseButton onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </CloseButton>
      </ModalHeader>

      {!selectedBookKey ? (
        <BookList>
          {testamentData.items.map(book => (
            <BookItem key={book.internalKey} onClick={() => setSelectedBookKey(book.internalKey)}>
              {book.full}
            </BookItem>
          ))}
        </BookList>
      ) : (
        <>
          <BookTitle>
            <BookTitleBack onClick={() => setSelectedBookKey(null)}>←</BookTitleBack>
            {selectedBookData.full}
          </BookTitle>
          <ChapterGrid>
            {Array.from({ length: selectedBookData.chapters }, (_, i) => i + 1).map(chapter => (
              <ChapterItem key={chapter} onClick={() => handleSelectChapter(chapter)}>
                {chapter}
              </ChapterItem>
            ))}
          </ChapterGrid>
        </>
      )}
    </>
  );

  return isMobile ? (
    <Portal>
      <ModalContentWrapper
        variants={mobileModalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ModalContainer isMobile={isMobile}>{modalContent}</ModalContainer>
      </ModalContentWrapper>
    </Portal>
  ) : (
    <motion.div
      key="modal-desktop-wrapper"
      variants={desktopModalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <ModalContainer isMobile={isMobile}>{modalContent}</ModalContainer>
    </motion.div>
  );
};

export default ContentSelectorModal;
