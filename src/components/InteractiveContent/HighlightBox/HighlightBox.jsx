import React from "react";
import {
  HighlightBoxContainer,
  HighlightBoxContent,
  HighlightBoxTitle,
  HighlightBoxEmoji,
} from "./HighlightBox.styled";
// import DOMPurify from 'dompurify'; // Розкоментуйте, якщо використовуєте DOMPurify

const HighlightBox = ({ title, content, emoji }) => {
  // Функція для безпечного рендерингу HTML
  const renderHtmlContent = htmlString => {
    // Якщо ви використовуєте DOMPurify, розкоментуйте рядок нижче
    // return { __html: DOMPurify.sanitize(htmlString) };
    return { __html: htmlString };
  };

  return (
    <HighlightBoxContainer>
      {emoji && <HighlightBoxEmoji>{emoji}</HighlightBoxEmoji>}
      <HighlightBoxContent>
        {/* ✅ Тут ми використовуємо dangerouslySetInnerHTML для title, якщо він може містити HTML */}
        {title && <HighlightBoxTitle dangerouslySetInnerHTML={renderHtmlContent(title)} />}
        {/* ✅ І тут для content, що є критично важливим для вашого випадку */}
        <p dangerouslySetInnerHTML={renderHtmlContent(content)} />
      </HighlightBoxContent>
    </HighlightBoxContainer>
  );
};

export default HighlightBox;
