// src/Sidebar/SermonsMenu/SermonsMenu.styled.jsx

import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 16px;
`;
export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  transition: background 0.1s;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.navActive};
    color: ${({ theme }) => theme.background};
    outline: none;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  /* Стилі перенесені з інлайн-стилів */
  cursor: pointer;
  background: none;
  border: none;
  padding: 0; /* Замінює попередній padding */
  color: #465362; /* Замінює колір з теми для цього елемента */
  font: inherit; /* Успадковує всі властивості шрифту від батьківського елемента */
  text-align: left;
  display: block;
  width: 100%;

  /* Стилі, які були вже в ListItem, зберігаємо */
  font-size: 14px; /* Якщо font: inherit встановлює font-size на inherit, то цей рядок перезапише його на 14px */
`;

export const Toggle = styled.span`
  color: ${({ theme }) => theme.buttonBg};
  font-size: 16px;
  margin-left: auto;
  pointer-events: none;
`;
