// src/components/InteractiveContent/QuizCard/QuizCard.styled.js
import styled from "styled-components";

export const StyledQuizCard = styled.div`
  background-color: ${({ theme }) => theme.background}; // Основний фон картки
  border: 1px solid ${({ theme }) => theme.borderColor}; // Межа картки
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); // Тінь залишена без змін

  // ДОДАНО: Плавні переходи для фону та межі картки
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
`;

export const QuizQuestion = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color}; // Колір тексту запитання
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h4 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює.
`;

export const QuizOptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.borderColor}; // Межа для списку опцій
  padding-top: 15px;

  // ДОДАНО: Плавний перехід для кольору верхньої межі списку опцій
  transition: border-color 0.4s ease-in-out;
`;

export const QuizOptionItem = styled.li`
  background-color: ${({ theme }) => theme.background}; // Фон опції
  border: 1px solid ${({ theme }) => theme.borderColor}; // Межа опції
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color}; // Колір тексту опції
  cursor: pointer;

  // ЧУДОВО! Переходи вже визначені тут, вони охоплюють всі зміни кольорів та фону
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg}; // Колір фону при наведенні
  }

  // Стилі для обраної відповіді
  ${props =>
    props.isSelected &&
    `
    background-color: ${props.theme.accentBg}; // Акцентний фон для обраної
    border-color: ${props.theme.accentColor}; // Акцентний колір межі для обраної
    color: ${props.theme.buttonColor}; // Колір тексту для обраної (як buttonColor для контрасту)
  `}

  // Стилі для правильної відповіді, що відображаються ЛИШЕ ПІСЛЯ ВИБОРУ КОРИСТУВАЧЕМ
  ${props =>
    props.showFeedback &&
    props.isCorrectOption &&
    `
    background-color: ${props.theme.successBg}; // Фон для правильної відповіді
    border-color: ${props.theme.successColor}; // Межа для правильної відповіді
    color: ${props.theme.successText}; // Текст для правильної відповіді
    font-weight: bold;
  `}

  // Стилі для НЕПРАВИЛЬНОЇ відповіді, яку обрав користувач
  ${props =>
    props.showFeedback &&
    props.isSelected &&
    !props.isCorrectOption &&
    `
    background-color: ${props.theme.dangerBg}; // Фон для неправильної відповіді
    border-color: ${props.theme.dangerColor}; // Межа для неправильної відповіді
    color: ${props.theme.dangerText}; // Текст для неправильної відповіді
  `}
`;

export const QuizToggleIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color}; // Колір іконки

  // ДОДАНО: Перехід для кольору іконки (на додаток до transform)
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
`;
