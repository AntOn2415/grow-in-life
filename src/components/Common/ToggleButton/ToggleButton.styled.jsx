// src/components/Common/ToggleButton/ToggleButton.styled.js
import styled from "styled-components";

export const StyledToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 5px;

  // Колір кнопки залежить від isActive, використовуючи кольори з теми
  color: ${props =>
    props.isActive
      ? props.theme.accentColor
      : props.theme.color}; /* Активний: акцентний колір; Неактивний: основний колір тексту */

  // Переходи вже були, це чудово
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: ${props => (props.isActive ? "rotate(180deg)" : "rotate(0deg)")};

  &:hover {
    // Колір при наведенні також залежить від isActive та теми
    // Можна використовувати theme.navActive або додати спеціальний toggleHoverColor до вашої теми
    color: ${props =>
      props.isActive
        ? props.theme.navActive
        : props.theme
            .borderColor}; /* Приклад: Активний hover: колір navActive; Неактивний hover: колір borderColor */
  }
`;
