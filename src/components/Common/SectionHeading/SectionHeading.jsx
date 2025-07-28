// src/components/Common/SectionHeading/SectionHeading.js
import React from "react";
import { StyledHeading } from "./SectionHeading.styled";

// Компонент SectionHeading
const SectionHeading = ({ as = "h3", size = "default", children }) => {
  return (
    <StyledHeading as={as} size={size}>
      {children} {/* ✅ ВИПРАВЛЕНО: Рендеримо children безпосередньо */}
    </StyledHeading>
  );
};

export default SectionHeading;
