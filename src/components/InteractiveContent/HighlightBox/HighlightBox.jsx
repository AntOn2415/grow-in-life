// src/components/InteractiveContent/HighlightBox/HighlightBox.js
import React from "react";
import {
  HighlightBoxContainer,
  HighlightBoxContent,
  HighlightBoxTitle,
  HighlightBoxEmoji,
} from "./HighlightBox.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

const HighlightBox = ({ title, content, emoji }) => {
  return (
    <HighlightBoxContainer>
      {emoji && <HighlightBoxEmoji>{emoji}</HighlightBoxEmoji>}
      <HighlightBoxContent>
        {/* ✅ ВИПРАВЛЕННЯ: Тепер title обробляється TokenRenderer */}
        {title && (
          <HighlightBoxTitle>
            <TokenRenderer tokens={title} />
          </HighlightBoxTitle>
        )}

        {/* ✅ ДОДАТКОВО: Тепер content також обробляється TokenRenderer */}
        {content && (
          <p>
            <TokenRenderer tokens={content} />
          </p>
        )}
      </HighlightBoxContent>
    </HighlightBoxContainer>
  );
};

export default HighlightBox;
