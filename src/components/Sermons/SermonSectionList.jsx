import React from "react";
import SermonSection from "./SermonSection";

export default function SermonSectionList({ sections }) {
  return (
    <div>
      {sections.map((section, idx) => (
        <SermonSection key={idx} heading={section.heading} content={section.content} />
      ))}
    </div>
  );
}
