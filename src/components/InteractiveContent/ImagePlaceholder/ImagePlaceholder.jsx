// src/components/InteractiveContent/ImagePlaceholder/ImagePlaceholder.jsx
import React from "react";
import { StyledFigure, StyledImage, StyledFigcaption } from "./ImagePlaceholder.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

function ImagePlaceholder({ imageUrl, caption, altText }) {
  return (
    <StyledFigure>
      {imageUrl ? (
        <StyledImage src={imageUrl} alt={altText || "Зображення"} />
      ) : (
        <p>Зображення відсутнє.</p>
      )}
      {caption && (
        <StyledFigcaption>
          <TokenRenderer tokens={caption} />
        </StyledFigcaption>
      )}
    </StyledFigure>
  );
}

export default ImagePlaceholder;
