import styled from "styled-components";

export const Section = styled.div`
  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const SectionTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "space-between")};
  transition: color 0.4s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.sectionTitleHover}; // Змінити тут
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxsmall};

  // margin-left для вкладених списків
  margin-left: ${({ $collapsed }) => ($collapsed ? "0" : "10px")};
`;

export const ListItem = styled.li`
  padding: ${({ theme, $collapsed }) =>
    $collapsed ? `${theme.spacing.xsmall} ${theme.spacing.xxsmall}` : `${theme.spacing.xsmall}`};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  // ОНОВЛЕНО: Робимо ListItem flex-контейнером
  display: flex;
  align-items: center;

  // ОНОВЛЕНО: Центруємо вміст, якщо сайдбар згорнутий і це урок (містить CircularNumber)
  // Якщо це скорочена назва книги, вона залишатиметься зліва
  justify-content: ${({ $collapsed, $isLesson }) =>
    $collapsed && $isLesson ? "center" : "flex-start"};

  width: 100%;
  color: ${({ theme }) => theme.colors.color};
  background-color: transparent;
  border: 1px solid transparent;
  box-shadow: none;

  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) => theme.colors.navItemHover}; // Змінити тут
    box-shadow: none;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    background-color: ${theme.colors.navItemActive}; // Змінити тут
    color: ${theme.colors.color};
  `}
`;

export const Toggle = styled.span`
  font-size: 1.2rem;
  margin-left: ${({ theme }) => theme.spacing.xsmall};
  line-height: 1;
  transition: transform 0.2s ease-in-out;
`;

export const CircularNumber = styled.span`
  display: inline-flex; /* Повертаємо назад inline-flex */
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.colorSecondary};
  margin: 0; /* Прибираємо margin: auto */
  padding: 0;
`;

export const SectionCategoryNumber = styled.span`
  display: inline-flex; /* Повертаємо назад inline-flex */
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0; /* Прибираємо margin: auto */
  padding: 0;
`;
