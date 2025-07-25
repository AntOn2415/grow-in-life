import React from "react";
import SermonSectionList from "./SermonSectionList";

export default function Sermon({ title, sections }) {
  return (
    <>
      <h1>{title}</h1>

      <SermonSectionList sections={sections} />
    </>
  );
}
