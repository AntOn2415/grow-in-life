// src/components/InteractiveContent/RevealCard/RevealCard.styled.js
import styled from "styled-components";

export const StyledRevealCard = styled.div`
  background-color: #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px; /* Для гарного відображення у сітці */
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-weight: bold;
  color: #495057;
  font-size: 1.1em;
`;

export const CardContent = styled.div`
  padding: 0 20px 15px;
  color: #6c757d;
  font-size: 0.95em;
  line-height: 1.5;
`;
