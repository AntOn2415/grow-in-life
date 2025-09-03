// src/common/Tooltip/Tooltip.styles.js

import { motion } from "framer-motion";
import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled(motion.div)`
  position: fixed;
  z-index: 9999;

  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.color};
  padding: ${({ theme }) => theme.spacing.xxsmall} ${({ theme }) => theme.spacing.xsmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  white-space: normal;
  max-width: 250px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  text-align: ${({ alignment }) => (alignment === "left" ? "left" : "center")};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: ${({ theme }) => theme.spacing.xxsmall} 0;
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
    }
  }

  // Стрілка (якщо потрібна)
  // Приклад:
  /*
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
  }

  &[data-placement="top"]::before {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-color: ${({ theme }) => theme.colors.borderColor} transparent transparent transparent;
  }
  */
`;

// Тепер вам потрібно буде передати пропс `alignment`
// з компонента Tooltip.jsx до TooltipContent
// <TooltipContent alignment={alignment}>...
