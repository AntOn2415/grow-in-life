import styled from "styled-components";

export const StyledTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: ${({ theme }) => theme.spacing.large} 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  @media (max-width: 767px) {
    display: none;
  }
`;

export const TableHeading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.color};
  transition: color 0.25s ease-in-out;
`;

export const TableTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.headingColor};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.tableHeaderText};
  text-align: left;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
`;

export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.tableHeaderBackground};
  color: ${({ theme }) => theme.colors.color};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableEvenRowBackground};
  }
  transition: background-color 0.25s ease-in-out;
`;

export const TableHeaderCell = styled.th`
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-weight: bold;
  transition: border-color 0.25s ease-in-out;
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  vertical-align: top;
  transition: border-color 0.25s ease-in-out;
`;
export const TableParagraph = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xsmall} 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Мобільна обгортка для карток-каруселі
export const MobileCardsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.xsmall};
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

// Одна картка
export const MobileCard = styled.div`
  min-width: 92vw;
  max-width: 92vw;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spacing.small} 0;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  margin: 0 ${({ theme }) => theme.spacing.xsmall};
`;

// Рядок у картці
export const MobileCardRow = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  min-height: 44px;
  &:last-child {
    border-bottom: none;
  }
`;

// Підпис (заголовок стовпця)
export const MobileCardLabel = styled.div`
  width: 42%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tableHeaderText};
  background: ${({ theme }) => theme.colors.cardBackground};
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-word;
  min-height: 44px;
`;

// Значення (дані)
export const MobileCardValue = styled.div`
  width: 58%;
  color: ${({ theme }) => theme.colors.color};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-word;
  min-height: 44px;

  & > p {
    margin: 0 0 ${({ theme }) => theme.spacing.xsmall} 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
