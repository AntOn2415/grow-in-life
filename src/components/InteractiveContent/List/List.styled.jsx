// src/components/InteractiveContent/List/List.styled.js
import styled from "styled-components";

export const StyledList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.medium};

  ${({ theme }) => theme.media.down("sm")`
    padding-left: ${({ theme }) => theme.spacing.large};
  `}
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

// Контейнер для іконки та тексту
export const ListItemContent = styled.div`
  display: flex;
  // ✅ Змінюємо вирівнювання на baseline
  align-items: baseline;
  width: 100%;
`;

export const BulletIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: 0.5em;

  // ✅ Повертаємо transform, щоб точно підігнати позицію іконки до тексту
  transform: translateY(-0.1em);
`;

// ✅ Новий глобальний стиль для елементів всередині `ListItemContent`
export const ListText = styled.div``;
