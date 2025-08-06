// src/components/InteractiveContent/ImagePlaceholder/ImagePlaceholder.styled.js
import styled from "styled-components";

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використано theme.colors
  border: 1px solid ${({ theme }) => theme.colors.borderColor}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing
  margin: ${({ theme }) => theme.spacing.large} 0; // ОНОВЛЕНО: Використано spacing
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;
  transition: all 0.25s ease-in-out;

  // Медіазапит для мобільних
  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.small};
    margin: ${({ theme }) => theme.spacing.medium} 0;
  `}

  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використано spacing
    color: ${({ theme }) => theme.colors.accentColor}; // ОНОВЛЕНО: Використано theme.colors
    transition: color 0.25s ease-in-out;

    // Медіазапит для мобільних
    ${({ theme }) => theme.media.down("sm")`
      font-size: ${({ theme }) => theme.fontSizes.medium};
    `}
  }

  p {
    color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing
    transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;

    // Медіазапит для мобільних
    ${({ theme }) => theme.media.down("sm")`
      font-size: ${({ theme }) => theme.fontSizes.small};
      margin-bottom: ${({ theme }) => theme.spacing.small};
    `}
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing.small}; // ОНОВЛЕНО: Використано spacing
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.25s ease-in-out;
`;

export const ImageCaption = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors
  margin-top: ${({ theme }) => theme.spacing.xsmall}; // ОНОВЛЕНО: Використано spacing
  transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;
`;
