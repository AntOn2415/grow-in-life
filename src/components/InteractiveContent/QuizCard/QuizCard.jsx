// src/components/Quiz/QuizCard.jsx

import React, { useState } from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

import {
  StyledQuizCard,
  QuizQuestion,
  QuizOptionsList,
  QuizOptionItem,
  QuizToggleIcon,
} from "./QuizCard.styled";

export default function QuizCard({ quizData, titleLevel }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
    if (showOptions) {
      setSelectedAnswerIndex(null);
    }
  };

  const handleOptionClick = index => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
    }
  };

  const listVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.25 } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.25,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const showFeedback = selectedAnswerIndex !== null;

  return (
    <StyledQuizCard>
      <QuizQuestion onClick={toggleOptions} as={`h${titleLevel}`}>
        <TokenRenderer tokens={quizData.question} />

        <QuizToggleIcon $isActive={showOptions}>
          <motion.span animate={{ rotate: showOptions ? 90 : 0 }} transition={{ duration: 0.25 }}>
            <FiChevronRight />
          </motion.span>
        </QuizToggleIcon>
      </QuizQuestion>

      <motion.div
        initial="hidden"
        animate={showOptions ? "visible" : "hidden"}
        variants={listVariants}
        style={{ pointerEvents: showOptions ? "auto" : "none" }}
      >
        <QuizOptionsList>
          {quizData.options.map((option, index) => (
            <motion.li key={index} variants={itemVariants}>
              <QuizOptionItem
                onClick={() => handleOptionClick(index)}
                isSelected={selectedAnswerIndex === index}
                isCorrectOption={option.isCorrect}
                showFeedback={showFeedback}
                disabled={showFeedback}
              >
                <TokenRenderer tokens={option.text} />
              </QuizOptionItem>
            </motion.li>
          ))}
        </QuizOptionsList>
      </motion.div>
    </StyledQuizCard>
  );
}
