// src/components/InteractiveContent/List/List.js
import React from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import { StyledList, StyledListItem } from "./List.styled";

// Компонент для рендерингу списку
const List = ({ title, items, heading }) => {
  return (
    <>
      {/* Рендеримо заголовок, якщо він є */}
      {(title || heading) && (
        <SectionHeading as={heading ? "h4" : "h3"} size={heading ? "medium" : "default"}>
          {title && <TokenRenderer tokens={title} />}
          {heading && (
            <span style={{ display: "block" }}>
              <TokenRenderer tokens={heading} />
            </span>
          )}
        </SectionHeading>
      )}

      {/* Рендеримо сам список */}
      <StyledList>
        {items.map((item, index) => (
          <StyledListItem key={index}>
            <TokenRenderer tokens={item} />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default List;
