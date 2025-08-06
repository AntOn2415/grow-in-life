// src/components/Home/Home.styled.jsx
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(
    100vh - ${({ theme }) => theme.spacing.headerHeight}
  ); // ОНОВЛЕНО: Використано змінну з теми для висоти хедера
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано theme.spacing

  background-color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використано theme.colors
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors

  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  // Медіазапит для мобільних
  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.small};
    min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeightMobile});
  `}
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing

  // Медіазапит для мобільних
  ${({ theme }) => theme.media.down("md")`
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  `}
`;

export const Link = styled.a`
  color: ${({ theme }) =>
    theme.colors.accentColor}; // ОНОВЛЕНО: Використано більш загальний theme.colors.accentColor
  text-decoration: underline;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accentColorHover}; // ОНОВЛЕНО: Додано hover-ефект
  }
`;
