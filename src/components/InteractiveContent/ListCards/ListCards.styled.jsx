import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 0.1rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const CardWrapper = styled.article`
  background: ${({ theme }) => theme.cardBackground || theme.background};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.cardBorder || theme.borderColor};
  will-change: transform, box-shadow, height; /* 'height' тут не потрібен, якщо Framer Motion його анімує на дочірньому елементі */
  outline: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.primaryColor};
  }

  &:focus-within {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-5px);
  }

  &[tabindex="0"]:focus-visible {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const Emoji = styled.span`
  font-size: 2rem;
  margin-right: 0.8rem;
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.color};
  margin: 0;
  line-height: 1.3;
`;

export const CardContentWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.color};
  flex: 1;
  position: relative;
  width: 100%;

  padding-bottom: ${({ isExpanded }) => (isExpanded ? "5.5rem" : "0")};

  p {
    margin-bottom: 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground || theme.background};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.large};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: -3rem;
    left: 0;
    width: 100%;
    height: 3rem;
    background: linear-gradient(
      to bottom,
      rgba(
          ${({ theme }) => {
            const bg = theme.cardBackground || theme.background;
            const hexToRgb = hex =>
              hex
                .replace(
                  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                  (m, r, g, b) => "#" + r + r + g + g + b + b
                )
                .substring(1)
                .match(/.{2}/g)
                .map(x => parseInt(x, 16));
            const rgb = hexToRgb(bg);
            return rgb ? rgb.join(",") : "255,255,255";
          }},
          0
        )
        0%,
      rgba(
          ${({ theme }) => {
            const bg = theme.cardBackground || theme.background;
            const hexToRgb = hex =>
              hex
                .replace(
                  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                  (m, r, g, b) => "#" + r + r + g + g + b + b
                )
                .substring(1)
                .match(/.{2}/g)
                .map(x => parseInt(x, 16));
            const rgb = hexToRgb(bg);
            return rgb ? rgb.join(",") : "255,255,255";
          }},
          0.9
        )
        100%
    );
    pointer-events: none;
  }
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.buttonBg};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  cursor: pointer;
  padding: 0.5rem 0;
  align-self: flex-start;
  transition: color 0.2s ease-in-out, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;

  &:hover {
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.hoverBtn};
    transform: ${({ isExpanded }) => (isExpanded ? "translateY(-2px)" : "translateY(2px)")};
  }
`;
