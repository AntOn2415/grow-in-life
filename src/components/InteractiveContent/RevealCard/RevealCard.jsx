// src/components/InteractiveContent/RevealCard/RevealCard.js
import React, { useState } from "react";
import { StyledRevealCard, CardContent, CardTitle } from "./RevealCard.styled";
import ToggleButton from "../../Common/ToggleButton/ToggleButton"; // Переконайтеся, що ToggleButton існує
// import DOMPurify from 'dompurify'; // Розкоментуйте, якщо використовуєте DOMPurify

export default function RevealCard({ cardData }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  // Функція для безпечного рендерингу HTML
  const renderHtmlContent = htmlString => {
    // Якщо ви використовуєте DOMPurify, розкоментуйте рядок нижче
    // return { __html: DOMPurify.sanitize(htmlString) };
    return { __html: htmlString };
  };

  return (
    <StyledRevealCard>
      {/* Застосовуємо dangerouslySetInnerHTML для CardTitle, якщо він може містити HTML */}
      <CardTitle onClick={toggleReveal}>
        {cardData.emoji}
        <span dangerouslySetInnerHTML={renderHtmlContent(cardData.title)} />
        <ToggleButton isActive={isRevealed} onClick={toggleReveal} />
      </CardTitle>
      {isRevealed && (
        // Застосовуємо dangerouslySetInnerHTML для CardContent, оскільки він містить HTML
        <CardContent dangerouslySetInnerHTML={renderHtmlContent(cardData.content)} />
      )}
    </StyledRevealCard>
  );
}
