import React, { useState } from "react";
import {
  QuestionPromptContainer,
  QuestionText,
  ToggleAnswerButton,
  AnswerText,
  QuestionEmoji,
} from "./QuestionPrompt.styled";

const QuestionPrompt = ({ question, answer, emoji }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionPromptContainer>
      <QuestionEmoji>{emoji || "❓"}</QuestionEmoji>
      <QuestionText>{question}</QuestionText>
      {answer && (
        <ToggleAnswerButton onClick={handleToggleAnswer}>
          {showAnswer ? "Сховати відповідь" : "Показати відповідь"}
        </ToggleAnswerButton>
      )}
      {showAnswer && answer && <AnswerText>{answer}</AnswerText>}
    </QuestionPromptContainer>
  );
};

export default QuestionPrompt;
