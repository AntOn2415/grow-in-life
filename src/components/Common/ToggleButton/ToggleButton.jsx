// src/components/Common/ToggleButton/ToggleButton.js
import React from "react";
import { StyledToggleButton } from "./ToggleButton.styled";

export default function ToggleButton({ isActive, onClick }) {
  return (
    <StyledToggleButton onClick={onClick} isActive={isActive}>
      {isActive ? "▲" : "▼"} {/* Можете використовувати іконки чи інший текст */}
    </StyledToggleButton>
  );
}
