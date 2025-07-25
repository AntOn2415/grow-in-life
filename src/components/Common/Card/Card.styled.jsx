import styled from "styled-components";

export const StyledCard = styled.section`
  background-color: ${({ theme }) =>
    theme.background}; /* Тепер використовує основний колір фону з теми */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Тінь залишена без змін */
  padding: 2rem;
  margin-bottom: 2rem;

  // ДОДАНО: Плавний перехід для фонового кольору та тіні
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
`;
