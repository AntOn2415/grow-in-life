// src/components/SpecificContentDisplays/SermonMetaInfo/SermonMetaInfo.styled.js
import styled from "styled-components";

export const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: використовуємо spacing
  font-size: ${({ theme }) => theme.fontSizes.small}; // ОНОВЛЕНО: використовуємо fontSizes
  color: inherit;
  transition: color 0.25s ease-in-out;

  span {
    white-space: nowrap;
  }
`;

export const MetaItem = styled.span`
  /* Додаткові стилі для кожного елемента мета-інформації */
`;

export const DescriptionText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: використовуємо spacing
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: використовуємо fontSizes
  line-height: 1.5;
  opacity: 0.9;
  text-align: center;
`;
