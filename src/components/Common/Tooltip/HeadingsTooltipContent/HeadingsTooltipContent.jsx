import React from "react";
import { HeadingsList } from "./HeadingsTooltipContent.styles";

const HeadingsTooltipContent = ({ headings, alignment }) => {
  if (!headings || headings.length === 0) return <span>Немає підзаголовків</span>;

  const renderHeadings = (items, indent = 0) =>
    items.map(heading => (
      // Прибираємо style={{ marginLeft: `${indent}px` }} з <li>
      <li key={heading.id}>
        <a href={`#${heading.id}`}>{heading.title}</a>
        {heading.children && heading.children.length > 0 && (
          // Застосовуємо відступ до вкладеного <ul>
          <ul style={{ marginLeft: `${indent + 15}px` }}>
            {/* Наступний рівень вкладеності починається з 0, оскільки відступ вже встановлено на <ul> */}
            {renderHeadings(heading.children, 0)}
          </ul>
        )}
      </li>
    ));

  return <HeadingsList alignment={alignment}>{renderHeadings(headings)}</HeadingsList>;
};

export default HeadingsTooltipContent;
