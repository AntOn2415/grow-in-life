// src/components/InteractiveContent/Table/Table.jsx
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
} from "./Table.styled";

const Table = ({ tableTitle, headers, rows }) => {
  if (!headers || !Array.isArray(headers) || !rows || !Array.isArray(rows)) {
    return null;
  }

  return (
    <StyledTableContainer>
      {tableTitle && (
        <TableHeading>
          <TokenRenderer tokens={tableTitle} />
        </TableHeading>
      )}{" "}
      {/* ✅ Використовуємо TableHeading */}
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
                  <TokenRenderer tokens={cell} />
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
