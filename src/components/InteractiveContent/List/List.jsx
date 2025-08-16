// src/components/InteractiveContent/List/List.js
import React from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import { StyledList, StyledListItem, BulletIcon, ListItemContent, ListText } from "./List.styled"; // Додано ListText
import { FaCircle } from "react-icons/fa";

const List = ({ title, items, heading }) => {
  return (
    <>
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

      <StyledList>
        {items.map((item, index) => (
          <StyledListItem key={index}>
            <ListItemContent>
              <BulletIcon>
                <FaCircle />
              </BulletIcon>
              <ListText>
                {" "}
                {/* ✅ Новий контейнер для тексту */}
                <TokenRenderer tokens={item} />
              </ListText>
            </ListItemContent>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default List;
