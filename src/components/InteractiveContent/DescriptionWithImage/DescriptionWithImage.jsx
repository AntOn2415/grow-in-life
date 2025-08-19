// src/components/InteractiveContent/DescriptionWithImage/DescriptionWithImage.jsx

import React from "react";
import {
  DescriptionWithImageContainer,
  TextContentWrapper,
  ImageWrapper,
  StyledImage,
  ImageCaption,
} from "./DescriptionWithImage.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

const DescriptionWithImage = ({ content, imageUrl, altText, caption, imagePosition }) => {
  if (!content && !imageUrl) {
    return null;
  }

  return (
    <DescriptionWithImageContainer imagePosition={imagePosition}>
      <div className="content-area">
        {content && (
          <TextContentWrapper>
            {content.map((paragraph, pIndex) => (
              <TokenRenderer key={pIndex} tokens={paragraph} />
            ))}
          </TextContentWrapper>
        )}
        {imageUrl && (
          <ImageWrapper>
            <StyledImage src={imageUrl} alt={altText} />
            {caption && <ImageCaption>{caption}</ImageCaption>}
          </ImageWrapper>
        )}
      </div>
    </DescriptionWithImageContainer>
  );
};

export default DescriptionWithImage;
