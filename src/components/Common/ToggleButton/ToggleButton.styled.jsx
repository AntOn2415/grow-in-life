// src/components/Common/ToggleButton/ToggleButton.styled.js
import styled from "styled-components";

export const StyledToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xxsmall}; // ОНОВЛЕНО: Використано theme.spacing

  // Колір кнопки залежить від isActive, використовуючи кольори з теми
  color: ${props =>
    props.isActive
      ? props.theme.colors.accentColor
      : props.theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors

  // Переходи вже були, це чудово
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: ${props => (props.isActive ? "rotate(180deg)" : "rotate(0deg)")};

  &:hover {
    // Колір при наведенні також залежить від isActive та теми
    color: ${props =>
      props.isActive
        ? props.theme.colors.navActiveHover || props.theme.colors.navActive
        : props.theme.colors
            .borderColor}; // ОНОВЛЕНО: Використано theme.colors та додано hover-ефект
  }
`;
