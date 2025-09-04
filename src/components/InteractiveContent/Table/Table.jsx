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
  TableParagraph,
  MobileCardsWrapper,
  MobileCard,
  MobileCardRow,
  MobileCardLabel,
  MobileCardValue,
} from "./Table.styled";

const isToken = v => typeof v === "string" || (v && typeof v === "object" && "type" in v);
const isTokenSequence = v => Array.isArray(v) && v.every(isToken);
const isParagraphs = v => Array.isArray(v) && v.some(Array.isArray);

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const Table = ({ tableTitle, headers, rows }) => {
  const isMobile = useIsMobile();

  if (!headers || !Array.isArray(headers) || !rows || !Array.isArray(rows)) return null;

  // універсальний рендер для десктопу
  const renderCellContent = cell => {
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

  // окремий рендер для мобільного, щоб рядок не розбивався на параграфи
  const renderMobileCellContent = cell => {
    if (isParagraphs(cell)) {
      // Якщо масив параграфів — рендеримо як параграфи
      return cell.map((paragraph, i) => (
        <TableParagraph key={i}>
          <TokenRenderer tokens={paragraph} />
        </TableParagraph>
      ));
    }
    // Якщо рядок або масив токенів — рендеримо як один блок (без <p>)
    return <TokenRenderer tokens={cell} />;
  };

  if (isMobile) {
    return (
      <StyledTableContainer>
        {tableTitle && (
          <TableHeading>
            <TokenRenderer tokens={tableTitle} />
          </TableHeading>
        )}
        <MobileCardsWrapper>
          {rows.map((row, rowIndex) => (
            <MobileCard key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <MobileCardRow key={cellIndex}>
                  <MobileCardLabel>
                    <TokenRenderer tokens={header} />
                  </MobileCardLabel>
                  <MobileCardValue>
                    {renderMobileCellContent(row[cellIndex], rowIndex, cellIndex)}
                  </MobileCardValue>
                </MobileCardRow>
              ))}
            </MobileCard>
          ))}
        </MobileCardsWrapper>
      </StyledTableContainer>
    );
  }

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
