import styled from "styled-components";

export const StyledRevealCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.accentBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentBgHover || theme.colors.accentBg};
  }

  span:first-child {
    margin-right: ${({ theme }) => theme.spacing.xsmall};
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  a {
    color: ${({ theme }) => theme.colors.buttonColor};
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  `}
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  line-height: 1.6;
  transition: color 0.25s ease-in-out;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.accentColor};
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${({ theme }) => theme.colors.colorSecondary};
    margin-top: ${({ theme }) => theme.spacing.xsmall};
    padding-left: ${({ theme }) => theme.spacing.small};
    border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
    transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out;
  }

  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fontSizes.small};
  `}
`;

// =================================== НОВИЙ КОД ===================================
// Додано плавні переходи для нового компонента HighlightBox
export const HighlightBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.interactiveBgLight};
  border-left: 5px solid ${({ theme }) => theme.colors.interactiveBorderLight};
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.large} 0;
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

export const HighlightBoxTitle = styled.h4`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  font-weight: bold;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка
`;
