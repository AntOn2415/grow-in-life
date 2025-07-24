import React from "react";
import { Section, SectionTitle, List, ListItem } from "./HomeGroupsMenu.styled";

const books = ["Книга Ездри", "Книга Неемії"];

export default function HomeGroupsMenu() {
  return (
    <Section>
      <SectionTitle>Книги для домашніх груп</SectionTitle>
      <List>
        {books.map(b => (
          <ListItem key={b}>{b}</ListItem>
        ))}
      </List>
    </Section>
  );
}
