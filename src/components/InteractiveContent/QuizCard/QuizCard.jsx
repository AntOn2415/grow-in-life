// src/components/InteractiveContent/QuizCard/QuizCard.js
import React, { useState } from "react";
import {
  StyledQuizCard,
  QuizQuestion,
  QuizOptionsList,
  QuizOptionItem,
  QuizToggleIcon,
} from "./QuizCard.styled";

export default function QuizCard({ quizData, titleLevel }) {
  // ✅ Додано titleLevel
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    if (showOptions) {
      setSelectedAnswerIndex(null);
    }
  };

  const handleOptionClick = index => {
    setSelectedAnswerIndex(index);
  };

  return (
    <StyledQuizCard>
      {/* ✅ Заголовок тепер рендериться з динамічним тегом H-рівня */}
      <QuizQuestion onClick={toggleOptions} as={`h${titleLevel}`}>
        {quizData.question}
        <QuizToggleIcon isActive={showOptions}>{showOptions ? "−" : "+"}</QuizToggleIcon>
      </QuizQuestion>

      {showOptions && (
        <QuizOptionsList>
          {quizData.options.map((option, index) => (
            <QuizOptionItem
              key={index}
              onClick={() => handleOptionClick(index)}
              isSelected={selectedAnswerIndex === index}
              isCorrectOption={option.isCorrect}
              showFeedback={selectedAnswerIndex !== null}
            >
              {option.text}
            </QuizOptionItem>
          ))}
        </QuizOptionsList>
      )}
    </StyledQuizCard>
  );
}
