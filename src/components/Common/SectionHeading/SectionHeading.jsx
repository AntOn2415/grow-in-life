// src/components/Common/SectionHeading/SectionHeading.js
import React from "react";
import { StyledHeading } from "./SectionHeading.styled";

// Компонент SectionHeading
const SectionHeading = ({ as = "h3", size = "default", id, children }) => {
  return (
    <StyledHeading as={as} size={size} id={id}>
      {children}
    </StyledHeading>
  );
};

export default SectionHeading;
