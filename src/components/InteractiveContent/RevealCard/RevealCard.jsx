// src/components/InteractiveContent/RevealCard/RevealCard.js
import React, { useState } from "react";
//import { motion } from "framer-motion";
import { StyledRevealCard, CardTitle, CardAnswerContainer, CardContent } from "./RevealCard.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

// ✅ Тут компонент приймає окремі пропси, як ми виправляли в HomeGroupLessonDisplay
export default function RevealCard({ id, emoji, title, content }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  return (
    <StyledRevealCard
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={toggleReveal}
    >
      {/* ✅ СЕМАНТИЧНЕ ВИПРАВЛЕННЯ: Використовуємо тег h4 замість спанів */}
      <CardTitle>
        {emoji && <span>{emoji}</span>}
        <TokenRenderer tokens={title} />
      </CardTitle>

      <CardAnswerContainer
        initial={false}
        animate={{ height: isHovered || isRevealed ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <CardContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: isRevealed ? "blur(0px)" : "blur(8px)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TokenRenderer tokens={content} />
        </CardContent>
      </CardAnswerContainer>
    </StyledRevealCard>
  );
}
