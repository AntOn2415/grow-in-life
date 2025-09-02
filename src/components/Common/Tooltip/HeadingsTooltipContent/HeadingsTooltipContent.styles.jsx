// src/components/Common/Tooltip/HeadingsTooltipContent.styles.js
import styled from "styled-components";

export const HeadingsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: ${({ alignment }) => alignment};

  li {
    margin: ${({ theme }) => theme.spacing.xxsmall} 0;
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;
