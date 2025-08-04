// src/components/Sidebar/SermonsMenu/SermonsMenu.jsx

import React, { useState } from "react";
import { Section, SectionTitle, List, ListItem, Toggle } from "./SermonsMenu.styled";
import { sermonCategories, ntBooksList } from "../../../data/sermons/sermonCategories";
import { sermonsContent } from "../../../data/sermons/sermonsContent";
import { useSermons } from "../../../contexts/SermonsContext";

export default function SermonsMenu({ isCollapsed }) {
  const { setSelectedSermon } = useSermons();

  const [openSections, setOpenSections] = useState({
    books: false,
    thematic: false,
    special: false,
    openBook: null,
  });

  const toggleSection = id =>
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id],
      ...(id !== "books" && { openBook: null }),
      ...(id === "books" && prev.openBook && { openBook: null }),
    }));

  const handleBookToggle = bookInternalKey => {
    setOpenSections(prev => ({
      ...prev,
      openBook: prev.openBook === bookInternalKey ? null : bookInternalKey,
    }));
  };

  const getBookShortLabel = bookFullname => {
    const book = ntBooksList.find(b => b.full === bookFullname);
    return book ? book.short : bookFullname;
  };

  const renderSermonItems = (
    sermons // collapsed доступний тут
  ) => (
    <List style={{ marginLeft: isCollapsed ? 0 : 16 }}>
      {sermons.map(
        (
          sermon,
          index // Додаємо index для нумерації
        ) => (
          <ListItem key={sermon.id} as="button" onClick={() => setSelectedSermon(sermon.id)}>
            {isCollapsed // Якщо сайдбар згорнутий, показуємо номер
              ? `${index + 1}`
              : // Якщо розгорнутий, показуємо заголовок
                sermon.title}
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <>
      {sermonCategories.map(category => (
        <Section key={category.id}>
          <SectionTitle
            role="button"
            tabIndex={0}
            onClick={() => toggleSection(category.id)}
            onKeyDown={e => ["Enter", " "].includes(e.key) && toggleSection(category.id)}
          >
            {category.label}
            <Toggle as="span">{openSections[category.id] ? "−" : "+"}</Toggle>
          </SectionTitle>

          {openSections[category.id] && (
            <>
              {category.type === "books" && (
                <List>
                  {category.items
                    .filter(
                      book =>
                        sermonsContent[book.internalKey] &&
                        sermonsContent[book.internalKey].length > 0
                    )
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
                        >
                          {isCollapsed // Якщо сайдбар згорнутий, показуємо скорочену назву
                            ? getBookShortLabel(book.full)
                            : // Якщо розгорнутий, показуємо повну назву
                              book.full}{" "}
                          {openSections.openBook === book.internalKey ? "−" : "+"}
                        </ListItem>
                        {openSections.openBook === book.internalKey &&
                          sermonsContent[book.internalKey] &&
                          renderSermonItems(sermonsContent[book.internalKey])}
                      </React.Fragment>
                    ))}
                </List>
              )}

              {(category.type === "thematic" || category.type === "special") &&
                sermonsContent[category.id] &&
                renderSermonItems(sermonsContent[category.id])}
            </>
          )}
        </Section>
      ))}
    </>
  );
}
