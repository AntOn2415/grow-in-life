import styled from "styled-components";

export const ListCardsContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const CardItem = styled.div`
  background-color: ${({ theme }) => theme.background}; // ✅ З теми
  border: 1px solid ${({ theme }) => theme.borderColor}; // ✅ З теми
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // ✅ З теми
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.small}; // ✅ З теми
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium}; // ✅ З теми
  }
`;

export const CardEmoji = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xlarge}; // ✅ З теми
  margin-bottom: 0.8rem;
`;

export const CardTitle = styled.h5`
  color: ${({ theme }) => theme.accentColor}; // ✅ З теми
  font-size: ${({ theme }) => theme.fontSizes.large}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */
  line-height: 1.3;
`;

export const CardContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ✅ З теми
  color: ${({ theme }) => theme.color}; // ✅ З теми
  line-height: 1.6;

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
