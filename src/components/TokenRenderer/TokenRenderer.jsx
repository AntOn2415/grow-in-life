import React from "react";
import BibleLink from "../BibleLink/BibleLink";
// Імпортуйте ваші компоненти для стилів або використовуйте вбудовані теги
const BoldText = ({ children }) => <strong style={{ color: "inherit" }}>{children}</strong>;
const ItalicText = ({ children }) => <em style={{ color: "inherit" }}>{children}</em>;

const TokenRenderer = ({ tokens }) => {
  if (!tokens) {
    return null;
  }
  // Якщо tokens - це рядок, просто рендеримо його
  if (typeof tokens === "string") {
    return <React.Fragment>{tokens}</React.Fragment>;
  }

  // Якщо tokens - це масив, обробляємо кожен токен
  if (Array.isArray(tokens)) {
    return tokens.map((token, index) => {
      // Якщо токен - рядок, рендеримо його як текст
      if (typeof token === "string") {
        return <React.Fragment key={index}>{token}</React.Fragment>;
      }

      // Якщо токен - об'єкт, рендеримо відповідний компонент
      switch (token.type) {
        case "bold":
          // Рекурсивний виклик для вмісту
          return (
            <BoldText key={index}>
              <TokenRenderer tokens={token.content} />
            </BoldText>
          );
        case "italic":
          // Рекурсивний виклик для вмісту
          return (
            <ItalicText key={index}>
              <TokenRenderer tokens={token.content} />
            </ItalicText>
          );
        case "bible-link":
          return (
            <BibleLink key={index} bibleRef={token.bibleRef}>
              {token.content}
            </BibleLink>
          );
        default:
          return <React.Fragment key={index}>{token.content}</React.Fragment>;
      }
    });
  }
  return null;
};

export default TokenRenderer;
