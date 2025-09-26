// src/components/SpecificContentDisplays/Timeline/Timeline.styled.js

import styled from "styled-components";
import { motion } from "framer-motion";

export const TimelineContainer = styled(motion.section)`
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
  position: relative;
  padding-left: 30px;
  padding-top: 5px;
  padding-right: ${({ theme }) => theme.spacing.small};
  overflow-x: hidden;
  padding-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.borderColor};
    z-index: 0;
    transition: background-color 0.25s ease-in-out;
  }

  ${({ theme }) => theme.media.down("sm")`
    padding-left: 15px;
    padding-right: ${({ theme }) => theme.spacing.xxsmall};
    
    &::before {
      left: 5px;
    }
  `}
`;

export const HorizontalLine = styled.div`
  display: none;
`;

export const TimelineEventWrapper = styled(motion.div)`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  padding-left: 30px;
  text-align: left;

  ${({ theme }) => theme.media.down("sm")`
    padding-left: 20px;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  `}
`;

export const EventDot = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.background};
  z-index: 1;
  transform-origin: center;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    width: 10px;
    height: 10px;
    border: 1px solid ${({ theme }) => theme.colors.background};
  `}
`;

export const EventContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;
`;

export const EventTitle = styled.h3.attrs(props => ({
  as: props.as || "h4",
}))`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;

  position: relative;

  & > span:first-child {
    display: block;
    padding-right: 30px;
  }

  & > span:last-child {
    position: absolute;
    top: 15%;
    right: 4px;
    transform: translateY(-50%);

    flex-shrink: 0;
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.colorSecondary};
    transition: color 0.25s ease-in-out;
  }

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    
    & > span:first-child {
        padding-right: 25px;
    }
    
    & > span:last-child {
        right: 0px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  `}
`;

export const EventYear = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.colorSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  white-space: nowrap;
  font-weight: normal;
  transition: color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  `}
`;

export const EventDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  line-height: 1.5;
  margin-bottom: 0;
  word-wrap: break-word;
  transition: color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
  `}
`;

export const EventVersesContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xxsmall};
  border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  cursor: default;
  transition: border-top-color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("sm")`
    gap: 6px;
    margin-top: ${({ theme }) => theme.spacing.xsmall};
    padding-top: ${({ theme }) => theme.spacing.xxsmall};
  `}
`;
