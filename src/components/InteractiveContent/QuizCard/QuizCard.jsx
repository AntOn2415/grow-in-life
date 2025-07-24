// src/components/InteractiveContent/QuizCard/QuizCard.js
import React, { useState } from "react";
import {
  StyledQuizCard,
  QuizQuestion,
  QuizOptionsList,
  QuizOptionItem,
  QuizToggleIcon,
} from "./QuizCard.styled";

export default function QuizCard({ quizData }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // Новий стан для обраної відповіді

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    // Приховуємо вибрану відповідь, якщо знову закриваємо список
    if (showOptions) {
      setSelectedAnswerIndex(null);
    }
  };

  const handleOptionClick = index => {
    setSelectedAnswerIndex(index);
    // Якщо хочете автоматично показувати результат після вибору, можна тут додати логіку
    // Наразі просто фіксуємо вибір
  };

  return (
    <StyledQuizCard>
      <QuizQuestion onClick={toggleOptions}>
        {quizData.question}
        <QuizToggleIcon isActive={showOptions}>{showOptions ? "−" : "+"}</QuizToggleIcon>
      </QuizQuestion>

      {showOptions && (
        <QuizOptionsList>
          {quizData.options.map((option, index) => (
            <QuizOptionItem
              key={index}
              onClick={() => handleOptionClick(index)} // Обробник кліку на опцію
              isSelected={selectedAnswerIndex === index} // Проп для стилізації обраної відповіді
              isCorrectOption={option.isCorrect} // Проп для стилізації правильної відповіді (не змінює поведінку, але впливає на вигляд)
              showFeedback={selectedAnswerIndex !== null} // Показувати фідбек лише після вибору відповіді
            >
              {option.text}
            </QuizOptionItem>
          ))}
        </QuizOptionsList>
      )}
    </StyledQuizCard>
  );
}
