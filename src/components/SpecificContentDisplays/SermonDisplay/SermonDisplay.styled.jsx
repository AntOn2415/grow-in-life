// src/components/SpecificContentDisplays/SermonDisplay/SermonDisplay.styled.js
import styled from "styled-components";
import { MetaContainer } from "../SermonMetaInfo/SermonMetaInfo.styled"; // Імпортуємо MetaContainer

export const SermonDisplayContainer = styled.div`
  /* Загальні стилі для контейнера вмісту проповіді */
  // Не має theme-залежних властивостей, які потребують transition.
`;

export const SermonTitleWrapper = styled.div`
  /* Нова стилізація для секції "герой" */
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.gradientStart} 0%, ${theme.colors.gradientEnd} 100%)`}; // ОНОВЛЕНО
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використовуємо theme.colors
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge}; // ОНОВЛЕНО: Використовуємо spacing
  box-shadow: ${({ theme }) => theme.shadows.medium}; // ОНОВЛЕНО: Використовуємо shadows

  // Перехід налаштований і працює коректно
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  /* Стилі для основного заголовка h2 всередині цього блоку */
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge}; // ОНОВЛЕНО: Використовуємо fontSizes
    margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
    line-height: 1.2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  }

  /* Регулювання стилів MetaContainer, коли він знаходиться всередині SermonTitleWrapper */
  ${MetaContainer} {
    margin-top: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використовуємо spacing
    font-size: 1.1em;
  }

  /* Медіа-запити для адаптивності */
  ${({ theme }) => theme.media.down("sm")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    padding: ${({ theme }) => theme.spacing.large} ${({ theme }) =>
    theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.xlarge}; // ОНОВЛЕНО: Використовуємо fontSizes
    }
    ${MetaContainer} {
      font-size: 1em;
    }
  `}
`;

export const MainContentWrapper = styled.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використовуємо spacing
  padding-left: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
  padding-right: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
`;

export const SermonTextWrapper = styled.div`
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використовуємо theme.colors

  // ДОДАНО: Плавний перехід для кольору тексту
  transition: color 0.25s ease-in-out;
`;

export const StyledParagraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: Використовуємо fontSizes
  line-height: 1.6;
`;

export const RevealCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використовуємо spacing
  margin-top: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використовуємо spacing
  margin-bottom: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використовуємо spacing
  justify-items: center;

  ${({ theme }) => theme.media.up("sm")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.media.up("md")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    grid-template-columns: repeat(3, 1fr);
  `}
`;
