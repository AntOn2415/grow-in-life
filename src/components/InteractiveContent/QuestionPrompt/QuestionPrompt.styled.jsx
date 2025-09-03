import styled from "styled-components";

export const QuestionPromptContainer = styled.section`
  // ✅ Замінено на 'section'
  background-color: ${({ theme }) => theme.colors.interactiveBgYellow};
  border: 1px solid ${({ theme }) => theme.colors.interactiveBorderYellow};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
  `}
`;

export const QuestionEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  `}
`;

// ✅ Новий динамічний компонент для заголовка
export const QuestionHeading = styled.h3.attrs(props => ({
  as: props.as || "h3",
}))`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.color};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  transition: color 0.25s ease-in-out;
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.medium};
  `}
`;

export const ToggleAnswerButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  border: none;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }

  ${({ theme }) => theme.media.down("sm")`
    margin-bottom: ${({ theme }) => theme.spacing.small};
  `}
`;

export const AnswerText = styled.p`
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 3px solid ${({ theme }) => theme.colors.successColor};
  padding: ${({ theme }) => theme.spacing.small};
  font-style: italic;
  color: ${({ theme }) => theme.colors.color};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 100%;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.xsmall};
  `}
`;
