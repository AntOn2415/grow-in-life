// src/components/InteractiveContent/Diagram/Diagram.styled.js
import styled from "styled-components";

export const DiagramContainer = styled.div`
  width: 100%;
  max-width: 950px; /* ✅ Збільште це значення, якщо діаграма та легенда не вміщуються */
  height: 450px; /* ✅ Фіксована висота для всього контейнера */
  margin: ${({ theme }) => theme.spacing.medium} auto;
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для кольорів

  // Медіазапити для адаптації на мобільних
  ${({ theme }) => theme.media.down("md")`
    height: 300px;
    margin: ${({ theme }) => theme.spacing.small} auto;
    padding: ${({ theme }) => theme.spacing.xsmall};
  `}
`;
