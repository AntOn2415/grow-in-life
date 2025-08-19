import styled from "styled-components";

// export const StyledCard = styled.section`
//   background-color: ${({ theme }) => theme.colors.background};
//   border-radius: ${({ theme }) => theme.borderRadius.large};
//   box-shadow: ${({ theme }) => theme.shadows.medium};
//   padding: ${({ theme }) => theme.spacing.large};
//   margin-bottom: ${({ theme }) => theme.spacing.large};

//   transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

//   ${({ theme }) => theme.media.down("md")`
//     padding: ${({ theme }) => theme.spacing.medium};
//     margin-bottom: ${({ theme }) => theme.spacing.medium};
//   `}
// `;

export const StyledHeading = styled.h3.attrs(props => ({
  as: props.as || "h3",
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

  // ✅ ОНОВЛЕНО: Логіка для 'small' винесена на верхній рівень
  ${props =>
    props.size === "small" &&
    `
    font-size: ${props.theme.fontSizes.medium};
    font-weight: normal;
    margin-bottom: ${props.theme.spacing.medium};
    color: ${props.theme.colors.textSecondary};
  `}

  ${({ theme }) => theme.media.down("md")`
    // Адаптивні розміри шрифту для мобільних
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    ${props =>
      props.size === "medium" &&
      `
      font-size: ${props.theme.fontSizes.medium};
    `}
    
    // ✅ ОНОВЛЕНО: Коригування розмірів для мобільних, логіка працює коректно
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
