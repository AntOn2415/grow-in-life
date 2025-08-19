// src/components/InteractiveContent/QuestionPrompt/QuestionPrompt.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import {
  QuestionPromptContainer,
  QuestionHeading, // ✅ Використовуємо новий стилізований компонент
  ToggleAnswerButton,
  AnswerText,
  QuestionEmoji,
} from "./QuestionPrompt.styled";

const QuestionPrompt = ({ question, answer, emoji, headingLevel = 3 }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionPromptContainer as="section">
      <QuestionEmoji>{emoji || "❓"}</QuestionEmoji>
      {/* ✅ Замінюємо QuestionText на QuestionHeading та передаємо рівень заголовка */}
      <QuestionHeading as={`h${headingLevel}`}>
        <TokenRenderer tokens={question} isHeading={true} />
      </QuestionHeading>
      {answer && (
        <ToggleAnswerButton onClick={handleToggleAnswer}>
          {showAnswer ? "Сховати відповідь" : "Показати відповідь"}
        </ToggleAnswerButton>
      )}
      <AnimatePresence>
        {showAnswer && answer && (
          <motion.div
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <AnswerText>
              <TokenRenderer tokens={answer} />
            </AnswerText>
          </motion.div>
        )}
      </AnimatePresence>
    </QuestionPromptContainer>
  );
};

export default QuestionPrompt;
