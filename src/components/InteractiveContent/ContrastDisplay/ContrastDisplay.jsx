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

const ContrastDisplay = ({ items, itemTitleLevel = 4 }) => {
  if (!items || items.length < 2) {
    return null;
  }

  // Функція для коректного рендерингу контенту
  const renderContent = content => {
    // Якщо content - це масив, перебираємо його та рендеримо кожен елемент як параграф
    if (Array.isArray(content)) {
      return content.map((item, index) => <TokenRenderer key={index} tokens={item} />);
    }
    // Якщо content - це рядок, просто рендеримо його в одному параграфі
    if (typeof content === "string") {
      return <TokenRenderer tokens={content} />;
    }
    // В інших випадках нічого не рендеримо
    return null;
  };

  return (
    <ContrastDisplayContainer as="section">
      <ContrastItemsWrapper>
        {items.map((item, index) => (
          <ContrastItem key={index} $type={item.type}>
            <ItemHeading as={`h${itemTitleLevel}`} $type={item.type}>
              {item.emoji && <ItemEmoji>{item.emoji}</ItemEmoji>}
              <TokenRenderer tokens={item.heading} isHeading={true} />
            </ItemHeading>
            <ItemContent>
              <p>{renderContent(item.content)}</p>
            </ItemContent>
          </ContrastItem>
        ))}
      </ContrastItemsWrapper>
    </ContrastDisplayContainer>
  );
};

export default ContrastDisplay;
