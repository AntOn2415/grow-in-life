// src/components/SpecificContentDisplays/SermonMetaInfo/SermonMetaInfo.styled.js
import styled from "styled-components";

export const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  font-size: 0.95em;
  color: #f1f3f5; /* Світліший колір на темному фоні */
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
