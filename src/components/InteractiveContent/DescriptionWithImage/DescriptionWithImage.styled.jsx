import styled from "styled-components";

export const DescriptionWithImageContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  .content-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.medium};

    ${({ theme }) => theme.media.up("md")`
      flex-direction: ${({ imagePosition }) => (imagePosition === "left" ? "row-reverse" : "row")};
      align-items: flex-start;
    `}
  }
`;

export const TextContentWrapper = styled.p`
  flex: 2;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.color};
  transition: color 0.25s ease-in-out;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.accentColor};
    transition: color 0.25s ease-in-out;
  }

  ${({ theme }) => theme.media.up("md")`
    padding-right: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  padding: ${({ theme }) => theme.spacing.small};
  padding-top: 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.extraSmall};
  max-width: 100%;
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  ${({ theme }) => theme.media.up("md")`
    max-width: 45%;
  `}
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

export const ImageCaption = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textColorLight};
  line-height: 1.4;
  transition: color 0.25s ease-in-out;
`;
