// src/components/InteractiveContent/RevealCard/RevealCard.styled.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledRevealCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.accentBg};
  color: ${({ theme }) => theme.colors.color};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const CardAnswerContainer = styled(motion.div)`
  overflow: hidden;
  will-change: height;
`;

export const CardContent = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  line-height: 1.6;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
