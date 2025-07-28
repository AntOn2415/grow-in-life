// src/components/InteractiveContent/ContrastDisplay/ContrastDisplay.jsx
import React from "react";
// ✅ ВИПРАВЛЕНО: Імпортуємо всі стилізовані компоненти з ContrastDisplay.styled.jsx
import {
  ContrastDisplayContainer,
  ContrastItemsWrapper,
  ContrastItem,
  ItemHeading,
  ItemEmoji,
  ItemContent,
} from "./ContrastDisplay.styled";

import SectionHeading from "../../Common/SectionHeading/SectionHeading"; // Залишаємо цей імпорт, якщо SectionHeading не перенесено

// --- Компонент ContrastDisplay ---
const ContrastDisplay = ({ title, items }) => {
  if (!items || items.length < 2) {
    return null; // Потрібно принаймні два елементи для порівняння
  }

  return (
    <ContrastDisplayContainer>
      {title && <SectionHeading as="h3">{title}</SectionHeading>}
      <ContrastItemsWrapper>
        {items.map((item, index) => (
          <ContrastItem key={index} $type={item.type}>
            <ItemHeading $type={item.type}>
              {item.emoji && <ItemEmoji>{item.emoji}</ItemEmoji>}
              {item.heading}
            </ItemHeading>
            <ItemContent>{item.content}</ItemContent>
          </ContrastItem>
        ))}
      </ContrastItemsWrapper>
    </ContrastDisplayContainer>
  );
};

export default ContrastDisplay;
