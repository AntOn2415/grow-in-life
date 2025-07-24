import React, { useState } from "react";
import { Section, SectionTitle, List, ListItem, Toggle } from "./SermonsMenu.styled";
import { ntBooks } from "../../../data/sermons"; // для повної/короткої назви
import { sermonsContent } from "../../../data/sermonsContent";
import { useSermons } from "../../../contexts/SermonsContext"; // Імпортуємо хук з контексту

export default function SermonsMenu({ collapsed }) {
  const { setSelectedSermon } = useSermons();

  const [openSections, setOpenSections] = useState({
    books: false,
    thematic: false,
    special: false,
    openBook: null,
  });

  const toggle = key =>
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));

  const handleBookToggle = book =>
    setOpenSections(prev => ({
      ...prev,
      openBook: prev.openBook === book ? null : book,
    }));

  const renderSermonItems = (book, sermons) => (
    <List style={{ marginLeft: collapsed ? 0 : 16 }}>
      {sermons.map((sermon, i) => (
        <ListItem
          key={i}
          as="button"
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            color: "#465362",
            font: "inherit",
            textAlign: "left",
          }}
          // Тепер викликаємо setSelectedSermon з контексту
          onClick={() => setSelectedSermon({ book, idx: i })}
        >
          {sermon.title}
        </ListItem>
      ))}
    </List>
  );

  const getLabel = bookName =>
    collapsed ? ntBooks.find(b => b.full === bookName)?.short || bookName : bookName;

  return (
    <>
      {/* Новий Заповіт */}
      <Section>
        <SectionTitle
          role="button"
          tabIndex={0}
          onClick={() => toggle("books")}
          onKeyDown={e => ["Enter", " "].includes(e.key) && toggle("books")}
        >
          Книги Нового Заповіту
          <Toggle as="span">{openSections.books ? "−" : "+"}</Toggle>
        </SectionTitle>

        {openSections.books && (
          <List>
            {Object.entries(sermonsContent)
              .filter(([book]) => ntBooks.some(b => b.full === book))
              .map(([book, sermons]) => (
                <React.Fragment key={book}>
                  <ListItem
                    onClick={() => handleBookToggle(book)}
                    style={{ cursor: "pointer" }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={openSections.openBook === book}
                    onKeyDown={e => ["Enter", " "].includes(e.key) && handleBookToggle(book)}
                  >
                    {getLabel(book)} {openSections.openBook === book ? "−" : "+"}
                  </ListItem>
                  {openSections.openBook === book && renderSermonItems(book, sermons)}
                </React.Fragment>
              ))}
          </List>
        )}
      </Section>

      {/* Тематичні */}
      <Section>
        <SectionTitle
          role="button"
          tabIndex={0}
          onClick={() => toggle("thematic")}
          onKeyDown={e => ["Enter", " "].includes(e.key) && toggle("thematic")}
        >
          Тематичні
          <Toggle as="span">{openSections.thematic ? "−" : "+"}</Toggle>
        </SectionTitle>
        {openSections.thematic &&
          sermonsContent["Тематичні"] &&
          renderSermonItems("Тематичні", sermonsContent["Тематичні"])}
      </Section>

      {/* Особливі події */}
      <Section>
        <SectionTitle
          role="button"
          tabIndex={0}
          onClick={() => toggle("special")}
          onKeyDown={e => ["Enter", " "].includes(e.key) && toggle("special")}
        >
          Особливі події
          <Toggle as="span">{openSections.special ? "−" : "+"}</Toggle>
        </SectionTitle>
        {openSections.special &&
          sermonsContent["Особливі події"] &&
          renderSermonItems("Особливі події", sermonsContent["Особливі події"])}
      </Section>
    </>
  );
}
