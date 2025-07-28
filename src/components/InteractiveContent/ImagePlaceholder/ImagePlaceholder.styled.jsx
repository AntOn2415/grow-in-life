// src/components/InteractiveContent/ImagePlaceholder/ImagePlaceholder.styled.js
import styled from "styled-components";

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;
  transition: all 0.4s ease-in-out; /* Додано перехід */

  h4 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.accentColor};
    transition: color 0.4s ease-in-out; /* Додано перехід */
  }

  p {
    color: ${({ theme }) => theme.color};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 1.5rem;
    transition: color 0.4s ease-in-out, font-size 0.4s ease-in-out; /* Додано перехід */
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.4s ease-in-out; /* Додано перехід */
`;

export const ImageCaption = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.color};
  margin-top: 0.5rem;
  transition: color 0.4s ease-in-out, font-size 0.4s ease-in-out; /* Додано перехід */
`;
