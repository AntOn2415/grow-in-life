// src/components/InteractiveContent/QuizCard/QuizCard.styled.js
import styled from "styled-components";

export const StyledQuizCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const QuizQuestion = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #343a40;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuizOptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border-top: 1px solid #e9ecef;
  padding-top: 15px;
`;

export const QuizOptionItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #495057;
  cursor: pointer; /* Робимо опції клікабельними */
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #e9ecef; /* Світліший фон при наведенні */
  }

  // Стилі для обраної відповіді
  ${props =>
    props.isSelected &&
    `
    background-color: #cce5ff; /* Light blue for selected */
    border-color: #007bff; /* Blue border for selected */
    color: #004085; /* Darker blue text */
  `}

  // Стилі для правильної відповіді, що відображаються ЛИШЕ ПІСЛЯ ВИБОРУ КОРИСТУВАЧЕМ
  ${props =>
    props.showFeedback &&
    props.isCorrectOption &&
    `
    background-color: #d4edda; /* Light green */
    border-color: #28a745; /* Green */
    color: #155724; /* Darker green text */
    font-weight: bold;
  `}

  // Стилі для НЕПРАВИЛЬНОЇ відповіді, яку обрав користувач
  ${props =>
    props.showFeedback &&
    props.isSelected &&
    !props.isCorrectOption &&
    `
    background-color: #f8d7da; /* Light red */
    border-color: #dc3545; /* Red */
    color: #721c24; /* Darker red text */
  `}
`;

export const QuizToggleIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6c757d;
  transition: transform 0.2s ease-in-out;
`;
