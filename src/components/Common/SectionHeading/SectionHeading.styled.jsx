// src/components/Home/Home.styled.jsx
import styled from "styled-components";

export const StyledCard = styled.section`
  background-color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${({ theme }) => theme.borderRadius.large}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${({ theme }) => theme.shadows.medium}; // ОНОВЛЕНО: Використано shadows
  padding: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing

  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const StyledHeading = styled.h3`
  color: ${({ theme }) => theme.colors.accentColor}; // ОНОВЛЕНО: Використано theme.colors
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.xxlarge}; // ОНОВЛЕНО: Використано theme.spacing
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано theme.spacing
  line-height: 1.2;
  transition: color 0.4s ease-in-out;

  ${props =>
    props.size === "default" &&
    `
    font-size: ${props.theme.fontSizes.xlarge}; // ОНОВЛЕНО: Використано theme.fontSizes
  `}

  ${props =>
    props.size === "medium" &&
    `
    font-size: ${props.theme.fontSizes.large}; // ОНОВЛЕНО: Використано theme.fontSizes
  `}

  ${({ theme }) => theme.media.down("md")`
    margin-top: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    
    // Адаптивні розміри шрифту для мобільних
    font-size: ${({ theme }) => theme.fontSizes.large};
    
    ${props =>
      props.size === "medium" &&
      `
      font-size: ${props.theme.fontSizes.medium};
    `}
  `}

  a {
    color: ${({ theme }) => theme.colors.accentColor}; // ОНОВЛЕНО: Використано theme.colors
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;
