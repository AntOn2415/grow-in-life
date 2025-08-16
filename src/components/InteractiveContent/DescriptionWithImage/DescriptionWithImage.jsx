// src/components/InteractiveContent/DescriptionWithImage/DescriptionWithImage.jsx

import React from "react";
import {
  DescriptionWithImageContainer,
  TextContentWrapper,
  ImageWrapper,
  StyledImage,
  ImageCaption,
} from "./DescriptionWithImage.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

const DescriptionWithImage = ({ title, content, imageUrl, altText, caption, imagePosition }) => {
  if (!content && !imageUrl) {
    return null;
  }

  return (
    <DescriptionWithImageContainer imagePosition={imagePosition}>
      {title && <SectionHeading as="h3">{title}</SectionHeading>}

      <div className="content-area">
        {content && (
          <TextContentWrapper>
            {/* ✅ ВИПРАВЛЕННЯ: викликаємо map на пропсі content */}
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
