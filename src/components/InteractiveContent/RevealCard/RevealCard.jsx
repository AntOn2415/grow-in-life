// src/components/InteractiveContent/RevealCard/RevealCard.js
import React, { useState } from "react";
import { StyledRevealCard, CardContent, CardTitle } from "./RevealCard.styled";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";

export default function RevealCard({ cardData }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  return (
    <StyledRevealCard>
      <CardTitle onClick={toggleReveal}>
        {cardData.emoji}
        {/* ✅ ВИПРАВЛЕНО: Рендеримо cardData.title безпосередньо */}
        <span>{cardData.title}</span>
        <ToggleButton isActive={isRevealed} onClick={toggleReveal} />
      </CardTitle>
      {isRevealed && (
        // ✅ ВИПРАВЛЕНО: Рендеримо cardData.content безпосередньо
        <CardContent>{cardData.content}</CardContent>
      )}
    </StyledRevealCard>
  );
}
