import styled from "styled-components";

export const QuestionPromptContainer = styled.div`
  background-color: ${({ theme }) => theme.interactiveBgYellow}; // ✅ З теми
  border: 1px solid ${({ theme }) => theme.interactiveBorderYellow}; // ✅ З теми
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // ✅ З теми
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadows.small}; // ✅ З теми
`;

export const QuestionEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge}; // ✅ З теми
  margin-bottom: 1rem;
`;

export const QuestionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large}; // ✅ З теми
  font-weight: bold; /* Залишаємо, якщо не в темі */
  color: ${({ theme }) => theme.color}; // ✅ З теми
  margin-bottom: 1rem;
`;

export const ToggleAnswerButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg}; // ✅ З теми
  color: ${({ theme }) => theme.buttonColor}; // ✅ З теми
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small}; // ✅ З теми
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ✅ З теми
  font-weight: bold; /* Залишаємо, якщо не в темі */
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.accentColor}; // ✅ З теми
  }
`;

export const AnswerText = styled.div`
  background-color: ${({ theme }) => theme.background}; // ✅ З теми
  border-left: 3px solid ${({ theme }) => theme.successColor}; // ✅ З теми
  padding: 1rem;
  margin-top: 1.5rem;
  font-style: italic;
  color: ${({ theme }) => theme.color}; // ✅ З теми
  border-radius: ${({ theme }) => theme.borderRadius.small}; // ✅ З теми
  width: 100%;
`;
