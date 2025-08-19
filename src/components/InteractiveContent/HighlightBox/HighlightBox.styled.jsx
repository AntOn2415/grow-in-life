import styled from "styled-components";

export const HighlightBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.interactiveBgLight};
  border-left: 5px solid ${({ theme }) => theme.colors.interactiveBorderLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для фону, межі та тіні

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`;

export const HighlightBoxEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-right: ${({ theme }) => theme.spacing.medium};
  line-height: 1;

  ${({ theme }) => theme.media.down("sm")`
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  `}
`;

export const HighlightBoxContent = styled.div`
  flex-grow: 1;
`;

export const HighlightBoxTitle = styled.h4.attrs(props => ({
  as: props.as || "h2",
}))`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  font-weight: bold;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка
`;
