import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuizCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.medium};

  margin-bottom: ${({ theme }) => theme.spacing.medium};

  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.25s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.large};
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.small}; 
    
    transform: none;
    box-shadow: ${({ theme }) => theme.shadows.medium};

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const QuizQuestion = styled.div.attrs(props => ({
  as: props.as || "h4",
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;
  padding: 0;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.sectionTitleHover};
  }

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.medium};
  `}
`;

export const QuizOptionsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
  transition: all 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    margin-top: ${({ theme }) => theme.spacing.small};
    gap: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const QuizOptionItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBg};
    border-color: ${({ theme }) => theme.colors.accentBg};
  }

  ${({ theme }) => theme.media.down("sm")`
    transform: none;
    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
        border-color: ${({ theme }) => theme.colors.dividerColor};
    }
  `}

  ${props =>
    props.isSelected &&
    !props.showFeedback &&
    `
    background-color: ${props.theme.colors.interactiveBgYellow};
    border-color: ${props.theme.colors.interactiveBorderYellow};
    color: ${props.theme.colors.accentColor};
    font-weight: 600;
    box-shadow: ${props.theme.shadows.medium};
  `}

  ${props =>
    props.showFeedback &&
    props.isCorrectOption &&
    `
    background-color: ${props.theme.colors.positiveBackground};
    border-color: ${props.theme.colors.positiveBorder};
    color: ${props.theme.colors.positiveText};
    font-weight: bold;
  `}

  ${props =>
    props.showFeedback &&
    props.isSelected &&
    !props.isCorrectOption &&
    `
    background-color: ${props.theme.colors.negativeBackground};
    border-color: ${props.theme.colors.negativeBorder};
    color: ${props.theme.colors.negativeText};
  `}
  
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const QuizToggleIcon = styled.span`
  position: relative;
  width: ${({ theme }) => theme.fontSizes.xxlarge};
  height: ${({ theme }) => theme.fontSizes.xxlarge};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props =>
      props.$isActive ? props.theme.colors.sectionTitleHover : props.theme.colors.colorSecondary};
    font-size: 120%;

    transition: color 0.25s ease-in-out;
  }
`;
