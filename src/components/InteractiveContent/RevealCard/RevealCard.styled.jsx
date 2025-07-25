// src/components/InteractiveContent/RevealCard/RevealCard.styled.js
import styled from "styled-components";

export const StyledRevealCard = styled.div`
  background-color: ${({ theme }) => theme.navBg}; // Використано колір фону навігації для картки
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Тінь залишена без змін
  width: 100%;
  max-width: 320px; /* Для гарного відображення у сітці */
  cursor: pointer;

  // ОНОВЛЕНО: Більш специфічний перехід.
  // 0.4s для зміни фону (з темою), 0.3s для тіні (наведення).
  transition: background-color 0.4s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); // Тінь при наведенні залишена без змін
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color}; // Колір заголовка з теми
  font-size: 1.1em;

  // ДОДАНО: Плавний перехід для кольору заголовка (оскільки це div, а не h-тег)
  transition: color 0.4s ease-in-out;
`;

export const CardContent = styled.div`
  padding: 0 20px 15px;
  color: ${({ theme }) => theme.color}; // Колір тексту контенту з теми
  font-size: 0.95em;
  line-height: 1.5;

  // ДОДАНО: Плавний перехід для кольору контенту
  transition: color 0.4s ease-in-out;
`;
