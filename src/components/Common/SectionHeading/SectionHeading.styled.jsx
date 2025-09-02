import styled from "styled-components";

export const StyledHeading = styled.h3.attrs(props => ({
  as: props.as || "h3",
  id: props.id,
}))`
  color: ${({ theme }) => theme.colors.accentColor};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  line-height: 1.2;
  transition: color 0.25s ease-in-out;

  ${props =>
    props.size === "default" &&
    `
    font-size: ${props.theme.fontSizes.xlarge};
  `}

  ${props =>
    props.size === "medium" &&
    `
    font-size: ${props.theme.fontSizes.large};
  `}

  ${props =>
    props.size === "small" &&
    `
    font-size: ${props.theme.fontSizes.medium};
    font-weight: normal;
    margin-bottom: ${props.theme.spacing.medium};
    color: ${props.theme.colors.textSecondary};
  `}

  ${({ theme }) => theme.media.down("md")`
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    ${props =>
      props.size === "medium" &&
      `
      font-size: ${props.theme.fontSizes.medium};
    `}
    
    ${props =>
      props.size === "small" &&
      `
      font-size: ${props.theme.fontSizes.small};
      margin-bottom: ${props.theme.spacing.small};
    `}
  `}

  a {
    color: ${({ theme }) => theme.colors.accentColor};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;
