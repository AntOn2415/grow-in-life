// src/components/Home/Home.styled.jsx
import styled from "styled-components";

export const StyledCard = styled.section`
  background-color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${({ theme }) => theme.borderRadius.large}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${({ theme }) => theme.shadows.medium}; // ОНОВЛЕНО: Використано shadows
  padding: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing

  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  `}
`;
