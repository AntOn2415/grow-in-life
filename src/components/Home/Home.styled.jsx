// src/components/Home/Home.styled.jsx
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.medium};

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.color};

  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    padding: ${({ theme }) => theme.spacing.small};
    min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeightMobile});
  `}
`;

export const LogoImage = styled.img`
  width: 250px; /* Великий розмір для головної сторінки */
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.large}; /* Відступ від заголовка */
  transition: opacity 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    width: 190px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color};
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  ${({ theme }) => theme.media.down("md")`
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  `}
`;

export const StyledSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.5;
  transition: color 0.25s ease-in-out;

  ${({ theme }) => theme.media.down("md")`
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  `}
`;
