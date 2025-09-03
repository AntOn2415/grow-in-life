// src/components/InteractiveContent/List/List.js
import React from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import { StyledList, StyledListItem, BulletIcon, ListText } from "./List.styled";
import { FaCircle } from "react-icons/fa";

const List = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={index}>
          <BulletIcon>
            <FaCircle />
          </BulletIcon>
          <ListText>
            <TokenRenderer tokens={item} />
          </ListText>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
