// src/components/Common/SectionHeading/SectionHeading.js
import React from "react";
import { StyledHeading } from "./SectionHeading.styled"; // ✅ Імпортуємо стилі
// import DOMPurify from 'dompurify'; // Розкоментуйте, якщо використовуєте DOMPurify

// Компонент SectionHeading
const SectionHeading = ({ as = "h3", size = "default", children }) => {
  // Функція для безпечного рендерингу HTML
  const renderHtmlContent = htmlString => {
    // Якщо ви використовуєте DOMPurify, розкоментуйте рядок нижче
    // return { __html: DOMPurify.sanitize(htmlString) };
    return { __html: htmlString };
  };

  return (
    <StyledHeading
      as={as}
      size={size}
      // Застосовуємо dangerouslySetInnerHTML до children, оскільки це може бути HTML-рядок
      dangerouslySetInnerHTML={renderHtmlContent(children)}
    />
  );
};

export default SectionHeading;
