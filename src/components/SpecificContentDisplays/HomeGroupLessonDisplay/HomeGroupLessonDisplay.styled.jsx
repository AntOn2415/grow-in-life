// src/components/SpecificContentDisplays/HomeGroupLessonDisplay/HomeGroupLessonDisplay.styled.js
import styled from "styled-components";

// Основний контейнер для сторінки уроку домашньої групи
export const HomeGroupLessonDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Обгортка для заголовка та мета-інформації уроку
export const HomeGroupLessonTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    color: ${props =>
      props.theme.color}; /* Використовуємо theme.color для основного тексту заголовка */
    margin-bottom: 0.5rem;
  }
`;

// Обгортка для основного вмісту (карток, тексту тощо)
export const MainContentWrapper = styled.div`
  width: 100%;
`;

// Обгортка для текстового вмісту уроку (всередині Card)
export const HomeGroupLessonTextWrapper = styled.div`
  padding: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${props => props.theme.color}; /* Основний колір тексту */

  p {
    margin-bottom: 1em;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  ol {
    list-style-type: decimal;
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${props => props.theme.color}; /* Жирний текст залишається основним кольором */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.color};
    margin-top: 1.5em;
    margin-bottom: 0.8em;
  }
`;

// Стилізований компонент для кнопок-посилань на вірші
export const VerseButton = styled.button`
  /* Скидаємо базові стилі кнопок браузера */
  background: none;
  border: none;
  padding: 0;
  font: inherit; /* Успадковуємо шрифт від батьківського елемента */
  cursor: pointer; /* Курсор як у посилання */
  text-decoration: underline; /* Підкреслення, як у посилань */
  color: ${props => props.theme.accentColor || "blue"}; /* Колір посилання з теми (accentColor) */
  display: inline; /* Важливо, щоб кнопка вела себе як inline-елемент тексту */

  &:hover {
    color: ${props =>
      props.theme.accentBg ||
      "darkblue"}; /* Зміна кольору при наведенні (можливо, accentBg або інший колір для ховеру) */
    text-decoration: none; /* Прибираємо підкреслення при наведенні */
  }

  &:focus {
    /* ЗАВЖДИ забезпечуйте видимий індикатор фокусу для доступності! */
    outline: 2px solid ${props => props.theme.accentColor || "blue"};
    outline-offset: 2px; /* Відступ обведення від елемента */
  }

  &:active {
    color: ${props => props.theme.accentColor || "purple"}; /* Колір при активному натисканні */
  }
`;

// Якщо у вас були інші експорти, наприклад RevealCardsGrid, додайте їх сюди.
// export const RevealCardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 1.5rem;
//   margin-top: 1.5rem;
// `;
