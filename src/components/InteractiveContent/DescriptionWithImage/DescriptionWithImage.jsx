import React from "react";
import {
  DescriptionWithImageContainer,
  TextContentWrapper, // Можливо, перейменувати на TextWrapper або DescriptionWrapper
  ImageWrapper,
  StyledImage, // Додайте імпорт StyledImage
  ImageCaption, // Додайте імпорт ImageCaption
} from "./DescriptionWithImage.styled";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";

// Компонент очікує пропси, які передаються йому з HomeGroupLessonDisplay
const DescriptionWithImage = ({
  title,
  content,
  imageUrl,
  altText,
  caption,
  imagePosition, // Додайте imagePosition до очікуваних пропсів
}) => {
  if (!content && !imageUrl) {
    return null; // Якщо немає ні тексту, ні зображення, нічого не рендеримо
  }

  return (
    // Передаємо imagePosition для стилізації, якщо це потрібно для контейнера
    <DescriptionWithImageContainer imagePosition={imagePosition}>
      {/* Заголовок для всієї секції */}
      {title && <SectionHeading as="h3">{title}</SectionHeading>}

      {/* Окремі обгортки для контенту та зображення для гнучкості */}
      <div className="content-area">
        {" "}
        {/* Додайте обгортку для flexbox */}
        {content && (
          <TextContentWrapper>
            {content} {/* descriptionContent вже є JSX, рендеримо його напряму */}
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
