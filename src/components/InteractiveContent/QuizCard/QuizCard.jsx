// src/components/InteractiveContent/QuizCard/QuizCard.js
import React, { useState } from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer"; // ⬅️ Імпортуйте TokenRenderer
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
      {/* 🟢 Виправлення: Тепер питання обробляється через TokenRenderer */}
      <QuizQuestion onClick={toggleOptions} as={`h${titleLevel}`}>
        <TokenRenderer tokens={quizData.question} />
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
              {/* 🟢 Виправлення: Текст варіантів відповіді також обробляється через TokenRenderer */}
              <TokenRenderer tokens={option.text} />
            </QuizOptionItem>
          ))}
        </QuizOptionsList>
      )}
    </StyledQuizCard>
  );
}
