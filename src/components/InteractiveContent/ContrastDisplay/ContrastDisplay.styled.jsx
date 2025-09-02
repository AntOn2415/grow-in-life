// src/components/InteractiveContent/ContrastDisplay/ContrastDisplay.styled.jsx
import styled from "styled-components";

export const ContrastDisplayContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.small};

  ${({ theme }) => theme.media.up("sm")`
    padding: 0;
  `}
`;

export const ContrastItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;

export const ContrastItem = styled.div`
  flex: 1 1 auto;
  max-width: calc(50% - ${({ theme }) => theme.spacing.small});

  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.25s ease-in-out;

  background-color: ${props => {
    if (props.$type === "positive") return props.theme.colors.positiveBackground;
    if (props.$type === "negative") return props.theme.colors.negativeBackground;
    if (props.$type === "neutral1") return props.theme.colors.neutralBackground1;
    if (props.$type === "neutral2") return props.theme.colors.neutralBackground2;
    return props.theme.colors.cardBackground;
  }};
  border: 1px solid
    ${props => {
      if (props.$type === "positive") return props.theme.colors.positiveBorder;
      if (props.$type === "negative") return props.theme.colors.negativeBorder;
      if (props.type === "neutral1") return props.theme.colors.neutralBorder1;
      if (props.type === "neutral2") return props.theme.colors.neutralBorder2;
      return props.theme.colors.borderColor;
    }};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.media.down("sm")`
    max-width: 100%;
  `}
  min-width: 280px;
`;

export const ItemHeading = styled.div.attrs(props => ({
  // ✅ Забезпечуємо динамічний рендеринг тега
  as: props.as || "h4",
}))`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  flex-wrap: wrap;
  word-break: break-word;
  color: ${props => {
    if (props.$type === "positive") return props.theme.colors.positiveText;
    if (props.$type === "negative") return props.theme.colors.negativeText;
    if (props.$type === "neutral1") return props.theme.colors.neutralText1;
    if (props.$type === "neutral2") return props.theme.colors.neutralText2;
    return props.theme.colors.color;
  }};
`;

export const ItemEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-right: ${({ theme }) => theme.spacing.xsmall};
`;

export const ItemContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.color};

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
