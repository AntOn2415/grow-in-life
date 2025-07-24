import React from "react";
import { StyledSectionTitle } from "./SectionHeading.styled";

export default function SectionHeading({ as, size, alignment, color, bottomMargin, children }) {
  return (
    <StyledSectionTitle
      as={as}
      size={size}
      alignment={alignment}
      color={color}
      bottomMargin={bottomMargin}
    >
      {children}
    </StyledSectionTitle>
  );
}
