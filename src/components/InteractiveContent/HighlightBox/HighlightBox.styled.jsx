import styled from "styled-components";

export const HighlightBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.interactiveBgLight}; // ✅ З теми
  border-left: 5px solid ${({ theme }) => theme.interactiveBorderLight}; // ✅ З теми
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // ✅ З теми
  display: flex;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadows.small}; // ✅ З теми
`;

export const HighlightBoxEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge}; // ✅ З теми
  margin-right: 1.5rem;
  line-height: 1;
`;

export const HighlightBoxContent = styled.div`
  flex-grow: 1;
`;

export const HighlightBoxTitle = styled.h4`
  color: ${({ theme }) => theme.accentColor}; // ✅ З теми
  font-size: ${({ theme }) => theme.fontSizes.large}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */
`;
