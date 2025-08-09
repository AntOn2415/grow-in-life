// src/components/BibleLink/BibleLink.jsx
import React, { useContext } from "react";
import { BibleContext } from "../../contexts/BibleContext";
import { VerseButton } from "../SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.styled";

const BibleLink = ({ bibleRef, children }) => {
  const { navigateTo } = useContext(BibleContext);

  const handleLinkClick = event => {
    // Запобігаємо стандартній поведінці посилання
    event.preventDefault();
    // Викликаємо глобальну функцію навігації з BibleContext
    navigateTo(bibleRef);
  };

  return (
    <VerseButton type="button" onClick={handleLinkClick}>
      {children}
    </VerseButton>
  );
};

export default BibleLink;
