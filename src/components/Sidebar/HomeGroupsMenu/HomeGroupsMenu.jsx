// src/Sidebar/HomeGroupsMenu/HomeGroupsMenu.jsx
import React, { useState } from "react";
import { Section, SectionTitle, List, ListItem, Toggle } from "./HomeGroupsMenu.styled";
import {
  homeGroupCategories,
  oldTestamentBooksList,
  newTestamentBooksList,
} from "../../../data/homeGroups/homeGroupCategories";
import { homeGroupsContent } from "../../../data/homeGroups/homeGroupsContent";
import { useHomeGroups } from "../../../contexts/HomeGroupsContext"; // Use the new context

export default function HomeGroupsMenu({ collapsed }) {
  const { setSelectedHomeGroupLesson, selectedHomeGroupLesson, setSelectedHomeGroupBook } =
    useHomeGroups(); // Use new context properties

  // State to manage which sections and books are open
  const [openSections, setOpenSections] = useState({
    "old-testament-books": false,
    "new-testament-books": false,
    thematic: false,
    special: false,
    openBook: null, // Tracks which book (by internalKey) is open
  });

  // Toggles the main category sections (Old Testament, New Testament, Thematic, Special)
  const toggleSection = id => {
    setOpenSections(prev => {
      const newState = {
        ...prev,
        [id]: !prev[id], // Toggle the clicked section
      };

      // If opening a new main category, close any currently open book
      // Also, if closing a main category that had an open book, close that book.
      if (id !== prev.openSectionId && prev.openBook) {
        newState.openBook = null;
      }
      return newState;
    });
  };

  // Toggles the specific book list within a "books" section
  const handleBookToggle = bookInternalKey => {
    setOpenSections(prev => ({
      ...prev,
      openBook: prev.openBook === bookInternalKey ? null : bookInternalKey,
    }));
    setSelectedHomeGroupBook(bookInternalKey); // Set the selected book in context
  };

  // Helper to get the short label for a book (needed for collapsed state)
  const getBookShortLabel = bookFullname => {
    // Search in both Old and New Testament lists
    const book = [...oldTestamentBooksList, ...newTestamentBooksList].find(
      b => b.full === bookFullname
    );
    return book ? book.short : bookFullname;
  };

  // Renders the list of lessons/items within a book or category
  const renderLessonItems = lessons => (
    <List style={{ marginLeft: collapsed ? 0 : 16 }}>
      {lessons.map((lesson, index) => (
        <ListItem
          key={lesson.id}
          as="button"
          // Add $isActive prop for styling the currently selected lesson
          $isActive={selectedHomeGroupLesson === lesson.id}
          onClick={() => setSelectedHomeGroupLesson(lesson.id)}
        >
          {collapsed // If sidebar is collapsed, show number
            ? `${index + 1}`
            : // If expanded, show lesson title
              lesson.title}
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {homeGroupCategories.map(category => (
        <Section key={category.id}>
          <SectionTitle
            role="button"
            tabIndex={0}
            onClick={() => toggleSection(category.id)}
            onKeyDown={e => ["Enter", " "].includes(e.key) && toggleSection(category.id)}
          >
            {category.label}
            <Toggle
              as="span"
              style={{ transform: openSections[category.id] ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {" "}
              {/* Add rotation for visual toggle */}
              {openSections[category.id] ? "−" : "▶"} {/* Changed + to ▶ for arrow indication */}
            </Toggle>
          </SectionTitle>

          {openSections[category.id] && ( // Only render if the main section is open
            <>
              {/* Render books for Old and New Testament categories */}
              {(category.id === "old-testament-books" || category.id === "new-testament-books") && (
                <List>
                  {category.items
                    .filter(
                      book =>
                        homeGroupsContent[book.internalKey] &&
                        homeGroupsContent[book.internalKey].length > 0
                    ) // Only show books that actually have lessons
                    .map(book => (
                      <React.Fragment key={book.internalKey}>
                        <ListItem
                          as="button"
                          role="button"
                          tabIndex={0}
                          onClick={() => handleBookToggle(book.internalKey)}
                          onKeyDown={e =>
                            ["Enter", " "].includes(e.key) && handleBookToggle(book.internalKey)
                          }
                          // Add $isActive prop for styling the currently open book (optional, if you want it styled differently)
                          // $isActive={openSections.openBook === book.internalKey}
                        >
                          {collapsed // If sidebar collapsed, show short label
                            ? getBookShortLabel(book.full)
                            : // If expanded, show full name
                              book.full}{" "}
                          <Toggle
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
                        </ListItem>
                        {/* Render lessons if the book is open and has content */}
                        {openSections.openBook === book.internalKey &&
                          homeGroupsContent[book.internalKey] &&
                          renderLessonItems(homeGroupsContent[book.internalKey])}
                      </React.Fragment>
                    ))}
                </List>
              )}

              {/* Render lessons for Thematic and Special categories */}
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
