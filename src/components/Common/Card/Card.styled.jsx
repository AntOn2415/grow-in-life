// src/components/Home/Home.styled.jsx
import styled from "styled-components";

export const StyledCard = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing

  ${({ theme }) => theme.media.down("md")`
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  `}
`;
