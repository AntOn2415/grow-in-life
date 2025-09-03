// src/components/BibleLink/BibleLink.jsx

import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { BibleContext } from "../../contexts/BibleContext";
import {
  VerseButton,
  UnderlineClip,
} from "../SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.styled";

const BibleLink = ({ bibleRef, children }) => {
  const { navigateTo } = useContext(BibleContext);
  const controls = useAnimation();

  const handleLinkClick = e => {
    e.preventDefault();

    // 1) full -> 2) hide L→R -> (миттєвий ресет) -> 3) show L→R
    controls.start({
      clipPath: [
        "inset(0% 0% 0% 0%)", // повністю видно
        "inset(0% 0% 0% 100%)", // зникає зліва → вправо (зрізаємо зліва)
        "inset(0% 100% 0% 0%)", // приховано, але "якір" зліва
        "inset(0% 0% 0% 0%)", // з’являється зліва → вправо
      ],
      transition: {
        duration: 0.6,
        times: [0, 0.45, 0.55, 1],
        ease: "linear",
      },
    });

    navigateTo(bibleRef);
  };

  return (
    <VerseButton
      as={motion.button}
      type="button"
      onClick={handleLinkClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{ transformOrigin: "center center" }}
      aria-label={`Відкрити посилання на Біблію: ${children}`}
    >
      {children}
      <UnderlineClip initial={{ clipPath: "inset(0% 0% 0% 0%)" }} animate={controls} />
    </VerseButton>
  );
};

export default BibleLink;
