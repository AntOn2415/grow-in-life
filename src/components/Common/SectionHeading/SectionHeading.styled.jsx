import styled from "styled-components";

export const StyledHeading = styled.h3`
  color: ${({ theme }) => theme.accentColor}; // ✅ Змінив на accentColor для заголовків секцій
  font-weight: bold; /* Залишаємо, якщо не в темі */
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  ${props =>
    props.size === "default" &&
    `
    font-size: ${props.theme.fontSizes.xlarge}; // ✅ З теми
  `}

  ${props =>
    props.size === "medium" &&
    `
    font-size: ${props.theme.fontSizes.large}; // ✅ З теми
  `}

  a {
    color: ${({ theme }) => theme.accentColor}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
