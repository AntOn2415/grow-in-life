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
  will-change: height;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.accentBg};
  color: ${({ theme }) => theme.colors.color};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
  flex-wrap: wrap;
  word-break: break-word;
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  line-height: 1;
`;

export const CardTitle = styled(motion.div).attrs(props => ({
  as: props.as || "h4",
}))`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.color};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;
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
  margin-bottom: 0;
  & > p:first-child {
    margin-top: 0;
  }
`;
