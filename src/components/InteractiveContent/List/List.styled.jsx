// src/components/InteractiveContent/List/List.styled.js
import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: disc; // Або circle, square, none
  padding-left: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.color};
`;

export const StyledListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;
