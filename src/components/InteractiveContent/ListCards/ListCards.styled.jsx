// src/components/ListCards/ListCards.styled.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

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
  margin-top: 2rem; // ✅ Зменшили відступ, наприклад, з 1rem до 0.5rem
  margin-bottom: 2rem;
  font-weight: bold;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 0.1rem; // Зменшили відступ для мобільних пристроїв
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const CardWrapper = styled(motion.article)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.cardBackground || theme.background} 0%,
    ${({ theme }) => theme.cardBackgroundGradientEnd || theme.accentBg} 100%
  );
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.2rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.cardBorder || theme.borderColor};
  will-change: transform, box-shadow, height;
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
  //font-weight: 700;
  line-height: 1.3;
`;

export const CardContentWrapper = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.color};
  overflow: hidden;
  flex: 1;
  position: relative;
  width: 100%;

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

export const ReadMoreButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.buttonBg};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  cursor: pointer;
  padding: 0.5rem 0;
  align-self: flex-start;
  margin-top: 1.5rem;
  transition: color 0.2s ease-in-out, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border: none;
    box-shadow: none;

    color: ${({ theme }) => theme.hoverBtn};
    transform: translateX(5px);
  }
`;
