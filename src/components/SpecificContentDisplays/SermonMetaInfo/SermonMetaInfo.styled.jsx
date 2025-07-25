// src/components/SpecificContentDisplays/SermonMetaInfo/SermonMetaInfo.styled.js
import styled from "styled-components";

export const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9em;
  color: inherit; // Успадковує колір від батьківського компонента
  transition: color 0.4s ease-in-out; // Забезпечує плавний перехід кольору

  span {
    white-space: nowrap; // Запобігає розриву тексту
  }
`;

export const MetaItem = styled.span`
  /* Додаткові стилі для кожного елемента мета-інформації */
`;

export const DescriptionText = styled.p`
  margin-top: 20px;
  max-width: 600px; /* Обмеження ширини для читабельності */
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  line-height: 1.5;
  opacity: 0.9; /* Трохи приглушений */
  text-align: center; /* Центруємо опис */
`;
