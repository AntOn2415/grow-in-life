// src/components/SpecificContentDisplays/SermonDisplay/SermonDisplay.styled.js
import styled from "styled-components";
import { MetaContainer } from "../SermonMetaInfo/SermonMetaInfo.styled"; // Імпортуємо MetaContainer для стилізації

export const SermonDisplayContainer = styled.div`
  /* Загальні стилі для контейнера вмісту проповіді */
`;

export const SermonTitleWrapper = styled.div`
  /* Нова стилізація для секції "герой" */
  background: linear-gradient(
    135deg,
    #1d3557 0%,
    #457b9d 100%
  ); /* Глибокий синій до світлішого синього градієнт */
  color: #f1faee; /* Дуже світлий колір для тексту, щоб контрастувати з фоном */
  padding: 4rem 1rem; /* Збільшені вертикальні відступи для більшого простору */
  text-align: center;
  margin-bottom: 3rem; /* Більше відступу знизу, щоб "герой" виглядав окремо */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Легка тінь для глибини */

  /* Стилі для основного заголовка h2 всередині цього блоку */
  h2 {
    font-size: 2.8rem; /* Більший розмір шрифту */
    margin-bottom: 1rem;
    line-height: 1.2;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Тінь для тексту заголовка */
  }

  /* Регулювання стилів MetaContainer, коли він знаходиться всередині SermonTitleWrapper */
  ${MetaContainer} {
    margin-top: 2rem; /* Більше місця для мета-інформації */
    font-size: 1.1em;
    color: #a8dadc; /* Трохи приглушений колір для мета-інформації */
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
  max-width: 960px; /* container */
  margin-left: auto; /* mx-auto */
  margin-right: auto; /* mx-auto */
  margin-top: 2rem; /* mt-8 */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
`;

export const SermonTextWrapper = styled.div`
  color: #4a5568; /* text-gray-700 */
`;

export const StyledParagraph = styled.p`
  margin-bottom: 1rem; /* mb-4 */
  font-size: 1.15rem;
  line-height: 1.6;
`;

export const RevealCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* gap-6 */
  margin-top: 1.5rem; /* my-6 */
  margin-bottom: 1.5rem; /* my-6 */
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
