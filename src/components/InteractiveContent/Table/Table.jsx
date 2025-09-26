// src/components/SpecificContentDisplays/Table/Table.jsx

import React, { useState, useEffect, useRef } from "react";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";
import { useInView } from "framer-motion";
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
  MobileCard,
  MobileCardRow,
  MobileCardLabel,
  MobileCardValue,
  MotionMobileCardsWrapper,
  PaginationDotsContainer,
  PaginationDot,
} from "./Table.styled";

// Допоміжні функції для перевірки типу даних
const isToken = v => typeof v === "string" || (v && typeof v === "object" && "type" in v);
const isTokenSequence = v => Array.isArray(v) && v.every(isToken);
const isParagraphs = v => Array.isArray(v) && v.some(Array.isArray);

// Хук для визначення мобільного пристрою
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const Table = ({ tableTitle, headers, rows }) => {
  const isMobile = useIsMobile();

  const carouselRef = useRef(null); // Ref для контейнера прокрутки
  const inViewRef = useRef(null); // Ref для useInView

  const isInView = useInView(inViewRef, { once: true, amount: 0.1 });

  const [activeIndex, setActiveIndex] = useState(0);

  if (!headers || !Array.isArray(headers) || !rows || !Array.isArray(rows)) return null;

  // Універсальний рендер вмісту комірки
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

  // Окремий рендер для мобільного
  const renderMobileCellContent = cell => {
    if (isParagraphs(cell)) {
      return cell.map((paragraph, i) => (
        <TableParagraph key={i}>
          <TokenRenderer tokens={paragraph} />
        </TableParagraph>
      ));
    }
    return <TokenRenderer tokens={cell} />;
  };

  // Обробник прокручування для визначення активної картки
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 1;
      // Припускаємо, що всі картки мають однакову ширину.
      const index = Math.round(scrollLeft / cardWidth);

      setActiveIndex(index);
    }
  };

  // Перехід до картки при кліку на пагінацію
  const goToCard = index => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth;
      if (cardWidth) {
        carouselRef.current.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    }
  };

  // Framer Motion Variant для імітації свайпу
  const swipeVariants = {
    initial: { translateX: 0 },
    hint: {
      translateX: [0, -20, 5, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.25, 0.5, 1],
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  if (isMobile) {
    // Мобільна версія: картки-карусель
    return (
      <StyledTableContainer ref={inViewRef}>
        {tableTitle && (
          <TableHeading>
            <TokenRenderer tokens={tableTitle} />
          </TableHeading>
        )}

        <MotionMobileCardsWrapper
          ref={carouselRef}
          onScroll={handleScroll}
          variants={swipeVariants}
          animate={isInView ? "hint" : "initial"}
        >
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
        </MotionMobileCardsWrapper>

        {/* Пагінація */}
        {rows.length > 1 && (
          <PaginationDotsContainer>
            {rows.map((_, index) => (
              <PaginationDot
                key={index}
                $isActive={index === activeIndex}
                onClick={() => goToCard(index)}
              />
            ))}
          </PaginationDotsContainer>
        )}
      </StyledTableContainer>
    );
  }

  // Десктопна версія: стандартна таблиця
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
