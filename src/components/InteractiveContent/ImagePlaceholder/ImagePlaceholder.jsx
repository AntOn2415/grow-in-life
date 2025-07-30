// src/components/InteractiveContent/ImagePlaceholder/ImagePlaceholder.jsx
import React from "react";
import { ImageContainer, StyledImage, ImageCaption } from "./ImagePlaceholder.styled";

function ImagePlaceholder({ imageUrl, caption, altText }) {
  return (
    <ImageContainer>
      {imageUrl ? (
        <StyledImage src={imageUrl} alt={altText || "Зображення"} />
      ) : (
        <p>Зображення відсутнє.</p>
      )}
      {caption && <ImageCaption>{caption}</ImageCaption>}
    </ImageContainer>
  );
}

export default ImagePlaceholder;
