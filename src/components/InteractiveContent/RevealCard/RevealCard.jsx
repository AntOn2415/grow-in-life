// src/components/InteractiveContent/RevealCard/RevealCard.js
import React, { useState } from "react";
import { StyledRevealCard, CardContent, CardTitle } from "./RevealCard.styled";
import ToggleButton from "../../Common/ToggleButton/ToggleButton"; // Переконайтеся, що ToggleButton існує

export default function RevealCard({ cardData }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  return (
    <StyledRevealCard>
      <CardTitle onClick={toggleReveal}>
        {cardData.emoji} {cardData.title}
        <ToggleButton isActive={isRevealed} onClick={toggleReveal} />
      </CardTitle>
      {isRevealed && <CardContent>{cardData.content}</CardContent>}
    </StyledRevealCard>
  );
}
