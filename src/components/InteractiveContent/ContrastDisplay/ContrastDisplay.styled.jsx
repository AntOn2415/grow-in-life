// src/components/InteractiveContent/ContrastDisplay/ContrastDisplay.styled.jsx
import styled from "styled-components";

export const ContrastDisplayContainer = styled.div`
  // ✅ Додано export
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const ContrastItemsWrapper = styled.div`
  // ✅ Додано export
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;

export const ContrastItem = styled.div`
  flex: 1 1 auto;
  max-width: calc(50% - 0.75rem);

  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.cardBackground || theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor || theme.accentBg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease-in-out;

  background-color: ${props => {
    if (props.$type === "positive") return props.theme.positiveBackground;
    if (props.$type === "negative") return props.theme.negativeBackground;
    if (props.$type === "neutral1") return props.theme.neutralBackground1;
    if (props.$type === "neutral2") return props.theme.neutralBackground2;
    return props.theme.cardBackground;
  }};
  border: 1px solid
    ${props => {
      if (props.$type === "positive") return props.theme.positiveBorder;
      if (props.$type === "negative") return props.theme.negativeBorder;
      if (props.$type === "neutral1") return props.theme.neutralBorder1;
      if (props.$type === "neutral2") return props.theme.neutralBorder2;
      return props.theme.cardBorder;
    }};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-2px);
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
  min-width: 280px;
`;

export const ItemHeading = styled.h4`
  // ✅ Додано export
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.$type === "positive") return props.theme.positiveText;
    if (props.$type === "negative") return props.theme.negativeText;
    if (props.$type === "neutral1") return props.theme.neutralText1;
    if (props.$type === "neutral2") return props.theme.neutralText2;
    return props.theme.color;
  }};
`;

export const ItemEmoji = styled.span`
  // ✅ Додано export
  font-size: 2rem;
  margin-right: 0.8rem;
`;

export const ItemContent = styled.div`
  // ✅ Додано export
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color};

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
