// Table.jsx
import React from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import {
  StyledTableContainer,
  TableHeading,
  StyledTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableParagraph, // 👈 імпортуємо
} from "./Table.styled";

const isToken = v => typeof v === "string" || (v && typeof v === "object" && "type" in v);
const isTokenSequence = v => Array.isArray(v) && v.every(isToken);
const isParagraphs = v => Array.isArray(v) && v.some(Array.isArray);

const Table = ({ tableTitle, headers, rows }) => {
  if (!headers || !Array.isArray(headers) || !rows || !Array.isArray(rows)) return null;

  const renderCellContent = (cell, r, c) => {
    if (isParagraphs(cell)) {
      return cell.map((paragraph, i) => (
        <TableParagraph key={i}>
          <TokenRenderer tokens={paragraph} />
        </TableParagraph>
      ));
    }

    if (isTokenSequence(cell)) {
      return <TokenRenderer tokens={cell} />;
    }

    if (typeof cell === "string") {
      return <TokenRenderer tokens={cell} />;
    }

    if (cell && typeof cell === "object") {
      return <TokenRenderer tokens={cell} />;
    }

    return null;
  };

  return (
    <StyledTableContainer>
      {tableTitle && (
        <TableHeading>
          <TokenRenderer tokens={tableTitle} />
        </TableHeading>
      )}
      <StyledTable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeaderCell key={index}>
                <TokenRenderer tokens={header} />
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>
                  {renderCellContent(cell, rowIndex, cellIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default Table;
