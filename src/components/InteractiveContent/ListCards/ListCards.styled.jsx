import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.small};

  ${({ theme }) => theme.media.up("md")`
    padding: 0;
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору

  ${({ theme }) => theme.media.down("md")`
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  `}
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.large};
  justify-content: center;
  align-items: stretch;

  ${({ theme }) => theme.media.down("xl")`
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.medium};
  `}

  ${({ theme }) => theme.media.down("md")`
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.small};
  `}
`;

export const CardWrapper = styled.article`
  background: ${({ theme }) => theme.colors.cardBackground || theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.small};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.25s ease, background-color 0.4s ease-in-out, box-shadow 0.25s ease,
    border-color 0.4s ease-in-out; // ОНОВЛЕНО: Перехід для border-color
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder || theme.colors.borderColor};
  will-change: transform, box-shadow, height;
  outline: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primaryColor};
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
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.color};
  margin: 0;
  line-height: 1.3;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору
`;

export const CardContentWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.color};
  flex: 1;
  position: relative;
  width: 100%;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору

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
  background: ${({ theme }) => theme.colors.cardBackground || theme.colors.background};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.large};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  box-sizing: border-box;
  transition: background-color 0.4s ease-in-out; // ДОДАНО: Перехід для фону

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
            const bg = theme.colors.cardBackground || theme.colors.background;
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
            const bg = theme.colors.cardBackground || theme.colors.background;
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
  color: ${({ theme }) => theme.colors.buttonBg};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xsmall} 0;
  align-self: flex-start;
  transition: color 0.4s ease-in-out, transform 0.2s ease; // ОНОВЛЕНО: Перехід для кольору
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  z-index: 1;

  &:hover {
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.hoverBtn};
    transform: ${({ isExpanded }) => (isExpanded ? "translateY(-2px)" : "translateY(2px)")};
  }
`;
