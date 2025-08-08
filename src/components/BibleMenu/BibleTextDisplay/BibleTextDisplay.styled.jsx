// src/components/BibleMenu/BibleTextDisplay.styled.js
import styled from "styled-components";

export const BibleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const ChapterHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.color};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

export const VerseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const Verse = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 1.6;
`;

export const VerseNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.colorSecondary};
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  min-width: 20px;
  text-align: right;
`;

export const VerseText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
`;

export const NextChapterButton = styled.button`
  width: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  min-width: 60px;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
    transition: background 0.25s ease-in-out;
  }
  ${({ theme }) => theme.media.up("md")`
    margin-left: 140px;
  `}
`;
