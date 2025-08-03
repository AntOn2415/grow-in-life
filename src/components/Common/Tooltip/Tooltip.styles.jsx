// src/common/Tooltip/Tooltip.styles.js
import { motion } from "framer-motion";
import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled(motion.div)`
  position: fixed;

  /* Позиціювання буде встановлюватися динамічно через 'style' пропс */

  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.color};
  padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xsmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  white-space: normal; /* <--- Змінено: дозволяє перенос тексту */
  max-width: 250px; /* <--- Додано: обмежує ширину підказки */
  text-align: center; /* Центруємо текст */

  z-index: 9999;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  /* Стрілка видалена - видаляємо весь блок ::after */
`;
