// src/components/InteractiveContent/Diagram/Diagram.styled.js
import styled from "styled-components";

export const DiagramContainer = styled.div`
  width: 100%;
  max-width: 950px; /* ✅ Збільште це значення, якщо діаграма та легенда не вміщуються */
  height: 450px; /* ✅ Фіксована висота для всього контейнера */
  margin: 20px auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
