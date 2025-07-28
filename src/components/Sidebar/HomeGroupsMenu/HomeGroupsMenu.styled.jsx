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
  padding: 4px 0 4px 0;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  text-align: left; /* ✅ ДОДАНО: Вирівнюємо текст по лівому краю за замовчуванням */

  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

  color: ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.hoverBg};

  &:hover {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background || theme.bodyBg};
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
