// src/components/InteractiveContent/RevealCard/RevealCard.jsx
import React, { useState } from "react";
import {
  StyledRevealCard,
  CardHeader,
  Emoji,
  CardTitle,
  CardAnswerContainer,
  CardContent,
} from "./RevealCard.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

export default function RevealCard({ id, emoji, title, content, titleLevel }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  const renderContent = () => {
    if (typeof content === "string") {
      return <TokenRenderer tokens={content} />;
    }

    if (Array.isArray(content)) {
      return content.map((item, index) => <TokenRenderer key={index} tokens={item} />);
    }

    return null;
  };

  return (
    <StyledRevealCard
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={toggleReveal}
    >
      <CardHeader>
        {emoji && <Emoji>{emoji}</Emoji>}
        <CardTitle as={`h${titleLevel}`}>
          <TokenRenderer tokens={title} />
        </CardTitle>
      </CardHeader>

      <CardAnswerContainer
        initial={false}
        animate={{ height: isHovered || isRevealed ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <CardContent
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backdropFilter: isRevealed ? "blur(0px)" : "blur(8px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p>{renderContent()}</p>
        </CardContent>
      </CardAnswerContainer>
    </StyledRevealCard>
  );
}
