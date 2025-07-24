// src/components/Common/ToggleButton/ToggleButton.styled.js
import styled from "styled-components";

export const StyledToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  color: ${props => (props.isActive ? "#e63946" : "#a8dadc")}; /* Приклад кольорів */
  cursor: pointer;
  padding: 5px;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: ${props => (props.isActive ? "rotate(180deg)" : "rotate(0deg)")};

  &:hover {
    color: ${props =>
      props.isActive ? "#c9182a" : "#81b214"}; /* Приклад кольорів при наведенні */
  }
`;
