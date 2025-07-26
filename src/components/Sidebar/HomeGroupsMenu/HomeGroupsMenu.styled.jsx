// src/Sidebar/HomeGroupsMenu/HomeGroupsMenu.styled.jsx
import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 15px;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: color 0.4s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
`;

export const ListItem = styled.li`
  padding: 4px 0 4px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

  // ✅ ЗМІНЕНО: Сталий колір тексту тепер accentColor
  color: ${({ theme }) => theme.accentColor};
  // ✅ ЗМІНЕНО: Сталий колір фону тепер hoverBg
  background: ${({ theme }) => theme.hoverBg};

  &:hover {
    // ✅ ЗМІНЕНО: Колір тексту при ховері тепер theme.color
    color: ${({ theme }) => theme.color};
    // ✅ ЗМІНЕНО: Колір фону при ховері тепер theme.background (або theme.bodyBg)
    background: ${({ theme }) =>
      theme.background ||
      theme.bodyBg}; // Використовуйте theme.background або theme.bodyBg залежно від вашої теми
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    background: ${({ theme }) => theme.accentBg};
    color: ${({ theme }) => theme.buttonColor};
    font-weight: bold;

    &:hover {
      background: ${({ theme }) => theme.accentBgHover || theme.accentBg};
      color: ${({ theme }) => theme.buttonColor};
    }
  `}
`;

export const Toggle = styled.span`
  font-size: 1.2rem;
  margin-left: 8px;
  line-height: 1;
  transition: transform 0.2s ease-in-out;
`;
