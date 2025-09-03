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
