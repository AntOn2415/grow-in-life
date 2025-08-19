// src/components/InteractiveContent/HighlightBox/HighlightBox.js
import React from "react";
import {
  HighlightBoxContainer,
  HighlightBoxContent,
  HighlightBoxTitle,
  HighlightBoxEmoji,
} from "./HighlightBox.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

const HighlightBox = ({ title, content, emoji, titleLevel }) => {
  const TitleTag = `h${titleLevel}`;
  return (
    <HighlightBoxContainer>
      {emoji && <HighlightBoxEmoji>{emoji}</HighlightBoxEmoji>}
      <HighlightBoxContent>
        {title && (
          <HighlightBoxTitle as={TitleTag}>
            <TokenRenderer tokens={title} />
          </HighlightBoxTitle>
        )}
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
