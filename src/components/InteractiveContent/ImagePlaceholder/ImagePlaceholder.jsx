import React from "react";
import { ImageContainer, StyledImage, ImageCaption } from "./ImagePlaceholder.styled"; // Імпортуємо всі потрібні styled-компоненти

// Компонент ImagePlaceholder
function ImagePlaceholder({ imageUrl, caption }) {
  return (
    <ImageContainer>
      {" "}
      {/* Використовуємо ImageContainer як основний обгортковий елемент */}
      {imageUrl ? (
        <StyledImage src={imageUrl} alt={caption || "Зображення"} /> // Використовуємо StyledImage для самого зображення
      ) : (
        <p>Зображення відсутнє.</p>
      )}
      {caption && <ImageCaption>{caption}</ImageCaption>}{" "}
      {/* Використовуємо ImageCaption для підпису */}
    </ImageContainer>
  );
}

export default ImagePlaceholder;
