import React from "react";
import { HeadingsList } from "./HeadingsTooltipContent.styles";

const HeadingsTooltipContent = ({ headings, alignment }) => {
  if (!headings || headings.length === 0) {
    return <span>Немає підзаголовків</span>;
  }
  return (
    <HeadingsList alignment={alignment}>
      {headings.map(heading => (
        <li key={heading.id} style={{ marginLeft: `${(heading.level - 3) * 15}px` }}>
          <a href={`#${heading.id}`}>{heading.title}</a>
        </li>
      ))}
    </HeadingsList>
  );
};

export default HeadingsTooltipContent;
