// src/components/InteractiveContent/ImagePlaceholder/ImagePlaceholder.styled.js
import styled from "styled-components";

export const StyledFigure = styled.figure`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;
  transition: all 0.25s ease-in-out;
  display: block; // Ensures the figure element behaves like a block container
  margin: 0;
  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
  `}
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.25s ease-in-out;
`;

export const StyledFigcaption = styled.figcaption`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.color};
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;
`;
