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
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

// ✅ Додано новий пропс itemTitleLevel
const ContrastDisplay = ({ items, itemTitleLevel = 4 }) => {
  if (!items || items.length < 2) {
    return null;
  }

  return (
    <ContrastDisplayContainer as="section">
      <ContrastItemsWrapper>
        {items.map((item, index) => (
          <ContrastItem key={index} $type={item.type}>
            {/* ✅ Передаємо рівень заголовка через пропс 'as' */}
            <ItemHeading as={`h${itemTitleLevel}`} $type={item.type}>
              {item.emoji && <ItemEmoji>{item.emoji}</ItemEmoji>}
              <TokenRenderer tokens={item.heading} isHeading={true} />
            </ItemHeading>
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
