// src/components/InteractiveContent/HighlightBox/HighlightBox.js
import React from "react";
import {
  HighlightBoxContainer,
  HighlightBoxContent,
  HighlightBoxTitle,
  HighlightBoxEmoji,
} from "./HighlightBox.styled";

const HighlightBox = ({ title, content, emoji }) => {
  return (
    <HighlightBoxContainer>
      {emoji && <HighlightBoxEmoji>{emoji}</HighlightBoxEmoji>}
      <HighlightBoxContent>
        {/* ✅ ВИПРАВЛЕНО: Рендеримо title безпосередньо */}
        {title && <HighlightBoxTitle>{title}</HighlightBoxTitle>}

        {content && <p>{content}</p>}
      </HighlightBoxContent>
    </HighlightBoxContainer>
  );
};

export default HighlightBox;
