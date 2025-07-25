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
    theme.mode === "light"
      ? `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)` // У світлій темі: дуже світлий градієнт
      : `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`}; /* У темній темі: градієнт залишається */
  color: ${({ theme }) =>
    theme.color}; /* Основний колір тексту теми (темний у світлій, світлий у темній) */
  padding: 4rem 1rem;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  // *** Цей рядок є ключовим для анімації цього компонента ***
  // ЧУДОВО! Перехід вже налаштований і працює коректно для background та color.
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  /* Стилі для основного заголовка h2 всередині цього блоку */
  h2 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05); // Дуже легка тінь для тексту
    // Колір цього h2 буде успадковано від SermonTitleWrapper.
    // Оскільки SermonTitleWrapper має transition: color, то і h2 буде плавно змінювати колір.
  }

  /* Регулювання стилів MetaContainer, коли він знаходиться всередині SermonTitleWrapper */
  ${MetaContainer} {
    margin-top: 2rem;
    font-size: 1.1em;
    // Колір буде успадковано від батьківського SermonTitleWrapper.
    // Тому він також буде плавно змінюватися.
  }

  /* Медіа-запити для адаптивності */
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h2 {
      font-size: 2.2rem;
    }
    ${MetaContainer} {
      font-size: 1em;
    }
  }
`;

export const MainContentWrapper = styled.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  // Не має theme-залежних властивостей, які потребують transition.
`;

export const SermonTextWrapper = styled.div`
  color: ${({ theme }) => theme.color}; // Колір тексту проповіді з теми

  // ДОДАНО: Плавний перехід для кольору тексту
  transition: color 0.4s ease-in-out;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1.15rem;
  line-height: 1.6;
  // Колір цього параграфа буде успадковано від батьківського SermonTextWrapper.
  // Оскільки SermonTextWrapper тепер має transition: color, то і параграф буде плавно змінювати колір.
`;

export const RevealCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  // Не має theme-залежних властивостей, які потребують transition.
`;
