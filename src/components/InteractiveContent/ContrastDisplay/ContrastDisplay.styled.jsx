// src/components/InteractiveContent/ContrastDisplay/ContrastDisplay.styled.jsx
import styled from "styled-components";

export const ContrastDisplayContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використано spacing

  ${({ theme }) => theme.media.up("sm")` // ОНОВЛЕНО: Використано медіазапит з теми
    padding: 0;
  `}
`;

export const ContrastItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;

export const ContrastItem = styled.div`
  flex: 1 1 auto;
  max-width: calc(50% - ${({ theme }) => theme.spacing.small}); // ОНОВЛЕНО: Використано spacing

  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.borderColor}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${({ theme }) => theme.shadows.small}; // ОНОВЛЕНО: Використано shadows
  transition: all 0.3s ease-in-out;

  background-color: ${props => {
    if (props.$type === "positive") return props.theme.colors.positiveBackground; // ОНОВЛЕНО
    if (props.$type === "negative") return props.theme.colors.negativeBackground; // ОНОВЛЕНО
    if (props.$type === "neutral1") return props.theme.colors.neutralBackground1; // ОНОВЛЕНО
    if (props.$type === "neutral2") return props.theme.colors.neutralBackground2; // ОНОВЛЕНО
    return props.theme.colors.cardBackground; // ОНОВЛЕНО
  }};
  border: 1px solid
    ${props => {
      if (props.$type === "positive") return props.theme.colors.positiveBorder; // ОНОВЛЕНО
      if (props.$type === "negative") return props.theme.colors.negativeBorder; // ОНОВЛЕНО
      if (props.$type === "neutral1") return props.theme.colors.neutralBorder1; // ОНОВЛЕНО
      if (props.$type === "neutral2") return props.theme.colors.neutralBorder2; // ОНОВЛЕНО
      return props.theme.colors.borderColor; // ОНОВЛЕНО
    }};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium}; // ОНОВЛЕНО: Використано shadows
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.media.down("sm")` // ОНОВЛЕНО: Використано медіазапит з теми
    max-width: 100%;
  `}
  min-width: 280px;
`;

export const ItemHeading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.large}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використано spacing
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.$type === "positive") return props.theme.colors.positiveText; // ОНОВЛЕНО
    if (props.$type === "negative") return props.theme.colors.negativeText; // ОНОВЛЕНО
    if (props.$type === "neutral1") return props.theme.colors.neutralText1; // ОНОВЛЕНО
    if (props.$type === "neutral2") return props.theme.colors.neutralText2; // ОНОВЛЕНО
    return props.theme.colors.color; // ОНОВЛЕНО
  }};
`;

export const ItemEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}; // ОНОВЛЕНО: Використано fontSizes
  margin-right: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використано spacing
`;

export const ItemContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: Використано fontSizes
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
