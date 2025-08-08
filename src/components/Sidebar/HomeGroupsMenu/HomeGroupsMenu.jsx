import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Section,
  SectionTitle,
  List,
  ListItem,
  Toggle,
  CircularNumber,
  SectionCategoryNumber,
} from "./HomeGroupsMenu.styled";
import {
  homeGroupCategories,
  oldTestamentBooksList,
  newTestamentBooksList,
} from "../../../data/homeGroups/homeGroupCategories";
import { homeGroupsContent } from "../../../data/homeGroups/homeGroupsContent";
import { useHomeGroups } from "../../../contexts/HomeGroupsContext";
import Tooltip from "../../Common/Tooltip/Tooltip";

// ✅ 1. Нова функція для отримання початкового стану з localStorage
const getInitialOpenSections = () => {
  try {
    const savedState = localStorage.getItem("openSections");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Failed to parse openSections from localStorage", error);
  }
  return {
    "old-testament-books": false,
    "new-testament-books": false,
    thematic: false,
    special: false,
    openBook: null,
  };
};

export default function HomeGroupsMenu({ isCollapsed, onNavLinkClick, isMobile }) {
  const { setSelectedHomeGroupLesson, selectedHomeGroupLesson, setSelectedHomeGroupBook } =
    useHomeGroups();

  // ✅ 2. Використовуємо функцію для ініціалізації стану
  const [openSections, setOpenSections] = useState(getInitialOpenSections);

  const [showContent, setShowContent] = useState(!isCollapsed);
  const [showCollapsedItems, setShowCollapsedItems] = useState(isCollapsed);

  const animationDuration = 250;

  // ✅ 3. Новий useEffect для збереження стану в localStorage
  useEffect(() => {
    try {
      localStorage.setItem("openSections", JSON.stringify(openSections));
    } catch (error) {
      console.error("Failed to save openSections to localStorage", error);
    }
  }, [openSections]); // Залежність від openSections

  useEffect(() => {
    let timer1, timer2;

    if (!isCollapsed) {
      setShowContent(true);
      timer1 = setTimeout(() => setShowCollapsedItems(false), 50);
    } else {
      timer2 = setTimeout(() => setShowContent(false), animationDuration - 50);
      setShowCollapsedItems(true);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isCollapsed, animationDuration]);

  const toggleSection = id => {
    setOpenSections(prev => {
      const newState = {
        ...prev,
        [id]: !prev[id],
      };

      if (id !== prev.openSectionId && prev.openBook) {
        newState.openBook = null;
      }
      return newState;
    });
  };

  const handleBookToggle = bookInternalKey => {
    setOpenSections(prev => ({
      ...prev,
      openBook: prev.openBook === bookInternalKey ? null : bookInternalKey,
    }));
    setSelectedHomeGroupBook(bookInternalKey);
  };

  const getBookShortLabel = bookFullname => {
    const book = [...oldTestamentBooksList, ...newTestamentBooksList].find(
      b => b.full === bookFullname
    );
    return book ? book.short : bookFullname;
  };

  const textVariants = {
    hidden: { opacity: 0, transition: { duration: 0.15 } },
    visible: { opacity: 1, transition: { duration: 0.25 } },
  };

  const collapsedItemVariants = {
    hidden: { opacity: 0, transition: { duration: 0.15 } },
    visible: { opacity: 1, transition: { duration: 0.25 } },
  };

  const sectionContentVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.15 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.15 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.15 } },
  };

  const renderLessonItems = lessons => {
    if (!lessons || lessons.length === 0) {
      return null;
    }
    return (
      <List isCollapsed={isCollapsed}>
        {lessons.map((lesson, index) => (
          <ListItem
            key={lesson.id}
            as="button"
            $isActive={selectedHomeGroupLesson === lesson.id}
            isCollapsed={isCollapsed}
            $isLesson={true}
            onClick={() => {
              setSelectedHomeGroupLesson(lesson.id);
              if (isMobile) {
                onNavLinkClick();
              }
            }}
          >
            {isCollapsed && showCollapsedItems ? (
              <Tooltip content={lesson.title}>
                <AnimatePresence>
                  <motion.div
                    key={lesson.id + "-circular"}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={collapsedItemVariants}
                  >
                    <CircularNumber isCollapsed={isCollapsed}>{index + 1}</CircularNumber>
                  </motion.div>
                </AnimatePresence>
              </Tooltip>
            ) : (
              showContent && (
                <AnimatePresence>
                  <motion.span
                    key={lesson.id + "-title"}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={textVariants}
                  >
                    {lesson.title}
                  </motion.span>
                </AnimatePresence>
              )
            )}
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <>
      {homeGroupCategories
        .filter(category => {
          if (category.id === "old-testament-books" || category.id === "new-testament-books") {
            return category.items.some(
              book =>
                homeGroupsContent[book.internalKey] &&
                homeGroupsContent[book.internalKey].length > 0
            );
          } else if (category.type === "thematic" || category.type === "special") {
            return homeGroupsContent[category.id] && homeGroupsContent[category.id].length > 0;
          }
          return false;
        })
        .map((category, categoryIndex) => (
          <Section key={category.id}>
            <SectionTitle
              isCollapsed={isCollapsed}
              role="button"
              tabIndex={0}
              onClick={() => toggleSection(category.id)}
              onKeyDown={e => ["Enter", " "].includes(e.key) && toggleSection(category.id)}
            >
              {isCollapsed && showCollapsedItems ? (
                <Tooltip content={category.label}>
                  <AnimatePresence>
                    <motion.div
                      key={category.id + "-category-number"}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={collapsedItemVariants}
                    >
                      <SectionCategoryNumber isCollapsed={isCollapsed}>
                        {categoryIndex + 1}
                      </SectionCategoryNumber>
                    </motion.div>
                  </AnimatePresence>
                </Tooltip>
              ) : (
                showContent && (
                  <AnimatePresence>
                    <motion.span
                      key={category.id + "-label"}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={textVariants}
                    >
                      {category.label}
                    </motion.span>
                  </AnimatePresence>
                )
              )}
              {!isCollapsed && (
                <Toggle
                  as="span"
                  style={{
                    transform: openSections[category.id] ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  {openSections[category.id] ? "−" : "▶"}
                </Toggle>
              )}
            </SectionTitle>

            <AnimatePresence>
              {openSections[category.id] && (
                <motion.div
                  key={category.id + "-content"}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sectionContentVariants}
                  style={{ overflow: "hidden" }}
                >
                  {(category.id === "old-testament-books" ||
                    category.id === "new-testament-books") && (
                    <List isCollapsed={isCollapsed}>
                      {category.items
                        .filter(
                          book =>
                            homeGroupsContent[book.internalKey] &&
                            homeGroupsContent[book.internalKey].length > 0
                        )
                        .map(book => (
                          <React.Fragment key={book.internalKey}>
                            <ListItem
                              isCollapsed={isCollapsed}
                              as="button"
                              role="button"
                              tabIndex={0}
                              onClick={() => handleBookToggle(book.internalKey)}
                              onKeyDown={e =>
                                ["Enter", " "].includes(e.key) && handleBookToggle(book.internalKey)
                              }
                            >
                              {isCollapsed && showCollapsedItems ? (
                                <Tooltip content={book.full}>
                                  <AnimatePresence>
                                    <motion.span
                                      key={book.internalKey + "-short"}
                                      initial="hidden"
                                      animate="visible"
                                      exit="hidden"
                                      variants={collapsedItemVariants}
                                    >
                                      {getBookShortLabel(book.full)}
                                    </motion.span>
                                  </AnimatePresence>
                                </Tooltip>
                              ) : (
                                showContent && (
                                  <AnimatePresence>
                                    <motion.span
                                      key={book.internalKey + "-full"}
                                      initial="hidden"
                                      animate="visible"
                                      exit="hidden"
                                      variants={textVariants}
                                    >
                                      {book.full}
                                    </motion.span>
                                  </AnimatePresence>
                                )
                              )}{" "}
                              {!isCollapsed && (
                                <Toggle
                                  isCollapsed={isCollapsed}
                                  as="span"
                                  style={{
                                    transform:
                                      openSections.openBook === book.internalKey
                                        ? "rotate(90deg)"
                                        : "rotate(0deg)",
                                  }}
                                >
                                  {openSections.openBook === book.internalKey ? "−" : "▶"}
                                </Toggle>
                              )}
                            </ListItem>
                            <AnimatePresence>
                              {openSections.openBook === book.internalKey &&
                                homeGroupsContent[book.internalKey] &&
                                homeGroupsContent[book.internalKey].length > 0 && (
                                  <motion.div
                                    key={book.internalKey + "-lessons"}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={sectionContentVariants}
                                    style={{ overflow: "hidden" }}
                                  >
                                    {renderLessonItems(homeGroupsContent[book.internalKey])}
                                  </motion.div>
                                )}
                            </AnimatePresence>
                          </React.Fragment>
                        ))}
                    </List>
                  )}

                  {(category.type === "thematic" || category.type === "special") &&
                    homeGroupsContent[category.id] &&
                    homeGroupsContent[category.id].length > 0 &&
                    renderLessonItems(homeGroupsContent[category.id])}
                </motion.div>
              )}
            </AnimatePresence>
          </Section>
        ))}
    </>
  );
}
