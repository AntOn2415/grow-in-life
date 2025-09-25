import styled from "styled-components";

export const Section = styled.section``;

export const SectionTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.small};

  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ isCollapsed }) => (isCollapsed ? "center" : "space-between")};
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.sectionTitleHover};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxsmall};

  margin-left: ${({ isCollapsed }) => (isCollapsed ? "0" : "10px")};
`;

export const ListItem = styled.li`
  padding: ${({ theme, isCollapsed }) =>
    isCollapsed ? `${theme.spacing.xsmall} ${theme.spacing.xxsmall}` : `${theme.spacing.xsmall}`};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
  justify-content: ${({ isCollapsed, $isLesson }) =>
    isCollapsed && $isLesson ? "center" : "flex-start"};
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  box-shadow: none;

  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    transform 0.2s ease-in-out, border-color 0.25s ease-in-out;

  &:hover {
    ${({ theme }) =>
      `
      color: ${theme.colors.color};
      background-color: ${theme.colors.navItemHover};
      box-shadow: none;
    `}
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    background-color: ${theme.colors.navItemActive};
    color: ${theme.colors.color};
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out; 
  `}
`;

export const Toggle = styled.span`
  font-size: 0.7rem;
  margin-left: ${({ theme }) => theme.spacing.xsmall};
  line-height: 1;
  transition: transform 0.2s ease-in-out;
`;

export const CircularNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  border: 1px solid ${({ theme }) => theme.colors.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.colorSecondary};
  margin: 0;
  padding: 0;
  transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out;
`;

export const SectionCategoryNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0;
  padding: 0;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtn};
  }
`;
