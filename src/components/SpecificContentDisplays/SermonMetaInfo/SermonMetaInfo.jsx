// src/components/SpecificContentDisplays/SermonMetaInfo/SermonMetaInfo.js
import React from "react";
import { MetaContainer, MetaItem } from "./SermonMetaInfo.styled";

export default function SermonMetaInfo({ speaker, date, theme }) {
  return (
    <MetaContainer>
      {speaker && (
        <MetaItem>
          Спікер: <strong>{speaker}</strong>
        </MetaItem>
      )}
      {date && <MetaItem>Дата: {date}</MetaItem>}
      {theme && <MetaItem>Тема: {theme}</MetaItem>}
    </MetaContainer>
  );
}
