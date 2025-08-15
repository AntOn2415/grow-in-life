// src/components/InteractiveContent/ContrastDisplay/ContrastDisplay.jsx
import React from "react";
import {
  ContrastDisplayContainer,
  ContrastItemsWrapper,
  ContrastItem,
  ItemHeading,
  ItemEmoji,
  ItemContent,
} from "./ContrastDisplay.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import TokenRenderer from "../../TokenRenderer/TokenRenderer"; // 👈 Імпортуємо TokenRenderer

const ContrastDisplay = ({ title, items }) => {
  if (!items || items.length < 2) {
    return null;
  }

  return (
    <ContrastDisplayContainer>
      {title && (
        <SectionHeading as="h3">
          {/* ✅ ВИПРАВЛЕННЯ: Використовуємо TokenRenderer для заголовка */}
          <TokenRenderer tokens={title} />
        </SectionHeading>
      )}
      <ContrastItemsWrapper>
        {items.map((item, index) => (
          <ContrastItem key={index} $type={item.type}>
            <ItemHeading $type={item.type}>
              {item.emoji && <ItemEmoji>{item.emoji}</ItemEmoji>}
              {/* ✅ ВИПРАВЛЕННЯ: Використовуємо TokenRenderer для заголовка елемента */}
              <TokenRenderer tokens={item.heading} />
            </ItemHeading>
            {/* ✅ ВИПРАВЛЕННЯ: Використовуємо TokenRenderer для контенту елемента */}
            <ItemContent>
              <TokenRenderer tokens={item.content} />
            </ItemContent>
          </ContrastItem>
        ))}
      </ContrastItemsWrapper>
    </ContrastDisplayContainer>
  );
};

export default ContrastDisplay;
