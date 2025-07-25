// src/components/SpecificContentDisplays/SermonMetaInfo/SermonMetaInfo.js
import React from "react";
import { MetaContainer, MetaItem, DescriptionText } from "./SermonMetaInfo.styled";

export default function SermonMetaInfo({ speaker, date, theme, book, description }) {
  return (
    <MetaContainer>
      {book && (
        <MetaItem>
          Книга: <strong>{book}</strong>
        </MetaItem>
      )}
      {speaker && (
        <MetaItem>
          Спікер: <strong>{speaker}</strong>
        </MetaItem>
      )}
      {date && <MetaItem>Дата: {date}</MetaItem>}
      {theme && (
        <MetaItem>
          Тема: <strong>{theme}</strong>
        </MetaItem>
      )}
      {description && <DescriptionText>{description}</DescriptionText>}
    </MetaContainer>
  );
}
