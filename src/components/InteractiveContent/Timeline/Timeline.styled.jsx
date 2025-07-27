import styled from "styled-components";

export const TimelineContainer = styled.div`
  margin: 3rem 0;
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${({ theme }) => theme.borderColor}; // ✅ З теми
  }
`;

export const TimelineEvent = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 30px;
`;

export const EventDot = styled.div`
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.accentColor}; // ✅ З теми
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.background}; // ✅ З теми
  z-index: 1;
`;

export const EventContent = styled.div`
  background-color: ${({ theme }) => theme.background}; // ✅ З теми
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small}; // ✅ З теми
  box-shadow: ${({ theme }) => theme.shadows.small}; // ✅ З теми
  border: 1px solid ${({ theme }) => theme.borderColor}; // ✅ З теми

  p {
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.accentColor}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${({ theme }) => theme.colorSecondary}; // ✅ З теми
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${({ theme }) => theme.borderColor}; // ✅ З теми
  }
`;

export const EventTitle = styled.h4`
  color: ${({ theme }) => theme.accentColor}; // ✅ З теми
  font-size: ${({ theme }) => theme.fontSizes.large}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */

  a {
    color: ${({ theme }) => theme.accentColor}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const EventDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ✅ З теми
  color: ${({ theme }) => theme.color}; // ✅ З теми
  line-height: 1.5;
  margin-bottom: 0;

  strong {
    font-weight: bold; /* Залишаємо, якщо не в темі */
  }

  em {
    font-style: italic;
  }

  a {
    color: ${({ theme }) => theme.accentColor}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${({ theme }) => theme.colorSecondary}; // ✅ З теми
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${({ theme }) => theme.borderColor}; // ✅ З теми
  }
`;
