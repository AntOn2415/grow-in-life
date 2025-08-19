// src/components/InteractiveContent/List/List.styled.js
import styled from "styled-components";

export const StyledList = styled.ul`
  padding-left: 20px;
  list-style-type: none;
  margin-left: 0;
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};

  // ✅ Стилі для вирівнювання іконки та тексту
  display: flex;
  align-items: baseline;
`;

export const BulletIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: 0.5em;
  transform: translateY(-0.1em);
`;

export const ListText = styled.div`
  display: flex;
  flex-direction: column;
`;
