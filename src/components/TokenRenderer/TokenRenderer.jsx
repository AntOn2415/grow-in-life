import React from "react";
import BibleLink from "../BibleLink/BibleLink";

// Імпортуйте ваші компоненти для стилів
const BoldText = ({ children }) => <strong style={{ color: "inherit" }}>{children}</strong>;
const ItalicText = ({ children }) => <em style={{ color: "inherit" }}>{children}</em>;
const QuoteText = ({ children }) => (
  <span
    style={{
      fontStyle: "italic",
      borderLeft: "2px solid #ccc",
      paddingLeft: "10px",
      margin: "0 0 10px 0",
    }}
  >
    {children}
  </span>
);

const renderSingleToken = (token, key) => {
  switch (token.type) {
    case "bold":
      return (
        <BoldText key={key}>
          <TokenRenderer tokens={token.content} />
        </BoldText>
      );
    case "italic":
      return (
        <ItalicText key={key}>
          <TokenRenderer tokens={token.content} />
        </ItalicText>
      );
    case "quote":
      return (
        <QuoteText key={key}>
          <TokenRenderer tokens={token.content} />
        </QuoteText>
      );
    case "bible-link":
      return (
        <BibleLink key={key} bibleRef={token.bibleRef}>
          {token.content}
        </BibleLink>
      );
    default:
      // ✅ Повернуто React.Fragment
      return <React.Fragment key={key}>{token.content}</React.Fragment>;
  }
};

const TokenRenderer = ({ tokens }) => {
  if (!tokens) {
    return null;
  }

  // Якщо tokens — це рядок, просто рендеримо його
  if (typeof tokens === "string") {
    // ✅ Повернуто React.Fragment
    return <React.Fragment>{tokens}</React.Fragment>;
  }

  // Якщо tokens — це один об'єкт-токен (не в масиві)
  if (typeof tokens === "object" && !Array.isArray(tokens)) {
    return renderSingleToken(tokens, "single-token");
  }

  // Якщо tokens — це масив, обробляємо кожен токен
  if (Array.isArray(tokens)) {
    return tokens.map((token, index) => {
      // Якщо токен — рядок, рендеримо його як текст
      if (typeof token === "string") {
        // ✅ Повернуто React.Fragment
        return <React.Fragment key={index}>{token}</React.Fragment>;
      }

      // Якщо токен — об'єкт, рендеримо відповідний компонент
      return renderSingleToken(token, index);
    });
  }

  return null;
};

export default TokenRenderer;
