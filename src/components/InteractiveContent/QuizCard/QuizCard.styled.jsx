// src/components/InteractiveContent/QuizCard/QuizCard.styled.js
import styled from "styled-components";

export const StyledQuizCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для фону, межі та тіні

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  `}
`;

export const QuizQuestion = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;

  flex-wrap: wrap;
  word-break: break-word;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту запитання

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const QuizOptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.small};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-top: ${({ theme }) => theme.spacing.small};

  transition: border-color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору верхньої межі списку опцій

  ${({ theme }) => theme.media.down("sm")`
    margin-top: ${({ theme }) => theme.spacing.xsmall};
    padding-top: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const QuizOptionItem = styled.li`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;

  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для всіх кольорових властивостей

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBg};
  }

  ${props =>
    props.isSelected &&
    `
    background-color: ${props.theme.colors.accentBg};
    border-color: ${props.theme.colors.accentColor};
    color: ${props.theme.colors.buttonColor};
  `}

  ${props =>
    props.showFeedback &&
    props.isCorrectOption &&
    `
    background-color: ${props.theme.colors.successBg};
    border-color: ${props.theme.colors.successColor};
    color: ${props.theme.colors.successText};
    font-weight: bold;
  `}

  ${props =>
    props.showFeedback &&
    props.isSelected &&
    !props.isCorrectOption &&
    `
    background-color: ${props.theme.colors.dangerBg};
    border-color: ${props.theme.colors.dangerColor};
    color: ${props.theme.colors.dangerText};
  `}
  
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const QuizToggleIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.color};

  transition: transform 0.2s ease-in-out, color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для кольору іконки
`;
