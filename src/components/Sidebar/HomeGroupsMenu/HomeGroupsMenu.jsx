import React, { useState } from "react";
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

export default function HomeGroupsMenu({ collapsed }) {
  const { setSelectedHomeGroupLesson, selectedHomeGroupLesson, setSelectedHomeGroupBook } =
    useHomeGroups();

  const [openSections, setOpenSections] = useState({
    "old-testament-books": false,
    "new-testament-books": false,
    thematic: false,
    special: false,
    openBook: null,
  });

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

  const renderLessonItems = lessons => (
    <List $collapsed={collapsed}>
      {lessons.map((lesson, index) => (
        <ListItem
          key={lesson.id}
          as="button"
          $isActive={selectedHomeGroupLesson === lesson.id}
          $collapsed={collapsed}
          $isLesson={true} // <--- Вказуємо, що це елемент уроку
          onClick={() => setSelectedHomeGroupLesson(lesson.id)}
        >
          {collapsed ? (
            <CircularNumber $collapsed={collapsed}>{index + 1}</CircularNumber>
          ) : (
            lesson.title
          )}
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {homeGroupCategories.map((category, categoryIndex) => (
        <Section key={category.id}>
          <SectionTitle
            $collapsed={collapsed}
            role="button"
            tabIndex={0}
            onClick={() => toggleSection(category.id)}
            onKeyDown={e => ["Enter", " "].includes(e.key) && toggleSection(category.id)}
          >
            {collapsed ? (
              <SectionCategoryNumber $collapsed={collapsed}>
                {categoryIndex + 1}
              </SectionCategoryNumber>
            ) : (
              category.label
            )}
            {!collapsed && (
              <Toggle
                as="span"
                style={{ transform: openSections[category.id] ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                {openSections[category.id] ? "−" : "▶"}
              </Toggle>
            )}
          </SectionTitle>

          {openSections[category.id] && (
            <>
              {(category.id === "old-testament-books" || category.id === "new-testament-books") && (
                <List $collapsed={collapsed}>
                  {category.items
                    .filter(
                      book =>
                        homeGroupsContent[book.internalKey] &&
                        homeGroupsContent[book.internalKey].length > 0
                    )
                    .map(book => (
                      <React.Fragment key={book.internalKey}>
                        <ListItem
                          $collapsed={collapsed}
                          as="button"
                          role="button"
                          tabIndex={0}
                          onClick={() => handleBookToggle(book.internalKey)}
                          onKeyDown={e =>
                            ["Enter", " "].includes(e.key) && handleBookToggle(book.internalKey)
                          }
                        >
                          {collapsed ? getBookShortLabel(book.full) : book.full}{" "}
                          {!collapsed && (
                            <Toggle
                              $collapsed={collapsed}
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
                        {openSections.openBook === book.internalKey &&
                          homeGroupsContent[book.internalKey] &&
                          renderLessonItems(homeGroupsContent[book.internalKey])}
                      </React.Fragment>
                    ))}
                </List>
              )}

              {(category.type === "thematic" || category.type === "special") &&
                homeGroupsContent[category.id] &&
                renderLessonItems(homeGroupsContent[category.id])}
            </>
          )}
        </Section>
      ))}
    </>
  );
}
