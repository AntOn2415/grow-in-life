import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Імпортуємо motion та AnimatePresence
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
      {/* Використовуємо AnimatePresence для входу/виходу анімації */}
      <AnimatePresence>
        {showAnswer && answer && (
          <motion.div
            // Початковий стан: висота 0, прозорість 0
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            // Кінцевий стан: автоматична висота, прозорість 1
            animate={{ height: "auto", opacity: 1 }}
            // Стан виходу: висота 0, прозорість 0
            exit={{ height: 0, opacity: 0 }}
            // Параметри переходу для жвавості
            transition={{
              duration: 0.25, // Тривалість анімації
              ease: [0.4, 0, 0.2, 1], // Крива Безьє для "жвавого" відчуття (ease-in-out-cubic)
            }}
          >
            <AnswerText>{answer}</AnswerText>
          </motion.div>
        )}
      </AnimatePresence>
    </QuestionPromptContainer>
  );
};

export default QuestionPrompt;
