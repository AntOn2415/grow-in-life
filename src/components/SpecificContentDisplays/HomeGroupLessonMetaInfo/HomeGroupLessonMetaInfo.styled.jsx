import styled from "styled-components";

export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};

  dt {
    color: ${({ theme }) => theme.colors.metaKey};
    font-weight: normal;
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.metaValue};
    font-weight: bold;
  }
`;

export const LessonDetails = styled.dl`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.colorSecondary};
  margin: 0 auto ${({ theme }) => theme.spacing.small};
  max-width: 500px;

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  `}
`;

export const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(${({ theme }) => theme.spacing.xsmall} / 2);

  li {
    background-color: ${({ theme }) => theme.colors.tagBg};
    color: ${({ theme }) => theme.colors.tagColor};
    padding: 4px 8px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
