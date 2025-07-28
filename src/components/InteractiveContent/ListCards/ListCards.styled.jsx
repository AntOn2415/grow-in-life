// src/components/InteractiveContent/ListCards/ListCards.styled.jsx
import styled from "styled-components";

export const ListCardsContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: stretch;
`;

export const ExpandedContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-sizing: border-box;

  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.borderColor};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accentBg};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accentColor};
  }

  div {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.color};
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 0;

    p {
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const CardItem = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  ${props =>
    !props.$isActive &&
    `
    height: 290px; // ✅ Збільшили початкову висоту картки
  `}
  ${props =>
    props.$isActive &&
    `
    height: 290px;
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const CardEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 0.4rem; // ✅ Зменшили відступ, наприклад, з 0.8rem до 0.4rem
`;

export const CardTitle = styled.h5`
  color: ${({ theme }) => theme.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding: 0;
  margin-top: 15px; // ✅ Зменшили відступ, наприклад, з 1rem до 0.5rem
  margin-bottom: 0.2rem;
  font-weight: bold;
  line-height: 1.3;
`;

export const CardContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.color};
  line-height: 1.6;
  flex-grow: 1;

  ${props =>
    !props.$isActive &&
    `
    max-height: 120px; 
    overflow: hidden;
    transition: max-height 0.5s ease-in-out; 
  `}
  ${props =>
    props.$isActive &&
    `
    max-height: 1000px; 
    overflow: visible;
    transition: max-height 0.5s ease-in-out; 
  `}

  p {
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .bible-quote {
    font-style: italic;
    color: ${({ theme }) => theme.colorSecondary};
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${({ theme }) => theme.borderColor};
  }
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.5rem;
  cursor: pointer;
  align-self: flex-start;
  text-align: left;
  width: auto;
  white-space: nowrap;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
