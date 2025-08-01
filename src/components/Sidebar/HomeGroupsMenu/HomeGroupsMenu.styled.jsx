// src/Sidebar/HomeGroupsMenu/HomeGroupsMenu.styled.jsx
import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використовуємо spacing

  // Додаємо медіазапит, щоб приховати елемент на мобільних,
  // оскільки він є частиною сайдбару, який там прихований.
  ${({ theme }) => theme.media.down("md")`
    display: none;
  `}
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing
  font-size: ${({ theme }) => theme.fontSizes.small}; // ОНОВЛЕНО: Використовуємо fontSizes
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використовуємо theme.colors
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: color 0.4s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0; // ОНОВЛЕНО: Прибрано зовнішній відступ
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall}; // ДОДАНО: Невеликий проміжок між елементами списку
`;

export const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: додано горизонтальні відступи
  font-size: ${({ theme }) => theme.fontSizes.xsmall}; // ОНОВЛЕНО: Використовуємо fontSizes
  cursor: pointer;
  border-radius: ${({ theme }) =>
    theme.borderRadius.small}; // ОНОВЛЕНО: Використовуємо borderRadius
  text-align: left;
  width: 100%; // ДОДАНО: елемент займає всю ширину
  font-weight: 500; // ОНОВЛЕНО: встановлено фіксовану вагу шрифту, щоб уникнути зміщення

  // Дефолтний вигляд без фону і рамки
  color: ${({ theme }) => theme.colors.color};
  background-color: transparent;
  border: 1px solid transparent;
  box-shadow: none;

  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) =>
      theme.colors.hoverBg}; // ОНОВЛЕНО: більш тонкий ефект наведення
    box-shadow: none;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    background-color: ${theme.colors.accentBg}; // ОНОВЛЕНО: Використано accentBg для кращого контрасту
    color: ${theme.colors.accentColor}; // ОНОВЛЕНО: Колір тексту для кращого контрасту
    font-weight: 500; // ОНОВЛЕНО: Фіксована вага шрифту

    &:hover {
      background-color: ${theme.colors.accentBg}; // Зберігаємо той самий фон при наведенні
      color: ${theme.colors.accentColor};
    }
  `}
`;

export const Toggle = styled.span`
  font-size: 1.2rem;
  margin-left: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використовуємо spacing
  line-height: 1;
  transition: transform 0.2s ease-in-out;
`;
