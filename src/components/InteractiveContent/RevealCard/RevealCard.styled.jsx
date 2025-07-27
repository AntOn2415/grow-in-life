import styled from "styled-components";

export const StyledRevealCard = styled.div`
  background-color: ${({ theme }) => theme.background}; // ✅ З теми
  border: 1px solid ${({ theme }) => theme.borderColor}; // ✅ З теми
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // ✅ З теми
  box-shadow: ${({ theme }) => theme.shadows.small}; // ✅ З теми
  overflow: hidden; /* Щоб вміст не виходив за рамки */
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium}; // ✅ З теми
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.accentBg}; // ✅ З теми
  color: ${({ theme }) => theme.buttonColor}; // ✅ З теми (для контрасту на accentBg)
  font-weight: bold; /* Залишаємо, якщо не в темі */
  font-size: ${({ theme }) => theme.fontSizes.large}; // ✅ З теми
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.accentBgHover || theme.accentBg}; // ✅ З теми
  }

  span:first-child {
    /* Для емодзі */
    margin-right: 0.75rem;
    font-size: ${({ theme }) => theme.fontSizes.xlarge}; // ✅ З теми
  }

  a {
    /* Стилі для посилань всередині заголовка картки */
    color: ${({ theme }) => theme.buttonColor}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ✅ З теми
  color: ${({ theme }) => theme.color}; // ✅ З теми
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
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
