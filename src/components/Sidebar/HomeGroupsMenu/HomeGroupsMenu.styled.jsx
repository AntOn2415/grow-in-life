import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 16px;
  // Не має theme-залежних властивостей, які потребують transition.
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 15px;
  // Колір цього заголовка буде успадкований від батьківського компонента (наприклад, SidebarWrapper),
  // де вже є transition: color 0.4s ease-in-out;. Тому тут окремо його додавати не потрібно.
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
  // Не має theme-залежних властивостей, які потребують transition.
`;

export const ListItem = styled.li`
  padding: 4px 0 4px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.color}; // Колір тексту елемента списку з теми

  // ДОДАНО: Якщо елементи списку інтерактивні
  cursor: pointer;

  // ДОДАНО: Плавні переходи для кольору тексту та фону (для hover)
  transition: color 0.4s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.hoverBg}; // Колір фону при наведенні
    // Якщо потрібно, щоб і колір тексту змінювався при наведенні, додайте:
    // color: ${({ theme }) => theme.accentColor};
  }
`;
