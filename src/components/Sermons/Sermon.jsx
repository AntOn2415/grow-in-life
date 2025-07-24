import React from "react";
import SermonSectionList from "./SermonSectionList";

export default function Sermon({ title, sections }) {
  return (
    <>
      <h1 style={{ color: "#f12d06", fontSize: "2.5rem", textAlign: "center", marginBottom: 40 }}>
        {title}
      </h1>
      <SermonSectionList sections={sections} />
    </>
  );
}
